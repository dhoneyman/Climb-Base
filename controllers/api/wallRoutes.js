const router = require('express').Router();
// const { Project } = require('../../models');
const { Wall } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/:id', async (req, res) => {
  try{
    console.log(req.params.id);
    const wall = await Wall.findAll({
      where:
      {
        location_id: req.params.id
      }})
      const walls = wall.map((wall) => wall.get({ plain: true }));

    res.status(200).json(walls);
  } catch (err) {
    res.status(400).json(err.message);
  }
});



module.exports = router;