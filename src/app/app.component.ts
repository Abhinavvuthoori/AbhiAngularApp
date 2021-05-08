import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
   /*nameOfCourse:string="Angular";
   version:number=11;
   instructor:string="Rajesh";
  
   data:string;
   sendData(d){
     this.data=d;
   }*/

  /* status:boolean=true;

   changeStatus(){
     this.status=!this.status;
   }

   todoItems:string[]=[];

   sendItem(item){
      this.todoItems.push(item);
   }*/

 /*  
  todoItems:string[]=[];
  

  //to add item
  addItem(item){
    //push item into array
    this.todoItems.push(item);
    
   
  }

  //to delete item
  deleteItem(index){
      this.todoItems.splice(index,1)
  }
  */
/*
  item:string;

  todoItems:string[]=[];
  

  //to add item
  addItem(){
      //push item into array
    this.todoItems.push(this.item);
    this.item='';
   
  }

  //to delete item
  deleteItem(index){
      this.todoItems.splice(index,1)
  }
  */

  users=[];

 
  addUserData(ref){

    let userObj=ref.value;
    
    //push into users array
    this.users.push(userObj)

    //clear form flields
    ref.reset();
  }

  deleteItem(ind){
    this.users.splice(ind,1)
  };

}





