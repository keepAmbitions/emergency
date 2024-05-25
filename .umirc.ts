import { defineConfig } from "umi";
// 引入 postcss 配置
const postcssConfig = require("./postcss.config");

export default defineConfig({
  routes: [
    { exact: true, path: "/", component: "index" },
    { exact: true, path: "/login", component: "login" },
    { exact: true, path: "/docs", component: "docs" },
    // 注意：component: "Home"，value值要精确匹配 ./pages/Home的大小写
    { exact: true, path: "/home", component: "Home" },
  ],
  npmClient: 'yarn',
  // 在UMI框架中使用postcss插件的方式
  extraPostCSSPlugins: [postcssConfig.plugins]
});
