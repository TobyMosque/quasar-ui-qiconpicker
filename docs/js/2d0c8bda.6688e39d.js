(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d0c8bda"],{"55bf":function(e,t,o){"use strict";o.r(t);var l=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("q-card",{staticStyle:{width:"100%","max-width":"600px"}},[o("q-card-section",[o("div",{staticClass:"text-h6"},[e._v("QIconPicker Example")]),o("div",{staticClass:"text-subtitle2"},[e._v(e._s(e.title))]),o("div",[o("q-select",{attrs:{options:e.iconSets,label:"Icon Set","emit-value":""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),o("q-input",{attrs:{label:"Filter",clearable:""},model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}}),o("div",{staticClass:"q-mt-md"},[o("strong",[e._v("Selected:")]),o("q-icon",{staticStyle:{"font-size":"28px"},attrs:{name:e.value}}),e._v(" "+e._s(e.value))],1)],1)]),o("q-separator"),o("q-card-section",[o("q-icon-picker",{staticStyle:{height:"300px"},attrs:{"icon-set":e.name,filter:e.filter,tooltips:e.tooltips,color:e.color,"background-color":e.backgroundColor,selectedColor:e.selectedColor,"selectedBackground-color":e.selectedBackgroundColor,"font-size":e.fontSize},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)],1)},n=[],i=(o("7f7f"),{name:"IconCard",data:function(){return{value:"",name:"",filter:"",iconSets:[{label:"Eva Icons",value:"eva-icons"},{label:"Fontawesome Icons",value:"fontawesome-v5"},{label:"Ion Icons",value:"ionicons-v4"},{label:"Material Icons",value:"material-icons"},{label:"MDI Icons",value:"mdi-v3"},{label:"Themify Icons",value:"themify"}],selectedIconSet:{}}},props:{tooltips:Boolean,color:String,backgroundColor:String,selectedColor:String,selectedBackgroundColor:String,fontSize:{type:String,default:"inherit"}},mounted:function(){this.setIconSet("material-icons")},computed:{title:function(){return this.selectedIconSet&&"label"in this.selectedIconSet?this.selectedIconSet.label:""}},watch:{name:function(e){this.setIconSet(e)}},methods:{setIconSet:function(e){if(this.value="",this.name=e,this.selectedIconSet={},e)for(var t=0;t<this.iconSets.length;++t)if(e===this.iconSets[t].value){this.selectedIconSet=this.iconSets[t];break}},onMove:function(e){},prev:function(){},next:function(){}}}),a=i,c=o("2877"),s=Object(c["a"])(a,l,n,!1,null,null,null);t["default"]=s.exports}}]);