"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dialogs_1 = require("tns-core-modules/ui/dialogs");
var nativescript_fancyalert_1 = require("nativescript-fancyalert");
var FancyalertHelper = /** @class */ (function () {
    function FancyalertHelper() {
    }
    FancyalertHelper.prototype.showTopics = function (course) {
        console.log("You have selected " + course.name);
        var buttons = [];
        var _loop_1 = function (topic) {
            buttons.push(new nativescript_fancyalert_1.TNSFancyAlertButton({
                label: topic.name,
                action: function () {
                    console.log(topic.id + ":" + topic.name);
                }
            }));
        };
        // course.topics.forEach(function(topic){
        //   console.log ("Title " + topic.id + ":" + topic.name);
        //   buttons.push(new TNSFancyAlertButton({
        //     label: topic.name,
        //     action: () => {
        //       console.log(topic.id + ":" + topic.name);
        //     }
        //   }));
        // });
        for (var _i = 0, _a = course.topics; _i < _a.length; _i++) {
            var topic = _a[_i];
            _loop_1(topic);
        }
        nativescript_fancyalert_1.TNSFancyAlert.showCustomButtons(buttons, undefined, undefined, "Got more Buttons?", "Add as many as you'd like.", "Ok");
    };
    FancyalertHelper.prototype.showSuccess = function () {
        nativescript_fancyalert_1.TNSFancyAlert.showSuccess("Success!", "You were able to press a button. Impressive stuff mate!", "Thanks :)");
    };
    FancyalertHelper.prototype.showInfo = function () {
        nativescript_fancyalert_1.TNSFancyAlert.showInfo("Info", "1 + 1 = 2", "Correct!");
    };
    FancyalertHelper.prototype.showNotice = function () {
        nativescript_fancyalert_1.TNSFancyAlert.showNotice("Notice", "This year Christmas is december 25 & 26.", "Well duh!");
    };
    FancyalertHelper.prototype.showWarning = function () {
        nativescript_fancyalert_1.TNSFancyAlert.showError("Warning!", "There's something between your teeth.", "Uhm, thanks..");
    };
    FancyalertHelper.prototype.showError = function () {
        nativescript_fancyalert_1.TNSFancyAlert.showError("Uh oh!", "Somebody made a boo-boo..", "I'll clean it up..");
    };
    FancyalertHelper.prototype.showWaiting = function () {
        nativescript_fancyalert_1.TNSFancyAlert.showWaiting("Hang on", "This only takes 5 seconds..", "I can't wait!", 5);
    };
    FancyalertHelper.prototype.showTimer = function () {
        nativescript_fancyalert_1.TNSFancyAlert.showCustomButtonTimer(0, true, undefined, undefined, 'Mission Impossible', "This will self-destruct in 5 seconds.", 'Ok');
    };
    FancyalertHelper.prototype.showTextField = function () {
        var initialValue = null;
        nativescript_fancyalert_1.TNSFancyAlert.showTextField('Enter your name', initialValue, new nativescript_fancyalert_1.TNSFancyAlertButton({
            label: "Done",
            action: function (value) {
                dialogs_1.alert({
                    title: "User entered:",
                    message: value,
                    okButtonText: "Correct ;)"
                });
            }
        }), undefined, undefined, "What's you name", ".. if you have one", "Dismiss");
    };
    FancyalertHelper.prototype.showSwitch = function () {
        nativescript_fancyalert_1.TNSFancyAlert.showSwitch("Don't ask me again", '#58B136', new nativescript_fancyalert_1.TNSFancyAlertButton({
            label: "Save",
            action: function (isSelected) {
                console.log("Don't ask again was selected? " + isSelected);
            }
        }), 'switch.png', '#B3714F', 'Need a switch?', "It can be useful.", 'Got it.');
    };
    return FancyalertHelper;
}());
exports.FancyalertHelper = FancyalertHelper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFuY3lhbGVydC1oZWxwZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmYW5jeWFsZXJ0LWhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHVEQUFvRDtBQUNwRCxtRUFBNkU7QUFHN0U7SUFFRTtJQUNBLENBQUM7SUFFTSxxQ0FBVSxHQUFqQixVQUFrQixNQUFjO1FBQzlCLE9BQU8sQ0FBQyxHQUFHLENBQUUsb0JBQW9CLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9DLElBQUksT0FBTyxHQUFPLEVBQUUsQ0FBQztnQ0FVWixLQUFLO1lBQ1YsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLDZDQUFtQixDQUFDO2dCQUNuQyxLQUFLLEVBQUUsS0FBSyxDQUFDLElBQUk7Z0JBQ2pCLE1BQU0sRUFBRTtvQkFDTixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDM0MsQ0FBQzthQUNGLENBQUMsQ0FBQyxDQUFBO1FBQ1AsQ0FBQztRQWhCRCx5Q0FBeUM7UUFDekMsMERBQTBEO1FBQzFELDJDQUEyQztRQUMzQyx5QkFBeUI7UUFDekIsc0JBQXNCO1FBQ3RCLGtEQUFrRDtRQUNsRCxRQUFRO1FBQ1IsU0FBUztRQUNULE1BQU07UUFDTixHQUFHLENBQUMsQ0FBYyxVQUFhLEVBQWIsS0FBQSxNQUFNLENBQUMsTUFBTSxFQUFiLGNBQWEsRUFBYixJQUFhO1lBQTFCLElBQUksS0FBSyxTQUFBO29CQUFMLEtBQUs7U0FPYjtRQUVELHVDQUFhLENBQUMsaUJBQWlCLENBQzdCLE9BQU8sRUFDUCxTQUFTLEVBQ1QsU0FBUyxFQUNULG1CQUFtQixFQUNuQiw0QkFBNEIsRUFDNUIsSUFBSSxDQUNMLENBQUM7SUFDSixDQUFDO0lBRUgsc0NBQVcsR0FBWDtRQUNFLHVDQUFhLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSx5REFBeUQsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUNoSCxDQUFDO0lBRUQsbUNBQVEsR0FBUjtRQUNFLHVDQUFhLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVELHFDQUFVLEdBQVY7UUFDRSx1Q0FBYSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsMENBQTBDLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDOUYsQ0FBQztJQUVELHNDQUFXLEdBQVg7UUFDRSx1Q0FBYSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsdUNBQXVDLEVBQUUsZUFBZSxDQUFDLENBQUM7SUFDaEcsQ0FBQztJQUVELG9DQUFTLEdBQVQ7UUFDRSx1Q0FBYSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsMkJBQTJCLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztJQUN2RixDQUFDO0lBRUQsc0NBQVcsR0FBWDtRQUNFLHVDQUFhLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSw2QkFBNkIsRUFBRSxlQUFlLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDMUYsQ0FBQztJQUVELG9DQUFTLEdBQVQ7UUFDRSx1Q0FBYSxDQUFDLHFCQUFxQixDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxvQkFBb0IsRUFBRSx1Q0FBdUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMxSSxDQUFDO0lBRUQsd0NBQWEsR0FBYjtRQUNFLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQztRQUN4Qix1Q0FBYSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsRUFBRSxZQUFZLEVBQUUsSUFBSSw2Q0FBbUIsQ0FBQztZQUNuRixLQUFLLEVBQUUsTUFBTTtZQUNiLE1BQU0sRUFBRSxVQUFDLEtBQVU7Z0JBQ2pCLGVBQUssQ0FBQztvQkFDSixLQUFLLEVBQUUsZUFBZTtvQkFDdEIsT0FBTyxFQUFFLEtBQUs7b0JBQ2QsWUFBWSxFQUFFLFlBQVk7aUJBQzNCLENBQUMsQ0FBQztZQUNMLENBQUM7U0FDRixDQUFDLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxvQkFBb0IsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUNoRixDQUFDO0lBRUQscUNBQVUsR0FBVjtRQUNFLHVDQUFhLENBQUMsVUFBVSxDQUFDLG9CQUFvQixFQUFFLFNBQVMsRUFBRSxJQUFJLDZDQUFtQixDQUFDO1lBQ2hGLEtBQUssRUFBRSxNQUFNO1lBQ2IsTUFBTSxFQUFFLFVBQUMsVUFBbUI7Z0JBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUNBQWlDLFVBQVksQ0FBQyxDQUFDO1lBQzdELENBQUM7U0FDRixDQUFDLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRSxtQkFBbUIsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUNqRixDQUFDO0lBQ0gsdUJBQUM7QUFBRCxDQUFDLEFBdEZELElBc0ZDO0FBdEZZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFsZXJ0IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiO1xyXG5pbXBvcnQgeyBUTlNGYW5jeUFsZXJ0LCBUTlNGYW5jeUFsZXJ0QnV0dG9uIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1mYW5jeWFsZXJ0XCI7XHJcbmltcG9ydCB7IENvdXJzZSB9IGZyb20gXCJ+L3NoYXJlZC9xdWl6XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRmFuY3lhbGVydEhlbHBlciB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNob3dUb3BpY3MoY291cnNlOiBDb3Vyc2UpIHtcclxuICAgIGNvbnNvbGUubG9nIChcIllvdSBoYXZlIHNlbGVjdGVkIFwiICsgY291cnNlLm5hbWUpO1xyXG4gICAgICBsZXQgYnV0dG9uczphbnkgPSBbXTtcclxuICAgICAgLy8gY291cnNlLnRvcGljcy5mb3JFYWNoKGZ1bmN0aW9uKHRvcGljKXtcclxuICAgICAgLy8gICBjb25zb2xlLmxvZyAoXCJUaXRsZSBcIiArIHRvcGljLmlkICsgXCI6XCIgKyB0b3BpYy5uYW1lKTtcclxuICAgICAgLy8gICBidXR0b25zLnB1c2gobmV3IFROU0ZhbmN5QWxlcnRCdXR0b24oe1xyXG4gICAgICAvLyAgICAgbGFiZWw6IHRvcGljLm5hbWUsXHJcbiAgICAgIC8vICAgICBhY3Rpb246ICgpID0+IHtcclxuICAgICAgLy8gICAgICAgY29uc29sZS5sb2codG9waWMuaWQgKyBcIjpcIiArIHRvcGljLm5hbWUpO1xyXG4gICAgICAvLyAgICAgfVxyXG4gICAgICAvLyAgIH0pKTtcclxuICAgICAgLy8gfSk7XHJcbiAgICAgIGZvciAobGV0IHRvcGljIG9mIGNvdXJzZS50b3BpY3Mpe1xyXG4gICAgICAgICAgYnV0dG9ucy5wdXNoKG5ldyBUTlNGYW5jeUFsZXJ0QnV0dG9uKHtcclxuICAgICAgICAgICAgbGFiZWw6IHRvcGljLm5hbWUsXHJcbiAgICAgICAgICAgIGFjdGlvbjogKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRvcGljLmlkICsgXCI6XCIgKyB0b3BpYy5uYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSkpXHJcbiAgICAgIH1cclxuICAgICBcclxuICAgICAgVE5TRmFuY3lBbGVydC5zaG93Q3VzdG9tQnV0dG9ucyhcclxuICAgICAgICBidXR0b25zLFxyXG4gICAgICAgIHVuZGVmaW5lZCxcclxuICAgICAgICB1bmRlZmluZWQsXHJcbiAgICAgICAgXCJHb3QgbW9yZSBCdXR0b25zP1wiLFxyXG4gICAgICAgIGBBZGQgYXMgbWFueSBhcyB5b3UnZCBsaWtlLmAsXHJcbiAgICAgICAgXCJPa1wiXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gIHNob3dTdWNjZXNzKCk6IHZvaWQge1xyXG4gICAgVE5TRmFuY3lBbGVydC5zaG93U3VjY2VzcyhcIlN1Y2Nlc3MhXCIsIFwiWW91IHdlcmUgYWJsZSB0byBwcmVzcyBhIGJ1dHRvbi4gSW1wcmVzc2l2ZSBzdHVmZiBtYXRlIVwiLCBcIlRoYW5rcyA6KVwiKTtcclxuICB9XHJcblxyXG4gIHNob3dJbmZvKCk6IHZvaWQge1xyXG4gICAgVE5TRmFuY3lBbGVydC5zaG93SW5mbyhcIkluZm9cIiwgXCIxICsgMSA9IDJcIiwgXCJDb3JyZWN0IVwiKTtcclxuICB9XHJcblxyXG4gIHNob3dOb3RpY2UoKTogdm9pZCB7XHJcbiAgICBUTlNGYW5jeUFsZXJ0LnNob3dOb3RpY2UoXCJOb3RpY2VcIiwgXCJUaGlzIHllYXIgQ2hyaXN0bWFzIGlzIGRlY2VtYmVyIDI1ICYgMjYuXCIsIFwiV2VsbCBkdWghXCIpO1xyXG4gIH1cclxuXHJcbiAgc2hvd1dhcm5pbmcoKTogdm9pZCB7XHJcbiAgICBUTlNGYW5jeUFsZXJ0LnNob3dFcnJvcihcIldhcm5pbmchXCIsIFwiVGhlcmUncyBzb21ldGhpbmcgYmV0d2VlbiB5b3VyIHRlZXRoLlwiLCBcIlVobSwgdGhhbmtzLi5cIik7XHJcbiAgfVxyXG5cclxuICBzaG93RXJyb3IoKTogdm9pZCB7XHJcbiAgICBUTlNGYW5jeUFsZXJ0LnNob3dFcnJvcihcIlVoIG9oIVwiLCBcIlNvbWVib2R5IG1hZGUgYSBib28tYm9vLi5cIiwgXCJJJ2xsIGNsZWFuIGl0IHVwLi5cIik7XHJcbiAgfVxyXG5cclxuICBzaG93V2FpdGluZygpOiB2b2lkIHtcclxuICAgIFROU0ZhbmN5QWxlcnQuc2hvd1dhaXRpbmcoXCJIYW5nIG9uXCIsIFwiVGhpcyBvbmx5IHRha2VzIDUgc2Vjb25kcy4uXCIsIFwiSSBjYW4ndCB3YWl0IVwiLCA1KTtcclxuICB9XHJcblxyXG4gIHNob3dUaW1lcigpOiB2b2lkIHtcclxuICAgIFROU0ZhbmN5QWxlcnQuc2hvd0N1c3RvbUJ1dHRvblRpbWVyKDAsIHRydWUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCAnTWlzc2lvbiBJbXBvc3NpYmxlJywgYFRoaXMgd2lsbCBzZWxmLWRlc3RydWN0IGluIDUgc2Vjb25kcy5gLCAnT2snKTtcclxuICB9XHJcblxyXG4gIHNob3dUZXh0RmllbGQoKTogdm9pZCB7XHJcbiAgICBsZXQgaW5pdGlhbFZhbHVlID0gbnVsbDtcclxuICAgIFROU0ZhbmN5QWxlcnQuc2hvd1RleHRGaWVsZCgnRW50ZXIgeW91ciBuYW1lJywgaW5pdGlhbFZhbHVlLCBuZXcgVE5TRmFuY3lBbGVydEJ1dHRvbih7XHJcbiAgICAgIGxhYmVsOiBcIkRvbmVcIixcclxuICAgICAgYWN0aW9uOiAodmFsdWU6IGFueSkgPT4ge1xyXG4gICAgICAgIGFsZXJ0KHtcclxuICAgICAgICAgIHRpdGxlOiBcIlVzZXIgZW50ZXJlZDpcIixcclxuICAgICAgICAgIG1lc3NhZ2U6IHZhbHVlLFxyXG4gICAgICAgICAgb2tCdXR0b25UZXh0OiBcIkNvcnJlY3QgOylcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIFwiV2hhdCdzIHlvdSBuYW1lXCIsIFwiLi4gaWYgeW91IGhhdmUgb25lXCIsIFwiRGlzbWlzc1wiKTtcclxuICB9XHJcblxyXG4gIHNob3dTd2l0Y2goKTogdm9pZCB7XHJcbiAgICBUTlNGYW5jeUFsZXJ0LnNob3dTd2l0Y2goXCJEb24ndCBhc2sgbWUgYWdhaW5cIiwgJyM1OEIxMzYnLCBuZXcgVE5TRmFuY3lBbGVydEJ1dHRvbih7XHJcbiAgICAgIGxhYmVsOiBcIlNhdmVcIixcclxuICAgICAgYWN0aW9uOiAoaXNTZWxlY3RlZDogYm9vbGVhbikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBEb24ndCBhc2sgYWdhaW4gd2FzIHNlbGVjdGVkPyAke2lzU2VsZWN0ZWR9YCk7XHJcbiAgICAgIH1cclxuICAgIH0pLCAnc3dpdGNoLnBuZycsICcjQjM3MTRGJywgJ05lZWQgYSBzd2l0Y2g/JywgYEl0IGNhbiBiZSB1c2VmdWwuYCwgJ0dvdCBpdC4nKTtcclxuICB9XHJcbn0iXX0=