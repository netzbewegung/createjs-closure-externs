/**
 * @fileoverview Externs for createjs
 * @externs
 */

/**
 * @constructor
 */
createjs.EventDispatcher  = function() {};

/**
 * @param {string} type
 * @param {Function|Object} listener
 * @param {boolean=} useCapture
 * @return {Function|Object}
 */
createjs.EventDispatcher.prototype.addEventListener  = function(type, listener, useCapture) {};

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
 * @param {string} type
 * @param {Function|Object} listener
 * @param {boolean=} useCapture
 * @return {boolean}
 */
createjs.EventDispatcher.prototype.off = function(type, listener, useCapture) {};

/**
 * @param {string} type
 * @param {Function|Object} listener
 * @param {Object=} scope
 * @param {boolean=} once
 * @param {*=} data
 * @param {boolean=} useCapture
 * @return {boolean}
 */
createjs.EventDispatcher.prototype.on = function(type, listener, scope, once, data, useCapture) {};

/**
 * @param {string=} type
 */
createjs.EventDispatcher.prototype.removeAllEventListeners = function(type) {};

/**
 * @param {string} type
 * @param {Function|Object} listener
 * @param {boolean=} useCapture
 */
createjs.EventDispatcher.prototype.removeEventListener = function(type, listener, useCapture) {};

/**
 * @return {string}
 */
createjs.EventDispatcher.prototype.toString = function() {};