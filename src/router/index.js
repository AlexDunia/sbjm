import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductsView from '../views/ProductinfoView.vue'
import CartView from '../views/CartView.vue'
// import ContactinfoView from '../views/ContactinfoView.vue'
import ProductView from '../views/ProductView.vue'
import ContactView from '../views/ContactView.vue'
import SearchResults from '../views/SearchView.vue'
import TopView from '../views/TopView.vue'
import PantView from '../views/PantsView.vue'
import SkirtView from '../views/SkirtView.vue'
import GownView from '../views/GownView.vue'
import BubuView from '../views/BubuView.vue'
import JumpsuitView from '../views/JumpsuitView.vue'
import SwimwearView from '../views/SwimwearView.vue'
import SwimcoverView from '../views/SwimcoverView.vue'



const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/product',
    name: 'products',
    component: ProductsView
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartView
  },
  // {
  //   path: '/contactinformation',
  //   name: 'contactinformation',
  //   component: ContactinfoView
  // },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/view/:id',
    name: 'Productzz',
    component: ProductView
  },
  {
    path: '/tops',
    name: 'Top',
    component: TopView
  },
  {
    path: '/pants',
    name: 'Pant',
    component: PantView
  },
  {
    path: '/skirt',
    name: 'Skirt',
    component: SkirtView
  },
  {
    path: '/gown',
    name: 'Gown',
    component: GownView
  },
  {
    path: '/bubu',
    name: 'Bubu',
    component: BubuView
  },
  {
    path: '/jumpsuit',
    name: 'Jumpsuit',
    component: JumpsuitView
  },
  {
    path: '/swimwear',
    name: 'Swimwear',
    component: SwimwearView
  },
  {
    path: '/swimcover',
    name: 'Swimcover',
    component: SwimcoverView
  },
  {
    path: '/search-results',
    component: SearchResults
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
