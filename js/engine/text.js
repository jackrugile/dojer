/*==============================================================================

Text

==============================================================================*/

(function(){ 'use strict';

	g.textLine = function( opt ) {
		var textLength = opt.text.length,
			font = opt.font,
			size = opt.size;
		for( var i = 0; i < textLength; i++ ) {
			var letter = font.characters[ ( opt.text.charAt( i ) ) ] || font.characters[ 'unknown' ];
			for( var y = 0; y < size; y++ ) {
				for( var x = 0; x < size; x++ ) {
					if( letter[ y ][ x ] === 1 ) {
						opt.ctx.rect( opt.x + ( x * opt.scale ) + ( ( size * opt.scale ) + opt.hspacing ) * i, opt.y + y * opt.scale, opt.scale, opt.scale );
					}
				}
			}
		}
	};

	g.text = function( opt ) {
		var font = opt.font,
			size = font.size,
			letterSize = size * opt.scale,
			lines = opt.text.split( '\n' ),
			lineCount = lines.length,
			longestLine,
			textWidth,
			textHeight;

			if( lineCount > 1 ) {
				var max = 0,
					index = 0;
				for( var i = 0; i < lineCount; i++ ) {
					if( lines[ i ].length > max ) {
						max = lines[ i ].length;
						index = i;
					} 
				}
				longestLine = lines[ index ];
			} else {
				longestLine = lines[ 0 ];
			}
			
			textWidth = ( longestLine.length * letterSize ) + ( ( longestLine.length - 1 ) * opt.hspacing ),
			textHeight = ( lineCount * letterSize ) + ( ( lineCount - 1 ) * opt.vspacing );

		var sx = opt.x,
			sy = opt.y,
			ex = opt.x + textWidth,
			ey = opt.y + textHeight;

		if( opt.halign == 'center' ) {
			sx = opt.x - textWidth / 2;
			ex = opt.x + textWidth / 2;
		} else if( opt.halign == 'right' ) {
			sx = opt.x - textWidth;
			ex = opt.x;
		}

		if( opt.valign == 'center' ) {
			sy = opt.y - textHeight / 2;
			ey = opt.y + textHeight / 2;
		} else if( opt.valign == 'bottom' ) {
			sy = opt.y - textHeight;
			ey = opt.y;
		}

		var	cx = sx + textWidth / 2,
			cy = sy + textHeight / 2;

		if( opt.render ) {
			for( var i = 0; i < lineCount; i++ ) {
				var line = lines[ i ],
					lineWidth = ( line.length * letterSize ) + ( ( line.length - 1 ) * opt.hspacing ),
					x = opt.x,
					y = opt.y + ( letterSize + opt.vspacing ) * i;

				if( opt.halign == 'center' ) {
					x = opt.x - lineWidth / 2;
				} else if( opt.halign == 'right' ) {
					x = opt.x - lineWidth;
				}

				if( opt.valign == 'center' ) {
					y = y - textHeight / 2;
				} else if( opt.valign == 'bottom' ) {
					y = y - textHeight;
				}

				if( opt.snap ) {
					x = Math.floor( x );
					y = Math.floor( y );
				}

				g.textLine( {
					ctx: opt.ctx,
					font: font,
					size: size,
					x: x,
					y: y,
					text: line,
					hspacing: opt.hspacing,
					scale: opt.scale
				} );
			}
		}

		return {
			sx: sx,
			sy: sy,
			cx: cx,
			cy: cy,
			ex: ex,
			ey: ey,
			width: textWidth,
			height: textHeight
		}
	};

})();