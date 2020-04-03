import { Request, Response, NextFunction } from 'express';
export declare class Shoes {
    _model: any;
    constructor(norm: any);
    getAllShoes(model: any): (req: Request<import("../../../../../../Users/Christian/Desktop/LabAssignments567/node_modules/@types/express-serve-static-core").ParamsDictionary>, res: Response<any>, next: NextFunction) => Promise<void>;
    getShoesById(model: any): (req: Request<import("../../../../../../Users/Christian/Desktop/LabAssignments567/node_modules/@types/express-serve-static-core").ParamsDictionary>, res: Response<any>, next: NextFunction) => Promise<void>;
    model: any;
}
