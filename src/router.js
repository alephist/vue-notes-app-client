import Vue from 'vue';
import VueRouter from 'vue-router';
import Notes from './components/Notes';
import AddNote from './components/AddNote';
import EditNote from './components/EditNote';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', name: 'Notes', component: Notes },
    { path: '/add-note', name: 'AddNote', component: AddNote },
    { path: '/notes/:id/edit', name: 'EditNote', component: EditNote },
    { path: '*', component: Notes }
  ]
});
