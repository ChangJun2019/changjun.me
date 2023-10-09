---
layout: content
title: 使用 Caddy 为本地前端服务提供反向代理
image:
  src: https://file.52chinaweb.com/2023/10/nuxt-caddy-proxy.webp
  alt: Gradient background, including Caddy and Nuxt logo
date: 2023-09-20
tag: Caddy
---

最近在本地开发时，将反向代理服务从 Nginx 切换到 Caddy，在将其与 Nuxt 使用时，遇到了一点问题。

涉及到的系统开发环境版本：

```json
{
  "nuxt": "3.7.1",
  "caddy": "2.7.4",
  "system": "macOS Sonoma 14.0 (23A344)"
}
```
## Caddy 是什么

[Caddy](https://github.com/caddyserver/caddy) 是一个 由 Go 语言编写的开源  web server，与 Nginx 不同的是，它默认开启 **HTTPS**。它还可以通过 [REST API](https://caddyserver.com/docs/api)  实时动态更新和导出配置，以及拥有更好的内存安全，没有 runtime dependencies 等特性。

当然最吸引我的一点是它的**配置足够简单**。

## 通过 Nginx 反向代理

在开发本地前端项目时，有时候为了解决跨域或者保持环境域名统一，需要将一个指定域名反向代理到本地的前端服务，并开启 HTTPS。简单来说就是不通过 localhost 而是通过指定域名的方式来访问前端项目。

为了实现这个需求，在使用 Nginx 的情况下，一般需要这样做。

1. 修改本机 hosts， 将域名解析到 127.0.0.1
2. 启动 Nginx 监听 80 端口
3. 编写 nginx 配置，将域名转发到本地前端服务端口（3000或者其它）
4. 配置 SSL 

可以 [在这里](https://www.digitalocean.com/community/tools/nginx?domains.0.server.wwwSubdomain=true&domains.0.server.redirectSubdomains=false&domains.0.https.certType=custom&domains.0.php.php=false&domains.0.reverseProxy.reverseProxy=true&domains.0.routing.index=index.html&domains.0.routing.fallbackHtml=true&domains.0.routing.fallbackPhp=false&global.app.lang=zhCN) （可以在线生成 nginx 配置）查看上述生成的配置文件。

```php
server {
    listen              443 ssl http2;
    listen              [::]:443 ssl http2;
    server_name         www.example.com;
    root                /var/www/example.com/public;

    # SSL
    ssl_certificate     /etc/nginx/ssl/example.com.crt;
    ssl_certificate_key /etc/nginx/ssl/example.com.key;

    # security
    include             nginxconfig.io/security.conf;

    # logging
    access_log          /var/log/nginx/access.log combined buffer=512k flush=1m;
    error_log           /var/log/nginx/error.log warn;

    # reverse proxy
    location / {
        proxy_pass            http://127.0.0.1:3000;
        proxy_set_header Host $host;
        include               nginxconfig.io/proxy.conf;
    }

    # additional config
    include nginxconfig.io/general.conf;
}

# HTTP redirect
server {
    listen      80;
    listen      [::]:80;
    server_name example.com;
    return      301 https://www.example.com$request_uri;
}

server {
    listen      80;
    listen      [::]:80;
    server_name www.example.com;
    return      301 https://www.example.com$request_uri;
}
```

## 通过 Caddy 反向代理
[Caddyfile](https://caddyserver.com/docs/caddyfile) 是 Caddy 配置文件，在配置好本地域名解析后，使用 Caddy 实现转发仅仅只需要两行代码。

```bash
test.domain.com
reverse_proxy :3000
```

前面说过 Caddy 是 [默认开启 HTTPS](https://caddyserver.com/docs/automatic-https) 的，当你使用域名时，Caddy 会尝试获取一个 public ACME CA 证书（Let's Encrypt 或者 ZeroSSL），托管并保持所有证书的更新，自动将 HTTP 重定向到 HTTPS。

对于本地 HTTPS，Caddy 会在本地生成一个自己的证书颁发机构（CA）并使用它来签署证书，（当你需要开启时，过程中将需要你输入密码来获得权限）如果你使用的是 macOS ，你可以在钥匙串访问中查看到一个名称叫 Caddy Local Authority - 2023 ECC Root 的系统根证书。

对于本地 `localhost` ， `127.0.0.1` 等内部地址访问会自动加载本地 HTTPS，如果你在开发环境中，也可以通过修改配置来控制是否使用内部可信任的证书。我们只需要在配置文件中加入 `tls internal` ，来告诉 Caddy 我们使用内部 CA 来为站点签署证书。

```shell
test.domain.com
tls internal
reverse_proxy :3000
```

[在这里](https://caddyserver.com/docs/caddyfile/directives/tls#tls) 你可以看到 tls 其它设置，通过 tls 配置，你还可以设置使用自己的证书，配置 ACME 的邮箱地址，以及一些其它更细致的设置。

## Nuxt 服务启动

[Nuxt](https://nuxt.com/docs) 是一个使用 Vue 的全栈应用程序框架，最新的 Nuxt3 版本具体非常好的开发体验、出色的性能、完善的类型安全（零配置的 TypeScript 支持）、以及逐渐丰富的周边生态等优势。

Nuxt 默认启动在本地的 3000 端口，你可以通过 nuxt.config.ts 中的 [devServer](https://nuxt.com/docs/api/configuration/nuxt-config#devserver) option 修改你想要的启动端口以及要监听的 host。

Nuxt 中有一个我很喜欢的小功能，当你要监听的 host 设置为 `0.0.0.0`，Nuxt 会在运行终端中输出一个 ip 地址访问的二维码，这对于有移动端调试需求真的很方便。这个功能的实现来自 [unjs/uqr](https://github.com/unjs/uqr) 可以生成 ANSI, Unicode or SVG 的二维码。 （如果结合 [untun](https://github.com/unjs/untun) 可以快速的实现 web 内网穿透）。

言归正传，当我们将 Nuxt 和 Caddy 启动之后，在控制台中会有错误生成。

> Mixed Content: The page at 'https://test.domain.com/' was loaded over HTTPS, but attempted to connect to the insecure WebSocket endpoint 'ws://test.domain.com:24678/_nuxt/'. This request has been blocked; this endpoint must be available over WSS.
> 
> [vite] failed to connect to websocket (SecurityError: Failed to construct 'WebSocket': An insecure WebSocket connection may not be initiated from a page loaded over HTTPS.). 

错误是说开启了 HTTPS 之后我们的 Vite HMR 连接 WebSocket 协议错误。我们可以通过查看 [Vite HMR option](https://vitejs.dev/config/server-options.html#server-hmr) 后，增加如下配置。

```javascript
export default defineNuxtConfig({
  devServer: {
    host: '0.0.0.0',
    port: 3000,
  },

  vite: {
    server: {
      hmr: {
        clientPort: 443,
        protocol: 'wss',
      },
    },
  },
})
```

其中 `clientPort: 443` 是将客户端的 WebSocket 请求到 Caddy  上， `protocol` 设置要请求的 WebSocket 的协议为 wss（https）。这样做的目的是将客户端的 WebSocket 请求变成 https。如果此时重新启动 Nuxt，会发现页面一直在重载，那是因为还未对 Caddy 进行处理。

接下需要修改一下 Caddy 配置，设置匹配规则，匹配 WebSocket 请求，将其转发到 Vite HMR  Server 端口 24678。（[Vite HMR 默认端口](https://github.com/vitejs/vite/blob/ca34c64b1dc6e898495d655f89c300dd14758121/packages/vite/src/node/server/ws.ts#L115)）

```php
test.domain.com
@websocket {
header Connection Upgrade
header Upgrade websocket
}
tls internal
reverse_proxy @websocket :24678
reverse_proxy :3000
```

重新启动后，发现 WebSocket 已经成功连接， HMR 也正常。

## 后续

在我对项目依赖进行升级后，发现升级后的 **Nuxt 3.7.4** 版本已经不再需要设置 Vite  HMR ，Caddy 也无需再对 WebSocket 进行转发，一切默认运行正常。

运行 `npx taze major -w`  升级项目依赖到最新的稳定版本，并写入到 package.json 中。[taze](https://github.com/antfu/taze) 是一个现代化的命令行工具，用于升级项目依赖。

运行 `npx nuxi upgrade` 来升级 Nuxt 的版本。

















