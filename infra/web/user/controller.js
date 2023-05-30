const AuthenticateUseCase = require('../../../usecase/user/authenticate'); 
class UserController{

    constructor({repository}){
        this.repository = repository;
        this.authenticate = this.authenticate.bind(this);
    }

    async authenticate(req,res){
        const {login,password} = req.body.credentials;
        const useCase = new AuthenticateUseCase({repository:this.repository});
        const user = await useCase.execute({login,password});
        if(user){
            return res.json(user);
        }else{
            res.sendStatus(401);
        }

    }
}

function build({repository}){
    return new UserController({repository});
}

module.exports = {build};