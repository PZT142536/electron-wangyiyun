<!--
 * @Author: PZT123456 2844929578@qq.com
 * @Date: 2022-08-12 09:35:02
 * @LastEditors: PZT123456 2844929578@qq.com
 * @LastEditTime: 2022-08-12 18:17:37
 * @FilePath: \my-project\src\renderer\components\Herder.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="hender">
    <div class="left">
      <div class="logo">
        <img src="../assets/img/logo.png" alt="" />
      </div>
      <div class="router-btn">
        <div class="left-btn">
          <svg-icon icon-class="left-top"></svg-icon>
        </div>
        <div class="rigth-btn">
          <svg-icon icon-class="rigth-top"></svg-icon>
        </div>
      </div>
      <div class="search-input">
        <div class="input">
          <svg-icon icon-class="search"></svg-icon> <input type="text" />
        </div>
      </div>
      <div class="songs">
        <div class="icon">
          <svg-icon icon-class="ting"></svg-icon>
        </div>
      </div>
    </div>

    <div class="rigth">
      <div class="opstall">
        <div class="user">
          <div class="user-img">
            <svg-icon icon-class="user"></svg-icon>
          </div>
          <div class="user-text">请登录</div>
          <svg-icon class="arrow-down" icon-class="arrow-down"></svg-icon>
        </div>
        <div class="vip">
          <svg-icon icon-class="svip" class="svip"></svg-icon>
        </div>
        <div class="setUp-all">
          <div class="setUp-one">
            <div class="skin">
              <svg-icon icon-class="skin"></svg-icon>
            </div>
            <div class="setUp"><svg-icon icon-class="setUp"></svg-icon></div>
            <div class="emil"><svg-icon icon-class="emil"></svg-icon></div>
          </div>
        </div>
        <div class="WindowSettings">
          <svg-icon icon-class="win"></svg-icon>
          <svg-icon @click="minimizeWin" icon-class="mini"></svg-icon>
          <svg-icon
            @click="maximizeWin"
            v-show="!fullscreen"
            icon-class="max"
          ></svg-icon>
          <svg-icon
            @click="unmaximize"
            v-show="fullscreen"
            icon-class="hui"
          ></svg-icon>
          <svg-icon @click="closeWin" icon-class="close"></svg-icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const { ipcRenderer } = window.require("electron");
export default {
  name: "MyProjectHerder",

  data() {
    return {
      fullscreen: false,
    };
  },

  mounted() {},

  methods: {
    minimizeWin() {
      ipcRenderer.send("window-minimize"); // 通知主进程我要进行窗口最小化操作
    },
    maximizeWin() {
      this.fullscreen = true;
      ipcRenderer.send("window-maximize"); // 通知主进程我要进行最大化 或 还原
    },
    unmaximize() {
      this.fullscreen = false;
      ipcRenderer.send("window-unmaximize"); // 通知主进程我要进行最大化 或 还原
    },
    closeWin() {
      ipcRenderer.send("window-close"); // 通知主进程我要关闭
    },
  },
};
</script>

<style lang="less" scoped>
.hender {
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  background: #ec4141;
  justify-content: space-between;
  .left {
    display: flex;
    align-items: center;
    .logo {
      width: 200px;
      height: 100%;
      display: flex;
      align-items: center;

      img {
        margin-left: 20px;
        width: 130px;
        height: 25px;
      }
    }
    .router-btn {
      width: 56px;
      margin-left: 30px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .left-btn,
      .rigth-btn {
        width: 24px;
        height: 24px;
        border-radius: 12px;
        background: rgba(37, 35, 35, 0.1);
        display: flex;
        justify-content: center;
        align-items: center;
        .svg-icon {
          width: 10px;
          height: 10px;
          font-weight: bold;
        }
      }
    }
    .search-input {
      width: 154px;
      height: 100%;
      margin-left: 15px;
      display: flex;
      align-items: center;

      .input {
        width: 125px;
        height: 30px;
        padding: 0px 20px 0px 10px;
        background: rgba(37, 35, 35, 0.1);
        border-radius: 18px;
        display: flex;
        align-items: center;
        input {
          width: 100%;
          font-size: 12px;
          color: aliceblue;
          background: rgba(37, 35, 35, 0);
          border-color: transparent;
          -webkit-user-select: none;
        }
        input:focus {
          //获取焦点
          outline: 1px solid rgba(37, 35, 35, 0); //边框不用border，用outline
          background: rgba(3, 16, 28, 0); //背景色
        }
        .svg-icon {
          padding-right: 5px;
          width: 18px;
          height: 18px;
        }
      }
    }
    .songs {
      height: 100%;
      width: 30px;
      display: flex;
      align-items: center;
      margin-left: 12px;
      .icon {
        height: 30px;
        width: 30px;
        border-radius: 15px;
        background: rgba(37, 35, 35, 0.1);
        display: flex;
        display: flex;
        align-items: center;
        justify-content: center;
        .svg-icon {
          height: 20px;
          width: 20px;
        }
      }
    }
  }
  .rigth {
    display: flex;
    align-items: center;
    .opstall {
      flex: 1;
      display: flex;
      height: 100%;
      align-items: center;
      .user {
        height: 100%;
        width: 95px;
        margin-left: 95px;
        display: flex;
        align-items: center;
        .user-img {
          height: 28px;
          width: 28px;
          border-radius: 15px;
          background: #ccc;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          .svg-icon {
            width: 22px;
            height: 22px;
          }
        }
        .user-text {
          color: #fff;
          font-size: 13px;
          margin-left: 8px;
        }
        .arrow-down {
          width: 14px;
          height: 14px;
          margin-bottom: 6px;
        }
      }
      .vip {
        width: 30px;

        height: 100%;
        display: flex;
        align-items: center;
        .svip {
          width: 30px;
          height: 30px;
        }
      }
      .setUp-all {
        width: 102px;
        height: 100%;
        margin-left: 40px;
        display: flex;
        align-items: center;
        .setUp-one {
          padding-right: 15px;
          width: 100%;
          height: 20px;
          border-right: 1px solid rgb(173, 170, 170);
          display: flex;
          align-items: center;
          justify-content: space-between;
          .skin,
          .setUp,
          .emil {
            height: 20px;
            .svg-icon {
              width: 16px;
              height: 16px;
            }
          }
        }
      }
      .WindowSettings {
        height: 100%;
        width: 125px;
        padding: 0px 15px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .svg-icon {
          height: 18px;
          width: 18px;
        }
      }
    }
  }
}
</style>