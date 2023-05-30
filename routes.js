const routes = [
    ...require('./infra/web/user').route,
]

function configure(app){
    console.log(routes)
    routes.forEach(route=>{
        app[route.method](route.path,route.middleware);
    })
}

module.exports = {
    configure
}