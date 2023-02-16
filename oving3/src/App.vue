<script setup>
import Calculator from './components/Calculator.vue'
import Logg from "@/components/Logg.vue";
import ContactForm from "@/components/ContactForm.vue";
</script>

<template>
  <div id="layout">
    <header>
      <div>
        <nav>
          <RouterLink to="/">CALCULATOR</RouterLink> |
          <RouterLink to="/contackForm">CONTACTFORM</RouterLink>
        </nav>
      </div>
    </header>
    <RouterView />
  </div>
</template>

<style scoped>
#layout{
  justify-content: center;
}

nav{

}
</style>
