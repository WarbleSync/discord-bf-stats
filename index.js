const config = require('./config.json');
const assert = require('assert');
const BattlefieldStats = require('battlefield-stats');
const bf = new BattlefieldStats(config.API_KEY);

class DiscordBFStats {
  constructor(client){
    assert(client,'Discord client missing');
  }
}

module.exports = DiscordBFStats;
