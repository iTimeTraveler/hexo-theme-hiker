# Hiker

[![Gitter](https://camo.githubusercontent.com/079d8764b5eebffbb7158fb375df0959029ab2c3/68747470733a2f2f6261646765732e6769747465722e696d2f6865786f2d7468656d652d696e6469676f2f4c6f6262792e737667)](https://gitter.im/hexo-theme-hiker/Lobby?utm_source=share-link&utm_medium=link&utm_campaign=share-link)    [![Build Status](https://travis-ci.org/iTimeTraveler/hexo-theme-hiker.svg?branch=master)](https://travis-ci.org/iTimeTraveler/hexo-theme-hiker)    [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/iTimeTraveler/hexo-theme-hiker/blob/master/LICENSE)


An attractive, exquisite theme for [Hexo]. named "Hiker", short for "HikerNews".  

[**☞ Live Preview**](https://itimetraveler.github.io/hexo-theme-hiker/)  |  [**✎ Hiker 中文版使用文档**](https://github.com/iTimeTraveler/hexo-theme-hiker/blob/master/README.cn.md)


![Desktop Preview](https://itimetraveler.github.io/hexo-theme-hiker/2016/10/24/Hiker%E4%B8%BB%E9%A2%98%E9%A2%84%E8%A7%88/homepage-index.png)
![Post Preview](https://itimetraveler.github.io/hexo-theme-hiker/2016/10/24/Hiker%E4%B8%BB%E9%A2%98%E9%A2%84%E8%A7%88/article-chrome.png)
![Mobile Preview](https://github.com/iTimeTraveler/hexo-theme-hiker/blob/master/source/preview/preview-mobile.png?raw=true)


> This is DEMO source which you can refer to: https://github.com/iTimeTraveler/hexo-theme-hiero/tree/site-source
<!--more-->

## Installation

 1. Get it from GitHub

```shell
 $ git clone https://github.com/iTimeTraveler/hexo-theme-hiker.git themes/hiker
```
 2. Enable

 Modify `theme` setting in `_config.yml` to `hiker`.
 ```
 # Extensions
 ## Plugins: http://hexo.io/plugins/
 ## Themes: http://hexo.io/themes/
 theme: hiker
 ```
 3. Update

```shell
 $ cd themes/Hiker
 $ git pull
```


## Features

### Homepage background

You could place the image file in `YOUR_HEXO_SITE\themes\hiker\source\css\images` directory. and modify `home_background_image` in hiker/_config.yml. 

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

There are 3 modes to select: 

- `image`
- `polyline`
- `trianglify`

`image` mode is default, `trianglify` mode is from [Trianglify](https://github.com/qrohlf/trianglify), looks like below.

![](https://cloud.githubusercontent.com/assets/347189/6771063/f8b0af46-d090-11e4-8d4c-6c7ef5bd9d37.png)

`polyline` mode: if you DON'T want any image as your homepage background, you can use this mode. Or you can keep `enable` true, then set `url` of `home_background_image` empty in hiker/_config.yml, you will have an default homepage with **random decorative pattern**.

![](https://itimetraveler.github.io/hexo-theme-hiker/2016/10/24/Hiker%E4%B8%BB%E9%A2%98%E9%A2%84%E8%A7%88/home-no-background1.png)




### Code Highlight Theme

Hiker use [Tomorrow Theme](https://github.com/chriskempson/tomorrow-theme) for your code block. We have six options in total: `default`, `normal`, `night`, `night blue`, `night bright`, `night eighties`

![code `default` theme Preview](https://itimetraveler.github.io/hexo-theme-hiker/2016/10/24/Hiker%E4%B8%BB%E9%A2%98%E9%A2%84%E8%A7%88/code-theme-default.png)

Above preview picture is default theme. the image below show other five Highlight themes.

![code themes](https://github.com/iTimeTraveler/hexo-theme-hiker/blob/master/source/preview/code-theme.jpg?raw=true)

Modify `highlight_theme` in hiker/_config.yml.

```yml
# Code Highlight theme
# Available value:
#    default | normal | night | night eighties | night blue | night bright
# https://github.com/chriskempson/tomorrow-theme
highlight_theme: default
```

### Blog Theme Color

Hiker provide five color themes for your blog.

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

### Night mode

Just for article reading. In article page, you can click the **logo image of header** to switch to Night mode.

![](https://itimetraveler.github.io/hexo-theme-hiker/2016/10/24/Hiker%E4%B8%BB%E9%A2%98%E9%A2%84%E8%A7%88/night-mode.gif)


### Search

Hiker use `Insight Search` to help you search anything inside your site without any third-party plugin.

```yml
# Search
search:
    insight: true # you need to install `hexo-generator-json-content` before using Insight Search
    swiftype: # enter swiftype install key here
    baidu: false # you need to disable other search engines to use Baidu search, options: true, false
```

> Attention: You need to install `hexo-generator-json-content` before using Insight Search.

```bash
$ npm install -S hexo-generator-json-content
```

### Fancybox

Hiker uses [Fancybox] to showcase your photos. You can use Markdown syntax or fancybox tag plugin to add your photos.

```
![img caption](img url)

{% fancybox img_url [img_thumbnail] [img_caption] %}
```

### Sidebar

You can put your sidebar in left side, right side or bottom of your site by editing `sidebar` setting.
Hiker provides 5 built-in widgets:

- category
- tag
- tagcloud
- archives
- recent_posts

All of them are enabled by default. You can edit them in `widget` setting.

### Abstract
![](https://github.com/iTimeTraveler/hexo-theme-hiker/blob/master/source/preview/preview-abstract.png)   

Home Articles Default Open summary mode
```yml
post_excerpt: true

```

### Comment support

Hiker has native support for DuoShuo & Disqus comment systems. Modify the following snippets to hiker `hiker/_config.yml`:

```yml
# comment ShortName, you can choose only ONE to display.
gentie_productKey: #your-gentie-product-key
duoshuo_shortname: 
disqus_shortname: 
livere_shortname: MTAyMC8yOTQ4MS82MDQ5
uyan_uid: 
wumii: 
```

## Browser support

![](https://github.com/iTimeTraveler/hexo-theme-hiker/blob/master/source/preview/browser-support.png?raw=true)


## Contributing

All kinds of contributions (enhancements, new features, documentation & code improvements, issues & bugs reporting) are welcome.

Looking forward to your pull request.

[Hexo]: https://hexo.io/
[Fancybox]: http://fancyapps.com/fancybox/
[Font Awesome]: http://fontawesome.io/
