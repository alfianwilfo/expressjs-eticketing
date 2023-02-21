let Validator = require('validatorjs');

let validateInput = (req, res, next) => {
    console.log("masuk sini");
    let validation = new Validator(req.body, 
        {
            name: 'required', 
            message: 'required', 
            departement: 'required'
        },
        {
            required: ":attribute can't empty"
        }
        );

        validation.checkAsync(() => {
            next()
        },
        () => {
          let msg = validation.errors.first('name') || validation.errors.first('message') || validation.errors.first('departement')
          throw { name: 'validator', msg}
        });
      
}

module.exports = { validateInput }