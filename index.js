const express = require('express');
const { MessagingResponse } = require('twilio').twiml;

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('FixLaptopSMS Webhook is live!');
});

app.post('/sms', (req, res) => {
  const twiml = new MessagingResponse();
  twiml.message("Thanks for texting FixLaptop.com! We’ll reply shortly.");
  res.type('text/xml');
  res.send(twiml.toString());
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
