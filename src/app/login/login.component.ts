import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 //user = {username: '', password: '', remember: false};
 user={username:'',password:'',remember:false};
  constructor(private diologref:MatDialogRef<LoginComponent>) { }

  ngOnInit(): void {
  }
  onSubmit() {
    console.log('User: ', this.user);
    this.diologref.close();
  }

  
}
