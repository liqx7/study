import mongoose, { Schema, Document } from "mongoose";

// 定义 Example 模型的数据结构
export interface IExample extends Document {
  name: string;
}

// 创建 Example 模型的 Schema
const ExampleSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

// 导出 Example 模型
export default mongoose.model<IExample>("Example", ExampleSchema);
