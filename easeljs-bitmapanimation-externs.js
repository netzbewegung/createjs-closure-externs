/**
 * @fileoverview Externs for the easeljs
 * @externs
 */

/**
 * @constructor
 * @extends {createjs.DisplayObject}
 * @param {createjs.SpriteSheet} spriteSheet
 */
createjs.BitmapAnimation = function(spriteSheet) {};

/**
 * @type {string}
 */
createjs.BitmapAnimation.prototype.currentAnimation;

/**
 * @type {number}
 */
createjs.BitmapAnimation.prototype.currentAnimationFrame;

/**
 * @type {number}
 */
createjs.BitmapAnimation.prototype.currentFrame;

/**
 * @type {number}
 */
createjs.BitmapAnimation.prototype.offset;

/**
 * @type {boolean}
 */
createjs.BitmapAnimation.prototype.paused;

/**
 * @type {createjs.SpriteSheet}
 */
createjs.BitmapAnimation.prototype.spriteSheet;

/**
 * 
 */
createjs.BitmapAnimation.prototype.advance = function() {};

/**
 * @return {createjs.Rectangle}
 */
createjs.BitmapAnimation.prototype.getBounds = function() {};

/**
 * @param {string|number} frameOrAnimation
 */
createjs.BitmapAnimation.prototype.gotoAndPlay = function(frameOrAnimation) {};

/**
 * @param {string|number} frameOrAnimation
 */
createjs.BitmapAnimation.prototype.gotoAndStop = function(frameOrAnimation) {};

/**
 * 
 */
createjs.BitmapAnimation.prototype.play = function() {};

/**
 * 
 */
createjs.BitmapAnimation.prototype.stop = function() {};