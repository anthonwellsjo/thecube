var router = require('express').Router();
let Piece = require('../models/piece.model');


router.route('/').get((req, res) => {
  Piece.find()
    .then(br => res.json(br))
    .catch(err => err.status(400).json('Error: ' + err))
});

router.route('/add').post((req, res) => {
  const category = req.body.category;
  const style = req.body.style;
  const material = req.body.material;
  const description = req.body.description;
  const brand = req.body.brand;
  const productionYear = req.body.productionYear;
  const newPiece = new Piece({
    category,
    style,
    material,
    description,
    brand,
    productionYear,
  });

  newPiece.save()
    .then(() => res.json('Piece added!'))
    .catch(err => res.status(400).json('Error: ' + err));

});

router.route('/:id').get((req, res) => {
  Piece.findById(req.params.id)
    .then(ex => res.json(ex))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route('/:id').delete((req, res) => {
  Piece.findByIdAndDelete(req.params.id)
    .then(() => res.json("Piece deleted!"))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route('/update/:id').post((req, res) => {
  Piece.findById(req.params.id)
    .then(piece => {
      piece.category = req.body.category;
      piece.style = req.body.style;
      piece.material = req.body.material;
      piece.description = req.body.description;
      piece.brand = req.body.brand;
      piece.productionYear = req.body.productionYear;
      piece.save()
        .then(() => res.json('Piece updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;
