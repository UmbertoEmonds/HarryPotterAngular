import { Wand } from './Wand';

export interface Student {
    actor: string
    alive: boolean
    ancestry: string
    dateOfBirth: string
    eyeColour: string
    gender: string
    hairColour: string
    hogwartsStaff: boolean
    hogwartsStudent: boolean
    house: string
    image: string
    name: string
    patronus: string
    species: string
    wand: Wand
    yearOfBirth: string
}