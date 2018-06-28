import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient} from "@angular/common/http";
import { Course } from "~/shared/quiz";
import { FileReader } from "~/shared/fileReader";


@Injectable()
export class QuizService {

    constructor(private http: HttpClient) { }

    // getCourses():Observable<any> {
    //     return this.http.get<Course>(this.subjectsUrl);
    // }

    private courseFile = "quiz/content/files/courses.json";

    getCourses():Promise<Course[]> {
        return FileReader.readJSON(this.courseFile);
    }

}