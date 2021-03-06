var Marty = require('marty');
var MessageConstants = require('constants/messageConstants');

var MessageSourceActionCreators = Marty.createActionCreators({
  addMessage: MessageConstants.ADD_MESSAGE(),
  addMessages: MessageConstants.ADD_MESSAGES(),
  updateMessage: MessageConstants.UPDATE_MESSAGE()
});

module.exports = MessageSourceActionCreators;