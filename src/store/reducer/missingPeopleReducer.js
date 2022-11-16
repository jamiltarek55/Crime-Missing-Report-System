
const InitalState = {
    missingPeople: [],
};

const MissingPeopleReducer = (state = InitalState, action) => {
    switch (action.type) {
        case "find":
            return Object.assign(state, { missingPeople: action.value})

        default:
            return state;    
    } 
}
export default MissingPeopleReducer
