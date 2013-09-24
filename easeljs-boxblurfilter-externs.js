/**
 * @fileoverview Externs for the easeljs
 * @externs
 */

/**
 * @constructor
 * @extends {createjs.Filter}
 * @param {number=} blurX
 * @param {number=} blurY
 * @param {number=} quality
 */
createjs.BoxBlurFilter = function(blurX, blurY, quality) {};

/**
 * @type {number}
 */
createjs.BoxBlurFilter.prototype.blurX;

/**
 * @type {number}
 */
createjs.BoxBlurFilter.prototype.blurY;

/**
 * @type {number}
 */
createjs.BoxBlurFilter.prototype.quality;