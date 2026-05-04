require('dotenv').config();
const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.json()); // для парсинга JSON

const PORT = 3000;

app.post('/api/chat', async (req, res) => {
  const { message } = req.body;

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: message }],
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        },
      }
    );

    const reply = response.data.choices[0].message.content;
    res.json({ reply });
  } catch (err) {
    console.error('Ошибка при обращении к OpenAI:', err.message);
    res.status(500).json({ error: 'Ошибка при обращении к OpenAI' });
  }
});

app.use(express.static(__dirname)); // обслуживать статические файлы из папки

app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
