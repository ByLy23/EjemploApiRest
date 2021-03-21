import {Request, Response} from 'express';
import pool from '../database';


class ApiController{
    public async getConsulta1(req: Request, res: Response){
        const peticion= await pool.query(``);
        res.json(peticion);
    }
}

export const apiController= new ApiController();