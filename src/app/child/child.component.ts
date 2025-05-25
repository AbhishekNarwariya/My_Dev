import { Component } from '@angular/core';
import { NumService } from '../num.service';

@Component({
  selector: 'app-child',
  standalone: false,
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
  providers:[NumService]
})
export class ChildComponent {
 

}
