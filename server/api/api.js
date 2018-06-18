const express = require('express');
const router = express.Router();
const exec = require('child_process').exec;

// declare axios for making http requests
const axios = require('axios');

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

// Get all posts
router.get('/pdata', (req, res) => {
  // The path here is relative to where the server.js file is located!
  exec('py ./server/python_scripts/TEST.py', (error,stdout, stderr) => {
    if (error) {
      console.log("error.code: ", error.code);
      console.log("stderr: ", stderr);
      res.status(500).send('posts err');
    } else {
      console.log("stdoutJSON: ", JSON.parse(stdout));
      res.status(200).send(JSON.parse(stdout));
    }
  });
  /*  
  axios.get(`${API}/posts`)
    .then(posts => {
      res.status(200).json(posts.data);
    })
    .catch(error => {
      res.status(500).send(error)
    });
  */
});

module.exports = router;