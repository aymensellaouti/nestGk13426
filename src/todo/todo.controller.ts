import { Body, Controller, Delete, Get, Headers, Ip, NotFoundException, Param, Post, Query, Req } from '@nestjs/common';
import { Todo, TodoStatusEnum } from './model/todo.model';
import { Request } from 'express';
import { AddTodoDto } from './dto/add-todo.dto';

@Controller('todo')
export class TodoController {
    todos: Todo[] = [
        new Todo(1, 'Apprendre NestJs', 'NestJs est génial :D', TodoStatusEnum.done),
        new Todo(2, 'Apprendre Angular', "Angular l'est encore plus :D"),
    ]

    @Get()
    getTodos(@Req() request: Request): Todo[] {
        //console.log(request);
        
        return this.todos;
    }
    
    @Get(':id')
    getTodo(
        @Param('id') id: number
    ): Todo {
        const todo = this.todos.find(todo => todo.id == id);
        if (!todo) {
            throw new NotFoundException(`Le todo d'id ${id} n'existe pas !!`);
        }
        return todo;
    }
    @Delete(':id')
    deleteTodo(
        @Param('id') id: number
    ): {count: number} {
        const index = this.todos.findIndex(todo => todo.id == id);
        if (index == -1) {
            throw new NotFoundException(`Le todo d'id ${id} n'existe pas !!`);
        }
        this.todos.splice(index, 1);
        return {count: 1};
    }

    @Post(':id')
    getReqInfoExample(
        @Body("message") message,
        @Param() param,
        @Query() query,
        @Headers() headers,
        @Ip() ip
    ) {
        console.log(message);
        console.log(param);
        console.log(query);
        console.log(headers);
        console.log(ip);
        //throw new NotFoundException('')
        return 'Add Todo'
    }
    @Post()
    addTodo(
        @Body() todoDto: AddTodoDto
    ): Todo {
        let id = 0;
        if (this.todos.length == 0) {
            id = 1;            
        } else {
            id = this.todos[this.todos.length - 1].id + 1;
        }
        const newTodo = new Todo(id, todoDto.name, todoDto.description);
        this.todos.push(newTodo);
        return newTodo;
    }
    /**
     * A faire: 
     * 1- Fonction pour ajouter un Todo
     * push();
     * 2- Fonction pour récupérer un todo via son id
     * find(element => cndPourTrouverLelement)
     * 3- Fonction pour supprimer un todo
     * splice
     * Remarque pour déclancher une erreur de type 404
     * faite un throw d'une instance de type NoteFoundException
     */
}
