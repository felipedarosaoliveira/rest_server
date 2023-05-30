let data = [
    {id:1,name:"João",email:"joao@test.com",password:"123"}
];
let nextID = 2;

async function findAll(){
    return Promise.resolve(data);
}


async function findById(id){
    return Promise.resolve(data.find(user => user.id === id));
}

async function findByEmail(email){
    return Promise.resolve(data.find(user => user.email === email));
}

async function insert(user){
    if(user &&!user.id){
        user.id = nextID++;
        data.push(user);
    }
    return Promise.resolve(user);
}

async function update(user){
    if(user && user.id){
       data = data.map(currentUser => currentUser.id === user.id ? user : currentUser);
    }
    return Promise.resolve(user);
}

async function remove(id){
    let total = data.length;
    if(id){
        data = data.filter(user => user.id != id);
    }
    return Promise.resolve(data.length < total);
}

module.exports = {
    findAll,
    findById,
    findByEmail,
    insert,
    update,
    remove
}