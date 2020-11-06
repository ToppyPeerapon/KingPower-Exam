export enum InformationActionTypes {
  UpdateFirstName = 'UPDATE_FIRST_NAME',
}

export type UpdateFirstNameAction = {
  type: InformationActionTypes.UpdateFirstName
  payload: string
}

export const updateFirstName = (payload: string): UpdateFirstNameAction => {
  return {
    type: InformationActionTypes.UpdateFirstName,
    payload,
  }
}
