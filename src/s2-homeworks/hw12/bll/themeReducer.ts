const initState = {
    themeId: 1,
}

type StateType = typeof initState
type ActionType = ChangeThemeIdActionType

export const themeReducer = (state = initState, action: ActionType): StateType => {
    switch (action.type) {
        case 'SET_THEME_ID':
            return { ...state, themeId: action.id }

        default:
            return state
    }
}

export type ChangeThemeIdActionType = { type: 'SET_THEME_ID', id: number }
export const changeThemeId = (id: number): ChangeThemeIdActionType => ({ type: 'SET_THEME_ID', id }) // fix any
