const initState = {
    isLoading: false,
}

type StateType = typeof initState

export const loadingReducer = (state = initState, action: ActionType): StateType => { 
    switch (action.type) {
        case 'CHANGE_LOADING':
            return {
                ...state,
                isLoading: action.isLoading,
            }

        default:
            return state
    }
}

type ActionType = LoadingActionType

export type LoadingActionType = ReturnType<typeof loadingAC>
export const loadingAC = (isLoading: boolean) => ({
    type: 'CHANGE_LOADING',
    isLoading,
}) as const