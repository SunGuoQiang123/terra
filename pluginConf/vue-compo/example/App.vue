<template>
  <div class="app">
    <h1>this is a component demo page</h1>
    <my-compo />
  </div>
</template>
<script>
import MyCompo from "../lib/MyCompo";

export default {
  name: "App",
  components: { MyCompo },
  data() {
    return {};
  },
  methods: {}
};
</script>
<style scoped lang="css"></style>
