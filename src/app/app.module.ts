import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; //For 2-way binding
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateCustomerComponent } from './customer/create-customer.component';
import { ListCustomersComponent } from './customer/list-customers.component';
import { CustomerMainComponent } from './customer/customer-main.component';
import { DatetimeComponent } from './Datetime/datetime.component';
import { EnumComponent } from './Enum/enum.component';
import { BankDetailsComponent } from './Bank/bank-details.component';
import { AnimalDisplayComponent } from './Animals/animal-display.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateCustomerComponent,
    ListCustomersComponent,
    CustomerMainComponent,
    DatetimeComponent,
    EnumComponent,
    BankDetailsComponent,
    AnimalDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
