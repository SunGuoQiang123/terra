import MyCompo from './MyCompo.vue';

const obj = {
  install(Vue) {
    Vue.component(MyCompo.name, MyCompo);
  }
};

// Auto-install
let GlobalVue = null;
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

export default obj;
