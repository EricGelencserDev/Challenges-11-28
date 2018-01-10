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
    }
  }

  validateLength(fieldName){
  if(this.fields[fieldName].length <= 8 ){
    this.addError(fieldName, 'Password needs to be more than 8 characters long!')
  }
}

  validateAlphaNum(fieldName){
      const filter = / d{1} /
    if(!filter.test(this.fields[fieldName])){
        this.addError(fieldName, 'Password needs to contain both letters and numbers.')
  }
}

  validateEmail(fieldName){
    const filter = /^\w+([\.-]?\ w+)*@\w+([\.-]?\ w+)*(\.\w{2,3})+$/
    if(!filter.test(this.fields[fieldName])){
      this.addError(fieldName, 'is not an email')
    }
  }

  addError(fieldName, message){
    this.errors[fieldName] = [
        message
    ]
  }
}


const store = new RegistrationStore()
export default store
