var placeViewModel = {
	// 搜索条件
	searchStr: ko.observable(''),
	// 选择类型
	placeType: ko.observableArray([]),
	// 当前筛选出的地点
	currentPlaces: null,
	
	myPlaces: ko.pureComputed({
		read: function() {
			placeViewModel.currentPlaces = places.filter(function(item) {
				if(placeViewModel.searchStr()) {
					return(item.name.indexOf(placeViewModel.searchStr()) >= 0) || (item.addr.indexOf(placeViewModel.searchStr()) >= 0);
				} else {
					return true;
				}
			}).filter(function(item) {
				if(placeViewModel.placeType().length > 0) {
					return placeViewModel.placeType().indexOf(item.type) >= 0;
				} else {
					return true;
				}
			});
			mapView.render();
			return placeViewModel.currentPlaces;

		}
	}, this)
};

ko.applyBindings(placeViewModel);
mapView.init();
mapInfoView.init();