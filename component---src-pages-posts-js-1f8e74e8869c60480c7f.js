(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{146:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(147),i=n(154),s=n(183),l=n(33),d=n(157),c=function(){return o.a.createElement(l.StaticQuery,{query:"1946404668",render:function(e){return o.a.createElement(o.a.Fragment,null,e.allMdx.edges.map(function(e){var t=e.node;return o.a.createElement(d.a,{key:t.id,link:t.fields.slug,title:t.frontmatter.title,date:t.frontmatter.postedAt,excerpt:t.excerpt})}))},data:s})},m=n(152),u=r.a.aside.withConfig({displayName:"posts__RSSAside",componentId:"sc-1e9pmy1-0"})(["float:right;"]);t.default=function(){return o.a.createElement(i.b,null,o.a.createElement(m.a,{title:"Posts archive",description:"fsis.site posts archive"}),o.a.createElement(u,null,o.a.createElement("a",{href:"/feed.xml"},"RSS feed")),o.a.createElement("h1",null,"Posts archive"),o.a.createElement(c,null))}},148:function(e){e.exports={data:{site:{siteMetadata:{title:"fsis.site 🐴"}}}}},149:function(e,t,n){},150:function(e,t,n){"use strict";n(52);var a=n(0),o=n.n(a),r=n(147),i=n(33),s={brand:"#da5f51",fade:"#848586",background:"#eee0cb",backgroundAlt:"#baa898",bodyText:"#280003",headerText:"#da5f51"},l=r.a.header.withConfig({displayName:"Header__Wrapper",componentId:"sc-1eynnyi-0"})(["max-width:720px;left:0;right:0;margin:0 auto;padding:0 1rem;"]),d=function(e){return o.a.createElement(i.Link,Object.assign({getProps:function(e){return e.isPartiallyCurrent?{className:"active"}:null}},e))},c=r.a.span.withConfig({displayName:"Header__LinkContainer",componentId:"sc-1eynnyi-1"})(["display:inline-block;font-size:1rem;margin:1rem 1rem 1rem 0;& .active{font-weight:bold;color:","}"],s.brand),m=function(e){return o.a.createElement(l,null,o.a.createElement("nav",null,o.a.createElement(c,null,o.a.createElement(i.Link,{to:"/",activeClassName:"active"},"/home/fsi")),o.a.createElement(c,null,o.a.createElement(d,{to:"/posts",activeClassName:"active"},"~/posts")),o.a.createElement(c,null,o.a.createElement("strike",null,o.a.createElement("a",{href:"/cv.en.html"},"~/hire"))),o.a.createElement(c,null,o.a.createElement(i.Link,{to:"/license",activeClassName:"active"},"~/license"))))};n.d(t,"a",function(){return m})},151:function(e,t,n){var a=n(25),o=n(24),r=n(26),i=/"/g,s=function(e,t,n,a){var o=String(r(e)),s="<"+t;return""!==n&&(s+=" "+n+'="'+String(a).replace(i,"&quot;")+'"'),s+">"+o+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(s),a(a.P+a.F*o(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",n)}},152:function(e,t,n){"use strict";n.d(t,"a",function(){return d});var a=n(153),o=n(0),r=n.n(o),i=n(158),s=n.n(i),l=n(33),d=function(e){var t=e.description,n=e.lang,o=void 0===n?"en":n,i=e.meta,d=void 0===i?[]:i,m=e.keywords,u=void 0===m?[]:m,p=e.title;return r.a.createElement(l.StaticQuery,{query:c,render:function(e){var n=e.site.siteMetadata;return r.a.createElement(s.a,{htmlAttributes:{lang:o},title:p,defaultTitle:n.title,titleTemplate:"%s | "+n.title,meta:[{name:"description",content:t||n.description},{property:"og:title",content:p},{property:"og:description",content:t||n.description},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:n.author},{name:"twitter.title",content:p},{name:"twitter.description",content:t||n.description}].concat(u.length>0?{name:"keywords",content:u.join(", ")}:[]).concat(d)})},data:a})},c="4122388860"},153:function(e){e.exports={data:{site:{siteMetadata:{title:"fsis.site 🐴",description:"fsi's personal site and blog",author:"Ivan Firsov",social:{twitter:"https://twitter.com/das_fsi"}}}}}},154:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var a=n(148),o=n(0),r=n.n(o),i=n(1),s=n.n(i),l=n(150),d=n(33),c=(n(149),function(e){var t=e.children;e.location;return r.a.createElement(d.StaticQuery,{query:"755544856",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,null),r.a.createElement("main",null,t),r.a.createElement("footer",null,"© ",r.a.createElement("a",{href:"https://github.com/fsi"},"FSi")," 2019"))},data:a})});c.propTypes={children:s.a.node.isRequired},t.b=c},155:function(e,t,n){"use strict";n(151)("link",function(e){return function(t){return e(this,"a","href",t)}})},156:function(e,t,n){"use strict";n(151)("small",function(e){return function(){return e(this,"small","","")}})},157:function(e,t,n){"use strict";n(155),n(156);var a=n(0),o=n.n(a),r=n(33),i=n(147),s=i.a.p.withConfig({displayName:"Post__PostHeader",componentId:"sc-2zlp4p-0"})(["display:flex;justify-content:space-between;font-weight:bold;align-items:flex-start;& > a{text-decoration:none;}"]),l=i.a.small.withConfig({displayName:"Post__PostHeaderDate",componentId:"sc-2zlp4p-1"})(["font-size:0.5em;margin:0 1em;opacity:0.5;min-width:10em;align-self:center;&:before{content:'[';}&:after{content:']';}"]),d=function(e){var t=e.title,n=e.link,a=(e.excerpt,e.date);return o.a.createElement("article",null,o.a.createElement(s,null,o.a.createElement(r.Link,{to:n},t||"Untitled post"),o.a.createElement(l,null,a)))};n.d(t,"a",function(){return d})},183:function(e){e.exports={data:{allMdx:{edges:[{node:{id:"54db9063-7f82-530c-8d49-ca619a89d891",fields:{slug:"/posts/2019-11-01/"},frontmatter:{title:"End of October Spooky Post",postedAt:"October 31, 2019"},excerpt:"Real life: happens. Me: Programming XML is almost always misused Articles Exfiltrating information using the light sensor Might not sound…"}},{node:{id:"f1538b5e-8dfc-5231-b5da-f70f04f4dd38",fields:{slug:"/posts/2019-10-13/"},frontmatter:{title:"Untitled Goose Post",postedAt:"October 13, 2019"},excerpt:"Programming CollapseOS TL;DR: Someone is making an 8-bit OS  just in case  to be useful in  post-collapse scenarios . With a copy of this…"}},{node:{id:"ab59650b-175e-58b6-afd6-34498048c789",fields:{slug:"/posts/2019-09-30/"},frontmatter:{title:"Are plants intelligent enough to use PHP?",postedAt:"September 30, 2019"},excerpt:"Programming No, PHP doesn't have closures Articles WeWork and Counterfeit Capitalism What if Planet 9 is a Primordial Black Hole? What…"}},{node:{id:"785486e8-da7d-5dc1-a59d-95576771327a",fields:{slug:"/posts/2019-09-23/"},frontmatter:{title:"Folding paper globes and simulated universe",postedAt:"September 23, 2019"},excerpt:"...and this time the post is small-ish (and a week delayed) because I suddenly got sick (well, not suddenly, it was all because I spent a…"}},{node:{id:"bcc085b0-7c87-51d6-bd30-469e9cdd2608",fields:{slug:"/posts/2019-09-08/"},frontmatter:{title:"Moscow Music Week report and some links",postedAt:"September 08, 2019"},excerpt:"Shorter one this time, for I was attending Moscow Music Week. It's a festival here in Moscow, with quite a few places and performances (that…"}},{node:{id:"7487267c-be78-592e-b91b-aeee402dcdcc",fields:{slug:"/posts/2019-09-01/"},frontmatter:{title:"Another digest",postedAt:"September 01, 2019"},excerpt:"Aaand back to our regularly scheduled program. Speaking of programming... Programming Rabbit holes TL;DR: how ubuntu generates its motd is…"}},{node:{id:"afdafb52-f554-5c13-bf63-c54cde6e8b8b",fields:{slug:"/posts/2019-08-26/"},frontmatter:{title:"August travels",postedAt:"August 26, 2019"},excerpt:"Here's a brief log of my travels to make up for all the missed posts (as I, in fact, pledged to post once a week or so). Brutal Assault…"}},{node:{id:"d78a5742-c50b-5526-80d4-2801b51c0f53",fields:{slug:"/posts/2019-08-04/"},frontmatter:{title:"Light Sail, OH GOD WHY and some grindcore",postedAt:"August 04, 2019"},excerpt:"Articles LightSail2 is working! A nuclear war might make crops stop growing, so we need a backup plan. TL;DR: prepping for the apocalypse…"}},{node:{id:"fc55db10-33eb-5fa3-8fdb-49f7e5c194d2",fields:{slug:"/posts/2019-07-27/"},frontmatter:{title:"Marble, dungeons and quantum darwinism",postedAt:"July 27, 2019"},excerpt:"First off, some updates: I've removed the Google Fonts dependency. Uses a couple of self-hosted fonts with system fallback now. Small visual…"}},{node:{id:"c3a8c696-5b32-5293-87a4-2a8639f0626c",fields:{slug:"/posts/2019-07-21/"},frontmatter:{title:"The best medieval snails rendering bicycle supernests in human skin",postedAt:"July 21, 2019"},excerpt:"Programming The Best Refactoring You've Never Heard Of TL;DR: defunctionalize the continuation! The PGP Problem TL;DR: no solution in sight…"}},{node:{id:"342f0f82-978c-54f4-96a2-093bb3734ea5",fields:{slug:"/posts/2019-07-13/"},frontmatter:{title:"Ottoman floating point zip bombs on the moon",postedAt:"July 13, 2019"},excerpt:"Programming Floating point routines for 6502 by Woz (direct link) A better zip bomb ;\n NON-RECURSIVE  zip-bombs that extract from 42 kB to…"}},{node:{id:"a70cccf7-5c06-5cf1-8935-cc6bf611da93",fields:{slug:"/posts/2019-07-09/"},frontmatter:{title:"Live-coding long-term lewd asshole torture storage",postedAt:"July 09, 2019"},excerpt:"Programming Live coding a vi for CP/M, from scratch Somewhat related (and ancient),  Linux on an 8-bit micro \nby emulating an ARM processor…"}},{node:{id:"504a4a77-fc60-5854-85a2-601fc04b4026",fields:{slug:"/posts/2019-06-29/"},frontmatter:{title:"Don't take fractal fireball notes written in FORTH",postedAt:"June 29, 2019"},excerpt:"Programming 1991: A SERVER-SIDE WEB FRAMEWORK WRITTEN IN FORTH ,  github BECAUSE OF COURSE Articles Don't take notes with a laptop TL;DR…"}},{node:{id:"f338a9cb-f7fc-56de-bd01-d72cea1b0aef",fields:{slug:"/posts/2019-06-16/"},frontmatter:{title:"Next level mead and honey outcome of amateur opossum romance",postedAt:"June 16, 2019"},excerpt:"Programming Next level fork bomb WARNING : it's a fork bomb, don't paste it anywhere! TL;DR: a fork bomb with a couple extra layers of…"}},{node:{id:"87736a71-43b1-5c4a-8936-4ffdcab6a376",fields:{slug:"/posts/2019-06-12/"},frontmatter:{title:"Russian independence day special",postedAt:"June 12, 2019"},excerpt:"Programming On Dat:// TL;DR: Dat is a distributed web network, and this post talks about building a clone of an old (and dead) mixtape…"}},{node:{id:"59be2049-28d5-5b74-93e4-7372510d0a91",fields:{slug:"/posts/2019-06-08/"},frontmatter:{title:"Horrifying Satanic Space Colonies: Odyssey",postedAt:"June 08, 2019"},excerpt:"Programming Horrifying PDF experiments e.g.  breakout Articles How to Join a Social Network in 1998 TL;DR you mail them CSV of your friends…"}},{node:{id:"422e57a5-c472-5c56-a633-cf2416a996b1",fields:{slug:"/posts/2019-04-14/"},frontmatter:{title:"Bizzarre Japanese sorting and exploding things",postedAt:"April 14, 2019"},excerpt:"Programming Sorting in Japanese  is  hard There are four Japanese women whose names you have to sort: Junko, Atsuko, Kiyoko, and Akiko. This…"}},{node:{id:"c1fe8c2e-b827-5a21-b07d-60a938a7aa4b",fields:{slug:"/posts/2019-04-09/"},frontmatter:{title:"Can't unsee these insecure Wordpress plugins",postedAt:"April 09, 2019"},excerpt:"Programming Water is still wet. In other news, wordpress plugin ecosystem is still  trash  a ball of slimy writhing unspeakable horrors. one…"}},{node:{id:"ed6565f3-27f2-55cc-bcef-069c69f9623b",fields:{slug:"/posts/2019-03-31/"},frontmatter:{title:"Garfield phones, x-ray records and phone tombs",postedAt:"March 31, 2019"},excerpt:"Programming Exercises in Emulation: Xbox 360’s FMA Instruction Articles (quote)  Algorithmic recommendations   ...  are failing users by…"}},{node:{id:"f7899f55-fdef-532e-bb7c-d8d97e1fa028",fields:{slug:"/posts/2019-03-17/"},frontmatter:{title:"Doom, Fire and Wombats",postedAt:"March 17, 2019"},excerpt:'Programming How Doom fire was done A short and to the point tutorial. ("Doom" here refers to PSX and N64 Doom ports) Articles Going old…'}},{node:{id:"e7c60af8-d31e-5cb4-8d45-9bb8ff0dbaf4",fields:{slug:"/posts/2019-03-10/"},frontmatter:{title:"I should probably change the design and remove these titles",postedAt:"March 10, 2019"},excerpt:"Programming Wave Function Collapse An algorihtm that generates bitmaps that are locally similar to the input bitmap. Can be used for e.g…"}},{node:{id:"4231b552-e15b-5668-966e-ba61acd11882",fields:{slug:"/posts/2019-03-03/"},frontmatter:{title:"Smallish one this time",postedAt:"March 03, 2019"},excerpt:"Programming Why Don't People Use Formal Methods (because they are normally not worth the investment) Articles ETS isn't TLS and you should…"}},{node:{id:"7f873f94-2e08-52a4-88a5-5e7a49295f4e",fields:{slug:"/posts/2019-02-24/"},frontmatter:{title:"Links and updates",postedAt:"February 24, 2019"},excerpt:"Programming C is Not a Low-level Language All programming languages are abstractions, in some way.\nEven simplistic ones, like C and x8…"}},{node:{id:"5c1b4783-9d20-5581-adf1-1ae2f7caddb8",fields:{slug:"/posts/2019-02-19/"},frontmatter:{title:"Links and updates",postedAt:"February 19, 2019"},excerpt:"In this post, I will try and gather some interesting stuff I found around the internets. Event sourcing is hard .\nI used to work on an large…"}},{node:{id:"e9a5e894-cf73-533c-893a-9adecede041a",fields:{slug:"/posts/2019-01-26_first/"},frontmatter:{title:"Hello",postedAt:"January 26, 2019"},excerpt:"Hello and welcome to my  personal space , where I will probably post random links for, like, two people to notice. I made it using  gatsby…"}}]}}}}}]);
//# sourceMappingURL=component---src-pages-posts-js-1f8e74e8869c60480c7f.js.map