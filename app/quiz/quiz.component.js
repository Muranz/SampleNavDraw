"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var animations_1 = require("@angular/animations");
var app = require("application");
var quiz_service_1 = require("~/quiz/quiz.service");
var cfAlertDialog_helper_1 = require("~/shared/cfAlertDialog-helper");
var QuizComponent = /** @class */ (function () {
    function QuizComponent(quizService, cfalertDialogHelper) {
        this.quizService = quizService;
        this.courses = [];
        // Use the component constructor to inject providers.
    }
    QuizComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("file loading...");
        this.quizService.getCourses()
            .then(function (response) {
            _this.courses = response;
            console.log(_this.courses);
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    QuizComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.showDrawer();
    };
    QuizComponent.prototype.onCourseTap = function (courseId) {
        this.showTopics(this.courses.find(function (val) { return val.id == courseId; }));
    };
    QuizComponent.prototype.showTopics = function (course) {
        this.cfalertDialogHelper.showTopics(course);
    };
    QuizComponent = __decorate([
        core_1.Component({
            selector: "Quiz",
            moduleId: module.id,
            templateUrl: "./quiz.component.html",
            animations: [
                animations_1.trigger("listAnimation", [
                    animations_1.transition("* => *", [
                        // this hides everything right away
                        animations_1.query(":enter", animations_1.style({ opacity: 0, transform: "translate(10%)" })),
                        // starts to animate things with a stagger in between
                        animations_1.query(":enter", animations_1.stagger(250, [
                            animations_1.animate(1200, animations_1.style({ opacity: 1, transform: "translate(0)" }))
                        ]), { delay: 250 })
                    ])
                ])
            ],
        }),
        __metadata("design:paramtypes", [quiz_service_1.QuizService, cfAlertDialog_helper_1.CFAlertDialogHelper])
    ], QuizComponent);
    return QuizComponent;
}());
exports.QuizComponent = QuizComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpei5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJxdWl6LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxrREFBMEY7QUFDMUYsaUNBQW1DO0FBR25DLG9EQUFrRDtBQUNsRCxzRUFBb0U7QUFzQnBFO0lBSUEsdUJBQXFCLFdBQXdCLEVBQUUsbUJBQXdDO1FBQWxFLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBSDdDLFlBQU8sR0FBWSxFQUFFLENBQUM7UUFJZCxxREFBcUQ7SUFDekQsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFBQSxpQkFVQztRQVRHLE9BQU8sQ0FBQyxHQUFHLENBQUUsaUJBQWlCLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRTthQUNaLElBQUksQ0FBQyxVQUFDLFFBQVE7WUFDWCxLQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQztZQUN4QixPQUFPLENBQUMsR0FBRyxDQUFFLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMvQixDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBQyxHQUFHO1lBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBRUQseUNBQWlCLEdBQWpCO1FBQ0ksSUFBTSxVQUFVLEdBQWtCLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNwRCxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUdELG1DQUFXLEdBQVgsVUFBWSxRQUFnQjtRQUMxQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLEVBQUUsSUFBSSxRQUFRLEVBQWxCLENBQWtCLENBQUMsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFTSxrQ0FBVSxHQUFqQixVQUFrQixNQUFjO1FBQzlCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQWhDUSxhQUFhO1FBbkJ6QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsVUFBVSxFQUFFO2dCQUNWLG9CQUFPLENBQUMsZUFBZSxFQUFFO29CQUN2Qix1QkFBVSxDQUFDLFFBQVEsRUFBRTt3QkFDbkIsbUNBQW1DO3dCQUNuQyxrQkFBSyxDQUFDLFFBQVEsRUFBRSxrQkFBSyxDQUFDLEVBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUMsQ0FBQyxDQUFDO3dCQUVqRSxxREFBcUQ7d0JBQ3JELGtCQUFLLENBQUMsUUFBUSxFQUFFLG9CQUFPLENBQUMsR0FBRyxFQUFFOzRCQUMzQixvQkFBTyxDQUFDLElBQUksRUFBRSxrQkFBSyxDQUFDLEVBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsY0FBYyxFQUFDLENBQUMsQ0FBQzt5QkFDOUQsQ0FBQyxFQUFFLEVBQUMsS0FBSyxFQUFFLEdBQUcsRUFBQyxDQUFDO3FCQUNsQixDQUFDO2lCQUNILENBQUM7YUFDSDtTQUVKLENBQUM7eUNBS2dDLDBCQUFXLEVBQXVCLDBDQUFtQjtPQUoxRSxhQUFhLENBaUN6QjtJQUFELG9CQUFDO0NBQUEsQUFqQ0QsSUFpQ0M7QUFqQ1ksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IGFuaW1hdGUsIHF1ZXJ5LCBzdGFnZ2VyLCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlciB9IGZyb20gXCJAYW5ndWxhci9hbmltYXRpb25zXCI7XHJcbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwiYXBwbGljYXRpb25cIjtcclxuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlclwiO1xyXG5pbXBvcnQgeyBDb3Vyc2UgfSBmcm9tIFwifi9zaGFyZWQvcXVpelwiO1xyXG5pbXBvcnQgeyBRdWl6U2VydmljZSB9IGZyb20gXCJ+L3F1aXovcXVpei5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IENGQWxlcnREaWFsb2dIZWxwZXIgfSBmcm9tIFwifi9zaGFyZWQvY2ZBbGVydERpYWxvZy1oZWxwZXJcIjtcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIlF1aXpcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3F1aXouY29tcG9uZW50Lmh0bWxcIixcclxuICAgIGFuaW1hdGlvbnM6IFtcclxuICAgICAgdHJpZ2dlcihcImxpc3RBbmltYXRpb25cIiwgW1xyXG4gICAgICAgIHRyYW5zaXRpb24oXCIqID0+ICpcIiwgW1xyXG4gICAgICAgICAgLy8gdGhpcyBoaWRlcyBldmVyeXRoaW5nIHJpZ2h0IGF3YXlcclxuICAgICAgICAgIHF1ZXJ5KFwiOmVudGVyXCIsIHN0eWxlKHtvcGFjaXR5OiAwLCB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKDEwJSlcIn0pKSxcclxuICBcclxuICAgICAgICAgIC8vIHN0YXJ0cyB0byBhbmltYXRlIHRoaW5ncyB3aXRoIGEgc3RhZ2dlciBpbiBiZXR3ZWVuXHJcbiAgICAgICAgICBxdWVyeShcIjplbnRlclwiLCBzdGFnZ2VyKDI1MCwgW1xyXG4gICAgICAgICAgICBhbmltYXRlKDEyMDAsIHN0eWxlKHtvcGFjaXR5OiAxLCB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKDApXCJ9KSlcclxuICAgICAgICAgIF0pLCB7ZGVsYXk6IDI1MH0pXHJcbiAgICAgICAgXSlcclxuICAgICAgXSlcclxuICAgIF0sXHJcbiAgIFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUXVpekNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbmNvdXJzZXM6Q291cnNlW10gPSBbXTtcclxuY2ZhbGVydERpYWxvZ0hlbHBlcjogQ0ZBbGVydERpYWxvZ0hlbHBlcjtcclxuXHJcbmNvbnN0cnVjdG9yKCBwcml2YXRlIHF1aXpTZXJ2aWNlOiBRdWl6U2VydmljZSwgY2ZhbGVydERpYWxvZ0hlbHBlcjogQ0ZBbGVydERpYWxvZ0hlbHBlcikge1xyXG4gICAgICAgIC8vIFVzZSB0aGUgY29tcG9uZW50IGNvbnN0cnVjdG9yIHRvIGluamVjdCBwcm92aWRlcnMuXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coIFwiZmlsZSBsb2FkaW5nLi4uXCIpO1xyXG4gICAgICAgIHRoaXMucXVpelNlcnZpY2UuZ2V0Q291cnNlcygpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb3Vyc2VzID0gcmVzcG9uc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyAodGhpcy5jb3Vyc2VzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgfSAgIFxyXG5cclxuICAgIG9uRHJhd2VyQnV0dG9uVGFwKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHNpZGVEcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj5hcHAuZ2V0Um9vdFZpZXcoKTtcclxuICAgICAgICBzaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgb25Db3Vyc2VUYXAoY291cnNlSWQ6IG51bWJlcikge1xyXG4gICAgICB0aGlzLnNob3dUb3BpY3ModGhpcy5jb3Vyc2VzLmZpbmQodmFsID0+IHZhbC5pZCA9PSBjb3Vyc2VJZCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzaG93VG9waWNzKGNvdXJzZTogQ291cnNlKSB7XHJcbiAgICAgIHRoaXMuY2ZhbGVydERpYWxvZ0hlbHBlci5zaG93VG9waWNzKGNvdXJzZSk7XHJcbiAgICB9XHJcbn1cclxuIl19