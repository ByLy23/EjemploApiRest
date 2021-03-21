import {Router} from 'express';
import {apiController} from '../controladores/apiController';


class ApiRoutes{
    public router: Router=Router();
    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/consulta1',apiController.getConsulta1);
    }
}
const apiRoutes= new ApiRoutes();
export default apiRoutes.router;