(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{143:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return f}),n.d(t,"_frontmatter",function(){return g});n(52);var a=n(74),r=n.n(a),i=n(6),o=n.n(i),l=n(0),s=n.n(l),c=n(53),m=n(159),u=(n(33),n(152)),d=n(160),p={},f=function(e){function t(t){var n;return(n=e.call(this,t)||this).layout=m.a,n}return o()(t,e),t.prototype.render=function(){var e=this.props,t=e.components,n=r()(e,["components"]);return s.a.createElement(c.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},p,n),components:t},s.a.createElement(u.a,{title:"Welcome"}),s.a.createElement(c.MDXTag,{name:"h1",components:t},"Welcome"),s.a.createElement(c.MDXTag,{name:"p",components:t},"Hello and welcome to my personal space, where I will probably post random links for, like, two people to notice."),s.a.createElement(c.MDXTag,{name:"h2",components:t},"Recent posts ",s.a.createElement("small",null,"(",s.a.createElement("a",{href:"/feed.xml"},"rss"),")")),s.a.createElement(d.a,null),s.a.createElement(c.MDXTag,{name:"h2",components:t},"Social"),s.a.createElement(c.MDXTag,{name:"ul",components:t},s.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},s.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://twitter.com/das_fsi"}},"twitter")),s.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},s.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://github.com/fsi"}},"github"))))},t}(s.a.Component),g={}},148:function(e){e.exports={data:{site:{siteMetadata:{title:"fsis.site 🐴"}}}}},149:function(e,t,n){},150:function(e,t,n){"use strict";n(52);var a=n(0),r=n.n(a),i=n(147),o=n(33),l={brand:"#da5f51",fade:"#848586",background:"#eee0cb",backgroundAlt:"#baa898",bodyText:"#280003",headerText:"#da5f51"},s=i.a.header.withConfig({displayName:"Header__Wrapper",componentId:"sc-1eynnyi-0"})(["max-width:720px;left:0;right:0;margin:0 auto;padding:0 1rem;"]),c=function(e){return r.a.createElement(o.Link,Object.assign({getProps:function(e){return e.isPartiallyCurrent?{className:"active"}:null}},e))},m=i.a.span.withConfig({displayName:"Header__LinkContainer",componentId:"sc-1eynnyi-1"})(["display:inline-block;font-size:1rem;margin:1rem 1rem 1rem 0;& .active{font-weight:bold;color:","}"],l.brand),u=function(e){return r.a.createElement(s,null,r.a.createElement("nav",null,r.a.createElement(m,null,r.a.createElement(o.Link,{to:"/",activeClassName:"active"},"/home/fsi")),r.a.createElement(m,null,r.a.createElement(c,{to:"/posts",activeClassName:"active"},"~/posts")),r.a.createElement(m,null,r.a.createElement("strike",null,r.a.createElement("a",{href:"/cv.en.html"},"~/hire"))),r.a.createElement(m,null,r.a.createElement(o.Link,{to:"/license",activeClassName:"active"},"~/license"))))};n.d(t,"a",function(){return u})},151:function(e,t,n){var a=n(25),r=n(24),i=n(26),o=/"/g,l=function(e,t,n,a){var r=String(i(e)),l="<"+t;return""!==n&&(l+=" "+n+'="'+String(a).replace(o,"&quot;")+'"'),l+">"+r+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(l),a(a.P+a.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",n)}},152:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var a=n(153),r=n(0),i=n.n(r),o=n(158),l=n.n(o),s=n(33),c=function(e){var t=e.description,n=e.lang,r=void 0===n?"en":n,o=e.meta,c=void 0===o?[]:o,u=e.keywords,d=void 0===u?[]:u,p=e.title;return i.a.createElement(s.StaticQuery,{query:m,render:function(e){var n=e.site.siteMetadata;return i.a.createElement(l.a,{htmlAttributes:{lang:r},title:p,defaultTitle:n.title,titleTemplate:"%s | "+n.title,meta:[{name:"description",content:t||n.description},{property:"og:title",content:p},{property:"og:description",content:t||n.description},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:n.author},{name:"twitter.title",content:p},{name:"twitter.description",content:t||n.description}].concat(d.length>0?{name:"keywords",content:d.join(", ")}:[]).concat(c)})},data:a})},m="4122388860"},153:function(e){e.exports={data:{site:{siteMetadata:{title:"fsis.site 🐴",description:"fsi's personal site and blog",author:"Ivan Firsov",social:{twitter:"https://twitter.com/das_fsi"}}}}}},155:function(e,t,n){"use strict";n(151)("link",function(e){return function(t){return e(this,"a","href",t)}})},156:function(e,t,n){"use strict";n(151)("small",function(e){return function(){return e(this,"small","","")}})},157:function(e,t,n){"use strict";n(155),n(156);var a=n(0),r=n.n(a),i=n(33),o=n(147),l=o.a.p.withConfig({displayName:"Post__PostHeader",componentId:"sc-2zlp4p-0"})(["display:flex;justify-content:space-between;font-weight:bold;align-items:flex-start;& > a{text-decoration:none;}"]),s=o.a.small.withConfig({displayName:"Post__PostHeaderDate",componentId:"sc-2zlp4p-1"})(["font-size:0.5em;margin:0 1em;opacity:0.5;min-width:10em;align-self:center;&:before{content:'[';}&:after{content:']';}"]),c=function(e){var t=e.title,n=e.link,a=(e.excerpt,e.date);return r.a.createElement("article",null,r.a.createElement(l,null,r.a.createElement(i.Link,{to:n},t||"Untitled post"),r.a.createElement(s,null,a)))};n.d(t,"a",function(){return c})},159:function(e,t,n){"use strict";var a=n(148),r=n(0),i=n.n(r),o=n(1),l=n.n(o),s=n(150),c=n(33),m=(n(149),function(e){var t=e.children;e.location;return i.a.createElement(c.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(s.a,null),i.a.createElement("main",null,t),i.a.createElement("footer",null,"© ",i.a.createElement("a",{href:"https://github.com/fsi"},"FSi")," 2019"))},data:a})});m.propTypes={children:l.a.node.isRequired},t.a=m},160:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var a=n(161),r=n(0),i=n.n(r),o=n(33),l=n(157),s=function(){return i.a.createElement(o.StaticQuery,{query:"484868083",render:function(e){return i.a.createElement(i.a.Fragment,null,e.allMdx.edges.map(function(e){var t=e.node;return i.a.createElement(l.a,{key:t.id,link:t.fields.slug,title:t.frontmatter.title,date:t.frontmatter.postedAt,excerpt:t.excerpt})}))},data:a})}},161:function(e){e.exports={data:{allMdx:{edges:[{node:{id:"f1538b5e-8dfc-5231-b5da-f70f04f4dd38",fields:{slug:"/posts/2019-10-13/"},frontmatter:{title:"Untitled Goose Post",postedAt:"October 13, 2019"},excerpt:"Programming CollapseOS TL;DR: Someone is making an 8-bit OS  just in case  to be useful in  post-collapse scenarios . With a copy of this…"}},{node:{id:"ab59650b-175e-58b6-afd6-34498048c789",fields:{slug:"/posts/2019-09-30/"},frontmatter:{title:"Are plants intelligent enough to use PHP?",postedAt:"September 30, 2019"},excerpt:"Programming No, PHP doesn't have closures Articles WeWork and Counterfeit Capitalism What if Planet 9 is a Primordial Black Hole? What…"}},{node:{id:"785486e8-da7d-5dc1-a59d-95576771327a",fields:{slug:"/posts/2019-09-23/"},frontmatter:{title:"Folding paper globes and simulated universe",postedAt:"September 23, 2019"},excerpt:"...and this time the post is small-ish (and a week delayed) because I suddenly got sick (well, not suddenly, it was all because I spent a…"}}]}}}}}]);
//# sourceMappingURL=component---src-pages-index-mdx-8ac9e17757b4bc62b8fd.js.map