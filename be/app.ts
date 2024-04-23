import Koa from "koa";
import bodyParser from "koa-bodyparser";
import mongoose from "mongoose";

const app = new Koa();
const router = require("./routes"); // 创建路由文件

// 连接到 MongoDB 数据库
mongoose.connect("mongodb://localhost/koa-mongodb-ts", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as mongoose.ConnectionOptions);
mongoose.connection.on("error", console.error);

// 中间件
app.use(bodyParser());
app.use(router.routes()).use(router.allowedMethods());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
