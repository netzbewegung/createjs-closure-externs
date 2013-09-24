/**
 * @fileoverview Externs for the easeljs
 * @externs
 */

/**
 * @constructor
 * @param {Object} item
 * @extends {createjs.AbstractLoader}
 */
createjs.TagLoader = function(item) {};

/**
 * @param {string} type
 * @param {Function|Object} listener
 * @return {Function|Object}
 * @override
 */
createjs.TagLoader.prototype.addEventListener = function(type, listener) {};

/**
 * @param {string} src
 * @param {string=} basePath
 * @param {Object=} data
 * @return {string}
 * @override
 */
createjs.TagLoader.prototype.buildPath = function(src, basePath, data) {};

/**
 * @override
 */
createjs.TagLoader.prototype.close = function() {};

/**
 * @param {Object|string} eventObj
 * @param {Object=} target
 * @return {boolean}
 * @override
 */
createjs.TagLoader.prototype.dispatchEvent = function(eventObj, target) {};

/**
 * @return {HTMLImageElement|HTMLAudioElement|Object}
 */
createjs.TagLoader.prototype.getResult  = function() {};

/**
 * @param {string} type
 * @return {boolean}
 * @override
 */
createjs.TagLoader.prototype.hasEventListener = function(type) {};

/**
 * @override
 */
createjs.TagLoader.prototype.load = function() {};

/**
 * @param {string=} type
 * @override
 */
createjs.TagLoader.prototype.removeAllEventListeners = function(type) {};

/**
 * @param {string} type
 * @param {Function|Object} listener
 * @override
 */
createjs.TagLoader.prototype.removeEventListener  = function(type, listener) {};

/**
 * @return {string}
 * @override
 */
createjs.TagLoader.prototype.toString = function() {};