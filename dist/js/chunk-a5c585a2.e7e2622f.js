(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a5c585a2"],{"04ab":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("span",[i("top-banner"),i("variations"),i("strengths"),i("v-divider"),i("quote"),i("footer1")],1)},s=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"container"},[n("div",{staticClass:"pt-lg-8 pb-lg-8 pb-sm-4 pb-md-8 text-lg-h3 text-xl-h3 text-md-h3 text-sm-h3 text-h5 text-center font-weight-light text-decoration-underline",attrs:{"align-content":"center","justify-content":"center"}},[t._v(" "+t._s(t.maintitle)+" ")]),n("div",{staticClass:"text-xs-caption text-sm-caption text-md-subtitle-1 text-lg-subtitle-1 text-xl-subtitle-1 text-center",attrs:{"align-self":"center"}},[t._v(" "+t._s(t.subtitle)+" ")]),n("v-container",[n("v-row",{staticClass:"text-xl-h4 text-lg-h4 text-md-h6 text-sm-h6 text-xs-h6",attrs:{dense:""}},t._l(t.cards,(function(e){return n("v-col",{key:e.title,staticClass:"col-lg-4 col-xl-4 col-md-4 col-sm-12"},[n("v-card",[n("v-img",{staticClass:"white--text align-end rounded",attrs:{src:i("1771")("./"+e.src),gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.7)",height:"400px"},scopedSlots:t._u([{key:"placeholder",fn:function(){return[n("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[n("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}],null,!0)},[n("v-card-title",{domProps:{textContent:t._s(e.title)}}),n("v-card-text",{staticClass:"caption pb-0",domProps:{textContent:t._s(e.blurb)}}),n("v-card-subtitle",{staticClass:"white--text pt-0 caption",domProps:{textContent:t._s(e.subtitle)}})],1)],1)],1)})),1)],1)],1)},o=[],a={name:"thecar",data:function(){return{cards:[{title:"Light and Nimble",src:"flexmini1.jpg",blurb:"Weighting between 1200 & 1800 lbs. Look how short it is!",subtitle:"Combining tyres at the 4 corners and it's weight, creates an unforgettable experience."},{title:"Retro Modern Aesthetic",src:"flexmini2.jpg",blurb:"Stylish, even for the modern standard.",subtitle:"Many Mini's rarely came with modern comforts. That just means you can focus on driving."},{title:"Spirited Driving",src:"flexmini3.jpg",blurb:"Go-kart Weekends?",subtitle:"No matter what, the experience is the most important part."}],maintitle:"What's So Special?",subtitle:"For over 60 years, Mini has remained as one of the most iconic vehicles in automobile history. With multiple motor configurations and chassis versions, Mini is easily one of the most recognizable brands in the world."}}},l=a,c=(i("9426"),i("2877")),u=i("6544"),h=i.n(u),d=(i("0481"),i("4069"),i("a9e3"),i("5530")),p=(i("615b"),i("10d2")),f=i("2b0e"),m=(i("c7cd"),i("ade3")),g=(i("6ece"),i("0789")),v=i("a9ad"),b=i("fe6c"),y=i("a452"),x=i("7560"),w=i("80d2"),C=i("58df"),_=Object(C["a"])(v["a"],Object(b["b"])(["absolute","fixed","top","bottom"]),y["a"],x["a"]),j=_.extend({name:"v-progress-linear",props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data:function(){return{internalLazyValue:this.value||0}},computed:{__cachedBackground:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar:function(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType:function(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer:function(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate:function(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(w["f"])(this.normalizedValue,"%")}}))},__cachedIndeterminate:function(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream:function(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(w["f"])(100-this.normalizedBuffer,"%")}})):null},backgroundStyle:function(){var t,e=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return t={opacity:e},Object(m["a"])(t,this.isReversed?"right":"left",Object(w["f"])(this.normalizedValue,"%")),Object(m["a"])(t,"width",Object(w["f"])(this.normalizedBuffer-this.normalizedValue,"%")),t},classes:function(){return Object(d["a"])({"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped},this.themeClasses)},computedTransition:function(){return this.indeterminate?g["b"]:g["c"]},isReversed:function(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer:function(){return this.normalize(this.bufferValue)},normalizedValue:function(){return this.normalize(this.internalLazyValue)},reactive:function(){return Boolean(this.$listeners.change)},styles:function(){var t={};return this.active||(t.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(t.width=Object(w["f"])(this.normalizedBuffer,"%")),t}},methods:{genContent:function(){var t=Object(w["k"])(this,"default",{value:this.internalLazyValue});return t?this.$createElement("div",{staticClass:"v-progress-linear__content"},t):null},genListeners:function(){var t=this.$listeners;return this.reactive&&(t.click=this.onClick),t},genProgressBar:function(t){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:Object(m["a"])({},t,!0)}))},onClick:function(t){if(this.reactive){var e=this.$el.getBoundingClientRect(),i=e.width;this.internalValue=t.offsetX/i*100}},normalize:function(t){return t<0?0:t>100?100:parseFloat(t)}},render:function(t){var e={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,style:{bottom:this.bottom?0:void 0,height:this.active?Object(w["f"])(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return t("div",e,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}}),k=j,B=f["a"].extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress:function(){return!1===this.loading?null:this.$slots.progress||this.$createElement(k,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}}),O=i("1c87"),T=Object(C["a"])(B,O["a"],p["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return Object(d["a"])(Object(d["a"])({"v-card":!0},O["a"].options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},p["a"].options.computed.classes.call(this))},styles:function(){var t=Object(d["a"])({},p["a"].options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=B.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),i=e.tag,n=e.data;return n.style=this.styles,this.isClickable&&(n.attrs=n.attrs||{},n.attrs.tabindex=0),t(i,this.setBackgroundColor(this.color,n),[this.genProgress(),this.$slots.default])}}),$=(Object(w["g"])("v-card__actions"),Object(w["g"])("v-card__subtitle")),V=Object(w["g"])("v-card__text"),S=Object(w["g"])("v-card__title"),M=i("62ad"),E=i("a523"),I=i("adda"),D=i("490a"),z=i("0fd9"),P=Object(c["a"])(l,r,o,!1,null,"24891a86",null),L=P.exports;h()(P,{VCard:T,VCardSubtitle:$,VCardText:V,VCardTitle:S,VCol:M["a"],VContainer:E["a"],VImg:I["a"],VProgressCircular:D["a"],VRow:z["a"]});var N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{},[n("div",{staticClass:"pt-lg-4 pb-lg-4 pt-sm-4 pt-md-8 pt-8 text-lg-h3 text-xl-h3 text-md-h3 text-sm-h3 text-h5 text-center font-weight-light text-decoration-underline",attrs:{"align-content":"center","justify-content":"center"}},[t._v(" "+t._s(t.maintitle)+" ")]),n("v-row",{staticClass:"align-center"},[n("v-col",{staticClass:"col-xl-4 col-lg-4  offset-xl-2 offset-lg-2 parent"},t._l(t.descriptions,(function(e){return n("div",{key:e.description,staticClass:"text--grey pt-4 text-sm-subtitle-1 box",attrs:{id:"article1"},domProps:{textContent:t._s(e.description)}})})),0),n("v-col",{staticClass:"col-4 hidden-sm-and-down"},[n("div",[n("v-img",{attrs:{height:"400px",src:i("7000")},scopedSlots:t._u([{key:"placeholder",fn:function(){return[n("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[n("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}])})],1)])],1)],1)},A=[],G={data:function(){return{maintitle:"How the Classic Mini Stayed Strong",articleimage:"smokemini.jpg",descriptions:[{description:"While the Mini Cooper started out as a small English econobox from the mid-1900s, it has since seen an evolution from commuter car to an icon. Seldom would a classic car get this kind of attention this many years since its inception with the modern supercars coming to mind. As a car celebrated by celebrities and commoners alike, the Mini Cooper exceeds the expectations of what a classic car is. "},{description:"The Mini Cooper has impacted multiple generations of people. Seeing the members of the Beatles owning variants of the Mini Cooper to even celebrated people on Instagram today. Nobody expected such a small vehicle to captivate the eyes of so many which is a reason why car enthusiasts are still in awe."}]}},methods:{},mounted:function(){}},R=G,H=(i("7390"),Object(c["a"])(R,N,A,!1,null,"6cdd4db1",null)),W=H.exports;h()(H,{VCol:M["a"],VContainer:E["a"],VImg:I["a"],VProgressCircular:D["a"],VRow:z["a"]});var F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"grey lighten-4"},[n("v-row",{staticClass:"grey lighten-4"},[n("v-col",{staticClass:"col-lg-4 col-xl-4 offset-xl-4 offset-lg-4"},[n("div",[n("v-carousel",{attrs:{cycle:"","hide-delimiter-background":"","show-arrows-on-hover":""},model:{value:t.model,callback:function(e){t.model=e},expression:"model"}},t._l(t.imageCarousel,(function(e,s){return n("v-carousel-item",{key:s,attrs:{id:"carouselItem",src:i("1771")("./"+e.src),transition:"fade-transition","reverse-transition":"fade-transition",contain:""}},[n("v-row",{staticClass:"fill-height pt-4",attrs:{align:"start",justify:"center"}},[n("div",{staticClass:"text-h4 black--text"},[t._v(" "+t._s(e.title)+" ")])])],1)})),1)],1)])],1)],1)},q=[],U={data:function(){return{maintitle:"Variations of the Mini",model:0,imageCarousel:[{src:"Mk1Mini.jpg",title:"Mark I Mini",description:""},{src:"montecarlomini.jpg",title:"Monte Carlo Mini",description:""},{src:"Mk3.jpg",title:"Mark III Mini",description:""},{src:"Mk5.jpg",title:"Mark IV Mini",description:""},{src:"minivan.jpg",title:"Mini Van",description:""},{src:"minipickup.jpg",title:"Mini Pickup",description:""},{src:"woody.jpg",title:"Mini Countryman (Woody)",description:""},{src:"Sportspack.jpg",title:"Mini Cooper w/ Sportspack",description:""}]}},methods:{},mounted:function(){}},J=U,Q=(i("3230"),i("63b7"),i("f665")),Y=i("afdd"),X=i("9d26"),K=i("604c"),Z=K["a"].extend({name:"button-group",provide:function(){return{btnToggle:this}},computed:{classes:function(){return K["a"].options.computed.classes.call(this)}},methods:{genData:K["a"].options.methods.genData}}),tt=i("d9bd"),et=Q["a"].extend({name:"v-carousel",props:{continuous:{type:Boolean,default:!0},cycle:Boolean,delimiterIcon:{type:String,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:function(t){return t>0}},mandatory:{type:Boolean,default:!0},progress:Boolean,progressColor:String,showArrows:{type:Boolean,default:!0},verticalDelimiters:{type:String,default:void 0}},data:function(){return{internalHeight:this.height,slideTimeout:void 0}},computed:{classes:function(){return Object(d["a"])(Object(d["a"])({},Q["a"].options.computed.classes.call(this)),{},{"v-carousel":!0,"v-carousel--hide-delimiter-background":this.hideDelimiterBackground,"v-carousel--vertical-delimiters":this.isVertical})},isDark:function(){return this.dark||!this.light},isVertical:function(){return null!=this.verticalDelimiters}},watch:{internalValue:"restartTimeout",interval:"restartTimeout",height:function(t,e){t!==e&&t&&(this.internalHeight=t)},cycle:function(t){t?this.restartTimeout():(clearTimeout(this.slideTimeout),this.slideTimeout=void 0)}},created:function(){this.$attrs.hasOwnProperty("hide-controls")&&Object(tt["a"])("hide-controls",':show-arrows="false"',this)},mounted:function(){this.startTimeout()},methods:{genControlIcons:function(){return this.isVertical?null:Q["a"].options.methods.genControlIcons.call(this)},genDelimiters:function(){return this.$createElement("div",{staticClass:"v-carousel__controls",style:{left:"left"===this.verticalDelimiters&&this.isVertical?0:"auto",right:"right"===this.verticalDelimiters?0:"auto"}},[this.genItems()])},genItems:function(){for(var t=this,e=this.items.length,i=[],n=0;n<e;n++){var s=this.$createElement(Y["a"],{staticClass:"v-carousel__controls__item",attrs:{"aria-label":this.$vuetify.lang.t("$vuetify.carousel.ariaLabel.delimiter",n+1,e)},props:{icon:!0,small:!0,value:this.getValue(this.items[n],n)}},[this.$createElement(X["a"],{props:{size:18}},this.delimiterIcon)]);i.push(s)}return this.$createElement(Z,{props:{value:this.internalValue,mandatory:this.mandatory},on:{change:function(e){t.internalValue=e}}},i)},genProgress:function(){return this.$createElement(k,{staticClass:"v-carousel__progress",props:{color:this.progressColor,value:(this.internalIndex+1)/this.items.length*100}})},restartTimeout:function(){this.slideTimeout&&clearTimeout(this.slideTimeout),this.slideTimeout=void 0,window.requestAnimationFrame(this.startTimeout)},startTimeout:function(){this.cycle&&(this.slideTimeout=window.setTimeout(this.next,+this.interval>0?+this.interval:6e3))}},render:function(t){var e=Q["a"].options.render.call(this,t);return e.data.style="height: ".concat(Object(w["f"])(this.height),";"),this.hideDelimiters||e.children.push(this.genDelimiters()),(this.progress||this.progressColor)&&e.children.push(this.genProgress()),e}}),it=i("9d65"),nt=i("4e82"),st=i("c3f0"),rt=Object(C["a"])(it["a"],Object(nt["a"])("windowGroup","v-window-item","v-window")),ot=rt.extend().extend().extend({name:"v-window-item",directives:{Touch:st["a"]},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data:function(){return{isActive:!1,inTransition:!1}},computed:{classes:function(){return this.groupClasses},computedTransition:function(){return this.windowGroup.internalReverse?"undefined"!==typeof this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:"undefined"!==typeof this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot:function(){return this.$slots.default},genWindowItem:function(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.genDefaultSlot())},onAfterTransition:function(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition:function(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=Object(w["f"])(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled:function(){this.onAfterTransition()},onEnter:function(t){var e=this;this.inTransition&&this.$nextTick((function(){e.computedTransition&&e.inTransition&&(e.windowGroup.transitionHeight=Object(w["f"])(t.clientHeight))}))}},render:function(t){var e=this;return t("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},this.showLazyContent((function(){return[e.genWindowItem()]})))}}),at=Object(C["a"])(ot,O["a"]),lt=at.extend({name:"v-carousel-item",inheritAttrs:!1,methods:{genDefaultSlot:function(){return[this.$createElement(I["a"],{staticClass:"v-carousel__item",props:Object(d["a"])(Object(d["a"])({},this.$attrs),{},{height:this.windowGroup.internalHeight}),on:this.$listeners,scopedSlots:{placeholder:this.$scopedSlots.placeholder}},Object(w["k"])(this))]},genWindowItem:function(){var t=this.generateRouteLink(),e=t.tag,i=t.data;return i.staticClass="v-window-item",i.directives.push({name:"show",value:this.isActive}),this.$createElement(e,i,this.genDefaultSlot())}}}),ct=Object(c["a"])(J,F,q,!1,null,"51eb21b1",null),ut=ct.exports;h()(ct,{VCarousel:et,VCarouselItem:lt,VCol:M["a"],VContainer:E["a"],VRow:z["a"]});var ht=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{staticClass:"parent"},[i("div",{staticClass:"col-12 text-h2",attrs:{id:"quote",align:"center",justify:"center"}},[t._v(' "'+t._s(t.message)+'" ')]),i("div",{attrs:{align:"center",justify:"center"}},[t._v("- me probably")])])},dt=[],pt={name:"Quote",data:function(){return{message:"Nothing else is the same."}},created:function(){}},ft=pt,mt=(i("97a1"),Object(c["a"])(ft,ht,dt,!1,null,"b729f6c8",null)),gt=mt.exports;h()(mt,{VContainer:E["a"]});var vt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-footer",{attrs:{padless:""}},[i("v-row",{attrs:{justify:"center","no-gutters":""}},[i("strong",{staticClass:"align-self-center"},[t._v("Thanks to Steveston Motor Co for the Images! - ")]),t._l(t.links,(function(e){return i("v-btn",{key:e,staticClass:"my-2",attrs:{color:"black",text:"",rounded:"",href:e.src}},[t._v(" "+t._s(e.title)+" ")])})),i("v-col",{staticClass:"lighten-2 py-4 text-center black--text",attrs:{cols:"12"}},[t._v(" "+t._s((new Date).getFullYear())+" — "),i("strong",[t._v("Vuetify")])])],2)],1)},bt=[],yt={data:function(){return{links:[{src:"https://www.youtube.com/channel/UC4hs5upWd7j9ligDbWEgF3w",title:"Youtube"},{src:"https://stevestonmotorco.com/",title:"Their Website"},{src:"https://www.instagram.com/stevestonmotorco/",title:"Instagram"}]}}},xt=yt,wt=i("8336"),Ct=(i("b5b6"),i("8dd9")),_t=i("3a66"),jt=i("d10f"),kt=Object(C["a"])(Ct["a"],Object(_t["a"])("footer",["height","inset"]),jt["a"]).extend({name:"v-footer",props:{height:{default:"auto",type:[Number,String]},inset:Boolean,padless:Boolean,tag:{type:String,default:"footer"}},computed:{applicationProperty:function(){return this.inset?"insetFooter":"footer"},classes:function(){return Object(d["a"])(Object(d["a"])({},Ct["a"].options.computed.classes.call(this)),{},{"v-footer--absolute":this.absolute,"v-footer--fixed":!this.absolute&&(this.app||this.fixed),"v-footer--padless":this.padless,"v-footer--inset":this.inset})},computedBottom:function(){if(this.isPositioned)return this.app?this.$vuetify.application.bottom:0},computedLeft:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.left:0},computedRight:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.right:0},isPositioned:function(){return Boolean(this.absolute||this.fixed||this.app)},styles:function(){var t=parseInt(this.height);return Object(d["a"])(Object(d["a"])({},Ct["a"].options.computed.styles.call(this)),{},{height:isNaN(t)?t:Object(w["f"])(t),left:Object(w["f"])(this.computedLeft),right:Object(w["f"])(this.computedRight),bottom:Object(w["f"])(this.computedBottom)})}},methods:{updateApplication:function(){var t=parseInt(this.height);return isNaN(t)?this.$el?this.$el.clientHeight:0:t}},render:function(t){var e=this.setBackgroundColor(this.color,{staticClass:"v-footer",class:this.classes,style:this.styles});return t(this.tag,e,this.$slots.default)}}),Bt=Object(c["a"])(xt,vt,bt,!1,null,"fde708fa",null),Ot=Bt.exports;h()(Bt,{VBtn:wt["a"],VCol:M["a"],VFooter:kt,VRow:z["a"]});var Tt={name:"TheCar",components:{TopBanner:L,Strengths:W,Variations:ut,Quote:gt,Footer1:Ot}},$t=Tt,Vt=(i("8ce9"),x["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:Object(d["a"])({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:Object(d["a"])({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})),St=Object(c["a"])($t,n,s,!1,null,null,null);e["default"]=St.exports;h()(St,{VDivider:Vt})},1771:function(t,e,i){var n={"./Mini Landing Page.png":"5fe4","./Mk1Mini.jpg":"6d15","./Mk3.jpg":"fbc5","./Mk5.jpg":"ff48","./Sportspack.jpg":"3262","./flexmini1.jpg":"daf4","./flexmini2.jpg":"f7ed","./flexmini3.jpg":"ea63","./logo.png":"cf05","./mini1.jpg":"8baa","./minipickup.jpg":"a5ae","./minivan.jpg":"dd99","./montecarlomini.jpg":"e4a3","./smokemini.jpg":"7000","./woody.jpg":"6cfb"};function s(t){var e=r(t);return i(e)}function r(t){if(!i.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}s.keys=function(){return Object.keys(n)},s.resolve=r,t.exports=s,s.id="1771"},3230:function(t,e,i){"use strict";var n=i("868d"),s=i.n(n);s.a},3262:function(t,e,i){t.exports=i.p+"img/Sportspack.3381988f.jpg"},"4bfb":function(t,e,i){},"5fe4":function(t,e,i){t.exports=i.p+"img/Mini Landing Page.e744a277.png"},"615b":function(t,e,i){},"63b7":function(t,e,i){},"6cfb":function(t,e,i){t.exports=i.p+"img/woody.6da112db.jpg"},"6d15":function(t,e,i){t.exports=i.p+"img/Mk1Mini.c663aa41.jpg"},"6ece":function(t,e,i){},7e3:function(t,e,i){t.exports=i.p+"img/smokemini.14cc227a.jpg"},7390:function(t,e,i){"use strict";var n=i("794c"),s=i.n(n);s.a},"794c":function(t,e,i){},8152:function(t,e,i){},"868d":function(t,e,i){},"8ce9":function(t,e,i){},9426:function(t,e,i){"use strict";var n=i("4bfb"),s=i.n(n);s.a},"97a1":function(t,e,i){"use strict";var n=i("8152"),s=i.n(n);s.a},"9d65":function(t,e,i){"use strict";var n=i("d9bd"),s=i("2b0e");e["a"]=s["a"].extend().extend({name:"bootable",props:{eager:Boolean},data:function(){return{isBooted:!1}},computed:{hasContent:function(){return this.isBooted||this.eager||this.isActive}},watch:{isActive:function(){this.isBooted=!0}},created:function(){"lazy"in this.$attrs&&Object(n["e"])("lazy",this)},methods:{showLazyContent:function(t){return this.hasContent&&t?t():[this.$createElement()]}}})},a5ae:function(t,e,i){t.exports=i.p+"img/minipickup.757e0b1b.jpg"},b5b6:function(t,e,i){},cf05:function(t,e,i){t.exports=i.p+"img/logo.82b9c7a5.png"},daf4:function(t,e,i){t.exports=i.p+"img/flexmini1.b5ab7d57.jpg"},dd99:function(t,e,i){t.exports=i.p+"img/minivan.70dc43c7.jpg"},e4a3:function(t,e,i){t.exports=i.p+"img/montecarlomini.d6f4b573.jpg"},ea63:function(t,e,i){t.exports=i.p+"img/flexmini3.551545d6.jpg"},f7ed:function(t,e,i){t.exports=i.p+"img/flexmini2.e7d21d1c.jpg"},fbc5:function(t,e,i){t.exports=i.p+"img/Mk3.2a11a34b.jpg"},ff48:function(t,e,i){t.exports=i.p+"img/Mk5.d3461620.jpg"}}]);
//# sourceMappingURL=chunk-a5c585a2.e7e2622f.js.map