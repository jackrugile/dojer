/*==============================================================================

Gameover State

==============================================================================*/

(function(){ 'use strict';

	function StateGameover() {
		this.name = 'gameover';
	}

	StateGameover.prototype.init = function() {
		// setup state specific time
		this.time = new g.Time();

		// handle updating of local storage below
		// this is better than constantly getting and setting and values during gameplay

		// update stored total score
		g.storage.set( 'totalScore', g.storage.get( 'totalScore' ) + g.prevState.score );

		// update best score
		if( g.prevState.score > g.storage.get( 'bestScore' ) ) {
			g.storage.set( 'bestScore', g.prevState.score );
		}

		// update total jumps
		g.storage.set( 'totalJumps', g.storage.get( 'totalJumps' ) + g.prevState.tempStorage.jumps );

		// update total switches
		g.storage.set( 'totalSwitches', g.storage.get( 'totalSwitches' ) + g.prevState.tempStorage.switches );

		// update total deaths
		g.storage.set( 'totalDeaths', g.storage.get( 'totalDeaths' ) + 1 )

		// update stored total time
		// increase the total time played, minus the pause time of prev try
		g.storage.set( 'totalTime', g.storage.get( 'totalTime' ) + g.prevState.time.elapsed - g.prevState.time.pelapsed );
	};

	StateGameover.prototype.step = function() {
		// update the states time
		this.time.update();

		// clear the canvas
		g.ctx.clearRect( 0, 0, g.width, g.height );

		// render world split
		g.renderWorldSplit();

		// render GAME OVER
		g.ctx.beginPath();
		g.text( {
			ctx: g.ctx,
			font: g.Font,
			x: g.s * 2,
			y: g.s * 2,
			text: 'GAME\nOVER',
			hspacing: g.s,
			vspacing: 2 * g.s,
			halign: 'left',
			valign: 'top',
			scale: g.s,
			snap: 1,
			render: 1
		});
		g.ctx.fillStyle = '#000';
		g.ctx.fill();

		// render score
		g.ctx.beginPath();
		g.text( {
			ctx: g.ctx,
			font: g.Font,
			x: g.s * 2,
			y: g.height / 2 + g.s * 2,
			text: 'S/' + g.prevState.score + '\nB/' + g.storage.get( 'bestScore' ),
			hspacing: g.s,
			vspacing: g.s * 2,
			halign: 'left',
			valign: 'top',
			scale: g.s,
			snap: 1,
			render: 1
		});
		g.ctx.fillStyle = '#fff';
		g.ctx.fill();

		// listen for retry
		if( 
			g.keys.pressedOnce.W ||
			g.keys.pressedOnce.A ||
			g.keys.pressedOnce.S ||
			g.keys.pressedOnce.D ||
			g.keys.pressedOnce.UP ||
			g.keys.pressedOnce.LEFT ||
			g.keys.pressedOnce.DOWN ||
			g.keys.pressedOnce.RIGHT
		) {
			//g.audio.click.play();
			g.setState( 'play' );
		}

		// listen for menu
		if( g.keys.pressedOnce.ESC ) {
			g.audio.click.play();
			g.setState( 'menu' );
		}
	};

	StateGameover.prototype.exit = function() {
	};

	g.addState( new StateGameover() );

})();