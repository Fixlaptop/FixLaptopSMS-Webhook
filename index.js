const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('FixLaptopSMS Webhook is live!');
});

app.post('/webhook', (req, res) => {
  console.log('📨 Webhook received:', req.body);
  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
