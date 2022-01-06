const router = require('express').Router();
// const { Project } = require('../../models');
const { Location } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/:id', async (req, res) => {
  try{
    console.log(req.params.id);
    const location = await Location.findAll({
      where:
      {
        state_id: req.params.id
      }})
      const locations = location.map((location) => location.get({ plain: true }));

    res.status(200).json(locations);
  } catch (err) {
    res.status(400).json(err.message);
  }
});



module.exports = router;