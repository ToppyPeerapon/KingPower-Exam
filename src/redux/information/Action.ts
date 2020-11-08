import { Info } from '../../constant/Information'

export enum InformationActionTypes {
  UpdateInfo = 'UPDATE_INFO',
  SetInfo = 'SET_INFO',
  DeleteInfo = 'DELETE_INFO',
}

export type UpdateInfoAction = {
  type: InformationActionTypes.UpdateInfo
  payload: Info
}

export type SetInfoAction = {
  type: InformationActionTypes.SetInfo
  payload: Info[]
}

export type DeleteInfoAction = {
  type: InformationActionTypes.DeleteInfo
  payload: Info['id']
}

export const updateInfo = (payload: Info): UpdateInfoAction => {
  return {
    type: InformationActionTypes.UpdateInfo,
    payload,
  }
}

export const setInfo = (payload: Info[]): SetInfoAction => {
  return {
    type: InformationActionTypes.SetInfo,
    payload,
  }
}

export const deleteInfo = (payload: Info['id']): DeleteInfoAction => {
  return {
    type: InformationActionTypes.DeleteInfo,
    payload,
  }
}
