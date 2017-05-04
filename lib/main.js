window.$l = function(selectors) {
  var NodeList = document.querySelectorAll(selectors);
  var nodeListArr = Array.from(NodeList);
  return nodeListArr;
};
