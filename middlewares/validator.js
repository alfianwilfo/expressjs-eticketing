let Validator = require('validatorjs');

let validateInputCreate = (req, res, next) => {
    let validation = new Validator(
        req.body, 
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

let validatorPatchInput = (req, res, next) => {
    let validation = new Validator(
        req.body, 
        {
            status: 'required'
        },
        {
            required: ":attribute can't empty"
        });

        validation.checkAsync(() => {
            next()
        },
        () => {
          let msg = validation.errors.first('status')
          throw { name: 'validator', msg}
        });
}

module.exports = { validateInputCreate, validatorPatchInput }