
<template>
  <div class="logg">
    <div class="logglist">
      <ol v-for="item in this.$store.state.logs.equations" :key="item" id="orderedList">
        {{item}}
      </ol>
    </div>
    <div class = buttonPlace>
      <button id="clearLogg" @click="clearLogg">
        Clear Logg
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Logg",

  data(){
    return {
      loggLine: [],
      logString: '',
      equationStateFinish: false,
      content: document.getElementById("equationList"),

    }
  },
  methods: {
    clearLogg(){
      document.getElementById("orderedList").innerHTML = "";
      this.$store.commit('CLEAR_LOGG')
    }
  },
  computed: {

  }
}

</script>

<style scoped>

#clearLogg{
  background-color: rgba(234, 160, 109, 0.89);
  border: 1px solid ;
  text-align: center;
  cursor: pointer;
  font-size: 20px;
  max-width: 200px;

}

.logglist{
  min-height: 300px;


}
.logg{
  display: grid;
  border: 2px solid black;
  box-shadow: 7px 6px 28px 1px rgba(0,0,0,0.24);
}

.buttonPlace{
  text-align: center;
  padding: 10px
}

</style>