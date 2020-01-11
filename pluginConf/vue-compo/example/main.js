import Vue from 'vue';
import App from './App.vue';

const app = new Vue({
  components: { App },
  render(h) {
    return h(App);
  }
});

app.$mount('#app');
