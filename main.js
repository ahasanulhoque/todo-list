!function(e){var t={};function n(o){if(t[o])return t[o].exports;var d=t[o]={i:o,l:!1,exports:{}};return e[o].call(d.exports,d,d.exports,n),d.l=!0,d.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var d in e)n.d(o,d,function(t){return e[t]}.bind(null,d));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const o=(e,t)=>{const n=document.querySelector("#sidebar"),o=document.createElement("section");o.dataset.index=t,o.classList.add("project-sidebar");const d=document.createElement("h3");d.dataset.index=t,d.innerHTML=e;const r=document.createElement("secton");r.classList.add("todos-sidebar"),o.appendChild(d),o.appendChild(r),n.appendChild(o)},d=(e,t,n)=>{document.querySelector("#project-full")&&e.removeChild(document.querySelector("#project-full"));const o=document.createElement("section");o.id="project-full",o.dataset.index=n;const d=document.createElement("h2");d.innerHTML=t,o.appendChild(d);const r=document.createElement("secton");r.id="todos-list",o.appendChild(r);const i=document.createElement("button");i.innerHTML="New ToDo",i.id="new-to-do",o.appendChild(i),e.appendChild(o)},r=((()=>{const e=document.querySelector("#content"),t=document.createElement("section");t.id="sidebar";const n=document.createElement("h2");n.innerHTML="Projects";const o=document.createElement("button");o.innerHTML="New Project",o.id="new-project",t.appendChild(n),t.appendChild(o),e.appendChild(t)})(),(e,t)=>{e.removeChild(t)}),i=(e,t,n,o,d,r)=>{const i=document.createElement("section");i.classList.add("to-do"),i.dataset.index=r;const c=document.createElement("h3");c.innerHTML=t,i.appendChild(c);const l=document.createElement("p");l.innerHTML=n,i.appendChild(l);const a=document.createElement("p");a.innerHTML=o,i.appendChild(a);const u=document.createElement("p");u.innerHTML=d,i.appendChild(u);const s=document.createElement("button");s.classList.add("delete-todo"),s.dataset.index=r,s.innerHTML="Delete",i.appendChild(s),e.appendChild(i)},c=e=>({name:e,todos:[],deleteToDo:(e,t)=>{e.splice(t,1)}});(()=>{const e=document.querySelector("#content"),t=document.querySelector("#sidebar"),n=c("Default project");let l=[];l.push(n);o(n.name,l.indexOf(n)),d(e,n.name,l.indexOf(n)),t.onclick=function(t){let n=t.target;if(n.hasAttribute("data-index"))d(e,l[n.dataset.index].name,n.dataset.index),l[n.dataset.index].todos.forEach(e=>{i(document.querySelector("#todos-list"),e.title,e.description,e.dueDate,e.priority,l[n.dataset.index].todos.indexOf(e))});else if("new-project"==n.id){(e=>{const t=document.createElement("form");t.id="project-form";const n=document.createElement("label");n.setAttribute("for","project-title"),n.innerHTML="Project Title",t.appendChild(n);const o=document.createElement("input");o.setAttribute("name","project-title"),o.setAttribute("type","text"),o.setAttribute("placeholder","Project Title"),t.appendChild(o);const d=document.createElement("button");d.setAttribute("type","button"),d.id="submit-project",d.innerHTML="Add Project",t.appendChild(d);const r=document.createElement("button");r.setAttribute("type","button"),r.id="cancel-project",r.innerHTML="Cancel",t.appendChild(r),e.appendChild(t)})(e);let t=document.querySelector("form");t.onclick=function(n){let d=n.target;if("BUTTON"==d.tagName&&(r(e,t),"submit-project"==d.id)){let e=c(t.elements.namedItem("project-title").value);l.push(e),console.log(l),o(e.name,l.indexOf(e))}}}},e.onclick=function(t){let n=t.target;if("new-to-do"==n.id){(e=>{const t=document.createElement("form"),n=document.createElement("h3");n.innerHTML="New ToDo",t.appendChild(n);const o=document.createElement("label");o.setAttribute("for","todo-title"),o.innerHTML="ToDo Title",t.appendChild(o);const d=document.createElement("input");d.setAttribute("name","todo-title"),d.setAttribute("type","text"),d.setAttribute("placeholder","ToDo Title"),t.appendChild(d);const r=document.createElement("label");r.setAttribute("for","description"),r.innerHTML="ToDo Description",t.appendChild(r);const i=document.createElement("input");i.setAttribute("name","description"),i.setAttribute("type","text"),i.setAttribute("placeholder","ToDo Description"),t.appendChild(i);const c=document.createElement("label");c.setAttribute("for","date"),c.innerHTML="Due Date",t.appendChild(c);const l=document.createElement("input");l.setAttribute("name","date"),l.setAttribute("type","text"),l.setAttribute("placeholder","Due Date"),t.appendChild(l);const a=document.createElement("label");a.setAttribute("for","priority"),a.innerHTML="ToDo priority",t.appendChild(a);const u=document.createElement("input");u.setAttribute("name","priority"),u.setAttribute("type","number"),u.setAttribute("min","1"),u.setAttribute("placeholder","ToDo Priority"),t.appendChild(u);const s=document.createElement("button");s.setAttribute("type","button"),s.id="submit-todo",s.innerHTML="Add ToDo",t.appendChild(s);const p=document.createElement("button");p.setAttribute("type","button"),p.id="cancel-todo",p.innerHTML="Cancel",t.appendChild(p),e.appendChild(t)})(e);let t=document.querySelector("form");t.onclick=function(n){let o=n.target;if("BUTTON"==o.tagName&&(r(e,t),"submit-todo"==o.id)){let e=((e,t,n,o)=>{let d=!1;return{title:e,description:t,dueDate:n,priority:o,completed:d,toggleStatus:()=>{d=!d}}})(t.elements.namedItem("todo-title").value,t.elements.namedItem("description").value,t.elements.namedItem("date").value,t.elements.namedItem("priority").value),n=document.querySelector("#project-full");l[n.dataset.index].todos.push(e),i(document.querySelector("#todos-list"),e.title,e.description,e.dueDate,e.priority,l[n.dataset.index].todos.indexOf(e)),((e,t,n)=>{const o=document.createElement("section");o.classList.add("todo-sidebar");const d=document.createElement("p"),r=document.createElement("p");d.innerHTML=t,r.innerHTML=n,o.appendChild(d),o.appendChild(r),e.appendChild(o)})(document.querySelector("#sidebar").querySelector(`[data-index="${n.dataset.index}"]`).querySelector(".todos-sidebar"),e.title,e.dueDate)}}}else if("delete-todo"==n.getAttribute("class")){let e=document.querySelector("#project-full").getAttribute("data-index"),t=n.getAttribute("data-index");l[e].deleteToDo(l[e].todos,t),console.log(l[e]),document.querySelector("#todos-list").querySelectorAll("*").forEach(e=>e.remove()),l[e].todos.forEach(t=>{i(document.querySelector("#todos-list"),t.title,t.description,t.dueDate,t.priority,l[e].todos.indexOf(t))})}}})()}]);