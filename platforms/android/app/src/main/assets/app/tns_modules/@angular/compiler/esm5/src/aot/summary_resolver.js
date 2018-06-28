/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { deserializeSummaries } from './summary_serializer';
import { stripGeneratedFileSuffix, summaryFileName } from './util';
var AotSummaryResolver = /** @class */ (function () {
    function AotSummaryResolver(host, staticSymbolCache) {
        this.host = host;
        this.staticSymbolCache = staticSymbolCache;
        // Note: this will only contain StaticSymbols without members!
        this.summaryCache = new Map();
        this.loadedFilePaths = new Map();
        // Note: this will only contain StaticSymbols without members!
        this.importAs = new Map();
        this.knownFileNameToModuleNames = new Map();
    }
    AotSummaryResolver.prototype.isLibraryFile = function (filePath) {
        // Note: We need to strip the .ngfactory. file path,
        // so this method also works for generated files
        // (for which host.isSourceFile will always return false).
        return !this.host.isSourceFile(stripGeneratedFileSuffix(filePath));
    };
    AotSummaryResolver.prototype.toSummaryFileName = function (filePath, referringSrcFileName) {
        return this.host.toSummaryFileName(filePath, referringSrcFileName);
    };
    AotSummaryResolver.prototype.fromSummaryFileName = function (fileName, referringLibFileName) {
        return this.host.fromSummaryFileName(fileName, referringLibFileName);
    };
    AotSummaryResolver.prototype.resolveSummary = function (staticSymbol) {
        var rootSymbol = staticSymbol.members.length ?
            this.staticSymbolCache.get(staticSymbol.filePath, staticSymbol.name) :
            staticSymbol;
        var summary = this.summaryCache.get(rootSymbol);
        if (!summary) {
            this._loadSummaryFile(staticSymbol.filePath);
            summary = this.summaryCache.get(staticSymbol);
        }
        return (rootSymbol === staticSymbol && summary) || null;
    };
    AotSummaryResolver.prototype.getSymbolsOf = function (filePath) {
        if (this._loadSummaryFile(filePath)) {
            return Array.from(this.summaryCache.keys()).filter(function (symbol) { return symbol.filePath === filePath; });
        }
        return null;
    };
    AotSummaryResolver.prototype.getImportAs = function (staticSymbol) {
        staticSymbol.assertNoMembers();
        return this.importAs.get(staticSymbol);
    };
    /**
     * Converts a file path to a module name that can be used as an `import`.
     */
    AotSummaryResolver.prototype.getKnownModuleName = function (importedFilePath) {
        return this.knownFileNameToModuleNames.get(importedFilePath) || null;
    };
    AotSummaryResolver.prototype.addSummary = function (summary) { this.summaryCache.set(summary.symbol, summary); };
    AotSummaryResolver.prototype._loadSummaryFile = function (filePath) {
        var _this = this;
        var hasSummary = this.loadedFilePaths.get(filePath);
        if (hasSummary != null) {
            return hasSummary;
        }
        var json = null;
        if (this.isLibraryFile(filePath)) {
            var summaryFilePath = summaryFileName(filePath);
            try {
                json = this.host.loadSummary(summaryFilePath);
            }
            catch (e) {
                console.error("Error loading summary file " + summaryFilePath);
                throw e;
            }
        }
        hasSummary = json != null;
        this.loadedFilePaths.set(filePath, hasSummary);
        if (json) {
            var _a = deserializeSummaries(this.staticSymbolCache, this, filePath, json), moduleName = _a.moduleName, summaries = _a.summaries, importAs = _a.importAs;
            summaries.forEach(function (summary) { return _this.summaryCache.set(summary.symbol, summary); });
            if (moduleName) {
                this.knownFileNameToModuleNames.set(filePath, moduleName);
            }
            importAs.forEach(function (importAs) { _this.importAs.set(importAs.symbol, importAs.importAs); });
        }
        return hasSummary;
    };
    return AotSummaryResolver;
}());
export { AotSummaryResolver };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VtbWFyeV9yZXNvbHZlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9hb3Qvc3VtbWFyeV9yZXNvbHZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFLSCxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUMxRCxPQUFPLEVBQUMsd0JBQXdCLEVBQUUsZUFBZSxFQUFDLE1BQU0sUUFBUSxDQUFDO0FBNkJqRTtJQVFFLDRCQUFvQixJQUE0QixFQUFVLGlCQUFvQztRQUExRSxTQUFJLEdBQUosSUFBSSxDQUF3QjtRQUFVLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFQOUYsOERBQThEO1FBQ3RELGlCQUFZLEdBQUcsSUFBSSxHQUFHLEVBQXVDLENBQUM7UUFDOUQsb0JBQWUsR0FBRyxJQUFJLEdBQUcsRUFBbUIsQ0FBQztRQUNyRCw4REFBOEQ7UUFDdEQsYUFBUSxHQUFHLElBQUksR0FBRyxFQUE4QixDQUFDO1FBQ2pELCtCQUEwQixHQUFHLElBQUksR0FBRyxFQUFrQixDQUFDO0lBRWtDLENBQUM7SUFFbEcsMENBQWEsR0FBYixVQUFjLFFBQWdCO1FBQzVCLG9EQUFvRDtRQUNwRCxnREFBZ0Q7UUFDaEQsMERBQTBEO1FBQzFELE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLHdCQUF3QixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUVELDhDQUFpQixHQUFqQixVQUFrQixRQUFnQixFQUFFLG9CQUE0QjtRQUM5RCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBRUQsZ0RBQW1CLEdBQW5CLFVBQW9CLFFBQWdCLEVBQUUsb0JBQTRCO1FBQ2hFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFFRCwyQ0FBYyxHQUFkLFVBQWUsWUFBMEI7UUFDdkMsSUFBTSxVQUFVLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM1QyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDdEUsWUFBWSxDQUFDO1FBQ2pCLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2hELEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNiLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDN0MsT0FBTyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBRyxDQUFDO1FBQ2xELENBQUM7UUFDRCxNQUFNLENBQUMsQ0FBQyxVQUFVLEtBQUssWUFBWSxJQUFJLE9BQU8sQ0FBQyxJQUFJLElBQUksQ0FBQztJQUMxRCxDQUFDO0lBRUQseUNBQVksR0FBWixVQUFhLFFBQWdCO1FBQzNCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFDLE1BQU0sSUFBSyxPQUFBLE1BQU0sQ0FBQyxRQUFRLEtBQUssUUFBUSxFQUE1QixDQUE0QixDQUFDLENBQUM7UUFDL0YsQ0FBQztRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsd0NBQVcsR0FBWCxVQUFZLFlBQTBCO1FBQ3BDLFlBQVksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUMvQixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFHLENBQUM7SUFDM0MsQ0FBQztJQUVEOztPQUVHO0lBQ0gsK0NBQWtCLEdBQWxCLFVBQW1CLGdCQUF3QjtRQUN6QyxNQUFNLENBQUMsSUFBSSxDQUFDLDBCQUEwQixDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLElBQUksQ0FBQztJQUN2RSxDQUFDO0lBRUQsdUNBQVUsR0FBVixVQUFXLE9BQThCLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFdEYsNkNBQWdCLEdBQXhCLFVBQXlCLFFBQWdCO1FBQXpDLGlCQTJCQztRQTFCQyxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNwRCxFQUFFLENBQUMsQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztZQUN2QixNQUFNLENBQUMsVUFBVSxDQUFDO1FBQ3BCLENBQUM7UUFDRCxJQUFJLElBQUksR0FBZ0IsSUFBSSxDQUFDO1FBQzdCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLElBQU0sZUFBZSxHQUFHLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNsRCxJQUFJLENBQUM7Z0JBQ0gsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQ2hELENBQUM7WUFBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNYLE9BQU8sQ0FBQyxLQUFLLENBQUMsZ0NBQThCLGVBQWlCLENBQUMsQ0FBQztnQkFDL0QsTUFBTSxDQUFDLENBQUM7WUFDVixDQUFDO1FBQ0gsQ0FBQztRQUNELFVBQVUsR0FBRyxJQUFJLElBQUksSUFBSSxDQUFDO1FBQzFCLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUMvQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ0gsSUFBQSx1RUFDZ0UsRUFEL0QsMEJBQVUsRUFBRSx3QkFBUyxFQUFFLHNCQUFRLENBQ2lDO1lBQ3ZFLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBQyxPQUFPLElBQUssT0FBQSxLQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxFQUE5QyxDQUE4QyxDQUFDLENBQUM7WUFDL0UsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztnQkFDZixJQUFJLENBQUMsMEJBQTBCLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQztZQUM1RCxDQUFDO1lBQ0QsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFDLFFBQVEsSUFBTyxLQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdGLENBQUM7UUFDRCxNQUFNLENBQUMsVUFBVSxDQUFDO0lBQ3BCLENBQUM7SUFDSCx5QkFBQztBQUFELENBQUMsQUF0RkQsSUFzRkMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7U3VtbWFyeSwgU3VtbWFyeVJlc29sdmVyfSBmcm9tICcuLi9zdW1tYXJ5X3Jlc29sdmVyJztcblxuaW1wb3J0IHtTdGF0aWNTeW1ib2wsIFN0YXRpY1N5bWJvbENhY2hlfSBmcm9tICcuL3N0YXRpY19zeW1ib2wnO1xuaW1wb3J0IHtkZXNlcmlhbGl6ZVN1bW1hcmllc30gZnJvbSAnLi9zdW1tYXJ5X3NlcmlhbGl6ZXInO1xuaW1wb3J0IHtzdHJpcEdlbmVyYXRlZEZpbGVTdWZmaXgsIHN1bW1hcnlGaWxlTmFtZX0gZnJvbSAnLi91dGlsJztcblxuZXhwb3J0IGludGVyZmFjZSBBb3RTdW1tYXJ5UmVzb2x2ZXJIb3N0IHtcbiAgLyoqXG4gICAqIExvYWRzIGFuIE5nTW9kdWxlL0RpcmVjdGl2ZS9QaXBlIHN1bW1hcnkgZmlsZVxuICAgKi9cbiAgbG9hZFN1bW1hcnkoZmlsZVBhdGg6IHN0cmluZyk6IHN0cmluZ3xudWxsO1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHdoZXRoZXIgYSBmaWxlIGlzIGEgc291cmNlIGZpbGUgb3Igbm90LlxuICAgKi9cbiAgaXNTb3VyY2VGaWxlKHNvdXJjZUZpbGVQYXRoOiBzdHJpbmcpOiBib29sZWFuO1xuICAvKipcbiAgICogQ29udmVydHMgYSBmaWxlIG5hbWUgaW50byBhIHJlcHJlc2VudGF0aW9uIHRoYXQgc2hvdWxkIGJlIHN0b3JlZCBpbiBhIHN1bW1hcnkgZmlsZS5cbiAgICogVGhpcyBoYXMgdG8gaW5jbHVkZSBjaGFuZ2luZyB0aGUgc3VmZml4IGFzIHdlbGwuXG4gICAqIEUuZy5cbiAgICogYHNvbWVfZmlsZS50c2AgLT4gYHNvbWVfZmlsZS5kLnRzYFxuICAgKlxuICAgKiBAcGFyYW0gcmVmZXJyaW5nU3JjRmlsZU5hbWUgdGhlIHNvdXJlIGZpbGUgdGhhdCByZWZlcnMgdG8gZmlsZU5hbWVcbiAgICovXG4gIHRvU3VtbWFyeUZpbGVOYW1lKGZpbGVOYW1lOiBzdHJpbmcsIHJlZmVycmluZ1NyY0ZpbGVOYW1lOiBzdHJpbmcpOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIGEgZmlsZU5hbWUgdGhhdCB3YXMgcHJvY2Vzc2VkIGJ5IGB0b1N1bW1hcnlGaWxlTmFtZWAgYmFjayBpbnRvIGEgcmVhbCBmaWxlTmFtZVxuICAgKiBnaXZlbiB0aGUgZmlsZU5hbWUgb2YgdGhlIGxpYnJhcnkgdGhhdCBpcyByZWZlcnJpZyB0byBpdC5cbiAgICovXG4gIGZyb21TdW1tYXJ5RmlsZU5hbWUoZmlsZU5hbWU6IHN0cmluZywgcmVmZXJyaW5nTGliRmlsZU5hbWU6IHN0cmluZyk6IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIEFvdFN1bW1hcnlSZXNvbHZlciBpbXBsZW1lbnRzIFN1bW1hcnlSZXNvbHZlcjxTdGF0aWNTeW1ib2w+IHtcbiAgLy8gTm90ZTogdGhpcyB3aWxsIG9ubHkgY29udGFpbiBTdGF0aWNTeW1ib2xzIHdpdGhvdXQgbWVtYmVycyFcbiAgcHJpdmF0ZSBzdW1tYXJ5Q2FjaGUgPSBuZXcgTWFwPFN0YXRpY1N5bWJvbCwgU3VtbWFyeTxTdGF0aWNTeW1ib2w+PigpO1xuICBwcml2YXRlIGxvYWRlZEZpbGVQYXRocyA9IG5ldyBNYXA8c3RyaW5nLCBib29sZWFuPigpO1xuICAvLyBOb3RlOiB0aGlzIHdpbGwgb25seSBjb250YWluIFN0YXRpY1N5bWJvbHMgd2l0aG91dCBtZW1iZXJzIVxuICBwcml2YXRlIGltcG9ydEFzID0gbmV3IE1hcDxTdGF0aWNTeW1ib2wsIFN0YXRpY1N5bWJvbD4oKTtcbiAgcHJpdmF0ZSBrbm93bkZpbGVOYW1lVG9Nb2R1bGVOYW1lcyA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmc+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBob3N0OiBBb3RTdW1tYXJ5UmVzb2x2ZXJIb3N0LCBwcml2YXRlIHN0YXRpY1N5bWJvbENhY2hlOiBTdGF0aWNTeW1ib2xDYWNoZSkge31cblxuICBpc0xpYnJhcnlGaWxlKGZpbGVQYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAvLyBOb3RlOiBXZSBuZWVkIHRvIHN0cmlwIHRoZSAubmdmYWN0b3J5LiBmaWxlIHBhdGgsXG4gICAgLy8gc28gdGhpcyBtZXRob2QgYWxzbyB3b3JrcyBmb3IgZ2VuZXJhdGVkIGZpbGVzXG4gICAgLy8gKGZvciB3aGljaCBob3N0LmlzU291cmNlRmlsZSB3aWxsIGFsd2F5cyByZXR1cm4gZmFsc2UpLlxuICAgIHJldHVybiAhdGhpcy5ob3N0LmlzU291cmNlRmlsZShzdHJpcEdlbmVyYXRlZEZpbGVTdWZmaXgoZmlsZVBhdGgpKTtcbiAgfVxuXG4gIHRvU3VtbWFyeUZpbGVOYW1lKGZpbGVQYXRoOiBzdHJpbmcsIHJlZmVycmluZ1NyY0ZpbGVOYW1lOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5ob3N0LnRvU3VtbWFyeUZpbGVOYW1lKGZpbGVQYXRoLCByZWZlcnJpbmdTcmNGaWxlTmFtZSk7XG4gIH1cblxuICBmcm9tU3VtbWFyeUZpbGVOYW1lKGZpbGVOYW1lOiBzdHJpbmcsIHJlZmVycmluZ0xpYkZpbGVOYW1lOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5ob3N0LmZyb21TdW1tYXJ5RmlsZU5hbWUoZmlsZU5hbWUsIHJlZmVycmluZ0xpYkZpbGVOYW1lKTtcbiAgfVxuXG4gIHJlc29sdmVTdW1tYXJ5KHN0YXRpY1N5bWJvbDogU3RhdGljU3ltYm9sKTogU3VtbWFyeTxTdGF0aWNTeW1ib2w+fG51bGwge1xuICAgIGNvbnN0IHJvb3RTeW1ib2wgPSBzdGF0aWNTeW1ib2wubWVtYmVycy5sZW5ndGggP1xuICAgICAgICB0aGlzLnN0YXRpY1N5bWJvbENhY2hlLmdldChzdGF0aWNTeW1ib2wuZmlsZVBhdGgsIHN0YXRpY1N5bWJvbC5uYW1lKSA6XG4gICAgICAgIHN0YXRpY1N5bWJvbDtcbiAgICBsZXQgc3VtbWFyeSA9IHRoaXMuc3VtbWFyeUNhY2hlLmdldChyb290U3ltYm9sKTtcbiAgICBpZiAoIXN1bW1hcnkpIHtcbiAgICAgIHRoaXMuX2xvYWRTdW1tYXJ5RmlsZShzdGF0aWNTeW1ib2wuZmlsZVBhdGgpO1xuICAgICAgc3VtbWFyeSA9IHRoaXMuc3VtbWFyeUNhY2hlLmdldChzdGF0aWNTeW1ib2wpICE7XG4gICAgfVxuICAgIHJldHVybiAocm9vdFN5bWJvbCA9PT0gc3RhdGljU3ltYm9sICYmIHN1bW1hcnkpIHx8IG51bGw7XG4gIH1cblxuICBnZXRTeW1ib2xzT2YoZmlsZVBhdGg6IHN0cmluZyk6IFN0YXRpY1N5bWJvbFtdfG51bGwge1xuICAgIGlmICh0aGlzLl9sb2FkU3VtbWFyeUZpbGUoZmlsZVBhdGgpKSB7XG4gICAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLnN1bW1hcnlDYWNoZS5rZXlzKCkpLmZpbHRlcigoc3ltYm9sKSA9PiBzeW1ib2wuZmlsZVBhdGggPT09IGZpbGVQYXRoKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBnZXRJbXBvcnRBcyhzdGF0aWNTeW1ib2w6IFN0YXRpY1N5bWJvbCk6IFN0YXRpY1N5bWJvbCB7XG4gICAgc3RhdGljU3ltYm9sLmFzc2VydE5vTWVtYmVycygpO1xuICAgIHJldHVybiB0aGlzLmltcG9ydEFzLmdldChzdGF0aWNTeW1ib2wpICE7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydHMgYSBmaWxlIHBhdGggdG8gYSBtb2R1bGUgbmFtZSB0aGF0IGNhbiBiZSB1c2VkIGFzIGFuIGBpbXBvcnRgLlxuICAgKi9cbiAgZ2V0S25vd25Nb2R1bGVOYW1lKGltcG9ydGVkRmlsZVBhdGg6IHN0cmluZyk6IHN0cmluZ3xudWxsIHtcbiAgICByZXR1cm4gdGhpcy5rbm93bkZpbGVOYW1lVG9Nb2R1bGVOYW1lcy5nZXQoaW1wb3J0ZWRGaWxlUGF0aCkgfHwgbnVsbDtcbiAgfVxuXG4gIGFkZFN1bW1hcnkoc3VtbWFyeTogU3VtbWFyeTxTdGF0aWNTeW1ib2w+KSB7IHRoaXMuc3VtbWFyeUNhY2hlLnNldChzdW1tYXJ5LnN5bWJvbCwgc3VtbWFyeSk7IH1cblxuICBwcml2YXRlIF9sb2FkU3VtbWFyeUZpbGUoZmlsZVBhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGxldCBoYXNTdW1tYXJ5ID0gdGhpcy5sb2FkZWRGaWxlUGF0aHMuZ2V0KGZpbGVQYXRoKTtcbiAgICBpZiAoaGFzU3VtbWFyeSAhPSBudWxsKSB7XG4gICAgICByZXR1cm4gaGFzU3VtbWFyeTtcbiAgICB9XG4gICAgbGV0IGpzb246IHN0cmluZ3xudWxsID0gbnVsbDtcbiAgICBpZiAodGhpcy5pc0xpYnJhcnlGaWxlKGZpbGVQYXRoKSkge1xuICAgICAgY29uc3Qgc3VtbWFyeUZpbGVQYXRoID0gc3VtbWFyeUZpbGVOYW1lKGZpbGVQYXRoKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGpzb24gPSB0aGlzLmhvc3QubG9hZFN1bW1hcnkoc3VtbWFyeUZpbGVQYXRoKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3IgbG9hZGluZyBzdW1tYXJ5IGZpbGUgJHtzdW1tYXJ5RmlsZVBhdGh9YCk7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICAgIGhhc1N1bW1hcnkgPSBqc29uICE9IG51bGw7XG4gICAgdGhpcy5sb2FkZWRGaWxlUGF0aHMuc2V0KGZpbGVQYXRoLCBoYXNTdW1tYXJ5KTtcbiAgICBpZiAoanNvbikge1xuICAgICAgY29uc3Qge21vZHVsZU5hbWUsIHN1bW1hcmllcywgaW1wb3J0QXN9ID1cbiAgICAgICAgICBkZXNlcmlhbGl6ZVN1bW1hcmllcyh0aGlzLnN0YXRpY1N5bWJvbENhY2hlLCB0aGlzLCBmaWxlUGF0aCwganNvbik7XG4gICAgICBzdW1tYXJpZXMuZm9yRWFjaCgoc3VtbWFyeSkgPT4gdGhpcy5zdW1tYXJ5Q2FjaGUuc2V0KHN1bW1hcnkuc3ltYm9sLCBzdW1tYXJ5KSk7XG4gICAgICBpZiAobW9kdWxlTmFtZSkge1xuICAgICAgICB0aGlzLmtub3duRmlsZU5hbWVUb01vZHVsZU5hbWVzLnNldChmaWxlUGF0aCwgbW9kdWxlTmFtZSk7XG4gICAgICB9XG4gICAgICBpbXBvcnRBcy5mb3JFYWNoKChpbXBvcnRBcykgPT4geyB0aGlzLmltcG9ydEFzLnNldChpbXBvcnRBcy5zeW1ib2wsIGltcG9ydEFzLmltcG9ydEFzKTsgfSk7XG4gICAgfVxuICAgIHJldHVybiBoYXNTdW1tYXJ5O1xuICB9XG59XG4iXX0=