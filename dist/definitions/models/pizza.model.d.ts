import { Request, Response, NextFunction } from 'express';
export declare class Pizza {
    _model: any;
    constructor(norm: any);
    deletePizza(model: any): (req: Request<import("../../../../../../Users/Christian/Desktop/LabAssignments567/node_modules/@types/express-serve-static-core").ParamsDictionary>, res: Response<any>, next: NextFunction) => Promise<void>;
    updatePizza(model: any): (req: Request<import("../../../../../../Users/Christian/Desktop/LabAssignments567/node_modules/@types/express-serve-static-core").ParamsDictionary>, res: Response<any>, next: NextFunction) => Promise<void>;
    createPizza(model: any): (req: Request<import("../../../../../../Users/Christian/Desktop/LabAssignments567/node_modules/@types/express-serve-static-core").ParamsDictionary>, res: Response<any>, next: NextFunction) => Promise<void>;
    getAllPizzas(model: any): (req: Request<import("../../../../../../Users/Christian/Desktop/LabAssignments567/node_modules/@types/express-serve-static-core").ParamsDictionary>, res: Response<any>, next: NextFunction) => Promise<void>;
    getPizzaById(model: any): (req: Request<import("../../../../../../Users/Christian/Desktop/LabAssignments567/node_modules/@types/express-serve-static-core").ParamsDictionary>, res: Response<any>, next: NextFunction) => Promise<void>;
    model: any;
}
