
export default class Logger{
  constructor(id,subject){//Subject param in this case will correspond to "playbutton"'s id
    this.id=id;
    this.subject = subject;
  }

  log(info){
    console.log(this.subject + info);
  }
}
