/**
 * @fileoverview Externs for the easeljs
 * @externs
 */

/**
 * @constructor
 * @param {boolean} useXHR
 * @param {string} basePath
 * @extends {createjs.AbstractLoader}
 */
createjs.LoadQueue = function(useXHR, basePath) {};

/**
 * @param {string} type
 * @param {Function|Object} listener
 * @return {Function|Object}
 * @override
 */
createjs.LoadQueue.prototype.addEventListener = function(type, listener) {};

/**
 * @param {string} src
 * @param {string=} basePath
 * @param {Object=} data
 * @return {string}
 * @override
 */
createjs.LoadQueue.prototype.buildPath = function(src, basePath, data) {};

/**
 * @override
 */
createjs.LoadQueue.prototype.close = function() {};

/**
 * @param {Object|string} eventObj
 * @param {Object=} target
 * @return {boolean}
 * @override
 */
createjs.LoadQueue.prototype.dispatchEvent = function(eventObj, target) {};

/**
 * @param {Object} value
 * @return {Object}
 */
createjs.LoadQueue.prototype.getItem  = function(value) {};

/**
 * @param {string} value
 * @param {boolean=} rawResult
 * @return {Object}
 */
createjs.LoadQueue.prototype.getResult = function(value, rawResult) {};

/**
 * @param {string} type
 * @return {boolean}
 * @override
 */
createjs.LoadQueue.prototype.hasEventListener = function(type) {};

/**
 * @param {Function} plugin
 */
createjs.LoadQueue.prototype.installPlugin = function(plugin) {};

/**
 * @override
 */
createjs.LoadQueue.prototype.load = function() {};

/**
 * @param {Object|string} file
 * @param {boolean=} loadNow
 * @param {string=} basePath
 */
createjs.LoadQueue.prototype.loadFile = function(file, loadNow, basePath) {};

/**
 * @param {Array} manifest
 * @param {boolean=} loadNow
 * @param {string=} basePath
 */
createjs.LoadQueue.prototype.loadManifest = function(manifest, loadNow, basePath) {};

/**
 * @param {string|Array} idsOrUrls
 */
createjs.LoadQueue.prototype.remove = function(idsOrUrls) {};

/**
 * 
 */
createjs.LoadQueue.prototype.removeAll = function() {};

/**
 * @param {string=} type
 * @override
 */
createjs.LoadQueue.prototype.removeAllEventListeners = function(type) {};

/**
 * @param {string} type
 * @param {Function|Object} listener
 * @override
 */
createjs.LoadQueue.prototype.removeEventListener  = function(type, listener) {};

/**
 * 
 */
createjs.LoadQueue.prototype.reset = function() {};

/**
 * @param {number} value
 */
createjs.LoadQueue.prototype.setMaxConnections = function(value) {};

/**
 * @param {boolean} value
 */
createjs.LoadQueue.prototype.setPaused = function(value) {};

/**
 * @param {boolean} value
 * @return {boolean}
 */
createjs.LoadQueue.prototype.setUseXHR = function(value) {};

/**
 * @return {string}
 * @override
 */
createjs.LoadQueue.prototype.toString = function() {};

/**
 * @type {string}
 */
createjs.LoadQueue.BINARY;

/**
 * @type {string}
 */
createjs.LoadQueue.CSS;

/**
 * @type {string}
 */
createjs.LoadQueue.IMAGE;

/**
 * @type {string}
 */
createjs.LoadQueue.JAVASCRIPT;

/**
 * @type {string}
 */
createjs.LoadQueue.JSON;

/**
 * @type {string}
 */
createjs.LoadQueue.LOAD_TIMEOUT;

/**
 * @type {string}
 */
createjs.LoadQueue.SOUND;

/**
 * @type {string}
 */
createjs.LoadQueue.SVG;

/**
 * @type {string}
 */
createjs.LoadQueue.TEXT;

/**
 * @type {string}
 */
createjs.LoadQueue.XML;