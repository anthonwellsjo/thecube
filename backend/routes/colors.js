var router = require('express').Router();
let Color = require('../models/color.model');


router.route('/').get((req, res) => {
  Color.find()
    .then(br => res.json(br))
    .catch(err => err.status(400).json('Error: ' + err))
});

router.route('/add').post((req, res) => {
  const name = req.body.name;
  const newColor = new Color({
    name
  });

  newColor.save()
    .then(() => res.json('Color added!'))
    .catch(err => res.status(400).json('Error: ' + err));

});

router.route('/:id').get((req, res) => {
  Color.findById(req.params.id)
    .then(ex => res.json(ex))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route('/:id').delete((req, res) => {
  Color.findByIdAndDelete(req.params.id)
    .then(() => res.json("Color deleted!"))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route('/update/:id').post((req, res) => {
  Color.findById(req.params.id)
    .then(color => {
      color.name = req.body.name;
      color.save()
        .then(() => res.json('Color updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;
