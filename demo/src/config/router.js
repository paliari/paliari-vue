import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes.coffee'

Vue.use(VueRouter)

const router = new VueRouter({ routes })

router.beforeEach((to, from, next) => {
  if (from.meta.scrollCache) {
    from.meta.scrollY = window.scrollY
  }
  if (to.meta.scrollY) {
    setTimeout(function() {window.scrollTo(0, to.meta.scrollY)}, 0)
  }
  next()
})

export default router
