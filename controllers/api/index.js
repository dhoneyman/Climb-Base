const router = require('express').Router();
// const userRoutes = require('./userRoutes');
const locationRoutes = require('./locationRoutes');
// const areaRoutes = require('./areaRoutes');
// const wallRoutes = require('./wallRoutes');

// router.use('/users', userRoutes);
router.use('/location', locationRoutes);
// router.use('/area', areaRoutes);
// router.use('/wall', wallRoutes);

module.exports = router;