(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{145:function(e,t,n){"use strict";n.r(t);n(52);var a=n(74),r=n.n(a),o=n(6),i=n.n(o),l=n(0),s=n.n(l),c=n(55),m=n(149),u=n(33),p=n(150),d=n(179),f=n(156),g=function(){return s.a.createElement(u.StaticQuery,{query:"484868083",render:function(e){return s.a.createElement(s.a.Fragment,null,e.allMdx.edges.map(function(e){var t=e.node;return s.a.createElement(f.a,{key:t.id,link:t.fields.slug,title:t.frontmatter.title,date:t.frontmatter.postedAt,excerpt:t.excerpt})}))},data:d})};n.d(t,"default",function(){return y}),n.d(t,"_frontmatter",function(){return E});var h={},y=function(e){function t(t){var n;return(n=e.call(this,t)||this).layout=m.b,n}return i()(t,e),t.prototype.render=function(){var e=this.props,t=e.components,n=r()(e,["components"]);return s.a.createElement(c.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},h,n),components:t},s.a.createElement(p.a,{title:"Welcome"}),s.a.createElement(c.MDXTag,{name:"h1",components:t},"Welcome"),s.a.createElement(c.MDXTag,{name:"p",components:t},"Hello and welcome to my personal space, where I will probably post random links for, like, two people to notice."),s.a.createElement(c.MDXTag,{name:"h2",components:t},"Recent posts ",s.a.createElement("small",null,"(",s.a.createElement("a",{href:"/feed.xml"},"rss"),")")),s.a.createElement(g,null),s.a.createElement(c.MDXTag,{name:"h2",components:t},"Social"),s.a.createElement(c.MDXTag,{name:"ul",components:t},s.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},s.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://twitter.com/das_fsi"}},"twitter")),s.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},s.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://github.com/fsi"}},"github"))))},t}(s.a.Component),E={}},147:function(e){e.exports={data:{site:{siteMetadata:{title:"fsis.site 🐴"}}}}},148:function(e,t,n){},149:function(e,t,n){"use strict";var a=n(147),r=n(0),o=n.n(r),i=n(1),l=n.n(i),s=(n(52),n(146)),c=n(33),m={brand:"#da5f51",fade:"#848586",background:"#eee0cb",backgroundAlt:"#baa898",bodyText:"#280003",headerText:"#da5f51"},u=s.a.header.withConfig({displayName:"Header__Wrapper",componentId:"sc-1eynnyi-0"})(["max-width:720px;left:0;right:0;margin:0 auto;padding:0 1rem;"]),p=function(e){return o.a.createElement(c.Link,Object.assign({getProps:function(e){return e.isPartiallyCurrent?{className:"active"}:null}},e))},d=s.a.span.withConfig({displayName:"Header__LinkContainer",componentId:"sc-1eynnyi-1"})(["display:inline-block;font-size:1rem;margin:1rem 1rem 1rem 0;& .active{font-weight:bold;color:","}"],m.brand),f=function(e){return o.a.createElement(u,null,o.a.createElement("nav",null,o.a.createElement(d,null,o.a.createElement(c.Link,{to:"/",activeClassName:"active"},"/home/fsi")),o.a.createElement(d,null,o.a.createElement(p,{to:"/posts",activeClassName:"active"},"~/posts")),o.a.createElement(d,null,o.a.createElement("strike",null,o.a.createElement("a",{href:"/cv.en.html"},"~/hire")))))};n(148);n.d(t,"a",function(){return g});var g=function(e){var t=e.children;e.location;return o.a.createElement(c.StaticQuery,{query:"755544856",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(f,null),o.a.createElement("main",null,t),o.a.createElement("footer",null,"© ",o.a.createElement("a",{href:"https://github.com/fsi"},"FSi")," 2019"))},data:a})};g.propTypes={children:l.a.node.isRequired};t.b=g},150:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var a=n(151),r=n(0),o=n.n(r),i=n(153),l=n.n(i),s=n(33),c=function(e){var t=e.description,n=e.lang,r=void 0===n?"en":n,i=e.meta,c=void 0===i?[]:i,u=e.keywords,p=void 0===u?[]:u,d=e.title;return o.a.createElement(s.StaticQuery,{query:m,render:function(e){var n=e.site.siteMetadata;return o.a.createElement(l.a,{htmlAttributes:{lang:r},title:d,defaultTitle:n.title,titleTemplate:"%s | "+n.title,meta:[{name:"description",content:t||n.description},{property:"og:title",content:d},{property:"og:description",content:t||n.description},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:n.author},{name:"twitter.title",content:d},{name:"twitter.description",content:t||n.description}].concat(p.length>0?{name:"keywords",content:p.join(", ")}:[]).concat(c)})},data:a})},m="4122388860"},151:function(e){e.exports={data:{site:{siteMetadata:{title:"fsis.site 🐴",description:"fsi's personal site and blog",author:"Ivan Firsov",social:{twitter:"https://twitter.com/das_fsi"}}}}}},152:function(e,t,n){var a=n(25),r=n(24),o=n(26),i=/"/g,l=function(e,t,n,a){var r=String(o(e)),l="<"+t;return""!==n&&(l+=" "+n+'="'+String(a).replace(i,"&quot;")+'"'),l+">"+r+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(l),a(a.P+a.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",n)}},154:function(e,t,n){"use strict";n(152)("link",function(e){return function(t){return e(this,"a","href",t)}})},155:function(e,t,n){"use strict";n(152)("small",function(e){return function(){return e(this,"small","","")}})},156:function(e,t,n){"use strict";n(154),n(155);var a=n(0),r=n.n(a),o=n(33),i=n(146),l=i.a.h3.withConfig({displayName:"Post__PostHeader",componentId:"sc-2zlp4p-0"})(["display:block;align-items:flex-start;"]),s=i.a.small.withConfig({displayName:"Post__PostHeaderDate",componentId:"sc-2zlp4p-1"})(["font-size:0.5em;margin-left:1em;opacity:0.5;&:before{content:'[';}&:after{content:']';}"]),c=function(e){var t=e.title,n=e.link,a=e.excerpt,i=e.date;return r.a.createElement("article",null,r.a.createElement(l,null,r.a.createElement(o.Link,{to:n},t||"Untitled post"),r.a.createElement(s,null,i)),r.a.createElement("p",null,a))};n.d(t,"a",function(){return c})},179:function(e){e.exports={data:{allMdx:{edges:[{node:{id:"422e57a5-c472-5c56-a633-cf2416a996b1",fields:{slug:"/posts/2019-04-14/"},frontmatter:{title:"Bizzarre Japanese sorting and exploding things",postedAt:"April 14, 2019"},excerpt:"Programming Sorting in Japanese  is  hard There are four Japanese women whose names you have to sort: Junko, Atsuko, Kiyoko, and Akiko. This…"}},{node:{id:"59be2049-28d5-5b74-93e4-7372510d0a91",fields:{slug:"/posts/2019-06-08/"},frontmatter:{title:"Horrifying Satanic Space Colonies: Odyssey",postedAt:"April 14, 2019"},excerpt:"Programming Horrifying PDF experiments e.g.  breakout Articles How to Join a Social Network in 1998 TL;DR you mail them CSV of your friends…"}},{node:{id:"c1fe8c2e-b827-5a21-b07d-60a938a7aa4b",fields:{slug:"/posts/2019-04-09/"},frontmatter:{title:"Can't unsee these insecure Wordpress plugins",postedAt:"April 09, 2019"},excerpt:"Programming Water is still wet. In other news, wordpress plugin ecosystem is still  trash  a ball of slimy writhing unspeakable horrors. one…"}}]}}}}}]);
//# sourceMappingURL=component---src-pages-index-mdx-8b16cb42cf5f9779a628.js.map