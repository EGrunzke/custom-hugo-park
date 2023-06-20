import fetch from "node-fetch";
import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";
import { schedule } from "@netlify/functions";

// This is a sample build hook URL
const BUILD_HOOK =
  "https://api.netlify.com/build_hooks/648b903f2842e50453dd0342";

// Schedules the handler function to run at 5pm on Tuesday and Friday
// Schedule is in UTC so 10pm UTC = 4pm MDT
const myHandler: Handler = async (
  event: HandlerEvent,
  context: HandlerContext
) => {
  await fetch(BUILD_HOOK, {
    method: "POST",
  }).then((response) => {
    console.log("Build hook response:", response);
  });

  return {
    statusCode: 200,
  };
};

const handler = schedule("0 22 * * 2,5", myHandler);

export { handler };
