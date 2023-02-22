let Validator = require('validatorjs');

let validateInputCreate = (req, res, next) => {
    let validation = new Validator(
        req.body, 
        {
            message: 'required', 
        },
        {
            required: ":attribute can't empty"
        }
        );

        validation.checkAsync(() => {
            next()
        },
        () => {
          let msg = validation.errors.first('message')
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

let validateInputRegisterUser = (req, res, next) => {
    let validation = new Validator(
        req.body, 
        {
            username: 'required',
            password: 'required',
            departement: 'required'

        },
        {
            required: ":attribute can't empty"
        });

        validation.checkAsync(() => {
            next()
        },
        () => {
          let msg = validation.errors.first('username') || validation.errors.first('password') || validation.errors.first('departement')
          throw { name: 'validator', msg}
        });
}

let validateInputLoginUser = (req, res, next) => {
    let validation = new Validator(
        req.body, 
        {
            username: 'required',
            password: 'required',

        },
        {
            required: ":attribute can't empty"
        });
    
    validation.checkAsync(() => {
        next()
    },
    () => {
        let msg = validation.errors.first('username') || validation.errors.first('password')
        throw { name: 'validator', msg}
    });
}

module.exports = { validateInputCreate,
    validatorPatchInput,
    validateInputRegisterUser,
    validateInputLoginUser
    }