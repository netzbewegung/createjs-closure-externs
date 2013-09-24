/**
 * @fileoverview Externs for the easeljs
 * @externs
 */

/**
 * @constructor
 * @extends {createjs.EventDispatcher}
 */
createjs.Ticker = function() {};

/**
 * @type {boolean}
 */
createjs.Ticker.useRAF;
/**
 * @return {number}
 */
createjs.Ticker.getFPS = function() {};

/**
 * @return {number}
 */
createjs.Ticker.getInterval = function() {};

/**
 * @param {number=} ticks
 * @return {number}
 */
createjs.Ticker.getMeasuredFPS = function(ticks) {};

/**
 * @return {boolean}
 */
createjs.Ticker.getPaused = function() {};

/**
 * @param {boolean} pauseable
 * @return {number}
 */
createjs.Ticker.getTicks = function(pauseable) {};

/**
 * @param {boolean} pauseable
 * @return {number}
 */
createjs.Ticker.getTime = function(pauseable) {};

/**
 *
 */
createjs.Ticker.init = function() {};

/**
 * @param {number} value
 */
createjs.Ticker.setFPS = function(value) {};

/**
 * @param {number} interval
 */
createjs.Ticker.setInterval = function(interval) {};

/**
 * @param {boolean} value
 */
createjs.Ticker.setPaused = function(value) {};

/**
 * @param {string} type
 * @param {Function|Object} listener
 * @return {Function|Object}
 */
createjs.Ticker.addEventListener  = function(type, listener) {};

/**
 * @param {Object|String} eventObj
 * @param {Object=} target
 * @return {boolean}
 */
createjs.Ticker.dispatchEvent = function(eventObj, target) {};

/**
 * @param {string} type
 * @return {boolean}
 */
createjs.Ticker.hasEventListener = function(type) {};

/**
 * @param {string=} type
 */
createjs.Ticker.removeAllEventListeners = function(type) {};

/**
 * @param {string} type
 * @param {Function|Object} listener
 */
createjs.Ticker.removeEventListener = function(type, listener) {};

/**
 * @return {string}
 */
createjs.Ticker.toString = function() {};