import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { QuizRoutingModule } from "./quiz-routing.module";
import { QuizComponent } from "./quiz.component";
import { QuizService } from "~/quiz/quiz.service";
import { CFAlertDialogHelper } from "~/shared/cfAlertDialog-helper";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        QuizRoutingModule
    ],
    declarations: [
        QuizComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    providers : [QuizService, CFAlertDialogHelper]
})
export class QuizModule { }
