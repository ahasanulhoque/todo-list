!function(e){var t={};function o(i){if(t[i])return t[i].exports;var n=t[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=t,o.d=function(e,t,i){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(i,n,function(t){return e[t]}.bind(null,n));return i},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";o.r(t);const i=(e,t)=>{const o=document.querySelector("#sidebar"),i=document.createElement("section");i.dataset.index=t,i.classList.add("project-sidebar");const n=document.createElement("h3");n.dataset.index=t,n.innerHTML=e;const d=document.createElement("secton");d.classList.add("todos-sidebar"),i.appendChild(n),i.appendChild(d),o.appendChild(i)},n=(e,t,o)=>{document.querySelector("#project-full")&&e.removeChild(document.querySelector("#project-full"));const i=document.createElement("section");i.id="project-full",i.dataset.index=o;const n=document.createElement("h2");n.innerHTML=t,i.appendChild(n);const d=document.createElement("secton");d.id="todos-list",i.appendChild(d);const r=document.createElement("button");r.innerHTML="New ToDo",r.id="new-to-do",i.appendChild(r),e.appendChild(i)},d=((()=>{const e=document.querySelector("#content"),t=document.createElement("section");t.id="sidebar";const o=document.createElement("h2");o.innerHTML="Projects";const i=document.createElement("button");i.innerHTML="New Project",i.id="new-project",t.appendChild(o),t.appendChild(i),e.appendChild(t)})(),(e,t)=>{const o=document.createElement("form"),i=document.createElement("h3");i.innerHTML=t+" Todo",o.appendChild(i);const n=document.createElement("label");n.setAttribute("for","todo-title"),n.innerHTML="ToDo Title",o.appendChild(n);const d=document.createElement("input");d.setAttribute("name","todo-title"),d.setAttribute("type","text"),d.setAttribute("placeholder","ToDo Title"),o.appendChild(d);const r=document.createElement("label");r.setAttribute("for","description"),r.innerHTML="ToDo Description",o.appendChild(r);const a=document.createElement("input");a.setAttribute("name","description"),a.setAttribute("type","text"),a.setAttribute("placeholder","ToDo Description"),o.appendChild(a);const l=document.createElement("label");l.setAttribute("for","date"),l.innerHTML="Due Date",o.appendChild(l);const c=document.createElement("input");c.setAttribute("name","date"),c.setAttribute("type","text"),c.setAttribute("placeholder","Due Date"),o.appendChild(c);const s=document.createElement("div"),u=document.createElement("p");u.innerHTML="Todo priority:",s.appendChild(u);const p=document.createElement("input");p.id="low-priority",p.setAttribute("name","priority"),p.setAttribute("type","radio"),p.setAttribute("value","Low priority"),s.appendChild(p);const m=document.createElement("label");m.setAttribute("for","low-priority"),m.innerHTML="Low priority",s.appendChild(m);const b=document.createElement("input");b.id="medium-priority",b.setAttribute("name","priority"),b.setAttribute("type","radio"),b.setAttribute("value","Medium priority"),s.appendChild(b);const y=document.createElement("label");y.setAttribute("for","medium-priority"),y.innerHTML="Medium priority",s.appendChild(y);const h=document.createElement("input");h.id="high-priority",h.setAttribute("name","priority"),h.setAttribute("type","radio"),h.setAttribute("value","High priority"),s.appendChild(h);const f=document.createElement("label");f.setAttribute("for","high-priority"),f.innerHTML="High priority",s.appendChild(f),o.appendChild(s);const L=document.createElement("button");L.setAttribute("type","button"),L.id="submit-todo",L.innerHTML=t+" Todo",o.appendChild(L);const T=document.createElement("button");T.setAttribute("type","button"),T.id="cancel-todo",T.innerHTML="Cancel",o.appendChild(T),e.appendChild(o)}),r=(e,t)=>{e.removeChild(t)},a=(e,t,o,i,n,d)=>{const r=document.createElement("section");r.classList.add("todo"),r.dataset.index=d,"Low priority"==n?r.classList.add("low-priority"):"Medium priority"==n?r.classList.add("medium-priority"):"High priority"==n&&r.classList.add("high-priority");const a=document.createElement("div");a.classList.add("todo-top-row");const l=document.createElement("h3");l.classList.add("todo-title"),l.innerHTML=t,a.appendChild(l);const c=document.createElement("p");c.classList.add("todo-due-date"),c.innerHTML=i,a.appendChild(c);const s=document.createElement("div");s.classList.add("todo-buttons");const u=document.createElement("button");u.classList.add("expand-todo"),u.setAttribute("title","Expand Todo"),u.dataset.index=d,u.innerHTML="+",s.appendChild(u);const p=document.createElement("button");p.classList.add("edit-todo"),p.setAttribute("title","Edit Todo"),p.dataset.index=d,p.innerHTML="✎",s.appendChild(p);const m=document.createElement("button");m.classList.add("check-todo"),m.setAttribute("title","Change Todo Status"),m.dataset.index=d,m.innerHTML="✓",s.appendChild(m);const b=document.createElement("button");b.classList.add("delete-todo"),b.setAttribute("title","Delete Todo"),b.dataset.index=d,b.innerHTML="X",s.appendChild(b),a.appendChild(s),r.appendChild(a);const y=document.createElement("div");y.classList.add("todo-details"),y.classList.add("todo-details-hidden");const h=document.createElement("p");h.classList.add("todo-description"),h.innerHTML=o,y.appendChild(h);const f=document.createElement("p");f.classList.add("todo-priority"),f.innerHTML=n,y.appendChild(f),r.appendChild(y),e.appendChild(r)},l=e=>({name:e,todos:[],deleteToDo:(e,t)=>{e.splice(t,1)}});(()=>{const e=document.querySelector("#content"),t=document.querySelector("#sidebar"),o=l("Default project");let c=[];c.push(o);i(o.name,c.indexOf(o)),n(e,o.name,c.indexOf(o)),t.onclick=function(t){let o=t.target;if(o.hasAttribute("data-index"))n(e,c[o.dataset.index].name,o.dataset.index),c[o.dataset.index].todos.forEach(e=>{a(document.querySelector("#todos-list"),e.title,e.description,e.dueDate,e.priority,c[o.dataset.index].todos.indexOf(e))});else if("new-project"==o.id){(e=>{const t=document.createElement("form");t.id="project-form";const o=document.createElement("label");o.setAttribute("for","project-title"),o.innerHTML="Project Title",t.appendChild(o);const i=document.createElement("input");i.setAttribute("name","project-title"),i.setAttribute("type","text"),i.setAttribute("placeholder","Project Title"),t.appendChild(i);const n=document.createElement("button");n.setAttribute("type","button"),n.id="submit-project",n.innerHTML="Add Project",t.appendChild(n);const d=document.createElement("button");d.setAttribute("type","button"),d.id="cancel-project",d.innerHTML="Cancel",t.appendChild(d),e.appendChild(t)})(e);let t=document.querySelector("form");t.onclick=function(o){let n=o.target;if("BUTTON"==n.tagName&&(r(e,t),"submit-project"==n.id)){let e=l(t.elements.namedItem("project-title").value);c.push(e),console.log(c),i(e.name,c.indexOf(e))}}}},e.onclick=function(t){let o=t.target,i=document.querySelector("#project-full").getAttribute("data-index");if("new-to-do"==o.id){d(e,"Add");let t=document.querySelector("form");t.onclick=function(o){let i=o.target;if("BUTTON"==i.tagName&&(r(e,t),"submit-todo"==i.id)){let e=(n=t.elements.namedItem("todo-title").value,d=t.elements.namedItem("description").value,l=t.elements.namedItem("date").value,s=t.elements.namedItem("priority").value,{title:n,description:d,dueDate:l,priority:s,status:!1}),o=document.querySelector("#project-full");c[o.dataset.index].todos.push(e),a(document.querySelector("#todos-list"),e.title,e.description,e.dueDate,e.priority,c[o.dataset.index].todos.indexOf(e)),((e,t,o)=>{const i=document.createElement("section");i.classList.add("todo-sidebar");const n=document.createElement("p"),d=document.createElement("p");n.innerHTML=t,d.innerHTML=o,i.appendChild(n),i.appendChild(d),e.appendChild(i)})(document.querySelector("#sidebar").querySelector(`[data-index="${o.dataset.index}"]`).querySelector(".todos-sidebar"),e.title,e.dueDate)}var n,d,l,s}}else if("expand-todo"==o.getAttribute("class"))(e=>{let t=e.querySelector(".expand-todo");"+"==t.innerHTML?t.innerHTML="-":t.innerHTML="+",e.querySelector(".todo-details").classList.toggle("todo-details-hidden")})(document.querySelector("#todos-list").querySelector(`[data-index="${o.getAttribute("data-index")}"]`));else if("edit-todo"==o.getAttribute("class")){d(e,"Edit");let t=document.querySelector("form");t.onclick=function(n){let d=n.target;var a,l,s,u,p;"BUTTON"==d.tagName&&(r(e,t),"submit-todo"==d.id&&(c[i].todos[o.getAttribute("data-index")].title=t.elements.namedItem("todo-title").value,c[i].todos[o.getAttribute("data-index")].description=t.elements.namedItem("description").value,c[i].todos[o.getAttribute("data-index")].dueDate=t.elements.namedItem("date").value,c[i].todos[o.getAttribute("data-index")].priority=t.elements.namedItem("priority").value,a=document.querySelector("#todos-list").querySelector(`[data-index="${o.getAttribute("data-index")}"]`),l=c[i].todos[o.getAttribute("data-index")].title=t.elements.namedItem("todo-title").value,s=c[i].todos[o.getAttribute("data-index")].description=t.elements.namedItem("description").value,u=c[i].todos[o.getAttribute("data-index")].dueDate=t.elements.namedItem("date").value,p=c[i].todos[o.getAttribute("data-index")].priority=t.elements.namedItem("priority").value,a.querySelector(".todo-title").innerHTML=l,a.querySelector(".todo-description").innerHTML=s,a.querySelector(".todo-due-date").innerHTML=u,a.querySelector(".todo-priority").innerHTML=p,"Low priority"==p?(a.classList.add("low-priority"),a.classList.remove("medium-priority"),a.classList.remove("high-priority")):"Medium priority"==p?(a.classList.add("medium-priority"),a.classList.remove("low-priority"),a.classList.remove("high-priority")):"High priority"==p&&(a.classList.add("high-priority"),a.classList.remove("low-priority"),a.classList.remove("medium-priority"))))}}else if("check-todo"==o.getAttribute("class"))!c[i].todos[o.getAttribute("data-index")].status,console.log(c[i].todos[o.getAttribute("data-index")]);else if("delete-todo"==o.getAttribute("class")){let e=o.getAttribute("data-index");c[i].deleteToDo(c[i].todos,e),console.log(c[i]),document.querySelector("#todos-list").querySelectorAll("*").forEach(e=>e.remove()),c[i].todos.forEach(e=>{a(document.querySelector("#todos-list"),e.title,e.description,e.dueDate,e.priority,c[i].todos.indexOf(e))})}}})()}]);