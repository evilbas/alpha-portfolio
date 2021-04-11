import { Component, Input, OnInit } from '@angular/core';
import { Formation } from 'src/app/modeles/formation';

@Component({
  selector: 'app-formation-item',
  templateUrl: './formation-item.component.html',
  styleUrls: ['./formation-item.component.scss']
})
export class FormationItemComponent implements OnInit {

  @Input() formation: Formation

  constructor() { }

  ngOnInit(): void {
  }

}
