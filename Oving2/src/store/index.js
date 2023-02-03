import { createStore} from 'vuex'

export default createStore({
    /*
    TODO få logg.vue til å snakke med calculator på ønskelig måte, og få loggen til å printe ut en array med strings
     */
    
    state: {
        equations: [],
        endOfEquation: false,
    },
    /*
    mutations updates the state
     */
    mutations: {
        SET_EQUATION(state, equation){
            state.equations.push(equation);
        },
        CHANGE_END_OF_EQUATION(state, bool){
            state.endOfEquation = bool;

        }
    },
/*
actions calls mutations
 */
    actions: {
        createEquationList({ commit }, list){
            if(state.endOfEquation === true){
                commit('SET_EQUATION', list)
            }

        },
        setBool({ commit }, bool){
            commit('CHANGE_END_OF_EQUATION', bool)
        },

        fetchEquations(context) {

            axios.get('/api/calculator')
            context.commit('SET_EQUATION', )
        }
    },
    getters: {

    }

})