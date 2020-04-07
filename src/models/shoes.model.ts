import {Request, Response, NextFunction} from 'express';

export class Shoes {
    _model: any;
    constructor(norm: any) {
      this.model = [{
        id: { type: Number, key: 'primary' },
        size: { type: String, maxlength: 24 },
        color: { type: String, maxlength: 24 },
        brand: { type: String, maxlength: 24 },
        type: { type: String, maxlength: 24 },


        user_id: {
          type: Number,
          key: 'foreign',
          references: { table: 'User', foreignKey: 'id' },
          onDelete: 'cascade',
          onUpdate: 'cascade'
        },
      }, 'A table to store shoe orders', 
      [
        {route: '/get-all-shoes',
        method: 'POST',
        callback: this.getAllShoes,
        requireToken: true,
      },
      {route: '/get-shoes-by-id/:id',
      method: 'POST',
      callback: this.getShoesById,
      requireToken: true,
    },
    {
        route: '/create-shoes',
        method: 'POST',
        callback: this.createShoes,
        requireToken: true,
      },
      {
        route: '/update-shoes/id/:id',
        method: 'PUT',
        callback: this.updateShoes,
        requireToken: true,
      },
      
    
      ]];
    }

    

    updateShoes(model: any) {
        return async (req: Request, res: Response, next: NextFunction) => {
          console.log('req.body===>', req.body);
          let petCtrl = model.controller;
    
          let resp = await petCtrl.update(req, null, null);
    
          res.json({ message: 'Success', resp });
        }
      }


    createShoes(model: any) {
        return async (req: Request, res: Response, next: NextFunction) => {
          console.log('req.body===>', req.body);
          let petCtrl = model.controller;
    
          let resp = await petCtrl.insert(req, null, null);
    
          res.json({ message: 'Success', resp });
        }
      }

    getAllShoes(model:any) {
        return async (req: Request, res: Response, next: NextFunction) => {
            req.body = {
              
                    get: ["*"]
                
            }
             let shoesCtrl = model.controller;
        
           let resp = await shoesCtrl.get(req, null, null);
           
            res.json({ message: 'Success', resp });
        }
    }

    getShoesById(model:any) {
        return async (req: Request, res: Response, next: NextFunction) => {
            req.body = {
              
                    get: ["*"],
                    where: {
                        id: req.params.id
                    }
                
            }
             let shoesCtrl = model.controller;
          
        
           let resp = await shoesCtrl.get(req, null, null);
           
            res.json({ message: 'Success', resp });
        }
    }
  
    set model(model: any) {
      this._model = model;
    }
  
    get model() {
      return this._model;
    }
  
  }