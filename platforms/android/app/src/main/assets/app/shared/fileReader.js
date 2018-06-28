"use strict";
/*https://gist.github.com/burkeholland/c1119c264cec255f0d3d*/
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("file-system");
var FileReader = /** @class */ (function () {
    function FileReader() {
    }
    FileReader.readJSON = function (filePath) {
        var documents = fs.knownFolders.currentApp();
        var path = fs.path.join(documents.path, filePath); // documents.path is /data/data/org.nativescript.SampleNavDraw/files/app
        if (fs.File.exists(path)) {
            console.log('Get from local: ' + path);
            var jsonFile_1 = documents.getFile(filePath); //readText() uses relative path: https://github.com/NativeScript/NativeScript/issues/3248
            return new Promise(function (resolve, reject) {
                jsonFile_1.readText().then(function (content) {
                    var data = JSON.parse(content);
                    console.log('data: ' + content);
                    resolve(data);
                })
                    .catch(function (err) {
                    console.log('Error in reading file: ' + err);
                    reject(err);
                });
            });
        }
        else {
            console.log("File does not exist");
        }
    };
    return FileReader;
}());
exports.FileReader = FileReader;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZVJlYWRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZpbGVSZWFkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDZEQUE2RDs7QUFFN0QsZ0NBQWtDO0FBSWxDO0lBQUE7SUEwQkEsQ0FBQztJQXhCaUIsbUJBQVEsR0FBdEIsVUFBdUIsUUFBZ0I7UUFDbkMsSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUM3QyxJQUFJLElBQUksR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsd0VBQXdFO1FBQzFILEVBQUUsQ0FBQSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQ3hCLENBQUM7WUFDRyxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxDQUFDO1lBQ3ZDLElBQUksVUFBUSxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyx5RkFBeUY7WUFFckksTUFBTSxDQUFDLElBQUksT0FBTyxDQUFXLFVBQUMsT0FBTyxFQUFFLE1BQU07Z0JBQ3pDLFVBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxPQUFlO29CQUNyQyxJQUFJLElBQUksR0FBNEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDeEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUUsT0FBTyxDQUFDLENBQUM7b0JBQy9CLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDbEIsQ0FBQyxDQUFDO3FCQUNELEtBQUssQ0FBQyxVQUFDLEdBQUc7b0JBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsR0FBRSxHQUFHLENBQUMsQ0FBQztvQkFDNUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNoQixDQUFDLENBQUMsQ0FBQztZQUNQLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQUNELElBQUksQ0FBQSxDQUFDO1lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBRSxxQkFBcUIsQ0FBQyxDQUFDO1FBQ3hDLENBQUM7SUFDTCxDQUFDO0lBQ0wsaUJBQUM7QUFBRCxDQUFDLEFBMUJELElBMEJDO0FBMUJZLGdDQUFVIiwic291cmNlc0NvbnRlbnQiOlsiLypodHRwczovL2dpc3QuZ2l0aHViLmNvbS9idXJrZWhvbGxhbmQvYzExMTljMjY0Y2VjMjU1ZjBkM2QqL1xyXG5cclxuaW1wb3J0ICogYXMgZnMgZnJvbSBcImZpbGUtc3lzdGVtXCI7XHJcbmltcG9ydCB7IENvdXJzZSB9IGZyb20gXCJ+L3NoYXJlZC9xdWl6XCI7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEZpbGVSZWFkZXIge1xyXG4gICAgXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRKU09OKGZpbGVQYXRoOiBzdHJpbmcpOiBQcm9taXNlPENvdXJzZVtdPiB7XHJcbiAgICAgICAgbGV0IGRvY3VtZW50cyA9IGZzLmtub3duRm9sZGVycy5jdXJyZW50QXBwKCk7XHJcbiAgICAgICAgbGV0IHBhdGggPSBmcy5wYXRoLmpvaW4oZG9jdW1lbnRzLnBhdGgsZmlsZVBhdGgpOyAvLyBkb2N1bWVudHMucGF0aCBpcyAvZGF0YS9kYXRhL29yZy5uYXRpdmVzY3JpcHQuU2FtcGxlTmF2RHJhdy9maWxlcy9hcHBcclxuICAgICAgICBpZihmcy5GaWxlLmV4aXN0cyhwYXRoKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdHZXQgZnJvbSBsb2NhbDogJyArIHBhdGgpO1xyXG4gICAgICAgICAgICBsZXQganNvbkZpbGUgPSBkb2N1bWVudHMuZ2V0RmlsZShmaWxlUGF0aCk7IC8vcmVhZFRleHQoKSB1c2VzIHJlbGF0aXZlIHBhdGg6IGh0dHBzOi8vZ2l0aHViLmNvbS9OYXRpdmVTY3JpcHQvTmF0aXZlU2NyaXB0L2lzc3Vlcy8zMjQ4XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8Q291cnNlW10+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgIGpzb25GaWxlLnJlYWRUZXh0KCkudGhlbigoY29udGVudDogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgOiBDb3Vyc2VbXT0gPEFycmF5PENvdXJzZT4+SlNPTi5wYXJzZShjb250ZW50KTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZGF0YTogJysgY29udGVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShkYXRhKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBpbiByZWFkaW5nIGZpbGU6ICcgK2Vycik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCBcIkZpbGUgZG9lcyBub3QgZXhpc3RcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19