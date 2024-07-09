import { createWebHistory, createRouter } from 'vue-router'

import Home from './pages/Home.vue'
import ArticleList from './pages/ArticleList.vue'
import ArticleDetails from './pages/ArticleDetail.vue'
import AddArticle from './pages/AddArticle.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/articleList', component: ArticleList},
    { path: '/articleDetail/:id', component: ArticleDetails },
    { path: '/addArticle', component: AddArticle}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
