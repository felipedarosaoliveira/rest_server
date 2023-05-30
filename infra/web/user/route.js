function build(controller){
  return [
    {
        path:"/user/authenticate",
        method:'post',
        middleware:controller.authenticate
    }
  ]
}

module.exports = {build}