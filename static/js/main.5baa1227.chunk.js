(this["webpackJsonpreact-orama"]=this["webpackJsonpreact-orama"]||[]).push([[0],{135:function(e,t,a){"use strict";a.r(t);var i=a(1),n=a.n(i),c=a(49),s=a.n(c),r=(a(70),a(15)),o=a(0),l=function(e){var t=e.navItems.map((function(e){return Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link",children:e.name})},e.name)})),a=Object(i.useState)("transparent"),n=Object(r.a)(a,2),c=n[0],s=n[1],l=function(){window.pageYOffset>100?s("#C7F1ED"):s("transparent")};return Object(i.useEffect)((function(){return window.addEventListener("scroll",l),function(){window.removeEventListener("scroll",l)}}),[]),Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light fixed-top oramaNav",style:{backgroundColor:"".concat(c)},children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)("a",{className:"navbar-brand oramaNav-icon",href:"#",children:Object(o.jsx)("img",{src:"/oramaWeb/imgs/oramadick.png",width:"40",height:"40",style:{right:"50%"}})}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarColor03","aria-controls":"navbarColor03","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsx)("div",{className:"collapse navbar-collapse oramaNav-menu",id:"navbarColor03",children:Object(o.jsxs)("ul",{className:"navbar-nav ms-auto",children:[t,Object(o.jsxs)("li",{className:"nav-item dropdown",children:[Object(o.jsx)("a",{className:"nav-link dropdown-toggle","data-bs-toggle":"dropdown",href:"#",role:"button","aria-haspopup":"true","aria-expanded":"false",children:"Dropdown"}),Object(o.jsxs)("div",{className:"dropdown-menu sub-nav",children:[Object(o.jsx)("a",{className:"dropdown-item sub-nav-box",href:"#",children:"Action"}),Object(o.jsx)("a",{className:"dropdown-item sub-nav-box",href:"#",children:"Another action"}),Object(o.jsx)("a",{className:"dropdown-item sub-nav-box",href:"#",children:"Something else here"}),Object(o.jsx)("a",{className:"dropdown-item sub-nav-box",href:"#",children:"Separated link"})]})]})]})})]})})};var d=function(e){var t=e.infoContent.pic?Object(o.jsx)("div",{className:"col-xs-12 col-md-6 imgBox",children:Object(o.jsx)("img",{src:e.infoContent.pic.url,alt:"pic"})}):null,a=e.infoContent.title?Object(o.jsx)("h1",{children:e.infoContent.title}):null,i=e.infoContent.intro?Object(o.jsx)("h4",{children:e.infoContent.intro}):null,n=e.infoContent.list?e.infoContent.list.map((function(e,t){return Object(o.jsx)("li",{children:Object(o.jsx)("h5",{children:e})},t)})):null,c=Object(o.jsx)("ul",{children:n}),s="left"==e.infoContent.pic.position?Object(o.jsx)("div",{className:"infoWithPic",children:Object(o.jsxs)("div",{className:"row",children:[t,Object(o.jsx)("div",{className:"col-xs-12 col-md-6 content-box",children:Object(o.jsxs)("div",{className:"content",children:[a,i,c]})})]})}):Object(o.jsxs)("div",{className:"infoWithPic",children:[Object(o.jsx)("div",{className:"content-box",children:Object(o.jsxs)("div",{className:"content",children:[a,i,c]})}),t]});return Object(o.jsx)("div",{className:"oramaInfoPic-box",style:{backgroundColor:e.infoContent.backgroundColor},children:Object(o.jsx)("div",{className:"oramaInfoPicContainer",children:s})})},j=a(161),m=a(155),h=a(157),b=a(160),u=a(159),x=a(156);var O=function(){var e=[1,2].map((function(e,t){return Object(o.jsx)(m.a,{item:!0,container:!0,xs:12,md:6,justifyContent:"center",children:Object(o.jsxs)(h.a,{sx:{maxWidth:500,borderRadius:"15px"},children:[Object(o.jsx)(u.a,{component:"img",height:"140",image:"/oramaWeb/imgs/CAN-tech.png",alt:"CAN tech"}),Object(o.jsxs)(b.a,{children:[Object(o.jsx)(x.a,{gutterBottom:!0,variant:"h5",component:"div",children:"CAN - Creative adversarial network"}),Object(o.jsx)(x.a,{variant:"h6",color:"text.secondary",children:"CAN, namely creative adversarial network. CANs are architected in almost the same way as GANs, but with one key addition that allows the generator to \u201cthink\u201d creatively."})]})]})})})),t=Object(i.useState)(0),a=Object(r.a)(t,2);return a[0],a[1],Object(o.jsx)("div",{className:"cardInfo-box",children:Object(o.jsx)("div",{className:"cardInfo-content-box",children:Object(o.jsx)(j.a,{sx:{flexGrow:1},justifyContent:"center",children:Object(o.jsx)(m.a,{container:!0,spacing:2,justifyContent:"center",children:e})})})})},p=a(5),v=a(52),g=a(53),f=a(58),N=a(57),k=a(19),y=a(54),w=a.n(y);function C(e){var t=e.className,a=e.style,i=e.onClick;return Object(o.jsx)("div",{className:t,style:Object(k.a)(Object(k.a)({},a),{},{display:"block",background:"#ECF0F1"}),onClick:i})}i.Component;var A=function(e){var t=Object(i.useRef)(null),a=Object(i.useState)({x:0,y:0,angle:0}),n=Object(r.a)(a,2),c=n[0],s=n[1];return Object(i.useEffect)((function(){var e=function(e){var a=t.current.getBoundingClientRect(),i=a.x+a.width/2,n=a.y+a.height/2,c=i-e.clientX,r=n-e.clientY,o=c<0?Math.atan(r/c):Math.atan(r/c)+3.1416;s({x:c,y:r,angle:o})};return window.addEventListener("mousemove",e),function(){window.removeEventListener("mousemove",e)}}),[]),Object(o.jsx)("div",{className:"top-box",children:Object(o.jsxs)("div",{className:"mainTitle",children:[Object(o.jsxs)("div",{className:"picAndText",children:[Object(o.jsx)("img",{src:"/oramaWeb/imgs/oramadick.png",width:"50",height:"50",ref:t,style:{transform:"rotate(".concat(c.angle,"rad)"),backgroundColor:"blue"}}),Object(o.jsx)("span",{style:{fontSize:50},children:"rama"})]}),Object(o.jsx)("h2",{children:"The future of NTF's"}),Object(o.jsxs)("p",{children:["x:",c.x,", y:",c.y]})]})})},T=a(26),F=a(28),I=a(16),B=a(158);var S=function(){return Object(I.a)(B.a)((function(e){var t=e.theme;return Object(k.a)(Object(k.a)({},t.typography.body2),{},{padding:t.spacing(1),textAlign:"center",width:"80%",color:t.palette.text.secondary})})),Object(o.jsxs)("div",{className:"oramaFooter-box",children:[Object(o.jsx)("div",{className:"orama-bottom-box",style:{paddingBottom:"5em"},children:Object(o.jsxs)("div",{className:"social-box",children:[Object(o.jsx)("h2",{style:{paddingBottom:"30px"},children:"Follow Us:"}),Object(o.jsx)("a",{className:"social",href:"#",children:Object(o.jsx)(T.a,{icon:F.c,size:"4x"})}),Object(o.jsx)("a",{className:"social",href:"#",children:Object(o.jsx)(T.a,{icon:F.b,size:"4x"})}),Object(o.jsx)("a",{className:"social",href:"https://www.twitter.com",children:Object(o.jsx)(T.a,{icon:F.d,size:"4x"})}),Object(o.jsx)("a",{className:"social",href:"#",children:Object(o.jsx)(T.a,{icon:F.a,size:"4x"})})]})}),Object(o.jsx)("div",{className:"oramaFooter-info-box",children:Object(o.jsx)(j.a,{sx:{flexGrow:1},children:Object(o.jsxs)(m.a,{container:!0,spacing:2,children:[Object(o.jsx)(m.a,{item:!0,xs:12,md:3,children:Object(o.jsxs)("div",{className:"oramaFooter-bank",children:[Object(o.jsx)("h6",{style:{paddingBottom:"1em"},children:"News"}),Object(o.jsx)("p",{children:"Announcement"})]})}),Object(o.jsx)(m.a,{item:!0,xs:12,md:3,children:Object(o.jsxs)("div",{className:"oramaFooter-bank",children:[Object(o.jsx)("h6",{style:{paddingBottom:"1em"},children:"Developer"}),Object(o.jsx)("p",{children:"Gitbook"}),Object(o.jsx)("p",{children:"Github"})]})}),Object(o.jsx)(m.a,{item:!0,xs:12,md:3,children:Object(o.jsxs)("div",{className:"oramaFooter-bank",children:[Object(o.jsx)("h6",{style:{paddingBottom:"1em"},children:"Community"}),Object(o.jsx)("p",{children:"Twitter"}),Object(o.jsx)("p",{children:"Medium"}),Object(o.jsx)("p",{children:"WeChat"})]})}),Object(o.jsx)(m.a,{item:!0,xs:12,md:3,children:Object(o.jsxs)("div",{className:"oramaFooter-bank",children:[Object(o.jsx)("h6",{style:{paddingBottom:"1em"},children:"Community"}),Object(o.jsx)("p",{children:"Partner"}),Object(o.jsx)("p",{children:"Support"})]})})]})})})]})};function W(){var e=Object(i.useState)(!1),t=Object(r.a)(e,2),a=t[0],n=t[1],c=function(){window.pageYOffset>300?n(!0):n(!1)};return Object(i.useEffect)((function(){window.addEventListener("scroll",c)}),[]),Object(o.jsx)("div",{className:"scroll-to-top",children:a&&Object(o.jsx)("div",{onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},children:Object(o.jsx)("img",{src:"https://i.postimg.cc/44Ytsk8Z/top-arrow-emoj.png",alt:"Go to top"})})})}var E=function(){return[1,2,3,4,5].map((function(e){return Object(o.jsxs)("div",{className:"uk-timeline-item",children:[Object(o.jsx)("div",{className:"uk-timeline-icon",children:Object(o.jsx)("span",{className:"uk-badge",children:Object(o.jsx)("span",{"uk-icon":"check"})})}),Object(o.jsx)("div",{className:"uk-timeline-content",children:Object(o.jsxs)("div",{className:"uk-card uk-card-default uk-margin-medium-bottom uk-overflow-auto",children:[Object(o.jsx)("div",{className:"uk-card-header",children:Object(o.jsxs)("div",{className:"uk-grid-small uk-flex-middle","data-uk-grid":!0,children:[Object(o.jsx)("h3",{className:"uk-card-title",children:e}),Object(o.jsx)("span",{className:"uk-label uk-label-success uk-margin-auto-left",children:"Feature"})]})}),Object(o.jsx)("div",{className:"uk-card-body",children:Object(o.jsx)("p",{className:"uk-text-success",children:"Fully responsive timeline you can add to your UIkit 3 project"})})]})})]})})),Object(o.jsx)("div",{className:"orama-timeline-box",children:Object(o.jsxs)("div",{className:"uk-container uk-padding",children:[Object(o.jsx)("h1",{style:{paddingBottom:"0.5em"},children:"Timeline"}),Object(o.jsxs)("div",{className:"uk-timeline",children:[Object(o.jsx)("div",{className:"uk-timeline-item",children:Object(o.jsx)("div",{className:"uk-timeline-content",children:Object(o.jsxs)("div",{className:"uk-card uk-card-default uk-card-hover uk-margin-medium-bottom uk-overflow-auto",children:[Object(o.jsx)("div",{className:"uk-card-header",children:Object(o.jsx)("div",{className:"uk-grid-small uk-flex-middle","data-uk-grid":!0,children:Object(o.jsx)("h3",{className:"uk-card-title",children:"July 8"})})}),Object(o.jsx)("div",{className:"uk-card-body",children:Object(o.jsx)("p",{children:"Fully responsive timeline you can add to your UIkit 3 project"})})]})})}),Object(o.jsx)("div",{className:"uk-timeline-item",children:Object(o.jsx)("div",{className:"uk-timeline-content",children:Object(o.jsxs)("div",{className:"uk-card uk-card-default uk-card-hover uk-margin-medium-bottom uk-overflow-auto",children:[Object(o.jsx)("div",{className:"uk-card-header",children:Object(o.jsx)("div",{className:"uk-grid-small uk-flex-middle","data-uk-grid":!0,children:Object(o.jsx)("h3",{className:"uk-card-title",children:"July 7"})})}),Object(o.jsxs)("div",{className:"uk-card-body",children:[Object(o.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."}),Object(o.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."}),Object(o.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."})]})]})})}),Object(o.jsx)("div",{className:"uk-timeline-item-last",children:Object(o.jsx)("div",{className:"uk-timeline-content",children:Object(o.jsxs)("div",{className:"uk-card uk-card-default uk-card-hover uk-margin-medium-bottom uk-overflow-auto",children:[Object(o.jsx)("div",{className:"uk-card-header",children:Object(o.jsx)("div",{className:"uk-grid-small uk-flex-middle","data-uk-grid":!0,children:Object(o.jsx)("h3",{className:"uk-card-title",children:"July 6"})})}),Object(o.jsx)("div",{className:"uk-card-body",children:Object(o.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."})})]})})})]})]})})};var G=a(55),L=a.n(G);a(107);var P=function(){var e=[1,2,3,4,5].map((function(e){return Object(o.jsx)("div",{className:"card-box",children:Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("img",{className:"card-img-top",src:"/oramaWeb/imgs/cart.png",alt:"Card image cap"}),Object(o.jsxs)("div",{className:"card-body",children:[Object(o.jsxs)("h5",{className:"card-title",children:["Card ",e]}),Object(o.jsx)("p",{className:"card-text",children:"Some quick example text to build on the card title and make up the bulk of the card's content."})]})]})})}));return Object(o.jsx)("div",{className:" slideCard-box",children:Object(o.jsxs)("div",{className:"col-xs-12 col-md-10 slideCard",children:[Object(o.jsx)(L.a,{swipeable:!0,draggable:!0,showDots:!0,renderDotsOutside:!0,responsive:{desktop:{breakpoint:{max:3e3,min:1024},items:4,slidesToSlide:1},tablet:{breakpoint:{max:1080,min:800},items:2,slidesToSlide:1},mobile:{breakpoint:{max:464,min:0},items:1,slidesToSlide:1}},ssr:!0,keyBoardControl:!0,containerClass:"carousel-container",removeArrowOnDeviceType:["tablet","mobile"],itemClass:"carousel-item-padding-40-px",children:e}),";"]})})};var z=function(e){var t=e.data.text,a=e.data.title;return Object(o.jsx)("div",{className:"textOverPic-box",children:Object(o.jsx)("div",{className:"textOverPic",children:Object(o.jsxs)("div",{className:"content",children:[Object(o.jsx)("h1",{children:a}),Object(o.jsx)("h4",{children:t})]})})})};var R=function(){var e=[1,2,3,4].map((function(e,t){return Object(o.jsx)(m.a,{item:!0,container:!0,xs:6,md:3,justifyContent:"center",children:Object(o.jsx)("img",{src:"/oramaWeb/imgs/parterner1.png",style:{maxWidth:200}})})}));return Object(o.jsx)("div",{className:"picGrid-box",children:Object(o.jsxs)("div",{className:"picGrid-content-box",style:{textAlign:"center"},children:[Object(o.jsx)("div",{className:"picGrid-title",children:Object(o.jsx)("h1",{children:"Our Partners"})}),Object(o.jsx)(j.a,{sx:{flexGrow:1},justifyContent:"center",children:Object(o.jsx)(m.a,{container:!0,spacing:2,justifyContent:"center",children:e})})]})})};var D=function(){var e={backgroundColor:"#C7F1ED",width:"fit-content",display:"inline",paddingLeft:"0.2em",paddingRight:"0.2em",marginRight:"1em",marginBottom:"1em",borderRadius:"2px"},t=Object(o.jsx)("div",{children:Object(o.jsxs)(h.a,{style:{borderRadius:"5px",width:"90%",textAlign:"justify",border:"none",boxShadow:"none",margin:"auto"},children:[Object(o.jsxs)(b.a,{children:[Object(o.jsx)(x.a,{gutterBottom:!0,variant:"p",component:"div",style:e,children:"Business Insider"}),Object(o.jsx)(x.a,{gutterBottom:!0,variant:"p",component:"div",style:e,children:"Nov. 29th, 2021"}),Object(o.jsx)(x.a,{gutterBottom:!0,variant:"h5",component:"div",children:"How Orama Is Utilizing AI To Change The NFT Landscape For The Better"}),Object(o.jsx)(x.a,{variant:"h6",color:"text.secondary",children:"Orama is a one-stop solution that manages to cover many different characteristics pertaining to NFTs. At its core, there is a powerful engine that uses complex AI technology to make some truly unique, high-quality, authentic and novel artworks. It therefore utilizes technologies like GAN (Generative Adversarial Network) and CAN (Creative Adversarial Network) to accomplish this goal."})]}),Object(o.jsx)(u.a,{component:"img",height:"140",image:"/oramaWeb/imgs/news1.png",alt:"CAN tech",style:{maxWidth:"95%",margin:"auto",borderRadius:"5px"}})]})}),a=Object(o.jsx)(h.a,{style:{height:"250px",borderRadius:"5px",width:"90%",textAlign:"justify",border:"none",boxShadow:"none"},children:Object(o.jsxs)(b.a,{children:[Object(o.jsx)(x.a,{gutterBottom:!0,variant:"p",component:"div",style:e,children:"Market Watch"}),Object(o.jsx)(x.a,{gutterBottom:!0,variant:"p",component:"div",style:e,children:"Nov. 29th, 2021"}),Object(o.jsx)(x.a,{gutterBottom:!0,variant:"h5",component:"div",children:"Orama Uses AI Technology To Improve The NFT Sector"}),Object(o.jsx)(x.a,{variant:"h6",color:"text.secondary",children:"In recent news, many have been actively trying to improve the NFT sector in a variety of different ways. Orama is hence taking the next steps towards improving this already booming industry, and it is doing it with the implementation of cutting-edge AI (Artificial Intelligence) technology."})]})}),i=Object(o.jsx)(m.a,{item:!0,xs:12,md:6,container:!0,justifyContent:"center",children:t}),n=Object(o.jsxs)(m.a,{item:!0,xs:12,md:6,container:!0,justifyContent:"center",children:[a,a]});return Object(o.jsx)("div",{className:"OramaNews-box",children:Object(o.jsxs)("div",{className:"OramaNews-content-box",children:[Object(o.jsx)("div",{className:"title",children:Object(o.jsx)("h1",{children:"News"})}),Object(o.jsxs)(m.a,{container:!0,justifyContent:"center",spacing:1,children:[i,n]})]})})};var M=function(){var e=[{name:"Vision",link:"#"},{name:"Eco-System",link:"#"},{name:"Contact",link:"#"}],t=[{pic:{url:"/oramaWeb/imgs/demo-31.png",style:{float:"right",padding:"40px"},className:"img-fluid",position:"left"},title:"Introducing Orama",intro:"A powerful engine that integrates the finest AI technology to effectively produce some of the most impressive, original, novel and high quality artworks",list:["Cutting edge AI technology: CAN, GAN and its varieties, etc","The most comprehensive reference library built in, ever","Orama produced artworks minted as NFTs, ownerships can be freely traded, licensed on Orama\u2019s own chain or cross chain","Inference on chain, making it the first ever AI to truly live on a blockchain","Orama is an engine that can connect to different chains"],backgroundColor:"#f1eded"},{pic:{url:"/oramaWeb/imgs/demo-30.png",style:{float:"left",padding:"40px"},className:"img-fluid",position:"right"},title:"Orama Canvas",list:["The killer App, powered by Orama EngineThe brain behind all the master creations, now at the users disposal.","Highly effective production tool for creative professionalsGreatly improve the efficiency of traditional art/design creation process.","No professional skills requiredAmateurs friendly, anyone can use this platform to create amazing work, the engine does the heavy lifting. Billions of potential users.","Synergetic with the rest of Orama ecosystem (Orama Pictures, Orama Studios, etc.)"],backgroundColor:"white"},{pic:{url:"/oramaWeb/imgs/rounded-in-photoretrica_1.png",style:{float:"right",padding:"40px"},className:"img-fluid",position:"left"},title:"Orama Ecosystem",intro:"More than a Blockchain, a whole Ecosystem",list:["Orama\u2019s ecosystem is so much more than an engine powered NFT chain, users can access Orama\u2019s Canvas, Studios and other exciting labs by spending ORA token","A bazaar for NFT trading with a nexus for cross chain.","A game studio producing games utilizing NFT assets produced by Orama","A fashion brand producing line up designed by Orama","The possibilities are endless "],backgroundColor:"#f1eded"}];return Object(o.jsxs)("div",{className:"wholeContainer",children:[Object(o.jsx)(W,{}),Object(o.jsx)(l,{navItems:e}),Object(o.jsx)(A,{navItems:e,data:{title:"Orama",paragraph:"The Future of NTFs'"}}),Object(o.jsx)(d,{infoContent:t[0]}),Object(o.jsx)(d,{infoContent:t[1]}),Object(o.jsx)(d,{infoContent:t[2]}),Object(o.jsx)(P,{}),Object(o.jsx)(z,{data:{title:"We Love Art, AI and Blockchain",text:"We are an innovative and creative team of veterans in blockchain development that also happen to be savvy in AI and its related infrastructure, with proven big corporation track record"}}),Object(o.jsx)(O,{}),Object(o.jsx)(E,{}),Object(o.jsx)(D,{}),Object(o.jsx)(R,{}),Object(o.jsx)(S,{})]})},q=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,162)).then((function(t){var a=t.getCLS,i=t.getFID,n=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),i(e),n(e),c(e),s(e)}))};a(108),a(109),a(131),a(132),a(133);s.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(M,{})}),document.getElementById("root")),q()},70:function(e,t,a){}},[[135,1,2]]]);
//# sourceMappingURL=main.5baa1227.chunk.js.map