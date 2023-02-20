import { createStore } from 'vuex'
import ContactService from "@/services/ContactService";

export default createStore({
    
    state: {
        logs:{
            equations: [],
        },
    },

    getters: {
        getLogEquation(state){
            return state.logs.equations
        }
    },
    /*
    mutations updates the state
     */
    mutations: {
        SET_EQUATION(state,equation){
            state.logs.equations.push(equation);
        },
        CLEAR_LOGG(state){
            state.logs.equations = []
        },
    },
/*
actions calls mutations
 */
    /*
    TODO: add action in store that stores forms information if the form is not submitted
     */
    actions: {
        createEquationList({ commit }, list){
            return commit('SET_EQUATION', list)
        },

        fetchEquations(context) {

            context.commit('SET_EQUATION', )
        },
        submitFeedback({ commit }, feedback) {

            ContactService.postFeedback(feedback)
                .then(function(response) {
                    console.log('Response', response)
                })
                .catch(function(error) {
                    console.log('Error', error)
                })

        }
    },
})