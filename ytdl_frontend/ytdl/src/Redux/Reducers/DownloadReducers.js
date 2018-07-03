const initialState = {
    data : 0
}

export default function DownloadReducer(state = initialState, action){
    switch(action.type){
        case 'test':
            return {
                ...state,
                data: state.data + 1
            }

        default:
            return state
        }
    }