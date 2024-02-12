# Example Webhook Server
This repository contains a simple Node.js server that demonstrates how to set up a webhook endpoint for ZeroDev's custom gas policy.

## Overview

The server is built with Express.js and sets up a single POST endpoint that listens for incoming webhook requests. It listens on port 3030 by default.

When a request is received, the server logs the payload to the console and responds with a JSON object containing a proceed: true key-value pair, indicating that any incoming operation should be sponsored.

## Installation

To install the server, clone the repository and run the following commands:

```bash
cd example-webhook-server
npm install
npm start
```

### Example Request:
Here's an example of how you can send a request to the server using cURL:

```bash
curl -X POST http://localhost:3030/webhook \
-H "Content-Type: application/json" \
-d '{
  "projectId": "project_123",
  "userOp": {
    "sender": "0x...",
    "nonce": "0x...",
    "initCode": "0x...",
    "callData": "0x...",
    "paymasterAndData": "0x...",
    "signature": "0x...",
    "maxFeePerGas": "0x...",
    "maxPriorityFeePerGas": "0x...",
    "callGasLimit": "0x...",
    "verificationGasLimit": "0x...",
    "preVerificationGas": "0x..."
  },
  "chainId": 1
}'
```