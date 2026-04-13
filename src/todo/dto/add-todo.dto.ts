export class AddTodoDto {
    constructor(
        public name: string = '',
        public description: string = '',
    ) {}
}