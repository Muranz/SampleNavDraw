import { Component, OnInit } from "@angular/core";
import { animate, query, stagger, style, transition, trigger } from "@angular/animations";
import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { Course } from "~/shared/quiz";
import { QuizService } from "~/quiz/quiz.service";
import { CFAlertDialogHelper } from "~/shared/cfAlertDialog-helper";


@Component({
    selector: "Quiz",
    moduleId: module.id,
    templateUrl: "./quiz.component.html",
    animations: [
      trigger("listAnimation", [
        transition("* => *", [
          // this hides everything right away
          query(":enter", style({opacity: 0, transform: "translate(10%)"})),
  
          // starts to animate things with a stagger in between
          query(":enter", stagger(250, [
            animate(1200, style({opacity: 1, transform: "translate(0)"}))
          ]), {delay: 250})
        ])
      ])
    ],
   
})
export class QuizComponent implements OnInit {
courses:Course[] = [];
cfalertDialogHelper: CFAlertDialogHelper;

constructor( private quizService: QuizService, cfalertDialogHelper: CFAlertDialogHelper) {
        // Use the component constructor to inject providers.
    }

    ngOnInit() {
        console.log( "file loading...");
        this.quizService.getCourses()
                        .then((response) => {
                            this.courses = response;
                            console.log (this.courses);
                        })
                        .catch((err) => {
                            console.log(err);
                        });
    }   

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }


    onCourseTap(courseId: number) {
      this.showTopics(this.courses.find(val => val.id == courseId));
    }

    public showTopics(course: Course) {
      this.cfalertDialogHelper.showTopics(course);
    }
}
