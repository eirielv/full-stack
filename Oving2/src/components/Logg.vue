
<template>
  <div class="logg">
    <ol  v-for="item in this.$store.state.equations" :key="item">
      {{item}}
    </ol>
  </div>
</template>

<script>
export default {
  name: "Logg",

  data(){
    return {
      equation: [],
      storeList: [] = this.$store.state.equations,
      equationStateFinish: false,
      content: document.getElementById("equationList"),

    }
  },

  computed: {
    createLineInList() {
      let stringWord = null
      for (let i = 0; i <= this.storeList.length; i++) {
        stringWord = this.storeList.toString();
        this.equation.push(stringWord)
      }
    }
  },

  methods: {
    fetchList(){
      this.equation = this.$store.state.equations
    },

    createLineInList() {
      let stringWord = null
      for(let i = 0; i <= this.storeList.length; i++) {
        stringWord = this.storeList.toString();
        this.equation.push(stringWord)

      }

      for (let i = 0; i <= this.equation.length; i++) {
        let li = document.createElement("li")
        li.innerHTML = this.equation[i];
        li.className = "listElement"
        this.content.appendChild(li);
      }
    }
  }
}

</script>

<style scoped>

.logg{
  border: 2px solid black;
  min-height: 300px;
  box-shadow: 7px 6px 28px 1px rgba(0,0,0,0.24);
}

</style>