const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes.js');

// localhost:3001/api
router.use('/api', apiRoutes);

// localhost:3001/
router.use('/', homeRoutes)

module.exports = router;
