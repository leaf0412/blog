(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{471:function(a,t,s){"use strict";s.r(t);var e=s(4),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("p",[a._v("平时工作一些常用的函数的收集和整理")]),a._v(" "),s("h2",{attrs:{id:"正则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#正则"}},[a._v("#")]),a._v(" 正则")]),a._v(" "),s("h3",{attrs:{id:"匹配正整数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#匹配正整数"}},[a._v("#")]),a._v(" 匹配正整数")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("let isPositiveNum = val => {\n  return /^[1-9]\\d*$/.test(val)\n}\nconsole.log(isPositiveNum(12)) // true\n")])])]),s("h3",{attrs:{id:"匹配负整数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#匹配负整数"}},[a._v("#")]),a._v(" 匹配负整数")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("let isNegativeNum = val => {\n  return /^-[1-9]\\d*$/.test(val)\n}\nconsole.log(isNegativeNum(-12)) // true\n")])])]),s("h3",{attrs:{id:"匹配整数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#匹配整数"}},[a._v("#")]),a._v(" 匹配整数")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("let isInteger = val => {\n  return /^(-|\\+)?\\d+$/.test(val)\n}\nconsole.log(isInteger(-12)) // true\nconsole.log(isInteger(12)) // true\n")])])]),s("h3",{attrs:{id:"匹配非负浮点数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#匹配非负浮点数"}},[a._v("#")]),a._v(" 匹配非负浮点数")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("let isNotNegativeFloatNum = val => {\n  return /^\\d+(\\.\\d+)?$/.test(val)\n}\nconsole.log(isNotNegativeFloatNum(-12)) // false\nconsole.log(isNotNegativeFloatNum(12.2)) // true\n")])])]),s("h3",{attrs:{id:"匹配由26个英文字母不分大小写组成的字符串"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#匹配由26个英文字母不分大小写组成的字符串"}},[a._v("#")]),a._v(" 匹配由26个英文字母不分大小写组成的字符串")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("let isAZaz = val => {\n  return /^[A-Za-z]+$/.test(val)\n}\nconsole.log(isAZaz('123abac')) // false\nconsole.log(isAZaz('abAB')) // true\n")])])]),s("h3",{attrs:{id:"匹配由26个英文字母大写组成的字符串"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#匹配由26个英文字母大写组成的字符串"}},[a._v("#")]),a._v(" 匹配由26个英文字母大写组成的字符串")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("let isAZ = val => {\n  return /^[A-Z]+$/.test(val)\n}\nconsole.log(isAZ('aAbac')) // false\nconsole.log(isAZ('ABC')) // true\n")])])]),s("h3",{attrs:{id:"匹配由26个英文字母小写组成的字符串"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#匹配由26个英文字母小写组成的字符串"}},[a._v("#")]),a._v(" 匹配由26个英文字母小写组成的字符串")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("let isaz = val => {\n  return /^[a-z]+$/.test(val)\n}\nconsole.log(isaz('Aabac')) // false\nconsole.log(isaz('abac')) // true\n")])])]),s("h3",{attrs:{id:"匹配电子邮件地址"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#匹配电子邮件地址"}},[a._v("#")]),a._v(" 匹配电子邮件地址")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("let isEmailAddress = val => {\n    return /^[\\w-]+(\\.[\\w-]+)*@[\\w-]+(\\.[\\w-]+)+$/.test(val) || /w+([-+.]w+)*@w+([-.]w+)*.w+([-.]w+)*/.test(val);\n};\nconsole.log(isEmailAddress('321321312@qq.com')) //true\n")])])]),s("h2",{attrs:{id:"数组"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数组"}},[a._v("#")]),a._v(" 数组")]),a._v(" "),s("h3",{attrs:{id:"返回数组中的最小值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#返回数组中的最小值"}},[a._v("#")]),a._v(" 返回数组中的最小值")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("// 将Math.min()与扩展运算符 (...) 结合使用以获取数组中的最小值。\nlet arrayMin = arr => Math.min(...arr)\nlet arr = [1, 2, 3, 4, 5]\nconsole.log(arrayMin(arr)) // 1\n")])])]),s("h3",{attrs:{id:"返回数组中的最大值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#返回数组中的最大值"}},[a._v("#")]),a._v(" 返回数组中的最大值")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("// 将Math.max()与扩展运算符 (...) 结合使用以获取数组中的最小值。\nlet arrayMax = arr => Math.max(...arr)\nlet arr = [1, 2, 3, 4, 5]\nconsole.log(arrayMax(arr)) // 5\n")])])]),s("h3",{attrs:{id:"将数组块划分为指定大小的较小数组"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#将数组块划分为指定大小的较小数组"}},[a._v("#")]),a._v(" 将数组块划分为指定大小的较小数组")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("let chunk = (arr, size) => Array.from({\n    length: Math.ceil(arr.length / size)\n}, (v, i) => arr.slice(i * size, i * size + size))\nlet arr = [1, 2, 3, 4, 5, 6, 7]\nconsole.log(chunk(arr, 3)) // [[1, 2, 3], [4, 5, 6], [7]]\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);