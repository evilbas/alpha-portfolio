import { Component, Input, OnInit } from '@angular/core';
import { Competence } from 'src/app/modeles/competence';

@Component({
  selector: 'app-competence-item',
  templateUrl: './competence-item.component.html',
  styleUrls: ['./competence-item.component.scss']
})
export class CompetenceItemComponent implements OnInit {

  @Input() competence: Competence

  constructor() { }

  ngOnInit(): void {
  }

}
