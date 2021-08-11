new Vue({
  el: '#hello-world',
  vuetify: new Vuetify(),
  components: {
    SampleButtons,
    SampleDataTable,
  },
  data() {
    return {
      message: 'Hello, Vuetify(v2).',
    };
  },
  template: `
<v-app>
  <v-container>
    <h1>{{ message }}</h1>
    <v-row>
      <v-col
        cols="12"
        sm="6"
        md="3"
      >
        <v-text-field v-model="message" />
      </v-col>
    </v-row>
    <SampleButtons />
    <SampleDataTable />
  </v-container>
</v-app>
`
});
