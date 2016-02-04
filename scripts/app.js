!function(e){"use strict";function t(e,t){return{date:e,url:"/article/"+t+".md",title:t}}var n=e.querySelector("#app");n.moduleDescriptionWebrtc="With the WebRTC connector all users exchange changes directly with each other. While WebRTC is not the most reliable connector, messages are propagated with almost no delay.\n\n* Very fast message propagation (not noticeable)\n* Very easy to use\n* Very little server load (you still have to set up a [signaling server](http://www.html5rocks.com/en/tutorials/webrtc/infrastructure/))\n* Not suited for a large amount of collaborators\n* WebRTC is not supported in all browsers, and some have troubles communicating with each other\n* Works only in the browser",n.moduleDescriptionWebsockets="With the websockets connector you can set up a central server that saves changes and communicates with clients.\nThis option is very similar to other shared editing frameworks that require a central server.\nBecause the websocket connector is build on top of [socket.io](socket.io), this connector is a rock solid choice\nif you require high reliability.\n\n* Extremely reliable\n* Very easy to use\n* Some server load\n* You can set up a central server that persists changes\n* Falls back to http-communication, if websockets are not supported\n* Work with nodejs and in the browser",n.moduleDescriptionXmpp="XMPP is a well known federated protocol to exchange data. This is definitely an interesting choice if you require high scalability.\n\n* Can act as a Connector for a scaling number of users\n* Sophisticated Rights Management\n* Federated\n* Works with nodejs and in the browser",n.moduleDescriptionIndexeddb="Use the IndexedDB database adapter to store your shared data\npersistently in the browser. The next time you join the session,\nyour changes will still be there.\n\n* Minimizes the amount of data exchanged between server and client\n* Makes offline editing possible\n* Not supported by all browsers",n.moduleDescriptionMemory="Use the Memory database adapter to store your shared data\nefficiently in-memory. The next time you join the session,\nyour changes will be lost\n\n* Supported by all browsers",n.moduleDescriptionMap="Use the Y.Map type to map key-value pairs.\n```\n// Create a new Y.Map type\ny.share.map.set('new map type', Y.Map).then(function (map) {\n  // Observe the map type\n  map.observePath(['my value'], function (value) {\n    console.log(\"You created a new value:\", value)\n  })\n  // Now we create a new property\n  map.set('my value', 42) // => \"You created a new value: 42\"\n  // And retrieve the value\n  map.get('my value') // => 42\n})\n```",n.moduleDescriptionArray='Use the Y.Array type to handle shared lists of data.\n```\n// Observe the array type\ny.share.array.observe(function (events) {\n  for (var i = 0; i < events.length; i++) {\n    console.log("New event: ", events[i])\n  }\n})\ny.share.array.insert(0, [1])\n  // => "New event: {type: "Insert", position: 0, value: 1}"\ny.share.array.delete(0, 1)\n  // => "New event: {type: "Delete", position: 0, length: 1}"\n```',n.moduleDescriptionText='Use the Y.Text type to share text content, and bind it to\narbitrary input elements (E.g. input, textarea, or any element that has the *contenteditable* property)\n```\n// bind text to the first p element that is contenteditable\ny.share.text.bind(document.querySelector("p[contenteditable]"))\n```',n.moduleDescriptionRichtext='Use the Y.RichText type to share rich text, and bind it to\n  the [quill editor](http://quilljs.com/).\n\n```\n// bind richtext to an instance of quill\ny.share.richtext.bind(document.querySelector("quill"))\n```',n.moduleDescriptionXml="Use the Y.Xml type to share XML content, and bind it to\nthe the browser DOM to observe the real-time changes\n\n**NOTE:** This type is currently migrating and not available in yjs@1.0.*\n```\n// create a DOM double binding\nvar shared_dom = y.share.xml.getDOM()\n// and append it to the body\ndocument.body.append(shared_dom)\n```",n.blogposts=[t("19 November 2015","Yjs Release 0.6"),t("13 May 2015","Yjs Release 0.5"),t("10 February 2015","Yjs Release 0.4")],n.blogpostUrlToName=function(e){return e=e.split("/"),e[e.length-1].slice(0,-3)},n.displayInstalledToast=function(){e.querySelector("platinum-sw-cache").disabled||e.querySelector("#caching-complete").show()},n.addEventListener("dom-change",function(){function t(t){var n=e.createElement("script");n.src=t,e.head.appendChild(n)}console.log("Our app is ready to rock!");var r=e.getElementById("mainToolbar");n._isMobile?r.classList.remove("tall"):r.classList.add("tall"),t("./bower_components/yjs/Examples/Textarea/index.js"),t("./bower_components/yjs/Examples/Jigsaw/index.js"),t("./bower_components/yjs/Examples/Chat/index.js"),t("./bower_components/yjs/Examples/Ace/index.js"),t("./bower_components/yjs/Examples/Quill/index.js")}),window.addEventListener("WebComponentsReady",function(){}),addEventListener("paper-header-transform",function(t){var n=e.querySelector("#mainToolbar .app-name"),r=e.querySelector("#mainToolbar .middle-container"),o=e.querySelector("#mainToolbar .bottom-container"),a=t.detail,s=a.height-a.condensedHeight,i=Math.min(1,a.y/s),l=.5,c=Math.max(l,(s-a.y)/(s/(1-l))+l),u=1-i;Polymer.Base.transform("translate3d(0,"+100*i+"%,0)",r),Polymer.Base.transform("scale("+u+") translateZ(0)",o),Polymer.Base.transform("scale("+c+") translateZ(0)",n)}),n.onDataRouteClick=function(){var t=e.querySelector("#paperDrawerPanel");t.narrow&&t.closeDrawer()},n.scrollPageToTop=function(){e.getElementById("mainContainer").scrollTop=0},n.getMainMode=function(e){return e?"scroll":"cover"},n.properties._isMobile={type:String,notify:!0,observer:"setMainToolbarClass"},n.setMainToolbarClass=function(t){var r=e.getElementById("mainToolbar");return null==r?void(n.initialToolbarClass=t?"":"tall"):void(t?r.classList.remove("tall"):r.classList.add("tall"))},n.topologyTotal={nodes:[{name:"Client 1",group:1},{name:"Client 2",group:2},{name:"Client 3",group:3},{name:"Client 4",group:4},{name:"Client 5",group:5},{name:"Client 6",group:6}],links:[{source:0,target:0},{source:0,target:1},{source:0,target:2},{source:0,target:3},{source:0,target:4},{source:0,target:5},{source:1,target:1},{source:1,target:2},{source:1,target:3},{source:1,target:4},{source:1,target:5},{source:2,target:2},{source:2,target:3},{source:2,target:4},{source:2,target:5},{source:3,target:3},{source:3,target:4},{source:3,target:5},{source:4,target:4},{source:4,target:5}]},n.topologyStar={nodes:[{name:"Server",group:1},{name:"Client 1",group:0},{name:"Client 2",group:0},{name:"Client 3",group:0},{name:"Client 4",group:0},{name:"Client 5",group:0},{name:"Client 6",group:0}],links:[{source:0,target:1},{source:0,target:2},{source:0,target:3},{source:0,target:4},{source:0,target:5},{source:0,target:6}]},n.topologyFederated={nodes:[{name:"XMPP Server",group:1},{name:"XMPP Server",group:2},{name:"XMPP Server",group:3},{name:"Client",group:0},{name:"Client",group:0},{name:"Client",group:0},{name:"Client",group:0},{name:"Client",group:0},{name:"Client",group:0}],links:[{source:0,target:3},{source:0,target:4},{source:1,target:5},{source:2,target:6},{source:2,target:7},{source:2,target:8},{source:0,target:1},{source:0,target:2},{source:1,target:2}]}}(document);