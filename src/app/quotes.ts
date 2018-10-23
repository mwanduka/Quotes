export class Quotes {
  public showExplanation:boolean
  constructor(public id:number,public quote:string, public author:string, public explanation:string, public completeDate:Date){
    this.showExplanation=false
  }
}
