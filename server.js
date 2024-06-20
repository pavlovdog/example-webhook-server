const express = require('express');
const app = express();
const PORT = 3030;

// Middleware to parse the incoming requests with JSON payloads
app.use(express.json());

app.post('/webhook-approve', (req, res) => {
  const { userOp, chainId, projectId } = req.body;
  console.log('Webhook data received:', userOp, chainId, projectId);

  // Add some logic to determine if the userop should be sponsored

  // If the userOp should be sponsored, return proceed: true. Else, return proceed: false
  res.json({ proceed: true }); 
});

app.post('/webhook-reject', (req, res) => {
  const { userOp, chainId, projectId } = req.body;
  console.log('Webhook data received:', userOp, chainId, projectId);

  // Add some logic to determine if the userop should be sponsored

  // If the userOp should be sponsored, return proceed: true. Else, return proceed: false
  res.status(500).json({ proceed: false }); 
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

