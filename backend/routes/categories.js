var router = require('express').Router();
let Category = require('../models/category.model');


router.route('/').get((req, res) => {
  Category.find()
    .then(br => res.json(br))
    .catch(err => err.status(400).json('Error: ' + err))
});

router.route('/add').post((req, res) => {
  const name = req.body.name;
  const newCategory = new Category({
    name
  });

  newCategory.save()
    .then(() => res.json('Category added!'))
    .catch(err => res.status(400).json('Error: ' + err));

});

router.route('/:id').get((req, res) => {
  Category.findById(req.params.id)
    .then(ex => res.json(ex))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route('/:id').delete((req, res) => {
  Category.findByIdAndDelete(req.params.id)
    .then(() => res.json("Category deleted!"))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route('/update/:id').post((req, res) => {
  Category.findById(req.params.id)
    .then(category => {
      category.name = req.body.name;
      category.save()
        .then(() => res.json('Category updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;
