/**
 * @fileoverview Externs for the easeljs
 * @externs
 */

/**
 * @constructor
 * @extends {createjs.Container}
 * @param {HTMLCanvasElement|string|Object} canvas
 */
createjs.Stage = function(canvas) {};

/**
 * @type {boolean}
 */
createjs.Stage.prototype.autoClear;

/**
 * @type {HTMLCanvasElement|Object}
 */
createjs.Stage.prototype.canvas;

/**
 * @type {Function}
 */
createjs.Stage.prototype.handleEvent;

/**
 * @type {boolean}
 */
createjs.Stage.prototype.mouseInBounds;

/**
 * @type {boolean}
 */
createjs.Stage.prototype.mouseMoveOutside;

/**
 * @type {number}
 */
createjs.Stage.prototype.mouseX;

/**
 * @type {number}
 */
createjs.Stage.prototype.mouseY;

/**
 * @type {boolean}
 */
createjs.Stage.prototype.tickOnUpdate;

/**
 *
 */
createjs.Stage.prototype.clear = function() {};

/**
 * @param {boolean=} enable
 */
createjs.Stage.prototype.enableDOMEvents = function(enable) {};

/**
 * @param {number=} frequency
 */
createjs.Stage.prototype.enableMouseOver = function(frequency) {};

/**
 * @param {string} backgroundColor
 * @param {string} mimeType
 * @return {string}
 */
createjs.Stage.prototype.toDataURL = function(backgroundColor, mimeType) {};

/**
 *
 */
createjs.Stage.prototype.update = function() {};