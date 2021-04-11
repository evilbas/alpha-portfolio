import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Experience } from 'src/app/modeles/experience';
import { ExperienceService } from 'src/app/services/experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  constructor(private experienceService: ExperienceService) { }
  title = "Expérience Professionnelle"

  experience: Observable<Experience[]> | null = null

  ngOnInit(): void {
  }

  showMyExperience(){
    this.experience = this.experienceService.getMyExperience()
  }

}
