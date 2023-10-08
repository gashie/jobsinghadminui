const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api/v1/jobs/**", {
      target: "http://108.166.181.225:5055",
      sercure: "false"
    })
  );
};

//"proxy": "http://108.166.181.225:5050"
