
class TimerStore {
    // initialize your state 
    constructor(initialState) {
        this.timerObj = initialState;
    }

    // set state 
    setState(state) {
        console.log("we are in the set state function and we have passed in: ", state)
        this.timerObj = state;
    }

    // get state 
    getState() {
        return this.timerObj;
    }
}

const timerStore = new TimerStore({});
export default timerStore;


////////



