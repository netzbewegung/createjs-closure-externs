/**
 * @fileoverview Externs for the easeljs
 * @externs
 */

/**
 * @constructor
 * @param {string} type
 * @param {number} stageX
 * @param {number} stageY
 * @param {createjs.DisplayObject} target
 * @param {Event} nativeEvent
 * @param {number} pointerID
 * @param {boolean} primary
 * @param {number} rawX
 * @param {number} rawY
 * @extends {createjs.EventDispatcher}
 */
createjs.MouseEvent = function(type, stageX, stageY, target, nativeEvent, pointerID, primary, rawX, rawY) {};

/**
 * @type {Event}
 */
createjs.MouseEvent.prototype.nativeEvent;

/**
 * @type {number}
 */
createjs.MouseEvent.prototype.pointerID;

/**
 * @type {boolean}
 */
createjs.MouseEvent.prototype.primary;

/**
 * @type {number}
 */
createjs.MouseEvent.prototype.rawX;

/**
 * @type {number}
 */
createjs.MouseEvent.prototype.rawY;

/**
 * @type {number}
 */
createjs.MouseEvent.prototype.stageX;

/**
 * @type {number}
 */
createjs.MouseEvent.prototype.stageY;

/**
 * @type {createjs.DisplayObject}
 */
createjs.MouseEvent.prototype.target;

/**
 * @type {string}
 */
createjs.MouseEvent.prototype.type;

/**
 * @return {createjs.MouseEvent}
 */
createjs.MouseEvent.prototype.clone = function() {};

/**
 * @param {string} type
 * @param {number} stageX
 * @param {number} stageY
 * @param {createjs.DisplayObject} target
 * @param {Event} nativeEvent
 * @param {number} pointerID
 * @param {boolean} primary
 * @param {number} rawX
 * @param {number} rawY
 */
createjs.MouseEvent.prototype.initialize = function(type, stageX, stageY, target, nativeEvent, pointerID, primary, rawX, rawY) {};
