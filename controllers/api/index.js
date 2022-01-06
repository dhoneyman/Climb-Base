const router = require('express').Router();
// const userRoutes = require('./userRoutes');
const locationRoutes = require('./locationRoutes');
// const areaRoutes = require('./areaRoutes');
const wallRoutes = require('./wallRoutes');
const routeRoutes = require('./routeRoutes');

// router.use('/users', userRoutes);
router.use('/location', locationRoutes);
// router.use('/area', areaRoutes);
router.use('/wall', wallRoutes);
router.use('/route', routeRoutes);

module.exports = router;