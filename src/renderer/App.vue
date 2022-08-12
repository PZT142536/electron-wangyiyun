<!--
 * @Author: PZT123456 2844929578@qq.com
 * @Date: 2022-08-11 18:04:12
 * @LastEditors: PZT123456 2844929578@qq.com
 * @LastEditTime: 2022-08-12 16:23:24
 * @FilePath: \my-project\src\renderer\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "my-project",
};
</script>

<style>
@import url(./style.scss);
/* CSS */
body {
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
  /* -webkit-app-region: drag; */
}
</style>

