$(function() {
	// 百度地图API功能
	var map = new BMap.Map("container");          
	map.centerAndZoom(new BMap.Point(116.404, 39.915), 15);
	var local = new BMap.LocalSearch(map, {
		renderOptions:{map: map}
	});
	local.search("景点, 饭店");
	
	window.alert(appData);
	
	document.getElementById('search').addEventListener('click', function(event){
		var mapInfo = document.getElementById('mapInfo');
		var mapHolder = document.getElementById('mapHolder');
		if ( mapInfo.style.display === '') {
			mapInfo.style.display = 'none';
			mapHolder.style.width = '100%';
		} 
		else {
			mapInfo.style.display = '';
			mapHolder.style.width = 'calc(100% - 280px)';
		}
	})
	

});

