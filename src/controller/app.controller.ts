import {Request, Response} from "express";

class AppController { 

    healthCheck(req: Request, res: Response) {
        try {
            res.send({success: true, message: "OK"});
        } catch(e) {
            res.send({success: false, message: e});
        }
    };
}
export default new AppController();