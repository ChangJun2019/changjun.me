---
layout: content
title: Rust 入门
date: 2023-11-01
tag: Rust
image:
  src: /images/
  alt:
---

## 环境配置

Rust 的安装非常简单，仅仅需要在终端中执行以下命令，过程中按照提示选择自动或者手动安装即可。

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

[RustRover](https://www.jetbrains.com/rust/) 是一个面向 Rust 开发人员的 IDE，当然也可以在 VS Code 中安装 Rust 插件进行开发。由于初学，我选择使用开箱即用的 IDE。

在安装 Rust 的过程中也可以看到一些工具，这些工具是 Rust 生态中的重要组成部分：

- `rustc`：Rust 编译器，用于编译 Rust 代码。
- `cargo`：Rust 的包管理和构建工具，其中还内置了一个测试程序，用于执行单元测试。托管在 https://crates.io (类似于前端 npm)
- `rustup`：Rust 的版本管理工具。安装和更新 Rust 版本，支持多版本管理。（类似于 Node nvm or fnm）

## Rust 的小知识

Rust 是由 Mozilla 主导开发的系统编程语言，具有安全编程、高性能、并发好等特性。截止到 2023 年，Rust 已经在各个领域有了广泛的应用，从前端的角度来说，Rust 的高性能成为了前端构建工具的选择，例如 Turbopack、Rspack、Vite (计划中)。

Rust 最早是 Graydon Hoare 的个人项目，后由 Mozilla 接手，现由 Rust 基金会管理。2015 年 Rust 1.0.0 发布，截止到目前，Rust 共有三个版本，分别是 Rust 2015、2018、2021。Rust 每 6 周发布一个迭代版本，每 2 - 3 年发布一个新的大版本。Rust 有三个发布渠道：stable、beta、nightly

Rust 基金会是一个独立的非盈利性组织，由 AWS、Google、HUAWEI、Meta、Microsoft 组成，主要负责管理 Rust 编程语言以及生态。

## Why Rust

-

## 有用的链接

- RustRover IDE: https://www.jetbrains.com/rust/
- Cargo 官方手册：https://doc.rust-lang.org/cargo/
- Rust 基金会：https://foundation.rust-lang.org
- Rust 版本指南：https://doc.rust-lang.org/edition-guide/introduction.html
