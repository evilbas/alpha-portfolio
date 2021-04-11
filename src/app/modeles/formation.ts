import { Competence } from "./competence";

export interface Formation {
    idFormation: number
    nomFormation: string
    annee: Date
    description: string
    institut: number
    autonomie: boolean
    niveauFormation: String
    idProfil: number

    competences: Competence[]
}
