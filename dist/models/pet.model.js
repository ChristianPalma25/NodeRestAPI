"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class Pet {
    constructor(norm) {
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
                }
            ]
        ];
    }
    createPet(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            console.log('req.body===>', req.body);
            let petCtrl = model.controller;
            let resp = yield petCtrl.insert(req, null, null);
            res.json({ message: 'Success', resp });
        });
    }
    getAllPets(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            req.body = {
                get: ["*"]
            };
            let petCtrl = model.controller;
            let resp = yield petCtrl.get(req, null, null);
            res.json({ message: 'Success', resp });
        });
    }
    getPetById(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            req.body = {
                get: ["*"],
                where: {
                    id: req.params.id
                }
            };
            let petCtrl = model.controller;
            let resp = yield petCtrl.get(req, null, null);
            res.json({ message: 'Success', resp });
        });
    }
    set model(model) {
        this._model = model;
    }
    get model() {
        return this._model;
    }
}
exports.Pet = Pet;
