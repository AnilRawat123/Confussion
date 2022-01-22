import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoginComponent } from 'src/app/login/login.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private dialog:MatDialog ) { }

  ngOnInit(): void {
  }
  openLoginForm() {
    this.dialog.open(LoginComponent, {width: '500px', height: '450px'});
  }
}
