webpackJsonp([15],{fXvj:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=a("Gu7T"),o=a.n(l),s=(a("//Fk"),a("9r5n"),a("NYxO"),a("gyMJ"));var r={name:"category",data:function(){return{categoryList:[{label:"中单",cid:1001},{label:"上单",cid:1002},{label:"打野",cid:1003},{label:"射手",cid:1004},{label:"辅助",cid:1005},{label:"补位",cid:1006}],loadState:0,categoryIndex:0,categoryId:null,pageTotal:1,pageNow:1,pageList:[],scrollbar:!1,scrollbarFade:!0,pullDownRefresh:!0,pullDownRefreshThreshold:90,pullDownRefreshStop:40,pullUpLoad:!0,pullUpLoadThreshold:90}},computed:{scrollbarObj:function(){return!!this.scrollbar&&{fade:this.scrollbarFade}},pullDownRefreshObj:function(){return!!this.pullDownRefresh&&{threshold:parseInt(this.pullDownRefreshThreshold),stop:parseInt(this.pullDownRefreshStop)}},pullUpLoadObj:function(){return!!this.pullUpLoad&&{threshold:parseInt(this.pullUpLoadThreshold),txt:{more:this.pullUpLoadMoreTxt,noMore:this.pullUpLoadNoMoreTxt}}}},created:function(){var t=this;this.loadMore().then(function(e){t.pageList=e})},watch:{categoryIndex:function(){}},methods:{handleRefresh:function(){var t=this;this.loadMore().then(function(e){t.pageList=e})},handleSwitchCategory:function(t,e){var a=this;this.categoryIndex=e,this.categoryId=t.cid,this.loadState=0,this.pageNow=1,this.loadMore().then(function(t){a.pageList=t})},loadMore:function(){var t=this;return s.a.getCategory({p:this.pageNow,cid:this.categoryId}).then(function(e){return t.loadState=1,t.pageTotal=e.data.page.pageTotal,t.pageTotal>=t.pageNow?(t.pageNow++,e.data.page.list):[]}).catch(function(e){t.loadState=2})},handleSearch:function(t){alert(t)},onPullingDown:function(){var t=this;this.pageNow=1,this.loadMore().then(function(e){e?setTimeout(function(a){t.pageList=e,t.$refs.scroll.forceUpdate(!0)},500):setTimeout(function(e){t.$refs.scroll.forceUpdate()},500)})},onPullingUp:function(){var t=this;this.loadMore().then(function(e){e.length>0?setTimeout(function(a){t.pageList=[].concat(o()(e),o()(t.pageList)),t.$nextTick(function(e){t.$refs.scroll.forceUpdate(!0)})},500):setTimeout(function(e){t.$nextTick(function(e){t.$refs.scroll.forceUpdate()})},500)})}}},n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page full flex flex-col category"},[a("search-bar",{attrs:{refs:"searchBar"},on:{search:t.handleSearch}}),t._v(" "),a("div",{staticClass:"category-tab-top"},[a("simple-scroll",{staticClass:"category-tab-bar",attrs:{direction:"horizontal"}},[a("ul",t._l(t.categoryList,function(e,l){return a("li",{key:e.cid,staticClass:"nav",class:{active:t.categoryIndex==l},on:{click:function(a){t.handleSwitchCategory(e,l)}}},[t._v("\n            "+t._s(e.label)),a("div",{staticClass:"dian"})])}))])],1),t._v(" "),1==t.loadState?a("div",{staticClass:"category-main flex flex-col"},[a("div",{staticClass:"category-tab-list"},[t.pageList.length>0?a("div",{staticClass:"category-tab-scroll"},[a("scroll",{ref:"scroll",attrs:{scrollbar:t.scrollbarObj,pullDownRefresh:t.pullDownRefreshObj,pullUpLoad:t.pullUpLoadObj},on:{pullingDown:t.onPullingDown,pullingUp:t.onPullingUp}},[a("ul",t._l(t.pageList,function(e){return a("li",{staticClass:"more-item",on:{touchend:function(a){t.pagePush({path:"/detail/"+e.id})}}},[a("div",{staticClass:"dl"},[a("div",{staticClass:"dt"},[a("img",{staticClass:"img-stretch",attrs:{src:e.url}})]),t._v(" "),a("div",{staticClass:"dd"},[a("div",{staticClass:"p"},[a("span",[t._v(t._s(e.desc))])]),t._v(" "),a("div",{staticClass:"p"},[a("span",{staticClass:"price"},[t._v(t._s(t._f("currency")(e.price)))])])])])])}))])],1):a("data-error",{attrs:{message:"暂时无数据 呜~"}})],1)]):0==t.loadState?a("data-loading"):a("data-error",{attrs:{message:"阿狸酱加载不了呜"}},[a("mt-button",{on:{click:t.handleRefresh}},[t._v("再试一次")])],1),t._v(" "),a("my-footer")],1)},staticRenderFns:[]};var i=a("VU/8")(r,n,!1,function(t){a("yeWi")},"data-v-4ca599a5",null);e.default=i.exports},yeWi:function(t,e){}});