const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());


app.get('/getMusicData', async (req, res) => {
  const searchTerm = req.query.term || 'default search term'; // Use a default term if none provided
  const options = {
      method: 'GET',
      url: 'https://shazam.p.rapidapi.com/search',
      params: {
          term: searchTerm,
          locale: 'en-US',
          offset: '0',
          limit: '5'
      },
      headers: {
          'X-RapidAPI-Key': 'eeea442db8msh7077faca24c1c9ep199eabjsn64550c626bf7',
          'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
      }
  };

  try {
      const response = await axios.request(options);
      res.json(response.data);
  } catch (error) {
      console.error(error);
      res.status(500).send('Error fetching music data');
  }
});


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});