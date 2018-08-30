export const THEME = {
  STYLE: [{
    /*头部背景颜色  父级菜单颜色*/
    '--headerColor':'#202d3d',
    /*子集菜单颜色*/
    '--sonMenuColor':'#2C3E50',
    /*子集菜单选中颜色*/
    '--openSonMenuColor':'#21598f',
    /*字体颜色*/
    '--fontColor':'#fff',
    /*整体背景颜色  or  图片*/
    '--backgroundStyle':'#2C3E5',
    /*view背景颜色*/
    '--viewBackgroundStyle':'rgba(255, 255, 255, 1)',
    '--openSonFontColor':'#fff'
  },{
    '--backgroundStyle':'url("/static/img/star-squashed.c308c92.jpg")',
    '--headerColor':'rgba(255, 255, 255, 0)',
    '--sonMenuColor':'rgba(255, 255, 255, 0)',
    '--openSonMenuColor':'rgba(255, 255, 255, 0)',
    '--fontColor':'#fff',
    '--viewBackgroundStyle':'rgba(255, 255, 255, 0.8)',
    '--openSonFontColor':'#fff'
  },{
    '--backgroundStyle':'linear-gradient(120deg,#bc00e3,#4efffb)',
    '--headerColor':'rgba(255, 255, 255, 0)',
    '--sonMenuColor':'rgba(255, 255, 255, 0)',
    '--openSonMenuColor':'rgba(255, 255, 255, 0)',
    '--fontColor':'#fff',
    '--viewBackgroundStyle':'rgba(255, 255, 255, 0.8)',
    '--openSonFontColor':'#fff'
  },{
    '--backgroundStyle':'#002253',
    '--headerColor':'rgba(255, 255, 255, 0)',
    '--sonMenuColor':'rgba(255, 255, 255, 0)',
    '--openSonMenuColor':'hsla(0,0%,100%,.05)',
    '--fontColor':'#ff929a',
    '--viewBackgroundStyle':'rgba(255, 255, 255, 0.8)',
    '--openSonFontColor':'#ffb870'
  }],
}
export const setThemeStyle = function(index) {
  var themeStyleObj = THEME.STYLE[index];
  for (var Key in themeStyleObj){
    document.documentElement.style.setProperty(Key, themeStyleObj[Key]);
  }
}
