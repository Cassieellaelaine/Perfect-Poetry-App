const router = require('express').Router();
const userRoutes = require('./userRoutes');
const poetryRoutes = require('./poetryRoutes');
const cool = require('cool-ascii-faces')

router.use('/users', userRoutes);
router.use('/poetry', poetryRoutes);
router.use('/cool', cool)

module.exports = router;
