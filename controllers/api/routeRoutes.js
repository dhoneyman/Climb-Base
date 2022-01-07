const router = require('express').Router();
const { Router } = require('express');
const { Route, Rating, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/:id', async (req, res) => {
  try{
    // console.log(req.params.id);
    const route = await Route.findAll({
      where:
      {
        wall_id: req.params.id
      }})

      const userData = await User.findAll()
      const user = userData.map((user) => user.get({ plain: true }));
      console.log(user)

      const routes = route.map((route) => route.get({ plain: true }));

      console.log(routes);

    res.status(200).json(routes);
  } catch (err) {
    res.status(400).json(err.message);
  }
});



router.post('/', withAuth, async (req, res) => {

  try {
    console.log(req.body)
    const newRoute = await Route.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    
    res.status(200).json(newRoute);
    
    
  } catch (error) {
console.log(error)
    res.status(400).json(error);
    
  }

});

router.post('/:id', withAuth, async (req, res) => {
  try {
    // console.log(req.body)
    const newRating = await Rating.create({
      ...req.body,
      route_id: req.params.id,
      user_id: req.session.user_id
    });
    res.status(200).json(newRating);

  } catch (error) {
    res.status(400).json(error);
    console.log(error);
  }
});

module.exports = router;