import {Request, Response, NextFunction} from 'express';

export class Pizza {
    _model: any;
    constructor(norm: any) {
      this.model = [{
        id: { type: Number, key: 'primary' },
        size: { type: String, maxlength: 24 },
        crust: { type: String, maxlength: 24 },
        sauce: { type: String, maxlength: 24 },
        cheese: { type: String, maxlength: 24 },
        toppings: { type: String, maxlength: 24 },

        user_id: {
          type: Number, 
          key: 'foreign',
          references: { table: 'User', foreignKey: 'id' },
          onDelete: 'cascade',
          onUpdate: 'cascade'
        },
      }, 'A table to store pizza orders',
       [
        {route: '/get-all-pizzas',
        method: 'POST',
        callback: this.getAllPizzas,
        requireToken: true,
       },
       {route: '/get-pizza-by-id/:id',
       method: 'POST',
       callback: this.getPizzaById,
       requireToken: true,
     },
     {
        route: '/create-pizza',
        method: 'POST',
        callback: this.createPizza,
        requireToken: true,
      }
      ]];
    }

    createPizza(model: any) {
        return async (req: Request, res: Response, next: NextFunction) => {
          console.log('req.body===>', req.body);
          let petCtrl = model.controller;
    
          let resp = await petCtrl.insert(req, null, null);
    
          res.json({ message: 'Success', resp });
        }
      }
  
    getAllPizzas(model:any) {
        return async (req: Request, res: Response, next: NextFunction) => {
            req.body = {
              
                    get: ["*"]
                
            }
             let pizzaCtrl = model.controller;
        
           let resp = await pizzaCtrl.get(req, null, null);
           
            res.json({ message: 'Success', resp });
        }
    }

    getPizzaById(model:any) {
        return async (req: Request, res: Response, next: NextFunction) => {
            req.body = {
              
                    get: ["*"],
                    where: {
                        id: req.params.id
                    }
                
            }
             let pizzaCtrl = model.controller;
          
        
           let resp = await pizzaCtrl.get(req, null, null);
           
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