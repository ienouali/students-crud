import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppComponent} from './app.component';
 import {FormsModule} from "@angular/forms";
import { StudentCountComponent } from './students/components/student-count/student-count.component';
import { StudentListComponent } from './students/components/student-list/student-list.component';
import { StudentDashboardComponent } from './students/containers/student-dashboard/student-dashboard.component';
import {HttpClientModule} from "@angular/common/http";
 import {AddEditStudentComponent} from "./students/components/add-edit-student/add-edit-student.component";
import {IsGreatThanTenDirective} from "./_shared/is-greatthan-ten.directive";
import {StudentModule} from "./students/student.module";
import { SearchStudentComponent } from './students/components/search-student/search-student.component';
import {OwnModelDirective} from "./_shared/own-model.directive";

@NgModule({
  declarations: [
    AppComponent,
    StudentCountComponent,
    StudentListComponent,
    StudentDashboardComponent,
    AddEditStudentComponent,
    SearchStudentComponent,
    IsGreatThanTenDirective,
    OwnModelDirective
  ],
    imports: [
        BrowserModule, FormsModule, HttpClientModule,
    ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
