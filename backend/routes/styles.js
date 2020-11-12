var router = require('express').Router();
let Style = require('../models/style.model');


router.route('/').get((req, res) => {
  Style.find()
    .then(br => res.json(br))
    .catch(err => err.status(400).json('Error: ' + err))
});

router.route('/add').post((req, res) => {
  const name = req.body.name;
  const newStyle = new Style({
    name
  });

  newStyle.save()
    .then(() => res.json('Style added!'))
    .catch(err => res.status(400).json('Error: ' + err));

});

router.route('/:id').get((req, res) => {
  Style.findById(req.params.id)
    .then(ex => res.json(ex))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route('/:id').delete((req, res) => {
  Style.findByIdAndDelete(req.params.id)
    .then(() => res.json("Style deleted!"))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route('/update/:id').post((req, res) => {
  Style.findById(req.params.id)
    .then(style => {
      style.name = req.body.name;
      style.save()
        .then(() => res.json('Style updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;
