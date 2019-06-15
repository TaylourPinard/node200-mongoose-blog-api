const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog');

router.get('/', (req, res) => {
  Blog
    .find()
    .then(blogs => {
      res.status(200).json(blogs);
    });
});

router.get('/:id', (req, res) => {
  Blog
    .findById(req.params.id)
    .then(blog => {
      if(!blog) return res.status(404).send();
      else return res.status(200).json(blog);
    })
});

router.get('/featured', (req, res) => {
  Blog
    .where("featured", true)
    .then(blogs => {
      if(!blogs) return res.status(404).send();
      else return res.status(200).json(blogs);
    })
    .catch(err => res.status(500).send('bad request'));
});

module.exports = router;