// Based on: https://deno.land/std@0.163.0/http/mod.ts?s=Server

import { Server } from "https://deno.land/std@0.163.0/http/mod.ts";

const port = 4505;
const handler = (request: Request) => {
    //const userAgent = request.headers.get("user-agent") ?? "Unknown";
    //const body = `Your user-agent is:\n\n${userAgent}`;

    //return new Response(body, { status: 200 });
    return new Response("Hello, World!\n\nFrom Little Linux Server", { status: 200 });
};

const server = new Server({ port, handler });

console.log(`Listening on http://localhost:${port}`);

server.listenAndServe();
