"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var quiz_routing_module_1 = require("./quiz-routing.module");
var quiz_component_1 = require("./quiz.component");
var quiz_service_1 = require("~/quiz/quiz.service");
var cfAlertDialog_helper_1 = require("~/shared/cfAlertDialog-helper");
var QuizModule = /** @class */ (function () {
    function QuizModule() {
    }
    QuizModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                quiz_routing_module_1.QuizRoutingModule
            ],
            declarations: [
                quiz_component_1.QuizComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ],
            providers: [quiz_service_1.QuizService, cfAlertDialog_helper_1.CFAlertDialogHelper]
        })
    ], QuizModule);
    return QuizModule;
}());
exports.QuizModule = QuizModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpei5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJxdWl6Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxzREFBdUU7QUFDdkUsNkRBQTBEO0FBQzFELG1EQUFpRDtBQUNqRCxvREFBa0Q7QUFDbEQsc0VBQW9FO0FBZXBFO0lBQUE7SUFBMEIsQ0FBQztJQUFkLFVBQVU7UUFidEIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLGlDQUF3QjtnQkFDeEIsdUNBQWlCO2FBQ3BCO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLDhCQUFhO2FBQ2hCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtZQUNELFNBQVMsRUFBRyxDQUFDLDBCQUFXLEVBQUUsMENBQW1CLENBQUM7U0FDakQsQ0FBQztPQUNXLFVBQVUsQ0FBSTtJQUFELGlCQUFDO0NBQUEsQUFBM0IsSUFBMkI7QUFBZCxnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBRdWl6Um91dGluZ01vZHVsZSB9IGZyb20gXCIuL3F1aXotcm91dGluZy5tb2R1bGVcIjtcclxuaW1wb3J0IHsgUXVpekNvbXBvbmVudCB9IGZyb20gXCIuL3F1aXouY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFF1aXpTZXJ2aWNlIH0gZnJvbSBcIn4vcXVpei9xdWl6LnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgQ0ZBbGVydERpYWxvZ0hlbHBlciB9IGZyb20gXCJ+L3NoYXJlZC9jZkFsZXJ0RGlhbG9nLWhlbHBlclwiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXHJcbiAgICAgICAgUXVpelJvdXRpbmdNb2R1bGVcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBRdWl6Q29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgc2NoZW1hczogW1xyXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcclxuICAgIF0sXHJcbiAgICBwcm92aWRlcnMgOiBbUXVpelNlcnZpY2UsIENGQWxlcnREaWFsb2dIZWxwZXJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBRdWl6TW9kdWxlIHsgfVxyXG4iXX0=