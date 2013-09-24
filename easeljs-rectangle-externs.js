/**
 * @fileoverview Externs for the easeljs
 * @externs
 */

/**
 * @constructor
 * @param {number=} x
 * @param {number=} y
 * @param {number=} width
 * @param {number=} height
 */
createjs.Rectangle = function(x, y, width, height) {};

/**
 * @type {number}
 */
createjs.Rectangle.prototype.height;

/**
 * @type {number}
 */
createjs.Rectangle.prototype.width;

/**
 * @type {number}
 */
createjs.Rectangle.prototype.x;

/**
 * @type {number}
 */
createjs.Rectangle.prototype.y;

/**
 * @return {createjs.Rectangle}
 */
createjs.Rectangle.prototype.clone = function() {};

/**
 * @return {string}
 */
createjs.Rectangle.prototype.toString = function() {};