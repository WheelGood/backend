const express = require('express');
const Client = require('./client-model.js');
const router = express.Router();
const axios = require('axios');

router.get('/', (req, res) => {
  Client.find()
    .then(response => {
      console.log(response);
      res.status(200).json({ message: 'Route working', data: response });
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ message: 'Route not working', error });
    });
});

router.get('/places', async (req, res) => {
  const { type } = req.query;
  const { lat = 47.60215, lon = -122.325971 } = req.body;
  let pages = [];
  for (let i = 0; i < 3; i++) {
    const result = await axios.get(
      `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lon}&token=${i &&
        pages[i - 1].next_page_token}&radius=5000&type=${type &&
        type}&key=AIzaSyD6uTz5FgrjeFemGyMtywx9MOYmqx7oaT8`
    );
    pages[i] = result.data;
  }

  let places = [];
  pages.forEach(page => {
    page.results.forEach(place => {
      places.push(place);
    });
  });

  const processedPlaces = places.map(
    ({
      place_id,
      name,
      geometry: { location },
      photos,
      types,
      opening_hours
    }) => {
      return {
        place_id,
        ai_accessibility:
          Math.random(1) > 0.3 ? (Math.random(1) > 0.5 ? true : false) : null,
        ai_score: Math.random(1),
        user_rating: [-1, 0, 1, null][Math.round(Math.random()) * 3],
        name,
        location,
        photos,
        types,
        opening_hours
      };
    }
  );
  res.status(200).json(processedPlaces);
});

module.exports = router;
