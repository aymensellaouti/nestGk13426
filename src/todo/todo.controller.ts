import { Body, Controller, Get, Header, Headers, Ip, Param, Post, Query, Req } from '@nestjs/common';
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
    addTodo(
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
        return 'Add Todo'
    }
}
