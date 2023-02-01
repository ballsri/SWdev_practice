const express = require('express');
const {getHospitals, getHospital, createHospital, updateHospital, deleteHospital} = require('../controllers/hospitals');
var Router = express.Router();

Router.route('/').get(getHospitals).post(createHospital);
Router.route('/:id').get(getHospital).put(updateHospital).delete(deleteHospital);

module.exports = Router;