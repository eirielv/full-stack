<template>
  <form @submit ="submit" >
    <fieldset class="theform">
      <legend>Contact form</legend>
      <BaseInput
          v-model="name"
          label="Name:"
          type="text"
          id="name-field"
          :error="errors.name"

      />

      <BaseInput
          v-model="email"
          label="Email:"
          type="email"
          class="email"
          id="email"
          :error="errors.email"
      />

    <BaseInput
        v-model="message"
        label="Feedback:"
        type="textarea"
        id="feedback"
        :error="errors.message"
    />
    </fieldset>

    <button type="submit" id="submittbutt">Submit</button>
  </form>


</template>

<script>
    import BaseInput from "@/components/BaseInput.vue";
    import { useStore } from 'vuex';
    import { useField, useForm } from 'vee-validate';
    export default {
      name: "ContactForm",
      components: {BaseInput},
      data(){
        return {
          feedbackInfo: {
            'name': '',
            'email': '',
            'message': ''
          },
        }
      },

      methods: {

      },
      setup() {
        const validations = {
          name: value => {
            if (!value) return 'This field is required'
            //TODO: fix this regex
            const nameRegex = /[a-zA-Z]/
            if(!nameRegex.test(String(value).toLowerCase())) {
              return 'Name is invalid. It cannot contain numbers or special characters.'
            }
            return true
          },
          email: value => {
            if (!value) return 'This field is required';
            const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            if (!emailRegex.test(String(value).toLowerCase())) {
              return 'Email address is invalid!'
            }
            return true
          },
          message: value => {
            return !value.trim() ? 'A feedback message has to be entered.' : true
          }
        }

        const store = useStore()
        const { handleSubmit, errors } = useForm({
          validationSchema: validations,
          initialValues: {
            name: '',
            email: '',
            message: ''
          }
        })
        const { value: name} = useField('name')
        const { value: email, handleChange} = useField('email')
        const { value: message} = useField('message')
        const submit = handleSubmit(values => {
          store.dispatch('submitFeedback', values)
          values.feedback = '';
          alert("good")
        })
        return {
          submit,
          name,
          email,
          message,
          errors,
          handleChange
        }


      }

    }

</script>

<style scoped>
  fieldset {
    border: 0;

  }
  .theform{
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr ;
  }

  #submittbutt {

    display: inline-block;
    outline: none;
    cursor: pointer;
    font-size: 14px;
    line-height: 1;
    border-radius: 500px;
    transition-property: background-color, border-color, color, box-shadow, filter;
    transition-duration: .3s;
    border: 1px solid #7a4579;
    letter-spacing: 2px;
    min-width: 160px;
    text-transform: uppercase;
    white-space: normal;
    font-weight: 700;
    text-align: center;
    padding: 16px 14px 18px;
    color: black;
    box-shadow: inset 0 0 0 2px #7a4579;;
    background-color: rgba(234, 160, 109, 0.89);
    height: 48px;
  }
  #submittbutt:hover{
      color: #ffff8f;
      background-color: #7a4579;
    }

</style>