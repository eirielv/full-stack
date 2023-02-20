<template>
  <main>
    <h1>Contact us!</h1>
    <ContactForm/>
  </main>
</template>


<script setup>
import ContactForm from "@/components/ContactForm.vue";
//import {onMounted, ref} from "vue";
import ContactService from "@/services/ContactService";

//const feedback = ref(null)


/*
onMounted(() => {
  ContactService.getFeedback().then((response) => {
    console.log('respons: ', response.data)
  })
      .catch((error) => console.log(error))
})

 */

</script>

<style scoped>

</style>