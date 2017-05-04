class DOMNodeCollection {
  constructor(HTMLElements) {
    this.HTMLElements = HTMLElements;
  }

  html(string) {
    if (string === undefined){
      return this.HTMLElements[0].innerHTML;
    } else {
      this.HTMLElements.forEach((e) => {
        e.innerHTML = string;
      });
    }
  }

  empty() {
    this.HTMLElements.forEach((e) => {
      e.innerHTML = "";
    });
  }

  append(arg) {
    this.HTMLElements.forEach((e) => {
      e.innerHTML += arg.outerHTML;
    });
  }

  attr(attribute, value) {
    if (value === undefined){
      return this.HTMLElements[0].getAttribute(attribute);
    } else {
      this.HTMLElements.forEach((el) => {
        el.setAttribute(attribute, value);
    });
  }
}

  addClass(newClass) {
    this.HTMLElements.forEach((el) => {
      el.className += ` ${newClass}`;
    });
  }

  removeClass(classy) {
    if (classy === undefined){
      this.HTMLElements.forEach((el) => {
        el.className = "";
    });
    } else {
      this.HTMLElements.forEach((el) => {
        el.className.replace(classy, "");
      });
    }
  }

  children() {
    let child = [];
    this.HTMLElements.forEach((el) => {
      child.push(new DOMNodeCollection(el.children));
    });
    return child;
  }

  parent() {
    let parent = [];
    this.HTMLElements.forEach((el) => {
      parent.push(new DOMNodeCollection(el.parentNode));
    });
    return parent;
  }

  remove() {
    this.HTMLElements.forEach((el) => {
      el.parentNode.removeChild(el);
    });
  }

  on(type, cb){
    this.HTMLElements.forEach((el) => {
      el.addEventListener(type, cb);
      el["callback"] = cb;
      // el.setAttribute("callback", cb);
    });
  }

  off(type){
    this.HTMLElements.forEach((el) => {
      // var cb = el.getAttribute("callback");
      console.log(el["callback"]);
      el.removeEventListener(type, el["callback"]);
    });
  }

}


module.exports = DOMNodeCollection;
