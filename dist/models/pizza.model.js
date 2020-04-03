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
class Pizza {
    constructor(norm) {
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
                { route: '/get-all-pizzas',
                    method: 'POST',
                    callback: this.getAllPizzas,
                    requireToken: true,
                },
                { route: '/get-pizza-by-id/:id',
                    method: 'POST',
                    callback: this.getPizzaById,
                    requireToken: true,
                }
            ]];
    }
    getAllPizzas(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            req.body = {
                get: ["*"]
            };
            let pizzaCtrl = model.controller;
            let resp = yield pizzaCtrl.get(req, null, null);
            res.json({ message: 'Success', resp });
        });
    }
    getPizzaById(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            req.body = {
                get: ["*"],
                where: {
                    id: req.params.id
                }
            };
            let pizzaCtrl = model.controller;
            let resp = yield pizzaCtrl.get(req, null, null);
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
exports.Pizza = Pizza;
