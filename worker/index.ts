/** Cloudflare Worker entry point for the JC Filters website. */
import handler from "vinext/server/app-router-entry";

interface Env {
  ASSETS: Fetcher;
}

interface ExecutionContext {
  waitUntil(promise: Promise<unknown>): void;
  passThroughOnException(): void;
}

const worker = {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);

    if (url.hostname === "txjiacheng.com") {
      url.hostname = "www.txjiacheng.com";
      return Response.redirect(url.toString(), 308);
    }

    return handler.fetch(request, env, ctx);
  },
};

export default worker;
