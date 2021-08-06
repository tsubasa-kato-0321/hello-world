Vue.createApp({
  data() {
    return {
      message: 'Hello, Vue.js(Vue3).'
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
}).mount('#hello-world');
