const { createProxyMiddleware  } = require("http-proxy-middleware");
 
module.exports = function(app) {
    app.use(
        '/api', 
        createProxyMiddleware({ 
            target: 'https://xyc.umiyun.net', 
            changeOrigin: true,
            pathRewrite: {
                '^/api/': '/',
            },
        })
    );
};