---
layout: content
title: WordPress 探索
date: 2023-10-01
tag: WordPress
image:
  src: /images/0-cover-2023-wordpress-explore.png
  alt: Gradient background, including WordPress logo
---

最近在工作时需要接触到 WordPress 以及 PHP 相关的技术栈，所以需要对这些内容稍稍探索一下。

涉及到的系统开发环境版本：

```json
{
  "system": "macOS Sonoma 14.0 (23A344)",
  "wordpress": "6.3.1",
  "local": "Version 7.2.1+6433",
  "sage": "10.1",
  "laravel": "10.2.6",
  "herd": "1.2.2"
}
```
## WordPress

印象中最早想要制作博客的时候，首先进入眼帘的就是 WordPress，不过在我那个时候已经有很多 SSG（VuePress、Hexo）框架了，你书写 Markdown，它们负责将你写的 Markdown 文件转换成静态 HTML 文件。

到现在，如果你想制作一个博客，这已经不再是一件有困难的事情。如果你是一个非技术人员，你可以有很多无需任何代码，只需要专注创作内容的工具。[Gridea](https://gridea.dev)、[Hugo](https://gohugo.io)、[Halo](https://www.halo.run) 、[WordPress](https://wordpress.com/) 等等。如果你是技术人员，你也有很多框架很多技术任你选择，[Nuxt](https://nuxt.com)、[Next](https://nextjs.org)、[VitePress](https://vitepress.dev)、[Astro](https://astro.build)等等。

WordPress，创造发布于 2003 年，至今仍然是世界上热门流行的网站构建工具，使用 PHP 和 MySQL 构建，最新版本为 [6.3.1](https://wordpress.org/download/releases/) 。如果你对它感兴趣，可以 [在这里](https://wordpress.org/book/) 查看 WordPress 后十年的演变。（为了纪念 WordPress 诞生 20 周年）。在了解的过程我还看到了一个有意思的事情，WordPress 所有的版本名字都是以爵士音乐家的名字命名。你可以在 [在这里](https://wordpress.org/about/history/) 查看所有的版本以及版本名称。

体验过后，WordPress 有非常多的主题，可以帮你构建一个非常漂亮的网站，同时还有许多丰富的插件帮你实现你想要的功能，客观来说，我觉着是一个非常强大和稳定的工具，对于一个没有技术背景的人应该也比较好上手。

## Local

如果你想尝试 WordPress，我强烈推荐你这个工具 [Local](https://localwp.com)，支持 macOS、Windows。它可以让你非常轻松的构建 WordPress 站点，你只需要设置你想要的站点名称、PHP 版本、MySQL 版本之后它会自动帮你安装 WordPress 并非常快速的帮你启动好你的站点，甚至还有持久化 URL，SSL，一键管理等许多功能。

它真的节省了我很多需要设置环境的时间，让我可以专注于网站本身。

## Sage

[Sage](https://github.com/roots/sage) 是一个 WordPress  starter theme，使用 [Laravel Blade](https://laravel.com/docs/master/blade) 、[Bud](https://bud.js.org/) 、[Tailwind CSS](https://tailwindcss.com/)。其中 Laravel Blade 是一个模版引擎，Bug 是前端构建工具，Tailwind CSS 是 utility-first 的 CSS 框架。简单来说是一个现代化的 WordPress theme 开发模版。

[Roots](https://roots.io) 是一个现代的 WordPress 开发工具集合，Sage 也是由它们开发。

整体安装运行没遇到什么问题，Bud 也是 Roots 开发的前端构建工具，支持 SWC、esbuild 和 Babel，大致看了一下文档，构建工具该有的差不多都支持，除了对于 pnpm 还在兼容中，目前需要单独做一些设置。

对于开发 WordPress Theme 的前端部分来说，我觉着使用应该是没什么问题，Tailwind 默认支持。

## Laravel

[Laravel](https://laravel.com) 是一个 PHP Web 应用开发框架。最新版本是 [v10.2.6](https://github.com/laravel/laravel/releases/tag/v10.2.6) ，简单浏览了文档，比较惊讶的是 Laravel 默认使用 [Vite](https://vitejs.dev) 作为前端资源构建工具，并且对 Vue、React 也有方案支持。

## Herd

[Herd](https://herd.laravel.com) 是一个由 Laravel 开发的适用于 macOS 的原生 PHP 开发环境应用。我也非常强烈推荐安装它。它可以一键安装好 PHP 开发环境，速度极快（使用 PHP、nginx 和 dnsmasq 二进制文件）并且可以直观的配置 PHP 的版本。

## 总结

一次非常有趣的 WordPress 探索，从 WordPress 到 PHP 相关技术栈 Laravel，以及一些非常棒的工具，虽然最初我只是需要做 WordPress theme 的前端支持，但这无疑扩展了我的视野。非常感谢 Local、Herd 这样的工具诞生，它们解决了需要设置开发环境的负担，节省了我很多时间。










