// pulled from mini project

const router = require('express').Router();

// const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes.js');
const postsRoutes = require('./posts-routes.js');

router.use('/', homeRoutes);
router.use('/posts', postsRoutes);
// router.use('/api', apiRoutes);

module.exports = router;
