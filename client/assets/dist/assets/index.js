const oe=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function _(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=_(n);fetch(n.href,r)}};oe();var F,d,J,x,R,Q,O,D={},X=[],re=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,B=Array.isArray;function S(e,t){for(var _ in t)e[_]=t[_];return e}function Y(e){var t=e.parentNode;t&&t.removeChild(e)}function ie(e,t,_){var i,n,r,l={};for(r in t)r=="key"?i=t[r]:r=="ref"?n=t[r]:l[r]=t[r];if(arguments.length>2&&(l.children=arguments.length>3?F.call(arguments,2):_),typeof e=="function"&&e.defaultProps!=null)for(r in e.defaultProps)l[r]===void 0&&(l[r]=e.defaultProps[r]);return N(e,l,i,n,null)}function N(e,t,_,i,n){var r={type:e,props:t,key:_,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:n==null?++J:n,__i:-1,__u:0};return n==null&&d.vnode!=null&&d.vnode(r),r}function $(e){return e.children}function U(e,t){this.props=e,this.context=t}function P(e,t){if(t==null)return e.__?P(e.__,e.__i+1):null;for(var _;t<e.__k.length;t++)if((_=e.__k[t])!=null&&_.__e!=null)return _.__e;return typeof e.type=="function"?P(e):null}function Z(e){var t,_;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((_=e.__k[t])!=null&&_.__e!=null){e.__e=e.__c.base=_.__e;break}return Z(e)}}function V(e){(!e.__d&&(e.__d=!0)&&x.push(e)&&!A.__r++||R!==d.debounceRendering)&&((R=d.debounceRendering)||Q)(A)}function A(){var e,t,_,i,n,r,l,s,f;for(x.sort(O);e=x.shift();)e.__d&&(t=x.length,i=void 0,r=(n=(_=e).__v).__e,s=[],f=[],(l=_.__P)&&((i=S({},n)).__v=n.__v+1,d.vnode&&d.vnode(i),I(l,i,n,_.__n,l.ownerSVGElement!==void 0,32&n.__u?[r]:null,s,r==null?P(n):r,!!(32&n.__u),f),i.__.__k[i.__i]=i,_e(s,i,f),i.__e!=r&&Z(i)),x.length>t&&x.sort(O));A.__r=0}function ee(e,t,_,i,n,r,l,s,f,c,p){var o,m,u,h,b,v=i&&i.__k||X,a=t.length;for(_.__d=f,le(_,t,v),f=_.__d,o=0;o<a;o++)(u=_.__k[o])!=null&&typeof u!="boolean"&&typeof u!="function"&&(m=u.__i===-1?D:v[u.__i]||D,u.__i=o,I(e,u,m,n,r,l,s,f,c,p),h=u.__e,u.ref&&m.ref!=u.ref&&(m.ref&&j(m.ref,null,u),p.push(u.ref,u.__c||h,u)),b==null&&h!=null&&(b=h),65536&u.__u||m.__k===u.__k?f=te(u,f,e):typeof u.type=="function"&&u.__d!==void 0?f=u.__d:h&&(f=h.nextSibling),u.__d=void 0,u.__u&=-196609);_.__d=f,_.__e=b}function le(e,t,_){var i,n,r,l,s,f=t.length,c=_.length,p=c,o=0;for(e.__k=[],i=0;i<f;i++)(n=e.__k[i]=(n=t[i])==null||typeof n=="boolean"||typeof n=="function"?null:typeof n=="string"||typeof n=="number"||typeof n=="bigint"||n.constructor==String?N(null,n,null,null,n):B(n)?N($,{children:n},null,null,null):n.__b>0?N(n.type,n.props,n.key,n.ref?n.ref:null,n.__v):n)!=null?(n.__=e,n.__b=e.__b+1,s=se(n,_,l=i+o,p),n.__i=s,r=null,s!==-1&&(p--,(r=_[s])&&(r.__u|=131072)),r==null||r.__v===null?(s==-1&&o--,typeof n.type!="function"&&(n.__u|=65536)):s!==l&&(s===l+1?o++:s>l?p>f-l?o+=s-l:o--:o=s<l&&s==l-1?s-l:0,s!==i+o&&(n.__u|=65536))):(r=_[i])&&r.key==null&&r.__e&&(r.__e==e.__d&&(e.__d=P(r)),W(r,r,!1),_[i]=null,p--);if(p)for(i=0;i<c;i++)(r=_[i])!=null&&(131072&r.__u)==0&&(r.__e==e.__d&&(e.__d=P(r)),W(r,r))}function te(e,t,_){var i,n;if(typeof e.type=="function"){for(i=e.__k,n=0;i&&n<i.length;n++)i[n]&&(i[n].__=e,t=te(i[n],t,_));return t}return e.__e!=t&&(_.insertBefore(e.__e,t||null),t=e.__e),t&&t.nextSibling}function se(e,t,_,i){var n=e.key,r=e.type,l=_-1,s=_+1,f=t[_];if(f===null||f&&n==f.key&&r===f.type)return _;if(i>(f!=null&&(131072&f.__u)==0?1:0))for(;l>=0||s<t.length;){if(l>=0){if((f=t[l])&&(131072&f.__u)==0&&n==f.key&&r===f.type)return l;l--}if(s<t.length){if((f=t[s])&&(131072&f.__u)==0&&n==f.key&&r===f.type)return s;s++}}return-1}function z(e,t,_){t[0]==="-"?e.setProperty(t,_==null?"":_):e[t]=_==null?"":typeof _!="number"||re.test(t)?_:_+"px"}function M(e,t,_,i,n){var r;e:if(t==="style")if(typeof _=="string")e.style.cssText=_;else{if(typeof i=="string"&&(e.style.cssText=i=""),i)for(t in i)_&&t in _||z(e.style,t,"");if(_)for(t in _)i&&_[t]===i[t]||z(e.style,t,_[t])}else if(t[0]==="o"&&t[1]==="n")r=t!==(t=t.replace(/(PointerCapture)$|Capture$/,"$1")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+r]=_,_?i?_.u=i.u:(_.u=Date.now(),e.addEventListener(t,r?K:G,r)):e.removeEventListener(t,r?K:G,r);else{if(n)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="width"&&t!=="height"&&t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t!=="rowSpan"&&t!=="colSpan"&&t!=="role"&&t in e)try{e[t]=_==null?"":_;break e}catch{}typeof _=="function"||(_==null||_===!1&&t[4]!=="-"?e.removeAttribute(t):e.setAttribute(t,_))}}function G(e){var t=this.l[e.type+!1];if(e.t){if(e.t<=t.u)return}else e.t=Date.now();return t(d.event?d.event(e):e)}function K(e){return this.l[e.type+!0](d.event?d.event(e):e)}function I(e,t,_,i,n,r,l,s,f,c){var p,o,m,u,h,b,v,a,y,w,L,C,q,E,H,g=t.type;if(t.constructor!==void 0)return null;128&_.__u&&(f=!!(32&_.__u),r=[s=t.__e=_.__e]),(p=d.__b)&&p(t);e:if(typeof g=="function")try{if(a=t.props,y=(p=g.contextType)&&i[p.__c],w=p?y?y.props.value:p.__:i,_.__c?v=(o=t.__c=_.__c).__=o.__E:("prototype"in g&&g.prototype.render?t.__c=o=new g(a,w):(t.__c=o=new U(a,w),o.constructor=g,o.render=ue),y&&y.sub(o),o.props=a,o.state||(o.state={}),o.context=w,o.__n=i,m=o.__d=!0,o.__h=[],o._sb=[]),o.__s==null&&(o.__s=o.state),g.getDerivedStateFromProps!=null&&(o.__s==o.state&&(o.__s=S({},o.__s)),S(o.__s,g.getDerivedStateFromProps(a,o.__s))),u=o.props,h=o.state,o.__v=t,m)g.getDerivedStateFromProps==null&&o.componentWillMount!=null&&o.componentWillMount(),o.componentDidMount!=null&&o.__h.push(o.componentDidMount);else{if(g.getDerivedStateFromProps==null&&a!==u&&o.componentWillReceiveProps!=null&&o.componentWillReceiveProps(a,w),!o.__e&&(o.shouldComponentUpdate!=null&&o.shouldComponentUpdate(a,o.__s,w)===!1||t.__v===_.__v)){for(t.__v!==_.__v&&(o.props=a,o.state=o.__s,o.__d=!1),t.__e=_.__e,t.__k=_.__k,t.__k.forEach(function(T){T&&(T.__=t)}),L=0;L<o._sb.length;L++)o.__h.push(o._sb[L]);o._sb=[],o.__h.length&&l.push(o);break e}o.componentWillUpdate!=null&&o.componentWillUpdate(a,o.__s,w),o.componentDidUpdate!=null&&o.__h.push(function(){o.componentDidUpdate(u,h,b)})}if(o.context=w,o.props=a,o.__P=e,o.__e=!1,C=d.__r,q=0,"prototype"in g&&g.prototype.render){for(o.state=o.__s,o.__d=!1,C&&C(t),p=o.render(o.props,o.state,o.context),E=0;E<o._sb.length;E++)o.__h.push(o._sb[E]);o._sb=[]}else do o.__d=!1,C&&C(t),p=o.render(o.props,o.state,o.context),o.state=o.__s;while(o.__d&&++q<25);o.state=o.__s,o.getChildContext!=null&&(i=S(S({},i),o.getChildContext())),m||o.getSnapshotBeforeUpdate==null||(b=o.getSnapshotBeforeUpdate(u,h)),ee(e,B(H=p!=null&&p.type===$&&p.key==null?p.props.children:p)?H:[H],t,_,i,n,r,l,s,f,c),o.base=t.__e,t.__u&=-161,o.__h.length&&l.push(o),v&&(o.__E=o.__=null)}catch(T){t.__v=null,f||r!=null?(t.__e=s,t.__u|=f?160:32,r[r.indexOf(s)]=null):(t.__e=_.__e,t.__k=_.__k),d.__e(T,t,_)}else r==null&&t.__v===_.__v?(t.__k=_.__k,t.__e=_.__e):t.__e=ce(_.__e,t,_,i,n,r,l,f,c);(p=d.diffed)&&p(t)}function _e(e,t,_){t.__d=void 0;for(var i=0;i<_.length;i++)j(_[i],_[++i],_[++i]);d.__c&&d.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(r){r.call(n)})}catch(r){d.__e(r,n.__v)}})}function ce(e,t,_,i,n,r,l,s,f){var c,p,o,m,u,h,b,v=_.props,a=t.props,y=t.type;if(y==="svg"&&(n=!0),r!=null){for(c=0;c<r.length;c++)if((u=r[c])&&"setAttribute"in u==!!y&&(y?u.localName===y:u.nodeType===3)){e=u,r[c]=null;break}}if(e==null){if(y===null)return document.createTextNode(a);e=n?document.createElementNS("http://www.w3.org/2000/svg",y):document.createElement(y,a.is&&a),r=null,s=!1}if(y===null)v===a||s&&e.data===a||(e.data=a);else{if(r=r&&F.call(e.childNodes),v=_.props||D,!s&&r!=null)for(v={},c=0;c<e.attributes.length;c++)v[(u=e.attributes[c]).name]=u.value;for(c in v)u=v[c],c=="children"||(c=="dangerouslySetInnerHTML"?o=u:c==="key"||c in a||M(e,c,null,u,n));for(c in a)u=a[c],c=="children"?m=u:c=="dangerouslySetInnerHTML"?p=u:c=="value"?h=u:c=="checked"?b=u:c==="key"||s&&typeof u!="function"||v[c]===u||M(e,c,u,v[c],n);if(p)s||o&&(p.__html===o.__html||p.__html===e.innerHTML)||(e.innerHTML=p.__html),t.__k=[];else if(o&&(e.innerHTML=""),ee(e,B(m)?m:[m],t,_,i,n&&y!=="foreignObject",r,l,r?r[0]:_.__k&&P(_,0),s,f),r!=null)for(c=r.length;c--;)r[c]!=null&&Y(r[c]);s||(c="value",h!==void 0&&(h!==e[c]||y==="progress"&&!h||y==="option"&&h!==v[c])&&M(e,c,h,v[c],!1),c="checked",b!==void 0&&b!==e[c]&&M(e,c,b,v[c],!1))}return e}function j(e,t,_){try{typeof e=="function"?e(t):e.current=t}catch(i){d.__e(i,_)}}function W(e,t,_){var i,n;if(d.unmount&&d.unmount(e),(i=e.ref)&&(i.current&&i.current!==e.__e||j(i,null,t)),(i=e.__c)!=null){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(r){d.__e(r,t)}i.base=i.__P=null,e.__c=void 0}if(i=e.__k)for(n=0;n<i.length;n++)i[n]&&W(i[n],t,_||typeof e.type!="function");_||e.__e==null||Y(e.__e),e.__=e.__e=e.__d=void 0}function ue(e,t,_){return this.constructor(e,_)}function fe(e,t,_){var i,n,r,l;d.__&&d.__(e,t),n=(i=typeof _=="function")?null:_&&_.__k||t.__k,r=[],l=[],I(t,e=(!i&&_||t).__k=ie($,null,[e]),n||D,D,t.ownerSVGElement!==void 0,!i&&_?[_]:n?null:t.firstChild?F.call(t.childNodes):null,r,!i&&_?_:n?n.__e:t.firstChild,i,l),_e(r,e,l)}function ne(e,t){fe(e,t,ne)}F=X.slice,d={__e:function(e,t,_,i){for(var n,r,l;t=t.__;)if((n=t.__c)&&!n.__)try{if((r=n.constructor)&&r.getDerivedStateFromError!=null&&(n.setState(r.getDerivedStateFromError(e)),l=n.__d),n.componentDidCatch!=null&&(n.componentDidCatch(e,i||{}),l=n.__d),l)return n.__E=n}catch(s){e=s}throw e}},J=0,U.prototype.setState=function(e,t){var _;_=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=S({},this.state),typeof e=="function"&&(e=e(S({},_),this.props)),e&&S(_,e),e!=null&&this.__v&&(t&&this._sb.push(t),V(this))},U.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),V(this))},U.prototype.render=$,x=[],Q=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,O=function(e,t){return e.__v.__b-t.__v.__b},A.__r=0;var pe=0;function k(e,t,_,i,n,r){var l,s,f={};for(s in t)s=="ref"?l=t[s]:f[s]=t[s];var c={type:e,props:f,key:_,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--pe,__i:-1,__u:0,__source:n,__self:r};if(typeof e=="function"&&(l=e.defaultProps))for(s in l)f[s]===void 0&&(f[s]=l[s]);return d.vnode&&d.vnode(c),c}function de(){return k("html",{lang:"en",children:[k("head",{children:[k("meta",{charset:"utf-8"}),k("meta",{name:"viewport",content:"width=device-width,initial-scale=1"}),k("title",{children:"Deno + Vite + Preact!"}),k("meta",{name:"description",content:"Future is here"}),k("meta",{property:"og:title",content:"Andrea Futuri"}),k("meta",{property:"og:description",content:"Future is here"}),k("meta",{"http-equiv":"Content-Security-Policy",content:"script-src 'self' 'unsafe-inline' http://localhost:3456;"}),k("script",{rel:"preconnect",type:"module",crossorigin:!0,src:window.dev?"http://localhost:3456/index.jsx":"./dist-assets/index.js"})]}),k("body",{children:"Ok perfetto"})]})}ae(k(de,{}));function ae(e){if(window.isBrowser=typeof document!="undefined",!window.isBrowser)return;document.querySelector("html").remove(),ne(e,document)}