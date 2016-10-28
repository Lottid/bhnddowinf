webpackJsonp([4,0],{0:function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}var i=o(1),s=n(i),d=o(73),a=n(d),r=o(150),u=n(r);new s["default"]({store:a["default"],el:"#app",render:function(t){return t(u["default"])}})},58:function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=o(17),s=n(i),d=o(4),a=o(151),r=n(a),u={all:function(t){return t},active:function(t){return t.filter(function(t){return!t.done})},completed:function(t){return t.filter(function(t){return t.done})}};e["default"]={components:{Todo:r["default"]},data:function(){return{visibility:"all",filters:u}},computed:{todos:function(){return this.$store.state.todos},allChecked:function(){return this.todos.every(function(t){return t.done})},filteredTodos:function(){return u[this.visibility](this.todos)},remaining:function(){return this.todos.filter(function(t){return!t.done}).length}},methods:(0,s["default"])({addTodo:function(t){var e=t.target.value;e.trim()&&this.$store.commit("addTodo",{text:e}),t.target.value=""}},(0,d.mapMutations)(["toggleAll","clearCompleted"])),filters:{pluralize:function(t,e){return 1===t?e:e+"s"},capitalize:function(t){return t.charAt(0).toUpperCase()+t.slice(1)}}}},59:function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=o(17),s=n(i),d=o(4);e["default"]={name:"Todo",props:["todo"],data:function(){return{editing:!1}},directives:{focus:function(t,e,o){var n=e.value,i=o.context;n&&i.$nextTick(function(){t.focus()})}},methods:(0,s["default"])({},(0,d.mapMutations)(["editTodo","toggleTodo","deleteTodo"]),{doneEdit:function(t){var e=t.target.value.trim(),o=this.todo;e?this.editing&&(this.editTodo({todo:o,value:e}),this.editing=!1):this.deleteTodo({todo:o})},cancelEdit:function(t){t.target.value=this.todo.text,this.editing=!1}})}},73:function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=o(1),s=n(i),d=o(4),a=n(d),r=o(74);s["default"].use(a["default"]),e["default"]=new a["default"].Store({state:r.state,mutations:r.mutations})},74:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=e.STORAGE_KEY="todos-vuejs";navigator.userAgent.indexOf("PhantomJS")>-1&&window.localStorage.clear();e.state={todos:JSON.parse(window.localStorage.getItem(o)||"[]")},e.mutations={addTodo:function(t,e){var o=e.text;t.todos.push({text:o,done:!1})},deleteTodo:function(t,e){var o=e.todo;t.todos.splice(t.todos.indexOf(o),1)},toggleTodo:function(t,e){var o=e.todo;o.done=!o.done},editTodo:function(t,e){var o=e.todo,n=e.value;o.text=n},toggleAll:function(t,e){var o=e.done;t.todos.forEach(function(t){t.done=o})},clearCompleted:function(t){t.todos=t.todos.filter(function(t){return!t.done})}}},131:function(t,e){},150:function(t,e,o){var n,i;o(131),n=o(58);var s=o(167);i=n=n||{},"object"!=typeof n["default"]&&"function"!=typeof n["default"]||(i=n=n["default"]),"function"==typeof i&&(i=i.options),i.render=s.render,i.staticRenderFns=s.staticRenderFns,t.exports=n},151:function(t,e,o){var n,i;n=o(59);var s=o(155);i=n=n||{},"object"!=typeof n["default"]&&"function"!=typeof n["default"]||(i=n=n["default"]),"function"==typeof i&&(i=i.options),i.render=s.render,i.staticRenderFns=s.staticRenderFns,t.exports=n},155:function(module,exports){module.exports={render:function(){with(this)return _h("li",{staticClass:"todo","class":{completed:todo.done,editing:editing}},[_h("div",{staticClass:"view"},[_h("input",{staticClass:"toggle",attrs:{type:"checkbox"},domProps:{checked:todo.done},on:{change:function(t){toggleTodo({todo:todo})}}})," ",_h("label",{domProps:{textContent:_s(todo.text)},on:{dblclick:function(t){editing=!0}}})," ",_h("button",{staticClass:"destroy",on:{click:function(t){deleteTodo({todo:todo})}}})])," ",_h("input",{directives:[{name:"show",rawName:"v-show",value:editing,expression:"editing"},{name:"focus",rawName:"v-focus",value:editing,expression:"editing"}],staticClass:"edit",domProps:{value:todo.text},on:{keyup:[function(t){13===t.keyCode&&doneEdit(t)},function(t){27===t.keyCode&&cancelEdit(t)}],blur:doneEdit}})])},staticRenderFns:[]}},167:function(module,exports){module.exports={render:function(){with(this)return _h("section",{staticClass:"todoapp"},[_h("header",{staticClass:"header"},[_m(0)," ",_h("input",{staticClass:"new-todo",attrs:{autofocus:"",autocomplete:"off",placeholder:"What needs to be done?"},on:{keyup:function(t){13===t.keyCode&&addTodo(t)}}})])," "," ",_h("section",{directives:[{name:"show",rawName:"v-show",value:todos.length,expression:"todos.length"}],staticClass:"main"},[_h("input",{staticClass:"toggle-all",attrs:{type:"checkbox"},domProps:{checked:allChecked},on:{change:function(t){toggleAll({done:!allChecked})}}})," ",_h("ul",{staticClass:"todo-list"},[_l(filteredTodos,function(t){return _h("todo",{attrs:{todo:t}})})])])," "," ",_h("footer",{directives:[{name:"show",rawName:"v-show",value:todos.length,expression:"todos.length"}],staticClass:"footer"},[_h("span",{staticClass:"todo-count"},[_h("strong",[_s(remaining)]),"\n      "+_s(_f("pluralize")(remaining,"item"))+" left\n    "])," ",_h("ul",{staticClass:"filters"},[_l(filters,function(t,e){return _h("li",[_h("a",{"class":{selected:visibility===e},attrs:{href:"#/"+e},on:{click:function(t){visibility=e}}},[_s(_f("capitalize")(e))])])})])," ",_h("button",{directives:[{name:"show",rawName:"v-show",value:todos.length>remaining,expression:"todos.length > remaining"}],staticClass:"clear-completed",on:{click:clearCompleted}},["\n      Clear completed\n    "])])])},staticRenderFns:[function(){with(this)return _h("h1",["todos"])}]}}});
//# sourceMappingURL=todomvc.e0a3b19436d5c11230b1.js.map