var width = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

var height = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;

console.log(platform);

console.log(width, height);

'use strict';


// if(window.location.href != 'https://Book-reader\.github\.io/.*'){
//   location.href = 'https://Book-reader.github.io/HTML/index.html';
// }

//Maybe Modify this
// var currentURL = window.location.pathname,
//     // create a regular expression that will match all pages under user
//     usersPattern = new RegExp('^/ojs/index\.php/index/user/.*');

// if (usersPattern.test(currentURL)) {
//     loadjscssfile("/ojs/plugins/themes/main-theme/main-theme.css", "css")
// }


var Trail = function(options) {
  this.size        = options.size || 10;
  this.trailLength = options.trailLength || 20;
  this.interval    = options.interval || 15;
  this.hueSpeed    = options.hueSpeed || 12;

  this.boxes = [];
  this.hue   = 0;
  this.mouse = {
    x : window.innerWidth/2,
    y : window.innerHeight/2
  };

  this.init = function() {
    for (var i = 0; i < this.trailLength; i++) {
      this.boxes[i]              = document.createElement('div');
      this.boxes[i].className    = 'box';
      this.boxes[i].style.width  = this.size + 'px';
      this.boxes[i].style.height = this.size + 'px';
      document.body.appendChild(this.boxes[i]);
    }

    var self = this;

    // document.onmousemove = function() {
    //   event = event || window.event;
    //   self.mouse.x = event.clientX;
    //   self.mouse.y = event.clientY;
    //   console.log(event);
    // };

    //Periodically update mouse tracing and boxes
    setInterval(function(){
      self.updateHue();
      self.updateBoxes();
    }, this.interval);
  }

  //Update hue and constrain to 360
  this.updateHue = function() {
    this.hue = (this.hue + this.hueSpeed) % 360;
  }

  //Update box positions and stylings
  this.updateBoxes = function() {
    for (var i = 0; i < this.boxes.length; i++) {
      if (i+1 === this.boxes.length) {
        this.boxes[i].style.top             = this.mouse.y - this.size/2 + 'px';
        this.boxes[i].style.left            = this.mouse.x - this.size/2 + 'px';
        this.boxes[i].style.backgroundColor = 'hsl(' + this.hue + ', 90%, 50%)';
      } else {
        this.boxes[i].style.top             = this.boxes[i+1].style.top;
        this.boxes[i].style.left            = this.boxes[i+1].style.left;
        this.boxes[i].style.backgroundColor = this.boxes[i+1].style.backgroundColor;
      }
    }
  }
}

var options = {
  trailLength: 20,
  size: 10,
  interval: 15,
  hueSpeed: 3
};
var trail = new Trail(options);
trail.init();

//Hotfix
document.onmousemove = function() {
  trail.mouse.x = event.clientX;
  trail.mouse.y = event.clientY;
};