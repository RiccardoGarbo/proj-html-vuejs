<script>
import axios from 'axios';
import { api } from './assets/data/index';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'AppVue',
  components: { AppHeader, AppMain, AppFooter },
  methods: {
    handleFormSubmit(formData) {
      // Perform the API call with the form data
      axios.get(api.apiUri, formData)
        .then(response => {
          // Handle the response from the API call
          console.log('Form submitted successfully:', response);
        })
        .catch(error => {
          // Handle API call errors
          console.error('Error submitting form:', error);
        });
    }
  }
}
</script>

<template>
  <AppHeader />
  <AppMain />
  <AppFooter @form-submit="handleFormSubmit" />
</template>

<style lang="scss">
@use './assets/scss/style.scss';
</style>
