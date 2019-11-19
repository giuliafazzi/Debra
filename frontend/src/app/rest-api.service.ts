import { Injectable } from "@angular/core";
import { Observable, of, throwError } from "rxjs";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { catchError, tap, map } from "rxjs/operators";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};
const apiUrl = "https://debrapp.herokuapp.com";

@Injectable({
  providedIn: "root"
})
export class RestApiService {
  constructor(private http: HttpClient) {}

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error("An error occurred:", error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError("Something bad happened; please try again later.");
  }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  getSchools(): Observable<any> {
    const url = `${apiUrl}/schools`;
    return this.http
      .get(url, httpOptions)
      .pipe(map(this.extractData), catchError(this.handleError));
  }

  getStudents(school_id: string): Observable<any> {
    const url = `${apiUrl}/schools/${school_id}/students`;
    return this.http
      .get(url, httpOptions)
      .pipe(map(this.extractData), catchError(this.handleError));
  }

  getStudentById(school_id: string, student_id: string): Observable<any> {
    const url = `${apiUrl}/schools/${school_id}/students/${student_id}`;
    console.log(`ESCOLA_ID: ${school_id}  -  ALUNO_ID: ${student_id}`);
    return this.http
      .get(url, httpOptions)
      .pipe(map(this.extractData), catchError(this.handleError));
  }

  getPosts(school_id: string, student_id: string): Observable<any> {
    const url = `${apiUrl}/schools/${school_id}/students/${student_id}/posts`;
    return this.http
      .get(url, httpOptions)
      .pipe(map(this.extractData), catchError(this.handleError));
  }

  getPostsByCategory(
    school_id: string,
    student_id: string,
    category: string
  ): Observable<any> {
    const url = `${apiUrl}/schools/${school_id}/students/${student_id}/posts/${category}`;
    return this.http
      .get(url, httpOptions)
      .pipe(map(this.extractData), catchError(this.handleError));
  }

  createPost(data, school_id: string, student_id: string): Observable<any> {
    const url = `${apiUrl}/schools/${school_id}/students/${student_id}/posts`;
    return this.http
      .post(url, data, httpOptions)
      .pipe(catchError(this.handleError));
  }
}
