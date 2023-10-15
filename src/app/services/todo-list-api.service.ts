

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITodo } from '../model/Itodo';

@Injectable({
  providedIn: 'root'
})

export class TodoListAPIService {

  private readonly apiBaseUrl = 'https://6523c967ea560a22a4e8d725.mockapi.io/todos'; 

  
  constructor(private httpClient: HttpClient) { }

  
  getTodoList(): Observable<ITodo[]> {
    return this.httpClient.get<ITodo[]>(this.apiBaseUrl);
  }
  
  createTodo(todo:ITodo):Observable<ITodo>{
      return this.httpClient.post<ITodo>(this.apiBaseUrl, {userName:todo.userName,todoText:todo.todoText});
  }

  updateTodo(todo:ITodo):Observable<ITodo>{
   const body ={userName:todo.userName,todoText:todo.todoText};
    return this.httpClient.put<ITodo>(this.apiBaseUrl+"/"+todo.id, body);
  }

  deleteTodo(id:number):Observable<any>{
    return this.httpClient.delete<any>(this.apiBaseUrl+"/"+id);
  }
}
