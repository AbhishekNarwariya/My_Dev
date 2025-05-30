import {Pipe, PipeTransform} from '@angular/core'

@Pipe({
  name:'square',
  standalone:false
})

export class square implements PipeTransform{
 transform(value:any){
  return value*value
 }
  
}