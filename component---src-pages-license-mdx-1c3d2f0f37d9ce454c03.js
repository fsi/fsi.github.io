(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{144:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return d}),n.d(t,"_frontmatter",function(){return f});n(52);var a=n(74),r=n.n(a),i=n(6),o=n.n(i),c=n(0),s=n.n(c),l=n(53),u=n(159),m=(n(33),n(152)),p=(n(160),{}),d=function(e){function t(t){var n;return(n=e.call(this,t)||this).layout=u.a,n}return o()(t,e),t.prototype.render=function(){var e=this.props,t=e.components,n=r()(e,["components"]);return s.a.createElement(l.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},p,n),components:t},s.a.createElement(m.a,{title:"License"}),s.a.createElement(l.MDXTag,{name:"h1",components:t},"License stuff"),s.a.createElement(l.MDXTag,{name:"h2",components:t},"Fonts"),s.a.createElement(l.MDXTag,{name:"ul",components:t},s.a.createElement(l.MDXTag,{name:"li",components:t,parentName:"ul"},s.a.createElement(l.MDXTag,{name:"p",components:t,parentName:"li"},s.a.createElement(l.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/license_funtauna.txt"}},"Funtauna"))),s.a.createElement(l.MDXTag,{name:"li",components:t,parentName:"ul"},s.a.createElement(l.MDXTag,{name:"p",components:t,parentName:"li"},s.a.createElement(l.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://gitlab.com/manufacturaind/serreria-sobria/"}},"Serreria Sobria")))))},t}(s.a.Component),f={}},148:function(e){e.exports={data:{site:{siteMetadata:{title:"fsis.site 🐴"}}}}},149:function(e,t,n){},150:function(e,t,n){"use strict";n(52);var a=n(0),r=n.n(a),i=n(147),o=n(33),c={brand:"#da5f51",fade:"#848586",background:"#eee0cb",backgroundAlt:"#baa898",bodyText:"#280003",headerText:"#da5f51"},s=i.a.header.withConfig({displayName:"Header__Wrapper",componentId:"sc-1eynnyi-0"})(["max-width:720px;left:0;right:0;margin:0 auto;padding:0 1rem;"]),l=function(e){return r.a.createElement(o.Link,Object.assign({getProps:function(e){return e.isPartiallyCurrent?{className:"active"}:null}},e))},u=i.a.span.withConfig({displayName:"Header__LinkContainer",componentId:"sc-1eynnyi-1"})(["display:inline-block;font-size:1rem;margin:1rem 1rem 1rem 0;& .active{font-weight:bold;color:","}"],c.brand),m=function(e){return r.a.createElement(s,null,r.a.createElement("nav",null,r.a.createElement(u,null,r.a.createElement(o.Link,{to:"/",activeClassName:"active"},"/home/fsi")),r.a.createElement(u,null,r.a.createElement(l,{to:"/posts",activeClassName:"active"},"~/posts")),r.a.createElement(u,null,r.a.createElement("strike",null,r.a.createElement("a",{href:"/cv.en.html"},"~/hire"))),r.a.createElement(u,null,r.a.createElement(o.Link,{to:"/license",activeClassName:"active"},"~/license"))))};n.d(t,"a",function(){return m})},151:function(e,t,n){var a=n(25),r=n(24),i=n(26),o=/"/g,c=function(e,t,n,a){var r=String(i(e)),c="<"+t;return""!==n&&(c+=" "+n+'="'+String(a).replace(o,"&quot;")+'"'),c+">"+r+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(c),a(a.P+a.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",n)}},152:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var a=n(153),r=n(0),i=n.n(r),o=n(158),c=n.n(o),s=n(33),l=function(e){var t=e.description,n=e.lang,r=void 0===n?"en":n,o=e.meta,l=void 0===o?[]:o,m=e.keywords,p=void 0===m?[]:m,d=e.title;return i.a.createElement(s.StaticQuery,{query:u,render:function(e){var n=e.site.siteMetadata;return i.a.createElement(c.a,{htmlAttributes:{lang:r},title:d,defaultTitle:n.title,titleTemplate:"%s | "+n.title,meta:[{name:"description",content:t||n.description},{property:"og:title",content:d},{property:"og:description",content:t||n.description},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:n.author},{name:"twitter.title",content:d},{name:"twitter.description",content:t||n.description}].concat(p.length>0?{name:"keywords",content:p.join(", ")}:[]).concat(l)})},data:a})},u="4122388860"},153:function(e){e.exports={data:{site:{siteMetadata:{title:"fsis.site 🐴",description:"fsi's personal site and blog",author:"Ivan Firsov",social:{twitter:"https://twitter.com/das_fsi"}}}}}},155:function(e,t,n){"use strict";n(151)("link",function(e){return function(t){return e(this,"a","href",t)}})},156:function(e,t,n){"use strict";n(151)("small",function(e){return function(){return e(this,"small","","")}})},157:function(e,t,n){"use strict";n(155),n(156);var a=n(0),r=n.n(a),i=n(33),o=n(147),c=o.a.p.withConfig({displayName:"Post__PostHeader",componentId:"sc-2zlp4p-0"})(["display:flex;justify-content:space-between;font-weight:bold;align-items:flex-start;& > a{text-decoration:none;}"]),s=o.a.small.withConfig({displayName:"Post__PostHeaderDate",componentId:"sc-2zlp4p-1"})(["font-size:0.5em;margin:0 1em;opacity:0.5;min-width:10em;align-self:center;&:before{content:'[';}&:after{content:']';}"]),l=function(e){var t=e.title,n=e.link,a=(e.excerpt,e.date);return r.a.createElement("article",null,r.a.createElement(c,null,r.a.createElement(i.Link,{to:n},t||"Untitled post"),r.a.createElement(s,null,a)))};n.d(t,"a",function(){return l})},159:function(e,t,n){"use strict";var a=n(148),r=n(0),i=n.n(r),o=n(1),c=n.n(o),s=n(150),l=n(33),u=(n(149),function(e){var t=e.children;e.location;return i.a.createElement(l.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(s.a,null),i.a.createElement("main",null,t),i.a.createElement("footer",null,"© ",i.a.createElement("a",{href:"https://github.com/fsi"},"FSi")," 2019"))},data:a})});u.propTypes={children:c.a.node.isRequired},t.a=u},160:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var a=n(161),r=n(0),i=n.n(r),o=n(33),c=n(157),s=function(){return i.a.createElement(o.StaticQuery,{query:"484868083",render:function(e){return i.a.createElement(i.a.Fragment,null,e.allMdx.edges.map(function(e){var t=e.node;return i.a.createElement(c.a,{key:t.id,link:t.fields.slug,title:t.frontmatter.title,date:t.frontmatter.postedAt,excerpt:t.excerpt})}))},data:a})}},161:function(e){e.exports={data:{allMdx:{edges:[{node:{id:"afdafb52-f554-5c13-bf63-c54cde6e8b8b",fields:{slug:"/posts/2019-08-26/"},frontmatter:{title:"August travels",postedAt:"August 26, 2019"},excerpt:"Here's a brief log of my travels to make up for all the missed posts (as I, in fact, pledged to post once a week or so). Brutal Assault…"}},{node:{id:"d78a5742-c50b-5526-80d4-2801b51c0f53",fields:{slug:"/posts/2019-08-04/"},frontmatter:{title:"Light Sail, OH GOD WHY and some grindcore",postedAt:"August 04, 2019"},excerpt:"Articles LightSail2 is working! A nuclear war might make crops stop growing, so we need a backup plan. TL;DR: prepping for the apocalypse…"}},{node:{id:"fc55db10-33eb-5fa3-8fdb-49f7e5c194d2",fields:{slug:"/posts/2019-07-27/"},frontmatter:{title:"Marble, dungeons and quantum darwinism",postedAt:"July 27, 2019"},excerpt:"First off, some updates: I've removed the Google Fonts dependency. Uses a couple of self-hosted fonts with system fallback now. Small visual…"}}]}}}}}]);
//# sourceMappingURL=component---src-pages-license-mdx-1c3d2f0f37d9ce454c03.js.map