module.exports = {
// 采用 viewport 移动端浏览器适配方案
  plugins: [
    // 使用 postcss-px-to-viewport 插件，用于将 px 单位转化为 vw/vh 单位
    require("postcss-px-to-viewport")({
      viewportWidth: 750, // 设计稿的视口宽度
      viewportHeight: 1334, // 视窗高度
      unitPrecision: 3, // 单位转换后保留的精度
      landscapeWidth: 1334, // 横屏时使用的视口宽度
      propList: ['*', '!font*'] // 排除 font-size等属性值的转换
    }),
  ],
};
