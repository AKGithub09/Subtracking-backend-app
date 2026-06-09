import {Client as WorkflowClient} from '@upstash/workflow';

import {QSTASH_URL, QSTASH_TOKEN} from "./env.js";

console.log("DEBUG: Initializing QStash with URL:", QSTASH_URL);
console.log("DEBUG: Initializing QStash with TOKEN:", QSTASH_TOKEN);

export const workflowClient = new WorkflowClient({
    baseUrl: QSTASH_URL,
    token: QSTASH_TOKEN,
})
