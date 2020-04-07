import { Request, Response, NextFunction } from 'express';

export class Pet {
  _model: any;
  constructor(norm: any) {
    this.model = [{
      id: { type: Number, key: 'primary' },
      animal: { type: String, maxlength: 24 },
      color: { type: String, maxlength: 24 },
      weight: { type: String, maxlength: 24 },
      height: { type: String, maxlength: 24 },


      user_id: {
        type: Number,
        key: 'foreign',
        references: { table: 'User', foreignKey: 'id' },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      },
    }, 'A table to store users pets',
    [
      {
        route: '/get-all-pets',
        method: 'POST',
        callback: this.getAllPets,
        requireToken: true,
      },
      {
        route: '/get-pet-by-id/:id',
        method: 'POST',
        callback: this.getPetById,
        requireToken: true,
      },
      {
        route: '/create-pet',
        method: 'POST',
        callback: this.createPet,
        requireToken: true,
      },
      {
        route: '/update-pet/id/:id',
        method: 'PUT',
        callback: this.updatePet,
        requireToken: true,
      },
      
    ]
    ];
  }

  

  updatePet(model: any) {
    return async (req: Request, res: Response, next: NextFunction) => {
      console.log('req.body===>', req.body);
      let petCtrl = model.controller;

      let resp = await petCtrl.update(req, null, null);

      res.json({ message: 'Success', resp });
    }
  }

  createPet(model: any) {
    return async (req: Request, res: Response, next: NextFunction) => {
      console.log('req.body===>', req.body);
      let petCtrl = model.controller;

      let resp = await petCtrl.insert(req, null, null);

      res.json({ message: 'Success', resp });
    }
  }


  getAllPets(model: any) {
    return async (req: Request, res: Response, next: NextFunction) => {
      req.body = {

        get: ["*"]

      }
      let petCtrl = model.controller;

      let resp = await petCtrl.get(req, null, null);

      res.json({ message: 'Success', resp });
    }
  }

  getPetById(model: any) {
    return async (req: Request, res: Response, next: NextFunction) => {
      req.body = {

        get: ["*"],
        where: {
          id: req.params.id
        }

      }
      let petCtrl = model.controller;


      let resp = await petCtrl.get(req, null, null);

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