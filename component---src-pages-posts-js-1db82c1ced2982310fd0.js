(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{144:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(146),o=n(149),s=n(178),l=n(33),c=n(156),d=function(){return r.a.createElement(l.StaticQuery,{query:"1946404668",render:function(e){return r.a.createElement(r.a.Fragment,null,e.allMdx.edges.map(function(e){var t=e.node;return r.a.createElement(c.a,{key:t.id,link:t.fields.slug,title:t.frontmatter.title,date:t.frontmatter.postedAt,excerpt:t.excerpt})}))},data:s})},u=n(150),m=i.a.aside.withConfig({displayName:"posts__RSSAside",componentId:"sc-1e9pmy1-0"})(["float:right;"]);t.default=function(){return r.a.createElement(o.b,null,r.a.createElement(u.a,{title:"Posts archive",description:"fsis.site posts archive"}),r.a.createElement(m,null,r.a.createElement("a",{href:"/feed.xml"},"RSS feed")),r.a.createElement("h1",null,"Posts archive"),r.a.createElement(d,null))}},147:function(e){e.exports={data:{site:{siteMetadata:{title:"fsis.site 🐴"}}}}},148:function(e,t,n){},149:function(e,t,n){"use strict";var a=n(147),r=n(0),i=n.n(r),o=n(1),s=n.n(o),l=(n(52),n(146)),c=n(33),d={brand:"#da5f51",fade:"#848586",background:"#eee0cb",backgroundAlt:"#baa898",bodyText:"#280003",headerText:"#da5f51"},u=l.a.header.withConfig({displayName:"Header__Wrapper",componentId:"sc-1eynnyi-0"})(["max-width:720px;left:0;right:0;margin:0 auto;padding:0 1rem;"]),m=function(e){return i.a.createElement(c.Link,Object.assign({getProps:function(e){return e.isPartiallyCurrent?{className:"active"}:null}},e))},p=l.a.span.withConfig({displayName:"Header__LinkContainer",componentId:"sc-1eynnyi-1"})(["display:inline-block;font-size:1rem;margin:1rem 1rem 1rem 0;& .active{font-weight:bold;color:","}"],d.brand),f=function(e){return i.a.createElement(u,null,i.a.createElement("nav",null,i.a.createElement(p,null,i.a.createElement(c.Link,{to:"/",activeClassName:"active"},"/home/fsi")),i.a.createElement(p,null,i.a.createElement(m,{to:"/posts",activeClassName:"active"},"~/posts")),i.a.createElement(p,null,i.a.createElement("strike",null,i.a.createElement("a",{href:"/cv.en.html"},"~/hire")))))};n(148);n.d(t,"a",function(){return g});var g=function(e){var t=e.children;e.location;return i.a.createElement(c.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(f,null),i.a.createElement("main",null,t),i.a.createElement("footer",null,"© ",i.a.createElement("a",{href:"https://github.com/fsi"},"FSi")," 2019"))},data:a})};g.propTypes={children:s.a.node.isRequired};t.b=g},150:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var a=n(151),r=n(0),i=n.n(r),o=n(153),s=n.n(o),l=n(33),c=function(e){var t=e.description,n=e.lang,r=void 0===n?"en":n,o=e.meta,c=void 0===o?[]:o,u=e.keywords,m=void 0===u?[]:u,p=e.title;return i.a.createElement(l.StaticQuery,{query:d,render:function(e){var n=e.site.siteMetadata;return i.a.createElement(s.a,{htmlAttributes:{lang:r},title:p,defaultTitle:n.title,titleTemplate:"%s | "+n.title,meta:[{name:"description",content:t||n.description},{property:"og:title",content:p},{property:"og:description",content:t||n.description},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:n.author},{name:"twitter.title",content:p},{name:"twitter.description",content:t||n.description}].concat(m.length>0?{name:"keywords",content:m.join(", ")}:[]).concat(c)})},data:a})},d="4122388860"},151:function(e){e.exports={data:{site:{siteMetadata:{title:"fsis.site 🐴",description:"fsi's personal site and blog",author:"Ivan Firsov",social:{twitter:"https://twitter.com/das_fsi"}}}}}},152:function(e,t,n){var a=n(25),r=n(24),i=n(26),o=/"/g,s=function(e,t,n,a){var r=String(i(e)),s="<"+t;return""!==n&&(s+=" "+n+'="'+String(a).replace(o,"&quot;")+'"'),s+">"+r+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(s),a(a.P+a.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",n)}},154:function(e,t,n){"use strict";n(152)("link",function(e){return function(t){return e(this,"a","href",t)}})},155:function(e,t,n){"use strict";n(152)("small",function(e){return function(){return e(this,"small","","")}})},156:function(e,t,n){"use strict";n(154),n(155);var a=n(0),r=n.n(a),i=n(33),o=n(146),s=o.a.h3.withConfig({displayName:"Post__PostHeader",componentId:"sc-2zlp4p-0"})(["display:block;align-items:flex-start;"]),l=o.a.small.withConfig({displayName:"Post__PostHeaderDate",componentId:"sc-2zlp4p-1"})(["font-size:0.5em;margin-left:1em;opacity:0.5;&:before{content:'[';}&:after{content:']';}"]),c=function(e){var t=e.title,n=e.link,a=e.excerpt,o=e.date;return r.a.createElement("article",null,r.a.createElement(s,null,r.a.createElement(i.Link,{to:n},t||"Untitled post"),r.a.createElement(l,null,o)),r.a.createElement("p",null,a))};n.d(t,"a",function(){return c})},178:function(e){e.exports={data:{allMdx:{edges:[{node:{id:"422e57a5-c472-5c56-a633-cf2416a996b1",fields:{slug:"/posts/2019-04-14/"},frontmatter:{title:"Bizzarre Japanese sorting and exploding things",postedAt:"April 14, 2019"},excerpt:"Programming Sorting in Japanese  is  hard There are four Japanese women whose names you have to sort: Junko, Atsuko, Kiyoko, and Akiko. This…"}},{node:{id:"c1fe8c2e-b827-5a21-b07d-60a938a7aa4b",fields:{slug:"/posts/2019-04-09/"},frontmatter:{title:"Can't unsee these insecure Wordpress plugins",postedAt:"April 09, 2019"},excerpt:"Programming Water is still wet. In other news, wordpress plugin ecosystem is still  trash  a ball of slimy writhing unspeakable horrors. one…"}},{node:{id:"ed6565f3-27f2-55cc-bcef-069c69f9623b",fields:{slug:"/posts/2019-03-31/"},frontmatter:{title:"Garfield phones, x-ray records and phone tombs",postedAt:"March 31, 2019"},excerpt:"Programming Exercises in Emulation: Xbox 360’s FMA Instruction Articles (quote)  Algorithmic recommendations   ...  are failing users by…"}},{node:{id:"f7899f55-fdef-532e-bb7c-d8d97e1fa028",fields:{slug:"/posts/2019-03-17/"},frontmatter:{title:"Doom, Fire and Wombats",postedAt:"March 17, 2019"},excerpt:'Programming How Doom fire was done A short and to the point tutorial. ("Doom" here refers to PSX and N64 Doom ports) Articles Going old…'}},{node:{id:"e7c60af8-d31e-5cb4-8d45-9bb8ff0dbaf4",fields:{slug:"/posts/2019-03-10/"},frontmatter:{title:"I should probably change the design and remove these titles",postedAt:"March 10, 2019"},excerpt:"Programming Wave Function Collapse An algorihtm that generates bitmaps that are locally similar to the input bitmap. Can be used for e.g…"}},{node:{id:"4231b552-e15b-5668-966e-ba61acd11882",fields:{slug:"/posts/2019-03-03/"},frontmatter:{title:"Smallish one this time",postedAt:"March 03, 2019"},excerpt:"Programming Why Don't People Use Formal Methods (because they are normally not worth the investment) Articles ETS isn't TLS and you should…"}},{node:{id:"7f873f94-2e08-52a4-88a5-5e7a49295f4e",fields:{slug:"/posts/2019-02-24/"},frontmatter:{title:"Links and updates",postedAt:"February 24, 2019"},excerpt:"Programming C is Not a Low-level Language All programming languages are abstractions, in some way.\nEven simplistic ones, like C and x8…"}},{node:{id:"5c1b4783-9d20-5581-adf1-1ae2f7caddb8",fields:{slug:"/posts/2019-02-19/"},frontmatter:{title:"Links and updates",postedAt:"February 19, 2019"},excerpt:"In this post, I will try and gather some interesting stuff I found around the internets. Event sourcing is hard .\nI used to work on an large…"}},{node:{id:"e9a5e894-cf73-533c-893a-9adecede041a",fields:{slug:"/posts/2019-01-26_first/"},frontmatter:{title:"Hello",postedAt:"January 26, 2019"},excerpt:"Hello and welcome to my  personal space , where I will probably post random links for, like, two people to notice. I made it using  gatsby…"}}]}}}}}]);
//# sourceMappingURL=component---src-pages-posts-js-1db82c1ced2982310fd0.js.map