import { alert } from "tns-core-modules/ui/dialogs";
import {
  CFAlertDialog,
  DialogOptions,
  CFAlertActionAlignment,
  CFAlertActionStyle,
  CFAlertStyle
} from "nativescript-cfalert-dialog";
import { Course } from "~/shared/quiz";

export class CFAlertDialogHelper {
  private cfalertDialog: CFAlertDialog;

  constructor() {
    this.cfalertDialog = new CFAlertDialog();
  }

    showTopics(course: Course): void {
        const items: any = course.topics.map(topic => topic.name);
        let selection: string;
        const options: DialogOptions = {
        dialogStyle: CFAlertStyle.ALERT,
        title: "Choose your topic :",
        simpleList: {
            items: items,
            onClick: (dialogInterface, index) => {
                alert({
                  title: "Your selection:",
                  message: items[index],
                  okButtonText: "OK"
                });
              }
            }
        };
        this.cfalertDialog.show(options);
    }
}