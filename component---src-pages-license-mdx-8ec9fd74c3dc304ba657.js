(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{144:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return d}),n.d(t,"_frontmatter",function(){return f});n(52);var a=n(74),r=n.n(a),i=n(6),o=n.n(i),c=n(0),l=n.n(c),s=n(53),u=n(159),m=(n(33),n(152)),p=(n(160),{}),d=function(e){function t(t){var n;return(n=e.call(this,t)||this).layout=u.a,n}return o()(t,e),t.prototype.render=function(){var e=this.props,t=e.components,n=r()(e,["components"]);return l.a.createElement(s.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},p,n),components:t},l.a.createElement(m.a,{title:"License"}),l.a.createElement(s.MDXTag,{name:"h1",components:t},"License stuff"),l.a.createElement(s.MDXTag,{name:"h2",components:t},"Fonts"),l.a.createElement(s.MDXTag,{name:"ul",components:t},l.a.createElement(s.MDXTag,{name:"li",components:t,parentName:"ul"},l.a.createElement(s.MDXTag,{name:"p",components:t,parentName:"li"},l.a.createElement(s.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/license_funtauna.txt"}},"Funtauna"))),l.a.createElement(s.MDXTag,{name:"li",components:t,parentName:"ul"},l.a.createElement(s.MDXTag,{name:"p",components:t,parentName:"li"},l.a.createElement(s.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://gitlab.com/manufacturaind/serreria-sobria/"}},"Serreria Sobria")))))},t}(l.a.Component),f={}},148:function(e){e.exports={data:{site:{siteMetadata:{title:"fsis.site 🐴"}}}}},149:function(e,t,n){},150:function(e,t,n){"use strict";n(52);var a=n(0),r=n.n(a),i=n(147),o=n(33),c={brand:"#da5f51",fade:"#848586",background:"#eee0cb",backgroundAlt:"#baa898",bodyText:"#280003",headerText:"#da5f51"},l=i.a.header.withConfig({displayName:"Header__Wrapper",componentId:"sc-1eynnyi-0"})(["max-width:720px;left:0;right:0;margin:0 auto;padding:0 1rem;"]),s=function(e){return r.a.createElement(o.Link,Object.assign({getProps:function(e){return e.isPartiallyCurrent?{className:"active"}:null}},e))},u=i.a.span.withConfig({displayName:"Header__LinkContainer",componentId:"sc-1eynnyi-1"})(["display:inline-block;font-size:1rem;margin:1rem 1rem 1rem 0;& .active{font-weight:bold;color:","}"],c.brand),m=function(e){return r.a.createElement(l,null,r.a.createElement("nav",null,r.a.createElement(u,null,r.a.createElement(o.Link,{to:"/",activeClassName:"active"},"/home/fsi")),r.a.createElement(u,null,r.a.createElement(s,{to:"/posts",activeClassName:"active"},"~/posts")),r.a.createElement(u,null,r.a.createElement("strike",null,r.a.createElement("a",{href:"/cv.en.html"},"~/hire"))),r.a.createElement(u,null,r.a.createElement(o.Link,{to:"/license",activeClassName:"active"},"~/license"))))};n.d(t,"a",function(){return m})},151:function(e,t,n){var a=n(25),r=n(24),i=n(26),o=/"/g,c=function(e,t,n,a){var r=String(i(e)),c="<"+t;return""!==n&&(c+=" "+n+'="'+String(a).replace(o,"&quot;")+'"'),c+">"+r+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(c),a(a.P+a.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",n)}},152:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var a=n(153),r=n(0),i=n.n(r),o=n(158),c=n.n(o),l=n(33),s=function(e){var t=e.description,n=e.lang,r=void 0===n?"en":n,o=e.meta,s=void 0===o?[]:o,m=e.keywords,p=void 0===m?[]:m,d=e.title;return i.a.createElement(l.StaticQuery,{query:u,render:function(e){var n=e.site.siteMetadata;return i.a.createElement(c.a,{htmlAttributes:{lang:r},title:d,defaultTitle:n.title,titleTemplate:"%s | "+n.title,meta:[{name:"description",content:t||n.description},{property:"og:title",content:d},{property:"og:description",content:t||n.description},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:n.author},{name:"twitter.title",content:d},{name:"twitter.description",content:t||n.description}].concat(p.length>0?{name:"keywords",content:p.join(", ")}:[]).concat(s)})},data:a})},u="4122388860"},153:function(e){e.exports={data:{site:{siteMetadata:{title:"fsis.site 🐴",description:"fsi's personal site and blog",author:"Ivan Firsov",social:{twitter:"https://twitter.com/das_fsi"}}}}}},155:function(e,t,n){"use strict";n(151)("link",function(e){return function(t){return e(this,"a","href",t)}})},156:function(e,t,n){"use strict";n(151)("small",function(e){return function(){return e(this,"small","","")}})},157:function(e,t,n){"use strict";n(155),n(156);var a=n(0),r=n.n(a),i=n(33),o=n(147),c=o.a.p.withConfig({displayName:"Post__PostHeader",componentId:"sc-2zlp4p-0"})(["display:flex;justify-content:space-between;font-weight:bold;align-items:flex-start;& > a{text-decoration:none;}"]),l=o.a.small.withConfig({displayName:"Post__PostHeaderDate",componentId:"sc-2zlp4p-1"})(["font-size:0.5em;margin:0 1em;opacity:0.5;min-width:10em;align-self:center;&:before{content:'[';}&:after{content:']';}"]),s=function(e){var t=e.title,n=e.link,a=(e.excerpt,e.date);return r.a.createElement("article",null,r.a.createElement(c,null,r.a.createElement(i.Link,{to:n},t||"Untitled post"),r.a.createElement(l,null,a)))};n.d(t,"a",function(){return s})},159:function(e,t,n){"use strict";var a=n(148),r=n(0),i=n.n(r),o=n(1),c=n.n(o),l=n(150),s=n(33),u=(n(149),function(e){var t=e.children;e.location;return i.a.createElement(s.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(l.a,null),i.a.createElement("main",null,t),i.a.createElement("footer",null,"© ",i.a.createElement("a",{href:"https://github.com/fsi"},"FSi")," 2019"))},data:a})});u.propTypes={children:c.a.node.isRequired},t.a=u},160:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var a=n(161),r=n(0),i=n.n(r),o=n(33),c=n(157),l=function(){return i.a.createElement(o.StaticQuery,{query:"484868083",render:function(e){return i.a.createElement(i.a.Fragment,null,e.allMdx.edges.map(function(e){var t=e.node;return i.a.createElement(c.a,{key:t.id,link:t.fields.slug,title:t.frontmatter.title,date:t.frontmatter.postedAt,excerpt:t.excerpt})}))},data:a})}},161:function(e){e.exports={data:{allMdx:{edges:[{node:{id:"fc55db10-33eb-5fa3-8fdb-49f7e5c194d2",fields:{slug:"/posts/2019-07-27/"},frontmatter:{title:"Marble, dungeons and quantum darwinism",postedAt:"July 27, 2019"},excerpt:"First off, some updates: I've removed the Google Fonts dependency. Uses a couple of self-hosted fonts with system fallback now. Small visual…"}},{node:{id:"c3a8c696-5b32-5293-87a4-2a8639f0626c",fields:{slug:"/posts/2019-07-21/"},frontmatter:{title:"The best medieval snails rendering bicycle supernests in human skin",postedAt:"July 21, 2019"},excerpt:"Programming The Best Refactoring You've Never Heard Of TL;DR: defunctionalize the continuation! The PGP Problem TL;DR: no solution in sight…"}},{node:{id:"342f0f82-978c-54f4-96a2-093bb3734ea5",fields:{slug:"/posts/2019-07-13/"},frontmatter:{title:"Ottoman floating point zip bombs on the moon",postedAt:"July 13, 2019"},excerpt:"Programming Floating point routines for 6502 by Woz (direct link) A better zip bomb ;\n NON-RECURSIVE  zip-bombs that extract from 42 kB to…"}}]}}}}}]);
//# sourceMappingURL=component---src-pages-license-mdx-8ec9fd74c3dc304ba657.js.map