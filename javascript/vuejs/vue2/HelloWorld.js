new Vue({
  el: '#hello-world',
  data() {
    return {
      message: 'Hello, Vue.js(Vue2).',
    };
  },
  template: `
<div>
  <h1>{{ message }}</h1>
  <div>
    <input type="text" v-model="message" />
  </div>
</div>
`
});
