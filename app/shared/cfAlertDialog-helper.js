"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dialogs_1 = require("tns-core-modules/ui/dialogs");
var nativescript_cfalert_dialog_1 = require("nativescript-cfalert-dialog");
var CFAlertDialogHelper = /** @class */ (function () {
    function CFAlertDialogHelper() {
        this.cfalertDialog = new nativescript_cfalert_dialog_1.CFAlertDialog();
    }
    CFAlertDialogHelper.prototype.showTopics = function (course) {
        var items = course.topics.map(function (topic) { return topic.name; });
        var selection;
        var options = {
            dialogStyle: nativescript_cfalert_dialog_1.CFAlertStyle.ALERT,
            title: "Choose your topic :",
            simpleList: {
                items: items,
                onClick: function (dialogInterface, index) {
                    dialogs_1.alert({
                        title: "Your selection:",
                        message: items[index],
                        okButtonText: "OK"
                    });
                }
            }
        };
        this.cfalertDialog.show(options);
    };
    return CFAlertDialogHelper;
}());
exports.CFAlertDialogHelper = CFAlertDialogHelper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2ZBbGVydERpYWxvZy1oZWxwZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjZkFsZXJ0RGlhbG9nLWhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHVEQUFvRDtBQUNwRCwyRUFNcUM7QUFHckM7SUFHRTtRQUNFLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSwyQ0FBYSxFQUFFLENBQUM7SUFDM0MsQ0FBQztJQUVDLHdDQUFVLEdBQVYsVUFBVyxNQUFjO1FBQ3JCLElBQU0sS0FBSyxHQUFRLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLElBQUksRUFBVixDQUFVLENBQUMsQ0FBQztRQUMxRCxJQUFJLFNBQWlCLENBQUM7UUFDdEIsSUFBTSxPQUFPLEdBQWtCO1lBQy9CLFdBQVcsRUFBRSwwQ0FBWSxDQUFDLEtBQUs7WUFDL0IsS0FBSyxFQUFFLHFCQUFxQjtZQUM1QixVQUFVLEVBQUU7Z0JBQ1IsS0FBSyxFQUFFLEtBQUs7Z0JBQ1osT0FBTyxFQUFFLFVBQUMsZUFBZSxFQUFFLEtBQUs7b0JBQzVCLGVBQUssQ0FBQzt3QkFDSixLQUFLLEVBQUUsaUJBQWlCO3dCQUN4QixPQUFPLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQzt3QkFDckIsWUFBWSxFQUFFLElBQUk7cUJBQ25CLENBQUMsQ0FBQztnQkFDTCxDQUFDO2FBQ0Y7U0FDSixDQUFDO1FBQ0YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUNMLDBCQUFDO0FBQUQsQ0FBQyxBQTFCRCxJQTBCQztBQTFCWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhbGVydCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIjtcclxuaW1wb3J0IHtcclxuICBDRkFsZXJ0RGlhbG9nLFxyXG4gIERpYWxvZ09wdGlvbnMsXHJcbiAgQ0ZBbGVydEFjdGlvbkFsaWdubWVudCxcclxuICBDRkFsZXJ0QWN0aW9uU3R5bGUsXHJcbiAgQ0ZBbGVydFN0eWxlXHJcbn0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1jZmFsZXJ0LWRpYWxvZ1wiO1xyXG5pbXBvcnQgeyBDb3Vyc2UgfSBmcm9tIFwifi9zaGFyZWQvcXVpelwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENGQWxlcnREaWFsb2dIZWxwZXIge1xyXG4gIHByaXZhdGUgY2ZhbGVydERpYWxvZzogQ0ZBbGVydERpYWxvZztcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmNmYWxlcnREaWFsb2cgPSBuZXcgQ0ZBbGVydERpYWxvZygpO1xyXG4gIH1cclxuXHJcbiAgICBzaG93VG9waWNzKGNvdXJzZTogQ291cnNlKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgaXRlbXM6IGFueSA9IGNvdXJzZS50b3BpY3MubWFwKHRvcGljID0+IHRvcGljLm5hbWUpO1xyXG4gICAgICAgIGxldCBzZWxlY3Rpb246IHN0cmluZztcclxuICAgICAgICBjb25zdCBvcHRpb25zOiBEaWFsb2dPcHRpb25zID0ge1xyXG4gICAgICAgIGRpYWxvZ1N0eWxlOiBDRkFsZXJ0U3R5bGUuQUxFUlQsXHJcbiAgICAgICAgdGl0bGU6IFwiQ2hvb3NlIHlvdXIgdG9waWMgOlwiLFxyXG4gICAgICAgIHNpbXBsZUxpc3Q6IHtcclxuICAgICAgICAgICAgaXRlbXM6IGl0ZW1zLFxyXG4gICAgICAgICAgICBvbkNsaWNrOiAoZGlhbG9nSW50ZXJmYWNlLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoe1xyXG4gICAgICAgICAgICAgICAgICB0aXRsZTogXCJZb3VyIHNlbGVjdGlvbjpcIixcclxuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogaXRlbXNbaW5kZXhdLFxyXG4gICAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT0tcIlxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmNmYWxlcnREaWFsb2cuc2hvdyhvcHRpb25zKTtcclxuICAgIH1cclxufSJdfQ==