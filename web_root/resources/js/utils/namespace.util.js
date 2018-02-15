/**
 * AJAX Handler Util
 */
;(function() {
	NAMESPACE_UTIL =  {
		namespace : function(namespaceStr) {
			var parts = namespaceStr.split('.'), 
				recursiveObj;

			if (typeof usermanager === "undefined") {
				usermanager = {};
			}			

			//Remove "usermanager" part, as it is the root, and already initialized (if not available already). 
			parts.shift();

			parent = usermanager;	
			//Child namespace objects need to be checked (whether they already exist or not).
			for (index in parts) {
				//Create a property if it doesn't exist
				if (typeof parent[parts[index]] === "undefined") {
					parent[parts[index]] = {};
				}
				parent = parent[parts[index]];
			}
		}	
	};
})();
