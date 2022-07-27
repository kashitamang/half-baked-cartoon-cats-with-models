const { Router } = require('express');
const router = Router();
const { cats } = require('../../data/cats');

router
  .get('/:id', (req, res) => {
    const cat = cats.find((cat) => cat.id === req.params.id);
    res.json(cat);
  })
  .get('/', (req, res) => {
    // console.log(cats);

    const data = cats.map((cat) => {
      return { id: cat.id, name: cat.name };
    });
    res.json(data);
  });

module.exports = router;
