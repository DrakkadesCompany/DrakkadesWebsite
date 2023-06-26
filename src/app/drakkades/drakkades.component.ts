import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-drakkades',
  templateUrl: './drakkades.component.html',
  styleUrls: ['./drakkades.component.scss']
})
export class DrakkadesComponent {

  @Output() sidenavClose = new EventEmitter();

  constructor(private router: Router){}

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }

}
