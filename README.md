# 十万个为什么 PDF 阅读导航

这是一个简单的静态网页项目，用来整理和浏览《十万个为什么》系列 PDF 附件。打开网页后，可以通过分类按钮快速进入对应主题的 PDF，例如地理、生物、交通、科技、人体和宇宙。

## 项目内容

- `index.html`：网页入口文件
- `style.css`：页面样式文件
- `app.js`：分类按钮和 PDF 跳转逻辑
- `assert/book/`：PDF 附件存放目录

## 分类列表

当前页面包含以下分类：

| 页面选项 | 对应 PDF |
| --- | --- |
| 地理 | 最新十万个为什么-地球.pdf |
| 生物 | 最新十万个为什么-动物.pdf |
| 交通 | 最新十万个为什么-交通.pdf |
| 科技 | 最新十万个为什么-科技.pdf |
| 人体 | 最新十万个为什么-人体.pdf |
| 宇宙 | 最新十万个为什么-宇宙.pdf |

## 推荐目录结构

```text
yuedu/
├─ index.html
├─ style.css
├─ app.js
├─ README.md
└─ assert/
   └─ book/
      ├─ 最新十万个为什么-地球.pdf
      ├─ 最新十万个为什么-动物.pdf
      ├─ 最新十万个为什么-交通.pdf
      ├─ 最新十万个为什么-科技.pdf
      ├─ 最新十万个为什么-人体.pdf
      └─ 最新十万个为什么-宇宙.pdf
```

## 如何使用

直接打开 `index.html` 即可进入阅读页面。

如果上传到 GitHub，可以通过 GitHub Pages 发布：

1. 进入仓库的 `Settings`
2. 点击左侧 `Pages`
3. 在 `Build and deployment` 中选择 `Deploy from a branch`
4. 分支选择 `main`
5. 文件夹选择 `/root`
6. 保存后等待 GitHub 生成访问地址

## 修改 PDF 路径

PDF 路径在 `app.js` 中配置。例如：

```js
{ label: "地理", file: "assert/book/最新十万个为什么-地球.pdf" }
```

如果以后更换文件夹或 PDF 名称，只需要修改这里的 `file` 路径即可。

## 说明

本项目只包含静态网页文件，不需要安装依赖，也不需要后端服务器。适合用于个人阅读整理、资料导航和 GitHub Pages 静态发布。
