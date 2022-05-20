const path = require('path');

const express = require('express');
const Router = express.Router();

const rootDir = require('../util/path');

const navigation = require('../util/navigation');


Router.get('/', (req, res, next) => {
  res.render('home', {
    docTitle: 'Haemophilia Patient Website | Takeda',
    menu: {
      default: navigation.noResourcesNav,
      adynovi: navigation.adynoviNav,
      advate: navigation.advateNav
    },
    path: '/',
    prev: req.get('Referer')
  });
});
//  || '').split('/')[3]
Router.get('/advate', (req, res, next) => {
  res.render('advate', {
    docTitle: 'ADVATE (octocog alfa) – for the treatment of haemophilia A | Takeda',
    menu: {
      default: navigation.advateNav
    },
    path: '/advate',
    prev: req.get('Referer')
  });
});

Router.get('/advate-resources', (req, res, next) => {
  res.render('advate-resources', {
    docTitle: 'ADVATE (octocog alfa) resources for patients | Takeda',
    menu: {
      default: navigation.advateNav
    },
    path: '/advate-resources',
    prev: req.get('Referer')
  });
});


Router.get('/adynovi', (req, res, next) => {
  res.render('adynovi', {
    docTitle: 'ADYNOVI (rurioctocog alfa pegol) – for the treatment of haemophilia A | Takeda',
    menu: {
      default: navigation.adynoviNav
    },
    path: '/adynovi',
    prev: req.get('Referer')
  });
});

Router.get('/adynovi-resources', (req, res, next) => {
  res.render('adynovi-resources', {
    docTitle: 'ADYNOVI (rurioctocog alfa pegol) resources for patients | Takeda',
    menu: {
      default: navigation.adynoviNav
    },
    path: '/adynovi-resources',
    prev: req.get('Referer')
  });
});

Router.get('/living-with-haemophilia', (req, res, next) => {
  res.render('haemophilia', {
    docTitle: 'Living with Haemophilia | Takeda',
    menu: {
      default: navigation.noResourcesNav,
      adynovi: navigation.adynoviNav,
      advate: navigation.advateNav
    },
    path: '/living-with-haemophilia',
    prev: req.get('Referer')
  });
})

Router.get('/terms-of-use', (req, res, next) => {
  res.render('terms', {
    docTitle: 'Contact and reporting Adverse Effects | Takeda',
    menu: {
      default: navigation.noResourcesNav
    },
    path: '/terms-of-use',
    prev: req.get('Referer')
  });
})

Router.get('/contact', (req, res, next) => {
  res.render('contact', {
    docTitle: 'Contact and reporting Adverse Effects | Takeda',
    menu: {
      default: navigation.noResourcesNav
    },
    path: '/contact',
    prev: req.header('Referer')
  });
})

module.exports = Router;