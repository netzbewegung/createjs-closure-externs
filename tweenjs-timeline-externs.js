/**
 * @fileoverview Externs for the easeljs
 * @externs
 */

/**
 * @constructor
 * @param {Array.<createjs.Tween>} tweens
 * @param {Array.<string>} labels
 * @param {*} props
 */
createjs.Timeline = function(tweens, labels, props) {};

/**
 * @type {number}
 */
createjs.Timeline.prototype.duration;

/**
 * @type {boolean}
 */
createjs.Timeline.prototype.ignoreGlobalPause;

/**
 * @type {boolean}
 */
createjs.Timeline.prototype.loop;

/**
 * @type {Function}
 */
createjs.Timeline.prototype.onChange;

/**
 * @type {Object}
 */
createjs.Timeline.prototype.position;

/**
 * @param {string} label
 * @param {number} position
 */
createjs.Timeline.prototype.addLabel = function(label, position) {};

/**
 * @param {Object} o
 */
createjs.Timeline.prototype.setLabels = function(o) {};

/**
 * @param {createjs.Tween} tween
 */
createjs.Timeline.prototype.addTween = function(tween) {};

/**
 * @param {Object} positionOrLabel
 */
createjs.Timeline.prototype.gotoAndPlay = function(positionOrLabel) {};

/**
 * @param {Object} positionOrLabel
 */
createjs.Timeline.prototype.gotoAndStop = function(positionOrLabel) {};

/**
 * @param {createjs.Tween} tween
 */
createjs.Timeline.prototype.removeTween = function(tween) {};

/**
 * @param {Object} positionOrLabel 
 */
createjs.Timeline.prototype.resolve = function(positionOrLabel) {};

/**
 * @param {boolean} value
 */
createjs.Timeline.prototype.setPaused = function(value) {};

/**
 * @param {number} value
 * @param {*} actionsMode
 */
createjs.Timeline.prototype.setPosition = function(value, actionsMode) {};

/**
 * @param {number} delta
 */
createjs.Timeline.prototype.tick = function(delta) {};

/**
 * @return {string}
 */
createjs.Timeline.prototype.toString = function() {};

/**
 * 
 */
createjs.Timeline.prototype.updateDuration = function() {};