import { findAllByAltText } from '@testing-library/react'
import { Info } from '../../constant/Information'
import { InformationState } from './Reducer'

export const _getState = (state: InformationState): InformationState => state

export const getInformation = (state: InformationState): Info[] => state.infos
