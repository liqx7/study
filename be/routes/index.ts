import Router from "koa-router";
import Example from "../models/exampleModel";

const router = new Router();

router.get("/examples", async (ctx: any) => {
  try {
    const examples = await Example.find();
    ctx.body = examples;
  } catch (err) {
    ctx.status = 500;
    ctx.body = err;
  }
});

router.post("/examples", async (ctx: any) => {
  try {
    const example = new Example(ctx.request.body);
    const savedExample = await example.save();
    ctx.body = savedExample;
  } catch (err) {
    ctx.status = 500;
    ctx.body = err;
  }
});

export default router;
