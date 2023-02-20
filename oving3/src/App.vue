<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div id="layout">
    <header>
      <div>
        <nav>
          <RouterLink to="/">CALCULATOR</RouterLink> |
          <RouterLink to='/contactForm'>CONTACTFORM</RouterLink>
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
