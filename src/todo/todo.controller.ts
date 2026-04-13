import { Body, Controller, Get, Header, Headers, Ip, NotFoundException, Param, Post, Query, Req } from '@nestjs/common';
import { Todo, TodoStatusEnum } from './model/todo.model';
import { Request } from 'express';

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

    /**
     * A faire: 
     * 1- Fonction pour ajouter un Todo
     * 2- Fonction pour récupérer un todo via son id
     * 3- Fonction pour supprimer un todo
     * Remarque pour déclancher une erreur de type 404
     * faite un throw d'une instance de type NoteFoundException
     */
}
