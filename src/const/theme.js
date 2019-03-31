export const THEME = {
  STYLE: [{
    // 主题名字
    'themeName':'默认主题',
    /*头部背景颜色  父级菜单颜色*/
    '--headerColor':'#2C3E50',
    /*子集菜单颜色*/
    '--sonMenuColor':'#2C3E50',
    /*子集菜单选中颜色*/
    '--openSonMenuColor':'#21598f',
    /*字体颜色*/
    '--fontColor':'#fff',
    /*整体背景颜色  or  图片*/
    '--backgroundStyle':'#283542',
    /*view背景颜色*/
    '--viewBackgroundStyle':'rgba(255, 255, 255, 1)',
    // 选中子菜单自字体颜色
    '--openSonFontColor':'#fff',
    // 菜单悬浮时
    '--userBackgroundStyle':'#2C3E50',
    '--userFontColor':'#fff'
  },{
    'themeName':'炫酷主题',
    '--backgroundStyle':'url("https://i4.piimg.com/510372/2bdbeadd3d33f01f.png")',
    '--headerColor':'rgba(255, 255, 255, 0)',
    '--sonMenuColor':'rgba(255, 255, 255, 0)',
    '--openSonMenuColor':'rgba(255, 255, 255, 0)',
    '--fontColor':'#fff',
    '--viewBackgroundStyle':'rgba(255, 255, 255, 0.8)',
    '--openSonFontColor':'#fff',
    // 菜单悬浮时
    '--userBackgroundStyle':'rgba(0,0,0,.5)',
    '--userFontColor':'#fff'
  },{
    'themeName':'书香年华',
    '--backgroundStyle':'url("http://pic.netbian.com/uploads/allimg/170630/160943-14988101838dc4.jpg")',
    '--headerColor':'rgba(255, 255, 255, 0)',
    '--sonMenuColor':'rgba(255, 255, 255, 0)',
    '--openSonMenuColor':'rgba(255, 255, 255, 0)',
    '--fontColor':'#fff',
    '--viewBackgroundStyle':'rgba(255, 255, 255, 0.8)',
    '--openSonFontColor':'#fff',
    // 菜单悬浮时
    '--userBackgroundStyle':'rgba(0,0,0,.5)',
    '--userFontColor':'#fff'
  },{
    'themeName':'渐变主题',
    '--backgroundStyle':'linear-gradient(120deg,#bc00e3,#4efffb)',
    '--headerColor':'rgba(255, 255, 255, 0)',
    '--sonMenuColor':'rgba(255, 255, 255, 0)',
    '--openSonMenuColor':'rgba(255, 255, 255, 0)',
    '--fontColor':'#fff',
    '--viewBackgroundStyle':'rgba(255, 255, 255, 0.8)',
    '--openSonFontColor':'#fff',
    // 菜单悬浮时
    '--userBackgroundStyle':'rgba(188, 0, 227, 0.4)',
    '--userFontColor':'#fff'
  },{
    'themeName':'黑色主题',
    '--backgroundStyle':'#002253',
    '--headerColor':'rgba(255, 255, 255, 0)',
    '--sonMenuColor':'rgba(255, 255, 255, 0)',
    '--openSonMenuColor':'hsla(0,0%,100%,.05)',
    '--fontColor':'#ff929a',
    '--viewBackgroundStyle':'#fff',
    '--openSonFontColor':'#ffb870',
    // 菜单悬浮时
    '--userBackgroundStyle':'rgba(255, 255, 255, 0)',
    '--userFontColor':'#ff929a'
  },{
    'themeName':'白色主题',
    '--backgroundStyle':'#eceef3',
    '--headerColor':'#fff',
    '--sonMenuColor':'#fff',
    '--openSonMenuColor':'#e2edff',
    '--fontColor':'rgb(102, 102, 102)',
    '--viewBackgroundStyle':'#fff',
    '--openSonFontColor':'#00AFF9',
    // 菜单悬浮时
    '--userBackgroundStyle':'#e2edff',
    '--userFontColor':'#00AFF9'
  }],
};

//修改样式
export const setThemeStyle = function(index) {
  var themeStyleObj = THEME.STYLE[index];
  for (var Key in themeStyleObj){
    if(Key!= 'themeName'){
      document.documentElement.style.setProperty(Key, themeStyleObj[Key]);
    }
  }
}
