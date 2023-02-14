import { createStore} from 'vuex'

export default createStore({
    /*
    TODO få logg.vue til å snakke med calculator på ønskelig måte, og få loggen til å printe ut en array med strings
     */
    
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
    actions: {
        createEquationList({ commit }, list){
            return commit('SET_EQUATION', list)
        },

        fetchEquations(context) {

            axios.get('/api/calculator')
            context.commit('SET_EQUATION', )
        }
    },
})