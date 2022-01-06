const router = require('express').Router();
const { json } = require('express');
const { Route, User, Wall, Location, State, Rating } = require('../models');
const withAuth = require('../utils/auth');



router.get('/', async (req, res) => {
  try {
    const stateData = await State.findAll()
    const states = stateData.map((state) => state.get({ plain: true }));
    
    const routeData = await Route.findAll()
    // console.log(routeData);
    const routes = routeData.map((route) => route.get({ plain: true }));
    
    const topTenRoutesData = await Rating.findAll({ 
      include: Route,


      limit: 10,
      order: [["rating",'DESC']]
      
      });

      // console.log(topTenRoutesData, "=================")

const topten = topTenRoutesData.map((topTenRoute) => topTenRoute.get({ plain: true }));
  //  console.log(topten, "=================") 
  res.render('homepage', {
      states, routes, topten
});
  }
   catch (err) {
     res.status(500).json(err);
   }
});



router.get('/route/:id', async (req, res) => {
  try {
    const routeData = await Route.findByPk(req.params.id, {
    });

    const tenRoutes = await Route.findAll({ 
      include: [ 
        { 
          model: Rating,
          attributes: rating,
        }],  


      limit: 10 ,
      order: 'rating DESC'
      });


    const route = routeData.get({ plain: true });
    res.render('route', {
      ...route,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get('/location/:id', async (req, res) => {
  try {
    const locationData = await Location.findByPk(req.params.id, {
    });
    const locations = locationData.get({ plain: true });
    res.render('location', {
      ...locations,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get('/wall/:id', async (req, res) => {
  try {
    const wallData = await Wall.findByPk(req.params.id, {
    });
    const walls = wallData.get({ plain: true });
    res.render('walls', {
      ...walls,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    const stateData = await State.findAll()
    const states = stateData.map((state) => state.get({ plain: true }));
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      // include: [{ model: Route }],
    });
    console.log(userData);
    const user = userData.get({ plain: true });
    res.render('profile', {
      states,
      ...user,
      logged_in: true
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }
  res.render('login');
});

router.post('/newRoute', async (req, res) => {
  try {
    const userData = await User.create(req.body);
    // 200 status code means the request is successful
    res.status(200).json(userData);
  } catch (err) {
    // 400 status code means the server could not understand the request
    res.status(400).json(err);
  }
});
module.exports = router;























