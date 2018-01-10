class RegistrationStore{
  constructor(){
    this.fields = {
      firstName:'',
      lastName:'',
      email:'',
      password:''
    }
    this.errors = {}
  }

  getFields(){
    return this.fields
  }

  getErrors(){
    // {}
    // or
    // {firstName: 'is requires'}
    return this.errors

  }

  validate(){
    this.errors = {}
    this.validatePresence('firstName')
    this.validatePresence('lastName')
    this.validatePresence('password')
    this.validateEmail('email')
    this.validateLength('password')
    this.validateAlphaNum('password')
    console.log(this.errors)
  }

  validatePresence(fieldName){
    if(this.fields[fieldName] === ''){
      this.addError(fieldName, 'is Required')
        message
    ]
  }
}
const store = new RegistrationStore()
export default store
