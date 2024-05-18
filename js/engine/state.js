/*==============================================================================

State

==============================================================================*/

(function(){ 'use strict';

	g.states = {};

	g.addState = function( state ) {
		g.states[ state.name ] = state;
	}

	g.setState = function( name ) {
		if( g.state ) {
			g.prevState = g.states[ g.state ];
			g.states[ g.state ].exit();
		}
		g.state = name;
		g.states[ g.state ].init();
	}

	g.currentState = function() {
		return g.states[ g.state ];
	};

}());