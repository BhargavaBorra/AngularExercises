import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Country } from '../RegForm/Place';
import { Clock } from '../Datetime';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public countryList: Country[] 
  state: Array<any>;
  changeCountry(count: string) {
    this.state = this.countryList.find(con => con.countryname == count).state;
    this.changestate(this.state[0]);
  }
  changestate(temp: string){
    this.profileForm.controls['address'].value.state=temp;
  }

  number(event: { which: any; keyCode: any; }): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: ['Hamburg'],
      country:['Germany'],
      zip: ['']
    }),
  });
  datetime=new Clock(new Date());
  DatetimeString: String=this.datetime.DateTime();
  constructor(private fb: FormBuilder) { }

  onSubmit() {
    console.log(this.profileForm.value);
    console.log("Form Status: "+this.profileForm.status);
  }
  
  ngOnInit() {
    this.countryList= [
      { countryname: 'Germany', state: ['Hamburg','Hesse','Saxony','Thuringia'] },
      { countryname: 'Spain', state: ['Albacete','Barcelona','Madrid'] },
      { countryname: 'USA', state: ['California','Los Angeles','Hawaii','Michigan'] },
      { countryname: 'Mexico', state: ['Puebla','Mexico City','Sinaloa'] },
      { countryname: 'China', state: ['Beijing','HongKong','Macau','Shanghai'] },
    ];
    console.log("Form Status: "+this.profileForm.status);
    this.changeCountry('Germany');
    console.log("ngOnInit implemented at "+this.DatetimeString);
  }

}
