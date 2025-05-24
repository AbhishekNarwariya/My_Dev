import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })

@Injectable()
export class NumService {

  list:number[]=[]

  constructor() { }

  addnum(num:any){
    this.list.push(num)
  }

  getData(){
    return this.list
  }
}
