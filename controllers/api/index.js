const router = require('express').Router();
const userRoutes = require('./userRoutes');
const blogCommentRoutes = require('./blogComment-route');
const blogPostRoutes =  require('./blogPost-route')

router.use('/users', userRoutes);
router.use('/blogComment', blogCommentRoutes);
router.use('/blogPost', blogPostRoutes);

module.exports = router;
