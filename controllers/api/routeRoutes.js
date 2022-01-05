const router = require('express').Router();
const { Router } = require('express');
const { Route } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/:id', async (req, res) => {
  try{
    console.log(req.params.id);
    const route = await Route.findAll({
      where:
      {
        wall_id: req.params.id
      }})
      const routes = route.map((route) => route.get({ plain: true }));

    res.status(200).json(routes);
  } catch (err) {
    res.status(400).json(err.message);
  }
});



router.post('/', withAuth, async (req, res) => {

  try {

    const newRoute = await Route.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newRoute);

    
  } catch (error) {

    res.status(400).json(err);
    
  }

});

module.exports = router;