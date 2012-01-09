var _ = require('common/util');
var ImageView = require('ui').ImageView;
var app = this;

_.extend(exports, {
	':load': function() {
		var self = this;

		self.selection = self.keySelectionWithItems([
				self.get('ibTanggal'),
				self.get('ibBulan'),
                                self.get('ibTahun'),
				self.get('button-box').get('bSearch')
			],
			{
				focusedCallback: function(item) {
					if (item instanceof ImageView) {
						self.get('button-box').get('bSearch').src(app.resourceURL('search_ho.png'));
					} else {
						self.get('button-box').get('bSearch').src(app.resourceURL('search.png'));
					}

				}
			});

		self.get('button-box').get('bSearch').src(app.resourceURL('search_ho.png'));
		self.get('button-box').get('bSearch').src(app.resourceURL('search.png'));

		self.get('ibTanggal').on('activate', function() {
			self.get('ibTanggal').emit('keypress', 'fire');
		});

		self.get('ibBulan').on('activate', function() {
			self.get('ibBulan').emit('keypress', 'fire');
		});
                self.get('ibTahun').on('activate', function() {
			self.get('ibTahun').emit('keypress', 'fire');
		});

		self.get('button-box').get('bSearch').on('activate', function() {
			app.msg('search', {tg: self.get('ibTanggal').value(), bl: self.get('ibBulan').value(),th: self.get('ibTahun').value()});
		});
                
		app.on('connected', function() {
			console.log('Connected to backend.');

			app.on('message', function(action, data){
				if (action === 'search') {
					//console.log(data.Title);
					app.setContent('detail', data);
				}
			});
		});
	}
});
