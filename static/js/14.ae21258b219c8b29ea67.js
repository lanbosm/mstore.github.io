webpackJsonp([14],{"/rwO":function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=i("Dd8w"),e=i.n(a),c=i("NYxO"),n={name:"Address",data:function(){return{title:"我的地址",loading:!1}},computed:e()({},Object(c.e)("address",{list:function(t){return t.list}})),methods:e()({sss:function(){this.getAddress()},handleClick:function(){this.$router.replace("/home")}},Object(c.b)("address",["getAddressList"]),{fetchData:function(){this.getAddressList()}}),created:function(){this.fetchData()}},l={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"page full flex flex-col Address"},[i("my-header",{attrs:{title:t.title}}),t._v(" "),t._m(0),t._v(" "),i("div",{staticClass:"item_add",on:{click:function(s){t.pagePush("/address/add")}}},[t._v("\n      选择地址信息\n  ")])],1)},staticRenderFns:[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"item_content flex flex-col"},[i("ul",{staticClass:"item_ul"},[i("li",{staticClass:"item_li"},[i("div",{staticClass:"item_left"},[i("div",{staticClass:"item_left_input"},[i("span",{staticClass:"list-checkbox"},[i("input",{attrs:{type:"checkbox"}}),t._v(" "),i("i")])]),t._v(" "),i("div",{staticClass:"item_left_content"},[i("p",{staticClass:"font-16"},[t._v("李小白 15821004227")]),t._v(" "),i("p",{staticClass:"font-12 margin-t-10 gray"},[t._v("公司地址 "),i("span",{staticClass:"font-12 yellow"},[t._v("当前默认地址")])]),t._v(" "),i("p",{staticClass:"font-12 margin-t-10 gray line"},[t._v("上海市浦东新区魔法阵老司机西大院多少路外网的的订单订单")])])]),t._v(" "),i("div",{staticClass:"item_right"},[i("i",{staticClass:"iconfont icon-bianji"})])]),t._v(" "),i("li",{staticClass:"item_li"},[i("div",{staticClass:"item_left"},[i("div",{staticClass:"item_left_input"},[i("span",{staticClass:"list-checkbox"},[i("input",{attrs:{type:"checkbox"}}),t._v(" "),i("i")])]),t._v(" "),i("div",{staticClass:"item_left_content"},[i("p",{staticClass:"font-16"},[t._v("李小白 15821004227")]),t._v(" "),i("p",{staticClass:"font-12 margin-t-10 gray"},[t._v("公司地址 "),i("span",{staticClass:"font-12"},[t._v("当前默认地址")])]),t._v(" "),i("p",{staticClass:"font-12 margin-t-10 gray line"},[t._v("上海市浦东新区魔法阵老司机西大院多少路外网的的订单订单")])])]),t._v(" "),i("div",{staticClass:"item_right"},[i("i",{staticClass:"iconfont icon-bianji"})])]),t._v(" "),i("li",{staticClass:"item_li"},[i("div",{staticClass:"item_left"},[i("div",{staticClass:"item_left_input"},[i("span",{staticClass:"list-checkbox"},[i("input",{attrs:{type:"checkbox"}}),t._v(" "),i("i")])]),t._v(" "),i("div",{staticClass:"item_left_content"},[i("p",{staticClass:"font-16"},[t._v("线下到店/自提")]),t._v(" "),i("p",{staticClass:"font-12 margin-t-10 gray line"},[t._v("选择“线下到店”即为自行到店,所购买的商品或相关服务，您将自行到店进行体验、消费或提取")])])])])])])}]};var _=i("VU/8")(n,l,!1,function(t){i("xcaH")},"data-v-5fc66140",null);s.default=_.exports},xcaH:function(t,s){}});