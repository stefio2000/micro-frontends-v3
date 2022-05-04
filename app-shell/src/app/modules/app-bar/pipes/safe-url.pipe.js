"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SafeUrlPipe = void 0;
var core_1 = require("@angular/core");
var SafeUrlPipe = /** @class */ (function () {
    /**
     * Pipe Constructor
     *
     * @param sanitizer: DomSanitizer
     */
    function SafeUrlPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    /**
     * Transform
     *
     * @param value: string
     * @param type: string
     */
    SafeUrlPipe.prototype.transform = function (value, type) {
        switch (type) {
            case 'html':
                return this.sanitizer.bypassSecurityTrustHtml(value);
            case 'style':
                return this.sanitizer.bypassSecurityTrustStyle(value);
            case 'script':
                return this.sanitizer.bypassSecurityTrustScript(value);
            case 'url':
                return this.sanitizer.bypassSecurityTrustUrl(value);
            case 'resourceUrl':
                return this.sanitizer.bypassSecurityTrustResourceUrl(value);
            default:
                return this.sanitizer.bypassSecurityTrustHtml(value);
        }
    };
    SafeUrlPipe = __decorate([
        (0, core_1.Pipe)({
            name: 'safeUrl'
        })
    ], SafeUrlPipe);
    return SafeUrlPipe;
}());
exports.SafeUrlPipe = SafeUrlPipe;
//# sourceMappingURL=safe-url.pipe.js.map