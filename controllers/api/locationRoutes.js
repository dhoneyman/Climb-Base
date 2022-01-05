const router = require('express').Router();
// const { Project } = require('../../models');
// const withAuth = require('../../utils/auth');

router.get('/:id', async (req, res) => {
  try{
    console.log(req.params.id);
    let array = ['hueco tanks', 'enchanted rock', 'reimers ranch'];
    res.status(200).json(array);
  } catch (err) {
    res.status(400).json(err);
  }
});



module.exports = router;