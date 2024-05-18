/*==============================================================================

Play State

==============================================================================*/

(function(){ 'use strict';

	function StatePlay() {
		this.name = 'play';
	}

	StatePlay.prototype.init = function() {
		// setup state specific time
		this.time = new g.Time();

		// setup temp storage
		// this will be stored and compared in memory during the round
		// after the round is done, then update actual localStorage
		this.tempStorage = {
			jumps: 0,
			switches: 0,
			// used for comparison when displaying best score
			// show current score if higher than best score
			bestScore: g.storage.get( 'bestScore' )
		};

		// play start sound
		g.audio.start.play();

		// reset score
		this.score = 0;
		this.scoreFlag = 0;

		this.paused = 0;

		// setup the hero
		this.hero = new g.Hero( this );

		// wall configurations
		this.wallConfigs = [
			//[ 1, 0, 0, 0 ], too easy
			[ 0, 1, 0, 0 ],
			[ 0, 0, 1, 0 ],
			//[ 0, 0, 0, 1 ], too easy
			[ 1, 1, 0, 0 ],
			[ 0, 1, 1, 0 ],
			[ 0, 0, 1, 1 ],
			//[ 1, 0, 0, 1 ], too easy
			[ 1, 0, 1, 0 ],
			[ 0, 1, 0, 1 ],
			[ 0, 1, 1, 0 ],
			[ 1, 1, 1, 0 ],
			[ 0, 1, 1, 1 ]
			//[ 1, 0, 1, 1 ], too hard
			//[ 1, 1, 0, 1 ] too hard
		];

		// setup wall pool
		this.walls = new g.Pool( g.WallSet );
		this.wallVelocity = -0.288 * g.s;
		this.wallChangeInterval = 5;
		this.wallVelocityIncrease = -0.016 * g.s;
		// set first wall back further to give more buffer time
		// otherwise, create at right edge of screen immediately after current wall is destroyed
		this.firstWallFlag = 1;
		this.createWall();
	};

	StatePlay.prototype.createWall = function() {
		this.walls.create( { state: this } );
	}

	StatePlay.prototype.step = function() {
		// update the states time
		this.time.update();

		if( this.paused ) {
			this.time.pelapsed += this.time.delta;
		}

		// ramp up wall difficulty over time
		if( this.score != 0 && this.scoreFlag && this.score % this.wallChangeInterval == 0 ) {
			this.wallVelocity += this.wallVelocityIncrease;
		}

		// clear score flag
		if( this.scoreFlag ) {
			this.scoreFlag = 0;
		}

		// clear the canvas
		g.ctx.clearRect( 0, 0, g.width, g.height );

		// listen for pause
		if( g.keys.pressedOnce.P ) {
			g.audio.click.play();
			this.paused = !this.paused;
		}

		// update
		if( !this.paused ) {
			// update walls
			this.walls.each( 'update' );
			// update hero
			this.hero.update();
		}
		
		// render world split
		g.renderWorldSplit();

		// render walls
		this.walls.each( 'render' );

		// render current score
		g.ctx.beginPath();
		g.text( {
			ctx: g.ctx,
			font: g.Font,
			x: g.width - g.s,
			y: g.s,
			text: this.score + '',
			hspacing: g.s,
			vspacing: g.s,
			halign: 'right',
			valign: 'top',
			scale: g.s,
			snap: 1,
			render: 1
		});
		g.ctx.fillStyle = '#000';
		g.ctx.fill();

		// render best score
		g.ctx.beginPath();
		g.text( {
			ctx: g.ctx,
			font: g.Font,
			x: g.width - g.s,
			y: g.height - g.s,
			text: Math.max( this.tempStorage.bestScore, this.score ) + '',
			hspacing: g.s,
			vspacing: g.s,
			halign: 'right',
			valign: 'bottom',
			scale: g.s,
			snap: 1,
			render: 1
		});
		g.ctx.fillStyle = '#fff';
		g.ctx.fill();

		// render hero
		this.hero.render();

		// render paused
		if( this.paused ) {
			g.ctx.beginPath();
			g.text( {
				ctx: g.ctx,
				font: g.Font,
				x: g.s * 2,
				y: g.height / 2 - g.s * 2,
				text: 'PAUSE',
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

			g.ctx.beginPath();
			g.text( {
				ctx: g.ctx,
				font: g.Font,
				x: g.s * 2,
				y: g.height / 2 + g.s * 2,
				text: 'PAUSE',
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
		}
	};

	StatePlay.prototype.exit = function() {
	};

	g.addState( new StatePlay() );

})();