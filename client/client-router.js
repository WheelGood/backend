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

  const places = await axios.get(
    `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lon}&radius=5000&type=${type &&
      type}&key=${process.env.GOOGLE_MAPS_KEY}`
  );

  const userReviews = await Client.find(
    await places.data.results.map(({ place_id }) => place_id)
  );

  const processedPlaces = places.data.results.map(
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
        user_reviews: userReviews.filter(
          review => review.place_id === place_id
        ),
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
