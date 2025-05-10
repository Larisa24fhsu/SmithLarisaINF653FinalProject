const statesJson = require('../models/states.json');

const getState = (stateCode) => {
    const jsonState = statesJson.filter(state => state.code === stateCode)[0];
    return jsonState.state;
}

module.exports = getState;