
export enum TodoStatusEnum {
    'actif' = "En cours",  
    'waiting' = "En attente",  
    'done' = "Finalisé"
}
export class Todo {
    constructor(
        public id: number = 0,
        public name: string = ''
    ) {}
}