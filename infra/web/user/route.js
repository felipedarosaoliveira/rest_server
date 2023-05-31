const upload = require('../uplodad');
function build(controller){
  return [
    {
        path:"/user/authenticate",
        method:'post',
        middleware:[controller.authenticate]
    },{
      path:"/user/create",
      method:'post',
      middleware:[upload.single('avatar'), controller.create]
    }
  ]
}

module.exports = {build}