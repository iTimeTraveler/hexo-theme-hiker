# Hiker

An attractive theme for [Hexo]. I call it "Hiker", short for "HikerNews".

[**Live Preview**](https://itimetraveler.github.io/) | [Hiker 中文版使用文档](README.cn.md)

**Hiker requires Hexo 2.4 and above.**

## Installation

 1. Get it from GitHub

 ``` bash
 git clone https://github.com/iTimeTraveler/hexo-theme-hiker.git themes/hiker
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

 ``` bash
 cd themes/Hiker
 git pull
 ```

## Configuration

``` yml
# ---------------------------------------------------------------
# Site Information Settings
# ---------------------------------------------------------------


# Header Menu
menu:
  Home: /
  Archives: /archives
  Tags: /tags
  About: /about
rss: /atom.xml

since: 2013

# Put your favicon.ico into `hexo-site/source/` directory.
avatar: css/images/mylogo.jpg


# Homepage
# eg. home_background_image: css/images/home-bg.jpg
home_background_image: 
home_logo_image: 
  enable: false
  border: false
  url: css/images/homelogo.jpg


# AboutPage
about_big_image: css/images/pose.jpg


# Content
excerpt_link: Read More
fancybox: true


# Sidebar
sidebar: right
widgets:
- category
- tag
- tagcloud
- archive
- recent_posts


# Duoshuo ShortName
duoshuo_shortname: iTimeTraveler


# Code Highlight theme
# Available value:
#    normal | night | night eighties | night blue | night bright
# https://github.com/chriskempson/tomorrow-theme
highlight_theme: 


# display widgets at the bottom of index pages (pagination == 2)
index_widgets:
# - category
# - tagcloud
# - archive


# widget behavior
archive_type: 'monthly'
show_count: true


# Miscellaneous
google_analytics:
gauges_analytics:
twitter:
google_plus:
fb_admins:
fb_app_id:

```

- **menu** - Navigation menu
- **rss** - RSS link
- **excerpt_link** - "Read More" link at the bottom of excerpted articles. `false` to hide the link.
- **fancybox** - Enable [Fancybox]
- **sidebar** - Sidebar style. You can choose `left`, `right`, `bottom` or `false`.
- **widgets** - Widgets displaying in sidebar
- **google_analytics** - Google Analytics ID
- **favicon** - Favicon path
- **twitter** - Twiiter ID
- **google_plus** - Google+ ID

## Features

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

### Comment support

Hiker has native support for DuoShuo comment systems. Add the following snippets to hiker `hiker/_config.yml`:

```yml
# Duoshuo ShortName
duoshuo_shortname: iTimeTraveler
```

[Hexo]: https://hexo.io/
[Fancybox]: http://fancyapps.com/fancybox/
[Font Awesome]: http://fontawesome.io/