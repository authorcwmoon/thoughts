_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[89],{"43Hc":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/newsletter/15",function(){return n("D5OI")}])},"7ljp":function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n("q1tI"),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"===typeof e?e(t):s({},t,{},e)),n},u=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=b(n),d=a,m=u["".concat(i,".").concat(d)]||u[d]||p[d]||o;return n?r.a.createElement(m,s({ref:t},l,{components:n})):r.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"===typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"===typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},D5OI:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n("wx14"),r=n("Ff2n"),o=n("q1tI"),i=n.n(o),s=n("7ljp"),c=n("MrJl"),l=(i.a.createElement,{title:"Are static sites the future? (#15)",publishedAt:"2020-04-13",summary:"An archived verison of Lee Robinson's newsletter \u2013 subscribe to get early access.",image:"/static/images/og.jpg",layout:"newsletter",wordCount:906,readingTime:{text:"5 min read",minutes:4.495,time:269700,words:899},__resourcePath:"newsletter/15.mdx",__scans:{}}),b={frontMatter:l},u=c.a;function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(s.b)(u,Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"Hey! You're getting this email because you signed up for updates from ",Object(s.b)("a",Object(a.a)({parentName:"em"},{href:"https://leerob.io/"}),"my site")," or you purchased my course ",Object(s.b)("a",Object(a.a)({parentName:"em"},{href:"https://masteringnextjs.com/"}),"Mastering Next.js"),". If you don't want to get these emails, definitely unsubscribe \u2014 I only want to send these to you if you look forward to getting them \u270c\ufe0f")),Object(s.b)("hr",null),Object(s.b)("p",null,"I'm experimenting with a new format for my newsletter.\nI'm going to try and write more long-form thoughts on specific topics.\nThis change allows the newsletter to be more conversational, so don't hesitate\nto hit reply if anything triggers thoughts or ideas."),Object(s.b)("h3",{id:"are-static-sites-the-future"},"Are Static Sites the Future?"),Object(s.b)("p",null,"My blog has always been a static site, from plain HTML to static-site generators\nlike Jekyll and Hugo and finally to Next.js. For those familiar with Next, I started out\nusing ",Object(s.b)("inlineCode",{parentName:"p"},"next export"),' and now utilize "static pre-rendering". If a page doesn\'t need to fetch\nany data from the server, it will render as HTML. Static sites are:'),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Cheaper \u2013")," Not making requests to the server on-demand."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Faster \u2013")," Served from a global CDN close to your users."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Easier \u2013")," No complicated deployments. Better developer experience.")),Object(s.b)("p",null,"Does this approach scale? Either server-side rendering (SSR) or static-site generation (SSG)\nwill be good choices for improved SEO over a client-side rendered (CSR) application.\nDepending on the type of application you're building, a completely static site might have\nbetter performance than SSR. This is why Next.js 9.3 added\xa0",Object(s.b)("inlineCode",{parentName:"p"},"getStaticProps"),"\xa0and\xa0",Object(s.b)("inlineCode",{parentName:"p"},"getStaticPaths"),"\nto make it a ",Object(s.b)("em",{parentName:"p"},"complete")," ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://nextjs.org/docs/basic-features/data-fetching"}),"static-site generator")," (SSG)."),Object(s.b)("p",null,"Personally, I learn best by creating. I don't fully understand the topic until I've built\nsomething with it. To explore static sites more, I wrote a\xa0",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://leerob.io/blog/next-prisma"}),"tutorial on Next.js 9.3"),"\nand built a SQLite database backed application showing a ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://prisma-next.now.sh/"}),"list of songs")," with links to their\nYouTube videos. This allows you to see Next's SSG methods in action and understand how you\ncould scale this approach to 1000s of pages."),Object(s.b)("p",null,"By shifting the database access to the build step, Next.js solves a piece of SSG.\nWhat if your data frequently changes? You don't want to do a full rebuild every time.\nYou'd be better off sticking with SSR at that point. This is where\n",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/zeit/next.js/discussions/11552"}),'"Incremental Static Generation"')," comes in.\nStatic generation will allow pages to be regenerated ",Object(s.b)("em",{parentName:"p"},"without")," needing a full rebuild.\nUnder the hood, it's very similar to how ",Object(s.b)("inlineCode",{parentName:"p"},"stale-while-revalidate")," caching works.\nDefine a ",Object(s.b)("inlineCode",{parentName:"p"},"revalidate")," time in ",Object(s.b)("inlineCode",{parentName:"p"},"getStaticProps")," and the route will automatically regenerate\nin the background when a request comes in. I'd recommend reading through the\nlinked ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/zeit/next.js/discussions/11552"}),"RFC")," if you want to learn more."),Object(s.b)("p",null,"Gatsby is also making significant moves in the static site space.\nTheir ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.gatsbyjs.com/incremental-builds-beta/"}),'"Incremental Builds"')," feature in\nGatsby Cloud aims to solve the exact same problem as Next.js. In combination with\nan ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/mxstbr/gatsby/blob/rfc/gatsby-admin/rfcs/text/0000-gatsby-admin.md"}),"admin interface"),",\n",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/gatsbyjs/gatsby/blob/recipes-rfc/rfcs/text/0000-add-gatsby-recipes.md"}),'"recipes"'),", and\nvisual code blocks (",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://blocks-ui.com/"}),"Blocks UI"),"), it will be easier than ever to build\na performant static site. I'm excited to try Gatsby more for some upcoming projects.\nIn my opinion, the biggest advantage Gatsby has over Next is its plugin system.\nDo you prefer Gatsby? Let me know."),Object(s.b)("h3",{id:"prisma-hasura-and-database-access"},"Prisma, Hasura, and Database Access"),Object(s.b)("p",null,"As I explored Next 9.3, I also started looking into the new-hotness for database access.\n",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.prisma.io/"}),"Prisma"),"\xa0makes database access easy with auto-generated and\ntype-safe queries based on your database schema. Prisma had me thinking about\n",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://hasura.io/"}),"Hasura"),", another tool I've previously worked with that streamlines\nhow we fetch data in applications. Both Prisma and Hasura enable front-end developers to more\nefficiently manage the full stack and are often brought up together."),Object(s.b)("p",null,"Hasura auto-generates a GraphQL API based on your schema, including the create/update/delete\nresolvers and queries/mutations you need. This is great if you need to build an API.\nWith Prisma (and Next 9.3), it's possible to short circuit this entirely. You don't even\nneed the API because you can go directly to the database. Their client gives you type-safe\nDB access and prevents you from writing CRUD, ditching the integration\nbetween client & API. It's another level of less code."),Object(s.b)("p",null,"With Hasura, it's a bit more challenging to build on top of. Yes, you can do GraphQL\nmesh/stitching if you need more than just the auto-generated queries/resolvers based on your\nschema, but it's more overhead. I chose Hasura over Firebase for a previous project I used\nsince I needed relational data and I didn't want to deal with complicated deployments.\nThese same benefits apply to Prisma as well, and it's more flexible to build on top of."),Object(s.b)("p",null,"I think once ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://prisma.studio/preview?project=imdb"}),"Prisma Studio")," &\n",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-migrate"}),"Prisma Migrate")," ditch\nthe experimental flag and are production-ready, it will be a game-changer. Keep your\neyes on ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://redwoodjs.com/"}),"RedwoodJS"),", which uses Prisma under the covers."),Object(s.b)("h3",{id:"goodbye-mailchimp-hello-buttondown"},"Goodbye Mailchimp, Hello Buttondown!"),Object(s.b)("p",null,"I was starting to get frustrated with Mailchimp's email editor.\nYes, I wanted links, images, and more \u2013 but I didn't need the custom formatting or\n\"business\" features. The focus needed to be on the content. Coincidentally, that's when\nI found ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://buttondown.email"}),"Buttondown")," (thanks, ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://mxstbr.com/"}),"Max"),")"),Object(s.b)("p",null,"Buttondown allows me to write my newsletter in Markdown \ud83d\ude0dIt's powerful enough to achieve\nwhat I'm looking for, without all the extra bloat Mailchimp provides. Plus, free/hobby tier\nand API access! Sold. This is my first email using Buttondown. I've since ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/newsletter"}),"archived")," all\nof my old newsletters on my site and added metrics on newsletter subscribers to my ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/dashboard"}),"dashboard"),"."),Object(s.b)("p",null,"I\u2019ll close this off with a reminder to hit reply and let me know what you think about any\nof this! I\u2019d love to hear from you."),Object(s.b)("p",null,"Cheers!"))}p.isMDXComponent=!0},Ff2n:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n("zLVn");function r(e,t){if(null==e)return{};var n,r,o=Object(a.a)(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}},KHP3:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),o=n("9ixD"),i=r.a.createElement;t.a=function(e){var t=e.title,n=e.summary,a=e.publishedAt,s=e.url,c=e.image,l=new Date(a).toISOString(),b={url:"https://leerob.io".concat(c),alt:t};return i(r.a.Fragment,null,i(o.c,{title:"".concat(t," \u2013 Lee Robinson"),description:n,canonical:s,openGraph:{type:"article",article:{publishedTime:l},url:s,title:t,description:n,images:[b]}}),i(o.a,{authorName:"Lee Robinson",dateModified:l,datePublished:l,description:n,images:[b],publisherLogo:"/static/favicons/android-chrome-192x192.png",publisherName:"Lee Robinson",title:t,url:s}))}},L90x:function(e,t,n){"use strict";var a=n("8OQS"),r=n.n(a),o=n("pVnL"),i=n.n(o),s=n("qKvR"),c=n("lSNA"),l=n.n(c),b=n("CjxU"),u=n("mf32"),p=n("8hg0");function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var m={"2xs":4,xs:6,sm:8,md:12,lg:16,xl:24,"2xl":32,full:"full"},h=function(e){var t=e.size,n=e.name,a=e.showBorder,r=e.borderColor,o=Object(b.b)().colors,i=Object(u.b)().colorMode,s=n?function(e){var t=0;if(0===e.length)return t;for(var n=0;n<e.length;n++)t=e.charCodeAt(n)+((t<<5)-t),t&=t;for(var a="#",r=0;r<3;r++)a+=("00"+(t>>8*r&255).toString(16)).substr(-2);return a}(n):o.gray[400],c=n?Object(p.e)(s)?"#fff":"gray.800":"#fff";return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(n,!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},{display:"inline-flex",rounded:"full",alignItems:"center",flexShrink:"0",justifyContent:"center",position:"relative"},{size:m[t],bg:s,color:c},a&&{border:"2px",borderColor:r||{light:"#fff",dark:"gray.800"}[i]})},f=n("bQFp"),g=n("BMxC"),y=function(e){var t=e.name,n=r()(e,["name"]);return Object(s.d)(g.a,i()({textAlign:"center",textTransform:"uppercase",fontWeight:"medium","aria-label":t},n),t?function(e){var t=e.split(" "),n=t[0],a=t[1];return n&&a?""+n.charAt(0)+a.charAt(0):n.charAt(0)}(t):null)},j=function(e){return Object(s.d)(g.a,i()({size:"100%"},e),Object(s.d)("svg",{fill:"#fff",viewBox:"0 0 128 128",role:"img"},Object(s.d)("g",null,Object(s.d)("path",{d:"M103,102.1388 C93.094,111.92 79.3504,118 64.1638,118 C48.8056,118 34.9294,111.768 25,101.7892 L25,95.2 C25,86.8096 31.981,80 40.6,80 L87.4,80 C96.019,80 103,86.8096 103,95.2 L103,102.1388 Z"}),Object(s.d)("path",{d:"M63.9961647,24 C51.2938136,24 41,34.2938136 41,46.9961647 C41,59.7061864 51.2938136,70 63.9961647,70 C76.6985159,70 87,59.7061864 87,46.9961647 C87,34.2938136 76.6985159,24 63.9961647,24"}))))},O=function(e){var t=e.size,n=e.showBorder,a=e.name,o=e.src,c=e.borderColor,l=e.children,u=r()(e,["size","showBorder","name","src","borderColor","children"]),p=h({name:a,size:t,showBorder:n,borderColor:c}),d=Object(f.b)({src:o}),O=Object(b.b)(),w=m[t],v=O.sizes[w],x="calc("+v+" / 2.5)";return Object(s.d)(g.a,i()({fontSize:x,lineHeight:v,verticalAlign:"top"},p,u),o&&d?Object(s.d)(g.a,{as:"img",size:"100%",rounded:"full",objectFit:"cover",src:o,alt:a}):o&&!d?a?Object(s.d)(y,{size:v,name:a}):Object(s.d)(j,{"aria-label":a}):!o&&a?Object(s.d)(y,{size:v,name:a}):Object(s.d)(j,{"aria-label":a}),l)};O.defaultProps={size:"md"};t.a=O},MrJl:function(e,t,n){"use strict";n.d(t,"a",(function(){return y}));var a=n("wx14"),r=n("q1tI"),o=n.n(r),i=n("sWYD"),s=n("4+6U"),c=n("mf32"),l=n("Yn+B"),b=n("Weur"),u=n("qWyU"),p=n("L90x"),d=n("sK1y"),m=n("rQ2n"),h=n("ps1A"),f=n("KHP3"),g=o.a.createElement;function y(e){var t=e.children,n=e.frontMatter,r=n.__resourcePath.replace("newsletter/","").replace(".mdx",""),o=Object(c.b)().colorMode;return g(m.a,null,g(f.a,Object(a.a)({url:"https://leerob.io/newsletter/".concat(r)},n)),g(l.a,{as:"article",spacing:8,justifyContent:"center",alignItems:"flex-start",m:"0 auto 4rem auto",maxWidth:"700px",w:"100%"},g(b.a,{flexDirection:"column",justifyContent:"flex-start",alignItems:"flex-start",maxWidth:"700px",w:"100%"},g(u.a,{letterSpacing:"tight",mb:2,as:"h1",size:"2xl"},n.title),g(b.a,{justify:"space-between",align:["initial","center"],direction:["column","row"],mt:2,w:"100%",mb:4},g(b.a,{align:"center"},g(p.a,{size:"xs",name:"Lee Robinson",src:"https://bit.ly/33vEjhB",mr:2}),g(d.a,{fontSize:"sm",color:{light:"gray.700",dark:"gray.400"}[o]},n.by,"Lee Robinson / ",Object(i.a)(Object(s.a)(n.publishedAt),"MMMM dd, yyyy"))),g(d.a,{fontSize:"sm",color:"gray.500",minWidth:"100px",mt:[2,0]},n.readingTime.text))),t,g(h.a,null)))}}},[["43Hc",1,2,0,3,4,5,6,7]]]);