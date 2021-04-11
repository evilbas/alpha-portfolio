import { Component, Input, OnInit } from '@angular/core';
import { Experience } from 'src/app/modeles/experience';

@Component({
  selector: 'app-experience-item',
  templateUrl: './experience-item.component.html',
  styleUrls: ['./experience-item.component.scss']
})
export class ExperienceItemComponent implements OnInit {

  @Input() experience: Experience

  constructor() { }

  ngOnInit(): void {
  }

}
