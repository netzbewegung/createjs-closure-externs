/**
 * @fileoverview Externs for the easeljs
 * @externs
 */

/**
 * @constructor
 */
createjs.EventDispatcher  = function() {};

/**
 * @param {string} type
 * @param {Function|Object} listener
 * @return {Function|Object}
 */
createjs.EventDispatcher.prototype.addEventListener  = function(type, listener) {};

/**
 * @param {Object|String} eventObj
 * @param {Object=} target
 * @return {boolean}
 */
createjs.EventDispatcher.prototype.dispatchEvent = function(eventObj, target) {};

/**
 * @param {string} type
 * @return {boolean}
 */
createjs.EventDispatcher.prototype.hasEventListener = function(type) {};

/**
 * @param {Object} target 
 */
createjs.EventDispatcher.initialize = function(target) {};

/**
 * @param {string=} type
 */
createjs.EventDispatcher.prototype.removeAllEventListeners = function(type) {};

/**
 * @param {string} type
 * @param {Function|Object} listener
 */
createjs.EventDispatcher.prototype.removeEventListener = function(type, listener) {};

/**
 * @return {string}
 */
createjs.EventDispatcher.prototype.toString = function() {};