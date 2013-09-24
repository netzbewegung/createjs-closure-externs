/**
 * @fileoverview Externs for the easeljs
 * @externs
 */

/**
 * @constructor
 * @param {Object} item
 * @extends {createjs.AbstractLoader}
 */
createjs.XHRLoader = function(item) {};

/**
 * @param {string} type
 * @param {Function|Object} listener
 * @return {Function|Object}
 * @override
 */
createjs.XHRLoader.prototype.addEventListener = function(type, listener) {};

/**
 * @param {string} src
 * @param {string=} basePath
 * @param {Object=} data
 * @return {string}
 * @override
 */
createjs.XHRLoader.prototype.buildPath = function(src, basePath, data) {};

/**
 * @override
 */
createjs.XHRLoader.prototype.close = function() {};

/**
 * @param {Object|string} eventObj
 * @param {Object=} target
 * @return {boolean}
 * @override
 */
createjs.XHRLoader.prototype.dispatchEvent = function(eventObj, target) {};

/**
 * @return {string}
 */
createjs.XHRLoader.prototype.getAllResponseHeaders = function() {};

/**
 * @param {string} header
 * @return {string}
 */
createjs.XHRLoader.prototype.getResponseHeader = function(header) {};

/**
 * @param {boolean=} rawResult
 * @return {Object}
 */
createjs.XHRLoader.prototype.getResult = function(rawResult) {};

/**
 * @param {string} type
 * @return {boolean}
 * @override
 */
createjs.XHRLoader.prototype.hasEventListener = function(type) {};

/**
 * @override
 */
createjs.XHRLoader.prototype.load = function() {};

/**
 * @param {string=} type
 * @override
 */
createjs.XHRLoader.prototype.removeAllEventListeners = function(type) {};

/**
 * @param {string} type
 * @param {Function|Object} listener
 * @override
 */
createjs.XHRLoader.prototype.removeEventListener  = function(type, listener) {};

/**
 * @return {string}
 * @override
 */
createjs.XHRLoader.prototype.toString = function() {};