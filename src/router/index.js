import Login from '../components/Login.vue';
import TodoList from '../components/TodoList.vue';
import About from '../components/About.vue';

const routes = [
  { path: '/', component: Login },
  { path: '/todolist', component: TodoList },
  { path: '/about', component: About },
]
export default routes;