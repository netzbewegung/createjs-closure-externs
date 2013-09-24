/**
 * @fileoverview Externs for the easeljs
 * @externs
 */

/**
 * @constructor
 * @param {Object} data
 * @extends {createjs.EventDispatcher}
 */
createjs.SpriteSheet = function(data) {};

/**
 * @type {boolean}
 */
createjs.SpriteSheet.prototype.complete;

/**
 * @return {createjs.SpriteSheet}
 */
createjs.SpriteSheet.prototype.clone = function() {};

/**
 * @param {string} name
 * @return {Object}
 */
createjs.SpriteSheet.prototype.getAnimation = function(name) {};

/**
 * @return {Array}
 */
createjs.SpriteSheet.prototype.getAnimations = function() {};

/**
 * @param {number} frameIndex
 * @return {Object}
 */
createjs.SpriteSheet.prototype.getFrame = function(frameIndex) {};

/**
 * @param {number} frameIndex
 * @return {createjs.Rectangle}
 */
createjs.SpriteSheet.prototype.getFrameBounds = function(frameIndex) {};

/**
 * @param {string} animation
 * @return {number}
 */
createjs.SpriteSheet.prototype.getNumFrames = function(animation) {};

/**
 * @param {Object} data
 */
createjs.SpriteSheet.prototype.initialize = function(data) {};