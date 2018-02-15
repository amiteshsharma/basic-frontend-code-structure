/**
 * Contains all Javascript handling for ajax.jsp  
 */
;(function($) {
	
	//Namespacing example: https://github.com/shichuan/javascript-patterns/blob/master/object-creation-patterns/namespace.html
	NAMESPACE_UTIL.namespace('usermanager.ui.handlers.LoginPageHandler');
	
	var PageHandler = function() {

		//Constants
		var URL = 'http://localhost:3000/views/home.html'; 
	
		//------------------Event Handlers Section --------------
		/**
		* Change Page URL with username param
		*/
		var goToHome = function()
		{
			var key = $("input[name=username]").val();

			if(!key) {
				window.location.href = URL;
			} else {
				window.location.href = URL + "#" + key;
			}
		};
		
		var initEvents = function() {
			
			//List all page event Handlers here..
			$("#submit").click(function() {
				var key = $("input[name=username]").val();
				
				if(!key) {
					window.location.href = URL;
				} else {
					window.location.href = URL + "#" + key;
				}
			});
			//or//document.getElementById('submit').onclick = goToHome;
		};

		//------------------Page Handler Context initialization-- 
		var initContext = function(cfg) {
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

	usermanager.ui.handlers.LoginPageHandler = PageHandler;
})(jQuery);