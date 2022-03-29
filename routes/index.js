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


Router.get('/adynovi', (req, res, next) => {
  res.render('adynovi', {
    docTitle: 'ADYNOVI (rurioctocog alfa pegol) – for the treatment of haemophilia A | Takeda',
    menu: navigation.adynoviNav,
    path: '/adynovi'
  });
});

Router.get('/adynovi-resources', (req, res, next) => {
  res.render('adynovi-resources', {
    docTitle: 'ADYNOVI (rurioctocog alfa pegol) resources for patients | Takeda',
    menu: navigation.adynoviNav,
    path: '/adynovi-resources'
  });
});

Router.get('/living-with-haemophilia', (req, res, next) => {
  res.render('haemophilia', {
    docTitle: 'Living with Haemophilia | Takeda',
    menu: navigation.fullNav,
    path: '/living-with-haemophilia'
  });
})

Router.get('/terms-of-use', (req, res, next) => {
  res.render('terms', {
    docTitle: 'Contact and reporting Adverse Effects | Takeda',
    menu: navigation.fullNav,
    path: '/terms-of-use'
  });
})

Router.get('/contact', (req, res, next) => {
  res.render('contact', {
    docTitle: 'Contact and reporting Adverse Effects | Takeda',
    menu: navigation.fullNav,
    path: '/contact'
  });
})

module.exports = Router;