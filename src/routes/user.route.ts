import Router, {Request, Response} from "express";
import { create } from "../controllers/user.controller";

export const userRoute = Router(); //Responsável por realizar o roteamento, permite realizar a busca em uma rota

userRoute.post("/", create);