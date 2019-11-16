(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{143:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return f}),n.d(t,"_frontmatter",function(){return g});n(52);var a=n(74),r=n.n(a),o=n(6),i=n.n(o),l=n(0),c=n.n(l),s=n(53),m=n(159),u=(n(33),n(152)),d=n(160),p={},f=function(e){function t(t){var n;return(n=e.call(this,t)||this).layout=m.a,n}return i()(t,e),t.prototype.render=function(){var e=this.props,t=e.components,n=r()(e,["components"]);return c.a.createElement(s.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},p,n),components:t},c.a.createElement(u.a,{title:"Welcome"}),c.a.createElement(s.MDXTag,{name:"h1",components:t},"Welcome"),c.a.createElement(s.MDXTag,{name:"p",components:t},"Hello and welcome to my personal space, where I will probably post random links for, like, two people to notice."),c.a.createElement(s.MDXTag,{name:"h2",components:t},"Recent posts ",c.a.createElement("small",null,"(",c.a.createElement("a",{href:"/feed.xml"},"rss"),")")),c.a.createElement(d.a,null),c.a.createElement(s.MDXTag,{name:"h2",components:t},"Social"),c.a.createElement(s.MDXTag,{name:"ul",components:t},c.a.createElement(s.MDXTag,{name:"li",components:t,parentName:"ul"},c.a.createElement(s.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://twitter.com/das_fsi"}},"twitter")),c.a.createElement(s.MDXTag,{name:"li",components:t,parentName:"ul"},c.a.createElement(s.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://github.com/fsi"}},"github"))))},t}(c.a.Component),g={}},148:function(e){e.exports={data:{site:{siteMetadata:{title:"fsis.site 🐴"}}}}},149:function(e,t,n){},150:function(e,t,n){"use strict";n(52);var a=n(0),r=n.n(a),o=n(147),i=n(33),l={brand:"#da5f51",fade:"#848586",background:"#eee0cb",backgroundAlt:"#baa898",bodyText:"#280003",headerText:"#da5f51"},c=o.a.header.withConfig({displayName:"Header__Wrapper",componentId:"sc-1eynnyi-0"})(["max-width:720px;left:0;right:0;margin:0 auto;padding:0 1rem;"]),s=function(e){return r.a.createElement(i.Link,Object.assign({getProps:function(e){return e.isPartiallyCurrent?{className:"active"}:null}},e))},m=o.a.span.withConfig({displayName:"Header__LinkContainer",componentId:"sc-1eynnyi-1"})(["display:inline-block;font-size:1rem;margin:1rem 1rem 1rem 0;& .active{font-weight:bold;color:","}"],l.brand),u=function(e){return r.a.createElement(c,null,r.a.createElement("nav",null,r.a.createElement(m,null,r.a.createElement(i.Link,{to:"/",activeClassName:"active"},"/home/fsi")),r.a.createElement(m,null,r.a.createElement(s,{to:"/posts",activeClassName:"active"},"~/posts")),r.a.createElement(m,null,r.a.createElement("strike",null,r.a.createElement("a",{href:"/cv.en.html"},"~/hire"))),r.a.createElement(m,null,r.a.createElement(i.Link,{to:"/license",activeClassName:"active"},"~/license"))))};n.d(t,"a",function(){return u})},151:function(e,t,n){var a=n(25),r=n(24),o=n(26),i=/"/g,l=function(e,t,n,a){var r=String(o(e)),l="<"+t;return""!==n&&(l+=" "+n+'="'+String(a).replace(i,"&quot;")+'"'),l+">"+r+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(l),a(a.P+a.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",n)}},152:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var a=n(153),r=n(0),o=n.n(r),i=n(158),l=n.n(i),c=n(33),s=function(e){var t=e.description,n=e.lang,r=void 0===n?"en":n,i=e.meta,s=void 0===i?[]:i,u=e.keywords,d=void 0===u?[]:u,p=e.title;return o.a.createElement(c.StaticQuery,{query:m,render:function(e){var n=e.site.siteMetadata;return o.a.createElement(l.a,{htmlAttributes:{lang:r},title:p,defaultTitle:n.title,titleTemplate:"%s | "+n.title,meta:[{name:"description",content:t||n.description},{property:"og:title",content:p},{property:"og:description",content:t||n.description},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:n.author},{name:"twitter.title",content:p},{name:"twitter.description",content:t||n.description}].concat(d.length>0?{name:"keywords",content:d.join(", ")}:[]).concat(s)})},data:a})},m="4122388860"},153:function(e){e.exports={data:{site:{siteMetadata:{title:"fsis.site 🐴",description:"fsi's personal site and blog",author:"Ivan Firsov",social:{twitter:"https://twitter.com/das_fsi"}}}}}},155:function(e,t,n){"use strict";n(151)("link",function(e){return function(t){return e(this,"a","href",t)}})},156:function(e,t,n){"use strict";n(151)("small",function(e){return function(){return e(this,"small","","")}})},157:function(e,t,n){"use strict";n(155),n(156);var a=n(0),r=n.n(a),o=n(33),i=n(147),l=i.a.p.withConfig({displayName:"Post__PostHeader",componentId:"sc-2zlp4p-0"})(["display:flex;justify-content:space-between;font-weight:bold;align-items:flex-start;& > a{text-decoration:none;}"]),c=i.a.small.withConfig({displayName:"Post__PostHeaderDate",componentId:"sc-2zlp4p-1"})(["font-size:0.5em;margin:0 1em;opacity:0.5;min-width:10em;align-self:center;&:before{content:'[';}&:after{content:']';}"]),s=function(e){var t=e.title,n=e.link,a=(e.excerpt,e.date);return r.a.createElement("article",null,r.a.createElement(l,null,r.a.createElement(o.Link,{to:n},t||"Untitled post"),r.a.createElement(c,null,a)))};n.d(t,"a",function(){return s})},159:function(e,t,n){"use strict";var a=n(148),r=n(0),o=n.n(r),i=n(1),l=n.n(i),c=n(150),s=n(33),m=(n(149),function(e){var t=e.children;e.location;return o.a.createElement(s.StaticQuery,{query:"755544856",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(c.a,null),o.a.createElement("main",null,t),o.a.createElement("footer",null,"© ",o.a.createElement("a",{href:"https://github.com/fsi"},"FSi")," 2019"))},data:a})});m.propTypes={children:l.a.node.isRequired},t.a=m},160:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var a=n(161),r=n(0),o=n.n(r),i=n(33),l=n(157),c=function(){return o.a.createElement(i.StaticQuery,{query:"484868083",render:function(e){return o.a.createElement(o.a.Fragment,null,e.allMdx.edges.map(function(e){var t=e.node;return o.a.createElement(l.a,{key:t.id,link:t.fields.slug,title:t.frontmatter.title,date:t.frontmatter.postedAt,excerpt:t.excerpt})}))},data:a})}},161:function(e){e.exports={data:{allMdx:{edges:[{node:{id:"e0294c24-f71f-5cb2-8b02-e9d17b6f7e5d",fields:{slug:"/posts/2019-11-16/"},frontmatter:{title:"Middle of November",postedAt:"November 16, 2019"},excerpt:"Programming Laser-Based Audio Injection on Voice-Controllable Systems TL;DR: By shining the laser through the window at microphones inside…"}},{node:{id:"54db9063-7f82-530c-8d49-ca619a89d891",fields:{slug:"/posts/2019-11-01/"},frontmatter:{title:"End of October Spooky Post",postedAt:"October 31, 2019"},excerpt:"Real life: happens. Me: Programming XML is almost always misused Articles Exfiltrating information using the light sensor Might not sound…"}},{node:{id:"f1538b5e-8dfc-5231-b5da-f70f04f4dd38",fields:{slug:"/posts/2019-10-13/"},frontmatter:{title:"Untitled Goose Post",postedAt:"October 13, 2019"},excerpt:"Programming CollapseOS TL;DR: Someone is making an 8-bit OS  just in case  to be useful in  post-collapse scenarios . With a copy of this…"}}]}}}}}]);
//# sourceMappingURL=component---src-pages-index-mdx-2958d96728aae5f75cda.js.map