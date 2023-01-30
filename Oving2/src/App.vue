<script setup>
import Calculator from './components/Calculator.vue'
</script>

<template>
  <div id="layout">
    <header>
      <div class="wrapper">
        header
      </div>
    </header>

    <main>
      <Calculator/>
    </main>
  </div>
</template>

<style scoped>
#layout{
  justify-content: center;
}
</style>
