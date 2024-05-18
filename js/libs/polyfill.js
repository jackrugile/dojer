/*==============================================================================

Polyfill

==============================================================================*/

(function(){ 'use strict';

	/*==============================================================================

	Request Animation Frame

	==============================================================================*/
	
	var lastTime = 0;
	var vendors = [ 'webkit', 'moz' ];
	for( var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x ) {
		window.requestAnimationFrame = window[ vendors[ x ] + 'RequestAnimationFrame' ];
		window.cancelAnimationFrame = window[ vendors[ x ] + 'CancelAnimationFrame' ] || window[ vendors[ x ] + 'CancelRequestAnimationFrame' ];
	}

	if( !window.requestAnimationFrame ) {
		window.requestAnimationFrame = function( callback, element ) {
			var currTime = new Date().getTime();
			var timeToCall = Math.max( 0, 16 - ( currTime - lastTime ) );
			var id = window.setTimeout(
				function() { 
					callback( currTime + timeToCall ); 
				}, timeToCall );
			lastTime = currTime + timeToCall;
			return id;
		}
	}

	if( !window.cancelAnimationFrame ) {
		window.cancelAnimationFrame = function( id ) {
			clearTimeout( id );
		}
	}

	/*==============================================================================

	Bind

	==============================================================================*/
	if( !Function.prototype.bind ) {
		Function.prototype.bind = function ( oThis ) {
			if( typeof this !== 'function' ) {
				throw new TypeError( 'Function.prototype.bind - what is trying to be bound is not callable' );
			}

		var aArgs = Array.prototype.slice.call( arguments, 1 ), 
			fToBind = this, 
			fNOP = function () {},
			fBound = function () {
				return fToBind.apply(this instanceof fNOP && oThis
				? this
				: oThis,
				aArgs.concat(Array.prototype.slice.call(arguments)));
			};

		fNOP.prototype = this.prototype;
		fBound.prototype = new fNOP();

		return fBound;
		};
	}

})();