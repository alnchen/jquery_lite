var DOMNodeCollection = require('./dom_node_collection');

window.$l = function(selectors) {
  if (selectors instanceof HTMLElement){
    console.log('hey');
    var htmlArr = [selectors];
    return new DOMNodeCollection(htmlArr);
  } else {
    console.log('sup');
    var NodeList = document.querySelectorAll(selectors);
    var nodeListArr = Array.from(NodeList);
    return new DOMNodeCollection(nodeListArr);
  }
};
