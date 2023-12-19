const initialState = {
    isLoading: false,
};

const loaderReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_LOADER_ACTIVE':
            return {
                ...state,
                isLoading: action.payload,
            };
        default:
            return state;
    }
};

export default loaderReducer;