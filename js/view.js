var mapView = {
	init: function() {
		// 百度地图API功能
		this.map = new BMap.Map("container");
		this.map.centerAndZoom(new BMap.Point(116.404, 39.915), 15);
		this.map.addControl(new BMap.ScaleControl({
			anchor: BMAP_ANCHOR_TOP_LEFT
		}));
		this.map.addControl(new BMap.NavigationControl());
		this.render();
	},
	render: function() {
		var place = {},
			point = {},
			marker = {};
		// 清除覆盖物	
		if(this.map) {
			this.map.clearOverlays();
		}
		for(index in placeViewModel.currentPlaces) {
			place = placeViewModel.currentPlaces[index];
			var myIcon = new BMap.Icon(placeTypeIcon[place.type], new BMap.Size(32, 32), {
				anchor: new BMap.Size(16, 32)
			});
			var point = new BMap.Point(place.lat, place.lng);
			var marker = new BMap.Marker(point, {
				icon: myIcon
			});
			debugger;
			// 避免DOM渲染时调用为初始化的map
			if(this.map) {
				this.map.addOverlay(marker);
			};
		}
	},
	markerBoundce: function(marker) {
		var times = 5;
		return function() {
			var int = self.setInterval(function() {
				if(times === 0) {
					windows.clearInterval(int);
					marker.setAnimation(null); //取消跳动的动画
					return;
				}
				marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
				times--;
			}, 50);
		}
	}

};

var mapInfoView = {
	init: function() {
		this.mapInfo = document.getElementById('mapInfo');
		this.mapHolder = document.getElementById('mapHolder');
		this.searchElem = document.getElementById('search');

		document.getElementById('search').addEventListener('click', function(event) {
			if(this.mapInfo.style.display === '') {
				this.mapInfo.style.display = 'none';
				this.mapHolder.style.width = '100%';
			} else {
				this.mapInfo.style.display = '';
				this.mapHolder.style.width = 'calc(100% - 280px)';
			}

		});
		this.render();

	},
	render: function() {

	}
};