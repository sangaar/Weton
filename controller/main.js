var _ = require('common/util');

_.extend(exports, {
	':load': function() {
		console.log('View was loaded');
	},

	':resized': function(width, height) {
		console.log('View was resized to ' + width + 'x' + height);
	},

	':keydown': function(key) {
		console.log('Key down: '+ key);
	},

	':keyup': function(key) {
		console.log('Key up: ' + key);
	},

	':keypress': function(key) {
		console.log('Key press: ' + key);
	},

	':active': function() {
		console.log('View is active');
	},

	':inactive': function() {
		console.log('View is inactive');
	}
});
