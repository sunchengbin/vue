const Index = resolve => {
  require.ensure(['@/view/index/index.vue'], () => {
    resolve(require('@/view/index/index.vue'))
  })
}
export default {
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      meta: {
        title: 'hello-world'
      }
    }
  ]
}
