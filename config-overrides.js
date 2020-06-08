const { override, addLessLoader, addBabelPlugins } = require("customize-cra");

module.exports = override(
  addLessLoader({
    lessOptions: {
      javascriptEnabled:true,
      modifyVars: {
        "@primary-color": "#1890ff", // for example, you use Ant Design to change theme color.
      }
    }
  })
);