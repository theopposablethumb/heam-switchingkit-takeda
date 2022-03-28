const path = require('path');

const express = require('express');
const Router = express.Router();

const rootDir = require('../util/path');

const navigation = require('../util/navigation');


Router.get('/', (req, res, next) => {
  res.render('home', {
    docTitle: 'Haemophilia Patient Website | Takeda',
    menu: navigation.fullNav,
    path: '/'
  });
});

Router.get('/advate', (req, res, next) => {
  res.render('advate', {
    docTitle: 'ADVATE (octocog alfa) – for the treatment of haemophilia A | Takeda',
    menu: navigation.advateNav,
    path: '/advate'
  });
});

Router.get('/advate-resources', (req, res, next) => {
  res.render('advate-resources', {
    docTitle: 'ADVATE (octocog alfa) resources for patients | Takeda',
    menu: navigation.advateNav,
    path: '/advate-resources'
  });
});


Router.get('/adyvoni', (req, res, next) => {
  res.render('adyvoni', {
    docTitle: 'ADYNOVI (rurioctocog alfa pegol) – for the treatment of haemophilia A | Takeda',
    menu: navigation.adyvoniNav,
    path: '/adyvoni'
  });
});

Router.get('/adyvoni-resources', (req, res, next) => {
  res.render('adyvoni-resources', {
    docTitle: 'ADYNOVI (rurioctocog alfa pegol) resources for patients | Takeda',
    menu: navigation.adyvoniNav,
    path: '/adyvoni-resources'
  });
});

Router.get('/living-with-haemophilia', (req, res, next) => {
  res.render('haemophilia', {
    docTitle: 'Living with Haemophilia | Takeda',
    menu: navigation.fullNav,
    path: '/living-with-haemophilia'
  });
});

module.exports = Router;