export default store => {
    store.subscribe((mutation,state) => {
        alert(`mutation type(data oringined from plugin): ${mutation.type}`);
    })
}