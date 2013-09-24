/**
 * @fileoverview Externs for the easeljs
 * @externs
 */

/**
 * @constructor
 */
createjs.SpriteSheetUtils = function() {};

/**
 * @param {createjs.SpriteSheet} spriteSheetImage
 * @param {boolean} horizontal
 * @param {boolean} vertical
 * @param {boolean} both
 */
createjs.SpriteSheetUtils.addFlippedFrames = function(spriteSheetImage, horizontal, vertical, both) {};

/**
 * @param {createjs.SpriteSheet} spriteSheet
 * @param {number|string} frame
 * @return {Image}
 */
createjs.SpriteSheetUtils.extractFrame = function(spriteSheet, frame) {};

/**
 * @param {Image} rbgImage
 * @param {Image} alphaImage
 * @param {HTMLCanvasElement} canvas
 * @return {HTMLCanvasElement}
 */
createjs.SpriteSheetUtils.mergeAlpha = function(rbgImage, alphaImage, canvas) {};