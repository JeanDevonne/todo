Vue.component('todo-form', {
    template:'<form @submit.prevent="todoEvent"><input id="lbl" class="lbl" type="text" placeholder="add task ..." v-model="newTodo">' + '<input class="btn" type="submit" value="+"></form>',
    data: function() {
        return {
            newTodo: ''
        }
    },
    methods: {
        todoEvent: function() {
            this.$emit('todo-created', this.newTodo);
            this.newTodo = '';
        }
    }
});
Vue.component('todo-list',{
    template: '<ul><li v-for="todo in todos">{{todo}} <a href="#"class="icon-remove" @click="removeTodo(todo)"></a></li></ul>',
    props: ['todos'],
    methods: {
        removeTodo: function(todo) {
            this.todos.$remove(todo);
        }
    }
});
new Vue({
    el: '#app',
    data: {
        'todos': []
    },
    methods: {
        addTodo: function (todo) {
            if (todo.trim()) {
                this.todos.push(todo);
                document.getElementById('lbl').focus();
            } else {
                alert('Debes introducir un nombre para la tarea.')
            }
        }
    }
})