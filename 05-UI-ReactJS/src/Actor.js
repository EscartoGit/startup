export default class Actor{

  constructor(nombre, edad){
      this.name=nombre;
      this.age=edad;
  }

  getName(){
    return this.name;
  }

  getAge(){
    return this.age;
  }

  changeName(newname){
    this.name=newname;
  }

  changeAge(newage){
    this.age=newage;
  }
}
