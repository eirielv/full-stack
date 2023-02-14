
<template>
  <div class="calculator">
    <div class="display">
      <p id="displayContent">
        {{content || '--'}}
      </p>
    </div>

    <!--<button class="edits" @click = clear() id="clear">C</button>-->
    <button class="calcbtn edits" @click = "clear()" id="clear">C</button>
    <button class="calcbtn edits" @click = "getAnswer()" id="answer">ANS</button>
    <button class="calcbtn edits" @click = "del()" id="delete">DEL</button>
    <button class="calcbtn operation" @click="add()" id="pluss">+</button>
    <button class="calcbtn" @click ="append('1')" id="siffer1">1</button>
    <button class="calcbtn" @click ="append('2')" id="siffer2">2</button>
    <button class="calcbtn" @click ="append('3')" id="siffer3">3</button>
    <button class="calcbtn operation" @click="minus()" id="minus">-</button>
    <button class="calcbtn" @click ="append('4')" id="siffer4">4</button>
    <button class="calcbtn" @click ="append('5')" id="siffer5">5</button>
    <button class="calcbtn" @click ="append('6')" id="siffer6">6</button>
    <button class="calcbtn operation" @click="multiply()" id="multiply">x</button>
    <button class="calcbtn" @click ="append('7')" id="siffer7">7</button>
    <button class="calcbtn" @click ="append('8')" id="siffer8">8</button>
    <button class="calcbtn" @click ="append('9')" id="siffer9">9</button>
    <button class="calcbtn operation" @click="divide()" id="devide">÷</button>
    <button class="calcbtn" @click ="append('0')" id="siffer0">0</button>
    <button class="calcbtn" @click ="comma" id="comma">,</button>
    <button class="calcbtn equ" @click="submit()" id="equals">=</button>

  </div>
</template>

<script>
export default {
  name: "Calculator",
  data(){
    return {
      input: null,
      content: '',
      answer: null,
      operator: null,
      operatorClicked: false,
      eqution: [],

    }
  },

  methods: {
    clear() {
      this.content = '';
      this.input = null;
      this.operator = null;
      this.operatorClicked = false;
      this.eqution = [];
    },

    getAnswer(){
      this.content = this.answer;
      //this.equationString(this.content);
      this.equationString('ANS');
    },

    del(){
      if(this.content !== this.answer){
        let contentLength = this.content.length;
        this.content.at(-1)
        this.content = this.content.substring(0,contentLength - 1)
      }

    },

    error(){
      let storeCont = this.content
      this.content = '--ERROR--'

      setTimeout(function (){
        console.log(1)
      }, 1000,this.content = '--ERROR--', this.content = storeCont);

      this.content = storeCont;
    },

    append(number) {
      if(this.operatorClicked){
        this.input = this.content;
        this.content ='';
        this.operatorClicked = false;
      }

      this.content = `${this.content}${number}`;
      this.equationString(this.content);
    },

    comma(){
      if (this.content.indexOf(',') === -1){
        this.append(',')
      }
      else{
        this.error()
      }

    },
    multiply(){
      if(this.operator !== null){
        this.equal()
      }
      this.operatorClicked = true;
      this.operator = (a, b) => a * b;
      this.input = this.content
      this.equationString('x')
    },
    divide(){
      if(this.operator !== null){
        this.equal()
      }
      this.operatorClicked = true;
      this.operator = (a, b) => a / b;
      this.input = this.content
      this.equationString('÷')
    },
    minus() {
      if(this.operator !== null){
        this.equal()
      }
      this.operatorClicked = true;
      this.operator = (a, b) => a - b;
      this.input = this.content
      this.equationString('-')

    },
    add(){
      if(this.operator !== null){
        this.equal()
      }
      this.operatorClicked = true;
      this.operator = (a, b) => a + b;
      this.input = this.content
      this.equationString('+')
    },
    equal(){
      this.content = `${this.operator(parseFloat(this.input), parseFloat(this.content))}`;
      this.input = null;
      this.answer = this.content
    },
    equationString(equ){
      this.eqution.push(equ)
    },

    submit() {
      let stringWord = ''
      let tempString = ''

      this.content = `${this.operator(parseFloat(this.input), parseFloat(this.content))}`;
      this.input = null;
      this.answer = this.content;
      this.equationString(`= ${this.content}`);

      for(let i = 0; i <= this.eqution.length -1; i++) {
        tempString = stringWord
        stringWord = `${tempString} ${this.eqution[i]}`;
      }
      if(stringWord !== ''){
        this.$store.dispatch('createEquationList', stringWord)
      }
      this.eqution = [];
    },
  }
}


</script>


<style scoped>

/*
  button{
    background: #ededed;
    border: 1px solid #ccc;
    padding: 10px 30px;
    cursor: pointer;
  }

  button:focus{
    background: #e5e5e5;
    outline: none;
    -webkit-box-shadow: inset 0 0 5px #c1c1c1;
    -moz-box-shadow: inset 0 0 5px #c1c1c1;
    box-shadow: inset 0 0 5px #c1c1c1;
  }
  /*
 */

  /*
  ---KLASSER---
   */

  .calculator{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: minmax(50px, auto);
    font-size: 50px;
    border: 2px solid black;
    border-radius: 25px;
    margin: 0 auto;
    box-shadow: 7px 6px 28px 1px rgba(0,0,0,0.24);

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
    padding-left: 10px;

    /*
    TODO Få min-height til å være dynamisk
     */
  }
  /*
  --Alle knappene--
   */
  .calcbtn{
    background-color: rgba(234, 160, 109, 0.89);
    border: 1px solid ;
    text-align: center;
    box-shadow: 7px 6px 28px 1px rgba(0,0,0,0.24);
    cursor: pointer;
    transition: 0.2s all;
    font-size: 50px;
  }


  /*
  Alle operasjoner
   */
  .operation{
    background-color: #d56073;
  }
.operation:focus{
  transform: scale(0.90);
  box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 24);
}
  /*
  Erlik knappen
   */
  .equ{
    background-color: #7a4579;
    color: #ffff8f;
    border-bottom-right-radius: 25px;
  }
  /*
  Knapper tilhørende endringer
   */
  .edits{
    background-color: #e78f4b;
    font-size: 40px;
  }
  /*
  ---ID---
   */

  /*
  0 knappen
   */
  #siffer0{
    grid-column: 1/3;
    border-bottom-left-radius: 25px;
  }
</style>
