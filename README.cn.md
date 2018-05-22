# Hiker

[![Build Status](https://travis-ci.org/iTimeTraveler/hexo-theme-hiker.svg?branch=master)](https://travis-ci.org/iTimeTraveler/hexo-theme-hiker)		[![Gitter](https://camo.githubusercontent.com/079d8764b5eebffbb7158fb375df0959029ab2c3/68747470733a2f2f6261646765732e6769747465722e696d2f6865786f2d7468656d652d696e6469676f2f4c6f6262792e737667)](https://gitter.im/hexo-theme-hiker/Lobby?utm_source=share-link&utm_medium=link&utm_campaign=share-link)


An attractive, exquisite theme for [Hexo]. named "Hiker", short for "HikerNews".  

[**☞ 在线预览**](https://itimetraveler.github.io/hexo-theme-hiker/)  |  [**Hiker问题交流群**](https://gitter.im/hexo-theme-hiker/Lobby?utm_source=share-link&utm_medium=link&utm_campaign=share-link)


![Desktop Preview](https://itimetraveler.github.io/hexo-theme-hiker/2016/10/24/Hiker%E4%B8%BB%E9%A2%98%E9%A2%84%E8%A7%88/homepage-index.png)
![Post Preview](https://itimetraveler.github.io/hexo-theme-hiker/2016/10/24/Hiker%E4%B8%BB%E9%A2%98%E9%A2%84%E8%A7%88/article-chrome.png)
![Mobile Preview](https://github.com/iTimeTraveler/hexo-theme-hiker/blob/master/source/preview/preview-mobile.png?raw=true)

<!--more-->

以上Demo站点的源文件在这里，大家有需要的可以参考：https://github.com/iTimeTraveler/hexo-theme-hiero/tree/site-source

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


## 特性

### 自定义首页背景

您可以将选择的大图放到 `YOUR_HEXO_SITE\themes\hiker\source\css\images` 文件夹下. 然后更改 hiker/_config.yml文件里的`home_background_image`字段. 

```yml
# Homepage
# eg. home_background_image: [css/images/home-bg.jpg, http://t.cn/RMbvEza]
# eg. mode: image | polyline | trianglify
home_background_image:
  enable: true
  mode: image
  rolling: true
  url: [css/images/home-bg.jpg, css/images/sample.jpg, https://source.unsplash.com/collection/954550/1920x1080]
```

首页背景填充方式有三种可选mode：

- `image`: 大图模式
- `trianglify`: 多边形渐变背景
- `polyline`: 随机彩色折线

默认配置为`image`模式，也就是大图模式。多边形渐变背景`polyline`模式来自[Trianglify](https://github.com/qrohlf/trianglify)大致如下图：

![](https://cloud.githubusercontent.com/assets/347189/6771063/f8b0af46-d090-11e4-8d4c-6c7ef5bd9d37.png)

如果你不中意以上两种背景填充方式，可以选择随机彩色折线`polyline`模式，长相参考下图。

> ！！注意：如果在使用`image`模式时`url`为空（`enable`仍然保持true）, 主题也会自动使用下面这种**`漂亮的随机线条` **填充（也就是会自动退化为`polyline`模式）：

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

Hiker使用[Fancybox]来浏览展示您文章中的图片，支持以下方式在文章中添加图片：

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



### 打赏捐赠按钮

![](https://github.com/iTimeTraveler/hexo-theme-hiker/blob/master/source/preview/donation-btn.png)

每篇文章最后显示打赏按钮，目前仅支持微信支付和支付宝两种打赏方式。您可以在文件 `hiker/_config.yml` 中配置您的微信、支付宝付款二维码图片的URL:

### 主页文章摘要
![](https://github.com/iTimeTraveler/hexo-theme-hiker/blob/master/source/preview/preview-abstract.png)   

主页文章默认开启摘要模式
```yml
# 开启主页摘要
post_excerpt: true

```


```yml
# donation button
donate:
    enable: true
    message: '如果觉得我的文章对您有用，请随意打赏。您的支持将鼓励我继续创作!'
    wechatImage: https://your_WECHAT_PAY_ImageUrl
    alipayImage: https://your_ALIPAY_ImageUrl
```



### 评论

已完全支持原生Disqus、livere（来必力）、wumii（无觅）评论系统。因多说、网易云跟帖均已停止服务，在国内建议大家使用相对稳定的来必力评论系统。在文件 `hiker/_config.yml` 中修改以下代码片段:

```yml
# comment ShortName, you can choose only ONE to display.
gentie_productKey: #网易云跟帖your-gentie-product-key
duoshuo_shortname: 
disqus_shortname: 
livere_shortname: MTAyMC8yOTQ4MS82MDQ5
uyan_uid: 
wumii: 
```

- #### 网易云跟帖说明（已停止服务）

登陆 [网易云跟帖](https://gentie.163.com/) 获取你的 Product Key。请注意，您在**`云跟帖管理后台设置的域名必须跟您站点的域名一致`**。在本地测试时，需要做两步骤前置设定：

1. 修改 hosts 文件，将您域名的请求指向本地。例如：127.0.0.1 yoursite.com
2. 修改 Hexo 监听的端口为 80：`hexo s --debug -p 80`

测试完成后请将 hosts 文件中的域名映射删除即可。

## 支持的浏览器

![](https://github.com/iTimeTraveler/hexo-theme-hiker/blob/master/source/preview/browser-support.png?raw=true)


## Contributing

欢迎大家有各种问题和改进建议的，直接提issue或者评论，或者pull request都行。我会尽量抽时间和大家交流。刚接触Hexo不久，疏忽不足之处，还望大家海涵！


[Hexo]: https://hexo.io/
[Fancybox]: http://fancyapps.com/fancybox/
[Font Awesome]: http://fontawesome.io/
