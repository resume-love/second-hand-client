(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5ac3a3be"],{"3ad4":function(t,e,a){},4271:function(t,e,a){},"4fcd":function(t,e,a){"use strict";var o=a("3ad4"),i=a.n(o);i.a},"5e2f":function(t,e,a){"use strict";var o=a("9c3f"),i=a.n(o);i.a},"634a":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bg"},[a("home-header"),a("div",{staticClass:"main"},[a("div",{staticClass:"write"},[t._m(0),a("Form",{attrs:{model:t.getApiData,"label-width":120}},[a("FormItem",{attrs:{label:"收货人："}},[a("Input",{attrs:{placeholder:"请输入收货人姓名"},model:{value:t.getApiData.o_name,callback:function(e){t.$set(t.getApiData,"o_name",e)},expression:"getApiData.o_name"}})],1),a("FormItem",{attrs:{label:"交易地址："}},[a("Input",{attrs:{placeholder:"教学楼/食堂/宿舍等"},model:{value:t.getApiData.o_address,callback:function(e){t.$set(t.getApiData,"o_address",e)},expression:"getApiData.o_address"}})],1),a("FormItem",{attrs:{label:"联系电话：",type:"number"}},[a("Input",{attrs:{placeholder:"请输入联系电话"},model:{value:t.getApiData.o_tel,callback:function(e){t.$set(t.getApiData,"o_tel",e)},expression:"getApiData.o_tel"}})],1)],1)],1),a("div",{staticClass:"confirm"},[a("h2",[t._v("确认订单信息")]),a("Table",{ref:"currentRowTable",attrs:{"highlight-row":"",columns:t.columns,data:t.data4}}),a("Button",{staticClass:"submit",attrs:{type:"primary",size:"large"},on:{click:t.submit}},[t._v("提交订单")]),a("Button",{staticClass:"cancel",attrs:{size:"large"},on:{click:t.toDetail}},[t._v("取消")]),a("Modal",{attrs:{width:"360"},model:{value:t.modal,callback:function(e){t.modal=e},expression:"modal"}},[a("p",{staticStyle:{"text-align":"center"},attrs:{slot:"header"},slot:"header"},[a("span",[t._v("确认订单")])]),a("div",[a("p",[a("span",{staticClass:"item-title"},[t._v("实付款：")]),a("span",{domProps:{textContent:t._s(this.commodityInfo.c_price*this.o_num/100)}})]),a("p",[a("span",{staticClass:"item-title"},[t._v("收货人：")]),a("span",{domProps:{textContent:t._s(t.getApiData.o_name)}})]),a("p",[a("span",{staticClass:"item-title"},[t._v("交易地址：")]),a("span",{domProps:{textContent:t._s(t.getApiData.o_address)}})]),a("p",[a("span",{staticClass:"item-title"},[t._v("联系电话：")]),a("span",{domProps:{textContent:t._s(t.getApiData.o_tel)}})])]),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("Button",{attrs:{type:"primary"},on:{click:t.confirm}},[t._v("确认")]),a("Button",{on:{click:t.cancel}},[t._v("取消")])],1)])],1)]),a("home-footer")],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"write-title"},[a("h2",[t._v("填写个人信息")])])}],s=a("cebc"),n=a("e725"),c=a("9fe9"),l=a("2f62"),r={data:function(){var t=this;return{getApiData:{o_name:"",o_address:"",o_tel:"",b_id:"",c_id:"",o_state:1,o_price:"",o_num:""},columns:[{title:"商品",align:"center",key:"name",width:300,render:function(e){if(t.commodityInfo)return e("div",[e("img",{attrs:{src:t.$SERVER.FILEURL+t.commodityInfo.c_images[0]},style:{display:"block",width:"40px",height:"40px",marginTop:"10px",float:"left"}}),e("a",{style:{display:"block",marginLeft:"50px",height:"40px",textAlign:"left",paddingTop:"8px"}},t.commodityInfo.c_title),e("span",{style:{display:"block",width:"240px",marginLeft:"50px",textAlign:"left",marginTop:"-5px"}},"订单号:"+t.$route.params.id)])}},{title:"单价",align:"center",key:"price",width:100,render:function(e,a){return e("span",t.commodityInfo.c_price/100)}},{title:"数量",align:"center",key:"num",render:function(e){return e("span",t.o_num)}},{title:"实付款",align:"center",key:"total",width:80,render:function(e){return e("span",{style:{color:"#f00"}},t.commodityInfo.c_price*t.o_num/100)}},{title:"卖家",align:"center",key:"buyer",render:function(e){return e("a",t.commodityInfo.u_name)}}],data4:[{}],commodityInfo:"",modal:!1}},components:{HomeHeader:n["a"],HomeFooter:c["a"]},computed:Object(s["a"])({},Object(l["d"])(["o_num"])),methods:{submit:function(){""===this.getApiData.o_name||""===this.getApiData.o_address||""===this.getApiData.o_tel?this.$message.error("请将信息填写完整"):this.modal=!0},confirm:function(){this.$api.post(this.$SERVER.POST_ORDERADD,Object(s["a"])({},this.getApiData)).then(function(t){console.log(t)}),this.modal=!1,this.$message.success("购买成功"),this.$router.push("/user/buy")},cancel:function(){this.modal=!1},toDetail:function(){this.$router.push("/detail")},getCommidity:function(){var t=this;this.$api(this.$SERVER.GET_COMMODITYINFO,{params:{id:this.$route.params.id}}).then(function(e){t.commodityInfo=e.data,t.getApiData.c_id=t.$route.params.id,t.getApiData.o_price=e.data.c_price,t.getApiData.o_num=t.o_num,console.log(t.getApiData.o_num)})},getUserInfo:function(){var t=this;this.$api(this.$SERVER.GET_CURRENTUSERINFO).then(function(e){t.getApiData.b_id=e.data._id})}},created:function(){this.getCommidity(),this.getUserInfo()}},u=r,h=(a("dac8"),a("2877")),d=Object(h["a"])(u,o,i,!1,null,null,null);d.options.__file="index.vue";e["default"]=d.exports},"663d":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQQAAAEECAIAAABBat1dAAAEW0lEQVR4nO3dQY7cOBAAwenF/v/L3ktij7RBoSSqHXE1WqOZVoKHMqnPr1+/foCfn3+evgE4hRggYoCIASIGiBggYoCIAfLv4t8+n89t9zFtMVtc/5rbHxyyHpIubml7uvqXPAY/Vgb4nxggYoCIASIGiBggYoCIASIGyGoCvXbaftGhQenETHd92SsfnBi0r33TY2BlgIgBIgaIGCBigIgBIgaIGCD7Q7eFofnXI/Odod2SQ9Ox07ZovutJsDJAxAARA0QMEDFAxAARA0QMEDFARibQ7zI0073/hOCLn8XKABEDRAwQMUDEABEDRAwQMUDEADGB3jc07r2yb/j+g4e/iZUBIgaIGCBigIgBIgaIGCBigIwM3d41wRmaRj1yBvBpBw+/60mwMkDEABEDRAwQMUDEABEDRAwQMUD2J9CnDTvvN/SO2isHIW9v+9z2TY+BlQEiBogYIGKAiAEiBogYIGKAiAHyedcu1QmPnMh7/+DWF/1bVgaIGCBigIgBIgaIGCBigIgBMnLw8NBEaWg/5Lahn/g1Y76f845tXt+PlQEiBogYIGKAiAEiBogYIGKAiAEycvDwlVHxtvt/6LtOCF7bvp+hGfMjm1StDBAxQMQAEQNEDBAxQMQAEQPkTds+H5nWvcv27Oz+t48e+Ge3MkDEABEDRAwQMUDEABEDRAwQMUBWb/s8beL7yP7D0wztbr3/r/fIplkHD8MfEQNEDBAxQMQAEQNEDBAxQMQAWU2gf/PJ2we3B55n/DW290BvX/YKE2iYJQaIGCBigIgBIgaIGCBigKwOHn7XNsuh6dj92xpPmy0OPQZD39eVy1oZIGKAiAEiBogYIGKAiAEiBogYIMe9+nboIOT7z1d+1+B2yP2D7SusDBAxQMQAEQNEDBAxQMQAEQNEDJCRCfQjTttz/K6tzNse2Sg/NJ+2MkDEABEDRAwQMUDEABEDRAyQkaHbI/Om+8c0j/ya7zI06xyahFoZIGKAiAEiBogYIGKAiAEiBogYIJ93HWQ74ZFX8Q6NZk876Pddrzm2MkDEABEDRAwQMUDEABEDRAyQ1bbPb9q4uBjTDJ0Hetosb9uBry3dHlmuWRkgYoCIASIGiBggYoCIASIGiBgg+wcPn7Zf9JHzjBeGRsX3/7eAd+0IvTIvtzJAxAARA0QMEDFAxAARA0QMEDFARl59+67jZoeO8n3XDvKvGWxfYWWAiAEiBogYIGKAiAEiBogYICNDt7/EI6/lvHJLew7cnzl0WSsDRAwQMUDEABEDRAwQMUDEABEDxAT6N7bfsro9n74y2B667ML9r+KdY2WAiAEiBogYIGKAiAEiBogYIGKAjEygDzxTdmF7hnrg5uCJW7rybT6ylXmblQEiBogYIGKAiAEiBogYIGKAfIZOwD3Nu+aAEx4ZY532CDl4GP6IGCBigIgBIgaIGCBigIgBIgbIagINfxUrA0QMEDFAxAARA0QMEDFAxAARA+Q/+FmFKoxLrsoAAAAASUVORK5CYII="},"6f23":function(t,e,a){t.exports=a.p+"img/wechat.b4288f39.jpg"},"9c3f":function(t,e,a){},"9fe9":function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"footer"},[o("div",{staticClass:"w"},[o("div",{staticClass:"contact"},[t._m(0),o("Poptip",{attrs:{trigger:"hover",placement:"top"}},[o("a",[o("i",{staticClass:"iconfont"},[t._v("")])]),o("div",{staticClass:"api",attrs:{slot:"content"},slot:"content"},[o("img",{attrs:{src:a("663d"),alt:""}})])]),o("Poptip",{attrs:{trigger:"hover",placement:"top"}},[o("a",[o("i",{staticClass:"iconfont"},[t._v("")])]),o("div",{staticClass:"api",attrs:{slot:"content"},slot:"content"},[o("img",{attrs:{src:a("6f23"),alt:""}})])])],1)])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h3",{staticClass:"title"},[t._v("\n        联系我们/\n        "),a("span",[t._v("cantact us")])])}],s=(a("4fcd"),a("2877")),n={},c=Object(s["a"])(n,o,i,!1,null,"042c520c",null);c.options.__file="index.vue";e["a"]=c.exports},dac8:function(t,e,a){"use strict";var o=a("4271"),i=a.n(o);i.a},e278:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-select",{attrs:{filterable:"",remote:"",placeholder:"学校","remote-method":t.getSchoolList,loading:t.schoolLoading},on:{change:t.setVal},model:{value:t.val,callback:function(e){t.val=e},expression:"val"}},t._l(t.schools,function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.name}})}),1)},i=[],s=(a("cadf"),a("551c"),a("097d"),{name:"school",props:["school","schools"],data:function(){return{val:"",schoolLoading:!1}},methods:{getSchoolList:function(t){var e=this;""!==t&&(this.schoolLoading=!0,this.$api("".concat(this.$SERVER.GET_SCHOOILIST,"?name=").concat(t)).then(function(t){e.schoolLoading=!1,e.$emit("list",t.data)}))},setVal:function(t){this.$emit("change",t)}},created:function(){},mounted:function(){},watch:{school:function(t){this.val=t}}}),n=s,c=a("2877"),l=Object(c["a"])(n,o,i,!1,null,null,null);l.options.__file="index.vue";e["a"]=l.exports},e725:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header"},[a("div",{staticClass:"w"},[t._m(0),a("router-link",{attrs:{to:"/"}},[a("div",{staticClass:"home"},[t._v("首页")])]),a("div",{staticClass:"school"},[a("span",{staticClass:"location iconfont"},[t._v("")]),a("span",[t._v(t._s(t.u_school))]),a("a",{staticClass:"change",on:{click:function(e){t.modal=!0}}},[t._v("[切换]")]),a("Modal",{attrs:{title:"请输入学校名称","class-name":"vertical-center-modal"},model:{value:t.modal,callback:function(e){t.modal=e},expression:"modal"}},[a("school",{attrs:{school:t.changeSchoolName,schools:t.schoolList},on:{list:t.getSchoolList,change:t.setSchool}}),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("button",{staticClass:"ivu-btn ivu-btn-text ivu-btn-large",attrs:{type:"button"},on:{click:t.cancel}},[a("span",[t._v("取消")])]),a("button",{staticClass:"ivu-btn ivu-btn-primary ivu-btn-large",attrs:{type:"button"},on:{click:t.changeSchool}},[a("span",[t._v("确定")])])])],1)],1),a("el-button",{staticClass:"release",attrs:{type:"info"},on:{click:t.handleRelease}},[t._v("发布商品")]),a("Modal",{attrs:{width:"360"},model:{value:t.login,callback:function(e){t.login=e},expression:"login"}},[a("p",{staticStyle:{color:"#f60","text-align":"center"},attrs:{slot:"header"},slot:"header"},[a("Icon",{attrs:{type:"ios-information-circle"}}),a("span",[t._v("您还未登录")])],1),a("div",{staticClass:"toLogin"},[a("Button",{attrs:{type:"primary"},on:{click:t.handleLogin}},[t._v("请先登录")])],1),a("div",{attrs:{slot:"footer"},slot:"footer"})]),t.userInfo.u_avatar?a("ul",{staticClass:"login-box"},[a("li",[a("a",{staticClass:"headpic-link",on:{click:t.toUser}},[a("img",{staticClass:"headpic",attrs:{src:t.$SERVER.FILEURL+t.userInfo.u_avatar}})])]),a("li",[a("a",{staticClass:"quit",on:{click:function(e){t.handleQuit()}}},[t._v("退出")])])]):t._e(),t.userInfo.u_avatar?t._e():a("ul",{staticClass:"unLogin"},[a("router-link",{attrs:{to:"/login"}},[a("a",{staticClass:"login"},[t._v("登录")])]),a("router-link",{attrs:{to:"/register"}},[a("a",{staticClass:"register"},[t._v("注册")])])],1),a("div",{staticClass:"search"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.searchKey,expression:"searchKey"}],staticClass:"search-filed",attrs:{type:"text",placeholder:"搜索"},domProps:{value:t.searchKey},on:{input:function(e){e.target.composing||(t.searchKey=e.target.value)}}}),a("button",{staticClass:"search-btn",on:{click:t.searchResult}},[t._v("搜索")])])],1)])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h1",[a("a",{staticClass:"logo",attrs:{href:"javascript:void(0)"}},[t._v("校乐购")])])}],s=a("cebc"),n=(a("cadf"),a("551c"),a("097d"),a("2f62")),c=a("e278"),l={props:["unLogin"],data:function(){return{login:!1,modal:!1,changeSchoolName:"",schoolList:[],searchKey:""}},components:{School:c["a"]},computed:Object(s["a"])({},Object(n["d"])(["userInfo","u_school"])),methods:Object(s["a"])({},Object(n["c"])(["setUserInfo","setCommoditySchool"]),{handleQuit:function(){var t=this;this.$api(this.$SERVER.GET_QUIT).then(function(e){t.setUserInfo(),t.$router.push("/")})},toUser:function(){this.$router.push("/user/personal")},handleRelease:function(){this.userInfo.u_avatar?this.$router.push("/release"):this.login=!0},handleLogin:function(){this.login=!1,this.$router.push("/login")},getUserInfo:function(){var t=this;this.$api(this.$SERVER.GET_CURRENTUSERINFO).then(function(e){t.setUserInfo(e.data),""===t.u_school&&t.setCommoditySchool(e.data.u_school),t.changeSchoolName=t.u_school})},isLogin:function(){var t=this;this.$api(this.$SERVER.GET_ISLOGIN).then(function(e){return e.state&&t.getUserInfo()})},getSchoolList:function(t){this.schoolList=t},setSchool:function(t){this.changeSchoolName=t,console.log(this.changeSchoolName)},changeSchool:function(){this.setCommoditySchool(this.changeSchoolName),this.modal=!1},cancel:function(){this.modal=!1},searchResult:function(){this.$emit("getCommodity",this.searchKey)}}),created:function(){this.isLogin(),this.getUserInfo()}},r=l,u=(a("5e2f"),a("2877")),h=Object(u["a"])(r,o,i,!1,null,null,null);h.options.__file="index.vue";e["a"]=h.exports}}]);
//# sourceMappingURL=chunk-5ac3a3be.a20ea0c4.js.map