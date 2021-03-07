import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class StudentService {


  constructor(private httpClient: HttpClient) { }

  addStudent(student):Observable<Object> {
    return this.httpClient.post('http://localhost:3000/students', student);
  }

  saveStudent({action, student}):Observable<Object> {
    if (action === 'Add') {
      student.id = null;
      return this.httpClient.post('http://localhost:3000/students', student);
    }

    if(action === 'Edit')
      return this.httpClient.put('http://localhost:3000/students/'+student.id, student);
  }

  deleteStudent(id):Observable<Object> {
    return this.httpClient.delete('http://localhost:3000/students/'+id);
  }

  getStudentsList(): Observable<any> {
    /** httpClient */
   return this.httpClient.get<any>('http://localhost:3000/students');
  }
}
