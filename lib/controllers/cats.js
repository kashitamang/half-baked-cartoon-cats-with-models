// const { Router } = require('express');
// const router = Router();
// const { cats } = require('../../data/cats');

// router
//   .get('/:id', (req, res) => {
//     const cat = cats.find((cat) => cat.id === req.params.id);
//     res.json(cat);
//   })
//   .get('/', (req, res) => {
//     // console.log(cats);

//     const data = cats.map((cat) => {
//       return { id: cat.id, name: cat.name };
//     });
//     res.json(data);
//   });

// module.exports = router;

const { Router } = require('express');
const Cat = require('../models/Cat');

module.exports = Router()
  .get('/:id', async (req, res) => {
    console.log('id param:', req.params.id);
    const cat = await Cat.getById(req.params.id);
    res.json(cat);
  })
  .get('/', async (req, res) => {
    // console.log(cats);
    const cats = await Cat.getAll();
    console.log(cats);
    const ids = cats.map((cat) => ({ id: cat.id, name: cat.name }));
    console.log(ids);
    res.json(cats);
  });
