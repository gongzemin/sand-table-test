(function(){define('POI',['./newVueInstance','axios'],function(newVueInstance,axios){'use strict';var POI={VERSION:'1.0'};var __encode='jsjiami.com',_a={},_0xb483=["\x5F\x64\x65\x63\x6F\x64\x65","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];(function(_0xd642x1){_0xd642x1[_0xb483[0]]=_0xb483[1]})(_a);var __Oxba633=["\x43\x65\x73\x69\x75\x6D","\x6D\x65\x61\x73\x75\x72\x65\x54\x69\x6D\x65\x6F\x75\x74\x49\x44","\x61\x64\x64","\x65\x6E\x74\x69\x74\x69\x65\x73","\x68\x61\x6E\x64\x6C\x65\x72","\x63\x6F\x6D\x6D\x6F\x6E","\x73\x74\x61\x74\x65","\x24\x73\x74\x6F\x72\x65","\x63\x61\x6E\x76\x61\x73","\x73\x63\x65\x6E\x65","\x74\x6F\x6F\x6C\x54\x69\x70","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64","\x6C\x65\x66\x74","\x73\x74\x79\x6C\x65","\x78","\x65\x6E\x64\x50\x6F\x73\x69\x74\x69\x6F\x6E","\x70\x78","\x74\x6F\x70","\x79","\x69\x6E\x6E\x65\x72\x48\x54\x4D\x4C","\x3C\x73\x70\x61\x6E\x3E\u5355\u51FB\u5F00\u59CB\uFF0C\u53F3\u51FB\u7ED3\u675F\x3C\x2F\x73\x70\x61\x6E\x3E","\x64\x69\x73\x70\x6C\x61\x79","\x62\x6C\x6F\x63\x6B","\x53\x63\x72\x65\x65\x6E\x53\x70\x61\x63\x65\x45\x76\x65\x6E\x74\x54\x79\x70\x65","\x73\x65\x74\x49\x6E\x70\x75\x74\x41\x63\x74\x69\x6F\x6E","\x70\x6F\x73\x69\x74\x69\x6F\x6E","\x70\x69\x63\x6B\x50\x6F\x73\x69\x74\x69\x6F\x6E","\x64\x65\x66\x69\x6E\x65\x64","\x66\x72\x6F\x6D\x43\x61\x72\x74\x65\x73\x69\x61\x6E","\x43\x61\x72\x74\x6F\x67\x72\x61\x70\x68\x69\x63","\x6C\x6F\x6E\x67\x69\x74\x75\x64\x65","\x74\x6F\x44\x65\x67\x72\x65\x65\x73","\x4D\x61\x74\x68","\x6C\x61\x74\x69\x74\x75\x64\x65","\x68\x65\x69\x67\x68\x74","\x61\x63\x63\x65\x73\x73\x55\x72\x6C","\x64\x65\x70\x74\x49\x64","\x69\x64","\x69\x6D\x67\x4E\x61\x6D\x65","\x6F\x72\x69\x67\x69\x6E\x61\x6C\x4E\x61\x6D\x65","\x73\x61\x76\x65\x50\x61\x74\x68","\x75\x69\x64","\x6C\x65\x6E\x67\x74\x68","\x64\x65\x73\x74\x72\x6F\x79","\x6E\x6F\x6E\x65","","\x50\x4F\x49\x5F","\x6E\x61\x6D\x65","\x5F\x50\x4F\x49","\x63\x68\x65\x63\x6B\x65\x64","\x6C\x6E\x67","\x6C\x61\x74","\x61\x6C\x74\x69\x74\x75\x64\x65","\x66\x72\x6F\x6D\x44\x65\x67\x72\x65\x65\x73","\x43\x61\x72\x74\x65\x73\x69\x61\x6E\x33","\x69\x6D\x67","\x50\x4F\x53\x49\x54\x49\x56\x45\x5F\x49\x4E\x46\x49\x4E\x49\x54\x59","\x31\x38\x70\x78\x20\x73\x61\x6E\x73\x2D\x73\x65\x72\x69\x66","\x59\x45\x4C\x4C\x4F\x57","\x43\x6F\x6C\x6F\x72","\x46\x49\x4C\x4C\x5F\x41\x4E\x44\x5F\x4F\x55\x54\x4C\x49\x4E\x45","\x4C\x61\x62\x65\x6C\x53\x74\x79\x6C\x65","\x43\x45\x4E\x54\x45\x52","\x48\x6F\x72\x69\x7A\x6F\x6E\x74\x61\x6C\x4F\x72\x69\x67\x69\x6E","\x64\x69\x73\x74\x61\x6E\x63\x65\x44\x69\x73\x70\x6C\x61\x79\x43\x6F\x6E\x64\x69\x74\x69\x6F\x6E","\x62\x69\x6C\x6C\x62\x6F\x61\x72\x64","\x6C\x61\x62\x65\x6C","\x69\x6D\x67\x49\x64","\x63\x68\x65\x63\x6B\x65\x64\x6E\x6F\x64\x65\x73","\x70\x75\x73\x68","\x50\x4F\x49\x41\x72\x72","\x70\x6F\x69\x4D\x61\x72\x6B\x53\x65\x6C\x65\x63\x74\x65\x64\x41\x72\x72","\x73\x61\x76\x65\x50\x4F\x49\x44\x61\x74\x61\x45\x72\x72\x3A","\x6C\x6F\x67","\x63\x61\x74\x63\x68","\x63\x6F\x64\x65","\x64\x61\x74\x61","\x6C\x6F\x6E","\x74\x68\x65\x6E","\x73\x61\x6E\x64\x42\x61\x73\x65\x55\x72\x6C","\x70\x6F\x69\x49\x6E\x73\x74\x61\x6E\x63\x65\x2F\x61\x64\x64","\x70\x6F\x73\x74","\x24\x61\x78\x69\x6F\x73","\x72\x65\x6D\x6F\x76\x65","\x6D\x69\x6C\x69\x74\x61\x72\x79\x48\x61\x6E\x64\x6C\x65\x72","\x6D\x6F\x64\x65\x6C\x4E\x61\x6D\x65","\x67\x6C\x62","\x69\x6D\x61\x67\x65\x4C\x69\x73\x74","\x69\x6D\x61\x67\x65\x4E\x61\x6D\x65","\x74\x69\x74\x6C\x65","\x68\x65\x61\x64\x69\x6E\x67","\x74\x6F\x52\x61\x64\x69\x61\x6E\x73","\x70\x69\x74\x63\x68","\x72\x6F\x6C\x6C","\x68\x65\x61\x64\x69\x6E\x67\x50\x69\x74\x63\x68\x52\x6F\x6C\x6C\x51\x75\x61\x74\x65\x72\x6E\x69\x6F\x6E","\x54\x72\x61\x6E\x73\x66\x6F\x72\x6D\x73","\x47\x4C\x42\x5F","\x5F\x47\x4C\x42","\x4E\x4F\x4E\x45","\x48\x65\x69\x67\x68\x74\x52\x65\x66\x65\x72\x65\x6E\x63\x65","\x54\x4F\x50","\x56\x65\x72\x74\x69\x63\x61\x6C\x4F\x72\x69\x67\x69\x6E","\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E","\x6D\x6F\x64\x65\x6C","\x47\x4C\x42\x4D\x6F\x64\x65\x6C\x41\x72\x72","\x73\x61\x76\x65\x44\x61\x74\x61\x45\x72\x72\x3A","\x67\x6C\x62\x53\x65\x6C\x65\x63\x74\x65\x64\x41\x72\x72","\x67\x6C\x62\x49\x6E\x73\x74\x61\x6E\x63\x65\x2F\x61\x64\x64","\x67\x65\x74\x42\x79\x49\x64","\x5F\x6F\x72\x69\x65\x6E\x74\x61\x74\x69\x6F\x6E","\x5F\x76\x61\x6C\x75\x65","\x5F\x70\x6F\x73\x69\x74\x69\x6F\x6E","\x5F\x74\x65\x78\x74","\x5F\x6C\x61\x62\x65\x6C","\x70\x69\x63\x6B","\x69\x6E\x64\x65\x78\x4F\x66","\x65\x6E\x61\x62\x6C\x65\x52\x6F\x74\x61\x74\x65","\x73\x63\x72\x65\x65\x6E\x53\x70\x61\x63\x65\x43\x61\x6D\x65\x72\x61\x43\x6F\x6E\x74\x72\x6F\x6C\x6C\x65\x72","\x65\x6E\x61\x62\x6C\x65\x5A\x6F\x6F\x6D","\x73\x74\x61\x72\x74\x50\x6F\x73\x69\x74\x69\x6F\x6E","\x65\x6C\x6C\x69\x70\x73\x6F\x69\x64","\x67\x6C\x6F\x62\x65","\x70\x69\x63\x6B\x45\x6C\x6C\x69\x70\x73\x6F\x69\x64","\x63\x61\x6D\x65\x72\x61","\x74\x6F\x46\x69\x78\x65\x64","\x47\x4C\x42\x6C\x6F\x6E","\x47\x4C\x42\x6C\x61\x74","\x47\x4C\x42\x61\x6C\x74\x69\x74\x75\x64\x65","\x69\x73\x44\x65\x73\x74\x72\x6F\x79\x65\x64","\x64\x75\x72\x61\x74\x69\x6F\x6E","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\x66\x6C\x79\x54\x6F","\x72\x65\x6D\x6F\x76\x65\x41\x6C\x6C","\x69\x6D\x61\x67\x65\x72\x79\x4C\x61\x79\x65\x72\x73","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x77\x65\x62\x73\x74\x30\x7B\x73\x7D\x2E\x69\x73\x2E\x61\x75\x74\x6F\x6E\x61\x76\x69\x2E\x63\x6F\x6D\x2F\x61\x70\x70\x6D\x61\x70\x74\x69\x6C\x65\x3F\x73\x74\x79\x6C\x65\x3D\x36\x26\x78\x3D\x7B\x78\x7D\x26\x79\x3D\x7B\x79\x7D\x26\x7A\x3D\x7B\x7A\x7D","\x31\x32\x33\x34","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x65\x62\x73\x74\x30\x32\x2E\x69\x73\x2E\x61\x75\x74\x6F\x6E\x61\x76\x69\x2E\x63\x6F\x6D\x2F\x61\x70\x70\x6D\x61\x70\x74\x69\x6C\x65\x3F\x78\x3D\x7B\x78\x7D\x26\x79\x3D\x7B\x79\x7D\x26\x7A\x3D\x7B\x7A\x7D\x26\x6C\x61\x6E\x67\x3D\x7A\x68\x5F\x63\x6E\x26\x73\x69\x7A\x65\x3D\x31\x26\x73\x63\x61\x6C\x65\x3D\x31\x26\x73\x74\x79\x6C\x65\x3D\x38","\x61\x64\x64\x49\x6D\x61\x67\x65\x72\x79\x50\x72\x6F\x76\x69\x64\x65\x72","\x64\x65\x66\x61\x75\x6C\x74\x41\x63\x63\x65\x73\x73\x54\x6F\x6B\x65\x6E","\x49\x6F\x6E","\x65\x79\x4A\x68\x62\x47\x63\x69\x4F\x69\x4A\x49\x55\x7A\x49\x31\x4E\x69\x49\x73\x49\x6E\x52\x35\x63\x43\x49\x36\x49\x6B\x70\x58\x56\x43\x4A\x39\x2E\x65\x79\x4A\x71\x64\x47\x6B\x69\x4F\x69\x49\x33\x4E\x6A\x52\x6A\x4E\x47\x46\x6A\x4E\x79\x31\x6A\x4E\x44\x4D\x33\x4C\x54\x51\x7A\x4D\x54\x6B\x74\x4F\x44\x56\x6C\x59\x53\x30\x35\x59\x6D\x46\x6D\x4F\x54\x41\x78\x59\x6A\x6B\x35\x4D\x57\x55\x69\x4C\x43\x4A\x70\x5A\x43\x49\x36\x4D\x7A\x6B\x35\x4D\x53\x77\x69\x63\x32\x4E\x76\x63\x47\x56\x7A\x49\x6A\x70\x62\x49\x6D\x46\x7A\x62\x43\x49\x73\x49\x6D\x46\x7A\x63\x69\x49\x73\x49\x6D\x46\x7A\x64\x79\x49\x73\x49\x6D\x64\x6A\x49\x6C\x30\x73\x49\x6D\x6C\x68\x64\x43\x49\x36\x4D\x54\x55\x7A\x4F\x54\x55\x33\x4F\x54\x45\x32\x4E\x58\x30\x2E\x2D\x32\x35\x75\x64\x55\x7A\x45\x4E\x52\x4A\x36\x36\x6D\x6E\x49\x43\x4D\x4B\x38\x48\x66\x63\x36\x78\x67\x46\x5F\x56\x50\x37\x50\x34\x73\x57\x6B\x53\x48\x61\x55\x6A\x4F\x51","\x63\x6F\x6E\x74\x61\x69\x6E\x65\x72\x44\x69\x76","\x63\x72\x65\x61\x74\x65\x44\x65\x66\x61\x75\x6C\x74\x49\x6D\x61\x67\x65\x72\x79\x50\x72\x6F\x76\x69\x64\x65\x72\x56\x69\x65\x77\x4D\x6F\x64\x65\x6C\x73","\x63\x72\x65\x61\x74\x65\x44\x65\x66\x61\x75\x6C\x74\x54\x65\x72\x72\x61\x69\x6E\x50\x72\x6F\x76\x69\x64\x65\x72\x56\x69\x65\x77\x4D\x6F\x64\x65\x6C\x73","\x62\x6F\x64\x79","\x53\x43\x45\x4E\x45\x33\x44","\x53\x63\x65\x6E\x65\x4D\x6F\x64\x65","\x5F\x63\x72\x65\x64\x69\x74\x43\x6F\x6E\x74\x61\x69\x6E\x65\x72","\x5F\x63\x65\x73\x69\x75\x6D\x57\x69\x64\x67\x65\x74","\x64\x65\x70\x74\x68\x54\x65\x73\x74\x41\x67\x61\x69\x6E\x73\x74\x54\x65\x72\x72\x61\x69\x6E","\x67\x65\x74","\x72\x65\x6D\x6F\x76\x65\x49\x6E\x70\x75\x74\x41\x63\x74\x69\x6F\x6E","\x73\x63\x72\x65\x65\x6E\x53\x70\x61\x63\x65\x45\x76\x65\x6E\x74\x48\x61\x6E\x64\x6C\x65\x72","\x63\x65\x73\x69\x75\x6D\x57\x69\x64\x67\x65\x74","\x6D\x61\x70\x46\x6C\x61\x67","\x69\x6E\x69\x74\x45\x61\x72\x74\x68","\x64\x65\x70\x74\x68\x54\x65\x73\x74\x41\x54","\x61\x64\x64\x47\x61\x6F\x44\x65\x4D\x61\x70\x53\x61\x74\x65\x6C\x6C\x69\x74\x65","\x72\x65\x6D\x6F\x76\x65\x4D\x61\x70","\x6D\x65\x61\x73\x75\x72\x65\x45\x6E\x74\x69\x74\x69\x65\x73\x49\x6E\x69\x74","\x6D\x65\x61\x73\x75\x72\x65\x43\x6C\x65\x61\x72\x4F\x70\x72","\x41\x64\x64\x50\x4F\x49","\x41\x64\x64\x47\x4C\x42\x4D\x6F\x64\x65\x6C","\x61\x64\x64\x47\x4C\x42\x53\x69\x6E\x67\x6C\x65\x4D\x6F\x64\x65\x6C","\x61\x64\x64\x47\x4C\x42\x53\x69\x6E\x67\x6C\x65\x4D\x6F\x64\x65\x6C\x4C\x69\x73\x74","\x61\x64\x6A\x75\x73\x74\x4D\x6F\x64\x65\x6C","\x45\x64\x69\x74\x45\x6E\x74\x69\x74\x69\x65\x73","\x61\x64\x64\x42\x69\x6C\x6C\x62\x6F\x61\x72\x64\x73\x4C\x69\x73\x74","\u5220\u9664","\u7248\u672C\u53F7\uFF0C\x6A\x73\u4F1A\u5B9A","\u671F\u5F39\u7A97\uFF0C","\u8FD8\u8BF7\u652F\u6301\u6211\u4EEC\u7684\u5DE5\u4F5C","\x6A\x73\x6A\x69\x61","\x6D\x69\x2E\x63\x6F\x6D"];var floatingPoint_g;var measure_entities;var viewer;var Cesium=newVueInstance[__Oxba633[0x0]];window[__Oxba633[0x1]]=null;function measureEntitiesInit(viewer){if(measure_entities==undefined){measure_entities=viewer[__Oxba633[0x3]][__Oxba633[0x2]](new Cesium.Entity())}}var AddPOI=function(viewer,_0x6ae3x7){measureClearOpr(viewer);newVueInstance[__Oxba633[0x7]][__Oxba633[0x6]][__Oxba633[0x5]][__Oxba633[0x4]]=new Cesium.ScreenSpaceEventHandler(viewer[__Oxba633[0x9]][__Oxba633[0x8]]);var _0x6ae3x8=document[__Oxba633[0xb]](__Oxba633[0xa]);newVueInstance[__Oxba633[0x7]][__Oxba633[0x6]][__Oxba633[0x5]][__Oxba633[0x4]][__Oxba633[0x18]](function(_0x6ae3x9){_0x6ae3x8[__Oxba633[0xd]][__Oxba633[0xc]]=_0x6ae3x9[__Oxba633[0xf]][__Oxba633[0xe]]+10+__Oxba633[0x10];_0x6ae3x8[__Oxba633[0xd]][__Oxba633[0x11]]=_0x6ae3x9[__Oxba633[0xf]][__Oxba633[0x12]]+20+__Oxba633[0x10];_0x6ae3x8[__Oxba633[0x13]]=__Oxba633[0x14];_0x6ae3x8[__Oxba633[0xd]][__Oxba633[0x15]]=__Oxba633[0x16]},Cesium[__Oxba633[0x17]].MOUSE_MOVE);newVueInstance[__Oxba633[0x7]][__Oxba633[0x6]][__Oxba633[0x5]][__Oxba633[0x4]][__Oxba633[0x18]](function(_0x6ae3x9){var _0x6ae3xa=viewer[__Oxba633[0x9]][__Oxba633[0x1a]](_0x6ae3x9[__Oxba633[0x19]]);if(Cesium[__Oxba633[0x1b]](_0x6ae3xa)){var _0x6ae3xb=Cesium[__Oxba633[0x1d]][__Oxba633[0x1c]](_0x6ae3xa);var _0x6ae3xc=Cesium[__Oxba633[0x20]][__Oxba633[0x1f]](_0x6ae3xb[__Oxba633[0x1e]]);var _0x6ae3xd=Cesium[__Oxba633[0x20]][__Oxba633[0x1f]](_0x6ae3xb[__Oxba633[0x21]]);var _0x6ae3xe=_0x6ae3xb[__Oxba633[0x22]];var _0x6ae3xf={accessUrl:_0x6ae3x7[__Oxba633[0x23]],altitude:_0x6ae3xe,checkednodes:1,delFlag:0,deptId:newVueInstance[__Oxba633[0x7]][__Oxba633[0x6]][__Oxba633[0x5]][__Oxba633[0x24]],deptId:_0x6ae3x7[__Oxba633[0x24]],imgId:_0x6ae3x7[__Oxba633[0x25]],imgName:_0x6ae3x7[__Oxba633[0x26]],lat:_0x6ae3xd,lon:_0x6ae3xc,name:_0x6ae3x7[__Oxba633[0x26]],originalName:_0x6ae3x7[__Oxba633[0x27]],savePath:_0x6ae3x7[__Oxba633[0x28]],uid:newVueInstance[__Oxba633[0x7]][__Oxba633[0x6]][__Oxba633[0x5]][__Oxba633[0x29]]};addPOIs(viewer,_0x6ae3xf,_0x6ae3x7)}},Cesium[__Oxba633[0x17]].LEFT_CLICK);newVueInstance[__Oxba633[0x7]][__Oxba633[0x6]][__Oxba633[0x5]][__Oxba633[0x4]][__Oxba633[0x18]](function(_0x6ae3x9){if(newVueInstance[__Oxba633[0x7]][__Oxba633[0x6]][__Oxba633[0x5]][__Oxba633[0x4]]&&newVueInstance[__Oxba633[0x7]][__Oxba633[0x6]][__Oxba633[0x5]][__Oxba633[0x4]][__Oxba633[0x2a]]!=0){newVueInstance[__Oxba633[0x7]][__Oxba633[0x6]][__Oxba633[0x5]][__Oxba633[0x4]]=newVueInstance[__Oxba633[0x7]][__Oxba633[0x6]][__Oxba633[0x5]][__Oxba633[0x4]]&&newVueInstance[__Oxba633[0x7]][__Oxba633[0x6]][__Oxba633[0x5]][__Oxba633[0x4]][__Oxba633[0x2b]]()};_0x6ae3x8[__Oxba633[0xd]][__Oxba633[0x15]]=__Oxba633[0x2c];_0x6ae3x8[__Oxba633[0x13]]=__Oxba633[0x2d]},Cesium[__Oxba633[0x17]].RIGHT_CLICK)};function addBillboards(viewer,_0x6ae3x11){var _0x6ae3x12=viewer[__Oxba633[0x3]][__Oxba633[0x2]]({id:__Oxba633[0x2e]+_0x6ae3x11[__Oxba633[0x25]],name:_0x6ae3x11[__Oxba633[0x2f]]+__Oxba633[0x30],show:_0x6ae3x11[__Oxba633[0x31]],position:Cesium[__Oxba633[0x36]][__Oxba633[0x35]](parseFloat(_0x6ae3x11[__Oxba633[0x32]]),parseFloat(_0x6ae3x11[__Oxba633[0x33]]),parseFloat(_0x6ae3x11[__Oxba633[0x34]])),billboard:{show:true,image:_0x6ae3x11[__Oxba633[0x37]],disableDepthTestDistance:Number[__Oxba633[0x38]]},label:{text:_0x6ae3x11[__Oxba633[0x2f]],font:__Oxba633[0x39],fillColor:Cesium[__Oxba633[0x3b]][__Oxba633[0x3a]],outlineWidth:2,style:Cesium[__Oxba633[0x3d]][__Oxba633[0x3c]],horizontalOrigin:Cesium[__Oxba633[0x3f]][__Oxba633[0x3e]],pixelOffset:new Cesium.Cartesian2(0.0,-32)}});_0x6ae3x12[__Oxba633[0x41]][__Oxba633[0x40]]=new Cesium.DistanceDisplayCondition(0.0,182068.0);_0x6ae3x12[__Oxba633[0x42]][__Oxba633[0x40]]=new Cesium.DistanceDisplayCondition(0.0,172068.0);var _0x6ae3x13={title:_0x6ae3x11[__Oxba633[0x2f]],lon:_0x6ae3x11[__Oxba633[0x32]],lat:_0x6ae3x11[__Oxba633[0x33]],altitude:_0x6ae3x11[__Oxba633[0x34]],checked:true,name:_0x6ae3x11[__Oxba633[0x2f]],checkedNodes:true,poiList:{accessUrl:_0x6ae3x11[__Oxba633[0x37]],imgName:_0x6ae3x11[__Oxba633[0x26]],poiId:_0x6ae3x11[__Oxba633[0x43]]},checkednodes:_0x6ae3x11[__Oxba633[0x44]],imgId:_0x6ae3x11[__Oxba633[0x43]],id:_0x6ae3x11[__Oxba633[0x25]],uid:newVueInstance[__Oxba633[0x7]][__Oxba633[0x6]][__Oxba633[0x5]][__Oxba633[0x29]]};newVueInstance[__Oxba633[0x7]][__Oxba633[0x6]][__Oxba633[0x5]][__Oxba633[0x46]][__Oxba633[0x45]](_0x6ae3x13);newVueInstance[__Oxba633[0x7]][__Oxba633[0x6]][__Oxba633[0x5]][__Oxba633[0x47]][__Oxba633[0x45]](_0x6ae3x13)}function addBillboardsList(viewer,_0x6ae3x11){var _0x6ae3x12=viewer[__Oxba633[0x3]][__Oxba633[0x2]]({id:__Oxba633[0x2e]+_0x6ae3x11[__Oxba633[0x25]],name:_0x6ae3x11[__Oxba633[0x2f]]+__Oxba633[0x30],show:_0x6ae3x11[__Oxba633[0x31]],position:Cesium[__Oxba633[0x36]][__Oxba633[0x35]](parseFloat(_0x6ae3x11[__Oxba633[0x32]]),parseFloat(_0x6ae3x11[__Oxba633[0x33]]),parseFloat(_0x6ae3x11[__Oxba633[0x34]])),billboard:{show:true,image:_0x6ae3x11[__Oxba633[0x37]],disableDepthTestDistance:Number[__Oxba633[0x38]]},label:{text:_0x6ae3x11[__Oxba633[0x2f]],font:__Oxba633[0x39],fillColor:Cesium[__Oxba633[0x3b]][__Oxba633[0x3a]],outlineWidth:2,style:Cesium[__Oxba633[0x3d]][__Oxba633[0x3c]],horizontalOrigin:Cesium[__Oxba633[0x3f]][__Oxba633[0x3e]],pixelOffset:new Cesium.Cartesian2(0.0,-32)}});_0x6ae3x12[__Oxba633[0x41]][__Oxba633[0x40]]=new Cesium.DistanceDisplayCondition(0.0,182068.0);_0x6ae3x12[__Oxba633[0x42]][__Oxba633[0x40]]=new Cesium.DistanceDisplayCondition(0.0,172068.0)}function addPOIs(viewer,_0x6ae3x11,_0x6ae3x7){newVueInstance[__Oxba633[0x52]][__Oxba633[0x51]](newVueInstance[__Oxba633[0x7]][__Oxba633[0x6]][__Oxba633[0x5]][__Oxba633[0x4f]]+__Oxba633[0x50],_0x6ae3x11,{})[__Oxba633[0x4e]]((_0x6ae3x17)=>{if(_0x6ae3x17[__Oxba633[0x4c]][__Oxba633[0x4b]]==200){var _0x6ae3xf={name:_0x6ae3x11[__Oxba633[0x2f]],checkednodes:_0x6ae3x11[__Oxba633[0x44]],checked:_0x6ae3x11[__Oxba633[0x44]]==1?true:false,lng:_0x6ae3x11[__Oxba633[0x4d]],lat:_0x6ae3x11[__Oxba633[0x33]],altitude:_0x6ae3x11[__Oxba633[0x34]],img:_0x6ae3x7[__Oxba633[0x23]],imgId:_0x6ae3x7[__Oxba633[0x25]],imgName:_0x6ae3x7[__Oxba633[0x26]],id:_0x6ae3x17[__Oxba633[0x4c]][__Oxba633[0x4c]],uid:newVueInstance[__Oxba633[0x7]][__Oxba633[0x6]][__Oxba633[0x5]][__Oxba633[0x29]]};addBillboards(viewer,_0x6ae3xf)}})[__Oxba633[0x4a]]((_0x6ae3x16)=>{console[__Oxba633[0x49]](__Oxba633[0x48]+_0x6ae3x16)})}function measureClearOpr(viewer){if(newVueInstance[__Oxba633[0x7]][__Oxba633[0x6]][__Oxba633[0x5]][__Oxba633[0x4]]&&newVueInstance[__Oxba633[0x7]][__Oxba633[0x6]][__Oxba633[0x5]][__Oxba633[0x4]][__Oxba633[0x2a]]!=0){newVueInstance[__Oxba633[0x7]][__Oxba633[0x6]][__Oxba633[0x5]][__Oxba633[0x4]]=newVueInstance[__Oxba633[0x7]][__Oxba633[0x6]][__Oxba633[0x5]][__Oxba633[0x4]]&&newVueInstance[__Oxba633[0x7]][__Oxba633[0x6]][__Oxba633[0x5]][__Oxba633[0x4]][__Oxba633[0x2b]]();newVueInstance[__Oxba633[0x7]][__Oxba633[0x6]][__Oxba633[0x5]][__Oxba633[0x4]]=null;viewer[__Oxba633[0x3]][__Oxba633[0x53]](floatingPoint_g)};if(newVueInstance[__Oxba633[0x7]][__Oxba633[0x6]][__Oxba633[0x5]][__Oxba633[0x54]]&&newVueInstance[__Oxba633[0x7]][__Oxba633[0x6]][__Oxba633[0x5]][__Oxba633[0x54]][__Oxba633[0x2a]]!=0){newVueInstance[__Oxba633[0x7]][__Oxba633[0x6]][__Oxba633[0x5]][__Oxba633[0x54]]=newVueInstance[__Oxba633[0x7]][__Oxba633[0x6]][__Oxba633[0x5]][__Oxba633[0x54]]&&newVueInstance[__Oxba633[0x7]][__Oxba633[0x6]][__Oxba633[0x5]][__Oxba633[0x54]][__Oxba633[0x2b]]();newVueInstance[__Oxba633[0x7]][__Oxba633[0x6]][__Oxba633[0x5]][__Oxba633[0x54]]=null}}var AddGLBModel=function(viewer,_0x6ae3x7){measureClearOpr(viewer);newVueInstance[__Oxba633[0x7]][__Oxba633[0x6]][__Oxba633[0x5]][__Oxba633[0x4]]=new Cesium.ScreenSpaceEventHandler(viewer[__Oxba633[0x9]][__Oxba633[0x8]]);var _0x6ae3x8=document[__Oxba633[0xb]](__Oxba633[0xa]);newVueInstance[__Oxba633[0x7]][__Oxba633[0x6]][__Oxba633[0x5]][__Oxba633[0x4]][__Oxba633[0x18]](function(_0x6ae3x9){_0x6ae3x8[__Oxba633[0xd]][__Oxba633[0xc]]=_0x6ae3x9[__Oxba633[0xf]][__Oxba633[0xe]]+10+__Oxba633[0x10];_0x6ae3x8[__Oxba633[0xd]][__Oxba633[0x11]]=_0x6ae3x9[__Oxba633[0xf]][__Oxba633[0x12]]+20+__Oxba633[0x10];_0x6ae3x8[__Oxba633[0x13]]=__Oxba633[0x14];_0x6ae3x8[__Oxba633[0xd]][__Oxba633[0x15]]=__Oxba633[0x16]},Cesium[__Oxba633[0x17]].MOUSE_MOVE);newVueInstance[__Oxba633[0x7]][__Oxba633[0x6]][__Oxba633[0x5]][__Oxba633[0x4]][__Oxba633[0x18]](function(_0x6ae3x9){var _0x6ae3xa=viewer[__Oxba633[0x9]][__Oxba633[0x1a]](_0x6ae3x9[__Oxba633[0x19]]);if(Cesium[__Oxba633[0x1b]](_0x6ae3xa)){var _0x6ae3xb=Cesium[__Oxba633[0x1d]][__Oxba633[0x1c]](_0x6ae3xa);var _0x6ae3xc=Cesium[__Oxba633[0x20]][__Oxba633[0x1f]](_0x6ae3xb[__Oxba633[0x1e]]);var _0x6ae3xd=Cesium[__Oxba633[0x20]][__Oxba633[0x1f]](_0x6ae3xb[__Oxba633[0x21]]);var _0x6ae3xe=_0x6ae3xb[__Oxba633[0x22]];var _0x6ae3xf={name:_0x6ae3x7[__Oxba633[0x55]],lon:_0x6ae3xc,lat:_0x6ae3xd,altitude:_0x6ae3xe,checkednodes:1,deptId:newVueInstance[__Oxba633[0x7]][__Oxba633[0x6]][__Oxba633[0x5]][__Oxba633[0x24]],uid:newVueInstance[__Oxba633[0x7]][__Oxba633[0x6]][__Oxba633[0x5]][__Oxba633[0x29]],heading:135,pitch:0,roll:0.0,glb:_0x6ae3x7[__Oxba633[0x56]],modelId:_0x6ae3x7[__Oxba633[0x25]],image:{delFlag:0,id:_0x6ae3x7[__Oxba633[0x57]][0x0][__Oxba633[0x25]],imageName:_0x6ae3x7[__Oxba633[0x57]][0x0][__Oxba633[0x58]]},title:_0x6ae3x7[__Oxba633[0x59]]};addModelGLB(viewer,_0x6ae3xf)}},Cesium[__Oxba633[0x17]].LEFT_CLICK);newVueInstance[__Oxba633[0x7]][__Oxba633[0x6]][__Oxba633[0x5]][__Oxba633[0x4]][__Oxba633[0x18]](function(_0x6ae3x9){if(newVueInstance[__Oxba633[0x7]][__Oxba633[0x6]][__Oxba633[0x5]][__Oxba633[0x4]]&&newVueInstance[__Oxba633[0x7]][__Oxba633[0x6]][__Oxba633[0x5]][__Oxba633[0x4]][__Oxba633[0x2a]]!=0){newVueInstance[__Oxba633[0x7]][__Oxba633[0x6]][__Oxba633[0x5]][__Oxba633[0x4]]=newVueInstance[__Oxba633[0x7]][__Oxba633[0x6]][__Oxba633[0x5]][__Oxba633[0x4]]&&newVueInstance[__Oxba633[0x7]][__Oxba633[0x6]][__Oxba633[0x5]][__Oxba633[0x4]][__Oxba633[0x2b]]()};_0x6ae3x8[__Oxba633[0xd]][__Oxba633[0x15]]=__Oxba633[0x2c];_0x6ae3x8[__Oxba633[0x13]]=__Oxba633[0x2d]},Cesium[__Oxba633[0x17]].RIGHT_CLICK)};function addGLBSingleModel(viewer,_0x6ae3x11){var _0x6ae3x1b=Cesium[__Oxba633[0x36]][__Oxba633[0x35]](parseFloat(_0x6ae3x11[__Oxba633[0x4d]]),parseFloat(_0x6ae3x11[__Oxba633[0x33]]),parseFloat(_0x6ae3x11[__Oxba633[0x22]]));var _0x6ae3x1c=Cesium[__Oxba633[0x20]][__Oxba633[0x5b]](parseFloat(_0x6ae3x11[__Oxba633[0x5a]]));var _0x6ae3x1d=parseFloat(_0x6ae3x11[__Oxba633[0x5c]]);var _0x6ae3x1e=parseFloat(_0x6ae3x11[__Oxba633[0x5d]]);var _0x6ae3x1f=new Cesium.HeadingPitchRoll(_0x6ae3x1c,_0x6ae3x1d,_0x6ae3x1e);var _0x6ae3x20=Cesium[__Oxba633[0x5f]][__Oxba633[0x5e]](_0x6ae3x1b,_0x6ae3x1f);var _0x6ae3x21=viewer[__Oxba633[0x3]][__Oxba633[0x2]]({id:__Oxba633[0x60]+_0x6ae3x11[__Oxba633[0x25]],name:_0x6ae3x11[__Oxba633[0x2f]]+__Oxba633[0x61],show:_0x6ae3x11[__Oxba633[0x31]],position:_0x6ae3x1b,orientation:_0x6ae3x20,model:{uri:_0x6ae3x11[__Oxba633[0x56]],scale:1,heightReference:Cesium[__Oxba633[0x63]][__Oxba633[0x62]],runAnimations:true},label:{text:_0x6ae3x11[__Oxba633[0x59]],font:__Oxba633[0x39],fillColor:Cesium[__Oxba633[0x3b]][__Oxba633[0x3a]],outlineWidth:2,style:Cesium[__Oxba633[0x3d]][__Oxba633[0x3c]],horizontalOrigin:Cesium[__Oxba633[0x3f]][__Oxba633[0x3e]],pixelOffset:new Cesium.Cartesian2(0.0,-100),verticalOrigin:Cesium[__Oxba633[0x65]][__Oxba633[0x64]]},description:_0x6ae3x11[__Oxba633[0x66]]});_0x6ae3x21[__Oxba633[0x67]][__Oxba633[0x40]]=new Cesium.DistanceDisplayCondition(0.0,182068.0);_0x6ae3x21[__Oxba633[0x42]][__Oxba633[0x40]]=new Cesium.DistanceDisplayCondition(0.0,172068.0);var _0x6ae3x13={title:_0x6ae3x11[__Oxba633[0x59]],lon:_0x6ae3x11[__Oxba633[0x4d]],lat:_0x6ae3x11[__Oxba633[0x33]],height:_0x6ae3x11[__Oxba633[0x22]],checked:true,name:_0x6ae3x11[__Oxba633[0x2f]],checkedNodes:true,heading:_0x6ae3x11[__Oxba633[0x5a]],pitch:_0x6ae3x11[__Oxba633[0x5c]],roll:_0x6ae3x11[__Oxba633[0x5d]],id:_0x6ae3x11[__Oxba633[0x25]],glb:_0x6ae3x11[__Oxba633[0x56]],uid:newVueInstance[__Oxba633[0x7]][__Oxba633[0x6]][__Oxba633[0x5]][__Oxba633[0x29]]};newVueInstance[__Oxba633[0x7]][__Oxba633[0x6]][__Oxba633[0x5]][__Oxba633[0x68]][__Oxba633[0x45]](_0x6ae3x13)}function addGLBSingleModelList(viewer,_0x6ae3x11){var _0x6ae3x1b=Cesium[__Oxba633[0x36]][__Oxba633[0x35]](parseFloat(_0x6ae3x11[__Oxba633[0x4d]]),parseFloat(_0x6ae3x11[__Oxba633[0x33]]),parseFloat(_0x6ae3x11[__Oxba633[0x22]])+2.0);var _0x6ae3x1c=Cesium[__Oxba633[0x20]][__Oxba633[0x5b]](parseFloat(_0x6ae3x11[__Oxba633[0x5a]]));var _0x6ae3x1d=parseFloat(_0x6ae3x11[__Oxba633[0x5c]]);var _0x6ae3x1e=parseFloat(_0x6ae3x11[__Oxba633[0x5d]]);var _0x6ae3x1f=new Cesium.HeadingPitchRoll(_0x6ae3x1c,_0x6ae3x1d,_0x6ae3x1e);var _0x6ae3x20=Cesium[__Oxba633[0x5f]][__Oxba633[0x5e]](_0x6ae3x1b,_0x6ae3x1f);var _0x6ae3x21=viewer[__Oxba633[0x3]][__Oxba633[0x2]]({id:__Oxba633[0x60]+_0x6ae3x11[__Oxba633[0x25]],name:_0x6ae3x11[__Oxba633[0x2f]]+__Oxba633[0x61],show:_0x6ae3x11[__Oxba633[0x31]],position:_0x6ae3x1b,orientation:_0x6ae3x20,model:{uri:_0x6ae3x11[__Oxba633[0x56]],scale:1},label:{text:_0x6ae3x11[__Oxba633[0x59]],font:__Oxba633[0x39],fillColor:Cesium[__Oxba633[0x3b]][__Oxba633[0x3a]],outlineWidth:2,style:Cesium[__Oxba633[0x3d]][__Oxba633[0x3c]],horizontalOrigin:Cesium[__Oxba633[0x3f]][__Oxba633[0x3e]],pixelOffset:new Cesium.Cartesian2(0.0,-100),verticalOrigin:Cesium[__Oxba633[0x65]][__Oxba633[0x64]]},description:_0x6ae3x11[__Oxba633[0x66]]});_0x6ae3x21[__Oxba633[0x67]][__Oxba633[0x40]]=new Cesium.DistanceDisplayCondition(0.0,182068.0);_0x6ae3x21[__Oxba633[0x42]][__Oxba633[0x40]]=new Cesium.DistanceDisplayCondition(0.0,172068.0)}function addModelGLB(viewer,_0x6ae3x11){newVueInstance[__Oxba633[0x52]][__Oxba633[0x51]](newVueInstance[__Oxba633[0x7]][__Oxba633[0x6]][__Oxba633[0x5]][__Oxba633[0x4f]]+__Oxba633[0x6b],_0x6ae3x11,{})[__Oxba633[0x4e]]((_0x6ae3x17)=>{if(_0x6ae3x17[__Oxba633[0x4c]][__Oxba633[0x4b]]==200){var _0x6ae3xf={title:_0x6ae3x11[__Oxba633[0x59]],name:_0x6ae3x11[__Oxba633[0x2f]],checked:true,lon:_0x6ae3x11[__Oxba633[0x4d]],lat:_0x6ae3x11[__Oxba633[0x33]],height:_0x6ae3x11[__Oxba633[0x34]],heading:_0x6ae3x11[__Oxba633[0x5a]],pitch:_0x6ae3x11[__Oxba633[0x5c]],roll:_0x6ae3x11[__Oxba633[0x5d]],glb:_0x6ae3x11[__Oxba633[0x56]],id:_0x6ae3x17[__Oxba633[0x4c]][__Oxba633[0x4c]]};addGLBSingleModel(viewer,_0x6ae3xf);newVueInstance[__Oxba633[0x7]][__Oxba633[0x6]][__Oxba633[0x5]][__Oxba633[0x6a]][__Oxba633[0x45]](_0x6ae3xf)}})[__Oxba633[0x4a]]((_0x6ae3x16)=>{console[__Oxba633[0x49]](__Oxba633[0x69]+_0x6ae3x16)})}function adjustModel(viewer,_0x6ae3x25,_0x6ae3x26,_0x6ae3x27,_0x6ae3x1c,_0x6ae3x1d,_0x6ae3x1e,_0x6ae3x28,_0x6ae3x29){var _0x6ae3x1b=Cesium[__Oxba633[0x36]][__Oxba633[0x35]](parseFloat(_0x6ae3x25),parseFloat(_0x6ae3x26),parseFloat(_0x6ae3x27));var _0x6ae3x1c=Cesium[__Oxba633[0x20]][__Oxba633[0x5b]](parseFloat(_0x6ae3x1c));var _0x6ae3x1d=parseFloat(_0x6ae3x1d);var _0x6ae3x1e=parseFloat(_0x6ae3x1e);var _0x6ae3x1f=new Cesium.HeadingPitchRoll(_0x6ae3x1c,_0x6ae3x1d,_0x6ae3x1e);var _0x6ae3x20=Cesium[__Oxba633[0x5f]][__Oxba633[0x5e]](_0x6ae3x1b,_0x6ae3x1f);if(viewer[__Oxba633[0x3]][__Oxba633[0x6c]](__Oxba633[0x60]+_0x6ae3x28)){viewer[__Oxba633[0x3]][__Oxba633[0x6c]](__Oxba633[0x60]+_0x6ae3x28)[__Oxba633[0x6d]]=_0x6ae3x20;viewer[__Oxba633[0x3]][__Oxba633[0x6c]](__Oxba633[0x60]+_0x6ae3x28)[__Oxba633[0x6f]][__Oxba633[0x6e]]=_0x6ae3x1b;viewer[__Oxba633[0x3]][__Oxba633[0x6c]](__Oxba633[0x60]+_0x6ae3x28)[__Oxba633[0x71]][__Oxba633[0x70]][__Oxba633[0x6e]]=_0x6ae3x29}}function EditEntities(viewer){var _0x6ae3x2b;measureClearOpr(viewer);newVueInstance[__Oxba633[0x7]][__Oxba633[0x6]][__Oxba633[0x5]][__Oxba633[0x4]]=new Cesium.ScreenSpaceEventHandler(viewer[__Oxba633[0x9]][__Oxba633[0x8]]);newVueInstance[__Oxba633[0x7]][__Oxba633[0x6]][__Oxba633[0x5]][__Oxba633[0x4]][__Oxba633[0x18]]((_0x6ae3x2c)=>{var _0x6ae3x2d=viewer[__Oxba633[0x9]][__Oxba633[0x72]](_0x6ae3x2c[__Oxba633[0x19]]);if(Cesium[__Oxba633[0x1b]](_0x6ae3x2d)){if(_0x6ae3x2d[__Oxba633[0x25]][__Oxba633[0x2f]][__Oxba633[0x73]](__Oxba633[0x61])!=-1){_0x6ae3x2b=_0x6ae3x2d[__Oxba633[0x25]]}};viewer[__Oxba633[0x9]][__Oxba633[0x75]][__Oxba633[0x74]]=false;viewer[__Oxba633[0x9]][__Oxba633[0x75]][__Oxba633[0x76]]=false},Cesium[__Oxba633[0x17]].LEFT_DOWN);newVueInstance[__Oxba633[0x7]][__Oxba633[0x6]][__Oxba633[0x5]][__Oxba633[0x4]][__Oxba633[0x18]]((_0x6ae3x2c)=>{if(_0x6ae3x2b){var _0x6ae3x2e=_0x6ae3x2c[__Oxba633[0x77]];var _0x6ae3x2f=viewer[__Oxba633[0x9]][__Oxba633[0x79]][__Oxba633[0x78]];var _0x6ae3xa=viewer[__Oxba633[0x7b]][__Oxba633[0x7a]](_0x6ae3x2e,_0x6ae3x2f);if(!_0x6ae3xa){return};var _0x6ae3xb=Cesium[__Oxba633[0x1d]][__Oxba633[0x1c]](_0x6ae3xa);var _0x6ae3x25=Cesium[__Oxba633[0x20]][__Oxba633[0x1f]](_0x6ae3xb[__Oxba633[0x1e]]);var _0x6ae3x26=Cesium[__Oxba633[0x20]][__Oxba633[0x1f]](_0x6ae3xb[__Oxba633[0x21]]);var _0x6ae3x27=_0x6ae3xb[__Oxba633[0x22]][__Oxba633[0x7c]](1);newVueInstance[__Oxba633[0x7]][__Oxba633[0x6]][__Oxba633[0x5]][__Oxba633[0x7d]]=_0x6ae3x25;newVueInstance[__Oxba633[0x7]][__Oxba633[0x6]][__Oxba633[0x5]][__Oxba633[0x7e]]=_0x6ae3x26;newVueInstance[__Oxba633[0x7]][__Oxba633[0x6]][__Oxba633[0x5]][__Oxba633[0x7f]]=_0x6ae3x27;_0x6ae3x2b[__Oxba633[0x19]]=new Cesium.CallbackProperty(()=>{return _0x6ae3xa},false)}},Cesium[__Oxba633[0x17]].MOUSE_MOVE);newVueInstance[__Oxba633[0x7]][__Oxba633[0x6]][__Oxba633[0x5]][__Oxba633[0x4]][__Oxba633[0x18]]((_0x6ae3x2c)=>{viewer[__Oxba633[0x9]][__Oxba633[0x75]][__Oxba633[0x74]]=true;viewer[__Oxba633[0x9]][__Oxba633[0x75]][__Oxba633[0x76]]=true;if(newVueInstance[__Oxba633[0x7]][__Oxba633[0x6]][__Oxba633[0x5]][__Oxba633[0x4]]!==null&&!newVueInstance[__Oxba633[0x7]][__Oxba633[0x6]][__Oxba633[0x5]][__Oxba633[0x4]][__Oxba633[0x80]]()){newVueInstance[__Oxba633[0x7]][__Oxba633[0x6]][__Oxba633[0x5]][__Oxba633[0x4]][__Oxba633[0x2b]]()}},Cesium[__Oxba633[0x17]].LEFT_UP)}function flyTo(viewer,_0x6ae3xf){var _0x6ae3x31=typeof(_0x6ae3xf[__Oxba633[0x81]])!==__Oxba633[0x82]?_0x6ae3xf[__Oxba633[0x81]]:2;viewer[__Oxba633[0x7b]][__Oxba633[0x83]]({destination:Cesium[__Oxba633[0x36]][__Oxba633[0x35]](_0x6ae3xf[__Oxba633[0x32]],_0x6ae3xf[__Oxba633[0x33]],_0x6ae3xf[__Oxba633[0x22]]),orientation:{heading:Cesium[__Oxba633[0x20]][__Oxba633[0x5b]](_0x6ae3xf[__Oxba633[0x5a]]),pitch:Cesium[__Oxba633[0x20]][__Oxba633[0x5b]](_0x6ae3xf[__Oxba633[0x5c]]),roll:Cesium[__Oxba633[0x20]][__Oxba633[0x5b]](_0x6ae3xf[__Oxba633[0x5d]])},duration:_0x6ae3x31})}function removeMap(viewer){viewer[__Oxba633[0x85]][__Oxba633[0x84]]()}function addGaoDeMapSatellite(viewer){viewer[__Oxba633[0x85]][__Oxba633[0x84]]();var _0x6ae3x34=new Cesium.UrlTemplateImageryProvider({url:__Oxba633[0x86],tilingScheme:new Cesium.WebMercatorTilingScheme(),subdomains:__Oxba633[0x87],maximumLevel:18});var _0x6ae3x35=new Cesium.UrlTemplateImageryProvider({url:__Oxba633[0x88],minimumLevel:3,maximumLevel:18});viewer[__Oxba633[0x85]][__Oxba633[0x89]](_0x6ae3x34);viewer[__Oxba633[0x85]][__Oxba633[0x89]](_0x6ae3x35)}function initEarth(_0x6ae3x37,_0x6ae3x38){Cesium[__Oxba633[0x8b]][__Oxba633[0x8a]]=__Oxba633[0x8c];viewer=new Cesium.Viewer(_0x6ae3x37[__Oxba633[0x8d]],{animation:false,baseLayerPicker:false,fullscreenButton:false,geocoder:false,homeButton:false,infoBox:false,selectionIndicator:false,sceneModePicker:false,timeline:false,navigationHelpButton:false,scene3DOnly:true,shouldAnimate:true,selectedImageryProviderViewModel:undefined,imageryProviderViewModels:Cesium[__Oxba633[0x8e]](),selectedTerrainProviderViewModel:undefined,terrainProviderViewModels:Cesium[__Oxba633[0x8f]](),fullscreenElement:document[__Oxba633[0x90]],useDefaultRenderLoop:true,targetFrameRate:undefined,showRenderLoopErrors:false,automaticallyTrackDataSourceClocks:true,contextOptions:undefined,sceneMode:Cesium[__Oxba633[0x92]][__Oxba633[0x91]],mapProjection:new Cesium.WebMercatorProjection(),dataSources:new Cesium.DataSourceCollection(),skyAtmosphere:false});viewer[__Oxba633[0x94]][__Oxba633[0x93]][__Oxba633[0xd]][__Oxba633[0x15]]=__Oxba633[0x2c];viewer[__Oxba633[0x9]][__Oxba633[0x79]][__Oxba633[0x95]]=true;viewer[__Oxba633[0x85]][__Oxba633[0x53]](viewer[__Oxba633[0x85]][__Oxba633[0x96]](0));viewer[__Oxba633[0x99]][__Oxba633[0x98]][__Oxba633[0x97]](Cesium[__Oxba633[0x17]].LEFT_DOUBLE_CLICK);if(_0x6ae3x37[__Oxba633[0x9a]]){addGaoDeMapSatellite(viewer)}else{removeMap(viewer)};return viewer}function depthTestAT(viewer,_0x6ae3x3a){if(_0x6ae3x3a){viewer[__Oxba633[0x9]][__Oxba633[0x79]][__Oxba633[0x95]]=true}else{viewer[__Oxba633[0x9]][__Oxba633[0x79]][__Oxba633[0x95]]=false}}POI[__Oxba633[0x9b]]=initEarth;POI[__Oxba633[0x9c]]=depthTestAT;POI[__Oxba633[0x9d]]=addGaoDeMapSatellite;POI[__Oxba633[0x9e]]=removeMap;POI[__Oxba633[0x9f]]=measureEntitiesInit;POI[__Oxba633[0xa0]]=measureClearOpr;POI[__Oxba633[0xa1]]=AddPOI;POI[__Oxba633[0xa2]]=AddGLBModel;POI[__Oxba633[0xa3]]=addGLBSingleModel;POI[__Oxba633[0xa4]]=addGLBSingleModelList;POI[__Oxba633[0xa5]]=adjustModel;POI[__Oxba633[0xa6]]=EditEntities;POI[__Oxba633[0xa7]]=addBillboardsList;POI[__Oxba633[0x83]]=flyTo;return POI})}());