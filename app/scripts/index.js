var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: initApp
};

function initApp() {
	console.log("howdy.");
	document.body.style.backgroundColor = "#eee";
	
	// store a variable
	var myStoredVal = window.localStorage.getItem("myStoredVal");
	document.getElementById("myInput").value = myStoredVal;
	
	document.getElementById("vibrateLink").onclick = function() {
		navigator.notification.vibrate( 1000 );
		document.body.style.backgroundColor = "#fff";
		return false;
	}
	
	document.getElementById("beepLink").onclick = function() {
		navigator.notification.beep( 5 );
		document.body.style.backgroundColor = "#faf";
		return false;
	}
	
	document.getElementById("myButton").onclick = function() {
		myInputVal = document.getElementById("myInput").value;
		window.localStorage.setItem("myStoredVal", myInputVal);
		console.log( "myInputVal stored: " + myInputVal );
	}
	
	document.getElementById("myJSONButton").onclick = function() {
		myJsonString = '{"array": [1,2,3],"boolean": true,"null": null,"number": 123,"object": {"a": "b","c": "d","e": "f"},"string": "Hello World"}';
		document.getElementById("myInput").value = myJsonString;
	}
	
	document.getElementById("JsonString").onclick = function() {
		var returnVal = "String not found.";
		if ( IsJsonString( window.localStorage.getItem("myStoredVal") ) ) {
			var myJsonVal = JSON.parse( window.localStorage.getItem("myStoredVal" ) );
			if (myJsonVal.hasOwnProperty('string')) {
				var returnVal = myJsonVal.string;
			}
		}
		alert(returnVal);
	}
	
	document.getElementById("JsonObjA").onclick = function() {
		var returnVal = "Object A not found.";
		if ( IsJsonString( window.localStorage.getItem("myStoredVal") ) ) {
			var myJsonVal = JSON.parse( window.localStorage.getItem("myStoredVal" ) );
			if ( myJsonVal.hasOwnProperty('object') && myJsonVal.object.hasOwnProperty('a') ) {
				var returnVal = myJsonVal.object.a;
			}
		}
		alert(returnVal);
	}
}

function IsJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}