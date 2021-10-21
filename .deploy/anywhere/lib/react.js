/*! jQuery v1.11.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l="1.11.1",m=function(a,b){return new m.fn.init(a,b)},n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,o=/^-ms-/,p=/-([\da-z])/gi,q=function(a,b){return b.toUpperCase()};m.fn=m.prototype={jquery:l,constructor:m,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=m.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return m.each(this,a,b)},map:function(a){return this.pushStack(m.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},m.extend=m.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||m.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(m.isPlainObject(c)||(b=m.isArray(c)))?(b?(b=!1,f=a&&m.isArray(a)?a:[]):f=a&&m.isPlainObject(a)?a:{},g[d]=m.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},m.extend({expando:"jQuery"+(l+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===m.type(a)},isArray:Array.isArray||function(a){return"array"===m.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!m.isArray(a)&&a-parseFloat(a)>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(k.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&m.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(o,"ms-").replace(p,q)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=r(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(n,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(r(Object(a))?m.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=r(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),m.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||m.guid++,e):void 0},now:function(){return+new Date},support:k}),m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function r(a){var b=a.length,c=m.type(a);return"function"===c||m.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var s=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+-new Date,v=a.document,w=0,x=0,y=gb(),z=gb(),A=gb(),B=function(a,b){return a===b&&(l=!0),0},C="undefined",D=1<<31,E={}.hasOwnProperty,F=[],G=F.pop,H=F.push,I=F.push,J=F.slice,K=F.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},L="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",N="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=N.replace("w","w#"),P="\\["+M+"*("+N+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+O+"))|)"+M+"*\\]",Q=":("+N+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+P+")*)|.*)\\)|)",R=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),S=new RegExp("^"+M+"*,"+M+"*"),T=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),V=new RegExp(Q),W=new RegExp("^"+O+"$"),X={ID:new RegExp("^#("+N+")"),CLASS:new RegExp("^\\.("+N+")"),TAG:new RegExp("^("+N.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+Q),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+L+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{I.apply(F=J.call(v.childNodes),v.childNodes),F[v.childNodes.length].nodeType}catch(eb){I={apply:F.length?function(a,b){H.apply(a,J.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],!a||"string"!=typeof a)return d;if(1!==(k=b.nodeType)&&9!==k)return[];if(p&&!e){if(f=_.exec(a))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return I.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return I.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=9===k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+qb(o[l]);w=ab.test(a)&&ob(b.parentNode)||b,x=o.join(",")}if(x)try{return I.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function gb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function hb(a){return a[u]=!0,a}function ib(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function jb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function kb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||D)-(~a.sourceIndex||D);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function lb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function nb(a){return hb(function(b){return b=+b,hb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function ob(a){return a&&typeof a.getElementsByTagName!==C&&a}c=fb.support={},f=fb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fb.setDocument=function(a){var b,e=a?a.ownerDocument||a:v,g=e.defaultView;return e!==n&&9===e.nodeType&&e.documentElement?(n=e,o=e.documentElement,p=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){m()},!1):g.attachEvent&&g.attachEvent("onunload",function(){m()})),c.attributes=ib(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ib(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(e.getElementsByClassName)&&ib(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=ib(function(a){return o.appendChild(a).id=u,!e.getElementsByName||!e.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==C&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c=typeof a.getAttributeNode!==C&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==C?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==C&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(e.querySelectorAll))&&(ib(function(a){a.innerHTML="<select msallowclip=''><option selected=''></option></select>",a.querySelectorAll("[msallowclip^='']").length&&q.push("[*^$]="+M+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+M+"*(?:value|"+L+")"),a.querySelectorAll(":checked").length||q.push(":checked")}),ib(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+M+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ib(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",Q)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===v&&t(v,a)?-1:b===e||b.ownerDocument===v&&t(v,b)?1:k?K.call(k,a)-K.call(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],i=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:k?K.call(k,a)-K.call(k,b):0;if(f===g)return kb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?kb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},e):n},fb.matches=function(a,b){return fb(a,null,null,b)},fb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fb(b,n,null,[a]).length>0},fb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&E.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fb.selectors={cacheLength:50,createPseudo:hb,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+M+")"+a+"("+M+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==C&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?hb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=K.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:hb(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?hb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:hb(function(a){return function(b){return fb(a,b).length>0}}),contains:hb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:hb(function(a){return W.test(a||"")||fb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:nb(function(){return[0]}),last:nb(function(a,b){return[b-1]}),eq:nb(function(a,b,c){return[0>c?c+b:c]}),even:nb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:nb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:nb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:nb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=lb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=mb(b);function pb(){}pb.prototype=d.filters=d.pseudos,d.setFilters=new pb,g=fb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fb.error(a):z(a,i).slice(0)};function qb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function rb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function sb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function tb(a,b,c){for(var d=0,e=b.length;e>d;d++)fb(a,b[d],c);return c}function ub(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function vb(a,b,c,d,e,f){return d&&!d[u]&&(d=vb(d)),e&&!e[u]&&(e=vb(e,f)),hb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||tb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ub(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ub(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?K.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ub(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):I.apply(g,r)})}function wb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=rb(function(a){return a===b},h,!0),l=rb(function(a){return K.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>i;i++)if(c=d.relative[a[i].type])m=[rb(sb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return vb(i>1&&sb(m),i>1&&qb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&wb(a.slice(i,e)),f>e&&wb(a=a.slice(e)),f>e&&qb(a))}m.push(c)}return sb(m)}function xb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=G.call(i));s=ub(s)}I.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&fb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?hb(f):f}return h=fb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xb(e,d)),f.selector=a}return f},i=fb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&ob(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qb(j),!a)return I.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&ob(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ib(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ib(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||jb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ib(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||jb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ib(function(a){return null==a.getAttribute("disabled")})||jb(L,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fb}(a);m.find=s,m.expr=s.selectors,m.expr[":"]=m.expr.pseudos,m.unique=s.uniqueSort,m.text=s.getText,m.isXMLDoc=s.isXML,m.contains=s.contains;var t=m.expr.match.needsContext,u=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/^.[^:#\[\.,]*$/;function w(a,b,c){if(m.isFunction(b))return m.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return m.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(v.test(b))return m.filter(b,a,c);b=m.filter(b,a)}return m.grep(a,function(a){return m.inArray(a,b)>=0!==c})}m.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?m.find.matchesSelector(d,a)?[d]:[]:m.find.matches(a,m.grep(b,function(a){return 1===a.nodeType}))},m.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(m(a).filter(function(){for(b=0;e>b;b++)if(m.contains(d[b],this))return!0}));for(b=0;e>b;b++)m.find(a,d[b],c);return c=this.pushStack(e>1?m.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(w(this,a||[],!1))},not:function(a){return this.pushStack(w(this,a||[],!0))},is:function(a){return!!w(this,"string"==typeof a&&t.test(a)?m(a):a||[],!1).length}});var x,y=a.document,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=m.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||x).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof m?b[0]:b,m.merge(this,m.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:y,!0)),u.test(c[1])&&m.isPlainObject(b))for(c in b)m.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=y.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return x.find(a);this.length=1,this[0]=d}return this.context=y,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):m.isFunction(a)?"undefined"!=typeof x.ready?x.ready(a):a(m):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),m.makeArray(a,this))};A.prototype=m.fn,x=m(y);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};m.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!m(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),m.fn.extend({has:function(a){var b,c=m(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(m.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=t.test(a)||"string"!=typeof a?m(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&m.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?m.unique(f):f)},index:function(a){return a?"string"==typeof a?m.inArray(this[0],m(a)):m.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(m.unique(m.merge(this.get(),m(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}m.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return m.dir(a,"parentNode")},parentsUntil:function(a,b,c){return m.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return m.dir(a,"nextSibling")},prevAll:function(a){return m.dir(a,"previousSibling")},nextUntil:function(a,b,c){return m.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return m.dir(a,"previousSibling",c)},siblings:function(a){return m.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return m.sibling(a.firstChild)},contents:function(a){return m.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:m.merge([],a.childNodes)}},function(a,b){m.fn[a]=function(c,d){var e=m.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=m.filter(d,e)),this.length>1&&(C[a]||(e=m.unique(e)),B.test(a)&&(e=e.reverse())),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return m.each(a.match(E)||[],function(a,c){b[c]=!0}),b}m.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):m.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){m.each(b,function(b,c){var d=m.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&m.each(arguments,function(a,c){var d;while((d=m.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?m.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},m.extend({Deferred:function(a){var b=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return m.Deferred(function(c){m.each(b,function(b,f){var g=m.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&m.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?m.extend(a,d):d}},e={};return d.pipe=d.then,m.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&m.isFunction(a.promise)?e:0,g=1===f?a:m.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&m.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;m.fn.ready=function(a){return m.ready.promise().done(a),this},m.extend({isReady:!1,readyWait:1,holdReady:function(a){a?m.readyWait++:m.ready(!0)},ready:function(a){if(a===!0?!--m.readyWait:!m.isReady){if(!y.body)return setTimeout(m.ready);m.isReady=!0,a!==!0&&--m.readyWait>0||(H.resolveWith(y,[m]),m.fn.triggerHandler&&(m(y).triggerHandler("ready"),m(y).off("ready")))}}});function I(){y.addEventListener?(y.removeEventListener("DOMContentLoaded",J,!1),a.removeEventListener("load",J,!1)):(y.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))}function J(){(y.addEventListener||"load"===event.type||"complete"===y.readyState)&&(I(),m.ready())}m.ready.promise=function(b){if(!H)if(H=m.Deferred(),"complete"===y.readyState)setTimeout(m.ready);else if(y.addEventListener)y.addEventListener("DOMContentLoaded",J,!1),a.addEventListener("load",J,!1);else{y.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);var c=!1;try{c=null==a.frameElement&&y.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!m.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}I(),m.ready()}}()}return H.promise(b)};var K="undefined",L;for(L in m(k))break;k.ownLast="0"!==L,k.inlineBlockNeedsLayout=!1,m(function(){var a,b,c,d;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",k.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))}),function(){var a=y.createElement("div");if(null==k.deleteExpando){k.deleteExpando=!0;try{delete a.test}catch(b){k.deleteExpando=!1}}a=null}(),m.acceptData=function(a){var b=m.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:M.test(c)?m.parseJSON(c):c}catch(e){}m.data(a,b,c)}else c=void 0}return c}function P(a){var b;for(b in a)if(("data"!==b||!m.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function Q(a,b,d,e){if(m.acceptData(a)){var f,g,h=m.expando,i=a.nodeType,j=i?m.cache:a,k=i?a[h]:a[h]&&h;
    if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||m.guid++:h),j[k]||(j[k]=i?{}:{toJSON:m.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=m.extend(j[k],b):j[k].data=m.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[m.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[m.camelCase(b)])):f=g,f}}function R(a,b,c){if(m.acceptData(a)){var d,e,f=a.nodeType,g=f?m.cache:a,h=f?a[m.expando]:m.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){m.isArray(b)?b=b.concat(m.map(b,m.camelCase)):b in d?b=[b]:(b=m.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!P(d):!m.isEmptyObject(d))return}(c||(delete g[h].data,P(g[h])))&&(f?m.cleanData([a],!0):k.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}m.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?m.cache[a[m.expando]]:a[m.expando],!!a&&!P(a)},data:function(a,b,c){return Q(a,b,c)},removeData:function(a,b){return R(a,b)},_data:function(a,b,c){return Q(a,b,c,!0)},_removeData:function(a,b){return R(a,b,!0)}}),m.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=m.data(f),1===f.nodeType&&!m._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=m.camelCase(d.slice(5)),O(f,d,e[d])));m._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){m.data(this,a)}):arguments.length>1?this.each(function(){m.data(this,a,b)}):f?O(f,a,m.data(f,a)):void 0},removeData:function(a){return this.each(function(){m.removeData(this,a)})}}),m.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=m._data(a,b),c&&(!d||m.isArray(c)?d=m._data(a,b,m.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=m.queue(a,b),d=c.length,e=c.shift(),f=m._queueHooks(a,b),g=function(){m.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return m._data(a,c)||m._data(a,c,{empty:m.Callbacks("once memory").add(function(){m._removeData(a,b+"queue"),m._removeData(a,c)})})}}),m.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?m.queue(this[0],a):void 0===b?this:this.each(function(){var c=m.queue(this,a,b);m._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&m.dequeue(this,a)})},dequeue:function(a){return this.each(function(){m.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=m.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=m._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=["Top","Right","Bottom","Left"],U=function(a,b){return a=b||a,"none"===m.css(a,"display")||!m.contains(a.ownerDocument,a)},V=m.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===m.type(c)){e=!0;for(h in c)m.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,m.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(m(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},W=/^(?:checkbox|radio)$/i;!function(){var a=y.createElement("input"),b=y.createElement("div"),c=y.createDocumentFragment();if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",k.leadingWhitespace=3===b.firstChild.nodeType,k.tbody=!b.getElementsByTagName("tbody").length,k.htmlSerialize=!!b.getElementsByTagName("link").length,k.html5Clone="<:nav></:nav>"!==y.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),k.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,k.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){k.noCloneEvent=!1}),b.cloneNode(!0).click()),null==k.deleteExpando){k.deleteExpando=!0;try{delete b.test}catch(d){k.deleteExpando=!1}}}(),function(){var b,c,d=y.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(k[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),k[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var X=/^(?:input|select|textarea)$/i,Y=/^key/,Z=/^(?:mouse|pointer|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=/^([^.]*)(?:\.(.+)|)$/;function ab(){return!0}function bb(){return!1}function cb(){try{return y.activeElement}catch(a){}}m.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=m.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof m===K||a&&m.event.triggered===a.type?void 0:m.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(E)||[""],h=b.length;while(h--)f=_.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=m.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=m.event.special[o]||{},l=m.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&m.expr.match.needsContext.test(e),namespace:p.join(".")},i),(n=g[o])||(n=g[o]=[],n.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?n.splice(n.delegateCount++,0,l):n.push(l),m.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m.hasData(a)&&m._data(a);if(r&&(k=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=_.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=m.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,n=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=n.length;while(f--)g=n[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(n.splice(f,1),g.selector&&n.delegateCount--,l.remove&&l.remove.call(a,g));i&&!n.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||m.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)m.event.remove(a,o+b[j],c,d,!0);m.isEmptyObject(k)&&(delete r.handle,m._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,o=[d||y],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||y,3!==d.nodeType&&8!==d.nodeType&&!$.test(p+m.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[m.expando]?b:new m.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:m.makeArray(c,[b]),k=m.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!m.isWindow(d)){for(i=k.delegateType||p,$.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||y)&&o.push(l.defaultView||l.parentWindow||a)}n=0;while((h=o[n++])&&!b.isPropagationStopped())b.type=n>1?i:k.bindType||p,f=(m._data(h,"events")||{})[b.type]&&m._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&m.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&m.acceptData(d)&&g&&d[p]&&!m.isWindow(d)){l=d[g],l&&(d[g]=null),m.event.triggered=p;try{d[p]()}catch(r){}m.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=m.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(m._data(this,"events")||{})[a.type]||[],k=m.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=m.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((m.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?m(c,this).index(i)>=0:m.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[m.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=Z.test(e)?this.mouseHooks:Y.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new m.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||y,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==cb()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===cb()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return m.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return m.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=m.extend(new m.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?m.event.trigger(e,null,b):m.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},m.removeEvent=y.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===K&&(a[d]=null),a.detachEvent(d,c))},m.Event=function(a,b){return this instanceof m.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ab:bb):this.type=a,b&&m.extend(this,b),this.timeStamp=a&&a.timeStamp||m.now(),void(this[m.expando]=!0)):new m.Event(a,b)},m.Event.prototype={isDefaultPrevented:bb,isPropagationStopped:bb,isImmediatePropagationStopped:bb,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ab,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ab,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ab,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){m.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!m.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.submitBubbles||(m.event.special.submit={setup:function(){return m.nodeName(this,"form")?!1:void m.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=m.nodeName(b,"input")||m.nodeName(b,"button")?b.form:void 0;c&&!m._data(c,"submitBubbles")&&(m.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),m._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&m.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return m.nodeName(this,"form")?!1:void m.event.remove(this,"._submit")}}),k.changeBubbles||(m.event.special.change={setup:function(){return X.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(m.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),m.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),m.event.simulate("change",this,a,!0)})),!1):void m.event.add(this,"beforeactivate._change",function(a){var b=a.target;X.test(b.nodeName)&&!m._data(b,"changeBubbles")&&(m.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||m.event.simulate("change",this.parentNode,a,!0)}),m._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return m.event.remove(this,"._change"),!X.test(this.nodeName)}}),k.focusinBubbles||m.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){m.event.simulate(b,a.target,m.event.fix(a),!0)};m.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=m._data(d,b);e||d.addEventListener(a,c,!0),m._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=m._data(d,b)-1;e?m._data(d,b,e):(d.removeEventListener(a,c,!0),m._removeData(d,b))}}}),m.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=bb;else if(!d)return this;return 1===e&&(g=d,d=function(a){return m().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=m.guid++)),this.each(function(){m.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,m(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=bb),this.each(function(){m.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){m.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?m.event.trigger(a,b,c,!0):void 0}});function db(a){var b=eb.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var eb="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",fb=/ jQuery\d+="(?:null|\d+)"/g,gb=new RegExp("<(?:"+eb+")[\\s/>]","i"),hb=/^\s+/,ib=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,jb=/<([\w:]+)/,kb=/<tbody/i,lb=/<|&#?\w+;/,mb=/<(?:script|style|link)/i,nb=/checked\s*(?:[^=]|=\s*.checked.)/i,ob=/^$|\/(?:java|ecma)script/i,pb=/^true\/(.*)/,qb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,rb={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},sb=db(y),tb=sb.appendChild(y.createElement("div"));rb.optgroup=rb.option,rb.tbody=rb.tfoot=rb.colgroup=rb.caption=rb.thead,rb.th=rb.td;function ub(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==K?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==K?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||m.nodeName(d,b)?f.push(d):m.merge(f,ub(d,b));return void 0===b||b&&m.nodeName(a,b)?m.merge([a],f):f}function vb(a){W.test(a.type)&&(a.defaultChecked=a.checked)}function wb(a,b){return m.nodeName(a,"table")&&m.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function xb(a){return a.type=(null!==m.find.attr(a,"type"))+"/"+a.type,a}function yb(a){var b=pb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function zb(a,b){for(var c,d=0;null!=(c=a[d]);d++)m._data(c,"globalEval",!b||m._data(b[d],"globalEval"))}function Ab(a,b){if(1===b.nodeType&&m.hasData(a)){var c,d,e,f=m._data(a),g=m._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)m.event.add(b,c,h[c][d])}g.data&&(g.data=m.extend({},g.data))}}function Bb(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!k.noCloneEvent&&b[m.expando]){e=m._data(b);for(d in e.events)m.removeEvent(b,d,e.handle);b.removeAttribute(m.expando)}"script"===c&&b.text!==a.text?(xb(b).text=a.text,yb(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),k.html5Clone&&a.innerHTML&&!m.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&W.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}m.extend({clone:function(a,b,c){var d,e,f,g,h,i=m.contains(a.ownerDocument,a);if(k.html5Clone||m.isXMLDoc(a)||!gb.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(tb.innerHTML=a.outerHTML,tb.removeChild(f=tb.firstChild)),!(k.noCloneEvent&&k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||m.isXMLDoc(a)))for(d=ub(f),h=ub(a),g=0;null!=(e=h[g]);++g)d[g]&&Bb(e,d[g]);if(b)if(c)for(h=h||ub(a),d=d||ub(f),g=0;null!=(e=h[g]);g++)Ab(e,d[g]);else Ab(a,f);return d=ub(f,"script"),d.length>0&&zb(d,!i&&ub(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,l,n=a.length,o=db(b),p=[],q=0;n>q;q++)if(f=a[q],f||0===f)if("object"===m.type(f))m.merge(p,f.nodeType?[f]:f);else if(lb.test(f)){h=h||o.appendChild(b.createElement("div")),i=(jb.exec(f)||["",""])[1].toLowerCase(),l=rb[i]||rb._default,h.innerHTML=l[1]+f.replace(ib,"<$1></$2>")+l[2],e=l[0];while(e--)h=h.lastChild;if(!k.leadingWhitespace&&hb.test(f)&&p.push(b.createTextNode(hb.exec(f)[0])),!k.tbody){f="table"!==i||kb.test(f)?"<table>"!==l[1]||kb.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)m.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}m.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),k.appendChecked||m.grep(ub(p,"input"),vb),q=0;while(f=p[q++])if((!d||-1===m.inArray(f,d))&&(g=m.contains(f.ownerDocument,f),h=ub(o.appendChild(f),"script"),g&&zb(h),c)){e=0;while(f=h[e++])ob.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=m.expando,j=m.cache,l=k.deleteExpando,n=m.event.special;null!=(d=a[h]);h++)if((b||m.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)n[e]?m.event.remove(d,e):m.removeEvent(d,e,g.handle);j[f]&&(delete j[f],l?delete d[i]:typeof d.removeAttribute!==K?d.removeAttribute(i):d[i]=null,c.push(f))}}}),m.fn.extend({text:function(a){return V(this,function(a){return void 0===a?m.text(this):this.empty().append((this[0]&&this[0].ownerDocument||y).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?m.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||m.cleanData(ub(c)),c.parentNode&&(b&&m.contains(c.ownerDocument,c)&&zb(ub(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&m.cleanData(ub(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&m.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return m.clone(this,a,b)})},html:function(a){return V(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(fb,""):void 0;if(!("string"!=typeof a||mb.test(a)||!k.htmlSerialize&&gb.test(a)||!k.leadingWhitespace&&hb.test(a)||rb[(jb.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(ib,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(m.cleanData(ub(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,m.cleanData(ub(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,n=this,o=l-1,p=a[0],q=m.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&nb.test(p))return this.each(function(c){var d=n.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(i=m.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=m.map(ub(i,"script"),xb),f=g.length;l>j;j++)d=i,j!==o&&(d=m.clone(d,!0,!0),f&&m.merge(g,ub(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,m.map(g,yb),j=0;f>j;j++)d=g[j],ob.test(d.type||"")&&!m._data(d,"globalEval")&&m.contains(h,d)&&(d.src?m._evalUrl&&m._evalUrl(d.src):m.globalEval((d.text||d.textContent||d.innerHTML||"").replace(qb,"")));i=c=null}return this}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){m.fn[a]=function(a){for(var c,d=0,e=[],g=m(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),m(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Cb,Db={};function Eb(b,c){var d,e=m(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:m.css(e[0],"display");return e.detach(),f}function Fb(a){var b=y,c=Db[a];return c||(c=Eb(a,b),"none"!==c&&c||(Cb=(Cb||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Cb[0].contentWindow||Cb[0].contentDocument).document,b.write(),b.close(),c=Eb(a,b),Cb.detach()),Db[a]=c),c}!function(){var a;k.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,d;return c=y.getElementsByTagName("body")[0],c&&c.style?(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(y.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var Gb=/^margin/,Hb=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ib,Jb,Kb=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ib=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||m.contains(a.ownerDocument,a)||(g=m.style(a,b)),Hb.test(g)&&Gb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):y.documentElement.currentStyle&&(Ib=function(a){return a.currentStyle},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Hb.test(g)&&!Kb.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Lb(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h;if(b=y.createElement("div"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=d&&d.style){c.cssText="float:left;opacity:.5",k.opacity="0.5"===c.opacity,k.cssFloat=!!c.cssFloat,b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===b.style.backgroundClip,k.boxSizing=""===c.boxSizing||""===c.MozBoxSizing||""===c.WebkitBoxSizing,m.extend(k,{reliableHiddenOffsets:function(){return null==g&&i(),g},boxSizingReliable:function(){return null==f&&i(),f},pixelPosition:function(){return null==e&&i(),e},reliableMarginRight:function(){return null==h&&i(),h}});function i(){var b,c,d,i;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",e=f=!1,h=!0,a.getComputedStyle&&(e="1%"!==(a.getComputedStyle(b,null)||{}).top,f="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,i=b.appendChild(y.createElement("div")),i.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",b.style.width="1px",h=!parseFloat((a.getComputedStyle(i,null)||{}).marginRight)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=b.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",g=0===i[0].offsetHeight,g&&(i[0].style.display="",i[1].style.display="none",g=0===i[0].offsetHeight),c.removeChild(d))}}}(),m.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Mb=/alpha\([^)]*\)/i,Nb=/opacity\s*=\s*([^)]*)/,Ob=/^(none|table(?!-c[ea]).+)/,Pb=new RegExp("^("+S+")(.*)$","i"),Qb=new RegExp("^([+-])=("+S+")","i"),Rb={position:"absolute",visibility:"hidden",display:"block"},Sb={letterSpacing:"0",fontWeight:"400"},Tb=["Webkit","O","Moz","ms"];function Ub(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Tb.length;while(e--)if(b=Tb[e]+c,b in a)return b;return d}function Vb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=m._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&U(d)&&(f[g]=m._data(d,"olddisplay",Fb(d.nodeName)))):(e=U(d),(c&&"none"!==c||!e)&&m._data(d,"olddisplay",e?c:m.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Wb(a,b,c){var d=Pb.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Xb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=m.css(a,c+T[f],!0,e)),d?("content"===c&&(g-=m.css(a,"padding"+T[f],!0,e)),"margin"!==c&&(g-=m.css(a,"border"+T[f]+"Width",!0,e))):(g+=m.css(a,"padding"+T[f],!0,e),"padding"!==c&&(g+=m.css(a,"border"+T[f]+"Width",!0,e)));return g}function Yb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ib(a),g=k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Jb(a,b,f),(0>e||null==e)&&(e=a.style[b]),Hb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Xb(a,b,c||(g?"border":"content"),d,f)+"px"}m.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Jb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":k.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=m.camelCase(b),i=a.style;if(b=m.cssProps[h]||(m.cssProps[h]=Ub(i,h)),g=m.cssHooks[b]||m.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Qb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(m.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||m.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=m.camelCase(b);return b=m.cssProps[h]||(m.cssProps[h]=Ub(a.style,h)),g=m.cssHooks[b]||m.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Jb(a,b,d)),"normal"===f&&b in Sb&&(f=Sb[b]),""===c||c?(e=parseFloat(f),c===!0||m.isNumeric(e)?e||0:f):f}}),m.each(["height","width"],function(a,b){m.cssHooks[b]={get:function(a,c,d){return c?Ob.test(m.css(a,"display"))&&0===a.offsetWidth?m.swap(a,Rb,function(){return Yb(a,b,d)}):Yb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ib(a);return Wb(a,c,d?Xb(a,b,d,k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,e),e):0)}}}),k.opacity||(m.cssHooks.opacity={get:function(a,b){return Nb.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=m.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===m.trim(f.replace(Mb,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Mb.test(f)?f.replace(Mb,e):f+" "+e)}}),m.cssHooks.marginRight=Lb(k.reliableMarginRight,function(a,b){return b?m.swap(a,{display:"inline-block"},Jb,[a,"marginRight"]):void 0}),m.each({margin:"",padding:"",border:"Width"},function(a,b){m.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+T[d]+b]=f[d]||f[d-2]||f[0];return e}},Gb.test(a)||(m.cssHooks[a+b].set=Wb)}),m.fn.extend({css:function(a,b){return V(this,function(a,b,c){var d,e,f={},g=0;if(m.isArray(b)){for(d=Ib(a),e=b.length;e>g;g++)f[b[g]]=m.css(a,b[g],!1,d);return f}return void 0!==c?m.style(a,b,c):m.css(a,b)},a,b,arguments.length>1)},show:function(){return Vb(this,!0)},hide:function(){return Vb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){U(this)?m(this).show():m(this).hide()})}});function Zb(a,b,c,d,e){return new Zb.prototype.init(a,b,c,d,e)}m.Tween=Zb,Zb.prototype={constructor:Zb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(m.cssNumber[c]?"":"px")
    },cur:function(){var a=Zb.propHooks[this.prop];return a&&a.get?a.get(this):Zb.propHooks._default.get(this)},run:function(a){var b,c=Zb.propHooks[this.prop];return this.pos=b=this.options.duration?m.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Zb.propHooks._default.set(this),this}},Zb.prototype.init.prototype=Zb.prototype,Zb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=m.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){m.fx.step[a.prop]?m.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[m.cssProps[a.prop]]||m.cssHooks[a.prop])?m.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Zb.propHooks.scrollTop=Zb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},m.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},m.fx=Zb.prototype.init,m.fx.step={};var $b,_b,ac=/^(?:toggle|show|hide)$/,bc=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),cc=/queueHooks$/,dc=[ic],ec={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=bc.exec(b),f=e&&e[3]||(m.cssNumber[a]?"":"px"),g=(m.cssNumber[a]||"px"!==f&&+d)&&bc.exec(m.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,m.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function fc(){return setTimeout(function(){$b=void 0}),$b=m.now()}function gc(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=T[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function hc(a,b,c){for(var d,e=(ec[b]||[]).concat(ec["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ic(a,b,c){var d,e,f,g,h,i,j,l,n=this,o={},p=a.style,q=a.nodeType&&U(a),r=m._data(a,"fxshow");c.queue||(h=m._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,n.always(function(){n.always(function(){h.unqueued--,m.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=m.css(a,"display"),l="none"===j?m._data(a,"olddisplay")||Fb(a.nodeName):j,"inline"===l&&"none"===m.css(a,"float")&&(k.inlineBlockNeedsLayout&&"inline"!==Fb(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",k.shrinkWrapBlocks()||n.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],ac.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||m.style(a,d)}else j=void 0;if(m.isEmptyObject(o))"inline"===("none"===j?Fb(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=m._data(a,"fxshow",{}),f&&(r.hidden=!q),q?m(a).show():n.done(function(){m(a).hide()}),n.done(function(){var b;m._removeData(a,"fxshow");for(b in o)m.style(a,b,o[b])});for(d in o)g=hc(q?r[d]:0,d,n),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function jc(a,b){var c,d,e,f,g;for(c in a)if(d=m.camelCase(c),e=b[d],f=a[c],m.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=m.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kc(a,b,c){var d,e,f=0,g=dc.length,h=m.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=$b||fc(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:m.extend({},b),opts:m.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$b||fc(),duration:c.duration,tweens:[],createTween:function(b,c){var d=m.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jc(k,j.opts.specialEasing);g>f;f++)if(d=dc[f].call(j,a,k,j.opts))return d;return m.map(k,hc,j),m.isFunction(j.opts.start)&&j.opts.start.call(a,j),m.fx.timer(m.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}m.Animation=m.extend(kc,{tweener:function(a,b){m.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],ec[c]=ec[c]||[],ec[c].unshift(b)},prefilter:function(a,b){b?dc.unshift(a):dc.push(a)}}),m.speed=function(a,b,c){var d=a&&"object"==typeof a?m.extend({},a):{complete:c||!c&&b||m.isFunction(a)&&a,duration:a,easing:c&&b||b&&!m.isFunction(b)&&b};return d.duration=m.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in m.fx.speeds?m.fx.speeds[d.duration]:m.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){m.isFunction(d.old)&&d.old.call(this),d.queue&&m.dequeue(this,d.queue)},d},m.fn.extend({fadeTo:function(a,b,c,d){return this.filter(U).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=m.isEmptyObject(a),f=m.speed(b,c,d),g=function(){var b=kc(this,m.extend({},a),f);(e||m._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=m.timers,g=m._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&cc.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&m.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=m._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=m.timers,g=d?d.length:0;for(c.finish=!0,m.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),m.each(["toggle","show","hide"],function(a,b){var c=m.fn[b];m.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gc(b,!0),a,d,e)}}),m.each({slideDown:gc("show"),slideUp:gc("hide"),slideToggle:gc("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){m.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),m.timers=[],m.fx.tick=function(){var a,b=m.timers,c=0;for($b=m.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||m.fx.stop(),$b=void 0},m.fx.timer=function(a){m.timers.push(a),a()?m.fx.start():m.timers.pop()},m.fx.interval=13,m.fx.start=function(){_b||(_b=setInterval(m.fx.tick,m.fx.interval))},m.fx.stop=function(){clearInterval(_b),_b=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(a,b){return a=m.fx?m.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e;b=y.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=y.createElement("select"),e=c.appendChild(y.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",k.getSetAttribute="t"!==b.className,k.style=/top/.test(d.getAttribute("style")),k.hrefNormalized="/a"===d.getAttribute("href"),k.checkOn=!!a.value,k.optSelected=e.selected,k.enctype=!!y.createElement("form").enctype,c.disabled=!0,k.optDisabled=!e.disabled,a=y.createElement("input"),a.setAttribute("value",""),k.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),k.radioValue="t"===a.value}();var lc=/\r/g;m.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=m.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,m(this).val()):a,null==e?e="":"number"==typeof e?e+="":m.isArray(e)&&(e=m.map(e,function(a){return null==a?"":a+""})),b=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=m.valHooks[e.type]||m.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(lc,""):null==c?"":c)}}}),m.extend({valHooks:{option:{get:function(a){var b=m.find.attr(a,"value");return null!=b?b:m.trim(m.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&m.nodeName(c.parentNode,"optgroup"))){if(b=m(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=m.makeArray(b),g=e.length;while(g--)if(d=e[g],m.inArray(m.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(a,b){return m.isArray(b)?a.checked=m.inArray(m(a).val(),b)>=0:void 0}},k.checkOn||(m.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var mc,nc,oc=m.expr.attrHandle,pc=/^(?:checked|selected)$/i,qc=k.getSetAttribute,rc=k.input;m.fn.extend({attr:function(a,b){return V(this,m.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){m.removeAttr(this,a)})}}),m.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===K?m.prop(a,b,c):(1===f&&m.isXMLDoc(a)||(b=b.toLowerCase(),d=m.attrHooks[b]||(m.expr.match.bool.test(b)?nc:mc)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=m.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void m.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=m.propFix[c]||c,m.expr.match.bool.test(c)?rc&&qc||!pc.test(c)?a[d]=!1:a[m.camelCase("default-"+c)]=a[d]=!1:m.attr(a,c,""),a.removeAttribute(qc?c:d)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&m.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),nc={set:function(a,b,c){return b===!1?m.removeAttr(a,c):rc&&qc||!pc.test(c)?a.setAttribute(!qc&&m.propFix[c]||c,c):a[m.camelCase("default-"+c)]=a[c]=!0,c}},m.each(m.expr.match.bool.source.match(/\w+/g),function(a,b){var c=oc[b]||m.find.attr;oc[b]=rc&&qc||!pc.test(b)?function(a,b,d){var e,f;return d||(f=oc[b],oc[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,oc[b]=f),e}:function(a,b,c){return c?void 0:a[m.camelCase("default-"+b)]?b.toLowerCase():null}}),rc&&qc||(m.attrHooks.value={set:function(a,b,c){return m.nodeName(a,"input")?void(a.defaultValue=b):mc&&mc.set(a,b,c)}}),qc||(mc={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},oc.id=oc.name=oc.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},m.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:mc.set},m.attrHooks.contenteditable={set:function(a,b,c){mc.set(a,""===b?!1:b,c)}},m.each(["width","height"],function(a,b){m.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),k.style||(m.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var sc=/^(?:input|select|textarea|button|object)$/i,tc=/^(?:a|area)$/i;m.fn.extend({prop:function(a,b){return V(this,m.prop,a,b,arguments.length>1)},removeProp:function(a){return a=m.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),m.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!m.isXMLDoc(a),f&&(b=m.propFix[b]||b,e=m.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=m.find.attr(a,"tabindex");return b?parseInt(b,10):sc.test(a.nodeName)||tc.test(a.nodeName)&&a.href?0:-1}}}}),k.hrefNormalized||m.each(["href","src"],function(a,b){m.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),k.optSelected||(m.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this}),k.enctype||(m.propFix.enctype="encoding");var uc=/[\t\r\n\f]/g;m.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=m.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?m.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(m.isFunction(a)?function(c){m(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=m(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===K||"boolean"===c)&&(this.className&&m._data(this,"__className__",this.className),this.className=this.className||a===!1?"":m._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(uc," ").indexOf(b)>=0)return!0;return!1}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){m.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),m.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var vc=m.now(),wc=/\?/,xc=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=m.trim(b+"");return e&&!m.trim(e.replace(xc,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():m.error("Invalid JSON: "+b)},m.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+b),c};var yc,zc,Ac=/#.*$/,Bc=/([?&])_=[^&]*/,Cc=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Dc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Ec=/^(?:GET|HEAD)$/,Fc=/^\/\//,Gc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Hc={},Ic={},Jc="*/".concat("*");try{zc=location.href}catch(Kc){zc=y.createElement("a"),zc.href="",zc=zc.href}yc=Gc.exec(zc.toLowerCase())||[];function Lc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(m.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Mc(a,b,c,d){var e={},f=a===Ic;function g(h){var i;return e[h]=!0,m.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Nc(a,b){var c,d,e=m.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&m.extend(!0,a,c),a}function Oc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Pc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:zc,type:"GET",isLocal:Dc.test(yc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Jc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Nc(Nc(a,m.ajaxSettings),b):Nc(m.ajaxSettings,a)},ajaxPrefilter:Lc(Hc),ajaxTransport:Lc(Ic),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=m.ajaxSetup({},b),l=k.context||k,n=k.context&&(l.nodeType||l.jquery)?m(l):m.event,o=m.Deferred(),p=m.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Cc.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||zc)+"").replace(Ac,"").replace(Fc,yc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=m.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(c=Gc.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===yc[1]&&c[2]===yc[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(yc[3]||("http:"===yc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=m.param(k.data,k.traditional)),Mc(Hc,k,b,v),2===t)return v;h=k.global,h&&0===m.active++&&m.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Ec.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(wc.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Bc.test(e)?e.replace(Bc,"$1_="+vc++):e+(wc.test(e)?"&":"?")+"_="+vc++)),k.ifModified&&(m.lastModified[e]&&v.setRequestHeader("If-Modified-Since",m.lastModified[e]),m.etag[e]&&v.setRequestHeader("If-None-Match",m.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Jc+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Mc(Ic,k,b,v)){v.readyState=1,h&&n.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Oc(k,v,c)),u=Pc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(m.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(m.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&n.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(n.trigger("ajaxComplete",[v,k]),--m.active||m.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return m.get(a,b,c,"json")},getScript:function(a,b){return m.get(a,void 0,b,"script")}}),m.each(["get","post"],function(a,b){m[b]=function(a,c,d,e){return m.isFunction(c)&&(e=e||d,d=c,c=void 0),m.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){m.fn[b]=function(a){return this.on(b,a)}}),m._evalUrl=function(a){return m.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},m.fn.extend({wrapAll:function(a){if(m.isFunction(a))return this.each(function(b){m(this).wrapAll(a.call(this,b))});if(this[0]){var b=m(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(m.isFunction(a)?function(b){m(this).wrapInner(a.call(this,b))}:function(){var b=m(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=m.isFunction(a);return this.each(function(c){m(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)}).end()}}),m.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!k.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||m.css(a,"display"))},m.expr.filters.visible=function(a){return!m.expr.filters.hidden(a)};var Qc=/%20/g,Rc=/\[\]$/,Sc=/\r?\n/g,Tc=/^(?:submit|button|image|reset|file)$/i,Uc=/^(?:input|select|textarea|keygen)/i;function Vc(a,b,c,d){var e;if(m.isArray(b))m.each(b,function(b,e){c||Rc.test(a)?d(a,e):Vc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==m.type(b))d(a,b);else for(e in b)Vc(a+"["+e+"]",b[e],c,d)}m.param=function(a,b){var c,d=[],e=function(a,b){b=m.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(a)||a.jquery&&!m.isPlainObject(a))m.each(a,function(){e(this.name,this.value)});else for(c in a)Vc(c,a[c],b,e);return d.join("&").replace(Qc,"+")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=m.prop(this,"elements");return a?m.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!m(this).is(":disabled")&&Uc.test(this.nodeName)&&!Tc.test(a)&&(this.checked||!W.test(a))}).map(function(a,b){var c=m(this).val();return null==c?null:m.isArray(c)?m.map(c,function(a){return{name:b.name,value:a.replace(Sc,"\r\n")}}):{name:b.name,value:c.replace(Sc,"\r\n")}}).get()}}),m.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Zc()||$c()}:Zc;var Wc=0,Xc={},Yc=m.ajaxSettings.xhr();a.ActiveXObject&&m(a).on("unload",function(){for(var a in Xc)Xc[a](void 0,!0)}),k.cors=!!Yc&&"withCredentials"in Yc,Yc=k.ajax=!!Yc,Yc&&m.ajaxTransport(function(a){if(!a.crossDomain||k.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Wc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Xc[g],b=void 0,f.onreadystatechange=m.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Xc[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function Zc(){try{return new a.XMLHttpRequest}catch(b){}}function $c(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return m.globalEval(a),a}}}),m.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),m.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=y.head||m("head")[0]||y.documentElement;return{send:function(d,e){b=y.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var _c=[],ad=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_c.pop()||m.expando+"_"+vc++;return this[a]=!0,a}}),m.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(ad.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&ad.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=m.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(ad,"$1"+e):b.jsonp!==!1&&(b.url+=(wc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||m.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,_c.push(e)),g&&m.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),m.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||y;var d=u.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=m.buildFragment([a],b,e),e&&e.length&&m(e).remove(),m.merge([],d.childNodes))};var bd=m.fn.load;m.fn.load=function(a,b,c){if("string"!=typeof a&&bd)return bd.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=m.trim(a.slice(h,a.length)),a=a.slice(0,h)),m.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&m.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?m("<div>").append(m.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},m.expr.filters.animated=function(a){return m.grep(m.timers,function(b){return a===b.elem}).length};var cd=a.document.documentElement;function dd(a){return m.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}m.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=m.css(a,"position"),l=m(a),n={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=m.css(a,"top"),i=m.css(a,"left"),j=("absolute"===k||"fixed"===k)&&m.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),m.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(n.top=b.top-h.top+g),null!=b.left&&(n.left=b.left-h.left+e),"using"in b?b.using.call(a,n):l.css(n)}},m.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){m.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,m.contains(b,e)?(typeof e.getBoundingClientRect!==K&&(d=e.getBoundingClientRect()),c=dd(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===m.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),m.nodeName(a[0],"html")||(c=a.offset()),c.top+=m.css(a[0],"borderTopWidth",!0),c.left+=m.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-m.css(d,"marginTop",!0),left:b.left-c.left-m.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||cd;while(a&&!m.nodeName(a,"html")&&"static"===m.css(a,"position"))a=a.offsetParent;return a||cd})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);m.fn[a]=function(d){return V(this,function(a,d,e){var f=dd(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?m(f).scrollLeft():e,c?e:m(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),m.each(["top","left"],function(a,b){m.cssHooks[b]=Lb(k.pixelPosition,function(a,c){return c?(c=Jb(a,b),Hb.test(c)?m(a).position()[b]+"px":c):void 0})}),m.each({Height:"height",Width:"width"},function(a,b){m.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){m.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return V(this,function(b,c,d){var e;return m.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?m.css(b,c,g):m.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),m.fn.size=function(){return this.length},m.fn.andSelf=m.fn.addBack,"function"==typeof define&&define("jquery/jquery/1.11.1/jquery",[],function(){return m});var ed=a.jQuery,fd=a.$;return m.noConflict=function(b){return a.$===m&&(a.$=fd),b&&a.jQuery===m&&(a.jQuery=ed),m},typeof b===K&&(a.jQuery=a.$=m),m});
/**
 * React v0.13.3
 *
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.React=e()}}(function(){return function e(t,n,r){function o(a,u){if(!n[a]){if(!t[a]){var s="function"==typeof require&&require;if(!u&&s)return s(a,!0);if(i)return i(a,!0);var l=new Error("Cannot find module '"+a+"'");throw l.code="MODULE_NOT_FOUND",l}var c=n[a]={exports:{}};t[a][0].call(c.exports,function(e){var n=t[a][1][e];return o(n?n:e)},c,c.exports,e,t,n,r)}return n[a].exports}for(var i="function"==typeof require&&require,a=0;a<r.length;a++)o(r[a]);return o}({1:[function(e,t,n){"use strict";var r=e(19),o=e(32),i=e(34),a=e(33),u=e(38),s=e(39),l=e(55),c=(e(56),e(40)),p=e(51),d=e(54),f=e(64),h=e(68),m=e(73),v=e(76),g=e(79),y=e(82),C=e(27),E=e(115),b=e(142);d.inject();var _=l.createElement,x=l.createFactory,D=l.cloneElement,M=m.measure("React","render",h.render),N={Children:{map:o.map,forEach:o.forEach,count:o.count,only:b},Component:i,DOM:c,PropTypes:v,initializeTouchEvents:function(e){r.useTouchEvents=e},createClass:a.createClass,createElement:_,cloneElement:D,createFactory:x,createMixin:function(e){return e},constructAndRenderComponent:h.constructAndRenderComponent,constructAndRenderComponentByID:h.constructAndRenderComponentByID,findDOMNode:E,render:M,renderToString:y.renderToString,renderToStaticMarkup:y.renderToStaticMarkup,unmountComponentAtNode:h.unmountComponentAtNode,isValidElement:l.isValidElement,withContext:u.withContext,__spread:C};"undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.inject&&__REACT_DEVTOOLS_GLOBAL_HOOK__.inject({CurrentOwner:s,InstanceHandles:f,Mount:h,Reconciler:g,TextComponent:p});N.version="0.13.3",t.exports=N},{115:115,142:142,19:19,27:27,32:32,33:33,34:34,38:38,39:39,40:40,51:51,54:54,55:55,56:56,64:64,68:68,73:73,76:76,79:79,82:82}],2:[function(e,t,n){"use strict";var r=e(117),o={componentDidMount:function(){this.props.autoFocus&&r(this.getDOMNode())}};t.exports=o},{117:117}],3:[function(e,t,n){"use strict";function r(){var e=window.opera;return"object"==typeof e&&"function"==typeof e.version&&parseInt(e.version(),10)<=12}function o(e){return(e.ctrlKey||e.altKey||e.metaKey)&&!(e.ctrlKey&&e.altKey)}function i(e){switch(e){case T.topCompositionStart:return P.compositionStart;case T.topCompositionEnd:return P.compositionEnd;case T.topCompositionUpdate:return P.compositionUpdate}}function a(e,t){return e===T.topKeyDown&&t.keyCode===b}function u(e,t){switch(e){case T.topKeyUp:return-1!==E.indexOf(t.keyCode);case T.topKeyDown:return t.keyCode!==b;case T.topKeyPress:case T.topMouseDown:case T.topBlur:return!0;default:return!1}}function s(e){var t=e.detail;return"object"==typeof t&&"data"in t?t.data:null}function l(e,t,n,r){var o,l;if(_?o=i(e):w?u(e,r)&&(o=P.compositionEnd):a(e,r)&&(o=P.compositionStart),!o)return null;M&&(w||o!==P.compositionStart?o===P.compositionEnd&&w&&(l=w.getData()):w=v.getPooled(t));var c=g.getPooled(o,n,r);if(l)c.data=l;else{var p=s(r);null!==p&&(c.data=p)}return h.accumulateTwoPhaseDispatches(c),c}function c(e,t){switch(e){case T.topCompositionEnd:return s(t);case T.topKeyPress:var n=t.which;return n!==N?null:(R=!0,I);case T.topTextInput:var r=t.data;return r===I&&R?null:r;default:return null}}function p(e,t){if(w){if(e===T.topCompositionEnd||u(e,t)){var n=w.getData();return v.release(w),w=null,n}return null}switch(e){case T.topPaste:return null;case T.topKeyPress:return t.which&&!o(t)?String.fromCharCode(t.which):null;case T.topCompositionEnd:return M?null:t.data;default:return null}}function d(e,t,n,r){var o;if(o=D?c(e,r):p(e,r),!o)return null;var i=y.getPooled(P.beforeInput,n,r);return i.data=o,h.accumulateTwoPhaseDispatches(i),i}var f=e(15),h=e(20),m=e(21),v=e(22),g=e(91),y=e(95),C=e(139),E=[9,13,27,32],b=229,_=m.canUseDOM&&"CompositionEvent"in window,x=null;m.canUseDOM&&"documentMode"in document&&(x=document.documentMode);var D=m.canUseDOM&&"TextEvent"in window&&!x&&!r(),M=m.canUseDOM&&(!_||x&&x>8&&11>=x),N=32,I=String.fromCharCode(N),T=f.topLevelTypes,P={beforeInput:{phasedRegistrationNames:{bubbled:C({onBeforeInput:null}),captured:C({onBeforeInputCapture:null})},dependencies:[T.topCompositionEnd,T.topKeyPress,T.topTextInput,T.topPaste]},compositionEnd:{phasedRegistrationNames:{bubbled:C({onCompositionEnd:null}),captured:C({onCompositionEndCapture:null})},dependencies:[T.topBlur,T.topCompositionEnd,T.topKeyDown,T.topKeyPress,T.topKeyUp,T.topMouseDown]},compositionStart:{phasedRegistrationNames:{bubbled:C({onCompositionStart:null}),captured:C({onCompositionStartCapture:null})},dependencies:[T.topBlur,T.topCompositionStart,T.topKeyDown,T.topKeyPress,T.topKeyUp,T.topMouseDown]},compositionUpdate:{phasedRegistrationNames:{bubbled:C({onCompositionUpdate:null}),captured:C({onCompositionUpdateCapture:null})},dependencies:[T.topBlur,T.topCompositionUpdate,T.topKeyDown,T.topKeyPress,T.topKeyUp,T.topMouseDown]}},R=!1,w=null,O={eventTypes:P,extractEvents:function(e,t,n,r){return[l(e,t,n,r),d(e,t,n,r)]}};t.exports=O},{139:139,15:15,20:20,21:21,22:22,91:91,95:95}],4:[function(e,t,n){"use strict";function r(e,t){return e+t.charAt(0).toUpperCase()+t.substring(1)}var o={boxFlex:!0,boxFlexGroup:!0,columnCount:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,strokeDashoffset:!0,strokeOpacity:!0,strokeWidth:!0},i=["Webkit","ms","Moz","O"];Object.keys(o).forEach(function(e){i.forEach(function(t){o[r(t,e)]=o[e]})});var a={background:{backgroundImage:!0,backgroundPosition:!0,backgroundRepeat:!0,backgroundColor:!0},border:{borderWidth:!0,borderStyle:!0,borderColor:!0},borderBottom:{borderBottomWidth:!0,borderBottomStyle:!0,borderBottomColor:!0},borderLeft:{borderLeftWidth:!0,borderLeftStyle:!0,borderLeftColor:!0},borderRight:{borderRightWidth:!0,borderRightStyle:!0,borderRightColor:!0},borderTop:{borderTopWidth:!0,borderTopStyle:!0,borderTopColor:!0},font:{fontStyle:!0,fontVariant:!0,fontWeight:!0,fontSize:!0,lineHeight:!0,fontFamily:!0}},u={isUnitlessNumber:o,shorthandPropertyExpansions:a};t.exports=u},{}],5:[function(e,t,n){"use strict";var r=e(4),o=e(21),i=(e(106),e(111)),a=e(131),u=e(141),s=(e(150),u(function(e){return a(e)})),l="cssFloat";o.canUseDOM&&void 0===document.documentElement.style.cssFloat&&(l="styleFloat");var c={createMarkupForStyles:function(e){var t="";for(var n in e)if(e.hasOwnProperty(n)){var r=e[n];null!=r&&(t+=s(n)+":",t+=i(n,r)+";")}return t||null},setValueForStyles:function(e,t){var n=e.style;for(var o in t)if(t.hasOwnProperty(o)){var a=i(o,t[o]);if("float"===o&&(o=l),a)n[o]=a;else{var u=r.shorthandPropertyExpansions[o];if(u)for(var s in u)n[s]="";else n[o]=""}}}};t.exports=c},{106:106,111:111,131:131,141:141,150:150,21:21,4:4}],6:[function(e,t,n){"use strict";function r(){this._callbacks=null,this._contexts=null}var o=e(28),i=e(27),a=e(133);i(r.prototype,{enqueue:function(e,t){this._callbacks=this._callbacks||[],this._contexts=this._contexts||[],this._callbacks.push(e),this._contexts.push(t)},notifyAll:function(){var e=this._callbacks,t=this._contexts;if(e){a(e.length===t.length),this._callbacks=null,this._contexts=null;for(var n=0,r=e.length;r>n;n++)e[n].call(t[n]);e.length=0,t.length=0}},reset:function(){this._callbacks=null,this._contexts=null},destructor:function(){this.reset()}}),o.addPoolingTo(r),t.exports=r},{133:133,27:27,28:28}],7:[function(e,t,n){"use strict";function r(e){return"SELECT"===e.nodeName||"INPUT"===e.nodeName&&"file"===e.type}function o(e){var t=x.getPooled(T.change,R,e);E.accumulateTwoPhaseDispatches(t),_.batchedUpdates(i,t)}function i(e){C.enqueueEvents(e),C.processEventQueue()}function a(e,t){P=e,R=t,P.attachEvent("onchange",o)}function u(){P&&(P.detachEvent("onchange",o),P=null,R=null)}function s(e,t,n){return e===I.topChange?n:void 0}function l(e,t,n){e===I.topFocus?(u(),a(t,n)):e===I.topBlur&&u()}function c(e,t){P=e,R=t,w=e.value,O=Object.getOwnPropertyDescriptor(e.constructor.prototype,"value"),Object.defineProperty(P,"value",k),P.attachEvent("onpropertychange",d)}function p(){P&&(delete P.value,P.detachEvent("onpropertychange",d),P=null,R=null,w=null,O=null)}function d(e){if("value"===e.propertyName){var t=e.srcElement.value;t!==w&&(w=t,o(e))}}function f(e,t,n){return e===I.topInput?n:void 0}function h(e,t,n){e===I.topFocus?(p(),c(t,n)):e===I.topBlur&&p()}function m(e,t,n){return e!==I.topSelectionChange&&e!==I.topKeyUp&&e!==I.topKeyDown||!P||P.value===w?void 0:(w=P.value,R)}function v(e){return"INPUT"===e.nodeName&&("checkbox"===e.type||"radio"===e.type)}function g(e,t,n){return e===I.topClick?n:void 0}var y=e(15),C=e(17),E=e(20),b=e(21),_=e(85),x=e(93),D=e(134),M=e(136),N=e(139),I=y.topLevelTypes,T={change:{phasedRegistrationNames:{bubbled:N({onChange:null}),captured:N({onChangeCapture:null})},dependencies:[I.topBlur,I.topChange,I.topClick,I.topFocus,I.topInput,I.topKeyDown,I.topKeyUp,I.topSelectionChange]}},P=null,R=null,w=null,O=null,S=!1;b.canUseDOM&&(S=D("change")&&(!("documentMode"in document)||document.documentMode>8));var A=!1;b.canUseDOM&&(A=D("input")&&(!("documentMode"in document)||document.documentMode>9));var k={get:function(){return O.get.call(this)},set:function(e){w=""+e,O.set.call(this,e)}},L={eventTypes:T,extractEvents:function(e,t,n,o){var i,a;if(r(t)?S?i=s:a=l:M(t)?A?i=f:(i=m,a=h):v(t)&&(i=g),i){var u=i(e,t,n);if(u){var c=x.getPooled(T.change,u,o);return E.accumulateTwoPhaseDispatches(c),c}}a&&a(e,t,n)}};t.exports=L},{134:134,136:136,139:139,15:15,17:17,20:20,21:21,85:85,93:93}],8:[function(e,t,n){"use strict";var r=0,o={createReactRootIndex:function(){return r++}};t.exports=o},{}],9:[function(e,t,n){"use strict";function r(e,t,n){e.insertBefore(t,e.childNodes[n]||null)}var o=e(12),i=e(70),a=e(145),u=e(133),s={dangerouslyReplaceNodeWithMarkup:o.dangerouslyReplaceNodeWithMarkup,updateTextContent:a,processUpdates:function(e,t){for(var n,s=null,l=null,c=0;c<e.length;c++)if(n=e[c],n.type===i.MOVE_EXISTING||n.type===i.REMOVE_NODE){var p=n.fromIndex,d=n.parentNode.childNodes[p],f=n.parentID;u(d),s=s||{},s[f]=s[f]||[],s[f][p]=d,l=l||[],l.push(d)}var h=o.dangerouslyRenderMarkup(t);if(l)for(var m=0;m<l.length;m++)l[m].parentNode.removeChild(l[m]);for(var v=0;v<e.length;v++)switch(n=e[v],n.type){case i.INSERT_MARKUP:r(n.parentNode,h[n.markupIndex],n.toIndex);break;case i.MOVE_EXISTING:r(n.parentNode,s[n.parentID][n.fromIndex],n.toIndex);break;case i.TEXT_CONTENT:a(n.parentNode,n.textContent);break;case i.REMOVE_NODE:}}};t.exports=s},{12:12,133:133,145:145,70:70}],10:[function(e,t,n){"use strict";function r(e,t){return(e&t)===t}var o=e(133),i={MUST_USE_ATTRIBUTE:1,MUST_USE_PROPERTY:2,HAS_SIDE_EFFECTS:4,HAS_BOOLEAN_VALUE:8,HAS_NUMERIC_VALUE:16,HAS_POSITIVE_NUMERIC_VALUE:48,HAS_OVERLOADED_BOOLEAN_VALUE:64,injectDOMPropertyConfig:function(e){var t=e.Properties||{},n=e.DOMAttributeNames||{},a=e.DOMPropertyNames||{},s=e.DOMMutationMethods||{};e.isCustomAttribute&&u._isCustomAttributeFunctions.push(e.isCustomAttribute);for(var l in t){o(!u.isStandardName.hasOwnProperty(l)),u.isStandardName[l]=!0;var c=l.toLowerCase();if(u.getPossibleStandardName[c]=l,n.hasOwnProperty(l)){var p=n[l];u.getPossibleStandardName[p]=l,u.getAttributeName[l]=p}else u.getAttributeName[l]=c;u.getPropertyName[l]=a.hasOwnProperty(l)?a[l]:l,s.hasOwnProperty(l)?u.getMutationMethod[l]=s[l]:u.getMutationMethod[l]=null;var d=t[l];u.mustUseAttribute[l]=r(d,i.MUST_USE_ATTRIBUTE),u.mustUseProperty[l]=r(d,i.MUST_USE_PROPERTY),u.hasSideEffects[l]=r(d,i.HAS_SIDE_EFFECTS),u.hasBooleanValue[l]=r(d,i.HAS_BOOLEAN_VALUE),u.hasNumericValue[l]=r(d,i.HAS_NUMERIC_VALUE),u.hasPositiveNumericValue[l]=r(d,i.HAS_POSITIVE_NUMERIC_VALUE),u.hasOverloadedBooleanValue[l]=r(d,i.HAS_OVERLOADED_BOOLEAN_VALUE),o(!u.mustUseAttribute[l]||!u.mustUseProperty[l]),o(u.mustUseProperty[l]||!u.hasSideEffects[l]),o(!!u.hasBooleanValue[l]+!!u.hasNumericValue[l]+!!u.hasOverloadedBooleanValue[l]<=1)}}},a={},u={ID_ATTRIBUTE_NAME:"data-reactid",isStandardName:{},getPossibleStandardName:{},getAttributeName:{},getPropertyName:{},getMutationMethod:{},mustUseAttribute:{},mustUseProperty:{},hasSideEffects:{},hasBooleanValue:{},hasNumericValue:{},hasPositiveNumericValue:{},hasOverloadedBooleanValue:{},_isCustomAttributeFunctions:[],isCustomAttribute:function(e){for(var t=0;t<u._isCustomAttributeFunctions.length;t++){var n=u._isCustomAttributeFunctions[t];if(n(e))return!0}return!1},getDefaultValueForProperty:function(e,t){var n,r=a[e];return r||(a[e]=r={}),t in r||(n=document.createElement(e),r[t]=n[t]),r[t]},injection:i};t.exports=u},{133:133}],11:[function(e,t,n){"use strict";function r(e,t){return null==t||o.hasBooleanValue[e]&&!t||o.hasNumericValue[e]&&isNaN(t)||o.hasPositiveNumericValue[e]&&1>t||o.hasOverloadedBooleanValue[e]&&t===!1}var o=e(10),i=e(143),a=(e(150),{createMarkupForID:function(e){return o.ID_ATTRIBUTE_NAME+"="+i(e)},createMarkupForProperty:function(e,t){if(o.isStandardName.hasOwnProperty(e)&&o.isStandardName[e]){if(r(e,t))return"";var n=o.getAttributeName[e];return o.hasBooleanValue[e]||o.hasOverloadedBooleanValue[e]&&t===!0?n:n+"="+i(t)}return o.isCustomAttribute(e)?null==t?"":e+"="+i(t):null},setValueForProperty:function(e,t,n){if(o.isStandardName.hasOwnProperty(t)&&o.isStandardName[t]){var i=o.getMutationMethod[t];if(i)i(e,n);else if(r(t,n))this.deleteValueForProperty(e,t);else if(o.mustUseAttribute[t])e.setAttribute(o.getAttributeName[t],""+n);else{var a=o.getPropertyName[t];o.hasSideEffects[t]&&""+e[a]==""+n||(e[a]=n)}}else o.isCustomAttribute(t)&&(null==n?e.removeAttribute(t):e.setAttribute(t,""+n))},deleteValueForProperty:function(e,t){if(o.isStandardName.hasOwnProperty(t)&&o.isStandardName[t]){var n=o.getMutationMethod[t];if(n)n(e,void 0);else if(o.mustUseAttribute[t])e.removeAttribute(o.getAttributeName[t]);else{var r=o.getPropertyName[t],i=o.getDefaultValueForProperty(e.nodeName,r);o.hasSideEffects[t]&&""+e[r]===i||(e[r]=i)}}else o.isCustomAttribute(t)&&e.removeAttribute(t)}});t.exports=a},{10:10,143:143,150:150}],12:[function(e,t,n){"use strict";function r(e){return e.substring(1,e.indexOf(" "))}var o=e(21),i=e(110),a=e(112),u=e(125),s=e(133),l=/^(<[^ \/>]+)/,c="data-danger-index",p={dangerouslyRenderMarkup:function(e){s(o.canUseDOM);for(var t,n={},p=0;p<e.length;p++)s(e[p]),t=r(e[p]),t=u(t)?t:"*",n[t]=n[t]||[],n[t][p]=e[p];var d=[],f=0;for(t in n)if(n.hasOwnProperty(t)){var h,m=n[t];for(h in m)if(m.hasOwnProperty(h)){var v=m[h];m[h]=v.replace(l,"$1 "+c+'="'+h+'" ')}for(var g=i(m.join(""),a),y=0;y<g.length;++y){var C=g[y];C.hasAttribute&&C.hasAttribute(c)&&(h=+C.getAttribute(c),C.removeAttribute(c),s(!d.hasOwnProperty(h)),d[h]=C,f+=1)}}return s(f===d.length),s(d.length===e.length),d},dangerouslyReplaceNodeWithMarkup:function(e,t){s(o.canUseDOM),s(t),s("html"!==e.tagName.toLowerCase());var n=i(t,a)[0];e.parentNode.replaceChild(n,e)}};t.exports=p},{110:110,112:112,125:125,133:133,21:21}],13:[function(e,t,n){"use strict";var r=e(139),o=[r({ResponderEventPlugin:null}),r({SimpleEventPlugin:null}),r({TapEventPlugin:null}),r({EnterLeaveEventPlugin:null}),r({ChangeEventPlugin:null}),r({SelectEventPlugin:null}),r({BeforeInputEventPlugin:null}),r({AnalyticsEventPlugin:null}),r({MobileSafariClickEventPlugin:null})];t.exports=o},{139:139}],14:[function(e,t,n){"use strict";var r=e(15),o=e(20),i=e(97),a=e(68),u=e(139),s=r.topLevelTypes,l=a.getFirstReactDOM,c={mouseEnter:{registrationName:u({onMouseEnter:null}),dependencies:[s.topMouseOut,s.topMouseOver]},mouseLeave:{registrationName:u({onMouseLeave:null}),dependencies:[s.topMouseOut,s.topMouseOver]}},p=[null,null],d={eventTypes:c,extractEvents:function(e,t,n,r){if(e===s.topMouseOver&&(r.relatedTarget||r.fromElement))return null;if(e!==s.topMouseOut&&e!==s.topMouseOver)return null;var u;if(t.window===t)u=t;else{var d=t.ownerDocument;u=d?d.defaultView||d.parentWindow:window}var f,h;if(e===s.topMouseOut?(f=t,h=l(r.relatedTarget||r.toElement)||u):(f=u,h=t),f===h)return null;var m=f?a.getID(f):"",v=h?a.getID(h):"",g=i.getPooled(c.mouseLeave,m,r);g.type="mouseleave",g.target=f,g.relatedTarget=h;var y=i.getPooled(c.mouseEnter,v,r);return y.type="mouseenter",y.target=h,y.relatedTarget=f,o.accumulateEnterLeaveDispatches(g,y,m,v),p[0]=g,p[1]=y,p}};t.exports=d},{139:139,15:15,20:20,68:68,97:97}],15:[function(e,t,n){"use strict";var r=e(138),o=r({bubbled:null,captured:null}),i=r({topBlur:null,topChange:null,topClick:null,topCompositionEnd:null,topCompositionStart:null,topCompositionUpdate:null,topContextMenu:null,topCopy:null,topCut:null,topDoubleClick:null,topDrag:null,topDragEnd:null,topDragEnter:null,topDragExit:null,topDragLeave:null,topDragOver:null,topDragStart:null,topDrop:null,topError:null,topFocus:null,topInput:null,topKeyDown:null,topKeyPress:null,topKeyUp:null,topLoad:null,topMouseDown:null,topMouseMove:null,topMouseOut:null,topMouseOver:null,topMouseUp:null,topPaste:null,topReset:null,topScroll:null,topSelectionChange:null,topSubmit:null,topTextInput:null,topTouchCancel:null,topTouchEnd:null,topTouchMove:null,topTouchStart:null,topWheel:null}),a={topLevelTypes:i,PropagationPhases:o};t.exports=a},{138:138}],16:[function(e,t,n){var r=e(112),o={listen:function(e,t,n){return e.addEventListener?(e.addEventListener(t,n,!1),{remove:function(){e.removeEventListener(t,n,!1)}}):e.attachEvent?(e.attachEvent("on"+t,n),{remove:function(){e.detachEvent("on"+t,n)}}):void 0},capture:function(e,t,n){return e.addEventListener?(e.addEventListener(t,n,!0),{remove:function(){e.removeEventListener(t,n,!0)}}):{remove:r}},registerDefault:function(){}};t.exports=o},{112:112}],17:[function(e,t,n){"use strict";var r=e(18),o=e(19),i=e(103),a=e(118),u=e(133),s={},l=null,c=function(e){if(e){var t=o.executeDispatch,n=r.getPluginModuleForEvent(e);n&&n.executeDispatch&&(t=n.executeDispatch),o.executeDispatchesInOrder(e,t),e.isPersistent()||e.constructor.release(e)}},p=null,d={injection:{injectMount:o.injection.injectMount,injectInstanceHandle:function(e){p=e},getInstanceHandle:function(){return p},injectEventPluginOrder:r.injectEventPluginOrder,injectEventPluginsByName:r.injectEventPluginsByName},eventNameDispatchConfigs:r.eventNameDispatchConfigs,registrationNameModules:r.registrationNameModules,putListener:function(e,t,n){u(!n||"function"==typeof n);var r=s[t]||(s[t]={});r[e]=n},getListener:function(e,t){var n=s[t];return n&&n[e]},deleteListener:function(e,t){var n=s[t];n&&delete n[e]},deleteAllListeners:function(e){for(var t in s)delete s[t][e]},extractEvents:function(e,t,n,o){for(var a,u=r.plugins,s=0,l=u.length;l>s;s++){var c=u[s];if(c){var p=c.extractEvents(e,t,n,o);p&&(a=i(a,p))}}return a},enqueueEvents:function(e){e&&(l=i(l,e))},processEventQueue:function(){var e=l;l=null,a(e,c),u(!l)},__purge:function(){s={}},__getListenerBank:function(){return s}};t.exports=d},{103:103,118:118,133:133,18:18,19:19}],18:[function(e,t,n){"use strict";function r(){if(u)for(var e in s){var t=s[e],n=u.indexOf(e);if(a(n>-1),!l.plugins[n]){a(t.extractEvents),l.plugins[n]=t;var r=t.eventTypes;for(var i in r)a(o(r[i],t,i))}}}function o(e,t,n){a(!l.eventNameDispatchConfigs.hasOwnProperty(n)),l.eventNameDispatchConfigs[n]=e;var r=e.phasedRegistrationNames;if(r){for(var o in r)if(r.hasOwnProperty(o)){var u=r[o];i(u,t,n)}return!0}return e.registrationName?(i(e.registrationName,t,n),!0):!1}function i(e,t,n){a(!l.registrationNameModules[e]),l.registrationNameModules[e]=t,l.registrationNameDependencies[e]=t.eventTypes[n].dependencies}var a=e(133),u=null,s={},l={plugins:[],eventNameDispatchConfigs:{},registrationNameModules:{},registrationNameDependencies:{},injectEventPluginOrder:function(e){a(!u),u=Array.prototype.slice.call(e),r()},injectEventPluginsByName:function(e){var t=!1;for(var n in e)if(e.hasOwnProperty(n)){var o=e[n];s.hasOwnProperty(n)&&s[n]===o||(a(!s[n]),s[n]=o,t=!0)}t&&r()},getPluginModuleForEvent:function(e){var t=e.dispatchConfig;if(t.registrationName)return l.registrationNameModules[t.registrationName]||null;for(var n in t.phasedRegistrationNames)if(t.phasedRegistrationNames.hasOwnProperty(n)){var r=l.registrationNameModules[t.phasedRegistrationNames[n]];if(r)return r}return null},_resetEventPlugins:function(){u=null;for(var e in s)s.hasOwnProperty(e)&&delete s[e];l.plugins.length=0;var t=l.eventNameDispatchConfigs;for(var n in t)t.hasOwnProperty(n)&&delete t[n];var r=l.registrationNameModules;for(var o in r)r.hasOwnProperty(o)&&delete r[o]}};t.exports=l},{133:133}],19:[function(e,t,n){"use strict";function r(e){return e===v.topMouseUp||e===v.topTouchEnd||e===v.topTouchCancel}function o(e){return e===v.topMouseMove||e===v.topTouchMove}function i(e){return e===v.topMouseDown||e===v.topTouchStart}function a(e,t){var n=e._dispatchListeners,r=e._dispatchIDs;if(Array.isArray(n))for(var o=0;o<n.length&&!e.isPropagationStopped();o++)t(e,n[o],r[o]);else n&&t(e,n,r)}function u(e,t,n){e.currentTarget=m.Mount.getNode(n);var r=t(e,n);return e.currentTarget=null,r}function s(e,t){a(e,t),e._dispatchListeners=null,e._dispatchIDs=null}function l(e){var t=e._dispatchListeners,n=e._dispatchIDs;if(Array.isArray(t)){for(var r=0;r<t.length&&!e.isPropagationStopped();r++)if(t[r](e,n[r]))return n[r]}else if(t&&t(e,n))return n;return null}function c(e){var t=l(e);return e._dispatchIDs=null,e._dispatchListeners=null,t}function p(e){var t=e._dispatchListeners,n=e._dispatchIDs;h(!Array.isArray(t));var r=t?t(e,n):null;return e._dispatchListeners=null,e._dispatchIDs=null,r}function d(e){return!!e._dispatchListeners}var f=e(15),h=e(133),m={Mount:null,injectMount:function(e){m.Mount=e}},v=f.topLevelTypes,g={isEndish:r,isMoveish:o,isStartish:i,executeDirectDispatch:p,executeDispatch:u,executeDispatchesInOrder:s,executeDispatchesInOrderStopAtTrue:c,hasDispatches:d,injection:m,useTouchEvents:!1};t.exports=g},{133:133,15:15}],20:[function(e,t,n){"use strict";function r(e,t,n){var r=t.dispatchConfig.phasedRegistrationNames[n];return v(e,r)}function o(e,t,n){var o=t?m.bubbled:m.captured,i=r(e,n,o);i&&(n._dispatchListeners=f(n._dispatchListeners,i),n._dispatchIDs=f(n._dispatchIDs,e))}function i(e){e&&e.dispatchConfig.phasedRegistrationNames&&d.injection.getInstanceHandle().traverseTwoPhase(e.dispatchMarker,o,e)}function a(e,t,n){if(n&&n.dispatchConfig.registrationName){var r=n.dispatchConfig.registrationName,o=v(e,r);o&&(n._dispatchListeners=f(n._dispatchListeners,o),n._dispatchIDs=f(n._dispatchIDs,e))}}function u(e){e&&e.dispatchConfig.registrationName&&a(e.dispatchMarker,null,e)}function s(e){h(e,i)}function l(e,t,n,r){d.injection.getInstanceHandle().traverseEnterLeave(n,r,a,e,t)}function c(e){h(e,u)}var p=e(15),d=e(17),f=e(103),h=e(118),m=p.PropagationPhases,v=d.getListener,g={accumulateTwoPhaseDispatches:s,accumulateDirectDispatches:c,accumulateEnterLeaveDispatches:l};t.exports=g},{103:103,118:118,15:15,17:17}],21:[function(e,t,n){"use strict";var r=!("undefined"==typeof window||!window.document||!window.document.createElement),o={canUseDOM:r,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:r&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:r&&!!window.screen,isInWorker:!r};t.exports=o},{}],22:[function(e,t,n){"use strict";function r(e){this._root=e,this._startText=this.getText(),this._fallbackText=null}var o=e(28),i=e(27),a=e(128);i(r.prototype,{getText:function(){return"value"in this._root?this._root.value:this._root[a()]},getData:function(){if(this._fallbackText)return this._fallbackText;var e,t,n=this._startText,r=n.length,o=this.getText(),i=o.length;for(e=0;r>e&&n[e]===o[e];e++);var a=r-e;for(t=1;a>=t&&n[r-t]===o[i-t];t++);var u=t>1?1-t:void 0;return this._fallbackText=o.slice(e,u),this._fallbackText}}),o.addPoolingTo(r),t.exports=r},{128:128,27:27,28:28}],23:[function(e,t,n){"use strict";var r,o=e(10),i=e(21),a=o.injection.MUST_USE_ATTRIBUTE,u=o.injection.MUST_USE_PROPERTY,s=o.injection.HAS_BOOLEAN_VALUE,l=o.injection.HAS_SIDE_EFFECTS,c=o.injection.HAS_NUMERIC_VALUE,p=o.injection.HAS_POSITIVE_NUMERIC_VALUE,d=o.injection.HAS_OVERLOADED_BOOLEAN_VALUE;if(i.canUseDOM){var f=document.implementation;r=f&&f.hasFeature&&f.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")}var h={isCustomAttribute:RegExp.prototype.test.bind(/^(data|aria)-[a-z_][a-z\d_.\-]*$/),Properties:{accept:null,acceptCharset:null,accessKey:null,action:null,allowFullScreen:a|s,allowTransparency:a,alt:null,async:s,autoComplete:null,autoPlay:s,cellPadding:null,cellSpacing:null,charSet:a,checked:u|s,classID:a,className:r?a:u,cols:a|p,colSpan:null,content:null,contentEditable:null,contextMenu:a,controls:u|s,coords:null,crossOrigin:null,data:null,dateTime:a,defer:s,dir:null,disabled:a|s,download:d,draggable:null,encType:null,form:a,formAction:a,formEncType:a,formMethod:a,formNoValidate:s,formTarget:a,frameBorder:a,headers:null,height:a,hidden:a|s,high:null,href:null,hrefLang:null,htmlFor:null,httpEquiv:null,icon:null,id:u,label:null,lang:null,list:a,loop:u|s,low:null,manifest:a,marginHeight:null,marginWidth:null,max:null,maxLength:a,media:a,mediaGroup:null,method:null,min:null,multiple:u|s,muted:u|s,name:null,noValidate:s,open:s,optimum:null,pattern:null,placeholder:null,poster:null,preload:null,radioGroup:null,readOnly:u|s,rel:null,required:s,role:a,rows:a|p,rowSpan:null,sandbox:null,scope:null,scoped:s,scrolling:null,seamless:a|s,selected:u|s,shape:null,size:a|p,sizes:a,span:p,spellCheck:null,src:null,srcDoc:u,srcSet:a,start:c,step:null,style:null,tabIndex:null,target:null,title:null,type:null,useMap:null,value:u|l,width:a,wmode:a,autoCapitalize:null,autoCorrect:null,itemProp:a,itemScope:a|s,itemType:a,itemID:a,itemRef:a,property:null,unselectable:a},DOMAttributeNames:{acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv"},DOMPropertyNames:{autoCapitalize:"autocapitalize",autoComplete:"autocomplete",autoCorrect:"autocorrect",autoFocus:"autofocus",autoPlay:"autoplay",encType:"encoding",hrefLang:"hreflang",radioGroup:"radiogroup",spellCheck:"spellcheck",srcDoc:"srcdoc",srcSet:"srcset"}};t.exports=h},{10:10,21:21}],24:[function(e,t,n){"use strict";function r(e){l(null==e.props.checkedLink||null==e.props.valueLink)}function o(e){r(e),l(null==e.props.value&&null==e.props.onChange)}function i(e){r(e),l(null==e.props.checked&&null==e.props.onChange)}function a(e){this.props.valueLink.requestChange(e.target.value)}function u(e){this.props.checkedLink.requestChange(e.target.checked)}var s=e(76),l=e(133),c={button:!0,checkbox:!0,image:!0,hidden:!0,radio:!0,reset:!0,submit:!0},p={Mixin:{propTypes:{value:function(e,t,n){return!e[t]||c[e.type]||e.onChange||e.readOnly||e.disabled?null:new Error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.")},checked:function(e,t,n){return!e[t]||e.onChange||e.readOnly||e.disabled?null:new Error("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.")},onChange:s.func}},getValue:function(e){return e.props.valueLink?(o(e),e.props.valueLink.value):e.props.value},getChecked:function(e){return e.props.checkedLink?(i(e),e.props.checkedLink.value):e.props.checked},getOnChange:function(e){return e.props.valueLink?(o(e),a):e.props.checkedLink?(i(e),u):e.props.onChange}};t.exports=p},{133:133,76:76}],25:[function(e,t,n){"use strict";function r(e){e.remove()}var o=e(30),i=e(103),a=e(118),u=e(133),s={trapBubbledEvent:function(e,t){u(this.isMounted());var n=this.getDOMNode();u(n);var r=o.trapBubbledEvent(e,t,n);this._localEventListeners=i(this._localEventListeners,r)},componentWillUnmount:function(){this._localEventListeners&&a(this._localEventListeners,r)}};t.exports=s},{103:103,118:118,133:133,30:30}],26:[function(e,t,n){"use strict";var r=e(15),o=e(112),i=r.topLevelTypes,a={eventTypes:null,extractEvents:function(e,t,n,r){if(e===i.topTouchStart){var a=r.target;a&&!a.onclick&&(a.onclick=o)}}};t.exports=a},{112:112,15:15}],27:[function(e,t,n){"use strict";function r(e,t){if(null==e)throw new TypeError("Object.assign target cannot be null or undefined");for(var n=Object(e),r=Object.prototype.hasOwnProperty,o=1;o<arguments.length;o++){var i=arguments[o];if(null!=i){var a=Object(i);for(var u in a)r.call(a,u)&&(n[u]=a[u])}}return n}t.exports=r},{}],28:[function(e,t,n){"use strict";var r=e(133),o=function(e){var t=this;if(t.instancePool.length){var n=t.instancePool.pop();return t.call(n,e),n}return new t(e)},i=function(e,t){var n=this;if(n.instancePool.length){var r=n.instancePool.pop();return n.call(r,e,t),r}return new n(e,t)},a=function(e,t,n){var r=this;if(r.instancePool.length){var o=r.instancePool.pop();return r.call(o,e,t,n),o}return new r(e,t,n)},u=function(e,t,n,r,o){var i=this;if(i.instancePool.length){var a=i.instancePool.pop();return i.call(a,e,t,n,r,o),a}return new i(e,t,n,r,o)},s=function(e){var t=this;r(e instanceof t),e.destructor&&e.destructor(),t.instancePool.length<t.poolSize&&t.instancePool.push(e)},l=10,c=o,p=function(e,t){var n=e;return n.instancePool=[],n.getPooled=t||c,n.poolSize||(n.poolSize=l),n.release=s,n},d={addPoolingTo:p,oneArgumentPooler:o,twoArgumentPooler:i,threeArgumentPooler:a,fiveArgumentPooler:u};t.exports=d},{133:133}],29:[function(e,t,n){"use strict";var r=e(115),o={getDOMNode:function(){return r(this)}};t.exports=o},{115:115}],30:[function(e,t,n){"use strict";function r(e){return Object.prototype.hasOwnProperty.call(e,m)||(e[m]=f++,p[e[m]]={}),p[e[m]]}var o=e(15),i=e(17),a=e(18),u=e(59),s=e(102),l=e(27),c=e(134),p={},d=!1,f=0,h={topBlur:"blur",topChange:"change",topClick:"click",topCompositionEnd:"compositionend",topCompositionStart:"compositionstart",topCompositionUpdate:"compositionupdate",topContextMenu:"contextmenu",topCopy:"copy",topCut:"cut",topDoubleClick:"dblclick",topDrag:"drag",topDragEnd:"dragend",topDragEnter:"dragenter",topDragExit:"dragexit",topDragLeave:"dragleave",topDragOver:"dragover",topDragStart:"dragstart",topDrop:"drop",topFocus:"focus",topInput:"input",topKeyDown:"keydown",topKeyPress:"keypress",topKeyUp:"keyup",topMouseDown:"mousedown",topMouseMove:"mousemove",topMouseOut:"mouseout",topMouseOver:"mouseover",topMouseUp:"mouseup",topPaste:"paste",topScroll:"scroll",topSelectionChange:"selectionchange",topTextInput:"textInput",topTouchCancel:"touchcancel",topTouchEnd:"touchend",topTouchMove:"touchmove",topTouchStart:"touchstart",topWheel:"wheel"},m="_reactListenersID"+String(Math.random()).slice(2),v=l({},u,{ReactEventListener:null,injection:{injectReactEventListener:function(e){e.setHandleTopLevel(v.handleTopLevel),v.ReactEventListener=e}},setEnabled:function(e){v.ReactEventListener&&v.ReactEventListener.setEnabled(e)},isEnabled:function(){return!(!v.ReactEventListener||!v.ReactEventListener.isEnabled())},listenTo:function(e,t){for(var n=t,i=r(n),u=a.registrationNameDependencies[e],s=o.topLevelTypes,l=0,p=u.length;p>l;l++){var d=u[l];i.hasOwnProperty(d)&&i[d]||(d===s.topWheel?c("wheel")?v.ReactEventListener.trapBubbledEvent(s.topWheel,"wheel",n):c("mousewheel")?v.ReactEventListener.trapBubbledEvent(s.topWheel,"mousewheel",n):v.ReactEventListener.trapBubbledEvent(s.topWheel,"DOMMouseScroll",n):d===s.topScroll?c("scroll",!0)?v.ReactEventListener.trapCapturedEvent(s.topScroll,"scroll",n):v.ReactEventListener.trapBubbledEvent(s.topScroll,"scroll",v.ReactEventListener.WINDOW_HANDLE):d===s.topFocus||d===s.topBlur?(c("focus",!0)?(v.ReactEventListener.trapCapturedEvent(s.topFocus,"focus",n),v.ReactEventListener.trapCapturedEvent(s.topBlur,"blur",n)):c("focusin")&&(v.ReactEventListener.trapBubbledEvent(s.topFocus,"focusin",n),v.ReactEventListener.trapBubbledEvent(s.topBlur,"focusout",n)),i[s.topBlur]=!0,i[s.topFocus]=!0):h.hasOwnProperty(d)&&v.ReactEventListener.trapBubbledEvent(d,h[d],n),i[d]=!0)}},trapBubbledEvent:function(e,t,n){
            return v.ReactEventListener.trapBubbledEvent(e,t,n)},trapCapturedEvent:function(e,t,n){return v.ReactEventListener.trapCapturedEvent(e,t,n)},ensureScrollValueMonitoring:function(){if(!d){var e=s.refreshScrollValues;v.ReactEventListener.monitorScrollValue(e),d=!0}},eventNameDispatchConfigs:i.eventNameDispatchConfigs,registrationNameModules:i.registrationNameModules,putListener:i.putListener,getListener:i.getListener,deleteListener:i.deleteListener,deleteAllListeners:i.deleteAllListeners});t.exports=v},{102:102,134:134,15:15,17:17,18:18,27:27,59:59}],31:[function(e,t,n){"use strict";var r=e(79),o=e(116),i=e(132),a=e(147),u={instantiateChildren:function(e,t,n){var r=o(e);for(var a in r)if(r.hasOwnProperty(a)){var u=r[a],s=i(u,null);r[a]=s}return r},updateChildren:function(e,t,n,u){var s=o(t);if(!s&&!e)return null;var l;for(l in s)if(s.hasOwnProperty(l)){var c=e&&e[l],p=c&&c._currentElement,d=s[l];if(a(p,d))r.receiveComponent(c,d,n,u),s[l]=c;else{c&&r.unmountComponent(c,l);var f=i(d,null);s[l]=f}}for(l in e)!e.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||r.unmountComponent(e[l]);return s},unmountChildren:function(e){for(var t in e){var n=e[t];r.unmountComponent(n)}}};t.exports=u},{116:116,132:132,147:147,79:79}],32:[function(e,t,n){"use strict";function r(e,t){this.forEachFunction=e,this.forEachContext=t}function o(e,t,n,r){var o=e;o.forEachFunction.call(o.forEachContext,t,r)}function i(e,t,n){if(null==e)return e;var i=r.getPooled(t,n);f(e,o,i),r.release(i)}function a(e,t,n){this.mapResult=e,this.mapFunction=t,this.mapContext=n}function u(e,t,n,r){var o=e,i=o.mapResult,a=!i.hasOwnProperty(n);if(a){var u=o.mapFunction.call(o.mapContext,t,r);i[n]=u}}function s(e,t,n){if(null==e)return e;var r={},o=a.getPooled(r,t,n);return f(e,u,o),a.release(o),d.create(r)}function l(e,t,n,r){return null}function c(e,t){return f(e,l,null)}var p=e(28),d=e(61),f=e(149),h=(e(150),p.twoArgumentPooler),m=p.threeArgumentPooler;p.addPoolingTo(r,h),p.addPoolingTo(a,m);var v={forEach:i,map:s,count:c};t.exports=v},{149:149,150:150,28:28,61:61}],33:[function(e,t,n){"use strict";function r(e,t){var n=D.hasOwnProperty(t)?D[t]:null;N.hasOwnProperty(t)&&y(n===_.OVERRIDE_BASE),e.hasOwnProperty(t)&&y(n===_.DEFINE_MANY||n===_.DEFINE_MANY_MERGED)}function o(e,t){if(t){y("function"!=typeof t),y(!d.isValidElement(t));var n=e.prototype;t.hasOwnProperty(b)&&M.mixins(e,t.mixins);for(var o in t)if(t.hasOwnProperty(o)&&o!==b){var i=t[o];if(r(n,o),M.hasOwnProperty(o))M[o](e,i);else{var a=D.hasOwnProperty(o),l=n.hasOwnProperty(o),c=i&&i.__reactDontBind,p="function"==typeof i,f=p&&!a&&!l&&!c;if(f)n.__reactAutoBindMap||(n.__reactAutoBindMap={}),n.__reactAutoBindMap[o]=i,n[o]=i;else if(l){var h=D[o];y(a&&(h===_.DEFINE_MANY_MERGED||h===_.DEFINE_MANY)),h===_.DEFINE_MANY_MERGED?n[o]=u(n[o],i):h===_.DEFINE_MANY&&(n[o]=s(n[o],i))}else n[o]=i}}}}function i(e,t){if(t)for(var n in t){var r=t[n];if(t.hasOwnProperty(n)){var o=n in M;y(!o);var i=n in e;y(!i),e[n]=r}}}function a(e,t){y(e&&t&&"object"==typeof e&&"object"==typeof t);for(var n in t)t.hasOwnProperty(n)&&(y(void 0===e[n]),e[n]=t[n]);return e}function u(e,t){return function(){var n=e.apply(this,arguments),r=t.apply(this,arguments);if(null==n)return r;if(null==r)return n;var o={};return a(o,n),a(o,r),o}}function s(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function l(e,t){var n=t.bind(e);return n}function c(e){for(var t in e.__reactAutoBindMap)if(e.__reactAutoBindMap.hasOwnProperty(t)){var n=e.__reactAutoBindMap[t];e[t]=l(e,f.guard(n,e.constructor.displayName+"."+t))}}var p=e(34),d=(e(39),e(55)),f=e(58),h=e(65),m=e(66),v=(e(75),e(74),e(84)),g=e(27),y=e(133),C=e(138),E=e(139),b=(e(150),E({mixins:null})),_=C({DEFINE_ONCE:null,DEFINE_MANY:null,OVERRIDE_BASE:null,DEFINE_MANY_MERGED:null}),x=[],D={mixins:_.DEFINE_MANY,statics:_.DEFINE_MANY,propTypes:_.DEFINE_MANY,contextTypes:_.DEFINE_MANY,childContextTypes:_.DEFINE_MANY,getDefaultProps:_.DEFINE_MANY_MERGED,getInitialState:_.DEFINE_MANY_MERGED,getChildContext:_.DEFINE_MANY_MERGED,render:_.DEFINE_ONCE,componentWillMount:_.DEFINE_MANY,componentDidMount:_.DEFINE_MANY,componentWillReceiveProps:_.DEFINE_MANY,shouldComponentUpdate:_.DEFINE_ONCE,componentWillUpdate:_.DEFINE_MANY,componentDidUpdate:_.DEFINE_MANY,componentWillUnmount:_.DEFINE_MANY,updateComponent:_.OVERRIDE_BASE},M={displayName:function(e,t){e.displayName=t},mixins:function(e,t){if(t)for(var n=0;n<t.length;n++)o(e,t[n])},childContextTypes:function(e,t){e.childContextTypes=g({},e.childContextTypes,t)},contextTypes:function(e,t){e.contextTypes=g({},e.contextTypes,t)},getDefaultProps:function(e,t){e.getDefaultProps?e.getDefaultProps=u(e.getDefaultProps,t):e.getDefaultProps=t},propTypes:function(e,t){e.propTypes=g({},e.propTypes,t)},statics:function(e,t){i(e,t)}},N={replaceState:function(e,t){v.enqueueReplaceState(this,e),t&&v.enqueueCallback(this,t)},isMounted:function(){var e=h.get(this);return e&&e!==m.currentlyMountingInstance},setProps:function(e,t){v.enqueueSetProps(this,e),t&&v.enqueueCallback(this,t)},replaceProps:function(e,t){v.enqueueReplaceProps(this,e),t&&v.enqueueCallback(this,t)}},I=function(){};g(I.prototype,p.prototype,N);var T={createClass:function(e){var t=function(e,t){this.__reactAutoBindMap&&c(this),this.props=e,this.context=t,this.state=null;var n=this.getInitialState?this.getInitialState():null;y("object"==typeof n&&!Array.isArray(n)),this.state=n};t.prototype=new I,t.prototype.constructor=t,x.forEach(o.bind(null,t)),o(t,e),t.getDefaultProps&&(t.defaultProps=t.getDefaultProps()),y(t.prototype.render);for(var n in D)t.prototype[n]||(t.prototype[n]=null);return t.type=t,t},injection:{injectMixin:function(e){x.push(e)}}};t.exports=T},{133:133,138:138,139:139,150:150,27:27,34:34,39:39,55:55,58:58,65:65,66:66,74:74,75:75,84:84}],34:[function(e,t,n){"use strict";function r(e,t){this.props=e,this.context=t}{var o=e(84),i=e(133);e(150)}r.prototype.setState=function(e,t){i("object"==typeof e||"function"==typeof e||null==e),o.enqueueSetState(this,e),t&&o.enqueueCallback(this,t)},r.prototype.forceUpdate=function(e){o.enqueueForceUpdate(this),e&&o.enqueueCallback(this,e)};t.exports=r},{133:133,150:150,84:84}],35:[function(e,t,n){"use strict";var r=e(44),o=e(68),i={processChildrenUpdates:r.dangerouslyProcessChildrenUpdates,replaceNodeWithMarkupByID:r.dangerouslyReplaceNodeWithMarkupByID,unmountIDFromEnvironment:function(e){o.purgeID(e)}};t.exports=i},{44:44,68:68}],36:[function(e,t,n){"use strict";var r=e(133),o=!1,i={unmountIDFromEnvironment:null,replaceNodeWithMarkupByID:null,processChildrenUpdates:null,injection:{injectEnvironment:function(e){r(!o),i.unmountIDFromEnvironment=e.unmountIDFromEnvironment,i.replaceNodeWithMarkupByID=e.replaceNodeWithMarkupByID,i.processChildrenUpdates=e.processChildrenUpdates,o=!0}}};t.exports=i},{133:133}],37:[function(e,t,n){"use strict";function r(e){var t=e._currentElement._owner||null;if(t){var n=t.getName();if(n)return" Check the render method of `"+n+"`."}return""}var o=e(36),i=e(38),a=e(39),u=e(55),s=(e(56),e(65)),l=e(66),c=e(71),p=e(73),d=e(75),f=(e(74),e(79)),h=e(85),m=e(27),v=e(113),g=e(133),y=e(147),C=(e(150),1),E={construct:function(e){this._currentElement=e,this._rootNodeID=null,this._instance=null,this._pendingElement=null,this._pendingStateQueue=null,this._pendingReplaceState=!1,this._pendingForceUpdate=!1,this._renderedComponent=null,this._context=null,this._mountOrder=0,this._isTopLevel=!1,this._pendingCallbacks=null},mountComponent:function(e,t,n){this._context=n,this._mountOrder=C++,this._rootNodeID=e;var r=this._processProps(this._currentElement.props),o=this._processContext(this._currentElement._context),i=c.getComponentClassForElement(this._currentElement),a=new i(r,o);a.props=r,a.context=o,a.refs=v,this._instance=a,s.set(a,this);var u=a.state;void 0===u&&(a.state=u=null),g("object"==typeof u&&!Array.isArray(u)),this._pendingStateQueue=null,this._pendingReplaceState=!1,this._pendingForceUpdate=!1;var p,d,h=l.currentlyMountingInstance;l.currentlyMountingInstance=this;try{a.componentWillMount&&(a.componentWillMount(),this._pendingStateQueue&&(a.state=this._processPendingState(a.props,a.context))),p=this._getValidatedChildContext(n),d=this._renderValidatedComponent(p)}finally{l.currentlyMountingInstance=h}this._renderedComponent=this._instantiateReactComponent(d,this._currentElement.type);var m=f.mountComponent(this._renderedComponent,e,t,this._mergeChildContext(n,p));return a.componentDidMount&&t.getReactMountReady().enqueue(a.componentDidMount,a),m},unmountComponent:function(){var e=this._instance;if(e.componentWillUnmount){var t=l.currentlyUnmountingInstance;l.currentlyUnmountingInstance=this;try{e.componentWillUnmount()}finally{l.currentlyUnmountingInstance=t}}f.unmountComponent(this._renderedComponent),this._renderedComponent=null,this._pendingStateQueue=null,this._pendingReplaceState=!1,this._pendingForceUpdate=!1,this._pendingCallbacks=null,this._pendingElement=null,this._context=null,this._rootNodeID=null,s.remove(e)},_setPropsInternal:function(e,t){var n=this._pendingElement||this._currentElement;this._pendingElement=u.cloneAndReplaceProps(n,m({},n.props,e)),h.enqueueUpdate(this,t)},_maskContext:function(e){var t=null;if("string"==typeof this._currentElement.type)return v;var n=this._currentElement.type.contextTypes;if(!n)return v;t={};for(var r in n)t[r]=e[r];return t},_processContext:function(e){var t=this._maskContext(e);return t},_getValidatedChildContext:function(e){var t=this._instance,n=t.getChildContext&&t.getChildContext();if(n){g("object"==typeof t.constructor.childContextTypes);for(var r in n)g(r in t.constructor.childContextTypes);return n}return null},_mergeChildContext:function(e,t){return t?m({},e,t):e},_processProps:function(e){return e},_checkPropTypes:function(e,t,n){var o=this.getName();for(var i in e)if(e.hasOwnProperty(i)){var a;try{g("function"==typeof e[i]),a=e[i](t,i,o,n)}catch(u){a=u}a instanceof Error&&(r(this),n===d.prop)}},receiveComponent:function(e,t,n){var r=this._currentElement,o=this._context;this._pendingElement=null,this.updateComponent(t,r,e,o,n)},performUpdateIfNecessary:function(e){null!=this._pendingElement&&f.receiveComponent(this,this._pendingElement||this._currentElement,e,this._context),(null!==this._pendingStateQueue||this._pendingForceUpdate)&&this.updateComponent(e,this._currentElement,this._currentElement,this._context,this._context)},_warnIfContextsDiffer:function(e,t){e=this._maskContext(e),t=this._maskContext(t);for(var n=Object.keys(t).sort(),r=(this.getName()||"ReactCompositeComponent",0);r<n.length;r++)n[r]},updateComponent:function(e,t,n,r,o){var i=this._instance,a=i.context,u=i.props;t!==n&&(a=this._processContext(n._context),u=this._processProps(n.props),i.componentWillReceiveProps&&i.componentWillReceiveProps(u,a));var s=this._processPendingState(u,a),l=this._pendingForceUpdate||!i.shouldComponentUpdate||i.shouldComponentUpdate(u,s,a);l?(this._pendingForceUpdate=!1,this._performComponentUpdate(n,u,s,a,e,o)):(this._currentElement=n,this._context=o,i.props=u,i.state=s,i.context=a)},_processPendingState:function(e,t){var n=this._instance,r=this._pendingStateQueue,o=this._pendingReplaceState;if(this._pendingReplaceState=!1,this._pendingStateQueue=null,!r)return n.state;if(o&&1===r.length)return r[0];for(var i=m({},o?r[0]:n.state),a=o?1:0;a<r.length;a++){var u=r[a];m(i,"function"==typeof u?u.call(n,i,e,t):u)}return i},_performComponentUpdate:function(e,t,n,r,o,i){var a=this._instance,u=a.props,s=a.state,l=a.context;a.componentWillUpdate&&a.componentWillUpdate(t,n,r),this._currentElement=e,this._context=i,a.props=t,a.state=n,a.context=r,this._updateRenderedComponent(o,i),a.componentDidUpdate&&o.getReactMountReady().enqueue(a.componentDidUpdate.bind(a,u,s,l),a)},_updateRenderedComponent:function(e,t){var n=this._renderedComponent,r=n._currentElement,o=this._getValidatedChildContext(),i=this._renderValidatedComponent(o);if(y(r,i))f.receiveComponent(n,i,e,this._mergeChildContext(t,o));else{var a=this._rootNodeID,u=n._rootNodeID;f.unmountComponent(n),this._renderedComponent=this._instantiateReactComponent(i,this._currentElement.type);var s=f.mountComponent(this._renderedComponent,a,e,this._mergeChildContext(t,o));this._replaceNodeWithMarkupByID(u,s)}},_replaceNodeWithMarkupByID:function(e,t){o.replaceNodeWithMarkupByID(e,t)},_renderValidatedComponentWithoutOwnerOrContext:function(){var e=this._instance,t=e.render();return t},_renderValidatedComponent:function(e){var t,n=i.current;i.current=this._mergeChildContext(this._currentElement._context,e),a.current=this;try{t=this._renderValidatedComponentWithoutOwnerOrContext()}finally{i.current=n,a.current=null}return g(null===t||t===!1||u.isValidElement(t)),t},attachRef:function(e,t){var n=this.getPublicInstance(),r=n.refs===v?n.refs={}:n.refs;r[e]=t.getPublicInstance()},detachRef:function(e){var t=this.getPublicInstance().refs;delete t[e]},getName:function(){var e=this._currentElement.type,t=this._instance&&this._instance.constructor;return e.displayName||t&&t.displayName||e.name||t&&t.name||null},getPublicInstance:function(){return this._instance},_instantiateReactComponent:null};p.measureMethods(E,"ReactCompositeComponent",{mountComponent:"mountComponent",updateComponent:"updateComponent",_renderValidatedComponent:"_renderValidatedComponent"});var b={Mixin:E};t.exports=b},{113:113,133:133,147:147,150:150,27:27,36:36,38:38,39:39,55:55,56:56,65:65,66:66,71:71,73:73,74:74,75:75,79:79,85:85}],38:[function(e,t,n){"use strict";var r=e(27),o=e(113),i=(e(150),{current:o,withContext:function(e,t){var n,o=i.current;i.current=r({},o,e);try{n=t()}finally{i.current=o}return n}});t.exports=i},{113:113,150:150,27:27}],39:[function(e,t,n){"use strict";var r={current:null};t.exports=r},{}],40:[function(e,t,n){"use strict";function r(e){return o.createFactory(e)}var o=e(55),i=(e(56),e(140)),a=i({a:"a",abbr:"abbr",address:"address",area:"area",article:"article",aside:"aside",audio:"audio",b:"b",base:"base",bdi:"bdi",bdo:"bdo",big:"big",blockquote:"blockquote",body:"body",br:"br",button:"button",canvas:"canvas",caption:"caption",cite:"cite",code:"code",col:"col",colgroup:"colgroup",data:"data",datalist:"datalist",dd:"dd",del:"del",details:"details",dfn:"dfn",dialog:"dialog",div:"div",dl:"dl",dt:"dt",em:"em",embed:"embed",fieldset:"fieldset",figcaption:"figcaption",figure:"figure",footer:"footer",form:"form",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",head:"head",header:"header",hr:"hr",html:"html",i:"i",iframe:"iframe",img:"img",input:"input",ins:"ins",kbd:"kbd",keygen:"keygen",label:"label",legend:"legend",li:"li",link:"link",main:"main",map:"map",mark:"mark",menu:"menu",menuitem:"menuitem",meta:"meta",meter:"meter",nav:"nav",noscript:"noscript",object:"object",ol:"ol",optgroup:"optgroup",option:"option",output:"output",p:"p",param:"param",picture:"picture",pre:"pre",progress:"progress",q:"q",rp:"rp",rt:"rt",ruby:"ruby",s:"s",samp:"samp",script:"script",section:"section",select:"select",small:"small",source:"source",span:"span",strong:"strong",style:"style",sub:"sub",summary:"summary",sup:"sup",table:"table",tbody:"tbody",td:"td",textarea:"textarea",tfoot:"tfoot",th:"th",thead:"thead",time:"time",title:"title",tr:"tr",track:"track",u:"u",ul:"ul","var":"var",video:"video",wbr:"wbr",circle:"circle",clipPath:"clipPath",defs:"defs",ellipse:"ellipse",g:"g",line:"line",linearGradient:"linearGradient",mask:"mask",path:"path",pattern:"pattern",polygon:"polygon",polyline:"polyline",radialGradient:"radialGradient",rect:"rect",stop:"stop",svg:"svg",text:"text",tspan:"tspan"},r);t.exports=a},{140:140,55:55,56:56}],41:[function(e,t,n){"use strict";var r=e(2),o=e(29),i=e(33),a=e(55),u=e(138),s=a.createFactory("button"),l=u({onClick:!0,onDoubleClick:!0,onMouseDown:!0,onMouseMove:!0,onMouseUp:!0,onClickCapture:!0,onDoubleClickCapture:!0,onMouseDownCapture:!0,onMouseMoveCapture:!0,onMouseUpCapture:!0}),c=i.createClass({displayName:"ReactDOMButton",tagName:"BUTTON",mixins:[r,o],render:function(){var e={};for(var t in this.props)!this.props.hasOwnProperty(t)||this.props.disabled&&l[t]||(e[t]=this.props[t]);return s(e,this.props.children)}});t.exports=c},{138:138,2:2,29:29,33:33,55:55}],42:[function(e,t,n){"use strict";function r(e){e&&(null!=e.dangerouslySetInnerHTML&&(g(null==e.children),g("object"==typeof e.dangerouslySetInnerHTML&&"__html"in e.dangerouslySetInnerHTML)),g(null==e.style||"object"==typeof e.style))}function o(e,t,n,r){var o=d.findReactContainerForID(e);if(o){var i=o.nodeType===D?o.ownerDocument:o;E(t,i)}r.getPutListenerQueue().enqueuePutListener(e,t,n)}function i(e){P.call(T,e)||(g(I.test(e)),T[e]=!0)}function a(e){i(e),this._tag=e,this._renderedChildren=null,this._previousStyleCopy=null,this._rootNodeID=null}var u=e(5),s=e(10),l=e(11),c=e(30),p=e(35),d=e(68),f=e(69),h=e(73),m=e(27),v=e(114),g=e(133),y=(e(134),e(139)),C=(e(150),c.deleteListener),E=c.listenTo,b=c.registrationNameModules,_={string:!0,number:!0},x=y({style:null}),D=1,M=null,N={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},I=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,T={},P={}.hasOwnProperty;a.displayName="ReactDOMComponent",a.Mixin={construct:function(e){this._currentElement=e},mountComponent:function(e,t,n){this._rootNodeID=e,r(this._currentElement.props);var o=N[this._tag]?"":"</"+this._tag+">";return this._createOpenTagMarkupAndPutListeners(t)+this._createContentMarkup(t,n)+o},_createOpenTagMarkupAndPutListeners:function(e){var t=this._currentElement.props,n="<"+this._tag;for(var r in t)if(t.hasOwnProperty(r)){var i=t[r];if(null!=i)if(b.hasOwnProperty(r))o(this._rootNodeID,r,i,e);else{r===x&&(i&&(i=this._previousStyleCopy=m({},t.style)),i=u.createMarkupForStyles(i));var a=l.createMarkupForProperty(r,i);a&&(n+=" "+a)}}if(e.renderToStaticMarkup)return n+">";var s=l.createMarkupForID(this._rootNodeID);return n+" "+s+">"},_createContentMarkup:function(e,t){var n="";("listing"===this._tag||"pre"===this._tag||"textarea"===this._tag)&&(n="\n");var r=this._currentElement.props,o=r.dangerouslySetInnerHTML;if(null!=o){if(null!=o.__html)return n+o.__html}else{var i=_[typeof r.children]?r.children:null,a=null!=i?null:r.children;if(null!=i)return n+v(i);if(null!=a){var u=this.mountChildren(a,e,t);return n+u.join("")}}return n},receiveComponent:function(e,t,n){var r=this._currentElement;this._currentElement=e,this.updateComponent(t,r,e,n)},updateComponent:function(e,t,n,o){r(this._currentElement.props),this._updateDOMProperties(t.props,e),this._updateDOMChildren(t.props,e,o)},_updateDOMProperties:function(e,t){var n,r,i,a=this._currentElement.props;for(n in e)if(!a.hasOwnProperty(n)&&e.hasOwnProperty(n))if(n===x){var u=this._previousStyleCopy;for(r in u)u.hasOwnProperty(r)&&(i=i||{},i[r]="");this._previousStyleCopy=null}else b.hasOwnProperty(n)?C(this._rootNodeID,n):(s.isStandardName[n]||s.isCustomAttribute(n))&&M.deletePropertyByID(this._rootNodeID,n);for(n in a){var l=a[n],c=n===x?this._previousStyleCopy:e[n];if(a.hasOwnProperty(n)&&l!==c)if(n===x)if(l?l=this._previousStyleCopy=m({},l):this._previousStyleCopy=null,c){for(r in c)!c.hasOwnProperty(r)||l&&l.hasOwnProperty(r)||(i=i||{},i[r]="");for(r in l)l.hasOwnProperty(r)&&c[r]!==l[r]&&(i=i||{},i[r]=l[r])}else i=l;else b.hasOwnProperty(n)?o(this._rootNodeID,n,l,t):(s.isStandardName[n]||s.isCustomAttribute(n))&&M.updatePropertyByID(this._rootNodeID,n,l)}i&&M.updateStylesByID(this._rootNodeID,i)},_updateDOMChildren:function(e,t,n){var r=this._currentElement.props,o=_[typeof e.children]?e.children:null,i=_[typeof r.children]?r.children:null,a=e.dangerouslySetInnerHTML&&e.dangerouslySetInnerHTML.__html,u=r.dangerouslySetInnerHTML&&r.dangerouslySetInnerHTML.__html,s=null!=o?null:e.children,l=null!=i?null:r.children,c=null!=o||null!=a,p=null!=i||null!=u;null!=s&&null==l?this.updateChildren(null,t,n):c&&!p&&this.updateTextContent(""),null!=i?o!==i&&this.updateTextContent(""+i):null!=u?a!==u&&M.updateInnerHTMLByID(this._rootNodeID,u):null!=l&&this.updateChildren(l,t,n)},unmountComponent:function(){this.unmountChildren(),c.deleteAllListeners(this._rootNodeID),p.unmountIDFromEnvironment(this._rootNodeID),this._rootNodeID=null}},h.measureMethods(a,"ReactDOMComponent",{mountComponent:"mountComponent",updateComponent:"updateComponent"}),m(a.prototype,a.Mixin,f.Mixin),a.injection={injectIDOperations:function(e){a.BackendIDOperations=M=e}},t.exports=a},{10:10,11:11,114:114,133:133,134:134,139:139,150:150,27:27,30:30,35:35,5:5,68:68,69:69,73:73}],43:[function(e,t,n){"use strict";var r=e(15),o=e(25),i=e(29),a=e(33),u=e(55),s=u.createFactory("form"),l=a.createClass({displayName:"ReactDOMForm",tagName:"FORM",mixins:[i,o],render:function(){return s(this.props)},componentDidMount:function(){this.trapBubbledEvent(r.topLevelTypes.topReset,"reset"),this.trapBubbledEvent(r.topLevelTypes.topSubmit,"submit")}});t.exports=l},{15:15,25:25,29:29,33:33,55:55}],44:[function(e,t,n){"use strict";var r=e(5),o=e(9),i=e(11),a=e(68),u=e(73),s=e(133),l=e(144),c={dangerouslySetInnerHTML:"`dangerouslySetInnerHTML` must be set using `updateInnerHTMLByID()`.",style:"`style` must be set using `updateStylesByID()`."},p={updatePropertyByID:function(e,t,n){var r=a.getNode(e);s(!c.hasOwnProperty(t)),null!=n?i.setValueForProperty(r,t,n):i.deleteValueForProperty(r,t)},deletePropertyByID:function(e,t,n){var r=a.getNode(e);s(!c.hasOwnProperty(t)),i.deleteValueForProperty(r,t,n)},updateStylesByID:function(e,t){var n=a.getNode(e);r.setValueForStyles(n,t)},updateInnerHTMLByID:function(e,t){var n=a.getNode(e);l(n,t)},updateTextContentByID:function(e,t){var n=a.getNode(e);o.updateTextContent(n,t)},dangerouslyReplaceNodeWithMarkupByID:function(e,t){var n=a.getNode(e);o.dangerouslyReplaceNodeWithMarkup(n,t)},dangerouslyProcessChildrenUpdates:function(e,t){for(var n=0;n<e.length;n++)e[n].parentNode=a.getNode(e[n].parentID);o.processUpdates(e,t)}};u.measureMethods(p,"ReactDOMIDOperations",{updatePropertyByID:"updatePropertyByID",deletePropertyByID:"deletePropertyByID",updateStylesByID:"updateStylesByID",updateInnerHTMLByID:"updateInnerHTMLByID",updateTextContentByID:"updateTextContentByID",dangerouslyReplaceNodeWithMarkupByID:"dangerouslyReplaceNodeWithMarkupByID",dangerouslyProcessChildrenUpdates:"dangerouslyProcessChildrenUpdates"}),t.exports=p},{11:11,133:133,144:144,5:5,68:68,73:73,9:9}],45:[function(e,t,n){"use strict";var r=e(15),o=e(25),i=e(29),a=e(33),u=e(55),s=u.createFactory("iframe"),l=a.createClass({displayName:"ReactDOMIframe",tagName:"IFRAME",mixins:[i,o],render:function(){return s(this.props)},componentDidMount:function(){this.trapBubbledEvent(r.topLevelTypes.topLoad,"load")}});t.exports=l},{15:15,25:25,29:29,33:33,55:55}],46:[function(e,t,n){"use strict";var r=e(15),o=e(25),i=e(29),a=e(33),u=e(55),s=u.createFactory("img"),l=a.createClass({displayName:"ReactDOMImg",tagName:"IMG",mixins:[i,o],render:function(){return s(this.props)},componentDidMount:function(){this.trapBubbledEvent(r.topLevelTypes.topLoad,"load"),this.trapBubbledEvent(r.topLevelTypes.topError,"error")}});t.exports=l},{15:15,25:25,29:29,33:33,55:55}],47:[function(e,t,n){"use strict";function r(){this.isMounted()&&this.forceUpdate()}var o=e(2),i=e(11),a=e(24),u=e(29),s=e(33),l=e(55),c=e(68),p=e(85),d=e(27),f=e(133),h=l.createFactory("input"),m={},v=s.createClass({displayName:"ReactDOMInput",tagName:"INPUT",mixins:[o,a.Mixin,u],getInitialState:function(){var e=this.props.defaultValue;return{initialChecked:this.props.defaultChecked||!1,initialValue:null!=e?e:null}},render:function(){var e=d({},this.props);e.defaultChecked=null,e.defaultValue=null;var t=a.getValue(this);e.value=null!=t?t:this.state.initialValue;var n=a.getChecked(this);return e.checked=null!=n?n:this.state.initialChecked,e.onChange=this._handleChange,h(e,this.props.children)},componentDidMount:function(){var e=c.getID(this.getDOMNode());m[e]=this},componentWillUnmount:function(){var e=this.getDOMNode(),t=c.getID(e);delete m[t]},componentDidUpdate:function(e,t,n){var r=this.getDOMNode();null!=this.props.checked&&i.setValueForProperty(r,"checked",this.props.checked||!1);var o=a.getValue(this);null!=o&&i.setValueForProperty(r,"value",""+o)},_handleChange:function(e){var t,n=a.getOnChange(this);n&&(t=n.call(this,e)),p.asap(r,this);var o=this.props.name;if("radio"===this.props.type&&null!=o){for(var i=this.getDOMNode(),u=i;u.parentNode;)u=u.parentNode;for(var s=u.querySelectorAll("input[name="+JSON.stringify(""+o)+'][type="radio"]'),l=0,d=s.length;d>l;l++){var h=s[l];if(h!==i&&h.form===i.form){var v=c.getID(h);f(v);var g=m[v];f(g),p.asap(r,g)}}}return t}});t.exports=v},{11:11,133:133,2:2,24:24,27:27,29:29,33:33,55:55,68:68,85:85}],48:[function(e,t,n){"use strict";var r=e(29),o=e(33),i=e(55),a=(e(150),i.createFactory("option")),u=o.createClass({displayName:"ReactDOMOption",tagName:"OPTION",mixins:[r],componentWillMount:function(){},render:function(){return a(this.props,this.props.children)}});t.exports=u},{150:150,29:29,33:33,55:55}],49:[function(e,t,n){"use strict";function r(){if(this._pendingUpdate){this._pendingUpdate=!1;var e=u.getValue(this);null!=e&&this.isMounted()&&i(this,e)}}function o(e,t,n){if(null==e[t])return null;if(e.multiple){if(!Array.isArray(e[t]))return new Error("The `"+t+"` prop supplied to <select> must be an array if `multiple` is true.")}else if(Array.isArray(e[t]))return new Error("The `"+t+"` prop supplied to <select> must be a scalar value if `multiple` is false.")}function i(e,t){var n,r,o,i=e.getDOMNode().options;if(e.props.multiple){for(n={},r=0,o=t.length;o>r;r++)n[""+t[r]]=!0;for(r=0,o=i.length;o>r;r++){var a=n.hasOwnProperty(i[r].value);i[r].selected!==a&&(i[r].selected=a)}}else{for(n=""+t,r=0,o=i.length;o>r;r++)if(i[r].value===n)return void(i[r].selected=!0);i.length&&(i[0].selected=!0)}}var a=e(2),u=e(24),s=e(29),l=e(33),c=e(55),p=e(85),d=e(27),f=c.createFactory("select"),h=l.createClass({displayName:"ReactDOMSelect",tagName:"SELECT",mixins:[a,u.Mixin,s],propTypes:{defaultValue:o,value:o},render:function(){var e=d({},this.props);return e.onChange=this._handleChange,e.value=null,f(e,this.props.children)},componentWillMount:function(){this._pendingUpdate=!1},componentDidMount:function(){var e=u.getValue(this);null!=e?i(this,e):null!=this.props.defaultValue&&i(this,this.props.defaultValue)},componentDidUpdate:function(e){var t=u.getValue(this);null!=t?(this._pendingUpdate=!1,i(this,t)):!e.multiple!=!this.props.multiple&&(null!=this.props.defaultValue?i(this,this.props.defaultValue):i(this,this.props.multiple?[]:""))},_handleChange:function(e){var t,n=u.getOnChange(this);return n&&(t=n.call(this,e)),this._pendingUpdate=!0,p.asap(r,this),t}});t.exports=h},{2:2,24:24,27:27,29:29,33:33,55:55,85:85}],50:[function(e,t,n){"use strict";function r(e,t,n,r){return e===n&&t===r}function o(e){var t=document.selection,n=t.createRange(),r=n.text.length,o=n.duplicate();o.moveToElementText(e),o.setEndPoint("EndToStart",n);var i=o.text.length,a=i+r;return{start:i,end:a}}function i(e){var t=window.getSelection&&window.getSelection();if(!t||0===t.rangeCount)return null;var n=t.anchorNode,o=t.anchorOffset,i=t.focusNode,a=t.focusOffset,u=t.getRangeAt(0),s=r(t.anchorNode,t.anchorOffset,t.focusNode,t.focusOffset),l=s?0:u.toString().length,c=u.cloneRange();c.selectNodeContents(e),c.setEnd(u.startContainer,u.startOffset);var p=r(c.startContainer,c.startOffset,c.endContainer,c.endOffset),d=p?0:c.toString().length,f=d+l,h=document.createRange();h.setStart(n,o),h.setEnd(i,a);var m=h.collapsed;return{start:m?f:d,end:m?d:f}}function a(e,t){var n,r,o=document.selection.createRange().duplicate();"undefined"==typeof t.end?(n=t.start,r=n):t.start>t.end?(n=t.end,r=t.start):(n=t.start,r=t.end),o.moveToElementText(e),o.moveStart("character",n),o.setEndPoint("EndToStart",o),o.moveEnd("character",r-n),o.select()}function u(e,t){if(window.getSelection){var n=window.getSelection(),r=e[c()].length,o=Math.min(t.start,r),i="undefined"==typeof t.end?o:Math.min(t.end,r);if(!n.extend&&o>i){var a=i;i=o,o=a}var u=l(e,o),s=l(e,i);if(u&&s){var p=document.createRange();p.setStart(u.node,u.offset),n.removeAllRanges(),o>i?(n.addRange(p),n.extend(s.node,s.offset)):(p.setEnd(s.node,s.offset),n.addRange(p))}}}var s=e(21),l=e(126),c=e(128),p=s.canUseDOM&&"selection"in document&&!("getSelection"in window),d={getOffsets:p?o:i,setOffsets:p?a:u};t.exports=d},{126:126,128:128,21:21}],51:[function(e,t,n){"use strict";var r=e(11),o=e(35),i=e(42),a=e(27),u=e(114),s=function(e){};a(s.prototype,{construct:function(e){this._currentElement=e,this._stringText=""+e,this._rootNodeID=null,this._mountIndex=0},mountComponent:function(e,t,n){this._rootNodeID=e;var o=u(this._stringText);return t.renderToStaticMarkup?o:"<span "+r.createMarkupForID(e)+">"+o+"</span>"},receiveComponent:function(e,t){if(e!==this._currentElement){this._currentElement=e;var n=""+e;n!==this._stringText&&(this._stringText=n,i.BackendIDOperations.updateTextContentByID(this._rootNodeID,n))}},unmountComponent:function(){o.unmountIDFromEnvironment(this._rootNodeID)}}),t.exports=s},{11:11,114:114,27:27,35:35,42:42}],52:[function(e,t,n){"use strict";function r(){this.isMounted()&&this.forceUpdate()}var o=e(2),i=e(11),a=e(24),u=e(29),s=e(33),l=e(55),c=e(85),p=e(27),d=e(133),f=(e(150),l.createFactory("textarea")),h=s.createClass({displayName:"ReactDOMTextarea",tagName:"TEXTAREA",mixins:[o,a.Mixin,u],getInitialState:function(){var e=this.props.defaultValue,t=this.props.children;null!=t&&(d(null==e),Array.isArray(t)&&(d(t.length<=1),t=t[0]),e=""+t),null==e&&(e="");var n=a.getValue(this);return{initialValue:""+(null!=n?n:e)}},render:function(){var e=p({},this.props);return d(null==e.dangerouslySetInnerHTML),e.defaultValue=null,e.value=null,e.onChange=this._handleChange,f(e,this.state.initialValue)},componentDidUpdate:function(e,t,n){var r=a.getValue(this);if(null!=r){var o=this.getDOMNode();i.setValueForProperty(o,"value",""+r)}},_handleChange:function(e){var t,n=a.getOnChange(this);return n&&(t=n.call(this,e)),c.asap(r,this),t}});t.exports=h},{11:11,133:133,150:150,2:2,24:24,27:27,29:29,33:33,55:55,85:85}],53:[function(e,t,n){"use strict";function r(){this.reinitializeTransaction()}var o=e(85),i=e(101),a=e(27),u=e(112),s={initialize:u,close:function(){d.isBatchingUpdates=!1}},l={initialize:u,close:o.flushBatchedUpdates.bind(o)},c=[l,s];a(r.prototype,i.Mixin,{getTransactionWrappers:function(){return c}});var p=new r,d={isBatchingUpdates:!1,batchedUpdates:function(e,t,n,r,o){var i=d.isBatchingUpdates;d.isBatchingUpdates=!0,i?e(t,n,r,o):p.perform(e,null,t,n,r,o)}};t.exports=d},{101:101,112:112,27:27,85:85}],54:[function(e,t,n){"use strict";function r(e){return h.createClass({tagName:e.toUpperCase(),render:function(){return new T(e,null,null,null,null,this.props)}})}function o(){R.EventEmitter.injectReactEventListener(P),R.EventPluginHub.injectEventPluginOrder(s),R.EventPluginHub.injectInstanceHandle(w),R.EventPluginHub.injectMount(O),R.EventPluginHub.injectEventPluginsByName({SimpleEventPlugin:L,EnterLeaveEventPlugin:l,ChangeEventPlugin:a,MobileSafariClickEventPlugin:d,SelectEventPlugin:A,BeforeInputEventPlugin:i}),R.NativeComponent.injectGenericComponentClass(g),R.NativeComponent.injectTextComponentClass(I),R.NativeComponent.injectAutoWrapper(r),R.Class.injectMixin(f),R.NativeComponent.injectComponentClasses({button:y,form:C,iframe:_,img:E,input:x,option:D,select:M,textarea:N,html:F("html"),head:F("head"),body:F("body")}),R.DOMProperty.injectDOMPropertyConfig(p),R.DOMProperty.injectDOMPropertyConfig(U),R.EmptyComponent.injectEmptyComponent("noscript"),R.Updates.injectReconcileTransaction(S),R.Updates.injectBatchingStrategy(v),R.RootIndex.injectCreateReactRootIndex(c.canUseDOM?u.createReactRootIndex:k.createReactRootIndex),R.Component.injectEnvironment(m),R.DOMComponent.injectIDOperations(b)}var i=e(3),a=e(7),u=e(8),s=e(13),l=e(14),c=e(21),p=e(23),d=e(26),f=e(29),h=e(33),m=e(35),v=e(53),g=e(42),y=e(41),C=e(43),E=e(46),b=e(44),_=e(45),x=e(47),D=e(48),M=e(49),N=e(52),I=e(51),T=e(55),P=e(60),R=e(62),w=e(64),O=e(68),S=e(78),A=e(87),k=e(88),L=e(89),U=e(86),F=e(109);

        t.exports={inject:o}},{109:109,13:13,14:14,21:21,23:23,26:26,29:29,3:3,33:33,35:35,41:41,42:42,43:43,44:44,45:45,46:46,47:47,48:48,49:49,51:51,52:52,53:53,55:55,60:60,62:62,64:64,68:68,7:7,78:78,8:8,86:86,87:87,88:88,89:89}],55:[function(e,t,n){"use strict";var r=e(38),o=e(39),i=e(27),a=(e(150),{key:!0,ref:!0}),u=function(e,t,n,r,o,i){this.type=e,this.key=t,this.ref=n,this._owner=r,this._context=o,this.props=i};u.prototype={_isReactElement:!0},u.createElement=function(e,t,n){var i,s={},l=null,c=null;if(null!=t){c=void 0===t.ref?null:t.ref,l=void 0===t.key?null:""+t.key;for(i in t)t.hasOwnProperty(i)&&!a.hasOwnProperty(i)&&(s[i]=t[i])}var p=arguments.length-2;if(1===p)s.children=n;else if(p>1){for(var d=Array(p),f=0;p>f;f++)d[f]=arguments[f+2];s.children=d}if(e&&e.defaultProps){var h=e.defaultProps;for(i in h)"undefined"==typeof s[i]&&(s[i]=h[i])}return new u(e,l,c,o.current,r.current,s)},u.createFactory=function(e){var t=u.createElement.bind(null,e);return t.type=e,t},u.cloneAndReplaceProps=function(e,t){var n=new u(e.type,e.key,e.ref,e._owner,e._context,t);return n},u.cloneElement=function(e,t,n){var r,s=i({},e.props),l=e.key,c=e.ref,p=e._owner;if(null!=t){void 0!==t.ref&&(c=t.ref,p=o.current),void 0!==t.key&&(l=""+t.key);for(r in t)t.hasOwnProperty(r)&&!a.hasOwnProperty(r)&&(s[r]=t[r])}var d=arguments.length-2;if(1===d)s.children=n;else if(d>1){for(var f=Array(d),h=0;d>h;h++)f[h]=arguments[h+2];s.children=f}return new u(e.type,l,c,p,e._context,s)},u.isValidElement=function(e){var t=!(!e||!e._isReactElement);return t},t.exports=u},{150:150,27:27,38:38,39:39}],56:[function(e,t,n){"use strict";function r(){if(y.current){var e=y.current.getName();if(e)return" Check the render method of `"+e+"`."}return""}function o(e){var t=e&&e.getPublicInstance();if(!t)return void 0;var n=t.constructor;return n?n.displayName||n.name||void 0:void 0}function i(){var e=y.current;return e&&o(e)||void 0}function a(e,t){e._store.validated||null!=e.key||(e._store.validated=!0,s('Each child in an array or iterator should have a unique "key" prop.',e,t))}function u(e,t,n){D.test(e)&&s("Child objects should have non-numeric keys so ordering is preserved.",t,n)}function s(e,t,n){var r=i(),a="string"==typeof n?n:n.displayName||n.name,u=r||a,s=_[e]||(_[e]={});if(!s.hasOwnProperty(u)){s[u]=!0;var l="";if(t&&t._owner&&t._owner!==y.current){var c=o(t._owner);l=" It was passed a child from "+c+"."}}}function l(e,t){if(Array.isArray(e))for(var n=0;n<e.length;n++){var r=e[n];m.isValidElement(r)&&a(r,t)}else if(m.isValidElement(e))e._store.validated=!0;else if(e){var o=E(e);if(o){if(o!==e.entries)for(var i,s=o.call(e);!(i=s.next()).done;)m.isValidElement(i.value)&&a(i.value,t)}else if("object"==typeof e){var l=v.extractIfFragment(e);for(var c in l)l.hasOwnProperty(c)&&u(c,l[c],t)}}}function c(e,t,n,o){for(var i in t)if(t.hasOwnProperty(i)){var a;try{b("function"==typeof t[i]),a=t[i](n,i,e,o)}catch(u){a=u}a instanceof Error&&!(a.message in x)&&(x[a.message]=!0,r(this))}}function p(e,t){var n=t.type,r="string"==typeof n?n:n.displayName,o=t._owner?t._owner.getPublicInstance().constructor.displayName:null,i=e+"|"+r+"|"+o;if(!M.hasOwnProperty(i)){M[i]=!0;var a="";r&&(a=" <"+r+" />");var u="";o&&(u=" The element was created by "+o+".")}}function d(e,t){return e!==e?t!==t:0===e&&0===t?1/e===1/t:e===t}function f(e){if(e._store){var t=e._store.originalProps,n=e.props;for(var r in n)n.hasOwnProperty(r)&&(t.hasOwnProperty(r)&&d(t[r],n[r])||(p(r,e),t[r]=n[r]))}}function h(e){if(null!=e.type){var t=C.getComponentClassForElement(e),n=t.displayName||t.name;t.propTypes&&c(n,t.propTypes,e.props,g.prop),"function"==typeof t.getDefaultProps}}var m=e(55),v=e(61),g=e(75),y=(e(74),e(39)),C=e(71),E=e(124),b=e(133),_=(e(150),{}),x={},D=/^\d+$/,M={},N={checkAndWarnForMutatedProps:f,createElement:function(e,t,n){var r=m.createElement.apply(this,arguments);if(null==r)return r;for(var o=2;o<arguments.length;o++)l(arguments[o],e);return h(r),r},createFactory:function(e){var t=N.createElement.bind(null,e);return t.type=e,t},cloneElement:function(e,t,n){for(var r=m.cloneElement.apply(this,arguments),o=2;o<arguments.length;o++)l(arguments[o],r.type);return h(r),r}};t.exports=N},{124:124,133:133,150:150,39:39,55:55,61:61,71:71,74:74,75:75}],57:[function(e,t,n){"use strict";function r(e){c[e]=!0}function o(e){delete c[e]}function i(e){return!!c[e]}var a,u=e(55),s=e(65),l=e(133),c={},p={injectEmptyComponent:function(e){a=u.createFactory(e)}},d=function(){};d.prototype.componentDidMount=function(){var e=s.get(this);e&&r(e._rootNodeID)},d.prototype.componentWillUnmount=function(){var e=s.get(this);e&&o(e._rootNodeID)},d.prototype.render=function(){return l(a),a()};var f=u.createElement(d),h={emptyElement:f,injection:p,isNullComponentID:i};t.exports=h},{133:133,55:55,65:65}],58:[function(e,t,n){"use strict";var r={guard:function(e,t){return e}};t.exports=r},{}],59:[function(e,t,n){"use strict";function r(e){o.enqueueEvents(e),o.processEventQueue()}var o=e(17),i={handleTopLevel:function(e,t,n,i){var a=o.extractEvents(e,t,n,i);r(a)}};t.exports=i},{17:17}],60:[function(e,t,n){"use strict";function r(e){var t=p.getID(e),n=c.getReactRootIDFromNodeID(t),r=p.findReactContainerForID(n),o=p.getFirstReactDOM(r);return o}function o(e,t){this.topLevelType=e,this.nativeEvent=t,this.ancestors=[]}function i(e){for(var t=p.getFirstReactDOM(h(e.nativeEvent))||window,n=t;n;)e.ancestors.push(n),n=r(n);for(var o=0,i=e.ancestors.length;i>o;o++){t=e.ancestors[o];var a=p.getID(t)||"";v._handleTopLevel(e.topLevelType,t,a,e.nativeEvent)}}function a(e){var t=m(window);e(t)}var u=e(16),s=e(21),l=e(28),c=e(64),p=e(68),d=e(85),f=e(27),h=e(123),m=e(129);f(o.prototype,{destructor:function(){this.topLevelType=null,this.nativeEvent=null,this.ancestors.length=0}}),l.addPoolingTo(o,l.twoArgumentPooler);var v={_enabled:!0,_handleTopLevel:null,WINDOW_HANDLE:s.canUseDOM?window:null,setHandleTopLevel:function(e){v._handleTopLevel=e},setEnabled:function(e){v._enabled=!!e},isEnabled:function(){return v._enabled},trapBubbledEvent:function(e,t,n){var r=n;return r?u.listen(r,t,v.dispatchEvent.bind(null,e)):null},trapCapturedEvent:function(e,t,n){var r=n;return r?u.capture(r,t,v.dispatchEvent.bind(null,e)):null},monitorScrollValue:function(e){var t=a.bind(null,e);u.listen(window,"scroll",t)},dispatchEvent:function(e,t){if(v._enabled){var n=o.getPooled(e,t);try{d.batchedUpdates(i,n)}finally{o.release(n)}}}};t.exports=v},{123:123,129:129,16:16,21:21,27:27,28:28,64:64,68:68,85:85}],61:[function(e,t,n){"use strict";var r=(e(55),e(150),{create:function(e){return e},extract:function(e){return e},extractIfFragment:function(e){return e}});t.exports=r},{150:150,55:55}],62:[function(e,t,n){"use strict";var r=e(10),o=e(17),i=e(36),a=e(33),u=e(57),s=e(30),l=e(71),c=e(42),p=e(73),d=e(81),f=e(85),h={Component:i.injection,Class:a.injection,DOMComponent:c.injection,DOMProperty:r.injection,EmptyComponent:u.injection,EventPluginHub:o.injection,EventEmitter:s.injection,NativeComponent:l.injection,Perf:p.injection,RootIndex:d.injection,Updates:f.injection};t.exports=h},{10:10,17:17,30:30,33:33,36:36,42:42,57:57,71:71,73:73,81:81,85:85}],63:[function(e,t,n){"use strict";function r(e){return i(document.documentElement,e)}var o=e(50),i=e(107),a=e(117),u=e(119),s={hasSelectionCapabilities:function(e){return e&&("INPUT"===e.nodeName&&"text"===e.type||"TEXTAREA"===e.nodeName||"true"===e.contentEditable)},getSelectionInformation:function(){var e=u();return{focusedElem:e,selectionRange:s.hasSelectionCapabilities(e)?s.getSelection(e):null}},restoreSelection:function(e){var t=u(),n=e.focusedElem,o=e.selectionRange;t!==n&&r(n)&&(s.hasSelectionCapabilities(n)&&s.setSelection(n,o),a(n))},getSelection:function(e){var t;if("selectionStart"in e)t={start:e.selectionStart,end:e.selectionEnd};else if(document.selection&&"INPUT"===e.nodeName){var n=document.selection.createRange();n.parentElement()===e&&(t={start:-n.moveStart("character",-e.value.length),end:-n.moveEnd("character",-e.value.length)})}else t=o.getOffsets(e);return t||{start:0,end:0}},setSelection:function(e,t){var n=t.start,r=t.end;if("undefined"==typeof r&&(r=n),"selectionStart"in e)e.selectionStart=n,e.selectionEnd=Math.min(r,e.value.length);else if(document.selection&&"INPUT"===e.nodeName){var i=e.createTextRange();i.collapse(!0),i.moveStart("character",n),i.moveEnd("character",r-n),i.select()}else o.setOffsets(e,t)}};t.exports=s},{107:107,117:117,119:119,50:50}],64:[function(e,t,n){"use strict";function r(e){return f+e.toString(36)}function o(e,t){return e.charAt(t)===f||t===e.length}function i(e){return""===e||e.charAt(0)===f&&e.charAt(e.length-1)!==f}function a(e,t){return 0===t.indexOf(e)&&o(t,e.length)}function u(e){return e?e.substr(0,e.lastIndexOf(f)):""}function s(e,t){if(d(i(e)&&i(t)),d(a(e,t)),e===t)return e;var n,r=e.length+h;for(n=r;n<t.length&&!o(t,n);n++);return t.substr(0,n)}function l(e,t){var n=Math.min(e.length,t.length);if(0===n)return"";for(var r=0,a=0;n>=a;a++)if(o(e,a)&&o(t,a))r=a;else if(e.charAt(a)!==t.charAt(a))break;var u=e.substr(0,r);return d(i(u)),u}function c(e,t,n,r,o,i){e=e||"",t=t||"",d(e!==t);var l=a(t,e);d(l||a(e,t));for(var c=0,p=l?u:s,f=e;;f=p(f,t)){var h;if(o&&f===e||i&&f===t||(h=n(f,l,r)),h===!1||f===t)break;d(c++<m)}}var p=e(81),d=e(133),f=".",h=f.length,m=100,v={createReactRootID:function(){return r(p.createReactRootIndex())},createReactID:function(e,t){return e+t},getReactRootIDFromNodeID:function(e){if(e&&e.charAt(0)===f&&e.length>1){var t=e.indexOf(f,1);return t>-1?e.substr(0,t):e}return null},traverseEnterLeave:function(e,t,n,r,o){var i=l(e,t);i!==e&&c(e,i,n,r,!1,!0),i!==t&&c(i,t,n,o,!0,!1)},traverseTwoPhase:function(e,t,n){e&&(c("",e,t,n,!0,!1),c(e,"",t,n,!1,!0))},traverseAncestors:function(e,t,n){c("",e,t,n,!0,!1)},_getFirstCommonAncestorID:l,_getNextDescendantID:s,isAncestorIDOf:a,SEPARATOR:f};t.exports=v},{133:133,81:81}],65:[function(e,t,n){"use strict";var r={remove:function(e){e._reactInternalInstance=void 0},get:function(e){return e._reactInternalInstance},has:function(e){return void 0!==e._reactInternalInstance},set:function(e,t){e._reactInternalInstance=t}};t.exports=r},{}],66:[function(e,t,n){"use strict";var r={currentlyMountingInstance:null,currentlyUnmountingInstance:null};t.exports=r},{}],67:[function(e,t,n){"use strict";var r=e(104),o={CHECKSUM_ATTR_NAME:"data-react-checksum",addChecksumToMarkup:function(e){var t=r(e);return e.replace(">"," "+o.CHECKSUM_ATTR_NAME+'="'+t+'">')},canReuseMarkup:function(e,t){var n=t.getAttribute(o.CHECKSUM_ATTR_NAME);n=n&&parseInt(n,10);var i=r(e);return i===n}};t.exports=o},{104:104}],68:[function(e,t,n){"use strict";function r(e,t){for(var n=Math.min(e.length,t.length),r=0;n>r;r++)if(e.charAt(r)!==t.charAt(r))return r;return e.length===t.length?-1:n}function o(e){var t=P(e);return t&&K.getID(t)}function i(e){var t=a(e);if(t)if(L.hasOwnProperty(t)){var n=L[t];n!==e&&(w(!c(n,t)),L[t]=e)}else L[t]=e;return t}function a(e){return e&&e.getAttribute&&e.getAttribute(k)||""}function u(e,t){var n=a(e);n!==t&&delete L[n],e.setAttribute(k,t),L[t]=e}function s(e){return L.hasOwnProperty(e)&&c(L[e],e)||(L[e]=K.findReactNodeByID(e)),L[e]}function l(e){var t=b.get(e)._rootNodeID;return C.isNullComponentID(t)?null:(L.hasOwnProperty(t)&&c(L[t],t)||(L[t]=K.findReactNodeByID(t)),L[t])}function c(e,t){if(e){w(a(e)===t);var n=K.findReactContainerForID(t);if(n&&T(n,e))return!0}return!1}function p(e){delete L[e]}function d(e){var t=L[e];return t&&c(t,e)?void(W=t):!1}function f(e){W=null,E.traverseAncestors(e,d);var t=W;return W=null,t}function h(e,t,n,r,o){var i=D.mountComponent(e,t,r,I);e._isTopLevel=!0,K._mountImageIntoNode(i,n,o)}function m(e,t,n,r){var o=N.ReactReconcileTransaction.getPooled();o.perform(h,null,e,t,n,o,r),N.ReactReconcileTransaction.release(o)}var v=e(10),g=e(30),y=(e(39),e(55)),C=(e(56),e(57)),E=e(64),b=e(65),_=e(67),x=e(73),D=e(79),M=e(84),N=e(85),I=e(113),T=e(107),P=e(127),R=e(132),w=e(133),O=e(144),S=e(147),A=(e(150),E.SEPARATOR),k=v.ID_ATTRIBUTE_NAME,L={},U=1,F=9,B={},V={},j=[],W=null,K={_instancesByReactRootID:B,scrollMonitor:function(e,t){t()},_updateRootComponent:function(e,t,n,r){return K.scrollMonitor(n,function(){M.enqueueElementInternal(e,t),r&&M.enqueueCallbackInternal(e,r)}),e},_registerComponent:function(e,t){w(t&&(t.nodeType===U||t.nodeType===F)),g.ensureScrollValueMonitoring();var n=K.registerContainer(t);return B[n]=e,n},_renderNewRootComponent:function(e,t,n){var r=R(e,null),o=K._registerComponent(r,t);return N.batchedUpdates(m,r,o,t,n),r},render:function(e,t,n){w(y.isValidElement(e));var r=B[o(t)];if(r){var i=r._currentElement;if(S(i,e))return K._updateRootComponent(r,e,t,n).getPublicInstance();K.unmountComponentAtNode(t)}var a=P(t),u=a&&K.isRenderedByReact(a),s=u&&!r,l=K._renderNewRootComponent(e,t,s).getPublicInstance();return n&&n.call(l),l},constructAndRenderComponent:function(e,t,n){var r=y.createElement(e,t);return K.render(r,n)},constructAndRenderComponentByID:function(e,t,n){var r=document.getElementById(n);return w(r),K.constructAndRenderComponent(e,t,r)},registerContainer:function(e){var t=o(e);return t&&(t=E.getReactRootIDFromNodeID(t)),t||(t=E.createReactRootID()),V[t]=e,t},unmountComponentAtNode:function(e){w(e&&(e.nodeType===U||e.nodeType===F));var t=o(e),n=B[t];return n?(K.unmountComponentFromNode(n,e),delete B[t],delete V[t],!0):!1},unmountComponentFromNode:function(e,t){for(D.unmountComponent(e),t.nodeType===F&&(t=t.documentElement);t.lastChild;)t.removeChild(t.lastChild)},findReactContainerForID:function(e){var t=E.getReactRootIDFromNodeID(e),n=V[t];return n},findReactNodeByID:function(e){var t=K.findReactContainerForID(e);return K.findComponentRoot(t,e)},isRenderedByReact:function(e){if(1!==e.nodeType)return!1;var t=K.getID(e);return t?t.charAt(0)===A:!1},getFirstReactDOM:function(e){for(var t=e;t&&t.parentNode!==t;){if(K.isRenderedByReact(t))return t;t=t.parentNode}return null},findComponentRoot:function(e,t){var n=j,r=0,o=f(t)||e;for(n[0]=o.firstChild,n.length=1;r<n.length;){for(var i,a=n[r++];a;){var u=K.getID(a);u?t===u?i=a:E.isAncestorIDOf(u,t)&&(n.length=r=0,n.push(a.firstChild)):n.push(a.firstChild),a=a.nextSibling}if(i)return n.length=0,i}n.length=0,w(!1)},_mountImageIntoNode:function(e,t,n){if(w(t&&(t.nodeType===U||t.nodeType===F)),n){var o=P(t);if(_.canReuseMarkup(e,o))return;var i=o.getAttribute(_.CHECKSUM_ATTR_NAME);o.removeAttribute(_.CHECKSUM_ATTR_NAME);var a=o.outerHTML;o.setAttribute(_.CHECKSUM_ATTR_NAME,i);var u=r(e,a);" (client) "+e.substring(u-20,u+20)+"\n (server) "+a.substring(u-20,u+20),w(t.nodeType!==F)}w(t.nodeType!==F),O(t,e)},getReactRootID:o,getID:i,setID:u,getNode:s,getNodeFromInstance:l,purgeID:p};x.measureMethods(K,"ReactMount",{_renderNewRootComponent:"_renderNewRootComponent",_mountImageIntoNode:"_mountImageIntoNode"}),t.exports=K},{10:10,107:107,113:113,127:127,132:132,133:133,144:144,147:147,150:150,30:30,39:39,55:55,56:56,57:57,64:64,65:65,67:67,73:73,79:79,84:84,85:85}],69:[function(e,t,n){"use strict";function r(e,t,n){h.push({parentID:e,parentNode:null,type:c.INSERT_MARKUP,markupIndex:m.push(t)-1,textContent:null,fromIndex:null,toIndex:n})}function o(e,t,n){h.push({parentID:e,parentNode:null,type:c.MOVE_EXISTING,markupIndex:null,textContent:null,fromIndex:t,toIndex:n})}function i(e,t){h.push({parentID:e,parentNode:null,type:c.REMOVE_NODE,markupIndex:null,textContent:null,fromIndex:t,toIndex:null})}function a(e,t){h.push({parentID:e,parentNode:null,type:c.TEXT_CONTENT,markupIndex:null,textContent:t,fromIndex:null,toIndex:null})}function u(){h.length&&(l.processChildrenUpdates(h,m),s())}function s(){h.length=0,m.length=0}var l=e(36),c=e(70),p=e(79),d=e(31),f=0,h=[],m=[],v={Mixin:{mountChildren:function(e,t,n){var r=d.instantiateChildren(e,t,n);this._renderedChildren=r;var o=[],i=0;for(var a in r)if(r.hasOwnProperty(a)){var u=r[a],s=this._rootNodeID+a,l=p.mountComponent(u,s,t,n);u._mountIndex=i,o.push(l),i++}return o},updateTextContent:function(e){f++;var t=!0;try{var n=this._renderedChildren;d.unmountChildren(n);for(var r in n)n.hasOwnProperty(r)&&this._unmountChildByName(n[r],r);this.setTextContent(e),t=!1}finally{f--,f||(t?s():u())}},updateChildren:function(e,t,n){f++;var r=!0;try{this._updateChildren(e,t,n),r=!1}finally{f--,f||(r?s():u())}},_updateChildren:function(e,t,n){var r=this._renderedChildren,o=d.updateChildren(r,e,t,n);if(this._renderedChildren=o,o||r){var i,a=0,u=0;for(i in o)if(o.hasOwnProperty(i)){var s=r&&r[i],l=o[i];s===l?(this.moveChild(s,u,a),a=Math.max(s._mountIndex,a),s._mountIndex=u):(s&&(a=Math.max(s._mountIndex,a),this._unmountChildByName(s,i)),this._mountChildByNameAtIndex(l,i,u,t,n)),u++}for(i in r)!r.hasOwnProperty(i)||o&&o.hasOwnProperty(i)||this._unmountChildByName(r[i],i)}},unmountChildren:function(){var e=this._renderedChildren;d.unmountChildren(e),this._renderedChildren=null},moveChild:function(e,t,n){e._mountIndex<n&&o(this._rootNodeID,e._mountIndex,t)},createChild:function(e,t){r(this._rootNodeID,t,e._mountIndex)},removeChild:function(e){i(this._rootNodeID,e._mountIndex)},setTextContent:function(e){a(this._rootNodeID,e)},_mountChildByNameAtIndex:function(e,t,n,r,o){var i=this._rootNodeID+t,a=p.mountComponent(e,i,r,o);e._mountIndex=n,this.createChild(e,a)},_unmountChildByName:function(e,t){this.removeChild(e),e._mountIndex=null}}};t.exports=v},{31:31,36:36,70:70,79:79}],70:[function(e,t,n){"use strict";var r=e(138),o=r({INSERT_MARKUP:null,MOVE_EXISTING:null,REMOVE_NODE:null,TEXT_CONTENT:null});t.exports=o},{138:138}],71:[function(e,t,n){"use strict";function r(e){if("function"==typeof e.type)return e.type;var t=e.type,n=p[t];return null==n&&(p[t]=n=l(t)),n}function o(e){return s(c),new c(e.type,e.props)}function i(e){return new d(e)}function a(e){return e instanceof d}var u=e(27),s=e(133),l=null,c=null,p={},d=null,f={injectGenericComponentClass:function(e){c=e},injectTextComponentClass:function(e){d=e},injectComponentClasses:function(e){u(p,e)},injectAutoWrapper:function(e){l=e}},h={getComponentClassForElement:r,createInternalComponent:o,createInstanceForText:i,isTextComponent:a,injection:f};t.exports=h},{133:133,27:27}],72:[function(e,t,n){"use strict";var r=e(133),o={isValidOwner:function(e){return!(!e||"function"!=typeof e.attachRef||"function"!=typeof e.detachRef)},addComponentAsRefTo:function(e,t,n){r(o.isValidOwner(n)),n.attachRef(t,e)},removeComponentAsRefFrom:function(e,t,n){r(o.isValidOwner(n)),n.getPublicInstance().refs[t]===e.getPublicInstance()&&n.detachRef(t)}};t.exports=o},{133:133}],73:[function(e,t,n){"use strict";function r(e,t,n){return n}var o={enableMeasure:!1,storedMeasure:r,measureMethods:function(e,t,n){},measure:function(e,t,n){return n},injection:{injectMeasure:function(e){o.storedMeasure=e}}};t.exports=o},{}],74:[function(e,t,n){"use strict";var r={};t.exports=r},{}],75:[function(e,t,n){"use strict";var r=e(138),o=r({prop:null,context:null,childContext:null});t.exports=o},{138:138}],76:[function(e,t,n){"use strict";function r(e){function t(t,n,r,o,i){if(o=o||b,null==n[r]){var a=C[i];return t?new Error("Required "+a+" `"+r+"` was not specified in "+("`"+o+"`.")):null}return e(n,r,o,i)}var n=t.bind(null,!1);return n.isRequired=t.bind(null,!0),n}function o(e){function t(t,n,r,o){var i=t[n],a=m(i);if(a!==e){var u=C[o],s=v(i);return new Error("Invalid "+u+" `"+n+"` of type `"+s+"` "+("supplied to `"+r+"`, expected `"+e+"`."))}return null}return r(t)}function i(){return r(E.thatReturns(null))}function a(e){function t(t,n,r,o){var i=t[n];if(!Array.isArray(i)){var a=C[o],u=m(i);return new Error("Invalid "+a+" `"+n+"` of type "+("`"+u+"` supplied to `"+r+"`, expected an array."))}for(var s=0;s<i.length;s++){var l=e(i,s,r,o);if(l instanceof Error)return l}return null}return r(t)}function u(){function e(e,t,n,r){if(!g.isValidElement(e[t])){var o=C[r];return new Error("Invalid "+o+" `"+t+"` supplied to "+("`"+n+"`, expected a ReactElement."))}return null}return r(e)}function s(e){function t(t,n,r,o){if(!(t[n]instanceof e)){var i=C[o],a=e.name||b;return new Error("Invalid "+i+" `"+n+"` supplied to "+("`"+r+"`, expected instance of `"+a+"`."))}return null}return r(t)}function l(e){function t(t,n,r,o){for(var i=t[n],a=0;a<e.length;a++)if(i===e[a])return null;var u=C[o],s=JSON.stringify(e);return new Error("Invalid "+u+" `"+n+"` of value `"+i+"` "+("supplied to `"+r+"`, expected one of "+s+"."))}return r(t)}function c(e){function t(t,n,r,o){var i=t[n],a=m(i);if("object"!==a){var u=C[o];return new Error("Invalid "+u+" `"+n+"` of type "+("`"+a+"` supplied to `"+r+"`, expected an object."))}for(var s in i)if(i.hasOwnProperty(s)){var l=e(i,s,r,o);if(l instanceof Error)return l}return null}return r(t)}function p(e){function t(t,n,r,o){for(var i=0;i<e.length;i++){var a=e[i];if(null==a(t,n,r,o))return null}var u=C[o];return new Error("Invalid "+u+" `"+n+"` supplied to "+("`"+r+"`."))}return r(t)}function d(){function e(e,t,n,r){if(!h(e[t])){var o=C[r];return new Error("Invalid "+o+" `"+t+"` supplied to "+("`"+n+"`, expected a ReactNode."))}return null}return r(e)}function f(e){function t(t,n,r,o){var i=t[n],a=m(i);if("object"!==a){var u=C[o];return new Error("Invalid "+u+" `"+n+"` of type `"+a+"` "+("supplied to `"+r+"`, expected `object`."))}for(var s in e){var l=e[s];if(l){var c=l(i,s,r,o);if(c)return c}}return null}return r(t)}function h(e){switch(typeof e){case"number":case"string":case"undefined":return!0;case"boolean":return!e;case"object":if(Array.isArray(e))return e.every(h);if(null===e||g.isValidElement(e))return!0;e=y.extractIfFragment(e);for(var t in e)if(!h(e[t]))return!1;return!0;default:return!1}}function m(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":t}function v(e){var t=m(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}var g=e(55),y=e(61),C=e(74),E=e(112),b="<<anonymous>>",_=u(),x=d(),D={array:o("array"),bool:o("boolean"),func:o("function"),number:o("number"),object:o("object"),string:o("string"),any:i(),arrayOf:a,element:_,instanceOf:s,node:x,objectOf:c,oneOf:l,oneOfType:p,shape:f};t.exports=D},{112:112,55:55,61:61,74:74}],77:[function(e,t,n){"use strict";function r(){this.listenersToPut=[]}var o=e(28),i=e(30),a=e(27);a(r.prototype,{enqueuePutListener:function(e,t,n){this.listenersToPut.push({rootNodeID:e,propKey:t,propValue:n})},putListeners:function(){for(var e=0;e<this.listenersToPut.length;e++){var t=this.listenersToPut[e];i.putListener(t.rootNodeID,t.propKey,t.propValue)}},reset:function(){this.listenersToPut.length=0},destructor:function(){this.reset()}}),o.addPoolingTo(r),t.exports=r},{27:27,28:28,30:30}],78:[function(e,t,n){"use strict";function r(){this.reinitializeTransaction(),this.renderToStaticMarkup=!1,this.reactMountReady=o.getPooled(null),this.putListenerQueue=s.getPooled()}var o=e(6),i=e(28),a=e(30),u=e(63),s=e(77),l=e(101),c=e(27),p={initialize:u.getSelectionInformation,close:u.restoreSelection},d={initialize:function(){var e=a.isEnabled();return a.setEnabled(!1),e},close:function(e){a.setEnabled(e)}},f={initialize:function(){this.reactMountReady.reset()},close:function(){this.reactMountReady.notifyAll()}},h={initialize:function(){this.putListenerQueue.reset()},close:function(){this.putListenerQueue.putListeners()}},m=[h,p,d,f],v={getTransactionWrappers:function(){return m},getReactMountReady:function(){return this.reactMountReady},getPutListenerQueue:function(){return this.putListenerQueue},destructor:function(){o.release(this.reactMountReady),this.reactMountReady=null,s.release(this.putListenerQueue),this.putListenerQueue=null}};c(r.prototype,l.Mixin,v),i.addPoolingTo(r),t.exports=r},{101:101,27:27,28:28,30:30,6:6,63:63,77:77}],79:[function(e,t,n){"use strict";function r(){o.attachRefs(this,this._currentElement)}var o=e(80),i=(e(56),{mountComponent:function(e,t,n,o){var i=e.mountComponent(t,n,o);return n.getReactMountReady().enqueue(r,e),i},unmountComponent:function(e){o.detachRefs(e,e._currentElement),e.unmountComponent()},receiveComponent:function(e,t,n,i){var a=e._currentElement;if(t!==a||null==t._owner){var u=o.shouldUpdateRefs(a,t);u&&o.detachRefs(e,a),e.receiveComponent(t,n,i),u&&n.getReactMountReady().enqueue(r,e)}},performUpdateIfNecessary:function(e,t){e.performUpdateIfNecessary(t)}});t.exports=i},{56:56,80:80}],80:[function(e,t,n){"use strict";function r(e,t,n){"function"==typeof e?e(t.getPublicInstance()):i.addComponentAsRefTo(t,e,n)}function o(e,t,n){"function"==typeof e?e(null):i.removeComponentAsRefFrom(t,e,n)}var i=e(72),a={};a.attachRefs=function(e,t){var n=t.ref;null!=n&&r(n,e,t._owner)},a.shouldUpdateRefs=function(e,t){return t._owner!==e._owner||t.ref!==e.ref},a.detachRefs=function(e,t){var n=t.ref;null!=n&&o(n,e,t._owner)},t.exports=a},{72:72}],81:[function(e,t,n){"use strict";var r={injectCreateReactRootIndex:function(e){o.createReactRootIndex=e}},o={createReactRootIndex:null,injection:r};t.exports=o},{}],82:[function(e,t,n){"use strict";function r(e){p(i.isValidElement(e));var t;try{var n=a.createReactRootID();return t=s.getPooled(!1),t.perform(function(){var r=c(e,null),o=r.mountComponent(n,t,l);return u.addChecksumToMarkup(o)},null)}finally{s.release(t)}}function o(e){p(i.isValidElement(e));var t;try{var n=a.createReactRootID();return t=s.getPooled(!0),t.perform(function(){var r=c(e,null);return r.mountComponent(n,t,l)},null)}finally{s.release(t)}}var i=e(55),a=e(64),u=e(67),s=e(83),l=e(113),c=e(132),p=e(133);t.exports={renderToString:r,renderToStaticMarkup:o}},{113:113,132:132,133:133,55:55,64:64,67:67,83:83}],83:[function(e,t,n){"use strict";function r(e){this.reinitializeTransaction(),this.renderToStaticMarkup=e,this.reactMountReady=i.getPooled(null),this.putListenerQueue=a.getPooled()}var o=e(28),i=e(6),a=e(77),u=e(101),s=e(27),l=e(112),c={initialize:function(){this.reactMountReady.reset()},close:l},p={initialize:function(){this.putListenerQueue.reset()},close:l},d=[p,c],f={getTransactionWrappers:function(){return d},getReactMountReady:function(){return this.reactMountReady},getPutListenerQueue:function(){return this.putListenerQueue},destructor:function(){i.release(this.reactMountReady),this.reactMountReady=null,a.release(this.putListenerQueue),this.putListenerQueue=null}};s(r.prototype,u.Mixin,f),o.addPoolingTo(r),t.exports=r},{101:101,112:112,27:27,28:28,6:6,77:77}],84:[function(e,t,n){"use strict";function r(e){e!==i.currentlyMountingInstance&&l.enqueueUpdate(e)}function o(e,t){p(null==a.current);var n=s.get(e);return n?n===i.currentlyUnmountingInstance?null:n:null}var i=e(66),a=e(39),u=e(55),s=e(65),l=e(85),c=e(27),p=e(133),d=(e(150),{enqueueCallback:function(e,t){p("function"==typeof t);var n=o(e);return n&&n!==i.currentlyMountingInstance?(n._pendingCallbacks?n._pendingCallbacks.push(t):n._pendingCallbacks=[t],void r(n)):null},enqueueCallbackInternal:function(e,t){p("function"==typeof t),e._pendingCallbacks?e._pendingCallbacks.push(t):e._pendingCallbacks=[t],r(e)},enqueueForceUpdate:function(e){var t=o(e,"forceUpdate");t&&(t._pendingForceUpdate=!0,r(t))},enqueueReplaceState:function(e,t){var n=o(e,"replaceState");n&&(n._pendingStateQueue=[t],n._pendingReplaceState=!0,r(n))},enqueueSetState:function(e,t){var n=o(e,"setState");if(n){var i=n._pendingStateQueue||(n._pendingStateQueue=[]);i.push(t),r(n)}},enqueueSetProps:function(e,t){var n=o(e,"setProps");if(n){p(n._isTopLevel);var i=n._pendingElement||n._currentElement,a=c({},i.props,t);n._pendingElement=u.cloneAndReplaceProps(i,a),r(n)}},enqueueReplaceProps:function(e,t){var n=o(e,"replaceProps");if(n){p(n._isTopLevel);var i=n._pendingElement||n._currentElement;n._pendingElement=u.cloneAndReplaceProps(i,t),r(n)}},enqueueElementInternal:function(e,t){e._pendingElement=t,r(e)}});t.exports=d},{133:133,150:150,27:27,39:39,55:55,65:65,66:66,85:85}],85:[function(e,t,n){"use strict";function r(){v(N.ReactReconcileTransaction&&E)}function o(){this.reinitializeTransaction(),this.dirtyComponentsLength=null,this.callbackQueue=c.getPooled(),this.reconcileTransaction=N.ReactReconcileTransaction.getPooled()}function i(e,t,n,o,i){r(),E.batchedUpdates(e,t,n,o,i)}function a(e,t){return e._mountOrder-t._mountOrder}function u(e){var t=e.dirtyComponentsLength;v(t===g.length),g.sort(a);for(var n=0;t>n;n++){var r=g[n],o=r._pendingCallbacks;if(r._pendingCallbacks=null,f.performUpdateIfNecessary(r,e.reconcileTransaction),o)for(var i=0;i<o.length;i++)e.callbackQueue.enqueue(o[i],r.getPublicInstance())}}function s(e){return r(),E.isBatchingUpdates?void g.push(e):void E.batchedUpdates(s,e)}function l(e,t){v(E.isBatchingUpdates),y.enqueue(e,t),C=!0}var c=e(6),p=e(28),d=(e(39),e(73)),f=e(79),h=e(101),m=e(27),v=e(133),g=(e(150),[]),y=c.getPooled(),C=!1,E=null,b={initialize:function(){this.dirtyComponentsLength=g.length},close:function(){this.dirtyComponentsLength!==g.length?(g.splice(0,this.dirtyComponentsLength),D()):g.length=0}},_={initialize:function(){this.callbackQueue.reset()},close:function(){this.callbackQueue.notifyAll()}},x=[b,_];m(o.prototype,h.Mixin,{getTransactionWrappers:function(){return x},destructor:function(){this.dirtyComponentsLength=null,c.release(this.callbackQueue),this.callbackQueue=null,N.ReactReconcileTransaction.release(this.reconcileTransaction),this.reconcileTransaction=null},perform:function(e,t,n){return h.Mixin.perform.call(this,this.reconcileTransaction.perform,this.reconcileTransaction,e,t,n)}}),p.addPoolingTo(o);var D=function(){for(;g.length||C;){if(g.length){var e=o.getPooled();e.perform(u,null,e),o.release(e)}if(C){C=!1;var t=y;y=c.getPooled(),t.notifyAll(),c.release(t)}}};D=d.measure("ReactUpdates","flushBatchedUpdates",D);var M={injectReconcileTransaction:function(e){v(e),N.ReactReconcileTransaction=e},injectBatchingStrategy:function(e){v(e),v("function"==typeof e.batchedUpdates),v("boolean"==typeof e.isBatchingUpdates),E=e}},N={ReactReconcileTransaction:null,batchedUpdates:i,enqueueUpdate:s,flushBatchedUpdates:D,injection:M,asap:l};t.exports=N},{101:101,133:133,150:150,27:27,28:28,39:39,6:6,73:73,79:79}],86:[function(e,t,n){"use strict";var r=e(10),o=r.injection.MUST_USE_ATTRIBUTE,i={Properties:{clipPath:o,cx:o,cy:o,d:o,dx:o,dy:o,fill:o,fillOpacity:o,fontFamily:o,fontSize:o,fx:o,fy:o,gradientTransform:o,gradientUnits:o,markerEnd:o,markerMid:o,markerStart:o,offset:o,opacity:o,patternContentUnits:o,patternUnits:o,points:o,preserveAspectRatio:o,r:o,rx:o,ry:o,spreadMethod:o,stopColor:o,stopOpacity:o,stroke:o,strokeDasharray:o,strokeLinecap:o,strokeOpacity:o,strokeWidth:o,textAnchor:o,transform:o,version:o,viewBox:o,x1:o,x2:o,x:o,y1:o,y2:o,y:o},DOMAttributeNames:{clipPath:"clip-path",fillOpacity:"fill-opacity",fontFamily:"font-family",fontSize:"font-size",gradientTransform:"gradientTransform",gradientUnits:"gradientUnits",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",patternContentUnits:"patternContentUnits",patternUnits:"patternUnits",preserveAspectRatio:"preserveAspectRatio",spreadMethod:"spreadMethod",stopColor:"stop-color",stopOpacity:"stop-opacity",strokeDasharray:"stroke-dasharray",strokeLinecap:"stroke-linecap",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",textAnchor:"text-anchor",viewBox:"viewBox"}};t.exports=i},{10:10}],87:[function(e,t,n){"use strict";function r(e){if("selectionStart"in e&&u.hasSelectionCapabilities(e))return{start:e.selectionStart,end:e.selectionEnd};if(window.getSelection){var t=window.getSelection();return{anchorNode:t.anchorNode,anchorOffset:t.anchorOffset,focusNode:t.focusNode,focusOffset:t.focusOffset}}if(document.selection){var n=document.selection.createRange();return{parentElement:n.parentElement(),text:n.text,top:n.boundingTop,left:n.boundingLeft}}}function o(e){if(y||null==m||m!==l())return null;var t=r(m);if(!g||!d(g,t)){g=t;var n=s.getPooled(h.select,v,e);return n.type="select",n.target=m,a.accumulateTwoPhaseDispatches(n),n}}var i=e(15),a=e(20),u=e(63),s=e(93),l=e(119),c=e(136),p=e(139),d=e(146),f=i.topLevelTypes,h={select:{phasedRegistrationNames:{bubbled:p({onSelect:null}),captured:p({onSelectCapture:null})},dependencies:[f.topBlur,f.topContextMenu,f.topFocus,f.topKeyDown,f.topMouseDown,f.topMouseUp,f.topSelectionChange]
        }},m=null,v=null,g=null,y=!1,C={eventTypes:h,extractEvents:function(e,t,n,r){switch(e){case f.topFocus:(c(t)||"true"===t.contentEditable)&&(m=t,v=n,g=null);break;case f.topBlur:m=null,v=null,g=null;break;case f.topMouseDown:y=!0;break;case f.topContextMenu:case f.topMouseUp:return y=!1,o(r);case f.topSelectionChange:case f.topKeyDown:case f.topKeyUp:return o(r)}}};t.exports=C},{119:119,136:136,139:139,146:146,15:15,20:20,63:63,93:93}],88:[function(e,t,n){"use strict";var r=Math.pow(2,53),o={createReactRootIndex:function(){return Math.ceil(Math.random()*r)}};t.exports=o},{}],89:[function(e,t,n){"use strict";var r=e(15),o=e(19),i=e(20),a=e(90),u=e(93),s=e(94),l=e(96),c=e(97),p=e(92),d=e(98),f=e(99),h=e(100),m=e(120),v=e(133),g=e(139),y=(e(150),r.topLevelTypes),C={blur:{phasedRegistrationNames:{bubbled:g({onBlur:!0}),captured:g({onBlurCapture:!0})}},click:{phasedRegistrationNames:{bubbled:g({onClick:!0}),captured:g({onClickCapture:!0})}},contextMenu:{phasedRegistrationNames:{bubbled:g({onContextMenu:!0}),captured:g({onContextMenuCapture:!0})}},copy:{phasedRegistrationNames:{bubbled:g({onCopy:!0}),captured:g({onCopyCapture:!0})}},cut:{phasedRegistrationNames:{bubbled:g({onCut:!0}),captured:g({onCutCapture:!0})}},doubleClick:{phasedRegistrationNames:{bubbled:g({onDoubleClick:!0}),captured:g({onDoubleClickCapture:!0})}},drag:{phasedRegistrationNames:{bubbled:g({onDrag:!0}),captured:g({onDragCapture:!0})}},dragEnd:{phasedRegistrationNames:{bubbled:g({onDragEnd:!0}),captured:g({onDragEndCapture:!0})}},dragEnter:{phasedRegistrationNames:{bubbled:g({onDragEnter:!0}),captured:g({onDragEnterCapture:!0})}},dragExit:{phasedRegistrationNames:{bubbled:g({onDragExit:!0}),captured:g({onDragExitCapture:!0})}},dragLeave:{phasedRegistrationNames:{bubbled:g({onDragLeave:!0}),captured:g({onDragLeaveCapture:!0})}},dragOver:{phasedRegistrationNames:{bubbled:g({onDragOver:!0}),captured:g({onDragOverCapture:!0})}},dragStart:{phasedRegistrationNames:{bubbled:g({onDragStart:!0}),captured:g({onDragStartCapture:!0})}},drop:{phasedRegistrationNames:{bubbled:g({onDrop:!0}),captured:g({onDropCapture:!0})}},focus:{phasedRegistrationNames:{bubbled:g({onFocus:!0}),captured:g({onFocusCapture:!0})}},input:{phasedRegistrationNames:{bubbled:g({onInput:!0}),captured:g({onInputCapture:!0})}},keyDown:{phasedRegistrationNames:{bubbled:g({onKeyDown:!0}),captured:g({onKeyDownCapture:!0})}},keyPress:{phasedRegistrationNames:{bubbled:g({onKeyPress:!0}),captured:g({onKeyPressCapture:!0})}},keyUp:{phasedRegistrationNames:{bubbled:g({onKeyUp:!0}),captured:g({onKeyUpCapture:!0})}},load:{phasedRegistrationNames:{bubbled:g({onLoad:!0}),captured:g({onLoadCapture:!0})}},error:{phasedRegistrationNames:{bubbled:g({onError:!0}),captured:g({onErrorCapture:!0})}},mouseDown:{phasedRegistrationNames:{bubbled:g({onMouseDown:!0}),captured:g({onMouseDownCapture:!0})}},mouseMove:{phasedRegistrationNames:{bubbled:g({onMouseMove:!0}),captured:g({onMouseMoveCapture:!0})}},mouseOut:{phasedRegistrationNames:{bubbled:g({onMouseOut:!0}),captured:g({onMouseOutCapture:!0})}},mouseOver:{phasedRegistrationNames:{bubbled:g({onMouseOver:!0}),captured:g({onMouseOverCapture:!0})}},mouseUp:{phasedRegistrationNames:{bubbled:g({onMouseUp:!0}),captured:g({onMouseUpCapture:!0})}},paste:{phasedRegistrationNames:{bubbled:g({onPaste:!0}),captured:g({onPasteCapture:!0})}},reset:{phasedRegistrationNames:{bubbled:g({onReset:!0}),captured:g({onResetCapture:!0})}},scroll:{phasedRegistrationNames:{bubbled:g({onScroll:!0}),captured:g({onScrollCapture:!0})}},submit:{phasedRegistrationNames:{bubbled:g({onSubmit:!0}),captured:g({onSubmitCapture:!0})}},touchCancel:{phasedRegistrationNames:{bubbled:g({onTouchCancel:!0}),captured:g({onTouchCancelCapture:!0})}},touchEnd:{phasedRegistrationNames:{bubbled:g({onTouchEnd:!0}),captured:g({onTouchEndCapture:!0})}},touchMove:{phasedRegistrationNames:{bubbled:g({onTouchMove:!0}),captured:g({onTouchMoveCapture:!0})}},touchStart:{phasedRegistrationNames:{bubbled:g({onTouchStart:!0}),captured:g({onTouchStartCapture:!0})}},wheel:{phasedRegistrationNames:{bubbled:g({onWheel:!0}),captured:g({onWheelCapture:!0})}}},E={topBlur:C.blur,topClick:C.click,topContextMenu:C.contextMenu,topCopy:C.copy,topCut:C.cut,topDoubleClick:C.doubleClick,topDrag:C.drag,topDragEnd:C.dragEnd,topDragEnter:C.dragEnter,topDragExit:C.dragExit,topDragLeave:C.dragLeave,topDragOver:C.dragOver,topDragStart:C.dragStart,topDrop:C.drop,topError:C.error,topFocus:C.focus,topInput:C.input,topKeyDown:C.keyDown,topKeyPress:C.keyPress,topKeyUp:C.keyUp,topLoad:C.load,topMouseDown:C.mouseDown,topMouseMove:C.mouseMove,topMouseOut:C.mouseOut,topMouseOver:C.mouseOver,topMouseUp:C.mouseUp,topPaste:C.paste,topReset:C.reset,topScroll:C.scroll,topSubmit:C.submit,topTouchCancel:C.touchCancel,topTouchEnd:C.touchEnd,topTouchMove:C.touchMove,topTouchStart:C.touchStart,topWheel:C.wheel};for(var b in E)E[b].dependencies=[b];var _={eventTypes:C,executeDispatch:function(e,t,n){var r=o.executeDispatch(e,t,n);r===!1&&(e.stopPropagation(),e.preventDefault())},extractEvents:function(e,t,n,r){var o=E[e];if(!o)return null;var g;switch(e){case y.topInput:case y.topLoad:case y.topError:case y.topReset:case y.topSubmit:g=u;break;case y.topKeyPress:if(0===m(r))return null;case y.topKeyDown:case y.topKeyUp:g=l;break;case y.topBlur:case y.topFocus:g=s;break;case y.topClick:if(2===r.button)return null;case y.topContextMenu:case y.topDoubleClick:case y.topMouseDown:case y.topMouseMove:case y.topMouseOut:case y.topMouseOver:case y.topMouseUp:g=c;break;case y.topDrag:case y.topDragEnd:case y.topDragEnter:case y.topDragExit:case y.topDragLeave:case y.topDragOver:case y.topDragStart:case y.topDrop:g=p;break;case y.topTouchCancel:case y.topTouchEnd:case y.topTouchMove:case y.topTouchStart:g=d;break;case y.topScroll:g=f;break;case y.topWheel:g=h;break;case y.topCopy:case y.topCut:case y.topPaste:g=a}v(g);var C=g.getPooled(o,n,r);return i.accumulateTwoPhaseDispatches(C),C}};t.exports=_},{100:100,120:120,133:133,139:139,15:15,150:150,19:19,20:20,90:90,92:92,93:93,94:94,96:96,97:97,98:98,99:99}],90:[function(e,t,n){"use strict";function r(e,t,n){o.call(this,e,t,n)}var o=e(93),i={clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}};o.augmentClass(r,i),t.exports=r},{93:93}],91:[function(e,t,n){"use strict";function r(e,t,n){o.call(this,e,t,n)}var o=e(93),i={data:null};o.augmentClass(r,i),t.exports=r},{93:93}],92:[function(e,t,n){"use strict";function r(e,t,n){o.call(this,e,t,n)}var o=e(97),i={dataTransfer:null};o.augmentClass(r,i),t.exports=r},{97:97}],93:[function(e,t,n){"use strict";function r(e,t,n){this.dispatchConfig=e,this.dispatchMarker=t,this.nativeEvent=n;var r=this.constructor.Interface;for(var o in r)if(r.hasOwnProperty(o)){var i=r[o];i?this[o]=i(n):this[o]=n[o]}var u=null!=n.defaultPrevented?n.defaultPrevented:n.returnValue===!1;u?this.isDefaultPrevented=a.thatReturnsTrue:this.isDefaultPrevented=a.thatReturnsFalse,this.isPropagationStopped=a.thatReturnsFalse}var o=e(28),i=e(27),a=e(112),u=e(123),s={type:null,target:u,currentTarget:a.thatReturnsNull,eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null};i(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e.preventDefault?e.preventDefault():e.returnValue=!1,this.isDefaultPrevented=a.thatReturnsTrue},stopPropagation:function(){var e=this.nativeEvent;e.stopPropagation?e.stopPropagation():e.cancelBubble=!0,this.isPropagationStopped=a.thatReturnsTrue},persist:function(){this.isPersistent=a.thatReturnsTrue},isPersistent:a.thatReturnsFalse,destructor:function(){var e=this.constructor.Interface;for(var t in e)this[t]=null;this.dispatchConfig=null,this.dispatchMarker=null,this.nativeEvent=null}}),r.Interface=s,r.augmentClass=function(e,t){var n=this,r=Object.create(n.prototype);i(r,e.prototype),e.prototype=r,e.prototype.constructor=e,e.Interface=i({},n.Interface,t),e.augmentClass=n.augmentClass,o.addPoolingTo(e,o.threeArgumentPooler)},o.addPoolingTo(r,o.threeArgumentPooler),t.exports=r},{112:112,123:123,27:27,28:28}],94:[function(e,t,n){"use strict";function r(e,t,n){o.call(this,e,t,n)}var o=e(99),i={relatedTarget:null};o.augmentClass(r,i),t.exports=r},{99:99}],95:[function(e,t,n){"use strict";function r(e,t,n){o.call(this,e,t,n)}var o=e(93),i={data:null};o.augmentClass(r,i),t.exports=r},{93:93}],96:[function(e,t,n){"use strict";function r(e,t,n){o.call(this,e,t,n)}var o=e(99),i=e(120),a=e(121),u=e(122),s={key:a,location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:u,charCode:function(e){return"keypress"===e.type?i(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?i(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}};o.augmentClass(r,s),t.exports=r},{120:120,121:121,122:122,99:99}],97:[function(e,t,n){"use strict";function r(e,t,n){o.call(this,e,t,n)}var o=e(99),i=e(102),a=e(122),u={screenX:null,screenY:null,clientX:null,clientY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:a,button:function(e){var t=e.button;return"which"in e?t:2===t?2:4===t?1:0},buttons:null,relatedTarget:function(e){return e.relatedTarget||(e.fromElement===e.srcElement?e.toElement:e.fromElement)},pageX:function(e){return"pageX"in e?e.pageX:e.clientX+i.currentScrollLeft},pageY:function(e){return"pageY"in e?e.pageY:e.clientY+i.currentScrollTop}};o.augmentClass(r,u),t.exports=r},{102:102,122:122,99:99}],98:[function(e,t,n){"use strict";function r(e,t,n){o.call(this,e,t,n)}var o=e(99),i=e(122),a={touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:i};o.augmentClass(r,a),t.exports=r},{122:122,99:99}],99:[function(e,t,n){"use strict";function r(e,t,n){o.call(this,e,t,n)}var o=e(93),i=e(123),a={view:function(e){if(e.view)return e.view;var t=i(e);if(null!=t&&t.window===t)return t;var n=t.ownerDocument;return n?n.defaultView||n.parentWindow:window},detail:function(e){return e.detail||0}};o.augmentClass(r,a),t.exports=r},{123:123,93:93}],100:[function(e,t,n){"use strict";function r(e,t,n){o.call(this,e,t,n)}var o=e(97),i={deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:null,deltaMode:null};o.augmentClass(r,i),t.exports=r},{97:97}],101:[function(e,t,n){"use strict";var r=e(133),o={reinitializeTransaction:function(){this.transactionWrappers=this.getTransactionWrappers(),this.wrapperInitData?this.wrapperInitData.length=0:this.wrapperInitData=[],this._isInTransaction=!1},_isInTransaction:!1,getTransactionWrappers:null,isInTransaction:function(){return!!this._isInTransaction},perform:function(e,t,n,o,i,a,u,s){r(!this.isInTransaction());var l,c;try{this._isInTransaction=!0,l=!0,this.initializeAll(0),c=e.call(t,n,o,i,a,u,s),l=!1}finally{try{if(l)try{this.closeAll(0)}catch(p){}else this.closeAll(0)}finally{this._isInTransaction=!1}}return c},initializeAll:function(e){for(var t=this.transactionWrappers,n=e;n<t.length;n++){var r=t[n];try{this.wrapperInitData[n]=i.OBSERVED_ERROR,this.wrapperInitData[n]=r.initialize?r.initialize.call(this):null}finally{if(this.wrapperInitData[n]===i.OBSERVED_ERROR)try{this.initializeAll(n+1)}catch(o){}}}},closeAll:function(e){r(this.isInTransaction());for(var t=this.transactionWrappers,n=e;n<t.length;n++){var o,a=t[n],u=this.wrapperInitData[n];try{o=!0,u!==i.OBSERVED_ERROR&&a.close&&a.close.call(this,u),o=!1}finally{if(o)try{this.closeAll(n+1)}catch(s){}}}this.wrapperInitData.length=0}},i={Mixin:o,OBSERVED_ERROR:{}};t.exports=i},{133:133}],102:[function(e,t,n){"use strict";var r={currentScrollLeft:0,currentScrollTop:0,refreshScrollValues:function(e){r.currentScrollLeft=e.x,r.currentScrollTop=e.y}};t.exports=r},{}],103:[function(e,t,n){"use strict";function r(e,t){if(o(null!=t),null==e)return t;var n=Array.isArray(e),r=Array.isArray(t);return n&&r?(e.push.apply(e,t),e):n?(e.push(t),e):r?[e].concat(t):[e,t]}var o=e(133);t.exports=r},{133:133}],104:[function(e,t,n){"use strict";function r(e){for(var t=1,n=0,r=0;r<e.length;r++)t=(t+e.charCodeAt(r))%o,n=(n+t)%o;return t|n<<16}var o=65521;t.exports=r},{}],105:[function(e,t,n){function r(e){return e.replace(o,function(e,t){return t.toUpperCase()})}var o=/-(.)/g;t.exports=r},{}],106:[function(e,t,n){"use strict";function r(e){return o(e.replace(i,"ms-"))}var o=e(105),i=/^-ms-/;t.exports=r},{105:105}],107:[function(e,t,n){function r(e,t){return e&&t?e===t?!0:o(e)?!1:o(t)?r(e,t.parentNode):e.contains?e.contains(t):e.compareDocumentPosition?!!(16&e.compareDocumentPosition(t)):!1:!1}var o=e(137);t.exports=r},{137:137}],108:[function(e,t,n){function r(e){return!!e&&("object"==typeof e||"function"==typeof e)&&"length"in e&&!("setInterval"in e)&&"number"!=typeof e.nodeType&&(Array.isArray(e)||"callee"in e||"item"in e)}function o(e){return r(e)?Array.isArray(e)?e.slice():i(e):[e]}var i=e(148);t.exports=o},{148:148}],109:[function(e,t,n){"use strict";function r(e){var t=i.createFactory(e),n=o.createClass({tagName:e.toUpperCase(),displayName:"ReactFullPageComponent"+e,componentWillUnmount:function(){a(!1)},render:function(){return t(this.props)}});return n}var o=e(33),i=e(55),a=e(133);t.exports=r},{133:133,33:33,55:55}],110:[function(e,t,n){function r(e){var t=e.match(c);return t&&t[1].toLowerCase()}function o(e,t){var n=l;s(!!l);var o=r(e),i=o&&u(o);if(i){n.innerHTML=i[1]+e+i[2];for(var c=i[0];c--;)n=n.lastChild}else n.innerHTML=e;var p=n.getElementsByTagName("script");p.length&&(s(t),a(p).forEach(t));for(var d=a(n.childNodes);n.lastChild;)n.removeChild(n.lastChild);return d}var i=e(21),a=e(108),u=e(125),s=e(133),l=i.canUseDOM?document.createElement("div"):null,c=/^\s*<(\w+)/;t.exports=o},{108:108,125:125,133:133,21:21}],111:[function(e,t,n){"use strict";function r(e,t){var n=null==t||"boolean"==typeof t||""===t;if(n)return"";var r=isNaN(t);return r||0===t||i.hasOwnProperty(e)&&i[e]?""+t:("string"==typeof t&&(t=t.trim()),t+"px")}var o=e(4),i=o.isUnitlessNumber;t.exports=r},{4:4}],112:[function(e,t,n){function r(e){return function(){return e}}function o(){}o.thatReturns=r,o.thatReturnsFalse=r(!1),o.thatReturnsTrue=r(!0),o.thatReturnsNull=r(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},t.exports=o},{}],113:[function(e,t,n){"use strict";var r={};t.exports=r},{}],114:[function(e,t,n){"use strict";function r(e){return i[e]}function o(e){return(""+e).replace(a,r)}var i={"&":"&amp;",">":"&gt;","<":"&lt;",'"':"&quot;","'":"&#x27;"},a=/[&><"']/g;t.exports=o},{}],115:[function(e,t,n){"use strict";function r(e){return null==e?null:u(e)?e:o.has(e)?i.getNodeFromInstance(e):(a(null==e.render||"function"!=typeof e.render),void a(!1))}{var o=(e(39),e(65)),i=e(68),a=e(133),u=e(135);e(150)}t.exports=r},{133:133,135:135,150:150,39:39,65:65,68:68}],116:[function(e,t,n){"use strict";function r(e,t,n){var r=e,o=!r.hasOwnProperty(n);o&&null!=t&&(r[n]=t)}function o(e){if(null==e)return e;var t={};return i(e,r,t),t}{var i=e(149);e(150)}t.exports=o},{149:149,150:150}],117:[function(e,t,n){"use strict";function r(e){try{e.focus()}catch(t){}}t.exports=r},{}],118:[function(e,t,n){"use strict";var r=function(e,t,n){Array.isArray(e)?e.forEach(t,n):e&&t.call(n,e)};t.exports=r},{}],119:[function(e,t,n){function r(){try{return document.activeElement||document.body}catch(e){return document.body}}t.exports=r},{}],120:[function(e,t,n){"use strict";function r(e){var t,n=e.keyCode;return"charCode"in e?(t=e.charCode,0===t&&13===n&&(t=13)):t=n,t>=32||13===t?t:0}t.exports=r},{}],121:[function(e,t,n){"use strict";function r(e){if(e.key){var t=i[e.key]||e.key;if("Unidentified"!==t)return t}if("keypress"===e.type){var n=o(e);return 13===n?"Enter":String.fromCharCode(n)}return"keydown"===e.type||"keyup"===e.type?a[e.keyCode]||"Unidentified":""}var o=e(120),i={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},a={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"};t.exports=r},{120:120}],122:[function(e,t,n){"use strict";function r(e){var t=this,n=t.nativeEvent;if(n.getModifierState)return n.getModifierState(e);var r=i[e];return r?!!n[r]:!1}function o(e){return r}var i={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};t.exports=o},{}],123:[function(e,t,n){"use strict";function r(e){var t=e.target||e.srcElement||window;return 3===t.nodeType?t.parentNode:t}t.exports=r},{}],124:[function(e,t,n){"use strict";function r(e){var t=e&&(o&&e[o]||e[i]);return"function"==typeof t?t:void 0}var o="function"==typeof Symbol&&Symbol.iterator,i="@@iterator";t.exports=r},{}],125:[function(e,t,n){function r(e){return i(!!a),d.hasOwnProperty(e)||(e="*"),u.hasOwnProperty(e)||("*"===e?a.innerHTML="<link />":a.innerHTML="<"+e+"></"+e+">",u[e]=!a.firstChild),u[e]?d[e]:null}var o=e(21),i=e(133),a=o.canUseDOM?document.createElement("div"):null,u={circle:!0,clipPath:!0,defs:!0,ellipse:!0,g:!0,line:!0,linearGradient:!0,path:!0,polygon:!0,polyline:!0,radialGradient:!0,rect:!0,stop:!0,text:!0},s=[1,'<select multiple="true">',"</select>"],l=[1,"<table>","</table>"],c=[3,"<table><tbody><tr>","</tr></tbody></table>"],p=[1,"<svg>","</svg>"],d={"*":[1,"?<div>","</div>"],area:[1,"<map>","</map>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],legend:[1,"<fieldset>","</fieldset>"],param:[1,"<object>","</object>"],tr:[2,"<table><tbody>","</tbody></table>"],optgroup:s,option:s,caption:l,colgroup:l,tbody:l,tfoot:l,thead:l,td:c,th:c,circle:p,clipPath:p,defs:p,ellipse:p,g:p,line:p,linearGradient:p,path:p,polygon:p,polyline:p,radialGradient:p,rect:p,stop:p,text:p};t.exports=r},{133:133,21:21}],126:[function(e,t,n){"use strict";function r(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function o(e){for(;e;){if(e.nextSibling)return e.nextSibling;e=e.parentNode}}function i(e,t){for(var n=r(e),i=0,a=0;n;){if(3===n.nodeType){if(a=i+n.textContent.length,t>=i&&a>=t)return{node:n,offset:t-i};i=a}n=r(o(n))}}t.exports=i},{}],127:[function(e,t,n){"use strict";function r(e){return e?e.nodeType===o?e.documentElement:e.firstChild:null}var o=9;t.exports=r},{}],128:[function(e,t,n){"use strict";function r(){return!i&&o.canUseDOM&&(i="textContent"in document.documentElement?"textContent":"innerText"),i}var o=e(21),i=null;t.exports=r},{21:21}],129:[function(e,t,n){"use strict";function r(e){return e===window?{x:window.pageXOffset||document.documentElement.scrollLeft,y:window.pageYOffset||document.documentElement.scrollTop}:{x:e.scrollLeft,y:e.scrollTop}}t.exports=r},{}],130:[function(e,t,n){function r(e){return e.replace(o,"-$1").toLowerCase()}var o=/([A-Z])/g;t.exports=r},{}],131:[function(e,t,n){"use strict";function r(e){return o(e).replace(i,"-ms-")}var o=e(130),i=/^ms-/;t.exports=r},{130:130}],132:[function(e,t,n){"use strict";function r(e){return"function"==typeof e&&"undefined"!=typeof e.prototype&&"function"==typeof e.prototype.mountComponent&&"function"==typeof e.prototype.receiveComponent}function o(e,t){var n;if((null===e||e===!1)&&(e=a.emptyElement),"object"==typeof e){var o=e;n=t===o.type&&"string"==typeof o.type?u.createInternalComponent(o):r(o.type)?new o.type(o):new c}else"string"==typeof e||"number"==typeof e?n=u.createInstanceForText(e):l(!1);return n.construct(e),n._mountIndex=0,n._mountImage=null,n}var i=e(37),a=e(57),u=e(71),s=e(27),l=e(133),c=(e(150),function(){});s(c.prototype,i.Mixin,{_instantiateReactComponent:o}),t.exports=o},{133:133,150:150,27:27,37:37,57:57,71:71}],133:[function(e,t,n){"use strict";var r=function(e,t,n,r,o,i,a,u){if(!e){var s;if(void 0===t)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,r,o,i,a,u],c=0;s=new Error("Invariant Violation: "+t.replace(/%s/g,function(){return l[c++]}))}throw s.framesToPop=1,s}};t.exports=r},{}],134:[function(e,t,n){"use strict";function r(e,t){if(!i.canUseDOM||t&&!("addEventListener"in document))return!1;var n="on"+e,r=n in document;if(!r){var a=document.createElement("div");a.setAttribute(n,"return;"),r="function"==typeof a[n]}return!r&&o&&"wheel"===e&&(r=document.implementation.hasFeature("Events.wheel","3.0")),r}var o,i=e(21);i.canUseDOM&&(o=document.implementation&&document.implementation.hasFeature&&document.implementation.hasFeature("","")!==!0),t.exports=r},{21:21}],135:[function(e,t,n){function r(e){return!(!e||!("function"==typeof Node?e instanceof Node:"object"==typeof e&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName))}t.exports=r},{}],136:[function(e,t,n){"use strict";function r(e){return e&&("INPUT"===e.nodeName&&o[e.type]||"TEXTAREA"===e.nodeName)}var o={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};t.exports=r},{}],137:[function(e,t,n){function r(e){return o(e)&&3==e.nodeType}var o=e(135);t.exports=r},{135:135}],138:[function(e,t,n){"use strict";var r=e(133),o=function(e){var t,n={};r(e instanceof Object&&!Array.isArray(e));for(t in e)e.hasOwnProperty(t)&&(n[t]=t);return n};t.exports=o},{133:133}],139:[function(e,t,n){var r=function(e){var t;for(t in e)if(e.hasOwnProperty(t))return t;return null};t.exports=r},{}],140:[function(e,t,n){"use strict";function r(e,t,n){if(!e)return null;var r={};for(var i in e)o.call(e,i)&&(r[i]=t.call(n,e[i],i,e));return r}var o=Object.prototype.hasOwnProperty;t.exports=r},{}],141:[function(e,t,n){"use strict";function r(e){var t={};return function(n){return t.hasOwnProperty(n)||(t[n]=e.call(this,n)),t[n]}}t.exports=r},{}],142:[function(e,t,n){"use strict";function r(e){return i(o.isValidElement(e)),e}var o=e(55),i=e(133);t.exports=r},{133:133,55:55}],143:[function(e,t,n){"use strict";function r(e){return'"'+o(e)+'"'}var o=e(114);t.exports=r},{114:114}],144:[function(e,t,n){"use strict";var r=e(21),o=/^[ \r\n\t\f]/,i=/<(!--|link|noscript|meta|script|style)[ \r\n\t\f\/>]/,a=function(e,t){e.innerHTML=t};if("undefined"!=typeof MSApp&&MSApp.execUnsafeLocalFunction&&(a=function(e,t){MSApp.execUnsafeLocalFunction(function(){e.innerHTML=t})}),r.canUseDOM){var u=document.createElement("div");u.innerHTML=" ",""===u.innerHTML&&(a=function(e,t){if(e.parentNode&&e.parentNode.replaceChild(e,e),o.test(t)||"<"===t[0]&&i.test(t)){e.innerHTML="\ufeff"+t;var n=e.firstChild;1===n.data.length?e.removeChild(n):n.deleteData(0,1)}else e.innerHTML=t})}t.exports=a},{21:21}],145:[function(e,t,n){"use strict";var r=e(21),o=e(114),i=e(144),a=function(e,t){e.textContent=t};r.canUseDOM&&("textContent"in document.documentElement||(a=function(e,t){i(e,o(t))})),t.exports=a},{114:114,144:144,21:21}],146:[function(e,t,n){"use strict";function r(e,t){if(e===t)return!0;var n;for(n in e)if(e.hasOwnProperty(n)&&(!t.hasOwnProperty(n)||e[n]!==t[n]))return!1;for(n in t)if(t.hasOwnProperty(n)&&!e.hasOwnProperty(n))return!1;return!0}t.exports=r},{}],147:[function(e,t,n){"use strict";function r(e,t){if(null!=e&&null!=t){var n=typeof e,r=typeof t;if("string"===n||"number"===n)return"string"===r||"number"===r;if("object"===r&&e.type===t.type&&e.key===t.key){var o=e._owner===t._owner;return o}}return!1}e(150);t.exports=r},{150:150}],148:[function(e,t,n){function r(e){var t=e.length;if(o(!Array.isArray(e)&&("object"==typeof e||"function"==typeof e)),o("number"==typeof t),o(0===t||t-1 in e),e.hasOwnProperty)try{return Array.prototype.slice.call(e)}catch(n){}for(var r=Array(t),i=0;t>i;i++)r[i]=e[i];return r}var o=e(133);t.exports=r},{133:133}],149:[function(e,t,n){"use strict";function r(e){return v[e]}function o(e,t){return e&&null!=e.key?a(e.key):t.toString(36)}function i(e){return(""+e).replace(g,r)}function a(e){return"$"+i(e)}function u(e,t,n,r,i){var s=typeof e;if(("undefined"===s||"boolean"===s)&&(e=null),null===e||"string"===s||"number"===s||l.isValidElement(e))return r(i,e,""===t?h+o(e,0):t,n),1;var p,v,g,y=0;if(Array.isArray(e))for(var C=0;C<e.length;C++)p=e[C],v=(""!==t?t+m:h)+o(p,C),g=n+y,y+=u(p,v,g,r,i);else{var E=d(e);if(E){var b,_=E.call(e);if(E!==e.entries)for(var x=0;!(b=_.next()).done;)p=b.value,v=(""!==t?t+m:h)+o(p,x++),g=n+y,y+=u(p,v,g,r,i);else for(;!(b=_.next()).done;){var D=b.value;D&&(p=D[1],v=(""!==t?t+m:h)+a(D[0])+m+o(p,0),g=n+y,y+=u(p,v,g,r,i))}}else if("object"===s){f(1!==e.nodeType);var M=c.extract(e);for(var N in M)M.hasOwnProperty(N)&&(p=M[N],v=(""!==t?t+m:h)+a(N)+m+o(p,0),g=n+y,y+=u(p,v,g,r,i))}}return y}function s(e,t,n){return null==e?0:u(e,"",0,t,n)}var l=e(55),c=e(61),p=e(64),d=e(124),f=e(133),h=(e(150),p.SEPARATOR),m=":",v={"=":"=0",".":"=1",":":"=2"},g=/[=.:]/g;t.exports=s},{124:124,133:133,150:150,55:55,61:61,64:64}],150:[function(e,t,n){"use strict";var r=e(112),o=r;t.exports=o},{112:112}]},{},[1])(1)});/**
 * JSXTransformer v0.13.3
 */
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.JSXTransformer = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
        /**
         * Copyright 2013-2015, Facebook, Inc.
         * All rights reserved.
         *
         * This source code is licensed under the BSD-style license found in the
         * LICENSE file in the root directory of this source tree. An additional grant
         * of patent rights can be found in the PATENTS file in the same directory.
         */
        /* jshint browser: true */
        /* jslint evil: true */
        /*eslint-disable no-eval */
        /*eslint-disable block-scoped-var */

        'use strict';

        var ReactTools = _dereq_('../main');
        var inlineSourceMap = _dereq_('./inline-source-map');

        var headEl;
        var dummyAnchor;
        var inlineScriptCount = 0;

// The source-map library relies on Object.defineProperty, but IE8 doesn't
// support it fully even with es5-sham. Indeed, es5-sham's defineProperty
// throws when Object.prototype.__defineGetter__ is missing, so we skip building
// the source map in that case.
        var supportsAccessors = Object.prototype.hasOwnProperty('__defineGetter__');

        /**
         * Run provided code through jstransform.
         *
         * @param {string} source Original source code
         * @param {object?} options Options to pass to jstransform
         * @return {object} object as returned from jstransform
         */
        function transformReact(source, options) {
            options = options || {};

            // Force the sourcemaps option manually. We don't want to use it if it will
            // break (see above note about supportsAccessors). We'll only override the
            // value here if sourceMap was specified and is truthy. This guarantees that
            // we won't override any user intent (since this method is exposed publicly).
            if (options.sourceMap) {
                options.sourceMap = supportsAccessors;
            }

            // Otherwise just pass all options straight through to react-tools.
            return ReactTools.transformWithDetails(source, options);
        }

        /**
         * Eval provided source after transforming it.
         *
         * @param {string} source Original source code
         * @param {object?} options Options to pass to jstransform
         */
        function exec(source, options) {
            return eval(transformReact(source, options).code);
        }

        /**
         * This method returns a nicely formated line of code pointing to the exact
         * location of the error `e`. The line is limited in size so big lines of code
         * are also shown in a readable way.
         *
         * Example:
         * ... x', overflow:'scroll'}} id={} onScroll={this.scroll} class=" ...
         * ^
         *
         * @param {string} code The full string of code
         * @param {Error} e The error being thrown
         * @return {string} formatted message
         * @internal
         */
        function createSourceCodeErrorMessage(code, e) {
            var sourceLines = code.split('\n');
            // e.lineNumber is non-standard so we can't depend on its availability. If
            // we're in a browser where it isn't supported, don't even bother trying to
            // format anything. We may also hit a case where the line number is reported
            // incorrectly and is outside the bounds of the actual code. Handle that too.
            if (!e.lineNumber || e.lineNumber > sourceLines.length) {
                return '';
            }
            var erroneousLine = sourceLines[e.lineNumber - 1];

            // Removes any leading indenting spaces and gets the number of
            // chars indenting the `erroneousLine`
            var indentation = 0;
            erroneousLine = erroneousLine.replace(/^\s+/, function(leadingSpaces) {
                indentation = leadingSpaces.length;
                return '';
            });

            // Defines the number of characters that are going to show
            // before and after the erroneous code
            var LIMIT = 30;
            var errorColumn = e.column - indentation;

            if (errorColumn > LIMIT) {
                erroneousLine = '... ' + erroneousLine.slice(errorColumn - LIMIT);
                errorColumn = 4 + LIMIT;
            }
            if (erroneousLine.length - errorColumn > LIMIT) {
                erroneousLine = erroneousLine.slice(0, errorColumn + LIMIT) + ' ...';
            }
            var message = '\n\n' + erroneousLine + '\n';
            message += new Array(errorColumn - 1).join(' ') + '^';
            return message;
        }

        /**
         * Actually transform the code.
         *
         * @param {string} code
         * @param {string?} url
         * @param {object?} options
         * @return {string} The transformed code.
         * @internal
         */
        function transformCode(code, url, options) {
            try {
                var transformed = transformReact(code, options);
            } catch(e) {
                e.message += '\n    at ';
                if (url) {
                    if ('fileName' in e) {
                        // We set `fileName` if it's supported by this error object and
                        // a `url` was provided.
                        // The error will correctly point to `url` in Firefox.
                        e.fileName = url;
                    }
                    e.message += url + ':' + e.lineNumber + ':' + e.columnNumber;
                } else {
                    e.message += location.href;
                }
                e.message += createSourceCodeErrorMessage(code, e);
                throw e;
            }

            if (!transformed.sourceMap) {
                return transformed.code;
            }

            var source;
            if (url == null) {
                source = 'Inline JSX script';
                inlineScriptCount++;
                if (inlineScriptCount > 1) {
                    source += ' (' + inlineScriptCount + ')';
                }
            } else if (dummyAnchor) {
                // Firefox has problems when the sourcemap source is a proper URL with a
                // protocol and hostname, so use the pathname. We could use just the
                // filename, but hopefully using the full path will prevent potential
                // issues where the same filename exists in multiple directories.
                dummyAnchor.href = url;
                source = dummyAnchor.pathname.substr(1);
            }

            return (
                transformed.code +
                '\n' +
                inlineSourceMap(transformed.sourceMap, code, source)
            );
        }


        /**
         * Appends a script element at the end of the <head> with the content of code,
         * after transforming it.
         *
         * @param {string} code The original source code
         * @param {string?} url Where the code came from. null if inline
         * @param {object?} options Options to pass to jstransform
         * @internal
         */
        function run(code, url, options) {
            var scriptEl = document.createElement('script');
            scriptEl.text = transformCode(code, url, options);
            headEl.appendChild(scriptEl);
        }

        /**
         * Load script from the provided url and pass the content to the callback.
         *
         * @param {string} url The location of the script src
         * @param {function} callback Function to call with the content of url
         * @internal
         */
        function load(url, successCallback, errorCallback) {
            var xhr;
            xhr = window.ActiveXObject ? new window.ActiveXObject('Microsoft.XMLHTTP')
                : new XMLHttpRequest();

            // async, however scripts will be executed in the order they are in the
            // DOM to mirror normal script loading.
            xhr.open('GET', url, true);
            if ('overrideMimeType' in xhr) {
                xhr.overrideMimeType('text/plain');
            }
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                    if (xhr.status === 0 || xhr.status === 200) {
                        successCallback(xhr.responseText);
                    } else {
                        errorCallback();
                        throw new Error('Could not load ' + url);
                    }
                }
            };
            return xhr.send(null);
        }

        /**
         * Loop over provided script tags and get the content, via innerHTML if an
         * inline script, or by using XHR. Transforms are applied if needed. The scripts
         * are executed in the order they are found on the page.
         *
         * @param {array} scripts The <script> elements to load and run.
         * @internal
         */
        function loadScripts(scripts) {
            var result = [];
            var count = scripts.length;

            function check() {
                var script, i;

                for (i = 0; i < count; i++) {
                    script = result[i];

                    if (script.loaded && !script.executed) {
                        script.executed = true;
                        run(script.content, script.url, script.options);
                    } else if (!script.loaded && !script.error && !script.async) {
                        break;
                    }
                }
            }

            scripts.forEach(function(script, i) {
                var options = {
                    sourceMap: true
                };
                if (/;harmony=true(;|$)/.test(script.type)) {
                    options.harmony = true;
                }
                if (/;stripTypes=true(;|$)/.test(script.type)) {
                    options.stripTypes = true;
                }

                // script.async is always true for non-javascript script tags
                var async = script.hasAttribute('async');

                if (script.src) {
                    result[i] = {
                        async: async,
                        error: false,
                        executed: false,
                        content: null,
                        loaded: false,
                        url: script.src,
                        options: options
                    };

                    load(script.src, function(content) {
                        result[i].loaded = true;
                        result[i].content = content;
                        check();
                    }, function() {
                        result[i].error = true;
                        check();
                    });
                } else {
                    result[i] = {
                        async: async,
                        error: false,
                        executed: false,
                        content: script.innerHTML,
                        loaded: true,
                        url: null,
                        options: options
                    };
                }
            });

            check();
        }

        /**
         * Find and run all script tags with type="text/jsx".
         *
         * @internal
         */
        function runScripts() {
            var scripts = document.getElementsByTagName('script');

            // Array.prototype.slice cannot be used on NodeList on IE8
            var jsxScripts = [];
            for (var i = 0; i < scripts.length; i++) {
                if (/^text\/jsx(;|$)/.test(scripts.item(i).type)) {
                    jsxScripts.push(scripts.item(i));
                }
            }

            if (jsxScripts.length < 1) {
                return;
            }

            console.warn(
                'You are using the in-browser JSX transformer. Be sure to precompile ' +
                'your JSX for production - ' +
                'http://facebook.github.io/react/docs/tooling-integration.html#jsx'
            );

            loadScripts(jsxScripts);
        }

// Listen for load event if we're in a browser and then kick off finding and
// running of scripts.
        if (typeof window !== 'undefined' && window !== null) {
            headEl = document.getElementsByTagName('head')[0];
            dummyAnchor = document.createElement('a');

            if (window.addEventListener) {
                window.addEventListener('DOMContentLoaded', runScripts, false);
            } else {
                window.attachEvent('onload', runScripts);
            }
        }

        module.exports = {
            transform: transformReact,
            exec: exec
        };

    },{"../main":2,"./inline-source-map":41}],2:[function(_dereq_,module,exports){
        /**
         * Copyright 2013-2015, Facebook, Inc.
         * All rights reserved.
         *
         * This source code is licensed under the BSD-style license found in the
         * LICENSE file in the root directory of this source tree. An additional grant
         * of patent rights can be found in the PATENTS file in the same directory.
         */

        'use strict';
        /*eslint-disable no-undef*/
        var visitors = _dereq_('./vendor/fbtransform/visitors');
        var transform = _dereq_('jstransform').transform;
        var typesSyntax = _dereq_('jstransform/visitors/type-syntax');
        var inlineSourceMap = _dereq_('./vendor/inline-source-map');

        module.exports = {
            transform: function(input, options) {
                options = processOptions(options);
                var output = innerTransform(input, options);
                var result = output.code;
                if (options.sourceMap) {
                    var map = inlineSourceMap(
                        output.sourceMap,
                        input,
                        options.filename
                    );
                    result += '\n' + map;
                }
                return result;
            },
            transformWithDetails: function(input, options) {
                options = processOptions(options);
                var output = innerTransform(input, options);
                var result = {};
                result.code = output.code;
                if (options.sourceMap) {
                    result.sourceMap = output.sourceMap.toJSON();
                }
                if (options.filename) {
                    result.sourceMap.sources = [options.filename];
                }
                return result;
            }
        };

        /**
         * Only copy the values that we need. We'll do some preprocessing to account for
         * converting command line flags to options that jstransform can actually use.
         */
        function processOptions(opts) {
            opts = opts || {};
            var options = {};

            options.harmony = opts.harmony;
            options.stripTypes = opts.stripTypes;
            options.sourceMap = opts.sourceMap;
            options.filename = opts.sourceFilename;

            if (opts.es6module) {
                options.sourceType = 'module';
            }
            if (opts.nonStrictEs6module) {
                options.sourceType = 'nonStrictModule';
            }

            // Instead of doing any fancy validation, only look for 'es3'. If we have
            // that, then use it. Otherwise use 'es5'.
            options.es3 = opts.target === 'es3';
            options.es5 = !options.es3;

            return options;
        }

        function innerTransform(input, options) {
            var visitorSets = ['react'];
            if (options.harmony) {
                visitorSets.push('harmony');
            }

            if (options.es3) {
                visitorSets.push('es3');
            }

            if (options.stripTypes) {
                // Stripping types needs to happen before the other transforms
                // unfortunately, due to bad interactions. For example,
                // es6-rest-param-visitors conflict with stripping rest param type
                // annotation
                input = transform(typesSyntax.visitorList, input, options).code;
            }

            var visitorList = visitors.getVisitorsBySet(visitorSets);
            return transform(visitorList, input, options);
        }

    },{"./vendor/fbtransform/visitors":40,"./vendor/inline-source-map":41,"jstransform":22,"jstransform/visitors/type-syntax":36}],3:[function(_dereq_,module,exports){
        /*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */

        var base64 = _dereq_('base64-js')
        var ieee754 = _dereq_('ieee754')
        var isArray = _dereq_('is-array')

        exports.Buffer = Buffer
        exports.SlowBuffer = SlowBuffer
        exports.INSPECT_MAX_BYTES = 50
        Buffer.poolSize = 8192 // not used by this implementation

        var kMaxLength = 0x3fffffff
        var rootParent = {}

        /**
         * If `Buffer.TYPED_ARRAY_SUPPORT`:
         *   === true    Use Uint8Array implementation (fastest)
         *   === false   Use Object implementation (most compatible, even IE6)
         *
         * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
         * Opera 11.6+, iOS 4.2+.
         *
         * Note:
         *
         * - Implementation must support adding new properties to `Uint8Array` instances.
         *   Firefox 4-29 lacked support, fixed in Firefox 30+.
         *   See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
         *
         *  - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
         *
         *  - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
         *    incorrect length in some situations.
         *
         * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they will
         * get the Object implementation, which is slower but will work correctly.
         */
        Buffer.TYPED_ARRAY_SUPPORT = (function () {
            try {
                var buf = new ArrayBuffer(0)
                var arr = new Uint8Array(buf)
                arr.foo = function () { return 42 }
                return arr.foo() === 42 && // typed array instances can be augmented
                    typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
                    new Uint8Array(1).subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
            } catch (e) {
                return false
            }
        })()

        /**
         * Class: Buffer
         * =============
         *
         * The Buffer constructor returns instances of `Uint8Array` that are augmented
         * with function properties for all the node `Buffer` API functions. We use
         * `Uint8Array` so that square bracket notation works as expected -- it returns
         * a single octet.
         *
         * By augmenting the instances, we can avoid modifying the `Uint8Array`
         * prototype.
         */
        function Buffer (subject, encoding) {
            var self = this
            if (!(self instanceof Buffer)) return new Buffer(subject, encoding)

            var type = typeof subject
            var length

            if (type === 'number') {
                length = +subject
            } else if (type === 'string') {
                length = Buffer.byteLength(subject, encoding)
            } else if (type === 'object' && subject !== null) {
                // assume object is array-like
                if (subject.type === 'Buffer' && isArray(subject.data)) subject = subject.data
                length = +subject.length
            } else {
                throw new TypeError('must start with number, buffer, array or string')
            }

            if (length > kMaxLength) {
                throw new RangeError('Attempt to allocate Buffer larger than maximum size: 0x' +
                    kMaxLength.toString(16) + ' bytes')
            }

            if (length < 0) length = 0
            else length >>>= 0 // coerce to uint32

            if (Buffer.TYPED_ARRAY_SUPPORT) {
                // Preferred: Return an augmented `Uint8Array` instance for best performance
                self = Buffer._augment(new Uint8Array(length)) // eslint-disable-line consistent-this
            } else {
                // Fallback: Return THIS instance of Buffer (created by `new`)
                self.length = length
                self._isBuffer = true
            }

            var i
            if (Buffer.TYPED_ARRAY_SUPPORT && typeof subject.byteLength === 'number') {
                // Speed optimization -- use set if we're copying from a typed array
                self._set(subject)
            } else if (isArrayish(subject)) {
                // Treat array-ish objects as a byte array
                if (Buffer.isBuffer(subject)) {
                    for (i = 0; i < length; i++) {
                        self[i] = subject.readUInt8(i)
                    }
                } else {
                    for (i = 0; i < length; i++) {
                        self[i] = ((subject[i] % 256) + 256) % 256
                    }
                }
            } else if (type === 'string') {
                self.write(subject, 0, encoding)
            } else if (type === 'number' && !Buffer.TYPED_ARRAY_SUPPORT) {
                for (i = 0; i < length; i++) {
                    self[i] = 0
                }
            }

            if (length > 0 && length <= Buffer.poolSize) self.parent = rootParent

            return self
        }

        function SlowBuffer (subject, encoding) {
            if (!(this instanceof SlowBuffer)) return new SlowBuffer(subject, encoding)

            var buf = new Buffer(subject, encoding)
            delete buf.parent
            return buf
        }

        Buffer.isBuffer = function isBuffer (b) {
            return !!(b != null && b._isBuffer)
        }

        Buffer.compare = function compare (a, b) {
            if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
                throw new TypeError('Arguments must be Buffers')
            }

            if (a === b) return 0

            var x = a.length
            var y = b.length
            for (var i = 0, len = Math.min(x, y); i < len && a[i] === b[i]; i++) {}
            if (i !== len) {
                x = a[i]
                y = b[i]
            }
            if (x < y) return -1
            if (y < x) return 1
            return 0
        }

        Buffer.isEncoding = function isEncoding (encoding) {
            switch (String(encoding).toLowerCase()) {
                case 'hex':
                case 'utf8':
                case 'utf-8':
                case 'ascii':
                case 'binary':
                case 'base64':
                case 'raw':
                case 'ucs2':
                case 'ucs-2':
                case 'utf16le':
                case 'utf-16le':
                    return true
                default:
                    return false
            }
        }

        Buffer.concat = function concat (list, totalLength) {
            if (!isArray(list)) throw new TypeError('list argument must be an Array of Buffers.')

            if (list.length === 0) {
                return new Buffer(0)
            } else if (list.length === 1) {
                return list[0]
            }

            var i
            if (totalLength === undefined) {
                totalLength = 0
                for (i = 0; i < list.length; i++) {
                    totalLength += list[i].length
                }
            }

            var buf = new Buffer(totalLength)
            var pos = 0
            for (i = 0; i < list.length; i++) {
                var item = list[i]
                item.copy(buf, pos)
                pos += item.length
            }
            return buf
        }

        Buffer.byteLength = function byteLength (str, encoding) {
            var ret
            str = str + ''
            switch (encoding || 'utf8') {
                case 'ascii':
                case 'binary':
                case 'raw':
                    ret = str.length
                    break
                case 'ucs2':
                case 'ucs-2':
                case 'utf16le':
                case 'utf-16le':
                    ret = str.length * 2
                    break
                case 'hex':
                    ret = str.length >>> 1
                    break
                case 'utf8':
                case 'utf-8':
                    ret = utf8ToBytes(str).length
                    break
                case 'base64':
                    ret = base64ToBytes(str).length
                    break
                default:
                    ret = str.length
            }
            return ret
        }

// pre-set for values that may exist in the future
        Buffer.prototype.length = undefined
        Buffer.prototype.parent = undefined

// toString(encoding, start=0, end=buffer.length)
        Buffer.prototype.toString = function toString (encoding, start, end) {
            var loweredCase = false

            start = start >>> 0
            end = end === undefined || end === Infinity ? this.length : end >>> 0

            if (!encoding) encoding = 'utf8'
            if (start < 0) start = 0
            if (end > this.length) end = this.length
            if (end <= start) return ''

            while (true) {
                switch (encoding) {
                    case 'hex':
                        return hexSlice(this, start, end)

                    case 'utf8':
                    case 'utf-8':
                        return utf8Slice(this, start, end)

                    case 'ascii':
                        return asciiSlice(this, start, end)

                    case 'binary':
                        return binarySlice(this, start, end)

                    case 'base64':
                        return base64Slice(this, start, end)

                    case 'ucs2':
                    case 'ucs-2':
                    case 'utf16le':
                    case 'utf-16le':
                        return utf16leSlice(this, start, end)

                    default:
                        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
                        encoding = (encoding + '').toLowerCase()
                        loweredCase = true
                }
            }
        }

        Buffer.prototype.equals = function equals (b) {
            if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
            if (this === b) return true
            return Buffer.compare(this, b) === 0
        }

        Buffer.prototype.inspect = function inspect () {
            var str = ''
            var max = exports.INSPECT_MAX_BYTES
            if (this.length > 0) {
                str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
                if (this.length > max) str += ' ... '
            }
            return '<Buffer ' + str + '>'
        }

        Buffer.prototype.compare = function compare (b) {
            if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
            if (this === b) return 0
            return Buffer.compare(this, b)
        }

        Buffer.prototype.indexOf = function indexOf (val, byteOffset) {
            if (byteOffset > 0x7fffffff) byteOffset = 0x7fffffff
            else if (byteOffset < -0x80000000) byteOffset = -0x80000000
            byteOffset >>= 0

            if (this.length === 0) return -1
            if (byteOffset >= this.length) return -1

            // Negative offsets start from the end of the buffer
            if (byteOffset < 0) byteOffset = Math.max(this.length + byteOffset, 0)

            if (typeof val === 'string') {
                if (val.length === 0) return -1 // special case: looking for empty string always fails
                return String.prototype.indexOf.call(this, val, byteOffset)
            }
            if (Buffer.isBuffer(val)) {
                return arrayIndexOf(this, val, byteOffset)
            }
            if (typeof val === 'number') {
                if (Buffer.TYPED_ARRAY_SUPPORT && Uint8Array.prototype.indexOf === 'function') {
                    return Uint8Array.prototype.indexOf.call(this, val, byteOffset)
                }
                return arrayIndexOf(this, [ val ], byteOffset)
            }

            function arrayIndexOf (arr, val, byteOffset) {
                var foundIndex = -1
                for (var i = 0; byteOffset + i < arr.length; i++) {
                    if (arr[byteOffset + i] === val[foundIndex === -1 ? 0 : i - foundIndex]) {
                        if (foundIndex === -1) foundIndex = i
                        if (i - foundIndex + 1 === val.length) return byteOffset + foundIndex
                    } else {
                        foundIndex = -1
                    }
                }
                return -1
            }

            throw new TypeError('val must be string, number or Buffer')
        }

// `get` will be removed in Node 0.13+
        Buffer.prototype.get = function get (offset) {
            console.log('.get() is deprecated. Access using array indexes instead.')
            return this.readUInt8(offset)
        }

// `set` will be removed in Node 0.13+
        Buffer.prototype.set = function set (v, offset) {
            console.log('.set() is deprecated. Access using array indexes instead.')
            return this.writeUInt8(v, offset)
        }

        function hexWrite (buf, string, offset, length) {
            offset = Number(offset) || 0
            var remaining = buf.length - offset
            if (!length) {
                length = remaining
            } else {
                length = Number(length)
                if (length > remaining) {
                    length = remaining
                }
            }

            // must be an even number of digits
            var strLen = string.length
            if (strLen % 2 !== 0) throw new Error('Invalid hex string')

            if (length > strLen / 2) {
                length = strLen / 2
            }
            for (var i = 0; i < length; i++) {
                var parsed = parseInt(string.substr(i * 2, 2), 16)
                if (isNaN(parsed)) throw new Error('Invalid hex string')
                buf[offset + i] = parsed
            }
            return i
        }

        function utf8Write (buf, string, offset, length) {
            var charsWritten = blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
            return charsWritten
        }

        function asciiWrite (buf, string, offset, length) {
            var charsWritten = blitBuffer(asciiToBytes(string), buf, offset, length)
            return charsWritten
        }

        function binaryWrite (buf, string, offset, length) {
            return asciiWrite(buf, string, offset, length)
        }

        function base64Write (buf, string, offset, length) {
            var charsWritten = blitBuffer(base64ToBytes(string), buf, offset, length)
            return charsWritten
        }

        function utf16leWrite (buf, string, offset, length) {
            var charsWritten = blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
            return charsWritten
        }

        Buffer.prototype.write = function write (string, offset, length, encoding) {
            // Support both (string, offset, length, encoding)
            // and the legacy (string, encoding, offset, length)
            if (isFinite(offset)) {
                if (!isFinite(length)) {
                    encoding = length
                    length = undefined
                }
            } else {  // legacy
                var swap = encoding
                encoding = offset
                offset = length
                length = swap
            }

            offset = Number(offset) || 0

            if (length < 0 || offset < 0 || offset > this.length) {
                throw new RangeError('attempt to write outside buffer bounds')
            }

            var remaining = this.length - offset
            if (!length) {
                length = remaining
            } else {
                length = Number(length)
                if (length > remaining) {
                    length = remaining
                }
            }
            encoding = String(encoding || 'utf8').toLowerCase()

            var ret
            switch (encoding) {
                case 'hex':
                    ret = hexWrite(this, string, offset, length)
                    break
                case 'utf8':
                case 'utf-8':
                    ret = utf8Write(this, string, offset, length)
                    break
                case 'ascii':
                    ret = asciiWrite(this, string, offset, length)
                    break
                case 'binary':
                    ret = binaryWrite(this, string, offset, length)
                    break
                case 'base64':
                    ret = base64Write(this, string, offset, length)
                    break
                case 'ucs2':
                case 'ucs-2':
                case 'utf16le':
                case 'utf-16le':
                    ret = utf16leWrite(this, string, offset, length)
                    break
                default:
                    throw new TypeError('Unknown encoding: ' + encoding)
            }
            return ret
        }

        Buffer.prototype.toJSON = function toJSON () {
            return {
                type: 'Buffer',
                data: Array.prototype.slice.call(this._arr || this, 0)
            }
        }

        function base64Slice (buf, start, end) {
            if (start === 0 && end === buf.length) {
                return base64.fromByteArray(buf)
            } else {
                return base64.fromByteArray(buf.slice(start, end))
            }
        }

        function utf8Slice (buf, start, end) {
            var res = ''
            var tmp = ''
            end = Math.min(buf.length, end)

            for (var i = start; i < end; i++) {
                if (buf[i] <= 0x7F) {
                    res += decodeUtf8Char(tmp) + String.fromCharCode(buf[i])
                    tmp = ''
                } else {
                    tmp += '%' + buf[i].toString(16)
                }
            }

            return res + decodeUtf8Char(tmp)
        }

        function asciiSlice (buf, start, end) {
            var ret = ''
            end = Math.min(buf.length, end)

            for (var i = start; i < end; i++) {
                ret += String.fromCharCode(buf[i] & 0x7F)
            }
            return ret
        }

        function binarySlice (buf, start, end) {
            var ret = ''
            end = Math.min(buf.length, end)

            for (var i = start; i < end; i++) {
                ret += String.fromCharCode(buf[i])
            }
            return ret
        }

        function hexSlice (buf, start, end) {
            var len = buf.length

            if (!start || start < 0) start = 0
            if (!end || end < 0 || end > len) end = len

            var out = ''
            for (var i = start; i < end; i++) {
                out += toHex(buf[i])
            }
            return out
        }

        function utf16leSlice (buf, start, end) {
            var bytes = buf.slice(start, end)
            var res = ''
            for (var i = 0; i < bytes.length; i += 2) {
                res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
            }
            return res
        }

        Buffer.prototype.slice = function slice (start, end) {
            var len = this.length
            start = ~~start
            end = end === undefined ? len : ~~end

            if (start < 0) {
                start += len
                if (start < 0) start = 0
            } else if (start > len) {
                start = len
            }

            if (end < 0) {
                end += len
                if (end < 0) end = 0
            } else if (end > len) {
                end = len
            }

            if (end < start) end = start

            var newBuf
            if (Buffer.TYPED_ARRAY_SUPPORT) {
                newBuf = Buffer._augment(this.subarray(start, end))
            } else {
                var sliceLen = end - start
                newBuf = new Buffer(sliceLen, undefined)
                for (var i = 0; i < sliceLen; i++) {
                    newBuf[i] = this[i + start]
                }
            }

            if (newBuf.length) newBuf.parent = this.parent || this

            return newBuf
        }

        /*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
        function checkOffset (offset, ext, length) {
            if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
            if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
        }

        Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
            offset = offset >>> 0
            byteLength = byteLength >>> 0
            if (!noAssert) checkOffset(offset, byteLength, this.length)

            var val = this[offset]
            var mul = 1
            var i = 0
            while (++i < byteLength && (mul *= 0x100)) {
                val += this[offset + i] * mul
            }

            return val
        }

        Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
            offset = offset >>> 0
            byteLength = byteLength >>> 0
            if (!noAssert) {
                checkOffset(offset, byteLength, this.length)
            }

            var val = this[offset + --byteLength]
            var mul = 1
            while (byteLength > 0 && (mul *= 0x100)) {
                val += this[offset + --byteLength] * mul
            }

            return val
        }

        Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
            if (!noAssert) checkOffset(offset, 1, this.length)
            return this[offset]
        }

        Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
            if (!noAssert) checkOffset(offset, 2, this.length)
            return this[offset] | (this[offset + 1] << 8)
        }

        Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
            if (!noAssert) checkOffset(offset, 2, this.length)
            return (this[offset] << 8) | this[offset + 1]
        }

        Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
            if (!noAssert) checkOffset(offset, 4, this.length)

            return ((this[offset]) |
                    (this[offset + 1] << 8) |
                    (this[offset + 2] << 16)) +
                (this[offset + 3] * 0x1000000)
        }

        Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
            if (!noAssert) checkOffset(offset, 4, this.length)

            return (this[offset] * 0x1000000) +
                ((this[offset + 1] << 16) |
                    (this[offset + 2] << 8) |
                    this[offset + 3])
        }

        Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
            offset = offset >>> 0
            byteLength = byteLength >>> 0
            if (!noAssert) checkOffset(offset, byteLength, this.length)

            var val = this[offset]
            var mul = 1
            var i = 0
            while (++i < byteLength && (mul *= 0x100)) {
                val += this[offset + i] * mul
            }
            mul *= 0x80

            if (val >= mul) val -= Math.pow(2, 8 * byteLength)

            return val
        }

        Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
            offset = offset >>> 0
            byteLength = byteLength >>> 0
            if (!noAssert) checkOffset(offset, byteLength, this.length)

            var i = byteLength
            var mul = 1
            var val = this[offset + --i]
            while (i > 0 && (mul *= 0x100)) {
                val += this[offset + --i] * mul
            }
            mul *= 0x80

            if (val >= mul) val -= Math.pow(2, 8 * byteLength)

            return val
        }

        Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
            if (!noAssert) checkOffset(offset, 1, this.length)
            if (!(this[offset] & 0x80)) return (this[offset])
            return ((0xff - this[offset] + 1) * -1)
        }

        Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
            if (!noAssert) checkOffset(offset, 2, this.length)
            var val = this[offset] | (this[offset + 1] << 8)
            return (val & 0x8000) ? val | 0xFFFF0000 : val
        }

        Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
            if (!noAssert) checkOffset(offset, 2, this.length)
            var val = this[offset + 1] | (this[offset] << 8)
            return (val & 0x8000) ? val | 0xFFFF0000 : val
        }

        Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
            if (!noAssert) checkOffset(offset, 4, this.length)

            return (this[offset]) |
                (this[offset + 1] << 8) |
                (this[offset + 2] << 16) |
                (this[offset + 3] << 24)
        }

        Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
            if (!noAssert) checkOffset(offset, 4, this.length)

            return (this[offset] << 24) |
                (this[offset + 1] << 16) |
                (this[offset + 2] << 8) |
                (this[offset + 3])
        }

        Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
            if (!noAssert) checkOffset(offset, 4, this.length)
            return ieee754.read(this, offset, true, 23, 4)
        }

        Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
            if (!noAssert) checkOffset(offset, 4, this.length)
            return ieee754.read(this, offset, false, 23, 4)
        }

        Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
            if (!noAssert) checkOffset(offset, 8, this.length)
            return ieee754.read(this, offset, true, 52, 8)
        }

        Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
            if (!noAssert) checkOffset(offset, 8, this.length)
            return ieee754.read(this, offset, false, 52, 8)
        }

        function checkInt (buf, value, offset, ext, max, min) {
            if (!Buffer.isBuffer(buf)) throw new TypeError('buffer must be a Buffer instance')
            if (value > max || value < min) throw new RangeError('value is out of bounds')
            if (offset + ext > buf.length) throw new RangeError('index out of range')
        }

        Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
            value = +value
            offset = offset >>> 0
            byteLength = byteLength >>> 0
            if (!noAssert) checkInt(this, value, offset, byteLength, Math.pow(2, 8 * byteLength), 0)

            var mul = 1
            var i = 0
            this[offset] = value & 0xFF
            while (++i < byteLength && (mul *= 0x100)) {
                this[offset + i] = (value / mul) >>> 0 & 0xFF
            }

            return offset + byteLength
        }

        Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
            value = +value
            offset = offset >>> 0
            byteLength = byteLength >>> 0
            if (!noAssert) checkInt(this, value, offset, byteLength, Math.pow(2, 8 * byteLength), 0)

            var i = byteLength - 1
            var mul = 1
            this[offset + i] = value & 0xFF
            while (--i >= 0 && (mul *= 0x100)) {
                this[offset + i] = (value / mul) >>> 0 & 0xFF
            }

            return offset + byteLength
        }

        Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
            value = +value
            offset = offset >>> 0
            if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
            if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
            this[offset] = value
            return offset + 1
        }

        function objectWriteUInt16 (buf, value, offset, littleEndian) {
            if (value < 0) value = 0xffff + value + 1
            for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; i++) {
                buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
                    (littleEndian ? i : 1 - i) * 8
            }
        }

        Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
            value = +value
            offset = offset >>> 0
            if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
            if (Buffer.TYPED_ARRAY_SUPPORT) {
                this[offset] = value
                this[offset + 1] = (value >>> 8)
            } else {
                objectWriteUInt16(this, value, offset, true)
            }
            return offset + 2
        }

        Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
            value = +value
            offset = offset >>> 0
            if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
            if (Buffer.TYPED_ARRAY_SUPPORT) {
                this[offset] = (value >>> 8)
                this[offset + 1] = value
            } else {
                objectWriteUInt16(this, value, offset, false)
            }
            return offset + 2
        }

        function objectWriteUInt32 (buf, value, offset, littleEndian) {
            if (value < 0) value = 0xffffffff + value + 1
            for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; i++) {
                buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
            }
        }

        Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
            value = +value
            offset = offset >>> 0
            if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
            if (Buffer.TYPED_ARRAY_SUPPORT) {
                this[offset + 3] = (value >>> 24)
                this[offset + 2] = (value >>> 16)
                this[offset + 1] = (value >>> 8)
                this[offset] = value
            } else {
                objectWriteUInt32(this, value, offset, true)
            }
            return offset + 4
        }

        Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
            value = +value
            offset = offset >>> 0
            if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
            if (Buffer.TYPED_ARRAY_SUPPORT) {
                this[offset] = (value >>> 24)
                this[offset + 1] = (value >>> 16)
                this[offset + 2] = (value >>> 8)
                this[offset + 3] = value
            } else {
                objectWriteUInt32(this, value, offset, false)
            }
            return offset + 4
        }

        Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
            value = +value
            offset = offset >>> 0
            if (!noAssert) {
                checkInt(
                    this, value, offset, byteLength,
                    Math.pow(2, 8 * byteLength - 1) - 1,
                    -Math.pow(2, 8 * byteLength - 1)
                )
            }

            var i = 0
            var mul = 1
            var sub = value < 0 ? 1 : 0
            this[offset] = value & 0xFF
            while (++i < byteLength && (mul *= 0x100)) {
                this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
            }

            return offset + byteLength
        }

        Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
            value = +value
            offset = offset >>> 0
            if (!noAssert) {
                checkInt(
                    this, value, offset, byteLength,
                    Math.pow(2, 8 * byteLength - 1) - 1,
                    -Math.pow(2, 8 * byteLength - 1)
                )
            }

            var i = byteLength - 1
            var mul = 1
            var sub = value < 0 ? 1 : 0
            this[offset + i] = value & 0xFF
            while (--i >= 0 && (mul *= 0x100)) {
                this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
            }

            return offset + byteLength
        }

        Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
            value = +value
            offset = offset >>> 0
            if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
            if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
            if (value < 0) value = 0xff + value + 1
            this[offset] = value
            return offset + 1
        }

        Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
            value = +value
            offset = offset >>> 0
            if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
            if (Buffer.TYPED_ARRAY_SUPPORT) {
                this[offset] = value
                this[offset + 1] = (value >>> 8)
            } else {
                objectWriteUInt16(this, value, offset, true)
            }
            return offset + 2
        }

        Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
            value = +value
            offset = offset >>> 0
            if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
            if (Buffer.TYPED_ARRAY_SUPPORT) {
                this[offset] = (value >>> 8)
                this[offset + 1] = value
            } else {
                objectWriteUInt16(this, value, offset, false)
            }
            return offset + 2
        }

        Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
            value = +value
            offset = offset >>> 0
            if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
            if (Buffer.TYPED_ARRAY_SUPPORT) {
                this[offset] = value
                this[offset + 1] = (value >>> 8)
                this[offset + 2] = (value >>> 16)
                this[offset + 3] = (value >>> 24)
            } else {
                objectWriteUInt32(this, value, offset, true)
            }
            return offset + 4
        }

        Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
            value = +value
            offset = offset >>> 0
            if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
            if (value < 0) value = 0xffffffff + value + 1
            if (Buffer.TYPED_ARRAY_SUPPORT) {
                this[offset] = (value >>> 24)
                this[offset + 1] = (value >>> 16)
                this[offset + 2] = (value >>> 8)
                this[offset + 3] = value
            } else {
                objectWriteUInt32(this, value, offset, false)
            }
            return offset + 4
        }

        function checkIEEE754 (buf, value, offset, ext, max, min) {
            if (value > max || value < min) throw new RangeError('value is out of bounds')
            if (offset + ext > buf.length) throw new RangeError('index out of range')
            if (offset < 0) throw new RangeError('index out of range')
        }

        function writeFloat (buf, value, offset, littleEndian, noAssert) {
            if (!noAssert) {
                checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
            }
            ieee754.write(buf, value, offset, littleEndian, 23, 4)
            return offset + 4
        }

        Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
            return writeFloat(this, value, offset, true, noAssert)
        }

        Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
            return writeFloat(this, value, offset, false, noAssert)
        }

        function writeDouble (buf, value, offset, littleEndian, noAssert) {
            if (!noAssert) {
                checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
            }
            ieee754.write(buf, value, offset, littleEndian, 52, 8)
            return offset + 8
        }

        Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
            return writeDouble(this, value, offset, true, noAssert)
        }

        Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
            return writeDouble(this, value, offset, false, noAssert)
        }

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
        Buffer.prototype.copy = function copy (target, target_start, start, end) {
            if (!start) start = 0
            if (!end && end !== 0) end = this.length
            if (target_start >= target.length) target_start = target.length
            if (!target_start) target_start = 0
            if (end > 0 && end < start) end = start

            // Copy 0 bytes; we're done
            if (end === start) return 0
            if (target.length === 0 || this.length === 0) return 0

            // Fatal error conditions
            if (target_start < 0) {
                throw new RangeError('targetStart out of bounds')
            }
            if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
            if (end < 0) throw new RangeError('sourceEnd out of bounds')

            // Are we oob?
            if (end > this.length) end = this.length
            if (target.length - target_start < end - start) {
                end = target.length - target_start + start
            }

            var len = end - start

            if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
                for (var i = 0; i < len; i++) {
                    target[i + target_start] = this[i + start]
                }
            } else {
                target._set(this.subarray(start, start + len), target_start)
            }

            return len
        }

// fill(value, start=0, end=buffer.length)
        Buffer.prototype.fill = function fill (value, start, end) {
            if (!value) value = 0
            if (!start) start = 0
            if (!end) end = this.length

            if (end < start) throw new RangeError('end < start')

            // Fill 0 bytes; we're done
            if (end === start) return
            if (this.length === 0) return

            if (start < 0 || start >= this.length) throw new RangeError('start out of bounds')
            if (end < 0 || end > this.length) throw new RangeError('end out of bounds')

            var i
            if (typeof value === 'number') {
                for (i = start; i < end; i++) {
                    this[i] = value
                }
            } else {
                var bytes = utf8ToBytes(value.toString())
                var len = bytes.length
                for (i = start; i < end; i++) {
                    this[i] = bytes[i % len]
                }
            }

            return this
        }

        /**
         * Creates a new `ArrayBuffer` with the *copied* memory of the buffer instance.
         * Added in Node 0.12. Only available in browsers that support ArrayBuffer.
         */
        Buffer.prototype.toArrayBuffer = function toArrayBuffer () {
            if (typeof Uint8Array !== 'undefined') {
                if (Buffer.TYPED_ARRAY_SUPPORT) {
                    return (new Buffer(this)).buffer
                } else {
                    var buf = new Uint8Array(this.length)
                    for (var i = 0, len = buf.length; i < len; i += 1) {
                        buf[i] = this[i]
                    }
                    return buf.buffer
                }
            } else {
                throw new TypeError('Buffer.toArrayBuffer not supported in this browser')
            }
        }

// HELPER FUNCTIONS
// ================

        var BP = Buffer.prototype

        /**
         * Augment a Uint8Array *instance* (not the Uint8Array class!) with Buffer methods
         */
        Buffer._augment = function _augment (arr) {
            arr.constructor = Buffer
            arr._isBuffer = true

            // save reference to original Uint8Array set method before overwriting
            arr._set = arr.set

            // deprecated, will be removed in node 0.13+
            arr.get = BP.get
            arr.set = BP.set

            arr.write = BP.write
            arr.toString = BP.toString
            arr.toLocaleString = BP.toString
            arr.toJSON = BP.toJSON
            arr.equals = BP.equals
            arr.compare = BP.compare
            arr.indexOf = BP.indexOf
            arr.copy = BP.copy
            arr.slice = BP.slice
            arr.readUIntLE = BP.readUIntLE
            arr.readUIntBE = BP.readUIntBE
            arr.readUInt8 = BP.readUInt8
            arr.readUInt16LE = BP.readUInt16LE
            arr.readUInt16BE = BP.readUInt16BE
            arr.readUInt32LE = BP.readUInt32LE
            arr.readUInt32BE = BP.readUInt32BE
            arr.readIntLE = BP.readIntLE
            arr.readIntBE = BP.readIntBE
            arr.readInt8 = BP.readInt8
            arr.readInt16LE = BP.readInt16LE
            arr.readInt16BE = BP.readInt16BE
            arr.readInt32LE = BP.readInt32LE
            arr.readInt32BE = BP.readInt32BE
            arr.readFloatLE = BP.readFloatLE
            arr.readFloatBE = BP.readFloatBE
            arr.readDoubleLE = BP.readDoubleLE
            arr.readDoubleBE = BP.readDoubleBE
            arr.writeUInt8 = BP.writeUInt8
            arr.writeUIntLE = BP.writeUIntLE
            arr.writeUIntBE = BP.writeUIntBE
            arr.writeUInt16LE = BP.writeUInt16LE
            arr.writeUInt16BE = BP.writeUInt16BE
            arr.writeUInt32LE = BP.writeUInt32LE
            arr.writeUInt32BE = BP.writeUInt32BE
            arr.writeIntLE = BP.writeIntLE
            arr.writeIntBE = BP.writeIntBE
            arr.writeInt8 = BP.writeInt8
            arr.writeInt16LE = BP.writeInt16LE
            arr.writeInt16BE = BP.writeInt16BE
            arr.writeInt32LE = BP.writeInt32LE
            arr.writeInt32BE = BP.writeInt32BE
            arr.writeFloatLE = BP.writeFloatLE
            arr.writeFloatBE = BP.writeFloatBE
            arr.writeDoubleLE = BP.writeDoubleLE
            arr.writeDoubleBE = BP.writeDoubleBE
            arr.fill = BP.fill
            arr.inspect = BP.inspect
            arr.toArrayBuffer = BP.toArrayBuffer

            return arr
        }

        var INVALID_BASE64_RE = /[^+\/0-9A-z\-]/g

        function base64clean (str) {
            // Node strips out invalid characters like \n and \t from the string, base64-js does not
            str = stringtrim(str).replace(INVALID_BASE64_RE, '')
            // Node converts strings with length < 2 to ''
            if (str.length < 2) return ''
            // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
            while (str.length % 4 !== 0) {
                str = str + '='
            }
            return str
        }

        function stringtrim (str) {
            if (str.trim) return str.trim()
            return str.replace(/^\s+|\s+$/g, '')
        }

        function isArrayish (subject) {
            return isArray(subject) || Buffer.isBuffer(subject) ||
                subject && typeof subject === 'object' &&
                typeof subject.length === 'number'
        }

        function toHex (n) {
            if (n < 16) return '0' + n.toString(16)
            return n.toString(16)
        }

        function utf8ToBytes (string, units) {
            units = units || Infinity
            var codePoint
            var length = string.length
            var leadSurrogate = null
            var bytes = []
            var i = 0

            for (; i < length; i++) {
                codePoint = string.charCodeAt(i)

                // is surrogate component
                if (codePoint > 0xD7FF && codePoint < 0xE000) {
                    // last char was a lead
                    if (leadSurrogate) {
                        // 2 leads in a row
                        if (codePoint < 0xDC00) {
                            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
                            leadSurrogate = codePoint
                            continue
                        } else {
                            // valid surrogate pair
                            codePoint = leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00 | 0x10000
                            leadSurrogate = null
                        }
                    } else {
                        // no lead yet

                        if (codePoint > 0xDBFF) {
                            // unexpected trail
                            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
                            continue
                        } else if (i + 1 === length) {
                            // unpaired lead
                            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
                            continue
                        } else {
                            // valid lead
                            leadSurrogate = codePoint
                            continue
                        }
                    }
                } else if (leadSurrogate) {
                    // valid bmp char, but last char was a lead
                    if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
                    leadSurrogate = null
                }

                // encode utf8
                if (codePoint < 0x80) {
                    if ((units -= 1) < 0) break
                    bytes.push(codePoint)
                } else if (codePoint < 0x800) {
                    if ((units -= 2) < 0) break
                    bytes.push(
                        codePoint >> 0x6 | 0xC0,
                        codePoint & 0x3F | 0x80
                    )
                } else if (codePoint < 0x10000) {
                    if ((units -= 3) < 0) break
                    bytes.push(
                        codePoint >> 0xC | 0xE0,
                        codePoint >> 0x6 & 0x3F | 0x80,
                        codePoint & 0x3F | 0x80
                    )
                } else if (codePoint < 0x200000) {
                    if ((units -= 4) < 0) break
                    bytes.push(
                        codePoint >> 0x12 | 0xF0,
                        codePoint >> 0xC & 0x3F | 0x80,
                        codePoint >> 0x6 & 0x3F | 0x80,
                        codePoint & 0x3F | 0x80
                    )
                } else {
                    throw new Error('Invalid code point')
                }
            }

            return bytes
        }

        function asciiToBytes (str) {
            var byteArray = []
            for (var i = 0; i < str.length; i++) {
                // Node's code seems to be doing this and not & 0x7F..
                byteArray.push(str.charCodeAt(i) & 0xFF)
            }
            return byteArray
        }

        function utf16leToBytes (str, units) {
            var c, hi, lo
            var byteArray = []
            for (var i = 0; i < str.length; i++) {
                if ((units -= 2) < 0) break

                c = str.charCodeAt(i)
                hi = c >> 8
                lo = c % 256
                byteArray.push(lo)
                byteArray.push(hi)
            }

            return byteArray
        }

        function base64ToBytes (str) {
            return base64.toByteArray(base64clean(str))
        }

        function blitBuffer (src, dst, offset, length) {
            for (var i = 0; i < length; i++) {
                if ((i + offset >= dst.length) || (i >= src.length)) break
                dst[i + offset] = src[i]
            }
            return i
        }

        function decodeUtf8Char (str) {
            try {
                return decodeURIComponent(str)
            } catch (err) {
                return String.fromCharCode(0xFFFD) // UTF 8 invalid char
            }
        }

    },{"base64-js":4,"ieee754":5,"is-array":6}],4:[function(_dereq_,module,exports){
        var lookup = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

        ;(function (exports) {
            'use strict';

            var Arr = (typeof Uint8Array !== 'undefined')
                ? Uint8Array
                : Array

            var PLUS   = '+'.charCodeAt(0)
            var SLASH  = '/'.charCodeAt(0)
            var NUMBER = '0'.charCodeAt(0)
            var LOWER  = 'a'.charCodeAt(0)
            var UPPER  = 'A'.charCodeAt(0)
            var PLUS_URL_SAFE = '-'.charCodeAt(0)
            var SLASH_URL_SAFE = '_'.charCodeAt(0)

            function decode (elt) {
                var code = elt.charCodeAt(0)
                if (code === PLUS ||
                    code === PLUS_URL_SAFE)
                    return 62 // '+'
                if (code === SLASH ||
                    code === SLASH_URL_SAFE)
                    return 63 // '/'
                if (code < NUMBER)
                    return -1 //no match
                if (code < NUMBER + 10)
                    return code - NUMBER + 26 + 26
                if (code < UPPER + 26)
                    return code - UPPER
                if (code < LOWER + 26)
                    return code - LOWER + 26
            }

            function b64ToByteArray (b64) {
                var i, j, l, tmp, placeHolders, arr

                if (b64.length % 4 > 0) {
                    throw new Error('Invalid string. Length must be a multiple of 4')
                }

                // the number of equal signs (place holders)
                // if there are two placeholders, than the two characters before it
                // represent one byte
                // if there is only one, then the three characters before it represent 2 bytes
                // this is just a cheap hack to not do indexOf twice
                var len = b64.length
                placeHolders = '=' === b64.charAt(len - 2) ? 2 : '=' === b64.charAt(len - 1) ? 1 : 0

                // base64 is 4/3 + up to two characters of the original data
                arr = new Arr(b64.length * 3 / 4 - placeHolders)

                // if there are placeholders, only get up to the last complete 4 chars
                l = placeHolders > 0 ? b64.length - 4 : b64.length

                var L = 0

                function push (v) {
                    arr[L++] = v
                }

                for (i = 0, j = 0; i < l; i += 4, j += 3) {
                    tmp = (decode(b64.charAt(i)) << 18) | (decode(b64.charAt(i + 1)) << 12) | (decode(b64.charAt(i + 2)) << 6) | decode(b64.charAt(i + 3))
                    push((tmp & 0xFF0000) >> 16)
                    push((tmp & 0xFF00) >> 8)
                    push(tmp & 0xFF)
                }

                if (placeHolders === 2) {
                    tmp = (decode(b64.charAt(i)) << 2) | (decode(b64.charAt(i + 1)) >> 4)
                    push(tmp & 0xFF)
                } else if (placeHolders === 1) {
                    tmp = (decode(b64.charAt(i)) << 10) | (decode(b64.charAt(i + 1)) << 4) | (decode(b64.charAt(i + 2)) >> 2)
                    push((tmp >> 8) & 0xFF)
                    push(tmp & 0xFF)
                }

                return arr
            }

            function uint8ToBase64 (uint8) {
                var i,
                    extraBytes = uint8.length % 3, // if we have 1 byte left, pad 2 bytes
                    output = "",
                    temp, length

                function encode (num) {
                    return lookup.charAt(num)
                }

                function tripletToBase64 (num) {
                    return encode(num >> 18 & 0x3F) + encode(num >> 12 & 0x3F) + encode(num >> 6 & 0x3F) + encode(num & 0x3F)
                }

                // go through the array every three bytes, we'll deal with trailing stuff later
                for (i = 0, length = uint8.length - extraBytes; i < length; i += 3) {
                    temp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
                    output += tripletToBase64(temp)
                }

                // pad the end with zeros, but make sure to not forget the extra bytes
                switch (extraBytes) {
                    case 1:
                        temp = uint8[uint8.length - 1]
                        output += encode(temp >> 2)
                        output += encode((temp << 4) & 0x3F)
                        output += '=='
                        break
                    case 2:
                        temp = (uint8[uint8.length - 2] << 8) + (uint8[uint8.length - 1])
                        output += encode(temp >> 10)
                        output += encode((temp >> 4) & 0x3F)
                        output += encode((temp << 2) & 0x3F)
                        output += '='
                        break
                }

                return output
            }

            exports.toByteArray = b64ToByteArray
            exports.fromByteArray = uint8ToBase64
        }(typeof exports === 'undefined' ? (this.base64js = {}) : exports))

    },{}],5:[function(_dereq_,module,exports){
        exports.read = function(buffer, offset, isLE, mLen, nBytes) {
            var e, m,
                eLen = nBytes * 8 - mLen - 1,
                eMax = (1 << eLen) - 1,
                eBias = eMax >> 1,
                nBits = -7,
                i = isLE ? (nBytes - 1) : 0,
                d = isLE ? -1 : 1,
                s = buffer[offset + i];

            i += d;

            e = s & ((1 << (-nBits)) - 1);
            s >>= (-nBits);
            nBits += eLen;
            for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8);

            m = e & ((1 << (-nBits)) - 1);
            e >>= (-nBits);
            nBits += mLen;
            for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8);

            if (e === 0) {
                e = 1 - eBias;
            } else if (e === eMax) {
                return m ? NaN : ((s ? -1 : 1) * Infinity);
            } else {
                m = m + Math.pow(2, mLen);
                e = e - eBias;
            }
            return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
        };

        exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
            var e, m, c,
                eLen = nBytes * 8 - mLen - 1,
                eMax = (1 << eLen) - 1,
                eBias = eMax >> 1,
                rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0),
                i = isLE ? 0 : (nBytes - 1),
                d = isLE ? 1 : -1,
                s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0;

            value = Math.abs(value);

            if (isNaN(value) || value === Infinity) {
                m = isNaN(value) ? 1 : 0;
                e = eMax;
            } else {
                e = Math.floor(Math.log(value) / Math.LN2);
                if (value * (c = Math.pow(2, -e)) < 1) {
                    e--;
                    c *= 2;
                }
                if (e + eBias >= 1) {
                    value += rt / c;
                } else {
                    value += rt * Math.pow(2, 1 - eBias);
                }
                if (value * c >= 2) {
                    e++;
                    c /= 2;
                }

                if (e + eBias >= eMax) {
                    m = 0;
                    e = eMax;
                } else if (e + eBias >= 1) {
                    m = (value * c - 1) * Math.pow(2, mLen);
                    e = e + eBias;
                } else {
                    m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
                    e = 0;
                }
            }

            for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8);

            e = (e << mLen) | m;
            eLen += mLen;
            for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8);

            buffer[offset + i - d] |= s * 128;
        };

    },{}],6:[function(_dereq_,module,exports){

        /**
         * isArray
         */

        var isArray = Array.isArray;

        /**
         * toString
         */

        var str = Object.prototype.toString;

        /**
         * Whether or not the given `val`
         * is an array.
         *
         * example:
         *
         *        isArray([]);
         *        // > true
         *        isArray(arguments);
         *        // > false
         *        isArray('');
         *        // > false
         *
         * @param {mixed} val
         * @return {bool}
         */

        module.exports = isArray || function (val) {
            return !! val && '[object Array]' == str.call(val);
        };

    },{}],7:[function(_dereq_,module,exports){
        (function (process){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
            function normalizeArray(parts, allowAboveRoot) {
                // if the path tries to go above the root, `up` ends up > 0
                var up = 0;
                for (var i = parts.length - 1; i >= 0; i--) {
                    var last = parts[i];
                    if (last === '.') {
                        parts.splice(i, 1);
                    } else if (last === '..') {
                        parts.splice(i, 1);
                        up++;
                    } else if (up) {
                        parts.splice(i, 1);
                        up--;
                    }
                }

                // if the path is allowed to go above the root, restore leading ..s
                if (allowAboveRoot) {
                    for (; up--; up) {
                        parts.unshift('..');
                    }
                }

                return parts;
            }

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
            var splitPathRe =
                /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
            var splitPath = function(filename) {
                return splitPathRe.exec(filename).slice(1);
            };

// path.resolve([from ...], to)
// posix version
            exports.resolve = function() {
                var resolvedPath = '',
                    resolvedAbsolute = false;

                for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
                    var path = (i >= 0) ? arguments[i] : process.cwd();

                    // Skip empty and invalid entries
                    if (typeof path !== 'string') {
                        throw new TypeError('Arguments to path.resolve must be strings');
                    } else if (!path) {
                        continue;
                    }

                    resolvedPath = path + '/' + resolvedPath;
                    resolvedAbsolute = path.charAt(0) === '/';
                }

                // At this point the path should be resolved to a full absolute path, but
                // handle relative paths to be safe (might happen when process.cwd() fails)

                // Normalize the path
                resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
                    return !!p;
                }), !resolvedAbsolute).join('/');

                return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
            };

// path.normalize(path)
// posix version
            exports.normalize = function(path) {
                var isAbsolute = exports.isAbsolute(path),
                    trailingSlash = substr(path, -1) === '/';

                // Normalize the path
                path = normalizeArray(filter(path.split('/'), function(p) {
                    return !!p;
                }), !isAbsolute).join('/');

                if (!path && !isAbsolute) {
                    path = '.';
                }
                if (path && trailingSlash) {
                    path += '/';
                }

                return (isAbsolute ? '/' : '') + path;
            };

// posix version
            exports.isAbsolute = function(path) {
                return path.charAt(0) === '/';
            };

// posix version
            exports.join = function() {
                var paths = Array.prototype.slice.call(arguments, 0);
                return exports.normalize(filter(paths, function(p, index) {
                    if (typeof p !== 'string') {
                        throw new TypeError('Arguments to path.join must be strings');
                    }
                    return p;
                }).join('/'));
            };


// path.relative(from, to)
// posix version
            exports.relative = function(from, to) {
                from = exports.resolve(from).substr(1);
                to = exports.resolve(to).substr(1);

                function trim(arr) {
                    var start = 0;
                    for (; start < arr.length; start++) {
                        if (arr[start] !== '') break;
                    }

                    var end = arr.length - 1;
                    for (; end >= 0; end--) {
                        if (arr[end] !== '') break;
                    }

                    if (start > end) return [];
                    return arr.slice(start, end - start + 1);
                }

                var fromParts = trim(from.split('/'));
                var toParts = trim(to.split('/'));

                var length = Math.min(fromParts.length, toParts.length);
                var samePartsLength = length;
                for (var i = 0; i < length; i++) {
                    if (fromParts[i] !== toParts[i]) {
                        samePartsLength = i;
                        break;
                    }
                }

                var outputParts = [];
                for (var i = samePartsLength; i < fromParts.length; i++) {
                    outputParts.push('..');
                }

                outputParts = outputParts.concat(toParts.slice(samePartsLength));

                return outputParts.join('/');
            };

            exports.sep = '/';
            exports.delimiter = ':';

            exports.dirname = function(path) {
                var result = splitPath(path),
                    root = result[0],
                    dir = result[1];

                if (!root && !dir) {
                    // No dirname whatsoever
                    return '.';
                }

                if (dir) {
                    // It has a dirname, strip trailing slash
                    dir = dir.substr(0, dir.length - 1);
                }

                return root + dir;
            };


            exports.basename = function(path, ext) {
                var f = splitPath(path)[2];
                // TODO: make this comparison case-insensitive on windows?
                if (ext && f.substr(-1 * ext.length) === ext) {
                    f = f.substr(0, f.length - ext.length);
                }
                return f;
            };


            exports.extname = function(path) {
                return splitPath(path)[3];
            };

            function filter (xs, f) {
                if (xs.filter) return xs.filter(f);
                var res = [];
                for (var i = 0; i < xs.length; i++) {
                    if (f(xs[i], i, xs)) res.push(xs[i]);
                }
                return res;
            }

// String.prototype.substr - negative index don't work in IE8
            var substr = 'ab'.substr(-1) === 'b'
                ? function (str, start, len) { return str.substr(start, len) }
                : function (str, start, len) {
                    if (start < 0) start = str.length + start;
                    return str.substr(start, len);
                }
            ;

        }).call(this,_dereq_('_process'))
    },{"_process":8}],8:[function(_dereq_,module,exports){
// shim for using process in browser

        var process = module.exports = {};
        var queue = [];
        var draining = false;

        function drainQueue() {
            if (draining) {
                return;
            }
            draining = true;
            var currentQueue;
            var len = queue.length;
            while(len) {
                currentQueue = queue;
                queue = [];
                var i = -1;
                while (++i < len) {
                    currentQueue[i]();
                }
                len = queue.length;
            }
            draining = false;
        }
        process.nextTick = function (fun) {
            queue.push(fun);
            if (!draining) {
                setTimeout(drainQueue, 0);
            }
        };

        process.title = 'browser';
        process.browser = true;
        process.env = {};
        process.argv = [];
        process.version = ''; // empty string to avoid regexp issues
        process.versions = {};

        function noop() {}

        process.on = noop;
        process.addListener = noop;
        process.once = noop;
        process.off = noop;
        process.removeListener = noop;
        process.removeAllListeners = noop;
        process.emit = noop;

        process.binding = function (name) {
            throw new Error('process.binding is not supported');
        };

// TODO(shtylman)
        process.cwd = function () { return '/' };
        process.chdir = function (dir) {
            throw new Error('process.chdir is not supported');
        };
        process.umask = function() { return 0; };

    },{}],9:[function(_dereq_,module,exports){
        /*
  Copyright (C) 2013 Ariya Hidayat <ariya.hidayat@gmail.com>
  Copyright (C) 2013 Thaddee Tyl <thaddee.tyl@gmail.com>
  Copyright (C) 2012 Ariya Hidayat <ariya.hidayat@gmail.com>
  Copyright (C) 2012 Mathias Bynens <mathias@qiwi.be>
  Copyright (C) 2012 Joost-Wim Boekesteijn <joost-wim@boekesteijn.nl>
  Copyright (C) 2012 Kris Kowal <kris.kowal@cixar.com>
  Copyright (C) 2012 Yusuke Suzuki <utatane.tea@gmail.com>
  Copyright (C) 2012 Arpad Borsos <arpad.borsos@googlemail.com>
  Copyright (C) 2011 Ariya Hidayat <ariya.hidayat@gmail.com>

  Redistribution and use in source and binary forms, with or without
  modification, are permitted provided that the following conditions are met:

    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above copyright
      notice, this list of conditions and the following disclaimer in the
      documentation and/or other materials provided with the distribution.

  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
  AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
  IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
  ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
  DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
  (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
  LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
  ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
  THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

        (function (root, factory) {
            'use strict';

            // Universal Module Definition (UMD) to support AMD, CommonJS/Node.js,
            // Rhino, and plain browser loading.

            /* istanbul ignore next */
            if (typeof define === 'function' && define.amd) {
                define(['exports'], factory);
            } else if (typeof exports !== 'undefined') {
                factory(exports);
            } else {
                factory((root.esprima = {}));
            }
        }(this, function (exports) {
            'use strict';

            var Token,
                TokenName,
                FnExprTokens,
                Syntax,
                PropertyKind,
                Messages,
                Regex,
                SyntaxTreeDelegate,
                XHTMLEntities,
                ClassPropertyType,
                source,
                strict,
                index,
                lineNumber,
                lineStart,
                length,
                delegate,
                lookahead,
                state,
                extra;

            Token = {
                BooleanLiteral: 1,
                EOF: 2,
                Identifier: 3,
                Keyword: 4,
                NullLiteral: 5,
                NumericLiteral: 6,
                Punctuator: 7,
                StringLiteral: 8,
                RegularExpression: 9,
                Template: 10,
                JSXIdentifier: 11,
                JSXText: 12
            };

            TokenName = {};
            TokenName[Token.BooleanLiteral] = 'Boolean';
            TokenName[Token.EOF] = '<end>';
            TokenName[Token.Identifier] = 'Identifier';
            TokenName[Token.Keyword] = 'Keyword';
            TokenName[Token.NullLiteral] = 'Null';
            TokenName[Token.NumericLiteral] = 'Numeric';
            TokenName[Token.Punctuator] = 'Punctuator';
            TokenName[Token.StringLiteral] = 'String';
            TokenName[Token.JSXIdentifier] = 'JSXIdentifier';
            TokenName[Token.JSXText] = 'JSXText';
            TokenName[Token.RegularExpression] = 'RegularExpression';

            // A function following one of those tokens is an expression.
            FnExprTokens = ['(', '{', '[', 'in', 'typeof', 'instanceof', 'new',
                'return', 'case', 'delete', 'throw', 'void',
                // assignment operators
                '=', '+=', '-=', '*=', '/=', '%=', '<<=', '>>=', '>>>=',
                '&=', '|=', '^=', ',',
                // binary/unary operators
                '+', '-', '*', '/', '%', '++', '--', '<<', '>>', '>>>', '&',
                '|', '^', '!', '~', '&&', '||', '?', ':', '===', '==', '>=',
                '<=', '<', '>', '!=', '!=='];

            Syntax = {
                AnyTypeAnnotation: 'AnyTypeAnnotation',
                ArrayExpression: 'ArrayExpression',
                ArrayPattern: 'ArrayPattern',
                ArrayTypeAnnotation: 'ArrayTypeAnnotation',
                ArrowFunctionExpression: 'ArrowFunctionExpression',
                AssignmentExpression: 'AssignmentExpression',
                BinaryExpression: 'BinaryExpression',
                BlockStatement: 'BlockStatement',
                BooleanTypeAnnotation: 'BooleanTypeAnnotation',
                BreakStatement: 'BreakStatement',
                CallExpression: 'CallExpression',
                CatchClause: 'CatchClause',
                ClassBody: 'ClassBody',
                ClassDeclaration: 'ClassDeclaration',
                ClassExpression: 'ClassExpression',
                ClassImplements: 'ClassImplements',
                ClassProperty: 'ClassProperty',
                ComprehensionBlock: 'ComprehensionBlock',
                ComprehensionExpression: 'ComprehensionExpression',
                ConditionalExpression: 'ConditionalExpression',
                ContinueStatement: 'ContinueStatement',
                DebuggerStatement: 'DebuggerStatement',
                DeclareClass: 'DeclareClass',
                DeclareFunction: 'DeclareFunction',
                DeclareModule: 'DeclareModule',
                DeclareVariable: 'DeclareVariable',
                DoWhileStatement: 'DoWhileStatement',
                EmptyStatement: 'EmptyStatement',
                ExportDeclaration: 'ExportDeclaration',
                ExportBatchSpecifier: 'ExportBatchSpecifier',
                ExportSpecifier: 'ExportSpecifier',
                ExpressionStatement: 'ExpressionStatement',
                ForInStatement: 'ForInStatement',
                ForOfStatement: 'ForOfStatement',
                ForStatement: 'ForStatement',
                FunctionDeclaration: 'FunctionDeclaration',
                FunctionExpression: 'FunctionExpression',
                FunctionTypeAnnotation: 'FunctionTypeAnnotation',
                FunctionTypeParam: 'FunctionTypeParam',
                GenericTypeAnnotation: 'GenericTypeAnnotation',
                Identifier: 'Identifier',
                IfStatement: 'IfStatement',
                ImportDeclaration: 'ImportDeclaration',
                ImportDefaultSpecifier: 'ImportDefaultSpecifier',
                ImportNamespaceSpecifier: 'ImportNamespaceSpecifier',
                ImportSpecifier: 'ImportSpecifier',
                InterfaceDeclaration: 'InterfaceDeclaration',
                InterfaceExtends: 'InterfaceExtends',
                IntersectionTypeAnnotation: 'IntersectionTypeAnnotation',
                LabeledStatement: 'LabeledStatement',
                Literal: 'Literal',
                LogicalExpression: 'LogicalExpression',
                MemberExpression: 'MemberExpression',
                MethodDefinition: 'MethodDefinition',
                ModuleSpecifier: 'ModuleSpecifier',
                NewExpression: 'NewExpression',
                NullableTypeAnnotation: 'NullableTypeAnnotation',
                NumberTypeAnnotation: 'NumberTypeAnnotation',
                ObjectExpression: 'ObjectExpression',
                ObjectPattern: 'ObjectPattern',
                ObjectTypeAnnotation: 'ObjectTypeAnnotation',
                ObjectTypeCallProperty: 'ObjectTypeCallProperty',
                ObjectTypeIndexer: 'ObjectTypeIndexer',
                ObjectTypeProperty: 'ObjectTypeProperty',
                Program: 'Program',
                Property: 'Property',
                QualifiedTypeIdentifier: 'QualifiedTypeIdentifier',
                ReturnStatement: 'ReturnStatement',
                SequenceExpression: 'SequenceExpression',
                SpreadElement: 'SpreadElement',
                SpreadProperty: 'SpreadProperty',
                StringLiteralTypeAnnotation: 'StringLiteralTypeAnnotation',
                StringTypeAnnotation: 'StringTypeAnnotation',
                SwitchCase: 'SwitchCase',
                SwitchStatement: 'SwitchStatement',
                TaggedTemplateExpression: 'TaggedTemplateExpression',
                TemplateElement: 'TemplateElement',
                TemplateLiteral: 'TemplateLiteral',
                ThisExpression: 'ThisExpression',
                ThrowStatement: 'ThrowStatement',
                TupleTypeAnnotation: 'TupleTypeAnnotation',
                TryStatement: 'TryStatement',
                TypeAlias: 'TypeAlias',
                TypeAnnotation: 'TypeAnnotation',
                TypeCastExpression: 'TypeCastExpression',
                TypeofTypeAnnotation: 'TypeofTypeAnnotation',
                TypeParameterDeclaration: 'TypeParameterDeclaration',
                TypeParameterInstantiation: 'TypeParameterInstantiation',
                UnaryExpression: 'UnaryExpression',
                UnionTypeAnnotation: 'UnionTypeAnnotation',
                UpdateExpression: 'UpdateExpression',
                VariableDeclaration: 'VariableDeclaration',
                VariableDeclarator: 'VariableDeclarator',
                VoidTypeAnnotation: 'VoidTypeAnnotation',
                WhileStatement: 'WhileStatement',
                WithStatement: 'WithStatement',
                JSXIdentifier: 'JSXIdentifier',
                JSXNamespacedName: 'JSXNamespacedName',
                JSXMemberExpression: 'JSXMemberExpression',
                JSXEmptyExpression: 'JSXEmptyExpression',
                JSXExpressionContainer: 'JSXExpressionContainer',
                JSXElement: 'JSXElement',
                JSXClosingElement: 'JSXClosingElement',
                JSXOpeningElement: 'JSXOpeningElement',
                JSXAttribute: 'JSXAttribute',
                JSXSpreadAttribute: 'JSXSpreadAttribute',
                JSXText: 'JSXText',
                YieldExpression: 'YieldExpression',
                AwaitExpression: 'AwaitExpression'
            };

            PropertyKind = {
                Data: 1,
                Get: 2,
                Set: 4
            };

            ClassPropertyType = {
                'static': 'static',
                prototype: 'prototype'
            };

            // Error messages should be identical to V8.
            Messages = {
                UnexpectedToken: 'Unexpected token %0',
                UnexpectedNumber: 'Unexpected number',
                UnexpectedString: 'Unexpected string',
                UnexpectedIdentifier: 'Unexpected identifier',
                UnexpectedReserved: 'Unexpected reserved word',
                UnexpectedTemplate: 'Unexpected quasi %0',
                UnexpectedEOS: 'Unexpected end of input',
                NewlineAfterThrow: 'Illegal newline after throw',
                InvalidRegExp: 'Invalid regular expression',
                UnterminatedRegExp: 'Invalid regular expression: missing /',
                InvalidLHSInAssignment: 'Invalid left-hand side in assignment',
                InvalidLHSInFormalsList: 'Invalid left-hand side in formals list',
                InvalidLHSInForIn: 'Invalid left-hand side in for-in',
                MultipleDefaultsInSwitch: 'More than one default clause in switch statement',
                NoCatchOrFinally: 'Missing catch or finally after try',
                UnknownLabel: 'Undefined label \'%0\'',
                Redeclaration: '%0 \'%1\' has already been declared',
                IllegalContinue: 'Illegal continue statement',
                IllegalBreak: 'Illegal break statement',
                IllegalDuplicateClassProperty: 'Illegal duplicate property in class definition',
                IllegalClassConstructorProperty: 'Illegal constructor property in class definition',
                IllegalReturn: 'Illegal return statement',
                IllegalSpread: 'Illegal spread element',
                StrictModeWith: 'Strict mode code may not include a with statement',
                StrictCatchVariable: 'Catch variable may not be eval or arguments in strict mode',
                StrictVarName: 'Variable name may not be eval or arguments in strict mode',
                StrictParamName: 'Parameter name eval or arguments is not allowed in strict mode',
                StrictParamDupe: 'Strict mode function may not have duplicate parameter names',
                ParameterAfterRestParameter: 'Rest parameter must be final parameter of an argument list',
                DefaultRestParameter: 'Rest parameter can not have a default value',
                ElementAfterSpreadElement: 'Spread must be the final element of an element list',
                PropertyAfterSpreadProperty: 'A rest property must be the final property of an object literal',
                ObjectPatternAsRestParameter: 'Invalid rest parameter',
                ObjectPatternAsSpread: 'Invalid spread argument',
                StrictFunctionName: 'Function name may not be eval or arguments in strict mode',
                StrictOctalLiteral: 'Octal literals are not allowed in strict mode.',
                StrictDelete: 'Delete of an unqualified identifier in strict mode.',
                StrictDuplicateProperty: 'Duplicate data property in object literal not allowed in strict mode',
                AccessorDataProperty: 'Object literal may not have data and accessor property with the same name',
                AccessorGetSet: 'Object literal may not have multiple get/set accessors with the same name',
                StrictLHSAssignment: 'Assignment to eval or arguments is not allowed in strict mode',
                StrictLHSPostfix: 'Postfix increment/decrement may not have eval or arguments operand in strict mode',
                StrictLHSPrefix: 'Prefix increment/decrement may not have eval or arguments operand in strict mode',
                StrictReservedWord: 'Use of future reserved word in strict mode',
                MissingFromClause: 'Missing from clause',
                NoAsAfterImportNamespace: 'Missing as after import *',
                InvalidModuleSpecifier: 'Invalid module specifier',
                IllegalImportDeclaration: 'Illegal import declaration',
                IllegalExportDeclaration: 'Illegal export declaration',
                NoUninitializedConst: 'Const must be initialized',
                ComprehensionRequiresBlock: 'Comprehension must have at least one block',
                ComprehensionError: 'Comprehension Error',
                EachNotAllowed: 'Each is not supported',
                InvalidJSXAttributeValue: 'JSX value should be either an expression or a quoted JSX text',
                ExpectedJSXClosingTag: 'Expected corresponding JSX closing tag for %0',
                AdjacentJSXElements: 'Adjacent JSX elements must be wrapped in an enclosing tag',
                ConfusedAboutFunctionType: 'Unexpected token =>. It looks like ' +
                    'you are trying to write a function type, but you ended up ' +
                    'writing a grouped type followed by an =>, which is a syntax ' +
                    'error. Remember, function type parameters are named so function ' +
                    'types look like (name1: type1, name2: type2) => returnType. You ' +
                    'probably wrote (type1) => returnType'
            };

            // See also tools/generate-unicode-regex.py.
            Regex = {
                NonAsciiIdentifierStart: new RegExp('[\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05d0-\u05ea\u05f0-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u08a0\u08a2-\u08ac\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097f\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c33\u0c35-\u0c39\u0c3d\u0c58\u0c59\u0c60\u0c61\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d60\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e87\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa\u0eab\u0ead-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f0\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1877\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191c\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19c1-\u19c7\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1ce9-\u1cec\u1cee-\u1cf1\u1cf5\u1cf6\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2e2f\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fcc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua697\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa80-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uabc0-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc]'),
                NonAsciiIdentifierPart: new RegExp('[\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0300-\u0374\u0376\u0377\u037a-\u037d\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u0483-\u0487\u048a-\u0527\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u05d0-\u05ea\u05f0-\u05f2\u0610-\u061a\u0620-\u0669\u066e-\u06d3\u06d5-\u06dc\u06df-\u06e8\u06ea-\u06fc\u06ff\u0710-\u074a\u074d-\u07b1\u07c0-\u07f5\u07fa\u0800-\u082d\u0840-\u085b\u08a0\u08a2-\u08ac\u08e4-\u08fe\u0900-\u0963\u0966-\u096f\u0971-\u0977\u0979-\u097f\u0981-\u0983\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bc-\u09c4\u09c7\u09c8\u09cb-\u09ce\u09d7\u09dc\u09dd\u09df-\u09e3\u09e6-\u09f1\u0a01-\u0a03\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a3c\u0a3e-\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a59-\u0a5c\u0a5e\u0a66-\u0a75\u0a81-\u0a83\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abc-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ad0\u0ae0-\u0ae3\u0ae6-\u0aef\u0b01-\u0b03\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3c-\u0b44\u0b47\u0b48\u0b4b-\u0b4d\u0b56\u0b57\u0b5c\u0b5d\u0b5f-\u0b63\u0b66-\u0b6f\u0b71\u0b82\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd0\u0bd7\u0be6-\u0bef\u0c01-\u0c03\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c33\u0c35-\u0c39\u0c3d-\u0c44\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c58\u0c59\u0c60-\u0c63\u0c66-\u0c6f\u0c82\u0c83\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbc-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5\u0cd6\u0cde\u0ce0-\u0ce3\u0ce6-\u0cef\u0cf1\u0cf2\u0d02\u0d03\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d-\u0d44\u0d46-\u0d48\u0d4a-\u0d4e\u0d57\u0d60-\u0d63\u0d66-\u0d6f\u0d7a-\u0d7f\u0d82\u0d83\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0df2\u0df3\u0e01-\u0e3a\u0e40-\u0e4e\u0e50-\u0e59\u0e81\u0e82\u0e84\u0e87\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa\u0eab\u0ead-\u0eb9\u0ebb-\u0ebd\u0ec0-\u0ec4\u0ec6\u0ec8-\u0ecd\u0ed0-\u0ed9\u0edc-\u0edf\u0f00\u0f18\u0f19\u0f20-\u0f29\u0f35\u0f37\u0f39\u0f3e-\u0f47\u0f49-\u0f6c\u0f71-\u0f84\u0f86-\u0f97\u0f99-\u0fbc\u0fc6\u1000-\u1049\u1050-\u109d\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u135d-\u135f\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f0\u1700-\u170c\u170e-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176c\u176e-\u1770\u1772\u1773\u1780-\u17d3\u17d7\u17dc\u17dd\u17e0-\u17e9\u180b-\u180d\u1810-\u1819\u1820-\u1877\u1880-\u18aa\u18b0-\u18f5\u1900-\u191c\u1920-\u192b\u1930-\u193b\u1946-\u196d\u1970-\u1974\u1980-\u19ab\u19b0-\u19c9\u19d0-\u19d9\u1a00-\u1a1b\u1a20-\u1a5e\u1a60-\u1a7c\u1a7f-\u1a89\u1a90-\u1a99\u1aa7\u1b00-\u1b4b\u1b50-\u1b59\u1b6b-\u1b73\u1b80-\u1bf3\u1c00-\u1c37\u1c40-\u1c49\u1c4d-\u1c7d\u1cd0-\u1cd2\u1cd4-\u1cf6\u1d00-\u1de6\u1dfc-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u200c\u200d\u203f\u2040\u2054\u2071\u207f\u2090-\u209c\u20d0-\u20dc\u20e1\u20e5-\u20f0\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d7f-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2de0-\u2dff\u2e2f\u3005-\u3007\u3021-\u302f\u3031-\u3035\u3038-\u303c\u3041-\u3096\u3099\u309a\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fcc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua62b\ua640-\ua66f\ua674-\ua67d\ua67f-\ua697\ua69f-\ua6f1\ua717-\ua71f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua827\ua840-\ua873\ua880-\ua8c4\ua8d0-\ua8d9\ua8e0-\ua8f7\ua8fb\ua900-\ua92d\ua930-\ua953\ua960-\ua97c\ua980-\ua9c0\ua9cf-\ua9d9\uaa00-\uaa36\uaa40-\uaa4d\uaa50-\uaa59\uaa60-\uaa76\uaa7a\uaa7b\uaa80-\uaac2\uaadb-\uaadd\uaae0-\uaaef\uaaf2-\uaaf6\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uabc0-\uabea\uabec\uabed\uabf0-\uabf9\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe00-\ufe0f\ufe20-\ufe26\ufe33\ufe34\ufe4d-\ufe4f\ufe70-\ufe74\ufe76-\ufefc\uff10-\uff19\uff21-\uff3a\uff3f\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc]'),
                LeadingZeros: new RegExp('^0+(?!$)')
            };

            // Ensure the condition is true, otherwise throw an error.
            // This is only to have a better contract semantic, i.e. another safety net
            // to catch a logic error. The condition shall be fulfilled in normal case.
            // Do NOT use this to enforce a certain condition on any user input.

            function assert(condition, message) {
                /* istanbul ignore if */
                if (!condition) {
                    throw new Error('ASSERT: ' + message);
                }
            }

            function StringMap() {
                this.$data = {};
            }

            StringMap.prototype.get = function (key) {
                key = '$' + key;
                return this.$data[key];
            };

            StringMap.prototype.set = function (key, value) {
                key = '$' + key;
                this.$data[key] = value;
                return this;
            };

            StringMap.prototype.has = function (key) {
                key = '$' + key;
                return Object.prototype.hasOwnProperty.call(this.$data, key);
            };

            StringMap.prototype["delete"] = function (key) {
                key = '$' + key;
                return delete this.$data[key];
            };

            function isDecimalDigit(ch) {
                return (ch >= 48 && ch <= 57);   // 0..9
            }

            function isHexDigit(ch) {
                return '0123456789abcdefABCDEF'.indexOf(ch) >= 0;
            }

            function isOctalDigit(ch) {
                return '01234567'.indexOf(ch) >= 0;
            }


            // 7.2 White Space

            function isWhiteSpace(ch) {
                return (ch === 32) ||  // space
                    (ch === 9) ||      // tab
                    (ch === 0xB) ||
                    (ch === 0xC) ||
                    (ch === 0xA0) ||
                    (ch >= 0x1680 && '\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\uFEFF'.indexOf(String.fromCharCode(ch)) > 0);
            }

            // 7.3 Line Terminators

            function isLineTerminator(ch) {
                return (ch === 10) || (ch === 13) || (ch === 0x2028) || (ch === 0x2029);
            }

            // 7.6 Identifier Names and Identifiers

            function isIdentifierStart(ch) {
                return (ch === 36) || (ch === 95) ||  // $ (dollar) and _ (underscore)
                    (ch >= 65 && ch <= 90) ||         // A..Z
                    (ch >= 97 && ch <= 122) ||        // a..z
                    (ch === 92) ||                    // \ (backslash)
                    ((ch >= 0x80) && Regex.NonAsciiIdentifierStart.test(String.fromCharCode(ch)));
            }

            function isIdentifierPart(ch) {
                return (ch === 36) || (ch === 95) ||  // $ (dollar) and _ (underscore)
                    (ch >= 65 && ch <= 90) ||         // A..Z
                    (ch >= 97 && ch <= 122) ||        // a..z
                    (ch >= 48 && ch <= 57) ||         // 0..9
                    (ch === 92) ||                    // \ (backslash)
                    ((ch >= 0x80) && Regex.NonAsciiIdentifierPart.test(String.fromCharCode(ch)));
            }

            // 7.6.1.2 Future Reserved Words

            function isFutureReservedWord(id) {
                switch (id) {
                    case 'class':
                    case 'enum':
                    case 'export':
                    case 'extends':
                    case 'import':
                    case 'super':
                        return true;
                    default:
                        return false;
                }
            }

            function isStrictModeReservedWord(id) {
                switch (id) {
                    case 'implements':
                    case 'interface':
                    case 'package':
                    case 'private':
                    case 'protected':
                    case 'public':
                    case 'static':
                    case 'yield':
                    case 'let':
                        return true;
                    default:
                        return false;
                }
            }

            function isRestrictedWord(id) {
                return id === 'eval' || id === 'arguments';
            }

            // 7.6.1.1 Keywords

            function isKeyword(id) {
                if (strict && isStrictModeReservedWord(id)) {
                    return true;
                }

                // 'const' is specialized as Keyword in V8.
                // 'yield' is only treated as a keyword in strict mode.
                // 'let' is for compatiblity with SpiderMonkey and ES.next.
                // Some others are from future reserved words.

                switch (id.length) {
                    case 2:
                        return (id === 'if') || (id === 'in') || (id === 'do');
                    case 3:
                        return (id === 'var') || (id === 'for') || (id === 'new') ||
                            (id === 'try') || (id === 'let');
                    case 4:
                        return (id === 'this') || (id === 'else') || (id === 'case') ||
                            (id === 'void') || (id === 'with') || (id === 'enum');
                    case 5:
                        return (id === 'while') || (id === 'break') || (id === 'catch') ||
                            (id === 'throw') || (id === 'const') ||
                            (id === 'class') || (id === 'super');
                    case 6:
                        return (id === 'return') || (id === 'typeof') || (id === 'delete') ||
                            (id === 'switch') || (id === 'export') || (id === 'import');
                    case 7:
                        return (id === 'default') || (id === 'finally') || (id === 'extends');
                    case 8:
                        return (id === 'function') || (id === 'continue') || (id === 'debugger');
                    case 10:
                        return (id === 'instanceof');
                    default:
                        return false;
                }
            }

            // 7.4 Comments

            function addComment(type, value, start, end, loc) {
                var comment;
                assert(typeof start === 'number', 'Comment must have valid position');

                // Because the way the actual token is scanned, often the comments
                // (if any) are skipped twice during the lexical analysis.
                // Thus, we need to skip adding a comment if the comment array already
                // handled it.
                if (state.lastCommentStart >= start) {
                    return;
                }
                state.lastCommentStart = start;

                comment = {
                    type: type,
                    value: value
                };
                if (extra.range) {
                    comment.range = [start, end];
                }
                if (extra.loc) {
                    comment.loc = loc;
                }
                extra.comments.push(comment);
                if (extra.attachComment) {
                    extra.leadingComments.push(comment);
                    extra.trailingComments.push(comment);
                }
            }

            function skipSingleLineComment() {
                var start, loc, ch, comment;

                start = index - 2;
                loc = {
                    start: {
                        line: lineNumber,
                        column: index - lineStart - 2
                    }
                };

                while (index < length) {
                    ch = source.charCodeAt(index);
                    ++index;
                    if (isLineTerminator(ch)) {
                        if (extra.comments) {
                            comment = source.slice(start + 2, index - 1);
                            loc.end = {
                                line: lineNumber,
                                column: index - lineStart - 1
                            };
                            addComment('Line', comment, start, index - 1, loc);
                        }
                        if (ch === 13 && source.charCodeAt(index) === 10) {
                            ++index;
                        }
                        ++lineNumber;
                        lineStart = index;
                        return;
                    }
                }

                if (extra.comments) {
                    comment = source.slice(start + 2, index);
                    loc.end = {
                        line: lineNumber,
                        column: index - lineStart
                    };
                    addComment('Line', comment, start, index, loc);
                }
            }

            function skipMultiLineComment() {
                var start, loc, ch, comment;

                if (extra.comments) {
                    start = index - 2;
                    loc = {
                        start: {
                            line: lineNumber,
                            column: index - lineStart - 2
                        }
                    };
                }

                while (index < length) {
                    ch = source.charCodeAt(index);
                    if (isLineTerminator(ch)) {
                        if (ch === 13 && source.charCodeAt(index + 1) === 10) {
                            ++index;
                        }
                        ++lineNumber;
                        ++index;
                        lineStart = index;
                        if (index >= length) {
                            throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
                        }
                    } else if (ch === 42) {
                        // Block comment ends with '*/' (char #42, char #47).
                        if (source.charCodeAt(index + 1) === 47) {
                            ++index;
                            ++index;
                            if (extra.comments) {
                                comment = source.slice(start + 2, index - 2);
                                loc.end = {
                                    line: lineNumber,
                                    column: index - lineStart
                                };
                                addComment('Block', comment, start, index, loc);
                            }
                            return;
                        }
                        ++index;
                    } else {
                        ++index;
                    }
                }

                throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
            }

            function skipComment() {
                var ch;

                while (index < length) {
                    ch = source.charCodeAt(index);

                    if (isWhiteSpace(ch)) {
                        ++index;
                    } else if (isLineTerminator(ch)) {
                        ++index;
                        if (ch === 13 && source.charCodeAt(index) === 10) {
                            ++index;
                        }
                        ++lineNumber;
                        lineStart = index;
                    } else if (ch === 47) { // 47 is '/'
                        ch = source.charCodeAt(index + 1);
                        if (ch === 47) {
                            ++index;
                            ++index;
                            skipSingleLineComment();
                        } else if (ch === 42) {  // 42 is '*'
                            ++index;
                            ++index;
                            skipMultiLineComment();
                        } else {
                            break;
                        }
                    } else {
                        break;
                    }
                }
            }

            function scanHexEscape(prefix) {
                var i, len, ch, code = 0;

                len = (prefix === 'u') ? 4 : 2;
                for (i = 0; i < len; ++i) {
                    if (index < length && isHexDigit(source[index])) {
                        ch = source[index++];
                        code = code * 16 + '0123456789abcdef'.indexOf(ch.toLowerCase());
                    } else {
                        return '';
                    }
                }
                return String.fromCharCode(code);
            }

            function scanUnicodeCodePointEscape() {
                var ch, code, cu1, cu2;

                ch = source[index];
                code = 0;

                // At least, one hex digit is required.
                if (ch === '}') {
                    throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
                }

                while (index < length) {
                    ch = source[index++];
                    if (!isHexDigit(ch)) {
                        break;
                    }
                    code = code * 16 + '0123456789abcdef'.indexOf(ch.toLowerCase());
                }

                if (code > 0x10FFFF || ch !== '}') {
                    throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
                }

                // UTF-16 Encoding
                if (code <= 0xFFFF) {
                    return String.fromCharCode(code);
                }
                cu1 = ((code - 0x10000) >> 10) + 0xD800;
                cu2 = ((code - 0x10000) & 1023) + 0xDC00;
                return String.fromCharCode(cu1, cu2);
            }

            function getEscapedIdentifier() {
                var ch, id;

                ch = source.charCodeAt(index++);
                id = String.fromCharCode(ch);

                // '\u' (char #92, char #117) denotes an escaped character.
                if (ch === 92) {
                    if (source.charCodeAt(index) !== 117) {
                        throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
                    }
                    ++index;
                    ch = scanHexEscape('u');
                    if (!ch || ch === '\\' || !isIdentifierStart(ch.charCodeAt(0))) {
                        throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
                    }
                    id = ch;
                }

                while (index < length) {
                    ch = source.charCodeAt(index);
                    if (!isIdentifierPart(ch)) {
                        break;
                    }
                    ++index;
                    id += String.fromCharCode(ch);

                    // '\u' (char #92, char #117) denotes an escaped character.
                    if (ch === 92) {
                        id = id.substr(0, id.length - 1);
                        if (source.charCodeAt(index) !== 117) {
                            throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
                        }
                        ++index;
                        ch = scanHexEscape('u');
                        if (!ch || ch === '\\' || !isIdentifierPart(ch.charCodeAt(0))) {
                            throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
                        }
                        id += ch;
                    }
                }

                return id;
            }

            function getIdentifier() {
                var start, ch;

                start = index++;
                while (index < length) {
                    ch = source.charCodeAt(index);
                    if (ch === 92) {
                        // Blackslash (char #92) marks Unicode escape sequence.
                        index = start;
                        return getEscapedIdentifier();
                    }
                    if (isIdentifierPart(ch)) {
                        ++index;
                    } else {
                        break;
                    }
                }

                return source.slice(start, index);
            }

            function scanIdentifier() {
                var start, id, type;

                start = index;

                // Backslash (char #92) starts an escaped character.
                id = (source.charCodeAt(index) === 92) ? getEscapedIdentifier() : getIdentifier();

                // There is no keyword or literal with only one character.
                // Thus, it must be an identifier.
                if (id.length === 1) {
                    type = Token.Identifier;
                } else if (isKeyword(id)) {
                    type = Token.Keyword;
                } else if (id === 'null') {
                    type = Token.NullLiteral;
                } else if (id === 'true' || id === 'false') {
                    type = Token.BooleanLiteral;
                } else {
                    type = Token.Identifier;
                }

                return {
                    type: type,
                    value: id,
                    lineNumber: lineNumber,
                    lineStart: lineStart,
                    range: [start, index]
                };
            }


            // 7.7 Punctuators

            function scanPunctuator() {
                var start = index,
                    code = source.charCodeAt(index),
                    code2,
                    ch1 = source[index],
                    ch2,
                    ch3,
                    ch4;

                if (state.inJSXTag || state.inJSXChild) {
                    // Don't need to check for '{' and '}' as it's already handled
                    // correctly by default.
                    switch (code) {
                        case 60:  // <
                        case 62:  // >
                            ++index;
                            return {
                                type: Token.Punctuator,
                                value: String.fromCharCode(code),
                                lineNumber: lineNumber,
                                lineStart: lineStart,
                                range: [start, index]
                            };
                    }
                }

                switch (code) {
                    // Check for most common single-character punctuators.
                    case 40:   // ( open bracket
                    case 41:   // ) close bracket
                    case 59:   // ; semicolon
                    case 44:   // , comma
                    case 123:  // { open curly brace
                    case 125:  // } close curly brace
                    case 91:   // [
                    case 93:   // ]
                    case 58:   // :
                    case 63:   // ?
                    case 126:  // ~
                        ++index;
                        if (extra.tokenize) {
                            if (code === 40) {
                                extra.openParenToken = extra.tokens.length;
                            } else if (code === 123) {
                                extra.openCurlyToken = extra.tokens.length;
                            }
                        }
                        return {
                            type: Token.Punctuator,
                            value: String.fromCharCode(code),
                            lineNumber: lineNumber,
                            lineStart: lineStart,
                            range: [start, index]
                        };

                    default:
                        code2 = source.charCodeAt(index + 1);

                        // '=' (char #61) marks an assignment or comparison operator.
                        if (code2 === 61) {
                            switch (code) {
                                case 37:  // %
                                case 38:  // &
                                case 42:  // *:
                                case 43:  // +
                                case 45:  // -
                                case 47:  // /
                                case 60:  // <
                                case 62:  // >
                                case 94:  // ^
                                case 124: // |
                                    index += 2;
                                    return {
                                        type: Token.Punctuator,
                                        value: String.fromCharCode(code) + String.fromCharCode(code2),
                                        lineNumber: lineNumber,
                                        lineStart: lineStart,
                                        range: [start, index]
                                    };

                                case 33: // !
                                case 61: // =
                                    index += 2;

                                    // !== and ===
                                    if (source.charCodeAt(index) === 61) {
                                        ++index;
                                    }
                                    return {
                                        type: Token.Punctuator,
                                        value: source.slice(start, index),
                                        lineNumber: lineNumber,
                                        lineStart: lineStart,
                                        range: [start, index]
                                    };
                                default:
                                    break;
                            }
                        }
                        break;
                }

                // Peek more characters.

                ch2 = source[index + 1];
                ch3 = source[index + 2];
                ch4 = source[index + 3];

                // 4-character punctuator: >>>=

                if (ch1 === '>' && ch2 === '>' && ch3 === '>') {
                    if (ch4 === '=') {
                        index += 4;
                        return {
                            type: Token.Punctuator,
                            value: '>>>=',
                            lineNumber: lineNumber,
                            lineStart: lineStart,
                            range: [start, index]
                        };
                    }
                }

                // 3-character punctuators: === !== >>> <<= >>=

                if (ch1 === '>' && ch2 === '>' && ch3 === '>' && !state.inType) {
                    index += 3;
                    return {
                        type: Token.Punctuator,
                        value: '>>>',
                        lineNumber: lineNumber,
                        lineStart: lineStart,
                        range: [start, index]
                    };
                }

                if (ch1 === '<' && ch2 === '<' && ch3 === '=') {
                    index += 3;
                    return {
                        type: Token.Punctuator,
                        value: '<<=',
                        lineNumber: lineNumber,
                        lineStart: lineStart,
                        range: [start, index]
                    };
                }

                if (ch1 === '>' && ch2 === '>' && ch3 === '=') {
                    index += 3;
                    return {
                        type: Token.Punctuator,
                        value: '>>=',
                        lineNumber: lineNumber,
                        lineStart: lineStart,
                        range: [start, index]
                    };
                }

                if (ch1 === '.' && ch2 === '.' && ch3 === '.') {
                    index += 3;
                    return {
                        type: Token.Punctuator,
                        value: '...',
                        lineNumber: lineNumber,
                        lineStart: lineStart,
                        range: [start, index]
                    };
                }

                // Other 2-character punctuators: ++ -- << >> && ||

                // Don't match these tokens if we're in a type, since they never can
                // occur and can mess up types like Map<string, Array<string>>
                if (ch1 === ch2 && ('+-<>&|'.indexOf(ch1) >= 0) && !state.inType) {
                    index += 2;
                    return {
                        type: Token.Punctuator,
                        value: ch1 + ch2,
                        lineNumber: lineNumber,
                        lineStart: lineStart,
                        range: [start, index]
                    };
                }

                if (ch1 === '=' && ch2 === '>') {
                    index += 2;
                    return {
                        type: Token.Punctuator,
                        value: '=>',
                        lineNumber: lineNumber,
                        lineStart: lineStart,
                        range: [start, index]
                    };
                }

                if ('<>=!+-*%&|^/'.indexOf(ch1) >= 0) {
                    ++index;
                    return {
                        type: Token.Punctuator,
                        value: ch1,
                        lineNumber: lineNumber,
                        lineStart: lineStart,
                        range: [start, index]
                    };
                }

                if (ch1 === '.') {
                    ++index;
                    return {
                        type: Token.Punctuator,
                        value: ch1,
                        lineNumber: lineNumber,
                        lineStart: lineStart,
                        range: [start, index]
                    };
                }

                throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
            }

            // 7.8.3 Numeric Literals

            function scanHexLiteral(start) {
                var number = '';

                while (index < length) {
                    if (!isHexDigit(source[index])) {
                        break;
                    }
                    number += source[index++];
                }

                if (number.length === 0) {
                    throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
                }

                if (isIdentifierStart(source.charCodeAt(index))) {
                    throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
                }

                return {
                    type: Token.NumericLiteral,
                    value: parseInt('0x' + number, 16),
                    lineNumber: lineNumber,
                    lineStart: lineStart,
                    range: [start, index]
                };
            }

            function scanBinaryLiteral(start) {
                var ch, number;

                number = '';

                while (index < length) {
                    ch = source[index];
                    if (ch !== '0' && ch !== '1') {
                        break;
                    }
                    number += source[index++];
                }

                if (number.length === 0) {
                    // only 0b or 0B
                    throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
                }

                if (index < length) {
                    ch = source.charCodeAt(index);
                    /* istanbul ignore else */
                    if (isIdentifierStart(ch) || isDecimalDigit(ch)) {
                        throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
                    }
                }

                return {
                    type: Token.NumericLiteral,
                    value: parseInt(number, 2),
                    lineNumber: lineNumber,
                    lineStart: lineStart,
                    range: [start, index]
                };
            }

            function scanOctalLiteral(prefix, start) {
                var number, octal;

                if (isOctalDigit(prefix)) {
                    octal = true;
                    number = '0' + source[index++];
                } else {
                    octal = false;
                    ++index;
                    number = '';
                }

                while (index < length) {
                    if (!isOctalDigit(source[index])) {
                        break;
                    }
                    number += source[index++];
                }

                if (!octal && number.length === 0) {
                    // only 0o or 0O
                    throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
                }

                if (isIdentifierStart(source.charCodeAt(index)) || isDecimalDigit(source.charCodeAt(index))) {
                    throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
                }

                return {
                    type: Token.NumericLiteral,
                    value: parseInt(number, 8),
                    octal: octal,
                    lineNumber: lineNumber,
                    lineStart: lineStart,
                    range: [start, index]
                };
            }

            function scanNumericLiteral() {
                var number, start, ch;

                ch = source[index];
                assert(isDecimalDigit(ch.charCodeAt(0)) || (ch === '.'),
                    'Numeric literal must start with a decimal digit or a decimal point');

                start = index;
                number = '';
                if (ch !== '.') {
                    number = source[index++];
                    ch = source[index];

                    // Hex number starts with '0x'.
                    // Octal number starts with '0'.
                    // Octal number in ES6 starts with '0o'.
                    // Binary number in ES6 starts with '0b'.
                    if (number === '0') {
                        if (ch === 'x' || ch === 'X') {
                            ++index;
                            return scanHexLiteral(start);
                        }
                        if (ch === 'b' || ch === 'B') {
                            ++index;
                            return scanBinaryLiteral(start);
                        }
                        if (ch === 'o' || ch === 'O' || isOctalDigit(ch)) {
                            return scanOctalLiteral(ch, start);
                        }
                        // decimal number starts with '0' such as '09' is illegal.
                        if (ch && isDecimalDigit(ch.charCodeAt(0))) {
                            throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
                        }
                    }

                    while (isDecimalDigit(source.charCodeAt(index))) {
                        number += source[index++];
                    }
                    ch = source[index];
                }

                if (ch === '.') {
                    number += source[index++];
                    while (isDecimalDigit(source.charCodeAt(index))) {
                        number += source[index++];
                    }
                    ch = source[index];
                }

                if (ch === 'e' || ch === 'E') {
                    number += source[index++];

                    ch = source[index];
                    if (ch === '+' || ch === '-') {
                        number += source[index++];
                    }
                    if (isDecimalDigit(source.charCodeAt(index))) {
                        while (isDecimalDigit(source.charCodeAt(index))) {
                            number += source[index++];
                        }
                    } else {
                        throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
                    }
                }

                if (isIdentifierStart(source.charCodeAt(index))) {
                    throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
                }

                return {
                    type: Token.NumericLiteral,
                    value: parseFloat(number),
                    lineNumber: lineNumber,
                    lineStart: lineStart,
                    range: [start, index]
                };
            }

            // 7.8.4 String Literals

            function scanStringLiteral() {
                var str = '', quote, start, ch, code, unescaped, restore, octal = false;

                quote = source[index];
                assert((quote === '\'' || quote === '"'),
                    'String literal must starts with a quote');

                start = index;
                ++index;

                while (index < length) {
                    ch = source[index++];

                    if (ch === quote) {
                        quote = '';
                        break;
                    } else if (ch === '\\') {
                        ch = source[index++];
                        if (!ch || !isLineTerminator(ch.charCodeAt(0))) {
                            switch (ch) {
                                case 'n':
                                    str += '\n';
                                    break;
                                case 'r':
                                    str += '\r';
                                    break;
                                case 't':
                                    str += '\t';
                                    break;
                                case 'u':
                                case 'x':
                                    if (source[index] === '{') {
                                        ++index;
                                        str += scanUnicodeCodePointEscape();
                                    } else {
                                        restore = index;
                                        unescaped = scanHexEscape(ch);
                                        if (unescaped) {
                                            str += unescaped;
                                        } else {
                                            index = restore;
                                            str += ch;
                                        }
                                    }
                                    break;
                                case 'b':
                                    str += '\b';
                                    break;
                                case 'f':
                                    str += '\f';
                                    break;
                                case 'v':
                                    str += '\x0B';
                                    break;

                                default:
                                    if (isOctalDigit(ch)) {
                                        code = '01234567'.indexOf(ch);

                                        // \0 is not octal escape sequence
                                        if (code !== 0) {
                                            octal = true;
                                        }

                                        /* istanbul ignore else */
                                        if (index < length && isOctalDigit(source[index])) {
                                            octal = true;
                                            code = code * 8 + '01234567'.indexOf(source[index++]);

                                            // 3 digits are only allowed when string starts
                                            // with 0, 1, 2, 3
                                            if ('0123'.indexOf(ch) >= 0 &&
                                                index < length &&
                                                isOctalDigit(source[index])) {
                                                code = code * 8 + '01234567'.indexOf(source[index++]);
                                            }
                                        }
                                        str += String.fromCharCode(code);
                                    } else {
                                        str += ch;
                                    }
                                    break;
                            }
                        } else {
                            ++lineNumber;
                            if (ch === '\r' && source[index] === '\n') {
                                ++index;
                            }
                            lineStart = index;
                        }
                    } else if (isLineTerminator(ch.charCodeAt(0))) {
                        break;
                    } else {
                        str += ch;
                    }
                }

                if (quote !== '') {
                    throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
                }

                return {
                    type: Token.StringLiteral,
                    value: str,
                    octal: octal,
                    lineNumber: lineNumber,
                    lineStart: lineStart,
                    range: [start, index]
                };
            }

            function scanTemplate() {
                var cooked = '', ch, start, terminated, tail, restore, unescaped, code, octal;

                terminated = false;
                tail = false;
                start = index;

                ++index;

                while (index < length) {
                    ch = source[index++];
                    if (ch === '`') {
                        tail = true;
                        terminated = true;
                        break;
                    } else if (ch === '$') {
                        if (source[index] === '{') {
                            ++index;
                            terminated = true;
                            break;
                        }
                        cooked += ch;
                    } else if (ch === '\\') {
                        ch = source[index++];
                        if (!isLineTerminator(ch.charCodeAt(0))) {
                            switch (ch) {
                                case 'n':
                                    cooked += '\n';
                                    break;
                                case 'r':
                                    cooked += '\r';
                                    break;
                                case 't':
                                    cooked += '\t';
                                    break;
                                case 'u':
                                case 'x':
                                    if (source[index] === '{') {
                                        ++index;
                                        cooked += scanUnicodeCodePointEscape();
                                    } else {
                                        restore = index;
                                        unescaped = scanHexEscape(ch);
                                        if (unescaped) {
                                            cooked += unescaped;
                                        } else {
                                            index = restore;
                                            cooked += ch;
                                        }
                                    }
                                    break;
                                case 'b':
                                    cooked += '\b';
                                    break;
                                case 'f':
                                    cooked += '\f';
                                    break;
                                case 'v':
                                    cooked += '\v';
                                    break;

                                default:
                                    if (isOctalDigit(ch)) {
                                        code = '01234567'.indexOf(ch);

                                        // \0 is not octal escape sequence
                                        if (code !== 0) {
                                            octal = true;
                                        }

                                        /* istanbul ignore else */
                                        if (index < length && isOctalDigit(source[index])) {
                                            octal = true;
                                            code = code * 8 + '01234567'.indexOf(source[index++]);

                                            // 3 digits are only allowed when string starts
                                            // with 0, 1, 2, 3
                                            if ('0123'.indexOf(ch) >= 0 &&
                                                index < length &&
                                                isOctalDigit(source[index])) {
                                                code = code * 8 + '01234567'.indexOf(source[index++]);
                                            }
                                        }
                                        cooked += String.fromCharCode(code);
                                    } else {
                                        cooked += ch;
                                    }
                                    break;
                            }
                        } else {
                            ++lineNumber;
                            if (ch === '\r' && source[index] === '\n') {
                                ++index;
                            }
                            lineStart = index;
                        }
                    } else if (isLineTerminator(ch.charCodeAt(0))) {
                        ++lineNumber;
                        if (ch === '\r' && source[index] === '\n') {
                            ++index;
                        }
                        lineStart = index;
                        cooked += '\n';
                    } else {
                        cooked += ch;
                    }
                }

                if (!terminated) {
                    throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
                }

                return {
                    type: Token.Template,
                    value: {
                        cooked: cooked,
                        raw: source.slice(start + 1, index - ((tail) ? 1 : 2))
                    },
                    tail: tail,
                    octal: octal,
                    lineNumber: lineNumber,
                    lineStart: lineStart,
                    range: [start, index]
                };
            }

            function scanTemplateElement(option) {
                var startsWith, template;

                lookahead = null;
                skipComment();

                startsWith = (option.head) ? '`' : '}';

                if (source[index] !== startsWith) {
                    throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
                }

                template = scanTemplate();

                peek();

                return template;
            }

            function testRegExp(pattern, flags) {
                var tmp = pattern,
                    value;

                if (flags.indexOf('u') >= 0) {
                    // Replace each astral symbol and every Unicode code point
                    // escape sequence with a single ASCII symbol to avoid throwing on
                    // regular expressions that are only valid in combination with the
                    // `/u` flag.
                    // Note: replacing with the ASCII symbol `x` might cause false
                    // negatives in unlikely scenarios. For example, `[\u{61}-b]` is a
                    // perfectly valid pattern that is equivalent to `[a-b]`, but it
                    // would be replaced by `[x-b]` which throws an error.
                    tmp = tmp
                        .replace(/\\u\{([0-9a-fA-F]+)\}/g, function ($0, $1) {
                            if (parseInt($1, 16) <= 0x10FFFF) {
                                return 'x';
                            }
                            throwError({}, Messages.InvalidRegExp);
                        })
                        .replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, 'x');
                }

                // First, detect invalid regular expressions.
                try {
                    value = new RegExp(tmp);
                } catch (e) {
                    throwError({}, Messages.InvalidRegExp);
                }

                // Return a regular expression object for this pattern-flag pair, or
                // `null` in case the current environment doesn't support the flags it
                // uses.
                try {
                    return new RegExp(pattern, flags);
                } catch (exception) {
                    return null;
                }
            }

            function scanRegExpBody() {
                var ch, str, classMarker, terminated, body;

                ch = source[index];
                assert(ch === '/', 'Regular expression literal must start with a slash');
                str = source[index++];

                classMarker = false;
                terminated = false;
                while (index < length) {
                    ch = source[index++];
                    str += ch;
                    if (ch === '\\') {
                        ch = source[index++];
                        // ECMA-262 7.8.5
                        if (isLineTerminator(ch.charCodeAt(0))) {
                            throwError({}, Messages.UnterminatedRegExp);
                        }
                        str += ch;
                    } else if (isLineTerminator(ch.charCodeAt(0))) {
                        throwError({}, Messages.UnterminatedRegExp);
                    } else if (classMarker) {
                        if (ch === ']') {
                            classMarker = false;
                        }
                    } else {
                        if (ch === '/') {
                            terminated = true;
                            break;
                        } else if (ch === '[') {
                            classMarker = true;
                        }
                    }
                }

                if (!terminated) {
                    throwError({}, Messages.UnterminatedRegExp);
                }

                // Exclude leading and trailing slash.
                body = str.substr(1, str.length - 2);
                return {
                    value: body,
                    literal: str
                };
            }

            function scanRegExpFlags() {
                var ch, str, flags, restore;

                str = '';
                flags = '';
                while (index < length) {
                    ch = source[index];
                    if (!isIdentifierPart(ch.charCodeAt(0))) {
                        break;
                    }

                    ++index;
                    if (ch === '\\' && index < length) {
                        ch = source[index];
                        if (ch === 'u') {
                            ++index;
                            restore = index;
                            ch = scanHexEscape('u');
                            if (ch) {
                                flags += ch;
                                for (str += '\\u'; restore < index; ++restore) {
                                    str += source[restore];
                                }
                            } else {
                                index = restore;
                                flags += 'u';
                                str += '\\u';
                            }
                            throwErrorTolerant({}, Messages.UnexpectedToken, 'ILLEGAL');
                        } else {
                            str += '\\';
                            throwErrorTolerant({}, Messages.UnexpectedToken, 'ILLEGAL');
                        }
                    } else {
                        flags += ch;
                        str += ch;
                    }
                }

                return {
                    value: flags,
                    literal: str
                };
            }

            function scanRegExp() {
                var start, body, flags, value;

                lookahead = null;
                skipComment();
                start = index;

                body = scanRegExpBody();
                flags = scanRegExpFlags();
                value = testRegExp(body.value, flags.value);

                if (extra.tokenize) {
                    return {
                        type: Token.RegularExpression,
                        value: value,
                        regex: {
                            pattern: body.value,
                            flags: flags.value
                        },
                        lineNumber: lineNumber,
                        lineStart: lineStart,
                        range: [start, index]
                    };
                }

                return {
                    literal: body.literal + flags.literal,
                    value: value,
                    regex: {
                        pattern: body.value,
                        flags: flags.value
                    },
                    range: [start, index]
                };
            }

            function isIdentifierName(token) {
                return token.type === Token.Identifier ||
                    token.type === Token.Keyword ||
                    token.type === Token.BooleanLiteral ||
                    token.type === Token.NullLiteral;
            }

            function advanceSlash() {
                var prevToken,
                    checkToken;
                // Using the following algorithm:
                // https://github.com/mozilla/sweet.js/wiki/design
                prevToken = extra.tokens[extra.tokens.length - 1];
                if (!prevToken) {
                    // Nothing before that: it cannot be a division.
                    return scanRegExp();
                }
                if (prevToken.type === 'Punctuator') {
                    if (prevToken.value === ')') {
                        checkToken = extra.tokens[extra.openParenToken - 1];
                        if (checkToken &&
                            checkToken.type === 'Keyword' &&
                            (checkToken.value === 'if' ||
                                checkToken.value === 'while' ||
                                checkToken.value === 'for' ||
                                checkToken.value === 'with')) {
                            return scanRegExp();
                        }
                        return scanPunctuator();
                    }
                    if (prevToken.value === '}') {
                        // Dividing a function by anything makes little sense,
                        // but we have to check for that.
                        if (extra.tokens[extra.openCurlyToken - 3] &&
                            extra.tokens[extra.openCurlyToken - 3].type === 'Keyword') {
                            // Anonymous function.
                            checkToken = extra.tokens[extra.openCurlyToken - 4];
                            if (!checkToken) {
                                return scanPunctuator();
                            }
                        } else if (extra.tokens[extra.openCurlyToken - 4] &&
                            extra.tokens[extra.openCurlyToken - 4].type === 'Keyword') {
                            // Named function.
                            checkToken = extra.tokens[extra.openCurlyToken - 5];
                            if (!checkToken) {
                                return scanRegExp();
                            }
                        } else {
                            return scanPunctuator();
                        }
                        // checkToken determines whether the function is
                        // a declaration or an expression.
                        if (FnExprTokens.indexOf(checkToken.value) >= 0) {
                            // It is an expression.
                            return scanPunctuator();
                        }
                        // It is a declaration.
                        return scanRegExp();
                    }
                    return scanRegExp();
                }
                if (prevToken.type === 'Keyword' && prevToken.value !== 'this') {
                    return scanRegExp();
                }
                return scanPunctuator();
            }

            function advance() {
                var ch;

                if (!state.inJSXChild) {
                    skipComment();
                }

                if (index >= length) {
                    return {
                        type: Token.EOF,
                        lineNumber: lineNumber,
                        lineStart: lineStart,
                        range: [index, index]
                    };
                }

                if (state.inJSXChild) {
                    return advanceJSXChild();
                }

                ch = source.charCodeAt(index);

                // Very common: ( and ) and ;
                if (ch === 40 || ch === 41 || ch === 58) {
                    return scanPunctuator();
                }

                // String literal starts with single quote (#39) or double quote (#34).
                if (ch === 39 || ch === 34) {
                    if (state.inJSXTag) {
                        return scanJSXStringLiteral();
                    }
                    return scanStringLiteral();
                }

                if (state.inJSXTag && isJSXIdentifierStart(ch)) {
                    return scanJSXIdentifier();
                }

                if (ch === 96) {
                    return scanTemplate();
                }
                if (isIdentifierStart(ch)) {
                    return scanIdentifier();
                }

                // Dot (.) char #46 can also start a floating-point number, hence the need
                // to check the next character.
                if (ch === 46) {
                    if (isDecimalDigit(source.charCodeAt(index + 1))) {
                        return scanNumericLiteral();
                    }
                    return scanPunctuator();
                }

                if (isDecimalDigit(ch)) {
                    return scanNumericLiteral();
                }

                // Slash (/) char #47 can also start a regex.
                if (extra.tokenize && ch === 47) {
                    return advanceSlash();
                }

                return scanPunctuator();
            }

            function lex() {
                var token;

                token = lookahead;
                index = token.range[1];
                lineNumber = token.lineNumber;
                lineStart = token.lineStart;

                lookahead = advance();

                index = token.range[1];
                lineNumber = token.lineNumber;
                lineStart = token.lineStart;

                return token;
            }

            function peek() {
                var pos, line, start;

                pos = index;
                line = lineNumber;
                start = lineStart;
                lookahead = advance();
                index = pos;
                lineNumber = line;
                lineStart = start;
            }

            function lookahead2() {
                var adv, pos, line, start, result;

                // If we are collecting the tokens, don't grab the next one yet.
                /* istanbul ignore next */
                adv = (typeof extra.advance === 'function') ? extra.advance : advance;

                pos = index;
                line = lineNumber;
                start = lineStart;

                // Scan for the next immediate token.
                /* istanbul ignore if */
                if (lookahead === null) {
                    lookahead = adv();
                }
                index = lookahead.range[1];
                lineNumber = lookahead.lineNumber;
                lineStart = lookahead.lineStart;

                // Grab the token right after.
                result = adv();
                index = pos;
                lineNumber = line;
                lineStart = start;

                return result;
            }

            function rewind(token) {
                index = token.range[0];
                lineNumber = token.lineNumber;
                lineStart = token.lineStart;
                lookahead = token;
            }

            function markerCreate() {
                if (!extra.loc && !extra.range) {
                    return undefined;
                }
                skipComment();
                return {offset: index, line: lineNumber, col: index - lineStart};
            }

            function markerCreatePreserveWhitespace() {
                if (!extra.loc && !extra.range) {
                    return undefined;
                }
                return {offset: index, line: lineNumber, col: index - lineStart};
            }

            function processComment(node) {
                var lastChild,
                    trailingComments,
                    bottomRight = extra.bottomRightStack,
                    last = bottomRight[bottomRight.length - 1];

                if (node.type === Syntax.Program) {
                    /* istanbul ignore else */
                    if (node.body.length > 0) {
                        return;
                    }
                }

                if (extra.trailingComments.length > 0) {
                    if (extra.trailingComments[0].range[0] >= node.range[1]) {
                        trailingComments = extra.trailingComments;
                        extra.trailingComments = [];
                    } else {
                        extra.trailingComments.length = 0;
                    }
                } else {
                    if (last && last.trailingComments && last.trailingComments[0].range[0] >= node.range[1]) {
                        trailingComments = last.trailingComments;
                        delete last.trailingComments;
                    }
                }

                // Eating the stack.
                if (last) {
                    while (last && last.range[0] >= node.range[0]) {
                        lastChild = last;
                        last = bottomRight.pop();
                    }
                }

                if (lastChild) {
                    if (lastChild.leadingComments && lastChild.leadingComments[lastChild.leadingComments.length - 1].range[1] <= node.range[0]) {
                        node.leadingComments = lastChild.leadingComments;
                        delete lastChild.leadingComments;
                    }
                } else if (extra.leadingComments.length > 0 && extra.leadingComments[extra.leadingComments.length - 1].range[1] <= node.range[0]) {
                    node.leadingComments = extra.leadingComments;
                    extra.leadingComments = [];
                }

                if (trailingComments) {
                    node.trailingComments = trailingComments;
                }

                bottomRight.push(node);
            }

            function markerApply(marker, node) {
                if (extra.range) {
                    node.range = [marker.offset, index];
                }
                if (extra.loc) {
                    node.loc = {
                        start: {
                            line: marker.line,
                            column: marker.col
                        },
                        end: {
                            line: lineNumber,
                            column: index - lineStart
                        }
                    };
                    node = delegate.postProcess(node);
                }
                if (extra.attachComment) {
                    processComment(node);
                }
                return node;
            }

            SyntaxTreeDelegate = {

                name: 'SyntaxTree',

                postProcess: function (node) {
                    return node;
                },

                createArrayExpression: function (elements) {
                    return {
                        type: Syntax.ArrayExpression,
                        elements: elements
                    };
                },

                createAssignmentExpression: function (operator, left, right) {
                    return {
                        type: Syntax.AssignmentExpression,
                        operator: operator,
                        left: left,
                        right: right
                    };
                },

                createBinaryExpression: function (operator, left, right) {
                    var type = (operator === '||' || operator === '&&') ? Syntax.LogicalExpression :
                        Syntax.BinaryExpression;
                    return {
                        type: type,
                        operator: operator,
                        left: left,
                        right: right
                    };
                },

                createBlockStatement: function (body) {
                    return {
                        type: Syntax.BlockStatement,
                        body: body
                    };
                },

                createBreakStatement: function (label) {
                    return {
                        type: Syntax.BreakStatement,
                        label: label
                    };
                },

                createCallExpression: function (callee, args) {
                    return {
                        type: Syntax.CallExpression,
                        callee: callee,
                        'arguments': args
                    };
                },

                createCatchClause: function (param, body) {
                    return {
                        type: Syntax.CatchClause,
                        param: param,
                        body: body
                    };
                },

                createConditionalExpression: function (test, consequent, alternate) {
                    return {
                        type: Syntax.ConditionalExpression,
                        test: test,
                        consequent: consequent,
                        alternate: alternate
                    };
                },

                createContinueStatement: function (label) {
                    return {
                        type: Syntax.ContinueStatement,
                        label: label
                    };
                },

                createDebuggerStatement: function () {
                    return {
                        type: Syntax.DebuggerStatement
                    };
                },

                createDoWhileStatement: function (body, test) {
                    return {
                        type: Syntax.DoWhileStatement,
                        body: body,
                        test: test
                    };
                },

                createEmptyStatement: function () {
                    return {
                        type: Syntax.EmptyStatement
                    };
                },

                createExpressionStatement: function (expression) {
                    return {
                        type: Syntax.ExpressionStatement,
                        expression: expression
                    };
                },

                createForStatement: function (init, test, update, body) {
                    return {
                        type: Syntax.ForStatement,
                        init: init,
                        test: test,
                        update: update,
                        body: body
                    };
                },

                createForInStatement: function (left, right, body) {
                    return {
                        type: Syntax.ForInStatement,
                        left: left,
                        right: right,
                        body: body,
                        each: false
                    };
                },

                createForOfStatement: function (left, right, body) {
                    return {
                        type: Syntax.ForOfStatement,
                        left: left,
                        right: right,
                        body: body
                    };
                },

                createFunctionDeclaration: function (id, params, defaults, body, rest, generator, expression,
                                                     isAsync, returnType, typeParameters) {
                    var funDecl = {
                        type: Syntax.FunctionDeclaration,
                        id: id,
                        params: params,
                        defaults: defaults,
                        body: body,
                        rest: rest,
                        generator: generator,
                        expression: expression,
                        returnType: returnType,
                        typeParameters: typeParameters
                    };

                    if (isAsync) {
                        funDecl.async = true;
                    }

                    return funDecl;
                },

                createFunctionExpression: function (id, params, defaults, body, rest, generator, expression,
                                                    isAsync, returnType, typeParameters) {
                    var funExpr = {
                        type: Syntax.FunctionExpression,
                        id: id,
                        params: params,
                        defaults: defaults,
                        body: body,
                        rest: rest,
                        generator: generator,
                        expression: expression,
                        returnType: returnType,
                        typeParameters: typeParameters
                    };

                    if (isAsync) {
                        funExpr.async = true;
                    }

                    return funExpr;
                },

                createIdentifier: function (name) {
                    return {
                        type: Syntax.Identifier,
                        name: name,
                        // Only here to initialize the shape of the object to ensure
                        // that the 'typeAnnotation' key is ordered before others that
                        // are added later (like 'loc' and 'range'). This just helps
                        // keep the shape of Identifier nodes consistent with everything
                        // else.
                        typeAnnotation: undefined,
                        optional: undefined
                    };
                },

                createTypeAnnotation: function (typeAnnotation) {
                    return {
                        type: Syntax.TypeAnnotation,
                        typeAnnotation: typeAnnotation
                    };
                },

                createTypeCast: function (expression, typeAnnotation) {
                    return {
                        type: Syntax.TypeCastExpression,
                        expression: expression,
                        typeAnnotation: typeAnnotation
                    };
                },

                createFunctionTypeAnnotation: function (params, returnType, rest, typeParameters) {
                    return {
                        type: Syntax.FunctionTypeAnnotation,
                        params: params,
                        returnType: returnType,
                        rest: rest,
                        typeParameters: typeParameters
                    };
                },

                createFunctionTypeParam: function (name, typeAnnotation, optional) {
                    return {
                        type: Syntax.FunctionTypeParam,
                        name: name,
                        typeAnnotation: typeAnnotation,
                        optional: optional
                    };
                },

                createNullableTypeAnnotation: function (typeAnnotation) {
                    return {
                        type: Syntax.NullableTypeAnnotation,
                        typeAnnotation: typeAnnotation
                    };
                },

                createArrayTypeAnnotation: function (elementType) {
                    return {
                        type: Syntax.ArrayTypeAnnotation,
                        elementType: elementType
                    };
                },

                createGenericTypeAnnotation: function (id, typeParameters) {
                    return {
                        type: Syntax.GenericTypeAnnotation,
                        id: id,
                        typeParameters: typeParameters
                    };
                },

                createQualifiedTypeIdentifier: function (qualification, id) {
                    return {
                        type: Syntax.QualifiedTypeIdentifier,
                        qualification: qualification,
                        id: id
                    };
                },

                createTypeParameterDeclaration: function (params) {
                    return {
                        type: Syntax.TypeParameterDeclaration,
                        params: params
                    };
                },

                createTypeParameterInstantiation: function (params) {
                    return {
                        type: Syntax.TypeParameterInstantiation,
                        params: params
                    };
                },

                createAnyTypeAnnotation: function () {
                    return {
                        type: Syntax.AnyTypeAnnotation
                    };
                },

                createBooleanTypeAnnotation: function () {
                    return {
                        type: Syntax.BooleanTypeAnnotation
                    };
                },

                createNumberTypeAnnotation: function () {
                    return {
                        type: Syntax.NumberTypeAnnotation
                    };
                },

                createStringTypeAnnotation: function () {
                    return {
                        type: Syntax.StringTypeAnnotation
                    };
                },

                createStringLiteralTypeAnnotation: function (token) {
                    return {
                        type: Syntax.StringLiteralTypeAnnotation,
                        value: token.value,
                        raw: source.slice(token.range[0], token.range[1])
                    };
                },

                createVoidTypeAnnotation: function () {
                    return {
                        type: Syntax.VoidTypeAnnotation
                    };
                },

                createTypeofTypeAnnotation: function (argument) {
                    return {
                        type: Syntax.TypeofTypeAnnotation,
                        argument: argument
                    };
                },

                createTupleTypeAnnotation: function (types) {
                    return {
                        type: Syntax.TupleTypeAnnotation,
                        types: types
                    };
                },

                createObjectTypeAnnotation: function (properties, indexers, callProperties) {
                    return {
                        type: Syntax.ObjectTypeAnnotation,
                        properties: properties,
                        indexers: indexers,
                        callProperties: callProperties
                    };
                },

                createObjectTypeIndexer: function (id, key, value, isStatic) {
                    return {
                        type: Syntax.ObjectTypeIndexer,
                        id: id,
                        key: key,
                        value: value,
                        "static": isStatic
                    };
                },

                createObjectTypeCallProperty: function (value, isStatic) {
                    return {
                        type: Syntax.ObjectTypeCallProperty,
                        value: value,
                        "static": isStatic
                    };
                },

                createObjectTypeProperty: function (key, value, optional, isStatic) {
                    return {
                        type: Syntax.ObjectTypeProperty,
                        key: key,
                        value: value,
                        optional: optional,
                        "static": isStatic
                    };
                },

                createUnionTypeAnnotation: function (types) {
                    return {
                        type: Syntax.UnionTypeAnnotation,
                        types: types
                    };
                },

                createIntersectionTypeAnnotation: function (types) {
                    return {
                        type: Syntax.IntersectionTypeAnnotation,
                        types: types
                    };
                },

                createTypeAlias: function (id, typeParameters, right) {
                    return {
                        type: Syntax.TypeAlias,
                        id: id,
                        typeParameters: typeParameters,
                        right: right
                    };
                },

                createInterface: function (id, typeParameters, body, extended) {
                    return {
                        type: Syntax.InterfaceDeclaration,
                        id: id,
                        typeParameters: typeParameters,
                        body: body,
                        "extends": extended
                    };
                },

                createInterfaceExtends: function (id, typeParameters) {
                    return {
                        type: Syntax.InterfaceExtends,
                        id: id,
                        typeParameters: typeParameters
                    };
                },

                createDeclareFunction: function (id) {
                    return {
                        type: Syntax.DeclareFunction,
                        id: id
                    };
                },

                createDeclareVariable: function (id) {
                    return {
                        type: Syntax.DeclareVariable,
                        id: id
                    };
                },

                createDeclareModule: function (id, body) {
                    return {
                        type: Syntax.DeclareModule,
                        id: id,
                        body: body
                    };
                },

                createJSXAttribute: function (name, value) {
                    return {
                        type: Syntax.JSXAttribute,
                        name: name,
                        value: value || null
                    };
                },

                createJSXSpreadAttribute: function (argument) {
                    return {
                        type: Syntax.JSXSpreadAttribute,
                        argument: argument
                    };
                },

                createJSXIdentifier: function (name) {
                    return {
                        type: Syntax.JSXIdentifier,
                        name: name
                    };
                },

                createJSXNamespacedName: function (namespace, name) {
                    return {
                        type: Syntax.JSXNamespacedName,
                        namespace: namespace,
                        name: name
                    };
                },

                createJSXMemberExpression: function (object, property) {
                    return {
                        type: Syntax.JSXMemberExpression,
                        object: object,
                        property: property
                    };
                },

                createJSXElement: function (openingElement, closingElement, children) {
                    return {
                        type: Syntax.JSXElement,
                        openingElement: openingElement,
                        closingElement: closingElement,
                        children: children
                    };
                },

                createJSXEmptyExpression: function () {
                    return {
                        type: Syntax.JSXEmptyExpression
                    };
                },

                createJSXExpressionContainer: function (expression) {
                    return {
                        type: Syntax.JSXExpressionContainer,
                        expression: expression
                    };
                },

                createJSXOpeningElement: function (name, attributes, selfClosing) {
                    return {
                        type: Syntax.JSXOpeningElement,
                        name: name,
                        selfClosing: selfClosing,
                        attributes: attributes
                    };
                },

                createJSXClosingElement: function (name) {
                    return {
                        type: Syntax.JSXClosingElement,
                        name: name
                    };
                },

                createIfStatement: function (test, consequent, alternate) {
                    return {
                        type: Syntax.IfStatement,
                        test: test,
                        consequent: consequent,
                        alternate: alternate
                    };
                },

                createLabeledStatement: function (label, body) {
                    return {
                        type: Syntax.LabeledStatement,
                        label: label,
                        body: body
                    };
                },

                createLiteral: function (token) {
                    var object = {
                        type: Syntax.Literal,
                        value: token.value,
                        raw: source.slice(token.range[0], token.range[1])
                    };
                    if (token.regex) {
                        object.regex = token.regex;
                    }
                    return object;
                },

                createMemberExpression: function (accessor, object, property) {
                    return {
                        type: Syntax.MemberExpression,
                        computed: accessor === '[',
                        object: object,
                        property: property
                    };
                },

                createNewExpression: function (callee, args) {
                    return {
                        type: Syntax.NewExpression,
                        callee: callee,
                        'arguments': args
                    };
                },

                createObjectExpression: function (properties) {
                    return {
                        type: Syntax.ObjectExpression,
                        properties: properties
                    };
                },

                createPostfixExpression: function (operator, argument) {
                    return {
                        type: Syntax.UpdateExpression,
                        operator: operator,
                        argument: argument,
                        prefix: false
                    };
                },

                createProgram: function (body) {
                    return {
                        type: Syntax.Program,
                        body: body
                    };
                },

                createProperty: function (kind, key, value, method, shorthand, computed) {
                    return {
                        type: Syntax.Property,
                        key: key,
                        value: value,
                        kind: kind,
                        method: method,
                        shorthand: shorthand,
                        computed: computed
                    };
                },

                createReturnStatement: function (argument) {
                    return {
                        type: Syntax.ReturnStatement,
                        argument: argument
                    };
                },

                createSequenceExpression: function (expressions) {
                    return {
                        type: Syntax.SequenceExpression,
                        expressions: expressions
                    };
                },

                createSwitchCase: function (test, consequent) {
                    return {
                        type: Syntax.SwitchCase,
                        test: test,
                        consequent: consequent
                    };
                },

                createSwitchStatement: function (discriminant, cases) {
                    return {
                        type: Syntax.SwitchStatement,
                        discriminant: discriminant,
                        cases: cases
                    };
                },

                createThisExpression: function () {
                    return {
                        type: Syntax.ThisExpression
                    };
                },

                createThrowStatement: function (argument) {
                    return {
                        type: Syntax.ThrowStatement,
                        argument: argument
                    };
                },

                createTryStatement: function (block, guardedHandlers, handlers, finalizer) {
                    return {
                        type: Syntax.TryStatement,
                        block: block,
                        guardedHandlers: guardedHandlers,
                        handlers: handlers,
                        finalizer: finalizer
                    };
                },

                createUnaryExpression: function (operator, argument) {
                    if (operator === '++' || operator === '--') {
                        return {
                            type: Syntax.UpdateExpression,
                            operator: operator,
                            argument: argument,
                            prefix: true
                        };
                    }
                    return {
                        type: Syntax.UnaryExpression,
                        operator: operator,
                        argument: argument,
                        prefix: true
                    };
                },

                createVariableDeclaration: function (declarations, kind) {
                    return {
                        type: Syntax.VariableDeclaration,
                        declarations: declarations,
                        kind: kind
                    };
                },

                createVariableDeclarator: function (id, init) {
                    return {
                        type: Syntax.VariableDeclarator,
                        id: id,
                        init: init
                    };
                },

                createWhileStatement: function (test, body) {
                    return {
                        type: Syntax.WhileStatement,
                        test: test,
                        body: body
                    };
                },

                createWithStatement: function (object, body) {
                    return {
                        type: Syntax.WithStatement,
                        object: object,
                        body: body
                    };
                },

                createTemplateElement: function (value, tail) {
                    return {
                        type: Syntax.TemplateElement,
                        value: value,
                        tail: tail
                    };
                },

                createTemplateLiteral: function (quasis, expressions) {
                    return {
                        type: Syntax.TemplateLiteral,
                        quasis: quasis,
                        expressions: expressions
                    };
                },

                createSpreadElement: function (argument) {
                    return {
                        type: Syntax.SpreadElement,
                        argument: argument
                    };
                },

                createSpreadProperty: function (argument) {
                    return {
                        type: Syntax.SpreadProperty,
                        argument: argument
                    };
                },

                createTaggedTemplateExpression: function (tag, quasi) {
                    return {
                        type: Syntax.TaggedTemplateExpression,
                        tag: tag,
                        quasi: quasi
                    };
                },

                createArrowFunctionExpression: function (params, defaults, body, rest, expression, isAsync) {
                    var arrowExpr = {
                        type: Syntax.ArrowFunctionExpression,
                        id: null,
                        params: params,
                        defaults: defaults,
                        body: body,
                        rest: rest,
                        generator: false,
                        expression: expression
                    };

                    if (isAsync) {
                        arrowExpr.async = true;
                    }

                    return arrowExpr;
                },

                createMethodDefinition: function (propertyType, kind, key, value, computed) {
                    return {
                        type: Syntax.MethodDefinition,
                        key: key,
                        value: value,
                        kind: kind,
                        'static': propertyType === ClassPropertyType["static"],
                        computed: computed
                    };
                },

                createClassProperty: function (key, typeAnnotation, computed, isStatic) {
                    return {
                        type: Syntax.ClassProperty,
                        key: key,
                        typeAnnotation: typeAnnotation,
                        computed: computed,
                        "static": isStatic
                    };
                },

                createClassBody: function (body) {
                    return {
                        type: Syntax.ClassBody,
                        body: body
                    };
                },

                createClassImplements: function (id, typeParameters) {
                    return {
                        type: Syntax.ClassImplements,
                        id: id,
                        typeParameters: typeParameters
                    };
                },

                createClassExpression: function (id, superClass, body, typeParameters, superTypeParameters, implemented) {
                    return {
                        type: Syntax.ClassExpression,
                        id: id,
                        superClass: superClass,
                        body: body,
                        typeParameters: typeParameters,
                        superTypeParameters: superTypeParameters,
                        "implements": implemented
                    };
                },

                createClassDeclaration: function (id, superClass, body, typeParameters, superTypeParameters, implemented) {
                    return {
                        type: Syntax.ClassDeclaration,
                        id: id,
                        superClass: superClass,
                        body: body,
                        typeParameters: typeParameters,
                        superTypeParameters: superTypeParameters,
                        "implements": implemented
                    };
                },

                createModuleSpecifier: function (token) {
                    return {
                        type: Syntax.ModuleSpecifier,
                        value: token.value,
                        raw: source.slice(token.range[0], token.range[1])
                    };
                },

                createExportSpecifier: function (id, name) {
                    return {
                        type: Syntax.ExportSpecifier,
                        id: id,
                        name: name
                    };
                },

                createExportBatchSpecifier: function () {
                    return {
                        type: Syntax.ExportBatchSpecifier
                    };
                },

                createImportDefaultSpecifier: function (id) {
                    return {
                        type: Syntax.ImportDefaultSpecifier,
                        id: id
                    };
                },

                createImportNamespaceSpecifier: function (id) {
                    return {
                        type: Syntax.ImportNamespaceSpecifier,
                        id: id
                    };
                },

                createExportDeclaration: function (isDefault, declaration, specifiers, src) {
                    return {
                        type: Syntax.ExportDeclaration,
                        'default': !!isDefault,
                        declaration: declaration,
                        specifiers: specifiers,
                        source: src
                    };
                },

                createImportSpecifier: function (id, name) {
                    return {
                        type: Syntax.ImportSpecifier,
                        id: id,
                        name: name
                    };
                },

                createImportDeclaration: function (specifiers, src, isType) {
                    return {
                        type: Syntax.ImportDeclaration,
                        specifiers: specifiers,
                        source: src,
                        isType: isType
                    };
                },

                createYieldExpression: function (argument, dlg) {
                    return {
                        type: Syntax.YieldExpression,
                        argument: argument,
                        delegate: dlg
                    };
                },

                createAwaitExpression: function (argument) {
                    return {
                        type: Syntax.AwaitExpression,
                        argument: argument
                    };
                },

                createComprehensionExpression: function (filter, blocks, body) {
                    return {
                        type: Syntax.ComprehensionExpression,
                        filter: filter,
                        blocks: blocks,
                        body: body
                    };
                }

            };

            // Return true if there is a line terminator before the next token.

            function peekLineTerminator() {
                var pos, line, start, found;

                pos = index;
                line = lineNumber;
                start = lineStart;
                skipComment();
                found = lineNumber !== line;
                index = pos;
                lineNumber = line;
                lineStart = start;

                return found;
            }

            // Throw an exception

            function throwError(token, messageFormat) {
                var error,
                    args = Array.prototype.slice.call(arguments, 2),
                    msg = messageFormat.replace(
                        /%(\d)/g,
                        function (whole, idx) {
                            assert(idx < args.length, 'Message reference must be in range');
                            return args[idx];
                        }
                    );

                if (typeof token.lineNumber === 'number') {
                    error = new Error('Line ' + token.lineNumber + ': ' + msg);
                    error.index = token.range[0];
                    error.lineNumber = token.lineNumber;
                    error.column = token.range[0] - lineStart + 1;
                } else {
                    error = new Error('Line ' + lineNumber + ': ' + msg);
                    error.index = index;
                    error.lineNumber = lineNumber;
                    error.column = index - lineStart + 1;
                }

                error.description = msg;
                throw error;
            }

            function throwErrorTolerant() {
                try {
                    throwError.apply(null, arguments);
                } catch (e) {
                    if (extra.errors) {
                        extra.errors.push(e);
                    } else {
                        throw e;
                    }
                }
            }


            // Throw an exception because of the token.

            function throwUnexpected(token) {
                if (token.type === Token.EOF) {
                    throwError(token, Messages.UnexpectedEOS);
                }

                if (token.type === Token.NumericLiteral) {
                    throwError(token, Messages.UnexpectedNumber);
                }

                if (token.type === Token.StringLiteral || token.type === Token.JSXText) {
                    throwError(token, Messages.UnexpectedString);
                }

                if (token.type === Token.Identifier) {
                    throwError(token, Messages.UnexpectedIdentifier);
                }

                if (token.type === Token.Keyword) {
                    if (isFutureReservedWord(token.value)) {
                        throwError(token, Messages.UnexpectedReserved);
                    } else if (strict && isStrictModeReservedWord(token.value)) {
                        throwErrorTolerant(token, Messages.StrictReservedWord);
                        return;
                    }
                    throwError(token, Messages.UnexpectedToken, token.value);
                }

                if (token.type === Token.Template) {
                    throwError(token, Messages.UnexpectedTemplate, token.value.raw);
                }

                // BooleanLiteral, NullLiteral, or Punctuator.
                throwError(token, Messages.UnexpectedToken, token.value);
            }

            // Expect the next token to match the specified punctuator.
            // If not, an exception will be thrown.

            function expect(value) {
                var token = lex();
                if (token.type !== Token.Punctuator || token.value !== value) {
                    throwUnexpected(token);
                }
            }

            // Expect the next token to match the specified keyword.
            // If not, an exception will be thrown.

            function expectKeyword(keyword, contextual) {
                var token = lex();
                if (token.type !== (contextual ? Token.Identifier : Token.Keyword) ||
                    token.value !== keyword) {
                    throwUnexpected(token);
                }
            }

            // Expect the next token to match the specified contextual keyword.
            // If not, an exception will be thrown.

            function expectContextualKeyword(keyword) {
                return expectKeyword(keyword, true);
            }

            // Return true if the next token matches the specified punctuator.

            function match(value) {
                return lookahead.type === Token.Punctuator && lookahead.value === value;
            }

            // Return true if the next token matches the specified keyword

            function matchKeyword(keyword, contextual) {
                var expectedType = contextual ? Token.Identifier : Token.Keyword;
                return lookahead.type === expectedType && lookahead.value === keyword;
            }

            // Return true if the next token matches the specified contextual keyword

            function matchContextualKeyword(keyword) {
                return matchKeyword(keyword, true);
            }

            // Return true if the next token is an assignment operator

            function matchAssign() {
                var op;

                if (lookahead.type !== Token.Punctuator) {
                    return false;
                }
                op = lookahead.value;
                return op === '=' ||
                    op === '*=' ||
                    op === '/=' ||
                    op === '%=' ||
                    op === '+=' ||
                    op === '-=' ||
                    op === '<<=' ||
                    op === '>>=' ||
                    op === '>>>=' ||
                    op === '&=' ||
                    op === '^=' ||
                    op === '|=';
            }

            // Note that 'yield' is treated as a keyword in strict mode, but a
            // contextual keyword (identifier) in non-strict mode, so we need to
            // use matchKeyword('yield', false) and matchKeyword('yield', true)
            // (i.e. matchContextualKeyword) appropriately.
            function matchYield() {
                return state.yieldAllowed && matchKeyword('yield', !strict);
            }

            function matchAsync() {
                var backtrackToken = lookahead, matches = false;

                if (matchContextualKeyword('async')) {
                    lex(); // Make sure peekLineTerminator() starts after 'async'.
                    matches = !peekLineTerminator();
                    rewind(backtrackToken); // Revert the lex().
                }

                return matches;
            }

            function matchAwait() {
                return state.awaitAllowed && matchContextualKeyword('await');
            }

            function consumeSemicolon() {
                var line, oldIndex = index, oldLineNumber = lineNumber,
                    oldLineStart = lineStart, oldLookahead = lookahead;

                // Catch the very common case first: immediately a semicolon (char #59).
                if (source.charCodeAt(index) === 59) {
                    lex();
                    return;
                }

                line = lineNumber;
                skipComment();
                if (lineNumber !== line) {
                    index = oldIndex;
                    lineNumber = oldLineNumber;
                    lineStart = oldLineStart;
                    lookahead = oldLookahead;
                    return;
                }

                if (match(';')) {
                    lex();
                    return;
                }

                if (lookahead.type !== Token.EOF && !match('}')) {
                    throwUnexpected(lookahead);
                }
            }

            // Return true if provided expression is LeftHandSideExpression

            function isLeftHandSide(expr) {
                return expr.type === Syntax.Identifier || expr.type === Syntax.MemberExpression;
            }

            function isAssignableLeftHandSide(expr) {
                return isLeftHandSide(expr) || expr.type === Syntax.ObjectPattern || expr.type === Syntax.ArrayPattern;
            }

            // 11.1.4 Array Initialiser

            function parseArrayInitialiser() {
                var elements = [], blocks = [], filter = null, tmp, possiblecomprehension = true,
                    marker = markerCreate();

                expect('[');
                while (!match(']')) {
                    if (lookahead.value === 'for' &&
                        lookahead.type === Token.Keyword) {
                        if (!possiblecomprehension) {
                            throwError({}, Messages.ComprehensionError);
                        }
                        matchKeyword('for');
                        tmp = parseForStatement({ignoreBody: true});
                        tmp.of = tmp.type === Syntax.ForOfStatement;
                        tmp.type = Syntax.ComprehensionBlock;
                        if (tmp.left.kind) { // can't be let or const
                            throwError({}, Messages.ComprehensionError);
                        }
                        blocks.push(tmp);
                    } else if (lookahead.value === 'if' &&
                        lookahead.type === Token.Keyword) {
                        if (!possiblecomprehension) {
                            throwError({}, Messages.ComprehensionError);
                        }
                        expectKeyword('if');
                        expect('(');
                        filter = parseExpression();
                        expect(')');
                    } else if (lookahead.value === ',' &&
                        lookahead.type === Token.Punctuator) {
                        possiblecomprehension = false; // no longer allowed.
                        lex();
                        elements.push(null);
                    } else {
                        tmp = parseSpreadOrAssignmentExpression();
                        elements.push(tmp);
                        if (tmp && tmp.type === Syntax.SpreadElement) {
                            if (!match(']')) {
                                throwError({}, Messages.ElementAfterSpreadElement);
                            }
                        } else if (!(match(']') || matchKeyword('for') || matchKeyword('if'))) {
                            expect(','); // this lexes.
                            possiblecomprehension = false;
                        }
                    }
                }

                expect(']');

                if (filter && !blocks.length) {
                    throwError({}, Messages.ComprehensionRequiresBlock);
                }

                if (blocks.length) {
                    if (elements.length !== 1) {
                        throwError({}, Messages.ComprehensionError);
                    }
                    return markerApply(marker, delegate.createComprehensionExpression(filter, blocks, elements[0]));
                }
                return markerApply(marker, delegate.createArrayExpression(elements));
            }

            // 11.1.5 Object Initialiser

            function parsePropertyFunction(options) {
                var previousStrict, previousYieldAllowed, previousAwaitAllowed,
                    params, defaults, body, marker = markerCreate();

                previousStrict = strict;
                previousYieldAllowed = state.yieldAllowed;
                state.yieldAllowed = options.generator;
                previousAwaitAllowed = state.awaitAllowed;
                state.awaitAllowed = options.async;
                params = options.params || [];
                defaults = options.defaults || [];

                body = parseConciseBody();
                if (options.name && strict && isRestrictedWord(params[0].name)) {
                    throwErrorTolerant(options.name, Messages.StrictParamName);
                }
                strict = previousStrict;
                state.yieldAllowed = previousYieldAllowed;
                state.awaitAllowed = previousAwaitAllowed;

                return markerApply(marker, delegate.createFunctionExpression(
                    null,
                    params,
                    defaults,
                    body,
                    options.rest || null,
                    options.generator,
                    body.type !== Syntax.BlockStatement,
                    options.async,
                    options.returnType,
                    options.typeParameters
                ));
            }


            function parsePropertyMethodFunction(options) {
                var previousStrict, tmp, method;

                previousStrict = strict;
                strict = true;

                tmp = parseParams();

                if (tmp.stricted) {
                    throwErrorTolerant(tmp.stricted, tmp.message);
                }

                method = parsePropertyFunction({
                    params: tmp.params,
                    defaults: tmp.defaults,
                    rest: tmp.rest,
                    generator: options.generator,
                    async: options.async,
                    returnType: tmp.returnType,
                    typeParameters: options.typeParameters
                });

                strict = previousStrict;

                return method;
            }


            function parseObjectPropertyKey() {
                var marker = markerCreate(),
                    token = lex(),
                    propertyKey,
                    result;

                // Note: This function is called only from parseObjectProperty(), where
                // EOF and Punctuator tokens are already filtered out.

                if (token.type === Token.StringLiteral || token.type === Token.NumericLiteral) {
                    if (strict && token.octal) {
                        throwErrorTolerant(token, Messages.StrictOctalLiteral);
                    }
                    return markerApply(marker, delegate.createLiteral(token));
                }

                if (token.type === Token.Punctuator && token.value === '[') {
                    // For computed properties we should skip the [ and ], and
                    // capture in marker only the assignment expression itself.
                    marker = markerCreate();
                    propertyKey = parseAssignmentExpression();
                    result = markerApply(marker, propertyKey);
                    expect(']');
                    return result;
                }

                return markerApply(marker, delegate.createIdentifier(token.value));
            }

            function parseObjectProperty() {
                var token, key, id, param, computed,
                    marker = markerCreate(), returnType, typeParameters;

                token = lookahead;
                computed = (token.value === '[' && token.type === Token.Punctuator);

                if (token.type === Token.Identifier || computed || matchAsync()) {
                    id = parseObjectPropertyKey();

                    if (match(':')) {
                        lex();

                        return markerApply(
                            marker,
                            delegate.createProperty(
                                'init',
                                id,
                                parseAssignmentExpression(),
                                false,
                                false,
                                computed
                            )
                        );
                    }

                    if (match('(') || match('<')) {
                        if (match('<')) {
                            typeParameters = parseTypeParameterDeclaration();
                        }
                        return markerApply(
                            marker,
                            delegate.createProperty(
                                'init',
                                id,
                                parsePropertyMethodFunction({
                                    generator: false,
                                    async: false,
                                    typeParameters: typeParameters
                                }),
                                true,
                                false,
                                computed
                            )
                        );
                    }

                    // Property Assignment: Getter and Setter.

                    if (token.value === 'get') {
                        computed = (lookahead.value === '[');
                        key = parseObjectPropertyKey();

                        expect('(');
                        expect(')');
                        if (match(':')) {
                            returnType = parseTypeAnnotation();
                        }

                        return markerApply(
                            marker,
                            delegate.createProperty(
                                'get',
                                key,
                                parsePropertyFunction({
                                    generator: false,
                                    async: false,
                                    returnType: returnType
                                }),
                                false,
                                false,
                                computed
                            )
                        );
                    }

                    if (token.value === 'set') {
                        computed = (lookahead.value === '[');
                        key = parseObjectPropertyKey();

                        expect('(');
                        token = lookahead;
                        param = [ parseTypeAnnotatableIdentifier() ];
                        expect(')');
                        if (match(':')) {
                            returnType = parseTypeAnnotation();
                        }

                        return markerApply(
                            marker,
                            delegate.createProperty(
                                'set',
                                key,
                                parsePropertyFunction({
                                    params: param,
                                    generator: false,
                                    async: false,
                                    name: token,
                                    returnType: returnType
                                }),
                                false,
                                false,
                                computed
                            )
                        );
                    }

                    if (token.value === 'async') {
                        computed = (lookahead.value === '[');
                        key = parseObjectPropertyKey();

                        if (match('<')) {
                            typeParameters = parseTypeParameterDeclaration();
                        }

                        return markerApply(
                            marker,
                            delegate.createProperty(
                                'init',
                                key,
                                parsePropertyMethodFunction({
                                    generator: false,
                                    async: true,
                                    typeParameters: typeParameters
                                }),
                                true,
                                false,
                                computed
                            )
                        );
                    }

                    if (computed) {
                        // Computed properties can only be used with full notation.
                        throwUnexpected(lookahead);
                    }

                    return markerApply(
                        marker,
                        delegate.createProperty('init', id, id, false, true, false)
                    );
                }

                if (token.type === Token.EOF || token.type === Token.Punctuator) {
                    if (!match('*')) {
                        throwUnexpected(token);
                    }
                    lex();

                    computed = (lookahead.type === Token.Punctuator && lookahead.value === '[');

                    id = parseObjectPropertyKey();

                    if (match('<')) {
                        typeParameters = parseTypeParameterDeclaration();
                    }

                    if (!match('(')) {
                        throwUnexpected(lex());
                    }

                    return markerApply(marker, delegate.createProperty(
                        'init',
                        id,
                        parsePropertyMethodFunction({
                            generator: true,
                            typeParameters: typeParameters
                        }),
                        true,
                        false,
                        computed
                    ));
                }
                key = parseObjectPropertyKey();
                if (match(':')) {
                    lex();
                    return markerApply(marker, delegate.createProperty('init', key, parseAssignmentExpression(), false, false, false));
                }
                if (match('(') || match('<')) {
                    if (match('<')) {
                        typeParameters = parseTypeParameterDeclaration();
                    }
                    return markerApply(marker, delegate.createProperty(
                        'init',
                        key,
                        parsePropertyMethodFunction({
                            generator: false,
                            typeParameters: typeParameters
                        }),
                        true,
                        false,
                        false
                    ));
                }
                throwUnexpected(lex());
            }

            function parseObjectSpreadProperty() {
                var marker = markerCreate();
                expect('...');
                return markerApply(marker, delegate.createSpreadProperty(parseAssignmentExpression()));
            }

            function getFieldName(key) {
                var toString = String;
                if (key.type === Syntax.Identifier) {
                    return key.name;
                }
                return toString(key.value);
            }

            function parseObjectInitialiser() {
                var properties = [], property, name, kind, storedKind, map = new StringMap(),
                    marker = markerCreate(), toString = String;

                expect('{');

                while (!match('}')) {
                    if (match('...')) {
                        property = parseObjectSpreadProperty();
                    } else {
                        property = parseObjectProperty();

                        if (property.key.type === Syntax.Identifier) {
                            name = property.key.name;
                        } else {
                            name = toString(property.key.value);
                        }
                        kind = (property.kind === 'init') ? PropertyKind.Data : (property.kind === 'get') ? PropertyKind.Get : PropertyKind.Set;

                        if (map.has(name)) {
                            storedKind = map.get(name);
                            if (storedKind === PropertyKind.Data) {
                                if (strict && kind === PropertyKind.Data) {
                                    throwErrorTolerant({}, Messages.StrictDuplicateProperty);
                                } else if (kind !== PropertyKind.Data) {
                                    throwErrorTolerant({}, Messages.AccessorDataProperty);
                                }
                            } else {
                                if (kind === PropertyKind.Data) {
                                    throwErrorTolerant({}, Messages.AccessorDataProperty);
                                } else if (storedKind & kind) {
                                    throwErrorTolerant({}, Messages.AccessorGetSet);
                                }
                            }
                            map.set(name, storedKind | kind);
                        } else {
                            map.set(name, kind);
                        }
                    }

                    properties.push(property);

                    if (!match('}')) {
                        expect(',');
                    }
                }

                expect('}');

                return markerApply(marker, delegate.createObjectExpression(properties));
            }

            function parseTemplateElement(option) {
                var marker = markerCreate(),
                    token = scanTemplateElement(option);
                if (strict && token.octal) {
                    throwError(token, Messages.StrictOctalLiteral);
                }
                return markerApply(marker, delegate.createTemplateElement({ raw: token.value.raw, cooked: token.value.cooked }, token.tail));
            }

            function parseTemplateLiteral() {
                var quasi, quasis, expressions, marker = markerCreate();

                quasi = parseTemplateElement({ head: true });
                quasis = [ quasi ];
                expressions = [];

                while (!quasi.tail) {
                    expressions.push(parseExpression());
                    quasi = parseTemplateElement({ head: false });
                    quasis.push(quasi);
                }

                return markerApply(marker, delegate.createTemplateLiteral(quasis, expressions));
            }

            // 11.1.6 The Grouping Operator

            function parseGroupExpression() {
                var expr, marker, typeAnnotation;

                expect('(');

                ++state.parenthesizedCount;

                marker = markerCreate();

                expr = parseExpression();

                if (match(':')) {
                    typeAnnotation = parseTypeAnnotation();
                    expr = markerApply(marker, delegate.createTypeCast(
                        expr,
                        typeAnnotation
                    ));
                }

                expect(')');

                return expr;
            }

            function matchAsyncFuncExprOrDecl() {
                var token;

                if (matchAsync()) {
                    token = lookahead2();
                    if (token.type === Token.Keyword && token.value === 'function') {
                        return true;
                    }
                }

                return false;
            }

            // 11.1 Primary Expressions

            function parsePrimaryExpression() {
                var marker, type, token, expr;

                type = lookahead.type;

                if (type === Token.Identifier) {
                    marker = markerCreate();
                    return markerApply(marker, delegate.createIdentifier(lex().value));
                }

                if (type === Token.StringLiteral || type === Token.NumericLiteral) {
                    if (strict && lookahead.octal) {
                        throwErrorTolerant(lookahead, Messages.StrictOctalLiteral);
                    }
                    marker = markerCreate();
                    return markerApply(marker, delegate.createLiteral(lex()));
                }

                if (type === Token.Keyword) {
                    if (matchKeyword('this')) {
                        marker = markerCreate();
                        lex();
                        return markerApply(marker, delegate.createThisExpression());
                    }

                    if (matchKeyword('function')) {
                        return parseFunctionExpression();
                    }

                    if (matchKeyword('class')) {
                        return parseClassExpression();
                    }

                    if (matchKeyword('super')) {
                        marker = markerCreate();
                        lex();
                        return markerApply(marker, delegate.createIdentifier('super'));
                    }
                }

                if (type === Token.BooleanLiteral) {
                    marker = markerCreate();
                    token = lex();
                    token.value = (token.value === 'true');
                    return markerApply(marker, delegate.createLiteral(token));
                }

                if (type === Token.NullLiteral) {
                    marker = markerCreate();
                    token = lex();
                    token.value = null;
                    return markerApply(marker, delegate.createLiteral(token));
                }

                if (match('[')) {
                    return parseArrayInitialiser();
                }

                if (match('{')) {
                    return parseObjectInitialiser();
                }

                if (match('(')) {
                    return parseGroupExpression();
                }

                if (match('/') || match('/=')) {
                    marker = markerCreate();
                    expr = delegate.createLiteral(scanRegExp());
                    peek();
                    return markerApply(marker, expr);
                }

                if (type === Token.Template) {
                    return parseTemplateLiteral();
                }

                if (match('<')) {
                    return parseJSXElement();
                }

                throwUnexpected(lex());
            }

            // 11.2 Left-Hand-Side Expressions

            function parseArguments() {
                var args = [], arg;

                expect('(');

                if (!match(')')) {
                    while (index < length) {
                        arg = parseSpreadOrAssignmentExpression();
                        args.push(arg);

                        if (match(')')) {
                            break;
                        } else if (arg.type === Syntax.SpreadElement) {
                            throwError({}, Messages.ElementAfterSpreadElement);
                        }

                        expect(',');
                    }
                }

                expect(')');

                return args;
            }

            function parseSpreadOrAssignmentExpression() {
                if (match('...')) {
                    var marker = markerCreate();
                    lex();
                    return markerApply(marker, delegate.createSpreadElement(parseAssignmentExpression()));
                }
                return parseAssignmentExpression();
            }

            function parseNonComputedProperty() {
                var marker = markerCreate(),
                    token = lex();

                if (!isIdentifierName(token)) {
                    throwUnexpected(token);
                }

                return markerApply(marker, delegate.createIdentifier(token.value));
            }

            function parseNonComputedMember() {
                expect('.');

                return parseNonComputedProperty();
            }

            function parseComputedMember() {
                var expr;

                expect('[');

                expr = parseExpression();

                expect(']');

                return expr;
            }

            function parseNewExpression() {
                var callee, args, marker = markerCreate();

                expectKeyword('new');
                callee = parseLeftHandSideExpression();
                args = match('(') ? parseArguments() : [];

                return markerApply(marker, delegate.createNewExpression(callee, args));
            }

            function parseLeftHandSideExpressionAllowCall() {
                var expr, args, marker = markerCreate();

                expr = matchKeyword('new') ? parseNewExpression() : parsePrimaryExpression();

                while (match('.') || match('[') || match('(') || lookahead.type === Token.Template) {
                    if (match('(')) {
                        args = parseArguments();
                        expr = markerApply(marker, delegate.createCallExpression(expr, args));
                    } else if (match('[')) {
                        expr = markerApply(marker, delegate.createMemberExpression('[', expr, parseComputedMember()));
                    } else if (match('.')) {
                        expr = markerApply(marker, delegate.createMemberExpression('.', expr, parseNonComputedMember()));
                    } else {
                        expr = markerApply(marker, delegate.createTaggedTemplateExpression(expr, parseTemplateLiteral()));
                    }
                }

                return expr;
            }

            function parseLeftHandSideExpression() {
                var expr, marker = markerCreate();

                expr = matchKeyword('new') ? parseNewExpression() : parsePrimaryExpression();

                while (match('.') || match('[') || lookahead.type === Token.Template) {
                    if (match('[')) {
                        expr = markerApply(marker, delegate.createMemberExpression('[', expr, parseComputedMember()));
                    } else if (match('.')) {
                        expr = markerApply(marker, delegate.createMemberExpression('.', expr, parseNonComputedMember()));
                    } else {
                        expr = markerApply(marker, delegate.createTaggedTemplateExpression(expr, parseTemplateLiteral()));
                    }
                }

                return expr;
            }

            // 11.3 Postfix Expressions

            function parsePostfixExpression() {
                var marker = markerCreate(),
                    expr = parseLeftHandSideExpressionAllowCall(),
                    token;

                if (lookahead.type !== Token.Punctuator) {
                    return expr;
                }

                if ((match('++') || match('--')) && !peekLineTerminator()) {
                    // 11.3.1, 11.3.2
                    if (strict && expr.type === Syntax.Identifier && isRestrictedWord(expr.name)) {
                        throwErrorTolerant({}, Messages.StrictLHSPostfix);
                    }

                    if (!isLeftHandSide(expr)) {
                        throwError({}, Messages.InvalidLHSInAssignment);
                    }

                    token = lex();
                    expr = markerApply(marker, delegate.createPostfixExpression(token.value, expr));
                }

                return expr;
            }

            // 11.4 Unary Operators

            function parseUnaryExpression() {
                var marker, token, expr;

                if (lookahead.type !== Token.Punctuator && lookahead.type !== Token.Keyword) {
                    return parsePostfixExpression();
                }

                if (match('++') || match('--')) {
                    marker = markerCreate();
                    token = lex();
                    expr = parseUnaryExpression();
                    // 11.4.4, 11.4.5
                    if (strict && expr.type === Syntax.Identifier && isRestrictedWord(expr.name)) {
                        throwErrorTolerant({}, Messages.StrictLHSPrefix);
                    }

                    if (!isLeftHandSide(expr)) {
                        throwError({}, Messages.InvalidLHSInAssignment);
                    }

                    return markerApply(marker, delegate.createUnaryExpression(token.value, expr));
                }

                if (match('+') || match('-') || match('~') || match('!')) {
                    marker = markerCreate();
                    token = lex();
                    expr = parseUnaryExpression();
                    return markerApply(marker, delegate.createUnaryExpression(token.value, expr));
                }

                if (matchKeyword('delete') || matchKeyword('void') || matchKeyword('typeof')) {
                    marker = markerCreate();
                    token = lex();
                    expr = parseUnaryExpression();
                    expr = markerApply(marker, delegate.createUnaryExpression(token.value, expr));
                    if (strict && expr.operator === 'delete' && expr.argument.type === Syntax.Identifier) {
                        throwErrorTolerant({}, Messages.StrictDelete);
                    }
                    return expr;
                }

                return parsePostfixExpression();
            }

            function binaryPrecedence(token, allowIn) {
                var prec = 0;

                if (token.type !== Token.Punctuator && token.type !== Token.Keyword) {
                    return 0;
                }

                switch (token.value) {
                    case '||':
                        prec = 1;
                        break;

                    case '&&':
                        prec = 2;
                        break;

                    case '|':
                        prec = 3;
                        break;

                    case '^':
                        prec = 4;
                        break;

                    case '&':
                        prec = 5;
                        break;

                    case '==':
                    case '!=':
                    case '===':
                    case '!==':
                        prec = 6;
                        break;

                    case '<':
                    case '>':
                    case '<=':
                    case '>=':
                    case 'instanceof':
                        prec = 7;
                        break;

                    case 'in':
                        prec = allowIn ? 7 : 0;
                        break;

                    case '<<':
                    case '>>':
                    case '>>>':
                        prec = 8;
                        break;

                    case '+':
                    case '-':
                        prec = 9;
                        break;

                    case '*':
                    case '/':
                    case '%':
                        prec = 11;
                        break;

                    default:
                        break;
                }

                return prec;
            }

            // 11.5 Multiplicative Operators
            // 11.6 Additive Operators
            // 11.7 Bitwise Shift Operators
            // 11.8 Relational Operators
            // 11.9 Equality Operators
            // 11.10 Binary Bitwise Operators
            // 11.11 Binary Logical Operators

            function parseBinaryExpression() {
                var expr, token, prec, previousAllowIn, stack, right, operator, left, i,
                    marker, markers;

                previousAllowIn = state.allowIn;
                state.allowIn = true;

                marker = markerCreate();
                left = parseUnaryExpression();

                token = lookahead;
                prec = binaryPrecedence(token, previousAllowIn);
                if (prec === 0) {
                    return left;
                }
                token.prec = prec;
                lex();

                markers = [marker, markerCreate()];
                right = parseUnaryExpression();

                stack = [left, token, right];

                while ((prec = binaryPrecedence(lookahead, previousAllowIn)) > 0) {

                    // Reduce: make a binary expression from the three topmost entries.
                    while ((stack.length > 2) && (prec <= stack[stack.length - 2].prec)) {
                        right = stack.pop();
                        operator = stack.pop().value;
                        left = stack.pop();
                        expr = delegate.createBinaryExpression(operator, left, right);
                        markers.pop();
                        marker = markers.pop();
                        markerApply(marker, expr);
                        stack.push(expr);
                        markers.push(marker);
                    }

                    // Shift.
                    token = lex();
                    token.prec = prec;
                    stack.push(token);
                    markers.push(markerCreate());
                    expr = parseUnaryExpression();
                    stack.push(expr);
                }

                state.allowIn = previousAllowIn;

                // Final reduce to clean-up the stack.
                i = stack.length - 1;
                expr = stack[i];
                markers.pop();
                while (i > 1) {
                    expr = delegate.createBinaryExpression(stack[i - 1].value, stack[i - 2], expr);
                    i -= 2;
                    marker = markers.pop();
                    markerApply(marker, expr);
                }

                return expr;
            }


            // 11.12 Conditional Operator

            function parseConditionalExpression() {
                var expr, previousAllowIn, consequent, alternate, marker = markerCreate();
                expr = parseBinaryExpression();

                if (match('?')) {
                    lex();
                    previousAllowIn = state.allowIn;
                    state.allowIn = true;
                    consequent = parseAssignmentExpression();
                    state.allowIn = previousAllowIn;
                    expect(':');
                    alternate = parseAssignmentExpression();

                    expr = markerApply(marker, delegate.createConditionalExpression(expr, consequent, alternate));
                }

                return expr;
            }

            // 11.13 Assignment Operators

            // 12.14.5 AssignmentPattern

            function reinterpretAsAssignmentBindingPattern(expr) {
                var i, len, property, element;

                if (expr.type === Syntax.ObjectExpression) {
                    expr.type = Syntax.ObjectPattern;
                    for (i = 0, len = expr.properties.length; i < len; i += 1) {
                        property = expr.properties[i];
                        if (property.type === Syntax.SpreadProperty) {
                            if (i < len - 1) {
                                throwError({}, Messages.PropertyAfterSpreadProperty);
                            }
                            reinterpretAsAssignmentBindingPattern(property.argument);
                        } else {
                            if (property.kind !== 'init') {
                                throwError({}, Messages.InvalidLHSInAssignment);
                            }
                            reinterpretAsAssignmentBindingPattern(property.value);
                        }
                    }
                } else if (expr.type === Syntax.ArrayExpression) {
                    expr.type = Syntax.ArrayPattern;
                    for (i = 0, len = expr.elements.length; i < len; i += 1) {
                        element = expr.elements[i];
                        /* istanbul ignore else */
                        if (element) {
                            reinterpretAsAssignmentBindingPattern(element);
                        }
                    }
                } else if (expr.type === Syntax.Identifier) {
                    if (isRestrictedWord(expr.name)) {
                        throwError({}, Messages.InvalidLHSInAssignment);
                    }
                } else if (expr.type === Syntax.SpreadElement) {
                    reinterpretAsAssignmentBindingPattern(expr.argument);
                    if (expr.argument.type === Syntax.ObjectPattern) {
                        throwError({}, Messages.ObjectPatternAsSpread);
                    }
                } else {
                    /* istanbul ignore else */
                    if (expr.type !== Syntax.MemberExpression && expr.type !== Syntax.CallExpression && expr.type !== Syntax.NewExpression) {
                        throwError({}, Messages.InvalidLHSInAssignment);
                    }
                }
            }

            // 13.2.3 BindingPattern

            function reinterpretAsDestructuredParameter(options, expr) {
                var i, len, property, element;

                if (expr.type === Syntax.ObjectExpression) {
                    expr.type = Syntax.ObjectPattern;
                    for (i = 0, len = expr.properties.length; i < len; i += 1) {
                        property = expr.properties[i];
                        if (property.type === Syntax.SpreadProperty) {
                            if (i < len - 1) {
                                throwError({}, Messages.PropertyAfterSpreadProperty);
                            }
                            reinterpretAsDestructuredParameter(options, property.argument);
                        } else {
                            if (property.kind !== 'init') {
                                throwError({}, Messages.InvalidLHSInFormalsList);
                            }
                            reinterpretAsDestructuredParameter(options, property.value);
                        }
                    }
                } else if (expr.type === Syntax.ArrayExpression) {
                    expr.type = Syntax.ArrayPattern;
                    for (i = 0, len = expr.elements.length; i < len; i += 1) {
                        element = expr.elements[i];
                        if (element) {
                            reinterpretAsDestructuredParameter(options, element);
                        }
                    }
                } else if (expr.type === Syntax.Identifier) {
                    validateParam(options, expr, expr.name);
                } else if (expr.type === Syntax.SpreadElement) {
                    // BindingRestElement only allows BindingIdentifier
                    if (expr.argument.type !== Syntax.Identifier) {
                        throwError({}, Messages.InvalidLHSInFormalsList);
                    }
                    validateParam(options, expr.argument, expr.argument.name);
                } else {
                    throwError({}, Messages.InvalidLHSInFormalsList);
                }
            }

            function reinterpretAsCoverFormalsList(expressions) {
                var i, len, param, params, defaults, defaultCount, options, rest;

                params = [];
                defaults = [];
                defaultCount = 0;
                rest = null;
                options = {
                    paramSet: new StringMap()
                };

                for (i = 0, len = expressions.length; i < len; i += 1) {
                    param = expressions[i];
                    if (param.type === Syntax.Identifier) {
                        params.push(param);
                        defaults.push(null);
                        validateParam(options, param, param.name);
                    } else if (param.type === Syntax.ObjectExpression || param.type === Syntax.ArrayExpression) {
                        reinterpretAsDestructuredParameter(options, param);
                        params.push(param);
                        defaults.push(null);
                    } else if (param.type === Syntax.SpreadElement) {
                        assert(i === len - 1, 'It is guaranteed that SpreadElement is last element by parseExpression');
                        if (param.argument.type !== Syntax.Identifier) {
                            throwError({}, Messages.InvalidLHSInFormalsList);
                        }
                        reinterpretAsDestructuredParameter(options, param.argument);
                        rest = param.argument;
                    } else if (param.type === Syntax.AssignmentExpression) {
                        params.push(param.left);
                        defaults.push(param.right);
                        ++defaultCount;
                        validateParam(options, param.left, param.left.name);
                    } else {
                        return null;
                    }
                }

                if (options.message === Messages.StrictParamDupe) {
                    throwError(
                        strict ? options.stricted : options.firstRestricted,
                        options.message
                    );
                }

                if (defaultCount === 0) {
                    defaults = [];
                }

                return {
                    params: params,
                    defaults: defaults,
                    rest: rest,
                    stricted: options.stricted,
                    firstRestricted: options.firstRestricted,
                    message: options.message
                };
            }

            function parseArrowFunctionExpression(options, marker) {
                var previousStrict, previousYieldAllowed, previousAwaitAllowed, body;

                expect('=>');

                previousStrict = strict;
                previousYieldAllowed = state.yieldAllowed;
                state.yieldAllowed = false;
                previousAwaitAllowed = state.awaitAllowed;
                state.awaitAllowed = !!options.async;
                body = parseConciseBody();

                if (strict && options.firstRestricted) {
                    throwError(options.firstRestricted, options.message);
                }
                if (strict && options.stricted) {
                    throwErrorTolerant(options.stricted, options.message);
                }

                strict = previousStrict;
                state.yieldAllowed = previousYieldAllowed;
                state.awaitAllowed = previousAwaitAllowed;

                return markerApply(marker, delegate.createArrowFunctionExpression(
                    options.params,
                    options.defaults,
                    body,
                    options.rest,
                    body.type !== Syntax.BlockStatement,
                    !!options.async
                ));
            }

            function parseAssignmentExpression() {
                var marker, expr, token, params, oldParenthesizedCount,
                    startsWithParen = false, backtrackToken = lookahead,
                    possiblyAsync = false;

                if (matchYield()) {
                    return parseYieldExpression();
                }

                if (matchAwait()) {
                    return parseAwaitExpression();
                }

                oldParenthesizedCount = state.parenthesizedCount;

                marker = markerCreate();

                if (matchAsyncFuncExprOrDecl()) {
                    return parseFunctionExpression();
                }

                if (matchAsync()) {
                    // We can't be completely sure that this 'async' token is
                    // actually a contextual keyword modifying a function
                    // expression, so we might have to un-lex() it later by
                    // calling rewind(backtrackToken).
                    possiblyAsync = true;
                    lex();
                }

                if (match('(')) {
                    token = lookahead2();
                    if ((token.type === Token.Punctuator && token.value === ')') || token.value === '...') {
                        params = parseParams();
                        if (!match('=>')) {
                            throwUnexpected(lex());
                        }
                        params.async = possiblyAsync;
                        return parseArrowFunctionExpression(params, marker);
                    }
                    startsWithParen = true;
                }

                token = lookahead;

                // If the 'async' keyword is not followed by a '(' character or an
                // identifier, then it can't be an arrow function modifier, and we
                // should interpret it as a normal identifer.
                if (possiblyAsync && !match('(') && token.type !== Token.Identifier) {
                    possiblyAsync = false;
                    rewind(backtrackToken);
                }

                expr = parseConditionalExpression();

                if (match('=>') &&
                    (state.parenthesizedCount === oldParenthesizedCount ||
                        state.parenthesizedCount === (oldParenthesizedCount + 1))) {
                    if (expr.type === Syntax.Identifier) {
                        params = reinterpretAsCoverFormalsList([ expr ]);
                    } else if (expr.type === Syntax.AssignmentExpression ||
                        expr.type === Syntax.ArrayExpression ||
                        expr.type === Syntax.ObjectExpression) {
                        if (!startsWithParen) {
                            throwUnexpected(lex());
                        }
                        params = reinterpretAsCoverFormalsList([ expr ]);
                    } else if (expr.type === Syntax.SequenceExpression) {
                        params = reinterpretAsCoverFormalsList(expr.expressions);
                    }
                    if (params) {
                        params.async = possiblyAsync;
                        return parseArrowFunctionExpression(params, marker);
                    }
                }

                // If we haven't returned by now, then the 'async' keyword was not
                // a function modifier, and we should rewind and interpret it as a
                // normal identifier.
                if (possiblyAsync) {
                    possiblyAsync = false;
                    rewind(backtrackToken);
                    expr = parseConditionalExpression();
                }

                if (matchAssign()) {
                    // 11.13.1
                    if (strict && expr.type === Syntax.Identifier && isRestrictedWord(expr.name)) {
                        throwErrorTolerant(token, Messages.StrictLHSAssignment);
                    }

                    // ES.next draf 11.13 Runtime Semantics step 1
                    if (match('=') && (expr.type === Syntax.ObjectExpression || expr.type === Syntax.ArrayExpression)) {
                        reinterpretAsAssignmentBindingPattern(expr);
                    } else if (!isLeftHandSide(expr)) {
                        throwError({}, Messages.InvalidLHSInAssignment);
                    }

                    expr = markerApply(marker, delegate.createAssignmentExpression(lex().value, expr, parseAssignmentExpression()));
                }

                return expr;
            }

            // 11.14 Comma Operator

            function parseExpression() {
                var marker, expr, expressions, sequence, spreadFound;

                marker = markerCreate();
                expr = parseAssignmentExpression();
                expressions = [ expr ];

                if (match(',')) {
                    while (index < length) {
                        if (!match(',')) {
                            break;
                        }

                        lex();
                        expr = parseSpreadOrAssignmentExpression();
                        expressions.push(expr);

                        if (expr.type === Syntax.SpreadElement) {
                            spreadFound = true;
                            if (!match(')')) {
                                throwError({}, Messages.ElementAfterSpreadElement);
                            }
                            break;
                        }
                    }

                    sequence = markerApply(marker, delegate.createSequenceExpression(expressions));
                }

                if (spreadFound && lookahead2().value !== '=>') {
                    throwError({}, Messages.IllegalSpread);
                }

                return sequence || expr;
            }

            // 12.1 Block

            function parseStatementList() {
                var list = [],
                    statement;

                while (index < length) {
                    if (match('}')) {
                        break;
                    }
                    statement = parseSourceElement();
                    if (typeof statement === 'undefined') {
                        break;
                    }
                    list.push(statement);
                }

                return list;
            }

            function parseBlock() {
                var block, marker = markerCreate();

                expect('{');

                block = parseStatementList();

                expect('}');

                return markerApply(marker, delegate.createBlockStatement(block));
            }

            // 12.2 Variable Statement

            function parseTypeParameterDeclaration() {
                var marker = markerCreate(), paramTypes = [];

                expect('<');
                while (!match('>')) {
                    paramTypes.push(parseTypeAnnotatableIdentifier());
                    if (!match('>')) {
                        expect(',');
                    }
                }
                expect('>');

                return markerApply(marker, delegate.createTypeParameterDeclaration(
                    paramTypes
                ));
            }

            function parseTypeParameterInstantiation() {
                var marker = markerCreate(), oldInType = state.inType, paramTypes = [];

                state.inType = true;

                expect('<');
                while (!match('>')) {
                    paramTypes.push(parseType());
                    if (!match('>')) {
                        expect(',');
                    }
                }
                expect('>');

                state.inType = oldInType;

                return markerApply(marker, delegate.createTypeParameterInstantiation(
                    paramTypes
                ));
            }

            function parseObjectTypeIndexer(marker, isStatic) {
                var id, key, value;

                expect('[');
                id = parseObjectPropertyKey();
                expect(':');
                key = parseType();
                expect(']');
                expect(':');
                value = parseType();

                return markerApply(marker, delegate.createObjectTypeIndexer(
                    id,
                    key,
                    value,
                    isStatic
                ));
            }

            function parseObjectTypeMethodish(marker) {
                var params = [], rest = null, returnType, typeParameters = null;
                if (match('<')) {
                    typeParameters = parseTypeParameterDeclaration();
                }

                expect('(');
                while (lookahead.type === Token.Identifier) {
                    params.push(parseFunctionTypeParam());
                    if (!match(')')) {
                        expect(',');
                    }
                }

                if (match('...')) {
                    lex();
                    rest = parseFunctionTypeParam();
                }
                expect(')');
                expect(':');
                returnType = parseType();

                return markerApply(marker, delegate.createFunctionTypeAnnotation(
                    params,
                    returnType,
                    rest,
                    typeParameters
                ));
            }

            function parseObjectTypeMethod(marker, isStatic, key) {
                var optional = false, value;
                value = parseObjectTypeMethodish(marker);

                return markerApply(marker, delegate.createObjectTypeProperty(
                    key,
                    value,
                    optional,
                    isStatic
                ));
            }

            function parseObjectTypeCallProperty(marker, isStatic) {
                var valueMarker = markerCreate();
                return markerApply(marker, delegate.createObjectTypeCallProperty(
                    parseObjectTypeMethodish(valueMarker),
                    isStatic
                ));
            }

            function parseObjectType(allowStatic) {
                var callProperties = [], indexers = [], marker, optional = false,
                    properties = [], propertyKey, propertyTypeAnnotation,
                    token, isStatic, matchStatic;

                expect('{');

                while (!match('}')) {
                    marker = markerCreate();
                    matchStatic =
                        strict
                            ? matchKeyword('static')
                            : matchContextualKeyword('static');

                    if (allowStatic && matchStatic) {
                        token = lex();
                        isStatic = true;
                    }

                    if (match('[')) {
                        indexers.push(parseObjectTypeIndexer(marker, isStatic));
                    } else if (match('(') || match('<')) {
                        callProperties.push(parseObjectTypeCallProperty(marker, allowStatic));
                    } else {
                        if (isStatic && match(':')) {
                            propertyKey = markerApply(marker, delegate.createIdentifier(token));
                            throwErrorTolerant(token, Messages.StrictReservedWord);
                        } else {
                            propertyKey = parseObjectPropertyKey();
                        }
                        if (match('<') || match('(')) {
                            // This is a method property
                            properties.push(parseObjectTypeMethod(marker, isStatic, propertyKey));
                        } else {
                            if (match('?')) {
                                lex();
                                optional = true;
                            }
                            expect(':');
                            propertyTypeAnnotation = parseType();
                            properties.push(markerApply(marker, delegate.createObjectTypeProperty(
                                propertyKey,
                                propertyTypeAnnotation,
                                optional,
                                isStatic
                            )));
                        }
                    }

                    if (match(';')) {
                        lex();
                    } else if (!match('}')) {
                        throwUnexpected(lookahead);
                    }
                }

                expect('}');

                return delegate.createObjectTypeAnnotation(
                    properties,
                    indexers,
                    callProperties
                );
            }

            function parseGenericType() {
                var marker = markerCreate(),
                    typeParameters = null, typeIdentifier;

                typeIdentifier = parseVariableIdentifier();

                while (match('.')) {
                    expect('.');
                    typeIdentifier = markerApply(marker, delegate.createQualifiedTypeIdentifier(
                        typeIdentifier,
                        parseVariableIdentifier()
                    ));
                }

                if (match('<')) {
                    typeParameters = parseTypeParameterInstantiation();
                }

                return markerApply(marker, delegate.createGenericTypeAnnotation(
                    typeIdentifier,
                    typeParameters
                ));
            }

            function parseVoidType() {
                var marker = markerCreate();
                expectKeyword('void');
                return markerApply(marker, delegate.createVoidTypeAnnotation());
            }

            function parseTypeofType() {
                var argument, marker = markerCreate();
                expectKeyword('typeof');
                argument = parsePrimaryType();
                return markerApply(marker, delegate.createTypeofTypeAnnotation(
                    argument
                ));
            }

            function parseTupleType() {
                var marker = markerCreate(), types = [];
                expect('[');
                // We allow trailing commas
                while (index < length && !match(']')) {
                    types.push(parseType());
                    if (match(']')) {
                        break;
                    }
                    expect(',');
                }
                expect(']');
                return markerApply(marker, delegate.createTupleTypeAnnotation(
                    types
                ));
            }

            function parseFunctionTypeParam() {
                var marker = markerCreate(), name, optional = false, typeAnnotation;
                name = parseVariableIdentifier();
                if (match('?')) {
                    lex();
                    optional = true;
                }
                expect(':');
                typeAnnotation = parseType();
                return markerApply(marker, delegate.createFunctionTypeParam(
                    name,
                    typeAnnotation,
                    optional
                ));
            }

            function parseFunctionTypeParams() {
                var ret = { params: [], rest: null };
                while (lookahead.type === Token.Identifier) {
                    ret.params.push(parseFunctionTypeParam());
                    if (!match(')')) {
                        expect(',');
                    }
                }

                if (match('...')) {
                    lex();
                    ret.rest = parseFunctionTypeParam();
                }
                return ret;
            }

            // The parsing of types roughly parallels the parsing of expressions, and
            // primary types are kind of like primary expressions...they're the
            // primitives with which other types are constructed.
            function parsePrimaryType() {
                var params = null, returnType = null,
                    marker = markerCreate(), rest = null, tmp,
                    typeParameters, token, type, isGroupedType = false;

                switch (lookahead.type) {
                    case Token.Identifier:
                        switch (lookahead.value) {
                            case 'any':
                                lex();
                                return markerApply(marker, delegate.createAnyTypeAnnotation());
                            case 'bool':  // fallthrough
                            case 'boolean':
                                lex();
                                return markerApply(marker, delegate.createBooleanTypeAnnotation());
                            case 'number':
                                lex();
                                return markerApply(marker, delegate.createNumberTypeAnnotation());
                            case 'string':
                                lex();
                                return markerApply(marker, delegate.createStringTypeAnnotation());
                        }
                        return markerApply(marker, parseGenericType());
                    case Token.Punctuator:
                        switch (lookahead.value) {
                            case '{':
                                return markerApply(marker, parseObjectType());
                            case '[':
                                return parseTupleType();
                            case '<':
                                typeParameters = parseTypeParameterDeclaration();
                                expect('(');
                                tmp = parseFunctionTypeParams();
                                params = tmp.params;
                                rest = tmp.rest;
                                expect(')');

                                expect('=>');

                                returnType = parseType();

                                return markerApply(marker, delegate.createFunctionTypeAnnotation(
                                    params,
                                    returnType,
                                    rest,
                                    typeParameters
                                ));
                            case '(':
                                lex();
                                // Check to see if this is actually a grouped type
                                if (!match(')') && !match('...')) {
                                    if (lookahead.type === Token.Identifier) {
                                        token = lookahead2();
                                        isGroupedType = token.value !== '?' && token.value !== ':';
                                    } else {
                                        isGroupedType = true;
                                    }
                                }

                                if (isGroupedType) {
                                    type = parseType();
                                    expect(')');

                                    // If we see a => next then someone was probably confused about
                                    // function types, so we can provide a better error message
                                    if (match('=>')) {
                                        throwError({}, Messages.ConfusedAboutFunctionType);
                                    }

                                    return type;
                                }

                                tmp = parseFunctionTypeParams();
                                params = tmp.params;
                                rest = tmp.rest;

                                expect(')');

                                expect('=>');

                                returnType = parseType();

                                return markerApply(marker, delegate.createFunctionTypeAnnotation(
                                    params,
                                    returnType,
                                    rest,
                                    null /* typeParameters */
                                ));
                        }
                        break;
                    case Token.Keyword:
                        switch (lookahead.value) {
                            case 'void':
                                return markerApply(marker, parseVoidType());
                            case 'typeof':
                                return markerApply(marker, parseTypeofType());
                        }
                        break;
                    case Token.StringLiteral:
                        token = lex();
                        if (token.octal) {
                            throwError(token, Messages.StrictOctalLiteral);
                        }
                        return markerApply(marker, delegate.createStringLiteralTypeAnnotation(
                            token
                        ));
                }

                throwUnexpected(lookahead);
            }

            function parsePostfixType() {
                var marker = markerCreate(), t = parsePrimaryType();
                if (match('[')) {
                    expect('[');
                    expect(']');
                    return markerApply(marker, delegate.createArrayTypeAnnotation(t));
                }
                return t;
            }

            function parsePrefixType() {
                var marker = markerCreate();
                if (match('?')) {
                    lex();
                    return markerApply(marker, delegate.createNullableTypeAnnotation(
                        parsePrefixType()
                    ));
                }
                return parsePostfixType();
            }


            function parseIntersectionType() {
                var marker = markerCreate(), type, types;
                type = parsePrefixType();
                types = [type];
                while (match('&')) {
                    lex();
                    types.push(parsePrefixType());
                }

                return types.length === 1 ?
                    type :
                    markerApply(marker, delegate.createIntersectionTypeAnnotation(
                        types
                    ));
            }

            function parseUnionType() {
                var marker = markerCreate(), type, types;
                type = parseIntersectionType();
                types = [type];
                while (match('|')) {
                    lex();
                    types.push(parseIntersectionType());
                }
                return types.length === 1 ?
                    type :
                    markerApply(marker, delegate.createUnionTypeAnnotation(
                        types
                    ));
            }

            function parseType() {
                var oldInType = state.inType, type;
                state.inType = true;

                type = parseUnionType();

                state.inType = oldInType;
                return type;
            }

            function parseTypeAnnotation() {
                var marker = markerCreate(), type;

                expect(':');
                type = parseType();

                return markerApply(marker, delegate.createTypeAnnotation(type));
            }

            function parseVariableIdentifier() {
                var marker = markerCreate(),
                    token = lex();

                if (token.type !== Token.Identifier) {
                    throwUnexpected(token);
                }

                return markerApply(marker, delegate.createIdentifier(token.value));
            }

            function parseTypeAnnotatableIdentifier(requireTypeAnnotation, canBeOptionalParam) {
                var marker = markerCreate(),
                    ident = parseVariableIdentifier(),
                    isOptionalParam = false;

                if (canBeOptionalParam && match('?')) {
                    expect('?');
                    isOptionalParam = true;
                }

                if (requireTypeAnnotation || match(':')) {
                    ident.typeAnnotation = parseTypeAnnotation();
                    ident = markerApply(marker, ident);
                }

                if (isOptionalParam) {
                    ident.optional = true;
                    ident = markerApply(marker, ident);
                }

                return ident;
            }

            function parseVariableDeclaration(kind) {
                var id,
                    marker = markerCreate(),
                    init = null,
                    typeAnnotationMarker = markerCreate();
                if (match('{')) {
                    id = parseObjectInitialiser();
                    reinterpretAsAssignmentBindingPattern(id);
                    if (match(':')) {
                        id.typeAnnotation = parseTypeAnnotation();
                        markerApply(typeAnnotationMarker, id);
                    }
                } else if (match('[')) {
                    id = parseArrayInitialiser();
                    reinterpretAsAssignmentBindingPattern(id);
                    if (match(':')) {
                        id.typeAnnotation = parseTypeAnnotation();
                        markerApply(typeAnnotationMarker, id);
                    }
                } else {
                    /* istanbul ignore next */
                    id = state.allowKeyword ? parseNonComputedProperty() : parseTypeAnnotatableIdentifier();
                    // 12.2.1
                    if (strict && isRestrictedWord(id.name)) {
                        throwErrorTolerant({}, Messages.StrictVarName);
                    }
                }

                if (kind === 'const') {
                    if (!match('=')) {
                        throwError({}, Messages.NoUninitializedConst);
                    }
                    expect('=');
                    init = parseAssignmentExpression();
                } else if (match('=')) {
                    lex();
                    init = parseAssignmentExpression();
                }

                return markerApply(marker, delegate.createVariableDeclarator(id, init));
            }

            function parseVariableDeclarationList(kind) {
                var list = [];

                do {
                    list.push(parseVariableDeclaration(kind));
                    if (!match(',')) {
                        break;
                    }
                    lex();
                } while (index < length);

                return list;
            }

            function parseVariableStatement() {
                var declarations, marker = markerCreate();

                expectKeyword('var');

                declarations = parseVariableDeclarationList();

                consumeSemicolon();

                return markerApply(marker, delegate.createVariableDeclaration(declarations, 'var'));
            }

            // kind may be `const` or `let`
            // Both are experimental and not in the specification yet.
            // see http://wiki.ecmascript.org/doku.php?id=harmony:const
            // and http://wiki.ecmascript.org/doku.php?id=harmony:let
            function parseConstLetDeclaration(kind) {
                var declarations, marker = markerCreate();

                expectKeyword(kind);

                declarations = parseVariableDeclarationList(kind);

                consumeSemicolon();

                return markerApply(marker, delegate.createVariableDeclaration(declarations, kind));
            }

            // people.mozilla.org/~jorendorff/es6-draft.html

            function parseModuleSpecifier() {
                var marker = markerCreate(),
                    specifier;

                if (lookahead.type !== Token.StringLiteral) {
                    throwError({}, Messages.InvalidModuleSpecifier);
                }
                specifier = delegate.createModuleSpecifier(lookahead);
                lex();
                return markerApply(marker, specifier);
            }

            function parseExportBatchSpecifier() {
                var marker = markerCreate();
                expect('*');
                return markerApply(marker, delegate.createExportBatchSpecifier());
            }

            function parseExportSpecifier() {
                var id, name = null, marker = markerCreate(), from;
                if (matchKeyword('default')) {
                    lex();
                    id = markerApply(marker, delegate.createIdentifier('default'));
                    // export {default} from "something";
                } else {
                    id = parseVariableIdentifier();
                }
                if (matchContextualKeyword('as')) {
                    lex();
                    name = parseNonComputedProperty();
                }

                return markerApply(marker, delegate.createExportSpecifier(id, name));
            }

            function parseExportDeclaration() {
                var declaration = null,
                    possibleIdentifierToken, sourceElement,
                    isExportFromIdentifier,
                    src = null, specifiers = [],
                    marker = markerCreate();

                expectKeyword('export');

                if (matchKeyword('default')) {
                    // covers:
                    // export default ...
                    lex();
                    if (matchKeyword('function') || matchKeyword('class')) {
                        possibleIdentifierToken = lookahead2();
                        if (isIdentifierName(possibleIdentifierToken)) {
                            // covers:
                            // export default function foo () {}
                            // export default class foo {}
                            sourceElement = parseSourceElement();
                            return markerApply(marker, delegate.createExportDeclaration(true, sourceElement, [sourceElement.id], null));
                        }
                        // covers:
                        // export default function () {}
                        // export default class {}
                        switch (lookahead.value) {
                            case 'class':
                                return markerApply(marker, delegate.createExportDeclaration(true, parseClassExpression(), [], null));
                            case 'function':
                                return markerApply(marker, delegate.createExportDeclaration(true, parseFunctionExpression(), [], null));
                        }
                    }

                    if (matchContextualKeyword('from')) {
                        throwError({}, Messages.UnexpectedToken, lookahead.value);
                    }

                    // covers:
                    // export default {};
                    // export default [];
                    if (match('{')) {
                        declaration = parseObjectInitialiser();
                    } else if (match('[')) {
                        declaration = parseArrayInitialiser();
                    } else {
                        declaration = parseAssignmentExpression();
                    }
                    consumeSemicolon();
                    return markerApply(marker, delegate.createExportDeclaration(true, declaration, [], null));
                }

                // non-default export
                if (lookahead.type === Token.Keyword || matchContextualKeyword('type')) {
                    // covers:
                    // export var f = 1;
                    switch (lookahead.value) {
                        case 'type':
                        case 'let':
                        case 'const':
                        case 'var':
                        case 'class':
                        case 'function':
                            return markerApply(marker, delegate.createExportDeclaration(false, parseSourceElement(), specifiers, null));
                    }
                }

                if (match('*')) {
                    // covers:
                    // export * from "foo";
                    specifiers.push(parseExportBatchSpecifier());

                    if (!matchContextualKeyword('from')) {
                        throwError({}, lookahead.value ?
                            Messages.UnexpectedToken : Messages.MissingFromClause, lookahead.value);
                    }
                    lex();
                    src = parseModuleSpecifier();
                    consumeSemicolon();

                    return markerApply(marker, delegate.createExportDeclaration(false, null, specifiers, src));
                }

                expect('{');
                if (!match('}')) {
                    do {
                        isExportFromIdentifier = isExportFromIdentifier || matchKeyword('default');
                        specifiers.push(parseExportSpecifier());
                    } while (match(',') && lex());
                }
                expect('}');

                if (matchContextualKeyword('from')) {
                    // covering:
                    // export {default} from "foo";
                    // export {foo} from "foo";
                    lex();
                    src = parseModuleSpecifier();
                    consumeSemicolon();
                } else if (isExportFromIdentifier) {
                    // covering:
                    // export {default}; // missing fromClause
                    throwError({}, lookahead.value ?
                        Messages.UnexpectedToken : Messages.MissingFromClause, lookahead.value);
                } else {
                    // cover
                    // export {foo};
                    consumeSemicolon();
                }
                return markerApply(marker, delegate.createExportDeclaration(false, declaration, specifiers, src));
            }


            function parseImportSpecifier() {
                // import {<foo as bar>} ...;
                var id, name = null, marker = markerCreate();

                id = parseNonComputedProperty();
                if (matchContextualKeyword('as')) {
                    lex();
                    name = parseVariableIdentifier();
                }

                return markerApply(marker, delegate.createImportSpecifier(id, name));
            }

            function parseNamedImports() {
                var specifiers = [];
                // {foo, bar as bas}
                expect('{');
                if (!match('}')) {
                    do {
                        specifiers.push(parseImportSpecifier());
                    } while (match(',') && lex());
                }
                expect('}');
                return specifiers;
            }

            function parseImportDefaultSpecifier() {
                // import <foo> ...;
                var id, marker = markerCreate();

                id = parseNonComputedProperty();

                return markerApply(marker, delegate.createImportDefaultSpecifier(id));
            }

            function parseImportNamespaceSpecifier() {
                // import <* as foo> ...;
                var id, marker = markerCreate();

                expect('*');
                if (!matchContextualKeyword('as')) {
                    throwError({}, Messages.NoAsAfterImportNamespace);
                }
                lex();
                id = parseNonComputedProperty();

                return markerApply(marker, delegate.createImportNamespaceSpecifier(id));
            }

            function parseImportDeclaration() {
                var specifiers, src, marker = markerCreate(), isType = false, token2;

                expectKeyword('import');

                if (matchContextualKeyword('type')) {
                    token2 = lookahead2();
                    if ((token2.type === Token.Identifier && token2.value !== 'from') ||
                        (token2.type === Token.Punctuator &&
                            (token2.value === '{' || token2.value === '*'))) {
                        isType = true;
                        lex();
                    }
                }

                specifiers = [];

                if (lookahead.type === Token.StringLiteral) {
                    // covers:
                    // import "foo";
                    src = parseModuleSpecifier();
                    consumeSemicolon();
                    return markerApply(marker, delegate.createImportDeclaration(specifiers, src, isType));
                }

                if (!matchKeyword('default') && isIdentifierName(lookahead)) {
                    // covers:
                    // import foo
                    // import foo, ...
                    specifiers.push(parseImportDefaultSpecifier());
                    if (match(',')) {
                        lex();
                    }
                }
                if (match('*')) {
                    // covers:
                    // import foo, * as foo
                    // import * as foo
                    specifiers.push(parseImportNamespaceSpecifier());
                } else if (match('{')) {
                    // covers:
                    // import foo, {bar}
                    // import {bar}
                    specifiers = specifiers.concat(parseNamedImports());
                }

                if (!matchContextualKeyword('from')) {
                    throwError({}, lookahead.value ?
                        Messages.UnexpectedToken : Messages.MissingFromClause, lookahead.value);
                }
                lex();
                src = parseModuleSpecifier();
                consumeSemicolon();

                return markerApply(marker, delegate.createImportDeclaration(specifiers, src, isType));
            }

            // 12.3 Empty Statement

            function parseEmptyStatement() {
                var marker = markerCreate();
                expect(';');
                return markerApply(marker, delegate.createEmptyStatement());
            }

            // 12.4 Expression Statement

            function parseExpressionStatement() {
                var marker = markerCreate(), expr = parseExpression();
                consumeSemicolon();
                return markerApply(marker, delegate.createExpressionStatement(expr));
            }

            // 12.5 If statement

            function parseIfStatement() {
                var test, consequent, alternate, marker = markerCreate();

                expectKeyword('if');

                expect('(');

                test = parseExpression();

                expect(')');

                consequent = parseStatement();

                if (matchKeyword('else')) {
                    lex();
                    alternate = parseStatement();
                } else {
                    alternate = null;
                }

                return markerApply(marker, delegate.createIfStatement(test, consequent, alternate));
            }

            // 12.6 Iteration Statements

            function parseDoWhileStatement() {
                var body, test, oldInIteration, marker = markerCreate();

                expectKeyword('do');

                oldInIteration = state.inIteration;
                state.inIteration = true;

                body = parseStatement();

                state.inIteration = oldInIteration;

                expectKeyword('while');

                expect('(');

                test = parseExpression();

                expect(')');

                if (match(';')) {
                    lex();
                }

                return markerApply(marker, delegate.createDoWhileStatement(body, test));
            }

            function parseWhileStatement() {
                var test, body, oldInIteration, marker = markerCreate();

                expectKeyword('while');

                expect('(');

                test = parseExpression();

                expect(')');

                oldInIteration = state.inIteration;
                state.inIteration = true;

                body = parseStatement();

                state.inIteration = oldInIteration;

                return markerApply(marker, delegate.createWhileStatement(test, body));
            }

            function parseForVariableDeclaration() {
                var marker = markerCreate(),
                    token = lex(),
                    declarations = parseVariableDeclarationList();

                return markerApply(marker, delegate.createVariableDeclaration(declarations, token.value));
            }

            function parseForStatement(opts) {
                var init, test, update, left, right, body, operator, oldInIteration,
                    marker = markerCreate();
                init = test = update = null;
                expectKeyword('for');

                // http://wiki.ecmascript.org/doku.php?id=proposals:iterators_and_generators&s=each
                if (matchContextualKeyword('each')) {
                    throwError({}, Messages.EachNotAllowed);
                }

                expect('(');

                if (match(';')) {
                    lex();
                } else {
                    if (matchKeyword('var') || matchKeyword('let') || matchKeyword('const')) {
                        state.allowIn = false;
                        init = parseForVariableDeclaration();
                        state.allowIn = true;

                        if (init.declarations.length === 1) {
                            if (matchKeyword('in') || matchContextualKeyword('of')) {
                                operator = lookahead;
                                if (!((operator.value === 'in' || init.kind !== 'var') && init.declarations[0].init)) {
                                    lex();
                                    left = init;
                                    right = parseExpression();
                                    init = null;
                                }
                            }
                        }
                    } else {
                        state.allowIn = false;
                        init = parseExpression();
                        state.allowIn = true;

                        if (matchContextualKeyword('of')) {
                            operator = lex();
                            left = init;
                            right = parseExpression();
                            init = null;
                        } else if (matchKeyword('in')) {
                            // LeftHandSideExpression
                            if (!isAssignableLeftHandSide(init)) {
                                throwError({}, Messages.InvalidLHSInForIn);
                            }
                            operator = lex();
                            left = init;
                            right = parseExpression();
                            init = null;
                        }
                    }

                    if (typeof left === 'undefined') {
                        expect(';');
                    }
                }

                if (typeof left === 'undefined') {

                    if (!match(';')) {
                        test = parseExpression();
                    }
                    expect(';');

                    if (!match(')')) {
                        update = parseExpression();
                    }
                }

                expect(')');

                oldInIteration = state.inIteration;
                state.inIteration = true;

                if (!(opts !== undefined && opts.ignoreBody)) {
                    body = parseStatement();
                }

                state.inIteration = oldInIteration;

                if (typeof left === 'undefined') {
                    return markerApply(marker, delegate.createForStatement(init, test, update, body));
                }

                if (operator.value === 'in') {
                    return markerApply(marker, delegate.createForInStatement(left, right, body));
                }
                return markerApply(marker, delegate.createForOfStatement(left, right, body));
            }

            // 12.7 The continue statement

            function parseContinueStatement() {
                var label = null, marker = markerCreate();

                expectKeyword('continue');

                // Optimize the most common form: 'continue;'.
                if (source.charCodeAt(index) === 59) {
                    lex();

                    if (!state.inIteration) {
                        throwError({}, Messages.IllegalContinue);
                    }

                    return markerApply(marker, delegate.createContinueStatement(null));
                }

                if (peekLineTerminator()) {
                    if (!state.inIteration) {
                        throwError({}, Messages.IllegalContinue);
                    }

                    return markerApply(marker, delegate.createContinueStatement(null));
                }

                if (lookahead.type === Token.Identifier) {
                    label = parseVariableIdentifier();

                    if (!state.labelSet.has(label.name)) {
                        throwError({}, Messages.UnknownLabel, label.name);
                    }
                }

                consumeSemicolon();

                if (label === null && !state.inIteration) {
                    throwError({}, Messages.IllegalContinue);
                }

                return markerApply(marker, delegate.createContinueStatement(label));
            }

            // 12.8 The break statement

            function parseBreakStatement() {
                var label = null, marker = markerCreate();

                expectKeyword('break');

                // Catch the very common case first: immediately a semicolon (char #59).
                if (source.charCodeAt(index) === 59) {
                    lex();

                    if (!(state.inIteration || state.inSwitch)) {
                        throwError({}, Messages.IllegalBreak);
                    }

                    return markerApply(marker, delegate.createBreakStatement(null));
                }

                if (peekLineTerminator()) {
                    if (!(state.inIteration || state.inSwitch)) {
                        throwError({}, Messages.IllegalBreak);
                    }

                    return markerApply(marker, delegate.createBreakStatement(null));
                }

                if (lookahead.type === Token.Identifier) {
                    label = parseVariableIdentifier();

                    if (!state.labelSet.has(label.name)) {
                        throwError({}, Messages.UnknownLabel, label.name);
                    }
                }

                consumeSemicolon();

                if (label === null && !(state.inIteration || state.inSwitch)) {
                    throwError({}, Messages.IllegalBreak);
                }

                return markerApply(marker, delegate.createBreakStatement(label));
            }

            // 12.9 The return statement

            function parseReturnStatement() {
                var argument = null, marker = markerCreate();

                expectKeyword('return');

                if (!state.inFunctionBody) {
                    throwErrorTolerant({}, Messages.IllegalReturn);
                }

                // 'return' followed by a space and an identifier is very common.
                if (source.charCodeAt(index) === 32) {
                    if (isIdentifierStart(source.charCodeAt(index + 1))) {
                        argument = parseExpression();
                        consumeSemicolon();
                        return markerApply(marker, delegate.createReturnStatement(argument));
                    }
                }

                if (peekLineTerminator()) {
                    return markerApply(marker, delegate.createReturnStatement(null));
                }

                if (!match(';')) {
                    if (!match('}') && lookahead.type !== Token.EOF) {
                        argument = parseExpression();
                    }
                }

                consumeSemicolon();

                return markerApply(marker, delegate.createReturnStatement(argument));
            }

            // 12.10 The with statement

            function parseWithStatement() {
                var object, body, marker = markerCreate();

                if (strict) {
                    throwErrorTolerant({}, Messages.StrictModeWith);
                }

                expectKeyword('with');

                expect('(');

                object = parseExpression();

                expect(')');

                body = parseStatement();

                return markerApply(marker, delegate.createWithStatement(object, body));
            }

            // 12.10 The swith statement

            function parseSwitchCase() {
                var test,
                    consequent = [],
                    sourceElement,
                    marker = markerCreate();

                if (matchKeyword('default')) {
                    lex();
                    test = null;
                } else {
                    expectKeyword('case');
                    test = parseExpression();
                }
                expect(':');

                while (index < length) {
                    if (match('}') || matchKeyword('default') || matchKeyword('case')) {
                        break;
                    }
                    sourceElement = parseSourceElement();
                    if (typeof sourceElement === 'undefined') {
                        break;
                    }
                    consequent.push(sourceElement);
                }

                return markerApply(marker, delegate.createSwitchCase(test, consequent));
            }

            function parseSwitchStatement() {
                var discriminant, cases, clause, oldInSwitch, defaultFound, marker = markerCreate();

                expectKeyword('switch');

                expect('(');

                discriminant = parseExpression();

                expect(')');

                expect('{');

                cases = [];

                if (match('}')) {
                    lex();
                    return markerApply(marker, delegate.createSwitchStatement(discriminant, cases));
                }

                oldInSwitch = state.inSwitch;
                state.inSwitch = true;
                defaultFound = false;

                while (index < length) {
                    if (match('}')) {
                        break;
                    }
                    clause = parseSwitchCase();
                    if (clause.test === null) {
                        if (defaultFound) {
                            throwError({}, Messages.MultipleDefaultsInSwitch);
                        }
                        defaultFound = true;
                    }
                    cases.push(clause);
                }

                state.inSwitch = oldInSwitch;

                expect('}');

                return markerApply(marker, delegate.createSwitchStatement(discriminant, cases));
            }

            // 12.13 The throw statement

            function parseThrowStatement() {
                var argument, marker = markerCreate();

                expectKeyword('throw');

                if (peekLineTerminator()) {
                    throwError({}, Messages.NewlineAfterThrow);
                }

                argument = parseExpression();

                consumeSemicolon();

                return markerApply(marker, delegate.createThrowStatement(argument));
            }

            // 12.14 The try statement

            function parseCatchClause() {
                var param, body, marker = markerCreate();

                expectKeyword('catch');

                expect('(');
                if (match(')')) {
                    throwUnexpected(lookahead);
                }

                param = parseExpression();
                // 12.14.1
                if (strict && param.type === Syntax.Identifier && isRestrictedWord(param.name)) {
                    throwErrorTolerant({}, Messages.StrictCatchVariable);
                }

                expect(')');
                body = parseBlock();
                return markerApply(marker, delegate.createCatchClause(param, body));
            }

            function parseTryStatement() {
                var block, handlers = [], finalizer = null, marker = markerCreate();

                expectKeyword('try');

                block = parseBlock();

                if (matchKeyword('catch')) {
                    handlers.push(parseCatchClause());
                }

                if (matchKeyword('finally')) {
                    lex();
                    finalizer = parseBlock();
                }

                if (handlers.length === 0 && !finalizer) {
                    throwError({}, Messages.NoCatchOrFinally);
                }

                return markerApply(marker, delegate.createTryStatement(block, [], handlers, finalizer));
            }

            // 12.15 The debugger statement

            function parseDebuggerStatement() {
                var marker = markerCreate();
                expectKeyword('debugger');

                consumeSemicolon();

                return markerApply(marker, delegate.createDebuggerStatement());
            }

            // 12 Statements

            function parseStatement() {
                var type = lookahead.type,
                    marker,
                    expr,
                    labeledBody;

                if (type === Token.EOF) {
                    throwUnexpected(lookahead);
                }

                if (type === Token.Punctuator) {
                    switch (lookahead.value) {
                        case ';':
                            return parseEmptyStatement();
                        case '{':
                            return parseBlock();
                        case '(':
                            return parseExpressionStatement();
                        default:
                            break;
                    }
                }

                if (type === Token.Keyword) {
                    switch (lookahead.value) {
                        case 'break':
                            return parseBreakStatement();
                        case 'continue':
                            return parseContinueStatement();
                        case 'debugger':
                            return parseDebuggerStatement();
                        case 'do':
                            return parseDoWhileStatement();
                        case 'for':
                            return parseForStatement();
                        case 'function':
                            return parseFunctionDeclaration();
                        case 'class':
                            return parseClassDeclaration();
                        case 'if':
                            return parseIfStatement();
                        case 'return':
                            return parseReturnStatement();
                        case 'switch':
                            return parseSwitchStatement();
                        case 'throw':
                            return parseThrowStatement();
                        case 'try':
                            return parseTryStatement();
                        case 'var':
                            return parseVariableStatement();
                        case 'while':
                            return parseWhileStatement();
                        case 'with':
                            return parseWithStatement();
                        default:
                            break;
                    }
                }

                if (matchAsyncFuncExprOrDecl()) {
                    return parseFunctionDeclaration();
                }

                marker = markerCreate();
                expr = parseExpression();

                // 12.12 Labelled Statements
                if ((expr.type === Syntax.Identifier) && match(':')) {
                    lex();

                    if (state.labelSet.has(expr.name)) {
                        throwError({}, Messages.Redeclaration, 'Label', expr.name);
                    }

                    state.labelSet.set(expr.name, true);
                    labeledBody = parseStatement();
                    state.labelSet["delete"](expr.name);
                    return markerApply(marker, delegate.createLabeledStatement(expr, labeledBody));
                }

                consumeSemicolon();

                return markerApply(marker, delegate.createExpressionStatement(expr));
            }

            // 13 Function Definition

            function parseConciseBody() {
                if (match('{')) {
                    return parseFunctionSourceElements();
                }
                return parseAssignmentExpression();
            }

            function parseFunctionSourceElements() {
                var sourceElement, sourceElements = [], token, directive, firstRestricted,
                    oldLabelSet, oldInIteration, oldInSwitch, oldInFunctionBody, oldParenthesizedCount,
                    marker = markerCreate();

                expect('{');

                while (index < length) {
                    if (lookahead.type !== Token.StringLiteral) {
                        break;
                    }
                    token = lookahead;

                    sourceElement = parseSourceElement();
                    sourceElements.push(sourceElement);
                    if (sourceElement.expression.type !== Syntax.Literal) {
                        // this is not directive
                        break;
                    }
                    directive = source.slice(token.range[0] + 1, token.range[1] - 1);
                    if (directive === 'use strict') {
                        strict = true;
                        if (firstRestricted) {
                            throwErrorTolerant(firstRestricted, Messages.StrictOctalLiteral);
                        }
                    } else {
                        if (!firstRestricted && token.octal) {
                            firstRestricted = token;
                        }
                    }
                }

                oldLabelSet = state.labelSet;
                oldInIteration = state.inIteration;
                oldInSwitch = state.inSwitch;
                oldInFunctionBody = state.inFunctionBody;
                oldParenthesizedCount = state.parenthesizedCount;

                state.labelSet = new StringMap();
                state.inIteration = false;
                state.inSwitch = false;
                state.inFunctionBody = true;
                state.parenthesizedCount = 0;

                while (index < length) {
                    if (match('}')) {
                        break;
                    }
                    sourceElement = parseSourceElement();
                    if (typeof sourceElement === 'undefined') {
                        break;
                    }
                    sourceElements.push(sourceElement);
                }

                expect('}');

                state.labelSet = oldLabelSet;
                state.inIteration = oldInIteration;
                state.inSwitch = oldInSwitch;
                state.inFunctionBody = oldInFunctionBody;
                state.parenthesizedCount = oldParenthesizedCount;

                return markerApply(marker, delegate.createBlockStatement(sourceElements));
            }

            function validateParam(options, param, name) {
                if (strict) {
                    if (isRestrictedWord(name)) {
                        options.stricted = param;
                        options.message = Messages.StrictParamName;
                    }
                    if (options.paramSet.has(name)) {
                        options.stricted = param;
                        options.message = Messages.StrictParamDupe;
                    }
                } else if (!options.firstRestricted) {
                    if (isRestrictedWord(name)) {
                        options.firstRestricted = param;
                        options.message = Messages.StrictParamName;
                    } else if (isStrictModeReservedWord(name)) {
                        options.firstRestricted = param;
                        options.message = Messages.StrictReservedWord;
                    } else if (options.paramSet.has(name)) {
                        options.firstRestricted = param;
                        options.message = Messages.StrictParamDupe;
                    }
                }
                options.paramSet.set(name, true);
            }

            function parseParam(options) {
                var marker, token, rest, param, def;

                token = lookahead;
                if (token.value === '...') {
                    token = lex();
                    rest = true;
                }

                if (match('[')) {
                    marker = markerCreate();
                    param = parseArrayInitialiser();
                    reinterpretAsDestructuredParameter(options, param);
                    if (match(':')) {
                        param.typeAnnotation = parseTypeAnnotation();
                        markerApply(marker, param);
                    }
                } else if (match('{')) {
                    marker = markerCreate();
                    if (rest) {
                        throwError({}, Messages.ObjectPatternAsRestParameter);
                    }
                    param = parseObjectInitialiser();
                    reinterpretAsDestructuredParameter(options, param);
                    if (match(':')) {
                        param.typeAnnotation = parseTypeAnnotation();
                        markerApply(marker, param);
                    }
                } else {
                    param =
                        rest
                            ? parseTypeAnnotatableIdentifier(
                                false, /* requireTypeAnnotation */
                                false /* canBeOptionalParam */
                            )
                            : parseTypeAnnotatableIdentifier(
                                false, /* requireTypeAnnotation */
                                true /* canBeOptionalParam */
                            );

                    validateParam(options, token, token.value);
                }

                if (match('=')) {
                    if (rest) {
                        throwErrorTolerant(lookahead, Messages.DefaultRestParameter);
                    }
                    lex();
                    def = parseAssignmentExpression();
                    ++options.defaultCount;
                }

                if (rest) {
                    if (!match(')')) {
                        throwError({}, Messages.ParameterAfterRestParameter);
                    }
                    options.rest = param;
                    return false;
                }

                options.params.push(param);
                options.defaults.push(def);
                return !match(')');
            }

            function parseParams(firstRestricted) {
                var options, marker = markerCreate();

                options = {
                    params: [],
                    defaultCount: 0,
                    defaults: [],
                    rest: null,
                    firstRestricted: firstRestricted
                };

                expect('(');

                if (!match(')')) {
                    options.paramSet = new StringMap();
                    while (index < length) {
                        if (!parseParam(options)) {
                            break;
                        }
                        expect(',');
                    }
                }

                expect(')');

                if (options.defaultCount === 0) {
                    options.defaults = [];
                }

                if (match(':')) {
                    options.returnType = parseTypeAnnotation();
                }

                return markerApply(marker, options);
            }

            function parseFunctionDeclaration() {
                var id, body, token, tmp, firstRestricted, message, generator, isAsync,
                    previousStrict, previousYieldAllowed, previousAwaitAllowed,
                    marker = markerCreate(), typeParameters;

                isAsync = false;
                if (matchAsync()) {
                    lex();
                    isAsync = true;
                }

                expectKeyword('function');

                generator = false;
                if (match('*')) {
                    lex();
                    generator = true;
                }

                token = lookahead;

                id = parseVariableIdentifier();

                if (match('<')) {
                    typeParameters = parseTypeParameterDeclaration();
                }

                if (strict) {
                    if (isRestrictedWord(token.value)) {
                        throwErrorTolerant(token, Messages.StrictFunctionName);
                    }
                } else {
                    if (isRestrictedWord(token.value)) {
                        firstRestricted = token;
                        message = Messages.StrictFunctionName;
                    } else if (isStrictModeReservedWord(token.value)) {
                        firstRestricted = token;
                        message = Messages.StrictReservedWord;
                    }
                }

                tmp = parseParams(firstRestricted);
                firstRestricted = tmp.firstRestricted;
                if (tmp.message) {
                    message = tmp.message;
                }

                previousStrict = strict;
                previousYieldAllowed = state.yieldAllowed;
                state.yieldAllowed = generator;
                previousAwaitAllowed = state.awaitAllowed;
                state.awaitAllowed = isAsync;

                body = parseFunctionSourceElements();

                if (strict && firstRestricted) {
                    throwError(firstRestricted, message);
                }
                if (strict && tmp.stricted) {
                    throwErrorTolerant(tmp.stricted, message);
                }
                strict = previousStrict;
                state.yieldAllowed = previousYieldAllowed;
                state.awaitAllowed = previousAwaitAllowed;

                return markerApply(
                    marker,
                    delegate.createFunctionDeclaration(
                        id,
                        tmp.params,
                        tmp.defaults,
                        body,
                        tmp.rest,
                        generator,
                        false,
                        isAsync,
                        tmp.returnType,
                        typeParameters
                    )
                );
            }

            function parseFunctionExpression() {
                var token, id = null, firstRestricted, message, tmp, body, generator, isAsync,
                    previousStrict, previousYieldAllowed, previousAwaitAllowed,
                    marker = markerCreate(), typeParameters;

                isAsync = false;
                if (matchAsync()) {
                    lex();
                    isAsync = true;
                }

                expectKeyword('function');

                generator = false;

                if (match('*')) {
                    lex();
                    generator = true;
                }

                if (!match('(')) {
                    if (!match('<')) {
                        token = lookahead;
                        id = parseVariableIdentifier();

                        if (strict) {
                            if (isRestrictedWord(token.value)) {
                                throwErrorTolerant(token, Messages.StrictFunctionName);
                            }
                        } else {
                            if (isRestrictedWord(token.value)) {
                                firstRestricted = token;
                                message = Messages.StrictFunctionName;
                            } else if (isStrictModeReservedWord(token.value)) {
                                firstRestricted = token;
                                message = Messages.StrictReservedWord;
                            }
                        }
                    }

                    if (match('<')) {
                        typeParameters = parseTypeParameterDeclaration();
                    }
                }

                tmp = parseParams(firstRestricted);
                firstRestricted = tmp.firstRestricted;
                if (tmp.message) {
                    message = tmp.message;
                }

                previousStrict = strict;
                previousYieldAllowed = state.yieldAllowed;
                state.yieldAllowed = generator;
                previousAwaitAllowed = state.awaitAllowed;
                state.awaitAllowed = isAsync;

                body = parseFunctionSourceElements();

                if (strict && firstRestricted) {
                    throwError(firstRestricted, message);
                }
                if (strict && tmp.stricted) {
                    throwErrorTolerant(tmp.stricted, message);
                }
                strict = previousStrict;
                state.yieldAllowed = previousYieldAllowed;
                state.awaitAllowed = previousAwaitAllowed;

                return markerApply(
                    marker,
                    delegate.createFunctionExpression(
                        id,
                        tmp.params,
                        tmp.defaults,
                        body,
                        tmp.rest,
                        generator,
                        false,
                        isAsync,
                        tmp.returnType,
                        typeParameters
                    )
                );
            }

            function parseYieldExpression() {
                var delegateFlag, expr, marker = markerCreate();

                expectKeyword('yield', !strict);

                delegateFlag = false;
                if (match('*')) {
                    lex();
                    delegateFlag = true;
                }

                expr = parseAssignmentExpression();

                return markerApply(marker, delegate.createYieldExpression(expr, delegateFlag));
            }

            function parseAwaitExpression() {
                var expr, marker = markerCreate();
                expectContextualKeyword('await');
                expr = parseAssignmentExpression();
                return markerApply(marker, delegate.createAwaitExpression(expr));
            }

            // 14 Functions and classes

            // 14.1 Functions is defined above (13 in ES5)
            // 14.2 Arrow Functions Definitions is defined in (7.3 assignments)

            // 14.3 Method Definitions
            // 14.3.7
            function specialMethod(methodDefinition) {
                return methodDefinition.kind === 'get' ||
                    methodDefinition.kind === 'set' ||
                    methodDefinition.value.generator;
            }

            function parseMethodDefinition(key, isStatic, generator, computed) {
                var token, param, propType,
                    isAsync, typeParameters, tokenValue, returnType;

                propType = isStatic ? ClassPropertyType["static"] : ClassPropertyType.prototype;

                if (generator) {
                    return delegate.createMethodDefinition(
                        propType,
                        '',
                        key,
                        parsePropertyMethodFunction({ generator: true }),
                        computed
                    );
                }

                tokenValue = key.type === 'Identifier' && key.name;

                if (tokenValue === 'get' && !match('(')) {
                    key = parseObjectPropertyKey();

                    expect('(');
                    expect(')');
                    if (match(':')) {
                        returnType = parseTypeAnnotation();
                    }
                    return delegate.createMethodDefinition(
                        propType,
                        'get',
                        key,
                        parsePropertyFunction({ generator: false, returnType: returnType }),
                        computed
                    );
                }
                if (tokenValue === 'set' && !match('(')) {
                    key = parseObjectPropertyKey();

                    expect('(');
                    token = lookahead;
                    param = [ parseTypeAnnotatableIdentifier() ];
                    expect(')');
                    if (match(':')) {
                        returnType = parseTypeAnnotation();
                    }
                    return delegate.createMethodDefinition(
                        propType,
                        'set',
                        key,
                        parsePropertyFunction({
                            params: param,
                            generator: false,
                            name: token,
                            returnType: returnType
                        }),
                        computed
                    );
                }

                if (match('<')) {
                    typeParameters = parseTypeParameterDeclaration();
                }

                isAsync = tokenValue === 'async' && !match('(');
                if (isAsync) {
                    key = parseObjectPropertyKey();
                }

                return delegate.createMethodDefinition(
                    propType,
                    '',
                    key,
                    parsePropertyMethodFunction({
                        generator: false,
                        async: isAsync,
                        typeParameters: typeParameters
                    }),
                    computed
                );
            }

            function parseClassProperty(key, computed, isStatic) {
                var typeAnnotation;

                typeAnnotation = parseTypeAnnotation();
                expect(';');

                return delegate.createClassProperty(
                    key,
                    typeAnnotation,
                    computed,
                    isStatic
                );
            }

            function parseClassElement() {
                var computed = false, generator = false, key, marker = markerCreate(),
                    isStatic = false, possiblyOpenBracketToken;
                if (match(';')) {
                    lex();
                    return undefined;
                }

                if (lookahead.value === 'static') {
                    lex();
                    isStatic = true;
                }

                if (match('*')) {
                    lex();
                    generator = true;
                }

                possiblyOpenBracketToken = lookahead;
                if (matchContextualKeyword('get') || matchContextualKeyword('set')) {
                    possiblyOpenBracketToken = lookahead2();
                }

                if (possiblyOpenBracketToken.type === Token.Punctuator
                    && possiblyOpenBracketToken.value === '[') {
                    computed = true;
                }

                key = parseObjectPropertyKey();

                if (!generator && lookahead.value === ':') {
                    return markerApply(marker, parseClassProperty(key, computed, isStatic));
                }

                return markerApply(marker, parseMethodDefinition(
                    key,
                    isStatic,
                    generator,
                    computed
                ));
            }

            function parseClassBody() {
                var classElement, classElements = [], existingProps = {},
                    marker = markerCreate(), propName, propType;

                existingProps[ClassPropertyType["static"]] = new StringMap();
                existingProps[ClassPropertyType.prototype] = new StringMap();

                expect('{');

                while (index < length) {
                    if (match('}')) {
                        break;
                    }
                    classElement = parseClassElement(existingProps);

                    if (typeof classElement !== 'undefined') {
                        classElements.push(classElement);

                        propName = !classElement.computed && getFieldName(classElement.key);
                        if (propName !== false) {
                            propType = classElement["static"] ?
                                ClassPropertyType["static"] :
                                ClassPropertyType.prototype;

                            if (classElement.type === Syntax.MethodDefinition) {
                                if (propName === 'constructor' && !classElement["static"]) {
                                    if (specialMethod(classElement)) {
                                        throwError(classElement, Messages.IllegalClassConstructorProperty);
                                    }
                                    if (existingProps[ClassPropertyType.prototype].has('constructor')) {
                                        throwError(classElement.key, Messages.IllegalDuplicateClassProperty);
                                    }
                                }
                                existingProps[propType].set(propName, true);
                            }
                        }
                    }
                }

                expect('}');

                return markerApply(marker, delegate.createClassBody(classElements));
            }

            function parseClassImplements() {
                var id, implemented = [], marker, typeParameters;
                if (strict) {
                    expectKeyword('implements');
                } else {
                    expectContextualKeyword('implements');
                }
                while (index < length) {
                    marker = markerCreate();
                    id = parseVariableIdentifier();
                    if (match('<')) {
                        typeParameters = parseTypeParameterInstantiation();
                    } else {
                        typeParameters = null;
                    }
                    implemented.push(markerApply(marker, delegate.createClassImplements(
                        id,
                        typeParameters
                    )));
                    if (!match(',')) {
                        break;
                    }
                    expect(',');
                }
                return implemented;
            }

            function parseClassExpression() {
                var id, implemented, previousYieldAllowed, superClass = null,
                    superTypeParameters, marker = markerCreate(), typeParameters,
                    matchImplements;

                expectKeyword('class');

                matchImplements =
                    strict
                        ? matchKeyword('implements')
                        : matchContextualKeyword('implements');

                if (!matchKeyword('extends') && !matchImplements && !match('{')) {
                    id = parseVariableIdentifier();
                }

                if (match('<')) {
                    typeParameters = parseTypeParameterDeclaration();
                }

                if (matchKeyword('extends')) {
                    expectKeyword('extends');
                    previousYieldAllowed = state.yieldAllowed;
                    state.yieldAllowed = false;
                    superClass = parseLeftHandSideExpressionAllowCall();
                    if (match('<')) {
                        superTypeParameters = parseTypeParameterInstantiation();
                    }
                    state.yieldAllowed = previousYieldAllowed;
                }

                if (strict ? matchKeyword('implements') : matchContextualKeyword('implements')) {
                    implemented = parseClassImplements();
                }

                return markerApply(marker, delegate.createClassExpression(
                    id,
                    superClass,
                    parseClassBody(),
                    typeParameters,
                    superTypeParameters,
                    implemented
                ));
            }

            function parseClassDeclaration() {
                var id, implemented, previousYieldAllowed, superClass = null,
                    superTypeParameters, marker = markerCreate(), typeParameters;

                expectKeyword('class');

                id = parseVariableIdentifier();

                if (match('<')) {
                    typeParameters = parseTypeParameterDeclaration();
                }

                if (matchKeyword('extends')) {
                    expectKeyword('extends');
                    previousYieldAllowed = state.yieldAllowed;
                    state.yieldAllowed = false;
                    superClass = parseLeftHandSideExpressionAllowCall();
                    if (match('<')) {
                        superTypeParameters = parseTypeParameterInstantiation();
                    }
                    state.yieldAllowed = previousYieldAllowed;
                }

                if (strict ? matchKeyword('implements') : matchContextualKeyword('implements')) {
                    implemented = parseClassImplements();
                }

                return markerApply(marker, delegate.createClassDeclaration(
                    id,
                    superClass,
                    parseClassBody(),
                    typeParameters,
                    superTypeParameters,
                    implemented
                ));
            }

            // 15 Program

            function parseSourceElement() {
                var token;
                if (lookahead.type === Token.Keyword) {
                    switch (lookahead.value) {
                        case 'const':
                        case 'let':
                            return parseConstLetDeclaration(lookahead.value);
                        case 'function':
                            return parseFunctionDeclaration();
                        case 'export':
                            throwErrorTolerant({}, Messages.IllegalExportDeclaration);
                            return parseExportDeclaration();
                        case 'import':
                            throwErrorTolerant({}, Messages.IllegalImportDeclaration);
                            return parseImportDeclaration();
                        case 'interface':
                            if (lookahead2().type === Token.Identifier) {
                                return parseInterface();
                            }
                            return parseStatement();
                        default:
                            return parseStatement();
                    }
                }

                if (matchContextualKeyword('type')
                    && lookahead2().type === Token.Identifier) {
                    return parseTypeAlias();
                }

                if (matchContextualKeyword('interface')
                    && lookahead2().type === Token.Identifier) {
                    return parseInterface();
                }

                if (matchContextualKeyword('declare')) {
                    token = lookahead2();
                    if (token.type === Token.Keyword) {
                        switch (token.value) {
                            case 'class':
                                return parseDeclareClass();
                            case 'function':
                                return parseDeclareFunction();
                            case 'var':
                                return parseDeclareVariable();
                        }
                    } else if (token.type === Token.Identifier
                        && token.value === 'module') {
                        return parseDeclareModule();
                    }
                }

                if (lookahead.type !== Token.EOF) {
                    return parseStatement();
                }
            }

            function parseProgramElement() {
                var isModule = extra.sourceType === 'module' || extra.sourceType === 'nonStrictModule';

                if (isModule && lookahead.type === Token.Keyword) {
                    switch (lookahead.value) {
                        case 'export':
                            return parseExportDeclaration();
                        case 'import':
                            return parseImportDeclaration();
                    }
                }

                return parseSourceElement();
            }

            function parseProgramElements() {
                var sourceElement, sourceElements = [], token, directive, firstRestricted;

                while (index < length) {
                    token = lookahead;
                    if (token.type !== Token.StringLiteral) {
                        break;
                    }

                    sourceElement = parseProgramElement();
                    sourceElements.push(sourceElement);
                    if (sourceElement.expression.type !== Syntax.Literal) {
                        // this is not directive
                        break;
                    }
                    directive = source.slice(token.range[0] + 1, token.range[1] - 1);
                    if (directive === 'use strict') {
                        strict = true;
                        if (firstRestricted) {
                            throwErrorTolerant(firstRestricted, Messages.StrictOctalLiteral);
                        }
                    } else {
                        if (!firstRestricted && token.octal) {
                            firstRestricted = token;
                        }
                    }
                }

                while (index < length) {
                    sourceElement = parseProgramElement();
                    if (typeof sourceElement === 'undefined') {
                        break;
                    }
                    sourceElements.push(sourceElement);
                }
                return sourceElements;
            }

            function parseProgram() {
                var body, marker = markerCreate();
                strict = extra.sourceType === 'module';
                peek();
                body = parseProgramElements();
                return markerApply(marker, delegate.createProgram(body));
            }

            // 16 JSX

            XHTMLEntities = {
                quot: '\u0022',
                amp: '&',
                apos: '\u0027',
                lt: '<',
                gt: '>',
                nbsp: '\u00A0',
                iexcl: '\u00A1',
                cent: '\u00A2',
                pound: '\u00A3',
                curren: '\u00A4',
                yen: '\u00A5',
                brvbar: '\u00A6',
                sect: '\u00A7',
                uml: '\u00A8',
                copy: '\u00A9',
                ordf: '\u00AA',
                laquo: '\u00AB',
                not: '\u00AC',
                shy: '\u00AD',
                reg: '\u00AE',
                macr: '\u00AF',
                deg: '\u00B0',
                plusmn: '\u00B1',
                sup2: '\u00B2',
                sup3: '\u00B3',
                acute: '\u00B4',
                micro: '\u00B5',
                para: '\u00B6',
                middot: '\u00B7',
                cedil: '\u00B8',
                sup1: '\u00B9',
                ordm: '\u00BA',
                raquo: '\u00BB',
                frac14: '\u00BC',
                frac12: '\u00BD',
                frac34: '\u00BE',
                iquest: '\u00BF',
                Agrave: '\u00C0',
                Aacute: '\u00C1',
                Acirc: '\u00C2',
                Atilde: '\u00C3',
                Auml: '\u00C4',
                Aring: '\u00C5',
                AElig: '\u00C6',
                Ccedil: '\u00C7',
                Egrave: '\u00C8',
                Eacute: '\u00C9',
                Ecirc: '\u00CA',
                Euml: '\u00CB',
                Igrave: '\u00CC',
                Iacute: '\u00CD',
                Icirc: '\u00CE',
                Iuml: '\u00CF',
                ETH: '\u00D0',
                Ntilde: '\u00D1',
                Ograve: '\u00D2',
                Oacute: '\u00D3',
                Ocirc: '\u00D4',
                Otilde: '\u00D5',
                Ouml: '\u00D6',
                times: '\u00D7',
                Oslash: '\u00D8',
                Ugrave: '\u00D9',
                Uacute: '\u00DA',
                Ucirc: '\u00DB',
                Uuml: '\u00DC',
                Yacute: '\u00DD',
                THORN: '\u00DE',
                szlig: '\u00DF',
                agrave: '\u00E0',
                aacute: '\u00E1',
                acirc: '\u00E2',
                atilde: '\u00E3',
                auml: '\u00E4',
                aring: '\u00E5',
                aelig: '\u00E6',
                ccedil: '\u00E7',
                egrave: '\u00E8',
                eacute: '\u00E9',
                ecirc: '\u00EA',
                euml: '\u00EB',
                igrave: '\u00EC',
                iacute: '\u00ED',
                icirc: '\u00EE',
                iuml: '\u00EF',
                eth: '\u00F0',
                ntilde: '\u00F1',
                ograve: '\u00F2',
                oacute: '\u00F3',
                ocirc: '\u00F4',
                otilde: '\u00F5',
                ouml: '\u00F6',
                divide: '\u00F7',
                oslash: '\u00F8',
                ugrave: '\u00F9',
                uacute: '\u00FA',
                ucirc: '\u00FB',
                uuml: '\u00FC',
                yacute: '\u00FD',
                thorn: '\u00FE',
                yuml: '\u00FF',
                OElig: '\u0152',
                oelig: '\u0153',
                Scaron: '\u0160',
                scaron: '\u0161',
                Yuml: '\u0178',
                fnof: '\u0192',
                circ: '\u02C6',
                tilde: '\u02DC',
                Alpha: '\u0391',
                Beta: '\u0392',
                Gamma: '\u0393',
                Delta: '\u0394',
                Epsilon: '\u0395',
                Zeta: '\u0396',
                Eta: '\u0397',
                Theta: '\u0398',
                Iota: '\u0399',
                Kappa: '\u039A',
                Lambda: '\u039B',
                Mu: '\u039C',
                Nu: '\u039D',
                Xi: '\u039E',
                Omicron: '\u039F',
                Pi: '\u03A0',
                Rho: '\u03A1',
                Sigma: '\u03A3',
                Tau: '\u03A4',
                Upsilon: '\u03A5',
                Phi: '\u03A6',
                Chi: '\u03A7',
                Psi: '\u03A8',
                Omega: '\u03A9',
                alpha: '\u03B1',
                beta: '\u03B2',
                gamma: '\u03B3',
                delta: '\u03B4',
                epsilon: '\u03B5',
                zeta: '\u03B6',
                eta: '\u03B7',
                theta: '\u03B8',
                iota: '\u03B9',
                kappa: '\u03BA',
                lambda: '\u03BB',
                mu: '\u03BC',
                nu: '\u03BD',
                xi: '\u03BE',
                omicron: '\u03BF',
                pi: '\u03C0',
                rho: '\u03C1',
                sigmaf: '\u03C2',
                sigma: '\u03C3',
                tau: '\u03C4',
                upsilon: '\u03C5',
                phi: '\u03C6',
                chi: '\u03C7',
                psi: '\u03C8',
                omega: '\u03C9',
                thetasym: '\u03D1',
                upsih: '\u03D2',
                piv: '\u03D6',
                ensp: '\u2002',
                emsp: '\u2003',
                thinsp: '\u2009',
                zwnj: '\u200C',
                zwj: '\u200D',
                lrm: '\u200E',
                rlm: '\u200F',
                ndash: '\u2013',
                mdash: '\u2014',
                lsquo: '\u2018',
                rsquo: '\u2019',
                sbquo: '\u201A',
                ldquo: '\u201C',
                rdquo: '\u201D',
                bdquo: '\u201E',
                dagger: '\u2020',
                Dagger: '\u2021',
                bull: '\u2022',
                hellip: '\u2026',
                permil: '\u2030',
                prime: '\u2032',
                Prime: '\u2033',
                lsaquo: '\u2039',
                rsaquo: '\u203A',
                oline: '\u203E',
                frasl: '\u2044',
                euro: '\u20AC',
                image: '\u2111',
                weierp: '\u2118',
                real: '\u211C',
                trade: '\u2122',
                alefsym: '\u2135',
                larr: '\u2190',
                uarr: '\u2191',
                rarr: '\u2192',
                darr: '\u2193',
                harr: '\u2194',
                crarr: '\u21B5',
                lArr: '\u21D0',
                uArr: '\u21D1',
                rArr: '\u21D2',
                dArr: '\u21D3',
                hArr: '\u21D4',
                forall: '\u2200',
                part: '\u2202',
                exist: '\u2203',
                empty: '\u2205',
                nabla: '\u2207',
                isin: '\u2208',
                notin: '\u2209',
                ni: '\u220B',
                prod: '\u220F',
                sum: '\u2211',
                minus: '\u2212',
                lowast: '\u2217',
                radic: '\u221A',
                prop: '\u221D',
                infin: '\u221E',
                ang: '\u2220',
                and: '\u2227',
                or: '\u2228',
                cap: '\u2229',
                cup: '\u222A',
                'int': '\u222B',
                there4: '\u2234',
                sim: '\u223C',
                cong: '\u2245',
                asymp: '\u2248',
                ne: '\u2260',
                equiv: '\u2261',
                le: '\u2264',
                ge: '\u2265',
                sub: '\u2282',
                sup: '\u2283',
                nsub: '\u2284',
                sube: '\u2286',
                supe: '\u2287',
                oplus: '\u2295',
                otimes: '\u2297',
                perp: '\u22A5',
                sdot: '\u22C5',
                lceil: '\u2308',
                rceil: '\u2309',
                lfloor: '\u230A',
                rfloor: '\u230B',
                lang: '\u2329',
                rang: '\u232A',
                loz: '\u25CA',
                spades: '\u2660',
                clubs: '\u2663',
                hearts: '\u2665',
                diams: '\u2666'
            };

            function getQualifiedJSXName(object) {
                if (object.type === Syntax.JSXIdentifier) {
                    return object.name;
                }
                if (object.type === Syntax.JSXNamespacedName) {
                    return object.namespace.name + ':' + object.name.name;
                }
                /* istanbul ignore else */
                if (object.type === Syntax.JSXMemberExpression) {
                    return (
                        getQualifiedJSXName(object.object) + '.' +
                        getQualifiedJSXName(object.property)
                    );
                }
                /* istanbul ignore next */
                throwUnexpected(object);
            }

            function isJSXIdentifierStart(ch) {
                // exclude backslash (\)
                return (ch !== 92) && isIdentifierStart(ch);
            }

            function isJSXIdentifierPart(ch) {
                // exclude backslash (\) and add hyphen (-)
                return (ch !== 92) && (ch === 45 || isIdentifierPart(ch));
            }

            function scanJSXIdentifier() {
                var ch, start, value = '';

                start = index;
                while (index < length) {
                    ch = source.charCodeAt(index);
                    if (!isJSXIdentifierPart(ch)) {
                        break;
                    }
                    value += source[index++];
                }

                return {
                    type: Token.JSXIdentifier,
                    value: value,
                    lineNumber: lineNumber,
                    lineStart: lineStart,
                    range: [start, index]
                };
            }

            function scanJSXEntity() {
                var ch, str = '', start = index, count = 0, code;
                ch = source[index];
                assert(ch === '&', 'Entity must start with an ampersand');
                index++;
                while (index < length && count++ < 10) {
                    ch = source[index++];
                    if (ch === ';') {
                        break;
                    }
                    str += ch;
                }

                // Well-formed entity (ending was found).
                if (ch === ';') {
                    // Numeric entity.
                    if (str[0] === '#') {
                        if (str[1] === 'x') {
                            code = +('0' + str.substr(1));
                        } else {
                            // Removing leading zeros in order to avoid treating as octal in old browsers.
                            code = +str.substr(1).replace(Regex.LeadingZeros, '');
                        }

                        if (!isNaN(code)) {
                            return String.fromCharCode(code);
                        }
                        /* istanbul ignore else */
                    } else if (XHTMLEntities[str]) {
                        return XHTMLEntities[str];
                    }
                }

                // Treat non-entity sequences as regular text.
                index = start + 1;
                return '&';
            }

            function scanJSXText(stopChars) {
                var ch, str = '', start;
                start = index;
                while (index < length) {
                    ch = source[index];
                    if (stopChars.indexOf(ch) !== -1) {
                        break;
                    }
                    if (ch === '&') {
                        str += scanJSXEntity();
                    } else {
                        index++;
                        if (ch === '\r' && source[index] === '\n') {
                            str += ch;
                            ch = source[index];
                            index++;
                        }
                        if (isLineTerminator(ch.charCodeAt(0))) {
                            ++lineNumber;
                            lineStart = index;
                        }
                        str += ch;
                    }
                }
                return {
                    type: Token.JSXText,
                    value: str,
                    lineNumber: lineNumber,
                    lineStart: lineStart,
                    range: [start, index]
                };
            }

            function scanJSXStringLiteral() {
                var innerToken, quote, start;

                quote = source[index];
                assert((quote === '\'' || quote === '"'),
                    'String literal must starts with a quote');

                start = index;
                ++index;

                innerToken = scanJSXText([quote]);

                if (quote !== source[index]) {
                    throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
                }

                ++index;

                innerToken.range = [start, index];

                return innerToken;
            }

            /**
             * Between JSX opening and closing tags (e.g. <foo>HERE</foo>), anything that
             * is not another JSX tag and is not an expression wrapped by {} is text.
             */
            function advanceJSXChild() {
                var ch = source.charCodeAt(index);

                // '<' 60, '>' 62, '{' 123, '}' 125
                if (ch !== 60 && ch !== 62 && ch !== 123 && ch !== 125) {
                    return scanJSXText(['<', '>', '{', '}']);
                }

                return scanPunctuator();
            }

            function parseJSXIdentifier() {
                var token, marker = markerCreate();

                if (lookahead.type !== Token.JSXIdentifier) {
                    throwUnexpected(lookahead);
                }

                token = lex();
                return markerApply(marker, delegate.createJSXIdentifier(token.value));
            }

            function parseJSXNamespacedName() {
                var namespace, name, marker = markerCreate();

                namespace = parseJSXIdentifier();
                expect(':');
                name = parseJSXIdentifier();

                return markerApply(marker, delegate.createJSXNamespacedName(namespace, name));
            }

            function parseJSXMemberExpression() {
                var marker = markerCreate(),
                    expr = parseJSXIdentifier();

                while (match('.')) {
                    lex();
                    expr = markerApply(marker, delegate.createJSXMemberExpression(expr, parseJSXIdentifier()));
                }

                return expr;
            }

            function parseJSXElementName() {
                if (lookahead2().value === ':') {
                    return parseJSXNamespacedName();
                }
                if (lookahead2().value === '.') {
                    return parseJSXMemberExpression();
                }

                return parseJSXIdentifier();
            }

            function parseJSXAttributeName() {
                if (lookahead2().value === ':') {
                    return parseJSXNamespacedName();
                }

                return parseJSXIdentifier();
            }

            function parseJSXAttributeValue() {
                var value, marker;
                if (match('{')) {
                    value = parseJSXExpressionContainer();
                    if (value.expression.type === Syntax.JSXEmptyExpression) {
                        throwError(
                            value,
                            'JSX attributes must only be assigned a non-empty ' +
                            'expression'
                        );
                    }
                } else if (match('<')) {
                    value = parseJSXElement();
                } else if (lookahead.type === Token.JSXText) {
                    marker = markerCreate();
                    value = markerApply(marker, delegate.createLiteral(lex()));
                } else {
                    throwError({}, Messages.InvalidJSXAttributeValue);
                }
                return value;
            }

            function parseJSXEmptyExpression() {
                var marker = markerCreatePreserveWhitespace();
                while (source.charAt(index) !== '}') {
                    index++;
                }
                return markerApply(marker, delegate.createJSXEmptyExpression());
            }

            function parseJSXExpressionContainer() {
                var expression, origInJSXChild, origInJSXTag, marker = markerCreate();

                origInJSXChild = state.inJSXChild;
                origInJSXTag = state.inJSXTag;
                state.inJSXChild = false;
                state.inJSXTag = false;

                expect('{');

                if (match('}')) {
                    expression = parseJSXEmptyExpression();
                } else {
                    expression = parseExpression();
                }

                state.inJSXChild = origInJSXChild;
                state.inJSXTag = origInJSXTag;

                expect('}');

                return markerApply(marker, delegate.createJSXExpressionContainer(expression));
            }

            function parseJSXSpreadAttribute() {
                var expression, origInJSXChild, origInJSXTag, marker = markerCreate();

                origInJSXChild = state.inJSXChild;
                origInJSXTag = state.inJSXTag;
                state.inJSXChild = false;
                state.inJSXTag = false;

                expect('{');
                expect('...');

                expression = parseAssignmentExpression();

                state.inJSXChild = origInJSXChild;
                state.inJSXTag = origInJSXTag;

                expect('}');

                return markerApply(marker, delegate.createJSXSpreadAttribute(expression));
            }

            function parseJSXAttribute() {
                var name, marker;

                if (match('{')) {
                    return parseJSXSpreadAttribute();
                }

                marker = markerCreate();

                name = parseJSXAttributeName();

                // HTML empty attribute
                if (match('=')) {
                    lex();
                    return markerApply(marker, delegate.createJSXAttribute(name, parseJSXAttributeValue()));
                }

                return markerApply(marker, delegate.createJSXAttribute(name));
            }

            function parseJSXChild() {
                var token, marker;
                if (match('{')) {
                    token = parseJSXExpressionContainer();
                } else if (lookahead.type === Token.JSXText) {
                    marker = markerCreatePreserveWhitespace();
                    token = markerApply(marker, delegate.createLiteral(lex()));
                } else if (match('<')) {
                    token = parseJSXElement();
                } else {
                    throwUnexpected(lookahead);
                }
                return token;
            }

            function parseJSXClosingElement() {
                var name, origInJSXChild, origInJSXTag, marker = markerCreate();
                origInJSXChild = state.inJSXChild;
                origInJSXTag = state.inJSXTag;
                state.inJSXChild = false;
                state.inJSXTag = true;
                expect('<');
                expect('/');
                name = parseJSXElementName();
                // Because advance() (called by lex() called by expect()) expects there
                // to be a valid token after >, it needs to know whether to look for a
                // standard JS token or an JSX text node
                state.inJSXChild = origInJSXChild;
                state.inJSXTag = origInJSXTag;
                expect('>');
                return markerApply(marker, delegate.createJSXClosingElement(name));
            }

            function parseJSXOpeningElement() {
                var name, attributes = [], selfClosing = false, origInJSXChild, origInJSXTag, marker = markerCreate();

                origInJSXChild = state.inJSXChild;
                origInJSXTag = state.inJSXTag;
                state.inJSXChild = false;
                state.inJSXTag = true;

                expect('<');

                name = parseJSXElementName();

                while (index < length &&
                lookahead.value !== '/' &&
                lookahead.value !== '>') {
                    attributes.push(parseJSXAttribute());
                }

                state.inJSXTag = origInJSXTag;

                if (lookahead.value === '/') {
                    expect('/');
                    // Because advance() (called by lex() called by expect()) expects
                    // there to be a valid token after >, it needs to know whether to
                    // look for a standard JS token or an JSX text node
                    state.inJSXChild = origInJSXChild;
                    expect('>');
                    selfClosing = true;
                } else {
                    state.inJSXChild = true;
                    expect('>');
                }
                return markerApply(marker, delegate.createJSXOpeningElement(name, attributes, selfClosing));
            }

            function parseJSXElement() {
                var openingElement, closingElement = null, children = [], origInJSXChild, origInJSXTag, marker = markerCreate();

                origInJSXChild = state.inJSXChild;
                origInJSXTag = state.inJSXTag;
                openingElement = parseJSXOpeningElement();

                if (!openingElement.selfClosing) {
                    while (index < length) {
                        state.inJSXChild = false; // Call lookahead2() with inJSXChild = false because </ should not be considered in the child
                        if (lookahead.value === '<' && lookahead2().value === '/') {
                            break;
                        }
                        state.inJSXChild = true;
                        children.push(parseJSXChild());
                    }
                    state.inJSXChild = origInJSXChild;
                    state.inJSXTag = origInJSXTag;
                    closingElement = parseJSXClosingElement();
                    if (getQualifiedJSXName(closingElement.name) !== getQualifiedJSXName(openingElement.name)) {
                        throwError({}, Messages.ExpectedJSXClosingTag, getQualifiedJSXName(openingElement.name));
                    }
                }

                // When (erroneously) writing two adjacent tags like
                //
                //     var x = <div>one</div><div>two</div>;
                //
                // the default error message is a bit incomprehensible. Since it's
                // rarely (never?) useful to write a less-than sign after an JSX
                // element, we disallow it here in the parser in order to provide a
                // better error message. (In the rare case that the less-than operator
                // was intended, the left tag can be wrapped in parentheses.)
                if (!origInJSXChild && match('<')) {
                    throwError(lookahead, Messages.AdjacentJSXElements);
                }

                return markerApply(marker, delegate.createJSXElement(openingElement, closingElement, children));
            }

            function parseTypeAlias() {
                var id, marker = markerCreate(), typeParameters = null, right;
                expectContextualKeyword('type');
                id = parseVariableIdentifier();
                if (match('<')) {
                    typeParameters = parseTypeParameterDeclaration();
                }
                expect('=');
                right = parseType();
                consumeSemicolon();
                return markerApply(marker, delegate.createTypeAlias(id, typeParameters, right));
            }

            function parseInterfaceExtends() {
                var marker = markerCreate(), id, typeParameters = null;

                id = parseVariableIdentifier();
                if (match('<')) {
                    typeParameters = parseTypeParameterInstantiation();
                }

                return markerApply(marker, delegate.createInterfaceExtends(
                    id,
                    typeParameters
                ));
            }

            function parseInterfaceish(marker, allowStatic) {
                var body, bodyMarker, extended = [], id,
                    typeParameters = null;

                id = parseVariableIdentifier();
                if (match('<')) {
                    typeParameters = parseTypeParameterDeclaration();
                }

                if (matchKeyword('extends')) {
                    expectKeyword('extends');

                    while (index < length) {
                        extended.push(parseInterfaceExtends());
                        if (!match(',')) {
                            break;
                        }
                        expect(',');
                    }
                }

                bodyMarker = markerCreate();
                body = markerApply(bodyMarker, parseObjectType(allowStatic));

                return markerApply(marker, delegate.createInterface(
                    id,
                    typeParameters,
                    body,
                    extended
                ));
            }

            function parseInterface() {
                var marker = markerCreate();

                if (strict) {
                    expectKeyword('interface');
                } else {
                    expectContextualKeyword('interface');
                }

                return parseInterfaceish(marker, /* allowStatic */false);
            }

            function parseDeclareClass() {
                var marker = markerCreate(), ret;
                expectContextualKeyword('declare');
                expectKeyword('class');

                ret = parseInterfaceish(marker, /* allowStatic */true);
                ret.type = Syntax.DeclareClass;
                return ret;
            }

            function parseDeclareFunction() {
                var id, idMarker,
                    marker = markerCreate(), params, returnType, rest, tmp,
                    typeParameters = null, value, valueMarker;

                expectContextualKeyword('declare');
                expectKeyword('function');
                idMarker = markerCreate();
                id = parseVariableIdentifier();

                valueMarker = markerCreate();
                if (match('<')) {
                    typeParameters = parseTypeParameterDeclaration();
                }
                expect('(');
                tmp = parseFunctionTypeParams();
                params = tmp.params;
                rest = tmp.rest;
                expect(')');

                expect(':');
                returnType = parseType();

                value = markerApply(valueMarker, delegate.createFunctionTypeAnnotation(
                    params,
                    returnType,
                    rest,
                    typeParameters
                ));

                id.typeAnnotation = markerApply(valueMarker, delegate.createTypeAnnotation(
                    value
                ));
                markerApply(idMarker, id);

                consumeSemicolon();

                return markerApply(marker, delegate.createDeclareFunction(
                    id
                ));
            }

            function parseDeclareVariable() {
                var id, marker = markerCreate();
                expectContextualKeyword('declare');
                expectKeyword('var');
                id = parseTypeAnnotatableIdentifier();

                consumeSemicolon();

                return markerApply(marker, delegate.createDeclareVariable(
                    id
                ));
            }

            function parseDeclareModule() {
                var body = [], bodyMarker, id, idMarker, marker = markerCreate(), token;
                expectContextualKeyword('declare');
                expectContextualKeyword('module');

                if (lookahead.type === Token.StringLiteral) {
                    if (strict && lookahead.octal) {
                        throwErrorTolerant(lookahead, Messages.StrictOctalLiteral);
                    }
                    idMarker = markerCreate();
                    id = markerApply(idMarker, delegate.createLiteral(lex()));
                } else {
                    id = parseVariableIdentifier();
                }

                bodyMarker = markerCreate();
                expect('{');
                while (index < length && !match('}')) {
                    token = lookahead2();
                    switch (token.value) {
                        case 'class':
                            body.push(parseDeclareClass());
                            break;
                        case 'function':
                            body.push(parseDeclareFunction());
                            break;
                        case 'var':
                            body.push(parseDeclareVariable());
                            break;
                        default:
                            throwUnexpected(lookahead);
                    }
                }
                expect('}');

                return markerApply(marker, delegate.createDeclareModule(
                    id,
                    markerApply(bodyMarker, delegate.createBlockStatement(body))
                ));
            }

            function collectToken() {
                var loc, token, range, value, entry;

                /* istanbul ignore else */
                if (!state.inJSXChild) {
                    skipComment();
                }

                loc = {
                    start: {
                        line: lineNumber,
                        column: index - lineStart
                    }
                };

                token = extra.advance();
                loc.end = {
                    line: lineNumber,
                    column: index - lineStart
                };

                if (token.type !== Token.EOF) {
                    range = [token.range[0], token.range[1]];
                    value = source.slice(token.range[0], token.range[1]);
                    entry = {
                        type: TokenName[token.type],
                        value: value,
                        range: range,
                        loc: loc
                    };
                    if (token.regex) {
                        entry.regex = {
                            pattern: token.regex.pattern,
                            flags: token.regex.flags
                        };
                    }
                    extra.tokens.push(entry);
                }

                return token;
            }

            function collectRegex() {
                var pos, loc, regex, token;

                skipComment();

                pos = index;
                loc = {
                    start: {
                        line: lineNumber,
                        column: index - lineStart
                    }
                };

                regex = extra.scanRegExp();
                loc.end = {
                    line: lineNumber,
                    column: index - lineStart
                };

                if (!extra.tokenize) {
                    /* istanbul ignore next */
                    // Pop the previous token, which is likely '/' or '/='
                    if (extra.tokens.length > 0) {
                        token = extra.tokens[extra.tokens.length - 1];
                        if (token.range[0] === pos && token.type === 'Punctuator') {
                            if (token.value === '/' || token.value === '/=') {
                                extra.tokens.pop();
                            }
                        }
                    }

                    extra.tokens.push({
                        type: 'RegularExpression',
                        value: regex.literal,
                        regex: regex.regex,
                        range: [pos, index],
                        loc: loc
                    });
                }

                return regex;
            }

            function filterTokenLocation() {
                var i, entry, token, tokens = [];

                for (i = 0; i < extra.tokens.length; ++i) {
                    entry = extra.tokens[i];
                    token = {
                        type: entry.type,
                        value: entry.value
                    };
                    if (entry.regex) {
                        token.regex = {
                            pattern: entry.regex.pattern,
                            flags: entry.regex.flags
                        };
                    }
                    if (extra.range) {
                        token.range = entry.range;
                    }
                    if (extra.loc) {
                        token.loc = entry.loc;
                    }
                    tokens.push(token);
                }

                extra.tokens = tokens;
            }

            function patch() {
                if (typeof extra.tokens !== 'undefined') {
                    extra.advance = advance;
                    extra.scanRegExp = scanRegExp;

                    advance = collectToken;
                    scanRegExp = collectRegex;
                }
            }

            function unpatch() {
                if (typeof extra.scanRegExp === 'function') {
                    advance = extra.advance;
                    scanRegExp = extra.scanRegExp;
                }
            }

            // This is used to modify the delegate.

            function extend(object, properties) {
                var entry, result = {};

                for (entry in object) {
                    /* istanbul ignore else */
                    if (object.hasOwnProperty(entry)) {
                        result[entry] = object[entry];
                    }
                }

                for (entry in properties) {
                    /* istanbul ignore else */
                    if (properties.hasOwnProperty(entry)) {
                        result[entry] = properties[entry];
                    }
                }

                return result;
            }

            function tokenize(code, options) {
                var toString,
                    token,
                    tokens;

                toString = String;
                if (typeof code !== 'string' && !(code instanceof String)) {
                    code = toString(code);
                }

                delegate = SyntaxTreeDelegate;
                source = code;
                index = 0;
                lineNumber = (source.length > 0) ? 1 : 0;
                lineStart = 0;
                length = source.length;
                lookahead = null;
                state = {
                    allowKeyword: true,
                    allowIn: true,
                    labelSet: new StringMap(),
                    inFunctionBody: false,
                    inIteration: false,
                    inSwitch: false,
                    lastCommentStart: -1
                };

                extra = {};

                // Options matching.
                options = options || {};

                // Of course we collect tokens here.
                options.tokens = true;
                extra.tokens = [];
                extra.tokenize = true;
                // The following two fields are necessary to compute the Regex tokens.
                extra.openParenToken = -1;
                extra.openCurlyToken = -1;

                extra.range = (typeof options.range === 'boolean') && options.range;
                extra.loc = (typeof options.loc === 'boolean') && options.loc;

                if (typeof options.comment === 'boolean' && options.comment) {
                    extra.comments = [];
                }
                if (typeof options.tolerant === 'boolean' && options.tolerant) {
                    extra.errors = [];
                }

                patch();

                try {
                    peek();
                    if (lookahead.type === Token.EOF) {
                        return extra.tokens;
                    }

                    token = lex();
                    while (lookahead.type !== Token.EOF) {
                        try {
                            token = lex();
                        } catch (lexError) {
                            token = lookahead;
                            if (extra.errors) {
                                extra.errors.push(lexError);
                                // We have to break on the first error
                                // to avoid infinite loops.
                                break;
                            } else {
                                throw lexError;
                            }
                        }
                    }

                    filterTokenLocation();
                    tokens = extra.tokens;
                    if (typeof extra.comments !== 'undefined') {
                        tokens.comments = extra.comments;
                    }
                    if (typeof extra.errors !== 'undefined') {
                        tokens.errors = extra.errors;
                    }
                } catch (e) {
                    throw e;
                } finally {
                    unpatch();
                    extra = {};
                }
                return tokens;
            }

            function parse(code, options) {
                var program, toString;

                toString = String;
                if (typeof code !== 'string' && !(code instanceof String)) {
                    code = toString(code);
                }

                delegate = SyntaxTreeDelegate;
                source = code;
                index = 0;
                lineNumber = (source.length > 0) ? 1 : 0;
                lineStart = 0;
                length = source.length;
                lookahead = null;
                state = {
                    allowKeyword: false,
                    allowIn: true,
                    labelSet: new StringMap(),
                    parenthesizedCount: 0,
                    inFunctionBody: false,
                    inIteration: false,
                    inSwitch: false,
                    inJSXChild: false,
                    inJSXTag: false,
                    inType: false,
                    lastCommentStart: -1,
                    yieldAllowed: false,
                    awaitAllowed: false
                };

                extra = {};
                if (typeof options !== 'undefined') {
                    extra.range = (typeof options.range === 'boolean') && options.range;
                    extra.loc = (typeof options.loc === 'boolean') && options.loc;
                    extra.attachComment = (typeof options.attachComment === 'boolean') && options.attachComment;

                    if (extra.loc && options.source !== null && options.source !== undefined) {
                        delegate = extend(delegate, {
                            'postProcess': function (node) {
                                node.loc.source = toString(options.source);
                                return node;
                            }
                        });
                    }

                    extra.sourceType = options.sourceType;
                    if (typeof options.tokens === 'boolean' && options.tokens) {
                        extra.tokens = [];
                    }
                    if (typeof options.comment === 'boolean' && options.comment) {
                        extra.comments = [];
                    }
                    if (typeof options.tolerant === 'boolean' && options.tolerant) {
                        extra.errors = [];
                    }
                    if (extra.attachComment) {
                        extra.range = true;
                        extra.comments = [];
                        extra.bottomRightStack = [];
                        extra.trailingComments = [];
                        extra.leadingComments = [];
                    }
                }

                patch();
                try {
                    program = parseProgram();
                    if (typeof extra.comments !== 'undefined') {
                        program.comments = extra.comments;
                    }
                    if (typeof extra.tokens !== 'undefined') {
                        filterTokenLocation();
                        program.tokens = extra.tokens;
                    }
                    if (typeof extra.errors !== 'undefined') {
                        program.errors = extra.errors;
                    }
                } catch (e) {
                    throw e;
                } finally {
                    unpatch();
                    extra = {};
                }

                return program;
            }

            // Sync with *.json manifests.
            exports.version = '13001.1001.0-dev-harmony-fb';

            exports.tokenize = tokenize;

            exports.parse = parse;

            // Deep copy.
            /* istanbul ignore next */
            exports.Syntax = (function () {
                var name, types = {};

                if (typeof Object.create === 'function') {
                    types = Object.create(null);
                }

                for (name in Syntax) {
                    if (Syntax.hasOwnProperty(name)) {
                        types[name] = Syntax[name];
                    }
                }

                if (typeof Object.freeze === 'function') {
                    Object.freeze(types);
                }

                return types;
            }());

        }));
        /* vim: set sw=4 ts=4 et tw=80 : */

    },{}],10:[function(_dereq_,module,exports){
        var Base62 = (function (my) {
            my.chars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

            my.encode = function(i){
                if (i === 0) {return '0'}
                var s = ''
                while (i > 0) {
                    s = this.chars[i % 62] + s
                    i = Math.floor(i/62)
                }
                return s
            };
            my.decode = function(a,b,c,d){
                for (
                    b = c = (
                        a === (/\W|_|^$/.test(a += "") || a)
                    ) - 1;
                    d = a.charCodeAt(c++);
                )
                    b = b * 62 + d - [, 48, 29, 87][d >> 5];
                return b
            };

            return my;
        }({}));

        module.exports = Base62
    },{}],11:[function(_dereq_,module,exports){
        /*
 * Copyright 2009-2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE.txt or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
        exports.SourceMapGenerator = _dereq_('./source-map/source-map-generator').SourceMapGenerator;
        exports.SourceMapConsumer = _dereq_('./source-map/source-map-consumer').SourceMapConsumer;
        exports.SourceNode = _dereq_('./source-map/source-node').SourceNode;

    },{"./source-map/source-map-consumer":16,"./source-map/source-map-generator":17,"./source-map/source-node":18}],12:[function(_dereq_,module,exports){
        /* -*- Mode: js; js-indent-level: 2; -*- */
        /*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
        if (typeof define !== 'function') {
            var define = _dereq_('amdefine')(module, _dereq_);
        }
        define(function (_dereq_, exports, module) {

            var util = _dereq_('./util');

            /**
             * A data structure which is a combination of an array and a set. Adding a new
             * member is O(1), testing for membership is O(1), and finding the index of an
             * element is O(1). Removing elements from the set is not supported. Only
             * strings are supported for membership.
             */
            function ArraySet() {
                this._array = [];
                this._set = {};
            }

            /**
             * Static method for creating ArraySet instances from an existing array.
             */
            ArraySet.fromArray = function ArraySet_fromArray(aArray, aAllowDuplicates) {
                var set = new ArraySet();
                for (var i = 0, len = aArray.length; i < len; i++) {
                    set.add(aArray[i], aAllowDuplicates);
                }
                return set;
            };

            /**
             * Add the given string to this set.
             *
             * @param String aStr
             */
            ArraySet.prototype.add = function ArraySet_add(aStr, aAllowDuplicates) {
                var isDuplicate = this.has(aStr);
                var idx = this._array.length;
                if (!isDuplicate || aAllowDuplicates) {
                    this._array.push(aStr);
                }
                if (!isDuplicate) {
                    this._set[util.toSetString(aStr)] = idx;
                }
            };

            /**
             * Is the given string a member of this set?
             *
             * @param String aStr
             */
            ArraySet.prototype.has = function ArraySet_has(aStr) {
                return Object.prototype.hasOwnProperty.call(this._set,
                    util.toSetString(aStr));
            };

            /**
             * What is the index of the given string in the array?
             *
             * @param String aStr
             */
            ArraySet.prototype.indexOf = function ArraySet_indexOf(aStr) {
                if (this.has(aStr)) {
                    return this._set[util.toSetString(aStr)];
                }
                throw new Error('"' + aStr + '" is not in the set.');
            };

            /**
             * What is the element at the given index?
             *
             * @param Number aIdx
             */
            ArraySet.prototype.at = function ArraySet_at(aIdx) {
                if (aIdx >= 0 && aIdx < this._array.length) {
                    return this._array[aIdx];
                }
                throw new Error('No element indexed by ' + aIdx);
            };

            /**
             * Returns the array representation of this set (which has the proper indices
             * indicated by indexOf). Note that this is a copy of the internal array used
             * for storing the members so that no one can mess with internal state.
             */
            ArraySet.prototype.toArray = function ArraySet_toArray() {
                return this._array.slice();
            };

            exports.ArraySet = ArraySet;

        });

    },{"./util":19,"amdefine":20}],13:[function(_dereq_,module,exports){
        /* -*- Mode: js; js-indent-level: 2; -*- */
        /*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 *
 * Based on the Base 64 VLQ implementation in Closure Compiler:
 * https://code.google.com/p/closure-compiler/source/browse/trunk/src/com/google/debugging/sourcemap/Base64VLQ.java
 *
 * Copyright 2011 The Closure Compiler Authors. All rights reserved.
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *  * Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above
 *    copyright notice, this list of conditions and the following
 *    disclaimer in the documentation and/or other materials provided
 *    with the distribution.
 *  * Neither the name of Google Inc. nor the names of its
 *    contributors may be used to endorse or promote products derived
 *    from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
        if (typeof define !== 'function') {
            var define = _dereq_('amdefine')(module, _dereq_);
        }
        define(function (_dereq_, exports, module) {

            var base64 = _dereq_('./base64');

            // A single base 64 digit can contain 6 bits of data. For the base 64 variable
            // length quantities we use in the source map spec, the first bit is the sign,
            // the next four bits are the actual value, and the 6th bit is the
            // continuation bit. The continuation bit tells us whether there are more
            // digits in this value following this digit.
            //
            //   Continuation
            //   |    Sign
            //   |    |
            //   V    V
            //   101011

            var VLQ_BASE_SHIFT = 5;

            // binary: 100000
            var VLQ_BASE = 1 << VLQ_BASE_SHIFT;

            // binary: 011111
            var VLQ_BASE_MASK = VLQ_BASE - 1;

            // binary: 100000
            var VLQ_CONTINUATION_BIT = VLQ_BASE;

            /**
             * Converts from a two-complement value to a value where the sign bit is
             * is placed in the least significant bit.  For example, as decimals:
             *   1 becomes 2 (10 binary), -1 becomes 3 (11 binary)
             *   2 becomes 4 (100 binary), -2 becomes 5 (101 binary)
             */
            function toVLQSigned(aValue) {
                return aValue < 0
                    ? ((-aValue) << 1) + 1
                    : (aValue << 1) + 0;
            }

            /**
             * Converts to a two-complement value from a value where the sign bit is
             * is placed in the least significant bit.  For example, as decimals:
             *   2 (10 binary) becomes 1, 3 (11 binary) becomes -1
             *   4 (100 binary) becomes 2, 5 (101 binary) becomes -2
             */
            function fromVLQSigned(aValue) {
                var isNegative = (aValue & 1) === 1;
                var shifted = aValue >> 1;
                return isNegative
                    ? -shifted
                    : shifted;
            }

            /**
             * Returns the base 64 VLQ encoded value.
             */
            exports.encode = function base64VLQ_encode(aValue) {
                var encoded = "";
                var digit;

                var vlq = toVLQSigned(aValue);

                do {
                    digit = vlq & VLQ_BASE_MASK;
                    vlq >>>= VLQ_BASE_SHIFT;
                    if (vlq > 0) {
                        // There are still more digits in this value, so we must make sure the
                        // continuation bit is marked.
                        digit |= VLQ_CONTINUATION_BIT;
                    }
                    encoded += base64.encode(digit);
                } while (vlq > 0);

                return encoded;
            };

            /**
             * Decodes the next base 64 VLQ value from the given string and returns the
             * value and the rest of the string.
             */
            exports.decode = function base64VLQ_decode(aStr) {
                var i = 0;
                var strLen = aStr.length;
                var result = 0;
                var shift = 0;
                var continuation, digit;

                do {
                    if (i >= strLen) {
                        throw new Error("Expected more digits in base 64 VLQ value.");
                    }
                    digit = base64.decode(aStr.charAt(i++));
                    continuation = !!(digit & VLQ_CONTINUATION_BIT);
                    digit &= VLQ_BASE_MASK;
                    result = result + (digit << shift);
                    shift += VLQ_BASE_SHIFT;
                } while (continuation);

                return {
                    value: fromVLQSigned(result),
                    rest: aStr.slice(i)
                };
            };

        });

    },{"./base64":14,"amdefine":20}],14:[function(_dereq_,module,exports){
        /* -*- Mode: js; js-indent-level: 2; -*- */
        /*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
        if (typeof define !== 'function') {
            var define = _dereq_('amdefine')(module, _dereq_);
        }
        define(function (_dereq_, exports, module) {

            var charToIntMap = {};
            var intToCharMap = {};

            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
                .split('')
                .forEach(function (ch, index) {
                    charToIntMap[ch] = index;
                    intToCharMap[index] = ch;
                });

            /**
             * Encode an integer in the range of 0 to 63 to a single base 64 digit.
             */
            exports.encode = function base64_encode(aNumber) {
                if (aNumber in intToCharMap) {
                    return intToCharMap[aNumber];
                }
                throw new TypeError("Must be between 0 and 63: " + aNumber);
            };

            /**
             * Decode a single base 64 digit to an integer.
             */
            exports.decode = function base64_decode(aChar) {
                if (aChar in charToIntMap) {
                    return charToIntMap[aChar];
                }
                throw new TypeError("Not a valid base 64 digit: " + aChar);
            };

        });

    },{"amdefine":20}],15:[function(_dereq_,module,exports){
        /* -*- Mode: js; js-indent-level: 2; -*- */
        /*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
        if (typeof define !== 'function') {
            var define = _dereq_('amdefine')(module, _dereq_);
        }
        define(function (_dereq_, exports, module) {

            /**
             * Recursive implementation of binary search.
             *
             * @param aLow Indices here and lower do not contain the needle.
             * @param aHigh Indices here and higher do not contain the needle.
             * @param aNeedle The element being searched for.
             * @param aHaystack The non-empty array being searched.
             * @param aCompare Function which takes two elements and returns -1, 0, or 1.
             */
            function recursiveSearch(aLow, aHigh, aNeedle, aHaystack, aCompare) {
                // This function terminates when one of the following is true:
                //
                //   1. We find the exact element we are looking for.
                //
                //   2. We did not find the exact element, but we can return the next
                //      closest element that is less than that element.
                //
                //   3. We did not find the exact element, and there is no next-closest
                //      element which is less than the one we are searching for, so we
                //      return null.
                var mid = Math.floor((aHigh - aLow) / 2) + aLow;
                var cmp = aCompare(aNeedle, aHaystack[mid], true);
                if (cmp === 0) {
                    // Found the element we are looking for.
                    return aHaystack[mid];
                }
                else if (cmp > 0) {
                    // aHaystack[mid] is greater than our needle.
                    if (aHigh - mid > 1) {
                        // The element is in the upper half.
                        return recursiveSearch(mid, aHigh, aNeedle, aHaystack, aCompare);
                    }
                    // We did not find an exact match, return the next closest one
                    // (termination case 2).
                    return aHaystack[mid];
                }
                else {
                    // aHaystack[mid] is less than our needle.
                    if (mid - aLow > 1) {
                        // The element is in the lower half.
                        return recursiveSearch(aLow, mid, aNeedle, aHaystack, aCompare);
                    }
                    // The exact needle element was not found in this haystack. Determine if
                    // we are in termination case (2) or (3) and return the appropriate thing.
                    return aLow < 0
                        ? null
                        : aHaystack[aLow];
                }
            }

            /**
             * This is an implementation of binary search which will always try and return
             * the next lowest value checked if there is no exact hit. This is because
             * mappings between original and generated line/col pairs are single points,
             * and there is an implicit region between each of them, so a miss just means
             * that you aren't on the very start of a region.
             *
             * @param aNeedle The element you are looking for.
             * @param aHaystack The array that is being searched.
             * @param aCompare A function which takes the needle and an element in the
             *     array and returns -1, 0, or 1 depending on whether the needle is less
             *     than, equal to, or greater than the element, respectively.
             */
            exports.search = function search(aNeedle, aHaystack, aCompare) {
                return aHaystack.length > 0
                    ? recursiveSearch(-1, aHaystack.length, aNeedle, aHaystack, aCompare)
                    : null;
            };

        });

    },{"amdefine":20}],16:[function(_dereq_,module,exports){
        /* -*- Mode: js; js-indent-level: 2; -*- */
        /*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
        if (typeof define !== 'function') {
            var define = _dereq_('amdefine')(module, _dereq_);
        }
        define(function (_dereq_, exports, module) {

            var util = _dereq_('./util');
            var binarySearch = _dereq_('./binary-search');
            var ArraySet = _dereq_('./array-set').ArraySet;
            var base64VLQ = _dereq_('./base64-vlq');

            /**
             * A SourceMapConsumer instance represents a parsed source map which we can
             * query for information about the original file positions by giving it a file
             * position in the generated source.
             *
             * The only parameter is the raw source map (either as a JSON string, or
             * already parsed to an object). According to the spec, source maps have the
             * following attributes:
             *
             *   - version: Which version of the source map spec this map is following.
             *   - sources: An array of URLs to the original source files.
             *   - names: An array of identifiers which can be referrenced by individual mappings.
             *   - sourceRoot: Optional. The URL root from which all sources are relative.
             *   - sourcesContent: Optional. An array of contents of the original source files.
             *   - mappings: A string of base64 VLQs which contain the actual mappings.
             *   - file: The generated file this source map is associated with.
             *
             * Here is an example source map, taken from the source map spec[0]:
             *
             *     {
             *       version : 3,
             *       file: "out.js",
             *       sourceRoot : "",
             *       sources: ["foo.js", "bar.js"],
             *       names: ["src", "maps", "are", "fun"],
             *       mappings: "AA,AB;;ABCDE;"
             *     }
             *
             * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit?pli=1#
             */
            function SourceMapConsumer(aSourceMap) {
                var sourceMap = aSourceMap;
                if (typeof aSourceMap === 'string') {
                    sourceMap = JSON.parse(aSourceMap.replace(/^\)\]\}'/, ''));
                }

                var version = util.getArg(sourceMap, 'version');
                var sources = util.getArg(sourceMap, 'sources');
                // Sass 3.3 leaves out the 'names' array, so we deviate from the spec (which
                // requires the array) to play nice here.
                var names = util.getArg(sourceMap, 'names', []);
                var sourceRoot = util.getArg(sourceMap, 'sourceRoot', null);
                var sourcesContent = util.getArg(sourceMap, 'sourcesContent', null);
                var mappings = util.getArg(sourceMap, 'mappings');
                var file = util.getArg(sourceMap, 'file', null);

                // Once again, Sass deviates from the spec and supplies the version as a
                // string rather than a number, so we use loose equality checking here.
                if (version != this._version) {
                    throw new Error('Unsupported version: ' + version);
                }

                // Pass `true` below to allow duplicate names and sources. While source maps
                // are intended to be compressed and deduplicated, the TypeScript compiler
                // sometimes generates source maps with duplicates in them. See Github issue
                // #72 and bugzil.la/889492.
                this._names = ArraySet.fromArray(names, true);
                this._sources = ArraySet.fromArray(sources, true);

                this.sourceRoot = sourceRoot;
                this.sourcesContent = sourcesContent;
                this._mappings = mappings;
                this.file = file;
            }

            /**
             * Create a SourceMapConsumer from a SourceMapGenerator.
             *
             * @param SourceMapGenerator aSourceMap
             *        The source map that will be consumed.
             * @returns SourceMapConsumer
             */
            SourceMapConsumer.fromSourceMap =
                function SourceMapConsumer_fromSourceMap(aSourceMap) {
                    var smc = Object.create(SourceMapConsumer.prototype);

                    smc._names = ArraySet.fromArray(aSourceMap._names.toArray(), true);
                    smc._sources = ArraySet.fromArray(aSourceMap._sources.toArray(), true);
                    smc.sourceRoot = aSourceMap._sourceRoot;
                    smc.sourcesContent = aSourceMap._generateSourcesContent(smc._sources.toArray(),
                        smc.sourceRoot);
                    smc.file = aSourceMap._file;

                    smc.__generatedMappings = aSourceMap._mappings.slice()
                        .sort(util.compareByGeneratedPositions);
                    smc.__originalMappings = aSourceMap._mappings.slice()
                        .sort(util.compareByOriginalPositions);

                    return smc;
                };

            /**
             * The version of the source mapping spec that we are consuming.
             */
            SourceMapConsumer.prototype._version = 3;

            /**
             * The list of original sources.
             */
            Object.defineProperty(SourceMapConsumer.prototype, 'sources', {
                get: function () {
                    return this._sources.toArray().map(function (s) {
                        return this.sourceRoot ? util.join(this.sourceRoot, s) : s;
                    }, this);
                }
            });

            // `__generatedMappings` and `__originalMappings` are arrays that hold the
            // parsed mapping coordinates from the source map's "mappings" attribute. They
            // are lazily instantiated, accessed via the `_generatedMappings` and
            // `_originalMappings` getters respectively, and we only parse the mappings
            // and create these arrays once queried for a source location. We jump through
            // these hoops because there can be many thousands of mappings, and parsing
            // them is expensive, so we only want to do it if we must.
            //
            // Each object in the arrays is of the form:
            //
            //     {
            //       generatedLine: The line number in the generated code,
            //       generatedColumn: The column number in the generated code,
            //       source: The path to the original source file that generated this
            //               chunk of code,
            //       originalLine: The line number in the original source that
            //                     corresponds to this chunk of generated code,
            //       originalColumn: The column number in the original source that
            //                       corresponds to this chunk of generated code,
            //       name: The name of the original symbol which generated this chunk of
            //             code.
            //     }
            //
            // All properties except for `generatedLine` and `generatedColumn` can be
            // `null`.
            //
            // `_generatedMappings` is ordered by the generated positions.
            //
            // `_originalMappings` is ordered by the original positions.

            SourceMapConsumer.prototype.__generatedMappings = null;
            Object.defineProperty(SourceMapConsumer.prototype, '_generatedMappings', {
                get: function () {
                    if (!this.__generatedMappings) {
                        this.__generatedMappings = [];
                        this.__originalMappings = [];
                        this._parseMappings(this._mappings, this.sourceRoot);
                    }

                    return this.__generatedMappings;
                }
            });

            SourceMapConsumer.prototype.__originalMappings = null;
            Object.defineProperty(SourceMapConsumer.prototype, '_originalMappings', {
                get: function () {
                    if (!this.__originalMappings) {
                        this.__generatedMappings = [];
                        this.__originalMappings = [];
                        this._parseMappings(this._mappings, this.sourceRoot);
                    }

                    return this.__originalMappings;
                }
            });

            /**
             * Parse the mappings in a string in to a data structure which we can easily
             * query (the ordered arrays in the `this.__generatedMappings` and
             * `this.__originalMappings` properties).
             */
            SourceMapConsumer.prototype._parseMappings =
                function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
                    var generatedLine = 1;
                    var previousGeneratedColumn = 0;
                    var previousOriginalLine = 0;
                    var previousOriginalColumn = 0;
                    var previousSource = 0;
                    var previousName = 0;
                    var mappingSeparator = /^[,;]/;
                    var str = aStr;
                    var mapping;
                    var temp;

                    while (str.length > 0) {
                        if (str.charAt(0) === ';') {
                            generatedLine++;
                            str = str.slice(1);
                            previousGeneratedColumn = 0;
                        }
                        else if (str.charAt(0) === ',') {
                            str = str.slice(1);
                        }
                        else {
                            mapping = {};
                            mapping.generatedLine = generatedLine;

                            // Generated column.
                            temp = base64VLQ.decode(str);
                            mapping.generatedColumn = previousGeneratedColumn + temp.value;
                            previousGeneratedColumn = mapping.generatedColumn;
                            str = temp.rest;

                            if (str.length > 0 && !mappingSeparator.test(str.charAt(0))) {
                                // Original source.
                                temp = base64VLQ.decode(str);
                                mapping.source = this._sources.at(previousSource + temp.value);
                                previousSource += temp.value;
                                str = temp.rest;
                                if (str.length === 0 || mappingSeparator.test(str.charAt(0))) {
                                    throw new Error('Found a source, but no line and column');
                                }

                                // Original line.
                                temp = base64VLQ.decode(str);
                                mapping.originalLine = previousOriginalLine + temp.value;
                                previousOriginalLine = mapping.originalLine;
                                // Lines are stored 0-based
                                mapping.originalLine += 1;
                                str = temp.rest;
                                if (str.length === 0 || mappingSeparator.test(str.charAt(0))) {
                                    throw new Error('Found a source and line, but no column');
                                }

                                // Original column.
                                temp = base64VLQ.decode(str);
                                mapping.originalColumn = previousOriginalColumn + temp.value;
                                previousOriginalColumn = mapping.originalColumn;
                                str = temp.rest;

                                if (str.length > 0 && !mappingSeparator.test(str.charAt(0))) {
                                    // Original name.
                                    temp = base64VLQ.decode(str);
                                    mapping.name = this._names.at(previousName + temp.value);
                                    previousName += temp.value;
                                    str = temp.rest;
                                }
                            }

                            this.__generatedMappings.push(mapping);
                            if (typeof mapping.originalLine === 'number') {
                                this.__originalMappings.push(mapping);
                            }
                        }
                    }

                    this.__originalMappings.sort(util.compareByOriginalPositions);
                };

            /**
             * Find the mapping that best matches the hypothetical "needle" mapping that
             * we are searching for in the given "haystack" of mappings.
             */
            SourceMapConsumer.prototype._findMapping =
                function SourceMapConsumer_findMapping(aNeedle, aMappings, aLineName,
                                                       aColumnName, aComparator) {
                    // To return the position we are searching for, we must first find the
                    // mapping for the given position and then return the opposite position it
                    // points to. Because the mappings are sorted, we can use binary search to
                    // find the best mapping.

                    if (aNeedle[aLineName] <= 0) {
                        throw new TypeError('Line must be greater than or equal to 1, got '
                            + aNeedle[aLineName]);
                    }
                    if (aNeedle[aColumnName] < 0) {
                        throw new TypeError('Column must be greater than or equal to 0, got '
                            + aNeedle[aColumnName]);
                    }

                    return binarySearch.search(aNeedle, aMappings, aComparator);
                };

            /**
             * Returns the original source, line, and column information for the generated
             * source's line and column positions provided. The only argument is an object
             * with the following properties:
             *
             *   - line: The line number in the generated source.
             *   - column: The column number in the generated source.
             *
             * and an object is returned with the following properties:
             *
             *   - source: The original source file, or null.
             *   - line: The line number in the original source, or null.
             *   - column: The column number in the original source, or null.
             *   - name: The original identifier, or null.
             */
            SourceMapConsumer.prototype.originalPositionFor =
                function SourceMapConsumer_originalPositionFor(aArgs) {
                    var needle = {
                        generatedLine: util.getArg(aArgs, 'line'),
                        generatedColumn: util.getArg(aArgs, 'column')
                    };

                    var mapping = this._findMapping(needle,
                        this._generatedMappings,
                        "generatedLine",
                        "generatedColumn",
                        util.compareByGeneratedPositions);

                    if (mapping) {
                        var source = util.getArg(mapping, 'source', null);
                        if (source && this.sourceRoot) {
                            source = util.join(this.sourceRoot, source);
                        }
                        return {
                            source: source,
                            line: util.getArg(mapping, 'originalLine', null),
                            column: util.getArg(mapping, 'originalColumn', null),
                            name: util.getArg(mapping, 'name', null)
                        };
                    }

                    return {
                        source: null,
                        line: null,
                        column: null,
                        name: null
                    };
                };

            /**
             * Returns the original source content. The only argument is the url of the
             * original source file. Returns null if no original source content is
             * availible.
             */
            SourceMapConsumer.prototype.sourceContentFor =
                function SourceMapConsumer_sourceContentFor(aSource) {
                    if (!this.sourcesContent) {
                        return null;
                    }

                    if (this.sourceRoot) {
                        aSource = util.relative(this.sourceRoot, aSource);
                    }

                    if (this._sources.has(aSource)) {
                        return this.sourcesContent[this._sources.indexOf(aSource)];
                    }

                    var url;
                    if (this.sourceRoot
                        && (url = util.urlParse(this.sourceRoot))) {
                        // XXX: file:// URIs and absolute paths lead to unexpected behavior for
                        // many users. We can help them out when they expect file:// URIs to
                        // behave like it would if they were running a local HTTP server. See
                        // https://bugzilla.mozilla.org/show_bug.cgi?id=885597.
                        var fileUriAbsPath = aSource.replace(/^file:\/\//, "");
                        if (url.scheme == "file"
                            && this._sources.has(fileUriAbsPath)) {
                            return this.sourcesContent[this._sources.indexOf(fileUriAbsPath)]
                        }

                        if ((!url.path || url.path == "/")
                            && this._sources.has("/" + aSource)) {
                            return this.sourcesContent[this._sources.indexOf("/" + aSource)];
                        }
                    }

                    throw new Error('"' + aSource + '" is not in the SourceMap.');
                };

            /**
             * Returns the generated line and column information for the original source,
             * line, and column positions provided. The only argument is an object with
             * the following properties:
             *
             *   - source: The filename of the original source.
             *   - line: The line number in the original source.
             *   - column: The column number in the original source.
             *
             * and an object is returned with the following properties:
             *
             *   - line: The line number in the generated source, or null.
             *   - column: The column number in the generated source, or null.
             */
            SourceMapConsumer.prototype.generatedPositionFor =
                function SourceMapConsumer_generatedPositionFor(aArgs) {
                    var needle = {
                        source: util.getArg(aArgs, 'source'),
                        originalLine: util.getArg(aArgs, 'line'),
                        originalColumn: util.getArg(aArgs, 'column')
                    };

                    if (this.sourceRoot) {
                        needle.source = util.relative(this.sourceRoot, needle.source);
                    }

                    var mapping = this._findMapping(needle,
                        this._originalMappings,
                        "originalLine",
                        "originalColumn",
                        util.compareByOriginalPositions);

                    if (mapping) {
                        return {
                            line: util.getArg(mapping, 'generatedLine', null),
                            column: util.getArg(mapping, 'generatedColumn', null)
                        };
                    }

                    return {
                        line: null,
                        column: null
                    };
                };

            SourceMapConsumer.GENERATED_ORDER = 1;
            SourceMapConsumer.ORIGINAL_ORDER = 2;

            /**
             * Iterate over each mapping between an original source/line/column and a
             * generated line/column in this source map.
             *
             * @param Function aCallback
             *        The function that is called with each mapping.
             * @param Object aContext
             *        Optional. If specified, this object will be the value of `this` every
             *        time that `aCallback` is called.
             * @param aOrder
             *        Either `SourceMapConsumer.GENERATED_ORDER` or
             *        `SourceMapConsumer.ORIGINAL_ORDER`. Specifies whether you want to
             *        iterate over the mappings sorted by the generated file's line/column
             *        order or the original's source/line/column order, respectively. Defaults to
             *        `SourceMapConsumer.GENERATED_ORDER`.
             */
            SourceMapConsumer.prototype.eachMapping =
                function SourceMapConsumer_eachMapping(aCallback, aContext, aOrder) {
                    var context = aContext || null;
                    var order = aOrder || SourceMapConsumer.GENERATED_ORDER;

                    var mappings;
                    switch (order) {
                        case SourceMapConsumer.GENERATED_ORDER:
                            mappings = this._generatedMappings;
                            break;
                        case SourceMapConsumer.ORIGINAL_ORDER:
                            mappings = this._originalMappings;
                            break;
                        default:
                            throw new Error("Unknown order of iteration.");
                    }

                    var sourceRoot = this.sourceRoot;
                    mappings.map(function (mapping) {
                        var source = mapping.source;
                        if (source && sourceRoot) {
                            source = util.join(sourceRoot, source);
                        }
                        return {
                            source: source,
                            generatedLine: mapping.generatedLine,
                            generatedColumn: mapping.generatedColumn,
                            originalLine: mapping.originalLine,
                            originalColumn: mapping.originalColumn,
                            name: mapping.name
                        };
                    }).forEach(aCallback, context);
                };

            exports.SourceMapConsumer = SourceMapConsumer;

        });

    },{"./array-set":12,"./base64-vlq":13,"./binary-search":15,"./util":19,"amdefine":20}],17:[function(_dereq_,module,exports){
        /* -*- Mode: js; js-indent-level: 2; -*- */
        /*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
        if (typeof define !== 'function') {
            var define = _dereq_('amdefine')(module, _dereq_);
        }
        define(function (_dereq_, exports, module) {

            var base64VLQ = _dereq_('./base64-vlq');
            var util = _dereq_('./util');
            var ArraySet = _dereq_('./array-set').ArraySet;

            /**
             * An instance of the SourceMapGenerator represents a source map which is
             * being built incrementally. To create a new one, you must pass an object
             * with the following properties:
             *
             *   - file: The filename of the generated source.
             *   - sourceRoot: An optional root for all URLs in this source map.
             */
            function SourceMapGenerator(aArgs) {
                this._file = util.getArg(aArgs, 'file');
                this._sourceRoot = util.getArg(aArgs, 'sourceRoot', null);
                this._sources = new ArraySet();
                this._names = new ArraySet();
                this._mappings = [];
                this._sourcesContents = null;
            }

            SourceMapGenerator.prototype._version = 3;

            /**
             * Creates a new SourceMapGenerator based on a SourceMapConsumer
             *
             * @param aSourceMapConsumer The SourceMap.
             */
            SourceMapGenerator.fromSourceMap =
                function SourceMapGenerator_fromSourceMap(aSourceMapConsumer) {
                    var sourceRoot = aSourceMapConsumer.sourceRoot;
                    var generator = new SourceMapGenerator({
                        file: aSourceMapConsumer.file,
                        sourceRoot: sourceRoot
                    });
                    aSourceMapConsumer.eachMapping(function (mapping) {
                        var newMapping = {
                            generated: {
                                line: mapping.generatedLine,
                                column: mapping.generatedColumn
                            }
                        };

                        if (mapping.source) {
                            newMapping.source = mapping.source;
                            if (sourceRoot) {
                                newMapping.source = util.relative(sourceRoot, newMapping.source);
                            }

                            newMapping.original = {
                                line: mapping.originalLine,
                                column: mapping.originalColumn
                            };

                            if (mapping.name) {
                                newMapping.name = mapping.name;
                            }
                        }

                        generator.addMapping(newMapping);
                    });
                    aSourceMapConsumer.sources.forEach(function (sourceFile) {
                        var content = aSourceMapConsumer.sourceContentFor(sourceFile);
                        if (content) {
                            generator.setSourceContent(sourceFile, content);
                        }
                    });
                    return generator;
                };

            /**
             * Add a single mapping from original source line and column to the generated
             * source's line and column for this source map being created. The mapping
             * object should have the following properties:
             *
             *   - generated: An object with the generated line and column positions.
             *   - original: An object with the original line and column positions.
             *   - source: The original source file (relative to the sourceRoot).
             *   - name: An optional original token name for this mapping.
             */
            SourceMapGenerator.prototype.addMapping =
                function SourceMapGenerator_addMapping(aArgs) {
                    var generated = util.getArg(aArgs, 'generated');
                    var original = util.getArg(aArgs, 'original', null);
                    var source = util.getArg(aArgs, 'source', null);
                    var name = util.getArg(aArgs, 'name', null);

                    this._validateMapping(generated, original, source, name);

                    if (source && !this._sources.has(source)) {
                        this._sources.add(source);
                    }

                    if (name && !this._names.has(name)) {
                        this._names.add(name);
                    }

                    this._mappings.push({
                        generatedLine: generated.line,
                        generatedColumn: generated.column,
                        originalLine: original != null && original.line,
                        originalColumn: original != null && original.column,
                        source: source,
                        name: name
                    });
                };

            /**
             * Set the source content for a source file.
             */
            SourceMapGenerator.prototype.setSourceContent =
                function SourceMapGenerator_setSourceContent(aSourceFile, aSourceContent) {
                    var source = aSourceFile;
                    if (this._sourceRoot) {
                        source = util.relative(this._sourceRoot, source);
                    }

                    if (aSourceContent !== null) {
                        // Add the source content to the _sourcesContents map.
                        // Create a new _sourcesContents map if the property is null.
                        if (!this._sourcesContents) {
                            this._sourcesContents = {};
                        }
                        this._sourcesContents[util.toSetString(source)] = aSourceContent;
                    } else {
                        // Remove the source file from the _sourcesContents map.
                        // If the _sourcesContents map is empty, set the property to null.
                        delete this._sourcesContents[util.toSetString(source)];
                        if (Object.keys(this._sourcesContents).length === 0) {
                            this._sourcesContents = null;
                        }
                    }
                };

            /**
             * Applies the mappings of a sub-source-map for a specific source file to the
             * source map being generated. Each mapping to the supplied source file is
             * rewritten using the supplied source map. Note: The resolution for the
             * resulting mappings is the minimium of this map and the supplied map.
             *
             * @param aSourceMapConsumer The source map to be applied.
             * @param aSourceFile Optional. The filename of the source file.
             *        If omitted, SourceMapConsumer's file property will be used.
             */
            SourceMapGenerator.prototype.applySourceMap =
                function SourceMapGenerator_applySourceMap(aSourceMapConsumer, aSourceFile) {
                    // If aSourceFile is omitted, we will use the file property of the SourceMap
                    if (!aSourceFile) {
                        aSourceFile = aSourceMapConsumer.file;
                    }
                    var sourceRoot = this._sourceRoot;
                    // Make "aSourceFile" relative if an absolute Url is passed.
                    if (sourceRoot) {
                        aSourceFile = util.relative(sourceRoot, aSourceFile);
                    }
                    // Applying the SourceMap can add and remove items from the sources and
                    // the names array.
                    var newSources = new ArraySet();
                    var newNames = new ArraySet();

                    // Find mappings for the "aSourceFile"
                    this._mappings.forEach(function (mapping) {
                        if (mapping.source === aSourceFile && mapping.originalLine) {
                            // Check if it can be mapped by the source map, then update the mapping.
                            var original = aSourceMapConsumer.originalPositionFor({
                                line: mapping.originalLine,
                                column: mapping.originalColumn
                            });
                            if (original.source !== null) {
                                // Copy mapping
                                if (sourceRoot) {
                                    mapping.source = util.relative(sourceRoot, original.source);
                                } else {
                                    mapping.source = original.source;
                                }
                                mapping.originalLine = original.line;
                                mapping.originalColumn = original.column;
                                if (original.name !== null && mapping.name !== null) {
                                    // Only use the identifier name if it's an identifier
                                    // in both SourceMaps
                                    mapping.name = original.name;
                                }
                            }
                        }

                        var source = mapping.source;
                        if (source && !newSources.has(source)) {
                            newSources.add(source);
                        }

                        var name = mapping.name;
                        if (name && !newNames.has(name)) {
                            newNames.add(name);
                        }

                    }, this);
                    this._sources = newSources;
                    this._names = newNames;

                    // Copy sourcesContents of applied map.
                    aSourceMapConsumer.sources.forEach(function (sourceFile) {
                        var content = aSourceMapConsumer.sourceContentFor(sourceFile);
                        if (content) {
                            if (sourceRoot) {
                                sourceFile = util.relative(sourceRoot, sourceFile);
                            }
                            this.setSourceContent(sourceFile, content);
                        }
                    }, this);
                };

            /**
             * A mapping can have one of the three levels of data:
             *
             *   1. Just the generated position.
             *   2. The Generated position, original position, and original source.
             *   3. Generated and original position, original source, as well as a name
             *      token.
             *
             * To maintain consistency, we validate that any new mapping being added falls
             * in to one of these categories.
             */
            SourceMapGenerator.prototype._validateMapping =
                function SourceMapGenerator_validateMapping(aGenerated, aOriginal, aSource,
                                                            aName) {
                    if (aGenerated && 'line' in aGenerated && 'column' in aGenerated
                        && aGenerated.line > 0 && aGenerated.column >= 0
                        && !aOriginal && !aSource && !aName) {
                        // Case 1.
                        return;
                    }
                    else if (aGenerated && 'line' in aGenerated && 'column' in aGenerated
                        && aOriginal && 'line' in aOriginal && 'column' in aOriginal
                        && aGenerated.line > 0 && aGenerated.column >= 0
                        && aOriginal.line > 0 && aOriginal.column >= 0
                        && aSource) {
                        // Cases 2 and 3.
                        return;
                    }
                    else {
                        throw new Error('Invalid mapping: ' + JSON.stringify({
                            generated: aGenerated,
                            source: aSource,
                            orginal: aOriginal,
                            name: aName
                        }));
                    }
                };

            /**
             * Serialize the accumulated mappings in to the stream of base 64 VLQs
             * specified by the source map format.
             */
            SourceMapGenerator.prototype._serializeMappings =
                function SourceMapGenerator_serializeMappings() {
                    var previousGeneratedColumn = 0;
                    var previousGeneratedLine = 1;
                    var previousOriginalColumn = 0;
                    var previousOriginalLine = 0;
                    var previousName = 0;
                    var previousSource = 0;
                    var result = '';
                    var mapping;

                    // The mappings must be guaranteed to be in sorted order before we start
                    // serializing them or else the generated line numbers (which are defined
                    // via the ';' separators) will be all messed up. Note: it might be more
                    // performant to maintain the sorting as we insert them, rather than as we
                    // serialize them, but the big O is the same either way.
                    this._mappings.sort(util.compareByGeneratedPositions);

                    for (var i = 0, len = this._mappings.length; i < len; i++) {
                        mapping = this._mappings[i];

                        if (mapping.generatedLine !== previousGeneratedLine) {
                            previousGeneratedColumn = 0;
                            while (mapping.generatedLine !== previousGeneratedLine) {
                                result += ';';
                                previousGeneratedLine++;
                            }
                        }
                        else {
                            if (i > 0) {
                                if (!util.compareByGeneratedPositions(mapping, this._mappings[i - 1])) {
                                    continue;
                                }
                                result += ',';
                            }
                        }

                        result += base64VLQ.encode(mapping.generatedColumn
                            - previousGeneratedColumn);
                        previousGeneratedColumn = mapping.generatedColumn;

                        if (mapping.source) {
                            result += base64VLQ.encode(this._sources.indexOf(mapping.source)
                                - previousSource);
                            previousSource = this._sources.indexOf(mapping.source);

                            // lines are stored 0-based in SourceMap spec version 3
                            result += base64VLQ.encode(mapping.originalLine - 1
                                - previousOriginalLine);
                            previousOriginalLine = mapping.originalLine - 1;

                            result += base64VLQ.encode(mapping.originalColumn
                                - previousOriginalColumn);
                            previousOriginalColumn = mapping.originalColumn;

                            if (mapping.name) {
                                result += base64VLQ.encode(this._names.indexOf(mapping.name)
                                    - previousName);
                                previousName = this._names.indexOf(mapping.name);
                            }
                        }
                    }

                    return result;
                };

            SourceMapGenerator.prototype._generateSourcesContent =
                function SourceMapGenerator_generateSourcesContent(aSources, aSourceRoot) {
                    return aSources.map(function (source) {
                        if (!this._sourcesContents) {
                            return null;
                        }
                        if (aSourceRoot) {
                            source = util.relative(aSourceRoot, source);
                        }
                        var key = util.toSetString(source);
                        return Object.prototype.hasOwnProperty.call(this._sourcesContents,
                            key)
                            ? this._sourcesContents[key]
                            : null;
                    }, this);
                };

            /**
             * Externalize the source map.
             */
            SourceMapGenerator.prototype.toJSON =
                function SourceMapGenerator_toJSON() {
                    var map = {
                        version: this._version,
                        file: this._file,
                        sources: this._sources.toArray(),
                        names: this._names.toArray(),
                        mappings: this._serializeMappings()
                    };
                    if (this._sourceRoot) {
                        map.sourceRoot = this._sourceRoot;
                    }
                    if (this._sourcesContents) {
                        map.sourcesContent = this._generateSourcesContent(map.sources, map.sourceRoot);
                    }

                    return map;
                };

            /**
             * Render the source map being generated to a string.
             */
            SourceMapGenerator.prototype.toString =
                function SourceMapGenerator_toString() {
                    return JSON.stringify(this);
                };

            exports.SourceMapGenerator = SourceMapGenerator;

        });

    },{"./array-set":12,"./base64-vlq":13,"./util":19,"amdefine":20}],18:[function(_dereq_,module,exports){
        /* -*- Mode: js; js-indent-level: 2; -*- */
        /*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
        if (typeof define !== 'function') {
            var define = _dereq_('amdefine')(module, _dereq_);
        }
        define(function (_dereq_, exports, module) {

            var SourceMapGenerator = _dereq_('./source-map-generator').SourceMapGenerator;
            var util = _dereq_('./util');

            /**
             * SourceNodes provide a way to abstract over interpolating/concatenating
             * snippets of generated JavaScript source code while maintaining the line and
             * column information associated with the original source code.
             *
             * @param aLine The original line number.
             * @param aColumn The original column number.
             * @param aSource The original source's filename.
             * @param aChunks Optional. An array of strings which are snippets of
             *        generated JS, or other SourceNodes.
             * @param aName The original identifier.
             */
            function SourceNode(aLine, aColumn, aSource, aChunks, aName) {
                this.children = [];
                this.sourceContents = {};
                this.line = aLine === undefined ? null : aLine;
                this.column = aColumn === undefined ? null : aColumn;
                this.source = aSource === undefined ? null : aSource;
                this.name = aName === undefined ? null : aName;
                if (aChunks != null) this.add(aChunks);
            }

            /**
             * Creates a SourceNode from generated code and a SourceMapConsumer.
             *
             * @param aGeneratedCode The generated code
             * @param aSourceMapConsumer The SourceMap for the generated code
             */
            SourceNode.fromStringWithSourceMap =
                function SourceNode_fromStringWithSourceMap(aGeneratedCode, aSourceMapConsumer) {
                    // The SourceNode we want to fill with the generated code
                    // and the SourceMap
                    var node = new SourceNode();

                    // The generated code
                    // Processed fragments are removed from this array.
                    var remainingLines = aGeneratedCode.split('\n');

                    // We need to remember the position of "remainingLines"
                    var lastGeneratedLine = 1, lastGeneratedColumn = 0;

                    // The generate SourceNodes we need a code range.
                    // To extract it current and last mapping is used.
                    // Here we store the last mapping.
                    var lastMapping = null;

                    aSourceMapConsumer.eachMapping(function (mapping) {
                        if (lastMapping === null) {
                            // We add the generated code until the first mapping
                            // to the SourceNode without any mapping.
                            // Each line is added as separate string.
                            while (lastGeneratedLine < mapping.generatedLine) {
                                node.add(remainingLines.shift() + "\n");
                                lastGeneratedLine++;
                            }
                            if (lastGeneratedColumn < mapping.generatedColumn) {
                                var nextLine = remainingLines[0];
                                node.add(nextLine.substr(0, mapping.generatedColumn));
                                remainingLines[0] = nextLine.substr(mapping.generatedColumn);
                                lastGeneratedColumn = mapping.generatedColumn;
                            }
                        } else {
                            // We add the code from "lastMapping" to "mapping":
                            // First check if there is a new line in between.
                            if (lastGeneratedLine < mapping.generatedLine) {
                                var code = "";
                                // Associate full lines with "lastMapping"
                                do {
                                    code += remainingLines.shift() + "\n";
                                    lastGeneratedLine++;
                                    lastGeneratedColumn = 0;
                                } while (lastGeneratedLine < mapping.generatedLine);
                                // When we reached the correct line, we add code until we
                                // reach the correct column too.
                                if (lastGeneratedColumn < mapping.generatedColumn) {
                                    var nextLine = remainingLines[0];
                                    code += nextLine.substr(0, mapping.generatedColumn);
                                    remainingLines[0] = nextLine.substr(mapping.generatedColumn);
                                    lastGeneratedColumn = mapping.generatedColumn;
                                }
                                // Create the SourceNode.
                                addMappingWithCode(lastMapping, code);
                            } else {
                                // There is no new line in between.
                                // Associate the code between "lastGeneratedColumn" and
                                // "mapping.generatedColumn" with "lastMapping"
                                var nextLine = remainingLines[0];
                                var code = nextLine.substr(0, mapping.generatedColumn -
                                    lastGeneratedColumn);
                                remainingLines[0] = nextLine.substr(mapping.generatedColumn -
                                    lastGeneratedColumn);
                                lastGeneratedColumn = mapping.generatedColumn;
                                addMappingWithCode(lastMapping, code);
                            }
                        }
                        lastMapping = mapping;
                    }, this);
                    // We have processed all mappings.
                    // Associate the remaining code in the current line with "lastMapping"
                    // and add the remaining lines without any mapping
                    addMappingWithCode(lastMapping, remainingLines.join("\n"));

                    // Copy sourcesContent into SourceNode
                    aSourceMapConsumer.sources.forEach(function (sourceFile) {
                        var content = aSourceMapConsumer.sourceContentFor(sourceFile);
                        if (content) {
                            node.setSourceContent(sourceFile, content);
                        }
                    });

                    return node;

                    function addMappingWithCode(mapping, code) {
                        if (mapping === null || mapping.source === undefined) {
                            node.add(code);
                        } else {
                            node.add(new SourceNode(mapping.originalLine,
                                mapping.originalColumn,
                                mapping.source,
                                code,
                                mapping.name));
                        }
                    }
                };

            /**
             * Add a chunk of generated JS to this source node.
             *
             * @param aChunk A string snippet of generated JS code, another instance of
             *        SourceNode, or an array where each member is one of those things.
             */
            SourceNode.prototype.add = function SourceNode_add(aChunk) {
                if (Array.isArray(aChunk)) {
                    aChunk.forEach(function (chunk) {
                        this.add(chunk);
                    }, this);
                }
                else if (aChunk instanceof SourceNode || typeof aChunk === "string") {
                    if (aChunk) {
                        this.children.push(aChunk);
                    }
                }
                else {
                    throw new TypeError(
                        "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk
                    );
                }
                return this;
            };

            /**
             * Add a chunk of generated JS to the beginning of this source node.
             *
             * @param aChunk A string snippet of generated JS code, another instance of
             *        SourceNode, or an array where each member is one of those things.
             */
            SourceNode.prototype.prepend = function SourceNode_prepend(aChunk) {
                if (Array.isArray(aChunk)) {
                    for (var i = aChunk.length-1; i >= 0; i--) {
                        this.prepend(aChunk[i]);
                    }
                }
                else if (aChunk instanceof SourceNode || typeof aChunk === "string") {
                    this.children.unshift(aChunk);
                }
                else {
                    throw new TypeError(
                        "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk
                    );
                }
                return this;
            };

            /**
             * Walk over the tree of JS snippets in this node and its children. The
             * walking function is called once for each snippet of JS and is passed that
             * snippet and the its original associated source's line/column location.
             *
             * @param aFn The traversal function.
             */
            SourceNode.prototype.walk = function SourceNode_walk(aFn) {
                var chunk;
                for (var i = 0, len = this.children.length; i < len; i++) {
                    chunk = this.children[i];
                    if (chunk instanceof SourceNode) {
                        chunk.walk(aFn);
                    }
                    else {
                        if (chunk !== '') {
                            aFn(chunk, { source: this.source,
                                line: this.line,
                                column: this.column,
                                name: this.name });
                        }
                    }
                }
            };

            /**
             * Like `String.prototype.join` except for SourceNodes. Inserts `aStr` between
             * each of `this.children`.
             *
             * @param aSep The separator.
             */
            SourceNode.prototype.join = function SourceNode_join(aSep) {
                var newChildren;
                var i;
                var len = this.children.length;
                if (len > 0) {
                    newChildren = [];
                    for (i = 0; i < len-1; i++) {
                        newChildren.push(this.children[i]);
                        newChildren.push(aSep);
                    }
                    newChildren.push(this.children[i]);
                    this.children = newChildren;
                }
                return this;
            };

            /**
             * Call String.prototype.replace on the very right-most source snippet. Useful
             * for trimming whitespace from the end of a source node, etc.
             *
             * @param aPattern The pattern to replace.
             * @param aReplacement The thing to replace the pattern with.
             */
            SourceNode.prototype.replaceRight = function SourceNode_replaceRight(aPattern, aReplacement) {
                var lastChild = this.children[this.children.length - 1];
                if (lastChild instanceof SourceNode) {
                    lastChild.replaceRight(aPattern, aReplacement);
                }
                else if (typeof lastChild === 'string') {
                    this.children[this.children.length - 1] = lastChild.replace(aPattern, aReplacement);
                }
                else {
                    this.children.push(''.replace(aPattern, aReplacement));
                }
                return this;
            };

            /**
             * Set the source content for a source file. This will be added to the SourceMapGenerator
             * in the sourcesContent field.
             *
             * @param aSourceFile The filename of the source file
             * @param aSourceContent The content of the source file
             */
            SourceNode.prototype.setSourceContent =
                function SourceNode_setSourceContent(aSourceFile, aSourceContent) {
                    this.sourceContents[util.toSetString(aSourceFile)] = aSourceContent;
                };

            /**
             * Walk over the tree of SourceNodes. The walking function is called for each
             * source file content and is passed the filename and source content.
             *
             * @param aFn The traversal function.
             */
            SourceNode.prototype.walkSourceContents =
                function SourceNode_walkSourceContents(aFn) {
                    for (var i = 0, len = this.children.length; i < len; i++) {
                        if (this.children[i] instanceof SourceNode) {
                            this.children[i].walkSourceContents(aFn);
                        }
                    }

                    var sources = Object.keys(this.sourceContents);
                    for (var i = 0, len = sources.length; i < len; i++) {
                        aFn(util.fromSetString(sources[i]), this.sourceContents[sources[i]]);
                    }
                };

            /**
             * Return the string representation of this source node. Walks over the tree
             * and concatenates all the various snippets together to one string.
             */
            SourceNode.prototype.toString = function SourceNode_toString() {
                var str = "";
                this.walk(function (chunk) {
                    str += chunk;
                });
                return str;
            };

            /**
             * Returns the string representation of this source node along with a source
             * map.
             */
            SourceNode.prototype.toStringWithSourceMap = function SourceNode_toStringWithSourceMap(aArgs) {
                var generated = {
                    code: "",
                    line: 1,
                    column: 0
                };
                var map = new SourceMapGenerator(aArgs);
                var sourceMappingActive = false;
                var lastOriginalSource = null;
                var lastOriginalLine = null;
                var lastOriginalColumn = null;
                var lastOriginalName = null;
                this.walk(function (chunk, original) {
                    generated.code += chunk;
                    if (original.source !== null
                        && original.line !== null
                        && original.column !== null) {
                        if(lastOriginalSource !== original.source
                            || lastOriginalLine !== original.line
                            || lastOriginalColumn !== original.column
                            || lastOriginalName !== original.name) {
                            map.addMapping({
                                source: original.source,
                                original: {
                                    line: original.line,
                                    column: original.column
                                },
                                generated: {
                                    line: generated.line,
                                    column: generated.column
                                },
                                name: original.name
                            });
                        }
                        lastOriginalSource = original.source;
                        lastOriginalLine = original.line;
                        lastOriginalColumn = original.column;
                        lastOriginalName = original.name;
                        sourceMappingActive = true;
                    } else if (sourceMappingActive) {
                        map.addMapping({
                            generated: {
                                line: generated.line,
                                column: generated.column
                            }
                        });
                        lastOriginalSource = null;
                        sourceMappingActive = false;
                    }
                    chunk.split('').forEach(function (ch) {
                        if (ch === '\n') {
                            generated.line++;
                            generated.column = 0;
                        } else {
                            generated.column++;
                        }
                    });
                });
                this.walkSourceContents(function (sourceFile, sourceContent) {
                    map.setSourceContent(sourceFile, sourceContent);
                });

                return { code: generated.code, map: map };
            };

            exports.SourceNode = SourceNode;

        });

    },{"./source-map-generator":17,"./util":19,"amdefine":20}],19:[function(_dereq_,module,exports){
        /* -*- Mode: js; js-indent-level: 2; -*- */
        /*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
        if (typeof define !== 'function') {
            var define = _dereq_('amdefine')(module, _dereq_);
        }
        define(function (_dereq_, exports, module) {

            /**
             * This is a helper function for getting values from parameter/options
             * objects.
             *
             * @param args The object we are extracting values from
             * @param name The name of the property we are getting.
             * @param defaultValue An optional value to return if the property is missing
             * from the object. If this is not specified and the property is missing, an
             * error will be thrown.
             */
            function getArg(aArgs, aName, aDefaultValue) {
                if (aName in aArgs) {
                    return aArgs[aName];
                } else if (arguments.length === 3) {
                    return aDefaultValue;
                } else {
                    throw new Error('"' + aName + '" is a required argument.');
                }
            }
            exports.getArg = getArg;

            var urlRegexp = /([\w+\-.]+):\/\/((\w+:\w+)@)?([\w.]+)?(:(\d+))?(\S+)?/;
            var dataUrlRegexp = /^data:.+\,.+/;

            function urlParse(aUrl) {
                var match = aUrl.match(urlRegexp);
                if (!match) {
                    return null;
                }
                return {
                    scheme: match[1],
                    auth: match[3],
                    host: match[4],
                    port: match[6],
                    path: match[7]
                };
            }
            exports.urlParse = urlParse;

            function urlGenerate(aParsedUrl) {
                var url = aParsedUrl.scheme + "://";
                if (aParsedUrl.auth) {
                    url += aParsedUrl.auth + "@"
                }
                if (aParsedUrl.host) {
                    url += aParsedUrl.host;
                }
                if (aParsedUrl.port) {
                    url += ":" + aParsedUrl.port
                }
                if (aParsedUrl.path) {
                    url += aParsedUrl.path;
                }
                return url;
            }
            exports.urlGenerate = urlGenerate;

            function join(aRoot, aPath) {
                var url;

                if (aPath.match(urlRegexp) || aPath.match(dataUrlRegexp)) {
                    return aPath;
                }

                if (aPath.charAt(0) === '/' && (url = urlParse(aRoot))) {
                    url.path = aPath;
                    return urlGenerate(url);
                }

                return aRoot.replace(/\/$/, '') + '/' + aPath;
            }
            exports.join = join;

            /**
             * Because behavior goes wacky when you set `__proto__` on objects, we
             * have to prefix all the strings in our set with an arbitrary character.
             *
             * See https://github.com/mozilla/source-map/pull/31 and
             * https://github.com/mozilla/source-map/issues/30
             *
             * @param String aStr
             */
            function toSetString(aStr) {
                return '$' + aStr;
            }
            exports.toSetString = toSetString;

            function fromSetString(aStr) {
                return aStr.substr(1);
            }
            exports.fromSetString = fromSetString;

            function relative(aRoot, aPath) {
                aRoot = aRoot.replace(/\/$/, '');

                var url = urlParse(aRoot);
                if (aPath.charAt(0) == "/" && url && url.path == "/") {
                    return aPath.slice(1);
                }

                return aPath.indexOf(aRoot + '/') === 0
                    ? aPath.substr(aRoot.length + 1)
                    : aPath;
            }
            exports.relative = relative;

            function strcmp(aStr1, aStr2) {
                var s1 = aStr1 || "";
                var s2 = aStr2 || "";
                return (s1 > s2) - (s1 < s2);
            }

            /**
             * Comparator between two mappings where the original positions are compared.
             *
             * Optionally pass in `true` as `onlyCompareGenerated` to consider two
             * mappings with the same original source/line/column, but different generated
             * line and column the same. Useful when searching for a mapping with a
             * stubbed out mapping.
             */
            function compareByOriginalPositions(mappingA, mappingB, onlyCompareOriginal) {
                var cmp;

                cmp = strcmp(mappingA.source, mappingB.source);
                if (cmp) {
                    return cmp;
                }

                cmp = mappingA.originalLine - mappingB.originalLine;
                if (cmp) {
                    return cmp;
                }

                cmp = mappingA.originalColumn - mappingB.originalColumn;
                if (cmp || onlyCompareOriginal) {
                    return cmp;
                }

                cmp = strcmp(mappingA.name, mappingB.name);
                if (cmp) {
                    return cmp;
                }

                cmp = mappingA.generatedLine - mappingB.generatedLine;
                if (cmp) {
                    return cmp;
                }

                return mappingA.generatedColumn - mappingB.generatedColumn;
            };
            exports.compareByOriginalPositions = compareByOriginalPositions;

            /**
             * Comparator between two mappings where the generated positions are
             * compared.
             *
             * Optionally pass in `true` as `onlyCompareGenerated` to consider two
             * mappings with the same generated line and column, but different
             * source/name/original line and column the same. Useful when searching for a
             * mapping with a stubbed out mapping.
             */
            function compareByGeneratedPositions(mappingA, mappingB, onlyCompareGenerated) {
                var cmp;

                cmp = mappingA.generatedLine - mappingB.generatedLine;
                if (cmp) {
                    return cmp;
                }

                cmp = mappingA.generatedColumn - mappingB.generatedColumn;
                if (cmp || onlyCompareGenerated) {
                    return cmp;
                }

                cmp = strcmp(mappingA.source, mappingB.source);
                if (cmp) {
                    return cmp;
                }

                cmp = mappingA.originalLine - mappingB.originalLine;
                if (cmp) {
                    return cmp;
                }

                cmp = mappingA.originalColumn - mappingB.originalColumn;
                if (cmp) {
                    return cmp;
                }

                return strcmp(mappingA.name, mappingB.name);
            };
            exports.compareByGeneratedPositions = compareByGeneratedPositions;

        });

    },{"amdefine":20}],20:[function(_dereq_,module,exports){
        (function (process,__filename){
            /** vim: et:ts=4:sw=4:sts=4
             * @license amdefine 0.1.0 Copyright (c) 2011, The Dojo Foundation All Rights Reserved.
             * Available via the MIT or new BSD license.
             * see: http://github.com/jrburke/amdefine for details
             */

            /*jslint node: true */
            /*global module, process */
            'use strict';

            /**
             * Creates a define for node.
             * @param {Object} module the "module" object that is defined by Node for the
             * current module.
             * @param {Function} [requireFn]. Node's require function for the current module.
             * It only needs to be passed in Node versions before 0.5, when module.require
             * did not exist.
             * @returns {Function} a define function that is usable for the current node
             * module.
             */
            function amdefine(module, requireFn) {
                'use strict';
                var defineCache = {},
                    loaderCache = {},
                    alreadyCalled = false,
                    path = _dereq_('path'),
                    makeRequire, stringRequire;

                /**
                 * Trims the . and .. from an array of path segments.
                 * It will keep a leading path segment if a .. will become
                 * the first path segment, to help with module name lookups,
                 * which act like paths, but can be remapped. But the end result,
                 * all paths that use this function should look normalized.
                 * NOTE: this method MODIFIES the input array.
                 * @param {Array} ary the array of path segments.
                 */
                function trimDots(ary) {
                    var i, part;
                    for (i = 0; ary[i]; i+= 1) {
                        part = ary[i];
                        if (part === '.') {
                            ary.splice(i, 1);
                            i -= 1;
                        } else if (part === '..') {
                            if (i === 1 && (ary[2] === '..' || ary[0] === '..')) {
                                //End of the line. Keep at least one non-dot
                                //path segment at the front so it can be mapped
                                //correctly to disk. Otherwise, there is likely
                                //no path mapping for a path starting with '..'.
                                //This can still fail, but catches the most reasonable
                                //uses of ..
                                break;
                            } else if (i > 0) {
                                ary.splice(i - 1, 2);
                                i -= 2;
                            }
                        }
                    }
                }

                function normalize(name, baseName) {
                    var baseParts;

                    //Adjust any relative paths.
                    if (name && name.charAt(0) === '.') {
                        //If have a base name, try to normalize against it,
                        //otherwise, assume it is a top-level require that will
                        //be relative to baseUrl in the end.
                        if (baseName) {
                            baseParts = baseName.split('/');
                            baseParts = baseParts.slice(0, baseParts.length - 1);
                            baseParts = baseParts.concat(name.split('/'));
                            trimDots(baseParts);
                            name = baseParts.join('/');
                        }
                    }

                    return name;
                }

                /**
                 * Create the normalize() function passed to a loader plugin's
                 * normalize method.
                 */
                function makeNormalize(relName) {
                    return function (name) {
                        return normalize(name, relName);
                    };
                }

                function makeLoad(id) {
                    function load(value) {
                        loaderCache[id] = value;
                    }

                    load.fromText = function (id, text) {
                        //This one is difficult because the text can/probably uses
                        //define, and any relative paths and requires should be relative
                        //to that id was it would be found on disk. But this would require
                        //bootstrapping a module/require fairly deeply from node core.
                        //Not sure how best to go about that yet.
                        throw new Error('amdefine does not implement load.fromText');
                    };

                    return load;
                }

                makeRequire = function (systemRequire, exports, module, relId) {
                    function amdRequire(deps, callback) {
                        if (typeof deps === 'string') {
                            //Synchronous, single module require('')
                            return stringRequire(systemRequire, exports, module, deps, relId);
                        } else {
                            //Array of dependencies with a callback.

                            //Convert the dependencies to modules.
                            deps = deps.map(function (depName) {
                                return stringRequire(systemRequire, exports, module, depName, relId);
                            });

                            //Wait for next tick to call back the require call.
                            process.nextTick(function () {
                                callback.apply(null, deps);
                            });
                        }
                    }

                    amdRequire.toUrl = function (filePath) {
                        if (filePath.indexOf('.') === 0) {
                            return normalize(filePath, path.dirname(module.filename));
                        } else {
                            return filePath;
                        }
                    };

                    return amdRequire;
                };

                //Favor explicit value, passed in if the module wants to support Node 0.4.
                requireFn = requireFn || function req() {
                    return module.require.apply(module, arguments);
                };

                function runFactory(id, deps, factory) {
                    var r, e, m, result;

                    if (id) {
                        e = loaderCache[id] = {};
                        m = {
                            id: id,
                            uri: __filename,
                            exports: e
                        };
                        r = makeRequire(requireFn, e, m, id);
                    } else {
                        //Only support one define call per file
                        if (alreadyCalled) {
                            throw new Error('amdefine with no module ID cannot be called more than once per file.');
                        }
                        alreadyCalled = true;

                        //Use the real variables from node
                        //Use module.exports for exports, since
                        //the exports in here is amdefine exports.
                        e = module.exports;
                        m = module;
                        r = makeRequire(requireFn, e, m, module.id);
                    }

                    //If there are dependencies, they are strings, so need
                    //to convert them to dependency values.
                    if (deps) {
                        deps = deps.map(function (depName) {
                            return r(depName);
                        });
                    }

                    //Call the factory with the right dependencies.
                    if (typeof factory === 'function') {
                        result = factory.apply(m.exports, deps);
                    } else {
                        result = factory;
                    }

                    if (result !== undefined) {
                        m.exports = result;
                        if (id) {
                            loaderCache[id] = m.exports;
                        }
                    }
                }

                stringRequire = function (systemRequire, exports, module, id, relId) {
                    //Split the ID by a ! so that
                    var index = id.indexOf('!'),
                        originalId = id,
                        prefix, plugin;

                    if (index === -1) {
                        id = normalize(id, relId);

                        //Straight module lookup. If it is one of the special dependencies,
                        //deal with it, otherwise, delegate to node.
                        if (id === 'require') {
                            return makeRequire(systemRequire, exports, module, relId);
                        } else if (id === 'exports') {
                            return exports;
                        } else if (id === 'module') {
                            return module;
                        } else if (loaderCache.hasOwnProperty(id)) {
                            return loaderCache[id];
                        } else if (defineCache[id]) {
                            runFactory.apply(null, defineCache[id]);
                            return loaderCache[id];
                        } else {
                            if(systemRequire) {
                                return systemRequire(originalId);
                            } else {
                                throw new Error('No module with ID: ' + id);
                            }
                        }
                    } else {
                        //There is a plugin in play.
                        prefix = id.substring(0, index);
                        id = id.substring(index + 1, id.length);

                        plugin = stringRequire(systemRequire, exports, module, prefix, relId);

                        if (plugin.normalize) {
                            id = plugin.normalize(id, makeNormalize(relId));
                        } else {
                            //Normalize the ID normally.
                            id = normalize(id, relId);
                        }

                        if (loaderCache[id]) {
                            return loaderCache[id];
                        } else {
                            plugin.load(id, makeRequire(systemRequire, exports, module, relId), makeLoad(id), {});

                            return loaderCache[id];
                        }
                    }
                };

                //Create a define function specific to the module asking for amdefine.
                function define(id, deps, factory) {
                    if (Array.isArray(id)) {
                        factory = deps;
                        deps = id;
                        id = undefined;
                    } else if (typeof id !== 'string') {
                        factory = id;
                        id = deps = undefined;
                    }

                    if (deps && !Array.isArray(deps)) {
                        factory = deps;
                        deps = undefined;
                    }

                    if (!deps) {
                        deps = ['require', 'exports', 'module'];
                    }

                    //Set up properties for this module. If an ID, then use
                    //internal cache. If no ID, then use the external variables
                    //for this node module.
                    if (id) {
                        //Put the module in deep freeze until there is a
                        //require call for it.
                        defineCache[id] = [id, deps, factory];
                    } else {
                        runFactory(id, deps, factory);
                    }
                }

                //define.require, which has access to all the values in the
                //cache. Useful for AMD modules that all have IDs in the file,
                //but need to finally export a value to node based on one of those
                //IDs.
                define.require = function (id) {
                    if (loaderCache[id]) {
                        return loaderCache[id];
                    }

                    if (defineCache[id]) {
                        runFactory.apply(null, defineCache[id]);
                        return loaderCache[id];
                    }
                };

                define.amd = {};

                return define;
            }

            module.exports = amdefine;

        }).call(this,_dereq_('_process'),"/node_modules/jstransform/node_modules/source-map/node_modules/amdefine/amdefine.js")
    },{"_process":8,"path":7}],21:[function(_dereq_,module,exports){
        /**
         * Copyright 2013 Facebook, Inc.
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         * http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */

        var docblockRe = /^\s*(\/\*\*(.|\r?\n)*?\*\/)/;
        var ltrimRe = /^\s*/;
        /**
         * @param {String} contents
         * @return {String}
         */
        function extract(contents) {
            var match = contents.match(docblockRe);
            if (match) {
                return match[0].replace(ltrimRe, '') || '';
            }
            return '';
        }


        var commentStartRe = /^\/\*\*?/;
        var commentEndRe = /\*+\/$/;
        var wsRe = /[\t ]+/g;
        var stringStartRe = /(\r?\n|^) *\*/g;
        var multilineRe = /(?:^|\r?\n) *(@[^\r\n]*?) *\r?\n *([^@\r\n\s][^@\r\n]+?) *\r?\n/g;
        var propertyRe = /(?:^|\r?\n) *@(\S+) *([^\r\n]*)/g;

        /**
         * @param {String} contents
         * @return {Array}
         */
        function parse(docblock) {
            docblock = docblock
                .replace(commentStartRe, '')
                .replace(commentEndRe, '')
                .replace(wsRe, ' ')
                .replace(stringStartRe, '$1');

            // Normalize multi-line directives
            var prev = '';
            while (prev != docblock) {
                prev = docblock;
                docblock = docblock.replace(multilineRe, "\n$1 $2\n");
            }
            docblock = docblock.trim();

            var result = [];
            var match;
            while (match = propertyRe.exec(docblock)) {
                result.push([match[1], match[2]]);
            }

            return result;
        }

        /**
         * Same as parse but returns an object of prop: value instead of array of paris
         * If a property appers more than once the last one will be returned
         *
         * @param {String} contents
         * @return {Object}
         */
        function parseAsObject(docblock) {
            var pairs = parse(docblock);
            var result = {};
            for (var i = 0; i < pairs.length; i++) {
                result[pairs[i][0]] = pairs[i][1];
            }
            return result;
        }


        exports.extract = extract;
        exports.parse = parse;
        exports.parseAsObject = parseAsObject;

    },{}],22:[function(_dereq_,module,exports){
        /**
         * Copyright 2013 Facebook, Inc.
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         * http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */


        /*jslint node: true*/
        "use strict";

        var esprima = _dereq_('esprima-fb');
        var utils = _dereq_('./utils');

        var getBoundaryNode = utils.getBoundaryNode;
        var declareIdentInScope = utils.declareIdentInLocalScope;
        var initScopeMetadata = utils.initScopeMetadata;
        var Syntax = esprima.Syntax;

        /**
         * @param {object} node
         * @param {object} parentNode
         * @return {boolean}
         */
        function _nodeIsClosureScopeBoundary(node, parentNode) {
            if (node.type === Syntax.Program) {
                return true;
            }

            var parentIsFunction =
                parentNode.type === Syntax.FunctionDeclaration
                || parentNode.type === Syntax.FunctionExpression
                || parentNode.type === Syntax.ArrowFunctionExpression;

            var parentIsCurlylessArrowFunc =
                parentNode.type === Syntax.ArrowFunctionExpression
                && node === parentNode.body;

            return parentIsFunction
                && (node.type === Syntax.BlockStatement || parentIsCurlylessArrowFunc);
        }

        function _nodeIsBlockScopeBoundary(node, parentNode) {
            if (node.type === Syntax.Program) {
                return false;
            }

            return node.type === Syntax.BlockStatement
                && parentNode.type === Syntax.CatchClause;
        }

        /**
         * @param {object} node
         * @param {array} path
         * @param {object} state
         */
        function traverse(node, path, state) {
            /*jshint -W004*/
            // Create a scope stack entry if this is the first node we've encountered in
            // its local scope
            var startIndex = null;
            var parentNode = path[0];
            if (!Array.isArray(node) && state.localScope.parentNode !== parentNode) {
                if (_nodeIsClosureScopeBoundary(node, parentNode)) {
                    var scopeIsStrict = state.scopeIsStrict;
                    if (!scopeIsStrict
                        && (node.type === Syntax.BlockStatement
                            || node.type === Syntax.Program)) {
                        scopeIsStrict =
                            node.body.length > 0
                            && node.body[0].type === Syntax.ExpressionStatement
                            && node.body[0].expression.type === Syntax.Literal
                            && node.body[0].expression.value === 'use strict';
                    }

                    if (node.type === Syntax.Program) {
                        startIndex = state.g.buffer.length;
                        state = utils.updateState(state, {
                            scopeIsStrict: scopeIsStrict
                        });
                    } else {
                        startIndex = state.g.buffer.length + 1;
                        state = utils.updateState(state, {
                            localScope: {
                                parentNode: parentNode,
                                parentScope: state.localScope,
                                identifiers: {},
                                tempVarIndex: 0,
                                tempVars: []
                            },
                            scopeIsStrict: scopeIsStrict
                        });

                        // All functions have an implicit 'arguments' object in scope
                        declareIdentInScope('arguments', initScopeMetadata(node), state);

                        // Include function arg identifiers in the scope boundaries of the
                        // function
                        if (parentNode.params.length > 0) {
                            var param;
                            var metadata = initScopeMetadata(parentNode, path.slice(1), path[0]);
                            for (var i = 0; i < parentNode.params.length; i++) {
                                param = parentNode.params[i];
                                if (param.type === Syntax.Identifier) {
                                    declareIdentInScope(param.name, metadata, state);
                                }
                            }
                        }

                        // Include rest arg identifiers in the scope boundaries of their
                        // functions
                        if (parentNode.rest) {
                            var metadata = initScopeMetadata(
                                parentNode,
                                path.slice(1),
                                path[0]
                            );
                            declareIdentInScope(parentNode.rest.name, metadata, state);
                        }

                        // Named FunctionExpressions scope their name within the body block of
                        // themselves only
                        if (parentNode.type === Syntax.FunctionExpression && parentNode.id) {
                            var metaData =
                                initScopeMetadata(parentNode, path.parentNodeslice, parentNode);
                            declareIdentInScope(parentNode.id.name, metaData, state);
                        }
                    }

                    // Traverse and find all local identifiers in this closure first to
                    // account for function/variable declaration hoisting
                    collectClosureIdentsAndTraverse(node, path, state);
                }

                if (_nodeIsBlockScopeBoundary(node, parentNode)) {
                    startIndex = state.g.buffer.length;
                    state = utils.updateState(state, {
                        localScope: {
                            parentNode: parentNode,
                            parentScope: state.localScope,
                            identifiers: {},
                            tempVarIndex: 0,
                            tempVars: []
                        }
                    });

                    if (parentNode.type === Syntax.CatchClause) {
                        var metadata = initScopeMetadata(
                            parentNode,
                            path.slice(1),
                            parentNode
                        );
                        declareIdentInScope(parentNode.param.name, metadata, state);
                    }
                    collectBlockIdentsAndTraverse(node, path, state);
                }
            }

            // Only catchup() before and after traversing a child node
            function traverser(node, path, state) {
                node.range && utils.catchup(node.range[0], state);
                traverse(node, path, state);
                node.range && utils.catchup(node.range[1], state);
            }

            utils.analyzeAndTraverse(walker, traverser, node, path, state);

            // Inject temp variables into the scope.
            if (startIndex !== null) {
                utils.injectTempVarDeclarations(state, startIndex);
            }
        }

        function collectClosureIdentsAndTraverse(node, path, state) {
            utils.analyzeAndTraverse(
                visitLocalClosureIdentifiers,
                collectClosureIdentsAndTraverse,
                node,
                path,
                state
            );
        }

        function collectBlockIdentsAndTraverse(node, path, state) {
            utils.analyzeAndTraverse(
                visitLocalBlockIdentifiers,
                collectBlockIdentsAndTraverse,
                node,
                path,
                state
            );
        }

        function visitLocalClosureIdentifiers(node, path, state) {
            var metaData;
            switch (node.type) {
                case Syntax.ArrowFunctionExpression:
                case Syntax.FunctionExpression:
                    // Function expressions don't get their names (if there is one) added to
                    // the closure scope they're defined in
                    return false;
                case Syntax.ClassDeclaration:
                case Syntax.ClassExpression:
                case Syntax.FunctionDeclaration:
                    if (node.id) {
                        metaData = initScopeMetadata(getBoundaryNode(path), path.slice(), node);
                        declareIdentInScope(node.id.name, metaData, state);
                    }
                    return false;
                case Syntax.VariableDeclarator:
                    // Variables have function-local scope
                    if (path[0].kind === 'var') {
                        metaData = initScopeMetadata(getBoundaryNode(path), path.slice(), node);
                        declareIdentInScope(node.id.name, metaData, state);
                    }
                    break;
            }
        }

        function visitLocalBlockIdentifiers(node, path, state) {
            // TODO: Support 'let' here...maybe...one day...or something...
            if (node.type === Syntax.CatchClause) {
                return false;
            }
        }

        function walker(node, path, state) {
            var visitors = state.g.visitors;
            for (var i = 0; i < visitors.length; i++) {
                if (visitors[i].test(node, path, state)) {
                    return visitors[i](traverse, node, path, state);
                }
            }
        }

        var _astCache = {};

        function getAstForSource(source, options) {
            if (_astCache[source] && !options.disableAstCache) {
                return _astCache[source];
            }
            var ast = esprima.parse(source, {
                comment: true,
                loc: true,
                range: true,
                sourceType: options.sourceType
            });
            if (!options.disableAstCache) {
                _astCache[source] = ast;
            }
            return ast;
        }

        /**
         * Applies all available transformations to the source
         * @param {array} visitors
         * @param {string} source
         * @param {?object} options
         * @return {object}
         */
        function transform(visitors, source, options) {
            options = options || {};
            var ast;
            try {
                ast = getAstForSource(source, options);
            } catch (e) {
                e.message = 'Parse Error: ' + e.message;
                throw e;
            }
            var state = utils.createState(source, ast, options);
            state.g.visitors = visitors;

            if (options.sourceMap) {
                var SourceMapGenerator = _dereq_('source-map').SourceMapGenerator;
                state.g.sourceMap = new SourceMapGenerator({file: options.filename || 'transformed.js'});
            }

            traverse(ast, [], state);
            utils.catchup(source.length, state);

            var ret = {code: state.g.buffer, extra: state.g.extra};
            if (options.sourceMap) {
                ret.sourceMap = state.g.sourceMap;
                ret.sourceMapFilename =  options.filename || 'source.js';
            }
            return ret;
        }

        exports.transform = transform;
        exports.Syntax = Syntax;

    },{"./utils":23,"esprima-fb":9,"source-map":11}],23:[function(_dereq_,module,exports){
        /**
         * Copyright 2013 Facebook, Inc.
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         * http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */


        /*jslint node: true*/
        var Syntax = _dereq_('esprima-fb').Syntax;
        var leadingIndentRegexp = /(^|\n)( {2}|\t)/g;
        var nonWhiteRegexp = /(\S)/g;

        /**
         * A `state` object represents the state of the parser. It has "local" and
         * "global" parts. Global contains parser position, source, etc. Local contains
         * scope based properties like current class name. State should contain all the
         * info required for transformation. It's the only mandatory object that is
         * being passed to every function in transform chain.
         *
         * @param  {string} source
         * @param  {object} transformOptions
         * @return {object}
         */
        function createState(source, rootNode, transformOptions) {
            return {
                /**
                 * A tree representing the current local scope (and its lexical scope chain)
                 * Useful for tracking identifiers from parent scopes, etc.
                 * @type {Object}
                 */
                localScope: {
                    parentNode: rootNode,
                    parentScope: null,
                    identifiers: {},
                    tempVarIndex: 0,
                    tempVars: []
                },
                /**
                 * The name (and, if applicable, expression) of the super class
                 * @type {Object}
                 */
                superClass: null,
                /**
                 * The namespace to use when munging identifiers
                 * @type {String}
                 */
                mungeNamespace: '',
                /**
                 * Ref to the node for the current MethodDefinition
                 * @type {Object}
                 */
                methodNode: null,
                /**
                 * Ref to the node for the FunctionExpression of the enclosing
                 * MethodDefinition
                 * @type {Object}
                 */
                methodFuncNode: null,
                /**
                 * Name of the enclosing class
                 * @type {String}
                 */
                className: null,
                /**
                 * Whether we're currently within a `strict` scope
                 * @type {Bool}
                 */
                scopeIsStrict: null,
                /**
                 * Indentation offset
                 * @type {Number}
                 */
                indentBy: 0,
                /**
                 * Global state (not affected by updateState)
                 * @type {Object}
                 */
                g: {
                    /**
                     * A set of general options that transformations can consider while doing
                     * a transformation:
                     *
                     * - minify
                     *   Specifies that transformation steps should do their best to minify
                     *   the output source when possible. This is useful for places where
                     *   minification optimizations are possible with higher-level context
                     *   info than what jsxmin can provide.
                     *
                     *   For example, the ES6 class transform will minify munged private
                     *   variables if this flag is set.
                     */
                    opts: transformOptions,
                    /**
                     * Current position in the source code
                     * @type {Number}
                     */
                    position: 0,
                    /**
                     * Auxiliary data to be returned by transforms
                     * @type {Object}
                     */
                    extra: {},
                    /**
                     * Buffer containing the result
                     * @type {String}
                     */
                    buffer: '',
                    /**
                     * Source that is being transformed
                     * @type {String}
                     */
                    source: source,

                    /**
                     * Cached parsed docblock (see getDocblock)
                     * @type {object}
                     */
                    docblock: null,

                    /**
                     * Whether the thing was used
                     * @type {Boolean}
                     */
                    tagNamespaceUsed: false,

                    /**
                     * If using bolt xjs transformation
                     * @type {Boolean}
                     */
                    isBolt: undefined,

                    /**
                     * Whether to record source map (expensive) or not
                     * @type {SourceMapGenerator|null}
                     */
                    sourceMap: null,

                    /**
                     * Filename of the file being processed. Will be returned as a source
                     * attribute in the source map
                     */
                    sourceMapFilename: 'source.js',

                    /**
                     * Only when source map is used: last line in the source for which
                     * source map was generated
                     * @type {Number}
                     */
                    sourceLine: 1,

                    /**
                     * Only when source map is used: last line in the buffer for which
                     * source map was generated
                     * @type {Number}
                     */
                    bufferLine: 1,

                    /**
                     * The top-level Program AST for the original file.
                     */
                    originalProgramAST: null,

                    sourceColumn: 0,
                    bufferColumn: 0
                }
            };
        }

        /**
         * Updates a copy of a given state with "update" and returns an updated state.
         *
         * @param  {object} state
         * @param  {object} update
         * @return {object}
         */
        function updateState(state, update) {
            var ret = Object.create(state);
            Object.keys(update).forEach(function(updatedKey) {
                ret[updatedKey] = update[updatedKey];
            });
            return ret;
        }

        /**
         * Given a state fill the resulting buffer from the original source up to
         * the end
         *
         * @param {number} end
         * @param {object} state
         * @param {?function} contentTransformer Optional callback to transform newly
         *                                       added content.
         */
        function catchup(end, state, contentTransformer) {
            if (end < state.g.position) {
                // cannot move backwards
                return;
            }
            var source = state.g.source.substring(state.g.position, end);
            var transformed = updateIndent(source, state);
            if (state.g.sourceMap && transformed) {
                // record where we are
                state.g.sourceMap.addMapping({
                    generated: { line: state.g.bufferLine, column: state.g.bufferColumn },
                    original: { line: state.g.sourceLine, column: state.g.sourceColumn },
                    source: state.g.sourceMapFilename
                });

                // record line breaks in transformed source
                var sourceLines = source.split('\n');
                var transformedLines = transformed.split('\n');
                // Add line break mappings between last known mapping and the end of the
                // added piece. So for the code piece
                //  (foo, bar);
                // > var x = 2;
                // > var b = 3;
                //   var c =
                // only add lines marked with ">": 2, 3.
                for (var i = 1; i < sourceLines.length - 1; i++) {
                    state.g.sourceMap.addMapping({
                        generated: { line: state.g.bufferLine, column: 0 },
                        original: { line: state.g.sourceLine, column: 0 },
                        source: state.g.sourceMapFilename
                    });
                    state.g.sourceLine++;
                    state.g.bufferLine++;
                }
                // offset for the last piece
                if (sourceLines.length > 1) {
                    state.g.sourceLine++;
                    state.g.bufferLine++;
                    state.g.sourceColumn = 0;
                    state.g.bufferColumn = 0;
                }
                state.g.sourceColumn += sourceLines[sourceLines.length - 1].length;
                state.g.bufferColumn +=
                    transformedLines[transformedLines.length - 1].length;
            }
            state.g.buffer +=
                contentTransformer ? contentTransformer(transformed) : transformed;
            state.g.position = end;
        }

        /**
         * Returns original source for an AST node.
         * @param {object} node
         * @param {object} state
         * @return {string}
         */
        function getNodeSourceText(node, state) {
            return state.g.source.substring(node.range[0], node.range[1]);
        }

        function _replaceNonWhite(value) {
            return value.replace(nonWhiteRegexp, ' ');
        }

        /**
         * Removes all non-whitespace characters
         */
        function _stripNonWhite(value) {
            return value.replace(nonWhiteRegexp, '');
        }

        /**
         * Finds the position of the next instance of the specified syntactic char in
         * the pending source.
         *
         * NOTE: This will skip instances of the specified char if they sit inside a
         *       comment body.
         *
         * NOTE: This function also assumes that the buffer's current position is not
         *       already within a comment or a string. This is rarely the case since all
         *       of the buffer-advancement utility methods tend to be used on syntactic
         *       nodes' range values -- but it's a small gotcha that's worth mentioning.
         */
        function getNextSyntacticCharOffset(char, state) {
            var pendingSource = state.g.source.substring(state.g.position);
            var pendingSourceLines = pendingSource.split('\n');

            var charOffset = 0;
            var line;
            var withinBlockComment = false;
            var withinString = false;
            lineLoop: while ((line = pendingSourceLines.shift()) !== undefined) {
                var lineEndPos = charOffset + line.length;
                charLoop: for (; charOffset < lineEndPos; charOffset++) {
                    var currChar = pendingSource[charOffset];
                    if (currChar === '"' || currChar === '\'') {
                        withinString = !withinString;
                        continue charLoop;
                    } else if (withinString) {
                        continue charLoop;
                    } else if (charOffset + 1 < lineEndPos) {
                        var nextTwoChars = currChar + line[charOffset + 1];
                        if (nextTwoChars === '//') {
                            charOffset = lineEndPos + 1;
                            continue lineLoop;
                        } else if (nextTwoChars === '/*') {
                            withinBlockComment = true;
                            charOffset += 1;
                            continue charLoop;
                        } else if (nextTwoChars === '*/') {
                            withinBlockComment = false;
                            charOffset += 1;
                            continue charLoop;
                        }
                    }

                    if (!withinBlockComment && currChar === char) {
                        return charOffset + state.g.position;
                    }
                }

                // Account for '\n'
                charOffset++;
                withinString = false;
            }

            throw new Error('`' + char + '` not found!');
        }

        /**
         * Catches up as `catchup` but replaces non-whitespace chars with spaces.
         */
        function catchupWhiteOut(end, state) {
            catchup(end, state, _replaceNonWhite);
        }

        /**
         * Catches up as `catchup` but removes all non-whitespace characters.
         */
        function catchupWhiteSpace(end, state) {
            catchup(end, state, _stripNonWhite);
        }

        /**
         * Removes all non-newline characters
         */
        var reNonNewline = /[^\n]/g;
        function stripNonNewline(value) {
            return value.replace(reNonNewline, function() {
                return '';
            });
        }

        /**
         * Catches up as `catchup` but removes all non-newline characters.
         *
         * Equivalent to appending as many newlines as there are in the original source
         * between the current position and `end`.
         */
        function catchupNewlines(end, state) {
            catchup(end, state, stripNonNewline);
        }


        /**
         * Same as catchup but does not touch the buffer
         *
         * @param  {number} end
         * @param  {object} state
         */
        function move(end, state) {
            // move the internal cursors
            if (state.g.sourceMap) {
                if (end < state.g.position) {
                    state.g.position = 0;
                    state.g.sourceLine = 1;
                    state.g.sourceColumn = 0;
                }

                var source = state.g.source.substring(state.g.position, end);
                var sourceLines = source.split('\n');
                if (sourceLines.length > 1) {
                    state.g.sourceLine += sourceLines.length - 1;
                    state.g.sourceColumn = 0;
                }
                state.g.sourceColumn += sourceLines[sourceLines.length - 1].length;
            }
            state.g.position = end;
        }

        /**
         * Appends a string of text to the buffer
         *
         * @param {string} str
         * @param {object} state
         */
        function append(str, state) {
            if (state.g.sourceMap && str) {
                state.g.sourceMap.addMapping({
                    generated: { line: state.g.bufferLine, column: state.g.bufferColumn },
                    original: { line: state.g.sourceLine, column: state.g.sourceColumn },
                    source: state.g.sourceMapFilename
                });
                var transformedLines = str.split('\n');
                if (transformedLines.length > 1) {
                    state.g.bufferLine += transformedLines.length - 1;
                    state.g.bufferColumn = 0;
                }
                state.g.bufferColumn +=
                    transformedLines[transformedLines.length - 1].length;
            }
            state.g.buffer += str;
        }

        /**
         * Update indent using state.indentBy property. Indent is measured in
         * double spaces. Updates a single line only.
         *
         * @param {string} str
         * @param {object} state
         * @return {string}
         */
        function updateIndent(str, state) {
            /*jshint -W004*/
            var indentBy = state.indentBy;
            if (indentBy < 0) {
                for (var i = 0; i < -indentBy; i++) {
                    str = str.replace(leadingIndentRegexp, '$1');
                }
            } else {
                for (var i = 0; i < indentBy; i++) {
                    str = str.replace(leadingIndentRegexp, '$1$2$2');
                }
            }
            return str;
        }

        /**
         * Calculates indent from the beginning of the line until "start" or the first
         * character before start.
         * @example
         *   "  foo.bar()"
         *         ^
         *       start
         *   indent will be "  "
         *
         * @param  {number} start
         * @param  {object} state
         * @return {string}
         */
        function indentBefore(start, state) {
            var end = start;
            start = start - 1;

            while (start > 0 && state.g.source[start] != '\n') {
                if (!state.g.source[start].match(/[ \t]/)) {
                    end = start;
                }
                start--;
            }
            return state.g.source.substring(start + 1, end);
        }

        function getDocblock(state) {
            if (!state.g.docblock) {
                var docblock = _dereq_('./docblock');
                state.g.docblock =
                    docblock.parseAsObject(docblock.extract(state.g.source));
            }
            return state.g.docblock;
        }

        function identWithinLexicalScope(identName, state, stopBeforeNode) {
            var currScope = state.localScope;
            while (currScope) {
                if (currScope.identifiers[identName] !== undefined) {
                    return true;
                }

                if (stopBeforeNode && currScope.parentNode === stopBeforeNode) {
                    break;
                }

                currScope = currScope.parentScope;
            }
            return false;
        }

        function identInLocalScope(identName, state) {
            return state.localScope.identifiers[identName] !== undefined;
        }

        /**
         * @param {object} boundaryNode
         * @param {?array} path
         * @return {?object} node
         */
        function initScopeMetadata(boundaryNode, path, node) {
            return {
                boundaryNode: boundaryNode,
                bindingPath: path,
                bindingNode: node
            };
        }

        function declareIdentInLocalScope(identName, metaData, state) {
            state.localScope.identifiers[identName] = {
                boundaryNode: metaData.boundaryNode,
                path: metaData.bindingPath,
                node: metaData.bindingNode,
                state: Object.create(state)
            };
        }

        function getLexicalBindingMetadata(identName, state) {
            var currScope = state.localScope;
            while (currScope) {
                if (currScope.identifiers[identName] !== undefined) {
                    return currScope.identifiers[identName];
                }

                currScope = currScope.parentScope;
            }
        }

        function getLocalBindingMetadata(identName, state) {
            return state.localScope.identifiers[identName];
        }

        /**
         * Apply the given analyzer function to the current node. If the analyzer
         * doesn't return false, traverse each child of the current node using the given
         * traverser function.
         *
         * @param {function} analyzer
         * @param {function} traverser
         * @param {object} node
         * @param {array} path
         * @param {object} state
         */
        function analyzeAndTraverse(analyzer, traverser, node, path, state) {
            if (node.type) {
                if (analyzer(node, path, state) === false) {
                    return;
                }
                path.unshift(node);
            }

            getOrderedChildren(node).forEach(function(child) {
                traverser(child, path, state);
            });

            node.type && path.shift();
        }

        /**
         * It is crucial that we traverse in order, or else catchup() on a later
         * node that is processed out of order can move the buffer past a node
         * that we haven't handled yet, preventing us from modifying that node.
         *
         * This can happen when a node has multiple properties containing children.
         * For example, XJSElement nodes have `openingElement`, `closingElement` and
         * `children`. If we traverse `openingElement`, then `closingElement`, then
         * when we get to `children`, the buffer has already caught up to the end of
         * the closing element, after the children.
         *
         * This is basically a Schwartzian transform. Collects an array of children,
         * each one represented as [child, startIndex]; sorts the array by start
         * index; then traverses the children in that order.
         */
        function getOrderedChildren(node) {
            var queue = [];
            for (var key in node) {
                if (node.hasOwnProperty(key)) {
                    enqueueNodeWithStartIndex(queue, node[key]);
                }
            }
            queue.sort(function(a, b) { return a[1] - b[1]; });
            return queue.map(function(pair) { return pair[0]; });
        }

        /**
         * Helper function for analyzeAndTraverse which queues up all of the children
         * of the given node.
         *
         * Children can also be found in arrays, so we basically want to merge all of
         * those arrays together so we can sort them and then traverse the children
         * in order.
         *
         * One example is the Program node. It contains `body` and `comments`, both
         * arrays. Lexographically, comments are interspersed throughout the body
         * nodes, but esprima's AST groups them together.
         */
        function enqueueNodeWithStartIndex(queue, node) {
            if (typeof node !== 'object' || node === null) {
                return;
            }
            if (node.range) {
                queue.push([node, node.range[0]]);
            } else if (Array.isArray(node)) {
                for (var ii = 0; ii < node.length; ii++) {
                    enqueueNodeWithStartIndex(queue, node[ii]);
                }
            }
        }

        /**
         * Checks whether a node or any of its sub-nodes contains
         * a syntactic construct of the passed type.
         * @param {object} node - AST node to test.
         * @param {string} type - node type to lookup.
         */
        function containsChildOfType(node, type) {
            return containsChildMatching(node, function(node) {
                return node.type === type;
            });
        }

        function containsChildMatching(node, matcher) {
            var foundMatchingChild = false;
            function nodeTypeAnalyzer(node) {
                if (matcher(node) === true) {
                    foundMatchingChild = true;
                    return false;
                }
            }
            function nodeTypeTraverser(child, path, state) {
                if (!foundMatchingChild) {
                    foundMatchingChild = containsChildMatching(child, matcher);
                }
            }
            analyzeAndTraverse(
                nodeTypeAnalyzer,
                nodeTypeTraverser,
                node,
                []
            );
            return foundMatchingChild;
        }

        var scopeTypes = {};
        scopeTypes[Syntax.ArrowFunctionExpression] = true;
        scopeTypes[Syntax.FunctionExpression] = true;
        scopeTypes[Syntax.FunctionDeclaration] = true;
        scopeTypes[Syntax.Program] = true;

        function getBoundaryNode(path) {
            for (var ii = 0; ii < path.length; ++ii) {
                if (scopeTypes[path[ii].type]) {
                    return path[ii];
                }
            }
            throw new Error(
                'Expected to find a node with one of the following types in path:\n' +
                JSON.stringify(Object.keys(scopeTypes))
            );
        }

        function getTempVar(tempVarIndex) {
            return '$__' + tempVarIndex;
        }

        function injectTempVar(state) {
            var tempVar = '$__' + (state.localScope.tempVarIndex++);
            state.localScope.tempVars.push(tempVar);
            return tempVar;
        }

        function injectTempVarDeclarations(state, index) {
            if (state.localScope.tempVars.length) {
                state.g.buffer =
                    state.g.buffer.slice(0, index) +
                    'var ' + state.localScope.tempVars.join(', ') + ';' +
                    state.g.buffer.slice(index);
                state.localScope.tempVars = [];
            }
        }

        exports.analyzeAndTraverse = analyzeAndTraverse;
        exports.append = append;
        exports.catchup = catchup;
        exports.catchupNewlines = catchupNewlines;
        exports.catchupWhiteOut = catchupWhiteOut;
        exports.catchupWhiteSpace = catchupWhiteSpace;
        exports.containsChildMatching = containsChildMatching;
        exports.containsChildOfType = containsChildOfType;
        exports.createState = createState;
        exports.declareIdentInLocalScope = declareIdentInLocalScope;
        exports.getBoundaryNode = getBoundaryNode;
        exports.getDocblock = getDocblock;
        exports.getLexicalBindingMetadata = getLexicalBindingMetadata;
        exports.getLocalBindingMetadata = getLocalBindingMetadata;
        exports.getNextSyntacticCharOffset = getNextSyntacticCharOffset;
        exports.getNodeSourceText = getNodeSourceText;
        exports.getOrderedChildren = getOrderedChildren;
        exports.getTempVar = getTempVar;
        exports.identInLocalScope = identInLocalScope;
        exports.identWithinLexicalScope = identWithinLexicalScope;
        exports.indentBefore = indentBefore;
        exports.initScopeMetadata = initScopeMetadata;
        exports.injectTempVar = injectTempVar;
        exports.injectTempVarDeclarations = injectTempVarDeclarations;
        exports.move = move;
        exports.scopeTypes = scopeTypes;
        exports.updateIndent = updateIndent;
        exports.updateState = updateState;

    },{"./docblock":21,"esprima-fb":9}],24:[function(_dereq_,module,exports){
        /**
         * Copyright 2013 Facebook, Inc.
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         * http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */

        /*global exports:true*/

        /**
         * Desugars ES6 Arrow functions to ES3 function expressions.
         * If the function contains `this` expression -- automatically
         * binds the function to current value of `this`.
         *
         * Single parameter, simple expression:
         *
         * [1, 2, 3].map(x => x * x);
         *
         * [1, 2, 3].map(function(x) { return x * x; });
         *
         * Several parameters, complex block:
         *
         * this.users.forEach((user, idx) => {
         *   return this.isActive(idx) && this.send(user);
         * });
         *
         * this.users.forEach(function(user, idx) {
         *   return this.isActive(idx) && this.send(user);
         * }.bind(this));
         *
         */
        var restParamVisitors = _dereq_('./es6-rest-param-visitors');
        var destructuringVisitors = _dereq_('./es6-destructuring-visitors');

        var Syntax = _dereq_('esprima-fb').Syntax;
        var utils = _dereq_('../src/utils');

        /**
         * @public
         */
        function visitArrowFunction(traverse, node, path, state) {
            var notInExpression = (path[0].type === Syntax.ExpressionStatement);

            // Wrap a function into a grouping operator, if it's not
            // in the expression position.
            if (notInExpression) {
                utils.append('(', state);
            }

            utils.append('function', state);
            renderParams(traverse, node, path, state);

            // Skip arrow.
            utils.catchupWhiteSpace(node.body.range[0], state);

            var renderBody = node.body.type == Syntax.BlockStatement
                ? renderStatementBody
                : renderExpressionBody;

            path.unshift(node);
            renderBody(traverse, node, path, state);
            path.shift();

            // Bind the function only if `this` value is used
            // inside it or inside any sub-expression.
            var containsBindingSyntax =
                utils.containsChildMatching(node.body, function(node) {
                    return node.type === Syntax.ThisExpression
                        || (node.type === Syntax.Identifier
                            && node.name === "super");
                });

            if (containsBindingSyntax) {
                utils.append('.bind(this)', state);
            }

            utils.catchupWhiteSpace(node.range[1], state);

            // Close wrapper if not in the expression.
            if (notInExpression) {
                utils.append(')', state);
            }

            return false;
        }

        function renderParams(traverse, node, path, state) {
            // To preserve inline typechecking directives, we
            // distinguish between parens-free and paranthesized single param.
            if (isParensFreeSingleParam(node, state) || !node.params.length) {
                utils.append('(', state);
            }
            if (node.params.length !== 0) {
                path.unshift(node);
                traverse(node.params, path, state);
                path.unshift();
            }
            utils.append(')', state);
        }

        function isParensFreeSingleParam(node, state) {
            return node.params.length === 1 &&
                state.g.source[state.g.position] !== '(';
        }

        function renderExpressionBody(traverse, node, path, state) {
            // Wrap simple expression bodies into a block
            // with explicit return statement.
            utils.append('{', state);

            // Special handling of rest param.
            if (node.rest) {
                utils.append(
                    restParamVisitors.renderRestParamSetup(node, state),
                    state
                );
            }

            // Special handling of destructured params.
            destructuringVisitors.renderDestructuredComponents(
                node,
                utils.updateState(state, {
                    localScope: {
                        parentNode: state.parentNode,
                        parentScope: state.parentScope,
                        identifiers: state.identifiers,
                        tempVarIndex: 0
                    }
                })
            );

            utils.append('return ', state);
            renderStatementBody(traverse, node, path, state);
            utils.append(';}', state);
        }

        function renderStatementBody(traverse, node, path, state) {
            traverse(node.body, path, state);
            utils.catchup(node.body.range[1], state);
        }

        visitArrowFunction.test = function(node, path, state) {
            return node.type === Syntax.ArrowFunctionExpression;
        };

        exports.visitorList = [
            visitArrowFunction
        ];


    },{"../src/utils":23,"./es6-destructuring-visitors":27,"./es6-rest-param-visitors":30,"esprima-fb":9}],25:[function(_dereq_,module,exports){
        /**
         * Copyright 2004-present Facebook. All Rights Reserved.
         */
        /*global exports:true*/

        /**
         * Implements ES6 call spread.
         *
         * instance.method(a, b, c, ...d)
         *
         * instance.method.apply(instance, [a, b, c].concat(d))
         *
         */

        var Syntax = _dereq_('esprima-fb').Syntax;
        var utils = _dereq_('../src/utils');

        function process(traverse, node, path, state) {
            utils.move(node.range[0], state);
            traverse(node, path, state);
            utils.catchup(node.range[1], state);
        }

        function visitCallSpread(traverse, node, path, state) {
            utils.catchup(node.range[0], state);

            if (node.type === Syntax.NewExpression) {
                // Input  = new Set(1, 2, ...list)
                // Output = new (Function.prototype.bind.apply(Set, [null, 1, 2].concat(list)))
                utils.append('new (Function.prototype.bind.apply(', state);
                process(traverse, node.callee, path, state);
            } else if (node.callee.type === Syntax.MemberExpression) {
                // Input  = get().fn(1, 2, ...more)
                // Output = (_ = get()).fn.apply(_, [1, 2].apply(more))
                var tempVar = utils.injectTempVar(state);
                utils.append('(' + tempVar + ' = ', state);
                process(traverse, node.callee.object, path, state);
                utils.append(')', state);
                if (node.callee.property.type === Syntax.Identifier) {
                    utils.append('.', state);
                    process(traverse, node.callee.property, path, state);
                } else {
                    utils.append('[', state);
                    process(traverse, node.callee.property, path, state);
                    utils.append(']', state);
                }
                utils.append('.apply(' + tempVar, state);
            } else {
                // Input  = max(1, 2, ...list)
                // Output = max.apply(null, [1, 2].concat(list))
                var needsToBeWrappedInParenthesis =
                    node.callee.type === Syntax.FunctionDeclaration ||
                    node.callee.type === Syntax.FunctionExpression;
                if (needsToBeWrappedInParenthesis) {
                    utils.append('(', state);
                }
                process(traverse, node.callee, path, state);
                if (needsToBeWrappedInParenthesis) {
                    utils.append(')', state);
                }
                utils.append('.apply(null', state);
            }
            utils.append(', ', state);

            var args = node.arguments.slice();
            var spread = args.pop();
            if (args.length || node.type === Syntax.NewExpression) {
                utils.append('[', state);
                if (node.type === Syntax.NewExpression) {
                    utils.append('null' + (args.length ? ', ' : ''), state);
                }
                while (args.length) {
                    var arg = args.shift();
                    utils.move(arg.range[0], state);
                    traverse(arg, path, state);
                    if (args.length) {
                        utils.catchup(args[0].range[0], state);
                    } else {
                        utils.catchup(arg.range[1], state);
                    }
                }
                utils.append('].concat(', state);
                process(traverse, spread.argument, path, state);
                utils.append(')', state);
            } else {
                process(traverse, spread.argument, path, state);
            }
            utils.append(node.type === Syntax.NewExpression ? '))' : ')', state);

            utils.move(node.range[1], state);
            return false;
        }

        visitCallSpread.test = function(node, path, state) {
            return (
                (
                    node.type === Syntax.CallExpression ||
                    node.type === Syntax.NewExpression
                ) &&
                node.arguments.length > 0 &&
                node.arguments[node.arguments.length - 1].type === Syntax.SpreadElement
            );
        };

        exports.visitorList = [
            visitCallSpread
        ];

    },{"../src/utils":23,"esprima-fb":9}],26:[function(_dereq_,module,exports){
        /**
         * Copyright 2013 Facebook, Inc.
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         * http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */

        /*jslint node:true*/

        /**
         * @typechecks
         */
        'use strict';

        var base62 = _dereq_('base62');
        var Syntax = _dereq_('esprima-fb').Syntax;
        var utils = _dereq_('../src/utils');
        var reservedWordsHelper = _dereq_('./reserved-words-helper');

        var declareIdentInLocalScope = utils.declareIdentInLocalScope;
        var initScopeMetadata = utils.initScopeMetadata;

        var SUPER_PROTO_IDENT_PREFIX = '____SuperProtoOf';

        var _anonClassUUIDCounter = 0;
        var _mungedSymbolMaps = {};

        function resetSymbols() {
            _anonClassUUIDCounter = 0;
            _mungedSymbolMaps = {};
        }

        /**
         * Used to generate a unique class for use with code-gens for anonymous class
         * expressions.
         *
         * @param {object} state
         * @return {string}
         */
        function _generateAnonymousClassName(state) {
            var mungeNamespace = state.mungeNamespace || '';
            return '____Class' + mungeNamespace + base62.encode(_anonClassUUIDCounter++);
        }

        /**
         * Given an identifier name, munge it using the current state's mungeNamespace.
         *
         * @param {string} identName
         * @param {object} state
         * @return {string}
         */
        function _getMungedName(identName, state) {
            var mungeNamespace = state.mungeNamespace;
            var shouldMinify = state.g.opts.minify;

            if (shouldMinify) {
                if (!_mungedSymbolMaps[mungeNamespace]) {
                    _mungedSymbolMaps[mungeNamespace] = {
                        symbolMap: {},
                        identUUIDCounter: 0
                    };
                }

                var symbolMap = _mungedSymbolMaps[mungeNamespace].symbolMap;
                if (!symbolMap[identName]) {
                    symbolMap[identName] =
                        base62.encode(_mungedSymbolMaps[mungeNamespace].identUUIDCounter++);
                }
                identName = symbolMap[identName];
            }
            return '$' + mungeNamespace + identName;
        }

        /**
         * Extracts super class information from a class node.
         *
         * Information includes name of the super class and/or the expression string
         * (if extending from an expression)
         *
         * @param {object} node
         * @param {object} state
         * @return {object}
         */
        function _getSuperClassInfo(node, state) {
            var ret = {
                name: null,
                expression: null
            };
            if (node.superClass) {
                if (node.superClass.type === Syntax.Identifier) {
                    ret.name = node.superClass.name;
                } else {
                    // Extension from an expression
                    ret.name = _generateAnonymousClassName(state);
                    ret.expression = state.g.source.substring(
                        node.superClass.range[0],
                        node.superClass.range[1]
                    );
                }
            }
            return ret;
        }

        /**
         * Used with .filter() to find the constructor method in a list of
         * MethodDefinition nodes.
         *
         * @param {object} classElement
         * @return {boolean}
         */
        function _isConstructorMethod(classElement) {
            return classElement.type === Syntax.MethodDefinition &&
                classElement.key.type === Syntax.Identifier &&
                classElement.key.name === 'constructor';
        }

        /**
         * @param {object} node
         * @param {object} state
         * @return {boolean}
         */
        function _shouldMungeIdentifier(node, state) {
            return (
                !!state.methodFuncNode &&
                !utils.getDocblock(state).hasOwnProperty('preventMunge') &&
                /^_(?!_)/.test(node.name)
            );
        }

        /**
         * @param {function} traverse
         * @param {object} node
         * @param {array} path
         * @param {object} state
         */
        function visitClassMethod(traverse, node, path, state) {
            if (!state.g.opts.es5 && (node.kind === 'get' || node.kind === 'set')) {
                throw new Error(
                    'This transform does not support ' + node.kind + 'ter methods for ES6 ' +
                    'classes. (line: ' + node.loc.start.line + ', col: ' +
                    node.loc.start.column + ')'
                );
            }
            state = utils.updateState(state, {
                methodNode: node
            });
            utils.catchup(node.range[0], state);
            path.unshift(node);
            traverse(node.value, path, state);
            path.shift();
            return false;
        }
        visitClassMethod.test = function(node, path, state) {
            return node.type === Syntax.MethodDefinition;
        };

        /**
         * @param {function} traverse
         * @param {object} node
         * @param {array} path
         * @param {object} state
         */
        function visitClassFunctionExpression(traverse, node, path, state) {
            var methodNode = path[0];
            var isGetter = methodNode.kind === 'get';
            var isSetter = methodNode.kind === 'set';

            state = utils.updateState(state, {
                methodFuncNode: node
            });

            if (methodNode.key.name === 'constructor') {
                utils.append('function ' + state.className, state);
            } else {
                var methodAccessorComputed = false;
                var methodAccessor;
                var prototypeOrStatic = methodNode["static"] ? '' : '.prototype';
                var objectAccessor = state.className + prototypeOrStatic;

                if (methodNode.key.type === Syntax.Identifier) {
                    // foo() {}
                    methodAccessor = methodNode.key.name;
                    if (_shouldMungeIdentifier(methodNode.key, state)) {
                        methodAccessor = _getMungedName(methodAccessor, state);
                    }
                    if (isGetter || isSetter) {
                        methodAccessor = JSON.stringify(methodAccessor);
                    } else if (reservedWordsHelper.isReservedWord(methodAccessor)) {
                        methodAccessorComputed = true;
                        methodAccessor = JSON.stringify(methodAccessor);
                    }
                } else if (methodNode.key.type === Syntax.Literal) {
                    // 'foo bar'() {}  | get 'foo bar'() {} | set 'foo bar'() {}
                    methodAccessor = JSON.stringify(methodNode.key.value);
                    methodAccessorComputed = true;
                }

                if (isSetter || isGetter) {
                    utils.append(
                        'Object.defineProperty(' +
                        objectAccessor + ',' +
                        methodAccessor + ',' +
                        '{configurable:true,' +
                        methodNode.kind + ':function',
                        state
                    );
                } else {
                    if (state.g.opts.es3) {
                        if (methodAccessorComputed) {
                            methodAccessor = '[' + methodAccessor + ']';
                        } else {
                            methodAccessor = '.' + methodAccessor;
                        }
                        utils.append(
                            objectAccessor +
                            methodAccessor + '=function' + (node.generator ? '*' : ''),
                            state
                        );
                    } else {
                        if (!methodAccessorComputed) {
                            methodAccessor = JSON.stringify(methodAccessor);
                        }
                        utils.append(
                            'Object.defineProperty(' +
                            objectAccessor + ',' +
                            methodAccessor + ',' +
                            '{writable:true,configurable:true,' +
                            'value:function' + (node.generator ? '*' : ''),
                            state
                        );
                    }
                }
            }
            utils.move(methodNode.key.range[1], state);
            utils.append('(', state);

            var params = node.params;
            if (params.length > 0) {
                utils.catchupNewlines(params[0].range[0], state);
                for (var i = 0; i < params.length; i++) {
                    utils.catchup(node.params[i].range[0], state);
                    path.unshift(node);
                    traverse(params[i], path, state);
                    path.shift();
                }
            }

            var closingParenPosition = utils.getNextSyntacticCharOffset(')', state);
            utils.catchupWhiteSpace(closingParenPosition, state);

            var openingBracketPosition = utils.getNextSyntacticCharOffset('{', state);
            utils.catchup(openingBracketPosition + 1, state);

            if (!state.scopeIsStrict) {
                utils.append('"use strict";', state);
                state = utils.updateState(state, {
                    scopeIsStrict: true
                });
            }
            utils.move(node.body.range[0] + '{'.length, state);

            path.unshift(node);
            traverse(node.body, path, state);
            path.shift();
            utils.catchup(node.body.range[1], state);

            if (methodNode.key.name !== 'constructor') {
                if (isGetter || isSetter || !state.g.opts.es3) {
                    utils.append('})', state);
                }
                utils.append(';', state);
            }
            return false;
        }
        visitClassFunctionExpression.test = function(node, path, state) {
            return node.type === Syntax.FunctionExpression
                && path[0].type === Syntax.MethodDefinition;
        };

        function visitClassMethodParam(traverse, node, path, state) {
            var paramName = node.name;
            if (_shouldMungeIdentifier(node, state)) {
                paramName = _getMungedName(node.name, state);
            }
            utils.append(paramName, state);
            utils.move(node.range[1], state);
        }
        visitClassMethodParam.test = function(node, path, state) {
            if (!path[0] || !path[1]) {
                return;
            }

            var parentFuncExpr = path[0];
            var parentClassMethod = path[1];

            return parentFuncExpr.type === Syntax.FunctionExpression
                && parentClassMethod.type === Syntax.MethodDefinition
                && node.type === Syntax.Identifier;
        };

        /**
         * @param {function} traverse
         * @param {object} node
         * @param {array} path
         * @param {object} state
         */
        function _renderClassBody(traverse, node, path, state) {
            var className = state.className;
            var superClass = state.superClass;

            // Set up prototype of constructor on same line as `extends` for line-number
            // preservation. This relies on function-hoisting if a constructor function is
            // defined in the class body.
            if (superClass.name) {
                // If the super class is an expression, we need to memoize the output of the
                // expression into the generated class name variable and use that to refer
                // to the super class going forward. Example:
                //
                //   class Foo extends mixin(Bar, Baz) {}
                //     --transforms to--
                //   function Foo() {} var ____Class0Blah = mixin(Bar, Baz);
                if (superClass.expression !== null) {
                    utils.append(
                        'var ' + superClass.name + '=' + superClass.expression + ';',
                        state
                    );
                }

                var keyName = superClass.name + '____Key';
                var keyNameDeclarator = '';
                if (!utils.identWithinLexicalScope(keyName, state)) {
                    keyNameDeclarator = 'var ';
                    declareIdentInLocalScope(keyName, initScopeMetadata(node), state);
                }
                utils.append(
                    'for(' + keyNameDeclarator + keyName + ' in ' + superClass.name + '){' +
                    'if(' + superClass.name + '.hasOwnProperty(' + keyName + ')){' +
                    className + '[' + keyName + ']=' +
                    superClass.name + '[' + keyName + '];' +
                    '}' +
                    '}',
                    state
                );

                var superProtoIdentStr = SUPER_PROTO_IDENT_PREFIX + superClass.name;
                if (!utils.identWithinLexicalScope(superProtoIdentStr, state)) {
                    utils.append(
                        'var ' + superProtoIdentStr + '=' + superClass.name + '===null?' +
                        'null:' + superClass.name + '.prototype;',
                        state
                    );
                    declareIdentInLocalScope(superProtoIdentStr, initScopeMetadata(node), state);
                }

                utils.append(
                    className + '.prototype=Object.create(' + superProtoIdentStr + ');',
                    state
                );
                utils.append(
                    className + '.prototype.constructor=' + className + ';',
                    state
                );
                utils.append(
                    className + '.__superConstructor__=' + superClass.name + ';',
                    state
                );
            }

            // If there's no constructor method specified in the class body, create an
            // empty constructor function at the top (same line as the class keyword)
            if (!node.body.body.filter(_isConstructorMethod).pop()) {
                utils.append('function ' + className + '(){', state);
                if (!state.scopeIsStrict) {
                    utils.append('"use strict";', state);
                }
                if (superClass.name) {
                    utils.append(
                        'if(' + superClass.name + '!==null){' +
                        superClass.name + '.apply(this,arguments);}',
                        state
                    );
                }
                utils.append('}', state);
            }

            utils.move(node.body.range[0] + '{'.length, state);
            traverse(node.body, path, state);
            utils.catchupWhiteSpace(node.range[1], state);
        }

        /**
         * @param {function} traverse
         * @param {object} node
         * @param {array} path
         * @param {object} state
         */
        function visitClassDeclaration(traverse, node, path, state) {
            var className = node.id.name;
            var superClass = _getSuperClassInfo(node, state);

            state = utils.updateState(state, {
                mungeNamespace: className,
                className: className,
                superClass: superClass
            });

            _renderClassBody(traverse, node, path, state);

            return false;
        }
        visitClassDeclaration.test = function(node, path, state) {
            return node.type === Syntax.ClassDeclaration;
        };

        /**
         * @param {function} traverse
         * @param {object} node
         * @param {array} path
         * @param {object} state
         */
        function visitClassExpression(traverse, node, path, state) {
            var className = node.id && node.id.name || _generateAnonymousClassName(state);
            var superClass = _getSuperClassInfo(node, state);

            utils.append('(function(){', state);

            state = utils.updateState(state, {
                mungeNamespace: className,
                className: className,
                superClass: superClass
            });

            _renderClassBody(traverse, node, path, state);

            utils.append('return ' + className + ';})()', state);
            return false;
        }
        visitClassExpression.test = function(node, path, state) {
            return node.type === Syntax.ClassExpression;
        };

        /**
         * @param {function} traverse
         * @param {object} node
         * @param {array} path
         * @param {object} state
         */
        function visitPrivateIdentifier(traverse, node, path, state) {
            utils.append(_getMungedName(node.name, state), state);
            utils.move(node.range[1], state);
        }
        visitPrivateIdentifier.test = function(node, path, state) {
            if (node.type === Syntax.Identifier && _shouldMungeIdentifier(node, state)) {
                // Always munge non-computed properties of MemberExpressions
                // (a la preventing access of properties of unowned objects)
                if (path[0].type === Syntax.MemberExpression && path[0].object !== node
                    && path[0].computed === false) {
                    return true;
                }

                // Always munge identifiers that were declared within the method function
                // scope
                if (utils.identWithinLexicalScope(node.name, state, state.methodFuncNode)) {
                    return true;
                }

                // Always munge private keys on object literals defined within a method's
                // scope.
                if (path[0].type === Syntax.Property
                    && path[1].type === Syntax.ObjectExpression) {
                    return true;
                }

                // Always munge function parameters
                if (path[0].type === Syntax.FunctionExpression
                    || path[0].type === Syntax.FunctionDeclaration
                    || path[0].type === Syntax.ArrowFunctionExpression) {
                    for (var i = 0; i < path[0].params.length; i++) {
                        if (path[0].params[i] === node) {
                            return true;
                        }
                    }
                }
            }
            return false;
        };

        /**
         * @param {function} traverse
         * @param {object} node
         * @param {array} path
         * @param {object} state
         */
        function visitSuperCallExpression(traverse, node, path, state) {
            var superClassName = state.superClass.name;

            if (node.callee.type === Syntax.Identifier) {
                if (_isConstructorMethod(state.methodNode)) {
                    utils.append(superClassName + '.call(', state);
                } else {
                    var protoProp = SUPER_PROTO_IDENT_PREFIX + superClassName;
                    if (state.methodNode.key.type === Syntax.Identifier) {
                        protoProp += '.' + state.methodNode.key.name;
                    } else if (state.methodNode.key.type === Syntax.Literal) {
                        protoProp += '[' + JSON.stringify(state.methodNode.key.value) + ']';
                    }
                    utils.append(protoProp + ".call(", state);
                }
                utils.move(node.callee.range[1], state);
            } else if (node.callee.type === Syntax.MemberExpression) {
                utils.append(SUPER_PROTO_IDENT_PREFIX + superClassName, state);
                utils.move(node.callee.object.range[1], state);

                if (node.callee.computed) {
                    // ["a" + "b"]
                    utils.catchup(node.callee.property.range[1] + ']'.length, state);
                } else {
                    // .ab
                    utils.append('.' + node.callee.property.name, state);
                }

                utils.append('.call(', state);
                utils.move(node.callee.range[1], state);
            }

            utils.append('this', state);
            if (node.arguments.length > 0) {
                utils.append(',', state);
                utils.catchupWhiteSpace(node.arguments[0].range[0], state);
                traverse(node.arguments, path, state);
            }

            utils.catchupWhiteSpace(node.range[1], state);
            utils.append(')', state);
            return false;
        }
        visitSuperCallExpression.test = function(node, path, state) {
            if (state.superClass && node.type === Syntax.CallExpression) {
                var callee = node.callee;
                if (callee.type === Syntax.Identifier && callee.name === 'super'
                    || callee.type == Syntax.MemberExpression
                    && callee.object.name === 'super') {
                    return true;
                }
            }
            return false;
        };

        /**
         * @param {function} traverse
         * @param {object} node
         * @param {array} path
         * @param {object} state
         */
        function visitSuperMemberExpression(traverse, node, path, state) {
            var superClassName = state.superClass.name;

            utils.append(SUPER_PROTO_IDENT_PREFIX + superClassName, state);
            utils.move(node.object.range[1], state);
        }
        visitSuperMemberExpression.test = function(node, path, state) {
            return state.superClass
                && node.type === Syntax.MemberExpression
                && node.object.type === Syntax.Identifier
                && node.object.name === 'super';
        };

        exports.resetSymbols = resetSymbols;

        exports.visitorList = [
            visitClassDeclaration,
            visitClassExpression,
            visitClassFunctionExpression,
            visitClassMethod,
            visitClassMethodParam,
            visitPrivateIdentifier,
            visitSuperCallExpression,
            visitSuperMemberExpression
        ];

    },{"../src/utils":23,"./reserved-words-helper":34,"base62":10,"esprima-fb":9}],27:[function(_dereq_,module,exports){
        /**
         * Copyright 2014 Facebook, Inc.
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         * http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        /*global exports:true*/

        /**
         * Implements ES6 destructuring assignment and pattern matchng.
         *
         * function init({port, ip, coords: [x, y]}) {
         *   return (x && y) ? {id, port} : {ip};
         * };
         *
         * function init($__0) {
         *   var
         *    port = $__0.port,
         *    ip = $__0.ip,
         *    $__1 = $__0.coords,
         *    x = $__1[0],
         *    y = $__1[1];
         *   return (x && y) ? {id, port} : {ip};
         * }
         *
         * var x, {ip, port} = init({ip, port});
         *
         * var x, $__0 = init({ip, port}), ip = $__0.ip, port = $__0.port;
         *
         */
        var Syntax = _dereq_('esprima-fb').Syntax;
        var utils = _dereq_('../src/utils');

        var reservedWordsHelper = _dereq_('./reserved-words-helper');
        var restParamVisitors = _dereq_('./es6-rest-param-visitors');
        var restPropertyHelpers = _dereq_('./es7-rest-property-helpers');

// -------------------------------------------------------
// 1. Structured variable declarations.
//
// var [a, b] = [b, a];
// var {x, y} = {y, x};
// -------------------------------------------------------

        function visitStructuredVariable(traverse, node, path, state) {
            // Allocate new temp for the pattern.
            utils.append(utils.getTempVar(state.localScope.tempVarIndex) + '=', state);
            // Skip the pattern and assign the init to the temp.
            utils.catchupWhiteSpace(node.init.range[0], state);
            traverse(node.init, path, state);
            utils.catchup(node.init.range[1], state);
            // Render the destructured data.
            utils.append(',' + getDestructuredComponents(node.id, state), state);
            state.localScope.tempVarIndex++;
            return false;
        }

        visitStructuredVariable.test = function(node, path, state) {
            return node.type === Syntax.VariableDeclarator &&
                isStructuredPattern(node.id);
        };

        function isStructuredPattern(node) {
            return node.type === Syntax.ObjectPattern ||
                node.type === Syntax.ArrayPattern;
        }

// Main function which does actual recursive destructuring
// of nested complex structures.
        function getDestructuredComponents(node, state) {
            var tmpIndex = state.localScope.tempVarIndex;
            var components = [];
            var patternItems = getPatternItems(node);

            for (var idx = 0; idx < patternItems.length; idx++) {
                var item = patternItems[idx];
                if (!item) {
                    continue;
                }

                if (item.type === Syntax.SpreadElement) {
                    // Spread/rest of an array.
                    // TODO(dmitrys): support spread in the middle of a pattern
                    // and also for function param patterns: [x, ...xs, y]
                    components.push(item.argument.name +
                        '=Array.prototype.slice.call(' +
                        utils.getTempVar(tmpIndex) + ',' + idx + ')'
                    );
                    continue;
                }

                if (item.type === Syntax.SpreadProperty) {
                    var restExpression = restPropertyHelpers.renderRestExpression(
                        utils.getTempVar(tmpIndex),
                        patternItems
                    );
                    components.push(item.argument.name + '=' + restExpression);
                    continue;
                }

                // Depending on pattern type (Array or Object), we get
                // corresponding pattern item parts.
                var accessor = getPatternItemAccessor(node, item, tmpIndex, idx);
                var value = getPatternItemValue(node, item);

                // TODO(dmitrys): implement default values: {x, y=5}
                if (value.type === Syntax.Identifier) {
                    // Simple pattern item.
                    components.push(value.name + '=' + accessor);
                } else {
                    // Complex sub-structure.
                    components.push(
                        utils.getTempVar(++state.localScope.tempVarIndex) + '=' + accessor +
                        ',' + getDestructuredComponents(value, state)
                    );
                }
            }

            return components.join(',');
        }

        function getPatternItems(node) {
            return node.properties || node.elements;
        }

        function getPatternItemAccessor(node, patternItem, tmpIndex, idx) {
            var tmpName = utils.getTempVar(tmpIndex);
            if (node.type === Syntax.ObjectPattern) {
                if (reservedWordsHelper.isReservedWord(patternItem.key.name)) {
                    return tmpName + '["' + patternItem.key.name + '"]';
                } else if (patternItem.key.type === Syntax.Literal) {
                    return tmpName + '[' + JSON.stringify(patternItem.key.value) + ']';
                } else if (patternItem.key.type === Syntax.Identifier) {
                    return tmpName + '.' + patternItem.key.name;
                }
            } else if (node.type === Syntax.ArrayPattern) {
                return tmpName + '[' + idx + ']';
            }
        }

        function getPatternItemValue(node, patternItem) {
            return node.type === Syntax.ObjectPattern
                ? patternItem.value
                : patternItem;
        }

// -------------------------------------------------------
// 2. Assignment expression.
//
// [a, b] = [b, a];
// ({x, y} = {y, x});
// -------------------------------------------------------

        function visitStructuredAssignment(traverse, node, path, state) {
            var exprNode = node.expression;
            utils.append('var ' + utils.getTempVar(state.localScope.tempVarIndex) + '=', state);

            utils.catchupWhiteSpace(exprNode.right.range[0], state);
            traverse(exprNode.right, path, state);
            utils.catchup(exprNode.right.range[1], state);

            utils.append(
                ';' + getDestructuredComponents(exprNode.left, state) + ';',
                state
            );

            utils.catchupWhiteSpace(node.range[1], state);
            state.localScope.tempVarIndex++;
            return false;
        }

        visitStructuredAssignment.test = function(node, path, state) {
            // We consider the expression statement rather than just assignment
            // expression to cover case with object patters which should be
            // wrapped in grouping operator: ({x, y} = {y, x});
            return node.type === Syntax.ExpressionStatement &&
                node.expression.type === Syntax.AssignmentExpression &&
                isStructuredPattern(node.expression.left);
        };

// -------------------------------------------------------
// 3. Structured parameter.
//
// function foo({x, y}) { ... }
// -------------------------------------------------------

        function visitStructuredParameter(traverse, node, path, state) {
            utils.append(utils.getTempVar(getParamIndex(node, path)), state);
            utils.catchupWhiteSpace(node.range[1], state);
            return true;
        }

        function getParamIndex(paramNode, path) {
            var funcNode = path[0];
            var tmpIndex = 0;
            for (var k = 0; k < funcNode.params.length; k++) {
                var param = funcNode.params[k];
                if (param === paramNode) {
                    break;
                }
                if (isStructuredPattern(param)) {
                    tmpIndex++;
                }
            }
            return tmpIndex;
        }

        visitStructuredParameter.test = function(node, path, state) {
            return isStructuredPattern(node) && isFunctionNode(path[0]);
        };

        function isFunctionNode(node) {
            return (node.type == Syntax.FunctionDeclaration ||
                node.type == Syntax.FunctionExpression ||
                node.type == Syntax.MethodDefinition ||
                node.type == Syntax.ArrowFunctionExpression);
        }

// -------------------------------------------------------
// 4. Function body for structured parameters.
//
// function foo({x, y}) { x; y; }
// -------------------------------------------------------

        function visitFunctionBodyForStructuredParameter(traverse, node, path, state) {
            var funcNode = path[0];

            utils.catchup(funcNode.body.range[0] + 1, state);
            renderDestructuredComponents(funcNode, state);

            if (funcNode.rest) {
                utils.append(
                    restParamVisitors.renderRestParamSetup(funcNode, state),
                    state
                );
            }

            return true;
        }

        function renderDestructuredComponents(funcNode, state) {
            var destructuredComponents = [];

            for (var k = 0; k < funcNode.params.length; k++) {
                var param = funcNode.params[k];
                if (isStructuredPattern(param)) {
                    destructuredComponents.push(
                        getDestructuredComponents(param, state)
                    );
                    state.localScope.tempVarIndex++;
                }
            }

            if (destructuredComponents.length) {
                utils.append('var ' + destructuredComponents.join(',') + ';', state);
            }
        }

        visitFunctionBodyForStructuredParameter.test = function(node, path, state) {
            return node.type === Syntax.BlockStatement && isFunctionNode(path[0]);
        };

        exports.visitorList = [
            visitStructuredVariable,
            visitStructuredAssignment,
            visitStructuredParameter,
            visitFunctionBodyForStructuredParameter
        ];

        exports.renderDestructuredComponents = renderDestructuredComponents;


    },{"../src/utils":23,"./es6-rest-param-visitors":30,"./es7-rest-property-helpers":32,"./reserved-words-helper":34,"esprima-fb":9}],28:[function(_dereq_,module,exports){
        /**
         * Copyright 2013 Facebook, Inc.
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         * http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */

        /*jslint node:true*/

        /**
         * Desugars concise methods of objects to function expressions.
         *
         * var foo = {
         *   method(x, y) { ... }
         * };
         *
         * var foo = {
         *   method: function(x, y) { ... }
         * };
         *
         */

        var Syntax = _dereq_('esprima-fb').Syntax;
        var utils = _dereq_('../src/utils');
        var reservedWordsHelper = _dereq_('./reserved-words-helper');

        function visitObjectConciseMethod(traverse, node, path, state) {
            var isGenerator = node.value.generator;
            if (isGenerator) {
                utils.catchupWhiteSpace(node.range[0] + 1, state);
            }
            if (node.computed) { // [<expr>]() { ...}
                utils.catchup(node.key.range[1] + 1, state);
            } else if (reservedWordsHelper.isReservedWord(node.key.name)) {
                utils.catchup(node.key.range[0], state);
                utils.append('"', state);
                utils.catchup(node.key.range[1], state);
                utils.append('"', state);
            }

            utils.catchup(node.key.range[1], state);
            utils.append(
                ':function' + (isGenerator ? '*' : ''),
                state
            );
            path.unshift(node);
            traverse(node.value, path, state);
            path.shift();
            return false;
        }

        visitObjectConciseMethod.test = function(node, path, state) {
            return node.type === Syntax.Property &&
                node.value.type === Syntax.FunctionExpression &&
                node.method === true;
        };

        exports.visitorList = [
            visitObjectConciseMethod
        ];

    },{"../src/utils":23,"./reserved-words-helper":34,"esprima-fb":9}],29:[function(_dereq_,module,exports){
        /**
         * Copyright 2013 Facebook, Inc.
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         * http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */

        /*jslint node: true*/

        /**
         * Desugars ES6 Object Literal short notations into ES3 full notation.
         *
         * // Easier return values.
         * function foo(x, y) {
         *   return {x, y}; // {x: x, y: y}
         * };
         *
         * // Destructuring.
         * function init({port, ip, coords: {x, y}}) { ... }
         *
         */
        var Syntax = _dereq_('esprima-fb').Syntax;
        var utils = _dereq_('../src/utils');

        /**
         * @public
         */
        function visitObjectLiteralShortNotation(traverse, node, path, state) {
            utils.catchup(node.key.range[1], state);
            utils.append(':' + node.key.name, state);
            return false;
        }

        visitObjectLiteralShortNotation.test = function(node, path, state) {
            return node.type === Syntax.Property &&
                node.kind === 'init' &&
                node.shorthand === true &&
                path[0].type !== Syntax.ObjectPattern;
        };

        exports.visitorList = [
            visitObjectLiteralShortNotation
        ];


    },{"../src/utils":23,"esprima-fb":9}],30:[function(_dereq_,module,exports){
        /**
         * Copyright 2013 Facebook, Inc.
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         * http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */

        /*jslint node:true*/

        /**
         * Desugars ES6 rest parameters into an ES3 arguments array.
         *
         * function printf(template, ...args) {
         *   args.forEach(...);
         * }
         *
         * We could use `Array.prototype.slice.call`, but that usage of arguments causes
         * functions to be deoptimized in V8, so instead we use a for-loop.
         *
         * function printf(template) {
         *   for (var args = [], $__0 = 1, $__1 = arguments.length; $__0 < $__1; $__0++)
         *     args.push(arguments[$__0]);
         *   args.forEach(...);
         * }
         *
         */
        var Syntax = _dereq_('esprima-fb').Syntax;
        var utils = _dereq_('../src/utils');



        function _nodeIsFunctionWithRestParam(node) {
            return (node.type === Syntax.FunctionDeclaration
                    || node.type === Syntax.FunctionExpression
                    || node.type === Syntax.ArrowFunctionExpression)
                && node.rest;
        }

        function visitFunctionParamsWithRestParam(traverse, node, path, state) {
            if (node.parametricType) {
                utils.catchup(node.parametricType.range[0], state);
                path.unshift(node);
                traverse(node.parametricType, path, state);
                path.shift();
            }

            // Render params.
            if (node.params.length) {
                path.unshift(node);
                traverse(node.params, path, state);
                path.shift();
            } else {
                // -3 is for ... of the rest.
                utils.catchup(node.rest.range[0] - 3, state);
            }
            utils.catchupWhiteSpace(node.rest.range[1], state);

            path.unshift(node);
            traverse(node.body, path, state);
            path.shift();

            return false;
        }

        visitFunctionParamsWithRestParam.test = function(node, path, state) {
            return _nodeIsFunctionWithRestParam(node);
        };

        function renderRestParamSetup(functionNode, state) {
            var idx = state.localScope.tempVarIndex++;
            var len = state.localScope.tempVarIndex++;

            return 'for (var ' + functionNode.rest.name + '=[],' +
                utils.getTempVar(idx) + '=' + functionNode.params.length + ',' +
                utils.getTempVar(len) + '=arguments.length;' +
                utils.getTempVar(idx) + '<' +  utils.getTempVar(len) + ';' +
                utils.getTempVar(idx) + '++) ' +
                functionNode.rest.name + '.push(arguments[' + utils.getTempVar(idx) + ']);';
        }

        function visitFunctionBodyWithRestParam(traverse, node, path, state) {
            utils.catchup(node.range[0] + 1, state);
            var parentNode = path[0];
            utils.append(renderRestParamSetup(parentNode, state), state);
            return true;
        }

        visitFunctionBodyWithRestParam.test = function(node, path, state) {
            return node.type === Syntax.BlockStatement
                && _nodeIsFunctionWithRestParam(path[0]);
        };

        exports.renderRestParamSetup = renderRestParamSetup;
        exports.visitorList = [
            visitFunctionParamsWithRestParam,
            visitFunctionBodyWithRestParam
        ];

    },{"../src/utils":23,"esprima-fb":9}],31:[function(_dereq_,module,exports){
        /**
         * Copyright 2013 Facebook, Inc.
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         * http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */

        /*jslint node:true*/

        /**
         * @typechecks
         */
        'use strict';

        var Syntax = _dereq_('esprima-fb').Syntax;
        var utils = _dereq_('../src/utils');

        /**
         * http://people.mozilla.org/~jorendorff/es6-draft.html#sec-12.1.9
         */
        function visitTemplateLiteral(traverse, node, path, state) {
            var templateElements = node.quasis;

            utils.append('(', state);
            for (var ii = 0; ii < templateElements.length; ii++) {
                var templateElement = templateElements[ii];
                if (templateElement.value.raw !== '') {
                    utils.append(getCookedValue(templateElement), state);
                    if (!templateElement.tail) {
                        // + between element and substitution
                        utils.append(' + ', state);
                    }
                    // maintain line numbers
                    utils.move(templateElement.range[0], state);
                    utils.catchupNewlines(templateElement.range[1], state);
                } else {  // templateElement.value.raw === ''
                    // Concatenat adjacent substitutions, e.g. `${x}${y}`. Empty templates
                    // appear before the first and after the last element - nothing to add in
                    // those cases.
                    if (ii > 0 && !templateElement.tail) {
                        // + between substitution and substitution
                        utils.append(' + ', state);
                    }
                }

                utils.move(templateElement.range[1], state);
                if (!templateElement.tail) {
                    var substitution = node.expressions[ii];
                    if (substitution.type === Syntax.Identifier ||
                        substitution.type === Syntax.MemberExpression ||
                        substitution.type === Syntax.CallExpression) {
                        utils.catchup(substitution.range[1], state);
                    } else {
                        utils.append('(', state);
                        traverse(substitution, path, state);
                        utils.catchup(substitution.range[1], state);
                        utils.append(')', state);
                    }
                    // if next templateElement isn't empty...
                    if (templateElements[ii + 1].value.cooked !== '') {
                        utils.append(' + ', state);
                    }
                }
            }
            utils.move(node.range[1], state);
            utils.append(')', state);
            return false;
        }

        visitTemplateLiteral.test = function(node, path, state) {
            return node.type === Syntax.TemplateLiteral;
        };

        /**
         * http://people.mozilla.org/~jorendorff/es6-draft.html#sec-12.2.6
         */
        function visitTaggedTemplateExpression(traverse, node, path, state) {
            var template = node.quasi;
            var numQuasis = template.quasis.length;

            // print the tag
            utils.move(node.tag.range[0], state);
            traverse(node.tag, path, state);
            utils.catchup(node.tag.range[1], state);

            // print array of template elements
            utils.append('(function() { var siteObj = [', state);
            for (var ii = 0; ii < numQuasis; ii++) {
                utils.append(getCookedValue(template.quasis[ii]), state);
                if (ii !== numQuasis - 1) {
                    utils.append(', ', state);
                }
            }
            utils.append(']; siteObj.raw = [', state);
            for (ii = 0; ii < numQuasis; ii++) {
                utils.append(getRawValue(template.quasis[ii]), state);
                if (ii !== numQuasis - 1) {
                    utils.append(', ', state);
                }
            }
            utils.append(
                ']; Object.freeze(siteObj.raw); Object.freeze(siteObj); return siteObj; }()',
                state
            );

            // print substitutions
            if (numQuasis > 1) {
                for (ii = 0; ii < template.expressions.length; ii++) {
                    var expression = template.expressions[ii];
                    utils.append(', ', state);

                    // maintain line numbers by calling catchupWhiteSpace over the whole
                    // previous TemplateElement
                    utils.move(template.quasis[ii].range[0], state);
                    utils.catchupNewlines(template.quasis[ii].range[1], state);

                    utils.move(expression.range[0], state);
                    traverse(expression, path, state);
                    utils.catchup(expression.range[1], state);
                }
            }

            // print blank lines to push the closing ) down to account for the final
            // TemplateElement.
            utils.catchupNewlines(node.range[1], state);

            utils.append(')', state);

            return false;
        }

        visitTaggedTemplateExpression.test = function(node, path, state) {
            return node.type === Syntax.TaggedTemplateExpression;
        };

        function getCookedValue(templateElement) {
            return JSON.stringify(templateElement.value.cooked);
        }

        function getRawValue(templateElement) {
            return JSON.stringify(templateElement.value.raw);
        }

        exports.visitorList = [
            visitTemplateLiteral,
            visitTaggedTemplateExpression
        ];

    },{"../src/utils":23,"esprima-fb":9}],32:[function(_dereq_,module,exports){
        /**
         * Copyright 2013 Facebook, Inc.
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         * http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */

        /*jslint node:true*/

        /**
         * Desugars ES7 rest properties into ES5 object iteration.
         */

        var Syntax = _dereq_('esprima-fb').Syntax;

// TODO: This is a pretty massive helper, it should only be defined once, in the
// transform's runtime environment. We don't currently have a runtime though.
        var restFunction =
            '(function(source, exclusion) {' +
            'var rest = {};' +
            'var hasOwn = Object.prototype.hasOwnProperty;' +
            'if (source == null) {' +
            'throw new TypeError();' +
            '}' +
            'for (var key in source) {' +
            'if (hasOwn.call(source, key) && !hasOwn.call(exclusion, key)) {' +
            'rest[key] = source[key];' +
            '}' +
            '}' +
            'return rest;' +
            '})';

        function getPropertyNames(properties) {
            var names = [];
            for (var i = 0; i < properties.length; i++) {
                var property = properties[i];
                if (property.type === Syntax.SpreadProperty) {
                    continue;
                }
                if (property.type === Syntax.Identifier) {
                    names.push(property.name);
                } else {
                    names.push(property.key.name);
                }
            }
            return names;
        }

        function getRestFunctionCall(source, exclusion) {
            return restFunction + '(' + source + ',' + exclusion + ')';
        }

        function getSimpleShallowCopy(accessorExpression) {
            // This could be faster with 'Object.assign({}, ' + accessorExpression + ')'
            // but to unify code paths and avoid a ES6 dependency we use the same
            // helper as for the exclusion case.
            return getRestFunctionCall(accessorExpression, '{}');
        }

        function renderRestExpression(accessorExpression, excludedProperties) {
            var excludedNames = getPropertyNames(excludedProperties);
            if (!excludedNames.length) {
                return getSimpleShallowCopy(accessorExpression);
            }
            return getRestFunctionCall(
                accessorExpression,
                '{' + excludedNames.join(':1,') + ':1}'
            );
        }

        exports.renderRestExpression = renderRestExpression;

    },{"esprima-fb":9}],33:[function(_dereq_,module,exports){
        /**
         * Copyright 2004-present Facebook. All Rights Reserved.
         */
        /*global exports:true*/

        /**
         * Implements ES7 object spread property.
         * https://gist.github.com/sebmarkbage/aa849c7973cb4452c547
         *
         * { ...a, x: 1 }
         *
         * Object.assign({}, a, {x: 1 })
         *
         */

        var Syntax = _dereq_('esprima-fb').Syntax;
        var utils = _dereq_('../src/utils');

        function visitObjectLiteralSpread(traverse, node, path, state) {
            utils.catchup(node.range[0], state);

            utils.append('Object.assign({', state);

            // Skip the original {
            utils.move(node.range[0] + 1, state);

            var previousWasSpread = false;

            for (var i = 0; i < node.properties.length; i++) {
                var property = node.properties[i];
                if (property.type === Syntax.SpreadProperty) {

                    // Close the previous object or initial object
                    if (!previousWasSpread) {
                        utils.append('}', state);
                    }

                    if (i === 0) {
                        // Normally there will be a comma when we catch up, but not before
                        // the first property.
                        utils.append(',', state);
                    }

                    utils.catchup(property.range[0], state);

                    // skip ...
                    utils.move(property.range[0] + 3, state);

                    traverse(property.argument, path, state);

                    utils.catchup(property.range[1], state);

                    previousWasSpread = true;

                } else {

                    utils.catchup(property.range[0], state);

                    if (previousWasSpread) {
                        utils.append('{', state);
                    }

                    traverse(property, path, state);

                    utils.catchup(property.range[1], state);

                    previousWasSpread = false;

                }
            }

            // Strip any non-whitespace between the last item and the end.
            // We only catch up on whitespace so that we ignore any trailing commas which
            // are stripped out for IE8 support. Unfortunately, this also strips out any
            // trailing comments.
            utils.catchupWhiteSpace(node.range[1] - 1, state);

            // Skip the trailing }
            utils.move(node.range[1], state);

            if (!previousWasSpread) {
                utils.append('}', state);
            }

            utils.append(')', state);
            return false;
        }

        visitObjectLiteralSpread.test = function(node, path, state) {
            if (node.type !== Syntax.ObjectExpression) {
                return false;
            }
            // Tight loop optimization
            var hasAtLeastOneSpreadProperty = false;
            for (var i = 0; i < node.properties.length; i++) {
                var property = node.properties[i];
                if (property.type === Syntax.SpreadProperty) {
                    hasAtLeastOneSpreadProperty = true;
                } else if (property.kind !== 'init') {
                    return false;
                }
            }
            return hasAtLeastOneSpreadProperty;
        };

        exports.visitorList = [
            visitObjectLiteralSpread
        ];

    },{"../src/utils":23,"esprima-fb":9}],34:[function(_dereq_,module,exports){
        /**
         * Copyright 2014 Facebook, Inc.
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         * http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */

        var KEYWORDS = [
            'break', 'do', 'in', 'typeof', 'case', 'else', 'instanceof', 'var', 'catch',
            'export', 'new', 'void', 'class', 'extends', 'return', 'while', 'const',
            'finally', 'super', 'with', 'continue', 'for', 'switch', 'yield', 'debugger',
            'function', 'this', 'default', 'if', 'throw', 'delete', 'import', 'try'
        ];

        var FUTURE_RESERVED_WORDS = [
            'enum', 'await', 'implements', 'package', 'protected', 'static', 'interface',
            'private', 'public'
        ];

        var LITERALS = [
            'null',
            'true',
            'false'
        ];

// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-reserved-words
        var RESERVED_WORDS = [].concat(
            KEYWORDS,
            FUTURE_RESERVED_WORDS,
            LITERALS
        );

        var reservedWordsMap = Object.create(null);
        RESERVED_WORDS.forEach(function(k) {
            reservedWordsMap[k] = true;
        });

        /**
         * This list should not grow as new reserved words are introdued. This list is
         * of words that need to be quoted because ES3-ish browsers do not allow their
         * use as identifier names.
         */
        var ES3_FUTURE_RESERVED_WORDS = [
            'enum', 'implements', 'package', 'protected', 'static', 'interface',
            'private', 'public'
        ];

        var ES3_RESERVED_WORDS = [].concat(
            KEYWORDS,
            ES3_FUTURE_RESERVED_WORDS,
            LITERALS
        );

        var es3ReservedWordsMap = Object.create(null);
        ES3_RESERVED_WORDS.forEach(function(k) {
            es3ReservedWordsMap[k] = true;
        });

        exports.isReservedWord = function(word) {
            return !!reservedWordsMap[word];
        };

        exports.isES3ReservedWord = function(word) {
            return !!es3ReservedWordsMap[word];
        };

    },{}],35:[function(_dereq_,module,exports){
        /**
         * Copyright 2014 Facebook, Inc.
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         * http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         *
         */
        /*global exports:true*/

        var Syntax = _dereq_('esprima-fb').Syntax;
        var utils = _dereq_('../src/utils');
        var reserverdWordsHelper = _dereq_('./reserved-words-helper');

        /**
         * Code adapted from https://github.com/spicyj/es3ify
         * The MIT License (MIT)
         * Copyright (c) 2014 Ben Alpert
         */

        function visitProperty(traverse, node, path, state) {
            utils.catchup(node.key.range[0], state);
            utils.append('"', state);
            utils.catchup(node.key.range[1], state);
            utils.append('"', state);
            utils.catchup(node.value.range[0], state);
            traverse(node.value, path, state);
            return false;
        }

        visitProperty.test = function(node) {
            return node.type === Syntax.Property &&
                node.key.type === Syntax.Identifier &&
                !node.method &&
                !node.shorthand &&
                !node.computed &&
                reserverdWordsHelper.isES3ReservedWord(node.key.name);
        };

        function visitMemberExpression(traverse, node, path, state) {
            traverse(node.object, path, state);
            utils.catchup(node.property.range[0] - 1, state);
            utils.append('[', state);
            utils.catchupWhiteSpace(node.property.range[0], state);
            utils.append('"', state);
            utils.catchup(node.property.range[1], state);
            utils.append('"]', state);
            return false;
        }

        visitMemberExpression.test = function(node) {
            return node.type === Syntax.MemberExpression &&
                node.property.type === Syntax.Identifier &&
                reserverdWordsHelper.isES3ReservedWord(node.property.name);
        };

        exports.visitorList = [
            visitProperty,
            visitMemberExpression
        ];

    },{"../src/utils":23,"./reserved-words-helper":34,"esprima-fb":9}],36:[function(_dereq_,module,exports){
        var esprima = _dereq_('esprima-fb');
        var utils = _dereq_('../src/utils');

        var Syntax = esprima.Syntax;

        function _isFunctionNode(node) {
            return node.type === Syntax.FunctionDeclaration
                || node.type === Syntax.FunctionExpression
                || node.type === Syntax.ArrowFunctionExpression;
        }

        function visitClassProperty(traverse, node, path, state) {
            utils.catchup(node.range[0], state);
            utils.catchupWhiteOut(node.range[1], state);
            return false;
        }
        visitClassProperty.test = function(node, path, state) {
            return node.type === Syntax.ClassProperty;
        };

        function visitTypeAlias(traverse, node, path, state) {
            utils.catchupWhiteOut(node.range[1], state);
            return false;
        }
        visitTypeAlias.test = function(node, path, state) {
            return node.type === Syntax.TypeAlias;
        };

        function visitTypeCast(traverse, node, path, state) {
            path.unshift(node);
            traverse(node.expression, path, state);
            path.shift();

            utils.catchup(node.typeAnnotation.range[0], state);
            utils.catchupWhiteOut(node.typeAnnotation.range[1], state);
            return false;
        }
        visitTypeCast.test = function(node, path, state) {
            return node.type === Syntax.TypeCastExpression;
        };

        function visitInterfaceDeclaration(traverse, node, path, state) {
            utils.catchupWhiteOut(node.range[1], state);
            return false;
        }
        visitInterfaceDeclaration.test = function(node, path, state) {
            return node.type === Syntax.InterfaceDeclaration;
        };

        function visitDeclare(traverse, node, path, state) {
            utils.catchupWhiteOut(node.range[1], state);
            return false;
        }
        visitDeclare.test = function(node, path, state) {
            switch (node.type) {
                case Syntax.DeclareVariable:
                case Syntax.DeclareFunction:
                case Syntax.DeclareClass:
                case Syntax.DeclareModule:
                    return true;
            }
            return false;
        };

        function visitFunctionParametricAnnotation(traverse, node, path, state) {
            utils.catchup(node.range[0], state);
            utils.catchupWhiteOut(node.range[1], state);
            return false;
        }
        visitFunctionParametricAnnotation.test = function(node, path, state) {
            return node.type === Syntax.TypeParameterDeclaration
                && path[0]
                && _isFunctionNode(path[0])
                && node === path[0].typeParameters;
        };

        function visitFunctionReturnAnnotation(traverse, node, path, state) {
            utils.catchup(node.range[0], state);
            utils.catchupWhiteOut(node.range[1], state);
            return false;
        }
        visitFunctionReturnAnnotation.test = function(node, path, state) {
            return path[0] && _isFunctionNode(path[0]) && node === path[0].returnType;
        };

        function visitOptionalFunctionParameterAnnotation(traverse, node, path, state) {
            utils.catchup(node.range[0] + node.name.length, state);
            utils.catchupWhiteOut(node.range[1], state);
            return false;
        }
        visitOptionalFunctionParameterAnnotation.test = function(node, path, state) {
            return node.type === Syntax.Identifier
                && node.optional
                && path[0]
                && _isFunctionNode(path[0]);
        };

        function visitTypeAnnotatedIdentifier(traverse, node, path, state) {
            utils.catchup(node.typeAnnotation.range[0], state);
            utils.catchupWhiteOut(node.typeAnnotation.range[1], state);
            return false;
        }
        visitTypeAnnotatedIdentifier.test = function(node, path, state) {
            return node.type === Syntax.Identifier && node.typeAnnotation;
        };

        function visitTypeAnnotatedObjectOrArrayPattern(traverse, node, path, state) {
            utils.catchup(node.typeAnnotation.range[0], state);
            utils.catchupWhiteOut(node.typeAnnotation.range[1], state);
            return false;
        }
        visitTypeAnnotatedObjectOrArrayPattern.test = function(node, path, state) {
            var rightType = node.type === Syntax.ObjectPattern
                || node.type === Syntax.ArrayPattern;
            return rightType && node.typeAnnotation;
        };

        /**
         * Methods cause trouble, since esprima parses them as a key/value pair, where
         * the location of the value starts at the method body. For example
         * { bar(x:number,...y:Array<number>):number {} }
         * is parsed as
         * { bar: function(x: number, ...y:Array<number>): number {} }
         * except that the location of the FunctionExpression value is 40-something,
         * which is the location of the function body. This means that by the time we
         * visit the params, rest param, and return type organically, we've already
         * catchup()'d passed them.
         */
        function visitMethod(traverse, node, path, state) {
            path.unshift(node);
            traverse(node.key, path, state);

            path.unshift(node.value);
            traverse(node.value.params, path, state);
            node.value.rest && traverse(node.value.rest, path, state);
            node.value.returnType && traverse(node.value.returnType, path, state);
            traverse(node.value.body, path, state);

            path.shift();

            path.shift();
            return false;
        }

        visitMethod.test = function(node, path, state) {
            return (node.type === "Property" && (node.method || node.kind === "set" || node.kind === "get"))
                || (node.type === "MethodDefinition");
        };

        function visitImportType(traverse, node, path, state) {
            utils.catchupWhiteOut(node.range[1], state);
            return false;
        }
        visitImportType.test = function(node, path, state) {
            return node.type === 'ImportDeclaration'
                && node.isType;
        };

        exports.visitorList = [
            visitClassProperty,
            visitDeclare,
            visitImportType,
            visitInterfaceDeclaration,
            visitFunctionParametricAnnotation,
            visitFunctionReturnAnnotation,
            visitMethod,
            visitOptionalFunctionParameterAnnotation,
            visitTypeAlias,
            visitTypeCast,
            visitTypeAnnotatedIdentifier,
            visitTypeAnnotatedObjectOrArrayPattern
        ];

    },{"../src/utils":23,"esprima-fb":9}],37:[function(_dereq_,module,exports){
        /**
         * Copyright 2013-2015, Facebook, Inc.
         * All rights reserved.
         *
         * This source code is licensed under the BSD-style license found in the
         * LICENSE file in the root directory of this source tree. An additional grant
         * of patent rights can be found in the PATENTS file in the same directory.
         */
        /*global exports:true*/
        'use strict';
        var Syntax = _dereq_('jstransform').Syntax;
        var utils = _dereq_('jstransform/src/utils');

        function renderJSXLiteral(object, isLast, state, start, end) {
            var lines = object.value.split(/\r\n|\n|\r/);

            if (start) {
                utils.append(start, state);
            }

            var lastNonEmptyLine = 0;

            lines.forEach(function(line, index) {
                if (line.match(/[^ \t]/)) {
                    lastNonEmptyLine = index;
                }
            });

            lines.forEach(function(line, index) {
                var isFirstLine = index === 0;
                var isLastLine = index === lines.length - 1;
                var isLastNonEmptyLine = index === lastNonEmptyLine;

                // replace rendered whitespace tabs with spaces
                var trimmedLine = line.replace(/\t/g, ' ');

                // trim whitespace touching a newline
                if (!isFirstLine) {
                    trimmedLine = trimmedLine.replace(/^[ ]+/, '');
                }
                if (!isLastLine) {
                    trimmedLine = trimmedLine.replace(/[ ]+$/, '');
                }

                if (!isFirstLine) {
                    utils.append(line.match(/^[ \t]*/)[0], state);
                }

                if (trimmedLine || isLastNonEmptyLine) {
                    utils.append(
                        JSON.stringify(trimmedLine) +
                        (!isLastNonEmptyLine ? ' + \' \' +' : ''),
                        state);

                    if (isLastNonEmptyLine) {
                        if (end) {
                            utils.append(end, state);
                        }
                        if (!isLast) {
                            utils.append(', ', state);
                        }
                    }

                    // only restore tail whitespace if line had literals
                    if (trimmedLine && !isLastLine) {
                        utils.append(line.match(/[ \t]*$/)[0], state);
                    }
                }

                if (!isLastLine) {
                    utils.append('\n', state);
                }
            });

            utils.move(object.range[1], state);
        }

        function renderJSXExpressionContainer(traverse, object, isLast, path, state) {
            // Plus 1 to skip `{`.
            utils.move(object.range[0] + 1, state);
            utils.catchup(object.expression.range[0], state);
            traverse(object.expression, path, state);

            if (!isLast && object.expression.type !== Syntax.JSXEmptyExpression) {
                // If we need to append a comma, make sure to do so after the expression.
                utils.catchup(object.expression.range[1], state, trimLeft);
                utils.append(', ', state);
            }

            // Minus 1 to skip `}`.
            utils.catchup(object.range[1] - 1, state, trimLeft);
            utils.move(object.range[1], state);
            return false;
        }

        function quoteAttrName(attr) {
            // Quote invalid JS identifiers.
            if (!/^[a-z_$][a-z\d_$]*$/i.test(attr)) {
                return '"' + attr + '"';
            }
            return attr;
        }

        function trimLeft(value) {
            return value.replace(/^[ ]+/, '');
        }

        exports.renderJSXExpressionContainer = renderJSXExpressionContainer;
        exports.renderJSXLiteral = renderJSXLiteral;
        exports.quoteAttrName = quoteAttrName;
        exports.trimLeft = trimLeft;

    },{"jstransform":22,"jstransform/src/utils":23}],38:[function(_dereq_,module,exports){
        /**
         * Copyright 2013-2015, Facebook, Inc.
         * All rights reserved.
         *
         * This source code is licensed under the BSD-style license found in the
         * LICENSE file in the root directory of this source tree. An additional grant
         * of patent rights can be found in the PATENTS file in the same directory.
         */
        /*global exports:true*/
        'use strict';

        var Syntax = _dereq_('jstransform').Syntax;
        var utils = _dereq_('jstransform/src/utils');

        var renderJSXExpressionContainer =
            _dereq_('./jsx').renderJSXExpressionContainer;
        var renderJSXLiteral = _dereq_('./jsx').renderJSXLiteral;
        var quoteAttrName = _dereq_('./jsx').quoteAttrName;

        var trimLeft = _dereq_('./jsx').trimLeft;

        /**
         * Customized desugar processor for React JSX. Currently:
         *
         * <X> </X> => React.createElement(X, null)
         * <X prop="1" /> => React.createElement(X, {prop: '1'}, null)
         * <X prop="2"><Y /></X> => React.createElement(X, {prop:'2'},
         *   React.createElement(Y, null)
         * )
         * <div /> => React.createElement("div", null)
         */

        /**
         * Removes all non-whitespace/parenthesis characters
         */
        var reNonWhiteParen = /([^\s\(\)])/g;
        function stripNonWhiteParen(value) {
            return value.replace(reNonWhiteParen, '');
        }

        var tagConvention = /^[a-z]|\-/;
        function isTagName(name) {
            return tagConvention.test(name);
        }

        function visitReactTag(traverse, object, path, state) {
            var openingElement = object.openingElement;
            var nameObject = openingElement.name;
            var attributesObject = openingElement.attributes;

            utils.catchup(openingElement.range[0], state, trimLeft);

            if (nameObject.type === Syntax.JSXNamespacedName && nameObject.namespace) {
                throw new Error('Namespace tags are not supported. ReactJSX is not XML.');
            }

            // We assume that the React runtime is already in scope
            utils.append('React.createElement(', state);

            if (nameObject.type === Syntax.JSXIdentifier && isTagName(nameObject.name)) {
                utils.append('"' + nameObject.name + '"', state);
                utils.move(nameObject.range[1], state);
            } else {
                // Use utils.catchup in this case so we can easily handle
                // JSXMemberExpressions which look like Foo.Bar.Baz. This also handles
                // JSXIdentifiers that aren't fallback tags.
                utils.move(nameObject.range[0], state);
                utils.catchup(nameObject.range[1], state);
            }

            utils.append(', ', state);

            var hasAttributes = attributesObject.length;

            var hasAtLeastOneSpreadProperty = attributesObject.some(function(attr) {
                return attr.type === Syntax.JSXSpreadAttribute;
            });

            // if we don't have any attributes, pass in null
            if (hasAtLeastOneSpreadProperty) {
                utils.append('React.__spread({', state);
            } else if (hasAttributes) {
                utils.append('{', state);
            } else {
                utils.append('null', state);
            }

            // keep track of if the previous attribute was a spread attribute
            var previousWasSpread = false;

            // write attributes
            attributesObject.forEach(function(attr, index) {
                var isLast = index === attributesObject.length - 1;

                if (attr.type === Syntax.JSXSpreadAttribute) {
                    // Close the previous object or initial object
                    if (!previousWasSpread) {
                        utils.append('}, ', state);
                    }

                    // Move to the expression start, ignoring everything except parenthesis
                    // and whitespace.
                    utils.catchup(attr.range[0], state, stripNonWhiteParen);
                    // Plus 1 to skip `{`.
                    utils.move(attr.range[0] + 1, state);
                    utils.catchup(attr.argument.range[0], state, stripNonWhiteParen);

                    traverse(attr.argument, path, state);

                    utils.catchup(attr.argument.range[1], state);

                    // Move to the end, ignoring parenthesis and the closing `}`
                    utils.catchup(attr.range[1] - 1, state, stripNonWhiteParen);

                    if (!isLast) {
                        utils.append(', ', state);
                    }

                    utils.move(attr.range[1], state);

                    previousWasSpread = true;

                    return;
                }

                // If the next attribute is a spread, we're effective last in this object
                if (!isLast) {
                    isLast = attributesObject[index + 1].type === Syntax.JSXSpreadAttribute;
                }

                if (attr.name.namespace) {
                    throw new Error(
                        'Namespace attributes are not supported. ReactJSX is not XML.');
                }
                var name = attr.name.name;

                utils.catchup(attr.range[0], state, trimLeft);

                if (previousWasSpread) {
                    utils.append('{', state);
                }

                utils.append(quoteAttrName(name), state);
                utils.append(': ', state);

                if (!attr.value) {
                    state.g.buffer += 'true';
                    state.g.position = attr.name.range[1];
                    if (!isLast) {
                        utils.append(', ', state);
                    }
                } else {
                    utils.move(attr.name.range[1], state);
                    // Use catchupNewlines to skip over the '=' in the attribute
                    utils.catchupNewlines(attr.value.range[0], state);
                    if (attr.value.type === Syntax.Literal) {
                        renderJSXLiteral(attr.value, isLast, state);
                    } else {
                        renderJSXExpressionContainer(traverse, attr.value, isLast, path, state);
                    }
                }

                utils.catchup(attr.range[1], state, trimLeft);

                previousWasSpread = false;

            });

            if (!openingElement.selfClosing) {
                utils.catchup(openingElement.range[1] - 1, state, trimLeft);
                utils.move(openingElement.range[1], state);
            }

            if (hasAttributes && !previousWasSpread) {
                utils.append('}', state);
            }

            if (hasAtLeastOneSpreadProperty) {
                utils.append(')', state);
            }

            // filter out whitespace
            var childrenToRender = object.children.filter(function(child) {
                return !(child.type === Syntax.Literal
                    && typeof child.value === 'string'
                    && child.value.match(/^[ \t]*[\r\n][ \t\r\n]*$/));
            });
            if (childrenToRender.length > 0) {
                var lastRenderableIndex;

                childrenToRender.forEach(function(child, index) {
                    if (child.type !== Syntax.JSXExpressionContainer ||
                        child.expression.type !== Syntax.JSXEmptyExpression) {
                        lastRenderableIndex = index;
                    }
                });

                if (lastRenderableIndex !== undefined) {
                    utils.append(', ', state);
                }

                childrenToRender.forEach(function(child, index) {
                    utils.catchup(child.range[0], state, trimLeft);

                    var isLast = index >= lastRenderableIndex;

                    if (child.type === Syntax.Literal) {
                        renderJSXLiteral(child, isLast, state);
                    } else if (child.type === Syntax.JSXExpressionContainer) {
                        renderJSXExpressionContainer(traverse, child, isLast, path, state);
                    } else {
                        traverse(child, path, state);
                        if (!isLast) {
                            utils.append(', ', state);
                        }
                    }

                    utils.catchup(child.range[1], state, trimLeft);
                });
            }

            if (openingElement.selfClosing) {
                // everything up to />
                utils.catchup(openingElement.range[1] - 2, state, trimLeft);
                utils.move(openingElement.range[1], state);
            } else {
                // everything up to </ sdflksjfd>
                utils.catchup(object.closingElement.range[0], state, trimLeft);
                utils.move(object.closingElement.range[1], state);
            }

            utils.append(')', state);
            return false;
        }

        visitReactTag.test = function(object, path, state) {
            return object.type === Syntax.JSXElement;
        };

        exports.visitorList = [
            visitReactTag
        ];

    },{"./jsx":37,"jstransform":22,"jstransform/src/utils":23}],39:[function(_dereq_,module,exports){
        /**
         * Copyright 2013-2015, Facebook, Inc.
         * All rights reserved.
         *
         * This source code is licensed under the BSD-style license found in the
         * LICENSE file in the root directory of this source tree. An additional grant
         * of patent rights can be found in the PATENTS file in the same directory.
         */
        /*global exports:true*/
        'use strict';

        var Syntax = _dereq_('jstransform').Syntax;
        var utils = _dereq_('jstransform/src/utils');

        function addDisplayName(displayName, object, state) {
            if (object &&
                object.type === Syntax.CallExpression &&
                object.callee.type === Syntax.MemberExpression &&
                object.callee.object.type === Syntax.Identifier &&
                object.callee.object.name === 'React' &&
                object.callee.property.type === Syntax.Identifier &&
                object.callee.property.name === 'createClass' &&
                object.arguments.length === 1 &&
                object.arguments[0].type === Syntax.ObjectExpression) {
                // Verify that the displayName property isn't already set
                var properties = object.arguments[0].properties;
                var safe = properties.every(function(property) {
                    var value = property.key.type === Syntax.Identifier ?
                        property.key.name :
                        property.key.value;
                    return value !== 'displayName';
                });

                if (safe) {
                    utils.catchup(object.arguments[0].range[0] + 1, state);
                    utils.append('displayName: "' + displayName + '",', state);
                }
            }
        }

        /**
         * Transforms the following:
         *
         * var MyComponent = React.createClass({
         *    render: ...
         * });
         *
         * into:
         *
         * var MyComponent = React.createClass({
         *    displayName: 'MyComponent',
         *    render: ...
         * });
         *
         * Also catches:
         *
         * MyComponent = React.createClass(...);
         * exports.MyComponent = React.createClass(...);
         * module.exports = {MyComponent: React.createClass(...)};
         */
        function visitReactDisplayName(traverse, object, path, state) {
            var left, right;

            if (object.type === Syntax.AssignmentExpression) {
                left = object.left;
                right = object.right;
            } else if (object.type === Syntax.Property) {
                left = object.key;
                right = object.value;
            } else if (object.type === Syntax.VariableDeclarator) {
                left = object.id;
                right = object.init;
            }

            if (left && left.type === Syntax.MemberExpression) {
                left = left.property;
            }
            if (left && left.type === Syntax.Identifier) {
                addDisplayName(left.name, right, state);
            }
        }

        visitReactDisplayName.test = function(object, path, state) {
            return (
                object.type === Syntax.AssignmentExpression ||
                object.type === Syntax.Property ||
                object.type === Syntax.VariableDeclarator
            );
        };

        exports.visitorList = [
            visitReactDisplayName
        ];

    },{"jstransform":22,"jstransform/src/utils":23}],40:[function(_dereq_,module,exports){
        /*global exports:true*/

        'use strict';

        var es6ArrowFunctions =
            _dereq_('jstransform/visitors/es6-arrow-function-visitors');
        var es6Classes = _dereq_('jstransform/visitors/es6-class-visitors');
        var es6Destructuring =
            _dereq_('jstransform/visitors/es6-destructuring-visitors');
        var es6ObjectConciseMethod =
            _dereq_('jstransform/visitors/es6-object-concise-method-visitors');
        var es6ObjectShortNotation =
            _dereq_('jstransform/visitors/es6-object-short-notation-visitors');
        var es6RestParameters = _dereq_('jstransform/visitors/es6-rest-param-visitors');
        var es6Templates = _dereq_('jstransform/visitors/es6-template-visitors');
        var es6CallSpread =
            _dereq_('jstransform/visitors/es6-call-spread-visitors');
        var es7SpreadProperty =
            _dereq_('jstransform/visitors/es7-spread-property-visitors');
        var react = _dereq_('./transforms/react');
        var reactDisplayName = _dereq_('./transforms/reactDisplayName');
        var reservedWords = _dereq_('jstransform/visitors/reserved-words-visitors');

        /**
         * Map from transformName => orderedListOfVisitors.
         */
        var transformVisitors = {
            'es6-arrow-functions': es6ArrowFunctions.visitorList,
            'es6-classes': es6Classes.visitorList,
            'es6-destructuring': es6Destructuring.visitorList,
            'es6-object-concise-method': es6ObjectConciseMethod.visitorList,
            'es6-object-short-notation': es6ObjectShortNotation.visitorList,
            'es6-rest-params': es6RestParameters.visitorList,
            'es6-templates': es6Templates.visitorList,
            'es6-call-spread': es6CallSpread.visitorList,
            'es7-spread-property': es7SpreadProperty.visitorList,
            'react': react.visitorList.concat(reactDisplayName.visitorList),
            'reserved-words': reservedWords.visitorList
        };

        var transformSets = {
            'harmony': [
                'es6-arrow-functions',
                'es6-object-concise-method',
                'es6-object-short-notation',
                'es6-classes',
                'es6-rest-params',
                'es6-templates',
                'es6-destructuring',
                'es6-call-spread',
                'es7-spread-property'
            ],
            'es3': [
                'reserved-words'
            ],
            'react': [
                'react'
            ]
        };

        /**
         * Specifies the order in which each transform should run.
         */
        var transformRunOrder = [
            'reserved-words',
            'es6-arrow-functions',
            'es6-object-concise-method',
            'es6-object-short-notation',
            'es6-classes',
            'es6-rest-params',
            'es6-templates',
            'es6-destructuring',
            'es6-call-spread',
            'es7-spread-property',
            'react'
        ];

        /**
         * Given a list of transform names, return the ordered list of visitors to be
         * passed to the transform() function.
         *
         * @param {array?} excludes
         * @return {array}
         */
        function getAllVisitors(excludes) {
            var ret = [];
            for (var i = 0, il = transformRunOrder.length; i < il; i++) {
                if (!excludes || excludes.indexOf(transformRunOrder[i]) === -1) {
                    ret = ret.concat(transformVisitors[transformRunOrder[i]]);
                }
            }
            return ret;
        }

        /**
         * Given a list of visitor set names, return the ordered list of visitors to be
         * passed to jstransform.
         *
         * @param {array}
         * @return {array}
         */
        function getVisitorsBySet(sets) {
            var visitorsToInclude = sets.reduce(function(visitors, set) {
                if (!transformSets.hasOwnProperty(set)) {
                    throw new Error('Unknown visitor set: ' + set);
                }
                transformSets[set].forEach(function(visitor) {
                    visitors[visitor] = true;
                });
                return visitors;
            }, {});

            var visitorList = [];
            for (var i = 0; i < transformRunOrder.length; i++) {
                if (visitorsToInclude.hasOwnProperty(transformRunOrder[i])) {
                    visitorList = visitorList.concat(transformVisitors[transformRunOrder[i]]);
                }
            }

            return visitorList;
        }

        exports.getVisitorsBySet = getVisitorsBySet;
        exports.getAllVisitors = getAllVisitors;
        exports.transformVisitors = transformVisitors;

    },{"./transforms/react":38,"./transforms/reactDisplayName":39,"jstransform/visitors/es6-arrow-function-visitors":24,"jstransform/visitors/es6-call-spread-visitors":25,"jstransform/visitors/es6-class-visitors":26,"jstransform/visitors/es6-destructuring-visitors":27,"jstransform/visitors/es6-object-concise-method-visitors":28,"jstransform/visitors/es6-object-short-notation-visitors":29,"jstransform/visitors/es6-rest-param-visitors":30,"jstransform/visitors/es6-template-visitors":31,"jstransform/visitors/es7-spread-property-visitors":33,"jstransform/visitors/reserved-words-visitors":35}],41:[function(_dereq_,module,exports){
        /**
         * Copyright 2013-2015, Facebook, Inc.
         * All rights reserved.
         *
         * This source code is licensed under the BSD-style license found in the
         * LICENSE file in the root directory of this source tree. An additional grant
         * of patent rights can be found in the PATENTS file in the same directory.
         */

        'use strict';
        /*eslint-disable no-undef*/
        var Buffer = _dereq_('buffer').Buffer;

        function inlineSourceMap(sourceMap, sourceCode, sourceFilename) {
            // This can be used with a sourcemap that has already has toJSON called on it.
            // Check first.
            var json = sourceMap;
            if (typeof sourceMap.toJSON === 'function') {
                json = sourceMap.toJSON();
            }
            json.sources = [sourceFilename];
            json.sourcesContent = [sourceCode];
            var base64 = Buffer(JSON.stringify(json)).toString('base64');
            return '//# sourceMappingURL=data:application/json;base64,' + base64;
        }

        module.exports = inlineSourceMap;

    },{"buffer":3}]},{},[1])(1)
});