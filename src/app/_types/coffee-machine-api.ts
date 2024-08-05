import { Extra } from "./extra";
import { Size } from "./size";
import { Type } from "./type";

export interface GetCoffeeMachineResponse {
    _id: string
    types: Type[]
    sizes: Size[]
    extras: Extra[]
} 