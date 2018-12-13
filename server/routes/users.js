/*eslint no-undef: "error"*/
/*eslint-env node*/
const express = require('express');
const router = express.Router();
const controller = require('../controller/controlUser');

//const bcrypt = require('bcryptjs');
//const jwt = require('jsonwebtoken');
//const keys = require('../../config/keys');
const passport = require('passport');

// @route   GET api/users/test
// @desc    Tests users route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Users Works' }));
// @route   Post api/users/register
// @desc    Register users route
// @access  Public
router.post('/register', controller.user_register);
// @route   Post api/users/login
// @desc    Login users route
// @access  Public
router.post('/login', controller.user_login);
// @route   Get api/users/current
// @desc    Login users route
// @access  Private
router.get('/current', passport.authenticate('jwt', {session:true}), controller.current_user);

module.exports = router;