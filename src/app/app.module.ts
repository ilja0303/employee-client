import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { DeleteEmployeeComponent } from './components/delete-employee/delete-employee.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';
import {MatTableModule} from "@angular/material/table";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {HttpClientModule} from "@angular/common/http";
import {MatDialogModule} from "@angular/material/dialog";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatNativeDateModule} from "@angular/material/core";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatListModule} from "@angular/material/list";
import {MatSortModule} from "@angular/material/sort";
import {MatSelectModule} from '@angular/material/select';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import {MatCardModule} from "@angular/material/card";
import { TableComponent } from './components/table/table.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import { SnackBarComponent } from './components/snack-bar/snack-bar.component';
import { UserTableComponent } from './components/user-table/user-table.component';
import {MatChipsModule} from "@angular/material/chips";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import { VastusedComponent } from './components/vastused/vastused.component';
import {MatPaginatorModule} from "@angular/material/paginator";
import { AddHighlightComponent } from './components/add-highlight/add-highlight.component';

@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent,
    DeleteEmployeeComponent,
    EditEmployeeComponent,
    LoginComponent,
    RegistrationComponent,
    TableComponent,
    ChangePasswordComponent,
    VerifyEmailComponent,
    SnackBarComponent,
    UserTableComponent,
    VastusedComponent,
    AddHighlightComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatTableModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        HttpClientModule,
        MatDialogModule,
        MatInputModule,
        FormsModule,
        MatDatepickerModule,
        MatNativeDateModule,
        ReactiveFormsModule,
        MatListModule,
        MatSortModule,
        MatSelectModule,
        MatCardModule,
        MatSnackBarModule,
        MatChipsModule,
        MatAutocompleteModule,
        MatPaginatorModule,

    ],
  providers: [SnackBarComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
