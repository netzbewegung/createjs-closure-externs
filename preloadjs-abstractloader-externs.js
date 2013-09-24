/**
 * @fileoverview Externs for the easeljs
 * @externs
 */

/**
 * @constructor
 * @extends {createjs.EventDispatcher}
 */
createjs.AbstractLoader = function() {};

/**
 * @param {string} type
 * @param {Function|Object} listener
 * @return {Function|Object}
 * @override
 */
createjs.AbstractLoader.prototype.addEventListener = function(type, listener) {};

/**
 * @param {string} src
 * @param {string=} basePath
 * @param {Object=} data
 * @return {string}
 */
createjs.AbstractLoader.prototype.buildPath = function(src, basePath, data) {};

/**
 * 
 */
createjs.AbstractLoader.prototype.close = function() {};

/**
 * @param {Object|string} eventObj
 * @param {Object=} target
 * @return {boolean}
 * @override
 */
createjs.AbstractLoader.prototype.dispatchEvent = function(eventObj, target) {};

/**
 * @param {string} type
 * @return {boolean}
 * @override
 */
createjs.AbstractLoader.prototype.hasEventListener = function(type) {};

/**
 *
 */
createjs.AbstractLoader.prototype.load = function() {};

/**
 * @param {string=} type
 * @override
 */
createjs.AbstractLoader.prototype.removeAllEventListeners = function(type) {};

/**
 * @param {string} type
 * @param {Function|Object} listener
 * @override
 */
createjs.AbstractLoader.prototype.removeEventListener  = function(type, listener) {};

/**
 * @return {string}
 * @override
 */
createjs.AbstractLoader.prototype.toString = function() {};

/**
 * @type {boolean}
 */
createjs.AbstractLoader.prototype.canceled;

/**
 * @type {boolean}
 */
createjs.AbstractLoader.prototype.loaded;

/**
 * @type {boolean}
 */
createjs.AbstractLoader.prototype.progress;