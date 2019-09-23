(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["bfbe8b38"],{2514:function(e,t,o){"use strict";var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("section",{staticClass:"page-header"},[o("h1",{staticClass:"project-name"},[e._v("QIconPicker")]),o("h2",{staticClass:"project-tagline"}),o("q-btn",{staticClass:"btn",attrs:{type:"a",href:"https://github.com/quasarframework/app-extension-qiconpicker",target:"_blank",label:"View on GitHub","no-caps":"",flat:""}}),o("q-btn",{staticClass:"btn",attrs:{to:"/icons",label:"Icons","no-caps":"",flat:""}}),o("q-btn",{staticClass:"btn",attrs:{to:"/docs",label:"Docs","no-caps":"",flat:""}}),o("q-btn",{staticClass:"btn",attrs:{to:"/examples",label:"Examples","no-caps":"",flat:""}}),o("q-btn",{staticClass:"btn",attrs:{to:"/demo",label:"Interactive Demo","no-caps":"",flat:""}}),o("q-btn",{staticClass:"btn",attrs:{type:"a",href:"https://donate.quasar.dev",target:"_blank",label:"Donate","no-caps":"",flat:""}})],1),o("main",{staticClass:"flex flex-start justify-center inset-shadow"},[o("div",{staticClass:"q-pa-md col-12-sm col-8-md col-6-lg inset-shadow",staticStyle:{width:"100%",height:"3px"}}),!0!==e.hideSection?o("div",{staticClass:"q-pa-md col-12-sm col-8-md col-6-lg bg-white shadow-1",staticStyle:{"max-width":"800px",width:"100%"}},[e._t("default")],2):e._e()])])},n=[],s={name:"Hero",props:{hideSection:Boolean}},r=s,i=o("2877"),c=Object(i["a"])(r,a,n,!1,null,null,null);t["a"]=c.exports},"8b24":function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("hero",[o("q-markdown",{attrs:{src:e.markdown,toc:""},on:{data:e.onToc}}),o("component-api",{attrs:{title:"QIconPicker API",json:e.json}}),o("q-markdown",[e._v("\n# Donate\nIf you appreciate the work that went into this App Extension, please consider [donating to Quasar](https://donate.quasar.dev).\n\n---\nThis page created with [QMarkdown](https://quasarframework.github.io/app-extension-qmarkdown), another great Quasar App Extension.\n    ")]),o("q-page-scroller",{attrs:{position:"bottom-right","scroll-offset":150,offset:[18,18]}},[o("q-btn",{attrs:{fab:"",icon:"keyboard_arrow_up",color:"primary"}})],1)],1)},n=[],s=o("2514"),r="QIconPicker\n===\n\n![official icon](https://img.shields.io/badge/Quasar%201.0-Official%20UI%20App%20Extension-blue.svg)\n![npm (scoped)](https://img.shields.io/npm/v/@quasar/quasar-app-extension-qiconpicker.svg?style=plastic)\n[![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/quasarframework/app-extension-qiconpicker.svg)]()\n[![GitHub repo size in bytes](https://img.shields.io/github/repo-size/quasarframework/app-extension-qiconpicker.svg)]()\n[![npm](https://img.shields.io/npm/dt/@quasar/quasar-app-extension-qiconpicker.svg)](https://www.npmjs.com/package/@quasar/quasar-app-extension-qiconpicker)\n\nQIconPicker is a [Quasar App Extension](https://quasar.dev/app-extensions/introduction). It allows you to have an icon selector embedded in your app. It uses a [Quasar Icon Set](https://quasar.dev/options/quasar-icon-sets) or you can pass in an array of objects defining the icons to be displayed.\n\n# Install\nTo add this App Extension to your Quasar application, run the following (in your Quasar app folder):\n```\nquasar ext add @quasar/qiconpicker\n```\n\n# Uninstall\nTo remove this App Extension from your Quasar application, run the following (in your Quasar app folder):\n```\nquasar ext remove @quasar/qiconpicker\n```\n\n# Describe\nYou can use `quasar describe QIconPicker`\n\n# Interactive Demo\nCan be found [here](https://quasarframework.github.io/app-extension-qiconpicker/demo).\n\n# Demo Project (source)\nCan be found [here](https://github.com/quasarframework/app-extension-qiconpicker/tree/master/demo).\n\n# Working with QIconPicker\n\nQIconPicker will work with any of the defined [Quasar Icon Sets](https://quasar.dev/options/quasar-icon-sets). However, for this to work properly, you must make sure the icon set is included in your `quasar.conf.js > extras`.\n\n::: warning\nMost icon sets are very large which may cause performance issues.\n:::\n\n::: tip\nIn order to work properly, QIconPicker needs a specified height in it's style (or parent style).\n:::\n",i=o("ffb6"),c={name:"PageIndex",components:{Hero:s["a"]},data:function(){return{markdown:r,json:i}},computed:{toc:{get:function(){return this.$store.state.common.toc},set:function(e){console.log("toc:",e),this.$store.commit("common/toc",e)}}},methods:{onToc:function(e){e.push({id:"QIconPicker-API",label:"QIconPicker API",level:1,children:Array(0)}),e.push({id:"Donate",label:"Donate",level:1,children:Array(0)}),this.toc=e}}},l=c,p=o("2877"),d=Object(p["a"])(l,a,n,!1,null,null,null);t["default"]=d.exports},ffb6:function(e){e.exports=JSON.parse('{"type":"component","props":{"value":{"type":"String","desc":"`v-model`; The selected icon","default":"","examples":["v-model=\\"calendar-today\\"","v-model=\\"bolt\\""]},"icon-set":{"type":"String","desc":"The name of a Quasar icon set","values":["material-icons","material-icons-outlined","material-icons-round","material-icons-sharp","ionicons-v4","mdi-v3","fontawesome-v5","eva-icons","themify"],"examples":["icon-set=\\"material-icons\\"","icon-set=\\"fontawesome-v5\\""]},"icons":{"type":"Array","desc":"An array of objects containing icon information. The object must contain the key `name` with the value being the icon name (ie: `{ name: \'bolt\' }`). _**Note:** the icons used must already be loaded by Quasar._","examples":[":icons=\\"[{ name: \'calendar-today\'}, { name: \'bolt\'}]\\""],"definition":{"name":{"type":"String","desc":"The icon name"}}},"filter":{"type":"String","desc":"Icons will be filtered by the passed string","examples":[":filter=\\"myFilter\\""]},"dense":{"type":"Boolean","desc":"Use less of a foot print for the component"},"tooltips":{"type":"Boolean","desc":"Turns tooltips on for each displayed icon (shows the icon name)"},"no-footer":{"type":"Boolean","desc":"hides the footer area when `pagination` is enabled"},"color":{"type":"String","desc":"Any color from the [Quasar Color Pallete](https://quasar.dev/style/color-palette) or a CSS color (#, rgb, rgba, hls, etc)","examples":["color=\\"orange-8\\"","color=\\"#c8c8c8\\""]},"background-color":{"type":"String","desc":"Any color from the [Quasar Color Pallete](https://quasar.dev/style/color-palette) or a CSS color (#, rgb, rgba, hls, etc)","examples":["background-color=\\"orange-8\\"","background-color=\\"#c8c8c8\\""]},"selected-color":{"type":"String","desc":"Any color from the [Quasar Color Pallete](https://quasar.dev/style/color-palette) or a CSS color (#, rgb, rgba, hls, etc)","examples":["selected-color=\\"orange-8\\"","selected-color=\\"#c8c8c8\\""]},"selected-background-color":{"type":"String","desc":"Any color from the [Quasar Color Pallete](https://quasar.dev/style/color-palette) or a CSS color (#, rgb, rgba, hls, etc)","examples":["selected-background-color=\\"orange-8\\"","selected-background-color=\\"#c8c8c8\\""]},"font-size":{"type":"String","desc":"The font-size to use for the icons. Any acceptable CSS size can be used","examples":["font-size=\\"3rem\\"","font-size=\\"24px\\""]},"pagination":{"type":"Object","sync":true,"desc":"For pagination purposes uses Quasar\'s pagination component. Use `pagination.sync` to synchronize the data. You can use `page` and `itemsPerPage` to control the pagination. QIconPicker will set `totalPages` depending on `icon-set` or `icons` properties. If using a `filter` the page will automatically be reset to 1","examples":[":pagination.sync=\\"myPagination\\""]}},"events":{"input":{"type":"String","desc":"`v-model`; Value from when the selection changes"}},"scopedSlots":{"icon":{"type":"String","desc":"Slot for changing the display of the icon","examples":["<template #icon=\\"name\\"><q-btn :name=\\"name\\" :label=\\"name\\" no-caps /></template>"]}}}')}}]);