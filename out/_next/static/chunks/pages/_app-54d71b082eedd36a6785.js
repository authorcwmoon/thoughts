_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[13],{0:function(n,e,t){t("GcxT"),n.exports=t("nOHt")},"1TCz":function(n,e,t){"use strict";t.r(e),function(n){var o=t("h4VS"),r=t("q1tI"),a=t.n(r),i=t("7ljp"),c=t("qKvR"),l=t("9ixD"),s=t("mf32"),u=t("b9RQ"),d=t("CjxU"),p=t("nOHt"),b=t.n(p),f=t("8Kt/"),h=t.n(f),g=t("hyUy"),m=t("NVT0"),y=t("nxX7"),v=t("PpS8"),w=t("ywjr"),k=a.a.createElement;function O(){var n=Object(o.a)(["\n          ",";\n\n          * {\n            box-sizing: border-box;\n            margin: 0;\n            padding: 0;\n        }\n    \n        body, html {\n            font-family: ",";\n            height: 100%;\n        }\n\n          ::selection {\n            background-color: #47a3f3;\n            color: #fefefe;\n          }\n\n          html {\n            min-width: 360px;\n            scroll-behavior: smooth;\n          }\n\n          #__next {\n            display: flex;\n            flex-direction: column;\n            min-height: 100vh;\n            background: ",";\n          }\n        "]);return O=function(){return n},n}var j=function(n){var e=n.children,t=Object(s.b)().colorMode;return k(a.a.Fragment,null,k(u.a,null),k(c.a,{styles:Object(c.c)(O(),"light"===t?y.b:y.a,(function(n){return n.theme.fonts.main}),"light"===t?"white":"#171923")}),e)};b.a.events.on("routeChangeComplete",(function(){g.c()}));e.default=function(e){var t=e.Component,o=e.pageProps;return Object(r.useEffect)((function(){g.a(n.env.NEXT_PUBLIC_FATHOM_SITE_ID,{includedDomains:["leerob.io"]})}),[]),k(d.a,{theme:m.a},k(i.a,{components:v.b},k(s.a,{value:"light"},k(j,null,k(h.a,null,k("meta",{content:"IE=edge",httpEquiv:"X-UA-Compatible"}),k("meta",{content:"width=device-width, initial-scale=1",name:"viewport"}),k("meta",{content:"#ffffff",name:"theme-color"}),k("meta",{content:"#ffffff",name:"msapplication-TileColor"}),k("meta",{content:"/static/favicons/browserconfig.xml",name:"msapplication-config"}),k("meta",{content:"14d2e73487fa6c71",name:"yandex-verification"}),k("meta",{content:"eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw",name:"google-site-verification"})),k(l.b,w.a),k(t,o)))))}}.call(this,t("8oxB"))},"493y":function(n,e,t){"use strict";t.d(e,"b",(function(){return b}));var o=t("lSNA"),r=t.n(o),a=t("8hg0"),i=t("CjxU"),c=t("mf32");function l(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function s(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?l(t,!0).forEach((function(e){r()(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):l(t).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var u=function(n){var e=n.color,t=n.theme.colors,o=t[e]&&t[e][200];return{light:{bg:e+".100"},dark:{bg:Object(a.b)(o,"lowest")}}},d=function(n){switch(n.variant){case"solid":return function(n){var e=n.color;return{light:{bg:e+".500",color:"white"},dark:{bg:e+".200",color:"gray.900"}}}(n);case"subtle":return u(n);case"top-accent":return function(n){var e=n.color;return{light:s({pt:2},u(n).light,{borderTop:"4px",borderColor:e+".500"}),dark:s({pt:2},u(n).dark,{borderTop:"4px",borderColor:e+".200"})}}(n);case"left-accent":return function(n){var e=n.color;return{light:s({pl:3},u(n).light,{borderLeft:"4px",borderColor:e+".500"}),dark:s({pl:3},u(n).dark,{borderLeft:"4px",borderColor:e+".200"})}}(n);default:return{}}},p={display:"flex",alignItems:"center",position:"relative",overflow:"hidden",pl:4,pr:4,pt:3,pb:3},b=function(n){var e=n.variant,t=n.color,o=Object(c.b)().colorMode;if(["left-accent","top-accent","subtle"].includes(e))return{light:{color:t+".500"},dark:{color:t+".200"}}[o]};e.a=function(n){var e=Object(c.b)().colorMode,t=s({},n,{theme:Object(i.b)()});return s({},p,{},d(t)[e])}},"7ljp":function(n,e,t){"use strict";t.d(e,"a",(function(){return d})),t.d(e,"b",(function(){return f}));var o=t("q1tI"),r=t.n(o);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function c(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,o,r=function(n,e){if(null==n)return{};var t,o,r={},a=Object.keys(n);for(o=0;o<a.length;o++)t=a[o],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(o=0;o<a.length;o++)t=a[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var s=r.a.createContext({}),u=function(n){var e=r.a.useContext(s),t=e;return n&&(t="function"===typeof n?n(e):c({},e,{},n)),t},d=function(n){var e=u(n.components);return r.a.createElement(s.Provider,{value:e},n.children)},p={inlineCode:"code",wrapper:function(n){var e=n.children;return r.a.createElement(r.a.Fragment,{},e)}},b=Object(o.forwardRef)((function(n,e){var t=n.components,o=n.mdxType,a=n.originalType,i=n.parentName,s=l(n,["components","mdxType","originalType","parentName"]),d=u(t),b=o,f=d["".concat(i,".").concat(b)]||d[b]||p[b]||a;return t?r.a.createElement(f,c({ref:e},s,{components:t})):r.a.createElement(f,c({ref:e},s))}));function f(n,e){var t=arguments,o=e&&e.mdxType;if("string"===typeof n||o){var a=t.length,i=new Array(a);i[0]=b;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=n,c.mdxType="string"===typeof n?n:o,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},"8oxB":function(n,e){var t,o,r=n.exports={};function a(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function c(n){if(t===setTimeout)return setTimeout(n,0);if((t===a||!t)&&setTimeout)return t=setTimeout,setTimeout(n,0);try{return t(n,0)}catch(e){try{return t.call(null,n,0)}catch(e){return t.call(this,n,0)}}}!function(){try{t="function"===typeof setTimeout?setTimeout:a}catch(n){t=a}try{o="function"===typeof clearTimeout?clearTimeout:i}catch(n){o=i}}();var l,s=[],u=!1,d=-1;function p(){u&&l&&(u=!1,l.length?s=l.concat(s):d=-1,s.length&&b())}function b(){if(!u){var n=c(p);u=!0;for(var e=s.length;e;){for(l=s,s=[];++d<e;)l&&l[d].run();d=-1,e=s.length}l=null,u=!1,function(n){if(o===clearTimeout)return clearTimeout(n);if((o===i||!o)&&clearTimeout)return o=clearTimeout,clearTimeout(n);try{o(n)}catch(e){try{return o.call(null,n)}catch(e){return o.call(this,n)}}}(n)}}function f(n,e){this.fun=n,this.array=e}function h(){}r.nextTick=function(n){var e=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)e[t-1]=arguments[t];s.push(new f(n,e)),1!==s.length||u||c(b)},f.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=h,r.addListener=h,r.once=h,r.off=h,r.removeListener=h,r.removeAllListeners=h,r.emit=h,r.prependListener=h,r.prependOnceListener=h,r.listeners=function(n){return[]},r.binding=function(n){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(n){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},GcxT:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return t("1TCz")}])},KEox:function(n,e,t){"use strict";var o=t("pVnL"),r=t.n(o),a=t("8OQS"),i=t.n(a),c=t("qKvR"),l=t("BMxC"),s=t("q1tI"),u=Object(s.forwardRef)((function(n,e){var t=n.orientation,o=i()(n,["orientation"]),a="vertical"===t?{borderLeft:"0.0625rem solid",height:"auto",mx:2}:{borderBottom:"0.0625rem solid",width:"auto",my:2};return Object(c.d)(l.a,r()({ref:e,as:"hr","aria-orientation":t,border:"0",opacity:"0.6"},a,{borderColor:"inherit"},o))}));e.a=u},LqLE:function(n,e,t){"use strict";t.d(e,"e",(function(){return p})),t.d(e,"a",(function(){return f})),t.d(e,"d",(function(){return h})),t.d(e,"b",(function(){return g})),t.d(e,"c",(function(){return m}));var o=t("pVnL"),r=t.n(o),a=t("8OQS"),i=t.n(a),c=t("qKvR"),l=t("q1tI"),s=t("BMxC"),u=t("w0db"),d=t("493y"),p={info:{icon:"info",color:"blue"},warning:{icon:"warning-2",color:"orange"},success:{icon:"check-circle",color:"green"},error:{icon:"warning",color:"red"}},b=Object(l.createContext)(),f=function(n){var e=n.status,t=void 0===e?"info":e,o=n.variant,a=void 0===o?"subtle":o,l=i()(n,["status","variant"]),u=Object(d.a)({variant:a,color:p[t]&&p[t].color}),f={status:t,variant:a};return Object(c.d)(b.Provider,{value:f},Object(c.d)(s.a,r()({role:"alert"},u,l)))},h=function(n){return Object(c.d)(s.a,r()({fontWeight:"bold",lineHeight:"normal"},n))},g=function(n){return Object(c.d)(s.a,n)},m=function(n){var e=function(){var n=Object(l.useContext)(b);if(void 0===n)throw new Error("useAlertContext must be used within a AlertContextProvider");return n}(),t=e.status,o=e.variant,a=Object(d.b)({variant:o,color:p[t]&&p[t].color});return Object(c.d)(u.a,r()({mr:3,size:5,name:p[t]&&p[t].icon},a,n))}},NVT0:function(n,e,t){"use strict";var o=t("rePB"),r=t("q1tI"),a=t.n(r),i=t("uDoD"),c=a.a.createElement;function l(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function s(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?l(Object(t),!0).forEach((function(e){Object(o.a)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var u=s(s({},i.a),{},{fonts:s(s({},i.a.fonts),{},{body:"Libre Baskerville, serif",Heading:"Libre Baskerville, serif",mono:"Libre Baskerville, serif",text:"Libre Baskerville, serif",main:"Libre Baskerville, serif"}),fontWeights:{normal:600,medium:700,bold:800},icons:s(s({},i.a.icons),{},{twitter:{path:c("g",{fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c("path",{d:"M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"}))},github:{path:c("g",{fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c("path",{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"}))},linkedin:{path:c("g",{fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c("path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}),c("rect",{x:"2",y:"9",width:"4",height:"12"}),c("circle",{cx:"4",cy:"4",r:"2"}))},youtube:{path:c("g",{fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c("path",{d:"M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z"}),c("path",{d:"M9.75 15.02l5.75-3.27-5.75-3.27v6.54z"}))},mail:{path:c("g",{fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),c("polyline",{points:"22,6 12,13 2,6"}))},jamstackfns:{path:c("path",{fill:"currentColor",fillRule:"evenodd",d:"M0 161V50.442C.921 36.392 11.61 6.633 46.99 0h127.844c1.382 15.662-5.252 49.475-42.845 59.425-1.843 15.893-14.926 48.369-52.52 51.133C74.403 127.372 51.415 161 0 161zM46.99 10.365c-25.982 5.528-34.782 29.021-35.933 40.077h116.095c27.642-7.186 36.395-29.712 37.316-40.077H46.991zm-35.933 89.828V59.425h109.875c-.921 11.977-10.503 37.037-41.462 41.459l-68.413-.691zm0 10.365v40.077c35.381-3.869 52.058-28.33 55.974-40.077H11.057z",clipRule:"evenodd"}),viewBox:"0 0 175 161"},nextjs:{path:c("g",{fill:"currentColor"},c("path",{d:"m478.5.6c-2.2.2-9.2.9-15.5 1.4-145.3 13.1-281.4 91.5-367.6 212-48 67-78.7 143-90.3 223.5-4.1 28.1-4.6 36.4-4.6 74.5s.5 46.4 4.6 74.5c27.8 192.1 164.5 353.5 349.9 413.3 33.2 10.7 68.2 18 108 22.4 15.5 1.7 82.5 1.7 98 0 68.7-7.6 126.9-24.6 184.3-53.9 8.8-4.5 10.5-5.7 9.3-6.7-.8-.6-38.3-50.9-83.3-111.7l-81.8-110.5-102.5-151.7c-56.4-83.4-102.8-151.6-103.2-151.6-.4-.1-.8 67.3-1 149.6-.3 144.1-.4 149.9-2.2 153.3-2.6 4.9-4.6 6.9-8.8 9.1-3.2 1.6-6 1.9-21.1 1.9h-17.3l-4.6-2.9c-3-1.9-5.2-4.4-6.7-7.3l-2.1-4.5.2-200.5.3-200.6 3.1-3.9c1.6-2.1 5-4.8 7.4-6.1 4.1-2 5.7-2.2 23-2.2 20.4 0 23.8.8 29.1 6.6 1.5 1.6 57 85.2 123.4 185.9s157.2 238.2 201.8 305.7l81 122.7 4.1-2.7c36.3-23.6 74.7-57.2 105.1-92.2 64.7-74.3 106.4-164.9 120.4-261.5 4.1-28.1 4.6-36.4 4.6-74.5s-.5-46.4-4.6-74.5c-27.8-192.1-164.5-353.5-349.9-413.3-32.7-10.6-67.5-17.9-106.5-22.3-9.6-1-75.7-2.1-84-1.3zm209.4 309.4c4.8 2.4 8.7 7 10.1 11.8.8 2.6 1 58.2.8 183.5l-.3 179.8-31.7-48.6-31.8-48.6v-130.7c0-84.5.4-132 1-134.3 1.6-5.6 5.1-10 9.9-12.6 4.1-2.1 5.6-2.3 21.3-2.3 14.8 0 17.4.2 20.7 2z"}),c("path",{d:"m784.3 945.1c-3.5 2.2-4.6 3.7-1.5 2 2.2-1.3 5.8-4 5.2-4.1-.3 0-2 1-3.7 2.1zm-6.9 4.5c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-5 3c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-5 3c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-7.6 4c-3.8 2-3.6 2.8.2.9 1.7-.9 3-1.8 3-2 0-.7-.1-.6-3.2 1.1z"})),viewBox:".5 -.2 1023 1024.1"},react2025:{path:c("g",{fill:"currentColor"},c("path",{d:"M0 296V8.5H231.5V89L170.5 150L258.5 238H174L86 150L170.5 65.5H58V238L0 296Z"})),viewBox:"0 0 267 305"},spotify:{path:c("path",{fill:"#1ED760",d:"M83.996.277C37.747.277.253 37.77.253 84.019c0 46.251 37.494 83.741 83.743 83.741 46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.738-83.745-83.738l.001-.004zm38.404 120.78a5.217 5.217 0 01-7.18 1.73c-19.662-12.01-44.414-14.73-73.564-8.07a5.222 5.222 0 01-6.249-3.93 5.213 5.213 0 013.926-6.25c31.9-7.291 59.263-4.15 81.337 9.34 2.46 1.51 3.24 4.72 1.73 7.18zm10.25-22.805c-1.89 3.075-5.91 4.045-8.98 2.155-22.51-13.839-56.823-17.846-83.448-9.764-3.453 1.043-7.1-.903-8.148-4.35a6.538 6.538 0 014.354-8.143c30.413-9.228 68.222-4.758 94.072 11.127 3.07 1.89 4.04 5.91 2.15 8.976v-.001zm.88-23.744c-26.99-16.031-71.52-17.505-97.289-9.684-4.138 1.255-8.514-1.081-9.768-5.219a7.835 7.835 0 015.221-9.771c29.581-8.98 78.756-7.245 109.83 11.202a7.823 7.823 0 012.74 10.733c-2.2 3.722-7.02 4.949-10.73 2.739z"}),viewBox:"0 0 168 168"},check:{path:c("g",{fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c("path",{d:"M22 11.08V12a10 10 0 11-5.93-9.14"}),c("path",{d:"M22 4L12 14.01l-3-3"}))},x:{path:c("g",{fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c("circle",{cx:"12",cy:"12",r:"10"}),c("path",{d:"M15 9l-6 6M9 9l6 6"}))}})});e.a=u},PpS8:function(n,e,t){"use strict";t.d(e,"a",(function(){return D}));var o=t("wx14"),r=t("q1tI"),a=t.n(r),i=t("BMxC"),c=t("mf32"),l=t("pboS"),s=t("pVnL"),u=t.n(s),d=t("8OQS"),p=t.n(d),b=t("qKvR"),f=t("LqLE"),h=t("493y"),g=function(n){var e=n.status,t=void 0===e?"info":e,o=n.variant,r=void 0===o?"subtle":o,a=p()(n,["status","variant"]),c=Object(h.a)({variant:r,color:f.e[t]&&f.e[t].color});return Object(b.d)(i.a,u()({},c,a))},m=t("qWyU"),y=t("+Cyc"),v=t("KEox"),w=t("lSNA"),k=t.n(w),O=t("8hg0"),j=t("CjxU");function x(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}var C=function(n){var e=n.variant,t=n.colorMode;switch(e){case"solid":return function(n){var e=n.theme.colors,t=n.color,o=e[t]&&e[t][500],r=Object(O.a)(o,.6);return{light:{bg:Object(O.d)(t,500),color:"white"},dark:{bg:r,color:"whiteAlpha.800"}}}(n)[t];case"subtle":return function(n){var e=n.theme.colors,t=n.color,o=e[t]&&e[t][200],r=Object(O.c)(o)[300];return{light:{bg:Object(O.d)(t,100),color:Object(O.d)(t,800)},dark:{bg:r,color:Object(O.d)(t,200)}}}(n)[t];case"outline":return function(n){var e=n.theme.colors,t=n.color,o=e[t]&&e[t][200],r=Object(O.a)(o,.8);return{light:{boxShadow:"inset 0 0 0px 1px "+(e[t]&&e[t][500]),color:Object(O.d)(t,500)},dark:{boxShadow:"inset 0 0 0px 1px "+r,color:r}}}(n)[t];default:return{}}},z=function(n){var e=function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?x(t,!0).forEach((function(e){k()(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):x(t).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}({},n,{theme:Object(j.b)(),colorMode:Object(c.b)().colorMode});return C(e)},P=t("D7Da"),E=function(n){var e=n.variantColor,t=void 0===e?"gray":e,o=p()(n,["variantColor"]);Object(P.b)("Code",t);var r=z({variant:"subtle",color:t});return Object(b.d)(i.a,u()({as:"code",display:"inline-block",fontFamily:"mono",fontSize:"sm",px:"0.2em",rounded:"sm"},r,o))},T=function(n){var e=Object(c.b)().colorMode;return Object(b.d)(i.a,u()({as:"kbd",bg:{light:"gray.100",dark:"whiteAlpha.50"}[e],rounded:"md",border:"1px",borderColor:"inherit",borderBottomWidth:"3px",fontSize:"0.8em",fontWeight:"bold",lineHeight:"normal",px:"0.4em",whiteSpace:"nowrap"},n))},L=t("sK1y"),_=t("YFqc"),S=t.n(_),D=(a.a.createElement,function(n){var e=Object(c.b)().colorMode,t={light:"hsl(208, 99%, 44%)",dark:"hsl(208, 95%, 68%)"},r=n.href;return r&&(r.startsWith("/")||r.startsWith("#"))?Object(b.d)(S.a,{href:r,passHref:!0},Object(b.d)(l.a,Object(o.a)({color:t[e]},n))):Object(b.d)(l.a,Object(o.a)({color:t[e],isExternal:!0},n))}),A=function(n){return Object(b.d)(m.a,Object(o.a)({css:{scrollMarginTop:"100px",scrollSnapMargin:"100px","&[id]":{pointerEvents:"none"},"&[id]:before":{display:"block",height:" 6rem",marginTop:"-6rem",visibility:"hidden",content:'""'},"&[id]:hover a":{opacity:1}}},n,{mb:"1em",mt:"2em"}),Object(b.d)(i.a,{pointerEvents:"auto"},n.children,n.id&&Object(b.d)(y.a,{"aria-label":"anchor",as:"a",color:"blue.500",fontWeight:"normal",outline:"none",_focus:{opacity:1,boxShadow:"outline"},opacity:"0",ml:"0.375rem",href:"#".concat(n.id)},"#")))},M={h1:function(n){return Object(b.d)(m.a,Object(o.a)({as:"h1",size:"xl",my:4},n))},h2:function(n){return Object(b.d)(A,Object(o.a)({as:"h2",fontWeight:"bold",size:"lg"},n))},h3:function(n){return Object(b.d)(A,Object(o.a)({as:"h3",size:"md",fontWeight:"bold"},n))},inlineCode:function(n){return Object(b.d)(E,Object(o.a)({variantColor:"yellow",fontSize:"0.84em"},n))},kbd:T,br:function(n){return Object(b.d)(i.a,Object(o.a)({height:"24px"},n))},hr:function(){var n=Object(c.b)().colorMode;return Object(b.d)(v.a,{borderColor:{light:"gray.200",dark:"gray.600"}[n],my:4,w:"100%"})},table:function(n){return Object(b.d)(i.a,{overflowX:"scroll",w:"full"},Object(b.d)(i.a,Object(o.a)({as:"table",textAlign:"left",mt:"32px",w:"full"},n)))},th:function(n){var e=Object(c.b)().colorMode;return Object(b.d)(i.a,Object(o.a)({as:"th",bg:{light:"gray.50",dark:"whiteAlpha.100"}[e],fontWeight:"semibold",p:2,fontSize:"sm"},n))},td:function(n){return Object(b.d)(i.a,Object(o.a)({as:"td",p:2,borderTopWidth:"1px",borderColor:"inherit",fontSize:"sm",whiteSpace:"normal"},n))},a:D,p:function(n){return Object(b.d)(L.a,Object(o.a)({as:"p",mt:4,lineHeight:"tall"},n))},ul:function(n){return Object(b.d)(i.a,Object(o.a)({as:"ul",pt:2,pl:4,ml:2},n))},ol:function(n){return Object(b.d)(i.a,Object(o.a)({as:"ol",pt:2,pl:4,ml:2},n))},li:function(n){return Object(b.d)(i.a,Object(o.a)({as:"li",pb:1},n))},blockquote:function(n){var e=Object(c.b)().colorMode;return Object(b.d)(g,Object(o.a)({mt:4,w:"98%",bg:{light:"blue.50",dark:"blue.900"}[e],variant:"left-accent",status:"info",css:{"> *:first-of-type":{marginTop:0,marginLeft:8}}},n))}};e.b=M},b9RQ:function(n,e,t){"use strict";var o=t("cOp2"),r=t.n(o),a=t("qKvR"),i=t("mf32");function c(){var n=r()(['\n  html {\n    line-height: 1.15;\n    -webkit-text-size-adjust: 100%;\n  }\n\n  body {\n    margin: 0;\n  }\n\n  main {\n    display: block;\n  }\n\n  h1 {\n    font-size: 2em;\n    margin: 0.67em 0;\n  }\n\n  hr {\n    box-sizing: content-box;\n    height: 0;\n    overflow: visible;\n  }\n\n  pre {\n    font-family: monospace, monospace;\n    font-size: 1em;\n  }\n\n  a {\n    background-color: transparent;\n  }\n\n  abbr[title] {\n    border-bottom: none;\n    text-decoration: underline;\n    -webkit-text-decoration: underline dotted;\n    text-decoration: underline dotted;\n  }\n\n  b,\n  strong {\n    font-weight: bolder;\n  }\n\n  code,\n  kbd,\n  samp {\n    font-family: monospace, monospace;\n    font-size: 1em;\n  }\n\n  small {\n    font-size: 80%;\n  }\n\n  sub,\n  sup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline;\n  }\n\n  sub {\n    bottom: -0.25em;\n  }\n\n  sup {\n    top: -0.5em;\n  }\n\n  img {\n    border-style: none;\n  }\n\n  button,\n  input,\n  optgroup,\n  select,\n  textarea {\n    font-family: inherit;\n    font-size: 100%;\n    line-height: 1.15;\n    margin: 0;\n  }\n\n  button,\n  input {\n    overflow: visible;\n  }\n\n  button,\n  select {\n    text-transform: none;\n  }\n\n  button::-moz-focus-inner,\n  [type="button"]::-moz-focus-inner,\n  [type="reset"]::-moz-focus-inner,\n  [type="submit"]::-moz-focus-inner {\n    border-style: none;\n    padding: 0;\n  }\n\n  fieldset {\n    padding: 0.35em 0.75em 0.625em;\n  }\n\n  legend {\n    box-sizing: border-box;\n    color: inherit;\n    display: table;\n    max-width: 100%;\n    padding: 0;\n    white-space: normal;\n  }\n\n  progress {\n    vertical-align: baseline;\n  }\n\n  textarea {\n    overflow: auto;\n  }\n\n  [type="checkbox"],\n  [type="radio"] {\n    box-sizing: border-box;\n    padding: 0;\n  }\n\n  [type="number"]::-webkit-inner-spin-button,\n  [type="number"]::-webkit-outer-spin-button {\n    -webkit-appearance: none !important;\n  }\n\n  input[type="number"] {\n    -moz-appearance: textfield;\n  }\n\n  [type="search"] {\n    -webkit-appearance: textfield;\n    outline-offset: -2px;\n  }\n\n  [type="search"]::-webkit-search-decoration {\n    -webkit-appearance: none !important;\n  }\n\n  ::-webkit-file-upload-button {\n    -webkit-appearance: button;\n    font: inherit;\n  }\n\n  details {\n    display: block;\n  }\n\n  summary {\n    display: list-item;\n  }\n\n  template {\n    display: none;\n  }\n\n  [hidden] {\n    display: none !important;\n  }\n\n  html {\n    box-sizing: border-box;\n    font-family: sans-serif;\n  }\n\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n\n  blockquote,\n  dl,\n  dd,\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6,\n  hr,\n  figure,\n  p,\n  pre {\n    margin: 0;\n  }\n\n  button {\n    background: transparent;\n    padding: 0;\n  }\n\n  fieldset {\n    margin: 0;\n    padding: 0;\n  }\n\n  ol,\n  ul {\n    margin: 0;\n    padding: 0;\n  }\n\n  html {\n    font-family: ',';\n    line-height: 1.5;\n    -webkit-font-smoothing: antialiased;\n    -webkit-text-size-adjust: 100%;\n    text-rendering: optimizelegibility;\n  }\n\n  hr {\n    border-top-width: 1px;\n  }\n\n  img {\n    border-style: solid;\n  }\n\n  textarea {\n    resize: vertical;\n  }\n\n  button,\n  [role="button"] {\n    cursor: pointer;\n  }\n\n  button::-moz-focus-inner {\n    border: 0 !important;\n  }\n\n  table {\n    border-collapse: collapse;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    font-size: inherit;\n    font-weight: inherit;\n  }\n\n  a {\n    color: inherit;\n    text-decoration: inherit;\n  }\n\n  button,\n  input,\n  optgroup,\n  select,\n  textarea {\n    padding: 0;\n    line-height: inherit;\n    color: inherit;\n  }\n\n  pre,\n  code,\n  kbd,\n  samp {\n    font-family: ',";\n  }\n\n  img,\n  svg,\n  video,\n  canvas,\n  audio,\n  iframe,\n  embed,\n  object {\n    display: block;\n    vertical-align: middle;\n  }\n\n  img,\n  video {\n    max-width: 100%;\n    height: auto;\n  }\n"]);return c=function(){return n},n}var l=function(n){return Object(a.c)(c(),n.fonts.body,n.fonts.mono)};function s(){var n=r()(["\n      html {\n        line-height: 1.5;\n        color: ",";\n        background-color: ",";\n      }\n\n      /**\n      * Allow adding a border to an element by just adding a border-width.\n      */\n\n      *,\n      *::before,\n      *::after {\n        border-width: 0;\n        border-style: solid;\n        border-color: ",";\n      }\n\n      input:-ms-input-placeholder,\n      textarea:-ms-input-placeholder {\n        color: ",";\n      }\n\n      input::-ms-input-placeholder,\n      textarea::-ms-input-placeholder {\n        color: ",";\n      }\n\n      input::placeholder,\n      textarea::placeholder {\n        color: ",";\n      }\n    "]);return s=function(){return n},n}var u=function(n){return{light:{color:n.colors.gray[800],bg:void 0,borderColor:n.colors.gray[200],placeholderColor:n.colors.gray[400]},dark:{color:n.colors.whiteAlpha[900],bg:n.colors.gray[800],borderColor:n.colors.whiteAlpha[300],placeholderColor:n.colors.whiteAlpha[400]}}};e.a=function(n){var e=n.config,t=Object(i.b)().colorMode,o=function(n){var o=u(n),r=(e?e(n,o):u(n))[t],i=r.color,c=r.bg,l=r.borderColor,d=r.placeholderColor;return Object(a.c)(s(),i,c,l,d,d,d)};return Object(a.d)(a.a,{styles:function(n){return Object(a.c)([l(n),o(n)])}})}},hyUy:function(n,e,t){"use strict";t.d(e,"a",(function(){return a})),t.d(e,"b",(function(){return c})),t.d(e,"c",(function(){return i}));var o=function(n){window.__fathomClientQueue=window.__fathomClientQueue||[],window.__fathomClientQueue.push(n)},r=function(){window.__fathomClientQueue=window.__fathomClientQueue||[],window.__fathomClientQueue.forEach((function(n){switch(n.type){case"trackPageview":return void(n.opts?window.fathom.trackPageview(n.opts):window.fathom.trackPageview());case"trackGoal":return void window.fathom.trackGoal(n.code,n.cents)}})),window.__fathomClientQueue=[]},a=function(n,e){var t=document.createElement("script"),o=document.getElementsByTagName("script")[0];t.id="fathom-script",t.async=!0,t.setAttribute("site",n),t.src=e&&e.url?e.url:"https://cdn.usefathom.com/script.js",e&&(void 0!==e.auto&&t.setAttribute("auto","".concat(e.auto)),void 0!==e.honorDNT&&t.setAttribute("honor-dnt","".concat(e.honorDNT)),void 0!==e.canonical&&t.setAttribute("canonical","".concat(e.canonical)),e.includedDomains&&t.setAttribute("included-domains",e.includedDomains.join(",")),e.excludedDomains&&t.setAttribute("excluded-domains",e.excludedDomains.join(",")),e.spa&&t.setAttribute("spa",e.spa)),t.onload=r,o.parentNode.insertBefore(t,o)},i=function(n){window.fathom?n?window.fathom.trackPageview(n):window.fathom.trackPageview():o({type:"trackPageview",opts:n})},c=function(n,e){window.fathom?window.fathom.trackGoal(n,e):o({type:"trackGoal",code:n,cents:e})}},nxX7:function(n,e,t){"use strict";t.d(e,"b",(function(){return u})),t.d(e,"a",(function(){return d}));var o=t("h4VS"),r=t("qKvR"),a=t("uDoD");function i(){var n=Object(o.a)(["\n  ",";\n\n  :not(pre) > code[class*='language-'] {\n    background: #011627;\n  }\n\n  .token.attr-name {\n    color: rgb(173, 219, 103);\n    font-style: italic;\n  }\n\n  .token.comment {\n    color: rgb(128, 147, 147);\n  }\n\n  .token.string,\n  .token.url {\n    color: rgb(173, 219, 103);\n  }\n\n  .token.variable {\n    color: rgb(214, 222, 235);\n  }\n\n  .token.number {\n    color: rgb(247, 140, 108);\n  }\n\n  .token.builtin,\n  .token.char,\n  .token.constant,\n  .token.function {\n    color: rgb(130, 170, 255);\n  }\n\n  .token.punctuation {\n    color: rgb(199, 146, 234);\n  }\n\n  .token.selector,\n  .token.doctype {\n    color: rgb(199, 146, 234);\n    font-style: 'italic';\n  }\n\n  .token.class-name {\n    color: rgb(255, 203, 139);\n  }\n\n  .token.tag,\n  .token.operator,\n  .token.keyword {\n    color: #ffa7c4;\n  }\n\n  .token.boolean {\n    color: rgb(255, 88, 116);\n  }\n\n  .token.property {\n    color: rgb(128, 203, 196);\n  }\n\n  .token.namespace {\n    color: rgb(178, 204, 214);\n  }\n\n  code[class*='language-'],\n  pre[class*='language-'] {\n    color: ",";\n  }\n\n  :not(pre) > code[class*='language-'],\n  pre[class*='language-'] {\n    background: ",";\n    border: 1px solid ",";\n  }\n\n  .mdx-marker {\n    background-color: ",";\n  }\n\n  .remark-code-title {\n    background: ",";\n    color: ",";\n    border: 1px solid ",";\n  }\n"]);return i=function(){return n},n}function c(){var n=Object(o.a)(["\n  ",";\n\n  code[class*='language-'],\n  pre[class*='language-'] {\n    color: ",";\n  }\n\n  :not(pre) > code[class*='language-'],\n  pre[class*='language-'] {\n    background: ",";\n    border: 1px solid ",";\n  }\n\n  .mdx-marker {\n    background-color: hsla(204, 45%, 96%, 1);\n  }\n"]);return c=function(){return n},n}function l(){var n=Object(o.a)(["\n  code {\n    white-space: pre;\n  }\n  code[class*='language-'],\n  pre[class*='language-'] {\n    color: ",";\n    background: none;\n    font-family: ",";\n    font-size: ",";\n    text-align: left;\n    word-spacing: normal;\n    word-break: normal;\n    word-wrap: normal;\n    line-height: ",";\n    -moz-tab-size: 4;\n    -o-tab-size: 4;\n    tab-size: 4;\n    -webkit-hyphens: none;\n    -moz-hyphens: none;\n    -ms-hyphens: none;\n    hyphens: none;\n    width: 100%;\n  }\n  /* Code blocks */\n  pre[class*='language-'] {\n    padding-top: ",";\n    padding-bottom: ",";\n    padding-left: ",";\n    padding-right: ",";\n    margin: "," 0;\n    overflow: auto;\n    min-width: 100%;\n    font-size: 0.9rem;\n    white-space: nowrap;\n  }\n  :not(pre) > code[class*='language-'],\n  pre[class*='language-'] {\n    background: ",";\n    border: 1px solid ",";\n    border-radius: ",";\n  }\n  /* Inline code */\n  :not(pre) > code[class*='language-'] {\n    padding: 0.1em;\n    border-radius: 0.3em;\n    white-space: normal;\n  }\n  .token.comment,\n  .token.prolog,\n  .token.doctype,\n  .token.cdata {\n    color: slategray;\n  }\n  .token.punctuation {\n    color: #999;\n  }\n  .token.namespace {\n    opacity: 0.7;\n  }\n  .token.property,\n  .token.tag,\n  .token.boolean,\n  .token.number,\n  .token.constant,\n  .token.symbol,\n  .token.deleted {\n    color: #905;\n  }\n  .token.selector,\n  .token.attr-name,\n  .token.string,\n  .token.char,\n  .token.builtin,\n  .token.inserted {\n    color: #690;\n  }\n  .token.operator,\n  .token.entity,\n  .token.url,\n  .language-css .token.string,\n  .style .token.string {\n    color: #9a6e3a;\n  }\n  .token.atrule,\n  .token.attr-value,\n  .token.keyword {\n    color: #07a;\n  }\n  .token.function,\n  .token.class-name {\n    color: #dd4a68;\n  }\n  .token.regex,\n  .token.important,\n  .token.variable {\n    color: #e90;\n  }\n  .token.important,\n  .token.bold {\n    font-weight: bold;\n  }\n  .token.italic {\n    font-style: italic;\n  }\n  .token.entity {\n    cursor: help;\n  }\n\n  .mdx-marker {\n    display: block;\n    margin-left: -",";\n    margin-right: -",";\n    padding-left: ",";\n    padding-right: ",";\n    background-color: ",";\n    box-shadow: inset 3px 0px 0 0px ",";\n    min-width: fit-content;\n  }\n\n  .remark-code-title {\n    padding: "," ",";\n    font-family: ",";\n    background: ",";\n    color: ",";\n    border: 1px solid ",";\n    border-top-left-radius: ",";\n    border-top-right-radius: ",";\n    font-size: 0.8rem;\n    font-weight: 600;\n    margin-bottom: 0;\n    width: 100%;\n\n    + pre {\n      border-top-left-radius: 0;\n      border-top-right-radius: 0;\n      margin-top: 0;\n    }\n  }\n"]);return l=function(){return n},n}var s=Object(r.c)(l(),a.a.colors.gray[800],a.a.fonts.mono,a.a.fontSizes[2],a.a.lineHeights[2],a.a.space[4],a.a.space[4],a.a.space[4],a.a.space[4],a.a.space[6],a.a.colors.gray[50],a.a.colors.gray[200],a.a.radii.lg,a.a.space[4],a.a.space[4],a.a.space[4],a.a.space[4],a.a.colors.gray[200],a.a.colors.blue[600],a.a.space[2],a.a.space[4],a.a.fonts.mono,a.a.colors.gray[200],a.a.colors.gray[800],a.a.colors.gray[200],a.a.radii.lg,a.a.radii.lg),u=Object(r.c)(c(),s,a.a.colors.gray[800],a.a.colors.gray[50],a.a.colors.gray[200]),d=Object(r.c)(i(),s,a.a.colors.gray[50],a.a.colors.gray[800],a.a.colors.gray[700],a.a.colors.gray[700],a.a.colors.gray[700],a.a.colors.gray[100],a.a.colors.gray[700])},rePB:function(n,e,t){"use strict";function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}t.d(e,"a",(function(){return o}))},ywjr:function(n,e,t){"use strict";var o="Lee Robinson \u2013 Developer, writer, creator.",r="Front-end developer, JavaScript enthusiast, and course creator.",a={title:o,description:r,canonical:"https://leerob.io",openGraph:{type:"website",locale:"en_IE",url:"https://leerob.io",title:o,description:r,images:[{url:"https://leerob.io/static/images/og.jpg",alt:o,width:1280,height:720}]},twitter:{handle:"@leeerob",site:"@leeerob",cardType:"summary_large_image"}};e.a=a}},[[0,1,2,0,3,5]]]);