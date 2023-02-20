<template>
  <main class="calculator">
    <Calculator/>
    <Logg/>
  </main>
</template>

<script setup>
import Calculator from "@/components/Calculator.vue";
import Logg from "@/components/Logg.vue";

/*export default {
  name: "Calculator",
  components: {Logg, Calculator}
}
 */
</script>

<style>
  .calculator{
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
</style>