var express = require('express');
var router = express.Router();

// different http requests

router.get('/info', function(req, res, next) {
  res.send('Some information.');
});

// request params
router.get('/info/:name', function(req, res, next) {
  res.json({
    name: req.params['name'],
    status: 'loser',
    age: 'too old',
    favoriteColor: req.query['color'] || 'none'
  });
});

router.get('/author', function(req, res, next) {
  res.send('William Luo.');
});

router.post('/submit', function(req, res, next) {
  res.send('Received POST request.');
});

router.delete('/delete', function(req, res, next) {
  res.send('Received delete request.');
});

// redirect
router.get('/goto/:site', (req,res) => {
  res.redirect(`http://www.${req.params['site'] || 'google'}.com`);
});

// more crap
router.get('/download/:file', (req,res) => res.download(`public/files/${req.params['file']}`,err => {
  if(!res.headersSent){
    console.log(`shit broke: ${err.message}`);
    res.send(404, `Couldn't find file: '${req.params['file']}.'`);
  }
})
);

// multiple callbacks
router.get('/secret', function(req, res, next) {
  console.log(`Someone's accessing the secret path!`);
  next(); // must call next to trigger next call back
}, function (req,res) {
  res.send('Congrats, you found the secret!');
});
module.exports = router;
