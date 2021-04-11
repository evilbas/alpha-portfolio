import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Competence } from 'src/app/modeles/competence';
import { Experience } from 'src/app/modeles/experience';
import { CompetenceService } from 'src/app/services/competence.service';
import { ExperienceService } from 'src/app/services/experience.service';

@Component({
  selector: 'app-add-formation-parcours',
  templateUrl: './add-formation-parcours.component.html',
  styleUrls: ['./add-formation-parcours.component.scss']
})
export class AddFormationParcoursComponent implements OnInit {
  formGroup: FormGroup
  formGroupExperience: FormGroup

  experience: Experience
  competence: Competence
  formationId: number

  titleCompetence: string = "Ajouter une compétence"
  titleExperience: string = "Ajouter une expérience"

  constructor(private competenceService: CompetenceService,
              private experienceService: ExperienceService,
              private formBuilder: FormBuilder,
              private activeRoute: ActivatedRoute) {
                this.formationId= + this.activeRoute.snapshot.params.id
               }

  ngOnInit(): void {

  }

  onAddCompetence(){
      let confirme = (confirm("Voulez-vous ajouter cette Compétence"))
      if(confirme){
      this.competenceService.addCompetence(this.formGroup.value, this.formationId).subscribe(
        response => {
          this.competence = response
        }
      )
      }
  }


  onAddExperience(){
    let confirme = (confirm("Voulez-vous ajouter cette Expérience"))
    if(confirme){
      this.experienceService.addExperience(this.formGroupExperience.value, this.formationId).subscribe(
        response => {
          this.experience = response
        }
      )
    }
}

  onOpenCompetence(){
    this.formGroup = this.formBuilder.group({
      domainePrincipal: [""],
      domaineSecondaire: [""],
      acquis: [""],
      niveau: [""]
    })
  }

  onOpenExperience(){
    this.formGroupExperience = this.formBuilder.group({
      titre: [""],
      mission: [""],
      debut: [""],
      fin: [""],
      lieu: [""]
    })
  }

}

