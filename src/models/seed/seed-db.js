'use strict';

import models, { sequelize } from '../';
const _SPEAKERS = require('./speakers.json');
const _SESSIONS = require('./sessions.json');
 
const seed = {
  insert: () => {
    models.Speaker.bulkCreate(_SPEAKERS)
    .then(() => {
      models.Session.bulkCreate(_SESSIONS)
    .then(users => {
      console.log('Success adding sessions and speakers');
      })
    })
    .catch(error => {
       console.log(error);
    })
  }
}

export default seed;
