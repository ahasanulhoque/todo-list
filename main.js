!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);(()=>{const e=document.querySelector("#content"),t=document.createElement("div"),n=document.createElement("h2"),o=document.createElement("button");n.innerHTML="Default Project",o.innerHTML="New ToDo",o.classList.add("new-to-do"),t.appendChild(n),t.appendChild(o),e.appendChild(t)})(),(()=>{const e=document.querySelector("#content"),t={todos:[]};e.onclick=function(n){if("new-to-do"==n.target.className){(e=>{const t=document.createElement("form"),n=document.createElement("h3");n.innerHTML="New ToDo",t.appendChild(n);const o=document.createElement("label");o.setAttribute("for","title"),o.innerHTML="ToDo Title",t.appendChild(o);const r=document.createElement("input");r.setAttribute("name","title"),r.setAttribute("type","text"),r.setAttribute("placeholder","ToDo Title"),t.appendChild(r);const i=document.createElement("label");i.setAttribute("for","description"),i.innerHTML="ToDo Description",t.appendChild(i);const d=document.createElement("input");d.setAttribute("name","description"),d.setAttribute("type","text"),d.setAttribute("placeholder","ToDo Description"),t.appendChild(d);const c=document.createElement("label");c.setAttribute("for","date"),c.innerHTML="Due Date",t.appendChild(c);const l=document.createElement("input");l.setAttribute("name","date"),l.setAttribute("type","text"),l.setAttribute("placeholder","Due Date"),t.appendChild(l);const u=document.createElement("label");u.setAttribute("for","priority"),u.innerHTML="ToDo priority",t.appendChild(u);const a=document.createElement("input");a.setAttribute("name","priority"),a.setAttribute("type","number"),a.setAttribute("min","1"),a.setAttribute("placeholder","ToDo Priority"),t.appendChild(a);const p=document.createElement("button");p.setAttribute("type","button"),p.id="submit-to-do",p.innerHTML="Add ToDo",t.appendChild(p);const s=document.createElement("button");s.setAttribute("type","button"),s.id="cancel-to-do",s.innerHTML="Cancel",t.appendChild(s),e.appendChild(t)})(e);let n=document.querySelector("form");n.onclick=function(o){let r=o.target;if("BUTTON"==r.tagName&&(((e,t)=>{e.removeChild(t)})(e,n),"submit-to-do"==r.id)){let e=((e,t,n,o)=>{let r=!1;return{title:e,description:t,dueDate:n,priority:o,completed:r,toggleStatus:()=>{r=!r}}})(n.elements.namedItem("title").value,n.elements.namedItem("description").value,n.elements.namedItem("date").value,n.elements.namedItem("priority").value);console.log(e),t.todos.push(e),console.log(t.todos);((e,t,n,o,r)=>{const i=document.createElement("div");i.classList.add("to-do");const d=document.createElement("h3");d.innerHTML=t,i.appendChild(d);const c=document.createElement("p");c.innerHTML=n,i.appendChild(c);const l=document.createElement("p");l.innerHTML=o,i.appendChild(l);const u=document.createElement("p");u.innerHTML=r,i.appendChild(u),e.appendChild(i)})(document.querySelector("#content div"),e.title,e.description,e.dueDate,e.priority)}}}}})()}]);