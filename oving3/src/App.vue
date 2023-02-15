<script setup>
import Calculator from './components/Calculator.vue'
import Logg from "@/components/Logg.vue";
</script>

<template>
  <div id="layout">
    <main>
      <Calculator/>
      <Logg/>
    </main>
  </div>
</template>

<style scoped>
#layout{
  justify-content: center;
}

.nav{

}
</style>
