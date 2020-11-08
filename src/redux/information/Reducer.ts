import { Info } from '../../constant/Information'
import { DeleteInfoAction, InformationActionTypes, SetInfoAction, UpdateInfoAction } from './Action'

export type InformationState = {
  infos: Info[]
}

type InformationAction = UpdateInfoAction | SetInfoAction | DeleteInfoAction

const initState = {
  infos: [],
}

export const informationReducer = (
  state: InformationState = initState,
  action: InformationAction
): InformationState => {
  switch (action.type) {
    case InformationActionTypes.UpdateInfo: {
      const cloneInfos = [...state.infos]
      const infoIndex = cloneInfos.findIndex(info => info.id === action.payload.id)

      if (infoIndex !== -1) {
        cloneInfos[infoIndex] = action.payload

        localStorage.setItem('Infos', JSON.stringify(cloneInfos))
        return {
          ...state,
          infos: cloneInfos,
        }
      }

      localStorage.setItem('Infos', JSON.stringify([...state.infos, action.payload]))
      return {
        ...state,
        infos: [...state.infos, action.payload],
      }
    }
    case InformationActionTypes.SetInfo: {
      return {
        ...state,
        infos: action.payload,
      }
    }
    case InformationActionTypes.DeleteInfo: {
      const cloneInfos = [...state.infos]
      const indexById = cloneInfos.findIndex(info => info.id === action.payload)
      cloneInfos.splice(indexById, 1)

      localStorage.setItem('Infos', JSON.stringify(cloneInfos))
      return {
        ...state,
        infos: cloneInfos,
      }
    }
    default:
      return state
  }
}
