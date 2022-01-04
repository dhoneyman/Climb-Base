const router = require('express').Router();
const { Router } = require('express');
const { Route } = require('../../models');
const withAuth = require('../../utils/auth');

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