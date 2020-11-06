import { InformationActionTypes, UpdateFirstNameAction } from './Action'

type Information = {
  firstName: string
  lastName: string
}

type State = {
  information: Information[]
}

const initState = {} as State

export const informationReducer = (state = initState, action: UpdateFirstNameAction): State => {
  switch (action.type) {
    case InformationActionTypes.UpdateFirstName: {
      return {
        ...state,
      }
    }
    default:
      return state
  }
}
