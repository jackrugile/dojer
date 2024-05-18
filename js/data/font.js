/*==============================================================================

Font

==============================================================================*/

(function(){ 'use strict';

	g.Font = {
		size: 5,
		characters: {
			'1': [
				 [ 0, 0, 1, 0, 0 ],
				 [ 0, 1, 1, 0, 0 ],
				 [ 0, 0, 1, 0, 0 ],
				 [ 0, 0, 1, 0, 0 ],
				 [ 1, 1, 1, 1, 1 ]
				 ],
			'2': [
				 [ 1, 1, 1, 1, 0 ],
				 [ 0, 0, 0, 0, 1 ],
				 [ 0, 1, 1, 1, 0 ],
				 [ 1, 0, 0, 0, 0 ],
				 [ 1, 1, 1, 1, 1 ]
				 ],
			'3': [
				 [ 1, 1, 1, 1, 0 ],
				 [ 0, 0, 0, 0, 1 ],
				 [ 0, 1, 1, 1, 1 ],
				 [ 0, 0, 0, 0, 1 ],
				 [ 1, 1, 1, 1, 0 ]
				 ],
			'4': [
				 [ 1, 0, 0, 1, 0 ],
				 [ 1, 0, 0, 1, 0 ],
				 [ 1, 1, 1, 1, 1 ],
				 [ 0, 0, 0, 1, 0 ],
				 [ 0, 0, 0, 1, 0 ]
				 ],
			'5': [
				 [ 1, 1, 1, 1, 1 ],
				 [ 1, 0, 0, 0, 0 ],
				 [ 1, 1, 1, 1, 0 ],
				 [ 0, 0, 0, 0, 1 ],
				 [ 1, 1, 1, 1, 0 ]
				 ],
			'6': [
				 [ 0, 1, 1, 1, 0 ],
				 [ 1, 0, 0, 0, 0 ],
				 [ 1, 1, 1, 1, 0 ],
				 [ 1, 0, 0, 0, 1 ],
				 [ 0, 1, 1, 1, 0 ]
				 ],
			'7': [
				 [ 1, 1, 1, 1, 1 ],
				 [ 0, 0, 0, 0, 1 ],
				 [ 0, 0, 0, 1, 0 ],
				 [ 0, 0, 1, 0, 0 ],
				 [ 0, 0, 1, 0, 0 ]
				 ],
			'8': [
				 [ 0, 1, 1, 1, 0 ],
				 [ 1, 0, 0, 0, 1 ],
				 [ 0, 1, 1, 1, 0 ],
				 [ 1, 0, 0, 0, 1 ],
				 [ 0, 1, 1, 1, 0 ]
				 ],
			'9': [
				 [ 0, 1, 1, 1, 0 ],
				 [ 1, 0, 0, 0, 1 ],
				 [ 0, 1, 1, 1, 1 ],
				 [ 0, 0, 0, 0, 1 ],
				 [ 0, 1, 1, 1, 0 ]
				 ],
			'0': [
				 [ 0, 1, 1, 1, 0 ],
				 [ 1, 0, 0, 0, 1 ],
				 [ 1, 0, 0, 0, 1 ],
				 [ 1, 0, 0, 0, 1 ],
				 [ 0, 1, 1, 1, 0 ]
				 ],
			'A': [
				 [ 1, 1, 1, 1, 1 ],
				 [ 1, 0, 0, 0, 1 ],
				 [ 1, 1, 1, 1, 1 ],
				 [ 1, 0, 0, 0, 1 ],
				 [ 1, 0, 0, 0, 1 ]
				 ],
			'B': [
				 [ 1, 1, 1, 1, 0 ],
				 [ 1, 0, 0, 1, 0 ],
				 [ 1, 1, 1, 1, 1 ],
				 [ 1, 0, 0, 0, 1 ],
				 [ 1, 1, 1, 1, 1 ]
				 ],
			'C': [
				 [ 1, 1, 1, 1, 1 ],
				 [ 1, 0, 0, 0, 0 ],
				 [ 1, 0, 0, 0, 0 ],
				 [ 1, 0, 0, 0, 0 ],
				 [ 1, 1, 1, 1, 1 ]
				 ],
			'D': [
				 [ 1, 1, 1, 0, 0 ],
				 [ 1, 0, 0, 1, 0 ],
				 [ 1, 0, 0, 0, 1 ],
				 [ 1, 0, 0, 0, 1 ],
				 [ 1, 1, 1, 1, 1 ]
				 ],
			'E': [
				 [ 1, 1, 1, 1, 1 ],
				 [ 1, 0, 0, 0, 0 ],
				 [ 1, 1, 1, 0, 0 ],
				 [ 1, 0, 0, 0, 0 ],
				 [ 1, 1, 1, 1, 1 ]
				 ],
			'F': [
				 [ 1, 1, 1, 1, 1 ],
				 [ 1, 0, 0, 0, 0 ],
				 [ 1, 1, 1, 0, 0 ],
				 [ 1, 0, 0, 0, 0 ],
				 [ 1, 0, 0, 0, 0 ]
				 ],
			'G': [
				 [ 1, 1, 1, 1, 1 ],
				 [ 1, 0, 0, 0, 0 ],
				 [ 1, 0, 1, 1, 1 ],
				 [ 1, 0, 0, 0, 1 ],
				 [ 1, 1, 1, 1, 1 ]
				 ],
			'H': [
				 [ 1, 0, 0, 0, 1 ],
				 [ 1, 0, 0, 0, 1 ],
				 [ 1, 1, 1, 1, 1 ],
				 [ 1, 0, 0, 0, 1 ],
				 [ 1, 0, 0, 0, 1 ]
				 ],
			'I': [
				 [ 1, 1, 1, 1, 1 ],
				 [ 0, 0, 1, 0, 0 ],
				 [ 0, 0, 1, 0, 0 ],
				 [ 0, 0, 1, 0, 0 ],
				 [ 1, 1, 1, 1, 1 ]
				 ],
			'J': [
				 [ 0, 0, 0, 0, 1 ],
				 [ 0, 0, 0, 0, 1 ],
				 [ 0, 0, 0, 0, 1 ],
				 [ 1, 0, 0, 0, 1 ],
				 [ 1, 1, 1, 1, 1 ]
				 ],
			'K': [
				 [ 1, 0, 0, 1, 0 ],
				 [ 1, 0, 1, 0, 0 ],
				 [ 1, 1, 1, 0, 0 ],
				 [ 1, 0, 0, 1, 0 ],
				 [ 1, 0, 0, 0, 1 ]
				 ],
			'L': [
				 [ 1, 0, 0, 0, 0 ],
				 [ 1, 0, 0, 0, 0 ],
				 [ 1, 0, 0, 0, 0 ],
				 [ 1, 0, 0, 0, 0 ],
				 [ 1, 1, 1, 1, 1 ]
				 ],
			'M': [
				 [ 1, 0, 0, 0, 1 ],
				 [ 1, 1, 0, 1, 1 ],
				 [ 1, 0, 1, 0, 1 ],
				 [ 1, 0, 0, 0, 1 ],
				 [ 1, 0, 0, 0, 1 ]
				 ],
			'N': [
				 [ 1, 0, 0, 0, 1 ],
				 [ 1, 1, 0, 0, 1 ],
				 [ 1, 0, 1, 0, 1 ],
				 [ 1, 0, 0, 1, 1 ],
				 [ 1, 0, 0, 0, 1 ]
				 ],
			'O': [
				 [ 1, 1, 1, 1, 1 ],
				 [ 1, 0, 0, 0, 1 ],
				 [ 1, 0, 0, 0, 1 ],
				 [ 1, 0, 0, 0, 1 ],
				 [ 1, 1, 1, 1, 1 ]
				 ],
			'P': [
				 [ 1, 1, 1, 1, 1 ],
				 [ 1, 0, 0, 0, 1 ],
				 [ 1, 1, 1, 1, 1 ],
				 [ 1, 0, 0, 0, 0 ],
				 [ 1, 0, 0, 0, 0 ]
				 ],
			'Q': [
				 [ 1, 1, 1, 1, 0 ],
				 [ 1, 0, 0, 1, 0 ],
				 [ 1, 0, 0, 1, 0 ],
				 [ 1, 0, 0, 1, 0 ],
				 [ 1, 1, 1, 1, 1 ]
				 ],
			'R': [
				 [ 1, 1, 1, 1, 1 ],
				 [ 1, 0, 0, 0, 1 ],
				 [ 1, 1, 1, 1, 1 ],
				 [ 1, 0, 0, 1, 0 ],
				 [ 1, 0, 0, 0, 1 ]
				 ],
			'S': [
				 [ 1, 1, 1, 1, 1 ],
				 [ 1, 0, 0, 0, 0 ],
				 [ 1, 1, 1, 1, 1 ],
				 [ 0, 0, 0, 0, 1 ],
				 [ 1, 1, 1, 1, 1 ]
				 ],
			'T': [
				 [ 1, 1, 1, 1, 1 ],
				 [ 0, 0, 1, 0, 0 ],
				 [ 0, 0, 1, 0, 0 ],
				 [ 0, 0, 1, 0, 0 ],
				 [ 0, 0, 1, 0, 0 ]
				 ],
			'U': [
				 [ 1, 0, 0, 0, 1 ],
				 [ 1, 0, 0, 0, 1 ],
				 [ 1, 0, 0, 0, 1 ],
				 [ 1, 0, 0, 0, 1 ],
				 [ 1, 1, 1, 1, 1 ]
				 ],
			'V': [
				 [ 1, 0, 0, 0, 1 ],
				 [ 1, 0, 0, 0, 1 ],
				 [ 1, 0, 0, 0, 1 ],
				 [ 0, 1, 0, 1, 0 ],
				 [ 0, 0, 1, 0, 0 ]
				 ],
			'W': [
				 [ 1, 0, 0, 0, 1 ],
				 [ 1, 0, 0, 0, 1 ],
				 [ 1, 0, 1, 0, 1 ],
				 [ 1, 1, 0, 1, 1 ],
				 [ 1, 0, 0, 0, 1 ]
				 ],
			'X': [
				 [ 1, 0, 0, 0, 1 ],
				 [ 0, 1, 0, 1, 0 ],
				 [ 0, 0, 1, 0, 0 ],
				 [ 0, 1, 0, 1, 0 ],
				 [ 1, 0, 0, 0, 1 ]
				 ],
			'Y': [
				 [ 1, 0, 0, 0, 1 ],
				 [ 1, 0, 0, 0, 1 ],
				 [ 1, 1, 1, 1, 1 ],
				 [ 0, 0, 1, 0, 0 ],
				 [ 0, 0, 1, 0, 0 ]
				 ],
			'Z': [
				 [ 1, 1, 1, 1, 1 ],
				 [ 0, 0, 0, 1, 0 ],
				 [ 0, 0, 1, 0, 0 ],
				 [ 0, 1, 0, 0, 0 ],
				 [ 1, 1, 1, 1, 1 ]
				 ],
			' ': [
				 [ 0, 0, 0, 0, 0 ],
				 [ 0, 0, 0, 0, 0 ],
				 [ 0, 0, 0, 0, 0 ],
				 [ 0, 0, 0, 0, 0 ],
				 [ 0, 0, 0, 0, 0 ]
				 ],
			',': [
				 [ 0, 0, 0, 0, 0 ],
				 [ 0, 0, 0, 0, 0 ],
				 [ 0, 0, 0, 0, 0 ],
				 [ 0, 0, 1, 0, 0 ],
				 [ 0, 0, 1, 0, 0 ]
				 ],
			'+': [
				 [ 0, 0, 0, 0, 0 ],
				 [ 0, 0, 1, 0, 0 ],
				 [ 0, 1, 1, 1, 0 ],
				 [ 0, 0, 1, 0, 0 ],
				 [ 0, 0, 0, 0, 0 ]
				 ],
			'/': [
				 [ 0, 0, 0, 0, 1 ],
				 [ 0, 0, 0, 1, 0 ],
				 [ 0, 0, 1, 0, 0 ],
				 [ 0, 1, 0, 0, 0 ],
				 [ 1, 0, 0, 0, 0 ]
				 ],
			'%': [
				 [ 1, 0, 0, 0, 1 ],
				 [ 0, 0, 0, 1, 0 ],
				 [ 0, 0, 1, 0, 0 ],
				 [ 0, 1, 0, 0, 0 ],
				 [ 1, 0, 0, 0, 1 ]
				 ],
			':': [
				 [ 0, 0, 0, 0, 0 ],
				 [ 0, 0, 1, 0, 0 ],
				 [ 0, 0, 0, 0, 0 ],
				 [ 0, 0, 1, 0, 0 ],
				 [ 0, 0, 0, 0, 0 ]
				 ],
			'@': [
				 [ 1, 1, 1, 1, 1 ],
				 [ 0, 0, 0, 0, 1 ],
				 [ 1, 1, 1, 0, 1 ],
				 [ 1, 0, 1, 0, 1 ],
				 [ 1, 1, 1, 1, 1 ]
				 ],
			'#': [
				 [ 0, 1, 0, 1, 0 ],
				 [ 1, 1, 1, 1, 1 ],
				 [ 0, 1, 0, 1, 0 ],
				 [ 1, 1, 1, 1, 1 ],
				 [ 0, 1, 0, 1, 0 ]
				 ],
			'unknown': [
				 [  1, 1, 1, 1, 1 ],
				 [  1, 1, 1, 1, 1 ],
				 [  1, 1, 1, 1, 1 ],
				 [  1, 1, 1, 1, 1 ],
				 [  1, 1, 1, 1, 1 ]
				 ]
		}
	};

})();
