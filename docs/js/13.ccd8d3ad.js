(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[13],{"169e":function(n,a,i){"use strict";i.r(a),a["default"]='<template>\n  <div style="max-width: 800px; width: 100%;">\n    <div class="row justify-start q-ma-md">\n      <q-input filled v-model="paginationColor" label="Pagination Color" />\n    </div>\n    <q-separator />\n    <q-icon-picker\n      v-model="value"\n      icon-set="material-icons"\n      :pagination.sync="pagination"\n      :pagination-props="{\n        maxPages: 5,\n        input: true,\n        color: paginationColor\n      }"\n      style="height: 220px;"\n    />\n  </div>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      value: \'\',\n      pagination: {\n        itemsPerPage: 60,\n        page: 0\n      },\n      paginationColor: \'orange-10\'\n    }\n  }\n}\n<\/script>\n'}}]);