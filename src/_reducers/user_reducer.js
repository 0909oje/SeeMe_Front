import { COVID_MAIN } from "../_actions/type";

export default function user(state={},action){
    switch (action.type){
        case COVID_MAIN:
            return {
                ...state,
                loginSuccess:action.payload
            };
            break;

        default:
            return state;
    }
}

// const initialState=[

// ];

// export default function todos(state = initialState, action){
//     switch(action.type){
//         case ADD_TODO:
//             return state.concat(action.todo);
//         case TOGGLE_TODO:
//             return state.map(
//                 todo =>
//                     todo.id === action.id
//                     ? {...todo, done: !todo.done}
//                     : todo
//             );
//         default:
//             return state;
//     }
// }