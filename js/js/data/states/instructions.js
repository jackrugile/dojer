/*==============================================================================

Instructions State

==============================================================================*/

(function(){ 'use strict';

	function StateInstructions() {
		this.name = 'instructions';
	}

	StateInstructions.prototype.init = function() {
		// setup state specific time
		this.time = new g.Time();
	};

	StateInstructions.prototype.step = function() {
		// update the states time
		this.time.update();

		// clear the canvas
		g.ctx.clearRect( 0, 0, g.width, g.height );

		// render world split
		g.renderWorldSplit();

		// render AVOID
		g.ctx.beginPath();
		g.text( {
			ctx: g.ctx,
			font: g.Font,
			x: g.s * 2,
			y: g.height / 2 - g.s * 2,
			text: 'AVOID',
			hspacing: g.s,
			vspacing: g.s,
			halign: 'left',
			valign: 'bottom',
			scale: g.s,
			snap: 1,
			render: 1
		});
		g.ctx.fillStyle = '#000';
		g.ctx.fill();

		// render WALLS
		g.ctx.beginPath();
		g.text( {
			ctx: g.ctx,
			font: g.Font,
			x: g.s * 2,
			y: g.height / 2 + g.s * 2,
			text: 'WALLS',
			hspacing: g.s,
			vspacing: g.s,
			halign: 'left',
			valign: 'top',
			scale: g.s,
			snap: 1,
			render: 1
		});
		g.ctx.fillStyle = '#fff';
		g.ctx.fill();

		// start play after a moment
		if( this.time.elapsed >= 1500 ) {
			g.setState( 'play' );
		}
	};

	StateInstructions.prototype.exit = function() {
	};

	g.addState( new StateInstructions() );

})();