import { serve } from "bun";
import index from "./index.html";

const server = serve({
  routes: {
    "/": index,

    "/chilling/*": (req) => {
      const url = new URL(req.url);
      const publicPath = `./public${url.pathname}`;
      const publicFile = Bun.file(publicPath);
      return new Response(publicFile);
    },

    "/sleeping/*": (req) => {
      const url = new URL(req.url);
      const publicPath = `./public${url.pathname}`;
      const publicFile = Bun.file(publicPath);
      return new Response(publicFile);
    },

    "/eating/*": (req) => {
      const url = new URL(req.url);
      const publicPath = `./public${url.pathname}`;
      const publicFile = Bun.file(publicPath);
      return new Response(publicFile);
    },

    "/running/*": (req) => {
      const url = new URL(req.url);
      const publicPath = `./public${url.pathname}`;
      const publicFile = Bun.file(publicPath);
      return new Response(publicFile);
    },

    "/*": (req) => new Response("Ruh roh! The page you're looking for doesn't exist!", { status: 404 }),
  },

  development: process.env.NODE_ENV !== "production" && {
    // Enable browser hot reloading in development
    hmr: true,

    // Echo console logs from the browser to the server
    console: true,
  },
});

console.log(`🚀 Server running at ${server.url}`);
