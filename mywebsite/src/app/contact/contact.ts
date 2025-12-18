import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnDestroy,
  OnInit
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css'],
})
export class Contact implements
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  nameInput = '';
  emailInput = '';
  subjectInput = '';
  messageInput = '';

  buttonColor: string = 'green';
  private colorInterval: any;

  messages: any[] = [];
  editIndex: number | null = null;

  constructor() {
    console.log('Constructor called');
  }

  ngOnInit(): void {
    console.log('ngOnInit called');
    this.startColorChange(); // 🔑 start color change automatically
  }

  ngDoCheck(): void 
  { 
    console.log('ngDoCheck called');
  }
  ngAfterContentInit(): void 
  { 
    console.log('ngAfterContentInit called'); 
  }
  ngAfterContentChecked(): void 
  { 
    console.log('ngAfterContentChecked called'); 
  }
  ngAfterViewInit(): void 
  { 
    console.log('ngAfterViewInit called'); 
  }
  ngAfterViewChecked(): void 
  { 
    console.log('ngAfterViewChecked called'); 
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy called');
    clearInterval(this.colorInterval);
  }


  startColorChange(): void {
    this.colorInterval = setInterval(() => {
      this.buttonColor = this.buttonColor === 'green' ? 'orange' : 'green';
    }, 3000);
  }

  // Add / Update message
  add() {
    if (this.editIndex === null) {
      this.messages.push({
        name: this.nameInput,
        email: this.emailInput,
        subject: this.subjectInput,
        message: this.messageInput
      });
    } else {
      this.messages[this.editIndex] = {
        name: this.nameInput,
        email: this.emailInput,
        subject: this.subjectInput,
        message: this.messageInput
      };
      this.editIndex = null;
    }

    // Clear form
    this.nameInput = '';
    this.emailInput = '';
    this.subjectInput = '';
    this.messageInput = '';
  }

  edit(index: number) {
    this.nameInput = this.messages[index].name;
    this.emailInput = this.messages[index].email;
    this.subjectInput = this.messages[index].subject;
    this.messageInput = this.messages[index].message;
    this.editIndex = index;
  }

  delete(index: number) {
    this.messages.splice(index, 1);
  }
}
