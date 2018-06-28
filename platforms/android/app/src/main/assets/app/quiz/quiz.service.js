"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var fileReader_1 = require("~/shared/fileReader");
var QuizService = /** @class */ (function () {
    function QuizService(http) {
        this.http = http;
        // getCourses():Observable<any> {
        //     return this.http.get<Course>(this.subjectsUrl);
        // }
        this.courseFile = "quiz/content/files/courses.json";
    }
    QuizService.prototype.getCourses = function () {
        return fileReader_1.FileReader.readJSON(this.courseFile);
    };
    QuizService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], QuizService);
    return QuizService;
}());
exports.QuizService = QuizService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpei5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicXVpei5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRTNDLDZDQUFpRDtBQUVqRCxrREFBaUQ7QUFJakQ7SUFFSSxxQkFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUVwQyxpQ0FBaUM7UUFDakMsc0RBQXNEO1FBQ3RELElBQUk7UUFFSSxlQUFVLEdBQUcsaUNBQWlDLENBQUM7SUFOZixDQUFDO0lBUXpDLGdDQUFVLEdBQVY7UUFDSSxNQUFNLENBQUMsdUJBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFaUSxXQUFXO1FBRHZCLGlCQUFVLEVBQUU7eUNBR2lCLGlCQUFVO09BRjNCLFdBQVcsQ0FjdkI7SUFBRCxrQkFBQztDQUFBLEFBZEQsSUFjQztBQWRZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgQ291cnNlIH0gZnJvbSBcIn4vc2hhcmVkL3F1aXpcIjtcclxuaW1wb3J0IHsgRmlsZVJlYWRlciB9IGZyb20gXCJ+L3NoYXJlZC9maWxlUmVhZGVyXCI7XHJcblxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUXVpelNlcnZpY2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyB9XHJcblxyXG4gICAgLy8gZ2V0Q291cnNlcygpOk9ic2VydmFibGU8YW55PiB7XHJcbiAgICAvLyAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8Q291cnNlPih0aGlzLnN1YmplY3RzVXJsKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICBwcml2YXRlIGNvdXJzZUZpbGUgPSBcInF1aXovY29udGVudC9maWxlcy9jb3Vyc2VzLmpzb25cIjtcclxuXHJcbiAgICBnZXRDb3Vyc2VzKCk6UHJvbWlzZTxDb3Vyc2VbXT4ge1xyXG4gICAgICAgIHJldHVybiBGaWxlUmVhZGVyLnJlYWRKU09OKHRoaXMuY291cnNlRmlsZSk7XHJcbiAgICB9XHJcblxyXG59Il19