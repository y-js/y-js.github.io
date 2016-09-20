!function(e){"use strict";function t(e,t){return{date:e,url:"/article/"+t+".md",title:t}}var r=e.querySelector("#app");r.moduleDescriptionWebrtc="With the WebRTC connector all users exchange changes directly with each other. While WebRTC is not the most reliable connector, messages are propagated with almost no delay.\n\n* Very fast message propagation (not noticeable)\n* Very easy to use\n* Very little server load (you still have to set up a [signaling server](http://www.html5rocks.com/en/tutorials/webrtc/infrastructure/))\n* Not suited for a large amount of collaborators\n* WebRTC is not supported in all browsers, and some have troubles communicating with each other\n* Works only in the browser",r.moduleDescriptionWebsockets="With the websockets connector you can set up a central server that saves changes and communicates with clients.\nThis option is very similar to other shared editing frameworks that require a central server.\nBecause the websocket connector is build on top of [socket.io](socket.io), this connector is a rock solid choice\nif you require high reliability.\n\n* Extremely reliable\n* Very easy to use\n* Some server load\n* You can set up a central server that persists changes\n* Falls back to http-communication, if websockets are not supported\n* Work with nodejs and in the browser",r.moduleDescriptionXmpp="XMPP is a well known federated protocol to exchange data. This is definitely an interesting choice if you require high scalability.\n\n* Can act as a Connector for a scaling number of users\n* Sophisticated Rights Management\n* Federated\n* Works with nodejs and in the browser",r.moduleDescriptionIndexeddb="Use the IndexedDB database adapter to store your shared data\npersistently in the browser. The next time you join the session,\nyour changes will still be there.\n\n* Minimizes the amount of data exchanged between server and client\n* Makes offline editing possible\n* Not supported by all browsers",r.moduleDescriptionLeveldb="Use the LevelDB database adapter to store your shared data persistently in node applications. The changes persist after restart.\n\n* Low memory usage\n* Save changes on a file system",r.moduleDescriptionMemory="Use the Memory database adapter to store your shared data\nefficiently in-memory. The next time you join the session,\nyour changes will be lost\n\n* Supported by all browsers\n* Fast",r.moduleDescriptionMap="Use the Y.Map type to map key-value pairs.\n```\n// Create a new Y.Map type\nvar map = y.share.map.set('new map type', Y.Map)\n// Observe the map type\nmap.observePath(['my value'], function (value) {\n  console.log(\"You created a new value:\", value)\n})\n// Now we create a new property\nmap.set('my value', 42) // => \"You created a new value: 42\"\n// And retrieve the value\nmap.get('my value') // => 42```",r.moduleDescriptionArray='Use the Y.Array type to handle shared lists of data.\n```\n// Observe the array type\ny.share.array.observe(function (event) {\n  console.log("New event: ", event)\n})\ny.share.array.insert(0, [1])\n  // => "New event: {type: "Insert", index: 0, values: [1]}"\ny.share.array.delete(0, 1)\n  // => "New event: {type: "Delete", position: 0, oldValues: [1]}"\n```',r.moduleDescriptionText='Use the Y.Text type to share text content, and bind it to\narbitrary input elements (E.g. input, textarea, or any element that has the *contenteditable* property)\n```\n// bind text to the first p element that is contenteditable\ny.share.text.bind(document.querySelector("p[contenteditable]"))\n```',r.moduleDescriptionRichtext='Use the Y.RichText type to share rich text, and bind it to\n  the [quill editor](http://quilljs.com/).\n\n```\n// bind richtext to an instance of quill\ny.share.richtext.bind(document.querySelector("quill"))\n```',r.moduleDescriptionXml="Use the Y.Xml type to share XML content, and bind it to\nthe the browser DOM to observe the real-time changes\n\n```\n// create a DOM double binding\nvar shared_dom = y.share.xml.getDOM()\n// and append it to the body\ndocument.body.append(shared_dom)\n```",r.blogposts=[t("19 November 2015","Yjs Release 0.6"),t("13 May 2015","Yjs Release 0.5"),t("10 February 2015","Yjs Release 0.4")],r.blogpostUrlToName=function(e){return e=e.split("/"),e[e.length-1].slice(0,-3)},r.displayInstalledToast=function(){e.querySelector("platinum-sw-cache").disabled||e.querySelector("#caching-complete").show()},r.addEventListener("dom-change",function(){function t(t){var r=e.createElement("script");r.src=t,e.head.appendChild(r)}var n=e.getElementById("mainToolbar");r._isMobile?n.classList.remove("tall"):n.classList.add("tall"),t("./bower_components/yjs/Examples/Textarea/index.js"),t("./bower_components/yjs/Examples/Jigsaw/index.js"),t("./bower_components/yjs/Examples/Chat/index.js"),t("./bower_components/yjs/Examples/Ace/index.js"),t("./bower_components/yjs/Examples/Drawing/index.js"),t("./bower_components/yjs/Examples/Quill/index.js")}),window.addEventListener("WebComponentsReady",function(){}),addEventListener("paper-header-transform",function(t){var r=e.querySelector("#mainToolbar .app-name"),n=e.querySelector("#mainToolbar .middle-container"),a=e.querySelector("#mainToolbar .bottom-container"),o=t.detail,s=o.height-o.condensedHeight,i=Math.min(1,o.y/s),l=.5,c=Math.max(l,(s-o.y)/(s/(1-l))+l),u=1-i;Polymer.Base.transform("translate3d(0,"+100*i+"%,0)",n),Polymer.Base.transform("scale("+u+") translateZ(0)",a),Polymer.Base.transform("scale("+c+") translateZ(0)",r)}),r.onDataRouteClick=function(){var t=e.querySelector("#paperDrawerPanel");t.narrow&&t.closeDrawer()},r.scrollPageToTop=function(){e.getElementById("mainContainer").scrollTop=0},r.getMainMode=function(e){return e?"scroll":"cover"},null==r.properties&&(r.properties={}),r.properties._isMobile={type:String,notify:!0,observer:"setMainToolbarClass"},r.setMainToolbarClass=function(t){var n=e.getElementById("mainToolbar");return null==n?void(r.initialToolbarClass=t?"":"tall"):void(t?n.classList.remove("tall"):n.classList.add("tall"))};var n=!1;r.loadAnatomyIframe=function(){if(!n){n=!0;for(var t=e.querySelector("#putAnatomyIframeHere");null!=t.children[0];)t.children[0].remove();var r=e.createElement("iframe");r.setAttribute("src","http://dbis.rwth-aachen.de/3dnrt/yjs_demo/"),t.appendChild(r)}},r.topologyTotal={nodes:[{name:"Client 1",group:1},{name:"Client 2",group:2},{name:"Client 3",group:3},{name:"Client 4",group:4},{name:"Client 5",group:5},{name:"Client 6",group:6}],links:[{source:0,target:0},{source:0,target:1},{source:0,target:2},{source:0,target:3},{source:0,target:4},{source:0,target:5},{source:1,target:1},{source:1,target:2},{source:1,target:3},{source:1,target:4},{source:1,target:5},{source:2,target:2},{source:2,target:3},{source:2,target:4},{source:2,target:5},{source:3,target:3},{source:3,target:4},{source:3,target:5},{source:4,target:4},{source:4,target:5}]},r.topologyStar={nodes:[{name:"Server",group:1},{name:"Client 1",group:0},{name:"Client 2",group:0},{name:"Client 3",group:0},{name:"Client 4",group:0},{name:"Client 5",group:0},{name:"Client 6",group:0}],links:[{source:0,target:1},{source:0,target:2},{source:0,target:3},{source:0,target:4},{source:0,target:5},{source:0,target:6}]},r.topologyFederated={nodes:[{name:"XMPP Server",group:1},{name:"XMPP Server",group:2},{name:"XMPP Server",group:3},{name:"Client",group:0},{name:"Client",group:0},{name:"Client",group:0},{name:"Client",group:0},{name:"Client",group:0},{name:"Client",group:0}],links:[{source:0,target:3},{source:0,target:4},{source:1,target:5},{source:2,target:6},{source:2,target:7},{source:2,target:8},{source:0,target:1},{source:0,target:2},{source:1,target:2}]}}(document);