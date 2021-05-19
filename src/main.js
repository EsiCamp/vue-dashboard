import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './routes/routes'
import vuetify from './plugins/vuetify';

const router = new VueRouter({
  routes
});

Vue.use(VueRouter);

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App),
}).$mount('#app')
