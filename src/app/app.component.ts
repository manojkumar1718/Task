import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header/header.component";
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';





@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, TasksComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId='u1';

  get selectedUser(){
    return this.users.find((user) => user.id === this.selectedUserId)!;
  }

  onSelectUser(id: string){
    this.selectedUserId = id;
  }

 constructor(private http : HttpClient){

 }

data:any;

 getData(){
  this.http.get('https://fakestoreapi.com/products?limit=5')
  .subscribe((data)=>{
    
    this.data = data
  })
 }
}
