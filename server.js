const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/weather', async (req, res) => {
    try {
        const { lat, lon } = req.query;

        const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
            params: {
                lat,
                lon,
                appid: process.env.API_KEY,
                units: 'metric'
            }
        });

        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});