!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const r=(e,t)=>{const n=document.querySelector("#sidebar"),r=document.createElement("section");r.dataset.index=t,r.classList.add("project-sidebar");const a=document.createElement("h3");a.dataset.index=t,a.innerHTML=e,r.appendChild(a),n.appendChild(r)},a=(e,t,n)=>{document.querySelector("#project-full")&&e.removeChild(document.querySelector("#project-full"));const r=document.createElement("section");r.id="project-full",r.dataset.index=n;const a=document.createElement("div");a.id="project-top-row";const i=document.createElement("h2");i.innerHTML=t,a.appendChild(i);const o=document.createElement("button");o.id="edit-project",o.setAttribute("title","Edit Project"),o.innerHTML="✎",a.appendChild(o);const d=document.createElement("button");d.id="delete-project",d.setAttribute("title","Delete Project"),d.innerHTML="X",a.appendChild(d),r.appendChild(a);const u=document.createElement("secton");u.id="todos-list",r.appendChild(u);const s=document.createElement("button");s.innerHTML="New ToDo",s.id="new-to-do",r.appendChild(s),e.appendChild(r)};(()=>{const e=document.querySelector("#content"),t=document.createElement("section");t.id="sidebar";const n=document.createElement("h2");n.innerHTML="Projects";const r=document.createElement("button");r.innerHTML="New Project",r.id="new-project",t.appendChild(n),t.appendChild(r),e.appendChild(t)})();function i(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function o(e){i(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function d(e){i(1,arguments);var t=o(e);return!isNaN(t)}var u={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function s(e){return function(t){var n=t||{},r=n.width?String(n.width):e.defaultWidth;return e.formats[r]||e.formats[e.defaultWidth]}}var c={date:s({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:s({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:s({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},l={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function m(e){return function(t,n){var r,a=n||{};if("formatting"===(a.context?String(a.context):"standalone")&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,o=a.width?String(a.width):i;r=e.formattingValues[o]||e.formattingValues[i]}else{var d=e.defaultWidth,u=a.width?String(a.width):e.defaultWidth;r=e.values[u]||e.values[d]}return r[e.argumentCallback?e.argumentCallback(t):t]}}function h(e){return function(t,n){var r=String(t),a=n||{},i=a.width,o=i&&e.matchPatterns[i]||e.matchPatterns[e.defaultMatchWidth],d=r.match(o);if(!d)return null;var u,s=d[0],c=i&&e.parsePatterns[i]||e.parsePatterns[e.defaultParseWidth];return u="[object Array]"===Object.prototype.toString.call(c)?function(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return n}(c,(function(e){return e.test(s)})):function(e,t){for(var n in e)if(e.hasOwnProperty(n)&&t(e[n]))return n}(c,(function(e){return e.test(s)})),u=e.valueCallback?e.valueCallback(u):u,{value:u=a.valueCallback?a.valueCallback(u):u,rest:r.slice(s.length)}}}var f,p={code:"en-US",formatDistance:function(e,t,n){var r;return n=n||{},r="string"==typeof u[e]?u[e]:1===t?u[e].one:u[e].other.replace("{{count}}",t),n.addSuffix?n.comparison>0?"in "+r:r+" ago":r},formatLong:c,formatRelative:function(e,t,n,r){return l[e]},localize:{ordinalNumber:function(e,t){var n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:m({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:m({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:m({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:m({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:m({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(f={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e,t){var n=String(e),r=t||{},a=n.match(f.matchPattern);if(!a)return null;var i=a[0],o=n.match(f.parsePattern);if(!o)return null;var d=f.valueCallback?f.valueCallback(o[0]):o[0];return{value:d=r.valueCallback?r.valueCallback(d):d,rest:n.slice(i.length)}}),era:h({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:h({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:h({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:h({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:h({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function g(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function b(e,t){i(2,arguments);var n=o(e).getTime(),r=g(t);return new Date(n+r)}function y(e,t){i(2,arguments);var n=g(t);return b(e,-n)}function w(e,t){for(var n=e<0?"-":"",r=Math.abs(e).toString();r.length<t;)r="0"+r;return n+r}var v={y:function(e,t){var n=e.getUTCFullYear(),r=n>0?n:1-n;return w("yy"===t?r%100:r,t.length)},M:function(e,t){var n=e.getUTCMonth();return"M"===t?String(n+1):w(n+1,2)},d:function(e,t){return w(e.getUTCDate(),t.length)},a:function(e,t){var n=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":case"aaa":return n.toUpperCase();case"aaaaa":return n[0];case"aaaa":default:return"am"===n?"a.m.":"p.m."}},h:function(e,t){return w(e.getUTCHours()%12||12,t.length)},H:function(e,t){return w(e.getUTCHours(),t.length)},m:function(e,t){return w(e.getUTCMinutes(),t.length)},s:function(e,t){return w(e.getUTCSeconds(),t.length)},S:function(e,t){var n=t.length,r=e.getUTCMilliseconds();return w(Math.floor(r*Math.pow(10,n-3)),t.length)}};function T(e){i(1,arguments);var t=1,n=o(e),r=n.getUTCDay(),a=(r<t?7:0)+r-t;return n.setUTCDate(n.getUTCDate()-a),n.setUTCHours(0,0,0,0),n}function C(e){i(1,arguments);var t=o(e),n=t.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var a=T(r),d=new Date(0);d.setUTCFullYear(n,0,4),d.setUTCHours(0,0,0,0);var u=T(d);return t.getTime()>=a.getTime()?n+1:t.getTime()>=u.getTime()?n:n-1}function M(e){i(1,arguments);var t=C(e),n=new Date(0);n.setUTCFullYear(t,0,4),n.setUTCHours(0,0,0,0);var r=T(n);return r}function x(e,t){i(1,arguments);var n=t||{},r=n.locale,a=r&&r.options&&r.options.weekStartsOn,d=null==a?0:g(a),u=null==n.weekStartsOn?d:g(n.weekStartsOn);if(!(u>=0&&u<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var s=o(e),c=s.getUTCDay(),l=(c<u?7:0)+c-u;return s.setUTCDate(s.getUTCDate()-l),s.setUTCHours(0,0,0,0),s}function E(e,t){i(1,arguments);var n=o(e,t),r=n.getUTCFullYear(),a=t||{},d=a.locale,u=d&&d.options&&d.options.firstWeekContainsDate,s=null==u?1:g(u),c=null==a.firstWeekContainsDate?s:g(a.firstWeekContainsDate);if(!(c>=1&&c<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var l=new Date(0);l.setUTCFullYear(r+1,0,c),l.setUTCHours(0,0,0,0);var m=x(l,t),h=new Date(0);h.setUTCFullYear(r,0,c),h.setUTCHours(0,0,0,0);var f=x(h,t);return n.getTime()>=m.getTime()?r+1:n.getTime()>=f.getTime()?r:r-1}function S(e,t){i(1,arguments);var n=t||{},r=n.locale,a=r&&r.options&&r.options.firstWeekContainsDate,o=null==a?1:g(a),d=null==n.firstWeekContainsDate?o:g(n.firstWeekContainsDate),u=E(e,t),s=new Date(0);s.setUTCFullYear(u,0,d),s.setUTCHours(0,0,0,0);var c=x(s,t);return c}var L="midnight",D="noon",A="morning",P="afternoon",j="evening",q="night";function k(e,t){var n=e>0?"-":"+",r=Math.abs(e),a=Math.floor(r/60),i=r%60;if(0===i)return n+String(a);var o=t||"";return n+String(a)+o+w(i,2)}function H(e,t){return e%60==0?(e>0?"-":"+")+w(Math.abs(e)/60,2):U(e,t)}function U(e,t){var n=t||"",r=e>0?"-":"+",a=Math.abs(e);return r+w(Math.floor(a/60),2)+n+w(a%60,2)}var O={G:function(e,t,n){var r=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if("yo"===t){var r=e.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return v.y(e,t)},Y:function(e,t,n,r){var a=E(e,r),i=a>0?a:1-a;return"YY"===t?w(i%100,2):"Yo"===t?n.ordinalNumber(i,{unit:"year"}):w(i,t.length)},R:function(e,t){return w(C(e),t.length)},u:function(e,t){return w(e.getUTCFullYear(),t.length)},Q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return w(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return w(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){var r=e.getUTCMonth();switch(t){case"M":case"MM":return v.M(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){var r=e.getUTCMonth();switch(t){case"L":return String(r+1);case"LL":return w(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,r){var a=function(e,t){i(1,arguments);var n=o(e),r=x(n,t).getTime()-S(n,t).getTime();return Math.round(r/6048e5)+1}(e,r);return"wo"===t?n.ordinalNumber(a,{unit:"week"}):w(a,t.length)},I:function(e,t,n){var r=function(e){i(1,arguments);var t=o(e),n=T(t).getTime()-M(t).getTime();return Math.round(n/6048e5)+1}(e);return"Io"===t?n.ordinalNumber(r,{unit:"week"}):w(r,t.length)},d:function(e,t,n){return"do"===t?n.ordinalNumber(e.getUTCDate(),{unit:"date"}):v.d(e,t)},D:function(e,t,n){var r=function(e){i(1,arguments);var t=o(e),n=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var r=t.getTime(),a=n-r;return Math.floor(a/864e5)+1}(e);return"Do"===t?n.ordinalNumber(r,{unit:"dayOfYear"}):w(r,t.length)},E:function(e,t,n){var r=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){var a=e.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(i);case"ee":return w(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});case"eeee":default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){var a=e.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(i);case"cc":return w(i,t.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});case"cccc":default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(e,t,n){var r=e.getUTCDay(),a=0===r?7:r;switch(t){case"i":return String(a);case"ii":return w(a,t.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){var r=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(e,t,n){var r,a=e.getUTCHours();switch(r=12===a?D:0===a?L:a/12>=1?"pm":"am",t){case"b":case"bb":case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(e,t,n){var r,a=e.getUTCHours();switch(r=a>=17?j:a>=12?P:a>=4?A:q,t){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(e,t,n){if("ho"===t){var r=e.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return v.h(e,t)},H:function(e,t,n){return"Ho"===t?n.ordinalNumber(e.getUTCHours(),{unit:"hour"}):v.H(e,t)},K:function(e,t,n){var r=e.getUTCHours()%12;return"Ko"===t?n.ordinalNumber(r,{unit:"hour"}):w(r,t.length)},k:function(e,t,n){var r=e.getUTCHours();return 0===r&&(r=24),"ko"===t?n.ordinalNumber(r,{unit:"hour"}):w(r,t.length)},m:function(e,t,n){return"mo"===t?n.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):v.m(e,t)},s:function(e,t,n){return"so"===t?n.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):v.s(e,t)},S:function(e,t){return v.S(e,t)},X:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();if(0===a)return"Z";switch(t){case"X":return H(a);case"XXXX":case"XX":return U(a);case"XXXXX":case"XXX":default:return U(a,":")}},x:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"x":return H(a);case"xxxx":case"xx":return U(a);case"xxxxx":case"xxx":default:return U(a,":")}},O:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+k(a,":");case"OOOO":default:return"GMT"+U(a,":")}},z:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+k(a,":");case"zzzz":default:return"GMT"+U(a,":")}},t:function(e,t,n,r){var a=r._originalDate||e;return w(Math.floor(a.getTime()/1e3),t.length)},T:function(e,t,n,r){return w((r._originalDate||e).getTime(),t.length)}};function N(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}}function W(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}}var Y={p:W,P:function(e,t){var n,r=e.match(/(P+)(p+)?/),a=r[1],i=r[2];if(!i)return N(e,t);switch(a){case"P":n=t.dateTime({width:"short"});break;case"PP":n=t.dateTime({width:"medium"});break;case"PPP":n=t.dateTime({width:"long"});break;case"PPPP":default:n=t.dateTime({width:"full"})}return n.replace("{{date}}",N(a,t)).replace("{{time}}",W(i,t))}};function z(e){return e.getTime()%6e4}function I(e){var t=new Date(e.getTime()),n=Math.ceil(t.getTimezoneOffset());return t.setSeconds(0,0),6e4*n+(n>0?(6e4+z(t))%6e4:z(t))}var X=["D","DD"],Q=["YY","YYYY"];function B(e){return-1!==X.indexOf(e)}function F(e){return-1!==Q.indexOf(e)}function _(e,t,n){if("YYYY"===e)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("YY"===e)throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("D"===e)throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("DD"===e)throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"))}var G=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,R=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,J=/^'([^]*?)'?$/,$=/''/g,V=/[a-zA-Z]/;function K(e){return e.match(J)[1].replace($,"'")}const Z=(e,t)=>{const n=document.createElement("form"),r=document.createElement("h3");r.innerHTML=t+" Todo",n.appendChild(r);const a=document.createElement("label");a.setAttribute("for","todo-title"),a.innerHTML="ToDo Title",n.appendChild(a);const i=document.createElement("input");i.setAttribute("name","todo-title"),i.setAttribute("type","text"),i.setAttribute("placeholder","ToDo Title"),n.appendChild(i);const o=document.createElement("label");o.setAttribute("for","description"),o.innerHTML="ToDo Description",n.appendChild(o);const d=document.createElement("input");d.setAttribute("name","description"),d.setAttribute("type","text"),d.setAttribute("placeholder","ToDo Description"),n.appendChild(d);const u=document.createElement("label");u.setAttribute("for","date"),u.innerHTML="Due Date",n.appendChild(u);const s=document.createElement("input");s.setAttribute("name","date"),s.setAttribute("type","date"),n.appendChild(s);const c=document.createElement("div"),l=document.createElement("p");l.innerHTML="Todo priority:",c.appendChild(l);const m=document.createElement("input");m.id="low-priority",m.setAttribute("name","priority"),m.setAttribute("type","radio"),m.setAttribute("value","Low priority"),c.appendChild(m);const h=document.createElement("label");h.setAttribute("for","low-priority"),h.innerHTML="Low priority",c.appendChild(h);const f=document.createElement("input");f.id="medium-priority",f.setAttribute("name","priority"),f.setAttribute("type","radio"),f.setAttribute("value","Medium priority"),c.appendChild(f);const p=document.createElement("label");p.setAttribute("for","medium-priority"),p.innerHTML="Medium priority",c.appendChild(p);const g=document.createElement("input");g.id="high-priority",g.setAttribute("name","priority"),g.setAttribute("type","radio"),g.setAttribute("value","High priority"),c.appendChild(g);const b=document.createElement("label");b.setAttribute("for","high-priority"),b.innerHTML="High priority",c.appendChild(b),n.appendChild(c);const y=document.createElement("button");y.setAttribute("type","button"),y.id="submit-todo",y.innerHTML=t+" Todo",n.appendChild(y);const w=document.createElement("button");w.setAttribute("type","button"),w.id="cancel-todo",w.innerHTML="Cancel",n.appendChild(w),e.appendChild(n)},ee=(e,t)=>{e.removeChild(t)},te=(e,t,n,r,a,u)=>{const s=document.createElement("section");s.classList.add("todo"),s.dataset.index=u,"Low priority"==a?s.classList.add("low-priority"):"Medium priority"==a?s.classList.add("medium-priority"):"High priority"==a&&s.classList.add("high-priority");const c=document.createElement("div");c.classList.add("todo-top-row");const l=document.createElement("h3");l.classList.add("todo-title"),l.innerHTML=t,c.appendChild(l);const m=document.createElement("p");m.classList.add("todo-due-date"),m.innerHTML=function(e,t,n){i(2,arguments);var r=String(t),a=n||{},u=a.locale||p,s=u.options&&u.options.firstWeekContainsDate,c=null==s?1:g(s),l=null==a.firstWeekContainsDate?c:g(a.firstWeekContainsDate);if(!(l>=1&&l<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var m=u.options&&u.options.weekStartsOn,h=null==m?0:g(m),f=null==a.weekStartsOn?h:g(a.weekStartsOn);if(!(f>=0&&f<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!u.localize)throw new RangeError("locale must contain localize property");if(!u.formatLong)throw new RangeError("locale must contain formatLong property");var b=o(e);if(!d(b))throw new RangeError("Invalid time value");var w=I(b),v=y(b,w),T={firstWeekContainsDate:l,weekStartsOn:f,locale:u,_originalDate:b},C=r.match(R).map((function(e){var t=e[0];return"p"===t||"P"===t?(0,Y[t])(e,u.formatLong,T):e})).join("").match(G).map((function(n){if("''"===n)return"'";var r=n[0];if("'"===r)return K(n);var i=O[r];if(i)return!a.useAdditionalWeekYearTokens&&F(n)&&_(n,t,e),!a.useAdditionalDayOfYearTokens&&B(n)&&_(n,t,e),i(v,n,u.localize,T);if(r.match(V))throw new RangeError("Format string contains an unescaped latin alphabet character `"+r+"`");return n})).join("");return C}(Date.UTC(r.slice(0,4),r.slice(5,7)-1,r.slice(8,10))+864e5,"MM/dd/yyyy"),c.appendChild(m);const h=document.createElement("div");h.classList.add("todo-buttons");const f=document.createElement("button");f.classList.add("expand-todo"),f.setAttribute("title","Expand Todo"),f.dataset.index=u,f.innerHTML="+",h.appendChild(f);const b=document.createElement("button");b.classList.add("edit-todo"),b.setAttribute("title","Edit Todo"),b.dataset.index=u,b.innerHTML="✎",h.appendChild(b);const w=document.createElement("button");w.classList.add("check-todo"),w.setAttribute("title","Change Todo Status"),w.dataset.index=u,w.innerHTML="✓",h.appendChild(w);const v=document.createElement("button");v.classList.add("delete-todo"),v.setAttribute("title","Delete Todo"),v.dataset.index=u,v.innerHTML="X",h.appendChild(v),c.appendChild(h),s.appendChild(c);const T=document.createElement("div");T.classList.add("todo-details"),T.classList.add("todo-details-hidden");const C=document.createElement("p");C.classList.add("todo-description"),C.innerHTML=n,T.appendChild(C);const M=document.createElement("p");M.classList.add("todo-priority"),M.innerHTML=a,T.appendChild(M),s.appendChild(T),e.appendChild(s)},ne=e=>({name:e,todos:[]}),re=(e,t)=>{const n=document.createElement("form");n.id="project-form";const r=document.createElement("label");r.setAttribute("for","project-title"),r.innerHTML="Project Title",n.appendChild(r);const a=document.createElement("input");a.setAttribute("name","project-title"),a.setAttribute("type","text"),a.setAttribute("placeholder","Project Title"),n.appendChild(a);const i=document.createElement("button");i.setAttribute("type","button"),i.id="submit-project",i.innerHTML=t+" Project",n.appendChild(i);const o=document.createElement("button");o.setAttribute("type","button"),o.id="cancel-project",o.innerHTML="Cancel",n.appendChild(o),e.appendChild(n)};function ae(e){var t;try{t=window[e];var n="__storage_test__";return t.setItem(n,n),t.removeItem(n),!0}catch(e){return e instanceof DOMException&&(22===e.code||1014===e.code||"QuotaExceededError"===e.name||"NS_ERROR_DOM_QUOTA_REACHED"===e.name)&&t&&0!==t.length}}const ie=(e,t)=>{ae("localStorage")&&localStorage.setItem(e,JSON.stringify(t))};(()=>{const e=document.querySelector("#content"),t=document.querySelector("#sidebar");let n=[];var i,o,d;i="projectsList",o=n,d=ne("Default project"),n=ae("localStorage")&&localStorage.getItem(i)&&JSON.parse(localStorage.getItem(i)).length>=1?JSON.parse(localStorage.getItem(i)):(o.push(d),o),a(e,n[0].name,0),n[0].todos.forEach(e=>{te(document.querySelector("#todos-list"),e.title,e.description,e.dueDate,e.priority,0)}),n.forEach((e,t)=>{r(e.name,t)}),t.onclick=function(t){let i=t.target;if(i.hasAttribute("data-index"))a(e,n[i.dataset.index].name,i.dataset.index),n[i.dataset.index].todos.forEach(e=>{te(document.querySelector("#todos-list"),e.title,e.description,e.dueDate,e.priority,n[i.dataset.index].todos.indexOf(e))});else if("new-project"==i.id){re(e,"Add");let t=document.querySelector("form");t.onclick=function(i){let o=i.target;if("BUTTON"==o.tagName&&(ee(e,t),"submit-project"==o.id)){let i=ne(t.elements.namedItem("project-title").value);n.push(i),r(i.name,n.indexOf(i)),a(e,i.name,n.indexOf(i)),ie("projectsList",n)}}}},e.onclick=function(t){let i=t.target,o=document.querySelector("#project-full").getAttribute("data-index");if("new-to-do"==i.id){Z(e,"Add");let t=document.querySelector("form");t.onclick=function(r){let a=r.target;if("BUTTON"==a.tagName&&(ee(e,t),"submit-todo"==a.id)){let e=(i=t.elements.namedItem("todo-title").value,d=t.elements.namedItem("description").value,u=t.elements.namedItem("date").value,s=t.elements.namedItem("priority").value,{title:i,description:d,dueDate:u,priority:s,status:!1});n[o].todos.push(e),te(document.querySelector("#todos-list"),e.title,e.description,e.dueDate,e.priority,n[o].todos.indexOf(e)),ie("projectsList",n)}var i,d,u,s}}else if("expand-todo"==i.getAttribute("class"))(e=>{let t=e.querySelector(".expand-todo");"+"==t.innerHTML?t.innerHTML="-":t.innerHTML="+",e.querySelector(".todo-details").classList.toggle("todo-details-hidden")})(document.querySelector("#todos-list").querySelector(`[data-index="${i.getAttribute("data-index")}"]`));else if("edit-todo"==i.getAttribute("class")){Z(e,"Edit");let t=document.querySelector("form");t.onclick=function(r){let a=r.target;var d,u,s,c,l;"BUTTON"==a.tagName&&(ee(e,t),"submit-todo"==a.id&&(n[o].todos[i.getAttribute("data-index")].title=t.elements.namedItem("todo-title").value,n[o].todos[i.getAttribute("data-index")].description=t.elements.namedItem("description").value,n[o].todos[i.getAttribute("data-index")].dueDate=t.elements.namedItem("date").value,n[o].todos[i.getAttribute("data-index")].priority=t.elements.namedItem("priority").value,d=document.querySelector("#todos-list").querySelector(`[data-index="${i.getAttribute("data-index")}"]`),u=n[o].todos[i.getAttribute("data-index")].title=t.elements.namedItem("todo-title").value,s=n[o].todos[i.getAttribute("data-index")].description=t.elements.namedItem("description").value,c=n[o].todos[i.getAttribute("data-index")].dueDate=t.elements.namedItem("date").value,l=n[o].todos[i.getAttribute("data-index")].priority=t.elements.namedItem("priority").value,d.querySelector(".todo-title").innerHTML=u,d.querySelector(".todo-description").innerHTML=s,d.querySelector(".todo-due-date").innerHTML=c,d.querySelector(".todo-priority").innerHTML=l,"Low priority"==l?(d.classList.add("low-priority"),d.classList.remove("medium-priority"),d.classList.remove("high-priority")):"Medium priority"==l?(d.classList.add("medium-priority"),d.classList.remove("low-priority"),d.classList.remove("high-priority")):"High priority"==l&&(d.classList.add("high-priority"),d.classList.remove("low-priority"),d.classList.remove("medium-priority")),ie("projectsList",n)))}}else if("check-todo"==i.getAttribute("class"))!n[o].todos[i.getAttribute("data-index")].status,console.log(n[o].todos[i.getAttribute("data-index")]);else if("delete-todo"==i.getAttribute("class")){let e=i.getAttribute("data-index");d=n[o].todos,u=e,d.splice(u,1),document.querySelector("#todos-list").querySelectorAll("*").forEach(e=>e.remove()),n[o].todos.forEach(e=>{te(document.querySelector("#todos-list"),e.title,e.description,e.dueDate,e.priority,n[o].todos.indexOf(e))}),ie("projectsList",n)}else if("edit-project"==i.id){re(e,"Edit");let t=document.querySelector("form");t.onclick=function(i){let d=i.target;"BUTTON"==d.tagName&&(ee(e,t),"submit-project"==d.id&&(n[o].name=t.elements.namedItem("project-title").value,document.querySelector("#sidebar").querySelectorAll(".project-sidebar").forEach(e=>e.remove()),n.forEach((e,t)=>{r(e.name,t)}),a(e,n[o].name,o),ie("projectsList",n)))}}else"delete-project"==i.id&&(((e,t)=>{e.splice(t,1)})(n,document.querySelector("#project-full").dataset.index),document.querySelector("#sidebar").querySelectorAll(".project-sidebar").forEach(e=>e.remove()),n.forEach((e,t)=>{r(e.name,t)}),n.length>0?(a(e,n[0].name,0),n[0].todos.forEach(e=>{te(document.querySelector("#todos-list"),e.title,e.description,e.dueDate,e.priority,n[0].todos.indexOf(e))})):e.removeChild(document.querySelector("#project-full")),ie("projectsList",n));var d,u}})()}]);