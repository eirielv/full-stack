
<template>
  <div class="calculator">
    <div class="display"> {{content || '--'}} </div>
    <div class="calcbtn edits" id="clear">C</div>
    <div class="calcbtn edits" id="answer">ANS</div>
    <div class="calcbtn edits" id="delete">DEL</div>
    <div class="calcbtn operation"  id="pluss">+</div>
    <div class="calcbtn" id="siffer1">1</div>
    <div class="calcbtn" id="siffer2">2</div>
    <div class="calcbtn" id="siffer3">3</div>
    <div class="calcbtn operation" id="minus">-</div>
    <div class="calcbtn" id="siffer4">4</div>
    <div class="calcbtn" id="siffer5">5</div>
    <div class="calcbtn" id="siffer6">6</div>
    <div class="calcbtn operation" id="multiply">x</div>
    <div class="calcbtn" id="siffer7">7</div>
    <div class="calcbtn" id="siffer8">8</div>
    <div class="calcbtn" id="siffer9">9</div>
    <div class="calcbtn operation" id="devide">÷</div>
    <div class="calcbtn" id="siffer0">0</div>
    <div class="calcbtn" id="comma">,</div>
    <div class="calcbtn equ" id="equals">=</div>

  </div>
</template>

<script>
export default {
  name: "Calculator",
  data(){
    return {
      content: ''
    }
  }
}


</script>


<style scoped>
.calculator{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(50px, auto);
  font-size: 50px;
  border: 2px solid black;
  border-radius: 25px;
  margin: 0 auto;
  text-align: justify-all;

  /*
    TODO Få tekst til å være i center
   */

}
.display{
  grid-column: 1/5;
  background-color: #ffff8f;
  color: #7a4579;
  min-height: 100px;
  border-top-left-radius:25px;
  border-top-right-radius:25px;

  /*
  TODO Få min-height til å være dynamisk
   */
}

.calcbtn{
  background-color: #ec9e69;
  border: 1px solid ;

}

.operation{
  background-color: #d56073;
}

.equ{
  background-color: #7a4579;
  color: #ffff8f;
  border-bottom-right-radius: 25px;
}

.edits{
  background-color: #e78f4b;
  font-size: 40px;
}

#siffer0{
  grid-column: 1/3;
  border-bottom-left-radius: 25px;
}

</style>
