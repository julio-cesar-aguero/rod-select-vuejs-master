import Vue from 'vue'
import VueRouter from 'vue-router'

function lazyLoad(view){
  return() => import(`@/views/${view}.vue`)
}

Vue.use(VueRouter)

function guardMyroute(to, from, next)
{
 var isAuthenticated= false;
//this is just an example. You will have to find a better or 
// centralised way to handle you localstorage data handling 
if(localStorage.getItem('LoggedEmail')){
  isAuthenticated = true;
  //alert("Si")
}else{
 //alert("no");
  isAuthenticated= false;} if(isAuthenticated) 
 {
  next(); // allow to enter route
 } 
 else
 {
  next('/cotizador'); // go to '/login';
 }
}


const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/VistaGeneral.vue')
  },
  {
    path: '/cotizador',
    name: 'Cotizador',
    component: () => import('../views/Cotizador.vue')
  },
  {
    path: '/cotizador-2',
    name: 'Cotizador-2',
    beforeEnter: guardMyroute,
    component: () => import('../views/Cotizador-2.vue')
  },
  {
    path: '/cotizador-3',
    name: 'Cotizador-3',
    beforeEnter: guardMyroute,
    component: () => import('../views/Cotizador-3.vue')
  },
  {
    path: '/cotizador-4',
    name: 'Cotizador-4',
    beforeEnter: guardMyroute,
    component: () => import('../views/Cotizador-4.vue')
  },
  {
    path: '/cotizador-5',
    name: 'Cotizador-5',
    beforeEnter: guardMyroute,
    component: () => import('../views/Cotizador-5.vue')
  },
  {
    path: '/cotizador-6',
    name: 'Cotizador-6',
    beforeEnter: guardMyroute,
    component: () => import('../views/Cotizador-6.vue')
  },
  {
    path: '/cotizador-7',
    name: 'Cotizador-7',
    beforeEnter: guardMyroute,
    component: () => import('../views/Cotizador-7.vue')
  },
  {
    path: '/cotizador-8',
    name: 'Cotizador-8',
    beforeEnter: guardMyroute,
    component: () => import('../views/Cotizador-8.vue')
  },
  {
    path: '*',
    redirect:{
      path:'/'
    }
  }



]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes, 
})

export default router
