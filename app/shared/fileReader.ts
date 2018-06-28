/*https://gist.github.com/burkeholland/c1119c264cec255f0d3d*/

import * as fs from "file-system";
import { Course } from "~/shared/quiz";


export class FileReader {
    
    public static readJSON(filePath: string): Promise<Course[]> {
        let documents = fs.knownFolders.currentApp();
        let path = fs.path.join(documents.path,filePath); // documents.path is /data/data/org.nativescript.SampleNavDraw/files/app
        if(fs.File.exists(path))
        {
            console.log('Get from local: ' + path);
            let jsonFile = documents.getFile(filePath); //readText() uses relative path: https://github.com/NativeScript/NativeScript/issues/3248

            return new Promise<Course[]>((resolve, reject) => {
                jsonFile.readText().then((content: string) => {
                    let data : Course[]= <Array<Course>>JSON.parse(content);
                    console.log('data: '+ content);
                    resolve(data);
                })
                .catch((err) => {
                    console.log('Error in reading file: ' +err);
                    reject(err);
                });
            });
        }
        else{
            console.log( "File does not exist");
        }
    }
}