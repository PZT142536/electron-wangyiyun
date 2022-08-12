/*
 * @Author: PZT123456 2844929578@qq.com
 * @Date: 2022-08-12 10:09:39
 * @LastEditors: PZT123456 2844929578@qq.com
 * @LastEditTime: 2022-08-12 10:09:52
 * @FilePath: \my-project\src\renderer\assets\icon\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import Vue from "vue";
import SvgIcon from "@/components/SvgIcon"; // svg component

// register globally
Vue.component("svg-icon", SvgIcon);

const req = require.context("./svg", false, /\.svg$/);
const requireAll = (requireContext) => requireContext.keys().map(requireContext);
requireAll(req);
