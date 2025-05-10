const express = require('express');
const router = express.Router();
const statesController = require('../controllers/statesController');
const data = {};
data.states = require('../models/statesData.json');
const verifyJWT = require('../middleware/verifyJWT.js'); // Optional if not used here

// Validate the :state parameter
router.param('state', (req, res, next, state) => {
    const validStates = data.states.map(state => state.code.toUpperCase());
    console.log(`Validating state: ${state}`);
    if (!validStates.includes(state.toUpperCase())) {
        return res.status(400).json({ message: 'Invalid state abbreviation parameter' });
    }
    next();
});

// Routes
router.route('/')
    .get(statesController.getAllStates);

router.route('/:state')
    .get(statesController.getState);

router.route('/:state/funfact')
    .get(statesController.getFunfact)
    .post(statesController.createNewFunfacts)
    .patch(statesController.updateFunfact)
    .delete(statesController.deleteFunfact);

router.route('/:state/capital')
    .get(statesController.getCapital);

router.route('/:state/nickname')
    .get(statesController.getNickname);

router.route('/:state/population')
    .get(statesController.getPopulation);

router.route('/:state/admission')
    .get(statesController.getAdmission);

module.exports = router;
