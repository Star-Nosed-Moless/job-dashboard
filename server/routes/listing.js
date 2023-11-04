const express = require('express');

const listingController = require('../controllers/listingController');

const router = express.Router();

router.get('/', listingController.getAllListings, (req, res) => {
  return res.status(200).json(res.locals.listings)
});

router.post('/', listingController.addListing, (req, res) => {
  return res.status(200).json(res.locals.newListing);
});

module.exports = router;