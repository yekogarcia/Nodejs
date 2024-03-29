// export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'stormy'
// export type Visiblity = 'great' | 'good' | 'ok' | 'poor'

import { Visiblity, Weather } from './enums'

export interface DiaryEntry {
  id: number
  date: string
  weather: Weather
  visibility: Visiblity
  comment: string
};

// export type NonSensitiveInfoDiaryEntry = Pick<DiaryEntry, 'id' | 'date' | 'weather' | 'visibility'>
export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment'>

export type newDiaryEntry = Omit<DiaryEntry, 'id'>
