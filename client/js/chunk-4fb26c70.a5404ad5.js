(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4fb26c70"],{"02f4":function(t,e,i){var n=i("4588"),a=i("be13");t.exports=function(t){return function(e,i){var r,s,c=String(a(e)),o=n(i),u=c.length;return o<0||o>=u?t?"":void 0:(r=c.charCodeAt(o),r<55296||r>56319||o+1===u||(s=c.charCodeAt(o+1))<56320||s>57343?t?c.charAt(o):r:t?c.slice(o,o+2):s-56320+(r-55296<<10)+65536)}}},"0390":function(t,e,i){"use strict";var n=i("02f4")(!0);t.exports=function(t,e,i){return e+(i?n(t,e).length:1)}},"0bfb":function(t,e,i){"use strict";var n=i("cb7c");t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"11e9":function(t,e,i){var n=i("52a7"),a=i("4630"),r=i("6821"),s=i("6a99"),c=i("69a8"),o=i("c69a"),u=Object.getOwnPropertyDescriptor;e.f=i("9e1e")?u:function(t,e){if(t=r(t),e=s(e,!0),o)try{return u(t,e)}catch(i){}if(c(t,e))return a(!n.f.call(t,e),t[e])}},"18c2":function(t,e,i){},"214f":function(t,e,i){"use strict";i("b0c5");var n=i("2aba"),a=i("32e9"),r=i("79e5"),s=i("be13"),c=i("2b4c"),o=i("520a"),u=c("species"),l=!r(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),p=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var i="ab".split(t);return 2===i.length&&"a"===i[0]&&"b"===i[1]}();t.exports=function(t,e,i){var f=c(t),d=!r(function(){var e={};return e[f]=function(){return 7},7!=""[t](e)}),v=d?!r(function(){var e=!1,i=/a/;return i.exec=function(){return e=!0,null},"split"===t&&(i.constructor={},i.constructor[u]=function(){return i}),i[f](""),!e}):void 0;if(!d||!v||"replace"===t&&!l||"split"===t&&!p){var g=/./[f],h=i(s,f,""[t],function(t,e,i,n,a){return e.exec===o?d&&!a?{done:!0,value:g.call(e,i,n)}:{done:!0,value:t.call(i,e,n)}:{done:!1}}),m=h[0],_=h[1];n(String.prototype,t,m),a(RegExp.prototype,f,2==e?function(t,e){return _.call(t,this,e)}:function(t){return _.call(t,this)})}}},"28a5":function(t,e,i){"use strict";var n=i("aae3"),a=i("cb7c"),r=i("ebd6"),s=i("0390"),c=i("9def"),o=i("5f1b"),u=i("520a"),l=Math.min,p=[].push,f="split",d="length",v="lastIndex",g=!!function(){try{return new RegExp("x","y")}catch(t){}}();i("214f")("split",2,function(t,e,i,h){var m;return m="c"=="abbc"[f](/(b)*/)[1]||4!="test"[f](/(?:)/,-1)[d]||2!="ab"[f](/(?:ab)*/)[d]||4!="."[f](/(.?)(.?)/)[d]||"."[f](/()()/)[d]>1||""[f](/.?/)[d]?function(t,e){var a=String(this);if(void 0===t&&0===e)return[];if(!n(t))return i.call(a,t,e);var r,s,c,o=[],l=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),f=0,g=void 0===e?4294967295:e>>>0,h=new RegExp(t.source,l+"g");while(r=u.call(h,a)){if(s=h[v],s>f&&(o.push(a.slice(f,r.index)),r[d]>1&&r.index<a[d]&&p.apply(o,r.slice(1)),c=r[0][d],f=s,o[d]>=g))break;h[v]===r.index&&h[v]++}return f===a[d]?!c&&h.test("")||o.push(""):o.push(a.slice(f)),o[d]>g?o.slice(0,g):o}:"0"[f](void 0,0)[d]?function(t,e){return void 0===t&&0===e?[]:i.call(this,t,e)}:i,[function(i,n){var a=t(this),r=void 0==i?void 0:i[e];return void 0!==r?r.call(i,a,n):m.call(String(a),i,n)},function(t,e){var n=h(m,t,this,e,m!==i);if(n.done)return n.value;var u=a(t),p=String(this),f=r(u,RegExp),d=u.unicode,v=(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.unicode?"u":"")+(g?"y":"g"),_=new f(g?u:"^(?:"+u.source+")",v),x=void 0===e?4294967295:e>>>0;if(0===x)return[];if(0===p.length)return null===o(_,p)?[p]:[];var b=0,y=0,w=[];while(y<p.length){_.lastIndex=g?y:0;var E,C=o(_,g?p:p.slice(y));if(null===C||(E=l(c(_.lastIndex+(g?0:y)),p.length))===b)y=s(p,y,d);else{if(w.push(p.slice(b,y)),w.length===x)return w;for(var A=1;A<=C.length-1;A++)if(w.push(C[A]),w.length===x)return w;y=b=E}}return w.push(p.slice(b)),w}]})},"386d":function(t,e,i){"use strict";var n=i("cb7c"),a=i("83a1"),r=i("5f1b");i("214f")("search",1,function(t,e,i,s){return[function(i){var n=t(this),a=void 0==i?void 0:i[e];return void 0!==a?a.call(i,n):new RegExp(i)[e](String(n))},function(t){var e=s(i,t,this);if(e.done)return e.value;var c=n(t),o=String(this),u=c.lastIndex;a(u,0)||(c.lastIndex=0);var l=r(c,o);return a(c.lastIndex,u)||(c.lastIndex=u),null===l?-1:l.index}]})},4917:function(t,e,i){"use strict";var n=i("cb7c"),a=i("9def"),r=i("0390"),s=i("5f1b");i("214f")("match",1,function(t,e,i,c){return[function(i){var n=t(this),a=void 0==i?void 0:i[e];return void 0!==a?a.call(i,n):new RegExp(i)[e](String(n))},function(t){var e=c(i,t,this);if(e.done)return e.value;var o=n(t),u=String(this);if(!o.global)return s(o,u);var l=o.unicode;o.lastIndex=0;var p,f=[],d=0;while(null!==(p=s(o,u))){var v=String(p[0]);f[d]=v,""===v&&(o.lastIndex=r(u,a(o.lastIndex),l)),d++}return 0===d?null:f}]})},"520a":function(t,e,i){"use strict";var n=i("0bfb"),a=RegExp.prototype.exec,r=String.prototype.replace,s=a,c="lastIndex",o=function(){var t=/a/,e=/b*/g;return a.call(t,"a"),a.call(e,"a"),0!==t[c]||0!==e[c]}(),u=void 0!==/()??/.exec("")[1],l=o||u;l&&(s=function(t){var e,i,s,l,p=this;return u&&(i=new RegExp("^"+p.source+"$(?!\\s)",n.call(p))),o&&(e=p[c]),s=a.call(p,t),o&&s&&(p[c]=p.global?s.index+s[0].length:e),u&&s&&s.length>1&&r.call(s[0],i,function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(s[l]=void 0)}),s}),t.exports=s},"52a7":function(t,e){e.f={}.propertyIsEnumerable},"5dbc":function(t,e,i){var n=i("d3f4"),a=i("8b97").set;t.exports=function(t,e,i){var r,s=e.constructor;return s!==i&&"function"==typeof s&&(r=s.prototype)!==i.prototype&&n(r)&&a&&a(t,r),t}},"5f1b":function(t,e,i){"use strict";var n=i("23c6"),a=RegExp.prototype.exec;t.exports=function(t,e){var i=t.exec;if("function"===typeof i){var r=i.call(t,e);if("object"!==typeof r)throw new TypeError("RegExp exec method returned something other than an Object or null");return r}if("RegExp"!==n(t))throw new TypeError("RegExp#exec called on incompatible receiver");return a.call(t,e)}},"83a1":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"8b97":function(t,e,i){var n=i("d3f4"),a=i("cb7c"),r=function(t,e){if(a(t),!n(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,n){try{n=i("9b43")(Function.call,i("11e9").f(Object.prototype,"__proto__").set,2),n(t,[]),e=!(t instanceof Array)}catch(a){e=!0}return function(t,i){return r(t,i),e?t.__proto__=i:n(t,i),t}}({},!1):void 0),check:r}},9093:function(t,e,i){var n=i("ce10"),a=i("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,a)}},a76a:function(t,e,i){"use strict";i.d(e,"a",function(){return r});i("28a5"),i("4917"),i("386d");var n=i("f499"),a=i.n(n),r=(i("c5f6"),function(t){return JSON.parse(a()(t))})},aa77:function(t,e,i){var n=i("5ca1"),a=i("be13"),r=i("79e5"),s=i("fdef"),c="["+s+"]",o="​",u=RegExp("^"+c+c+"*"),l=RegExp(c+c+"*$"),p=function(t,e,i){var a={},c=r(function(){return!!s[t]()||o[t]()!=o}),u=a[t]=c?e(f):s[t];i&&(a[i]=u),n(n.P+n.F*c,"String",a)},f=p.trim=function(t,e){return t=String(a(t)),1&e&&(t=t.replace(u,"")),2&e&&(t=t.replace(l,"")),t};t.exports=p},aae3:function(t,e,i){var n=i("d3f4"),a=i("2d95"),r=i("2b4c")("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[r])?!!e:"RegExp"==a(t))}},b0c5:function(t,e,i){"use strict";var n=i("520a");i("5ca1")({target:"RegExp",proto:!0,forced:n!==/./.exec},{exec:n})},bfbe:function(t,e,i){"use strict";var n=i("18c2"),a=i.n(n);a.a},c09a:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"identify"}},[i("div",{staticClass:"id_ways clearfix",class:{hide:t.isHide},attrs:{id:"student_id"}},[i("div",{staticClass:"id_right_part"},[i("a",{staticClass:"id_it",on:{click:t.handleClick}},[t._v("立即认证")])]),t._m(0)]),i("div",{staticClass:"bottom_info",class:{show:t.isShow}},[i("div",{staticClass:"identify-wrapper center"},[i("div",{staticClass:"idtf-content"},[t._m(1),i("div",{staticClass:"idtf-upload"},[i("form",{attrs:{action:"/home/user/docert",method:"post",id:"certform"}},[i("div",{staticClass:"std_input_info"},[i("div",{staticClass:"std_input field"},[i("span",[t._v("姓名")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.getApiData.p_name,expression:"getApiData.p_name"}],attrs:{id:"Name",name:"name",type:"text",placeholder:"请输入真实姓名","data-validate":"required:姓名是个必填项哦~"},domProps:{value:t.getApiData.p_name},on:{input:function(e){e.target.composing||t.$set(t.getApiData,"p_name",e.target.value)}}})]),i("div",{staticClass:"std_input field"},[i("span",[t._v("身份证号或学号")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.getApiData.p_prove,expression:"getApiData.p_prove"}],attrs:{name:"cardnum",id:"StudentId",type:"text",placeholder:"例15251103222","data-validate":"required:证件号是必填项哦~"},domProps:{value:t.getApiData.p_prove},on:{input:function(e){e.target.composing||t.$set(t.getApiData,"p_prove",e.target.value)}}})]),i("div",{staticClass:"std_input field"},[i("span",[t._v("学校")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.getApiData.p_school,expression:"getApiData.p_school"}],attrs:{name:"school",id:"School",type:"text",placeholder:"例桂林电子科技大学","data-validate":"required:学校是个必填项哦~"},domProps:{value:t.getApiData.p_school},on:{input:function(e){e.target.composing||t.$set(t.getApiData,"p_school",e.target.value)}}})])]),i("Alert",{attrs:{type:"warning","show-icon":""}},[t._v("请上传学生证，或学生卡，或身份证")]),i("el-upload",{staticClass:"avatar-uploader",attrs:{action:t.$SERVER.URL+t.$SERVER.PATH+t.$SERVER.POST_UPIMG,"show-file-list":!1,"on-success":t.handleAvatarSuccess}},[t.getApiData.p_image?i("img",{staticClass:"avatar",attrs:{src:t.$SERVER.FILEURL+t.getApiData.p_image}}):i("i",{staticClass:"el-icon-plus avatar-uploader-icon"})]),i("Button",{attrs:{type:"primary",size:"large"},on:{click:t.onSubmit}},[t._v("提交认证")])],1)])])])]),i("div",{staticClass:"result",class:{show:t.isResult}},[i("p",[t._v("您的资料已经提交，请等待审核...")])])])},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"id_left_part"},[i("img",{attrs:{src:"https://www.youzixy.com/Public/images/icon/cert.png",alt:"学号"}}),i("div",{staticClass:"id_info"},[i("h1",[t._v("认证")]),i("p",[t._v("认证方式：学生证，身份证，学生卡")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"idtf-steps"},[i("div",{staticClass:"divide-l step clearfix"},[i("span",[i("img",{staticClass:"feiji",attrs:{src:"https://www.youzixy.com/Public/images/icon/feiji.png"}})]),i("span",{staticClass:"idtf-o"},[t._v("1")]),i("span",{staticClass:"first"},[t._v("填写学号和姓名")])]),i("div",{staticClass:"divide-l step clearfix"},[i("span",[i("img",{staticClass:"feiji",attrs:{src:"https://www.youzixy.com/Public/images/icon/feiji.png"}})]),i("span",{staticClass:"idtf-o"},[t._v("2")]),i("span",{staticClass:"second"},[t._v("上传认证照片")])]),i("div",{staticClass:"divide-l step clearfix"},[i("span",[i("img",{staticClass:"feiji",attrs:{src:"https://www.youzixy.com/Public/images/icon/feiji.png"}})]),i("span",{staticClass:"idtf-o"},[t._v("3")]),i("span",{staticClass:"third"},[t._v("提交认证审核")])])])}],r=i("a76a"),s={data:function(){return{isHide:!1,isShow:!0,isResult:!0,imageUrl:"",getApiData:{p_name:"",p_prove:"",p_school:"",p_image:""}}},methods:{handleClick:function(){this.isHide=!0,this.isShow=!1},handleAvatarSuccess:function(t,e){this.getApiData.p_image=e.response.data.url},onSubmit:function(){var t=Object(r["a"])(this.getApiData);this.$api.post(this.$SERVER.POST_PROVEADD,t).then(function(t){console.log(t)}),this.isShow=!0,this.isResult=!1}}},c=s,o=(i("bfbe"),i("2877")),u=Object(o["a"])(c,n,a,!1,null,null,null);u.options.__file="index.vue";e["default"]=u.exports},c5f6:function(t,e,i){"use strict";var n=i("7726"),a=i("69a8"),r=i("2d95"),s=i("5dbc"),c=i("6a99"),o=i("79e5"),u=i("9093").f,l=i("11e9").f,p=i("86cc").f,f=i("aa77").trim,d="Number",v=n[d],g=v,h=v.prototype,m=r(i("2aeb")(h))==d,_="trim"in String.prototype,x=function(t){var e=c(t,!1);if("string"==typeof e&&e.length>2){e=_?e.trim():f(e,3);var i,n,a,r=e.charCodeAt(0);if(43===r||45===r){if(i=e.charCodeAt(2),88===i||120===i)return NaN}else if(48===r){switch(e.charCodeAt(1)){case 66:case 98:n=2,a=49;break;case 79:case 111:n=8,a=55;break;default:return+e}for(var s,o=e.slice(2),u=0,l=o.length;u<l;u++)if(s=o.charCodeAt(u),s<48||s>a)return NaN;return parseInt(o,n)}}return+e};if(!v(" 0o1")||!v("0b1")||v("+0x1")){v=function(t){var e=arguments.length<1?0:t,i=this;return i instanceof v&&(m?o(function(){h.valueOf.call(i)}):r(i)!=d)?s(new g(x(e)),i,v):x(e)};for(var b,y=i("9e1e")?u(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;y.length>w;w++)a(g,b=y[w])&&!a(v,b)&&p(v,b,l(g,b));v.prototype=h,h.constructor=v,i("2aba")(n,d,v)}},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=chunk-4fb26c70.a5404ad5.js.map