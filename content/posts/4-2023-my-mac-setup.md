---
layout: content
title: 2023 我的生产力工具
date: 2023-10-16
tag: Share
image:
  src: /images/0-cover-2023-my-mac-setup.webp
  alt: A cup of dirty coffee and MacBook Pro
---

转眼间，2023 年已经逐渐接近尾声了，在这篇博客中我想分享和记录一下我的生产力工具。我使用的软件、我的开发环境、我部署的云服务……

## 我的硬件设施

- 主力：MacBook Pro M2 Pro 14 寸 16G
- 键盘：HHKB Professional BT、少数派 x Keychron K3
- 显示器：DELL U2723QE 4K、Kuycon P27UB
- 鼠标：罗技 MX Master 3s for Mac
- 耳机：AirPods2、索尼 WH-1000XM4
- 音箱：HomePod mini
- 麦克风：Blue Yeti X
- 打印机：爱普生 L3255

今年升级了新的笔记本电脑（女朋友给买的，我知道你想问），新的电脑带给我最直观的感受就是凉凉的和静悄悄。我是从 Inter 芯片切换到 Apple 芯片，所以这种感受就更加强烈了。

我以前习惯于把笔记本电脑合上盖子外接显示屏，今年我将外接显示器作为扩展显示器后，一个屏幕查阅文档，一个屏幕分屏代码和实时预览，真的非常舒适。

现在非常喜欢使用自带键盘以致于 HHKB 都已经被我放在一边，键盘手感和舒适程度是一种主观感受，我没办法描述具体原因。（记得以前还说自己的 HHKB 要传当传家宝的）。

将自己的 DELL U2723QE 显示器给女朋友连接 Mac mini 后，购置了 Kuycon 27 寸 4k 雾面显示器，显示器效果出乎意料的满意，个人觉得性价比还是很高的。

忽然发现有一种差生文具多的即视感……

## macOS 系统偏好设置

- 外观：深色模式 (偏爱)
- 桌面与程序坞：自动隐藏和显示、不显示最近使用、点按墙纸仅在台前调度中、在桌面上不显示小组件
- 墙纸和屏幕保护：格陵兰大冰川（是真的好看）
- 触控 ID 与密码：开启 Apple Watch 解锁
- 互联网账户：添加谷歌邮箱和 QQ 邮箱
- 键盘：添加常用自定义短语
- 鼠标：安装 Logi Options+ 来控制 MX Master
- 打印机：安装驱动后，选择打印机

## 我使用的软件

### 离不开的 Homebrew

**Homebrew** 是我主要使用的包管理工具，其安装和更新软件的方式更符合程序员的直觉。4.0 版本的更新也让其速度变快了，体积变小了，软件存储信息由 git 变成了 JSON API。想要了解更多可以看 [这篇文章](https://sspai.com/post/78587)。

安装 Homebrew 只需在终端中运行

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

几个 Homebrew 常用的命令

```bash
brew update # 更新自己
brew install chrome --cask # 安装软件
brew outdated --greedy # 查看软件是否更新
brew upgrade chrome # 升级软件
brew uninstall chrome # 删除软件
brew reinstall chrome # 重新安装
```

Homebrew 安装字体也非常方便

```bash
brew tap homebrew/cask-fonts # 添加 font 源
brew install font-hack-nerd-font # 安装字体
```

当你想要安装一些软件的特殊版本（例如开发版）时，你也可以 [在这里](https://github.com/Homebrew/homebrew-cask-versions/tree/master) 查找安装

```bash
brew tap homebrew/cask-versions # 添加特殊版本源
brew install google-chrome-dev --cask
```

### 我使用的浏览器

我使用 Safari 作为日常默认浏览器，使用 Chrome Dev 作为开发浏览器。在这之前我使用了很长一段时间的 Arc，想要了解更多可以查看我的另一篇博客 [2023 我在用什么浏览器](https://www.52chinaweb.com/posts/6-2023-my-browser-setup)

### 我安装的软件

- ClashX Pro 代理工具
- Chrome Dev 开发版本可以测试最新的特性，作为我的开发浏览器使用
- Safari 默认浏览器，看视频、查资料。
- Warp 默认终端
- Raycast 快速启动器，丰富的插件替代了我很多第三方软件。
- Visual Studio Code 主力代码编辑器
- WebStorm 查看大型项目（源码）使用 WebStorm
- PyCharm Python 代码编辑器
- 滴答清单 主要使用的任务规划软件，开通了会员，规划了我的所有任务和习惯。
- 微信开发者工具
- NetNewsWire 开源的 RSS 阅读器，配合我自己写的 [主题](https://github.com/ChangJun2019/elegant-nnw)，日常浏览。
- Spotify 日常听歌、听播客
- Telegram 跟踪各种工具动态，设置机器人自动通知。
- 阿里云盘 主力网盘工具，使用 [Ali 云盘 Pro](https://aliyundrive.pro/auth/login) 自动每日签到。
- 微信 日常交流工具
- Figma 我的画图工具
- ImageOptim 图像压缩工具
- Keka 压缩工具
- Microsoft 365 Office 常用工具
- Obsidian 主力知识库应用，记笔记，写博客。
- OrbStack 速度更快的 Docker 启动工具
- PictureView 图片预览工具
- Shottr 截图工具
- Bob 最好用的 Mac 翻译工具，开通了 Pro 版本。
- Bitwarden 我主要使用的跨平台密码管理工具
- Draw Things 非常好用的 AI 画图工具，偶尔会尝试一下感兴趣的模型。
- Input Source Pro 自动切换输入法软件，非常好用。
- Klack 我最爱的软件，键盘输入提示音，输入反馈体验很好，希望再多增加一些音效。
- Logi Options+ 罗技鼠标手势设置
- SCIMKiller 常驻菜单栏一键可以杀死造成卡顿的中文输入法
- Battery 管理电池健康，将电池限制在 80%

可以查看我的 [Brewfile](https://github.com/ChangJun2019/my-mac-setup-config/blob/main/Brewfile)。

## 我的开发环境设置

### 终端设置

![我的终端显示](/images/4-my-terminal-appearance.png)

从 Warp 发布之后我就将其作为我的默认终端了，这个基于 Rust 的终端给我的感觉就是简洁、迅速、便利、智能。

如果你感兴趣，可以看一下这篇文章：[Warp：是时候改变你的命令行工具了](https://sspai.com/post/79262) 

通过 Oh My ZSH 管理 zsh 的插件，Starship 来做自定义提示。

在 Warp 中使用 Starship 会有一些兼容 [问题](https://docs.warp.dev/features/prompt#starship) ，如果你想跟我拥有一样的设置，可以这样做。

```bash
# 安装 starship
brew install starship
```

安装成功之后，配置 `.zshrc` 文件

```bash
# starship setup shell
eval "$(starship init zsh)"

# fix warp terminal 
if [[ $TERM_PROGRAM == "WarpTerminal" ]]; then
export STARSHIP_CONFIG=/Users/xx/.config/warp_starship.toml
fi
# starship end
```

当终端是 Warp 时候，设置 starship 的配置文件路径。因此需要在 `.config` 目录中创建 `warp_starship.toml` 配置文件。

```bash
"$schema" = 'https://starship.rs/config-schema.json'

[line_break]
disabled = true
```

你可以 [在这里](https://github.com/ChangJun2019/my-mac-setup-config/blob/main/warp_starship.toml) 查看我的完整配置，你也可以查看 Starship 的官方文档来自定义修改配置。

打开 Warp 设置，在 Appearance 中将 Prompt 修改成 PS1。

### 我使用的命令行工具

- caddy 默认使用 HTTPS 的 Web 服务器
- commitizen Git commit 工具
- eza 基于 Rust ls 替代
- fd 基于 Rust find 替代
- neofetch 命令行系统信息工具
- onefetch 命令行 Git 信息工具
- zoxide 命令行 jump 工具
- ni 前端工具，使用正确（npm | yarn | pnpm | bun）包管理工具，简化命令
- taze 前端工具，升级依赖
- bumpp 前端工具，升级项目版本号

### 前端开发环境

使用 fnm 管理 NodeJS 版本

```bash
brew install fnm
eval "$(fnm env --use-on-cd)" # add to .zshrc
fnm list-remote # 查看所有的 Node 版本
fnm list # 查看当前系统安装的 Node 版本
fnm install v21.0.0 # 安装指定版本 Node
fnm uninstall v21.0.0 # 卸载指定版本
fnm use v21.0.0 # 使用指定版本
fnm default v21.0.0 # 设置默认 Node 版本
```

通过 corepack 安装 pnpm

```bash
corepack enable
corepack prepare pnpm@latest --activate
```

![我的 vscode 外观](/images/4-vscode-appearance.png)

使用 Visual Studio Code 和 WebStorm 作为代码编辑器。可以 [在这里](https://github.com/ChangJun2019/my-mac-setup-config/tree/main/.vscode) 查看我的 vscode 扩展和设置。

### Python 环境设置

[pyenv](https://github.com/pyenv/pyenv#homebrew-in-macos) 是一个 Python 版本管理工具，[pyenv-virtualenv](https://github.com/pyenv/pyenv-virtualenv#installing-with-homebrew-for-macos-users)  是一个用于管理虚拟环境的 pyenv 插件。

通过 Homebrew 安装 pyenv 和 pyenv-virtualenv

```bash
brew install pyenv

# add ~/.zshrc
# pyenv
export PYENV_ROOT="$HOME/.pyenv"
command -v pyenv >/dev/null || export PATH="$PYENV_ROOT/bin:$PATH"
eval "$(pyenv init -)"
# pyenv end

brew install pyenv-virtualenv
eval "$(pyenv virtualenv-init -)" # add ~/.zshrc
```
pyenv 和 pyenv-virtualenv 常用命令

```bash
# install the specified version
pyenv install 3.12.0
# view all current versions
pyenv versions
# set version global
pyenv global 3.12.0
# view help
pyenv -h

# create a virtualenv from the current version
pyenv virtualenv ven312
# activate ven
pyenv activate ven312
```

## 我使用的云服务器

我有一台 4 核 4GB 的腾讯云轻量应用服务器，在这台服务器上我主要部署了：

- Nginx Proxy Manager 负责我的服务反向代理以及 HTTPS
- wakapi 兼容 WakaTime 代码统计服务
- Umami 网站统计
- excalidraw 白板画图工具
- Directus 数据管理系统
- Uptime Kuma 服务监控

## 总结

在这篇博客中我主要介绍了我的生产力工具，我使用的软件、我的开发环境设置和我部署的云服务。对于我自己而言，我非常喜欢折腾这些工具。「工欲善其事，必先利其器」。非常感谢那些优秀的软件开发人员，感谢开源世界，因为他们的存在，才会有这么棒的生产力工具。



