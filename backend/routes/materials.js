var router = require('express').Router();
let Material = require('../models/material.model');


router.route('/').get((req, res) => {
  Material.find()
    .then(br => res.json(br))
    .catch(err => err.status(400).json('Error: ' + err))
});

router.route('/add').post((req, res) => {
  const type = req.body.type;
  const newMaterial = new Material({
    type
  });

  newMaterial.save()
    .then(() => res.json('Material added!'))
    .catch(err => res.status(400).json('Error: ' + err));

});

router.route('/:id').get((req, res) => {
  Material.findById(req.params.id)
    .then(ex => res.json(ex))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route('/:id').delete((req, res) => {
  Material.findByIdAndDelete(req.params.id)
    .then(() => res.json("Material deleted!"))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route('/update/:id').post((req, res) => {
  Material.findById(req.params.id)
    .then(material => {
      material.type = req.body.type;
      material.save()
        .then(() => res.json('Material updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;
