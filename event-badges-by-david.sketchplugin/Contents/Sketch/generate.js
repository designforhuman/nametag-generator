var that=this;function __skpm_run(e,t){that.context=t;var r=function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s="./src/generate.js")}({"./src/generate.js":
/*!*************************!*\
  !*** ./src/generate.js ***!
  \*************************/
/*! exports provided: default */function(e,t,r){"use strict";r.r(t);var n=r(/*! sketch */"sketch"),a=n.getSelectedDocument(),o=(n.Page,n.Artboard),f=n.Group,i=n.Shape,u=n.Rectangle,l=(n.Text,n.Style),c=r(/*! sketch/ui */"sketch/ui"),s="paper",m=50,d=1,p=547,h=10,g=a.selectedLayers,y=(a.selectedPage,1),v=1,x=0,b=842,w=595,_=[];t.default=function(e){if(1===g.length){if(""==a.getLayersNamed("name")&&(c.alert("No Layer","Can't find 'name' layer."),1))return;var t=c.getStringFromUser("Insert names here.","");if("null"==t)return void c.message("Canceled");if(""==t)return void c.alert("No Input","Please enter names.");var r=t.split("\n"),n=new o({name:s+x++,parent:a.selectedPage,frame:new u(0,0,b,w)});!function(e){g.forEach(function(t){v=Math.floor(e.frame.width/t.frame.width);var r=b-v*t.frame.width;t.parent=e,t.frame.x=e.frame.x+r/2,t.frame.y=e.frame.y+w/2-t.frame.height/2})}(n),g.forEach(function(e){_.push(e.frame.x-.5),_.push(e.frame.x+e.frame.width+.5);for(var t=1;t<v;t++){var r=e.duplicate(),n=r.frame;n.x+=t*n.width,r.frame=n,_.push(n.x+n.width-.5),r.moveToFront()}}),function(e,t){for(var r=new f({parent:e,frame:e.frame,name:"cuttingLines"}),n=0;n<t.length;n++)new i({parent:r,frame:new u(t[n],(e.frame.height-p)/2,d,p)}).style.fills=[{color:"#BEBEBE",fillType:l.FillType.Color}];r.moveToBack()}(n,_),g.forEach(function(e){e.parent.selected=!0,e.selected=!1}),y=Math.floor((r.length-1)/v),function(e,t){for(var r=0,n=0;n<=y;n++){var o=e.duplicate(),f=o.frame;r%h==0&&(r=0),f.x+=r++*(f.width+m),f.y=Math.floor(n/h)*(f.height+m),o.frame=f,o.name=s+x++,o.selected=!0,o.moveToFront()}a.getLayersNamed("paper0")[0].remove()}(n),function(e){a.getLayersNamed("name").forEach(function(t,r){r>=e.length?t.text="":t.text=e[r]})}(r)}else c.alert("Selection Error","Select a layer group first to duplicate.")}},sketch:
/*!*************************!*\
  !*** external "sketch" ***!
  \*************************/
/*! no static exports found */function(e,t){e.exports=require("sketch")},"sketch/ui":
/*!****************************!*\
  !*** external "sketch/ui" ***!
  \****************************/
/*! no static exports found */function(e,t){e.exports=require("sketch/ui")}});"default"===e&&"function"==typeof r?r(t):r[e](t)}that.onRun=__skpm_run.bind(this,"default");