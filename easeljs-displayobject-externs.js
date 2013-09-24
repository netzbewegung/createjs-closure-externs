/**
 * @fileoverview Externs for the easeljs
 * @externs
 */

/**
 * @constructor
 * @extends {createjs.EventDispatcher}
 */
createjs.DisplayObject = function() {};

/**
 * @type {boolean}
 */
createjs.DisplayObject.suppressCrossDomainErrors;

/**
 * @type {number}
 */
createjs.DisplayObject.prototype.alpha;

/**
 * @type {HTMLCanvasElement|Object}
 */
createjs.DisplayObject.prototype.cacheCanvas;

/**
 * @type {number}
 */
createjs.DisplayObject.prototype.cacheID;

/**
 * @type {string}
 */
createjs.DisplayObject.prototype.compositeOperation;

/**
 * @type {string}
 */
createjs.DisplayObject.prototype.cursor;

/**
 * @type {Array.<createjs.Filter>}
 */
createjs.DisplayObject.prototype.filters;

/**
 * @type {createjs.DisplayObject}
 */
createjs.DisplayObject.prototype.hitArea;

/**
 * @type {number}
 */
createjs.DisplayObject.prototype.id;

/**
 * @type {createjs.Shape}
 */
createjs.DisplayObject.prototype.mask;

/**
 * @type {boolean}
 */
createjs.DisplayObject.prototype.mouseEnabled;

/**
 * @type {string}
 */
createjs.DisplayObject.prototype.name;

/**
 * @type {createjs.Container}
 */
createjs.DisplayObject.prototype.parent;

/**
 * @type {number}
 */
createjs.DisplayObject.prototype.regX;

/**
 * @type {number}
 */
createjs.DisplayObject.prototype.regY;

/**
 * @type {number}
 */
createjs.DisplayObject.prototype.rotation;

/**
 * @type {number}
 */
createjs.DisplayObject.prototype.scaleX;

/**
 * @type {number}
 */
createjs.DisplayObject.prototype.scaleY;

/**
 * @type {createjs.Shadow}
 */
createjs.DisplayObject.prototype.shadow;

/**
 * @type {number}
 */
createjs.DisplayObject.prototype.skewX;

/**
 * @type {number}
 */
createjs.DisplayObject.prototype.skewY;

/**
 * @type {boolean}
 */
createjs.DisplayObject.suppressCrossDomainErrors;

/**
 * @type {boolean}
 */
createjs.DisplayObject.prototype.visible;

/**
 * @type {number}
 */
createjs.DisplayObject.prototype.x;

/**
 * @type {number}
 */
createjs.DisplayObject.prototype.y;

/**
 * @param {number} x
 * @param {number} y
 * @param {number} width
 * @param {number} height
 * @param {number=} scale
 */
createjs.DisplayObject.prototype.cache = function(x, y, width, height, scale) {};

/**
 * @return {createjs.DisplayObject}
 */
createjs.DisplayObject.prototype.clone = function() {};

/**
 * @param {CanvasRenderingContext2D} ctx
 * @param {boolean} ignoreCache
 */
createjs.DisplayObject.prototype.draw = function(ctx, ignoreCache) {};

/**
 * @return {string}
 */
createjs.DisplayObject.prototype.getCacheDataURL = function() {};

/**
 * @param {createjs.Matrix2D} mtx
 * @return {createjs.Matrix2D}
 */
createjs.DisplayObject.prototype.getConcatenatedMatrix = function(mtx) {};

/**
 * @param {createjs.Matrix2D} matrix
 * @return {createjs.Matrix2D}
 */
createjs.DisplayObject.prototype.getMatrix = function(matrix) {};

/**
 * @return {createjs.Stage}
 */
createjs.DisplayObject.prototype.getStage = function() {};

/**
 * @param {number} x
 * @param {number} y
 * @return {createjs.Point}
 */
createjs.DisplayObject.prototype.globalToLocal = function(x, y) {};

/**
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
createjs.DisplayObject.prototype.hitTest = function(x, y) {};

/**
 * @return {boolean}
 */
createjs.DisplayObject.prototype.isVisible = function() {};

/**
 * @param {number} x
 * @param {number} y
 * @return {createjs.Point}
 */
createjs.DisplayObject.prototype.localToGlobal = function(x, y) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {createjs.DisplayObject} target
 * @return {createjs.Point}
 */
createjs.DisplayObject.prototype.localToLocal = function(x, y, target) {};

/**
 * @param {Object} props
 * @return {createjs.DisplayObject}
 */
createjs.DisplayObject.prototype.set = function(props) {};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} scaleX
 * @param {number} scaleY
 * @param {number} rotation
 * @param {number} skewX
 * @param {number} skewY
 * @param {number} regX
 * @param {number} regY
 * @return {createjs.DisplayObject}
 */
createjs.DisplayObject.prototype.setTransform = function(x, y, scaleX, scaleY, rotation, skewX, skewY, regX, regY) {};

/**
 *
 */
createjs.DisplayObject.prototype.uncache = function() {};

/**
 * @param {string} compositeOperation
 */
createjs.DisplayObject.prototype.updateCache = function(compositeOperation) {};

/**
 * @param {CanvasRenderingContext2D} ctx
 */
createjs.DisplayObject.prototype.updateContext = function(ctx) {};

/**
 * @type {*}
 */
createjs.DisplayObject.prototype.onTick;

/**
 * @param {*=} data
 */
createjs.DisplayObject.prototype._tick = function(data) {};