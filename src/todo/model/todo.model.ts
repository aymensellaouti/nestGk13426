
export enum TodoStatusEnum {
    'actif' = "En cours",  
    'waiting' = "En attente",  
    'done' = "Finalisé"
}
export class Todo {
    constructor(
        public id: number = 0,
        public name: string = '',
        public description: string = '',
        public status: TodoStatusEnum = TodoStatusEnum.waiting,
        public createdAt: Date = new Date()
    ) {}
}