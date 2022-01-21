import { Component, OnInit } from '@angular/core';
import { CorporateLeaderService } from '../Services/corporate-leader.service';
import { CorporateLeader } from '../Models/CorporateLeader';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  constructor(private corporateLeaderService:CorporateLeaderService) { }

  CorporateLeaders!:CorporateLeader[];
  ngOnInit(): void 
  {
    debugger;
      this.CorporateLeaders=this.corporateLeaderService.getCorporateLeaders();
  }

}
