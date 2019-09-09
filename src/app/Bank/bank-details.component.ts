import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bank-details',
  templateUrl: './bank-details.component.html',
  styleUrls: ['./bank-details.component.css']
})
export class BankDetailsComponent implements OnInit {
  public show:boolean = false;
  public hide:boolean = false;
  public buttonName:any = "Show Name";
  public buttonAcc:any = "Show Account No.";
  public Bankers: any[] =
  [
    {
      name: 'Ross Eustace Geller',
      acct: '25415142151452'
    },
    {
      name: 'Monica Geller',
      acct: '21255265412225'
    },
    {
      name: 'Phoebe Buffay',
      acct: '25469248545553'
    },
    {
      name: 'Chandler Muriel Bing',
      acct: '25648541548565'
    },
    {
      name: 'Joey Tribbiani',
      acct: '15246958745253'
    },
    {
      name: 'Rachel Karen Green',
      acct: '75654262542625'
    },
  ];

  constructor() {}

  ngOnInit() {
    
  }
  toggleName() {
    this.show = !this.show;
    if(this.show)  
      this.buttonName = "Hide Name";
    else
      this.buttonName = "Show Name";
  }
  toggleAccNo() {
    this.hide = !this.hide;
    if(this.hide)  
      this.buttonAcc = "Hide Account No.";
    else
      this.buttonAcc = "Show Account No.";
  }
}
