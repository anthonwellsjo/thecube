var router = require('express').Router();
let Brand = require('../models/brand.model');


router.route('/').get((req, res) => {
  Brand.find()
    .then(br => res.json(br))
    .catch(err => err.status(400).json('Error: ' + err))
});

router.route('/add').post((req, res) => {
  const name = req.body.name;
  const newBrand = new Brand({
    name
  });

  newBrand.save()
    .then(() => res.json('Brand added!'))
    .catch(err => res.status(400).json('Error: ' + err));

});

router.route('/:id').get((req, res) => {
  Brand.findById(req.params.id)
    .then(ex => res.json(ex))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route('/:id').delete((req, res) => {
  Brand.findByIdAndDelete(req.params.id)
    .then(() => res.json("Brand deleted!"))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route('/update/:id').post((req, res) => {
  Brand.findById(req.params.id)
    .then(brand => {
      brand.name = req.body.name;
      brand.save()
        .then(() => res.json('Brand updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;
