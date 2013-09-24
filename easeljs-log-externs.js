/**
 * @fileoverview Externs for the easeljs
 * @externs
 */

/**
 * @constructor
 */
createjs.Log = function() {};

/**
 * @type {number}
 */
createjs.Log.ALL;

/**
 * @type {number}
 */
createjs.Log.ERROR;

/**
 * @type {number}
 */
createjs.Log.level;

/**
 * @type {number}
 */
createjs.Log.NONE;

/**
 * @type {Function}
 */
createjs.Log.out;

/**
 * @type {number}
 */
createjs.Log.TRACE;

/**
 * @type {number}
 */
createjs.Log.WARNING;

/**
 * @param {Object} keys
 */
createjs.Log.addKeys = function(keys) {};

/**
 * @param {string} message
 * @param {Object} details
 * @param {number} level
 */
createjs.Log.error = function(message, details, level) {};