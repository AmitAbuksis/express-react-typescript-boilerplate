"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AppController {
    healthCheck(req, res) {
        try {
            res.send({ success: true, message: "OK" });
        }
        catch (e) {
            res.send({ success: false, message: e });
        }
    }
    ;
}
exports.default = new AppController();
//# sourceMappingURL=app.controller.js.map