import { createStore} from "redux";


const InitialState = {
    email: "",
    password: ""
}

function dados(state  = InitialState, action) {
    switch (action.type) {
        case "DADOS_LOGIN":
            return {
                ...state,
                email: action.email,
                password: action.password
            }
        default:
            return state;
    }
}

const store = createStore(
    dados,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;