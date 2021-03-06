import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.sass'],
})
export class ShoppingEditComponent implements OnInit {
@ViewChild('nameInput', {static: false})nameInputRef : ElementRef;
@ViewChild('amountInput', {static: false})amountInputRef : ElementRef;
result : any
  constructor(private http: HttpClient , private slistService : ShoppingListService) {
  

  }

  ngOnInit(): void {
   
    
  }
 
  
  onAddItem(){
const Iname = this.nameInputRef.nativeElement.value;
const Iamount = this.amountInputRef.nativeElement.value;
const newIngredient = new Ingredient(Iname, Iamount);
this.slistService.onAddIngredient(newIngredient);
// window.localStorage.setItem("ingredient",newIngredient.name);

  }

  onClick(){
     
  
    
    console.log(this.result);
    var blob = new Blob([this.result], { type: 'application/pdf' });
    let url = window.URL.createObjectURL(blob);
    let a = document.createElement('a');
    document.body.appendChild(a);
    a.setAttribute('style', 'display: none');
    a.href = url;
    a.download = "File";
    a.click();
    window.URL.revokeObjectURL(url);
    a.remove();
    
  }
  
}
