# Hiker

[![Build Status](https://travis-ci.org/iTimeTraveler/hexo-theme-hiker.svg?branch=master)](https://travis-ci.org/iTimeTraveler/hexo-theme-hiker)		[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/iTimeTraveler/hexo-theme-hiker/blob/master/LICENSE)


An attractive, exquisite theme for [Hexo]. named "Hiker", short for "HikerNews".  

[**☞ 在线预览**](https://itimetraveler.github.io/hexo-theme-hiker/)  |  [**✎ Hiker English Documentation**](https://github.com/iTimeTraveler/hexo-theme-hiker/blob/master/README.md)


![Desktop Preview](https://itimetraveler.github.io/hexo-theme-hiker/2016/10/24/Hiker%E4%B8%BB%E9%A2%98%E9%A2%84%E8%A7%88/homepage-index.png)
![Post Preview](https://itimetraveler.github.io/hexo-theme-hiker/2016/10/24/Hiker%E4%B8%BB%E9%A2%98%E9%A2%84%E8%A7%88/article-chrome.png)
![Mobile Preview](https://github.com/iTimeTraveler/hexo-theme-hiker/blob/master/source/preview/preview-mobile.png?raw=true)

<!--more-->

## 安装步骤

 1. 从GitHub上获取代码

 ```shell
 $ git clone https://github.com/iTimeTraveler/hexo-theme-hiker.git themes/hiker
 ```
 2. 启用

 把Hexo主目录下的 `_config.yml` 文件中的字段 `theme` 修改为 `hiker`.
 ```
 # Extensions
 ## Plugins: http://hexo.io/plugins/
 ## Themes: http://hexo.io/themes/
 theme: hiker
 ```
 3. 更新

 ```shell
 $ cd themes/Hiker
 $ git pull
 ```

## 配置

### 样例

``` yml
# ---------------------------------------------------------------
# Site Information Settings
# ---------------------------------------------------------------

# Header Menu
menu:
  Home: /
  Archives: archives
  Categories: categories
  Tags: tags
  About: about
rss: /atom.xml

since: 2013

# Set default keywords (Use a comma to separate)
keywords: ""

# Put your favicon.ico or avatar.jpg into `hexo-site/themes/hiker/source/` directory.
avatar: 
  enable: true
  border: true
  width: 124
  height: 124
  top: 0
  url: css/images/mylogo.jpg


# Homepage
# eg. home_background_image: [css/images/home-bg.jpg, http://t.cn/RMbvEza]
home_background_image:
  enable: true
  url: [css/images/home-bg.jpg, css/images/sample.jpg, http://t.cn/RMbvEza]

home_logo_image:
  enable: false
  border: false
  url: css/images/homelogo.jpg


# AboutPage background
about_big_image: css/images/pose.jpg


# Archive pagination
archive_pagination: true


# Content
fancybox: true


# Sidebar
sidebar: right
widgets:
- category
- tag
- tagcloud
- archive
- recent_posts


# Search
search:
    insight: true # you need to install `hexo-generator-json-content` before using Insight Search
    swiftype: # enter swiftype install key here
    baidu: false # you need to disable other search engines to use Baidu search, options: true, false


# comment ShortName, you can choose only ONE to display.
duoshuo_shortname: iTimeTraveler
disqus_shortname:


# Code Highlight theme
# Available value:
#    default | normal | night | night eighties | night blue | night bright
# https://github.com/chriskempson/tomorrow-theme
highlight_theme: default


# Article theme color
# Available value:
#    random | orange | blue | red | green | black
theme_color: random


# display widgets at the bottom of index pages (pagination == 2)
index_widgets:
# - category
# - tagcloud
# - archive


# widget behavior
archive_type: 'monthly'
show_count: true

# Google Webmaster tools verification setting
# See: https://www.google.com/webmasters/
google_site_verification:
baidu_site_verification:
qihu_site_verification:

# Miscellaneous
google_analytics:
gauges_analytics:
baidu_analytics:
tencent_analytics:
twitter:
google_plus:
fb_admins:
fb_app_id:

# Facebook SDK Support.
# https://github.com/iissnan/hexo-theme-next/pull/410
facebook_sdk:
  enable: false
  app_id:       #<app_id>
  fb_admin:     #<user_id>
  like_button:  #true
  webmaster:    #true

# CNZZ count
cnzz_siteid: 
```

- **menu** - 导航菜单
- **rss** - RSS 链接
- **fancybox** - Enable [Fancybox]
- **sidebar** - Sidebar style. You can choose `left`, `right`, `bottom` or `false`.
- **widgets** - Widgets displaying in sidebar
- **google_analytics** - Google Analytics ID
- **favicon** - Favicon path
- **twitter** - Twiiter ID
- **google_plus** - Google+ ID

## 特性

### 自定义首页背景

您可以将选择的大图放到 `YOUR_HEXO_SITE\themes\hiker\source\css\images` 文件夹下. 然后更改 hiker/_config.yml文件里的`home_background_image`字段. 

```yml
# Homepage
# eg. home_background_image: [css/images/home-bg.jpg, http://t.cn/RMbvEza]
home_background_image:
  enable: true
  url: [css/images/home-bg.jpg, css/images/sample.jpg, http://t.cn/RMbvEza]
```

如果`url`为空（`enable`仍然保持true）, 主题会自动使用下面这种**`漂亮的随机线条` **填充：

![](https://itimetraveler.github.io/hexo-theme-hiker/2016/10/24/Hiker%E4%B8%BB%E9%A2%98%E9%A2%84%E8%A7%88/home-no-background1.png)


### Code 色彩主题

Hiker 使用[Tomorrow Theme](https://github.com/chriskempson/tomorrow-theme) 作为代码高亮的配色. 总共有六种选择: `default`, `normal`, `night`, `night blue`, `night bright`, `night eighties`

![code `default` theme Preview](https://itimetraveler.github.io/hexo-theme-hiker/2016/10/24/Hiker%E4%B8%BB%E9%A2%98%E9%A2%84%E8%A7%88/code-theme-default.png)

默认高亮配色如上图。 另外的五种配色如下.

![code themes](https://github.com/iTimeTraveler/hexo-theme-hiker/blob/master/source/preview/code-theme.jpg?raw=true)

Modify `highlight_theme` in hiker/_config.yml.

```yml
# Code Highlight theme
# Available value:
#    default | normal | night | night eighties | night blue | night bright
# https://github.com/chriskempson/tomorrow-theme
highlight_theme: default
```

### 博客主题色

Hiker 为你的博客提供了五种可选的主题色，可以配置成`random`, 每次生成博客时会自动随机使用一个主题色.

![theme colors](https://github.com/iTimeTraveler/hexo-theme-hiker/blob/master/source/preview/theme-color.png?raw=true)

- <span style="display: inline-block; width: 18px; height: 18px; margin: 0 4px; background-color: #fb6d19; border-radius: 3px; vertical-align: middle;"></span> orange
- <span style="display: inline-block; width: 18px; height: 18px; margin: 0 4px; background-color: #00aced; border-radius: 3px; vertical-align: middle;"></span> blue
- <span style="display: inline-block; width: 18px; height: 18px; margin: 0 4px; background-color: #f03838; border-radius: 3px; vertical-align: middle;"></span> red
- <span style="display: inline-block; width: 18px; height: 18px; margin: 0 4px; background-color: #39aa56; border-radius: 3px; vertical-align: middle;"></span> green
- <span style="display: inline-block; width: 18px; height: 18px; margin: 0 4px; background-color: #404040; border-radius: 3px; vertical-align: middle;"></span> black

You can modify `theme_color` in hiker/_config.yml.

```yml
# Article theme color
# Available value:
#    random | orange | blue | red | green | black
theme_color: random
```

### 夜间模式

只有在文章阅读页面，点击左上角的logo图片，就能打开设置对话框，操作如下图

![](https://itimetraveler.github.io/hexo-theme-hiker/2016/10/24/Hiker%E4%B8%BB%E9%A2%98%E9%A2%84%E8%A7%88/night-mode.gif)


### 站内搜索

Hiker 使用 `Insight Search` 实现了站内搜索，在_config.yml文件中启用如下.

```yml
# Search
search:
    insight: true # you need to install `hexo-generator-json-content` before using Insight Search
    swiftype: # enter swiftype install key here
    baidu: false # you need to disable other search engines to use Baidu search, options: true, false
```

> **！注意**: 在使用搜索功能前必须在Hexo目录下使用以下命令安装 `hexo-generator-json-content` 插件.

```bash
$ npm install -S hexo-generator-json-content
```

### Fancybox

Hiker uses [Fancybox] to showcase your photos. You can use Markdown syntax or fancybox tag plugin to add your photos.

```
![img caption](img url)

{% fancybox img_url [img_thumbnail] [img_caption] %}
```

### 侧边栏

`sidebar`（侧边栏位置）可以设置为 `left` , `right`, `bottom`.

Hiker 有以下5种侧边栏插件:

- category
- tag
- tagcloud
- archives
- recent_posts

All of them are enabled by default. You can edit them in `widget` setting.

### 评论

已完全支持原生 DuoShuo 和 Disqus. Modify the following snippets to hiker `hiker/_config.yml`:

```yml
# comment ShortName, you can choose only ONE to display.
duoshuo_shortname: iTimeTraveler
disqus_shortname: 
```

## 支持的浏览器

![](https://github.com/iTimeTraveler/hexo-theme-hiker/blob/master/source/preview/browser-support.png?raw=true)


## Contributing

欢迎大家有各种问题和改进建议的，直接提issue或者评论，或者pull request都行。我会尽量抽时间和大家交流。刚接触Hexo不久，疏忽不足之处，还望大家海涵！


[Hexo]: https://hexo.io/
[Fancybox]: http://fancyapps.com/fancybox/
[Font Awesome]: http://fontawesome.io/
