(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var css = "/*!\nPure v0.6.0\nCopyright 2014 Yahoo! Inc. All rights reserved.\nLicensed under the BSD License.\nhttps://github.com/yahoo/pure/blob/master/LICENSE.md\n*//*!\nnormalize.css v^3.0 | MIT License | git.io/normalize\nCopyright (c) Nicolas Gallagher and Jonathan Neal\n*//*! normalize.css v3.0.2 | MIT License | git.io/normalize */html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background-color:transparent}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:700}dfn{font-style:italic}h1{font-size:2em;margin:.67em 0}mark{background:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{-moz-box-sizing:content-box;box-sizing:content-box;height:0}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type=button],input[type=reset],input[type=submit]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type=checkbox],input[type=radio]{box-sizing:border-box;padding:0}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{height:auto}input[type=search]{-webkit-appearance:textfield;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;box-sizing:content-box}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration{-webkit-appearance:none}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{border:0;padding:0}textarea{overflow:auto}optgroup{font-weight:700}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}.hidden,[hidden]{display:none!important}.pure-img{max-width:100%;height:auto;display:block}.pure-g{letter-spacing:-.31em;text-rendering:optimizespeed;font-family:FreeSans,Arimo,\"Droid Sans\",Helvetica,Arial,sans-serif;-webkit-flex-flow:row wrap;display:-ms-flexbox;-ms-flex-flow:row wrap;-ms-align-content:flex-start;-webkit-align-content:flex-start;align-content:flex-start}.opera-only :-o-prefocus,.pure-g{word-spacing:-.43em}.pure-u{display:inline-block;zoom:1;letter-spacing:normal;word-spacing:normal;vertical-align:top;text-rendering:auto}.pure-g [class*=\"pure-u\"]{font-family:sans-serif}.pure-u-1,.pure-u-1-1,.pure-u-1-12,.pure-u-1-2,.pure-u-1-24,.pure-u-1-3,.pure-u-1-4,.pure-u-1-5,.pure-u-1-6,.pure-u-1-8,.pure-u-10-24,.pure-u-11-12,.pure-u-11-24,.pure-u-12-24,.pure-u-13-24,.pure-u-14-24,.pure-u-15-24,.pure-u-16-24,.pure-u-17-24,.pure-u-18-24,.pure-u-19-24,.pure-u-2-24,.pure-u-2-3,.pure-u-2-5,.pure-u-20-24,.pure-u-21-24,.pure-u-22-24,.pure-u-23-24,.pure-u-24-24,.pure-u-3-24,.pure-u-3-4,.pure-u-3-5,.pure-u-3-8,.pure-u-4-24,.pure-u-4-5,.pure-u-5-12,.pure-u-5-24,.pure-u-5-5,.pure-u-5-6,.pure-u-5-8,.pure-u-6-24,.pure-u-7-12,.pure-u-7-24,.pure-u-7-8,.pure-u-8-24,.pure-u-9-24{display:inline-block;zoom:1;letter-spacing:normal;word-spacing:normal;vertical-align:top;text-rendering:auto}.pure-u-1-24{width:4.1667%}.pure-u-1-12,.pure-u-2-24{width:8.3333%}.pure-u-1-8,.pure-u-3-24{width:12.5%}.pure-u-1-6,.pure-u-4-24{width:16.6667%}.pure-u-1-5{width:20%}.pure-u-5-24{width:20.8333%}.pure-u-1-4,.pure-u-6-24{width:25%}.pure-u-7-24{width:29.1667%}.pure-u-1-3,.pure-u-8-24{width:33.3333%}.pure-u-3-8,.pure-u-9-24{width:37.5%}.pure-u-2-5{width:40%}.pure-u-10-24,.pure-u-5-12{width:41.6667%}.pure-u-11-24{width:45.8333%}.pure-u-1-2,.pure-u-12-24{width:50%}.pure-u-13-24{width:54.1667%}.pure-u-14-24,.pure-u-7-12{width:58.3333%}.pure-u-3-5{width:60%}.pure-u-15-24,.pure-u-5-8{width:62.5%}.pure-u-16-24,.pure-u-2-3{width:66.6667%}.pure-u-17-24{width:70.8333%}.pure-u-18-24,.pure-u-3-4{width:75%}.pure-u-19-24{width:79.1667%}.pure-u-4-5{width:80%}.pure-u-20-24,.pure-u-5-6{width:83.3333%}.pure-u-21-24,.pure-u-7-8{width:87.5%}.pure-u-11-12,.pure-u-22-24{width:91.6667%}.pure-u-23-24{width:95.8333%}.pure-u-1,.pure-u-1-1,.pure-u-24-24,.pure-u-5-5{width:100%}.pure-button{display:inline-block;zoom:1;line-height:normal;white-space:nowrap;vertical-align:middle;text-align:center;cursor:pointer;-webkit-user-drag:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;font-family:inherit;font-size:100%;border:1px solid #999;border:none transparent;text-decoration:none}.pure-button-hover,.pure-button:focus,.pure-button:hover{filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#1a000000', GradientType=0);background-image:-webkit-gradient(linear,0 0,0 100%,from(transparent),color-stop(40%,rgba(0,0,0,.05)),to(rgba(0,0,0,.1)));background-image:-webkit-linear-gradient(transparent,rgba(0,0,0,.05) 40%,rgba(0,0,0,.1));background-image:-moz-linear-gradient(top,rgba(0,0,0,.05) 0,rgba(0,0,0,.1));background-image:-o-linear-gradient(transparent,rgba(0,0,0,.05) 40%,rgba(0,0,0,.1));background-image:linear-gradient(transparent,rgba(0,0,0,.05) 40%,rgba(0,0,0,.1))}.pure-button:focus{outline:0}.pure-button-active,.pure-button:active{box-shadow:0 0 0 1px rgba(0,0,0,.15) inset,0 0 6px rgba(0,0,0,.2) inset}.pure-button-disabled,.pure-button-disabled:active,.pure-button-disabled:focus,.pure-button-disabled:hover,.pure-button[disabled]{border:none;background-image:none;filter:progid:DXImageTransform.Microsoft.gradient(enabled=false);filter:alpha(opacity=40);-khtml-opacity:.4;-moz-opacity:.4;opacity:.4;cursor:not-allowed;box-shadow:none}.pure-button-hidden{display:none}.pure-button::-moz-focus-inner{padding:0;border:0}.pure-button-primary,.pure-button-selected,a.pure-button-primary,a.pure-button-selected{background-color:#0078e7;color:#fff}.pure-form input[type=color],.pure-form input[type=date],.pure-form input[type=datetime-local],.pure-form input[type=datetime],.pure-form input[type=email],.pure-form input[type=month],.pure-form input[type=number],.pure-form input[type=password],.pure-form input[type=search],.pure-form input[type=tel],.pure-form input[type=text],.pure-form input[type=time],.pure-form input[type=url],.pure-form input[type=week],.pure-form select,.pure-form textarea{padding:.5em .6em;display:inline-block;border:1px solid #ccc;box-shadow:inset 0 1px 3px #ddd;border-radius:4px;vertical-align:middle;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.pure-form input:not([type]){padding:.5em .6em;display:inline-block;border:1px solid #ccc;box-shadow:inset 0 1px 3px #ddd;border-radius:4px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.pure-form input[type=color]{padding:.2em .5em}.pure-form input:not([type]):focus,.pure-form input[type=color]:focus,.pure-form input[type=date]:focus,.pure-form input[type=datetime-local]:focus,.pure-form input[type=datetime]:focus,.pure-form input[type=email]:focus,.pure-form input[type=month]:focus,.pure-form input[type=number]:focus,.pure-form input[type=password]:focus,.pure-form input[type=search]:focus,.pure-form input[type=tel]:focus,.pure-form input[type=text]:focus,.pure-form input[type=time]:focus,.pure-form input[type=url]:focus,.pure-form input[type=week]:focus,.pure-form select:focus,.pure-form textarea:focus{outline:0;border-color:#129FEA}.pure-form input[type=checkbox]:focus,.pure-form input[type=file]:focus,.pure-form input[type=radio]:focus{outline:#129FEA auto 1px}.pure-form .pure-checkbox,.pure-form .pure-radio{margin:.5em 0;display:block}.pure-form input:not([type])[disabled],.pure-form input[type=color][disabled],.pure-form input[type=date][disabled],.pure-form input[type=datetime-local][disabled],.pure-form input[type=datetime][disabled],.pure-form input[type=email][disabled],.pure-form input[type=month][disabled],.pure-form input[type=number][disabled],.pure-form input[type=password][disabled],.pure-form input[type=search][disabled],.pure-form input[type=tel][disabled],.pure-form input[type=text][disabled],.pure-form input[type=time][disabled],.pure-form input[type=url][disabled],.pure-form input[type=week][disabled],.pure-form select[disabled],.pure-form textarea[disabled]{cursor:not-allowed;background-color:#eaeded;color:#cad2d3}.pure-form input[readonly],.pure-form select[readonly],.pure-form textarea[readonly]{background-color:#eee;color:#777;border-color:#ccc}.pure-form input:focus:invalid,.pure-form select:focus:invalid,.pure-form textarea:focus:invalid{color:#b94a48;border-color:#e9322d}.pure-form input[type=checkbox]:focus:invalid:focus,.pure-form input[type=file]:focus:invalid:focus,.pure-form input[type=radio]:focus:invalid:focus{outline-color:#e9322d}.pure-form select{height:2.25em;border:1px solid #ccc;background-color:#fff}.pure-form select[multiple]{height:auto}.pure-form fieldset{margin:0;padding:.35em 0 .75em;border:0}.pure-form legend{display:block;width:100%;padding:.3em 0;margin-bottom:.3em;color:#333;border-bottom:1px solid #e5e5e5}.pure-form-stacked input:not([type]),.pure-form-stacked input[type=color],.pure-form-stacked input[type=date],.pure-form-stacked input[type=datetime-local],.pure-form-stacked input[type=datetime],.pure-form-stacked input[type=email],.pure-form-stacked input[type=file],.pure-form-stacked input[type=month],.pure-form-stacked input[type=number],.pure-form-stacked input[type=password],.pure-form-stacked input[type=search],.pure-form-stacked input[type=tel],.pure-form-stacked input[type=text],.pure-form-stacked input[type=time],.pure-form-stacked input[type=url],.pure-form-stacked input[type=week],.pure-form-stacked label,.pure-form-stacked select,.pure-form-stacked textarea{display:block;margin:.25em 0}.pure-form-aligned .pure-help-inline,.pure-form-aligned input,.pure-form-aligned select,.pure-form-aligned textarea,.pure-form-message-inline{display:inline-block;vertical-align:middle}.pure-form-aligned textarea{vertical-align:top}.pure-form-aligned .pure-control-group{margin-bottom:.5em}.pure-form-aligned .pure-control-group label{text-align:right;display:inline-block;vertical-align:middle;width:10em;margin:0 1em 0 0}.pure-form-aligned .pure-controls{margin:1.5em 0 0 11em}.pure-form .pure-input-rounded,.pure-form input.pure-input-rounded{border-radius:2em;padding:.5em 1em}.pure-form .pure-group fieldset{margin-bottom:10px}.pure-form .pure-group input,.pure-form .pure-group textarea{display:block;padding:10px;margin:0 0 -1px;border-radius:0;position:relative;top:-1px}.pure-form .pure-group input:focus,.pure-form .pure-group textarea:focus{z-index:3}.pure-form .pure-group input:first-child,.pure-form .pure-group textarea:first-child{top:1px;border-radius:4px 4px 0 0;margin:0}.pure-form .pure-group input:first-child:last-child,.pure-form .pure-group textarea:first-child:last-child{top:1px;border-radius:4px;margin:0}.pure-form .pure-group input:last-child,.pure-form .pure-group textarea:last-child{top:-2px;border-radius:0 0 4px 4px;margin:0}.pure-form .pure-group button{margin:.35em 0}.pure-form .pure-input-1{width:100%}.pure-form .pure-input-2-3{width:66%}.pure-form .pure-input-1-2{width:50%}.pure-form .pure-input-1-3{width:33%}.pure-form .pure-input-1-4{width:25%}.pure-form .pure-help-inline,.pure-form-message-inline{display:inline-block;padding-left:.3em;color:#666;vertical-align:middle;font-size:.875em}.pure-form-message{display:block;color:#666;font-size:.875em}@media only screen and (max-width :480px){.pure-form button[type=submit]{margin:.7em 0 0}.pure-form input:not([type]),.pure-form input[type=color],.pure-form input[type=date],.pure-form input[type=datetime-local],.pure-form input[type=datetime],.pure-form input[type=email],.pure-form input[type=month],.pure-form input[type=number],.pure-form input[type=password],.pure-form input[type=search],.pure-form input[type=tel],.pure-form input[type=text],.pure-form input[type=time],.pure-form input[type=url],.pure-form input[type=week],.pure-form label{margin-bottom:.3em;display:block}.pure-group input:not([type]),.pure-group input[type=color],.pure-group input[type=date],.pure-group input[type=datetime-local],.pure-group input[type=datetime],.pure-group input[type=email],.pure-group input[type=month],.pure-group input[type=number],.pure-group input[type=password],.pure-group input[type=search],.pure-group input[type=tel],.pure-group input[type=text],.pure-group input[type=time],.pure-group input[type=url],.pure-group input[type=week]{margin-bottom:0}.pure-form-aligned .pure-control-group label{margin-bottom:.3em;text-align:left;display:block;width:100%}.pure-form-aligned .pure-controls{margin:1.5em 0 0}.pure-form .pure-help-inline,.pure-form-message,.pure-form-message-inline{display:block;font-size:.75em;padding:.2em 0 .8em}}.pure-menu{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.pure-menu-fixed{position:fixed;left:0;top:0;z-index:3}.pure-menu-item,.pure-menu-list{position:relative}.pure-menu-list{list-style:none;margin:0;padding:0}.pure-menu-item{padding:0;margin:0;height:100%}.pure-menu-heading,.pure-menu-link{display:block;text-decoration:none;white-space:nowrap}.pure-menu-horizontal{width:100%;white-space:nowrap}.pure-menu-horizontal .pure-menu-list{display:inline-block}.pure-menu-horizontal .pure-menu-heading,.pure-menu-horizontal .pure-menu-item,.pure-menu-horizontal .pure-menu-separator{display:inline-block;zoom:1;vertical-align:middle}.pure-menu-item .pure-menu-item{display:block}.pure-menu-children{display:none;position:absolute;left:100%;top:0;margin:0;padding:0;z-index:3}.pure-menu-horizontal .pure-menu-children{left:0;top:auto;width:inherit}.pure-menu-active>.pure-menu-children,.pure-menu-allow-hover:hover>.pure-menu-children{display:block;position:absolute}.pure-menu-has-children>.pure-menu-link:after{padding-left:.5em;content:\"\\25B8\";font-size:small}.pure-menu-horizontal .pure-menu-has-children>.pure-menu-link:after{content:\"\\25BE\"}.pure-menu-scrollable{overflow-y:scroll;overflow-x:hidden}.pure-menu-scrollable .pure-menu-list{display:block}.pure-menu-horizontal.pure-menu-scrollable .pure-menu-list{display:inline-block}.pure-menu-horizontal.pure-menu-scrollable{white-space:nowrap;overflow-y:hidden;overflow-x:auto;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;padding:.5em 0}.pure-menu-horizontal.pure-menu-scrollable::-webkit-scrollbar{display:none}.pure-menu-separator{background-color:#ccc;height:1px;margin:.3em 0}.pure-menu-horizontal .pure-menu-separator{width:1px;height:1.3em;margin:0 .3em}.pure-menu-heading{text-transform:uppercase;color:#565d64}.pure-menu-link{color:#777}.pure-menu-children{background-color:#fff}.pure-menu-disabled,.pure-menu-heading,.pure-menu-link{padding:.5em 1em}.pure-menu-disabled{opacity:.5}.pure-menu-disabled .pure-menu-link:hover{background-color:transparent}.pure-menu-active>.pure-menu-link,.pure-menu-link:focus,.pure-menu-link:hover{background-color:#eee}.pure-menu-selected .pure-menu-link,.pure-menu-selected .pure-menu-link:visited{color:#000}.pure-table{border-collapse:collapse;border-spacing:0;empty-cells:show;border:1px solid #cbcbcb}.pure-table caption{color:#000;font:italic 85%/1 arial,sans-serif;padding:1em 0;text-align:center}.pure-table td,.pure-table th{border-left:1px solid #cbcbcb;border-width:0 0 0 1px;font-size:inherit;margin:0;overflow:visible;padding:.5em 1em}.pure-table td:first-child,.pure-table th:first-child{border-left-width:0}.pure-table thead{background-color:#e0e0e0;color:#000;text-align:left;vertical-align:bottom}.pure-table td{background-color:transparent}.pure-table-odd td,.pure-table-striped tr:nth-child(2n-1) td{background-color:#f2f2f2}.pure-table-bordered td{border-bottom:1px solid #cbcbcb}.pure-table-bordered tbody>tr:last-child>td{border-bottom-width:0}.pure-table-horizontal td,.pure-table-horizontal th{border-width:0 0 1px;border-bottom:1px solid #cbcbcb}.pure-table-horizontal tbody>tr:last-child>td{border-bottom-width:0}body{margin:0;padding:0}*{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}body{line-height:1.7em;color:#7f8c8d;font-size:13px}h1,h2,h3,h4,h5,h6,label{color:#34495e}.pure-img-responsive{max-width:100%;height:auto}.l-box{padding:1em}.l-box-lrg{padding:2em;border-bottom:1px solid rgba(0,0,0,.1)}.is-center{text-align:center}.pure-form label{margin:1em 0 0;font-weight:700;font-size:100%}.pure-form input[type]{border:2px solid #ddd;box-shadow:none;font-size:100%;width:100%;margin-bottom:1em}.pure-button{background-color:#1f8dd6;color:#fff;padding:.5em 2em;border-radius:5px}a.pure-button-primary{background:#fff;color:#1f8dd6;border-radius:5px;font-size:120%}.splash-container{background:#1f8dd6;z-index:1;overflow:hidden;width:100%;height:88%;top:0;left:0;position:fixed!important}.splash{width:80%;height:50%;margin:auto;position:absolute;top:100px;left:0;bottom:0;right:0;text-align:center;text-transform:uppercase}.splash-head{font-size:20px;color:#fff;border:3px solid #fff;padding:1em 1.6em;font-weight:100;border-radius:5px;line-height:1em}.splash-subhead{color:#fff;letter-spacing:.05em;opacity:.8}.content-wrapper{position:absolute;top:87%;width:100%;min-height:12%;z-index:2;background:#fff}.content-head{font-weight:400;text-transform:uppercase;letter-spacing:.1em;margin:2em 0 1em}.content-head-ribbon{color:#fff}.content-subhead{color:#1f8dd6}.content-subhead i{margin-right:7px}.ribbon{background:#2d3e50;color:#aaa}.footer{background:#111}@media (min-width:48em){body{font-size:16px}.content{padding:1em}.content.slide-container{padding:0}.splash-head{font-size:250%}.l-box-lrg{border:none}}@media (min-width:78em){.splash-head{font-size:300%}}"; (require("browserify-css").createStyle(css, { "href": "client/app.css"})); module.exports = css;
},{"browserify-css":26}],2:[function(require,module,exports){
module.exports = "<!-- <div id=\"app\">\n  <p>\n </p>\n  <router-view></router-view>\n  <h1>Hello</h1>\n  <h1>{{msg}}</h1>\n\n  <comp-b></comp-b>\n  <counter></counter>\n</div> -->\n<style lang=\"stylus\" src=\"./app.styl\"></style>\n<div>\n  <header-nav></header-nav>\n  <!-- use router-view element as route outlet -->\n  <router-view></router-view>\n</div>\n";

},{}],3:[function(require,module,exports){
'use strict';

// export default {
//   data () {
//     return { count: 0 }
//   },
//
//   ready () {
//     this.handle = setInterval(() => {
//       this.count++
//     }, 1000)
//   },
//
//   destroyed () {
//     clearInterval(this.handle)
//   }
// }

module.exports = {
  template: require('./template.html')
};

console.log('hello from ');

},{"./template.html":4}],4:[function(require,module,exports){
module.exports = "<div>\n  <p>I am a Counter Component. Edit me in dev mode.</p>\n  <p class=\"count\">Current count: {{count}}</p>\n</div>\n";

},{}],5:[function(require,module,exports){
'use strict';

module.exports = {
  data: function data() {
    return;
    msg: 'Hello from Component AAA!';
  },
  template: require('./template.html')
};

},{"./template.html":6}],6:[function(require,module,exports){
module.exports = "<div class=\"footer l-box is-center\">\n    This is the footer\n</div>\n";

},{}],7:[function(require,module,exports){
'use strict';

module.exports = {
  data: function data() {
    return;
    msg: 'Hello from Component Home!';
  },
  template: require('./template.html')
};

},{"./template.html":8}],8:[function(require,module,exports){
module.exports = "<div class=\"home-menu pure-menu pure-menu-horizontal pure-menu-fixed\">\n        <a class=\"pure-menu-heading\" v-link=\"{ path: '/' }\">Vue Site</a>\n\n        <ul class=\"pure-menu-list\">\n            <li class=\"pure-menu-item pure-menu-selected\"><a v-link=\"{ path: '/' }\" class=\"pure-menu-link\">Home</a></li>\n            <li class=\"pure-menu-item\"><a v-link=\"{ path: '/collection' }\" class=\"pure-menu-link\">Collection</a></li>\n            <li class=\"pure-menu-item\"><a v-link=\"{ path: '/about' }\" class=\"pure-menu-link\">About</a></li>\n            <!-- <li class=\"pure-menu-item\"><a href=\"#\" class=\"pure-menu-link\">Sign Up</a></li> -->\n        </ul>\n    </div>\n";

},{}],9:[function(require,module,exports){
'use strict';

module.exports = {
  template: '<div>This is About</div>'
};

},{}],10:[function(require,module,exports){
'use strict';

module.exports = {
  template: require('./template.html'),
  components: {}
};

},{"./template.html":11}],11:[function(require,module,exports){
module.exports = "<div class=\"content slide-container\">\n    <div class=\"\">\n        <!-- <h1 class=\"splash-head\">Big Bold Text</h1>\n        <p class=\"splash-subhead\">\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n        </p>\n        <p>\n            <a href=\"http://purecss.io\" class=\"pure-button pure-button-primary\">Get Started</a>\n        </p> -->\n\n        <ul class=\"slides\">\n          <input type=\"radio\" name=\"radio-btn\" id=\"img-1\" checked />\n          <li class=\"slide-container\">\n      \t\t<div class=\"slide\">\n      \t\t\t<img src=\"http://res.cloudinary.com/jefe-io/image/upload/v1443615109/5193672965_723916da0a_b_jszhs3.jpg\" />\n              </div>\n      \t\t<div class=\"nav\">\n      \t\t\t<label for=\"img-6\" class=\"prev\">&#x2039;</label>\n      \t\t\t<label for=\"img-2\" class=\"next\">&#x203a;</label>\n      \t\t</div>\n          </li>\n\n          <input type=\"radio\" name=\"radio-btn\" id=\"img-2\" />\n          <li class=\"slide-container\">\n              <div class=\"slide\">\n                <img src=\"http://res.cloudinary.com/jefe-io/image/upload/v1443615109/5193672965_723916da0a_b_jszhs3.jpg\" />\n              </div>\n      \t\t<div class=\"nav\">\n      \t\t\t<label for=\"img-1\" class=\"prev\">&#x2039;</label>\n      \t\t\t<label for=\"img-3\" class=\"next\">&#x203a;</label>\n      \t\t</div>\n          </li>\n\n          <input type=\"radio\" name=\"radio-btn\" id=\"img-3\" />\n          <li class=\"slide-container\">\n              <div class=\"slide\">\n                <img src=\"http://farm9.staticflickr.com/8068/8250438572_d1a5917072_z.jpg\" />\n              </div>\n      \t\t<div class=\"nav\">\n      \t\t\t<label for=\"img-2\" class=\"prev\">&#x2039;</label>\n      \t\t\t<label for=\"img-4\" class=\"next\">&#x203a;</label>\n      \t\t</div>\n          </li>\n\n          <input type=\"radio\" name=\"radio-btn\" id=\"img-4\" />\n          <li class=\"slide-container\">\n              <div class=\"slide\">\n                <img src=\"http://farm9.staticflickr.com/8061/8237246833_54d8fa37f0_z.jpg\" />\n              </div>\n      \t\t<div class=\"nav\">\n      \t\t\t<label for=\"img-3\" class=\"prev\">&#x2039;</label>\n      \t\t\t<label for=\"img-5\" class=\"next\">&#x203a;</label>\n      \t\t</div>\n          </li>\n\n          <input type=\"radio\" name=\"radio-btn\" id=\"img-5\" />\n          <li class=\"slide-container\">\n              <div class=\"slide\">\n                <img src=\"http://farm9.staticflickr.com/8055/8098750623_66292a35c0_z.jpg\" />\n              </div>\n      \t\t<div class=\"nav\">\n      \t\t\t<label for=\"img-4\" class=\"prev\">&#x2039;</label>\n      \t\t\t<label for=\"img-6\" class=\"next\">&#x203a;</label>\n      \t\t</div>\n          </li>\n\n          <input type=\"radio\" name=\"radio-btn\" id=\"img-6\" />\n          <li class=\"slide-container\">\n              <div class=\"slide\">\n                <img src=\"http://farm9.staticflickr.com/8195/8098750703_797e102da2_z.jpg\" />\n              </div>\n      \t\t<div class=\"nav\">\n      \t\t\t<label for=\"img-5\" class=\"prev\">&#x2039;</label>\n      \t\t\t<label for=\"img-1\" class=\"next\">&#x203a;</label>\n      \t\t</div>\n          </li>\n\n          <li class=\"nav-dots\">\n            <label for=\"img-1\" class=\"nav-dot\" id=\"img-dot-1\"></label>\n            <label for=\"img-2\" class=\"nav-dot\" id=\"img-dot-2\"></label>\n            <label for=\"img-3\" class=\"nav-dot\" id=\"img-dot-3\"></label>\n            <label for=\"img-4\" class=\"nav-dot\" id=\"img-dot-4\"></label>\n            <label for=\"img-5\" class=\"nav-dot\" id=\"img-dot-5\"></label>\n            <label for=\"img-6\" class=\"nav-dot\" id=\"img-dot-6\"></label>\n          </li>\n      </ul>\n\n    </div>\n</div>\n";

},{}],12:[function(require,module,exports){
arguments[4][10][0].apply(exports,arguments)
},{"./template.html":13,"dup":10}],13:[function(require,module,exports){
module.exports = "<div class=\"content\">\n    <h2 class=\"content-head is-center\">Excepteur sint occaecat cupidatat.</h2>\n\n    <div class=\"pure-g\">\n        <div class=\"l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4\">\n\n            <h3 class=\"content-subhead\">\n                <i class=\"fa fa-rocket\"></i>\n                Get Started Quickly\n            </h3>\n            <p>\n                Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.\n            </p>\n        </div>\n        <div class=\"l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4\">\n            <h3 class=\"content-subhead\">\n                <i class=\"fa fa-mobile\"></i>\n                Responsive Layouts\n            </h3>\n            <p>\n                Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.\n            </p>\n        </div>\n        <div class=\"l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4\">\n            <h3 class=\"content-subhead\">\n                <i class=\"fa fa-th-large\"></i>\n                Modular\n            </h3>\n            <p>\n                Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.\n            </p>\n        </div>\n        <div class=\"l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4\">\n            <h3 class=\"content-subhead\">\n                <i class=\"fa fa-check-square-o\"></i>\n                Plays Nice\n            </h3>\n            <p>\n                Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.\n            </p>\n        </div>\n    </div>\n</div>\n";

},{}],14:[function(require,module,exports){
arguments[4][10][0].apply(exports,arguments)
},{"./template.html":15,"dup":10}],15:[function(require,module,exports){
module.exports = "<div class=\"ribbon l-box-lrg pure-g\">\n    <div class=\"l-box-lrg is-center pure-u-1 pure-u-md-1-2 pure-u-lg-2-5\">\n\n    </div>\n    <div class=\"pure-u-1 pure-u-md-1-2 pure-u-lg-3-5\">\n\n        <h2 class=\"content-head content-head-ribbon\">Laboris nisi ut aliquip.</h2>\n\n        <p>\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n            consequat. Duis aute irure dolor.\n        </p>\n    </div>\n</div>\n";

},{}],16:[function(require,module,exports){
arguments[4][10][0].apply(exports,arguments)
},{"./template.html":17,"dup":10}],17:[function(require,module,exports){
module.exports = "<div class=\"content\">\n    <h2 class=\"content-head is-center\">Dolore magna aliqua. Uis aute irure.</h2>\n\n    <div class=\"pure-g\">\n        <div class=\"l-box-lrg pure-u-1 pure-u-md-2-5\">\n            <form class=\"pure-form pure-form-stacked\">\n                <fieldset>\n\n                    <label for=\"name\">Your Name</label>\n                    <input id=\"name\" type=\"text\" placeholder=\"Your Name\">\n\n\n                    <label for=\"email\">Your Email</label>\n                    <input id=\"email\" type=\"email\" placeholder=\"Your Email\">\n\n                    <label for=\"password\">Your Password</label>\n                    <input id=\"password\" type=\"password\" placeholder=\"Your Password\">\n\n                    <button type=\"submit\" class=\"pure-button\">Sign Up</button>\n                </fieldset>\n            </form>\n        </div>\n\n        <div class=\"l-box-lrg pure-u-1 pure-u-md-3-5\">\n            <h4>Contact Us</h4>\n            <p>\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n                consequat.\n            </p>\n\n            <h4>More Information</h4>\n            <p>\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n                tempor incididunt ut labore et dolore magna aliqua.\n            </p>\n        </div>\n    </div>\n\n</div>\n";

},{}],18:[function(require,module,exports){
'use strict';

var _index = require('../../counter/index.js');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('./elements/1_splash/index.js');

var _index4 = _interopRequireDefault(_index3);

var _index5 = require('./elements/2_subhead_1/index.js');

var _index6 = _interopRequireDefault(_index5);

var _index7 = require('./elements/3_subhead_2/index.js');

var _index8 = _interopRequireDefault(_index7);

var _index9 = require('./elements/4_box_1/index.js');

var _index10 = _interopRequireDefault(_index9);

var _index11 = require('../../layouts/footer-nav/index.js');

var _index12 = _interopRequireDefault(_index11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  template: require('./template.html'),
  components: {
    Splash: _index4.default,
    Subhead1: _index6.default,
    Subhead2: _index8.default,
    Box1: _index10.default,
    FooterNav: _index12.default
    // Counter
  }
};

},{"../../counter/index.js":3,"../../layouts/footer-nav/index.js":5,"./elements/1_splash/index.js":10,"./elements/2_subhead_1/index.js":12,"./elements/3_subhead_2/index.js":14,"./elements/4_box_1/index.js":16,"./template.html":19}],19:[function(require,module,exports){
module.exports = "\n<splash></splash>\n\n<div class=\"content-wrapper\">\n  <subhead1></subhead1>\n  <subhead2></subhead2>\n  <box1></box1>\n  <footer-nav></footer-nav>\n</div>\n<!-- <counter></counter> -->\n";

},{}],20:[function(require,module,exports){
'use strict';

var _index = require('./components/layouts/header-nav/index.js');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('./components/pages/home/index.js');

var _index4 = _interopRequireDefault(_index3);

var _index5 = require('./components/pages/about/index.js');

var _index6 = _interopRequireDefault(_index5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Vue = require('vue');
var css = require('./app.css');

// // var App = require('./app.js')
var VueRouter = require('vue-router');

// Registering middleware
Vue.use(VueRouter);

// bootstrapping the instance
var App = Vue.extend({
  components: {
    HeaderNav: _index2.default
  },
  template: require('./app.html')
});
// End of setting up vue

// Routing below...
var options = {
  hashbang: false
};

var router = new VueRouter({
  hashbang: true
});

router.map({
  '/': {
    component: _index4.default
  },
  '/about': {
    component: _index6.default
  }
});

router.start(App, '#app');
// End of routing

},{"./app.css":1,"./app.html":2,"./components/layouts/header-nav/index.js":7,"./components/pages/about/index.js":9,"./components/pages/home/index.js":18,"vue":119,"vue-router":48}],21:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/create"), __esModule: true };
},{"core-js/library/fn/object/create":27}],22:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/freeze"), __esModule: true };
},{"core-js/library/fn/object/freeze":28}],23:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/keys"), __esModule: true };
},{"core-js/library/fn/object/keys":29}],24:[function(require,module,exports){
"use strict";

exports["default"] = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

exports.__esModule = true;
},{}],25:[function(require,module,exports){
"use strict";

exports["default"] = function (obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
};

exports.__esModule = true;
},{}],26:[function(require,module,exports){
'use strict';
// For more information about browser field, check out the browser field at https://github.com/substack/browserify-handbook#browser-field.

module.exports = {
    // Create a <link> tag with optional data attributes
    createLink: function(href, attributes) {
        var head = document.head || document.getElementsByTagName('head')[0];
        var link = document.createElement('link');

        link.href = href;
        link.rel = 'stylesheet';

        for (var key in attributes) {
            if ( ! attributes.hasOwnProperty(key)) {
                continue;
            }
            var value = attributes[key];
            link.setAttribute('data-' + key, value);
        }

        head.appendChild(link);
    },
    // Create a <style> tag with optional data attributes
    createStyle: function(cssText, attributes) {
        var head = document.head || document.getElementsByTagName('head')[0],
            style = document.createElement('style');

        style.type = 'text/css';

        for (var key in attributes) {
            if ( ! attributes.hasOwnProperty(key)) {
                continue;
            }
            var value = attributes[key];
            style.setAttribute('data-' + key, value);
        }
        
        if (style.sheet) { // for jsdom and IE9+
            style.innerHTML = cssText;
            style.sheet.cssText = cssText;
            head.appendChild(style);
        } else if (style.styleSheet) { // for IE8 and below
            head.appendChild(style);
            style.styleSheet.cssText = cssText;
        } else { // for Chrome, Firefox, and Safari
            style.appendChild(document.createTextNode(cssText));
            head.appendChild(style);
        }
    }
};

},{}],27:[function(require,module,exports){
var $ = require('../../modules/$');
module.exports = function create(P, D){
  return $.create(P, D);
};
},{"../../modules/$":36}],28:[function(require,module,exports){
require('../../modules/es6.object.freeze');
module.exports = require('../../modules/$.core').Object.freeze;
},{"../../modules/$.core":30,"../../modules/es6.object.freeze":39}],29:[function(require,module,exports){
require('../../modules/es6.object.keys');
module.exports = require('../../modules/$.core').Object.keys;
},{"../../modules/$.core":30,"../../modules/es6.object.keys":40}],30:[function(require,module,exports){
var core = module.exports = {version: '1.2.5'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef
},{}],31:[function(require,module,exports){
var global    = require('./$.global')
  , core      = require('./$.core')
  , PROTOTYPE = 'prototype';
var ctx = function(fn, that){
  return function(){
    return fn.apply(that, arguments);
  };
};
var $def = function(type, name, source){
  var key, own, out, exp
    , isGlobal = type & $def.G
    , isProto  = type & $def.P
    , target   = isGlobal ? global : type & $def.S
        ? global[name] : (global[name] || {})[PROTOTYPE]
    , exports  = isGlobal ? core : core[name] || (core[name] = {});
  if(isGlobal)source = name;
  for(key in source){
    // contains in native
    own = !(type & $def.F) && target && key in target;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    if(isGlobal && typeof target[key] != 'function')exp = source[key];
    // bind timers to global for call from export context
    else if(type & $def.B && own)exp = ctx(out, global);
    // wrap global constructors for prevent change them in library
    else if(type & $def.W && target[key] == out)!function(C){
      exp = function(param){
        return this instanceof C ? new C(param) : C(param);
      };
      exp[PROTOTYPE] = C[PROTOTYPE];
    }(out);
    else exp = isProto && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export
    exports[key] = exp;
    if(isProto)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
  }
};
// type bitmap
$def.F = 1;  // forced
$def.G = 2;  // global
$def.S = 4;  // static
$def.P = 8;  // proto
$def.B = 16; // bind
$def.W = 32; // wrap
module.exports = $def;
},{"./$.core":30,"./$.global":34}],32:[function(require,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};
},{}],33:[function(require,module,exports){
module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};
},{}],34:[function(require,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef
},{}],35:[function(require,module,exports){
module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};
},{}],36:[function(require,module,exports){
var $Object = Object;
module.exports = {
  create:     $Object.create,
  getProto:   $Object.getPrototypeOf,
  isEnum:     {}.propertyIsEnumerable,
  getDesc:    $Object.getOwnPropertyDescriptor,
  setDesc:    $Object.defineProperty,
  setDescs:   $Object.defineProperties,
  getKeys:    $Object.keys,
  getNames:   $Object.getOwnPropertyNames,
  getSymbols: $Object.getOwnPropertySymbols,
  each:       [].forEach
};
},{}],37:[function(require,module,exports){
// most Object methods by ES6 should accept primitives
var $def  = require('./$.def')
  , core  = require('./$.core')
  , fails = require('./$.fails');
module.exports = function(KEY, exec){
  var $def = require('./$.def')
    , fn   = (core.Object || {})[KEY] || Object[KEY]
    , exp  = {};
  exp[KEY] = exec(fn);
  $def($def.S + $def.F * fails(function(){ fn(1); }), 'Object', exp);
};
},{"./$.core":30,"./$.def":31,"./$.fails":33}],38:[function(require,module,exports){
// 7.1.13 ToObject(argument)
var defined = require('./$.defined');
module.exports = function(it){
  return Object(defined(it));
};
},{"./$.defined":32}],39:[function(require,module,exports){
// 19.1.2.5 Object.freeze(O)
var isObject = require('./$.is-object');

require('./$.object-sap')('freeze', function($freeze){
  return function freeze(it){
    return $freeze && isObject(it) ? $freeze(it) : it;
  };
});
},{"./$.is-object":35,"./$.object-sap":37}],40:[function(require,module,exports){
// 19.1.2.14 Object.keys(O)
var toObject = require('./$.to-object');

require('./$.object-sap')('keys', function($keys){
  return function keys(it){
    return $keys(toObject(it));
  };
});
},{"./$.object-sap":37,"./$.to-object":38}],41:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = setTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    clearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        setTimeout(drainQueue, 0);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],42:[function(require,module,exports){
(function() {
    "use strict";
    function $$route$recognizer$dsl$$Target(path, matcher, delegate) {
      this.path = path;
      this.matcher = matcher;
      this.delegate = delegate;
    }

    $$route$recognizer$dsl$$Target.prototype = {
      to: function(target, callback) {
        var delegate = this.delegate;

        if (delegate && delegate.willAddRoute) {
          target = delegate.willAddRoute(this.matcher.target, target);
        }

        this.matcher.add(this.path, target);

        if (callback) {
          if (callback.length === 0) { throw new Error("You must have an argument in the function passed to `to`"); }
          this.matcher.addChild(this.path, target, callback, this.delegate);
        }
        return this;
      }
    };

    function $$route$recognizer$dsl$$Matcher(target) {
      this.routes = {};
      this.children = {};
      this.target = target;
    }

    $$route$recognizer$dsl$$Matcher.prototype = {
      add: function(path, handler) {
        this.routes[path] = handler;
      },

      addChild: function(path, target, callback, delegate) {
        var matcher = new $$route$recognizer$dsl$$Matcher(target);
        this.children[path] = matcher;

        var match = $$route$recognizer$dsl$$generateMatch(path, matcher, delegate);

        if (delegate && delegate.contextEntered) {
          delegate.contextEntered(target, match);
        }

        callback(match);
      }
    };

    function $$route$recognizer$dsl$$generateMatch(startingPath, matcher, delegate) {
      return function(path, nestedCallback) {
        var fullPath = startingPath + path;

        if (nestedCallback) {
          nestedCallback($$route$recognizer$dsl$$generateMatch(fullPath, matcher, delegate));
        } else {
          return new $$route$recognizer$dsl$$Target(startingPath + path, matcher, delegate);
        }
      };
    }

    function $$route$recognizer$dsl$$addRoute(routeArray, path, handler) {
      var len = 0;
      for (var i=0, l=routeArray.length; i<l; i++) {
        len += routeArray[i].path.length;
      }

      path = path.substr(len);
      var route = { path: path, handler: handler };
      routeArray.push(route);
    }

    function $$route$recognizer$dsl$$eachRoute(baseRoute, matcher, callback, binding) {
      var routes = matcher.routes;

      for (var path in routes) {
        if (routes.hasOwnProperty(path)) {
          var routeArray = baseRoute.slice();
          $$route$recognizer$dsl$$addRoute(routeArray, path, routes[path]);

          if (matcher.children[path]) {
            $$route$recognizer$dsl$$eachRoute(routeArray, matcher.children[path], callback, binding);
          } else {
            callback.call(binding, routeArray);
          }
        }
      }
    }

    var $$route$recognizer$dsl$$default = function(callback, addRouteCallback) {
      var matcher = new $$route$recognizer$dsl$$Matcher();

      callback($$route$recognizer$dsl$$generateMatch("", matcher, this.delegate));

      $$route$recognizer$dsl$$eachRoute([], matcher, function(route) {
        if (addRouteCallback) { addRouteCallback(this, route); }
        else { this.add(route); }
      }, this);
    };

    var $$route$recognizer$$specials = [
      '/', '.', '*', '+', '?', '|',
      '(', ')', '[', ']', '{', '}', '\\'
    ];

    var $$route$recognizer$$escapeRegex = new RegExp('(\\' + $$route$recognizer$$specials.join('|\\') + ')', 'g');

    function $$route$recognizer$$isArray(test) {
      return Object.prototype.toString.call(test) === "[object Array]";
    }

    // A Segment represents a segment in the original route description.
    // Each Segment type provides an `eachChar` and `regex` method.
    //
    // The `eachChar` method invokes the callback with one or more character
    // specifications. A character specification consumes one or more input
    // characters.
    //
    // The `regex` method returns a regex fragment for the segment. If the
    // segment is a dynamic of star segment, the regex fragment also includes
    // a capture.
    //
    // A character specification contains:
    //
    // * `validChars`: a String with a list of all valid characters, or
    // * `invalidChars`: a String with a list of all invalid characters
    // * `repeat`: true if the character specification can repeat

    function $$route$recognizer$$StaticSegment(string) { this.string = string; }
    $$route$recognizer$$StaticSegment.prototype = {
      eachChar: function(callback) {
        var string = this.string, ch;

        for (var i=0, l=string.length; i<l; i++) {
          ch = string.charAt(i);
          callback({ validChars: ch });
        }
      },

      regex: function() {
        return this.string.replace($$route$recognizer$$escapeRegex, '\\$1');
      },

      generate: function() {
        return this.string;
      }
    };

    function $$route$recognizer$$DynamicSegment(name) { this.name = name; }
    $$route$recognizer$$DynamicSegment.prototype = {
      eachChar: function(callback) {
        callback({ invalidChars: "/", repeat: true });
      },

      regex: function() {
        return "([^/]+)";
      },

      generate: function(params) {
        return params[this.name];
      }
    };

    function $$route$recognizer$$StarSegment(name) { this.name = name; }
    $$route$recognizer$$StarSegment.prototype = {
      eachChar: function(callback) {
        callback({ invalidChars: "", repeat: true });
      },

      regex: function() {
        return "(.+)";
      },

      generate: function(params) {
        return params[this.name];
      }
    };

    function $$route$recognizer$$EpsilonSegment() {}
    $$route$recognizer$$EpsilonSegment.prototype = {
      eachChar: function() {},
      regex: function() { return ""; },
      generate: function() { return ""; }
    };

    function $$route$recognizer$$parse(route, names, specificity) {
      // normalize route as not starting with a "/". Recognition will
      // also normalize.
      if (route.charAt(0) === "/") { route = route.substr(1); }

      var segments = route.split("/"), results = [];

      // A routes has specificity determined by the order that its different segments
      // appear in. This system mirrors how the magnitude of numbers written as strings
      // works.
      // Consider a number written as: "abc". An example would be "200". Any other number written
      // "xyz" will be smaller than "abc" so long as `a > z`. For instance, "199" is smaller
      // then "200", even though "y" and "z" (which are both 9) are larger than "0" (the value
      // of (`b` and `c`). This is because the leading symbol, "2", is larger than the other
      // leading symbol, "1".
      // The rule is that symbols to the left carry more weight than symbols to the right
      // when a number is written out as a string. In the above strings, the leading digit
      // represents how many 100's are in the number, and it carries more weight than the middle
      // number which represents how many 10's are in the number.
      // This system of number magnitude works well for route specificity, too. A route written as
      // `a/b/c` will be more specific than `x/y/z` as long as `a` is more specific than
      // `x`, irrespective of the other parts.
      // Because of this similarity, we assign each type of segment a number value written as a
      // string. We can find the specificity of compound routes by concatenating these strings
      // together, from left to right. After we have looped through all of the segments,
      // we convert the string to a number.
      specificity.val = '';

      for (var i=0, l=segments.length; i<l; i++) {
        var segment = segments[i], match;

        if (match = segment.match(/^:([^\/]+)$/)) {
          results.push(new $$route$recognizer$$DynamicSegment(match[1]));
          names.push(match[1]);
          specificity.val += '3';
        } else if (match = segment.match(/^\*([^\/]+)$/)) {
          results.push(new $$route$recognizer$$StarSegment(match[1]));
          specificity.val += '2';
          names.push(match[1]);
        } else if(segment === "") {
          results.push(new $$route$recognizer$$EpsilonSegment());
          specificity.val += '1';
        } else {
          results.push(new $$route$recognizer$$StaticSegment(segment));
          specificity.val += '4';
        }
      }

      specificity.val = +specificity.val;

      return results;
    }

    // A State has a character specification and (`charSpec`) and a list of possible
    // subsequent states (`nextStates`).
    //
    // If a State is an accepting state, it will also have several additional
    // properties:
    //
    // * `regex`: A regular expression that is used to extract parameters from paths
    //   that reached this accepting state.
    // * `handlers`: Information on how to convert the list of captures into calls
    //   to registered handlers with the specified parameters
    // * `types`: How many static, dynamic or star segments in this route. Used to
    //   decide which route to use if multiple registered routes match a path.
    //
    // Currently, State is implemented naively by looping over `nextStates` and
    // comparing a character specification against a character. A more efficient
    // implementation would use a hash of keys pointing at one or more next states.

    function $$route$recognizer$$State(charSpec) {
      this.charSpec = charSpec;
      this.nextStates = [];
    }

    $$route$recognizer$$State.prototype = {
      get: function(charSpec) {
        var nextStates = this.nextStates;

        for (var i=0, l=nextStates.length; i<l; i++) {
          var child = nextStates[i];

          var isEqual = child.charSpec.validChars === charSpec.validChars;
          isEqual = isEqual && child.charSpec.invalidChars === charSpec.invalidChars;

          if (isEqual) { return child; }
        }
      },

      put: function(charSpec) {
        var state;

        // If the character specification already exists in a child of the current
        // state, just return that state.
        if (state = this.get(charSpec)) { return state; }

        // Make a new state for the character spec
        state = new $$route$recognizer$$State(charSpec);

        // Insert the new state as a child of the current state
        this.nextStates.push(state);

        // If this character specification repeats, insert the new state as a child
        // of itself. Note that this will not trigger an infinite loop because each
        // transition during recognition consumes a character.
        if (charSpec.repeat) {
          state.nextStates.push(state);
        }

        // Return the new state
        return state;
      },

      // Find a list of child states matching the next character
      match: function(ch) {
        // DEBUG "Processing `" + ch + "`:"
        var nextStates = this.nextStates,
            child, charSpec, chars;

        // DEBUG "  " + debugState(this)
        var returned = [];

        for (var i=0, l=nextStates.length; i<l; i++) {
          child = nextStates[i];

          charSpec = child.charSpec;

          if (typeof (chars = charSpec.validChars) !== 'undefined') {
            if (chars.indexOf(ch) !== -1) { returned.push(child); }
          } else if (typeof (chars = charSpec.invalidChars) !== 'undefined') {
            if (chars.indexOf(ch) === -1) { returned.push(child); }
          }
        }

        return returned;
      }

      /** IF DEBUG
      , debug: function() {
        var charSpec = this.charSpec,
            debug = "[",
            chars = charSpec.validChars || charSpec.invalidChars;

        if (charSpec.invalidChars) { debug += "^"; }
        debug += chars;
        debug += "]";

        if (charSpec.repeat) { debug += "+"; }

        return debug;
      }
      END IF **/
    };

    /** IF DEBUG
    function debug(log) {
      console.log(log);
    }

    function debugState(state) {
      return state.nextStates.map(function(n) {
        if (n.nextStates.length === 0) { return "( " + n.debug() + " [accepting] )"; }
        return "( " + n.debug() + " <then> " + n.nextStates.map(function(s) { return s.debug() }).join(" or ") + " )";
      }).join(", ")
    }
    END IF **/

    // Sort the routes by specificity
    function $$route$recognizer$$sortSolutions(states) {
      return states.sort(function(a, b) {
        return b.specificity.val - a.specificity.val;
      });
    }

    function $$route$recognizer$$recognizeChar(states, ch) {
      var nextStates = [];

      for (var i=0, l=states.length; i<l; i++) {
        var state = states[i];

        nextStates = nextStates.concat(state.match(ch));
      }

      return nextStates;
    }

    var $$route$recognizer$$oCreate = Object.create || function(proto) {
      function F() {}
      F.prototype = proto;
      return new F();
    };

    function $$route$recognizer$$RecognizeResults(queryParams) {
      this.queryParams = queryParams || {};
    }
    $$route$recognizer$$RecognizeResults.prototype = $$route$recognizer$$oCreate({
      splice: Array.prototype.splice,
      slice:  Array.prototype.slice,
      push:   Array.prototype.push,
      length: 0,
      queryParams: null
    });

    function $$route$recognizer$$findHandler(state, path, queryParams) {
      var handlers = state.handlers, regex = state.regex;
      var captures = path.match(regex), currentCapture = 1;
      var result = new $$route$recognizer$$RecognizeResults(queryParams);

      for (var i=0, l=handlers.length; i<l; i++) {
        var handler = handlers[i], names = handler.names, params = {};

        for (var j=0, m=names.length; j<m; j++) {
          params[names[j]] = captures[currentCapture++];
        }

        result.push({ handler: handler.handler, params: params, isDynamic: !!names.length });
      }

      return result;
    }

    function $$route$recognizer$$addSegment(currentState, segment) {
      segment.eachChar(function(ch) {
        var state;

        currentState = currentState.put(ch);
      });

      return currentState;
    }

    function $$route$recognizer$$decodeQueryParamPart(part) {
      // http://www.w3.org/TR/html401/interact/forms.html#h-17.13.4.1
      part = part.replace(/\+/gm, '%20');
      return decodeURIComponent(part);
    }

    // The main interface

    var $$route$recognizer$$RouteRecognizer = function() {
      this.rootState = new $$route$recognizer$$State();
      this.names = {};
    };


    $$route$recognizer$$RouteRecognizer.prototype = {
      add: function(routes, options) {
        var currentState = this.rootState, regex = "^",
            specificity = {},
            handlers = [], allSegments = [], name;

        var isEmpty = true;

        for (var i=0, l=routes.length; i<l; i++) {
          var route = routes[i], names = [];

          var segments = $$route$recognizer$$parse(route.path, names, specificity);

          allSegments = allSegments.concat(segments);

          for (var j=0, m=segments.length; j<m; j++) {
            var segment = segments[j];

            if (segment instanceof $$route$recognizer$$EpsilonSegment) { continue; }

            isEmpty = false;

            // Add a "/" for the new segment
            currentState = currentState.put({ validChars: "/" });
            regex += "/";

            // Add a representation of the segment to the NFA and regex
            currentState = $$route$recognizer$$addSegment(currentState, segment);
            regex += segment.regex();
          }

          var handler = { handler: route.handler, names: names };
          handlers.push(handler);
        }

        if (isEmpty) {
          currentState = currentState.put({ validChars: "/" });
          regex += "/";
        }

        currentState.handlers = handlers;
        currentState.regex = new RegExp(regex + "$");
        currentState.specificity = specificity;

        if (name = options && options.as) {
          this.names[name] = {
            segments: allSegments,
            handlers: handlers
          };
        }
      },

      handlersFor: function(name) {
        var route = this.names[name], result = [];
        if (!route) { throw new Error("There is no route named " + name); }

        for (var i=0, l=route.handlers.length; i<l; i++) {
          result.push(route.handlers[i]);
        }

        return result;
      },

      hasRoute: function(name) {
        return !!this.names[name];
      },

      generate: function(name, params) {
        var route = this.names[name], output = "";
        if (!route) { throw new Error("There is no route named " + name); }

        var segments = route.segments;

        for (var i=0, l=segments.length; i<l; i++) {
          var segment = segments[i];

          if (segment instanceof $$route$recognizer$$EpsilonSegment) { continue; }

          output += "/";
          output += segment.generate(params);
        }

        if (output.charAt(0) !== '/') { output = '/' + output; }

        if (params && params.queryParams) {
          output += this.generateQueryString(params.queryParams, route.handlers);
        }

        return output;
      },

      generateQueryString: function(params, handlers) {
        var pairs = [];
        var keys = [];
        for(var key in params) {
          if (params.hasOwnProperty(key)) {
            keys.push(key);
          }
        }
        keys.sort();
        for (var i = 0, len = keys.length; i < len; i++) {
          key = keys[i];
          var value = params[key];
          if (value == null) {
            continue;
          }
          var pair = encodeURIComponent(key);
          if ($$route$recognizer$$isArray(value)) {
            for (var j = 0, l = value.length; j < l; j++) {
              var arrayPair = key + '[]' + '=' + encodeURIComponent(value[j]);
              pairs.push(arrayPair);
            }
          } else {
            pair += "=" + encodeURIComponent(value);
            pairs.push(pair);
          }
        }

        if (pairs.length === 0) { return ''; }

        return "?" + pairs.join("&");
      },

      parseQueryString: function(queryString) {
        var pairs = queryString.split("&"), queryParams = {};
        for(var i=0; i < pairs.length; i++) {
          var pair      = pairs[i].split('='),
              key       = $$route$recognizer$$decodeQueryParamPart(pair[0]),
              keyLength = key.length,
              isArray = false,
              value;
          if (pair.length === 1) {
            value = 'true';
          } else {
            //Handle arrays
            if (keyLength > 2 && key.slice(keyLength -2) === '[]') {
              isArray = true;
              key = key.slice(0, keyLength - 2);
              if(!queryParams[key]) {
                queryParams[key] = [];
              }
            }
            value = pair[1] ? $$route$recognizer$$decodeQueryParamPart(pair[1]) : '';
          }
          if (isArray) {
            queryParams[key].push(value);
          } else {
            queryParams[key] = value;
          }
        }
        return queryParams;
      },

      recognize: function(path) {
        var states = [ this.rootState ],
            pathLen, i, l, queryStart, queryParams = {},
            isSlashDropped = false;

        queryStart = path.indexOf('?');
        if (queryStart !== -1) {
          var queryString = path.substr(queryStart + 1, path.length);
          path = path.substr(0, queryStart);
          queryParams = this.parseQueryString(queryString);
        }

        path = decodeURI(path);

        // DEBUG GROUP path

        if (path.charAt(0) !== "/") { path = "/" + path; }

        pathLen = path.length;
        if (pathLen > 1 && path.charAt(pathLen - 1) === "/") {
          path = path.substr(0, pathLen - 1);
          isSlashDropped = true;
        }

        for (i=0, l=path.length; i<l; i++) {
          states = $$route$recognizer$$recognizeChar(states, path.charAt(i));
          if (!states.length) { break; }
        }

        // END DEBUG GROUP

        var solutions = [];
        for (i=0, l=states.length; i<l; i++) {
          if (states[i].handlers) { solutions.push(states[i]); }
        }

        states = $$route$recognizer$$sortSolutions(solutions);

        var state = solutions[0];

        if (state && state.handlers) {
          // if a trailing slash was dropped and a star segment is the last segment
          // specified, put the trailing slash back
          if (isSlashDropped && state.regex.source.slice(-5) === "(.+)$") {
            path = path + "/";
          }
          return $$route$recognizer$$findHandler(state, path, queryParams);
        }
      }
    };

    $$route$recognizer$$RouteRecognizer.prototype.map = $$route$recognizer$dsl$$default;

    $$route$recognizer$$RouteRecognizer.VERSION = '0.1.9';

    var $$route$recognizer$$default = $$route$recognizer$$RouteRecognizer;

    /* global define:true module:true window: true */
    if (typeof define === 'function' && define['amd']) {
      define('route-recognizer', function() { return $$route$recognizer$$default; });
    } else if (typeof module !== 'undefined' && module['exports']) {
      module['exports'] = $$route$recognizer$$default;
    } else if (typeof this !== 'undefined') {
      this['RouteRecognizer'] = $$route$recognizer$$default;
    }
}).call(this);


},{}],43:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _util = require('../util');

var trailingSlashRE = /\/$/;
var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;

// install v-link, which provides navigation support for
// HTML5 history mode

exports['default'] = function (Vue) {

  var _ = Vue.util;

  Vue.directive('link', {

    bind: function bind() {
      var _this = this;

      var vm = this.vm;
      /* istanbul ignore if */
      if (!vm.$route) {
        _util.warn('v-link can only be used inside a ' + 'router-enabled app.');
        return;
      }
      var router = vm.$route.router;
      this.handler = function (e) {
        // don't redirect with control keys
        if (e.metaKey || e.ctrlKey || e.shiftKey) return;
        // don't redirect when preventDefault called
        if (e.defaultPrevented) return;
        // don't redirect on right click
        if (e.button !== 0) return;

        var target = _this.target;
        var go = function go(target) {
          e.preventDefault();
          if (target != null) {
            router.go(target);
          }
        };

        if (_this.el.tagName === 'A' || e.target === _this.el) {
          // v-link on <a v-link="'path'">
          go(target);
        } else {
          // v-link delegate on <div v-link>
          var el = e.target;
          while (el && el.tagName !== 'A' && el !== _this.el) {
            el = el.parentNode;
          }
          if (!el) return;
          if (el.tagName !== 'A' || !el.href) {
            // allow not anchor
            go(target);
          } else if (sameOrigin(el)) {
            go({
              path: el.pathname,
              replace: target && target.replace,
              append: target && target.append
            });
          }
        }
      };
      this.el.addEventListener('click', this.handler);
      // manage active link class
      this.unwatch = vm.$watch('$route.path', _.bind(this.updateClasses, this));
    },

    update: function update(path) {
      var router = this.vm.$route.router;
      var append = undefined;
      this.target = path;
      if (_.isObject(path)) {
        append = path.append;
        this.exact = path.exact;
        this.prevActiveClass = this.activeClass;
        this.activeClass = path.activeClass;
      }
      path = this.path = router._stringifyPath(path);
      this.activeRE = path && !this.exact ? new RegExp('^' + path.replace(/\/$/, '').replace(regexEscapeRE, '\\$&') + '(\\/|$)') : null;
      this.updateClasses(this.vm.$route.path);
      var isAbsolute = path.charAt(0) === '/';
      // do not format non-hash relative paths
      var href = path && (router.mode === 'hash' || isAbsolute) ? router.history.formatPath(path, append) : path;
      if (this.el.tagName === 'A') {
        if (href) {
          this.el.href = href;
        } else {
          this.el.removeAttribute('href');
        }
      }
    },

    updateClasses: function updateClasses(path) {
      var el = this.el;
      var dest = this.path;
      var router = this.vm.$route.router;
      var activeClass = this.activeClass || router._linkActiveClass;
      // clear old class
      if (this.prevActiveClass !== activeClass) {
        _.removeClass(el, this.prevActiveClass);
      }
      // add new class
      if (this.exact) {
        if (dest === path ||
        // also allow additional trailing slash
        dest.charAt(dest.length - 1) !== '/' && dest === path.replace(trailingSlashRE, '')) {
          _.addClass(el, activeClass);
        } else {
          _.removeClass(el, activeClass);
        }
      } else {
        if (this.activeRE && this.activeRE.test(path)) {
          _.addClass(el, activeClass);
        } else {
          _.removeClass(el, activeClass);
        }
      }
    },

    unbind: function unbind() {
      this.el.removeEventListener('click', this.handler);
      this.unwatch && this.unwatch();
    }
  });

  function sameOrigin(link) {
    return link.protocol === location.protocol && link.hostname === location.hostname && link.port === location.port;
  }
};

module.exports = exports['default'];
},{"../util":53}],44:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _util = require('../util');

var _pipeline = require('../pipeline');

exports['default'] = function (Vue) {

  var _ = Vue.util;
  var componentDef =
  // 0.12
  Vue.directive('_component') ||
  // 1.0
  Vue.internalDirectives.component;
  // <router-view> extends the internal component directive
  var viewDef = _.extend({}, componentDef);

  // with some overrides
  _.extend(viewDef, {

    _isRouterView: true,

    bind: function bind() {
      var route = this.vm.$route;
      /* istanbul ignore if */
      if (!route) {
        _util.warn('<router-view> can only be used inside a ' + 'router-enabled app.');
        return;
      }
      // force dynamic directive so v-component doesn't
      // attempt to build right now
      this._isDynamicLiteral = true;
      // finally, init by delegating to v-component
      componentDef.bind.call(this);

      // all we need to do here is registering this view
      // in the router. actual component switching will be
      // managed by the pipeline.
      var router = this.router = route.router;
      router._views.unshift(this);

      // note the views are in reverse order.
      var parentView = router._views[1];
      if (parentView) {
        // register self as a child of the parent view,
        // instead of activating now. This is so that the
        // child's activate hook is called after the
        // parent's has resolved.
        parentView.childView = this;
      }

      // handle late-rendered view
      // two possibilities:
      // 1. root view rendered after transition has been
      //    validated;
      // 2. child view rendered after parent view has been
      //    activated.
      var transition = route.router._currentTransition;
      if (!parentView && transition.done || parentView && parentView.activated) {
        var depth = parentView ? parentView.depth + 1 : 0;
        _pipeline.activate(this, transition, depth);
      }
    },

    unbind: function unbind() {
      this.router._views.$remove(this);
      componentDef.unbind.call(this);
    }
  });

  Vue.elementDirective('router-view', viewDef);
};

module.exports = exports['default'];
},{"../pipeline":50,"../util":53}],45:[function(require,module,exports){
'use strict';

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

exports.__esModule = true;

var _util = require('../util');

var AbstractHistory = (function () {
  function AbstractHistory(_ref) {
    var onChange = _ref.onChange;

    _classCallCheck(this, AbstractHistory);

    this.onChange = onChange;
    this.currentPath = '/';
  }

  AbstractHistory.prototype.start = function start() {
    this.onChange('/');
  };

  AbstractHistory.prototype.stop = function stop() {
    // noop
  };

  AbstractHistory.prototype.go = function go(path, replace, append) {
    path = this.currentPath = this.formatPath(path, append);
    this.onChange(path);
  };

  AbstractHistory.prototype.formatPath = function formatPath(path, append) {
    return path.charAt(0) === '/' ? path : _util.resolvePath(this.currentPath, path, append);
  };

  return AbstractHistory;
})();

exports['default'] = AbstractHistory;
module.exports = exports['default'];
},{"../util":53,"babel-runtime/helpers/class-call-check":24}],46:[function(require,module,exports){
'use strict';

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

exports.__esModule = true;

var _util = require('../util');

var HashHistory = (function () {
  function HashHistory(_ref) {
    var hashbang = _ref.hashbang;
    var onChange = _ref.onChange;

    _classCallCheck(this, HashHistory);

    this.hashbang = hashbang;
    this.onChange = onChange;
  }

  HashHistory.prototype.start = function start() {
    var self = this;
    this.listener = function () {
      var path = location.hash;
      var raw = path.replace(/^#!?/, '');
      // always
      if (raw.charAt(0) !== '/') {
        raw = '/' + raw;
      }
      var formattedPath = self.formatPath(raw);
      if (formattedPath !== path) {
        location.replace(formattedPath);
        return;
      }
      var pathToMatch = decodeURI(path.replace(/^#!?/, '') + location.search);
      self.onChange(pathToMatch);
    };
    window.addEventListener('hashchange', this.listener);
    this.listener();
  };

  HashHistory.prototype.stop = function stop() {
    window.removeEventListener('hashchange', this.listener);
  };

  HashHistory.prototype.go = function go(path, replace, append) {
    path = this.formatPath(path, append);
    if (replace) {
      location.replace(path);
    } else {
      location.hash = path;
    }
  };

  HashHistory.prototype.formatPath = function formatPath(path, append) {
    var isAbsoloute = path.charAt(0) === '/';
    var prefix = '#' + (this.hashbang ? '!' : '');
    return isAbsoloute ? prefix + path : prefix + _util.resolvePath(location.hash.replace(/^#!?/, ''), path, append);
  };

  return HashHistory;
})();

exports['default'] = HashHistory;
module.exports = exports['default'];
},{"../util":53,"babel-runtime/helpers/class-call-check":24}],47:[function(require,module,exports){
'use strict';

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

exports.__esModule = true;

var _util = require('../util');

var hashRE = /#.*$/;

var HTML5History = (function () {
  function HTML5History(_ref) {
    var root = _ref.root;
    var onChange = _ref.onChange;

    _classCallCheck(this, HTML5History);

    if (root) {
      // make sure there's the starting slash
      if (root.charAt(0) !== '/') {
        root = '/' + root;
      }
      // remove trailing slash
      this.root = root.replace(/\/$/, '');
      this.rootRE = new RegExp('^\\' + this.root);
    } else {
      this.root = null;
    }
    this.onChange = onChange;
    // check base tag
    var baseEl = document.querySelector('base');
    this.base = baseEl && baseEl.getAttribute('href');
  }

  HTML5History.prototype.start = function start() {
    var _this = this;

    this.listener = function (e) {
      var url = decodeURI(location.pathname + location.search);
      if (_this.root) {
        url = url.replace(_this.rootRE, '');
      }
      _this.onChange(url, e && e.state, location.hash);
    };
    window.addEventListener('popstate', this.listener);
    this.listener();
  };

  HTML5History.prototype.stop = function stop() {
    window.removeEventListener('popstate', this.listener);
  };

  HTML5History.prototype.go = function go(path, replace, append) {
    var url = this.formatPath(path, append);
    if (replace) {
      history.replaceState({}, '', url);
    } else {
      // record scroll position by replacing current state
      history.replaceState({
        pos: {
          x: window.pageXOffset,
          y: window.pageYOffset
        }
      }, '');
      // then push new state
      history.pushState({}, '', url);
    }
    var hashMatch = path.match(hashRE);
    var hash = hashMatch && hashMatch[0];
    path = url
    // strip hash so it doesn't mess up params
    .replace(hashRE, '')
    // remove root before matching
    .replace(this.rootRE, '');
    this.onChange(path, null, hash);
  };

  HTML5History.prototype.formatPath = function formatPath(path, append) {
    return path.charAt(0) === '/'
    // absolute path
    ? this.root ? this.root + '/' + path.replace(/^\//, '') : path : _util.resolvePath(this.base || location.pathname, path, append);
  };

  return HTML5History;
})();

exports['default'] = HTML5History;
module.exports = exports['default'];
},{"../util":53,"babel-runtime/helpers/class-call-check":24}],48:[function(require,module,exports){
'use strict';

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _util = require('./util');

var _util2 = _interopRequireDefault(_util);

var _override = require('./override');

var _override2 = _interopRequireDefault(_override);

var _routeRecognizer = require('route-recognizer');

var _routeRecognizer2 = _interopRequireDefault(_routeRecognizer);

var _route = require('./route');

var _route2 = _interopRequireDefault(_route);

var _transition = require('./transition');

var _transition2 = _interopRequireDefault(_transition);

var _directivesView = require('./directives/view');

var _directivesView2 = _interopRequireDefault(_directivesView);

var _directivesLink = require('./directives/link');

var _directivesLink2 = _interopRequireDefault(_directivesLink);

var _historyAbstract = require('./history/abstract');

var _historyAbstract2 = _interopRequireDefault(_historyAbstract);

var _historyHash = require('./history/hash');

var _historyHash2 = _interopRequireDefault(_historyHash);

var _historyHtml5 = require('./history/html5');

var _historyHtml52 = _interopRequireDefault(_historyHtml5);

var historyBackends = {
  abstract: _historyAbstract2['default'],
  hash: _historyHash2['default'],
  html5: _historyHtml52['default']
};

// late bind during install
var Vue = undefined;

/**
 * Router constructor
 *
 * @param {Object} [options]
 */

var Router = (function () {
  function Router() {
    var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    var _ref$hashbang = _ref.hashbang;
    var hashbang = _ref$hashbang === undefined ? true : _ref$hashbang;
    var _ref$abstract = _ref.abstract;
    var abstract = _ref$abstract === undefined ? false : _ref$abstract;
    var _ref$history = _ref.history;
    var history = _ref$history === undefined ? false : _ref$history;
    var _ref$saveScrollPosition = _ref.saveScrollPosition;
    var saveScrollPosition = _ref$saveScrollPosition === undefined ? false : _ref$saveScrollPosition;
    var _ref$transitionOnLoad = _ref.transitionOnLoad;
    var transitionOnLoad = _ref$transitionOnLoad === undefined ? false : _ref$transitionOnLoad;
    var _ref$suppressTransitionError = _ref.suppressTransitionError;
    var suppressTransitionError = _ref$suppressTransitionError === undefined ? false : _ref$suppressTransitionError;
    var _ref$root = _ref.root;
    var root = _ref$root === undefined ? null : _ref$root;
    var _ref$linkActiveClass = _ref.linkActiveClass;
    var linkActiveClass = _ref$linkActiveClass === undefined ? 'v-link-active' : _ref$linkActiveClass;

    _classCallCheck(this, Router);

    /* istanbul ignore if */
    if (!Router.installed) {
      throw new Error('Please install the Router with Vue.use() before ' + 'creating an instance.');
    }

    // Vue instances
    this.app = null;
    this._views = [];
    this._children = [];

    // route recognizer
    this._recognizer = new _routeRecognizer2['default']();
    this._guardRecognizer = new _routeRecognizer2['default']();

    // state
    this._started = false;
    this._startCb = null;
    this._currentRoute = {};
    this._currentTransition = null;
    this._previousTransition = null;
    this._notFoundHandler = null;
    this._notFoundRedirect = null;
    this._beforeEachHooks = [];
    this._afterEachHooks = [];

    // feature detection
    this._hasPushState = typeof window !== 'undefined' && window.history && window.history.pushState;

    // trigger transition on initial render?
    this._rendered = false;
    this._transitionOnLoad = transitionOnLoad;

    // history mode
    this._abstract = abstract;
    this._hashbang = hashbang;
    this._history = this._hasPushState && history;

    // other options
    this._saveScrollPosition = saveScrollPosition;
    this._linkActiveClass = linkActiveClass;
    this._suppress = suppressTransitionError;

    // create history object
    var inBrowser = Vue.util.inBrowser;
    this.mode = !inBrowser || this._abstract ? 'abstract' : this._history ? 'html5' : 'hash';

    var History = historyBackends[this.mode];
    var self = this;
    this.history = new History({
      root: root,
      hashbang: this._hashbang,
      onChange: function onChange(path, state, anchor) {
        self._match(path, state, anchor);
      }
    });
  }

  /**
   * Allow directly passing components to a route
   * definition.
   *
   * @param {String} path
   * @param {Object} handler
   */

  // API ===================================================

  /**
  * Register a map of top-level paths.
  *
  * @param {Object} map
  */

  Router.prototype.map = function map(_map) {
    for (var route in _map) {
      this.on(route, _map[route]);
    }
  };

  /**
   * Register a single root-level path
   *
   * @param {String} rootPath
   * @param {Object} handler
   *                 - {String} component
   *                 - {Object} [subRoutes]
   *                 - {Boolean} [forceRefresh]
   *                 - {Function} [before]
   *                 - {Function} [after]
   */

  Router.prototype.on = function on(rootPath, handler) {
    if (rootPath === '*') {
      this._notFound(handler);
    } else {
      this._addRoute(rootPath, handler, []);
    }
  };

  /**
   * Set redirects.
   *
   * @param {Object} map
   */

  Router.prototype.redirect = function redirect(map) {
    for (var path in map) {
      this._addRedirect(path, map[path]);
    }
  };

  /**
   * Set aliases.
   *
   * @param {Object} map
   */

  Router.prototype.alias = function alias(map) {
    for (var path in map) {
      this._addAlias(path, map[path]);
    }
  };

  /**
   * Set global before hook.
   *
   * @param {Function} fn
   */

  Router.prototype.beforeEach = function beforeEach(fn) {
    this._beforeEachHooks.push(fn);
  };

  /**
   * Set global after hook.
   *
   * @param {Function} fn
   */

  Router.prototype.afterEach = function afterEach(fn) {
    this._afterEachHooks.push(fn);
  };

  /**
   * Navigate to a given path.
   * The path can be an object describing a named path in
   * the format of { name: '...', params: {}, query: {}}
   * The path is assumed to be already decoded, and will
   * be resolved against root (if provided)
   *
   * @param {String|Object} path
   * @param {Boolean} [replace]
   */

  Router.prototype.go = function go(path) {
    var replace = false;
    var append = false;
    if (Vue.util.isObject(path)) {
      replace = path.replace;
      append = path.append;
    }
    path = this._stringifyPath(path);
    if (path) {
      this.history.go(path, replace, append);
    }
  };

  /**
   * Short hand for replacing current path
   *
   * @param {String} path
   */

  Router.prototype.replace = function replace(path) {
    this.go({ path: path, replace: true });
  };

  /**
   * Start the router.
   *
   * @param {VueConstructor} App
   * @param {String|Element} container
   * @param {Function} [cb]
   */

  Router.prototype.start = function start(App, container, cb) {
    /* istanbul ignore if */
    if (this._started) {
      _util.warn('already started.');
      return;
    }
    this._started = true;
    this._startCb = cb;
    if (!this.app) {
      /* istanbul ignore if */
      if (!App || !container) {
        throw new Error('Must start vue-router with a component and a ' + 'root container.');
      }
      this._appContainer = container;
      var Ctor = this._appConstructor = typeof App === 'function' ? App : Vue.extend(App);
      // give it a name for better debugging
      Ctor.options.name = Ctor.options.name || 'RouterApp';
    }
    this.history.start();
  };

  /**
   * Stop listening to route changes.
   */

  Router.prototype.stop = function stop() {
    this.history.stop();
    this._started = false;
  };

  // Internal methods ======================================

  /**
  * Add a route containing a list of segments to the internal
  * route recognizer. Will be called recursively to add all
  * possible sub-routes.
  *
  * @param {String} path
  * @param {Object} handler
  * @param {Array} segments
  */

  Router.prototype._addRoute = function _addRoute(path, handler, segments) {
    guardComponent(path, handler);
    handler.path = path;
    handler.fullPath = (segments.reduce(function (path, segment) {
      return path + segment.path;
    }, '') + path).replace('//', '/');
    segments.push({
      path: path,
      handler: handler
    });
    this._recognizer.add(segments, {
      as: handler.name
    });
    // add sub routes
    if (handler.subRoutes) {
      for (var subPath in handler.subRoutes) {
        // recursively walk all sub routes
        this._addRoute(subPath, handler.subRoutes[subPath],
        // pass a copy in recursion to avoid mutating
        // across branches
        segments.slice());
      }
    }
  };

  /**
   * Set the notFound route handler.
   *
   * @param {Object} handler
   */

  Router.prototype._notFound = function _notFound(handler) {
    guardComponent('*', handler);
    this._notFoundHandler = [{ handler: handler }];
  };

  /**
   * Add a redirect record.
   *
   * @param {String} path
   * @param {String} redirectPath
   */

  Router.prototype._addRedirect = function _addRedirect(path, redirectPath) {
    if (path === '*') {
      this._notFoundRedirect = redirectPath;
    } else {
      this._addGuard(path, redirectPath, this.replace);
    }
  };

  /**
   * Add an alias record.
   *
   * @param {String} path
   * @param {String} aliasPath
   */

  Router.prototype._addAlias = function _addAlias(path, aliasPath) {
    this._addGuard(path, aliasPath, this._match);
  };

  /**
   * Add a path guard.
   *
   * @param {String} path
   * @param {String} mappedPath
   * @param {Function} handler
   */

  Router.prototype._addGuard = function _addGuard(path, mappedPath, _handler) {
    var _this = this;

    this._guardRecognizer.add([{
      path: path,
      handler: function handler(match, query) {
        var realPath = _util.mapParams(mappedPath, match.params, query);
        _handler.call(_this, realPath);
      }
    }]);
  };

  /**
   * Check if a path matches any redirect records.
   *
   * @param {String} path
   * @return {Boolean} - if true, will skip normal match.
   */

  Router.prototype._checkGuard = function _checkGuard(path) {
    var matched = this._guardRecognizer.recognize(path);
    if (matched) {
      matched[0].handler(matched[0], matched.queryParams);
      return true;
    } else if (this._notFoundRedirect) {
      matched = this._recognizer.recognize(path);
      if (!matched) {
        this.replace(this._notFoundRedirect);
        return true;
      }
    }
  };

  /**
   * Match a URL path and set the route context on vm,
   * triggering view updates.
   *
   * @param {String} path
   * @param {Object} [state]
   * @param {String} [anchor]
   */

  Router.prototype._match = function _match(path, state, anchor) {
    var _this2 = this;

    if (this._checkGuard(path)) {
      return;
    }

    var currentRoute = this._currentRoute;
    var currentTransition = this._currentTransition;

    if (currentTransition) {
      if (currentTransition.to.path === path) {
        // do nothing if we have an active transition going to the same path
        return;
      } else if (currentRoute.path === path) {
        // We are going to the same path, but we also have an ongoing but
        // not-yet-validated transition. Abort that transition and reset to
        // prev transition.
        currentTransition.aborted = true;
        this._currentTransition = this._prevTransition;
        return;
      } else {
        // going to a totally different path. abort ongoing transition.
        currentTransition.aborted = true;
      }
    }

    // construct new route and transition context
    var route = new _route2['default'](path, this);
    var transition = new _transition2['default'](this, route, currentRoute);

    // current transition is updated right now.
    // however, current route will only be updated after the transition has
    // been validated.
    this._prevTransition = currentTransition;
    this._currentTransition = transition;

    if (!this.app) {
      // initial render
      this.app = new this._appConstructor({
        el: this._appContainer,
        _meta: {
          $route: route
        }
      });
    }

    // check global before hook
    var beforeHooks = this._beforeEachHooks;
    var startTransition = function startTransition() {
      transition.start(function () {
        _this2._postTransition(route, state, anchor);
      });
    };

    if (beforeHooks.length) {
      transition.runQueue(beforeHooks, function (hook, _, next) {
        if (transition === _this2._currentTransition) {
          transition.callHook(hook, null, next, {
            expectBoolean: true
          });
        }
      }, startTransition);
    } else {
      startTransition();
    }

    if (!this._rendered && this._startCb) {
      this._startCb.call(null);
    }

    // HACK:
    // set rendered to true after the transition start, so
    // that components that are acitvated synchronously know
    // whether it is the initial render.
    this._rendered = true;
  };

  /**
   * Set current to the new transition.
   * This is called by the transition object when the
   * validation of a route has succeeded.
   *
   * @param {Transition} transition
   */

  Router.prototype._onTransitionValidated = function _onTransitionValidated(transition) {
    // set current route
    var route = this._currentRoute = transition.to;
    // update route context for all children
    if (this.app.$route !== route) {
      this.app.$route = route;
      this._children.forEach(function (child) {
        child.$route = route;
      });
    }
    // call global after hook
    if (this._afterEachHooks.length) {
      this._afterEachHooks.forEach(function (hook) {
        return hook.call(null, {
          to: transition.to,
          from: transition.from
        });
      });
    }
    this._currentTransition.done = true;
  };

  /**
   * Handle stuff after the transition.
   *
   * @param {Route} route
   * @param {Object} [state]
   * @param {String} [anchor]
   */

  Router.prototype._postTransition = function _postTransition(route, state, anchor) {
    // handle scroll positions
    // saved scroll positions take priority
    // then we check if the path has an anchor
    var pos = state && state.pos;
    if (pos && this._saveScrollPosition) {
      Vue.nextTick(function () {
        window.scrollTo(pos.x, pos.y);
      });
    } else if (anchor) {
      Vue.nextTick(function () {
        var el = document.getElementById(anchor.slice(1));
        if (el) {
          window.scrollTo(window.scrollX, el.offsetTop);
        }
      });
    }
  };

  /**
   * Normalize named route object / string paths into
   * a string.
   *
   * @param {Object|String|Number} path
   * @return {String}
   */

  Router.prototype._stringifyPath = function _stringifyPath(path) {
    if (path && typeof path === 'object') {
      if (path.name) {
        var params = path.params || {};
        if (path.query) {
          params.queryParams = path.query;
        }
        return this._recognizer.generate(path.name, params);
      } else if (path.path) {
        return path.path;
      } else {
        return '';
      }
    } else {
      return path ? path + '' : '';
    }
  };

  return Router;
})();

function guardComponent(path, handler) {
  var comp = handler.component;
  if (Vue.util.isPlainObject(comp)) {
    comp = handler.component = Vue.extend(comp);
  }
  /* istanbul ignore if */
  if (typeof comp !== 'function') {
    handler.component = null;
    _util.warn('invalid component for route "' + path + '".');
  }
}

/* Installation */

Router.installed = false;

/**
 * Installation interface.
 * Install the necessary directives.
 */

Router.install = function (externalVue) {
  /* istanbul ignore if */
  if (Router.installed) {
    _util.warn('already installed.');
    return;
  }
  Vue = externalVue;
  _override2['default'](Vue);
  _directivesView2['default'](Vue);
  _directivesLink2['default'](Vue);
  _util2['default'].Vue = Vue;
  Router.installed = true;
};

// auto install
/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Router);
}

exports['default'] = Router;
module.exports = exports['default'];
},{"./directives/link":43,"./directives/view":44,"./history/abstract":45,"./history/hash":46,"./history/html5":47,"./override":49,"./route":51,"./transition":52,"./util":53,"babel-runtime/helpers/class-call-check":24,"babel-runtime/helpers/interop-require-default":25,"route-recognizer":42}],49:[function(require,module,exports){
'use strict';

exports.__esModule = true;

exports['default'] = function (Vue) {

  var _ = Vue.util;

  // override Vue's init and destroy process to keep track of router instances
  var init = Vue.prototype._init;
  Vue.prototype._init = function (options) {
    var root = options._parent || options.parent || this;
    var route = root.$route;
    if (route) {
      route.router._children.push(this);
      if (!this.$route) {
        /* istanbul ignore if */
        if (this._defineMeta) {
          // 0.12
          this._defineMeta('$route', route);
        } else {
          // 1.0
          _.defineReactive(this, '$route', route);
        }
      }
    }
    init.call(this, options);
  };

  var destroy = Vue.prototype._destroy;
  Vue.prototype._destroy = function () {
    if (!this._isBeingDestroyed) {
      var route = this.$root.$route;
      if (route) {
        route.router._children.$remove(this);
      }
      destroy.apply(this, arguments);
    }
  };

  // 1.0 only: enable route mixins
  var strats = Vue.config.optionMergeStrategies;
  var hooksToMergeRE = /^(data|activate|deactivate)$/;

  if (strats) {
    strats.route = function (parentVal, childVal) {
      if (!childVal) return parentVal;
      if (!parentVal) return childVal;
      var ret = {};
      _.extend(ret, parentVal);
      for (var key in childVal) {
        var a = ret[key];
        var b = childVal[key];
        // for data, activate and deactivate, we need to merge them into
        // arrays similar to lifecycle hooks.
        if (a && hooksToMergeRE.test(key)) {
          ret[key] = (_.isArray(a) ? a : [a]).concat(b);
        } else {
          ret[key] = b;
        }
      }
      return ret;
    };
  }
};

module.exports = exports['default'];
},{}],50:[function(require,module,exports){
'use strict';

var _Object$keys = require('babel-runtime/core-js/object/keys')['default'];

var _Object$create = require('babel-runtime/core-js/object/create')['default'];

exports.__esModule = true;
exports.canReuse = canReuse;
exports.canDeactivate = canDeactivate;
exports.canActivate = canActivate;
exports.deactivate = deactivate;
exports.activate = activate;
exports.reuse = reuse;

var _util = require('./util');

/**
 * Determine the reusability of an existing router view.
 *
 * @param {Directive} view
 * @param {Object} handler
 * @param {Transition} transition
 */

function canReuse(view, handler, transition) {
  var component = view.childVM;
  if (!component || !handler) {
    return false;
  }
  // important: check view.Component here because it may
  // have been changed in activate hook
  if (view.Component !== handler.component) {
    return false;
  }
  var canReuseFn = _util.getRouteConfig(component, 'canReuse');
  return typeof canReuseFn === 'boolean' ? canReuseFn : canReuseFn ? canReuseFn.call(component, {
    to: transition.to,
    from: transition.from
  }) : true; // defaults to true
}

/**
 * Check if a component can deactivate.
 *
 * @param {Directive} view
 * @param {Transition} transition
 * @param {Function} next
 */

function canDeactivate(view, transition, next) {
  var fromComponent = view.childVM;
  var hook = _util.getRouteConfig(fromComponent, 'canDeactivate');
  if (!hook) {
    next();
  } else {
    transition.callHook(hook, fromComponent, next, {
      expectBoolean: true
    });
  }
}

/**
 * Check if a component can activate.
 *
 * @param {Object} handler
 * @param {Transition} transition
 * @param {Function} next
 */

function canActivate(handler, transition, next) {
  _util.resolveAsyncComponent(handler, function (Component) {
    // have to check due to async-ness
    if (transition.aborted) {
      return;
    }
    // determine if this component can be activated
    var hook = _util.getRouteConfig(Component, 'canActivate');
    if (!hook) {
      next();
    } else {
      transition.callHook(hook, null, next, {
        expectBoolean: true
      });
    }
  });
}

/**
 * Call deactivate hooks for existing router-views.
 *
 * @param {Directive} view
 * @param {Transition} transition
 * @param {Function} next
 */

function deactivate(view, transition, next) {
  var component = view.childVM;
  var hook = _util.getRouteConfig(component, 'deactivate');
  if (!hook) {
    next();
  } else {
    transition.callHooks(hook, component, next);
  }
}

/**
 * Activate / switch component for a router-view.
 *
 * @param {Directive} view
 * @param {Transition} transition
 * @param {Number} depth
 * @param {Function} [cb]
 */

function activate(view, transition, depth, cb, reuse) {
  var handler = transition.activateQueue[depth];
  if (!handler) {
    // fix 1.0.0-alpha.3 compat
    if (view._bound) {
      view.setComponent(null);
    }
    cb && cb();
    return;
  }

  var Component = view.Component = handler.component;
  var activateHook = _util.getRouteConfig(Component, 'activate');
  var dataHook = _util.getRouteConfig(Component, 'data');
  var waitForData = _util.getRouteConfig(Component, 'waitForData');

  view.depth = depth;
  view.activated = false;

  var component = undefined;
  var loading = !!(dataHook && !waitForData);

  // "reuse" is a flag passed down when the parent view is
  // either reused via keep-alive or as a child of a kept-alive view.
  // of course we can only reuse if the current kept-alive instance
  // is of the correct type.
  reuse = reuse && view.childVM && view.childVM.constructor === Component;

  if (reuse) {
    // just reuse
    component = view.childVM;
    component.$loadingRouteData = loading;
  } else {
    // unbuild current component. this step also destroys
    // and removes all nested child views.
    view.unbuild(true);
    // handle keep-alive.
    // if the view has keep-alive, the child vm is not actually
    // destroyed - its nested views will still be in router's
    // view list. We need to removed these child views and
    // cache them on the child vm.
    if (view.keepAlive) {
      var views = transition.router._views;
      var i = views.indexOf(view);
      if (i > 0) {
        transition.router._views = views.slice(i);
        if (view.childVM) {
          view.childVM._routerViews = views.slice(0, i);
        }
      }
    }

    // build the new component. this will also create the
    // direct child view of the current one. it will register
    // itself as view.childView.
    component = view.build({
      _meta: {
        $loadingRouteData: loading
      }
    });
    // handle keep-alive.
    // when a kept-alive child vm is restored, we need to
    // add its cached child views into the router's view list,
    // and also properly update current view's child view.
    if (view.keepAlive) {
      component.$loadingRouteData = loading;
      var cachedViews = component._routerViews;
      if (cachedViews) {
        transition.router._views = cachedViews.concat(transition.router._views);
        view.childView = cachedViews[cachedViews.length - 1];
        component._routerViews = null;
      }
    }
  }

  // cleanup the component in case the transition is aborted
  // before the component is ever inserted.
  var cleanup = function cleanup() {
    component.$destroy();
  };

  // actually insert the component and trigger transition
  var insert = function insert() {
    if (reuse) {
      cb && cb();
      return;
    }
    var router = transition.router;
    if (router._rendered || router._transitionOnLoad) {
      view.transition(component);
    } else {
      // no transition on first render, manual transition
      /* istanbul ignore if */
      if (view.setCurrent) {
        // 0.12 compat
        view.setCurrent(component);
      } else {
        // 1.0
        view.childVM = component;
      }
      component.$before(view.anchor, null, false);
    }
    cb && cb();
  };

  // called after activation hook is resolved
  var afterActivate = function afterActivate() {
    view.activated = true;
    // activate the child view
    if (view.childView) {
      activate(view.childView, transition, depth + 1, null, reuse || view.keepAlive);
    }
    if (dataHook && waitForData) {
      // wait until data loaded to insert
      loadData(component, transition, dataHook, insert, cleanup);
    } else {
      // load data and insert at the same time
      if (dataHook) {
        loadData(component, transition, dataHook);
      }
      insert();
    }
  };

  if (activateHook) {
    transition.callHooks(activateHook, component, afterActivate, {
      cleanup: cleanup
    });
  } else {
    afterActivate();
  }
}

/**
 * Reuse a view, just reload data if necessary.
 *
 * @param {Directive} view
 * @param {Transition} transition
 */

function reuse(view, transition) {
  var component = view.childVM;
  var dataHook = _util.getRouteConfig(component, 'data');
  if (dataHook) {
    loadData(component, transition, dataHook);
  }
}

/**
 * Asynchronously load and apply data to component.
 *
 * @param {Vue} component
 * @param {Transition} transition
 * @param {Function} hook
 * @param {Function} cb
 * @param {Function} cleanup
 */

function loadData(component, transition, hook, cb, cleanup) {
  component.$loadingRouteData = true;
  transition.callHooks(hook, component, function (data, onError) {
    // merge data from multiple data hooks
    if (Array.isArray(data) && data._needMerge) {
      data = data.reduce(function (res, obj) {
        if (isPlainObject(obj)) {
          _Object$keys(obj).forEach(function (key) {
            res[key] = obj[key];
          });
        }
        return res;
      }, _Object$create(null));
    }
    // handle promise sugar syntax
    var promises = [];
    if (isPlainObject(data)) {
      _Object$keys(data).forEach(function (key) {
        var val = data[key];
        if (_util.isPromise(val)) {
          promises.push(val.then(function (resolvedVal) {
            component.$set(key, resolvedVal);
          }));
        } else {
          component.$set(key, val);
        }
      });
    }
    if (!promises.length) {
      component.$loadingRouteData = false;
      cb && cb();
    } else {
      promises[0].constructor.all(promises).then(function (_) {
        component.$loadingRouteData = false;
        cb && cb();
      }, onError);
    }
  }, {
    cleanup: cleanup,
    expectData: true
  });
}

function isPlainObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}
},{"./util":53,"babel-runtime/core-js/object/create":21,"babel-runtime/core-js/object/keys":23}],51:[function(require,module,exports){
"use strict";

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _Object$freeze = require("babel-runtime/core-js/object/freeze")["default"];

exports.__esModule = true;
var internalKeysRE = /^(component|subRoutes)$/;

/**
 * Route Context Object
 *
 * @param {String} path
 * @param {Router} router
 */

var Route = function Route(path, router) {
  var _this = this;

  _classCallCheck(this, Route);

  var matched = router._recognizer.recognize(path);
  if (matched) {
    // copy all custom fields from route configs
    [].forEach.call(matched, function (match) {
      for (var key in match.handler) {
        if (!internalKeysRE.test(key)) {
          _this[key] = match.handler[key];
        }
      }
    });
    // set query and params
    this.query = matched.queryParams;
    this.params = [].reduce.call(matched, function (prev, cur) {
      if (cur.params) {
        for (var key in cur.params) {
          prev[key] = cur.params[key];
        }
      }
      return prev;
    }, {});
  }
  // expose path and router
  this.path = path;
  this.router = router;
  // for internal use
  this.matched = matched || router._notFoundHandler;
  // Important: freeze self to prevent observation
  _Object$freeze(this);
};

exports["default"] = Route;
module.exports = exports["default"];
},{"babel-runtime/core-js/object/freeze":22,"babel-runtime/helpers/class-call-check":24}],52:[function(require,module,exports){
'use strict';

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

exports.__esModule = true;

var _util = require('./util');

var _pipeline = require('./pipeline');

/**
 * A RouteTransition object manages the pipeline of a
 * router-view switching process. This is also the object
 * passed into user route hooks.
 *
 * @param {Router} router
 * @param {Route} to
 * @param {Route} from
 */

var RouteTransition = (function () {
  function RouteTransition(router, to, from) {
    _classCallCheck(this, RouteTransition);

    this.router = router;
    this.to = to;
    this.from = from;
    this.next = null;
    this.aborted = false;
    this.done = false;

    // start by determine the queues

    // the deactivate queue is an array of router-view
    // directive instances that need to be deactivated,
    // deepest first.
    this.deactivateQueue = router._views;

    // check the default handler of the deepest match
    var matched = to.matched ? Array.prototype.slice.call(to.matched) : [];

    // the activate queue is an array of route handlers
    // that need to be activated
    this.activateQueue = matched.map(function (match) {
      return match.handler;
    });
  }

  /**
   * Abort current transition and return to previous location.
   */

  RouteTransition.prototype.abort = function abort() {
    if (!this.aborted) {
      this.aborted = true;
      // if the root path throws an error during validation
      // on initial load, it gets caught in an infinite loop.
      var abortingOnLoad = !this.from.path && this.to.path === '/';
      if (!abortingOnLoad) {
        this.router.replace(this.from.path || '/');
      }
    }
  };

  /**
   * Abort current transition and redirect to a new location.
   *
   * @param {String} path
   */

  RouteTransition.prototype.redirect = function redirect(path) {
    if (!this.aborted) {
      this.aborted = true;
      if (typeof path === 'string') {
        path = _util.mapParams(path, this.to.params, this.to.query);
      } else {
        path.params = this.to.params;
        path.query = this.to.query;
      }
      this.router.replace(path);
    }
  };

  /**
   * A router view transition's pipeline can be described as
   * follows, assuming we are transitioning from an existing
   * <router-view> chain [Component A, Component B] to a new
   * chain [Component A, Component C]:
   *
   *  A    A
   *  | => |
   *  B    C
   *
   * 1. Reusablity phase:
   *   -> canReuse(A, A)
   *   -> canReuse(B, C)
   *   -> determine new queues:
   *      - deactivation: [B]
   *      - activation: [C]
   *
   * 2. Validation phase:
   *   -> canDeactivate(B)
   *   -> canActivate(C)
   *
   * 3. Activation phase:
   *   -> deactivate(B)
   *   -> activate(C)
   *
   * Each of these steps can be asynchronous, and any
   * step can potentially abort the transition.
   *
   * @param {Function} cb
   */

  RouteTransition.prototype.start = function start(cb) {
    var transition = this;
    var daq = this.deactivateQueue;
    var aq = this.activateQueue;
    var rdaq = daq.slice().reverse();
    var reuseQueue = undefined;

    // 1. Reusability phase
    var i = undefined;
    for (i = 0; i < rdaq.length; i++) {
      if (!_pipeline.canReuse(rdaq[i], aq[i], transition)) {
        break;
      }
    }
    if (i > 0) {
      reuseQueue = rdaq.slice(0, i);
      daq = rdaq.slice(i).reverse();
      aq = aq.slice(i);
    }

    // 2. Validation phase
    transition.runQueue(daq, _pipeline.canDeactivate, function () {
      transition.runQueue(aq, _pipeline.canActivate, function () {
        transition.runQueue(daq, _pipeline.deactivate, function () {
          // 3. Activation phase

          // Update router current route
          transition.router._onTransitionValidated(transition);

          // trigger reuse for all reused views
          reuseQueue && reuseQueue.forEach(function (view) {
            _pipeline.reuse(view, transition);
          });

          // the root of the chain that needs to be replaced
          // is the top-most non-reusable view.
          if (daq.length) {
            var view = daq[daq.length - 1];
            var depth = reuseQueue ? reuseQueue.length : 0;
            _pipeline.activate(view, transition, depth, cb);
          } else {
            cb();
          }
        });
      });
    });
  };

  /**
   * Asynchronously and sequentially apply a function to a
   * queue.
   *
   * @param {Array} queue
   * @param {Function} fn
   * @param {Function} cb
   */

  RouteTransition.prototype.runQueue = function runQueue(queue, fn, cb) {
    var transition = this;
    step(0);
    function step(index) {
      if (index >= queue.length) {
        cb();
      } else {
        fn(queue[index], transition, function () {
          step(index + 1);
        });
      }
    }
  };

  /**
   * Call a user provided route transition hook and handle
   * the response (e.g. if the user returns a promise).
   *
   * If the user neither expects an argument nor returns a
   * promise, the hook is assumed to be synchronous.
   *
   * @param {Function} hook
   * @param {*} [context]
   * @param {Function} [cb]
   * @param {Object} [options]
   *                 - {Boolean} expectBoolean
   *                 - {Boolean} expectData
   *                 - {Function} cleanup
   */

  RouteTransition.prototype.callHook = function callHook(hook, context, cb) {
    var _ref = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

    var _ref$expectBoolean = _ref.expectBoolean;
    var expectBoolean = _ref$expectBoolean === undefined ? false : _ref$expectBoolean;
    var _ref$expectData = _ref.expectData;
    var expectData = _ref$expectData === undefined ? false : _ref$expectData;
    var cleanup = _ref.cleanup;

    var transition = this;
    var nextCalled = false;

    // abort the transition
    var abort = function abort() {
      cleanup && cleanup();
      transition.abort();
    };

    // handle errors
    var onError = function onError(err) {
      // cleanup indicates an after-activation hook,
      // so instead of aborting we just let the transition
      // finish.
      cleanup ? next() : abort();
      if (err && !transition.router._suppress) {
        _util.warn('Uncaught error during transition: ');
        throw err instanceof Error ? err : new Error(err);
      }
    };

    // advance the transition to the next step
    var next = function next(data) {
      if (nextCalled) {
        _util.warn('transition.next() should be called only once.');
        return;
      }
      nextCalled = true;
      if (transition.aborted) {
        cleanup && cleanup();
        return;
      }
      cb && cb(data, onError);
    };

    // expose a clone of the transition object, so that each
    // hook gets a clean copy and prevent the user from
    // messing with the internals.
    var exposed = {
      to: transition.to,
      from: transition.from,
      abort: abort,
      next: next,
      redirect: function redirect() {
        transition.redirect.apply(transition, arguments);
      }
    };

    // actually call the hook
    var res = undefined;
    try {
      res = hook.call(context, exposed);
    } catch (err) {
      return onError(err);
    }

    // handle boolean/promise return values
    var resIsPromise = _util.isPromise(res);
    if (expectBoolean) {
      if (typeof res === 'boolean') {
        res ? next() : abort();
      } else if (resIsPromise) {
        res.then(function (ok) {
          ok ? next() : abort();
        }, onError);
      } else if (!hook.length) {
        next(res);
      }
    } else if (resIsPromise) {
      res.then(next, onError);
    } else if (expectData && isPlainOjbect(res) || !hook.length) {
      next(res);
    }
  };

  /**
   * Call a single hook or an array of async hooks in series.
   *
   * @param {Array} hooks
   * @param {*} context
   * @param {Function} cb
   * @param {Object} [options]
   */

  RouteTransition.prototype.callHooks = function callHooks(hooks, context, cb, options) {
    var _this = this;

    if (Array.isArray(hooks)) {
      (function () {
        var res = [];
        res._needMerge = true;
        var onError = undefined;
        _this.runQueue(hooks, function (hook, _, next) {
          if (!_this.aborted) {
            _this.callHook(hook, context, function (r, onError) {
              if (r) res.push(r);
              onError = onError;
              next();
            }, options);
          }
        }, function () {
          cb(res, onError);
        });
      })();
    } else {
      this.callHook(hooks, context, cb, options);
    }
  };

  return RouteTransition;
})();

exports['default'] = RouteTransition;

function isPlainOjbect(val) {
  return Object.prototype.toString.call(val) === '[object Object]';
}
module.exports = exports['default'];
},{"./pipeline":50,"./util":53,"babel-runtime/helpers/class-call-check":24}],53:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;
exports.warn = warn;
exports.resolvePath = resolvePath;
exports.isPromise = isPromise;
exports.getRouteConfig = getRouteConfig;
exports.resolveAsyncComponent = resolveAsyncComponent;
exports.mapParams = mapParams;

var _routeRecognizer = require('route-recognizer');

var _routeRecognizer2 = _interopRequireDefault(_routeRecognizer);

var genQuery = _routeRecognizer2['default'].prototype.generateQueryString;

// export default for holding the Vue reference
var _exports = {};
exports['default'] = _exports;

/**
 * Warn stuff.
 *
 * @param {String} msg
 */

function warn(msg) {
  /* istanbul ignore next */
  if (window.console) {
    console.warn('[vue-router] ' + msg);
    /* istanbul ignore if */
    if (!_exports.Vue || _exports.Vue.config.debug) {
      console.warn(new Error('warning stack trace:').stack);
    }
  }
}

/**
 * Resolve a relative path.
 *
 * @param {String} base
 * @param {String} relative
 * @param {Boolean} append
 * @return {String}
 */

function resolvePath(base, relative, append) {
  var query = base.match(/(\?.*)$/);
  if (query) {
    query = query[1];
    base = base.slice(0, -query.length);
  }
  // a query!
  if (relative.charAt(0) === '?') {
    return base + relative;
  }
  var stack = base.split('/');
  // remove trailing segment if:
  // - not appending
  // - appending to trailing slash (last segment is empty)
  if (!append || !stack[stack.length - 1]) {
    stack.pop();
  }
  // resolve relative path
  var segments = relative.replace(/^\//, '').split('/');
  for (var i = 0; i < segments.length; i++) {
    var segment = segments[i];
    if (segment === '.') {
      continue;
    } else if (segment === '..') {
      stack.pop();
    } else {
      stack.push(segment);
    }
  }
  // ensure leading slash
  if (stack[0] !== '') {
    stack.unshift('');
  }
  return stack.join('/');
}

/**
 * Forgiving check for a promise
 *
 * @param {Object} p
 * @return {Boolean}
 */

function isPromise(p) {
  return p && typeof p.then === 'function';
}

/**
 * Retrive a route config field from a component instance
 * OR a component contructor.
 *
 * @param {Function|Vue} component
 * @param {String} name
 * @return {*}
 */

function getRouteConfig(component, name) {
  var options = component && (component.$options || component.options);
  return options && options.route && options.route[name];
}

/**
 * Resolve an async component factory. Have to do a dirty
 * mock here because of Vue core's internal API depends on
 * an ID check.
 *
 * @param {Object} handler
 * @param {Function} cb
 */

var resolver = undefined;

function resolveAsyncComponent(handler, cb) {
  if (!resolver) {
    resolver = {
      resolve: _exports.Vue.prototype._resolveComponent,
      $options: {
        components: {
          _: handler.component
        }
      }
    };
  } else {
    resolver.$options.components._ = handler.component;
  }
  resolver.resolve('_', function (Component) {
    handler.component = Component;
    cb(Component);
  });
}

/**
 * Map the dynamic segments in a path to params.
 *
 * @param {String} path
 * @param {Object} params
 * @param {Object} query
 */

function mapParams(path, params, query) {
  if (params === undefined) params = {};

  path = path.replace(/:([^\/]+)/g, function (_, key) {
    var val = params[key];
    if (!val) {
      warn('param "' + key + '" not found when generating ' + 'path for "' + path + '" with params ' + JSON.stringify(params));
    }
    return val || '';
  });
  if (query) {
    path += genQuery(query);
  }
  return path;
}
},{"babel-runtime/helpers/interop-require-default":25,"route-recognizer":42}],54:[function(require,module,exports){
var _ = require('../util')
var Watcher = require('../watcher')
var Path = require('../parsers/path')
var textParser = require('../parsers/text')
var dirParser = require('../parsers/directive')
var expParser = require('../parsers/expression')
var filterRE = /[^|]\|[^|]/

/**
 * Get the value from an expression on this vm.
 *
 * @param {String} exp
 * @param {Boolean} [asStatement]
 * @return {*}
 */

exports.$get = function (exp, asStatement) {
  var res = expParser.parse(exp)
  if (res) {
    if (asStatement && !expParser.isSimplePath(exp)) {
      var self = this
      return function statementHandler () {
        res.get.call(self, self)
      }
    } else {
      try {
        return res.get.call(this, this)
      } catch (e) {}
    }
  }
}

/**
 * Set the value from an expression on this vm.
 * The expression must be a valid left-hand
 * expression in an assignment.
 *
 * @param {String} exp
 * @param {*} val
 */

exports.$set = function (exp, val) {
  var res = expParser.parse(exp, true)
  if (res && res.set) {
    res.set.call(this, this, val)
  }
}

/**
 * Delete a property on the VM
 *
 * @param {String} key
 */

exports.$delete = function (key) {
  _.delete(this._data, key)
}

/**
 * Watch an expression, trigger callback when its
 * value changes.
 *
 * @param {String|Function} expOrFn
 * @param {Function} cb
 * @param {Object} [options]
 *                 - {Boolean} deep
 *                 - {Boolean} immediate
 * @return {Function} - unwatchFn
 */

exports.$watch = function (expOrFn, cb, options) {
  var vm = this
  var parsed
  if (typeof expOrFn === 'string') {
    parsed = dirParser.parse(expOrFn)
    expOrFn = parsed.expression
  }
  var watcher = new Watcher(vm, expOrFn, cb, {
    deep: options && options.deep,
    filters: parsed && parsed.filters
  })
  if (options && options.immediate) {
    cb.call(vm, watcher.value)
  }
  return function unwatchFn () {
    watcher.teardown()
  }
}

/**
 * Evaluate a text directive, including filters.
 *
 * @param {String} text
 * @param {Boolean} [asStatement]
 * @return {String}
 */

exports.$eval = function (text, asStatement) {
  // check for filters.
  if (filterRE.test(text)) {
    var dir = dirParser.parse(text)
    // the filter regex check might give false positive
    // for pipes inside strings, so it's possible that
    // we don't get any filters here
    var val = this.$get(dir.expression, asStatement)
    return dir.filters
      ? this._applyFilters(val, null, dir.filters)
      : val
  } else {
    // no filter
    return this.$get(text, asStatement)
  }
}

/**
 * Interpolate a piece of template text.
 *
 * @param {String} text
 * @return {String}
 */

exports.$interpolate = function (text) {
  var tokens = textParser.parse(text)
  var vm = this
  if (tokens) {
    if (tokens.length === 1) {
      return vm.$eval(tokens[0].value) + ''
    } else {
      return tokens.map(function (token) {
        return token.tag
          ? vm.$eval(token.value)
          : token.value
      }).join('')
    }
  } else {
    return text
  }
}

/**
 * Log instance data as a plain JS object
 * so that it is easier to inspect in console.
 * This method assumes console is available.
 *
 * @param {String} [path]
 */

exports.$log = function (path) {
  var data = path
    ? Path.get(this._data, path)
    : this._data
  if (data) {
    data = clean(data)
  }
  // include computed fields
  if (!path) {
    for (var key in this.$options.computed) {
      data[key] = clean(this[key])
    }
  }
  console.log(data)
}

/**
 * "clean" a getter/setter converted object into a plain
 * object copy.
 *
 * @param {Object} - obj
 * @return {Object}
 */

function clean (obj) {
  return JSON.parse(JSON.stringify(obj))
}

},{"../parsers/directive":104,"../parsers/expression":105,"../parsers/path":106,"../parsers/text":108,"../util":116,"../watcher":120}],55:[function(require,module,exports){
var _ = require('../util')
var transition = require('../transition')

/**
 * Convenience on-instance nextTick. The callback is
 * auto-bound to the instance, and this avoids component
 * modules having to rely on the global Vue.
 *
 * @param {Function} fn
 */

exports.$nextTick = function (fn) {
  _.nextTick(fn, this)
}

/**
 * Append instance to target
 *
 * @param {Node} target
 * @param {Function} [cb]
 * @param {Boolean} [withTransition] - defaults to true
 */

exports.$appendTo = function (target, cb, withTransition) {
  return insert(
    this, target, cb, withTransition,
    append, transition.append
  )
}

/**
 * Prepend instance to target
 *
 * @param {Node} target
 * @param {Function} [cb]
 * @param {Boolean} [withTransition] - defaults to true
 */

exports.$prependTo = function (target, cb, withTransition) {
  target = query(target)
  if (target.hasChildNodes()) {
    this.$before(target.firstChild, cb, withTransition)
  } else {
    this.$appendTo(target, cb, withTransition)
  }
  return this
}

/**
 * Insert instance before target
 *
 * @param {Node} target
 * @param {Function} [cb]
 * @param {Boolean} [withTransition] - defaults to true
 */

exports.$before = function (target, cb, withTransition) {
  return insert(
    this, target, cb, withTransition,
    before, transition.before
  )
}

/**
 * Insert instance after target
 *
 * @param {Node} target
 * @param {Function} [cb]
 * @param {Boolean} [withTransition] - defaults to true
 */

exports.$after = function (target, cb, withTransition) {
  target = query(target)
  if (target.nextSibling) {
    this.$before(target.nextSibling, cb, withTransition)
  } else {
    this.$appendTo(target.parentNode, cb, withTransition)
  }
  return this
}

/**
 * Remove instance from DOM
 *
 * @param {Function} [cb]
 * @param {Boolean} [withTransition] - defaults to true
 */

exports.$remove = function (cb, withTransition) {
  if (!this.$el.parentNode) {
    return cb && cb()
  }
  var inDoc = this._isAttached && _.inDoc(this.$el)
  // if we are not in document, no need to check
  // for transitions
  if (!inDoc) withTransition = false
  var self = this
  var realCb = function () {
    if (inDoc) self._callHook('detached')
    if (cb) cb()
  }
  if (this._isFragment) {
    _.removeNodeRange(
      this._fragmentStart,
      this._fragmentEnd,
      this, this._fragment, realCb
    )
  } else {
    var op = withTransition === false
      ? remove
      : transition.remove
    op(this.$el, this, realCb)
  }
  return this
}

/**
 * Shared DOM insertion function.
 *
 * @param {Vue} vm
 * @param {Element} target
 * @param {Function} [cb]
 * @param {Boolean} [withTransition]
 * @param {Function} op1 - op for non-transition insert
 * @param {Function} op2 - op for transition insert
 * @return vm
 */

function insert (vm, target, cb, withTransition, op1, op2) {
  target = query(target)
  var targetIsDetached = !_.inDoc(target)
  var op = withTransition === false || targetIsDetached
      ? op1
      : op2
  var shouldCallHook =
    !targetIsDetached &&
    !vm._isAttached &&
    !_.inDoc(vm.$el)
  if (vm._isFragment) {
    _.mapNodeRange(vm._fragmentStart, vm._fragmentEnd, function (node) {
      op(node, target, vm)
    })
    cb && cb()
  } else {
    op(vm.$el, target, vm, cb)
  }
  if (shouldCallHook) {
    vm._callHook('attached')
  }
  return vm
}

/**
 * Check for selectors
 *
 * @param {String|Element} el
 */

function query (el) {
  return typeof el === 'string'
    ? document.querySelector(el)
    : el
}

/**
 * Append operation that takes a callback.
 *
 * @param {Node} el
 * @param {Node} target
 * @param {Vue} vm - unused
 * @param {Function} [cb]
 */

function append (el, target, vm, cb) {
  target.appendChild(el)
  if (cb) cb()
}

/**
 * InsertBefore operation that takes a callback.
 *
 * @param {Node} el
 * @param {Node} target
 * @param {Vue} vm - unused
 * @param {Function} [cb]
 */

function before (el, target, vm, cb) {
  _.before(el, target)
  if (cb) cb()
}

/**
 * Remove operation that takes a callback.
 *
 * @param {Node} el
 * @param {Vue} vm - unused
 * @param {Function} [cb]
 */

function remove (el, vm, cb) {
  _.remove(el)
  if (cb) cb()
}

},{"../transition":109,"../util":116}],56:[function(require,module,exports){
var _ = require('../util')

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 */

exports.$on = function (event, fn) {
  (this._events[event] || (this._events[event] = []))
    .push(fn)
  modifyListenerCount(this, event, 1)
  return this
}

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 */

exports.$once = function (event, fn) {
  var self = this
  function on () {
    self.$off(event, on)
    fn.apply(this, arguments)
  }
  on.fn = fn
  this.$on(event, on)
  return this
}

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 */

exports.$off = function (event, fn) {
  var cbs
  // all
  if (!arguments.length) {
    if (this.$parent) {
      for (event in this._events) {
        cbs = this._events[event]
        if (cbs) {
          modifyListenerCount(this, event, -cbs.length)
        }
      }
    }
    this._events = {}
    return this
  }
  // specific event
  cbs = this._events[event]
  if (!cbs) {
    return this
  }
  if (arguments.length === 1) {
    modifyListenerCount(this, event, -cbs.length)
    this._events[event] = null
    return this
  }
  // specific handler
  var cb
  var i = cbs.length
  while (i--) {
    cb = cbs[i]
    if (cb === fn || cb.fn === fn) {
      modifyListenerCount(this, event, -1)
      cbs.splice(i, 1)
      break
    }
  }
  return this
}

/**
 * Trigger an event on self.
 *
 * @param {String} event
 */

exports.$emit = function (event) {
  var cbs = this._events[event]
  this._shouldPropagate = !cbs
  if (cbs) {
    cbs = cbs.length > 1
      ? _.toArray(cbs)
      : cbs
    var args = _.toArray(arguments, 1)
    for (var i = 0, l = cbs.length; i < l; i++) {
      var res = cbs[i].apply(this, args)
      if (res === true) {
        this._shouldPropagate = true
      }
    }
  }
  return this
}

/**
 * Recursively broadcast an event to all children instances.
 *
 * @param {String} event
 * @param {...*} additional arguments
 */

exports.$broadcast = function (event) {
  // if no child has registered for this event,
  // then there's no need to broadcast.
  if (!this._eventsCount[event]) return
  var children = this.$children
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i]
    child.$emit.apply(child, arguments)
    if (child._shouldPropagate) {
      child.$broadcast.apply(child, arguments)
    }
  }
  return this
}

/**
 * Recursively propagate an event up the parent chain.
 *
 * @param {String} event
 * @param {...*} additional arguments
 */

exports.$dispatch = function () {
  this.$emit.apply(this, arguments)
  var parent = this.$parent
  while (parent) {
    parent.$emit.apply(parent, arguments)
    parent = parent._shouldPropagate
      ? parent.$parent
      : null
  }
  return this
}

/**
 * Modify the listener counts on all parents.
 * This bookkeeping allows $broadcast to return early when
 * no child has listened to a certain event.
 *
 * @param {Vue} vm
 * @param {String} event
 * @param {Number} count
 */

var hookRE = /^hook:/
function modifyListenerCount (vm, event, count) {
  var parent = vm.$parent
  // hooks do not get broadcasted so no need
  // to do bookkeeping for them
  if (!parent || !count || hookRE.test(event)) return
  while (parent) {
    parent._eventsCount[event] =
      (parent._eventsCount[event] || 0) + count
    parent = parent.$parent
  }
}

},{"../util":116}],57:[function(require,module,exports){
(function (process){
var _ = require('../util')
var config = require('../config')

/**
 * Expose useful internals
 */

exports.util = _
exports.config = config
exports.set = _.set
exports.delete = _.delete
exports.nextTick = _.nextTick

/**
 * The following are exposed for advanced usage / plugins
 */

exports.compiler = require('../compiler')
exports.FragmentFactory = require('../fragment/factory')
exports.internalDirectives = require('../directives/internal')
exports.parsers = {
  path: require('../parsers/path'),
  text: require('../parsers/text'),
  template: require('../parsers/template'),
  directive: require('../parsers/directive'),
  expression: require('../parsers/expression')
}

/**
 * Each instance constructor, including Vue, has a unique
 * cid. This enables us to create wrapped "child
 * constructors" for prototypal inheritance and cache them.
 */

exports.cid = 0
var cid = 1

/**
 * Class inheritance
 *
 * @param {Object} extendOptions
 */

exports.extend = function (extendOptions) {
  extendOptions = extendOptions || {}
  var Super = this
  var isFirstExtend = Super.cid === 0
  if (isFirstExtend && extendOptions._Ctor) {
    return extendOptions._Ctor
  }
  var name = extendOptions.name || Super.options.name
  var Sub = createClass(name || 'VueComponent')
  Sub.prototype = Object.create(Super.prototype)
  Sub.prototype.constructor = Sub
  Sub.cid = cid++
  Sub.options = _.mergeOptions(
    Super.options,
    extendOptions
  )
  Sub['super'] = Super
  // allow further extension
  Sub.extend = Super.extend
  // create asset registers, so extended classes
  // can have their private assets too.
  config._assetTypes.forEach(function (type) {
    Sub[type] = Super[type]
  })
  // enable recursive self-lookup
  if (name) {
    Sub.options.components[name] = Sub
  }
  // cache constructor
  if (isFirstExtend) {
    extendOptions._Ctor = Sub
  }
  return Sub
}

/**
 * A function that returns a sub-class constructor with the
 * given name. This gives us much nicer output when
 * logging instances in the console.
 *
 * @param {String} name
 * @return {Function}
 */

function createClass (name) {
  return new Function(
    'return function ' + _.classify(name) +
    ' (options) { this._init(options) }'
  )()
}

/**
 * Plugin system
 *
 * @param {Object} plugin
 */

exports.use = function (plugin) {
  /* istanbul ignore if */
  if (plugin.installed) {
    return
  }
  // additional parameters
  var args = _.toArray(arguments, 1)
  args.unshift(this)
  if (typeof plugin.install === 'function') {
    plugin.install.apply(plugin, args)
  } else {
    plugin.apply(null, args)
  }
  plugin.installed = true
  return this
}

/**
 * Apply a global mixin by merging it into the default
 * options.
 */

exports.mixin = function (mixin) {
  var Vue = _.Vue
  Vue.options = _.mergeOptions(Vue.options, mixin)
}

/**
 * Create asset registration methods with the following
 * signature:
 *
 * @param {String} id
 * @param {*} definition
 */

config._assetTypes.forEach(function (type) {
  exports[type] = function (id, definition) {
    if (!definition) {
      return this.options[type + 's'][id]
    } else {
      /* istanbul ignore if */
      if (process.env.NODE_ENV !== 'production') {
        if (type === 'component' && _.commonTagRE.test(id)) {
          _.warn(
            'Do not use built-in HTML elements as component ' +
            'id: ' + id
          )
        }
      }
      if (
        type === 'component' &&
        _.isPlainObject(definition)
      ) {
        definition.name = id
        definition = _.Vue.extend(definition)
      }
      this.options[type + 's'][id] = definition
      return definition
    }
  }
})

}).call(this,require('_process'))

},{"../compiler":63,"../config":65,"../directives/internal":72,"../fragment/factory":94,"../parsers/directive":104,"../parsers/expression":105,"../parsers/path":106,"../parsers/template":107,"../parsers/text":108,"../util":116,"_process":41}],58:[function(require,module,exports){
(function (process){
var _ = require('../util')
var compiler = require('../compiler')

/**
 * Set instance target element and kick off the compilation
 * process. The passed in `el` can be a selector string, an
 * existing Element, or a DocumentFragment (for block
 * instances).
 *
 * @param {Element|DocumentFragment|string} el
 * @public
 */

exports.$mount = function (el) {
  if (this._isCompiled) {
    process.env.NODE_ENV !== 'production' && _.warn(
      '$mount() should be called only once.'
    )
    return
  }
  el = _.query(el)
  if (!el) {
    el = document.createElement('div')
  }
  this._compile(el)
  this._initDOMHooks()
  if (_.inDoc(this.$el)) {
    this._callHook('attached')
    ready.call(this)
  } else {
    this.$once('hook:attached', ready)
  }
  return this
}

/**
 * Mark an instance as ready.
 */

function ready () {
  this._isAttached = true
  this._isReady = true
  this._callHook('ready')
}

/**
 * Teardown the instance, simply delegate to the internal
 * _destroy.
 */

exports.$destroy = function (remove, deferCleanup) {
  this._destroy(remove, deferCleanup)
}

/**
 * Partially compile a piece of DOM and return a
 * decompile function.
 *
 * @param {Element|DocumentFragment} el
 * @param {Vue} [host]
 * @return {Function}
 */

exports.$compile = function (el, host, scope, frag) {
  return compiler.compile(el, this.$options, true)(
    this, el, host, scope, frag
  )
}

}).call(this,require('_process'))

},{"../compiler":63,"../util":116,"_process":41}],59:[function(require,module,exports){
(function (process){
var _ = require('./util')
var config = require('./config')

// we have two separate queues: one for directive updates
// and one for user watcher registered via $watch().
// we want to guarantee directive updates to be called
// before user watchers so that when user watchers are
// triggered, the DOM would have already been in updated
// state.
var queue = []
var userQueue = []
var has = {}
var circular = {}
var waiting = false
var internalQueueDepleted = false

/**
 * Reset the batcher's state.
 */

function resetBatcherState () {
  queue = []
  userQueue = []
  has = {}
  circular = {}
  waiting = internalQueueDepleted = false
}

/**
 * Flush both queues and run the watchers.
 */

function flushBatcherQueue () {
  runBatcherQueue(queue)
  internalQueueDepleted = true
  runBatcherQueue(userQueue)
  // dev tool hook
  /* istanbul ignore if */
  if (process.env.NODE_ENV !== 'production') {
    if (_.inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__) {
      window.__VUE_DEVTOOLS_GLOBAL_HOOK__.emit('flush')
    }
  }
  resetBatcherState()
}

/**
 * Run the watchers in a single queue.
 *
 * @param {Array} queue
 */

function runBatcherQueue (queue) {
  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (var i = 0; i < queue.length; i++) {
    var watcher = queue[i]
    var id = watcher.id
    has[id] = null
    watcher.run()
    // in dev build, check and stop circular updates.
    if (process.env.NODE_ENV !== 'production' && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1
      if (circular[id] > config._maxUpdateCount) {
        queue.splice(has[id], 1)
        _.warn(
          'You may have an infinite update loop for watcher ' +
          'with expression: ' + watcher.expression
        )
      }
    }
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 *
 * @param {Watcher} watcher
 *   properties:
 *   - {Number} id
 *   - {Function} run
 */

exports.push = function (watcher) {
  var id = watcher.id
  if (has[id] == null) {
    // if an internal watcher is pushed, but the internal
    // queue is already depleted, we run it immediately.
    if (internalQueueDepleted && !watcher.user) {
      watcher.run()
      return
    }
    // push watcher into appropriate queue
    var q = watcher.user ? userQueue : queue
    has[id] = q.length
    q.push(watcher)
    // queue the flush
    if (!waiting) {
      waiting = true
      _.nextTick(flushBatcherQueue)
    }
  }
}

}).call(this,require('_process'))

},{"./config":65,"./util":116,"_process":41}],60:[function(require,module,exports){
/**
 * A doubly linked list-based Least Recently Used (LRU)
 * cache. Will keep most recently used items while
 * discarding least recently used items when its limit is
 * reached. This is a bare-bone version of
 * Rasmus Andersson's js-lru:
 *
 *   https://github.com/rsms/js-lru
 *
 * @param {Number} limit
 * @constructor
 */

function Cache (limit) {
  this.size = 0
  this.limit = limit
  this.head = this.tail = undefined
  this._keymap = Object.create(null)
}

var p = Cache.prototype

/**
 * Put <value> into the cache associated with <key>.
 * Returns the entry which was removed to make room for
 * the new entry. Otherwise undefined is returned.
 * (i.e. if there was enough room already).
 *
 * @param {String} key
 * @param {*} value
 * @return {Entry|undefined}
 */

p.put = function (key, value) {
  var entry = {
    key: key,
    value: value
  }
  this._keymap[key] = entry
  if (this.tail) {
    this.tail.newer = entry
    entry.older = this.tail
  } else {
    this.head = entry
  }
  this.tail = entry
  if (this.size === this.limit) {
    return this.shift()
  } else {
    this.size++
  }
}

/**
 * Purge the least recently used (oldest) entry from the
 * cache. Returns the removed entry or undefined if the
 * cache was empty.
 */

p.shift = function () {
  var entry = this.head
  if (entry) {
    this.head = this.head.newer
    this.head.older = undefined
    entry.newer = entry.older = undefined
    this._keymap[entry.key] = undefined
  }
  return entry
}

/**
 * Get and register recent use of <key>. Returns the value
 * associated with <key> or undefined if not in cache.
 *
 * @param {String} key
 * @param {Boolean} returnEntry
 * @return {Entry|*}
 */

p.get = function (key, returnEntry) {
  var entry = this._keymap[key]
  if (entry === undefined) return
  if (entry === this.tail) {
    return returnEntry
      ? entry
      : entry.value
  }
  // HEAD--------------TAIL
  //   <.older   .newer>
  //  <--- add direction --
  //   A  B  C  <D>  E
  if (entry.newer) {
    if (entry === this.head) {
      this.head = entry.newer
    }
    entry.newer.older = entry.older // C <-- E.
  }
  if (entry.older) {
    entry.older.newer = entry.newer // C. --> E
  }
  entry.newer = undefined // D --x
  entry.older = this.tail // D. --> E
  if (this.tail) {
    this.tail.newer = entry // E. <-- D
  }
  this.tail = entry
  return returnEntry
    ? entry
    : entry.value
}

module.exports = Cache

},{}],61:[function(require,module,exports){
(function (process){
var _ = require('../util')
var dirParser = require('../parsers/directive')
var propDef = require('../directives/internal/prop')
var propBindingModes = require('../config')._propBindingModes
var empty = {}

// regexes
var identRE = require('../parsers/path').identRE
var settablePathRE = /^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\[[^\[\]]+\])*$/

/**
 * Compile props on a root element and return
 * a props link function.
 *
 * @param {Element|DocumentFragment} el
 * @param {Array} propOptions
 * @return {Function} propsLinkFn
 */

module.exports = function compileProps (el, propOptions) {
  var props = []
  var names = Object.keys(propOptions)
  var i = names.length
  var options, name, attr, value, path, parsed, prop
  while (i--) {
    name = names[i]
    options = propOptions[name] || empty

    if (process.env.NODE_ENV !== 'production' && name === '$data') {
      _.warn('Do not use $data as prop.')
      continue
    }

    // props could contain dashes, which will be
    // interpreted as minus calculations by the parser
    // so we need to camelize the path here
    path = _.camelize(name)
    if (!identRE.test(path)) {
      process.env.NODE_ENV !== 'production' && _.warn(
        'Invalid prop key: "' + name + '". Prop keys ' +
        'must be valid identifiers.'
      )
      continue
    }

    prop = {
      name: name,
      path: path,
      options: options,
      mode: propBindingModes.ONE_WAY,
      raw: null
    }

    attr = _.hyphenate(name)
    // first check dynamic version
    if ((value = _.getBindAttr(el, attr)) === null) {
      if ((value = _.getBindAttr(el, attr + '.sync')) !== null) {
        prop.mode = propBindingModes.TWO_WAY
      } else if ((value = _.getBindAttr(el, attr + '.once')) !== null) {
        prop.mode = propBindingModes.ONE_TIME
      }
    }
    if (value !== null) {
      // has dynamic binding!
      prop.raw = value
      parsed = dirParser.parse(value)
      value = parsed.expression
      prop.filters = parsed.filters
      // check binding type
      if (_.isLiteral(value)) {
        // for expressions containing literal numbers and
        // booleans, there's no need to setup a prop binding,
        // so we can optimize them as a one-time set.
        prop.optimizedLiteral = true
      } else {
        prop.dynamic = true
        // check non-settable path for two-way bindings
        if (process.env.NODE_ENV !== 'production' &&
            prop.mode === propBindingModes.TWO_WAY &&
            !settablePathRE.test(value)) {
          prop.mode = propBindingModes.ONE_WAY
          _.warn(
            'Cannot bind two-way prop with non-settable ' +
            'parent path: ' + value
          )
        }
      }
      prop.parentPath = value

      // warn required two-way
      if (
        process.env.NODE_ENV !== 'production' &&
        options.twoWay &&
        prop.mode !== propBindingModes.TWO_WAY
      ) {
        _.warn(
          'Prop "' + name + '" expects a two-way binding type.'
        )
      }
    } else if ((value = _.attr(el, attr)) !== null) {
      // has literal binding!
      prop.raw = value
    } else if (options.required) {
      // warn missing required
      process.env.NODE_ENV !== 'production' && _.warn(
        'Missing required prop: ' + name
      )
    }
    // push prop
    props.push(prop)
  }
  return makePropsLinkFn(props)
}

/**
 * Build a function that applies props to a vm.
 *
 * @param {Array} props
 * @return {Function} propsLinkFn
 */

function makePropsLinkFn (props) {
  return function propsLinkFn (vm, scope) {
    // store resolved props info
    vm._props = {}
    var i = props.length
    var prop, path, options, value, raw
    while (i--) {
      prop = props[i]
      raw = prop.raw
      path = prop.path
      options = prop.options
      vm._props[path] = prop
      if (raw === null) {
        // initialize absent prop
        _.initProp(vm, prop, getDefault(vm, options))
      } else if (prop.dynamic) {
        // dynamic prop
        if (vm._context) {
          if (prop.mode === propBindingModes.ONE_TIME) {
            // one time binding
            value = (scope || vm._context).$get(prop.parentPath)
            _.initProp(vm, prop, value)
          } else {
            // dynamic binding
            vm._bindDir({
              name: 'prop',
              def: propDef,
              prop: prop
            }, null, null, scope) // el, host, scope
          }
        } else {
          process.env.NODE_ENV !== 'production' && _.warn(
            'Cannot bind dynamic prop on a root instance' +
            ' with no parent: ' + prop.name + '="' +
            raw + '"'
          )
        }
      } else if (prop.optimizedLiteral) {
        // optimized literal, cast it and just set once
        var stripped = _.stripQuotes(raw)
        value = stripped === raw
          ? _.toBoolean(_.toNumber(raw))
          : stripped
        _.initProp(vm, prop, value)
      } else {
        // string literal, but we need to cater for
        // Boolean props with no value
        value = options.type === Boolean && raw === ''
          ? true
          : raw
        _.initProp(vm, prop, value)
      }
    }
  }
}

/**
 * Get the default value of a prop.
 *
 * @param {Vue} vm
 * @param {Object} options
 * @return {*}
 */

function getDefault (vm, options) {
  // no default, return undefined
  if (!options.hasOwnProperty('default')) {
    // absent boolean value defaults to false
    return options.type === Boolean
      ? false
      : undefined
  }
  var def = options.default
  // warn against non-factory defaults for Object & Array
  if (_.isObject(def)) {
    process.env.NODE_ENV !== 'production' && _.warn(
      'Object/Array as default prop values will be shared ' +
      'across multiple instances. Use a factory function ' +
      'to return the default value instead.'
    )
  }
  // call factory function for non-Function types
  return typeof def === 'function' && options.type !== Function
    ? def.call(vm)
    : def
}

}).call(this,require('_process'))

},{"../config":65,"../directives/internal/prop":73,"../parsers/directive":104,"../parsers/path":106,"../util":116,"_process":41}],62:[function(require,module,exports){
(function (process){
var _ = require('../util')
var publicDirectives = require('../directives/public')
var internalDirectives = require('../directives/internal')
var compileProps = require('./compile-props')
var textParser = require('../parsers/text')
var dirParser = require('../parsers/directive')
var templateParser = require('../parsers/template')
var resolveAsset = _.resolveAsset

// special binding prefixes
var bindRE = /^v-bind:|^:/
var onRE = /^v-on:|^@/
var argRE = /:(.*)$/
var modifierRE = /\.[^\.]+/g
var transitionRE = /^(v-bind:|:)?transition$/

// terminal directives
var terminalDirectives = [
  'for',
  'if'
]

// default directive priority
var DEFAULT_PRIORITY = 1000

/**
 * Compile a template and return a reusable composite link
 * function, which recursively contains more link functions
 * inside. This top level compile function would normally
 * be called on instance root nodes, but can also be used
 * for partial compilation if the partial argument is true.
 *
 * The returned composite link function, when called, will
 * return an unlink function that tearsdown all directives
 * created during the linking phase.
 *
 * @param {Element|DocumentFragment} el
 * @param {Object} options
 * @param {Boolean} partial
 * @return {Function}
 */

exports.compile = function (el, options, partial) {
  // link function for the node itself.
  var nodeLinkFn = partial || !options._asComponent
    ? compileNode(el, options)
    : null
  // link function for the childNodes
  var childLinkFn =
    !(nodeLinkFn && nodeLinkFn.terminal) &&
    el.tagName !== 'SCRIPT' &&
    el.hasChildNodes()
      ? compileNodeList(el.childNodes, options)
      : null

  /**
   * A composite linker function to be called on a already
   * compiled piece of DOM, which instantiates all directive
   * instances.
   *
   * @param {Vue} vm
   * @param {Element|DocumentFragment} el
   * @param {Vue} [host] - host vm of transcluded content
   * @param {Object} [scope] - v-for scope
   * @param {Fragment} [frag] - link context fragment
   * @return {Function|undefined}
   */

  return function compositeLinkFn (vm, el, host, scope, frag) {
    // cache childNodes before linking parent, fix #657
    var childNodes = _.toArray(el.childNodes)
    // link
    var dirs = linkAndCapture(function compositeLinkCapturer () {
      if (nodeLinkFn) nodeLinkFn(vm, el, host, scope, frag)
      if (childLinkFn) childLinkFn(vm, childNodes, host, scope, frag)
    }, vm)
    return makeUnlinkFn(vm, dirs)
  }
}

/**
 * Apply a linker to a vm/element pair and capture the
 * directives created during the process.
 *
 * @param {Function} linker
 * @param {Vue} vm
 */

function linkAndCapture (linker, vm) {
  var originalDirCount = vm._directives.length
  linker()
  var dirs = vm._directives.slice(originalDirCount)
  dirs.sort(directiveComparator)
  for (var i = 0, l = dirs.length; i < l; i++) {
    dirs[i]._bind()
  }
  return dirs
}

/**
 * Directive priority sort comparator
 *
 * @param {Object} a
 * @param {Object} b
 */

function directiveComparator (a, b) {
  a = a.descriptor.def.priority || DEFAULT_PRIORITY
  b = b.descriptor.def.priority || DEFAULT_PRIORITY
  return a > b ? -1 : a === b ? 0 : 1
}

/**
 * Linker functions return an unlink function that
 * tearsdown all directives instances generated during
 * the process.
 *
 * We create unlink functions with only the necessary
 * information to avoid retaining additional closures.
 *
 * @param {Vue} vm
 * @param {Array} dirs
 * @param {Vue} [context]
 * @param {Array} [contextDirs]
 * @return {Function}
 */

function makeUnlinkFn (vm, dirs, context, contextDirs) {
  return function unlink (destroying) {
    teardownDirs(vm, dirs, destroying)
    if (context && contextDirs) {
      teardownDirs(context, contextDirs)
    }
  }
}

/**
 * Teardown partial linked directives.
 *
 * @param {Vue} vm
 * @param {Array} dirs
 * @param {Boolean} destroying
 */

function teardownDirs (vm, dirs, destroying) {
  var i = dirs.length
  while (i--) {
    dirs[i]._teardown()
    if (!destroying) {
      vm._directives.$remove(dirs[i])
    }
  }
}

/**
 * Compile link props on an instance.
 *
 * @param {Vue} vm
 * @param {Element} el
 * @param {Object} props
 * @param {Object} [scope]
 * @return {Function}
 */

exports.compileAndLinkProps = function (vm, el, props, scope) {
  var propsLinkFn = compileProps(el, props)
  var propDirs = linkAndCapture(function () {
    propsLinkFn(vm, scope)
  }, vm)
  return makeUnlinkFn(vm, propDirs)
}

/**
 * Compile the root element of an instance.
 *
 * 1. attrs on context container (context scope)
 * 2. attrs on the component template root node, if
 *    replace:true (child scope)
 *
 * If this is a fragment instance, we only need to compile 1.
 *
 * @param {Vue} vm
 * @param {Element} el
 * @param {Object} options
 * @param {Object} contextOptions
 * @return {Function}
 */

exports.compileRoot = function (el, options, contextOptions) {
  var containerAttrs = options._containerAttrs
  var replacerAttrs = options._replacerAttrs
  var contextLinkFn, replacerLinkFn

  // only need to compile other attributes for
  // non-fragment instances
  if (el.nodeType !== 11) {
    // for components, container and replacer need to be
    // compiled separately and linked in different scopes.
    if (options._asComponent) {
      // 2. container attributes
      if (containerAttrs && contextOptions) {
        contextLinkFn = compileDirectives(containerAttrs, contextOptions)
      }
      if (replacerAttrs) {
        // 3. replacer attributes
        replacerLinkFn = compileDirectives(replacerAttrs, options)
      }
    } else {
      // non-component, just compile as a normal element.
      replacerLinkFn = compileDirectives(el.attributes, options)
    }
  } else if (process.env.NODE_ENV !== 'production' && containerAttrs) {
    // warn container directives for fragment instances
    var names = containerAttrs
      .filter(function (attr) {
        // allow vue-loader/vueify scoped css attributes
        return attr.name.indexOf('_v-') < 0 &&
          // allow event listeners
          !onRE.test(attr.name) &&
          // allow slots
          attr.name !== 'slot'
      })
      .map(function (attr) {
        return '"' + attr.name + '"'
      })
    if (names.length) {
      var plural = names.length > 1
      _.warn(
        'Attribute' + (plural ? 's ' : ' ') + names.join(', ') +
        (plural ? ' are' : ' is') + ' ignored on component ' +
        '<' + options.el.tagName.toLowerCase() + '> because ' +
        'the component is a fragment instance: ' +
        'http://vuejs.org/guide/components.html#Fragment_Instance'
      )
    }
  }

  return function rootLinkFn (vm, el, scope) {
    // link context scope dirs
    var context = vm._context
    var contextDirs
    if (context && contextLinkFn) {
      contextDirs = linkAndCapture(function () {
        contextLinkFn(context, el, null, scope)
      }, context)
    }

    // link self
    var selfDirs = linkAndCapture(function () {
      if (replacerLinkFn) replacerLinkFn(vm, el)
    }, vm)

    // return the unlink function that tearsdown context
    // container directives.
    return makeUnlinkFn(vm, selfDirs, context, contextDirs)
  }
}

/**
 * Compile a node and return a nodeLinkFn based on the
 * node type.
 *
 * @param {Node} node
 * @param {Object} options
 * @return {Function|null}
 */

function compileNode (node, options) {
  var type = node.nodeType
  if (type === 1 && node.tagName !== 'SCRIPT') {
    return compileElement(node, options)
  } else if (type === 3 && node.data.trim()) {
    return compileTextNode(node, options)
  } else {
    return null
  }
}

/**
 * Compile an element and return a nodeLinkFn.
 *
 * @param {Element} el
 * @param {Object} options
 * @return {Function|null}
 */

function compileElement (el, options) {
  // preprocess textareas.
  // textarea treats its text content as the initial value.
  // just bind it as an attr directive for value.
  if (el.tagName === 'TEXTAREA') {
    var tokens = textParser.parse(el.value)
    if (tokens) {
      el.setAttribute(':value', textParser.tokensToExp(tokens))
      el.value = ''
    }
  }
  var linkFn
  var hasAttrs = el.hasAttributes()
  // check terminal directives (for & if)
  if (hasAttrs) {
    linkFn = checkTerminalDirectives(el, options)
  }
  // check element directives
  if (!linkFn) {
    linkFn = checkElementDirectives(el, options)
  }
  // check component
  if (!linkFn) {
    linkFn = checkComponent(el, options)
  }
  // normal directives
  if (!linkFn && hasAttrs) {
    linkFn = compileDirectives(el.attributes, options)
  }
  return linkFn
}

/**
 * Compile a textNode and return a nodeLinkFn.
 *
 * @param {TextNode} node
 * @param {Object} options
 * @return {Function|null} textNodeLinkFn
 */

function compileTextNode (node, options) {
  var tokens = textParser.parse(node.data)
  if (!tokens) {
    return null
  }
  var frag = document.createDocumentFragment()
  var el, token
  for (var i = 0, l = tokens.length; i < l; i++) {
    token = tokens[i]
    el = token.tag
      ? processTextToken(token, options)
      : document.createTextNode(token.value)
    frag.appendChild(el)
  }
  return makeTextNodeLinkFn(tokens, frag, options)
}

/**
 * Process a single text token.
 *
 * @param {Object} token
 * @param {Object} options
 * @return {Node}
 */

function processTextToken (token, options) {
  var el
  if (token.oneTime) {
    el = document.createTextNode(token.value)
  } else {
    if (token.html) {
      el = document.createComment('v-html')
      setTokenType('html')
    } else {
      // IE will clean up empty textNodes during
      // frag.cloneNode(true), so we have to give it
      // something here...
      el = document.createTextNode(' ')
      setTokenType('text')
    }
  }
  function setTokenType (type) {
    if (token.descriptor) return
    var parsed = dirParser.parse(token.value)
    token.descriptor = {
      name: type,
      def: publicDirectives[type],
      expression: parsed.expression,
      filters: parsed.filters
    }
  }
  return el
}

/**
 * Build a function that processes a textNode.
 *
 * @param {Array<Object>} tokens
 * @param {DocumentFragment} frag
 */

function makeTextNodeLinkFn (tokens, frag) {
  return function textNodeLinkFn (vm, el, host, scope) {
    var fragClone = frag.cloneNode(true)
    var childNodes = _.toArray(fragClone.childNodes)
    var token, value, node
    for (var i = 0, l = tokens.length; i < l; i++) {
      token = tokens[i]
      value = token.value
      if (token.tag) {
        node = childNodes[i]
        if (token.oneTime) {
          value = (scope || vm).$eval(value)
          if (token.html) {
            _.replace(node, templateParser.parse(value, true))
          } else {
            node.data = value
          }
        } else {
          vm._bindDir(token.descriptor, node, host, scope)
        }
      }
    }
    _.replace(el, fragClone)
  }
}

/**
 * Compile a node list and return a childLinkFn.
 *
 * @param {NodeList} nodeList
 * @param {Object} options
 * @return {Function|undefined}
 */

function compileNodeList (nodeList, options) {
  var linkFns = []
  var nodeLinkFn, childLinkFn, node
  for (var i = 0, l = nodeList.length; i < l; i++) {
    node = nodeList[i]
    nodeLinkFn = compileNode(node, options)
    childLinkFn =
      !(nodeLinkFn && nodeLinkFn.terminal) &&
      node.tagName !== 'SCRIPT' &&
      node.hasChildNodes()
        ? compileNodeList(node.childNodes, options)
        : null
    linkFns.push(nodeLinkFn, childLinkFn)
  }
  return linkFns.length
    ? makeChildLinkFn(linkFns)
    : null
}

/**
 * Make a child link function for a node's childNodes.
 *
 * @param {Array<Function>} linkFns
 * @return {Function} childLinkFn
 */

function makeChildLinkFn (linkFns) {
  return function childLinkFn (vm, nodes, host, scope, frag) {
    var node, nodeLinkFn, childrenLinkFn
    for (var i = 0, n = 0, l = linkFns.length; i < l; n++) {
      node = nodes[n]
      nodeLinkFn = linkFns[i++]
      childrenLinkFn = linkFns[i++]
      // cache childNodes before linking parent, fix #657
      var childNodes = _.toArray(node.childNodes)
      if (nodeLinkFn) {
        nodeLinkFn(vm, node, host, scope, frag)
      }
      if (childrenLinkFn) {
        childrenLinkFn(vm, childNodes, host, scope, frag)
      }
    }
  }
}

/**
 * Check for element directives (custom elements that should
 * be resovled as terminal directives).
 *
 * @param {Element} el
 * @param {Object} options
 */

function checkElementDirectives (el, options) {
  var tag = el.tagName.toLowerCase()
  if (_.commonTagRE.test(tag)) return
  var def = resolveAsset(options, 'elementDirectives', tag)
  if (def) {
    return makeTerminalNodeLinkFn(el, tag, '', options, def)
  }
}

/**
 * Check if an element is a component. If yes, return
 * a component link function.
 *
 * @param {Element} el
 * @param {Object} options
 * @return {Function|undefined}
 */

function checkComponent (el, options) {
  var component = _.checkComponent(el, options)
  if (component) {
    var ref = _.findRef(el)
    var descriptor = {
      name: 'component',
      ref: ref,
      expression: component.id,
      def: internalDirectives.component,
      modifiers: {
        literal: !component.dynamic
      }
    }
    var componentLinkFn = function (vm, el, host, scope, frag) {
      if (ref) {
        _.defineReactive((scope || vm).$refs, ref, null)
      }
      vm._bindDir(descriptor, el, host, scope, frag)
    }
    componentLinkFn.terminal = true
    return componentLinkFn
  }
}

/**
 * Check an element for terminal directives in fixed order.
 * If it finds one, return a terminal link function.
 *
 * @param {Element} el
 * @param {Object} options
 * @return {Function} terminalLinkFn
 */

function checkTerminalDirectives (el, options) {
  // skip v-pre
  if (_.attr(el, 'v-pre') !== null) {
    return skip
  }
  // skip v-else block, but only if following v-if
  if (el.hasAttribute('v-else')) {
    var prev = el.previousElementSibling
    if (prev && prev.hasAttribute('v-if')) {
      return skip
    }
  }
  var value, dirName
  for (var i = 0, l = terminalDirectives.length; i < l; i++) {
    dirName = terminalDirectives[i]
    /* eslint-disable no-cond-assign */
    if (value = el.getAttribute('v-' + dirName)) {
      return makeTerminalNodeLinkFn(el, dirName, value, options)
    }
    /* eslint-enable no-cond-assign */
  }
}

function skip () {}
skip.terminal = true

/**
 * Build a node link function for a terminal directive.
 * A terminal link function terminates the current
 * compilation recursion and handles compilation of the
 * subtree in the directive.
 *
 * @param {Element} el
 * @param {String} dirName
 * @param {String} value
 * @param {Object} options
 * @param {Object} [def]
 * @return {Function} terminalLinkFn
 */

function makeTerminalNodeLinkFn (el, dirName, value, options, def) {
  var parsed = dirParser.parse(value)
  var descriptor = {
    name: dirName,
    expression: parsed.expression,
    filters: parsed.filters,
    raw: value,
    // either an element directive, or if/for
    def: def || publicDirectives[dirName]
  }
  // check ref for v-for and router-view
  if (dirName === 'for' || dirName === 'router-view') {
    descriptor.ref = _.findRef(el)
  }
  var fn = function terminalNodeLinkFn (vm, el, host, scope, frag) {
    if (descriptor.ref) {
      _.defineReactive((scope || vm).$refs, descriptor.ref, null)
    }
    vm._bindDir(descriptor, el, host, scope, frag)
  }
  fn.terminal = true
  return fn
}

/**
 * Compile the directives on an element and return a linker.
 *
 * @param {Array|NamedNodeMap} attrs
 * @param {Object} options
 * @return {Function}
 */

function compileDirectives (attrs, options) {
  var i = attrs.length
  var dirs = []
  var attr, name, value, rawName, rawValue, dirName, arg, modifiers, dirDef, tokens
  while (i--) {
    attr = attrs[i]
    name = rawName = attr.name
    value = rawValue = attr.value
    tokens = textParser.parse(value)
    // reset arg
    arg = null
    // check modifiers
    modifiers = parseModifiers(name)
    name = name.replace(modifierRE, '')

    // attribute interpolations
    if (tokens) {
      value = textParser.tokensToExp(tokens)
      arg = name
      pushDir('bind', publicDirectives.bind, true)
      // warn against mixing mustaches with v-bind
      if (process.env.NODE_ENV !== 'production') {
        if (name === 'class' && Array.prototype.some.call(attrs, function (attr) {
          return attr.name === ':class' || attr.name === 'v-bind:class'
        })) {
          _.warn(
            'class="' + rawValue + '": Do not mix mustache interpolation ' +
            'and v-bind for "class" on the same element. Use one or the other.'
          )
        }
      }
    } else

    // special attribute: transition
    if (transitionRE.test(name)) {
      modifiers.literal = !bindRE.test(name)
      pushDir('transition', internalDirectives.transition)
    } else

    // event handlers
    if (onRE.test(name)) {
      arg = name.replace(onRE, '')
      pushDir('on', publicDirectives.on)
    } else

    // attribute bindings
    if (bindRE.test(name)) {
      dirName = name.replace(bindRE, '')
      if (dirName === 'style' || dirName === 'class') {
        pushDir(dirName, internalDirectives[dirName])
      } else {
        arg = dirName
        pushDir('bind', publicDirectives.bind)
      }
    } else

    // normal directives
    if (name.indexOf('v-') === 0) {
      // check arg
      arg = (arg = name.match(argRE)) && arg[1]
      if (arg) {
        name = name.replace(argRE, '')
      }
      // extract directive name
      dirName = name.slice(2)

      // skip v-else (when used with v-show)
      if (dirName === 'else') {
        continue
      }

      dirDef = resolveAsset(options, 'directives', dirName)

      if (process.env.NODE_ENV !== 'production') {
        _.assertAsset(dirDef, 'directive', dirName)
      }

      if (dirDef) {
        pushDir(dirName, dirDef)
      }
    }
  }

  /**
   * Push a directive.
   *
   * @param {String} dirName
   * @param {Object|Function} def
   * @param {Boolean} [interp]
   */

  function pushDir (dirName, def, interp) {
    var parsed = dirParser.parse(value)
    dirs.push({
      name: dirName,
      attr: rawName,
      raw: rawValue,
      def: def,
      arg: arg,
      modifiers: modifiers,
      expression: parsed.expression,
      filters: parsed.filters,
      interp: interp
    })
  }

  if (dirs.length) {
    return makeNodeLinkFn(dirs)
  }
}

/**
 * Parse modifiers from directive attribute name.
 *
 * @param {String} name
 * @return {Object}
 */

function parseModifiers (name) {
  var res = Object.create(null)
  var match = name.match(modifierRE)
  if (match) {
    var i = match.length
    while (i--) {
      res[match[i].slice(1)] = true
    }
  }
  return res
}

/**
 * Build a link function for all directives on a single node.
 *
 * @param {Array} directives
 * @return {Function} directivesLinkFn
 */

function makeNodeLinkFn (directives) {
  return function nodeLinkFn (vm, el, host, scope, frag) {
    // reverse apply because it's sorted low to high
    var i = directives.length
    while (i--) {
      vm._bindDir(directives[i], el, host, scope, frag)
    }
  }
}

}).call(this,require('_process'))

},{"../directives/internal":72,"../directives/public":82,"../parsers/directive":104,"../parsers/template":107,"../parsers/text":108,"../util":116,"./compile-props":61,"_process":41}],63:[function(require,module,exports){
var _ = require('../util')

_.extend(exports, require('./compile'))
_.extend(exports, require('./transclude'))

},{"../util":116,"./compile":62,"./transclude":64}],64:[function(require,module,exports){
(function (process){
var _ = require('../util')
var templateParser = require('../parsers/template')
var specialCharRE = /[^\w\-:\.]/

/**
 * Process an element or a DocumentFragment based on a
 * instance option object. This allows us to transclude
 * a template node/fragment before the instance is created,
 * so the processed fragment can then be cloned and reused
 * in v-for.
 *
 * @param {Element} el
 * @param {Object} options
 * @return {Element|DocumentFragment}
 */

exports.transclude = function (el, options) {
  // extract container attributes to pass them down
  // to compiler, because they need to be compiled in
  // parent scope. we are mutating the options object here
  // assuming the same object will be used for compile
  // right after this.
  if (options) {
    options._containerAttrs = extractAttrs(el)
  }
  // for template tags, what we want is its content as
  // a documentFragment (for fragment instances)
  if (_.isTemplate(el)) {
    el = templateParser.parse(el)
  }
  if (options) {
    if (options._asComponent && !options.template) {
      options.template = '<slot></slot>'
    }
    if (options.template) {
      options._content = _.extractContent(el)
      el = transcludeTemplate(el, options)
    }
  }
  if (el instanceof DocumentFragment) {
    // anchors for fragment instance
    // passing in `persist: true` to avoid them being
    // discarded by IE during template cloning
    _.prepend(_.createAnchor('v-start', true), el)
    el.appendChild(_.createAnchor('v-end', true))
  }
  return el
}

/**
 * Process the template option.
 * If the replace option is true this will swap the $el.
 *
 * @param {Element} el
 * @param {Object} options
 * @return {Element|DocumentFragment}
 */

function transcludeTemplate (el, options) {
  var template = options.template
  var frag = templateParser.parse(template, true)
  if (frag) {
    var replacer = frag.firstChild
    var tag = replacer.tagName && replacer.tagName.toLowerCase()
    if (options.replace) {
      /* istanbul ignore if */
      if (el === document.body) {
        process.env.NODE_ENV !== 'production' && _.warn(
          'You are mounting an instance with a template to ' +
          '<body>. This will replace <body> entirely. You ' +
          'should probably use `replace: false` here.'
        )
      }
      // there are many cases where the instance must
      // become a fragment instance: basically anything that
      // can create more than 1 root nodes.
      if (
        // multi-children template
        frag.childNodes.length > 1 ||
        // non-element template
        replacer.nodeType !== 1 ||
        // single nested component
        tag === 'component' ||
        _.resolveAsset(options, 'components', tag) ||
        replacer.hasAttribute('is') ||
        replacer.hasAttribute(':is') ||
        replacer.hasAttribute('v-bind:is') ||
        // element directive
        _.resolveAsset(options, 'elementDirectives', tag) ||
        // for block
        replacer.hasAttribute('v-for') ||
        // if block
        replacer.hasAttribute('v-if')
      ) {
        return frag
      } else {
        options._replacerAttrs = extractAttrs(replacer)
        mergeAttrs(el, replacer)
        return replacer
      }
    } else {
      el.appendChild(frag)
      return el
    }
  } else {
    process.env.NODE_ENV !== 'production' && _.warn(
      'Invalid template option: ' + template
    )
  }
}

/**
 * Helper to extract a component container's attributes
 * into a plain object array.
 *
 * @param {Element} el
 * @return {Array}
 */

function extractAttrs (el) {
  if (el.nodeType === 1 && el.hasAttributes()) {
    return _.toArray(el.attributes)
  }
}

/**
 * Merge the attributes of two elements, and make sure
 * the class names are merged properly.
 *
 * @param {Element} from
 * @param {Element} to
 */

function mergeAttrs (from, to) {
  var attrs = from.attributes
  var i = attrs.length
  var name, value
  while (i--) {
    name = attrs[i].name
    value = attrs[i].value
    if (!to.hasAttribute(name) && !specialCharRE.test(name)) {
      to.setAttribute(name, value)
    } else if (name === 'class') {
      value = to.getAttribute(name) + ' ' + value
      to.setAttribute(name, value)
    }
  }
}

}).call(this,require('_process'))

},{"../parsers/template":107,"../util":116,"_process":41}],65:[function(require,module,exports){
module.exports = {

  /**
   * Whether to print debug messages.
   * Also enables stack trace for warnings.
   *
   * @type {Boolean}
   */

  debug: false,

  /**
   * Whether to suppress warnings.
   *
   * @type {Boolean}
   */

  silent: false,

  /**
   * Whether to use async rendering.
   */

  async: true,

  /**
   * Whether to warn against errors caught when evaluating
   * expressions.
   */

  warnExpressionErrors: true,

  /**
   * Internal flag to indicate the delimiters have been
   * changed.
   *
   * @type {Boolean}
   */

  _delimitersChanged: true,

  /**
   * List of asset types that a component can own.
   *
   * @type {Array}
   */

  _assetTypes: [
    'component',
    'directive',
    'elementDirective',
    'filter',
    'transition',
    'partial'
  ],

  /**
   * prop binding modes
   */

  _propBindingModes: {
    ONE_WAY: 0,
    TWO_WAY: 1,
    ONE_TIME: 2
  },

  /**
   * Max circular updates allowed in a batcher flush cycle.
   */

  _maxUpdateCount: 100

}

/**
 * Interpolation delimiters. Changing these would trigger
 * the text parser to re-compile the regular expressions.
 *
 * @type {Array<String>}
 */

var delimiters = ['{{', '}}']
var unsafeDelimiters = ['{{{', '}}}']
var textParser = require('./parsers/text')

Object.defineProperty(module.exports, 'delimiters', {
  get: function () {
    return delimiters
  },
  set: function (val) {
    delimiters = val
    textParser.compileRegex()
  }
})

Object.defineProperty(module.exports, 'unsafeDelimiters', {
  get: function () {
    return unsafeDelimiters
  },
  set: function (val) {
    unsafeDelimiters = val
    textParser.compileRegex()
  }
})

},{"./parsers/text":108}],66:[function(require,module,exports){
(function (process){
var _ = require('./util')
var Watcher = require('./watcher')
var expParser = require('./parsers/expression')
function noop () {}

/**
 * A directive links a DOM element with a piece of data,
 * which is the result of evaluating an expression.
 * It registers a watcher with the expression and calls
 * the DOM update function when a change is triggered.
 *
 * @param {String} name
 * @param {Node} el
 * @param {Vue} vm
 * @param {Object} descriptor
 *                 - {String} name
 *                 - {Object} def
 *                 - {String} expression
 *                 - {Array<Object>} [filters]
 *                 - {Boolean} literal
 *                 - {String} attr
 *                 - {String} raw
 * @param {Object} def - directive definition object
 * @param {Vue} [host] - transclusion host component
 * @param {Object} [scope] - v-for scope
 * @param {Fragment} [frag] - owner fragment
 * @constructor
 */

function Directive (descriptor, vm, el, host, scope, frag) {
  this.vm = vm
  this.el = el
  // copy descriptor properties
  this.descriptor = descriptor
  this.name = descriptor.name
  this.expression = descriptor.expression
  this.arg = descriptor.arg
  this.modifiers = descriptor.modifiers
  this.filters = descriptor.filters
  this.literal = this.modifiers && this.modifiers.literal
  // private
  this._locked = false
  this._bound = false
  this._listeners = null
  // link context
  this._host = host
  this._scope = scope
  this._frag = frag
  // store directives on node in dev mode
  if (process.env.NODE_ENV !== 'production' && this.el) {
    this.el._vue_directives = this.el._vue_directives || []
    this.el._vue_directives.push(this)
  }
}

/**
 * Initialize the directive, mixin definition properties,
 * setup the watcher, call definition bind() and update()
 * if present.
 *
 * @param {Object} def
 */

Directive.prototype._bind = function () {
  var name = this.name
  var descriptor = this.descriptor

  // remove attribute
  if (
    (name !== 'cloak' || this.vm._isCompiled) &&
    this.el && this.el.removeAttribute
  ) {
    var attr = descriptor.attr || ('v-' + name)
    this.el.removeAttribute(attr)
  }

  // copy def properties
  var def = descriptor.def
  if (typeof def === 'function') {
    this.update = def
  } else {
    _.extend(this, def)
  }

  // setup directive params
  this._setupParams()

  // initial bind
  if (this.bind) {
    this.bind()
  }

  if (this.literal) {
    this.update && this.update(descriptor.raw)
  } else if (
    (this.expression || this.modifiers) &&
    (this.update || this.twoWay) &&
    !this._checkStatement()
  ) {
    // wrapped updater for context
    var dir = this
    if (this.update) {
      this._update = function (val, oldVal) {
        if (!dir._locked) {
          dir.update(val, oldVal)
        }
      }
    } else {
      this._update = noop
    }
    var preProcess = this._preProcess
      ? _.bind(this._preProcess, this)
      : null
    var postProcess = this._postProcess
      ? _.bind(this._postProcess, this)
      : null
    var watcher = this._watcher = new Watcher(
      this.vm,
      this.expression,
      this._update, // callback
      {
        filters: this.filters,
        twoWay: this.twoWay,
        deep: this.deep,
        preProcess: preProcess,
        postProcess: postProcess,
        scope: this._scope
      }
    )
    // v-model with inital inline value need to sync back to
    // model instead of update to DOM on init. They would
    // set the afterBind hook to indicate that.
    if (this.afterBind) {
      this.afterBind()
    } else if (this.update) {
      this.update(watcher.value)
    }
  }
  this._bound = true
}

/**
 * Setup all param attributes, e.g. track-by,
 * transition-mode, etc...
 */

Directive.prototype._setupParams = function () {
  if (!this.params) {
    return
  }
  var params = this.params
  // swap the params array with a fresh object.
  this.params = Object.create(null)
  var i = params.length
  var key, val, mappedKey
  while (i--) {
    key = params[i]
    mappedKey = _.camelize(key)
    val = _.getBindAttr(this.el, key)
    if (val != null) {
      // dynamic
      this._setupParamWatcher(mappedKey, val)
    } else {
      // static
      val = _.attr(this.el, key)
      if (val != null) {
        this.params[mappedKey] = val === '' ? true : val
      }
    }
  }
}

/**
 * Setup a watcher for a dynamic param.
 *
 * @param {String} key
 * @param {String} expression
 */

Directive.prototype._setupParamWatcher = function (key, expression) {
  var self = this
  var called = false
  var unwatch = (this._scope || this.vm).$watch(expression, function (val, oldVal) {
    self.params[key] = val
    // since we are in immediate mode,
    // only call the param change callbacks if this is not the first update.
    if (called) {
      var cb = self.paramWatchers && self.paramWatchers[key]
      if (cb) {
        cb.call(self, val, oldVal)
      }
    } else {
      called = true
    }
  }, {
    immediate: true
  })
  ;(this._paramUnwatchFns || (this._paramUnwatchFns = [])).push(unwatch)
}

/**
 * Check if the directive is a function caller
 * and if the expression is a callable one. If both true,
 * we wrap up the expression and use it as the event
 * handler.
 *
 * e.g. on-click="a++"
 *
 * @return {Boolean}
 */

Directive.prototype._checkStatement = function () {
  var expression = this.expression
  if (
    expression && this.acceptStatement &&
    !expParser.isSimplePath(expression)
  ) {
    var fn = expParser.parse(expression).get
    var scope = this._scope || this.vm
    var handler = function () {
      fn.call(scope, scope)
    }
    if (this.filters) {
      handler = scope._applyFilters(handler, null, this.filters)
    }
    this.update(handler)
    return true
  }
}

/**
 * Set the corresponding value with the setter.
 * This should only be used in two-way directives
 * e.g. v-model.
 *
 * @param {*} value
 * @public
 */

Directive.prototype.set = function (value) {
  /* istanbul ignore else */
  if (this.twoWay) {
    this._withLock(function () {
      this._watcher.set(value)
    })
  } else if (process.env.NODE_ENV !== 'production') {
    _.warn(
      'Directive.set() can only be used inside twoWay' +
      'directives.'
    )
  }
}

/**
 * Execute a function while preventing that function from
 * triggering updates on this directive instance.
 *
 * @param {Function} fn
 */

Directive.prototype._withLock = function (fn) {
  var self = this
  self._locked = true
  fn.call(self)
  _.nextTick(function () {
    self._locked = false
  })
}

/**
 * Convenience method that attaches a DOM event listener
 * to the directive element and autometically tears it down
 * during unbind.
 *
 * @param {String} event
 * @param {Function} handler
 */

Directive.prototype.on = function (event, handler) {
  _.on(this.el, event, handler)
  ;(this._listeners || (this._listeners = []))
    .push([event, handler])
}

/**
 * Teardown the watcher and call unbind.
 */

Directive.prototype._teardown = function () {
  if (this._bound) {
    this._bound = false
    if (this.unbind) {
      this.unbind()
    }
    if (this._watcher) {
      this._watcher.teardown()
    }
    var listeners = this._listeners
    var i
    if (listeners) {
      i = listeners.length
      while (i--) {
        _.off(this.el, listeners[i][0], listeners[i][1])
      }
    }
    var unwatchFns = this._paramUnwatchFns
    if (unwatchFns) {
      i = unwatchFns.length
      while (i--) {
        unwatchFns[i]()
      }
    }
    if (process.env.NODE_ENV !== 'production' && this.el) {
      this.el._vue_directives.$remove(this)
    }
    this.vm = this.el = this._watcher = this._listeners = null
  }
}

module.exports = Directive

}).call(this,require('_process'))

},{"./parsers/expression":105,"./util":116,"./watcher":120,"_process":41}],67:[function(require,module,exports){
exports.slot = require('./slot')
exports.partial = require('./partial')

},{"./partial":68,"./slot":69}],68:[function(require,module,exports){
(function (process){
var _ = require('../../util')
var vIf = require('../public/if')
var FragmentFactory = require('../../fragment/factory')

module.exports = {

  priority: 1750,

  params: ['name'],

  // watch changes to name for dynamic partials
  paramWatchers: {
    name: function (value) {
      vIf.remove.call(this)
      if (value) {
        this.insert(value)
      }
    }
  },

  bind: function () {
    this.anchor = _.createAnchor('v-partial')
    _.replace(this.el, this.anchor)
    this.insert(this.params.name)
  },

  insert: function (id) {
    var partial = _.resolveAsset(this.vm.$options, 'partials', id)
    if (process.env.NODE_ENV !== 'production') {
      _.assertAsset(partial, 'partial', id)
    }
    if (partial) {
      this.factory = new FragmentFactory(this.vm, partial)
      vIf.insert.call(this)
    }
  },

  unbind: function () {
    if (this.frag) {
      this.frag.destroy()
    }
  }
}

}).call(this,require('_process'))

},{"../../fragment/factory":94,"../../util":116,"../public/if":81,"_process":41}],69:[function(require,module,exports){
var _ = require('../../util')
var templateParser = require('../../parsers/template')

// This is the elementDirective that handles <content>
// transclusions. It relies on the raw content of an
// instance being stored as `$options._content` during
// the transclude phase.

module.exports = {

  priority: 1750,

  params: ['name'],

  bind: function () {
    var host = this.vm
    var raw = host.$options._content
    var content
    if (!raw) {
      this.fallback()
      return
    }
    var context = host._context
    var slotName = this.params.name
    if (!slotName) {
      // Default content
      var self = this
      var compileDefaultContent = function () {
        self.compile(
          extractFragment(raw.childNodes, raw, true),
          context,
          host
        )
      }
      if (!host._isCompiled) {
        // defer until the end of instance compilation,
        // because the default outlet must wait until all
        // other possible outlets with selectors have picked
        // out their contents.
        host.$once('hook:compiled', compileDefaultContent)
      } else {
        compileDefaultContent()
      }
    } else {
      var selector = '[slot="' + slotName + '"]'
      var nodes = raw.querySelectorAll(selector)
      if (nodes.length) {
        content = extractFragment(nodes, raw)
        if (content.hasChildNodes()) {
          this.compile(content, context, host)
        } else {
          this.fallback()
        }
      } else {
        this.fallback()
      }
    }
  },

  fallback: function () {
    this.compile(_.extractContent(this.el, true), this.vm)
  },

  compile: function (content, context, host) {
    if (content && context) {
      var scope = host
        ? host._scope
        : this._scope
      this.unlink = context.$compile(
        content, host, scope, this._frag
      )
    }
    if (content) {
      _.replace(this.el, content)
    } else {
      _.remove(this.el)
    }
  },

  unbind: function () {
    if (this.unlink) {
      this.unlink()
    }
  }
}

/**
 * Extract qualified content nodes from a node list.
 *
 * @param {NodeList} nodes
 * @param {Element} parent
 * @param {Boolean} main
 * @return {DocumentFragment}
 */

function extractFragment (nodes, parent, main) {
  var frag = document.createDocumentFragment()
  for (var i = 0, l = nodes.length; i < l; i++) {
    var node = nodes[i]
    // if this is the main outlet, we want to skip all
    // previously selected nodes;
    // otherwise, we want to mark the node as selected.
    // clone the node so the original raw content remains
    // intact. this ensures proper re-compilation in cases
    // where the outlet is inside a conditional block
    if (main && !node.__v_selected) {
      append(node)
    } else if (!main && node.parentNode === parent) {
      node.__v_selected = true
      append(node)
    }
  }
  return frag

  function append (node) {
    if (_.isTemplate(node) &&
        !node.hasAttribute('v-if') &&
        !node.hasAttribute('v-for')) {
      node = templateParser.parse(node)
    }
    node = templateParser.clone(node)
    frag.appendChild(node)
  }
}

},{"../../parsers/template":107,"../../util":116}],70:[function(require,module,exports){
var _ = require('../../util')
var addClass = _.addClass
var removeClass = _.removeClass

module.exports = {

  deep: true,

  update: function (value) {
    if (value && typeof value === 'string') {
      this.handleObject(stringToObject(value))
    } else if (_.isPlainObject(value)) {
      this.handleObject(value)
    } else if (_.isArray(value)) {
      this.handleArray(value)
    } else {
      this.cleanup()
    }
  },

  handleObject: function (value) {
    this.cleanup(value)
    var keys = this.prevKeys = Object.keys(value)
    for (var i = 0, l = keys.length; i < l; i++) {
      var key = keys[i]
      if (value[key]) {
        addClass(this.el, key)
      } else {
        removeClass(this.el, key)
      }
    }
  },

  handleArray: function (value) {
    this.cleanup(value)
    for (var i = 0, l = value.length; i < l; i++) {
      if (value[i]) {
        addClass(this.el, value[i])
      }
    }
    this.prevKeys = value.slice()
  },

  cleanup: function (value) {
    if (this.prevKeys) {
      var i = this.prevKeys.length
      while (i--) {
        var key = this.prevKeys[i]
        if (key && (!value || !contains(value, key))) {
          removeClass(this.el, key)
        }
      }
    }
  }
}

function stringToObject (value) {
  var res = {}
  var keys = value.trim().split(/\s+/)
  var i = keys.length
  while (i--) {
    res[keys[i]] = true
  }
  return res
}

function contains (value, key) {
  return _.isArray(value)
    ? value.indexOf(key) > -1
    : value.hasOwnProperty(key)
}

},{"../../util":116}],71:[function(require,module,exports){
(function (process){
var _ = require('../../util')
var templateParser = require('../../parsers/template')

module.exports = {

  priority: 1500,

  params: [
    'keep-alive',
    'transition-mode',
    'inline-template'
  ],

  /**
   * Setup. Two possible usages:
   *
   * - static:
   *   <comp> or <div v-component="comp">
   *
   * - dynamic:
   *   <component :is="view">
   */

  bind: function () {
    if (!this.el.__vue__) {
      // keep-alive cache
      this.keepAlive = this.params.keepAlive
      if (this.keepAlive) {
        this.cache = {}
      }
      // check inline-template
      if (this.params.inlineTemplate) {
        // extract inline template as a DocumentFragment
        this.inlineTemplate = _.extractContent(this.el, true)
      }
      // component resolution related state
      this.pendingComponentCb =
      this.Component = null
      // transition related state
      this.pendingRemovals = 0
      this.pendingRemovalCb = null
      // create a ref anchor
      this.anchor = _.createAnchor('v-component')
      _.replace(this.el, this.anchor)
      // remove is attribute
      this.el.removeAttribute('is')
      // if static, build right now.
      if (this.literal) {
        this.setComponent(this.expression)
      }
    } else {
      process.env.NODE_ENV !== 'production' && _.warn(
        'cannot mount component "' + this.expression + '" ' +
        'on already mounted element: ' + this.el
      )
    }
  },

  /**
   * Public update, called by the watcher in the dynamic
   * literal scenario, e.g. <component :is="view">
   */

  update: function (value) {
    if (!this.literal) {
      this.setComponent(value)
    }
  },

  /**
   * Switch dynamic components. May resolve the component
   * asynchronously, and perform transition based on
   * specified transition mode. Accepts a few additional
   * arguments specifically for vue-router.
   *
   * The callback is called when the full transition is
   * finished.
   *
   * @param {String} value
   * @param {Function} [cb]
   */

  setComponent: function (value, cb) {
    this.invalidatePending()
    if (!value) {
      // just remove current
      this.unbuild(true)
      this.remove(this.childVM, cb)
      this.childVM = null
    } else {
      var self = this
      this.resolveComponent(value, function () {
        self.mountComponent(cb)
      })
    }
  },

  /**
   * Resolve the component constructor to use when creating
   * the child vm.
   */

  resolveComponent: function (id, cb) {
    var self = this
    this.pendingComponentCb = _.cancellable(function (Component) {
      self.ComponentName = Component.options.name || id
      self.Component = Component
      cb()
    })
    this.vm._resolveComponent(id, this.pendingComponentCb)
  },

  /**
   * Create a new instance using the current constructor and
   * replace the existing instance. This method doesn't care
   * whether the new component and the old one are actually
   * the same.
   *
   * @param {Function} [cb]
   */

  mountComponent: function (cb) {
    // actual mount
    this.unbuild(true)
    var self = this
    var activateHook = this.Component.options.activate
    var cached = this.getCached()
    var newComponent = this.build()
    if (activateHook && !cached) {
      this.waitingFor = newComponent
      activateHook.call(newComponent, function () {
        self.waitingFor = null
        self.transition(newComponent, cb)
      })
    } else {
      // update ref for kept-alive component
      if (cached) {
        newComponent._updateRef()
      }
      this.transition(newComponent, cb)
    }
  },

  /**
   * When the component changes or unbinds before an async
   * constructor is resolved, we need to invalidate its
   * pending callback.
   */

  invalidatePending: function () {
    if (this.pendingComponentCb) {
      this.pendingComponentCb.cancel()
      this.pendingComponentCb = null
    }
  },

  /**
   * Instantiate/insert a new child vm.
   * If keep alive and has cached instance, insert that
   * instance; otherwise build a new one and cache it.
   *
   * @param {Object} [extraOptions]
   * @return {Vue} - the created instance
   */

  build: function (extraOptions) {
    var cached = this.getCached()
    if (cached) {
      return cached
    }
    if (this.Component) {
      // default options
      var options = {
        name: this.ComponentName,
        el: templateParser.clone(this.el),
        template: this.inlineTemplate,
        // make sure to add the child with correct parent
        // if this is a transcluded component, its parent
        // should be the transclusion host.
        parent: this._host || this.vm,
        // if no inline-template, then the compiled
        // linker can be cached for better performance.
        _linkerCachable: !this.inlineTemplate,
        _ref: this.descriptor.ref,
        _asComponent: true,
        _isRouterView: this._isRouterView,
        // if this is a transcluded component, context
        // will be the common parent vm of this instance
        // and its host.
        _context: this.vm,
        // if this is inside an inline v-for, the scope
        // will be the intermediate scope created for this
        // repeat fragment. this is used for linking props
        // and container directives.
        _scope: this._scope,
        // pass in the owner fragment of this component.
        // this is necessary so that the fragment can keep
        // track of its contained components in order to
        // call attach/detach hooks for them.
        _frag: this._frag
      }
      // extra options
      // in 1.0.0 this is used by vue-router only
      /* istanbul ignore if */
      if (extraOptions) {
        _.extend(options, extraOptions)
      }
      var child = new this.Component(options)
      if (this.keepAlive) {
        this.cache[this.Component.cid] = child
      }
      /* istanbul ignore if */
      if (process.env.NODE_ENV !== 'production' &&
          this.el.hasAttribute('transition') &&
          child._isFragment) {
        _.warn(
          'Transitions will not work on a fragment instance. ' +
          'Template: ' + child.$options.template
        )
      }
      return child
    }
  },

  /**
   * Try to get a cached instance of the current component.
   *
   * @return {Vue|undefined}
   */

  getCached: function () {
    return this.keepAlive && this.cache[this.Component.cid]
  },

  /**
   * Teardown the current child, but defers cleanup so
   * that we can separate the destroy and removal steps.
   *
   * @param {Boolean} defer
   */

  unbuild: function (defer) {
    if (this.waitingFor) {
      this.waitingFor.$destroy()
      this.waitingFor = null
    }
    var child = this.childVM
    if (!child || this.keepAlive) {
      if (child) {
        // remove ref
        child._updateRef(true)
      }
      return
    }
    // the sole purpose of `deferCleanup` is so that we can
    // "deactivate" the vm right now and perform DOM removal
    // later.
    child.$destroy(false, defer)
  },

  /**
   * Remove current destroyed child and manually do
   * the cleanup after removal.
   *
   * @param {Function} cb
   */

  remove: function (child, cb) {
    var keepAlive = this.keepAlive
    if (child) {
      // we may have a component switch when a previous
      // component is still being transitioned out.
      // we want to trigger only one lastest insertion cb
      // when the existing transition finishes. (#1119)
      this.pendingRemovals++
      this.pendingRemovalCb = cb
      var self = this
      child.$remove(function () {
        self.pendingRemovals--
        if (!keepAlive) child._cleanup()
        if (!self.pendingRemovals && self.pendingRemovalCb) {
          self.pendingRemovalCb()
          self.pendingRemovalCb = null
        }
      })
    } else if (cb) {
      cb()
    }
  },

  /**
   * Actually swap the components, depending on the
   * transition mode. Defaults to simultaneous.
   *
   * @param {Vue} target
   * @param {Function} [cb]
   */

  transition: function (target, cb) {
    var self = this
    var current = this.childVM
    // for devtool inspection
    if (process.env.NODE_ENV !== 'production') {
      if (current) current._inactive = true
      target._inactive = false
    }
    this.childVM = target
    switch (self.params.transitionMode) {
      case 'in-out':
        target.$before(self.anchor, function () {
          self.remove(current, cb)
        })
        break
      case 'out-in':
        self.remove(current, function () {
          target.$before(self.anchor, cb)
        })
        break
      default:
        self.remove(current)
        target.$before(self.anchor, cb)
    }
  },

  /**
   * Unbind.
   */

  unbind: function () {
    this.invalidatePending()
    // Do not defer cleanup when unbinding
    this.unbuild()
    // destroy all keep-alive cached instances
    if (this.cache) {
      for (var key in this.cache) {
        this.cache[key].$destroy()
      }
      this.cache = null
    }
  }
}

}).call(this,require('_process'))

},{"../../parsers/template":107,"../../util":116,"_process":41}],72:[function(require,module,exports){
exports.style = require('./style')
exports['class'] = require('./class')
exports.component = require('./component')
exports.prop = require('./prop')
exports.transition = require('./transition')

},{"./class":70,"./component":71,"./prop":73,"./style":74,"./transition":75}],73:[function(require,module,exports){
// NOTE: the prop internal directive is compiled and linked
// during _initScope(), before the created hook is called.
// The purpose is to make the initial prop values available
// inside `created` hooks and `data` functions.

var _ = require('../../util')
var Watcher = require('../../watcher')
var bindingModes = require('../../config')._propBindingModes

module.exports = {

  bind: function () {

    var child = this.vm
    var parent = child._context
    // passed in from compiler directly
    var prop = this.descriptor.prop
    var childKey = prop.path
    var parentKey = prop.parentPath
    var twoWay = prop.mode === bindingModes.TWO_WAY

    var parentWatcher = this.parentWatcher = new Watcher(
      parent,
      parentKey,
      function (val) {
        if (_.assertProp(prop, val)) {
          child[childKey] = val
        }
      }, {
        twoWay: twoWay,
        filters: prop.filters,
        // important: props need to be observed on the
        // v-for scope if present
        scope: this._scope
      }
    )

    // set the child initial value.
    _.initProp(child, prop, parentWatcher.value)

    // setup two-way binding
    if (twoWay) {
      // important: defer the child watcher creation until
      // the created hook (after data observation)
      var self = this
      child.$once('hook:created', function () {
        self.childWatcher = new Watcher(
          child,
          childKey,
          function (val) {
            parentWatcher.set(val)
          }, {
            // ensure sync upward before parent sync down.
            // this is necessary in cases e.g. the child
            // mutates a prop array, then replaces it. (#1683)
            sync: true
          }
        )
      })
    }
  },

  unbind: function () {
    this.parentWatcher.teardown()
    if (this.childWatcher) {
      this.childWatcher.teardown()
    }
  }
}

},{"../../config":65,"../../util":116,"../../watcher":120}],74:[function(require,module,exports){
var _ = require('../../util')
var prefixes = ['-webkit-', '-moz-', '-ms-']
var camelPrefixes = ['Webkit', 'Moz', 'ms']
var importantRE = /!important;?$/
var testEl = null
var propCache = {}

module.exports = {

  deep: true,

  update: function (value) {
    if (typeof value === 'string') {
      this.el.style.cssText = value
    } else if (_.isArray(value)) {
      this.handleObject(value.reduce(_.extend, {}))
    } else {
      this.handleObject(value || {})
    }
  },

  handleObject: function (value) {
    // cache object styles so that only changed props
    // are actually updated.
    var cache = this.cache || (this.cache = {})
    var name, val
    for (name in cache) {
      if (!(name in value)) {
        this.handleSingle(name, null)
        delete cache[name]
      }
    }
    for (name in value) {
      val = value[name]
      if (val !== cache[name]) {
        cache[name] = val
        this.handleSingle(name, val)
      }
    }
  },

  handleSingle: function (prop, value) {
    prop = normalize(prop)
    if (!prop) return // unsupported prop
    // cast possible numbers/booleans into strings
    if (value != null) value += ''
    if (value) {
      var isImportant = importantRE.test(value)
        ? 'important'
        : ''
      if (isImportant) {
        value = value.replace(importantRE, '').trim()
      }
      this.el.style.setProperty(prop, value, isImportant)
    } else {
      this.el.style.removeProperty(prop)
    }
  }

}

/**
 * Normalize a CSS property name.
 * - cache result
 * - auto prefix
 * - camelCase -> dash-case
 *
 * @param {String} prop
 * @return {String}
 */

function normalize (prop) {
  if (propCache[prop]) {
    return propCache[prop]
  }
  var res = prefix(prop)
  propCache[prop] = propCache[res] = res
  return res
}

/**
 * Auto detect the appropriate prefix for a CSS property.
 * https://gist.github.com/paulirish/523692
 *
 * @param {String} prop
 * @return {String}
 */

function prefix (prop) {
  prop = _.hyphenate(prop)
  var camel = _.camelize(prop)
  var upper = camel.charAt(0).toUpperCase() + camel.slice(1)
  if (!testEl) {
    testEl = document.createElement('div')
  }
  if (camel in testEl.style) {
    return prop
  }
  var i = prefixes.length
  var prefixed
  while (i--) {
    prefixed = camelPrefixes[i] + upper
    if (prefixed in testEl.style) {
      return prefixes[i] + prop
    }
  }
}

},{"../../util":116}],75:[function(require,module,exports){
var _ = require('../../util')
var Transition = require('../../transition/transition')

module.exports = {

  priority: 1100,

  update: function (id, oldId) {
    var el = this.el
    // resolve on owner vm
    var hooks = _.resolveAsset(this.vm.$options, 'transitions', id)
    id = id || 'v'
    // apply on closest vm
    el.__v_trans = new Transition(el, id, hooks, this.el.__vue__ || this.vm)
    if (oldId) {
      _.removeClass(el, oldId + '-transition')
    }
    _.addClass(el, id + '-transition')
  }
}

},{"../../transition/transition":111,"../../util":116}],76:[function(require,module,exports){
(function (process){
var _ = require('../../util')

// xlink
var xlinkNS = 'http://www.w3.org/1999/xlink'
var xlinkRE = /^xlink:/

// these input element attributes should also set their
// corresponding properties
var inputProps = {
  value: 1,
  checked: 1,
  selected: 1
}

// these attributes should set a hidden property for
// binding v-model to object values
var modelProps = {
  value: '_value',
  'true-value': '_trueValue',
  'false-value': '_falseValue'
}

// check for attributes that prohibit interpolations
var disallowedInterpAttrRE = /^v-|^:|^@|^(is|transition|transition-mode|debounce|track-by|stagger|enter-stagger|leave-stagger)$/

module.exports = {

  priority: 850,

  bind: function () {
    var attr = this.arg
    var tag = this.el.tagName
    // should be deep watch on object mode
    if (!attr) {
      this.deep = true
    }
    // handle interpolation bindings
    if (this.descriptor.interp) {
      // only allow binding on native attributes
      if (
        disallowedInterpAttrRE.test(attr) ||
        (attr === 'name' && (tag === 'PARTIAL' || tag === 'SLOT'))
      ) {
        process.env.NODE_ENV !== 'production' && _.warn(
          attr + '="' + this.descriptor.raw + '": ' +
          'attribute interpolation is not allowed in Vue.js ' +
          'directives and special attributes.'
        )
        this.el.removeAttribute(attr)
        this.invalid = true
      }

      /* istanbul ignore if */
      if (process.env.NODE_ENV !== 'production') {
        var raw = attr + '="' + this.descriptor.raw + '": '
        // warn src
        if (attr === 'src') {
          _.warn(
            raw + 'interpolation in "src" attribute will cause ' +
            'a 404 request. Use v-bind:src instead.'
          )
        }

        // warn style
        if (attr === 'style') {
          _.warn(
            raw + 'interpolation in "style" attribute will cause ' +
            'the attribute to be discarded in Internet Explorer. ' +
            'Use v-bind:style instead.'
          )
        }
      }
    }
  },

  update: function (value) {
    if (this.invalid) {
      return
    }
    var attr = this.arg
    if (this.arg) {
      this.handleSingle(attr, value)
    } else {
      this.handleObject(value || {})
    }
  },

  // share object handler with v-bind:class
  handleObject: require('../internal/style').handleObject,

  handleSingle: function (attr, value) {
    if (inputProps[attr] && attr in this.el) {
      this.el[attr] = attr === 'value'
        ? (value || '') // IE9 will set input.value to "null" for null...
        : value
    }
    // set model props
    var modelProp = modelProps[attr]
    if (modelProp) {
      this.el[modelProp] = value
      // update v-model if present
      var model = this.el.__v_model
      if (model) {
        model.listener()
      }
    }
    // do not set value attribute for textarea
    if (attr === 'value' && this.el.tagName === 'TEXTAREA') {
      this.el.removeAttribute(attr)
      return
    }
    // update attribute
    if (value != null && value !== false) {
      if (xlinkRE.test(attr)) {
        this.el.setAttributeNS(xlinkNS, attr, value)
      } else {
        this.el.setAttribute(attr, value)
      }
    } else {
      this.el.removeAttribute(attr)
    }
  }
}

}).call(this,require('_process'))

},{"../../util":116,"../internal/style":74,"_process":41}],77:[function(require,module,exports){
module.exports = {
  bind: function () {
    var el = this.el
    this.vm.$once('hook:compiled', function () {
      el.removeAttribute('v-cloak')
    })
  }
}

},{}],78:[function(require,module,exports){
var _ = require('../../util')

module.exports = {

  priority: 1500,

  bind: function () {
    /* istanbul ignore if */
    if (!this.arg) {
      return
    }
    var id = this.id = _.camelize(this.arg)
    var refs = (this._scope || this.vm).$els
    if (refs.hasOwnProperty(id)) {
      refs[id] = this.el
    } else {
      _.defineReactive(refs, id, this.el)
    }
  },

  unbind: function () {
    var refs = (this._scope || this.vm).$els
    if (refs[this.id] === this.el) {
      refs[this.id] = null
    }
  }
}

},{"../../util":116}],79:[function(require,module,exports){
(function (process){
var _ = require('../../util')
var FragmentFactory = require('../../fragment/factory')
var isObject = _.isObject
var uid = 0

module.exports = {

  priority: 2000,

  params: [
    'track-by',
    'stagger',
    'enter-stagger',
    'leave-stagger'
  ],

  bind: function () {
    // support "item in items" syntax
    var inMatch = this.expression.match(/(.*) in (.*)/)
    if (inMatch) {
      var itMatch = inMatch[1].match(/\((.*),(.*)\)/)
      if (itMatch) {
        this.iterator = itMatch[1].trim()
        this.alias = itMatch[2].trim()
      } else {
        this.alias = inMatch[1].trim()
      }
      this.expression = inMatch[2]
    }

    if (!this.alias) {
      process.env.NODE_ENV !== 'production' && _.warn(
        'Alias is required in v-for.'
      )
      return
    }

    // uid as a cache identifier
    this.id = '__v-for__' + (++uid)

    // check if this is an option list,
    // so that we know if we need to update the <select>'s
    // v-model when the option list has changed.
    // because v-model has a lower priority than v-for,
    // the v-model is not bound here yet, so we have to
    // retrive it in the actual updateModel() function.
    var tag = this.el.tagName
    this.isOption =
      (tag === 'OPTION' || tag === 'OPTGROUP') &&
      this.el.parentNode.tagName === 'SELECT'

    // setup anchor nodes
    this.start = _.createAnchor('v-for-start')
    this.end = _.createAnchor('v-for-end')
    _.replace(this.el, this.end)
    _.before(this.start, this.end)

    // cache
    this.cache = Object.create(null)

    // fragment factory
    this.factory = new FragmentFactory(this.vm, this.el)
  },

  update: function (data) {
    this.diff(data)
    this.updateRef()
    this.updateModel()
  },

  /**
   * Diff, based on new data and old data, determine the
   * minimum amount of DOM manipulations needed to make the
   * DOM reflect the new data Array.
   *
   * The algorithm diffs the new data Array by storing a
   * hidden reference to an owner vm instance on previously
   * seen data. This allows us to achieve O(n) which is
   * better than a levenshtein distance based algorithm,
   * which is O(m * n).
   *
   * @param {Array} data
   */

  diff: function (data) {
    // check if the Array was converted from an Object
    var item = data[0]
    var convertedFromObject = this.fromObject =
      isObject(item) &&
      item.hasOwnProperty('$key') &&
      item.hasOwnProperty('$value')

    var trackByKey = this.params.trackBy
    var oldFrags = this.frags
    var frags = this.frags = new Array(data.length)
    var alias = this.alias
    var iterator = this.iterator
    var start = this.start
    var end = this.end
    var inDoc = _.inDoc(start)
    var init = !oldFrags
    var i, l, frag, key, value, primitive

    // First pass, go through the new Array and fill up
    // the new frags array. If a piece of data has a cached
    // instance for it, we reuse it. Otherwise build a new
    // instance.
    for (i = 0, l = data.length; i < l; i++) {
      item = data[i]
      key = convertedFromObject ? item.$key : null
      value = convertedFromObject ? item.$value : item
      primitive = !isObject(value)
      frag = !init && this.getCachedFrag(value, i, key)
      if (frag) { // reusable fragment
        frag.reused = true
        // update $index
        frag.scope.$index = i
        // update $key
        if (key) {
          frag.scope.$key = key
        }
        // update iterator
        if (iterator) {
          frag.scope[iterator] = key !== null ? key : i
        }
        // update data for track-by, object repeat &
        // primitive values.
        if (trackByKey || convertedFromObject || primitive) {
          frag.scope[alias] = value
        }
      } else { // new isntance
        frag = this.create(value, alias, i, key)
        frag.fresh = !init
      }
      frags[i] = frag
      if (init) {
        frag.before(end)
      }
    }

    // we're done for the initial render.
    if (init) {
      return
    }

    // Second pass, go through the old fragments and
    // destroy those who are not reused (and remove them
    // from cache)
    var removalIndex = 0
    var totalRemoved = oldFrags.length - frags.length
    for (i = 0, l = oldFrags.length; i < l; i++) {
      frag = oldFrags[i]
      if (!frag.reused) {
        this.deleteCachedFrag(frag)
        this.remove(frag, removalIndex++, totalRemoved, inDoc)
      }
    }

    // Final pass, move/insert new fragments into the
    // right place.
    var targetPrev, prevEl, currentPrev
    var insertionIndex = 0
    for (i = 0, l = frags.length; i < l; i++) {
      frag = frags[i]
      // this is the frag that we should be after
      targetPrev = frags[i - 1]
      prevEl = targetPrev
        ? targetPrev.staggerCb
          ? targetPrev.staggerAnchor
          : targetPrev.end || targetPrev.node
        : start
      if (frag.reused && !frag.staggerCb) {
        currentPrev = findPrevFrag(frag, start, this.id)
        if (currentPrev !== targetPrev) {
          this.move(frag, prevEl)
        }
      } else {
        // new instance, or still in stagger.
        // insert with updated stagger index.
        this.insert(frag, insertionIndex++, prevEl, inDoc)
      }
      frag.reused = frag.fresh = false
    }
  },

  /**
   * Create a new fragment instance.
   *
   * @param {*} value
   * @param {String} alias
   * @param {Number} index
   * @param {String} [key]
   * @return {Fragment}
   */

  create: function (value, alias, index, key) {
    var host = this._host
    // create iteration scope
    var parentScope = this._scope || this.vm
    var scope = Object.create(parentScope)
    // ref holder for the scope
    scope.$refs = Object.create(parentScope.$refs)
    scope.$els = Object.create(parentScope.$els)
    // make sure point $parent to parent scope
    scope.$parent = parentScope
    // for two-way binding on alias
    scope.$forContext = this
    // define scope properties
    _.defineReactive(scope, alias, value)
    _.defineReactive(scope, '$index', index)
    if (key) {
      _.defineReactive(scope, '$key', key)
    } else if (scope.$key) {
      // avoid accidental fallback
      _.define(scope, '$key', null)
    }
    if (this.iterator) {
      _.defineReactive(scope, this.iterator, key !== null ? key : index)
    }
    var frag = this.factory.create(host, scope, this._frag)
    frag.forId = this.id
    this.cacheFrag(value, frag, index, key)
    return frag
  },

  /**
   * Update the v-ref on owner vm.
   */

  updateRef: function () {
    var ref = this.descriptor.ref
    if (!ref) return
    var hash = (this._scope || this.vm).$refs
    var refs
    if (!this.fromObject) {
      refs = this.frags.map(findVmFromFrag)
    } else {
      refs = {}
      this.frags.forEach(function (frag) {
        refs[frag.scope.$key] = findVmFromFrag(frag)
      })
    }
    hash[ref] = refs
  },

  /**
   * For option lists, update the containing v-model on
   * parent <select>.
   */

  updateModel: function () {
    if (this.isOption) {
      var parent = this.start.parentNode
      var model = parent && parent.__v_model
      if (model) {
        model.forceUpdate()
      }
    }
  },

  /**
   * Insert a fragment. Handles staggering.
   *
   * @param {Fragment} frag
   * @param {Number} index
   * @param {Node} prevEl
   * @param {Boolean} inDoc
   */

  insert: function (frag, index, prevEl, inDoc) {
    if (frag.staggerCb) {
      frag.staggerCb.cancel()
      frag.staggerCb = null
    }
    var staggerAmount = this.getStagger(frag, index, null, 'enter')
    if (inDoc && staggerAmount) {
      // create an anchor and insert it synchronously,
      // so that we can resolve the correct order without
      // worrying about some elements not inserted yet
      var anchor = frag.staggerAnchor
      if (!anchor) {
        anchor = frag.staggerAnchor = _.createAnchor('stagger-anchor')
        anchor.__vfrag__ = frag
      }
      _.after(anchor, prevEl)
      var op = frag.staggerCb = _.cancellable(function () {
        frag.staggerCb = null
        frag.before(anchor)
        _.remove(anchor)
      })
      setTimeout(op, staggerAmount)
    } else {
      frag.before(prevEl.nextSibling)
    }
  },

  /**
   * Remove a fragment. Handles staggering.
   *
   * @param {Fragment} frag
   * @param {Number} index
   * @param {Number} total
   * @param {Boolean} inDoc
   */

  remove: function (frag, index, total, inDoc) {
    if (frag.staggerCb) {
      frag.staggerCb.cancel()
      frag.staggerCb = null
      // it's not possible for the same frag to be removed
      // twice, so if we have a pending stagger callback,
      // it means this frag is queued for enter but removed
      // before its transition started. Since it is already
      // destroyed, we can just leave it in detached state.
      return
    }
    var staggerAmount = this.getStagger(frag, index, total, 'leave')
    if (inDoc && staggerAmount) {
      var op = frag.staggerCb = _.cancellable(function () {
        frag.staggerCb = null
        frag.remove()
      })
      setTimeout(op, staggerAmount)
    } else {
      frag.remove()
    }
  },

  /**
   * Move a fragment to a new position.
   * Force no transition.
   *
   * @param {Fragment} frag
   * @param {Node} prevEl
   */

  move: function (frag, prevEl) {
    frag.before(prevEl.nextSibling, false)
  },

  /**
   * Cache a fragment using track-by or the object key.
   *
   * @param {*} value
   * @param {Fragment} frag
   * @param {Number} index
   * @param {String} [key]
   */

  cacheFrag: function (value, frag, index, key) {
    var trackByKey = this.params.trackBy
    var cache = this.cache
    var primitive = !isObject(value)
    var id
    if (key || trackByKey || primitive) {
      id = trackByKey
        ? trackByKey === '$index'
          ? index
          : value[trackByKey]
        : (key || value)
      if (!cache[id]) {
        cache[id] = frag
      } else if (trackByKey !== '$index') {
        process.env.NODE_ENV !== 'production' &&
        this.warnDuplicate(value)
      }
    } else {
      id = this.id
      if (value.hasOwnProperty(id)) {
        if (value[id] === null) {
          value[id] = frag
        } else {
          process.env.NODE_ENV !== 'production' &&
          this.warnDuplicate(value)
        }
      } else {
        _.define(value, id, frag)
      }
    }
    frag.raw = value
  },

  /**
   * Get a cached fragment from the value/index/key
   *
   * @param {*} value
   * @param {Number} index
   * @param {String} key
   * @return {Fragment}
   */

  getCachedFrag: function (value, index, key) {
    var trackByKey = this.params.trackBy
    var primitive = !isObject(value)
    var frag
    if (key || trackByKey || primitive) {
      var id = trackByKey
        ? trackByKey === '$index'
          ? index
          : value[trackByKey]
        : (key || value)
      frag = this.cache[id]
    } else {
      frag = value[this.id]
    }
    if (frag && (frag.reused || frag.fresh)) {
      process.env.NODE_ENV !== 'production' &&
      this.warnDuplicate(value)
    }
    return frag
  },

  /**
   * Delete a fragment from cache.
   *
   * @param {Fragment} frag
   */

  deleteCachedFrag: function (frag) {
    var value = frag.raw
    var trackByKey = this.params.trackBy
    var scope = frag.scope
    var index = scope.$index
    // fix #948: avoid accidentally fall through to
    // a parent repeater which happens to have $key.
    var key = scope.hasOwnProperty('$key') && scope.$key
    var primitive = !isObject(value)
    if (trackByKey || key || primitive) {
      var id = trackByKey
        ? trackByKey === '$index'
          ? index
          : value[trackByKey]
        : (key || value)
      this.cache[id] = null
    } else {
      value[this.id] = null
      frag.raw = null
    }
  },

  /**
   * Get the stagger amount for an insertion/removal.
   *
   * @param {Fragment} frag
   * @param {Number} index
   * @param {Number} total
   * @param {String} type
   */

  getStagger: function (frag, index, total, type) {
    type = type + 'Stagger'
    var trans = frag.node.__v_trans
    var hooks = trans && trans.hooks
    var hook = hooks && (hooks[type] || hooks.stagger)
    return hook
      ? hook.call(frag, index, total)
      : index * parseInt(this.params[type] || this.params.stagger, 10)
  },

  /**
   * Pre-process the value before piping it through the
   * filters. This is passed to and called by the watcher.
   */

  _preProcess: function (value) {
    // regardless of type, store the un-filtered raw value.
    this.rawValue = value
    return value
  },

  /**
   * Post-process the value after it has been piped through
   * the filters. This is passed to and called by the watcher.
   *
   * It is necessary for this to be called during the
   * wathcer's dependency collection phase because we want
   * the v-for to update when the source Object is mutated.
   */

  _postProcess: function (value) {
    if (_.isArray(value)) {
      return value
    } else if (_.isPlainObject(value)) {
      // convert plain object to array.
      var keys = Object.keys(value)
      var i = keys.length
      var res = new Array(i)
      var key
      while (i--) {
        key = keys[i]
        res[i] = {
          $key: key,
          $value: value[key]
        }
      }
      return res
    } else {
      if (typeof value === 'number') {
        value = range(value)
      }
      return value || []
    }
  },

  unbind: function () {
    if (this.descriptor.ref) {
      (this._scope || this.vm).$refs[this.descriptor.ref] = null
    }
    if (this.frags) {
      var i = this.frags.length
      var frag
      while (i--) {
        frag = this.frags[i]
        this.deleteCachedFrag(frag)
        frag.destroy()
      }
    }
  }
}

/**
 * Helper to find the previous element that is a fragment
 * anchor. This is necessary because a destroyed frag's
 * element could still be lingering in the DOM before its
 * leaving transition finishes, but its inserted flag
 * should have been set to false so we can skip them.
 *
 * If this is a block repeat, we want to make sure we only
 * return frag that is bound to this v-for. (see #929)
 *
 * @param {Fragment} frag
 * @param {Comment|Text} anchor
 * @param {String} id
 * @return {Fragment}
 */

function findPrevFrag (frag, anchor, id) {
  var el = frag.node.previousSibling
  /* istanbul ignore if */
  if (!el) return
  frag = el.__vfrag__
  while (
    (!frag || frag.forId !== id || !frag.inserted) &&
    el !== anchor
  ) {
    el = el.previousSibling
    /* istanbul ignore if */
    if (!el) return
    frag = el.__vfrag__
  }
  return frag
}

/**
 * Find a vm from a fragment.
 *
 * @param {Fragment} frag
 * @return {Vue|undefined}
 */

function findVmFromFrag (frag) {
  return frag.node.__vue__ || frag.node.nextSibling.__vue__
}

/**
 * Create a range array from given number.
 *
 * @param {Number} n
 * @return {Array}
 */

function range (n) {
  var i = -1
  var ret = new Array(n)
  while (++i < n) {
    ret[i] = i
  }
  return ret
}

if (process.env.NODE_ENV !== 'production') {
  module.exports.warnDuplicate = function (value) {
    _.warn(
      'Duplicate value found in v-for="' + this.descriptor.raw + '": ' +
      JSON.stringify(value) + '. Use track-by="$index" if ' +
      'you are expecting duplicate values.'
    )
  }
}

}).call(this,require('_process'))

},{"../../fragment/factory":94,"../../util":116,"_process":41}],80:[function(require,module,exports){
var _ = require('../../util')
var templateParser = require('../../parsers/template')

module.exports = {

  bind: function () {
    // a comment node means this is a binding for
    // {{{ inline unescaped html }}}
    if (this.el.nodeType === 8) {
      // hold nodes
      this.nodes = []
      // replace the placeholder with proper anchor
      this.anchor = _.createAnchor('v-html')
      _.replace(this.el, this.anchor)
    }
  },

  update: function (value) {
    value = _.toString(value)
    if (this.nodes) {
      this.swap(value)
    } else {
      this.el.innerHTML = value
    }
  },

  swap: function (value) {
    // remove old nodes
    var i = this.nodes.length
    while (i--) {
      _.remove(this.nodes[i])
    }
    // convert new value to a fragment
    // do not attempt to retrieve from id selector
    var frag = templateParser.parse(value, true, true)
    // save a reference to these nodes so we can remove later
    this.nodes = _.toArray(frag.childNodes)
    _.before(frag, this.anchor)
  }
}

},{"../../parsers/template":107,"../../util":116}],81:[function(require,module,exports){
(function (process){
var _ = require('../../util')
var FragmentFactory = require('../../fragment/factory')

module.exports = {

  priority: 2000,

  bind: function () {
    var el = this.el
    if (!el.__vue__) {
      // check else block
      var next = el.nextElementSibling
      if (next && _.attr(next, 'v-else') !== null) {
        _.remove(next)
        this.elseFactory = new FragmentFactory(this.vm, next)
      }
      // check main block
      this.anchor = _.createAnchor('v-if')
      _.replace(el, this.anchor)
      this.factory = new FragmentFactory(this.vm, el)
    } else {
      process.env.NODE_ENV !== 'production' && _.warn(
        'v-if="' + this.expression + '" cannot be ' +
        'used on an instance root element.'
      )
      this.invalid = true
    }
  },

  update: function (value) {
    if (this.invalid) return
    if (value) {
      if (!this.frag) {
        this.insert()
      }
    } else {
      this.remove()
    }
  },

  insert: function () {
    if (this.elseFrag) {
      this.elseFrag.remove()
      this.elseFrag = null
    }
    this.frag = this.factory.create(this._host, this._scope, this._frag)
    this.frag.before(this.anchor)
  },

  remove: function () {
    if (this.frag) {
      this.frag.remove()
      this.frag = null
    }
    if (this.elseFactory && !this.elseFrag) {
      this.elseFrag = this.elseFactory.create(this._host, this._scope, this._frag)
      this.elseFrag.before(this.anchor)
    }
  },

  unbind: function () {
    if (this.frag) {
      this.frag.destroy()
    }
  }
}

}).call(this,require('_process'))

},{"../../fragment/factory":94,"../../util":116,"_process":41}],82:[function(require,module,exports){
// text & html
exports.text = require('./text')
exports.html = require('./html')

// logic control
exports['for'] = require('./for')
exports['if'] = require('./if')
exports.show = require('./show')

// two-way binding
exports.model = require('./model')

// event handling
exports.on = require('./on')

// attributes
exports.bind = require('./bind')

// ref & el
exports.el = require('./el')
exports.ref = require('./ref')

// cloak
exports.cloak = require('./cloak')

},{"./bind":76,"./cloak":77,"./el":78,"./for":79,"./html":80,"./if":81,"./model":84,"./on":88,"./ref":89,"./show":90,"./text":91}],83:[function(require,module,exports){
var _ = require('../../../util')

module.exports = {

  bind: function () {
    var self = this
    var el = this.el

    this.getValue = function () {
      return el.hasOwnProperty('_value')
        ? el._value
        : self.params.number
          ? _.toNumber(el.value)
          : el.value
    }

    function getBooleanValue () {
      var val = el.checked
      if (val && el.hasOwnProperty('_trueValue')) {
        return el._trueValue
      }
      if (!val && el.hasOwnProperty('_falseValue')) {
        return el._falseValue
      }
      return val
    }

    this.listener = function () {
      var model = self._watcher.value
      if (_.isArray(model)) {
        var val = self.getValue()
        if (el.checked) {
          if (_.indexOf(model, val) < 0) {
            model.push(val)
          }
        } else {
          model.$remove(val)
        }
      } else {
        self.set(getBooleanValue())
      }
    }

    this.on('change', this.listener)
    if (el.checked) {
      this.afterBind = this.listener
    }
  },

  update: function (value) {
    var el = this.el
    if (_.isArray(value)) {
      el.checked = _.indexOf(value, this.getValue()) > -1
    } else {
      if (el.hasOwnProperty('_trueValue')) {
        el.checked = _.looseEqual(value, el._trueValue)
      } else {
        el.checked = !!value
      }
    }
  }
}

},{"../../../util":116}],84:[function(require,module,exports){
(function (process){
var _ = require('../../../util')

var handlers = {
  text: require('./text'),
  radio: require('./radio'),
  select: require('./select'),
  checkbox: require('./checkbox')
}

module.exports = {

  priority: 800,
  twoWay: true,
  handlers: handlers,
  params: ['lazy', 'number', 'debounce'],

  /**
   * Possible elements:
   *   <select>
   *   <textarea>
   *   <input type="*">
   *     - text
   *     - checkbox
   *     - radio
   *     - number
   */

  bind: function () {
    // friendly warning...
    this.checkFilters()
    if (this.hasRead && !this.hasWrite) {
      process.env.NODE_ENV !== 'production' && _.warn(
        'It seems you are using a read-only filter with ' +
        'v-model. You might want to use a two-way filter ' +
        'to ensure correct behavior.'
      )
    }
    var el = this.el
    var tag = el.tagName
    var handler
    if (tag === 'INPUT') {
      handler = handlers[el.type] || handlers.text
    } else if (tag === 'SELECT') {
      handler = handlers.select
    } else if (tag === 'TEXTAREA') {
      handler = handlers.text
    } else {
      process.env.NODE_ENV !== 'production' && _.warn(
        'v-model does not support element type: ' + tag
      )
      return
    }
    el.__v_model = this
    handler.bind.call(this)
    this.update = handler.update
    this._unbind = handler.unbind
  },

  /**
   * Check read/write filter stats.
   */

  checkFilters: function () {
    var filters = this.filters
    if (!filters) return
    var i = filters.length
    while (i--) {
      var filter = _.resolveAsset(this.vm.$options, 'filters', filters[i].name)
      if (typeof filter === 'function' || filter.read) {
        this.hasRead = true
      }
      if (filter.write) {
        this.hasWrite = true
      }
    }
  },

  unbind: function () {
    this.el.__v_model = null
    this._unbind && this._unbind()
  }
}

}).call(this,require('_process'))

},{"../../../util":116,"./checkbox":83,"./radio":85,"./select":86,"./text":87,"_process":41}],85:[function(require,module,exports){
var _ = require('../../../util')

module.exports = {

  bind: function () {
    var self = this
    var el = this.el

    this.getValue = function () {
      // value overwrite via v-bind:value
      if (el.hasOwnProperty('_value')) {
        return el._value
      }
      var val = el.value
      if (self.params.number) {
        val = _.toNumber(val)
      }
      return val
    }

    this.listener = function () {
      self.set(self.getValue())
    }
    this.on('change', this.listener)

    if (el.checked) {
      this.afterBind = this.listener
    }
  },

  update: function (value) {
    this.el.checked = _.looseEqual(value, this.getValue())
  }
}

},{"../../../util":116}],86:[function(require,module,exports){
var _ = require('../../../util')

module.exports = {

  bind: function () {
    var self = this
    var el = this.el

    // method to force update DOM using latest value.
    this.forceUpdate = function () {
      if (self._watcher) {
        self.update(self._watcher.get())
      }
    }

    // check if this is a multiple select
    var multiple = this.multiple = el.hasAttribute('multiple')

    // attach listener
    this.listener = function () {
      var value = getValue(el, multiple)
      value = self.params.number
        ? _.isArray(value)
          ? value.map(_.toNumber)
          : _.toNumber(value)
        : value
      self.set(value)
    }
    this.on('change', this.listener)

    // if has initial value, set afterBind
    var initValue = getValue(el, multiple, true)
    if ((multiple && initValue.length) ||
        (!multiple && initValue !== null)) {
      this.afterBind = this.listener
    }

    // All major browsers except Firefox resets
    // selectedIndex with value -1 to 0 when the element
    // is appended to a new parent, therefore we have to
    // force a DOM update whenever that happens...
    this.vm.$on('hook:attached', this.forceUpdate)
  },

  update: function (value) {
    var el = this.el
    el.selectedIndex = -1
    var multi = this.multiple && _.isArray(value)
    var options = el.options
    var i = options.length
    var op, val
    while (i--) {
      op = options[i]
      val = op.hasOwnProperty('_value')
        ? op._value
        : op.value
      /* eslint-disable eqeqeq */
      op.selected = multi
        ? indexOf(value, val) > -1
        : _.looseEqual(value, val)
      /* eslint-enable eqeqeq */
    }
  },

  unbind: function () {
    /* istanbul ignore next */
    this.vm.$off('hook:attached', this.forceUpdate)
  }
}

/**
 * Get select value
 *
 * @param {SelectElement} el
 * @param {Boolean} multi
 * @param {Boolean} init
 * @return {Array|*}
 */

function getValue (el, multi, init) {
  var res = multi ? [] : null
  var op, val, selected
  for (var i = 0, l = el.options.length; i < l; i++) {
    op = el.options[i]
    selected = init
      ? op.hasAttribute('selected')
      : op.selected
    if (selected) {
      val = op.hasOwnProperty('_value')
        ? op._value
        : op.value
      if (multi) {
        res.push(val)
      } else {
        return val
      }
    }
  }
  return res
}

/**
 * Native Array.indexOf uses strict equal, but in this
 * case we need to match string/numbers with custom equal.
 *
 * @param {Array} arr
 * @param {*} val
 */

function indexOf (arr, val) {
  var i = arr.length
  while (i--) {
    if (_.looseEqual(arr[i], val)) {
      return i
    }
  }
  return -1
}

},{"../../../util":116}],87:[function(require,module,exports){
var _ = require('../../../util')

module.exports = {

  bind: function () {
    var self = this
    var el = this.el
    var isRange = el.type === 'range'
    var lazy = this.params.lazy
    var number = this.params.number
    var debounce = this.params.debounce

    // handle composition events.
    //   http://blog.evanyou.me/2014/01/03/composition-event/
    // skip this for Android because it handles composition
    // events quite differently. Android doesn't trigger
    // composition events for language input methods e.g.
    // Chinese, but instead triggers them for spelling
    // suggestions... (see Discussion/#162)
    var composing = false
    if (!_.isAndroid && !isRange) {
      this.on('compositionstart', function () {
        composing = true
      })
      this.on('compositionend', function () {
        composing = false
        // in IE11 the "compositionend" event fires AFTER
        // the "input" event, so the input handler is blocked
        // at the end... have to call it here.
        //
        // #1327: in lazy mode this is unecessary.
        if (!lazy) {
          self.listener()
        }
      })
    }

    // prevent messing with the input when user is typing,
    // and force update on blur.
    this.focused = false
    if (!isRange) {
      this.on('focus', function () {
        self.focused = true
      })
      this.on('blur', function () {
        self.focused = false
        self.listener()
      })
    }

    // Now attach the main listener
    this.listener = function () {
      if (composing) return
      var val = number || isRange
        ? _.toNumber(el.value)
        : el.value
      self.set(val)
      // force update on next tick to avoid lock & same value
      // also only update when user is not typing
      _.nextTick(function () {
        if (self._bound && !self.focused) {
          self.update(self._watcher.value)
        }
      })
    }

    // apply debounce
    if (debounce) {
      this.listener = _.debounce(this.listener, debounce)
    }

    // Support jQuery events, since jQuery.trigger() doesn't
    // trigger native events in some cases and some plugins
    // rely on $.trigger()
    //
    // We want to make sure if a listener is attached using
    // jQuery, it is also removed with jQuery, that's why
    // we do the check for each directive instance and
    // store that check result on itself. This also allows
    // easier test coverage control by unsetting the global
    // jQuery variable in tests.
    this.hasjQuery = typeof jQuery === 'function'
    if (this.hasjQuery) {
      jQuery(el).on('change', this.listener)
      if (!lazy) {
        jQuery(el).on('input', this.listener)
      }
    } else {
      this.on('change', this.listener)
      if (!lazy) {
        this.on('input', this.listener)
      }
    }

    // IE9 doesn't fire input event on backspace/del/cut
    if (!lazy && _.isIE9) {
      this.on('cut', function () {
        _.nextTick(self.listener)
      })
      this.on('keyup', function (e) {
        if (e.keyCode === 46 || e.keyCode === 8) {
          self.listener()
        }
      })
    }

    // set initial value if present
    if (
      el.hasAttribute('value') ||
      (el.tagName === 'TEXTAREA' && el.value.trim())
    ) {
      this.afterBind = this.listener
    }
  },

  update: function (value) {
    this.el.value = _.toString(value)
  },

  unbind: function () {
    var el = this.el
    if (this.hasjQuery) {
      jQuery(el).off('change', this.listener)
      jQuery(el).off('input', this.listener)
    }
  }
}

},{"../../../util":116}],88:[function(require,module,exports){
(function (process){
var _ = require('../../util')

// keyCode aliases
var keyCodes = {
  esc: 27,
  tab: 9,
  enter: 13,
  space: 32,
  'delete': 46,
  up: 38,
  left: 37,
  right: 39,
  down: 40
}

function keyFilter (handler, keys) {
  var codes = keys.map(function (key) {
    var code = keyCodes[key]
    if (!code) {
      code = parseInt(key, 10)
    }
    return code
  })
  return function keyHandler (e) {
    if (codes.indexOf(e.keyCode) > -1) {
      return handler.call(this, e)
    }
  }
}

function stopFilter (handler) {
  return function stopHandler (e) {
    e.stopPropagation()
    return handler.call(this, e)
  }
}

function preventFilter (handler) {
  return function preventHandler (e) {
    e.preventDefault()
    return handler.call(this, e)
  }
}

module.exports = {

  acceptStatement: true,
  priority: 700,

  bind: function () {
    // deal with iframes
    if (
      this.el.tagName === 'IFRAME' &&
      this.arg !== 'load'
    ) {
      var self = this
      this.iframeBind = function () {
        _.on(self.el.contentWindow, self.arg, self.handler)
      }
      this.on('load', this.iframeBind)
    }
  },

  update: function (handler) {
    // stub a noop for v-on with no value,
    // e.g. @mousedown.prevent
    if (!this.descriptor.raw) {
      handler = function () {}
    }

    if (typeof handler !== 'function') {
      process.env.NODE_ENV !== 'production' && _.warn(
        'v-on:' + this.arg + '="' +
        this.expression + '" expects a function value, ' +
        'got ' + handler
      )
      return
    }

    // apply modifiers
    if (this.modifiers.stop) {
      handler = stopFilter(handler)
    }
    if (this.modifiers.prevent) {
      handler = preventFilter(handler)
    }
    // key filter
    var keys = Object.keys(this.modifiers)
      .filter(function (key) {
        return key !== 'stop' && key !== 'prevent'
      })
    if (keys.length) {
      handler = keyFilter(handler, keys)
    }

    this.reset()
    var scope = this._scope || this.vm
    this.handler = function (e) {
      scope.$event = e
      var res = handler(e)
      scope.$event = null
      return res
    }
    if (this.iframeBind) {
      this.iframeBind()
    } else {
      _.on(this.el, this.arg, this.handler)
    }
  },

  reset: function () {
    var el = this.iframeBind
      ? this.el.contentWindow
      : this.el
    if (this.handler) {
      _.off(el, this.arg, this.handler)
    }
  },

  unbind: function () {
    this.reset()
  }
}

}).call(this,require('_process'))

},{"../../util":116,"_process":41}],89:[function(require,module,exports){
(function (process){
if (process.env.NODE_ENV !== 'production') {
  module.exports = {
    bind: function () {
      require('../../util').warn(
        'v-ref:' + this.arg + ' must be used on a child ' +
        'component. Found on <' + this.el.tagName.toLowerCase() + '>.'
      )
    }
  }
}

}).call(this,require('_process'))

},{"../../util":116,"_process":41}],90:[function(require,module,exports){
var _ = require('../../util')
var transition = require('../../transition')

module.exports = {

  bind: function () {
    // check else block
    var next = this.el.nextElementSibling
    if (next && _.attr(next, 'v-else') !== null) {
      this.elseEl = next
    }
  },

  update: function (value) {
    this.apply(this.el, value)
    if (this.elseEl) {
      this.apply(this.elseEl, !value)
    }
  },

  apply: function (el, value) {
    function done () {
      el.style.display = value ? '' : 'none'
    }
    // do not apply transition if not in doc
    if (_.inDoc(el)) {
      transition.apply(el, value ? 1 : -1, done, this.vm)
    } else {
      done()
    }
  }
}

},{"../../transition":109,"../../util":116}],91:[function(require,module,exports){
var _ = require('../../util')

module.exports = {

  bind: function () {
    this.attr = this.el.nodeType === 3
      ? 'data'
      : 'textContent'
  },

  update: function (value) {
    this.el[this.attr] = _.toString(value)
  }
}

},{"../../util":116}],92:[function(require,module,exports){
var _ = require('../util')
var Path = require('../parsers/path')
var toArray = require('../directives/public/for')._postProcess

/**
 * Limit filter for arrays
 *
 * @param {Number} n
 * @param {Number} offset (Decimal expected)
 */

exports.limitBy = function (arr, n, offset) {
  offset = offset ? parseInt(offset, 10) : 0
  return typeof n === 'number'
    ? arr.slice(offset, offset + n)
    : arr
}

/**
 * Filter filter for arrays
 *
 * @param {String} search
 * @param {String} [delimiter]
 * @param {String} ...dataKeys
 */

exports.filterBy = function (arr, search, delimiter) {
  arr = toArray(arr)
  if (search == null) {
    return arr
  }
  if (typeof search === 'function') {
    return arr.filter(search)
  }
  // cast to lowercase string
  search = ('' + search).toLowerCase()
  // allow optional `in` delimiter
  // because why not
  var n = delimiter === 'in' ? 3 : 2
  // extract and flatten keys
  var keys = _.toArray(arguments, n).reduce(function (prev, cur) {
    return prev.concat(cur)
  }, [])
  var res = []
  var item, key, val, j
  for (var i = 0, l = arr.length; i < l; i++) {
    item = arr[i]
    val = (item && item.$value) || item
    j = keys.length
    if (j) {
      while (j--) {
        key = keys[j]
        if ((key === '$key' && contains(item.$key, search)) ||
            contains(Path.get(val, key), search)) {
          res.push(item)
          break
        }
      }
    } else if (contains(item, search)) {
      res.push(item)
    }
  }
  return res
}

/**
 * Filter filter for arrays
 *
 * @param {String} sortKey
 * @param {String} reverse
 */

exports.orderBy = function (arr, sortKey, reverse) {
  arr = toArray(arr)
  if (!sortKey) {
    return arr
  }
  var order = (reverse && reverse < 0) ? -1 : 1
  // sort on a copy to avoid mutating original array
  return arr.slice().sort(function (a, b) {
    if (sortKey !== '$key') {
      if (_.isObject(a) && '$value' in a) a = a.$value
      if (_.isObject(b) && '$value' in b) b = b.$value
    }
    a = _.isObject(a) ? Path.get(a, sortKey) : a
    b = _.isObject(b) ? Path.get(b, sortKey) : b
    return a === b ? 0 : a > b ? order : -order
  })
}

/**
 * String contain helper
 *
 * @param {*} val
 * @param {String} search
 */

function contains (val, search) {
  var i
  if (_.isPlainObject(val)) {
    var keys = Object.keys(val)
    i = keys.length
    while (i--) {
      if (contains(val[keys[i]], search)) {
        return true
      }
    }
  } else if (_.isArray(val)) {
    i = val.length
    while (i--) {
      if (contains(val[i], search)) {
        return true
      }
    }
  } else if (val != null) {
    return val.toString().toLowerCase().indexOf(search) > -1
  }
}

},{"../directives/public/for":79,"../parsers/path":106,"../util":116}],93:[function(require,module,exports){
var _ = require('../util')

/**
 * Stringify value.
 *
 * @param {Number} indent
 */

exports.json = {
  read: function (value, indent) {
    return typeof value === 'string'
      ? value
      : JSON.stringify(value, null, Number(indent) || 2)
  },
  write: function (value) {
    try {
      return JSON.parse(value)
    } catch (e) {
      return value
    }
  }
}

/**
 * 'abc' => 'Abc'
 */

exports.capitalize = function (value) {
  if (!value && value !== 0) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
}

/**
 * 'abc' => 'ABC'
 */

exports.uppercase = function (value) {
  return (value || value === 0)
    ? value.toString().toUpperCase()
    : ''
}

/**
 * 'AbC' => 'abc'
 */

exports.lowercase = function (value) {
  return (value || value === 0)
    ? value.toString().toLowerCase()
    : ''
}

/**
 * 12345 => $12,345.00
 *
 * @param {String} sign
 */

var digitsRE = /(\d{3})(?=\d)/g
exports.currency = function (value, currency) {
  value = parseFloat(value)
  if (!isFinite(value) || (!value && value !== 0)) return ''
  currency = currency != null ? currency : '$'
  var stringified = Math.abs(value).toFixed(2)
  var _int = stringified.slice(0, -3)
  var i = _int.length % 3
  var head = i > 0
    ? (_int.slice(0, i) + (_int.length > 3 ? ',' : ''))
    : ''
  var _float = stringified.slice(-3)
  var sign = value < 0 ? '-' : ''
  return currency + sign + head +
    _int.slice(i).replace(digitsRE, '$1,') +
    _float
}

/**
 * 'item' => 'items'
 *
 * @params
 *  an array of strings corresponding to
 *  the single, double, triple ... forms of the word to
 *  be pluralized. When the number to be pluralized
 *  exceeds the length of the args, it will use the last
 *  entry in the array.
 *
 *  e.g. ['single', 'double', 'triple', 'multiple']
 */

exports.pluralize = function (value) {
  var args = _.toArray(arguments, 1)
  return args.length > 1
    ? (args[value % 10 - 1] || args[args.length - 1])
    : (args[0] + (value === 1 ? '' : 's'))
}

/**
 * Debounce a handler function.
 *
 * @param {Function} handler
 * @param {Number} delay = 300
 * @return {Function}
 */

exports.debounce = function (handler, delay) {
  if (!handler) return
  if (!delay) {
    delay = 300
  }
  return _.debounce(handler, delay)
}

/**
 * Install special array filters
 */

_.extend(exports, require('./array-filters'))

},{"../util":116,"./array-filters":92}],94:[function(require,module,exports){
var _ = require('../util')
var compiler = require('../compiler')
var templateParser = require('../parsers/template')
var Fragment = require('./fragment')
var Cache = require('../cache')
var linkerCache = new Cache(5000)

/**
 * A factory that can be used to create instances of a
 * fragment. Caches the compiled linker if possible.
 *
 * @param {Vue} vm
 * @param {Element|String} el
 */

function FragmentFactory (vm, el) {
  this.vm = vm
  var template
  var isString = typeof el === 'string'
  if (isString || _.isTemplate(el)) {
    template = templateParser.parse(el, true)
  } else {
    template = document.createDocumentFragment()
    template.appendChild(el)
  }
  this.template = template
  // linker can be cached, but only for components
  var linker
  var cid = vm.constructor.cid
  if (cid > 0) {
    var cacheId = cid + (isString ? el : el.outerHTML)
    linker = linkerCache.get(cacheId)
    if (!linker) {
      linker = compiler.compile(template, vm.$options, true)
      linkerCache.put(cacheId, linker)
    }
  } else {
    linker = compiler.compile(template, vm.$options, true)
  }
  this.linker = linker
}

/**
 * Create a fragment instance with given host and scope.
 *
 * @param {Vue} host
 * @param {Object} scope
 * @param {Fragment} parentFrag
 */

FragmentFactory.prototype.create = function (host, scope, parentFrag) {
  var frag = templateParser.clone(this.template)
  return new Fragment(this.linker, this.vm, frag, host, scope, parentFrag)
}

module.exports = FragmentFactory

},{"../cache":60,"../compiler":63,"../parsers/template":107,"../util":116,"./fragment":95}],95:[function(require,module,exports){
var _ = require('../util')
var transition = require('../transition')

/**
 * Abstraction for a partially-compiled fragment.
 * Can optionally compile content with a child scope.
 *
 * @param {Function} linker
 * @param {Vue} vm
 * @param {DocumentFragment} frag
 * @param {Vue} [host]
 * @param {Object} [scope]
 */

function Fragment (linker, vm, frag, host, scope, parentFrag) {
  this.children = []
  this.childFrags = []
  this.vm = vm
  this.scope = scope
  this.inserted = false
  this.parentFrag = parentFrag
  if (parentFrag) {
    parentFrag.childFrags.push(this)
  }
  this.unlink = linker(vm, frag, host, scope, this)
  var single = this.single = frag.childNodes.length === 1
  if (single) {
    this.node = frag.childNodes[0]
    this.before = singleBefore
    this.remove = singleRemove
  } else {
    this.node = _.createAnchor('fragment-start')
    this.end = _.createAnchor('fragment-end')
    this.frag = frag
    _.prepend(this.node, frag)
    frag.appendChild(this.end)
    this.before = multiBefore
    this.remove = multiRemove
  }
  this.node.__vfrag__ = this
}

/**
 * Call attach/detach for all components contained within
 * this fragment. Also do so recursively for all child
 * fragments.
 *
 * @param {Function} hook
 */

Fragment.prototype.callHook = function (hook) {
  var i, l
  for (i = 0, l = this.children.length; i < l; i++) {
    hook(this.children[i])
  }
  for (i = 0, l = this.childFrags.length; i < l; i++) {
    this.childFrags[i].callHook(hook)
  }
}

/**
 * Destroy the fragment.
 */

Fragment.prototype.destroy = function () {
  if (this.parentFrag) {
    this.parentFrag.childFrags.$remove(this)
  }
  this.unlink()
}

/**
 * Insert fragment before target, single node version
 *
 * @param {Node} target
 * @param {Boolean} withTransition
 */

function singleBefore (target, withTransition) {
  this.inserted = true
  var method = withTransition !== false
    ? transition.before
    : _.before
  method(this.node, target, this.vm)
  if (_.inDoc(this.node)) {
    this.callHook(attach)
  }
}

/**
 * Remove fragment, single node version
 */

function singleRemove () {
  this.inserted = false
  var shouldCallRemove = _.inDoc(this.node)
  var self = this
  self.callHook(destroyChild)
  transition.remove(this.node, this.vm, function () {
    if (shouldCallRemove) {
      self.callHook(detach)
    }
    self.destroy()
  })
}

/**
 * Insert fragment before target, multi-nodes version
 *
 * @param {Node} target
 * @param {Boolean} withTransition
 */

function multiBefore (target, withTransition) {
  this.inserted = true
  var vm = this.vm
  var method = withTransition !== false
    ? transition.before
    : _.before
  _.mapNodeRange(this.node, this.end, function (node) {
    method(node, target, vm)
  })
  if (_.inDoc(this.node)) {
    this.callHook(attach)
  }
}

/**
 * Remove fragment, multi-nodes version
 */

function multiRemove () {
  this.inserted = false
  var self = this
  var shouldCallRemove = _.inDoc(this.node)
  self.callHook(destroyChild)
  _.removeNodeRange(this.node, this.end, this.vm, this.frag, function () {
    if (shouldCallRemove) {
      self.callHook(detach)
    }
    self.destroy()
  })
}

/**
 * Call attach hook for a Vue instance.
 *
 * @param {Vue} child
 */

function attach (child) {
  if (!child._isAttached) {
    child._callHook('attached')
  }
}

/**
 * Call destroy for all contained instances,
 * with remove:false and defer:true.
 * Defer is necessary because we need to
 * keep the children to call detach hooks
 * on them.
 *
 * @param {Vue} child
 */

function destroyChild (child) {
  child.$destroy(false, true)
}

/**
 * Call detach hook for a Vue instance.
 *
 * @param {Vue} child
 */

function detach (child) {
  if (child._isAttached) {
    child._callHook('detached')
  }
}

module.exports = Fragment

},{"../transition":109,"../util":116}],96:[function(require,module,exports){
(function (process){
var _ = require('../util')
var inDoc = _.inDoc
var eventRE = /^v-on:|^@/

/**
 * Setup the instance's option events & watchers.
 * If the value is a string, we pull it from the
 * instance's methods by name.
 */

exports._initEvents = function () {
  var options = this.$options
  if (options._asComponent) {
    registerComponentEvents(this, options.el)
  }
  registerCallbacks(this, '$on', options.events)
  registerCallbacks(this, '$watch', options.watch)
}

/**
 * Register v-on events on a child component
 *
 * @param {Vue} vm
 * @param {Element} el
 */

function registerComponentEvents (vm, el) {
  var attrs = el.attributes
  var name, handler
  for (var i = 0, l = attrs.length; i < l; i++) {
    name = attrs[i].name
    if (eventRE.test(name)) {
      name = name.replace(eventRE, '')
      handler = (vm._scope || vm._context).$eval(attrs[i].value, true)
      vm.$on(name.replace(eventRE), handler)
    }
  }
}

/**
 * Register callbacks for option events and watchers.
 *
 * @param {Vue} vm
 * @param {String} action
 * @param {Object} hash
 */

function registerCallbacks (vm, action, hash) {
  if (!hash) return
  var handlers, key, i, j
  for (key in hash) {
    handlers = hash[key]
    if (_.isArray(handlers)) {
      for (i = 0, j = handlers.length; i < j; i++) {
        register(vm, action, key, handlers[i])
      }
    } else {
      register(vm, action, key, handlers)
    }
  }
}

/**
 * Helper to register an event/watch callback.
 *
 * @param {Vue} vm
 * @param {String} action
 * @param {String} key
 * @param {Function|String|Object} handler
 * @param {Object} [options]
 */

function register (vm, action, key, handler, options) {
  var type = typeof handler
  if (type === 'function') {
    vm[action](key, handler, options)
  } else if (type === 'string') {
    var methods = vm.$options.methods
    var method = methods && methods[handler]
    if (method) {
      vm[action](key, method, options)
    } else {
      process.env.NODE_ENV !== 'production' && _.warn(
        'Unknown method: "' + handler + '" when ' +
        'registering callback for ' + action +
        ': "' + key + '".'
      )
    }
  } else if (handler && type === 'object') {
    register(vm, action, key, handler.handler, handler)
  }
}

/**
 * Setup recursive attached/detached calls
 */

exports._initDOMHooks = function () {
  this.$on('hook:attached', onAttached)
  this.$on('hook:detached', onDetached)
}

/**
 * Callback to recursively call attached hook on children
 */

function onAttached () {
  if (!this._isAttached) {
    this._isAttached = true
    this.$children.forEach(callAttach)
  }
}

/**
 * Iterator to call attached hook
 *
 * @param {Vue} child
 */

function callAttach (child) {
  if (!child._isAttached && inDoc(child.$el)) {
    child._callHook('attached')
  }
}

/**
 * Callback to recursively call detached hook on children
 */

function onDetached () {
  if (this._isAttached) {
    this._isAttached = false
    this.$children.forEach(callDetach)
  }
}

/**
 * Iterator to call detached hook
 *
 * @param {Vue} child
 */

function callDetach (child) {
  if (child._isAttached && !inDoc(child.$el)) {
    child._callHook('detached')
  }
}

/**
 * Trigger all handlers for a hook
 *
 * @param {String} hook
 */

exports._callHook = function (hook) {
  var handlers = this.$options[hook]
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      handlers[i].call(this)
    }
  }
  this.$emit('hook:' + hook)
}

}).call(this,require('_process'))

},{"../util":116,"_process":41}],97:[function(require,module,exports){
var mergeOptions = require('../util').mergeOptions
var uid = 0

/**
 * The main init sequence. This is called for every
 * instance, including ones that are created from extended
 * constructors.
 *
 * @param {Object} options - this options object should be
 *                           the result of merging class
 *                           options and the options passed
 *                           in to the constructor.
 */

exports._init = function (options) {

  options = options || {}

  this.$el = null
  this.$parent = options.parent
  this.$root = this.$parent
    ? this.$parent.$root
    : this
  this.$children = []
  this.$refs = {}       // child vm references
  this.$els = {}        // element references
  this._watchers = []   // all watchers as an array
  this._directives = [] // all directives

  // a uid
  this._uid = uid++

  // a flag to avoid this being observed
  this._isVue = true

  // events bookkeeping
  this._events = {}            // registered callbacks
  this._eventsCount = {}       // for $broadcast optimization
  this._shouldPropagate = false // for event propagation

  // fragment instance properties
  this._isFragment = false
  this._fragment =         // @type {DocumentFragment}
  this._fragmentStart =    // @type {Text|Comment}
  this._fragmentEnd = null // @type {Text|Comment}

  // lifecycle state
  this._isCompiled =
  this._isDestroyed =
  this._isReady =
  this._isAttached =
  this._isBeingDestroyed = false
  this._unlinkFn = null

  // context:
  // if this is a transcluded component, context
  // will be the common parent vm of this instance
  // and its host.
  this._context = options._context || this.$parent

  // scope:
  // if this is inside an inline v-for, the scope
  // will be the intermediate scope created for this
  // repeat fragment. this is used for linking props
  // and container directives.
  this._scope = options._scope

  // fragment:
  // if this instance is compiled inside a Fragment, it
  // needs to reigster itself as a child of that fragment
  // for attach/detach to work properly.
  this._frag = options._frag
  if (this._frag) {
    this._frag.children.push(this)
  }

  // push self into parent / transclusion host
  if (this.$parent) {
    this.$parent.$children.push(this)
  }

  // merge options.
  options = this.$options = mergeOptions(
    this.constructor.options,
    options,
    this
  )

  // set ref
  this._updateRef()

  // initialize data as empty object.
  // it will be filled up in _initScope().
  this._data = {}

  // call init hook
  this._callHook('init')

  // initialize data observation and scope inheritance.
  this._initState()

  // setup event system and option events.
  this._initEvents()

  // call created hook
  this._callHook('created')

  // if `el` option is passed, start compilation.
  if (options.el) {
    this.$mount(options.el)
  }
}

},{"../util":116}],98:[function(require,module,exports){
var _ = require('../util')
var Directive = require('../directive')
var compiler = require('../compiler')

/**
 * Update v-ref for component.
 *
 * @param {Boolean} remove
 */

exports._updateRef = function (remove) {
  var ref = this.$options._ref
  if (ref) {
    var refs = (this._scope || this._context).$refs
    if (remove) {
      if (refs[ref] === this) {
        refs[ref] = null
      }
    } else {
      refs[ref] = this
    }
  }
}

/**
 * Transclude, compile and link element.
 *
 * If a pre-compiled linker is available, that means the
 * passed in element will be pre-transcluded and compiled
 * as well - all we need to do is to call the linker.
 *
 * Otherwise we need to call transclude/compile/link here.
 *
 * @param {Element} el
 * @return {Element}
 */

exports._compile = function (el) {
  var options = this.$options

  // transclude and init element
  // transclude can potentially replace original
  // so we need to keep reference; this step also injects
  // the template and caches the original attributes
  // on the container node and replacer node.
  var original = el
  el = compiler.transclude(el, options)
  this._initElement(el)

  // root is always compiled per-instance, because
  // container attrs and props can be different every time.
  var contextOptions = this._context && this._context.$options
  var rootLinker = compiler.compileRoot(el, options, contextOptions)

  // compile and link the rest
  var contentLinkFn
  var ctor = this.constructor
  // component compilation can be cached
  // as long as it's not using inline-template
  if (options._linkerCachable) {
    contentLinkFn = ctor.linker
    if (!contentLinkFn) {
      contentLinkFn = ctor.linker = compiler.compile(el, options)
    }
  }

  // link phase
  // make sure to link root with prop scope!
  var rootUnlinkFn = rootLinker(this, el, this._scope)
  var contentUnlinkFn = contentLinkFn
    ? contentLinkFn(this, el)
    : compiler.compile(el, options)(this, el)

  // register composite unlink function
  // to be called during instance destruction
  this._unlinkFn = function () {
    rootUnlinkFn()
    // passing destroying: true to avoid searching and
    // splicing the directives
    contentUnlinkFn(true)
  }

  // finally replace original
  if (options.replace) {
    _.replace(original, el)
  }

  this._isCompiled = true
  this._callHook('compiled')
  return el
}

/**
 * Initialize instance element. Called in the public
 * $mount() method.
 *
 * @param {Element} el
 */

exports._initElement = function (el) {
  if (el instanceof DocumentFragment) {
    this._isFragment = true
    this.$el = this._fragmentStart = el.firstChild
    this._fragmentEnd = el.lastChild
    // set persisted text anchors to empty
    if (this._fragmentStart.nodeType === 3) {
      this._fragmentStart.data = this._fragmentEnd.data = ''
    }
    this._fragment = el
  } else {
    this.$el = el
  }
  this.$el.__vue__ = this
  this._callHook('beforeCompile')
}

/**
 * Create and bind a directive to an element.
 *
 * @param {String} name - directive name
 * @param {Node} node   - target node
 * @param {Object} desc - parsed directive descriptor
 * @param {Object} def  - directive definition object
 * @param {Vue} [host] - transclusion host component
 * @param {Object} [scope] - v-for scope
 * @param {Fragment} [frag] - owner fragment
 */

exports._bindDir = function (descriptor, node, host, scope, frag) {
  this._directives.push(
    new Directive(descriptor, this, node, host, scope, frag)
  )
}

/**
 * Teardown an instance, unobserves the data, unbind all the
 * directives, turn off all the event listeners, etc.
 *
 * @param {Boolean} remove - whether to remove the DOM node.
 * @param {Boolean} deferCleanup - if true, defer cleanup to
 *                                 be called later
 */

exports._destroy = function (remove, deferCleanup) {
  if (this._isBeingDestroyed) {
    if (!deferCleanup) {
      this._cleanup()
    }
    return
  }
  this._callHook('beforeDestroy')
  this._isBeingDestroyed = true
  var i
  // remove self from parent. only necessary
  // if parent is not being destroyed as well.
  var parent = this.$parent
  if (parent && !parent._isBeingDestroyed) {
    parent.$children.$remove(this)
    // unregister ref (remove: true)
    this._updateRef(true)
  }
  // destroy all children.
  i = this.$children.length
  while (i--) {
    this.$children[i].$destroy()
  }
  // teardown props
  if (this._propsUnlinkFn) {
    this._propsUnlinkFn()
  }
  // teardown all directives. this also tearsdown all
  // directive-owned watchers.
  if (this._unlinkFn) {
    this._unlinkFn()
  }
  i = this._watchers.length
  while (i--) {
    this._watchers[i].teardown()
  }
  // remove reference to self on $el
  if (this.$el) {
    this.$el.__vue__ = null
  }
  // remove DOM element
  var self = this
  if (remove && this.$el) {
    this.$remove(function () {
      self._cleanup()
    })
  } else if (!deferCleanup) {
    this._cleanup()
  }
}

/**
 * Clean up to ensure garbage collection.
 * This is called after the leave transition if there
 * is any.
 */

exports._cleanup = function () {
  if (this._isDestroyed) {
    return
  }
  // remove self from owner fragment
  // do it in cleanup so that we can call $destroy with
  // defer right when a fragment is about to be removed.
  if (this._frag) {
    this._frag.children.$remove(this)
  }
  // remove reference from data ob
  // frozen object may not have observer.
  if (this._data.__ob__) {
    this._data.__ob__.removeVm(this)
  }
  // Clean up references to private properties and other
  // instances. preserve reference to _data so that proxy
  // accessors still work. The only potential side effect
  // here is that mutating the instance after it's destroyed
  // may affect the state of other components that are still
  // observing the same object, but that seems to be a
  // reasonable responsibility for the user rather than
  // always throwing an error on them.
  this.$el =
  this.$parent =
  this.$root =
  this.$children =
  this._watchers =
  this._context =
  this._scope =
  this._directives = null
  // call the last hook...
  this._isDestroyed = true
  this._callHook('destroyed')
  // turn off all instance listeners.
  this.$off()
}

},{"../compiler":63,"../directive":66,"../util":116}],99:[function(require,module,exports){
(function (process){
var _ = require('../util')

/**
 * Apply a list of filter (descriptors) to a value.
 * Using plain for loops here because this will be called in
 * the getter of any watcher with filters so it is very
 * performance sensitive.
 *
 * @param {*} value
 * @param {*} [oldValue]
 * @param {Array} filters
 * @param {Boolean} write
 * @return {*}
 */

exports._applyFilters = function (value, oldValue, filters, write) {
  var filter, fn, args, arg, offset, i, l, j, k
  for (i = 0, l = filters.length; i < l; i++) {
    filter = filters[i]
    fn = _.resolveAsset(this.$options, 'filters', filter.name)
    if (process.env.NODE_ENV !== 'production') {
      _.assertAsset(fn, 'filter', filter.name)
    }
    if (!fn) continue
    fn = write ? fn.write : (fn.read || fn)
    if (typeof fn !== 'function') continue
    args = write ? [value, oldValue] : [value]
    offset = write ? 2 : 1
    if (filter.args) {
      for (j = 0, k = filter.args.length; j < k; j++) {
        arg = filter.args[j]
        args[j + offset] = arg.dynamic
          ? this.$get(arg.value)
          : arg.value
      }
    }
    value = fn.apply(this, args)
  }
  return value
}

/**
 * Resolve a component, depending on whether the component
 * is defined normally or using an async factory function.
 * Resolves synchronously if already resolved, otherwise
 * resolves asynchronously and caches the resolved
 * constructor on the factory.
 *
 * @param {String} id
 * @param {Function} cb
 */

exports._resolveComponent = function (id, cb) {
  var factory = _.resolveAsset(this.$options, 'components', id)
  if (process.env.NODE_ENV !== 'production') {
    _.assertAsset(factory, 'component', id)
  }
  if (!factory) {
    return
  }
  // async component factory
  if (!factory.options) {
    if (factory.resolved) {
      // cached
      cb(factory.resolved)
    } else if (factory.requested) {
      // pool callbacks
      factory.pendingCallbacks.push(cb)
    } else {
      factory.requested = true
      var cbs = factory.pendingCallbacks = [cb]
      factory(function resolve (res) {
        if (_.isPlainObject(res)) {
          res = _.Vue.extend(res)
        }
        // cache resolved
        factory.resolved = res
        // invoke callbacks
        for (var i = 0, l = cbs.length; i < l; i++) {
          cbs[i](res)
        }
      }, function reject (reason) {
        process.env.NODE_ENV !== 'production' && _.warn(
          'Failed to resolve async component: ' + id + '. ' +
          (reason ? '\nReason: ' + reason : '')
        )
      })
    }
  } else {
    // normal component
    cb(factory)
  }
}

}).call(this,require('_process'))

},{"../util":116,"_process":41}],100:[function(require,module,exports){
(function (process){
var _ = require('../util')
var compiler = require('../compiler')
var Observer = require('../observer')
var Dep = require('../observer/dep')
var Watcher = require('../watcher')

/**
 * Setup the scope of an instance, which contains:
 * - observed data
 * - computed properties
 * - user methods
 * - meta properties
 */

exports._initState = function () {
  this._initProps()
  this._initMeta()
  this._initMethods()
  this._initData()
  this._initComputed()
}

/**
 * Initialize props.
 */

exports._initProps = function () {
  var options = this.$options
  var el = options.el
  var props = options.props
  if (props && !el) {
    process.env.NODE_ENV !== 'production' && _.warn(
      'Props will not be compiled if no `el` option is ' +
      'provided at instantiation.'
    )
  }
  // make sure to convert string selectors into element now
  el = options.el = _.query(el)
  this._propsUnlinkFn = el && el.nodeType === 1 && props
    // props must be linked in proper scope if inside v-for
    ? compiler.compileAndLinkProps(this, el, props, this._scope)
    : null
}

/**
 * Initialize the data.
 */

exports._initData = function () {
  var propsData = this._data
  var optionsDataFn = this.$options.data
  var optionsData = optionsDataFn && optionsDataFn()
  if (optionsData) {
    this._data = optionsData
    for (var prop in propsData) {
      if (process.env.NODE_ENV !== 'production' &&
          optionsData.hasOwnProperty(prop)) {
        _.warn(
          'Data field "' + prop + '" is already defined ' +
          'as a prop. Use prop default value instead.'
        )
      }
      if (this._props[prop].raw !== null ||
          !optionsData.hasOwnProperty(prop)) {
        _.set(optionsData, prop, propsData[prop])
      }
    }
  }
  var data = this._data
  // proxy data on instance
  var keys = Object.keys(data)
  var i, key
  i = keys.length
  while (i--) {
    key = keys[i]
    this._proxy(key)
  }
  // observe data
  Observer.create(data, this)
}

/**
 * Swap the isntance's $data. Called in $data's setter.
 *
 * @param {Object} newData
 */

exports._setData = function (newData) {
  newData = newData || {}
  var oldData = this._data
  this._data = newData
  var keys, key, i
  // unproxy keys not present in new data
  keys = Object.keys(oldData)
  i = keys.length
  while (i--) {
    key = keys[i]
    if (!(key in newData)) {
      this._unproxy(key)
    }
  }
  // proxy keys not already proxied,
  // and trigger change for changed values
  keys = Object.keys(newData)
  i = keys.length
  while (i--) {
    key = keys[i]
    if (!this.hasOwnProperty(key)) {
      // new property
      this._proxy(key)
    }
  }
  oldData.__ob__.removeVm(this)
  Observer.create(newData, this)
  this._digest()
}

/**
 * Proxy a property, so that
 * vm.prop === vm._data.prop
 *
 * @param {String} key
 */

exports._proxy = function (key) {
  if (!_.isReserved(key)) {
    // need to store ref to self here
    // because these getter/setters might
    // be called by child scopes via
    // prototype inheritance.
    var self = this
    Object.defineProperty(self, key, {
      configurable: true,
      enumerable: true,
      get: function proxyGetter () {
        return self._data[key]
      },
      set: function proxySetter (val) {
        self._data[key] = val
      }
    })
  }
}

/**
 * Unproxy a property.
 *
 * @param {String} key
 */

exports._unproxy = function (key) {
  if (!_.isReserved(key)) {
    delete this[key]
  }
}

/**
 * Force update on every watcher in scope.
 */

exports._digest = function () {
  for (var i = 0, l = this._watchers.length; i < l; i++) {
    this._watchers[i].update(true) // shallow updates
  }
}

/**
 * Setup computed properties. They are essentially
 * special getter/setters
 */

function noop () {}
exports._initComputed = function () {
  var computed = this.$options.computed
  if (computed) {
    for (var key in computed) {
      var userDef = computed[key]
      var def = {
        enumerable: true,
        configurable: true
      }
      if (typeof userDef === 'function') {
        def.get = makeComputedGetter(userDef, this)
        def.set = noop
      } else {
        def.get = userDef.get
          ? userDef.cache !== false
            ? makeComputedGetter(userDef.get, this)
            : _.bind(userDef.get, this)
          : noop
        def.set = userDef.set
          ? _.bind(userDef.set, this)
          : noop
      }
      Object.defineProperty(this, key, def)
    }
  }
}

function makeComputedGetter (getter, owner) {
  var watcher = new Watcher(owner, getter, null, {
    lazy: true
  })
  return function computedGetter () {
    if (watcher.dirty) {
      watcher.evaluate()
    }
    if (Dep.target) {
      watcher.depend()
    }
    return watcher.value
  }
}

/**
 * Setup instance methods. Methods must be bound to the
 * instance since they might be passed down as a prop to
 * child components.
 */

exports._initMethods = function () {
  var methods = this.$options.methods
  if (methods) {
    for (var key in methods) {
      this[key] = _.bind(methods[key], this)
    }
  }
}

/**
 * Initialize meta information like $index, $key & $value.
 */

exports._initMeta = function () {
  var metas = this.$options._meta
  if (metas) {
    for (var key in metas) {
      _.defineReactive(this, key, metas[key])
    }
  }
}

}).call(this,require('_process'))

},{"../compiler":63,"../observer":103,"../observer/dep":102,"../util":116,"../watcher":120,"_process":41}],101:[function(require,module,exports){
var _ = require('../util')
var arrayProto = Array.prototype
var arrayMethods = Object.create(arrayProto)

/**
 * Intercept mutating methods and emit events
 */

;[
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
]
.forEach(function (method) {
  // cache original method
  var original = arrayProto[method]
  _.define(arrayMethods, method, function mutator () {
    // avoid leaking arguments:
    // http://jsperf.com/closure-with-arguments
    var i = arguments.length
    var args = new Array(i)
    while (i--) {
      args[i] = arguments[i]
    }
    var result = original.apply(this, args)
    var ob = this.__ob__
    var inserted
    switch (method) {
      case 'push':
        inserted = args
        break
      case 'unshift':
        inserted = args
        break
      case 'splice':
        inserted = args.slice(2)
        break
    }
    if (inserted) ob.observeArray(inserted)
    // notify change
    ob.dep.notify()
    return result
  })
})

/**
 * Swap the element at the given index with a new value
 * and emits corresponding event.
 *
 * @param {Number} index
 * @param {*} val
 * @return {*} - replaced element
 */

_.define(
  arrayProto,
  '$set',
  function $set (index, val) {
    if (index >= this.length) {
      this.length = index + 1
    }
    return this.splice(index, 1, val)[0]
  }
)

/**
 * Convenience method to remove the element at given index.
 *
 * @param {Number} index
 * @param {*} val
 */

_.define(
  arrayProto,
  '$remove',
  function $remove (item) {
    /* istanbul ignore if */
    if (!this.length) return
    var index = _.indexOf(this, item)
    if (index > -1) {
      return this.splice(index, 1)
    }
  }
)

module.exports = arrayMethods

},{"../util":116}],102:[function(require,module,exports){
var _ = require('../util')
var uid = 0

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 *
 * @constructor
 */

function Dep () {
  this.id = uid++
  this.subs = []
}

// the current target watcher being evaluated.
// this is globally unique because there could be only one
// watcher being evaluated at any time.
Dep.target = null

/**
 * Add a directive subscriber.
 *
 * @param {Directive} sub
 */

Dep.prototype.addSub = function (sub) {
  this.subs.push(sub)
}

/**
 * Remove a directive subscriber.
 *
 * @param {Directive} sub
 */

Dep.prototype.removeSub = function (sub) {
  this.subs.$remove(sub)
}

/**
 * Add self as a dependency to the target watcher.
 */

Dep.prototype.depend = function () {
  Dep.target.addDep(this)
}

/**
 * Notify all subscribers of a new value.
 */

Dep.prototype.notify = function () {
  // stablize the subscriber list first
  var subs = _.toArray(this.subs)
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update()
  }
}

module.exports = Dep

},{"../util":116}],103:[function(require,module,exports){
var _ = require('../util')
var Dep = require('./dep')
var arrayMethods = require('./array')
var arrayKeys = Object.getOwnPropertyNames(arrayMethods)

/**
 * Observer class that are attached to each observed
 * object. Once attached, the observer converts target
 * object's property keys into getter/setters that
 * collect dependencies and dispatches updates.
 *
 * @param {Array|Object} value
 * @constructor
 */

function Observer (value) {
  this.value = value
  this.dep = new Dep()
  _.define(value, '__ob__', this)
  if (_.isArray(value)) {
    var augment = _.hasProto
      ? protoAugment
      : copyAugment
    augment(value, arrayMethods, arrayKeys)
    this.observeArray(value)
  } else {
    this.walk(value)
  }
}

// Static methods

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 *
 * @param {*} value
 * @param {Vue} [vm]
 * @return {Observer|undefined}
 * @static
 */

Observer.create = function (value, vm) {
  if (!value || typeof value !== 'object') {
    return
  }
  var ob
  if (
    value.hasOwnProperty('__ob__') &&
    value.__ob__ instanceof Observer
  ) {
    ob = value.__ob__
  } else if (
    (_.isArray(value) || _.isPlainObject(value)) &&
    !Object.isFrozen(value) &&
    !value._isVue
  ) {
    ob = new Observer(value)
  }
  if (ob && vm) {
    ob.addVm(vm)
  }
  return ob
}

// Instance methods

/**
 * Walk through each property and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 *
 * @param {Object} obj
 */

Observer.prototype.walk = function (obj) {
  var keys = Object.keys(obj)
  var i = keys.length
  while (i--) {
    this.convert(keys[i], obj[keys[i]])
  }
}

/**
 * Observe a list of Array items.
 *
 * @param {Array} items
 */

Observer.prototype.observeArray = function (items) {
  var i = items.length
  while (i--) {
    Observer.create(items[i])
  }
}

/**
 * Convert a property into getter/setter so we can emit
 * the events when the property is accessed/changed.
 *
 * @param {String} key
 * @param {*} val
 */

Observer.prototype.convert = function (key, val) {
  defineReactive(this.value, key, val)
}

/**
 * Add an owner vm, so that when $set/$delete mutations
 * happen we can notify owner vms to proxy the keys and
 * digest the watchers. This is only called when the object
 * is observed as an instance's root $data.
 *
 * @param {Vue} vm
 */

Observer.prototype.addVm = function (vm) {
  (this.vms || (this.vms = [])).push(vm)
}

/**
 * Remove an owner vm. This is called when the object is
 * swapped out as an instance's $data object.
 *
 * @param {Vue} vm
 */

Observer.prototype.removeVm = function (vm) {
  this.vms.$remove(vm)
}

// helpers

/**
 * Augment an target Object or Array by intercepting
 * the prototype chain using __proto__
 *
 * @param {Object|Array} target
 * @param {Object} proto
 */

function protoAugment (target, src) {
  target.__proto__ = src
}

/**
 * Augment an target Object or Array by defining
 * hidden properties.
 *
 * @param {Object|Array} target
 * @param {Object} proto
 */

function copyAugment (target, src, keys) {
  var i = keys.length
  var key
  while (i--) {
    key = keys[i]
    _.define(target, key, src[key])
  }
}

/**
 * Define a reactive property on an Object.
 *
 * @param {Object} obj
 * @param {String} key
 * @param {*} val
 */

function defineReactive (obj, key, val) {
  var dep = new Dep()
  var childOb = Observer.create(val)
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function metaGetter () {
      if (Dep.target) {
        dep.depend()
        if (childOb) {
          childOb.dep.depend()
        }
        if (_.isArray(val)) {
          for (var e, i = 0, l = val.length; i < l; i++) {
            e = val[i]
            e && e.__ob__ && e.__ob__.dep.depend()
          }
        }
      }
      return val
    },
    set: function metaSetter (newVal) {
      if (newVal === val) return
      val = newVal
      childOb = Observer.create(newVal)
      dep.notify()
    }
  })
}

// Attach to the util object so it can be used elsewhere.
_.defineReactive = defineReactive

module.exports = Observer

},{"../util":116,"./array":101,"./dep":102}],104:[function(require,module,exports){
var _ = require('../util')
var Cache = require('../cache')
var cache = new Cache(1000)
var filterTokenRE = /[^\s'"]+|'[^']*'|"[^"]*"/g
var reservedArgRE = /^in$|^-?\d+/

/**
 * Parser state
 */

var str, dir
var c, i, l, lastFilterIndex
var inSingle, inDouble, curly, square, paren

/**
 * Push a filter to the current directive object
 */

function pushFilter () {
  var exp = str.slice(lastFilterIndex, i).trim()
  var filter
  if (exp) {
    filter = {}
    var tokens = exp.match(filterTokenRE)
    filter.name = tokens[0]
    if (tokens.length > 1) {
      filter.args = tokens.slice(1).map(processFilterArg)
    }
  }
  if (filter) {
    (dir.filters = dir.filters || []).push(filter)
  }
  lastFilterIndex = i + 1
}

/**
 * Check if an argument is dynamic and strip quotes.
 *
 * @param {String} arg
 * @return {Object}
 */

function processFilterArg (arg) {
  if (reservedArgRE.test(arg)) {
    return {
      value: _.toNumber(arg),
      dynamic: false
    }
  } else {
    var stripped = _.stripQuotes(arg)
    var dynamic = stripped === arg
    return {
      value: dynamic ? arg : stripped,
      dynamic: dynamic
    }
  }
}

/**
 * Parse a directive value and extract the expression
 * and its filters into a descriptor.
 *
 * Example:
 *
 * "a + 1 | uppercase" will yield:
 * {
 *   expression: 'a + 1',
 *   filters: [
 *     { name: 'uppercase', args: null }
 *   ]
 * }
 *
 * @param {String} str
 * @return {Object}
 */

exports.parse = function (s) {

  var hit = cache.get(s)
  if (hit) {
    return hit
  }

  // reset parser state
  str = s
  inSingle = inDouble = false
  curly = square = paren = 0
  lastFilterIndex = 0
  dir = {}

  for (i = 0, l = str.length; i < l; i++) {
    c = str.charCodeAt(i)
    if (inSingle) {
      // check single quote
      if (c === 0x27) inSingle = !inSingle
    } else if (inDouble) {
      // check double quote
      if (c === 0x22) inDouble = !inDouble
    } else if (
      c === 0x7C && // pipe
      str.charCodeAt(i + 1) !== 0x7C &&
      str.charCodeAt(i - 1) !== 0x7C
    ) {
      if (dir.expression == null) {
        // first filter, end of expression
        lastFilterIndex = i + 1
        dir.expression = str.slice(0, i).trim()
      } else {
        // already has filter
        pushFilter()
      }
    } else {
      switch (c) {
        case 0x22: inDouble = true; break // "
        case 0x27: inSingle = true; break // '
        case 0x28: paren++; break         // (
        case 0x29: paren--; break         // )
        case 0x5B: square++; break        // [
        case 0x5D: square--; break        // ]
        case 0x7B: curly++; break         // {
        case 0x7D: curly--; break         // }
      }
    }
  }

  if (dir.expression == null) {
    dir.expression = str.slice(0, i).trim()
  } else if (lastFilterIndex !== 0) {
    pushFilter()
  }

  cache.put(s, dir)
  return dir
}

},{"../cache":60,"../util":116}],105:[function(require,module,exports){
(function (process){
var _ = require('../util')
var Path = require('./path')
var Cache = require('../cache')
var expressionCache = new Cache(1000)

var allowedKeywords =
  'Math,Date,this,true,false,null,undefined,Infinity,NaN,' +
  'isNaN,isFinite,decodeURI,decodeURIComponent,encodeURI,' +
  'encodeURIComponent,parseInt,parseFloat'
var allowedKeywordsRE =
  new RegExp('^(' + allowedKeywords.replace(/,/g, '\\b|') + '\\b)')

// keywords that don't make sense inside expressions
var improperKeywords =
  'break,case,class,catch,const,continue,debugger,default,' +
  'delete,do,else,export,extends,finally,for,function,if,' +
  'import,in,instanceof,let,return,super,switch,throw,try,' +
  'var,while,with,yield,enum,await,implements,package,' +
  'proctected,static,interface,private,public'
var improperKeywordsRE =
  new RegExp('^(' + improperKeywords.replace(/,/g, '\\b|') + '\\b)')

var wsRE = /\s/g
var newlineRE = /\n/g
var saveRE = /[\{,]\s*[\w\$_]+\s*:|('[^']*'|"[^"]*")|new |typeof |void /g
var restoreRE = /"(\d+)"/g
var pathTestRE = /^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\]|\[[A-Za-z_$][\w$]*\])*$/
var pathReplaceRE = /[^\w$\.]([A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\])*)/g
var booleanLiteralRE = /^(true|false)$/

/**
 * Save / Rewrite / Restore
 *
 * When rewriting paths found in an expression, it is
 * possible for the same letter sequences to be found in
 * strings and Object literal property keys. Therefore we
 * remove and store these parts in a temporary array, and
 * restore them after the path rewrite.
 */

var saved = []

/**
 * Save replacer
 *
 * The save regex can match two possible cases:
 * 1. An opening object literal
 * 2. A string
 * If matched as a plain string, we need to escape its
 * newlines, since the string needs to be preserved when
 * generating the function body.
 *
 * @param {String} str
 * @param {String} isString - str if matched as a string
 * @return {String} - placeholder with index
 */

function save (str, isString) {
  var i = saved.length
  saved[i] = isString
    ? str.replace(newlineRE, '\\n')
    : str
  return '"' + i + '"'
}

/**
 * Path rewrite replacer
 *
 * @param {String} raw
 * @return {String}
 */

function rewrite (raw) {
  var c = raw.charAt(0)
  var path = raw.slice(1)
  if (allowedKeywordsRE.test(path)) {
    return raw
  } else {
    path = path.indexOf('"') > -1
      ? path.replace(restoreRE, restore)
      : path
    return c + 'scope.' + path
  }
}

/**
 * Restore replacer
 *
 * @param {String} str
 * @param {String} i - matched save index
 * @return {String}
 */

function restore (str, i) {
  return saved[i]
}

/**
 * Rewrite an expression, prefixing all path accessors with
 * `scope.` and generate getter/setter functions.
 *
 * @param {String} exp
 * @param {Boolean} needSet
 * @return {Function}
 */

function compileExpFns (exp, needSet) {
  if (improperKeywordsRE.test(exp)) {
    process.env.NODE_ENV !== 'production' && _.warn(
      'Avoid using reserved keywords in expression: ' + exp
    )
  }
  // reset state
  saved.length = 0
  // save strings and object literal keys
  var body = exp
    .replace(saveRE, save)
    .replace(wsRE, '')
  // rewrite all paths
  // pad 1 space here becaue the regex matches 1 extra char
  body = (' ' + body)
    .replace(pathReplaceRE, rewrite)
    .replace(restoreRE, restore)
  var getter = makeGetter(body)
  if (getter) {
    return {
      get: getter,
      body: body,
      set: needSet
        ? makeSetter(body)
        : null
    }
  }
}

/**
 * Compile getter setters for a simple path.
 *
 * @param {String} exp
 * @return {Function}
 */

function compilePathFns (exp) {
  var getter, path
  if (exp.indexOf('[') < 0) {
    // really simple path
    path = exp.split('.')
    path.raw = exp
    getter = Path.compileGetter(path)
  } else {
    // do the real parsing
    path = Path.parse(exp)
    getter = path.get
  }
  return {
    get: getter,
    // always generate setter for simple paths
    set: function (obj, val) {
      Path.set(obj, path, val)
    }
  }
}

/**
 * Build a getter function. Requires eval.
 *
 * We isolate the try/catch so it doesn't affect the
 * optimization of the parse function when it is not called.
 *
 * @param {String} body
 * @return {Function|undefined}
 */

function makeGetter (body) {
  try {
    return new Function('scope', 'return ' + body + ';')
  } catch (e) {
    process.env.NODE_ENV !== 'production' && _.warn(
      'Invalid expression. ' +
      'Generated function body: ' + body
    )
  }
}

/**
 * Build a setter function.
 *
 * This is only needed in rare situations like "a[b]" where
 * a settable path requires dynamic evaluation.
 *
 * This setter function may throw error when called if the
 * expression body is not a valid left-hand expression in
 * assignment.
 *
 * @param {String} body
 * @return {Function|undefined}
 */

function makeSetter (body) {
  try {
    return new Function('scope', 'value', body + '=value;')
  } catch (e) {
    process.env.NODE_ENV !== 'production' && _.warn(
      'Invalid setter function body: ' + body
    )
  }
}

/**
 * Check for setter existence on a cache hit.
 *
 * @param {Function} hit
 */

function checkSetter (hit) {
  if (!hit.set) {
    hit.set = makeSetter(hit.body)
  }
}

/**
 * Parse an expression into re-written getter/setters.
 *
 * @param {String} exp
 * @param {Boolean} needSet
 * @return {Function}
 */

exports.parse = function (exp, needSet) {
  exp = exp.trim()
  // try cache
  var hit = expressionCache.get(exp)
  if (hit) {
    if (needSet) {
      checkSetter(hit)
    }
    return hit
  }
  // we do a simple path check to optimize for them.
  // the check fails valid paths with unusal whitespaces,
  // but that's too rare and we don't care.
  // also skip boolean literals and paths that start with
  // global "Math"
  var res = exports.isSimplePath(exp)
    ? compilePathFns(exp)
    : compileExpFns(exp, needSet)
  expressionCache.put(exp, res)
  return res
}

/**
 * Check if an expression is a simple path.
 *
 * @param {String} exp
 * @return {Boolean}
 */

exports.isSimplePath = function (exp) {
  return pathTestRE.test(exp) &&
    // don't treat true/false as paths
    !booleanLiteralRE.test(exp) &&
    // Math constants e.g. Math.PI, Math.E etc.
    exp.slice(0, 5) !== 'Math.'
}

}).call(this,require('_process'))

},{"../cache":60,"../util":116,"./path":106,"_process":41}],106:[function(require,module,exports){
(function (process){
var _ = require('../util')
var Cache = require('../cache')
var pathCache = new Cache(1000)
var identRE = exports.identRE = /^[$_a-zA-Z]+[\w$]*$/

// actions
var APPEND = 0
var PUSH = 1

// states
var BEFORE_PATH = 0
var IN_PATH = 1
var BEFORE_IDENT = 2
var IN_IDENT = 3
var BEFORE_ELEMENT = 4
var AFTER_ZERO = 5
var IN_INDEX = 6
var IN_SINGLE_QUOTE = 7
var IN_DOUBLE_QUOTE = 8
var IN_SUB_PATH = 9
var AFTER_ELEMENT = 10
var AFTER_PATH = 11
var ERROR = 12

var pathStateMachine = []

pathStateMachine[BEFORE_PATH] = {
  'ws': [BEFORE_PATH],
  'ident': [IN_IDENT, APPEND],
  '[': [BEFORE_ELEMENT],
  'eof': [AFTER_PATH]
}

pathStateMachine[IN_PATH] = {
  'ws': [IN_PATH],
  '.': [BEFORE_IDENT],
  '[': [BEFORE_ELEMENT],
  'eof': [AFTER_PATH]
}

pathStateMachine[BEFORE_IDENT] = {
  'ws': [BEFORE_IDENT],
  'ident': [IN_IDENT, APPEND]
}

pathStateMachine[IN_IDENT] = {
  'ident': [IN_IDENT, APPEND],
  '0': [IN_IDENT, APPEND],
  'number': [IN_IDENT, APPEND],
  'ws': [IN_PATH, PUSH],
  '.': [BEFORE_IDENT, PUSH],
  '[': [BEFORE_ELEMENT, PUSH],
  'eof': [AFTER_PATH, PUSH]
}

pathStateMachine[BEFORE_ELEMENT] = {
  'ws': [BEFORE_ELEMENT],
  '0': [AFTER_ZERO, APPEND],
  'number': [IN_INDEX, APPEND],
  "'": [IN_SINGLE_QUOTE, APPEND, ''],
  '"': [IN_DOUBLE_QUOTE, APPEND, ''],
  'ident': [IN_SUB_PATH, APPEND, '*']
}

pathStateMachine[AFTER_ZERO] = {
  'ws': [AFTER_ELEMENT, PUSH],
  ']': [IN_PATH, PUSH]
}

pathStateMachine[IN_INDEX] = {
  '0': [IN_INDEX, APPEND],
  'number': [IN_INDEX, APPEND],
  'ws': [AFTER_ELEMENT],
  ']': [IN_PATH, PUSH]
}

pathStateMachine[IN_SINGLE_QUOTE] = {
  "'": [AFTER_ELEMENT],
  'eof': ERROR,
  'else': [IN_SINGLE_QUOTE, APPEND]
}

pathStateMachine[IN_DOUBLE_QUOTE] = {
  '"': [AFTER_ELEMENT],
  'eof': ERROR,
  'else': [IN_DOUBLE_QUOTE, APPEND]
}

pathStateMachine[IN_SUB_PATH] = {
  'ident': [IN_SUB_PATH, APPEND],
  '0': [IN_SUB_PATH, APPEND],
  'number': [IN_SUB_PATH, APPEND],
  'ws': [AFTER_ELEMENT],
  ']': [IN_PATH, PUSH]
}

pathStateMachine[AFTER_ELEMENT] = {
  'ws': [AFTER_ELEMENT],
  ']': [IN_PATH, PUSH]
}

/**
 * Determine the type of a character in a keypath.
 *
 * @param {Char} ch
 * @return {String} type
 */

function getPathCharType (ch) {
  if (ch === undefined) {
    return 'eof'
  }

  var code = ch.charCodeAt(0)

  switch (code) {
    case 0x5B: // [
    case 0x5D: // ]
    case 0x2E: // .
    case 0x22: // "
    case 0x27: // '
    case 0x30: // 0
      return ch

    case 0x5F: // _
    case 0x24: // $
      return 'ident'

    case 0x20: // Space
    case 0x09: // Tab
    case 0x0A: // Newline
    case 0x0D: // Return
    case 0xA0:  // No-break space
    case 0xFEFF:  // Byte Order Mark
    case 0x2028:  // Line Separator
    case 0x2029:  // Paragraph Separator
      return 'ws'
  }

  // a-z, A-Z
  if (
    (code >= 0x61 && code <= 0x7A) ||
    (code >= 0x41 && code <= 0x5A)
  ) {
    return 'ident'
  }

  // 1-9
  if (code >= 0x31 && code <= 0x39) {
    return 'number'
  }

  return 'else'
}

/**
 * Parse a string path into an array of segments
 *
 * @param {String} path
 * @return {Array|undefined}
 */

function parsePath (path) {
  var keys = []
  var index = -1
  var mode = BEFORE_PATH
  var c, newChar, key, type, transition, action, typeMap

  var actions = []
  actions[PUSH] = function () {
    if (key === undefined) {
      return
    }
    keys.push(key)
    key = undefined
  }
  actions[APPEND] = function () {
    if (key === undefined) {
      key = newChar
    } else {
      key += newChar
    }
  }

  function maybeUnescapeQuote () {
    var nextChar = path[index + 1]
    if ((mode === IN_SINGLE_QUOTE && nextChar === "'") ||
        (mode === IN_DOUBLE_QUOTE && nextChar === '"')) {
      index++
      newChar = nextChar
      actions[APPEND]()
      return true
    }
  }

  while (mode != null) {
    index++
    c = path[index]

    if (c === '\\' && maybeUnescapeQuote()) {
      continue
    }

    type = getPathCharType(c)
    typeMap = pathStateMachine[mode]
    transition = typeMap[type] || typeMap['else'] || ERROR

    if (transition === ERROR) {
      return // parse error
    }

    mode = transition[0]
    action = actions[transition[1]]
    if (action) {
      newChar = transition[2]
      newChar = newChar === undefined
        ? c
        : newChar === '*'
          ? newChar + c
          : newChar
      action()
    }

    if (mode === AFTER_PATH) {
      keys.raw = path
      return keys
    }
  }
}

/**
 * Format a accessor segment based on its type.
 *
 * @param {String} key
 * @return {Boolean}
 */

function formatAccessor (key) {
  if (identRE.test(key)) { // identifier
    return '.' + key
  } else if (+key === key >>> 0) { // bracket index
    return '[' + key + ']'
  } else if (key.charAt(0) === '*') {
    return '[o' + formatAccessor(key.slice(1)) + ']'
  } else { // bracket string
    return '["' + key.replace(/"/g, '\\"') + '"]'
  }
}

/**
 * Compiles a getter function with a fixed path.
 * The fixed path getter supresses errors.
 *
 * @param {Array} path
 * @return {Function}
 */

exports.compileGetter = function (path) {
  var body = 'return o' + path.map(formatAccessor).join('')
  return new Function('o', body)
}

/**
 * External parse that check for a cache hit first
 *
 * @param {String} path
 * @return {Array|undefined}
 */

exports.parse = function (path) {
  var hit = pathCache.get(path)
  if (!hit) {
    hit = parsePath(path)
    if (hit) {
      hit.get = exports.compileGetter(hit)
      pathCache.put(path, hit)
    }
  }
  return hit
}

/**
 * Get from an object from a path string
 *
 * @param {Object} obj
 * @param {String} path
 */

exports.get = function (obj, path) {
  path = exports.parse(path)
  if (path) {
    return path.get(obj)
  }
}

/**
 * Warn against setting non-existent root path on a vm.
 */

var warnNonExistent
if (process.env.NODE_ENV !== 'production') {
  warnNonExistent = function (path) {
    _.warn(
      'You are setting a non-existent path "' + path.raw + '" ' +
      'on a vm instance. Consider pre-initializing the property ' +
      'with the "data" option for more reliable reactivity ' +
      'and better performance.'
    )
  }
}

/**
 * Set on an object from a path
 *
 * @param {Object} obj
 * @param {String | Array} path
 * @param {*} val
 */

exports.set = function (obj, path, val) {
  var original = obj
  if (typeof path === 'string') {
    path = exports.parse(path)
  }
  if (!path || !_.isObject(obj)) {
    return false
  }
  var last, key
  for (var i = 0, l = path.length; i < l; i++) {
    last = obj
    key = path[i]
    if (key.charAt(0) === '*') {
      key = original[key.slice(1)]
    }
    if (i < l - 1) {
      obj = obj[key]
      if (!_.isObject(obj)) {
        obj = {}
        if (process.env.NODE_ENV !== 'production' && last._isVue) {
          warnNonExistent(path)
        }
        _.set(last, key, obj)
      }
    } else {
      if (_.isArray(obj)) {
        obj.$set(key, val)
      } else if (key in obj) {
        obj[key] = val
      } else {
        if (process.env.NODE_ENV !== 'production' && obj._isVue) {
          warnNonExistent(path)
        }
        _.set(obj, key, val)
      }
    }
  }
  return true
}

}).call(this,require('_process'))

},{"../cache":60,"../util":116,"_process":41}],107:[function(require,module,exports){
var _ = require('../util')
var Cache = require('../cache')
var templateCache = new Cache(1000)
var idSelectorCache = new Cache(1000)

var map = {
  _default: [0, '', ''],
  legend: [1, '<fieldset>', '</fieldset>'],
  tr: [2, '<table><tbody>', '</tbody></table>'],
  col: [
    2,
    '<table><tbody></tbody><colgroup>',
    '</colgroup></table>'
  ]
}

map.td =
map.th = [
  3,
  '<table><tbody><tr>',
  '</tr></tbody></table>'
]

map.option =
map.optgroup = [
  1,
  '<select multiple="multiple">',
  '</select>'
]

map.thead =
map.tbody =
map.colgroup =
map.caption =
map.tfoot = [1, '<table>', '</table>']

map.g =
map.defs =
map.symbol =
map.use =
map.image =
map.text =
map.circle =
map.ellipse =
map.line =
map.path =
map.polygon =
map.polyline =
map.rect = [
  1,
  '<svg ' +
    'xmlns="http://www.w3.org/2000/svg" ' +
    'xmlns:xlink="http://www.w3.org/1999/xlink" ' +
    'xmlns:ev="http://www.w3.org/2001/xml-events"' +
    'version="1.1">',
  '</svg>'
]

/**
 * Check if a node is a supported template node with a
 * DocumentFragment content.
 *
 * @param {Node} node
 * @return {Boolean}
 */

function isRealTemplate (node) {
  return _.isTemplate(node) &&
    node.content instanceof DocumentFragment
}

var tagRE = /<([\w:]+)/
var entityRE = /&\w+;|&#\d+;|&#x[\dA-F]+;/

/**
 * Convert a string template to a DocumentFragment.
 * Determines correct wrapping by tag types. Wrapping
 * strategy found in jQuery & component/domify.
 *
 * @param {String} templateString
 * @return {DocumentFragment}
 */

function stringToFragment (templateString) {
  // try a cache hit first
  var hit = templateCache.get(templateString)
  if (hit) {
    return hit
  }

  var frag = document.createDocumentFragment()
  var tagMatch = templateString.match(tagRE)
  var entityMatch = entityRE.test(templateString)

  if (!tagMatch && !entityMatch) {
    // text only, return a single text node.
    frag.appendChild(
      document.createTextNode(templateString)
    )
  } else {

    var tag = tagMatch && tagMatch[1]
    var wrap = map[tag] || map._default
    var depth = wrap[0]
    var prefix = wrap[1]
    var suffix = wrap[2]
    var node = document.createElement('div')

    node.innerHTML = prefix + templateString.trim() + suffix
    while (depth--) {
      node = node.lastChild
    }

    var child
    /* eslint-disable no-cond-assign */
    while (child = node.firstChild) {
    /* eslint-enable no-cond-assign */
      frag.appendChild(child)
    }
  }

  templateCache.put(templateString, frag)
  return frag
}

/**
 * Convert a template node to a DocumentFragment.
 *
 * @param {Node} node
 * @return {DocumentFragment}
 */

function nodeToFragment (node) {
  // if its a template tag and the browser supports it,
  // its content is already a document fragment.
  if (isRealTemplate(node)) {
    _.trimNode(node.content)
    return node.content
  }
  // script template
  if (node.tagName === 'SCRIPT') {
    return stringToFragment(node.textContent)
  }
  // normal node, clone it to avoid mutating the original
  var clone = exports.clone(node)
  var frag = document.createDocumentFragment()
  var child
  /* eslint-disable no-cond-assign */
  while (child = clone.firstChild) {
  /* eslint-enable no-cond-assign */
    frag.appendChild(child)
  }
  _.trimNode(frag)
  return frag
}

// Test for the presence of the Safari template cloning bug
// https://bugs.webkit.org/show_bug.cgi?id=137755
var hasBrokenTemplate = (function () {
  /* istanbul ignore else */
  if (_.inBrowser) {
    var a = document.createElement('div')
    a.innerHTML = '<template>1</template>'
    return !a.cloneNode(true).firstChild.innerHTML
  } else {
    return false
  }
})()

// Test for IE10/11 textarea placeholder clone bug
var hasTextareaCloneBug = (function () {
  /* istanbul ignore else */
  if (_.inBrowser) {
    var t = document.createElement('textarea')
    t.placeholder = 't'
    return t.cloneNode(true).value === 't'
  } else {
    return false
  }
})()

/**
 * 1. Deal with Safari cloning nested <template> bug by
 *    manually cloning all template instances.
 * 2. Deal with IE10/11 textarea placeholder bug by setting
 *    the correct value after cloning.
 *
 * @param {Element|DocumentFragment} node
 * @return {Element|DocumentFragment}
 */

exports.clone = function (node) {
  if (!node.querySelectorAll) {
    return node.cloneNode()
  }
  var res = node.cloneNode(true)
  var i, original, cloned
  /* istanbul ignore if */
  if (hasBrokenTemplate) {
    var clone = res
    if (isRealTemplate(node)) {
      node = node.content
      clone = res.content
    }
    original = node.querySelectorAll('template')
    if (original.length) {
      cloned = clone.querySelectorAll('template')
      i = cloned.length
      while (i--) {
        cloned[i].parentNode.replaceChild(
          exports.clone(original[i]),
          cloned[i]
        )
      }
    }
  }
  /* istanbul ignore if */
  if (hasTextareaCloneBug) {
    if (node.tagName === 'TEXTAREA') {
      res.value = node.value
    } else {
      original = node.querySelectorAll('textarea')
      if (original.length) {
        cloned = res.querySelectorAll('textarea')
        i = cloned.length
        while (i--) {
          cloned[i].value = original[i].value
        }
      }
    }
  }
  return res
}

/**
 * Process the template option and normalizes it into a
 * a DocumentFragment that can be used as a partial or a
 * instance template.
 *
 * @param {*} template
 *    Possible values include:
 *    - DocumentFragment object
 *    - Node object of type Template
 *    - id selector: '#some-template-id'
 *    - template string: '<div><span>{{msg}}</span></div>'
 * @param {Boolean} clone
 * @param {Boolean} noSelector
 * @return {DocumentFragment|undefined}
 */

exports.parse = function (template, clone, noSelector) {
  var node, frag

  // if the template is already a document fragment,
  // do nothing
  if (template instanceof DocumentFragment) {
    _.trimNode(template)
    return clone
      ? exports.clone(template)
      : template
  }

  if (typeof template === 'string') {
    // id selector
    if (!noSelector && template.charAt(0) === '#') {
      // id selector can be cached too
      frag = idSelectorCache.get(template)
      if (!frag) {
        node = document.getElementById(template.slice(1))
        if (node) {
          frag = nodeToFragment(node)
          // save selector to cache
          idSelectorCache.put(template, frag)
        }
      }
    } else {
      // normal string template
      frag = stringToFragment(template)
    }
  } else if (template.nodeType) {
    // a direct node
    frag = nodeToFragment(template)
  }

  return frag && clone
    ? exports.clone(frag)
    : frag
}

},{"../cache":60,"../util":116}],108:[function(require,module,exports){
var Cache = require('../cache')
var config = require('../config')
var dirParser = require('./directive')
var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g
var cache, tagRE, htmlRE

/**
 * Escape a string so it can be used in a RegExp
 * constructor.
 *
 * @param {String} str
 */

function escapeRegex (str) {
  return str.replace(regexEscapeRE, '\\$&')
}

exports.compileRegex = function () {
  var open = escapeRegex(config.delimiters[0])
  var close = escapeRegex(config.delimiters[1])
  var unsafeOpen = escapeRegex(config.unsafeDelimiters[0])
  var unsafeClose = escapeRegex(config.unsafeDelimiters[1])
  tagRE = new RegExp(
    unsafeOpen + '(.+?)' + unsafeClose + '|' +
    open + '(.+?)' + close,
    'g'
  )
  htmlRE = new RegExp(
    '^' + unsafeOpen + '.*' + unsafeClose + '$'
  )
  // reset cache
  cache = new Cache(1000)
}

/**
 * Parse a template text string into an array of tokens.
 *
 * @param {String} text
 * @return {Array<Object> | null}
 *               - {String} type
 *               - {String} value
 *               - {Boolean} [html]
 *               - {Boolean} [oneTime]
 */

exports.parse = function (text) {
  if (!cache) {
    exports.compileRegex()
  }
  var hit = cache.get(text)
  if (hit) {
    return hit
  }
  text = text.replace(/\n/g, '')
  if (!tagRE.test(text)) {
    return null
  }
  var tokens = []
  var lastIndex = tagRE.lastIndex = 0
  var match, index, html, value, first, oneTime
  /* eslint-disable no-cond-assign */
  while (match = tagRE.exec(text)) {
  /* eslint-enable no-cond-assign */
    index = match.index
    // push text token
    if (index > lastIndex) {
      tokens.push({
        value: text.slice(lastIndex, index)
      })
    }
    // tag token
    html = htmlRE.test(match[0])
    value = html ? match[1] : match[2]
    first = value.charCodeAt(0)
    oneTime = first === 42 // *
    value = oneTime
      ? value.slice(1)
      : value
    tokens.push({
      tag: true,
      value: value.trim(),
      html: html,
      oneTime: oneTime
    })
    lastIndex = index + match[0].length
  }
  if (lastIndex < text.length) {
    tokens.push({
      value: text.slice(lastIndex)
    })
  }
  cache.put(text, tokens)
  return tokens
}

/**
 * Format a list of tokens into an expression.
 * e.g. tokens parsed from 'a {{b}} c' can be serialized
 * into one single expression as '"a " + b + " c"'.
 *
 * @param {Array} tokens
 * @return {String}
 */

exports.tokensToExp = function (tokens) {
  if (tokens.length > 1) {
    return tokens.map(function (token) {
      return formatToken(token)
    }).join('+')
  } else {
    return formatToken(tokens[0], true)
  }
}

/**
 * Format a single token.
 *
 * @param {Object} token
 * @param {Boolean} single
 * @return {String}
 */

function formatToken (token, single) {
  return token.tag
    ? inlineFilters(token.value, single)
    : '"' + token.value + '"'
}

/**
 * For an attribute with multiple interpolation tags,
 * e.g. attr="some-{{thing | filter}}", in order to combine
 * the whole thing into a single watchable expression, we
 * have to inline those filters. This function does exactly
 * that. This is a bit hacky but it avoids heavy changes
 * to directive parser and watcher mechanism.
 *
 * @param {String} exp
 * @param {Boolean} single
 * @return {String}
 */

var filterRE = /[^|]\|[^|]/
function inlineFilters (exp, single) {
  if (!filterRE.test(exp)) {
    return single
      ? exp
      : '(' + exp + ')'
  } else {
    var dir = dirParser.parse(exp)
    if (!dir.filters) {
      return '(' + exp + ')'
    } else {
      return 'this._applyFilters(' +
        dir.expression + // value
        ',null,' +       // oldValue (null for read)
        JSON.stringify(dir.filters) + // filter descriptors
        ',false)'        // write?
    }
  }
}

},{"../cache":60,"../config":65,"./directive":104}],109:[function(require,module,exports){
var _ = require('../util')

/**
 * Append with transition.
 *
 * @param {Element} el
 * @param {Element} target
 * @param {Vue} vm
 * @param {Function} [cb]
 */

exports.append = function (el, target, vm, cb) {
  apply(el, 1, function () {
    target.appendChild(el)
  }, vm, cb)
}

/**
 * InsertBefore with transition.
 *
 * @param {Element} el
 * @param {Element} target
 * @param {Vue} vm
 * @param {Function} [cb]
 */

exports.before = function (el, target, vm, cb) {
  apply(el, 1, function () {
    _.before(el, target)
  }, vm, cb)
}

/**
 * Remove with transition.
 *
 * @param {Element} el
 * @param {Vue} vm
 * @param {Function} [cb]
 */

exports.remove = function (el, vm, cb) {
  apply(el, -1, function () {
    _.remove(el)
  }, vm, cb)
}

/**
 * Apply transitions with an operation callback.
 *
 * @param {Element} el
 * @param {Number} direction
 *                  1: enter
 *                 -1: leave
 * @param {Function} op - the actual DOM operation
 * @param {Vue} vm
 * @param {Function} [cb]
 */

var apply = exports.apply = function (el, direction, op, vm, cb) {
  var transition = el.__v_trans
  if (
    !transition ||
    // skip if there are no js hooks and CSS transition is
    // not supported
    (!transition.hooks && !_.transitionEndEvent) ||
    // skip transitions for initial compile
    !vm._isCompiled ||
    // if the vm is being manipulated by a parent directive
    // during the parent's compilation phase, skip the
    // animation.
    (vm.$parent && !vm.$parent._isCompiled)
  ) {
    op()
    if (cb) cb()
    return
  }
  var action = direction > 0 ? 'enter' : 'leave'
  transition[action](op, cb)
}

},{"../util":116}],110:[function(require,module,exports){
var _ = require('../util')
var queue = []
var queued = false

/**
 * Push a job into the queue.
 *
 * @param {Function} job
 */

exports.push = function (job) {
  queue.push(job)
  if (!queued) {
    queued = true
    _.nextTick(flush)
  }
}

/**
 * Flush the queue, and do one forced reflow before
 * triggering transitions.
 */

function flush () {
  // Force layout
  var f = document.documentElement.offsetHeight
  for (var i = 0; i < queue.length; i++) {
    queue[i]()
  }
  queue = []
  queued = false
  // dummy return, so js linters don't complain about
  // unused variable f
  return f
}

},{"../util":116}],111:[function(require,module,exports){
var _ = require('../util')
var queue = require('./queue')
var addClass = _.addClass
var removeClass = _.removeClass
var transitionEndEvent = _.transitionEndEvent
var animationEndEvent = _.animationEndEvent
var transDurationProp = _.transitionProp + 'Duration'
var animDurationProp = _.animationProp + 'Duration'

var TYPE_TRANSITION = 1
var TYPE_ANIMATION = 2

/**
 * A Transition object that encapsulates the state and logic
 * of the transition.
 *
 * @param {Element} el
 * @param {String} id
 * @param {Object} hooks
 * @param {Vue} vm
 */

function Transition (el, id, hooks, vm) {
  this.id = id
  this.el = el
  this.enterClass = id + '-enter'
  this.leaveClass = id + '-leave'
  this.hooks = hooks
  this.vm = vm
  // async state
  this.pendingCssEvent =
  this.pendingCssCb =
  this.cancel =
  this.pendingJsCb =
  this.op =
  this.cb = null
  this.justEntered = false
  this.entered = this.left = false
  this.typeCache = {}
  // bind
  var self = this
  ;['enterNextTick', 'enterDone', 'leaveNextTick', 'leaveDone']
    .forEach(function (m) {
      self[m] = _.bind(self[m], self)
    })
}

var p = Transition.prototype

/**
 * Start an entering transition.
 *
 * 1. enter transition triggered
 * 2. call beforeEnter hook
 * 3. add enter class
 * 4. insert/show element
 * 5. call enter hook (with possible explicit js callback)
 * 6. reflow
 * 7. based on transition type:
 *    - transition:
 *        remove class now, wait for transitionend,
 *        then done if there's no explicit js callback.
 *    - animation:
 *        wait for animationend, remove class,
 *        then done if there's no explicit js callback.
 *    - no css transition:
 *        done now if there's no explicit js callback.
 * 8. wait for either done or js callback, then call
 *    afterEnter hook.
 *
 * @param {Function} op - insert/show the element
 * @param {Function} [cb]
 */

p.enter = function (op, cb) {
  this.cancelPending()
  this.callHook('beforeEnter')
  this.cb = cb
  addClass(this.el, this.enterClass)
  op()
  this.entered = false
  this.callHookWithCb('enter')
  if (this.entered) {
    return // user called done synchronously.
  }
  this.cancel = this.hooks && this.hooks.enterCancelled
  queue.push(this.enterNextTick)
}

/**
 * The "nextTick" phase of an entering transition, which is
 * to be pushed into a queue and executed after a reflow so
 * that removing the class can trigger a CSS transition.
 */

p.enterNextTick = function () {

  // Important hack:
  // in Chrome, if a just-entered element is applied the
  // leave class while its interpolated property still has
  // a very small value (within one frame), Chrome will
  // skip the leave transition entirely and not firing the
  // transtionend event. Therefore we need to protected
  // against such cases using a one-frame timeout.
  this.justEntered = true
  var self = this
  setTimeout(function () {
    self.justEntered = false
  }, 17)

  var enterDone = this.enterDone
  var type = this.getCssTransitionType(this.enterClass)
  if (!this.pendingJsCb) {
    if (type === TYPE_TRANSITION) {
      // trigger transition by removing enter class now
      removeClass(this.el, this.enterClass)
      this.setupCssCb(transitionEndEvent, enterDone)
    } else if (type === TYPE_ANIMATION) {
      this.setupCssCb(animationEndEvent, enterDone)
    } else {
      enterDone()
    }
  } else if (type === TYPE_TRANSITION) {
    removeClass(this.el, this.enterClass)
  }
}

/**
 * The "cleanup" phase of an entering transition.
 */

p.enterDone = function () {
  this.entered = true
  this.cancel = this.pendingJsCb = null
  removeClass(this.el, this.enterClass)
  this.callHook('afterEnter')
  if (this.cb) this.cb()
}

/**
 * Start a leaving transition.
 *
 * 1. leave transition triggered.
 * 2. call beforeLeave hook
 * 3. add leave class (trigger css transition)
 * 4. call leave hook (with possible explicit js callback)
 * 5. reflow if no explicit js callback is provided
 * 6. based on transition type:
 *    - transition or animation:
 *        wait for end event, remove class, then done if
 *        there's no explicit js callback.
 *    - no css transition:
 *        done if there's no explicit js callback.
 * 7. wait for either done or js callback, then call
 *    afterLeave hook.
 *
 * @param {Function} op - remove/hide the element
 * @param {Function} [cb]
 */

p.leave = function (op, cb) {
  this.cancelPending()
  this.callHook('beforeLeave')
  this.op = op
  this.cb = cb
  addClass(this.el, this.leaveClass)
  this.left = false
  this.callHookWithCb('leave')
  if (this.left) {
    return // user called done synchronously.
  }
  this.cancel = this.hooks && this.hooks.leaveCancelled
  // only need to handle leaveDone if
  // 1. the transition is already done (synchronously called
  //    by the user, which causes this.op set to null)
  // 2. there's no explicit js callback
  if (this.op && !this.pendingJsCb) {
    // if a CSS transition leaves immediately after enter,
    // the transitionend event never fires. therefore we
    // detect such cases and end the leave immediately.
    if (this.justEntered) {
      this.leaveDone()
    } else {
      queue.push(this.leaveNextTick)
    }
  }
}

/**
 * The "nextTick" phase of a leaving transition.
 */

p.leaveNextTick = function () {
  var type = this.getCssTransitionType(this.leaveClass)
  if (type) {
    var event = type === TYPE_TRANSITION
      ? transitionEndEvent
      : animationEndEvent
    this.setupCssCb(event, this.leaveDone)
  } else {
    this.leaveDone()
  }
}

/**
 * The "cleanup" phase of a leaving transition.
 */

p.leaveDone = function () {
  this.left = true
  this.cancel = this.pendingJsCb = null
  this.op()
  removeClass(this.el, this.leaveClass)
  this.callHook('afterLeave')
  if (this.cb) this.cb()
  this.op = null
}

/**
 * Cancel any pending callbacks from a previously running
 * but not finished transition.
 */

p.cancelPending = function () {
  this.op = this.cb = null
  var hasPending = false
  if (this.pendingCssCb) {
    hasPending = true
    _.off(this.el, this.pendingCssEvent, this.pendingCssCb)
    this.pendingCssEvent = this.pendingCssCb = null
  }
  if (this.pendingJsCb) {
    hasPending = true
    this.pendingJsCb.cancel()
    this.pendingJsCb = null
  }
  if (hasPending) {
    removeClass(this.el, this.enterClass)
    removeClass(this.el, this.leaveClass)
  }
  if (this.cancel) {
    this.cancel.call(this.vm, this.el)
    this.cancel = null
  }
}

/**
 * Call a user-provided synchronous hook function.
 *
 * @param {String} type
 */

p.callHook = function (type) {
  if (this.hooks && this.hooks[type]) {
    this.hooks[type].call(this.vm, this.el)
  }
}

/**
 * Call a user-provided, potentially-async hook function.
 * We check for the length of arguments to see if the hook
 * expects a `done` callback. If true, the transition's end
 * will be determined by when the user calls that callback;
 * otherwise, the end is determined by the CSS transition or
 * animation.
 *
 * @param {String} type
 */

p.callHookWithCb = function (type) {
  var hook = this.hooks && this.hooks[type]
  if (hook) {
    if (hook.length > 1) {
      this.pendingJsCb = _.cancellable(this[type + 'Done'])
    }
    hook.call(this.vm, this.el, this.pendingJsCb)
  }
}

/**
 * Get an element's transition type based on the
 * calculated styles.
 *
 * @param {String} className
 * @return {Number}
 */

p.getCssTransitionType = function (className) {
  /* istanbul ignore if */
  if (
    !transitionEndEvent ||
    // skip CSS transitions if page is not visible -
    // this solves the issue of transitionend events not
    // firing until the page is visible again.
    // pageVisibility API is supported in IE10+, same as
    // CSS transitions.
    document.hidden ||
    // explicit js-only transition
    (this.hooks && this.hooks.css === false) ||
    // element is hidden
    isHidden(this.el)
  ) {
    return
  }
  var type = this.typeCache[className]
  if (type) return type
  var inlineStyles = this.el.style
  var computedStyles = window.getComputedStyle(this.el)
  var transDuration =
    inlineStyles[transDurationProp] ||
    computedStyles[transDurationProp]
  if (transDuration && transDuration !== '0s') {
    type = TYPE_TRANSITION
  } else {
    var animDuration =
      inlineStyles[animDurationProp] ||
      computedStyles[animDurationProp]
    if (animDuration && animDuration !== '0s') {
      type = TYPE_ANIMATION
    }
  }
  if (type) {
    this.typeCache[className] = type
  }
  return type
}

/**
 * Setup a CSS transitionend/animationend callback.
 *
 * @param {String} event
 * @param {Function} cb
 */

p.setupCssCb = function (event, cb) {
  this.pendingCssEvent = event
  var self = this
  var el = this.el
  var onEnd = this.pendingCssCb = function (e) {
    if (e.target === el) {
      _.off(el, event, onEnd)
      self.pendingCssEvent = self.pendingCssCb = null
      if (!self.pendingJsCb && cb) {
        cb()
      }
    }
  }
  _.on(el, event, onEnd)
}

/**
 * Check if an element is hidden - in that case we can just
 * skip the transition alltogether.
 *
 * @param {Element} el
 * @return {Boolean}
 */

function isHidden (el) {
  return !(
    el.offsetWidth &&
    el.offsetHeight &&
    el.getClientRects().length
  )
}

module.exports = Transition

},{"../util":116,"./queue":110}],112:[function(require,module,exports){
(function (process){
var _ = require('./index')

/**
 * Check if an element is a component, if yes return its
 * component id.
 *
 * @param {Element} el
 * @param {Object} options
 * @return {Object|undefined}
 */

exports.commonTagRE = /^(div|p|span|img|a|b|i|br|ul|ol|li|h1|h2|h3|h4|h5|h6|code|pre|table|th|td|tr|form|label|input|select|option|nav|article|section|header|footer)$/
exports.checkComponent = function (el, options) {
  var tag = el.tagName.toLowerCase()
  var hasAttrs = el.hasAttributes()
  if (!exports.commonTagRE.test(tag) && tag !== 'component') {
    if (_.resolveAsset(options, 'components', tag)) {
      return { id: tag }
    } else {
      var is = hasAttrs && getIsBinding(el)
      if (is) {
        return is
      } else if (process.env.NODE_ENV !== 'production') {
        if (
          tag.indexOf('-') > -1 ||
          (
            /HTMLUnknownElement/.test(el.toString()) &&
            // Chrome returns unknown for several HTML5 elements.
            // https://code.google.com/p/chromium/issues/detail?id=540526
            !/^(data|time|rtc|rb)$/.test(tag)
          )
        ) {
          _.warn(
            'Unknown custom element: <' + tag + '> - did you ' +
            'register the component correctly?'
          )
        }
      }
    }
  } else if (hasAttrs) {
    return getIsBinding(el)
  }
}

/**
 * Get "is" binding from an element.
 *
 * @param {Element} el
 * @return {Object|undefined}
 */

function getIsBinding (el) {
  // dynamic syntax
  var exp = _.attr(el, 'is')
  if (exp != null) {
    return { id: exp }
  } else {
    exp = _.getBindAttr(el, 'is')
    if (exp != null) {
      return { id: exp, dynamic: true }
    }
  }
}

/**
 * Set a prop's initial value on a vm and its data object.
 *
 * @param {Vue} vm
 * @param {Object} prop
 * @param {*} value
 */

exports.initProp = function (vm, prop, value) {
  if (exports.assertProp(prop, value)) {
    var key = prop.path
    vm[key] = vm._data[key] = value
  }
}

/**
 * Assert whether a prop is valid.
 *
 * @param {Object} prop
 * @param {*} value
 */

exports.assertProp = function (prop, value) {
  // if a prop is not provided and is not required,
  // skip the check.
  if (prop.raw === null && !prop.required) {
    return true
  }
  var options = prop.options
  var type = options.type
  var valid = true
  var expectedType
  if (type) {
    if (type === String) {
      expectedType = 'string'
      valid = typeof value === expectedType
    } else if (type === Number) {
      expectedType = 'number'
      valid = typeof value === 'number'
    } else if (type === Boolean) {
      expectedType = 'boolean'
      valid = typeof value === 'boolean'
    } else if (type === Function) {
      expectedType = 'function'
      valid = typeof value === 'function'
    } else if (type === Object) {
      expectedType = 'object'
      valid = _.isPlainObject(value)
    } else if (type === Array) {
      expectedType = 'array'
      valid = _.isArray(value)
    } else {
      valid = value instanceof type
    }
  }
  if (!valid) {
    process.env.NODE_ENV !== 'production' && _.warn(
      'Invalid prop: type check failed for ' +
      prop.path + '="' + prop.raw + '".' +
      ' Expected ' + formatType(expectedType) +
      ', got ' + formatValue(value) + '.'
    )
    return false
  }
  var validator = options.validator
  if (validator) {
    if (!validator.call(null, value)) {
      process.env.NODE_ENV !== 'production' && _.warn(
        'Invalid prop: custom validator check failed for ' +
        prop.path + '="' + prop.raw + '"'
      )
      return false
    }
  }
  return true
}

function formatType (val) {
  return val
    ? val.charAt(0).toUpperCase() + val.slice(1)
    : 'custom type'
}

function formatValue (val) {
  return Object.prototype.toString.call(val).slice(8, -1)
}

}).call(this,require('_process'))

},{"./index":116,"_process":41}],113:[function(require,module,exports){
(function (process){
/**
 * Enable debug utilities.
 */

if (process.env.NODE_ENV !== 'production') {

  var config = require('../config')
  var hasConsole = typeof console !== 'undefined'

  /**
   * Log a message.
   *
   * @param {String} msg
   */

  exports.log = function (msg) {
    if (hasConsole && config.debug) {
      console.log('[Vue info]: ' + msg)
    }
  }

  /**
   * We've got a problem here.
   *
   * @param {String} msg
   */

  exports.warn = function (msg, e) {
    if (hasConsole && (!config.silent || config.debug)) {
      console.warn('[Vue warn]: ' + msg)
      /* istanbul ignore if */
      if (config.debug) {
        console.warn((e || new Error('Warning Stack Trace')).stack)
      }
    }
  }

  /**
   * Assert asset exists
   */

  exports.assertAsset = function (val, type, id) {
    if (!val) {
      exports.warn('Failed to resolve ' + type + ': ' + id)
    }
  }
}

}).call(this,require('_process'))

},{"../config":65,"_process":41}],114:[function(require,module,exports){
(function (process){
var _ = require('./index')
var config = require('../config')
var transition = require('../transition')

/**
 * Query an element selector if it's not an element already.
 *
 * @param {String|Element} el
 * @return {Element}
 */

exports.query = function (el) {
  if (typeof el === 'string') {
    var selector = el
    el = document.querySelector(el)
    if (!el) {
      process.env.NODE_ENV !== 'production' && _.warn(
        'Cannot find element: ' + selector
      )
    }
  }
  return el
}

/**
 * Check if a node is in the document.
 * Note: document.documentElement.contains should work here
 * but always returns false for comment nodes in phantomjs,
 * making unit tests difficult. This is fixed by doing the
 * contains() check on the node's parentNode instead of
 * the node itself.
 *
 * @param {Node} node
 * @return {Boolean}
 */

exports.inDoc = function (node) {
  var doc = document.documentElement
  var parent = node && node.parentNode
  return doc === node ||
    doc === parent ||
    !!(parent && parent.nodeType === 1 && (doc.contains(parent)))
}

/**
 * Get and remove an attribute from a node.
 *
 * @param {Node} node
 * @param {String} attr
 */

exports.attr = function (node, attr) {
  var val = node.getAttribute(attr)
  if (val !== null) {
    node.removeAttribute(attr)
  }
  return val
}

/**
 * Get an attribute with colon or v-bind: prefix.
 *
 * @param {Node} node
 * @param {String} name
 * @return {String|null}
 */

exports.getBindAttr = function (node, name) {
  var val = exports.attr(node, ':' + name)
  if (val === null) {
    val = exports.attr(node, 'v-bind:' + name)
  }
  return val
}

/**
 * Insert el before target
 *
 * @param {Element} el
 * @param {Element} target
 */

exports.before = function (el, target) {
  target.parentNode.insertBefore(el, target)
}

/**
 * Insert el after target
 *
 * @param {Element} el
 * @param {Element} target
 */

exports.after = function (el, target) {
  if (target.nextSibling) {
    exports.before(el, target.nextSibling)
  } else {
    target.parentNode.appendChild(el)
  }
}

/**
 * Remove el from DOM
 *
 * @param {Element} el
 */

exports.remove = function (el) {
  el.parentNode.removeChild(el)
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

exports.prepend = function (el, target) {
  if (target.firstChild) {
    exports.before(el, target.firstChild)
  } else {
    target.appendChild(el)
  }
}

/**
 * Replace target with el
 *
 * @param {Element} target
 * @param {Element} el
 */

exports.replace = function (target, el) {
  var parent = target.parentNode
  if (parent) {
    parent.replaceChild(el, target)
  }
}

/**
 * Add event listener shorthand.
 *
 * @param {Element} el
 * @param {String} event
 * @param {Function} cb
 */

exports.on = function (el, event, cb) {
  el.addEventListener(event, cb)
}

/**
 * Remove event listener shorthand.
 *
 * @param {Element} el
 * @param {String} event
 * @param {Function} cb
 */

exports.off = function (el, event, cb) {
  el.removeEventListener(event, cb)
}

/**
 * Add class with compatibility for IE & SVG
 *
 * @param {Element} el
 * @param {Strong} cls
 */

exports.addClass = function (el, cls) {
  if (el.classList) {
    el.classList.add(cls)
  } else {
    var cur = ' ' + (el.getAttribute('class') || '') + ' '
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim())
    }
  }
}

/**
 * Remove class with compatibility for IE & SVG
 *
 * @param {Element} el
 * @param {Strong} cls
 */

exports.removeClass = function (el, cls) {
  if (el.classList) {
    el.classList.remove(cls)
  } else {
    var cur = ' ' + (el.getAttribute('class') || '') + ' '
    var tar = ' ' + cls + ' '
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ')
    }
    el.setAttribute('class', cur.trim())
  }
  if (!el.className) {
    el.removeAttribute('class')
  }
}

/**
 * Extract raw content inside an element into a temporary
 * container div
 *
 * @param {Element} el
 * @param {Boolean} asFragment
 * @return {Element}
 */

exports.extractContent = function (el, asFragment) {
  var child
  var rawContent
  /* istanbul ignore if */
  if (
    exports.isTemplate(el) &&
    el.content instanceof DocumentFragment
  ) {
    el = el.content
  }
  if (el.hasChildNodes()) {
    exports.trimNode(el)
    rawContent = asFragment
      ? document.createDocumentFragment()
      : document.createElement('div')
    /* eslint-disable no-cond-assign */
    while (child = el.firstChild) {
    /* eslint-enable no-cond-assign */
      rawContent.appendChild(child)
    }
  }
  return rawContent
}

/**
 * Trim possible empty head/tail textNodes inside a parent.
 *
 * @param {Node} node
 */

exports.trimNode = function (node) {
  trim(node, node.firstChild)
  trim(node, node.lastChild)
}

function trim (parent, node) {
  if (node && node.nodeType === 3 && !node.data.trim()) {
    parent.removeChild(node)
  }
}

/**
 * Check if an element is a template tag.
 * Note if the template appears inside an SVG its tagName
 * will be in lowercase.
 *
 * @param {Element} el
 */

exports.isTemplate = function (el) {
  return el.tagName &&
    el.tagName.toLowerCase() === 'template'
}

/**
 * Create an "anchor" for performing dom insertion/removals.
 * This is used in a number of scenarios:
 * - fragment instance
 * - v-html
 * - v-if
 * - v-for
 * - component
 *
 * @param {String} content
 * @param {Boolean} persist - IE trashes empty textNodes on
 *                            cloneNode(true), so in certain
 *                            cases the anchor needs to be
 *                            non-empty to be persisted in
 *                            templates.
 * @return {Comment|Text}
 */

exports.createAnchor = function (content, persist) {
  return config.debug
    ? document.createComment(content)
    : document.createTextNode(persist ? ' ' : '')
}

/**
 * Find a component ref attribute that starts with $.
 *
 * @param {Element} node
 * @return {String|undefined}
 */

var refRE = /^v-ref:/
exports.findRef = function (node) {
  if (node.hasAttributes()) {
    var attrs = node.attributes
    for (var i = 0, l = attrs.length; i < l; i++) {
      var name = attrs[i].name
      if (refRE.test(name)) {
        node.removeAttribute(name)
        return _.camelize(name.replace(refRE, ''))
      }
    }
  }
}

/**
 * Map a function to a range of nodes .
 *
 * @param {Node} node
 * @param {Node} end
 * @param {Function} op
 */

exports.mapNodeRange = function (node, end, op) {
  var next
  while (node !== end) {
    next = node.nextSibling
    op(node)
    node = next
  }
  op(end)
}

/**
 * Remove a range of nodes with transition, store
 * the nodes in a fragment with correct ordering,
 * and call callback when done.
 *
 * @param {Node} start
 * @param {Node} end
 * @param {Vue} vm
 * @param {DocumentFragment} frag
 * @param {Function} cb
 */

exports.removeNodeRange = function (start, end, vm, frag, cb) {
  var done = false
  var removed = 0
  var nodes = []
  exports.mapNodeRange(start, end, function (node) {
    if (node === end) done = true
    nodes.push(node)
    transition.remove(node, vm, onRemoved)
  })
  function onRemoved () {
    removed++
    if (done && removed >= nodes.length) {
      for (var i = 0; i < nodes.length; i++) {
        frag.appendChild(nodes[i])
      }
      cb && cb()
    }
  }
}

}).call(this,require('_process'))

},{"../config":65,"../transition":109,"./index":116,"_process":41}],115:[function(require,module,exports){
// can we use __proto__?
exports.hasProto = '__proto__' in {}

// Browser environment sniffing
var inBrowser = exports.inBrowser =
  typeof window !== 'undefined' &&
  Object.prototype.toString.call(window) !== '[object Object]'

exports.isIE9 =
  inBrowser &&
  navigator.userAgent.toLowerCase().indexOf('msie 9.0') > 0

exports.isAndroid =
  inBrowser &&
  navigator.userAgent.toLowerCase().indexOf('android') > 0

// Transition property/event sniffing
if (inBrowser && !exports.isIE9) {
  var isWebkitTrans =
    window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined
  var isWebkitAnim =
    window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined
  exports.transitionProp = isWebkitTrans
    ? 'WebkitTransition'
    : 'transition'
  exports.transitionEndEvent = isWebkitTrans
    ? 'webkitTransitionEnd'
    : 'transitionend'
  exports.animationProp = isWebkitAnim
    ? 'WebkitAnimation'
    : 'animation'
  exports.animationEndEvent = isWebkitAnim
    ? 'webkitAnimationEnd'
    : 'animationend'
}

/**
 * Defer a task to execute it asynchronously. Ideally this
 * should be executed as a microtask, so we leverage
 * MutationObserver if it's available, and fallback to
 * setTimeout(0).
 *
 * @param {Function} cb
 * @param {Object} ctx
 */

exports.nextTick = (function () {
  var callbacks = []
  var pending = false
  var timerFunc
  function nextTickHandler () {
    pending = false
    var copies = callbacks.slice(0)
    callbacks = []
    for (var i = 0; i < copies.length; i++) {
      copies[i]()
    }
  }
  /* istanbul ignore if */
  if (typeof MutationObserver !== 'undefined') {
    var counter = 1
    var observer = new MutationObserver(nextTickHandler)
    var textNode = document.createTextNode(counter)
    observer.observe(textNode, {
      characterData: true
    })
    timerFunc = function () {
      counter = (counter + 1) % 2
      textNode.data = counter
    }
  } else {
    timerFunc = setTimeout
  }
  return function (cb, ctx) {
    var func = ctx
      ? function () { cb.call(ctx) }
      : cb
    callbacks.push(func)
    if (pending) return
    pending = true
    timerFunc(nextTickHandler, 0)
  }
})()

},{}],116:[function(require,module,exports){
var lang = require('./lang')
var extend = lang.extend

extend(exports, lang)
extend(exports, require('./env'))
extend(exports, require('./dom'))
extend(exports, require('./options'))
extend(exports, require('./component'))
extend(exports, require('./debug'))

},{"./component":112,"./debug":113,"./dom":114,"./env":115,"./lang":117,"./options":118}],117:[function(require,module,exports){
/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 *
 * @param {Object} obj
 * @param {String} key
 * @param {*} val
 * @public
 */

exports.set = function set (obj, key, val) {
  if (obj.hasOwnProperty(key)) {
    obj[key] = val
    return
  }
  if (obj._isVue) {
    set(obj._data, key, val)
    return
  }
  var ob = obj.__ob__
  if (!ob) {
    obj[key] = val
    return
  }
  ob.convert(key, val)
  ob.dep.notify()
  if (ob.vms) {
    var i = ob.vms.length
    while (i--) {
      var vm = ob.vms[i]
      vm._proxy(key)
      vm._digest()
    }
  }
}

/**
 * Delete a property and trigger change if necessary.
 *
 * @param {Object} obj
 * @param {String} key
 */

exports.delete = function (obj, key) {
  if (!obj.hasOwnProperty(key)) {
    return
  }
  delete obj[key]
  var ob = obj.__ob__
  if (!ob) {
    return
  }
  ob.dep.notify()
  if (ob.vms) {
    var i = ob.vms.length
    while (i--) {
      var vm = ob.vms[i]
      vm._unproxy(key)
      vm._digest()
    }
  }
}

/**
 * Check if an expression is a literal value.
 *
 * @param {String} exp
 * @return {Boolean}
 */

var literalValueRE = /^\s?(true|false|[\d\.]+|'[^']*'|"[^"]*")\s?$/
exports.isLiteral = function (exp) {
  return literalValueRE.test(exp)
}

/**
 * Check if a string starts with $ or _
 *
 * @param {String} str
 * @return {Boolean}
 */

exports.isReserved = function (str) {
  var c = (str + '').charCodeAt(0)
  return c === 0x24 || c === 0x5F
}

/**
 * Guard text output, make sure undefined outputs
 * empty string
 *
 * @param {*} value
 * @return {String}
 */

exports.toString = function (value) {
  return value == null
    ? ''
    : value.toString()
}

/**
 * Check and convert possible numeric strings to numbers
 * before setting back to data
 *
 * @param {*} value
 * @return {*|Number}
 */

exports.toNumber = function (value) {
  if (typeof value !== 'string') {
    return value
  } else {
    var parsed = Number(value)
    return isNaN(parsed)
      ? value
      : parsed
  }
}

/**
 * Convert string boolean literals into real booleans.
 *
 * @param {*} value
 * @return {*|Boolean}
 */

exports.toBoolean = function (value) {
  return value === 'true'
    ? true
    : value === 'false'
      ? false
      : value
}

/**
 * Strip quotes from a string
 *
 * @param {String} str
 * @return {String | false}
 */

exports.stripQuotes = function (str) {
  var a = str.charCodeAt(0)
  var b = str.charCodeAt(str.length - 1)
  return a === b && (a === 0x22 || a === 0x27)
    ? str.slice(1, -1)
    : str
}

/**
 * Camelize a hyphen-delmited string.
 *
 * @param {String} str
 * @return {String}
 */

var camelizeRE = /-(\w)/g
exports.camelize = function (str) {
  return str.replace(camelizeRE, toUpper)
}

function toUpper (_, c) {
  return c ? c.toUpperCase() : ''
}

/**
 * Hyphenate a camelCase string.
 *
 * @param {String} str
 * @return {String}
 */

var hyphenateRE = /([a-z\d])([A-Z])/g
exports.hyphenate = function (str) {
  return str
    .replace(hyphenateRE, '$1-$2')
    .toLowerCase()
}

/**
 * Converts hyphen/underscore/slash delimitered names into
 * camelized classNames.
 *
 * e.g. my-component => MyComponent
 *      some_else    => SomeElse
 *      some/comp    => SomeComp
 *
 * @param {String} str
 * @return {String}
 */

var classifyRE = /(?:^|[-_\/])(\w)/g
exports.classify = function (str) {
  return str.replace(classifyRE, toUpper)
}

/**
 * Simple bind, faster than native
 *
 * @param {Function} fn
 * @param {Object} ctx
 * @return {Function}
 */

exports.bind = function (fn, ctx) {
  return function (a) {
    var l = arguments.length
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }
}

/**
 * Convert an Array-like object to a real Array.
 *
 * @param {Array-like} list
 * @param {Number} [start] - start index
 * @return {Array}
 */

exports.toArray = function (list, start) {
  start = start || 0
  var i = list.length - start
  var ret = new Array(i)
  while (i--) {
    ret[i] = list[i + start]
  }
  return ret
}

/**
 * Mix properties into target object.
 *
 * @param {Object} to
 * @param {Object} from
 */

exports.extend = function (to, from) {
  var keys = Object.keys(from)
  var i = keys.length
  while (i--) {
    to[keys[i]] = from[keys[i]]
  }
  return to
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 *
 * @param {*} obj
 * @return {Boolean}
 */

exports.isObject = function (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 *
 * @param {*} obj
 * @return {Boolean}
 */

var toString = Object.prototype.toString
var OBJECT_STRING = '[object Object]'
exports.isPlainObject = function (obj) {
  return toString.call(obj) === OBJECT_STRING
}

/**
 * Array type check.
 *
 * @param {*} obj
 * @return {Boolean}
 */

exports.isArray = Array.isArray

/**
 * Define a non-enumerable property
 *
 * @param {Object} obj
 * @param {String} key
 * @param {*} val
 * @param {Boolean} [enumerable]
 */

exports.define = function (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  })
}

/**
 * Debounce a function so it only gets called after the
 * input stops arriving after the given wait period.
 *
 * @param {Function} func
 * @param {Number} wait
 * @return {Function} - the debounced function
 */

exports.debounce = function (func, wait) {
  var timeout, args, context, timestamp, result
  var later = function () {
    var last = Date.now() - timestamp
    if (last < wait && last >= 0) {
      timeout = setTimeout(later, wait - last)
    } else {
      timeout = null
      result = func.apply(context, args)
      if (!timeout) context = args = null
    }
  }
  return function () {
    context = this
    args = arguments
    timestamp = Date.now()
    if (!timeout) {
      timeout = setTimeout(later, wait)
    }
    return result
  }
}

/**
 * Manual indexOf because it's slightly faster than
 * native.
 *
 * @param {Array} arr
 * @param {*} obj
 */

exports.indexOf = function (arr, obj) {
  var i = arr.length
  while (i--) {
    if (arr[i] === obj) return i
  }
  return -1
}

/**
 * Make a cancellable version of an async callback.
 *
 * @param {Function} fn
 * @return {Function}
 */

exports.cancellable = function (fn) {
  var cb = function () {
    if (!cb.cancelled) {
      return fn.apply(this, arguments)
    }
  }
  cb.cancel = function () {
    cb.cancelled = true
  }
  return cb
}

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 *
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 */

exports.looseEqual = function (a, b) {
  /* eslint-disable eqeqeq */
  return a == b || (
    exports.isObject(a) && exports.isObject(b)
      ? JSON.stringify(a) === JSON.stringify(b)
      : false
  )
  /* eslint-enable eqeqeq */
}

},{}],118:[function(require,module,exports){
(function (process){
var _ = require('./index')
var config = require('../config')
var extend = _.extend

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 *
 * All strategy functions follow the same signature:
 *
 * @param {*} parentVal
 * @param {*} childVal
 * @param {Vue} [vm]
 */

var strats = config.optionMergeStrategies = Object.create(null)

/**
 * Helper that recursively merges two data objects together.
 */

function mergeData (to, from) {
  var key, toVal, fromVal
  for (key in from) {
    toVal = to[key]
    fromVal = from[key]
    if (!to.hasOwnProperty(key)) {
      _.set(to, key, fromVal)
    } else if (_.isObject(toVal) && _.isObject(fromVal)) {
      mergeData(toVal, fromVal)
    }
  }
  return to
}

/**
 * Data
 */

strats.data = function (parentVal, childVal, vm) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (typeof childVal !== 'function') {
      process.env.NODE_ENV !== 'production' && _.warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.'
      )
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        childVal.call(this),
        parentVal.call(this)
      )
    }
  } else if (parentVal || childVal) {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm)
        : childVal
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm)
        : undefined
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

/**
 * El
 */

strats.el = function (parentVal, childVal, vm) {
  if (!vm && childVal && typeof childVal !== 'function') {
    process.env.NODE_ENV !== 'production' && _.warn(
      'The "el" option should be a function ' +
      'that returns a per-instance value in component ' +
      'definitions.'
    )
    return
  }
  var ret = childVal || parentVal
  // invoke the element factory if this is instance merge
  return vm && typeof ret === 'function'
    ? ret.call(vm)
    : ret
}

/**
 * Hooks and param attributes are merged as arrays.
 */

strats.init =
strats.created =
strats.ready =
strats.attached =
strats.detached =
strats.beforeCompile =
strats.compiled =
strats.beforeDestroy =
strats.destroyed = function (parentVal, childVal) {
  return childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : _.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal
}

/**
 * 0.11 deprecation warning
 */

strats.paramAttributes = function () {
  /* istanbul ignore next */
  process.env.NODE_ENV !== 'production' && _.warn(
    '"paramAttributes" option has been deprecated in 0.12. ' +
    'Use "props" instead.'
  )
}

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */

function mergeAssets (parentVal, childVal) {
  var res = Object.create(parentVal)
  return childVal
    ? extend(res, guardArrayAssets(childVal))
    : res
}

config._assetTypes.forEach(function (type) {
  strats[type + 's'] = mergeAssets
})

/**
 * Events & Watchers.
 *
 * Events & watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */

strats.watch =
strats.events = function (parentVal, childVal) {
  if (!childVal) return parentVal
  if (!parentVal) return childVal
  var ret = {}
  extend(ret, parentVal)
  for (var key in childVal) {
    var parent = ret[key]
    var child = childVal[key]
    if (parent && !_.isArray(parent)) {
      parent = [parent]
    }
    ret[key] = parent
      ? parent.concat(child)
      : [child]
  }
  return ret
}

/**
 * Other object hashes.
 */

strats.props =
strats.methods =
strats.computed = function (parentVal, childVal) {
  if (!childVal) return parentVal
  if (!parentVal) return childVal
  var ret = Object.create(null)
  extend(ret, parentVal)
  extend(ret, childVal)
  return ret
}

/**
 * Default strategy.
 */

var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
}

/**
 * Make sure component options get converted to actual
 * constructors.
 *
 * @param {Object} options
 */

function guardComponents (options) {
  if (options.components) {
    var components = options.components =
      guardArrayAssets(options.components)
    var def
    var ids = Object.keys(components)
    for (var i = 0, l = ids.length; i < l; i++) {
      var key = ids[i]
      if (_.commonTagRE.test(key)) {
        process.env.NODE_ENV !== 'production' && _.warn(
          'Do not use built-in HTML elements as component ' +
          'id: ' + key
        )
        continue
      }
      def = components[key]
      if (_.isPlainObject(def)) {
        components[key] = _.Vue.extend(def)
      }
    }
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 *
 * @param {Object} options
 */

function guardProps (options) {
  var props = options.props
  var i
  if (_.isArray(props)) {
    options.props = {}
    i = props.length
    while (i--) {
      options.props[props[i]] = null
    }
  } else if (_.isPlainObject(props)) {
    var keys = Object.keys(props)
    i = keys.length
    while (i--) {
      var val = props[keys[i]]
      if (typeof val === 'function') {
        props[keys[i]] = { type: val }
      }
    }
  }
}

/**
 * Guard an Array-format assets option and converted it
 * into the key-value Object format.
 *
 * @param {Object|Array} assets
 * @return {Object}
 */

function guardArrayAssets (assets) {
  if (_.isArray(assets)) {
    var res = {}
    var i = assets.length
    var asset
    while (i--) {
      asset = assets[i]
      var id = typeof asset === 'function'
        ? ((asset.options && asset.options.name) || asset.id)
        : (asset.name || asset.id)
      if (!id) {
        process.env.NODE_ENV !== 'production' && _.warn(
          'Array-syntax assets must provide a "name" or "id" field.'
        )
      } else {
        res[id] = asset
      }
    }
    return res
  }
  return assets
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 *
 * @param {Object} parent
 * @param {Object} child
 * @param {Vue} [vm] - if vm is present, indicates this is
 *                     an instantiation merge.
 */

exports.mergeOptions = function merge (parent, child, vm) {
  guardComponents(child)
  guardProps(child)
  var options = {}
  var key
  if (child.mixins) {
    for (var i = 0, l = child.mixins.length; i < l; i++) {
      parent = merge(parent, child.mixins[i], vm)
    }
  }
  for (key in parent) {
    mergeField(key)
  }
  for (key in child) {
    if (!(parent.hasOwnProperty(key))) {
      mergeField(key)
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat
    options[key] = strat(parent[key], child[key], vm, key)
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 *
 * @param {Object} options
 * @param {String} type
 * @param {String} id
 * @return {Object|Function}
 */

exports.resolveAsset = function resolve (options, type, id) {
  var assets = options[type]
  var camelizedId
  return assets[id] ||
    // camelCase ID
    assets[camelizedId = _.camelize(id)] ||
    // Pascal Case ID
    assets[camelizedId.charAt(0).toUpperCase() + camelizedId.slice(1)]
}

}).call(this,require('_process'))

},{"../config":65,"./index":116,"_process":41}],119:[function(require,module,exports){
(function (process){
var _ = require('./util')
var extend = _.extend

/**
 * The exposed Vue constructor.
 *
 * API conventions:
 * - public API methods/properties are prefiexed with `$`
 * - internal methods/properties are prefixed with `_`
 * - non-prefixed properties are assumed to be proxied user
 *   data.
 *
 * @constructor
 * @param {Object} [options]
 * @public
 */

function Vue (options) {
  this._init(options)
}

/**
 * Mixin global API
 */

extend(Vue, require('./api/global'))

/**
 * Vue and every constructor that extends Vue has an
 * associated options object, which can be accessed during
 * compilation steps as `this.constructor.options`.
 *
 * These can be seen as the default options of every
 * Vue instance.
 */

Vue.options = {
  replace: true,
  directives: require('./directives/public'),
  elementDirectives: require('./directives/element'),
  filters: require('./filters'),
  transitions: {},
  components: {},
  partials: {}
}

/**
 * Build up the prototype
 */

var p = Vue.prototype

/**
 * $data has a setter which does a bunch of
 * teardown/setup work
 */

Object.defineProperty(p, '$data', {
  get: function () {
    return this._data
  },
  set: function (newData) {
    if (newData !== this._data) {
      this._setData(newData)
    }
  }
})

/**
 * Mixin internal instance methods
 */

extend(p, require('./instance/init'))
extend(p, require('./instance/events'))
extend(p, require('./instance/state'))
extend(p, require('./instance/lifecycle'))
extend(p, require('./instance/misc'))

/**
 * Mixin public API methods
 */

extend(p, require('./api/data'))
extend(p, require('./api/dom'))
extend(p, require('./api/events'))
extend(p, require('./api/lifecycle'))

Vue.version = '1.0.7'
module.exports = _.Vue = Vue

/* istanbul ignore if */
if (process.env.NODE_ENV !== 'production') {
  if (_.inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__) {
    window.__VUE_DEVTOOLS_GLOBAL_HOOK__.emit('init', Vue)
  }
}

}).call(this,require('_process'))

},{"./api/data":54,"./api/dom":55,"./api/events":56,"./api/global":57,"./api/lifecycle":58,"./directives/element":67,"./directives/public":82,"./filters":93,"./instance/events":96,"./instance/init":97,"./instance/lifecycle":98,"./instance/misc":99,"./instance/state":100,"./util":116,"_process":41}],120:[function(require,module,exports){
(function (process){
var _ = require('./util')
var config = require('./config')
var Dep = require('./observer/dep')
var expParser = require('./parsers/expression')
var batcher = require('./batcher')
var uid = 0

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 *
 * @param {Vue} vm
 * @param {String} expression
 * @param {Function} cb
 * @param {Object} options
 *                 - {Array} filters
 *                 - {Boolean} twoWay
 *                 - {Boolean} deep
 *                 - {Boolean} user
 *                 - {Boolean} sync
 *                 - {Boolean} lazy
 *                 - {Function} [preProcess]
 *                 - {Function} [postProcess]
 * @constructor
 */

function Watcher (vm, expOrFn, cb, options) {
  // mix in options
  if (options) {
    _.extend(this, options)
  }
  var isFn = typeof expOrFn === 'function'
  this.vm = vm
  vm._watchers.push(this)
  this.expression = isFn ? expOrFn.toString() : expOrFn
  this.cb = cb
  this.id = ++uid // uid for batching
  this.active = true
  this.dirty = this.lazy // for lazy watchers
  this.deps = Object.create(null)
  this.newDeps = null
  this.prevError = null // for async error stacks
  // parse expression for getter/setter
  if (isFn) {
    this.getter = expOrFn
    this.setter = undefined
  } else {
    var res = expParser.parse(expOrFn, this.twoWay)
    this.getter = res.get
    this.setter = res.set
  }
  this.value = this.lazy
    ? undefined
    : this.get()
  // state for avoiding false triggers for deep and Array
  // watchers during vm._digest()
  this.queued = this.shallow = false
}

/**
 * Add a dependency to this directive.
 *
 * @param {Dep} dep
 */

Watcher.prototype.addDep = function (dep) {
  var id = dep.id
  if (!this.newDeps[id]) {
    this.newDeps[id] = dep
    if (!this.deps[id]) {
      this.deps[id] = dep
      dep.addSub(this)
    }
  }
}

/**
 * Evaluate the getter, and re-collect dependencies.
 */

Watcher.prototype.get = function () {
  this.beforeGet()
  var scope = this.scope || this.vm
  var value
  try {
    value = this.getter.call(scope, scope)
  } catch (e) {
    if (
      process.env.NODE_ENV !== 'production' &&
      config.warnExpressionErrors
    ) {
      _.warn(
        'Error when evaluating expression "' +
        this.expression + '". ' +
        (config.debug
          ? ''
          : 'Turn on debug mode to see stack trace.'
        ), e
      )
    }
  }
  // "touch" every property so they are all tracked as
  // dependencies for deep watching
  if (this.deep) {
    traverse(value)
  }
  if (this.preProcess) {
    value = this.preProcess(value)
  }
  if (this.filters) {
    value = scope._applyFilters(value, null, this.filters, false)
  }
  if (this.postProcess) {
    value = this.postProcess(value)
  }
  this.afterGet()
  return value
}

/**
 * Set the corresponding value with the setter.
 *
 * @param {*} value
 */

Watcher.prototype.set = function (value) {
  var scope = this.scope || this.vm
  if (this.filters) {
    value = scope._applyFilters(
      value, this.value, this.filters, true)
  }
  try {
    this.setter.call(scope, scope, value)
  } catch (e) {
    if (
      process.env.NODE_ENV !== 'production' &&
      config.warnExpressionErrors
    ) {
      _.warn(
        'Error when evaluating setter "' +
        this.expression + '"', e
      )
    }
  }
  // two-way sync for v-for alias
  var forContext = scope.$forContext
  if (process.env.NODE_ENV !== 'production') {
    if (
      forContext &&
      forContext.filters &&
      (new RegExp(forContext.alias + '\\b')).test(this.expression)
    ) {
      _.warn(
        'It seems you are using two-way binding on ' +
        'a v-for alias (' + this.expression + '), and the ' +
        'v-for has filters. This will not work properly. ' +
        'Either remove the filters or use an array of ' +
        'objects and bind to object properties instead.'
      )
    }
  }
  if (
    forContext &&
    forContext.alias === this.expression &&
    !forContext.filters
  ) {
    if (scope.$key) { // original is an object
      forContext.rawValue[scope.$key] = value
    } else {
      forContext.rawValue.$set(scope.$index, value)
    }
  }
}

/**
 * Prepare for dependency collection.
 */

Watcher.prototype.beforeGet = function () {
  Dep.target = this
  this.newDeps = Object.create(null)
}

/**
 * Clean up for dependency collection.
 */

Watcher.prototype.afterGet = function () {
  Dep.target = null
  var ids = Object.keys(this.deps)
  var i = ids.length
  while (i--) {
    var id = ids[i]
    if (!this.newDeps[id]) {
      this.deps[id].removeSub(this)
    }
  }
  this.deps = this.newDeps
}

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 *
 * @param {Boolean} shallow
 */

Watcher.prototype.update = function (shallow) {
  if (this.lazy) {
    this.dirty = true
  } else if (this.sync || !config.async) {
    this.run()
  } else {
    // if queued, only overwrite shallow with non-shallow,
    // but not the other way around.
    this.shallow = this.queued
      ? shallow
        ? this.shallow
        : false
      : !!shallow
    this.queued = true
    // record before-push error stack in debug mode
    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production' && config.debug) {
      this.prevError = new Error('[vue] async stack trace')
    }
    batcher.push(this)
  }
}

/**
 * Batcher job interface.
 * Will be called by the batcher.
 */

Watcher.prototype.run = function () {
  if (this.active) {
    var value = this.get()
    if (
      value !== this.value ||
      // Deep watchers and Array watchers should fire even
      // when the value is the same, because the value may
      // have mutated; but only do so if this is a
      // non-shallow update (caused by a vm digest).
      ((_.isArray(value) || this.deep) && !this.shallow)
    ) {
      // set new value
      var oldValue = this.value
      this.value = value
      // in debug + async mode, when a watcher callbacks
      // throws, we also throw the saved before-push error
      // so the full cross-tick stack trace is available.
      var prevError = this.prevError
      /* istanbul ignore if */
      if (process.env.NODE_ENV !== 'production' &&
          config.debug && prevError) {
        this.prevError = null
        try {
          this.cb.call(this.vm, value, oldValue)
        } catch (e) {
          _.nextTick(function () {
            throw prevError
          }, 0)
          throw e
        }
      } else {
        this.cb.call(this.vm, value, oldValue)
      }
    }
    this.queued = this.shallow = false
  }
}

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */

Watcher.prototype.evaluate = function () {
  // avoid overwriting another watcher that is being
  // collected.
  var current = Dep.target
  this.value = this.get()
  this.dirty = false
  Dep.target = current
}

/**
 * Depend on all deps collected by this watcher.
 */

Watcher.prototype.depend = function () {
  var depIds = Object.keys(this.deps)
  var i = depIds.length
  while (i--) {
    this.deps[depIds[i]].depend()
  }
}

/**
 * Remove self from all dependencies' subcriber list.
 */

Watcher.prototype.teardown = function () {
  if (this.active) {
    // remove self from vm's watcher list
    // we can skip this if the vm if being destroyed
    // which can improve teardown performance.
    if (!this.vm._isBeingDestroyed) {
      this.vm._watchers.$remove(this)
    }
    var depIds = Object.keys(this.deps)
    var i = depIds.length
    while (i--) {
      this.deps[depIds[i]].removeSub(this)
    }
    this.active = false
    this.vm = this.cb = this.value = null
  }
}

/**
 * Recrusively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 *
 * @param {*} val
 */

function traverse (val) {
  var i, keys
  if (_.isArray(val)) {
    i = val.length
    while (i--) traverse(val[i])
  } else if (_.isObject(val)) {
    keys = Object.keys(val)
    i = keys.length
    while (i--) traverse(val[keys[i]])
  }
}

module.exports = Watcher

}).call(this,require('_process'))

},{"./batcher":59,"./config":65,"./observer/dep":102,"./parsers/expression":105,"./util":116,"_process":41}]},{},[20])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJjbGllbnQvYXBwLmNzcyIsImNsaWVudC9hcHAuaHRtbCIsImNsaWVudC9jb21wb25lbnRzL2NvdW50ZXIvaW5kZXguanMiLCJjbGllbnQvY29tcG9uZW50cy9jb3VudGVyL3RlbXBsYXRlLmh0bWwiLCJjbGllbnQvY29tcG9uZW50cy9sYXlvdXRzL2Zvb3Rlci1uYXYvaW5kZXguanMiLCJjbGllbnQvY29tcG9uZW50cy9sYXlvdXRzL2Zvb3Rlci1uYXYvdGVtcGxhdGUuaHRtbCIsImNsaWVudC9jb21wb25lbnRzL2xheW91dHMvaGVhZGVyLW5hdi9pbmRleC5qcyIsImNsaWVudC9jb21wb25lbnRzL2xheW91dHMvaGVhZGVyLW5hdi90ZW1wbGF0ZS5odG1sIiwiY2xpZW50L2NvbXBvbmVudHMvcGFnZXMvYWJvdXQvaW5kZXguanMiLCJjbGllbnQvY29tcG9uZW50cy9wYWdlcy9ob21lL2VsZW1lbnRzLzFfc3BsYXNoL2luZGV4LmpzIiwiY2xpZW50L2NvbXBvbmVudHMvcGFnZXMvaG9tZS9lbGVtZW50cy8xX3NwbGFzaC90ZW1wbGF0ZS5odG1sIiwiY2xpZW50L2NvbXBvbmVudHMvcGFnZXMvaG9tZS9lbGVtZW50cy8yX3N1YmhlYWRfMS90ZW1wbGF0ZS5odG1sIiwiY2xpZW50L2NvbXBvbmVudHMvcGFnZXMvaG9tZS9lbGVtZW50cy8zX3N1YmhlYWRfMi90ZW1wbGF0ZS5odG1sIiwiY2xpZW50L2NvbXBvbmVudHMvcGFnZXMvaG9tZS9lbGVtZW50cy80X2JveF8xL3RlbXBsYXRlLmh0bWwiLCJjbGllbnQvY29tcG9uZW50cy9wYWdlcy9ob21lL2luZGV4LmpzIiwiY2xpZW50L2NvbXBvbmVudHMvcGFnZXMvaG9tZS90ZW1wbGF0ZS5odG1sIiwiY2xpZW50L21haW4uanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9jcmVhdGUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9mcmVlemUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9rZXlzLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzcy1jYWxsLWNoZWNrLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbnRlcm9wLXJlcXVpcmUtZGVmYXVsdC5qcyIsIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5LWNzcy9icm93c2VyLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvY3JlYXRlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZnJlZXplLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qva2V5cy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmNvcmUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5kZWYuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5kZWZpbmVkLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuZmFpbHMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5nbG9iYWwuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5pcy1vYmplY3QuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLm9iamVjdC1zYXAuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC50by1vYmplY3QuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5mcmVlemUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzLmpzIiwibm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIm5vZGVfbW9kdWxlcy9yb3V0ZS1yZWNvZ25pemVyL2Rpc3Qvcm91dGUtcmVjb2duaXplci5qcyIsIm5vZGVfbW9kdWxlcy92dWUtcm91dGVyL2xpYi9kaXJlY3RpdmVzL2xpbmsuanMiLCJub2RlX21vZHVsZXMvdnVlLXJvdXRlci9saWIvZGlyZWN0aXZlcy92aWV3LmpzIiwibm9kZV9tb2R1bGVzL3Z1ZS1yb3V0ZXIvbGliL2hpc3RvcnkvYWJzdHJhY3QuanMiLCJub2RlX21vZHVsZXMvdnVlLXJvdXRlci9saWIvaGlzdG9yeS9oYXNoLmpzIiwibm9kZV9tb2R1bGVzL3Z1ZS1yb3V0ZXIvbGliL2hpc3RvcnkvaHRtbDUuanMiLCJub2RlX21vZHVsZXMvdnVlLXJvdXRlci9saWIvaW5kZXguanMiLCJub2RlX21vZHVsZXMvdnVlLXJvdXRlci9saWIvb3ZlcnJpZGUuanMiLCJub2RlX21vZHVsZXMvdnVlLXJvdXRlci9saWIvcGlwZWxpbmUuanMiLCJub2RlX21vZHVsZXMvdnVlLXJvdXRlci9saWIvcm91dGUuanMiLCJub2RlX21vZHVsZXMvdnVlLXJvdXRlci9saWIvdHJhbnNpdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy92dWUtcm91dGVyL2xpYi91dGlsLmpzIiwibm9kZV9tb2R1bGVzL3Z1ZS9zcmMvYXBpL2RhdGEuanMiLCJub2RlX21vZHVsZXMvdnVlL3NyYy9hcGkvZG9tLmpzIiwibm9kZV9tb2R1bGVzL3Z1ZS9zcmMvYXBpL2V2ZW50cy5qcyIsIm5vZGVfbW9kdWxlcy92dWUvc3JjL2FwaS9nbG9iYWwuanMiLCJub2RlX21vZHVsZXMvdnVlL3NyYy9hcGkvbGlmZWN5Y2xlLmpzIiwibm9kZV9tb2R1bGVzL3Z1ZS9zcmMvYmF0Y2hlci5qcyIsIm5vZGVfbW9kdWxlcy92dWUvc3JjL2NhY2hlLmpzIiwibm9kZV9tb2R1bGVzL3Z1ZS9zcmMvY29tcGlsZXIvY29tcGlsZS1wcm9wcy5qcyIsIm5vZGVfbW9kdWxlcy92dWUvc3JjL2NvbXBpbGVyL2NvbXBpbGUuanMiLCJub2RlX21vZHVsZXMvdnVlL3NyYy9jb21waWxlci9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy92dWUvc3JjL2NvbXBpbGVyL3RyYW5zY2x1ZGUuanMiLCJub2RlX21vZHVsZXMvdnVlL3NyYy9jb25maWcuanMiLCJub2RlX21vZHVsZXMvdnVlL3NyYy9kaXJlY3RpdmUuanMiLCJub2RlX21vZHVsZXMvdnVlL3NyYy9kaXJlY3RpdmVzL2VsZW1lbnQvaW5kZXguanMiLCJub2RlX21vZHVsZXMvdnVlL3NyYy9kaXJlY3RpdmVzL2VsZW1lbnQvcGFydGlhbC5qcyIsIm5vZGVfbW9kdWxlcy92dWUvc3JjL2RpcmVjdGl2ZXMvZWxlbWVudC9zbG90LmpzIiwibm9kZV9tb2R1bGVzL3Z1ZS9zcmMvZGlyZWN0aXZlcy9pbnRlcm5hbC9jbGFzcy5qcyIsIm5vZGVfbW9kdWxlcy92dWUvc3JjL2RpcmVjdGl2ZXMvaW50ZXJuYWwvY29tcG9uZW50LmpzIiwibm9kZV9tb2R1bGVzL3Z1ZS9zcmMvZGlyZWN0aXZlcy9pbnRlcm5hbC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy92dWUvc3JjL2RpcmVjdGl2ZXMvaW50ZXJuYWwvcHJvcC5qcyIsIm5vZGVfbW9kdWxlcy92dWUvc3JjL2RpcmVjdGl2ZXMvaW50ZXJuYWwvc3R5bGUuanMiLCJub2RlX21vZHVsZXMvdnVlL3NyYy9kaXJlY3RpdmVzL2ludGVybmFsL3RyYW5zaXRpb24uanMiLCJub2RlX21vZHVsZXMvdnVlL3NyYy9kaXJlY3RpdmVzL3B1YmxpYy9iaW5kLmpzIiwibm9kZV9tb2R1bGVzL3Z1ZS9zcmMvZGlyZWN0aXZlcy9wdWJsaWMvY2xvYWsuanMiLCJub2RlX21vZHVsZXMvdnVlL3NyYy9kaXJlY3RpdmVzL3B1YmxpYy9lbC5qcyIsIm5vZGVfbW9kdWxlcy92dWUvc3JjL2RpcmVjdGl2ZXMvcHVibGljL2Zvci5qcyIsIm5vZGVfbW9kdWxlcy92dWUvc3JjL2RpcmVjdGl2ZXMvcHVibGljL2h0bWwuanMiLCJub2RlX21vZHVsZXMvdnVlL3NyYy9kaXJlY3RpdmVzL3B1YmxpYy9pZi5qcyIsIm5vZGVfbW9kdWxlcy92dWUvc3JjL2RpcmVjdGl2ZXMvcHVibGljL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3Z1ZS9zcmMvZGlyZWN0aXZlcy9wdWJsaWMvbW9kZWwvY2hlY2tib3guanMiLCJub2RlX21vZHVsZXMvdnVlL3NyYy9kaXJlY3RpdmVzL3B1YmxpYy9tb2RlbC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy92dWUvc3JjL2RpcmVjdGl2ZXMvcHVibGljL21vZGVsL3JhZGlvLmpzIiwibm9kZV9tb2R1bGVzL3Z1ZS9zcmMvZGlyZWN0aXZlcy9wdWJsaWMvbW9kZWwvc2VsZWN0LmpzIiwibm9kZV9tb2R1bGVzL3Z1ZS9zcmMvZGlyZWN0aXZlcy9wdWJsaWMvbW9kZWwvdGV4dC5qcyIsIm5vZGVfbW9kdWxlcy92dWUvc3JjL2RpcmVjdGl2ZXMvcHVibGljL29uLmpzIiwibm9kZV9tb2R1bGVzL3Z1ZS9zcmMvZGlyZWN0aXZlcy9wdWJsaWMvcmVmLmpzIiwibm9kZV9tb2R1bGVzL3Z1ZS9zcmMvZGlyZWN0aXZlcy9wdWJsaWMvc2hvdy5qcyIsIm5vZGVfbW9kdWxlcy92dWUvc3JjL2RpcmVjdGl2ZXMvcHVibGljL3RleHQuanMiLCJub2RlX21vZHVsZXMvdnVlL3NyYy9maWx0ZXJzL2FycmF5LWZpbHRlcnMuanMiLCJub2RlX21vZHVsZXMvdnVlL3NyYy9maWx0ZXJzL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3Z1ZS9zcmMvZnJhZ21lbnQvZmFjdG9yeS5qcyIsIm5vZGVfbW9kdWxlcy92dWUvc3JjL2ZyYWdtZW50L2ZyYWdtZW50LmpzIiwibm9kZV9tb2R1bGVzL3Z1ZS9zcmMvaW5zdGFuY2UvZXZlbnRzLmpzIiwibm9kZV9tb2R1bGVzL3Z1ZS9zcmMvaW5zdGFuY2UvaW5pdC5qcyIsIm5vZGVfbW9kdWxlcy92dWUvc3JjL2luc3RhbmNlL2xpZmVjeWNsZS5qcyIsIm5vZGVfbW9kdWxlcy92dWUvc3JjL2luc3RhbmNlL21pc2MuanMiLCJub2RlX21vZHVsZXMvdnVlL3NyYy9pbnN0YW5jZS9zdGF0ZS5qcyIsIm5vZGVfbW9kdWxlcy92dWUvc3JjL29ic2VydmVyL2FycmF5LmpzIiwibm9kZV9tb2R1bGVzL3Z1ZS9zcmMvb2JzZXJ2ZXIvZGVwLmpzIiwibm9kZV9tb2R1bGVzL3Z1ZS9zcmMvb2JzZXJ2ZXIvaW5kZXguanMiLCJub2RlX21vZHVsZXMvdnVlL3NyYy9wYXJzZXJzL2RpcmVjdGl2ZS5qcyIsIm5vZGVfbW9kdWxlcy92dWUvc3JjL3BhcnNlcnMvZXhwcmVzc2lvbi5qcyIsIm5vZGVfbW9kdWxlcy92dWUvc3JjL3BhcnNlcnMvcGF0aC5qcyIsIm5vZGVfbW9kdWxlcy92dWUvc3JjL3BhcnNlcnMvdGVtcGxhdGUuanMiLCJub2RlX21vZHVsZXMvdnVlL3NyYy9wYXJzZXJzL3RleHQuanMiLCJub2RlX21vZHVsZXMvdnVlL3NyYy90cmFuc2l0aW9uL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3Z1ZS9zcmMvdHJhbnNpdGlvbi9xdWV1ZS5qcyIsIm5vZGVfbW9kdWxlcy92dWUvc3JjL3RyYW5zaXRpb24vdHJhbnNpdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy92dWUvc3JjL3V0aWwvY29tcG9uZW50LmpzIiwibm9kZV9tb2R1bGVzL3Z1ZS9zcmMvdXRpbC9kZWJ1Zy5qcyIsIm5vZGVfbW9kdWxlcy92dWUvc3JjL3V0aWwvZG9tLmpzIiwibm9kZV9tb2R1bGVzL3Z1ZS9zcmMvdXRpbC9lbnYuanMiLCJub2RlX21vZHVsZXMvdnVlL3NyYy91dGlsL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3Z1ZS9zcmMvdXRpbC9sYW5nLmpzIiwibm9kZV9tb2R1bGVzL3Z1ZS9zcmMvdXRpbC9vcHRpb25zLmpzIiwibm9kZV9tb2R1bGVzL3Z1ZS9zcmMvdnVlLmpzIiwibm9kZV9tb2R1bGVzL3Z1ZS9zcmMvd2F0Y2hlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOztBQ0FBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZUEsTUFBTSxDQUFDLE9BQU8sR0FBRztBQUNmLFVBQVEsRUFBRSxPQUFPLENBQUMsaUJBQWlCLENBQUM7Q0FDckMsQ0FBQTs7QUFFRCxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDOzs7QUNwQjNCO0FBQ0E7Ozs7QUNBQSxNQUFNLENBQUMsT0FBTyxHQUFHO0FBQ2YsTUFBSSxFQUFFLGdCQUFZO0FBQ2hCLFdBQU07QUFDSixPQUFHLEVBQUUsMkJBQTJCLENBQUE7R0FDbkM7QUFDRCxVQUFRLEVBQUUsT0FBTyxDQUFDLGlCQUFpQixDQUFDO0NBQ3JDLENBQUM7OztBQ1BGO0FBQ0E7Ozs7QUNBQSxNQUFNLENBQUMsT0FBTyxHQUFHO0FBQ2YsTUFBSSxFQUFFLGdCQUFZO0FBQ2hCLFdBQU07QUFDSixPQUFHLEVBQUUsNEJBQTRCLENBQUE7R0FDcEM7QUFDRCxVQUFRLEVBQUUsT0FBTyxDQUFDLGlCQUFpQixDQUFDO0NBQ3JDLENBQUM7OztBQ1BGO0FBQ0E7Ozs7QUNEQSxNQUFNLENBQUMsT0FBTyxHQUFHO0FBQ2YsVUFBUSxFQUFFLDBCQUEwQjtDQUNyQyxDQUFBOzs7OztBQ0ZELE1BQU0sQ0FBQyxPQUFPLEdBQUc7QUFDZixVQUFRLEVBQUUsT0FBTyxDQUFDLGlCQUFpQixDQUFDO0FBQ3BDLFlBQVUsRUFBRSxFQUVYO0NBQ0YsQ0FBQTs7O0FDTEQ7QUFDQTs7OztBQ0RBO0FBQ0E7Ozs7QUNEQTtBQUNBOzs7O0FDREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDT0EsTUFBTSxDQUFDLE9BQU8sR0FBRztBQUNmLFVBQVEsRUFBRSxPQUFPLENBQUMsaUJBQWlCLENBQUM7QUFDcEMsWUFBVSxFQUFFO0FBQ1YsVUFBTSxpQkFBQTtBQUNOLFlBQVEsaUJBQUE7QUFDUixZQUFRLGlCQUFBO0FBQ1IsUUFBSSxrQkFBQTtBQUNKLGFBQVM7O0FBQUEsR0FFVjtDQUNGLENBQUE7OztBQ2xCRDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEQSxJQUFJLEdBQUcsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUE7QUFDeEIsSUFBSSxHQUFHLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFBOzs7QUFNOUIsSUFBSSxTQUFTLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQzs7O0FBQUEsQUFHckMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUM7OztBQUFBLEFBR2xCLElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7QUFDbkIsWUFBVSxFQUFFO0FBQ1YsYUFBUyxpQkFBQTtHQUNWO0FBQ0QsVUFBUSxFQUFFLE9BQU8sQ0FBQyxZQUFZLENBQUM7Q0FDaEMsQ0FBQzs7OztBQUFBLEFBSUYsSUFBSSxPQUFPLEdBQUc7QUFDWixVQUFRLEVBQUUsS0FBSztDQUNoQixDQUFBOztBQUVELElBQUksTUFBTSxHQUFHLElBQUksU0FBUyxDQUFDO0FBQ3pCLFVBQVEsRUFBRSxJQUFJO0NBQ2YsQ0FBQyxDQUFBOztBQUVGLE1BQU0sQ0FBQyxHQUFHLENBQUM7QUFDUCxLQUFHLEVBQUU7QUFDSCxhQUFTLGlCQUFNO0dBQ2hCO0FBQ0QsVUFBUSxFQUFFO0FBQ1IsYUFBUyxpQkFBTztHQUNqQjtDQUNKLENBQUMsQ0FBQTs7QUFFRixNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUM7O0FBQUE7O0FDdkN6Qjs7QUNBQTs7QUNBQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsREE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTs7QUNEQTtBQUNBOztBQ0RBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2bkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaktBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1TUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDektBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNqS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ3BFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3pHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNoSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDL01BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3Z1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3BKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ3hHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUNoVUE7QUFDQTtBQUNBOzs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDdkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3JWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUMzSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQzdrQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDbEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQzlEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQy9IQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUMzSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ3ZMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDbktBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUM3T0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDN0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUNqUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5TUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUN0SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDeFFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN0V0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaFNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDL1dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ3RKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDL0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQzFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDdFlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ2xXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNoR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgY3NzID0gXCIvKiFcXG5QdXJlIHYwLjYuMFxcbkNvcHlyaWdodCAyMDE0IFlhaG9vISBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXFxuTGljZW5zZWQgdW5kZXIgdGhlIEJTRCBMaWNlbnNlLlxcbmh0dHBzOi8vZ2l0aHViLmNvbS95YWhvby9wdXJlL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWRcXG4qLy8qIVxcbm5vcm1hbGl6ZS5jc3Mgdl4zLjAgfCBNSVQgTGljZW5zZSB8IGdpdC5pby9ub3JtYWxpemVcXG5Db3B5cmlnaHQgKGMpIE5pY29sYXMgR2FsbGFnaGVyIGFuZCBKb25hdGhhbiBOZWFsXFxuKi8vKiEgbm9ybWFsaXplLmNzcyB2My4wLjIgfCBNSVQgTGljZW5zZSB8IGdpdC5pby9ub3JtYWxpemUgKi9odG1se2ZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7LW1zLXRleHQtc2l6ZS1hZGp1c3Q6MTAwJTstd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6MTAwJX1hcnRpY2xlLGFzaWRlLGRldGFpbHMsZmlnY2FwdGlvbixmaWd1cmUsZm9vdGVyLGhlYWRlcixoZ3JvdXAsbWFpbixtZW51LG5hdixzZWN0aW9uLHN1bW1hcnl7ZGlzcGxheTpibG9ja31hdWRpbyxjYW52YXMscHJvZ3Jlc3MsdmlkZW97ZGlzcGxheTppbmxpbmUtYmxvY2s7dmVydGljYWwtYWxpZ246YmFzZWxpbmV9YXVkaW86bm90KFtjb250cm9sc10pe2Rpc3BsYXk6bm9uZTtoZWlnaHQ6MH1baGlkZGVuXSx0ZW1wbGF0ZXtkaXNwbGF5Om5vbmV9YXtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50fWE6YWN0aXZlLGE6aG92ZXJ7b3V0bGluZTowfWFiYnJbdGl0bGVde2JvcmRlci1ib3R0b206MXB4IGRvdHRlZH1iLHN0cm9uZ3tmb250LXdlaWdodDo3MDB9ZGZue2ZvbnQtc3R5bGU6aXRhbGljfWgxe2ZvbnQtc2l6ZToyZW07bWFyZ2luOi42N2VtIDB9bWFya3tiYWNrZ3JvdW5kOiNmZjA7Y29sb3I6IzAwMH1zbWFsbHtmb250LXNpemU6ODAlfXN1YixzdXB7Zm9udC1zaXplOjc1JTtsaW5lLWhlaWdodDowO3Bvc2l0aW9uOnJlbGF0aXZlO3ZlcnRpY2FsLWFsaWduOmJhc2VsaW5lfXN1cHt0b3A6LS41ZW19c3Vie2JvdHRvbTotLjI1ZW19aW1ne2JvcmRlcjowfXN2Zzpub3QoOnJvb3Qpe292ZXJmbG93OmhpZGRlbn1maWd1cmV7bWFyZ2luOjFlbSA0MHB4fWhyey1tb3otYm94LXNpemluZzpjb250ZW50LWJveDtib3gtc2l6aW5nOmNvbnRlbnQtYm94O2hlaWdodDowfXByZXtvdmVyZmxvdzphdXRvfWNvZGUsa2JkLHByZSxzYW1we2ZvbnQtZmFtaWx5Om1vbm9zcGFjZSxtb25vc3BhY2U7Zm9udC1zaXplOjFlbX1idXR0b24saW5wdXQsb3B0Z3JvdXAsc2VsZWN0LHRleHRhcmVhe2NvbG9yOmluaGVyaXQ7Zm9udDppbmhlcml0O21hcmdpbjowfWJ1dHRvbntvdmVyZmxvdzp2aXNpYmxlfWJ1dHRvbixzZWxlY3R7dGV4dC10cmFuc2Zvcm06bm9uZX1idXR0b24saHRtbCBpbnB1dFt0eXBlPWJ1dHRvbl0saW5wdXRbdHlwZT1yZXNldF0saW5wdXRbdHlwZT1zdWJtaXRdey13ZWJraXQtYXBwZWFyYW5jZTpidXR0b247Y3Vyc29yOnBvaW50ZXJ9YnV0dG9uW2Rpc2FibGVkXSxodG1sIGlucHV0W2Rpc2FibGVkXXtjdXJzb3I6ZGVmYXVsdH1idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsaW5wdXQ6Oi1tb3otZm9jdXMtaW5uZXJ7Ym9yZGVyOjA7cGFkZGluZzowfWlucHV0e2xpbmUtaGVpZ2h0Om5vcm1hbH1pbnB1dFt0eXBlPWNoZWNrYm94XSxpbnB1dFt0eXBlPXJhZGlvXXtib3gtc2l6aW5nOmJvcmRlci1ib3g7cGFkZGluZzowfWlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixpbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b257aGVpZ2h0OmF1dG99aW5wdXRbdHlwZT1zZWFyY2hdey13ZWJraXQtYXBwZWFyYW5jZTp0ZXh0ZmllbGQ7LW1vei1ib3gtc2l6aW5nOmNvbnRlbnQtYm94Oy13ZWJraXQtYm94LXNpemluZzpjb250ZW50LWJveDtib3gtc2l6aW5nOmNvbnRlbnQtYm94fWlucHV0W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbixpbnB1dFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb257LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmV9ZmllbGRzZXR7Ym9yZGVyOjFweCBzb2xpZCBzaWx2ZXI7bWFyZ2luOjAgMnB4O3BhZGRpbmc6LjM1ZW0gLjYyNWVtIC43NWVtfWxlZ2VuZHtib3JkZXI6MDtwYWRkaW5nOjB9dGV4dGFyZWF7b3ZlcmZsb3c6YXV0b31vcHRncm91cHtmb250LXdlaWdodDo3MDB9dGFibGV7Ym9yZGVyLWNvbGxhcHNlOmNvbGxhcHNlO2JvcmRlci1zcGFjaW5nOjB9dGQsdGh7cGFkZGluZzowfS5oaWRkZW4sW2hpZGRlbl17ZGlzcGxheTpub25lIWltcG9ydGFudH0ucHVyZS1pbWd7bWF4LXdpZHRoOjEwMCU7aGVpZ2h0OmF1dG87ZGlzcGxheTpibG9ja30ucHVyZS1ne2xldHRlci1zcGFjaW5nOi0uMzFlbTt0ZXh0LXJlbmRlcmluZzpvcHRpbWl6ZXNwZWVkO2ZvbnQtZmFtaWx5OkZyZWVTYW5zLEFyaW1vLFxcXCJEcm9pZCBTYW5zXFxcIixIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZjstd2Via2l0LWZsZXgtZmxvdzpyb3cgd3JhcDtkaXNwbGF5Oi1tcy1mbGV4Ym94Oy1tcy1mbGV4LWZsb3c6cm93IHdyYXA7LW1zLWFsaWduLWNvbnRlbnQ6ZmxleC1zdGFydDstd2Via2l0LWFsaWduLWNvbnRlbnQ6ZmxleC1zdGFydDthbGlnbi1jb250ZW50OmZsZXgtc3RhcnR9Lm9wZXJhLW9ubHkgOi1vLXByZWZvY3VzLC5wdXJlLWd7d29yZC1zcGFjaW5nOi0uNDNlbX0ucHVyZS11e2Rpc3BsYXk6aW5saW5lLWJsb2NrO3pvb206MTtsZXR0ZXItc3BhY2luZzpub3JtYWw7d29yZC1zcGFjaW5nOm5vcm1hbDt2ZXJ0aWNhbC1hbGlnbjp0b3A7dGV4dC1yZW5kZXJpbmc6YXV0b30ucHVyZS1nIFtjbGFzcyo9XFxcInB1cmUtdVxcXCJde2ZvbnQtZmFtaWx5OnNhbnMtc2VyaWZ9LnB1cmUtdS0xLC5wdXJlLXUtMS0xLC5wdXJlLXUtMS0xMiwucHVyZS11LTEtMiwucHVyZS11LTEtMjQsLnB1cmUtdS0xLTMsLnB1cmUtdS0xLTQsLnB1cmUtdS0xLTUsLnB1cmUtdS0xLTYsLnB1cmUtdS0xLTgsLnB1cmUtdS0xMC0yNCwucHVyZS11LTExLTEyLC5wdXJlLXUtMTEtMjQsLnB1cmUtdS0xMi0yNCwucHVyZS11LTEzLTI0LC5wdXJlLXUtMTQtMjQsLnB1cmUtdS0xNS0yNCwucHVyZS11LTE2LTI0LC5wdXJlLXUtMTctMjQsLnB1cmUtdS0xOC0yNCwucHVyZS11LTE5LTI0LC5wdXJlLXUtMi0yNCwucHVyZS11LTItMywucHVyZS11LTItNSwucHVyZS11LTIwLTI0LC5wdXJlLXUtMjEtMjQsLnB1cmUtdS0yMi0yNCwucHVyZS11LTIzLTI0LC5wdXJlLXUtMjQtMjQsLnB1cmUtdS0zLTI0LC5wdXJlLXUtMy00LC5wdXJlLXUtMy01LC5wdXJlLXUtMy04LC5wdXJlLXUtNC0yNCwucHVyZS11LTQtNSwucHVyZS11LTUtMTIsLnB1cmUtdS01LTI0LC5wdXJlLXUtNS01LC5wdXJlLXUtNS02LC5wdXJlLXUtNS04LC5wdXJlLXUtNi0yNCwucHVyZS11LTctMTIsLnB1cmUtdS03LTI0LC5wdXJlLXUtNy04LC5wdXJlLXUtOC0yNCwucHVyZS11LTktMjR7ZGlzcGxheTppbmxpbmUtYmxvY2s7em9vbToxO2xldHRlci1zcGFjaW5nOm5vcm1hbDt3b3JkLXNwYWNpbmc6bm9ybWFsO3ZlcnRpY2FsLWFsaWduOnRvcDt0ZXh0LXJlbmRlcmluZzphdXRvfS5wdXJlLXUtMS0yNHt3aWR0aDo0LjE2NjclfS5wdXJlLXUtMS0xMiwucHVyZS11LTItMjR7d2lkdGg6OC4zMzMzJX0ucHVyZS11LTEtOCwucHVyZS11LTMtMjR7d2lkdGg6MTIuNSV9LnB1cmUtdS0xLTYsLnB1cmUtdS00LTI0e3dpZHRoOjE2LjY2NjclfS5wdXJlLXUtMS01e3dpZHRoOjIwJX0ucHVyZS11LTUtMjR7d2lkdGg6MjAuODMzMyV9LnB1cmUtdS0xLTQsLnB1cmUtdS02LTI0e3dpZHRoOjI1JX0ucHVyZS11LTctMjR7d2lkdGg6MjkuMTY2NyV9LnB1cmUtdS0xLTMsLnB1cmUtdS04LTI0e3dpZHRoOjMzLjMzMzMlfS5wdXJlLXUtMy04LC5wdXJlLXUtOS0yNHt3aWR0aDozNy41JX0ucHVyZS11LTItNXt3aWR0aDo0MCV9LnB1cmUtdS0xMC0yNCwucHVyZS11LTUtMTJ7d2lkdGg6NDEuNjY2NyV9LnB1cmUtdS0xMS0yNHt3aWR0aDo0NS44MzMzJX0ucHVyZS11LTEtMiwucHVyZS11LTEyLTI0e3dpZHRoOjUwJX0ucHVyZS11LTEzLTI0e3dpZHRoOjU0LjE2NjclfS5wdXJlLXUtMTQtMjQsLnB1cmUtdS03LTEye3dpZHRoOjU4LjMzMzMlfS5wdXJlLXUtMy01e3dpZHRoOjYwJX0ucHVyZS11LTE1LTI0LC5wdXJlLXUtNS04e3dpZHRoOjYyLjUlfS5wdXJlLXUtMTYtMjQsLnB1cmUtdS0yLTN7d2lkdGg6NjYuNjY2NyV9LnB1cmUtdS0xNy0yNHt3aWR0aDo3MC44MzMzJX0ucHVyZS11LTE4LTI0LC5wdXJlLXUtMy00e3dpZHRoOjc1JX0ucHVyZS11LTE5LTI0e3dpZHRoOjc5LjE2NjclfS5wdXJlLXUtNC01e3dpZHRoOjgwJX0ucHVyZS11LTIwLTI0LC5wdXJlLXUtNS02e3dpZHRoOjgzLjMzMzMlfS5wdXJlLXUtMjEtMjQsLnB1cmUtdS03LTh7d2lkdGg6ODcuNSV9LnB1cmUtdS0xMS0xMiwucHVyZS11LTIyLTI0e3dpZHRoOjkxLjY2NjclfS5wdXJlLXUtMjMtMjR7d2lkdGg6OTUuODMzMyV9LnB1cmUtdS0xLC5wdXJlLXUtMS0xLC5wdXJlLXUtMjQtMjQsLnB1cmUtdS01LTV7d2lkdGg6MTAwJX0ucHVyZS1idXR0b257ZGlzcGxheTppbmxpbmUtYmxvY2s7em9vbToxO2xpbmUtaGVpZ2h0Om5vcm1hbDt3aGl0ZS1zcGFjZTpub3dyYXA7dmVydGljYWwtYWxpZ246bWlkZGxlO3RleHQtYWxpZ246Y2VudGVyO2N1cnNvcjpwb2ludGVyOy13ZWJraXQtdXNlci1kcmFnOm5vbmU7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lOy13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94Oy1tb3otYm94LXNpemluZzpib3JkZXItYm94O2JveC1zaXppbmc6Ym9yZGVyLWJveDtmb250LWZhbWlseTppbmhlcml0O2ZvbnQtc2l6ZToxMDAlO2JvcmRlcjoxcHggc29saWQgIzk5OTtib3JkZXI6bm9uZSB0cmFuc3BhcmVudDt0ZXh0LWRlY29yYXRpb246bm9uZX0ucHVyZS1idXR0b24taG92ZXIsLnB1cmUtYnV0dG9uOmZvY3VzLC5wdXJlLWJ1dHRvbjpob3ZlcntmaWx0ZXI6cHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JzdHI9JyMwMDAwMDAwMCcsIGVuZENvbG9yc3RyPScjMWEwMDAwMDAnLCBHcmFkaWVudFR5cGU9MCk7YmFja2dyb3VuZC1pbWFnZTotd2Via2l0LWdyYWRpZW50KGxpbmVhciwwIDAsMCAxMDAlLGZyb20odHJhbnNwYXJlbnQpLGNvbG9yLXN0b3AoNDAlLHJnYmEoMCwwLDAsLjA1KSksdG8ocmdiYSgwLDAsMCwuMSkpKTtiYWNrZ3JvdW5kLWltYWdlOi13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50LHJnYmEoMCwwLDAsLjA1KSA0MCUscmdiYSgwLDAsMCwuMSkpO2JhY2tncm91bmQtaW1hZ2U6LW1vei1saW5lYXItZ3JhZGllbnQodG9wLHJnYmEoMCwwLDAsLjA1KSAwLHJnYmEoMCwwLDAsLjEpKTtiYWNrZ3JvdW5kLWltYWdlOi1vLWxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCxyZ2JhKDAsMCwwLC4wNSkgNDAlLHJnYmEoMCwwLDAsLjEpKTtiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCxyZ2JhKDAsMCwwLC4wNSkgNDAlLHJnYmEoMCwwLDAsLjEpKX0ucHVyZS1idXR0b246Zm9jdXN7b3V0bGluZTowfS5wdXJlLWJ1dHRvbi1hY3RpdmUsLnB1cmUtYnV0dG9uOmFjdGl2ZXtib3gtc2hhZG93OjAgMCAwIDFweCByZ2JhKDAsMCwwLC4xNSkgaW5zZXQsMCAwIDZweCByZ2JhKDAsMCwwLC4yKSBpbnNldH0ucHVyZS1idXR0b24tZGlzYWJsZWQsLnB1cmUtYnV0dG9uLWRpc2FibGVkOmFjdGl2ZSwucHVyZS1idXR0b24tZGlzYWJsZWQ6Zm9jdXMsLnB1cmUtYnV0dG9uLWRpc2FibGVkOmhvdmVyLC5wdXJlLWJ1dHRvbltkaXNhYmxlZF17Ym9yZGVyOm5vbmU7YmFja2dyb3VuZC1pbWFnZTpub25lO2ZpbHRlcjpwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoZW5hYmxlZD1mYWxzZSk7ZmlsdGVyOmFscGhhKG9wYWNpdHk9NDApOy1raHRtbC1vcGFjaXR5Oi40Oy1tb3otb3BhY2l0eTouNDtvcGFjaXR5Oi40O2N1cnNvcjpub3QtYWxsb3dlZDtib3gtc2hhZG93Om5vbmV9LnB1cmUtYnV0dG9uLWhpZGRlbntkaXNwbGF5Om5vbmV9LnB1cmUtYnV0dG9uOjotbW96LWZvY3VzLWlubmVye3BhZGRpbmc6MDtib3JkZXI6MH0ucHVyZS1idXR0b24tcHJpbWFyeSwucHVyZS1idXR0b24tc2VsZWN0ZWQsYS5wdXJlLWJ1dHRvbi1wcmltYXJ5LGEucHVyZS1idXR0b24tc2VsZWN0ZWR7YmFja2dyb3VuZC1jb2xvcjojMDA3OGU3O2NvbG9yOiNmZmZ9LnB1cmUtZm9ybSBpbnB1dFt0eXBlPWNvbG9yXSwucHVyZS1mb3JtIGlucHV0W3R5cGU9ZGF0ZV0sLnB1cmUtZm9ybSBpbnB1dFt0eXBlPWRhdGV0aW1lLWxvY2FsXSwucHVyZS1mb3JtIGlucHV0W3R5cGU9ZGF0ZXRpbWVdLC5wdXJlLWZvcm0gaW5wdXRbdHlwZT1lbWFpbF0sLnB1cmUtZm9ybSBpbnB1dFt0eXBlPW1vbnRoXSwucHVyZS1mb3JtIGlucHV0W3R5cGU9bnVtYmVyXSwucHVyZS1mb3JtIGlucHV0W3R5cGU9cGFzc3dvcmRdLC5wdXJlLWZvcm0gaW5wdXRbdHlwZT1zZWFyY2hdLC5wdXJlLWZvcm0gaW5wdXRbdHlwZT10ZWxdLC5wdXJlLWZvcm0gaW5wdXRbdHlwZT10ZXh0XSwucHVyZS1mb3JtIGlucHV0W3R5cGU9dGltZV0sLnB1cmUtZm9ybSBpbnB1dFt0eXBlPXVybF0sLnB1cmUtZm9ybSBpbnB1dFt0eXBlPXdlZWtdLC5wdXJlLWZvcm0gc2VsZWN0LC5wdXJlLWZvcm0gdGV4dGFyZWF7cGFkZGluZzouNWVtIC42ZW07ZGlzcGxheTppbmxpbmUtYmxvY2s7Ym9yZGVyOjFweCBzb2xpZCAjY2NjO2JveC1zaGFkb3c6aW5zZXQgMCAxcHggM3B4ICNkZGQ7Ym9yZGVyLXJhZGl1czo0cHg7dmVydGljYWwtYWxpZ246bWlkZGxlOy13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94Oy1tb3otYm94LXNpemluZzpib3JkZXItYm94O2JveC1zaXppbmc6Ym9yZGVyLWJveH0ucHVyZS1mb3JtIGlucHV0Om5vdChbdHlwZV0pe3BhZGRpbmc6LjVlbSAuNmVtO2Rpc3BsYXk6aW5saW5lLWJsb2NrO2JvcmRlcjoxcHggc29saWQgI2NjYztib3gtc2hhZG93Omluc2V0IDAgMXB4IDNweCAjZGRkO2JvcmRlci1yYWRpdXM6NHB4Oy13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94Oy1tb3otYm94LXNpemluZzpib3JkZXItYm94O2JveC1zaXppbmc6Ym9yZGVyLWJveH0ucHVyZS1mb3JtIGlucHV0W3R5cGU9Y29sb3Jde3BhZGRpbmc6LjJlbSAuNWVtfS5wdXJlLWZvcm0gaW5wdXQ6bm90KFt0eXBlXSk6Zm9jdXMsLnB1cmUtZm9ybSBpbnB1dFt0eXBlPWNvbG9yXTpmb2N1cywucHVyZS1mb3JtIGlucHV0W3R5cGU9ZGF0ZV06Zm9jdXMsLnB1cmUtZm9ybSBpbnB1dFt0eXBlPWRhdGV0aW1lLWxvY2FsXTpmb2N1cywucHVyZS1mb3JtIGlucHV0W3R5cGU9ZGF0ZXRpbWVdOmZvY3VzLC5wdXJlLWZvcm0gaW5wdXRbdHlwZT1lbWFpbF06Zm9jdXMsLnB1cmUtZm9ybSBpbnB1dFt0eXBlPW1vbnRoXTpmb2N1cywucHVyZS1mb3JtIGlucHV0W3R5cGU9bnVtYmVyXTpmb2N1cywucHVyZS1mb3JtIGlucHV0W3R5cGU9cGFzc3dvcmRdOmZvY3VzLC5wdXJlLWZvcm0gaW5wdXRbdHlwZT1zZWFyY2hdOmZvY3VzLC5wdXJlLWZvcm0gaW5wdXRbdHlwZT10ZWxdOmZvY3VzLC5wdXJlLWZvcm0gaW5wdXRbdHlwZT10ZXh0XTpmb2N1cywucHVyZS1mb3JtIGlucHV0W3R5cGU9dGltZV06Zm9jdXMsLnB1cmUtZm9ybSBpbnB1dFt0eXBlPXVybF06Zm9jdXMsLnB1cmUtZm9ybSBpbnB1dFt0eXBlPXdlZWtdOmZvY3VzLC5wdXJlLWZvcm0gc2VsZWN0OmZvY3VzLC5wdXJlLWZvcm0gdGV4dGFyZWE6Zm9jdXN7b3V0bGluZTowO2JvcmRlci1jb2xvcjojMTI5RkVBfS5wdXJlLWZvcm0gaW5wdXRbdHlwZT1jaGVja2JveF06Zm9jdXMsLnB1cmUtZm9ybSBpbnB1dFt0eXBlPWZpbGVdOmZvY3VzLC5wdXJlLWZvcm0gaW5wdXRbdHlwZT1yYWRpb106Zm9jdXN7b3V0bGluZTojMTI5RkVBIGF1dG8gMXB4fS5wdXJlLWZvcm0gLnB1cmUtY2hlY2tib3gsLnB1cmUtZm9ybSAucHVyZS1yYWRpb3ttYXJnaW46LjVlbSAwO2Rpc3BsYXk6YmxvY2t9LnB1cmUtZm9ybSBpbnB1dDpub3QoW3R5cGVdKVtkaXNhYmxlZF0sLnB1cmUtZm9ybSBpbnB1dFt0eXBlPWNvbG9yXVtkaXNhYmxlZF0sLnB1cmUtZm9ybSBpbnB1dFt0eXBlPWRhdGVdW2Rpc2FibGVkXSwucHVyZS1mb3JtIGlucHV0W3R5cGU9ZGF0ZXRpbWUtbG9jYWxdW2Rpc2FibGVkXSwucHVyZS1mb3JtIGlucHV0W3R5cGU9ZGF0ZXRpbWVdW2Rpc2FibGVkXSwucHVyZS1mb3JtIGlucHV0W3R5cGU9ZW1haWxdW2Rpc2FibGVkXSwucHVyZS1mb3JtIGlucHV0W3R5cGU9bW9udGhdW2Rpc2FibGVkXSwucHVyZS1mb3JtIGlucHV0W3R5cGU9bnVtYmVyXVtkaXNhYmxlZF0sLnB1cmUtZm9ybSBpbnB1dFt0eXBlPXBhc3N3b3JkXVtkaXNhYmxlZF0sLnB1cmUtZm9ybSBpbnB1dFt0eXBlPXNlYXJjaF1bZGlzYWJsZWRdLC5wdXJlLWZvcm0gaW5wdXRbdHlwZT10ZWxdW2Rpc2FibGVkXSwucHVyZS1mb3JtIGlucHV0W3R5cGU9dGV4dF1bZGlzYWJsZWRdLC5wdXJlLWZvcm0gaW5wdXRbdHlwZT10aW1lXVtkaXNhYmxlZF0sLnB1cmUtZm9ybSBpbnB1dFt0eXBlPXVybF1bZGlzYWJsZWRdLC5wdXJlLWZvcm0gaW5wdXRbdHlwZT13ZWVrXVtkaXNhYmxlZF0sLnB1cmUtZm9ybSBzZWxlY3RbZGlzYWJsZWRdLC5wdXJlLWZvcm0gdGV4dGFyZWFbZGlzYWJsZWRde2N1cnNvcjpub3QtYWxsb3dlZDtiYWNrZ3JvdW5kLWNvbG9yOiNlYWVkZWQ7Y29sb3I6I2NhZDJkM30ucHVyZS1mb3JtIGlucHV0W3JlYWRvbmx5XSwucHVyZS1mb3JtIHNlbGVjdFtyZWFkb25seV0sLnB1cmUtZm9ybSB0ZXh0YXJlYVtyZWFkb25seV17YmFja2dyb3VuZC1jb2xvcjojZWVlO2NvbG9yOiM3Nzc7Ym9yZGVyLWNvbG9yOiNjY2N9LnB1cmUtZm9ybSBpbnB1dDpmb2N1czppbnZhbGlkLC5wdXJlLWZvcm0gc2VsZWN0OmZvY3VzOmludmFsaWQsLnB1cmUtZm9ybSB0ZXh0YXJlYTpmb2N1czppbnZhbGlke2NvbG9yOiNiOTRhNDg7Ym9yZGVyLWNvbG9yOiNlOTMyMmR9LnB1cmUtZm9ybSBpbnB1dFt0eXBlPWNoZWNrYm94XTpmb2N1czppbnZhbGlkOmZvY3VzLC5wdXJlLWZvcm0gaW5wdXRbdHlwZT1maWxlXTpmb2N1czppbnZhbGlkOmZvY3VzLC5wdXJlLWZvcm0gaW5wdXRbdHlwZT1yYWRpb106Zm9jdXM6aW52YWxpZDpmb2N1c3tvdXRsaW5lLWNvbG9yOiNlOTMyMmR9LnB1cmUtZm9ybSBzZWxlY3R7aGVpZ2h0OjIuMjVlbTtib3JkZXI6MXB4IHNvbGlkICNjY2M7YmFja2dyb3VuZC1jb2xvcjojZmZmfS5wdXJlLWZvcm0gc2VsZWN0W211bHRpcGxlXXtoZWlnaHQ6YXV0b30ucHVyZS1mb3JtIGZpZWxkc2V0e21hcmdpbjowO3BhZGRpbmc6LjM1ZW0gMCAuNzVlbTtib3JkZXI6MH0ucHVyZS1mb3JtIGxlZ2VuZHtkaXNwbGF5OmJsb2NrO3dpZHRoOjEwMCU7cGFkZGluZzouM2VtIDA7bWFyZ2luLWJvdHRvbTouM2VtO2NvbG9yOiMzMzM7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI2U1ZTVlNX0ucHVyZS1mb3JtLXN0YWNrZWQgaW5wdXQ6bm90KFt0eXBlXSksLnB1cmUtZm9ybS1zdGFja2VkIGlucHV0W3R5cGU9Y29sb3JdLC5wdXJlLWZvcm0tc3RhY2tlZCBpbnB1dFt0eXBlPWRhdGVdLC5wdXJlLWZvcm0tc3RhY2tlZCBpbnB1dFt0eXBlPWRhdGV0aW1lLWxvY2FsXSwucHVyZS1mb3JtLXN0YWNrZWQgaW5wdXRbdHlwZT1kYXRldGltZV0sLnB1cmUtZm9ybS1zdGFja2VkIGlucHV0W3R5cGU9ZW1haWxdLC5wdXJlLWZvcm0tc3RhY2tlZCBpbnB1dFt0eXBlPWZpbGVdLC5wdXJlLWZvcm0tc3RhY2tlZCBpbnB1dFt0eXBlPW1vbnRoXSwucHVyZS1mb3JtLXN0YWNrZWQgaW5wdXRbdHlwZT1udW1iZXJdLC5wdXJlLWZvcm0tc3RhY2tlZCBpbnB1dFt0eXBlPXBhc3N3b3JkXSwucHVyZS1mb3JtLXN0YWNrZWQgaW5wdXRbdHlwZT1zZWFyY2hdLC5wdXJlLWZvcm0tc3RhY2tlZCBpbnB1dFt0eXBlPXRlbF0sLnB1cmUtZm9ybS1zdGFja2VkIGlucHV0W3R5cGU9dGV4dF0sLnB1cmUtZm9ybS1zdGFja2VkIGlucHV0W3R5cGU9dGltZV0sLnB1cmUtZm9ybS1zdGFja2VkIGlucHV0W3R5cGU9dXJsXSwucHVyZS1mb3JtLXN0YWNrZWQgaW5wdXRbdHlwZT13ZWVrXSwucHVyZS1mb3JtLXN0YWNrZWQgbGFiZWwsLnB1cmUtZm9ybS1zdGFja2VkIHNlbGVjdCwucHVyZS1mb3JtLXN0YWNrZWQgdGV4dGFyZWF7ZGlzcGxheTpibG9jazttYXJnaW46LjI1ZW0gMH0ucHVyZS1mb3JtLWFsaWduZWQgLnB1cmUtaGVscC1pbmxpbmUsLnB1cmUtZm9ybS1hbGlnbmVkIGlucHV0LC5wdXJlLWZvcm0tYWxpZ25lZCBzZWxlY3QsLnB1cmUtZm9ybS1hbGlnbmVkIHRleHRhcmVhLC5wdXJlLWZvcm0tbWVzc2FnZS1pbmxpbmV7ZGlzcGxheTppbmxpbmUtYmxvY2s7dmVydGljYWwtYWxpZ246bWlkZGxlfS5wdXJlLWZvcm0tYWxpZ25lZCB0ZXh0YXJlYXt2ZXJ0aWNhbC1hbGlnbjp0b3B9LnB1cmUtZm9ybS1hbGlnbmVkIC5wdXJlLWNvbnRyb2wtZ3JvdXB7bWFyZ2luLWJvdHRvbTouNWVtfS5wdXJlLWZvcm0tYWxpZ25lZCAucHVyZS1jb250cm9sLWdyb3VwIGxhYmVse3RleHQtYWxpZ246cmlnaHQ7ZGlzcGxheTppbmxpbmUtYmxvY2s7dmVydGljYWwtYWxpZ246bWlkZGxlO3dpZHRoOjEwZW07bWFyZ2luOjAgMWVtIDAgMH0ucHVyZS1mb3JtLWFsaWduZWQgLnB1cmUtY29udHJvbHN7bWFyZ2luOjEuNWVtIDAgMCAxMWVtfS5wdXJlLWZvcm0gLnB1cmUtaW5wdXQtcm91bmRlZCwucHVyZS1mb3JtIGlucHV0LnB1cmUtaW5wdXQtcm91bmRlZHtib3JkZXItcmFkaXVzOjJlbTtwYWRkaW5nOi41ZW0gMWVtfS5wdXJlLWZvcm0gLnB1cmUtZ3JvdXAgZmllbGRzZXR7bWFyZ2luLWJvdHRvbToxMHB4fS5wdXJlLWZvcm0gLnB1cmUtZ3JvdXAgaW5wdXQsLnB1cmUtZm9ybSAucHVyZS1ncm91cCB0ZXh0YXJlYXtkaXNwbGF5OmJsb2NrO3BhZGRpbmc6MTBweDttYXJnaW46MCAwIC0xcHg7Ym9yZGVyLXJhZGl1czowO3Bvc2l0aW9uOnJlbGF0aXZlO3RvcDotMXB4fS5wdXJlLWZvcm0gLnB1cmUtZ3JvdXAgaW5wdXQ6Zm9jdXMsLnB1cmUtZm9ybSAucHVyZS1ncm91cCB0ZXh0YXJlYTpmb2N1c3t6LWluZGV4OjN9LnB1cmUtZm9ybSAucHVyZS1ncm91cCBpbnB1dDpmaXJzdC1jaGlsZCwucHVyZS1mb3JtIC5wdXJlLWdyb3VwIHRleHRhcmVhOmZpcnN0LWNoaWxke3RvcDoxcHg7Ym9yZGVyLXJhZGl1czo0cHggNHB4IDAgMDttYXJnaW46MH0ucHVyZS1mb3JtIC5wdXJlLWdyb3VwIGlucHV0OmZpcnN0LWNoaWxkOmxhc3QtY2hpbGQsLnB1cmUtZm9ybSAucHVyZS1ncm91cCB0ZXh0YXJlYTpmaXJzdC1jaGlsZDpsYXN0LWNoaWxke3RvcDoxcHg7Ym9yZGVyLXJhZGl1czo0cHg7bWFyZ2luOjB9LnB1cmUtZm9ybSAucHVyZS1ncm91cCBpbnB1dDpsYXN0LWNoaWxkLC5wdXJlLWZvcm0gLnB1cmUtZ3JvdXAgdGV4dGFyZWE6bGFzdC1jaGlsZHt0b3A6LTJweDtib3JkZXItcmFkaXVzOjAgMCA0cHggNHB4O21hcmdpbjowfS5wdXJlLWZvcm0gLnB1cmUtZ3JvdXAgYnV0dG9ue21hcmdpbjouMzVlbSAwfS5wdXJlLWZvcm0gLnB1cmUtaW5wdXQtMXt3aWR0aDoxMDAlfS5wdXJlLWZvcm0gLnB1cmUtaW5wdXQtMi0ze3dpZHRoOjY2JX0ucHVyZS1mb3JtIC5wdXJlLWlucHV0LTEtMnt3aWR0aDo1MCV9LnB1cmUtZm9ybSAucHVyZS1pbnB1dC0xLTN7d2lkdGg6MzMlfS5wdXJlLWZvcm0gLnB1cmUtaW5wdXQtMS00e3dpZHRoOjI1JX0ucHVyZS1mb3JtIC5wdXJlLWhlbHAtaW5saW5lLC5wdXJlLWZvcm0tbWVzc2FnZS1pbmxpbmV7ZGlzcGxheTppbmxpbmUtYmxvY2s7cGFkZGluZy1sZWZ0Oi4zZW07Y29sb3I6IzY2Njt2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7Zm9udC1zaXplOi44NzVlbX0ucHVyZS1mb3JtLW1lc3NhZ2V7ZGlzcGxheTpibG9jaztjb2xvcjojNjY2O2ZvbnQtc2l6ZTouODc1ZW19QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoIDo0ODBweCl7LnB1cmUtZm9ybSBidXR0b25bdHlwZT1zdWJtaXRde21hcmdpbjouN2VtIDAgMH0ucHVyZS1mb3JtIGlucHV0Om5vdChbdHlwZV0pLC5wdXJlLWZvcm0gaW5wdXRbdHlwZT1jb2xvcl0sLnB1cmUtZm9ybSBpbnB1dFt0eXBlPWRhdGVdLC5wdXJlLWZvcm0gaW5wdXRbdHlwZT1kYXRldGltZS1sb2NhbF0sLnB1cmUtZm9ybSBpbnB1dFt0eXBlPWRhdGV0aW1lXSwucHVyZS1mb3JtIGlucHV0W3R5cGU9ZW1haWxdLC5wdXJlLWZvcm0gaW5wdXRbdHlwZT1tb250aF0sLnB1cmUtZm9ybSBpbnB1dFt0eXBlPW51bWJlcl0sLnB1cmUtZm9ybSBpbnB1dFt0eXBlPXBhc3N3b3JkXSwucHVyZS1mb3JtIGlucHV0W3R5cGU9c2VhcmNoXSwucHVyZS1mb3JtIGlucHV0W3R5cGU9dGVsXSwucHVyZS1mb3JtIGlucHV0W3R5cGU9dGV4dF0sLnB1cmUtZm9ybSBpbnB1dFt0eXBlPXRpbWVdLC5wdXJlLWZvcm0gaW5wdXRbdHlwZT11cmxdLC5wdXJlLWZvcm0gaW5wdXRbdHlwZT13ZWVrXSwucHVyZS1mb3JtIGxhYmVse21hcmdpbi1ib3R0b206LjNlbTtkaXNwbGF5OmJsb2NrfS5wdXJlLWdyb3VwIGlucHV0Om5vdChbdHlwZV0pLC5wdXJlLWdyb3VwIGlucHV0W3R5cGU9Y29sb3JdLC5wdXJlLWdyb3VwIGlucHV0W3R5cGU9ZGF0ZV0sLnB1cmUtZ3JvdXAgaW5wdXRbdHlwZT1kYXRldGltZS1sb2NhbF0sLnB1cmUtZ3JvdXAgaW5wdXRbdHlwZT1kYXRldGltZV0sLnB1cmUtZ3JvdXAgaW5wdXRbdHlwZT1lbWFpbF0sLnB1cmUtZ3JvdXAgaW5wdXRbdHlwZT1tb250aF0sLnB1cmUtZ3JvdXAgaW5wdXRbdHlwZT1udW1iZXJdLC5wdXJlLWdyb3VwIGlucHV0W3R5cGU9cGFzc3dvcmRdLC5wdXJlLWdyb3VwIGlucHV0W3R5cGU9c2VhcmNoXSwucHVyZS1ncm91cCBpbnB1dFt0eXBlPXRlbF0sLnB1cmUtZ3JvdXAgaW5wdXRbdHlwZT10ZXh0XSwucHVyZS1ncm91cCBpbnB1dFt0eXBlPXRpbWVdLC5wdXJlLWdyb3VwIGlucHV0W3R5cGU9dXJsXSwucHVyZS1ncm91cCBpbnB1dFt0eXBlPXdlZWtde21hcmdpbi1ib3R0b206MH0ucHVyZS1mb3JtLWFsaWduZWQgLnB1cmUtY29udHJvbC1ncm91cCBsYWJlbHttYXJnaW4tYm90dG9tOi4zZW07dGV4dC1hbGlnbjpsZWZ0O2Rpc3BsYXk6YmxvY2s7d2lkdGg6MTAwJX0ucHVyZS1mb3JtLWFsaWduZWQgLnB1cmUtY29udHJvbHN7bWFyZ2luOjEuNWVtIDAgMH0ucHVyZS1mb3JtIC5wdXJlLWhlbHAtaW5saW5lLC5wdXJlLWZvcm0tbWVzc2FnZSwucHVyZS1mb3JtLW1lc3NhZ2UtaW5saW5le2Rpc3BsYXk6YmxvY2s7Zm9udC1zaXplOi43NWVtO3BhZGRpbmc6LjJlbSAwIC44ZW19fS5wdXJlLW1lbnV7LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7LW1vei1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94fS5wdXJlLW1lbnUtZml4ZWR7cG9zaXRpb246Zml4ZWQ7bGVmdDowO3RvcDowO3otaW5kZXg6M30ucHVyZS1tZW51LWl0ZW0sLnB1cmUtbWVudS1saXN0e3Bvc2l0aW9uOnJlbGF0aXZlfS5wdXJlLW1lbnUtbGlzdHtsaXN0LXN0eWxlOm5vbmU7bWFyZ2luOjA7cGFkZGluZzowfS5wdXJlLW1lbnUtaXRlbXtwYWRkaW5nOjA7bWFyZ2luOjA7aGVpZ2h0OjEwMCV9LnB1cmUtbWVudS1oZWFkaW5nLC5wdXJlLW1lbnUtbGlua3tkaXNwbGF5OmJsb2NrO3RleHQtZGVjb3JhdGlvbjpub25lO3doaXRlLXNwYWNlOm5vd3JhcH0ucHVyZS1tZW51LWhvcml6b250YWx7d2lkdGg6MTAwJTt3aGl0ZS1zcGFjZTpub3dyYXB9LnB1cmUtbWVudS1ob3Jpem9udGFsIC5wdXJlLW1lbnUtbGlzdHtkaXNwbGF5OmlubGluZS1ibG9ja30ucHVyZS1tZW51LWhvcml6b250YWwgLnB1cmUtbWVudS1oZWFkaW5nLC5wdXJlLW1lbnUtaG9yaXpvbnRhbCAucHVyZS1tZW51LWl0ZW0sLnB1cmUtbWVudS1ob3Jpem9udGFsIC5wdXJlLW1lbnUtc2VwYXJhdG9ye2Rpc3BsYXk6aW5saW5lLWJsb2NrO3pvb206MTt2ZXJ0aWNhbC1hbGlnbjptaWRkbGV9LnB1cmUtbWVudS1pdGVtIC5wdXJlLW1lbnUtaXRlbXtkaXNwbGF5OmJsb2NrfS5wdXJlLW1lbnUtY2hpbGRyZW57ZGlzcGxheTpub25lO3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6MTAwJTt0b3A6MDttYXJnaW46MDtwYWRkaW5nOjA7ei1pbmRleDozfS5wdXJlLW1lbnUtaG9yaXpvbnRhbCAucHVyZS1tZW51LWNoaWxkcmVue2xlZnQ6MDt0b3A6YXV0bzt3aWR0aDppbmhlcml0fS5wdXJlLW1lbnUtYWN0aXZlPi5wdXJlLW1lbnUtY2hpbGRyZW4sLnB1cmUtbWVudS1hbGxvdy1ob3Zlcjpob3Zlcj4ucHVyZS1tZW51LWNoaWxkcmVue2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246YWJzb2x1dGV9LnB1cmUtbWVudS1oYXMtY2hpbGRyZW4+LnB1cmUtbWVudS1saW5rOmFmdGVye3BhZGRpbmctbGVmdDouNWVtO2NvbnRlbnQ6XFxcIlxcXFwyNUI4XFxcIjtmb250LXNpemU6c21hbGx9LnB1cmUtbWVudS1ob3Jpem9udGFsIC5wdXJlLW1lbnUtaGFzLWNoaWxkcmVuPi5wdXJlLW1lbnUtbGluazphZnRlcntjb250ZW50OlxcXCJcXFxcMjVCRVxcXCJ9LnB1cmUtbWVudS1zY3JvbGxhYmxle292ZXJmbG93LXk6c2Nyb2xsO292ZXJmbG93LXg6aGlkZGVufS5wdXJlLW1lbnUtc2Nyb2xsYWJsZSAucHVyZS1tZW51LWxpc3R7ZGlzcGxheTpibG9ja30ucHVyZS1tZW51LWhvcml6b250YWwucHVyZS1tZW51LXNjcm9sbGFibGUgLnB1cmUtbWVudS1saXN0e2Rpc3BsYXk6aW5saW5lLWJsb2NrfS5wdXJlLW1lbnUtaG9yaXpvbnRhbC5wdXJlLW1lbnUtc2Nyb2xsYWJsZXt3aGl0ZS1zcGFjZTpub3dyYXA7b3ZlcmZsb3cteTpoaWRkZW47b3ZlcmZsb3cteDphdXRvOy1tcy1vdmVyZmxvdy1zdHlsZTpub25lOy13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOnRvdWNoO3BhZGRpbmc6LjVlbSAwfS5wdXJlLW1lbnUtaG9yaXpvbnRhbC5wdXJlLW1lbnUtc2Nyb2xsYWJsZTo6LXdlYmtpdC1zY3JvbGxiYXJ7ZGlzcGxheTpub25lfS5wdXJlLW1lbnUtc2VwYXJhdG9ye2JhY2tncm91bmQtY29sb3I6I2NjYztoZWlnaHQ6MXB4O21hcmdpbjouM2VtIDB9LnB1cmUtbWVudS1ob3Jpem9udGFsIC5wdXJlLW1lbnUtc2VwYXJhdG9ye3dpZHRoOjFweDtoZWlnaHQ6MS4zZW07bWFyZ2luOjAgLjNlbX0ucHVyZS1tZW51LWhlYWRpbmd7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO2NvbG9yOiM1NjVkNjR9LnB1cmUtbWVudS1saW5re2NvbG9yOiM3Nzd9LnB1cmUtbWVudS1jaGlsZHJlbntiYWNrZ3JvdW5kLWNvbG9yOiNmZmZ9LnB1cmUtbWVudS1kaXNhYmxlZCwucHVyZS1tZW51LWhlYWRpbmcsLnB1cmUtbWVudS1saW5re3BhZGRpbmc6LjVlbSAxZW19LnB1cmUtbWVudS1kaXNhYmxlZHtvcGFjaXR5Oi41fS5wdXJlLW1lbnUtZGlzYWJsZWQgLnB1cmUtbWVudS1saW5rOmhvdmVye2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnR9LnB1cmUtbWVudS1hY3RpdmU+LnB1cmUtbWVudS1saW5rLC5wdXJlLW1lbnUtbGluazpmb2N1cywucHVyZS1tZW51LWxpbms6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZWVlfS5wdXJlLW1lbnUtc2VsZWN0ZWQgLnB1cmUtbWVudS1saW5rLC5wdXJlLW1lbnUtc2VsZWN0ZWQgLnB1cmUtbWVudS1saW5rOnZpc2l0ZWR7Y29sb3I6IzAwMH0ucHVyZS10YWJsZXtib3JkZXItY29sbGFwc2U6Y29sbGFwc2U7Ym9yZGVyLXNwYWNpbmc6MDtlbXB0eS1jZWxsczpzaG93O2JvcmRlcjoxcHggc29saWQgI2NiY2JjYn0ucHVyZS10YWJsZSBjYXB0aW9ue2NvbG9yOiMwMDA7Zm9udDppdGFsaWMgODUlLzEgYXJpYWwsc2Fucy1zZXJpZjtwYWRkaW5nOjFlbSAwO3RleHQtYWxpZ246Y2VudGVyfS5wdXJlLXRhYmxlIHRkLC5wdXJlLXRhYmxlIHRoe2JvcmRlci1sZWZ0OjFweCBzb2xpZCAjY2JjYmNiO2JvcmRlci13aWR0aDowIDAgMCAxcHg7Zm9udC1zaXplOmluaGVyaXQ7bWFyZ2luOjA7b3ZlcmZsb3c6dmlzaWJsZTtwYWRkaW5nOi41ZW0gMWVtfS5wdXJlLXRhYmxlIHRkOmZpcnN0LWNoaWxkLC5wdXJlLXRhYmxlIHRoOmZpcnN0LWNoaWxke2JvcmRlci1sZWZ0LXdpZHRoOjB9LnB1cmUtdGFibGUgdGhlYWR7YmFja2dyb3VuZC1jb2xvcjojZTBlMGUwO2NvbG9yOiMwMDA7dGV4dC1hbGlnbjpsZWZ0O3ZlcnRpY2FsLWFsaWduOmJvdHRvbX0ucHVyZS10YWJsZSB0ZHtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50fS5wdXJlLXRhYmxlLW9kZCB0ZCwucHVyZS10YWJsZS1zdHJpcGVkIHRyOm50aC1jaGlsZCgybi0xKSB0ZHtiYWNrZ3JvdW5kLWNvbG9yOiNmMmYyZjJ9LnB1cmUtdGFibGUtYm9yZGVyZWQgdGR7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI2NiY2JjYn0ucHVyZS10YWJsZS1ib3JkZXJlZCB0Ym9keT50cjpsYXN0LWNoaWxkPnRke2JvcmRlci1ib3R0b20td2lkdGg6MH0ucHVyZS10YWJsZS1ob3Jpem9udGFsIHRkLC5wdXJlLXRhYmxlLWhvcml6b250YWwgdGh7Ym9yZGVyLXdpZHRoOjAgMCAxcHg7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI2NiY2JjYn0ucHVyZS10YWJsZS1ob3Jpem9udGFsIHRib2R5PnRyOmxhc3QtY2hpbGQ+dGR7Ym9yZGVyLWJvdHRvbS13aWR0aDowfWJvZHl7bWFyZ2luOjA7cGFkZGluZzowfSp7LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7LW1vei1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94fWJvZHl7bGluZS1oZWlnaHQ6MS43ZW07Y29sb3I6IzdmOGM4ZDtmb250LXNpemU6MTNweH1oMSxoMixoMyxoNCxoNSxoNixsYWJlbHtjb2xvcjojMzQ0OTVlfS5wdXJlLWltZy1yZXNwb25zaXZle21heC13aWR0aDoxMDAlO2hlaWdodDphdXRvfS5sLWJveHtwYWRkaW5nOjFlbX0ubC1ib3gtbHJne3BhZGRpbmc6MmVtO2JvcmRlci1ib3R0b206MXB4IHNvbGlkIHJnYmEoMCwwLDAsLjEpfS5pcy1jZW50ZXJ7dGV4dC1hbGlnbjpjZW50ZXJ9LnB1cmUtZm9ybSBsYWJlbHttYXJnaW46MWVtIDAgMDtmb250LXdlaWdodDo3MDA7Zm9udC1zaXplOjEwMCV9LnB1cmUtZm9ybSBpbnB1dFt0eXBlXXtib3JkZXI6MnB4IHNvbGlkICNkZGQ7Ym94LXNoYWRvdzpub25lO2ZvbnQtc2l6ZToxMDAlO3dpZHRoOjEwMCU7bWFyZ2luLWJvdHRvbToxZW19LnB1cmUtYnV0dG9ue2JhY2tncm91bmQtY29sb3I6IzFmOGRkNjtjb2xvcjojZmZmO3BhZGRpbmc6LjVlbSAyZW07Ym9yZGVyLXJhZGl1czo1cHh9YS5wdXJlLWJ1dHRvbi1wcmltYXJ5e2JhY2tncm91bmQ6I2ZmZjtjb2xvcjojMWY4ZGQ2O2JvcmRlci1yYWRpdXM6NXB4O2ZvbnQtc2l6ZToxMjAlfS5zcGxhc2gtY29udGFpbmVye2JhY2tncm91bmQ6IzFmOGRkNjt6LWluZGV4OjE7b3ZlcmZsb3c6aGlkZGVuO3dpZHRoOjEwMCU7aGVpZ2h0Ojg4JTt0b3A6MDtsZWZ0OjA7cG9zaXRpb246Zml4ZWQhaW1wb3J0YW50fS5zcGxhc2h7d2lkdGg6ODAlO2hlaWdodDo1MCU7bWFyZ2luOmF1dG87cG9zaXRpb246YWJzb2x1dGU7dG9wOjEwMHB4O2xlZnQ6MDtib3R0b206MDtyaWdodDowO3RleHQtYWxpZ246Y2VudGVyO3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZX0uc3BsYXNoLWhlYWR7Zm9udC1zaXplOjIwcHg7Y29sb3I6I2ZmZjtib3JkZXI6M3B4IHNvbGlkICNmZmY7cGFkZGluZzoxZW0gMS42ZW07Zm9udC13ZWlnaHQ6MTAwO2JvcmRlci1yYWRpdXM6NXB4O2xpbmUtaGVpZ2h0OjFlbX0uc3BsYXNoLXN1YmhlYWR7Y29sb3I6I2ZmZjtsZXR0ZXItc3BhY2luZzouMDVlbTtvcGFjaXR5Oi44fS5jb250ZW50LXdyYXBwZXJ7cG9zaXRpb246YWJzb2x1dGU7dG9wOjg3JTt3aWR0aDoxMDAlO21pbi1oZWlnaHQ6MTIlO3otaW5kZXg6MjtiYWNrZ3JvdW5kOiNmZmZ9LmNvbnRlbnQtaGVhZHtmb250LXdlaWdodDo0MDA7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO2xldHRlci1zcGFjaW5nOi4xZW07bWFyZ2luOjJlbSAwIDFlbX0uY29udGVudC1oZWFkLXJpYmJvbntjb2xvcjojZmZmfS5jb250ZW50LXN1YmhlYWR7Y29sb3I6IzFmOGRkNn0uY29udGVudC1zdWJoZWFkIGl7bWFyZ2luLXJpZ2h0OjdweH0ucmliYm9ue2JhY2tncm91bmQ6IzJkM2U1MDtjb2xvcjojYWFhfS5mb290ZXJ7YmFja2dyb3VuZDojMTExfUBtZWRpYSAobWluLXdpZHRoOjQ4ZW0pe2JvZHl7Zm9udC1zaXplOjE2cHh9LmNvbnRlbnR7cGFkZGluZzoxZW19LmNvbnRlbnQuc2xpZGUtY29udGFpbmVye3BhZGRpbmc6MH0uc3BsYXNoLWhlYWR7Zm9udC1zaXplOjI1MCV9LmwtYm94LWxyZ3tib3JkZXI6bm9uZX19QG1lZGlhIChtaW4td2lkdGg6NzhlbSl7LnNwbGFzaC1oZWFke2ZvbnQtc2l6ZTozMDAlfX1cIjsgKHJlcXVpcmUoXCJicm93c2VyaWZ5LWNzc1wiKS5jcmVhdGVTdHlsZShjc3MsIHsgXCJocmVmXCI6IFwiY2xpZW50L2FwcC5jc3NcIn0pKTsgbW9kdWxlLmV4cG9ydHMgPSBjc3M7IiwibW9kdWxlLmV4cG9ydHMgPSBcIjwhLS0gPGRpdiBpZD1cXFwiYXBwXFxcIj5cXG4gIDxwPlxcbiA8L3A+XFxuICA8cm91dGVyLXZpZXc+PC9yb3V0ZXItdmlldz5cXG4gIDxoMT5IZWxsbzwvaDE+XFxuICA8aDE+e3ttc2d9fTwvaDE+XFxuXFxuICA8Y29tcC1iPjwvY29tcC1iPlxcbiAgPGNvdW50ZXI+PC9jb3VudGVyPlxcbjwvZGl2PiAtLT5cXG48c3R5bGUgbGFuZz1cXFwic3R5bHVzXFxcIiBzcmM9XFxcIi4vYXBwLnN0eWxcXFwiPjwvc3R5bGU+XFxuPGRpdj5cXG4gIDxoZWFkZXItbmF2PjwvaGVhZGVyLW5hdj5cXG4gIDwhLS0gdXNlIHJvdXRlci12aWV3IGVsZW1lbnQgYXMgcm91dGUgb3V0bGV0IC0tPlxcbiAgPHJvdXRlci12aWV3Pjwvcm91dGVyLXZpZXc+XFxuPC9kaXY+XFxuXCI7XG4iLCIvLyBleHBvcnQgZGVmYXVsdCB7XG4vLyAgIGRhdGEgKCkge1xuLy8gICAgIHJldHVybiB7IGNvdW50OiAwIH1cbi8vICAgfSxcbi8vXG4vLyAgIHJlYWR5ICgpIHtcbi8vICAgICB0aGlzLmhhbmRsZSA9IHNldEludGVydmFsKCgpID0+IHtcbi8vICAgICAgIHRoaXMuY291bnQrK1xuLy8gICAgIH0sIDEwMDApXG4vLyAgIH0sXG4vL1xuLy8gICBkZXN0cm95ZWQgKCkge1xuLy8gICAgIGNsZWFySW50ZXJ2YWwodGhpcy5oYW5kbGUpXG4vLyAgIH1cbi8vIH1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHRlbXBsYXRlOiByZXF1aXJlKCcuL3RlbXBsYXRlLmh0bWwnKVxufVxuXG5jb25zb2xlLmxvZygnaGVsbG8gZnJvbSAnKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2PlxcbiAgPHA+SSBhbSBhIENvdW50ZXIgQ29tcG9uZW50LiBFZGl0IG1lIGluIGRldiBtb2RlLjwvcD5cXG4gIDxwIGNsYXNzPVxcXCJjb3VudFxcXCI+Q3VycmVudCBjb3VudDoge3tjb3VudH19PC9wPlxcbjwvZGl2PlxcblwiO1xuIiwiXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZGF0YTogZnVuY3Rpb24gKCkge1xuICAgIHJldHVyblxuICAgICAgbXNnOiAnSGVsbG8gZnJvbSBDb21wb25lbnQgQUFBISdcbiAgfSxcbiAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vdGVtcGxhdGUuaHRtbCcpXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImZvb3RlciBsLWJveCBpcy1jZW50ZXJcXFwiPlxcbiAgICBUaGlzIGlzIHRoZSBmb290ZXJcXG48L2Rpdj5cXG5cIjtcbiIsIlxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGRhdGE6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm5cbiAgICAgIG1zZzogJ0hlbGxvIGZyb20gQ29tcG9uZW50IEhvbWUhJ1xuICB9LFxuICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi90ZW1wbGF0ZS5odG1sJylcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiaG9tZS1tZW51IHB1cmUtbWVudSBwdXJlLW1lbnUtaG9yaXpvbnRhbCBwdXJlLW1lbnUtZml4ZWRcXFwiPlxcbiAgICAgICAgPGEgY2xhc3M9XFxcInB1cmUtbWVudS1oZWFkaW5nXFxcIiB2LWxpbms9XFxcInsgcGF0aDogJy8nIH1cXFwiPlZ1ZSBTaXRlPC9hPlxcblxcbiAgICAgICAgPHVsIGNsYXNzPVxcXCJwdXJlLW1lbnUtbGlzdFxcXCI+XFxuICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJwdXJlLW1lbnUtaXRlbSBwdXJlLW1lbnUtc2VsZWN0ZWRcXFwiPjxhIHYtbGluaz1cXFwieyBwYXRoOiAnLycgfVxcXCIgY2xhc3M9XFxcInB1cmUtbWVudS1saW5rXFxcIj5Ib21lPC9hPjwvbGk+XFxuICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJwdXJlLW1lbnUtaXRlbVxcXCI+PGEgdi1saW5rPVxcXCJ7IHBhdGg6ICcvY29sbGVjdGlvbicgfVxcXCIgY2xhc3M9XFxcInB1cmUtbWVudS1saW5rXFxcIj5Db2xsZWN0aW9uPC9hPjwvbGk+XFxuICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJwdXJlLW1lbnUtaXRlbVxcXCI+PGEgdi1saW5rPVxcXCJ7IHBhdGg6ICcvYWJvdXQnIH1cXFwiIGNsYXNzPVxcXCJwdXJlLW1lbnUtbGlua1xcXCI+QWJvdXQ8L2E+PC9saT5cXG4gICAgICAgICAgICA8IS0tIDxsaSBjbGFzcz1cXFwicHVyZS1tZW51LWl0ZW1cXFwiPjxhIGhyZWY9XFxcIiNcXFwiIGNsYXNzPVxcXCJwdXJlLW1lbnUtbGlua1xcXCI+U2lnbiBVcDwvYT48L2xpPiAtLT5cXG4gICAgICAgIDwvdWw+XFxuICAgIDwvZGl2PlxcblwiO1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIHRlbXBsYXRlOiAnPGRpdj5UaGlzIGlzIEFib3V0PC9kaXY+J1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIHRlbXBsYXRlOiByZXF1aXJlKCcuL3RlbXBsYXRlLmh0bWwnKSxcbiAgY29tcG9uZW50czoge1xuXG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJjb250ZW50IHNsaWRlLWNvbnRhaW5lclxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcIlxcXCI+XFxuICAgICAgICA8IS0tIDxoMSBjbGFzcz1cXFwic3BsYXNoLWhlYWRcXFwiPkJpZyBCb2xkIFRleHQ8L2gxPlxcbiAgICAgICAgPHAgY2xhc3M9XFxcInNwbGFzaC1zdWJoZWFkXFxcIj5cXG4gICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC5cXG4gICAgICAgIDwvcD5cXG4gICAgICAgIDxwPlxcbiAgICAgICAgICAgIDxhIGhyZWY9XFxcImh0dHA6Ly9wdXJlY3NzLmlvXFxcIiBjbGFzcz1cXFwicHVyZS1idXR0b24gcHVyZS1idXR0b24tcHJpbWFyeVxcXCI+R2V0IFN0YXJ0ZWQ8L2E+XFxuICAgICAgICA8L3A+IC0tPlxcblxcbiAgICAgICAgPHVsIGNsYXNzPVxcXCJzbGlkZXNcXFwiPlxcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwicmFkaW9cXFwiIG5hbWU9XFxcInJhZGlvLWJ0blxcXCIgaWQ9XFxcImltZy0xXFxcIiBjaGVja2VkIC8+XFxuICAgICAgICAgIDxsaSBjbGFzcz1cXFwic2xpZGUtY29udGFpbmVyXFxcIj5cXG4gICAgICBcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJzbGlkZVxcXCI+XFxuICAgICAgXFx0XFx0XFx0PGltZyBzcmM9XFxcImh0dHA6Ly9yZXMuY2xvdWRpbmFyeS5jb20vamVmZS1pby9pbWFnZS91cGxvYWQvdjE0NDM2MTUxMDkvNTE5MzY3Mjk2NV83MjM5MTZkYTBhX2JfanN6aHMzLmpwZ1xcXCIgLz5cXG4gICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgIFxcdFxcdDxkaXYgY2xhc3M9XFxcIm5hdlxcXCI+XFxuICAgICAgXFx0XFx0XFx0PGxhYmVsIGZvcj1cXFwiaW1nLTZcXFwiIGNsYXNzPVxcXCJwcmV2XFxcIj4mI3gyMDM5OzwvbGFiZWw+XFxuICAgICAgXFx0XFx0XFx0PGxhYmVsIGZvcj1cXFwiaW1nLTJcXFwiIGNsYXNzPVxcXCJuZXh0XFxcIj4mI3gyMDNhOzwvbGFiZWw+XFxuICAgICAgXFx0XFx0PC9kaXY+XFxuICAgICAgICAgIDwvbGk+XFxuXFxuICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJyYWRpb1xcXCIgbmFtZT1cXFwicmFkaW8tYnRuXFxcIiBpZD1cXFwiaW1nLTJcXFwiIC8+XFxuICAgICAgICAgIDxsaSBjbGFzcz1cXFwic2xpZGUtY29udGFpbmVyXFxcIj5cXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNsaWRlXFxcIj5cXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XFxcImh0dHA6Ly9yZXMuY2xvdWRpbmFyeS5jb20vamVmZS1pby9pbWFnZS91cGxvYWQvdjE0NDM2MTUxMDkvNTE5MzY3Mjk2NV83MjM5MTZkYTBhX2JfanN6aHMzLmpwZ1xcXCIgLz5cXG4gICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgIFxcdFxcdDxkaXYgY2xhc3M9XFxcIm5hdlxcXCI+XFxuICAgICAgXFx0XFx0XFx0PGxhYmVsIGZvcj1cXFwiaW1nLTFcXFwiIGNsYXNzPVxcXCJwcmV2XFxcIj4mI3gyMDM5OzwvbGFiZWw+XFxuICAgICAgXFx0XFx0XFx0PGxhYmVsIGZvcj1cXFwiaW1nLTNcXFwiIGNsYXNzPVxcXCJuZXh0XFxcIj4mI3gyMDNhOzwvbGFiZWw+XFxuICAgICAgXFx0XFx0PC9kaXY+XFxuICAgICAgICAgIDwvbGk+XFxuXFxuICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJyYWRpb1xcXCIgbmFtZT1cXFwicmFkaW8tYnRuXFxcIiBpZD1cXFwiaW1nLTNcXFwiIC8+XFxuICAgICAgICAgIDxsaSBjbGFzcz1cXFwic2xpZGUtY29udGFpbmVyXFxcIj5cXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNsaWRlXFxcIj5cXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XFxcImh0dHA6Ly9mYXJtOS5zdGF0aWNmbGlja3IuY29tLzgwNjgvODI1MDQzODU3Ml9kMWE1OTE3MDcyX3ouanBnXFxcIiAvPlxcbiAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgXFx0XFx0PGRpdiBjbGFzcz1cXFwibmF2XFxcIj5cXG4gICAgICBcXHRcXHRcXHQ8bGFiZWwgZm9yPVxcXCJpbWctMlxcXCIgY2xhc3M9XFxcInByZXZcXFwiPiYjeDIwMzk7PC9sYWJlbD5cXG4gICAgICBcXHRcXHRcXHQ8bGFiZWwgZm9yPVxcXCJpbWctNFxcXCIgY2xhc3M9XFxcIm5leHRcXFwiPiYjeDIwM2E7PC9sYWJlbD5cXG4gICAgICBcXHRcXHQ8L2Rpdj5cXG4gICAgICAgICAgPC9saT5cXG5cXG4gICAgICAgICAgPGlucHV0IHR5cGU9XFxcInJhZGlvXFxcIiBuYW1lPVxcXCJyYWRpby1idG5cXFwiIGlkPVxcXCJpbWctNFxcXCIgLz5cXG4gICAgICAgICAgPGxpIGNsYXNzPVxcXCJzbGlkZS1jb250YWluZXJcXFwiPlxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic2xpZGVcXFwiPlxcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cXFwiaHR0cDovL2Zhcm05LnN0YXRpY2ZsaWNrci5jb20vODA2MS84MjM3MjQ2ODMzXzU0ZDhmYTM3ZjBfei5qcGdcXFwiIC8+XFxuICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICBcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJuYXZcXFwiPlxcbiAgICAgIFxcdFxcdFxcdDxsYWJlbCBmb3I9XFxcImltZy0zXFxcIiBjbGFzcz1cXFwicHJldlxcXCI+JiN4MjAzOTs8L2xhYmVsPlxcbiAgICAgIFxcdFxcdFxcdDxsYWJlbCBmb3I9XFxcImltZy01XFxcIiBjbGFzcz1cXFwibmV4dFxcXCI+JiN4MjAzYTs8L2xhYmVsPlxcbiAgICAgIFxcdFxcdDwvZGl2PlxcbiAgICAgICAgICA8L2xpPlxcblxcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwicmFkaW9cXFwiIG5hbWU9XFxcInJhZGlvLWJ0blxcXCIgaWQ9XFxcImltZy01XFxcIiAvPlxcbiAgICAgICAgICA8bGkgY2xhc3M9XFxcInNsaWRlLWNvbnRhaW5lclxcXCI+XFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzbGlkZVxcXCI+XFxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVxcXCJodHRwOi8vZmFybTkuc3RhdGljZmxpY2tyLmNvbS84MDU1LzgwOTg3NTA2MjNfNjYyOTJhMzVjMF96LmpwZ1xcXCIgLz5cXG4gICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgIFxcdFxcdDxkaXYgY2xhc3M9XFxcIm5hdlxcXCI+XFxuICAgICAgXFx0XFx0XFx0PGxhYmVsIGZvcj1cXFwiaW1nLTRcXFwiIGNsYXNzPVxcXCJwcmV2XFxcIj4mI3gyMDM5OzwvbGFiZWw+XFxuICAgICAgXFx0XFx0XFx0PGxhYmVsIGZvcj1cXFwiaW1nLTZcXFwiIGNsYXNzPVxcXCJuZXh0XFxcIj4mI3gyMDNhOzwvbGFiZWw+XFxuICAgICAgXFx0XFx0PC9kaXY+XFxuICAgICAgICAgIDwvbGk+XFxuXFxuICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJyYWRpb1xcXCIgbmFtZT1cXFwicmFkaW8tYnRuXFxcIiBpZD1cXFwiaW1nLTZcXFwiIC8+XFxuICAgICAgICAgIDxsaSBjbGFzcz1cXFwic2xpZGUtY29udGFpbmVyXFxcIj5cXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNsaWRlXFxcIj5cXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XFxcImh0dHA6Ly9mYXJtOS5zdGF0aWNmbGlja3IuY29tLzgxOTUvODA5ODc1MDcwM183OTdlMTAyZGEyX3ouanBnXFxcIiAvPlxcbiAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgXFx0XFx0PGRpdiBjbGFzcz1cXFwibmF2XFxcIj5cXG4gICAgICBcXHRcXHRcXHQ8bGFiZWwgZm9yPVxcXCJpbWctNVxcXCIgY2xhc3M9XFxcInByZXZcXFwiPiYjeDIwMzk7PC9sYWJlbD5cXG4gICAgICBcXHRcXHRcXHQ8bGFiZWwgZm9yPVxcXCJpbWctMVxcXCIgY2xhc3M9XFxcIm5leHRcXFwiPiYjeDIwM2E7PC9sYWJlbD5cXG4gICAgICBcXHRcXHQ8L2Rpdj5cXG4gICAgICAgICAgPC9saT5cXG5cXG4gICAgICAgICAgPGxpIGNsYXNzPVxcXCJuYXYtZG90c1xcXCI+XFxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwiaW1nLTFcXFwiIGNsYXNzPVxcXCJuYXYtZG90XFxcIiBpZD1cXFwiaW1nLWRvdC0xXFxcIj48L2xhYmVsPlxcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcImltZy0yXFxcIiBjbGFzcz1cXFwibmF2LWRvdFxcXCIgaWQ9XFxcImltZy1kb3QtMlxcXCI+PC9sYWJlbD5cXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJpbWctM1xcXCIgY2xhc3M9XFxcIm5hdi1kb3RcXFwiIGlkPVxcXCJpbWctZG90LTNcXFwiPjwvbGFiZWw+XFxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwiaW1nLTRcXFwiIGNsYXNzPVxcXCJuYXYtZG90XFxcIiBpZD1cXFwiaW1nLWRvdC00XFxcIj48L2xhYmVsPlxcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcImltZy01XFxcIiBjbGFzcz1cXFwibmF2LWRvdFxcXCIgaWQ9XFxcImltZy1kb3QtNVxcXCI+PC9sYWJlbD5cXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJpbWctNlxcXCIgY2xhc3M9XFxcIm5hdi1kb3RcXFwiIGlkPVxcXCJpbWctZG90LTZcXFwiPjwvbGFiZWw+XFxuICAgICAgICAgIDwvbGk+XFxuICAgICAgPC91bD5cXG5cXG4gICAgPC9kaXY+XFxuPC9kaXY+XFxuXCI7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiY29udGVudFxcXCI+XFxuICAgIDxoMiBjbGFzcz1cXFwiY29udGVudC1oZWFkIGlzLWNlbnRlclxcXCI+RXhjZXB0ZXVyIHNpbnQgb2NjYWVjYXQgY3VwaWRhdGF0LjwvaDI+XFxuXFxuICAgIDxkaXYgY2xhc3M9XFxcInB1cmUtZ1xcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJsLWJveCBwdXJlLXUtMSBwdXJlLXUtbWQtMS0yIHB1cmUtdS1sZy0xLTRcXFwiPlxcblxcbiAgICAgICAgICAgIDxoMyBjbGFzcz1cXFwiY29udGVudC1zdWJoZWFkXFxcIj5cXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLXJvY2tldFxcXCI+PC9pPlxcbiAgICAgICAgICAgICAgICBHZXQgU3RhcnRlZCBRdWlja2x5XFxuICAgICAgICAgICAgPC9oMz5cXG4gICAgICAgICAgICA8cD5cXG4gICAgICAgICAgICAgICAgUGhhc2VsbHVzIGVnZXQgZW5pbSBldSBsZWN0dXMgZmF1Y2lidXMgdmVzdGlidWx1bS4gU3VzcGVuZGlzc2Ugc29kYWxlcyBwZWxsZW50ZXNxdWUgZWxlbWVudHVtLlxcbiAgICAgICAgICAgIDwvcD5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibC1ib3ggcHVyZS11LTEgcHVyZS11LW1kLTEtMiBwdXJlLXUtbGctMS00XFxcIj5cXG4gICAgICAgICAgICA8aDMgY2xhc3M9XFxcImNvbnRlbnQtc3ViaGVhZFxcXCI+XFxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1tb2JpbGVcXFwiPjwvaT5cXG4gICAgICAgICAgICAgICAgUmVzcG9uc2l2ZSBMYXlvdXRzXFxuICAgICAgICAgICAgPC9oMz5cXG4gICAgICAgICAgICA8cD5cXG4gICAgICAgICAgICAgICAgUGhhc2VsbHVzIGVnZXQgZW5pbSBldSBsZWN0dXMgZmF1Y2lidXMgdmVzdGlidWx1bS4gU3VzcGVuZGlzc2Ugc29kYWxlcyBwZWxsZW50ZXNxdWUgZWxlbWVudHVtLlxcbiAgICAgICAgICAgIDwvcD5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibC1ib3ggcHVyZS11LTEgcHVyZS11LW1kLTEtMiBwdXJlLXUtbGctMS00XFxcIj5cXG4gICAgICAgICAgICA8aDMgY2xhc3M9XFxcImNvbnRlbnQtc3ViaGVhZFxcXCI+XFxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS10aC1sYXJnZVxcXCI+PC9pPlxcbiAgICAgICAgICAgICAgICBNb2R1bGFyXFxuICAgICAgICAgICAgPC9oMz5cXG4gICAgICAgICAgICA8cD5cXG4gICAgICAgICAgICAgICAgUGhhc2VsbHVzIGVnZXQgZW5pbSBldSBsZWN0dXMgZmF1Y2lidXMgdmVzdGlidWx1bS4gU3VzcGVuZGlzc2Ugc29kYWxlcyBwZWxsZW50ZXNxdWUgZWxlbWVudHVtLlxcbiAgICAgICAgICAgIDwvcD5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibC1ib3ggcHVyZS11LTEgcHVyZS11LW1kLTEtMiBwdXJlLXUtbGctMS00XFxcIj5cXG4gICAgICAgICAgICA8aDMgY2xhc3M9XFxcImNvbnRlbnQtc3ViaGVhZFxcXCI+XFxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1jaGVjay1zcXVhcmUtb1xcXCI+PC9pPlxcbiAgICAgICAgICAgICAgICBQbGF5cyBOaWNlXFxuICAgICAgICAgICAgPC9oMz5cXG4gICAgICAgICAgICA8cD5cXG4gICAgICAgICAgICAgICAgUGhhc2VsbHVzIGVnZXQgZW5pbSBldSBsZWN0dXMgZmF1Y2lidXMgdmVzdGlidWx1bS4gU3VzcGVuZGlzc2Ugc29kYWxlcyBwZWxsZW50ZXNxdWUgZWxlbWVudHVtLlxcbiAgICAgICAgICAgIDwvcD5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG48L2Rpdj5cXG5cIjtcbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJyaWJib24gbC1ib3gtbHJnIHB1cmUtZ1xcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImwtYm94LWxyZyBpcy1jZW50ZXIgcHVyZS11LTEgcHVyZS11LW1kLTEtMiBwdXJlLXUtbGctMi01XFxcIj5cXG5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcInB1cmUtdS0xIHB1cmUtdS1tZC0xLTIgcHVyZS11LWxnLTMtNVxcXCI+XFxuXFxuICAgICAgICA8aDIgY2xhc3M9XFxcImNvbnRlbnQtaGVhZCBjb250ZW50LWhlYWQtcmliYm9uXFxcIj5MYWJvcmlzIG5pc2kgdXQgYWxpcXVpcC48L2gyPlxcblxcbiAgICAgICAgPHA+XFxuICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kXFxuICAgICAgICAgICAgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgbWluaW0gdmVuaWFtLFxcbiAgICAgICAgICAgIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvXFxuICAgICAgICAgICAgY29uc2VxdWF0LiBEdWlzIGF1dGUgaXJ1cmUgZG9sb3IuXFxuICAgICAgICA8L3A+XFxuICAgIDwvZGl2PlxcbjwvZGl2PlxcblwiO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImNvbnRlbnRcXFwiPlxcbiAgICA8aDIgY2xhc3M9XFxcImNvbnRlbnQtaGVhZCBpcy1jZW50ZXJcXFwiPkRvbG9yZSBtYWduYSBhbGlxdWEuIFVpcyBhdXRlIGlydXJlLjwvaDI+XFxuXFxuICAgIDxkaXYgY2xhc3M9XFxcInB1cmUtZ1xcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJsLWJveC1scmcgcHVyZS11LTEgcHVyZS11LW1kLTItNVxcXCI+XFxuICAgICAgICAgICAgPGZvcm0gY2xhc3M9XFxcInB1cmUtZm9ybSBwdXJlLWZvcm0tc3RhY2tlZFxcXCI+XFxuICAgICAgICAgICAgICAgIDxmaWVsZHNldD5cXG5cXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcIm5hbWVcXFwiPllvdXIgTmFtZTwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XFxcIm5hbWVcXFwiIHR5cGU9XFxcInRleHRcXFwiIHBsYWNlaG9sZGVyPVxcXCJZb3VyIE5hbWVcXFwiPlxcblxcblxcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwiZW1haWxcXFwiPllvdXIgRW1haWw8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVxcXCJlbWFpbFxcXCIgdHlwZT1cXFwiZW1haWxcXFwiIHBsYWNlaG9sZGVyPVxcXCJZb3VyIEVtYWlsXFxcIj5cXG5cXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcInBhc3N3b3JkXFxcIj5Zb3VyIFBhc3N3b3JkPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cXFwicGFzc3dvcmRcXFwiIHR5cGU9XFxcInBhc3N3b3JkXFxcIiBwbGFjZWhvbGRlcj1cXFwiWW91ciBQYXNzd29yZFxcXCI+XFxuXFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgY2xhc3M9XFxcInB1cmUtYnV0dG9uXFxcIj5TaWduIFVwPC9idXR0b24+XFxuICAgICAgICAgICAgICAgIDwvZmllbGRzZXQ+XFxuICAgICAgICAgICAgPC9mb3JtPlxcbiAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJsLWJveC1scmcgcHVyZS11LTEgcHVyZS11LW1kLTMtNVxcXCI+XFxuICAgICAgICAgICAgPGg0PkNvbnRhY3QgVXM8L2g0PlxcbiAgICAgICAgICAgIDxwPlxcbiAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2RcXG4gICAgICAgICAgICAgICAgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgbWluaW0gdmVuaWFtLFxcbiAgICAgICAgICAgICAgICBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3JpcyBuaXNpIHV0IGFsaXF1aXAgZXggZWEgY29tbW9kb1xcbiAgICAgICAgICAgICAgICBjb25zZXF1YXQuXFxuICAgICAgICAgICAgPC9wPlxcblxcbiAgICAgICAgICAgIDxoND5Nb3JlIEluZm9ybWF0aW9uPC9oND5cXG4gICAgICAgICAgICA8cD5cXG4gICAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kXFxuICAgICAgICAgICAgICAgIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLlxcbiAgICAgICAgICAgIDwvcD5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG5cXG48L2Rpdj5cXG5cIjtcbiIsImltcG9ydCBDb3VudGVyIGZyb20gJy4uLy4uL2NvdW50ZXIvaW5kZXguanMnXG5pbXBvcnQgU3BsYXNoIGZyb20gJy4vZWxlbWVudHMvMV9zcGxhc2gvaW5kZXguanMnXG5pbXBvcnQgU3ViaGVhZDEgZnJvbSAnLi9lbGVtZW50cy8yX3N1YmhlYWRfMS9pbmRleC5qcydcbmltcG9ydCBTdWJoZWFkMiBmcm9tICcuL2VsZW1lbnRzLzNfc3ViaGVhZF8yL2luZGV4LmpzJ1xuaW1wb3J0IEJveDEgZnJvbSAnLi9lbGVtZW50cy80X2JveF8xL2luZGV4LmpzJ1xuXG5pbXBvcnQgRm9vdGVyTmF2IGZyb20gJy4uLy4uL2xheW91dHMvZm9vdGVyLW5hdi9pbmRleC5qcydcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHRlbXBsYXRlOiByZXF1aXJlKCcuL3RlbXBsYXRlLmh0bWwnKSxcbiAgY29tcG9uZW50czoge1xuICAgIFNwbGFzaCxcbiAgICBTdWJoZWFkMSxcbiAgICBTdWJoZWFkMixcbiAgICBCb3gxLFxuICAgIEZvb3Rlck5hdlxuICAgIC8vIENvdW50ZXJcbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIlxcbjxzcGxhc2g+PC9zcGxhc2g+XFxuXFxuPGRpdiBjbGFzcz1cXFwiY29udGVudC13cmFwcGVyXFxcIj5cXG4gIDxzdWJoZWFkMT48L3N1YmhlYWQxPlxcbiAgPHN1YmhlYWQyPjwvc3ViaGVhZDI+XFxuICA8Ym94MT48L2JveDE+XFxuICA8Zm9vdGVyLW5hdj48L2Zvb3Rlci1uYXY+XFxuPC9kaXY+XFxuPCEtLSA8Y291bnRlcj48L2NvdW50ZXI+IC0tPlxcblwiO1xuIiwidmFyIFZ1ZSA9IHJlcXVpcmUoJ3Z1ZScpXG52YXIgY3NzID0gcmVxdWlyZSgnLi9hcHAuY3NzJylcblxuaW1wb3J0IEhlYWRlck5hdiBmcm9tICcuL2NvbXBvbmVudHMvbGF5b3V0cy9oZWFkZXItbmF2L2luZGV4LmpzJ1xuaW1wb3J0IEhvbWUgZnJvbSAnLi9jb21wb25lbnRzL3BhZ2VzL2hvbWUvaW5kZXguanMnXG5pbXBvcnQgQWJvdXQgZnJvbSAnLi9jb21wb25lbnRzL3BhZ2VzL2Fib3V0L2luZGV4LmpzJ1xuLy8gLy8gdmFyIEFwcCA9IHJlcXVpcmUoJy4vYXBwLmpzJylcbnZhciBWdWVSb3V0ZXIgPSByZXF1aXJlKCd2dWUtcm91dGVyJylcblxuLy8gUmVnaXN0ZXJpbmcgbWlkZGxld2FyZVxuVnVlLnVzZShWdWVSb3V0ZXIpXG5cbi8vIGJvb3RzdHJhcHBpbmcgdGhlIGluc3RhbmNlXG52YXIgQXBwID0gVnVlLmV4dGVuZCh7XG4gIGNvbXBvbmVudHM6IHtcbiAgICBIZWFkZXJOYXZcbiAgfSxcbiAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vYXBwLmh0bWwnKVxufSlcbi8vIEVuZCBvZiBzZXR0aW5nIHVwIHZ1ZVxuXG4vLyBSb3V0aW5nIGJlbG93Li4uXG52YXIgb3B0aW9ucyA9IHtcbiAgaGFzaGJhbmc6IGZhbHNlXG59XG5cbnZhciByb3V0ZXIgPSBuZXcgVnVlUm91dGVyKHtcbiAgaGFzaGJhbmc6IHRydWVcbn0pXG5cbnJvdXRlci5tYXAoe1xuICAgICcvJzoge1xuICAgICAgY29tcG9uZW50OiBIb21lXG4gICAgfSxcbiAgICAnL2Fib3V0Jzoge1xuICAgICAgY29tcG9uZW50OiBBYm91dFxuICAgIH1cbn0pXG5cbnJvdXRlci5zdGFydChBcHAsICcjYXBwJylcbi8vIEVuZCBvZiByb3V0aW5nXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2NyZWF0ZVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZnJlZXplXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9rZXlzXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn07XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn07XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiJ3VzZSBzdHJpY3QnO1xuLy8gRm9yIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgYnJvd3NlciBmaWVsZCwgY2hlY2sgb3V0IHRoZSBicm93c2VyIGZpZWxkIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9zdWJzdGFjay9icm93c2VyaWZ5LWhhbmRib29rI2Jyb3dzZXItZmllbGQuXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIC8vIENyZWF0ZSBhIDxsaW5rPiB0YWcgd2l0aCBvcHRpb25hbCBkYXRhIGF0dHJpYnV0ZXNcbiAgICBjcmVhdGVMaW5rOiBmdW5jdGlvbihocmVmLCBhdHRyaWJ1dGVzKSB7XG4gICAgICAgIHZhciBoZWFkID0gZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdO1xuICAgICAgICB2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcblxuICAgICAgICBsaW5rLmhyZWYgPSBocmVmO1xuICAgICAgICBsaW5rLnJlbCA9ICdzdHlsZXNoZWV0JztcblxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gYXR0cmlidXRlcykge1xuICAgICAgICAgICAgaWYgKCAhIGF0dHJpYnV0ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHZhbHVlID0gYXR0cmlidXRlc1trZXldO1xuICAgICAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoJ2RhdGEtJyArIGtleSwgdmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaGVhZC5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICB9LFxuICAgIC8vIENyZWF0ZSBhIDxzdHlsZT4gdGFnIHdpdGggb3B0aW9uYWwgZGF0YSBhdHRyaWJ1dGVzXG4gICAgY3JlYXRlU3R5bGU6IGZ1bmN0aW9uKGNzc1RleHQsIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgdmFyIGhlYWQgPSBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0sXG4gICAgICAgICAgICBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG5cbiAgICAgICAgc3R5bGUudHlwZSA9ICd0ZXh0L2Nzcyc7XG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICAgIGlmICggISBhdHRyaWJ1dGVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGF0dHJpYnV0ZXNba2V5XTtcbiAgICAgICAgICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnZGF0YS0nICsga2V5LCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmIChzdHlsZS5zaGVldCkgeyAvLyBmb3IganNkb20gYW5kIElFOStcbiAgICAgICAgICAgIHN0eWxlLmlubmVySFRNTCA9IGNzc1RleHQ7XG4gICAgICAgICAgICBzdHlsZS5zaGVldC5jc3NUZXh0ID0gY3NzVGV4dDtcbiAgICAgICAgICAgIGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICAgICAgICB9IGVsc2UgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHsgLy8gZm9yIElFOCBhbmQgYmVsb3dcbiAgICAgICAgICAgIGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICAgICAgICAgICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzVGV4dDtcbiAgICAgICAgfSBlbHNlIHsgLy8gZm9yIENocm9tZSwgRmlyZWZveCwgYW5kIFNhZmFyaVxuICAgICAgICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzVGV4dCkpO1xuICAgICAgICAgICAgaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuIiwidmFyICQgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzLyQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3JlYXRlKFAsIEQpe1xuICByZXR1cm4gJC5jcmVhdGUoUCwgRCk7XG59OyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5mcmVlemUnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy8kLmNvcmUnKS5PYmplY3QuZnJlZXplOyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvJC5jb3JlJykuT2JqZWN0LmtleXM7IiwidmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHt2ZXJzaW9uOiAnMS4yLjUnfTtcbmlmKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZiIsInZhciBnbG9iYWwgICAgPSByZXF1aXJlKCcuLyQuZ2xvYmFsJylcbiAgLCBjb3JlICAgICAgPSByZXF1aXJlKCcuLyQuY29yZScpXG4gICwgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG52YXIgY3R4ID0gZnVuY3Rpb24oZm4sIHRoYXQpe1xuICByZXR1cm4gZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG52YXIgJGRlZiA9IGZ1bmN0aW9uKHR5cGUsIG5hbWUsIHNvdXJjZSl7XG4gIHZhciBrZXksIG93biwgb3V0LCBleHBcbiAgICAsIGlzR2xvYmFsID0gdHlwZSAmICRkZWYuR1xuICAgICwgaXNQcm90byAgPSB0eXBlICYgJGRlZi5QXG4gICAgLCB0YXJnZXQgICA9IGlzR2xvYmFsID8gZ2xvYmFsIDogdHlwZSAmICRkZWYuU1xuICAgICAgICA/IGdsb2JhbFtuYW1lXSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV1cbiAgICAsIGV4cG9ydHMgID0gaXNHbG9iYWwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KTtcbiAgaWYoaXNHbG9iYWwpc291cmNlID0gbmFtZTtcbiAgZm9yKGtleSBpbiBzb3VyY2Upe1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICEodHlwZSAmICRkZWYuRikgJiYgdGFyZ2V0ICYmIGtleSBpbiB0YXJnZXQ7XG4gICAgaWYob3duICYmIGtleSBpbiBleHBvcnRzKWNvbnRpbnVlO1xuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXG4gICAgb3V0ID0gb3duID8gdGFyZ2V0W2tleV0gOiBzb3VyY2Vba2V5XTtcbiAgICAvLyBwcmV2ZW50IGdsb2JhbCBwb2xsdXRpb24gZm9yIG5hbWVzcGFjZXNcbiAgICBpZihpc0dsb2JhbCAmJiB0eXBlb2YgdGFyZ2V0W2tleV0gIT0gJ2Z1bmN0aW9uJylleHAgPSBzb3VyY2Vba2V5XTtcbiAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuICAgIGVsc2UgaWYodHlwZSAmICRkZWYuQiAmJiBvd24pZXhwID0gY3R4KG91dCwgZ2xvYmFsKTtcbiAgICAvLyB3cmFwIGdsb2JhbCBjb25zdHJ1Y3RvcnMgZm9yIHByZXZlbnQgY2hhbmdlIHRoZW0gaW4gbGlicmFyeVxuICAgIGVsc2UgaWYodHlwZSAmICRkZWYuVyAmJiB0YXJnZXRba2V5XSA9PSBvdXQpIWZ1bmN0aW9uKEMpe1xuICAgICAgZXhwID0gZnVuY3Rpb24ocGFyYW0pe1xuICAgICAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIEMgPyBuZXcgQyhwYXJhbSkgOiBDKHBhcmFtKTtcbiAgICAgIH07XG4gICAgICBleHBbUFJPVE9UWVBFXSA9IENbUFJPVE9UWVBFXTtcbiAgICB9KG91dCk7XG4gICAgZWxzZSBleHAgPSBpc1Byb3RvICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIC8vIGV4cG9ydFxuICAgIGV4cG9ydHNba2V5XSA9IGV4cDtcbiAgICBpZihpc1Byb3RvKShleHBvcnRzW1BST1RPVFlQRV0gfHwgKGV4cG9ydHNbUFJPVE9UWVBFXSA9IHt9KSlba2V5XSA9IG91dDtcbiAgfVxufTtcbi8vIHR5cGUgYml0bWFwXG4kZGVmLkYgPSAxOyAgLy8gZm9yY2VkXG4kZGVmLkcgPSAyOyAgLy8gZ2xvYmFsXG4kZGVmLlMgPSA0OyAgLy8gc3RhdGljXG4kZGVmLlAgPSA4OyAgLy8gcHJvdG9cbiRkZWYuQiA9IDE2OyAvLyBiaW5kXG4kZGVmLlcgPSAzMjsgLy8gd3JhcFxubW9kdWxlLmV4cG9ydHMgPSAkZGVmOyIsIi8vIDcuMi4xIFJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoaXQgPT0gdW5kZWZpbmVkKXRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGV4ZWMpe1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTsiLCIvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxudmFyIGdsb2JhbCA9IG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PSBNYXRoXG4gID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbmlmKHR5cGVvZiBfX2cgPT0gJ251bWJlcicpX19nID0gZ2xvYmFsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59OyIsInZhciAkT2JqZWN0ID0gT2JqZWN0O1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNyZWF0ZTogICAgICRPYmplY3QuY3JlYXRlLFxuICBnZXRQcm90bzogICAkT2JqZWN0LmdldFByb3RvdHlwZU9mLFxuICBpc0VudW06ICAgICB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZSxcbiAgZ2V0RGVzYzogICAgJE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IsXG4gIHNldERlc2M6ICAgICRPYmplY3QuZGVmaW5lUHJvcGVydHksXG4gIHNldERlc2NzOiAgICRPYmplY3QuZGVmaW5lUHJvcGVydGllcyxcbiAgZ2V0S2V5czogICAgJE9iamVjdC5rZXlzLFxuICBnZXROYW1lczogICAkT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMsXG4gIGdldFN5bWJvbHM6ICRPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzLFxuICBlYWNoOiAgICAgICBbXS5mb3JFYWNoXG59OyIsIi8vIG1vc3QgT2JqZWN0IG1ldGhvZHMgYnkgRVM2IHNob3VsZCBhY2NlcHQgcHJpbWl0aXZlc1xudmFyICRkZWYgID0gcmVxdWlyZSgnLi8kLmRlZicpXG4gICwgY29yZSAgPSByZXF1aXJlKCcuLyQuY29yZScpXG4gICwgZmFpbHMgPSByZXF1aXJlKCcuLyQuZmFpbHMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oS0VZLCBleGVjKXtcbiAgdmFyICRkZWYgPSByZXF1aXJlKCcuLyQuZGVmJylcbiAgICAsIGZuICAgPSAoY29yZS5PYmplY3QgfHwge30pW0tFWV0gfHwgT2JqZWN0W0tFWV1cbiAgICAsIGV4cCAgPSB7fTtcbiAgZXhwW0tFWV0gPSBleGVjKGZuKTtcbiAgJGRlZigkZGVmLlMgKyAkZGVmLkYgKiBmYWlscyhmdW5jdGlvbigpeyBmbigxKTsgfSksICdPYmplY3QnLCBleHApO1xufTsiLCIvLyA3LjEuMTMgVG9PYmplY3QoYXJndW1lbnQpXG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vJC5kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIE9iamVjdChkZWZpbmVkKGl0KSk7XG59OyIsIi8vIDE5LjEuMi41IE9iamVjdC5mcmVlemUoTylcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vJC5pcy1vYmplY3QnKTtcblxucmVxdWlyZSgnLi8kLm9iamVjdC1zYXAnKSgnZnJlZXplJywgZnVuY3Rpb24oJGZyZWV6ZSl7XG4gIHJldHVybiBmdW5jdGlvbiBmcmVlemUoaXQpe1xuICAgIHJldHVybiAkZnJlZXplICYmIGlzT2JqZWN0KGl0KSA/ICRmcmVlemUoaXQpIDogaXQ7XG4gIH07XG59KTsiLCIvLyAxOS4xLjIuMTQgT2JqZWN0LmtleXMoTylcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vJC50by1vYmplY3QnKTtcblxucmVxdWlyZSgnLi8kLm9iamVjdC1zYXAnKSgna2V5cycsIGZ1bmN0aW9uKCRrZXlzKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIGtleXMoaXQpe1xuICAgIHJldHVybiAka2V5cyh0b09iamVjdChpdCkpO1xuICB9O1xufSk7IiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG5cbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHNldFRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZHJhaW5RdWV1ZSwgMCk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCIoZnVuY3Rpb24oKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgZnVuY3Rpb24gJCRyb3V0ZSRyZWNvZ25pemVyJGRzbCQkVGFyZ2V0KHBhdGgsIG1hdGNoZXIsIGRlbGVnYXRlKSB7XG4gICAgICB0aGlzLnBhdGggPSBwYXRoO1xuICAgICAgdGhpcy5tYXRjaGVyID0gbWF0Y2hlcjtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBkZWxlZ2F0ZTtcbiAgICB9XG5cbiAgICAkJHJvdXRlJHJlY29nbml6ZXIkZHNsJCRUYXJnZXQucHJvdG90eXBlID0ge1xuICAgICAgdG86IGZ1bmN0aW9uKHRhcmdldCwgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gdGhpcy5kZWxlZ2F0ZTtcblxuICAgICAgICBpZiAoZGVsZWdhdGUgJiYgZGVsZWdhdGUud2lsbEFkZFJvdXRlKSB7XG4gICAgICAgICAgdGFyZ2V0ID0gZGVsZWdhdGUud2lsbEFkZFJvdXRlKHRoaXMubWF0Y2hlci50YXJnZXQsIHRhcmdldCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm1hdGNoZXIuYWRkKHRoaXMucGF0aCwgdGFyZ2V0KTtcblxuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICBpZiAoY2FsbGJhY2subGVuZ3RoID09PSAwKSB7IHRocm93IG5ldyBFcnJvcihcIllvdSBtdXN0IGhhdmUgYW4gYXJndW1lbnQgaW4gdGhlIGZ1bmN0aW9uIHBhc3NlZCB0byBgdG9gXCIpOyB9XG4gICAgICAgICAgdGhpcy5tYXRjaGVyLmFkZENoaWxkKHRoaXMucGF0aCwgdGFyZ2V0LCBjYWxsYmFjaywgdGhpcy5kZWxlZ2F0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uICQkcm91dGUkcmVjb2duaXplciRkc2wkJE1hdGNoZXIodGFyZ2V0KSB7XG4gICAgICB0aGlzLnJvdXRlcyA9IHt9O1xuICAgICAgdGhpcy5jaGlsZHJlbiA9IHt9O1xuICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XG4gICAgfVxuXG4gICAgJCRyb3V0ZSRyZWNvZ25pemVyJGRzbCQkTWF0Y2hlci5wcm90b3R5cGUgPSB7XG4gICAgICBhZGQ6IGZ1bmN0aW9uKHBhdGgsIGhhbmRsZXIpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXNbcGF0aF0gPSBoYW5kbGVyO1xuICAgICAgfSxcblxuICAgICAgYWRkQ2hpbGQ6IGZ1bmN0aW9uKHBhdGgsIHRhcmdldCwgY2FsbGJhY2ssIGRlbGVnYXRlKSB7XG4gICAgICAgIHZhciBtYXRjaGVyID0gbmV3ICQkcm91dGUkcmVjb2duaXplciRkc2wkJE1hdGNoZXIodGFyZ2V0KTtcbiAgICAgICAgdGhpcy5jaGlsZHJlbltwYXRoXSA9IG1hdGNoZXI7XG5cbiAgICAgICAgdmFyIG1hdGNoID0gJCRyb3V0ZSRyZWNvZ25pemVyJGRzbCQkZ2VuZXJhdGVNYXRjaChwYXRoLCBtYXRjaGVyLCBkZWxlZ2F0ZSk7XG5cbiAgICAgICAgaWYgKGRlbGVnYXRlICYmIGRlbGVnYXRlLmNvbnRleHRFbnRlcmVkKSB7XG4gICAgICAgICAgZGVsZWdhdGUuY29udGV4dEVudGVyZWQodGFyZ2V0LCBtYXRjaCk7XG4gICAgICAgIH1cblxuICAgICAgICBjYWxsYmFjayhtYXRjaCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uICQkcm91dGUkcmVjb2duaXplciRkc2wkJGdlbmVyYXRlTWF0Y2goc3RhcnRpbmdQYXRoLCBtYXRjaGVyLCBkZWxlZ2F0ZSkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKHBhdGgsIG5lc3RlZENhbGxiYWNrKSB7XG4gICAgICAgIHZhciBmdWxsUGF0aCA9IHN0YXJ0aW5nUGF0aCArIHBhdGg7XG5cbiAgICAgICAgaWYgKG5lc3RlZENhbGxiYWNrKSB7XG4gICAgICAgICAgbmVzdGVkQ2FsbGJhY2soJCRyb3V0ZSRyZWNvZ25pemVyJGRzbCQkZ2VuZXJhdGVNYXRjaChmdWxsUGF0aCwgbWF0Y2hlciwgZGVsZWdhdGUpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gbmV3ICQkcm91dGUkcmVjb2duaXplciRkc2wkJFRhcmdldChzdGFydGluZ1BhdGggKyBwYXRoLCBtYXRjaGVyLCBkZWxlZ2F0ZSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gJCRyb3V0ZSRyZWNvZ25pemVyJGRzbCQkYWRkUm91dGUocm91dGVBcnJheSwgcGF0aCwgaGFuZGxlcikge1xuICAgICAgdmFyIGxlbiA9IDA7XG4gICAgICBmb3IgKHZhciBpPTAsIGw9cm91dGVBcnJheS5sZW5ndGg7IGk8bDsgaSsrKSB7XG4gICAgICAgIGxlbiArPSByb3V0ZUFycmF5W2ldLnBhdGgubGVuZ3RoO1xuICAgICAgfVxuXG4gICAgICBwYXRoID0gcGF0aC5zdWJzdHIobGVuKTtcbiAgICAgIHZhciByb3V0ZSA9IHsgcGF0aDogcGF0aCwgaGFuZGxlcjogaGFuZGxlciB9O1xuICAgICAgcm91dGVBcnJheS5wdXNoKHJvdXRlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiAkJHJvdXRlJHJlY29nbml6ZXIkZHNsJCRlYWNoUm91dGUoYmFzZVJvdXRlLCBtYXRjaGVyLCBjYWxsYmFjaywgYmluZGluZykge1xuICAgICAgdmFyIHJvdXRlcyA9IG1hdGNoZXIucm91dGVzO1xuXG4gICAgICBmb3IgKHZhciBwYXRoIGluIHJvdXRlcykge1xuICAgICAgICBpZiAocm91dGVzLmhhc093blByb3BlcnR5KHBhdGgpKSB7XG4gICAgICAgICAgdmFyIHJvdXRlQXJyYXkgPSBiYXNlUm91dGUuc2xpY2UoKTtcbiAgICAgICAgICAkJHJvdXRlJHJlY29nbml6ZXIkZHNsJCRhZGRSb3V0ZShyb3V0ZUFycmF5LCBwYXRoLCByb3V0ZXNbcGF0aF0pO1xuXG4gICAgICAgICAgaWYgKG1hdGNoZXIuY2hpbGRyZW5bcGF0aF0pIHtcbiAgICAgICAgICAgICQkcm91dGUkcmVjb2duaXplciRkc2wkJGVhY2hSb3V0ZShyb3V0ZUFycmF5LCBtYXRjaGVyLmNoaWxkcmVuW3BhdGhdLCBjYWxsYmFjaywgYmluZGluZyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoYmluZGluZywgcm91dGVBcnJheSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyICQkcm91dGUkcmVjb2duaXplciRkc2wkJGRlZmF1bHQgPSBmdW5jdGlvbihjYWxsYmFjaywgYWRkUm91dGVDYWxsYmFjaykge1xuICAgICAgdmFyIG1hdGNoZXIgPSBuZXcgJCRyb3V0ZSRyZWNvZ25pemVyJGRzbCQkTWF0Y2hlcigpO1xuXG4gICAgICBjYWxsYmFjaygkJHJvdXRlJHJlY29nbml6ZXIkZHNsJCRnZW5lcmF0ZU1hdGNoKFwiXCIsIG1hdGNoZXIsIHRoaXMuZGVsZWdhdGUpKTtcblxuICAgICAgJCRyb3V0ZSRyZWNvZ25pemVyJGRzbCQkZWFjaFJvdXRlKFtdLCBtYXRjaGVyLCBmdW5jdGlvbihyb3V0ZSkge1xuICAgICAgICBpZiAoYWRkUm91dGVDYWxsYmFjaykgeyBhZGRSb3V0ZUNhbGxiYWNrKHRoaXMsIHJvdXRlKTsgfVxuICAgICAgICBlbHNlIHsgdGhpcy5hZGQocm91dGUpOyB9XG4gICAgICB9LCB0aGlzKTtcbiAgICB9O1xuXG4gICAgdmFyICQkcm91dGUkcmVjb2duaXplciQkc3BlY2lhbHMgPSBbXG4gICAgICAnLycsICcuJywgJyonLCAnKycsICc/JywgJ3wnLFxuICAgICAgJygnLCAnKScsICdbJywgJ10nLCAneycsICd9JywgJ1xcXFwnXG4gICAgXTtcblxuICAgIHZhciAkJHJvdXRlJHJlY29nbml6ZXIkJGVzY2FwZVJlZ2V4ID0gbmV3IFJlZ0V4cCgnKFxcXFwnICsgJCRyb3V0ZSRyZWNvZ25pemVyJCRzcGVjaWFscy5qb2luKCd8XFxcXCcpICsgJyknLCAnZycpO1xuXG4gICAgZnVuY3Rpb24gJCRyb3V0ZSRyZWNvZ25pemVyJCRpc0FycmF5KHRlc3QpIHtcbiAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodGVzdCkgPT09IFwiW29iamVjdCBBcnJheV1cIjtcbiAgICB9XG5cbiAgICAvLyBBIFNlZ21lbnQgcmVwcmVzZW50cyBhIHNlZ21lbnQgaW4gdGhlIG9yaWdpbmFsIHJvdXRlIGRlc2NyaXB0aW9uLlxuICAgIC8vIEVhY2ggU2VnbWVudCB0eXBlIHByb3ZpZGVzIGFuIGBlYWNoQ2hhcmAgYW5kIGByZWdleGAgbWV0aG9kLlxuICAgIC8vXG4gICAgLy8gVGhlIGBlYWNoQ2hhcmAgbWV0aG9kIGludm9rZXMgdGhlIGNhbGxiYWNrIHdpdGggb25lIG9yIG1vcmUgY2hhcmFjdGVyXG4gICAgLy8gc3BlY2lmaWNhdGlvbnMuIEEgY2hhcmFjdGVyIHNwZWNpZmljYXRpb24gY29uc3VtZXMgb25lIG9yIG1vcmUgaW5wdXRcbiAgICAvLyBjaGFyYWN0ZXJzLlxuICAgIC8vXG4gICAgLy8gVGhlIGByZWdleGAgbWV0aG9kIHJldHVybnMgYSByZWdleCBmcmFnbWVudCBmb3IgdGhlIHNlZ21lbnQuIElmIHRoZVxuICAgIC8vIHNlZ21lbnQgaXMgYSBkeW5hbWljIG9mIHN0YXIgc2VnbWVudCwgdGhlIHJlZ2V4IGZyYWdtZW50IGFsc28gaW5jbHVkZXNcbiAgICAvLyBhIGNhcHR1cmUuXG4gICAgLy9cbiAgICAvLyBBIGNoYXJhY3RlciBzcGVjaWZpY2F0aW9uIGNvbnRhaW5zOlxuICAgIC8vXG4gICAgLy8gKiBgdmFsaWRDaGFyc2A6IGEgU3RyaW5nIHdpdGggYSBsaXN0IG9mIGFsbCB2YWxpZCBjaGFyYWN0ZXJzLCBvclxuICAgIC8vICogYGludmFsaWRDaGFyc2A6IGEgU3RyaW5nIHdpdGggYSBsaXN0IG9mIGFsbCBpbnZhbGlkIGNoYXJhY3RlcnNcbiAgICAvLyAqIGByZXBlYXRgOiB0cnVlIGlmIHRoZSBjaGFyYWN0ZXIgc3BlY2lmaWNhdGlvbiBjYW4gcmVwZWF0XG5cbiAgICBmdW5jdGlvbiAkJHJvdXRlJHJlY29nbml6ZXIkJFN0YXRpY1NlZ21lbnQoc3RyaW5nKSB7IHRoaXMuc3RyaW5nID0gc3RyaW5nOyB9XG4gICAgJCRyb3V0ZSRyZWNvZ25pemVyJCRTdGF0aWNTZWdtZW50LnByb3RvdHlwZSA9IHtcbiAgICAgIGVhY2hDaGFyOiBmdW5jdGlvbihjYWxsYmFjaykge1xuICAgICAgICB2YXIgc3RyaW5nID0gdGhpcy5zdHJpbmcsIGNoO1xuXG4gICAgICAgIGZvciAodmFyIGk9MCwgbD1zdHJpbmcubGVuZ3RoOyBpPGw7IGkrKykge1xuICAgICAgICAgIGNoID0gc3RyaW5nLmNoYXJBdChpKTtcbiAgICAgICAgICBjYWxsYmFjayh7IHZhbGlkQ2hhcnM6IGNoIH0pO1xuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICByZWdleDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0cmluZy5yZXBsYWNlKCQkcm91dGUkcmVjb2duaXplciQkZXNjYXBlUmVnZXgsICdcXFxcJDEnKTtcbiAgICAgIH0sXG5cbiAgICAgIGdlbmVyYXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiAkJHJvdXRlJHJlY29nbml6ZXIkJER5bmFtaWNTZWdtZW50KG5hbWUpIHsgdGhpcy5uYW1lID0gbmFtZTsgfVxuICAgICQkcm91dGUkcmVjb2duaXplciQkRHluYW1pY1NlZ21lbnQucHJvdG90eXBlID0ge1xuICAgICAgZWFjaENoYXI6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgICAgIGNhbGxiYWNrKHsgaW52YWxpZENoYXJzOiBcIi9cIiwgcmVwZWF0OiB0cnVlIH0pO1xuICAgICAgfSxcblxuICAgICAgcmVnZXg6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gXCIoW14vXSspXCI7XG4gICAgICB9LFxuXG4gICAgICBnZW5lcmF0ZTogZnVuY3Rpb24ocGFyYW1zKSB7XG4gICAgICAgIHJldHVybiBwYXJhbXNbdGhpcy5uYW1lXTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gJCRyb3V0ZSRyZWNvZ25pemVyJCRTdGFyU2VnbWVudChuYW1lKSB7IHRoaXMubmFtZSA9IG5hbWU7IH1cbiAgICAkJHJvdXRlJHJlY29nbml6ZXIkJFN0YXJTZWdtZW50LnByb3RvdHlwZSA9IHtcbiAgICAgIGVhY2hDaGFyOiBmdW5jdGlvbihjYWxsYmFjaykge1xuICAgICAgICBjYWxsYmFjayh7IGludmFsaWRDaGFyczogXCJcIiwgcmVwZWF0OiB0cnVlIH0pO1xuICAgICAgfSxcblxuICAgICAgcmVnZXg6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gXCIoLispXCI7XG4gICAgICB9LFxuXG4gICAgICBnZW5lcmF0ZTogZnVuY3Rpb24ocGFyYW1zKSB7XG4gICAgICAgIHJldHVybiBwYXJhbXNbdGhpcy5uYW1lXTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gJCRyb3V0ZSRyZWNvZ25pemVyJCRFcHNpbG9uU2VnbWVudCgpIHt9XG4gICAgJCRyb3V0ZSRyZWNvZ25pemVyJCRFcHNpbG9uU2VnbWVudC5wcm90b3R5cGUgPSB7XG4gICAgICBlYWNoQ2hhcjogZnVuY3Rpb24oKSB7fSxcbiAgICAgIHJlZ2V4OiBmdW5jdGlvbigpIHsgcmV0dXJuIFwiXCI7IH0sXG4gICAgICBnZW5lcmF0ZTogZnVuY3Rpb24oKSB7IHJldHVybiBcIlwiOyB9XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uICQkcm91dGUkcmVjb2duaXplciQkcGFyc2Uocm91dGUsIG5hbWVzLCBzcGVjaWZpY2l0eSkge1xuICAgICAgLy8gbm9ybWFsaXplIHJvdXRlIGFzIG5vdCBzdGFydGluZyB3aXRoIGEgXCIvXCIuIFJlY29nbml0aW9uIHdpbGxcbiAgICAgIC8vIGFsc28gbm9ybWFsaXplLlxuICAgICAgaWYgKHJvdXRlLmNoYXJBdCgwKSA9PT0gXCIvXCIpIHsgcm91dGUgPSByb3V0ZS5zdWJzdHIoMSk7IH1cblxuICAgICAgdmFyIHNlZ21lbnRzID0gcm91dGUuc3BsaXQoXCIvXCIpLCByZXN1bHRzID0gW107XG5cbiAgICAgIC8vIEEgcm91dGVzIGhhcyBzcGVjaWZpY2l0eSBkZXRlcm1pbmVkIGJ5IHRoZSBvcmRlciB0aGF0IGl0cyBkaWZmZXJlbnQgc2VnbWVudHNcbiAgICAgIC8vIGFwcGVhciBpbi4gVGhpcyBzeXN0ZW0gbWlycm9ycyBob3cgdGhlIG1hZ25pdHVkZSBvZiBudW1iZXJzIHdyaXR0ZW4gYXMgc3RyaW5nc1xuICAgICAgLy8gd29ya3MuXG4gICAgICAvLyBDb25zaWRlciBhIG51bWJlciB3cml0dGVuIGFzOiBcImFiY1wiLiBBbiBleGFtcGxlIHdvdWxkIGJlIFwiMjAwXCIuIEFueSBvdGhlciBudW1iZXIgd3JpdHRlblxuICAgICAgLy8gXCJ4eXpcIiB3aWxsIGJlIHNtYWxsZXIgdGhhbiBcImFiY1wiIHNvIGxvbmcgYXMgYGEgPiB6YC4gRm9yIGluc3RhbmNlLCBcIjE5OVwiIGlzIHNtYWxsZXJcbiAgICAgIC8vIHRoZW4gXCIyMDBcIiwgZXZlbiB0aG91Z2ggXCJ5XCIgYW5kIFwielwiICh3aGljaCBhcmUgYm90aCA5KSBhcmUgbGFyZ2VyIHRoYW4gXCIwXCIgKHRoZSB2YWx1ZVxuICAgICAgLy8gb2YgKGBiYCBhbmQgYGNgKS4gVGhpcyBpcyBiZWNhdXNlIHRoZSBsZWFkaW5nIHN5bWJvbCwgXCIyXCIsIGlzIGxhcmdlciB0aGFuIHRoZSBvdGhlclxuICAgICAgLy8gbGVhZGluZyBzeW1ib2wsIFwiMVwiLlxuICAgICAgLy8gVGhlIHJ1bGUgaXMgdGhhdCBzeW1ib2xzIHRvIHRoZSBsZWZ0IGNhcnJ5IG1vcmUgd2VpZ2h0IHRoYW4gc3ltYm9scyB0byB0aGUgcmlnaHRcbiAgICAgIC8vIHdoZW4gYSBudW1iZXIgaXMgd3JpdHRlbiBvdXQgYXMgYSBzdHJpbmcuIEluIHRoZSBhYm92ZSBzdHJpbmdzLCB0aGUgbGVhZGluZyBkaWdpdFxuICAgICAgLy8gcmVwcmVzZW50cyBob3cgbWFueSAxMDAncyBhcmUgaW4gdGhlIG51bWJlciwgYW5kIGl0IGNhcnJpZXMgbW9yZSB3ZWlnaHQgdGhhbiB0aGUgbWlkZGxlXG4gICAgICAvLyBudW1iZXIgd2hpY2ggcmVwcmVzZW50cyBob3cgbWFueSAxMCdzIGFyZSBpbiB0aGUgbnVtYmVyLlxuICAgICAgLy8gVGhpcyBzeXN0ZW0gb2YgbnVtYmVyIG1hZ25pdHVkZSB3b3JrcyB3ZWxsIGZvciByb3V0ZSBzcGVjaWZpY2l0eSwgdG9vLiBBIHJvdXRlIHdyaXR0ZW4gYXNcbiAgICAgIC8vIGBhL2IvY2Agd2lsbCBiZSBtb3JlIHNwZWNpZmljIHRoYW4gYHgveS96YCBhcyBsb25nIGFzIGBhYCBpcyBtb3JlIHNwZWNpZmljIHRoYW5cbiAgICAgIC8vIGB4YCwgaXJyZXNwZWN0aXZlIG9mIHRoZSBvdGhlciBwYXJ0cy5cbiAgICAgIC8vIEJlY2F1c2Ugb2YgdGhpcyBzaW1pbGFyaXR5LCB3ZSBhc3NpZ24gZWFjaCB0eXBlIG9mIHNlZ21lbnQgYSBudW1iZXIgdmFsdWUgd3JpdHRlbiBhcyBhXG4gICAgICAvLyBzdHJpbmcuIFdlIGNhbiBmaW5kIHRoZSBzcGVjaWZpY2l0eSBvZiBjb21wb3VuZCByb3V0ZXMgYnkgY29uY2F0ZW5hdGluZyB0aGVzZSBzdHJpbmdzXG4gICAgICAvLyB0b2dldGhlciwgZnJvbSBsZWZ0IHRvIHJpZ2h0LiBBZnRlciB3ZSBoYXZlIGxvb3BlZCB0aHJvdWdoIGFsbCBvZiB0aGUgc2VnbWVudHMsXG4gICAgICAvLyB3ZSBjb252ZXJ0IHRoZSBzdHJpbmcgdG8gYSBudW1iZXIuXG4gICAgICBzcGVjaWZpY2l0eS52YWwgPSAnJztcblxuICAgICAgZm9yICh2YXIgaT0wLCBsPXNlZ21lbnRzLmxlbmd0aDsgaTxsOyBpKyspIHtcbiAgICAgICAgdmFyIHNlZ21lbnQgPSBzZWdtZW50c1tpXSwgbWF0Y2g7XG5cbiAgICAgICAgaWYgKG1hdGNoID0gc2VnbWVudC5tYXRjaCgvXjooW15cXC9dKykkLykpIHtcbiAgICAgICAgICByZXN1bHRzLnB1c2gobmV3ICQkcm91dGUkcmVjb2duaXplciQkRHluYW1pY1NlZ21lbnQobWF0Y2hbMV0pKTtcbiAgICAgICAgICBuYW1lcy5wdXNoKG1hdGNoWzFdKTtcbiAgICAgICAgICBzcGVjaWZpY2l0eS52YWwgKz0gJzMnO1xuICAgICAgICB9IGVsc2UgaWYgKG1hdGNoID0gc2VnbWVudC5tYXRjaCgvXlxcKihbXlxcL10rKSQvKSkge1xuICAgICAgICAgIHJlc3VsdHMucHVzaChuZXcgJCRyb3V0ZSRyZWNvZ25pemVyJCRTdGFyU2VnbWVudChtYXRjaFsxXSkpO1xuICAgICAgICAgIHNwZWNpZmljaXR5LnZhbCArPSAnMic7XG4gICAgICAgICAgbmFtZXMucHVzaChtYXRjaFsxXSk7XG4gICAgICAgIH0gZWxzZSBpZihzZWdtZW50ID09PSBcIlwiKSB7XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKG5ldyAkJHJvdXRlJHJlY29nbml6ZXIkJEVwc2lsb25TZWdtZW50KCkpO1xuICAgICAgICAgIHNwZWNpZmljaXR5LnZhbCArPSAnMSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKG5ldyAkJHJvdXRlJHJlY29nbml6ZXIkJFN0YXRpY1NlZ21lbnQoc2VnbWVudCkpO1xuICAgICAgICAgIHNwZWNpZmljaXR5LnZhbCArPSAnNCc7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgc3BlY2lmaWNpdHkudmFsID0gK3NwZWNpZmljaXR5LnZhbDtcblxuICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfVxuXG4gICAgLy8gQSBTdGF0ZSBoYXMgYSBjaGFyYWN0ZXIgc3BlY2lmaWNhdGlvbiBhbmQgKGBjaGFyU3BlY2ApIGFuZCBhIGxpc3Qgb2YgcG9zc2libGVcbiAgICAvLyBzdWJzZXF1ZW50IHN0YXRlcyAoYG5leHRTdGF0ZXNgKS5cbiAgICAvL1xuICAgIC8vIElmIGEgU3RhdGUgaXMgYW4gYWNjZXB0aW5nIHN0YXRlLCBpdCB3aWxsIGFsc28gaGF2ZSBzZXZlcmFsIGFkZGl0aW9uYWxcbiAgICAvLyBwcm9wZXJ0aWVzOlxuICAgIC8vXG4gICAgLy8gKiBgcmVnZXhgOiBBIHJlZ3VsYXIgZXhwcmVzc2lvbiB0aGF0IGlzIHVzZWQgdG8gZXh0cmFjdCBwYXJhbWV0ZXJzIGZyb20gcGF0aHNcbiAgICAvLyAgIHRoYXQgcmVhY2hlZCB0aGlzIGFjY2VwdGluZyBzdGF0ZS5cbiAgICAvLyAqIGBoYW5kbGVyc2A6IEluZm9ybWF0aW9uIG9uIGhvdyB0byBjb252ZXJ0IHRoZSBsaXN0IG9mIGNhcHR1cmVzIGludG8gY2FsbHNcbiAgICAvLyAgIHRvIHJlZ2lzdGVyZWQgaGFuZGxlcnMgd2l0aCB0aGUgc3BlY2lmaWVkIHBhcmFtZXRlcnNcbiAgICAvLyAqIGB0eXBlc2A6IEhvdyBtYW55IHN0YXRpYywgZHluYW1pYyBvciBzdGFyIHNlZ21lbnRzIGluIHRoaXMgcm91dGUuIFVzZWQgdG9cbiAgICAvLyAgIGRlY2lkZSB3aGljaCByb3V0ZSB0byB1c2UgaWYgbXVsdGlwbGUgcmVnaXN0ZXJlZCByb3V0ZXMgbWF0Y2ggYSBwYXRoLlxuICAgIC8vXG4gICAgLy8gQ3VycmVudGx5LCBTdGF0ZSBpcyBpbXBsZW1lbnRlZCBuYWl2ZWx5IGJ5IGxvb3Bpbmcgb3ZlciBgbmV4dFN0YXRlc2AgYW5kXG4gICAgLy8gY29tcGFyaW5nIGEgY2hhcmFjdGVyIHNwZWNpZmljYXRpb24gYWdhaW5zdCBhIGNoYXJhY3Rlci4gQSBtb3JlIGVmZmljaWVudFxuICAgIC8vIGltcGxlbWVudGF0aW9uIHdvdWxkIHVzZSBhIGhhc2ggb2Yga2V5cyBwb2ludGluZyBhdCBvbmUgb3IgbW9yZSBuZXh0IHN0YXRlcy5cblxuICAgIGZ1bmN0aW9uICQkcm91dGUkcmVjb2duaXplciQkU3RhdGUoY2hhclNwZWMpIHtcbiAgICAgIHRoaXMuY2hhclNwZWMgPSBjaGFyU3BlYztcbiAgICAgIHRoaXMubmV4dFN0YXRlcyA9IFtdO1xuICAgIH1cblxuICAgICQkcm91dGUkcmVjb2duaXplciQkU3RhdGUucHJvdG90eXBlID0ge1xuICAgICAgZ2V0OiBmdW5jdGlvbihjaGFyU3BlYykge1xuICAgICAgICB2YXIgbmV4dFN0YXRlcyA9IHRoaXMubmV4dFN0YXRlcztcblxuICAgICAgICBmb3IgKHZhciBpPTAsIGw9bmV4dFN0YXRlcy5sZW5ndGg7IGk8bDsgaSsrKSB7XG4gICAgICAgICAgdmFyIGNoaWxkID0gbmV4dFN0YXRlc1tpXTtcblxuICAgICAgICAgIHZhciBpc0VxdWFsID0gY2hpbGQuY2hhclNwZWMudmFsaWRDaGFycyA9PT0gY2hhclNwZWMudmFsaWRDaGFycztcbiAgICAgICAgICBpc0VxdWFsID0gaXNFcXVhbCAmJiBjaGlsZC5jaGFyU3BlYy5pbnZhbGlkQ2hhcnMgPT09IGNoYXJTcGVjLmludmFsaWRDaGFycztcblxuICAgICAgICAgIGlmIChpc0VxdWFsKSB7IHJldHVybiBjaGlsZDsgfVxuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICBwdXQ6IGZ1bmN0aW9uKGNoYXJTcGVjKSB7XG4gICAgICAgIHZhciBzdGF0ZTtcblxuICAgICAgICAvLyBJZiB0aGUgY2hhcmFjdGVyIHNwZWNpZmljYXRpb24gYWxyZWFkeSBleGlzdHMgaW4gYSBjaGlsZCBvZiB0aGUgY3VycmVudFxuICAgICAgICAvLyBzdGF0ZSwganVzdCByZXR1cm4gdGhhdCBzdGF0ZS5cbiAgICAgICAgaWYgKHN0YXRlID0gdGhpcy5nZXQoY2hhclNwZWMpKSB7IHJldHVybiBzdGF0ZTsgfVxuXG4gICAgICAgIC8vIE1ha2UgYSBuZXcgc3RhdGUgZm9yIHRoZSBjaGFyYWN0ZXIgc3BlY1xuICAgICAgICBzdGF0ZSA9IG5ldyAkJHJvdXRlJHJlY29nbml6ZXIkJFN0YXRlKGNoYXJTcGVjKTtcblxuICAgICAgICAvLyBJbnNlcnQgdGhlIG5ldyBzdGF0ZSBhcyBhIGNoaWxkIG9mIHRoZSBjdXJyZW50IHN0YXRlXG4gICAgICAgIHRoaXMubmV4dFN0YXRlcy5wdXNoKHN0YXRlKTtcblxuICAgICAgICAvLyBJZiB0aGlzIGNoYXJhY3RlciBzcGVjaWZpY2F0aW9uIHJlcGVhdHMsIGluc2VydCB0aGUgbmV3IHN0YXRlIGFzIGEgY2hpbGRcbiAgICAgICAgLy8gb2YgaXRzZWxmLiBOb3RlIHRoYXQgdGhpcyB3aWxsIG5vdCB0cmlnZ2VyIGFuIGluZmluaXRlIGxvb3AgYmVjYXVzZSBlYWNoXG4gICAgICAgIC8vIHRyYW5zaXRpb24gZHVyaW5nIHJlY29nbml0aW9uIGNvbnN1bWVzIGEgY2hhcmFjdGVyLlxuICAgICAgICBpZiAoY2hhclNwZWMucmVwZWF0KSB7XG4gICAgICAgICAgc3RhdGUubmV4dFN0YXRlcy5wdXNoKHN0YXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJldHVybiB0aGUgbmV3IHN0YXRlXG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgIH0sXG5cbiAgICAgIC8vIEZpbmQgYSBsaXN0IG9mIGNoaWxkIHN0YXRlcyBtYXRjaGluZyB0aGUgbmV4dCBjaGFyYWN0ZXJcbiAgICAgIG1hdGNoOiBmdW5jdGlvbihjaCkge1xuICAgICAgICAvLyBERUJVRyBcIlByb2Nlc3NpbmcgYFwiICsgY2ggKyBcImA6XCJcbiAgICAgICAgdmFyIG5leHRTdGF0ZXMgPSB0aGlzLm5leHRTdGF0ZXMsXG4gICAgICAgICAgICBjaGlsZCwgY2hhclNwZWMsIGNoYXJzO1xuXG4gICAgICAgIC8vIERFQlVHIFwiICBcIiArIGRlYnVnU3RhdGUodGhpcylcbiAgICAgICAgdmFyIHJldHVybmVkID0gW107XG5cbiAgICAgICAgZm9yICh2YXIgaT0wLCBsPW5leHRTdGF0ZXMubGVuZ3RoOyBpPGw7IGkrKykge1xuICAgICAgICAgIGNoaWxkID0gbmV4dFN0YXRlc1tpXTtcblxuICAgICAgICAgIGNoYXJTcGVjID0gY2hpbGQuY2hhclNwZWM7XG5cbiAgICAgICAgICBpZiAodHlwZW9mIChjaGFycyA9IGNoYXJTcGVjLnZhbGlkQ2hhcnMpICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgaWYgKGNoYXJzLmluZGV4T2YoY2gpICE9PSAtMSkgeyByZXR1cm5lZC5wdXNoKGNoaWxkKTsgfVxuICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIChjaGFycyA9IGNoYXJTcGVjLmludmFsaWRDaGFycykgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBpZiAoY2hhcnMuaW5kZXhPZihjaCkgPT09IC0xKSB7IHJldHVybmVkLnB1c2goY2hpbGQpOyB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJldHVybmVkO1xuICAgICAgfVxuXG4gICAgICAvKiogSUYgREVCVUdcbiAgICAgICwgZGVidWc6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgY2hhclNwZWMgPSB0aGlzLmNoYXJTcGVjLFxuICAgICAgICAgICAgZGVidWcgPSBcIltcIixcbiAgICAgICAgICAgIGNoYXJzID0gY2hhclNwZWMudmFsaWRDaGFycyB8fCBjaGFyU3BlYy5pbnZhbGlkQ2hhcnM7XG5cbiAgICAgICAgaWYgKGNoYXJTcGVjLmludmFsaWRDaGFycykgeyBkZWJ1ZyArPSBcIl5cIjsgfVxuICAgICAgICBkZWJ1ZyArPSBjaGFycztcbiAgICAgICAgZGVidWcgKz0gXCJdXCI7XG5cbiAgICAgICAgaWYgKGNoYXJTcGVjLnJlcGVhdCkgeyBkZWJ1ZyArPSBcIitcIjsgfVxuXG4gICAgICAgIHJldHVybiBkZWJ1ZztcbiAgICAgIH1cbiAgICAgIEVORCBJRiAqKi9cbiAgICB9O1xuXG4gICAgLyoqIElGIERFQlVHXG4gICAgZnVuY3Rpb24gZGVidWcobG9nKSB7XG4gICAgICBjb25zb2xlLmxvZyhsb2cpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlYnVnU3RhdGUoc3RhdGUpIHtcbiAgICAgIHJldHVybiBzdGF0ZS5uZXh0U3RhdGVzLm1hcChmdW5jdGlvbihuKSB7XG4gICAgICAgIGlmIChuLm5leHRTdGF0ZXMubGVuZ3RoID09PSAwKSB7IHJldHVybiBcIiggXCIgKyBuLmRlYnVnKCkgKyBcIiBbYWNjZXB0aW5nXSApXCI7IH1cbiAgICAgICAgcmV0dXJuIFwiKCBcIiArIG4uZGVidWcoKSArIFwiIDx0aGVuPiBcIiArIG4ubmV4dFN0YXRlcy5tYXAoZnVuY3Rpb24ocykgeyByZXR1cm4gcy5kZWJ1ZygpIH0pLmpvaW4oXCIgb3IgXCIpICsgXCIgKVwiO1xuICAgICAgfSkuam9pbihcIiwgXCIpXG4gICAgfVxuICAgIEVORCBJRiAqKi9cblxuICAgIC8vIFNvcnQgdGhlIHJvdXRlcyBieSBzcGVjaWZpY2l0eVxuICAgIGZ1bmN0aW9uICQkcm91dGUkcmVjb2duaXplciQkc29ydFNvbHV0aW9ucyhzdGF0ZXMpIHtcbiAgICAgIHJldHVybiBzdGF0ZXMuc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgIHJldHVybiBiLnNwZWNpZmljaXR5LnZhbCAtIGEuc3BlY2lmaWNpdHkudmFsO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gJCRyb3V0ZSRyZWNvZ25pemVyJCRyZWNvZ25pemVDaGFyKHN0YXRlcywgY2gpIHtcbiAgICAgIHZhciBuZXh0U3RhdGVzID0gW107XG5cbiAgICAgIGZvciAodmFyIGk9MCwgbD1zdGF0ZXMubGVuZ3RoOyBpPGw7IGkrKykge1xuICAgICAgICB2YXIgc3RhdGUgPSBzdGF0ZXNbaV07XG5cbiAgICAgICAgbmV4dFN0YXRlcyA9IG5leHRTdGF0ZXMuY29uY2F0KHN0YXRlLm1hdGNoKGNoKSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXh0U3RhdGVzO1xuICAgIH1cblxuICAgIHZhciAkJHJvdXRlJHJlY29nbml6ZXIkJG9DcmVhdGUgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uKHByb3RvKSB7XG4gICAgICBmdW5jdGlvbiBGKCkge31cbiAgICAgIEYucHJvdG90eXBlID0gcHJvdG87XG4gICAgICByZXR1cm4gbmV3IEYoKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gJCRyb3V0ZSRyZWNvZ25pemVyJCRSZWNvZ25pemVSZXN1bHRzKHF1ZXJ5UGFyYW1zKSB7XG4gICAgICB0aGlzLnF1ZXJ5UGFyYW1zID0gcXVlcnlQYXJhbXMgfHwge307XG4gICAgfVxuICAgICQkcm91dGUkcmVjb2duaXplciQkUmVjb2duaXplUmVzdWx0cy5wcm90b3R5cGUgPSAkJHJvdXRlJHJlY29nbml6ZXIkJG9DcmVhdGUoe1xuICAgICAgc3BsaWNlOiBBcnJheS5wcm90b3R5cGUuc3BsaWNlLFxuICAgICAgc2xpY2U6ICBBcnJheS5wcm90b3R5cGUuc2xpY2UsXG4gICAgICBwdXNoOiAgIEFycmF5LnByb3RvdHlwZS5wdXNoLFxuICAgICAgbGVuZ3RoOiAwLFxuICAgICAgcXVlcnlQYXJhbXM6IG51bGxcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uICQkcm91dGUkcmVjb2duaXplciQkZmluZEhhbmRsZXIoc3RhdGUsIHBhdGgsIHF1ZXJ5UGFyYW1zKSB7XG4gICAgICB2YXIgaGFuZGxlcnMgPSBzdGF0ZS5oYW5kbGVycywgcmVnZXggPSBzdGF0ZS5yZWdleDtcbiAgICAgIHZhciBjYXB0dXJlcyA9IHBhdGgubWF0Y2gocmVnZXgpLCBjdXJyZW50Q2FwdHVyZSA9IDE7XG4gICAgICB2YXIgcmVzdWx0ID0gbmV3ICQkcm91dGUkcmVjb2duaXplciQkUmVjb2duaXplUmVzdWx0cyhxdWVyeVBhcmFtcyk7XG5cbiAgICAgIGZvciAodmFyIGk9MCwgbD1oYW5kbGVycy5sZW5ndGg7IGk8bDsgaSsrKSB7XG4gICAgICAgIHZhciBoYW5kbGVyID0gaGFuZGxlcnNbaV0sIG5hbWVzID0gaGFuZGxlci5uYW1lcywgcGFyYW1zID0ge307XG5cbiAgICAgICAgZm9yICh2YXIgaj0wLCBtPW5hbWVzLmxlbmd0aDsgajxtOyBqKyspIHtcbiAgICAgICAgICBwYXJhbXNbbmFtZXNbal1dID0gY2FwdHVyZXNbY3VycmVudENhcHR1cmUrK107XG4gICAgICAgIH1cblxuICAgICAgICByZXN1bHQucHVzaCh7IGhhbmRsZXI6IGhhbmRsZXIuaGFuZGxlciwgcGFyYW1zOiBwYXJhbXMsIGlzRHluYW1pYzogISFuYW1lcy5sZW5ndGggfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gJCRyb3V0ZSRyZWNvZ25pemVyJCRhZGRTZWdtZW50KGN1cnJlbnRTdGF0ZSwgc2VnbWVudCkge1xuICAgICAgc2VnbWVudC5lYWNoQ2hhcihmdW5jdGlvbihjaCkge1xuICAgICAgICB2YXIgc3RhdGU7XG5cbiAgICAgICAgY3VycmVudFN0YXRlID0gY3VycmVudFN0YXRlLnB1dChjaCk7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIGN1cnJlbnRTdGF0ZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiAkJHJvdXRlJHJlY29nbml6ZXIkJGRlY29kZVF1ZXJ5UGFyYW1QYXJ0KHBhcnQpIHtcbiAgICAgIC8vIGh0dHA6Ly93d3cudzMub3JnL1RSL2h0bWw0MDEvaW50ZXJhY3QvZm9ybXMuaHRtbCNoLTE3LjEzLjQuMVxuICAgICAgcGFydCA9IHBhcnQucmVwbGFjZSgvXFwrL2dtLCAnJTIwJyk7XG4gICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcnQpO1xuICAgIH1cblxuICAgIC8vIFRoZSBtYWluIGludGVyZmFjZVxuXG4gICAgdmFyICQkcm91dGUkcmVjb2duaXplciQkUm91dGVSZWNvZ25pemVyID0gZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLnJvb3RTdGF0ZSA9IG5ldyAkJHJvdXRlJHJlY29nbml6ZXIkJFN0YXRlKCk7XG4gICAgICB0aGlzLm5hbWVzID0ge307XG4gICAgfTtcblxuXG4gICAgJCRyb3V0ZSRyZWNvZ25pemVyJCRSb3V0ZVJlY29nbml6ZXIucHJvdG90eXBlID0ge1xuICAgICAgYWRkOiBmdW5jdGlvbihyb3V0ZXMsIG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRTdGF0ZSA9IHRoaXMucm9vdFN0YXRlLCByZWdleCA9IFwiXlwiLFxuICAgICAgICAgICAgc3BlY2lmaWNpdHkgPSB7fSxcbiAgICAgICAgICAgIGhhbmRsZXJzID0gW10sIGFsbFNlZ21lbnRzID0gW10sIG5hbWU7XG5cbiAgICAgICAgdmFyIGlzRW1wdHkgPSB0cnVlO1xuXG4gICAgICAgIGZvciAodmFyIGk9MCwgbD1yb3V0ZXMubGVuZ3RoOyBpPGw7IGkrKykge1xuICAgICAgICAgIHZhciByb3V0ZSA9IHJvdXRlc1tpXSwgbmFtZXMgPSBbXTtcblxuICAgICAgICAgIHZhciBzZWdtZW50cyA9ICQkcm91dGUkcmVjb2duaXplciQkcGFyc2Uocm91dGUucGF0aCwgbmFtZXMsIHNwZWNpZmljaXR5KTtcblxuICAgICAgICAgIGFsbFNlZ21lbnRzID0gYWxsU2VnbWVudHMuY29uY2F0KHNlZ21lbnRzKTtcblxuICAgICAgICAgIGZvciAodmFyIGo9MCwgbT1zZWdtZW50cy5sZW5ndGg7IGo8bTsgaisrKSB7XG4gICAgICAgICAgICB2YXIgc2VnbWVudCA9IHNlZ21lbnRzW2pdO1xuXG4gICAgICAgICAgICBpZiAoc2VnbWVudCBpbnN0YW5jZW9mICQkcm91dGUkcmVjb2duaXplciQkRXBzaWxvblNlZ21lbnQpIHsgY29udGludWU7IH1cblxuICAgICAgICAgICAgaXNFbXB0eSA9IGZhbHNlO1xuXG4gICAgICAgICAgICAvLyBBZGQgYSBcIi9cIiBmb3IgdGhlIG5ldyBzZWdtZW50XG4gICAgICAgICAgICBjdXJyZW50U3RhdGUgPSBjdXJyZW50U3RhdGUucHV0KHsgdmFsaWRDaGFyczogXCIvXCIgfSk7XG4gICAgICAgICAgICByZWdleCArPSBcIi9cIjtcblxuICAgICAgICAgICAgLy8gQWRkIGEgcmVwcmVzZW50YXRpb24gb2YgdGhlIHNlZ21lbnQgdG8gdGhlIE5GQSBhbmQgcmVnZXhcbiAgICAgICAgICAgIGN1cnJlbnRTdGF0ZSA9ICQkcm91dGUkcmVjb2duaXplciQkYWRkU2VnbWVudChjdXJyZW50U3RhdGUsIHNlZ21lbnQpO1xuICAgICAgICAgICAgcmVnZXggKz0gc2VnbWVudC5yZWdleCgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBoYW5kbGVyID0geyBoYW5kbGVyOiByb3V0ZS5oYW5kbGVyLCBuYW1lczogbmFtZXMgfTtcbiAgICAgICAgICBoYW5kbGVycy5wdXNoKGhhbmRsZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzRW1wdHkpIHtcbiAgICAgICAgICBjdXJyZW50U3RhdGUgPSBjdXJyZW50U3RhdGUucHV0KHsgdmFsaWRDaGFyczogXCIvXCIgfSk7XG4gICAgICAgICAgcmVnZXggKz0gXCIvXCI7XG4gICAgICAgIH1cblxuICAgICAgICBjdXJyZW50U3RhdGUuaGFuZGxlcnMgPSBoYW5kbGVycztcbiAgICAgICAgY3VycmVudFN0YXRlLnJlZ2V4ID0gbmV3IFJlZ0V4cChyZWdleCArIFwiJFwiKTtcbiAgICAgICAgY3VycmVudFN0YXRlLnNwZWNpZmljaXR5ID0gc3BlY2lmaWNpdHk7XG5cbiAgICAgICAgaWYgKG5hbWUgPSBvcHRpb25zICYmIG9wdGlvbnMuYXMpIHtcbiAgICAgICAgICB0aGlzLm5hbWVzW25hbWVdID0ge1xuICAgICAgICAgICAgc2VnbWVudHM6IGFsbFNlZ21lbnRzLFxuICAgICAgICAgICAgaGFuZGxlcnM6IGhhbmRsZXJzXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgaGFuZGxlcnNGb3I6IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgdmFyIHJvdXRlID0gdGhpcy5uYW1lc1tuYW1lXSwgcmVzdWx0ID0gW107XG4gICAgICAgIGlmICghcm91dGUpIHsgdGhyb3cgbmV3IEVycm9yKFwiVGhlcmUgaXMgbm8gcm91dGUgbmFtZWQgXCIgKyBuYW1lKTsgfVxuXG4gICAgICAgIGZvciAodmFyIGk9MCwgbD1yb3V0ZS5oYW5kbGVycy5sZW5ndGg7IGk8bDsgaSsrKSB7XG4gICAgICAgICAgcmVzdWx0LnB1c2gocm91dGUuaGFuZGxlcnNbaV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH0sXG5cbiAgICAgIGhhc1JvdXRlOiBmdW5jdGlvbihuYW1lKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMubmFtZXNbbmFtZV07XG4gICAgICB9LFxuXG4gICAgICBnZW5lcmF0ZTogZnVuY3Rpb24obmFtZSwgcGFyYW1zKSB7XG4gICAgICAgIHZhciByb3V0ZSA9IHRoaXMubmFtZXNbbmFtZV0sIG91dHB1dCA9IFwiXCI7XG4gICAgICAgIGlmICghcm91dGUpIHsgdGhyb3cgbmV3IEVycm9yKFwiVGhlcmUgaXMgbm8gcm91dGUgbmFtZWQgXCIgKyBuYW1lKTsgfVxuXG4gICAgICAgIHZhciBzZWdtZW50cyA9IHJvdXRlLnNlZ21lbnRzO1xuXG4gICAgICAgIGZvciAodmFyIGk9MCwgbD1zZWdtZW50cy5sZW5ndGg7IGk8bDsgaSsrKSB7XG4gICAgICAgICAgdmFyIHNlZ21lbnQgPSBzZWdtZW50c1tpXTtcblxuICAgICAgICAgIGlmIChzZWdtZW50IGluc3RhbmNlb2YgJCRyb3V0ZSRyZWNvZ25pemVyJCRFcHNpbG9uU2VnbWVudCkgeyBjb250aW51ZTsgfVxuXG4gICAgICAgICAgb3V0cHV0ICs9IFwiL1wiO1xuICAgICAgICAgIG91dHB1dCArPSBzZWdtZW50LmdlbmVyYXRlKHBhcmFtcyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3V0cHV0LmNoYXJBdCgwKSAhPT0gJy8nKSB7IG91dHB1dCA9ICcvJyArIG91dHB1dDsgfVxuXG4gICAgICAgIGlmIChwYXJhbXMgJiYgcGFyYW1zLnF1ZXJ5UGFyYW1zKSB7XG4gICAgICAgICAgb3V0cHV0ICs9IHRoaXMuZ2VuZXJhdGVRdWVyeVN0cmluZyhwYXJhbXMucXVlcnlQYXJhbXMsIHJvdXRlLmhhbmRsZXJzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgICB9LFxuXG4gICAgICBnZW5lcmF0ZVF1ZXJ5U3RyaW5nOiBmdW5jdGlvbihwYXJhbXMsIGhhbmRsZXJzKSB7XG4gICAgICAgIHZhciBwYWlycyA9IFtdO1xuICAgICAgICB2YXIga2V5cyA9IFtdO1xuICAgICAgICBmb3IodmFyIGtleSBpbiBwYXJhbXMpIHtcbiAgICAgICAgICBpZiAocGFyYW1zLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIGtleXMucHVzaChrZXkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBrZXlzLnNvcnQoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGtleXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICBrZXkgPSBrZXlzW2ldO1xuICAgICAgICAgIHZhciB2YWx1ZSA9IHBhcmFtc1trZXldO1xuICAgICAgICAgIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIHBhaXIgPSBlbmNvZGVVUklDb21wb25lbnQoa2V5KTtcbiAgICAgICAgICBpZiAoJCRyb3V0ZSRyZWNvZ25pemVyJCRpc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDAsIGwgPSB2YWx1ZS5sZW5ndGg7IGogPCBsOyBqKyspIHtcbiAgICAgICAgICAgICAgdmFyIGFycmF5UGFpciA9IGtleSArICdbXScgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQodmFsdWVbal0pO1xuICAgICAgICAgICAgICBwYWlycy5wdXNoKGFycmF5UGFpcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhaXIgKz0gXCI9XCIgKyBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpO1xuICAgICAgICAgICAgcGFpcnMucHVzaChwYWlyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFpcnMubGVuZ3RoID09PSAwKSB7IHJldHVybiAnJzsgfVxuXG4gICAgICAgIHJldHVybiBcIj9cIiArIHBhaXJzLmpvaW4oXCImXCIpO1xuICAgICAgfSxcblxuICAgICAgcGFyc2VRdWVyeVN0cmluZzogZnVuY3Rpb24ocXVlcnlTdHJpbmcpIHtcbiAgICAgICAgdmFyIHBhaXJzID0gcXVlcnlTdHJpbmcuc3BsaXQoXCImXCIpLCBxdWVyeVBhcmFtcyA9IHt9O1xuICAgICAgICBmb3IodmFyIGk9MDsgaSA8IHBhaXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdmFyIHBhaXIgICAgICA9IHBhaXJzW2ldLnNwbGl0KCc9JyksXG4gICAgICAgICAgICAgIGtleSAgICAgICA9ICQkcm91dGUkcmVjb2duaXplciQkZGVjb2RlUXVlcnlQYXJhbVBhcnQocGFpclswXSksXG4gICAgICAgICAgICAgIGtleUxlbmd0aCA9IGtleS5sZW5ndGgsXG4gICAgICAgICAgICAgIGlzQXJyYXkgPSBmYWxzZSxcbiAgICAgICAgICAgICAgdmFsdWU7XG4gICAgICAgICAgaWYgKHBhaXIubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICB2YWx1ZSA9ICd0cnVlJztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy9IYW5kbGUgYXJyYXlzXG4gICAgICAgICAgICBpZiAoa2V5TGVuZ3RoID4gMiAmJiBrZXkuc2xpY2Uoa2V5TGVuZ3RoIC0yKSA9PT0gJ1tdJykge1xuICAgICAgICAgICAgICBpc0FycmF5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAga2V5ID0ga2V5LnNsaWNlKDAsIGtleUxlbmd0aCAtIDIpO1xuICAgICAgICAgICAgICBpZighcXVlcnlQYXJhbXNba2V5XSkge1xuICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zW2tleV0gPSBbXTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFsdWUgPSBwYWlyWzFdID8gJCRyb3V0ZSRyZWNvZ25pemVyJCRkZWNvZGVRdWVyeVBhcmFtUGFydChwYWlyWzFdKSA6ICcnO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaXNBcnJheSkge1xuICAgICAgICAgICAgcXVlcnlQYXJhbXNba2V5XS5wdXNoKHZhbHVlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcXVlcnlQYXJhbXNba2V5XSA9IHZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcXVlcnlQYXJhbXM7XG4gICAgICB9LFxuXG4gICAgICByZWNvZ25pemU6IGZ1bmN0aW9uKHBhdGgpIHtcbiAgICAgICAgdmFyIHN0YXRlcyA9IFsgdGhpcy5yb290U3RhdGUgXSxcbiAgICAgICAgICAgIHBhdGhMZW4sIGksIGwsIHF1ZXJ5U3RhcnQsIHF1ZXJ5UGFyYW1zID0ge30sXG4gICAgICAgICAgICBpc1NsYXNoRHJvcHBlZCA9IGZhbHNlO1xuXG4gICAgICAgIHF1ZXJ5U3RhcnQgPSBwYXRoLmluZGV4T2YoJz8nKTtcbiAgICAgICAgaWYgKHF1ZXJ5U3RhcnQgIT09IC0xKSB7XG4gICAgICAgICAgdmFyIHF1ZXJ5U3RyaW5nID0gcGF0aC5zdWJzdHIocXVlcnlTdGFydCArIDEsIHBhdGgubGVuZ3RoKTtcbiAgICAgICAgICBwYXRoID0gcGF0aC5zdWJzdHIoMCwgcXVlcnlTdGFydCk7XG4gICAgICAgICAgcXVlcnlQYXJhbXMgPSB0aGlzLnBhcnNlUXVlcnlTdHJpbmcocXVlcnlTdHJpbmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgcGF0aCA9IGRlY29kZVVSSShwYXRoKTtcblxuICAgICAgICAvLyBERUJVRyBHUk9VUCBwYXRoXG5cbiAgICAgICAgaWYgKHBhdGguY2hhckF0KDApICE9PSBcIi9cIikgeyBwYXRoID0gXCIvXCIgKyBwYXRoOyB9XG5cbiAgICAgICAgcGF0aExlbiA9IHBhdGgubGVuZ3RoO1xuICAgICAgICBpZiAocGF0aExlbiA+IDEgJiYgcGF0aC5jaGFyQXQocGF0aExlbiAtIDEpID09PSBcIi9cIikge1xuICAgICAgICAgIHBhdGggPSBwYXRoLnN1YnN0cigwLCBwYXRoTGVuIC0gMSk7XG4gICAgICAgICAgaXNTbGFzaERyb3BwZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChpPTAsIGw9cGF0aC5sZW5ndGg7IGk8bDsgaSsrKSB7XG4gICAgICAgICAgc3RhdGVzID0gJCRyb3V0ZSRyZWNvZ25pemVyJCRyZWNvZ25pemVDaGFyKHN0YXRlcywgcGF0aC5jaGFyQXQoaSkpO1xuICAgICAgICAgIGlmICghc3RhdGVzLmxlbmd0aCkgeyBicmVhazsgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gRU5EIERFQlVHIEdST1VQXG5cbiAgICAgICAgdmFyIHNvbHV0aW9ucyA9IFtdO1xuICAgICAgICBmb3IgKGk9MCwgbD1zdGF0ZXMubGVuZ3RoOyBpPGw7IGkrKykge1xuICAgICAgICAgIGlmIChzdGF0ZXNbaV0uaGFuZGxlcnMpIHsgc29sdXRpb25zLnB1c2goc3RhdGVzW2ldKTsgfVxuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGVzID0gJCRyb3V0ZSRyZWNvZ25pemVyJCRzb3J0U29sdXRpb25zKHNvbHV0aW9ucyk7XG5cbiAgICAgICAgdmFyIHN0YXRlID0gc29sdXRpb25zWzBdO1xuXG4gICAgICAgIGlmIChzdGF0ZSAmJiBzdGF0ZS5oYW5kbGVycykge1xuICAgICAgICAgIC8vIGlmIGEgdHJhaWxpbmcgc2xhc2ggd2FzIGRyb3BwZWQgYW5kIGEgc3RhciBzZWdtZW50IGlzIHRoZSBsYXN0IHNlZ21lbnRcbiAgICAgICAgICAvLyBzcGVjaWZpZWQsIHB1dCB0aGUgdHJhaWxpbmcgc2xhc2ggYmFja1xuICAgICAgICAgIGlmIChpc1NsYXNoRHJvcHBlZCAmJiBzdGF0ZS5yZWdleC5zb3VyY2Uuc2xpY2UoLTUpID09PSBcIiguKykkXCIpIHtcbiAgICAgICAgICAgIHBhdGggPSBwYXRoICsgXCIvXCI7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiAkJHJvdXRlJHJlY29nbml6ZXIkJGZpbmRIYW5kbGVyKHN0YXRlLCBwYXRoLCBxdWVyeVBhcmFtcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgJCRyb3V0ZSRyZWNvZ25pemVyJCRSb3V0ZVJlY29nbml6ZXIucHJvdG90eXBlLm1hcCA9ICQkcm91dGUkcmVjb2duaXplciRkc2wkJGRlZmF1bHQ7XG5cbiAgICAkJHJvdXRlJHJlY29nbml6ZXIkJFJvdXRlUmVjb2duaXplci5WRVJTSU9OID0gJzAuMS45JztcblxuICAgIHZhciAkJHJvdXRlJHJlY29nbml6ZXIkJGRlZmF1bHQgPSAkJHJvdXRlJHJlY29nbml6ZXIkJFJvdXRlUmVjb2duaXplcjtcblxuICAgIC8qIGdsb2JhbCBkZWZpbmU6dHJ1ZSBtb2R1bGU6dHJ1ZSB3aW5kb3c6IHRydWUgKi9cbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmVbJ2FtZCddKSB7XG4gICAgICBkZWZpbmUoJ3JvdXRlLXJlY29nbml6ZXInLCBmdW5jdGlvbigpIHsgcmV0dXJuICQkcm91dGUkcmVjb2duaXplciQkZGVmYXVsdDsgfSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGVbJ2V4cG9ydHMnXSkge1xuICAgICAgbW9kdWxlWydleHBvcnRzJ10gPSAkJHJvdXRlJHJlY29nbml6ZXIkJGRlZmF1bHQ7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdGhpcyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXNbJ1JvdXRlUmVjb2duaXplciddID0gJCRyb3V0ZSRyZWNvZ25pemVyJCRkZWZhdWx0O1xuICAgIH1cbn0pLmNhbGwodGhpcyk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlLXJlY29nbml6ZXIuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3V0aWwgPSByZXF1aXJlKCcuLi91dGlsJyk7XG5cbnZhciB0cmFpbGluZ1NsYXNoUkUgPSAvXFwvJC87XG52YXIgcmVnZXhFc2NhcGVSRSA9IC9bLS4qKz9eJHt9KCl8W1xcXVxcL1xcXFxdL2c7XG5cbi8vIGluc3RhbGwgdi1saW5rLCB3aGljaCBwcm92aWRlcyBuYXZpZ2F0aW9uIHN1cHBvcnQgZm9yXG4vLyBIVE1MNSBoaXN0b3J5IG1vZGVcblxuZXhwb3J0c1snZGVmYXVsdCddID0gZnVuY3Rpb24gKFZ1ZSkge1xuXG4gIHZhciBfID0gVnVlLnV0aWw7XG5cbiAgVnVlLmRpcmVjdGl2ZSgnbGluaycsIHtcblxuICAgIGJpbmQ6IGZ1bmN0aW9uIGJpbmQoKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICB2YXIgdm0gPSB0aGlzLnZtO1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICBpZiAoIXZtLiRyb3V0ZSkge1xuICAgICAgICBfdXRpbC53YXJuKCd2LWxpbmsgY2FuIG9ubHkgYmUgdXNlZCBpbnNpZGUgYSAnICsgJ3JvdXRlci1lbmFibGVkIGFwcC4nKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIHJvdXRlciA9IHZtLiRyb3V0ZS5yb3V0ZXI7XG4gICAgICB0aGlzLmhhbmRsZXIgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAvLyBkb24ndCByZWRpcmVjdCB3aXRoIGNvbnRyb2wga2V5c1xuICAgICAgICBpZiAoZS5tZXRhS2V5IHx8IGUuY3RybEtleSB8fCBlLnNoaWZ0S2V5KSByZXR1cm47XG4gICAgICAgIC8vIGRvbid0IHJlZGlyZWN0IHdoZW4gcHJldmVudERlZmF1bHQgY2FsbGVkXG4gICAgICAgIGlmIChlLmRlZmF1bHRQcmV2ZW50ZWQpIHJldHVybjtcbiAgICAgICAgLy8gZG9uJ3QgcmVkaXJlY3Qgb24gcmlnaHQgY2xpY2tcbiAgICAgICAgaWYgKGUuYnV0dG9uICE9PSAwKSByZXR1cm47XG5cbiAgICAgICAgdmFyIHRhcmdldCA9IF90aGlzLnRhcmdldDtcbiAgICAgICAgdmFyIGdvID0gZnVuY3Rpb24gZ28odGFyZ2V0KSB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGlmICh0YXJnZXQgIT0gbnVsbCkge1xuICAgICAgICAgICAgcm91dGVyLmdvKHRhcmdldCk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChfdGhpcy5lbC50YWdOYW1lID09PSAnQScgfHwgZS50YXJnZXQgPT09IF90aGlzLmVsKSB7XG4gICAgICAgICAgLy8gdi1saW5rIG9uIDxhIHYtbGluaz1cIidwYXRoJ1wiPlxuICAgICAgICAgIGdvKHRhcmdldCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gdi1saW5rIGRlbGVnYXRlIG9uIDxkaXYgdi1saW5rPlxuICAgICAgICAgIHZhciBlbCA9IGUudGFyZ2V0O1xuICAgICAgICAgIHdoaWxlIChlbCAmJiBlbC50YWdOYW1lICE9PSAnQScgJiYgZWwgIT09IF90aGlzLmVsKSB7XG4gICAgICAgICAgICBlbCA9IGVsLnBhcmVudE5vZGU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghZWwpIHJldHVybjtcbiAgICAgICAgICBpZiAoZWwudGFnTmFtZSAhPT0gJ0EnIHx8ICFlbC5ocmVmKSB7XG4gICAgICAgICAgICAvLyBhbGxvdyBub3QgYW5jaG9yXG4gICAgICAgICAgICBnbyh0YXJnZXQpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoc2FtZU9yaWdpbihlbCkpIHtcbiAgICAgICAgICAgIGdvKHtcbiAgICAgICAgICAgICAgcGF0aDogZWwucGF0aG5hbWUsXG4gICAgICAgICAgICAgIHJlcGxhY2U6IHRhcmdldCAmJiB0YXJnZXQucmVwbGFjZSxcbiAgICAgICAgICAgICAgYXBwZW5kOiB0YXJnZXQgJiYgdGFyZ2V0LmFwcGVuZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlcik7XG4gICAgICAvLyBtYW5hZ2UgYWN0aXZlIGxpbmsgY2xhc3NcbiAgICAgIHRoaXMudW53YXRjaCA9IHZtLiR3YXRjaCgnJHJvdXRlLnBhdGgnLCBfLmJpbmQodGhpcy51cGRhdGVDbGFzc2VzLCB0aGlzKSk7XG4gICAgfSxcblxuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKHBhdGgpIHtcbiAgICAgIHZhciByb3V0ZXIgPSB0aGlzLnZtLiRyb3V0ZS5yb3V0ZXI7XG4gICAgICB2YXIgYXBwZW5kID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy50YXJnZXQgPSBwYXRoO1xuICAgICAgaWYgKF8uaXNPYmplY3QocGF0aCkpIHtcbiAgICAgICAgYXBwZW5kID0gcGF0aC5hcHBlbmQ7XG4gICAgICAgIHRoaXMuZXhhY3QgPSBwYXRoLmV4YWN0O1xuICAgICAgICB0aGlzLnByZXZBY3RpdmVDbGFzcyA9IHRoaXMuYWN0aXZlQ2xhc3M7XG4gICAgICAgIHRoaXMuYWN0aXZlQ2xhc3MgPSBwYXRoLmFjdGl2ZUNsYXNzO1xuICAgICAgfVxuICAgICAgcGF0aCA9IHRoaXMucGF0aCA9IHJvdXRlci5fc3RyaW5naWZ5UGF0aChwYXRoKTtcbiAgICAgIHRoaXMuYWN0aXZlUkUgPSBwYXRoICYmICF0aGlzLmV4YWN0ID8gbmV3IFJlZ0V4cCgnXicgKyBwYXRoLnJlcGxhY2UoL1xcLyQvLCAnJykucmVwbGFjZShyZWdleEVzY2FwZVJFLCAnXFxcXCQmJykgKyAnKFxcXFwvfCQpJykgOiBudWxsO1xuICAgICAgdGhpcy51cGRhdGVDbGFzc2VzKHRoaXMudm0uJHJvdXRlLnBhdGgpO1xuICAgICAgdmFyIGlzQWJzb2x1dGUgPSBwYXRoLmNoYXJBdCgwKSA9PT0gJy8nO1xuICAgICAgLy8gZG8gbm90IGZvcm1hdCBub24taGFzaCByZWxhdGl2ZSBwYXRoc1xuICAgICAgdmFyIGhyZWYgPSBwYXRoICYmIChyb3V0ZXIubW9kZSA9PT0gJ2hhc2gnIHx8IGlzQWJzb2x1dGUpID8gcm91dGVyLmhpc3RvcnkuZm9ybWF0UGF0aChwYXRoLCBhcHBlbmQpIDogcGF0aDtcbiAgICAgIGlmICh0aGlzLmVsLnRhZ05hbWUgPT09ICdBJykge1xuICAgICAgICBpZiAoaHJlZikge1xuICAgICAgICAgIHRoaXMuZWwuaHJlZiA9IGhyZWY7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5lbC5yZW1vdmVBdHRyaWJ1dGUoJ2hyZWYnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICB1cGRhdGVDbGFzc2VzOiBmdW5jdGlvbiB1cGRhdGVDbGFzc2VzKHBhdGgpIHtcbiAgICAgIHZhciBlbCA9IHRoaXMuZWw7XG4gICAgICB2YXIgZGVzdCA9IHRoaXMucGF0aDtcbiAgICAgIHZhciByb3V0ZXIgPSB0aGlzLnZtLiRyb3V0ZS5yb3V0ZXI7XG4gICAgICB2YXIgYWN0aXZlQ2xhc3MgPSB0aGlzLmFjdGl2ZUNsYXNzIHx8IHJvdXRlci5fbGlua0FjdGl2ZUNsYXNzO1xuICAgICAgLy8gY2xlYXIgb2xkIGNsYXNzXG4gICAgICBpZiAodGhpcy5wcmV2QWN0aXZlQ2xhc3MgIT09IGFjdGl2ZUNsYXNzKSB7XG4gICAgICAgIF8ucmVtb3ZlQ2xhc3MoZWwsIHRoaXMucHJldkFjdGl2ZUNsYXNzKTtcbiAgICAgIH1cbiAgICAgIC8vIGFkZCBuZXcgY2xhc3NcbiAgICAgIGlmICh0aGlzLmV4YWN0KSB7XG4gICAgICAgIGlmIChkZXN0ID09PSBwYXRoIHx8XG4gICAgICAgIC8vIGFsc28gYWxsb3cgYWRkaXRpb25hbCB0cmFpbGluZyBzbGFzaFxuICAgICAgICBkZXN0LmNoYXJBdChkZXN0Lmxlbmd0aCAtIDEpICE9PSAnLycgJiYgZGVzdCA9PT0gcGF0aC5yZXBsYWNlKHRyYWlsaW5nU2xhc2hSRSwgJycpKSB7XG4gICAgICAgICAgXy5hZGRDbGFzcyhlbCwgYWN0aXZlQ2xhc3MpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF8ucmVtb3ZlQ2xhc3MoZWwsIGFjdGl2ZUNsYXNzKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlUkUgJiYgdGhpcy5hY3RpdmVSRS50ZXN0KHBhdGgpKSB7XG4gICAgICAgICAgXy5hZGRDbGFzcyhlbCwgYWN0aXZlQ2xhc3MpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF8ucmVtb3ZlQ2xhc3MoZWwsIGFjdGl2ZUNsYXNzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICB1bmJpbmQ6IGZ1bmN0aW9uIHVuYmluZCgpIHtcbiAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZXIpO1xuICAgICAgdGhpcy51bndhdGNoICYmIHRoaXMudW53YXRjaCgpO1xuICAgIH1cbiAgfSk7XG5cbiAgZnVuY3Rpb24gc2FtZU9yaWdpbihsaW5rKSB7XG4gICAgcmV0dXJuIGxpbmsucHJvdG9jb2wgPT09IGxvY2F0aW9uLnByb3RvY29sICYmIGxpbmsuaG9zdG5hbWUgPT09IGxvY2F0aW9uLmhvc3RuYW1lICYmIGxpbmsucG9ydCA9PT0gbG9jYXRpb24ucG9ydDtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3V0aWwgPSByZXF1aXJlKCcuLi91dGlsJyk7XG5cbnZhciBfcGlwZWxpbmUgPSByZXF1aXJlKCcuLi9waXBlbGluZScpO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBmdW5jdGlvbiAoVnVlKSB7XG5cbiAgdmFyIF8gPSBWdWUudXRpbDtcbiAgdmFyIGNvbXBvbmVudERlZiA9XG4gIC8vIDAuMTJcbiAgVnVlLmRpcmVjdGl2ZSgnX2NvbXBvbmVudCcpIHx8XG4gIC8vIDEuMFxuICBWdWUuaW50ZXJuYWxEaXJlY3RpdmVzLmNvbXBvbmVudDtcbiAgLy8gPHJvdXRlci12aWV3PiBleHRlbmRzIHRoZSBpbnRlcm5hbCBjb21wb25lbnQgZGlyZWN0aXZlXG4gIHZhciB2aWV3RGVmID0gXy5leHRlbmQoe30sIGNvbXBvbmVudERlZik7XG5cbiAgLy8gd2l0aCBzb21lIG92ZXJyaWRlc1xuICBfLmV4dGVuZCh2aWV3RGVmLCB7XG5cbiAgICBfaXNSb3V0ZXJWaWV3OiB0cnVlLFxuXG4gICAgYmluZDogZnVuY3Rpb24gYmluZCgpIHtcbiAgICAgIHZhciByb3V0ZSA9IHRoaXMudm0uJHJvdXRlO1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICBpZiAoIXJvdXRlKSB7XG4gICAgICAgIF91dGlsLndhcm4oJzxyb3V0ZXItdmlldz4gY2FuIG9ubHkgYmUgdXNlZCBpbnNpZGUgYSAnICsgJ3JvdXRlci1lbmFibGVkIGFwcC4nKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLy8gZm9yY2UgZHluYW1pYyBkaXJlY3RpdmUgc28gdi1jb21wb25lbnQgZG9lc24ndFxuICAgICAgLy8gYXR0ZW1wdCB0byBidWlsZCByaWdodCBub3dcbiAgICAgIHRoaXMuX2lzRHluYW1pY0xpdGVyYWwgPSB0cnVlO1xuICAgICAgLy8gZmluYWxseSwgaW5pdCBieSBkZWxlZ2F0aW5nIHRvIHYtY29tcG9uZW50XG4gICAgICBjb21wb25lbnREZWYuYmluZC5jYWxsKHRoaXMpO1xuXG4gICAgICAvLyBhbGwgd2UgbmVlZCB0byBkbyBoZXJlIGlzIHJlZ2lzdGVyaW5nIHRoaXMgdmlld1xuICAgICAgLy8gaW4gdGhlIHJvdXRlci4gYWN0dWFsIGNvbXBvbmVudCBzd2l0Y2hpbmcgd2lsbCBiZVxuICAgICAgLy8gbWFuYWdlZCBieSB0aGUgcGlwZWxpbmUuXG4gICAgICB2YXIgcm91dGVyID0gdGhpcy5yb3V0ZXIgPSByb3V0ZS5yb3V0ZXI7XG4gICAgICByb3V0ZXIuX3ZpZXdzLnVuc2hpZnQodGhpcyk7XG5cbiAgICAgIC8vIG5vdGUgdGhlIHZpZXdzIGFyZSBpbiByZXZlcnNlIG9yZGVyLlxuICAgICAgdmFyIHBhcmVudFZpZXcgPSByb3V0ZXIuX3ZpZXdzWzFdO1xuICAgICAgaWYgKHBhcmVudFZpZXcpIHtcbiAgICAgICAgLy8gcmVnaXN0ZXIgc2VsZiBhcyBhIGNoaWxkIG9mIHRoZSBwYXJlbnQgdmlldyxcbiAgICAgICAgLy8gaW5zdGVhZCBvZiBhY3RpdmF0aW5nIG5vdy4gVGhpcyBpcyBzbyB0aGF0IHRoZVxuICAgICAgICAvLyBjaGlsZCdzIGFjdGl2YXRlIGhvb2sgaXMgY2FsbGVkIGFmdGVyIHRoZVxuICAgICAgICAvLyBwYXJlbnQncyBoYXMgcmVzb2x2ZWQuXG4gICAgICAgIHBhcmVudFZpZXcuY2hpbGRWaWV3ID0gdGhpcztcbiAgICAgIH1cblxuICAgICAgLy8gaGFuZGxlIGxhdGUtcmVuZGVyZWQgdmlld1xuICAgICAgLy8gdHdvIHBvc3NpYmlsaXRpZXM6XG4gICAgICAvLyAxLiByb290IHZpZXcgcmVuZGVyZWQgYWZ0ZXIgdHJhbnNpdGlvbiBoYXMgYmVlblxuICAgICAgLy8gICAgdmFsaWRhdGVkO1xuICAgICAgLy8gMi4gY2hpbGQgdmlldyByZW5kZXJlZCBhZnRlciBwYXJlbnQgdmlldyBoYXMgYmVlblxuICAgICAgLy8gICAgYWN0aXZhdGVkLlxuICAgICAgdmFyIHRyYW5zaXRpb24gPSByb3V0ZS5yb3V0ZXIuX2N1cnJlbnRUcmFuc2l0aW9uO1xuICAgICAgaWYgKCFwYXJlbnRWaWV3ICYmIHRyYW5zaXRpb24uZG9uZSB8fCBwYXJlbnRWaWV3ICYmIHBhcmVudFZpZXcuYWN0aXZhdGVkKSB7XG4gICAgICAgIHZhciBkZXB0aCA9IHBhcmVudFZpZXcgPyBwYXJlbnRWaWV3LmRlcHRoICsgMSA6IDA7XG4gICAgICAgIF9waXBlbGluZS5hY3RpdmF0ZSh0aGlzLCB0cmFuc2l0aW9uLCBkZXB0aCk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIHVuYmluZDogZnVuY3Rpb24gdW5iaW5kKCkge1xuICAgICAgdGhpcy5yb3V0ZXIuX3ZpZXdzLiRyZW1vdmUodGhpcyk7XG4gICAgICBjb21wb25lbnREZWYudW5iaW5kLmNhbGwodGhpcyk7XG4gICAgfVxuICB9KTtcblxuICBWdWUuZWxlbWVudERpcmVjdGl2ZSgncm91dGVyLXZpZXcnLCB2aWV3RGVmKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9jbGFzc0NhbGxDaGVjayA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzcy1jYWxsLWNoZWNrJylbJ2RlZmF1bHQnXTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF91dGlsID0gcmVxdWlyZSgnLi4vdXRpbCcpO1xuXG52YXIgQWJzdHJhY3RIaXN0b3J5ID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gQWJzdHJhY3RIaXN0b3J5KF9yZWYpIHtcbiAgICB2YXIgb25DaGFuZ2UgPSBfcmVmLm9uQ2hhbmdlO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEFic3RyYWN0SGlzdG9yeSk7XG5cbiAgICB0aGlzLm9uQ2hhbmdlID0gb25DaGFuZ2U7XG4gICAgdGhpcy5jdXJyZW50UGF0aCA9ICcvJztcbiAgfVxuXG4gIEFic3RyYWN0SGlzdG9yeS5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICB0aGlzLm9uQ2hhbmdlKCcvJyk7XG4gIH07XG5cbiAgQWJzdHJhY3RIaXN0b3J5LnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gc3RvcCgpIHtcbiAgICAvLyBub29wXG4gIH07XG5cbiAgQWJzdHJhY3RIaXN0b3J5LnByb3RvdHlwZS5nbyA9IGZ1bmN0aW9uIGdvKHBhdGgsIHJlcGxhY2UsIGFwcGVuZCkge1xuICAgIHBhdGggPSB0aGlzLmN1cnJlbnRQYXRoID0gdGhpcy5mb3JtYXRQYXRoKHBhdGgsIGFwcGVuZCk7XG4gICAgdGhpcy5vbkNoYW5nZShwYXRoKTtcbiAgfTtcblxuICBBYnN0cmFjdEhpc3RvcnkucHJvdG90eXBlLmZvcm1hdFBhdGggPSBmdW5jdGlvbiBmb3JtYXRQYXRoKHBhdGgsIGFwcGVuZCkge1xuICAgIHJldHVybiBwYXRoLmNoYXJBdCgwKSA9PT0gJy8nID8gcGF0aCA6IF91dGlsLnJlc29sdmVQYXRoKHRoaXMuY3VycmVudFBhdGgsIHBhdGgsIGFwcGVuZCk7XG4gIH07XG5cbiAgcmV0dXJuIEFic3RyYWN0SGlzdG9yeTtcbn0pKCk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IEFic3RyYWN0SGlzdG9yeTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9jbGFzc0NhbGxDaGVjayA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzcy1jYWxsLWNoZWNrJylbJ2RlZmF1bHQnXTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF91dGlsID0gcmVxdWlyZSgnLi4vdXRpbCcpO1xuXG52YXIgSGFzaEhpc3RvcnkgPSAoZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBIYXNoSGlzdG9yeShfcmVmKSB7XG4gICAgdmFyIGhhc2hiYW5nID0gX3JlZi5oYXNoYmFuZztcbiAgICB2YXIgb25DaGFuZ2UgPSBfcmVmLm9uQ2hhbmdlO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEhhc2hIaXN0b3J5KTtcblxuICAgIHRoaXMuaGFzaGJhbmcgPSBoYXNoYmFuZztcbiAgICB0aGlzLm9uQ2hhbmdlID0gb25DaGFuZ2U7XG4gIH1cblxuICBIYXNoSGlzdG9yeS5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdGhpcy5saXN0ZW5lciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBwYXRoID0gbG9jYXRpb24uaGFzaDtcbiAgICAgIHZhciByYXcgPSBwYXRoLnJlcGxhY2UoL14jIT8vLCAnJyk7XG4gICAgICAvLyBhbHdheXNcbiAgICAgIGlmIChyYXcuY2hhckF0KDApICE9PSAnLycpIHtcbiAgICAgICAgcmF3ID0gJy8nICsgcmF3O1xuICAgICAgfVxuICAgICAgdmFyIGZvcm1hdHRlZFBhdGggPSBzZWxmLmZvcm1hdFBhdGgocmF3KTtcbiAgICAgIGlmIChmb3JtYXR0ZWRQYXRoICE9PSBwYXRoKSB7XG4gICAgICAgIGxvY2F0aW9uLnJlcGxhY2UoZm9ybWF0dGVkUGF0aCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBwYXRoVG9NYXRjaCA9IGRlY29kZVVSSShwYXRoLnJlcGxhY2UoL14jIT8vLCAnJykgKyBsb2NhdGlvbi5zZWFyY2gpO1xuICAgICAgc2VsZi5vbkNoYW5nZShwYXRoVG9NYXRjaCk7XG4gICAgfTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsIHRoaXMubGlzdGVuZXIpO1xuICAgIHRoaXMubGlzdGVuZXIoKTtcbiAgfTtcblxuICBIYXNoSGlzdG9yeS5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCB0aGlzLmxpc3RlbmVyKTtcbiAgfTtcblxuICBIYXNoSGlzdG9yeS5wcm90b3R5cGUuZ28gPSBmdW5jdGlvbiBnbyhwYXRoLCByZXBsYWNlLCBhcHBlbmQpIHtcbiAgICBwYXRoID0gdGhpcy5mb3JtYXRQYXRoKHBhdGgsIGFwcGVuZCk7XG4gICAgaWYgKHJlcGxhY2UpIHtcbiAgICAgIGxvY2F0aW9uLnJlcGxhY2UocGF0aCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxvY2F0aW9uLmhhc2ggPSBwYXRoO1xuICAgIH1cbiAgfTtcblxuICBIYXNoSGlzdG9yeS5wcm90b3R5cGUuZm9ybWF0UGF0aCA9IGZ1bmN0aW9uIGZvcm1hdFBhdGgocGF0aCwgYXBwZW5kKSB7XG4gICAgdmFyIGlzQWJzb2xvdXRlID0gcGF0aC5jaGFyQXQoMCkgPT09ICcvJztcbiAgICB2YXIgcHJlZml4ID0gJyMnICsgKHRoaXMuaGFzaGJhbmcgPyAnIScgOiAnJyk7XG4gICAgcmV0dXJuIGlzQWJzb2xvdXRlID8gcHJlZml4ICsgcGF0aCA6IHByZWZpeCArIF91dGlsLnJlc29sdmVQYXRoKGxvY2F0aW9uLmhhc2gucmVwbGFjZSgvXiMhPy8sICcnKSwgcGF0aCwgYXBwZW5kKTtcbiAgfTtcblxuICByZXR1cm4gSGFzaEhpc3Rvcnk7XG59KSgpO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBIYXNoSGlzdG9yeTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9jbGFzc0NhbGxDaGVjayA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzcy1jYWxsLWNoZWNrJylbJ2RlZmF1bHQnXTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF91dGlsID0gcmVxdWlyZSgnLi4vdXRpbCcpO1xuXG52YXIgaGFzaFJFID0gLyMuKiQvO1xuXG52YXIgSFRNTDVIaXN0b3J5ID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gSFRNTDVIaXN0b3J5KF9yZWYpIHtcbiAgICB2YXIgcm9vdCA9IF9yZWYucm9vdDtcbiAgICB2YXIgb25DaGFuZ2UgPSBfcmVmLm9uQ2hhbmdlO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEhUTUw1SGlzdG9yeSk7XG5cbiAgICBpZiAocm9vdCkge1xuICAgICAgLy8gbWFrZSBzdXJlIHRoZXJlJ3MgdGhlIHN0YXJ0aW5nIHNsYXNoXG4gICAgICBpZiAocm9vdC5jaGFyQXQoMCkgIT09ICcvJykge1xuICAgICAgICByb290ID0gJy8nICsgcm9vdDtcbiAgICAgIH1cbiAgICAgIC8vIHJlbW92ZSB0cmFpbGluZyBzbGFzaFxuICAgICAgdGhpcy5yb290ID0gcm9vdC5yZXBsYWNlKC9cXC8kLywgJycpO1xuICAgICAgdGhpcy5yb290UkUgPSBuZXcgUmVnRXhwKCdeXFxcXCcgKyB0aGlzLnJvb3QpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJvb3QgPSBudWxsO1xuICAgIH1cbiAgICB0aGlzLm9uQ2hhbmdlID0gb25DaGFuZ2U7XG4gICAgLy8gY2hlY2sgYmFzZSB0YWdcbiAgICB2YXIgYmFzZUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYmFzZScpO1xuICAgIHRoaXMuYmFzZSA9IGJhc2VFbCAmJiBiYXNlRWwuZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gIH1cblxuICBIVE1MNUhpc3RvcnkucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHRoaXMubGlzdGVuZXIgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIHVybCA9IGRlY29kZVVSSShsb2NhdGlvbi5wYXRobmFtZSArIGxvY2F0aW9uLnNlYXJjaCk7XG4gICAgICBpZiAoX3RoaXMucm9vdCkge1xuICAgICAgICB1cmwgPSB1cmwucmVwbGFjZShfdGhpcy5yb290UkUsICcnKTtcbiAgICAgIH1cbiAgICAgIF90aGlzLm9uQ2hhbmdlKHVybCwgZSAmJiBlLnN0YXRlLCBsb2NhdGlvbi5oYXNoKTtcbiAgICB9O1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMubGlzdGVuZXIpO1xuICAgIHRoaXMubGlzdGVuZXIoKTtcbiAgfTtcblxuICBIVE1MNUhpc3RvcnkucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiBzdG9wKCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMubGlzdGVuZXIpO1xuICB9O1xuXG4gIEhUTUw1SGlzdG9yeS5wcm90b3R5cGUuZ28gPSBmdW5jdGlvbiBnbyhwYXRoLCByZXBsYWNlLCBhcHBlbmQpIHtcbiAgICB2YXIgdXJsID0gdGhpcy5mb3JtYXRQYXRoKHBhdGgsIGFwcGVuZCk7XG4gICAgaWYgKHJlcGxhY2UpIHtcbiAgICAgIGhpc3RvcnkucmVwbGFjZVN0YXRlKHt9LCAnJywgdXJsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gcmVjb3JkIHNjcm9sbCBwb3NpdGlvbiBieSByZXBsYWNpbmcgY3VycmVudCBzdGF0ZVxuICAgICAgaGlzdG9yeS5yZXBsYWNlU3RhdGUoe1xuICAgICAgICBwb3M6IHtcbiAgICAgICAgICB4OiB3aW5kb3cucGFnZVhPZmZzZXQsXG4gICAgICAgICAgeTogd2luZG93LnBhZ2VZT2Zmc2V0XG4gICAgICAgIH1cbiAgICAgIH0sICcnKTtcbiAgICAgIC8vIHRoZW4gcHVzaCBuZXcgc3RhdGVcbiAgICAgIGhpc3RvcnkucHVzaFN0YXRlKHt9LCAnJywgdXJsKTtcbiAgICB9XG4gICAgdmFyIGhhc2hNYXRjaCA9IHBhdGgubWF0Y2goaGFzaFJFKTtcbiAgICB2YXIgaGFzaCA9IGhhc2hNYXRjaCAmJiBoYXNoTWF0Y2hbMF07XG4gICAgcGF0aCA9IHVybFxuICAgIC8vIHN0cmlwIGhhc2ggc28gaXQgZG9lc24ndCBtZXNzIHVwIHBhcmFtc1xuICAgIC5yZXBsYWNlKGhhc2hSRSwgJycpXG4gICAgLy8gcmVtb3ZlIHJvb3QgYmVmb3JlIG1hdGNoaW5nXG4gICAgLnJlcGxhY2UodGhpcy5yb290UkUsICcnKTtcbiAgICB0aGlzLm9uQ2hhbmdlKHBhdGgsIG51bGwsIGhhc2gpO1xuICB9O1xuXG4gIEhUTUw1SGlzdG9yeS5wcm90b3R5cGUuZm9ybWF0UGF0aCA9IGZ1bmN0aW9uIGZvcm1hdFBhdGgocGF0aCwgYXBwZW5kKSB7XG4gICAgcmV0dXJuIHBhdGguY2hhckF0KDApID09PSAnLydcbiAgICAvLyBhYnNvbHV0ZSBwYXRoXG4gICAgPyB0aGlzLnJvb3QgPyB0aGlzLnJvb3QgKyAnLycgKyBwYXRoLnJlcGxhY2UoL15cXC8vLCAnJykgOiBwYXRoIDogX3V0aWwucmVzb2x2ZVBhdGgodGhpcy5iYXNlIHx8IGxvY2F0aW9uLnBhdGhuYW1lLCBwYXRoLCBhcHBlbmQpO1xuICB9O1xuXG4gIHJldHVybiBIVE1MNUhpc3Rvcnk7XG59KSgpO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBIVE1MNUhpc3Rvcnk7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2sgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3MtY2FsbC1jaGVjaycpWydkZWZhdWx0J107XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2ludGVyb3AtcmVxdWlyZS1kZWZhdWx0JylbJ2RlZmF1bHQnXTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF91dGlsID0gcmVxdWlyZSgnLi91dGlsJyk7XG5cbnZhciBfdXRpbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsKTtcblxudmFyIF9vdmVycmlkZSA9IHJlcXVpcmUoJy4vb3ZlcnJpZGUnKTtcblxudmFyIF9vdmVycmlkZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vdmVycmlkZSk7XG5cbnZhciBfcm91dGVSZWNvZ25pemVyID0gcmVxdWlyZSgncm91dGUtcmVjb2duaXplcicpO1xuXG52YXIgX3JvdXRlUmVjb2duaXplcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yb3V0ZVJlY29nbml6ZXIpO1xuXG52YXIgX3JvdXRlID0gcmVxdWlyZSgnLi9yb3V0ZScpO1xuXG52YXIgX3JvdXRlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JvdXRlKTtcblxudmFyIF90cmFuc2l0aW9uID0gcmVxdWlyZSgnLi90cmFuc2l0aW9uJyk7XG5cbnZhciBfdHJhbnNpdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2l0aW9uKTtcblxudmFyIF9kaXJlY3RpdmVzVmlldyA9IHJlcXVpcmUoJy4vZGlyZWN0aXZlcy92aWV3Jyk7XG5cbnZhciBfZGlyZWN0aXZlc1ZpZXcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGlyZWN0aXZlc1ZpZXcpO1xuXG52YXIgX2RpcmVjdGl2ZXNMaW5rID0gcmVxdWlyZSgnLi9kaXJlY3RpdmVzL2xpbmsnKTtcblxudmFyIF9kaXJlY3RpdmVzTGluazIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kaXJlY3RpdmVzTGluayk7XG5cbnZhciBfaGlzdG9yeUFic3RyYWN0ID0gcmVxdWlyZSgnLi9oaXN0b3J5L2Fic3RyYWN0Jyk7XG5cbnZhciBfaGlzdG9yeUFic3RyYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hpc3RvcnlBYnN0cmFjdCk7XG5cbnZhciBfaGlzdG9yeUhhc2ggPSByZXF1aXJlKCcuL2hpc3RvcnkvaGFzaCcpO1xuXG52YXIgX2hpc3RvcnlIYXNoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hpc3RvcnlIYXNoKTtcblxudmFyIF9oaXN0b3J5SHRtbDUgPSByZXF1aXJlKCcuL2hpc3RvcnkvaHRtbDUnKTtcblxudmFyIF9oaXN0b3J5SHRtbDUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaGlzdG9yeUh0bWw1KTtcblxudmFyIGhpc3RvcnlCYWNrZW5kcyA9IHtcbiAgYWJzdHJhY3Q6IF9oaXN0b3J5QWJzdHJhY3QyWydkZWZhdWx0J10sXG4gIGhhc2g6IF9oaXN0b3J5SGFzaDJbJ2RlZmF1bHQnXSxcbiAgaHRtbDU6IF9oaXN0b3J5SHRtbDUyWydkZWZhdWx0J11cbn07XG5cbi8vIGxhdGUgYmluZCBkdXJpbmcgaW5zdGFsbFxudmFyIFZ1ZSA9IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBSb3V0ZXIgY29uc3RydWN0b3JcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKi9cblxudmFyIFJvdXRlciA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFJvdXRlcigpIHtcbiAgICB2YXIgX3JlZiA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzBdO1xuXG4gICAgdmFyIF9yZWYkaGFzaGJhbmcgPSBfcmVmLmhhc2hiYW5nO1xuICAgIHZhciBoYXNoYmFuZyA9IF9yZWYkaGFzaGJhbmcgPT09IHVuZGVmaW5lZCA/IHRydWUgOiBfcmVmJGhhc2hiYW5nO1xuICAgIHZhciBfcmVmJGFic3RyYWN0ID0gX3JlZi5hYnN0cmFjdDtcbiAgICB2YXIgYWJzdHJhY3QgPSBfcmVmJGFic3RyYWN0ID09PSB1bmRlZmluZWQgPyBmYWxzZSA6IF9yZWYkYWJzdHJhY3Q7XG4gICAgdmFyIF9yZWYkaGlzdG9yeSA9IF9yZWYuaGlzdG9yeTtcbiAgICB2YXIgaGlzdG9yeSA9IF9yZWYkaGlzdG9yeSA9PT0gdW5kZWZpbmVkID8gZmFsc2UgOiBfcmVmJGhpc3Rvcnk7XG4gICAgdmFyIF9yZWYkc2F2ZVNjcm9sbFBvc2l0aW9uID0gX3JlZi5zYXZlU2Nyb2xsUG9zaXRpb247XG4gICAgdmFyIHNhdmVTY3JvbGxQb3NpdGlvbiA9IF9yZWYkc2F2ZVNjcm9sbFBvc2l0aW9uID09PSB1bmRlZmluZWQgPyBmYWxzZSA6IF9yZWYkc2F2ZVNjcm9sbFBvc2l0aW9uO1xuICAgIHZhciBfcmVmJHRyYW5zaXRpb25PbkxvYWQgPSBfcmVmLnRyYW5zaXRpb25PbkxvYWQ7XG4gICAgdmFyIHRyYW5zaXRpb25PbkxvYWQgPSBfcmVmJHRyYW5zaXRpb25PbkxvYWQgPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogX3JlZiR0cmFuc2l0aW9uT25Mb2FkO1xuICAgIHZhciBfcmVmJHN1cHByZXNzVHJhbnNpdGlvbkVycm9yID0gX3JlZi5zdXBwcmVzc1RyYW5zaXRpb25FcnJvcjtcbiAgICB2YXIgc3VwcHJlc3NUcmFuc2l0aW9uRXJyb3IgPSBfcmVmJHN1cHByZXNzVHJhbnNpdGlvbkVycm9yID09PSB1bmRlZmluZWQgPyBmYWxzZSA6IF9yZWYkc3VwcHJlc3NUcmFuc2l0aW9uRXJyb3I7XG4gICAgdmFyIF9yZWYkcm9vdCA9IF9yZWYucm9vdDtcbiAgICB2YXIgcm9vdCA9IF9yZWYkcm9vdCA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IF9yZWYkcm9vdDtcbiAgICB2YXIgX3JlZiRsaW5rQWN0aXZlQ2xhc3MgPSBfcmVmLmxpbmtBY3RpdmVDbGFzcztcbiAgICB2YXIgbGlua0FjdGl2ZUNsYXNzID0gX3JlZiRsaW5rQWN0aXZlQ2xhc3MgPT09IHVuZGVmaW5lZCA/ICd2LWxpbmstYWN0aXZlJyA6IF9yZWYkbGlua0FjdGl2ZUNsYXNzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJvdXRlcik7XG5cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAoIVJvdXRlci5pbnN0YWxsZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUGxlYXNlIGluc3RhbGwgdGhlIFJvdXRlciB3aXRoIFZ1ZS51c2UoKSBiZWZvcmUgJyArICdjcmVhdGluZyBhbiBpbnN0YW5jZS4nKTtcbiAgICB9XG5cbiAgICAvLyBWdWUgaW5zdGFuY2VzXG4gICAgdGhpcy5hcHAgPSBudWxsO1xuICAgIHRoaXMuX3ZpZXdzID0gW107XG4gICAgdGhpcy5fY2hpbGRyZW4gPSBbXTtcblxuICAgIC8vIHJvdXRlIHJlY29nbml6ZXJcbiAgICB0aGlzLl9yZWNvZ25pemVyID0gbmV3IF9yb3V0ZVJlY29nbml6ZXIyWydkZWZhdWx0J10oKTtcbiAgICB0aGlzLl9ndWFyZFJlY29nbml6ZXIgPSBuZXcgX3JvdXRlUmVjb2duaXplcjJbJ2RlZmF1bHQnXSgpO1xuXG4gICAgLy8gc3RhdGVcbiAgICB0aGlzLl9zdGFydGVkID0gZmFsc2U7XG4gICAgdGhpcy5fc3RhcnRDYiA9IG51bGw7XG4gICAgdGhpcy5fY3VycmVudFJvdXRlID0ge307XG4gICAgdGhpcy5fY3VycmVudFRyYW5zaXRpb24gPSBudWxsO1xuICAgIHRoaXMuX3ByZXZpb3VzVHJhbnNpdGlvbiA9IG51bGw7XG4gICAgdGhpcy5fbm90Rm91bmRIYW5kbGVyID0gbnVsbDtcbiAgICB0aGlzLl9ub3RGb3VuZFJlZGlyZWN0ID0gbnVsbDtcbiAgICB0aGlzLl9iZWZvcmVFYWNoSG9va3MgPSBbXTtcbiAgICB0aGlzLl9hZnRlckVhY2hIb29rcyA9IFtdO1xuXG4gICAgLy8gZmVhdHVyZSBkZXRlY3Rpb25cbiAgICB0aGlzLl9oYXNQdXNoU3RhdGUgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuaGlzdG9yeSAmJiB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGU7XG5cbiAgICAvLyB0cmlnZ2VyIHRyYW5zaXRpb24gb24gaW5pdGlhbCByZW5kZXI/XG4gICAgdGhpcy5fcmVuZGVyZWQgPSBmYWxzZTtcbiAgICB0aGlzLl90cmFuc2l0aW9uT25Mb2FkID0gdHJhbnNpdGlvbk9uTG9hZDtcblxuICAgIC8vIGhpc3RvcnkgbW9kZVxuICAgIHRoaXMuX2Fic3RyYWN0ID0gYWJzdHJhY3Q7XG4gICAgdGhpcy5faGFzaGJhbmcgPSBoYXNoYmFuZztcbiAgICB0aGlzLl9oaXN0b3J5ID0gdGhpcy5faGFzUHVzaFN0YXRlICYmIGhpc3Rvcnk7XG5cbiAgICAvLyBvdGhlciBvcHRpb25zXG4gICAgdGhpcy5fc2F2ZVNjcm9sbFBvc2l0aW9uID0gc2F2ZVNjcm9sbFBvc2l0aW9uO1xuICAgIHRoaXMuX2xpbmtBY3RpdmVDbGFzcyA9IGxpbmtBY3RpdmVDbGFzcztcbiAgICB0aGlzLl9zdXBwcmVzcyA9IHN1cHByZXNzVHJhbnNpdGlvbkVycm9yO1xuXG4gICAgLy8gY3JlYXRlIGhpc3Rvcnkgb2JqZWN0XG4gICAgdmFyIGluQnJvd3NlciA9IFZ1ZS51dGlsLmluQnJvd3NlcjtcbiAgICB0aGlzLm1vZGUgPSAhaW5Ccm93c2VyIHx8IHRoaXMuX2Fic3RyYWN0ID8gJ2Fic3RyYWN0JyA6IHRoaXMuX2hpc3RvcnkgPyAnaHRtbDUnIDogJ2hhc2gnO1xuXG4gICAgdmFyIEhpc3RvcnkgPSBoaXN0b3J5QmFja2VuZHNbdGhpcy5tb2RlXTtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdGhpcy5oaXN0b3J5ID0gbmV3IEhpc3Rvcnkoe1xuICAgICAgcm9vdDogcm9vdCxcbiAgICAgIGhhc2hiYW5nOiB0aGlzLl9oYXNoYmFuZyxcbiAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZShwYXRoLCBzdGF0ZSwgYW5jaG9yKSB7XG4gICAgICAgIHNlbGYuX21hdGNoKHBhdGgsIHN0YXRlLCBhbmNob3IpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEFsbG93IGRpcmVjdGx5IHBhc3NpbmcgY29tcG9uZW50cyB0byBhIHJvdXRlXG4gICAqIGRlZmluaXRpb24uXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwYXRoXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBoYW5kbGVyXG4gICAqL1xuXG4gIC8vIEFQSSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAvKipcbiAgKiBSZWdpc3RlciBhIG1hcCBvZiB0b3AtbGV2ZWwgcGF0aHMuXG4gICpcbiAgKiBAcGFyYW0ge09iamVjdH0gbWFwXG4gICovXG5cbiAgUm91dGVyLnByb3RvdHlwZS5tYXAgPSBmdW5jdGlvbiBtYXAoX21hcCkge1xuICAgIGZvciAodmFyIHJvdXRlIGluIF9tYXApIHtcbiAgICAgIHRoaXMub24ocm91dGUsIF9tYXBbcm91dGVdKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVyIGEgc2luZ2xlIHJvb3QtbGV2ZWwgcGF0aFxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gcm9vdFBhdGhcbiAgICogQHBhcmFtIHtPYmplY3R9IGhhbmRsZXJcbiAgICogICAgICAgICAgICAgICAgIC0ge1N0cmluZ30gY29tcG9uZW50XG4gICAqICAgICAgICAgICAgICAgICAtIHtPYmplY3R9IFtzdWJSb3V0ZXNdXG4gICAqICAgICAgICAgICAgICAgICAtIHtCb29sZWFufSBbZm9yY2VSZWZyZXNoXVxuICAgKiAgICAgICAgICAgICAgICAgLSB7RnVuY3Rpb259IFtiZWZvcmVdXG4gICAqICAgICAgICAgICAgICAgICAtIHtGdW5jdGlvbn0gW2FmdGVyXVxuICAgKi9cblxuICBSb3V0ZXIucHJvdG90eXBlLm9uID0gZnVuY3Rpb24gb24ocm9vdFBhdGgsIGhhbmRsZXIpIHtcbiAgICBpZiAocm9vdFBhdGggPT09ICcqJykge1xuICAgICAgdGhpcy5fbm90Rm91bmQoaGFuZGxlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2FkZFJvdXRlKHJvb3RQYXRoLCBoYW5kbGVyLCBbXSk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBTZXQgcmVkaXJlY3RzLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gbWFwXG4gICAqL1xuXG4gIFJvdXRlci5wcm90b3R5cGUucmVkaXJlY3QgPSBmdW5jdGlvbiByZWRpcmVjdChtYXApIHtcbiAgICBmb3IgKHZhciBwYXRoIGluIG1hcCkge1xuICAgICAgdGhpcy5fYWRkUmVkaXJlY3QocGF0aCwgbWFwW3BhdGhdKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFNldCBhbGlhc2VzLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gbWFwXG4gICAqL1xuXG4gIFJvdXRlci5wcm90b3R5cGUuYWxpYXMgPSBmdW5jdGlvbiBhbGlhcyhtYXApIHtcbiAgICBmb3IgKHZhciBwYXRoIGluIG1hcCkge1xuICAgICAgdGhpcy5fYWRkQWxpYXMocGF0aCwgbWFwW3BhdGhdKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFNldCBnbG9iYWwgYmVmb3JlIGhvb2suXG4gICAqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gICAqL1xuXG4gIFJvdXRlci5wcm90b3R5cGUuYmVmb3JlRWFjaCA9IGZ1bmN0aW9uIGJlZm9yZUVhY2goZm4pIHtcbiAgICB0aGlzLl9iZWZvcmVFYWNoSG9va3MucHVzaChmbik7XG4gIH07XG5cbiAgLyoqXG4gICAqIFNldCBnbG9iYWwgYWZ0ZXIgaG9vay5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAgICovXG5cbiAgUm91dGVyLnByb3RvdHlwZS5hZnRlckVhY2ggPSBmdW5jdGlvbiBhZnRlckVhY2goZm4pIHtcbiAgICB0aGlzLl9hZnRlckVhY2hIb29rcy5wdXNoKGZuKTtcbiAgfTtcblxuICAvKipcbiAgICogTmF2aWdhdGUgdG8gYSBnaXZlbiBwYXRoLlxuICAgKiBUaGUgcGF0aCBjYW4gYmUgYW4gb2JqZWN0IGRlc2NyaWJpbmcgYSBuYW1lZCBwYXRoIGluXG4gICAqIHRoZSBmb3JtYXQgb2YgeyBuYW1lOiAnLi4uJywgcGFyYW1zOiB7fSwgcXVlcnk6IHt9fVxuICAgKiBUaGUgcGF0aCBpcyBhc3N1bWVkIHRvIGJlIGFscmVhZHkgZGVjb2RlZCwgYW5kIHdpbGxcbiAgICogYmUgcmVzb2x2ZWQgYWdhaW5zdCByb290IChpZiBwcm92aWRlZClcbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd8T2JqZWN0fSBwYXRoXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW3JlcGxhY2VdXG4gICAqL1xuXG4gIFJvdXRlci5wcm90b3R5cGUuZ28gPSBmdW5jdGlvbiBnbyhwYXRoKSB7XG4gICAgdmFyIHJlcGxhY2UgPSBmYWxzZTtcbiAgICB2YXIgYXBwZW5kID0gZmFsc2U7XG4gICAgaWYgKFZ1ZS51dGlsLmlzT2JqZWN0KHBhdGgpKSB7XG4gICAgICByZXBsYWNlID0gcGF0aC5yZXBsYWNlO1xuICAgICAgYXBwZW5kID0gcGF0aC5hcHBlbmQ7XG4gICAgfVxuICAgIHBhdGggPSB0aGlzLl9zdHJpbmdpZnlQYXRoKHBhdGgpO1xuICAgIGlmIChwYXRoKSB7XG4gICAgICB0aGlzLmhpc3RvcnkuZ28ocGF0aCwgcmVwbGFjZSwgYXBwZW5kKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFNob3J0IGhhbmQgZm9yIHJlcGxhY2luZyBjdXJyZW50IHBhdGhcbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IHBhdGhcbiAgICovXG5cbiAgUm91dGVyLnByb3RvdHlwZS5yZXBsYWNlID0gZnVuY3Rpb24gcmVwbGFjZShwYXRoKSB7XG4gICAgdGhpcy5nbyh7IHBhdGg6IHBhdGgsIHJlcGxhY2U6IHRydWUgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFN0YXJ0IHRoZSByb3V0ZXIuXG4gICAqXG4gICAqIEBwYXJhbSB7VnVlQ29uc3RydWN0b3J9IEFwcFxuICAgKiBAcGFyYW0ge1N0cmluZ3xFbGVtZW50fSBjb250YWluZXJcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gW2NiXVxuICAgKi9cblxuICBSb3V0ZXIucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gc3RhcnQoQXBwLCBjb250YWluZXIsIGNiKSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKHRoaXMuX3N0YXJ0ZWQpIHtcbiAgICAgIF91dGlsLndhcm4oJ2FscmVhZHkgc3RhcnRlZC4nKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fc3RhcnRlZCA9IHRydWU7XG4gICAgdGhpcy5fc3RhcnRDYiA9IGNiO1xuICAgIGlmICghdGhpcy5hcHApIHtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgaWYgKCFBcHAgfHwgIWNvbnRhaW5lcikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ011c3Qgc3RhcnQgdnVlLXJvdXRlciB3aXRoIGEgY29tcG9uZW50IGFuZCBhICcgKyAncm9vdCBjb250YWluZXIuJyk7XG4gICAgICB9XG4gICAgICB0aGlzLl9hcHBDb250YWluZXIgPSBjb250YWluZXI7XG4gICAgICB2YXIgQ3RvciA9IHRoaXMuX2FwcENvbnN0cnVjdG9yID0gdHlwZW9mIEFwcCA9PT0gJ2Z1bmN0aW9uJyA/IEFwcCA6IFZ1ZS5leHRlbmQoQXBwKTtcbiAgICAgIC8vIGdpdmUgaXQgYSBuYW1lIGZvciBiZXR0ZXIgZGVidWdnaW5nXG4gICAgICBDdG9yLm9wdGlvbnMubmFtZSA9IEN0b3Iub3B0aW9ucy5uYW1lIHx8ICdSb3V0ZXJBcHAnO1xuICAgIH1cbiAgICB0aGlzLmhpc3Rvcnkuc3RhcnQoKTtcbiAgfTtcblxuICAvKipcbiAgICogU3RvcCBsaXN0ZW5pbmcgdG8gcm91dGUgY2hhbmdlcy5cbiAgICovXG5cbiAgUm91dGVyLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gc3RvcCgpIHtcbiAgICB0aGlzLmhpc3Rvcnkuc3RvcCgpO1xuICAgIHRoaXMuX3N0YXJ0ZWQgPSBmYWxzZTtcbiAgfTtcblxuICAvLyBJbnRlcm5hbCBtZXRob2RzID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgLyoqXG4gICogQWRkIGEgcm91dGUgY29udGFpbmluZyBhIGxpc3Qgb2Ygc2VnbWVudHMgdG8gdGhlIGludGVybmFsXG4gICogcm91dGUgcmVjb2duaXplci4gV2lsbCBiZSBjYWxsZWQgcmVjdXJzaXZlbHkgdG8gYWRkIGFsbFxuICAqIHBvc3NpYmxlIHN1Yi1yb3V0ZXMuXG4gICpcbiAgKiBAcGFyYW0ge1N0cmluZ30gcGF0aFxuICAqIEBwYXJhbSB7T2JqZWN0fSBoYW5kbGVyXG4gICogQHBhcmFtIHtBcnJheX0gc2VnbWVudHNcbiAgKi9cblxuICBSb3V0ZXIucHJvdG90eXBlLl9hZGRSb3V0ZSA9IGZ1bmN0aW9uIF9hZGRSb3V0ZShwYXRoLCBoYW5kbGVyLCBzZWdtZW50cykge1xuICAgIGd1YXJkQ29tcG9uZW50KHBhdGgsIGhhbmRsZXIpO1xuICAgIGhhbmRsZXIucGF0aCA9IHBhdGg7XG4gICAgaGFuZGxlci5mdWxsUGF0aCA9IChzZWdtZW50cy5yZWR1Y2UoZnVuY3Rpb24gKHBhdGgsIHNlZ21lbnQpIHtcbiAgICAgIHJldHVybiBwYXRoICsgc2VnbWVudC5wYXRoO1xuICAgIH0sICcnKSArIHBhdGgpLnJlcGxhY2UoJy8vJywgJy8nKTtcbiAgICBzZWdtZW50cy5wdXNoKHtcbiAgICAgIHBhdGg6IHBhdGgsXG4gICAgICBoYW5kbGVyOiBoYW5kbGVyXG4gICAgfSk7XG4gICAgdGhpcy5fcmVjb2duaXplci5hZGQoc2VnbWVudHMsIHtcbiAgICAgIGFzOiBoYW5kbGVyLm5hbWVcbiAgICB9KTtcbiAgICAvLyBhZGQgc3ViIHJvdXRlc1xuICAgIGlmIChoYW5kbGVyLnN1YlJvdXRlcykge1xuICAgICAgZm9yICh2YXIgc3ViUGF0aCBpbiBoYW5kbGVyLnN1YlJvdXRlcykge1xuICAgICAgICAvLyByZWN1cnNpdmVseSB3YWxrIGFsbCBzdWIgcm91dGVzXG4gICAgICAgIHRoaXMuX2FkZFJvdXRlKHN1YlBhdGgsIGhhbmRsZXIuc3ViUm91dGVzW3N1YlBhdGhdLFxuICAgICAgICAvLyBwYXNzIGEgY29weSBpbiByZWN1cnNpb24gdG8gYXZvaWQgbXV0YXRpbmdcbiAgICAgICAgLy8gYWNyb3NzIGJyYW5jaGVzXG4gICAgICAgIHNlZ21lbnRzLnNsaWNlKCkpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogU2V0IHRoZSBub3RGb3VuZCByb3V0ZSBoYW5kbGVyLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gaGFuZGxlclxuICAgKi9cblxuICBSb3V0ZXIucHJvdG90eXBlLl9ub3RGb3VuZCA9IGZ1bmN0aW9uIF9ub3RGb3VuZChoYW5kbGVyKSB7XG4gICAgZ3VhcmRDb21wb25lbnQoJyonLCBoYW5kbGVyKTtcbiAgICB0aGlzLl9ub3RGb3VuZEhhbmRsZXIgPSBbeyBoYW5kbGVyOiBoYW5kbGVyIH1dO1xuICB9O1xuXG4gIC8qKlxuICAgKiBBZGQgYSByZWRpcmVjdCByZWNvcmQuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwYXRoXG4gICAqIEBwYXJhbSB7U3RyaW5nfSByZWRpcmVjdFBhdGhcbiAgICovXG5cbiAgUm91dGVyLnByb3RvdHlwZS5fYWRkUmVkaXJlY3QgPSBmdW5jdGlvbiBfYWRkUmVkaXJlY3QocGF0aCwgcmVkaXJlY3RQYXRoKSB7XG4gICAgaWYgKHBhdGggPT09ICcqJykge1xuICAgICAgdGhpcy5fbm90Rm91bmRSZWRpcmVjdCA9IHJlZGlyZWN0UGF0aDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fYWRkR3VhcmQocGF0aCwgcmVkaXJlY3RQYXRoLCB0aGlzLnJlcGxhY2UpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQWRkIGFuIGFsaWFzIHJlY29yZC5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IHBhdGhcbiAgICogQHBhcmFtIHtTdHJpbmd9IGFsaWFzUGF0aFxuICAgKi9cblxuICBSb3V0ZXIucHJvdG90eXBlLl9hZGRBbGlhcyA9IGZ1bmN0aW9uIF9hZGRBbGlhcyhwYXRoLCBhbGlhc1BhdGgpIHtcbiAgICB0aGlzLl9hZGRHdWFyZChwYXRoLCBhbGlhc1BhdGgsIHRoaXMuX21hdGNoKTtcbiAgfTtcblxuICAvKipcbiAgICogQWRkIGEgcGF0aCBndWFyZC5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IHBhdGhcbiAgICogQHBhcmFtIHtTdHJpbmd9IG1hcHBlZFBhdGhcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gaGFuZGxlclxuICAgKi9cblxuICBSb3V0ZXIucHJvdG90eXBlLl9hZGRHdWFyZCA9IGZ1bmN0aW9uIF9hZGRHdWFyZChwYXRoLCBtYXBwZWRQYXRoLCBfaGFuZGxlcikge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB0aGlzLl9ndWFyZFJlY29nbml6ZXIuYWRkKFt7XG4gICAgICBwYXRoOiBwYXRoLFxuICAgICAgaGFuZGxlcjogZnVuY3Rpb24gaGFuZGxlcihtYXRjaCwgcXVlcnkpIHtcbiAgICAgICAgdmFyIHJlYWxQYXRoID0gX3V0aWwubWFwUGFyYW1zKG1hcHBlZFBhdGgsIG1hdGNoLnBhcmFtcywgcXVlcnkpO1xuICAgICAgICBfaGFuZGxlci5jYWxsKF90aGlzLCByZWFsUGF0aCk7XG4gICAgICB9XG4gICAgfV0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBhIHBhdGggbWF0Y2hlcyBhbnkgcmVkaXJlY3QgcmVjb3Jkcy5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IHBhdGhcbiAgICogQHJldHVybiB7Qm9vbGVhbn0gLSBpZiB0cnVlLCB3aWxsIHNraXAgbm9ybWFsIG1hdGNoLlxuICAgKi9cblxuICBSb3V0ZXIucHJvdG90eXBlLl9jaGVja0d1YXJkID0gZnVuY3Rpb24gX2NoZWNrR3VhcmQocGF0aCkge1xuICAgIHZhciBtYXRjaGVkID0gdGhpcy5fZ3VhcmRSZWNvZ25pemVyLnJlY29nbml6ZShwYXRoKTtcbiAgICBpZiAobWF0Y2hlZCkge1xuICAgICAgbWF0Y2hlZFswXS5oYW5kbGVyKG1hdGNoZWRbMF0sIG1hdGNoZWQucXVlcnlQYXJhbXMpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9ub3RGb3VuZFJlZGlyZWN0KSB7XG4gICAgICBtYXRjaGVkID0gdGhpcy5fcmVjb2duaXplci5yZWNvZ25pemUocGF0aCk7XG4gICAgICBpZiAoIW1hdGNoZWQpIHtcbiAgICAgICAgdGhpcy5yZXBsYWNlKHRoaXMuX25vdEZvdW5kUmVkaXJlY3QpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIE1hdGNoIGEgVVJMIHBhdGggYW5kIHNldCB0aGUgcm91dGUgY29udGV4dCBvbiB2bSxcbiAgICogdHJpZ2dlcmluZyB2aWV3IHVwZGF0ZXMuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwYXRoXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbc3RhdGVdXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbYW5jaG9yXVxuICAgKi9cblxuICBSb3V0ZXIucHJvdG90eXBlLl9tYXRjaCA9IGZ1bmN0aW9uIF9tYXRjaChwYXRoLCBzdGF0ZSwgYW5jaG9yKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICBpZiAodGhpcy5fY2hlY2tHdWFyZChwYXRoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBjdXJyZW50Um91dGUgPSB0aGlzLl9jdXJyZW50Um91dGU7XG4gICAgdmFyIGN1cnJlbnRUcmFuc2l0aW9uID0gdGhpcy5fY3VycmVudFRyYW5zaXRpb247XG5cbiAgICBpZiAoY3VycmVudFRyYW5zaXRpb24pIHtcbiAgICAgIGlmIChjdXJyZW50VHJhbnNpdGlvbi50by5wYXRoID09PSBwYXRoKSB7XG4gICAgICAgIC8vIGRvIG5vdGhpbmcgaWYgd2UgaGF2ZSBhbiBhY3RpdmUgdHJhbnNpdGlvbiBnb2luZyB0byB0aGUgc2FtZSBwYXRoXG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gZWxzZSBpZiAoY3VycmVudFJvdXRlLnBhdGggPT09IHBhdGgpIHtcbiAgICAgICAgLy8gV2UgYXJlIGdvaW5nIHRvIHRoZSBzYW1lIHBhdGgsIGJ1dCB3ZSBhbHNvIGhhdmUgYW4gb25nb2luZyBidXRcbiAgICAgICAgLy8gbm90LXlldC12YWxpZGF0ZWQgdHJhbnNpdGlvbi4gQWJvcnQgdGhhdCB0cmFuc2l0aW9uIGFuZCByZXNldCB0b1xuICAgICAgICAvLyBwcmV2IHRyYW5zaXRpb24uXG4gICAgICAgIGN1cnJlbnRUcmFuc2l0aW9uLmFib3J0ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLl9jdXJyZW50VHJhbnNpdGlvbiA9IHRoaXMuX3ByZXZUcmFuc2l0aW9uO1xuICAgICAgICByZXR1cm47XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBnb2luZyB0byBhIHRvdGFsbHkgZGlmZmVyZW50IHBhdGguIGFib3J0IG9uZ29pbmcgdHJhbnNpdGlvbi5cbiAgICAgICAgY3VycmVudFRyYW5zaXRpb24uYWJvcnRlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gY29uc3RydWN0IG5ldyByb3V0ZSBhbmQgdHJhbnNpdGlvbiBjb250ZXh0XG4gICAgdmFyIHJvdXRlID0gbmV3IF9yb3V0ZTJbJ2RlZmF1bHQnXShwYXRoLCB0aGlzKTtcbiAgICB2YXIgdHJhbnNpdGlvbiA9IG5ldyBfdHJhbnNpdGlvbjJbJ2RlZmF1bHQnXSh0aGlzLCByb3V0ZSwgY3VycmVudFJvdXRlKTtcblxuICAgIC8vIGN1cnJlbnQgdHJhbnNpdGlvbiBpcyB1cGRhdGVkIHJpZ2h0IG5vdy5cbiAgICAvLyBob3dldmVyLCBjdXJyZW50IHJvdXRlIHdpbGwgb25seSBiZSB1cGRhdGVkIGFmdGVyIHRoZSB0cmFuc2l0aW9uIGhhc1xuICAgIC8vIGJlZW4gdmFsaWRhdGVkLlxuICAgIHRoaXMuX3ByZXZUcmFuc2l0aW9uID0gY3VycmVudFRyYW5zaXRpb247XG4gICAgdGhpcy5fY3VycmVudFRyYW5zaXRpb24gPSB0cmFuc2l0aW9uO1xuXG4gICAgaWYgKCF0aGlzLmFwcCkge1xuICAgICAgLy8gaW5pdGlhbCByZW5kZXJcbiAgICAgIHRoaXMuYXBwID0gbmV3IHRoaXMuX2FwcENvbnN0cnVjdG9yKHtcbiAgICAgICAgZWw6IHRoaXMuX2FwcENvbnRhaW5lcixcbiAgICAgICAgX21ldGE6IHtcbiAgICAgICAgICAkcm91dGU6IHJvdXRlXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIGNoZWNrIGdsb2JhbCBiZWZvcmUgaG9va1xuICAgIHZhciBiZWZvcmVIb29rcyA9IHRoaXMuX2JlZm9yZUVhY2hIb29rcztcbiAgICB2YXIgc3RhcnRUcmFuc2l0aW9uID0gZnVuY3Rpb24gc3RhcnRUcmFuc2l0aW9uKCkge1xuICAgICAgdHJhbnNpdGlvbi5zdGFydChmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzMi5fcG9zdFRyYW5zaXRpb24ocm91dGUsIHN0YXRlLCBhbmNob3IpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGlmIChiZWZvcmVIb29rcy5sZW5ndGgpIHtcbiAgICAgIHRyYW5zaXRpb24ucnVuUXVldWUoYmVmb3JlSG9va3MsIGZ1bmN0aW9uIChob29rLCBfLCBuZXh0KSB7XG4gICAgICAgIGlmICh0cmFuc2l0aW9uID09PSBfdGhpczIuX2N1cnJlbnRUcmFuc2l0aW9uKSB7XG4gICAgICAgICAgdHJhbnNpdGlvbi5jYWxsSG9vayhob29rLCBudWxsLCBuZXh0LCB7XG4gICAgICAgICAgICBleHBlY3RCb29sZWFuOiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0sIHN0YXJ0VHJhbnNpdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YXJ0VHJhbnNpdGlvbigpO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5fcmVuZGVyZWQgJiYgdGhpcy5fc3RhcnRDYikge1xuICAgICAgdGhpcy5fc3RhcnRDYi5jYWxsKG51bGwpO1xuICAgIH1cblxuICAgIC8vIEhBQ0s6XG4gICAgLy8gc2V0IHJlbmRlcmVkIHRvIHRydWUgYWZ0ZXIgdGhlIHRyYW5zaXRpb24gc3RhcnQsIHNvXG4gICAgLy8gdGhhdCBjb21wb25lbnRzIHRoYXQgYXJlIGFjaXR2YXRlZCBzeW5jaHJvbm91c2x5IGtub3dcbiAgICAvLyB3aGV0aGVyIGl0IGlzIHRoZSBpbml0aWFsIHJlbmRlci5cbiAgICB0aGlzLl9yZW5kZXJlZCA9IHRydWU7XG4gIH07XG5cbiAgLyoqXG4gICAqIFNldCBjdXJyZW50IHRvIHRoZSBuZXcgdHJhbnNpdGlvbi5cbiAgICogVGhpcyBpcyBjYWxsZWQgYnkgdGhlIHRyYW5zaXRpb24gb2JqZWN0IHdoZW4gdGhlXG4gICAqIHZhbGlkYXRpb24gb2YgYSByb3V0ZSBoYXMgc3VjY2VlZGVkLlxuICAgKlxuICAgKiBAcGFyYW0ge1RyYW5zaXRpb259IHRyYW5zaXRpb25cbiAgICovXG5cbiAgUm91dGVyLnByb3RvdHlwZS5fb25UcmFuc2l0aW9uVmFsaWRhdGVkID0gZnVuY3Rpb24gX29uVHJhbnNpdGlvblZhbGlkYXRlZCh0cmFuc2l0aW9uKSB7XG4gICAgLy8gc2V0IGN1cnJlbnQgcm91dGVcbiAgICB2YXIgcm91dGUgPSB0aGlzLl9jdXJyZW50Um91dGUgPSB0cmFuc2l0aW9uLnRvO1xuICAgIC8vIHVwZGF0ZSByb3V0ZSBjb250ZXh0IGZvciBhbGwgY2hpbGRyZW5cbiAgICBpZiAodGhpcy5hcHAuJHJvdXRlICE9PSByb3V0ZSkge1xuICAgICAgdGhpcy5hcHAuJHJvdXRlID0gcm91dGU7XG4gICAgICB0aGlzLl9jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICBjaGlsZC4kcm91dGUgPSByb3V0ZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvLyBjYWxsIGdsb2JhbCBhZnRlciBob29rXG4gICAgaWYgKHRoaXMuX2FmdGVyRWFjaEhvb2tzLmxlbmd0aCkge1xuICAgICAgdGhpcy5fYWZ0ZXJFYWNoSG9va3MuZm9yRWFjaChmdW5jdGlvbiAoaG9vaykge1xuICAgICAgICByZXR1cm4gaG9vay5jYWxsKG51bGwsIHtcbiAgICAgICAgICB0bzogdHJhbnNpdGlvbi50byxcbiAgICAgICAgICBmcm9tOiB0cmFuc2l0aW9uLmZyb21cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5fY3VycmVudFRyYW5zaXRpb24uZG9uZSA9IHRydWU7XG4gIH07XG5cbiAgLyoqXG4gICAqIEhhbmRsZSBzdHVmZiBhZnRlciB0aGUgdHJhbnNpdGlvbi5cbiAgICpcbiAgICogQHBhcmFtIHtSb3V0ZX0gcm91dGVcbiAgICogQHBhcmFtIHtPYmplY3R9IFtzdGF0ZV1cbiAgICogQHBhcmFtIHtTdHJpbmd9IFthbmNob3JdXG4gICAqL1xuXG4gIFJvdXRlci5wcm90b3R5cGUuX3Bvc3RUcmFuc2l0aW9uID0gZnVuY3Rpb24gX3Bvc3RUcmFuc2l0aW9uKHJvdXRlLCBzdGF0ZSwgYW5jaG9yKSB7XG4gICAgLy8gaGFuZGxlIHNjcm9sbCBwb3NpdGlvbnNcbiAgICAvLyBzYXZlZCBzY3JvbGwgcG9zaXRpb25zIHRha2UgcHJpb3JpdHlcbiAgICAvLyB0aGVuIHdlIGNoZWNrIGlmIHRoZSBwYXRoIGhhcyBhbiBhbmNob3JcbiAgICB2YXIgcG9zID0gc3RhdGUgJiYgc3RhdGUucG9zO1xuICAgIGlmIChwb3MgJiYgdGhpcy5fc2F2ZVNjcm9sbFBvc2l0aW9uKSB7XG4gICAgICBWdWUubmV4dFRpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8ocG9zLngsIHBvcy55KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoYW5jaG9yKSB7XG4gICAgICBWdWUubmV4dFRpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChhbmNob3Iuc2xpY2UoMSkpO1xuICAgICAgICBpZiAoZWwpIHtcbiAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8od2luZG93LnNjcm9sbFgsIGVsLm9mZnNldFRvcCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogTm9ybWFsaXplIG5hbWVkIHJvdXRlIG9iamVjdCAvIHN0cmluZyBwYXRocyBpbnRvXG4gICAqIGEgc3RyaW5nLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdHxTdHJpbmd8TnVtYmVyfSBwYXRoXG4gICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICovXG5cbiAgUm91dGVyLnByb3RvdHlwZS5fc3RyaW5naWZ5UGF0aCA9IGZ1bmN0aW9uIF9zdHJpbmdpZnlQYXRoKHBhdGgpIHtcbiAgICBpZiAocGF0aCAmJiB0eXBlb2YgcGF0aCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGlmIChwYXRoLm5hbWUpIHtcbiAgICAgICAgdmFyIHBhcmFtcyA9IHBhdGgucGFyYW1zIHx8IHt9O1xuICAgICAgICBpZiAocGF0aC5xdWVyeSkge1xuICAgICAgICAgIHBhcmFtcy5xdWVyeVBhcmFtcyA9IHBhdGgucXVlcnk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlY29nbml6ZXIuZ2VuZXJhdGUocGF0aC5uYW1lLCBwYXJhbXMpO1xuICAgICAgfSBlbHNlIGlmIChwYXRoLnBhdGgpIHtcbiAgICAgICAgcmV0dXJuIHBhdGgucGF0aDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHBhdGggPyBwYXRoICsgJycgOiAnJztcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIFJvdXRlcjtcbn0pKCk7XG5cbmZ1bmN0aW9uIGd1YXJkQ29tcG9uZW50KHBhdGgsIGhhbmRsZXIpIHtcbiAgdmFyIGNvbXAgPSBoYW5kbGVyLmNvbXBvbmVudDtcbiAgaWYgKFZ1ZS51dGlsLmlzUGxhaW5PYmplY3QoY29tcCkpIHtcbiAgICBjb21wID0gaGFuZGxlci5jb21wb25lbnQgPSBWdWUuZXh0ZW5kKGNvbXApO1xuICB9XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAodHlwZW9mIGNvbXAgIT09ICdmdW5jdGlvbicpIHtcbiAgICBoYW5kbGVyLmNvbXBvbmVudCA9IG51bGw7XG4gICAgX3V0aWwud2FybignaW52YWxpZCBjb21wb25lbnQgZm9yIHJvdXRlIFwiJyArIHBhdGggKyAnXCIuJyk7XG4gIH1cbn1cblxuLyogSW5zdGFsbGF0aW9uICovXG5cblJvdXRlci5pbnN0YWxsZWQgPSBmYWxzZTtcblxuLyoqXG4gKiBJbnN0YWxsYXRpb24gaW50ZXJmYWNlLlxuICogSW5zdGFsbCB0aGUgbmVjZXNzYXJ5IGRpcmVjdGl2ZXMuXG4gKi9cblxuUm91dGVyLmluc3RhbGwgPSBmdW5jdGlvbiAoZXh0ZXJuYWxWdWUpIHtcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmIChSb3V0ZXIuaW5zdGFsbGVkKSB7XG4gICAgX3V0aWwud2FybignYWxyZWFkeSBpbnN0YWxsZWQuJyk7XG4gICAgcmV0dXJuO1xuICB9XG4gIFZ1ZSA9IGV4dGVybmFsVnVlO1xuICBfb3ZlcnJpZGUyWydkZWZhdWx0J10oVnVlKTtcbiAgX2RpcmVjdGl2ZXNWaWV3MlsnZGVmYXVsdCddKFZ1ZSk7XG4gIF9kaXJlY3RpdmVzTGluazJbJ2RlZmF1bHQnXShWdWUpO1xuICBfdXRpbDJbJ2RlZmF1bHQnXS5WdWUgPSBWdWU7XG4gIFJvdXRlci5pbnN0YWxsZWQgPSB0cnVlO1xufTtcblxuLy8gYXV0byBpbnN0YWxsXG4vKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuVnVlKSB7XG4gIHdpbmRvdy5WdWUudXNlKFJvdXRlcik7XG59XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IFJvdXRlcjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gZnVuY3Rpb24gKFZ1ZSkge1xuXG4gIHZhciBfID0gVnVlLnV0aWw7XG5cbiAgLy8gb3ZlcnJpZGUgVnVlJ3MgaW5pdCBhbmQgZGVzdHJveSBwcm9jZXNzIHRvIGtlZXAgdHJhY2sgb2Ygcm91dGVyIGluc3RhbmNlc1xuICB2YXIgaW5pdCA9IFZ1ZS5wcm90b3R5cGUuX2luaXQ7XG4gIFZ1ZS5wcm90b3R5cGUuX2luaXQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgIHZhciByb290ID0gb3B0aW9ucy5fcGFyZW50IHx8IG9wdGlvbnMucGFyZW50IHx8IHRoaXM7XG4gICAgdmFyIHJvdXRlID0gcm9vdC4kcm91dGU7XG4gICAgaWYgKHJvdXRlKSB7XG4gICAgICByb3V0ZS5yb3V0ZXIuX2NoaWxkcmVuLnB1c2godGhpcyk7XG4gICAgICBpZiAoIXRoaXMuJHJvdXRlKSB7XG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgICBpZiAodGhpcy5fZGVmaW5lTWV0YSkge1xuICAgICAgICAgIC8vIDAuMTJcbiAgICAgICAgICB0aGlzLl9kZWZpbmVNZXRhKCckcm91dGUnLCByb3V0ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gMS4wXG4gICAgICAgICAgXy5kZWZpbmVSZWFjdGl2ZSh0aGlzLCAnJHJvdXRlJywgcm91dGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGluaXQuY2FsbCh0aGlzLCBvcHRpb25zKTtcbiAgfTtcblxuICB2YXIgZGVzdHJveSA9IFZ1ZS5wcm90b3R5cGUuX2Rlc3Ryb3k7XG4gIFZ1ZS5wcm90b3R5cGUuX2Rlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCF0aGlzLl9pc0JlaW5nRGVzdHJveWVkKSB7XG4gICAgICB2YXIgcm91dGUgPSB0aGlzLiRyb290LiRyb3V0ZTtcbiAgICAgIGlmIChyb3V0ZSkge1xuICAgICAgICByb3V0ZS5yb3V0ZXIuX2NoaWxkcmVuLiRyZW1vdmUodGhpcyk7XG4gICAgICB9XG4gICAgICBkZXN0cm95LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9O1xuXG4gIC8vIDEuMCBvbmx5OiBlbmFibGUgcm91dGUgbWl4aW5zXG4gIHZhciBzdHJhdHMgPSBWdWUuY29uZmlnLm9wdGlvbk1lcmdlU3RyYXRlZ2llcztcbiAgdmFyIGhvb2tzVG9NZXJnZVJFID0gL14oZGF0YXxhY3RpdmF0ZXxkZWFjdGl2YXRlKSQvO1xuXG4gIGlmIChzdHJhdHMpIHtcbiAgICBzdHJhdHMucm91dGUgPSBmdW5jdGlvbiAocGFyZW50VmFsLCBjaGlsZFZhbCkge1xuICAgICAgaWYgKCFjaGlsZFZhbCkgcmV0dXJuIHBhcmVudFZhbDtcbiAgICAgIGlmICghcGFyZW50VmFsKSByZXR1cm4gY2hpbGRWYWw7XG4gICAgICB2YXIgcmV0ID0ge307XG4gICAgICBfLmV4dGVuZChyZXQsIHBhcmVudFZhbCk7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gY2hpbGRWYWwpIHtcbiAgICAgICAgdmFyIGEgPSByZXRba2V5XTtcbiAgICAgICAgdmFyIGIgPSBjaGlsZFZhbFtrZXldO1xuICAgICAgICAvLyBmb3IgZGF0YSwgYWN0aXZhdGUgYW5kIGRlYWN0aXZhdGUsIHdlIG5lZWQgdG8gbWVyZ2UgdGhlbSBpbnRvXG4gICAgICAgIC8vIGFycmF5cyBzaW1pbGFyIHRvIGxpZmVjeWNsZSBob29rcy5cbiAgICAgICAgaWYgKGEgJiYgaG9va3NUb01lcmdlUkUudGVzdChrZXkpKSB7XG4gICAgICAgICAgcmV0W2tleV0gPSAoXy5pc0FycmF5KGEpID8gYSA6IFthXSkuY29uY2F0KGIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldFtrZXldID0gYjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJldDtcbiAgICB9O1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfT2JqZWN0JGtleXMgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXMnKVsnZGVmYXVsdCddO1xuXG52YXIgX09iamVjdCRjcmVhdGUgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2NyZWF0ZScpWydkZWZhdWx0J107XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmNhblJldXNlID0gY2FuUmV1c2U7XG5leHBvcnRzLmNhbkRlYWN0aXZhdGUgPSBjYW5EZWFjdGl2YXRlO1xuZXhwb3J0cy5jYW5BY3RpdmF0ZSA9IGNhbkFjdGl2YXRlO1xuZXhwb3J0cy5kZWFjdGl2YXRlID0gZGVhY3RpdmF0ZTtcbmV4cG9ydHMuYWN0aXZhdGUgPSBhY3RpdmF0ZTtcbmV4cG9ydHMucmV1c2UgPSByZXVzZTtcblxudmFyIF91dGlsID0gcmVxdWlyZSgnLi91dGlsJyk7XG5cbi8qKlxuICogRGV0ZXJtaW5lIHRoZSByZXVzYWJpbGl0eSBvZiBhbiBleGlzdGluZyByb3V0ZXIgdmlldy5cbiAqXG4gKiBAcGFyYW0ge0RpcmVjdGl2ZX0gdmlld1xuICogQHBhcmFtIHtPYmplY3R9IGhhbmRsZXJcbiAqIEBwYXJhbSB7VHJhbnNpdGlvbn0gdHJhbnNpdGlvblxuICovXG5cbmZ1bmN0aW9uIGNhblJldXNlKHZpZXcsIGhhbmRsZXIsIHRyYW5zaXRpb24pIHtcbiAgdmFyIGNvbXBvbmVudCA9IHZpZXcuY2hpbGRWTTtcbiAgaWYgKCFjb21wb25lbnQgfHwgIWhhbmRsZXIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8gaW1wb3J0YW50OiBjaGVjayB2aWV3LkNvbXBvbmVudCBoZXJlIGJlY2F1c2UgaXQgbWF5XG4gIC8vIGhhdmUgYmVlbiBjaGFuZ2VkIGluIGFjdGl2YXRlIGhvb2tcbiAgaWYgKHZpZXcuQ29tcG9uZW50ICE9PSBoYW5kbGVyLmNvbXBvbmVudCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgY2FuUmV1c2VGbiA9IF91dGlsLmdldFJvdXRlQ29uZmlnKGNvbXBvbmVudCwgJ2NhblJldXNlJyk7XG4gIHJldHVybiB0eXBlb2YgY2FuUmV1c2VGbiA9PT0gJ2Jvb2xlYW4nID8gY2FuUmV1c2VGbiA6IGNhblJldXNlRm4gPyBjYW5SZXVzZUZuLmNhbGwoY29tcG9uZW50LCB7XG4gICAgdG86IHRyYW5zaXRpb24udG8sXG4gICAgZnJvbTogdHJhbnNpdGlvbi5mcm9tXG4gIH0pIDogdHJ1ZTsgLy8gZGVmYXVsdHMgdG8gdHJ1ZVxufVxuXG4vKipcbiAqIENoZWNrIGlmIGEgY29tcG9uZW50IGNhbiBkZWFjdGl2YXRlLlxuICpcbiAqIEBwYXJhbSB7RGlyZWN0aXZlfSB2aWV3XG4gKiBAcGFyYW0ge1RyYW5zaXRpb259IHRyYW5zaXRpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IG5leHRcbiAqL1xuXG5mdW5jdGlvbiBjYW5EZWFjdGl2YXRlKHZpZXcsIHRyYW5zaXRpb24sIG5leHQpIHtcbiAgdmFyIGZyb21Db21wb25lbnQgPSB2aWV3LmNoaWxkVk07XG4gIHZhciBob29rID0gX3V0aWwuZ2V0Um91dGVDb25maWcoZnJvbUNvbXBvbmVudCwgJ2NhbkRlYWN0aXZhdGUnKTtcbiAgaWYgKCFob29rKSB7XG4gICAgbmV4dCgpO1xuICB9IGVsc2Uge1xuICAgIHRyYW5zaXRpb24uY2FsbEhvb2soaG9vaywgZnJvbUNvbXBvbmVudCwgbmV4dCwge1xuICAgICAgZXhwZWN0Qm9vbGVhbjogdHJ1ZVxuICAgIH0pO1xuICB9XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgYSBjb21wb25lbnQgY2FuIGFjdGl2YXRlLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBoYW5kbGVyXG4gKiBAcGFyYW0ge1RyYW5zaXRpb259IHRyYW5zaXRpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IG5leHRcbiAqL1xuXG5mdW5jdGlvbiBjYW5BY3RpdmF0ZShoYW5kbGVyLCB0cmFuc2l0aW9uLCBuZXh0KSB7XG4gIF91dGlsLnJlc29sdmVBc3luY0NvbXBvbmVudChoYW5kbGVyLCBmdW5jdGlvbiAoQ29tcG9uZW50KSB7XG4gICAgLy8gaGF2ZSB0byBjaGVjayBkdWUgdG8gYXN5bmMtbmVzc1xuICAgIGlmICh0cmFuc2l0aW9uLmFib3J0ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gZGV0ZXJtaW5lIGlmIHRoaXMgY29tcG9uZW50IGNhbiBiZSBhY3RpdmF0ZWRcbiAgICB2YXIgaG9vayA9IF91dGlsLmdldFJvdXRlQ29uZmlnKENvbXBvbmVudCwgJ2NhbkFjdGl2YXRlJyk7XG4gICAgaWYgKCFob29rKSB7XG4gICAgICBuZXh0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyYW5zaXRpb24uY2FsbEhvb2soaG9vaywgbnVsbCwgbmV4dCwge1xuICAgICAgICBleHBlY3RCb29sZWFuOiB0cnVlXG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xufVxuXG4vKipcbiAqIENhbGwgZGVhY3RpdmF0ZSBob29rcyBmb3IgZXhpc3Rpbmcgcm91dGVyLXZpZXdzLlxuICpcbiAqIEBwYXJhbSB7RGlyZWN0aXZlfSB2aWV3XG4gKiBAcGFyYW0ge1RyYW5zaXRpb259IHRyYW5zaXRpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IG5leHRcbiAqL1xuXG5mdW5jdGlvbiBkZWFjdGl2YXRlKHZpZXcsIHRyYW5zaXRpb24sIG5leHQpIHtcbiAgdmFyIGNvbXBvbmVudCA9IHZpZXcuY2hpbGRWTTtcbiAgdmFyIGhvb2sgPSBfdXRpbC5nZXRSb3V0ZUNvbmZpZyhjb21wb25lbnQsICdkZWFjdGl2YXRlJyk7XG4gIGlmICghaG9vaykge1xuICAgIG5leHQoKTtcbiAgfSBlbHNlIHtcbiAgICB0cmFuc2l0aW9uLmNhbGxIb29rcyhob29rLCBjb21wb25lbnQsIG5leHQpO1xuICB9XG59XG5cbi8qKlxuICogQWN0aXZhdGUgLyBzd2l0Y2ggY29tcG9uZW50IGZvciBhIHJvdXRlci12aWV3LlxuICpcbiAqIEBwYXJhbSB7RGlyZWN0aXZlfSB2aWV3XG4gKiBAcGFyYW0ge1RyYW5zaXRpb259IHRyYW5zaXRpb25cbiAqIEBwYXJhbSB7TnVtYmVyfSBkZXB0aFxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2NiXVxuICovXG5cbmZ1bmN0aW9uIGFjdGl2YXRlKHZpZXcsIHRyYW5zaXRpb24sIGRlcHRoLCBjYiwgcmV1c2UpIHtcbiAgdmFyIGhhbmRsZXIgPSB0cmFuc2l0aW9uLmFjdGl2YXRlUXVldWVbZGVwdGhdO1xuICBpZiAoIWhhbmRsZXIpIHtcbiAgICAvLyBmaXggMS4wLjAtYWxwaGEuMyBjb21wYXRcbiAgICBpZiAodmlldy5fYm91bmQpIHtcbiAgICAgIHZpZXcuc2V0Q29tcG9uZW50KG51bGwpO1xuICAgIH1cbiAgICBjYiAmJiBjYigpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBDb21wb25lbnQgPSB2aWV3LkNvbXBvbmVudCA9IGhhbmRsZXIuY29tcG9uZW50O1xuICB2YXIgYWN0aXZhdGVIb29rID0gX3V0aWwuZ2V0Um91dGVDb25maWcoQ29tcG9uZW50LCAnYWN0aXZhdGUnKTtcbiAgdmFyIGRhdGFIb29rID0gX3V0aWwuZ2V0Um91dGVDb25maWcoQ29tcG9uZW50LCAnZGF0YScpO1xuICB2YXIgd2FpdEZvckRhdGEgPSBfdXRpbC5nZXRSb3V0ZUNvbmZpZyhDb21wb25lbnQsICd3YWl0Rm9yRGF0YScpO1xuXG4gIHZpZXcuZGVwdGggPSBkZXB0aDtcbiAgdmlldy5hY3RpdmF0ZWQgPSBmYWxzZTtcblxuICB2YXIgY29tcG9uZW50ID0gdW5kZWZpbmVkO1xuICB2YXIgbG9hZGluZyA9ICEhKGRhdGFIb29rICYmICF3YWl0Rm9yRGF0YSk7XG5cbiAgLy8gXCJyZXVzZVwiIGlzIGEgZmxhZyBwYXNzZWQgZG93biB3aGVuIHRoZSBwYXJlbnQgdmlldyBpc1xuICAvLyBlaXRoZXIgcmV1c2VkIHZpYSBrZWVwLWFsaXZlIG9yIGFzIGEgY2hpbGQgb2YgYSBrZXB0LWFsaXZlIHZpZXcuXG4gIC8vIG9mIGNvdXJzZSB3ZSBjYW4gb25seSByZXVzZSBpZiB0aGUgY3VycmVudCBrZXB0LWFsaXZlIGluc3RhbmNlXG4gIC8vIGlzIG9mIHRoZSBjb3JyZWN0IHR5cGUuXG4gIHJldXNlID0gcmV1c2UgJiYgdmlldy5jaGlsZFZNICYmIHZpZXcuY2hpbGRWTS5jb25zdHJ1Y3RvciA9PT0gQ29tcG9uZW50O1xuXG4gIGlmIChyZXVzZSkge1xuICAgIC8vIGp1c3QgcmV1c2VcbiAgICBjb21wb25lbnQgPSB2aWV3LmNoaWxkVk07XG4gICAgY29tcG9uZW50LiRsb2FkaW5nUm91dGVEYXRhID0gbG9hZGluZztcbiAgfSBlbHNlIHtcbiAgICAvLyB1bmJ1aWxkIGN1cnJlbnQgY29tcG9uZW50LiB0aGlzIHN0ZXAgYWxzbyBkZXN0cm95c1xuICAgIC8vIGFuZCByZW1vdmVzIGFsbCBuZXN0ZWQgY2hpbGQgdmlld3MuXG4gICAgdmlldy51bmJ1aWxkKHRydWUpO1xuICAgIC8vIGhhbmRsZSBrZWVwLWFsaXZlLlxuICAgIC8vIGlmIHRoZSB2aWV3IGhhcyBrZWVwLWFsaXZlLCB0aGUgY2hpbGQgdm0gaXMgbm90IGFjdHVhbGx5XG4gICAgLy8gZGVzdHJveWVkIC0gaXRzIG5lc3RlZCB2aWV3cyB3aWxsIHN0aWxsIGJlIGluIHJvdXRlcidzXG4gICAgLy8gdmlldyBsaXN0LiBXZSBuZWVkIHRvIHJlbW92ZWQgdGhlc2UgY2hpbGQgdmlld3MgYW5kXG4gICAgLy8gY2FjaGUgdGhlbSBvbiB0aGUgY2hpbGQgdm0uXG4gICAgaWYgKHZpZXcua2VlcEFsaXZlKSB7XG4gICAgICB2YXIgdmlld3MgPSB0cmFuc2l0aW9uLnJvdXRlci5fdmlld3M7XG4gICAgICB2YXIgaSA9IHZpZXdzLmluZGV4T2Yodmlldyk7XG4gICAgICBpZiAoaSA+IDApIHtcbiAgICAgICAgdHJhbnNpdGlvbi5yb3V0ZXIuX3ZpZXdzID0gdmlld3Muc2xpY2UoaSk7XG4gICAgICAgIGlmICh2aWV3LmNoaWxkVk0pIHtcbiAgICAgICAgICB2aWV3LmNoaWxkVk0uX3JvdXRlclZpZXdzID0gdmlld3Muc2xpY2UoMCwgaSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBidWlsZCB0aGUgbmV3IGNvbXBvbmVudC4gdGhpcyB3aWxsIGFsc28gY3JlYXRlIHRoZVxuICAgIC8vIGRpcmVjdCBjaGlsZCB2aWV3IG9mIHRoZSBjdXJyZW50IG9uZS4gaXQgd2lsbCByZWdpc3RlclxuICAgIC8vIGl0c2VsZiBhcyB2aWV3LmNoaWxkVmlldy5cbiAgICBjb21wb25lbnQgPSB2aWV3LmJ1aWxkKHtcbiAgICAgIF9tZXRhOiB7XG4gICAgICAgICRsb2FkaW5nUm91dGVEYXRhOiBsb2FkaW5nXG4gICAgICB9XG4gICAgfSk7XG4gICAgLy8gaGFuZGxlIGtlZXAtYWxpdmUuXG4gICAgLy8gd2hlbiBhIGtlcHQtYWxpdmUgY2hpbGQgdm0gaXMgcmVzdG9yZWQsIHdlIG5lZWQgdG9cbiAgICAvLyBhZGQgaXRzIGNhY2hlZCBjaGlsZCB2aWV3cyBpbnRvIHRoZSByb3V0ZXIncyB2aWV3IGxpc3QsXG4gICAgLy8gYW5kIGFsc28gcHJvcGVybHkgdXBkYXRlIGN1cnJlbnQgdmlldydzIGNoaWxkIHZpZXcuXG4gICAgaWYgKHZpZXcua2VlcEFsaXZlKSB7XG4gICAgICBjb21wb25lbnQuJGxvYWRpbmdSb3V0ZURhdGEgPSBsb2FkaW5nO1xuICAgICAgdmFyIGNhY2hlZFZpZXdzID0gY29tcG9uZW50Ll9yb3V0ZXJWaWV3cztcbiAgICAgIGlmIChjYWNoZWRWaWV3cykge1xuICAgICAgICB0cmFuc2l0aW9uLnJvdXRlci5fdmlld3MgPSBjYWNoZWRWaWV3cy5jb25jYXQodHJhbnNpdGlvbi5yb3V0ZXIuX3ZpZXdzKTtcbiAgICAgICAgdmlldy5jaGlsZFZpZXcgPSBjYWNoZWRWaWV3c1tjYWNoZWRWaWV3cy5sZW5ndGggLSAxXTtcbiAgICAgICAgY29tcG9uZW50Ll9yb3V0ZXJWaWV3cyA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gY2xlYW51cCB0aGUgY29tcG9uZW50IGluIGNhc2UgdGhlIHRyYW5zaXRpb24gaXMgYWJvcnRlZFxuICAvLyBiZWZvcmUgdGhlIGNvbXBvbmVudCBpcyBldmVyIGluc2VydGVkLlxuICB2YXIgY2xlYW51cCA9IGZ1bmN0aW9uIGNsZWFudXAoKSB7XG4gICAgY29tcG9uZW50LiRkZXN0cm95KCk7XG4gIH07XG5cbiAgLy8gYWN0dWFsbHkgaW5zZXJ0IHRoZSBjb21wb25lbnQgYW5kIHRyaWdnZXIgdHJhbnNpdGlvblxuICB2YXIgaW5zZXJ0ID0gZnVuY3Rpb24gaW5zZXJ0KCkge1xuICAgIGlmIChyZXVzZSkge1xuICAgICAgY2IgJiYgY2IoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHJvdXRlciA9IHRyYW5zaXRpb24ucm91dGVyO1xuICAgIGlmIChyb3V0ZXIuX3JlbmRlcmVkIHx8IHJvdXRlci5fdHJhbnNpdGlvbk9uTG9hZCkge1xuICAgICAgdmlldy50cmFuc2l0aW9uKGNvbXBvbmVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIG5vIHRyYW5zaXRpb24gb24gZmlyc3QgcmVuZGVyLCBtYW51YWwgdHJhbnNpdGlvblxuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICBpZiAodmlldy5zZXRDdXJyZW50KSB7XG4gICAgICAgIC8vIDAuMTIgY29tcGF0XG4gICAgICAgIHZpZXcuc2V0Q3VycmVudChjb21wb25lbnQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gMS4wXG4gICAgICAgIHZpZXcuY2hpbGRWTSA9IGNvbXBvbmVudDtcbiAgICAgIH1cbiAgICAgIGNvbXBvbmVudC4kYmVmb3JlKHZpZXcuYW5jaG9yLCBudWxsLCBmYWxzZSk7XG4gICAgfVxuICAgIGNiICYmIGNiKCk7XG4gIH07XG5cbiAgLy8gY2FsbGVkIGFmdGVyIGFjdGl2YXRpb24gaG9vayBpcyByZXNvbHZlZFxuICB2YXIgYWZ0ZXJBY3RpdmF0ZSA9IGZ1bmN0aW9uIGFmdGVyQWN0aXZhdGUoKSB7XG4gICAgdmlldy5hY3RpdmF0ZWQgPSB0cnVlO1xuICAgIC8vIGFjdGl2YXRlIHRoZSBjaGlsZCB2aWV3XG4gICAgaWYgKHZpZXcuY2hpbGRWaWV3KSB7XG4gICAgICBhY3RpdmF0ZSh2aWV3LmNoaWxkVmlldywgdHJhbnNpdGlvbiwgZGVwdGggKyAxLCBudWxsLCByZXVzZSB8fCB2aWV3LmtlZXBBbGl2ZSk7XG4gICAgfVxuICAgIGlmIChkYXRhSG9vayAmJiB3YWl0Rm9yRGF0YSkge1xuICAgICAgLy8gd2FpdCB1bnRpbCBkYXRhIGxvYWRlZCB0byBpbnNlcnRcbiAgICAgIGxvYWREYXRhKGNvbXBvbmVudCwgdHJhbnNpdGlvbiwgZGF0YUhvb2ssIGluc2VydCwgY2xlYW51cCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGxvYWQgZGF0YSBhbmQgaW5zZXJ0IGF0IHRoZSBzYW1lIHRpbWVcbiAgICAgIGlmIChkYXRhSG9vaykge1xuICAgICAgICBsb2FkRGF0YShjb21wb25lbnQsIHRyYW5zaXRpb24sIGRhdGFIb29rKTtcbiAgICAgIH1cbiAgICAgIGluc2VydCgpO1xuICAgIH1cbiAgfTtcblxuICBpZiAoYWN0aXZhdGVIb29rKSB7XG4gICAgdHJhbnNpdGlvbi5jYWxsSG9va3MoYWN0aXZhdGVIb29rLCBjb21wb25lbnQsIGFmdGVyQWN0aXZhdGUsIHtcbiAgICAgIGNsZWFudXA6IGNsZWFudXBcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBhZnRlckFjdGl2YXRlKCk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZXVzZSBhIHZpZXcsIGp1c3QgcmVsb2FkIGRhdGEgaWYgbmVjZXNzYXJ5LlxuICpcbiAqIEBwYXJhbSB7RGlyZWN0aXZlfSB2aWV3XG4gKiBAcGFyYW0ge1RyYW5zaXRpb259IHRyYW5zaXRpb25cbiAqL1xuXG5mdW5jdGlvbiByZXVzZSh2aWV3LCB0cmFuc2l0aW9uKSB7XG4gIHZhciBjb21wb25lbnQgPSB2aWV3LmNoaWxkVk07XG4gIHZhciBkYXRhSG9vayA9IF91dGlsLmdldFJvdXRlQ29uZmlnKGNvbXBvbmVudCwgJ2RhdGEnKTtcbiAgaWYgKGRhdGFIb29rKSB7XG4gICAgbG9hZERhdGEoY29tcG9uZW50LCB0cmFuc2l0aW9uLCBkYXRhSG9vayk7XG4gIH1cbn1cblxuLyoqXG4gKiBBc3luY2hyb25vdXNseSBsb2FkIGFuZCBhcHBseSBkYXRhIHRvIGNvbXBvbmVudC5cbiAqXG4gKiBAcGFyYW0ge1Z1ZX0gY29tcG9uZW50XG4gKiBAcGFyYW0ge1RyYW5zaXRpb259IHRyYW5zaXRpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGhvb2tcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNiXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjbGVhbnVwXG4gKi9cblxuZnVuY3Rpb24gbG9hZERhdGEoY29tcG9uZW50LCB0cmFuc2l0aW9uLCBob29rLCBjYiwgY2xlYW51cCkge1xuICBjb21wb25lbnQuJGxvYWRpbmdSb3V0ZURhdGEgPSB0cnVlO1xuICB0cmFuc2l0aW9uLmNhbGxIb29rcyhob29rLCBjb21wb25lbnQsIGZ1bmN0aW9uIChkYXRhLCBvbkVycm9yKSB7XG4gICAgLy8gbWVyZ2UgZGF0YSBmcm9tIG11bHRpcGxlIGRhdGEgaG9va3NcbiAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSAmJiBkYXRhLl9uZWVkTWVyZ2UpIHtcbiAgICAgIGRhdGEgPSBkYXRhLnJlZHVjZShmdW5jdGlvbiAocmVzLCBvYmopIHtcbiAgICAgICAgaWYgKGlzUGxhaW5PYmplY3Qob2JqKSkge1xuICAgICAgICAgIF9PYmplY3Qka2V5cyhvYmopLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgcmVzW2tleV0gPSBvYmpba2V5XTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgfSwgX09iamVjdCRjcmVhdGUobnVsbCkpO1xuICAgIH1cbiAgICAvLyBoYW5kbGUgcHJvbWlzZSBzdWdhciBzeW50YXhcbiAgICB2YXIgcHJvbWlzZXMgPSBbXTtcbiAgICBpZiAoaXNQbGFpbk9iamVjdChkYXRhKSkge1xuICAgICAgX09iamVjdCRrZXlzKGRhdGEpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB2YXIgdmFsID0gZGF0YVtrZXldO1xuICAgICAgICBpZiAoX3V0aWwuaXNQcm9taXNlKHZhbCkpIHtcbiAgICAgICAgICBwcm9taXNlcy5wdXNoKHZhbC50aGVuKGZ1bmN0aW9uIChyZXNvbHZlZFZhbCkge1xuICAgICAgICAgICAgY29tcG9uZW50LiRzZXQoa2V5LCByZXNvbHZlZFZhbCk7XG4gICAgICAgICAgfSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbXBvbmVudC4kc2V0KGtleSwgdmFsKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmICghcHJvbWlzZXMubGVuZ3RoKSB7XG4gICAgICBjb21wb25lbnQuJGxvYWRpbmdSb3V0ZURhdGEgPSBmYWxzZTtcbiAgICAgIGNiICYmIGNiKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb21pc2VzWzBdLmNvbnN0cnVjdG9yLmFsbChwcm9taXNlcykudGhlbihmdW5jdGlvbiAoXykge1xuICAgICAgICBjb21wb25lbnQuJGxvYWRpbmdSb3V0ZURhdGEgPSBmYWxzZTtcbiAgICAgICAgY2IgJiYgY2IoKTtcbiAgICAgIH0sIG9uRXJyb3IpO1xuICAgIH1cbiAgfSwge1xuICAgIGNsZWFudXA6IGNsZWFudXAsXG4gICAgZXhwZWN0RGF0YTogdHJ1ZVxuICB9KTtcbn1cblxuZnVuY3Rpb24gaXNQbGFpbk9iamVjdChvYmopIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBPYmplY3RdJztcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9jbGFzc0NhbGxDaGVjayA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3MtY2FsbC1jaGVja1wiKVtcImRlZmF1bHRcIl07XG5cbnZhciBfT2JqZWN0JGZyZWV6ZSA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2ZyZWV6ZVwiKVtcImRlZmF1bHRcIl07XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgaW50ZXJuYWxLZXlzUkUgPSAvXihjb21wb25lbnR8c3ViUm91dGVzKSQvO1xuXG4vKipcbiAqIFJvdXRlIENvbnRleHQgT2JqZWN0XG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHBhdGhcbiAqIEBwYXJhbSB7Um91dGVyfSByb3V0ZXJcbiAqL1xuXG52YXIgUm91dGUgPSBmdW5jdGlvbiBSb3V0ZShwYXRoLCByb3V0ZXIpIHtcbiAgdmFyIF90aGlzID0gdGhpcztcblxuICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUm91dGUpO1xuXG4gIHZhciBtYXRjaGVkID0gcm91dGVyLl9yZWNvZ25pemVyLnJlY29nbml6ZShwYXRoKTtcbiAgaWYgKG1hdGNoZWQpIHtcbiAgICAvLyBjb3B5IGFsbCBjdXN0b20gZmllbGRzIGZyb20gcm91dGUgY29uZmlnc1xuICAgIFtdLmZvckVhY2guY2FsbChtYXRjaGVkLCBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICAgIGZvciAodmFyIGtleSBpbiBtYXRjaC5oYW5kbGVyKSB7XG4gICAgICAgIGlmICghaW50ZXJuYWxLZXlzUkUudGVzdChrZXkpKSB7XG4gICAgICAgICAgX3RoaXNba2V5XSA9IG1hdGNoLmhhbmRsZXJba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIC8vIHNldCBxdWVyeSBhbmQgcGFyYW1zXG4gICAgdGhpcy5xdWVyeSA9IG1hdGNoZWQucXVlcnlQYXJhbXM7XG4gICAgdGhpcy5wYXJhbXMgPSBbXS5yZWR1Y2UuY2FsbChtYXRjaGVkLCBmdW5jdGlvbiAocHJldiwgY3VyKSB7XG4gICAgICBpZiAoY3VyLnBhcmFtcykge1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gY3VyLnBhcmFtcykge1xuICAgICAgICAgIHByZXZba2V5XSA9IGN1ci5wYXJhbXNba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHByZXY7XG4gICAgfSwge30pO1xuICB9XG4gIC8vIGV4cG9zZSBwYXRoIGFuZCByb3V0ZXJcbiAgdGhpcy5wYXRoID0gcGF0aDtcbiAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XG4gIC8vIGZvciBpbnRlcm5hbCB1c2VcbiAgdGhpcy5tYXRjaGVkID0gbWF0Y2hlZCB8fCByb3V0ZXIuX25vdEZvdW5kSGFuZGxlcjtcbiAgLy8gSW1wb3J0YW50OiBmcmVlemUgc2VsZiB0byBwcmV2ZW50IG9ic2VydmF0aW9uXG4gIF9PYmplY3QkZnJlZXplKHRoaXMpO1xufTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBSb3V0ZTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzLWNhbGwtY2hlY2snKVsnZGVmYXVsdCddO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3V0aWwgPSByZXF1aXJlKCcuL3V0aWwnKTtcblxudmFyIF9waXBlbGluZSA9IHJlcXVpcmUoJy4vcGlwZWxpbmUnKTtcblxuLyoqXG4gKiBBIFJvdXRlVHJhbnNpdGlvbiBvYmplY3QgbWFuYWdlcyB0aGUgcGlwZWxpbmUgb2YgYVxuICogcm91dGVyLXZpZXcgc3dpdGNoaW5nIHByb2Nlc3MuIFRoaXMgaXMgYWxzbyB0aGUgb2JqZWN0XG4gKiBwYXNzZWQgaW50byB1c2VyIHJvdXRlIGhvb2tzLlxuICpcbiAqIEBwYXJhbSB7Um91dGVyfSByb3V0ZXJcbiAqIEBwYXJhbSB7Um91dGV9IHRvXG4gKiBAcGFyYW0ge1JvdXRlfSBmcm9tXG4gKi9cblxudmFyIFJvdXRlVHJhbnNpdGlvbiA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFJvdXRlVHJhbnNpdGlvbihyb3V0ZXIsIHRvLCBmcm9tKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJvdXRlVHJhbnNpdGlvbik7XG5cbiAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcbiAgICB0aGlzLnRvID0gdG87XG4gICAgdGhpcy5mcm9tID0gZnJvbTtcbiAgICB0aGlzLm5leHQgPSBudWxsO1xuICAgIHRoaXMuYWJvcnRlZCA9IGZhbHNlO1xuICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuXG4gICAgLy8gc3RhcnQgYnkgZGV0ZXJtaW5lIHRoZSBxdWV1ZXNcblxuICAgIC8vIHRoZSBkZWFjdGl2YXRlIHF1ZXVlIGlzIGFuIGFycmF5IG9mIHJvdXRlci12aWV3XG4gICAgLy8gZGlyZWN0aXZlIGluc3RhbmNlcyB0aGF0IG5lZWQgdG8gYmUgZGVhY3RpdmF0ZWQsXG4gICAgLy8gZGVlcGVzdCBmaXJzdC5cbiAgICB0aGlzLmRlYWN0aXZhdGVRdWV1ZSA9IHJvdXRlci5fdmlld3M7XG5cbiAgICAvLyBjaGVjayB0aGUgZGVmYXVsdCBoYW5kbGVyIG9mIHRoZSBkZWVwZXN0IG1hdGNoXG4gICAgdmFyIG1hdGNoZWQgPSB0by5tYXRjaGVkID8gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodG8ubWF0Y2hlZCkgOiBbXTtcblxuICAgIC8vIHRoZSBhY3RpdmF0ZSBxdWV1ZSBpcyBhbiBhcnJheSBvZiByb3V0ZSBoYW5kbGVyc1xuICAgIC8vIHRoYXQgbmVlZCB0byBiZSBhY3RpdmF0ZWRcbiAgICB0aGlzLmFjdGl2YXRlUXVldWUgPSBtYXRjaGVkLm1hcChmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICAgIHJldHVybiBtYXRjaC5oYW5kbGVyO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEFib3J0IGN1cnJlbnQgdHJhbnNpdGlvbiBhbmQgcmV0dXJuIHRvIHByZXZpb3VzIGxvY2F0aW9uLlxuICAgKi9cblxuICBSb3V0ZVRyYW5zaXRpb24ucHJvdG90eXBlLmFib3J0ID0gZnVuY3Rpb24gYWJvcnQoKSB7XG4gICAgaWYgKCF0aGlzLmFib3J0ZWQpIHtcbiAgICAgIHRoaXMuYWJvcnRlZCA9IHRydWU7XG4gICAgICAvLyBpZiB0aGUgcm9vdCBwYXRoIHRocm93cyBhbiBlcnJvciBkdXJpbmcgdmFsaWRhdGlvblxuICAgICAgLy8gb24gaW5pdGlhbCBsb2FkLCBpdCBnZXRzIGNhdWdodCBpbiBhbiBpbmZpbml0ZSBsb29wLlxuICAgICAgdmFyIGFib3J0aW5nT25Mb2FkID0gIXRoaXMuZnJvbS5wYXRoICYmIHRoaXMudG8ucGF0aCA9PT0gJy8nO1xuICAgICAgaWYgKCFhYm9ydGluZ09uTG9hZCkge1xuICAgICAgICB0aGlzLnJvdXRlci5yZXBsYWNlKHRoaXMuZnJvbS5wYXRoIHx8ICcvJyk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBBYm9ydCBjdXJyZW50IHRyYW5zaXRpb24gYW5kIHJlZGlyZWN0IHRvIGEgbmV3IGxvY2F0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gcGF0aFxuICAgKi9cblxuICBSb3V0ZVRyYW5zaXRpb24ucHJvdG90eXBlLnJlZGlyZWN0ID0gZnVuY3Rpb24gcmVkaXJlY3QocGF0aCkge1xuICAgIGlmICghdGhpcy5hYm9ydGVkKSB7XG4gICAgICB0aGlzLmFib3J0ZWQgPSB0cnVlO1xuICAgICAgaWYgKHR5cGVvZiBwYXRoID09PSAnc3RyaW5nJykge1xuICAgICAgICBwYXRoID0gX3V0aWwubWFwUGFyYW1zKHBhdGgsIHRoaXMudG8ucGFyYW1zLCB0aGlzLnRvLnF1ZXJ5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhdGgucGFyYW1zID0gdGhpcy50by5wYXJhbXM7XG4gICAgICAgIHBhdGgucXVlcnkgPSB0aGlzLnRvLnF1ZXJ5O1xuICAgICAgfVxuICAgICAgdGhpcy5yb3V0ZXIucmVwbGFjZShwYXRoKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEEgcm91dGVyIHZpZXcgdHJhbnNpdGlvbidzIHBpcGVsaW5lIGNhbiBiZSBkZXNjcmliZWQgYXNcbiAgICogZm9sbG93cywgYXNzdW1pbmcgd2UgYXJlIHRyYW5zaXRpb25pbmcgZnJvbSBhbiBleGlzdGluZ1xuICAgKiA8cm91dGVyLXZpZXc+IGNoYWluIFtDb21wb25lbnQgQSwgQ29tcG9uZW50IEJdIHRvIGEgbmV3XG4gICAqIGNoYWluIFtDb21wb25lbnQgQSwgQ29tcG9uZW50IENdOlxuICAgKlxuICAgKiAgQSAgICBBXG4gICAqICB8ID0+IHxcbiAgICogIEIgICAgQ1xuICAgKlxuICAgKiAxLiBSZXVzYWJsaXR5IHBoYXNlOlxuICAgKiAgIC0+IGNhblJldXNlKEEsIEEpXG4gICAqICAgLT4gY2FuUmV1c2UoQiwgQylcbiAgICogICAtPiBkZXRlcm1pbmUgbmV3IHF1ZXVlczpcbiAgICogICAgICAtIGRlYWN0aXZhdGlvbjogW0JdXG4gICAqICAgICAgLSBhY3RpdmF0aW9uOiBbQ11cbiAgICpcbiAgICogMi4gVmFsaWRhdGlvbiBwaGFzZTpcbiAgICogICAtPiBjYW5EZWFjdGl2YXRlKEIpXG4gICAqICAgLT4gY2FuQWN0aXZhdGUoQylcbiAgICpcbiAgICogMy4gQWN0aXZhdGlvbiBwaGFzZTpcbiAgICogICAtPiBkZWFjdGl2YXRlKEIpXG4gICAqICAgLT4gYWN0aXZhdGUoQylcbiAgICpcbiAgICogRWFjaCBvZiB0aGVzZSBzdGVwcyBjYW4gYmUgYXN5bmNocm9ub3VzLCBhbmQgYW55XG4gICAqIHN0ZXAgY2FuIHBvdGVudGlhbGx5IGFib3J0IHRoZSB0cmFuc2l0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYlxuICAgKi9cblxuICBSb3V0ZVRyYW5zaXRpb24ucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gc3RhcnQoY2IpIHtcbiAgICB2YXIgdHJhbnNpdGlvbiA9IHRoaXM7XG4gICAgdmFyIGRhcSA9IHRoaXMuZGVhY3RpdmF0ZVF1ZXVlO1xuICAgIHZhciBhcSA9IHRoaXMuYWN0aXZhdGVRdWV1ZTtcbiAgICB2YXIgcmRhcSA9IGRhcS5zbGljZSgpLnJldmVyc2UoKTtcbiAgICB2YXIgcmV1c2VRdWV1ZSA9IHVuZGVmaW5lZDtcblxuICAgIC8vIDEuIFJldXNhYmlsaXR5IHBoYXNlXG4gICAgdmFyIGkgPSB1bmRlZmluZWQ7XG4gICAgZm9yIChpID0gMDsgaSA8IHJkYXEubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICghX3BpcGVsaW5lLmNhblJldXNlKHJkYXFbaV0sIGFxW2ldLCB0cmFuc2l0aW9uKSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGkgPiAwKSB7XG4gICAgICByZXVzZVF1ZXVlID0gcmRhcS5zbGljZSgwLCBpKTtcbiAgICAgIGRhcSA9IHJkYXEuc2xpY2UoaSkucmV2ZXJzZSgpO1xuICAgICAgYXEgPSBhcS5zbGljZShpKTtcbiAgICB9XG5cbiAgICAvLyAyLiBWYWxpZGF0aW9uIHBoYXNlXG4gICAgdHJhbnNpdGlvbi5ydW5RdWV1ZShkYXEsIF9waXBlbGluZS5jYW5EZWFjdGl2YXRlLCBmdW5jdGlvbiAoKSB7XG4gICAgICB0cmFuc2l0aW9uLnJ1blF1ZXVlKGFxLCBfcGlwZWxpbmUuY2FuQWN0aXZhdGUsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdHJhbnNpdGlvbi5ydW5RdWV1ZShkYXEsIF9waXBlbGluZS5kZWFjdGl2YXRlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgLy8gMy4gQWN0aXZhdGlvbiBwaGFzZVxuXG4gICAgICAgICAgLy8gVXBkYXRlIHJvdXRlciBjdXJyZW50IHJvdXRlXG4gICAgICAgICAgdHJhbnNpdGlvbi5yb3V0ZXIuX29uVHJhbnNpdGlvblZhbGlkYXRlZCh0cmFuc2l0aW9uKTtcblxuICAgICAgICAgIC8vIHRyaWdnZXIgcmV1c2UgZm9yIGFsbCByZXVzZWQgdmlld3NcbiAgICAgICAgICByZXVzZVF1ZXVlICYmIHJldXNlUXVldWUuZm9yRWFjaChmdW5jdGlvbiAodmlldykge1xuICAgICAgICAgICAgX3BpcGVsaW5lLnJldXNlKHZpZXcsIHRyYW5zaXRpb24pO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgLy8gdGhlIHJvb3Qgb2YgdGhlIGNoYWluIHRoYXQgbmVlZHMgdG8gYmUgcmVwbGFjZWRcbiAgICAgICAgICAvLyBpcyB0aGUgdG9wLW1vc3Qgbm9uLXJldXNhYmxlIHZpZXcuXG4gICAgICAgICAgaWYgKGRhcS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHZhciB2aWV3ID0gZGFxW2RhcS5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIHZhciBkZXB0aCA9IHJldXNlUXVldWUgPyByZXVzZVF1ZXVlLmxlbmd0aCA6IDA7XG4gICAgICAgICAgICBfcGlwZWxpbmUuYWN0aXZhdGUodmlldywgdHJhbnNpdGlvbiwgZGVwdGgsIGNiKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2IoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEFzeW5jaHJvbm91c2x5IGFuZCBzZXF1ZW50aWFsbHkgYXBwbHkgYSBmdW5jdGlvbiB0byBhXG4gICAqIHF1ZXVlLlxuICAgKlxuICAgKiBAcGFyYW0ge0FycmF5fSBxdWV1ZVxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYlxuICAgKi9cblxuICBSb3V0ZVRyYW5zaXRpb24ucHJvdG90eXBlLnJ1blF1ZXVlID0gZnVuY3Rpb24gcnVuUXVldWUocXVldWUsIGZuLCBjYikge1xuICAgIHZhciB0cmFuc2l0aW9uID0gdGhpcztcbiAgICBzdGVwKDApO1xuICAgIGZ1bmN0aW9uIHN0ZXAoaW5kZXgpIHtcbiAgICAgIGlmIChpbmRleCA+PSBxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgY2IoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZuKHF1ZXVlW2luZGV4XSwgdHJhbnNpdGlvbiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHN0ZXAoaW5kZXggKyAxKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBDYWxsIGEgdXNlciBwcm92aWRlZCByb3V0ZSB0cmFuc2l0aW9uIGhvb2sgYW5kIGhhbmRsZVxuICAgKiB0aGUgcmVzcG9uc2UgKGUuZy4gaWYgdGhlIHVzZXIgcmV0dXJucyBhIHByb21pc2UpLlxuICAgKlxuICAgKiBJZiB0aGUgdXNlciBuZWl0aGVyIGV4cGVjdHMgYW4gYXJndW1lbnQgbm9yIHJldHVybnMgYVxuICAgKiBwcm9taXNlLCB0aGUgaG9vayBpcyBhc3N1bWVkIHRvIGJlIHN5bmNocm9ub3VzLlxuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBob29rXG4gICAqIEBwYXJhbSB7Kn0gW2NvbnRleHRdXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IFtjYl1cbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICAgKiAgICAgICAgICAgICAgICAgLSB7Qm9vbGVhbn0gZXhwZWN0Qm9vbGVhblxuICAgKiAgICAgICAgICAgICAgICAgLSB7Qm9vbGVhbn0gZXhwZWN0RGF0YVxuICAgKiAgICAgICAgICAgICAgICAgLSB7RnVuY3Rpb259IGNsZWFudXBcbiAgICovXG5cbiAgUm91dGVUcmFuc2l0aW9uLnByb3RvdHlwZS5jYWxsSG9vayA9IGZ1bmN0aW9uIGNhbGxIb29rKGhvb2ssIGNvbnRleHQsIGNiKSB7XG4gICAgdmFyIF9yZWYgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDMgfHwgYXJndW1lbnRzWzNdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1szXTtcblxuICAgIHZhciBfcmVmJGV4cGVjdEJvb2xlYW4gPSBfcmVmLmV4cGVjdEJvb2xlYW47XG4gICAgdmFyIGV4cGVjdEJvb2xlYW4gPSBfcmVmJGV4cGVjdEJvb2xlYW4gPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogX3JlZiRleHBlY3RCb29sZWFuO1xuICAgIHZhciBfcmVmJGV4cGVjdERhdGEgPSBfcmVmLmV4cGVjdERhdGE7XG4gICAgdmFyIGV4cGVjdERhdGEgPSBfcmVmJGV4cGVjdERhdGEgPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogX3JlZiRleHBlY3REYXRhO1xuICAgIHZhciBjbGVhbnVwID0gX3JlZi5jbGVhbnVwO1xuXG4gICAgdmFyIHRyYW5zaXRpb24gPSB0aGlzO1xuICAgIHZhciBuZXh0Q2FsbGVkID0gZmFsc2U7XG5cbiAgICAvLyBhYm9ydCB0aGUgdHJhbnNpdGlvblxuICAgIHZhciBhYm9ydCA9IGZ1bmN0aW9uIGFib3J0KCkge1xuICAgICAgY2xlYW51cCAmJiBjbGVhbnVwKCk7XG4gICAgICB0cmFuc2l0aW9uLmFib3J0KCk7XG4gICAgfTtcblxuICAgIC8vIGhhbmRsZSBlcnJvcnNcbiAgICB2YXIgb25FcnJvciA9IGZ1bmN0aW9uIG9uRXJyb3IoZXJyKSB7XG4gICAgICAvLyBjbGVhbnVwIGluZGljYXRlcyBhbiBhZnRlci1hY3RpdmF0aW9uIGhvb2ssXG4gICAgICAvLyBzbyBpbnN0ZWFkIG9mIGFib3J0aW5nIHdlIGp1c3QgbGV0IHRoZSB0cmFuc2l0aW9uXG4gICAgICAvLyBmaW5pc2guXG4gICAgICBjbGVhbnVwID8gbmV4dCgpIDogYWJvcnQoKTtcbiAgICAgIGlmIChlcnIgJiYgIXRyYW5zaXRpb24ucm91dGVyLl9zdXBwcmVzcykge1xuICAgICAgICBfdXRpbC53YXJuKCdVbmNhdWdodCBlcnJvciBkdXJpbmcgdHJhbnNpdGlvbjogJyk7XG4gICAgICAgIHRocm93IGVyciBpbnN0YW5jZW9mIEVycm9yID8gZXJyIDogbmV3IEVycm9yKGVycik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIGFkdmFuY2UgdGhlIHRyYW5zaXRpb24gdG8gdGhlIG5leHQgc3RlcFxuICAgIHZhciBuZXh0ID0gZnVuY3Rpb24gbmV4dChkYXRhKSB7XG4gICAgICBpZiAobmV4dENhbGxlZCkge1xuICAgICAgICBfdXRpbC53YXJuKCd0cmFuc2l0aW9uLm5leHQoKSBzaG91bGQgYmUgY2FsbGVkIG9ubHkgb25jZS4nKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgbmV4dENhbGxlZCA9IHRydWU7XG4gICAgICBpZiAodHJhbnNpdGlvbi5hYm9ydGVkKSB7XG4gICAgICAgIGNsZWFudXAgJiYgY2xlYW51cCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjYiAmJiBjYihkYXRhLCBvbkVycm9yKTtcbiAgICB9O1xuXG4gICAgLy8gZXhwb3NlIGEgY2xvbmUgb2YgdGhlIHRyYW5zaXRpb24gb2JqZWN0LCBzbyB0aGF0IGVhY2hcbiAgICAvLyBob29rIGdldHMgYSBjbGVhbiBjb3B5IGFuZCBwcmV2ZW50IHRoZSB1c2VyIGZyb21cbiAgICAvLyBtZXNzaW5nIHdpdGggdGhlIGludGVybmFscy5cbiAgICB2YXIgZXhwb3NlZCA9IHtcbiAgICAgIHRvOiB0cmFuc2l0aW9uLnRvLFxuICAgICAgZnJvbTogdHJhbnNpdGlvbi5mcm9tLFxuICAgICAgYWJvcnQ6IGFib3J0LFxuICAgICAgbmV4dDogbmV4dCxcbiAgICAgIHJlZGlyZWN0OiBmdW5jdGlvbiByZWRpcmVjdCgpIHtcbiAgICAgICAgdHJhbnNpdGlvbi5yZWRpcmVjdC5hcHBseSh0cmFuc2l0aW9uLCBhcmd1bWVudHMpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBhY3R1YWxseSBjYWxsIHRoZSBob29rXG4gICAgdmFyIHJlcyA9IHVuZGVmaW5lZDtcbiAgICB0cnkge1xuICAgICAgcmVzID0gaG9vay5jYWxsKGNvbnRleHQsIGV4cG9zZWQpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIG9uRXJyb3IoZXJyKTtcbiAgICB9XG5cbiAgICAvLyBoYW5kbGUgYm9vbGVhbi9wcm9taXNlIHJldHVybiB2YWx1ZXNcbiAgICB2YXIgcmVzSXNQcm9taXNlID0gX3V0aWwuaXNQcm9taXNlKHJlcyk7XG4gICAgaWYgKGV4cGVjdEJvb2xlYW4pIHtcbiAgICAgIGlmICh0eXBlb2YgcmVzID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgcmVzID8gbmV4dCgpIDogYWJvcnQoKTtcbiAgICAgIH0gZWxzZSBpZiAocmVzSXNQcm9taXNlKSB7XG4gICAgICAgIHJlcy50aGVuKGZ1bmN0aW9uIChvaykge1xuICAgICAgICAgIG9rID8gbmV4dCgpIDogYWJvcnQoKTtcbiAgICAgICAgfSwgb25FcnJvcik7XG4gICAgICB9IGVsc2UgaWYgKCFob29rLmxlbmd0aCkge1xuICAgICAgICBuZXh0KHJlcyk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChyZXNJc1Byb21pc2UpIHtcbiAgICAgIHJlcy50aGVuKG5leHQsIG9uRXJyb3IpO1xuICAgIH0gZWxzZSBpZiAoZXhwZWN0RGF0YSAmJiBpc1BsYWluT2piZWN0KHJlcykgfHwgIWhvb2subGVuZ3RoKSB7XG4gICAgICBuZXh0KHJlcyk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBDYWxsIGEgc2luZ2xlIGhvb2sgb3IgYW4gYXJyYXkgb2YgYXN5bmMgaG9va3MgaW4gc2VyaWVzLlxuICAgKlxuICAgKiBAcGFyYW0ge0FycmF5fSBob29rc1xuICAgKiBAcGFyYW0geyp9IGNvbnRleHRcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2JcbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICAgKi9cblxuICBSb3V0ZVRyYW5zaXRpb24ucHJvdG90eXBlLmNhbGxIb29rcyA9IGZ1bmN0aW9uIGNhbGxIb29rcyhob29rcywgY29udGV4dCwgY2IsIG9wdGlvbnMpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoaG9va3MpKSB7XG4gICAgICAoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzID0gW107XG4gICAgICAgIHJlcy5fbmVlZE1lcmdlID0gdHJ1ZTtcbiAgICAgICAgdmFyIG9uRXJyb3IgPSB1bmRlZmluZWQ7XG4gICAgICAgIF90aGlzLnJ1blF1ZXVlKGhvb2tzLCBmdW5jdGlvbiAoaG9vaywgXywgbmV4dCkge1xuICAgICAgICAgIGlmICghX3RoaXMuYWJvcnRlZCkge1xuICAgICAgICAgICAgX3RoaXMuY2FsbEhvb2soaG9vaywgY29udGV4dCwgZnVuY3Rpb24gKHIsIG9uRXJyb3IpIHtcbiAgICAgICAgICAgICAgaWYgKHIpIHJlcy5wdXNoKHIpO1xuICAgICAgICAgICAgICBvbkVycm9yID0gb25FcnJvcjtcbiAgICAgICAgICAgICAgbmV4dCgpO1xuICAgICAgICAgICAgfSwgb3B0aW9ucyk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgY2IocmVzLCBvbkVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgICB9KSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNhbGxIb29rKGhvb2tzLCBjb250ZXh0LCBjYiwgb3B0aW9ucyk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBSb3V0ZVRyYW5zaXRpb247XG59KSgpO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBSb3V0ZVRyYW5zaXRpb247XG5cbmZ1bmN0aW9uIGlzUGxhaW5PamJlY3QodmFsKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgT2JqZWN0XSc7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2ludGVyb3AtcmVxdWlyZS1kZWZhdWx0JylbJ2RlZmF1bHQnXTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMud2FybiA9IHdhcm47XG5leHBvcnRzLnJlc29sdmVQYXRoID0gcmVzb2x2ZVBhdGg7XG5leHBvcnRzLmlzUHJvbWlzZSA9IGlzUHJvbWlzZTtcbmV4cG9ydHMuZ2V0Um91dGVDb25maWcgPSBnZXRSb3V0ZUNvbmZpZztcbmV4cG9ydHMucmVzb2x2ZUFzeW5jQ29tcG9uZW50ID0gcmVzb2x2ZUFzeW5jQ29tcG9uZW50O1xuZXhwb3J0cy5tYXBQYXJhbXMgPSBtYXBQYXJhbXM7XG5cbnZhciBfcm91dGVSZWNvZ25pemVyID0gcmVxdWlyZSgncm91dGUtcmVjb2duaXplcicpO1xuXG52YXIgX3JvdXRlUmVjb2duaXplcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yb3V0ZVJlY29nbml6ZXIpO1xuXG52YXIgZ2VuUXVlcnkgPSBfcm91dGVSZWNvZ25pemVyMlsnZGVmYXVsdCddLnByb3RvdHlwZS5nZW5lcmF0ZVF1ZXJ5U3RyaW5nO1xuXG4vLyBleHBvcnQgZGVmYXVsdCBmb3IgaG9sZGluZyB0aGUgVnVlIHJlZmVyZW5jZVxudmFyIF9leHBvcnRzID0ge307XG5leHBvcnRzWydkZWZhdWx0J10gPSBfZXhwb3J0cztcblxuLyoqXG4gKiBXYXJuIHN0dWZmLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBtc2dcbiAqL1xuXG5mdW5jdGlvbiB3YXJuKG1zZykge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICBpZiAod2luZG93LmNvbnNvbGUpIHtcbiAgICBjb25zb2xlLndhcm4oJ1t2dWUtcm91dGVyXSAnICsgbXNnKTtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAoIV9leHBvcnRzLlZ1ZSB8fCBfZXhwb3J0cy5WdWUuY29uZmlnLmRlYnVnKSB7XG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCd3YXJuaW5nIHN0YWNrIHRyYWNlOicpLnN0YWNrKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBSZXNvbHZlIGEgcmVsYXRpdmUgcGF0aC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gYmFzZVxuICogQHBhcmFtIHtTdHJpbmd9IHJlbGF0aXZlXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGFwcGVuZFxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5cbmZ1bmN0aW9uIHJlc29sdmVQYXRoKGJhc2UsIHJlbGF0aXZlLCBhcHBlbmQpIHtcbiAgdmFyIHF1ZXJ5ID0gYmFzZS5tYXRjaCgvKFxcPy4qKSQvKTtcbiAgaWYgKHF1ZXJ5KSB7XG4gICAgcXVlcnkgPSBxdWVyeVsxXTtcbiAgICBiYXNlID0gYmFzZS5zbGljZSgwLCAtcXVlcnkubGVuZ3RoKTtcbiAgfVxuICAvLyBhIHF1ZXJ5IVxuICBpZiAocmVsYXRpdmUuY2hhckF0KDApID09PSAnPycpIHtcbiAgICByZXR1cm4gYmFzZSArIHJlbGF0aXZlO1xuICB9XG4gIHZhciBzdGFjayA9IGJhc2Uuc3BsaXQoJy8nKTtcbiAgLy8gcmVtb3ZlIHRyYWlsaW5nIHNlZ21lbnQgaWY6XG4gIC8vIC0gbm90IGFwcGVuZGluZ1xuICAvLyAtIGFwcGVuZGluZyB0byB0cmFpbGluZyBzbGFzaCAobGFzdCBzZWdtZW50IGlzIGVtcHR5KVxuICBpZiAoIWFwcGVuZCB8fCAhc3RhY2tbc3RhY2subGVuZ3RoIC0gMV0pIHtcbiAgICBzdGFjay5wb3AoKTtcbiAgfVxuICAvLyByZXNvbHZlIHJlbGF0aXZlIHBhdGhcbiAgdmFyIHNlZ21lbnRzID0gcmVsYXRpdmUucmVwbGFjZSgvXlxcLy8sICcnKS5zcGxpdCgnLycpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHNlZ21lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNlZ21lbnQgPSBzZWdtZW50c1tpXTtcbiAgICBpZiAoc2VnbWVudCA9PT0gJy4nKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9IGVsc2UgaWYgKHNlZ21lbnQgPT09ICcuLicpIHtcbiAgICAgIHN0YWNrLnBvcCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGFjay5wdXNoKHNlZ21lbnQpO1xuICAgIH1cbiAgfVxuICAvLyBlbnN1cmUgbGVhZGluZyBzbGFzaFxuICBpZiAoc3RhY2tbMF0gIT09ICcnKSB7XG4gICAgc3RhY2sudW5zaGlmdCgnJyk7XG4gIH1cbiAgcmV0dXJuIHN0YWNrLmpvaW4oJy8nKTtcbn1cblxuLyoqXG4gKiBGb3JnaXZpbmcgY2hlY2sgZm9yIGEgcHJvbWlzZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBwXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5cbmZ1bmN0aW9uIGlzUHJvbWlzZShwKSB7XG4gIHJldHVybiBwICYmIHR5cGVvZiBwLnRoZW4gPT09ICdmdW5jdGlvbic7XG59XG5cbi8qKlxuICogUmV0cml2ZSBhIHJvdXRlIGNvbmZpZyBmaWVsZCBmcm9tIGEgY29tcG9uZW50IGluc3RhbmNlXG4gKiBPUiBhIGNvbXBvbmVudCBjb250cnVjdG9yLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb258VnVlfSBjb21wb25lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gKiBAcmV0dXJuIHsqfVxuICovXG5cbmZ1bmN0aW9uIGdldFJvdXRlQ29uZmlnKGNvbXBvbmVudCwgbmFtZSkge1xuICB2YXIgb3B0aW9ucyA9IGNvbXBvbmVudCAmJiAoY29tcG9uZW50LiRvcHRpb25zIHx8IGNvbXBvbmVudC5vcHRpb25zKTtcbiAgcmV0dXJuIG9wdGlvbnMgJiYgb3B0aW9ucy5yb3V0ZSAmJiBvcHRpb25zLnJvdXRlW25hbWVdO1xufVxuXG4vKipcbiAqIFJlc29sdmUgYW4gYXN5bmMgY29tcG9uZW50IGZhY3RvcnkuIEhhdmUgdG8gZG8gYSBkaXJ0eVxuICogbW9jayBoZXJlIGJlY2F1c2Ugb2YgVnVlIGNvcmUncyBpbnRlcm5hbCBBUEkgZGVwZW5kcyBvblxuICogYW4gSUQgY2hlY2suXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGhhbmRsZXJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNiXG4gKi9cblxudmFyIHJlc29sdmVyID0gdW5kZWZpbmVkO1xuXG5mdW5jdGlvbiByZXNvbHZlQXN5bmNDb21wb25lbnQoaGFuZGxlciwgY2IpIHtcbiAgaWYgKCFyZXNvbHZlcikge1xuICAgIHJlc29sdmVyID0ge1xuICAgICAgcmVzb2x2ZTogX2V4cG9ydHMuVnVlLnByb3RvdHlwZS5fcmVzb2x2ZUNvbXBvbmVudCxcbiAgICAgICRvcHRpb25zOiB7XG4gICAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgICBfOiBoYW5kbGVyLmNvbXBvbmVudFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICByZXNvbHZlci4kb3B0aW9ucy5jb21wb25lbnRzLl8gPSBoYW5kbGVyLmNvbXBvbmVudDtcbiAgfVxuICByZXNvbHZlci5yZXNvbHZlKCdfJywgZnVuY3Rpb24gKENvbXBvbmVudCkge1xuICAgIGhhbmRsZXIuY29tcG9uZW50ID0gQ29tcG9uZW50O1xuICAgIGNiKENvbXBvbmVudCk7XG4gIH0pO1xufVxuXG4vKipcbiAqIE1hcCB0aGUgZHluYW1pYyBzZWdtZW50cyBpbiBhIHBhdGggdG8gcGFyYW1zLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBwYXRoXG4gKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zXG4gKiBAcGFyYW0ge09iamVjdH0gcXVlcnlcbiAqL1xuXG5mdW5jdGlvbiBtYXBQYXJhbXMocGF0aCwgcGFyYW1zLCBxdWVyeSkge1xuICBpZiAocGFyYW1zID09PSB1bmRlZmluZWQpIHBhcmFtcyA9IHt9O1xuXG4gIHBhdGggPSBwYXRoLnJlcGxhY2UoLzooW15cXC9dKykvZywgZnVuY3Rpb24gKF8sIGtleSkge1xuICAgIHZhciB2YWwgPSBwYXJhbXNba2V5XTtcbiAgICBpZiAoIXZhbCkge1xuICAgICAgd2FybigncGFyYW0gXCInICsga2V5ICsgJ1wiIG5vdCBmb3VuZCB3aGVuIGdlbmVyYXRpbmcgJyArICdwYXRoIGZvciBcIicgKyBwYXRoICsgJ1wiIHdpdGggcGFyYW1zICcgKyBKU09OLnN0cmluZ2lmeShwYXJhbXMpKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbCB8fCAnJztcbiAgfSk7XG4gIGlmIChxdWVyeSkge1xuICAgIHBhdGggKz0gZ2VuUXVlcnkocXVlcnkpO1xuICB9XG4gIHJldHVybiBwYXRoO1xufSIsInZhciBfID0gcmVxdWlyZSgnLi4vdXRpbCcpXG52YXIgV2F0Y2hlciA9IHJlcXVpcmUoJy4uL3dhdGNoZXInKVxudmFyIFBhdGggPSByZXF1aXJlKCcuLi9wYXJzZXJzL3BhdGgnKVxudmFyIHRleHRQYXJzZXIgPSByZXF1aXJlKCcuLi9wYXJzZXJzL3RleHQnKVxudmFyIGRpclBhcnNlciA9IHJlcXVpcmUoJy4uL3BhcnNlcnMvZGlyZWN0aXZlJylcbnZhciBleHBQYXJzZXIgPSByZXF1aXJlKCcuLi9wYXJzZXJzL2V4cHJlc3Npb24nKVxudmFyIGZpbHRlclJFID0gL1tefF1cXHxbXnxdL1xuXG4vKipcbiAqIEdldCB0aGUgdmFsdWUgZnJvbSBhbiBleHByZXNzaW9uIG9uIHRoaXMgdm0uXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGV4cFxuICogQHBhcmFtIHtCb29sZWFufSBbYXNTdGF0ZW1lbnRdXG4gKiBAcmV0dXJuIHsqfVxuICovXG5cbmV4cG9ydHMuJGdldCA9IGZ1bmN0aW9uIChleHAsIGFzU3RhdGVtZW50KSB7XG4gIHZhciByZXMgPSBleHBQYXJzZXIucGFyc2UoZXhwKVxuICBpZiAocmVzKSB7XG4gICAgaWYgKGFzU3RhdGVtZW50ICYmICFleHBQYXJzZXIuaXNTaW1wbGVQYXRoKGV4cCkpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpc1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIHN0YXRlbWVudEhhbmRsZXIgKCkge1xuICAgICAgICByZXMuZ2V0LmNhbGwoc2VsZiwgc2VsZilcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIHJlcy5nZXQuY2FsbCh0aGlzLCB0aGlzKVxuICAgICAgfSBjYXRjaCAoZSkge31cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBTZXQgdGhlIHZhbHVlIGZyb20gYW4gZXhwcmVzc2lvbiBvbiB0aGlzIHZtLlxuICogVGhlIGV4cHJlc3Npb24gbXVzdCBiZSBhIHZhbGlkIGxlZnQtaGFuZFxuICogZXhwcmVzc2lvbiBpbiBhbiBhc3NpZ25tZW50LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBleHBcbiAqIEBwYXJhbSB7Kn0gdmFsXG4gKi9cblxuZXhwb3J0cy4kc2V0ID0gZnVuY3Rpb24gKGV4cCwgdmFsKSB7XG4gIHZhciByZXMgPSBleHBQYXJzZXIucGFyc2UoZXhwLCB0cnVlKVxuICBpZiAocmVzICYmIHJlcy5zZXQpIHtcbiAgICByZXMuc2V0LmNhbGwodGhpcywgdGhpcywgdmFsKVxuICB9XG59XG5cbi8qKlxuICogRGVsZXRlIGEgcHJvcGVydHkgb24gdGhlIFZNXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGtleVxuICovXG5cbmV4cG9ydHMuJGRlbGV0ZSA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgXy5kZWxldGUodGhpcy5fZGF0YSwga2V5KVxufVxuXG4vKipcbiAqIFdhdGNoIGFuIGV4cHJlc3Npb24sIHRyaWdnZXIgY2FsbGJhY2sgd2hlbiBpdHNcbiAqIHZhbHVlIGNoYW5nZXMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd8RnVuY3Rpb259IGV4cE9yRm5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNiXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKiAgICAgICAgICAgICAgICAgLSB7Qm9vbGVhbn0gZGVlcFxuICogICAgICAgICAgICAgICAgIC0ge0Jvb2xlYW59IGltbWVkaWF0ZVxuICogQHJldHVybiB7RnVuY3Rpb259IC0gdW53YXRjaEZuXG4gKi9cblxuZXhwb3J0cy4kd2F0Y2ggPSBmdW5jdGlvbiAoZXhwT3JGbiwgY2IsIG9wdGlvbnMpIHtcbiAgdmFyIHZtID0gdGhpc1xuICB2YXIgcGFyc2VkXG4gIGlmICh0eXBlb2YgZXhwT3JGbiA9PT0gJ3N0cmluZycpIHtcbiAgICBwYXJzZWQgPSBkaXJQYXJzZXIucGFyc2UoZXhwT3JGbilcbiAgICBleHBPckZuID0gcGFyc2VkLmV4cHJlc3Npb25cbiAgfVxuICB2YXIgd2F0Y2hlciA9IG5ldyBXYXRjaGVyKHZtLCBleHBPckZuLCBjYiwge1xuICAgIGRlZXA6IG9wdGlvbnMgJiYgb3B0aW9ucy5kZWVwLFxuICAgIGZpbHRlcnM6IHBhcnNlZCAmJiBwYXJzZWQuZmlsdGVyc1xuICB9KVxuICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmltbWVkaWF0ZSkge1xuICAgIGNiLmNhbGwodm0sIHdhdGNoZXIudmFsdWUpXG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uIHVud2F0Y2hGbiAoKSB7XG4gICAgd2F0Y2hlci50ZWFyZG93bigpXG4gIH1cbn1cblxuLyoqXG4gKiBFdmFsdWF0ZSBhIHRleHQgZGlyZWN0aXZlLCBpbmNsdWRpbmcgZmlsdGVycy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdGV4dFxuICogQHBhcmFtIHtCb29sZWFufSBbYXNTdGF0ZW1lbnRdXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cblxuZXhwb3J0cy4kZXZhbCA9IGZ1bmN0aW9uICh0ZXh0LCBhc1N0YXRlbWVudCkge1xuICAvLyBjaGVjayBmb3IgZmlsdGVycy5cbiAgaWYgKGZpbHRlclJFLnRlc3QodGV4dCkpIHtcbiAgICB2YXIgZGlyID0gZGlyUGFyc2VyLnBhcnNlKHRleHQpXG4gICAgLy8gdGhlIGZpbHRlciByZWdleCBjaGVjayBtaWdodCBnaXZlIGZhbHNlIHBvc2l0aXZlXG4gICAgLy8gZm9yIHBpcGVzIGluc2lkZSBzdHJpbmdzLCBzbyBpdCdzIHBvc3NpYmxlIHRoYXRcbiAgICAvLyB3ZSBkb24ndCBnZXQgYW55IGZpbHRlcnMgaGVyZVxuICAgIHZhciB2YWwgPSB0aGlzLiRnZXQoZGlyLmV4cHJlc3Npb24sIGFzU3RhdGVtZW50KVxuICAgIHJldHVybiBkaXIuZmlsdGVyc1xuICAgICAgPyB0aGlzLl9hcHBseUZpbHRlcnModmFsLCBudWxsLCBkaXIuZmlsdGVycylcbiAgICAgIDogdmFsXG4gIH0gZWxzZSB7XG4gICAgLy8gbm8gZmlsdGVyXG4gICAgcmV0dXJuIHRoaXMuJGdldCh0ZXh0LCBhc1N0YXRlbWVudClcbiAgfVxufVxuXG4vKipcbiAqIEludGVycG9sYXRlIGEgcGllY2Ugb2YgdGVtcGxhdGUgdGV4dC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdGV4dFxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5cbmV4cG9ydHMuJGludGVycG9sYXRlID0gZnVuY3Rpb24gKHRleHQpIHtcbiAgdmFyIHRva2VucyA9IHRleHRQYXJzZXIucGFyc2UodGV4dClcbiAgdmFyIHZtID0gdGhpc1xuICBpZiAodG9rZW5zKSB7XG4gICAgaWYgKHRva2Vucy5sZW5ndGggPT09IDEpIHtcbiAgICAgIHJldHVybiB2bS4kZXZhbCh0b2tlbnNbMF0udmFsdWUpICsgJydcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRva2Vucy5tYXAoZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgICAgIHJldHVybiB0b2tlbi50YWdcbiAgICAgICAgICA/IHZtLiRldmFsKHRva2VuLnZhbHVlKVxuICAgICAgICAgIDogdG9rZW4udmFsdWVcbiAgICAgIH0pLmpvaW4oJycpXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJldHVybiB0ZXh0XG4gIH1cbn1cblxuLyoqXG4gKiBMb2cgaW5zdGFuY2UgZGF0YSBhcyBhIHBsYWluIEpTIG9iamVjdFxuICogc28gdGhhdCBpdCBpcyBlYXNpZXIgdG8gaW5zcGVjdCBpbiBjb25zb2xlLlxuICogVGhpcyBtZXRob2QgYXNzdW1lcyBjb25zb2xlIGlzIGF2YWlsYWJsZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gW3BhdGhdXG4gKi9cblxuZXhwb3J0cy4kbG9nID0gZnVuY3Rpb24gKHBhdGgpIHtcbiAgdmFyIGRhdGEgPSBwYXRoXG4gICAgPyBQYXRoLmdldCh0aGlzLl9kYXRhLCBwYXRoKVxuICAgIDogdGhpcy5fZGF0YVxuICBpZiAoZGF0YSkge1xuICAgIGRhdGEgPSBjbGVhbihkYXRhKVxuICB9XG4gIC8vIGluY2x1ZGUgY29tcHV0ZWQgZmllbGRzXG4gIGlmICghcGF0aCkge1xuICAgIGZvciAodmFyIGtleSBpbiB0aGlzLiRvcHRpb25zLmNvbXB1dGVkKSB7XG4gICAgICBkYXRhW2tleV0gPSBjbGVhbih0aGlzW2tleV0pXG4gICAgfVxuICB9XG4gIGNvbnNvbGUubG9nKGRhdGEpXG59XG5cbi8qKlxuICogXCJjbGVhblwiIGEgZ2V0dGVyL3NldHRlciBjb252ZXJ0ZWQgb2JqZWN0IGludG8gYSBwbGFpblxuICogb2JqZWN0IGNvcHkuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IC0gb2JqXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cblxuZnVuY3Rpb24gY2xlYW4gKG9iaikge1xuICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShvYmopKVxufVxuIiwidmFyIF8gPSByZXF1aXJlKCcuLi91dGlsJylcbnZhciB0cmFuc2l0aW9uID0gcmVxdWlyZSgnLi4vdHJhbnNpdGlvbicpXG5cbi8qKlxuICogQ29udmVuaWVuY2Ugb24taW5zdGFuY2UgbmV4dFRpY2suIFRoZSBjYWxsYmFjayBpc1xuICogYXV0by1ib3VuZCB0byB0aGUgaW5zdGFuY2UsIGFuZCB0aGlzIGF2b2lkcyBjb21wb25lbnRcbiAqIG1vZHVsZXMgaGF2aW5nIHRvIHJlbHkgb24gdGhlIGdsb2JhbCBWdWUuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqL1xuXG5leHBvcnRzLiRuZXh0VGljayA9IGZ1bmN0aW9uIChmbikge1xuICBfLm5leHRUaWNrKGZuLCB0aGlzKVxufVxuXG4vKipcbiAqIEFwcGVuZCBpbnN0YW5jZSB0byB0YXJnZXRcbiAqXG4gKiBAcGFyYW0ge05vZGV9IHRhcmdldFxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2NiXVxuICogQHBhcmFtIHtCb29sZWFufSBbd2l0aFRyYW5zaXRpb25dIC0gZGVmYXVsdHMgdG8gdHJ1ZVxuICovXG5cbmV4cG9ydHMuJGFwcGVuZFRvID0gZnVuY3Rpb24gKHRhcmdldCwgY2IsIHdpdGhUcmFuc2l0aW9uKSB7XG4gIHJldHVybiBpbnNlcnQoXG4gICAgdGhpcywgdGFyZ2V0LCBjYiwgd2l0aFRyYW5zaXRpb24sXG4gICAgYXBwZW5kLCB0cmFuc2l0aW9uLmFwcGVuZFxuICApXG59XG5cbi8qKlxuICogUHJlcGVuZCBpbnN0YW5jZSB0byB0YXJnZXRcbiAqXG4gKiBAcGFyYW0ge05vZGV9IHRhcmdldFxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2NiXVxuICogQHBhcmFtIHtCb29sZWFufSBbd2l0aFRyYW5zaXRpb25dIC0gZGVmYXVsdHMgdG8gdHJ1ZVxuICovXG5cbmV4cG9ydHMuJHByZXBlbmRUbyA9IGZ1bmN0aW9uICh0YXJnZXQsIGNiLCB3aXRoVHJhbnNpdGlvbikge1xuICB0YXJnZXQgPSBxdWVyeSh0YXJnZXQpXG4gIGlmICh0YXJnZXQuaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgdGhpcy4kYmVmb3JlKHRhcmdldC5maXJzdENoaWxkLCBjYiwgd2l0aFRyYW5zaXRpb24pXG4gIH0gZWxzZSB7XG4gICAgdGhpcy4kYXBwZW5kVG8odGFyZ2V0LCBjYiwgd2l0aFRyYW5zaXRpb24pXG4gIH1cbiAgcmV0dXJuIHRoaXNcbn1cblxuLyoqXG4gKiBJbnNlcnQgaW5zdGFuY2UgYmVmb3JlIHRhcmdldFxuICpcbiAqIEBwYXJhbSB7Tm9kZX0gdGFyZ2V0XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2JdXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFt3aXRoVHJhbnNpdGlvbl0gLSBkZWZhdWx0cyB0byB0cnVlXG4gKi9cblxuZXhwb3J0cy4kYmVmb3JlID0gZnVuY3Rpb24gKHRhcmdldCwgY2IsIHdpdGhUcmFuc2l0aW9uKSB7XG4gIHJldHVybiBpbnNlcnQoXG4gICAgdGhpcywgdGFyZ2V0LCBjYiwgd2l0aFRyYW5zaXRpb24sXG4gICAgYmVmb3JlLCB0cmFuc2l0aW9uLmJlZm9yZVxuICApXG59XG5cbi8qKlxuICogSW5zZXJ0IGluc3RhbmNlIGFmdGVyIHRhcmdldFxuICpcbiAqIEBwYXJhbSB7Tm9kZX0gdGFyZ2V0XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2JdXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFt3aXRoVHJhbnNpdGlvbl0gLSBkZWZhdWx0cyB0byB0cnVlXG4gKi9cblxuZXhwb3J0cy4kYWZ0ZXIgPSBmdW5jdGlvbiAodGFyZ2V0LCBjYiwgd2l0aFRyYW5zaXRpb24pIHtcbiAgdGFyZ2V0ID0gcXVlcnkodGFyZ2V0KVxuICBpZiAodGFyZ2V0Lm5leHRTaWJsaW5nKSB7XG4gICAgdGhpcy4kYmVmb3JlKHRhcmdldC5uZXh0U2libGluZywgY2IsIHdpdGhUcmFuc2l0aW9uKVxuICB9IGVsc2Uge1xuICAgIHRoaXMuJGFwcGVuZFRvKHRhcmdldC5wYXJlbnROb2RlLCBjYiwgd2l0aFRyYW5zaXRpb24pXG4gIH1cbiAgcmV0dXJuIHRoaXNcbn1cblxuLyoqXG4gKiBSZW1vdmUgaW5zdGFuY2UgZnJvbSBET01cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2JdXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFt3aXRoVHJhbnNpdGlvbl0gLSBkZWZhdWx0cyB0byB0cnVlXG4gKi9cblxuZXhwb3J0cy4kcmVtb3ZlID0gZnVuY3Rpb24gKGNiLCB3aXRoVHJhbnNpdGlvbikge1xuICBpZiAoIXRoaXMuJGVsLnBhcmVudE5vZGUpIHtcbiAgICByZXR1cm4gY2IgJiYgY2IoKVxuICB9XG4gIHZhciBpbkRvYyA9IHRoaXMuX2lzQXR0YWNoZWQgJiYgXy5pbkRvYyh0aGlzLiRlbClcbiAgLy8gaWYgd2UgYXJlIG5vdCBpbiBkb2N1bWVudCwgbm8gbmVlZCB0byBjaGVja1xuICAvLyBmb3IgdHJhbnNpdGlvbnNcbiAgaWYgKCFpbkRvYykgd2l0aFRyYW5zaXRpb24gPSBmYWxzZVxuICB2YXIgc2VsZiA9IHRoaXNcbiAgdmFyIHJlYWxDYiA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoaW5Eb2MpIHNlbGYuX2NhbGxIb29rKCdkZXRhY2hlZCcpXG4gICAgaWYgKGNiKSBjYigpXG4gIH1cbiAgaWYgKHRoaXMuX2lzRnJhZ21lbnQpIHtcbiAgICBfLnJlbW92ZU5vZGVSYW5nZShcbiAgICAgIHRoaXMuX2ZyYWdtZW50U3RhcnQsXG4gICAgICB0aGlzLl9mcmFnbWVudEVuZCxcbiAgICAgIHRoaXMsIHRoaXMuX2ZyYWdtZW50LCByZWFsQ2JcbiAgICApXG4gIH0gZWxzZSB7XG4gICAgdmFyIG9wID0gd2l0aFRyYW5zaXRpb24gPT09IGZhbHNlXG4gICAgICA/IHJlbW92ZVxuICAgICAgOiB0cmFuc2l0aW9uLnJlbW92ZVxuICAgIG9wKHRoaXMuJGVsLCB0aGlzLCByZWFsQ2IpXG4gIH1cbiAgcmV0dXJuIHRoaXNcbn1cblxuLyoqXG4gKiBTaGFyZWQgRE9NIGluc2VydGlvbiBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0ge1Z1ZX0gdm1cbiAqIEBwYXJhbSB7RWxlbWVudH0gdGFyZ2V0XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2JdXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFt3aXRoVHJhbnNpdGlvbl1cbiAqIEBwYXJhbSB7RnVuY3Rpb259IG9wMSAtIG9wIGZvciBub24tdHJhbnNpdGlvbiBpbnNlcnRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IG9wMiAtIG9wIGZvciB0cmFuc2l0aW9uIGluc2VydFxuICogQHJldHVybiB2bVxuICovXG5cbmZ1bmN0aW9uIGluc2VydCAodm0sIHRhcmdldCwgY2IsIHdpdGhUcmFuc2l0aW9uLCBvcDEsIG9wMikge1xuICB0YXJnZXQgPSBxdWVyeSh0YXJnZXQpXG4gIHZhciB0YXJnZXRJc0RldGFjaGVkID0gIV8uaW5Eb2ModGFyZ2V0KVxuICB2YXIgb3AgPSB3aXRoVHJhbnNpdGlvbiA9PT0gZmFsc2UgfHwgdGFyZ2V0SXNEZXRhY2hlZFxuICAgICAgPyBvcDFcbiAgICAgIDogb3AyXG4gIHZhciBzaG91bGRDYWxsSG9vayA9XG4gICAgIXRhcmdldElzRGV0YWNoZWQgJiZcbiAgICAhdm0uX2lzQXR0YWNoZWQgJiZcbiAgICAhXy5pbkRvYyh2bS4kZWwpXG4gIGlmICh2bS5faXNGcmFnbWVudCkge1xuICAgIF8ubWFwTm9kZVJhbmdlKHZtLl9mcmFnbWVudFN0YXJ0LCB2bS5fZnJhZ21lbnRFbmQsIGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICBvcChub2RlLCB0YXJnZXQsIHZtKVxuICAgIH0pXG4gICAgY2IgJiYgY2IoKVxuICB9IGVsc2Uge1xuICAgIG9wKHZtLiRlbCwgdGFyZ2V0LCB2bSwgY2IpXG4gIH1cbiAgaWYgKHNob3VsZENhbGxIb29rKSB7XG4gICAgdm0uX2NhbGxIb29rKCdhdHRhY2hlZCcpXG4gIH1cbiAgcmV0dXJuIHZtXG59XG5cbi8qKlxuICogQ2hlY2sgZm9yIHNlbGVjdG9yc1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfEVsZW1lbnR9IGVsXG4gKi9cblxuZnVuY3Rpb24gcXVlcnkgKGVsKSB7XG4gIHJldHVybiB0eXBlb2YgZWwgPT09ICdzdHJpbmcnXG4gICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsKVxuICAgIDogZWxcbn1cblxuLyoqXG4gKiBBcHBlbmQgb3BlcmF0aW9uIHRoYXQgdGFrZXMgYSBjYWxsYmFjay5cbiAqXG4gKiBAcGFyYW0ge05vZGV9IGVsXG4gKiBAcGFyYW0ge05vZGV9IHRhcmdldFxuICogQHBhcmFtIHtWdWV9IHZtIC0gdW51c2VkXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2JdXG4gKi9cblxuZnVuY3Rpb24gYXBwZW5kIChlbCwgdGFyZ2V0LCB2bSwgY2IpIHtcbiAgdGFyZ2V0LmFwcGVuZENoaWxkKGVsKVxuICBpZiAoY2IpIGNiKClcbn1cblxuLyoqXG4gKiBJbnNlcnRCZWZvcmUgb3BlcmF0aW9uIHRoYXQgdGFrZXMgYSBjYWxsYmFjay5cbiAqXG4gKiBAcGFyYW0ge05vZGV9IGVsXG4gKiBAcGFyYW0ge05vZGV9IHRhcmdldFxuICogQHBhcmFtIHtWdWV9IHZtIC0gdW51c2VkXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2JdXG4gKi9cblxuZnVuY3Rpb24gYmVmb3JlIChlbCwgdGFyZ2V0LCB2bSwgY2IpIHtcbiAgXy5iZWZvcmUoZWwsIHRhcmdldClcbiAgaWYgKGNiKSBjYigpXG59XG5cbi8qKlxuICogUmVtb3ZlIG9wZXJhdGlvbiB0aGF0IHRha2VzIGEgY2FsbGJhY2suXG4gKlxuICogQHBhcmFtIHtOb2RlfSBlbFxuICogQHBhcmFtIHtWdWV9IHZtIC0gdW51c2VkXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2JdXG4gKi9cblxuZnVuY3Rpb24gcmVtb3ZlIChlbCwgdm0sIGNiKSB7XG4gIF8ucmVtb3ZlKGVsKVxuICBpZiAoY2IpIGNiKClcbn1cbiIsInZhciBfID0gcmVxdWlyZSgnLi4vdXRpbCcpXG5cbi8qKlxuICogTGlzdGVuIG9uIHRoZSBnaXZlbiBgZXZlbnRgIHdpdGggYGZuYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKi9cblxuZXhwb3J0cy4kb24gPSBmdW5jdGlvbiAoZXZlbnQsIGZuKSB7XG4gICh0aGlzLl9ldmVudHNbZXZlbnRdIHx8ICh0aGlzLl9ldmVudHNbZXZlbnRdID0gW10pKVxuICAgIC5wdXNoKGZuKVxuICBtb2RpZnlMaXN0ZW5lckNvdW50KHRoaXMsIGV2ZW50LCAxKVxuICByZXR1cm4gdGhpc1xufVxuXG4vKipcbiAqIEFkZHMgYW4gYGV2ZW50YCBsaXN0ZW5lciB0aGF0IHdpbGwgYmUgaW52b2tlZCBhIHNpbmdsZVxuICogdGltZSB0aGVuIGF1dG9tYXRpY2FsbHkgcmVtb3ZlZC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKi9cblxuZXhwb3J0cy4kb25jZSA9IGZ1bmN0aW9uIChldmVudCwgZm4pIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIGZ1bmN0aW9uIG9uICgpIHtcbiAgICBzZWxmLiRvZmYoZXZlbnQsIG9uKVxuICAgIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cylcbiAgfVxuICBvbi5mbiA9IGZuXG4gIHRoaXMuJG9uKGV2ZW50LCBvbilcbiAgcmV0dXJuIHRoaXNcbn1cblxuLyoqXG4gKiBSZW1vdmUgdGhlIGdpdmVuIGNhbGxiYWNrIGZvciBgZXZlbnRgIG9yIGFsbFxuICogcmVnaXN0ZXJlZCBjYWxsYmFja3MuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICovXG5cbmV4cG9ydHMuJG9mZiA9IGZ1bmN0aW9uIChldmVudCwgZm4pIHtcbiAgdmFyIGNic1xuICAvLyBhbGxcbiAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgaWYgKHRoaXMuJHBhcmVudCkge1xuICAgICAgZm9yIChldmVudCBpbiB0aGlzLl9ldmVudHMpIHtcbiAgICAgICAgY2JzID0gdGhpcy5fZXZlbnRzW2V2ZW50XVxuICAgICAgICBpZiAoY2JzKSB7XG4gICAgICAgICAgbW9kaWZ5TGlzdGVuZXJDb3VudCh0aGlzLCBldmVudCwgLWNicy5sZW5ndGgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fZXZlbnRzID0ge31cbiAgICByZXR1cm4gdGhpc1xuICB9XG4gIC8vIHNwZWNpZmljIGV2ZW50XG4gIGNicyA9IHRoaXMuX2V2ZW50c1tldmVudF1cbiAgaWYgKCFjYnMpIHtcbiAgICByZXR1cm4gdGhpc1xuICB9XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgbW9kaWZ5TGlzdGVuZXJDb3VudCh0aGlzLCBldmVudCwgLWNicy5sZW5ndGgpXG4gICAgdGhpcy5fZXZlbnRzW2V2ZW50XSA9IG51bGxcbiAgICByZXR1cm4gdGhpc1xuICB9XG4gIC8vIHNwZWNpZmljIGhhbmRsZXJcbiAgdmFyIGNiXG4gIHZhciBpID0gY2JzLmxlbmd0aFxuICB3aGlsZSAoaS0tKSB7XG4gICAgY2IgPSBjYnNbaV1cbiAgICBpZiAoY2IgPT09IGZuIHx8IGNiLmZuID09PSBmbikge1xuICAgICAgbW9kaWZ5TGlzdGVuZXJDb3VudCh0aGlzLCBldmVudCwgLTEpXG4gICAgICBjYnMuc3BsaWNlKGksIDEpXG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuICByZXR1cm4gdGhpc1xufVxuXG4vKipcbiAqIFRyaWdnZXIgYW4gZXZlbnQgb24gc2VsZi5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAqL1xuXG5leHBvcnRzLiRlbWl0ID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIHZhciBjYnMgPSB0aGlzLl9ldmVudHNbZXZlbnRdXG4gIHRoaXMuX3Nob3VsZFByb3BhZ2F0ZSA9ICFjYnNcbiAgaWYgKGNicykge1xuICAgIGNicyA9IGNicy5sZW5ndGggPiAxXG4gICAgICA/IF8udG9BcnJheShjYnMpXG4gICAgICA6IGNic1xuICAgIHZhciBhcmdzID0gXy50b0FycmF5KGFyZ3VtZW50cywgMSlcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IGNicy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIHZhciByZXMgPSBjYnNbaV0uYXBwbHkodGhpcywgYXJncylcbiAgICAgIGlmIChyZXMgPT09IHRydWUpIHtcbiAgICAgICAgdGhpcy5fc2hvdWxkUHJvcGFnYXRlID0gdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gdGhpc1xufVxuXG4vKipcbiAqIFJlY3Vyc2l2ZWx5IGJyb2FkY2FzdCBhbiBldmVudCB0byBhbGwgY2hpbGRyZW4gaW5zdGFuY2VzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICogQHBhcmFtIHsuLi4qfSBhZGRpdGlvbmFsIGFyZ3VtZW50c1xuICovXG5cbmV4cG9ydHMuJGJyb2FkY2FzdCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAvLyBpZiBubyBjaGlsZCBoYXMgcmVnaXN0ZXJlZCBmb3IgdGhpcyBldmVudCxcbiAgLy8gdGhlbiB0aGVyZSdzIG5vIG5lZWQgdG8gYnJvYWRjYXN0LlxuICBpZiAoIXRoaXMuX2V2ZW50c0NvdW50W2V2ZW50XSkgcmV0dXJuXG4gIHZhciBjaGlsZHJlbiA9IHRoaXMuJGNoaWxkcmVuXG4gIGZvciAodmFyIGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgdmFyIGNoaWxkID0gY2hpbGRyZW5baV1cbiAgICBjaGlsZC4kZW1pdC5hcHBseShjaGlsZCwgYXJndW1lbnRzKVxuICAgIGlmIChjaGlsZC5fc2hvdWxkUHJvcGFnYXRlKSB7XG4gICAgICBjaGlsZC4kYnJvYWRjYXN0LmFwcGx5KGNoaWxkLCBhcmd1bWVudHMpXG4gICAgfVxuICB9XG4gIHJldHVybiB0aGlzXG59XG5cbi8qKlxuICogUmVjdXJzaXZlbHkgcHJvcGFnYXRlIGFuIGV2ZW50IHVwIHRoZSBwYXJlbnQgY2hhaW4uXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gKiBAcGFyYW0gey4uLip9IGFkZGl0aW9uYWwgYXJndW1lbnRzXG4gKi9cblxuZXhwb3J0cy4kZGlzcGF0Y2ggPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuJGVtaXQuYXBwbHkodGhpcywgYXJndW1lbnRzKVxuICB2YXIgcGFyZW50ID0gdGhpcy4kcGFyZW50XG4gIHdoaWxlIChwYXJlbnQpIHtcbiAgICBwYXJlbnQuJGVtaXQuYXBwbHkocGFyZW50LCBhcmd1bWVudHMpXG4gICAgcGFyZW50ID0gcGFyZW50Ll9zaG91bGRQcm9wYWdhdGVcbiAgICAgID8gcGFyZW50LiRwYXJlbnRcbiAgICAgIDogbnVsbFxuICB9XG4gIHJldHVybiB0aGlzXG59XG5cbi8qKlxuICogTW9kaWZ5IHRoZSBsaXN0ZW5lciBjb3VudHMgb24gYWxsIHBhcmVudHMuXG4gKiBUaGlzIGJvb2trZWVwaW5nIGFsbG93cyAkYnJvYWRjYXN0IHRvIHJldHVybiBlYXJseSB3aGVuXG4gKiBubyBjaGlsZCBoYXMgbGlzdGVuZWQgdG8gYSBjZXJ0YWluIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7VnVlfSB2bVxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gKiBAcGFyYW0ge051bWJlcn0gY291bnRcbiAqL1xuXG52YXIgaG9va1JFID0gL15ob29rOi9cbmZ1bmN0aW9uIG1vZGlmeUxpc3RlbmVyQ291bnQgKHZtLCBldmVudCwgY291bnQpIHtcbiAgdmFyIHBhcmVudCA9IHZtLiRwYXJlbnRcbiAgLy8gaG9va3MgZG8gbm90IGdldCBicm9hZGNhc3RlZCBzbyBubyBuZWVkXG4gIC8vIHRvIGRvIGJvb2trZWVwaW5nIGZvciB0aGVtXG4gIGlmICghcGFyZW50IHx8ICFjb3VudCB8fCBob29rUkUudGVzdChldmVudCkpIHJldHVyblxuICB3aGlsZSAocGFyZW50KSB7XG4gICAgcGFyZW50Ll9ldmVudHNDb3VudFtldmVudF0gPVxuICAgICAgKHBhcmVudC5fZXZlbnRzQ291bnRbZXZlbnRdIHx8IDApICsgY291bnRcbiAgICBwYXJlbnQgPSBwYXJlbnQuJHBhcmVudFxuICB9XG59XG4iLCJ2YXIgXyA9IHJlcXVpcmUoJy4uL3V0aWwnKVxudmFyIGNvbmZpZyA9IHJlcXVpcmUoJy4uL2NvbmZpZycpXG5cbi8qKlxuICogRXhwb3NlIHVzZWZ1bCBpbnRlcm5hbHNcbiAqL1xuXG5leHBvcnRzLnV0aWwgPSBfXG5leHBvcnRzLmNvbmZpZyA9IGNvbmZpZ1xuZXhwb3J0cy5zZXQgPSBfLnNldFxuZXhwb3J0cy5kZWxldGUgPSBfLmRlbGV0ZVxuZXhwb3J0cy5uZXh0VGljayA9IF8ubmV4dFRpY2tcblxuLyoqXG4gKiBUaGUgZm9sbG93aW5nIGFyZSBleHBvc2VkIGZvciBhZHZhbmNlZCB1c2FnZSAvIHBsdWdpbnNcbiAqL1xuXG5leHBvcnRzLmNvbXBpbGVyID0gcmVxdWlyZSgnLi4vY29tcGlsZXInKVxuZXhwb3J0cy5GcmFnbWVudEZhY3RvcnkgPSByZXF1aXJlKCcuLi9mcmFnbWVudC9mYWN0b3J5JylcbmV4cG9ydHMuaW50ZXJuYWxEaXJlY3RpdmVzID0gcmVxdWlyZSgnLi4vZGlyZWN0aXZlcy9pbnRlcm5hbCcpXG5leHBvcnRzLnBhcnNlcnMgPSB7XG4gIHBhdGg6IHJlcXVpcmUoJy4uL3BhcnNlcnMvcGF0aCcpLFxuICB0ZXh0OiByZXF1aXJlKCcuLi9wYXJzZXJzL3RleHQnKSxcbiAgdGVtcGxhdGU6IHJlcXVpcmUoJy4uL3BhcnNlcnMvdGVtcGxhdGUnKSxcbiAgZGlyZWN0aXZlOiByZXF1aXJlKCcuLi9wYXJzZXJzL2RpcmVjdGl2ZScpLFxuICBleHByZXNzaW9uOiByZXF1aXJlKCcuLi9wYXJzZXJzL2V4cHJlc3Npb24nKVxufVxuXG4vKipcbiAqIEVhY2ggaW5zdGFuY2UgY29uc3RydWN0b3IsIGluY2x1ZGluZyBWdWUsIGhhcyBhIHVuaXF1ZVxuICogY2lkLiBUaGlzIGVuYWJsZXMgdXMgdG8gY3JlYXRlIHdyYXBwZWQgXCJjaGlsZFxuICogY29uc3RydWN0b3JzXCIgZm9yIHByb3RvdHlwYWwgaW5oZXJpdGFuY2UgYW5kIGNhY2hlIHRoZW0uXG4gKi9cblxuZXhwb3J0cy5jaWQgPSAwXG52YXIgY2lkID0gMVxuXG4vKipcbiAqIENsYXNzIGluaGVyaXRhbmNlXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGV4dGVuZE9wdGlvbnNcbiAqL1xuXG5leHBvcnRzLmV4dGVuZCA9IGZ1bmN0aW9uIChleHRlbmRPcHRpb25zKSB7XG4gIGV4dGVuZE9wdGlvbnMgPSBleHRlbmRPcHRpb25zIHx8IHt9XG4gIHZhciBTdXBlciA9IHRoaXNcbiAgdmFyIGlzRmlyc3RFeHRlbmQgPSBTdXBlci5jaWQgPT09IDBcbiAgaWYgKGlzRmlyc3RFeHRlbmQgJiYgZXh0ZW5kT3B0aW9ucy5fQ3Rvcikge1xuICAgIHJldHVybiBleHRlbmRPcHRpb25zLl9DdG9yXG4gIH1cbiAgdmFyIG5hbWUgPSBleHRlbmRPcHRpb25zLm5hbWUgfHwgU3VwZXIub3B0aW9ucy5uYW1lXG4gIHZhciBTdWIgPSBjcmVhdGVDbGFzcyhuYW1lIHx8ICdWdWVDb21wb25lbnQnKVxuICBTdWIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShTdXBlci5wcm90b3R5cGUpXG4gIFN1Yi5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBTdWJcbiAgU3ViLmNpZCA9IGNpZCsrXG4gIFN1Yi5vcHRpb25zID0gXy5tZXJnZU9wdGlvbnMoXG4gICAgU3VwZXIub3B0aW9ucyxcbiAgICBleHRlbmRPcHRpb25zXG4gIClcbiAgU3ViWydzdXBlciddID0gU3VwZXJcbiAgLy8gYWxsb3cgZnVydGhlciBleHRlbnNpb25cbiAgU3ViLmV4dGVuZCA9IFN1cGVyLmV4dGVuZFxuICAvLyBjcmVhdGUgYXNzZXQgcmVnaXN0ZXJzLCBzbyBleHRlbmRlZCBjbGFzc2VzXG4gIC8vIGNhbiBoYXZlIHRoZWlyIHByaXZhdGUgYXNzZXRzIHRvby5cbiAgY29uZmlnLl9hc3NldFR5cGVzLmZvckVhY2goZnVuY3Rpb24gKHR5cGUpIHtcbiAgICBTdWJbdHlwZV0gPSBTdXBlclt0eXBlXVxuICB9KVxuICAvLyBlbmFibGUgcmVjdXJzaXZlIHNlbGYtbG9va3VwXG4gIGlmIChuYW1lKSB7XG4gICAgU3ViLm9wdGlvbnMuY29tcG9uZW50c1tuYW1lXSA9IFN1YlxuICB9XG4gIC8vIGNhY2hlIGNvbnN0cnVjdG9yXG4gIGlmIChpc0ZpcnN0RXh0ZW5kKSB7XG4gICAgZXh0ZW5kT3B0aW9ucy5fQ3RvciA9IFN1YlxuICB9XG4gIHJldHVybiBTdWJcbn1cblxuLyoqXG4gKiBBIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIHN1Yi1jbGFzcyBjb25zdHJ1Y3RvciB3aXRoIHRoZVxuICogZ2l2ZW4gbmFtZS4gVGhpcyBnaXZlcyB1cyBtdWNoIG5pY2VyIG91dHB1dCB3aGVuXG4gKiBsb2dnaW5nIGluc3RhbmNlcyBpbiB0aGUgY29uc29sZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlQ2xhc3MgKG5hbWUpIHtcbiAgcmV0dXJuIG5ldyBGdW5jdGlvbihcbiAgICAncmV0dXJuIGZ1bmN0aW9uICcgKyBfLmNsYXNzaWZ5KG5hbWUpICtcbiAgICAnIChvcHRpb25zKSB7IHRoaXMuX2luaXQob3B0aW9ucykgfSdcbiAgKSgpXG59XG5cbi8qKlxuICogUGx1Z2luIHN5c3RlbVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBwbHVnaW5cbiAqL1xuXG5leHBvcnRzLnVzZSA9IGZ1bmN0aW9uIChwbHVnaW4pIHtcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmIChwbHVnaW4uaW5zdGFsbGVkKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgLy8gYWRkaXRpb25hbCBwYXJhbWV0ZXJzXG4gIHZhciBhcmdzID0gXy50b0FycmF5KGFyZ3VtZW50cywgMSlcbiAgYXJncy51bnNoaWZ0KHRoaXMpXG4gIGlmICh0eXBlb2YgcGx1Z2luLmluc3RhbGwgPT09ICdmdW5jdGlvbicpIHtcbiAgICBwbHVnaW4uaW5zdGFsbC5hcHBseShwbHVnaW4sIGFyZ3MpXG4gIH0gZWxzZSB7XG4gICAgcGx1Z2luLmFwcGx5KG51bGwsIGFyZ3MpXG4gIH1cbiAgcGx1Z2luLmluc3RhbGxlZCA9IHRydWVcbiAgcmV0dXJuIHRoaXNcbn1cblxuLyoqXG4gKiBBcHBseSBhIGdsb2JhbCBtaXhpbiBieSBtZXJnaW5nIGl0IGludG8gdGhlIGRlZmF1bHRcbiAqIG9wdGlvbnMuXG4gKi9cblxuZXhwb3J0cy5taXhpbiA9IGZ1bmN0aW9uIChtaXhpbikge1xuICB2YXIgVnVlID0gXy5WdWVcbiAgVnVlLm9wdGlvbnMgPSBfLm1lcmdlT3B0aW9ucyhWdWUub3B0aW9ucywgbWl4aW4pXG59XG5cbi8qKlxuICogQ3JlYXRlIGFzc2V0IHJlZ2lzdHJhdGlvbiBtZXRob2RzIHdpdGggdGhlIGZvbGxvd2luZ1xuICogc2lnbmF0dXJlOlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZFxuICogQHBhcmFtIHsqfSBkZWZpbml0aW9uXG4gKi9cblxuY29uZmlnLl9hc3NldFR5cGVzLmZvckVhY2goZnVuY3Rpb24gKHR5cGUpIHtcbiAgZXhwb3J0c1t0eXBlXSA9IGZ1bmN0aW9uIChpZCwgZGVmaW5pdGlvbikge1xuICAgIGlmICghZGVmaW5pdGlvbikge1xuICAgICAgcmV0dXJuIHRoaXMub3B0aW9uc1t0eXBlICsgJ3MnXVtpZF1cbiAgICB9IGVsc2Uge1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAodHlwZSA9PT0gJ2NvbXBvbmVudCcgJiYgXy5jb21tb25UYWdSRS50ZXN0KGlkKSkge1xuICAgICAgICAgIF8ud2FybihcbiAgICAgICAgICAgICdEbyBub3QgdXNlIGJ1aWx0LWluIEhUTUwgZWxlbWVudHMgYXMgY29tcG9uZW50ICcgK1xuICAgICAgICAgICAgJ2lkOiAnICsgaWRcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgdHlwZSA9PT0gJ2NvbXBvbmVudCcgJiZcbiAgICAgICAgXy5pc1BsYWluT2JqZWN0KGRlZmluaXRpb24pXG4gICAgICApIHtcbiAgICAgICAgZGVmaW5pdGlvbi5uYW1lID0gaWRcbiAgICAgICAgZGVmaW5pdGlvbiA9IF8uVnVlLmV4dGVuZChkZWZpbml0aW9uKVxuICAgICAgfVxuICAgICAgdGhpcy5vcHRpb25zW3R5cGUgKyAncyddW2lkXSA9IGRlZmluaXRpb25cbiAgICAgIHJldHVybiBkZWZpbml0aW9uXG4gICAgfVxuICB9XG59KVxuIiwidmFyIF8gPSByZXF1aXJlKCcuLi91dGlsJylcbnZhciBjb21waWxlciA9IHJlcXVpcmUoJy4uL2NvbXBpbGVyJylcblxuLyoqXG4gKiBTZXQgaW5zdGFuY2UgdGFyZ2V0IGVsZW1lbnQgYW5kIGtpY2sgb2ZmIHRoZSBjb21waWxhdGlvblxuICogcHJvY2Vzcy4gVGhlIHBhc3NlZCBpbiBgZWxgIGNhbiBiZSBhIHNlbGVjdG9yIHN0cmluZywgYW5cbiAqIGV4aXN0aW5nIEVsZW1lbnQsIG9yIGEgRG9jdW1lbnRGcmFnbWVudCAoZm9yIGJsb2NrXG4gKiBpbnN0YW5jZXMpLlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudHxEb2N1bWVudEZyYWdtZW50fHN0cmluZ30gZWxcbiAqIEBwdWJsaWNcbiAqL1xuXG5leHBvcnRzLiRtb3VudCA9IGZ1bmN0aW9uIChlbCkge1xuICBpZiAodGhpcy5faXNDb21waWxlZCkge1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgXy53YXJuKFxuICAgICAgJyRtb3VudCgpIHNob3VsZCBiZSBjYWxsZWQgb25seSBvbmNlLidcbiAgICApXG4gICAgcmV0dXJuXG4gIH1cbiAgZWwgPSBfLnF1ZXJ5KGVsKVxuICBpZiAoIWVsKSB7XG4gICAgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB9XG4gIHRoaXMuX2NvbXBpbGUoZWwpXG4gIHRoaXMuX2luaXRET01Ib29rcygpXG4gIGlmIChfLmluRG9jKHRoaXMuJGVsKSkge1xuICAgIHRoaXMuX2NhbGxIb29rKCdhdHRhY2hlZCcpXG4gICAgcmVhZHkuY2FsbCh0aGlzKVxuICB9IGVsc2Uge1xuICAgIHRoaXMuJG9uY2UoJ2hvb2s6YXR0YWNoZWQnLCByZWFkeSlcbiAgfVxuICByZXR1cm4gdGhpc1xufVxuXG4vKipcbiAqIE1hcmsgYW4gaW5zdGFuY2UgYXMgcmVhZHkuXG4gKi9cblxuZnVuY3Rpb24gcmVhZHkgKCkge1xuICB0aGlzLl9pc0F0dGFjaGVkID0gdHJ1ZVxuICB0aGlzLl9pc1JlYWR5ID0gdHJ1ZVxuICB0aGlzLl9jYWxsSG9vaygncmVhZHknKVxufVxuXG4vKipcbiAqIFRlYXJkb3duIHRoZSBpbnN0YW5jZSwgc2ltcGx5IGRlbGVnYXRlIHRvIHRoZSBpbnRlcm5hbFxuICogX2Rlc3Ryb3kuXG4gKi9cblxuZXhwb3J0cy4kZGVzdHJveSA9IGZ1bmN0aW9uIChyZW1vdmUsIGRlZmVyQ2xlYW51cCkge1xuICB0aGlzLl9kZXN0cm95KHJlbW92ZSwgZGVmZXJDbGVhbnVwKVxufVxuXG4vKipcbiAqIFBhcnRpYWxseSBjb21waWxlIGEgcGllY2Ugb2YgRE9NIGFuZCByZXR1cm4gYVxuICogZGVjb21waWxlIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudHxEb2N1bWVudEZyYWdtZW50fSBlbFxuICogQHBhcmFtIHtWdWV9IFtob3N0XVxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKi9cblxuZXhwb3J0cy4kY29tcGlsZSA9IGZ1bmN0aW9uIChlbCwgaG9zdCwgc2NvcGUsIGZyYWcpIHtcbiAgcmV0dXJuIGNvbXBpbGVyLmNvbXBpbGUoZWwsIHRoaXMuJG9wdGlvbnMsIHRydWUpKFxuICAgIHRoaXMsIGVsLCBob3N0LCBzY29wZSwgZnJhZ1xuICApXG59XG4iLCJ2YXIgXyA9IHJlcXVpcmUoJy4vdXRpbCcpXG52YXIgY29uZmlnID0gcmVxdWlyZSgnLi9jb25maWcnKVxuXG4vLyB3ZSBoYXZlIHR3byBzZXBhcmF0ZSBxdWV1ZXM6IG9uZSBmb3IgZGlyZWN0aXZlIHVwZGF0ZXNcbi8vIGFuZCBvbmUgZm9yIHVzZXIgd2F0Y2hlciByZWdpc3RlcmVkIHZpYSAkd2F0Y2goKS5cbi8vIHdlIHdhbnQgdG8gZ3VhcmFudGVlIGRpcmVjdGl2ZSB1cGRhdGVzIHRvIGJlIGNhbGxlZFxuLy8gYmVmb3JlIHVzZXIgd2F0Y2hlcnMgc28gdGhhdCB3aGVuIHVzZXIgd2F0Y2hlcnMgYXJlXG4vLyB0cmlnZ2VyZWQsIHRoZSBET00gd291bGQgaGF2ZSBhbHJlYWR5IGJlZW4gaW4gdXBkYXRlZFxuLy8gc3RhdGUuXG52YXIgcXVldWUgPSBbXVxudmFyIHVzZXJRdWV1ZSA9IFtdXG52YXIgaGFzID0ge31cbnZhciBjaXJjdWxhciA9IHt9XG52YXIgd2FpdGluZyA9IGZhbHNlXG52YXIgaW50ZXJuYWxRdWV1ZURlcGxldGVkID0gZmFsc2VcblxuLyoqXG4gKiBSZXNldCB0aGUgYmF0Y2hlcidzIHN0YXRlLlxuICovXG5cbmZ1bmN0aW9uIHJlc2V0QmF0Y2hlclN0YXRlICgpIHtcbiAgcXVldWUgPSBbXVxuICB1c2VyUXVldWUgPSBbXVxuICBoYXMgPSB7fVxuICBjaXJjdWxhciA9IHt9XG4gIHdhaXRpbmcgPSBpbnRlcm5hbFF1ZXVlRGVwbGV0ZWQgPSBmYWxzZVxufVxuXG4vKipcbiAqIEZsdXNoIGJvdGggcXVldWVzIGFuZCBydW4gdGhlIHdhdGNoZXJzLlxuICovXG5cbmZ1bmN0aW9uIGZsdXNoQmF0Y2hlclF1ZXVlICgpIHtcbiAgcnVuQmF0Y2hlclF1ZXVlKHF1ZXVlKVxuICBpbnRlcm5hbFF1ZXVlRGVwbGV0ZWQgPSB0cnVlXG4gIHJ1bkJhdGNoZXJRdWV1ZSh1c2VyUXVldWUpXG4gIC8vIGRldiB0b29sIGhvb2tcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKF8uaW5Ccm93c2VyICYmIHdpbmRvdy5fX1ZVRV9ERVZUT09MU19HTE9CQUxfSE9PS19fKSB7XG4gICAgICB3aW5kb3cuX19WVUVfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5lbWl0KCdmbHVzaCcpXG4gICAgfVxuICB9XG4gIHJlc2V0QmF0Y2hlclN0YXRlKClcbn1cblxuLyoqXG4gKiBSdW4gdGhlIHdhdGNoZXJzIGluIGEgc2luZ2xlIHF1ZXVlLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IHF1ZXVlXG4gKi9cblxuZnVuY3Rpb24gcnVuQmF0Y2hlclF1ZXVlIChxdWV1ZSkge1xuICAvLyBkbyBub3QgY2FjaGUgbGVuZ3RoIGJlY2F1c2UgbW9yZSB3YXRjaGVycyBtaWdodCBiZSBwdXNoZWRcbiAgLy8gYXMgd2UgcnVuIGV4aXN0aW5nIHdhdGNoZXJzXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcXVldWUubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgd2F0Y2hlciA9IHF1ZXVlW2ldXG4gICAgdmFyIGlkID0gd2F0Y2hlci5pZFxuICAgIGhhc1tpZF0gPSBudWxsXG4gICAgd2F0Y2hlci5ydW4oKVxuICAgIC8vIGluIGRldiBidWlsZCwgY2hlY2sgYW5kIHN0b3AgY2lyY3VsYXIgdXBkYXRlcy5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBoYXNbaWRdICE9IG51bGwpIHtcbiAgICAgIGNpcmN1bGFyW2lkXSA9IChjaXJjdWxhcltpZF0gfHwgMCkgKyAxXG4gICAgICBpZiAoY2lyY3VsYXJbaWRdID4gY29uZmlnLl9tYXhVcGRhdGVDb3VudCkge1xuICAgICAgICBxdWV1ZS5zcGxpY2UoaGFzW2lkXSwgMSlcbiAgICAgICAgXy53YXJuKFxuICAgICAgICAgICdZb3UgbWF5IGhhdmUgYW4gaW5maW5pdGUgdXBkYXRlIGxvb3AgZm9yIHdhdGNoZXIgJyArXG4gICAgICAgICAgJ3dpdGggZXhwcmVzc2lvbjogJyArIHdhdGNoZXIuZXhwcmVzc2lvblxuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogUHVzaCBhIHdhdGNoZXIgaW50byB0aGUgd2F0Y2hlciBxdWV1ZS5cbiAqIEpvYnMgd2l0aCBkdXBsaWNhdGUgSURzIHdpbGwgYmUgc2tpcHBlZCB1bmxlc3MgaXQnc1xuICogcHVzaGVkIHdoZW4gdGhlIHF1ZXVlIGlzIGJlaW5nIGZsdXNoZWQuXG4gKlxuICogQHBhcmFtIHtXYXRjaGVyfSB3YXRjaGVyXG4gKiAgIHByb3BlcnRpZXM6XG4gKiAgIC0ge051bWJlcn0gaWRcbiAqICAgLSB7RnVuY3Rpb259IHJ1blxuICovXG5cbmV4cG9ydHMucHVzaCA9IGZ1bmN0aW9uICh3YXRjaGVyKSB7XG4gIHZhciBpZCA9IHdhdGNoZXIuaWRcbiAgaWYgKGhhc1tpZF0gPT0gbnVsbCkge1xuICAgIC8vIGlmIGFuIGludGVybmFsIHdhdGNoZXIgaXMgcHVzaGVkLCBidXQgdGhlIGludGVybmFsXG4gICAgLy8gcXVldWUgaXMgYWxyZWFkeSBkZXBsZXRlZCwgd2UgcnVuIGl0IGltbWVkaWF0ZWx5LlxuICAgIGlmIChpbnRlcm5hbFF1ZXVlRGVwbGV0ZWQgJiYgIXdhdGNoZXIudXNlcikge1xuICAgICAgd2F0Y2hlci5ydW4oKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIHB1c2ggd2F0Y2hlciBpbnRvIGFwcHJvcHJpYXRlIHF1ZXVlXG4gICAgdmFyIHEgPSB3YXRjaGVyLnVzZXIgPyB1c2VyUXVldWUgOiBxdWV1ZVxuICAgIGhhc1tpZF0gPSBxLmxlbmd0aFxuICAgIHEucHVzaCh3YXRjaGVyKVxuICAgIC8vIHF1ZXVlIHRoZSBmbHVzaFxuICAgIGlmICghd2FpdGluZykge1xuICAgICAgd2FpdGluZyA9IHRydWVcbiAgICAgIF8ubmV4dFRpY2soZmx1c2hCYXRjaGVyUXVldWUpXG4gICAgfVxuICB9XG59XG4iLCIvKipcbiAqIEEgZG91Ymx5IGxpbmtlZCBsaXN0LWJhc2VkIExlYXN0IFJlY2VudGx5IFVzZWQgKExSVSlcbiAqIGNhY2hlLiBXaWxsIGtlZXAgbW9zdCByZWNlbnRseSB1c2VkIGl0ZW1zIHdoaWxlXG4gKiBkaXNjYXJkaW5nIGxlYXN0IHJlY2VudGx5IHVzZWQgaXRlbXMgd2hlbiBpdHMgbGltaXQgaXNcbiAqIHJlYWNoZWQuIFRoaXMgaXMgYSBiYXJlLWJvbmUgdmVyc2lvbiBvZlxuICogUmFzbXVzIEFuZGVyc3NvbidzIGpzLWxydTpcbiAqXG4gKiAgIGh0dHBzOi8vZ2l0aHViLmNvbS9yc21zL2pzLWxydVxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBsaW1pdFxuICogQGNvbnN0cnVjdG9yXG4gKi9cblxuZnVuY3Rpb24gQ2FjaGUgKGxpbWl0KSB7XG4gIHRoaXMuc2l6ZSA9IDBcbiAgdGhpcy5saW1pdCA9IGxpbWl0XG4gIHRoaXMuaGVhZCA9IHRoaXMudGFpbCA9IHVuZGVmaW5lZFxuICB0aGlzLl9rZXltYXAgPSBPYmplY3QuY3JlYXRlKG51bGwpXG59XG5cbnZhciBwID0gQ2FjaGUucHJvdG90eXBlXG5cbi8qKlxuICogUHV0IDx2YWx1ZT4gaW50byB0aGUgY2FjaGUgYXNzb2NpYXRlZCB3aXRoIDxrZXk+LlxuICogUmV0dXJucyB0aGUgZW50cnkgd2hpY2ggd2FzIHJlbW92ZWQgdG8gbWFrZSByb29tIGZvclxuICogdGhlIG5ldyBlbnRyeS4gT3RoZXJ3aXNlIHVuZGVmaW5lZCBpcyByZXR1cm5lZC5cbiAqIChpLmUuIGlmIHRoZXJlIHdhcyBlbm91Z2ggcm9vbSBhbHJlYWR5KS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5XG4gKiBAcGFyYW0geyp9IHZhbHVlXG4gKiBAcmV0dXJuIHtFbnRyeXx1bmRlZmluZWR9XG4gKi9cblxucC5wdXQgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICB2YXIgZW50cnkgPSB7XG4gICAga2V5OiBrZXksXG4gICAgdmFsdWU6IHZhbHVlXG4gIH1cbiAgdGhpcy5fa2V5bWFwW2tleV0gPSBlbnRyeVxuICBpZiAodGhpcy50YWlsKSB7XG4gICAgdGhpcy50YWlsLm5ld2VyID0gZW50cnlcbiAgICBlbnRyeS5vbGRlciA9IHRoaXMudGFpbFxuICB9IGVsc2Uge1xuICAgIHRoaXMuaGVhZCA9IGVudHJ5XG4gIH1cbiAgdGhpcy50YWlsID0gZW50cnlcbiAgaWYgKHRoaXMuc2l6ZSA9PT0gdGhpcy5saW1pdCkge1xuICAgIHJldHVybiB0aGlzLnNoaWZ0KClcbiAgfSBlbHNlIHtcbiAgICB0aGlzLnNpemUrK1xuICB9XG59XG5cbi8qKlxuICogUHVyZ2UgdGhlIGxlYXN0IHJlY2VudGx5IHVzZWQgKG9sZGVzdCkgZW50cnkgZnJvbSB0aGVcbiAqIGNhY2hlLiBSZXR1cm5zIHRoZSByZW1vdmVkIGVudHJ5IG9yIHVuZGVmaW5lZCBpZiB0aGVcbiAqIGNhY2hlIHdhcyBlbXB0eS5cbiAqL1xuXG5wLnNoaWZ0ID0gZnVuY3Rpb24gKCkge1xuICB2YXIgZW50cnkgPSB0aGlzLmhlYWRcbiAgaWYgKGVudHJ5KSB7XG4gICAgdGhpcy5oZWFkID0gdGhpcy5oZWFkLm5ld2VyXG4gICAgdGhpcy5oZWFkLm9sZGVyID0gdW5kZWZpbmVkXG4gICAgZW50cnkubmV3ZXIgPSBlbnRyeS5vbGRlciA9IHVuZGVmaW5lZFxuICAgIHRoaXMuX2tleW1hcFtlbnRyeS5rZXldID0gdW5kZWZpbmVkXG4gIH1cbiAgcmV0dXJuIGVudHJ5XG59XG5cbi8qKlxuICogR2V0IGFuZCByZWdpc3RlciByZWNlbnQgdXNlIG9mIDxrZXk+LiBSZXR1cm5zIHRoZSB2YWx1ZVxuICogYXNzb2NpYXRlZCB3aXRoIDxrZXk+IG9yIHVuZGVmaW5lZCBpZiBub3QgaW4gY2FjaGUuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGtleVxuICogQHBhcmFtIHtCb29sZWFufSByZXR1cm5FbnRyeVxuICogQHJldHVybiB7RW50cnl8Kn1cbiAqL1xuXG5wLmdldCA9IGZ1bmN0aW9uIChrZXksIHJldHVybkVudHJ5KSB7XG4gIHZhciBlbnRyeSA9IHRoaXMuX2tleW1hcFtrZXldXG4gIGlmIChlbnRyeSA9PT0gdW5kZWZpbmVkKSByZXR1cm5cbiAgaWYgKGVudHJ5ID09PSB0aGlzLnRhaWwpIHtcbiAgICByZXR1cm4gcmV0dXJuRW50cnlcbiAgICAgID8gZW50cnlcbiAgICAgIDogZW50cnkudmFsdWVcbiAgfVxuICAvLyBIRUFELS0tLS0tLS0tLS0tLS1UQUlMXG4gIC8vICAgPC5vbGRlciAgIC5uZXdlcj5cbiAgLy8gIDwtLS0gYWRkIGRpcmVjdGlvbiAtLVxuICAvLyAgIEEgIEIgIEMgIDxEPiAgRVxuICBpZiAoZW50cnkubmV3ZXIpIHtcbiAgICBpZiAoZW50cnkgPT09IHRoaXMuaGVhZCkge1xuICAgICAgdGhpcy5oZWFkID0gZW50cnkubmV3ZXJcbiAgICB9XG4gICAgZW50cnkubmV3ZXIub2xkZXIgPSBlbnRyeS5vbGRlciAvLyBDIDwtLSBFLlxuICB9XG4gIGlmIChlbnRyeS5vbGRlcikge1xuICAgIGVudHJ5Lm9sZGVyLm5ld2VyID0gZW50cnkubmV3ZXIgLy8gQy4gLS0+IEVcbiAgfVxuICBlbnRyeS5uZXdlciA9IHVuZGVmaW5lZCAvLyBEIC0teFxuICBlbnRyeS5vbGRlciA9IHRoaXMudGFpbCAvLyBELiAtLT4gRVxuICBpZiAodGhpcy50YWlsKSB7XG4gICAgdGhpcy50YWlsLm5ld2VyID0gZW50cnkgLy8gRS4gPC0tIERcbiAgfVxuICB0aGlzLnRhaWwgPSBlbnRyeVxuICByZXR1cm4gcmV0dXJuRW50cnlcbiAgICA/IGVudHJ5XG4gICAgOiBlbnRyeS52YWx1ZVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENhY2hlXG4iLCJ2YXIgXyA9IHJlcXVpcmUoJy4uL3V0aWwnKVxudmFyIGRpclBhcnNlciA9IHJlcXVpcmUoJy4uL3BhcnNlcnMvZGlyZWN0aXZlJylcbnZhciBwcm9wRGVmID0gcmVxdWlyZSgnLi4vZGlyZWN0aXZlcy9pbnRlcm5hbC9wcm9wJylcbnZhciBwcm9wQmluZGluZ01vZGVzID0gcmVxdWlyZSgnLi4vY29uZmlnJykuX3Byb3BCaW5kaW5nTW9kZXNcbnZhciBlbXB0eSA9IHt9XG5cbi8vIHJlZ2V4ZXNcbnZhciBpZGVudFJFID0gcmVxdWlyZSgnLi4vcGFyc2Vycy9wYXRoJykuaWRlbnRSRVxudmFyIHNldHRhYmxlUGF0aFJFID0gL15bQS1aYS16XyRdW1xcdyRdKihcXC5bQS1aYS16XyRdW1xcdyRdKnxcXFtbXlxcW1xcXV0rXFxdKSokL1xuXG4vKipcbiAqIENvbXBpbGUgcHJvcHMgb24gYSByb290IGVsZW1lbnQgYW5kIHJldHVyblxuICogYSBwcm9wcyBsaW5rIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudHxEb2N1bWVudEZyYWdtZW50fSBlbFxuICogQHBhcmFtIHtBcnJheX0gcHJvcE9wdGlvbnNcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSBwcm9wc0xpbmtGblxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY29tcGlsZVByb3BzIChlbCwgcHJvcE9wdGlvbnMpIHtcbiAgdmFyIHByb3BzID0gW11cbiAgdmFyIG5hbWVzID0gT2JqZWN0LmtleXMocHJvcE9wdGlvbnMpXG4gIHZhciBpID0gbmFtZXMubGVuZ3RoXG4gIHZhciBvcHRpb25zLCBuYW1lLCBhdHRyLCB2YWx1ZSwgcGF0aCwgcGFyc2VkLCBwcm9wXG4gIHdoaWxlIChpLS0pIHtcbiAgICBuYW1lID0gbmFtZXNbaV1cbiAgICBvcHRpb25zID0gcHJvcE9wdGlvbnNbbmFtZV0gfHwgZW1wdHlcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIG5hbWUgPT09ICckZGF0YScpIHtcbiAgICAgIF8ud2FybignRG8gbm90IHVzZSAkZGF0YSBhcyBwcm9wLicpXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIC8vIHByb3BzIGNvdWxkIGNvbnRhaW4gZGFzaGVzLCB3aGljaCB3aWxsIGJlXG4gICAgLy8gaW50ZXJwcmV0ZWQgYXMgbWludXMgY2FsY3VsYXRpb25zIGJ5IHRoZSBwYXJzZXJcbiAgICAvLyBzbyB3ZSBuZWVkIHRvIGNhbWVsaXplIHRoZSBwYXRoIGhlcmVcbiAgICBwYXRoID0gXy5jYW1lbGl6ZShuYW1lKVxuICAgIGlmICghaWRlbnRSRS50ZXN0KHBhdGgpKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIF8ud2FybihcbiAgICAgICAgJ0ludmFsaWQgcHJvcCBrZXk6IFwiJyArIG5hbWUgKyAnXCIuIFByb3Aga2V5cyAnICtcbiAgICAgICAgJ211c3QgYmUgdmFsaWQgaWRlbnRpZmllcnMuJ1xuICAgICAgKVxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBwcm9wID0ge1xuICAgICAgbmFtZTogbmFtZSxcbiAgICAgIHBhdGg6IHBhdGgsXG4gICAgICBvcHRpb25zOiBvcHRpb25zLFxuICAgICAgbW9kZTogcHJvcEJpbmRpbmdNb2Rlcy5PTkVfV0FZLFxuICAgICAgcmF3OiBudWxsXG4gICAgfVxuXG4gICAgYXR0ciA9IF8uaHlwaGVuYXRlKG5hbWUpXG4gICAgLy8gZmlyc3QgY2hlY2sgZHluYW1pYyB2ZXJzaW9uXG4gICAgaWYgKCh2YWx1ZSA9IF8uZ2V0QmluZEF0dHIoZWwsIGF0dHIpKSA9PT0gbnVsbCkge1xuICAgICAgaWYgKCh2YWx1ZSA9IF8uZ2V0QmluZEF0dHIoZWwsIGF0dHIgKyAnLnN5bmMnKSkgIT09IG51bGwpIHtcbiAgICAgICAgcHJvcC5tb2RlID0gcHJvcEJpbmRpbmdNb2Rlcy5UV09fV0FZXG4gICAgICB9IGVsc2UgaWYgKCh2YWx1ZSA9IF8uZ2V0QmluZEF0dHIoZWwsIGF0dHIgKyAnLm9uY2UnKSkgIT09IG51bGwpIHtcbiAgICAgICAgcHJvcC5tb2RlID0gcHJvcEJpbmRpbmdNb2Rlcy5PTkVfVElNRVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAodmFsdWUgIT09IG51bGwpIHtcbiAgICAgIC8vIGhhcyBkeW5hbWljIGJpbmRpbmchXG4gICAgICBwcm9wLnJhdyA9IHZhbHVlXG4gICAgICBwYXJzZWQgPSBkaXJQYXJzZXIucGFyc2UodmFsdWUpXG4gICAgICB2YWx1ZSA9IHBhcnNlZC5leHByZXNzaW9uXG4gICAgICBwcm9wLmZpbHRlcnMgPSBwYXJzZWQuZmlsdGVyc1xuICAgICAgLy8gY2hlY2sgYmluZGluZyB0eXBlXG4gICAgICBpZiAoXy5pc0xpdGVyYWwodmFsdWUpKSB7XG4gICAgICAgIC8vIGZvciBleHByZXNzaW9ucyBjb250YWluaW5nIGxpdGVyYWwgbnVtYmVycyBhbmRcbiAgICAgICAgLy8gYm9vbGVhbnMsIHRoZXJlJ3Mgbm8gbmVlZCB0byBzZXR1cCBhIHByb3AgYmluZGluZyxcbiAgICAgICAgLy8gc28gd2UgY2FuIG9wdGltaXplIHRoZW0gYXMgYSBvbmUtdGltZSBzZXQuXG4gICAgICAgIHByb3Aub3B0aW1pemVkTGl0ZXJhbCA9IHRydWVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb3AuZHluYW1pYyA9IHRydWVcbiAgICAgICAgLy8gY2hlY2sgbm9uLXNldHRhYmxlIHBhdGggZm9yIHR3by13YXkgYmluZGluZ3NcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiZcbiAgICAgICAgICAgIHByb3AubW9kZSA9PT0gcHJvcEJpbmRpbmdNb2Rlcy5UV09fV0FZICYmXG4gICAgICAgICAgICAhc2V0dGFibGVQYXRoUkUudGVzdCh2YWx1ZSkpIHtcbiAgICAgICAgICBwcm9wLm1vZGUgPSBwcm9wQmluZGluZ01vZGVzLk9ORV9XQVlcbiAgICAgICAgICBfLndhcm4oXG4gICAgICAgICAgICAnQ2Fubm90IGJpbmQgdHdvLXdheSBwcm9wIHdpdGggbm9uLXNldHRhYmxlICcgK1xuICAgICAgICAgICAgJ3BhcmVudCBwYXRoOiAnICsgdmFsdWVcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHByb3AucGFyZW50UGF0aCA9IHZhbHVlXG5cbiAgICAgIC8vIHdhcm4gcmVxdWlyZWQgdHdvLXdheVxuICAgICAgaWYgKFxuICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmXG4gICAgICAgIG9wdGlvbnMudHdvV2F5ICYmXG4gICAgICAgIHByb3AubW9kZSAhPT0gcHJvcEJpbmRpbmdNb2Rlcy5UV09fV0FZXG4gICAgICApIHtcbiAgICAgICAgXy53YXJuKFxuICAgICAgICAgICdQcm9wIFwiJyArIG5hbWUgKyAnXCIgZXhwZWN0cyBhIHR3by13YXkgYmluZGluZyB0eXBlLidcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoKHZhbHVlID0gXy5hdHRyKGVsLCBhdHRyKSkgIT09IG51bGwpIHtcbiAgICAgIC8vIGhhcyBsaXRlcmFsIGJpbmRpbmchXG4gICAgICBwcm9wLnJhdyA9IHZhbHVlXG4gICAgfSBlbHNlIGlmIChvcHRpb25zLnJlcXVpcmVkKSB7XG4gICAgICAvLyB3YXJuIG1pc3NpbmcgcmVxdWlyZWRcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgXy53YXJuKFxuICAgICAgICAnTWlzc2luZyByZXF1aXJlZCBwcm9wOiAnICsgbmFtZVxuICAgICAgKVxuICAgIH1cbiAgICAvLyBwdXNoIHByb3BcbiAgICBwcm9wcy5wdXNoKHByb3ApXG4gIH1cbiAgcmV0dXJuIG1ha2VQcm9wc0xpbmtGbihwcm9wcylcbn1cblxuLyoqXG4gKiBCdWlsZCBhIGZ1bmN0aW9uIHRoYXQgYXBwbGllcyBwcm9wcyB0byBhIHZtLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IHByb3BzXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gcHJvcHNMaW5rRm5cbiAqL1xuXG5mdW5jdGlvbiBtYWtlUHJvcHNMaW5rRm4gKHByb3BzKSB7XG4gIHJldHVybiBmdW5jdGlvbiBwcm9wc0xpbmtGbiAodm0sIHNjb3BlKSB7XG4gICAgLy8gc3RvcmUgcmVzb2x2ZWQgcHJvcHMgaW5mb1xuICAgIHZtLl9wcm9wcyA9IHt9XG4gICAgdmFyIGkgPSBwcm9wcy5sZW5ndGhcbiAgICB2YXIgcHJvcCwgcGF0aCwgb3B0aW9ucywgdmFsdWUsIHJhd1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIHByb3AgPSBwcm9wc1tpXVxuICAgICAgcmF3ID0gcHJvcC5yYXdcbiAgICAgIHBhdGggPSBwcm9wLnBhdGhcbiAgICAgIG9wdGlvbnMgPSBwcm9wLm9wdGlvbnNcbiAgICAgIHZtLl9wcm9wc1twYXRoXSA9IHByb3BcbiAgICAgIGlmIChyYXcgPT09IG51bGwpIHtcbiAgICAgICAgLy8gaW5pdGlhbGl6ZSBhYnNlbnQgcHJvcFxuICAgICAgICBfLmluaXRQcm9wKHZtLCBwcm9wLCBnZXREZWZhdWx0KHZtLCBvcHRpb25zKSlcbiAgICAgIH0gZWxzZSBpZiAocHJvcC5keW5hbWljKSB7XG4gICAgICAgIC8vIGR5bmFtaWMgcHJvcFxuICAgICAgICBpZiAodm0uX2NvbnRleHQpIHtcbiAgICAgICAgICBpZiAocHJvcC5tb2RlID09PSBwcm9wQmluZGluZ01vZGVzLk9ORV9USU1FKSB7XG4gICAgICAgICAgICAvLyBvbmUgdGltZSBiaW5kaW5nXG4gICAgICAgICAgICB2YWx1ZSA9IChzY29wZSB8fCB2bS5fY29udGV4dCkuJGdldChwcm9wLnBhcmVudFBhdGgpXG4gICAgICAgICAgICBfLmluaXRQcm9wKHZtLCBwcm9wLCB2YWx1ZSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gZHluYW1pYyBiaW5kaW5nXG4gICAgICAgICAgICB2bS5fYmluZERpcih7XG4gICAgICAgICAgICAgIG5hbWU6ICdwcm9wJyxcbiAgICAgICAgICAgICAgZGVmOiBwcm9wRGVmLFxuICAgICAgICAgICAgICBwcm9wOiBwcm9wXG4gICAgICAgICAgICB9LCBudWxsLCBudWxsLCBzY29wZSkgLy8gZWwsIGhvc3QsIHNjb3BlXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgXy53YXJuKFxuICAgICAgICAgICAgJ0Nhbm5vdCBiaW5kIGR5bmFtaWMgcHJvcCBvbiBhIHJvb3QgaW5zdGFuY2UnICtcbiAgICAgICAgICAgICcgd2l0aCBubyBwYXJlbnQ6ICcgKyBwcm9wLm5hbWUgKyAnPVwiJyArXG4gICAgICAgICAgICByYXcgKyAnXCInXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHByb3Aub3B0aW1pemVkTGl0ZXJhbCkge1xuICAgICAgICAvLyBvcHRpbWl6ZWQgbGl0ZXJhbCwgY2FzdCBpdCBhbmQganVzdCBzZXQgb25jZVxuICAgICAgICB2YXIgc3RyaXBwZWQgPSBfLnN0cmlwUXVvdGVzKHJhdylcbiAgICAgICAgdmFsdWUgPSBzdHJpcHBlZCA9PT0gcmF3XG4gICAgICAgICAgPyBfLnRvQm9vbGVhbihfLnRvTnVtYmVyKHJhdykpXG4gICAgICAgICAgOiBzdHJpcHBlZFxuICAgICAgICBfLmluaXRQcm9wKHZtLCBwcm9wLCB2YWx1ZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHN0cmluZyBsaXRlcmFsLCBidXQgd2UgbmVlZCB0byBjYXRlciBmb3JcbiAgICAgICAgLy8gQm9vbGVhbiBwcm9wcyB3aXRoIG5vIHZhbHVlXG4gICAgICAgIHZhbHVlID0gb3B0aW9ucy50eXBlID09PSBCb29sZWFuICYmIHJhdyA9PT0gJydcbiAgICAgICAgICA/IHRydWVcbiAgICAgICAgICA6IHJhd1xuICAgICAgICBfLmluaXRQcm9wKHZtLCBwcm9wLCB2YWx1ZSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBHZXQgdGhlIGRlZmF1bHQgdmFsdWUgb2YgYSBwcm9wLlxuICpcbiAqIEBwYXJhbSB7VnVlfSB2bVxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqIEByZXR1cm4geyp9XG4gKi9cblxuZnVuY3Rpb24gZ2V0RGVmYXVsdCAodm0sIG9wdGlvbnMpIHtcbiAgLy8gbm8gZGVmYXVsdCwgcmV0dXJuIHVuZGVmaW5lZFxuICBpZiAoIW9wdGlvbnMuaGFzT3duUHJvcGVydHkoJ2RlZmF1bHQnKSkge1xuICAgIC8vIGFic2VudCBib29sZWFuIHZhbHVlIGRlZmF1bHRzIHRvIGZhbHNlXG4gICAgcmV0dXJuIG9wdGlvbnMudHlwZSA9PT0gQm9vbGVhblxuICAgICAgPyBmYWxzZVxuICAgICAgOiB1bmRlZmluZWRcbiAgfVxuICB2YXIgZGVmID0gb3B0aW9ucy5kZWZhdWx0XG4gIC8vIHdhcm4gYWdhaW5zdCBub24tZmFjdG9yeSBkZWZhdWx0cyBmb3IgT2JqZWN0ICYgQXJyYXlcbiAgaWYgKF8uaXNPYmplY3QoZGVmKSkge1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgXy53YXJuKFxuICAgICAgJ09iamVjdC9BcnJheSBhcyBkZWZhdWx0IHByb3AgdmFsdWVzIHdpbGwgYmUgc2hhcmVkICcgK1xuICAgICAgJ2Fjcm9zcyBtdWx0aXBsZSBpbnN0YW5jZXMuIFVzZSBhIGZhY3RvcnkgZnVuY3Rpb24gJyArXG4gICAgICAndG8gcmV0dXJuIHRoZSBkZWZhdWx0IHZhbHVlIGluc3RlYWQuJ1xuICAgIClcbiAgfVxuICAvLyBjYWxsIGZhY3RvcnkgZnVuY3Rpb24gZm9yIG5vbi1GdW5jdGlvbiB0eXBlc1xuICByZXR1cm4gdHlwZW9mIGRlZiA9PT0gJ2Z1bmN0aW9uJyAmJiBvcHRpb25zLnR5cGUgIT09IEZ1bmN0aW9uXG4gICAgPyBkZWYuY2FsbCh2bSlcbiAgICA6IGRlZlxufVxuIiwidmFyIF8gPSByZXF1aXJlKCcuLi91dGlsJylcbnZhciBwdWJsaWNEaXJlY3RpdmVzID0gcmVxdWlyZSgnLi4vZGlyZWN0aXZlcy9wdWJsaWMnKVxudmFyIGludGVybmFsRGlyZWN0aXZlcyA9IHJlcXVpcmUoJy4uL2RpcmVjdGl2ZXMvaW50ZXJuYWwnKVxudmFyIGNvbXBpbGVQcm9wcyA9IHJlcXVpcmUoJy4vY29tcGlsZS1wcm9wcycpXG52YXIgdGV4dFBhcnNlciA9IHJlcXVpcmUoJy4uL3BhcnNlcnMvdGV4dCcpXG52YXIgZGlyUGFyc2VyID0gcmVxdWlyZSgnLi4vcGFyc2Vycy9kaXJlY3RpdmUnKVxudmFyIHRlbXBsYXRlUGFyc2VyID0gcmVxdWlyZSgnLi4vcGFyc2Vycy90ZW1wbGF0ZScpXG52YXIgcmVzb2x2ZUFzc2V0ID0gXy5yZXNvbHZlQXNzZXRcblxuLy8gc3BlY2lhbCBiaW5kaW5nIHByZWZpeGVzXG52YXIgYmluZFJFID0gL152LWJpbmQ6fF46L1xudmFyIG9uUkUgPSAvXnYtb246fF5AL1xudmFyIGFyZ1JFID0gLzooLiopJC9cbnZhciBtb2RpZmllclJFID0gL1xcLlteXFwuXSsvZ1xudmFyIHRyYW5zaXRpb25SRSA9IC9eKHYtYmluZDp8Oik/dHJhbnNpdGlvbiQvXG5cbi8vIHRlcm1pbmFsIGRpcmVjdGl2ZXNcbnZhciB0ZXJtaW5hbERpcmVjdGl2ZXMgPSBbXG4gICdmb3InLFxuICAnaWYnXG5dXG5cbi8vIGRlZmF1bHQgZGlyZWN0aXZlIHByaW9yaXR5XG52YXIgREVGQVVMVF9QUklPUklUWSA9IDEwMDBcblxuLyoqXG4gKiBDb21waWxlIGEgdGVtcGxhdGUgYW5kIHJldHVybiBhIHJldXNhYmxlIGNvbXBvc2l0ZSBsaW5rXG4gKiBmdW5jdGlvbiwgd2hpY2ggcmVjdXJzaXZlbHkgY29udGFpbnMgbW9yZSBsaW5rIGZ1bmN0aW9uc1xuICogaW5zaWRlLiBUaGlzIHRvcCBsZXZlbCBjb21waWxlIGZ1bmN0aW9uIHdvdWxkIG5vcm1hbGx5XG4gKiBiZSBjYWxsZWQgb24gaW5zdGFuY2Ugcm9vdCBub2RlcywgYnV0IGNhbiBhbHNvIGJlIHVzZWRcbiAqIGZvciBwYXJ0aWFsIGNvbXBpbGF0aW9uIGlmIHRoZSBwYXJ0aWFsIGFyZ3VtZW50IGlzIHRydWUuXG4gKlxuICogVGhlIHJldHVybmVkIGNvbXBvc2l0ZSBsaW5rIGZ1bmN0aW9uLCB3aGVuIGNhbGxlZCwgd2lsbFxuICogcmV0dXJuIGFuIHVubGluayBmdW5jdGlvbiB0aGF0IHRlYXJzZG93biBhbGwgZGlyZWN0aXZlc1xuICogY3JlYXRlZCBkdXJpbmcgdGhlIGxpbmtpbmcgcGhhc2UuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fERvY3VtZW50RnJhZ21lbnR9IGVsXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICogQHBhcmFtIHtCb29sZWFufSBwYXJ0aWFsXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqL1xuXG5leHBvcnRzLmNvbXBpbGUgPSBmdW5jdGlvbiAoZWwsIG9wdGlvbnMsIHBhcnRpYWwpIHtcbiAgLy8gbGluayBmdW5jdGlvbiBmb3IgdGhlIG5vZGUgaXRzZWxmLlxuICB2YXIgbm9kZUxpbmtGbiA9IHBhcnRpYWwgfHwgIW9wdGlvbnMuX2FzQ29tcG9uZW50XG4gICAgPyBjb21waWxlTm9kZShlbCwgb3B0aW9ucylcbiAgICA6IG51bGxcbiAgLy8gbGluayBmdW5jdGlvbiBmb3IgdGhlIGNoaWxkTm9kZXNcbiAgdmFyIGNoaWxkTGlua0ZuID1cbiAgICAhKG5vZGVMaW5rRm4gJiYgbm9kZUxpbmtGbi50ZXJtaW5hbCkgJiZcbiAgICBlbC50YWdOYW1lICE9PSAnU0NSSVBUJyAmJlxuICAgIGVsLmhhc0NoaWxkTm9kZXMoKVxuICAgICAgPyBjb21waWxlTm9kZUxpc3QoZWwuY2hpbGROb2Rlcywgb3B0aW9ucylcbiAgICAgIDogbnVsbFxuXG4gIC8qKlxuICAgKiBBIGNvbXBvc2l0ZSBsaW5rZXIgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIG9uIGEgYWxyZWFkeVxuICAgKiBjb21waWxlZCBwaWVjZSBvZiBET00sIHdoaWNoIGluc3RhbnRpYXRlcyBhbGwgZGlyZWN0aXZlXG4gICAqIGluc3RhbmNlcy5cbiAgICpcbiAgICogQHBhcmFtIHtWdWV9IHZtXG4gICAqIEBwYXJhbSB7RWxlbWVudHxEb2N1bWVudEZyYWdtZW50fSBlbFxuICAgKiBAcGFyYW0ge1Z1ZX0gW2hvc3RdIC0gaG9zdCB2bSBvZiB0cmFuc2NsdWRlZCBjb250ZW50XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbc2NvcGVdIC0gdi1mb3Igc2NvcGVcbiAgICogQHBhcmFtIHtGcmFnbWVudH0gW2ZyYWddIC0gbGluayBjb250ZXh0IGZyYWdtZW50XG4gICAqIEByZXR1cm4ge0Z1bmN0aW9ufHVuZGVmaW5lZH1cbiAgICovXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIGNvbXBvc2l0ZUxpbmtGbiAodm0sIGVsLCBob3N0LCBzY29wZSwgZnJhZykge1xuICAgIC8vIGNhY2hlIGNoaWxkTm9kZXMgYmVmb3JlIGxpbmtpbmcgcGFyZW50LCBmaXggIzY1N1xuICAgIHZhciBjaGlsZE5vZGVzID0gXy50b0FycmF5KGVsLmNoaWxkTm9kZXMpXG4gICAgLy8gbGlua1xuICAgIHZhciBkaXJzID0gbGlua0FuZENhcHR1cmUoZnVuY3Rpb24gY29tcG9zaXRlTGlua0NhcHR1cmVyICgpIHtcbiAgICAgIGlmIChub2RlTGlua0ZuKSBub2RlTGlua0ZuKHZtLCBlbCwgaG9zdCwgc2NvcGUsIGZyYWcpXG4gICAgICBpZiAoY2hpbGRMaW5rRm4pIGNoaWxkTGlua0ZuKHZtLCBjaGlsZE5vZGVzLCBob3N0LCBzY29wZSwgZnJhZylcbiAgICB9LCB2bSlcbiAgICByZXR1cm4gbWFrZVVubGlua0ZuKHZtLCBkaXJzKVxuICB9XG59XG5cbi8qKlxuICogQXBwbHkgYSBsaW5rZXIgdG8gYSB2bS9lbGVtZW50IHBhaXIgYW5kIGNhcHR1cmUgdGhlXG4gKiBkaXJlY3RpdmVzIGNyZWF0ZWQgZHVyaW5nIHRoZSBwcm9jZXNzLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGxpbmtlclxuICogQHBhcmFtIHtWdWV9IHZtXG4gKi9cblxuZnVuY3Rpb24gbGlua0FuZENhcHR1cmUgKGxpbmtlciwgdm0pIHtcbiAgdmFyIG9yaWdpbmFsRGlyQ291bnQgPSB2bS5fZGlyZWN0aXZlcy5sZW5ndGhcbiAgbGlua2VyKClcbiAgdmFyIGRpcnMgPSB2bS5fZGlyZWN0aXZlcy5zbGljZShvcmlnaW5hbERpckNvdW50KVxuICBkaXJzLnNvcnQoZGlyZWN0aXZlQ29tcGFyYXRvcilcbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBkaXJzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGRpcnNbaV0uX2JpbmQoKVxuICB9XG4gIHJldHVybiBkaXJzXG59XG5cbi8qKlxuICogRGlyZWN0aXZlIHByaW9yaXR5IHNvcnQgY29tcGFyYXRvclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBhXG4gKiBAcGFyYW0ge09iamVjdH0gYlxuICovXG5cbmZ1bmN0aW9uIGRpcmVjdGl2ZUNvbXBhcmF0b3IgKGEsIGIpIHtcbiAgYSA9IGEuZGVzY3JpcHRvci5kZWYucHJpb3JpdHkgfHwgREVGQVVMVF9QUklPUklUWVxuICBiID0gYi5kZXNjcmlwdG9yLmRlZi5wcmlvcml0eSB8fCBERUZBVUxUX1BSSU9SSVRZXG4gIHJldHVybiBhID4gYiA/IC0xIDogYSA9PT0gYiA/IDAgOiAxXG59XG5cbi8qKlxuICogTGlua2VyIGZ1bmN0aW9ucyByZXR1cm4gYW4gdW5saW5rIGZ1bmN0aW9uIHRoYXRcbiAqIHRlYXJzZG93biBhbGwgZGlyZWN0aXZlcyBpbnN0YW5jZXMgZ2VuZXJhdGVkIGR1cmluZ1xuICogdGhlIHByb2Nlc3MuXG4gKlxuICogV2UgY3JlYXRlIHVubGluayBmdW5jdGlvbnMgd2l0aCBvbmx5IHRoZSBuZWNlc3NhcnlcbiAqIGluZm9ybWF0aW9uIHRvIGF2b2lkIHJldGFpbmluZyBhZGRpdGlvbmFsIGNsb3N1cmVzLlxuICpcbiAqIEBwYXJhbSB7VnVlfSB2bVxuICogQHBhcmFtIHtBcnJheX0gZGlyc1xuICogQHBhcmFtIHtWdWV9IFtjb250ZXh0XVxuICogQHBhcmFtIHtBcnJheX0gW2NvbnRleHREaXJzXVxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKi9cblxuZnVuY3Rpb24gbWFrZVVubGlua0ZuICh2bSwgZGlycywgY29udGV4dCwgY29udGV4dERpcnMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVubGluayAoZGVzdHJveWluZykge1xuICAgIHRlYXJkb3duRGlycyh2bSwgZGlycywgZGVzdHJveWluZylcbiAgICBpZiAoY29udGV4dCAmJiBjb250ZXh0RGlycykge1xuICAgICAgdGVhcmRvd25EaXJzKGNvbnRleHQsIGNvbnRleHREaXJzKVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIFRlYXJkb3duIHBhcnRpYWwgbGlua2VkIGRpcmVjdGl2ZXMuXG4gKlxuICogQHBhcmFtIHtWdWV9IHZtXG4gKiBAcGFyYW0ge0FycmF5fSBkaXJzXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGRlc3Ryb3lpbmdcbiAqL1xuXG5mdW5jdGlvbiB0ZWFyZG93bkRpcnMgKHZtLCBkaXJzLCBkZXN0cm95aW5nKSB7XG4gIHZhciBpID0gZGlycy5sZW5ndGhcbiAgd2hpbGUgKGktLSkge1xuICAgIGRpcnNbaV0uX3RlYXJkb3duKClcbiAgICBpZiAoIWRlc3Ryb3lpbmcpIHtcbiAgICAgIHZtLl9kaXJlY3RpdmVzLiRyZW1vdmUoZGlyc1tpXSlcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBDb21waWxlIGxpbmsgcHJvcHMgb24gYW4gaW5zdGFuY2UuXG4gKlxuICogQHBhcmFtIHtWdWV9IHZtXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcbiAqIEBwYXJhbSB7T2JqZWN0fSBbc2NvcGVdXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqL1xuXG5leHBvcnRzLmNvbXBpbGVBbmRMaW5rUHJvcHMgPSBmdW5jdGlvbiAodm0sIGVsLCBwcm9wcywgc2NvcGUpIHtcbiAgdmFyIHByb3BzTGlua0ZuID0gY29tcGlsZVByb3BzKGVsLCBwcm9wcylcbiAgdmFyIHByb3BEaXJzID0gbGlua0FuZENhcHR1cmUoZnVuY3Rpb24gKCkge1xuICAgIHByb3BzTGlua0ZuKHZtLCBzY29wZSlcbiAgfSwgdm0pXG4gIHJldHVybiBtYWtlVW5saW5rRm4odm0sIHByb3BEaXJzKVxufVxuXG4vKipcbiAqIENvbXBpbGUgdGhlIHJvb3QgZWxlbWVudCBvZiBhbiBpbnN0YW5jZS5cbiAqXG4gKiAxLiBhdHRycyBvbiBjb250ZXh0IGNvbnRhaW5lciAoY29udGV4dCBzY29wZSlcbiAqIDIuIGF0dHJzIG9uIHRoZSBjb21wb25lbnQgdGVtcGxhdGUgcm9vdCBub2RlLCBpZlxuICogICAgcmVwbGFjZTp0cnVlIChjaGlsZCBzY29wZSlcbiAqXG4gKiBJZiB0aGlzIGlzIGEgZnJhZ21lbnQgaW5zdGFuY2UsIHdlIG9ubHkgbmVlZCB0byBjb21waWxlIDEuXG4gKlxuICogQHBhcmFtIHtWdWV9IHZtXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICogQHBhcmFtIHtPYmplY3R9IGNvbnRleHRPcHRpb25zXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqL1xuXG5leHBvcnRzLmNvbXBpbGVSb290ID0gZnVuY3Rpb24gKGVsLCBvcHRpb25zLCBjb250ZXh0T3B0aW9ucykge1xuICB2YXIgY29udGFpbmVyQXR0cnMgPSBvcHRpb25zLl9jb250YWluZXJBdHRyc1xuICB2YXIgcmVwbGFjZXJBdHRycyA9IG9wdGlvbnMuX3JlcGxhY2VyQXR0cnNcbiAgdmFyIGNvbnRleHRMaW5rRm4sIHJlcGxhY2VyTGlua0ZuXG5cbiAgLy8gb25seSBuZWVkIHRvIGNvbXBpbGUgb3RoZXIgYXR0cmlidXRlcyBmb3JcbiAgLy8gbm9uLWZyYWdtZW50IGluc3RhbmNlc1xuICBpZiAoZWwubm9kZVR5cGUgIT09IDExKSB7XG4gICAgLy8gZm9yIGNvbXBvbmVudHMsIGNvbnRhaW5lciBhbmQgcmVwbGFjZXIgbmVlZCB0byBiZVxuICAgIC8vIGNvbXBpbGVkIHNlcGFyYXRlbHkgYW5kIGxpbmtlZCBpbiBkaWZmZXJlbnQgc2NvcGVzLlxuICAgIGlmIChvcHRpb25zLl9hc0NvbXBvbmVudCkge1xuICAgICAgLy8gMi4gY29udGFpbmVyIGF0dHJpYnV0ZXNcbiAgICAgIGlmIChjb250YWluZXJBdHRycyAmJiBjb250ZXh0T3B0aW9ucykge1xuICAgICAgICBjb250ZXh0TGlua0ZuID0gY29tcGlsZURpcmVjdGl2ZXMoY29udGFpbmVyQXR0cnMsIGNvbnRleHRPcHRpb25zKVxuICAgICAgfVxuICAgICAgaWYgKHJlcGxhY2VyQXR0cnMpIHtcbiAgICAgICAgLy8gMy4gcmVwbGFjZXIgYXR0cmlidXRlc1xuICAgICAgICByZXBsYWNlckxpbmtGbiA9IGNvbXBpbGVEaXJlY3RpdmVzKHJlcGxhY2VyQXR0cnMsIG9wdGlvbnMpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIG5vbi1jb21wb25lbnQsIGp1c3QgY29tcGlsZSBhcyBhIG5vcm1hbCBlbGVtZW50LlxuICAgICAgcmVwbGFjZXJMaW5rRm4gPSBjb21waWxlRGlyZWN0aXZlcyhlbC5hdHRyaWJ1dGVzLCBvcHRpb25zKVxuICAgIH1cbiAgfSBlbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGNvbnRhaW5lckF0dHJzKSB7XG4gICAgLy8gd2FybiBjb250YWluZXIgZGlyZWN0aXZlcyBmb3IgZnJhZ21lbnQgaW5zdGFuY2VzXG4gICAgdmFyIG5hbWVzID0gY29udGFpbmVyQXR0cnNcbiAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKGF0dHIpIHtcbiAgICAgICAgLy8gYWxsb3cgdnVlLWxvYWRlci92dWVpZnkgc2NvcGVkIGNzcyBhdHRyaWJ1dGVzXG4gICAgICAgIHJldHVybiBhdHRyLm5hbWUuaW5kZXhPZignX3YtJykgPCAwICYmXG4gICAgICAgICAgLy8gYWxsb3cgZXZlbnQgbGlzdGVuZXJzXG4gICAgICAgICAgIW9uUkUudGVzdChhdHRyLm5hbWUpICYmXG4gICAgICAgICAgLy8gYWxsb3cgc2xvdHNcbiAgICAgICAgICBhdHRyLm5hbWUgIT09ICdzbG90J1xuICAgICAgfSlcbiAgICAgIC5tYXAoZnVuY3Rpb24gKGF0dHIpIHtcbiAgICAgICAgcmV0dXJuICdcIicgKyBhdHRyLm5hbWUgKyAnXCInXG4gICAgICB9KVxuICAgIGlmIChuYW1lcy5sZW5ndGgpIHtcbiAgICAgIHZhciBwbHVyYWwgPSBuYW1lcy5sZW5ndGggPiAxXG4gICAgICBfLndhcm4oXG4gICAgICAgICdBdHRyaWJ1dGUnICsgKHBsdXJhbCA/ICdzICcgOiAnICcpICsgbmFtZXMuam9pbignLCAnKSArXG4gICAgICAgIChwbHVyYWwgPyAnIGFyZScgOiAnIGlzJykgKyAnIGlnbm9yZWQgb24gY29tcG9uZW50ICcgK1xuICAgICAgICAnPCcgKyBvcHRpb25zLmVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKSArICc+IGJlY2F1c2UgJyArXG4gICAgICAgICd0aGUgY29tcG9uZW50IGlzIGEgZnJhZ21lbnQgaW5zdGFuY2U6ICcgK1xuICAgICAgICAnaHR0cDovL3Z1ZWpzLm9yZy9ndWlkZS9jb21wb25lbnRzLmh0bWwjRnJhZ21lbnRfSW5zdGFuY2UnXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHJvb3RMaW5rRm4gKHZtLCBlbCwgc2NvcGUpIHtcbiAgICAvLyBsaW5rIGNvbnRleHQgc2NvcGUgZGlyc1xuICAgIHZhciBjb250ZXh0ID0gdm0uX2NvbnRleHRcbiAgICB2YXIgY29udGV4dERpcnNcbiAgICBpZiAoY29udGV4dCAmJiBjb250ZXh0TGlua0ZuKSB7XG4gICAgICBjb250ZXh0RGlycyA9IGxpbmtBbmRDYXB0dXJlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGV4dExpbmtGbihjb250ZXh0LCBlbCwgbnVsbCwgc2NvcGUpXG4gICAgICB9LCBjb250ZXh0KVxuICAgIH1cblxuICAgIC8vIGxpbmsgc2VsZlxuICAgIHZhciBzZWxmRGlycyA9IGxpbmtBbmRDYXB0dXJlKGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChyZXBsYWNlckxpbmtGbikgcmVwbGFjZXJMaW5rRm4odm0sIGVsKVxuICAgIH0sIHZtKVxuXG4gICAgLy8gcmV0dXJuIHRoZSB1bmxpbmsgZnVuY3Rpb24gdGhhdCB0ZWFyc2Rvd24gY29udGV4dFxuICAgIC8vIGNvbnRhaW5lciBkaXJlY3RpdmVzLlxuICAgIHJldHVybiBtYWtlVW5saW5rRm4odm0sIHNlbGZEaXJzLCBjb250ZXh0LCBjb250ZXh0RGlycylcbiAgfVxufVxuXG4vKipcbiAqIENvbXBpbGUgYSBub2RlIGFuZCByZXR1cm4gYSBub2RlTGlua0ZuIGJhc2VkIG9uIHRoZVxuICogbm9kZSB0eXBlLlxuICpcbiAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufG51bGx9XG4gKi9cblxuZnVuY3Rpb24gY29tcGlsZU5vZGUgKG5vZGUsIG9wdGlvbnMpIHtcbiAgdmFyIHR5cGUgPSBub2RlLm5vZGVUeXBlXG4gIGlmICh0eXBlID09PSAxICYmIG5vZGUudGFnTmFtZSAhPT0gJ1NDUklQVCcpIHtcbiAgICByZXR1cm4gY29tcGlsZUVsZW1lbnQobm9kZSwgb3B0aW9ucylcbiAgfSBlbHNlIGlmICh0eXBlID09PSAzICYmIG5vZGUuZGF0YS50cmltKCkpIHtcbiAgICByZXR1cm4gY29tcGlsZVRleHROb2RlKG5vZGUsIG9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuXG4vKipcbiAqIENvbXBpbGUgYW4gZWxlbWVudCBhbmQgcmV0dXJuIGEgbm9kZUxpbmtGbi5cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICogQHJldHVybiB7RnVuY3Rpb258bnVsbH1cbiAqL1xuXG5mdW5jdGlvbiBjb21waWxlRWxlbWVudCAoZWwsIG9wdGlvbnMpIHtcbiAgLy8gcHJlcHJvY2VzcyB0ZXh0YXJlYXMuXG4gIC8vIHRleHRhcmVhIHRyZWF0cyBpdHMgdGV4dCBjb250ZW50IGFzIHRoZSBpbml0aWFsIHZhbHVlLlxuICAvLyBqdXN0IGJpbmQgaXQgYXMgYW4gYXR0ciBkaXJlY3RpdmUgZm9yIHZhbHVlLlxuICBpZiAoZWwudGFnTmFtZSA9PT0gJ1RFWFRBUkVBJykge1xuICAgIHZhciB0b2tlbnMgPSB0ZXh0UGFyc2VyLnBhcnNlKGVsLnZhbHVlKVxuICAgIGlmICh0b2tlbnMpIHtcbiAgICAgIGVsLnNldEF0dHJpYnV0ZSgnOnZhbHVlJywgdGV4dFBhcnNlci50b2tlbnNUb0V4cCh0b2tlbnMpKVxuICAgICAgZWwudmFsdWUgPSAnJ1xuICAgIH1cbiAgfVxuICB2YXIgbGlua0ZuXG4gIHZhciBoYXNBdHRycyA9IGVsLmhhc0F0dHJpYnV0ZXMoKVxuICAvLyBjaGVjayB0ZXJtaW5hbCBkaXJlY3RpdmVzIChmb3IgJiBpZilcbiAgaWYgKGhhc0F0dHJzKSB7XG4gICAgbGlua0ZuID0gY2hlY2tUZXJtaW5hbERpcmVjdGl2ZXMoZWwsIG9wdGlvbnMpXG4gIH1cbiAgLy8gY2hlY2sgZWxlbWVudCBkaXJlY3RpdmVzXG4gIGlmICghbGlua0ZuKSB7XG4gICAgbGlua0ZuID0gY2hlY2tFbGVtZW50RGlyZWN0aXZlcyhlbCwgb3B0aW9ucylcbiAgfVxuICAvLyBjaGVjayBjb21wb25lbnRcbiAgaWYgKCFsaW5rRm4pIHtcbiAgICBsaW5rRm4gPSBjaGVja0NvbXBvbmVudChlbCwgb3B0aW9ucylcbiAgfVxuICAvLyBub3JtYWwgZGlyZWN0aXZlc1xuICBpZiAoIWxpbmtGbiAmJiBoYXNBdHRycykge1xuICAgIGxpbmtGbiA9IGNvbXBpbGVEaXJlY3RpdmVzKGVsLmF0dHJpYnV0ZXMsIG9wdGlvbnMpXG4gIH1cbiAgcmV0dXJuIGxpbmtGblxufVxuXG4vKipcbiAqIENvbXBpbGUgYSB0ZXh0Tm9kZSBhbmQgcmV0dXJuIGEgbm9kZUxpbmtGbi5cbiAqXG4gKiBAcGFyYW0ge1RleHROb2RlfSBub2RlXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICogQHJldHVybiB7RnVuY3Rpb258bnVsbH0gdGV4dE5vZGVMaW5rRm5cbiAqL1xuXG5mdW5jdGlvbiBjb21waWxlVGV4dE5vZGUgKG5vZGUsIG9wdGlvbnMpIHtcbiAgdmFyIHRva2VucyA9IHRleHRQYXJzZXIucGFyc2Uobm9kZS5kYXRhKVxuICBpZiAoIXRva2Vucykge1xuICAgIHJldHVybiBudWxsXG4gIH1cbiAgdmFyIGZyYWcgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KClcbiAgdmFyIGVsLCB0b2tlblxuICBmb3IgKHZhciBpID0gMCwgbCA9IHRva2Vucy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICB0b2tlbiA9IHRva2Vuc1tpXVxuICAgIGVsID0gdG9rZW4udGFnXG4gICAgICA/IHByb2Nlc3NUZXh0VG9rZW4odG9rZW4sIG9wdGlvbnMpXG4gICAgICA6IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRva2VuLnZhbHVlKVxuICAgIGZyYWcuYXBwZW5kQ2hpbGQoZWwpXG4gIH1cbiAgcmV0dXJuIG1ha2VUZXh0Tm9kZUxpbmtGbih0b2tlbnMsIGZyYWcsIG9wdGlvbnMpXG59XG5cbi8qKlxuICogUHJvY2VzcyBhIHNpbmdsZSB0ZXh0IHRva2VuLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB0b2tlblxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqIEByZXR1cm4ge05vZGV9XG4gKi9cblxuZnVuY3Rpb24gcHJvY2Vzc1RleHRUb2tlbiAodG9rZW4sIG9wdGlvbnMpIHtcbiAgdmFyIGVsXG4gIGlmICh0b2tlbi5vbmVUaW1lKSB7XG4gICAgZWwgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0b2tlbi52YWx1ZSlcbiAgfSBlbHNlIHtcbiAgICBpZiAodG9rZW4uaHRtbCkge1xuICAgICAgZWwgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KCd2LWh0bWwnKVxuICAgICAgc2V0VG9rZW5UeXBlKCdodG1sJylcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gSUUgd2lsbCBjbGVhbiB1cCBlbXB0eSB0ZXh0Tm9kZXMgZHVyaW5nXG4gICAgICAvLyBmcmFnLmNsb25lTm9kZSh0cnVlKSwgc28gd2UgaGF2ZSB0byBnaXZlIGl0XG4gICAgICAvLyBzb21ldGhpbmcgaGVyZS4uLlxuICAgICAgZWwgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnICcpXG4gICAgICBzZXRUb2tlblR5cGUoJ3RleHQnKVxuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBzZXRUb2tlblR5cGUgKHR5cGUpIHtcbiAgICBpZiAodG9rZW4uZGVzY3JpcHRvcikgcmV0dXJuXG4gICAgdmFyIHBhcnNlZCA9IGRpclBhcnNlci5wYXJzZSh0b2tlbi52YWx1ZSlcbiAgICB0b2tlbi5kZXNjcmlwdG9yID0ge1xuICAgICAgbmFtZTogdHlwZSxcbiAgICAgIGRlZjogcHVibGljRGlyZWN0aXZlc1t0eXBlXSxcbiAgICAgIGV4cHJlc3Npb246IHBhcnNlZC5leHByZXNzaW9uLFxuICAgICAgZmlsdGVyczogcGFyc2VkLmZpbHRlcnNcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGVsXG59XG5cbi8qKlxuICogQnVpbGQgYSBmdW5jdGlvbiB0aGF0IHByb2Nlc3NlcyBhIHRleHROb2RlLlxuICpcbiAqIEBwYXJhbSB7QXJyYXk8T2JqZWN0Pn0gdG9rZW5zXG4gKiBAcGFyYW0ge0RvY3VtZW50RnJhZ21lbnR9IGZyYWdcbiAqL1xuXG5mdW5jdGlvbiBtYWtlVGV4dE5vZGVMaW5rRm4gKHRva2VucywgZnJhZykge1xuICByZXR1cm4gZnVuY3Rpb24gdGV4dE5vZGVMaW5rRm4gKHZtLCBlbCwgaG9zdCwgc2NvcGUpIHtcbiAgICB2YXIgZnJhZ0Nsb25lID0gZnJhZy5jbG9uZU5vZGUodHJ1ZSlcbiAgICB2YXIgY2hpbGROb2RlcyA9IF8udG9BcnJheShmcmFnQ2xvbmUuY2hpbGROb2RlcylcbiAgICB2YXIgdG9rZW4sIHZhbHVlLCBub2RlXG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSB0b2tlbnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICB0b2tlbiA9IHRva2Vuc1tpXVxuICAgICAgdmFsdWUgPSB0b2tlbi52YWx1ZVxuICAgICAgaWYgKHRva2VuLnRhZykge1xuICAgICAgICBub2RlID0gY2hpbGROb2Rlc1tpXVxuICAgICAgICBpZiAodG9rZW4ub25lVGltZSkge1xuICAgICAgICAgIHZhbHVlID0gKHNjb3BlIHx8IHZtKS4kZXZhbCh2YWx1ZSlcbiAgICAgICAgICBpZiAodG9rZW4uaHRtbCkge1xuICAgICAgICAgICAgXy5yZXBsYWNlKG5vZGUsIHRlbXBsYXRlUGFyc2VyLnBhcnNlKHZhbHVlLCB0cnVlKSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbm9kZS5kYXRhID0gdmFsdWVcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdm0uX2JpbmREaXIodG9rZW4uZGVzY3JpcHRvciwgbm9kZSwgaG9zdCwgc2NvcGUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgXy5yZXBsYWNlKGVsLCBmcmFnQ2xvbmUpXG4gIH1cbn1cblxuLyoqXG4gKiBDb21waWxlIGEgbm9kZSBsaXN0IGFuZCByZXR1cm4gYSBjaGlsZExpbmtGbi5cbiAqXG4gKiBAcGFyYW0ge05vZGVMaXN0fSBub2RlTGlzdFxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufHVuZGVmaW5lZH1cbiAqL1xuXG5mdW5jdGlvbiBjb21waWxlTm9kZUxpc3QgKG5vZGVMaXN0LCBvcHRpb25zKSB7XG4gIHZhciBsaW5rRm5zID0gW11cbiAgdmFyIG5vZGVMaW5rRm4sIGNoaWxkTGlua0ZuLCBub2RlXG4gIGZvciAodmFyIGkgPSAwLCBsID0gbm9kZUxpc3QubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbm9kZSA9IG5vZGVMaXN0W2ldXG4gICAgbm9kZUxpbmtGbiA9IGNvbXBpbGVOb2RlKG5vZGUsIG9wdGlvbnMpXG4gICAgY2hpbGRMaW5rRm4gPVxuICAgICAgIShub2RlTGlua0ZuICYmIG5vZGVMaW5rRm4udGVybWluYWwpICYmXG4gICAgICBub2RlLnRhZ05hbWUgIT09ICdTQ1JJUFQnICYmXG4gICAgICBub2RlLmhhc0NoaWxkTm9kZXMoKVxuICAgICAgICA/IGNvbXBpbGVOb2RlTGlzdChub2RlLmNoaWxkTm9kZXMsIG9wdGlvbnMpXG4gICAgICAgIDogbnVsbFxuICAgIGxpbmtGbnMucHVzaChub2RlTGlua0ZuLCBjaGlsZExpbmtGbilcbiAgfVxuICByZXR1cm4gbGlua0Zucy5sZW5ndGhcbiAgICA/IG1ha2VDaGlsZExpbmtGbihsaW5rRm5zKVxuICAgIDogbnVsbFxufVxuXG4vKipcbiAqIE1ha2UgYSBjaGlsZCBsaW5rIGZ1bmN0aW9uIGZvciBhIG5vZGUncyBjaGlsZE5vZGVzLlxuICpcbiAqIEBwYXJhbSB7QXJyYXk8RnVuY3Rpb24+fSBsaW5rRm5zXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gY2hpbGRMaW5rRm5cbiAqL1xuXG5mdW5jdGlvbiBtYWtlQ2hpbGRMaW5rRm4gKGxpbmtGbnMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGNoaWxkTGlua0ZuICh2bSwgbm9kZXMsIGhvc3QsIHNjb3BlLCBmcmFnKSB7XG4gICAgdmFyIG5vZGUsIG5vZGVMaW5rRm4sIGNoaWxkcmVuTGlua0ZuXG4gICAgZm9yICh2YXIgaSA9IDAsIG4gPSAwLCBsID0gbGlua0Zucy5sZW5ndGg7IGkgPCBsOyBuKyspIHtcbiAgICAgIG5vZGUgPSBub2Rlc1tuXVxuICAgICAgbm9kZUxpbmtGbiA9IGxpbmtGbnNbaSsrXVxuICAgICAgY2hpbGRyZW5MaW5rRm4gPSBsaW5rRm5zW2krK11cbiAgICAgIC8vIGNhY2hlIGNoaWxkTm9kZXMgYmVmb3JlIGxpbmtpbmcgcGFyZW50LCBmaXggIzY1N1xuICAgICAgdmFyIGNoaWxkTm9kZXMgPSBfLnRvQXJyYXkobm9kZS5jaGlsZE5vZGVzKVxuICAgICAgaWYgKG5vZGVMaW5rRm4pIHtcbiAgICAgICAgbm9kZUxpbmtGbih2bSwgbm9kZSwgaG9zdCwgc2NvcGUsIGZyYWcpXG4gICAgICB9XG4gICAgICBpZiAoY2hpbGRyZW5MaW5rRm4pIHtcbiAgICAgICAgY2hpbGRyZW5MaW5rRm4odm0sIGNoaWxkTm9kZXMsIGhvc3QsIHNjb3BlLCBmcmFnKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIENoZWNrIGZvciBlbGVtZW50IGRpcmVjdGl2ZXMgKGN1c3RvbSBlbGVtZW50cyB0aGF0IHNob3VsZFxuICogYmUgcmVzb3ZsZWQgYXMgdGVybWluYWwgZGlyZWN0aXZlcykuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqL1xuXG5mdW5jdGlvbiBjaGVja0VsZW1lbnREaXJlY3RpdmVzIChlbCwgb3B0aW9ucykge1xuICB2YXIgdGFnID0gZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpXG4gIGlmIChfLmNvbW1vblRhZ1JFLnRlc3QodGFnKSkgcmV0dXJuXG4gIHZhciBkZWYgPSByZXNvbHZlQXNzZXQob3B0aW9ucywgJ2VsZW1lbnREaXJlY3RpdmVzJywgdGFnKVxuICBpZiAoZGVmKSB7XG4gICAgcmV0dXJuIG1ha2VUZXJtaW5hbE5vZGVMaW5rRm4oZWwsIHRhZywgJycsIG9wdGlvbnMsIGRlZilcbiAgfVxufVxuXG4vKipcbiAqIENoZWNrIGlmIGFuIGVsZW1lbnQgaXMgYSBjb21wb25lbnQuIElmIHllcywgcmV0dXJuXG4gKiBhIGNvbXBvbmVudCBsaW5rIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKiBAcmV0dXJuIHtGdW5jdGlvbnx1bmRlZmluZWR9XG4gKi9cblxuZnVuY3Rpb24gY2hlY2tDb21wb25lbnQgKGVsLCBvcHRpb25zKSB7XG4gIHZhciBjb21wb25lbnQgPSBfLmNoZWNrQ29tcG9uZW50KGVsLCBvcHRpb25zKVxuICBpZiAoY29tcG9uZW50KSB7XG4gICAgdmFyIHJlZiA9IF8uZmluZFJlZihlbClcbiAgICB2YXIgZGVzY3JpcHRvciA9IHtcbiAgICAgIG5hbWU6ICdjb21wb25lbnQnLFxuICAgICAgcmVmOiByZWYsXG4gICAgICBleHByZXNzaW9uOiBjb21wb25lbnQuaWQsXG4gICAgICBkZWY6IGludGVybmFsRGlyZWN0aXZlcy5jb21wb25lbnQsXG4gICAgICBtb2RpZmllcnM6IHtcbiAgICAgICAgbGl0ZXJhbDogIWNvbXBvbmVudC5keW5hbWljXG4gICAgICB9XG4gICAgfVxuICAgIHZhciBjb21wb25lbnRMaW5rRm4gPSBmdW5jdGlvbiAodm0sIGVsLCBob3N0LCBzY29wZSwgZnJhZykge1xuICAgICAgaWYgKHJlZikge1xuICAgICAgICBfLmRlZmluZVJlYWN0aXZlKChzY29wZSB8fCB2bSkuJHJlZnMsIHJlZiwgbnVsbClcbiAgICAgIH1cbiAgICAgIHZtLl9iaW5kRGlyKGRlc2NyaXB0b3IsIGVsLCBob3N0LCBzY29wZSwgZnJhZylcbiAgICB9XG4gICAgY29tcG9uZW50TGlua0ZuLnRlcm1pbmFsID0gdHJ1ZVxuICAgIHJldHVybiBjb21wb25lbnRMaW5rRm5cbiAgfVxufVxuXG4vKipcbiAqIENoZWNrIGFuIGVsZW1lbnQgZm9yIHRlcm1pbmFsIGRpcmVjdGl2ZXMgaW4gZml4ZWQgb3JkZXIuXG4gKiBJZiBpdCBmaW5kcyBvbmUsIHJldHVybiBhIHRlcm1pbmFsIGxpbmsgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSB0ZXJtaW5hbExpbmtGblxuICovXG5cbmZ1bmN0aW9uIGNoZWNrVGVybWluYWxEaXJlY3RpdmVzIChlbCwgb3B0aW9ucykge1xuICAvLyBza2lwIHYtcHJlXG4gIGlmIChfLmF0dHIoZWwsICd2LXByZScpICE9PSBudWxsKSB7XG4gICAgcmV0dXJuIHNraXBcbiAgfVxuICAvLyBza2lwIHYtZWxzZSBibG9jaywgYnV0IG9ubHkgaWYgZm9sbG93aW5nIHYtaWZcbiAgaWYgKGVsLmhhc0F0dHJpYnV0ZSgndi1lbHNlJykpIHtcbiAgICB2YXIgcHJldiA9IGVsLnByZXZpb3VzRWxlbWVudFNpYmxpbmdcbiAgICBpZiAocHJldiAmJiBwcmV2Lmhhc0F0dHJpYnV0ZSgndi1pZicpKSB7XG4gICAgICByZXR1cm4gc2tpcFxuICAgIH1cbiAgfVxuICB2YXIgdmFsdWUsIGRpck5hbWVcbiAgZm9yICh2YXIgaSA9IDAsIGwgPSB0ZXJtaW5hbERpcmVjdGl2ZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgZGlyTmFtZSA9IHRlcm1pbmFsRGlyZWN0aXZlc1tpXVxuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbmQtYXNzaWduICovXG4gICAgaWYgKHZhbHVlID0gZWwuZ2V0QXR0cmlidXRlKCd2LScgKyBkaXJOYW1lKSkge1xuICAgICAgcmV0dXJuIG1ha2VUZXJtaW5hbE5vZGVMaW5rRm4oZWwsIGRpck5hbWUsIHZhbHVlLCBvcHRpb25zKVxuICAgIH1cbiAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLWNvbmQtYXNzaWduICovXG4gIH1cbn1cblxuZnVuY3Rpb24gc2tpcCAoKSB7fVxuc2tpcC50ZXJtaW5hbCA9IHRydWVcblxuLyoqXG4gKiBCdWlsZCBhIG5vZGUgbGluayBmdW5jdGlvbiBmb3IgYSB0ZXJtaW5hbCBkaXJlY3RpdmUuXG4gKiBBIHRlcm1pbmFsIGxpbmsgZnVuY3Rpb24gdGVybWluYXRlcyB0aGUgY3VycmVudFxuICogY29tcGlsYXRpb24gcmVjdXJzaW9uIGFuZCBoYW5kbGVzIGNvbXBpbGF0aW9uIG9mIHRoZVxuICogc3VidHJlZSBpbiB0aGUgZGlyZWN0aXZlLlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAqIEBwYXJhbSB7U3RyaW5nfSBkaXJOYW1lXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKiBAcGFyYW0ge09iamVjdH0gW2RlZl1cbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSB0ZXJtaW5hbExpbmtGblxuICovXG5cbmZ1bmN0aW9uIG1ha2VUZXJtaW5hbE5vZGVMaW5rRm4gKGVsLCBkaXJOYW1lLCB2YWx1ZSwgb3B0aW9ucywgZGVmKSB7XG4gIHZhciBwYXJzZWQgPSBkaXJQYXJzZXIucGFyc2UodmFsdWUpXG4gIHZhciBkZXNjcmlwdG9yID0ge1xuICAgIG5hbWU6IGRpck5hbWUsXG4gICAgZXhwcmVzc2lvbjogcGFyc2VkLmV4cHJlc3Npb24sXG4gICAgZmlsdGVyczogcGFyc2VkLmZpbHRlcnMsXG4gICAgcmF3OiB2YWx1ZSxcbiAgICAvLyBlaXRoZXIgYW4gZWxlbWVudCBkaXJlY3RpdmUsIG9yIGlmL2ZvclxuICAgIGRlZjogZGVmIHx8IHB1YmxpY0RpcmVjdGl2ZXNbZGlyTmFtZV1cbiAgfVxuICAvLyBjaGVjayByZWYgZm9yIHYtZm9yIGFuZCByb3V0ZXItdmlld1xuICBpZiAoZGlyTmFtZSA9PT0gJ2ZvcicgfHwgZGlyTmFtZSA9PT0gJ3JvdXRlci12aWV3Jykge1xuICAgIGRlc2NyaXB0b3IucmVmID0gXy5maW5kUmVmKGVsKVxuICB9XG4gIHZhciBmbiA9IGZ1bmN0aW9uIHRlcm1pbmFsTm9kZUxpbmtGbiAodm0sIGVsLCBob3N0LCBzY29wZSwgZnJhZykge1xuICAgIGlmIChkZXNjcmlwdG9yLnJlZikge1xuICAgICAgXy5kZWZpbmVSZWFjdGl2ZSgoc2NvcGUgfHwgdm0pLiRyZWZzLCBkZXNjcmlwdG9yLnJlZiwgbnVsbClcbiAgICB9XG4gICAgdm0uX2JpbmREaXIoZGVzY3JpcHRvciwgZWwsIGhvc3QsIHNjb3BlLCBmcmFnKVxuICB9XG4gIGZuLnRlcm1pbmFsID0gdHJ1ZVxuICByZXR1cm4gZm5cbn1cblxuLyoqXG4gKiBDb21waWxlIHRoZSBkaXJlY3RpdmVzIG9uIGFuIGVsZW1lbnQgYW5kIHJldHVybiBhIGxpbmtlci5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fE5hbWVkTm9kZU1hcH0gYXR0cnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqL1xuXG5mdW5jdGlvbiBjb21waWxlRGlyZWN0aXZlcyAoYXR0cnMsIG9wdGlvbnMpIHtcbiAgdmFyIGkgPSBhdHRycy5sZW5ndGhcbiAgdmFyIGRpcnMgPSBbXVxuICB2YXIgYXR0ciwgbmFtZSwgdmFsdWUsIHJhd05hbWUsIHJhd1ZhbHVlLCBkaXJOYW1lLCBhcmcsIG1vZGlmaWVycywgZGlyRGVmLCB0b2tlbnNcbiAgd2hpbGUgKGktLSkge1xuICAgIGF0dHIgPSBhdHRyc1tpXVxuICAgIG5hbWUgPSByYXdOYW1lID0gYXR0ci5uYW1lXG4gICAgdmFsdWUgPSByYXdWYWx1ZSA9IGF0dHIudmFsdWVcbiAgICB0b2tlbnMgPSB0ZXh0UGFyc2VyLnBhcnNlKHZhbHVlKVxuICAgIC8vIHJlc2V0IGFyZ1xuICAgIGFyZyA9IG51bGxcbiAgICAvLyBjaGVjayBtb2RpZmllcnNcbiAgICBtb2RpZmllcnMgPSBwYXJzZU1vZGlmaWVycyhuYW1lKVxuICAgIG5hbWUgPSBuYW1lLnJlcGxhY2UobW9kaWZpZXJSRSwgJycpXG5cbiAgICAvLyBhdHRyaWJ1dGUgaW50ZXJwb2xhdGlvbnNcbiAgICBpZiAodG9rZW5zKSB7XG4gICAgICB2YWx1ZSA9IHRleHRQYXJzZXIudG9rZW5zVG9FeHAodG9rZW5zKVxuICAgICAgYXJnID0gbmFtZVxuICAgICAgcHVzaERpcignYmluZCcsIHB1YmxpY0RpcmVjdGl2ZXMuYmluZCwgdHJ1ZSlcbiAgICAgIC8vIHdhcm4gYWdhaW5zdCBtaXhpbmcgbXVzdGFjaGVzIHdpdGggdi1iaW5kXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAobmFtZSA9PT0gJ2NsYXNzJyAmJiBBcnJheS5wcm90b3R5cGUuc29tZS5jYWxsKGF0dHJzLCBmdW5jdGlvbiAoYXR0cikge1xuICAgICAgICAgIHJldHVybiBhdHRyLm5hbWUgPT09ICc6Y2xhc3MnIHx8IGF0dHIubmFtZSA9PT0gJ3YtYmluZDpjbGFzcydcbiAgICAgICAgfSkpIHtcbiAgICAgICAgICBfLndhcm4oXG4gICAgICAgICAgICAnY2xhc3M9XCInICsgcmF3VmFsdWUgKyAnXCI6IERvIG5vdCBtaXggbXVzdGFjaGUgaW50ZXJwb2xhdGlvbiAnICtcbiAgICAgICAgICAgICdhbmQgdi1iaW5kIGZvciBcImNsYXNzXCIgb24gdGhlIHNhbWUgZWxlbWVudC4gVXNlIG9uZSBvciB0aGUgb3RoZXIuJ1xuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZVxuXG4gICAgLy8gc3BlY2lhbCBhdHRyaWJ1dGU6IHRyYW5zaXRpb25cbiAgICBpZiAodHJhbnNpdGlvblJFLnRlc3QobmFtZSkpIHtcbiAgICAgIG1vZGlmaWVycy5saXRlcmFsID0gIWJpbmRSRS50ZXN0KG5hbWUpXG4gICAgICBwdXNoRGlyKCd0cmFuc2l0aW9uJywgaW50ZXJuYWxEaXJlY3RpdmVzLnRyYW5zaXRpb24pXG4gICAgfSBlbHNlXG5cbiAgICAvLyBldmVudCBoYW5kbGVyc1xuICAgIGlmIChvblJFLnRlc3QobmFtZSkpIHtcbiAgICAgIGFyZyA9IG5hbWUucmVwbGFjZShvblJFLCAnJylcbiAgICAgIHB1c2hEaXIoJ29uJywgcHVibGljRGlyZWN0aXZlcy5vbilcbiAgICB9IGVsc2VcblxuICAgIC8vIGF0dHJpYnV0ZSBiaW5kaW5nc1xuICAgIGlmIChiaW5kUkUudGVzdChuYW1lKSkge1xuICAgICAgZGlyTmFtZSA9IG5hbWUucmVwbGFjZShiaW5kUkUsICcnKVxuICAgICAgaWYgKGRpck5hbWUgPT09ICdzdHlsZScgfHwgZGlyTmFtZSA9PT0gJ2NsYXNzJykge1xuICAgICAgICBwdXNoRGlyKGRpck5hbWUsIGludGVybmFsRGlyZWN0aXZlc1tkaXJOYW1lXSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFyZyA9IGRpck5hbWVcbiAgICAgICAgcHVzaERpcignYmluZCcsIHB1YmxpY0RpcmVjdGl2ZXMuYmluZClcbiAgICAgIH1cbiAgICB9IGVsc2VcblxuICAgIC8vIG5vcm1hbCBkaXJlY3RpdmVzXG4gICAgaWYgKG5hbWUuaW5kZXhPZigndi0nKSA9PT0gMCkge1xuICAgICAgLy8gY2hlY2sgYXJnXG4gICAgICBhcmcgPSAoYXJnID0gbmFtZS5tYXRjaChhcmdSRSkpICYmIGFyZ1sxXVxuICAgICAgaWYgKGFyZykge1xuICAgICAgICBuYW1lID0gbmFtZS5yZXBsYWNlKGFyZ1JFLCAnJylcbiAgICAgIH1cbiAgICAgIC8vIGV4dHJhY3QgZGlyZWN0aXZlIG5hbWVcbiAgICAgIGRpck5hbWUgPSBuYW1lLnNsaWNlKDIpXG5cbiAgICAgIC8vIHNraXAgdi1lbHNlICh3aGVuIHVzZWQgd2l0aCB2LXNob3cpXG4gICAgICBpZiAoZGlyTmFtZSA9PT0gJ2Vsc2UnKSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIGRpckRlZiA9IHJlc29sdmVBc3NldChvcHRpb25zLCAnZGlyZWN0aXZlcycsIGRpck5hbWUpXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIF8uYXNzZXJ0QXNzZXQoZGlyRGVmLCAnZGlyZWN0aXZlJywgZGlyTmFtZSlcbiAgICAgIH1cblxuICAgICAgaWYgKGRpckRlZikge1xuICAgICAgICBwdXNoRGlyKGRpck5hbWUsIGRpckRlZilcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUHVzaCBhIGRpcmVjdGl2ZS5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IGRpck5hbWVcbiAgICogQHBhcmFtIHtPYmplY3R8RnVuY3Rpb259IGRlZlxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtpbnRlcnBdXG4gICAqL1xuXG4gIGZ1bmN0aW9uIHB1c2hEaXIgKGRpck5hbWUsIGRlZiwgaW50ZXJwKSB7XG4gICAgdmFyIHBhcnNlZCA9IGRpclBhcnNlci5wYXJzZSh2YWx1ZSlcbiAgICBkaXJzLnB1c2goe1xuICAgICAgbmFtZTogZGlyTmFtZSxcbiAgICAgIGF0dHI6IHJhd05hbWUsXG4gICAgICByYXc6IHJhd1ZhbHVlLFxuICAgICAgZGVmOiBkZWYsXG4gICAgICBhcmc6IGFyZyxcbiAgICAgIG1vZGlmaWVyczogbW9kaWZpZXJzLFxuICAgICAgZXhwcmVzc2lvbjogcGFyc2VkLmV4cHJlc3Npb24sXG4gICAgICBmaWx0ZXJzOiBwYXJzZWQuZmlsdGVycyxcbiAgICAgIGludGVycDogaW50ZXJwXG4gICAgfSlcbiAgfVxuXG4gIGlmIChkaXJzLmxlbmd0aCkge1xuICAgIHJldHVybiBtYWtlTm9kZUxpbmtGbihkaXJzKVxuICB9XG59XG5cbi8qKlxuICogUGFyc2UgbW9kaWZpZXJzIGZyb20gZGlyZWN0aXZlIGF0dHJpYnV0ZSBuYW1lLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cblxuZnVuY3Rpb24gcGFyc2VNb2RpZmllcnMgKG5hbWUpIHtcbiAgdmFyIHJlcyA9IE9iamVjdC5jcmVhdGUobnVsbClcbiAgdmFyIG1hdGNoID0gbmFtZS5tYXRjaChtb2RpZmllclJFKVxuICBpZiAobWF0Y2gpIHtcbiAgICB2YXIgaSA9IG1hdGNoLmxlbmd0aFxuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIHJlc1ttYXRjaFtpXS5zbGljZSgxKV0gPSB0cnVlXG4gICAgfVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuLyoqXG4gKiBCdWlsZCBhIGxpbmsgZnVuY3Rpb24gZm9yIGFsbCBkaXJlY3RpdmVzIG9uIGEgc2luZ2xlIG5vZGUuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gZGlyZWN0aXZlc1xuICogQHJldHVybiB7RnVuY3Rpb259IGRpcmVjdGl2ZXNMaW5rRm5cbiAqL1xuXG5mdW5jdGlvbiBtYWtlTm9kZUxpbmtGbiAoZGlyZWN0aXZlcykge1xuICByZXR1cm4gZnVuY3Rpb24gbm9kZUxpbmtGbiAodm0sIGVsLCBob3N0LCBzY29wZSwgZnJhZykge1xuICAgIC8vIHJldmVyc2UgYXBwbHkgYmVjYXVzZSBpdCdzIHNvcnRlZCBsb3cgdG8gaGlnaFxuICAgIHZhciBpID0gZGlyZWN0aXZlcy5sZW5ndGhcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICB2bS5fYmluZERpcihkaXJlY3RpdmVzW2ldLCBlbCwgaG9zdCwgc2NvcGUsIGZyYWcpXG4gICAgfVxuICB9XG59XG4iLCJ2YXIgXyA9IHJlcXVpcmUoJy4uL3V0aWwnKVxuXG5fLmV4dGVuZChleHBvcnRzLCByZXF1aXJlKCcuL2NvbXBpbGUnKSlcbl8uZXh0ZW5kKGV4cG9ydHMsIHJlcXVpcmUoJy4vdHJhbnNjbHVkZScpKVxuIiwidmFyIF8gPSByZXF1aXJlKCcuLi91dGlsJylcbnZhciB0ZW1wbGF0ZVBhcnNlciA9IHJlcXVpcmUoJy4uL3BhcnNlcnMvdGVtcGxhdGUnKVxudmFyIHNwZWNpYWxDaGFyUkUgPSAvW15cXHdcXC06XFwuXS9cblxuLyoqXG4gKiBQcm9jZXNzIGFuIGVsZW1lbnQgb3IgYSBEb2N1bWVudEZyYWdtZW50IGJhc2VkIG9uIGFcbiAqIGluc3RhbmNlIG9wdGlvbiBvYmplY3QuIFRoaXMgYWxsb3dzIHVzIHRvIHRyYW5zY2x1ZGVcbiAqIGEgdGVtcGxhdGUgbm9kZS9mcmFnbWVudCBiZWZvcmUgdGhlIGluc3RhbmNlIGlzIGNyZWF0ZWQsXG4gKiBzbyB0aGUgcHJvY2Vzc2VkIGZyYWdtZW50IGNhbiB0aGVuIGJlIGNsb25lZCBhbmQgcmV1c2VkXG4gKiBpbiB2LWZvci5cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICogQHJldHVybiB7RWxlbWVudHxEb2N1bWVudEZyYWdtZW50fVxuICovXG5cbmV4cG9ydHMudHJhbnNjbHVkZSA9IGZ1bmN0aW9uIChlbCwgb3B0aW9ucykge1xuICAvLyBleHRyYWN0IGNvbnRhaW5lciBhdHRyaWJ1dGVzIHRvIHBhc3MgdGhlbSBkb3duXG4gIC8vIHRvIGNvbXBpbGVyLCBiZWNhdXNlIHRoZXkgbmVlZCB0byBiZSBjb21waWxlZCBpblxuICAvLyBwYXJlbnQgc2NvcGUuIHdlIGFyZSBtdXRhdGluZyB0aGUgb3B0aW9ucyBvYmplY3QgaGVyZVxuICAvLyBhc3N1bWluZyB0aGUgc2FtZSBvYmplY3Qgd2lsbCBiZSB1c2VkIGZvciBjb21waWxlXG4gIC8vIHJpZ2h0IGFmdGVyIHRoaXMuXG4gIGlmIChvcHRpb25zKSB7XG4gICAgb3B0aW9ucy5fY29udGFpbmVyQXR0cnMgPSBleHRyYWN0QXR0cnMoZWwpXG4gIH1cbiAgLy8gZm9yIHRlbXBsYXRlIHRhZ3MsIHdoYXQgd2Ugd2FudCBpcyBpdHMgY29udGVudCBhc1xuICAvLyBhIGRvY3VtZW50RnJhZ21lbnQgKGZvciBmcmFnbWVudCBpbnN0YW5jZXMpXG4gIGlmIChfLmlzVGVtcGxhdGUoZWwpKSB7XG4gICAgZWwgPSB0ZW1wbGF0ZVBhcnNlci5wYXJzZShlbClcbiAgfVxuICBpZiAob3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zLl9hc0NvbXBvbmVudCAmJiAhb3B0aW9ucy50ZW1wbGF0ZSkge1xuICAgICAgb3B0aW9ucy50ZW1wbGF0ZSA9ICc8c2xvdD48L3Nsb3Q+J1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy50ZW1wbGF0ZSkge1xuICAgICAgb3B0aW9ucy5fY29udGVudCA9IF8uZXh0cmFjdENvbnRlbnQoZWwpXG4gICAgICBlbCA9IHRyYW5zY2x1ZGVUZW1wbGF0ZShlbCwgb3B0aW9ucylcbiAgICB9XG4gIH1cbiAgaWYgKGVsIGluc3RhbmNlb2YgRG9jdW1lbnRGcmFnbWVudCkge1xuICAgIC8vIGFuY2hvcnMgZm9yIGZyYWdtZW50IGluc3RhbmNlXG4gICAgLy8gcGFzc2luZyBpbiBgcGVyc2lzdDogdHJ1ZWAgdG8gYXZvaWQgdGhlbSBiZWluZ1xuICAgIC8vIGRpc2NhcmRlZCBieSBJRSBkdXJpbmcgdGVtcGxhdGUgY2xvbmluZ1xuICAgIF8ucHJlcGVuZChfLmNyZWF0ZUFuY2hvcigndi1zdGFydCcsIHRydWUpLCBlbClcbiAgICBlbC5hcHBlbmRDaGlsZChfLmNyZWF0ZUFuY2hvcigndi1lbmQnLCB0cnVlKSlcbiAgfVxuICByZXR1cm4gZWxcbn1cblxuLyoqXG4gKiBQcm9jZXNzIHRoZSB0ZW1wbGF0ZSBvcHRpb24uXG4gKiBJZiB0aGUgcmVwbGFjZSBvcHRpb24gaXMgdHJ1ZSB0aGlzIHdpbGwgc3dhcCB0aGUgJGVsLlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKiBAcmV0dXJuIHtFbGVtZW50fERvY3VtZW50RnJhZ21lbnR9XG4gKi9cblxuZnVuY3Rpb24gdHJhbnNjbHVkZVRlbXBsYXRlIChlbCwgb3B0aW9ucykge1xuICB2YXIgdGVtcGxhdGUgPSBvcHRpb25zLnRlbXBsYXRlXG4gIHZhciBmcmFnID0gdGVtcGxhdGVQYXJzZXIucGFyc2UodGVtcGxhdGUsIHRydWUpXG4gIGlmIChmcmFnKSB7XG4gICAgdmFyIHJlcGxhY2VyID0gZnJhZy5maXJzdENoaWxkXG4gICAgdmFyIHRhZyA9IHJlcGxhY2VyLnRhZ05hbWUgJiYgcmVwbGFjZXIudGFnTmFtZS50b0xvd2VyQ2FzZSgpXG4gICAgaWYgKG9wdGlvbnMucmVwbGFjZSkge1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICBpZiAoZWwgPT09IGRvY3VtZW50LmJvZHkpIHtcbiAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBfLndhcm4oXG4gICAgICAgICAgJ1lvdSBhcmUgbW91bnRpbmcgYW4gaW5zdGFuY2Ugd2l0aCBhIHRlbXBsYXRlIHRvICcgK1xuICAgICAgICAgICc8Ym9keT4uIFRoaXMgd2lsbCByZXBsYWNlIDxib2R5PiBlbnRpcmVseS4gWW91ICcgK1xuICAgICAgICAgICdzaG91bGQgcHJvYmFibHkgdXNlIGByZXBsYWNlOiBmYWxzZWAgaGVyZS4nXG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIC8vIHRoZXJlIGFyZSBtYW55IGNhc2VzIHdoZXJlIHRoZSBpbnN0YW5jZSBtdXN0XG4gICAgICAvLyBiZWNvbWUgYSBmcmFnbWVudCBpbnN0YW5jZTogYmFzaWNhbGx5IGFueXRoaW5nIHRoYXRcbiAgICAgIC8vIGNhbiBjcmVhdGUgbW9yZSB0aGFuIDEgcm9vdCBub2Rlcy5cbiAgICAgIGlmIChcbiAgICAgICAgLy8gbXVsdGktY2hpbGRyZW4gdGVtcGxhdGVcbiAgICAgICAgZnJhZy5jaGlsZE5vZGVzLmxlbmd0aCA+IDEgfHxcbiAgICAgICAgLy8gbm9uLWVsZW1lbnQgdGVtcGxhdGVcbiAgICAgICAgcmVwbGFjZXIubm9kZVR5cGUgIT09IDEgfHxcbiAgICAgICAgLy8gc2luZ2xlIG5lc3RlZCBjb21wb25lbnRcbiAgICAgICAgdGFnID09PSAnY29tcG9uZW50JyB8fFxuICAgICAgICBfLnJlc29sdmVBc3NldChvcHRpb25zLCAnY29tcG9uZW50cycsIHRhZykgfHxcbiAgICAgICAgcmVwbGFjZXIuaGFzQXR0cmlidXRlKCdpcycpIHx8XG4gICAgICAgIHJlcGxhY2VyLmhhc0F0dHJpYnV0ZSgnOmlzJykgfHxcbiAgICAgICAgcmVwbGFjZXIuaGFzQXR0cmlidXRlKCd2LWJpbmQ6aXMnKSB8fFxuICAgICAgICAvLyBlbGVtZW50IGRpcmVjdGl2ZVxuICAgICAgICBfLnJlc29sdmVBc3NldChvcHRpb25zLCAnZWxlbWVudERpcmVjdGl2ZXMnLCB0YWcpIHx8XG4gICAgICAgIC8vIGZvciBibG9ja1xuICAgICAgICByZXBsYWNlci5oYXNBdHRyaWJ1dGUoJ3YtZm9yJykgfHxcbiAgICAgICAgLy8gaWYgYmxvY2tcbiAgICAgICAgcmVwbGFjZXIuaGFzQXR0cmlidXRlKCd2LWlmJylcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gZnJhZ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3B0aW9ucy5fcmVwbGFjZXJBdHRycyA9IGV4dHJhY3RBdHRycyhyZXBsYWNlcilcbiAgICAgICAgbWVyZ2VBdHRycyhlbCwgcmVwbGFjZXIpXG4gICAgICAgIHJldHVybiByZXBsYWNlclxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBlbC5hcHBlbmRDaGlsZChmcmFnKVxuICAgICAgcmV0dXJuIGVsXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgXy53YXJuKFxuICAgICAgJ0ludmFsaWQgdGVtcGxhdGUgb3B0aW9uOiAnICsgdGVtcGxhdGVcbiAgICApXG4gIH1cbn1cblxuLyoqXG4gKiBIZWxwZXIgdG8gZXh0cmFjdCBhIGNvbXBvbmVudCBjb250YWluZXIncyBhdHRyaWJ1dGVzXG4gKiBpbnRvIGEgcGxhaW4gb2JqZWN0IGFycmF5LlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAqIEByZXR1cm4ge0FycmF5fVxuICovXG5cbmZ1bmN0aW9uIGV4dHJhY3RBdHRycyAoZWwpIHtcbiAgaWYgKGVsLm5vZGVUeXBlID09PSAxICYmIGVsLmhhc0F0dHJpYnV0ZXMoKSkge1xuICAgIHJldHVybiBfLnRvQXJyYXkoZWwuYXR0cmlidXRlcylcbiAgfVxufVxuXG4vKipcbiAqIE1lcmdlIHRoZSBhdHRyaWJ1dGVzIG9mIHR3byBlbGVtZW50cywgYW5kIG1ha2Ugc3VyZVxuICogdGhlIGNsYXNzIG5hbWVzIGFyZSBtZXJnZWQgcHJvcGVybHkuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBmcm9tXG4gKiBAcGFyYW0ge0VsZW1lbnR9IHRvXG4gKi9cblxuZnVuY3Rpb24gbWVyZ2VBdHRycyAoZnJvbSwgdG8pIHtcbiAgdmFyIGF0dHJzID0gZnJvbS5hdHRyaWJ1dGVzXG4gIHZhciBpID0gYXR0cnMubGVuZ3RoXG4gIHZhciBuYW1lLCB2YWx1ZVxuICB3aGlsZSAoaS0tKSB7XG4gICAgbmFtZSA9IGF0dHJzW2ldLm5hbWVcbiAgICB2YWx1ZSA9IGF0dHJzW2ldLnZhbHVlXG4gICAgaWYgKCF0by5oYXNBdHRyaWJ1dGUobmFtZSkgJiYgIXNwZWNpYWxDaGFyUkUudGVzdChuYW1lKSkge1xuICAgICAgdG8uc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKVxuICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gJ2NsYXNzJykge1xuICAgICAgdmFsdWUgPSB0by5nZXRBdHRyaWJ1dGUobmFtZSkgKyAnICcgKyB2YWx1ZVxuICAgICAgdG8uc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKVxuICAgIH1cbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gcHJpbnQgZGVidWcgbWVzc2FnZXMuXG4gICAqIEFsc28gZW5hYmxlcyBzdGFjayB0cmFjZSBmb3Igd2FybmluZ3MuXG4gICAqXG4gICAqIEB0eXBlIHtCb29sZWFufVxuICAgKi9cblxuICBkZWJ1ZzogZmFsc2UsXG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gc3VwcHJlc3Mgd2FybmluZ3MuXG4gICAqXG4gICAqIEB0eXBlIHtCb29sZWFufVxuICAgKi9cblxuICBzaWxlbnQ6IGZhbHNlLFxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRvIHVzZSBhc3luYyByZW5kZXJpbmcuXG4gICAqL1xuXG4gIGFzeW5jOiB0cnVlLFxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRvIHdhcm4gYWdhaW5zdCBlcnJvcnMgY2F1Z2h0IHdoZW4gZXZhbHVhdGluZ1xuICAgKiBleHByZXNzaW9ucy5cbiAgICovXG5cbiAgd2FybkV4cHJlc3Npb25FcnJvcnM6IHRydWUsXG5cbiAgLyoqXG4gICAqIEludGVybmFsIGZsYWcgdG8gaW5kaWNhdGUgdGhlIGRlbGltaXRlcnMgaGF2ZSBiZWVuXG4gICAqIGNoYW5nZWQuXG4gICAqXG4gICAqIEB0eXBlIHtCb29sZWFufVxuICAgKi9cblxuICBfZGVsaW1pdGVyc0NoYW5nZWQ6IHRydWUsXG5cbiAgLyoqXG4gICAqIExpc3Qgb2YgYXNzZXQgdHlwZXMgdGhhdCBhIGNvbXBvbmVudCBjYW4gb3duLlxuICAgKlxuICAgKiBAdHlwZSB7QXJyYXl9XG4gICAqL1xuXG4gIF9hc3NldFR5cGVzOiBbXG4gICAgJ2NvbXBvbmVudCcsXG4gICAgJ2RpcmVjdGl2ZScsXG4gICAgJ2VsZW1lbnREaXJlY3RpdmUnLFxuICAgICdmaWx0ZXInLFxuICAgICd0cmFuc2l0aW9uJyxcbiAgICAncGFydGlhbCdcbiAgXSxcblxuICAvKipcbiAgICogcHJvcCBiaW5kaW5nIG1vZGVzXG4gICAqL1xuXG4gIF9wcm9wQmluZGluZ01vZGVzOiB7XG4gICAgT05FX1dBWTogMCxcbiAgICBUV09fV0FZOiAxLFxuICAgIE9ORV9USU1FOiAyXG4gIH0sXG5cbiAgLyoqXG4gICAqIE1heCBjaXJjdWxhciB1cGRhdGVzIGFsbG93ZWQgaW4gYSBiYXRjaGVyIGZsdXNoIGN5Y2xlLlxuICAgKi9cblxuICBfbWF4VXBkYXRlQ291bnQ6IDEwMFxuXG59XG5cbi8qKlxuICogSW50ZXJwb2xhdGlvbiBkZWxpbWl0ZXJzLiBDaGFuZ2luZyB0aGVzZSB3b3VsZCB0cmlnZ2VyXG4gKiB0aGUgdGV4dCBwYXJzZXIgdG8gcmUtY29tcGlsZSB0aGUgcmVndWxhciBleHByZXNzaW9ucy5cbiAqXG4gKiBAdHlwZSB7QXJyYXk8U3RyaW5nPn1cbiAqL1xuXG52YXIgZGVsaW1pdGVycyA9IFsne3snLCAnfX0nXVxudmFyIHVuc2FmZURlbGltaXRlcnMgPSBbJ3t7eycsICd9fX0nXVxudmFyIHRleHRQYXJzZXIgPSByZXF1aXJlKCcuL3BhcnNlcnMvdGV4dCcpXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUuZXhwb3J0cywgJ2RlbGltaXRlcnMnLCB7XG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBkZWxpbWl0ZXJzXG4gIH0sXG4gIHNldDogZnVuY3Rpb24gKHZhbCkge1xuICAgIGRlbGltaXRlcnMgPSB2YWxcbiAgICB0ZXh0UGFyc2VyLmNvbXBpbGVSZWdleCgpXG4gIH1cbn0pXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUuZXhwb3J0cywgJ3Vuc2FmZURlbGltaXRlcnMnLCB7XG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB1bnNhZmVEZWxpbWl0ZXJzXG4gIH0sXG4gIHNldDogZnVuY3Rpb24gKHZhbCkge1xuICAgIHVuc2FmZURlbGltaXRlcnMgPSB2YWxcbiAgICB0ZXh0UGFyc2VyLmNvbXBpbGVSZWdleCgpXG4gIH1cbn0pXG4iLCJ2YXIgXyA9IHJlcXVpcmUoJy4vdXRpbCcpXG52YXIgV2F0Y2hlciA9IHJlcXVpcmUoJy4vd2F0Y2hlcicpXG52YXIgZXhwUGFyc2VyID0gcmVxdWlyZSgnLi9wYXJzZXJzL2V4cHJlc3Npb24nKVxuZnVuY3Rpb24gbm9vcCAoKSB7fVxuXG4vKipcbiAqIEEgZGlyZWN0aXZlIGxpbmtzIGEgRE9NIGVsZW1lbnQgd2l0aCBhIHBpZWNlIG9mIGRhdGEsXG4gKiB3aGljaCBpcyB0aGUgcmVzdWx0IG9mIGV2YWx1YXRpbmcgYW4gZXhwcmVzc2lvbi5cbiAqIEl0IHJlZ2lzdGVycyBhIHdhdGNoZXIgd2l0aCB0aGUgZXhwcmVzc2lvbiBhbmQgY2FsbHNcbiAqIHRoZSBET00gdXBkYXRlIGZ1bmN0aW9uIHdoZW4gYSBjaGFuZ2UgaXMgdHJpZ2dlcmVkLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge05vZGV9IGVsXG4gKiBAcGFyYW0ge1Z1ZX0gdm1cbiAqIEBwYXJhbSB7T2JqZWN0fSBkZXNjcmlwdG9yXG4gKiAgICAgICAgICAgICAgICAgLSB7U3RyaW5nfSBuYW1lXG4gKiAgICAgICAgICAgICAgICAgLSB7T2JqZWN0fSBkZWZcbiAqICAgICAgICAgICAgICAgICAtIHtTdHJpbmd9IGV4cHJlc3Npb25cbiAqICAgICAgICAgICAgICAgICAtIHtBcnJheTxPYmplY3Q+fSBbZmlsdGVyc11cbiAqICAgICAgICAgICAgICAgICAtIHtCb29sZWFufSBsaXRlcmFsXG4gKiAgICAgICAgICAgICAgICAgLSB7U3RyaW5nfSBhdHRyXG4gKiAgICAgICAgICAgICAgICAgLSB7U3RyaW5nfSByYXdcbiAqIEBwYXJhbSB7T2JqZWN0fSBkZWYgLSBkaXJlY3RpdmUgZGVmaW5pdGlvbiBvYmplY3RcbiAqIEBwYXJhbSB7VnVlfSBbaG9zdF0gLSB0cmFuc2NsdXNpb24gaG9zdCBjb21wb25lbnRcbiAqIEBwYXJhbSB7T2JqZWN0fSBbc2NvcGVdIC0gdi1mb3Igc2NvcGVcbiAqIEBwYXJhbSB7RnJhZ21lbnR9IFtmcmFnXSAtIG93bmVyIGZyYWdtZW50XG4gKiBAY29uc3RydWN0b3JcbiAqL1xuXG5mdW5jdGlvbiBEaXJlY3RpdmUgKGRlc2NyaXB0b3IsIHZtLCBlbCwgaG9zdCwgc2NvcGUsIGZyYWcpIHtcbiAgdGhpcy52bSA9IHZtXG4gIHRoaXMuZWwgPSBlbFxuICAvLyBjb3B5IGRlc2NyaXB0b3IgcHJvcGVydGllc1xuICB0aGlzLmRlc2NyaXB0b3IgPSBkZXNjcmlwdG9yXG4gIHRoaXMubmFtZSA9IGRlc2NyaXB0b3IubmFtZVxuICB0aGlzLmV4cHJlc3Npb24gPSBkZXNjcmlwdG9yLmV4cHJlc3Npb25cbiAgdGhpcy5hcmcgPSBkZXNjcmlwdG9yLmFyZ1xuICB0aGlzLm1vZGlmaWVycyA9IGRlc2NyaXB0b3IubW9kaWZpZXJzXG4gIHRoaXMuZmlsdGVycyA9IGRlc2NyaXB0b3IuZmlsdGVyc1xuICB0aGlzLmxpdGVyYWwgPSB0aGlzLm1vZGlmaWVycyAmJiB0aGlzLm1vZGlmaWVycy5saXRlcmFsXG4gIC8vIHByaXZhdGVcbiAgdGhpcy5fbG9ja2VkID0gZmFsc2VcbiAgdGhpcy5fYm91bmQgPSBmYWxzZVxuICB0aGlzLl9saXN0ZW5lcnMgPSBudWxsXG4gIC8vIGxpbmsgY29udGV4dFxuICB0aGlzLl9ob3N0ID0gaG9zdFxuICB0aGlzLl9zY29wZSA9IHNjb3BlXG4gIHRoaXMuX2ZyYWcgPSBmcmFnXG4gIC8vIHN0b3JlIGRpcmVjdGl2ZXMgb24gbm9kZSBpbiBkZXYgbW9kZVxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLmVsKSB7XG4gICAgdGhpcy5lbC5fdnVlX2RpcmVjdGl2ZXMgPSB0aGlzLmVsLl92dWVfZGlyZWN0aXZlcyB8fCBbXVxuICAgIHRoaXMuZWwuX3Z1ZV9kaXJlY3RpdmVzLnB1c2godGhpcylcbiAgfVxufVxuXG4vKipcbiAqIEluaXRpYWxpemUgdGhlIGRpcmVjdGl2ZSwgbWl4aW4gZGVmaW5pdGlvbiBwcm9wZXJ0aWVzLFxuICogc2V0dXAgdGhlIHdhdGNoZXIsIGNhbGwgZGVmaW5pdGlvbiBiaW5kKCkgYW5kIHVwZGF0ZSgpXG4gKiBpZiBwcmVzZW50LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBkZWZcbiAqL1xuXG5EaXJlY3RpdmUucHJvdG90eXBlLl9iaW5kID0gZnVuY3Rpb24gKCkge1xuICB2YXIgbmFtZSA9IHRoaXMubmFtZVxuICB2YXIgZGVzY3JpcHRvciA9IHRoaXMuZGVzY3JpcHRvclxuXG4gIC8vIHJlbW92ZSBhdHRyaWJ1dGVcbiAgaWYgKFxuICAgIChuYW1lICE9PSAnY2xvYWsnIHx8IHRoaXMudm0uX2lzQ29tcGlsZWQpICYmXG4gICAgdGhpcy5lbCAmJiB0aGlzLmVsLnJlbW92ZUF0dHJpYnV0ZVxuICApIHtcbiAgICB2YXIgYXR0ciA9IGRlc2NyaXB0b3IuYXR0ciB8fCAoJ3YtJyArIG5hbWUpXG4gICAgdGhpcy5lbC5yZW1vdmVBdHRyaWJ1dGUoYXR0cilcbiAgfVxuXG4gIC8vIGNvcHkgZGVmIHByb3BlcnRpZXNcbiAgdmFyIGRlZiA9IGRlc2NyaXB0b3IuZGVmXG4gIGlmICh0eXBlb2YgZGVmID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhpcy51cGRhdGUgPSBkZWZcbiAgfSBlbHNlIHtcbiAgICBfLmV4dGVuZCh0aGlzLCBkZWYpXG4gIH1cblxuICAvLyBzZXR1cCBkaXJlY3RpdmUgcGFyYW1zXG4gIHRoaXMuX3NldHVwUGFyYW1zKClcblxuICAvLyBpbml0aWFsIGJpbmRcbiAgaWYgKHRoaXMuYmluZCkge1xuICAgIHRoaXMuYmluZCgpXG4gIH1cblxuICBpZiAodGhpcy5saXRlcmFsKSB7XG4gICAgdGhpcy51cGRhdGUgJiYgdGhpcy51cGRhdGUoZGVzY3JpcHRvci5yYXcpXG4gIH0gZWxzZSBpZiAoXG4gICAgKHRoaXMuZXhwcmVzc2lvbiB8fCB0aGlzLm1vZGlmaWVycykgJiZcbiAgICAodGhpcy51cGRhdGUgfHwgdGhpcy50d29XYXkpICYmXG4gICAgIXRoaXMuX2NoZWNrU3RhdGVtZW50KClcbiAgKSB7XG4gICAgLy8gd3JhcHBlZCB1cGRhdGVyIGZvciBjb250ZXh0XG4gICAgdmFyIGRpciA9IHRoaXNcbiAgICBpZiAodGhpcy51cGRhdGUpIHtcbiAgICAgIHRoaXMuX3VwZGF0ZSA9IGZ1bmN0aW9uICh2YWwsIG9sZFZhbCkge1xuICAgICAgICBpZiAoIWRpci5fbG9ja2VkKSB7XG4gICAgICAgICAgZGlyLnVwZGF0ZSh2YWwsIG9sZFZhbClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl91cGRhdGUgPSBub29wXG4gICAgfVxuICAgIHZhciBwcmVQcm9jZXNzID0gdGhpcy5fcHJlUHJvY2Vzc1xuICAgICAgPyBfLmJpbmQodGhpcy5fcHJlUHJvY2VzcywgdGhpcylcbiAgICAgIDogbnVsbFxuICAgIHZhciBwb3N0UHJvY2VzcyA9IHRoaXMuX3Bvc3RQcm9jZXNzXG4gICAgICA/IF8uYmluZCh0aGlzLl9wb3N0UHJvY2VzcywgdGhpcylcbiAgICAgIDogbnVsbFxuICAgIHZhciB3YXRjaGVyID0gdGhpcy5fd2F0Y2hlciA9IG5ldyBXYXRjaGVyKFxuICAgICAgdGhpcy52bSxcbiAgICAgIHRoaXMuZXhwcmVzc2lvbixcbiAgICAgIHRoaXMuX3VwZGF0ZSwgLy8gY2FsbGJhY2tcbiAgICAgIHtcbiAgICAgICAgZmlsdGVyczogdGhpcy5maWx0ZXJzLFxuICAgICAgICB0d29XYXk6IHRoaXMudHdvV2F5LFxuICAgICAgICBkZWVwOiB0aGlzLmRlZXAsXG4gICAgICAgIHByZVByb2Nlc3M6IHByZVByb2Nlc3MsXG4gICAgICAgIHBvc3RQcm9jZXNzOiBwb3N0UHJvY2VzcyxcbiAgICAgICAgc2NvcGU6IHRoaXMuX3Njb3BlXG4gICAgICB9XG4gICAgKVxuICAgIC8vIHYtbW9kZWwgd2l0aCBpbml0YWwgaW5saW5lIHZhbHVlIG5lZWQgdG8gc3luYyBiYWNrIHRvXG4gICAgLy8gbW9kZWwgaW5zdGVhZCBvZiB1cGRhdGUgdG8gRE9NIG9uIGluaXQuIFRoZXkgd291bGRcbiAgICAvLyBzZXQgdGhlIGFmdGVyQmluZCBob29rIHRvIGluZGljYXRlIHRoYXQuXG4gICAgaWYgKHRoaXMuYWZ0ZXJCaW5kKSB7XG4gICAgICB0aGlzLmFmdGVyQmluZCgpXG4gICAgfSBlbHNlIGlmICh0aGlzLnVwZGF0ZSkge1xuICAgICAgdGhpcy51cGRhdGUod2F0Y2hlci52YWx1ZSlcbiAgICB9XG4gIH1cbiAgdGhpcy5fYm91bmQgPSB0cnVlXG59XG5cbi8qKlxuICogU2V0dXAgYWxsIHBhcmFtIGF0dHJpYnV0ZXMsIGUuZy4gdHJhY2stYnksXG4gKiB0cmFuc2l0aW9uLW1vZGUsIGV0Yy4uLlxuICovXG5cbkRpcmVjdGl2ZS5wcm90b3R5cGUuX3NldHVwUGFyYW1zID0gZnVuY3Rpb24gKCkge1xuICBpZiAoIXRoaXMucGFyYW1zKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgdmFyIHBhcmFtcyA9IHRoaXMucGFyYW1zXG4gIC8vIHN3YXAgdGhlIHBhcmFtcyBhcnJheSB3aXRoIGEgZnJlc2ggb2JqZWN0LlxuICB0aGlzLnBhcmFtcyA9IE9iamVjdC5jcmVhdGUobnVsbClcbiAgdmFyIGkgPSBwYXJhbXMubGVuZ3RoXG4gIHZhciBrZXksIHZhbCwgbWFwcGVkS2V5XG4gIHdoaWxlIChpLS0pIHtcbiAgICBrZXkgPSBwYXJhbXNbaV1cbiAgICBtYXBwZWRLZXkgPSBfLmNhbWVsaXplKGtleSlcbiAgICB2YWwgPSBfLmdldEJpbmRBdHRyKHRoaXMuZWwsIGtleSlcbiAgICBpZiAodmFsICE9IG51bGwpIHtcbiAgICAgIC8vIGR5bmFtaWNcbiAgICAgIHRoaXMuX3NldHVwUGFyYW1XYXRjaGVyKG1hcHBlZEtleSwgdmFsKVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBzdGF0aWNcbiAgICAgIHZhbCA9IF8uYXR0cih0aGlzLmVsLCBrZXkpXG4gICAgICBpZiAodmFsICE9IG51bGwpIHtcbiAgICAgICAgdGhpcy5wYXJhbXNbbWFwcGVkS2V5XSA9IHZhbCA9PT0gJycgPyB0cnVlIDogdmFsXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogU2V0dXAgYSB3YXRjaGVyIGZvciBhIGR5bmFtaWMgcGFyYW0uXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGtleVxuICogQHBhcmFtIHtTdHJpbmd9IGV4cHJlc3Npb25cbiAqL1xuXG5EaXJlY3RpdmUucHJvdG90eXBlLl9zZXR1cFBhcmFtV2F0Y2hlciA9IGZ1bmN0aW9uIChrZXksIGV4cHJlc3Npb24pIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIHZhciBjYWxsZWQgPSBmYWxzZVxuICB2YXIgdW53YXRjaCA9ICh0aGlzLl9zY29wZSB8fCB0aGlzLnZtKS4kd2F0Y2goZXhwcmVzc2lvbiwgZnVuY3Rpb24gKHZhbCwgb2xkVmFsKSB7XG4gICAgc2VsZi5wYXJhbXNba2V5XSA9IHZhbFxuICAgIC8vIHNpbmNlIHdlIGFyZSBpbiBpbW1lZGlhdGUgbW9kZSxcbiAgICAvLyBvbmx5IGNhbGwgdGhlIHBhcmFtIGNoYW5nZSBjYWxsYmFja3MgaWYgdGhpcyBpcyBub3QgdGhlIGZpcnN0IHVwZGF0ZS5cbiAgICBpZiAoY2FsbGVkKSB7XG4gICAgICB2YXIgY2IgPSBzZWxmLnBhcmFtV2F0Y2hlcnMgJiYgc2VsZi5wYXJhbVdhdGNoZXJzW2tleV1cbiAgICAgIGlmIChjYikge1xuICAgICAgICBjYi5jYWxsKHNlbGYsIHZhbCwgb2xkVmFsKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjYWxsZWQgPSB0cnVlXG4gICAgfVxuICB9LCB7XG4gICAgaW1tZWRpYXRlOiB0cnVlXG4gIH0pXG4gIDsodGhpcy5fcGFyYW1VbndhdGNoRm5zIHx8ICh0aGlzLl9wYXJhbVVud2F0Y2hGbnMgPSBbXSkpLnB1c2godW53YXRjaClcbn1cblxuLyoqXG4gKiBDaGVjayBpZiB0aGUgZGlyZWN0aXZlIGlzIGEgZnVuY3Rpb24gY2FsbGVyXG4gKiBhbmQgaWYgdGhlIGV4cHJlc3Npb24gaXMgYSBjYWxsYWJsZSBvbmUuIElmIGJvdGggdHJ1ZSxcbiAqIHdlIHdyYXAgdXAgdGhlIGV4cHJlc3Npb24gYW5kIHVzZSBpdCBhcyB0aGUgZXZlbnRcbiAqIGhhbmRsZXIuXG4gKlxuICogZS5nLiBvbi1jbGljaz1cImErK1wiXG4gKlxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuXG5EaXJlY3RpdmUucHJvdG90eXBlLl9jaGVja1N0YXRlbWVudCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGV4cHJlc3Npb24gPSB0aGlzLmV4cHJlc3Npb25cbiAgaWYgKFxuICAgIGV4cHJlc3Npb24gJiYgdGhpcy5hY2NlcHRTdGF0ZW1lbnQgJiZcbiAgICAhZXhwUGFyc2VyLmlzU2ltcGxlUGF0aChleHByZXNzaW9uKVxuICApIHtcbiAgICB2YXIgZm4gPSBleHBQYXJzZXIucGFyc2UoZXhwcmVzc2lvbikuZ2V0XG4gICAgdmFyIHNjb3BlID0gdGhpcy5fc2NvcGUgfHwgdGhpcy52bVxuICAgIHZhciBoYW5kbGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgZm4uY2FsbChzY29wZSwgc2NvcGUpXG4gICAgfVxuICAgIGlmICh0aGlzLmZpbHRlcnMpIHtcbiAgICAgIGhhbmRsZXIgPSBzY29wZS5fYXBwbHlGaWx0ZXJzKGhhbmRsZXIsIG51bGwsIHRoaXMuZmlsdGVycylcbiAgICB9XG4gICAgdGhpcy51cGRhdGUoaGFuZGxlcilcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG59XG5cbi8qKlxuICogU2V0IHRoZSBjb3JyZXNwb25kaW5nIHZhbHVlIHdpdGggdGhlIHNldHRlci5cbiAqIFRoaXMgc2hvdWxkIG9ubHkgYmUgdXNlZCBpbiB0d28td2F5IGRpcmVjdGl2ZXNcbiAqIGUuZy4gdi1tb2RlbC5cbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlXG4gKiBAcHVibGljXG4gKi9cblxuRGlyZWN0aXZlLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgaWYgKHRoaXMudHdvV2F5KSB7XG4gICAgdGhpcy5fd2l0aExvY2soZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5fd2F0Y2hlci5zZXQodmFsdWUpXG4gICAgfSlcbiAgfSBlbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgXy53YXJuKFxuICAgICAgJ0RpcmVjdGl2ZS5zZXQoKSBjYW4gb25seSBiZSB1c2VkIGluc2lkZSB0d29XYXknICtcbiAgICAgICdkaXJlY3RpdmVzLidcbiAgICApXG4gIH1cbn1cblxuLyoqXG4gKiBFeGVjdXRlIGEgZnVuY3Rpb24gd2hpbGUgcHJldmVudGluZyB0aGF0IGZ1bmN0aW9uIGZyb21cbiAqIHRyaWdnZXJpbmcgdXBkYXRlcyBvbiB0aGlzIGRpcmVjdGl2ZSBpbnN0YW5jZS5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICovXG5cbkRpcmVjdGl2ZS5wcm90b3R5cGUuX3dpdGhMb2NrID0gZnVuY3Rpb24gKGZuKSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICBzZWxmLl9sb2NrZWQgPSB0cnVlXG4gIGZuLmNhbGwoc2VsZilcbiAgXy5uZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgc2VsZi5fbG9ja2VkID0gZmFsc2VcbiAgfSlcbn1cblxuLyoqXG4gKiBDb252ZW5pZW5jZSBtZXRob2QgdGhhdCBhdHRhY2hlcyBhIERPTSBldmVudCBsaXN0ZW5lclxuICogdG8gdGhlIGRpcmVjdGl2ZSBlbGVtZW50IGFuZCBhdXRvbWV0aWNhbGx5IHRlYXJzIGl0IGRvd25cbiAqIGR1cmluZyB1bmJpbmQuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBoYW5kbGVyXG4gKi9cblxuRGlyZWN0aXZlLnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uIChldmVudCwgaGFuZGxlcikge1xuICBfLm9uKHRoaXMuZWwsIGV2ZW50LCBoYW5kbGVyKVxuICA7KHRoaXMuX2xpc3RlbmVycyB8fCAodGhpcy5fbGlzdGVuZXJzID0gW10pKVxuICAgIC5wdXNoKFtldmVudCwgaGFuZGxlcl0pXG59XG5cbi8qKlxuICogVGVhcmRvd24gdGhlIHdhdGNoZXIgYW5kIGNhbGwgdW5iaW5kLlxuICovXG5cbkRpcmVjdGl2ZS5wcm90b3R5cGUuX3RlYXJkb3duID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5fYm91bmQpIHtcbiAgICB0aGlzLl9ib3VuZCA9IGZhbHNlXG4gICAgaWYgKHRoaXMudW5iaW5kKSB7XG4gICAgICB0aGlzLnVuYmluZCgpXG4gICAgfVxuICAgIGlmICh0aGlzLl93YXRjaGVyKSB7XG4gICAgICB0aGlzLl93YXRjaGVyLnRlYXJkb3duKClcbiAgICB9XG4gICAgdmFyIGxpc3RlbmVycyA9IHRoaXMuX2xpc3RlbmVyc1xuICAgIHZhciBpXG4gICAgaWYgKGxpc3RlbmVycykge1xuICAgICAgaSA9IGxpc3RlbmVycy5sZW5ndGhcbiAgICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgXy5vZmYodGhpcy5lbCwgbGlzdGVuZXJzW2ldWzBdLCBsaXN0ZW5lcnNbaV1bMV0pXG4gICAgICB9XG4gICAgfVxuICAgIHZhciB1bndhdGNoRm5zID0gdGhpcy5fcGFyYW1VbndhdGNoRm5zXG4gICAgaWYgKHVud2F0Y2hGbnMpIHtcbiAgICAgIGkgPSB1bndhdGNoRm5zLmxlbmd0aFxuICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICB1bndhdGNoRm5zW2ldKClcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdGhpcy5lbCkge1xuICAgICAgdGhpcy5lbC5fdnVlX2RpcmVjdGl2ZXMuJHJlbW92ZSh0aGlzKVxuICAgIH1cbiAgICB0aGlzLnZtID0gdGhpcy5lbCA9IHRoaXMuX3dhdGNoZXIgPSB0aGlzLl9saXN0ZW5lcnMgPSBudWxsXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBEaXJlY3RpdmVcbiIsImV4cG9ydHMuc2xvdCA9IHJlcXVpcmUoJy4vc2xvdCcpXG5leHBvcnRzLnBhcnRpYWwgPSByZXF1aXJlKCcuL3BhcnRpYWwnKVxuIiwidmFyIF8gPSByZXF1aXJlKCcuLi8uLi91dGlsJylcbnZhciB2SWYgPSByZXF1aXJlKCcuLi9wdWJsaWMvaWYnKVxudmFyIEZyYWdtZW50RmFjdG9yeSA9IHJlcXVpcmUoJy4uLy4uL2ZyYWdtZW50L2ZhY3RvcnknKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxuICBwcmlvcml0eTogMTc1MCxcblxuICBwYXJhbXM6IFsnbmFtZSddLFxuXG4gIC8vIHdhdGNoIGNoYW5nZXMgdG8gbmFtZSBmb3IgZHluYW1pYyBwYXJ0aWFsc1xuICBwYXJhbVdhdGNoZXJzOiB7XG4gICAgbmFtZTogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICB2SWYucmVtb3ZlLmNhbGwodGhpcylcbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICB0aGlzLmluc2VydCh2YWx1ZSlcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgYmluZDogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuYW5jaG9yID0gXy5jcmVhdGVBbmNob3IoJ3YtcGFydGlhbCcpXG4gICAgXy5yZXBsYWNlKHRoaXMuZWwsIHRoaXMuYW5jaG9yKVxuICAgIHRoaXMuaW5zZXJ0KHRoaXMucGFyYW1zLm5hbWUpXG4gIH0sXG5cbiAgaW5zZXJ0OiBmdW5jdGlvbiAoaWQpIHtcbiAgICB2YXIgcGFydGlhbCA9IF8ucmVzb2x2ZUFzc2V0KHRoaXMudm0uJG9wdGlvbnMsICdwYXJ0aWFscycsIGlkKVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBfLmFzc2VydEFzc2V0KHBhcnRpYWwsICdwYXJ0aWFsJywgaWQpXG4gICAgfVxuICAgIGlmIChwYXJ0aWFsKSB7XG4gICAgICB0aGlzLmZhY3RvcnkgPSBuZXcgRnJhZ21lbnRGYWN0b3J5KHRoaXMudm0sIHBhcnRpYWwpXG4gICAgICB2SWYuaW5zZXJ0LmNhbGwodGhpcylcbiAgICB9XG4gIH0sXG5cbiAgdW5iaW5kOiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuZnJhZykge1xuICAgICAgdGhpcy5mcmFnLmRlc3Ryb3koKVxuICAgIH1cbiAgfVxufVxuIiwidmFyIF8gPSByZXF1aXJlKCcuLi8uLi91dGlsJylcbnZhciB0ZW1wbGF0ZVBhcnNlciA9IHJlcXVpcmUoJy4uLy4uL3BhcnNlcnMvdGVtcGxhdGUnKVxuXG4vLyBUaGlzIGlzIHRoZSBlbGVtZW50RGlyZWN0aXZlIHRoYXQgaGFuZGxlcyA8Y29udGVudD5cbi8vIHRyYW5zY2x1c2lvbnMuIEl0IHJlbGllcyBvbiB0aGUgcmF3IGNvbnRlbnQgb2YgYW5cbi8vIGluc3RhbmNlIGJlaW5nIHN0b3JlZCBhcyBgJG9wdGlvbnMuX2NvbnRlbnRgIGR1cmluZ1xuLy8gdGhlIHRyYW5zY2x1ZGUgcGhhc2UuXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXG4gIHByaW9yaXR5OiAxNzUwLFxuXG4gIHBhcmFtczogWyduYW1lJ10sXG5cbiAgYmluZDogZnVuY3Rpb24gKCkge1xuICAgIHZhciBob3N0ID0gdGhpcy52bVxuICAgIHZhciByYXcgPSBob3N0LiRvcHRpb25zLl9jb250ZW50XG4gICAgdmFyIGNvbnRlbnRcbiAgICBpZiAoIXJhdykge1xuICAgICAgdGhpcy5mYWxsYmFjaygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgdmFyIGNvbnRleHQgPSBob3N0Ll9jb250ZXh0XG4gICAgdmFyIHNsb3ROYW1lID0gdGhpcy5wYXJhbXMubmFtZVxuICAgIGlmICghc2xvdE5hbWUpIHtcbiAgICAgIC8vIERlZmF1bHQgY29udGVudFxuICAgICAgdmFyIHNlbGYgPSB0aGlzXG4gICAgICB2YXIgY29tcGlsZURlZmF1bHRDb250ZW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBzZWxmLmNvbXBpbGUoXG4gICAgICAgICAgZXh0cmFjdEZyYWdtZW50KHJhdy5jaGlsZE5vZGVzLCByYXcsIHRydWUpLFxuICAgICAgICAgIGNvbnRleHQsXG4gICAgICAgICAgaG9zdFxuICAgICAgICApXG4gICAgICB9XG4gICAgICBpZiAoIWhvc3QuX2lzQ29tcGlsZWQpIHtcbiAgICAgICAgLy8gZGVmZXIgdW50aWwgdGhlIGVuZCBvZiBpbnN0YW5jZSBjb21waWxhdGlvbixcbiAgICAgICAgLy8gYmVjYXVzZSB0aGUgZGVmYXVsdCBvdXRsZXQgbXVzdCB3YWl0IHVudGlsIGFsbFxuICAgICAgICAvLyBvdGhlciBwb3NzaWJsZSBvdXRsZXRzIHdpdGggc2VsZWN0b3JzIGhhdmUgcGlja2VkXG4gICAgICAgIC8vIG91dCB0aGVpciBjb250ZW50cy5cbiAgICAgICAgaG9zdC4kb25jZSgnaG9vazpjb21waWxlZCcsIGNvbXBpbGVEZWZhdWx0Q29udGVudClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbXBpbGVEZWZhdWx0Q29udGVudCgpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBzZWxlY3RvciA9ICdbc2xvdD1cIicgKyBzbG90TmFtZSArICdcIl0nXG4gICAgICB2YXIgbm9kZXMgPSByYXcucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcilcbiAgICAgIGlmIChub2Rlcy5sZW5ndGgpIHtcbiAgICAgICAgY29udGVudCA9IGV4dHJhY3RGcmFnbWVudChub2RlcywgcmF3KVxuICAgICAgICBpZiAoY29udGVudC5oYXNDaGlsZE5vZGVzKCkpIHtcbiAgICAgICAgICB0aGlzLmNvbXBpbGUoY29udGVudCwgY29udGV4dCwgaG9zdClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmZhbGxiYWNrKClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5mYWxsYmFjaygpXG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIGZhbGxiYWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5jb21waWxlKF8uZXh0cmFjdENvbnRlbnQodGhpcy5lbCwgdHJ1ZSksIHRoaXMudm0pXG4gIH0sXG5cbiAgY29tcGlsZTogZnVuY3Rpb24gKGNvbnRlbnQsIGNvbnRleHQsIGhvc3QpIHtcbiAgICBpZiAoY29udGVudCAmJiBjb250ZXh0KSB7XG4gICAgICB2YXIgc2NvcGUgPSBob3N0XG4gICAgICAgID8gaG9zdC5fc2NvcGVcbiAgICAgICAgOiB0aGlzLl9zY29wZVxuICAgICAgdGhpcy51bmxpbmsgPSBjb250ZXh0LiRjb21waWxlKFxuICAgICAgICBjb250ZW50LCBob3N0LCBzY29wZSwgdGhpcy5fZnJhZ1xuICAgICAgKVxuICAgIH1cbiAgICBpZiAoY29udGVudCkge1xuICAgICAgXy5yZXBsYWNlKHRoaXMuZWwsIGNvbnRlbnQpXG4gICAgfSBlbHNlIHtcbiAgICAgIF8ucmVtb3ZlKHRoaXMuZWwpXG4gICAgfVxuICB9LFxuXG4gIHVuYmluZDogZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLnVubGluaykge1xuICAgICAgdGhpcy51bmxpbmsoKVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEV4dHJhY3QgcXVhbGlmaWVkIGNvbnRlbnQgbm9kZXMgZnJvbSBhIG5vZGUgbGlzdC5cbiAqXG4gKiBAcGFyYW0ge05vZGVMaXN0fSBub2Rlc1xuICogQHBhcmFtIHtFbGVtZW50fSBwYXJlbnRcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gbWFpblxuICogQHJldHVybiB7RG9jdW1lbnRGcmFnbWVudH1cbiAqL1xuXG5mdW5jdGlvbiBleHRyYWN0RnJhZ21lbnQgKG5vZGVzLCBwYXJlbnQsIG1haW4pIHtcbiAgdmFyIGZyYWcgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KClcbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBub2Rlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICB2YXIgbm9kZSA9IG5vZGVzW2ldXG4gICAgLy8gaWYgdGhpcyBpcyB0aGUgbWFpbiBvdXRsZXQsIHdlIHdhbnQgdG8gc2tpcCBhbGxcbiAgICAvLyBwcmV2aW91c2x5IHNlbGVjdGVkIG5vZGVzO1xuICAgIC8vIG90aGVyd2lzZSwgd2Ugd2FudCB0byBtYXJrIHRoZSBub2RlIGFzIHNlbGVjdGVkLlxuICAgIC8vIGNsb25lIHRoZSBub2RlIHNvIHRoZSBvcmlnaW5hbCByYXcgY29udGVudCByZW1haW5zXG4gICAgLy8gaW50YWN0LiB0aGlzIGVuc3VyZXMgcHJvcGVyIHJlLWNvbXBpbGF0aW9uIGluIGNhc2VzXG4gICAgLy8gd2hlcmUgdGhlIG91dGxldCBpcyBpbnNpZGUgYSBjb25kaXRpb25hbCBibG9ja1xuICAgIGlmIChtYWluICYmICFub2RlLl9fdl9zZWxlY3RlZCkge1xuICAgICAgYXBwZW5kKG5vZGUpXG4gICAgfSBlbHNlIGlmICghbWFpbiAmJiBub2RlLnBhcmVudE5vZGUgPT09IHBhcmVudCkge1xuICAgICAgbm9kZS5fX3Zfc2VsZWN0ZWQgPSB0cnVlXG4gICAgICBhcHBlbmQobm9kZSlcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZyYWdcblxuICBmdW5jdGlvbiBhcHBlbmQgKG5vZGUpIHtcbiAgICBpZiAoXy5pc1RlbXBsYXRlKG5vZGUpICYmXG4gICAgICAgICFub2RlLmhhc0F0dHJpYnV0ZSgndi1pZicpICYmXG4gICAgICAgICFub2RlLmhhc0F0dHJpYnV0ZSgndi1mb3InKSkge1xuICAgICAgbm9kZSA9IHRlbXBsYXRlUGFyc2VyLnBhcnNlKG5vZGUpXG4gICAgfVxuICAgIG5vZGUgPSB0ZW1wbGF0ZVBhcnNlci5jbG9uZShub2RlKVxuICAgIGZyYWcuYXBwZW5kQ2hpbGQobm9kZSlcbiAgfVxufVxuIiwidmFyIF8gPSByZXF1aXJlKCcuLi8uLi91dGlsJylcbnZhciBhZGRDbGFzcyA9IF8uYWRkQ2xhc3NcbnZhciByZW1vdmVDbGFzcyA9IF8ucmVtb3ZlQ2xhc3NcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgZGVlcDogdHJ1ZSxcblxuICB1cGRhdGU6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aGlzLmhhbmRsZU9iamVjdChzdHJpbmdUb09iamVjdCh2YWx1ZSkpXG4gICAgfSBlbHNlIGlmIChfLmlzUGxhaW5PYmplY3QodmFsdWUpKSB7XG4gICAgICB0aGlzLmhhbmRsZU9iamVjdCh2YWx1ZSlcbiAgICB9IGVsc2UgaWYgKF8uaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuaGFuZGxlQXJyYXkodmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2xlYW51cCgpXG4gICAgfVxuICB9LFxuXG4gIGhhbmRsZU9iamVjdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgdGhpcy5jbGVhbnVwKHZhbHVlKVxuICAgIHZhciBrZXlzID0gdGhpcy5wcmV2S2V5cyA9IE9iamVjdC5rZXlzKHZhbHVlKVxuICAgIGZvciAodmFyIGkgPSAwLCBsID0ga2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldXG4gICAgICBpZiAodmFsdWVba2V5XSkge1xuICAgICAgICBhZGRDbGFzcyh0aGlzLmVsLCBrZXkpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZW1vdmVDbGFzcyh0aGlzLmVsLCBrZXkpXG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIGhhbmRsZUFycmF5OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICB0aGlzLmNsZWFudXAodmFsdWUpXG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSB2YWx1ZS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGlmICh2YWx1ZVtpXSkge1xuICAgICAgICBhZGRDbGFzcyh0aGlzLmVsLCB2YWx1ZVtpXSlcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5wcmV2S2V5cyA9IHZhbHVlLnNsaWNlKClcbiAgfSxcblxuICBjbGVhbnVwOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBpZiAodGhpcy5wcmV2S2V5cykge1xuICAgICAgdmFyIGkgPSB0aGlzLnByZXZLZXlzLmxlbmd0aFxuICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICB2YXIga2V5ID0gdGhpcy5wcmV2S2V5c1tpXVxuICAgICAgICBpZiAoa2V5ICYmICghdmFsdWUgfHwgIWNvbnRhaW5zKHZhbHVlLCBrZXkpKSkge1xuICAgICAgICAgIHJlbW92ZUNsYXNzKHRoaXMuZWwsIGtleSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBzdHJpbmdUb09iamVjdCAodmFsdWUpIHtcbiAgdmFyIHJlcyA9IHt9XG4gIHZhciBrZXlzID0gdmFsdWUudHJpbSgpLnNwbGl0KC9cXHMrLylcbiAgdmFyIGkgPSBrZXlzLmxlbmd0aFxuICB3aGlsZSAoaS0tKSB7XG4gICAgcmVzW2tleXNbaV1dID0gdHJ1ZVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuZnVuY3Rpb24gY29udGFpbnMgKHZhbHVlLCBrZXkpIHtcbiAgcmV0dXJuIF8uaXNBcnJheSh2YWx1ZSlcbiAgICA/IHZhbHVlLmluZGV4T2Yoa2V5KSA+IC0xXG4gICAgOiB2YWx1ZS5oYXNPd25Qcm9wZXJ0eShrZXkpXG59XG4iLCJ2YXIgXyA9IHJlcXVpcmUoJy4uLy4uL3V0aWwnKVxudmFyIHRlbXBsYXRlUGFyc2VyID0gcmVxdWlyZSgnLi4vLi4vcGFyc2Vycy90ZW1wbGF0ZScpXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXG4gIHByaW9yaXR5OiAxNTAwLFxuXG4gIHBhcmFtczogW1xuICAgICdrZWVwLWFsaXZlJyxcbiAgICAndHJhbnNpdGlvbi1tb2RlJyxcbiAgICAnaW5saW5lLXRlbXBsYXRlJ1xuICBdLFxuXG4gIC8qKlxuICAgKiBTZXR1cC4gVHdvIHBvc3NpYmxlIHVzYWdlczpcbiAgICpcbiAgICogLSBzdGF0aWM6XG4gICAqICAgPGNvbXA+IG9yIDxkaXYgdi1jb21wb25lbnQ9XCJjb21wXCI+XG4gICAqXG4gICAqIC0gZHluYW1pYzpcbiAgICogICA8Y29tcG9uZW50IDppcz1cInZpZXdcIj5cbiAgICovXG5cbiAgYmluZDogZnVuY3Rpb24gKCkge1xuICAgIGlmICghdGhpcy5lbC5fX3Z1ZV9fKSB7XG4gICAgICAvLyBrZWVwLWFsaXZlIGNhY2hlXG4gICAgICB0aGlzLmtlZXBBbGl2ZSA9IHRoaXMucGFyYW1zLmtlZXBBbGl2ZVxuICAgICAgaWYgKHRoaXMua2VlcEFsaXZlKSB7XG4gICAgICAgIHRoaXMuY2FjaGUgPSB7fVxuICAgICAgfVxuICAgICAgLy8gY2hlY2sgaW5saW5lLXRlbXBsYXRlXG4gICAgICBpZiAodGhpcy5wYXJhbXMuaW5saW5lVGVtcGxhdGUpIHtcbiAgICAgICAgLy8gZXh0cmFjdCBpbmxpbmUgdGVtcGxhdGUgYXMgYSBEb2N1bWVudEZyYWdtZW50XG4gICAgICAgIHRoaXMuaW5saW5lVGVtcGxhdGUgPSBfLmV4dHJhY3RDb250ZW50KHRoaXMuZWwsIHRydWUpXG4gICAgICB9XG4gICAgICAvLyBjb21wb25lbnQgcmVzb2x1dGlvbiByZWxhdGVkIHN0YXRlXG4gICAgICB0aGlzLnBlbmRpbmdDb21wb25lbnRDYiA9XG4gICAgICB0aGlzLkNvbXBvbmVudCA9IG51bGxcbiAgICAgIC8vIHRyYW5zaXRpb24gcmVsYXRlZCBzdGF0ZVxuICAgICAgdGhpcy5wZW5kaW5nUmVtb3ZhbHMgPSAwXG4gICAgICB0aGlzLnBlbmRpbmdSZW1vdmFsQ2IgPSBudWxsXG4gICAgICAvLyBjcmVhdGUgYSByZWYgYW5jaG9yXG4gICAgICB0aGlzLmFuY2hvciA9IF8uY3JlYXRlQW5jaG9yKCd2LWNvbXBvbmVudCcpXG4gICAgICBfLnJlcGxhY2UodGhpcy5lbCwgdGhpcy5hbmNob3IpXG4gICAgICAvLyByZW1vdmUgaXMgYXR0cmlidXRlXG4gICAgICB0aGlzLmVsLnJlbW92ZUF0dHJpYnV0ZSgnaXMnKVxuICAgICAgLy8gaWYgc3RhdGljLCBidWlsZCByaWdodCBub3cuXG4gICAgICBpZiAodGhpcy5saXRlcmFsKSB7XG4gICAgICAgIHRoaXMuc2V0Q29tcG9uZW50KHRoaXMuZXhwcmVzc2lvbilcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBfLndhcm4oXG4gICAgICAgICdjYW5ub3QgbW91bnQgY29tcG9uZW50IFwiJyArIHRoaXMuZXhwcmVzc2lvbiArICdcIiAnICtcbiAgICAgICAgJ29uIGFscmVhZHkgbW91bnRlZCBlbGVtZW50OiAnICsgdGhpcy5lbFxuICAgICAgKVxuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogUHVibGljIHVwZGF0ZSwgY2FsbGVkIGJ5IHRoZSB3YXRjaGVyIGluIHRoZSBkeW5hbWljXG4gICAqIGxpdGVyYWwgc2NlbmFyaW8sIGUuZy4gPGNvbXBvbmVudCA6aXM9XCJ2aWV3XCI+XG4gICAqL1xuXG4gIHVwZGF0ZTogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgaWYgKCF0aGlzLmxpdGVyYWwpIHtcbiAgICAgIHRoaXMuc2V0Q29tcG9uZW50KHZhbHVlKVxuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogU3dpdGNoIGR5bmFtaWMgY29tcG9uZW50cy4gTWF5IHJlc29sdmUgdGhlIGNvbXBvbmVudFxuICAgKiBhc3luY2hyb25vdXNseSwgYW5kIHBlcmZvcm0gdHJhbnNpdGlvbiBiYXNlZCBvblxuICAgKiBzcGVjaWZpZWQgdHJhbnNpdGlvbiBtb2RlLiBBY2NlcHRzIGEgZmV3IGFkZGl0aW9uYWxcbiAgICogYXJndW1lbnRzIHNwZWNpZmljYWxseSBmb3IgdnVlLXJvdXRlci5cbiAgICpcbiAgICogVGhlIGNhbGxiYWNrIGlzIGNhbGxlZCB3aGVuIHRoZSBmdWxsIHRyYW5zaXRpb24gaXNcbiAgICogZmluaXNoZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2JdXG4gICAqL1xuXG4gIHNldENvbXBvbmVudDogZnVuY3Rpb24gKHZhbHVlLCBjYikge1xuICAgIHRoaXMuaW52YWxpZGF0ZVBlbmRpbmcoKVxuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIC8vIGp1c3QgcmVtb3ZlIGN1cnJlbnRcbiAgICAgIHRoaXMudW5idWlsZCh0cnVlKVxuICAgICAgdGhpcy5yZW1vdmUodGhpcy5jaGlsZFZNLCBjYilcbiAgICAgIHRoaXMuY2hpbGRWTSA9IG51bGxcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzXG4gICAgICB0aGlzLnJlc29sdmVDb21wb25lbnQodmFsdWUsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2VsZi5tb3VudENvbXBvbmVudChjYilcbiAgICAgIH0pXG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBSZXNvbHZlIHRoZSBjb21wb25lbnQgY29uc3RydWN0b3IgdG8gdXNlIHdoZW4gY3JlYXRpbmdcbiAgICogdGhlIGNoaWxkIHZtLlxuICAgKi9cblxuICByZXNvbHZlQ29tcG9uZW50OiBmdW5jdGlvbiAoaWQsIGNiKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzXG4gICAgdGhpcy5wZW5kaW5nQ29tcG9uZW50Q2IgPSBfLmNhbmNlbGxhYmxlKGZ1bmN0aW9uIChDb21wb25lbnQpIHtcbiAgICAgIHNlbGYuQ29tcG9uZW50TmFtZSA9IENvbXBvbmVudC5vcHRpb25zLm5hbWUgfHwgaWRcbiAgICAgIHNlbGYuQ29tcG9uZW50ID0gQ29tcG9uZW50XG4gICAgICBjYigpXG4gICAgfSlcbiAgICB0aGlzLnZtLl9yZXNvbHZlQ29tcG9uZW50KGlkLCB0aGlzLnBlbmRpbmdDb21wb25lbnRDYilcbiAgfSxcblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIHVzaW5nIHRoZSBjdXJyZW50IGNvbnN0cnVjdG9yIGFuZFxuICAgKiByZXBsYWNlIHRoZSBleGlzdGluZyBpbnN0YW5jZS4gVGhpcyBtZXRob2QgZG9lc24ndCBjYXJlXG4gICAqIHdoZXRoZXIgdGhlIG5ldyBjb21wb25lbnQgYW5kIHRoZSBvbGQgb25lIGFyZSBhY3R1YWxseVxuICAgKiB0aGUgc2FtZS5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gW2NiXVxuICAgKi9cblxuICBtb3VudENvbXBvbmVudDogZnVuY3Rpb24gKGNiKSB7XG4gICAgLy8gYWN0dWFsIG1vdW50XG4gICAgdGhpcy51bmJ1aWxkKHRydWUpXG4gICAgdmFyIHNlbGYgPSB0aGlzXG4gICAgdmFyIGFjdGl2YXRlSG9vayA9IHRoaXMuQ29tcG9uZW50Lm9wdGlvbnMuYWN0aXZhdGVcbiAgICB2YXIgY2FjaGVkID0gdGhpcy5nZXRDYWNoZWQoKVxuICAgIHZhciBuZXdDb21wb25lbnQgPSB0aGlzLmJ1aWxkKClcbiAgICBpZiAoYWN0aXZhdGVIb29rICYmICFjYWNoZWQpIHtcbiAgICAgIHRoaXMud2FpdGluZ0ZvciA9IG5ld0NvbXBvbmVudFxuICAgICAgYWN0aXZhdGVIb29rLmNhbGwobmV3Q29tcG9uZW50LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNlbGYud2FpdGluZ0ZvciA9IG51bGxcbiAgICAgICAgc2VsZi50cmFuc2l0aW9uKG5ld0NvbXBvbmVudCwgY2IpXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyB1cGRhdGUgcmVmIGZvciBrZXB0LWFsaXZlIGNvbXBvbmVudFxuICAgICAgaWYgKGNhY2hlZCkge1xuICAgICAgICBuZXdDb21wb25lbnQuX3VwZGF0ZVJlZigpXG4gICAgICB9XG4gICAgICB0aGlzLnRyYW5zaXRpb24obmV3Q29tcG9uZW50LCBjYilcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIFdoZW4gdGhlIGNvbXBvbmVudCBjaGFuZ2VzIG9yIHVuYmluZHMgYmVmb3JlIGFuIGFzeW5jXG4gICAqIGNvbnN0cnVjdG9yIGlzIHJlc29sdmVkLCB3ZSBuZWVkIHRvIGludmFsaWRhdGUgaXRzXG4gICAqIHBlbmRpbmcgY2FsbGJhY2suXG4gICAqL1xuXG4gIGludmFsaWRhdGVQZW5kaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMucGVuZGluZ0NvbXBvbmVudENiKSB7XG4gICAgICB0aGlzLnBlbmRpbmdDb21wb25lbnRDYi5jYW5jZWwoKVxuICAgICAgdGhpcy5wZW5kaW5nQ29tcG9uZW50Q2IgPSBudWxsXG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBJbnN0YW50aWF0ZS9pbnNlcnQgYSBuZXcgY2hpbGQgdm0uXG4gICAqIElmIGtlZXAgYWxpdmUgYW5kIGhhcyBjYWNoZWQgaW5zdGFuY2UsIGluc2VydCB0aGF0XG4gICAqIGluc3RhbmNlOyBvdGhlcndpc2UgYnVpbGQgYSBuZXcgb25lIGFuZCBjYWNoZSBpdC5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IFtleHRyYU9wdGlvbnNdXG4gICAqIEByZXR1cm4ge1Z1ZX0gLSB0aGUgY3JlYXRlZCBpbnN0YW5jZVxuICAgKi9cblxuICBidWlsZDogZnVuY3Rpb24gKGV4dHJhT3B0aW9ucykge1xuICAgIHZhciBjYWNoZWQgPSB0aGlzLmdldENhY2hlZCgpXG4gICAgaWYgKGNhY2hlZCkge1xuICAgICAgcmV0dXJuIGNhY2hlZFxuICAgIH1cbiAgICBpZiAodGhpcy5Db21wb25lbnQpIHtcbiAgICAgIC8vIGRlZmF1bHQgb3B0aW9uc1xuICAgICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICAgIG5hbWU6IHRoaXMuQ29tcG9uZW50TmFtZSxcbiAgICAgICAgZWw6IHRlbXBsYXRlUGFyc2VyLmNsb25lKHRoaXMuZWwpLFxuICAgICAgICB0ZW1wbGF0ZTogdGhpcy5pbmxpbmVUZW1wbGF0ZSxcbiAgICAgICAgLy8gbWFrZSBzdXJlIHRvIGFkZCB0aGUgY2hpbGQgd2l0aCBjb3JyZWN0IHBhcmVudFxuICAgICAgICAvLyBpZiB0aGlzIGlzIGEgdHJhbnNjbHVkZWQgY29tcG9uZW50LCBpdHMgcGFyZW50XG4gICAgICAgIC8vIHNob3VsZCBiZSB0aGUgdHJhbnNjbHVzaW9uIGhvc3QuXG4gICAgICAgIHBhcmVudDogdGhpcy5faG9zdCB8fCB0aGlzLnZtLFxuICAgICAgICAvLyBpZiBubyBpbmxpbmUtdGVtcGxhdGUsIHRoZW4gdGhlIGNvbXBpbGVkXG4gICAgICAgIC8vIGxpbmtlciBjYW4gYmUgY2FjaGVkIGZvciBiZXR0ZXIgcGVyZm9ybWFuY2UuXG4gICAgICAgIF9saW5rZXJDYWNoYWJsZTogIXRoaXMuaW5saW5lVGVtcGxhdGUsXG4gICAgICAgIF9yZWY6IHRoaXMuZGVzY3JpcHRvci5yZWYsXG4gICAgICAgIF9hc0NvbXBvbmVudDogdHJ1ZSxcbiAgICAgICAgX2lzUm91dGVyVmlldzogdGhpcy5faXNSb3V0ZXJWaWV3LFxuICAgICAgICAvLyBpZiB0aGlzIGlzIGEgdHJhbnNjbHVkZWQgY29tcG9uZW50LCBjb250ZXh0XG4gICAgICAgIC8vIHdpbGwgYmUgdGhlIGNvbW1vbiBwYXJlbnQgdm0gb2YgdGhpcyBpbnN0YW5jZVxuICAgICAgICAvLyBhbmQgaXRzIGhvc3QuXG4gICAgICAgIF9jb250ZXh0OiB0aGlzLnZtLFxuICAgICAgICAvLyBpZiB0aGlzIGlzIGluc2lkZSBhbiBpbmxpbmUgdi1mb3IsIHRoZSBzY29wZVxuICAgICAgICAvLyB3aWxsIGJlIHRoZSBpbnRlcm1lZGlhdGUgc2NvcGUgY3JlYXRlZCBmb3IgdGhpc1xuICAgICAgICAvLyByZXBlYXQgZnJhZ21lbnQuIHRoaXMgaXMgdXNlZCBmb3IgbGlua2luZyBwcm9wc1xuICAgICAgICAvLyBhbmQgY29udGFpbmVyIGRpcmVjdGl2ZXMuXG4gICAgICAgIF9zY29wZTogdGhpcy5fc2NvcGUsXG4gICAgICAgIC8vIHBhc3MgaW4gdGhlIG93bmVyIGZyYWdtZW50IG9mIHRoaXMgY29tcG9uZW50LlxuICAgICAgICAvLyB0aGlzIGlzIG5lY2Vzc2FyeSBzbyB0aGF0IHRoZSBmcmFnbWVudCBjYW4ga2VlcFxuICAgICAgICAvLyB0cmFjayBvZiBpdHMgY29udGFpbmVkIGNvbXBvbmVudHMgaW4gb3JkZXIgdG9cbiAgICAgICAgLy8gY2FsbCBhdHRhY2gvZGV0YWNoIGhvb2tzIGZvciB0aGVtLlxuICAgICAgICBfZnJhZzogdGhpcy5fZnJhZ1xuICAgICAgfVxuICAgICAgLy8gZXh0cmEgb3B0aW9uc1xuICAgICAgLy8gaW4gMS4wLjAgdGhpcyBpcyB1c2VkIGJ5IHZ1ZS1yb3V0ZXIgb25seVxuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICBpZiAoZXh0cmFPcHRpb25zKSB7XG4gICAgICAgIF8uZXh0ZW5kKG9wdGlvbnMsIGV4dHJhT3B0aW9ucylcbiAgICAgIH1cbiAgICAgIHZhciBjaGlsZCA9IG5ldyB0aGlzLkNvbXBvbmVudChvcHRpb25zKVxuICAgICAgaWYgKHRoaXMua2VlcEFsaXZlKSB7XG4gICAgICAgIHRoaXMuY2FjaGVbdGhpcy5Db21wb25lbnQuY2lkXSA9IGNoaWxkXG4gICAgICB9XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmXG4gICAgICAgICAgdGhpcy5lbC5oYXNBdHRyaWJ1dGUoJ3RyYW5zaXRpb24nKSAmJlxuICAgICAgICAgIGNoaWxkLl9pc0ZyYWdtZW50KSB7XG4gICAgICAgIF8ud2FybihcbiAgICAgICAgICAnVHJhbnNpdGlvbnMgd2lsbCBub3Qgd29yayBvbiBhIGZyYWdtZW50IGluc3RhbmNlLiAnICtcbiAgICAgICAgICAnVGVtcGxhdGU6ICcgKyBjaGlsZC4kb3B0aW9ucy50ZW1wbGF0ZVxuICAgICAgICApXG4gICAgICB9XG4gICAgICByZXR1cm4gY2hpbGRcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIFRyeSB0byBnZXQgYSBjYWNoZWQgaW5zdGFuY2Ugb2YgdGhlIGN1cnJlbnQgY29tcG9uZW50LlxuICAgKlxuICAgKiBAcmV0dXJuIHtWdWV8dW5kZWZpbmVkfVxuICAgKi9cblxuICBnZXRDYWNoZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5rZWVwQWxpdmUgJiYgdGhpcy5jYWNoZVt0aGlzLkNvbXBvbmVudC5jaWRdXG4gIH0sXG5cbiAgLyoqXG4gICAqIFRlYXJkb3duIHRoZSBjdXJyZW50IGNoaWxkLCBidXQgZGVmZXJzIGNsZWFudXAgc29cbiAgICogdGhhdCB3ZSBjYW4gc2VwYXJhdGUgdGhlIGRlc3Ryb3kgYW5kIHJlbW92YWwgc3RlcHMuXG4gICAqXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gZGVmZXJcbiAgICovXG5cbiAgdW5idWlsZDogZnVuY3Rpb24gKGRlZmVyKSB7XG4gICAgaWYgKHRoaXMud2FpdGluZ0Zvcikge1xuICAgICAgdGhpcy53YWl0aW5nRm9yLiRkZXN0cm95KClcbiAgICAgIHRoaXMud2FpdGluZ0ZvciA9IG51bGxcbiAgICB9XG4gICAgdmFyIGNoaWxkID0gdGhpcy5jaGlsZFZNXG4gICAgaWYgKCFjaGlsZCB8fCB0aGlzLmtlZXBBbGl2ZSkge1xuICAgICAgaWYgKGNoaWxkKSB7XG4gICAgICAgIC8vIHJlbW92ZSByZWZcbiAgICAgICAgY2hpbGQuX3VwZGF0ZVJlZih0cnVlKVxuICAgICAgfVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIHRoZSBzb2xlIHB1cnBvc2Ugb2YgYGRlZmVyQ2xlYW51cGAgaXMgc28gdGhhdCB3ZSBjYW5cbiAgICAvLyBcImRlYWN0aXZhdGVcIiB0aGUgdm0gcmlnaHQgbm93IGFuZCBwZXJmb3JtIERPTSByZW1vdmFsXG4gICAgLy8gbGF0ZXIuXG4gICAgY2hpbGQuJGRlc3Ryb3koZmFsc2UsIGRlZmVyKVxuICB9LFxuXG4gIC8qKlxuICAgKiBSZW1vdmUgY3VycmVudCBkZXN0cm95ZWQgY2hpbGQgYW5kIG1hbnVhbGx5IGRvXG4gICAqIHRoZSBjbGVhbnVwIGFmdGVyIHJlbW92YWwuXG4gICAqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNiXG4gICAqL1xuXG4gIHJlbW92ZTogZnVuY3Rpb24gKGNoaWxkLCBjYikge1xuICAgIHZhciBrZWVwQWxpdmUgPSB0aGlzLmtlZXBBbGl2ZVxuICAgIGlmIChjaGlsZCkge1xuICAgICAgLy8gd2UgbWF5IGhhdmUgYSBjb21wb25lbnQgc3dpdGNoIHdoZW4gYSBwcmV2aW91c1xuICAgICAgLy8gY29tcG9uZW50IGlzIHN0aWxsIGJlaW5nIHRyYW5zaXRpb25lZCBvdXQuXG4gICAgICAvLyB3ZSB3YW50IHRvIHRyaWdnZXIgb25seSBvbmUgbGFzdGVzdCBpbnNlcnRpb24gY2JcbiAgICAgIC8vIHdoZW4gdGhlIGV4aXN0aW5nIHRyYW5zaXRpb24gZmluaXNoZXMuICgjMTExOSlcbiAgICAgIHRoaXMucGVuZGluZ1JlbW92YWxzKytcbiAgICAgIHRoaXMucGVuZGluZ1JlbW92YWxDYiA9IGNiXG4gICAgICB2YXIgc2VsZiA9IHRoaXNcbiAgICAgIGNoaWxkLiRyZW1vdmUoZnVuY3Rpb24gKCkge1xuICAgICAgICBzZWxmLnBlbmRpbmdSZW1vdmFscy0tXG4gICAgICAgIGlmICgha2VlcEFsaXZlKSBjaGlsZC5fY2xlYW51cCgpXG4gICAgICAgIGlmICghc2VsZi5wZW5kaW5nUmVtb3ZhbHMgJiYgc2VsZi5wZW5kaW5nUmVtb3ZhbENiKSB7XG4gICAgICAgICAgc2VsZi5wZW5kaW5nUmVtb3ZhbENiKClcbiAgICAgICAgICBzZWxmLnBlbmRpbmdSZW1vdmFsQ2IgPSBudWxsXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSBlbHNlIGlmIChjYikge1xuICAgICAgY2IoKVxuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogQWN0dWFsbHkgc3dhcCB0aGUgY29tcG9uZW50cywgZGVwZW5kaW5nIG9uIHRoZVxuICAgKiB0cmFuc2l0aW9uIG1vZGUuIERlZmF1bHRzIHRvIHNpbXVsdGFuZW91cy5cbiAgICpcbiAgICogQHBhcmFtIHtWdWV9IHRhcmdldFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2JdXG4gICAqL1xuXG4gIHRyYW5zaXRpb246IGZ1bmN0aW9uICh0YXJnZXQsIGNiKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzXG4gICAgdmFyIGN1cnJlbnQgPSB0aGlzLmNoaWxkVk1cbiAgICAvLyBmb3IgZGV2dG9vbCBpbnNwZWN0aW9uXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmIChjdXJyZW50KSBjdXJyZW50Ll9pbmFjdGl2ZSA9IHRydWVcbiAgICAgIHRhcmdldC5faW5hY3RpdmUgPSBmYWxzZVxuICAgIH1cbiAgICB0aGlzLmNoaWxkVk0gPSB0YXJnZXRcbiAgICBzd2l0Y2ggKHNlbGYucGFyYW1zLnRyYW5zaXRpb25Nb2RlKSB7XG4gICAgICBjYXNlICdpbi1vdXQnOlxuICAgICAgICB0YXJnZXQuJGJlZm9yZShzZWxmLmFuY2hvciwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHNlbGYucmVtb3ZlKGN1cnJlbnQsIGNiKVxuICAgICAgICB9KVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnb3V0LWluJzpcbiAgICAgICAgc2VsZi5yZW1vdmUoY3VycmVudCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHRhcmdldC4kYmVmb3JlKHNlbGYuYW5jaG9yLCBjYilcbiAgICAgICAgfSlcbiAgICAgICAgYnJlYWtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHNlbGYucmVtb3ZlKGN1cnJlbnQpXG4gICAgICAgIHRhcmdldC4kYmVmb3JlKHNlbGYuYW5jaG9yLCBjYilcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIFVuYmluZC5cbiAgICovXG5cbiAgdW5iaW5kOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5pbnZhbGlkYXRlUGVuZGluZygpXG4gICAgLy8gRG8gbm90IGRlZmVyIGNsZWFudXAgd2hlbiB1bmJpbmRpbmdcbiAgICB0aGlzLnVuYnVpbGQoKVxuICAgIC8vIGRlc3Ryb3kgYWxsIGtlZXAtYWxpdmUgY2FjaGVkIGluc3RhbmNlc1xuICAgIGlmICh0aGlzLmNhY2hlKSB7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5jYWNoZSkge1xuICAgICAgICB0aGlzLmNhY2hlW2tleV0uJGRlc3Ryb3koKVxuICAgICAgfVxuICAgICAgdGhpcy5jYWNoZSA9IG51bGxcbiAgICB9XG4gIH1cbn1cbiIsImV4cG9ydHMuc3R5bGUgPSByZXF1aXJlKCcuL3N0eWxlJylcbmV4cG9ydHNbJ2NsYXNzJ10gPSByZXF1aXJlKCcuL2NsYXNzJylcbmV4cG9ydHMuY29tcG9uZW50ID0gcmVxdWlyZSgnLi9jb21wb25lbnQnKVxuZXhwb3J0cy5wcm9wID0gcmVxdWlyZSgnLi9wcm9wJylcbmV4cG9ydHMudHJhbnNpdGlvbiA9IHJlcXVpcmUoJy4vdHJhbnNpdGlvbicpXG4iLCIvLyBOT1RFOiB0aGUgcHJvcCBpbnRlcm5hbCBkaXJlY3RpdmUgaXMgY29tcGlsZWQgYW5kIGxpbmtlZFxuLy8gZHVyaW5nIF9pbml0U2NvcGUoKSwgYmVmb3JlIHRoZSBjcmVhdGVkIGhvb2sgaXMgY2FsbGVkLlxuLy8gVGhlIHB1cnBvc2UgaXMgdG8gbWFrZSB0aGUgaW5pdGlhbCBwcm9wIHZhbHVlcyBhdmFpbGFibGVcbi8vIGluc2lkZSBgY3JlYXRlZGAgaG9va3MgYW5kIGBkYXRhYCBmdW5jdGlvbnMuXG5cbnZhciBfID0gcmVxdWlyZSgnLi4vLi4vdXRpbCcpXG52YXIgV2F0Y2hlciA9IHJlcXVpcmUoJy4uLy4uL3dhdGNoZXInKVxudmFyIGJpbmRpbmdNb2RlcyA9IHJlcXVpcmUoJy4uLy4uL2NvbmZpZycpLl9wcm9wQmluZGluZ01vZGVzXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXG4gIGJpbmQ6IGZ1bmN0aW9uICgpIHtcblxuICAgIHZhciBjaGlsZCA9IHRoaXMudm1cbiAgICB2YXIgcGFyZW50ID0gY2hpbGQuX2NvbnRleHRcbiAgICAvLyBwYXNzZWQgaW4gZnJvbSBjb21waWxlciBkaXJlY3RseVxuICAgIHZhciBwcm9wID0gdGhpcy5kZXNjcmlwdG9yLnByb3BcbiAgICB2YXIgY2hpbGRLZXkgPSBwcm9wLnBhdGhcbiAgICB2YXIgcGFyZW50S2V5ID0gcHJvcC5wYXJlbnRQYXRoXG4gICAgdmFyIHR3b1dheSA9IHByb3AubW9kZSA9PT0gYmluZGluZ01vZGVzLlRXT19XQVlcblxuICAgIHZhciBwYXJlbnRXYXRjaGVyID0gdGhpcy5wYXJlbnRXYXRjaGVyID0gbmV3IFdhdGNoZXIoXG4gICAgICBwYXJlbnQsXG4gICAgICBwYXJlbnRLZXksXG4gICAgICBmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgIGlmIChfLmFzc2VydFByb3AocHJvcCwgdmFsKSkge1xuICAgICAgICAgIGNoaWxkW2NoaWxkS2V5XSA9IHZhbFxuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIHR3b1dheTogdHdvV2F5LFxuICAgICAgICBmaWx0ZXJzOiBwcm9wLmZpbHRlcnMsXG4gICAgICAgIC8vIGltcG9ydGFudDogcHJvcHMgbmVlZCB0byBiZSBvYnNlcnZlZCBvbiB0aGVcbiAgICAgICAgLy8gdi1mb3Igc2NvcGUgaWYgcHJlc2VudFxuICAgICAgICBzY29wZTogdGhpcy5fc2NvcGVcbiAgICAgIH1cbiAgICApXG5cbiAgICAvLyBzZXQgdGhlIGNoaWxkIGluaXRpYWwgdmFsdWUuXG4gICAgXy5pbml0UHJvcChjaGlsZCwgcHJvcCwgcGFyZW50V2F0Y2hlci52YWx1ZSlcblxuICAgIC8vIHNldHVwIHR3by13YXkgYmluZGluZ1xuICAgIGlmICh0d29XYXkpIHtcbiAgICAgIC8vIGltcG9ydGFudDogZGVmZXIgdGhlIGNoaWxkIHdhdGNoZXIgY3JlYXRpb24gdW50aWxcbiAgICAgIC8vIHRoZSBjcmVhdGVkIGhvb2sgKGFmdGVyIGRhdGEgb2JzZXJ2YXRpb24pXG4gICAgICB2YXIgc2VsZiA9IHRoaXNcbiAgICAgIGNoaWxkLiRvbmNlKCdob29rOmNyZWF0ZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNlbGYuY2hpbGRXYXRjaGVyID0gbmV3IFdhdGNoZXIoXG4gICAgICAgICAgY2hpbGQsXG4gICAgICAgICAgY2hpbGRLZXksXG4gICAgICAgICAgZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICAgICAgcGFyZW50V2F0Y2hlci5zZXQodmFsKVxuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIC8vIGVuc3VyZSBzeW5jIHVwd2FyZCBiZWZvcmUgcGFyZW50IHN5bmMgZG93bi5cbiAgICAgICAgICAgIC8vIHRoaXMgaXMgbmVjZXNzYXJ5IGluIGNhc2VzIGUuZy4gdGhlIGNoaWxkXG4gICAgICAgICAgICAvLyBtdXRhdGVzIGEgcHJvcCBhcnJheSwgdGhlbiByZXBsYWNlcyBpdC4gKCMxNjgzKVxuICAgICAgICAgICAgc3luYzogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgICAgfSlcbiAgICB9XG4gIH0sXG5cbiAgdW5iaW5kOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5wYXJlbnRXYXRjaGVyLnRlYXJkb3duKClcbiAgICBpZiAodGhpcy5jaGlsZFdhdGNoZXIpIHtcbiAgICAgIHRoaXMuY2hpbGRXYXRjaGVyLnRlYXJkb3duKClcbiAgICB9XG4gIH1cbn1cbiIsInZhciBfID0gcmVxdWlyZSgnLi4vLi4vdXRpbCcpXG52YXIgcHJlZml4ZXMgPSBbJy13ZWJraXQtJywgJy1tb3otJywgJy1tcy0nXVxudmFyIGNhbWVsUHJlZml4ZXMgPSBbJ1dlYmtpdCcsICdNb3onLCAnbXMnXVxudmFyIGltcG9ydGFudFJFID0gLyFpbXBvcnRhbnQ7PyQvXG52YXIgdGVzdEVsID0gbnVsbFxudmFyIHByb3BDYWNoZSA9IHt9XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXG4gIGRlZXA6IHRydWUsXG5cbiAgdXBkYXRlOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgdGhpcy5lbC5zdHlsZS5jc3NUZXh0ID0gdmFsdWVcbiAgICB9IGVsc2UgaWYgKF8uaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuaGFuZGxlT2JqZWN0KHZhbHVlLnJlZHVjZShfLmV4dGVuZCwge30pKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhhbmRsZU9iamVjdCh2YWx1ZSB8fCB7fSlcbiAgICB9XG4gIH0sXG5cbiAgaGFuZGxlT2JqZWN0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAvLyBjYWNoZSBvYmplY3Qgc3R5bGVzIHNvIHRoYXQgb25seSBjaGFuZ2VkIHByb3BzXG4gICAgLy8gYXJlIGFjdHVhbGx5IHVwZGF0ZWQuXG4gICAgdmFyIGNhY2hlID0gdGhpcy5jYWNoZSB8fCAodGhpcy5jYWNoZSA9IHt9KVxuICAgIHZhciBuYW1lLCB2YWxcbiAgICBmb3IgKG5hbWUgaW4gY2FjaGUpIHtcbiAgICAgIGlmICghKG5hbWUgaW4gdmFsdWUpKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlU2luZ2xlKG5hbWUsIG51bGwpXG4gICAgICAgIGRlbGV0ZSBjYWNoZVtuYW1lXVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKG5hbWUgaW4gdmFsdWUpIHtcbiAgICAgIHZhbCA9IHZhbHVlW25hbWVdXG4gICAgICBpZiAodmFsICE9PSBjYWNoZVtuYW1lXSkge1xuICAgICAgICBjYWNoZVtuYW1lXSA9IHZhbFxuICAgICAgICB0aGlzLmhhbmRsZVNpbmdsZShuYW1lLCB2YWwpXG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIGhhbmRsZVNpbmdsZTogZnVuY3Rpb24gKHByb3AsIHZhbHVlKSB7XG4gICAgcHJvcCA9IG5vcm1hbGl6ZShwcm9wKVxuICAgIGlmICghcHJvcCkgcmV0dXJuIC8vIHVuc3VwcG9ydGVkIHByb3BcbiAgICAvLyBjYXN0IHBvc3NpYmxlIG51bWJlcnMvYm9vbGVhbnMgaW50byBzdHJpbmdzXG4gICAgaWYgKHZhbHVlICE9IG51bGwpIHZhbHVlICs9ICcnXG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB2YXIgaXNJbXBvcnRhbnQgPSBpbXBvcnRhbnRSRS50ZXN0KHZhbHVlKVxuICAgICAgICA/ICdpbXBvcnRhbnQnXG4gICAgICAgIDogJydcbiAgICAgIGlmIChpc0ltcG9ydGFudCkge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoaW1wb3J0YW50UkUsICcnKS50cmltKClcbiAgICAgIH1cbiAgICAgIHRoaXMuZWwuc3R5bGUuc2V0UHJvcGVydHkocHJvcCwgdmFsdWUsIGlzSW1wb3J0YW50KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVsLnN0eWxlLnJlbW92ZVByb3BlcnR5KHByb3ApXG4gICAgfVxuICB9XG5cbn1cblxuLyoqXG4gKiBOb3JtYWxpemUgYSBDU1MgcHJvcGVydHkgbmFtZS5cbiAqIC0gY2FjaGUgcmVzdWx0XG4gKiAtIGF1dG8gcHJlZml4XG4gKiAtIGNhbWVsQ2FzZSAtPiBkYXNoLWNhc2VcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcFxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZSAocHJvcCkge1xuICBpZiAocHJvcENhY2hlW3Byb3BdKSB7XG4gICAgcmV0dXJuIHByb3BDYWNoZVtwcm9wXVxuICB9XG4gIHZhciByZXMgPSBwcmVmaXgocHJvcClcbiAgcHJvcENhY2hlW3Byb3BdID0gcHJvcENhY2hlW3Jlc10gPSByZXNcbiAgcmV0dXJuIHJlc1xufVxuXG4vKipcbiAqIEF1dG8gZGV0ZWN0IHRoZSBhcHByb3ByaWF0ZSBwcmVmaXggZm9yIGEgQ1NTIHByb3BlcnR5LlxuICogaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vcGF1bGlyaXNoLzUyMzY5MlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cblxuZnVuY3Rpb24gcHJlZml4IChwcm9wKSB7XG4gIHByb3AgPSBfLmh5cGhlbmF0ZShwcm9wKVxuICB2YXIgY2FtZWwgPSBfLmNhbWVsaXplKHByb3ApXG4gIHZhciB1cHBlciA9IGNhbWVsLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgY2FtZWwuc2xpY2UoMSlcbiAgaWYgKCF0ZXN0RWwpIHtcbiAgICB0ZXN0RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB9XG4gIGlmIChjYW1lbCBpbiB0ZXN0RWwuc3R5bGUpIHtcbiAgICByZXR1cm4gcHJvcFxuICB9XG4gIHZhciBpID0gcHJlZml4ZXMubGVuZ3RoXG4gIHZhciBwcmVmaXhlZFxuICB3aGlsZSAoaS0tKSB7XG4gICAgcHJlZml4ZWQgPSBjYW1lbFByZWZpeGVzW2ldICsgdXBwZXJcbiAgICBpZiAocHJlZml4ZWQgaW4gdGVzdEVsLnN0eWxlKSB7XG4gICAgICByZXR1cm4gcHJlZml4ZXNbaV0gKyBwcm9wXG4gICAgfVxuICB9XG59XG4iLCJ2YXIgXyA9IHJlcXVpcmUoJy4uLy4uL3V0aWwnKVxudmFyIFRyYW5zaXRpb24gPSByZXF1aXJlKCcuLi8uLi90cmFuc2l0aW9uL3RyYW5zaXRpb24nKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxuICBwcmlvcml0eTogMTEwMCxcblxuICB1cGRhdGU6IGZ1bmN0aW9uIChpZCwgb2xkSWQpIHtcbiAgICB2YXIgZWwgPSB0aGlzLmVsXG4gICAgLy8gcmVzb2x2ZSBvbiBvd25lciB2bVxuICAgIHZhciBob29rcyA9IF8ucmVzb2x2ZUFzc2V0KHRoaXMudm0uJG9wdGlvbnMsICd0cmFuc2l0aW9ucycsIGlkKVxuICAgIGlkID0gaWQgfHwgJ3YnXG4gICAgLy8gYXBwbHkgb24gY2xvc2VzdCB2bVxuICAgIGVsLl9fdl90cmFucyA9IG5ldyBUcmFuc2l0aW9uKGVsLCBpZCwgaG9va3MsIHRoaXMuZWwuX192dWVfXyB8fCB0aGlzLnZtKVxuICAgIGlmIChvbGRJZCkge1xuICAgICAgXy5yZW1vdmVDbGFzcyhlbCwgb2xkSWQgKyAnLXRyYW5zaXRpb24nKVxuICAgIH1cbiAgICBfLmFkZENsYXNzKGVsLCBpZCArICctdHJhbnNpdGlvbicpXG4gIH1cbn1cbiIsInZhciBfID0gcmVxdWlyZSgnLi4vLi4vdXRpbCcpXG5cbi8vIHhsaW5rXG52YXIgeGxpbmtOUyA9ICdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJ1xudmFyIHhsaW5rUkUgPSAvXnhsaW5rOi9cblxuLy8gdGhlc2UgaW5wdXQgZWxlbWVudCBhdHRyaWJ1dGVzIHNob3VsZCBhbHNvIHNldCB0aGVpclxuLy8gY29ycmVzcG9uZGluZyBwcm9wZXJ0aWVzXG52YXIgaW5wdXRQcm9wcyA9IHtcbiAgdmFsdWU6IDEsXG4gIGNoZWNrZWQ6IDEsXG4gIHNlbGVjdGVkOiAxXG59XG5cbi8vIHRoZXNlIGF0dHJpYnV0ZXMgc2hvdWxkIHNldCBhIGhpZGRlbiBwcm9wZXJ0eSBmb3Jcbi8vIGJpbmRpbmcgdi1tb2RlbCB0byBvYmplY3QgdmFsdWVzXG52YXIgbW9kZWxQcm9wcyA9IHtcbiAgdmFsdWU6ICdfdmFsdWUnLFxuICAndHJ1ZS12YWx1ZSc6ICdfdHJ1ZVZhbHVlJyxcbiAgJ2ZhbHNlLXZhbHVlJzogJ19mYWxzZVZhbHVlJ1xufVxuXG4vLyBjaGVjayBmb3IgYXR0cmlidXRlcyB0aGF0IHByb2hpYml0IGludGVycG9sYXRpb25zXG52YXIgZGlzYWxsb3dlZEludGVycEF0dHJSRSA9IC9edi18Xjp8XkB8Xihpc3x0cmFuc2l0aW9ufHRyYW5zaXRpb24tbW9kZXxkZWJvdW5jZXx0cmFjay1ieXxzdGFnZ2VyfGVudGVyLXN0YWdnZXJ8bGVhdmUtc3RhZ2dlcikkL1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxuICBwcmlvcml0eTogODUwLFxuXG4gIGJpbmQ6IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgYXR0ciA9IHRoaXMuYXJnXG4gICAgdmFyIHRhZyA9IHRoaXMuZWwudGFnTmFtZVxuICAgIC8vIHNob3VsZCBiZSBkZWVwIHdhdGNoIG9uIG9iamVjdCBtb2RlXG4gICAgaWYgKCFhdHRyKSB7XG4gICAgICB0aGlzLmRlZXAgPSB0cnVlXG4gICAgfVxuICAgIC8vIGhhbmRsZSBpbnRlcnBvbGF0aW9uIGJpbmRpbmdzXG4gICAgaWYgKHRoaXMuZGVzY3JpcHRvci5pbnRlcnApIHtcbiAgICAgIC8vIG9ubHkgYWxsb3cgYmluZGluZyBvbiBuYXRpdmUgYXR0cmlidXRlc1xuICAgICAgaWYgKFxuICAgICAgICBkaXNhbGxvd2VkSW50ZXJwQXR0clJFLnRlc3QoYXR0cikgfHxcbiAgICAgICAgKGF0dHIgPT09ICduYW1lJyAmJiAodGFnID09PSAnUEFSVElBTCcgfHwgdGFnID09PSAnU0xPVCcpKVxuICAgICAgKSB7XG4gICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgXy53YXJuKFxuICAgICAgICAgIGF0dHIgKyAnPVwiJyArIHRoaXMuZGVzY3JpcHRvci5yYXcgKyAnXCI6ICcgK1xuICAgICAgICAgICdhdHRyaWJ1dGUgaW50ZXJwb2xhdGlvbiBpcyBub3QgYWxsb3dlZCBpbiBWdWUuanMgJyArXG4gICAgICAgICAgJ2RpcmVjdGl2ZXMgYW5kIHNwZWNpYWwgYXR0cmlidXRlcy4nXG4gICAgICAgIClcbiAgICAgICAgdGhpcy5lbC5yZW1vdmVBdHRyaWJ1dGUoYXR0cilcbiAgICAgICAgdGhpcy5pbnZhbGlkID0gdHJ1ZVxuICAgICAgfVxuXG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHZhciByYXcgPSBhdHRyICsgJz1cIicgKyB0aGlzLmRlc2NyaXB0b3IucmF3ICsgJ1wiOiAnXG4gICAgICAgIC8vIHdhcm4gc3JjXG4gICAgICAgIGlmIChhdHRyID09PSAnc3JjJykge1xuICAgICAgICAgIF8ud2FybihcbiAgICAgICAgICAgIHJhdyArICdpbnRlcnBvbGF0aW9uIGluIFwic3JjXCIgYXR0cmlidXRlIHdpbGwgY2F1c2UgJyArXG4gICAgICAgICAgICAnYSA0MDQgcmVxdWVzdC4gVXNlIHYtYmluZDpzcmMgaW5zdGVhZC4nXG4gICAgICAgICAgKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gd2FybiBzdHlsZVxuICAgICAgICBpZiAoYXR0ciA9PT0gJ3N0eWxlJykge1xuICAgICAgICAgIF8ud2FybihcbiAgICAgICAgICAgIHJhdyArICdpbnRlcnBvbGF0aW9uIGluIFwic3R5bGVcIiBhdHRyaWJ1dGUgd2lsbCBjYXVzZSAnICtcbiAgICAgICAgICAgICd0aGUgYXR0cmlidXRlIHRvIGJlIGRpc2NhcmRlZCBpbiBJbnRlcm5ldCBFeHBsb3Jlci4gJyArXG4gICAgICAgICAgICAnVXNlIHYtYmluZDpzdHlsZSBpbnN0ZWFkLidcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgdXBkYXRlOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBpZiAodGhpcy5pbnZhbGlkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgdmFyIGF0dHIgPSB0aGlzLmFyZ1xuICAgIGlmICh0aGlzLmFyZykge1xuICAgICAgdGhpcy5oYW5kbGVTaW5nbGUoYXR0ciwgdmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaGFuZGxlT2JqZWN0KHZhbHVlIHx8IHt9KVxuICAgIH1cbiAgfSxcblxuICAvLyBzaGFyZSBvYmplY3QgaGFuZGxlciB3aXRoIHYtYmluZDpjbGFzc1xuICBoYW5kbGVPYmplY3Q6IHJlcXVpcmUoJy4uL2ludGVybmFsL3N0eWxlJykuaGFuZGxlT2JqZWN0LFxuXG4gIGhhbmRsZVNpbmdsZTogZnVuY3Rpb24gKGF0dHIsIHZhbHVlKSB7XG4gICAgaWYgKGlucHV0UHJvcHNbYXR0cl0gJiYgYXR0ciBpbiB0aGlzLmVsKSB7XG4gICAgICB0aGlzLmVsW2F0dHJdID0gYXR0ciA9PT0gJ3ZhbHVlJ1xuICAgICAgICA/ICh2YWx1ZSB8fCAnJykgLy8gSUU5IHdpbGwgc2V0IGlucHV0LnZhbHVlIHRvIFwibnVsbFwiIGZvciBudWxsLi4uXG4gICAgICAgIDogdmFsdWVcbiAgICB9XG4gICAgLy8gc2V0IG1vZGVsIHByb3BzXG4gICAgdmFyIG1vZGVsUHJvcCA9IG1vZGVsUHJvcHNbYXR0cl1cbiAgICBpZiAobW9kZWxQcm9wKSB7XG4gICAgICB0aGlzLmVsW21vZGVsUHJvcF0gPSB2YWx1ZVxuICAgICAgLy8gdXBkYXRlIHYtbW9kZWwgaWYgcHJlc2VudFxuICAgICAgdmFyIG1vZGVsID0gdGhpcy5lbC5fX3ZfbW9kZWxcbiAgICAgIGlmIChtb2RlbCkge1xuICAgICAgICBtb2RlbC5saXN0ZW5lcigpXG4gICAgICB9XG4gICAgfVxuICAgIC8vIGRvIG5vdCBzZXQgdmFsdWUgYXR0cmlidXRlIGZvciB0ZXh0YXJlYVxuICAgIGlmIChhdHRyID09PSAndmFsdWUnICYmIHRoaXMuZWwudGFnTmFtZSA9PT0gJ1RFWFRBUkVBJykge1xuICAgICAgdGhpcy5lbC5yZW1vdmVBdHRyaWJ1dGUoYXR0cilcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyB1cGRhdGUgYXR0cmlidXRlXG4gICAgaWYgKHZhbHVlICE9IG51bGwgJiYgdmFsdWUgIT09IGZhbHNlKSB7XG4gICAgICBpZiAoeGxpbmtSRS50ZXN0KGF0dHIpKSB7XG4gICAgICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlTlMoeGxpbmtOUywgYXR0ciwgdmFsdWUpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVsLnNldEF0dHJpYnV0ZShhdHRyLCB2YWx1ZSlcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lbC5yZW1vdmVBdHRyaWJ1dGUoYXR0cilcbiAgICB9XG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBiaW5kOiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGVsID0gdGhpcy5lbFxuICAgIHRoaXMudm0uJG9uY2UoJ2hvb2s6Y29tcGlsZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoJ3YtY2xvYWsnKVxuICAgIH0pXG4gIH1cbn1cbiIsInZhciBfID0gcmVxdWlyZSgnLi4vLi4vdXRpbCcpXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXG4gIHByaW9yaXR5OiAxNTAwLFxuXG4gIGJpbmQ6IGZ1bmN0aW9uICgpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAoIXRoaXMuYXJnKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgdmFyIGlkID0gdGhpcy5pZCA9IF8uY2FtZWxpemUodGhpcy5hcmcpXG4gICAgdmFyIHJlZnMgPSAodGhpcy5fc2NvcGUgfHwgdGhpcy52bSkuJGVsc1xuICAgIGlmIChyZWZzLmhhc093blByb3BlcnR5KGlkKSkge1xuICAgICAgcmVmc1tpZF0gPSB0aGlzLmVsXG4gICAgfSBlbHNlIHtcbiAgICAgIF8uZGVmaW5lUmVhY3RpdmUocmVmcywgaWQsIHRoaXMuZWwpXG4gICAgfVxuICB9LFxuXG4gIHVuYmluZDogZnVuY3Rpb24gKCkge1xuICAgIHZhciByZWZzID0gKHRoaXMuX3Njb3BlIHx8IHRoaXMudm0pLiRlbHNcbiAgICBpZiAocmVmc1t0aGlzLmlkXSA9PT0gdGhpcy5lbCkge1xuICAgICAgcmVmc1t0aGlzLmlkXSA9IG51bGxcbiAgICB9XG4gIH1cbn1cbiIsInZhciBfID0gcmVxdWlyZSgnLi4vLi4vdXRpbCcpXG52YXIgRnJhZ21lbnRGYWN0b3J5ID0gcmVxdWlyZSgnLi4vLi4vZnJhZ21lbnQvZmFjdG9yeScpXG52YXIgaXNPYmplY3QgPSBfLmlzT2JqZWN0XG52YXIgdWlkID0gMFxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxuICBwcmlvcml0eTogMjAwMCxcblxuICBwYXJhbXM6IFtcbiAgICAndHJhY2stYnknLFxuICAgICdzdGFnZ2VyJyxcbiAgICAnZW50ZXItc3RhZ2dlcicsXG4gICAgJ2xlYXZlLXN0YWdnZXInXG4gIF0sXG5cbiAgYmluZDogZnVuY3Rpb24gKCkge1xuICAgIC8vIHN1cHBvcnQgXCJpdGVtIGluIGl0ZW1zXCIgc3ludGF4XG4gICAgdmFyIGluTWF0Y2ggPSB0aGlzLmV4cHJlc3Npb24ubWF0Y2goLyguKikgaW4gKC4qKS8pXG4gICAgaWYgKGluTWF0Y2gpIHtcbiAgICAgIHZhciBpdE1hdGNoID0gaW5NYXRjaFsxXS5tYXRjaCgvXFwoKC4qKSwoLiopXFwpLylcbiAgICAgIGlmIChpdE1hdGNoKSB7XG4gICAgICAgIHRoaXMuaXRlcmF0b3IgPSBpdE1hdGNoWzFdLnRyaW0oKVxuICAgICAgICB0aGlzLmFsaWFzID0gaXRNYXRjaFsyXS50cmltKClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYWxpYXMgPSBpbk1hdGNoWzFdLnRyaW0oKVxuICAgICAgfVxuICAgICAgdGhpcy5leHByZXNzaW9uID0gaW5NYXRjaFsyXVxuICAgIH1cblxuICAgIGlmICghdGhpcy5hbGlhcykge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBfLndhcm4oXG4gICAgICAgICdBbGlhcyBpcyByZXF1aXJlZCBpbiB2LWZvci4nXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyB1aWQgYXMgYSBjYWNoZSBpZGVudGlmaWVyXG4gICAgdGhpcy5pZCA9ICdfX3YtZm9yX18nICsgKCsrdWlkKVxuXG4gICAgLy8gY2hlY2sgaWYgdGhpcyBpcyBhbiBvcHRpb24gbGlzdCxcbiAgICAvLyBzbyB0aGF0IHdlIGtub3cgaWYgd2UgbmVlZCB0byB1cGRhdGUgdGhlIDxzZWxlY3Q+J3NcbiAgICAvLyB2LW1vZGVsIHdoZW4gdGhlIG9wdGlvbiBsaXN0IGhhcyBjaGFuZ2VkLlxuICAgIC8vIGJlY2F1c2Ugdi1tb2RlbCBoYXMgYSBsb3dlciBwcmlvcml0eSB0aGFuIHYtZm9yLFxuICAgIC8vIHRoZSB2LW1vZGVsIGlzIG5vdCBib3VuZCBoZXJlIHlldCwgc28gd2UgaGF2ZSB0b1xuICAgIC8vIHJldHJpdmUgaXQgaW4gdGhlIGFjdHVhbCB1cGRhdGVNb2RlbCgpIGZ1bmN0aW9uLlxuICAgIHZhciB0YWcgPSB0aGlzLmVsLnRhZ05hbWVcbiAgICB0aGlzLmlzT3B0aW9uID1cbiAgICAgICh0YWcgPT09ICdPUFRJT04nIHx8IHRhZyA9PT0gJ09QVEdST1VQJykgJiZcbiAgICAgIHRoaXMuZWwucGFyZW50Tm9kZS50YWdOYW1lID09PSAnU0VMRUNUJ1xuXG4gICAgLy8gc2V0dXAgYW5jaG9yIG5vZGVzXG4gICAgdGhpcy5zdGFydCA9IF8uY3JlYXRlQW5jaG9yKCd2LWZvci1zdGFydCcpXG4gICAgdGhpcy5lbmQgPSBfLmNyZWF0ZUFuY2hvcigndi1mb3ItZW5kJylcbiAgICBfLnJlcGxhY2UodGhpcy5lbCwgdGhpcy5lbmQpXG4gICAgXy5iZWZvcmUodGhpcy5zdGFydCwgdGhpcy5lbmQpXG5cbiAgICAvLyBjYWNoZVxuICAgIHRoaXMuY2FjaGUgPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgICAvLyBmcmFnbWVudCBmYWN0b3J5XG4gICAgdGhpcy5mYWN0b3J5ID0gbmV3IEZyYWdtZW50RmFjdG9yeSh0aGlzLnZtLCB0aGlzLmVsKVxuICB9LFxuXG4gIHVwZGF0ZTogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICB0aGlzLmRpZmYoZGF0YSlcbiAgICB0aGlzLnVwZGF0ZVJlZigpXG4gICAgdGhpcy51cGRhdGVNb2RlbCgpXG4gIH0sXG5cbiAgLyoqXG4gICAqIERpZmYsIGJhc2VkIG9uIG5ldyBkYXRhIGFuZCBvbGQgZGF0YSwgZGV0ZXJtaW5lIHRoZVxuICAgKiBtaW5pbXVtIGFtb3VudCBvZiBET00gbWFuaXB1bGF0aW9ucyBuZWVkZWQgdG8gbWFrZSB0aGVcbiAgICogRE9NIHJlZmxlY3QgdGhlIG5ldyBkYXRhIEFycmF5LlxuICAgKlxuICAgKiBUaGUgYWxnb3JpdGhtIGRpZmZzIHRoZSBuZXcgZGF0YSBBcnJheSBieSBzdG9yaW5nIGFcbiAgICogaGlkZGVuIHJlZmVyZW5jZSB0byBhbiBvd25lciB2bSBpbnN0YW5jZSBvbiBwcmV2aW91c2x5XG4gICAqIHNlZW4gZGF0YS4gVGhpcyBhbGxvd3MgdXMgdG8gYWNoaWV2ZSBPKG4pIHdoaWNoIGlzXG4gICAqIGJldHRlciB0aGFuIGEgbGV2ZW5zaHRlaW4gZGlzdGFuY2UgYmFzZWQgYWxnb3JpdGhtLFxuICAgKiB3aGljaCBpcyBPKG0gKiBuKS5cbiAgICpcbiAgICogQHBhcmFtIHtBcnJheX0gZGF0YVxuICAgKi9cblxuICBkaWZmOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgIC8vIGNoZWNrIGlmIHRoZSBBcnJheSB3YXMgY29udmVydGVkIGZyb20gYW4gT2JqZWN0XG4gICAgdmFyIGl0ZW0gPSBkYXRhWzBdXG4gICAgdmFyIGNvbnZlcnRlZEZyb21PYmplY3QgPSB0aGlzLmZyb21PYmplY3QgPVxuICAgICAgaXNPYmplY3QoaXRlbSkgJiZcbiAgICAgIGl0ZW0uaGFzT3duUHJvcGVydHkoJyRrZXknKSAmJlxuICAgICAgaXRlbS5oYXNPd25Qcm9wZXJ0eSgnJHZhbHVlJylcblxuICAgIHZhciB0cmFja0J5S2V5ID0gdGhpcy5wYXJhbXMudHJhY2tCeVxuICAgIHZhciBvbGRGcmFncyA9IHRoaXMuZnJhZ3NcbiAgICB2YXIgZnJhZ3MgPSB0aGlzLmZyYWdzID0gbmV3IEFycmF5KGRhdGEubGVuZ3RoKVxuICAgIHZhciBhbGlhcyA9IHRoaXMuYWxpYXNcbiAgICB2YXIgaXRlcmF0b3IgPSB0aGlzLml0ZXJhdG9yXG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5zdGFydFxuICAgIHZhciBlbmQgPSB0aGlzLmVuZFxuICAgIHZhciBpbkRvYyA9IF8uaW5Eb2Moc3RhcnQpXG4gICAgdmFyIGluaXQgPSAhb2xkRnJhZ3NcbiAgICB2YXIgaSwgbCwgZnJhZywga2V5LCB2YWx1ZSwgcHJpbWl0aXZlXG5cbiAgICAvLyBGaXJzdCBwYXNzLCBnbyB0aHJvdWdoIHRoZSBuZXcgQXJyYXkgYW5kIGZpbGwgdXBcbiAgICAvLyB0aGUgbmV3IGZyYWdzIGFycmF5LiBJZiBhIHBpZWNlIG9mIGRhdGEgaGFzIGEgY2FjaGVkXG4gICAgLy8gaW5zdGFuY2UgZm9yIGl0LCB3ZSByZXVzZSBpdC4gT3RoZXJ3aXNlIGJ1aWxkIGEgbmV3XG4gICAgLy8gaW5zdGFuY2UuXG4gICAgZm9yIChpID0gMCwgbCA9IGRhdGEubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBpdGVtID0gZGF0YVtpXVxuICAgICAga2V5ID0gY29udmVydGVkRnJvbU9iamVjdCA/IGl0ZW0uJGtleSA6IG51bGxcbiAgICAgIHZhbHVlID0gY29udmVydGVkRnJvbU9iamVjdCA/IGl0ZW0uJHZhbHVlIDogaXRlbVxuICAgICAgcHJpbWl0aXZlID0gIWlzT2JqZWN0KHZhbHVlKVxuICAgICAgZnJhZyA9ICFpbml0ICYmIHRoaXMuZ2V0Q2FjaGVkRnJhZyh2YWx1ZSwgaSwga2V5KVxuICAgICAgaWYgKGZyYWcpIHsgLy8gcmV1c2FibGUgZnJhZ21lbnRcbiAgICAgICAgZnJhZy5yZXVzZWQgPSB0cnVlXG4gICAgICAgIC8vIHVwZGF0ZSAkaW5kZXhcbiAgICAgICAgZnJhZy5zY29wZS4kaW5kZXggPSBpXG4gICAgICAgIC8vIHVwZGF0ZSAka2V5XG4gICAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgICBmcmFnLnNjb3BlLiRrZXkgPSBrZXlcbiAgICAgICAgfVxuICAgICAgICAvLyB1cGRhdGUgaXRlcmF0b3JcbiAgICAgICAgaWYgKGl0ZXJhdG9yKSB7XG4gICAgICAgICAgZnJhZy5zY29wZVtpdGVyYXRvcl0gPSBrZXkgIT09IG51bGwgPyBrZXkgOiBpXG4gICAgICAgIH1cbiAgICAgICAgLy8gdXBkYXRlIGRhdGEgZm9yIHRyYWNrLWJ5LCBvYmplY3QgcmVwZWF0ICZcbiAgICAgICAgLy8gcHJpbWl0aXZlIHZhbHVlcy5cbiAgICAgICAgaWYgKHRyYWNrQnlLZXkgfHwgY29udmVydGVkRnJvbU9iamVjdCB8fCBwcmltaXRpdmUpIHtcbiAgICAgICAgICBmcmFnLnNjb3BlW2FsaWFzXSA9IHZhbHVlXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7IC8vIG5ldyBpc250YW5jZVxuICAgICAgICBmcmFnID0gdGhpcy5jcmVhdGUodmFsdWUsIGFsaWFzLCBpLCBrZXkpXG4gICAgICAgIGZyYWcuZnJlc2ggPSAhaW5pdFxuICAgICAgfVxuICAgICAgZnJhZ3NbaV0gPSBmcmFnXG4gICAgICBpZiAoaW5pdCkge1xuICAgICAgICBmcmFnLmJlZm9yZShlbmQpXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gd2UncmUgZG9uZSBmb3IgdGhlIGluaXRpYWwgcmVuZGVyLlxuICAgIGlmIChpbml0KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBTZWNvbmQgcGFzcywgZ28gdGhyb3VnaCB0aGUgb2xkIGZyYWdtZW50cyBhbmRcbiAgICAvLyBkZXN0cm95IHRob3NlIHdobyBhcmUgbm90IHJldXNlZCAoYW5kIHJlbW92ZSB0aGVtXG4gICAgLy8gZnJvbSBjYWNoZSlcbiAgICB2YXIgcmVtb3ZhbEluZGV4ID0gMFxuICAgIHZhciB0b3RhbFJlbW92ZWQgPSBvbGRGcmFncy5sZW5ndGggLSBmcmFncy5sZW5ndGhcbiAgICBmb3IgKGkgPSAwLCBsID0gb2xkRnJhZ3MubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBmcmFnID0gb2xkRnJhZ3NbaV1cbiAgICAgIGlmICghZnJhZy5yZXVzZWQpIHtcbiAgICAgICAgdGhpcy5kZWxldGVDYWNoZWRGcmFnKGZyYWcpXG4gICAgICAgIHRoaXMucmVtb3ZlKGZyYWcsIHJlbW92YWxJbmRleCsrLCB0b3RhbFJlbW92ZWQsIGluRG9jKVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEZpbmFsIHBhc3MsIG1vdmUvaW5zZXJ0IG5ldyBmcmFnbWVudHMgaW50byB0aGVcbiAgICAvLyByaWdodCBwbGFjZS5cbiAgICB2YXIgdGFyZ2V0UHJldiwgcHJldkVsLCBjdXJyZW50UHJldlxuICAgIHZhciBpbnNlcnRpb25JbmRleCA9IDBcbiAgICBmb3IgKGkgPSAwLCBsID0gZnJhZ3MubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBmcmFnID0gZnJhZ3NbaV1cbiAgICAgIC8vIHRoaXMgaXMgdGhlIGZyYWcgdGhhdCB3ZSBzaG91bGQgYmUgYWZ0ZXJcbiAgICAgIHRhcmdldFByZXYgPSBmcmFnc1tpIC0gMV1cbiAgICAgIHByZXZFbCA9IHRhcmdldFByZXZcbiAgICAgICAgPyB0YXJnZXRQcmV2LnN0YWdnZXJDYlxuICAgICAgICAgID8gdGFyZ2V0UHJldi5zdGFnZ2VyQW5jaG9yXG4gICAgICAgICAgOiB0YXJnZXRQcmV2LmVuZCB8fCB0YXJnZXRQcmV2Lm5vZGVcbiAgICAgICAgOiBzdGFydFxuICAgICAgaWYgKGZyYWcucmV1c2VkICYmICFmcmFnLnN0YWdnZXJDYikge1xuICAgICAgICBjdXJyZW50UHJldiA9IGZpbmRQcmV2RnJhZyhmcmFnLCBzdGFydCwgdGhpcy5pZClcbiAgICAgICAgaWYgKGN1cnJlbnRQcmV2ICE9PSB0YXJnZXRQcmV2KSB7XG4gICAgICAgICAgdGhpcy5tb3ZlKGZyYWcsIHByZXZFbClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gbmV3IGluc3RhbmNlLCBvciBzdGlsbCBpbiBzdGFnZ2VyLlxuICAgICAgICAvLyBpbnNlcnQgd2l0aCB1cGRhdGVkIHN0YWdnZXIgaW5kZXguXG4gICAgICAgIHRoaXMuaW5zZXJ0KGZyYWcsIGluc2VydGlvbkluZGV4KyssIHByZXZFbCwgaW5Eb2MpXG4gICAgICB9XG4gICAgICBmcmFnLnJldXNlZCA9IGZyYWcuZnJlc2ggPSBmYWxzZVxuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IGZyYWdtZW50IGluc3RhbmNlLlxuICAgKlxuICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBhbGlhc1xuICAgKiBAcGFyYW0ge051bWJlcn0gaW5kZXhcbiAgICogQHBhcmFtIHtTdHJpbmd9IFtrZXldXG4gICAqIEByZXR1cm4ge0ZyYWdtZW50fVxuICAgKi9cblxuICBjcmVhdGU6IGZ1bmN0aW9uICh2YWx1ZSwgYWxpYXMsIGluZGV4LCBrZXkpIHtcbiAgICB2YXIgaG9zdCA9IHRoaXMuX2hvc3RcbiAgICAvLyBjcmVhdGUgaXRlcmF0aW9uIHNjb3BlXG4gICAgdmFyIHBhcmVudFNjb3BlID0gdGhpcy5fc2NvcGUgfHwgdGhpcy52bVxuICAgIHZhciBzY29wZSA9IE9iamVjdC5jcmVhdGUocGFyZW50U2NvcGUpXG4gICAgLy8gcmVmIGhvbGRlciBmb3IgdGhlIHNjb3BlXG4gICAgc2NvcGUuJHJlZnMgPSBPYmplY3QuY3JlYXRlKHBhcmVudFNjb3BlLiRyZWZzKVxuICAgIHNjb3BlLiRlbHMgPSBPYmplY3QuY3JlYXRlKHBhcmVudFNjb3BlLiRlbHMpXG4gICAgLy8gbWFrZSBzdXJlIHBvaW50ICRwYXJlbnQgdG8gcGFyZW50IHNjb3BlXG4gICAgc2NvcGUuJHBhcmVudCA9IHBhcmVudFNjb3BlXG4gICAgLy8gZm9yIHR3by13YXkgYmluZGluZyBvbiBhbGlhc1xuICAgIHNjb3BlLiRmb3JDb250ZXh0ID0gdGhpc1xuICAgIC8vIGRlZmluZSBzY29wZSBwcm9wZXJ0aWVzXG4gICAgXy5kZWZpbmVSZWFjdGl2ZShzY29wZSwgYWxpYXMsIHZhbHVlKVxuICAgIF8uZGVmaW5lUmVhY3RpdmUoc2NvcGUsICckaW5kZXgnLCBpbmRleClcbiAgICBpZiAoa2V5KSB7XG4gICAgICBfLmRlZmluZVJlYWN0aXZlKHNjb3BlLCAnJGtleScsIGtleSlcbiAgICB9IGVsc2UgaWYgKHNjb3BlLiRrZXkpIHtcbiAgICAgIC8vIGF2b2lkIGFjY2lkZW50YWwgZmFsbGJhY2tcbiAgICAgIF8uZGVmaW5lKHNjb3BlLCAnJGtleScsIG51bGwpXG4gICAgfVxuICAgIGlmICh0aGlzLml0ZXJhdG9yKSB7XG4gICAgICBfLmRlZmluZVJlYWN0aXZlKHNjb3BlLCB0aGlzLml0ZXJhdG9yLCBrZXkgIT09IG51bGwgPyBrZXkgOiBpbmRleClcbiAgICB9XG4gICAgdmFyIGZyYWcgPSB0aGlzLmZhY3RvcnkuY3JlYXRlKGhvc3QsIHNjb3BlLCB0aGlzLl9mcmFnKVxuICAgIGZyYWcuZm9ySWQgPSB0aGlzLmlkXG4gICAgdGhpcy5jYWNoZUZyYWcodmFsdWUsIGZyYWcsIGluZGV4LCBrZXkpXG4gICAgcmV0dXJuIGZyYWdcbiAgfSxcblxuICAvKipcbiAgICogVXBkYXRlIHRoZSB2LXJlZiBvbiBvd25lciB2bS5cbiAgICovXG5cbiAgdXBkYXRlUmVmOiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHJlZiA9IHRoaXMuZGVzY3JpcHRvci5yZWZcbiAgICBpZiAoIXJlZikgcmV0dXJuXG4gICAgdmFyIGhhc2ggPSAodGhpcy5fc2NvcGUgfHwgdGhpcy52bSkuJHJlZnNcbiAgICB2YXIgcmVmc1xuICAgIGlmICghdGhpcy5mcm9tT2JqZWN0KSB7XG4gICAgICByZWZzID0gdGhpcy5mcmFncy5tYXAoZmluZFZtRnJvbUZyYWcpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlZnMgPSB7fVxuICAgICAgdGhpcy5mcmFncy5mb3JFYWNoKGZ1bmN0aW9uIChmcmFnKSB7XG4gICAgICAgIHJlZnNbZnJhZy5zY29wZS4ka2V5XSA9IGZpbmRWbUZyb21GcmFnKGZyYWcpXG4gICAgICB9KVxuICAgIH1cbiAgICBoYXNoW3JlZl0gPSByZWZzXG4gIH0sXG5cbiAgLyoqXG4gICAqIEZvciBvcHRpb24gbGlzdHMsIHVwZGF0ZSB0aGUgY29udGFpbmluZyB2LW1vZGVsIG9uXG4gICAqIHBhcmVudCA8c2VsZWN0Pi5cbiAgICovXG5cbiAgdXBkYXRlTW9kZWw6IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5pc09wdGlvbikge1xuICAgICAgdmFyIHBhcmVudCA9IHRoaXMuc3RhcnQucGFyZW50Tm9kZVxuICAgICAgdmFyIG1vZGVsID0gcGFyZW50ICYmIHBhcmVudC5fX3ZfbW9kZWxcbiAgICAgIGlmIChtb2RlbCkge1xuICAgICAgICBtb2RlbC5mb3JjZVVwZGF0ZSgpXG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBJbnNlcnQgYSBmcmFnbWVudC4gSGFuZGxlcyBzdGFnZ2VyaW5nLlxuICAgKlxuICAgKiBAcGFyYW0ge0ZyYWdtZW50fSBmcmFnXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleFxuICAgKiBAcGFyYW0ge05vZGV9IHByZXZFbFxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IGluRG9jXG4gICAqL1xuXG4gIGluc2VydDogZnVuY3Rpb24gKGZyYWcsIGluZGV4LCBwcmV2RWwsIGluRG9jKSB7XG4gICAgaWYgKGZyYWcuc3RhZ2dlckNiKSB7XG4gICAgICBmcmFnLnN0YWdnZXJDYi5jYW5jZWwoKVxuICAgICAgZnJhZy5zdGFnZ2VyQ2IgPSBudWxsXG4gICAgfVxuICAgIHZhciBzdGFnZ2VyQW1vdW50ID0gdGhpcy5nZXRTdGFnZ2VyKGZyYWcsIGluZGV4LCBudWxsLCAnZW50ZXInKVxuICAgIGlmIChpbkRvYyAmJiBzdGFnZ2VyQW1vdW50KSB7XG4gICAgICAvLyBjcmVhdGUgYW4gYW5jaG9yIGFuZCBpbnNlcnQgaXQgc3luY2hyb25vdXNseSxcbiAgICAgIC8vIHNvIHRoYXQgd2UgY2FuIHJlc29sdmUgdGhlIGNvcnJlY3Qgb3JkZXIgd2l0aG91dFxuICAgICAgLy8gd29ycnlpbmcgYWJvdXQgc29tZSBlbGVtZW50cyBub3QgaW5zZXJ0ZWQgeWV0XG4gICAgICB2YXIgYW5jaG9yID0gZnJhZy5zdGFnZ2VyQW5jaG9yXG4gICAgICBpZiAoIWFuY2hvcikge1xuICAgICAgICBhbmNob3IgPSBmcmFnLnN0YWdnZXJBbmNob3IgPSBfLmNyZWF0ZUFuY2hvcignc3RhZ2dlci1hbmNob3InKVxuICAgICAgICBhbmNob3IuX192ZnJhZ19fID0gZnJhZ1xuICAgICAgfVxuICAgICAgXy5hZnRlcihhbmNob3IsIHByZXZFbClcbiAgICAgIHZhciBvcCA9IGZyYWcuc3RhZ2dlckNiID0gXy5jYW5jZWxsYWJsZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZyYWcuc3RhZ2dlckNiID0gbnVsbFxuICAgICAgICBmcmFnLmJlZm9yZShhbmNob3IpXG4gICAgICAgIF8ucmVtb3ZlKGFuY2hvcilcbiAgICAgIH0pXG4gICAgICBzZXRUaW1lb3V0KG9wLCBzdGFnZ2VyQW1vdW50KVxuICAgIH0gZWxzZSB7XG4gICAgICBmcmFnLmJlZm9yZShwcmV2RWwubmV4dFNpYmxpbmcpXG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBSZW1vdmUgYSBmcmFnbWVudC4gSGFuZGxlcyBzdGFnZ2VyaW5nLlxuICAgKlxuICAgKiBAcGFyYW0ge0ZyYWdtZW50fSBmcmFnXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleFxuICAgKiBAcGFyYW0ge051bWJlcn0gdG90YWxcbiAgICogQHBhcmFtIHtCb29sZWFufSBpbkRvY1xuICAgKi9cblxuICByZW1vdmU6IGZ1bmN0aW9uIChmcmFnLCBpbmRleCwgdG90YWwsIGluRG9jKSB7XG4gICAgaWYgKGZyYWcuc3RhZ2dlckNiKSB7XG4gICAgICBmcmFnLnN0YWdnZXJDYi5jYW5jZWwoKVxuICAgICAgZnJhZy5zdGFnZ2VyQ2IgPSBudWxsXG4gICAgICAvLyBpdCdzIG5vdCBwb3NzaWJsZSBmb3IgdGhlIHNhbWUgZnJhZyB0byBiZSByZW1vdmVkXG4gICAgICAvLyB0d2ljZSwgc28gaWYgd2UgaGF2ZSBhIHBlbmRpbmcgc3RhZ2dlciBjYWxsYmFjayxcbiAgICAgIC8vIGl0IG1lYW5zIHRoaXMgZnJhZyBpcyBxdWV1ZWQgZm9yIGVudGVyIGJ1dCByZW1vdmVkXG4gICAgICAvLyBiZWZvcmUgaXRzIHRyYW5zaXRpb24gc3RhcnRlZC4gU2luY2UgaXQgaXMgYWxyZWFkeVxuICAgICAgLy8gZGVzdHJveWVkLCB3ZSBjYW4ganVzdCBsZWF2ZSBpdCBpbiBkZXRhY2hlZCBzdGF0ZS5cbiAgICAgIHJldHVyblxuICAgIH1cbiAgICB2YXIgc3RhZ2dlckFtb3VudCA9IHRoaXMuZ2V0U3RhZ2dlcihmcmFnLCBpbmRleCwgdG90YWwsICdsZWF2ZScpXG4gICAgaWYgKGluRG9jICYmIHN0YWdnZXJBbW91bnQpIHtcbiAgICAgIHZhciBvcCA9IGZyYWcuc3RhZ2dlckNiID0gXy5jYW5jZWxsYWJsZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZyYWcuc3RhZ2dlckNiID0gbnVsbFxuICAgICAgICBmcmFnLnJlbW92ZSgpXG4gICAgICB9KVxuICAgICAgc2V0VGltZW91dChvcCwgc3RhZ2dlckFtb3VudClcbiAgICB9IGVsc2Uge1xuICAgICAgZnJhZy5yZW1vdmUoKVxuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogTW92ZSBhIGZyYWdtZW50IHRvIGEgbmV3IHBvc2l0aW9uLlxuICAgKiBGb3JjZSBubyB0cmFuc2l0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0ge0ZyYWdtZW50fSBmcmFnXG4gICAqIEBwYXJhbSB7Tm9kZX0gcHJldkVsXG4gICAqL1xuXG4gIG1vdmU6IGZ1bmN0aW9uIChmcmFnLCBwcmV2RWwpIHtcbiAgICBmcmFnLmJlZm9yZShwcmV2RWwubmV4dFNpYmxpbmcsIGZhbHNlKVxuICB9LFxuXG4gIC8qKlxuICAgKiBDYWNoZSBhIGZyYWdtZW50IHVzaW5nIHRyYWNrLWJ5IG9yIHRoZSBvYmplY3Qga2V5LlxuICAgKlxuICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAqIEBwYXJhbSB7RnJhZ21lbnR9IGZyYWdcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4XG4gICAqIEBwYXJhbSB7U3RyaW5nfSBba2V5XVxuICAgKi9cblxuICBjYWNoZUZyYWc6IGZ1bmN0aW9uICh2YWx1ZSwgZnJhZywgaW5kZXgsIGtleSkge1xuICAgIHZhciB0cmFja0J5S2V5ID0gdGhpcy5wYXJhbXMudHJhY2tCeVxuICAgIHZhciBjYWNoZSA9IHRoaXMuY2FjaGVcbiAgICB2YXIgcHJpbWl0aXZlID0gIWlzT2JqZWN0KHZhbHVlKVxuICAgIHZhciBpZFxuICAgIGlmIChrZXkgfHwgdHJhY2tCeUtleSB8fCBwcmltaXRpdmUpIHtcbiAgICAgIGlkID0gdHJhY2tCeUtleVxuICAgICAgICA/IHRyYWNrQnlLZXkgPT09ICckaW5kZXgnXG4gICAgICAgICAgPyBpbmRleFxuICAgICAgICAgIDogdmFsdWVbdHJhY2tCeUtleV1cbiAgICAgICAgOiAoa2V5IHx8IHZhbHVlKVxuICAgICAgaWYgKCFjYWNoZVtpZF0pIHtcbiAgICAgICAgY2FjaGVbaWRdID0gZnJhZ1xuICAgICAgfSBlbHNlIGlmICh0cmFja0J5S2V5ICE9PSAnJGluZGV4Jykge1xuICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmXG4gICAgICAgIHRoaXMud2FybkR1cGxpY2F0ZSh2YWx1ZSlcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWQgPSB0aGlzLmlkXG4gICAgICBpZiAodmFsdWUuaGFzT3duUHJvcGVydHkoaWQpKSB7XG4gICAgICAgIGlmICh2YWx1ZVtpZF0gPT09IG51bGwpIHtcbiAgICAgICAgICB2YWx1ZVtpZF0gPSBmcmFnXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJlxuICAgICAgICAgIHRoaXMud2FybkR1cGxpY2F0ZSh2YWx1ZSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgXy5kZWZpbmUodmFsdWUsIGlkLCBmcmFnKVxuICAgICAgfVxuICAgIH1cbiAgICBmcmFnLnJhdyA9IHZhbHVlXG4gIH0sXG5cbiAgLyoqXG4gICAqIEdldCBhIGNhY2hlZCBmcmFnbWVudCBmcm9tIHRoZSB2YWx1ZS9pbmRleC9rZXlcbiAgICpcbiAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgKiBAcGFyYW0ge051bWJlcn0gaW5kZXhcbiAgICogQHBhcmFtIHtTdHJpbmd9IGtleVxuICAgKiBAcmV0dXJuIHtGcmFnbWVudH1cbiAgICovXG5cbiAgZ2V0Q2FjaGVkRnJhZzogZnVuY3Rpb24gKHZhbHVlLCBpbmRleCwga2V5KSB7XG4gICAgdmFyIHRyYWNrQnlLZXkgPSB0aGlzLnBhcmFtcy50cmFja0J5XG4gICAgdmFyIHByaW1pdGl2ZSA9ICFpc09iamVjdCh2YWx1ZSlcbiAgICB2YXIgZnJhZ1xuICAgIGlmIChrZXkgfHwgdHJhY2tCeUtleSB8fCBwcmltaXRpdmUpIHtcbiAgICAgIHZhciBpZCA9IHRyYWNrQnlLZXlcbiAgICAgICAgPyB0cmFja0J5S2V5ID09PSAnJGluZGV4J1xuICAgICAgICAgID8gaW5kZXhcbiAgICAgICAgICA6IHZhbHVlW3RyYWNrQnlLZXldXG4gICAgICAgIDogKGtleSB8fCB2YWx1ZSlcbiAgICAgIGZyYWcgPSB0aGlzLmNhY2hlW2lkXVxuICAgIH0gZWxzZSB7XG4gICAgICBmcmFnID0gdmFsdWVbdGhpcy5pZF1cbiAgICB9XG4gICAgaWYgKGZyYWcgJiYgKGZyYWcucmV1c2VkIHx8IGZyYWcuZnJlc2gpKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmXG4gICAgICB0aGlzLndhcm5EdXBsaWNhdGUodmFsdWUpXG4gICAgfVxuICAgIHJldHVybiBmcmFnXG4gIH0sXG5cbiAgLyoqXG4gICAqIERlbGV0ZSBhIGZyYWdtZW50IGZyb20gY2FjaGUuXG4gICAqXG4gICAqIEBwYXJhbSB7RnJhZ21lbnR9IGZyYWdcbiAgICovXG5cbiAgZGVsZXRlQ2FjaGVkRnJhZzogZnVuY3Rpb24gKGZyYWcpIHtcbiAgICB2YXIgdmFsdWUgPSBmcmFnLnJhd1xuICAgIHZhciB0cmFja0J5S2V5ID0gdGhpcy5wYXJhbXMudHJhY2tCeVxuICAgIHZhciBzY29wZSA9IGZyYWcuc2NvcGVcbiAgICB2YXIgaW5kZXggPSBzY29wZS4kaW5kZXhcbiAgICAvLyBmaXggIzk0ODogYXZvaWQgYWNjaWRlbnRhbGx5IGZhbGwgdGhyb3VnaCB0b1xuICAgIC8vIGEgcGFyZW50IHJlcGVhdGVyIHdoaWNoIGhhcHBlbnMgdG8gaGF2ZSAka2V5LlxuICAgIHZhciBrZXkgPSBzY29wZS5oYXNPd25Qcm9wZXJ0eSgnJGtleScpICYmIHNjb3BlLiRrZXlcbiAgICB2YXIgcHJpbWl0aXZlID0gIWlzT2JqZWN0KHZhbHVlKVxuICAgIGlmICh0cmFja0J5S2V5IHx8IGtleSB8fCBwcmltaXRpdmUpIHtcbiAgICAgIHZhciBpZCA9IHRyYWNrQnlLZXlcbiAgICAgICAgPyB0cmFja0J5S2V5ID09PSAnJGluZGV4J1xuICAgICAgICAgID8gaW5kZXhcbiAgICAgICAgICA6IHZhbHVlW3RyYWNrQnlLZXldXG4gICAgICAgIDogKGtleSB8fCB2YWx1ZSlcbiAgICAgIHRoaXMuY2FjaGVbaWRdID0gbnVsbFxuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZVt0aGlzLmlkXSA9IG51bGxcbiAgICAgIGZyYWcucmF3ID0gbnVsbFxuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogR2V0IHRoZSBzdGFnZ2VyIGFtb3VudCBmb3IgYW4gaW5zZXJ0aW9uL3JlbW92YWwuXG4gICAqXG4gICAqIEBwYXJhbSB7RnJhZ21lbnR9IGZyYWdcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4XG4gICAqIEBwYXJhbSB7TnVtYmVyfSB0b3RhbFxuICAgKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICAgKi9cblxuICBnZXRTdGFnZ2VyOiBmdW5jdGlvbiAoZnJhZywgaW5kZXgsIHRvdGFsLCB0eXBlKSB7XG4gICAgdHlwZSA9IHR5cGUgKyAnU3RhZ2dlcidcbiAgICB2YXIgdHJhbnMgPSBmcmFnLm5vZGUuX192X3RyYW5zXG4gICAgdmFyIGhvb2tzID0gdHJhbnMgJiYgdHJhbnMuaG9va3NcbiAgICB2YXIgaG9vayA9IGhvb2tzICYmIChob29rc1t0eXBlXSB8fCBob29rcy5zdGFnZ2VyKVxuICAgIHJldHVybiBob29rXG4gICAgICA/IGhvb2suY2FsbChmcmFnLCBpbmRleCwgdG90YWwpXG4gICAgICA6IGluZGV4ICogcGFyc2VJbnQodGhpcy5wYXJhbXNbdHlwZV0gfHwgdGhpcy5wYXJhbXMuc3RhZ2dlciwgMTApXG4gIH0sXG5cbiAgLyoqXG4gICAqIFByZS1wcm9jZXNzIHRoZSB2YWx1ZSBiZWZvcmUgcGlwaW5nIGl0IHRocm91Z2ggdGhlXG4gICAqIGZpbHRlcnMuIFRoaXMgaXMgcGFzc2VkIHRvIGFuZCBjYWxsZWQgYnkgdGhlIHdhdGNoZXIuXG4gICAqL1xuXG4gIF9wcmVQcm9jZXNzOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAvLyByZWdhcmRsZXNzIG9mIHR5cGUsIHN0b3JlIHRoZSB1bi1maWx0ZXJlZCByYXcgdmFsdWUuXG4gICAgdGhpcy5yYXdWYWx1ZSA9IHZhbHVlXG4gICAgcmV0dXJuIHZhbHVlXG4gIH0sXG5cbiAgLyoqXG4gICAqIFBvc3QtcHJvY2VzcyB0aGUgdmFsdWUgYWZ0ZXIgaXQgaGFzIGJlZW4gcGlwZWQgdGhyb3VnaFxuICAgKiB0aGUgZmlsdGVycy4gVGhpcyBpcyBwYXNzZWQgdG8gYW5kIGNhbGxlZCBieSB0aGUgd2F0Y2hlci5cbiAgICpcbiAgICogSXQgaXMgbmVjZXNzYXJ5IGZvciB0aGlzIHRvIGJlIGNhbGxlZCBkdXJpbmcgdGhlXG4gICAqIHdhdGhjZXIncyBkZXBlbmRlbmN5IGNvbGxlY3Rpb24gcGhhc2UgYmVjYXVzZSB3ZSB3YW50XG4gICAqIHRoZSB2LWZvciB0byB1cGRhdGUgd2hlbiB0aGUgc291cmNlIE9iamVjdCBpcyBtdXRhdGVkLlxuICAgKi9cblxuICBfcG9zdFByb2Nlc3M6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGlmIChfLmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICByZXR1cm4gdmFsdWVcbiAgICB9IGVsc2UgaWYgKF8uaXNQbGFpbk9iamVjdCh2YWx1ZSkpIHtcbiAgICAgIC8vIGNvbnZlcnQgcGxhaW4gb2JqZWN0IHRvIGFycmF5LlxuICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyh2YWx1ZSlcbiAgICAgIHZhciBpID0ga2V5cy5sZW5ndGhcbiAgICAgIHZhciByZXMgPSBuZXcgQXJyYXkoaSlcbiAgICAgIHZhciBrZXlcbiAgICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAga2V5ID0ga2V5c1tpXVxuICAgICAgICByZXNbaV0gPSB7XG4gICAgICAgICAgJGtleToga2V5LFxuICAgICAgICAgICR2YWx1ZTogdmFsdWVba2V5XVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgIHZhbHVlID0gcmFuZ2UodmFsdWUpXG4gICAgICB9XG4gICAgICByZXR1cm4gdmFsdWUgfHwgW11cbiAgICB9XG4gIH0sXG5cbiAgdW5iaW5kOiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuZGVzY3JpcHRvci5yZWYpIHtcbiAgICAgICh0aGlzLl9zY29wZSB8fCB0aGlzLnZtKS4kcmVmc1t0aGlzLmRlc2NyaXB0b3IucmVmXSA9IG51bGxcbiAgICB9XG4gICAgaWYgKHRoaXMuZnJhZ3MpIHtcbiAgICAgIHZhciBpID0gdGhpcy5mcmFncy5sZW5ndGhcbiAgICAgIHZhciBmcmFnXG4gICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgIGZyYWcgPSB0aGlzLmZyYWdzW2ldXG4gICAgICAgIHRoaXMuZGVsZXRlQ2FjaGVkRnJhZyhmcmFnKVxuICAgICAgICBmcmFnLmRlc3Ryb3koKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEhlbHBlciB0byBmaW5kIHRoZSBwcmV2aW91cyBlbGVtZW50IHRoYXQgaXMgYSBmcmFnbWVudFxuICogYW5jaG9yLiBUaGlzIGlzIG5lY2Vzc2FyeSBiZWNhdXNlIGEgZGVzdHJveWVkIGZyYWcnc1xuICogZWxlbWVudCBjb3VsZCBzdGlsbCBiZSBsaW5nZXJpbmcgaW4gdGhlIERPTSBiZWZvcmUgaXRzXG4gKiBsZWF2aW5nIHRyYW5zaXRpb24gZmluaXNoZXMsIGJ1dCBpdHMgaW5zZXJ0ZWQgZmxhZ1xuICogc2hvdWxkIGhhdmUgYmVlbiBzZXQgdG8gZmFsc2Ugc28gd2UgY2FuIHNraXAgdGhlbS5cbiAqXG4gKiBJZiB0aGlzIGlzIGEgYmxvY2sgcmVwZWF0LCB3ZSB3YW50IHRvIG1ha2Ugc3VyZSB3ZSBvbmx5XG4gKiByZXR1cm4gZnJhZyB0aGF0IGlzIGJvdW5kIHRvIHRoaXMgdi1mb3IuIChzZWUgIzkyOSlcbiAqXG4gKiBAcGFyYW0ge0ZyYWdtZW50fSBmcmFnXG4gKiBAcGFyYW0ge0NvbW1lbnR8VGV4dH0gYW5jaG9yXG4gKiBAcGFyYW0ge1N0cmluZ30gaWRcbiAqIEByZXR1cm4ge0ZyYWdtZW50fVxuICovXG5cbmZ1bmN0aW9uIGZpbmRQcmV2RnJhZyAoZnJhZywgYW5jaG9yLCBpZCkge1xuICB2YXIgZWwgPSBmcmFnLm5vZGUucHJldmlvdXNTaWJsaW5nXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAoIWVsKSByZXR1cm5cbiAgZnJhZyA9IGVsLl9fdmZyYWdfX1xuICB3aGlsZSAoXG4gICAgKCFmcmFnIHx8IGZyYWcuZm9ySWQgIT09IGlkIHx8ICFmcmFnLmluc2VydGVkKSAmJlxuICAgIGVsICE9PSBhbmNob3JcbiAgKSB7XG4gICAgZWwgPSBlbC5wcmV2aW91c1NpYmxpbmdcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAoIWVsKSByZXR1cm5cbiAgICBmcmFnID0gZWwuX192ZnJhZ19fXG4gIH1cbiAgcmV0dXJuIGZyYWdcbn1cblxuLyoqXG4gKiBGaW5kIGEgdm0gZnJvbSBhIGZyYWdtZW50LlxuICpcbiAqIEBwYXJhbSB7RnJhZ21lbnR9IGZyYWdcbiAqIEByZXR1cm4ge1Z1ZXx1bmRlZmluZWR9XG4gKi9cblxuZnVuY3Rpb24gZmluZFZtRnJvbUZyYWcgKGZyYWcpIHtcbiAgcmV0dXJuIGZyYWcubm9kZS5fX3Z1ZV9fIHx8IGZyYWcubm9kZS5uZXh0U2libGluZy5fX3Z1ZV9fXG59XG5cbi8qKlxuICogQ3JlYXRlIGEgcmFuZ2UgYXJyYXkgZnJvbSBnaXZlbiBudW1iZXIuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IG5cbiAqIEByZXR1cm4ge0FycmF5fVxuICovXG5cbmZ1bmN0aW9uIHJhbmdlIChuKSB7XG4gIHZhciBpID0gLTFcbiAgdmFyIHJldCA9IG5ldyBBcnJheShuKVxuICB3aGlsZSAoKytpIDwgbikge1xuICAgIHJldFtpXSA9IGlcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzLndhcm5EdXBsaWNhdGUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBfLndhcm4oXG4gICAgICAnRHVwbGljYXRlIHZhbHVlIGZvdW5kIGluIHYtZm9yPVwiJyArIHRoaXMuZGVzY3JpcHRvci5yYXcgKyAnXCI6ICcgK1xuICAgICAgSlNPTi5zdHJpbmdpZnkodmFsdWUpICsgJy4gVXNlIHRyYWNrLWJ5PVwiJGluZGV4XCIgaWYgJyArXG4gICAgICAneW91IGFyZSBleHBlY3RpbmcgZHVwbGljYXRlIHZhbHVlcy4nXG4gICAgKVxuICB9XG59XG4iLCJ2YXIgXyA9IHJlcXVpcmUoJy4uLy4uL3V0aWwnKVxudmFyIHRlbXBsYXRlUGFyc2VyID0gcmVxdWlyZSgnLi4vLi4vcGFyc2Vycy90ZW1wbGF0ZScpXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXG4gIGJpbmQ6IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBhIGNvbW1lbnQgbm9kZSBtZWFucyB0aGlzIGlzIGEgYmluZGluZyBmb3JcbiAgICAvLyB7e3sgaW5saW5lIHVuZXNjYXBlZCBodG1sIH19fVxuICAgIGlmICh0aGlzLmVsLm5vZGVUeXBlID09PSA4KSB7XG4gICAgICAvLyBob2xkIG5vZGVzXG4gICAgICB0aGlzLm5vZGVzID0gW11cbiAgICAgIC8vIHJlcGxhY2UgdGhlIHBsYWNlaG9sZGVyIHdpdGggcHJvcGVyIGFuY2hvclxuICAgICAgdGhpcy5hbmNob3IgPSBfLmNyZWF0ZUFuY2hvcigndi1odG1sJylcbiAgICAgIF8ucmVwbGFjZSh0aGlzLmVsLCB0aGlzLmFuY2hvcilcbiAgICB9XG4gIH0sXG5cbiAgdXBkYXRlOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICB2YWx1ZSA9IF8udG9TdHJpbmcodmFsdWUpXG4gICAgaWYgKHRoaXMubm9kZXMpIHtcbiAgICAgIHRoaXMuc3dhcCh2YWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSB2YWx1ZVxuICAgIH1cbiAgfSxcblxuICBzd2FwOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAvLyByZW1vdmUgb2xkIG5vZGVzXG4gICAgdmFyIGkgPSB0aGlzLm5vZGVzLmxlbmd0aFxuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIF8ucmVtb3ZlKHRoaXMubm9kZXNbaV0pXG4gICAgfVxuICAgIC8vIGNvbnZlcnQgbmV3IHZhbHVlIHRvIGEgZnJhZ21lbnRcbiAgICAvLyBkbyBub3QgYXR0ZW1wdCB0byByZXRyaWV2ZSBmcm9tIGlkIHNlbGVjdG9yXG4gICAgdmFyIGZyYWcgPSB0ZW1wbGF0ZVBhcnNlci5wYXJzZSh2YWx1ZSwgdHJ1ZSwgdHJ1ZSlcbiAgICAvLyBzYXZlIGEgcmVmZXJlbmNlIHRvIHRoZXNlIG5vZGVzIHNvIHdlIGNhbiByZW1vdmUgbGF0ZXJcbiAgICB0aGlzLm5vZGVzID0gXy50b0FycmF5KGZyYWcuY2hpbGROb2RlcylcbiAgICBfLmJlZm9yZShmcmFnLCB0aGlzLmFuY2hvcilcbiAgfVxufVxuIiwidmFyIF8gPSByZXF1aXJlKCcuLi8uLi91dGlsJylcbnZhciBGcmFnbWVudEZhY3RvcnkgPSByZXF1aXJlKCcuLi8uLi9mcmFnbWVudC9mYWN0b3J5JylcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgcHJpb3JpdHk6IDIwMDAsXG5cbiAgYmluZDogZnVuY3Rpb24gKCkge1xuICAgIHZhciBlbCA9IHRoaXMuZWxcbiAgICBpZiAoIWVsLl9fdnVlX18pIHtcbiAgICAgIC8vIGNoZWNrIGVsc2UgYmxvY2tcbiAgICAgIHZhciBuZXh0ID0gZWwubmV4dEVsZW1lbnRTaWJsaW5nXG4gICAgICBpZiAobmV4dCAmJiBfLmF0dHIobmV4dCwgJ3YtZWxzZScpICE9PSBudWxsKSB7XG4gICAgICAgIF8ucmVtb3ZlKG5leHQpXG4gICAgICAgIHRoaXMuZWxzZUZhY3RvcnkgPSBuZXcgRnJhZ21lbnRGYWN0b3J5KHRoaXMudm0sIG5leHQpXG4gICAgICB9XG4gICAgICAvLyBjaGVjayBtYWluIGJsb2NrXG4gICAgICB0aGlzLmFuY2hvciA9IF8uY3JlYXRlQW5jaG9yKCd2LWlmJylcbiAgICAgIF8ucmVwbGFjZShlbCwgdGhpcy5hbmNob3IpXG4gICAgICB0aGlzLmZhY3RvcnkgPSBuZXcgRnJhZ21lbnRGYWN0b3J5KHRoaXMudm0sIGVsKVxuICAgIH0gZWxzZSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIF8ud2FybihcbiAgICAgICAgJ3YtaWY9XCInICsgdGhpcy5leHByZXNzaW9uICsgJ1wiIGNhbm5vdCBiZSAnICtcbiAgICAgICAgJ3VzZWQgb24gYW4gaW5zdGFuY2Ugcm9vdCBlbGVtZW50LidcbiAgICAgIClcbiAgICAgIHRoaXMuaW52YWxpZCA9IHRydWVcbiAgICB9XG4gIH0sXG5cbiAgdXBkYXRlOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBpZiAodGhpcy5pbnZhbGlkKSByZXR1cm5cbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIGlmICghdGhpcy5mcmFnKSB7XG4gICAgICAgIHRoaXMuaW5zZXJ0KClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW1vdmUoKVxuICAgIH1cbiAgfSxcblxuICBpbnNlcnQ6IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5lbHNlRnJhZykge1xuICAgICAgdGhpcy5lbHNlRnJhZy5yZW1vdmUoKVxuICAgICAgdGhpcy5lbHNlRnJhZyA9IG51bGxcbiAgICB9XG4gICAgdGhpcy5mcmFnID0gdGhpcy5mYWN0b3J5LmNyZWF0ZSh0aGlzLl9ob3N0LCB0aGlzLl9zY29wZSwgdGhpcy5fZnJhZylcbiAgICB0aGlzLmZyYWcuYmVmb3JlKHRoaXMuYW5jaG9yKVxuICB9LFxuXG4gIHJlbW92ZTogZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmZyYWcpIHtcbiAgICAgIHRoaXMuZnJhZy5yZW1vdmUoKVxuICAgICAgdGhpcy5mcmFnID0gbnVsbFxuICAgIH1cbiAgICBpZiAodGhpcy5lbHNlRmFjdG9yeSAmJiAhdGhpcy5lbHNlRnJhZykge1xuICAgICAgdGhpcy5lbHNlRnJhZyA9IHRoaXMuZWxzZUZhY3RvcnkuY3JlYXRlKHRoaXMuX2hvc3QsIHRoaXMuX3Njb3BlLCB0aGlzLl9mcmFnKVxuICAgICAgdGhpcy5lbHNlRnJhZy5iZWZvcmUodGhpcy5hbmNob3IpXG4gICAgfVxuICB9LFxuXG4gIHVuYmluZDogZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmZyYWcpIHtcbiAgICAgIHRoaXMuZnJhZy5kZXN0cm95KClcbiAgICB9XG4gIH1cbn1cbiIsIi8vIHRleHQgJiBodG1sXG5leHBvcnRzLnRleHQgPSByZXF1aXJlKCcuL3RleHQnKVxuZXhwb3J0cy5odG1sID0gcmVxdWlyZSgnLi9odG1sJylcblxuLy8gbG9naWMgY29udHJvbFxuZXhwb3J0c1snZm9yJ10gPSByZXF1aXJlKCcuL2ZvcicpXG5leHBvcnRzWydpZiddID0gcmVxdWlyZSgnLi9pZicpXG5leHBvcnRzLnNob3cgPSByZXF1aXJlKCcuL3Nob3cnKVxuXG4vLyB0d28td2F5IGJpbmRpbmdcbmV4cG9ydHMubW9kZWwgPSByZXF1aXJlKCcuL21vZGVsJylcblxuLy8gZXZlbnQgaGFuZGxpbmdcbmV4cG9ydHMub24gPSByZXF1aXJlKCcuL29uJylcblxuLy8gYXR0cmlidXRlc1xuZXhwb3J0cy5iaW5kID0gcmVxdWlyZSgnLi9iaW5kJylcblxuLy8gcmVmICYgZWxcbmV4cG9ydHMuZWwgPSByZXF1aXJlKCcuL2VsJylcbmV4cG9ydHMucmVmID0gcmVxdWlyZSgnLi9yZWYnKVxuXG4vLyBjbG9ha1xuZXhwb3J0cy5jbG9hayA9IHJlcXVpcmUoJy4vY2xvYWsnKVxuIiwidmFyIF8gPSByZXF1aXJlKCcuLi8uLi8uLi91dGlsJylcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgYmluZDogZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpc1xuICAgIHZhciBlbCA9IHRoaXMuZWxcblxuICAgIHRoaXMuZ2V0VmFsdWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZWwuaGFzT3duUHJvcGVydHkoJ192YWx1ZScpXG4gICAgICAgID8gZWwuX3ZhbHVlXG4gICAgICAgIDogc2VsZi5wYXJhbXMubnVtYmVyXG4gICAgICAgICAgPyBfLnRvTnVtYmVyKGVsLnZhbHVlKVxuICAgICAgICAgIDogZWwudmFsdWVcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRCb29sZWFuVmFsdWUgKCkge1xuICAgICAgdmFyIHZhbCA9IGVsLmNoZWNrZWRcbiAgICAgIGlmICh2YWwgJiYgZWwuaGFzT3duUHJvcGVydHkoJ190cnVlVmFsdWUnKSkge1xuICAgICAgICByZXR1cm4gZWwuX3RydWVWYWx1ZVxuICAgICAgfVxuICAgICAgaWYgKCF2YWwgJiYgZWwuaGFzT3duUHJvcGVydHkoJ19mYWxzZVZhbHVlJykpIHtcbiAgICAgICAgcmV0dXJuIGVsLl9mYWxzZVZhbHVlXG4gICAgICB9XG4gICAgICByZXR1cm4gdmFsXG4gICAgfVxuXG4gICAgdGhpcy5saXN0ZW5lciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBtb2RlbCA9IHNlbGYuX3dhdGNoZXIudmFsdWVcbiAgICAgIGlmIChfLmlzQXJyYXkobW9kZWwpKSB7XG4gICAgICAgIHZhciB2YWwgPSBzZWxmLmdldFZhbHVlKClcbiAgICAgICAgaWYgKGVsLmNoZWNrZWQpIHtcbiAgICAgICAgICBpZiAoXy5pbmRleE9mKG1vZGVsLCB2YWwpIDwgMCkge1xuICAgICAgICAgICAgbW9kZWwucHVzaCh2YWwpXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1vZGVsLiRyZW1vdmUodmFsKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWxmLnNldChnZXRCb29sZWFuVmFsdWUoKSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLm9uKCdjaGFuZ2UnLCB0aGlzLmxpc3RlbmVyKVxuICAgIGlmIChlbC5jaGVja2VkKSB7XG4gICAgICB0aGlzLmFmdGVyQmluZCA9IHRoaXMubGlzdGVuZXJcbiAgICB9XG4gIH0sXG5cbiAgdXBkYXRlOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICB2YXIgZWwgPSB0aGlzLmVsXG4gICAgaWYgKF8uaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIGVsLmNoZWNrZWQgPSBfLmluZGV4T2YodmFsdWUsIHRoaXMuZ2V0VmFsdWUoKSkgPiAtMVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZWwuaGFzT3duUHJvcGVydHkoJ190cnVlVmFsdWUnKSkge1xuICAgICAgICBlbC5jaGVja2VkID0gXy5sb29zZUVxdWFsKHZhbHVlLCBlbC5fdHJ1ZVZhbHVlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWwuY2hlY2tlZCA9ICEhdmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsInZhciBfID0gcmVxdWlyZSgnLi4vLi4vLi4vdXRpbCcpXG5cbnZhciBoYW5kbGVycyA9IHtcbiAgdGV4dDogcmVxdWlyZSgnLi90ZXh0JyksXG4gIHJhZGlvOiByZXF1aXJlKCcuL3JhZGlvJyksXG4gIHNlbGVjdDogcmVxdWlyZSgnLi9zZWxlY3QnKSxcbiAgY2hlY2tib3g6IHJlcXVpcmUoJy4vY2hlY2tib3gnKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxuICBwcmlvcml0eTogODAwLFxuICB0d29XYXk6IHRydWUsXG4gIGhhbmRsZXJzOiBoYW5kbGVycyxcbiAgcGFyYW1zOiBbJ2xhenknLCAnbnVtYmVyJywgJ2RlYm91bmNlJ10sXG5cbiAgLyoqXG4gICAqIFBvc3NpYmxlIGVsZW1lbnRzOlxuICAgKiAgIDxzZWxlY3Q+XG4gICAqICAgPHRleHRhcmVhPlxuICAgKiAgIDxpbnB1dCB0eXBlPVwiKlwiPlxuICAgKiAgICAgLSB0ZXh0XG4gICAqICAgICAtIGNoZWNrYm94XG4gICAqICAgICAtIHJhZGlvXG4gICAqICAgICAtIG51bWJlclxuICAgKi9cblxuICBiaW5kOiBmdW5jdGlvbiAoKSB7XG4gICAgLy8gZnJpZW5kbHkgd2FybmluZy4uLlxuICAgIHRoaXMuY2hlY2tGaWx0ZXJzKClcbiAgICBpZiAodGhpcy5oYXNSZWFkICYmICF0aGlzLmhhc1dyaXRlKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIF8ud2FybihcbiAgICAgICAgJ0l0IHNlZW1zIHlvdSBhcmUgdXNpbmcgYSByZWFkLW9ubHkgZmlsdGVyIHdpdGggJyArXG4gICAgICAgICd2LW1vZGVsLiBZb3UgbWlnaHQgd2FudCB0byB1c2UgYSB0d28td2F5IGZpbHRlciAnICtcbiAgICAgICAgJ3RvIGVuc3VyZSBjb3JyZWN0IGJlaGF2aW9yLidcbiAgICAgIClcbiAgICB9XG4gICAgdmFyIGVsID0gdGhpcy5lbFxuICAgIHZhciB0YWcgPSBlbC50YWdOYW1lXG4gICAgdmFyIGhhbmRsZXJcbiAgICBpZiAodGFnID09PSAnSU5QVVQnKSB7XG4gICAgICBoYW5kbGVyID0gaGFuZGxlcnNbZWwudHlwZV0gfHwgaGFuZGxlcnMudGV4dFxuICAgIH0gZWxzZSBpZiAodGFnID09PSAnU0VMRUNUJykge1xuICAgICAgaGFuZGxlciA9IGhhbmRsZXJzLnNlbGVjdFxuICAgIH0gZWxzZSBpZiAodGFnID09PSAnVEVYVEFSRUEnKSB7XG4gICAgICBoYW5kbGVyID0gaGFuZGxlcnMudGV4dFxuICAgIH0gZWxzZSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIF8ud2FybihcbiAgICAgICAgJ3YtbW9kZWwgZG9lcyBub3Qgc3VwcG9ydCBlbGVtZW50IHR5cGU6ICcgKyB0YWdcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBlbC5fX3ZfbW9kZWwgPSB0aGlzXG4gICAgaGFuZGxlci5iaW5kLmNhbGwodGhpcylcbiAgICB0aGlzLnVwZGF0ZSA9IGhhbmRsZXIudXBkYXRlXG4gICAgdGhpcy5fdW5iaW5kID0gaGFuZGxlci51bmJpbmRcbiAgfSxcblxuICAvKipcbiAgICogQ2hlY2sgcmVhZC93cml0ZSBmaWx0ZXIgc3RhdHMuXG4gICAqL1xuXG4gIGNoZWNrRmlsdGVyczogZnVuY3Rpb24gKCkge1xuICAgIHZhciBmaWx0ZXJzID0gdGhpcy5maWx0ZXJzXG4gICAgaWYgKCFmaWx0ZXJzKSByZXR1cm5cbiAgICB2YXIgaSA9IGZpbHRlcnMubGVuZ3RoXG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgdmFyIGZpbHRlciA9IF8ucmVzb2x2ZUFzc2V0KHRoaXMudm0uJG9wdGlvbnMsICdmaWx0ZXJzJywgZmlsdGVyc1tpXS5uYW1lKVxuICAgICAgaWYgKHR5cGVvZiBmaWx0ZXIgPT09ICdmdW5jdGlvbicgfHwgZmlsdGVyLnJlYWQpIHtcbiAgICAgICAgdGhpcy5oYXNSZWFkID0gdHJ1ZVxuICAgICAgfVxuICAgICAgaWYgKGZpbHRlci53cml0ZSkge1xuICAgICAgICB0aGlzLmhhc1dyaXRlID0gdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICB1bmJpbmQ6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmVsLl9fdl9tb2RlbCA9IG51bGxcbiAgICB0aGlzLl91bmJpbmQgJiYgdGhpcy5fdW5iaW5kKClcbiAgfVxufVxuIiwidmFyIF8gPSByZXF1aXJlKCcuLi8uLi8uLi91dGlsJylcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgYmluZDogZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpc1xuICAgIHZhciBlbCA9IHRoaXMuZWxcblxuICAgIHRoaXMuZ2V0VmFsdWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyB2YWx1ZSBvdmVyd3JpdGUgdmlhIHYtYmluZDp2YWx1ZVxuICAgICAgaWYgKGVsLmhhc093blByb3BlcnR5KCdfdmFsdWUnKSkge1xuICAgICAgICByZXR1cm4gZWwuX3ZhbHVlXG4gICAgICB9XG4gICAgICB2YXIgdmFsID0gZWwudmFsdWVcbiAgICAgIGlmIChzZWxmLnBhcmFtcy5udW1iZXIpIHtcbiAgICAgICAgdmFsID0gXy50b051bWJlcih2YWwpXG4gICAgICB9XG4gICAgICByZXR1cm4gdmFsXG4gICAgfVxuXG4gICAgdGhpcy5saXN0ZW5lciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHNlbGYuc2V0KHNlbGYuZ2V0VmFsdWUoKSlcbiAgICB9XG4gICAgdGhpcy5vbignY2hhbmdlJywgdGhpcy5saXN0ZW5lcilcblxuICAgIGlmIChlbC5jaGVja2VkKSB7XG4gICAgICB0aGlzLmFmdGVyQmluZCA9IHRoaXMubGlzdGVuZXJcbiAgICB9XG4gIH0sXG5cbiAgdXBkYXRlOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICB0aGlzLmVsLmNoZWNrZWQgPSBfLmxvb3NlRXF1YWwodmFsdWUsIHRoaXMuZ2V0VmFsdWUoKSlcbiAgfVxufVxuIiwidmFyIF8gPSByZXF1aXJlKCcuLi8uLi8uLi91dGlsJylcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgYmluZDogZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpc1xuICAgIHZhciBlbCA9IHRoaXMuZWxcblxuICAgIC8vIG1ldGhvZCB0byBmb3JjZSB1cGRhdGUgRE9NIHVzaW5nIGxhdGVzdCB2YWx1ZS5cbiAgICB0aGlzLmZvcmNlVXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHNlbGYuX3dhdGNoZXIpIHtcbiAgICAgICAgc2VsZi51cGRhdGUoc2VsZi5fd2F0Y2hlci5nZXQoKSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBjaGVjayBpZiB0aGlzIGlzIGEgbXVsdGlwbGUgc2VsZWN0XG4gICAgdmFyIG11bHRpcGxlID0gdGhpcy5tdWx0aXBsZSA9IGVsLmhhc0F0dHJpYnV0ZSgnbXVsdGlwbGUnKVxuXG4gICAgLy8gYXR0YWNoIGxpc3RlbmVyXG4gICAgdGhpcy5saXN0ZW5lciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciB2YWx1ZSA9IGdldFZhbHVlKGVsLCBtdWx0aXBsZSlcbiAgICAgIHZhbHVlID0gc2VsZi5wYXJhbXMubnVtYmVyXG4gICAgICAgID8gXy5pc0FycmF5KHZhbHVlKVxuICAgICAgICAgID8gdmFsdWUubWFwKF8udG9OdW1iZXIpXG4gICAgICAgICAgOiBfLnRvTnVtYmVyKHZhbHVlKVxuICAgICAgICA6IHZhbHVlXG4gICAgICBzZWxmLnNldCh2YWx1ZSlcbiAgICB9XG4gICAgdGhpcy5vbignY2hhbmdlJywgdGhpcy5saXN0ZW5lcilcblxuICAgIC8vIGlmIGhhcyBpbml0aWFsIHZhbHVlLCBzZXQgYWZ0ZXJCaW5kXG4gICAgdmFyIGluaXRWYWx1ZSA9IGdldFZhbHVlKGVsLCBtdWx0aXBsZSwgdHJ1ZSlcbiAgICBpZiAoKG11bHRpcGxlICYmIGluaXRWYWx1ZS5sZW5ndGgpIHx8XG4gICAgICAgICghbXVsdGlwbGUgJiYgaW5pdFZhbHVlICE9PSBudWxsKSkge1xuICAgICAgdGhpcy5hZnRlckJpbmQgPSB0aGlzLmxpc3RlbmVyXG4gICAgfVxuXG4gICAgLy8gQWxsIG1ham9yIGJyb3dzZXJzIGV4Y2VwdCBGaXJlZm94IHJlc2V0c1xuICAgIC8vIHNlbGVjdGVkSW5kZXggd2l0aCB2YWx1ZSAtMSB0byAwIHdoZW4gdGhlIGVsZW1lbnRcbiAgICAvLyBpcyBhcHBlbmRlZCB0byBhIG5ldyBwYXJlbnQsIHRoZXJlZm9yZSB3ZSBoYXZlIHRvXG4gICAgLy8gZm9yY2UgYSBET00gdXBkYXRlIHdoZW5ldmVyIHRoYXQgaGFwcGVucy4uLlxuICAgIHRoaXMudm0uJG9uKCdob29rOmF0dGFjaGVkJywgdGhpcy5mb3JjZVVwZGF0ZSlcbiAgfSxcblxuICB1cGRhdGU6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHZhciBlbCA9IHRoaXMuZWxcbiAgICBlbC5zZWxlY3RlZEluZGV4ID0gLTFcbiAgICB2YXIgbXVsdGkgPSB0aGlzLm11bHRpcGxlICYmIF8uaXNBcnJheSh2YWx1ZSlcbiAgICB2YXIgb3B0aW9ucyA9IGVsLm9wdGlvbnNcbiAgICB2YXIgaSA9IG9wdGlvbnMubGVuZ3RoXG4gICAgdmFyIG9wLCB2YWxcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICBvcCA9IG9wdGlvbnNbaV1cbiAgICAgIHZhbCA9IG9wLmhhc093blByb3BlcnR5KCdfdmFsdWUnKVxuICAgICAgICA/IG9wLl92YWx1ZVxuICAgICAgICA6IG9wLnZhbHVlXG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSBlcWVxZXEgKi9cbiAgICAgIG9wLnNlbGVjdGVkID0gbXVsdGlcbiAgICAgICAgPyBpbmRleE9mKHZhbHVlLCB2YWwpID4gLTFcbiAgICAgICAgOiBfLmxvb3NlRXF1YWwodmFsdWUsIHZhbClcbiAgICAgIC8qIGVzbGludC1lbmFibGUgZXFlcWVxICovXG4gICAgfVxuICB9LFxuXG4gIHVuYmluZDogZnVuY3Rpb24gKCkge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgdGhpcy52bS4kb2ZmKCdob29rOmF0dGFjaGVkJywgdGhpcy5mb3JjZVVwZGF0ZSlcbiAgfVxufVxuXG4vKipcbiAqIEdldCBzZWxlY3QgdmFsdWVcbiAqXG4gKiBAcGFyYW0ge1NlbGVjdEVsZW1lbnR9IGVsXG4gKiBAcGFyYW0ge0Jvb2xlYW59IG11bHRpXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGluaXRcbiAqIEByZXR1cm4ge0FycmF5fCp9XG4gKi9cblxuZnVuY3Rpb24gZ2V0VmFsdWUgKGVsLCBtdWx0aSwgaW5pdCkge1xuICB2YXIgcmVzID0gbXVsdGkgPyBbXSA6IG51bGxcbiAgdmFyIG9wLCB2YWwsIHNlbGVjdGVkXG4gIGZvciAodmFyIGkgPSAwLCBsID0gZWwub3B0aW9ucy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBvcCA9IGVsLm9wdGlvbnNbaV1cbiAgICBzZWxlY3RlZCA9IGluaXRcbiAgICAgID8gb3AuaGFzQXR0cmlidXRlKCdzZWxlY3RlZCcpXG4gICAgICA6IG9wLnNlbGVjdGVkXG4gICAgaWYgKHNlbGVjdGVkKSB7XG4gICAgICB2YWwgPSBvcC5oYXNPd25Qcm9wZXJ0eSgnX3ZhbHVlJylcbiAgICAgICAgPyBvcC5fdmFsdWVcbiAgICAgICAgOiBvcC52YWx1ZVxuICAgICAgaWYgKG11bHRpKSB7XG4gICAgICAgIHJlcy5wdXNoKHZhbClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB2YWxcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG4vKipcbiAqIE5hdGl2ZSBBcnJheS5pbmRleE9mIHVzZXMgc3RyaWN0IGVxdWFsLCBidXQgaW4gdGhpc1xuICogY2FzZSB3ZSBuZWVkIHRvIG1hdGNoIHN0cmluZy9udW1iZXJzIHdpdGggY3VzdG9tIGVxdWFsLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGFyclxuICogQHBhcmFtIHsqfSB2YWxcbiAqL1xuXG5mdW5jdGlvbiBpbmRleE9mIChhcnIsIHZhbCkge1xuICB2YXIgaSA9IGFyci5sZW5ndGhcbiAgd2hpbGUgKGktLSkge1xuICAgIGlmIChfLmxvb3NlRXF1YWwoYXJyW2ldLCB2YWwpKSB7XG4gICAgICByZXR1cm4gaVxuICAgIH1cbiAgfVxuICByZXR1cm4gLTFcbn1cbiIsInZhciBfID0gcmVxdWlyZSgnLi4vLi4vLi4vdXRpbCcpXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXG4gIGJpbmQ6IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXNcbiAgICB2YXIgZWwgPSB0aGlzLmVsXG4gICAgdmFyIGlzUmFuZ2UgPSBlbC50eXBlID09PSAncmFuZ2UnXG4gICAgdmFyIGxhenkgPSB0aGlzLnBhcmFtcy5sYXp5XG4gICAgdmFyIG51bWJlciA9IHRoaXMucGFyYW1zLm51bWJlclxuICAgIHZhciBkZWJvdW5jZSA9IHRoaXMucGFyYW1zLmRlYm91bmNlXG5cbiAgICAvLyBoYW5kbGUgY29tcG9zaXRpb24gZXZlbnRzLlxuICAgIC8vICAgaHR0cDovL2Jsb2cuZXZhbnlvdS5tZS8yMDE0LzAxLzAzL2NvbXBvc2l0aW9uLWV2ZW50L1xuICAgIC8vIHNraXAgdGhpcyBmb3IgQW5kcm9pZCBiZWNhdXNlIGl0IGhhbmRsZXMgY29tcG9zaXRpb25cbiAgICAvLyBldmVudHMgcXVpdGUgZGlmZmVyZW50bHkuIEFuZHJvaWQgZG9lc24ndCB0cmlnZ2VyXG4gICAgLy8gY29tcG9zaXRpb24gZXZlbnRzIGZvciBsYW5ndWFnZSBpbnB1dCBtZXRob2RzIGUuZy5cbiAgICAvLyBDaGluZXNlLCBidXQgaW5zdGVhZCB0cmlnZ2VycyB0aGVtIGZvciBzcGVsbGluZ1xuICAgIC8vIHN1Z2dlc3Rpb25zLi4uIChzZWUgRGlzY3Vzc2lvbi8jMTYyKVxuICAgIHZhciBjb21wb3NpbmcgPSBmYWxzZVxuICAgIGlmICghXy5pc0FuZHJvaWQgJiYgIWlzUmFuZ2UpIHtcbiAgICAgIHRoaXMub24oJ2NvbXBvc2l0aW9uc3RhcnQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbXBvc2luZyA9IHRydWVcbiAgICAgIH0pXG4gICAgICB0aGlzLm9uKCdjb21wb3NpdGlvbmVuZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29tcG9zaW5nID0gZmFsc2VcbiAgICAgICAgLy8gaW4gSUUxMSB0aGUgXCJjb21wb3NpdGlvbmVuZFwiIGV2ZW50IGZpcmVzIEFGVEVSXG4gICAgICAgIC8vIHRoZSBcImlucHV0XCIgZXZlbnQsIHNvIHRoZSBpbnB1dCBoYW5kbGVyIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gYXQgdGhlIGVuZC4uLiBoYXZlIHRvIGNhbGwgaXQgaGVyZS5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gIzEzMjc6IGluIGxhenkgbW9kZSB0aGlzIGlzIHVuZWNlc3NhcnkuXG4gICAgICAgIGlmICghbGF6eSkge1xuICAgICAgICAgIHNlbGYubGlzdGVuZXIoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIC8vIHByZXZlbnQgbWVzc2luZyB3aXRoIHRoZSBpbnB1dCB3aGVuIHVzZXIgaXMgdHlwaW5nLFxuICAgIC8vIGFuZCBmb3JjZSB1cGRhdGUgb24gYmx1ci5cbiAgICB0aGlzLmZvY3VzZWQgPSBmYWxzZVxuICAgIGlmICghaXNSYW5nZSkge1xuICAgICAgdGhpcy5vbignZm9jdXMnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNlbGYuZm9jdXNlZCA9IHRydWVcbiAgICAgIH0pXG4gICAgICB0aGlzLm9uKCdibHVyJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBzZWxmLmZvY3VzZWQgPSBmYWxzZVxuICAgICAgICBzZWxmLmxpc3RlbmVyKClcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gTm93IGF0dGFjaCB0aGUgbWFpbiBsaXN0ZW5lclxuICAgIHRoaXMubGlzdGVuZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoY29tcG9zaW5nKSByZXR1cm5cbiAgICAgIHZhciB2YWwgPSBudW1iZXIgfHwgaXNSYW5nZVxuICAgICAgICA/IF8udG9OdW1iZXIoZWwudmFsdWUpXG4gICAgICAgIDogZWwudmFsdWVcbiAgICAgIHNlbGYuc2V0KHZhbClcbiAgICAgIC8vIGZvcmNlIHVwZGF0ZSBvbiBuZXh0IHRpY2sgdG8gYXZvaWQgbG9jayAmIHNhbWUgdmFsdWVcbiAgICAgIC8vIGFsc28gb25seSB1cGRhdGUgd2hlbiB1c2VyIGlzIG5vdCB0eXBpbmdcbiAgICAgIF8ubmV4dFRpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoc2VsZi5fYm91bmQgJiYgIXNlbGYuZm9jdXNlZCkge1xuICAgICAgICAgIHNlbGYudXBkYXRlKHNlbGYuX3dhdGNoZXIudmFsdWUpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gYXBwbHkgZGVib3VuY2VcbiAgICBpZiAoZGVib3VuY2UpIHtcbiAgICAgIHRoaXMubGlzdGVuZXIgPSBfLmRlYm91bmNlKHRoaXMubGlzdGVuZXIsIGRlYm91bmNlKVxuICAgIH1cblxuICAgIC8vIFN1cHBvcnQgalF1ZXJ5IGV2ZW50cywgc2luY2UgalF1ZXJ5LnRyaWdnZXIoKSBkb2Vzbid0XG4gICAgLy8gdHJpZ2dlciBuYXRpdmUgZXZlbnRzIGluIHNvbWUgY2FzZXMgYW5kIHNvbWUgcGx1Z2luc1xuICAgIC8vIHJlbHkgb24gJC50cmlnZ2VyKClcbiAgICAvL1xuICAgIC8vIFdlIHdhbnQgdG8gbWFrZSBzdXJlIGlmIGEgbGlzdGVuZXIgaXMgYXR0YWNoZWQgdXNpbmdcbiAgICAvLyBqUXVlcnksIGl0IGlzIGFsc28gcmVtb3ZlZCB3aXRoIGpRdWVyeSwgdGhhdCdzIHdoeVxuICAgIC8vIHdlIGRvIHRoZSBjaGVjayBmb3IgZWFjaCBkaXJlY3RpdmUgaW5zdGFuY2UgYW5kXG4gICAgLy8gc3RvcmUgdGhhdCBjaGVjayByZXN1bHQgb24gaXRzZWxmLiBUaGlzIGFsc28gYWxsb3dzXG4gICAgLy8gZWFzaWVyIHRlc3QgY292ZXJhZ2UgY29udHJvbCBieSB1bnNldHRpbmcgdGhlIGdsb2JhbFxuICAgIC8vIGpRdWVyeSB2YXJpYWJsZSBpbiB0ZXN0cy5cbiAgICB0aGlzLmhhc2pRdWVyeSA9IHR5cGVvZiBqUXVlcnkgPT09ICdmdW5jdGlvbidcbiAgICBpZiAodGhpcy5oYXNqUXVlcnkpIHtcbiAgICAgIGpRdWVyeShlbCkub24oJ2NoYW5nZScsIHRoaXMubGlzdGVuZXIpXG4gICAgICBpZiAoIWxhenkpIHtcbiAgICAgICAgalF1ZXJ5KGVsKS5vbignaW5wdXQnLCB0aGlzLmxpc3RlbmVyKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9uKCdjaGFuZ2UnLCB0aGlzLmxpc3RlbmVyKVxuICAgICAgaWYgKCFsYXp5KSB7XG4gICAgICAgIHRoaXMub24oJ2lucHV0JywgdGhpcy5saXN0ZW5lcilcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBJRTkgZG9lc24ndCBmaXJlIGlucHV0IGV2ZW50IG9uIGJhY2tzcGFjZS9kZWwvY3V0XG4gICAgaWYgKCFsYXp5ICYmIF8uaXNJRTkpIHtcbiAgICAgIHRoaXMub24oJ2N1dCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgXy5uZXh0VGljayhzZWxmLmxpc3RlbmVyKVxuICAgICAgfSlcbiAgICAgIHRoaXMub24oJ2tleXVwJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gNDYgfHwgZS5rZXlDb2RlID09PSA4KSB7XG4gICAgICAgICAgc2VsZi5saXN0ZW5lcigpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gc2V0IGluaXRpYWwgdmFsdWUgaWYgcHJlc2VudFxuICAgIGlmIChcbiAgICAgIGVsLmhhc0F0dHJpYnV0ZSgndmFsdWUnKSB8fFxuICAgICAgKGVsLnRhZ05hbWUgPT09ICdURVhUQVJFQScgJiYgZWwudmFsdWUudHJpbSgpKVxuICAgICkge1xuICAgICAgdGhpcy5hZnRlckJpbmQgPSB0aGlzLmxpc3RlbmVyXG4gICAgfVxuICB9LFxuXG4gIHVwZGF0ZTogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgdGhpcy5lbC52YWx1ZSA9IF8udG9TdHJpbmcodmFsdWUpXG4gIH0sXG5cbiAgdW5iaW5kOiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGVsID0gdGhpcy5lbFxuICAgIGlmICh0aGlzLmhhc2pRdWVyeSkge1xuICAgICAgalF1ZXJ5KGVsKS5vZmYoJ2NoYW5nZScsIHRoaXMubGlzdGVuZXIpXG4gICAgICBqUXVlcnkoZWwpLm9mZignaW5wdXQnLCB0aGlzLmxpc3RlbmVyKVxuICAgIH1cbiAgfVxufVxuIiwidmFyIF8gPSByZXF1aXJlKCcuLi8uLi91dGlsJylcblxuLy8ga2V5Q29kZSBhbGlhc2VzXG52YXIga2V5Q29kZXMgPSB7XG4gIGVzYzogMjcsXG4gIHRhYjogOSxcbiAgZW50ZXI6IDEzLFxuICBzcGFjZTogMzIsXG4gICdkZWxldGUnOiA0NixcbiAgdXA6IDM4LFxuICBsZWZ0OiAzNyxcbiAgcmlnaHQ6IDM5LFxuICBkb3duOiA0MFxufVxuXG5mdW5jdGlvbiBrZXlGaWx0ZXIgKGhhbmRsZXIsIGtleXMpIHtcbiAgdmFyIGNvZGVzID0ga2V5cy5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgIHZhciBjb2RlID0ga2V5Q29kZXNba2V5XVxuICAgIGlmICghY29kZSkge1xuICAgICAgY29kZSA9IHBhcnNlSW50KGtleSwgMTApXG4gICAgfVxuICAgIHJldHVybiBjb2RlXG4gIH0pXG4gIHJldHVybiBmdW5jdGlvbiBrZXlIYW5kbGVyIChlKSB7XG4gICAgaWYgKGNvZGVzLmluZGV4T2YoZS5rZXlDb2RlKSA+IC0xKSB7XG4gICAgICByZXR1cm4gaGFuZGxlci5jYWxsKHRoaXMsIGUpXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHN0b3BGaWx0ZXIgKGhhbmRsZXIpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHN0b3BIYW5kbGVyIChlKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgIHJldHVybiBoYW5kbGVyLmNhbGwodGhpcywgZSlcbiAgfVxufVxuXG5mdW5jdGlvbiBwcmV2ZW50RmlsdGVyIChoYW5kbGVyKSB7XG4gIHJldHVybiBmdW5jdGlvbiBwcmV2ZW50SGFuZGxlciAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIHJldHVybiBoYW5kbGVyLmNhbGwodGhpcywgZSlcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxuICBhY2NlcHRTdGF0ZW1lbnQ6IHRydWUsXG4gIHByaW9yaXR5OiA3MDAsXG5cbiAgYmluZDogZnVuY3Rpb24gKCkge1xuICAgIC8vIGRlYWwgd2l0aCBpZnJhbWVzXG4gICAgaWYgKFxuICAgICAgdGhpcy5lbC50YWdOYW1lID09PSAnSUZSQU1FJyAmJlxuICAgICAgdGhpcy5hcmcgIT09ICdsb2FkJ1xuICAgICkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzXG4gICAgICB0aGlzLmlmcmFtZUJpbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF8ub24oc2VsZi5lbC5jb250ZW50V2luZG93LCBzZWxmLmFyZywgc2VsZi5oYW5kbGVyKVxuICAgICAgfVxuICAgICAgdGhpcy5vbignbG9hZCcsIHRoaXMuaWZyYW1lQmluZClcbiAgICB9XG4gIH0sXG5cbiAgdXBkYXRlOiBmdW5jdGlvbiAoaGFuZGxlcikge1xuICAgIC8vIHN0dWIgYSBub29wIGZvciB2LW9uIHdpdGggbm8gdmFsdWUsXG4gICAgLy8gZS5nLiBAbW91c2Vkb3duLnByZXZlbnRcbiAgICBpZiAoIXRoaXMuZGVzY3JpcHRvci5yYXcpIHtcbiAgICAgIGhhbmRsZXIgPSBmdW5jdGlvbiAoKSB7fVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgaGFuZGxlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBfLndhcm4oXG4gICAgICAgICd2LW9uOicgKyB0aGlzLmFyZyArICc9XCInICtcbiAgICAgICAgdGhpcy5leHByZXNzaW9uICsgJ1wiIGV4cGVjdHMgYSBmdW5jdGlvbiB2YWx1ZSwgJyArXG4gICAgICAgICdnb3QgJyArIGhhbmRsZXJcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIGFwcGx5IG1vZGlmaWVyc1xuICAgIGlmICh0aGlzLm1vZGlmaWVycy5zdG9wKSB7XG4gICAgICBoYW5kbGVyID0gc3RvcEZpbHRlcihoYW5kbGVyKVxuICAgIH1cbiAgICBpZiAodGhpcy5tb2RpZmllcnMucHJldmVudCkge1xuICAgICAgaGFuZGxlciA9IHByZXZlbnRGaWx0ZXIoaGFuZGxlcilcbiAgICB9XG4gICAgLy8ga2V5IGZpbHRlclxuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXModGhpcy5tb2RpZmllcnMpXG4gICAgICAuZmlsdGVyKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgcmV0dXJuIGtleSAhPT0gJ3N0b3AnICYmIGtleSAhPT0gJ3ByZXZlbnQnXG4gICAgICB9KVxuICAgIGlmIChrZXlzLmxlbmd0aCkge1xuICAgICAgaGFuZGxlciA9IGtleUZpbHRlcihoYW5kbGVyLCBrZXlzKVxuICAgIH1cblxuICAgIHRoaXMucmVzZXQoKVxuICAgIHZhciBzY29wZSA9IHRoaXMuX3Njb3BlIHx8IHRoaXMudm1cbiAgICB0aGlzLmhhbmRsZXIgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgc2NvcGUuJGV2ZW50ID0gZVxuICAgICAgdmFyIHJlcyA9IGhhbmRsZXIoZSlcbiAgICAgIHNjb3BlLiRldmVudCA9IG51bGxcbiAgICAgIHJldHVybiByZXNcbiAgICB9XG4gICAgaWYgKHRoaXMuaWZyYW1lQmluZCkge1xuICAgICAgdGhpcy5pZnJhbWVCaW5kKClcbiAgICB9IGVsc2Uge1xuICAgICAgXy5vbih0aGlzLmVsLCB0aGlzLmFyZywgdGhpcy5oYW5kbGVyKVxuICAgIH1cbiAgfSxcblxuICByZXNldDogZnVuY3Rpb24gKCkge1xuICAgIHZhciBlbCA9IHRoaXMuaWZyYW1lQmluZFxuICAgICAgPyB0aGlzLmVsLmNvbnRlbnRXaW5kb3dcbiAgICAgIDogdGhpcy5lbFxuICAgIGlmICh0aGlzLmhhbmRsZXIpIHtcbiAgICAgIF8ub2ZmKGVsLCB0aGlzLmFyZywgdGhpcy5oYW5kbGVyKVxuICAgIH1cbiAgfSxcblxuICB1bmJpbmQ6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnJlc2V0KClcbiAgfVxufVxuIiwiaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgYmluZDogZnVuY3Rpb24gKCkge1xuICAgICAgcmVxdWlyZSgnLi4vLi4vdXRpbCcpLndhcm4oXG4gICAgICAgICd2LXJlZjonICsgdGhpcy5hcmcgKyAnIG11c3QgYmUgdXNlZCBvbiBhIGNoaWxkICcgK1xuICAgICAgICAnY29tcG9uZW50LiBGb3VuZCBvbiA8JyArIHRoaXMuZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpICsgJz4uJ1xuICAgICAgKVxuICAgIH1cbiAgfVxufVxuIiwidmFyIF8gPSByZXF1aXJlKCcuLi8uLi91dGlsJylcbnZhciB0cmFuc2l0aW9uID0gcmVxdWlyZSgnLi4vLi4vdHJhbnNpdGlvbicpXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXG4gIGJpbmQ6IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBjaGVjayBlbHNlIGJsb2NrXG4gICAgdmFyIG5leHQgPSB0aGlzLmVsLm5leHRFbGVtZW50U2libGluZ1xuICAgIGlmIChuZXh0ICYmIF8uYXR0cihuZXh0LCAndi1lbHNlJykgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuZWxzZUVsID0gbmV4dFxuICAgIH1cbiAgfSxcblxuICB1cGRhdGU6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHRoaXMuYXBwbHkodGhpcy5lbCwgdmFsdWUpXG4gICAgaWYgKHRoaXMuZWxzZUVsKSB7XG4gICAgICB0aGlzLmFwcGx5KHRoaXMuZWxzZUVsLCAhdmFsdWUpXG4gICAgfVxuICB9LFxuXG4gIGFwcGx5OiBmdW5jdGlvbiAoZWwsIHZhbHVlKSB7XG4gICAgZnVuY3Rpb24gZG9uZSAoKSB7XG4gICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gdmFsdWUgPyAnJyA6ICdub25lJ1xuICAgIH1cbiAgICAvLyBkbyBub3QgYXBwbHkgdHJhbnNpdGlvbiBpZiBub3QgaW4gZG9jXG4gICAgaWYgKF8uaW5Eb2MoZWwpKSB7XG4gICAgICB0cmFuc2l0aW9uLmFwcGx5KGVsLCB2YWx1ZSA/IDEgOiAtMSwgZG9uZSwgdGhpcy52bSlcbiAgICB9IGVsc2Uge1xuICAgICAgZG9uZSgpXG4gICAgfVxuICB9XG59XG4iLCJ2YXIgXyA9IHJlcXVpcmUoJy4uLy4uL3V0aWwnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxuICBiaW5kOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5hdHRyID0gdGhpcy5lbC5ub2RlVHlwZSA9PT0gM1xuICAgICAgPyAnZGF0YSdcbiAgICAgIDogJ3RleHRDb250ZW50J1xuICB9LFxuXG4gIHVwZGF0ZTogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgdGhpcy5lbFt0aGlzLmF0dHJdID0gXy50b1N0cmluZyh2YWx1ZSlcbiAgfVxufVxuIiwidmFyIF8gPSByZXF1aXJlKCcuLi91dGlsJylcbnZhciBQYXRoID0gcmVxdWlyZSgnLi4vcGFyc2Vycy9wYXRoJylcbnZhciB0b0FycmF5ID0gcmVxdWlyZSgnLi4vZGlyZWN0aXZlcy9wdWJsaWMvZm9yJykuX3Bvc3RQcm9jZXNzXG5cbi8qKlxuICogTGltaXQgZmlsdGVyIGZvciBhcnJheXNcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gblxuICogQHBhcmFtIHtOdW1iZXJ9IG9mZnNldCAoRGVjaW1hbCBleHBlY3RlZClcbiAqL1xuXG5leHBvcnRzLmxpbWl0QnkgPSBmdW5jdGlvbiAoYXJyLCBuLCBvZmZzZXQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID8gcGFyc2VJbnQob2Zmc2V0LCAxMCkgOiAwXG4gIHJldHVybiB0eXBlb2YgbiA9PT0gJ251bWJlcidcbiAgICA/IGFyci5zbGljZShvZmZzZXQsIG9mZnNldCArIG4pXG4gICAgOiBhcnJcbn1cblxuLyoqXG4gKiBGaWx0ZXIgZmlsdGVyIGZvciBhcnJheXNcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc2VhcmNoXG4gKiBAcGFyYW0ge1N0cmluZ30gW2RlbGltaXRlcl1cbiAqIEBwYXJhbSB7U3RyaW5nfSAuLi5kYXRhS2V5c1xuICovXG5cbmV4cG9ydHMuZmlsdGVyQnkgPSBmdW5jdGlvbiAoYXJyLCBzZWFyY2gsIGRlbGltaXRlcikge1xuICBhcnIgPSB0b0FycmF5KGFycilcbiAgaWYgKHNlYXJjaCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGFyclxuICB9XG4gIGlmICh0eXBlb2Ygc2VhcmNoID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGFyci5maWx0ZXIoc2VhcmNoKVxuICB9XG4gIC8vIGNhc3QgdG8gbG93ZXJjYXNlIHN0cmluZ1xuICBzZWFyY2ggPSAoJycgKyBzZWFyY2gpLnRvTG93ZXJDYXNlKClcbiAgLy8gYWxsb3cgb3B0aW9uYWwgYGluYCBkZWxpbWl0ZXJcbiAgLy8gYmVjYXVzZSB3aHkgbm90XG4gIHZhciBuID0gZGVsaW1pdGVyID09PSAnaW4nID8gMyA6IDJcbiAgLy8gZXh0cmFjdCBhbmQgZmxhdHRlbiBrZXlzXG4gIHZhciBrZXlzID0gXy50b0FycmF5KGFyZ3VtZW50cywgbikucmVkdWNlKGZ1bmN0aW9uIChwcmV2LCBjdXIpIHtcbiAgICByZXR1cm4gcHJldi5jb25jYXQoY3VyKVxuICB9LCBbXSlcbiAgdmFyIHJlcyA9IFtdXG4gIHZhciBpdGVtLCBrZXksIHZhbCwgalxuICBmb3IgKHZhciBpID0gMCwgbCA9IGFyci5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBpdGVtID0gYXJyW2ldXG4gICAgdmFsID0gKGl0ZW0gJiYgaXRlbS4kdmFsdWUpIHx8IGl0ZW1cbiAgICBqID0ga2V5cy5sZW5ndGhcbiAgICBpZiAoaikge1xuICAgICAgd2hpbGUgKGotLSkge1xuICAgICAgICBrZXkgPSBrZXlzW2pdXG4gICAgICAgIGlmICgoa2V5ID09PSAnJGtleScgJiYgY29udGFpbnMoaXRlbS4ka2V5LCBzZWFyY2gpKSB8fFxuICAgICAgICAgICAgY29udGFpbnMoUGF0aC5nZXQodmFsLCBrZXkpLCBzZWFyY2gpKSB7XG4gICAgICAgICAgcmVzLnB1c2goaXRlbSlcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChjb250YWlucyhpdGVtLCBzZWFyY2gpKSB7XG4gICAgICByZXMucHVzaChpdGVtKVxuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbi8qKlxuICogRmlsdGVyIGZpbHRlciBmb3IgYXJyYXlzXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHNvcnRLZXlcbiAqIEBwYXJhbSB7U3RyaW5nfSByZXZlcnNlXG4gKi9cblxuZXhwb3J0cy5vcmRlckJ5ID0gZnVuY3Rpb24gKGFyciwgc29ydEtleSwgcmV2ZXJzZSkge1xuICBhcnIgPSB0b0FycmF5KGFycilcbiAgaWYgKCFzb3J0S2V5KSB7XG4gICAgcmV0dXJuIGFyclxuICB9XG4gIHZhciBvcmRlciA9IChyZXZlcnNlICYmIHJldmVyc2UgPCAwKSA/IC0xIDogMVxuICAvLyBzb3J0IG9uIGEgY29weSB0byBhdm9pZCBtdXRhdGluZyBvcmlnaW5hbCBhcnJheVxuICByZXR1cm4gYXJyLnNsaWNlKCkuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgIGlmIChzb3J0S2V5ICE9PSAnJGtleScpIHtcbiAgICAgIGlmIChfLmlzT2JqZWN0KGEpICYmICckdmFsdWUnIGluIGEpIGEgPSBhLiR2YWx1ZVxuICAgICAgaWYgKF8uaXNPYmplY3QoYikgJiYgJyR2YWx1ZScgaW4gYikgYiA9IGIuJHZhbHVlXG4gICAgfVxuICAgIGEgPSBfLmlzT2JqZWN0KGEpID8gUGF0aC5nZXQoYSwgc29ydEtleSkgOiBhXG4gICAgYiA9IF8uaXNPYmplY3QoYikgPyBQYXRoLmdldChiLCBzb3J0S2V5KSA6IGJcbiAgICByZXR1cm4gYSA9PT0gYiA/IDAgOiBhID4gYiA/IG9yZGVyIDogLW9yZGVyXG4gIH0pXG59XG5cbi8qKlxuICogU3RyaW5nIGNvbnRhaW4gaGVscGVyXG4gKlxuICogQHBhcmFtIHsqfSB2YWxcbiAqIEBwYXJhbSB7U3RyaW5nfSBzZWFyY2hcbiAqL1xuXG5mdW5jdGlvbiBjb250YWlucyAodmFsLCBzZWFyY2gpIHtcbiAgdmFyIGlcbiAgaWYgKF8uaXNQbGFpbk9iamVjdCh2YWwpKSB7XG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyh2YWwpXG4gICAgaSA9IGtleXMubGVuZ3RoXG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgaWYgKGNvbnRhaW5zKHZhbFtrZXlzW2ldXSwgc2VhcmNoKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChfLmlzQXJyYXkodmFsKSkge1xuICAgIGkgPSB2YWwubGVuZ3RoXG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgaWYgKGNvbnRhaW5zKHZhbFtpXSwgc2VhcmNoKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmICh2YWwgIT0gbnVsbCkge1xuICAgIHJldHVybiB2YWwudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpLmluZGV4T2Yoc2VhcmNoKSA+IC0xXG4gIH1cbn1cbiIsInZhciBfID0gcmVxdWlyZSgnLi4vdXRpbCcpXG5cbi8qKlxuICogU3RyaW5naWZ5IHZhbHVlLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBpbmRlbnRcbiAqL1xuXG5leHBvcnRzLmpzb24gPSB7XG4gIHJlYWQ6IGZ1bmN0aW9uICh2YWx1ZSwgaW5kZW50KSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZydcbiAgICAgID8gdmFsdWVcbiAgICAgIDogSlNPTi5zdHJpbmdpZnkodmFsdWUsIG51bGwsIE51bWJlcihpbmRlbnQpIHx8IDIpXG4gIH0sXG4gIHdyaXRlOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIEpTT04ucGFyc2UodmFsdWUpXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIHZhbHVlXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogJ2FiYycgPT4gJ0FiYydcbiAqL1xuXG5leHBvcnRzLmNhcGl0YWxpemUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgaWYgKCF2YWx1ZSAmJiB2YWx1ZSAhPT0gMCkgcmV0dXJuICcnXG4gIHZhbHVlID0gdmFsdWUudG9TdHJpbmcoKVxuICByZXR1cm4gdmFsdWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB2YWx1ZS5zbGljZSgxKVxufVxuXG4vKipcbiAqICdhYmMnID0+ICdBQkMnXG4gKi9cblxuZXhwb3J0cy51cHBlcmNhc2UgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuICh2YWx1ZSB8fCB2YWx1ZSA9PT0gMClcbiAgICA/IHZhbHVlLnRvU3RyaW5nKCkudG9VcHBlckNhc2UoKVxuICAgIDogJydcbn1cblxuLyoqXG4gKiAnQWJDJyA9PiAnYWJjJ1xuICovXG5cbmV4cG9ydHMubG93ZXJjYXNlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiAodmFsdWUgfHwgdmFsdWUgPT09IDApXG4gICAgPyB2YWx1ZS50b1N0cmluZygpLnRvTG93ZXJDYXNlKClcbiAgICA6ICcnXG59XG5cbi8qKlxuICogMTIzNDUgPT4gJDEyLDM0NS4wMFxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzaWduXG4gKi9cblxudmFyIGRpZ2l0c1JFID0gLyhcXGR7M30pKD89XFxkKS9nXG5leHBvcnRzLmN1cnJlbmN5ID0gZnVuY3Rpb24gKHZhbHVlLCBjdXJyZW5jeSkge1xuICB2YWx1ZSA9IHBhcnNlRmxvYXQodmFsdWUpXG4gIGlmICghaXNGaW5pdGUodmFsdWUpIHx8ICghdmFsdWUgJiYgdmFsdWUgIT09IDApKSByZXR1cm4gJydcbiAgY3VycmVuY3kgPSBjdXJyZW5jeSAhPSBudWxsID8gY3VycmVuY3kgOiAnJCdcbiAgdmFyIHN0cmluZ2lmaWVkID0gTWF0aC5hYnModmFsdWUpLnRvRml4ZWQoMilcbiAgdmFyIF9pbnQgPSBzdHJpbmdpZmllZC5zbGljZSgwLCAtMylcbiAgdmFyIGkgPSBfaW50Lmxlbmd0aCAlIDNcbiAgdmFyIGhlYWQgPSBpID4gMFxuICAgID8gKF9pbnQuc2xpY2UoMCwgaSkgKyAoX2ludC5sZW5ndGggPiAzID8gJywnIDogJycpKVxuICAgIDogJydcbiAgdmFyIF9mbG9hdCA9IHN0cmluZ2lmaWVkLnNsaWNlKC0zKVxuICB2YXIgc2lnbiA9IHZhbHVlIDwgMCA/ICctJyA6ICcnXG4gIHJldHVybiBjdXJyZW5jeSArIHNpZ24gKyBoZWFkICtcbiAgICBfaW50LnNsaWNlKGkpLnJlcGxhY2UoZGlnaXRzUkUsICckMSwnKSArXG4gICAgX2Zsb2F0XG59XG5cbi8qKlxuICogJ2l0ZW0nID0+ICdpdGVtcydcbiAqXG4gKiBAcGFyYW1zXG4gKiAgYW4gYXJyYXkgb2Ygc3RyaW5ncyBjb3JyZXNwb25kaW5nIHRvXG4gKiAgdGhlIHNpbmdsZSwgZG91YmxlLCB0cmlwbGUgLi4uIGZvcm1zIG9mIHRoZSB3b3JkIHRvXG4gKiAgYmUgcGx1cmFsaXplZC4gV2hlbiB0aGUgbnVtYmVyIHRvIGJlIHBsdXJhbGl6ZWRcbiAqICBleGNlZWRzIHRoZSBsZW5ndGggb2YgdGhlIGFyZ3MsIGl0IHdpbGwgdXNlIHRoZSBsYXN0XG4gKiAgZW50cnkgaW4gdGhlIGFycmF5LlxuICpcbiAqICBlLmcuIFsnc2luZ2xlJywgJ2RvdWJsZScsICd0cmlwbGUnLCAnbXVsdGlwbGUnXVxuICovXG5cbmV4cG9ydHMucGx1cmFsaXplID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHZhciBhcmdzID0gXy50b0FycmF5KGFyZ3VtZW50cywgMSlcbiAgcmV0dXJuIGFyZ3MubGVuZ3RoID4gMVxuICAgID8gKGFyZ3NbdmFsdWUgJSAxMCAtIDFdIHx8IGFyZ3NbYXJncy5sZW5ndGggLSAxXSlcbiAgICA6IChhcmdzWzBdICsgKHZhbHVlID09PSAxID8gJycgOiAncycpKVxufVxuXG4vKipcbiAqIERlYm91bmNlIGEgaGFuZGxlciBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBoYW5kbGVyXG4gKiBAcGFyYW0ge051bWJlcn0gZGVsYXkgPSAzMDBcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICovXG5cbmV4cG9ydHMuZGVib3VuY2UgPSBmdW5jdGlvbiAoaGFuZGxlciwgZGVsYXkpIHtcbiAgaWYgKCFoYW5kbGVyKSByZXR1cm5cbiAgaWYgKCFkZWxheSkge1xuICAgIGRlbGF5ID0gMzAwXG4gIH1cbiAgcmV0dXJuIF8uZGVib3VuY2UoaGFuZGxlciwgZGVsYXkpXG59XG5cbi8qKlxuICogSW5zdGFsbCBzcGVjaWFsIGFycmF5IGZpbHRlcnNcbiAqL1xuXG5fLmV4dGVuZChleHBvcnRzLCByZXF1aXJlKCcuL2FycmF5LWZpbHRlcnMnKSlcbiIsInZhciBfID0gcmVxdWlyZSgnLi4vdXRpbCcpXG52YXIgY29tcGlsZXIgPSByZXF1aXJlKCcuLi9jb21waWxlcicpXG52YXIgdGVtcGxhdGVQYXJzZXIgPSByZXF1aXJlKCcuLi9wYXJzZXJzL3RlbXBsYXRlJylcbnZhciBGcmFnbWVudCA9IHJlcXVpcmUoJy4vZnJhZ21lbnQnKVxudmFyIENhY2hlID0gcmVxdWlyZSgnLi4vY2FjaGUnKVxudmFyIGxpbmtlckNhY2hlID0gbmV3IENhY2hlKDUwMDApXG5cbi8qKlxuICogQSBmYWN0b3J5IHRoYXQgY2FuIGJlIHVzZWQgdG8gY3JlYXRlIGluc3RhbmNlcyBvZiBhXG4gKiBmcmFnbWVudC4gQ2FjaGVzIHRoZSBjb21waWxlZCBsaW5rZXIgaWYgcG9zc2libGUuXG4gKlxuICogQHBhcmFtIHtWdWV9IHZtXG4gKiBAcGFyYW0ge0VsZW1lbnR8U3RyaW5nfSBlbFxuICovXG5cbmZ1bmN0aW9uIEZyYWdtZW50RmFjdG9yeSAodm0sIGVsKSB7XG4gIHRoaXMudm0gPSB2bVxuICB2YXIgdGVtcGxhdGVcbiAgdmFyIGlzU3RyaW5nID0gdHlwZW9mIGVsID09PSAnc3RyaW5nJ1xuICBpZiAoaXNTdHJpbmcgfHwgXy5pc1RlbXBsYXRlKGVsKSkge1xuICAgIHRlbXBsYXRlID0gdGVtcGxhdGVQYXJzZXIucGFyc2UoZWwsIHRydWUpXG4gIH0gZWxzZSB7XG4gICAgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KClcbiAgICB0ZW1wbGF0ZS5hcHBlbmRDaGlsZChlbClcbiAgfVxuICB0aGlzLnRlbXBsYXRlID0gdGVtcGxhdGVcbiAgLy8gbGlua2VyIGNhbiBiZSBjYWNoZWQsIGJ1dCBvbmx5IGZvciBjb21wb25lbnRzXG4gIHZhciBsaW5rZXJcbiAgdmFyIGNpZCA9IHZtLmNvbnN0cnVjdG9yLmNpZFxuICBpZiAoY2lkID4gMCkge1xuICAgIHZhciBjYWNoZUlkID0gY2lkICsgKGlzU3RyaW5nID8gZWwgOiBlbC5vdXRlckhUTUwpXG4gICAgbGlua2VyID0gbGlua2VyQ2FjaGUuZ2V0KGNhY2hlSWQpXG4gICAgaWYgKCFsaW5rZXIpIHtcbiAgICAgIGxpbmtlciA9IGNvbXBpbGVyLmNvbXBpbGUodGVtcGxhdGUsIHZtLiRvcHRpb25zLCB0cnVlKVxuICAgICAgbGlua2VyQ2FjaGUucHV0KGNhY2hlSWQsIGxpbmtlcilcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgbGlua2VyID0gY29tcGlsZXIuY29tcGlsZSh0ZW1wbGF0ZSwgdm0uJG9wdGlvbnMsIHRydWUpXG4gIH1cbiAgdGhpcy5saW5rZXIgPSBsaW5rZXJcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBmcmFnbWVudCBpbnN0YW5jZSB3aXRoIGdpdmVuIGhvc3QgYW5kIHNjb3BlLlxuICpcbiAqIEBwYXJhbSB7VnVlfSBob3N0XG4gKiBAcGFyYW0ge09iamVjdH0gc2NvcGVcbiAqIEBwYXJhbSB7RnJhZ21lbnR9IHBhcmVudEZyYWdcbiAqL1xuXG5GcmFnbWVudEZhY3RvcnkucHJvdG90eXBlLmNyZWF0ZSA9IGZ1bmN0aW9uIChob3N0LCBzY29wZSwgcGFyZW50RnJhZykge1xuICB2YXIgZnJhZyA9IHRlbXBsYXRlUGFyc2VyLmNsb25lKHRoaXMudGVtcGxhdGUpXG4gIHJldHVybiBuZXcgRnJhZ21lbnQodGhpcy5saW5rZXIsIHRoaXMudm0sIGZyYWcsIGhvc3QsIHNjb3BlLCBwYXJlbnRGcmFnKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEZyYWdtZW50RmFjdG9yeVxuIiwidmFyIF8gPSByZXF1aXJlKCcuLi91dGlsJylcbnZhciB0cmFuc2l0aW9uID0gcmVxdWlyZSgnLi4vdHJhbnNpdGlvbicpXG5cbi8qKlxuICogQWJzdHJhY3Rpb24gZm9yIGEgcGFydGlhbGx5LWNvbXBpbGVkIGZyYWdtZW50LlxuICogQ2FuIG9wdGlvbmFsbHkgY29tcGlsZSBjb250ZW50IHdpdGggYSBjaGlsZCBzY29wZS5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaW5rZXJcbiAqIEBwYXJhbSB7VnVlfSB2bVxuICogQHBhcmFtIHtEb2N1bWVudEZyYWdtZW50fSBmcmFnXG4gKiBAcGFyYW0ge1Z1ZX0gW2hvc3RdXG4gKiBAcGFyYW0ge09iamVjdH0gW3Njb3BlXVxuICovXG5cbmZ1bmN0aW9uIEZyYWdtZW50IChsaW5rZXIsIHZtLCBmcmFnLCBob3N0LCBzY29wZSwgcGFyZW50RnJhZykge1xuICB0aGlzLmNoaWxkcmVuID0gW11cbiAgdGhpcy5jaGlsZEZyYWdzID0gW11cbiAgdGhpcy52bSA9IHZtXG4gIHRoaXMuc2NvcGUgPSBzY29wZVxuICB0aGlzLmluc2VydGVkID0gZmFsc2VcbiAgdGhpcy5wYXJlbnRGcmFnID0gcGFyZW50RnJhZ1xuICBpZiAocGFyZW50RnJhZykge1xuICAgIHBhcmVudEZyYWcuY2hpbGRGcmFncy5wdXNoKHRoaXMpXG4gIH1cbiAgdGhpcy51bmxpbmsgPSBsaW5rZXIodm0sIGZyYWcsIGhvc3QsIHNjb3BlLCB0aGlzKVxuICB2YXIgc2luZ2xlID0gdGhpcy5zaW5nbGUgPSBmcmFnLmNoaWxkTm9kZXMubGVuZ3RoID09PSAxXG4gIGlmIChzaW5nbGUpIHtcbiAgICB0aGlzLm5vZGUgPSBmcmFnLmNoaWxkTm9kZXNbMF1cbiAgICB0aGlzLmJlZm9yZSA9IHNpbmdsZUJlZm9yZVxuICAgIHRoaXMucmVtb3ZlID0gc2luZ2xlUmVtb3ZlXG4gIH0gZWxzZSB7XG4gICAgdGhpcy5ub2RlID0gXy5jcmVhdGVBbmNob3IoJ2ZyYWdtZW50LXN0YXJ0JylcbiAgICB0aGlzLmVuZCA9IF8uY3JlYXRlQW5jaG9yKCdmcmFnbWVudC1lbmQnKVxuICAgIHRoaXMuZnJhZyA9IGZyYWdcbiAgICBfLnByZXBlbmQodGhpcy5ub2RlLCBmcmFnKVxuICAgIGZyYWcuYXBwZW5kQ2hpbGQodGhpcy5lbmQpXG4gICAgdGhpcy5iZWZvcmUgPSBtdWx0aUJlZm9yZVxuICAgIHRoaXMucmVtb3ZlID0gbXVsdGlSZW1vdmVcbiAgfVxuICB0aGlzLm5vZGUuX192ZnJhZ19fID0gdGhpc1xufVxuXG4vKipcbiAqIENhbGwgYXR0YWNoL2RldGFjaCBmb3IgYWxsIGNvbXBvbmVudHMgY29udGFpbmVkIHdpdGhpblxuICogdGhpcyBmcmFnbWVudC4gQWxzbyBkbyBzbyByZWN1cnNpdmVseSBmb3IgYWxsIGNoaWxkXG4gKiBmcmFnbWVudHMuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaG9va1xuICovXG5cbkZyYWdtZW50LnByb3RvdHlwZS5jYWxsSG9vayA9IGZ1bmN0aW9uIChob29rKSB7XG4gIHZhciBpLCBsXG4gIGZvciAoaSA9IDAsIGwgPSB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGhvb2sodGhpcy5jaGlsZHJlbltpXSlcbiAgfVxuICBmb3IgKGkgPSAwLCBsID0gdGhpcy5jaGlsZEZyYWdzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIHRoaXMuY2hpbGRGcmFnc1tpXS5jYWxsSG9vayhob29rKVxuICB9XG59XG5cbi8qKlxuICogRGVzdHJveSB0aGUgZnJhZ21lbnQuXG4gKi9cblxuRnJhZ21lbnQucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLnBhcmVudEZyYWcpIHtcbiAgICB0aGlzLnBhcmVudEZyYWcuY2hpbGRGcmFncy4kcmVtb3ZlKHRoaXMpXG4gIH1cbiAgdGhpcy51bmxpbmsoKVxufVxuXG4vKipcbiAqIEluc2VydCBmcmFnbWVudCBiZWZvcmUgdGFyZ2V0LCBzaW5nbGUgbm9kZSB2ZXJzaW9uXG4gKlxuICogQHBhcmFtIHtOb2RlfSB0YXJnZXRcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gd2l0aFRyYW5zaXRpb25cbiAqL1xuXG5mdW5jdGlvbiBzaW5nbGVCZWZvcmUgKHRhcmdldCwgd2l0aFRyYW5zaXRpb24pIHtcbiAgdGhpcy5pbnNlcnRlZCA9IHRydWVcbiAgdmFyIG1ldGhvZCA9IHdpdGhUcmFuc2l0aW9uICE9PSBmYWxzZVxuICAgID8gdHJhbnNpdGlvbi5iZWZvcmVcbiAgICA6IF8uYmVmb3JlXG4gIG1ldGhvZCh0aGlzLm5vZGUsIHRhcmdldCwgdGhpcy52bSlcbiAgaWYgKF8uaW5Eb2ModGhpcy5ub2RlKSkge1xuICAgIHRoaXMuY2FsbEhvb2soYXR0YWNoKVxuICB9XG59XG5cbi8qKlxuICogUmVtb3ZlIGZyYWdtZW50LCBzaW5nbGUgbm9kZSB2ZXJzaW9uXG4gKi9cblxuZnVuY3Rpb24gc2luZ2xlUmVtb3ZlICgpIHtcbiAgdGhpcy5pbnNlcnRlZCA9IGZhbHNlXG4gIHZhciBzaG91bGRDYWxsUmVtb3ZlID0gXy5pbkRvYyh0aGlzLm5vZGUpXG4gIHZhciBzZWxmID0gdGhpc1xuICBzZWxmLmNhbGxIb29rKGRlc3Ryb3lDaGlsZClcbiAgdHJhbnNpdGlvbi5yZW1vdmUodGhpcy5ub2RlLCB0aGlzLnZtLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHNob3VsZENhbGxSZW1vdmUpIHtcbiAgICAgIHNlbGYuY2FsbEhvb2soZGV0YWNoKVxuICAgIH1cbiAgICBzZWxmLmRlc3Ryb3koKVxuICB9KVxufVxuXG4vKipcbiAqIEluc2VydCBmcmFnbWVudCBiZWZvcmUgdGFyZ2V0LCBtdWx0aS1ub2RlcyB2ZXJzaW9uXG4gKlxuICogQHBhcmFtIHtOb2RlfSB0YXJnZXRcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gd2l0aFRyYW5zaXRpb25cbiAqL1xuXG5mdW5jdGlvbiBtdWx0aUJlZm9yZSAodGFyZ2V0LCB3aXRoVHJhbnNpdGlvbikge1xuICB0aGlzLmluc2VydGVkID0gdHJ1ZVxuICB2YXIgdm0gPSB0aGlzLnZtXG4gIHZhciBtZXRob2QgPSB3aXRoVHJhbnNpdGlvbiAhPT0gZmFsc2VcbiAgICA/IHRyYW5zaXRpb24uYmVmb3JlXG4gICAgOiBfLmJlZm9yZVxuICBfLm1hcE5vZGVSYW5nZSh0aGlzLm5vZGUsIHRoaXMuZW5kLCBmdW5jdGlvbiAobm9kZSkge1xuICAgIG1ldGhvZChub2RlLCB0YXJnZXQsIHZtKVxuICB9KVxuICBpZiAoXy5pbkRvYyh0aGlzLm5vZGUpKSB7XG4gICAgdGhpcy5jYWxsSG9vayhhdHRhY2gpXG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmUgZnJhZ21lbnQsIG11bHRpLW5vZGVzIHZlcnNpb25cbiAqL1xuXG5mdW5jdGlvbiBtdWx0aVJlbW92ZSAoKSB7XG4gIHRoaXMuaW5zZXJ0ZWQgPSBmYWxzZVxuICB2YXIgc2VsZiA9IHRoaXNcbiAgdmFyIHNob3VsZENhbGxSZW1vdmUgPSBfLmluRG9jKHRoaXMubm9kZSlcbiAgc2VsZi5jYWxsSG9vayhkZXN0cm95Q2hpbGQpXG4gIF8ucmVtb3ZlTm9kZVJhbmdlKHRoaXMubm9kZSwgdGhpcy5lbmQsIHRoaXMudm0sIHRoaXMuZnJhZywgZnVuY3Rpb24gKCkge1xuICAgIGlmIChzaG91bGRDYWxsUmVtb3ZlKSB7XG4gICAgICBzZWxmLmNhbGxIb29rKGRldGFjaClcbiAgICB9XG4gICAgc2VsZi5kZXN0cm95KClcbiAgfSlcbn1cblxuLyoqXG4gKiBDYWxsIGF0dGFjaCBob29rIGZvciBhIFZ1ZSBpbnN0YW5jZS5cbiAqXG4gKiBAcGFyYW0ge1Z1ZX0gY2hpbGRcbiAqL1xuXG5mdW5jdGlvbiBhdHRhY2ggKGNoaWxkKSB7XG4gIGlmICghY2hpbGQuX2lzQXR0YWNoZWQpIHtcbiAgICBjaGlsZC5fY2FsbEhvb2soJ2F0dGFjaGVkJylcbiAgfVxufVxuXG4vKipcbiAqIENhbGwgZGVzdHJveSBmb3IgYWxsIGNvbnRhaW5lZCBpbnN0YW5jZXMsXG4gKiB3aXRoIHJlbW92ZTpmYWxzZSBhbmQgZGVmZXI6dHJ1ZS5cbiAqIERlZmVyIGlzIG5lY2Vzc2FyeSBiZWNhdXNlIHdlIG5lZWQgdG9cbiAqIGtlZXAgdGhlIGNoaWxkcmVuIHRvIGNhbGwgZGV0YWNoIGhvb2tzXG4gKiBvbiB0aGVtLlxuICpcbiAqIEBwYXJhbSB7VnVlfSBjaGlsZFxuICovXG5cbmZ1bmN0aW9uIGRlc3Ryb3lDaGlsZCAoY2hpbGQpIHtcbiAgY2hpbGQuJGRlc3Ryb3koZmFsc2UsIHRydWUpXG59XG5cbi8qKlxuICogQ2FsbCBkZXRhY2ggaG9vayBmb3IgYSBWdWUgaW5zdGFuY2UuXG4gKlxuICogQHBhcmFtIHtWdWV9IGNoaWxkXG4gKi9cblxuZnVuY3Rpb24gZGV0YWNoIChjaGlsZCkge1xuICBpZiAoY2hpbGQuX2lzQXR0YWNoZWQpIHtcbiAgICBjaGlsZC5fY2FsbEhvb2soJ2RldGFjaGVkJylcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEZyYWdtZW50XG4iLCJ2YXIgXyA9IHJlcXVpcmUoJy4uL3V0aWwnKVxudmFyIGluRG9jID0gXy5pbkRvY1xudmFyIGV2ZW50UkUgPSAvXnYtb246fF5AL1xuXG4vKipcbiAqIFNldHVwIHRoZSBpbnN0YW5jZSdzIG9wdGlvbiBldmVudHMgJiB3YXRjaGVycy5cbiAqIElmIHRoZSB2YWx1ZSBpcyBhIHN0cmluZywgd2UgcHVsbCBpdCBmcm9tIHRoZVxuICogaW5zdGFuY2UncyBtZXRob2RzIGJ5IG5hbWUuXG4gKi9cblxuZXhwb3J0cy5faW5pdEV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIG9wdGlvbnMgPSB0aGlzLiRvcHRpb25zXG4gIGlmIChvcHRpb25zLl9hc0NvbXBvbmVudCkge1xuICAgIHJlZ2lzdGVyQ29tcG9uZW50RXZlbnRzKHRoaXMsIG9wdGlvbnMuZWwpXG4gIH1cbiAgcmVnaXN0ZXJDYWxsYmFja3ModGhpcywgJyRvbicsIG9wdGlvbnMuZXZlbnRzKVxuICByZWdpc3RlckNhbGxiYWNrcyh0aGlzLCAnJHdhdGNoJywgb3B0aW9ucy53YXRjaClcbn1cblxuLyoqXG4gKiBSZWdpc3RlciB2LW9uIGV2ZW50cyBvbiBhIGNoaWxkIGNvbXBvbmVudFxuICpcbiAqIEBwYXJhbSB7VnVlfSB2bVxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICovXG5cbmZ1bmN0aW9uIHJlZ2lzdGVyQ29tcG9uZW50RXZlbnRzICh2bSwgZWwpIHtcbiAgdmFyIGF0dHJzID0gZWwuYXR0cmlidXRlc1xuICB2YXIgbmFtZSwgaGFuZGxlclxuICBmb3IgKHZhciBpID0gMCwgbCA9IGF0dHJzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIG5hbWUgPSBhdHRyc1tpXS5uYW1lXG4gICAgaWYgKGV2ZW50UkUudGVzdChuYW1lKSkge1xuICAgICAgbmFtZSA9IG5hbWUucmVwbGFjZShldmVudFJFLCAnJylcbiAgICAgIGhhbmRsZXIgPSAodm0uX3Njb3BlIHx8IHZtLl9jb250ZXh0KS4kZXZhbChhdHRyc1tpXS52YWx1ZSwgdHJ1ZSlcbiAgICAgIHZtLiRvbihuYW1lLnJlcGxhY2UoZXZlbnRSRSksIGhhbmRsZXIpXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogUmVnaXN0ZXIgY2FsbGJhY2tzIGZvciBvcHRpb24gZXZlbnRzIGFuZCB3YXRjaGVycy5cbiAqXG4gKiBAcGFyYW0ge1Z1ZX0gdm1cbiAqIEBwYXJhbSB7U3RyaW5nfSBhY3Rpb25cbiAqIEBwYXJhbSB7T2JqZWN0fSBoYXNoXG4gKi9cblxuZnVuY3Rpb24gcmVnaXN0ZXJDYWxsYmFja3MgKHZtLCBhY3Rpb24sIGhhc2gpIHtcbiAgaWYgKCFoYXNoKSByZXR1cm5cbiAgdmFyIGhhbmRsZXJzLCBrZXksIGksIGpcbiAgZm9yIChrZXkgaW4gaGFzaCkge1xuICAgIGhhbmRsZXJzID0gaGFzaFtrZXldXG4gICAgaWYgKF8uaXNBcnJheShoYW5kbGVycykpIHtcbiAgICAgIGZvciAoaSA9IDAsIGogPSBoYW5kbGVycy5sZW5ndGg7IGkgPCBqOyBpKyspIHtcbiAgICAgICAgcmVnaXN0ZXIodm0sIGFjdGlvbiwga2V5LCBoYW5kbGVyc1tpXSlcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmVnaXN0ZXIodm0sIGFjdGlvbiwga2V5LCBoYW5kbGVycylcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBIZWxwZXIgdG8gcmVnaXN0ZXIgYW4gZXZlbnQvd2F0Y2ggY2FsbGJhY2suXG4gKlxuICogQHBhcmFtIHtWdWV9IHZtXG4gKiBAcGFyYW0ge1N0cmluZ30gYWN0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufFN0cmluZ3xPYmplY3R9IGhhbmRsZXJcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqL1xuXG5mdW5jdGlvbiByZWdpc3RlciAodm0sIGFjdGlvbiwga2V5LCBoYW5kbGVyLCBvcHRpb25zKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIGhhbmRsZXJcbiAgaWYgKHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2bVthY3Rpb25dKGtleSwgaGFuZGxlciwgb3B0aW9ucylcbiAgfSBlbHNlIGlmICh0eXBlID09PSAnc3RyaW5nJykge1xuICAgIHZhciBtZXRob2RzID0gdm0uJG9wdGlvbnMubWV0aG9kc1xuICAgIHZhciBtZXRob2QgPSBtZXRob2RzICYmIG1ldGhvZHNbaGFuZGxlcl1cbiAgICBpZiAobWV0aG9kKSB7XG4gICAgICB2bVthY3Rpb25dKGtleSwgbWV0aG9kLCBvcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIF8ud2FybihcbiAgICAgICAgJ1Vua25vd24gbWV0aG9kOiBcIicgKyBoYW5kbGVyICsgJ1wiIHdoZW4gJyArXG4gICAgICAgICdyZWdpc3RlcmluZyBjYWxsYmFjayBmb3IgJyArIGFjdGlvbiArXG4gICAgICAgICc6IFwiJyArIGtleSArICdcIi4nXG4gICAgICApXG4gICAgfVxuICB9IGVsc2UgaWYgKGhhbmRsZXIgJiYgdHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICByZWdpc3Rlcih2bSwgYWN0aW9uLCBrZXksIGhhbmRsZXIuaGFuZGxlciwgaGFuZGxlcilcbiAgfVxufVxuXG4vKipcbiAqIFNldHVwIHJlY3Vyc2l2ZSBhdHRhY2hlZC9kZXRhY2hlZCBjYWxsc1xuICovXG5cbmV4cG9ydHMuX2luaXRET01Ib29rcyA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy4kb24oJ2hvb2s6YXR0YWNoZWQnLCBvbkF0dGFjaGVkKVxuICB0aGlzLiRvbignaG9vazpkZXRhY2hlZCcsIG9uRGV0YWNoZWQpXG59XG5cbi8qKlxuICogQ2FsbGJhY2sgdG8gcmVjdXJzaXZlbHkgY2FsbCBhdHRhY2hlZCBob29rIG9uIGNoaWxkcmVuXG4gKi9cblxuZnVuY3Rpb24gb25BdHRhY2hlZCAoKSB7XG4gIGlmICghdGhpcy5faXNBdHRhY2hlZCkge1xuICAgIHRoaXMuX2lzQXR0YWNoZWQgPSB0cnVlXG4gICAgdGhpcy4kY2hpbGRyZW4uZm9yRWFjaChjYWxsQXR0YWNoKVxuICB9XG59XG5cbi8qKlxuICogSXRlcmF0b3IgdG8gY2FsbCBhdHRhY2hlZCBob29rXG4gKlxuICogQHBhcmFtIHtWdWV9IGNoaWxkXG4gKi9cblxuZnVuY3Rpb24gY2FsbEF0dGFjaCAoY2hpbGQpIHtcbiAgaWYgKCFjaGlsZC5faXNBdHRhY2hlZCAmJiBpbkRvYyhjaGlsZC4kZWwpKSB7XG4gICAgY2hpbGQuX2NhbGxIb29rKCdhdHRhY2hlZCcpXG4gIH1cbn1cblxuLyoqXG4gKiBDYWxsYmFjayB0byByZWN1cnNpdmVseSBjYWxsIGRldGFjaGVkIGhvb2sgb24gY2hpbGRyZW5cbiAqL1xuXG5mdW5jdGlvbiBvbkRldGFjaGVkICgpIHtcbiAgaWYgKHRoaXMuX2lzQXR0YWNoZWQpIHtcbiAgICB0aGlzLl9pc0F0dGFjaGVkID0gZmFsc2VcbiAgICB0aGlzLiRjaGlsZHJlbi5mb3JFYWNoKGNhbGxEZXRhY2gpXG4gIH1cbn1cblxuLyoqXG4gKiBJdGVyYXRvciB0byBjYWxsIGRldGFjaGVkIGhvb2tcbiAqXG4gKiBAcGFyYW0ge1Z1ZX0gY2hpbGRcbiAqL1xuXG5mdW5jdGlvbiBjYWxsRGV0YWNoIChjaGlsZCkge1xuICBpZiAoY2hpbGQuX2lzQXR0YWNoZWQgJiYgIWluRG9jKGNoaWxkLiRlbCkpIHtcbiAgICBjaGlsZC5fY2FsbEhvb2soJ2RldGFjaGVkJylcbiAgfVxufVxuXG4vKipcbiAqIFRyaWdnZXIgYWxsIGhhbmRsZXJzIGZvciBhIGhvb2tcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gaG9va1xuICovXG5cbmV4cG9ydHMuX2NhbGxIb29rID0gZnVuY3Rpb24gKGhvb2spIHtcbiAgdmFyIGhhbmRsZXJzID0gdGhpcy4kb3B0aW9uc1tob29rXVxuICBpZiAoaGFuZGxlcnMpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgaiA9IGhhbmRsZXJzLmxlbmd0aDsgaSA8IGo7IGkrKykge1xuICAgICAgaGFuZGxlcnNbaV0uY2FsbCh0aGlzKVxuICAgIH1cbiAgfVxuICB0aGlzLiRlbWl0KCdob29rOicgKyBob29rKVxufVxuIiwidmFyIG1lcmdlT3B0aW9ucyA9IHJlcXVpcmUoJy4uL3V0aWwnKS5tZXJnZU9wdGlvbnNcbnZhciB1aWQgPSAwXG5cbi8qKlxuICogVGhlIG1haW4gaW5pdCBzZXF1ZW5jZS4gVGhpcyBpcyBjYWxsZWQgZm9yIGV2ZXJ5XG4gKiBpbnN0YW5jZSwgaW5jbHVkaW5nIG9uZXMgdGhhdCBhcmUgY3JlYXRlZCBmcm9tIGV4dGVuZGVkXG4gKiBjb25zdHJ1Y3RvcnMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSB0aGlzIG9wdGlvbnMgb2JqZWN0IHNob3VsZCBiZVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICB0aGUgcmVzdWx0IG9mIG1lcmdpbmcgY2xhc3NcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucyBhbmQgdGhlIG9wdGlvbnMgcGFzc2VkXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgIGluIHRvIHRoZSBjb25zdHJ1Y3Rvci5cbiAqL1xuXG5leHBvcnRzLl9pbml0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fVxuXG4gIHRoaXMuJGVsID0gbnVsbFxuICB0aGlzLiRwYXJlbnQgPSBvcHRpb25zLnBhcmVudFxuICB0aGlzLiRyb290ID0gdGhpcy4kcGFyZW50XG4gICAgPyB0aGlzLiRwYXJlbnQuJHJvb3RcbiAgICA6IHRoaXNcbiAgdGhpcy4kY2hpbGRyZW4gPSBbXVxuICB0aGlzLiRyZWZzID0ge30gICAgICAgLy8gY2hpbGQgdm0gcmVmZXJlbmNlc1xuICB0aGlzLiRlbHMgPSB7fSAgICAgICAgLy8gZWxlbWVudCByZWZlcmVuY2VzXG4gIHRoaXMuX3dhdGNoZXJzID0gW10gICAvLyBhbGwgd2F0Y2hlcnMgYXMgYW4gYXJyYXlcbiAgdGhpcy5fZGlyZWN0aXZlcyA9IFtdIC8vIGFsbCBkaXJlY3RpdmVzXG5cbiAgLy8gYSB1aWRcbiAgdGhpcy5fdWlkID0gdWlkKytcblxuICAvLyBhIGZsYWcgdG8gYXZvaWQgdGhpcyBiZWluZyBvYnNlcnZlZFxuICB0aGlzLl9pc1Z1ZSA9IHRydWVcblxuICAvLyBldmVudHMgYm9va2tlZXBpbmdcbiAgdGhpcy5fZXZlbnRzID0ge30gICAgICAgICAgICAvLyByZWdpc3RlcmVkIGNhbGxiYWNrc1xuICB0aGlzLl9ldmVudHNDb3VudCA9IHt9ICAgICAgIC8vIGZvciAkYnJvYWRjYXN0IG9wdGltaXphdGlvblxuICB0aGlzLl9zaG91bGRQcm9wYWdhdGUgPSBmYWxzZSAvLyBmb3IgZXZlbnQgcHJvcGFnYXRpb25cblxuICAvLyBmcmFnbWVudCBpbnN0YW5jZSBwcm9wZXJ0aWVzXG4gIHRoaXMuX2lzRnJhZ21lbnQgPSBmYWxzZVxuICB0aGlzLl9mcmFnbWVudCA9ICAgICAgICAgLy8gQHR5cGUge0RvY3VtZW50RnJhZ21lbnR9XG4gIHRoaXMuX2ZyYWdtZW50U3RhcnQgPSAgICAvLyBAdHlwZSB7VGV4dHxDb21tZW50fVxuICB0aGlzLl9mcmFnbWVudEVuZCA9IG51bGwgLy8gQHR5cGUge1RleHR8Q29tbWVudH1cblxuICAvLyBsaWZlY3ljbGUgc3RhdGVcbiAgdGhpcy5faXNDb21waWxlZCA9XG4gIHRoaXMuX2lzRGVzdHJveWVkID1cbiAgdGhpcy5faXNSZWFkeSA9XG4gIHRoaXMuX2lzQXR0YWNoZWQgPVxuICB0aGlzLl9pc0JlaW5nRGVzdHJveWVkID0gZmFsc2VcbiAgdGhpcy5fdW5saW5rRm4gPSBudWxsXG5cbiAgLy8gY29udGV4dDpcbiAgLy8gaWYgdGhpcyBpcyBhIHRyYW5zY2x1ZGVkIGNvbXBvbmVudCwgY29udGV4dFxuICAvLyB3aWxsIGJlIHRoZSBjb21tb24gcGFyZW50IHZtIG9mIHRoaXMgaW5zdGFuY2VcbiAgLy8gYW5kIGl0cyBob3N0LlxuICB0aGlzLl9jb250ZXh0ID0gb3B0aW9ucy5fY29udGV4dCB8fCB0aGlzLiRwYXJlbnRcblxuICAvLyBzY29wZTpcbiAgLy8gaWYgdGhpcyBpcyBpbnNpZGUgYW4gaW5saW5lIHYtZm9yLCB0aGUgc2NvcGVcbiAgLy8gd2lsbCBiZSB0aGUgaW50ZXJtZWRpYXRlIHNjb3BlIGNyZWF0ZWQgZm9yIHRoaXNcbiAgLy8gcmVwZWF0IGZyYWdtZW50LiB0aGlzIGlzIHVzZWQgZm9yIGxpbmtpbmcgcHJvcHNcbiAgLy8gYW5kIGNvbnRhaW5lciBkaXJlY3RpdmVzLlxuICB0aGlzLl9zY29wZSA9IG9wdGlvbnMuX3Njb3BlXG5cbiAgLy8gZnJhZ21lbnQ6XG4gIC8vIGlmIHRoaXMgaW5zdGFuY2UgaXMgY29tcGlsZWQgaW5zaWRlIGEgRnJhZ21lbnQsIGl0XG4gIC8vIG5lZWRzIHRvIHJlaWdzdGVyIGl0c2VsZiBhcyBhIGNoaWxkIG9mIHRoYXQgZnJhZ21lbnRcbiAgLy8gZm9yIGF0dGFjaC9kZXRhY2ggdG8gd29yayBwcm9wZXJseS5cbiAgdGhpcy5fZnJhZyA9IG9wdGlvbnMuX2ZyYWdcbiAgaWYgKHRoaXMuX2ZyYWcpIHtcbiAgICB0aGlzLl9mcmFnLmNoaWxkcmVuLnB1c2godGhpcylcbiAgfVxuXG4gIC8vIHB1c2ggc2VsZiBpbnRvIHBhcmVudCAvIHRyYW5zY2x1c2lvbiBob3N0XG4gIGlmICh0aGlzLiRwYXJlbnQpIHtcbiAgICB0aGlzLiRwYXJlbnQuJGNoaWxkcmVuLnB1c2godGhpcylcbiAgfVxuXG4gIC8vIG1lcmdlIG9wdGlvbnMuXG4gIG9wdGlvbnMgPSB0aGlzLiRvcHRpb25zID0gbWVyZ2VPcHRpb25zKFxuICAgIHRoaXMuY29uc3RydWN0b3Iub3B0aW9ucyxcbiAgICBvcHRpb25zLFxuICAgIHRoaXNcbiAgKVxuXG4gIC8vIHNldCByZWZcbiAgdGhpcy5fdXBkYXRlUmVmKClcblxuICAvLyBpbml0aWFsaXplIGRhdGEgYXMgZW1wdHkgb2JqZWN0LlxuICAvLyBpdCB3aWxsIGJlIGZpbGxlZCB1cCBpbiBfaW5pdFNjb3BlKCkuXG4gIHRoaXMuX2RhdGEgPSB7fVxuXG4gIC8vIGNhbGwgaW5pdCBob29rXG4gIHRoaXMuX2NhbGxIb29rKCdpbml0JylcblxuICAvLyBpbml0aWFsaXplIGRhdGEgb2JzZXJ2YXRpb24gYW5kIHNjb3BlIGluaGVyaXRhbmNlLlxuICB0aGlzLl9pbml0U3RhdGUoKVxuXG4gIC8vIHNldHVwIGV2ZW50IHN5c3RlbSBhbmQgb3B0aW9uIGV2ZW50cy5cbiAgdGhpcy5faW5pdEV2ZW50cygpXG5cbiAgLy8gY2FsbCBjcmVhdGVkIGhvb2tcbiAgdGhpcy5fY2FsbEhvb2soJ2NyZWF0ZWQnKVxuXG4gIC8vIGlmIGBlbGAgb3B0aW9uIGlzIHBhc3NlZCwgc3RhcnQgY29tcGlsYXRpb24uXG4gIGlmIChvcHRpb25zLmVsKSB7XG4gICAgdGhpcy4kbW91bnQob3B0aW9ucy5lbClcbiAgfVxufVxuIiwidmFyIF8gPSByZXF1aXJlKCcuLi91dGlsJylcbnZhciBEaXJlY3RpdmUgPSByZXF1aXJlKCcuLi9kaXJlY3RpdmUnKVxudmFyIGNvbXBpbGVyID0gcmVxdWlyZSgnLi4vY29tcGlsZXInKVxuXG4vKipcbiAqIFVwZGF0ZSB2LXJlZiBmb3IgY29tcG9uZW50LlxuICpcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gcmVtb3ZlXG4gKi9cblxuZXhwb3J0cy5fdXBkYXRlUmVmID0gZnVuY3Rpb24gKHJlbW92ZSkge1xuICB2YXIgcmVmID0gdGhpcy4kb3B0aW9ucy5fcmVmXG4gIGlmIChyZWYpIHtcbiAgICB2YXIgcmVmcyA9ICh0aGlzLl9zY29wZSB8fCB0aGlzLl9jb250ZXh0KS4kcmVmc1xuICAgIGlmIChyZW1vdmUpIHtcbiAgICAgIGlmIChyZWZzW3JlZl0gPT09IHRoaXMpIHtcbiAgICAgICAgcmVmc1tyZWZdID0gbnVsbFxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZWZzW3JlZl0gPSB0aGlzXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogVHJhbnNjbHVkZSwgY29tcGlsZSBhbmQgbGluayBlbGVtZW50LlxuICpcbiAqIElmIGEgcHJlLWNvbXBpbGVkIGxpbmtlciBpcyBhdmFpbGFibGUsIHRoYXQgbWVhbnMgdGhlXG4gKiBwYXNzZWQgaW4gZWxlbWVudCB3aWxsIGJlIHByZS10cmFuc2NsdWRlZCBhbmQgY29tcGlsZWRcbiAqIGFzIHdlbGwgLSBhbGwgd2UgbmVlZCB0byBkbyBpcyB0byBjYWxsIHRoZSBsaW5rZXIuXG4gKlxuICogT3RoZXJ3aXNlIHdlIG5lZWQgdG8gY2FsbCB0cmFuc2NsdWRlL2NvbXBpbGUvbGluayBoZXJlLlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAqIEByZXR1cm4ge0VsZW1lbnR9XG4gKi9cblxuZXhwb3J0cy5fY29tcGlsZSA9IGZ1bmN0aW9uIChlbCkge1xuICB2YXIgb3B0aW9ucyA9IHRoaXMuJG9wdGlvbnNcblxuICAvLyB0cmFuc2NsdWRlIGFuZCBpbml0IGVsZW1lbnRcbiAgLy8gdHJhbnNjbHVkZSBjYW4gcG90ZW50aWFsbHkgcmVwbGFjZSBvcmlnaW5hbFxuICAvLyBzbyB3ZSBuZWVkIHRvIGtlZXAgcmVmZXJlbmNlOyB0aGlzIHN0ZXAgYWxzbyBpbmplY3RzXG4gIC8vIHRoZSB0ZW1wbGF0ZSBhbmQgY2FjaGVzIHRoZSBvcmlnaW5hbCBhdHRyaWJ1dGVzXG4gIC8vIG9uIHRoZSBjb250YWluZXIgbm9kZSBhbmQgcmVwbGFjZXIgbm9kZS5cbiAgdmFyIG9yaWdpbmFsID0gZWxcbiAgZWwgPSBjb21waWxlci50cmFuc2NsdWRlKGVsLCBvcHRpb25zKVxuICB0aGlzLl9pbml0RWxlbWVudChlbClcblxuICAvLyByb290IGlzIGFsd2F5cyBjb21waWxlZCBwZXItaW5zdGFuY2UsIGJlY2F1c2VcbiAgLy8gY29udGFpbmVyIGF0dHJzIGFuZCBwcm9wcyBjYW4gYmUgZGlmZmVyZW50IGV2ZXJ5IHRpbWUuXG4gIHZhciBjb250ZXh0T3B0aW9ucyA9IHRoaXMuX2NvbnRleHQgJiYgdGhpcy5fY29udGV4dC4kb3B0aW9uc1xuICB2YXIgcm9vdExpbmtlciA9IGNvbXBpbGVyLmNvbXBpbGVSb290KGVsLCBvcHRpb25zLCBjb250ZXh0T3B0aW9ucylcblxuICAvLyBjb21waWxlIGFuZCBsaW5rIHRoZSByZXN0XG4gIHZhciBjb250ZW50TGlua0ZuXG4gIHZhciBjdG9yID0gdGhpcy5jb25zdHJ1Y3RvclxuICAvLyBjb21wb25lbnQgY29tcGlsYXRpb24gY2FuIGJlIGNhY2hlZFxuICAvLyBhcyBsb25nIGFzIGl0J3Mgbm90IHVzaW5nIGlubGluZS10ZW1wbGF0ZVxuICBpZiAob3B0aW9ucy5fbGlua2VyQ2FjaGFibGUpIHtcbiAgICBjb250ZW50TGlua0ZuID0gY3Rvci5saW5rZXJcbiAgICBpZiAoIWNvbnRlbnRMaW5rRm4pIHtcbiAgICAgIGNvbnRlbnRMaW5rRm4gPSBjdG9yLmxpbmtlciA9IGNvbXBpbGVyLmNvbXBpbGUoZWwsIG9wdGlvbnMpXG4gICAgfVxuICB9XG5cbiAgLy8gbGluayBwaGFzZVxuICAvLyBtYWtlIHN1cmUgdG8gbGluayByb290IHdpdGggcHJvcCBzY29wZSFcbiAgdmFyIHJvb3RVbmxpbmtGbiA9IHJvb3RMaW5rZXIodGhpcywgZWwsIHRoaXMuX3Njb3BlKVxuICB2YXIgY29udGVudFVubGlua0ZuID0gY29udGVudExpbmtGblxuICAgID8gY29udGVudExpbmtGbih0aGlzLCBlbClcbiAgICA6IGNvbXBpbGVyLmNvbXBpbGUoZWwsIG9wdGlvbnMpKHRoaXMsIGVsKVxuXG4gIC8vIHJlZ2lzdGVyIGNvbXBvc2l0ZSB1bmxpbmsgZnVuY3Rpb25cbiAgLy8gdG8gYmUgY2FsbGVkIGR1cmluZyBpbnN0YW5jZSBkZXN0cnVjdGlvblxuICB0aGlzLl91bmxpbmtGbiA9IGZ1bmN0aW9uICgpIHtcbiAgICByb290VW5saW5rRm4oKVxuICAgIC8vIHBhc3NpbmcgZGVzdHJveWluZzogdHJ1ZSB0byBhdm9pZCBzZWFyY2hpbmcgYW5kXG4gICAgLy8gc3BsaWNpbmcgdGhlIGRpcmVjdGl2ZXNcbiAgICBjb250ZW50VW5saW5rRm4odHJ1ZSlcbiAgfVxuXG4gIC8vIGZpbmFsbHkgcmVwbGFjZSBvcmlnaW5hbFxuICBpZiAob3B0aW9ucy5yZXBsYWNlKSB7XG4gICAgXy5yZXBsYWNlKG9yaWdpbmFsLCBlbClcbiAgfVxuXG4gIHRoaXMuX2lzQ29tcGlsZWQgPSB0cnVlXG4gIHRoaXMuX2NhbGxIb29rKCdjb21waWxlZCcpXG4gIHJldHVybiBlbFxufVxuXG4vKipcbiAqIEluaXRpYWxpemUgaW5zdGFuY2UgZWxlbWVudC4gQ2FsbGVkIGluIHRoZSBwdWJsaWNcbiAqICRtb3VudCgpIG1ldGhvZC5cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gKi9cblxuZXhwb3J0cy5faW5pdEVsZW1lbnQgPSBmdW5jdGlvbiAoZWwpIHtcbiAgaWYgKGVsIGluc3RhbmNlb2YgRG9jdW1lbnRGcmFnbWVudCkge1xuICAgIHRoaXMuX2lzRnJhZ21lbnQgPSB0cnVlXG4gICAgdGhpcy4kZWwgPSB0aGlzLl9mcmFnbWVudFN0YXJ0ID0gZWwuZmlyc3RDaGlsZFxuICAgIHRoaXMuX2ZyYWdtZW50RW5kID0gZWwubGFzdENoaWxkXG4gICAgLy8gc2V0IHBlcnNpc3RlZCB0ZXh0IGFuY2hvcnMgdG8gZW1wdHlcbiAgICBpZiAodGhpcy5fZnJhZ21lbnRTdGFydC5ub2RlVHlwZSA9PT0gMykge1xuICAgICAgdGhpcy5fZnJhZ21lbnRTdGFydC5kYXRhID0gdGhpcy5fZnJhZ21lbnRFbmQuZGF0YSA9ICcnXG4gICAgfVxuICAgIHRoaXMuX2ZyYWdtZW50ID0gZWxcbiAgfSBlbHNlIHtcbiAgICB0aGlzLiRlbCA9IGVsXG4gIH1cbiAgdGhpcy4kZWwuX192dWVfXyA9IHRoaXNcbiAgdGhpcy5fY2FsbEhvb2soJ2JlZm9yZUNvbXBpbGUnKVxufVxuXG4vKipcbiAqIENyZWF0ZSBhbmQgYmluZCBhIGRpcmVjdGl2ZSB0byBhbiBlbGVtZW50LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIC0gZGlyZWN0aXZlIG5hbWVcbiAqIEBwYXJhbSB7Tm9kZX0gbm9kZSAgIC0gdGFyZ2V0IG5vZGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBkZXNjIC0gcGFyc2VkIGRpcmVjdGl2ZSBkZXNjcmlwdG9yXG4gKiBAcGFyYW0ge09iamVjdH0gZGVmICAtIGRpcmVjdGl2ZSBkZWZpbml0aW9uIG9iamVjdFxuICogQHBhcmFtIHtWdWV9IFtob3N0XSAtIHRyYW5zY2x1c2lvbiBob3N0IGNvbXBvbmVudFxuICogQHBhcmFtIHtPYmplY3R9IFtzY29wZV0gLSB2LWZvciBzY29wZVxuICogQHBhcmFtIHtGcmFnbWVudH0gW2ZyYWddIC0gb3duZXIgZnJhZ21lbnRcbiAqL1xuXG5leHBvcnRzLl9iaW5kRGlyID0gZnVuY3Rpb24gKGRlc2NyaXB0b3IsIG5vZGUsIGhvc3QsIHNjb3BlLCBmcmFnKSB7XG4gIHRoaXMuX2RpcmVjdGl2ZXMucHVzaChcbiAgICBuZXcgRGlyZWN0aXZlKGRlc2NyaXB0b3IsIHRoaXMsIG5vZGUsIGhvc3QsIHNjb3BlLCBmcmFnKVxuICApXG59XG5cbi8qKlxuICogVGVhcmRvd24gYW4gaW5zdGFuY2UsIHVub2JzZXJ2ZXMgdGhlIGRhdGEsIHVuYmluZCBhbGwgdGhlXG4gKiBkaXJlY3RpdmVzLCB0dXJuIG9mZiBhbGwgdGhlIGV2ZW50IGxpc3RlbmVycywgZXRjLlxuICpcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gcmVtb3ZlIC0gd2hldGhlciB0byByZW1vdmUgdGhlIERPTSBub2RlLlxuICogQHBhcmFtIHtCb29sZWFufSBkZWZlckNsZWFudXAgLSBpZiB0cnVlLCBkZWZlciBjbGVhbnVwIHRvXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlIGNhbGxlZCBsYXRlclxuICovXG5cbmV4cG9ydHMuX2Rlc3Ryb3kgPSBmdW5jdGlvbiAocmVtb3ZlLCBkZWZlckNsZWFudXApIHtcbiAgaWYgKHRoaXMuX2lzQmVpbmdEZXN0cm95ZWQpIHtcbiAgICBpZiAoIWRlZmVyQ2xlYW51cCkge1xuICAgICAgdGhpcy5fY2xlYW51cCgpXG4gICAgfVxuICAgIHJldHVyblxuICB9XG4gIHRoaXMuX2NhbGxIb29rKCdiZWZvcmVEZXN0cm95JylcbiAgdGhpcy5faXNCZWluZ0Rlc3Ryb3llZCA9IHRydWVcbiAgdmFyIGlcbiAgLy8gcmVtb3ZlIHNlbGYgZnJvbSBwYXJlbnQuIG9ubHkgbmVjZXNzYXJ5XG4gIC8vIGlmIHBhcmVudCBpcyBub3QgYmVpbmcgZGVzdHJveWVkIGFzIHdlbGwuXG4gIHZhciBwYXJlbnQgPSB0aGlzLiRwYXJlbnRcbiAgaWYgKHBhcmVudCAmJiAhcGFyZW50Ll9pc0JlaW5nRGVzdHJveWVkKSB7XG4gICAgcGFyZW50LiRjaGlsZHJlbi4kcmVtb3ZlKHRoaXMpXG4gICAgLy8gdW5yZWdpc3RlciByZWYgKHJlbW92ZTogdHJ1ZSlcbiAgICB0aGlzLl91cGRhdGVSZWYodHJ1ZSlcbiAgfVxuICAvLyBkZXN0cm95IGFsbCBjaGlsZHJlbi5cbiAgaSA9IHRoaXMuJGNoaWxkcmVuLmxlbmd0aFxuICB3aGlsZSAoaS0tKSB7XG4gICAgdGhpcy4kY2hpbGRyZW5baV0uJGRlc3Ryb3koKVxuICB9XG4gIC8vIHRlYXJkb3duIHByb3BzXG4gIGlmICh0aGlzLl9wcm9wc1VubGlua0ZuKSB7XG4gICAgdGhpcy5fcHJvcHNVbmxpbmtGbigpXG4gIH1cbiAgLy8gdGVhcmRvd24gYWxsIGRpcmVjdGl2ZXMuIHRoaXMgYWxzbyB0ZWFyc2Rvd24gYWxsXG4gIC8vIGRpcmVjdGl2ZS1vd25lZCB3YXRjaGVycy5cbiAgaWYgKHRoaXMuX3VubGlua0ZuKSB7XG4gICAgdGhpcy5fdW5saW5rRm4oKVxuICB9XG4gIGkgPSB0aGlzLl93YXRjaGVycy5sZW5ndGhcbiAgd2hpbGUgKGktLSkge1xuICAgIHRoaXMuX3dhdGNoZXJzW2ldLnRlYXJkb3duKClcbiAgfVxuICAvLyByZW1vdmUgcmVmZXJlbmNlIHRvIHNlbGYgb24gJGVsXG4gIGlmICh0aGlzLiRlbCkge1xuICAgIHRoaXMuJGVsLl9fdnVlX18gPSBudWxsXG4gIH1cbiAgLy8gcmVtb3ZlIERPTSBlbGVtZW50XG4gIHZhciBzZWxmID0gdGhpc1xuICBpZiAocmVtb3ZlICYmIHRoaXMuJGVsKSB7XG4gICAgdGhpcy4kcmVtb3ZlKGZ1bmN0aW9uICgpIHtcbiAgICAgIHNlbGYuX2NsZWFudXAoKVxuICAgIH0pXG4gIH0gZWxzZSBpZiAoIWRlZmVyQ2xlYW51cCkge1xuICAgIHRoaXMuX2NsZWFudXAoKVxuICB9XG59XG5cbi8qKlxuICogQ2xlYW4gdXAgdG8gZW5zdXJlIGdhcmJhZ2UgY29sbGVjdGlvbi5cbiAqIFRoaXMgaXMgY2FsbGVkIGFmdGVyIHRoZSBsZWF2ZSB0cmFuc2l0aW9uIGlmIHRoZXJlXG4gKiBpcyBhbnkuXG4gKi9cblxuZXhwb3J0cy5fY2xlYW51cCA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgLy8gcmVtb3ZlIHNlbGYgZnJvbSBvd25lciBmcmFnbWVudFxuICAvLyBkbyBpdCBpbiBjbGVhbnVwIHNvIHRoYXQgd2UgY2FuIGNhbGwgJGRlc3Ryb3kgd2l0aFxuICAvLyBkZWZlciByaWdodCB3aGVuIGEgZnJhZ21lbnQgaXMgYWJvdXQgdG8gYmUgcmVtb3ZlZC5cbiAgaWYgKHRoaXMuX2ZyYWcpIHtcbiAgICB0aGlzLl9mcmFnLmNoaWxkcmVuLiRyZW1vdmUodGhpcylcbiAgfVxuICAvLyByZW1vdmUgcmVmZXJlbmNlIGZyb20gZGF0YSBvYlxuICAvLyBmcm96ZW4gb2JqZWN0IG1heSBub3QgaGF2ZSBvYnNlcnZlci5cbiAgaWYgKHRoaXMuX2RhdGEuX19vYl9fKSB7XG4gICAgdGhpcy5fZGF0YS5fX29iX18ucmVtb3ZlVm0odGhpcylcbiAgfVxuICAvLyBDbGVhbiB1cCByZWZlcmVuY2VzIHRvIHByaXZhdGUgcHJvcGVydGllcyBhbmQgb3RoZXJcbiAgLy8gaW5zdGFuY2VzLiBwcmVzZXJ2ZSByZWZlcmVuY2UgdG8gX2RhdGEgc28gdGhhdCBwcm94eVxuICAvLyBhY2Nlc3NvcnMgc3RpbGwgd29yay4gVGhlIG9ubHkgcG90ZW50aWFsIHNpZGUgZWZmZWN0XG4gIC8vIGhlcmUgaXMgdGhhdCBtdXRhdGluZyB0aGUgaW5zdGFuY2UgYWZ0ZXIgaXQncyBkZXN0cm95ZWRcbiAgLy8gbWF5IGFmZmVjdCB0aGUgc3RhdGUgb2Ygb3RoZXIgY29tcG9uZW50cyB0aGF0IGFyZSBzdGlsbFxuICAvLyBvYnNlcnZpbmcgdGhlIHNhbWUgb2JqZWN0LCBidXQgdGhhdCBzZWVtcyB0byBiZSBhXG4gIC8vIHJlYXNvbmFibGUgcmVzcG9uc2liaWxpdHkgZm9yIHRoZSB1c2VyIHJhdGhlciB0aGFuXG4gIC8vIGFsd2F5cyB0aHJvd2luZyBhbiBlcnJvciBvbiB0aGVtLlxuICB0aGlzLiRlbCA9XG4gIHRoaXMuJHBhcmVudCA9XG4gIHRoaXMuJHJvb3QgPVxuICB0aGlzLiRjaGlsZHJlbiA9XG4gIHRoaXMuX3dhdGNoZXJzID1cbiAgdGhpcy5fY29udGV4dCA9XG4gIHRoaXMuX3Njb3BlID1cbiAgdGhpcy5fZGlyZWN0aXZlcyA9IG51bGxcbiAgLy8gY2FsbCB0aGUgbGFzdCBob29rLi4uXG4gIHRoaXMuX2lzRGVzdHJveWVkID0gdHJ1ZVxuICB0aGlzLl9jYWxsSG9vaygnZGVzdHJveWVkJylcbiAgLy8gdHVybiBvZmYgYWxsIGluc3RhbmNlIGxpc3RlbmVycy5cbiAgdGhpcy4kb2ZmKClcbn1cbiIsInZhciBfID0gcmVxdWlyZSgnLi4vdXRpbCcpXG5cbi8qKlxuICogQXBwbHkgYSBsaXN0IG9mIGZpbHRlciAoZGVzY3JpcHRvcnMpIHRvIGEgdmFsdWUuXG4gKiBVc2luZyBwbGFpbiBmb3IgbG9vcHMgaGVyZSBiZWNhdXNlIHRoaXMgd2lsbCBiZSBjYWxsZWQgaW5cbiAqIHRoZSBnZXR0ZXIgb2YgYW55IHdhdGNoZXIgd2l0aCBmaWx0ZXJzIHNvIGl0IGlzIHZlcnlcbiAqIHBlcmZvcm1hbmNlIHNlbnNpdGl2ZS5cbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlXG4gKiBAcGFyYW0geyp9IFtvbGRWYWx1ZV1cbiAqIEBwYXJhbSB7QXJyYXl9IGZpbHRlcnNcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gd3JpdGVcbiAqIEByZXR1cm4geyp9XG4gKi9cblxuZXhwb3J0cy5fYXBwbHlGaWx0ZXJzID0gZnVuY3Rpb24gKHZhbHVlLCBvbGRWYWx1ZSwgZmlsdGVycywgd3JpdGUpIHtcbiAgdmFyIGZpbHRlciwgZm4sIGFyZ3MsIGFyZywgb2Zmc2V0LCBpLCBsLCBqLCBrXG4gIGZvciAoaSA9IDAsIGwgPSBmaWx0ZXJzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGZpbHRlciA9IGZpbHRlcnNbaV1cbiAgICBmbiA9IF8ucmVzb2x2ZUFzc2V0KHRoaXMuJG9wdGlvbnMsICdmaWx0ZXJzJywgZmlsdGVyLm5hbWUpXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIF8uYXNzZXJ0QXNzZXQoZm4sICdmaWx0ZXInLCBmaWx0ZXIubmFtZSlcbiAgICB9XG4gICAgaWYgKCFmbikgY29udGludWVcbiAgICBmbiA9IHdyaXRlID8gZm4ud3JpdGUgOiAoZm4ucmVhZCB8fCBmbilcbiAgICBpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSBjb250aW51ZVxuICAgIGFyZ3MgPSB3cml0ZSA/IFt2YWx1ZSwgb2xkVmFsdWVdIDogW3ZhbHVlXVxuICAgIG9mZnNldCA9IHdyaXRlID8gMiA6IDFcbiAgICBpZiAoZmlsdGVyLmFyZ3MpIHtcbiAgICAgIGZvciAoaiA9IDAsIGsgPSBmaWx0ZXIuYXJncy5sZW5ndGg7IGogPCBrOyBqKyspIHtcbiAgICAgICAgYXJnID0gZmlsdGVyLmFyZ3Nbal1cbiAgICAgICAgYXJnc1tqICsgb2Zmc2V0XSA9IGFyZy5keW5hbWljXG4gICAgICAgICAgPyB0aGlzLiRnZXQoYXJnLnZhbHVlKVxuICAgICAgICAgIDogYXJnLnZhbHVlXG4gICAgICB9XG4gICAgfVxuICAgIHZhbHVlID0gZm4uYXBwbHkodGhpcywgYXJncylcbiAgfVxuICByZXR1cm4gdmFsdWVcbn1cblxuLyoqXG4gKiBSZXNvbHZlIGEgY29tcG9uZW50LCBkZXBlbmRpbmcgb24gd2hldGhlciB0aGUgY29tcG9uZW50XG4gKiBpcyBkZWZpbmVkIG5vcm1hbGx5IG9yIHVzaW5nIGFuIGFzeW5jIGZhY3RvcnkgZnVuY3Rpb24uXG4gKiBSZXNvbHZlcyBzeW5jaHJvbm91c2x5IGlmIGFscmVhZHkgcmVzb2x2ZWQsIG90aGVyd2lzZVxuICogcmVzb2x2ZXMgYXN5bmNocm9ub3VzbHkgYW5kIGNhY2hlcyB0aGUgcmVzb2x2ZWRcbiAqIGNvbnN0cnVjdG9yIG9uIHRoZSBmYWN0b3J5LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZFxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2JcbiAqL1xuXG5leHBvcnRzLl9yZXNvbHZlQ29tcG9uZW50ID0gZnVuY3Rpb24gKGlkLCBjYikge1xuICB2YXIgZmFjdG9yeSA9IF8ucmVzb2x2ZUFzc2V0KHRoaXMuJG9wdGlvbnMsICdjb21wb25lbnRzJywgaWQpXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgXy5hc3NlcnRBc3NldChmYWN0b3J5LCAnY29tcG9uZW50JywgaWQpXG4gIH1cbiAgaWYgKCFmYWN0b3J5KSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgLy8gYXN5bmMgY29tcG9uZW50IGZhY3RvcnlcbiAgaWYgKCFmYWN0b3J5Lm9wdGlvbnMpIHtcbiAgICBpZiAoZmFjdG9yeS5yZXNvbHZlZCkge1xuICAgICAgLy8gY2FjaGVkXG4gICAgICBjYihmYWN0b3J5LnJlc29sdmVkKVxuICAgIH0gZWxzZSBpZiAoZmFjdG9yeS5yZXF1ZXN0ZWQpIHtcbiAgICAgIC8vIHBvb2wgY2FsbGJhY2tzXG4gICAgICBmYWN0b3J5LnBlbmRpbmdDYWxsYmFja3MucHVzaChjYilcbiAgICB9IGVsc2Uge1xuICAgICAgZmFjdG9yeS5yZXF1ZXN0ZWQgPSB0cnVlXG4gICAgICB2YXIgY2JzID0gZmFjdG9yeS5wZW5kaW5nQ2FsbGJhY2tzID0gW2NiXVxuICAgICAgZmFjdG9yeShmdW5jdGlvbiByZXNvbHZlIChyZXMpIHtcbiAgICAgICAgaWYgKF8uaXNQbGFpbk9iamVjdChyZXMpKSB7XG4gICAgICAgICAgcmVzID0gXy5WdWUuZXh0ZW5kKHJlcylcbiAgICAgICAgfVxuICAgICAgICAvLyBjYWNoZSByZXNvbHZlZFxuICAgICAgICBmYWN0b3J5LnJlc29sdmVkID0gcmVzXG4gICAgICAgIC8vIGludm9rZSBjYWxsYmFja3NcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBjYnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgY2JzW2ldKHJlcylcbiAgICAgICAgfVxuICAgICAgfSwgZnVuY3Rpb24gcmVqZWN0IChyZWFzb24pIHtcbiAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBfLndhcm4oXG4gICAgICAgICAgJ0ZhaWxlZCB0byByZXNvbHZlIGFzeW5jIGNvbXBvbmVudDogJyArIGlkICsgJy4gJyArXG4gICAgICAgICAgKHJlYXNvbiA/ICdcXG5SZWFzb246ICcgKyByZWFzb24gOiAnJylcbiAgICAgICAgKVxuICAgICAgfSlcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gbm9ybWFsIGNvbXBvbmVudFxuICAgIGNiKGZhY3RvcnkpXG4gIH1cbn1cbiIsInZhciBfID0gcmVxdWlyZSgnLi4vdXRpbCcpXG52YXIgY29tcGlsZXIgPSByZXF1aXJlKCcuLi9jb21waWxlcicpXG52YXIgT2JzZXJ2ZXIgPSByZXF1aXJlKCcuLi9vYnNlcnZlcicpXG52YXIgRGVwID0gcmVxdWlyZSgnLi4vb2JzZXJ2ZXIvZGVwJylcbnZhciBXYXRjaGVyID0gcmVxdWlyZSgnLi4vd2F0Y2hlcicpXG5cbi8qKlxuICogU2V0dXAgdGhlIHNjb3BlIG9mIGFuIGluc3RhbmNlLCB3aGljaCBjb250YWluczpcbiAqIC0gb2JzZXJ2ZWQgZGF0YVxuICogLSBjb21wdXRlZCBwcm9wZXJ0aWVzXG4gKiAtIHVzZXIgbWV0aG9kc1xuICogLSBtZXRhIHByb3BlcnRpZXNcbiAqL1xuXG5leHBvcnRzLl9pbml0U3RhdGUgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuX2luaXRQcm9wcygpXG4gIHRoaXMuX2luaXRNZXRhKClcbiAgdGhpcy5faW5pdE1ldGhvZHMoKVxuICB0aGlzLl9pbml0RGF0YSgpXG4gIHRoaXMuX2luaXRDb21wdXRlZCgpXG59XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBwcm9wcy5cbiAqL1xuXG5leHBvcnRzLl9pbml0UHJvcHMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBvcHRpb25zID0gdGhpcy4kb3B0aW9uc1xuICB2YXIgZWwgPSBvcHRpb25zLmVsXG4gIHZhciBwcm9wcyA9IG9wdGlvbnMucHJvcHNcbiAgaWYgKHByb3BzICYmICFlbCkge1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgXy53YXJuKFxuICAgICAgJ1Byb3BzIHdpbGwgbm90IGJlIGNvbXBpbGVkIGlmIG5vIGBlbGAgb3B0aW9uIGlzICcgK1xuICAgICAgJ3Byb3ZpZGVkIGF0IGluc3RhbnRpYXRpb24uJ1xuICAgIClcbiAgfVxuICAvLyBtYWtlIHN1cmUgdG8gY29udmVydCBzdHJpbmcgc2VsZWN0b3JzIGludG8gZWxlbWVudCBub3dcbiAgZWwgPSBvcHRpb25zLmVsID0gXy5xdWVyeShlbClcbiAgdGhpcy5fcHJvcHNVbmxpbmtGbiA9IGVsICYmIGVsLm5vZGVUeXBlID09PSAxICYmIHByb3BzXG4gICAgLy8gcHJvcHMgbXVzdCBiZSBsaW5rZWQgaW4gcHJvcGVyIHNjb3BlIGlmIGluc2lkZSB2LWZvclxuICAgID8gY29tcGlsZXIuY29tcGlsZUFuZExpbmtQcm9wcyh0aGlzLCBlbCwgcHJvcHMsIHRoaXMuX3Njb3BlKVxuICAgIDogbnVsbFxufVxuXG4vKipcbiAqIEluaXRpYWxpemUgdGhlIGRhdGEuXG4gKi9cblxuZXhwb3J0cy5faW5pdERhdGEgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBwcm9wc0RhdGEgPSB0aGlzLl9kYXRhXG4gIHZhciBvcHRpb25zRGF0YUZuID0gdGhpcy4kb3B0aW9ucy5kYXRhXG4gIHZhciBvcHRpb25zRGF0YSA9IG9wdGlvbnNEYXRhRm4gJiYgb3B0aW9uc0RhdGFGbigpXG4gIGlmIChvcHRpb25zRGF0YSkge1xuICAgIHRoaXMuX2RhdGEgPSBvcHRpb25zRGF0YVxuICAgIGZvciAodmFyIHByb3AgaW4gcHJvcHNEYXRhKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJlxuICAgICAgICAgIG9wdGlvbnNEYXRhLmhhc093blByb3BlcnR5KHByb3ApKSB7XG4gICAgICAgIF8ud2FybihcbiAgICAgICAgICAnRGF0YSBmaWVsZCBcIicgKyBwcm9wICsgJ1wiIGlzIGFscmVhZHkgZGVmaW5lZCAnICtcbiAgICAgICAgICAnYXMgYSBwcm9wLiBVc2UgcHJvcCBkZWZhdWx0IHZhbHVlIGluc3RlYWQuJ1xuICAgICAgICApXG4gICAgICB9XG4gICAgICBpZiAodGhpcy5fcHJvcHNbcHJvcF0ucmF3ICE9PSBudWxsIHx8XG4gICAgICAgICAgIW9wdGlvbnNEYXRhLmhhc093blByb3BlcnR5KHByb3ApKSB7XG4gICAgICAgIF8uc2V0KG9wdGlvbnNEYXRhLCBwcm9wLCBwcm9wc0RhdGFbcHJvcF0pXG4gICAgICB9XG4gICAgfVxuICB9XG4gIHZhciBkYXRhID0gdGhpcy5fZGF0YVxuICAvLyBwcm94eSBkYXRhIG9uIGluc3RhbmNlXG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZGF0YSlcbiAgdmFyIGksIGtleVxuICBpID0ga2V5cy5sZW5ndGhcbiAgd2hpbGUgKGktLSkge1xuICAgIGtleSA9IGtleXNbaV1cbiAgICB0aGlzLl9wcm94eShrZXkpXG4gIH1cbiAgLy8gb2JzZXJ2ZSBkYXRhXG4gIE9ic2VydmVyLmNyZWF0ZShkYXRhLCB0aGlzKVxufVxuXG4vKipcbiAqIFN3YXAgdGhlIGlzbnRhbmNlJ3MgJGRhdGEuIENhbGxlZCBpbiAkZGF0YSdzIHNldHRlci5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gbmV3RGF0YVxuICovXG5cbmV4cG9ydHMuX3NldERhdGEgPSBmdW5jdGlvbiAobmV3RGF0YSkge1xuICBuZXdEYXRhID0gbmV3RGF0YSB8fCB7fVxuICB2YXIgb2xkRGF0YSA9IHRoaXMuX2RhdGFcbiAgdGhpcy5fZGF0YSA9IG5ld0RhdGFcbiAgdmFyIGtleXMsIGtleSwgaVxuICAvLyB1bnByb3h5IGtleXMgbm90IHByZXNlbnQgaW4gbmV3IGRhdGFcbiAga2V5cyA9IE9iamVjdC5rZXlzKG9sZERhdGEpXG4gIGkgPSBrZXlzLmxlbmd0aFxuICB3aGlsZSAoaS0tKSB7XG4gICAga2V5ID0ga2V5c1tpXVxuICAgIGlmICghKGtleSBpbiBuZXdEYXRhKSkge1xuICAgICAgdGhpcy5fdW5wcm94eShrZXkpXG4gICAgfVxuICB9XG4gIC8vIHByb3h5IGtleXMgbm90IGFscmVhZHkgcHJveGllZCxcbiAgLy8gYW5kIHRyaWdnZXIgY2hhbmdlIGZvciBjaGFuZ2VkIHZhbHVlc1xuICBrZXlzID0gT2JqZWN0LmtleXMobmV3RGF0YSlcbiAgaSA9IGtleXMubGVuZ3RoXG4gIHdoaWxlIChpLS0pIHtcbiAgICBrZXkgPSBrZXlzW2ldXG4gICAgaWYgKCF0aGlzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIC8vIG5ldyBwcm9wZXJ0eVxuICAgICAgdGhpcy5fcHJveHkoa2V5KVxuICAgIH1cbiAgfVxuICBvbGREYXRhLl9fb2JfXy5yZW1vdmVWbSh0aGlzKVxuICBPYnNlcnZlci5jcmVhdGUobmV3RGF0YSwgdGhpcylcbiAgdGhpcy5fZGlnZXN0KClcbn1cblxuLyoqXG4gKiBQcm94eSBhIHByb3BlcnR5LCBzbyB0aGF0XG4gKiB2bS5wcm9wID09PSB2bS5fZGF0YS5wcm9wXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGtleVxuICovXG5cbmV4cG9ydHMuX3Byb3h5ID0gZnVuY3Rpb24gKGtleSkge1xuICBpZiAoIV8uaXNSZXNlcnZlZChrZXkpKSB7XG4gICAgLy8gbmVlZCB0byBzdG9yZSByZWYgdG8gc2VsZiBoZXJlXG4gICAgLy8gYmVjYXVzZSB0aGVzZSBnZXR0ZXIvc2V0dGVycyBtaWdodFxuICAgIC8vIGJlIGNhbGxlZCBieSBjaGlsZCBzY29wZXMgdmlhXG4gICAgLy8gcHJvdG90eXBlIGluaGVyaXRhbmNlLlxuICAgIHZhciBzZWxmID0gdGhpc1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzZWxmLCBrZXksIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIHByb3h5R2V0dGVyICgpIHtcbiAgICAgICAgcmV0dXJuIHNlbGYuX2RhdGFba2V5XVxuICAgICAgfSxcbiAgICAgIHNldDogZnVuY3Rpb24gcHJveHlTZXR0ZXIgKHZhbCkge1xuICAgICAgICBzZWxmLl9kYXRhW2tleV0gPSB2YWxcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogVW5wcm94eSBhIHByb3BlcnR5LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXlcbiAqL1xuXG5leHBvcnRzLl91bnByb3h5ID0gZnVuY3Rpb24gKGtleSkge1xuICBpZiAoIV8uaXNSZXNlcnZlZChrZXkpKSB7XG4gICAgZGVsZXRlIHRoaXNba2V5XVxuICB9XG59XG5cbi8qKlxuICogRm9yY2UgdXBkYXRlIG9uIGV2ZXJ5IHdhdGNoZXIgaW4gc2NvcGUuXG4gKi9cblxuZXhwb3J0cy5fZGlnZXN0ID0gZnVuY3Rpb24gKCkge1xuICBmb3IgKHZhciBpID0gMCwgbCA9IHRoaXMuX3dhdGNoZXJzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIHRoaXMuX3dhdGNoZXJzW2ldLnVwZGF0ZSh0cnVlKSAvLyBzaGFsbG93IHVwZGF0ZXNcbiAgfVxufVxuXG4vKipcbiAqIFNldHVwIGNvbXB1dGVkIHByb3BlcnRpZXMuIFRoZXkgYXJlIGVzc2VudGlhbGx5XG4gKiBzcGVjaWFsIGdldHRlci9zZXR0ZXJzXG4gKi9cblxuZnVuY3Rpb24gbm9vcCAoKSB7fVxuZXhwb3J0cy5faW5pdENvbXB1dGVkID0gZnVuY3Rpb24gKCkge1xuICB2YXIgY29tcHV0ZWQgPSB0aGlzLiRvcHRpb25zLmNvbXB1dGVkXG4gIGlmIChjb21wdXRlZCkge1xuICAgIGZvciAodmFyIGtleSBpbiBjb21wdXRlZCkge1xuICAgICAgdmFyIHVzZXJEZWYgPSBjb21wdXRlZFtrZXldXG4gICAgICB2YXIgZGVmID0ge1xuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgdXNlckRlZiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBkZWYuZ2V0ID0gbWFrZUNvbXB1dGVkR2V0dGVyKHVzZXJEZWYsIHRoaXMpXG4gICAgICAgIGRlZi5zZXQgPSBub29wXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZWYuZ2V0ID0gdXNlckRlZi5nZXRcbiAgICAgICAgICA/IHVzZXJEZWYuY2FjaGUgIT09IGZhbHNlXG4gICAgICAgICAgICA/IG1ha2VDb21wdXRlZEdldHRlcih1c2VyRGVmLmdldCwgdGhpcylcbiAgICAgICAgICAgIDogXy5iaW5kKHVzZXJEZWYuZ2V0LCB0aGlzKVxuICAgICAgICAgIDogbm9vcFxuICAgICAgICBkZWYuc2V0ID0gdXNlckRlZi5zZXRcbiAgICAgICAgICA/IF8uYmluZCh1c2VyRGVmLnNldCwgdGhpcylcbiAgICAgICAgICA6IG5vb3BcbiAgICAgIH1cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBrZXksIGRlZilcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gbWFrZUNvbXB1dGVkR2V0dGVyIChnZXR0ZXIsIG93bmVyKSB7XG4gIHZhciB3YXRjaGVyID0gbmV3IFdhdGNoZXIob3duZXIsIGdldHRlciwgbnVsbCwge1xuICAgIGxhenk6IHRydWVcbiAgfSlcbiAgcmV0dXJuIGZ1bmN0aW9uIGNvbXB1dGVkR2V0dGVyICgpIHtcbiAgICBpZiAod2F0Y2hlci5kaXJ0eSkge1xuICAgICAgd2F0Y2hlci5ldmFsdWF0ZSgpXG4gICAgfVxuICAgIGlmIChEZXAudGFyZ2V0KSB7XG4gICAgICB3YXRjaGVyLmRlcGVuZCgpXG4gICAgfVxuICAgIHJldHVybiB3YXRjaGVyLnZhbHVlXG4gIH1cbn1cblxuLyoqXG4gKiBTZXR1cCBpbnN0YW5jZSBtZXRob2RzLiBNZXRob2RzIG11c3QgYmUgYm91bmQgdG8gdGhlXG4gKiBpbnN0YW5jZSBzaW5jZSB0aGV5IG1pZ2h0IGJlIHBhc3NlZCBkb3duIGFzIGEgcHJvcCB0b1xuICogY2hpbGQgY29tcG9uZW50cy5cbiAqL1xuXG5leHBvcnRzLl9pbml0TWV0aG9kcyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIG1ldGhvZHMgPSB0aGlzLiRvcHRpb25zLm1ldGhvZHNcbiAgaWYgKG1ldGhvZHMpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gbWV0aG9kcykge1xuICAgICAgdGhpc1trZXldID0gXy5iaW5kKG1ldGhvZHNba2V5XSwgdGhpcylcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBJbml0aWFsaXplIG1ldGEgaW5mb3JtYXRpb24gbGlrZSAkaW5kZXgsICRrZXkgJiAkdmFsdWUuXG4gKi9cblxuZXhwb3J0cy5faW5pdE1ldGEgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBtZXRhcyA9IHRoaXMuJG9wdGlvbnMuX21ldGFcbiAgaWYgKG1ldGFzKSB7XG4gICAgZm9yICh2YXIga2V5IGluIG1ldGFzKSB7XG4gICAgICBfLmRlZmluZVJlYWN0aXZlKHRoaXMsIGtleSwgbWV0YXNba2V5XSlcbiAgICB9XG4gIH1cbn1cbiIsInZhciBfID0gcmVxdWlyZSgnLi4vdXRpbCcpXG52YXIgYXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZVxudmFyIGFycmF5TWV0aG9kcyA9IE9iamVjdC5jcmVhdGUoYXJyYXlQcm90bylcblxuLyoqXG4gKiBJbnRlcmNlcHQgbXV0YXRpbmcgbWV0aG9kcyBhbmQgZW1pdCBldmVudHNcbiAqL1xuXG47W1xuICAncHVzaCcsXG4gICdwb3AnLFxuICAnc2hpZnQnLFxuICAndW5zaGlmdCcsXG4gICdzcGxpY2UnLFxuICAnc29ydCcsXG4gICdyZXZlcnNlJ1xuXVxuLmZvckVhY2goZnVuY3Rpb24gKG1ldGhvZCkge1xuICAvLyBjYWNoZSBvcmlnaW5hbCBtZXRob2RcbiAgdmFyIG9yaWdpbmFsID0gYXJyYXlQcm90b1ttZXRob2RdXG4gIF8uZGVmaW5lKGFycmF5TWV0aG9kcywgbWV0aG9kLCBmdW5jdGlvbiBtdXRhdG9yICgpIHtcbiAgICAvLyBhdm9pZCBsZWFraW5nIGFyZ3VtZW50czpcbiAgICAvLyBodHRwOi8vanNwZXJmLmNvbS9jbG9zdXJlLXdpdGgtYXJndW1lbnRzXG4gICAgdmFyIGkgPSBhcmd1bWVudHMubGVuZ3RoXG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoaSlcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2ldXG4gICAgfVxuICAgIHZhciByZXN1bHQgPSBvcmlnaW5hbC5hcHBseSh0aGlzLCBhcmdzKVxuICAgIHZhciBvYiA9IHRoaXMuX19vYl9fXG4gICAgdmFyIGluc2VydGVkXG4gICAgc3dpdGNoIChtZXRob2QpIHtcbiAgICAgIGNhc2UgJ3B1c2gnOlxuICAgICAgICBpbnNlcnRlZCA9IGFyZ3NcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ3Vuc2hpZnQnOlxuICAgICAgICBpbnNlcnRlZCA9IGFyZ3NcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ3NwbGljZSc6XG4gICAgICAgIGluc2VydGVkID0gYXJncy5zbGljZSgyKVxuICAgICAgICBicmVha1xuICAgIH1cbiAgICBpZiAoaW5zZXJ0ZWQpIG9iLm9ic2VydmVBcnJheShpbnNlcnRlZClcbiAgICAvLyBub3RpZnkgY2hhbmdlXG4gICAgb2IuZGVwLm5vdGlmeSgpXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KVxufSlcblxuLyoqXG4gKiBTd2FwIHRoZSBlbGVtZW50IGF0IHRoZSBnaXZlbiBpbmRleCB3aXRoIGEgbmV3IHZhbHVlXG4gKiBhbmQgZW1pdHMgY29ycmVzcG9uZGluZyBldmVudC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gaW5kZXhcbiAqIEBwYXJhbSB7Kn0gdmFsXG4gKiBAcmV0dXJuIHsqfSAtIHJlcGxhY2VkIGVsZW1lbnRcbiAqL1xuXG5fLmRlZmluZShcbiAgYXJyYXlQcm90byxcbiAgJyRzZXQnLFxuICBmdW5jdGlvbiAkc2V0IChpbmRleCwgdmFsKSB7XG4gICAgaWYgKGluZGV4ID49IHRoaXMubGVuZ3RoKSB7XG4gICAgICB0aGlzLmxlbmd0aCA9IGluZGV4ICsgMVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5zcGxpY2UoaW5kZXgsIDEsIHZhbClbMF1cbiAgfVxuKVxuXG4vKipcbiAqIENvbnZlbmllbmNlIG1ldGhvZCB0byByZW1vdmUgdGhlIGVsZW1lbnQgYXQgZ2l2ZW4gaW5kZXguXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4XG4gKiBAcGFyYW0geyp9IHZhbFxuICovXG5cbl8uZGVmaW5lKFxuICBhcnJheVByb3RvLFxuICAnJHJlbW92ZScsXG4gIGZ1bmN0aW9uICRyZW1vdmUgKGl0ZW0pIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAoIXRoaXMubGVuZ3RoKSByZXR1cm5cbiAgICB2YXIgaW5kZXggPSBfLmluZGV4T2YodGhpcywgaXRlbSlcbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgcmV0dXJuIHRoaXMuc3BsaWNlKGluZGV4LCAxKVxuICAgIH1cbiAgfVxuKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5TWV0aG9kc1xuIiwidmFyIF8gPSByZXF1aXJlKCcuLi91dGlsJylcbnZhciB1aWQgPSAwXG5cbi8qKlxuICogQSBkZXAgaXMgYW4gb2JzZXJ2YWJsZSB0aGF0IGNhbiBoYXZlIG11bHRpcGxlXG4gKiBkaXJlY3RpdmVzIHN1YnNjcmliaW5nIHRvIGl0LlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5cbmZ1bmN0aW9uIERlcCAoKSB7XG4gIHRoaXMuaWQgPSB1aWQrK1xuICB0aGlzLnN1YnMgPSBbXVxufVxuXG4vLyB0aGUgY3VycmVudCB0YXJnZXQgd2F0Y2hlciBiZWluZyBldmFsdWF0ZWQuXG4vLyB0aGlzIGlzIGdsb2JhbGx5IHVuaXF1ZSBiZWNhdXNlIHRoZXJlIGNvdWxkIGJlIG9ubHkgb25lXG4vLyB3YXRjaGVyIGJlaW5nIGV2YWx1YXRlZCBhdCBhbnkgdGltZS5cbkRlcC50YXJnZXQgPSBudWxsXG5cbi8qKlxuICogQWRkIGEgZGlyZWN0aXZlIHN1YnNjcmliZXIuXG4gKlxuICogQHBhcmFtIHtEaXJlY3RpdmV9IHN1YlxuICovXG5cbkRlcC5wcm90b3R5cGUuYWRkU3ViID0gZnVuY3Rpb24gKHN1Yikge1xuICB0aGlzLnN1YnMucHVzaChzdWIpXG59XG5cbi8qKlxuICogUmVtb3ZlIGEgZGlyZWN0aXZlIHN1YnNjcmliZXIuXG4gKlxuICogQHBhcmFtIHtEaXJlY3RpdmV9IHN1YlxuICovXG5cbkRlcC5wcm90b3R5cGUucmVtb3ZlU3ViID0gZnVuY3Rpb24gKHN1Yikge1xuICB0aGlzLnN1YnMuJHJlbW92ZShzdWIpXG59XG5cbi8qKlxuICogQWRkIHNlbGYgYXMgYSBkZXBlbmRlbmN5IHRvIHRoZSB0YXJnZXQgd2F0Y2hlci5cbiAqL1xuXG5EZXAucHJvdG90eXBlLmRlcGVuZCA9IGZ1bmN0aW9uICgpIHtcbiAgRGVwLnRhcmdldC5hZGREZXAodGhpcylcbn1cblxuLyoqXG4gKiBOb3RpZnkgYWxsIHN1YnNjcmliZXJzIG9mIGEgbmV3IHZhbHVlLlxuICovXG5cbkRlcC5wcm90b3R5cGUubm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAvLyBzdGFibGl6ZSB0aGUgc3Vic2NyaWJlciBsaXN0IGZpcnN0XG4gIHZhciBzdWJzID0gXy50b0FycmF5KHRoaXMuc3VicylcbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBzdWJzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIHN1YnNbaV0udXBkYXRlKClcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IERlcFxuIiwidmFyIF8gPSByZXF1aXJlKCcuLi91dGlsJylcbnZhciBEZXAgPSByZXF1aXJlKCcuL2RlcCcpXG52YXIgYXJyYXlNZXRob2RzID0gcmVxdWlyZSgnLi9hcnJheScpXG52YXIgYXJyYXlLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoYXJyYXlNZXRob2RzKVxuXG4vKipcbiAqIE9ic2VydmVyIGNsYXNzIHRoYXQgYXJlIGF0dGFjaGVkIHRvIGVhY2ggb2JzZXJ2ZWRcbiAqIG9iamVjdC4gT25jZSBhdHRhY2hlZCwgdGhlIG9ic2VydmVyIGNvbnZlcnRzIHRhcmdldFxuICogb2JqZWN0J3MgcHJvcGVydHkga2V5cyBpbnRvIGdldHRlci9zZXR0ZXJzIHRoYXRcbiAqIGNvbGxlY3QgZGVwZW5kZW5jaWVzIGFuZCBkaXNwYXRjaGVzIHVwZGF0ZXMuXG4gKlxuICogQHBhcmFtIHtBcnJheXxPYmplY3R9IHZhbHVlXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuXG5mdW5jdGlvbiBPYnNlcnZlciAodmFsdWUpIHtcbiAgdGhpcy52YWx1ZSA9IHZhbHVlXG4gIHRoaXMuZGVwID0gbmV3IERlcCgpXG4gIF8uZGVmaW5lKHZhbHVlLCAnX19vYl9fJywgdGhpcylcbiAgaWYgKF8uaXNBcnJheSh2YWx1ZSkpIHtcbiAgICB2YXIgYXVnbWVudCA9IF8uaGFzUHJvdG9cbiAgICAgID8gcHJvdG9BdWdtZW50XG4gICAgICA6IGNvcHlBdWdtZW50XG4gICAgYXVnbWVudCh2YWx1ZSwgYXJyYXlNZXRob2RzLCBhcnJheUtleXMpXG4gICAgdGhpcy5vYnNlcnZlQXJyYXkodmFsdWUpXG4gIH0gZWxzZSB7XG4gICAgdGhpcy53YWxrKHZhbHVlKVxuICB9XG59XG5cbi8vIFN0YXRpYyBtZXRob2RzXG5cbi8qKlxuICogQXR0ZW1wdCB0byBjcmVhdGUgYW4gb2JzZXJ2ZXIgaW5zdGFuY2UgZm9yIGEgdmFsdWUsXG4gKiByZXR1cm5zIHRoZSBuZXcgb2JzZXJ2ZXIgaWYgc3VjY2Vzc2Z1bGx5IG9ic2VydmVkLFxuICogb3IgdGhlIGV4aXN0aW5nIG9ic2VydmVyIGlmIHRoZSB2YWx1ZSBhbHJlYWR5IGhhcyBvbmUuXG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZVxuICogQHBhcmFtIHtWdWV9IFt2bV1cbiAqIEByZXR1cm4ge09ic2VydmVyfHVuZGVmaW5lZH1cbiAqIEBzdGF0aWNcbiAqL1xuXG5PYnNlcnZlci5jcmVhdGUgPSBmdW5jdGlvbiAodmFsdWUsIHZtKSB7XG4gIGlmICghdmFsdWUgfHwgdHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVyblxuICB9XG4gIHZhciBvYlxuICBpZiAoXG4gICAgdmFsdWUuaGFzT3duUHJvcGVydHkoJ19fb2JfXycpICYmXG4gICAgdmFsdWUuX19vYl9fIGluc3RhbmNlb2YgT2JzZXJ2ZXJcbiAgKSB7XG4gICAgb2IgPSB2YWx1ZS5fX29iX19cbiAgfSBlbHNlIGlmIChcbiAgICAoXy5pc0FycmF5KHZhbHVlKSB8fCBfLmlzUGxhaW5PYmplY3QodmFsdWUpKSAmJlxuICAgICFPYmplY3QuaXNGcm96ZW4odmFsdWUpICYmXG4gICAgIXZhbHVlLl9pc1Z1ZVxuICApIHtcbiAgICBvYiA9IG5ldyBPYnNlcnZlcih2YWx1ZSlcbiAgfVxuICBpZiAob2IgJiYgdm0pIHtcbiAgICBvYi5hZGRWbSh2bSlcbiAgfVxuICByZXR1cm4gb2Jcbn1cblxuLy8gSW5zdGFuY2UgbWV0aG9kc1xuXG4vKipcbiAqIFdhbGsgdGhyb3VnaCBlYWNoIHByb3BlcnR5IGFuZCBjb252ZXJ0IHRoZW0gaW50b1xuICogZ2V0dGVyL3NldHRlcnMuIFRoaXMgbWV0aG9kIHNob3VsZCBvbmx5IGJlIGNhbGxlZCB3aGVuXG4gKiB2YWx1ZSB0eXBlIGlzIE9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKi9cblxuT2JzZXJ2ZXIucHJvdG90eXBlLndhbGsgPSBmdW5jdGlvbiAob2JqKSB7XG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqKVxuICB2YXIgaSA9IGtleXMubGVuZ3RoXG4gIHdoaWxlIChpLS0pIHtcbiAgICB0aGlzLmNvbnZlcnQoa2V5c1tpXSwgb2JqW2tleXNbaV1dKVxuICB9XG59XG5cbi8qKlxuICogT2JzZXJ2ZSBhIGxpc3Qgb2YgQXJyYXkgaXRlbXMuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gaXRlbXNcbiAqL1xuXG5PYnNlcnZlci5wcm90b3R5cGUub2JzZXJ2ZUFycmF5ID0gZnVuY3Rpb24gKGl0ZW1zKSB7XG4gIHZhciBpID0gaXRlbXMubGVuZ3RoXG4gIHdoaWxlIChpLS0pIHtcbiAgICBPYnNlcnZlci5jcmVhdGUoaXRlbXNbaV0pXG4gIH1cbn1cblxuLyoqXG4gKiBDb252ZXJ0IGEgcHJvcGVydHkgaW50byBnZXR0ZXIvc2V0dGVyIHNvIHdlIGNhbiBlbWl0XG4gKiB0aGUgZXZlbnRzIHdoZW4gdGhlIHByb3BlcnR5IGlzIGFjY2Vzc2VkL2NoYW5nZWQuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGtleVxuICogQHBhcmFtIHsqfSB2YWxcbiAqL1xuXG5PYnNlcnZlci5wcm90b3R5cGUuY29udmVydCA9IGZ1bmN0aW9uIChrZXksIHZhbCkge1xuICBkZWZpbmVSZWFjdGl2ZSh0aGlzLnZhbHVlLCBrZXksIHZhbClcbn1cblxuLyoqXG4gKiBBZGQgYW4gb3duZXIgdm0sIHNvIHRoYXQgd2hlbiAkc2V0LyRkZWxldGUgbXV0YXRpb25zXG4gKiBoYXBwZW4gd2UgY2FuIG5vdGlmeSBvd25lciB2bXMgdG8gcHJveHkgdGhlIGtleXMgYW5kXG4gKiBkaWdlc3QgdGhlIHdhdGNoZXJzLiBUaGlzIGlzIG9ubHkgY2FsbGVkIHdoZW4gdGhlIG9iamVjdFxuICogaXMgb2JzZXJ2ZWQgYXMgYW4gaW5zdGFuY2UncyByb290ICRkYXRhLlxuICpcbiAqIEBwYXJhbSB7VnVlfSB2bVxuICovXG5cbk9ic2VydmVyLnByb3RvdHlwZS5hZGRWbSA9IGZ1bmN0aW9uICh2bSkge1xuICAodGhpcy52bXMgfHwgKHRoaXMudm1zID0gW10pKS5wdXNoKHZtKVxufVxuXG4vKipcbiAqIFJlbW92ZSBhbiBvd25lciB2bS4gVGhpcyBpcyBjYWxsZWQgd2hlbiB0aGUgb2JqZWN0IGlzXG4gKiBzd2FwcGVkIG91dCBhcyBhbiBpbnN0YW5jZSdzICRkYXRhIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge1Z1ZX0gdm1cbiAqL1xuXG5PYnNlcnZlci5wcm90b3R5cGUucmVtb3ZlVm0gPSBmdW5jdGlvbiAodm0pIHtcbiAgdGhpcy52bXMuJHJlbW92ZSh2bSlcbn1cblxuLy8gaGVscGVyc1xuXG4vKipcbiAqIEF1Z21lbnQgYW4gdGFyZ2V0IE9iamVjdCBvciBBcnJheSBieSBpbnRlcmNlcHRpbmdcbiAqIHRoZSBwcm90b3R5cGUgY2hhaW4gdXNpbmcgX19wcm90b19fXG4gKlxuICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IHRhcmdldFxuICogQHBhcmFtIHtPYmplY3R9IHByb3RvXG4gKi9cblxuZnVuY3Rpb24gcHJvdG9BdWdtZW50ICh0YXJnZXQsIHNyYykge1xuICB0YXJnZXQuX19wcm90b19fID0gc3JjXG59XG5cbi8qKlxuICogQXVnbWVudCBhbiB0YXJnZXQgT2JqZWN0IG9yIEFycmF5IGJ5IGRlZmluaW5nXG4gKiBoaWRkZW4gcHJvcGVydGllcy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdHxBcnJheX0gdGFyZ2V0XG4gKiBAcGFyYW0ge09iamVjdH0gcHJvdG9cbiAqL1xuXG5mdW5jdGlvbiBjb3B5QXVnbWVudCAodGFyZ2V0LCBzcmMsIGtleXMpIHtcbiAgdmFyIGkgPSBrZXlzLmxlbmd0aFxuICB2YXIga2V5XG4gIHdoaWxlIChpLS0pIHtcbiAgICBrZXkgPSBrZXlzW2ldXG4gICAgXy5kZWZpbmUodGFyZ2V0LCBrZXksIHNyY1trZXldKVxuICB9XG59XG5cbi8qKlxuICogRGVmaW5lIGEgcmVhY3RpdmUgcHJvcGVydHkgb24gYW4gT2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXlcbiAqIEBwYXJhbSB7Kn0gdmFsXG4gKi9cblxuZnVuY3Rpb24gZGVmaW5lUmVhY3RpdmUgKG9iaiwga2V5LCB2YWwpIHtcbiAgdmFyIGRlcCA9IG5ldyBEZXAoKVxuICB2YXIgY2hpbGRPYiA9IE9ic2VydmVyLmNyZWF0ZSh2YWwpXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gbWV0YUdldHRlciAoKSB7XG4gICAgICBpZiAoRGVwLnRhcmdldCkge1xuICAgICAgICBkZXAuZGVwZW5kKClcbiAgICAgICAgaWYgKGNoaWxkT2IpIHtcbiAgICAgICAgICBjaGlsZE9iLmRlcC5kZXBlbmQoKVxuICAgICAgICB9XG4gICAgICAgIGlmIChfLmlzQXJyYXkodmFsKSkge1xuICAgICAgICAgIGZvciAodmFyIGUsIGkgPSAwLCBsID0gdmFsLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgZSA9IHZhbFtpXVxuICAgICAgICAgICAgZSAmJiBlLl9fb2JfXyAmJiBlLl9fb2JfXy5kZXAuZGVwZW5kKClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB2YWxcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gbWV0YVNldHRlciAobmV3VmFsKSB7XG4gICAgICBpZiAobmV3VmFsID09PSB2YWwpIHJldHVyblxuICAgICAgdmFsID0gbmV3VmFsXG4gICAgICBjaGlsZE9iID0gT2JzZXJ2ZXIuY3JlYXRlKG5ld1ZhbClcbiAgICAgIGRlcC5ub3RpZnkoKVxuICAgIH1cbiAgfSlcbn1cblxuLy8gQXR0YWNoIHRvIHRoZSB1dGlsIG9iamVjdCBzbyBpdCBjYW4gYmUgdXNlZCBlbHNld2hlcmUuXG5fLmRlZmluZVJlYWN0aXZlID0gZGVmaW5lUmVhY3RpdmVcblxubW9kdWxlLmV4cG9ydHMgPSBPYnNlcnZlclxuIiwidmFyIF8gPSByZXF1aXJlKCcuLi91dGlsJylcbnZhciBDYWNoZSA9IHJlcXVpcmUoJy4uL2NhY2hlJylcbnZhciBjYWNoZSA9IG5ldyBDYWNoZSgxMDAwKVxudmFyIGZpbHRlclRva2VuUkUgPSAvW15cXHMnXCJdK3wnW14nXSonfFwiW15cIl0qXCIvZ1xudmFyIHJlc2VydmVkQXJnUkUgPSAvXmluJHxeLT9cXGQrL1xuXG4vKipcbiAqIFBhcnNlciBzdGF0ZVxuICovXG5cbnZhciBzdHIsIGRpclxudmFyIGMsIGksIGwsIGxhc3RGaWx0ZXJJbmRleFxudmFyIGluU2luZ2xlLCBpbkRvdWJsZSwgY3VybHksIHNxdWFyZSwgcGFyZW5cblxuLyoqXG4gKiBQdXNoIGEgZmlsdGVyIHRvIHRoZSBjdXJyZW50IGRpcmVjdGl2ZSBvYmplY3RcbiAqL1xuXG5mdW5jdGlvbiBwdXNoRmlsdGVyICgpIHtcbiAgdmFyIGV4cCA9IHN0ci5zbGljZShsYXN0RmlsdGVySW5kZXgsIGkpLnRyaW0oKVxuICB2YXIgZmlsdGVyXG4gIGlmIChleHApIHtcbiAgICBmaWx0ZXIgPSB7fVxuICAgIHZhciB0b2tlbnMgPSBleHAubWF0Y2goZmlsdGVyVG9rZW5SRSlcbiAgICBmaWx0ZXIubmFtZSA9IHRva2Vuc1swXVxuICAgIGlmICh0b2tlbnMubGVuZ3RoID4gMSkge1xuICAgICAgZmlsdGVyLmFyZ3MgPSB0b2tlbnMuc2xpY2UoMSkubWFwKHByb2Nlc3NGaWx0ZXJBcmcpXG4gICAgfVxuICB9XG4gIGlmIChmaWx0ZXIpIHtcbiAgICAoZGlyLmZpbHRlcnMgPSBkaXIuZmlsdGVycyB8fCBbXSkucHVzaChmaWx0ZXIpXG4gIH1cbiAgbGFzdEZpbHRlckluZGV4ID0gaSArIDFcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBhbiBhcmd1bWVudCBpcyBkeW5hbWljIGFuZCBzdHJpcCBxdW90ZXMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGFyZ1xuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5cbmZ1bmN0aW9uIHByb2Nlc3NGaWx0ZXJBcmcgKGFyZykge1xuICBpZiAocmVzZXJ2ZWRBcmdSRS50ZXN0KGFyZykpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IF8udG9OdW1iZXIoYXJnKSxcbiAgICAgIGR5bmFtaWM6IGZhbHNlXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBzdHJpcHBlZCA9IF8uc3RyaXBRdW90ZXMoYXJnKVxuICAgIHZhciBkeW5hbWljID0gc3RyaXBwZWQgPT09IGFyZ1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogZHluYW1pYyA/IGFyZyA6IHN0cmlwcGVkLFxuICAgICAgZHluYW1pYzogZHluYW1pY1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIFBhcnNlIGEgZGlyZWN0aXZlIHZhbHVlIGFuZCBleHRyYWN0IHRoZSBleHByZXNzaW9uXG4gKiBhbmQgaXRzIGZpbHRlcnMgaW50byBhIGRlc2NyaXB0b3IuXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiBcImEgKyAxIHwgdXBwZXJjYXNlXCIgd2lsbCB5aWVsZDpcbiAqIHtcbiAqICAgZXhwcmVzc2lvbjogJ2EgKyAxJyxcbiAqICAgZmlsdGVyczogW1xuICogICAgIHsgbmFtZTogJ3VwcGVyY2FzZScsIGFyZ3M6IG51bGwgfVxuICogICBdXG4gKiB9XG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5cbmV4cG9ydHMucGFyc2UgPSBmdW5jdGlvbiAocykge1xuXG4gIHZhciBoaXQgPSBjYWNoZS5nZXQocylcbiAgaWYgKGhpdCkge1xuICAgIHJldHVybiBoaXRcbiAgfVxuXG4gIC8vIHJlc2V0IHBhcnNlciBzdGF0ZVxuICBzdHIgPSBzXG4gIGluU2luZ2xlID0gaW5Eb3VibGUgPSBmYWxzZVxuICBjdXJseSA9IHNxdWFyZSA9IHBhcmVuID0gMFxuICBsYXN0RmlsdGVySW5kZXggPSAwXG4gIGRpciA9IHt9XG5cbiAgZm9yIChpID0gMCwgbCA9IHN0ci5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBjID0gc3RyLmNoYXJDb2RlQXQoaSlcbiAgICBpZiAoaW5TaW5nbGUpIHtcbiAgICAgIC8vIGNoZWNrIHNpbmdsZSBxdW90ZVxuICAgICAgaWYgKGMgPT09IDB4MjcpIGluU2luZ2xlID0gIWluU2luZ2xlXG4gICAgfSBlbHNlIGlmIChpbkRvdWJsZSkge1xuICAgICAgLy8gY2hlY2sgZG91YmxlIHF1b3RlXG4gICAgICBpZiAoYyA9PT0gMHgyMikgaW5Eb3VibGUgPSAhaW5Eb3VibGVcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgYyA9PT0gMHg3QyAmJiAvLyBwaXBlXG4gICAgICBzdHIuY2hhckNvZGVBdChpICsgMSkgIT09IDB4N0MgJiZcbiAgICAgIHN0ci5jaGFyQ29kZUF0KGkgLSAxKSAhPT0gMHg3Q1xuICAgICkge1xuICAgICAgaWYgKGRpci5leHByZXNzaW9uID09IG51bGwpIHtcbiAgICAgICAgLy8gZmlyc3QgZmlsdGVyLCBlbmQgb2YgZXhwcmVzc2lvblxuICAgICAgICBsYXN0RmlsdGVySW5kZXggPSBpICsgMVxuICAgICAgICBkaXIuZXhwcmVzc2lvbiA9IHN0ci5zbGljZSgwLCBpKS50cmltKClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGFscmVhZHkgaGFzIGZpbHRlclxuICAgICAgICBwdXNoRmlsdGVyKClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc3dpdGNoIChjKSB7XG4gICAgICAgIGNhc2UgMHgyMjogaW5Eb3VibGUgPSB0cnVlOyBicmVhayAvLyBcIlxuICAgICAgICBjYXNlIDB4Mjc6IGluU2luZ2xlID0gdHJ1ZTsgYnJlYWsgLy8gJ1xuICAgICAgICBjYXNlIDB4Mjg6IHBhcmVuKys7IGJyZWFrICAgICAgICAgLy8gKFxuICAgICAgICBjYXNlIDB4Mjk6IHBhcmVuLS07IGJyZWFrICAgICAgICAgLy8gKVxuICAgICAgICBjYXNlIDB4NUI6IHNxdWFyZSsrOyBicmVhayAgICAgICAgLy8gW1xuICAgICAgICBjYXNlIDB4NUQ6IHNxdWFyZS0tOyBicmVhayAgICAgICAgLy8gXVxuICAgICAgICBjYXNlIDB4N0I6IGN1cmx5Kys7IGJyZWFrICAgICAgICAgLy8ge1xuICAgICAgICBjYXNlIDB4N0Q6IGN1cmx5LS07IGJyZWFrICAgICAgICAgLy8gfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChkaXIuZXhwcmVzc2lvbiA9PSBudWxsKSB7XG4gICAgZGlyLmV4cHJlc3Npb24gPSBzdHIuc2xpY2UoMCwgaSkudHJpbSgpXG4gIH0gZWxzZSBpZiAobGFzdEZpbHRlckluZGV4ICE9PSAwKSB7XG4gICAgcHVzaEZpbHRlcigpXG4gIH1cblxuICBjYWNoZS5wdXQocywgZGlyKVxuICByZXR1cm4gZGlyXG59XG4iLCJ2YXIgXyA9IHJlcXVpcmUoJy4uL3V0aWwnKVxudmFyIFBhdGggPSByZXF1aXJlKCcuL3BhdGgnKVxudmFyIENhY2hlID0gcmVxdWlyZSgnLi4vY2FjaGUnKVxudmFyIGV4cHJlc3Npb25DYWNoZSA9IG5ldyBDYWNoZSgxMDAwKVxuXG52YXIgYWxsb3dlZEtleXdvcmRzID1cbiAgJ01hdGgsRGF0ZSx0aGlzLHRydWUsZmFsc2UsbnVsbCx1bmRlZmluZWQsSW5maW5pdHksTmFOLCcgK1xuICAnaXNOYU4saXNGaW5pdGUsZGVjb2RlVVJJLGRlY29kZVVSSUNvbXBvbmVudCxlbmNvZGVVUkksJyArXG4gICdlbmNvZGVVUklDb21wb25lbnQscGFyc2VJbnQscGFyc2VGbG9hdCdcbnZhciBhbGxvd2VkS2V5d29yZHNSRSA9XG4gIG5ldyBSZWdFeHAoJ14oJyArIGFsbG93ZWRLZXl3b3Jkcy5yZXBsYWNlKC8sL2csICdcXFxcYnwnKSArICdcXFxcYiknKVxuXG4vLyBrZXl3b3JkcyB0aGF0IGRvbid0IG1ha2Ugc2Vuc2UgaW5zaWRlIGV4cHJlc3Npb25zXG52YXIgaW1wcm9wZXJLZXl3b3JkcyA9XG4gICdicmVhayxjYXNlLGNsYXNzLGNhdGNoLGNvbnN0LGNvbnRpbnVlLGRlYnVnZ2VyLGRlZmF1bHQsJyArXG4gICdkZWxldGUsZG8sZWxzZSxleHBvcnQsZXh0ZW5kcyxmaW5hbGx5LGZvcixmdW5jdGlvbixpZiwnICtcbiAgJ2ltcG9ydCxpbixpbnN0YW5jZW9mLGxldCxyZXR1cm4sc3VwZXIsc3dpdGNoLHRocm93LHRyeSwnICtcbiAgJ3Zhcix3aGlsZSx3aXRoLHlpZWxkLGVudW0sYXdhaXQsaW1wbGVtZW50cyxwYWNrYWdlLCcgK1xuICAncHJvY3RlY3RlZCxzdGF0aWMsaW50ZXJmYWNlLHByaXZhdGUscHVibGljJ1xudmFyIGltcHJvcGVyS2V5d29yZHNSRSA9XG4gIG5ldyBSZWdFeHAoJ14oJyArIGltcHJvcGVyS2V5d29yZHMucmVwbGFjZSgvLC9nLCAnXFxcXGJ8JykgKyAnXFxcXGIpJylcblxudmFyIHdzUkUgPSAvXFxzL2dcbnZhciBuZXdsaW5lUkUgPSAvXFxuL2dcbnZhciBzYXZlUkUgPSAvW1xceyxdXFxzKltcXHdcXCRfXStcXHMqOnwoJ1teJ10qJ3xcIlteXCJdKlwiKXxuZXcgfHR5cGVvZiB8dm9pZCAvZ1xudmFyIHJlc3RvcmVSRSA9IC9cIihcXGQrKVwiL2dcbnZhciBwYXRoVGVzdFJFID0gL15bQS1aYS16XyRdW1xcdyRdKihcXC5bQS1aYS16XyRdW1xcdyRdKnxcXFsnLio/J1xcXXxcXFtcIi4qP1wiXFxdfFxcW1xcZCtcXF18XFxbW0EtWmEtel8kXVtcXHckXSpcXF0pKiQvXG52YXIgcGF0aFJlcGxhY2VSRSA9IC9bXlxcdyRcXC5dKFtBLVphLXpfJF1bXFx3JF0qKFxcLltBLVphLXpfJF1bXFx3JF0qfFxcWycuKj8nXFxdfFxcW1wiLio/XCJcXF0pKikvZ1xudmFyIGJvb2xlYW5MaXRlcmFsUkUgPSAvXih0cnVlfGZhbHNlKSQvXG5cbi8qKlxuICogU2F2ZSAvIFJld3JpdGUgLyBSZXN0b3JlXG4gKlxuICogV2hlbiByZXdyaXRpbmcgcGF0aHMgZm91bmQgaW4gYW4gZXhwcmVzc2lvbiwgaXQgaXNcbiAqIHBvc3NpYmxlIGZvciB0aGUgc2FtZSBsZXR0ZXIgc2VxdWVuY2VzIHRvIGJlIGZvdW5kIGluXG4gKiBzdHJpbmdzIGFuZCBPYmplY3QgbGl0ZXJhbCBwcm9wZXJ0eSBrZXlzLiBUaGVyZWZvcmUgd2VcbiAqIHJlbW92ZSBhbmQgc3RvcmUgdGhlc2UgcGFydHMgaW4gYSB0ZW1wb3JhcnkgYXJyYXksIGFuZFxuICogcmVzdG9yZSB0aGVtIGFmdGVyIHRoZSBwYXRoIHJld3JpdGUuXG4gKi9cblxudmFyIHNhdmVkID0gW11cblxuLyoqXG4gKiBTYXZlIHJlcGxhY2VyXG4gKlxuICogVGhlIHNhdmUgcmVnZXggY2FuIG1hdGNoIHR3byBwb3NzaWJsZSBjYXNlczpcbiAqIDEuIEFuIG9wZW5pbmcgb2JqZWN0IGxpdGVyYWxcbiAqIDIuIEEgc3RyaW5nXG4gKiBJZiBtYXRjaGVkIGFzIGEgcGxhaW4gc3RyaW5nLCB3ZSBuZWVkIHRvIGVzY2FwZSBpdHNcbiAqIG5ld2xpbmVzLCBzaW5jZSB0aGUgc3RyaW5nIG5lZWRzIHRvIGJlIHByZXNlcnZlZCB3aGVuXG4gKiBnZW5lcmF0aW5nIHRoZSBmdW5jdGlvbiBib2R5LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBpc1N0cmluZyAtIHN0ciBpZiBtYXRjaGVkIGFzIGEgc3RyaW5nXG4gKiBAcmV0dXJuIHtTdHJpbmd9IC0gcGxhY2Vob2xkZXIgd2l0aCBpbmRleFxuICovXG5cbmZ1bmN0aW9uIHNhdmUgKHN0ciwgaXNTdHJpbmcpIHtcbiAgdmFyIGkgPSBzYXZlZC5sZW5ndGhcbiAgc2F2ZWRbaV0gPSBpc1N0cmluZ1xuICAgID8gc3RyLnJlcGxhY2UobmV3bGluZVJFLCAnXFxcXG4nKVxuICAgIDogc3RyXG4gIHJldHVybiAnXCInICsgaSArICdcIidcbn1cblxuLyoqXG4gKiBQYXRoIHJld3JpdGUgcmVwbGFjZXJcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gcmF3XG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cblxuZnVuY3Rpb24gcmV3cml0ZSAocmF3KSB7XG4gIHZhciBjID0gcmF3LmNoYXJBdCgwKVxuICB2YXIgcGF0aCA9IHJhdy5zbGljZSgxKVxuICBpZiAoYWxsb3dlZEtleXdvcmRzUkUudGVzdChwYXRoKSkge1xuICAgIHJldHVybiByYXdcbiAgfSBlbHNlIHtcbiAgICBwYXRoID0gcGF0aC5pbmRleE9mKCdcIicpID4gLTFcbiAgICAgID8gcGF0aC5yZXBsYWNlKHJlc3RvcmVSRSwgcmVzdG9yZSlcbiAgICAgIDogcGF0aFxuICAgIHJldHVybiBjICsgJ3Njb3BlLicgKyBwYXRoXG4gIH1cbn1cblxuLyoqXG4gKiBSZXN0b3JlIHJlcGxhY2VyXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHBhcmFtIHtTdHJpbmd9IGkgLSBtYXRjaGVkIHNhdmUgaW5kZXhcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuXG5mdW5jdGlvbiByZXN0b3JlIChzdHIsIGkpIHtcbiAgcmV0dXJuIHNhdmVkW2ldXG59XG5cbi8qKlxuICogUmV3cml0ZSBhbiBleHByZXNzaW9uLCBwcmVmaXhpbmcgYWxsIHBhdGggYWNjZXNzb3JzIHdpdGhcbiAqIGBzY29wZS5gIGFuZCBnZW5lcmF0ZSBnZXR0ZXIvc2V0dGVyIGZ1bmN0aW9ucy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXhwXG4gKiBAcGFyYW0ge0Jvb2xlYW59IG5lZWRTZXRcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICovXG5cbmZ1bmN0aW9uIGNvbXBpbGVFeHBGbnMgKGV4cCwgbmVlZFNldCkge1xuICBpZiAoaW1wcm9wZXJLZXl3b3Jkc1JFLnRlc3QoZXhwKSkge1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgXy53YXJuKFxuICAgICAgJ0F2b2lkIHVzaW5nIHJlc2VydmVkIGtleXdvcmRzIGluIGV4cHJlc3Npb246ICcgKyBleHBcbiAgICApXG4gIH1cbiAgLy8gcmVzZXQgc3RhdGVcbiAgc2F2ZWQubGVuZ3RoID0gMFxuICAvLyBzYXZlIHN0cmluZ3MgYW5kIG9iamVjdCBsaXRlcmFsIGtleXNcbiAgdmFyIGJvZHkgPSBleHBcbiAgICAucmVwbGFjZShzYXZlUkUsIHNhdmUpXG4gICAgLnJlcGxhY2Uod3NSRSwgJycpXG4gIC8vIHJld3JpdGUgYWxsIHBhdGhzXG4gIC8vIHBhZCAxIHNwYWNlIGhlcmUgYmVjYXVlIHRoZSByZWdleCBtYXRjaGVzIDEgZXh0cmEgY2hhclxuICBib2R5ID0gKCcgJyArIGJvZHkpXG4gICAgLnJlcGxhY2UocGF0aFJlcGxhY2VSRSwgcmV3cml0ZSlcbiAgICAucmVwbGFjZShyZXN0b3JlUkUsIHJlc3RvcmUpXG4gIHZhciBnZXR0ZXIgPSBtYWtlR2V0dGVyKGJvZHkpXG4gIGlmIChnZXR0ZXIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZ2V0OiBnZXR0ZXIsXG4gICAgICBib2R5OiBib2R5LFxuICAgICAgc2V0OiBuZWVkU2V0XG4gICAgICAgID8gbWFrZVNldHRlcihib2R5KVxuICAgICAgICA6IG51bGxcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBDb21waWxlIGdldHRlciBzZXR0ZXJzIGZvciBhIHNpbXBsZSBwYXRoLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBleHBcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICovXG5cbmZ1bmN0aW9uIGNvbXBpbGVQYXRoRm5zIChleHApIHtcbiAgdmFyIGdldHRlciwgcGF0aFxuICBpZiAoZXhwLmluZGV4T2YoJ1snKSA8IDApIHtcbiAgICAvLyByZWFsbHkgc2ltcGxlIHBhdGhcbiAgICBwYXRoID0gZXhwLnNwbGl0KCcuJylcbiAgICBwYXRoLnJhdyA9IGV4cFxuICAgIGdldHRlciA9IFBhdGguY29tcGlsZUdldHRlcihwYXRoKVxuICB9IGVsc2Uge1xuICAgIC8vIGRvIHRoZSByZWFsIHBhcnNpbmdcbiAgICBwYXRoID0gUGF0aC5wYXJzZShleHApXG4gICAgZ2V0dGVyID0gcGF0aC5nZXRcbiAgfVxuICByZXR1cm4ge1xuICAgIGdldDogZ2V0dGVyLFxuICAgIC8vIGFsd2F5cyBnZW5lcmF0ZSBzZXR0ZXIgZm9yIHNpbXBsZSBwYXRoc1xuICAgIHNldDogZnVuY3Rpb24gKG9iaiwgdmFsKSB7XG4gICAgICBQYXRoLnNldChvYmosIHBhdGgsIHZhbClcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBCdWlsZCBhIGdldHRlciBmdW5jdGlvbi4gUmVxdWlyZXMgZXZhbC5cbiAqXG4gKiBXZSBpc29sYXRlIHRoZSB0cnkvY2F0Y2ggc28gaXQgZG9lc24ndCBhZmZlY3QgdGhlXG4gKiBvcHRpbWl6YXRpb24gb2YgdGhlIHBhcnNlIGZ1bmN0aW9uIHdoZW4gaXQgaXMgbm90IGNhbGxlZC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gYm9keVxuICogQHJldHVybiB7RnVuY3Rpb258dW5kZWZpbmVkfVxuICovXG5cbmZ1bmN0aW9uIG1ha2VHZXR0ZXIgKGJvZHkpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gbmV3IEZ1bmN0aW9uKCdzY29wZScsICdyZXR1cm4gJyArIGJvZHkgKyAnOycpXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIF8ud2FybihcbiAgICAgICdJbnZhbGlkIGV4cHJlc3Npb24uICcgK1xuICAgICAgJ0dlbmVyYXRlZCBmdW5jdGlvbiBib2R5OiAnICsgYm9keVxuICAgIClcbiAgfVxufVxuXG4vKipcbiAqIEJ1aWxkIGEgc2V0dGVyIGZ1bmN0aW9uLlxuICpcbiAqIFRoaXMgaXMgb25seSBuZWVkZWQgaW4gcmFyZSBzaXR1YXRpb25zIGxpa2UgXCJhW2JdXCIgd2hlcmVcbiAqIGEgc2V0dGFibGUgcGF0aCByZXF1aXJlcyBkeW5hbWljIGV2YWx1YXRpb24uXG4gKlxuICogVGhpcyBzZXR0ZXIgZnVuY3Rpb24gbWF5IHRocm93IGVycm9yIHdoZW4gY2FsbGVkIGlmIHRoZVxuICogZXhwcmVzc2lvbiBib2R5IGlzIG5vdCBhIHZhbGlkIGxlZnQtaGFuZCBleHByZXNzaW9uIGluXG4gKiBhc3NpZ25tZW50LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBib2R5XG4gKiBAcmV0dXJuIHtGdW5jdGlvbnx1bmRlZmluZWR9XG4gKi9cblxuZnVuY3Rpb24gbWFrZVNldHRlciAoYm9keSkge1xuICB0cnkge1xuICAgIHJldHVybiBuZXcgRnVuY3Rpb24oJ3Njb3BlJywgJ3ZhbHVlJywgYm9keSArICc9dmFsdWU7JylcbiAgfSBjYXRjaCAoZSkge1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgXy53YXJuKFxuICAgICAgJ0ludmFsaWQgc2V0dGVyIGZ1bmN0aW9uIGJvZHk6ICcgKyBib2R5XG4gICAgKVxuICB9XG59XG5cbi8qKlxuICogQ2hlY2sgZm9yIHNldHRlciBleGlzdGVuY2Ugb24gYSBjYWNoZSBoaXQuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaGl0XG4gKi9cblxuZnVuY3Rpb24gY2hlY2tTZXR0ZXIgKGhpdCkge1xuICBpZiAoIWhpdC5zZXQpIHtcbiAgICBoaXQuc2V0ID0gbWFrZVNldHRlcihoaXQuYm9keSlcbiAgfVxufVxuXG4vKipcbiAqIFBhcnNlIGFuIGV4cHJlc3Npb24gaW50byByZS13cml0dGVuIGdldHRlci9zZXR0ZXJzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBleHBcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gbmVlZFNldFxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKi9cblxuZXhwb3J0cy5wYXJzZSA9IGZ1bmN0aW9uIChleHAsIG5lZWRTZXQpIHtcbiAgZXhwID0gZXhwLnRyaW0oKVxuICAvLyB0cnkgY2FjaGVcbiAgdmFyIGhpdCA9IGV4cHJlc3Npb25DYWNoZS5nZXQoZXhwKVxuICBpZiAoaGl0KSB7XG4gICAgaWYgKG5lZWRTZXQpIHtcbiAgICAgIGNoZWNrU2V0dGVyKGhpdClcbiAgICB9XG4gICAgcmV0dXJuIGhpdFxuICB9XG4gIC8vIHdlIGRvIGEgc2ltcGxlIHBhdGggY2hlY2sgdG8gb3B0aW1pemUgZm9yIHRoZW0uXG4gIC8vIHRoZSBjaGVjayBmYWlscyB2YWxpZCBwYXRocyB3aXRoIHVudXNhbCB3aGl0ZXNwYWNlcyxcbiAgLy8gYnV0IHRoYXQncyB0b28gcmFyZSBhbmQgd2UgZG9uJ3QgY2FyZS5cbiAgLy8gYWxzbyBza2lwIGJvb2xlYW4gbGl0ZXJhbHMgYW5kIHBhdGhzIHRoYXQgc3RhcnQgd2l0aFxuICAvLyBnbG9iYWwgXCJNYXRoXCJcbiAgdmFyIHJlcyA9IGV4cG9ydHMuaXNTaW1wbGVQYXRoKGV4cClcbiAgICA/IGNvbXBpbGVQYXRoRm5zKGV4cClcbiAgICA6IGNvbXBpbGVFeHBGbnMoZXhwLCBuZWVkU2V0KVxuICBleHByZXNzaW9uQ2FjaGUucHV0KGV4cCwgcmVzKVxuICByZXR1cm4gcmVzXG59XG5cbi8qKlxuICogQ2hlY2sgaWYgYW4gZXhwcmVzc2lvbiBpcyBhIHNpbXBsZSBwYXRoLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBleHBcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cblxuZXhwb3J0cy5pc1NpbXBsZVBhdGggPSBmdW5jdGlvbiAoZXhwKSB7XG4gIHJldHVybiBwYXRoVGVzdFJFLnRlc3QoZXhwKSAmJlxuICAgIC8vIGRvbid0IHRyZWF0IHRydWUvZmFsc2UgYXMgcGF0aHNcbiAgICAhYm9vbGVhbkxpdGVyYWxSRS50ZXN0KGV4cCkgJiZcbiAgICAvLyBNYXRoIGNvbnN0YW50cyBlLmcuIE1hdGguUEksIE1hdGguRSBldGMuXG4gICAgZXhwLnNsaWNlKDAsIDUpICE9PSAnTWF0aC4nXG59XG4iLCJ2YXIgXyA9IHJlcXVpcmUoJy4uL3V0aWwnKVxudmFyIENhY2hlID0gcmVxdWlyZSgnLi4vY2FjaGUnKVxudmFyIHBhdGhDYWNoZSA9IG5ldyBDYWNoZSgxMDAwKVxudmFyIGlkZW50UkUgPSBleHBvcnRzLmlkZW50UkUgPSAvXlskX2EtekEtWl0rW1xcdyRdKiQvXG5cbi8vIGFjdGlvbnNcbnZhciBBUFBFTkQgPSAwXG52YXIgUFVTSCA9IDFcblxuLy8gc3RhdGVzXG52YXIgQkVGT1JFX1BBVEggPSAwXG52YXIgSU5fUEFUSCA9IDFcbnZhciBCRUZPUkVfSURFTlQgPSAyXG52YXIgSU5fSURFTlQgPSAzXG52YXIgQkVGT1JFX0VMRU1FTlQgPSA0XG52YXIgQUZURVJfWkVSTyA9IDVcbnZhciBJTl9JTkRFWCA9IDZcbnZhciBJTl9TSU5HTEVfUVVPVEUgPSA3XG52YXIgSU5fRE9VQkxFX1FVT1RFID0gOFxudmFyIElOX1NVQl9QQVRIID0gOVxudmFyIEFGVEVSX0VMRU1FTlQgPSAxMFxudmFyIEFGVEVSX1BBVEggPSAxMVxudmFyIEVSUk9SID0gMTJcblxudmFyIHBhdGhTdGF0ZU1hY2hpbmUgPSBbXVxuXG5wYXRoU3RhdGVNYWNoaW5lW0JFRk9SRV9QQVRIXSA9IHtcbiAgJ3dzJzogW0JFRk9SRV9QQVRIXSxcbiAgJ2lkZW50JzogW0lOX0lERU5ULCBBUFBFTkRdLFxuICAnWyc6IFtCRUZPUkVfRUxFTUVOVF0sXG4gICdlb2YnOiBbQUZURVJfUEFUSF1cbn1cblxucGF0aFN0YXRlTWFjaGluZVtJTl9QQVRIXSA9IHtcbiAgJ3dzJzogW0lOX1BBVEhdLFxuICAnLic6IFtCRUZPUkVfSURFTlRdLFxuICAnWyc6IFtCRUZPUkVfRUxFTUVOVF0sXG4gICdlb2YnOiBbQUZURVJfUEFUSF1cbn1cblxucGF0aFN0YXRlTWFjaGluZVtCRUZPUkVfSURFTlRdID0ge1xuICAnd3MnOiBbQkVGT1JFX0lERU5UXSxcbiAgJ2lkZW50JzogW0lOX0lERU5ULCBBUFBFTkRdXG59XG5cbnBhdGhTdGF0ZU1hY2hpbmVbSU5fSURFTlRdID0ge1xuICAnaWRlbnQnOiBbSU5fSURFTlQsIEFQUEVORF0sXG4gICcwJzogW0lOX0lERU5ULCBBUFBFTkRdLFxuICAnbnVtYmVyJzogW0lOX0lERU5ULCBBUFBFTkRdLFxuICAnd3MnOiBbSU5fUEFUSCwgUFVTSF0sXG4gICcuJzogW0JFRk9SRV9JREVOVCwgUFVTSF0sXG4gICdbJzogW0JFRk9SRV9FTEVNRU5ULCBQVVNIXSxcbiAgJ2VvZic6IFtBRlRFUl9QQVRILCBQVVNIXVxufVxuXG5wYXRoU3RhdGVNYWNoaW5lW0JFRk9SRV9FTEVNRU5UXSA9IHtcbiAgJ3dzJzogW0JFRk9SRV9FTEVNRU5UXSxcbiAgJzAnOiBbQUZURVJfWkVSTywgQVBQRU5EXSxcbiAgJ251bWJlcic6IFtJTl9JTkRFWCwgQVBQRU5EXSxcbiAgXCInXCI6IFtJTl9TSU5HTEVfUVVPVEUsIEFQUEVORCwgJyddLFxuICAnXCInOiBbSU5fRE9VQkxFX1FVT1RFLCBBUFBFTkQsICcnXSxcbiAgJ2lkZW50JzogW0lOX1NVQl9QQVRILCBBUFBFTkQsICcqJ11cbn1cblxucGF0aFN0YXRlTWFjaGluZVtBRlRFUl9aRVJPXSA9IHtcbiAgJ3dzJzogW0FGVEVSX0VMRU1FTlQsIFBVU0hdLFxuICAnXSc6IFtJTl9QQVRILCBQVVNIXVxufVxuXG5wYXRoU3RhdGVNYWNoaW5lW0lOX0lOREVYXSA9IHtcbiAgJzAnOiBbSU5fSU5ERVgsIEFQUEVORF0sXG4gICdudW1iZXInOiBbSU5fSU5ERVgsIEFQUEVORF0sXG4gICd3cyc6IFtBRlRFUl9FTEVNRU5UXSxcbiAgJ10nOiBbSU5fUEFUSCwgUFVTSF1cbn1cblxucGF0aFN0YXRlTWFjaGluZVtJTl9TSU5HTEVfUVVPVEVdID0ge1xuICBcIidcIjogW0FGVEVSX0VMRU1FTlRdLFxuICAnZW9mJzogRVJST1IsXG4gICdlbHNlJzogW0lOX1NJTkdMRV9RVU9URSwgQVBQRU5EXVxufVxuXG5wYXRoU3RhdGVNYWNoaW5lW0lOX0RPVUJMRV9RVU9URV0gPSB7XG4gICdcIic6IFtBRlRFUl9FTEVNRU5UXSxcbiAgJ2VvZic6IEVSUk9SLFxuICAnZWxzZSc6IFtJTl9ET1VCTEVfUVVPVEUsIEFQUEVORF1cbn1cblxucGF0aFN0YXRlTWFjaGluZVtJTl9TVUJfUEFUSF0gPSB7XG4gICdpZGVudCc6IFtJTl9TVUJfUEFUSCwgQVBQRU5EXSxcbiAgJzAnOiBbSU5fU1VCX1BBVEgsIEFQUEVORF0sXG4gICdudW1iZXInOiBbSU5fU1VCX1BBVEgsIEFQUEVORF0sXG4gICd3cyc6IFtBRlRFUl9FTEVNRU5UXSxcbiAgJ10nOiBbSU5fUEFUSCwgUFVTSF1cbn1cblxucGF0aFN0YXRlTWFjaGluZVtBRlRFUl9FTEVNRU5UXSA9IHtcbiAgJ3dzJzogW0FGVEVSX0VMRU1FTlRdLFxuICAnXSc6IFtJTl9QQVRILCBQVVNIXVxufVxuXG4vKipcbiAqIERldGVybWluZSB0aGUgdHlwZSBvZiBhIGNoYXJhY3RlciBpbiBhIGtleXBhdGguXG4gKlxuICogQHBhcmFtIHtDaGFyfSBjaFxuICogQHJldHVybiB7U3RyaW5nfSB0eXBlXG4gKi9cblxuZnVuY3Rpb24gZ2V0UGF0aENoYXJUeXBlIChjaCkge1xuICBpZiAoY2ggPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiAnZW9mJ1xuICB9XG5cbiAgdmFyIGNvZGUgPSBjaC5jaGFyQ29kZUF0KDApXG5cbiAgc3dpdGNoIChjb2RlKSB7XG4gICAgY2FzZSAweDVCOiAvLyBbXG4gICAgY2FzZSAweDVEOiAvLyBdXG4gICAgY2FzZSAweDJFOiAvLyAuXG4gICAgY2FzZSAweDIyOiAvLyBcIlxuICAgIGNhc2UgMHgyNzogLy8gJ1xuICAgIGNhc2UgMHgzMDogLy8gMFxuICAgICAgcmV0dXJuIGNoXG5cbiAgICBjYXNlIDB4NUY6IC8vIF9cbiAgICBjYXNlIDB4MjQ6IC8vICRcbiAgICAgIHJldHVybiAnaWRlbnQnXG5cbiAgICBjYXNlIDB4MjA6IC8vIFNwYWNlXG4gICAgY2FzZSAweDA5OiAvLyBUYWJcbiAgICBjYXNlIDB4MEE6IC8vIE5ld2xpbmVcbiAgICBjYXNlIDB4MEQ6IC8vIFJldHVyblxuICAgIGNhc2UgMHhBMDogIC8vIE5vLWJyZWFrIHNwYWNlXG4gICAgY2FzZSAweEZFRkY6ICAvLyBCeXRlIE9yZGVyIE1hcmtcbiAgICBjYXNlIDB4MjAyODogIC8vIExpbmUgU2VwYXJhdG9yXG4gICAgY2FzZSAweDIwMjk6ICAvLyBQYXJhZ3JhcGggU2VwYXJhdG9yXG4gICAgICByZXR1cm4gJ3dzJ1xuICB9XG5cbiAgLy8gYS16LCBBLVpcbiAgaWYgKFxuICAgIChjb2RlID49IDB4NjEgJiYgY29kZSA8PSAweDdBKSB8fFxuICAgIChjb2RlID49IDB4NDEgJiYgY29kZSA8PSAweDVBKVxuICApIHtcbiAgICByZXR1cm4gJ2lkZW50J1xuICB9XG5cbiAgLy8gMS05XG4gIGlmIChjb2RlID49IDB4MzEgJiYgY29kZSA8PSAweDM5KSB7XG4gICAgcmV0dXJuICdudW1iZXInXG4gIH1cblxuICByZXR1cm4gJ2Vsc2UnXG59XG5cbi8qKlxuICogUGFyc2UgYSBzdHJpbmcgcGF0aCBpbnRvIGFuIGFycmF5IG9mIHNlZ21lbnRzXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHBhdGhcbiAqIEByZXR1cm4ge0FycmF5fHVuZGVmaW5lZH1cbiAqL1xuXG5mdW5jdGlvbiBwYXJzZVBhdGggKHBhdGgpIHtcbiAgdmFyIGtleXMgPSBbXVxuICB2YXIgaW5kZXggPSAtMVxuICB2YXIgbW9kZSA9IEJFRk9SRV9QQVRIXG4gIHZhciBjLCBuZXdDaGFyLCBrZXksIHR5cGUsIHRyYW5zaXRpb24sIGFjdGlvbiwgdHlwZU1hcFxuXG4gIHZhciBhY3Rpb25zID0gW11cbiAgYWN0aW9uc1tQVVNIXSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoa2V5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBrZXlzLnB1c2goa2V5KVxuICAgIGtleSA9IHVuZGVmaW5lZFxuICB9XG4gIGFjdGlvbnNbQVBQRU5EXSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoa2V5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGtleSA9IG5ld0NoYXJcbiAgICB9IGVsc2Uge1xuICAgICAga2V5ICs9IG5ld0NoYXJcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBtYXliZVVuZXNjYXBlUXVvdGUgKCkge1xuICAgIHZhciBuZXh0Q2hhciA9IHBhdGhbaW5kZXggKyAxXVxuICAgIGlmICgobW9kZSA9PT0gSU5fU0lOR0xFX1FVT1RFICYmIG5leHRDaGFyID09PSBcIidcIikgfHxcbiAgICAgICAgKG1vZGUgPT09IElOX0RPVUJMRV9RVU9URSAmJiBuZXh0Q2hhciA9PT0gJ1wiJykpIHtcbiAgICAgIGluZGV4KytcbiAgICAgIG5ld0NoYXIgPSBuZXh0Q2hhclxuICAgICAgYWN0aW9uc1tBUFBFTkRdKClcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICB9XG5cbiAgd2hpbGUgKG1vZGUgIT0gbnVsbCkge1xuICAgIGluZGV4KytcbiAgICBjID0gcGF0aFtpbmRleF1cblxuICAgIGlmIChjID09PSAnXFxcXCcgJiYgbWF5YmVVbmVzY2FwZVF1b3RlKCkpIHtcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgdHlwZSA9IGdldFBhdGhDaGFyVHlwZShjKVxuICAgIHR5cGVNYXAgPSBwYXRoU3RhdGVNYWNoaW5lW21vZGVdXG4gICAgdHJhbnNpdGlvbiA9IHR5cGVNYXBbdHlwZV0gfHwgdHlwZU1hcFsnZWxzZSddIHx8IEVSUk9SXG5cbiAgICBpZiAodHJhbnNpdGlvbiA9PT0gRVJST1IpIHtcbiAgICAgIHJldHVybiAvLyBwYXJzZSBlcnJvclxuICAgIH1cblxuICAgIG1vZGUgPSB0cmFuc2l0aW9uWzBdXG4gICAgYWN0aW9uID0gYWN0aW9uc1t0cmFuc2l0aW9uWzFdXVxuICAgIGlmIChhY3Rpb24pIHtcbiAgICAgIG5ld0NoYXIgPSB0cmFuc2l0aW9uWzJdXG4gICAgICBuZXdDaGFyID0gbmV3Q2hhciA9PT0gdW5kZWZpbmVkXG4gICAgICAgID8gY1xuICAgICAgICA6IG5ld0NoYXIgPT09ICcqJ1xuICAgICAgICAgID8gbmV3Q2hhciArIGNcbiAgICAgICAgICA6IG5ld0NoYXJcbiAgICAgIGFjdGlvbigpXG4gICAgfVxuXG4gICAgaWYgKG1vZGUgPT09IEFGVEVSX1BBVEgpIHtcbiAgICAgIGtleXMucmF3ID0gcGF0aFxuICAgICAgcmV0dXJuIGtleXNcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBGb3JtYXQgYSBhY2Nlc3NvciBzZWdtZW50IGJhc2VkIG9uIGl0cyB0eXBlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXlcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cblxuZnVuY3Rpb24gZm9ybWF0QWNjZXNzb3IgKGtleSkge1xuICBpZiAoaWRlbnRSRS50ZXN0KGtleSkpIHsgLy8gaWRlbnRpZmllclxuICAgIHJldHVybiAnLicgKyBrZXlcbiAgfSBlbHNlIGlmICgra2V5ID09PSBrZXkgPj4+IDApIHsgLy8gYnJhY2tldCBpbmRleFxuICAgIHJldHVybiAnWycgKyBrZXkgKyAnXSdcbiAgfSBlbHNlIGlmIChrZXkuY2hhckF0KDApID09PSAnKicpIHtcbiAgICByZXR1cm4gJ1tvJyArIGZvcm1hdEFjY2Vzc29yKGtleS5zbGljZSgxKSkgKyAnXSdcbiAgfSBlbHNlIHsgLy8gYnJhY2tldCBzdHJpbmdcbiAgICByZXR1cm4gJ1tcIicgKyBrZXkucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpICsgJ1wiXSdcbiAgfVxufVxuXG4vKipcbiAqIENvbXBpbGVzIGEgZ2V0dGVyIGZ1bmN0aW9uIHdpdGggYSBmaXhlZCBwYXRoLlxuICogVGhlIGZpeGVkIHBhdGggZ2V0dGVyIHN1cHJlc3NlcyBlcnJvcnMuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gcGF0aFxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKi9cblxuZXhwb3J0cy5jb21waWxlR2V0dGVyID0gZnVuY3Rpb24gKHBhdGgpIHtcbiAgdmFyIGJvZHkgPSAncmV0dXJuIG8nICsgcGF0aC5tYXAoZm9ybWF0QWNjZXNzb3IpLmpvaW4oJycpXG4gIHJldHVybiBuZXcgRnVuY3Rpb24oJ28nLCBib2R5KVxufVxuXG4vKipcbiAqIEV4dGVybmFsIHBhcnNlIHRoYXQgY2hlY2sgZm9yIGEgY2FjaGUgaGl0IGZpcnN0XG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHBhdGhcbiAqIEByZXR1cm4ge0FycmF5fHVuZGVmaW5lZH1cbiAqL1xuXG5leHBvcnRzLnBhcnNlID0gZnVuY3Rpb24gKHBhdGgpIHtcbiAgdmFyIGhpdCA9IHBhdGhDYWNoZS5nZXQocGF0aClcbiAgaWYgKCFoaXQpIHtcbiAgICBoaXQgPSBwYXJzZVBhdGgocGF0aClcbiAgICBpZiAoaGl0KSB7XG4gICAgICBoaXQuZ2V0ID0gZXhwb3J0cy5jb21waWxlR2V0dGVyKGhpdClcbiAgICAgIHBhdGhDYWNoZS5wdXQocGF0aCwgaGl0KVxuICAgIH1cbiAgfVxuICByZXR1cm4gaGl0XG59XG5cbi8qKlxuICogR2V0IGZyb20gYW4gb2JqZWN0IGZyb20gYSBwYXRoIHN0cmluZ1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEBwYXJhbSB7U3RyaW5nfSBwYXRoXG4gKi9cblxuZXhwb3J0cy5nZXQgPSBmdW5jdGlvbiAob2JqLCBwYXRoKSB7XG4gIHBhdGggPSBleHBvcnRzLnBhcnNlKHBhdGgpXG4gIGlmIChwYXRoKSB7XG4gICAgcmV0dXJuIHBhdGguZ2V0KG9iailcbiAgfVxufVxuXG4vKipcbiAqIFdhcm4gYWdhaW5zdCBzZXR0aW5nIG5vbi1leGlzdGVudCByb290IHBhdGggb24gYSB2bS5cbiAqL1xuXG52YXIgd2Fybk5vbkV4aXN0ZW50XG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB3YXJuTm9uRXhpc3RlbnQgPSBmdW5jdGlvbiAocGF0aCkge1xuICAgIF8ud2FybihcbiAgICAgICdZb3UgYXJlIHNldHRpbmcgYSBub24tZXhpc3RlbnQgcGF0aCBcIicgKyBwYXRoLnJhdyArICdcIiAnICtcbiAgICAgICdvbiBhIHZtIGluc3RhbmNlLiBDb25zaWRlciBwcmUtaW5pdGlhbGl6aW5nIHRoZSBwcm9wZXJ0eSAnICtcbiAgICAgICd3aXRoIHRoZSBcImRhdGFcIiBvcHRpb24gZm9yIG1vcmUgcmVsaWFibGUgcmVhY3Rpdml0eSAnICtcbiAgICAgICdhbmQgYmV0dGVyIHBlcmZvcm1hbmNlLidcbiAgICApXG4gIH1cbn1cblxuLyoqXG4gKiBTZXQgb24gYW4gb2JqZWN0IGZyb20gYSBwYXRoXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHBhcmFtIHtTdHJpbmcgfCBBcnJheX0gcGF0aFxuICogQHBhcmFtIHsqfSB2YWxcbiAqL1xuXG5leHBvcnRzLnNldCA9IGZ1bmN0aW9uIChvYmosIHBhdGgsIHZhbCkge1xuICB2YXIgb3JpZ2luYWwgPSBvYmpcbiAgaWYgKHR5cGVvZiBwYXRoID09PSAnc3RyaW5nJykge1xuICAgIHBhdGggPSBleHBvcnRzLnBhcnNlKHBhdGgpXG4gIH1cbiAgaWYgKCFwYXRoIHx8ICFfLmlzT2JqZWN0KG9iaikpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuICB2YXIgbGFzdCwga2V5XG4gIGZvciAodmFyIGkgPSAwLCBsID0gcGF0aC5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsYXN0ID0gb2JqXG4gICAga2V5ID0gcGF0aFtpXVxuICAgIGlmIChrZXkuY2hhckF0KDApID09PSAnKicpIHtcbiAgICAgIGtleSA9IG9yaWdpbmFsW2tleS5zbGljZSgxKV1cbiAgICB9XG4gICAgaWYgKGkgPCBsIC0gMSkge1xuICAgICAgb2JqID0gb2JqW2tleV1cbiAgICAgIGlmICghXy5pc09iamVjdChvYmopKSB7XG4gICAgICAgIG9iaiA9IHt9XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGxhc3QuX2lzVnVlKSB7XG4gICAgICAgICAgd2Fybk5vbkV4aXN0ZW50KHBhdGgpXG4gICAgICAgIH1cbiAgICAgICAgXy5zZXQobGFzdCwga2V5LCBvYmopXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChfLmlzQXJyYXkob2JqKSkge1xuICAgICAgICBvYmouJHNldChrZXksIHZhbClcbiAgICAgIH0gZWxzZSBpZiAoa2V5IGluIG9iaikge1xuICAgICAgICBvYmpba2V5XSA9IHZhbFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgb2JqLl9pc1Z1ZSkge1xuICAgICAgICAgIHdhcm5Ob25FeGlzdGVudChwYXRoKVxuICAgICAgICB9XG4gICAgICAgIF8uc2V0KG9iaiwga2V5LCB2YWwpXG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlXG59XG4iLCJ2YXIgXyA9IHJlcXVpcmUoJy4uL3V0aWwnKVxudmFyIENhY2hlID0gcmVxdWlyZSgnLi4vY2FjaGUnKVxudmFyIHRlbXBsYXRlQ2FjaGUgPSBuZXcgQ2FjaGUoMTAwMClcbnZhciBpZFNlbGVjdG9yQ2FjaGUgPSBuZXcgQ2FjaGUoMTAwMClcblxudmFyIG1hcCA9IHtcbiAgX2RlZmF1bHQ6IFswLCAnJywgJyddLFxuICBsZWdlbmQ6IFsxLCAnPGZpZWxkc2V0PicsICc8L2ZpZWxkc2V0PiddLFxuICB0cjogWzIsICc8dGFibGU+PHRib2R5PicsICc8L3Rib2R5PjwvdGFibGU+J10sXG4gIGNvbDogW1xuICAgIDIsXG4gICAgJzx0YWJsZT48dGJvZHk+PC90Ym9keT48Y29sZ3JvdXA+JyxcbiAgICAnPC9jb2xncm91cD48L3RhYmxlPidcbiAgXVxufVxuXG5tYXAudGQgPVxubWFwLnRoID0gW1xuICAzLFxuICAnPHRhYmxlPjx0Ym9keT48dHI+JyxcbiAgJzwvdHI+PC90Ym9keT48L3RhYmxlPidcbl1cblxubWFwLm9wdGlvbiA9XG5tYXAub3B0Z3JvdXAgPSBbXG4gIDEsXG4gICc8c2VsZWN0IG11bHRpcGxlPVwibXVsdGlwbGVcIj4nLFxuICAnPC9zZWxlY3Q+J1xuXVxuXG5tYXAudGhlYWQgPVxubWFwLnRib2R5ID1cbm1hcC5jb2xncm91cCA9XG5tYXAuY2FwdGlvbiA9XG5tYXAudGZvb3QgPSBbMSwgJzx0YWJsZT4nLCAnPC90YWJsZT4nXVxuXG5tYXAuZyA9XG5tYXAuZGVmcyA9XG5tYXAuc3ltYm9sID1cbm1hcC51c2UgPVxubWFwLmltYWdlID1cbm1hcC50ZXh0ID1cbm1hcC5jaXJjbGUgPVxubWFwLmVsbGlwc2UgPVxubWFwLmxpbmUgPVxubWFwLnBhdGggPVxubWFwLnBvbHlnb24gPVxubWFwLnBvbHlsaW5lID1cbm1hcC5yZWN0ID0gW1xuICAxLFxuICAnPHN2ZyAnICtcbiAgICAneG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiICcgK1xuICAgICd4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiAnICtcbiAgICAneG1sbnM6ZXY9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAxL3htbC1ldmVudHNcIicgK1xuICAgICd2ZXJzaW9uPVwiMS4xXCI+JyxcbiAgJzwvc3ZnPidcbl1cblxuLyoqXG4gKiBDaGVjayBpZiBhIG5vZGUgaXMgYSBzdXBwb3J0ZWQgdGVtcGxhdGUgbm9kZSB3aXRoIGFcbiAqIERvY3VtZW50RnJhZ21lbnQgY29udGVudC5cbiAqXG4gKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cblxuZnVuY3Rpb24gaXNSZWFsVGVtcGxhdGUgKG5vZGUpIHtcbiAgcmV0dXJuIF8uaXNUZW1wbGF0ZShub2RlKSAmJlxuICAgIG5vZGUuY29udGVudCBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnRcbn1cblxudmFyIHRhZ1JFID0gLzwoW1xcdzpdKykvXG52YXIgZW50aXR5UkUgPSAvJlxcdys7fCYjXFxkKzt8JiN4W1xcZEEtRl0rOy9cblxuLyoqXG4gKiBDb252ZXJ0IGEgc3RyaW5nIHRlbXBsYXRlIHRvIGEgRG9jdW1lbnRGcmFnbWVudC5cbiAqIERldGVybWluZXMgY29ycmVjdCB3cmFwcGluZyBieSB0YWcgdHlwZXMuIFdyYXBwaW5nXG4gKiBzdHJhdGVneSBmb3VuZCBpbiBqUXVlcnkgJiBjb21wb25lbnQvZG9taWZ5LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB0ZW1wbGF0ZVN0cmluZ1xuICogQHJldHVybiB7RG9jdW1lbnRGcmFnbWVudH1cbiAqL1xuXG5mdW5jdGlvbiBzdHJpbmdUb0ZyYWdtZW50ICh0ZW1wbGF0ZVN0cmluZykge1xuICAvLyB0cnkgYSBjYWNoZSBoaXQgZmlyc3RcbiAgdmFyIGhpdCA9IHRlbXBsYXRlQ2FjaGUuZ2V0KHRlbXBsYXRlU3RyaW5nKVxuICBpZiAoaGl0KSB7XG4gICAgcmV0dXJuIGhpdFxuICB9XG5cbiAgdmFyIGZyYWcgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KClcbiAgdmFyIHRhZ01hdGNoID0gdGVtcGxhdGVTdHJpbmcubWF0Y2godGFnUkUpXG4gIHZhciBlbnRpdHlNYXRjaCA9IGVudGl0eVJFLnRlc3QodGVtcGxhdGVTdHJpbmcpXG5cbiAgaWYgKCF0YWdNYXRjaCAmJiAhZW50aXR5TWF0Y2gpIHtcbiAgICAvLyB0ZXh0IG9ubHksIHJldHVybiBhIHNpbmdsZSB0ZXh0IG5vZGUuXG4gICAgZnJhZy5hcHBlbmRDaGlsZChcbiAgICAgIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRlbXBsYXRlU3RyaW5nKVxuICAgIClcbiAgfSBlbHNlIHtcblxuICAgIHZhciB0YWcgPSB0YWdNYXRjaCAmJiB0YWdNYXRjaFsxXVxuICAgIHZhciB3cmFwID0gbWFwW3RhZ10gfHwgbWFwLl9kZWZhdWx0XG4gICAgdmFyIGRlcHRoID0gd3JhcFswXVxuICAgIHZhciBwcmVmaXggPSB3cmFwWzFdXG4gICAgdmFyIHN1ZmZpeCA9IHdyYXBbMl1cbiAgICB2YXIgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgICBub2RlLmlubmVySFRNTCA9IHByZWZpeCArIHRlbXBsYXRlU3RyaW5nLnRyaW0oKSArIHN1ZmZpeFxuICAgIHdoaWxlIChkZXB0aC0tKSB7XG4gICAgICBub2RlID0gbm9kZS5sYXN0Q2hpbGRcbiAgICB9XG5cbiAgICB2YXIgY2hpbGRcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25kLWFzc2lnbiAqL1xuICAgIHdoaWxlIChjaGlsZCA9IG5vZGUuZmlyc3RDaGlsZCkge1xuICAgIC8qIGVzbGludC1lbmFibGUgbm8tY29uZC1hc3NpZ24gKi9cbiAgICAgIGZyYWcuYXBwZW5kQ2hpbGQoY2hpbGQpXG4gICAgfVxuICB9XG5cbiAgdGVtcGxhdGVDYWNoZS5wdXQodGVtcGxhdGVTdHJpbmcsIGZyYWcpXG4gIHJldHVybiBmcmFnXG59XG5cbi8qKlxuICogQ29udmVydCBhIHRlbXBsYXRlIG5vZGUgdG8gYSBEb2N1bWVudEZyYWdtZW50LlxuICpcbiAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICogQHJldHVybiB7RG9jdW1lbnRGcmFnbWVudH1cbiAqL1xuXG5mdW5jdGlvbiBub2RlVG9GcmFnbWVudCAobm9kZSkge1xuICAvLyBpZiBpdHMgYSB0ZW1wbGF0ZSB0YWcgYW5kIHRoZSBicm93c2VyIHN1cHBvcnRzIGl0LFxuICAvLyBpdHMgY29udGVudCBpcyBhbHJlYWR5IGEgZG9jdW1lbnQgZnJhZ21lbnQuXG4gIGlmIChpc1JlYWxUZW1wbGF0ZShub2RlKSkge1xuICAgIF8udHJpbU5vZGUobm9kZS5jb250ZW50KVxuICAgIHJldHVybiBub2RlLmNvbnRlbnRcbiAgfVxuICAvLyBzY3JpcHQgdGVtcGxhdGVcbiAgaWYgKG5vZGUudGFnTmFtZSA9PT0gJ1NDUklQVCcpIHtcbiAgICByZXR1cm4gc3RyaW5nVG9GcmFnbWVudChub2RlLnRleHRDb250ZW50KVxuICB9XG4gIC8vIG5vcm1hbCBub2RlLCBjbG9uZSBpdCB0byBhdm9pZCBtdXRhdGluZyB0aGUgb3JpZ2luYWxcbiAgdmFyIGNsb25lID0gZXhwb3J0cy5jbG9uZShub2RlKVxuICB2YXIgZnJhZyA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKVxuICB2YXIgY2hpbGRcbiAgLyogZXNsaW50LWRpc2FibGUgbm8tY29uZC1hc3NpZ24gKi9cbiAgd2hpbGUgKGNoaWxkID0gY2xvbmUuZmlyc3RDaGlsZCkge1xuICAvKiBlc2xpbnQtZW5hYmxlIG5vLWNvbmQtYXNzaWduICovXG4gICAgZnJhZy5hcHBlbmRDaGlsZChjaGlsZClcbiAgfVxuICBfLnRyaW1Ob2RlKGZyYWcpXG4gIHJldHVybiBmcmFnXG59XG5cbi8vIFRlc3QgZm9yIHRoZSBwcmVzZW5jZSBvZiB0aGUgU2FmYXJpIHRlbXBsYXRlIGNsb25pbmcgYnVnXG4vLyBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTM3NzU1XG52YXIgaGFzQnJva2VuVGVtcGxhdGUgPSAoZnVuY3Rpb24gKCkge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICBpZiAoXy5pbkJyb3dzZXIpIHtcbiAgICB2YXIgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgYS5pbm5lckhUTUwgPSAnPHRlbXBsYXRlPjE8L3RlbXBsYXRlPidcbiAgICByZXR1cm4gIWEuY2xvbmVOb2RlKHRydWUpLmZpcnN0Q2hpbGQuaW5uZXJIVE1MXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn0pKClcblxuLy8gVGVzdCBmb3IgSUUxMC8xMSB0ZXh0YXJlYSBwbGFjZWhvbGRlciBjbG9uZSBidWdcbnZhciBoYXNUZXh0YXJlYUNsb25lQnVnID0gKGZ1bmN0aW9uICgpIHtcbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgaWYgKF8uaW5Ccm93c2VyKSB7XG4gICAgdmFyIHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpXG4gICAgdC5wbGFjZWhvbGRlciA9ICd0J1xuICAgIHJldHVybiB0LmNsb25lTm9kZSh0cnVlKS52YWx1ZSA9PT0gJ3QnXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn0pKClcblxuLyoqXG4gKiAxLiBEZWFsIHdpdGggU2FmYXJpIGNsb25pbmcgbmVzdGVkIDx0ZW1wbGF0ZT4gYnVnIGJ5XG4gKiAgICBtYW51YWxseSBjbG9uaW5nIGFsbCB0ZW1wbGF0ZSBpbnN0YW5jZXMuXG4gKiAyLiBEZWFsIHdpdGggSUUxMC8xMSB0ZXh0YXJlYSBwbGFjZWhvbGRlciBidWcgYnkgc2V0dGluZ1xuICogICAgdGhlIGNvcnJlY3QgdmFsdWUgYWZ0ZXIgY2xvbmluZy5cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR8RG9jdW1lbnRGcmFnbWVudH0gbm9kZVxuICogQHJldHVybiB7RWxlbWVudHxEb2N1bWVudEZyYWdtZW50fVxuICovXG5cbmV4cG9ydHMuY2xvbmUgPSBmdW5jdGlvbiAobm9kZSkge1xuICBpZiAoIW5vZGUucXVlcnlTZWxlY3RvckFsbCkge1xuICAgIHJldHVybiBub2RlLmNsb25lTm9kZSgpXG4gIH1cbiAgdmFyIHJlcyA9IG5vZGUuY2xvbmVOb2RlKHRydWUpXG4gIHZhciBpLCBvcmlnaW5hbCwgY2xvbmVkXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAoaGFzQnJva2VuVGVtcGxhdGUpIHtcbiAgICB2YXIgY2xvbmUgPSByZXNcbiAgICBpZiAoaXNSZWFsVGVtcGxhdGUobm9kZSkpIHtcbiAgICAgIG5vZGUgPSBub2RlLmNvbnRlbnRcbiAgICAgIGNsb25lID0gcmVzLmNvbnRlbnRcbiAgICB9XG4gICAgb3JpZ2luYWwgPSBub2RlLnF1ZXJ5U2VsZWN0b3JBbGwoJ3RlbXBsYXRlJylcbiAgICBpZiAob3JpZ2luYWwubGVuZ3RoKSB7XG4gICAgICBjbG9uZWQgPSBjbG9uZS5xdWVyeVNlbGVjdG9yQWxsKCd0ZW1wbGF0ZScpXG4gICAgICBpID0gY2xvbmVkLmxlbmd0aFxuICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICBjbG9uZWRbaV0ucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoXG4gICAgICAgICAgZXhwb3J0cy5jbG9uZShvcmlnaW5hbFtpXSksXG4gICAgICAgICAgY2xvbmVkW2ldXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmIChoYXNUZXh0YXJlYUNsb25lQnVnKSB7XG4gICAgaWYgKG5vZGUudGFnTmFtZSA9PT0gJ1RFWFRBUkVBJykge1xuICAgICAgcmVzLnZhbHVlID0gbm9kZS52YWx1ZVxuICAgIH0gZWxzZSB7XG4gICAgICBvcmlnaW5hbCA9IG5vZGUucXVlcnlTZWxlY3RvckFsbCgndGV4dGFyZWEnKVxuICAgICAgaWYgKG9yaWdpbmFsLmxlbmd0aCkge1xuICAgICAgICBjbG9uZWQgPSByZXMucXVlcnlTZWxlY3RvckFsbCgndGV4dGFyZWEnKVxuICAgICAgICBpID0gY2xvbmVkLmxlbmd0aFxuICAgICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgICAgY2xvbmVkW2ldLnZhbHVlID0gb3JpZ2luYWxbaV0udmFsdWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbi8qKlxuICogUHJvY2VzcyB0aGUgdGVtcGxhdGUgb3B0aW9uIGFuZCBub3JtYWxpemVzIGl0IGludG8gYVxuICogYSBEb2N1bWVudEZyYWdtZW50IHRoYXQgY2FuIGJlIHVzZWQgYXMgYSBwYXJ0aWFsIG9yIGFcbiAqIGluc3RhbmNlIHRlbXBsYXRlLlxuICpcbiAqIEBwYXJhbSB7Kn0gdGVtcGxhdGVcbiAqICAgIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOlxuICogICAgLSBEb2N1bWVudEZyYWdtZW50IG9iamVjdFxuICogICAgLSBOb2RlIG9iamVjdCBvZiB0eXBlIFRlbXBsYXRlXG4gKiAgICAtIGlkIHNlbGVjdG9yOiAnI3NvbWUtdGVtcGxhdGUtaWQnXG4gKiAgICAtIHRlbXBsYXRlIHN0cmluZzogJzxkaXY+PHNwYW4+e3ttc2d9fTwvc3Bhbj48L2Rpdj4nXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGNsb25lXG4gKiBAcGFyYW0ge0Jvb2xlYW59IG5vU2VsZWN0b3JcbiAqIEByZXR1cm4ge0RvY3VtZW50RnJhZ21lbnR8dW5kZWZpbmVkfVxuICovXG5cbmV4cG9ydHMucGFyc2UgPSBmdW5jdGlvbiAodGVtcGxhdGUsIGNsb25lLCBub1NlbGVjdG9yKSB7XG4gIHZhciBub2RlLCBmcmFnXG5cbiAgLy8gaWYgdGhlIHRlbXBsYXRlIGlzIGFscmVhZHkgYSBkb2N1bWVudCBmcmFnbWVudCxcbiAgLy8gZG8gbm90aGluZ1xuICBpZiAodGVtcGxhdGUgaW5zdGFuY2VvZiBEb2N1bWVudEZyYWdtZW50KSB7XG4gICAgXy50cmltTm9kZSh0ZW1wbGF0ZSlcbiAgICByZXR1cm4gY2xvbmVcbiAgICAgID8gZXhwb3J0cy5jbG9uZSh0ZW1wbGF0ZSlcbiAgICAgIDogdGVtcGxhdGVcbiAgfVxuXG4gIGlmICh0eXBlb2YgdGVtcGxhdGUgPT09ICdzdHJpbmcnKSB7XG4gICAgLy8gaWQgc2VsZWN0b3JcbiAgICBpZiAoIW5vU2VsZWN0b3IgJiYgdGVtcGxhdGUuY2hhckF0KDApID09PSAnIycpIHtcbiAgICAgIC8vIGlkIHNlbGVjdG9yIGNhbiBiZSBjYWNoZWQgdG9vXG4gICAgICBmcmFnID0gaWRTZWxlY3RvckNhY2hlLmdldCh0ZW1wbGF0ZSlcbiAgICAgIGlmICghZnJhZykge1xuICAgICAgICBub2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGVtcGxhdGUuc2xpY2UoMSkpXG4gICAgICAgIGlmIChub2RlKSB7XG4gICAgICAgICAgZnJhZyA9IG5vZGVUb0ZyYWdtZW50KG5vZGUpXG4gICAgICAgICAgLy8gc2F2ZSBzZWxlY3RvciB0byBjYWNoZVxuICAgICAgICAgIGlkU2VsZWN0b3JDYWNoZS5wdXQodGVtcGxhdGUsIGZyYWcpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gbm9ybWFsIHN0cmluZyB0ZW1wbGF0ZVxuICAgICAgZnJhZyA9IHN0cmluZ1RvRnJhZ21lbnQodGVtcGxhdGUpXG4gICAgfVxuICB9IGVsc2UgaWYgKHRlbXBsYXRlLm5vZGVUeXBlKSB7XG4gICAgLy8gYSBkaXJlY3Qgbm9kZVxuICAgIGZyYWcgPSBub2RlVG9GcmFnbWVudCh0ZW1wbGF0ZSlcbiAgfVxuXG4gIHJldHVybiBmcmFnICYmIGNsb25lXG4gICAgPyBleHBvcnRzLmNsb25lKGZyYWcpXG4gICAgOiBmcmFnXG59XG4iLCJ2YXIgQ2FjaGUgPSByZXF1aXJlKCcuLi9jYWNoZScpXG52YXIgY29uZmlnID0gcmVxdWlyZSgnLi4vY29uZmlnJylcbnZhciBkaXJQYXJzZXIgPSByZXF1aXJlKCcuL2RpcmVjdGl2ZScpXG52YXIgcmVnZXhFc2NhcGVSRSA9IC9bLS4qKz9eJHt9KCl8W1xcXVxcL1xcXFxdL2dcbnZhciBjYWNoZSwgdGFnUkUsIGh0bWxSRVxuXG4vKipcbiAqIEVzY2FwZSBhIHN0cmluZyBzbyBpdCBjYW4gYmUgdXNlZCBpbiBhIFJlZ0V4cFxuICogY29uc3RydWN0b3IuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICovXG5cbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4IChzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKHJlZ2V4RXNjYXBlUkUsICdcXFxcJCYnKVxufVxuXG5leHBvcnRzLmNvbXBpbGVSZWdleCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIG9wZW4gPSBlc2NhcGVSZWdleChjb25maWcuZGVsaW1pdGVyc1swXSlcbiAgdmFyIGNsb3NlID0gZXNjYXBlUmVnZXgoY29uZmlnLmRlbGltaXRlcnNbMV0pXG4gIHZhciB1bnNhZmVPcGVuID0gZXNjYXBlUmVnZXgoY29uZmlnLnVuc2FmZURlbGltaXRlcnNbMF0pXG4gIHZhciB1bnNhZmVDbG9zZSA9IGVzY2FwZVJlZ2V4KGNvbmZpZy51bnNhZmVEZWxpbWl0ZXJzWzFdKVxuICB0YWdSRSA9IG5ldyBSZWdFeHAoXG4gICAgdW5zYWZlT3BlbiArICcoLis/KScgKyB1bnNhZmVDbG9zZSArICd8JyArXG4gICAgb3BlbiArICcoLis/KScgKyBjbG9zZSxcbiAgICAnZydcbiAgKVxuICBodG1sUkUgPSBuZXcgUmVnRXhwKFxuICAgICdeJyArIHVuc2FmZU9wZW4gKyAnLionICsgdW5zYWZlQ2xvc2UgKyAnJCdcbiAgKVxuICAvLyByZXNldCBjYWNoZVxuICBjYWNoZSA9IG5ldyBDYWNoZSgxMDAwKVxufVxuXG4vKipcbiAqIFBhcnNlIGEgdGVtcGxhdGUgdGV4dCBzdHJpbmcgaW50byBhbiBhcnJheSBvZiB0b2tlbnMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHRleHRcbiAqIEByZXR1cm4ge0FycmF5PE9iamVjdD4gfCBudWxsfVxuICogICAgICAgICAgICAgICAtIHtTdHJpbmd9IHR5cGVcbiAqICAgICAgICAgICAgICAgLSB7U3RyaW5nfSB2YWx1ZVxuICogICAgICAgICAgICAgICAtIHtCb29sZWFufSBbaHRtbF1cbiAqICAgICAgICAgICAgICAgLSB7Qm9vbGVhbn0gW29uZVRpbWVdXG4gKi9cblxuZXhwb3J0cy5wYXJzZSA9IGZ1bmN0aW9uICh0ZXh0KSB7XG4gIGlmICghY2FjaGUpIHtcbiAgICBleHBvcnRzLmNvbXBpbGVSZWdleCgpXG4gIH1cbiAgdmFyIGhpdCA9IGNhY2hlLmdldCh0ZXh0KVxuICBpZiAoaGl0KSB7XG4gICAgcmV0dXJuIGhpdFxuICB9XG4gIHRleHQgPSB0ZXh0LnJlcGxhY2UoL1xcbi9nLCAnJylcbiAgaWYgKCF0YWdSRS50ZXN0KHRleHQpKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuICB2YXIgdG9rZW5zID0gW11cbiAgdmFyIGxhc3RJbmRleCA9IHRhZ1JFLmxhc3RJbmRleCA9IDBcbiAgdmFyIG1hdGNoLCBpbmRleCwgaHRtbCwgdmFsdWUsIGZpcnN0LCBvbmVUaW1lXG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbmQtYXNzaWduICovXG4gIHdoaWxlIChtYXRjaCA9IHRhZ1JFLmV4ZWModGV4dCkpIHtcbiAgLyogZXNsaW50LWVuYWJsZSBuby1jb25kLWFzc2lnbiAqL1xuICAgIGluZGV4ID0gbWF0Y2guaW5kZXhcbiAgICAvLyBwdXNoIHRleHQgdG9rZW5cbiAgICBpZiAoaW5kZXggPiBsYXN0SW5kZXgpIHtcbiAgICAgIHRva2Vucy5wdXNoKHtcbiAgICAgICAgdmFsdWU6IHRleHQuc2xpY2UobGFzdEluZGV4LCBpbmRleClcbiAgICAgIH0pXG4gICAgfVxuICAgIC8vIHRhZyB0b2tlblxuICAgIGh0bWwgPSBodG1sUkUudGVzdChtYXRjaFswXSlcbiAgICB2YWx1ZSA9IGh0bWwgPyBtYXRjaFsxXSA6IG1hdGNoWzJdXG4gICAgZmlyc3QgPSB2YWx1ZS5jaGFyQ29kZUF0KDApXG4gICAgb25lVGltZSA9IGZpcnN0ID09PSA0MiAvLyAqXG4gICAgdmFsdWUgPSBvbmVUaW1lXG4gICAgICA/IHZhbHVlLnNsaWNlKDEpXG4gICAgICA6IHZhbHVlXG4gICAgdG9rZW5zLnB1c2goe1xuICAgICAgdGFnOiB0cnVlLFxuICAgICAgdmFsdWU6IHZhbHVlLnRyaW0oKSxcbiAgICAgIGh0bWw6IGh0bWwsXG4gICAgICBvbmVUaW1lOiBvbmVUaW1lXG4gICAgfSlcbiAgICBsYXN0SW5kZXggPSBpbmRleCArIG1hdGNoWzBdLmxlbmd0aFxuICB9XG4gIGlmIChsYXN0SW5kZXggPCB0ZXh0Lmxlbmd0aCkge1xuICAgIHRva2Vucy5wdXNoKHtcbiAgICAgIHZhbHVlOiB0ZXh0LnNsaWNlKGxhc3RJbmRleClcbiAgICB9KVxuICB9XG4gIGNhY2hlLnB1dCh0ZXh0LCB0b2tlbnMpXG4gIHJldHVybiB0b2tlbnNcbn1cblxuLyoqXG4gKiBGb3JtYXQgYSBsaXN0IG9mIHRva2VucyBpbnRvIGFuIGV4cHJlc3Npb24uXG4gKiBlLmcuIHRva2VucyBwYXJzZWQgZnJvbSAnYSB7e2J9fSBjJyBjYW4gYmUgc2VyaWFsaXplZFxuICogaW50byBvbmUgc2luZ2xlIGV4cHJlc3Npb24gYXMgJ1wiYSBcIiArIGIgKyBcIiBjXCInLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IHRva2Vuc1xuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5cbmV4cG9ydHMudG9rZW5zVG9FeHAgPSBmdW5jdGlvbiAodG9rZW5zKSB7XG4gIGlmICh0b2tlbnMubGVuZ3RoID4gMSkge1xuICAgIHJldHVybiB0b2tlbnMubWFwKGZ1bmN0aW9uICh0b2tlbikge1xuICAgICAgcmV0dXJuIGZvcm1hdFRva2VuKHRva2VuKVxuICAgIH0pLmpvaW4oJysnKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBmb3JtYXRUb2tlbih0b2tlbnNbMF0sIHRydWUpXG4gIH1cbn1cblxuLyoqXG4gKiBGb3JtYXQgYSBzaW5nbGUgdG9rZW4uXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHRva2VuXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHNpbmdsZVxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5cbmZ1bmN0aW9uIGZvcm1hdFRva2VuICh0b2tlbiwgc2luZ2xlKSB7XG4gIHJldHVybiB0b2tlbi50YWdcbiAgICA/IGlubGluZUZpbHRlcnModG9rZW4udmFsdWUsIHNpbmdsZSlcbiAgICA6ICdcIicgKyB0b2tlbi52YWx1ZSArICdcIidcbn1cblxuLyoqXG4gKiBGb3IgYW4gYXR0cmlidXRlIHdpdGggbXVsdGlwbGUgaW50ZXJwb2xhdGlvbiB0YWdzLFxuICogZS5nLiBhdHRyPVwic29tZS17e3RoaW5nIHwgZmlsdGVyfX1cIiwgaW4gb3JkZXIgdG8gY29tYmluZVxuICogdGhlIHdob2xlIHRoaW5nIGludG8gYSBzaW5nbGUgd2F0Y2hhYmxlIGV4cHJlc3Npb24sIHdlXG4gKiBoYXZlIHRvIGlubGluZSB0aG9zZSBmaWx0ZXJzLiBUaGlzIGZ1bmN0aW9uIGRvZXMgZXhhY3RseVxuICogdGhhdC4gVGhpcyBpcyBhIGJpdCBoYWNreSBidXQgaXQgYXZvaWRzIGhlYXZ5IGNoYW5nZXNcbiAqIHRvIGRpcmVjdGl2ZSBwYXJzZXIgYW5kIHdhdGNoZXIgbWVjaGFuaXNtLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBleHBcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gc2luZ2xlXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cblxudmFyIGZpbHRlclJFID0gL1tefF1cXHxbXnxdL1xuZnVuY3Rpb24gaW5saW5lRmlsdGVycyAoZXhwLCBzaW5nbGUpIHtcbiAgaWYgKCFmaWx0ZXJSRS50ZXN0KGV4cCkpIHtcbiAgICByZXR1cm4gc2luZ2xlXG4gICAgICA/IGV4cFxuICAgICAgOiAnKCcgKyBleHAgKyAnKSdcbiAgfSBlbHNlIHtcbiAgICB2YXIgZGlyID0gZGlyUGFyc2VyLnBhcnNlKGV4cClcbiAgICBpZiAoIWRpci5maWx0ZXJzKSB7XG4gICAgICByZXR1cm4gJygnICsgZXhwICsgJyknXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAndGhpcy5fYXBwbHlGaWx0ZXJzKCcgK1xuICAgICAgICBkaXIuZXhwcmVzc2lvbiArIC8vIHZhbHVlXG4gICAgICAgICcsbnVsbCwnICsgICAgICAgLy8gb2xkVmFsdWUgKG51bGwgZm9yIHJlYWQpXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KGRpci5maWx0ZXJzKSArIC8vIGZpbHRlciBkZXNjcmlwdG9yc1xuICAgICAgICAnLGZhbHNlKScgICAgICAgIC8vIHdyaXRlP1xuICAgIH1cbiAgfVxufVxuIiwidmFyIF8gPSByZXF1aXJlKCcuLi91dGlsJylcblxuLyoqXG4gKiBBcHBlbmQgd2l0aCB0cmFuc2l0aW9uLlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAqIEBwYXJhbSB7RWxlbWVudH0gdGFyZ2V0XG4gKiBAcGFyYW0ge1Z1ZX0gdm1cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjYl1cbiAqL1xuXG5leHBvcnRzLmFwcGVuZCA9IGZ1bmN0aW9uIChlbCwgdGFyZ2V0LCB2bSwgY2IpIHtcbiAgYXBwbHkoZWwsIDEsIGZ1bmN0aW9uICgpIHtcbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoZWwpXG4gIH0sIHZtLCBjYilcbn1cblxuLyoqXG4gKiBJbnNlcnRCZWZvcmUgd2l0aCB0cmFuc2l0aW9uLlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAqIEBwYXJhbSB7RWxlbWVudH0gdGFyZ2V0XG4gKiBAcGFyYW0ge1Z1ZX0gdm1cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjYl1cbiAqL1xuXG5leHBvcnRzLmJlZm9yZSA9IGZ1bmN0aW9uIChlbCwgdGFyZ2V0LCB2bSwgY2IpIHtcbiAgYXBwbHkoZWwsIDEsIGZ1bmN0aW9uICgpIHtcbiAgICBfLmJlZm9yZShlbCwgdGFyZ2V0KVxuICB9LCB2bSwgY2IpXG59XG5cbi8qKlxuICogUmVtb3ZlIHdpdGggdHJhbnNpdGlvbi5cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gKiBAcGFyYW0ge1Z1ZX0gdm1cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjYl1cbiAqL1xuXG5leHBvcnRzLnJlbW92ZSA9IGZ1bmN0aW9uIChlbCwgdm0sIGNiKSB7XG4gIGFwcGx5KGVsLCAtMSwgZnVuY3Rpb24gKCkge1xuICAgIF8ucmVtb3ZlKGVsKVxuICB9LCB2bSwgY2IpXG59XG5cbi8qKlxuICogQXBwbHkgdHJhbnNpdGlvbnMgd2l0aCBhbiBvcGVyYXRpb24gY2FsbGJhY2suXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogQHBhcmFtIHtOdW1iZXJ9IGRpcmVjdGlvblxuICogICAgICAgICAgICAgICAgICAxOiBlbnRlclxuICogICAgICAgICAgICAgICAgIC0xOiBsZWF2ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gb3AgLSB0aGUgYWN0dWFsIERPTSBvcGVyYXRpb25cbiAqIEBwYXJhbSB7VnVlfSB2bVxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2NiXVxuICovXG5cbnZhciBhcHBseSA9IGV4cG9ydHMuYXBwbHkgPSBmdW5jdGlvbiAoZWwsIGRpcmVjdGlvbiwgb3AsIHZtLCBjYikge1xuICB2YXIgdHJhbnNpdGlvbiA9IGVsLl9fdl90cmFuc1xuICBpZiAoXG4gICAgIXRyYW5zaXRpb24gfHxcbiAgICAvLyBza2lwIGlmIHRoZXJlIGFyZSBubyBqcyBob29rcyBhbmQgQ1NTIHRyYW5zaXRpb24gaXNcbiAgICAvLyBub3Qgc3VwcG9ydGVkXG4gICAgKCF0cmFuc2l0aW9uLmhvb2tzICYmICFfLnRyYW5zaXRpb25FbmRFdmVudCkgfHxcbiAgICAvLyBza2lwIHRyYW5zaXRpb25zIGZvciBpbml0aWFsIGNvbXBpbGVcbiAgICAhdm0uX2lzQ29tcGlsZWQgfHxcbiAgICAvLyBpZiB0aGUgdm0gaXMgYmVpbmcgbWFuaXB1bGF0ZWQgYnkgYSBwYXJlbnQgZGlyZWN0aXZlXG4gICAgLy8gZHVyaW5nIHRoZSBwYXJlbnQncyBjb21waWxhdGlvbiBwaGFzZSwgc2tpcCB0aGVcbiAgICAvLyBhbmltYXRpb24uXG4gICAgKHZtLiRwYXJlbnQgJiYgIXZtLiRwYXJlbnQuX2lzQ29tcGlsZWQpXG4gICkge1xuICAgIG9wKClcbiAgICBpZiAoY2IpIGNiKClcbiAgICByZXR1cm5cbiAgfVxuICB2YXIgYWN0aW9uID0gZGlyZWN0aW9uID4gMCA/ICdlbnRlcicgOiAnbGVhdmUnXG4gIHRyYW5zaXRpb25bYWN0aW9uXShvcCwgY2IpXG59XG4iLCJ2YXIgXyA9IHJlcXVpcmUoJy4uL3V0aWwnKVxudmFyIHF1ZXVlID0gW11cbnZhciBxdWV1ZWQgPSBmYWxzZVxuXG4vKipcbiAqIFB1c2ggYSBqb2IgaW50byB0aGUgcXVldWUuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gam9iXG4gKi9cblxuZXhwb3J0cy5wdXNoID0gZnVuY3Rpb24gKGpvYikge1xuICBxdWV1ZS5wdXNoKGpvYilcbiAgaWYgKCFxdWV1ZWQpIHtcbiAgICBxdWV1ZWQgPSB0cnVlXG4gICAgXy5uZXh0VGljayhmbHVzaClcbiAgfVxufVxuXG4vKipcbiAqIEZsdXNoIHRoZSBxdWV1ZSwgYW5kIGRvIG9uZSBmb3JjZWQgcmVmbG93IGJlZm9yZVxuICogdHJpZ2dlcmluZyB0cmFuc2l0aW9ucy5cbiAqL1xuXG5mdW5jdGlvbiBmbHVzaCAoKSB7XG4gIC8vIEZvcmNlIGxheW91dFxuICB2YXIgZiA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5vZmZzZXRIZWlnaHRcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBxdWV1ZS5sZW5ndGg7IGkrKykge1xuICAgIHF1ZXVlW2ldKClcbiAgfVxuICBxdWV1ZSA9IFtdXG4gIHF1ZXVlZCA9IGZhbHNlXG4gIC8vIGR1bW15IHJldHVybiwgc28ganMgbGludGVycyBkb24ndCBjb21wbGFpbiBhYm91dFxuICAvLyB1bnVzZWQgdmFyaWFibGUgZlxuICByZXR1cm4gZlxufVxuIiwidmFyIF8gPSByZXF1aXJlKCcuLi91dGlsJylcbnZhciBxdWV1ZSA9IHJlcXVpcmUoJy4vcXVldWUnKVxudmFyIGFkZENsYXNzID0gXy5hZGRDbGFzc1xudmFyIHJlbW92ZUNsYXNzID0gXy5yZW1vdmVDbGFzc1xudmFyIHRyYW5zaXRpb25FbmRFdmVudCA9IF8udHJhbnNpdGlvbkVuZEV2ZW50XG52YXIgYW5pbWF0aW9uRW5kRXZlbnQgPSBfLmFuaW1hdGlvbkVuZEV2ZW50XG52YXIgdHJhbnNEdXJhdGlvblByb3AgPSBfLnRyYW5zaXRpb25Qcm9wICsgJ0R1cmF0aW9uJ1xudmFyIGFuaW1EdXJhdGlvblByb3AgPSBfLmFuaW1hdGlvblByb3AgKyAnRHVyYXRpb24nXG5cbnZhciBUWVBFX1RSQU5TSVRJT04gPSAxXG52YXIgVFlQRV9BTklNQVRJT04gPSAyXG5cbi8qKlxuICogQSBUcmFuc2l0aW9uIG9iamVjdCB0aGF0IGVuY2Fwc3VsYXRlcyB0aGUgc3RhdGUgYW5kIGxvZ2ljXG4gKiBvZiB0aGUgdHJhbnNpdGlvbi5cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gKiBAcGFyYW0ge1N0cmluZ30gaWRcbiAqIEBwYXJhbSB7T2JqZWN0fSBob29rc1xuICogQHBhcmFtIHtWdWV9IHZtXG4gKi9cblxuZnVuY3Rpb24gVHJhbnNpdGlvbiAoZWwsIGlkLCBob29rcywgdm0pIHtcbiAgdGhpcy5pZCA9IGlkXG4gIHRoaXMuZWwgPSBlbFxuICB0aGlzLmVudGVyQ2xhc3MgPSBpZCArICctZW50ZXInXG4gIHRoaXMubGVhdmVDbGFzcyA9IGlkICsgJy1sZWF2ZSdcbiAgdGhpcy5ob29rcyA9IGhvb2tzXG4gIHRoaXMudm0gPSB2bVxuICAvLyBhc3luYyBzdGF0ZVxuICB0aGlzLnBlbmRpbmdDc3NFdmVudCA9XG4gIHRoaXMucGVuZGluZ0Nzc0NiID1cbiAgdGhpcy5jYW5jZWwgPVxuICB0aGlzLnBlbmRpbmdKc0NiID1cbiAgdGhpcy5vcCA9XG4gIHRoaXMuY2IgPSBudWxsXG4gIHRoaXMuanVzdEVudGVyZWQgPSBmYWxzZVxuICB0aGlzLmVudGVyZWQgPSB0aGlzLmxlZnQgPSBmYWxzZVxuICB0aGlzLnR5cGVDYWNoZSA9IHt9XG4gIC8vIGJpbmRcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIDtbJ2VudGVyTmV4dFRpY2snLCAnZW50ZXJEb25lJywgJ2xlYXZlTmV4dFRpY2snLCAnbGVhdmVEb25lJ11cbiAgICAuZm9yRWFjaChmdW5jdGlvbiAobSkge1xuICAgICAgc2VsZlttXSA9IF8uYmluZChzZWxmW21dLCBzZWxmKVxuICAgIH0pXG59XG5cbnZhciBwID0gVHJhbnNpdGlvbi5wcm90b3R5cGVcblxuLyoqXG4gKiBTdGFydCBhbiBlbnRlcmluZyB0cmFuc2l0aW9uLlxuICpcbiAqIDEuIGVudGVyIHRyYW5zaXRpb24gdHJpZ2dlcmVkXG4gKiAyLiBjYWxsIGJlZm9yZUVudGVyIGhvb2tcbiAqIDMuIGFkZCBlbnRlciBjbGFzc1xuICogNC4gaW5zZXJ0L3Nob3cgZWxlbWVudFxuICogNS4gY2FsbCBlbnRlciBob29rICh3aXRoIHBvc3NpYmxlIGV4cGxpY2l0IGpzIGNhbGxiYWNrKVxuICogNi4gcmVmbG93XG4gKiA3LiBiYXNlZCBvbiB0cmFuc2l0aW9uIHR5cGU6XG4gKiAgICAtIHRyYW5zaXRpb246XG4gKiAgICAgICAgcmVtb3ZlIGNsYXNzIG5vdywgd2FpdCBmb3IgdHJhbnNpdGlvbmVuZCxcbiAqICAgICAgICB0aGVuIGRvbmUgaWYgdGhlcmUncyBubyBleHBsaWNpdCBqcyBjYWxsYmFjay5cbiAqICAgIC0gYW5pbWF0aW9uOlxuICogICAgICAgIHdhaXQgZm9yIGFuaW1hdGlvbmVuZCwgcmVtb3ZlIGNsYXNzLFxuICogICAgICAgIHRoZW4gZG9uZSBpZiB0aGVyZSdzIG5vIGV4cGxpY2l0IGpzIGNhbGxiYWNrLlxuICogICAgLSBubyBjc3MgdHJhbnNpdGlvbjpcbiAqICAgICAgICBkb25lIG5vdyBpZiB0aGVyZSdzIG5vIGV4cGxpY2l0IGpzIGNhbGxiYWNrLlxuICogOC4gd2FpdCBmb3IgZWl0aGVyIGRvbmUgb3IganMgY2FsbGJhY2ssIHRoZW4gY2FsbFxuICogICAgYWZ0ZXJFbnRlciBob29rLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IG9wIC0gaW5zZXJ0L3Nob3cgdGhlIGVsZW1lbnRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjYl1cbiAqL1xuXG5wLmVudGVyID0gZnVuY3Rpb24gKG9wLCBjYikge1xuICB0aGlzLmNhbmNlbFBlbmRpbmcoKVxuICB0aGlzLmNhbGxIb29rKCdiZWZvcmVFbnRlcicpXG4gIHRoaXMuY2IgPSBjYlxuICBhZGRDbGFzcyh0aGlzLmVsLCB0aGlzLmVudGVyQ2xhc3MpXG4gIG9wKClcbiAgdGhpcy5lbnRlcmVkID0gZmFsc2VcbiAgdGhpcy5jYWxsSG9va1dpdGhDYignZW50ZXInKVxuICBpZiAodGhpcy5lbnRlcmVkKSB7XG4gICAgcmV0dXJuIC8vIHVzZXIgY2FsbGVkIGRvbmUgc3luY2hyb25vdXNseS5cbiAgfVxuICB0aGlzLmNhbmNlbCA9IHRoaXMuaG9va3MgJiYgdGhpcy5ob29rcy5lbnRlckNhbmNlbGxlZFxuICBxdWV1ZS5wdXNoKHRoaXMuZW50ZXJOZXh0VGljaylcbn1cblxuLyoqXG4gKiBUaGUgXCJuZXh0VGlja1wiIHBoYXNlIG9mIGFuIGVudGVyaW5nIHRyYW5zaXRpb24sIHdoaWNoIGlzXG4gKiB0byBiZSBwdXNoZWQgaW50byBhIHF1ZXVlIGFuZCBleGVjdXRlZCBhZnRlciBhIHJlZmxvdyBzb1xuICogdGhhdCByZW1vdmluZyB0aGUgY2xhc3MgY2FuIHRyaWdnZXIgYSBDU1MgdHJhbnNpdGlvbi5cbiAqL1xuXG5wLmVudGVyTmV4dFRpY2sgPSBmdW5jdGlvbiAoKSB7XG5cbiAgLy8gSW1wb3J0YW50IGhhY2s6XG4gIC8vIGluIENocm9tZSwgaWYgYSBqdXN0LWVudGVyZWQgZWxlbWVudCBpcyBhcHBsaWVkIHRoZVxuICAvLyBsZWF2ZSBjbGFzcyB3aGlsZSBpdHMgaW50ZXJwb2xhdGVkIHByb3BlcnR5IHN0aWxsIGhhc1xuICAvLyBhIHZlcnkgc21hbGwgdmFsdWUgKHdpdGhpbiBvbmUgZnJhbWUpLCBDaHJvbWUgd2lsbFxuICAvLyBza2lwIHRoZSBsZWF2ZSB0cmFuc2l0aW9uIGVudGlyZWx5IGFuZCBub3QgZmlyaW5nIHRoZVxuICAvLyB0cmFuc3Rpb25lbmQgZXZlbnQuIFRoZXJlZm9yZSB3ZSBuZWVkIHRvIHByb3RlY3RlZFxuICAvLyBhZ2FpbnN0IHN1Y2ggY2FzZXMgdXNpbmcgYSBvbmUtZnJhbWUgdGltZW91dC5cbiAgdGhpcy5qdXN0RW50ZXJlZCA9IHRydWVcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgIHNlbGYuanVzdEVudGVyZWQgPSBmYWxzZVxuICB9LCAxNylcblxuICB2YXIgZW50ZXJEb25lID0gdGhpcy5lbnRlckRvbmVcbiAgdmFyIHR5cGUgPSB0aGlzLmdldENzc1RyYW5zaXRpb25UeXBlKHRoaXMuZW50ZXJDbGFzcylcbiAgaWYgKCF0aGlzLnBlbmRpbmdKc0NiKSB7XG4gICAgaWYgKHR5cGUgPT09IFRZUEVfVFJBTlNJVElPTikge1xuICAgICAgLy8gdHJpZ2dlciB0cmFuc2l0aW9uIGJ5IHJlbW92aW5nIGVudGVyIGNsYXNzIG5vd1xuICAgICAgcmVtb3ZlQ2xhc3ModGhpcy5lbCwgdGhpcy5lbnRlckNsYXNzKVxuICAgICAgdGhpcy5zZXR1cENzc0NiKHRyYW5zaXRpb25FbmRFdmVudCwgZW50ZXJEb25lKVxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gVFlQRV9BTklNQVRJT04pIHtcbiAgICAgIHRoaXMuc2V0dXBDc3NDYihhbmltYXRpb25FbmRFdmVudCwgZW50ZXJEb25lKVxuICAgIH0gZWxzZSB7XG4gICAgICBlbnRlckRvbmUoKVxuICAgIH1cbiAgfSBlbHNlIGlmICh0eXBlID09PSBUWVBFX1RSQU5TSVRJT04pIHtcbiAgICByZW1vdmVDbGFzcyh0aGlzLmVsLCB0aGlzLmVudGVyQ2xhc3MpXG4gIH1cbn1cblxuLyoqXG4gKiBUaGUgXCJjbGVhbnVwXCIgcGhhc2Ugb2YgYW4gZW50ZXJpbmcgdHJhbnNpdGlvbi5cbiAqL1xuXG5wLmVudGVyRG9uZSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5lbnRlcmVkID0gdHJ1ZVxuICB0aGlzLmNhbmNlbCA9IHRoaXMucGVuZGluZ0pzQ2IgPSBudWxsXG4gIHJlbW92ZUNsYXNzKHRoaXMuZWwsIHRoaXMuZW50ZXJDbGFzcylcbiAgdGhpcy5jYWxsSG9vaygnYWZ0ZXJFbnRlcicpXG4gIGlmICh0aGlzLmNiKSB0aGlzLmNiKClcbn1cblxuLyoqXG4gKiBTdGFydCBhIGxlYXZpbmcgdHJhbnNpdGlvbi5cbiAqXG4gKiAxLiBsZWF2ZSB0cmFuc2l0aW9uIHRyaWdnZXJlZC5cbiAqIDIuIGNhbGwgYmVmb3JlTGVhdmUgaG9va1xuICogMy4gYWRkIGxlYXZlIGNsYXNzICh0cmlnZ2VyIGNzcyB0cmFuc2l0aW9uKVxuICogNC4gY2FsbCBsZWF2ZSBob29rICh3aXRoIHBvc3NpYmxlIGV4cGxpY2l0IGpzIGNhbGxiYWNrKVxuICogNS4gcmVmbG93IGlmIG5vIGV4cGxpY2l0IGpzIGNhbGxiYWNrIGlzIHByb3ZpZGVkXG4gKiA2LiBiYXNlZCBvbiB0cmFuc2l0aW9uIHR5cGU6XG4gKiAgICAtIHRyYW5zaXRpb24gb3IgYW5pbWF0aW9uOlxuICogICAgICAgIHdhaXQgZm9yIGVuZCBldmVudCwgcmVtb3ZlIGNsYXNzLCB0aGVuIGRvbmUgaWZcbiAqICAgICAgICB0aGVyZSdzIG5vIGV4cGxpY2l0IGpzIGNhbGxiYWNrLlxuICogICAgLSBubyBjc3MgdHJhbnNpdGlvbjpcbiAqICAgICAgICBkb25lIGlmIHRoZXJlJ3Mgbm8gZXhwbGljaXQganMgY2FsbGJhY2suXG4gKiA3LiB3YWl0IGZvciBlaXRoZXIgZG9uZSBvciBqcyBjYWxsYmFjaywgdGhlbiBjYWxsXG4gKiAgICBhZnRlckxlYXZlIGhvb2suXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gb3AgLSByZW1vdmUvaGlkZSB0aGUgZWxlbWVudFxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2NiXVxuICovXG5cbnAubGVhdmUgPSBmdW5jdGlvbiAob3AsIGNiKSB7XG4gIHRoaXMuY2FuY2VsUGVuZGluZygpXG4gIHRoaXMuY2FsbEhvb2soJ2JlZm9yZUxlYXZlJylcbiAgdGhpcy5vcCA9IG9wXG4gIHRoaXMuY2IgPSBjYlxuICBhZGRDbGFzcyh0aGlzLmVsLCB0aGlzLmxlYXZlQ2xhc3MpXG4gIHRoaXMubGVmdCA9IGZhbHNlXG4gIHRoaXMuY2FsbEhvb2tXaXRoQ2IoJ2xlYXZlJylcbiAgaWYgKHRoaXMubGVmdCkge1xuICAgIHJldHVybiAvLyB1c2VyIGNhbGxlZCBkb25lIHN5bmNocm9ub3VzbHkuXG4gIH1cbiAgdGhpcy5jYW5jZWwgPSB0aGlzLmhvb2tzICYmIHRoaXMuaG9va3MubGVhdmVDYW5jZWxsZWRcbiAgLy8gb25seSBuZWVkIHRvIGhhbmRsZSBsZWF2ZURvbmUgaWZcbiAgLy8gMS4gdGhlIHRyYW5zaXRpb24gaXMgYWxyZWFkeSBkb25lIChzeW5jaHJvbm91c2x5IGNhbGxlZFxuICAvLyAgICBieSB0aGUgdXNlciwgd2hpY2ggY2F1c2VzIHRoaXMub3Agc2V0IHRvIG51bGwpXG4gIC8vIDIuIHRoZXJlJ3Mgbm8gZXhwbGljaXQganMgY2FsbGJhY2tcbiAgaWYgKHRoaXMub3AgJiYgIXRoaXMucGVuZGluZ0pzQ2IpIHtcbiAgICAvLyBpZiBhIENTUyB0cmFuc2l0aW9uIGxlYXZlcyBpbW1lZGlhdGVseSBhZnRlciBlbnRlcixcbiAgICAvLyB0aGUgdHJhbnNpdGlvbmVuZCBldmVudCBuZXZlciBmaXJlcy4gdGhlcmVmb3JlIHdlXG4gICAgLy8gZGV0ZWN0IHN1Y2ggY2FzZXMgYW5kIGVuZCB0aGUgbGVhdmUgaW1tZWRpYXRlbHkuXG4gICAgaWYgKHRoaXMuanVzdEVudGVyZWQpIHtcbiAgICAgIHRoaXMubGVhdmVEb25lKClcbiAgICB9IGVsc2Uge1xuICAgICAgcXVldWUucHVzaCh0aGlzLmxlYXZlTmV4dFRpY2spXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogVGhlIFwibmV4dFRpY2tcIiBwaGFzZSBvZiBhIGxlYXZpbmcgdHJhbnNpdGlvbi5cbiAqL1xuXG5wLmxlYXZlTmV4dFRpY2sgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciB0eXBlID0gdGhpcy5nZXRDc3NUcmFuc2l0aW9uVHlwZSh0aGlzLmxlYXZlQ2xhc3MpXG4gIGlmICh0eXBlKSB7XG4gICAgdmFyIGV2ZW50ID0gdHlwZSA9PT0gVFlQRV9UUkFOU0lUSU9OXG4gICAgICA/IHRyYW5zaXRpb25FbmRFdmVudFxuICAgICAgOiBhbmltYXRpb25FbmRFdmVudFxuICAgIHRoaXMuc2V0dXBDc3NDYihldmVudCwgdGhpcy5sZWF2ZURvbmUpXG4gIH0gZWxzZSB7XG4gICAgdGhpcy5sZWF2ZURvbmUoKVxuICB9XG59XG5cbi8qKlxuICogVGhlIFwiY2xlYW51cFwiIHBoYXNlIG9mIGEgbGVhdmluZyB0cmFuc2l0aW9uLlxuICovXG5cbnAubGVhdmVEb25lID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmxlZnQgPSB0cnVlXG4gIHRoaXMuY2FuY2VsID0gdGhpcy5wZW5kaW5nSnNDYiA9IG51bGxcbiAgdGhpcy5vcCgpXG4gIHJlbW92ZUNsYXNzKHRoaXMuZWwsIHRoaXMubGVhdmVDbGFzcylcbiAgdGhpcy5jYWxsSG9vaygnYWZ0ZXJMZWF2ZScpXG4gIGlmICh0aGlzLmNiKSB0aGlzLmNiKClcbiAgdGhpcy5vcCA9IG51bGxcbn1cblxuLyoqXG4gKiBDYW5jZWwgYW55IHBlbmRpbmcgY2FsbGJhY2tzIGZyb20gYSBwcmV2aW91c2x5IHJ1bm5pbmdcbiAqIGJ1dCBub3QgZmluaXNoZWQgdHJhbnNpdGlvbi5cbiAqL1xuXG5wLmNhbmNlbFBlbmRpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMub3AgPSB0aGlzLmNiID0gbnVsbFxuICB2YXIgaGFzUGVuZGluZyA9IGZhbHNlXG4gIGlmICh0aGlzLnBlbmRpbmdDc3NDYikge1xuICAgIGhhc1BlbmRpbmcgPSB0cnVlXG4gICAgXy5vZmYodGhpcy5lbCwgdGhpcy5wZW5kaW5nQ3NzRXZlbnQsIHRoaXMucGVuZGluZ0Nzc0NiKVxuICAgIHRoaXMucGVuZGluZ0Nzc0V2ZW50ID0gdGhpcy5wZW5kaW5nQ3NzQ2IgPSBudWxsXG4gIH1cbiAgaWYgKHRoaXMucGVuZGluZ0pzQ2IpIHtcbiAgICBoYXNQZW5kaW5nID0gdHJ1ZVxuICAgIHRoaXMucGVuZGluZ0pzQ2IuY2FuY2VsKClcbiAgICB0aGlzLnBlbmRpbmdKc0NiID0gbnVsbFxuICB9XG4gIGlmIChoYXNQZW5kaW5nKSB7XG4gICAgcmVtb3ZlQ2xhc3ModGhpcy5lbCwgdGhpcy5lbnRlckNsYXNzKVxuICAgIHJlbW92ZUNsYXNzKHRoaXMuZWwsIHRoaXMubGVhdmVDbGFzcylcbiAgfVxuICBpZiAodGhpcy5jYW5jZWwpIHtcbiAgICB0aGlzLmNhbmNlbC5jYWxsKHRoaXMudm0sIHRoaXMuZWwpXG4gICAgdGhpcy5jYW5jZWwgPSBudWxsXG4gIH1cbn1cblxuLyoqXG4gKiBDYWxsIGEgdXNlci1wcm92aWRlZCBzeW5jaHJvbm91cyBob29rIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gKi9cblxucC5jYWxsSG9vayA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gIGlmICh0aGlzLmhvb2tzICYmIHRoaXMuaG9va3NbdHlwZV0pIHtcbiAgICB0aGlzLmhvb2tzW3R5cGVdLmNhbGwodGhpcy52bSwgdGhpcy5lbClcbiAgfVxufVxuXG4vKipcbiAqIENhbGwgYSB1c2VyLXByb3ZpZGVkLCBwb3RlbnRpYWxseS1hc3luYyBob29rIGZ1bmN0aW9uLlxuICogV2UgY2hlY2sgZm9yIHRoZSBsZW5ndGggb2YgYXJndW1lbnRzIHRvIHNlZSBpZiB0aGUgaG9va1xuICogZXhwZWN0cyBhIGBkb25lYCBjYWxsYmFjay4gSWYgdHJ1ZSwgdGhlIHRyYW5zaXRpb24ncyBlbmRcbiAqIHdpbGwgYmUgZGV0ZXJtaW5lZCBieSB3aGVuIHRoZSB1c2VyIGNhbGxzIHRoYXQgY2FsbGJhY2s7XG4gKiBvdGhlcndpc2UsIHRoZSBlbmQgaXMgZGV0ZXJtaW5lZCBieSB0aGUgQ1NTIHRyYW5zaXRpb24gb3JcbiAqIGFuaW1hdGlvbi5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICovXG5cbnAuY2FsbEhvb2tXaXRoQ2IgPSBmdW5jdGlvbiAodHlwZSkge1xuICB2YXIgaG9vayA9IHRoaXMuaG9va3MgJiYgdGhpcy5ob29rc1t0eXBlXVxuICBpZiAoaG9vaykge1xuICAgIGlmIChob29rLmxlbmd0aCA+IDEpIHtcbiAgICAgIHRoaXMucGVuZGluZ0pzQ2IgPSBfLmNhbmNlbGxhYmxlKHRoaXNbdHlwZSArICdEb25lJ10pXG4gICAgfVxuICAgIGhvb2suY2FsbCh0aGlzLnZtLCB0aGlzLmVsLCB0aGlzLnBlbmRpbmdKc0NiKVxuICB9XG59XG5cbi8qKlxuICogR2V0IGFuIGVsZW1lbnQncyB0cmFuc2l0aW9uIHR5cGUgYmFzZWQgb24gdGhlXG4gKiBjYWxjdWxhdGVkIHN0eWxlcy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKi9cblxucC5nZXRDc3NUcmFuc2l0aW9uVHlwZSA9IGZ1bmN0aW9uIChjbGFzc05hbWUpIHtcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmIChcbiAgICAhdHJhbnNpdGlvbkVuZEV2ZW50IHx8XG4gICAgLy8gc2tpcCBDU1MgdHJhbnNpdGlvbnMgaWYgcGFnZSBpcyBub3QgdmlzaWJsZSAtXG4gICAgLy8gdGhpcyBzb2x2ZXMgdGhlIGlzc3VlIG9mIHRyYW5zaXRpb25lbmQgZXZlbnRzIG5vdFxuICAgIC8vIGZpcmluZyB1bnRpbCB0aGUgcGFnZSBpcyB2aXNpYmxlIGFnYWluLlxuICAgIC8vIHBhZ2VWaXNpYmlsaXR5IEFQSSBpcyBzdXBwb3J0ZWQgaW4gSUUxMCssIHNhbWUgYXNcbiAgICAvLyBDU1MgdHJhbnNpdGlvbnMuXG4gICAgZG9jdW1lbnQuaGlkZGVuIHx8XG4gICAgLy8gZXhwbGljaXQganMtb25seSB0cmFuc2l0aW9uXG4gICAgKHRoaXMuaG9va3MgJiYgdGhpcy5ob29rcy5jc3MgPT09IGZhbHNlKSB8fFxuICAgIC8vIGVsZW1lbnQgaXMgaGlkZGVuXG4gICAgaXNIaWRkZW4odGhpcy5lbClcbiAgKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgdmFyIHR5cGUgPSB0aGlzLnR5cGVDYWNoZVtjbGFzc05hbWVdXG4gIGlmICh0eXBlKSByZXR1cm4gdHlwZVxuICB2YXIgaW5saW5lU3R5bGVzID0gdGhpcy5lbC5zdHlsZVxuICB2YXIgY29tcHV0ZWRTdHlsZXMgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmVsKVxuICB2YXIgdHJhbnNEdXJhdGlvbiA9XG4gICAgaW5saW5lU3R5bGVzW3RyYW5zRHVyYXRpb25Qcm9wXSB8fFxuICAgIGNvbXB1dGVkU3R5bGVzW3RyYW5zRHVyYXRpb25Qcm9wXVxuICBpZiAodHJhbnNEdXJhdGlvbiAmJiB0cmFuc0R1cmF0aW9uICE9PSAnMHMnKSB7XG4gICAgdHlwZSA9IFRZUEVfVFJBTlNJVElPTlxuICB9IGVsc2Uge1xuICAgIHZhciBhbmltRHVyYXRpb24gPVxuICAgICAgaW5saW5lU3R5bGVzW2FuaW1EdXJhdGlvblByb3BdIHx8XG4gICAgICBjb21wdXRlZFN0eWxlc1thbmltRHVyYXRpb25Qcm9wXVxuICAgIGlmIChhbmltRHVyYXRpb24gJiYgYW5pbUR1cmF0aW9uICE9PSAnMHMnKSB7XG4gICAgICB0eXBlID0gVFlQRV9BTklNQVRJT05cbiAgICB9XG4gIH1cbiAgaWYgKHR5cGUpIHtcbiAgICB0aGlzLnR5cGVDYWNoZVtjbGFzc05hbWVdID0gdHlwZVxuICB9XG4gIHJldHVybiB0eXBlXG59XG5cbi8qKlxuICogU2V0dXAgYSBDU1MgdHJhbnNpdGlvbmVuZC9hbmltYXRpb25lbmQgY2FsbGJhY2suXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYlxuICovXG5cbnAuc2V0dXBDc3NDYiA9IGZ1bmN0aW9uIChldmVudCwgY2IpIHtcbiAgdGhpcy5wZW5kaW5nQ3NzRXZlbnQgPSBldmVudFxuICB2YXIgc2VsZiA9IHRoaXNcbiAgdmFyIGVsID0gdGhpcy5lbFxuICB2YXIgb25FbmQgPSB0aGlzLnBlbmRpbmdDc3NDYiA9IGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKGUudGFyZ2V0ID09PSBlbCkge1xuICAgICAgXy5vZmYoZWwsIGV2ZW50LCBvbkVuZClcbiAgICAgIHNlbGYucGVuZGluZ0Nzc0V2ZW50ID0gc2VsZi5wZW5kaW5nQ3NzQ2IgPSBudWxsXG4gICAgICBpZiAoIXNlbGYucGVuZGluZ0pzQ2IgJiYgY2IpIHtcbiAgICAgICAgY2IoKVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBfLm9uKGVsLCBldmVudCwgb25FbmQpXG59XG5cbi8qKlxuICogQ2hlY2sgaWYgYW4gZWxlbWVudCBpcyBoaWRkZW4gLSBpbiB0aGF0IGNhc2Ugd2UgY2FuIGp1c3RcbiAqIHNraXAgdGhlIHRyYW5zaXRpb24gYWxsdG9nZXRoZXIuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuXG5mdW5jdGlvbiBpc0hpZGRlbiAoZWwpIHtcbiAgcmV0dXJuICEoXG4gICAgZWwub2Zmc2V0V2lkdGggJiZcbiAgICBlbC5vZmZzZXRIZWlnaHQgJiZcbiAgICBlbC5nZXRDbGllbnRSZWN0cygpLmxlbmd0aFxuICApXG59XG5cbm1vZHVsZS5leHBvcnRzID0gVHJhbnNpdGlvblxuIiwidmFyIF8gPSByZXF1aXJlKCcuL2luZGV4JylcblxuLyoqXG4gKiBDaGVjayBpZiBhbiBlbGVtZW50IGlzIGEgY29tcG9uZW50LCBpZiB5ZXMgcmV0dXJuIGl0c1xuICogY29tcG9uZW50IGlkLlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKiBAcmV0dXJuIHtPYmplY3R8dW5kZWZpbmVkfVxuICovXG5cbmV4cG9ydHMuY29tbW9uVGFnUkUgPSAvXihkaXZ8cHxzcGFufGltZ3xhfGJ8aXxicnx1bHxvbHxsaXxoMXxoMnxoM3xoNHxoNXxoNnxjb2RlfHByZXx0YWJsZXx0aHx0ZHx0cnxmb3JtfGxhYmVsfGlucHV0fHNlbGVjdHxvcHRpb258bmF2fGFydGljbGV8c2VjdGlvbnxoZWFkZXJ8Zm9vdGVyKSQvXG5leHBvcnRzLmNoZWNrQ29tcG9uZW50ID0gZnVuY3Rpb24gKGVsLCBvcHRpb25zKSB7XG4gIHZhciB0YWcgPSBlbC50YWdOYW1lLnRvTG93ZXJDYXNlKClcbiAgdmFyIGhhc0F0dHJzID0gZWwuaGFzQXR0cmlidXRlcygpXG4gIGlmICghZXhwb3J0cy5jb21tb25UYWdSRS50ZXN0KHRhZykgJiYgdGFnICE9PSAnY29tcG9uZW50Jykge1xuICAgIGlmIChfLnJlc29sdmVBc3NldChvcHRpb25zLCAnY29tcG9uZW50cycsIHRhZykpIHtcbiAgICAgIHJldHVybiB7IGlkOiB0YWcgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgaXMgPSBoYXNBdHRycyAmJiBnZXRJc0JpbmRpbmcoZWwpXG4gICAgICBpZiAoaXMpIHtcbiAgICAgICAgcmV0dXJuIGlzXG4gICAgICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHRhZy5pbmRleE9mKCctJykgPiAtMSB8fFxuICAgICAgICAgIChcbiAgICAgICAgICAgIC9IVE1MVW5rbm93bkVsZW1lbnQvLnRlc3QoZWwudG9TdHJpbmcoKSkgJiZcbiAgICAgICAgICAgIC8vIENocm9tZSByZXR1cm5zIHVua25vd24gZm9yIHNldmVyYWwgSFRNTDUgZWxlbWVudHMuXG4gICAgICAgICAgICAvLyBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9NTQwNTI2XG4gICAgICAgICAgICAhL14oZGF0YXx0aW1lfHJ0Y3xyYikkLy50ZXN0KHRhZylcbiAgICAgICAgICApXG4gICAgICAgICkge1xuICAgICAgICAgIF8ud2FybihcbiAgICAgICAgICAgICdVbmtub3duIGN1c3RvbSBlbGVtZW50OiA8JyArIHRhZyArICc+IC0gZGlkIHlvdSAnICtcbiAgICAgICAgICAgICdyZWdpc3RlciB0aGUgY29tcG9uZW50IGNvcnJlY3RseT8nXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKGhhc0F0dHJzKSB7XG4gICAgcmV0dXJuIGdldElzQmluZGluZyhlbClcbiAgfVxufVxuXG4vKipcbiAqIEdldCBcImlzXCIgYmluZGluZyBmcm9tIGFuIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogQHJldHVybiB7T2JqZWN0fHVuZGVmaW5lZH1cbiAqL1xuXG5mdW5jdGlvbiBnZXRJc0JpbmRpbmcgKGVsKSB7XG4gIC8vIGR5bmFtaWMgc3ludGF4XG4gIHZhciBleHAgPSBfLmF0dHIoZWwsICdpcycpXG4gIGlmIChleHAgIT0gbnVsbCkge1xuICAgIHJldHVybiB7IGlkOiBleHAgfVxuICB9IGVsc2Uge1xuICAgIGV4cCA9IF8uZ2V0QmluZEF0dHIoZWwsICdpcycpXG4gICAgaWYgKGV4cCAhPSBudWxsKSB7XG4gICAgICByZXR1cm4geyBpZDogZXhwLCBkeW5hbWljOiB0cnVlIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBTZXQgYSBwcm9wJ3MgaW5pdGlhbCB2YWx1ZSBvbiBhIHZtIGFuZCBpdHMgZGF0YSBvYmplY3QuXG4gKlxuICogQHBhcmFtIHtWdWV9IHZtXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcFxuICogQHBhcmFtIHsqfSB2YWx1ZVxuICovXG5cbmV4cG9ydHMuaW5pdFByb3AgPSBmdW5jdGlvbiAodm0sIHByb3AsIHZhbHVlKSB7XG4gIGlmIChleHBvcnRzLmFzc2VydFByb3AocHJvcCwgdmFsdWUpKSB7XG4gICAgdmFyIGtleSA9IHByb3AucGF0aFxuICAgIHZtW2tleV0gPSB2bS5fZGF0YVtrZXldID0gdmFsdWVcbiAgfVxufVxuXG4vKipcbiAqIEFzc2VydCB3aGV0aGVyIGEgcHJvcCBpcyB2YWxpZC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcFxuICogQHBhcmFtIHsqfSB2YWx1ZVxuICovXG5cbmV4cG9ydHMuYXNzZXJ0UHJvcCA9IGZ1bmN0aW9uIChwcm9wLCB2YWx1ZSkge1xuICAvLyBpZiBhIHByb3AgaXMgbm90IHByb3ZpZGVkIGFuZCBpcyBub3QgcmVxdWlyZWQsXG4gIC8vIHNraXAgdGhlIGNoZWNrLlxuICBpZiAocHJvcC5yYXcgPT09IG51bGwgJiYgIXByb3AucmVxdWlyZWQpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG4gIHZhciBvcHRpb25zID0gcHJvcC5vcHRpb25zXG4gIHZhciB0eXBlID0gb3B0aW9ucy50eXBlXG4gIHZhciB2YWxpZCA9IHRydWVcbiAgdmFyIGV4cGVjdGVkVHlwZVxuICBpZiAodHlwZSkge1xuICAgIGlmICh0eXBlID09PSBTdHJpbmcpIHtcbiAgICAgIGV4cGVjdGVkVHlwZSA9ICdzdHJpbmcnXG4gICAgICB2YWxpZCA9IHR5cGVvZiB2YWx1ZSA9PT0gZXhwZWN0ZWRUeXBlXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBOdW1iZXIpIHtcbiAgICAgIGV4cGVjdGVkVHlwZSA9ICdudW1iZXInXG4gICAgICB2YWxpZCA9IHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcidcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IEJvb2xlYW4pIHtcbiAgICAgIGV4cGVjdGVkVHlwZSA9ICdib29sZWFuJ1xuICAgICAgdmFsaWQgPSB0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJ1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gRnVuY3Rpb24pIHtcbiAgICAgIGV4cGVjdGVkVHlwZSA9ICdmdW5jdGlvbidcbiAgICAgIHZhbGlkID0gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBPYmplY3QpIHtcbiAgICAgIGV4cGVjdGVkVHlwZSA9ICdvYmplY3QnXG4gICAgICB2YWxpZCA9IF8uaXNQbGFpbk9iamVjdCh2YWx1ZSlcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IEFycmF5KSB7XG4gICAgICBleHBlY3RlZFR5cGUgPSAnYXJyYXknXG4gICAgICB2YWxpZCA9IF8uaXNBcnJheSh2YWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsaWQgPSB2YWx1ZSBpbnN0YW5jZW9mIHR5cGVcbiAgICB9XG4gIH1cbiAgaWYgKCF2YWxpZCkge1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgXy53YXJuKFxuICAgICAgJ0ludmFsaWQgcHJvcDogdHlwZSBjaGVjayBmYWlsZWQgZm9yICcgK1xuICAgICAgcHJvcC5wYXRoICsgJz1cIicgKyBwcm9wLnJhdyArICdcIi4nICtcbiAgICAgICcgRXhwZWN0ZWQgJyArIGZvcm1hdFR5cGUoZXhwZWN0ZWRUeXBlKSArXG4gICAgICAnLCBnb3QgJyArIGZvcm1hdFZhbHVlKHZhbHVlKSArICcuJ1xuICAgIClcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuICB2YXIgdmFsaWRhdG9yID0gb3B0aW9ucy52YWxpZGF0b3JcbiAgaWYgKHZhbGlkYXRvcikge1xuICAgIGlmICghdmFsaWRhdG9yLmNhbGwobnVsbCwgdmFsdWUpKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIF8ud2FybihcbiAgICAgICAgJ0ludmFsaWQgcHJvcDogY3VzdG9tIHZhbGlkYXRvciBjaGVjayBmYWlsZWQgZm9yICcgK1xuICAgICAgICBwcm9wLnBhdGggKyAnPVwiJyArIHByb3AucmF3ICsgJ1wiJ1xuICAgICAgKVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlXG59XG5cbmZ1bmN0aW9uIGZvcm1hdFR5cGUgKHZhbCkge1xuICByZXR1cm4gdmFsXG4gICAgPyB2YWwuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB2YWwuc2xpY2UoMSlcbiAgICA6ICdjdXN0b20gdHlwZSdcbn1cblxuZnVuY3Rpb24gZm9ybWF0VmFsdWUgKHZhbCkge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbCkuc2xpY2UoOCwgLTEpXG59XG4iLCIvKipcbiAqIEVuYWJsZSBkZWJ1ZyB1dGlsaXRpZXMuXG4gKi9cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcblxuICB2YXIgY29uZmlnID0gcmVxdWlyZSgnLi4vY29uZmlnJylcbiAgdmFyIGhhc0NvbnNvbGUgPSB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCdcblxuICAvKipcbiAgICogTG9nIGEgbWVzc2FnZS5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IG1zZ1xuICAgKi9cblxuICBleHBvcnRzLmxvZyA9IGZ1bmN0aW9uIChtc2cpIHtcbiAgICBpZiAoaGFzQ29uc29sZSAmJiBjb25maWcuZGVidWcpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdbVnVlIGluZm9dOiAnICsgbXNnKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBXZSd2ZSBnb3QgYSBwcm9ibGVtIGhlcmUuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBtc2dcbiAgICovXG5cbiAgZXhwb3J0cy53YXJuID0gZnVuY3Rpb24gKG1zZywgZSkge1xuICAgIGlmIChoYXNDb25zb2xlICYmICghY29uZmlnLnNpbGVudCB8fCBjb25maWcuZGVidWcpKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ1tWdWUgd2Fybl06ICcgKyBtc2cpXG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgIGlmIChjb25maWcuZGVidWcpIHtcbiAgICAgICAgY29uc29sZS53YXJuKChlIHx8IG5ldyBFcnJvcignV2FybmluZyBTdGFjayBUcmFjZScpKS5zdGFjaylcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQXNzZXJ0IGFzc2V0IGV4aXN0c1xuICAgKi9cblxuICBleHBvcnRzLmFzc2VydEFzc2V0ID0gZnVuY3Rpb24gKHZhbCwgdHlwZSwgaWQpIHtcbiAgICBpZiAoIXZhbCkge1xuICAgICAgZXhwb3J0cy53YXJuKCdGYWlsZWQgdG8gcmVzb2x2ZSAnICsgdHlwZSArICc6ICcgKyBpZClcbiAgICB9XG4gIH1cbn1cbiIsInZhciBfID0gcmVxdWlyZSgnLi9pbmRleCcpXG52YXIgY29uZmlnID0gcmVxdWlyZSgnLi4vY29uZmlnJylcbnZhciB0cmFuc2l0aW9uID0gcmVxdWlyZSgnLi4vdHJhbnNpdGlvbicpXG5cbi8qKlxuICogUXVlcnkgYW4gZWxlbWVudCBzZWxlY3RvciBpZiBpdCdzIG5vdCBhbiBlbGVtZW50IGFscmVhZHkuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd8RWxlbWVudH0gZWxcbiAqIEByZXR1cm4ge0VsZW1lbnR9XG4gKi9cblxuZXhwb3J0cy5xdWVyeSA9IGZ1bmN0aW9uIChlbCkge1xuICBpZiAodHlwZW9mIGVsID09PSAnc3RyaW5nJykge1xuICAgIHZhciBzZWxlY3RvciA9IGVsXG4gICAgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsKVxuICAgIGlmICghZWwpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgXy53YXJuKFxuICAgICAgICAnQ2Fubm90IGZpbmQgZWxlbWVudDogJyArIHNlbGVjdG9yXG4gICAgICApXG4gICAgfVxuICB9XG4gIHJldHVybiBlbFxufVxuXG4vKipcbiAqIENoZWNrIGlmIGEgbm9kZSBpcyBpbiB0aGUgZG9jdW1lbnQuXG4gKiBOb3RlOiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY29udGFpbnMgc2hvdWxkIHdvcmsgaGVyZVxuICogYnV0IGFsd2F5cyByZXR1cm5zIGZhbHNlIGZvciBjb21tZW50IG5vZGVzIGluIHBoYW50b21qcyxcbiAqIG1ha2luZyB1bml0IHRlc3RzIGRpZmZpY3VsdC4gVGhpcyBpcyBmaXhlZCBieSBkb2luZyB0aGVcbiAqIGNvbnRhaW5zKCkgY2hlY2sgb24gdGhlIG5vZGUncyBwYXJlbnROb2RlIGluc3RlYWQgb2ZcbiAqIHRoZSBub2RlIGl0c2VsZi5cbiAqXG4gKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cblxuZXhwb3J0cy5pbkRvYyA9IGZ1bmN0aW9uIChub2RlKSB7XG4gIHZhciBkb2MgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnRcbiAgdmFyIHBhcmVudCA9IG5vZGUgJiYgbm9kZS5wYXJlbnROb2RlXG4gIHJldHVybiBkb2MgPT09IG5vZGUgfHxcbiAgICBkb2MgPT09IHBhcmVudCB8fFxuICAgICEhKHBhcmVudCAmJiBwYXJlbnQubm9kZVR5cGUgPT09IDEgJiYgKGRvYy5jb250YWlucyhwYXJlbnQpKSlcbn1cblxuLyoqXG4gKiBHZXQgYW5kIHJlbW92ZSBhbiBhdHRyaWJ1dGUgZnJvbSBhIG5vZGUuXG4gKlxuICogQHBhcmFtIHtOb2RlfSBub2RlXG4gKiBAcGFyYW0ge1N0cmluZ30gYXR0clxuICovXG5cbmV4cG9ydHMuYXR0ciA9IGZ1bmN0aW9uIChub2RlLCBhdHRyKSB7XG4gIHZhciB2YWwgPSBub2RlLmdldEF0dHJpYnV0ZShhdHRyKVxuICBpZiAodmFsICE9PSBudWxsKSB7XG4gICAgbm9kZS5yZW1vdmVBdHRyaWJ1dGUoYXR0cilcbiAgfVxuICByZXR1cm4gdmFsXG59XG5cbi8qKlxuICogR2V0IGFuIGF0dHJpYnV0ZSB3aXRoIGNvbG9uIG9yIHYtYmluZDogcHJlZml4LlxuICpcbiAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAqIEByZXR1cm4ge1N0cmluZ3xudWxsfVxuICovXG5cbmV4cG9ydHMuZ2V0QmluZEF0dHIgPSBmdW5jdGlvbiAobm9kZSwgbmFtZSkge1xuICB2YXIgdmFsID0gZXhwb3J0cy5hdHRyKG5vZGUsICc6JyArIG5hbWUpXG4gIGlmICh2YWwgPT09IG51bGwpIHtcbiAgICB2YWwgPSBleHBvcnRzLmF0dHIobm9kZSwgJ3YtYmluZDonICsgbmFtZSlcbiAgfVxuICByZXR1cm4gdmFsXG59XG5cbi8qKlxuICogSW5zZXJ0IGVsIGJlZm9yZSB0YXJnZXRcbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gKiBAcGFyYW0ge0VsZW1lbnR9IHRhcmdldFxuICovXG5cbmV4cG9ydHMuYmVmb3JlID0gZnVuY3Rpb24gKGVsLCB0YXJnZXQpIHtcbiAgdGFyZ2V0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsLCB0YXJnZXQpXG59XG5cbi8qKlxuICogSW5zZXJ0IGVsIGFmdGVyIHRhcmdldFxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAqIEBwYXJhbSB7RWxlbWVudH0gdGFyZ2V0XG4gKi9cblxuZXhwb3J0cy5hZnRlciA9IGZ1bmN0aW9uIChlbCwgdGFyZ2V0KSB7XG4gIGlmICh0YXJnZXQubmV4dFNpYmxpbmcpIHtcbiAgICBleHBvcnRzLmJlZm9yZShlbCwgdGFyZ2V0Lm5leHRTaWJsaW5nKVxuICB9IGVsc2Uge1xuICAgIHRhcmdldC5wYXJlbnROb2RlLmFwcGVuZENoaWxkKGVsKVxuICB9XG59XG5cbi8qKlxuICogUmVtb3ZlIGVsIGZyb20gRE9NXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICovXG5cbmV4cG9ydHMucmVtb3ZlID0gZnVuY3Rpb24gKGVsKSB7XG4gIGVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWwpXG59XG5cbi8qKlxuICogUHJlcGVuZCBlbCB0byB0YXJnZXRcbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gKiBAcGFyYW0ge0VsZW1lbnR9IHRhcmdldFxuICovXG5cbmV4cG9ydHMucHJlcGVuZCA9IGZ1bmN0aW9uIChlbCwgdGFyZ2V0KSB7XG4gIGlmICh0YXJnZXQuZmlyc3RDaGlsZCkge1xuICAgIGV4cG9ydHMuYmVmb3JlKGVsLCB0YXJnZXQuZmlyc3RDaGlsZClcbiAgfSBlbHNlIHtcbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoZWwpXG4gIH1cbn1cblxuLyoqXG4gKiBSZXBsYWNlIHRhcmdldCB3aXRoIGVsXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSB0YXJnZXRcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAqL1xuXG5leHBvcnRzLnJlcGxhY2UgPSBmdW5jdGlvbiAodGFyZ2V0LCBlbCkge1xuICB2YXIgcGFyZW50ID0gdGFyZ2V0LnBhcmVudE5vZGVcbiAgaWYgKHBhcmVudCkge1xuICAgIHBhcmVudC5yZXBsYWNlQ2hpbGQoZWwsIHRhcmdldClcbiAgfVxufVxuXG4vKipcbiAqIEFkZCBldmVudCBsaXN0ZW5lciBzaG9ydGhhbmQuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYlxuICovXG5cbmV4cG9ydHMub24gPSBmdW5jdGlvbiAoZWwsIGV2ZW50LCBjYikge1xuICBlbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBjYilcbn1cblxuLyoqXG4gKiBSZW1vdmUgZXZlbnQgbGlzdGVuZXIgc2hvcnRoYW5kLlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2JcbiAqL1xuXG5leHBvcnRzLm9mZiA9IGZ1bmN0aW9uIChlbCwgZXZlbnQsIGNiKSB7XG4gIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGNiKVxufVxuXG4vKipcbiAqIEFkZCBjbGFzcyB3aXRoIGNvbXBhdGliaWxpdHkgZm9yIElFICYgU1ZHXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogQHBhcmFtIHtTdHJvbmd9IGNsc1xuICovXG5cbmV4cG9ydHMuYWRkQ2xhc3MgPSBmdW5jdGlvbiAoZWwsIGNscykge1xuICBpZiAoZWwuY2xhc3NMaXN0KSB7XG4gICAgZWwuY2xhc3NMaXN0LmFkZChjbHMpXG4gIH0gZWxzZSB7XG4gICAgdmFyIGN1ciA9ICcgJyArIChlbC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgfHwgJycpICsgJyAnXG4gICAgaWYgKGN1ci5pbmRleE9mKCcgJyArIGNscyArICcgJykgPCAwKSB7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgKGN1ciArIGNscykudHJpbSgpKVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZSBjbGFzcyB3aXRoIGNvbXBhdGliaWxpdHkgZm9yIElFICYgU1ZHXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogQHBhcmFtIHtTdHJvbmd9IGNsc1xuICovXG5cbmV4cG9ydHMucmVtb3ZlQ2xhc3MgPSBmdW5jdGlvbiAoZWwsIGNscykge1xuICBpZiAoZWwuY2xhc3NMaXN0KSB7XG4gICAgZWwuY2xhc3NMaXN0LnJlbW92ZShjbHMpXG4gIH0gZWxzZSB7XG4gICAgdmFyIGN1ciA9ICcgJyArIChlbC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgfHwgJycpICsgJyAnXG4gICAgdmFyIHRhciA9ICcgJyArIGNscyArICcgJ1xuICAgIHdoaWxlIChjdXIuaW5kZXhPZih0YXIpID49IDApIHtcbiAgICAgIGN1ciA9IGN1ci5yZXBsYWNlKHRhciwgJyAnKVxuICAgIH1cbiAgICBlbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgY3VyLnRyaW0oKSlcbiAgfVxuICBpZiAoIWVsLmNsYXNzTmFtZSkge1xuICAgIGVsLnJlbW92ZUF0dHJpYnV0ZSgnY2xhc3MnKVxuICB9XG59XG5cbi8qKlxuICogRXh0cmFjdCByYXcgY29udGVudCBpbnNpZGUgYW4gZWxlbWVudCBpbnRvIGEgdGVtcG9yYXJ5XG4gKiBjb250YWluZXIgZGl2XG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogQHBhcmFtIHtCb29sZWFufSBhc0ZyYWdtZW50XG4gKiBAcmV0dXJuIHtFbGVtZW50fVxuICovXG5cbmV4cG9ydHMuZXh0cmFjdENvbnRlbnQgPSBmdW5jdGlvbiAoZWwsIGFzRnJhZ21lbnQpIHtcbiAgdmFyIGNoaWxkXG4gIHZhciByYXdDb250ZW50XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAoXG4gICAgZXhwb3J0cy5pc1RlbXBsYXRlKGVsKSAmJlxuICAgIGVsLmNvbnRlbnQgaW5zdGFuY2VvZiBEb2N1bWVudEZyYWdtZW50XG4gICkge1xuICAgIGVsID0gZWwuY29udGVudFxuICB9XG4gIGlmIChlbC5oYXNDaGlsZE5vZGVzKCkpIHtcbiAgICBleHBvcnRzLnRyaW1Ob2RlKGVsKVxuICAgIHJhd0NvbnRlbnQgPSBhc0ZyYWdtZW50XG4gICAgICA/IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKVxuICAgICAgOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbmQtYXNzaWduICovXG4gICAgd2hpbGUgKGNoaWxkID0gZWwuZmlyc3RDaGlsZCkge1xuICAgIC8qIGVzbGludC1lbmFibGUgbm8tY29uZC1hc3NpZ24gKi9cbiAgICAgIHJhd0NvbnRlbnQuYXBwZW5kQ2hpbGQoY2hpbGQpXG4gICAgfVxuICB9XG4gIHJldHVybiByYXdDb250ZW50XG59XG5cbi8qKlxuICogVHJpbSBwb3NzaWJsZSBlbXB0eSBoZWFkL3RhaWwgdGV4dE5vZGVzIGluc2lkZSBhIHBhcmVudC5cbiAqXG4gKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAqL1xuXG5leHBvcnRzLnRyaW1Ob2RlID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgdHJpbShub2RlLCBub2RlLmZpcnN0Q2hpbGQpXG4gIHRyaW0obm9kZSwgbm9kZS5sYXN0Q2hpbGQpXG59XG5cbmZ1bmN0aW9uIHRyaW0gKHBhcmVudCwgbm9kZSkge1xuICBpZiAobm9kZSAmJiBub2RlLm5vZGVUeXBlID09PSAzICYmICFub2RlLmRhdGEudHJpbSgpKSB7XG4gICAgcGFyZW50LnJlbW92ZUNoaWxkKG5vZGUpXG4gIH1cbn1cblxuLyoqXG4gKiBDaGVjayBpZiBhbiBlbGVtZW50IGlzIGEgdGVtcGxhdGUgdGFnLlxuICogTm90ZSBpZiB0aGUgdGVtcGxhdGUgYXBwZWFycyBpbnNpZGUgYW4gU1ZHIGl0cyB0YWdOYW1lXG4gKiB3aWxsIGJlIGluIGxvd2VyY2FzZS5cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gKi9cblxuZXhwb3J0cy5pc1RlbXBsYXRlID0gZnVuY3Rpb24gKGVsKSB7XG4gIHJldHVybiBlbC50YWdOYW1lICYmXG4gICAgZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAndGVtcGxhdGUnXG59XG5cbi8qKlxuICogQ3JlYXRlIGFuIFwiYW5jaG9yXCIgZm9yIHBlcmZvcm1pbmcgZG9tIGluc2VydGlvbi9yZW1vdmFscy5cbiAqIFRoaXMgaXMgdXNlZCBpbiBhIG51bWJlciBvZiBzY2VuYXJpb3M6XG4gKiAtIGZyYWdtZW50IGluc3RhbmNlXG4gKiAtIHYtaHRtbFxuICogLSB2LWlmXG4gKiAtIHYtZm9yXG4gKiAtIGNvbXBvbmVudFxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBjb250ZW50XG4gKiBAcGFyYW0ge0Jvb2xlYW59IHBlcnNpc3QgLSBJRSB0cmFzaGVzIGVtcHR5IHRleHROb2RlcyBvblxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvbmVOb2RlKHRydWUpLCBzbyBpbiBjZXJ0YWluXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlcyB0aGUgYW5jaG9yIG5lZWRzIHRvIGJlXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub24tZW1wdHkgdG8gYmUgcGVyc2lzdGVkIGluXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZXMuXG4gKiBAcmV0dXJuIHtDb21tZW50fFRleHR9XG4gKi9cblxuZXhwb3J0cy5jcmVhdGVBbmNob3IgPSBmdW5jdGlvbiAoY29udGVudCwgcGVyc2lzdCkge1xuICByZXR1cm4gY29uZmlnLmRlYnVnXG4gICAgPyBkb2N1bWVudC5jcmVhdGVDb21tZW50KGNvbnRlbnQpXG4gICAgOiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShwZXJzaXN0ID8gJyAnIDogJycpXG59XG5cbi8qKlxuICogRmluZCBhIGNvbXBvbmVudCByZWYgYXR0cmlidXRlIHRoYXQgc3RhcnRzIHdpdGggJC5cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IG5vZGVcbiAqIEByZXR1cm4ge1N0cmluZ3x1bmRlZmluZWR9XG4gKi9cblxudmFyIHJlZlJFID0gL152LXJlZjovXG5leHBvcnRzLmZpbmRSZWYgPSBmdW5jdGlvbiAobm9kZSkge1xuICBpZiAobm9kZS5oYXNBdHRyaWJ1dGVzKCkpIHtcbiAgICB2YXIgYXR0cnMgPSBub2RlLmF0dHJpYnV0ZXNcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IGF0dHJzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgdmFyIG5hbWUgPSBhdHRyc1tpXS5uYW1lXG4gICAgICBpZiAocmVmUkUudGVzdChuYW1lKSkge1xuICAgICAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZShuYW1lKVxuICAgICAgICByZXR1cm4gXy5jYW1lbGl6ZShuYW1lLnJlcGxhY2UocmVmUkUsICcnKSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBNYXAgYSBmdW5jdGlvbiB0byBhIHJhbmdlIG9mIG5vZGVzIC5cbiAqXG4gKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAqIEBwYXJhbSB7Tm9kZX0gZW5kXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBvcFxuICovXG5cbmV4cG9ydHMubWFwTm9kZVJhbmdlID0gZnVuY3Rpb24gKG5vZGUsIGVuZCwgb3ApIHtcbiAgdmFyIG5leHRcbiAgd2hpbGUgKG5vZGUgIT09IGVuZCkge1xuICAgIG5leHQgPSBub2RlLm5leHRTaWJsaW5nXG4gICAgb3Aobm9kZSlcbiAgICBub2RlID0gbmV4dFxuICB9XG4gIG9wKGVuZClcbn1cblxuLyoqXG4gKiBSZW1vdmUgYSByYW5nZSBvZiBub2RlcyB3aXRoIHRyYW5zaXRpb24sIHN0b3JlXG4gKiB0aGUgbm9kZXMgaW4gYSBmcmFnbWVudCB3aXRoIGNvcnJlY3Qgb3JkZXJpbmcsXG4gKiBhbmQgY2FsbCBjYWxsYmFjayB3aGVuIGRvbmUuXG4gKlxuICogQHBhcmFtIHtOb2RlfSBzdGFydFxuICogQHBhcmFtIHtOb2RlfSBlbmRcbiAqIEBwYXJhbSB7VnVlfSB2bVxuICogQHBhcmFtIHtEb2N1bWVudEZyYWdtZW50fSBmcmFnXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYlxuICovXG5cbmV4cG9ydHMucmVtb3ZlTm9kZVJhbmdlID0gZnVuY3Rpb24gKHN0YXJ0LCBlbmQsIHZtLCBmcmFnLCBjYikge1xuICB2YXIgZG9uZSA9IGZhbHNlXG4gIHZhciByZW1vdmVkID0gMFxuICB2YXIgbm9kZXMgPSBbXVxuICBleHBvcnRzLm1hcE5vZGVSYW5nZShzdGFydCwgZW5kLCBmdW5jdGlvbiAobm9kZSkge1xuICAgIGlmIChub2RlID09PSBlbmQpIGRvbmUgPSB0cnVlXG4gICAgbm9kZXMucHVzaChub2RlKVxuICAgIHRyYW5zaXRpb24ucmVtb3ZlKG5vZGUsIHZtLCBvblJlbW92ZWQpXG4gIH0pXG4gIGZ1bmN0aW9uIG9uUmVtb3ZlZCAoKSB7XG4gICAgcmVtb3ZlZCsrXG4gICAgaWYgKGRvbmUgJiYgcmVtb3ZlZCA+PSBub2Rlcy5sZW5ndGgpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZnJhZy5hcHBlbmRDaGlsZChub2Rlc1tpXSlcbiAgICAgIH1cbiAgICAgIGNiICYmIGNiKClcbiAgICB9XG4gIH1cbn1cbiIsIi8vIGNhbiB3ZSB1c2UgX19wcm90b19fP1xuZXhwb3J0cy5oYXNQcm90byA9ICdfX3Byb3RvX18nIGluIHt9XG5cbi8vIEJyb3dzZXIgZW52aXJvbm1lbnQgc25pZmZpbmdcbnZhciBpbkJyb3dzZXIgPSBleHBvcnRzLmluQnJvd3NlciA9XG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh3aW5kb3cpICE9PSAnW29iamVjdCBPYmplY3RdJ1xuXG5leHBvcnRzLmlzSUU5ID1cbiAgaW5Ccm93c2VyICYmXG4gIG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdtc2llIDkuMCcpID4gMFxuXG5leHBvcnRzLmlzQW5kcm9pZCA9XG4gIGluQnJvd3NlciAmJlxuICBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkuaW5kZXhPZignYW5kcm9pZCcpID4gMFxuXG4vLyBUcmFuc2l0aW9uIHByb3BlcnR5L2V2ZW50IHNuaWZmaW5nXG5pZiAoaW5Ccm93c2VyICYmICFleHBvcnRzLmlzSUU5KSB7XG4gIHZhciBpc1dlYmtpdFRyYW5zID1cbiAgICB3aW5kb3cub250cmFuc2l0aW9uZW5kID09PSB1bmRlZmluZWQgJiZcbiAgICB3aW5kb3cub253ZWJraXR0cmFuc2l0aW9uZW5kICE9PSB1bmRlZmluZWRcbiAgdmFyIGlzV2Via2l0QW5pbSA9XG4gICAgd2luZG93Lm9uYW5pbWF0aW9uZW5kID09PSB1bmRlZmluZWQgJiZcbiAgICB3aW5kb3cub253ZWJraXRhbmltYXRpb25lbmQgIT09IHVuZGVmaW5lZFxuICBleHBvcnRzLnRyYW5zaXRpb25Qcm9wID0gaXNXZWJraXRUcmFuc1xuICAgID8gJ1dlYmtpdFRyYW5zaXRpb24nXG4gICAgOiAndHJhbnNpdGlvbidcbiAgZXhwb3J0cy50cmFuc2l0aW9uRW5kRXZlbnQgPSBpc1dlYmtpdFRyYW5zXG4gICAgPyAnd2Via2l0VHJhbnNpdGlvbkVuZCdcbiAgICA6ICd0cmFuc2l0aW9uZW5kJ1xuICBleHBvcnRzLmFuaW1hdGlvblByb3AgPSBpc1dlYmtpdEFuaW1cbiAgICA/ICdXZWJraXRBbmltYXRpb24nXG4gICAgOiAnYW5pbWF0aW9uJ1xuICBleHBvcnRzLmFuaW1hdGlvbkVuZEV2ZW50ID0gaXNXZWJraXRBbmltXG4gICAgPyAnd2Via2l0QW5pbWF0aW9uRW5kJ1xuICAgIDogJ2FuaW1hdGlvbmVuZCdcbn1cblxuLyoqXG4gKiBEZWZlciBhIHRhc2sgdG8gZXhlY3V0ZSBpdCBhc3luY2hyb25vdXNseS4gSWRlYWxseSB0aGlzXG4gKiBzaG91bGQgYmUgZXhlY3V0ZWQgYXMgYSBtaWNyb3Rhc2ssIHNvIHdlIGxldmVyYWdlXG4gKiBNdXRhdGlvbk9ic2VydmVyIGlmIGl0J3MgYXZhaWxhYmxlLCBhbmQgZmFsbGJhY2sgdG9cbiAqIHNldFRpbWVvdXQoMCkuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2JcbiAqIEBwYXJhbSB7T2JqZWN0fSBjdHhcbiAqL1xuXG5leHBvcnRzLm5leHRUaWNrID0gKGZ1bmN0aW9uICgpIHtcbiAgdmFyIGNhbGxiYWNrcyA9IFtdXG4gIHZhciBwZW5kaW5nID0gZmFsc2VcbiAgdmFyIHRpbWVyRnVuY1xuICBmdW5jdGlvbiBuZXh0VGlja0hhbmRsZXIgKCkge1xuICAgIHBlbmRpbmcgPSBmYWxzZVxuICAgIHZhciBjb3BpZXMgPSBjYWxsYmFja3Muc2xpY2UoMClcbiAgICBjYWxsYmFja3MgPSBbXVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29waWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb3BpZXNbaV0oKVxuICAgIH1cbiAgfVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKHR5cGVvZiBNdXRhdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBjb3VudGVyID0gMVxuICAgIHZhciBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKG5leHRUaWNrSGFuZGxlcilcbiAgICB2YXIgdGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjb3VudGVyKVxuICAgIG9ic2VydmVyLm9ic2VydmUodGV4dE5vZGUsIHtcbiAgICAgIGNoYXJhY3RlckRhdGE6IHRydWVcbiAgICB9KVxuICAgIHRpbWVyRnVuYyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvdW50ZXIgPSAoY291bnRlciArIDEpICUgMlxuICAgICAgdGV4dE5vZGUuZGF0YSA9IGNvdW50ZXJcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdGltZXJGdW5jID0gc2V0VGltZW91dFxuICB9XG4gIHJldHVybiBmdW5jdGlvbiAoY2IsIGN0eCkge1xuICAgIHZhciBmdW5jID0gY3R4XG4gICAgICA/IGZ1bmN0aW9uICgpIHsgY2IuY2FsbChjdHgpIH1cbiAgICAgIDogY2JcbiAgICBjYWxsYmFja3MucHVzaChmdW5jKVxuICAgIGlmIChwZW5kaW5nKSByZXR1cm5cbiAgICBwZW5kaW5nID0gdHJ1ZVxuICAgIHRpbWVyRnVuYyhuZXh0VGlja0hhbmRsZXIsIDApXG4gIH1cbn0pKClcbiIsInZhciBsYW5nID0gcmVxdWlyZSgnLi9sYW5nJylcbnZhciBleHRlbmQgPSBsYW5nLmV4dGVuZFxuXG5leHRlbmQoZXhwb3J0cywgbGFuZylcbmV4dGVuZChleHBvcnRzLCByZXF1aXJlKCcuL2VudicpKVxuZXh0ZW5kKGV4cG9ydHMsIHJlcXVpcmUoJy4vZG9tJykpXG5leHRlbmQoZXhwb3J0cywgcmVxdWlyZSgnLi9vcHRpb25zJykpXG5leHRlbmQoZXhwb3J0cywgcmVxdWlyZSgnLi9jb21wb25lbnQnKSlcbmV4dGVuZChleHBvcnRzLCByZXF1aXJlKCcuL2RlYnVnJykpXG4iLCIvKipcbiAqIFNldCBhIHByb3BlcnR5IG9uIGFuIG9iamVjdC4gQWRkcyB0aGUgbmV3IHByb3BlcnR5IGFuZFxuICogdHJpZ2dlcnMgY2hhbmdlIG5vdGlmaWNhdGlvbiBpZiB0aGUgcHJvcGVydHkgZG9lc24ndFxuICogYWxyZWFkeSBleGlzdC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5XG4gKiBAcGFyYW0geyp9IHZhbFxuICogQHB1YmxpY1xuICovXG5cbmV4cG9ydHMuc2V0ID0gZnVuY3Rpb24gc2V0IChvYmosIGtleSwgdmFsKSB7XG4gIGlmIChvYmouaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgIG9ialtrZXldID0gdmFsXG4gICAgcmV0dXJuXG4gIH1cbiAgaWYgKG9iai5faXNWdWUpIHtcbiAgICBzZXQob2JqLl9kYXRhLCBrZXksIHZhbClcbiAgICByZXR1cm5cbiAgfVxuICB2YXIgb2IgPSBvYmouX19vYl9fXG4gIGlmICghb2IpIHtcbiAgICBvYmpba2V5XSA9IHZhbFxuICAgIHJldHVyblxuICB9XG4gIG9iLmNvbnZlcnQoa2V5LCB2YWwpXG4gIG9iLmRlcC5ub3RpZnkoKVxuICBpZiAob2Iudm1zKSB7XG4gICAgdmFyIGkgPSBvYi52bXMubGVuZ3RoXG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgdmFyIHZtID0gb2Iudm1zW2ldXG4gICAgICB2bS5fcHJveHkoa2V5KVxuICAgICAgdm0uX2RpZ2VzdCgpXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogRGVsZXRlIGEgcHJvcGVydHkgYW5kIHRyaWdnZXIgY2hhbmdlIGlmIG5lY2Vzc2FyeS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5XG4gKi9cblxuZXhwb3J0cy5kZWxldGUgPSBmdW5jdGlvbiAob2JqLCBrZXkpIHtcbiAgaWYgKCFvYmouaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgIHJldHVyblxuICB9XG4gIGRlbGV0ZSBvYmpba2V5XVxuICB2YXIgb2IgPSBvYmouX19vYl9fXG4gIGlmICghb2IpIHtcbiAgICByZXR1cm5cbiAgfVxuICBvYi5kZXAubm90aWZ5KClcbiAgaWYgKG9iLnZtcykge1xuICAgIHZhciBpID0gb2Iudm1zLmxlbmd0aFxuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIHZhciB2bSA9IG9iLnZtc1tpXVxuICAgICAgdm0uX3VucHJveHkoa2V5KVxuICAgICAgdm0uX2RpZ2VzdCgpXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgYW4gZXhwcmVzc2lvbiBpcyBhIGxpdGVyYWwgdmFsdWUuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGV4cFxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuXG52YXIgbGl0ZXJhbFZhbHVlUkUgPSAvXlxccz8odHJ1ZXxmYWxzZXxbXFxkXFwuXSt8J1teJ10qJ3xcIlteXCJdKlwiKVxccz8kL1xuZXhwb3J0cy5pc0xpdGVyYWwgPSBmdW5jdGlvbiAoZXhwKSB7XG4gIHJldHVybiBsaXRlcmFsVmFsdWVSRS50ZXN0KGV4cClcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBhIHN0cmluZyBzdGFydHMgd2l0aCAkIG9yIF9cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5cbmV4cG9ydHMuaXNSZXNlcnZlZCA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgdmFyIGMgPSAoc3RyICsgJycpLmNoYXJDb2RlQXQoMClcbiAgcmV0dXJuIGMgPT09IDB4MjQgfHwgYyA9PT0gMHg1RlxufVxuXG4vKipcbiAqIEd1YXJkIHRleHQgb3V0cHV0LCBtYWtlIHN1cmUgdW5kZWZpbmVkIG91dHB1dHNcbiAqIGVtcHR5IHN0cmluZ1xuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuXG5leHBvcnRzLnRvU3RyaW5nID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PSBudWxsXG4gICAgPyAnJ1xuICAgIDogdmFsdWUudG9TdHJpbmcoKVxufVxuXG4vKipcbiAqIENoZWNrIGFuZCBjb252ZXJ0IHBvc3NpYmxlIG51bWVyaWMgc3RyaW5ncyB0byBudW1iZXJzXG4gKiBiZWZvcmUgc2V0dGluZyBiYWNrIHRvIGRhdGFcbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlXG4gKiBAcmV0dXJuIHsqfE51bWJlcn1cbiAqL1xuXG5leHBvcnRzLnRvTnVtYmVyID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHZhbHVlXG4gIH0gZWxzZSB7XG4gICAgdmFyIHBhcnNlZCA9IE51bWJlcih2YWx1ZSlcbiAgICByZXR1cm4gaXNOYU4ocGFyc2VkKVxuICAgICAgPyB2YWx1ZVxuICAgICAgOiBwYXJzZWRcbiAgfVxufVxuXG4vKipcbiAqIENvbnZlcnQgc3RyaW5nIGJvb2xlYW4gbGl0ZXJhbHMgaW50byByZWFsIGJvb2xlYW5zLlxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAqIEByZXR1cm4geyp8Qm9vbGVhbn1cbiAqL1xuXG5leHBvcnRzLnRvQm9vbGVhbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT09ICd0cnVlJ1xuICAgID8gdHJ1ZVxuICAgIDogdmFsdWUgPT09ICdmYWxzZSdcbiAgICAgID8gZmFsc2VcbiAgICAgIDogdmFsdWVcbn1cblxuLyoqXG4gKiBTdHJpcCBxdW90ZXMgZnJvbSBhIHN0cmluZ1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge1N0cmluZyB8IGZhbHNlfVxuICovXG5cbmV4cG9ydHMuc3RyaXBRdW90ZXMgPSBmdW5jdGlvbiAoc3RyKSB7XG4gIHZhciBhID0gc3RyLmNoYXJDb2RlQXQoMClcbiAgdmFyIGIgPSBzdHIuY2hhckNvZGVBdChzdHIubGVuZ3RoIC0gMSlcbiAgcmV0dXJuIGEgPT09IGIgJiYgKGEgPT09IDB4MjIgfHwgYSA9PT0gMHgyNylcbiAgICA/IHN0ci5zbGljZSgxLCAtMSlcbiAgICA6IHN0clxufVxuXG4vKipcbiAqIENhbWVsaXplIGEgaHlwaGVuLWRlbG1pdGVkIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cblxudmFyIGNhbWVsaXplUkUgPSAvLShcXHcpL2dcbmV4cG9ydHMuY2FtZWxpemUgPSBmdW5jdGlvbiAoc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZShjYW1lbGl6ZVJFLCB0b1VwcGVyKVxufVxuXG5mdW5jdGlvbiB0b1VwcGVyIChfLCBjKSB7XG4gIHJldHVybiBjID8gYy50b1VwcGVyQ2FzZSgpIDogJydcbn1cblxuLyoqXG4gKiBIeXBoZW5hdGUgYSBjYW1lbENhc2Ugc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuXG52YXIgaHlwaGVuYXRlUkUgPSAvKFthLXpcXGRdKShbQS1aXSkvZ1xuZXhwb3J0cy5oeXBoZW5hdGUgPSBmdW5jdGlvbiAoc3RyKSB7XG4gIHJldHVybiBzdHJcbiAgICAucmVwbGFjZShoeXBoZW5hdGVSRSwgJyQxLSQyJylcbiAgICAudG9Mb3dlckNhc2UoKVxufVxuXG4vKipcbiAqIENvbnZlcnRzIGh5cGhlbi91bmRlcnNjb3JlL3NsYXNoIGRlbGltaXRlcmVkIG5hbWVzIGludG9cbiAqIGNhbWVsaXplZCBjbGFzc05hbWVzLlxuICpcbiAqIGUuZy4gbXktY29tcG9uZW50ID0+IE15Q29tcG9uZW50XG4gKiAgICAgIHNvbWVfZWxzZSAgICA9PiBTb21lRWxzZVxuICogICAgICBzb21lL2NvbXAgICAgPT4gU29tZUNvbXBcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cblxudmFyIGNsYXNzaWZ5UkUgPSAvKD86XnxbLV9cXC9dKShcXHcpL2dcbmV4cG9ydHMuY2xhc3NpZnkgPSBmdW5jdGlvbiAoc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZShjbGFzc2lmeVJFLCB0b1VwcGVyKVxufVxuXG4vKipcbiAqIFNpbXBsZSBiaW5kLCBmYXN0ZXIgdGhhbiBuYXRpdmVcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHBhcmFtIHtPYmplY3R9IGN0eFxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKi9cblxuZXhwb3J0cy5iaW5kID0gZnVuY3Rpb24gKGZuLCBjdHgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChhKSB7XG4gICAgdmFyIGwgPSBhcmd1bWVudHMubGVuZ3RoXG4gICAgcmV0dXJuIGxcbiAgICAgID8gbCA+IDFcbiAgICAgICAgPyBmbi5hcHBseShjdHgsIGFyZ3VtZW50cylcbiAgICAgICAgOiBmbi5jYWxsKGN0eCwgYSlcbiAgICAgIDogZm4uY2FsbChjdHgpXG4gIH1cbn1cblxuLyoqXG4gKiBDb252ZXJ0IGFuIEFycmF5LWxpa2Ugb2JqZWN0IHRvIGEgcmVhbCBBcnJheS5cbiAqXG4gKiBAcGFyYW0ge0FycmF5LWxpa2V9IGxpc3RcbiAqIEBwYXJhbSB7TnVtYmVyfSBbc3RhcnRdIC0gc3RhcnQgaW5kZXhcbiAqIEByZXR1cm4ge0FycmF5fVxuICovXG5cbmV4cG9ydHMudG9BcnJheSA9IGZ1bmN0aW9uIChsaXN0LCBzdGFydCkge1xuICBzdGFydCA9IHN0YXJ0IHx8IDBcbiAgdmFyIGkgPSBsaXN0Lmxlbmd0aCAtIHN0YXJ0XG4gIHZhciByZXQgPSBuZXcgQXJyYXkoaSlcbiAgd2hpbGUgKGktLSkge1xuICAgIHJldFtpXSA9IGxpc3RbaSArIHN0YXJ0XVxuICB9XG4gIHJldHVybiByZXRcbn1cblxuLyoqXG4gKiBNaXggcHJvcGVydGllcyBpbnRvIHRhcmdldCBvYmplY3QuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHRvXG4gKiBAcGFyYW0ge09iamVjdH0gZnJvbVxuICovXG5cbmV4cG9ydHMuZXh0ZW5kID0gZnVuY3Rpb24gKHRvLCBmcm9tKSB7XG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZnJvbSlcbiAgdmFyIGkgPSBrZXlzLmxlbmd0aFxuICB3aGlsZSAoaS0tKSB7XG4gICAgdG9ba2V5c1tpXV0gPSBmcm9tW2tleXNbaV1dXG4gIH1cbiAgcmV0dXJuIHRvXG59XG5cbi8qKlxuICogUXVpY2sgb2JqZWN0IGNoZWNrIC0gdGhpcyBpcyBwcmltYXJpbHkgdXNlZCB0byB0ZWxsXG4gKiBPYmplY3RzIGZyb20gcHJpbWl0aXZlIHZhbHVlcyB3aGVuIHdlIGtub3cgdGhlIHZhbHVlXG4gKiBpcyBhIEpTT04tY29tcGxpYW50IHR5cGUuXG4gKlxuICogQHBhcmFtIHsqfSBvYmpcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cblxuZXhwb3J0cy5pc09iamVjdCA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAhPT0gbnVsbCAmJiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0J1xufVxuXG4vKipcbiAqIFN0cmljdCBvYmplY3QgdHlwZSBjaGVjay4gT25seSByZXR1cm5zIHRydWVcbiAqIGZvciBwbGFpbiBKYXZhU2NyaXB0IG9iamVjdHMuXG4gKlxuICogQHBhcmFtIHsqfSBvYmpcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cblxudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ1xudmFyIE9CSkVDVF9TVFJJTkcgPSAnW29iamVjdCBPYmplY3RdJ1xuZXhwb3J0cy5pc1BsYWluT2JqZWN0ID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChvYmopID09PSBPQkpFQ1RfU1RSSU5HXG59XG5cbi8qKlxuICogQXJyYXkgdHlwZSBjaGVjay5cbiAqXG4gKiBAcGFyYW0geyp9IG9ialxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuXG5leHBvcnRzLmlzQXJyYXkgPSBBcnJheS5pc0FycmF5XG5cbi8qKlxuICogRGVmaW5lIGEgbm9uLWVudW1lcmFibGUgcHJvcGVydHlcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5XG4gKiBAcGFyYW0geyp9IHZhbFxuICogQHBhcmFtIHtCb29sZWFufSBbZW51bWVyYWJsZV1cbiAqL1xuXG5leHBvcnRzLmRlZmluZSA9IGZ1bmN0aW9uIChvYmosIGtleSwgdmFsLCBlbnVtZXJhYmxlKSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgIHZhbHVlOiB2YWwsXG4gICAgZW51bWVyYWJsZTogISFlbnVtZXJhYmxlLFxuICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9KVxufVxuXG4vKipcbiAqIERlYm91bmNlIGEgZnVuY3Rpb24gc28gaXQgb25seSBnZXRzIGNhbGxlZCBhZnRlciB0aGVcbiAqIGlucHV0IHN0b3BzIGFycml2aW5nIGFmdGVyIHRoZSBnaXZlbiB3YWl0IHBlcmlvZC5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jXG4gKiBAcGFyYW0ge051bWJlcn0gd2FpdFxuICogQHJldHVybiB7RnVuY3Rpb259IC0gdGhlIGRlYm91bmNlZCBmdW5jdGlvblxuICovXG5cbmV4cG9ydHMuZGVib3VuY2UgPSBmdW5jdGlvbiAoZnVuYywgd2FpdCkge1xuICB2YXIgdGltZW91dCwgYXJncywgY29udGV4dCwgdGltZXN0YW1wLCByZXN1bHRcbiAgdmFyIGxhdGVyID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBsYXN0ID0gRGF0ZS5ub3coKSAtIHRpbWVzdGFtcFxuICAgIGlmIChsYXN0IDwgd2FpdCAmJiBsYXN0ID49IDApIHtcbiAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0IC0gbGFzdClcbiAgICB9IGVsc2Uge1xuICAgICAgdGltZW91dCA9IG51bGxcbiAgICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncylcbiAgICAgIGlmICghdGltZW91dCkgY29udGV4dCA9IGFyZ3MgPSBudWxsXG4gICAgfVxuICB9XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgY29udGV4dCA9IHRoaXNcbiAgICBhcmdzID0gYXJndW1lbnRzXG4gICAgdGltZXN0YW1wID0gRGF0ZS5ub3coKVxuICAgIGlmICghdGltZW91dCkge1xuICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfVxufVxuXG4vKipcbiAqIE1hbnVhbCBpbmRleE9mIGJlY2F1c2UgaXQncyBzbGlnaHRseSBmYXN0ZXIgdGhhblxuICogbmF0aXZlLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGFyclxuICogQHBhcmFtIHsqfSBvYmpcbiAqL1xuXG5leHBvcnRzLmluZGV4T2YgPSBmdW5jdGlvbiAoYXJyLCBvYmopIHtcbiAgdmFyIGkgPSBhcnIubGVuZ3RoXG4gIHdoaWxlIChpLS0pIHtcbiAgICBpZiAoYXJyW2ldID09PSBvYmopIHJldHVybiBpXG4gIH1cbiAgcmV0dXJuIC0xXG59XG5cbi8qKlxuICogTWFrZSBhIGNhbmNlbGxhYmxlIHZlcnNpb24gb2YgYW4gYXN5bmMgY2FsbGJhY2suXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICovXG5cbmV4cG9ydHMuY2FuY2VsbGFibGUgPSBmdW5jdGlvbiAoZm4pIHtcbiAgdmFyIGNiID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICghY2IuY2FuY2VsbGVkKSB7XG4gICAgICByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKVxuICAgIH1cbiAgfVxuICBjYi5jYW5jZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgY2IuY2FuY2VsbGVkID0gdHJ1ZVxuICB9XG4gIHJldHVybiBjYlxufVxuXG4vKipcbiAqIENoZWNrIGlmIHR3byB2YWx1ZXMgYXJlIGxvb3NlbHkgZXF1YWwgLSB0aGF0IGlzLFxuICogaWYgdGhleSBhcmUgcGxhaW4gb2JqZWN0cywgZG8gdGhleSBoYXZlIHRoZSBzYW1lIHNoYXBlP1xuICpcbiAqIEBwYXJhbSB7Kn0gYVxuICogQHBhcmFtIHsqfSBiXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5cbmV4cG9ydHMubG9vc2VFcXVhbCA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gIC8qIGVzbGludC1kaXNhYmxlIGVxZXFlcSAqL1xuICByZXR1cm4gYSA9PSBiIHx8IChcbiAgICBleHBvcnRzLmlzT2JqZWN0KGEpICYmIGV4cG9ydHMuaXNPYmplY3QoYilcbiAgICAgID8gSlNPTi5zdHJpbmdpZnkoYSkgPT09IEpTT04uc3RyaW5naWZ5KGIpXG4gICAgICA6IGZhbHNlXG4gIClcbiAgLyogZXNsaW50LWVuYWJsZSBlcWVxZXEgKi9cbn1cbiIsInZhciBfID0gcmVxdWlyZSgnLi9pbmRleCcpXG52YXIgY29uZmlnID0gcmVxdWlyZSgnLi4vY29uZmlnJylcbnZhciBleHRlbmQgPSBfLmV4dGVuZFxuXG4vKipcbiAqIE9wdGlvbiBvdmVyd3JpdGluZyBzdHJhdGVnaWVzIGFyZSBmdW5jdGlvbnMgdGhhdCBoYW5kbGVcbiAqIGhvdyB0byBtZXJnZSBhIHBhcmVudCBvcHRpb24gdmFsdWUgYW5kIGEgY2hpbGQgb3B0aW9uXG4gKiB2YWx1ZSBpbnRvIHRoZSBmaW5hbCB2YWx1ZS5cbiAqXG4gKiBBbGwgc3RyYXRlZ3kgZnVuY3Rpb25zIGZvbGxvdyB0aGUgc2FtZSBzaWduYXR1cmU6XG4gKlxuICogQHBhcmFtIHsqfSBwYXJlbnRWYWxcbiAqIEBwYXJhbSB7Kn0gY2hpbGRWYWxcbiAqIEBwYXJhbSB7VnVlfSBbdm1dXG4gKi9cblxudmFyIHN0cmF0cyA9IGNvbmZpZy5vcHRpb25NZXJnZVN0cmF0ZWdpZXMgPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbi8qKlxuICogSGVscGVyIHRoYXQgcmVjdXJzaXZlbHkgbWVyZ2VzIHR3byBkYXRhIG9iamVjdHMgdG9nZXRoZXIuXG4gKi9cblxuZnVuY3Rpb24gbWVyZ2VEYXRhICh0bywgZnJvbSkge1xuICB2YXIga2V5LCB0b1ZhbCwgZnJvbVZhbFxuICBmb3IgKGtleSBpbiBmcm9tKSB7XG4gICAgdG9WYWwgPSB0b1trZXldXG4gICAgZnJvbVZhbCA9IGZyb21ba2V5XVxuICAgIGlmICghdG8uaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgXy5zZXQodG8sIGtleSwgZnJvbVZhbClcbiAgICB9IGVsc2UgaWYgKF8uaXNPYmplY3QodG9WYWwpICYmIF8uaXNPYmplY3QoZnJvbVZhbCkpIHtcbiAgICAgIG1lcmdlRGF0YSh0b1ZhbCwgZnJvbVZhbClcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRvXG59XG5cbi8qKlxuICogRGF0YVxuICovXG5cbnN0cmF0cy5kYXRhID0gZnVuY3Rpb24gKHBhcmVudFZhbCwgY2hpbGRWYWwsIHZtKSB7XG4gIGlmICghdm0pIHtcbiAgICAvLyBpbiBhIFZ1ZS5leHRlbmQgbWVyZ2UsIGJvdGggc2hvdWxkIGJlIGZ1bmN0aW9uc1xuICAgIGlmICghY2hpbGRWYWwpIHtcbiAgICAgIHJldHVybiBwYXJlbnRWYWxcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBjaGlsZFZhbCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBfLndhcm4oXG4gICAgICAgICdUaGUgXCJkYXRhXCIgb3B0aW9uIHNob3VsZCBiZSBhIGZ1bmN0aW9uICcgK1xuICAgICAgICAndGhhdCByZXR1cm5zIGEgcGVyLWluc3RhbmNlIHZhbHVlIGluIGNvbXBvbmVudCAnICtcbiAgICAgICAgJ2RlZmluaXRpb25zLidcbiAgICAgIClcbiAgICAgIHJldHVybiBwYXJlbnRWYWxcbiAgICB9XG4gICAgaWYgKCFwYXJlbnRWYWwpIHtcbiAgICAgIHJldHVybiBjaGlsZFZhbFxuICAgIH1cbiAgICAvLyB3aGVuIHBhcmVudFZhbCAmIGNoaWxkVmFsIGFyZSBib3RoIHByZXNlbnQsXG4gICAgLy8gd2UgbmVlZCB0byByZXR1cm4gYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlXG4gICAgLy8gbWVyZ2VkIHJlc3VsdCBvZiBib3RoIGZ1bmN0aW9ucy4uLiBubyBuZWVkIHRvXG4gICAgLy8gY2hlY2sgaWYgcGFyZW50VmFsIGlzIGEgZnVuY3Rpb24gaGVyZSBiZWNhdXNlXG4gICAgLy8gaXQgaGFzIHRvIGJlIGEgZnVuY3Rpb24gdG8gcGFzcyBwcmV2aW91cyBtZXJnZXMuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG1lcmdlZERhdGFGbiAoKSB7XG4gICAgICByZXR1cm4gbWVyZ2VEYXRhKFxuICAgICAgICBjaGlsZFZhbC5jYWxsKHRoaXMpLFxuICAgICAgICBwYXJlbnRWYWwuY2FsbCh0aGlzKVxuICAgICAgKVxuICAgIH1cbiAgfSBlbHNlIGlmIChwYXJlbnRWYWwgfHwgY2hpbGRWYWwpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gbWVyZ2VkSW5zdGFuY2VEYXRhRm4gKCkge1xuICAgICAgLy8gaW5zdGFuY2UgbWVyZ2VcbiAgICAgIHZhciBpbnN0YW5jZURhdGEgPSB0eXBlb2YgY2hpbGRWYWwgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyBjaGlsZFZhbC5jYWxsKHZtKVxuICAgICAgICA6IGNoaWxkVmFsXG4gICAgICB2YXIgZGVmYXVsdERhdGEgPSB0eXBlb2YgcGFyZW50VmFsID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gcGFyZW50VmFsLmNhbGwodm0pXG4gICAgICAgIDogdW5kZWZpbmVkXG4gICAgICBpZiAoaW5zdGFuY2VEYXRhKSB7XG4gICAgICAgIHJldHVybiBtZXJnZURhdGEoaW5zdGFuY2VEYXRhLCBkZWZhdWx0RGF0YSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBkZWZhdWx0RGF0YVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEVsXG4gKi9cblxuc3RyYXRzLmVsID0gZnVuY3Rpb24gKHBhcmVudFZhbCwgY2hpbGRWYWwsIHZtKSB7XG4gIGlmICghdm0gJiYgY2hpbGRWYWwgJiYgdHlwZW9mIGNoaWxkVmFsICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBfLndhcm4oXG4gICAgICAnVGhlIFwiZWxcIiBvcHRpb24gc2hvdWxkIGJlIGEgZnVuY3Rpb24gJyArXG4gICAgICAndGhhdCByZXR1cm5zIGEgcGVyLWluc3RhbmNlIHZhbHVlIGluIGNvbXBvbmVudCAnICtcbiAgICAgICdkZWZpbml0aW9ucy4nXG4gICAgKVxuICAgIHJldHVyblxuICB9XG4gIHZhciByZXQgPSBjaGlsZFZhbCB8fCBwYXJlbnRWYWxcbiAgLy8gaW52b2tlIHRoZSBlbGVtZW50IGZhY3RvcnkgaWYgdGhpcyBpcyBpbnN0YW5jZSBtZXJnZVxuICByZXR1cm4gdm0gJiYgdHlwZW9mIHJldCA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gcmV0LmNhbGwodm0pXG4gICAgOiByZXRcbn1cblxuLyoqXG4gKiBIb29rcyBhbmQgcGFyYW0gYXR0cmlidXRlcyBhcmUgbWVyZ2VkIGFzIGFycmF5cy5cbiAqL1xuXG5zdHJhdHMuaW5pdCA9XG5zdHJhdHMuY3JlYXRlZCA9XG5zdHJhdHMucmVhZHkgPVxuc3RyYXRzLmF0dGFjaGVkID1cbnN0cmF0cy5kZXRhY2hlZCA9XG5zdHJhdHMuYmVmb3JlQ29tcGlsZSA9XG5zdHJhdHMuY29tcGlsZWQgPVxuc3RyYXRzLmJlZm9yZURlc3Ryb3kgPVxuc3RyYXRzLmRlc3Ryb3llZCA9IGZ1bmN0aW9uIChwYXJlbnRWYWwsIGNoaWxkVmFsKSB7XG4gIHJldHVybiBjaGlsZFZhbFxuICAgID8gcGFyZW50VmFsXG4gICAgICA/IHBhcmVudFZhbC5jb25jYXQoY2hpbGRWYWwpXG4gICAgICA6IF8uaXNBcnJheShjaGlsZFZhbClcbiAgICAgICAgPyBjaGlsZFZhbFxuICAgICAgICA6IFtjaGlsZFZhbF1cbiAgICA6IHBhcmVudFZhbFxufVxuXG4vKipcbiAqIDAuMTEgZGVwcmVjYXRpb24gd2FybmluZ1xuICovXG5cbnN0cmF0cy5wYXJhbUF0dHJpYnV0ZXMgPSBmdW5jdGlvbiAoKSB7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgXy53YXJuKFxuICAgICdcInBhcmFtQXR0cmlidXRlc1wiIG9wdGlvbiBoYXMgYmVlbiBkZXByZWNhdGVkIGluIDAuMTIuICcgK1xuICAgICdVc2UgXCJwcm9wc1wiIGluc3RlYWQuJ1xuICApXG59XG5cbi8qKlxuICogQXNzZXRzXG4gKlxuICogV2hlbiBhIHZtIGlzIHByZXNlbnQgKGluc3RhbmNlIGNyZWF0aW9uKSwgd2UgbmVlZCB0byBkb1xuICogYSB0aHJlZS13YXkgbWVyZ2UgYmV0d2VlbiBjb25zdHJ1Y3RvciBvcHRpb25zLCBpbnN0YW5jZVxuICogb3B0aW9ucyBhbmQgcGFyZW50IG9wdGlvbnMuXG4gKi9cblxuZnVuY3Rpb24gbWVyZ2VBc3NldHMgKHBhcmVudFZhbCwgY2hpbGRWYWwpIHtcbiAgdmFyIHJlcyA9IE9iamVjdC5jcmVhdGUocGFyZW50VmFsKVxuICByZXR1cm4gY2hpbGRWYWxcbiAgICA/IGV4dGVuZChyZXMsIGd1YXJkQXJyYXlBc3NldHMoY2hpbGRWYWwpKVxuICAgIDogcmVzXG59XG5cbmNvbmZpZy5fYXNzZXRUeXBlcy5mb3JFYWNoKGZ1bmN0aW9uICh0eXBlKSB7XG4gIHN0cmF0c1t0eXBlICsgJ3MnXSA9IG1lcmdlQXNzZXRzXG59KVxuXG4vKipcbiAqIEV2ZW50cyAmIFdhdGNoZXJzLlxuICpcbiAqIEV2ZW50cyAmIHdhdGNoZXJzIGhhc2hlcyBzaG91bGQgbm90IG92ZXJ3cml0ZSBvbmVcbiAqIGFub3RoZXIsIHNvIHdlIG1lcmdlIHRoZW0gYXMgYXJyYXlzLlxuICovXG5cbnN0cmF0cy53YXRjaCA9XG5zdHJhdHMuZXZlbnRzID0gZnVuY3Rpb24gKHBhcmVudFZhbCwgY2hpbGRWYWwpIHtcbiAgaWYgKCFjaGlsZFZhbCkgcmV0dXJuIHBhcmVudFZhbFxuICBpZiAoIXBhcmVudFZhbCkgcmV0dXJuIGNoaWxkVmFsXG4gIHZhciByZXQgPSB7fVxuICBleHRlbmQocmV0LCBwYXJlbnRWYWwpXG4gIGZvciAodmFyIGtleSBpbiBjaGlsZFZhbCkge1xuICAgIHZhciBwYXJlbnQgPSByZXRba2V5XVxuICAgIHZhciBjaGlsZCA9IGNoaWxkVmFsW2tleV1cbiAgICBpZiAocGFyZW50ICYmICFfLmlzQXJyYXkocGFyZW50KSkge1xuICAgICAgcGFyZW50ID0gW3BhcmVudF1cbiAgICB9XG4gICAgcmV0W2tleV0gPSBwYXJlbnRcbiAgICAgID8gcGFyZW50LmNvbmNhdChjaGlsZClcbiAgICAgIDogW2NoaWxkXVxuICB9XG4gIHJldHVybiByZXRcbn1cblxuLyoqXG4gKiBPdGhlciBvYmplY3QgaGFzaGVzLlxuICovXG5cbnN0cmF0cy5wcm9wcyA9XG5zdHJhdHMubWV0aG9kcyA9XG5zdHJhdHMuY29tcHV0ZWQgPSBmdW5jdGlvbiAocGFyZW50VmFsLCBjaGlsZFZhbCkge1xuICBpZiAoIWNoaWxkVmFsKSByZXR1cm4gcGFyZW50VmFsXG4gIGlmICghcGFyZW50VmFsKSByZXR1cm4gY2hpbGRWYWxcbiAgdmFyIHJldCA9IE9iamVjdC5jcmVhdGUobnVsbClcbiAgZXh0ZW5kKHJldCwgcGFyZW50VmFsKVxuICBleHRlbmQocmV0LCBjaGlsZFZhbClcbiAgcmV0dXJuIHJldFxufVxuXG4vKipcbiAqIERlZmF1bHQgc3RyYXRlZ3kuXG4gKi9cblxudmFyIGRlZmF1bHRTdHJhdCA9IGZ1bmN0aW9uIChwYXJlbnRWYWwsIGNoaWxkVmFsKSB7XG4gIHJldHVybiBjaGlsZFZhbCA9PT0gdW5kZWZpbmVkXG4gICAgPyBwYXJlbnRWYWxcbiAgICA6IGNoaWxkVmFsXG59XG5cbi8qKlxuICogTWFrZSBzdXJlIGNvbXBvbmVudCBvcHRpb25zIGdldCBjb252ZXJ0ZWQgdG8gYWN0dWFsXG4gKiBjb25zdHJ1Y3RvcnMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqL1xuXG5mdW5jdGlvbiBndWFyZENvbXBvbmVudHMgKG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMuY29tcG9uZW50cykge1xuICAgIHZhciBjb21wb25lbnRzID0gb3B0aW9ucy5jb21wb25lbnRzID1cbiAgICAgIGd1YXJkQXJyYXlBc3NldHMob3B0aW9ucy5jb21wb25lbnRzKVxuICAgIHZhciBkZWZcbiAgICB2YXIgaWRzID0gT2JqZWN0LmtleXMoY29tcG9uZW50cylcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IGlkcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSBpZHNbaV1cbiAgICAgIGlmIChfLmNvbW1vblRhZ1JFLnRlc3Qoa2V5KSkge1xuICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIF8ud2FybihcbiAgICAgICAgICAnRG8gbm90IHVzZSBidWlsdC1pbiBIVE1MIGVsZW1lbnRzIGFzIGNvbXBvbmVudCAnICtcbiAgICAgICAgICAnaWQ6ICcgKyBrZXlcbiAgICAgICAgKVxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuICAgICAgZGVmID0gY29tcG9uZW50c1trZXldXG4gICAgICBpZiAoXy5pc1BsYWluT2JqZWN0KGRlZikpIHtcbiAgICAgICAgY29tcG9uZW50c1trZXldID0gXy5WdWUuZXh0ZW5kKGRlZilcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBFbnN1cmUgYWxsIHByb3BzIG9wdGlvbiBzeW50YXggYXJlIG5vcm1hbGl6ZWQgaW50byB0aGVcbiAqIE9iamVjdC1iYXNlZCBmb3JtYXQuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqL1xuXG5mdW5jdGlvbiBndWFyZFByb3BzIChvcHRpb25zKSB7XG4gIHZhciBwcm9wcyA9IG9wdGlvbnMucHJvcHNcbiAgdmFyIGlcbiAgaWYgKF8uaXNBcnJheShwcm9wcykpIHtcbiAgICBvcHRpb25zLnByb3BzID0ge31cbiAgICBpID0gcHJvcHMubGVuZ3RoXG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgb3B0aW9ucy5wcm9wc1twcm9wc1tpXV0gPSBudWxsXG4gICAgfVxuICB9IGVsc2UgaWYgKF8uaXNQbGFpbk9iamVjdChwcm9wcykpIHtcbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHByb3BzKVxuICAgIGkgPSBrZXlzLmxlbmd0aFxuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIHZhciB2YWwgPSBwcm9wc1trZXlzW2ldXVxuICAgICAgaWYgKHR5cGVvZiB2YWwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcHJvcHNba2V5c1tpXV0gPSB7IHR5cGU6IHZhbCB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogR3VhcmQgYW4gQXJyYXktZm9ybWF0IGFzc2V0cyBvcHRpb24gYW5kIGNvbnZlcnRlZCBpdFxuICogaW50byB0aGUga2V5LXZhbHVlIE9iamVjdCBmb3JtYXQuXG4gKlxuICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IGFzc2V0c1xuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5cbmZ1bmN0aW9uIGd1YXJkQXJyYXlBc3NldHMgKGFzc2V0cykge1xuICBpZiAoXy5pc0FycmF5KGFzc2V0cykpIHtcbiAgICB2YXIgcmVzID0ge31cbiAgICB2YXIgaSA9IGFzc2V0cy5sZW5ndGhcbiAgICB2YXIgYXNzZXRcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICBhc3NldCA9IGFzc2V0c1tpXVxuICAgICAgdmFyIGlkID0gdHlwZW9mIGFzc2V0ID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gKChhc3NldC5vcHRpb25zICYmIGFzc2V0Lm9wdGlvbnMubmFtZSkgfHwgYXNzZXQuaWQpXG4gICAgICAgIDogKGFzc2V0Lm5hbWUgfHwgYXNzZXQuaWQpXG4gICAgICBpZiAoIWlkKSB7XG4gICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgXy53YXJuKFxuICAgICAgICAgICdBcnJheS1zeW50YXggYXNzZXRzIG11c3QgcHJvdmlkZSBhIFwibmFtZVwiIG9yIFwiaWRcIiBmaWVsZC4nXG4gICAgICAgIClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc1tpZF0gPSBhc3NldFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzXG4gIH1cbiAgcmV0dXJuIGFzc2V0c1xufVxuXG4vKipcbiAqIE1lcmdlIHR3byBvcHRpb24gb2JqZWN0cyBpbnRvIGEgbmV3IG9uZS5cbiAqIENvcmUgdXRpbGl0eSB1c2VkIGluIGJvdGggaW5zdGFudGlhdGlvbiBhbmQgaW5oZXJpdGFuY2UuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHBhcmVudFxuICogQHBhcmFtIHtPYmplY3R9IGNoaWxkXG4gKiBAcGFyYW0ge1Z1ZX0gW3ZtXSAtIGlmIHZtIGlzIHByZXNlbnQsIGluZGljYXRlcyB0aGlzIGlzXG4gKiAgICAgICAgICAgICAgICAgICAgIGFuIGluc3RhbnRpYXRpb24gbWVyZ2UuXG4gKi9cblxuZXhwb3J0cy5tZXJnZU9wdGlvbnMgPSBmdW5jdGlvbiBtZXJnZSAocGFyZW50LCBjaGlsZCwgdm0pIHtcbiAgZ3VhcmRDb21wb25lbnRzKGNoaWxkKVxuICBndWFyZFByb3BzKGNoaWxkKVxuICB2YXIgb3B0aW9ucyA9IHt9XG4gIHZhciBrZXlcbiAgaWYgKGNoaWxkLm1peGlucykge1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gY2hpbGQubWl4aW5zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgcGFyZW50ID0gbWVyZ2UocGFyZW50LCBjaGlsZC5taXhpbnNbaV0sIHZtKVxuICAgIH1cbiAgfVxuICBmb3IgKGtleSBpbiBwYXJlbnQpIHtcbiAgICBtZXJnZUZpZWxkKGtleSlcbiAgfVxuICBmb3IgKGtleSBpbiBjaGlsZCkge1xuICAgIGlmICghKHBhcmVudC5oYXNPd25Qcm9wZXJ0eShrZXkpKSkge1xuICAgICAgbWVyZ2VGaWVsZChrZXkpXG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIG1lcmdlRmllbGQgKGtleSkge1xuICAgIHZhciBzdHJhdCA9IHN0cmF0c1trZXldIHx8IGRlZmF1bHRTdHJhdFxuICAgIG9wdGlvbnNba2V5XSA9IHN0cmF0KHBhcmVudFtrZXldLCBjaGlsZFtrZXldLCB2bSwga2V5KVxuICB9XG4gIHJldHVybiBvcHRpb25zXG59XG5cbi8qKlxuICogUmVzb2x2ZSBhbiBhc3NldC5cbiAqIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCBiZWNhdXNlIGNoaWxkIGluc3RhbmNlcyBuZWVkIGFjY2Vzc1xuICogdG8gYXNzZXRzIGRlZmluZWQgaW4gaXRzIGFuY2VzdG9yIGNoYWluLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICogQHBhcmFtIHtTdHJpbmd9IGlkXG4gKiBAcmV0dXJuIHtPYmplY3R8RnVuY3Rpb259XG4gKi9cblxuZXhwb3J0cy5yZXNvbHZlQXNzZXQgPSBmdW5jdGlvbiByZXNvbHZlIChvcHRpb25zLCB0eXBlLCBpZCkge1xuICB2YXIgYXNzZXRzID0gb3B0aW9uc1t0eXBlXVxuICB2YXIgY2FtZWxpemVkSWRcbiAgcmV0dXJuIGFzc2V0c1tpZF0gfHxcbiAgICAvLyBjYW1lbENhc2UgSURcbiAgICBhc3NldHNbY2FtZWxpemVkSWQgPSBfLmNhbWVsaXplKGlkKV0gfHxcbiAgICAvLyBQYXNjYWwgQ2FzZSBJRFxuICAgIGFzc2V0c1tjYW1lbGl6ZWRJZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGNhbWVsaXplZElkLnNsaWNlKDEpXVxufVxuIiwidmFyIF8gPSByZXF1aXJlKCcuL3V0aWwnKVxudmFyIGV4dGVuZCA9IF8uZXh0ZW5kXG5cbi8qKlxuICogVGhlIGV4cG9zZWQgVnVlIGNvbnN0cnVjdG9yLlxuICpcbiAqIEFQSSBjb252ZW50aW9uczpcbiAqIC0gcHVibGljIEFQSSBtZXRob2RzL3Byb3BlcnRpZXMgYXJlIHByZWZpZXhlZCB3aXRoIGAkYFxuICogLSBpbnRlcm5hbCBtZXRob2RzL3Byb3BlcnRpZXMgYXJlIHByZWZpeGVkIHdpdGggYF9gXG4gKiAtIG5vbi1wcmVmaXhlZCBwcm9wZXJ0aWVzIGFyZSBhc3N1bWVkIHRvIGJlIHByb3hpZWQgdXNlclxuICogICBkYXRhLlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIFZ1ZSAob3B0aW9ucykge1xuICB0aGlzLl9pbml0KG9wdGlvbnMpXG59XG5cbi8qKlxuICogTWl4aW4gZ2xvYmFsIEFQSVxuICovXG5cbmV4dGVuZChWdWUsIHJlcXVpcmUoJy4vYXBpL2dsb2JhbCcpKVxuXG4vKipcbiAqIFZ1ZSBhbmQgZXZlcnkgY29uc3RydWN0b3IgdGhhdCBleHRlbmRzIFZ1ZSBoYXMgYW5cbiAqIGFzc29jaWF0ZWQgb3B0aW9ucyBvYmplY3QsIHdoaWNoIGNhbiBiZSBhY2Nlc3NlZCBkdXJpbmdcbiAqIGNvbXBpbGF0aW9uIHN0ZXBzIGFzIGB0aGlzLmNvbnN0cnVjdG9yLm9wdGlvbnNgLlxuICpcbiAqIFRoZXNlIGNhbiBiZSBzZWVuIGFzIHRoZSBkZWZhdWx0IG9wdGlvbnMgb2YgZXZlcnlcbiAqIFZ1ZSBpbnN0YW5jZS5cbiAqL1xuXG5WdWUub3B0aW9ucyA9IHtcbiAgcmVwbGFjZTogdHJ1ZSxcbiAgZGlyZWN0aXZlczogcmVxdWlyZSgnLi9kaXJlY3RpdmVzL3B1YmxpYycpLFxuICBlbGVtZW50RGlyZWN0aXZlczogcmVxdWlyZSgnLi9kaXJlY3RpdmVzL2VsZW1lbnQnKSxcbiAgZmlsdGVyczogcmVxdWlyZSgnLi9maWx0ZXJzJyksXG4gIHRyYW5zaXRpb25zOiB7fSxcbiAgY29tcG9uZW50czoge30sXG4gIHBhcnRpYWxzOiB7fVxufVxuXG4vKipcbiAqIEJ1aWxkIHVwIHRoZSBwcm90b3R5cGVcbiAqL1xuXG52YXIgcCA9IFZ1ZS5wcm90b3R5cGVcblxuLyoqXG4gKiAkZGF0YSBoYXMgYSBzZXR0ZXIgd2hpY2ggZG9lcyBhIGJ1bmNoIG9mXG4gKiB0ZWFyZG93bi9zZXR1cCB3b3JrXG4gKi9cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHAsICckZGF0YScsIHtcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGFcbiAgfSxcbiAgc2V0OiBmdW5jdGlvbiAobmV3RGF0YSkge1xuICAgIGlmIChuZXdEYXRhICE9PSB0aGlzLl9kYXRhKSB7XG4gICAgICB0aGlzLl9zZXREYXRhKG5ld0RhdGEpXG4gICAgfVxuICB9XG59KVxuXG4vKipcbiAqIE1peGluIGludGVybmFsIGluc3RhbmNlIG1ldGhvZHNcbiAqL1xuXG5leHRlbmQocCwgcmVxdWlyZSgnLi9pbnN0YW5jZS9pbml0JykpXG5leHRlbmQocCwgcmVxdWlyZSgnLi9pbnN0YW5jZS9ldmVudHMnKSlcbmV4dGVuZChwLCByZXF1aXJlKCcuL2luc3RhbmNlL3N0YXRlJykpXG5leHRlbmQocCwgcmVxdWlyZSgnLi9pbnN0YW5jZS9saWZlY3ljbGUnKSlcbmV4dGVuZChwLCByZXF1aXJlKCcuL2luc3RhbmNlL21pc2MnKSlcblxuLyoqXG4gKiBNaXhpbiBwdWJsaWMgQVBJIG1ldGhvZHNcbiAqL1xuXG5leHRlbmQocCwgcmVxdWlyZSgnLi9hcGkvZGF0YScpKVxuZXh0ZW5kKHAsIHJlcXVpcmUoJy4vYXBpL2RvbScpKVxuZXh0ZW5kKHAsIHJlcXVpcmUoJy4vYXBpL2V2ZW50cycpKVxuZXh0ZW5kKHAsIHJlcXVpcmUoJy4vYXBpL2xpZmVjeWNsZScpKVxuXG5WdWUudmVyc2lvbiA9ICcxLjAuNydcbm1vZHVsZS5leHBvcnRzID0gXy5WdWUgPSBWdWVcblxuLyogaXN0YW5idWwgaWdub3JlIGlmICovXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBpZiAoXy5pbkJyb3dzZXIgJiYgd2luZG93Ll9fVlVFX0RFVlRPT0xTX0dMT0JBTF9IT09LX18pIHtcbiAgICB3aW5kb3cuX19WVUVfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5lbWl0KCdpbml0JywgVnVlKVxuICB9XG59XG4iLCJ2YXIgXyA9IHJlcXVpcmUoJy4vdXRpbCcpXG52YXIgY29uZmlnID0gcmVxdWlyZSgnLi9jb25maWcnKVxudmFyIERlcCA9IHJlcXVpcmUoJy4vb2JzZXJ2ZXIvZGVwJylcbnZhciBleHBQYXJzZXIgPSByZXF1aXJlKCcuL3BhcnNlcnMvZXhwcmVzc2lvbicpXG52YXIgYmF0Y2hlciA9IHJlcXVpcmUoJy4vYmF0Y2hlcicpXG52YXIgdWlkID0gMFxuXG4vKipcbiAqIEEgd2F0Y2hlciBwYXJzZXMgYW4gZXhwcmVzc2lvbiwgY29sbGVjdHMgZGVwZW5kZW5jaWVzLFxuICogYW5kIGZpcmVzIGNhbGxiYWNrIHdoZW4gdGhlIGV4cHJlc3Npb24gdmFsdWUgY2hhbmdlcy5cbiAqIFRoaXMgaXMgdXNlZCBmb3IgYm90aCB0aGUgJHdhdGNoKCkgYXBpIGFuZCBkaXJlY3RpdmVzLlxuICpcbiAqIEBwYXJhbSB7VnVlfSB2bVxuICogQHBhcmFtIHtTdHJpbmd9IGV4cHJlc3Npb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNiXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICogICAgICAgICAgICAgICAgIC0ge0FycmF5fSBmaWx0ZXJzXG4gKiAgICAgICAgICAgICAgICAgLSB7Qm9vbGVhbn0gdHdvV2F5XG4gKiAgICAgICAgICAgICAgICAgLSB7Qm9vbGVhbn0gZGVlcFxuICogICAgICAgICAgICAgICAgIC0ge0Jvb2xlYW59IHVzZXJcbiAqICAgICAgICAgICAgICAgICAtIHtCb29sZWFufSBzeW5jXG4gKiAgICAgICAgICAgICAgICAgLSB7Qm9vbGVhbn0gbGF6eVxuICogICAgICAgICAgICAgICAgIC0ge0Z1bmN0aW9ufSBbcHJlUHJvY2Vzc11cbiAqICAgICAgICAgICAgICAgICAtIHtGdW5jdGlvbn0gW3Bvc3RQcm9jZXNzXVxuICogQGNvbnN0cnVjdG9yXG4gKi9cblxuZnVuY3Rpb24gV2F0Y2hlciAodm0sIGV4cE9yRm4sIGNiLCBvcHRpb25zKSB7XG4gIC8vIG1peCBpbiBvcHRpb25zXG4gIGlmIChvcHRpb25zKSB7XG4gICAgXy5leHRlbmQodGhpcywgb3B0aW9ucylcbiAgfVxuICB2YXIgaXNGbiA9IHR5cGVvZiBleHBPckZuID09PSAnZnVuY3Rpb24nXG4gIHRoaXMudm0gPSB2bVxuICB2bS5fd2F0Y2hlcnMucHVzaCh0aGlzKVxuICB0aGlzLmV4cHJlc3Npb24gPSBpc0ZuID8gZXhwT3JGbi50b1N0cmluZygpIDogZXhwT3JGblxuICB0aGlzLmNiID0gY2JcbiAgdGhpcy5pZCA9ICsrdWlkIC8vIHVpZCBmb3IgYmF0Y2hpbmdcbiAgdGhpcy5hY3RpdmUgPSB0cnVlXG4gIHRoaXMuZGlydHkgPSB0aGlzLmxhenkgLy8gZm9yIGxhenkgd2F0Y2hlcnNcbiAgdGhpcy5kZXBzID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuICB0aGlzLm5ld0RlcHMgPSBudWxsXG4gIHRoaXMucHJldkVycm9yID0gbnVsbCAvLyBmb3IgYXN5bmMgZXJyb3Igc3RhY2tzXG4gIC8vIHBhcnNlIGV4cHJlc3Npb24gZm9yIGdldHRlci9zZXR0ZXJcbiAgaWYgKGlzRm4pIHtcbiAgICB0aGlzLmdldHRlciA9IGV4cE9yRm5cbiAgICB0aGlzLnNldHRlciA9IHVuZGVmaW5lZFxuICB9IGVsc2Uge1xuICAgIHZhciByZXMgPSBleHBQYXJzZXIucGFyc2UoZXhwT3JGbiwgdGhpcy50d29XYXkpXG4gICAgdGhpcy5nZXR0ZXIgPSByZXMuZ2V0XG4gICAgdGhpcy5zZXR0ZXIgPSByZXMuc2V0XG4gIH1cbiAgdGhpcy52YWx1ZSA9IHRoaXMubGF6eVxuICAgID8gdW5kZWZpbmVkXG4gICAgOiB0aGlzLmdldCgpXG4gIC8vIHN0YXRlIGZvciBhdm9pZGluZyBmYWxzZSB0cmlnZ2VycyBmb3IgZGVlcCBhbmQgQXJyYXlcbiAgLy8gd2F0Y2hlcnMgZHVyaW5nIHZtLl9kaWdlc3QoKVxuICB0aGlzLnF1ZXVlZCA9IHRoaXMuc2hhbGxvdyA9IGZhbHNlXG59XG5cbi8qKlxuICogQWRkIGEgZGVwZW5kZW5jeSB0byB0aGlzIGRpcmVjdGl2ZS5cbiAqXG4gKiBAcGFyYW0ge0RlcH0gZGVwXG4gKi9cblxuV2F0Y2hlci5wcm90b3R5cGUuYWRkRGVwID0gZnVuY3Rpb24gKGRlcCkge1xuICB2YXIgaWQgPSBkZXAuaWRcbiAgaWYgKCF0aGlzLm5ld0RlcHNbaWRdKSB7XG4gICAgdGhpcy5uZXdEZXBzW2lkXSA9IGRlcFxuICAgIGlmICghdGhpcy5kZXBzW2lkXSkge1xuICAgICAgdGhpcy5kZXBzW2lkXSA9IGRlcFxuICAgICAgZGVwLmFkZFN1Yih0aGlzKVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEV2YWx1YXRlIHRoZSBnZXR0ZXIsIGFuZCByZS1jb2xsZWN0IGRlcGVuZGVuY2llcy5cbiAqL1xuXG5XYXRjaGVyLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuYmVmb3JlR2V0KClcbiAgdmFyIHNjb3BlID0gdGhpcy5zY29wZSB8fCB0aGlzLnZtXG4gIHZhciB2YWx1ZVxuICB0cnkge1xuICAgIHZhbHVlID0gdGhpcy5nZXR0ZXIuY2FsbChzY29wZSwgc2NvcGUpXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBpZiAoXG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmXG4gICAgICBjb25maWcud2FybkV4cHJlc3Npb25FcnJvcnNcbiAgICApIHtcbiAgICAgIF8ud2FybihcbiAgICAgICAgJ0Vycm9yIHdoZW4gZXZhbHVhdGluZyBleHByZXNzaW9uIFwiJyArXG4gICAgICAgIHRoaXMuZXhwcmVzc2lvbiArICdcIi4gJyArXG4gICAgICAgIChjb25maWcuZGVidWdcbiAgICAgICAgICA/ICcnXG4gICAgICAgICAgOiAnVHVybiBvbiBkZWJ1ZyBtb2RlIHRvIHNlZSBzdGFjayB0cmFjZS4nXG4gICAgICAgICksIGVcbiAgICAgIClcbiAgICB9XG4gIH1cbiAgLy8gXCJ0b3VjaFwiIGV2ZXJ5IHByb3BlcnR5IHNvIHRoZXkgYXJlIGFsbCB0cmFja2VkIGFzXG4gIC8vIGRlcGVuZGVuY2llcyBmb3IgZGVlcCB3YXRjaGluZ1xuICBpZiAodGhpcy5kZWVwKSB7XG4gICAgdHJhdmVyc2UodmFsdWUpXG4gIH1cbiAgaWYgKHRoaXMucHJlUHJvY2Vzcykge1xuICAgIHZhbHVlID0gdGhpcy5wcmVQcm9jZXNzKHZhbHVlKVxuICB9XG4gIGlmICh0aGlzLmZpbHRlcnMpIHtcbiAgICB2YWx1ZSA9IHNjb3BlLl9hcHBseUZpbHRlcnModmFsdWUsIG51bGwsIHRoaXMuZmlsdGVycywgZmFsc2UpXG4gIH1cbiAgaWYgKHRoaXMucG9zdFByb2Nlc3MpIHtcbiAgICB2YWx1ZSA9IHRoaXMucG9zdFByb2Nlc3ModmFsdWUpXG4gIH1cbiAgdGhpcy5hZnRlckdldCgpXG4gIHJldHVybiB2YWx1ZVxufVxuXG4vKipcbiAqIFNldCB0aGUgY29ycmVzcG9uZGluZyB2YWx1ZSB3aXRoIHRoZSBzZXR0ZXIuXG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZVxuICovXG5cbldhdGNoZXIucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICB2YXIgc2NvcGUgPSB0aGlzLnNjb3BlIHx8IHRoaXMudm1cbiAgaWYgKHRoaXMuZmlsdGVycykge1xuICAgIHZhbHVlID0gc2NvcGUuX2FwcGx5RmlsdGVycyhcbiAgICAgIHZhbHVlLCB0aGlzLnZhbHVlLCB0aGlzLmZpbHRlcnMsIHRydWUpXG4gIH1cbiAgdHJ5IHtcbiAgICB0aGlzLnNldHRlci5jYWxsKHNjb3BlLCBzY29wZSwgdmFsdWUpXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBpZiAoXG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmXG4gICAgICBjb25maWcud2FybkV4cHJlc3Npb25FcnJvcnNcbiAgICApIHtcbiAgICAgIF8ud2FybihcbiAgICAgICAgJ0Vycm9yIHdoZW4gZXZhbHVhdGluZyBzZXR0ZXIgXCInICtcbiAgICAgICAgdGhpcy5leHByZXNzaW9uICsgJ1wiJywgZVxuICAgICAgKVxuICAgIH1cbiAgfVxuICAvLyB0d28td2F5IHN5bmMgZm9yIHYtZm9yIGFsaWFzXG4gIHZhciBmb3JDb250ZXh0ID0gc2NvcGUuJGZvckNvbnRleHRcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoXG4gICAgICBmb3JDb250ZXh0ICYmXG4gICAgICBmb3JDb250ZXh0LmZpbHRlcnMgJiZcbiAgICAgIChuZXcgUmVnRXhwKGZvckNvbnRleHQuYWxpYXMgKyAnXFxcXGInKSkudGVzdCh0aGlzLmV4cHJlc3Npb24pXG4gICAgKSB7XG4gICAgICBfLndhcm4oXG4gICAgICAgICdJdCBzZWVtcyB5b3UgYXJlIHVzaW5nIHR3by13YXkgYmluZGluZyBvbiAnICtcbiAgICAgICAgJ2Egdi1mb3IgYWxpYXMgKCcgKyB0aGlzLmV4cHJlc3Npb24gKyAnKSwgYW5kIHRoZSAnICtcbiAgICAgICAgJ3YtZm9yIGhhcyBmaWx0ZXJzLiBUaGlzIHdpbGwgbm90IHdvcmsgcHJvcGVybHkuICcgK1xuICAgICAgICAnRWl0aGVyIHJlbW92ZSB0aGUgZmlsdGVycyBvciB1c2UgYW4gYXJyYXkgb2YgJyArXG4gICAgICAgICdvYmplY3RzIGFuZCBiaW5kIHRvIG9iamVjdCBwcm9wZXJ0aWVzIGluc3RlYWQuJ1xuICAgICAgKVxuICAgIH1cbiAgfVxuICBpZiAoXG4gICAgZm9yQ29udGV4dCAmJlxuICAgIGZvckNvbnRleHQuYWxpYXMgPT09IHRoaXMuZXhwcmVzc2lvbiAmJlxuICAgICFmb3JDb250ZXh0LmZpbHRlcnNcbiAgKSB7XG4gICAgaWYgKHNjb3BlLiRrZXkpIHsgLy8gb3JpZ2luYWwgaXMgYW4gb2JqZWN0XG4gICAgICBmb3JDb250ZXh0LnJhd1ZhbHVlW3Njb3BlLiRrZXldID0gdmFsdWVcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yQ29udGV4dC5yYXdWYWx1ZS4kc2V0KHNjb3BlLiRpbmRleCwgdmFsdWUpXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogUHJlcGFyZSBmb3IgZGVwZW5kZW5jeSBjb2xsZWN0aW9uLlxuICovXG5cbldhdGNoZXIucHJvdG90eXBlLmJlZm9yZUdldCA9IGZ1bmN0aW9uICgpIHtcbiAgRGVwLnRhcmdldCA9IHRoaXNcbiAgdGhpcy5uZXdEZXBzID0gT2JqZWN0LmNyZWF0ZShudWxsKVxufVxuXG4vKipcbiAqIENsZWFuIHVwIGZvciBkZXBlbmRlbmN5IGNvbGxlY3Rpb24uXG4gKi9cblxuV2F0Y2hlci5wcm90b3R5cGUuYWZ0ZXJHZXQgPSBmdW5jdGlvbiAoKSB7XG4gIERlcC50YXJnZXQgPSBudWxsXG4gIHZhciBpZHMgPSBPYmplY3Qua2V5cyh0aGlzLmRlcHMpXG4gIHZhciBpID0gaWRzLmxlbmd0aFxuICB3aGlsZSAoaS0tKSB7XG4gICAgdmFyIGlkID0gaWRzW2ldXG4gICAgaWYgKCF0aGlzLm5ld0RlcHNbaWRdKSB7XG4gICAgICB0aGlzLmRlcHNbaWRdLnJlbW92ZVN1Yih0aGlzKVxuICAgIH1cbiAgfVxuICB0aGlzLmRlcHMgPSB0aGlzLm5ld0RlcHNcbn1cblxuLyoqXG4gKiBTdWJzY3JpYmVyIGludGVyZmFjZS5cbiAqIFdpbGwgYmUgY2FsbGVkIHdoZW4gYSBkZXBlbmRlbmN5IGNoYW5nZXMuXG4gKlxuICogQHBhcmFtIHtCb29sZWFufSBzaGFsbG93XG4gKi9cblxuV2F0Y2hlci5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKHNoYWxsb3cpIHtcbiAgaWYgKHRoaXMubGF6eSkge1xuICAgIHRoaXMuZGlydHkgPSB0cnVlXG4gIH0gZWxzZSBpZiAodGhpcy5zeW5jIHx8ICFjb25maWcuYXN5bmMpIHtcbiAgICB0aGlzLnJ1bigpXG4gIH0gZWxzZSB7XG4gICAgLy8gaWYgcXVldWVkLCBvbmx5IG92ZXJ3cml0ZSBzaGFsbG93IHdpdGggbm9uLXNoYWxsb3csXG4gICAgLy8gYnV0IG5vdCB0aGUgb3RoZXIgd2F5IGFyb3VuZC5cbiAgICB0aGlzLnNoYWxsb3cgPSB0aGlzLnF1ZXVlZFxuICAgICAgPyBzaGFsbG93XG4gICAgICAgID8gdGhpcy5zaGFsbG93XG4gICAgICAgIDogZmFsc2VcbiAgICAgIDogISFzaGFsbG93XG4gICAgdGhpcy5xdWV1ZWQgPSB0cnVlXG4gICAgLy8gcmVjb3JkIGJlZm9yZS1wdXNoIGVycm9yIHN0YWNrIGluIGRlYnVnIG1vZGVcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBjb25maWcuZGVidWcpIHtcbiAgICAgIHRoaXMucHJldkVycm9yID0gbmV3IEVycm9yKCdbdnVlXSBhc3luYyBzdGFjayB0cmFjZScpXG4gICAgfVxuICAgIGJhdGNoZXIucHVzaCh0aGlzKVxuICB9XG59XG5cbi8qKlxuICogQmF0Y2hlciBqb2IgaW50ZXJmYWNlLlxuICogV2lsbCBiZSBjYWxsZWQgYnkgdGhlIGJhdGNoZXIuXG4gKi9cblxuV2F0Y2hlci5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5hY3RpdmUpIHtcbiAgICB2YXIgdmFsdWUgPSB0aGlzLmdldCgpXG4gICAgaWYgKFxuICAgICAgdmFsdWUgIT09IHRoaXMudmFsdWUgfHxcbiAgICAgIC8vIERlZXAgd2F0Y2hlcnMgYW5kIEFycmF5IHdhdGNoZXJzIHNob3VsZCBmaXJlIGV2ZW5cbiAgICAgIC8vIHdoZW4gdGhlIHZhbHVlIGlzIHRoZSBzYW1lLCBiZWNhdXNlIHRoZSB2YWx1ZSBtYXlcbiAgICAgIC8vIGhhdmUgbXV0YXRlZDsgYnV0IG9ubHkgZG8gc28gaWYgdGhpcyBpcyBhXG4gICAgICAvLyBub24tc2hhbGxvdyB1cGRhdGUgKGNhdXNlZCBieSBhIHZtIGRpZ2VzdCkuXG4gICAgICAoKF8uaXNBcnJheSh2YWx1ZSkgfHwgdGhpcy5kZWVwKSAmJiAhdGhpcy5zaGFsbG93KVxuICAgICkge1xuICAgICAgLy8gc2V0IG5ldyB2YWx1ZVxuICAgICAgdmFyIG9sZFZhbHVlID0gdGhpcy52YWx1ZVxuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlXG4gICAgICAvLyBpbiBkZWJ1ZyArIGFzeW5jIG1vZGUsIHdoZW4gYSB3YXRjaGVyIGNhbGxiYWNrc1xuICAgICAgLy8gdGhyb3dzLCB3ZSBhbHNvIHRocm93IHRoZSBzYXZlZCBiZWZvcmUtcHVzaCBlcnJvclxuICAgICAgLy8gc28gdGhlIGZ1bGwgY3Jvc3MtdGljayBzdGFjayB0cmFjZSBpcyBhdmFpbGFibGUuXG4gICAgICB2YXIgcHJldkVycm9yID0gdGhpcy5wcmV2RXJyb3JcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiZcbiAgICAgICAgICBjb25maWcuZGVidWcgJiYgcHJldkVycm9yKSB7XG4gICAgICAgIHRoaXMucHJldkVycm9yID0gbnVsbFxuICAgICAgICB0cnkge1xuICAgICAgICAgIHRoaXMuY2IuY2FsbCh0aGlzLnZtLCB2YWx1ZSwgb2xkVmFsdWUpXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBfLm5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRocm93IHByZXZFcnJvclxuICAgICAgICAgIH0sIDApXG4gICAgICAgICAgdGhyb3cgZVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNiLmNhbGwodGhpcy52bSwgdmFsdWUsIG9sZFZhbHVlKVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnF1ZXVlZCA9IHRoaXMuc2hhbGxvdyA9IGZhbHNlXG4gIH1cbn1cblxuLyoqXG4gKiBFdmFsdWF0ZSB0aGUgdmFsdWUgb2YgdGhlIHdhdGNoZXIuXG4gKiBUaGlzIG9ubHkgZ2V0cyBjYWxsZWQgZm9yIGxhenkgd2F0Y2hlcnMuXG4gKi9cblxuV2F0Y2hlci5wcm90b3R5cGUuZXZhbHVhdGUgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIGF2b2lkIG92ZXJ3cml0aW5nIGFub3RoZXIgd2F0Y2hlciB0aGF0IGlzIGJlaW5nXG4gIC8vIGNvbGxlY3RlZC5cbiAgdmFyIGN1cnJlbnQgPSBEZXAudGFyZ2V0XG4gIHRoaXMudmFsdWUgPSB0aGlzLmdldCgpXG4gIHRoaXMuZGlydHkgPSBmYWxzZVxuICBEZXAudGFyZ2V0ID0gY3VycmVudFxufVxuXG4vKipcbiAqIERlcGVuZCBvbiBhbGwgZGVwcyBjb2xsZWN0ZWQgYnkgdGhpcyB3YXRjaGVyLlxuICovXG5cbldhdGNoZXIucHJvdG90eXBlLmRlcGVuZCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGRlcElkcyA9IE9iamVjdC5rZXlzKHRoaXMuZGVwcylcbiAgdmFyIGkgPSBkZXBJZHMubGVuZ3RoXG4gIHdoaWxlIChpLS0pIHtcbiAgICB0aGlzLmRlcHNbZGVwSWRzW2ldXS5kZXBlbmQoKVxuICB9XG59XG5cbi8qKlxuICogUmVtb3ZlIHNlbGYgZnJvbSBhbGwgZGVwZW5kZW5jaWVzJyBzdWJjcmliZXIgbGlzdC5cbiAqL1xuXG5XYXRjaGVyLnByb3RvdHlwZS50ZWFyZG93biA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuYWN0aXZlKSB7XG4gICAgLy8gcmVtb3ZlIHNlbGYgZnJvbSB2bSdzIHdhdGNoZXIgbGlzdFxuICAgIC8vIHdlIGNhbiBza2lwIHRoaXMgaWYgdGhlIHZtIGlmIGJlaW5nIGRlc3Ryb3llZFxuICAgIC8vIHdoaWNoIGNhbiBpbXByb3ZlIHRlYXJkb3duIHBlcmZvcm1hbmNlLlxuICAgIGlmICghdGhpcy52bS5faXNCZWluZ0Rlc3Ryb3llZCkge1xuICAgICAgdGhpcy52bS5fd2F0Y2hlcnMuJHJlbW92ZSh0aGlzKVxuICAgIH1cbiAgICB2YXIgZGVwSWRzID0gT2JqZWN0LmtleXModGhpcy5kZXBzKVxuICAgIHZhciBpID0gZGVwSWRzLmxlbmd0aFxuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIHRoaXMuZGVwc1tkZXBJZHNbaV1dLnJlbW92ZVN1Yih0aGlzKVxuICAgIH1cbiAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlXG4gICAgdGhpcy52bSA9IHRoaXMuY2IgPSB0aGlzLnZhbHVlID0gbnVsbFxuICB9XG59XG5cbi8qKlxuICogUmVjcnVzaXZlbHkgdHJhdmVyc2UgYW4gb2JqZWN0IHRvIGV2b2tlIGFsbCBjb252ZXJ0ZWRcbiAqIGdldHRlcnMsIHNvIHRoYXQgZXZlcnkgbmVzdGVkIHByb3BlcnR5IGluc2lkZSB0aGUgb2JqZWN0XG4gKiBpcyBjb2xsZWN0ZWQgYXMgYSBcImRlZXBcIiBkZXBlbmRlbmN5LlxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsXG4gKi9cblxuZnVuY3Rpb24gdHJhdmVyc2UgKHZhbCkge1xuICB2YXIgaSwga2V5c1xuICBpZiAoXy5pc0FycmF5KHZhbCkpIHtcbiAgICBpID0gdmFsLmxlbmd0aFxuICAgIHdoaWxlIChpLS0pIHRyYXZlcnNlKHZhbFtpXSlcbiAgfSBlbHNlIGlmIChfLmlzT2JqZWN0KHZhbCkpIHtcbiAgICBrZXlzID0gT2JqZWN0LmtleXModmFsKVxuICAgIGkgPSBrZXlzLmxlbmd0aFxuICAgIHdoaWxlIChpLS0pIHRyYXZlcnNlKHZhbFtrZXlzW2ldXSlcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFdhdGNoZXJcbiJdfQ==