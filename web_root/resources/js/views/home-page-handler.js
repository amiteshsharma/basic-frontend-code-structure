/**
 * Contains all Javascript handling for ajax.jsp  
 */
;(function($) {
	var PageHandler = function() {
	
		//Constants
		var URL = 'http://localhost:3000/users.ajax'; 
	
		//------------------Event Handlers Section --------------
		/**
		* Get Data from Server URL using AJAX, and display on page
		*/
		var getDataFromAJAX = function()
		{
			AJAX_UTIL.getData(URL, function() {
				if (this.readyState == 4 && this.status == 200) {
			    	document.getElementById('json-container').innerHTML = this.responseText;
					console.log(JSON.parse(this.responseText));
			    }
			});
		};
		
		var initEvents = function() {
			document.getElementById('launch').onclick = getDataFromAJAX;
		};

		//------------------Page Handler Context initialization-- 
		var initContext = function(cfg) {
			$('#user-title').html('Welcome ' + cfg.userName + '!!');
			//or//document.getElementById('user-title').innerHTML = 'Welcome ' + cfg.userName + '!!';
			initEvents();
		};
		
        //Public Object
        var pClass = {
            init: function (cfg) { 
                initContext(cfg);
            }
        };

        return pClass;	
	};
	
	//Namespacing example: https://github.com/shichuan/javascript-patterns/blob/master/object-creation-patterns/namespace.html
	NAMESPACE_UTIL.namespace('usermanager.ui.handlers.HomePageHandler');
	
	usermanager.ui.handlers.HomePageHandler = PageHandler;
})(jQuery);