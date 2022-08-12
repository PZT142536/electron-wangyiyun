<!--
 * @Author: PZT123456 2844929578@qq.com
 * @Date: 2022-08-11 18:04:12
 * @LastEditors: PZT123456 2844929578@qq.com
 * @LastEditTime: 2022-08-12 14:32:47
 * @FilePath: \my-project\src\renderer\components\LandingPage.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="landing-page">
    <div class="herder" @mousedown="mousedown">
      <HerderVue />
    </div>
    <div class="conter">
      <div class="left">
        
      </div>
      <div class="rigth"></div>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
import HerderVue from "./Herder.vue";
export default {
  name: "landing-page",
  components: { HerderVue },
  data() {
    return {
      isKeyDown: false,
      dinatesX: 0,
      dinatesY: 0,
    };
  },
  methods: {
    mousedown(e) {
      this.isKeyDown = true;
      this.dinatesX = e.x;
      this.dinatesY = e.y;

      document.onmousemove = (ev) => {
        if (this.isKeyDown) {
          const x = ev.screenX - this.dinatesX;
          const y = ev.screenY - this.dinatesY;
          // 给主进程传入坐标
          this.$electron.ipcRenderer.send("move-application", {
            appX: x,
            appY: y,
          });
        }
      };
      document.onmouseup = (ev) => {
        this.isKeyDown = false;
      };
    },
  },
};
</script>
<style lang="less" scoped>
.landing-page {
  height: 100%;
  width: 100%;
  .herder {
    height: 60px;
    width: 100%;

  }
}
</style>

