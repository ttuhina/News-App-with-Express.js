const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
const NEWS_API_KEY = 'df82eb3f421e45baafba36d422925170'; 

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware to serve static files from the "public" directory
app.use(express.static('public'));

// Home Route - Serve the main HTML page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route to fetch top headlines
app.get('/news/top', async (req, res) => {
    try {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${NEWS_API_KEY}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching top headlines' });
    }
});

// Route to search news by keyword
app.get('/news/search', async (req, res) => {
    const { query } = req.query;
    if (!query) {
        return res.status(400).json({ error: 'Query parameter is required' });
    }

    try {
        const response = await axios.get(`https://newsapi.org/v2/everything?q=${query}&apiKey=${NEWS_API_KEY}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error searching for news' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
