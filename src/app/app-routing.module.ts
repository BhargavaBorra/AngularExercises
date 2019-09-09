import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importing the required components so they can be referenced in routes
import { CreateCustomerComponent } from './customer/create-customer.component';
import { ListCustomersComponent } from './customer/list-customers.component';
import { DatetimeComponent } from './Datetime/datetime.component';
import { CustomerMainComponent } from './customer/customer-main.component';
import { EnumComponent } from './Enum/enum.component'
import { BankDetailsComponent } from './Bank/bank-details.component';
import { AnimalDisplayComponent } from './Animals/animal-display.component';

const routes: Routes = [
  { path: 'Customer', component: CustomerMainComponent,
    children: [
      { path: 'list', component: ListCustomersComponent },
      { path: 'create', component: CreateCustomerComponent }] 
  },
  { path: 'DateTime', component: DatetimeComponent },
  { path: 'Enum', component: EnumComponent },
  { path: 'Bank', component: BankDetailsComponent },
  { path: 'Animal', component: AnimalDisplayComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
