/*==============================================================================

Wall Entity

==============================================================================*/

(function(){ 'use strict';

	g.Wall = function( state, set, offset ) {
		this.state = state;
		this.set = set;
		this.offset = offset;
		this.width = set.width;
		this.height = g.height / 4;
		this.x = set.x;
		this.y = g.height / 4 * offset;
		this.color = this.y < g.height / 2 ? '#000' : '#fff';
		this.oppositeColor = this.color == '#000' ? '#fff' : '#000';
	}

	g.Wall.prototype.update = function() {
		this.x = this.set.x;
		var collision = g.util.rectIntersect(
			{
				x: this.x,
				y: this.y,
				width: this.width,
				height: this.height
			},
			{
				x: this.state.hero.x + g.s,
				y: this.state.hero.y + g.s,
				width: g.s,
				height: g.s
			}
		);
		if( collision && !this.state.hero.deathFlag && !this.state.hero.dead ) {
			g.audio.death.play();
			this.state.hero.deathFlag = 1;
		}
	};

	g.Wall.prototype.render = function() {
		if( this.set.scored ) {
			g.ctx.fillStyle = g.util.roundToNearest( this.state.time.tick, 4 ) % 8 == 0 ? this.color : this.oppositeColor;
		} else {
			g.ctx.fillStyle = this.color;
		}
		g.ctx.fillRect( g.r( this.x ), g.r( this.y ), this.width, this.height );
		if( g.storage.get( 'debug' ) ) {
			g.ctx.fillStyle = 'rgba(255, 0, 0, 0.5)';
			g.ctx.fillRect( g.r( this.x ), g.r( this.y ), this.width, this.height );
		}
	};

})();