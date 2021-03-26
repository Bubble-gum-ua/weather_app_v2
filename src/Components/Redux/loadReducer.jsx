const IS_LOADING = "IS_LOADING";

const initialState = {
    isLoading: false
}

export const loadReducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_LOADING:{
            return {...state, isLoading: action.isLoading}
        }
        default:{
            return state
        }
    }
}

export const toggleIsLoading = (isLoading) => ({type: IS_LOADING, isLoading})