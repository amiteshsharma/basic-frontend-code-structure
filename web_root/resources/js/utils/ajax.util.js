/**
 * AJAX Handler Util
 */
;(function() {
	AJAX_UTIL =  {
		init : function(url, callbackFunc) {
			if (window.XMLHttpRequest) {//For IE7+, Firefox, Chrome, Opera, Safari
		  		xmlhttp = new XMLHttpRequest();
		  	} else {//For IE6, IE5
		  		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		  	}
			xmlhttp.onreadystatechange = callbackFunc;
		},
		getData : function(url, callbackFunc, sync) {
			this.init(url, callbackFunc);
			xmlhttp.open("GET", url, sync);
			xmlhttp.send();
		},
		postData : function(url, callbackFunc, sync) {
			this.init(url, callbackFunc);
			xmlhttp.open("POST", url, sync);
			xmlhttp.send();
		}		
	};
})();