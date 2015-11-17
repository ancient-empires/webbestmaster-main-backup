(function (gi5366) {
(function () {
'use strict';
/*global window */

var mediator;

function subscribe(channel, fn) {

	var channels = mediator.channels;

	if (!channels[channel]) {
		channels[channel] = [];
	}

	channels[channel].push({context: this, callback: fn});

	return this;

}

function publish(channel) {

	var list = mediator.channels[channel],
		args;

	if ( !list ) {
		return this;
	}

	args = Array.prototype.slice.call(arguments, 1);

	list.forEach(function (item) {
		item.callback.apply(item.context, args);
	});

	return this;

}

function unsubscribe(channel) {

	var channels = mediator.channels,
		ch;

	if (!channel) {

		for (ch in channels) {
			if (channels.hasOwnProperty(ch)) {
				this.unsubscribe(ch);
			}
		}

		return this;

	}

	if (!channels[channel]) {
		return this;
	}

	channels[channel] = channels[channel].filter(function (item) {
		return item.context !== this;
	}, this);

	return this;

}

mediator = {
	channels: {},
	publish: publish,
	subscribe: subscribe,
	unsubscribe: unsubscribe,
	installTo: function (obj) {
		obj.subscribe = subscribe;
		obj.publish = publish;
		obj.unsubscribe = unsubscribe;
	}
};

gi5366['/www/js/services/mediator.js'] = mediator;

}());
(function () {
Function.prototype.bind||(Function.prototype.bind=function(b){if("function"!==typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var e=Array.prototype.slice.call(arguments,1),h=this,d=function(){},g=function(){return h.apply(this instanceof d&&b?this:b,e.concat(Array.prototype.slice.call(arguments)))};d.prototype=this.prototype;g.prototype=new d;return g});
(function(){var b=Object.prototype,e=b.__defineGetter__,h=b.__defineSetter__,d=b.__lookupGetter__,g=b.__lookupSetter__,k=b.hasOwnProperty;e&&h&&d&&g&&(Object.defineProperty||(Object.defineProperty=function(f,c,a){if(3>arguments.length)throw new TypeError("Arguments not optional");c+="";if(k.call(a,"value")&&(d.call(f,c)||g.call(f,c)||(f[c]=a.value),k.call(a,"get")||k.call(a,"set")))throw new TypeError("Cannot specify an accessor and a value");if(!(a.writable&&a.enumerable&&a.configurable))throw new TypeError("This implementation of Object.defineProperty does not support false for configurable, enumerable, or writable.");
	a.get&&e.call(f,c,a.get);a.set&&h.call(f,c,a.set);return f}),Object.getOwnPropertyDescriptor||(Object.getOwnPropertyDescriptor=function(f,c){if(2>arguments.length)throw new TypeError("Arguments not optional.");c+="";var a={configurable:!0,enumerable:!0,writable:!0},b=d.call(f,c),e=g.call(f,c);if(!k.call(f,c))return a;if(!b&&!e)return a.value=f[c],a;delete a.writable;a.get=a.set=void 0;b&&(a.get=b);e&&(a.set=e);return a}),Object.defineProperties||(Object.defineProperties=function(b,c){for(var a in c)k.call(c,
	a)&&Object.defineProperty(b,a,c[a])}))})();
if(!(document.documentElement.dataset||Object.getOwnPropertyDescriptor(Element.prototype,"dataset")&&Object.getOwnPropertyDescriptor(Element.prototype,"dataset").get)){var propDescriptor={enumerable:!0,get:function(){var b,e,h,d,g,k=this.attributes,f=k.length,c=function(a){return a.charAt(1).toUpperCase()},a=function(){return this},l=function(a,b){return"undefined"!==typeof b?this.setAttribute(a,b):this.removeAttribute(a)};try{({}).__defineGetter__("test",function(){}),e={}}catch(m){e=document.createElement("div")}for(b=
																																																																																																																																				0;b<f;b++)if((d=k[b])&&d.name&&/^data-\w[\w\-]*$/.test(d.name)){h=d.value;d=d.name;g=d.substr(5).replace(/-./g,c);try{Object.defineProperty(e,g,{enumerable:this.enumerable,get:a.bind(h||""),set:l.bind(this,d)})}catch(m){e[g]=h}}return e}};try{Object.defineProperty(Element.prototype,"dataset",propDescriptor)}catch(b){propDescriptor.enumerable=!1,Object.defineProperty(Element.prototype,"dataset",propDescriptor)}};
}());
(function () {
/**
 * @license
 * lodash 3.10.1 (Custom Build) lodash.com/license | Underscore.js 1.8.3 underscorejs.org/LICENSE
 * Build: `lodash compat -o ./lodash.js`
 */
;(function(){function n(n,t){if(n!==t){var r=null===n,e=n===w,u=n===n,o=null===t,i=t===w,f=t===t;if(n>t&&!o||!u||r&&!i&&f||e&&f)return 1;if(n<t&&!r||!f||o&&!e&&u||i&&u)return-1}return 0}function t(n,t,r){for(var e=n.length,u=r?e:-1;r?u--:++u<e;)if(t(n[u],u,n))return u;return-1}function r(n,t,r){if(t!==t)return p(n,r);r-=1;for(var e=n.length;++r<e;)if(n[r]===t)return r;return-1}function e(n){return typeof n=="function"||false}function u(n){return null==n?"":n+""}function o(n,t){for(var r=-1,e=n.length;++r<e&&-1<t.indexOf(n.charAt(r)););
    return r}function i(n,t){for(var r=n.length;r--&&-1<t.indexOf(n.charAt(r)););return r}function f(t,r){return n(t.a,r.a)||t.b-r.b}function a(n){return Nn[n]}function c(n){return Tn[n]}function l(n,t,r){return t?n=Bn[n]:r&&(n=Dn[n]),"\\"+n}function s(n){return"\\"+Dn[n]}function p(n,t,r){var e=n.length;for(t+=r?0:-1;r?t--:++t<e;){var u=n[t];if(u!==u)return t}return-1}function h(n){return!!n&&typeof n=="object"}function _(n){return 160>=n&&9<=n&&13>=n||32==n||160==n||5760==n||6158==n||8192<=n&&(8202>=n||8232==n||8233==n||8239==n||8287==n||12288==n||65279==n);
}function v(n,t){for(var r=-1,e=n.length,u=-1,o=[];++r<e;)n[r]===t&&(n[r]=P,o[++u]=r);return o}function g(n){for(var t=-1,r=n.length;++t<r&&_(n.charCodeAt(t)););return t}function y(n){for(var t=n.length;t--&&_(n.charCodeAt(t)););return t}function d(n){return Pn[n]}function m(_){function Nn(n){if(h(n)&&!(Wo(n)||n instanceof zn)){if(n instanceof Pn)return n;if(eu.call(n,"__chain__")&&eu.call(n,"__wrapped__"))return qr(n)}return new Pn(n)}function Tn(){}function Pn(n,t,r){this.__wrapped__=n,this.__actions__=r||[],
    this.__chain__=!!t}function zn(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=false,this.__iteratees__=[],this.__takeCount__=Cu,this.__views__=[]}function Bn(){this.__data__={}}function Dn(n){var t=n?n.length:0;for(this.data={hash:mu(null),set:new hu};t--;)this.push(n[t])}function Mn(n,t){var r=n.data;return(typeof t=="string"||de(t)?r.set.has(t):r.hash[t])?0:-1}function qn(n,t){var r=-1,e=n.length;for(t||(t=De(e));++r<e;)t[r]=n[r];return t}function Kn(n,t){for(var r=-1,e=n.length;++r<e&&false!==t(n[r],r,n););
    return n}function Vn(n,t){for(var r=-1,e=n.length;++r<e;)if(!t(n[r],r,n))return false;return true}function Zn(n,t){for(var r=-1,e=n.length,u=-1,o=[];++r<e;){var i=n[r];t(i,r,n)&&(o[++u]=i)}return o}function Xn(n,t){for(var r=-1,e=n.length,u=De(e);++r<e;)u[r]=t(n[r],r,n);return u}function Hn(n,t){for(var r=-1,e=t.length,u=n.length;++r<e;)n[u+r]=t[r];return n}function Qn(n,t,r,e){var u=-1,o=n.length;for(e&&o&&(r=n[++u]);++u<o;)r=t(r,n[u],u,n);return r}function nt(n,t){for(var r=-1,e=n.length;++r<e;)if(t(n[r],r,n))return true;
    return false}function tt(n,t,r,e){return n!==w&&eu.call(e,r)?n:t}function rt(n,t,r){for(var e=-1,u=Ko(t),o=u.length;++e<o;){var i=u[e],f=n[i],a=r(f,t[i],i,n,t);(a===a?a===f:f!==f)&&(f!==w||i in n)||(n[i]=a)}return n}function et(n,t){return null==t?n:ot(t,Ko(t),n)}function ut(n,t){for(var r=-1,e=null==n,u=!e&&Sr(n),o=u?n.length:0,i=t.length,f=De(i);++r<i;){var a=t[r];f[r]=u?Ur(a,o)?n[a]:w:e?w:n[a]}return f}function ot(n,t,r){r||(r={});for(var e=-1,u=t.length;++e<u;){var o=t[e];r[o]=n[o]}return r}function it(n,t,r){
    var e=typeof n;return"function"==e?t===w?n:Dt(n,t,r):null==n?Ne:"object"==e?At(n):t===w?Be(n):jt(n,t)}function ft(n,t,r,e,u,o,i){var f;if(r&&(f=u?r(n,e,u):r(n)),f!==w)return f;if(!de(n))return n;if(e=Wo(n)){if(f=Ir(n),!t)return qn(n,f)}else{var a=ou.call(n),c=a==K;if(a!=Z&&a!=z&&(!c||u))return Ln[a]?Er(n,a,t):u?n:{};if(Gn(n))return u?n:{};if(f=Rr(c?{}:n),!t)return et(f,n)}for(o||(o=[]),i||(i=[]),u=o.length;u--;)if(o[u]==n)return i[u];return o.push(n),i.push(f),(e?Kn:gt)(n,function(e,u){f[u]=ft(e,t,r,u,n,o,i);
}),f}function at(n,t,r){if(typeof n!="function")throw new Xe(T);return _u(function(){n.apply(w,r)},t)}function ct(n,t){var e=n?n.length:0,u=[];if(!e)return u;var o=-1,i=jr(),f=i===r,a=f&&t.length>=F&&mu&&hu?new Dn(t):null,c=t.length;a&&(i=Mn,f=false,t=a);n:for(;++o<e;)if(a=n[o],f&&a===a){for(var l=c;l--;)if(t[l]===a)continue n;u.push(a)}else 0>i(t,a,0)&&u.push(a);return u}function lt(n,t){var r=true;return zu(n,function(n,e,u){return r=!!t(n,e,u)}),r}function st(n,t,r,e){var u=e,o=u;return zu(n,function(n,i,f){
    i=+t(n,i,f),(r(i,u)||i===e&&i===o)&&(u=i,o=n)}),o}function pt(n,t){var r=[];return zu(n,function(n,e,u){t(n,e,u)&&r.push(n)}),r}function ht(n,t,r,e){var u;return r(n,function(n,r,o){return t(n,r,o)?(u=e?r:n,false):void 0}),u}function _t(n,t,r,e){e||(e=[]);for(var u=-1,o=n.length;++u<o;){var i=n[u];h(i)&&Sr(i)&&(r||Wo(i)||_e(i))?t?_t(i,t,r,e):Hn(e,i):r||(e[e.length]=i)}return e}function vt(n,t){return Du(n,t,Ee)}function gt(n,t){return Du(n,t,Ko)}function yt(n,t){return Mu(n,t,Ko)}function dt(n,t){for(var r=-1,e=t.length,u=-1,o=[];++r<e;){
    var i=t[r];ye(n[i])&&(o[++u]=i)}return o}function mt(n,t,r){if(null!=n){n=Dr(n),r!==w&&r in n&&(t=[r]),r=0;for(var e=t.length;null!=n&&r<e;)n=Dr(n)[t[r++]];return r&&r==e?n:w}}function wt(n,t,r,e,u,o){if(n===t)return true;if(null==n||null==t||!de(n)&&!h(t))return n!==n&&t!==t;n:{var i=wt,f=Wo(n),a=Wo(t),c=B,l=B;f||(c=ou.call(n),c==z?c=Z:c!=Z&&(f=je(n))),a||(l=ou.call(t),l==z?l=Z:l!=Z&&je(t));var s=c==Z&&!Gn(n),a=l==Z&&!Gn(t),l=c==l;if(!l||f||s){if(!e&&(c=s&&eu.call(n,"__wrapped__"),a=a&&eu.call(t,"__wrapped__"),
    c||a)){n=i(c?n.value():n,a?t.value():t,r,e,u,o);break n}if(l){for(u||(u=[]),o||(o=[]),c=u.length;c--;)if(u[c]==n){n=o[c]==t;break n}u.push(n),o.push(t),n=(f?mr:xr)(n,t,i,r,e,u,o),u.pop(),o.pop()}else n=false}else n=wr(n,t,c)}return n}function xt(n,t,r){var e=t.length,u=e,o=!r;if(null==n)return!u;for(n=Dr(n);e--;){var i=t[e];if(o&&i[2]?i[1]!==n[i[0]]:!(i[0]in n))return false}for(;++e<u;){var i=t[e],f=i[0],a=n[f],c=i[1];if(o&&i[2]){if(a===w&&!(f in n))return false}else if(i=r?r(a,c,f):w,i===w?!wt(c,a,r,true):!i)return false;
}return true}function bt(n,t){var r=-1,e=Sr(n)?De(n.length):[];return zu(n,function(n,u,o){e[++r]=t(n,u,o)}),e}function At(n){var t=kr(n);if(1==t.length&&t[0][2]){var r=t[0][0],e=t[0][1];return function(n){return null==n?false:(n=Dr(n),n[r]===e&&(e!==w||r in n))}}return function(n){return xt(n,t)}}function jt(n,t){var r=Wo(n),e=Wr(n)&&t===t&&!de(t),u=n+"";return n=Mr(n),function(o){if(null==o)return false;var i=u;if(o=Dr(o),!(!r&&e||i in o)){if(o=1==n.length?o:mt(o,St(n,0,-1)),null==o)return false;i=Gr(n),o=Dr(o);
}return o[i]===t?t!==w||i in o:wt(t,o[i],w,true)}}function kt(n,t,r,e,u){if(!de(n))return n;var o=Sr(t)&&(Wo(t)||je(t)),i=o?w:Ko(t);return Kn(i||t,function(f,a){if(i&&(a=f,f=t[a]),h(f)){e||(e=[]),u||(u=[]);n:{for(var c=a,l=e,s=u,p=l.length,_=t[c];p--;)if(l[p]==_){n[c]=s[p];break n}var p=n[c],v=r?r(p,_,c,n,t):w,g=v===w;g&&(v=_,Sr(_)&&(Wo(_)||je(_))?v=Wo(p)?p:Sr(p)?qn(p):[]:xe(_)||_e(_)?v=_e(p)?Ie(p):xe(p)?p:{}:g=false),l.push(_),s.push(v),g?n[c]=kt(v,_,r,l,s):(v===v?v!==p:p===p)&&(n[c]=v)}}else c=n[a],
    l=r?r(c,f,a,n,t):w,(s=l===w)&&(l=f),l===w&&(!o||a in n)||!s&&(l===l?l===c:c!==c)||(n[a]=l)}),n}function Ot(n){return function(t){return null==t?w:Dr(t)[n]}}function It(n){var t=n+"";return n=Mr(n),function(r){return mt(r,n,t)}}function Rt(n,t){for(var r=n?t.length:0;r--;){var e=t[r];if(e!=u&&Ur(e)){var u=e;vu.call(n,e,1)}}return n}function Et(n,t){return n+wu(Ru()*(t-n+1))}function Ct(n,t,r,e,u){return u(n,function(n,u,o){r=e?(e=false,n):t(r,n,u,o)}),r}function St(n,t,r){var e=-1,u=n.length;for(t=null==t?0:+t||0,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        0>t&&(t=-t>u?0:u+t),r=r===w||r>u?u:+r||0,0>r&&(r+=u),u=t>r?0:r-t>>>0,t>>>=0,r=De(u);++e<u;)r[e]=n[e+t];return r}function Ut(n,t){var r;return zu(n,function(n,e,u){return r=t(n,e,u),!r}),!!r}function $t(n,t){var r=n.length;for(n.sort(t);r--;)n[r]=n[r].c;return n}function Wt(t,r,e){var u=br(),o=-1;return r=Xn(r,function(n){return u(n)}),t=bt(t,function(n){return{a:Xn(r,function(t){return t(n)}),b:++o,c:n}}),$t(t,function(t,r){var u;n:{for(var o=-1,i=t.a,f=r.a,a=i.length,c=e.length;++o<a;)if(u=n(i[o],f[o])){
    if(o>=c)break n;o=e[o],u*="asc"===o||true===o?1:-1;break n}u=t.b-r.b}return u})}function Ft(n,t){var r=0;return zu(n,function(n,e,u){r+=+t(n,e,u)||0}),r}function Lt(n,t){var e=-1,u=jr(),o=n.length,i=u===r,f=i&&o>=F,a=f&&mu&&hu?new Dn(void 0):null,c=[];a?(u=Mn,i=false):(f=false,a=t?[]:c);n:for(;++e<o;){var l=n[e],s=t?t(l,e,n):l;if(i&&l===l){for(var p=a.length;p--;)if(a[p]===s)continue n;t&&a.push(s),c.push(l)}else 0>u(a,s,0)&&((t||f)&&a.push(s),c.push(l))}return c}function Nt(n,t){for(var r=-1,e=t.length,u=De(e);++r<e;)u[r]=n[t[r]];
    return u}function Tt(n,t,r,e){for(var u=n.length,o=e?u:-1;(e?o--:++o<u)&&t(n[o],o,n););return r?St(n,e?0:o,e?o+1:u):St(n,e?o+1:0,e?u:o)}function Pt(n,t){var r=n;r instanceof zn&&(r=r.value());for(var e=-1,u=t.length;++e<u;)var o=t[e],r=o.func.apply(o.thisArg,Hn([r],o.args));return r}function zt(n,t,r){var e=0,u=n?n.length:e;if(typeof t=="number"&&t===t&&u<=Uu){for(;e<u;){var o=e+u>>>1,i=n[o];(r?i<=t:i<t)&&null!==i?e=o+1:u=o}return u}return Bt(n,t,Ne,r)}function Bt(n,t,r,e){t=r(t);for(var u=0,o=n?n.length:0,i=t!==t,f=null===t,a=t===w;u<o;){
    var c=wu((u+o)/2),l=r(n[c]),s=l!==w,p=l===l;(i?p||e:f?p&&s&&(e||null!=l):a?p&&(e||s):null==l?0:e?l<=t:l<t)?u=c+1:o=c}return ku(o,Su)}function Dt(n,t,r){if(typeof n!="function")return Ne;if(t===w)return n;switch(r){case 1:return function(r){return n.call(t,r)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,o){return n.call(t,r,e,u,o)};case 5:return function(r,e,u,o,i){return n.call(t,r,e,u,o,i)}}return function(){return n.apply(t,arguments)}}function Mt(n){var t=new au(n.byteLength);
    return new gu(t).set(new gu(n)),t}function qt(n,t,r){for(var e=r.length,u=-1,o=ju(n.length-e,0),i=-1,f=t.length,a=De(f+o);++i<f;)a[i]=t[i];for(;++u<e;)a[r[u]]=n[u];for(;o--;)a[i++]=n[u++];return a}function Kt(n,t,r){for(var e=-1,u=r.length,o=-1,i=ju(n.length-u,0),f=-1,a=t.length,c=De(i+a);++o<i;)c[o]=n[o];for(i=o;++f<a;)c[i+f]=t[f];for(;++e<u;)c[i+r[e]]=n[o++];return c}function Vt(n,t){return function(r,e,u){var o=t?t():{};if(e=br(e,u,3),Wo(r)){u=-1;for(var i=r.length;++u<i;){var f=r[u];n(o,f,e(f,u,r),r);
}}else zu(r,function(t,r,u){n(o,t,e(t,r,u),u)});return o}}function Zt(n){return pe(function(t,r){var e=-1,u=null==t?0:r.length,o=2<u?r[u-2]:w,i=2<u?r[2]:w,f=1<u?r[u-1]:w;for(typeof o=="function"?(o=Dt(o,f,5),u-=2):(o=typeof f=="function"?f:w,u-=o?1:0),i&&$r(r[0],r[1],i)&&(o=3>u?w:o,u=1);++e<u;)(i=r[e])&&n(t,i,o);return t})}function Yt(n,t){return function(r,e){var u=r?Vu(r):0;if(!Lr(u))return n(r,e);for(var o=t?u:-1,i=Dr(r);(t?o--:++o<u)&&false!==e(i[o],o,i););return r}}function Gt(n){return function(t,r,e){
    var u=Dr(t);e=e(t);for(var o=e.length,i=n?o:-1;n?i--:++i<o;){var f=e[i];if(false===r(u[f],f,u))break}return t}}function Jt(n,t){function r(){return(this&&this!==Yn&&this instanceof r?e:n).apply(t,arguments)}var e=Ht(n);return r}function Xt(n){return function(t){var r=-1;t=Fe(Ue(t));for(var e=t.length,u="";++r<e;)u=n(u,t[r],r);return u}}function Ht(n){return function(){var t=arguments;switch(t.length){case 0:return new n;case 1:return new n(t[0]);case 2:return new n(t[0],t[1]);case 3:return new n(t[0],t[1],t[2]);
    case 4:return new n(t[0],t[1],t[2],t[3]);case 5:return new n(t[0],t[1],t[2],t[3],t[4]);case 6:return new n(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new n(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var r=Pu(n.prototype),t=n.apply(r,t);return de(t)?t:r}}function Qt(n){function t(r,e,u){return u&&$r(r,e,u)&&(e=w),r=dr(r,n,w,w,w,w,w,e),r.placeholder=t.placeholder,r}return t}function nr(n,t){return pe(function(r){var e=r[0];return null==e?e:(r.push(t),n.apply(w,r))})}function tr(n,t){return function(r,e,u){
    if(u&&$r(r,e,u)&&(e=w),e=br(e,u,3),1==e.length){u=r=Wo(r)?r:Br(r);for(var o=e,i=-1,f=u.length,a=t,c=a;++i<f;){var l=u[i],s=+o(l);n(s,a)&&(a=s,c=l)}if(u=c,!r.length||u!==t)return u}return st(r,e,n,t)}}function rr(n,r){return function(e,u,o){return u=br(u,o,3),Wo(e)?(u=t(e,u,r),-1<u?e[u]:w):ht(e,u,n)}}function er(n){return function(r,e,u){return r&&r.length?(e=br(e,u,3),t(r,e,n)):-1}}function ur(n){return function(t,r,e){return r=br(r,e,3),ht(t,r,n,true)}}function or(n){return function(){for(var t,r=arguments.length,e=n?r:-1,u=0,o=De(r);n?e--:++e<r;){
    var i=o[u++]=arguments[e];if(typeof i!="function")throw new Xe(T);!t&&Pn.prototype.thru&&"wrapper"==Ar(i)&&(t=new Pn([],true))}for(e=t?-1:r;++e<r;){var i=o[e],u=Ar(i),f="wrapper"==u?Ku(i):w;t=f&&Fr(f[0])&&f[1]==(E|k|I|C)&&!f[4].length&&1==f[9]?t[Ar(f[0])].apply(t,f[3]):1==i.length&&Fr(i)?t[u]():t.thru(i)}return function(){var n=arguments,e=n[0];if(t&&1==n.length&&Wo(e)&&e.length>=F)return t.plant(e).value();for(var u=0,n=r?o[u].apply(this,n):e;++u<r;)n=o[u].call(this,n);return n}}}function ir(n,t){
    return function(r,e,u){return typeof e=="function"&&u===w&&Wo(r)?n(r,e):t(r,Dt(e,u,3))}}function fr(n){return function(t,r,e){return(typeof r!="function"||e!==w)&&(r=Dt(r,e,3)),n(t,r,Ee)}}function ar(n){return function(t,r,e){return(typeof r!="function"||e!==w)&&(r=Dt(r,e,3)),n(t,r)}}function cr(n){return function(t,r,e){var u={};return r=br(r,e,3),gt(t,function(t,e,o){o=r(t,e,o),e=n?o:e,t=n?t:o,u[e]=t}),u}}function lr(n){return function(t,r,e){return t=u(t),(n?t:"")+_r(t,r,e)+(n?"":t)}}function sr(n){
    var t=pe(function(r,e){var u=v(e,t.placeholder);return dr(r,n,w,e,u)});return t}function pr(n,t){return function(r,e,u,o){var i=3>arguments.length;return typeof e=="function"&&o===w&&Wo(r)?n(r,e,u,i):Ct(r,br(e,o,4),u,i,t)}}function hr(n,t,r,e,u,o,i,f,a,c){function l(){for(var m=arguments.length,x=m,j=De(m);x--;)j[x]=arguments[x];if(e&&(j=qt(j,e,u)),o&&(j=Kt(j,o,i)),_||y){var x=l.placeholder,k=v(j,x),m=m-k.length;if(m<c){var O=f?qn(f):w,m=ju(c-m,0),E=_?k:w,k=_?w:k,C=_?j:w,j=_?w:j;return t|=_?I:R,t&=~(_?R:I),
g||(t&=~(b|A)),j=[n,t,r,C,E,j,k,O,a,m],O=hr.apply(w,j),Fr(n)&&Zu(O,j),O.placeholder=x,O}}if(x=p?r:this,O=h?x[n]:n,f)for(m=j.length,E=ku(f.length,m),k=qn(j);E--;)C=f[E],j[E]=Ur(C,m)?k[C]:w;return s&&a<j.length&&(j.length=a),this&&this!==Yn&&this instanceof l&&(O=d||Ht(n)),O.apply(x,j)}var s=t&E,p=t&b,h=t&A,_=t&k,g=t&j,y=t&O,d=h?w:Ht(n);return l}function _r(n,t,r){return n=n.length,t=+t,n<t&&bu(t)?(t-=n,r=null==r?" ":r+"",$e(r,du(t/r.length)).slice(0,t)):""}function vr(n,t,r,e){function u(){for(var t=-1,f=arguments.length,a=-1,c=e.length,l=De(c+f);++a<c;)l[a]=e[a];
    for(;f--;)l[a++]=arguments[++t];return(this&&this!==Yn&&this instanceof u?i:n).apply(o?r:this,l)}var o=t&b,i=Ht(n);return u}function gr(n){var t=Ve[n];return function(n,r){return(r=r===w?0:+r||0)?(r=su(10,r),t(n*r)/r):t(n)}}function yr(n){return function(t,r,e,u){var o=br(e);return null==e&&o===it?zt(t,r,n):Bt(t,r,o(e,u,1),n)}}function dr(n,t,r,e,u,o,i,f){var a=t&A;if(!a&&typeof n!="function")throw new Xe(T);var c=e?e.length:0;if(c||(t&=~(I|R),e=u=w),c-=u?u.length:0,t&R){var l=e,s=u;e=u=w}var p=a?w:Ku(n);
    return r=[n,t,r,e,u,l,s,o,i,f],p&&(e=r[1],t=p[1],f=e|t,u=t==E&&e==k||t==E&&e==C&&r[7].length<=p[8]||t==(E|C)&&e==k,(f<E||u)&&(t&b&&(r[2]=p[2],f|=e&b?0:j),(e=p[3])&&(u=r[3],r[3]=u?qt(u,e,p[4]):qn(e),r[4]=u?v(r[3],P):qn(p[4])),(e=p[5])&&(u=r[5],r[5]=u?Kt(u,e,p[6]):qn(e),r[6]=u?v(r[5],P):qn(p[6])),(e=p[7])&&(r[7]=qn(e)),t&E&&(r[8]=null==r[8]?p[8]:ku(r[8],p[8])),null==r[9]&&(r[9]=p[9]),r[0]=p[0],r[1]=f),t=r[1],f=r[9]),r[9]=null==f?a?0:n.length:ju(f-c,0)||0,n=t==b?Jt(r[0],r[2]):t!=I&&t!=(b|I)||r[4].length?hr.apply(w,r):vr.apply(w,r),
        (p?qu:Zu)(n,r)}function mr(n,t,r,e,u,o,i){var f=-1,a=n.length,c=t.length;if(a!=c&&(!u||c<=a))return false;for(;++f<a;){var l=n[f],c=t[f],s=e?e(u?c:l,u?l:c,f):w;if(s!==w){if(s)continue;return false}if(u){if(!nt(t,function(n){return l===n||r(l,n,e,u,o,i)}))return false}else if(l!==c&&!r(l,c,e,u,o,i))return false}return true}function wr(n,t,r){switch(r){case D:case M:return+n==+t;case q:return n.name==t.name&&n.message==t.message;case V:return n!=+n?t!=+t:n==+t;case Y:case G:return n==t+""}return false}function xr(n,t,r,e,u,o,i){
    var f=Ko(n),a=f.length,c=Ko(t).length;if(a!=c&&!u)return false;for(c=a;c--;){var l=f[c];if(!(u?l in t:eu.call(t,l)))return false}for(var s=u;++c<a;){var l=f[c],p=n[l],h=t[l],_=e?e(u?h:p,u?p:h,l):w;if(_===w?!r(p,h,e,u,o,i):!_)return false;s||(s="constructor"==l)}return s||(r=n.constructor,e=t.constructor,!(r!=e&&"constructor"in n&&"constructor"in t)||typeof r=="function"&&r instanceof r&&typeof e=="function"&&e instanceof e)?true:false}function br(n,t,r){var e=Nn.callback||Le,e=e===Le?it:e;return r?e(n,t,r):e}function Ar(n){
    for(var t=n.name+"",r=Fu[t],e=r?r.length:0;e--;){var u=r[e],o=u.func;if(null==o||o==n)return u.name}return t}function jr(n,t,e){var u=Nn.indexOf||Yr,u=u===Yr?r:u;return n?u(n,t,e):u}function kr(n){n=Ce(n);for(var t=n.length;t--;){var r,e=n[t];r=n[t][1],r=r===r&&!de(r),e[2]=r}return n}function Or(n,t){var r=null==n?w:n[t];return me(r)?r:w}function Ir(n){var t=n.length,r=new n.constructor(t);return t&&"string"==typeof n[0]&&eu.call(n,"index")&&(r.index=n.index,r.input=n.input),r}function Rr(n){return n=n.constructor,
typeof n=="function"&&n instanceof n||(n=Ye),new n}function Er(n,t,r){var e=n.constructor;switch(t){case J:return Mt(n);case D:case M:return new e(+n);case X:case H:case Q:case nn:case tn:case rn:case en:case un:case on:return e instanceof e&&(e=Lu[t]),t=n.buffer,new e(r?Mt(t):t,n.byteOffset,n.length);case V:case G:return new e(n);case Y:var u=new e(n.source,kn.exec(n));u.lastIndex=n.lastIndex}return u}function Cr(n,t,r){return null==n||Wr(t,n)||(t=Mr(t),n=1==t.length?n:mt(n,St(t,0,-1)),t=Gr(t)),
    t=null==n?n:n[t],null==t?w:t.apply(n,r)}function Sr(n){return null!=n&&Lr(Vu(n))}function Ur(n,t){return n=typeof n=="number"||Rn.test(n)?+n:-1,t=null==t?$u:t,-1<n&&0==n%1&&n<t}function $r(n,t,r){if(!de(r))return false;var e=typeof t;return("number"==e?Sr(r)&&Ur(t,r.length):"string"==e&&t in r)?(t=r[t],n===n?n===t:t!==t):false}function Wr(n,t){var r=typeof n;return"string"==r&&dn.test(n)||"number"==r?true:Wo(n)?false:!yn.test(n)||null!=t&&n in Dr(t)}function Fr(n){var t=Ar(n),r=Nn[t];return typeof r=="function"&&t in zn.prototype?n===r?true:(t=Ku(r),
!!t&&n===t[0]):false}function Lr(n){return typeof n=="number"&&-1<n&&0==n%1&&n<=$u}function Nr(n,t){return n===w?t:Fo(n,t,Nr)}function Tr(n,t){n=Dr(n);for(var r=-1,e=t.length,u={};++r<e;){var o=t[r];o in n&&(u[o]=n[o])}return u}function Pr(n,t){var r={};return vt(n,function(n,e,u){t(n,e,u)&&(r[e]=n)}),r}function zr(n){for(var t=Ee(n),r=t.length,e=r&&n.length,u=!!e&&Lr(e)&&(Wo(n)||_e(n)||Ae(n)),o=-1,i=[];++o<r;){var f=t[o];(u&&Ur(f,e)||eu.call(n,f))&&i.push(f)}return i}function Br(n){return null==n?[]:Sr(n)?Nn.support.unindexedChars&&Ae(n)?n.split(""):de(n)?n:Ye(n):Se(n);
}function Dr(n){if(Nn.support.unindexedChars&&Ae(n)){for(var t=-1,r=n.length,e=Ye(n);++t<r;)e[t]=n.charAt(t);return e}return de(n)?n:Ye(n)}function Mr(n){if(Wo(n))return n;var t=[];return u(n).replace(mn,function(n,r,e,u){t.push(e?u.replace(An,"$1"):r||n)}),t}function qr(n){return n instanceof zn?n.clone():new Pn(n.__wrapped__,n.__chain__,qn(n.__actions__))}function Kr(n,t,r){return n&&n.length?((r?$r(n,t,r):null==t)&&(t=1),St(n,0>t?0:t)):[]}function Vr(n,t,r){var e=n?n.length:0;return e?((r?$r(n,t,r):null==t)&&(t=1),
    t=e-(+t||0),St(n,0,0>t?0:t)):[]}function Zr(n){return n?n[0]:w}function Yr(n,t,e){var u=n?n.length:0;if(!u)return-1;if(typeof e=="number")e=0>e?ju(u+e,0):e;else if(e)return e=zt(n,t),e<u&&(t===t?t===n[e]:n[e]!==n[e])?e:-1;return r(n,t,e||0)}function Gr(n){var t=n?n.length:0;return t?n[t-1]:w}function Jr(n){return Kr(n,1)}function Xr(n,t,e,u){if(!n||!n.length)return[];null!=t&&typeof t!="boolean"&&(u=e,e=$r(n,t,u)?w:t,t=false);var o=br();if((null!=e||o!==it)&&(e=o(e,u,3)),t&&jr()===r){t=e;var i;e=-1,
    u=n.length;for(var o=-1,f=[];++e<u;){var a=n[e],c=t?t(a,e,n):a;e&&i===c||(i=c,f[++o]=a)}n=f}else n=Lt(n,e);return n}function Hr(n){if(!n||!n.length)return[];var t=-1,r=0;n=Zn(n,function(n){return Sr(n)?(r=ju(n.length,r),true):void 0});for(var e=De(r);++t<r;)e[t]=Xn(n,Ot(t));return e}function Qr(n,t,r){return n&&n.length?(n=Hr(n),null==t?n:(t=Dt(t,r,4),Xn(n,function(n){return Qn(n,t,w,true)}))):[]}function ne(n,t){var r=-1,e=n?n.length:0,u={};for(!e||t||Wo(n[0])||(t=[]);++r<e;){var o=n[r];t?u[o]=t[r]:o&&(u[o[0]]=o[1]);
}return u}function te(n){return n=Nn(n),n.__chain__=true,n}function re(n,t,r){return t.call(r,n)}function ee(n,t,r){var e=Wo(n)?Vn:lt;return r&&$r(n,t,r)&&(t=w),(typeof t!="function"||r!==w)&&(t=br(t,r,3)),e(n,t)}function ue(n,t,r){var e=Wo(n)?Zn:pt;return t=br(t,r,3),e(n,t)}function oe(n,t,r,e){var u=n?Vu(n):0;return Lr(u)||(n=Se(n),u=n.length),r=typeof r!="number"||e&&$r(t,r,e)?0:0>r?ju(u+r,0):r||0,typeof n=="string"||!Wo(n)&&Ae(n)?r<=u&&-1<n.indexOf(t,r):!!u&&-1<jr(n,t,r)}function ie(n,t,r){var e=Wo(n)?Xn:bt;
    return t=br(t,r,3),e(n,t)}function fe(n,t,r){if(r?$r(n,t,r):null==t){n=Br(n);var e=n.length;return 0<e?n[Et(0,e-1)]:w}r=-1,n=Oe(n);var e=n.length,u=e-1;for(t=ku(0>t?0:+t||0,e);++r<t;){var e=Et(r,u),o=n[e];n[e]=n[r],n[r]=o}return n.length=t,n}function ae(n,t,r){var e=Wo(n)?nt:Ut;return r&&$r(n,t,r)&&(t=w),(typeof t!="function"||r!==w)&&(t=br(t,r,3)),e(n,t)}function ce(n,t){var r;if(typeof t!="function"){if(typeof n!="function")throw new Xe(T);var e=n;n=t,t=e}return function(){return 0<--n&&(r=t.apply(this,arguments)),
1>=n&&(t=w),r}}function le(n,t,r){function e(t,r){r&&cu(r),a=p=h=w,t&&(_=wo(),c=n.apply(s,f),p||a||(f=s=w))}function u(){var n=t-(wo()-l);0>=n||n>t?e(h,a):p=_u(u,n)}function o(){e(g,p)}function i(){if(f=arguments,l=wo(),s=this,h=g&&(p||!y),false===v)var r=y&&!p;else{a||y||(_=l);var e=v-(l-_),i=0>=e||e>v;i?(a&&(a=cu(a)),_=l,c=n.apply(s,f)):a||(a=_u(o,e))}return i&&p?p=cu(p):p||t===v||(p=_u(u,t)),r&&(i=true,c=n.apply(s,f)),!i||p||a||(f=s=w),c}var f,a,c,l,s,p,h,_=0,v=false,g=true;if(typeof n!="function")throw new Xe(T);
    if(t=0>t?0:+t||0,true===r)var y=true,g=false;else de(r)&&(y=!!r.leading,v="maxWait"in r&&ju(+r.maxWait||0,t),g="trailing"in r?!!r.trailing:g);return i.cancel=function(){p&&cu(p),a&&cu(a),_=0,a=p=h=w},i}function se(n,t){if(typeof n!="function"||t&&typeof t!="function")throw new Xe(T);var r=function(){var e=arguments,u=t?t.apply(this,e):e[0],o=r.cache;return o.has(u)?o.get(u):(e=n.apply(this,e),r.cache=o.set(u,e),e)};return r.cache=new se.Cache,r}function pe(n,t){if(typeof n!="function")throw new Xe(T);return t=ju(t===w?n.length-1:+t||0,0),
    function(){for(var r=arguments,e=-1,u=ju(r.length-t,0),o=De(u);++e<u;)o[e]=r[t+e];switch(t){case 0:return n.call(this,o);case 1:return n.call(this,r[0],o);case 2:return n.call(this,r[0],r[1],o)}for(u=De(t+1),e=-1;++e<t;)u[e]=r[e];return u[t]=o,n.apply(this,u)}}function he(n,t){return n>t}function _e(n){return h(n)&&Sr(n)&&eu.call(n,"callee")&&!pu.call(n,"callee")}function ve(n,t,r,e){return e=(r=typeof r=="function"?Dt(r,e,3):w)?r(n,t):w,e===w?wt(n,t,r):!!e}function ge(n){return h(n)&&typeof n.message=="string"&&ou.call(n)==q;
}function ye(n){return de(n)&&ou.call(n)==K}function de(n){var t=typeof n;return!!n&&("object"==t||"function"==t)}function me(n){return null==n?false:ye(n)?fu.test(ru.call(n)):h(n)&&(Gn(n)?fu:In).test(n)}function we(n){return typeof n=="number"||h(n)&&ou.call(n)==V}function xe(n){var t;if(!h(n)||ou.call(n)!=Z||Gn(n)||_e(n)||!(eu.call(n,"constructor")||(t=n.constructor,typeof t!="function"||t instanceof t)))return false;var r;return Nn.support.ownLast?(vt(n,function(n,t,e){return r=eu.call(e,t),false}),false!==r):(vt(n,function(n,t){
    r=t}),r===w||eu.call(n,r))}function be(n){return de(n)&&ou.call(n)==Y}function Ae(n){return typeof n=="string"||h(n)&&ou.call(n)==G}function je(n){return h(n)&&Lr(n.length)&&!!Fn[ou.call(n)]}function ke(n,t){return n<t}function Oe(n){var t=n?Vu(n):0;return Lr(t)?t?Nn.support.unindexedChars&&Ae(n)?n.split(""):qn(n):[]:Se(n)}function Ie(n){return ot(n,Ee(n))}function Re(n){return dt(n,Ee(n))}function Ee(n){if(null==n)return[];de(n)||(n=Ye(n));for(var t=n.length,r=Nn.support,t=t&&Lr(t)&&(Wo(n)||_e(n)||Ae(n))&&t||0,e=n.constructor,u=-1,e=ye(e)&&e.prototype||nu,o=e===n,i=De(t),f=0<t,a=r.enumErrorProps&&(n===Qe||n instanceof qe),c=r.enumPrototypes&&ye(n);++u<t;)i[u]=u+"";
    for(var l in n)c&&"prototype"==l||a&&("message"==l||"name"==l)||f&&Ur(l,t)||"constructor"==l&&(o||!eu.call(n,l))||i.push(l);if(r.nonEnumShadows&&n!==nu)for(t=n===tu?G:n===Qe?q:ou.call(n),r=Nu[t]||Nu[Z],t==Z&&(e=nu),t=Wn.length;t--;)l=Wn[t],u=r[l],o&&u||(u?!eu.call(n,l):n[l]===e[l])||i.push(l);return i}function Ce(n){n=Dr(n);for(var t=-1,r=Ko(n),e=r.length,u=De(e);++t<e;){var o=r[t];u[t]=[o,n[o]]}return u}function Se(n){return Nt(n,Ko(n))}function Ue(n){return(n=u(n))&&n.replace(En,a).replace(bn,"");
}function $e(n,t){var r="";if(n=u(n),t=+t,1>t||!n||!bu(t))return r;do t%2&&(r+=n),t=wu(t/2),n+=n;while(t);return r}function We(n,t,r){var e=n;return(n=u(n))?(r?$r(e,t,r):null==t)?n.slice(g(n),y(n)+1):(t+="",n.slice(o(n,t),i(n,t)+1)):n}function Fe(n,t,r){return r&&$r(n,t,r)&&(t=w),n=u(n),n.match(t||Un)||[]}function Le(n,t,r){return r&&$r(n,t,r)&&(t=w),h(n)?Te(n):it(n,t)}function Ne(n){return n}function Te(n){return At(ft(n,true))}function Pe(n,t,r){if(null==r){var e=de(t),u=e?Ko(t):w;((u=u&&u.length?dt(t,u):w)?u.length:e)||(u=false,
    r=t,t=n,n=this)}u||(u=dt(t,Ko(t)));var o=true,e=-1,i=ye(n),f=u.length;false===r?o=false:de(r)&&"chain"in r&&(o=r.chain);for(;++e<f;){r=u[e];var a=t[r];n[r]=a,i&&(n.prototype[r]=function(t){return function(){var r=this.__chain__;if(o||r){var e=n(this.__wrapped__);return(e.__actions__=qn(this.__actions__)).push({func:t,args:arguments,thisArg:n}),e.__chain__=r,e}return t.apply(n,Hn([this.value()],arguments))}}(a))}return n}function ze(){}function Be(n){return Wr(n)?Ot(n):It(n)}_=_?Jn.defaults(Yn.Object(),_,Jn.pick(Yn,$n)):Yn;
    var De=_.Array,Me=_.Date,qe=_.Error,Ke=_.Function,Ve=_.Math,Ze=_.Number,Ye=_.Object,Ge=_.RegExp,Je=_.String,Xe=_.TypeError,He=De.prototype,Qe=qe.prototype,nu=Ye.prototype,tu=Je.prototype,ru=Ke.prototype.toString,eu=nu.hasOwnProperty,uu=0,ou=nu.toString,iu=Yn._,fu=Ge("^"+ru.call(eu).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),au=_.ArrayBuffer,cu=_.clearTimeout,lu=_.parseFloat,su=Ve.pow,pu=nu.propertyIsEnumerable,hu=Or(_,"Set"),_u=_.setTimeout,vu=He.splice,gu=_.Uint8Array,yu=Or(_,"WeakMap"),du=Ve.ceil,mu=Or(Ye,"create"),wu=Ve.floor,xu=Or(De,"isArray"),bu=_.isFinite,Au=Or(Ye,"keys"),ju=Ve.max,ku=Ve.min,Ou=Or(Me,"now"),Iu=_.parseInt,Ru=Ve.random,Eu=Ze.NEGATIVE_INFINITY,Cu=Ze.POSITIVE_INFINITY,Su=4294967294,Uu=2147483647,$u=9007199254740991,Wu=yu&&new yu,Fu={},Lu={};
    Lu[X]=_.Float32Array,Lu[H]=_.Float64Array,Lu[Q]=_.Int8Array,Lu[nn]=_.Int16Array,Lu[tn]=_.Int32Array,Lu[rn]=gu,Lu[en]=_.Uint8ClampedArray,Lu[un]=_.Uint16Array,Lu[on]=_.Uint32Array;var Nu={};Nu[B]=Nu[M]=Nu[V]={constructor:true,toLocaleString:true,toString:true,valueOf:true},Nu[D]=Nu[G]={constructor:true,toString:true,valueOf:true},Nu[q]=Nu[K]=Nu[Y]={constructor:true,toString:true},Nu[Z]={constructor:true},Kn(Wn,function(n){for(var t in Nu)if(eu.call(Nu,t)){var r=Nu[t];r[n]=eu.call(r,n)}});var Tu=Nn.support={};!function(n){
        var t=function(){this.x=n},r={0:n,length:n},e=[];t.prototype={valueOf:n,y:n};for(var u in new t)e.push(u);Tu.enumErrorProps=pu.call(Qe,"message")||pu.call(Qe,"name"),Tu.enumPrototypes=pu.call(t,"prototype"),Tu.nonEnumShadows=!/valueOf/.test(e),Tu.ownLast="x"!=e[0],Tu.spliceObjects=(vu.call(r,0,1),!r[0]),Tu.unindexedChars="xx"!="x"[0]+Ye("x")[0]}(1,0),Nn.templateSettings={escape:_n,evaluate:vn,interpolate:gn,variable:"",imports:{_:Nn}};var Pu=function(){function n(){}return function(t){if(de(t)){n.prototype=t;
        var r=new n;n.prototype=w}return r||{}}}(),zu=Yt(gt),Bu=Yt(yt,true),Du=Gt(),Mu=Gt(true),qu=Wu?function(n,t){return Wu.set(n,t),n}:Ne,Ku=Wu?function(n){return Wu.get(n)}:ze,Vu=Ot("length"),Zu=function(){var n=0,t=0;return function(r,e){var u=wo(),o=W-(u-t);if(t=u,0<o){if(++n>=$)return r}else n=0;return qu(r,e)}}(),Yu=pe(function(n,t){return h(n)&&Sr(n)?ct(n,_t(t,false,true)):[]}),Gu=er(),Ju=er(true),Xu=pe(function(n){for(var t=n.length,e=t,u=De(l),o=jr(),i=o===r,f=[];e--;){var a=n[e]=Sr(a=n[e])?a:[];u[e]=i&&120<=a.length&&mu&&hu?new Dn(e&&a):null;
    }var i=n[0],c=-1,l=i?i.length:0,s=u[0];n:for(;++c<l;)if(a=i[c],0>(s?Mn(s,a):o(f,a,0))){for(e=t;--e;){var p=u[e];if(0>(p?Mn(p,a):o(n[e],a,0)))continue n}s&&s.push(a),f.push(a)}return f}),Hu=pe(function(t,r){r=_t(r);var e=ut(t,r);return Rt(t,r.sort(n)),e}),Qu=yr(),no=yr(true),to=pe(function(n){return Lt(_t(n,false,true))}),ro=pe(function(n,t){return Sr(n)?ct(n,t):[]}),eo=pe(Hr),uo=pe(function(n){var t=n.length,r=2<t?n[t-2]:w,e=1<t?n[t-1]:w;return 2<t&&typeof r=="function"?t-=2:(r=1<t&&typeof e=="function"?(--t,
        e):w,e=w),n.length=t,Qr(n,r,e)}),oo=pe(function(n){return n=_t(n),this.thru(function(t){t=Wo(t)?t:[Dr(t)];for(var r=n,e=-1,u=t.length,o=-1,i=r.length,f=De(u+i);++e<u;)f[e]=t[e];for(;++o<i;)f[e++]=r[o];return f})}),io=pe(function(n,t){return Sr(n)&&(n=Br(n)),ut(n,_t(t))}),fo=Vt(function(n,t,r){eu.call(n,r)?++n[r]:n[r]=1}),ao=rr(zu),co=rr(Bu,true),lo=ir(Kn,zu),so=ir(function(n,t){for(var r=n.length;r--&&false!==t(n[r],r,n););return n},Bu),po=Vt(function(n,t,r){eu.call(n,r)?n[r].push(t):n[r]=[t]}),ho=Vt(function(n,t,r){
        n[r]=t}),_o=pe(function(n,t,r){var e=-1,u=typeof t=="function",o=Wr(t),i=Sr(n)?De(n.length):[];return zu(n,function(n){var f=u?t:o&&null!=n?n[t]:w;i[++e]=f?f.apply(n,r):Cr(n,t,r)}),i}),vo=Vt(function(n,t,r){n[r?0:1].push(t)},function(){return[[],[]]}),go=pr(Qn,zu),yo=pr(function(n,t,r,e){var u=n.length;for(e&&u&&(r=n[--u]);u--;)r=t(r,n[u],u,n);return r},Bu),mo=pe(function(n,t){if(null==n)return[];var r=t[2];return r&&$r(t[0],t[1],r)&&(t.length=1),Wt(n,_t(t),[])}),wo=Ou||function(){return(new Me).getTime();
        },xo=pe(function(n,t,r){var e=b;if(r.length)var u=v(r,xo.placeholder),e=e|I;return dr(n,e,t,r,u)}),bo=pe(function(n,t){t=t.length?_t(t):Re(n);for(var r=-1,e=t.length;++r<e;){var u=t[r];n[u]=dr(n[u],b,n)}return n}),Ao=pe(function(n,t,r){var e=b|A;if(r.length)var u=v(r,Ao.placeholder),e=e|I;return dr(t,e,n,r,u)}),jo=Qt(k),ko=Qt(O),Oo=pe(function(n,t){return at(n,1,t)}),Io=pe(function(n,t,r){return at(n,t,r)}),Ro=or(),Eo=or(true),Co=pe(function(n,t){if(t=_t(t),typeof n!="function"||!Vn(t,e))throw new Xe(T);
        var r=t.length;return pe(function(e){for(var u=ku(e.length,r);u--;)e[u]=t[u](e[u]);return n.apply(this,e)})}),So=sr(I),Uo=sr(R),$o=pe(function(n,t){return dr(n,C,w,w,w,_t(t))}),Wo=xu||function(n){return h(n)&&Lr(n.length)&&ou.call(n)==B},Fo=Zt(kt),Lo=Zt(function(n,t,r){return r?rt(n,t,r):et(n,t)}),No=nr(Lo,function(n,t){return n===w?t:n}),To=nr(Fo,Nr),Po=ur(gt),zo=ur(yt),Bo=fr(Du),Do=fr(Mu),Mo=ar(gt),qo=ar(yt),Ko=Au?function(n){var t=null==n?w:n.constructor;return typeof t=="function"&&t.prototype===n||(typeof n=="function"?Nn.support.enumPrototypes:Sr(n))?zr(n):de(n)?Au(n):[];
    }:zr,Vo=cr(true),Zo=cr(),Yo=pe(function(n,t){if(null==n)return{};if("function"!=typeof t[0])return t=Xn(_t(t),Je),Tr(n,ct(Ee(n),t));var r=Dt(t[0],t[1],3);return Pr(n,function(n,t,e){return!r(n,t,e)})}),Go=pe(function(n,t){return null==n?{}:"function"==typeof t[0]?Pr(n,Dt(t[0],t[1],3)):Tr(n,_t(t))}),Jo=Xt(function(n,t,r){return t=t.toLowerCase(),n+(r?t.charAt(0).toUpperCase()+t.slice(1):t)}),Xo=Xt(function(n,t,r){return n+(r?"-":"")+t.toLowerCase()}),Ho=lr(),Qo=lr(true),ni=Xt(function(n,t,r){return n+(r?"_":"")+t.toLowerCase();
    }),ti=Xt(function(n,t,r){return n+(r?" ":"")+(t.charAt(0).toUpperCase()+t.slice(1))}),ri=pe(function(n,t){try{return n.apply(w,t)}catch(r){return ge(r)?r:new qe(r)}}),ei=pe(function(n,t){return function(r){return Cr(r,n,t)}}),ui=pe(function(n,t){return function(r){return Cr(n,r,t)}}),oi=gr("ceil"),ii=gr("floor"),fi=tr(he,Eu),ai=tr(ke,Cu),ci=gr("round");return Nn.prototype=Tn.prototype,Pn.prototype=Pu(Tn.prototype),Pn.prototype.constructor=Pn,zn.prototype=Pu(Tn.prototype),zn.prototype.constructor=zn,
        Bn.prototype["delete"]=function(n){return this.has(n)&&delete this.__data__[n]},Bn.prototype.get=function(n){return"__proto__"==n?w:this.__data__[n]},Bn.prototype.has=function(n){return"__proto__"!=n&&eu.call(this.__data__,n)},Bn.prototype.set=function(n,t){return"__proto__"!=n&&(this.__data__[n]=t),this},Dn.prototype.push=function(n){var t=this.data;typeof n=="string"||de(n)?t.set.add(n):t.hash[n]=true},se.Cache=Bn,Nn.after=function(n,t){if(typeof t!="function"){if(typeof n!="function")throw new Xe(T);
        var r=n;n=t,t=r}return n=bu(n=+n)?n:0,function(){return 1>--n?t.apply(this,arguments):void 0}},Nn.ary=function(n,t,r){return r&&$r(n,t,r)&&(t=w),t=n&&null==t?n.length:ju(+t||0,0),dr(n,E,w,w,w,w,t)},Nn.assign=Lo,Nn.at=io,Nn.before=ce,Nn.bind=xo,Nn.bindAll=bo,Nn.bindKey=Ao,Nn.callback=Le,Nn.chain=te,Nn.chunk=function(n,t,r){t=(r?$r(n,t,r):null==t)?1:ju(wu(t)||1,1),r=0;for(var e=n?n.length:0,u=-1,o=De(du(e/t));r<e;)o[++u]=St(n,r,r+=t);return o},Nn.compact=function(n){for(var t=-1,r=n?n.length:0,e=-1,u=[];++t<r;){
        var o=n[t];o&&(u[++e]=o)}return u},Nn.constant=function(n){return function(){return n}},Nn.countBy=fo,Nn.create=function(n,t,r){var e=Pu(n);return r&&$r(n,t,r)&&(t=w),t?et(e,t):e},Nn.curry=jo,Nn.curryRight=ko,Nn.debounce=le,Nn.defaults=No,Nn.defaultsDeep=To,Nn.defer=Oo,Nn.delay=Io,Nn.difference=Yu,Nn.drop=Kr,Nn.dropRight=Vr,Nn.dropRightWhile=function(n,t,r){return n&&n.length?Tt(n,br(t,r,3),true,true):[]},Nn.dropWhile=function(n,t,r){return n&&n.length?Tt(n,br(t,r,3),true):[]},Nn.fill=function(n,t,r,e){
        var u=n?n.length:0;if(!u)return[];for(r&&typeof r!="number"&&$r(n,t,r)&&(r=0,e=u),u=n.length,r=null==r?0:+r||0,0>r&&(r=-r>u?0:u+r),e=e===w||e>u?u:+e||0,0>e&&(e+=u),u=r>e?0:e>>>0,r>>>=0;r<u;)n[r++]=t;return n},Nn.filter=ue,Nn.flatten=function(n,t,r){var e=n?n.length:0;return r&&$r(n,t,r)&&(t=false),e?_t(n,t):[]},Nn.flattenDeep=function(n){return n&&n.length?_t(n,true):[]},Nn.flow=Ro,Nn.flowRight=Eo,Nn.forEach=lo,Nn.forEachRight=so,Nn.forIn=Bo,Nn.forInRight=Do,Nn.forOwn=Mo,Nn.forOwnRight=qo,Nn.functions=Re,
        Nn.groupBy=po,Nn.indexBy=ho,Nn.initial=function(n){return Vr(n,1)},Nn.intersection=Xu,Nn.invert=function(n,t,r){r&&$r(n,t,r)&&(t=w),r=-1;for(var e=Ko(n),u=e.length,o={};++r<u;){var i=e[r],f=n[i];t?eu.call(o,f)?o[f].push(i):o[f]=[i]:o[f]=i}return o},Nn.invoke=_o,Nn.keys=Ko,Nn.keysIn=Ee,Nn.map=ie,Nn.mapKeys=Vo,Nn.mapValues=Zo,Nn.matches=Te,Nn.matchesProperty=function(n,t){return jt(n,ft(t,true))},Nn.memoize=se,Nn.merge=Fo,Nn.method=ei,Nn.methodOf=ui,Nn.mixin=Pe,Nn.modArgs=Co,Nn.negate=function(n){if(typeof n!="function")throw new Xe(T);
        return function(){return!n.apply(this,arguments)}},Nn.omit=Yo,Nn.once=function(n){return ce(2,n)},Nn.pairs=Ce,Nn.partial=So,Nn.partialRight=Uo,Nn.partition=vo,Nn.pick=Go,Nn.pluck=function(n,t){return ie(n,Be(t))},Nn.property=Be,Nn.propertyOf=function(n){return function(t){return mt(n,Mr(t),t+"")}},Nn.pull=function(){var n=arguments,t=n[0];if(!t||!t.length)return t;for(var r=0,e=jr(),u=n.length;++r<u;)for(var o=0,i=n[r];-1<(o=e(t,i,o));)vu.call(t,o,1);return t},Nn.pullAt=Hu,Nn.range=function(n,t,r){
        r&&$r(n,t,r)&&(t=r=w),n=+n||0,r=null==r?1:+r||0,null==t?(t=n,n=0):t=+t||0;var e=-1;t=ju(du((t-n)/(r||1)),0);for(var u=De(t);++e<t;)u[e]=n,n+=r;return u},Nn.rearg=$o,Nn.reject=function(n,t,r){var e=Wo(n)?Zn:pt;return t=br(t,r,3),e(n,function(n,r,e){return!t(n,r,e)})},Nn.remove=function(n,t,r){var e=[];if(!n||!n.length)return e;var u=-1,o=[],i=n.length;for(t=br(t,r,3);++u<i;)r=n[u],t(r,u,n)&&(e.push(r),o.push(u));return Rt(n,o),e},Nn.rest=Jr,Nn.restParam=pe,Nn.set=function(n,t,r){if(null==n)return n;
        var e=t+"";t=null!=n[e]||Wr(t,n)?[e]:Mr(t);for(var e=-1,u=t.length,o=u-1,i=n;null!=i&&++e<u;){var f=t[e];de(i)&&(e==o?i[f]=r:null==i[f]&&(i[f]=Ur(t[e+1])?[]:{})),i=i[f]}return n},Nn.shuffle=function(n){return fe(n,Cu)},Nn.slice=function(n,t,r){var e=n?n.length:0;return e?(r&&typeof r!="number"&&$r(n,t,r)&&(t=0,r=e),St(n,t,r)):[]},Nn.sortBy=function(n,t,r){if(null==n)return[];r&&$r(n,t,r)&&(t=w);var e=-1;return t=br(t,r,3),n=bt(n,function(n,r,u){return{a:t(n,r,u),b:++e,c:n}}),$t(n,f)},Nn.sortByAll=mo,
        Nn.sortByOrder=function(n,t,r,e){return null==n?[]:(e&&$r(t,r,e)&&(r=w),Wo(t)||(t=null==t?[]:[t]),Wo(r)||(r=null==r?[]:[r]),Wt(n,t,r))},Nn.spread=function(n){if(typeof n!="function")throw new Xe(T);return function(t){return n.apply(this,t)}},Nn.take=function(n,t,r){return n&&n.length?((r?$r(n,t,r):null==t)&&(t=1),St(n,0,0>t?0:t)):[]},Nn.takeRight=function(n,t,r){var e=n?n.length:0;return e?((r?$r(n,t,r):null==t)&&(t=1),t=e-(+t||0),St(n,0>t?0:t)):[]},Nn.takeRightWhile=function(n,t,r){return n&&n.length?Tt(n,br(t,r,3),false,true):[];
    },Nn.takeWhile=function(n,t,r){return n&&n.length?Tt(n,br(t,r,3)):[]},Nn.tap=function(n,t,r){return t.call(r,n),n},Nn.throttle=function(n,t,r){var e=true,u=true;if(typeof n!="function")throw new Xe(T);return false===r?e=false:de(r)&&(e="leading"in r?!!r.leading:e,u="trailing"in r?!!r.trailing:u),le(n,t,{leading:e,maxWait:+t,trailing:u})},Nn.thru=re,Nn.times=function(n,t,r){if(n=wu(n),1>n||!bu(n))return[];var e=-1,u=De(ku(n,4294967295));for(t=Dt(t,r,1);++e<n;)4294967295>e?u[e]=t(e):t(e);return u},Nn.toArray=Oe,
        Nn.toPlainObject=Ie,Nn.transform=function(n,t,r,e){var u=Wo(n)||je(n);return t=br(t,e,4),null==r&&(u||de(n)?(e=n.constructor,r=u?Wo(n)?new e:[]:Pu(ye(e)?e.prototype:w)):r={}),(u?Kn:gt)(n,function(n,e,u){return t(r,n,e,u)}),r},Nn.union=to,Nn.uniq=Xr,Nn.unzip=Hr,Nn.unzipWith=Qr,Nn.values=Se,Nn.valuesIn=function(n){return Nt(n,Ee(n))},Nn.where=function(n,t){return ue(n,At(t))},Nn.without=ro,Nn.wrap=function(n,t){return t=null==t?Ne:t,dr(t,I,w,[n],[])},Nn.xor=function(){for(var n=-1,t=arguments.length;++n<t;){
            var r=arguments[n];if(Sr(r))var e=e?Hn(ct(e,r),ct(r,e)):r}return e?Lt(e):[]},Nn.zip=eo,Nn.zipObject=ne,Nn.zipWith=uo,Nn.backflow=Eo,Nn.collect=ie,Nn.compose=Eo,Nn.each=lo,Nn.eachRight=so,Nn.extend=Lo,Nn.iteratee=Le,Nn.methods=Re,Nn.object=ne,Nn.select=ue,Nn.tail=Jr,Nn.unique=Xr,Pe(Nn,Nn),Nn.add=function(n,t){return(+n||0)+(+t||0)},Nn.attempt=ri,Nn.camelCase=Jo,Nn.capitalize=function(n){return(n=u(n))&&n.charAt(0).toUpperCase()+n.slice(1)},Nn.ceil=oi,Nn.clone=function(n,t,r,e){return t&&typeof t!="boolean"&&$r(n,t,r)?t=false:typeof t=="function"&&(e=r,
            r=t,t=false),typeof r=="function"?ft(n,t,Dt(r,e,3)):ft(n,t)},Nn.cloneDeep=function(n,t,r){return typeof t=="function"?ft(n,true,Dt(t,r,3)):ft(n,true)},Nn.deburr=Ue,Nn.endsWith=function(n,t,r){n=u(n),t+="";var e=n.length;return r=r===w?e:ku(0>r?0:+r||0,e),r-=t.length,0<=r&&n.indexOf(t,r)==r},Nn.escape=function(n){return(n=u(n))&&hn.test(n)?n.replace(sn,c):n},Nn.escapeRegExp=function(n){return(n=u(n))&&xn.test(n)?n.replace(wn,l):n||"(?:)"},Nn.every=ee,Nn.find=ao,Nn.findIndex=Gu,Nn.findKey=Po,Nn.findLast=co,
        Nn.findLastIndex=Ju,Nn.findLastKey=zo,Nn.findWhere=function(n,t){return ao(n,At(t))},Nn.first=Zr,Nn.floor=ii,Nn.get=function(n,t,r){return n=null==n?w:mt(n,Mr(t),t+""),n===w?r:n},Nn.gt=he,Nn.gte=function(n,t){return n>=t},Nn.has=function(n,t){if(null==n)return false;var r=eu.call(n,t);if(!r&&!Wr(t)){if(t=Mr(t),n=1==t.length?n:mt(n,St(t,0,-1)),null==n)return false;t=Gr(t),r=eu.call(n,t)}return r||Lr(n.length)&&Ur(t,n.length)&&(Wo(n)||_e(n)||Ae(n))},Nn.identity=Ne,Nn.includes=oe,Nn.indexOf=Yr,Nn.inRange=function(n,t,r){
            return t=+t||0,r===w?(r=t,t=0):r=+r||0,n>=ku(t,r)&&n<ju(t,r)},Nn.isArguments=_e,Nn.isArray=Wo,Nn.isBoolean=function(n){return true===n||false===n||h(n)&&ou.call(n)==D},Nn.isDate=function(n){return h(n)&&ou.call(n)==M},Nn.isElement=function(n){return!!n&&1===n.nodeType&&h(n)&&!xe(n)},Nn.isEmpty=function(n){return null==n?true:Sr(n)&&(Wo(n)||Ae(n)||_e(n)||h(n)&&ye(n.splice))?!n.length:!Ko(n).length},Nn.isEqual=ve,Nn.isError=ge,Nn.isFinite=function(n){return typeof n=="number"&&bu(n)},Nn.isFunction=ye,Nn.isMatch=function(n,t,r,e){
            return r=typeof r=="function"?Dt(r,e,3):w,xt(n,kr(t),r)},Nn.isNaN=function(n){return we(n)&&n!=+n},Nn.isNative=me,Nn.isNull=function(n){return null===n},Nn.isNumber=we,Nn.isObject=de,Nn.isPlainObject=xe,Nn.isRegExp=be,Nn.isString=Ae,Nn.isTypedArray=je,Nn.isUndefined=function(n){return n===w},Nn.kebabCase=Xo,Nn.last=Gr,Nn.lastIndexOf=function(n,t,r){var e=n?n.length:0;if(!e)return-1;var u=e;if(typeof r=="number")u=(0>r?ju(e+r,0):ku(r||0,e-1))+1;else if(r)return u=zt(n,t,true)-1,n=n[u],(t===t?t===n:n!==n)?u:-1;
            if(t!==t)return p(n,u,true);for(;u--;)if(n[u]===t)return u;return-1},Nn.lt=ke,Nn.lte=function(n,t){return n<=t},Nn.max=fi,Nn.min=ai,Nn.noConflict=function(){return Yn._=iu,this},Nn.noop=ze,Nn.now=wo,Nn.pad=function(n,t,r){n=u(n),t=+t;var e=n.length;return e<t&&bu(t)?(e=(t-e)/2,t=wu(e),e=du(e),r=_r("",e,r),r.slice(0,t)+n+r):n},Nn.padLeft=Ho,Nn.padRight=Qo,Nn.parseInt=function(n,t,r){return(r?$r(n,t,r):null==t)?t=0:t&&(t=+t),n=We(n),Iu(n,t||(On.test(n)?16:10))},Nn.random=function(n,t,r){r&&$r(n,t,r)&&(t=r=w);
            var e=null==n,u=null==t;return null==r&&(u&&typeof n=="boolean"?(r=n,n=1):typeof t=="boolean"&&(r=t,u=true)),e&&u&&(t=1,u=false),n=+n||0,u?(t=n,n=0):t=+t||0,r||n%1||t%1?(r=Ru(),ku(n+r*(t-n+lu("1e-"+((r+"").length-1))),t)):Et(n,t)},Nn.reduce=go,Nn.reduceRight=yo,Nn.repeat=$e,Nn.result=function(n,t,r){var e=null==n?w:Dr(n)[t];return e===w&&(null==n||Wr(t,n)||(t=Mr(t),n=1==t.length?n:mt(n,St(t,0,-1)),e=null==n?w:Dr(n)[Gr(t)]),e=e===w?r:e),ye(e)?e.call(n):e},Nn.round=ci,Nn.runInContext=m,Nn.size=function(n){
            var t=n?Vu(n):0;return Lr(t)?t:Ko(n).length},Nn.snakeCase=ni,Nn.some=ae,Nn.sortedIndex=Qu,Nn.sortedLastIndex=no,Nn.startCase=ti,Nn.startsWith=function(n,t,r){return n=u(n),r=null==r?0:ku(0>r?0:+r||0,n.length),n.lastIndexOf(t,r)==r},Nn.sum=function(n,t,r){if(r&&$r(n,t,r)&&(t=w),t=br(t,r,3),1==t.length){n=Wo(n)?n:Br(n),r=n.length;for(var e=0;r--;)e+=+t(n[r])||0;n=e}else n=Ft(n,t);return n},Nn.template=function(n,t,r){var e=Nn.templateSettings;r&&$r(n,t,r)&&(t=r=w),n=u(n),t=rt(et({},r||t),e,tt),r=rt(et({},t.imports),e.imports,tt);
            var o,i,f=Ko(r),a=Nt(r,f),c=0;r=t.interpolate||Cn;var l="__p+='";r=Ge((t.escape||Cn).source+"|"+r.source+"|"+(r===gn?jn:Cn).source+"|"+(t.evaluate||Cn).source+"|$","g");var p="sourceURL"in t?"//# sourceURL="+t.sourceURL+"\n":"";if(n.replace(r,function(t,r,e,u,f,a){return e||(e=u),l+=n.slice(c,a).replace(Sn,s),r&&(o=true,l+="'+__e("+r+")+'"),f&&(i=true,l+="';"+f+";\n__p+='"),e&&(l+="'+((__t=("+e+"))==null?'':__t)+'"),c=a+t.length,t}),l+="';",(t=t.variable)||(l="with(obj){"+l+"}"),l=(i?l.replace(fn,""):l).replace(an,"$1").replace(cn,"$1;"),
                    l="function("+(t||"obj")+"){"+(t?"":"obj||(obj={});")+"var __t,__p=''"+(o?",__e=_.escape":"")+(i?",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}":";")+l+"return __p}",t=ri(function(){return Ke(f,p+"return "+l).apply(w,a)}),t.source=l,ge(t))throw t;return t},Nn.trim=We,Nn.trimLeft=function(n,t,r){var e=n;return(n=u(n))?n.slice((r?$r(e,t,r):null==t)?g(n):o(n,t+"")):n},Nn.trimRight=function(n,t,r){var e=n;return(n=u(n))?(r?$r(e,t,r):null==t)?n.slice(0,y(n)+1):n.slice(0,i(n,t+"")+1):n;
        },Nn.trunc=function(n,t,r){r&&$r(n,t,r)&&(t=w);var e=S;if(r=U,null!=t)if(de(t)){var o="separator"in t?t.separator:o,e="length"in t?+t.length||0:e;r="omission"in t?u(t.omission):r}else e=+t||0;if(n=u(n),e>=n.length)return n;if(e-=r.length,1>e)return r;if(t=n.slice(0,e),null==o)return t+r;if(be(o)){if(n.slice(e).search(o)){var i,f=n.slice(0,e);for(o.global||(o=Ge(o.source,(kn.exec(o)||"")+"g")),o.lastIndex=0;n=o.exec(f);)i=n.index;t=t.slice(0,null==i?e:i)}}else n.indexOf(o,e)!=e&&(o=t.lastIndexOf(o),
        -1<o&&(t=t.slice(0,o)));return t+r},Nn.unescape=function(n){return(n=u(n))&&pn.test(n)?n.replace(ln,d):n},Nn.uniqueId=function(n){var t=++uu;return u(n)+t},Nn.words=Fe,Nn.all=ee,Nn.any=ae,Nn.contains=oe,Nn.eq=ve,Nn.detect=ao,Nn.foldl=go,Nn.foldr=yo,Nn.head=Zr,Nn.include=oe,Nn.inject=go,Pe(Nn,function(){var n={};return gt(Nn,function(t,r){Nn.prototype[r]||(n[r]=t)}),n}(),false),Nn.sample=fe,Nn.prototype.sample=function(n){return this.__chain__||null!=n?this.thru(function(t){return fe(t,n)}):fe(this.value());
        },Nn.VERSION=x,Kn("bind bindKey curry curryRight partial partialRight".split(" "),function(n){Nn[n].placeholder=Nn}),Kn(["drop","take"],function(n,t){zn.prototype[n]=function(r){var e=this.__filtered__;if(e&&!t)return new zn(this);r=null==r?1:ju(wu(r)||0,0);var u=this.clone();return e?u.__takeCount__=ku(u.__takeCount__,r):u.__views__.push({size:r,type:n+(0>u.__dir__?"Right":"")}),u},zn.prototype[n+"Right"]=function(t){return this.reverse()[n](t).reverse()}}),Kn(["filter","map","takeWhile"],function(n,t){
            var r=t+1,e=r!=N;zn.prototype[n]=function(n,t){var u=this.clone();return u.__iteratees__.push({iteratee:br(n,t,1),type:r}),u.__filtered__=u.__filtered__||e,u}}),Kn(["first","last"],function(n,t){var r="take"+(t?"Right":"");zn.prototype[n]=function(){return this[r](1).value()[0]}}),Kn(["initial","rest"],function(n,t){var r="drop"+(t?"":"Right");zn.prototype[n]=function(){return this.__filtered__?new zn(this):this[r](1)}}),Kn(["pluck","where"],function(n,t){var r=t?"filter":"map",e=t?At:Be;zn.prototype[n]=function(n){
            return this[r](e(n))}}),zn.prototype.compact=function(){return this.filter(Ne)},zn.prototype.reject=function(n,t){return n=br(n,t,1),this.filter(function(t){return!n(t)})},zn.prototype.slice=function(n,t){n=null==n?0:+n||0;var r=this;return r.__filtered__&&(0<n||0>t)?new zn(r):(0>n?r=r.takeRight(-n):n&&(r=r.drop(n)),t!==w&&(t=+t||0,r=0>t?r.dropRight(-t):r.take(t-n)),r)},zn.prototype.takeRightWhile=function(n,t){return this.reverse().takeWhile(n,t).reverse()},zn.prototype.toArray=function(){return this.take(Cu);
        },gt(zn.prototype,function(n,t){var r=/^(?:filter|map|reject)|While$/.test(t),e=/^(?:first|last)$/.test(t),u=Nn[e?"take"+("last"==t?"Right":""):t];u&&(Nn.prototype[t]=function(){var t=e?[1]:arguments,o=this.__chain__,i=this.__wrapped__,f=!!this.__actions__.length,a=i instanceof zn,c=t[0],l=a||Wo(i);l&&r&&typeof c=="function"&&1!=c.length&&(a=l=false);var s=function(n){return e&&o?u(n,1)[0]:u.apply(w,Hn([n],t))},c={func:re,args:[s],thisArg:w},f=a&&!f;return e&&!o?f?(i=i.clone(),i.__actions__.push(c),
            n.call(i)):u.call(w,this.value())[0]:!e&&l?(i=f?i:new zn(this),i=n.apply(i,t),i.__actions__.push(c),new Pn(i,o)):this.thru(s)})}),Kn("join pop push replace shift sort splice split unshift".split(" "),function(n){var t=(/^(?:replace|split)$/.test(n)?tu:He)[n],r=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",e=!Tu.spliceObjects&&/^(?:pop|shift|splice)$/.test(n),u=/^(?:join|pop|replace|shift)$/.test(n),o=e?function(){var n=t.apply(this,arguments);return 0===this.length&&delete this[0],n}:t;Nn.prototype[n]=function(){
            var n=arguments;return u&&!this.__chain__?o.apply(this.value(),n):this[r](function(t){return o.apply(t,n)})}}),gt(zn.prototype,function(n,t){var r=Nn[t];if(r){var e=r.name+"";(Fu[e]||(Fu[e]=[])).push({name:t,func:r})}}),Fu[hr(w,A).name]=[{name:"wrapper",func:w}],zn.prototype.clone=function(){var n=new zn(this.__wrapped__);return n.__actions__=qn(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=qn(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=qn(this.__views__),
            n},zn.prototype.reverse=function(){if(this.__filtered__){var n=new zn(this);n.__dir__=-1,n.__filtered__=true}else n=this.clone(),n.__dir__*=-1;return n},zn.prototype.value=function(){var n,t=this.__wrapped__.value(),r=this.__dir__,e=Wo(t),u=0>r,o=e?t.length:0;n=0;for(var i=o,f=this.__views__,a=-1,c=f.length;++a<c;){var l=f[a],s=l.size;switch(l.type){case"drop":n+=s;break;case"dropRight":i-=s;break;case"take":i=ku(i,n+s);break;case"takeRight":n=ju(n,i-s)}}if(n={start:n,end:i},i=n.start,f=n.end,n=f-i,
                u=u?f:i-1,i=this.__iteratees__,f=i.length,a=0,c=ku(n,this.__takeCount__),!e||o<F||o==n&&c==n)return Pt(t,this.__actions__);e=[];n:for(;n--&&a<c;){for(u+=r,o=-1,l=t[u];++o<f;){var p=i[o],s=p.type,p=p.iteratee(l);if(s==N)l=p;else if(!p){if(s==L)continue n;break n}}e[a++]=l}return e},Nn.prototype.chain=function(){return te(this)},Nn.prototype.commit=function(){return new Pn(this.value(),this.__chain__)},Nn.prototype.concat=oo,Nn.prototype.plant=function(n){for(var t,r=this;r instanceof Tn;){var e=qr(r);
            t?u.__wrapped__=e:t=e;var u=e,r=r.__wrapped__}return u.__wrapped__=n,t},Nn.prototype.reverse=function(){var n=this.__wrapped__,t=function(n){return n.reverse()};return n instanceof zn?(this.__actions__.length&&(n=new zn(this)),n=n.reverse(),n.__actions__.push({func:re,args:[t],thisArg:w}),new Pn(n,this.__chain__)):this.thru(t)},Nn.prototype.toString=function(){return this.value()+""},Nn.prototype.run=Nn.prototype.toJSON=Nn.prototype.valueOf=Nn.prototype.value=function(){return Pt(this.__wrapped__,this.__actions__);
        },Nn.prototype.collect=Nn.prototype.map,Nn.prototype.head=Nn.prototype.first,Nn.prototype.select=Nn.prototype.filter,Nn.prototype.tail=Nn.prototype.rest,Nn}var w,x="3.10.1",b=1,A=2,j=4,k=8,O=16,I=32,R=64,E=128,C=256,S=30,U="...",$=150,W=16,F=200,L=1,N=2,T="Expected a function",P="__lodash_placeholder__",z="[object Arguments]",B="[object Array]",D="[object Boolean]",M="[object Date]",q="[object Error]",K="[object Function]",V="[object Number]",Z="[object Object]",Y="[object RegExp]",G="[object String]",J="[object ArrayBuffer]",X="[object Float32Array]",H="[object Float64Array]",Q="[object Int8Array]",nn="[object Int16Array]",tn="[object Int32Array]",rn="[object Uint8Array]",en="[object Uint8ClampedArray]",un="[object Uint16Array]",on="[object Uint32Array]",fn=/\b__p\+='';/g,an=/\b(__p\+=)''\+/g,cn=/(__e\(.*?\)|\b__t\))\+'';/g,ln=/&(?:amp|lt|gt|quot|#39|#96);/g,sn=/[&<>"'`]/g,pn=RegExp(ln.source),hn=RegExp(sn.source),_n=/<%-([\s\S]+?)%>/g,vn=/<%([\s\S]+?)%>/g,gn=/<%=([\s\S]+?)%>/g,yn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,dn=/^\w*$/,mn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g,wn=/^[:!,]|[\\^$.*+?()[\]{}|\/]|(^[0-9a-fA-Fnrtuvx])|([\n\r\u2028\u2029])/g,xn=RegExp(wn.source),bn=/[\u0300-\u036f\ufe20-\ufe23]/g,An=/\\(\\)?/g,jn=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,kn=/\w*$/,On=/^0[xX]/,In=/^\[object .+?Constructor\]$/,Rn=/^\d+$/,En=/[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g,Cn=/($^)/,Sn=/['\n\r\u2028\u2029\\]/g,Un=RegExp("[A-Z\\xc0-\\xd6\\xd8-\\xde]+(?=[A-Z\\xc0-\\xd6\\xd8-\\xde][a-z\\xdf-\\xf6\\xf8-\\xff]+)|[A-Z\\xc0-\\xd6\\xd8-\\xde]?[a-z\\xdf-\\xf6\\xf8-\\xff]+|[A-Z\\xc0-\\xd6\\xd8-\\xde]+|[0-9]+","g"),$n="Array ArrayBuffer Date Error Float32Array Float64Array Function Int8Array Int16Array Int32Array Math Number Object RegExp Set String _ clearTimeout isFinite parseFloat parseInt setTimeout TypeError Uint8Array Uint8ClampedArray Uint16Array Uint32Array WeakMap".split(" "),Wn="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),Fn={};
    Fn[X]=Fn[H]=Fn[Q]=Fn[nn]=Fn[tn]=Fn[rn]=Fn[en]=Fn[un]=Fn[on]=true,Fn[z]=Fn[B]=Fn[J]=Fn[D]=Fn[M]=Fn[q]=Fn[K]=Fn["[object Map]"]=Fn[V]=Fn[Z]=Fn[Y]=Fn["[object Set]"]=Fn[G]=Fn["[object WeakMap]"]=false;var Ln={};Ln[z]=Ln[B]=Ln[J]=Ln[D]=Ln[M]=Ln[X]=Ln[H]=Ln[Q]=Ln[nn]=Ln[tn]=Ln[V]=Ln[Z]=Ln[Y]=Ln[G]=Ln[rn]=Ln[en]=Ln[un]=Ln[on]=true,Ln[q]=Ln[K]=Ln["[object Map]"]=Ln["[object Set]"]=Ln["[object WeakMap]"]=false;var Nn={"\xc0":"A","\xc1":"A","\xc2":"A","\xc3":"A","\xc4":"A","\xc5":"A","\xe0":"a","\xe1":"a","\xe2":"a",
        "\xe3":"a","\xe4":"a","\xe5":"a","\xc7":"C","\xe7":"c","\xd0":"D","\xf0":"d","\xc8":"E","\xc9":"E","\xca":"E","\xcb":"E","\xe8":"e","\xe9":"e","\xea":"e","\xeb":"e","\xcc":"I","\xcd":"I","\xce":"I","\xcf":"I","\xec":"i","\xed":"i","\xee":"i","\xef":"i","\xd1":"N","\xf1":"n","\xd2":"O","\xd3":"O","\xd4":"O","\xd5":"O","\xd6":"O","\xd8":"O","\xf2":"o","\xf3":"o","\xf4":"o","\xf5":"o","\xf6":"o","\xf8":"o","\xd9":"U","\xda":"U","\xdb":"U","\xdc":"U","\xf9":"u","\xfa":"u","\xfb":"u","\xfc":"u","\xdd":"Y",
        "\xfd":"y","\xff":"y","\xc6":"Ae","\xe6":"ae","\xde":"Th","\xfe":"th","\xdf":"ss"},Tn={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","`":"&#96;"},Pn={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'","&#96;":"`"},zn={"function":true,object:true},Bn={0:"x30",1:"x31",2:"x32",3:"x33",4:"x34",5:"x35",6:"x36",7:"x37",8:"x38",9:"x39",A:"x41",B:"x42",C:"x43",D:"x44",E:"x45",F:"x46",a:"x61",b:"x62",c:"x63",d:"x64",e:"x65",f:"x66",n:"x6e",r:"x72",t:"x74",u:"x75",v:"x76",x:"x78"},Dn={"\\":"\\",
        "'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Mn=zn[typeof exports]&&exports&&!exports.nodeType&&exports,qn=zn[typeof module]&&module&&!module.nodeType&&module,Kn=zn[typeof self]&&self&&self.Object&&self,Vn=zn[typeof window]&&window&&window.Object&&window,Zn=qn&&qn.exports===Mn&&Mn,Yn=Mn&&qn&&typeof global=="object"&&global&&global.Object&&global||Vn!==(this&&this.window)&&Vn||Kn||this,Gn=function(){try{Object({toString:0}+"")}catch(n){return function(){return false}}return function(n){
        return typeof n.toString!="function"&&typeof(n+"")=="string"}}(),Jn=m();typeof define=="function"&&typeof define.amd=="object"&&define.amd?(Yn._=Jn, define(function(){return Jn})):Mn&&qn?Zn?(qn.exports=Jn)._=Jn:Mn._=Jn:Yn._=Jn}).call(this);
}());
(function () {
!function(a){function b(b){var c=b.length,d=typeof b;return o(d)||b===a?!1:1===b.nodeType&&c?!0:p(d)||0===c||"number"==typeof c&&c>0&&c-1 in b}function c(a,b){var c,d;this.originalEvent=a,d=function(a,b){this[a]="preventDefault"===a?function(){return this.defaultPrevented=!0,b[a]()}:"stopImmediatePropagation"===a?function(){return this.immediatePropagationStopped=!0,b[a]()}:o(b[a])?function(){return b[a]()}:b[a]};for(c in a)(a[c]||"function"==typeof a[c])&&d.call(this,c,a);q.extend(this,b,{isImmediatePropagationStopped:function(){return!!this.immediatePropagationStopped}})}var d,e=a.$,f=a.jBone,g=/^<(\w+)\s*\/?>$/,h=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,i=[].slice,j=[].splice,k=Object.keys,l=document,m=function(a){return"string"==typeof a},n=function(a){return a instanceof Object},o=function(a){return"[object Function]"==={}.toString.call(a)},p=function(a){return Array.isArray(a)},q=function(a,b){return new d.init(a,b)};q.noConflict=function(){return a.$=e,a.jBone=f,q},d=q.fn=q.prototype={init:function(a,b){var c,d,e,f;if(!a)return this;if(m(a)){if(d=g.exec(a))return this[0]=l.createElement(d[1]),this.length=1,n(b)&&this.attr(b),this;if((d=h.exec(a))&&d[1]){for(f=l.createDocumentFragment(),e=l.createElement("div"),e.innerHTML=a;e.lastChild;)f.appendChild(e.firstChild);return c=i.call(f.childNodes),q.merge(this,c)}if(q.isElement(b))return q(b).find(a);try{return c=l.querySelectorAll(a),q.merge(this,c)}catch(j){return this}}return a.nodeType?(this[0]=a,this.length=1,this):o(a)?a():a instanceof q?a:q.makeArray(a,this)},pop:[].pop,push:[].push,reverse:[].reverse,shift:[].shift,sort:[].sort,splice:[].splice,slice:[].slice,indexOf:[].indexOf,forEach:[].forEach,unshift:[].unshift,concat:[].concat,join:[].join,every:[].every,some:[].some,filter:[].filter,map:[].map,reduce:[].reduce,reduceRight:[].reduceRight,length:0},d.constructor=q,d.init.prototype=d,q.setId=function(b){var c=b.jid;b===a?c="window":void 0===b.jid&&(b.jid=c=++q._cache.jid),q._cache.events[c]||(q._cache.events[c]={})},q.getData=function(b){b=b instanceof q?b[0]:b;var c=b===a?"window":b.jid;return{jid:c,events:q._cache.events[c]}},q.isElement=function(a){return a&&a instanceof q||a instanceof HTMLElement||m(a)},q._cache={events:{},jid:0},d.pushStack=function(a){var b=q.merge(this.constructor(),a);return b},q.merge=function(a,b){for(var c=b.length,d=a.length,e=0;c>e;)a[d++]=b[e++];return a.length=d,a},q.contains=function(a,b){return a.contains(b)},q.extend=function(a){var b;return j.call(arguments,1).forEach(function(c){if(b=a,c)for(var d in c)b[d]=c[d]}),a},q.makeArray=function(a,c){var d=c||[];return null!==a&&(b(a)?q.merge(d,m(a)?[a]:a):d.push(a)),d},q.unique=function(a){if(null==a)return[];for(var b=[],c=0,d=a.length;d>c;c++){var e=a[c];b.indexOf(e)<0&&b.push(e)}return b},q.Event=function(a,b){var c,d;return a.type&&!b&&(b=a,a=a.type),c=a.split(".").splice(1).join("."),d=a.split(".")[0],a=l.createEvent("Event"),a.initEvent(d,!0,!0),q.extend(a,{namespace:c,isDefaultPrevented:function(){return a.defaultPrevented}},b)},q.event={add:function(a,b,c,d,e){q.setId(a);var f,g,h,i=function(b){q.event.dispatch.call(a,b)},j=q.getData(a).events;for(b=b.split(" "),g=b.length;g--;)h=b[g],f=h.split(".")[0],j[f]=j[f]||[],j[f].length?i=j[f][0].fn:a.addEventListener&&a.addEventListener(f,i,!1),j[f].push({namespace:h.split(".").splice(1).join("."),fn:i,selector:e,data:d,originfn:c})},remove:function(a,b,c){var d,e,f=function(a,b,d,e,f){var g;(c&&f.originfn===c||!c)&&(g=f.fn),a[b][d].fn===g&&(a[b].splice(d,1),a[b].length||e.removeEventListener(b,g))},g=q.getData(a).events;if(g)return!b&&g?k(g).forEach(function(b){for(e=g[b],d=e.length;d--;)f(g,b,d,a,e[d])}):void b.split(" ").forEach(function(b){var c,h=b.split(".")[0],i=b.split(".").splice(1).join(".");if(g[h])for(e=g[h],d=e.length;d--;)c=e[d],(!i||i&&c.namespace===i)&&f(g,h,d,a,c);else i&&k(g).forEach(function(b){for(e=g[b],d=e.length;d--;)c=e[d],c.namespace.split(".")[0]===i.split(".")[0]&&f(g,b,d,a,c)})})},trigger:function(a,b){var c=[];m(b)?c=b.split(" ").map(function(a){return q.Event(a)}):(b=b instanceof Event?b:q.Event(b),c=[b]),c.forEach(function(b){b.type&&a.dispatchEvent&&a.dispatchEvent(b)})},dispatch:function(a){for(var b,d,e,f,g,h=0,i=0,j=this,k=q.getData(j).events[a.type],l=k.length,m=[],n=[];l>h;h++)m.push(k[h]);for(h=0,l=m.length;l>h&&~k.indexOf(m[h])&&(!f||!f.isImmediatePropagationStopped());h++)if(d=null,g={},e=m[h],e.data&&(g.data=e.data),e.selector){if(~(n=q(j).find(e.selector)).indexOf(a.target)&&(d=a.target)||j!==a.target&&j.contains(a.target)){if(!d)for(b=n.length,i=0;b>i;i++)n[i]&&n[i].contains(a.target)&&(d=n[i]);if(!d)continue;g.currentTarget=d,f=new c(a,g),a.namespace&&a.namespace!==e.namespace||e.originfn.call(d,f)}}else f=new c(a,g),a.namespace&&a.namespace!==e.namespace||e.originfn.call(j,f)}},d.on=function(a,b,c,d){var e=this.length,f=0;if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),!d)return this;for(;e>f;f++)q.event.add(this[f],a,d,c,b);return this},d.one=function(a){var b,c=arguments,d=0,e=this.length,f=i.call(c,1,c.length-1),g=i.call(c,-1)[0];for(b=function(b){var c=q(b);a.split(" ").forEach(function(a){var d=function(e){c.off(a,d),g.call(b,e)};c.on.apply(c,[a].concat(f,d))})};e>d;d++)b(this[d]);return this},d.trigger=function(a){var b=0,c=this.length;if(!a)return this;for(;c>b;b++)q.event.trigger(this[b],a);return this},d.off=function(a,b){for(var c=0,d=this.length;d>c;c++)q.event.remove(this[c],a,b);return this},d.find=function(a){for(var b=[],c=0,d=this.length,e=function(c){o(c.querySelectorAll)&&[].forEach.call(c.querySelectorAll(a),function(a){b.push(a)})};d>c;c++)e(this[c]);return q(b)},d.get=function(a){return null!=a?0>a?this[a+this.length]:this[a]:i.call(this)},d.eq=function(a){return q(this[a])},d.parent=function(){for(var a,b=[],c=0,d=this.length;d>c;c++)!~b.indexOf(a=this[c].parentElement)&&a&&b.push(a);return q(b)},d.toArray=function(){return i.call(this)},d.is=function(){var a=arguments;return this.some(function(b){return b.tagName.toLowerCase()===a[0]})},d.has=function(){var a=arguments;return this.some(function(b){return b.querySelectorAll(a[0]).length})},d.add=function(a,b){return this.pushStack(q.unique(q.merge(this.get(),q(a,b))))},d.attr=function(a,b){var c,d=arguments,e=0,f=this.length;if(m(a)&&1===d.length)return this[0]&&this[0].getAttribute(a);for(2===d.length?c=function(c){c.setAttribute(a,b)}:n(a)&&(c=function(b){k(a).forEach(function(c){b.setAttribute(c,a[c])})});f>e;e++)c(this[e]);return this},d.removeAttr=function(a){for(var b=0,c=this.length;c>b;b++)this[b].removeAttribute(a);return this},d.val=function(a){var b=0,c=this.length;if(0===arguments.length)return this[0]&&this[0].value;for(;c>b;b++)this[b].value=a;return this},d.css=function(b,c){var d,e=arguments,f=0,g=this.length;if(m(b)&&1===e.length)return this[0]&&a.getComputedStyle(this[0])[b];for(2===e.length?d=function(a){a.style[b]=c}:n(b)&&(d=function(a){k(b).forEach(function(c){a.style[c]=b[c]})});g>f;f++)d(this[f]);return this},d.data=function(a,b){var c,d=arguments,e={},f=0,g=this.length,h=function(a,b,c){n(c)?(a.jdata=a.jdata||{},a.jdata[b]=c):a.dataset[b]=c},i=function(a){return"true"===a?!0:"false"===a?!1:a};if(0===d.length)return this[0].jdata&&(e=this[0].jdata),k(this[0].dataset).forEach(function(a){e[a]=i(this[0].dataset[a])},this),e;if(1===d.length&&m(a))return this[0]&&i(this[0].dataset[a]||this[0].jdata&&this[0].jdata[a]);for(1===d.length&&n(a)?c=function(b){k(a).forEach(function(c){h(b,c,a[c])})}:2===d.length&&(c=function(c){h(c,a,b)});g>f;f++)c(this[f]);return this},d.removeData=function(a){for(var b,c,d=0,e=this.length;e>d;d++)if(b=this[d].jdata,c=this[d].dataset,a)b&&b[a]&&delete b[a],delete c[a];else{for(a in b)delete b[a];for(a in c)delete c[a]}return this},d.addClass=function(a){for(var b=0,c=0,d=this.length,e=a?a.trim().split(/\s+/):[];d>b;b++)for(c=0,c=0;c<e.length;c++)this[b].classList.add(e[c]);return this},d.removeClass=function(a){for(var b=0,c=0,d=this.length,e=a?a.trim().split(/\s+/):[];d>b;b++)for(c=0,c=0;c<e.length;c++)this[b].classList.remove(e[c]);return this},d.toggleClass=function(a,b){var c=0,d=this.length,e="toggle";if(b===!0&&(e="add")||b===!1&&(e="remove"),a)for(;d>c;c++)this[c].classList[e](a);return this},d.hasClass=function(a){var b=0,c=this.length;if(a)for(;c>b;b++)if(this[b].classList.contains(a))return!0;return!1},d.html=function(a){var b,c=arguments;return 1===c.length&&void 0!==a?this.empty().append(a):0===c.length&&(b=this[0])?b.innerHTML:this},d.append=function(a){var b,c=0,d=this.length;for(m(a)&&h.exec(a)?a=q(a):n(a)||(a=document.createTextNode(a)),a=a instanceof q?a:q(a),b=function(b,c){a.forEach(function(a){b.appendChild(c?a.cloneNode(!0):a)})};d>c;c++)b(this[c],c);return this},d.appendTo=function(a){return q(a).append(this),this},d.empty=function(){for(var a,b=0,c=this.length;c>b;b++)for(a=this[b];a.lastChild;)a.removeChild(a.lastChild);return this},d.remove=function(){var a,b=0,c=this.length;for(this.off();c>b;b++)a=this[b],delete a.jdata,a.parentNode&&a.parentNode.removeChild(a);return this},"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=q:"function"==typeof define&&define.amd?(define(function(){return q}),a.jBone=a.$=q):"object"==typeof a&&"object"==typeof a.document&&(a.jBone=a.$=q)}(window);
}());
(function () {
// Generated by CoffeeScript 1.6.3
(function() {
    var Deferred, PENDING, REJECTED, RESOLVED, VERSION, after, execute, flatten, has, installInto, isArguments, isPromise, wrap, _when,
        __slice = [].slice;

    VERSION = '3.0.0';

    PENDING = "pending";

    RESOLVED = "resolved";

    REJECTED = "rejected";

    has = function(obj, prop) {
        return obj != null ? obj.hasOwnProperty(prop) : void 0;
    };

    isArguments = function(obj) {
        return has(obj, 'length') && has(obj, 'callee');
    };

    isPromise = function(obj) {
        return has(obj, 'promise') && typeof (obj != null ? obj.promise : void 0) === 'function';
    };

    flatten = function(array) {
        if (isArguments(array)) {
            return flatten(Array.prototype.slice.call(array));
        }
        if (!Array.isArray(array)) {
            return [array];
        }
        return array.reduce(function(memo, value) {
            if (Array.isArray(value)) {
                return memo.concat(flatten(value));
            }
            memo.push(value);
            return memo;
        }, []);
    };

    after = function(times, func) {
        if (times <= 0) {
            return func();
        }
        return function() {
            if (--times < 1) {
                return func.apply(this, arguments);
            }
        };
    };

    wrap = function(func, wrapper) {
        return function() {
            var args;
            args = [func].concat(Array.prototype.slice.call(arguments, 0));
            return wrapper.apply(this, args);
        };
    };

    execute = function(callbacks, args, context) {
        var callback, _i, _len, _ref, _results;
        _ref = flatten(callbacks);
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            callback = _ref[_i];
            _results.push(callback.call.apply(callback, [context].concat(__slice.call(args))));
        }
        return _results;
    };

    Deferred = function() {
        var candidate, close, closingArguments, doneCallbacks, failCallbacks, progressCallbacks, state;
        state = PENDING;
        doneCallbacks = [];
        failCallbacks = [];
        progressCallbacks = [];
        closingArguments = {
            'resolved': {},
            'rejected': {},
            'pending': {}
        };
        this.promise = function(candidate) {
            var pipe, storeCallbacks;
            candidate = candidate || {};
            candidate.state = function() {
                return state;
            };
            storeCallbacks = function(shouldExecuteImmediately, holder, holderState) {
                return function() {
                    if (state === PENDING) {
                        holder.push.apply(holder, flatten(arguments));
                    }
                    if (shouldExecuteImmediately()) {
                        execute(arguments, closingArguments[holderState]);
                    }
                    return candidate;
                };
            };
            candidate.done = storeCallbacks((function() {
                return state === RESOLVED;
            }), doneCallbacks, RESOLVED);
            candidate.fail = storeCallbacks((function() {
                return state === REJECTED;
            }), failCallbacks, REJECTED);
            candidate.progress = storeCallbacks((function() {
                return state !== PENDING;
            }), progressCallbacks, PENDING);
            candidate.always = function() {
                var _ref;
                return (_ref = candidate.done.apply(candidate, arguments)).fail.apply(_ref, arguments);
            };
            pipe = function(doneFilter, failFilter, progressFilter) {
                var filter, master;
                master = new Deferred();
                filter = function(source, funnel, callback) {
                    if (!callback) {
                        return candidate[source](master[funnel]);
                    }
                    return candidate[source](function() {
                        var args, value;
                        args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
                        value = callback.apply(null, args);
                        if (isPromise(value)) {
                            return value.done(master.resolve).fail(master.reject).progress(master.notify);
                        } else {
                            return master[funnel](value);
                        }
                    });
                };
                filter('done', 'resolve', doneFilter);
                filter('fail', 'reject', failFilter);
                filter('progress', 'notify', progressFilter);
                return master;
            };
            candidate.pipe = pipe;
            candidate.then = pipe;
            if (candidate.promise == null) {
                candidate.promise = function() {
                    return candidate;
                };
            }
            return candidate;
        };
        this.promise(this);
        candidate = this;
        close = function(finalState, callbacks, context) {
            return function() {
                if (state === PENDING) {
                    state = finalState;
                    closingArguments[finalState] = arguments;
                    execute(callbacks, closingArguments[finalState], context);
                    return candidate;
                }
                return this;
            };
        };
        this.resolve = close(RESOLVED, doneCallbacks);
        this.reject = close(REJECTED, failCallbacks);
        this.notify = close(PENDING, progressCallbacks);
        this.resolveWith = function(context, args) {
            return close(RESOLVED, doneCallbacks, context).apply(null, args);
        };
        this.rejectWith = function(context, args) {
            return close(REJECTED, failCallbacks, context).apply(null, args);
        };
        this.notifyWith = function(context, args) {
            return close(PENDING, progressCallbacks, context).apply(null, args);
        };
        return this;
    };

    _when = function() {
        var def, defs, finish, resolutionArgs, trigger, _i, _len;
        defs = flatten(arguments);
        if (defs.length === 1) {
            if (isPromise(defs[0])) {
                return defs[0];
            } else {
                return (new Deferred()).resolve(defs[0]).promise();
            }
        }
        trigger = new Deferred();
        if (!defs.length) {
            return trigger.resolve().promise();
        }
        resolutionArgs = [];
        finish = after(defs.length, function() {
            return trigger.resolve.apply(trigger, resolutionArgs);
        });
        defs.forEach(function(def, index) {
            if (isPromise(def)) {
                return def.done(function() {
                    var args;
                    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
                    resolutionArgs[index] = args.length > 1 ? args : args[0];
                    return finish();
                });
            } else {
                resolutionArgs[index] = def;
                return finish();
            }
        });
        for (_i = 0, _len = defs.length; _i < _len; _i++) {
            def = defs[_i];
            isPromise(def) && def.fail(trigger.reject);
        }
        return trigger.promise();
    };

    installInto = function(fw) {
        fw.Deferred = function() {
            return new Deferred();
        };
        fw.ajax = wrap(fw.ajax, function(ajax, options) {
            var createWrapper, def, promise, xhr;
            if (options == null) {
                options = {};
            }
            def = new Deferred();
            createWrapper = function(wrapped, finisher) {
                return wrap(wrapped, function() {
                    var args, func;
                    func = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
                    if (func) {
                        func.apply(null, args);
                    }
                    return finisher.apply(null, args);
                });
            };
            options.success = createWrapper(options.success, def.resolve);
            options.error = createWrapper(options.error, def.reject);
            xhr = ajax(options);
            promise = def.promise();
            promise.abort = function() {
                return xhr.abort();
            };
            return promise;
        });
        return fw.when = _when;
    };

    if (typeof exports !== 'undefined') {
        exports.Deferred = function() {
            return new Deferred();
        };
        exports.when = _when;
        exports.installInto = installInto;
    } else if (typeof define === 'function' && define.amd) {
        define(function() {
            if (typeof Zepto !== 'undefined') {
                return installInto(Zepto);
            } else {
                Deferred.when = _when;
                Deferred.installInto = installInto;
                return Deferred;
            }
        });
    } else if (typeof Zepto !== 'undefined') {
        installInto(Zepto);
    } else {
        this.Deferred = function() {
            return new Deferred();
        };
        this.Deferred.when = _when;
        this.Deferred.installInto = installInto;
    }

}).call(this);
}());
(function () {
(function(t){var e=typeof self=="object"&&self.self==self&&self||typeof global=="object"&&global.global==global&&global;if(typeof define==="function"&&define.amd){define(["underscore","jquery","exports"],function(i,r,n){e.Backbone=t(e,n,i,r)})}else if(typeof exports!=="undefined"){var i=require("underscore"),r;try{r=require("jquery")}catch(n){}t(e,exports,i,r)}else{e.Backbone=t(e,{},e._,e.jQuery||e.Zepto||e.ender||e.$)}})(function(t,e,i,r){var n=t.Backbone;var s=Array.prototype.slice;e.VERSION="1.2.3";e.$=r;e.noConflict=function(){t.Backbone=n;return this};e.emulateHTTP=false;e.emulateJSON=false;var a=function(t,e,r){switch(t){case 1:return function(){return i[e](this[r])};case 2:return function(t){return i[e](this[r],t)};case 3:return function(t,n){return i[e](this[r],h(t,this),n)};case 4:return function(t,n,s){return i[e](this[r],h(t,this),n,s)};default:return function(){var t=s.call(arguments);t.unshift(this[r]);return i[e].apply(i,t)}}};var o=function(t,e,r){i.each(e,function(e,n){if(i[n])t.prototype[n]=a(e,n,r)})};var h=function(t,e){if(i.isFunction(t))return t;if(i.isObject(t)&&!e._isModel(t))return u(t);if(i.isString(t))return function(e){return e.get(t)};return t};var u=function(t){var e=i.matches(t);return function(t){return e(t.attributes)}};var l=e.Events={};var c=/\s+/;var f=function(t,e,r,n,s){var a=0,o;if(r&&typeof r==="object"){if(n!==void 0&&"context"in s&&s.context===void 0)s.context=n;for(o=i.keys(r);a<o.length;a++){e=f(t,e,o[a],r[o[a]],s)}}else if(r&&c.test(r)){for(o=r.split(c);a<o.length;a++){e=t(e,o[a],n,s)}}else{e=t(e,r,n,s)}return e};l.on=function(t,e,i){return d(this,t,e,i)};var d=function(t,e,i,r,n){t._events=f(v,t._events||{},e,i,{context:r,ctx:t,listening:n});if(n){var s=t._listeners||(t._listeners={});s[n.id]=n}return t};l.listenTo=function(t,e,r){if(!t)return this;var n=t._listenId||(t._listenId=i.uniqueId("l"));var s=this._listeningTo||(this._listeningTo={});var a=s[n];if(!a){var o=this._listenId||(this._listenId=i.uniqueId("l"));a=s[n]={obj:t,objId:n,id:o,listeningTo:s,count:0}}d(t,e,r,this,a);return this};var v=function(t,e,i,r){if(i){var n=t[e]||(t[e]=[]);var s=r.context,a=r.ctx,o=r.listening;if(o)o.count++;n.push({callback:i,context:s,ctx:s||a,listening:o})}return t};l.off=function(t,e,i){if(!this._events)return this;this._events=f(g,this._events,t,e,{context:i,listeners:this._listeners});return this};l.stopListening=function(t,e,r){var n=this._listeningTo;if(!n)return this;var s=t?[t._listenId]:i.keys(n);for(var a=0;a<s.length;a++){var o=n[s[a]];if(!o)break;o.obj.off(e,r,this)}if(i.isEmpty(n))this._listeningTo=void 0;return this};var g=function(t,e,r,n){if(!t)return;var s=0,a;var o=n.context,h=n.listeners;if(!e&&!r&&!o){var u=i.keys(h);for(;s<u.length;s++){a=h[u[s]];delete h[a.id];delete a.listeningTo[a.objId]}return}var l=e?[e]:i.keys(t);for(;s<l.length;s++){e=l[s];var c=t[e];if(!c)break;var f=[];for(var d=0;d<c.length;d++){var v=c[d];if(r&&r!==v.callback&&r!==v.callback._callback||o&&o!==v.context){f.push(v)}else{a=v.listening;if(a&&--a.count===0){delete h[a.id];delete a.listeningTo[a.objId]}}}if(f.length){t[e]=f}else{delete t[e]}}if(i.size(t))return t};l.once=function(t,e,r){var n=f(p,{},t,e,i.bind(this.off,this));return this.on(n,void 0,r)};l.listenToOnce=function(t,e,r){var n=f(p,{},e,r,i.bind(this.stopListening,this,t));return this.listenTo(t,n)};var p=function(t,e,r,n){if(r){var s=t[e]=i.once(function(){n(e,s);r.apply(this,arguments)});s._callback=r}return t};l.trigger=function(t){if(!this._events)return this;var e=Math.max(0,arguments.length-1);var i=Array(e);for(var r=0;r<e;r++)i[r]=arguments[r+1];f(m,this._events,t,void 0,i);return this};var m=function(t,e,i,r){if(t){var n=t[e];var s=t.all;if(n&&s)s=s.slice();if(n)_(n,r);if(s)_(s,[e].concat(r))}return t};var _=function(t,e){var i,r=-1,n=t.length,s=e[0],a=e[1],o=e[2];switch(e.length){case 0:while(++r<n)(i=t[r]).callback.call(i.ctx);return;case 1:while(++r<n)(i=t[r]).callback.call(i.ctx,s);return;case 2:while(++r<n)(i=t[r]).callback.call(i.ctx,s,a);return;case 3:while(++r<n)(i=t[r]).callback.call(i.ctx,s,a,o);return;default:while(++r<n)(i=t[r]).callback.apply(i.ctx,e);return}};l.bind=l.on;l.unbind=l.off;i.extend(e,l);var y=e.Model=function(t,e){var r=t||{};e||(e={});this.cid=i.uniqueId(this.cidPrefix);this.attributes={};if(e.collection)this.collection=e.collection;if(e.parse)r=this.parse(r,e)||{};r=i.defaults({},r,i.result(this,"defaults"));this.set(r,e);this.changed={};this.initialize.apply(this,arguments)};i.extend(y.prototype,l,{changed:null,validationError:null,idAttribute:"id",cidPrefix:"c",initialize:function(){},toJSON:function(t){return i.clone(this.attributes)},sync:function(){return e.sync.apply(this,arguments)},get:function(t){return this.attributes[t]},escape:function(t){return i.escape(this.get(t))},has:function(t){return this.get(t)!=null},matches:function(t){return!!i.iteratee(t,this)(this.attributes)},set:function(t,e,r){if(t==null)return this;var n;if(typeof t==="object"){n=t;r=e}else{(n={})[t]=e}r||(r={});if(!this._validate(n,r))return false;var s=r.unset;var a=r.silent;var o=[];var h=this._changing;this._changing=true;if(!h){this._previousAttributes=i.clone(this.attributes);this.changed={}}var u=this.attributes;var l=this.changed;var c=this._previousAttributes;for(var f in n){e=n[f];if(!i.isEqual(u[f],e))o.push(f);if(!i.isEqual(c[f],e)){l[f]=e}else{delete l[f]}s?delete u[f]:u[f]=e}this.id=this.get(this.idAttribute);if(!a){if(o.length)this._pending=r;for(var d=0;d<o.length;d++){this.trigger("change:"+o[d],this,u[o[d]],r)}}if(h)return this;if(!a){while(this._pending){r=this._pending;this._pending=false;this.trigger("change",this,r)}}this._pending=false;this._changing=false;return this},unset:function(t,e){return this.set(t,void 0,i.extend({},e,{unset:true}))},clear:function(t){var e={};for(var r in this.attributes)e[r]=void 0;return this.set(e,i.extend({},t,{unset:true}))},hasChanged:function(t){if(t==null)return!i.isEmpty(this.changed);return i.has(this.changed,t)},changedAttributes:function(t){if(!t)return this.hasChanged()?i.clone(this.changed):false;var e=this._changing?this._previousAttributes:this.attributes;var r={};for(var n in t){var s=t[n];if(i.isEqual(e[n],s))continue;r[n]=s}return i.size(r)?r:false},previous:function(t){if(t==null||!this._previousAttributes)return null;return this._previousAttributes[t]},previousAttributes:function(){return i.clone(this._previousAttributes)},fetch:function(t){t=i.extend({parse:true},t);var e=this;var r=t.success;t.success=function(i){var n=t.parse?e.parse(i,t):i;if(!e.set(n,t))return false;if(r)r.call(t.context,e,i,t);e.trigger("sync",e,i,t)};z(this,t);return this.sync("read",this,t)},save:function(t,e,r){var n;if(t==null||typeof t==="object"){n=t;r=e}else{(n={})[t]=e}r=i.extend({validate:true,parse:true},r);var s=r.wait;if(n&&!s){if(!this.set(n,r))return false}else{if(!this._validate(n,r))return false}var a=this;var o=r.success;var h=this.attributes;r.success=function(t){a.attributes=h;var e=r.parse?a.parse(t,r):t;if(s)e=i.extend({},n,e);if(e&&!a.set(e,r))return false;if(o)o.call(r.context,a,t,r);a.trigger("sync",a,t,r)};z(this,r);if(n&&s)this.attributes=i.extend({},h,n);var u=this.isNew()?"create":r.patch?"patch":"update";if(u==="patch"&&!r.attrs)r.attrs=n;var l=this.sync(u,this,r);this.attributes=h;return l},destroy:function(t){t=t?i.clone(t):{};var e=this;var r=t.success;var n=t.wait;var s=function(){e.stopListening();e.trigger("destroy",e,e.collection,t)};t.success=function(i){if(n)s();if(r)r.call(t.context,e,i,t);if(!e.isNew())e.trigger("sync",e,i,t)};var a=false;if(this.isNew()){i.defer(t.success)}else{z(this,t);a=this.sync("delete",this,t)}if(!n)s();return a},url:function(){var t=i.result(this,"urlRoot")||i.result(this.collection,"url")||F();if(this.isNew())return t;var e=this.get(this.idAttribute);return t.replace(/[^\/]$/,"$&/")+encodeURIComponent(e)},parse:function(t,e){return t},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return!this.has(this.idAttribute)},isValid:function(t){return this._validate({},i.defaults({validate:true},t))},_validate:function(t,e){if(!e.validate||!this.validate)return true;t=i.extend({},this.attributes,t);var r=this.validationError=this.validate(t,e)||null;if(!r)return true;this.trigger("invalid",this,r,i.extend(e,{validationError:r}));return false}});var b={keys:1,values:1,pairs:1,invert:1,pick:0,omit:0,chain:1,isEmpty:1};o(y,b,"attributes");var x=e.Collection=function(t,e){e||(e={});if(e.model)this.model=e.model;if(e.comparator!==void 0)this.comparator=e.comparator;this._reset();this.initialize.apply(this,arguments);if(t)this.reset(t,i.extend({silent:true},e))};var w={add:true,remove:true,merge:true};var E={add:true,remove:false};var k=function(t,e,i){i=Math.min(Math.max(i,0),t.length);var r=Array(t.length-i);var n=e.length;for(var s=0;s<r.length;s++)r[s]=t[s+i];for(s=0;s<n;s++)t[s+i]=e[s];for(s=0;s<r.length;s++)t[s+n+i]=r[s]};i.extend(x.prototype,l,{model:y,initialize:function(){},toJSON:function(t){return this.map(function(e){return e.toJSON(t)})},sync:function(){return e.sync.apply(this,arguments)},add:function(t,e){return this.set(t,i.extend({merge:false},e,E))},remove:function(t,e){e=i.extend({},e);var r=!i.isArray(t);t=r?[t]:i.clone(t);var n=this._removeModels(t,e);if(!e.silent&&n)this.trigger("update",this,e);return r?n[0]:n},set:function(t,e){if(t==null)return;e=i.defaults({},e,w);if(e.parse&&!this._isModel(t))t=this.parse(t,e);var r=!i.isArray(t);t=r?[t]:t.slice();var n=e.at;if(n!=null)n=+n;if(n<0)n+=this.length+1;var s=[];var a=[];var o=[];var h={};var u=e.add;var l=e.merge;var c=e.remove;var f=false;var d=this.comparator&&n==null&&e.sort!==false;var v=i.isString(this.comparator)?this.comparator:null;var g;for(var p=0;p<t.length;p++){g=t[p];var m=this.get(g);if(m){if(l&&g!==m){var _=this._isModel(g)?g.attributes:g;if(e.parse)_=m.parse(_,e);m.set(_,e);if(d&&!f)f=m.hasChanged(v)}if(!h[m.cid]){h[m.cid]=true;s.push(m)}t[p]=m}else if(u){g=t[p]=this._prepareModel(g,e);if(g){a.push(g);this._addReference(g,e);h[g.cid]=true;s.push(g)}}}if(c){for(p=0;p<this.length;p++){g=this.models[p];if(!h[g.cid])o.push(g)}if(o.length)this._removeModels(o,e)}var y=false;var b=!d&&u&&c;if(s.length&&b){y=this.length!=s.length||i.some(this.models,function(t,e){return t!==s[e]});this.models.length=0;k(this.models,s,0);this.length=this.models.length}else if(a.length){if(d)f=true;k(this.models,a,n==null?this.length:n);this.length=this.models.length}if(f)this.sort({silent:true});if(!e.silent){for(p=0;p<a.length;p++){if(n!=null)e.index=n+p;g=a[p];g.trigger("add",g,this,e)}if(f||y)this.trigger("sort",this,e);if(a.length||o.length)this.trigger("update",this,e)}return r?t[0]:t},reset:function(t,e){e=e?i.clone(e):{};for(var r=0;r<this.models.length;r++){this._removeReference(this.models[r],e)}e.previousModels=this.models;this._reset();t=this.add(t,i.extend({silent:true},e));if(!e.silent)this.trigger("reset",this,e);return t},push:function(t,e){return this.add(t,i.extend({at:this.length},e))},pop:function(t){var e=this.at(this.length-1);return this.remove(e,t)},unshift:function(t,e){return this.add(t,i.extend({at:0},e))},shift:function(t){var e=this.at(0);return this.remove(e,t)},slice:function(){return s.apply(this.models,arguments)},get:function(t){if(t==null)return void 0;var e=this.modelId(this._isModel(t)?t.attributes:t);return this._byId[t]||this._byId[e]||this._byId[t.cid]},at:function(t){if(t<0)t+=this.length;return this.models[t]},where:function(t,e){return this[e?"find":"filter"](t)},findWhere:function(t){return this.where(t,true)},sort:function(t){var e=this.comparator;if(!e)throw new Error("Cannot sort a set without a comparator");t||(t={});var r=e.length;if(i.isFunction(e))e=i.bind(e,this);if(r===1||i.isString(e)){this.models=this.sortBy(e)}else{this.models.sort(e)}if(!t.silent)this.trigger("sort",this,t);return this},pluck:function(t){return i.invoke(this.models,"get",t)},fetch:function(t){t=i.extend({parse:true},t);var e=t.success;var r=this;t.success=function(i){var n=t.reset?"reset":"set";r[n](i,t);if(e)e.call(t.context,r,i,t);r.trigger("sync",r,i,t)};z(this,t);return this.sync("read",this,t)},create:function(t,e){e=e?i.clone(e):{};var r=e.wait;t=this._prepareModel(t,e);if(!t)return false;if(!r)this.add(t,e);var n=this;var s=e.success;e.success=function(t,e,i){if(r)n.add(t,i);if(s)s.call(i.context,t,e,i)};t.save(null,e);return t},parse:function(t,e){return t},clone:function(){return new this.constructor(this.models,{model:this.model,comparator:this.comparator})},modelId:function(t){return t[this.model.prototype.idAttribute||"id"]},_reset:function(){this.length=0;this.models=[];this._byId={}},_prepareModel:function(t,e){if(this._isModel(t)){if(!t.collection)t.collection=this;return t}e=e?i.clone(e):{};e.collection=this;var r=new this.model(t,e);if(!r.validationError)return r;this.trigger("invalid",this,r.validationError,e);return false},_removeModels:function(t,e){var i=[];for(var r=0;r<t.length;r++){var n=this.get(t[r]);if(!n)continue;var s=this.indexOf(n);this.models.splice(s,1);this.length--;if(!e.silent){e.index=s;n.trigger("remove",n,this,e)}i.push(n);this._removeReference(n,e)}return i.length?i:false},_isModel:function(t){return t instanceof y},_addReference:function(t,e){this._byId[t.cid]=t;var i=this.modelId(t.attributes);if(i!=null)this._byId[i]=t;t.on("all",this._onModelEvent,this)},_removeReference:function(t,e){delete this._byId[t.cid];var i=this.modelId(t.attributes);if(i!=null)delete this._byId[i];if(this===t.collection)delete t.collection;t.off("all",this._onModelEvent,this)},_onModelEvent:function(t,e,i,r){if((t==="add"||t==="remove")&&i!==this)return;if(t==="destroy")this.remove(e,r);if(t==="change"){var n=this.modelId(e.previousAttributes());var s=this.modelId(e.attributes);if(n!==s){if(n!=null)delete this._byId[n];if(s!=null)this._byId[s]=e}}this.trigger.apply(this,arguments)}});var S={forEach:3,each:3,map:3,collect:3,reduce:4,foldl:4,inject:4,reduceRight:4,foldr:4,find:3,detect:3,filter:3,select:3,reject:3,every:3,all:3,some:3,any:3,include:3,includes:3,contains:3,invoke:0,max:3,min:3,toArray:1,size:1,first:3,head:3,take:3,initial:3,rest:3,tail:3,drop:3,last:3,without:0,difference:0,indexOf:3,shuffle:1,lastIndexOf:3,isEmpty:1,chain:1,sample:3,partition:3,groupBy:3,countBy:3,sortBy:3,indexBy:3};o(x,S,"models");var I=e.View=function(t){this.cid=i.uniqueId("view");i.extend(this,i.pick(t,P));this._ensureElement();this.initialize.apply(this,arguments)};var T=/^(\S+)\s*(.*)$/;var P=["model","collection","el","id","attributes","className","tagName","events"];i.extend(I.prototype,l,{tagName:"div",$:function(t){return this.$el.find(t)},initialize:function(){},render:function(){return this},remove:function(){this._removeElement();this.stopListening();return this},_removeElement:function(){this.$el.remove()},setElement:function(t){this.undelegateEvents();this._setElement(t);this.delegateEvents();return this},_setElement:function(t){this.$el=t instanceof e.$?t:e.$(t);this.el=this.$el[0]},delegateEvents:function(t){t||(t=i.result(this,"events"));if(!t)return this;this.undelegateEvents();for(var e in t){var r=t[e];if(!i.isFunction(r))r=this[r];if(!r)continue;var n=e.match(T);this.delegate(n[1],n[2],i.bind(r,this))}return this},delegate:function(t,e,i){this.$el.on(t+".delegateEvents"+this.cid,e,i);return this},undelegateEvents:function(){if(this.$el)this.$el.off(".delegateEvents"+this.cid);return this},undelegate:function(t,e,i){this.$el.off(t+".delegateEvents"+this.cid,e,i);return this},_createElement:function(t){return document.createElement(t)},_ensureElement:function(){if(!this.el){var t=i.extend({},i.result(this,"attributes"));if(this.id)t.id=i.result(this,"id");if(this.className)t["class"]=i.result(this,"className");this.setElement(this._createElement(i.result(this,"tagName")));this._setAttributes(t)}else{this.setElement(i.result(this,"el"))}},_setAttributes:function(t){this.$el.attr(t)}});e.sync=function(t,r,n){var s=H[t];i.defaults(n||(n={}),{emulateHTTP:e.emulateHTTP,emulateJSON:e.emulateJSON});var a={type:s,dataType:"json"};if(!n.url){a.url=i.result(r,"url")||F()}if(n.data==null&&r&&(t==="create"||t==="update"||t==="patch")){a.contentType="application/json";a.data=JSON.stringify(n.attrs||r.toJSON(n))}if(n.emulateJSON){a.contentType="application/x-www-form-urlencoded";a.data=a.data?{model:a.data}:{}}if(n.emulateHTTP&&(s==="PUT"||s==="DELETE"||s==="PATCH")){a.type="POST";if(n.emulateJSON)a.data._method=s;var o=n.beforeSend;n.beforeSend=function(t){t.setRequestHeader("X-HTTP-Method-Override",s);if(o)return o.apply(this,arguments)}}if(a.type!=="GET"&&!n.emulateJSON){a.processData=false}var h=n.error;n.error=function(t,e,i){n.textStatus=e;n.errorThrown=i;if(h)h.call(n.context,t,e,i)};var u=n.xhr=e.ajax(i.extend(a,n));r.trigger("request",r,u,n);return u};var H={create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"};e.ajax=function(){return e.$.ajax.apply(e.$,arguments)};var $=e.Router=function(t){t||(t={});if(t.routes)this.routes=t.routes;this._bindRoutes();this.initialize.apply(this,arguments)};var A=/\((.*?)\)/g;var C=/(\(\?)?:\w+/g;var R=/\*\w+/g;var j=/[\-{}\[\]+?.,\\\^$|#\s]/g;i.extend($.prototype,l,{initialize:function(){},route:function(t,r,n){if(!i.isRegExp(t))t=this._routeToRegExp(t);if(i.isFunction(r)){n=r;r=""}if(!n)n=this[r];var s=this;e.history.route(t,function(i){var a=s._extractParameters(t,i);if(s.execute(n,a,r)!==false){s.trigger.apply(s,["route:"+r].concat(a));s.trigger("route",r,a);e.history.trigger("route",s,r,a)}});return this},execute:function(t,e,i){if(t)t.apply(this,e)},navigate:function(t,i){e.history.navigate(t,i);return this},_bindRoutes:function(){if(!this.routes)return;this.routes=i.result(this,"routes");var t,e=i.keys(this.routes);while((t=e.pop())!=null){this.route(t,this.routes[t])}},_routeToRegExp:function(t){t=t.replace(j,"\\$&").replace(A,"(?:$1)?").replace(C,function(t,e){return e?t:"([^/?]+)"}).replace(R,"([^?]*?)");return new RegExp("^"+t+"(?:\\?([\\s\\S]*))?$")},_extractParameters:function(t,e){var r=t.exec(e).slice(1);return i.map(r,function(t,e){if(e===r.length-1)return t||null;return t?decodeURIComponent(t):null})}});var M=e.History=function(){this.handlers=[];this.checkUrl=i.bind(this.checkUrl,this);if(typeof window!=="undefined"){this.location=window.location;this.history=window.history}};var N=/^[#\/]|\s+$/g;var O=/^\/+|\/+$/g;var U=/#.*$/;M.started=false;i.extend(M.prototype,l,{interval:50,atRoot:function(){var t=this.location.pathname.replace(/[^\/]$/,"$&/");return t===this.root&&!this.getSearch()},matchRoot:function(){var t=this.decodeFragment(this.location.pathname);var e=t.slice(0,this.root.length-1)+"/";return e===this.root},decodeFragment:function(t){return decodeURI(t.replace(/%25/g,"%2525"))},getSearch:function(){var t=this.location.href.replace(/#.*/,"").match(/\?.+/);return t?t[0]:""},getHash:function(t){var e=(t||this).location.href.match(/#(.*)$/);return e?e[1]:""},getPath:function(){var t=this.decodeFragment(this.location.pathname+this.getSearch()).slice(this.root.length-1);return t.charAt(0)==="/"?t.slice(1):t},getFragment:function(t){if(t==null){if(this._usePushState||!this._wantsHashChange){t=this.getPath()}else{t=this.getHash()}}return t.replace(N,"")},start:function(t){if(M.started)throw new Error("Backbone.history has already been started");M.started=true;this.options=i.extend({root:"/"},this.options,t);this.root=this.options.root;this._wantsHashChange=this.options.hashChange!==false;this._hasHashChange="onhashchange"in window&&(document.documentMode===void 0||document.documentMode>7);this._useHashChange=this._wantsHashChange&&this._hasHashChange;this._wantsPushState=!!this.options.pushState;this._hasPushState=!!(this.history&&this.history.pushState);this._usePushState=this._wantsPushState&&this._hasPushState;this.fragment=this.getFragment();this.root=("/"+this.root+"/").replace(O,"/");if(this._wantsHashChange&&this._wantsPushState){if(!this._hasPushState&&!this.atRoot()){var e=this.root.slice(0,-1)||"/";this.location.replace(e+"#"+this.getPath());return true}else if(this._hasPushState&&this.atRoot()){this.navigate(this.getHash(),{replace:true})}}if(!this._hasHashChange&&this._wantsHashChange&&!this._usePushState){this.iframe=document.createElement("iframe");this.iframe.src="javascript:0";this.iframe.style.display="none";this.iframe.tabIndex=-1;var r=document.body;var n=r.insertBefore(this.iframe,r.firstChild).contentWindow;n.document.open();n.document.close();n.location.hash="#"+this.fragment}var s=window.addEventListener||function(t,e){return attachEvent("on"+t,e)};if(this._usePushState){s("popstate",this.checkUrl,false)}else if(this._useHashChange&&!this.iframe){s("hashchange",this.checkUrl,false)}else if(this._wantsHashChange){this._checkUrlInterval=setInterval(this.checkUrl,this.interval)}if(!this.options.silent)return this.loadUrl()},stop:function(){var t=window.removeEventListener||function(t,e){return detachEvent("on"+t,e)};if(this._usePushState){t("popstate",this.checkUrl,false)}else if(this._useHashChange&&!this.iframe){t("hashchange",this.checkUrl,false)}if(this.iframe){document.body.removeChild(this.iframe);this.iframe=null}if(this._checkUrlInterval)clearInterval(this._checkUrlInterval);M.started=false},route:function(t,e){this.handlers.unshift({route:t,callback:e})},checkUrl:function(t){var e=this.getFragment();if(e===this.fragment&&this.iframe){e=this.getHash(this.iframe.contentWindow)}if(e===this.fragment)return false;if(this.iframe)this.navigate(e);this.loadUrl()},loadUrl:function(t){if(!this.matchRoot())return false;t=this.fragment=this.getFragment(t);return i.some(this.handlers,function(e){if(e.route.test(t)){e.callback(t);return true}})},navigate:function(t,e){if(!M.started)return false;if(!e||e===true)e={trigger:!!e};t=this.getFragment(t||"");var i=this.root;if(t===""||t.charAt(0)==="?"){i=i.slice(0,-1)||"/"}var r=i+t;t=this.decodeFragment(t.replace(U,""));if(this.fragment===t)return;this.fragment=t;if(this._usePushState){this.history[e.replace?"replaceState":"pushState"]({},document.title,r)}else if(this._wantsHashChange){this._updateHash(this.location,t,e.replace);if(this.iframe&&t!==this.getHash(this.iframe.contentWindow)){var n=this.iframe.contentWindow;if(!e.replace){n.document.open();n.document.close()}this._updateHash(n.location,t,e.replace)}}else{return this.location.assign(r)}if(e.trigger)return this.loadUrl(t)},_updateHash:function(t,e,i){if(i){var r=t.href.replace(/(javascript:|#).*$/,"");t.replace(r+"#"+e)}else{t.hash="#"+e}}});e.history=new M;var q=function(t,e){var r=this;var n;if(t&&i.has(t,"constructor")){n=t.constructor}else{n=function(){return r.apply(this,arguments)}}i.extend(n,r,e);var s=function(){this.constructor=n};s.prototype=r.prototype;n.prototype=new s;if(t)i.extend(n.prototype,t);n.__super__=r.prototype;return n};y.extend=x.extend=$.extend=I.extend=M.extend=q;var F=function(){throw new Error('A "url" property or function must be specified')};var z=function(t,e){var i=e.error;e.error=function(r){if(i)i.call(e.context,t,r,e);t.trigger("error",t,r,e)}};return e});
//# sourceMappingURL=backbone-min.map
}());
(function () {
!function(){"use strict";function t(e,o){function i(t,e){return function(){return t.apply(e,arguments)}}var r;if(o=o||{},this.trackingClick=!1,this.trackingClickStart=0,this.targetElement=null,this.touchStartX=0,this.touchStartY=0,this.lastTouchIdentifier=0,this.touchBoundary=o.touchBoundary||10,this.layer=e,this.tapDelay=o.tapDelay||200,this.tapTimeout=o.tapTimeout||700,!t.notNeeded(e)){for(var a=["onMouse","onClick","onTouchStart","onTouchMove","onTouchEnd","onTouchCancel"],c=this,s=0,u=a.length;u>s;s++)c[a[s]]=i(c[a[s]],c);n&&(e.addEventListener("mouseover",this.onMouse,!0),e.addEventListener("mousedown",this.onMouse,!0),e.addEventListener("mouseup",this.onMouse,!0)),e.addEventListener("click",this.onClick,!0),e.addEventListener("touchstart",this.onTouchStart,!1),e.addEventListener("touchmove",this.onTouchMove,!1),e.addEventListener("touchend",this.onTouchEnd,!1),e.addEventListener("touchcancel",this.onTouchCancel,!1),Event.prototype.stopImmediatePropagation||(e.removeEventListener=function(t,n,o){var i=Node.prototype.removeEventListener;"click"===t?i.call(e,t,n.hijacked||n,o):i.call(e,t,n,o)},e.addEventListener=function(t,n,o){var i=Node.prototype.addEventListener;"click"===t?i.call(e,t,n.hijacked||(n.hijacked=function(t){t.propagationStopped||n(t)}),o):i.call(e,t,n,o)}),"function"==typeof e.onclick&&(r=e.onclick,e.addEventListener("click",function(t){r(t)},!1),e.onclick=null)}}var e=navigator.userAgent.indexOf("Windows Phone")>=0,n=navigator.userAgent.indexOf("Android")>0&&!e,o=/iP(ad|hone|od)/.test(navigator.userAgent)&&!e,i=o&&/OS 4_\d(_\d)?/.test(navigator.userAgent),r=o&&/OS [6-7]_\d/.test(navigator.userAgent),a=navigator.userAgent.indexOf("BB10")>0;t.prototype.needsClick=function(t){switch(t.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(t.disabled)return!0;break;case"input":if(o&&"file"===t.type||t.disabled)return!0;break;case"label":case"iframe":case"video":return!0}return/\bneedsclick\b/.test(t.className)},t.prototype.needsFocus=function(t){switch(t.nodeName.toLowerCase()){case"textarea":return!0;case"select":return!n;case"input":switch(t.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1}return!t.disabled&&!t.readOnly;default:return/\bneedsfocus\b/.test(t.className)}},t.prototype.sendClick=function(t,e){var n,o;document.activeElement&&document.activeElement!==t&&document.activeElement.blur(),o=e.changedTouches[0],n=document.createEvent("MouseEvents"),n.initMouseEvent(this.determineEventType(t),!0,!0,window,1,o.screenX,o.screenY,o.clientX,o.clientY,!1,!1,!1,!1,0,null),n.forwardedTouchEvent=!0,t.dispatchEvent(n)},t.prototype.determineEventType=function(t){return n&&"select"===t.tagName.toLowerCase()?"mousedown":"click"},t.prototype.focus=function(t){var e;o&&t.setSelectionRange&&0!==t.type.indexOf("date")&&"time"!==t.type&&"month"!==t.type?(e=t.value.length,t.setSelectionRange(e,e)):t.focus()},t.prototype.updateScrollParent=function(t){var e,n;if(e=t.fastClickScrollParent,!e||!e.contains(t)){n=t;do{if(n.scrollHeight>n.offsetHeight){e=n,t.fastClickScrollParent=n;break}n=n.parentElement}while(n)}e&&(e.fastClickLastScrollTop=e.scrollTop)},t.prototype.getTargetElementFromEventTarget=function(t){return t.nodeType===Node.TEXT_NODE?t.parentNode:t},t.prototype.onTouchStart=function(t){var e,n,r;if(t.targetTouches.length>1)return!0;if(e=this.getTargetElementFromEventTarget(t.target),n=t.targetTouches[0],o){if(r=window.getSelection(),r.rangeCount&&!r.isCollapsed)return!0;if(!i){if(n.identifier&&n.identifier===this.lastTouchIdentifier)return t.preventDefault(),!1;this.lastTouchIdentifier=n.identifier,this.updateScrollParent(e)}}return this.trackingClick=!0,this.trackingClickStart=t.timeStamp,this.targetElement=e,this.touchStartX=n.pageX,this.touchStartY=n.pageY,t.timeStamp-this.lastClickTime<this.tapDelay&&t.preventDefault(),!0},t.prototype.touchHasMoved=function(t){var e=t.changedTouches[0],n=this.touchBoundary;return Math.abs(e.pageX-this.touchStartX)>n||Math.abs(e.pageY-this.touchStartY)>n?!0:!1},t.prototype.onTouchMove=function(t){return this.trackingClick?((this.targetElement!==this.getTargetElementFromEventTarget(t.target)||this.touchHasMoved(t))&&(this.trackingClick=!1,this.targetElement=null),!0):!0},t.prototype.findControl=function(t){return void 0!==t.control?t.control:t.htmlFor?document.getElementById(t.htmlFor):t.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")},t.prototype.onTouchEnd=function(t){var e,a,c,s,u,l=this.targetElement;if(!this.trackingClick)return!0;if(t.timeStamp-this.lastClickTime<this.tapDelay)return this.cancelNextClick=!0,!0;if(t.timeStamp-this.trackingClickStart>this.tapTimeout)return!0;if(this.cancelNextClick=!1,this.lastClickTime=t.timeStamp,a=this.trackingClickStart,this.trackingClick=!1,this.trackingClickStart=0,r&&(u=t.changedTouches[0],l=document.elementFromPoint(u.pageX-window.pageXOffset,u.pageY-window.pageYOffset)||l,l.fastClickScrollParent=this.targetElement.fastClickScrollParent),c=l.tagName.toLowerCase(),"label"===c){if(e=this.findControl(l)){if(this.focus(l),n)return!1;l=e}}else if(this.needsFocus(l))return t.timeStamp-a>100||o&&window.top!==window&&"input"===c?(this.targetElement=null,!1):(this.focus(l),this.sendClick(l,t),o&&"select"===c||(this.targetElement=null,t.preventDefault()),!1);return o&&!i&&(s=l.fastClickScrollParent,s&&s.fastClickLastScrollTop!==s.scrollTop)?!0:(this.needsClick(l)||(t.preventDefault(),this.sendClick(l,t)),!1)},t.prototype.onTouchCancel=function(){this.trackingClick=!1,this.targetElement=null},t.prototype.onMouse=function(t){return this.targetElement?t.forwardedTouchEvent?!0:t.cancelable&&(!this.needsClick(this.targetElement)||this.cancelNextClick)?(t.stopImmediatePropagation?t.stopImmediatePropagation():t.propagationStopped=!0,t.stopPropagation(),t.preventDefault(),!1):!0:!0},t.prototype.onClick=function(t){var e;return this.trackingClick?(this.targetElement=null,this.trackingClick=!1,!0):"submit"===t.target.type&&0===t.detail?!0:(e=this.onMouse(t),e||(this.targetElement=null),e)},t.prototype.destroy=function(){var t=this.layer;n&&(t.removeEventListener("mouseover",this.onMouse,!0),t.removeEventListener("mousedown",this.onMouse,!0),t.removeEventListener("mouseup",this.onMouse,!0)),t.removeEventListener("click",this.onClick,!0),t.removeEventListener("touchstart",this.onTouchStart,!1),t.removeEventListener("touchmove",this.onTouchMove,!1),t.removeEventListener("touchend",this.onTouchEnd,!1),t.removeEventListener("touchcancel",this.onTouchCancel,!1)},t.notNeeded=function(t){var e,o,i,r;if("undefined"==typeof window.ontouchstart)return!0;if(o=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]){if(!n)return!0;if(e=document.querySelector("meta[name=viewport]")){if(-1!==e.content.indexOf("user-scalable=no"))return!0;if(o>31&&document.documentElement.scrollWidth<=window.outerWidth)return!0}}if(a&&(i=navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/),i[1]>=10&&i[2]>=3&&(e=document.querySelector("meta[name=viewport]")))){if(-1!==e.content.indexOf("user-scalable=no"))return!0;if(document.documentElement.scrollWidth<=window.outerWidth)return!0}return"none"===t.style.msTouchAction||"manipulation"===t.style.touchAction?!0:(r=+(/Firefox\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1],r>=27&&(e=document.querySelector("meta[name=viewport]"),e&&(-1!==e.content.indexOf("user-scalable=no")||document.documentElement.scrollWidth<=window.outerWidth))?!0:"none"===t.style.touchAction||"manipulation"===t.style.touchAction?!0:!1)},t.attach=function(e,n){return new t(e,n)},"function"==typeof define&&"object"==typeof define.amd&&define.amd?define(function(){return t}):"undefined"!=typeof module&&module.exports?(module.exports=t.attach,module.exports.FastClick=t):window.FastClick=t}();
}());
(function () {
/**
 * Swiper 3.1.7
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 *
 * http://www.idangero.us/swiper/
 *
 * Copyright 2015, Vladimir Kharlampidi
 * The iDangero.us
 * http://www.idangero.us/
 *
 * Licensed under MIT
 *
 * Released on: October 10, 2015
 */
!function(){"use strict";function e(e){e.fn.swiper=function(a){var r;return e(this).each(function(){var e=new t(this,a);r||(r=e)}),r}}var a,t=function(e,s){function i(){return"horizontal"===w.params.direction}function n(e){return Math.floor(e)}function o(){w.autoplayTimeoutId=setTimeout(function(){w.params.loop?(w.fixLoop(),w._slideNext()):w.isEnd?s.autoplayStopOnLast?w.stopAutoplay():w._slideTo(0):w._slideNext()},w.params.autoplay)}function l(e,t){var r=a(e.target);if(!r.is(t))if("string"==typeof t)r=r.parents(t);else if(t.nodeType){var s;return r.parents().each(function(e,a){a===t&&(s=t)}),s?t:void 0}return 0===r.length?void 0:r[0]}function d(e,a){a=a||{};var t=window.MutationObserver||window.WebkitMutationObserver,r=new t(function(e){e.forEach(function(e){w.onResize(!0),w.emit("onObserverUpdate",w,e)})});r.observe(e,{attributes:"undefined"==typeof a.attributes?!0:a.attributes,childList:"undefined"==typeof a.childList?!0:a.childList,characterData:"undefined"==typeof a.characterData?!0:a.characterData}),w.observers.push(r)}function p(e){e.originalEvent&&(e=e.originalEvent);var a=e.keyCode||e.charCode;if(!w.params.allowSwipeToNext&&(i()&&39===a||!i()&&40===a))return!1;if(!w.params.allowSwipeToPrev&&(i()&&37===a||!i()&&38===a))return!1;if(!(e.shiftKey||e.altKey||e.ctrlKey||e.metaKey||document.activeElement&&document.activeElement.nodeName&&("input"===document.activeElement.nodeName.toLowerCase()||"textarea"===document.activeElement.nodeName.toLowerCase()))){if(37===a||39===a||38===a||40===a){var t=!1;if(w.container.parents(".swiper-slide").length>0&&0===w.container.parents(".swiper-slide-active").length)return;var r={left:window.pageXOffset,top:window.pageYOffset},s=window.innerWidth,n=window.innerHeight,o=w.container.offset();w.rtl&&(o.left=o.left-w.container[0].scrollLeft);for(var l=[[o.left,o.top],[o.left+w.width,o.top],[o.left,o.top+w.height],[o.left+w.width,o.top+w.height]],d=0;d<l.length;d++){var p=l[d];p[0]>=r.left&&p[0]<=r.left+s&&p[1]>=r.top&&p[1]<=r.top+n&&(t=!0)}if(!t)return}i()?((37===a||39===a)&&(e.preventDefault?e.preventDefault():e.returnValue=!1),(39===a&&!w.rtl||37===a&&w.rtl)&&w.slideNext(),(37===a&&!w.rtl||39===a&&w.rtl)&&w.slidePrev()):((38===a||40===a)&&(e.preventDefault?e.preventDefault():e.returnValue=!1),40===a&&w.slideNext(),38===a&&w.slidePrev())}}function u(e){e.originalEvent&&(e=e.originalEvent);var a=w.mousewheel.event,t=0;if(e.detail)t=-e.detail;else if("mousewheel"===a)if(w.params.mousewheelForceToAxis)if(i()){if(!(Math.abs(e.wheelDeltaX)>Math.abs(e.wheelDeltaY)))return;t=e.wheelDeltaX}else{if(!(Math.abs(e.wheelDeltaY)>Math.abs(e.wheelDeltaX)))return;t=e.wheelDeltaY}else t=e.wheelDelta;else if("DOMMouseScroll"===a)t=-e.detail;else if("wheel"===a)if(w.params.mousewheelForceToAxis)if(i()){if(!(Math.abs(e.deltaX)>Math.abs(e.deltaY)))return;t=-e.deltaX}else{if(!(Math.abs(e.deltaY)>Math.abs(e.deltaX)))return;t=-e.deltaY}else t=Math.abs(e.deltaX)>Math.abs(e.deltaY)?-e.deltaX:-e.deltaY;if(w.params.mousewheelInvert&&(t=-t),w.params.freeMode){var r=w.getWrapperTranslate()+t*w.params.mousewheelSensitivity;if(r>w.minTranslate()&&(r=w.minTranslate()),r<w.maxTranslate()&&(r=w.maxTranslate()),w.setWrapperTransition(0),w.setWrapperTranslate(r),w.updateProgress(),w.updateActiveIndex(),w.params.freeModeSticky&&(clearTimeout(w.mousewheel.timeout),w.mousewheel.timeout=setTimeout(function(){w.slideReset()},300)),0===r||r===w.maxTranslate())return}else{if((new window.Date).getTime()-w.mousewheel.lastScrollTime>60)if(0>t)if(w.isEnd&&!w.params.loop||w.animating){if(w.params.mousewheelReleaseOnEdges)return!0}else w.slideNext();else if(w.isBeginning&&!w.params.loop||w.animating){if(w.params.mousewheelReleaseOnEdges)return!0}else w.slidePrev();w.mousewheel.lastScrollTime=(new window.Date).getTime()}return w.params.autoplay&&w.stopAutoplay(),e.preventDefault?e.preventDefault():e.returnValue=!1,!1}function c(e,t){e=a(e);var r,s,n;r=e.attr("data-swiper-parallax")||"0",s=e.attr("data-swiper-parallax-x"),n=e.attr("data-swiper-parallax-y"),s||n?(s=s||"0",n=n||"0"):i()?(s=r,n="0"):(n=r,s="0"),s=s.indexOf("%")>=0?parseInt(s,10)*t+"%":s*t+"px",n=n.indexOf("%")>=0?parseInt(n,10)*t+"%":n*t+"px",e.transform("translate3d("+s+", "+n+",0px)")}function m(e){return 0!==e.indexOf("on")&&(e=e[0]!==e[0].toUpperCase()?"on"+e[0].toUpperCase()+e.substring(1):"on"+e),e}if(!(this instanceof t))return new t(e,s);var f={direction:"horizontal",touchEventsTarget:"container",initialSlide:0,speed:300,autoplay:!1,autoplayDisableOnInteraction:!0,iOSEdgeSwipeDetection:!1,iOSEdgeSwipeThreshold:20,freeMode:!1,freeModeMomentum:!0,freeModeMomentumRatio:1,freeModeMomentumBounce:!0,freeModeMomentumBounceRatio:1,freeModeSticky:!1,freeModeMinimumVelocity:.02,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",coverflow:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0},cube:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94},fade:{crossFade:!1},parallax:!1,scrollbar:null,scrollbarHide:!0,scrollbarDraggable:!1,scrollbarSnapOnRelease:!1,keyboardControl:!1,mousewheelControl:!1,mousewheelReleaseOnEdges:!1,mousewheelInvert:!1,mousewheelForceToAxis:!1,mousewheelSensitivity:1,hashnav:!1,spaceBetween:0,slidesPerView:1,slidesPerColumn:1,slidesPerColumnFill:"column",slidesPerGroup:1,centeredSlides:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,onlyExternal:!1,threshold:0,touchMoveStopPropagation:!0,pagination:null,paginationElement:"span",paginationClickable:!1,paginationHide:!1,paginationBulletRender:null,resistance:!0,resistanceRatio:.85,nextButton:null,prevButton:null,watchSlidesProgress:!1,watchSlidesVisibility:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,lazyLoading:!1,lazyLoadingInPrevNext:!1,lazyLoadingOnTransitionStart:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,control:void 0,controlInverse:!1,controlBy:"slide",allowSwipeToPrev:!0,allowSwipeToNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",slideClass:"swiper-slide",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active",buttonDisabledClass:"swiper-button-disabled",paginationHiddenClass:"swiper-pagination-hidden",observer:!1,observeParents:!1,a11y:!1,prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}",runCallbacksOnInit:!0},h=s&&s.virtualTranslate;s=s||{};for(var g in f)if("undefined"==typeof s[g])s[g]=f[g];else if("object"==typeof s[g])for(var v in f[g])"undefined"==typeof s[g][v]&&(s[g][v]=f[g][v]);var w=this;if(w.params=s,w.classNames=[],"undefined"!=typeof a&&"undefined"!=typeof r&&(a=r),("undefined"!=typeof a||(a="undefined"==typeof r?window.Dom7||window.Zepto||window.jQuery:r))&&(w.$=a,w.container=a(e),0!==w.container.length)){if(w.container.length>1)return void w.container.each(function(){new t(this,s)});w.container[0].swiper=w,w.container.data("swiper",w),w.classNames.push("swiper-container-"+w.params.direction),w.params.freeMode&&w.classNames.push("swiper-container-free-mode"),w.support.flexbox||(w.classNames.push("swiper-container-no-flexbox"),w.params.slidesPerColumn=1),(w.params.parallax||w.params.watchSlidesVisibility)&&(w.params.watchSlidesProgress=!0),["cube","coverflow"].indexOf(w.params.effect)>=0&&(w.support.transforms3d?(w.params.watchSlidesProgress=!0,w.classNames.push("swiper-container-3d")):w.params.effect="slide"),"slide"!==w.params.effect&&w.classNames.push("swiper-container-"+w.params.effect),"cube"===w.params.effect&&(w.params.resistanceRatio=0,w.params.slidesPerView=1,w.params.slidesPerColumn=1,w.params.slidesPerGroup=1,w.params.centeredSlides=!1,w.params.spaceBetween=0,w.params.virtualTranslate=!0,w.params.setWrapperSize=!1),"fade"===w.params.effect&&(w.params.slidesPerView=1,w.params.slidesPerColumn=1,w.params.slidesPerGroup=1,w.params.watchSlidesProgress=!0,w.params.spaceBetween=0,"undefined"==typeof h&&(w.params.virtualTranslate=!0)),w.params.grabCursor&&w.support.touch&&(w.params.grabCursor=!1),w.wrapper=w.container.children("."+w.params.wrapperClass),w.params.pagination&&(w.paginationContainer=a(w.params.pagination),w.params.paginationClickable&&w.paginationContainer.addClass("swiper-pagination-clickable")),w.rtl=i()&&("rtl"===w.container[0].dir.toLowerCase()||"rtl"===w.container.css("direction")),w.rtl&&w.classNames.push("swiper-container-rtl"),w.rtl&&(w.wrongRTL="-webkit-box"===w.wrapper.css("display")),w.params.slidesPerColumn>1&&w.classNames.push("swiper-container-multirow"),w.device.android&&w.classNames.push("swiper-container-android"),w.container.addClass(w.classNames.join(" ")),w.translate=0,w.progress=0,w.velocity=0,w.lockSwipeToNext=function(){w.params.allowSwipeToNext=!1},w.lockSwipeToPrev=function(){w.params.allowSwipeToPrev=!1},w.lockSwipes=function(){w.params.allowSwipeToNext=w.params.allowSwipeToPrev=!1},w.unlockSwipeToNext=function(){w.params.allowSwipeToNext=!0},w.unlockSwipeToPrev=function(){w.params.allowSwipeToPrev=!0},w.unlockSwipes=function(){w.params.allowSwipeToNext=w.params.allowSwipeToPrev=!0},w.params.grabCursor&&(w.container[0].style.cursor="move",w.container[0].style.cursor="-webkit-grab",w.container[0].style.cursor="-moz-grab",w.container[0].style.cursor="grab"),w.imagesToLoad=[],w.imagesLoaded=0,w.loadImage=function(e,a,t,r,s){function i(){s&&s()}var n;e.complete&&r?i():a?(n=new window.Image,n.onload=i,n.onerror=i,t&&(n.srcset=t),a&&(n.src=a)):i()},w.preloadImages=function(){function e(){"undefined"!=typeof w&&null!==w&&(void 0!==w.imagesLoaded&&w.imagesLoaded++,w.imagesLoaded===w.imagesToLoad.length&&(w.params.updateOnImagesReady&&w.update(),w.emit("onImagesReady",w)))}w.imagesToLoad=w.container.find("img");for(var a=0;a<w.imagesToLoad.length;a++)w.loadImage(w.imagesToLoad[a],w.imagesToLoad[a].currentSrc||w.imagesToLoad[a].getAttribute("src"),w.imagesToLoad[a].srcset||w.imagesToLoad[a].getAttribute("srcset"),!0,e)},w.autoplayTimeoutId=void 0,w.autoplaying=!1,w.autoplayPaused=!1,w.startAutoplay=function(){return"undefined"!=typeof w.autoplayTimeoutId?!1:w.params.autoplay?w.autoplaying?!1:(w.autoplaying=!0,w.emit("onAutoplayStart",w),void o()):!1},w.stopAutoplay=function(e){w.autoplayTimeoutId&&(w.autoplayTimeoutId&&clearTimeout(w.autoplayTimeoutId),w.autoplaying=!1,w.autoplayTimeoutId=void 0,w.emit("onAutoplayStop",w))},w.pauseAutoplay=function(e){w.autoplayPaused||(w.autoplayTimeoutId&&clearTimeout(w.autoplayTimeoutId),w.autoplayPaused=!0,0===e?(w.autoplayPaused=!1,o()):w.wrapper.transitionEnd(function(){w&&(w.autoplayPaused=!1,w.autoplaying?o():w.stopAutoplay())}))},w.minTranslate=function(){return-w.snapGrid[0]},w.maxTranslate=function(){return-w.snapGrid[w.snapGrid.length-1]},w.updateContainerSize=function(){var e,a;e="undefined"!=typeof w.params.width?w.params.width:w.container[0].clientWidth,a="undefined"!=typeof w.params.height?w.params.height:w.container[0].clientHeight,0===e&&i()||0===a&&!i()||(e=e-parseInt(w.container.css("padding-left"),10)-parseInt(w.container.css("padding-right"),10),a=a-parseInt(w.container.css("padding-top"),10)-parseInt(w.container.css("padding-bottom"),10),w.width=e,w.height=a,w.size=i()?w.width:w.height)},w.updateSlidesSize=function(){w.slides=w.wrapper.children("."+w.params.slideClass),w.snapGrid=[],w.slidesGrid=[],w.slidesSizesGrid=[];var e,a=w.params.spaceBetween,t=-w.params.slidesOffsetBefore,r=0,s=0;"string"==typeof a&&a.indexOf("%")>=0&&(a=parseFloat(a.replace("%",""))/100*w.size),w.virtualSize=-a,w.rtl?w.slides.css({marginLeft:"",marginTop:""}):w.slides.css({marginRight:"",marginBottom:""});var o;w.params.slidesPerColumn>1&&(o=Math.floor(w.slides.length/w.params.slidesPerColumn)===w.slides.length/w.params.slidesPerColumn?w.slides.length:Math.ceil(w.slides.length/w.params.slidesPerColumn)*w.params.slidesPerColumn,"auto"!==w.params.slidesPerView&&"row"===w.params.slidesPerColumnFill&&(o=Math.max(o,w.params.slidesPerView*w.params.slidesPerColumn)));var l,d=w.params.slidesPerColumn,p=o/d,u=p-(w.params.slidesPerColumn*p-w.slides.length);for(e=0;e<w.slides.length;e++){l=0;var c=w.slides.eq(e);if(w.params.slidesPerColumn>1){var m,f,h;"column"===w.params.slidesPerColumnFill?(f=Math.floor(e/d),h=e-f*d,(f>u||f===u&&h===d-1)&&++h>=d&&(h=0,f++),m=f+h*o/d,c.css({"-webkit-box-ordinal-group":m,"-moz-box-ordinal-group":m,"-ms-flex-order":m,"-webkit-order":m,order:m})):(h=Math.floor(e/p),f=e-h*p),c.css({"margin-top":0!==h&&w.params.spaceBetween&&w.params.spaceBetween+"px"}).attr("data-swiper-column",f).attr("data-swiper-row",h)}"none"!==c.css("display")&&("auto"===w.params.slidesPerView?(l=i()?c.outerWidth(!0):c.outerHeight(!0),w.params.roundLengths&&(l=n(l))):(l=(w.size-(w.params.slidesPerView-1)*a)/w.params.slidesPerView,w.params.roundLengths&&(l=n(l)),i()?w.slides[e].style.width=l+"px":w.slides[e].style.height=l+"px"),w.slides[e].swiperSlideSize=l,w.slidesSizesGrid.push(l),w.params.centeredSlides?(t=t+l/2+r/2+a,0===e&&(t=t-w.size/2-a),Math.abs(t)<.001&&(t=0),s%w.params.slidesPerGroup===0&&w.snapGrid.push(t),w.slidesGrid.push(t)):(s%w.params.slidesPerGroup===0&&w.snapGrid.push(t),w.slidesGrid.push(t),t=t+l+a),w.virtualSize+=l+a,r=l,s++)}w.virtualSize=Math.max(w.virtualSize,w.size)+w.params.slidesOffsetAfter;var g;if(w.rtl&&w.wrongRTL&&("slide"===w.params.effect||"coverflow"===w.params.effect)&&w.wrapper.css({width:w.virtualSize+w.params.spaceBetween+"px"}),(!w.support.flexbox||w.params.setWrapperSize)&&(i()?w.wrapper.css({width:w.virtualSize+w.params.spaceBetween+"px"}):w.wrapper.css({height:w.virtualSize+w.params.spaceBetween+"px"})),w.params.slidesPerColumn>1&&(w.virtualSize=(l+w.params.spaceBetween)*o,w.virtualSize=Math.ceil(w.virtualSize/w.params.slidesPerColumn)-w.params.spaceBetween,w.wrapper.css({width:w.virtualSize+w.params.spaceBetween+"px"}),w.params.centeredSlides)){for(g=[],e=0;e<w.snapGrid.length;e++)w.snapGrid[e]<w.virtualSize+w.snapGrid[0]&&g.push(w.snapGrid[e]);w.snapGrid=g}if(!w.params.centeredSlides){for(g=[],e=0;e<w.snapGrid.length;e++)w.snapGrid[e]<=w.virtualSize-w.size&&g.push(w.snapGrid[e]);w.snapGrid=g,Math.floor(w.virtualSize-w.size)>Math.floor(w.snapGrid[w.snapGrid.length-1])&&w.snapGrid.push(w.virtualSize-w.size)}0===w.snapGrid.length&&(w.snapGrid=[0]),0!==w.params.spaceBetween&&(i()?w.rtl?w.slides.css({marginLeft:a+"px"}):w.slides.css({marginRight:a+"px"}):w.slides.css({marginBottom:a+"px"})),w.params.watchSlidesProgress&&w.updateSlidesOffset()},w.updateSlidesOffset=function(){for(var e=0;e<w.slides.length;e++)w.slides[e].swiperSlideOffset=i()?w.slides[e].offsetLeft:w.slides[e].offsetTop},w.updateSlidesProgress=function(e){if("undefined"==typeof e&&(e=w.translate||0),0!==w.slides.length){"undefined"==typeof w.slides[0].swiperSlideOffset&&w.updateSlidesOffset();var a=-e;w.rtl&&(a=e);w.container[0].getBoundingClientRect(),i()?"left":"top",i()?"right":"bottom";w.slides.removeClass(w.params.slideVisibleClass);for(var t=0;t<w.slides.length;t++){var r=w.slides[t],s=(a-r.swiperSlideOffset)/(r.swiperSlideSize+w.params.spaceBetween);if(w.params.watchSlidesVisibility){var n=-(a-r.swiperSlideOffset),o=n+w.slidesSizesGrid[t],l=n>=0&&n<w.size||o>0&&o<=w.size||0>=n&&o>=w.size;l&&w.slides.eq(t).addClass(w.params.slideVisibleClass)}r.progress=w.rtl?-s:s}}},w.updateProgress=function(e){"undefined"==typeof e&&(e=w.translate||0);var a=w.maxTranslate()-w.minTranslate();0===a?(w.progress=0,w.isBeginning=w.isEnd=!0):(w.progress=(e-w.minTranslate())/a,w.isBeginning=w.progress<=0,w.isEnd=w.progress>=1),w.isBeginning&&w.emit("onReachBeginning",w),w.isEnd&&w.emit("onReachEnd",w),w.params.watchSlidesProgress&&w.updateSlidesProgress(e),w.emit("onProgress",w,w.progress)},w.updateActiveIndex=function(){var e,a,t,r=w.rtl?w.translate:-w.translate;for(a=0;a<w.slidesGrid.length;a++)"undefined"!=typeof w.slidesGrid[a+1]?r>=w.slidesGrid[a]&&r<w.slidesGrid[a+1]-(w.slidesGrid[a+1]-w.slidesGrid[a])/2?e=a:r>=w.slidesGrid[a]&&r<w.slidesGrid[a+1]&&(e=a+1):r>=w.slidesGrid[a]&&(e=a);(0>e||"undefined"==typeof e)&&(e=0),t=Math.floor(e/w.params.slidesPerGroup),t>=w.snapGrid.length&&(t=w.snapGrid.length-1),e!==w.activeIndex&&(w.snapIndex=t,w.previousIndex=w.activeIndex,w.activeIndex=e,w.updateClasses())},w.updateClasses=function(){w.slides.removeClass(w.params.slideActiveClass+" "+w.params.slideNextClass+" "+w.params.slidePrevClass);var e=w.slides.eq(w.activeIndex);if(e.addClass(w.params.slideActiveClass),e.next("."+w.params.slideClass).addClass(w.params.slideNextClass),e.prev("."+w.params.slideClass).addClass(w.params.slidePrevClass),w.bullets&&w.bullets.length>0){w.bullets.removeClass(w.params.bulletActiveClass);var t;w.params.loop?(t=Math.ceil(w.activeIndex-w.loopedSlides)/w.params.slidesPerGroup,t>w.slides.length-1-2*w.loopedSlides&&(t-=w.slides.length-2*w.loopedSlides),t>w.bullets.length-1&&(t-=w.bullets.length)):t="undefined"!=typeof w.snapIndex?w.snapIndex:w.activeIndex||0,w.paginationContainer.length>1?w.bullets.each(function(){a(this).index()===t&&a(this).addClass(w.params.bulletActiveClass)}):w.bullets.eq(t).addClass(w.params.bulletActiveClass)}w.params.loop||(w.params.prevButton&&(w.isBeginning?(a(w.params.prevButton).addClass(w.params.buttonDisabledClass),w.params.a11y&&w.a11y&&w.a11y.disable(a(w.params.prevButton))):(a(w.params.prevButton).removeClass(w.params.buttonDisabledClass),w.params.a11y&&w.a11y&&w.a11y.enable(a(w.params.prevButton)))),w.params.nextButton&&(w.isEnd?(a(w.params.nextButton).addClass(w.params.buttonDisabledClass),w.params.a11y&&w.a11y&&w.a11y.disable(a(w.params.nextButton))):(a(w.params.nextButton).removeClass(w.params.buttonDisabledClass),w.params.a11y&&w.a11y&&w.a11y.enable(a(w.params.nextButton)))))},w.updatePagination=function(){if(w.params.pagination&&w.paginationContainer&&w.paginationContainer.length>0){for(var e="",a=w.params.loop?Math.ceil((w.slides.length-2*w.loopedSlides)/w.params.slidesPerGroup):w.snapGrid.length,t=0;a>t;t++)e+=w.params.paginationBulletRender?w.params.paginationBulletRender(t,w.params.bulletClass):"<"+w.params.paginationElement+' class="'+w.params.bulletClass+'"></'+w.params.paginationElement+">";w.paginationContainer.html(e),w.bullets=w.paginationContainer.find("."+w.params.bulletClass),w.params.paginationClickable&&w.params.a11y&&w.a11y&&w.a11y.initPagination()}},w.update=function(e){function a(){r=Math.min(Math.max(w.translate,w.maxTranslate()),w.minTranslate()),w.setWrapperTranslate(r),w.updateActiveIndex(),w.updateClasses()}if(w.updateContainerSize(),w.updateSlidesSize(),w.updateProgress(),w.updatePagination(),w.updateClasses(),w.params.scrollbar&&w.scrollbar&&w.scrollbar.set(),e){var t,r;w.controller&&w.controller.spline&&(w.controller.spline=void 0),w.params.freeMode?a():(t=("auto"===w.params.slidesPerView||w.params.slidesPerView>1)&&w.isEnd&&!w.params.centeredSlides?w.slideTo(w.slides.length-1,0,!1,!0):w.slideTo(w.activeIndex,0,!1,!0),t||a())}},w.onResize=function(e){var a=w.params.allowSwipeToPrev,t=w.params.allowSwipeToNext;if(w.params.allowSwipeToPrev=w.params.allowSwipeToNext=!0,w.updateContainerSize(),w.updateSlidesSize(),("auto"===w.params.slidesPerView||w.params.freeMode||e)&&w.updatePagination(),w.params.scrollbar&&w.scrollbar&&w.scrollbar.set(),w.controller&&w.controller.spline&&(w.controller.spline=void 0),w.params.freeMode){var r=Math.min(Math.max(w.translate,w.maxTranslate()),w.minTranslate());w.setWrapperTranslate(r),w.updateActiveIndex(),w.updateClasses()}else w.updateClasses(),("auto"===w.params.slidesPerView||w.params.slidesPerView>1)&&w.isEnd&&!w.params.centeredSlides?w.slideTo(w.slides.length-1,0,!1,!0):w.slideTo(w.activeIndex,0,!1,!0);w.params.allowSwipeToPrev=a,w.params.allowSwipeToNext=t};var y=["mousedown","mousemove","mouseup"];window.navigator.pointerEnabled?y=["pointerdown","pointermove","pointerup"]:window.navigator.msPointerEnabled&&(y=["MSPointerDown","MSPointerMove","MSPointerUp"]),w.touchEvents={start:w.support.touch||!w.params.simulateTouch?"touchstart":y[0],move:w.support.touch||!w.params.simulateTouch?"touchmove":y[1],end:w.support.touch||!w.params.simulateTouch?"touchend":y[2]},(window.navigator.pointerEnabled||window.navigator.msPointerEnabled)&&("container"===w.params.touchEventsTarget?w.container:w.wrapper).addClass("swiper-wp8-"+w.params.direction),w.initEvents=function(e){var t=e?"off":"on",r=e?"removeEventListener":"addEventListener",i="container"===w.params.touchEventsTarget?w.container[0]:w.wrapper[0],n=w.support.touch?i:document,o=w.params.nested?!0:!1;w.browser.ie?(i[r](w.touchEvents.start,w.onTouchStart,!1),n[r](w.touchEvents.move,w.onTouchMove,o),n[r](w.touchEvents.end,w.onTouchEnd,!1)):(w.support.touch&&(i[r](w.touchEvents.start,w.onTouchStart,!1),i[r](w.touchEvents.move,w.onTouchMove,o),i[r](w.touchEvents.end,w.onTouchEnd,!1)),!s.simulateTouch||w.device.ios||w.device.android||(i[r]("mousedown",w.onTouchStart,!1),document[r]("mousemove",w.onTouchMove,o),document[r]("mouseup",w.onTouchEnd,!1))),window[r]("resize",w.onResize),w.params.nextButton&&(a(w.params.nextButton)[t]("click",w.onClickNext),w.params.a11y&&w.a11y&&a(w.params.nextButton)[t]("keydown",w.a11y.onEnterKey)),w.params.prevButton&&(a(w.params.prevButton)[t]("click",w.onClickPrev),w.params.a11y&&w.a11y&&a(w.params.prevButton)[t]("keydown",w.a11y.onEnterKey)),w.params.pagination&&w.params.paginationClickable&&(a(w.paginationContainer)[t]("click","."+w.params.bulletClass,w.onClickIndex),w.params.a11y&&w.a11y&&a(w.paginationContainer)[t]("keydown","."+w.params.bulletClass,w.a11y.onEnterKey)),(w.params.preventClicks||w.params.preventClicksPropagation)&&i[r]("click",w.preventClicks,!0)},w.attachEvents=function(e){w.initEvents()},w.detachEvents=function(){w.initEvents(!0)},w.allowClick=!0,w.preventClicks=function(e){w.allowClick||(w.params.preventClicks&&e.preventDefault(),w.params.preventClicksPropagation&&w.animating&&(e.stopPropagation(),e.stopImmediatePropagation()))},w.onClickNext=function(e){e.preventDefault(),(!w.isEnd||w.params.loop)&&w.slideNext()},w.onClickPrev=function(e){e.preventDefault(),(!w.isBeginning||w.params.loop)&&w.slidePrev()},w.onClickIndex=function(e){e.preventDefault();var t=a(this).index()*w.params.slidesPerGroup;w.params.loop&&(t+=w.loopedSlides),w.slideTo(t)},w.updateClickedSlide=function(e){var t=l(e,"."+w.params.slideClass),r=!1;if(t)for(var s=0;s<w.slides.length;s++)w.slides[s]===t&&(r=!0);if(!t||!r)return w.clickedSlide=void 0,void(w.clickedIndex=void 0);if(w.clickedSlide=t,w.clickedIndex=a(t).index(),w.params.slideToClickedSlide&&void 0!==w.clickedIndex&&w.clickedIndex!==w.activeIndex){var i,n=w.clickedIndex;if(w.params.loop){if(w.animating)return;i=a(w.clickedSlide).attr("data-swiper-slide-index"),w.params.centeredSlides?n<w.loopedSlides-w.params.slidesPerView/2||n>w.slides.length-w.loopedSlides+w.params.slidesPerView/2?(w.fixLoop(),n=w.wrapper.children("."+w.params.slideClass+'[data-swiper-slide-index="'+i+'"]:not(.swiper-slide-duplicate)').eq(0).index(),setTimeout(function(){w.slideTo(n)},0)):w.slideTo(n):n>w.slides.length-w.params.slidesPerView?(w.fixLoop(),n=w.wrapper.children("."+w.params.slideClass+'[data-swiper-slide-index="'+i+'"]:not(.swiper-slide-duplicate)').eq(0).index(),setTimeout(function(){w.slideTo(n)},0)):w.slideTo(n)}else w.slideTo(n)}};var b,T,x,S,C,M,E,P,z,I="input, select, textarea, button",k=Date.now(),L=[];w.animating=!1,w.touches={startX:0,startY:0,currentX:0,currentY:0,diff:0};var D,B;if(w.onTouchStart=function(e){if(e.originalEvent&&(e=e.originalEvent),D="touchstart"===e.type,D||!("which"in e)||3!==e.which){if(w.params.noSwiping&&l(e,"."+w.params.noSwipingClass))return void(w.allowClick=!0);if(!w.params.swipeHandler||l(e,w.params.swipeHandler)){var t=w.touches.currentX="touchstart"===e.type?e.targetTouches[0].pageX:e.pageX,r=w.touches.currentY="touchstart"===e.type?e.targetTouches[0].pageY:e.pageY;if(!(w.device.ios&&w.params.iOSEdgeSwipeDetection&&t<=w.params.iOSEdgeSwipeThreshold)){if(b=!0,T=!1,S=void 0,B=void 0,w.touches.startX=t,w.touches.startY=r,x=Date.now(),w.allowClick=!0,w.updateContainerSize(),w.swipeDirection=void 0,w.params.threshold>0&&(E=!1),"touchstart"!==e.type){var s=!0;a(e.target).is(I)&&(s=!1),document.activeElement&&a(document.activeElement).is(I)&&document.activeElement.blur(),s&&e.preventDefault()}w.emit("onTouchStart",w,e)}}}},w.onTouchMove=function(e){if(e.originalEvent&&(e=e.originalEvent),!(D&&"mousemove"===e.type||e.preventedByNestedSwiper)){if(w.params.onlyExternal)return w.allowClick=!1,void(b&&(w.touches.startX=w.touches.currentX="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,w.touches.startY=w.touches.currentY="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,x=Date.now()));if(D&&document.activeElement&&e.target===document.activeElement&&a(e.target).is(I))return T=!0,void(w.allowClick=!1);if(w.emit("onTouchMove",w,e),!(e.targetTouches&&e.targetTouches.length>1)){if(w.touches.currentX="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,w.touches.currentY="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,"undefined"==typeof S){var t=180*Math.atan2(Math.abs(w.touches.currentY-w.touches.startY),Math.abs(w.touches.currentX-w.touches.startX))/Math.PI;S=i()?t>w.params.touchAngle:90-t>w.params.touchAngle}if(S&&w.emit("onTouchMoveOpposite",w,e),"undefined"==typeof B&&w.browser.ieTouch&&(w.touches.currentX!==w.touches.startX||w.touches.currentY!==w.touches.startY)&&(B=!0),b){if(S)return void(b=!1);if(B||!w.browser.ieTouch){w.allowClick=!1,w.emit("onSliderMove",w,e),e.preventDefault(),w.params.touchMoveStopPropagation&&!w.params.nested&&e.stopPropagation(),T||(s.loop&&w.fixLoop(),M=w.getWrapperTranslate(),w.setWrapperTransition(0),w.animating&&w.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"),w.params.autoplay&&w.autoplaying&&(w.params.autoplayDisableOnInteraction?w.stopAutoplay():w.pauseAutoplay()),z=!1,w.params.grabCursor&&(w.container[0].style.cursor="move",w.container[0].style.cursor="-webkit-grabbing",w.container[0].style.cursor="-moz-grabbin",w.container[0].style.cursor="grabbing")),T=!0;var r=w.touches.diff=i()?w.touches.currentX-w.touches.startX:w.touches.currentY-w.touches.startY;r*=w.params.touchRatio,w.rtl&&(r=-r),w.swipeDirection=r>0?"prev":"next",C=r+M;var n=!0;if(r>0&&C>w.minTranslate()?(n=!1,w.params.resistance&&(C=w.minTranslate()-1+Math.pow(-w.minTranslate()+M+r,w.params.resistanceRatio))):0>r&&C<w.maxTranslate()&&(n=!1,w.params.resistance&&(C=w.maxTranslate()+1-Math.pow(w.maxTranslate()-M-r,w.params.resistanceRatio))),n&&(e.preventedByNestedSwiper=!0),!w.params.allowSwipeToNext&&"next"===w.swipeDirection&&M>C&&(C=M),!w.params.allowSwipeToPrev&&"prev"===w.swipeDirection&&C>M&&(C=M),w.params.followFinger){if(w.params.threshold>0){if(!(Math.abs(r)>w.params.threshold||E))return void(C=M);if(!E)return E=!0,w.touches.startX=w.touches.currentX,w.touches.startY=w.touches.currentY,C=M,void(w.touches.diff=i()?w.touches.currentX-w.touches.startX:w.touches.currentY-w.touches.startY)}(w.params.freeMode||w.params.watchSlidesProgress)&&w.updateActiveIndex(),w.params.freeMode&&(0===L.length&&L.push({position:w.touches[i()?"startX":"startY"],time:x}),L.push({position:w.touches[i()?"currentX":"currentY"],time:(new window.Date).getTime()})),w.updateProgress(C),w.setWrapperTranslate(C)}}}}}},w.onTouchEnd=function(e){if(e.originalEvent&&(e=e.originalEvent),w.emit("onTouchEnd",w,e),b){w.params.grabCursor&&T&&b&&(w.container[0].style.cursor="move",w.container[0].style.cursor="-webkit-grab",w.container[0].style.cursor="-moz-grab",w.container[0].style.cursor="grab");var t=Date.now(),r=t-x;if(w.allowClick&&(w.updateClickedSlide(e),w.emit("onTap",w,e),300>r&&t-k>300&&(P&&clearTimeout(P),P=setTimeout(function(){w&&(w.params.paginationHide&&w.paginationContainer.length>0&&!a(e.target).hasClass(w.params.bulletClass)&&w.paginationContainer.toggleClass(w.params.paginationHiddenClass),w.emit("onClick",w,e))},300)),300>r&&300>t-k&&(P&&clearTimeout(P),w.emit("onDoubleTap",w,e))),k=Date.now(),setTimeout(function(){w&&(w.allowClick=!0)},0),!b||!T||!w.swipeDirection||0===w.touches.diff||C===M)return void(b=T=!1);b=T=!1;var s;if(s=w.params.followFinger?w.rtl?w.translate:-w.translate:-C,w.params.freeMode){if(s<-w.minTranslate())return void w.slideTo(w.activeIndex);if(s>-w.maxTranslate())return void(w.slides.length<w.snapGrid.length?w.slideTo(w.snapGrid.length-1):w.slideTo(w.slides.length-1));if(w.params.freeModeMomentum){if(L.length>1){var i=L.pop(),n=L.pop(),o=i.position-n.position,l=i.time-n.time;w.velocity=o/l,w.velocity=w.velocity/2,Math.abs(w.velocity)<w.params.freeModeMinimumVelocity&&(w.velocity=0),(l>150||(new window.Date).getTime()-i.time>300)&&(w.velocity=0)}else w.velocity=0;L.length=0;var d=1e3*w.params.freeModeMomentumRatio,p=w.velocity*d,u=w.translate+p;w.rtl&&(u=-u);var c,m=!1,f=20*Math.abs(w.velocity)*w.params.freeModeMomentumBounceRatio;if(u<w.maxTranslate())w.params.freeModeMomentumBounce?(u+w.maxTranslate()<-f&&(u=w.maxTranslate()-f),c=w.maxTranslate(),m=!0,z=!0):u=w.maxTranslate();else if(u>w.minTranslate())w.params.freeModeMomentumBounce?(u-w.minTranslate()>f&&(u=w.minTranslate()+f),c=w.minTranslate(),m=!0,z=!0):u=w.minTranslate();else if(w.params.freeModeSticky){var h,g=0;for(g=0;g<w.snapGrid.length;g+=1)if(w.snapGrid[g]>-u){h=g;break}u=Math.abs(w.snapGrid[h]-u)<Math.abs(w.snapGrid[h-1]-u)||"next"===w.swipeDirection?w.snapGrid[h]:w.snapGrid[h-1],w.rtl||(u=-u)}if(0!==w.velocity)d=w.rtl?Math.abs((-u-w.translate)/w.velocity):Math.abs((u-w.translate)/w.velocity);else if(w.params.freeModeSticky)return void w.slideReset();w.params.freeModeMomentumBounce&&m?(w.updateProgress(c),w.setWrapperTransition(d),w.setWrapperTranslate(u),w.onTransitionStart(),w.animating=!0,w.wrapper.transitionEnd(function(){w&&z&&(w.emit("onMomentumBounce",w),w.setWrapperTransition(w.params.speed),w.setWrapperTranslate(c),w.wrapper.transitionEnd(function(){w&&w.onTransitionEnd()}))})):w.velocity?(w.updateProgress(u),w.setWrapperTransition(d),w.setWrapperTranslate(u),w.onTransitionStart(),w.animating||(w.animating=!0,w.wrapper.transitionEnd(function(){w&&w.onTransitionEnd()}))):w.updateProgress(u),w.updateActiveIndex()}return void((!w.params.freeModeMomentum||r>=w.params.longSwipesMs)&&(w.updateProgress(),w.updateActiveIndex()))}var v,y=0,S=w.slidesSizesGrid[0];for(v=0;v<w.slidesGrid.length;v+=w.params.slidesPerGroup)"undefined"!=typeof w.slidesGrid[v+w.params.slidesPerGroup]?s>=w.slidesGrid[v]&&s<w.slidesGrid[v+w.params.slidesPerGroup]&&(y=v,S=w.slidesGrid[v+w.params.slidesPerGroup]-w.slidesGrid[v]):s>=w.slidesGrid[v]&&(y=v,S=w.slidesGrid[w.slidesGrid.length-1]-w.slidesGrid[w.slidesGrid.length-2]);var E=(s-w.slidesGrid[y])/S;if(r>w.params.longSwipesMs){if(!w.params.longSwipes)return void w.slideTo(w.activeIndex);"next"===w.swipeDirection&&(E>=w.params.longSwipesRatio?w.slideTo(y+w.params.slidesPerGroup):w.slideTo(y)),"prev"===w.swipeDirection&&(E>1-w.params.longSwipesRatio?w.slideTo(y+w.params.slidesPerGroup):w.slideTo(y))}else{if(!w.params.shortSwipes)return void w.slideTo(w.activeIndex);"next"===w.swipeDirection&&w.slideTo(y+w.params.slidesPerGroup),"prev"===w.swipeDirection&&w.slideTo(y)}}},w._slideTo=function(e,a){return w.slideTo(e,a,!0,!0)},w.slideTo=function(e,a,t,r){"undefined"==typeof t&&(t=!0),"undefined"==typeof e&&(e=0),0>e&&(e=0),w.snapIndex=Math.floor(e/w.params.slidesPerGroup),w.snapIndex>=w.snapGrid.length&&(w.snapIndex=w.snapGrid.length-1);var s=-w.snapGrid[w.snapIndex];w.params.autoplay&&w.autoplaying&&(r||!w.params.autoplayDisableOnInteraction?w.pauseAutoplay(a):w.stopAutoplay()),w.updateProgress(s);for(var n=0;n<w.slidesGrid.length;n++)-Math.floor(100*s)>=Math.floor(100*w.slidesGrid[n])&&(e=n);if(!w.params.allowSwipeToNext&&s<w.translate&&s<w.minTranslate())return!1;
        if(!w.params.allowSwipeToPrev&&s>w.translate&&s>w.maxTranslate()&&(w.activeIndex||0)!==e)return!1;if("undefined"==typeof a&&(a=w.params.speed),w.previousIndex=w.activeIndex||0,w.activeIndex=e,s===w.translate)return w.updateClasses(),!1;w.updateClasses(),w.onTransitionStart(t);i()?s:0,i()?0:s;return 0===a?(w.setWrapperTransition(0),w.setWrapperTranslate(s),w.onTransitionEnd(t)):(w.setWrapperTransition(a),w.setWrapperTranslate(s),w.animating||(w.animating=!0,w.wrapper.transitionEnd(function(){w&&w.onTransitionEnd(t)}))),!0},w.onTransitionStart=function(e){"undefined"==typeof e&&(e=!0),w.lazy&&w.lazy.onTransitionStart(),e&&(w.emit("onTransitionStart",w),w.activeIndex!==w.previousIndex&&w.emit("onSlideChangeStart",w))},w.onTransitionEnd=function(e){w.animating=!1,w.setWrapperTransition(0),"undefined"==typeof e&&(e=!0),w.lazy&&w.lazy.onTransitionEnd(),e&&(w.emit("onTransitionEnd",w),w.activeIndex!==w.previousIndex&&w.emit("onSlideChangeEnd",w)),w.params.hashnav&&w.hashnav&&w.hashnav.setHash()},w.slideNext=function(e,a,t){if(w.params.loop){if(w.animating)return!1;w.fixLoop();w.container[0].clientLeft;return w.slideTo(w.activeIndex+w.params.slidesPerGroup,a,e,t)}return w.slideTo(w.activeIndex+w.params.slidesPerGroup,a,e,t)},w._slideNext=function(e){return w.slideNext(!0,e,!0)},w.slidePrev=function(e,a,t){if(w.params.loop){if(w.animating)return!1;w.fixLoop();w.container[0].clientLeft;return w.slideTo(w.activeIndex-1,a,e,t)}return w.slideTo(w.activeIndex-1,a,e,t)},w._slidePrev=function(e){return w.slidePrev(!0,e,!0)},w.slideReset=function(e,a,t){return w.slideTo(w.activeIndex,a,e)},w.setWrapperTransition=function(e,a){w.wrapper.transition(e),"slide"!==w.params.effect&&w.effects[w.params.effect]&&w.effects[w.params.effect].setTransition(e),w.params.parallax&&w.parallax&&w.parallax.setTransition(e),w.params.scrollbar&&w.scrollbar&&w.scrollbar.setTransition(e),w.params.control&&w.controller&&w.controller.setTransition(e,a),w.emit("onSetTransition",w,e)},w.setWrapperTranslate=function(e,a,t){var r=0,s=0,o=0;i()?r=w.rtl?-e:e:s=e,w.params.roundLengths&&(r=n(r),s=n(s)),w.params.virtualTranslate||(w.support.transforms3d?w.wrapper.transform("translate3d("+r+"px, "+s+"px, "+o+"px)"):w.wrapper.transform("translate("+r+"px, "+s+"px)")),w.translate=i()?r:s,a&&w.updateActiveIndex(),"slide"!==w.params.effect&&w.effects[w.params.effect]&&w.effects[w.params.effect].setTranslate(w.translate),w.params.parallax&&w.parallax&&w.parallax.setTranslate(w.translate),w.params.scrollbar&&w.scrollbar&&w.scrollbar.setTranslate(w.translate),w.params.control&&w.controller&&w.controller.setTranslate(w.translate,t),w.emit("onSetTranslate",w,w.translate)},w.getTranslate=function(e,a){var t,r,s,i;return"undefined"==typeof a&&(a="x"),w.params.virtualTranslate?w.rtl?-w.translate:w.translate:(s=window.getComputedStyle(e,null),window.WebKitCSSMatrix?(r=s.transform||s.webkitTransform,r.split(",").length>6&&(r=r.split(", ").map(function(e){return e.replace(",",".")}).join(", ")),i=new window.WebKitCSSMatrix("none"===r?"":r)):(i=s.MozTransform||s.OTransform||s.MsTransform||s.msTransform||s.transform||s.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),t=i.toString().split(",")),"x"===a&&(r=window.WebKitCSSMatrix?i.m41:16===t.length?parseFloat(t[12]):parseFloat(t[4])),"y"===a&&(r=window.WebKitCSSMatrix?i.m42:16===t.length?parseFloat(t[13]):parseFloat(t[5])),w.rtl&&r&&(r=-r),r||0)},w.getWrapperTranslate=function(e){return"undefined"==typeof e&&(e=i()?"x":"y"),w.getTranslate(w.wrapper[0],e)},w.observers=[],w.initObservers=function(){if(w.params.observeParents)for(var e=w.container.parents(),a=0;a<e.length;a++)d(e[a]);d(w.container[0],{childList:!1}),d(w.wrapper[0],{attributes:!1})},w.disconnectObservers=function(){for(var e=0;e<w.observers.length;e++)w.observers[e].disconnect();w.observers=[]},w.createLoop=function(){w.wrapper.children("."+w.params.slideClass+"."+w.params.slideDuplicateClass).remove();var e=w.wrapper.children("."+w.params.slideClass);"auto"!==w.params.slidesPerView||w.params.loopedSlides||(w.params.loopedSlides=e.length),w.loopedSlides=parseInt(w.params.loopedSlides||w.params.slidesPerView,10),w.loopedSlides=w.loopedSlides+w.params.loopAdditionalSlides,w.loopedSlides>e.length&&(w.loopedSlides=e.length);var t,r=[],s=[];for(e.each(function(t,i){var n=a(this);t<w.loopedSlides&&s.push(i),t<e.length&&t>=e.length-w.loopedSlides&&r.push(i),n.attr("data-swiper-slide-index",t)}),t=0;t<s.length;t++)w.wrapper.append(a(s[t].cloneNode(!0)).addClass(w.params.slideDuplicateClass));for(t=r.length-1;t>=0;t--)w.wrapper.prepend(a(r[t].cloneNode(!0)).addClass(w.params.slideDuplicateClass))},w.destroyLoop=function(){w.wrapper.children("."+w.params.slideClass+"."+w.params.slideDuplicateClass).remove(),w.slides.removeAttr("data-swiper-slide-index")},w.fixLoop=function(){var e;w.activeIndex<w.loopedSlides?(e=w.slides.length-3*w.loopedSlides+w.activeIndex,e+=w.loopedSlides,w.slideTo(e,0,!1,!0)):("auto"===w.params.slidesPerView&&w.activeIndex>=2*w.loopedSlides||w.activeIndex>w.slides.length-2*w.params.slidesPerView)&&(e=-w.slides.length+w.activeIndex+w.loopedSlides,e+=w.loopedSlides,w.slideTo(e,0,!1,!0))},w.appendSlide=function(e){if(w.params.loop&&w.destroyLoop(),"object"==typeof e&&e.length)for(var a=0;a<e.length;a++)e[a]&&w.wrapper.append(e[a]);else w.wrapper.append(e);w.params.loop&&w.createLoop(),w.params.observer&&w.support.observer||w.update(!0)},w.prependSlide=function(e){w.params.loop&&w.destroyLoop();var a=w.activeIndex+1;if("object"==typeof e&&e.length){for(var t=0;t<e.length;t++)e[t]&&w.wrapper.prepend(e[t]);a=w.activeIndex+e.length}else w.wrapper.prepend(e);w.params.loop&&w.createLoop(),w.params.observer&&w.support.observer||w.update(!0),w.slideTo(a,0,!1)},w.removeSlide=function(e){w.params.loop&&(w.destroyLoop(),w.slides=w.wrapper.children("."+w.params.slideClass));var a,t=w.activeIndex;if("object"==typeof e&&e.length){for(var r=0;r<e.length;r++)a=e[r],w.slides[a]&&w.slides.eq(a).remove(),t>a&&t--;t=Math.max(t,0)}else a=e,w.slides[a]&&w.slides.eq(a).remove(),t>a&&t--,t=Math.max(t,0);w.params.loop&&w.createLoop(),w.params.observer&&w.support.observer||w.update(!0),w.params.loop?w.slideTo(t+w.loopedSlides,0,!1):w.slideTo(t,0,!1)},w.removeAllSlides=function(){for(var e=[],a=0;a<w.slides.length;a++)e.push(a);w.removeSlide(e)},w.effects={fade:{setTranslate:function(){for(var e=0;e<w.slides.length;e++){var a=w.slides.eq(e),t=a[0].swiperSlideOffset,r=-t;w.params.virtualTranslate||(r-=w.translate);var s=0;i()||(s=r,r=0);var n=w.params.fade.crossFade?Math.max(1-Math.abs(a[0].progress),0):1+Math.min(Math.max(a[0].progress,-1),0);a.css({opacity:n}).transform("translate3d("+r+"px, "+s+"px, 0px)")}},setTransition:function(e){if(w.slides.transition(e),w.params.virtualTranslate&&0!==e){var a=!1;w.slides.transitionEnd(function(){if(!a&&w){a=!0,w.animating=!1;for(var e=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],t=0;t<e.length;t++)w.wrapper.trigger(e[t])}})}}},cube:{setTranslate:function(){var e,t=0;w.params.cube.shadow&&(i()?(e=w.wrapper.find(".swiper-cube-shadow"),0===e.length&&(e=a('<div class="swiper-cube-shadow"></div>'),w.wrapper.append(e)),e.css({height:w.width+"px"})):(e=w.container.find(".swiper-cube-shadow"),0===e.length&&(e=a('<div class="swiper-cube-shadow"></div>'),w.container.append(e))));for(var r=0;r<w.slides.length;r++){var s=w.slides.eq(r),n=90*r,o=Math.floor(n/360);w.rtl&&(n=-n,o=Math.floor(-n/360));var l=Math.max(Math.min(s[0].progress,1),-1),d=0,p=0,u=0;r%4===0?(d=4*-o*w.size,u=0):(r-1)%4===0?(d=0,u=4*-o*w.size):(r-2)%4===0?(d=w.size+4*o*w.size,u=w.size):(r-3)%4===0&&(d=-w.size,u=3*w.size+4*w.size*o),w.rtl&&(d=-d),i()||(p=d,d=0);var c="rotateX("+(i()?0:-n)+"deg) rotateY("+(i()?n:0)+"deg) translate3d("+d+"px, "+p+"px, "+u+"px)";if(1>=l&&l>-1&&(t=90*r+90*l,w.rtl&&(t=90*-r-90*l)),s.transform(c),w.params.cube.slideShadows){var m=i()?s.find(".swiper-slide-shadow-left"):s.find(".swiper-slide-shadow-top"),f=i()?s.find(".swiper-slide-shadow-right"):s.find(".swiper-slide-shadow-bottom");0===m.length&&(m=a('<div class="swiper-slide-shadow-'+(i()?"left":"top")+'"></div>'),s.append(m)),0===f.length&&(f=a('<div class="swiper-slide-shadow-'+(i()?"right":"bottom")+'"></div>'),s.append(f));s[0].progress;m.length&&(m[0].style.opacity=-s[0].progress),f.length&&(f[0].style.opacity=s[0].progress)}}if(w.wrapper.css({"-webkit-transform-origin":"50% 50% -"+w.size/2+"px","-moz-transform-origin":"50% 50% -"+w.size/2+"px","-ms-transform-origin":"50% 50% -"+w.size/2+"px","transform-origin":"50% 50% -"+w.size/2+"px"}),w.params.cube.shadow)if(i())e.transform("translate3d(0px, "+(w.width/2+w.params.cube.shadowOffset)+"px, "+-w.width/2+"px) rotateX(90deg) rotateZ(0deg) scale("+w.params.cube.shadowScale+")");else{var h=Math.abs(t)-90*Math.floor(Math.abs(t)/90),g=1.5-(Math.sin(2*h*Math.PI/360)/2+Math.cos(2*h*Math.PI/360)/2),v=w.params.cube.shadowScale,y=w.params.cube.shadowScale/g,b=w.params.cube.shadowOffset;e.transform("scale3d("+v+", 1, "+y+") translate3d(0px, "+(w.height/2+b)+"px, "+-w.height/2/y+"px) rotateX(-90deg)")}var T=w.isSafari||w.isUiWebView?-w.size/2:0;w.wrapper.transform("translate3d(0px,0,"+T+"px) rotateX("+(i()?0:t)+"deg) rotateY("+(i()?-t:0)+"deg)")},setTransition:function(e){w.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),w.params.cube.shadow&&!i()&&w.container.find(".swiper-cube-shadow").transition(e)}},coverflow:{setTranslate:function(){for(var e=w.translate,t=i()?-e+w.width/2:-e+w.height/2,r=i()?w.params.coverflow.rotate:-w.params.coverflow.rotate,s=w.params.coverflow.depth,n=0,o=w.slides.length;o>n;n++){var l=w.slides.eq(n),d=w.slidesSizesGrid[n],p=l[0].swiperSlideOffset,u=(t-p-d/2)/d*w.params.coverflow.modifier,c=i()?r*u:0,m=i()?0:r*u,f=-s*Math.abs(u),h=i()?0:w.params.coverflow.stretch*u,g=i()?w.params.coverflow.stretch*u:0;Math.abs(g)<.001&&(g=0),Math.abs(h)<.001&&(h=0),Math.abs(f)<.001&&(f=0),Math.abs(c)<.001&&(c=0),Math.abs(m)<.001&&(m=0);var v="translate3d("+g+"px,"+h+"px,"+f+"px)  rotateX("+m+"deg) rotateY("+c+"deg)";if(l.transform(v),l[0].style.zIndex=-Math.abs(Math.round(u))+1,w.params.coverflow.slideShadows){var y=i()?l.find(".swiper-slide-shadow-left"):l.find(".swiper-slide-shadow-top"),b=i()?l.find(".swiper-slide-shadow-right"):l.find(".swiper-slide-shadow-bottom");0===y.length&&(y=a('<div class="swiper-slide-shadow-'+(i()?"left":"top")+'"></div>'),l.append(y)),0===b.length&&(b=a('<div class="swiper-slide-shadow-'+(i()?"right":"bottom")+'"></div>'),l.append(b)),y.length&&(y[0].style.opacity=u>0?u:0),b.length&&(b[0].style.opacity=-u>0?-u:0)}}if(w.browser.ie){var T=w.wrapper[0].style;T.perspectiveOrigin=t+"px 50%"}},setTransition:function(e){w.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)}}},w.lazy={initialImageLoaded:!1,loadImageInSlide:function(e,t){if("undefined"!=typeof e&&("undefined"==typeof t&&(t=!0),0!==w.slides.length)){var r=w.slides.eq(e),s=r.find(".swiper-lazy:not(.swiper-lazy-loaded):not(.swiper-lazy-loading)");!r.hasClass("swiper-lazy")||r.hasClass("swiper-lazy-loaded")||r.hasClass("swiper-lazy-loading")||(s=s.add(r[0])),0!==s.length&&s.each(function(){var e=a(this);e.addClass("swiper-lazy-loading");var s=e.attr("data-background"),i=e.attr("data-src"),n=e.attr("data-srcset");w.loadImage(e[0],i||s,n,!1,function(){if(s?(e.css("background-image","url("+s+")"),e.removeAttr("data-background")):(n&&(e.attr("srcset",n),e.removeAttr("data-srcset")),i&&(e.attr("src",i),e.removeAttr("data-src"))),e.addClass("swiper-lazy-loaded").removeClass("swiper-lazy-loading"),r.find(".swiper-lazy-preloader, .preloader").remove(),w.params.loop&&t){var a=r.attr("data-swiper-slide-index");if(r.hasClass(w.params.slideDuplicateClass)){var o=w.wrapper.children('[data-swiper-slide-index="'+a+'"]:not(.'+w.params.slideDuplicateClass+")");w.lazy.loadImageInSlide(o.index(),!1)}else{var l=w.wrapper.children("."+w.params.slideDuplicateClass+'[data-swiper-slide-index="'+a+'"]');w.lazy.loadImageInSlide(l.index(),!1)}}w.emit("onLazyImageReady",w,r[0],e[0])}),w.emit("onLazyImageLoad",w,r[0],e[0])})}},load:function(){var e;if(w.params.watchSlidesVisibility)w.wrapper.children("."+w.params.slideVisibleClass).each(function(){w.lazy.loadImageInSlide(a(this).index())});else if(w.params.slidesPerView>1)for(e=w.activeIndex;e<w.activeIndex+w.params.slidesPerView;e++)w.slides[e]&&w.lazy.loadImageInSlide(e);else w.lazy.loadImageInSlide(w.activeIndex);if(w.params.lazyLoadingInPrevNext)if(w.params.slidesPerView>1){for(e=w.activeIndex+w.params.slidesPerView;e<w.activeIndex+w.params.slidesPerView+w.params.slidesPerView;e++)w.slides[e]&&w.lazy.loadImageInSlide(e);for(e=w.activeIndex-w.params.slidesPerView;e<w.activeIndex;e++)w.slides[e]&&w.lazy.loadImageInSlide(e)}else{var t=w.wrapper.children("."+w.params.slideNextClass);t.length>0&&w.lazy.loadImageInSlide(t.index());var r=w.wrapper.children("."+w.params.slidePrevClass);r.length>0&&w.lazy.loadImageInSlide(r.index())}},onTransitionStart:function(){w.params.lazyLoading&&(w.params.lazyLoadingOnTransitionStart||!w.params.lazyLoadingOnTransitionStart&&!w.lazy.initialImageLoaded)&&w.lazy.load()},onTransitionEnd:function(){w.params.lazyLoading&&!w.params.lazyLoadingOnTransitionStart&&w.lazy.load()}},w.scrollbar={isTouched:!1,setDragPosition:function(e){var a=w.scrollbar,t=i()?"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].pageX:e.pageX||e.clientX:"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].pageY:e.pageY||e.clientY,r=t-a.track.offset()[i()?"left":"top"]-a.dragSize/2,s=-w.minTranslate()*a.moveDivider,n=-w.maxTranslate()*a.moveDivider;s>r?r=s:r>n&&(r=n),r=-r/a.moveDivider,w.updateProgress(r),w.setWrapperTranslate(r,!0)},dragStart:function(e){var a=w.scrollbar;a.isTouched=!0,e.preventDefault(),e.stopPropagation(),a.setDragPosition(e),clearTimeout(a.dragTimeout),a.track.transition(0),w.params.scrollbarHide&&a.track.css("opacity",1),w.wrapper.transition(100),a.drag.transition(100),w.emit("onScrollbarDragStart",w)},dragMove:function(e){var a=w.scrollbar;a.isTouched&&(e.preventDefault?e.preventDefault():e.returnValue=!1,a.setDragPosition(e),w.wrapper.transition(0),a.track.transition(0),a.drag.transition(0),w.emit("onScrollbarDragMove",w))},dragEnd:function(e){var a=w.scrollbar;a.isTouched&&(a.isTouched=!1,w.params.scrollbarHide&&(clearTimeout(a.dragTimeout),a.dragTimeout=setTimeout(function(){a.track.css("opacity",0),a.track.transition(400)},1e3)),w.emit("onScrollbarDragEnd",w),w.params.scrollbarSnapOnRelease&&w.slideReset())},enableDraggable:function(){var e=w.scrollbar,t=w.support.touch?e.track:document;a(e.track).on(w.touchEvents.start,e.dragStart),a(t).on(w.touchEvents.move,e.dragMove),a(t).on(w.touchEvents.end,e.dragEnd)},disableDraggable:function(){var e=w.scrollbar,t=w.support.touch?e.track:document;a(e.track).off(w.touchEvents.start,e.dragStart),a(t).off(w.touchEvents.move,e.dragMove),a(t).off(w.touchEvents.end,e.dragEnd)},set:function(){if(w.params.scrollbar){var e=w.scrollbar;e.track=a(w.params.scrollbar),e.drag=e.track.find(".swiper-scrollbar-drag"),0===e.drag.length&&(e.drag=a('<div class="swiper-scrollbar-drag"></div>'),e.track.append(e.drag)),e.drag[0].style.width="",e.drag[0].style.height="",e.trackSize=i()?e.track[0].offsetWidth:e.track[0].offsetHeight,e.divider=w.size/w.virtualSize,e.moveDivider=e.divider*(e.trackSize/w.size),e.dragSize=e.trackSize*e.divider,i()?e.drag[0].style.width=e.dragSize+"px":e.drag[0].style.height=e.dragSize+"px",e.divider>=1?e.track[0].style.display="none":e.track[0].style.display="",w.params.scrollbarHide&&(e.track[0].style.opacity=0)}},setTranslate:function(){if(w.params.scrollbar){var e,a=w.scrollbar,t=(w.translate||0,a.dragSize);e=(a.trackSize-a.dragSize)*w.progress,w.rtl&&i()?(e=-e,e>0?(t=a.dragSize-e,e=0):-e+a.dragSize>a.trackSize&&(t=a.trackSize+e)):0>e?(t=a.dragSize+e,e=0):e+a.dragSize>a.trackSize&&(t=a.trackSize-e),i()?(w.support.transforms3d?a.drag.transform("translate3d("+e+"px, 0, 0)"):a.drag.transform("translateX("+e+"px)"),a.drag[0].style.width=t+"px"):(w.support.transforms3d?a.drag.transform("translate3d(0px, "+e+"px, 0)"):a.drag.transform("translateY("+e+"px)"),a.drag[0].style.height=t+"px"),w.params.scrollbarHide&&(clearTimeout(a.timeout),a.track[0].style.opacity=1,a.timeout=setTimeout(function(){a.track[0].style.opacity=0,a.track.transition(400)},1e3))}},setTransition:function(e){w.params.scrollbar&&w.scrollbar.drag.transition(e)}},w.controller={LinearSpline:function(e,a){this.x=e,this.y=a,this.lastIndex=e.length-1;var t,r;this.x.length;this.interpolate=function(e){return e?(r=s(this.x,e),t=r-1,(e-this.x[t])*(this.y[r]-this.y[t])/(this.x[r]-this.x[t])+this.y[t]):0};var s=function(){var e,a,t;return function(r,s){for(a=-1,e=r.length;e-a>1;)r[t=e+a>>1]<=s?a=t:e=t;return e}}()},getInterpolateFunction:function(e){w.controller.spline||(w.controller.spline=w.params.loop?new w.controller.LinearSpline(w.slidesGrid,e.slidesGrid):new w.controller.LinearSpline(w.snapGrid,e.snapGrid))},setTranslate:function(e,a){function r(a){e=a.rtl&&"horizontal"===a.params.direction?-w.translate:w.translate,"slide"===w.params.controlBy&&(w.controller.getInterpolateFunction(a),i=-w.controller.spline.interpolate(-e)),i&&"container"!==w.params.controlBy||(s=(a.maxTranslate()-a.minTranslate())/(w.maxTranslate()-w.minTranslate()),i=(e-w.minTranslate())*s+a.minTranslate()),w.params.controlInverse&&(i=a.maxTranslate()-i),a.updateProgress(i),a.setWrapperTranslate(i,!1,w),a.updateActiveIndex()}var s,i,n=w.params.control;if(w.isArray(n))for(var o=0;o<n.length;o++)n[o]!==a&&n[o]instanceof t&&r(n[o]);else n instanceof t&&a!==n&&r(n)},setTransition:function(e,a){function r(a){a.setWrapperTransition(e,w),0!==e&&(a.onTransitionStart(),a.wrapper.transitionEnd(function(){i&&(a.params.loop&&"slide"===w.params.controlBy&&a.fixLoop(),a.onTransitionEnd())}))}var s,i=w.params.control;if(w.isArray(i))for(s=0;s<i.length;s++)i[s]!==a&&i[s]instanceof t&&r(i[s]);else i instanceof t&&a!==i&&r(i)}},w.hashnav={init:function(){if(w.params.hashnav){w.hashnav.initialized=!0;var e=document.location.hash.replace("#","");if(e)for(var a=0,t=0,r=w.slides.length;r>t;t++){var s=w.slides.eq(t),i=s.attr("data-hash");if(i===e&&!s.hasClass(w.params.slideDuplicateClass)){var n=s.index();w.slideTo(n,a,w.params.runCallbacksOnInit,!0)}}}},setHash:function(){w.hashnav.initialized&&w.params.hashnav&&(document.location.hash=w.slides.eq(w.activeIndex).attr("data-hash")||"")}},w.disableKeyboardControl=function(){a(document).off("keydown",p)},w.enableKeyboardControl=function(){a(document).on("keydown",p)},w.mousewheel={event:!1,lastScrollTime:(new window.Date).getTime()},w.params.mousewheelControl){try{new window.WheelEvent("wheel"),w.mousewheel.event="wheel"}catch(G){}w.mousewheel.event||void 0===document.onmousewheel||(w.mousewheel.event="mousewheel"),w.mousewheel.event||(w.mousewheel.event="DOMMouseScroll")}w.disableMousewheelControl=function(){return w.mousewheel.event?(w.container.off(w.mousewheel.event,u),!0):!1},w.enableMousewheelControl=function(){return w.mousewheel.event?(w.container.on(w.mousewheel.event,u),!0):!1},w.parallax={setTranslate:function(){w.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){c(this,w.progress)}),w.slides.each(function(){var e=a(this);e.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){var a=Math.min(Math.max(e[0].progress,-1),1);c(this,a)})})},setTransition:function(e){"undefined"==typeof e&&(e=w.params.speed),w.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){var t=a(this),r=parseInt(t.attr("data-swiper-parallax-duration"),10)||e;0===e&&(r=0),t.transition(r)})}},w._plugins=[];for(var O in w.plugins){var A=w.plugins[O](w,w.params[O]);A&&w._plugins.push(A)}return w.callPlugins=function(e){for(var a=0;a<w._plugins.length;a++)e in w._plugins[a]&&w._plugins[a][e](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])},w.emitterEventListeners={},w.emit=function(e){w.params[e]&&w.params[e](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);var a;if(w.emitterEventListeners[e])for(a=0;a<w.emitterEventListeners[e].length;a++)w.emitterEventListeners[e][a](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);w.callPlugins&&w.callPlugins(e,arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])},w.on=function(e,a){return e=m(e),w.emitterEventListeners[e]||(w.emitterEventListeners[e]=[]),w.emitterEventListeners[e].push(a),w},w.off=function(e,a){var t;if(e=m(e),"undefined"==typeof a)return w.emitterEventListeners[e]=[],w;if(w.emitterEventListeners[e]&&0!==w.emitterEventListeners[e].length){for(t=0;t<w.emitterEventListeners[e].length;t++)w.emitterEventListeners[e][t]===a&&w.emitterEventListeners[e].splice(t,1);return w}},w.once=function(e,a){e=m(e);var t=function(){a(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]),w.off(e,t)};return w.on(e,t),w},w.a11y={makeFocusable:function(e){return e.attr("tabIndex","0"),e},addRole:function(e,a){return e.attr("role",a),e},addLabel:function(e,a){return e.attr("aria-label",a),e},disable:function(e){return e.attr("aria-disabled",!0),e},enable:function(e){return e.attr("aria-disabled",!1),e},onEnterKey:function(e){13===e.keyCode&&(a(e.target).is(w.params.nextButton)?(w.onClickNext(e),w.isEnd?w.a11y.notify(w.params.lastSlideMessage):w.a11y.notify(w.params.nextSlideMessage)):a(e.target).is(w.params.prevButton)&&(w.onClickPrev(e),w.isBeginning?w.a11y.notify(w.params.firstSlideMessage):w.a11y.notify(w.params.prevSlideMessage)),a(e.target).is("."+w.params.bulletClass)&&a(e.target)[0].click())},liveRegion:a('<span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>'),notify:function(e){var a=w.a11y.liveRegion;0!==a.length&&(a.html(""),a.html(e))},init:function(){if(w.params.nextButton){var e=a(w.params.nextButton);w.a11y.makeFocusable(e),w.a11y.addRole(e,"button"),w.a11y.addLabel(e,w.params.nextSlideMessage)}if(w.params.prevButton){var t=a(w.params.prevButton);w.a11y.makeFocusable(t),w.a11y.addRole(t,"button"),w.a11y.addLabel(t,w.params.prevSlideMessage)}a(w.container).append(w.a11y.liveRegion)},initPagination:function(){w.params.pagination&&w.params.paginationClickable&&w.bullets&&w.bullets.length&&w.bullets.each(function(){var e=a(this);w.a11y.makeFocusable(e),w.a11y.addRole(e,"button"),w.a11y.addLabel(e,w.params.paginationBulletMessage.replace(/{{index}}/,e.index()+1))})},destroy:function(){w.a11y.liveRegion&&w.a11y.liveRegion.length>0&&w.a11y.liveRegion.remove()}},w.init=function(){w.params.loop&&w.createLoop(),w.updateContainerSize(),w.updateSlidesSize(),w.updatePagination(),w.params.scrollbar&&w.scrollbar&&(w.scrollbar.set(),w.params.scrollbarDraggable&&w.scrollbar.enableDraggable()),"slide"!==w.params.effect&&w.effects[w.params.effect]&&(w.params.loop||w.updateProgress(),w.effects[w.params.effect].setTranslate()),w.params.loop?w.slideTo(w.params.initialSlide+w.loopedSlides,0,w.params.runCallbacksOnInit):(w.slideTo(w.params.initialSlide,0,w.params.runCallbacksOnInit),0===w.params.initialSlide&&(w.parallax&&w.params.parallax&&w.parallax.setTranslate(),w.lazy&&w.params.lazyLoading&&(w.lazy.load(),w.lazy.initialImageLoaded=!0))),w.attachEvents(),w.params.observer&&w.support.observer&&w.initObservers(),w.params.preloadImages&&!w.params.lazyLoading&&w.preloadImages(),w.params.autoplay&&w.startAutoplay(),w.params.keyboardControl&&w.enableKeyboardControl&&w.enableKeyboardControl(),w.params.mousewheelControl&&w.enableMousewheelControl&&w.enableMousewheelControl(),w.params.hashnav&&w.hashnav&&w.hashnav.init(),w.params.a11y&&w.a11y&&w.a11y.init(),w.emit("onInit",w)},w.cleanupStyles=function(){w.container.removeClass(w.classNames.join(" ")).removeAttr("style"),w.wrapper.removeAttr("style"),w.slides&&w.slides.length&&w.slides.removeClass([w.params.slideVisibleClass,w.params.slideActiveClass,w.params.slideNextClass,w.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"),w.paginationContainer&&w.paginationContainer.length&&w.paginationContainer.removeClass(w.params.paginationHiddenClass),w.bullets&&w.bullets.length&&w.bullets.removeClass(w.params.bulletActiveClass),w.params.prevButton&&a(w.params.prevButton).removeClass(w.params.buttonDisabledClass),w.params.nextButton&&a(w.params.nextButton).removeClass(w.params.buttonDisabledClass),w.params.scrollbar&&w.scrollbar&&(w.scrollbar.track&&w.scrollbar.track.length&&w.scrollbar.track.removeAttr("style"),w.scrollbar.drag&&w.scrollbar.drag.length&&w.scrollbar.drag.removeAttr("style"))},w.destroy=function(e,a){w.detachEvents(),w.stopAutoplay(),w.params.scrollbar&&w.scrollbar&&w.params.scrollbarDraggable&&w.scrollbar.disableDraggable(),w.params.loop&&w.destroyLoop(),a&&w.cleanupStyles(),w.disconnectObservers(),w.params.keyboardControl&&w.disableKeyboardControl&&w.disableKeyboardControl(),w.params.mousewheelControl&&w.disableMousewheelControl&&w.disableMousewheelControl(),w.params.a11y&&w.a11y&&w.a11y.destroy(),w.emit("onDestroy"),e!==!1&&(w=null)},w.init(),w}};t.prototype={isSafari:function(){var e=navigator.userAgent.toLowerCase();return e.indexOf("safari")>=0&&e.indexOf("chrome")<0&&e.indexOf("android")<0}(),isUiWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),isArray:function(e){return"[object Array]"===Object.prototype.toString.apply(e)},browser:{ie:window.navigator.pointerEnabled||window.navigator.msPointerEnabled,ieTouch:window.navigator.msPointerEnabled&&window.navigator.msMaxTouchPoints>1||window.navigator.pointerEnabled&&window.navigator.maxTouchPoints>1},device:function(){var e=navigator.userAgent,a=e.match(/(Android);?[\s\/]+([\d.]+)?/),t=e.match(/(iPad).*OS\s([\d_]+)/),r=e.match(/(iPod)(.*OS\s([\d_]+))?/),s=!t&&e.match(/(iPhone\sOS)\s([\d_]+)/);return{ios:t||s||r,android:a}}(),support:{touch:window.Modernizr&&Modernizr.touch===!0||function(){return!!("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)}(),transforms3d:window.Modernizr&&Modernizr.csstransforms3d===!0||function(){var e=document.createElement("div").style;return"webkitPerspective"in e||"MozPerspective"in e||"OPerspective"in e||"MsPerspective"in e||"perspective"in e}(),flexbox:function(){for(var e=document.createElement("div").style,a="alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "),t=0;t<a.length;t++)if(a[t]in e)return!0}(),observer:function(){return"MutationObserver"in window||"WebkitMutationObserver"in window}()},plugins:{}};for(var r=(function(){var e=function(e){var a=this,t=0;for(t=0;t<e.length;t++)a[t]=e[t];return a.length=e.length,this},a=function(a,t){var r=[],s=0;if(a&&!t&&a instanceof e)return a;if(a)if("string"==typeof a){var i,n,o=a.trim();if(o.indexOf("<")>=0&&o.indexOf(">")>=0){var l="div";for(0===o.indexOf("<li")&&(l="ul"),0===o.indexOf("<tr")&&(l="tbody"),(0===o.indexOf("<td")||0===o.indexOf("<th"))&&(l="tr"),0===o.indexOf("<tbody")&&(l="table"),0===o.indexOf("<option")&&(l="select"),n=document.createElement(l),n.innerHTML=a,s=0;s<n.childNodes.length;s++)r.push(n.childNodes[s])}else for(i=t||"#"!==a[0]||a.match(/[ .<>:~]/)?(t||document).querySelectorAll(a):[document.getElementById(a.split("#")[1])],s=0;s<i.length;s++)i[s]&&r.push(i[s])}else if(a.nodeType||a===window||a===document)r.push(a);else if(a.length>0&&a[0].nodeType)for(s=0;s<a.length;s++)r.push(a[s]);return new e(r)};return e.prototype={addClass:function(e){if("undefined"==typeof e)return this;for(var a=e.split(" "),t=0;t<a.length;t++)for(var r=0;r<this.length;r++)this[r].classList.add(a[t]);return this},removeClass:function(e){for(var a=e.split(" "),t=0;t<a.length;t++)for(var r=0;r<this.length;r++)this[r].classList.remove(a[t]);return this},hasClass:function(e){return this[0]?this[0].classList.contains(e):!1},toggleClass:function(e){for(var a=e.split(" "),t=0;t<a.length;t++)for(var r=0;r<this.length;r++)this[r].classList.toggle(a[t]);return this},attr:function(e,a){if(1===arguments.length&&"string"==typeof e)return this[0]?this[0].getAttribute(e):void 0;for(var t=0;t<this.length;t++)if(2===arguments.length)this[t].setAttribute(e,a);else for(var r in e)this[t][r]=e[r],this[t].setAttribute(r,e[r]);return this},removeAttr:function(e){for(var a=0;a<this.length;a++)this[a].removeAttribute(e);return this},data:function(e,a){if("undefined"==typeof a){if(this[0]){var t=this[0].getAttribute("data-"+e);return t?t:this[0].dom7ElementDataStorage&&e in this[0].dom7ElementDataStorage?this[0].dom7ElementDataStorage[e]:void 0}return void 0}for(var r=0;r<this.length;r++){var s=this[r];s.dom7ElementDataStorage||(s.dom7ElementDataStorage={}),s.dom7ElementDataStorage[e]=a}return this},transform:function(e){for(var a=0;a<this.length;a++){var t=this[a].style;t.webkitTransform=t.MsTransform=t.msTransform=t.MozTransform=t.OTransform=t.transform=e}return this},transition:function(e){"string"!=typeof e&&(e+="ms");for(var a=0;a<this.length;a++){var t=this[a].style;t.webkitTransitionDuration=t.MsTransitionDuration=t.msTransitionDuration=t.MozTransitionDuration=t.OTransitionDuration=t.transitionDuration=e}return this},on:function(e,t,r,s){function i(e){var s=e.target;if(a(s).is(t))r.call(s,e);else for(var i=a(s).parents(),n=0;n<i.length;n++)a(i[n]).is(t)&&r.call(i[n],e)}var n,o,l=e.split(" ");for(n=0;n<this.length;n++)if("function"==typeof t||t===!1)for("function"==typeof t&&(r=arguments[1],s=arguments[2]||!1),o=0;o<l.length;o++)this[n].addEventListener(l[o],r,s);else for(o=0;o<l.length;o++)this[n].dom7LiveListeners||(this[n].dom7LiveListeners=[]),this[n].dom7LiveListeners.push({listener:r,liveListener:i}),this[n].addEventListener(l[o],i,s);return this},off:function(e,a,t,r){for(var s=e.split(" "),i=0;i<s.length;i++)for(var n=0;n<this.length;n++)if("function"==typeof a||a===!1)"function"==typeof a&&(t=arguments[1],r=arguments[2]||!1),this[n].removeEventListener(s[i],t,r);else if(this[n].dom7LiveListeners)for(var o=0;o<this[n].dom7LiveListeners.length;o++)this[n].dom7LiveListeners[o].listener===t&&this[n].removeEventListener(s[i],this[n].dom7LiveListeners[o].liveListener,r);return this},once:function(e,a,t,r){function s(n){t(n),i.off(e,a,s,r)}var i=this;"function"==typeof a&&(a=!1,t=arguments[1],r=arguments[2]),i.on(e,a,s,r)},trigger:function(e,a){for(var t=0;t<this.length;t++){var r;try{r=new window.CustomEvent(e,{detail:a,bubbles:!0,cancelable:!0})}catch(s){r=document.createEvent("Event"),r.initEvent(e,!0,!0),r.detail=a}this[t].dispatchEvent(r)}return this},transitionEnd:function(e){function a(i){if(i.target===this)for(e.call(this,i),t=0;t<r.length;t++)s.off(r[t],a)}var t,r=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],s=this;if(e)for(t=0;t<r.length;t++)s.on(r[t],a);return this},width:function(){return this[0]===window?window.innerWidth:this.length>0?parseFloat(this.css("width")):null},outerWidth:function(e){return this.length>0?e?this[0].offsetWidth+parseFloat(this.css("margin-right"))+parseFloat(this.css("margin-left")):this[0].offsetWidth:null},height:function(){return this[0]===window?window.innerHeight:this.length>0?parseFloat(this.css("height")):null},outerHeight:function(e){return this.length>0?e?this[0].offsetHeight+parseFloat(this.css("margin-top"))+parseFloat(this.css("margin-bottom")):this[0].offsetHeight:null},offset:function(){if(this.length>0){var e=this[0],a=e.getBoundingClientRect(),t=document.body,r=e.clientTop||t.clientTop||0,s=e.clientLeft||t.clientLeft||0,i=window.pageYOffset||e.scrollTop,n=window.pageXOffset||e.scrollLeft;return{top:a.top+i-r,left:a.left+n-s}}return null},css:function(e,a){var t;if(1===arguments.length){if("string"!=typeof e){for(t=0;t<this.length;t++)for(var r in e)this[t].style[r]=e[r];
    return this}if(this[0])return window.getComputedStyle(this[0],null).getPropertyValue(e)}if(2===arguments.length&&"string"==typeof e){for(t=0;t<this.length;t++)this[t].style[e]=a;return this}return this},each:function(e){for(var a=0;a<this.length;a++)e.call(this[a],a,this[a]);return this},html:function(e){if("undefined"==typeof e)return this[0]?this[0].innerHTML:void 0;for(var a=0;a<this.length;a++)this[a].innerHTML=e;return this},is:function(t){if(!this[0])return!1;var r,s;if("string"==typeof t){var i=this[0];if(i===document)return t===document;if(i===window)return t===window;if(i.matches)return i.matches(t);if(i.webkitMatchesSelector)return i.webkitMatchesSelector(t);if(i.mozMatchesSelector)return i.mozMatchesSelector(t);if(i.msMatchesSelector)return i.msMatchesSelector(t);for(r=a(t),s=0;s<r.length;s++)if(r[s]===this[0])return!0;return!1}if(t===document)return this[0]===document;if(t===window)return this[0]===window;if(t.nodeType||t instanceof e){for(r=t.nodeType?[t]:t,s=0;s<r.length;s++)if(r[s]===this[0])return!0;return!1}return!1},index:function(){if(this[0]){for(var e=this[0],a=0;null!==(e=e.previousSibling);)1===e.nodeType&&a++;return a}return void 0},eq:function(a){if("undefined"==typeof a)return this;var t,r=this.length;return a>r-1?new e([]):0>a?(t=r+a,new e(0>t?[]:[this[t]])):new e([this[a]])},append:function(a){var t,r;for(t=0;t<this.length;t++)if("string"==typeof a){var s=document.createElement("div");for(s.innerHTML=a;s.firstChild;)this[t].appendChild(s.firstChild)}else if(a instanceof e)for(r=0;r<a.length;r++)this[t].appendChild(a[r]);else this[t].appendChild(a);return this},prepend:function(a){var t,r;for(t=0;t<this.length;t++)if("string"==typeof a){var s=document.createElement("div");for(s.innerHTML=a,r=s.childNodes.length-1;r>=0;r--)this[t].insertBefore(s.childNodes[r],this[t].childNodes[0])}else if(a instanceof e)for(r=0;r<a.length;r++)this[t].insertBefore(a[r],this[t].childNodes[0]);else this[t].insertBefore(a,this[t].childNodes[0]);return this},insertBefore:function(e){for(var t=a(e),r=0;r<this.length;r++)if(1===t.length)t[0].parentNode.insertBefore(this[r],t[0]);else if(t.length>1)for(var s=0;s<t.length;s++)t[s].parentNode.insertBefore(this[r].cloneNode(!0),t[s])},insertAfter:function(e){for(var t=a(e),r=0;r<this.length;r++)if(1===t.length)t[0].parentNode.insertBefore(this[r],t[0].nextSibling);else if(t.length>1)for(var s=0;s<t.length;s++)t[s].parentNode.insertBefore(this[r].cloneNode(!0),t[s].nextSibling)},next:function(t){return new e(this.length>0?t?this[0].nextElementSibling&&a(this[0].nextElementSibling).is(t)?[this[0].nextElementSibling]:[]:this[0].nextElementSibling?[this[0].nextElementSibling]:[]:[])},nextAll:function(t){var r=[],s=this[0];if(!s)return new e([]);for(;s.nextElementSibling;){var i=s.nextElementSibling;t?a(i).is(t)&&r.push(i):r.push(i),s=i}return new e(r)},prev:function(t){return new e(this.length>0?t?this[0].previousElementSibling&&a(this[0].previousElementSibling).is(t)?[this[0].previousElementSibling]:[]:this[0].previousElementSibling?[this[0].previousElementSibling]:[]:[])},prevAll:function(t){var r=[],s=this[0];if(!s)return new e([]);for(;s.previousElementSibling;){var i=s.previousElementSibling;t?a(i).is(t)&&r.push(i):r.push(i),s=i}return new e(r)},parent:function(e){for(var t=[],r=0;r<this.length;r++)e?a(this[r].parentNode).is(e)&&t.push(this[r].parentNode):t.push(this[r].parentNode);return a(a.unique(t))},parents:function(e){for(var t=[],r=0;r<this.length;r++)for(var s=this[r].parentNode;s;)e?a(s).is(e)&&t.push(s):t.push(s),s=s.parentNode;return a(a.unique(t))},find:function(a){for(var t=[],r=0;r<this.length;r++)for(var s=this[r].querySelectorAll(a),i=0;i<s.length;i++)t.push(s[i]);return new e(t)},children:function(t){for(var r=[],s=0;s<this.length;s++)for(var i=this[s].childNodes,n=0;n<i.length;n++)t?1===i[n].nodeType&&a(i[n]).is(t)&&r.push(i[n]):1===i[n].nodeType&&r.push(i[n]);return new e(a.unique(r))},remove:function(){for(var e=0;e<this.length;e++)this[e].parentNode&&this[e].parentNode.removeChild(this[e]);return this},add:function(){var e,t,r=this;for(e=0;e<arguments.length;e++){var s=a(arguments[e]);for(t=0;t<s.length;t++)r[r.length]=s[t],r.length++}return r}},a.fn=e.prototype,a.unique=function(e){for(var a=[],t=0;t<e.length;t++)-1===a.indexOf(e[t])&&a.push(e[t]);return a},a}()),s=["jQuery","Zepto","Dom7"],i=0;i<s.length;i++)window[s[i]]&&e(window[s[i]]);var n;n="undefined"==typeof r?window.Dom7||window.Zepto||window.jQuery:r,n&&("transitionEnd"in n.fn||(n.fn.transitionEnd=function(e){function a(i){if(i.target===this)for(e.call(this,i),t=0;t<r.length;t++)s.off(r[t],a)}var t,r=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],s=this;if(e)for(t=0;t<r.length;t++)s.on(r[t],a);return this}),"transform"in n.fn||(n.fn.transform=function(e){for(var a=0;a<this.length;a++){var t=this[a].style;t.webkitTransform=t.MsTransform=t.msTransform=t.MozTransform=t.OTransform=t.transform=e}return this}),"transition"in n.fn||(n.fn.transition=function(e){"string"!=typeof e&&(e+="ms");for(var a=0;a<this.length;a++){var t=this[a].style;t.webkitTransitionDuration=t.MsTransitionDuration=t.msTransitionDuration=t.MozTransitionDuration=t.OTransitionDuration=t.transitionDuration=e}return this})),window.Swiper=t}(),"undefined"!=typeof module?module.exports=window.Swiper:"function"==typeof define&&define.amd&&define([],function(){"use strict";return window.Swiper});
//# sourceMappingURL=maps/swiper.min.js.map

}());
(function () {
'use strict';
/*global window */

var win = window,
	doc = win.document,
	docElem = doc.documentElement,
	info,
	isNormal = false;

info = {

	isNormal: isNormal,

	link: {
		ios: {
			normal: '',
			pro: ''
		},
		android: {
			normal: 'https://play.google.com/store/apps/details?id=com.elitapp.coolbook',
			pro: 'https://play.google.com/store/apps/details?id=com.elitapp.coolbookpro'
		}
	},

	ls: win.localStorage,
	savedItem: 'cool-book-stories',
	attr: {},
	systemAttr: {},
	defaultLanguage: 'ru',
	availableLanguages: ['ru'],
	//availableLanguages: ['ru', 'en'],

	init: function () {

		var info = this;

		// get data from LS
		info.attr = JSON.parse(info.ls.getItem(info.savedItem) || '{}');

		// set language
		info.setLanguage();
		// is phone
		info.set('isPhone', Math.max(docElem.clientHeight, docElem.clientWidth) <= 736, true); // 736 msx of iPhone6plus
		// is touch
		info.set('isTouch', 'ontouchstart' in doc, true);
		info.setOS();
		info.detectCssJsPrefix();
		info.detectTransitionEndEventName();
		info.detectAnimationEndEventName();

		//set settings
		info.setSettings();

	},

	setLanguage: function () {

		var info = this,
			lang;

		lang = info.get('language') || navigator.language || navigator.userLanguage || this.defaultLanguage;
		lang = lang.split('-')[0].toLowerCase();
		lang = (info.availableLanguages.indexOf(lang) === -1) ? info.defaultLanguage : lang;
		lang = lang.toLowerCase();
		info.set('language', lang);

	},

	setOS: function () {

		var info = this,
			ua = win.navigator.userAgent,
			isIE = /MSIE/.test(ua),
			isAndroid = (/android/i).test(ua),
			isIOS = /iPad|iPhone|iPod/.test(ua);

		info.set('isIE', isIE, true);
		info.set('isAndroid', isAndroid, true);
		info.set('isIOS', isIOS, true);

		if (isIE) {
			info.set('os', 'wp', true);
		}

		if (isAndroid) {
			info.set('os', 'android', true);
		}

		if (isIOS) {
			info.set('os', 'ios', true);
		}

		// set os if os is not defined
		if (!info.get('os', true)) {
			info.set('os', 'ios', true);
			info.set('isIOS', true, true);
		}

	},

	detectCssJsPrefix: function () {

		var data = {
				js: '',
				css: ''
			},
			tempStyle = doc.createElement('div').style,
			vendors = ['t', 'webkitT', 'MozT', 'msT', 'OT'];

		// find vendors by css transform property
		vendors.forEach(function (vendor) {

			var transform = vendor + 'ransform';

			if (!tempStyle.hasOwnProperty(transform)) {
				return;
			}

			vendor = vendor.replace(/t$/i, ''); // remove 't' from vendor

			data.js = vendor;

			vendor = vendor.toLowerCase();
			if (vendor) {
				data.css = '-' + vendor + '-';
			}

		});

		this.set('cssJsPrefix', data, true);

	},

	detectTransitionEndEventName: function () {

		var i,
			el = doc.createElement('div'),
			transitions = {
				'transition': 'transitionend',
				'OTransition': 'otransitionend',  // oTransitionEnd in very old Opera
				'MozTransition': 'transitionend',
				'WebkitTransition': 'webkitTransitionEnd'
			},
			transitionEnd = 'transitionend';

		for (i in transitions) {
			if (transitions.hasOwnProperty(i) && el.style[i] !== undefined) {
				transitionEnd = transitions[i];
			}
		}

		this.set('transitionEnd', transitionEnd, true);

	},

	detectAnimationEndEventName: function () {
		var i,
			el = doc.createElement('div'),
			animations = {
				'animation': 'animationend',
				'OAnimation': 'oAnimationEnd',  // oAnimationEnd in very old Opera
				'MozAnimation': 'animationend',
				'WebkitAnimation': 'webkitAnimationEnd'
			},
			animationEnd = 'animationend';

		for (i in animations) {
			if (animations.hasOwnProperty(i) && el.style[i] !== undefined) {
				animationEnd = animations[i];
			}
		}

		this.set('animationEnd', animationEnd, true);

	},

	set: function (key, value, isSystem) {

		if (isSystem) {
			this.systemAttr[key] = value;
		} else {
			this.attr[key] = value;
			this.ls.setItem(this.savedItem, JSON.stringify(this.attr));
		}

		return key;

	},

	get: function (key, isSystem) {
		return isSystem ? this.systemAttr[key] : this.attr[key];
	},

	remove: function (key, isSystem) {
		if (isSystem) {
			this.systemAttr[key] = null;
			delete this.systemAttr[key];
		} else {
			this.attr[key] = null;
			delete this.attr[key];
			this.ls.setItem(this.savedItem, JSON.stringify(this.attr));
		}

		return key;

	},

	setSettings: function () {

		var info = this,
			defaultSettings = {
				installTime: Date.now(),
				versionCode: 1,
				//screenAnimation: info.get('isAndroid', true) ? 'off' : 'on',
				screenAnimation: 'off',
				storyByStory: info.isNormal ? 'off' : 'on',
				hint: {}
				//autoSave: 'on', // auto save game after every turn
				//confirmTurn: 'off', // game turn
				//confirmMove: 'off', // move unit
				//confirmAttack: 'off', // attack unit
				//music: 'on',
				//vibrate: 'off',
				//help: 'on',
				//fightAnimation: 'off',
				//buildingSmoke: 'off',
				//unitAnimation: 'off',
				//difficult: 'easy', // easy, normal, hard
				//gameSpeed: '3' // 1..5, use string type
			},
			key,
			value;

		for (key in defaultSettings) {
			if (defaultSettings.hasOwnProperty(key)) {
				value = info.get(key) || defaultSettings[key];
				info.set(key, value);
			}
		}

	},

	hintIsDone: function (hintName) {

		var info = this,
			hint = info.get('hint')[hintName];

		return Boolean(hint && hint.state === 'done');

	},

	getLinkToStore: function (type) { // pro or normal
		return this.link[this.get('os', true)][type || 'normal'];
		//return this.link[this.get('os', true)][type || (this.isNormal ? 'normal' : 'pro')];
	}

};

info.init();

gi5366['/www/js/services/info.js'] = info;


}());
(function () {
'use strict';
/*global window */

var Backbone = gi5366['/www/js/lib/backbone.js'] || window.Backbone;

var win = window,
	doc = win.document,
	docElem = doc.documentElement,
	device,
	Device = Backbone.Model.extend({

		defaults: {
			width: 0,
			height: 0,
			orientation: ''
		},

		initialize: function () {

			var device = this;

			device.bindEventListeners();

			device.onResize();

		},

		bindEventListeners: function () {

			var device = this;

			win.addEventListener('resize', function () {
				device.onResize();
			}, false);

		},

		onResize: function () {

			var device = this,
				width = docElem.clientWidth,
				height = docElem.clientHeight,
				orientation = width > height ? '-' : '|';

			device.set({
				width: width,
				height: height,
				orientation: orientation
			});

			device.trigger('resize');

		}

	});

device = new Device();

gi5366['/www/js/services/device.js'] = device;
}());
(function () {
'use strict';
/*global window */

var info = gi5366['/www/js/services/info.js'] || window.info;

var win = window,
	androidAds = {
		attr: {},
		period: 3e3 * 60,
		set: function (key, value) {
			this.attr[key] = value;
			return this;
		},
		get: function (key) {
			return this.attr[key];
		},
		showAd: function () {
			return win.Android && info.isNormal && win.Android.displayInterstitial();
		},
		init: function () {

			if ( !info.isNormal ) {
				return;
			}

			var androidAds = this,
				intervalId = win.setInterval(androidAds.showAd, androidAds.period);

			androidAds.set('intervalId', intervalId);

		}

	};

	androidAds.init();

gi5366['/www/js/services/android-ads.js'] = androidAds;

}());
(function () {
'use strict';
/*global window */

var en = {
	language: 'Language',
	languageName: 'English',
	shortLanguageName: 'Eng',
	appName: 'CB',

	notification: {
		storyByStoryOn: 'Mode "story by story" is enabled',
		storyByStoryOff: 'Mode "story by story" is disabled'
	},

	// rate us block
	rateUs: {
		header: 'If you like out app, please rate it. Thanks!',
		rateNow: 'Rate Now',
		remindMeLater: 'Remind Me Later',
		noThanks: 'No, Thanks'
	}

};

gi5366['/www/js/i18n/en.js'] = en;
}());
(function () {
'use strict';
/*global window */

var ru = {
	language: 'Язык',
	languageName: 'Русский',
	shortLanguageName: 'Рус',
	appName: 'CB',

	notification: {
		storyByStoryOn: 'Режим "сказка за сказкой" - включён',
		storyByStoryOff: 'Режим "сказка за сказкой" - отключён'
	},

	hint: {
		autoplay: 'Включить\/выклюить режим|"сказка за сказкой".|(Доступно только в платной версии приложения)',
		removeAds: 'Отключить рекламу.|Купить приложение.',
		thanksForBuy: 'Поздровляем!|Вы являетесь обладателем полной версии приложения!',
		showTitle: 'Если название не помещается полностью, то кликните по нему.',
		showText: 'Что бы увидеть текст сказки - дважды кликните по картинке.',
		stopAndStartPlay: 'Остановить\/начать воспроизведение.'
	},

	// rate us block
	rateUs: {
		header: 'Если Вам понравилось наше приложение, пожалуйста, оцените его. Спасибо!',
		rateNow: 'Оценить',
		remindMeLater: 'Напомнить позже',
		noThanks: 'Нет, спасибо'
	}

};

gi5366['/www/js/i18n/ru.js'] = ru;
}());
(function () {
'use strict';
/*global window */

var info = gi5366['/www/js/services/info.js'] || window.info;
var en = gi5366['/www/js/i18n/en.js'] || window.en;
var ru = gi5366['/www/js/i18n/ru.js'] || window.ru;

var lang = {

	attr: {},

	languages: {
		en: en,
		ru: ru
	},
	set: function (lang) {
		this.attr = this.languages[lang];
	},

	get: function (key) {
		return key ? this.attr[key] : this.attr;
	}

};

lang.set(info.get('language'));

gi5366['/www/js/services/lang.js'] = lang;



}());
(function () {
'use strict';
/*global console */

var logger = {
	isEnable: false,
	log: function () {
		return this.isEnable && console.log.apply(console, arguments);
	}
};

function log() {
	return logger.log.apply(logger, arguments);
}

gi5366['/www/js/services/log.js'] = log;


}());
(function () {
(function(){function n(a,b,e){return("string"===typeof b?b:b.toString()).replace(a.define||h,function(b,c,d,g){0===c.indexOf("def.")&&(c=c.substring(4));c in e||(":"===d?(a.defineParams&&g.replace(a.defineParams,function(b,a,d){e[c]={arg:a,text:d}}),c in e||(e[c]=g)):(new Function("def","def['"+c+"']="+g))(e));return""}).replace(a.use||h,function(b,c){a.useParams&&(c=c.replace(a.useParams,function(b,a,c,d){if(e[c]&&e[c].arg&&d)return b=(c+":"+d).replace(/'|\\/g,"_"),e.__exp=e.__exp||{},e.__exp[b]=
	e[c].text.replace(new RegExp("(^|[^\\w$])"+e[c].arg+"([^\\w$])","g"),"$1"+d+"$2"),a+"def.__exp['"+b+"']"}));var d=(new Function("def","return "+c))(e);return d?n(a,d,e):d})}function k(a){return a.replace(/\\('|\\)/g,"$1").replace(/[\r\t\n]/g," ")}var f={version:"1.0.3",templateSettings:{evaluate:/\{\{([\s\S]+?(\}?)+)\}\}/g,interpolate:/\{\{=([\s\S]+?)\}\}/g,encode:/\{\{!([\s\S]+?)\}\}/g,use:/\{\{#([\s\S]+?)\}\}/g,useParams:/(^|[^\w$])def(?:\.|\[[\'\"])([\w$\.]+)(?:[\'\"]\])?\s*\:\s*([\w$\.]+|\"[^\"]+\"|\'[^\']+\'|\{[^\}]+\})/g,
	define:/\{\{##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#\}\}/g,defineParams:/^\s*([\w$]+):([\s\S]+)/,conditional:/\{\{\?(\?)?\s*([\s\S]*?)\s*\}\}/g,iterate:/\{\{~\s*(?:\}\}|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*\}\})/g,varname:"it",strip:!0,append:!0,selfcontained:!1,doNotSkipEncoded:!1},template:void 0,compile:void 0},l;f.encodeHTMLSource=function(a){var b={"&":"&#38;","<":"&#60;",">":"&#62;",'"':"&#34;","'":"&#39;","/":"&#47;"},e=a?/[&<>"'\/]/g:/&(?!#?\w+;)|<|>|"|'|\//g;return function(a){return a?
	a.toString().replace(e,function(a){return b[a]||a}):""}};l=function(){return this||(0,eval)("this")}();"undefined"!==typeof module&&module.exports?module.exports=f:"function"===typeof define&&define.amd?define(function(){return f}):l.doT=f;var p={start:"'+(",end:")+'",startencode:"'+encodeHTML("},q={start:"';out+=(",end:");out+='",startencode:"';out+=encodeHTML("},h=/$^/;f.template=function(a,b,e){b=b||f.templateSettings;var m=b.append?p:q,c,d=0,g;a=b.use||b.define?n(b,a,e||{}):a;a=("var out='"+(b.strip?
	a.replace(/(^|\r|\n)\t* +| +\t*(\r|\n|$)/g," ").replace(/\r|\n|\t|\/\*[\s\S]*?\*\//g,""):a).replace(/'|\\/g,"\\$&").replace(b.interpolate||h,function(a,b){return m.start+k(b)+m.end}).replace(b.encode||h,function(a,b){c=!0;return m.startencode+k(b)+m.end}).replace(b.conditional||h,function(a,b,c){return b?c?"';}else if("+k(c)+"){out+='":"';}else{out+='":c?"';if("+k(c)+"){out+='":"';}out+='"}).replace(b.iterate||h,function(b,a,c,e){if(!a)return"';} } out+='";d+=1;g=e||"i"+d;a=k(a);return"';var arr"+
		d+"="+a+";if(arr"+d+"){var "+c+","+g+"=-1,l"+d+"=arr"+d+".length-1;while("+g+"<l"+d+"){"+c+"=arr"+d+"["+g+"+=1];out+='"}).replace(b.evaluate||h,function(a,b){return"';"+k(b)+"out+='"})+"';return out;").replace(/\n/g,"\\n").replace(/\t/g,"\\t").replace(/\r/g,"\\r").replace(/(\s|;|\}|^|\{)out\+='';/g,"$1").replace(/\+''/g,"");c&&(b.selfcontained||!l||l._encodeHTML||(l._encodeHTML=f.encodeHTMLSource(b.doNotSkipEncoded)),a="var encodeHTML = typeof _encodeHTML !== 'undefined' ? _encodeHTML : ("+f.encodeHTMLSource.toString()+
	"("+(b.doNotSkipEncoded||"")+"));"+a);return new Function(b.varname,a)};f.compile=function(a,b){return f.template(a,null,b)}})();
}());
(function () {
'use strict';
/*global window */

var doT = gi5366['/www/js/lib/dot.js'] || window.doT;

var doc = window.document,
	templateMaster = {
		templateSelector: '.js-template',
		mainJsSelector: '.js-main-js',
		tmplText: {},
		tmplFn: {},
		getSymbolByMap: function (match, p1) {
			return { 'amp' : '&', 'gt' : '>', 'lt' : '<' }[p1];
		},
		init: function () {

			var tm = this,
				templates = doc.querySelectorAll(tm.templateSelector),
				mainJs = doc.querySelector(tm.mainJsSelector);

			Array.prototype.forEach.call(templates, function (tmplNode) {

				var name = tmplNode.getAttribute('data-name'),
					text = tmplNode.innerHTML.replace(/\&(amp|gt|lt)\;/gi, tm.getSymbolByMap);

				tm.tmplText[name] = text;
				tm.tmplFn[name] = doT.template(text);

				tmplNode.parentNode.removeChild(tmplNode);

			});

			mainJs.parentNode.removeChild(mainJs);

		}

	};

templateMaster.init();

gi5366['/www/js/services/template-master.js'] = templateMaster;



}());
(function () {
'use strict';
/*global window */

var win = window,
	doc = win.document,
	docElem = doc.documentElement,
	util = {

		assortArray: function (arr) {
			return arr.sort(function () {
				return 0.5 - Math.random();
			});
		},

		getPath: function (folder, index, type) {

			index += 1;

			if (index < 10) {
				index = '0' + index;
			}

			return folder + '/' + folder + '-' + index + '.' + type;

		},

		arrayRemoveByValue: function (arr, value) {
			var index = arr.indexOf(value);
			if (index !== -1) {
				arr.splice(index, 1);
			}
			return arr;
		},

		getBetween: function (min, current, max) {
			current = Math.min(current, max);
			current = Math.max(current, min);
			return current;
		},

		getRandomBetween: function (min, max) {
			return Math.round(Math.random() * (max - min) + min);
		},

		toTop: function () {
			win.scrollTo(0, 0);
		},

		copyJSON: function (obj) { // external
			return JSON.parse(JSON.stringify(obj));
		}

	};

gi5366['/www/js/services/util.js'] = util;
}());
(function () {
'use strict';
/*global window */

var win = window,
	androidPlayer = {

	pathPrefix: 'www/',

	init: function () {

	},

	play: function (data) {

		var player = this,
			roadNumber = data.road,
			isLoop = data.isLoop,
			sound = data.sound,
			src = player.pathPrefix + sound,
			andAud = win['AndAud_' + roadNumber];

		if (isLoop) {
			andAud.playAudioLooping(src);
		} else {
			andAud.playAudio(src);
		}

	},

	stop: function (data) {

		var roadNumber = data.road,
			andAud = win['AndAud_' + roadNumber];

		andAud.stop();

	}

};

gi5366['/www/js/sound/player-android.js'] = androidPlayer;
}());
(function () {
'use strict';
/*global window */

var win = window,
	iosPlayer = {

		roads: new Array(4),

		pathPrefix: '',

		init: function () {

		},

		play: function (data) {

			var player = this,
				roadNumber = data.road,
				isLoop = data.isLoop,
				sound = data.sound,
				newAudio,
				settings = {
					playAudioWhenScreenIsLocked: false
				};

			player.stop(data);

			newAudio = new Media(player.pathPrefix + sound);

			if (isLoop) {
				settings.numberOfLoops = 9;
			}

			newAudio.play(settings); // play audio with needed settings

			player.roads[roadNumber] = newAudio;

		},

		stop: function (data) {

			var player = this,
				roadNumber = data.road,
				road = player.roads[roadNumber];

			if (road && road.release) {
				player.roads[roadNumber].stop();
				player.roads[roadNumber].release();
			}

		}

	};

gi5366['/www/js/sound/player-ios.js'] = iosPlayer;


}());
(function () {
'use strict';
/*global window */

var info = gi5366['/www/js/services/info.js'] || window.info;

var win = window,
	webPlayer = {

	roads: undefined,

	pathPrefix: '',

	init: function () {

		var player = this;

		player.roads = new Array(4).fill(new Audio());

	},

	play: function (data) {

		var player = this,
			roadNumber = data.road,
			isLoop = data.isLoop,
			sound = data.sound,
			newAudio;

		player.stop(data);

		newAudio = new Audio();
		if (isLoop) {
			newAudio.addEventListener('ended', function () {
				if (info.get('music') === 'off') {
					return;
				}
				var audio = this;
				audio.currentTime = 0;
				audio.play();
			}, false);
		}

		newAudio.addEventListener('canplay', function () {
			if (info.get('music') === 'off') {
				return;
			}
			var audio = this;
			audio.play();
		});

		player.roads[roadNumber].src = '';
		player.roads[roadNumber] = newAudio;

		newAudio.src = player.pathPrefix + sound;

	},

	stop: function (data) {

		var player = this,
			roadNumber = data.road,
			road = player.roads[roadNumber];

		if (road && road.pause) {
			road.pause();
		}

		if (road && road.currentTime && road.currentTime < 0.1) {
			road.currentTime = 0;
		}

	}

};

gi5366['/www/js/sound/player-web.js'] = webPlayer;

}());
(function () {
'use strict';
/*global window */

var androidPlayer = gi5366['/www/js/sound/player-android.js'] || window.androidPlayer;
var iosPlayer = gi5366['/www/js/sound/player-ios.js'] || window.iosPlayer;
var webPlayer = gi5366['/www/js/sound/player-web.js'] || window.webPlayer;
var info = gi5366['/www/js/services/info.js'] || window.info;

var win = window,
	soundMaster = {

		init: function () {

			var soundMaster = this;

			soundMaster.initPlayers();

			win.addEventListener('hashchange', soundMaster.playBgSound.bind(soundMaster), false);

		},

		roads: [{}, {}, {}, {}], // 4 roads

		initPlayers: function () {

			var soundMaster = this,
				isAndroidPlayer = win.AndAud_0,
				isIosPlayer = win.Media, // detect cordova Media
				player;

			if (isAndroidPlayer) {
				player = androidPlayer;
			}

			if (isIosPlayer) {
				player = iosPlayer;
			}

			player = player || webPlayer; // get system player or use web player

			player.init();

			soundMaster.player = player;

		},

		getPlayer: function () {
			return this.player;
		},

		playBgSound: function () {

			var soundMaster = this,
				gbSound = soundMaster.getCurrentBgSound();

			if (!gbSound) {
				return;
			}

			soundMaster.play({
				sound: gbSound,
				isLoop: true,
				road: 0
			});

		},

		getCurrentBgSound: function () {

			//var state = Backbone.history.fragment;

			//switch (state) {
			//
			//	case '':
			//	case 'play':
			//	case 'select-level':
			//	case 'skirmish-select-map':
			//		return 'main-theme.mp3'; // file name main-theme.mp3
			//
			//}

			// if false - do not anything
			return false;

		},

		play: function (data) {

			var soundMaster = this,
				player = soundMaster.getPlayer(),
				prevState = soundMaster.roads[data.road],
				curStr = JSON.stringify(data),
				prevStr = JSON.stringify(prevState);

			//save arguments for - do not start play the same sound
			if (curStr === prevStr && data.isLoop) {
				return;
			}

			soundMaster.stop(data);

			soundMaster.roads[data.road] = JSON.parse(curStr);

			if (info.get('music') === 'off') {
				return;
			}

			player.play(data);

		},

		stop: function (data) {

			var soundMaster = this,
				player = soundMaster.getPlayer();

			player.stop(data);

		},

		stopBgSound: function () {

			var soundMaster = this,
				state = soundMaster.roads[0]; // 0 is bg sound

			soundMaster.stop(state);

		},

		restoreBgSound: function () {

			var soundMaster = this,
				state = JSON.parse(JSON.stringify(soundMaster.roads[0])); // 0 is bg sound

			soundMaster.roads[0] = {}; // wipe previous state to force play sound

			soundMaster.play(state);

		}

	};

soundMaster.init();

gi5366['/www/js/sound/sound-master.js'] = soundMaster;


}());
(function () {
'use strict';
/*global window */
/*global $, Image*/

var $ = gi5366['/www/js/lib/jbone.js'] || window.$;

var bg = {
	attr: {},
	set: function (key, value) {
		this.attr[key] = value;
		return this;
	},
	get: function (key) {
		return this.attr[key];
	},
	changeBg: function () {

		var bgMaster = this,
			$wrapper = bgMaster.get('$wrapper'),
			lastBgIndex = bgMaster.get('lastBgIndex'),
			index;

		$wrapper.removeClass('bgi-' + lastBgIndex);

		do {
			index = Math.round(Math.random() * 4);
		} while (lastBgIndex === index);

		$wrapper.addClass('bgi-' + index);

		bgMaster.set('lastBgIndex', index);

	},

	init: function () {

		var bgMaster = this,
			$wrapper = $('.js-wrapper');

		bgMaster.set('$wrapper', $wrapper);

		bgMaster.loadAllBgs();

	},

	loadImg: function (path) {

		var deferred = $.Deferred(),
			img = new Image();

		img.addEventListener('load', deferred.resolve.bind(deferred), false);
		img.addEventListener('error', deferred.reject.bind(deferred), false);

		img.src = path;

		return deferred.promise();

	},

	loadAllBgs: function () {

		var bgMaster = this,
			i,
			imgDeferred = $.Deferred(),
			imgPromise = imgDeferred.promise();

		for (i = 0; i <= 0; i += 1) {
			imgPromise = imgPromise.always(bgMaster.loadImg.bind(bgMaster, ('./i/background/' + i + '.png')));
		}

		imgDeferred.resolve();

	}

};

gi5366['/www/js/services/bg.js'] = bg;
}());
(function () {
'use strict';
/*global window */

var Backbone = gi5366['/www/js/lib/backbone.js'] || window.Backbone;
var $ = gi5366['/www/js/lib/jbone.js'] || window.$;
var _ = gi5366['/www/js/lib/lodash.js'] || window._;
var info = gi5366['/www/js/services/info.js'] || window.info;
//var tm = gi5366['/www/js/services/template-master.js'] || window.tm;
var util = gi5366['/www/js/services/util.js'] || window.util;
var mediator = gi5366['/www/js/services/mediator.js'] || window.mediator;
var sm = gi5366['/www/js/sound/sound-master.js'] || window.sm;
var lang = gi5366['/www/js/services/lang.js'] || window.lang;

var win = window,
	doc = win.document,
	docElem = doc.documentElement,
	BaseView = Backbone.View.extend({

		events: {
			// base
			'click [data-sound]': 'playSound',
			'click [data-route]': 'routeTo',
			'click .js-back': 'routeBack',
			'click .js-external-link': 'toExternalLink',
			'click .js-stop-event': 'stopEvent',

			// hide view
			'hide': 'hide',
			'click .js-hide-popup': 'hidePopupByRouter',

			// fix extra scroll for iOS
			'touchstart .js-scroll-area-container': 'touchStartAutoScroll',

			// external
			'click .js-list-backward[data-group-name]': 'changeSelect',
			'click .js-list-changed-item[data-group-name]': 'changeSelect',
			'click .js-list-forward[data-group-name]': 'changeSelect',

			// tabs
			'click .js-tab-button': 'tabAction',
			'click .js-tab-close': 'tabClose'

		},

		extraEvents: {
			noScroll: ['mousewheel', 'touchmove', 'gesturestart', 'gesturechange', 'gestureend']
		},

		//popupUrl: 'popup=true',

		selectors: {
			wrapper: '.js-wrapper',
			verticalSwiper: '.js-scroll-container',
			noScroll: '.js-no-scroll'
		},

		// will be changed after initStatic
		eventTypes: {
			down: ['mousedown', 'touchstart'],
			move: ['mousemove', 'touchmove'],
			up: ['mouseup', 'touchend']
			//dbl: ['dblclick', 'doubletap']
		},

		initStatic: function () {

			var view = this,
				isTouch = info.get('isTouch', true),
				eventTypesIndex = Number(isTouch),
				types = view.eventTypes,
				fontSize,
				proto = BaseView.prototype;

			proto.$wrapper = $(view.selectors.wrapper);

			// adjust font size
			fontSize = Math.round(14 * Math.pow(docElem.clientWidth * docElem.clientHeight / 153600, 0.5)); // 153600 = 320 * 480
			fontSize = Math.min(fontSize, 24);
			fontSize = Math.max(fontSize, 14);
			fontSize = Math.round(fontSize / 2) * 2;
			docElem.style.fontSize = fontSize + 'px';

			info.set('remSize', fontSize, true);

			_.each(types, function (typesArr, key) {
				types[key] = typesArr[eventTypesIndex];
			});

			$(doc.body).on('contextmenu', view.stopEvent);

		},

		constructor: function () {

			var view = this,
				proto = BaseView.prototype,
				newEvents = {},
				noScrollEvents = proto.extraEvents.noScroll,
				noScrollSelector = proto.selectors.noScroll;

			view.events = $.extend({}, proto.events, view.events);

			// prepare extra events from eventTypes
			_.each(view.events, function (functionName, eventAndSelector) {
				newEvents[view.getFullEventNameAndSelector(eventAndSelector)] = functionName;
			});

			_.each(noScrollEvents, function (name) {
				newEvents[name + ' ' + noScrollSelector] = 'stopEvent';
			});

			if (newEvents.scroll === 'stopEvent') {
				newEvents.scroll = null; // let gc clean ram
				delete newEvents.scroll;
				_.each(noScrollEvents, function (name) {
					newEvents[name] = 'stopEvent';
				});
			}

			view.events = newEvents;

			view.selectors = $.extend({}, proto.selectors, view.selectors);

			view.attr = {};

			view.setClassNames();

			mediator.installTo(view);

			return Backbone.View.prototype.constructor.apply(view, arguments);
		},

		setClassNames: function () {

			this.classNames = {};

			_.each(this.selectors, function (value, key) {
				this[key] = value.replace(/\./g, ' ').trim();
			}, this.classNames);

		},

		getFullEventNameAndSelector: function (eventNameAndSelector) {

			var view = this,
				arr = eventNameAndSelector.split(' '),
				newEventName = view.eventTypes[arr[0]];

			if (newEventName) {
				return [newEventName, arr[1]].join(' ');
			}

			return eventNameAndSelector;

		},

	 	// still not implemented
		//initialize: function() {
		//	console.log('base initialize');
		//},

		changeSelect: function (e) { // external

			var $this = $(e.currentTarget),
				direction = $this.hasClass('js-list-backward') ? -1 : 1,
				groupName = $this.attr('data-group-name'),
				$container = this.$el.find('.js-list-changed-item[data-full-list][data-group-name="' + groupName + '"]'),
				listData = JSON.parse(decodeURI($container.attr('data-full-list'))),
				listLength = listData.length,
				currentKey = $container.attr('data-key'),
				followIndex = 0,
				followData;

			// find current index
			listData.every(function (obj, i) {
				if (obj.key.toString() === currentKey) {
					followIndex = i + direction;
					return false;
				}
				return true;
			});

			// adjust follow index
			if (followIndex < 0) {
				followIndex = listLength - 1;
			}

			if (followIndex >= listLength) {
				followIndex = 0;
			}

			followData = listData[followIndex];

			$container.attr('data-key', followData.key);
			$container.attr('data-value', followData.value);
			$container.html(followData.value);

			$container.trigger('change');

		},

		destroyView: function () {

			var view = this;

			view.$el.removeData().off().remove().empty();

			view.remove();
			view.unbind();

			Backbone.View.prototype.remove.call(view);

		},

		hide: function () {

			var view = this,
				$el = view.$el,
				animationEnd = info.get('animationEnd', true),
				isScreenAnimation = info.get('screenAnimation') === 'on',
				deferred = $.Deferred();

			view.unsubscribe();

			view.undelegateEvents();

			if (view.unbindEventListeners) {
				view.unbindEventListeners();
			}

			if (isScreenAnimation && $el.hasClass('show-view-animation')) {
				$el.one(animationEnd, function () {
					view.destroyView();
					deferred.resolve();
				});
				//$el.removeClass('show-view-animation');
				$el.addClass('hide-view-animation');
			} else {
				view.destroyView();
				deferred.resolve();
			}

			return deferred.promise();

		},

		render: function () {

			var view = this;

			view.publish('hide-main-view');
			view.subscribe('hide-main-view', view.hide);

			view.$wrapper.append(view.$el);
			//view.util.setSizes();
			//view.util.toTop();
			return view.showAppearAnimation();

		},

		showAppearAnimation: function () {

			var view = this,
				isScreenAnimation = info.get('screenAnimation') === 'on',
				$el = view.$el,
				deferred = $.Deferred(),
				animationEnd = info.get('animationEnd', true);

			if (isScreenAnimation) {
				$el.one(animationEnd, function () {
					deferred.resolve();
				});
				$el.addClass('show-view-animation');
			} else {
				$el.addClass('show-view-no-animation');
				deferred.resolve();
			}

			return deferred.promise();

		},

		routeTo: function (e) {

			var view = this,
				$this = $(e.currentTarget),
				route = $this.attr('data-route');

			view.publish('navigate', route, true);

		},

		routeBack: function (e) {

			this.stopEvent(e);

			if (win.location.hash) {
				Backbone.history.history.back();
			}

		},

		//backTo: function (url, data) {
		backTo: function (url) {

			//data = data || {};

			var view = this;

			(function backTo() {
				win.setTimeout(function () {
					if (Backbone.history.fragment === url || !Backbone.history.fragment) { // needed url or ''
						//router.isForce = false;
						return;
					}
					view.routeBack();
					backTo();
				}, 10);
			}());

		},

		showPopup: function (data) {

			var view = this,
				deferred = $.Deferred(),
				popup = {};

			view.hidePopupByRouter();

			view.publish('showPopup', data, popup);

			popup.view.set('deferred', deferred);

			return deferred.promise();

		},

		hidePopupByRouter: function () {

			this.publish('router-hide-popup');

		},

		isPopupExist: function () {

			var view = this,
				url = win.location.href,
				popupPart = view.popupUrl;

			return url.indexOf(popupPart) !== -1;

		},

		stopEvent: function (e) {

			if (!e) {
				return;
			}

			e.preventDefault();
			e.stopPropagation();

		},

		toExternalLink: function (e) {

			var view = this,
				$this = $(e.currentTarget),
				needConfirm = $this.attr('data-need-confirm'),
				url = $this.attr('data-href');

			view.stopEvent(e);

			if (needConfirm === 'yes') {
				return view.needConfirmLinkPrompt({
					url: url
				});
			}

			win.open(url);

		},

		needConfirmLinkPrompt: function (data) {

			var view = this,
				getRandomBetween = util.getRandomBetween,
				a = getRandomBetween(5, 9),
				b = getRandomBetween(5, 9),
				answer = a + b,
				i, len,
				answers = [];

			if ( a < b ) {
				b = [a, a = b][0];
			}

			for (i = 0, len = 6; i < len; i += 1) {
				answers[i] = answer + i - 4;
			}

			return view.showPopup({
				name: 'need-confirm',
				cssClass: 'popup-title',
				data: {
					a: a,
					b: b,
					answer: answer,
					answers: util.assortArray(answers),
					url: data.url
				}
			});

			/*
			 if ( result === null || result === '') {
			 return;
			 }

			 if (Number(result) === a + b) {
			 win.open(data.url);
			 } else {
			 view.needConfirmLinkPrompt(data);
			 }
			 */

		},

		checkConnection: function () {

			var deferred = $.Deferred(),
				src = 'https://www.gstatic.com/android/market_images/web/play_one_bar_logo.png?t=' + Math.random(),
				$img = $('<img alt=""/>');

			$img.on('load', function () {
				$(this).off().remove();
				deferred.resolve();
			});

			$img.on('error', function () {
				$(this).off().remove();
				deferred.reject();
			});

			$img.attr('src', src);

			return deferred.promise();

		},

		rateUsPopup: function () {

			var view = this,
				dateUsData = info.get('rate-us') || {},
				now = Date.now(),
				lastShow = dateUsData.lastShow,
			//lastRemindMeLater = dateUsData.lastRemindMeLater,
				lastNoThanks = dateUsData.lastNoThanks,
				lastRateNow = dateUsData.lastRateNow,
				showPeriod = 86400e3 * 2,
				noThanksPeriod = showPeriod * 3; // try to show every two days

			if (lastShow && (now - lastShow < showPeriod)) {
				// do not show popup too often
				//console.log('do not show popup too often');
				return;
			}

			if (lastRateNow) {
				// rate by rate now
				//console.log('it had been rate by rate now');
				return;
			}

			if (lastNoThanks && ( now - lastShow < noThanksPeriod )) {
				//console.log('no thanks - 3 * showPeriod');
				return;
			}

			// do not show any popup if user is offline
			view.checkConnection().done(function () {

				// set last show time
				dateUsData.lastShow = now;

				// save date-us data
				info.set('rate-us', dateUsData);

				return view.showPopup({
					name: 'rate-us',
					cssClass: 'popup-title',
					extraEvents: [
						{
							selector: '.js-rate-us-rate-now',
							event: 'click',
							fn: function () {
								var dateUsData = info.get('rate-us') || {};
								dateUsData.lastRateNow = Date.now();
								info.set('rate-us', dateUsData);
							}
						},
						{
							selector: '.js-rate-us-no-thanks',
							event: 'click',
							fn: function () {
								var dateUsData = info.get('rate-us') || {};
								dateUsData.lastNoThanks = Date.now();
								info.set('rate-us', dateUsData);
							}
						}
					],
					data: {
						lang: lang,
						url: info.getLinkToStore()
					}
				});

			});

		},

		loadUrl: function () {
			Backbone.history.loadUrl();
		},

		changeBy: function (key, delta) {
			return this.set(key, this.get(key) + delta);
		},

		set: function (key, value) {
			this.attr[key] = value;
			return value;
		},
		get: function (key) {
			return this.attr[key];
		},

		extendFromObj: function (data) {
			_.extend(this.attr, data);
		},

		setVerticalSwiper: function () {

			var view = this,
				$el = view.$el,
				varticalSwiper;

			// need for swiper
			$el.find('.swiper-slide').css('height', 'auto');

			varticalSwiper = new Swiper($el.find(view.selectors.verticalSwiper), {
				scrollbar: '.swiper-scrollbar',
				direction: 'vertical',
				slidesPerView: 'auto',
				mousewheelControl: true,
				freeMode: true
			});

			view.set('vertical-swiper', varticalSwiper);

		},

		scrollToTop: function () {
			doc.body.scrollTop = 0
		},

		touchStartAutoScroll: function (e) {

			if (!info.get('isIOS', true)) { // do for IOS only
				return;
			}

			var wrapper = e.currentTarget,
				scrollArea = wrapper.querySelector(':scope > div'),
				scrollTop = wrapper.scrollTop,
				wrapperHeight,
				scrollAreaHeight,
				maxScrollTop;

			if (scrollTop <= 0) {
				wrapper.scrollTop = 1;
				return;
			}

			wrapperHeight = wrapper.clientHeight;
			scrollAreaHeight = scrollArea.clientHeight;
			maxScrollTop = scrollAreaHeight - wrapperHeight;

			if (scrollTop >= maxScrollTop) {
				wrapper.scrollTop = maxScrollTop - 1;
			}

		},

		tabAction: function (e) {

			var view = this,
				$el = view.$el,
				$button = $(e.currentTarget),
				tabId = $button.attr('data-tab-id'),
				tabState = $button.attr('data-tab-state'),
				tabButtonClassPrefix = 'tab-button-',
				tabBlockSelector = '.js-tab-block',
				tabButtonSelector = '.js-tab-button',
				$block = $el.find(tabBlockSelector + '[data-tab-id="' + tabId + '"]'),
				$blocks = $el.find(tabBlockSelector),
				$buttons = $el.find(tabButtonSelector);

			$blocks.addClass('hidden');
			$buttons
				.addClass(tabButtonClassPrefix + 'close')
				.removeClass(tabButtonClassPrefix + 'open')
				.attr('data-tab-state', 'close');

			if (tabState === 'close') {
				$button
					.attr('data-tab-state', 'open')
					.removeClass(tabButtonClassPrefix + 'close')
					.addClass(tabButtonClassPrefix + 'open');
				$block.removeClass('hidden');
			}

		},

		tabClose: function () {

			var view = this,
				$el = view.$el,
				tabButtonClassPrefix = 'tab-button-',
				tabBlockSelector = '.js-tab-block',
				tabButtonSelector = '.js-tab-button',
				$blocks = $el.find(tabBlockSelector),
				$buttons = $el.find(tabButtonSelector);

			$blocks.addClass('hidden');
			$buttons
				.addClass(tabButtonClassPrefix + 'close')
				.removeClass(tabButtonClassPrefix + 'open')
				.attr('data-tab-state', 'close');

		},

		playSound: function (e) {

			var $this = $(e.currentTarget),
				sound = $this.attr('data-sound');

			sm.play({
				sound: sound,
				road: 3,
				isLoop: false
			});

		}

	});

gi5366['/www/js/app/view/core/base.js'] = BaseView;
}());
(function () {
'use strict';
/*global window */

var booksData = {
	ru: [
		{
			folder: 'baba-yaga-i-yagody',
			title: {text: 'Баба Яга и ягоды'},
			pages: [
				{
					text: 'В некотором царстве, в славном государстве, возле речки древней, у большой деревни стоял дремучий бор. Грибов и ягод водилось там видимо-невидимо, да только местным жителям радости от этого не было совсем, потому как обитала в чаще того леса старая карга - злобная Яга. Жадна была не в меру и никому в лес ступить не давала: кого в трясину заведёт, кого и вовсе изведёт.',
					time: 33.818375
				},
				{
					text: 'Как-то летом в самую ягодную пору задумала она полакомиться земляникой, да вот незадача: не хотят ягодки в корзинку к старой Яге идти, под листочками спрятались, в травке затаились. Ворчит баба Яга, злобится, да под каждый листик не заглянешь, каждому кусту не поклонишься.|Той же порой ходила по лесу маленькая девочка. Ещё затемно из дому вышла, корзинку ягод набрать да малость подкормиться. Уж ей-то ягоды на показ выставляются:|- Здесь мы, бери нас скорей!',
					time: 37.815125
				},
				{
					text: 'Наелась девочка ягод, набрала полную корзинку и хотела уж было домой идти, как повстречалась ей баба Яга, ухватила своей клюкой, да как зашипит:|- Вот почему мне ни одной ягоды не попалось! Ты их все собрала!|Отняла у девочки корзинку, и отправилась к себе в избушку, радуясь нежданной добыче. А девочка присела на пенёк и горько заплакала от обиды.',
					time: 30.657625
				},
				{
					text: 'Идёт баба Яга, корзинкой покачивает, а ягодки оттуда прыг да скок на травку, прыг да скок, так все и повыпрыгивали и покатились обратно на полянку.|Сидит девочка, жалобно всхлипывает и вдруг слышит из травы:|- Готовь-ка, милая, платочек!|Сняла она косынку, расстелила перед собой, ягодки туда и закатились. Связала их девочка в узелок и радостная побежала домой.',
					time: 31.310625
				},
				{
					text: 'А баба Яга пришла к себе в избушку, глядь - а ягод-то и нет! Один запах остался. Швырнула она в сердцах корзинку, затряслась, затопала ногами:|- А-а-а! Чтоб тебе ни дна, ни покрышки!|Ругалась, ругалась, да от злобы и лопнула, да с таким треском и грохотом, что вместе с ней рассыпалась и её избушка. И появилось в этом месте болото, а по краям его выросло много ягодных кустов, где деревенские ребятишки каждый год лакомятся спелой земляникой.|Тут и сказке конец.',
					time: 45.1555
				}
			]
		},
		{
			folder: 'bagazh',
			title: {text: 'Багаж'},
			pages: [
				{
					text: 'Дама сдавала в багаж|Диван,|Чемодан,|Саквояж,|Картину,|Корзину,|Картонку|И маленькую собачонку.',
					time: 11.8755
				},
				{
					text: 'Выдали даме на станции|Четыре зелёных квитанции|О том, что получен багаж:|Диван,|Чемодан,|Саквояж,|Картина,|Корзина,|Картонка|И маленькая собачонка.',
					time: 15.584875
				},
				{
					text: 'Вещи везут на перрон.|Кидают в открытый вагон.|Готово! Уложен багаж:|Диван,|Чемодан,|Саквояж,|Картина,|Корзина,|Картонка|И маленькая собачонка.|Но только раздался звонок,|Удрал из вагона щенок.',
					time: 19.29425
				},
				{
					text: 'Хватились на станции Дно:|Потеряно место одно.|В испуге считают багаж:|Диван,|Чемодан,|Саквояж,|Картина,|Корзина,|Картонка...|Товарищи! Где собачонка?',
					time: 15.480375
				},
				{
					text: 'Вдруг видят: стоит у колёс|Огромный взъерошенный пёс.|Поймали его и в багаж,|Туда, где лежал саквояж,|Картина,|Корзина,|Картонка,|Где прежде была собачонка.',
					time: 18.353875
				},
				{
					text: 'Приехали в город Житомир.|Носильщик пятнадцатый номер|Везёт на тележке багаж:|Диван,|Чемодан,|Саквояж,|Картину,|Корзину,|Картонку,|А сзади ведут собачонку.',
					time: 19.633875
				},
				{
					text: 'Собака-то как зарычит.|А барыня как закричит:|Разбойники! Воры! Уроды!|Собака - не той породы!|Швырнула она чемодан,|Ногой отпихнула диван,|Картину,|Корзину,|Картонку...|Отдайте мою собачонку!',
					time: 22.89925
				},
				{
					text: 'Позвольте, мамаша! На станции,|Согласно багажной квитанции,|От вас получили багаж:|Диван,|Чемодан,|Саквояж,|Картину,|Корзину,|Картонку|И маленькую собачонку.|Однако|За время пути|Собака|Могла подрасти!',
					time: 50.406125
				}
			]
		},
		{
			folder: 'kolobok',
			title: {text: 'Колобок'},
			pages: [
				{
					text: 'Жил-был старик со старухою.|Просит старик:|- Испеки, старуха, колобок.|- Из чего печь-то? Муки нету.|- Э-эх , старуха! По коробу поскреби, по сусеку помети; авось муки и наберется.',
					time: 39.748125
				},
				{
					text: 'Взяла старуха крылышко, по коробу поскребла, по сусеку помела, и набралось муки пригоршни с две.',
					time: 8.375125
				},
				{
					text: 'Замесила на сметане, изжарила в масле и положила на окошечко постудить.',
					time: 8.793125
				},
				{
					text: 'Колобок полежал-полежал, да вдруг и покатился — с окна на лавку, с лавки на пол, по полу да к дверям, перепрыгнул через порог в сени, из сеней на крыльцо, с крыльца на двор, со двора за ворота, дальше и дальше.',
					time: 25.772625
				},
				{
					text: 'Катится колобок по дороге, а навстречу ему заяц:|- Колобок, колобок! Я тебя съем!|- Не ешь меня, косой зайчик! Я тебе песенку спою,— сказал колобок и запел:|Я по скребён метен, на сметане мешон,|Я в масле пряжон, на окошке стужон;|Я от дедушки ушел, я от бабушки ушел,|От тебя, зайца, не хитро уйти!|И покатился себе дальше; только заяц его и видел!',
					time: 33.113125
				},
				{
					text: 'Катится колобок, а навстречу ему волк:|- Колобок, колобок! Я тебя съем!|- Не ешь меня, серый волк! Я тебе песенку спою!|Я по сусеку скребён, на сметане мешон,|Я в масле пряжон, на окошке стужон;|Я от дедушки ушел, я от бабушки ушел,|Я от зайца ушел,|От тебя, волка, не хитро уйти!|И покатился себе дальше; только волк его и видел!',
					time: 31.624125
				},
				{
					text: 'Катится колобок, а навстречу ему медведь:|- Колобок, колобок! Я тебя съем.|- Где тебе, косолапому, съесть меня!|Я по сусеку скребён, на сметане мешон,|Я в масле пряжон, на окошке стужон;|Я от дедушки ушел, я от бабушки ушел,|Я от зайца ушел, я от волка ушел,|От тебя, медведь, не хитро уйти!|И опять укатился; только медведь его и видел!',
					time: 36.796375
				},
				{
					text: 'Катится, катится колобок, а навстречу ему лиса:|- Здравствуй, колобок! Какой ты хорошенький!|А колобок запел:|Я по сусеку скребён, на сметане мешон,|Я в масле пряжон, на окошке стужон;|Я от дедушки ушел, я от бабушки ушел,|Я от зайца ушел, я от волка ушел,|От медведя ушел,|От тебя, лиса, и подавно уйду!',
					time: 49.700875
				},
				{
					text: '- Какая славная песенка! — сказала лиса. - Но ведь я, колобок, стара стала, плохо слышу; сядь-ка на мою мордочку, да пропой еще разок погромче.|Колобок вскочил лисе на мордочку и запел ту же песню.|- Спасибо, колобок! Славная песенка, еще бы послушала! Сядь-ка на мой язычок да пропой в последний разок, - сказала лиса и высунула свой язык.|Колобок сдуру прыг ей на язык, а лиса - ам его! - и скушала.',
					time: 93.664875
				}
			]
		},
		{
			folder: 'kurochka-ryaba',
			title: {text: 'Курочка ряба'},
			pages: [
				{
					text: 'Жили себе дед да баба,',
					time: 21.828125
				},
				{
					text: 'И была у них курочка Ряба.',
					time: 4.378375
				},
				{
					text: 'Снесла курочка яичко.',
					time: 17.8315
				},
				{
					text: 'Яичко не простое - Золотое.',
					time: 3.908125
				},
				{
					text: 'Дед бил, бил - не разбил.',
					time: 18.406125
				},
				{
					text: 'Баба била, била - не разбила.',
					time: 5.867375
				},
				{
					text: 'Мышка бежала, хвостиком махнула,|Яичко упало и разбилось.',
					time: 8.740875
				},
				{
					text: 'Дед плачет, баба плачет.',
					time: 4.718
				},
				{
					text: 'А курочка кудахчет:|\'Не плач дед, не плач баба,',
					time: 8.14
				},
				{
					text: 'Снесу я вам яичко другое,|Не золотое, а простое\'.',
					time: 11.17025
				}
			]
		},
		{
			folder: 'pro-glupogo-zmeya-i-umnogo-soldata',
			title: {text: 'Про глупого змея и умного солдата'},
			pages: [
				{
					text: 'В тридевятом царстве, в тридесятом государстве жил в старину один солдат. Отслужил он службу и отправился в родные края. Идёт себе, довольный, песни поёт. Ближе к вечеру пришёл он в глухую деревушку. Постучал в ближайшую избу и крикнул:|- Любезные хозяева! Пустите солдата на постой!|А в ответ - молчание. Тогда пошёл он в другую избу, но и там не отзываются. К третьей направился - и здесь та же картина. Толкнул солдат дверь и вошёл в избу. Глядит - пусто, только слой пыли да паутина по углам.|- Интересно, - размышляет солдат, - куда это люди из деревни пропали?|Решил он пройти по улице, жителей поискать. Но куда ни зайдёт - ни одной живой души не видать. Дошёл до конца деревни и в самой крайней избе обнаружил старичка, горько вздыхавшего на печи.|- Здорово, хозяин! - приветствует солдат.',
					time: 76.162875
				},
				{
					text: '- Здравствуй, служивый, - овечает старик, - отчаянный ты видно, храбрец, коли пришёл сюда!|- А что же тут у вас страшного?|- А то, что появился в наших краях змей, всех людишек извёл, меня лишь оставил. А поутру прилетит мною позавтракает, а тобой и закусит. Ему что один, что двое - без разницы.|- Это мы ещё посмотрим, не поперхнётся ли! - отвечает солдат. - Я тут у тебя заночую, а утром гляну, что за змей такой объявился.|Ночь прошла спокойно, а утром изба закачалась, словно от сильного ветра - это змей прилетел. Заглянул он в горницу и зело обрадовался:|- Это хорошо, что вместо одного их двое оказалось, сейчас славно закушу!|- А не подавишься? - спрашивает солдат.|- Это кто тут голос подаёт?|- Тот, чья солдатская сила поболе твоей будет!',
					time: 68.56125
				},
				{
					text: '- Ну, раз так, идём во двор! - говорит змей, - будем сейчас с тобой силой мериться!|- Чтож, померимся!|Взял змей с земли огромный камень и хвастается:|- Гляди, как я его сейчас одной лапой сожму, раздавлю на мелкие песчинки!|- Да ты не хвались, раздави сперва!|Зажал змей камень в ладони, поднапрягся, да как стиснет, что осколки во все стороны брызнули. Разжал лапу, лишь песок на землю стряхнул.|- Эх, тоже мне, фокус! - говорит солдат, а слабо тебе из камня воду выдавить?|- Ну, этого никто не сможет! - отвечает змей.|- А вот спорим, я смогу! Погоди чуток!|Сбегал он в избу, где давеча заметил на окне узелок с творогом. Прихватил его, да во двор. Сжал его в кулаке, так что сыворотка и брызнула.',
					time: 65.8445
				},
				{
					text: '- Ну что, теперь понял, кто сильнее?|- Да, служивый, рука у тебя посильнее будет. А зато я свиснуть могу погромче твоего!|- А ну, попробуй!|Змей вздохнул поглубже и засвистел - деревья аж к земле пригнуло, а листья как ураганом смело.|- Разве это свист? - говорит солдат. - Сейчас я покажу, как свистеть надо. Только ты сперва глаза завяжи, чтобы они на лоб не повылазили!|Змей с опаской завязал глаза, а солдат тем временем достал большую дубину, да как и приложил его по макушке, у змея аж искры из глаз посыпались.|- Ой! - заорал он дурным голосом, - Хватит, солдат! У меня от твоего свиста шум в голове и звон в ушах стоит!|- Как хочешь, а то может ещё разок свиснуть?|- Нет уж, достаточно мы поспорили. Станем-ка лучше дружить, как братья! Ты мне будешь старшим братом, а я тебе - младшим.',
					time: 73.36775
				},
				{
					text: '- Хм, как-то не с руки мне водить дружбу со змеем. Да уж ладно, так тому и быть!|- Тогда, брат, станем мы с тобой хозяйствовать сами. Перво-наперво сходи-ка в поле, где коровы пасутся, выбери ту, которая пожирнее, да домой волоки!|Пошёл солдат в поле. Глядит - действительно: гуляет стадо коров. Призадумался он сперва, а потом согнал их в кучу и начал за хвосты привязывать.|Подождал змей, покуда терпение не лопнуло и сам на луг прилетел.|- Ой, ну чего ты возишься?|- Погоди чуток! Вот свяжу всё стадо и разом принесу к избе, чтобы запас был.|- Какой же ты, однако, своевольный! Зачем нам запас? Одной вполне достаточно!|Схватил змей за хвост корову, ту, что пожирней, забросил на спину и сам понёс.',
					time: 61.53425
				},
				{
					text: '- А этих куда девать? Выходит, зря я их ловил да привязывал?|- Оставь, они нам никчему!|Вернулись домой, а воды в доме нет ни капли.|- Возьми шкуру, - наказывает змей солдату, - сходи по воду! Да полней набирай. Обед готовить будем.|Взял солдат коровью шкуру, а она и без воды тяжёлая! И потащил к колодцу. Затем взял лопату, и начал его по кругу окапывать. Подождал змей, а потом сам к колодцу пришёл.|- Ну, чего ты опять возишься?|- Да вот, хочу колодец выкопать и поближе к избе перенести, чтоб за водой всякий раз не ходить.|- Ой, опять ты по-своему делаешь, нам воды ведь нужно всего на один раз!|Набрал змей полную шкуру воды и сам домой поволок.',
					time: 58.242875
				},
				{
					text: 'А соддату говорит:|- Ты пока сходи в лес, выбери дуб посуше да побольше, чтоб дров хватило, и тащи его домой!|Пришёл солдат в лес, но вместо того, чтоб дуд корчевать, стал лыко обдирать, да верёвку свивать. А когда получилась верёвка неимоверной длины, начал солдат ею деревья опутывать.|Подождал змей, покуда терпение не лопнуло, и сам в лес прилетел.|- Ну, а теперь ты чего возишься?|- Да лениво каждый раз за дровами ходить! Думаю, разом штук двадцать взять и домой принести!|- Ну, вседа ты что-то выдумываешь! Не нужно нам столько дров! - рассердился змей. Вырвал из земли огромный дуб, забросил за спину и сам к дому потащил.',
					time: 53.227375
				},
				{
					text: 'Хмурится солдат, делает вид, что рассержен, молчит, ни словечка не вымолвит.|Змей приготовил обед и зовёт солдата к столу. Тот отказывается и только трубку покуривает. Съел змей в одиночку всё мясо, опорожнил целую шкуру воды и у солдата допытывается:|- Отчего ты сердишься, старший брат?|- А оттого и сержусь, - отвечает солдат, - что я как не стараюсь, а всё тебе неугодно!|- Ладно, не обижайся, давай мериться!|- Коли желаешь мериться, сослужи мне службу! Отвези меня в родные края!|- А отчего ж не сослужить? Садись-ка верхом!|Взобрался солдат на змея, поднялся тот выше облаков и полетел к деревне, где солдат проживал.',
					time: 54.246125
				},
				{
					text: 'А как на землю опустился, набежали тут со всех сторон ребятишки, детвора, да как закричат:|- Вот каков солдат! Змея пленил, змея пленил!|Змей с перепугу не расслышал и спрашивает:|- Что они такое непонятное кричат?|- Это они говорят, что сейчас тобой займутся!|- Ну, раз в этой деревне мальцы такие смелые, - подумал змей, - что ж тогда от взрослых-то ждать?|Оставил он солдата и пустился наутёк. С тех пор о змее и слыхом не слыхивали, будто в воду канул. Прикратил он безобразничать, по сёлам летать, да людей изводить - до того перепугался.',
					time: 52.33925
				}
			]
		},
		{
			folder: 'repka',
			title: {text: 'Репка'},
			pages: [
				{
					text: 'Посадил дед репку. Посадил и говорит:|- Расти-расти, репка, сладка! Расти-расти, репка, крепка!',
					time: 12.580875
				},
				{
					text: 'Выросла репка сладка, крепка, большая-пребольшая!|Пошёл дед репку рвать. Тянет-потянет, вытянуть не может.',
					time: 9.838
				},
				{
					text: 'Позвал дед бабку. Бабка - за дедку, дедка - за репку: тянут-потянут, вытянуть не могут!',
					time: 11.327
				},
				{
					text: 'Повала бабка внучку. Внучка - за бабку, бабка - за дедку, дедка - за репку: тянут-потянут, вытянуть не могут!',
					time: 12.319625
				},
				{
					text: 'Позвала внучка Жучку. Жучка - за внучку, внучка - за бабку, бабка - за дедку, дедка - за репку: тянут-потянут, вытянуть не могут.',
					time: 14.59225
				},
				{
					text: 'Позвала Жучка кошку . Кошка- за Жучку, Жучка - за внучку, внучка - за бабку, бабка - за дедку, дедка - за репку: тянут-потянут, вытянуть не могут.',
					time: 25.407
				},
				{
					text: 'Позвала кошка мышку. Мышка - за кошку, кошка - за Жучку, Жучка - за внучку, внучка - за бабку, бабка - за дедку, дедка - за репку:',
					time: 31.206125
				},
				{
					text: 'тянут-потянут - и вытянули репку.',
					time: 8.375125
				}
			]
		},
		{
			folder: 'teremok',
			title: {text: 'Теремок'},
			pages: [
				{
					text: 'Ехал мужик с горшками и потерял один горшок.',
					time: 19.39875
				},
				{
					text: 'Прилетела муха-горюха и спрашивает:|- Чей домок-теремок? Кто в тереме живет?|Видит - никого нет. Она залетела в горшок и стала там жить-поживать.',
					time: 15.637125
				},
				{
					text: 'Прилетел комар-пискун и спрашивает:|- Чей домок-теремок? Кто в тереме живет?|- Я, муха-горюха. А ты кто?|- Я комар-пискун.|- Ступай ко мне жить!|Вот они стали жить вдвоем.',
					time: 17.67475
				},
				{
					text: 'Прибежала мышка-норушка и спрашивает:|- Чей домок-теремок? Кто в тереме живет?|- Я, муха-горюха.|- Я, комар-пискун. А ты кто?|- А я - мышка-норушка.|- Ступай к нам жить!|Стали они жить втроем.',
					time: 20.496
				},
				{
					text: 'Прискакала лягушка-квакушка и спрашивает:|- Чей домок-теремок? Кто в тереме живет?|- Я, муха-горюха.|- Я, комар-пискун.|- А я - мышка-норушка. А ты кто?|- Я лягушка-квакушка.|- Ступай к нам жить!|Cтали они жить вчетвером.',
					time: 26.138375
				},
				{
					text: 'Бежит зайчик и спрашивает:|- Чей домок-теремок? Кто в тереме живет?|- Я, муха-горюха.|- Я, комар-пискун.|- А я - мышка-норушка.|- Я, лягушка-квакушка. А ты кто?|- Я заюнок-кривоног, по горке скок.|- Ступай к нам жить!|Стали они жить впятером.',
					time: 21.358
				},
				{
					text: 'Бежала мимо лиса и спрашивает:|- Чей домок-теремок? Кто в тереме живет?|- Я, муха-горюха.|- Я, комар-пискун.|- А я - мышка-норушка.|- Я, лягушка-квакушка.|- Я, заюнок-кривоног, по горке скок. А ты кто?|- Я лиса - при беседе краса.|- Ступай к нам жить!|Стали они жить вшестером.',
					time: 27.758
				},
				{
					text: 'Прибежал волк:|- Чей домок-теремок? Кто в тереме живет?|- Я, муха-горюха.|- Я, комар-пискун.|- А я - мышка-норушка.|- Я, лягушка-квакушка.|- Я, заюнок-кривоног, по горке скок.|- Я, лиса - при беседе краса. А ты кто?|- Я волк-волчище - из-за куста схватище.|- Ступай к нам жить!|Вот живут они семеро все вместе - и горя мало.',
					time: 33.713875
				},
				{
					text: 'Пришел медведь и стучится:|- Чей домок-теремок? Кто в тереме живет?|- Я, муха-горюха.|- Я, комар-пискун.|- А я - мышка-норушка.|- Я, лягушка-квакушка.|- Я, заюнок-кривоног, по горке скок.|- Я, лиса - при беседе краса.|- Я, волк-волчище - из-за куста схватище. А ты кто?|- А я вам всем - пригнетыш!|Сел медведь на горшок, горшок раздавил и всех зверей распугал.',
					time: 56.41425
				}
			]
		},
		{
			folder: 'zayushkina-izbayshka',
			title: {text: 'Заюшкина избушка'},
			pages: [
				{
					text: 'Жили-были лиса да заяц. У лисы была избёнка ледяная, а у зайца - лубяная.|Пришла весна-красна, у лисы избёнка расстаяла, а у зайца стоит по-старому.',
					time: 40.4535
				},
				{
					text: 'Вот лиса попросилась у него переночевать, да его из избёнки и выгнала!|Идёт дорогой зайчик, плачет. Ему на встречу - собака:|- Тяф-тяф-тяф! Что, зайчик, плачешь?|- Как же мне не плакать? Была у меня избёнка лубяная, а у лисы - ледяная. Попросилась она ко мне ночевать, да меня же и выгнала!|- Гав! Не плачь, зайчик! Я твоему горю помогу!|Подошли они к избёнке, собака забрехала:',
					time: 38.651
				},
				{
					text: '- Тяф-тяф-тяф! Поди, лиса, вон!|А лиса им с печи:|- Как выскочу, как выпрыгну, пойдут клочки по закоулочкам!|Собака испугалась и убежала.|Зайчик опять идёт дорогой, плачет. Ему на встречу - медведь: - О чём, зайчик, плачешь?|- Как же мне не плакать? Была у меня избёнка лубяная, а у лисы - ледяная, попросилась она ко мне ночевать, да меня же и выгнала!|- Не плачь! Я твоему горю помогу!',
					time: 42.673875
				},
				{
					text: '- Нет, не поможешь! Собака гнала - не выгнала и тебе не выгнать!|- Нет, выгоню!|- Подошли они к избёнке, медведь как закричит:|- Поди, лиса, вон!|А лиса им с печи:|- Как выскочу, как выпрыгну, пойдут клочки по закоулочкам!|Медведь испугался и убежал.|Идёт опять зайчик, ему на встречу бык:|- Му-у-у-у! Что, зайчик, плачешь?',
					time: 34.7065
				},
				{
					text: '-Как же мне не плакать? Была у меня избёнка лубяная, а у лисы - ледяная. Попросилась она ко мне ночевать, да меня же и выгнала!|- Му-у-у! Пойдём, я твоему горю помогу!|- Нет, бык, не поможешь! Собака гнала- не выгнала, медведь гнал - не выгнал и тебе не выгнать!|- Нет, выгоню!|Подошли они к избёнке, бык как заревел:|- Поди, лиса, вон!|А лиса им с печи:',
					time: 42.778375
				},
				{
					text: '- Как выскочу, как выпрыгну, пойдут клочки по закоулочкам!|Бык испугался и убежал.|Идёт зайчик опять дорогой, плачет пуще прежнего. Eму на встречу петух с косой:|- Куд-ку-да! O чём, зайчик, плачешь?|- Как же мне не плакать? была у меня избёнка лубяная, а у лисы - ледяная. Попросилась она ко мне переночевать, да меня же и выгнала!- Пойдём, я твоему горю помогу!',
					time: 44.5025
				},
				{
					text: '- Нет, петух, не поможешь! Собака гнала - не выгнала, медведь гнал - не выгнал, бык гнал - не выгнал, и тебе не выгнать!|- Нет, выгоню!|Подошли они к избёнке, петух лапками затопал, крыльями забил:|- Кукареку-у! Иду на пятах, несу косу на плечах,|Хочу лису посечи, слезай, лиса, с печи!|Поди, лиса, вон!|- Обуваюсь!',
					time: 24.989
				},
				{
					text: 'Петух опять:|- Иду на пятах, несу косу на плечах,|Хочу лису посечи, слезай, лиса, с печи!|Поди, лиса, вон!|Лиса опять говорит: Одеваюсь!|Петух в третий раз:|- Кукареку! Иду на пятах,|Несу косу на плечах!...',
					time: 47.689375
				},
				{
					text: 'Лиса без памяти выбежала, петух взмахнул косой - её и след простыл!|И стали они с зайчиком жить-поживать в лубяной избушке.',
					time: 9.7335
				}
			]
		},
		{
			folder: 'zhuravl-i-tsaplya',
			title: {text: 'Журавль и цапля'},
			pages: [
				{
					text: 'Жили-были по разным концам одного болота Журавль и Цапля. Соседствовали по-доброму, в гости наведывались.|Да скучно Журавлю стало в одиночку век коротать, и решил он жениться.|- Пойду-ка я посватаюсь к Цапле! - и пошлёпал по болоту.',
					time: 33.6355
				},
				{
					text: 'Семь верст грязь месил, насилу добрёл. Едва отдышался, и стучит в избушку:|- Цапля, ты дома?|- Дома, где ж мне ещё быть! Ты чего хотел, долговязый?|- Выходи за меня замуж!|Рассмеялась в ответ Цапля:|- Нет, Журавль, не пойду! Ты на себя взгляни: ноги у тебя длинные, одежда короткая. Не пара ты мне! Да и кормить мне тебя нечем.|Так и пошел Журавль домой несолоно хлебавши.',
					time: 42.177625
				},
				{
					text: 'А Цапля задумалась: \'И зачем я его прогнала? Чем одной жить, выйду-ка я за Журавля\'.|И пошла на другой конец болота. Кое-как добралась, стучится:|- Журавушка, возьми меня замуж!|- Ты, одноногая, когда последний раз в зеркало смотрелась? Не хочу я на такой жениться.|Цапля заплакала со стыда и воротилась к себе.',
					time: 38.5465
				},
				{
					text: 'А Журавль спохватился и думает:|\'Зря я Цаплю обидел! Возьму-ка всё-таки её замуж!\'|Приходит и говорит:|- Цапля! Решил я всё же на тебе жениться.|- Убирайся, не хочу я за тебя идти!|С тем и ушёл Журавль.|Цапля размышляет:\'Зря я отказалась. Чего одной-то жить?\'. И вновь пошла к Журавлю свататься, но теперь и он не хочет.',
					time: 36.14325
				},
				{
					text: 'Вот так до сих пор и ходят они по болоту друг за дружкой, да никак не женятся. А всё оттого, что гордыня их замучила.',
					time: 16.49925
				}
			]
		},
		{
			folder: 'zolotoy-topor',
			title: {text: 'Золотой топор'},
			pages: [
				{
					text: 'Однажды пошёл мужик в лес дрова рубить.|Подошёл к озеру, сел на берег и нечаянно уронил топор в воду. Сидит он и плачет. Вдруг из воды выходит чёрт и спрашивает:|- Чего, мужик, плачешь?|- Топор, батюшка, утопил.',
					time: 24.8845
				},
				{
					text: 'Пошёл чёрт в воду и через недолгое время приносит мужику серебряный топор и спрашивает:|- Твой топор?|- Нет, - отвечает мужик, - не мой...|Чёрт снова ушёл в воду. И снова приносит ему топор, теперь - золотой - и спрашивает:|- Твой топор?|- Нет, - овечает мужик, - не мой...',
					time: 29.273125
				},
				{
					text: 'В третий раз чёрт вынес мужику его собственный топор, и спрашивает:|- Твой топор?|- Мой, мой!|Тогда чёрт подарил мужику все три топора.',
					time: 13.756375
				},
				{
					text: 'И пошёл мужик домой с радостью. Пришёл он домой и рассказал всё мужикам.|Тогда одному богатому мужику тоже захотелось получить золотой и серебряный топоры.',
					time: 14.59225
				},
				{
					text: 'Пришёл он к озеру, бросил свой топор в воду, сидит и горюет.|Выходит из воды чёрт, спрашивает:|- Что ты горюешь?|- Да в воду топор потопил.',
					time: 14.8535
				},
				{
					text: 'Ушёл чёрт. Через недолгое время приносит ему серебряный топор и спрашивает:|- Твой топор?|- Мой, мой, чур мой! - закричал мужик.|А чёрт ушёл с топором и больше не вышел из воды.',
					time: 16.9955
				},
				{
					text: 'Так богатый мужик и остался без топора.',
					time: 3.882
				}
			]
		},

		{
			folder: 'kak-lisa-s-ovtsoy-volka-nakazali',
			title: {text: 'Как Лиса с Овцой Волка наказали'},
			pages: [
				{
					text: 'Жила-была у одного крестьянина Овца. Невзлюбил её хозяин, придирками замучил! Решила она уйти из дома.|Шла себе, шла. Повстречалась ей Лиса:|- Ты куда, Овечка, направляешься?|- Да вот, Лисичка-сестричка, ушла я от мужика, житья совсем не стало. Что ни случись: козёл ли сено раскидает, баран ли изгородь повалит, кругом у него я, Овца, виновата.',
					time: 41.602875
				},
				{
					text: '- Ох, и не говори, Овечка-подружка! У меня та же история: сом ли уточку притопит, ястреб курочку прихватит, во всём меня виноватят.|И решили Овца с Лисой вместе держаться: так веселее. Пошли, куда глаза глядят.',
					time: 21.932625
				},
				{
					text: 'А навстречу - Волк-браток, серый хвосток:|- Здорово, подруги! Далеко ли собрались?|- А куда глаза глядят, - отвечает Лиса.|- Ну так, мне как раз по пути! - обрадовался Волк.|И пошли они вместе.',
					time: 15.689375
				},
				{
					text: 'А по дороге Волк и говорит:|- Послушай, Овца, тулупчик-то на тебе - мой!|Услыхала это Лиса, встряла в разговор:|- А точно ли твой?|- Мне ли свой тулупчик не знать!',
					time: 16.264125
				},
				{
					text: '- И поклясться можешь?|- Да запросто! - отвечает Волк. А хитрая Лиса давно приметила, где охотник капкан поставил и указала Волку на едва приметный бугорок:|- Ну тогда прямо здесь целуй присягу!',
					time: 16.211875
				},
				{
					text: 'Волк, не чуя подвоха, ткнулся мордой, куда Лиса велела. Щёлкнул капкан и прихватил Серого.',
					time: 7.304125
				},
				{
					text: 'А подруги убежали подобру-поздорову и решили больше попутчиков с собой не брать.',
					time: 5.998
				}
			]
		},

		{
			folder: 'kot-i-lisa',
			title: {text: 'Кот и лиса'},
			pages: [
				{
					text: 'Был у мужика кот, да такой проказник, просто беда! Снёс его мужик в лес, да там и оставил.',
					time: 15.5065
				},
				{
					text: 'Бродил Кот по лесу и встретил Лису.|- Экий зверь невиданный! - удивилась Лиса.|- Я - Кот Котофеевич, воевода из сибирских лесов! - схитрил Кот.|- Пойдём ко мне жить, Кот Котофеевич! Будешь как сыр в масле кататься, - предложила Лисонька.|И стали они жить вместе.',
					time: 45.9915
				},
				{
					text: 'На другой день повстречала Лиса Волка и позвала его на невиданного зверя посмотреть:|- Кот Котофеевич у меня сердитый, к нему нельзя без подарков идти, - предупредила Лиса Волка.',
					time: 41.341625
				},
				{
					text: 'Потом увидела Лиса Медведя у реки и ему тоже про воеводу из сибирских лесов похвасталась:|- Приготовь что-нибудь в подарок и приходи знакомиться, - позвала она Медведя в гости.',
					time: 38.468125
				},
				{
					text: 'Задрал Волк в подарок Коту барана, а Медведь притащил целого быка.',
					time: 36.14325
				},
				{
					text: 'Вдруг, откуда ни возьмись, бежит Заяц: слух о сибирском воеводе и до него дошёл.|- Ступай, Косой, к Лисе да скажи, что мы давно уж ждём, - наказали Волк и Медведь Зайцу.',
					time: 38.25925
				},
				{
					text: 'На всякий случай решили Медведь и Волк спрятаться. Медведь залез на дерево, а Волк под сухими листьями зарылся.|Вот идут Кот с Лисой. Медведь увидел Кота и зашептал Волку:|- Какой же он маленький!|А Кот заметил принесённые ему подарки, бросился на них и ну рвать мясо зубами и когтями.',
					time: 84.44375
				},
				{
					text: 'Тут Волк стал морду высовывать, чтобы диковинного зверя разглядеть, и зашуршал листьями. Кот подумал было, что это мышь, и вцепился в волчью спину. Волк вскочил и пустился наутёк. А Кот с испугу на дерево прыгнул. Перепугался Медведь, думает, и до него дело дошло. Кинулся он с дерева вниз и побежал прочь.',
					time: 41.655125
				},
				{
					text: '- Ну погодите, задаст вам ещё Кот Котофеевич! - смеялась им вслед Лиса.',
					time: 12.006125
				}
			]
		},
		{
			folder: 'kot-kozyol-da-baran',
			title: {text: 'Кот, козёл и баран'},
			pages: [
				{
					text: 'Жили-были в одном дворе кот, козёл да баран. Жили они дружно: сена клок - и тот пополам. А коль вилы в бок, так одному коту Ваське! Он такой вор и разбойник, кадждый час на промысле, а где что плохо лежит, туда и глядит.|Вот однажды лежат козёл да баран и разговаривают промеж себя. Откуда ни возьмись - котишка-мурлышка, серый лобишко. Идёт и так жалобно плачет. Козёл да баран спрашивают:|- Кот-коток, серенький лобок, о чём ты плачешь, на трёх ногах скачешь?',
					time: 67.516375
				},
				{
					text: 'Отвечает им кот: - Как мне не плакать: била меня баба, била, уши выдирала, ноги поломала, да ещё удавку на меня припасала...|- А за что же на тебя такая беда приключилась? - спрашивают козёл да баран.|- Эх, да за то, что я нечаянно сметанку слизал, - и опять заплакал кот-мурлыка.|- Кот-коток, серый лобок, о чём же ты плачешь?|- Как же мне не плакать? Баба меня била, да приговаривала: \'Придёт ко мне зять, где будет сметанки взять? Придётся колоть козла да барана\'.',
					time: 60.646125
				},
				{
					text: 'Заревели тут козёл да баран:|- Ах ты, серый кот, бестолковый твой лоб! За что нас-то погубил?|Стали втроём думать, как быть и что делать. И порешили всем втроём бежать.|- А что, средний брат баранок, - спрашивает кот-мурлыка, - крепок ли у тебя лоб? Попробуй о ворота!|Баран с разбегу стукнулся о ворота лбом, покачнулись ворота. Поднялся старший брат, козёл, разбежался, ударился лбом и ворота отворились.',
					time: 49.77925
				},
				{
					text: 'Пыль столбом поднимается, трава к земле приклоняется, бегут козёл да баран, а за ними скачет на трёх ногах кот - серый лоб. Устал он и просит названных братьев:|- Старший брат и средний брат! Не оставьте младшего братишку на съедение зверям!|Взял козёл, посадил кота на себя, понеслись они опять по горам, по долам, по сыпучим пескам. Долго бежали, и день, и ночь, пока в ногах сил хватило.',
					time: 57.485375
				},
				{
					text: 'Вот пришли они на скошенное поле, а на том поле стога - что города стоят. Остановились козёл, баран да кот отдыхать, а ночь была осенняя, холодная.|- Где огня добыть? - думают козёл да баран.|А котишка-мурлышка уже добыл бересты, обернул ею козлу рога и велел им с бараном столкнуться рогами. Столкнулись козёл с бараном, да так крепко, что искры из глаз посыпались. Береста так и загорелась.|- Ладно, - сказал серый кот, - теперь обогреемся.',
					time: 48.107375
				},
				{
					text: 'Не успели они обогреться, глядь, приходит к ним незванный гость, Михайло Иванович:|- Пустите, братцы, обогреться да отдохнуть! Что-то мне не можется...|- Добро пожаловать, Михайло Иванович! Откуда, брат, идёшь?|- Ходил на пасеку, подрался с мужиками, оттого и хворь приключилась. Иду к лисе лечиться.|Стали вчетвером тёмную ночь коротать. Медведь под стогом, мурлыка на стогу, а козёл с бараном у огня. Заснули медведь, козёл да баран, дремлют, а котишка-мурлышка один не спит и всё видит.',
					time: 52.3915
				},
				{
					text: 'И видит он, идут семь волков серых, восьмой волк белый, и прямо к огню!|- Фу-фу! - говорит белый волк козлу да барану, - какой-такой народ здесь! Давайте силу пытать!|Заблеяли тут козёл да баран, а котишка - серый лобишко и говорит:|- Ах ты, белый волк, над волками начальник, не серди ты нашего старшого, он уж очень сердит, как расходится, никому не сдобровать! Или не видишь у него бороды? В ней-то и сила! Бородой он зверей побивает, а рогами только кожу снимает.',
					time: 57.589875
				},
				{
					text: 'Лучше с честью подойдите, да попросите: \'Хотим мы с твоим меньшим братишкой поиграть, который под стогом лежит!\'|Волки поклонились козлу, обступили мишку и ну с ним заигрывать. Вот медведь крепился, крепился, и вдруг хвать лапой по волчьей морде! Завыли волки и, пожав хвосты, убежали.',
					time: 30.109
				},
				{
					text: 'А козёл и баран подхватили мурлышку на спину и скорее домой:|- Полно без пути таскаться, ещё не в такую беду попадёшь!|А старик со старухой были рады-радёшеньки, когда козёл с бараном вернулись.',
					time: 39.748125
				}
			]
		},
		{
			folder: 'lisa-i-volk',
			title: {text: 'Лиса и волк'},
			pages: [
				{
					text: 'Сильно проголодалась Лиса. Бежит по дороге и смотрит по сторонам: нельзя ли где-нибудь чем-нибудь съестным разжиться? Видит она: везёт мужичок на санях мёрзлую рыбу.|- Недурно бы рыбки отведать, - подумала Лиса. Забежала вперёд, легла на дорогу, хвост откинула, ноги выпрямила. Ну дохлая, да и полно!',
					time: 30.840375
				},
				{
					text: 'Подъехал мужик, посмотрел на Лису и говорит:|- О! Вот будет славный воротник жене на шубу! - взял Лису за хвост и швырнул её в сани. Закрыл рогожею, а сам пошёл подле лошади.',
					time: 16.9955
				},
				{
					text: 'Недолго лежала Лисонька, проделала в санях дыру и давай в неё рыбу выкидывать: рыбка за рыбкой, так и повыкидала всю. А потом и сама из саней тихонечко вылезла.|Приехал мужик домой, осмотрелся - ни рыбы, ни \'воротника\'!|А Лиса перетаскала всю рыбу себе в нору, потом села у норы и ест. Видит она - бежит Волк, от голода у него бока подвело.|- Здравствуй, кума, ты что это кушаешь?|- Рыбку, куманёк!',
					time: 36.587375
				},
				{
					text: '- Дай мне хоть одну!|- Как же, разивай рот! Видишь, ты какой ловкий! Я ловила, а ты будешь есть!|- Дай хоть головку, кумушка!|- Ни хвостика, куманёк! Налови сам и кушай на здоровье!|- Да как же ты наловила? Научи!|- Изволь! Отыщи на реке прорубь, сунь туда хвост, сиди да приговаривай: \'Ловись, рыбка, большая и маленькая!\' - она и наловится!',
					time: 36.87475
				},
				{
					text: 'Отыскал волк на реке прорубь, сунул туда хвост, сидит и бормочет:|- Ловись, рыбка, большая и маленькая! Нет, лучше ловись большая, да и побольше!|А Лисица прибежала, стала бегать вокруг да приговаривать:|- Ясни, ясни на небе звезды! Мёрзни, мёрзни, волчий хвост!|- Что ты говоришь? - забеспокоился Волк.|- То же, что и ты, куманёк: \'Ловись рыбка, большая и маленькая!\'',
					time: 28.437125
				},
				{
					text: 'Вот опять Волк у проруби сидит, да своё твердит, а Лиса - своё.|- Не пора ли тащить, кумушка?|- Нет ещё, я скажу, когда придёт пора.|Вот опять Волк сидит, да своё приговаривает:|- Ловись, рыбка, большая, да всё же большая!|А Лиса своё:|- Мёрзни, мёрзни, волчий хвост!',
					time: 22.664125
				},
				{
					text: 'Видит Лиса, что прорубь хорошо замёрзла, и говорит:|- Ну, теперь тащи, куманёк!|Потянул Волк: \'Ээээ-х!\' Но не тут-то было.|- Видишь, какой ты жадный! - говорит Лиса, - твердил: \'Ловись, рыбка, большая, да всё же большая!\'|A теперь и не вытащишь! Ну, погоди же, я позову к тебе на помощь!',
					time: 25.929375
				},
				{
					text: 'Побежала Лиса в село, да давай под окнами кричать:|- Идите на реку, Волка бить! Он ко льду примёрз!|Бегут на реку мужики, кто с топором, а кто с вилами:|- Лови его, держи! Лопатой его бей!',
					time: 23.00375
				},
				{
					text: 'Видит Волк беду неминучую. Рванулся изо всех сил, оторвал себе хвост, да без хвоста пустился удирать, куда видно. А кумушка ему вслед кричит:|- Вортись, куманёк, рыбку позабыл!|А Волка только и видели.',
					time: 21.436375
				}
			]
		},
		{
			folder: 'petushok-zolotoy-grebeshok',
			title: {text: 'Петушок — золотой гребешок'},
			pages: [
				{
					text: 'Жили-были кот, дрозд да петушок - золотой гребешок. Жили они в лесу, в избушке. Кот да дрозд ходят в лес дрова рубить, а петушка одного оставляют. Уходят - строго наказывают:',
					time: 22.58575
				},
				{
					text: '- Мы пойдем далеко, а ты оставайся домовничать, да голоса не подавай. Когда придёт лиса, в окошко не выглядывай.|Проведала лиса, что кота и дрозда дома нет, прибежала к избушке, села под окошко и запела:|- Петушок, петушок,|Золотой гребешок,|Масляна головушка,|Шелкова бородушка,|Выгляни в окошко,|Дам тебе горошку.',
					time: 29.9
				},
				{
					text: 'Петушок и выставил голову в окошко. Лиса схватила его в когти, понесла в свою нору. Закричал петушок:|- Несёт меня лиса|За тёмные леса,|За быстрые реки,|За высокие горы...|Кот и дрозд, спасите меня...',
					time: 19.60775
				},
				{
					text: 'Кот и дрозд услыхали, бросились в погоню и отняли у лисы петушка.|В другой раз кот и дрозд пошли в лес дрова рубить и опять наказывают:|- Ну, теперь, петушок, не выглядывай в окошко, мы ещё дальше пойдём, не услышим твоего голоса.|Они ушли, а лиса опять прибежала к избушке и запела:',
					time: 25.537625
				},
				{
					text: '- Петушок, петушок,|Золотой гребешок,|Масляна головушка,|Шелкова бородушка,|Выгляни в окошко,|Дам тебе горошку.|Петушок сидит, помалкивает. А лиса - опять:|- Бежали ребята,|Рассыпали пшеницу,|Курицы клюют,|Петухам не дают...',
					time: 19.033125
				},
				{
					text: 'Петушок и выставил головку в окошко:|- Ко-ко-ко! Как не дают?|Лиса схватила его в когти, понесла в свою нору. Закричал петушок:|- Несёт меня лиса|За тёмные леса,|За быстрые реки,|За высокие горы...|Кот и дрозд, спасите меня...',
					time: 21.4625
				},
				{
					text: 'Кот и дрозд услыхали, бросились в погоню. Кот бежит, дрозд летит... Догнали лису - кот дерёт, дрозд клюёт, и отняли петушка.|Долго ли, коротко ли, опять собрались кот да дрозд в лес дрова рубить. Уходя, строго-настрого наказывали петушку:|- Не слушай лисы, не выглядывай в окошко, мы ещё дальше уйдём, не услышим твоего голоса.|И пошли кот да дрозд далеко в лес дрова рубить.|А лиса тут как тут - села под окошечко и поёт:',
					time: 40.0355
				},
				{
					text: '- Петушок, петушок,|Золотой гребешок,|Масляна головушка,|Шелкова бородушка,|Выгляни в окошко,|Дам тебе горошку.|Петушок сидит, помалкивает. А лиса - опять:|- Бежали ребята,|Рассыпали пшеницу,|Курицы клюют,|Петухам не дают...',
					time: 20.260875
				},
				{
					text: 'Петушок всё помалкивает. А лиса - опять:|- Люди бежали,|Орехов насыпали,|Куры-то клюют,|Петухам не дают...|Петушок и выставил головку в окошко:|- Ко-ко-ко! Как не дают?',
					time: 17.46575
				},
				{
					text: 'Лиса схватила его в когти и понесла в свою нору, за тёмные леса, за быстрые реки, за высокие горы...',
					time: 9.393875
				},
				{
					text: 'Сколько петушок ни кричал, ни звал - кот и дрозд не услышали его. А когда вернулись домой - петушка-то нет.|Побежали кот и дрозд по лисициным следам. Кот бежит, дрозд летит... Прибежали к лисициной норе.',
					time: 18.406125
				},
				{
					text: 'Кот настроил гусельки и давай натренькивать:|- Трень, брень, гусельцы,|Золотые струночки...|Ещё дома ли Лисафья-кума,|Во своем ли тёплом гнёздышке?',
					time: 27.131
				},
				{
					text: 'Лисица слушала, слушала и думает:|\'Дай-ка посмотрю - кто это так хорошо на гуслях играет, сладко напевает\'. Взяла да и вылезла из норы. Кот и дрозд ее схватили - и давай бить-колотить. Били и колотили, покуда она ноги не унесла.',
					time: 20.6265
				},
				{
					text: 'Взяли они петушка, посадили в лукошко и принесли домой.|И с тех пор стали жить да быть, да и теперь живут.',
					time: 11.039625
				}
			]
		},
		{
			folder: 'zimove-zverey',
			title: {text: 'Зимовье зверей'},
			pages: [
				{
					text: 'Надумали бык, баран, свинья, кот да петух жить в лесу.',
					time: 11.06575
				},
				{
					text: 'Хорошо летом в лесу, привольно. Быку и барану травы вволю, кот ловит мышей, петух собирает ягоды, червяков клюёт, свинья под деревьями корешки да жёлуди роет. Только худо бывало друзьям, ежели дождик пойдёт.|Так лето прошло, наступила поздняя осень. Стало в лесу холодать. Бык прежде всех спохватился зимовье стороить.',
					time: 30.187375
				},
				{
					text: 'Встретил в лесу барана:|- Давай, друг, зимовье строить! Я стану из леса брёвна носить, да столбы тесать, а ты будешь щепу драть.|- Ладно, согласен, - отвечает баран.|Повстречали бык и баран свинью:|- Пойдём, Хавроньюшка, с нами, зимовье строить! Мы станем брёвна носить, столбы тесать, щепу драть, а ты будешь глину месить, кирпичи делать, печку класть!|Согласилась и свинья. Увидели бык, баран и свинья кота:|- Здравствуй, Котофеевич, пойдём вместе зимовье строить!',
					time: 54.429
				},
				{
					text: 'Мы станем брёвна носить, столбы тесать, щепу драть, глину месить, кирпичи делать, печку класть, а ты будешь мох таскать, стены конопатить!|Согласился и кот. Повстречали бык, баран, свинья и кот в лесу петуха:|- Здравствуй, Петя! Идём с нами, зимовье строить! Мы будем брёвна носить, столбы тесать, щепу драть, глину месить, кирпичи делать, печку класть, мох таскать, стены конопатить, а ты будешь крышу крыть!|Согласился и петух.',
					time: 53.697625
				},
				{
					text: 'Выбрали друзья в лесу место посуше, наносили брёвен, натесали столбов, щепы надрали, наделали кирпечей, моху натаскали, стали рубить избу. Избу срубили, печку сложили, стены проконопатили, крышу покрыли. Наготовили на зиму запасов и дров.',
					time: 27.8625
				},
				{
					text: 'Пришла лютая зима, затрещал мороз. Иному в лесу холодно, а друзьям в зимовье тепло! Бык и баран на полу спят, свинья забралась в подполье, кот на печи песни поёт, а петух под потолком на жёрдочке пристроился. Живут друзья, не горюют.',
					time: 21.175125
				},
				{
					text: 'А бродили по лесу семь голодных волков. Увидели новое зимовье. Один, самый смелый волк, говорит:|- Пойду-ка я, братцы, посмотрю, кто в этом зимовье живёт. Если скоро не вернусь, прибегайте на выручку!|Вошёл волк в зимовье и прямо на барана угодил. Барану деваться некуда, забился баран в угол, заблеял страшным голосом:|- Мееееее! Мееееее!',
					time: 32.82575
				},
				{
					text: 'Петух увидел волка, слетел с жёрдочки, крыльями захлопал:|- Кукарекуууууууу!|Соскочил кот с печи, зафыркал, замяукал:|- Мяууууууу, мяууууууу, мяууууууууууу!|Набежал бык, рогами волка в бок:|- Мууууууууу!|А свинья услыхала, что наверху бой идёт, вылезла из подполья и кричит:|- Хрююю, хрююю, хрююю!!! Кого тут съесть?!',
					time: 31.728625
				},
				{
					text: 'Ох, и туго пришлось волку! Едва жив из беды вырвался. Бежит, товарищам кричит:|- Ой, братцы, уходите! Ой, братцы, бегите! Уууууууу.......|Услыхали волки, пустились наутёк. А звери остались жить-зимовать, да и сейчас живут.',
					time: 26.97425
				}
			]
		},
		{
			folder: 'nesmeyana-tsarevna',
			title: {text: 'Несмеяна-царевна'},
			pages: [
				{
					text: 'Как подумаешь, куда велик божий свет! Живут в нем люди богатые и бедные, и всем им просторно, и всех их призирает и рассуждает господь. Живут роскошные — и празднуют; живут горемычные — и трудятся; каждому своя доля!|В царских палатах, в княжьих чертогах, в высоком терему красовалась Несмеяна-царевна. Какое ей было житье, какое приволье, какое роскошье! Всего много, все есть, чего душа хочет; а никогда она не улыбалась, никогда не смеялась, словно сердце ее ничему не радовалось. Горько было царю-отцу глядеть на печальную дочь.',
					time: 36.796375
				},
				{
					text: 'Открывает он свои царские палаты для всех, кто пожелает быть его гостем.|- Пускай,- говорит,- пытаются развеселить Несмеяну-царевну; кому удастся, тому она будет женою.|Только это вымолвил, как закипел народ у княжьих ворот! Со всех сторон едут, идут - и царевичи и княжевичи, и бояре и дворяне, полковые и простые; начались пиры, полились меды — царевна все не смеется.|На другом конце в своем уголке жил честной работник; по утрам он двор убирал, вечерами скот пасал, в беспрестанных был трудах.',
					time: 45.051
				},
				{
					text: 'Хозяин его - человек богатый, правдивый, платою не обижал. Только покончился год, он ему мешок денег на стол:|- Бери,- говорит,- сколько хочешь!|А сам в двери и вышел вон.|Работник подошел к столу и думает: как бы перед богом не согрешить, за труды лишнего не положить? Выбрал одну только денежку, зажал ее в горсть да вздумал водицы напиться, нагнулся в колодезь - денежка у него выкатилась и потонула на дно. Остался бедняк ни при чем. Другой бы на его месте заплакал, затужил и с досады б руки сложил, а он нет.',
					time: 43.744875
				},
				{
					text: '- Все,- говорит,- бог посылает; господь знает, кому что давать: кого деньгами наделяет, у кого последние отнимает. Видно, я худо рачил, мало трудился, теперь стану усердней!|И снова за работу - каждое дело в его руках огнем горит!|Кончился срок, минул еще год, хозяин ему мешок денег на стол:|- Бери,- говорит,- сколько душа хочет!|А сам в двери и вышел вон.|Работник опять думает, чтоб бога не прогневить, за труд лишнего не положить; взял денежку, пошел напиться и выпустил невзначай из рук - денежка в колодезь и потонула.|Еще усерднее принялся он за работу, ночь недосыпает, день недоедает.',
					time: 45.7825
				},
				{
					text: 'Поглядишь: у кого хлеб сохнет, желтеет, а у его хозяина все бутеет; чья скотина ноги завивает, а его по улице брыкает; чьих коней под гору тащат, а его и в поводу не сдержать. Хозяин разумел, кого благодарить, кому спасибо говорить.|Кончился срок, миновал третий год, он кучу денег на стол:|- Бери, работничек, сколько душа хочет; твой труд, твоя и деньга!|А сам вышел вон.|Берет работник опять одну денежку, идет к колодезю воды испить — глядь: последняя деньга цела, и прежние две наверх выплыли. Подобрал он их, догадался, что бог его за труды наградил; обрадовался и думает:',
					time: 52.02575
				},
				{
					text: '\'Пора мне бел свет поглядеть, людей распознать!\'|Подумал и пошел куда глаза глядят. Идет он полем, бежит мышь:|- Ковалек, дорогой куманек! Дай денежку; я тебе сама пригожусь!|Дал ей денежку. Идет лесом, ползет жук:|- Ковалек, дорогой куманек! Дай денежку; я тебе сам пригожусь!|Дал и ему денежку. Поплыл рекой, встрелся сом:|- Ковалек, дорогой куманек! Дай денежку; я тебе сам пригожусь!',
					time: 35.568625
				},
				{
					text: 'Он и тому не отказал, последнюю отдал. Сам пришел в город; там людей, там дверей! Загляделся, завертелся работник на все стороны, куда идти — не знает. А перед ним стоят царские палаты, сребром-золотом убраты, у окна Несмеяна-царевна сидит и прямо на него глядит. Куда деваться? Затуманилось у него в глазах, нашел на него сон, и упал он прямо в грязь.|Откуда ни взялся сом с большим усом, за ним жучок-старичок, мышка-стрижка; все прибежали. Ухаживают, ублаживают: мышка платьице снимает, жук сапожки очищает, сом мух отгоняет.',
					time: 49.962
				},
				{
					text: 'Глядела, глядела на их услуги Несмеяна-царевна и засмеялась.|-Кто, кто развеселил мою дочь? — спрашивает царь. Тот говорит: \'Я\'; другой: \'Я\'.|- Нет! - сказала Несмеяна-царевна. - Вон этот человек! - И указала на работника.',
					time: 21.645375
				},
				{
					text: 'Тотчас его во дворец, и стал работник перед царским лицом молодец-молодцом! Царь свое царское слово сдержал; что обещал, то и даровал.|Я говорю: не во сне ли это работнику снилось? Заверяют, что нет, истинная правда была,— так надо верить.',
					time: 23.65675
				}
			]
		},
		{
			folder: 'kroshechka-khavroshechka',
			title: {text: 'Крошечка-Хаврошечка'},
			pages: [
				{
					text: 'Разные на свете люди живут: и хорошие встречаются, и не очень, а бывают и такие, о которых и говорить не хочется. Вот к ним-то и угодила Крошечка-Хаврошечка, когда сиротой осталась. Взяли эти люди её к себе в дом, вырастили, выкормили. Одно плохо - совсем работой замучили. \'Пряжу спряди, за скотиной пригляди, дом прибери да обед свари\' - и всё на ней.',
					time: 35.150625
				},
				{
					text: 'А у хозяйки её были три родные дочери: Однолглазка, Двухглазка и Трёхглазка. Лентяйки - каких свет не видывал, только и делали, что на лавочке сидели да на улицу глядели. И сколько бы Хаврошечка на них не работала, сестрицы лишь журят и словом добрым не одарят.',
					time: 31.624125
				},
				{
					text: 'Одна отрада у Крошечки-Хаврошечки - её коровушка. Выгонит она свою Пеструху на луг пастись, обнимет её за шейку и плачется о своём житье-бытье:|- Матушка-коровушка, тяжка моя долюшка, работою морят, не кормят, не поят, только ругают да плакать не дозваляют. К завтрему мне велено пять пудов холста наткать, отбелить да в скатки скатать...!|А Пеструха ей отвечает:|- Это горе - не беда! Влезь ко мне в правое ушко, а из левого вылезь, а остальное - не твоя печаль.',
					time: 40.322875
				},
				{
					text: 'Оно и в самом деле так вышло: влезла Хаврошечка коровушке в правое ушко, из левого вылезла... Глядит: холсты уже сотканы и отбелены, и в скатки скатаны; осталось только собрать их и домой отнести.|Хозяйка посмотрела, поворчала, да делать нечего. Спрятала холсты в сундук, а Крошечке-Хаврошечке повелела вдвое больше сделать.|На другой день снова пошла девушка к своей коровушке, обняла её, ласковые слова прошептала. Затем в правое ушко влезла, из левого вылезла, подобрала готовые холсты и хозяйке принесла.',
					time: 25.224125
				},
				{
					text: 'А ту любопытство обуяло: кликнула она старшую дочь Одноглазку и велела досмотреть, как это у сироты ловко получается?|Вот пошла Крошечка-Хаврошечка на лужок, Одноглазка - за ней. А кругом - благодать: птички напевают, солнышко припекает. Позабыла Одноглазка матушкин наказ, прилегла на травку. А крошечка-Хаврошечка приговаривает:|- Спи, глазок, усни, глазок! Спи, глазок, усни, глазок!|Одноглазка глазок прикрыла, да и заснула. За это время коровушка холсты соткала, отбелила и в скатки скатала. Взяла их Хаврошечка и домой принесла.',
					time: 37.58
				},
				{
					text: 'Ничего хозяйка не узнала и среднюю дочь, Двухглазку, посылает:|- Дочь моя, голубушка, за Хаврошечкой иди, да внимательно гляди, кто сироте помагает, холсты ткёт и в скатки катает!|Отправилась Двухглазка за Крошечкой-Хаврошечкой. Да на солнце напеклась, на лугу улеглась, про матушкин наказ забыла. А Крошечка-Хаврошечка знай припевает:|- Спи, глазок, усни, другой! Спи, глазок, усни, другой!|Оба глаза у Двухглазки сном заволокло, а коровушка всё сделала, что велено было. Собрала Хаврошечка холсты и домой отнесла.',
					time: 28.045375
				},
				{
					text: 'В конец осерчала хозяйка и на третий день послала она младшую дочь Трёхглазку, строго-настрого наказав той не спать.|Снова пошли они на луг. Трёхглазка венков наплела и на траву прилегла. Солнышко её разморило, а Хаврошечка знай баюкает:|- Спи, глазок, усни, другой! Спи, глазок, усни, другой!|А про третий-то и забыла! Вот смежились два глаза у Трёхглазки, а оставшийся увидел, как Крошечка-Хаврошечка в правое ушко коровушке влезла, из левого вылезла, а к тому времени и холсты готовые появились!',
					time: 39.095125
				},
				{
					text: 'Прибежала Трёхглазка домой и про всё матери доложила. Старуха от радости аж помолодела, прибежала к мужу и велит:|- Режь Пеструху!|Обомлел старик, заспорил было:|- Ты, старая, не с ума ли сошла, лучшую корову под нож пускать?|А та на своём стоит:|- Режь и всё тут!|Сдался старик, взял узелок, пошёл нож править.',
					time: 19.686125
				},
				{
					text: 'Прознала про то Крошечка-Хаврошечка, кинулась к Коровушке, заплакала:|- Матушка-коровушка, хочет старуха тебя на мясо пустить!|А Пеструха её говорит:|- Не плачь, милая моя, а зарежут коль меня, мясо моё не ешь. Ну а косточки сперва в узелочек завяжи, и в саду похорони. Про меня не забывай, кождое утро поливай.|Когда зарезали Пеструху, Крошечка-Хаврошечка все заветы коровушки выполнила, хоть и голодала, а мяса её не ела.',
					time: 29.273125
				},
				{
					text: 'Косточки в платочек схоронила, в саду зарыла и каждое утро водой кропила.|И много ли времени прошло, выросла на том месте яблоня, да такая, каких свет не видывал! Золотая листва шумит, серебряные ветви гнутся под тяжестью наливных яблок. Всяк, кто ни пройдёт - залюбуется, кто ни проедет - остановится.|Однажды гуляли старухины дочери по саду и случилось так, что проезжал мимо в это время добрый молодец - статный, красивый, сильный.',
					time: 35.438
				},
				{
					text: 'Увидал в саду чудо-яблоню, стал с девушками заигрывать:|- Девицы-красавицы, а которая всех резвей? В жёны ту возьму из вас, кто мне яблочко подаст!|Одноглазка, Двухглазка и Трёхглазка кинулись к яблоне наперегонки, да не тут-то было! Вроде только что под руками висели яблочки, но ветки вдруг поднялись и оказались плоды высоко над головами. Хотели сёстры их сбить - листья в глаза сыплются. Пробовали на ветви залезть - сучья за косы цыпляют. Как ни бились, не метались, только попусоту старались!',
					time: 25.772625
				},
				{
					text: 'Вышла тут в сад Крошечка-Хаврошечка. Ветви сразу к ней склонились, яблочки в ладони опустились. Угостила она добра молодца, женился он на ней, как обещано было. И с той поры они живут-поживают, да печали не знают.',
					time: 14.200375
				}
			]
		},
		{
			folder: 'sivka-burka',
			title: {text: 'Сивка-Бурка'},
			pages: [
				{
					text: 'Жил-был старик, у него было три сына. Старшие занимались хозяйством, были тороваты и щеголеваты, а младший, Иван-дурак, был так себе - любил в лес ходить по грибы, а дома все больше на печи сидел. Пришло время старику умирать, вот он и наказывает сыновьям:|- Когда помру, вы три ночи подряд ходите ко мне на могилу, приносите мне хлеба.|Старика этого схоронили.',
					time: 54.611875
				},
				{
					text: 'Приходит ночь, надо большому брату идти на могилу, а ему не то лень, не то боится, он и говорит младшему брату:|- Ваня, замени меня в эту ночь, сходи к отцу на могилу. Я тебе пряник куплю.|Иван согласился, взял хлеба, пошел к отцу на могилу. Сел, дожидается...',
					time: 23.029875
				},
				{
					text: 'В полночь земля расступилась, отец поднимается из могилы и говорит:|- Кто тут? Ты ли, мой больший сын? Скажи, что делается на Руси: собаки ли лают, волки ли воют, или чадо мое плачет?|Иван отвечает:|- Это я, твой сын. А на Руси все спокойно.|Отец наелся хлеба и лег в могилу. А Иван направился домой, дорогой набрал грибов.|Приходит - старший сын его спрашивает:|- Видел отца?|- Видел.|- Ел он хлеб?|- Ел. Досыта наелся.',
					time: 41.05425
				},
				{
					text: 'Настала вторая ночь. Надо идти среднему брату, а ему не то лень, не то боится, он и говорит:|- Ваня, сходи за меня к отцу. Я тебе лапти сплету.|- Ладно.|Взял Иван хлеба, пошел к отцу на могилу, сел, дожидается.',
					time: 17.57025
				},
				{
					text: 'В полночь земля расступилась, отец поднимается и спрашивает:|- Кто тут? Ты ли, мой средний сын? Скажи, что делается на Руси, собаки ли лают, волки ли воют, или мое чадо плачет?|Иван отвечает:|- Это я, твой сын. А на Руси все спокойно.|Отец наелся хлеба и лег в могилу. А Иван пошел домой, дорогой опять набрал грибов.|Средний брат его спрашивает:|- Отец ел хлеб?|- Ел. Досыта наелся.',
					time: 35.673125
				},
				{
					text: 'На третью ночь настала очередь идти Ивану. Он говорит братьям:|- Я две ночи ходил. Ступайте теперь вы к отцу на могилу, а я отдохну.|Братья ему отвечают:|- Что ты, Ваня, тебе стало там знакомо, иди лучше ты.|- Ну ладно.|Иван взял хлеба, пошел.',
					time: 26.11225
				},
				{
					text: 'В полночь земля расступается, отец поднялся из могилы:|- Кто тут? Ты ли, мой младший сын Ваня? Скажи, что делается на Руси, собаки ли лают, волки ли воют, или чадо мое плачет?|Иван отвечает:|- Здесь твой сын Ваня. А на Руси все спокойно.|Отец наелся хлеба и говорит ему:|- Один ты исполнил мой наказ, не побоялся три ночи ходить ко мне на могилу.',
					time: 30.291875
				},
				{
					text: 'Выдь в чистое поле и крикни: \'Сивка-Бурка, вещая каурка, стань передо мной, как лист перед травой!\' Конь к тебе прибежит, ты залезь ему в правое ухо, а вылезь в левое. Станешь куда какой молодец. Садись на коня и поезжай.|Иван взял узду, поблагодарил отца и пошел домой, дорогой опять набрал грибов.|Дома братья его спрашивают:|- Видел отца?|- Видел.|- Ел он хлеб?|- Отец наелся досыта и больше не велел приходить.',
					time: 41.05425
				},
				{
					text: 'В это время царь кликнул клич всем добрым молодцам, холостым, неженатым, съезжаться на царский двор. Дочь его, Несравненная Красота, велела построить себе терем о двенадцати столбах, о двенадцати венцах. В этом тереме она сядет на самый верх и будет ждать, кто бы с одного лошадиного скока доскочил до нее и поцеловал в губы. За такого наездника, какого бы роду он ни был, царь отдаст в жены свою дочь, Несравненную Красоту, и полцарства в придачу.|Услышали об этом Ивановы братья и говорят между собой:|- Давай попытаем счастья.|Вот они добрых коней овсом накормили, выводили, сами оделись чисто, кудри расчесали. А Иван сидит на печи за трубой и говорит им:|- Братья, возьмите меня с собой счастья попытать!|- Дурак, запечина! Ступай лучше в лес за грибами, нечего людей смешить.',
					time: 80.3425
				},
				{
					text: 'Братья сели на добрых коней, шапки заломили, свистнули, гикнули - только пыль столбом. А Иван взял узду и пошел в чистое поле. Вышел в чистое поле и крикнул, как отец его учил:|- Сивка-Бурка, вещая каурка, стань передо мной, как лист перед травой!|Откуда ни возьмись конь бежит, земля дрожит, из ноздрей пламя пышет, из ушей дым столбом валит. Стал как вкопанный и спрашивает:|- Чего велишь?|Иван коня погладил, взнуздал, влез ему в правое ухо, а в левое вылез и сделался таким молодцом, что ни вздумать, ни взгадать, ни пером написать. Сел на коня и поехал на царский двор. Сивка-Бурка бежит, земля дрожит, горы-долы хвостом застилает, пни-колоды промеж ног пускает.',
					time: 61.220875
				},
				{
					text: 'Приезжает Иван на царский двор, а там народу видимо-невидимо. В высоком тереме о двенадцати столбах, о двенадцати венцах на самом верху в окошке сидит царевна Несравненная Красота. Царь вышел на крыльцо и говорит:|- Кто из вас, молодцы, с разлету на коне доскочит до окошка да поцелует мою дочь в губы, за того отдам ее замуж и полцарства в придачу.|Тогда добрые молодцы начали скакать. Куда там - высоко, не достать! Попытались Ивановы братья, до середины не доскочили.|Дошла очередь до Ивана. Он разогнал Сивку-Бурку, гикнул, ахнул, скакнул - двух венцов только не достал. Взвился опять, разлетелся в другой раз - одного венца не достал. Еще завертелся, закружился, разгорячил коня и дал рыскача - как огонь, пролетел мимо окошка, поцеловал царевну Несравненную Красоту в сахарные уста, а царевна ударила его кольцом в лоб, приложила печать.',
					time: 83.9735
				},
				{
					text: 'Тут весь народ закричал:|- Держи, держи его!|А его и след простыл.|Прискакал Иван в чистое поле, влез Сивке-Бурке в левое ухо, а Из правого вылез и сделался опять Иваном-дураком. Коня пустил, а сам пошел домой, по дороге набрал грибов. Обвязал лоб тряпицей, залез на печь и полеживает.|Приезжают его братья, рассказывают, где были и что видели.|- Были хороши молодцы, а один лучше всех - с разлету на коне царевну в уста поцеловал. Видели, откуда приехал, а не видели, куда уехал.|Иван сидит за трубой и говорит:|- Да не я ли это был?',
					time: 50.01425
				},
				{
					text: 'Братья на него рассердились:|- Дурак - дурацкое и орет! Сиди на печи да ешь свои грибы.|На другой день царь зовет к себе на пир всех бояр и князей и простых людей, и богатых и нищих, и старых и малых. Ивановы братья стали собираться к царю на пир. Иван им говорит:|- Возьмите меня с собой!|- Куда тебе, дураку, людей смешить! Сиди на печи да ешь свои грибы.|Иван потихоньку развязал тряпицу на лбу, где его царевна кольцом ударила,- избу огнем осветило. Братья испугались, закричали:|- Что ты, дурак, делаешь? Избу сожжешь!|Братья сели на добрых коней и поехали, а Иван пошел пешком.',
					time: 53.279625
				},
				{
					text: 'Приходит к царю на пир и сел в дальний угол.|Царевна Несравненная Красота начала гостей обходить. Подносит чашу с медом и смотрит, у кого на лбу печать.|Обошла она всех гостей, подходит к Ивану, и у самой сердце так и защемило. Взглянула на него - он весь в саже, волосы дыбом. Царевна Несравненная Красота стала его спрашивать:|- Чей ты? Откуда? Для чего лоб завязал?|- Ушибся.',
					time: 35.307375
				},
				{
					text: 'Царевна ему лоб развязала - вдруг свет по всему дворцу. Она и вскрикнула:|- Это моя печать! Вот где мой суженый!|Царь подходит и говорит:|- Какой это суженый! Он дурной, весь в саже.|Иван говорит царю:|- Дозволь мне умыться.|Царь дозволил.',
					time: 23.996375
				},
				{
					text: 'Иван вышел на двор и крикнул, как его отец учил:|- Сивка-Бурка, вещая каурка, стань передо мной, как лист перед травой!|Откуда ни возьмись конь бежит, земля дрожит, из ноздрей пламя пышет, из ушей дым столбом валит. Иван ему в правое ухо влез, из левого вылез и сделался опять таким молодцом, что ни вздумать, ни взгадать, ни пером написать. Весь народ так и ахнул.|Разговоры тут были коротки: веселым пирком да за свадебку.',
					time: 57.276375
				}
			]
		},
		{
			folder: 'gusi-lebedi',
			title: {text: 'Гуси-лебеди'},
			pages: [
				{
					text: 'Жили мужик да баба. У них была дочка да сынок маленький.|- Доченька, - говорила мать, - мы пойдем на работу, береги братца. Не ходи со двора, будь умницей - мы купим тебе платочек.|Отец с матерью ушли, а дочка позабыла, что ей приказывали: посадила братца на травке под окошко, сама побежала на улицу, заигралась, загуляла. Налетели гуси-лебеди, подхватили мальчика, унесли на крыльях.',
					time: 37.815125
				},
				{
					text: 'Вернулась девочка, глядь - братца нету! Ахнула, кинулась туда-сюда - нету! Она его кликала, слезами заливалась, причитывала, что худо будет от отца с матерью, - братец не откликнулся.|Выбежала она в чистое поле и только видела: метнулись вдалеке гуси-лебеди и пропали за темным лесом. Тут она догадалась, что они унесли ее братца: про гусей-лебедей давно шла дурная слава - что они пошаливали, маленьких детей уносили.',
					time: 39.3825
				},
				{
					text: 'Бросилась девочка догонять их. Бежала, бежала, увидела - стоит печь:|- Печка, печка, скажи, куда гуси-лебеди полетели?|Печка ей отвечает:|- Съешь моего ржаного пирожка - скажу.|- Стану я ржаной пирог есть! У моего батюшки и пшеничные не едятся...|Печка ей не сказала.Побежала девочка дальше - стоит яблоня:',
					time: 28.9335
				},
				{
					text: '- Яблоня, яблоня, скажи, куда гуси-лебеди полетели?|- Поешь моего лесного яблочка - скажу.|- У моего батюшки и садовые не едятся... Яблоня ей не сказала.|Побежала девочка дальше. Течет молочная река в кисельных берегах:|- Молочная река, кисельные берега, куда гуси-лебеди полетели?|- Поешь моего простого киселька с молочком - скажу.|- У моего батюшки и сливочки не едятся...|Долго она бегала по полям, по лесам. День клонится к вечеру, делать нечего - надо идти домой.',
					time: 43.144125
				},
				{
					text: 'Вдруг видит - стоит избушка на курьей ножке, об одном окошке, кругом себя поворачивается. В избушке старая баба Яга прядет кудель. А на лавочке сидит братец, играет серебряными яблочками. Девочка вошла в избушку:|- Здравствуй, бабушка!|- Здравствуй, девица! Зачем на глаза явилась?|- Я по мхам, по болотам ходила, платье измочила, пришла погреться.|- Садись покуда кудель прясть.|Баба-яга дала ей веретено, а сама ушла.',
					time: 42.85675
				},
				{
					text: 'Девочка прядет - вдруг из-под печки выбегает мышка и говорит ей:|- Девица, девица, дай мне кашки, я тебе добренькое скажу. Девочка дала ей кашки, мышка ей сказала:|- Баба-яга пошла баню топить. Она тебя вымоет-выпарит, в печь посадит, зажарит и съест, сама на твоих костях покатается.|Девочка сидит ни жива ни мертва, плачет, а мышка ей:|- Не дожидайся, бери братца, беги, а я за тебя кудель попряду.|Девочка взяла братца и побежала. А баба-яга подойдет к окошку и спрашивает:|- Девица, прядешь ли?',
					time: 41.15875
				},
				{
					text: 'Мышка ей отвечает:|- Пряду, бабушка...|Баба-яга баню вытопила и пошла за девочкой. А в избушке нет никого. Баба-яга закричала:|- Гуси-лебеди! Летите в погоню! Сестра братца унесла!|Сестра с братцем добежала до молочной реки. Видит - летят гуси-лебеди.|- Речка, матушка, спрячь меня!|- Поешь моего простого киселька.|Девочка поела и спасибо сказала. Река укрыла ее под кисельным бережком.',
					time: 36.45675
				},
				{
					text: 'Гуси-лебеди не увидали, пролетели мимо. Девочка с братцем опять побежали. А гуси-лебеди воротились навстречу, вот-вот увидят. Что делать? Беда! Стоит яблоня:|- Яблоня, матушка, спрячь меня!|- Поешь моего лесного яблочка.|Девочка поскорее съела и спасибо сказала. Яблоня ее заслонила ветвями, прикрыла листами. Гуси-лебеди не увидали, пролетели мимо. Девочка опять побежала. Бежит, бежит, уж недалеко осталось. Тут гуси-лебеди увидали ее, загоготали - налетают, крыльями бьют, того гляди, братца из рук вырвут.',
					time: 44.45025
				},
				{
					text: 'Добежала девочка до печки:|- Печка, матушка, спрячь меня!|- Поешь моего ржаного пирожка.|Девочка скорее - пирожок в рот, а сама с братцем в печь, села в устьице. Гуси-лебеди полетали-полетали, покричали-покричали и ни с чем улетели к бабе-яге. Девочка сказала печи спасибо и вместе с братцем прибежала домой. А тут и отец с матерью пришли.',
					time: 31.258375
				}
			]
		},
		{
			folder: 'kak-lisa-letat-uchilas',
			title: {text: 'Как лиса летать училась'},
			pages: [
				{
					text: 'Повстречались как-то раз Лиса и Журавль:|- Как дела, Лиса-кума?|- Да всё бы хорошо, куманёк, да вот летать я не умею...|- Так давай я тебя научу! Садись верхом!|Уселась лиса на Журавля, поднялись они высоко в небо. Земля внизу - меньше горошины!|- Ну что, кума, готова?|- Да уж готова, а как летать-то?|- А вот прямо так и лети! - сказал Журавль и сбросил Лису со спины. Та камнем полетела вниз, хорошо ещё, что в стог сена угодила.',
					time: 44.0845
				},
				{
					text: 'Журавль следом спустился:|- Ну что, кума, научилась летать?|- Ой, летать-то вроде бы летаю, только садиться тяжело!|- Ну раз так, влезай снова! Теперь посадку отрабатывать будем.|Кое-как, кряхтя и охая, взгромоздилась Лиса Журавлю на спину. Унёс он её выше прежнего, аж под самые облака, и опять сбросил вниз.|На этот раз угодила Лиса в болото, по самую шею увязла, насилу выбралась.|А летать так и не научилась.',
					time: 38.5465
				}
			]
		},
		{
			folder: 'kak-muzhik-gusey-delil',
			title: {text: 'Как мужик гусей делил'},
			pages: [
				{
					text: 'Жила-была бедная семья. Детей - семеро по лавкам, а всё хозяйство - единственный гусь. И уж как не оберегал его хозяин, а настал день, когда совсем есть стало нечего.|Зарезал тогда мужик гуся, изжарил его, хозяйка и на стол подала. Да вот беда, хлеба в доме нет, а уж соли отродясь не бывало. Хозяин и говорит жене:|- Без хлеба и соли кусок в рот не идёт. Пойду-ка поговорю с барином, авось он за гуся даст нам хлеба.|- И то верно!',
					time: 41.05425
				},
				{
					text: 'Пришёл мужик к барину, а у того за столом шестеро: сам с женой, два сына и две дочки. Поклонился мужик и говорит:|- Прими, батюшка, от всего сердца! Уж не обессудь, больше ничего нет!|- Ну, спасибо, братец, уважил! Только как же нам его поровну разделить?|- А просто, - взял он нож, стал гуся кроить. Перво-наперво отрезал голову и подаёт барину:|- Это тебе, потому как ты в доме всему голова.',
					time: 35.856
				},
				{
					text: 'Затем отрезал гузку, барыне поднёс:|- На тебе, матушка, всё хозяйство держится, гузка тебе в самый раз будет!|Гусинные ноги сыновьям отделил:|- Вам свои дороги по жизни торить, ножки лишними не окажутся!|А дочерям по крылышку вручил:|- Подрастёте, улетите из отцовского дома, тогда вам крылья сгодятся. Ну а мне, чтобы заботу на горбу носить, и туловище сойдёт!',
					time: 33.24375
				},
				{
					text: 'Так и выкроил себе целого гуся.|Подивился барин такой смекалке, чарку мужику поднёс, хлеба дал и домой отпустил.|Услыхал про это богатый сосед, зависть его взяла. Зажарил он аж пять гусей и повёз их к барину.|- По какой надобе прибыл?|- Да вот, гусей вашей милости на обед принёс.|- Ну, спасибо, уважил. А как бы нам их поделить, чтобы без обиды?|Думал мужик, думал, сколь голову не ломал, не делится поровну.',
					time: 39.669875
				},
				{
					text: 'Тогда позвал барин бедного мужика и велел ему разделить.|Тот первого гуся отдал барину с барыней:|- Теперь, батюшка, стало вас трое!|Второго гуся приподнёс сыновьям, а третьего - дочерям, говоря каждый раз:|- Теперь вас трое!|А двух последних гусей мужик взял себе:|- И нас теперь тоже трое!|Рассмеялся барин:|- Какой молодец! Всех наделил и себя не обидел!|Щедро наградил он бедного мужика, а богатого велел прогнать со двора.',
					time: 37.58
				}
			]
		},
		{
			folder: 'petushok-i-bobovoe-zyornyshko',
			title: {text: 'Петушок и бобовое зернышко'},
			pages: [
				{
					text: 'Петушок на дворе рылся и нашёл бобовое зёрнышко. Хотел проглотить, да подавился. Подавился и упал, и лежит, не дышит!|Курочка увидала, подбежала к нему и спрашивает:|- Ко-ко-ко! Петушок-петушок, почему ты лежишь, не дышишь?|Петух отвечает:|- Бобком подавился...Пойди к корове, попроси маслица - бобок проглотить...',
					time: 39.617625
				},
				{
					text: 'Побежала курочка к корове:|- Ко-ко-ко! Корова-корова, дай мне маслица - путушок лежит, не дышит, бобком подавился!|Корова говорит:|- Му-у, пойди к косарям, попроси сена!',
					time: 16.159625
				},
				{
					text: 'Побежала курочка к косарям:|- Ко-ко-ко! Косари-косари, дайте мне сена! Сено - корове, корова мне даст маслица, маслице - петушку. Петушок лежит, не дышит, бобком подавился!|Косари говорят:|- Ступай к печее, попроси калачей!',
					time: 18.667375
				},
				{
					text: 'Побежала курочка к печее:|- Ко-ко-ко! Печея-печея, дай мне калачей! Калачи - косарям, косари дадут сена, сено - корове, корова даст маслица, маслице - петушку. Петушок лежит, не дышит, бобком подавился!|Печея говорит:|- Сходи к дровосекам! Дров попроси!',
					time: 23.317125
				},
				{
					text: 'Побежала курочка к дровосекам:|- Ко-ко-ко! Дровосеки-дровосеки, дайте мне дров! Дрова - печее, печея даст калачей, калачи - косарям, косари дадут сена, сено - корове, корова даст маслица, маслице - петушку. Петушок лежит, не дышит, бобком подавился!|- Сходи к кузнецу, попроси топор, рубить нечем!',
					time: 21.4625
				},
				{
					text: 'Побежала курочка к кузнецу:|- Ко-ко-ко! Кузнец-кузнец, дай мне топор, топор - дровосекам, дровосеки дадут дрова, дрова - печее, печея даст калачей, калачи - косарям, косари дадут сена, сено - корове, корова даст маслица, маслице - петушку. Петушок лежит, не дышит, бобком подавился!|- Ступай в лес, нажги углей, - говорит кузнец.',
					time: 27.261625
				},
				{
					text: 'Пошла курочка в лес, нажгла углей, принесла угли кузнецу. Кузнец дал топор. Принесла топор дровосекам, дровосеки дали дров. Принесла дрова печее, печея дала калачей.',
					time: 12.685375
				},
				{
					text: 'Курочка принесла калачи косарям, косари дали сена. Принесла сено корове, корова дала маслица.',
					time: 6.91225
				},
				{
					text: 'Принесла курочка маслица петушку. Петушок сглотнул маслица и бобок проглотил.|Вскочил и запел:|- Кукареку-у-у-у!',
					time: 18.144875
				}
			]
		},
		{
			folder: 'kasha-iz-topora',
			title: {text: 'Каша из топора'},
			pages: [
				{
					text: 'Старый солдат шёл домой на побывку. Притомился в пути, есть захотел.|Дошёл до деревни, постучался в крайнюю избу:|- Пустите отдохнуть дорожного человека!',
					time: 18.4845
				},
				{
					text: 'Дверь отперла старуха:|- Заходи, служивый...|- А нет ли у тебя, хозяюшка, перекусить чего?|Старуха богатая, да скупая, зимой льду не выпросишь:|- Ох, добрый человек, сама сегодня ещё ничего не ела... Нет ничего!|- Ну, на нет и суда нет, - говорит солдат.',
					time: 27.679625
				},
				{
					text: 'Тут он приметил под лавкой топор без топорища:|- Коли нет ничего иного, можно и из топора кашу сварить!|Хозяйка руками всплеснула:|- Как так из топора кашу варить?',
					time: 16.917125
				},
				{
					text: '- Дай-ка котёл, покажу тебе, как кашу из топора варят.|Принесла старуха котёл. Солдат топор вымыл, опустил в котёл, налил воды и поставил на огонь.|Старуха на солдата глядит, глаз не сводит.',
					time: 18.4845
				},
				{
					text: 'Достал солдат ложку, помешивает варево, попробовал...',
					time: 6.70325
				},
				{
					text: '- Ну, как? - спрашивает старуха.|- Скоро будет готово, - отвечает солдат, - жаль, что вот соли нет.|- Соль-то у меня есть, посоли.',
					time: 15.0625
				},
				{
					text: 'Солдат посолил, снова попробовал:|- Эх, кабы сюда да горсточку крупы!|Старуха принесла из чулана крупы:|- Ну, на, заправь, как надо...',
					time: 15.245375
				},
				{
					text: 'Варил, варил солдат, помешивал кашу. Глядит старуха, оторваться не может.|- Ох, и каша хороша! - хвалит солдат, - кабы сюда да чуточку масла, вовсе было бы объедение!|Нашлось у старухи и масло, помаслили кашу.',
					time: 22.429
				},
				{
					text: '- Ну, бери ложку, хозяюшка!|Стали кашу есть, да похваливать.|- Вот уж не думала, что из топора эдакую кашу сварить можно! - дивится старуха.|А солдат ест, да посмеивается.',
					time: 22.716375
				}
			]
		},
		{
			folder: 'slovo',
			title: {text: 'Слово'},
			pages: [
				{
					text: 'Шёл по свету солдат Илья, работу искал. В городах не нашёл, в деревнях не нашёл. Вышел он в чисто поле. Шёл-шёл, видит - забор. Подошёл Илья, хочет войти, а ворот-то и нет! Слева зашёл - нет ворот, справа зашёл - тоже нет! Кругом обошёл - что за чудо? Забор да и только, и войти некуда. Постучал Илья в забор:|- Тук-тук-тук!|Изнутри голос:|- Кто там?|- Это я!|- Кто ты?|- Солдат Илья!|- Чего тебе, Илья?|- Работу ищу!|- Нанимайся ко мне!|- А какая работа?|- Воду кипятить.|- А уговор какой?|- Сто рублей в год!|- Ладно, согласен!|Вот голос говорит:|- Забор!|Забор в ответ человечьим голосом:|- Что, хозяин?|- Отворись!',
					time: 73.42
				},
				{
					text: 'Забор - настеж, пустил Илью и закрылся опять сам собой.|Пошёл Илья во двор и видит: стоит перед ним хозяин, грозный, глаза на выкате. Повёл хозяин Илью к большому чугунному котлу, а закрыт тот котёл крышкой наглухо и горят под ним дрова берёзовые.|Хозяин говорит:|- Вот тебе, Илья, котёл, вот тебе дрова. Подкладывай дрова, не ленись, гляди, чтобы вода не остыла! И ещё уговор: в котёл не заглядывай. Заглянешь хоть разок - ста рублей не получишь, голову потеряешь, - сказал хозяин и пошёл к дому.',
					time: 41.15875
				},
				{
					text: 'Взошёл на лесенку у порога и говорит:|- Лесенка!|Та в ответ:|- Что желаете, хозяин?|- Отнеси меня в дом!|Лесенка сдвинулась с места и отнесла хозяина в дом. Двери за ним захлопнулись.|"Вот это хозяин!" - подумал Илья, - ловко он вещами командует!"|Остался Илья во дворе у котла и принялся за работу.|И весной на ветру, и летом в жару, и осенью в дождь, и зимой в мороз - только и знает, топором машет, дрова рубит, под котёл подкладывает. И нет у Ильи ни покоя, ни отдыха. А хозяин с утра до вечера на крылечке сидит, в поднебесье глядит, пальцем бороду почёсывает.',
					time: 45.41675
				},
				{
					text: 'Вот уже и год прошёл. Завтра Илье срок работу заканчивать, сто рублей получать. Сидит Илья у костра и думает: "Не надо мне ста рублей, мне бы хозяйское слово узнать, над вещами хозяином стать! Не томился бы я круглый год на тяжёлой работе..." Думал-думал Илья и заснул. В самую полночь пришёл хозяин и стал Илью пытать: спит он или не спит? Сперва позвал, потом толкнул, под конец иголкой в бок кольнул!|Илья рад бы проснуться, да силы нет! Подошёл тогда хозяин к котлу и сказал:|- Котёл!',
					time: 43.27475
				},
				{
					text: 'Тот откликнулся:|- Что надобно, хозяин?|- Откройся!|Хозяин зачерпнул воды, напился и приказал котлу закрыться. Котёл закрылся и хозяин ушёл в дом.|Проснулся Илья на заре и думает: "Дай-ка я проверю, что же в этом котле?" Подошёл к котлу, хотел крышку сдвинуть, а она тяжёлая, не поддаётся!|Правой рукой двинул Илья - не поддаётся, обеими двинул - не поддаётся! Разозлился Илья, налёг богатырской грудью, сдвинул чугунную крышку.',
					time: 40.14
				},
				{
					text: 'Заглянул Илья в котёл, а вода в нём - чистая, ясная, как слеза. Зачерпнул Илья той воды, глотнул раз-другой и почуял в себе силу необычную. Ведь вода-то была не простая: кто её напьётся, тому власть над вещами даётся! Приказал Илья котлу закрыться - котёл закрылся.|Стал Илья дрова рубить, а тут как раз хозяин идёт:|- Ну как, Илья, уговор выполнил? - Илья молчит.|- В котёл заглядывал? - Илья молчит. Тогда хозяин котлу:|- Котёл, Илья тебя открывал?|- Да! - отвечает котёл.',
					time: 43.509875
				},
				{
					text: '- Илья! Уговор нарушил - подставляй голову!|И кричит хозяин топору:|- Топор!|Топор в овет:|- Готов служить!|- Руби голову Илье!|Топор замахнулся, а Илья как крикнет:|- Топор, стой! - топор так и замер! Хозяин велит:|- Топор, руби! - а Илья наперекор:',
					time: 24.100875
				},
				{
					text: '- Топор, стой! - топор на месте скок-скок! Кого слушаться, не знает! Тогда Илья говорит:|- Топор, кто тебя точил?|- Ты!|- Кто тобой рубил?|- Ты!|- Ну так с этой минуты слушай меня одного!|Перестал топор хозяина слушать, а за топором и все вещи против хозяина пошли. Мечется хозяин по двору, некуда ему деться! Кричит забору:|- Отворись! - забор не отворяется. Кричит лесенке:|- Унеси в дом! - лесенка не уносит. Рвёт хозяин бороду от злости, а Илья глядит на него, усмехается. Наконец Илья говорит:|- Метла, вымети лишний сор со двора!|Как пошла тут метла мести да скрести, так и вымела с сором и хозяина прочь со двора!|Говорит тогда Илья:|- Забор, отворись на весь мир!|Забор - настеж! И крикнул Илья:',
					time: 61.717125
				},
				{
					text: '- Эй, кто там голый, босый, голодный, все сюда!|Повалило тут к Илье народу видимо-невидимо! Говорит Илья:|- Котёл, беги к реке, принеси чистой воды и становись на огонь!|Котёл так и сделал. Говорит Илья:|- Мешок, беги в амбар, принеси пшена и высыпь в котёл!|Мешок так и сделал. Говорит Илья:|- Дрова, прыгайте в котёл, горите ярче, грейте пожарче, варите нам кашу!|Накормил Илья всех людей досыта и стал с ними жить дружно, землю похать, хлеб сеять, урожай собирать. И пошла о них слава на тысячи вёрст кругом!',
					time: 46.59225
				}
			]
		},
		{
			folder: 'moy-schenok',
			title: {text: 'Мой щенок'},
			pages: [
				{
					text: 'Я сегодня сбилась с ног -|У меня пропал щенок.|Два часа его звала,|Два часа его ждала,|За уроки не садилась|И обедать не могла.',
					time: 19.686125
				},
				{
					text: 'В это утро|Очень рано|Соскочил щенок с дивана,|Стал по комнатам ходить,|Прыгать,|Лаять,|Всех будить.',
					time: 9.446125
				},
				{
					text: 'Он увидел одеяло -|Покрываться нечем стало.',
					time: 4.45675
				},
				{
					text: 'Он в кладовку заглянул -|С мёдом жбан перевернул.',
					time: 4.273875
				},
				{
					text: 'Он порвал стихи у папы,|На пол с лестницы упал,',
					time: 5.6845
				},
				{
					text: 'В клей залез передней лапой,|Еле вылез|И пропал...',
					time: 6.729375
				},
				{
					text: 'Может быть, его украли,|На верёвке увели,|Новым именем назвали,|Дом стеречь|Заставили?',
					time: 7.251875
				},
				{
					text: 'Может, он в лесу дремучем|Под кустом сидит колючим,',
					time: 3.960375
				},
				{
					text: 'Заблудился,|Ищет дом,|Мокнет, бедный, под дождём?|Я не знала, что мне делать.|Мать сказала: - Подождём.',
					time: 10.09925
				},
				{
					text: 'Два часа я горевала,|Книжек в руки не брала,|Ничего не рисовала,|Всё сидела и ждала.',
					time: 9.184875
				},
				{
					text: 'Вдруг|Какой-то страшный зверь|Открывает лапой дверь,|Прыгает через порог...|Кто же это?|Мой щенок.',
					time: 15.611
				},
				{
					text: 'Что случилось,|Если сразу|Не узнала я щенка?|Нос распух, не видно глаза,|Перекошена щека,|И, впиваясь, как игла,|На хвосте жужжит пчела.|Мать сказала: - Дверь закрой!|К нам летит пчелиный рой.',
					time: 20.757125
				},
				{
					text: 'Весь укутанный,|В постели|Мой щенок лежит пластом|И виляет еле-еле|Забинтованным хвостом.|Я не бегаю к врачу -|Я сама его лечу.',
					time: 17.36125
				}
			]
		},
		{
			folder: 'masha-i-medved',
			title: {text: 'Маша и Медведь'},
			pages: [
				{
					text: 'Жили-были дедушка да бабушка. Была у них внучка Машенька.|Собрались раз подружки в лес – по грибы да по ягоды. Пришли звать с собой и Машеньку.|– Дедушка, бабушка, – говорит Машенька, – отпустите меня в лес с подружками!|Дедушка с бабушкой отвечают:|– Иди, только смотри от подружек не отставай – не то заблудишься.',
					time: 31.728625
				},
				{
					text: 'Пришли девушки в лес, стали собирать грибы да ягоды. Вот Машенька – деревце за деревце, кустик за кустик – и ушла далеко-далеко от подружек.',
					time: 11.039625
				},
				{
					text: 'Стала она аукаться, стала их звать. А подружки не слышат, не отзываются.|Ходила, ходила Машенька по лесу – совсем заблудилась.',
					time: 10.987375
				},
				{
					text: 'Пришла она в самую глушь, в самую чащу. Видит - стоит избушка.',
					time: 6.128625
				},
				{
					text: 'Постучала Машенька в дверь – не отвечают. Толкнула она дверь, дверь и открылась.',
					time: 6.285375
				},
				{
					text: 'Вошла Машенька в избушку, села у окна на лавочку.|Села и думает:|«Кто же здесь живёт? Почему никого не видно?..»  А в той избушке жил большущий медведь. Только его тогда дома не было: он по лесу ходил. Вернулся вечером медведь, увидел Машеньку, обрадовался.|– Ага, – говорит, – теперь не отпущу тебя! Будешь у меня жить. Будешь печку топить, будешь кашу варить, меня кашей кормить.|Потужила Маша, погоревала, да ничего не поделаешь. Стала она жить у медведя в избушке.',
					time: 36.744125
				},
				{
					text: 'Медведь на целый день уйдёт в лес, а Машеньке наказывает никуда без него из избушки не выходить.|– А если уйдёшь, – говорит, – всё равно поймаю и тогда уж съем!|Стала Машенька думать, как ей от медведя убежать. Кругом лес, в какую сторону идти – не знает, спросить не у кого...|Думала она, думала и придумала.|Приходит раз медведь из лесу, а Машенька и говорит ему:|– Медведь, медведь, отпусти меня на денёк в деревню: я бабушке да дедушке гостинцев снесу.|– Нет, – говорит медведь, – ты в лесу заблудишься. Давай гостинцы, я их сам отнесу!|А Машеньке того и надо! Напекла она пирожков, достала большой-пребольшой короб и говорит медведю:|– Вот, смотри: я в короб положу пирожки, а ты отнеси их дедушке да бабушке. Да помни: короб по дороге не открывай, пирожки не вынимай. Я на дубок влезу, за тобой следить буду!|– Ладно, – отвечает медведь, – давай короб! Машенька говорит:|– Выйди на крылечко, посмотри, не идёт ли дождик! Только медведь вышел на крылечко, Машенька сейчас же залезла в короб, а на голову себе блюдо с пирожками поставила.',
					time: 77.41675
				},
				{
					text: ' Вернулся медведь, видит – короб готов. Взвалил его на спину и пошёл в деревню. Идёт медведь между ёлками, бредёт медведь между берёзками, в овражки спускается, на пригорки поднимается.|Шёл-шёл, устал и говорит:|Сяду на пенёк,|Съем пирожок!|А Машенька из короба:|Вижу, вижу!|Не садись на пенёк,|Не ешь пирожок!|Неси бабушке,|Неси дедушке!|– Ишь какая глазастая, – говорит медведь, – всё видит! Поднял он короб и пошёл дальше. Шёл-шёл, шёл-шёл, остановился, сел и говорит:|Сяду на пенёк,|Съем пирожок!|А Машенька из короба опять:|Вижу, вижу!|Не садись на пенёк,|Не ешь пирожок!|Неси бабушке,|Неси дедушке!|Удивился медведь:|– Вот какая хитрая! Высоко сидит, далеко глядит! Встал и пошёл скорее.',
					time: 63.44125
				},
				{
					text: 'Пришёл в деревню, нашёл дом, где дедушка с бабушкой жили, и давай изо всех сил стучать в ворота:|– Тук-тук-тук! Отпирайте, открывайте! Я вам от Машеньки гостинцев принёс.|А собаки почуяли медведя и бросились на него. Со всех дворов бегут, лают. Испугался медведь, поставил короб у ворот и пустился в лес без оглядки.',
					time: 24.989
				},
				{
					text: 'Вышли тут дедушка да бабушка к воротам. Видят– короб стоит.|– Что это в коробе? – говорит бабушка.|А дедушка поднял крышку, смотрит и глазам своим не верит: в коробе Машенька сидит – живёхонька и здоровёхонька.',
					time: 16.49925
				},
				{
					text: 'Обрадовались дедушка да бабушка. Стали Машеньку обнимать, целовать, умницей называть.',
					time: 12.03225
				}
			]
		},
		{
			folder: 'mukha-tsokotukha',
			title: {text: 'Муха-Цокотуха'},
			pages: [
				{
					text: 'Муха, Муха-Цокотуха,|Позолоченное брюхо!|Муха по полю пошла,|Муха денежку нашла.|Пошла Муха на базар|И купила самовар:|«Приходите, тараканы,|Я вас чаем угощу!»|Тараканы прибегали,|Все стаканы выпивали,|А букашки —|По три чашки|С молоком|И крендельком:|Нынче Муха-Цокотуха|Именинница!',
					time: 41.759625
				},
				{
					text: 'Приходили к Мухе блошки,|Приносили ей сапожки,|А сапожки не простые|В них застёжки золотые.',
					time: 9.89025
				},
				{
					text: 'Приходила к Мухе|Бабушка-пчела,|Мухе-Цокотухе|Мёду принесла…|«Бабочка-красавица,|Кушайте варенье!|Или вам не нравится|Наше угощенье?»',
					time: 16.029
				},
				{
					text: 'Вдруг какой-то старичок|Паучок|Нашу Муху в уголок|Поволок —|Хочет бедную убить,|Цокотуху погубить!|«Дорогие гости, помогите!|Паука-злодея зарубите!|И кормила я вас,|И поила я вас,|Не покиньте меня|В мой последний час!»|Но жуки-червяки|Испугалися,|По углам, по щелям|Разбежалися:|Тараканы|Под диваны,|А козявочки|Под лавочки,|А букашки под кровать|Не желают воевать!|И никто даже с места|Не сдвинется:|Пропадай-погибай|Именинница!|А кузнечик, а кузнечик,|Ну, совсем как человечек,|Скок, скок, скок, скок!|За кусток,|Под мосток|И молчок!',
					time: 58.896
				},
				{
					text: 'А злодей-то не шутит,|Руки-ноги он Мухе верёвками крутит,|Зубы острые в самое сердце вонзает|И кровь у неё выпивает.|Муха криком кричит,|Надрывается,|А злодей молчит,|Ухмыляется.',
					time: 22.011
				},
				{
					text: 'Вдруг откуда-то летит|Маленький Комарик,|И в руке его горит|Маленький фонарик.|«Где убийца? Где злодей?|Не боюсь его когтей!»|Подлетает к Пауку,|Саблю вынимает|И ему на всём скаку|Голову срубает!',
					time: 21.122875
				},
				{
					text: 'Муху за руку берёт|И к окошечку ведёт:|«Я злодея зарубил,|Я тебя освободил|И теперь, душа-девица,|На тебе хочу жениться!»|Тут букашки и козявки|Выползают из-под лавки:|«Слава, слава Комару —|Победителю!»|Прибегали светляки,|Зажигали огоньки —|То-то стало весело,|То-то хорошо!|Эй, сороконожки,|Бегите по дорожке,|Зовите музыкантов,|Будем танцевать!',
					time: 43.71875
				},
				{
					text: 'Музыканты прибежали,|В барабаны застучали.|Бом! бом! бом! бом!|Пляшет Муха с Комаром.|А за нею Клоп, Клоп|Сапогами топ, топ!|Козявочки с червяками,|Букашечки с мотыльками.|А жуки рогатые,|Мужики богатые,|Шапочками машут,|С бабочками пляшут.|Тара-ра, тара-ра,|Заплясала мошкара.|Веселится народ —|Муха замуж идёт|За лихого, удалого,|Молодого Комара!|Муравей, Муравей!|Не жалеет лаптей, —|С Муравьихою попрыгивает|И букашечкам подмигивает:|«Вы букашечки,|Вы милашечки,|Тара-тара-тара-тара-таракашечки!»|Сапоги скрипят,|Каблуки стучат, —|Будет, будет мошкара|Веселиться до утра:|Нынче Муха-Цокотуха|Именинница!',
					time: 56.440375
				}
			]
		},
		{
			folder: 'snegurochka',
			title: {text: 'Снегурочка'},
			pages: [
				{
					text: 'Жили-были старик со старухой. Жили ладно, дружно. Всё бы хорошо, да одно горе - детей у них не было. Вот пришла зима снежная, намело сугробов до пояса, высыпали ребятишки на улицу поиграть, а старик со старухой на них из окна глядят да про своё горе думают.|- А что, старуха, - говорит старик, - давай мы себе из снега дочку сделаем.|- Давай, - говорит старуха.',
					time: 38.91225
				},
				{
					text: 'Надел старик шапку, вышли они на огород и принялись дочку из снега лепить. Скатали они снежный ком, ручки, ножки приладили, сверху снежную голову приставили. Вылепил старик носик, рот, подбородок.',
					time: 21.645375
				},
				{
					text: 'Глядь - a y Снегурочки губы порозовели, глазки открылись; смотрит она на стариков и улыбается. Потом закивала головкой, зашевелила ручками, ножками, стряхнула с себя снег - и вышла из сугроба живая девочка.|Обрадовались старики, привели её в избу. Глядят на неё, не налюбуются.',
					time: 36.691875
				},
				{
					text: 'И стала расти у стариков дочка не по дням, а по часам; что ни день, то всё краше становится. Сама беленькая, точно снег, коса русая до пояса, только румянца нет вовсе.',
					time: 17.1
				},
				{
					text: 'Не нарадуются старики на дочку, души в ней не чают. Растёт дочка и умная, и смышлёная, и весёлая. Со всеми ласковая, приветливая. И работа у Снегурочки в руках спорится, а песню запоёт - заслушаешься.',
					time: 21.358
				},
				{
					text: 'Прошла зима. Начало пригревать весеннее солнышко. Зазеленела трава на проталинках, запели жаворонки. А Снегурочка вдруг запечалилась.|- А что с тобой, дочка? - спрашивают старики. Что ты такая невесёлая стала? Иль тебе неможется?|- Ничего, батюшка, ничего, матушка, я здорова.|Вот и последний снег растаял, зацвели цветы на лугах, птицы прилетели.|А Снегурочка день ото дня всё печальнее, всё молчаливее становится. От солнца прячется. Всё бы ей тень да холодок, а ещё лучше - дождичек.',
					time: 46.54
				},
				{
					text: 'Раз надвинулась чёрная туча, посыпался крупный град. Обрадовалась Снегурочка граду, точно жемчугу перекатному. А как снова выглянуло солнышко и град растаял, Снегурочка заплакала, да так горько, словно сестра по родному брату.',
					time: 19.9735
				},
				{
					text: 'За весной лето пришло. Собрались девушки на гулянье в рощу, зовут Снегурочку:|- Идём с нами, Снегурочка, в лес гулять, песни петь, плясать.|Не хотелось Снегурочке в лес идти, да старуха её уговорила:|- Пойди, дочка, повеселись с подружками!',
					time: 23.317125
				},
				{
					text: 'Пришли девушки со Снегурочкой в лес. Стали цветы собирать, венки плести, песни петь, хороводы водить. Только одной Снегурочке по-прежнему невесело.',
					time: 13.83475
				},
				{
					text: 'А как свечерело, набрали они хворосту, разложили костёр и давай друг за дружкой через огонь прыгать. Позади всех и Снегурочка встала.|Побежала она в свой черёд за подружками.',
					time: 15.637125
				},
				{
					text: 'Прыгнула над огнём и вдруг растаяла, обратилась в белое облачко. Поднялось облачко высоко и пропало в небе. Только и услышали подружки, как позади простонало что-то жалобно: "Ау!" Обернулись они - а Снегурочки нет.|Стали они кликать её:|- Ау, ау, Снегурушка!|Только эхо им в лесу откликнулось...',
					time: 45.20775
				}
			]
		},
		{
			folder: 'pod-gribom',
			title: {text: 'Под грибом'},
			pages: [
				{
					text: 'Как-то застал Муравья сильный дождь.|Куда спрятаться?|Увидел Муравей на полянке маленький грибок, добежал до него и спрятался под его шляпкой.',
					time: 14.304875
				},
				{
					text: 'Сидит под грибом — дождь пережидает.|А дождь идёт всё сильнее и сильнее…',
					time: 6.49425
				},
				{
					text: 'Ползёт к грибу мокрая Бабочка:|— Муравей, Муравей, пусти меня под грибок! Промокла я — лететь не могу!|— Куда же я пущу тебя? — говорит муравей. — Я один тут кое-как уместился.|— Ничего! В тесноте, да не в обиде.',
					time: 18.197125
				},
				{
					text: 'Пустил Муравей Бабочку под грибок.|А дождь ещё сильнее идёт…',
					time: 5.94575
				},
				{
					text: 'Бежит мимо Мышка:|— Пустите меня под грибок! Вода с меня ручьём течёт.|— Куда же мы тебя пустим? Тут и места нет.|— Потеснитесь немножко!',
					time: 10.96125
				},
				{
					text: 'Потеснились — пустили Мышку под грибок.|А дождь всё льёт и не перестаёт…',
					time: 5.94575
				},
				{
					text: 'Мимо гриба Воробей скачет и плачет:|— Намокли перышки, устали крылышки! Пустите меня под грибок обсохнуть, отдохнуть, дождик переждать!|— Тут места нет.|— Подвиньтесь, пожалуйста!|— Ладно.',
					time: 15.793875
				},
				{
					text: 'Подвинулись — нашлось Воробью место.',
					time: 3.725375
				},
				{
					text: 'А тут Заяц на полянку выскочил, увидел гриб.|— Спрячьте, — кричит, — спасите! За мной Лиса гонится!..|— Жалко Зайца, — говорит Муравей. — Давайте ещё потеснимся.',
					time: 11.509875
				},
				{
					text: 'Только спрятали Зайца — Лиса прибежала.',
					time: 3.5425
				},
				{
					text: '— Зайца не видели? — спрашивает.|— Не видели.|Подошла Лиса поближе, понюхала:|— Не тут ли он спрятался?|— Где ему тут спрятаться!|Махнула Лиса хвостом и ушла.',
					time: 15.898375
				},
				{
					text: 'К тому времени дождик прошёл — солнышко выглянуло. Вылезли все из-под гриба — радуются.|Муравей задумался и говорит:|— Как же так? Раньше мне одному под грибом тесно было, а теперь всем пятерым место нашлось!',
					time: 19.869
				},
				{
					text: '— Ква-ха-ха! Ква-ха-ха! — засмеялся кто-то.|Все посмотрели: на шляпке гриба сидит Лягушка и хохочет:|— Эх, вы! Гриб-то…|Не досказала и ускакала.|Посмотрели все на гриб и тут догадались, почему сначала одному под грибом тесно было, а потом и пятерым место нашлось.|А вы догадались?',
					time: 31.362875
				}
			]
		}
	]
};

gi5366['/www/js/app/books-data.js'] = booksData;
}());
(function () {
'use strict';
/*global window */

var $ = gi5366['/www/js/lib/jbone.js'] || window.$;
var info = gi5366['/www/js/services/info.js'] || window.info;
var bg = gi5366['/www/js/services/bg.js'] || window.bg;
var lang = gi5366['/www/js/services/lang.js'] || window.lang;
var device = gi5366['/www/js/services/device.js'] || window.device;
var tm = gi5366['/www/js/services/template-master.js'] || window.tm;
var booksData = gi5366['/www/js/app/books-data.js'] || window.booksData;
var BaseView = gi5366['/www/js/app/view/core/base.js'] || window.BaseView;

var win = window,
	HomeView = BaseView.extend({

		events: {
			'click .js-story-by-story': 'setStoryByStory',
			'click .js-title-book-wrapper': 'openBook'
			//'click .js-show-popup': 'testShowPopup'
		},

		initialize: function () {

			var view = this,
				hintViewAutoplay = {};

			view.setElement(tm.tmplFn.home({
				info: info,
				booksData: booksData,
				shelf: view.getBooksOnShelfNumber()
				//booksOnShelf:
			}));

			// partner link
			if (Math.random() > 0.5) {
				view.$el.find('.js-partner-link').off().remove();
			}

			view.bindEventListeners();

			view.render();

			view.setVerticalSwiper();

			view.scrollToTop();

			// show hint if needed
			if (!info.hintIsDone('autoplay')) {
				view.publish('showHint', {name: 'autoplay'}, hintViewAutoplay);
				hintViewAutoplay.view.onHide(function () {
					view.publish('showHint', {name: info.isNormal ? 'removeAds' : 'thanksForBuy'});
				});
			}

			bg.changeBg();

			return BaseView.prototype.initialize.apply(view, arguments);

		},

		getBooksOnShelfNumber: function () {

			var view = this,
				remSize = info.get('remSize', true),
				bookWidth = 8.8, // SEE CSS
				availableWidth = device.get('width') / remSize,
				booksOnShelf = Math.floor(availableWidth / bookWidth),
				firstBookMarginLeft = (availableWidth % bookWidth) / 2 + 0.6; // SEE CSS

			return {
				firstBookMarginLeft: firstBookMarginLeft + 'rem',
				booksOnShelf: booksOnShelf
			};

		},

		setStoryByStory: function (e) {

			var view = this,
				$this = $(e.currentTarget),
				notification = lang.get('notification'),
				popupText,
				isStoryByStory = info.get('storyByStory') === 'on';

			if (isStoryByStory) {
				$this.removeClass('active-on-off');
				info.set('storyByStory', 'off');
				popupText = notification.storyByStoryOff;
			} else {
				$this.addClass('active-on-off');
				info.set('storyByStory', 'on');
				popupText = notification.storyByStoryOn;
			}

			view.showPopup({
				name: 'notification',
				timeout: 3e3,
				data: {
					text: popupText
				}
			});

		},

		bindEventListeners: function () {

			var view = this,
				rateUsTimeoutId;

			view.listenTo(device, 'change:orientation', function () {
				view.publish('hide-hint', {}, {doNotTrack: true});
				view.loadUrl();
			});

			rateUsTimeoutId = setTimeout(function () {
				// check for rate up popup
				if (Date.now() - info.get('installTime') > 20e3) {
					view.rateUsPopup();
				}
			}, 2e3);

			view.set('rateUsTimeoutId', rateUsTimeoutId);

		},

		unbindEventListeners: function () {

			var view = this,
				rateUsTimeoutId = view.get('rateUsTimeoutId');

			view.stopListening(device);

			view.get('vertical-swiper').destroy();

			clearTimeout(rateUsTimeoutId);

		},

		openBook: function (e) {

			var view = this,
				$node = $(e.currentTarget),
				isClicked = $node.attr('data-is-clicked');

			if (isClicked) {
				view.publish('navigate', $node.attr('data-js-route'), true);
				return;
			}

			$node
				.attr('data-is-clicked', '1')
				.addClass('book-titles-wrapper-clicked');

		}

		//testShowPopup: function () {
		//
		//	var view = this;
		//
		//	view.showPopup({
		//		name: 'popup-text',
		//		//timeout: 2.5e3,
		//		sound: {
		//			sound: 'good-answer.mp3',
		//			isLoop: false,
		//			road: 3
		//		},
		//		data: {
		//			text: 'TEXT!!!!!!!!!'
		//		}
		//		//,onHide: { // see popup view source code
		//		//	fn: 'newQuestion',
		//		//	context: view
		//		//}
		//	});
		//
		//}


	});

gi5366['/www/js/app/view/home.js'] = HomeView;
}());
(function () {
'use strict';
/*global window */

var info = gi5366['/www/js/services/info.js'] || window.info;
var _ = gi5366['/www/js/lib/lodash.js'] || window._;
var booksData = gi5366['/www/js/app/books-data.js'] || window.booksData;
var $ = gi5366['/www/js/lib/jbone.js'] || window.$;
var Backbone = gi5366['/www/js/lib/backbone.js'] || window.Backbone;
var Swiper = gi5366['/www/js/lib/swiper.js'] || window.Swiper;
var device = gi5366['/www/js/services/device.js'] || window.device;
var sm = gi5366['/www/js/sound/sound-master.js'] || window.sm;
var tm = gi5366['/www/js/services/template-master.js'] || window.tm;
var util = gi5366['/www/js/services/util.js'] || window.util;
var androidAds = gi5366['/www/js/services/android-ads.js'] || window.androidAds;
var BaseView = gi5366['/www/js/app/view/core/base.js'] || window.BaseView;

var win = window,

	BookView = BaseView.extend({

		events: {
			'click .js-play-pause': 'playPause',
			'click .js-show-inner-html': 'showInnerHtml'
		},

		selectors: {
			playPauseButton: '.js-play-pause',
			bookPage: '.js-book-page',
			pageText: '.js-page-text',
			bookPageImage: '.js-book-page-image',
			backPageTextWrapper: '.js-back-page-wrapper'
		},

		initialize: function (dataArg) {

			var view = this,
				data = dataArg || {},
				languageName = info.get('language'),
				booksByLang = booksData[languageName],
				book = _.find(booksByLang, {folder: data.bookFolder});

			view.set('withText', false);

			view.set('pageMode', 'normal'); // fullText or normal

			view.setElement(tm.tmplFn.book(
				{
					info: info,
					util: util,
					book: book,
					settings: {
						withText: view.get('withText')
					}
				}
			));

			view.set('book', book);

			view.set('url', Backbone.history.fragment);

			view.set('playerState', 'playing'); // playing or pause

			view.set('previousPageIndex', 0);

			BaseView.prototype.initialize.apply(view, arguments);
			//view.onResize();

			view.loadBooksImages()
				.then(function () {

					if (!view.checkNeedUrl()) {
						return;
					}

					view.render();

					view.initSwiper();
					view.bindEventListeners();
					view.onResize();

					if (info.hintIsDone('showTitle')) {

						view.runPage({index: 0});

						return;

					}

					var hintViewData = {};

					view.publish('showHint', {name: 'showTitle'}, hintViewData);

					hintViewData.view.onHide(function () {

						view.publish('showHint', {name: 'showText'}, hintViewData);

						hintViewData.view.onHide(function () {

							view.publish('showHint', {name: 'stopAndStartPlay'}, hintViewData);

							hintViewData.view.onHide(view.runPage, [{index: 0}], view);

						});

					});

					view.onResize();

				});

		},

		checkNeedUrl: function () {
			return this.get('url') === Backbone.history.fragment;
		},

		initSwiper: function () {

			var view = this,
				swiper;

			swiper = new Swiper('.swiper-container', {
				// Optional parameters
				direction: 'horizontal',
				loop: false

				// remove it for nonPAHTbI swipe
				//effect: 'coverflow',
				//grabCursor: true,
				//centeredSlides: true,
				//slidesPerView: 'auto',
				//coverflow: {
				//	rotate: 50,
				//	stretch: 0,
				//	depth: 100,
				//	modifier: 1,
				//	slideShadows : false
				//}

				// If we need pagination
				//pagination: '.swiper-pagination',

				// Navigation arrows
				//nextButton: '.swiper-button-next',
				//prevButton: '.swiper-button-prev',

				// And if we need scrollbar
				//scrollbar: '.swiper-scrollbar'

			});

			view.set('swiper', swiper);

		},

		bindEventListeners: function () {

			var view = this,
				swiper = view.get('swiper');

			//onSlideChangeEnd
			swiper.on('onTransitionEnd', function (swiper) {

				var book = view.get('book'),
					index = swiper.activeIndex,
					isPageChanged = view.isPageChanged(index);

				if (!isPageChanged) {
					return;
				}

				if (view.get('pageMode') === 'normal' || view.get('playerState') === 'playing') {
					view.runPage({index: index});
				}

			});

			swiper.on('onDoubleTap', function () {
				view.toggleState();
			});

			view.listenTo(device, 'resize', view.onResize);

		},

		unbindEventListeners: function () {

			var view = this,
				swiper = view.get('swiper'),
				previousTimeoutId = view.get('nextActionTimeoutId'),
				textAnimationIntervalId = view.get('textAnimationIntervalId');

			view.stopListening(device);

			win.clearTimeout(previousTimeoutId);
			win.clearInterval(textAnimationIntervalId);

			sm.stop({
				road: 0
			});

			if (swiper) {
				swiper.off('onTransitionEnd');
				swiper.detachEvents();
				swiper.destroy();
			}

		},

		onResize: function () {

			var view = this,
				selectors = view.selectors,
				pageTextSelector = selectors.pageText,
				selectorImage = selectors.bookPageImage,
				$pages = view.$el.find(selectors.bookPage),
				topBarHeight = info.get('remSize', true) * 3.4; // see style css .header

			$pages.each(function () {

				var $page = $(this),
					$pageText = $page.find(pageTextSelector),
					textHeight = $pageText && $pageText.clientHeight || 0,
					$image = $page.find(selectorImage),
					imageNode = $image.get(0),
					beautifulSpace = view.get('withText') ? 1 : 0.9,
					availableSpace = {
						width: device.get('width'),
						height: device.get('height') - textHeight - topBarHeight
					},
					image = {
						width: imageNode.naturalWidth,
						height: imageNode.naturalHeight
					},
					endWidth,
					endHeight,
					endTop,
					q;

				availableSpace.aspectRatio = availableSpace.height / availableSpace.width;
				image.aspectRatio = image.height / image.width;

				q = availableSpace.aspectRatio > image.aspectRatio ? image.width / availableSpace.width : image.height / availableSpace.height;

				//if ($pageText.length) {

				endWidth = Math.floor(image.width / q * beautifulSpace);
				endHeight = Math.floor(image.height / q * beautifulSpace);
				endTop = Math.floor((availableSpace.height - image.height / q) / 2 + image.height / q * beautifulSpace * (1 - beautifulSpace) / 2) + topBarHeight;

				$image.css({
					width: endWidth + 'px',
					height: endHeight + 'px',
					top: endTop + 'px'
				});

				$pageText.css({
					top: endTop + endHeight + 'px'
				});

				//} else {
				//	$image.css({
				//		width: Math.floor(image.width / q * beautifulSpace) + 'px',
				//		height: Math.floor(image.height / q * beautifulSpace) + 'px',
				//		top: Math.floor((availableSpace.height - image.height / q) / 2 + image.height / q * beautifulSpace * (1 - beautifulSpace) / 2) + 'px'
				//	});
				//}

			});

		},

		loadBooksImages: function () {

			var view = this,
				book = view.get('book'),
				mainBookFolder = 'books',
				pages = book.pages,
				language = info.get('language'),
				bookFolder = book.folder,
				loadDeferred = $.Deferred(),
				loadPromise = loadDeferred.promise(),
				getPath = util.getPath,
				mainDeferred = $.Deferred();

			function loadImage(index) {

				var deferred = $.Deferred(),
					img = new Image();

				img.addEventListener('load', function resolve() {
					this.removeEventListener('load', resolve, false);
					deferred.resolve();
				}, false);

				img.src = [mainBookFolder, language, getPath(bookFolder, index, 'jpg')].join('/');

				return deferred.promise();

			}

			_.each(pages, function (page, index) {
				loadPromise = loadPromise.then(function () {
					return loadImage(index);
				});
			});

			loadPromise.then(function () {
				return mainDeferred.resolve();
			});

			loadDeferred.resolve();

			return mainDeferred.promise();

		},

		runPage: function (dataArg) {

			var view = this,
				data = dataArg || {},
				languageName = info.get('language'),
				book = view.get('book'),
				getPath = util.getPath,
				index = data.index;

			sm.play({
				sound: ['books', languageName, getPath(book.folder, index, 'mp3')].join('/'),
				road: 0,
				isLoop: false
			});

			view.set('playerState', 'playing');
			view.autoSetPlayPauseButtonState();

			//view.animateText();

			view.doNextActionAfter(book.pages[index].time);

		},

		autoSetPlayPauseButtonState: function () {

			var view = this,
				state = view.get('playerState'),
				$button = view.$el.find(view.selectors.playPauseButton);

			if (state === 'pause') {
				$button.removeClass('book-pause-button').addClass('book-play-button');
			}

			if (state === 'playing') {
				$button.removeClass('book-play-button').addClass('book-pause-button');
			}

		},

		animateText: function () {

			var view = this,
				selectors = view.selectors,
				swiper = view.get('swiper'),
				index = swiper.activeIndex,
				$slides = view.$el.find('.swiper-slide'),
				$slide = $slides.eq(index),
				$texts = view.$el.find(selectors.pageText),
				$text = $slide.find(selectors.pageText),
				book = view.get('book'),
				page = book.pages[index],
				text = page.text;

			$texts.empty();

			view.showTextAnimation({
				$el: $text,
				text: text
			});

		},

		showTextAnimation: function (dataArg) {

			var view = this,
				data = dataArg || {},
				index = 0,
				textAnimationIntervalId = view.get('textAnimationIntervalId');

			win.clearInterval(textAnimationIntervalId);

			textAnimationIntervalId = win.setInterval(function () {

				if (!data.text || !data.text[index]) {
					win.clearInterval(view.get('textAnimationIntervalId'));
					return;
				}

				if (view.get('playerState') === 'pause') {
					win.clearInterval(view.get('textAnimationIntervalId'));
					view.$el.find(view.selectors.pageText).empty();
					return;
				}

				index += 1;

				data.$el.html(data.text.substring(0, index).replace(/\|/g, '<br />'));

			}, 25);

			view.set('textAnimationIntervalId', textAnimationIntervalId);

		},

		doNextActionAfter: function (timeout) {

			var view = this,
				swiper = view.get('swiper'),
				previousTimeoutId = view.get('nextActionTimeoutId'),
				currentTimeoutId;

			win.clearTimeout(previousTimeoutId);

			currentTimeoutId = win.setTimeout(function () {

				var wasSwipe = swiper.slideNext(),
					isStoryByStory;

				if (wasSwipe) { // swipe was good
					return;
				}

				isStoryByStory = info.get('storyByStory') === 'on';

				if (isStoryByStory) {
					view.hide().then(function () {

						// detect book/:bookFolder
						if (Backbone.history.fragment.indexOf('book/') !== 0) {
							return;
						}

						var languageName = info.get('language'),
							books = booksData[languageName],
							index = Math.floor(books.length * Math.random()),
							book = books[index];

						// todo: create a new book from 'this'

						new BookView({
							bookFolder: book.folder
						});

					});
				} else {
					view.routeBack();
					setTimeout(androidAds.showAd, 3e3);
				}

			}, timeout * 1e3); // 1e3

			view.set('nextActionTimeoutId', currentTimeoutId);

		},

		playPause: function () {

			var view = this,
				state = view.get('playerState');

			if (state === 'playing') {
				view.stopCurrentPage();
			}

			if (state === 'pause') {
				view.playCurrentPage();
			}

		},

		stopCurrentPage: function () {

			var view = this;

			view.set('playerState', 'pause');
			view.autoSetPlayPauseButtonState();

			// stop music and clear timeout

			sm.stop({
				road: 0
			});

			win.clearTimeout(view.get('nextActionTimeoutId'));

		},

		playCurrentPage: function () {

			var view = this,
				swiper = view.get('swiper'),
				index = swiper.activeIndex,
				book = view.get('book');

			view.runPage({index: index});

		},

		isPageChanged: function (pageIndex) {

			var view = this,
				previousPageIndex = view.get('previousPageIndex'),
				currentPageIndex = pageIndex;

			if (previousPageIndex === currentPageIndex) {
				return false;
			}

			view.set('previousPageIndex', currentPageIndex);
			return true;

		},

		toggleState: function () {

			var view = this,
				state = view.get('pageMode'), // fullText or normal
				selectors = view.selectors,
				$el = view.$el,
				$images = $el.find(selectors.bookPageImage),
				$pageText = $el.find(selectors.pageText),
				$backPageTextWrapper = $el.find(selectors.backPageTextWrapper);

			switch (state) {

				case 'fullText':

					view.set('pageMode', 'normal');

					$images.removeClass('hidden');
					$pageText.removeClass('hidden');
					$backPageTextWrapper.addClass('hidden');

					//view.playCurrentPage();

					break;

				case 'normal':

					view.set('pageMode', 'fullText');

					$images.addClass('hidden');
					$pageText.addClass('hidden');
					$backPageTextWrapper.removeClass('hidden');

					//view.stopCurrentPage();

					break;

			}

		},

		showInnerHtml: function (e) {

			var view = this,
				html = $(e.currentTarget).html();

			view.showPopup({
				name: 'notification',
				timeout: 9e3,
				cssClass: 'popup-title',
				data: {
					text: html
				}
			});

		},

		hide: function () {

			var view = this;

			view.publish('hide-hint', {}, {doNotTrack: true});

			return BaseView.prototype.hide.call(view);

		}

	});

gi5366['/www/js/app/view/book.js'] = BookView;
}());
(function () {
'use strict';
/*global window */

var Backbone = gi5366['/www/js/lib/backbone.js'] || window.Backbone;
var _ = gi5366['/www/js/lib/lodash.js'] || window._;
var BaseView = gi5366['/www/js/app/view/core/base.js'] || window.BaseView;
var HomeView = gi5366['/www/js/app/view/home.js'] || window.HomeView;
var BookView = gi5366['/www/js/app/view/book.js'] || window.BookView;
var mediator = gi5366['/www/js/services/mediator.js'] || window.mediator;

var win = window,
	router,
	Router = Backbone.Router.extend({

		routes: {
			'': 'home',
			'page': 'page',
			'book/:bookFolder': 'openBook'
		},

		home: function () {
			new HomeView();
		},

		openBook: function (bookFolder) {

			new BookView({
				bookFolder: bookFolder
			});

		},

		//page: function () {
		//	new win.APP.BB.PageView();
		//},

		url: {
			popup: 'show-popup=popup'
		},

		getAction: function () {

			var router = this,
				e = window.event || {},
				newURL = e.newURL || '',
				oldURL = e.oldURL || '',
				popupPart = router.url.popup,
				viewAction;

			if ( newURL.indexOf(popupPart) !== -1 ) {
				viewAction = 'showPopup';
			}

			if ( oldURL.indexOf(popupPart) !== -1 ) {
				viewAction = 'hidePopup';
			}

			// other action is here
			return viewAction;

		},

		constructor: function () {

			var router = this,
				originalFunctions = {},
				proto = Router.prototype;

			_.each(router.routes, function (value) {

				originalFunctions[value] = proto[value];

				proto[value] = function () {

					var viewAction = router.getAction();

					if ( !viewAction ) {
						return originalFunctions[value].apply(router, arguments);
					}

					switch (viewAction) {
						case 'hidePopup':
							router.publish('hide-popup');
							break;
						case 'showPopup':
							break;
					}

				};

			});

			return Backbone.Router.prototype.constructor.apply(router, arguments);

		},

		routeToPopup: function () {
			this.navigate(Backbone.history.fragment + '?' + this.url.popup, false);
		},

		hidePopup: function () {

			var router = this;

			if (Backbone.history.fragment.indexOf(router.url.popup) !== -1) {
				win.history.back();
			} else {
				router.publish('hide-popup');
			}

		}

	});

router = new Router();

mediator.installTo(router);

router.subscribe('route-to-popup', router.routeToPopup);
router.subscribe('router-hide-popup', router.hidePopup);
router.subscribe('navigate', router.navigate);

gi5366['/www/js/app/router/router.js'] = router;
}());
(function () {
'use strict';
/*global window */

var BaseView = gi5366['/www/js/app/view/core/base.js'] || window.BaseView;
var $ = gi5366['/www/js/lib/jbone.js'] || window.$;
var _ = gi5366['/www/js/lib/lodash.js'] || window._;
var lang = gi5366['/www/js/services/lang.js'] || window.lang;
var info = gi5366['/www/js/services/info.js'] || window.info;
var device = gi5366['/www/js/services/device.js'] || window.device;
var tm = gi5366['/www/js/services/template-master.js'] || window.tm;
var mediator = gi5366['/www/js/services/mediator.js'] || window.mediator;

var win = window,
	HintView,
	hintMaster,
	hintsMap = {

		autoplay: {
			x1: 0.3,
			y1: 0,
			// use this
			//x2: -10,
			//y2: -10
			// or this
			width: 4.9,
			height: 3.7,
			submitType: 'normal' // just click to hint to never see this hint
		},

		removeAds: {
			x1: -0.3,
			y1: 0,
			// use this
			//x2: 4,
			//y2: 4,
			// or this
			width: 4.9,
			height: 3.7,
			submitType: 'normal'
		},

		thanksForBuy: {
			x1: -0.3,
			y1: 0,
			// use this
			//x2: 4,
			//y2: 4,
			// or this
			width: 4.9,
			height: 3.7,
			submitType: 'normal'
		},

		showTitle: {
			x1: 3.3,
			y1: 0.3,
			// use this
			x2: -3.3,
			//y2: 3.3,
			// or this
			//width: 4.9,
			height: 3,
			submitType: 'normal'
		},

		showText: {
			x1: 3,
			y1: 10,
			// use this
			x2: -3,
			y2: -11,
			// or this
			//width: 4.9,
			//height: 3.7,
			submitType: 'normal'
		},

		stopAndStartPlay: {
			x1: -0.3,
			y1: 0,
			// use this
			//x2: 4,
			//y2: 4,
			// or this
			width: 3.7,
			height: 3.6,
			submitType: 'normal'
		}

	},
	s = 'rem'; // size

HintView = BaseView.extend({

	selectors: {
		hintFocus: '.js-hint-focus',
		text: '.js-hint-text',
		hintArrow: '.js-hint-arrow'
	},

	events: {
		'click': 'hide',
		'scroll': 'stopEvent'
		//'click .js-story-by-story': 'setStoryByStory',
		//'click .js-show-popup': 'testShowPopup'
	},

	initialize: function (data) {

		var view = this,
			hintName = data.name;

		view.extendFromObj(data);
		view.extendFromObj(hintsMap[hintName]);

		view.setElement(tm.tmplFn.hint({
			text: lang.get('hint')[hintName]
		}));

		BaseView.prototype.initialize.apply(view, arguments);

		view.bindEventListeners();

		view.subscribe('hide-hint', view.hide);

		view.render();

	},

	render: function () {

		var view = this,
			$wrapper = view.$wrapper,
			isAndroid = info.get('isAndroid', true),
			execute;

		if (isAndroid) {
			execute = function (fn, timeout) {
				setTimeout(fn, timeout);
			};
		} else {
			execute = function (fn) {
				fn();
			}
		}

		view.setCoordinates({
			$hintFocus: view.$el.find(view.selectors.hintFocus),
			$text: view.$el.find(view.selectors.text),
			coordinates: hintsMap[view.get('name')]
		});

		execute(function () {
			$wrapper.append(view.$el);
		}, 50);

		execute(function () {
			view.showInAnimation();
		}, 100);

	},

	showInAnimation: function () {

		var view = this,
			isScreenAnimation = info.get('screenAnimation') === 'on';

		if (isScreenAnimation) {
			view.$el.addClass('hint-container-show-in');
		} else {
			view.$el.addClass('hint-container-show-in-no-animation');
		}

	},

	showOutAnimation: function () {

		var view = this,
			$el = view.$el,
			deferred = $.Deferred(),
			animationEnd = info.get('animationEnd', true),
			isScreenAnimation = info.get('screenAnimation') === 'on';

		if (isScreenAnimation && $el.hasClass('hint-container-show-in')) {

			$el.one(animationEnd, function () {
				deferred.resolve();
			}); // work only one time

			$el.addClass('hint-container-show-out');

		} else {
			deferred.resolve();
		}

		return deferred.promise();

	},

	setCoordinates: function (data) {

		var view = this,
			allCoordinates = view.getAllCoordinates(data);

		view.setFadeCoordinates({
			$hintFocus: data.$hintFocus,
			allCoordinates: allCoordinates
		});

		view.setHintCoordinates({
			$text: data.$text,
			allCoordinates: allCoordinates
		});

	},

	setHintCoordinates: function (data) {

		var view = this,
			textWidth = 12,
			halfTextWidth = textWidth / 2,
			xys = data.allCoordinates,
			maxWidth = xys.maxWidth,
		//maxHeight = xys.maxHeight,
			minX1 = 1,
			maxX2 = maxWidth - minX1,
			x1, y1, x2, dx = 0;
		//y2,
		//dy;

		x1 = xys.center.bottom.x - halfTextWidth;
		y1 = xys.center.bottom.y;

		x2 = x1 + textWidth;

		if (x1 <= minX1) {
			dx = minX1 - x1;
		}

		if (x2 >= maxX2) {
			dx = maxX2 - x2;
		}

		data.$text.css({
			width: textWidth + s,
			top: y1 + s,
			left: x1 + dx + s
		});

		data.$text.find(view.selectors.hintArrow).css({
			left: halfTextWidth - dx + s
		});

	},

	setFadeCoordinates: function (data) {

		var view = this,
			isScreenAnimation = info.get('screenAnimation') === 'on',
			xys = data.allCoordinates;

		if (isScreenAnimation) {
			data.$hintFocus.css({
				left: xys.x1 + s,
				top: xys.y1 + s,
				width: xys.width + s,
				height: xys.height + s
			});
		} else {
			data.$hintFocus.remove();
		}

	},

	getAllCoordinates: function (data) {

		var view = this,
			remSize = info.get('remSize', true),
			maxWidth = device.get('width') / remSize,
			maxHeight = device.get('height') / remSize,
			coordinates = data.coordinates,
			width = coordinates.width,
			height = coordinates.height,
			x1 = coordinates.x1,
			y1 = coordinates.y1,
			x2, y2;

		if (x1 < 0) {
			x1 = maxWidth + x1 - width;
		}

		if (y1 < 0) {
			y1 = maxHeight + y1 - height;
		}

		// set _ coordinates
		if (coordinates.hasOwnProperty('width')) {
			x2 = x1 + width;
		} else {
			x2 = coordinates.x2;
			x2 = x2 >= 0 ? x2 : maxWidth + x2;
			width = x2 - x1;
		}

		// set | coordinates
		if (coordinates.hasOwnProperty('height')) {
			y2 = y1 + height;
		} else {
			y2 = coordinates.y2;
			y2 = y2 >= 0 ? y2 : maxHeight + y2;
			height = y2 - y1;
		}

		return {
			x1: x1,
			y1: y1,
			x2: x2,
			y2: y2,
			width: width,
			height: height,
			maxWidth: maxWidth,
			maxHeight: maxHeight,

			// you can add your custom coordinates
			center: {
				bottom: {
					x: x1 + width / 2,
					y: y2
				}
			}
		};

	},

	hide: function (evt, dataArg) {

		var view = this,
			data = dataArg || {},
			submitType = view.get('submitType'),
			hints = info.get('hint'),
			hintName = view.get('name');

		hints[hintName] = hints[hintName] || {};

		if (data.doNotTrack) {
			view.clearOnHides();
		} else {
			if (submitType === 'normal') {
				hints[hintName].state = 'done';
				info.set('hint', hints);
			}
		}

		view.showOutAnimation().then(function () {
			BaseView.prototype.hide.call(view);
			view.runOnHides();
		});

	},

	bindEventListeners: function () {

	},

	unbindEventListeners: function () {

	},

	onHide: function (fn, args, context) {

		var view = this,
			onHides = view.get('onHides') || [];

		onHides.push({
			fn: fn,
			args: args,
			context: context
		});

		view.set('onHides', onHides);

		return view;

	},

	runOnHides: function () {

		var view = this,
			onHides = view.get('onHides') || [];

		_.each(onHides, function (item) {
			item.fn.apply(item.context, item.args);
		});

		view.set('onHides', null);

	},

	clearOnHides: function () {
		this.set('onHides', null);
	}

});

hintMaster = {
	showHint: function (data, result) {
		return result ? (result.view = new HintView(data)) : new HintView(data);
	}
};

mediator.installTo(hintMaster);

hintMaster.subscribe('showHint', hintMaster.showHint);

gi5366['/www/js/app/view/core/hint.js'] = hintMaster;
}());
(function () {
'use strict';
/*global window */

var BaseView = gi5366['/www/js/app/view/core/base.js'] || window.BaseView;
var $ = gi5366['/www/js/lib/jbone.js'] || window.$;
var _ = gi5366['/www/js/lib/lodash.js'] || window._;
var sm = gi5366['/www/js/sound/sound-master.js'] || window.sm;
var tm = gi5366['/www/js/services/template-master.js'] || window.tm;
var info = gi5366['/www/js/services/info.js'] || window.info;
var mediator = gi5366['/www/js/services/mediator.js'] || window.mediator;

var win = window,
	PopupView,
	popupMaster;

PopupView = BaseView.extend({

	events: {
		//'click .js-popup-container': 'stopEvent'
		'click': 'hidePopupByRouter',
		'scroll': 'stopEvent'
	},

	selectors: {
		popupContainer: '.js-popup-container'
	},

	initialize: function (data) { // timeout, cssClass, from, data {text, header ...}, append$el, sound, onShow {context, fn}, onHide {context, fn}

		var view = this,
			popupUrl = view.popupUrl,
			url = win.location.href;

		if (url.indexOf(popupUrl) === -1) {
			view.publish('route-to-popup');
		}

		view.extendFromObj(data); // name, parentView, data(objToView)

		view.setElement(tm.tmplFn['popup-wrapper']());

		if (data.cssClass) {
			view.$el.addClass(data.cssClass);
		}

		BaseView.prototype.initialize.apply(this, arguments);

		view.render();

		view.showInAnimation();

		view.bindEventListeners();

		view.subscribe('hide-popup', view.hide);

	},

	bindEventListeners: function () {

		var view = this,
			timeout = view.get('timeout'),
			timeoutId;

		if (timeout) {
			timeoutId = setTimeout(function () {
				view.hidePopupByRouter();
			}, timeout);
			view.set('timeoutId', timeoutId);
		}

		view.bindExtraEvents();

	},

	unbindEventListeners: function () {

		var view = this,
			timeout = view.get('timeout');

		if (timeout) {
			clearTimeout(view.get('timeoutId'))
		}

		view.unbindExtraEvents();

	},

	bindExtraEvents: function () {

		var view = this,
			$el = view.$el,
			events = view.get('extraEvents');

		_.each(events, function (data) {
			$el.find(data.selector).on(data.event, data.fn);
		});

	},

	unbindExtraEvents: function () {

		var view = this,
			$el = view.$el,
			events = view.get('extraEvents');

		_.each(events, function (data) {
			$el.find(data.selector).off(data.event, data.fn);
		});

	},

	render: function () {

		var view = this,
			append$el = view.get('append$el'),
			data = view.get('data') || {},
			sound = view.get('sound'),
			$content = $(tm.tmplFn[view.get('name')](data)),
			$container = view.$el.find(view.selectors.popupContainer),
			onShow = view.get('onShow'),
			context;

		if (sound) {
			sm.play(sound);
		}

		$container.append($content);

		view.$wrapper.append(view.$el);

		if (onShow) {
			context = onShow.context || view;
			context[onShow.fn].apply(context, onShow.args);
		}

	},

	hide: function () {

		var view = this;

		view.showOutAnimation().then(function () {

			var onHide = view.get('onHide'),
				context;

			if (onHide) {
				context = onHide.context || view;
				context[onHide.fn].apply(context, onHide.args);
			}

			BaseView.prototype.hide.call(view);

			view.get('deferred').resolve();

		});

	},

	// actions
	showInAnimation: function () {
		var view = this;
		view.$el.addClass('popup-show-in');
	},

	showOutAnimation: function () {

		var view = this,
			$el = view.$el,
			deferred = $.Deferred(),
			animationEnd = info.get('animationEnd', true);

		$el.one(animationEnd, function () {
			deferred.resolve();
		}); // work only one time

		$el.addClass('popup-show-out');

		return deferred.promise();

	}

});

popupMaster = {
	showPopup: function (data, result) {
		return result ? (result.view = new PopupView(data)) : new PopupView(data);
	}
};

mediator.installTo(popupMaster);

popupMaster.subscribe('showPopup', popupMaster.showPopup);

gi5366['/www/js/app/view/core/popup.js'] = popupMaster;
}());
(function () {
'use strict';
/*global window */

var win = window,
	doc = win.document;

var mediator = gi5366['/www/js/services/mediator.js'] || window.mediator;

// init all librares
var shim = gi5366['/www/js/lib/shim.js'] || window.shim;
var lodash = gi5366['/www/js/lib/lodash.js'] || window.lodash;
var $ = gi5366['/www/js/lib/jbone.js'] || window.$;
var Deferred = gi5366['/www/js/lib/deferred.js'] || window.Deferred;
var Backbone = gi5366['/www/js/lib/backbone.js'] || window.Backbone;
var FastClick = gi5366['/www/js/lib/fastclick.js'] || window.FastClick;

// todo: - test - enable fast click
new FastClick(doc.body); // test it decide

var Swiper = gi5366['/www/js/lib/swiper.js'] || window.Swiper;

// init all services
var info = gi5366['/www/js/services/info.js'] || window.info;
var device = gi5366['/www/js/services/device.js'] || window.device;
var androidAds = gi5366['/www/js/services/android-ads.js'] || window.androidAds;
var lang = gi5366['/www/js/services/lang.js'] || window.lang;
var log = gi5366['/www/js/services/log.js'] || window.log;
var tm = gi5366['/www/js/services/template-master.js'] || window.tm;
var util = gi5366['/www/js/services/util.js'] || window.util;

// init sound players
var sm = gi5366['/www/js/sound/sound-master.js'] || window.sm;

// init bg
var bg = gi5366['/www/js/services/bg.js'] || window.bg;

var router = gi5366['/www/js/app/router/router.js'] || window.router;

var BaseView = gi5366['/www/js/app/view/core/base.js'] || window.BaseView;
var hintMaster = gi5366['/www/js/app/view/core/hint.js'] || window.hintMaster;
var popupMaster = gi5366['/www/js/app/view/core/popup.js'] || window.popupMaster;

(function back() {

	if ( win.location.hash ) {
		win.history.back();
		return win.setTimeout(back, 50);
	}

	Deferred.installInto($);

	bg.init();

	BaseView.prototype.initStatic();

	Backbone.history.start();

	win.setTimeout(androidAds.showAd, 3e3);

}());


}());

}({}));
