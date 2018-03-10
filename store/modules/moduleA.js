export default {
    namespaced: true,
    state: {
        numbers: [1,23,123,52,13,42,13]
    },
    getters: {
        even(state){
            return state.numbers.filter(number => number%2 == 0);
        }
    }
}