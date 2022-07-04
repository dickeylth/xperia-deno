/** @jsx h */
import { h } from "preact";
import Counter from "../islands/Counter.tsx";
import { Handlers } from "$fresh/server.ts";


export const handler: Handlers = {
  async GET(req, ctx) {
    const resp = await ctx.render();
    resp.headers.set("X-Custom-Header", "Zero");
    return resp;
  },
};

export default function Home() {
  return (
    <div>
      <img
        src="/logo.svg"
        height="100px"
        alt="the fresh logo: a sliced lemon dripping with juice"
      />
      <p>
        Welcome to `fresh`. Try update this message in the ./routes/index.tsx
        file, and refresh...
      </p>
      <Counter start={5} />
    </div>
  );
}
