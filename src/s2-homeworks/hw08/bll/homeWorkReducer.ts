import { UserType } from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => {
    switch (action.type) {
        case 'sort': { // by name
            let newState = [...state]

            newState.sort((u1, u2) => {
                if (u1.name > u2.name)
                    return action.payload === 'up' ? 1 : -1
                else
                    return action.payload === 'up' ? -1 : 1
            })

            return newState
        }
        case 'check': {

            return state.filter(el => el.age >= action.payload)
        }
        default:
            return state
    }
}
