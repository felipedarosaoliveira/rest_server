class AuthenticateUseCase{
    constructor({repository}){
        this.repository = repository;
        this.execute = this.execute.bind(this);
    }

    async execute(context){
        const {login, password} = context;
        const user = await this.repository.findByEmail(login);
        if(user && user.password === password){
            return user;
        }
        return null;
    }
}

module.exports = AuthenticateUseCase;