const verifyJWT = require('./verifyJWT');
const statesJson = require('../models/statesData.json');

const jsonMessage = (req, res, stateInfo='none') => {
    if (verifyJWT(req)) {
        const jsonState = statesJson.find(s => s.code == req.params.state.toUpperCase());
        const message = { 'state': jsonState.state };
        switch (stateInfo) {
            case 'admission': message['admitted'] = jsonState.admission_date; break;
            case 'capital': message['capital'] = jsonState.capital_city; break;
            case 'nickname': message['nickname'] = jsonState.nickname; break;
            case 'population': message['population'] = jsonState.population.toLocaleString("en-US");; break;
            default: message['default'] = 'reached default message in switch case.';
        }
        return res.json(message);
    } else {
        return res.status(400).json({ "message": `Invalid state abbreviation parameter` });
    }
}

module.exports = jsonMessage;