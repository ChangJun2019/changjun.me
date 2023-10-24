---
layout: content
title: PostgreSQL：功能强大的开源对象关系数据库
date: 2023-10-22
tag: SQL
image:
  src: /images/0-cover-2023-postgres-sql-learn.png
  alt: 
---

PostgreSQL 是一个流行的、稳定的、功能强大的开源数据库系统。始于 1986 年，加州大学伯克利计算机科学系。拥有超过 35 年的开发经验，支持 SQL（关系）/ JSON（非关系）查询。最新版本为 [PostgreSQL 16](https://www.postgresql.org/about/news/postgresql-16-released-2715/)

## 在 Mac 中通过 Docker 运行 PostgreSQL

为了避免在我的系统本机安装东西，我更喜欢将此类服务保存在容器当中。这样可以做到更好的控制（随用随停随删除）、与其它应用程序隔离。

在这之前我想介绍一下 [OrbStack](https://orbstack.dev)，它是 Docker Desktop 和 WSL 的替代品，可以快速、轻便、简单的在 macOS 上运行容器和 Linux。

通过 Homebrew 安装：

```bash
brew install --cask orbstack 
```
OrbStack 开箱即用，打开之后我们就可以直接在终端通过 `docker` 来启动 PostgreSQL。

```bash
# default latest version
docker pull postgres
# create volume
docker volume create local-psql-data

docker run --name local-postgres -v local-psql-data:/var/lib/postgresql/data -p 5432:5432 -e POSTGRES_PASSWORD={your password} -e POSTGRES_USER={your username} -d postgres
```

简单解释一下这段命令，`--name` 指定容器名称，`-v` 命名数据卷挂载到容器中，`-p` 指定端口映射，`-e` 设置容器环境变量数据库的密码和用户名，`-d` 后台运行。

当我们执行成功之后，我们可以在 OrbStack 中看到我们当前系统中的 Docker 容器、数据卷、镜像等信息。后续也可以直接在这里进行管理。

## 使用 pgAdmin 管理 PostgreSQL

[pgAdmin](https://www.pgadmin.org) 是一个用于 PostgreSQL 数据库的开源工具，它提供了一个功能强大的界面来管理 PostgreSQL 数据库。它可以在 Windows、Linux 和 macOS 上运行。

通过 Homebrew 安装：

```bash
brew install --cask pgadmin4
```

打开 pgAdmin，创建一个新的服务器连接。

![pgAdmin connect info](/images/8-pgadmin-connect.png)

Host name/address 填入 `local-postgres.orb.local`，OrbStack 中的每个容器都有一个域名，`container-name.orb.local` 或 `service.project.orb.local`，也支持自定义域名，这使得访问服务变得更加容易。（可以在 OrbStack 界面中查看到详细信息）

Port 填入容器公开端口 `5432`，username 和创建容器时候设置一致。保存之后连接时，输入之前设置的密码，就可以成功连接到数据库了。

## 通过 Docker 传递命令到 PostgreSQL

除了通过 pgAdmin 管理之外，也可以通过命令行来管理数据库。

psql 是 PostgreSQL 的命令行工具，可以通过 docker exec 执行。

```bash
docker exec -it local-postgres psql -U cj -c "create database test"
```

如果你跟我一样使用 Warp，那么你可以创建一个 `workflows` 来简化这个过程。


## PostgreSQL Tutorial

[PostgreSQL Tutorial](https://www.postgresqltutorial.com) 是一个用来学习入门的 PostgreSQL 在线网站。它基于一个事例数据库来进行讲解，下载数据库后将其导入到 pgAdmin 中，然后跟着教程一步一步来学习。

在本篇博客中我不再想过多的记录 PostgreSQL 的基础，我相信官方手册或者其他网站随时可以查询到。所以后续我会记录我可能遇到的问题和一些我学习过程中的重要笔记。

## QA

### 1. pgAdmin 导入数据库

Q：在导入数据库时，我遇到了一个问题，在文件选择框中无法选中 tar 文件。

A：在文件输入框中手动输入文件路径，然后点击导入即可。

## PostgreSQL 学习笔记

- 在应用程序代码中执行 SQL 语句时，为了数据库和应用程序性能应尽量避免使用 `SELECT *`，而是应该指定需要的列。
- 使用 `NULLS FIRST` 或者 `NULLS LAST` 选项显示的指定 NULL 值和非 NULL 值的排序
- SELECT `DISTINCT` 用于从结果中删除重复的记录


## 几个对与学习 PostgreSQL 有用的网站

- https://www.postgresqltutorial.com 通过实际事例学习 PostgreSQL
- https://pgexercises.com/questions/basic/ 以交互的方式练习 PostgreSQL
- https://github.com/dhamaniasad/awesome-postgres PostgreSQL 资源列表
