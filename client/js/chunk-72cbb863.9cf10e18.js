(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-72cbb863"],{"18c2":function(t,s,i){},bfbe:function(t,s,i){"use strict";var a=i("18c2"),e=i.n(a);e.a},c09a:function(t,s,i){"use strict";i.r(s);var a=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{attrs:{id:"identify"}},[i("div",{staticClass:"id_ways clearfix",class:{hide:t.isHide},attrs:{id:"student_id"}},[i("div",{staticClass:"id_right_part"},[i("a",{staticClass:"id_it",on:{click:t.handleClick}},[t._v("立即认证")])]),t._m(0)]),i("div",{staticClass:"bottom_info",class:{show:t.isShow}},[i("div",{staticClass:"identify-wrapper center"},[i("div",{staticClass:"idtf-content"},[t._m(1),i("div",{staticClass:"idtf-upload"},[i("form",{attrs:{action:"/home/user/docert",method:"post",id:"certform"}},[t._m(2),i("Alert",{attrs:{type:"warning","show-icon":""}},[t._v("请上传学生证，或学生卡，或身份证")]),i("el-upload",{staticClass:"avatar-uploader",attrs:{action:"https://jsonplaceholder.typicode.com/posts/","show-file-list":!1,"on-success":t.handleAvatarSuccess,"before-upload":t.beforeAvatarUpload}},[t.imageUrl?i("img",{staticClass:"avatar",attrs:{src:t.imageUrl}}):i("i",{staticClass:"el-icon-plus avatar-uploader-icon"})]),i("Button",{attrs:{type:"primary",size:"large"}},[t._v("提交认证")])],1)])])])])])},e=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"id_left_part"},[i("img",{attrs:{src:"https://www.youzixy.com/Public/images/icon/cert.png",alt:"学号"}}),i("div",{staticClass:"id_info"},[i("h1",[t._v("认证")]),i("p",[t._v("认证方式：学生证，身份证，学生卡")])])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"idtf-steps"},[i("div",{staticClass:"divide-l step clearfix"},[i("span",[i("img",{staticClass:"feiji",attrs:{src:"https://www.youzixy.com/Public/images/icon/feiji.png"}})]),i("span",{staticClass:"idtf-o"},[t._v("1")]),i("span",{staticClass:"first"},[t._v("填写学号和姓名")])]),i("div",{staticClass:"divide-l step clearfix"},[i("span",[i("img",{staticClass:"feiji",attrs:{src:"https://www.youzixy.com/Public/images/icon/feiji.png"}})]),i("span",{staticClass:"idtf-o"},[t._v("2")]),i("span",{staticClass:"second"},[t._v("上传认证照片")])]),i("div",{staticClass:"divide-l step clearfix"},[i("span",[i("img",{staticClass:"feiji",attrs:{src:"https://www.youzixy.com/Public/images/icon/feiji.png"}})]),i("span",{staticClass:"idtf-o"},[t._v("3")]),i("span",{staticClass:"third"},[t._v("提交认证审核")])])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"std_input_info"},[i("div",{staticClass:"std_input field"},[i("span",[t._v("姓名")]),i("input",{attrs:{value:"",id:"Name",name:"name",type:"text",placeholder:"请输入真实姓名","data-validate":"required:姓名是个必填项哦~"}})]),i("div",{staticClass:"std_input field"},[i("span",[t._v("证件号")]),i("input",{attrs:{name:"cardnum",id:"StudentId",value:"",type:"text",placeholder:"例201012913","data-validate":"required:证件号是必填项哦~"}})]),i("div",{staticClass:"std_input field"},[i("span",[t._v("学校")]),i("input",{attrs:{name:"school",id:"School",value:"",type:"text",placeholder:"例桂林电子科技大学","data-validate":"required:学校是个必填项哦~"}})])])}],c={data:function(){return{isHide:!1,isShow:!0,imageUrl:""}},methods:{handleClick:function(){this.isHide=!0,this.isShow=!1},handleAvatarSuccess:function(t,s){this.imageUrl=URL.createObjectURL(s.raw)},beforeAvatarUpload:function(t){var s="image/jpeg"===t.type,i=t.size/1024/1024<2;return s||this.$message.error("上传图片只能是 JPG 格式!"),i||this.$message.error("上传图片大小不能超过 2MB!"),s&&i}}},l=c,r=(i("bfbe"),i("2877")),n=Object(r["a"])(l,a,e,!1,null,null,null);n.options.__file="index.vue";s["default"]=n.exports}}]);
//# sourceMappingURL=chunk-72cbb863.9cf10e18.js.map