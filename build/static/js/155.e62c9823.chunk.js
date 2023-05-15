"use strict";(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[155],{70881:function(t,e,n){n.d(e,{Z:function(){return l}});var a=n(1413),o=n(72791),c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M854.6 289.1a362.49 362.49 0 00-79.9-115.7 370.83 370.83 0 00-118.2-77.8C610.7 76.6 562.1 67 512 67c-50.1 0-98.7 9.6-144.5 28.5-44.3 18.3-84 44.5-118.2 77.8A363.6 363.6 0 00169.4 289c-19.5 45-29.4 92.8-29.4 142 0 70.6 16.9 140.9 50.1 208.7 26.7 54.5 64 107.6 111 158.1 80.3 86.2 164.5 138.9 188.4 153a43.9 43.9 0 0022.4 6.1c7.8 0 15.5-2 22.4-6.1 23.9-14.1 108.1-66.8 188.4-153 47-50.4 84.3-103.6 111-158.1C867.1 572 884 501.8 884 431.1c0-49.2-9.9-97-29.4-142zM512 880.2c-65.9-41.9-300-207.8-300-449.1 0-77.9 31.1-151.1 87.6-206.3C356.3 169.5 431.7 139 512 139s155.7 30.5 212.4 85.9C780.9 280 812 353.2 812 431.1c0 241.3-234.1 407.2-300 449.1zm0-617.2c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm79.2 255.2A111.6 111.6 0 01512 551c-29.9 0-58-11.7-79.2-32.8A111.6 111.6 0 01400 439c0-29.9 11.7-58 32.8-79.2C454 338.6 482.1 327 512 327c29.9 0 58 11.6 79.2 32.8C612.4 381 624 409.1 624 439c0 29.9-11.6 58-32.8 79.2z"}}]},name:"environment",theme:"outlined"},r=n(54291),i=function(t,e){return o.createElement(r.Z,(0,a.Z)((0,a.Z)({},t),{},{ref:e,icon:c}))};i.displayName="EnvironmentOutlined";var l=o.forwardRef(i)},95058:function(t,e,n){n.d(e,{Z:function(){return Tt}});var a=n(4942),o=n(29439),c=n(60732),r=n(75033),i=n(1413),l=n(72791),d={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"},s=n(54291),u=function(t,e){return l.createElement(s.Z,(0,i.Z)((0,i.Z)({},t),{},{ref:e,icon:d}))};u.displayName="PlusOutlined";var p=l.forwardRef(u),v=n(81694),f=n.n(v),b=n(87462),m=n(71002),h=n(44925),g=n(33786),Z=n(75179),k=n(98568),x=(0,l.createContext)(null),y=l.forwardRef((function(t,e){var n=t.prefixCls,a=t.className,o=t.style,c=t.id,r=t.active,i=t.tabKey,d=t.children;return l.createElement("div",{id:c&&"".concat(c,"-panel-").concat(i),role:"tabpanel",tabIndex:r?0:-1,"aria-labelledby":c&&"".concat(c,"-tab-").concat(i),"aria-hidden":!r,style:o,className:f()(n,r&&"".concat(n,"-active"),a),ref:e},d)}));var _=y,w=["key","forceRender","style","className"];function C(t){var e=t.id,n=t.activeKey,o=t.animated,c=t.tabPosition,r=t.destroyInactiveTabPane,d=l.useContext(x),s=d.prefixCls,u=d.tabs,p=o.tabPane,v="".concat(s,"-tabpane");return l.createElement("div",{className:f()("".concat(s,"-content-holder"))},l.createElement("div",{className:f()("".concat(s,"-content"),"".concat(s,"-content-").concat(c),(0,a.Z)({},"".concat(s,"-content-animated"),p))},u.map((function(t){var a=t.key,c=t.forceRender,d=t.style,s=t.className,u=(0,h.Z)(t,w),m=a===n;return l.createElement(k.ZP,(0,b.Z)({key:a,visible:m,forceRender:c,removeOnLeave:!!r,leavedClassName:"".concat(v,"-hidden")},o.tabPaneMotion),(function(t,n){var o=t.style,c=t.className;return l.createElement(_,(0,b.Z)({},u,{prefixCls:v,id:e,tabKey:a,animated:p,active:m,style:(0,i.Z)((0,i.Z)({},d),o),className:f()(s,c),ref:n}))}))}))))}var S=n(93433),E=n(88829),R=n(63739),P=n(75314),T=n(88834),N={width:0,height:0,left:0,top:0};function L(t,e){var n=l.useRef(t),a=l.useState({}),c=(0,o.Z)(a,2)[1];return[n.current,function(t){var a="function"===typeof t?t(n.current):t;a!==n.current&&e(a,n.current),n.current=a,c({})}]}var B=.1,I=.01,O=20,D=Math.pow(.995,O);var M=n(71605);function j(t){var e=(0,l.useState)(0),n=(0,o.Z)(e,2),a=n[0],c=n[1],r=(0,l.useRef)(0),i=(0,l.useRef)();return i.current=t,(0,M.o)((function(){var t;null===(t=i.current)||void 0===t||t.call(i)}),[a]),function(){r.current===a&&(r.current+=1,c(r.current))}}var z={width:0,height:0,left:0,top:0,right:0};function A(t){var e;return t instanceof Map?(e={},t.forEach((function(t,n){e[n]=t}))):e=t,JSON.stringify(e)}var H="TABS_DQ";function G(t){return String(t).replace(/"/g,H)}function W(t,e){var n=t.prefixCls,a=t.editable,o=t.locale,c=t.style;return a&&!1!==a.showAdd?l.createElement("button",{ref:e,type:"button",className:"".concat(n,"-nav-add"),style:c,"aria-label":(null===o||void 0===o?void 0:o.addAriaLabel)||"Add tab",onClick:function(t){a.onEdit("add",{event:t})}},a.addIcon||"+"):null}var X=l.forwardRef(W);var K=l.forwardRef((function(t,e){var n,a=t.position,o=t.prefixCls,c=t.extra;if(!c)return null;var r={};return"object"!==(0,m.Z)(c)||l.isValidElement(c)?r.right=c:r=c,"right"===a&&(n=r.right),"left"===a&&(n=r.left),n?l.createElement("div",{className:"".concat(o,"-extra-content"),ref:e},n):null})),q=n(93241),V=n(82257),Y=n(11354);function F(t,e){var n=t.prefixCls,c=t.id,r=t.tabs,i=t.locale,d=t.mobile,s=t.moreIcon,u=void 0===s?"More":s,p=t.moreTransitionName,v=t.style,b=t.className,m=t.editable,h=t.tabBarGutter,g=t.rtl,Z=t.removeAriaLabel,k=t.onTabClick,x=t.getPopupContainer,y=t.popupClassName,_=(0,l.useState)(!1),w=(0,o.Z)(_,2),C=w[0],S=w[1],E=(0,l.useState)(null),R=(0,o.Z)(E,2),P=R[0],T=R[1],N="".concat(c,"-more-popup"),L="".concat(n,"-dropdown"),B=null!==P?"".concat(N,"-").concat(P):null,I=null===i||void 0===i?void 0:i.dropdownAriaLabel;var O=l.createElement(V.ZP,{onClick:function(t){var e=t.key,n=t.domEvent;k(e,n),S(!1)},prefixCls:"".concat(L,"-menu"),id:N,tabIndex:-1,role:"listbox","aria-activedescendant":B,selectedKeys:[P],"aria-label":void 0!==I?I:"expanded dropdown"},r.map((function(t){var e=m&&!1!==t.closable&&!t.disabled;return l.createElement(V.sN,{key:t.key,id:"".concat(N,"-").concat(t.key),role:"option","aria-controls":c&&"".concat(c,"-panel-").concat(t.key),disabled:t.disabled},l.createElement("span",null,t.label),e&&l.createElement("button",{type:"button","aria-label":Z||"remove",tabIndex:0,className:"".concat(L,"-menu-item-remove"),onClick:function(e){var n,a;e.stopPropagation(),n=e,a=t.key,n.preventDefault(),n.stopPropagation(),m.onEdit("remove",{key:a,event:n})}},t.closeIcon||m.removeIcon||"\xd7"))})));function D(t){for(var e=r.filter((function(t){return!t.disabled})),n=e.findIndex((function(t){return t.key===P}))||0,a=e.length,o=0;o<a;o+=1){var c=e[n=(n+t+a)%a];if(!c.disabled)return void T(c.key)}}(0,l.useEffect)((function(){var t=document.getElementById(B);t&&t.scrollIntoView&&t.scrollIntoView(!1)}),[P]),(0,l.useEffect)((function(){C||T(null)}),[C]);var M=(0,a.Z)({},g?"marginRight":"marginLeft",h);r.length||(M.visibility="hidden",M.order=1);var j=f()((0,a.Z)({},"".concat(L,"-rtl"),g)),z=d?null:l.createElement(q.Z,{prefixCls:L,overlay:O,trigger:["hover"],visible:!!r.length&&C,transitionName:p,onVisibleChange:S,overlayClassName:f()(j,y),mouseEnterDelay:.1,mouseLeaveDelay:.1,getPopupContainer:x},l.createElement("button",{type:"button",className:"".concat(n,"-nav-more"),style:M,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":N,id:"".concat(c,"-more"),"aria-expanded":C,onKeyDown:function(t){var e=t.which;if(C)switch(e){case Y.Z.UP:D(-1),t.preventDefault();break;case Y.Z.DOWN:D(1),t.preventDefault();break;case Y.Z.ESC:S(!1);break;case Y.Z.SPACE:case Y.Z.ENTER:null!==P&&k(P,t)}else[Y.Z.DOWN,Y.Z.SPACE,Y.Z.ENTER].includes(e)&&(S(!0),t.preventDefault())}},u));return l.createElement("div",{className:f()("".concat(n,"-nav-operations"),b),style:v,ref:e},z,l.createElement(X,{prefixCls:n,locale:i,editable:m}))}var Q=l.memo(l.forwardRef(F),(function(t,e){return e.tabMoving}));var J=function(t){var e,n=t.prefixCls,o=t.id,c=t.active,r=t.tab,i=r.key,d=r.label,s=r.disabled,u=r.closeIcon,p=t.closable,v=t.renderWrapper,b=t.removeAriaLabel,m=t.editable,h=t.onClick,g=t.onFocus,Z=t.style,k="".concat(n,"-tab"),x=m&&!1!==p&&!s;function y(t){s||h(t)}var _=l.createElement("div",{key:i,"data-node-key":G(i),className:f()(k,(e={},(0,a.Z)(e,"".concat(k,"-with-remove"),x),(0,a.Z)(e,"".concat(k,"-active"),c),(0,a.Z)(e,"".concat(k,"-disabled"),s),e)),style:Z,onClick:y},l.createElement("div",{role:"tab","aria-selected":c,id:o&&"".concat(o,"-tab-").concat(i),className:"".concat(k,"-btn"),"aria-controls":o&&"".concat(o,"-panel-").concat(i),"aria-disabled":s,tabIndex:s?null:0,onClick:function(t){t.stopPropagation(),y(t)},onKeyDown:function(t){[Y.Z.SPACE,Y.Z.ENTER].includes(t.which)&&(t.preventDefault(),y(t))},onFocus:g},d),x&&l.createElement("button",{type:"button","aria-label":b||"remove",tabIndex:0,className:"".concat(k,"-remove"),onClick:function(t){var e;t.stopPropagation(),(e=t).preventDefault(),e.stopPropagation(),m.onEdit("remove",{key:i,event:e})}},u||m.removeIcon||"\xd7"));return v?v(_):_},U=function(t){var e=t.current||{},n=e.offsetWidth,a=void 0===n?0:n,o=e.offsetHeight;return[a,void 0===o?0:o]},$=function(t,e){return t[e?0:1]};function tt(t,e){var n,c=l.useContext(x),r=c.prefixCls,d=c.tabs,s=t.className,u=t.style,p=t.id,v=t.animated,m=t.activeKey,h=t.rtl,g=t.extra,Z=t.editable,k=t.locale,y=t.tabPosition,_=t.tabBarGutter,w=t.children,C=t.onTabClick,M=t.onTabScroll,H=(0,l.useRef)(),W=(0,l.useRef)(),q=(0,l.useRef)(),V=(0,l.useRef)(),Y=(0,l.useRef)(),F=(0,l.useRef)(),tt=(0,l.useRef)(),et="top"===y||"bottom"===y,nt=L(0,(function(t,e){et&&M&&M({direction:t>e?"left":"right"})})),at=(0,o.Z)(nt,2),ot=at[0],ct=at[1],rt=L(0,(function(t,e){!et&&M&&M({direction:t>e?"top":"bottom"})})),it=(0,o.Z)(rt,2),lt=it[0],dt=it[1],st=(0,l.useState)([0,0]),ut=(0,o.Z)(st,2),pt=ut[0],vt=ut[1],ft=(0,l.useState)([0,0]),bt=(0,o.Z)(ft,2),mt=bt[0],ht=bt[1],gt=(0,l.useState)([0,0]),Zt=(0,o.Z)(gt,2),kt=Zt[0],xt=Zt[1],yt=(0,l.useState)([0,0]),_t=(0,o.Z)(yt,2),wt=_t[0],Ct=_t[1],St=function(t){var e=(0,l.useRef)([]),n=(0,l.useState)({}),a=(0,o.Z)(n,2)[1],c=(0,l.useRef)("function"===typeof t?t():t),r=j((function(){var t=c.current;e.current.forEach((function(e){t=e(t)})),e.current=[],c.current=t,a({})}));return[c.current,function(t){e.current.push(t),r()}]}(new Map),Et=(0,o.Z)(St,2),Rt=Et[0],Pt=Et[1],Tt=function(t,e,n){return(0,l.useMemo)((function(){for(var n,a=new Map,o=e.get(null===(n=t[0])||void 0===n?void 0:n.key)||N,c=o.left+o.width,r=0;r<t.length;r+=1){var l,d=t[r].key,s=e.get(d);s||(s=e.get(null===(l=t[r-1])||void 0===l?void 0:l.key)||N);var u=a.get(d)||(0,i.Z)({},s);u.right=c-u.left-u.width,a.set(d,u)}return a}),[t.map((function(t){return t.key})).join("_"),e,n])}(d,Rt,mt[0]),Nt=$(pt,et),Lt=$(mt,et),Bt=$(kt,et),It=$(wt,et),Ot=Nt<Lt+Bt,Dt=Ot?Nt-It:Nt-Bt,Mt="".concat(r,"-nav-operations-hidden"),jt=0,zt=0;function At(t){return t<jt?jt:t>zt?zt:t}et&&h?(jt=0,zt=Math.max(0,Lt-Dt)):(jt=Math.min(0,Dt-Lt),zt=0);var Ht=(0,l.useRef)(),Gt=(0,l.useState)(),Wt=(0,o.Z)(Gt,2),Xt=Wt[0],Kt=Wt[1];function qt(){Kt(Date.now())}function Vt(){window.clearTimeout(Ht.current)}!function(t,e){var n=(0,l.useState)(),a=(0,o.Z)(n,2),c=a[0],r=a[1],i=(0,l.useState)(0),d=(0,o.Z)(i,2),s=d[0],u=d[1],p=(0,l.useState)(0),v=(0,o.Z)(p,2),f=v[0],b=v[1],m=(0,l.useState)(),h=(0,o.Z)(m,2),g=h[0],Z=h[1],k=(0,l.useRef)(),x=(0,l.useRef)(),y=(0,l.useRef)(null);y.current={onTouchStart:function(t){var e=t.touches[0],n=e.screenX,a=e.screenY;r({x:n,y:a}),window.clearInterval(k.current)},onTouchMove:function(t){if(c){t.preventDefault();var n=t.touches[0],a=n.screenX,o=n.screenY;r({x:a,y:o});var i=a-c.x,l=o-c.y;e(i,l);var d=Date.now();u(d),b(d-s),Z({x:i,y:l})}},onTouchEnd:function(){if(c&&(r(null),Z(null),g)){var t=g.x/f,n=g.y/f,a=Math.abs(t),o=Math.abs(n);if(Math.max(a,o)<B)return;var i=t,l=n;k.current=window.setInterval((function(){Math.abs(i)<I&&Math.abs(l)<I?window.clearInterval(k.current):e((i*=D)*O,(l*=D)*O)}),O)}},onWheel:function(t){var n=t.deltaX,a=t.deltaY,o=0,c=Math.abs(n),r=Math.abs(a);c===r?o="x"===x.current?n:a:c>r?(o=n,x.current="x"):(o=a,x.current="y"),e(-o,-o)&&t.preventDefault()}},l.useEffect((function(){function e(t){y.current.onTouchMove(t)}function n(t){y.current.onTouchEnd(t)}return document.addEventListener("touchmove",e,{passive:!1}),document.addEventListener("touchend",n,{passive:!1}),t.current.addEventListener("touchstart",(function(t){y.current.onTouchStart(t)}),{passive:!1}),t.current.addEventListener("wheel",(function(t){y.current.onWheel(t)})),function(){document.removeEventListener("touchmove",e),document.removeEventListener("touchend",n)}}),[])}(V,(function(t,e){function n(t,e){t((function(t){return At(t+e)}))}return!!Ot&&(et?n(ct,t):n(dt,e),Vt(),qt(),!0)})),(0,l.useEffect)((function(){return Vt(),Xt&&(Ht.current=window.setTimeout((function(){Kt(0)}),100)),Vt}),[Xt]);var Yt=function(t,e,n,a,o,c,r){var i,d,s,u=r.tabs,p=r.tabPosition,v=r.rtl;return["top","bottom"].includes(p)?(i="width",d=v?"right":"left",s=Math.abs(n)):(i="height",d="top",s=-n),(0,l.useMemo)((function(){if(!u.length)return[0,0];for(var n=u.length,a=n,o=0;o<n;o+=1){var c=t.get(u[o].key)||z;if(c[d]+c[i]>s+e){a=o-1;break}}for(var r=0,l=n-1;l>=0;l-=1)if((t.get(u[l].key)||z)[d]<s){r=l+1;break}return[r,a]}),[t,e,a,o,c,s,p,u.map((function(t){return t.key})).join("_"),v])}(Tt,Dt,et?ot:lt,Lt,Bt,It,(0,i.Z)((0,i.Z)({},t),{},{tabs:d})),Ft=(0,o.Z)(Yt,2),Qt=Ft[0],Jt=Ft[1],Ut=(0,R.Z)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,e=Tt.get(t)||{width:0,height:0,left:0,right:0,top:0};if(et){var n=ot;h?e.right<ot?n=e.right:e.right+e.width>ot+Dt&&(n=e.right+e.width-Dt):e.left<-ot?n=-e.left:e.left+e.width>-ot+Dt&&(n=-(e.left+e.width-Dt)),dt(0),ct(At(n))}else{var a=lt;e.top<-lt?a=-e.top:e.top+e.height>-lt+Dt&&(a=-(e.top+e.height-Dt)),ct(0),dt(At(a))}})),$t={};"top"===y||"bottom"===y?$t[h?"marginRight":"marginLeft"]=_:$t.marginTop=_;var te=d.map((function(t,e){var n=t.key;return l.createElement(J,{id:p,prefixCls:r,key:n,tab:t,style:0===e?void 0:$t,closable:t.closable,editable:Z,active:n===m,renderWrapper:w,removeAriaLabel:null===k||void 0===k?void 0:k.removeAriaLabel,onClick:function(t){C(n,t)},onFocus:function(){Ut(n),qt(),V.current&&(h||(V.current.scrollLeft=0),V.current.scrollTop=0)}})})),ee=function(){return Pt((function(){var t=new Map;return d.forEach((function(e){var n,a=e.key,o=null===(n=Y.current)||void 0===n?void 0:n.querySelector('[data-node-key="'.concat(G(a),'"]'));o&&t.set(a,{width:o.offsetWidth,height:o.offsetHeight,left:o.offsetLeft,top:o.offsetTop})})),t}))};(0,l.useEffect)((function(){ee()}),[d.map((function(t){return t.key})).join("_")]);var ne=j((function(){var t=U(H),e=U(W),n=U(q);vt([t[0]-e[0]-n[0],t[1]-e[1]-n[1]]);var a=U(tt);xt(a);var o=U(F);Ct(o);var c=U(Y);ht([c[0]-a[0],c[1]-a[1]]),ee()})),ae=d.slice(0,Qt),oe=d.slice(Jt+1),ce=[].concat((0,S.Z)(ae),(0,S.Z)(oe)),re=(0,l.useState)(),ie=(0,o.Z)(re,2),le=ie[0],de=ie[1],se=Tt.get(m),ue=(0,l.useRef)();function pe(){P.Z.cancel(ue.current)}(0,l.useEffect)((function(){var t={};return se&&(et?(h?t.right=se.right:t.left=se.left,t.width=se.width):(t.top=se.top,t.height=se.height)),pe(),ue.current=(0,P.Z)((function(){de(t)})),pe}),[se,et,h]),(0,l.useEffect)((function(){Ut()}),[m,jt,zt,A(se),A(Tt),et]),(0,l.useEffect)((function(){ne()}),[h]);var ve,fe,be,me,he=!!ce.length,ge="".concat(r,"-nav-wrap");return et?h?(fe=ot>0,ve=ot!==zt):(ve=ot<0,fe=ot!==jt):(be=lt<0,me=lt!==jt),l.createElement(E.Z,{onResize:ne},l.createElement("div",{ref:(0,T.x1)(e,H),role:"tablist",className:f()("".concat(r,"-nav"),s),style:u,onKeyDown:function(){qt()}},l.createElement(K,{ref:W,position:"left",extra:g,prefixCls:r}),l.createElement("div",{className:f()(ge,(n={},(0,a.Z)(n,"".concat(ge,"-ping-left"),ve),(0,a.Z)(n,"".concat(ge,"-ping-right"),fe),(0,a.Z)(n,"".concat(ge,"-ping-top"),be),(0,a.Z)(n,"".concat(ge,"-ping-bottom"),me),n)),ref:V},l.createElement(E.Z,{onResize:ne},l.createElement("div",{ref:Y,className:"".concat(r,"-nav-list"),style:{transform:"translate(".concat(ot,"px, ").concat(lt,"px)"),transition:Xt?"none":void 0}},te,l.createElement(X,{ref:tt,prefixCls:r,locale:k,editable:Z,style:(0,i.Z)((0,i.Z)({},0===te.length?void 0:$t),{},{visibility:he?"hidden":null})}),l.createElement("div",{className:f()("".concat(r,"-ink-bar"),(0,a.Z)({},"".concat(r,"-ink-bar-animated"),v.inkBar)),style:le})))),l.createElement(Q,(0,b.Z)({},t,{removeAriaLabel:null===k||void 0===k?void 0:k.removeAriaLabel,ref:F,prefixCls:r,tabs:ce,className:!he&&Mt,tabMoving:!!Xt})),l.createElement(K,{ref:q,position:"right",extra:g,prefixCls:r})))}var et=l.forwardRef(tt),nt=["renderTabBar"],at=["label","key"];function ot(t){var e=t.renderTabBar,n=(0,h.Z)(t,nt),a=l.useContext(x).tabs;return e?e((0,i.Z)((0,i.Z)({},n),{},{panes:a.map((function(t){var e=t.label,n=t.key,a=(0,h.Z)(t,at);return l.createElement(_,(0,b.Z)({tab:e,key:n,tabKey:n},a))}))}),et):l.createElement(et,n)}n(60632);var ct=["id","prefixCls","className","items","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll","getPopupContainer","popupClassName"],rt=0;function it(t,e){var n,c=t.id,r=t.prefixCls,d=void 0===r?"rc-tabs":r,s=t.className,u=t.items,p=t.direction,v=t.activeKey,k=t.defaultActiveKey,y=t.editable,_=t.animated,w=t.tabPosition,S=void 0===w?"top":w,E=t.tabBarGutter,R=t.tabBarStyle,P=t.tabBarExtraContent,T=t.locale,N=t.moreIcon,L=t.moreTransitionName,B=t.destroyInactiveTabPane,I=t.renderTabBar,O=t.onChange,D=t.onTabClick,M=t.onTabScroll,j=t.getPopupContainer,z=t.popupClassName,A=(0,h.Z)(t,ct),H=l.useMemo((function(){return(u||[]).filter((function(t){return t&&"object"===(0,m.Z)(t)&&"key"in t}))}),[u]),G="rtl"===p,W=function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{inkBar:!0,tabPane:!1};return(t=!1===e?{inkBar:!1,tabPane:!1}:!0===e?{inkBar:!0,tabPane:!1}:(0,i.Z)({inkBar:!0},"object"===(0,m.Z)(e)?e:{})).tabPaneMotion&&void 0===t.tabPane&&(t.tabPane=!0),!t.tabPaneMotion&&t.tabPane&&(t.tabPane=!1),t}(_),X=(0,l.useState)(!1),K=(0,o.Z)(X,2),q=K[0],V=K[1];(0,l.useEffect)((function(){V((0,g.Z)())}),[]);var Y=(0,Z.Z)((function(){var t;return null===(t=H[0])||void 0===t?void 0:t.key}),{value:v,defaultValue:k}),F=(0,o.Z)(Y,2),Q=F[0],J=F[1],U=(0,l.useState)((function(){return H.findIndex((function(t){return t.key===Q}))})),$=(0,o.Z)(U,2),tt=$[0],et=$[1];(0,l.useEffect)((function(){var t,e=H.findIndex((function(t){return t.key===Q}));-1===e&&(e=Math.max(0,Math.min(tt,H.length-1)),J(null===(t=H[e])||void 0===t?void 0:t.key));et(e)}),[H.map((function(t){return t.key})).join("_"),Q,tt]);var nt=(0,Z.Z)(null,{value:c}),at=(0,o.Z)(nt,2),it=at[0],lt=at[1];(0,l.useEffect)((function(){c||(lt("rc-tabs-".concat(rt)),rt+=1)}),[]);var dt={id:it,activeKey:Q,animated:W,tabPosition:S,rtl:G,mobile:q},st=(0,i.Z)((0,i.Z)({},dt),{},{editable:y,locale:T,moreIcon:N,moreTransitionName:L,tabBarGutter:E,onTabClick:function(t,e){null===D||void 0===D||D(t,e);var n=t!==Q;J(t),n&&(null===O||void 0===O||O(t))},onTabScroll:M,extra:P,style:R,panes:null,getPopupContainer:j,popupClassName:z});return l.createElement(x.Provider,{value:{tabs:H,prefixCls:d}},l.createElement("div",(0,b.Z)({ref:e,id:c,className:f()(d,"".concat(d,"-").concat(S),(n={},(0,a.Z)(n,"".concat(d,"-mobile"),q),(0,a.Z)(n,"".concat(d,"-editable"),y),(0,a.Z)(n,"".concat(d,"-rtl"),G),n),s)},A),undefined,l.createElement(ot,(0,b.Z)({},st,{renderTabBar:I})),l.createElement(C,(0,b.Z)({destroyInactiveTabPane:B},dt,{animated:W}))))}var lt=l.forwardRef(it),dt=n(71929),st=n(1815),ut=n(29464),pt={motionAppear:!1,motionEnter:!0,motionLeave:!0};var vt=n(85501),ft=function(t,e){var n={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(t);o<a.length;o++)e.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(t,a[o])&&(n[a[o]]=t[a[o]])}return n};var bt=function(){return null},mt=n(55564),ht=n(89922),gt=n(67521),Zt=n(25541),kt=function(t){var e=t.componentCls,n=t.motionDurationSlow;return[(0,a.Z)({},e,(0,a.Z)({},"".concat(e,"-switch"),{"&-appear, &-enter":{transition:"none","&-start":{opacity:0},"&-active":{opacity:1,transition:"opacity ".concat(n)}},"&-leave":{position:"absolute",transition:"none",inset:0,"&-start":{opacity:1},"&-active":{opacity:0,transition:"opacity ".concat(n)}}})),[(0,Zt.oN)(t,"slide-up"),(0,Zt.oN)(t,"slide-down")]]},xt=function(t){var e,n,o,c,r,i,l=t.componentCls,d=t.tabsCardHorizontalPadding,s=t.tabsCardHeadBackground,u=t.tabsCardGutter,p=t.colorBorderSecondary;return(0,a.Z)({},"".concat(l,"-card"),(i={},(0,a.Z)(i,"> ".concat(l,"-nav, > div > ").concat(l,"-nav"),(e={},(0,a.Z)(e,"".concat(l,"-tab"),{margin:0,padding:d,background:s,border:"".concat(t.lineWidth,"px ").concat(t.lineType," ").concat(p),transition:"all ".concat(t.motionDurationSlow," ").concat(t.motionEaseInOut)}),(0,a.Z)(e,"".concat(l,"-tab-active"),{color:t.colorPrimary,background:t.colorBgContainer}),(0,a.Z)(e,"".concat(l,"-ink-bar"),{visibility:"hidden"}),e)),(0,a.Z)(i,"&".concat(l,"-top, &").concat(l,"-bottom"),(0,a.Z)({},"> ".concat(l,"-nav, > div > ").concat(l,"-nav"),(0,a.Z)({},"".concat(l,"-tab + ").concat(l,"-tab"),{marginLeft:{_skip_check_:!0,value:"".concat(u,"px")}}))),(0,a.Z)(i,"&".concat(l,"-top"),(0,a.Z)({},"> ".concat(l,"-nav, > div > ").concat(l,"-nav"),(n={},(0,a.Z)(n,"".concat(l,"-tab"),{borderRadius:"".concat(t.borderRadiusLG,"px ").concat(t.borderRadiusLG,"px 0 0")}),(0,a.Z)(n,"".concat(l,"-tab-active"),{borderBottomColor:t.colorBgContainer}),n))),(0,a.Z)(i,"&".concat(l,"-bottom"),(0,a.Z)({},"> ".concat(l,"-nav, > div > ").concat(l,"-nav"),(o={},(0,a.Z)(o,"".concat(l,"-tab"),{borderRadius:"0 0 ".concat(t.borderRadiusLG,"px ").concat(t.borderRadiusLG,"px")}),(0,a.Z)(o,"".concat(l,"-tab-active"),{borderTopColor:t.colorBgContainer}),o))),(0,a.Z)(i,"&".concat(l,"-left, &").concat(l,"-right"),(0,a.Z)({},"> ".concat(l,"-nav, > div > ").concat(l,"-nav"),(0,a.Z)({},"".concat(l,"-tab + ").concat(l,"-tab"),{marginTop:"".concat(u,"px")}))),(0,a.Z)(i,"&".concat(l,"-left"),(0,a.Z)({},"> ".concat(l,"-nav, > div > ").concat(l,"-nav"),(c={},(0,a.Z)(c,"".concat(l,"-tab"),{borderRadius:{_skip_check_:!0,value:"".concat(t.borderRadiusLG,"px 0 0 ").concat(t.borderRadiusLG,"px")}}),(0,a.Z)(c,"".concat(l,"-tab-active"),{borderRightColor:{_skip_check_:!0,value:t.colorBgContainer}}),c))),(0,a.Z)(i,"&".concat(l,"-right"),(0,a.Z)({},"> ".concat(l,"-nav, > div > ").concat(l,"-nav"),(r={},(0,a.Z)(r,"".concat(l,"-tab"),{borderRadius:{_skip_check_:!0,value:"0 ".concat(t.borderRadiusLG,"px ").concat(t.borderRadiusLG,"px 0")}}),(0,a.Z)(r,"".concat(l,"-tab-active"),{borderLeftColor:{_skip_check_:!0,value:t.colorBgContainer}}),r))),i))},yt=function(t){var e=t.componentCls,n=t.tabsHoverColor,o=t.dropdownEdgeChildVerticalPadding;return(0,a.Z)({},"".concat(e,"-dropdown"),Object.assign(Object.assign({},(0,gt.Wf)(t)),(0,a.Z)({position:"absolute",top:-9999,left:{_skip_check_:!0,value:-9999},zIndex:t.zIndexPopup,display:"block","&-hidden":{display:"none"}},"".concat(e,"-dropdown-menu"),{maxHeight:t.tabsDropdownHeight,margin:0,padding:"".concat(o,"px 0"),overflowX:"hidden",overflowY:"auto",textAlign:{_skip_check_:!0,value:"left"},listStyleType:"none",backgroundColor:t.colorBgContainer,backgroundClip:"padding-box",borderRadius:t.borderRadiusLG,outline:"none",boxShadow:t.boxShadowSecondary,"&-item":Object.assign(Object.assign({},gt.vS),{display:"flex",alignItems:"center",minWidth:t.tabsDropdownWidth,margin:0,padding:"".concat(t.paddingXXS,"px ").concat(t.paddingSM,"px"),color:t.colorText,fontWeight:"normal",fontSize:t.fontSize,lineHeight:t.lineHeight,cursor:"pointer",transition:"all ".concat(t.motionDurationSlow),"> span":{flex:1,whiteSpace:"nowrap"},"&-remove":{flex:"none",marginLeft:{_skip_check_:!0,value:t.marginSM},color:t.colorTextDescription,fontSize:t.fontSizeSM,background:"transparent",border:0,cursor:"pointer","&:hover":{color:n}},"&:hover":{background:t.controlItemBgHover},"&-disabled":{"&, &:hover":{color:t.colorTextDisabled,background:"transparent",cursor:"not-allowed"}}})})))},_t=function(t){var e,n,o,c,r,i,l,d,s=t.componentCls,u=t.margin,p=t.colorBorderSecondary;return d={},(0,a.Z)(d,"".concat(s,"-top, ").concat(s,"-bottom"),(0,a.Z)({flexDirection:"column"},"> ".concat(s,"-nav, > div > ").concat(s,"-nav"),(n={margin:"0 0 ".concat(u,"px 0"),"&::before":{position:"absolute",right:{_skip_check_:!0,value:0},left:{_skip_check_:!0,value:0},borderBottom:"".concat(t.lineWidth,"px ").concat(t.lineType," ").concat(p),content:"''"}},(0,a.Z)(n,"".concat(s,"-ink-bar"),{height:t.lineWidthBold,"&-animated":{transition:"width ".concat(t.motionDurationSlow,", left ").concat(t.motionDurationSlow,",\n            right ").concat(t.motionDurationSlow)}}),(0,a.Z)(n,"".concat(s,"-nav-wrap"),(e={"&::before, &::after":{top:0,bottom:0,width:t.controlHeight},"&::before":{left:{_skip_check_:!0,value:0},boxShadow:t.boxShadowTabsOverflowLeft},"&::after":{right:{_skip_check_:!0,value:0},boxShadow:t.boxShadowTabsOverflowRight}},(0,a.Z)(e,"&".concat(s,"-nav-wrap-ping-left::before"),{opacity:1}),(0,a.Z)(e,"&".concat(s,"-nav-wrap-ping-right::after"),{opacity:1}),e)),n))),(0,a.Z)(d,"".concat(s,"-top"),(0,a.Z)({},"> ".concat(s,"-nav,\n        > div > ").concat(s,"-nav"),(0,a.Z)({"&::before":{bottom:0}},"".concat(s,"-ink-bar"),{bottom:0}))),(0,a.Z)(d,"".concat(s,"-bottom"),(o={},(0,a.Z)(o,"> ".concat(s,"-nav, > div > ").concat(s,"-nav"),(0,a.Z)({order:1,marginTop:"".concat(u,"px"),marginBottom:0,"&::before":{top:0}},"".concat(s,"-ink-bar"),{top:0})),(0,a.Z)(o,"> ".concat(s,"-content-holder, > div > ").concat(s,"-content-holder"),{order:0}),o)),(0,a.Z)(d,"".concat(s,"-left, ").concat(s,"-right"),(0,a.Z)({},"> ".concat(s,"-nav, > div > ").concat(s,"-nav"),(r={flexDirection:"column",minWidth:1.25*t.controlHeight},(0,a.Z)(r,"".concat(s,"-tab"),{padding:"".concat(t.paddingXS,"px ").concat(t.paddingLG,"px"),textAlign:"center"}),(0,a.Z)(r,"".concat(s,"-tab + ").concat(s,"-tab"),{margin:"".concat(t.margin,"px 0 0 0")}),(0,a.Z)(r,"".concat(s,"-nav-wrap"),(c={flexDirection:"column","&::before, &::after":{right:{_skip_check_:!0,value:0},left:{_skip_check_:!0,value:0},height:t.controlHeight},"&::before":{top:0,boxShadow:t.boxShadowTabsOverflowTop},"&::after":{bottom:0,boxShadow:t.boxShadowTabsOverflowBottom}},(0,a.Z)(c,"&".concat(s,"-nav-wrap-ping-top::before"),{opacity:1}),(0,a.Z)(c,"&".concat(s,"-nav-wrap-ping-bottom::after"),{opacity:1}),c)),(0,a.Z)(r,"".concat(s,"-ink-bar"),{width:t.lineWidthBold,"&-animated":{transition:"height ".concat(t.motionDurationSlow,", top ").concat(t.motionDurationSlow)}}),(0,a.Z)(r,"".concat(s,"-nav-list, ").concat(s,"-nav-operations"),{flex:"1 0 auto",flexDirection:"column"}),r))),(0,a.Z)(d,"".concat(s,"-left"),(i={},(0,a.Z)(i,"> ".concat(s,"-nav, > div > ").concat(s,"-nav"),(0,a.Z)({},"".concat(s,"-ink-bar"),{right:{_skip_check_:!0,value:0}})),(0,a.Z)(i,"> ".concat(s,"-content-holder, > div > ").concat(s,"-content-holder"),(0,a.Z)({marginLeft:{_skip_check_:!0,value:"-".concat(t.lineWidth,"px")},borderLeft:{_skip_check_:!0,value:"".concat(t.lineWidth,"px ").concat(t.lineType," ").concat(t.colorBorder)}},"> ".concat(s,"-content > ").concat(s,"-tabpane"),{paddingLeft:{_skip_check_:!0,value:t.paddingLG}})),i)),(0,a.Z)(d,"".concat(s,"-right"),(l={},(0,a.Z)(l,"> ".concat(s,"-nav, > div > ").concat(s,"-nav"),(0,a.Z)({order:1},"".concat(s,"-ink-bar"),{left:{_skip_check_:!0,value:0}})),(0,a.Z)(l,"> ".concat(s,"-content-holder, > div > ").concat(s,"-content-holder"),(0,a.Z)({order:0,marginRight:{_skip_check_:!0,value:-t.lineWidth},borderRight:{_skip_check_:!0,value:"".concat(t.lineWidth,"px ").concat(t.lineType," ").concat(t.colorBorder)}},"> ".concat(s,"-content > ").concat(s,"-tabpane"),{paddingRight:{_skip_check_:!0,value:t.paddingLG}})),l)),d},wt=function(t){var e,n,o,c=t.componentCls,r=t.padding;return o={},(0,a.Z)(o,c,{"&-small":(0,a.Z)({},"> ".concat(c,"-nav"),(0,a.Z)({},"".concat(c,"-tab"),{padding:"".concat(t.paddingXS,"px 0"),fontSize:t.fontSize})),"&-large":(0,a.Z)({},"> ".concat(c,"-nav"),(0,a.Z)({},"".concat(c,"-tab"),{padding:"".concat(r,"px 0"),fontSize:t.fontSizeLG}))}),(0,a.Z)(o,"".concat(c,"-card"),(n={},(0,a.Z)(n,"&".concat(c,"-small"),(e={},(0,a.Z)(e,"> ".concat(c,"-nav"),(0,a.Z)({},"".concat(c,"-tab"),{padding:"".concat(1.5*t.paddingXXS,"px ").concat(r,"px")})),(0,a.Z)(e,"&".concat(c,"-bottom"),(0,a.Z)({},"> ".concat(c,"-nav ").concat(c,"-tab"),{borderRadius:"0 0 ".concat(t.borderRadius,"px ").concat(t.borderRadius,"px")})),(0,a.Z)(e,"&".concat(c,"-top"),(0,a.Z)({},"> ".concat(c,"-nav ").concat(c,"-tab"),{borderRadius:"".concat(t.borderRadius,"px ").concat(t.borderRadius,"px 0 0")})),(0,a.Z)(e,"&".concat(c,"-right"),(0,a.Z)({},"> ".concat(c,"-nav ").concat(c,"-tab"),{borderRadius:{_skip_check_:!0,value:"0 ".concat(t.borderRadius,"px ").concat(t.borderRadius,"px 0")}})),(0,a.Z)(e,"&".concat(c,"-left"),(0,a.Z)({},"> ".concat(c,"-nav ").concat(c,"-tab"),{borderRadius:{_skip_check_:!0,value:"".concat(t.borderRadius,"px 0 0 ").concat(t.borderRadius,"px")}})),e)),(0,a.Z)(n,"&".concat(c,"-large"),(0,a.Z)({},"> ".concat(c,"-nav"),(0,a.Z)({},"".concat(c,"-tab"),{padding:"".concat(t.paddingXS,"px ").concat(r,"px ").concat(1.5*t.paddingXXS,"px")}))),n)),o},Ct=function(t){var e,n,o,c,r,i=t.componentCls,l=t.tabsHorizontalGutter,d=t.iconCls,s=t.tabsCardGutter,u="".concat(i,"-rtl");return r={},(0,a.Z)(r,u,(c={direction:"rtl"},(0,a.Z)(c,"".concat(i,"-nav"),(0,a.Z)({},"".concat(i,"-tab"),(e={margin:{_skip_check_:!0,value:"0 0 0 ".concat(l,"px")}},(0,a.Z)(e,"".concat(i,"-tab:last-of-type"),{marginLeft:{_skip_check_:!0,value:0}}),(0,a.Z)(e,d,{marginRight:{_skip_check_:!0,value:0},marginLeft:{_skip_check_:!0,value:"".concat(t.marginSM,"px")}}),(0,a.Z)(e,"".concat(i,"-tab-remove"),(0,a.Z)({marginRight:{_skip_check_:!0,value:"".concat(t.marginXS,"px")},marginLeft:{_skip_check_:!0,value:"-".concat(t.marginXXS,"px")}},d,{margin:0})),e))),(0,a.Z)(c,"&".concat(i,"-left"),(n={},(0,a.Z)(n,"> ".concat(i,"-nav"),{order:1}),(0,a.Z)(n,"> ".concat(i,"-content-holder"),{order:0}),n)),(0,a.Z)(c,"&".concat(i,"-right"),(o={},(0,a.Z)(o,"> ".concat(i,"-nav"),{order:0}),(0,a.Z)(o,"> ".concat(i,"-content-holder"),{order:1}),o)),(0,a.Z)(c,"&".concat(i,"-card").concat(i,"-top, &").concat(i,"-card").concat(i,"-bottom"),(0,a.Z)({},"> ".concat(i,"-nav, > div > ").concat(i,"-nav"),(0,a.Z)({},"".concat(i,"-tab + ").concat(i,"-tab"),{marginRight:{_skip_check_:!0,value:"".concat(s,"px")},marginLeft:{_skip_check_:!0,value:0}}))),c)),(0,a.Z)(r,"".concat(i,"-dropdown-rtl"),{direction:"rtl"}),(0,a.Z)(r,"".concat(i,"-menu-item"),(0,a.Z)({},"".concat(i,"-dropdown-rtl"),{textAlign:{_skip_check_:!0,value:"right"}})),r},St=function(t){var e,n,o,c,r=t.componentCls,i=t.tabsCardHorizontalPadding,l=t.tabsCardHeight,d=t.tabsCardGutter,s=t.tabsHoverColor,u=t.tabsActiveColor,p=t.colorBorderSecondary;return c={},(0,a.Z)(c,r,Object.assign(Object.assign(Object.assign(Object.assign({},(0,gt.Wf)(t)),(n={display:"flex"},(0,a.Z)(n,"> ".concat(r,"-nav, > div > ").concat(r,"-nav"),(e={position:"relative",display:"flex",flex:"none",alignItems:"center"},(0,a.Z)(e,"".concat(r,"-nav-wrap"),{position:"relative",display:"flex",flex:"auto",alignSelf:"stretch",overflow:"hidden",whiteSpace:"nowrap",transform:"translate(0)","&::before, &::after":{position:"absolute",zIndex:1,opacity:0,transition:"opacity ".concat(t.motionDurationSlow),content:"''",pointerEvents:"none"}}),(0,a.Z)(e,"".concat(r,"-nav-list"),{position:"relative",display:"flex",transition:"opacity ".concat(t.motionDurationSlow)}),(0,a.Z)(e,"".concat(r,"-nav-operations"),{display:"flex",alignSelf:"stretch"}),(0,a.Z)(e,"".concat(r,"-nav-operations-hidden"),{position:"absolute",visibility:"hidden",pointerEvents:"none"}),(0,a.Z)(e,"".concat(r,"-nav-more"),{position:"relative",padding:i,background:"transparent",border:0,color:t.colorText,"&::after":{position:"absolute",right:{_skip_check_:!0,value:0},bottom:0,left:{_skip_check_:!0,value:0},height:t.controlHeightLG/8,transform:"translateY(100%)",content:"''"}}),(0,a.Z)(e,"".concat(r,"-nav-add"),Object.assign({minWidth:"".concat(l,"px"),marginLeft:{_skip_check_:!0,value:"".concat(d,"px")},padding:"0 ".concat(t.paddingXS,"px"),background:"transparent",border:"".concat(t.lineWidth,"px ").concat(t.lineType," ").concat(p),borderRadius:"".concat(t.borderRadiusLG,"px ").concat(t.borderRadiusLG,"px 0 0"),outline:"none",cursor:"pointer",color:t.colorText,transition:"all ".concat(t.motionDurationSlow," ").concat(t.motionEaseInOut),"&:hover":{color:s},"&:active, &:focus:not(:focus-visible)":{color:u}},(0,gt.Qy)(t))),e)),(0,a.Z)(n,"".concat(r,"-extra-content"),{flex:"none"}),(0,a.Z)(n,"".concat(r,"-ink-bar"),{position:"absolute",background:t.colorPrimary,pointerEvents:"none"}),n)),function(t){var e,n,o=t.componentCls,c=t.tabsActiveColor,r=t.tabsHoverColor,i=t.iconCls,l=t.tabsHorizontalGutter,d="".concat(o,"-tab");return n={},(0,a.Z)(n,d,(e={position:"relative",display:"inline-flex",alignItems:"center",padding:"".concat(t.paddingSM,"px 0"),fontSize:"".concat(t.fontSize,"px"),background:"transparent",border:0,outline:"none",cursor:"pointer","&-btn, &-remove":Object.assign({"&:focus:not(:focus-visible), &:active":{color:c}},(0,gt.Qy)(t)),"&-btn":{outline:"none",transition:"all 0.3s"},"&-remove":{flex:"none",marginRight:{_skip_check_:!0,value:-t.marginXXS},marginLeft:{_skip_check_:!0,value:t.marginXS},color:t.colorTextDescription,fontSize:t.fontSizeSM,background:"transparent",border:"none",outline:"none",cursor:"pointer",transition:"all ".concat(t.motionDurationSlow),"&:hover":{color:t.colorTextHeading}},"&:hover":{color:r}},(0,a.Z)(e,"&".concat(d,"-active ").concat(d,"-btn"),{color:t.colorPrimary,textShadow:t.tabsActiveTextShadow}),(0,a.Z)(e,"&".concat(d,"-disabled"),{color:t.colorTextDisabled,cursor:"not-allowed"}),(0,a.Z)(e,"&".concat(d,"-disabled ").concat(d,"-btn, &").concat(d,"-disabled ").concat(o,"-remove"),{"&:focus, &:active":{color:t.colorTextDisabled}}),(0,a.Z)(e,"& ".concat(d,"-remove ").concat(i),{margin:0}),(0,a.Z)(e,i,{marginRight:{_skip_check_:!0,value:t.marginSM}}),e)),(0,a.Z)(n,"".concat(d," + ").concat(d),{margin:{_skip_check_:!0,value:"0 0 0 ".concat(l,"px")}}),n}(t)),(o={},(0,a.Z)(o,"".concat(r,"-content"),{position:"relative",width:"100%"}),(0,a.Z)(o,"".concat(r,"-content-holder"),{flex:"auto",minWidth:0,minHeight:0}),(0,a.Z)(o,"".concat(r,"-tabpane"),{outline:"none","&-hidden":{display:"none"}}),o))),(0,a.Z)(c,"".concat(r,"-centered"),(0,a.Z)({},"> ".concat(r,"-nav, > div > ").concat(r,"-nav"),(0,a.Z)({},"".concat(r,"-nav-wrap"),(0,a.Z)({},"&:not([class*='".concat(r,"-nav-wrap-ping'])"),{justifyContent:"center"})))),c},Et=(0,mt.Z)("Tabs",(function(t){var e=t.controlHeightLG,n=(0,ht.TS)(t,{tabsHoverColor:t.colorPrimaryHover,tabsActiveColor:t.colorPrimaryActive,tabsCardHorizontalPadding:"".concat((e-Math.round(t.fontSize*t.lineHeight))/2-t.lineWidth,"px ").concat(t.padding,"px"),tabsCardHeight:e,tabsCardGutter:t.marginXXS/2,tabsHorizontalGutter:32,tabsCardHeadBackground:t.colorFillAlter,dropdownEdgeChildVerticalPadding:t.paddingXXS,tabsActiveTextShadow:"0 0 0.25px currentcolor",tabsDropdownHeight:200,tabsDropdownWidth:120});return[wt(n),Ct(n),_t(n),yt(n),xt(n),St(n),kt(n)]}),(function(t){return{zIndexPopup:t.zIndexPopupBase+50}})),Rt=function(t,e){var n={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(t);o<a.length;o++)e.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(t,a[o])&&(n[a[o]]=t[a[o]])}return n};function Pt(t){var e,n,i=t.type,d=t.className,s=t.rootClassName,u=t.size,v=t.onEdit,b=t.hideAdd,m=t.centered,h=t.addIcon,g=t.popupClassName,Z=t.children,k=t.items,x=t.animated,y=Rt(t,["type","className","rootClassName","size","onEdit","hideAdd","centered","addIcon","popupClassName","children","items","animated"]),_=y.prefixCls,w=y.moreIcon,C=void 0===w?l.createElement(r.Z,null):w,S=l.useContext(dt.E_),E=S.direction,R=S.getPrefixCls,P=S.getPopupContainer,T=R("tabs",_),N=Et(T),L=(0,o.Z)(N,2),B=L[0],I=L[1];"editable-card"===i&&(n={onEdit:function(t,e){var n=e.key,a=e.event;null===v||void 0===v||v("add"===t?a:n,t)},removeIcon:l.createElement(c.Z,null),addIcon:h||l.createElement(p,null),showAdd:!0!==b});var O=R(),D=function(t,e){return t||function(t){return t.filter((function(t){return t}))}((0,vt.Z)(e).map((function(t){if(l.isValidElement(t)){var e=t.key,n=t.props||{},a=n.tab,o=ft(n,["tab"]);return Object.assign(Object.assign({key:String(e)},o),{label:a})}return null})))}(k,Z),M=function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{inkBar:!0,tabPane:!1};return(e=!1===n?{inkBar:!1,tabPane:!1}:!0===n?{inkBar:!0,tabPane:!0}:Object.assign({inkBar:!0},"object"===typeof n?n:{})).tabPane&&(e.tabPaneMotion=Object.assign(Object.assign({},pt),{motionName:(0,ut.mL)(t,"switch")})),e}(T,x),j=l.useContext(st.Z),z=void 0!==u?u:j;return B(l.createElement(lt,Object.assign({direction:E,getPopupContainer:P,moreTransitionName:"".concat(O,"-slide-up")},y,{items:D,className:f()((e={},(0,a.Z)(e,"".concat(T,"-").concat(z),z),(0,a.Z)(e,"".concat(T,"-card"),["card","editable-card"].includes(i)),(0,a.Z)(e,"".concat(T,"-editable-card"),"editable-card"===i),(0,a.Z)(e,"".concat(T,"-centered"),m),e),d,s,I),popupClassName:f()(g,I),editable:n,moreIcon:C,prefixCls:T,animated:M})))}Pt.TabPane=bt;var Tt=Pt}}]);
//# sourceMappingURL=155.e62c9823.chunk.js.map