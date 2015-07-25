// const { Cc, Ci, Cu, Cm, components } = require('chrome');

// let {WebRequest} = Cu.import("resource://gre/modules/WebRequest.jsm", {});

// var pattern = /https:\/\/joinhoney\.com\/.*/;

// function logURL(e) {
//   console.log("Loading: " + e.url);
//   alert(e);
// }

// exports.init = function() {
//   WebRequest.onBeforeRequest.addListener(logURL, {urls: [pattern]});
// }