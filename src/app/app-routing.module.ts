import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { CourseListComponent } from './course-list/course-list.component';

const routes: Routes = [
  {
    path: "student", component: StudentListComponent
  },
  {
    path: "course", component: CourseListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const Array=[
  StudentListComponent,
  CourseListComponent
]
