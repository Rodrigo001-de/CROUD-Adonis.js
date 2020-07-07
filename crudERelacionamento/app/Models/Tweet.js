'use strict'


const Model = use('Model')

class Tweet extends Model {
  user() {
    return this.belongsTo('App/Models/User'); // Um Tweet pertence a um usuario
  }
}

module.exports = Tweet
