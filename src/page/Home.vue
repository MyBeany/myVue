<template>
  <div style="height: 100%;background: var(--backgroundStyle);background-size: 100%">
    <div class="header-div disFlex">
      <el-tooltip class="item" effect="light" content="返回首页" placement="right">
        <div class="header-div-left disFlex" @click="gohome()">
          <span style="margin-left: 10px;font-weight: bold;font-size: 20px">MyVue</span>
        </div>
      </el-tooltip>
      <div class="disFlex header-div-right">
        <div @click="isUpdataTheme = true" style="font-size: 20px">
          <i class="el-icon-menu"></i>
        </div>
        <div @click="screen"
             v-if="!isScreen" style="padding: 0px 10px;">
          <span>全屏显示</span>
        </div>
        <div @click="screen" v-if="isScreen" style="padding: 0px 10px;">
          <span>关闭全屏</span>
        </div>
        <div @click="showLoginOut = !showLoginOut" style="padding: 0px 10px;">
          <img src="../images/userHeaderImg.png" style="width: 25px;"/>
        </div>
        <div @click="showLoginOut = !showLoginOut">
          <span>{{userName}}</span>
        </div>
      </div>

      <el-collapse-transition>
        <div v-if="showLoginOut" class="setting-div">
          <div class="settingOption-div disFlex" @click="dialogFormVisible = true">
            <img src="../images/modifyPassword.png" class="settingOption-div-img"/>
            <span class="settingOption-div-title">修改密码</span>
          </div>
          <div class="settingOption-div disFlex" @click="loginOut()">
            <img src="../images/loginOut.png" class="settingOption-div-img"/>
            <span class="settingOption-div-title">退出登录</span>
          </div>
        </div>
      </el-collapse-transition>
    </div>
    <div class="disFlex" style="height: calc(100% - 90px);padding:0 15px;">
      <div class="menu-list-div">
        <div v-for="(menu,index) in menuList" :key="menu.id">
          <div @click="showMenu(index)" class="menu-list-bgc disFlex">
            <div style="width: 80%;">
              <span>{{menu.menuName}}</span>
            </div>
            <div style="width: 20%;text-align: right;">
              <i class="el-icon-arrow-right"
                 :class="[menu.isOpen == 1?'rotate':'rotate1']"
                 v-if="menu.adminMenuList.length > 0"></i>
            </div>
          </div>
          <el-collapse-transition>
            <div v-show="menu.isOpen==1">
              <a>
                <router-link tag="li" :to="menuSon.query == undefined? menuSon.path : menuSon.path + menuSon.query"
                             v-for="(menuSon,index1) in menu.adminMenuList"
                             :key="menuSon.id">
                  <div class="menuSon-list-bgc"
                       @click="showMenuSon(index,index1)"
                       :class="[menuSon.isOpen==1?'menuSon-list-color':'menuSon-list-color1']">
                    <span>{{menuSon.menuName}}</span>
                  </div>
                </router-link>
              </a>
            </div>
          </el-collapse-transition>
        </div>
      </div>
      <div style="width: 100%;margin-left: 20px;">
        <router-view class="routerView" :key="$route.fullPath"></router-view>
      </div>
    </div>

    <!--修改密码-->
    <el-dialog title="修改密码" :visible.sync="dialogFormVisible">
      <el-form :model="adminUser">
        <el-form-item label="原密码">
          <el-input v-model="adminUser.oldPassword" type="password" placeholder="请输入原密码"></el-input>
        </el-form-item>
        <el-form-item label="新密码">
          <el-input v-model="adminUser.newPassword" type="password" placeholder="请输入新密码"></el-input>
        </el-form-item>
        <el-form-item label="重复新密码">
          <el-input v-model="adminUser.repeatNewPassword" type="password" placeholder="请再次输入新密码"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="modifyPassword">确 定</el-button>
      </div>
    </el-dialog>

    <el-dialog title="更换主题" :visible.sync="isUpdataTheme">
      <el-radio-group v-model="themeIndex" @change = "updateTheme">
        <el-radio :label="index" v-for="(theme,index) in themeList" :key = "index">{{theme.themeName}}</el-radio>
      </el-radio-group>
    </el-dialog>
  </div>
</template>
<script>
  import * as theme from '../const/theme';
  import * as storage from "./../utils/storage";
  export default {
    data() {
      return {
        showLoading: false,
        menuList: [],
        showLoginOut: false,
        userName: '',
        dialogFormVisible: false,
        adminUser: {
          oldPassword: '',
          newPassword: '',
          repeatNewPassword: ''
        },
        isScreen: false,
        themeIndex: 0,
        isUpdataTheme:false,
        themeList:[],
      }
    },
    created: function () {
      this.themeList = theme.THEME.STYLE;
      this.menuList = [
        {
          menuName: "文章管理", isOpen: 0,
          adminMenuList: [
            {menuName: "添加文章", isOpen: 0, path: "/articleManage"}
          ]
        },
        {
          menuName: "外部链接", isOpen: 0,
          adminMenuList: [
            {menuName: "百度", isOpen: 0, path: "/Iframe", query:"/https%3A%2F%2Fwww.baidu.com"},
            {menuName: "Element UI", isOpen: 0, path: "/Iframe", query:"/http%3A%2F%2Felement-cn.eleme.io/#/zh-CN"}
          ]
        },
        {
          menuName: "用户管理", isOpen: 0,
          adminMenuList: [
            {menuName: "查看用户", isOpen: 0, path: "/user"}
          ]
        }
      ];
      this.userName = "MyVue";
      this.setTheme();
    },
    methods: {
      setTheme() {
        let storageThemeIndex = storage.getStrLocalStorageItem("storageThemeIndex");
        if (!storageThemeIndex) {
          storage.setStrLocalStorageItem("storageThemeIndex", 0);
        }
        storageThemeIndex = storage.getStrLocalStorageItem("storageThemeIndex");
        this.themeIndex = parseInt(storageThemeIndex);
        this.updateTheme(storageThemeIndex);
      },
      updateTheme(index){
        theme.setThemeStyle(index);
        storage.setStrLocalStorageItem("storageThemeIndex", index);
      },
      screen() {
        var _this = this;
        if (!_this.isScreen) {
          _this.openScreen();
        } else {
          _this.closeScreen();
        }
        _this.isScreen = !_this.isScreen;
      },
      openScreen() {
        var docE = document.documentElement;
        if (docE.requestFullScreen) {
          docE.requestFullScreen();
        } else if (docE.mozRequestFullScreen) {
          docE.mozRequestFullScreen();
        } else if (docE.webkitRequestFullScreen) {
          docE.webkitRequestFullScreen();
        }
      },
      closeScreen() {
        var docE = document;
        if (docE.exitFullscreen) {
          docE.exitFullscreen();
        } else if (docE.mozCancelFullScreen) {
          docE.mozCancelFullScreen();
        } else if (docE.webkitCancelFullScreen) {
          docE.webkitCancelFullScreen();
        }
      },
      showMenu(index) {
        this.menuList.forEach(function (item, i) {
          if (i === index) {
            return;
          }
          item.isOpen = 0;
        })
        this.menuList[index].isOpen = this.menuList[index].isOpen === 1 ? 0 : 1;
        var menu = this.menuList[index];
        menu.adminMenuList.forEach(function (item, i) {
          menu.adminMenuList[i].isOpen = 0;
        })
      },
      showMenuSon(index, index1) {
        var menu = this.menuList[index];
        menu.adminMenuList.forEach(function (item, i) {
          if (i != index1) {
            menu.adminMenuList[i].isOpen = 0;
          } else {
            menu.adminMenuList[i].isOpen = 1;
          }
        })
      },
      closeMenu() {
        this.menuList.forEach(function (item) {
          this.isOpen = 0;
        })
      },
      gohome() {
        this.$router.push({
          path: "/home"
        });
        this.closeMenu();
      },
      loginOut() {
        this.$router.push({
          path: "/"
        });
      },
      modifyPassword() {

      }
    }
  }
</script>
<style>
  a {
    color: var(--fontColor);
  }

  .header-div {
    background-color: var(--headerColor);
    color: var(--fontColor);
    height: 70px;
    align-items: center;
    box-shadow: 3px 0 3px rgba(0, 0, 0, .3);
    padding-left: 10px;
    margin-bottom: 20px;
  }

  .header-div-left {
    align-items: center;
  }

  .header-div-left:hover {
    cursor: pointer;
  }

  .header-div-right {
    align-items: center;
    width: calc(100% - 120px);
    justify-content: flex-end;
  }

  .header-div-right :hover {
    cursor: pointer;
  }

  .menu-list-div {
    width: 12%;
    max-width: 190px;
    height: calc(100% - 30px);
    background-color: var(--sonMenuColor);
    font-size: 16px;
    border-radius: 5px;
    padding: 5px;
    overflow-y: auto;
  }

  .menu-list-bgc {
    background-color: var(--sonMenuColor);
    color: var(--fontColor);
    align-items: center;
    padding: 15px;
    cursor: pointer;
  }

  .menuSon-list-bgc {
    margin-top: 5px;
    background-color: var(--headerColor);
    padding: 10px 15px 10px 30px;
    border-radius: 5px;
  }

  .menuSon-list-color {
    background-color: var(--openSonMenuColor);
    color: var(--openSonFontColor);
    border-left: 4px solid;
    cursor: pointer;
  }

  .menuSon-list-color1 {
    color: var(--fontColor);
    padding: 10px 15px 10px 34px;
    cursor: pointer;
  }

  .setting-div {
    position: fixed;
    color: var(--fontColor);
    right: 20px;
    top: 50px;
    width: 125px;
    height: 80px;
    background-color: var(--sonMenuColor);
    z-index: 4;
    font-size: 14px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  .setting-div :hover {
    cursor: pointer;
  }

  .settingOption-div {
    padding: 10px 2px;
    align-items: center;
    justify-content: center;
  }

  .settingOption-div-img {
    width: 15px;
  }

  .settingOption-div-title {
    margin-left: 10px;
  }

  .routerView {
    width: 100%;
    background: var(--viewBackgroundStyle);
    border-radius: 5px;
    height: calc(100% - 20px);
    border: 0;
  }
</style>
