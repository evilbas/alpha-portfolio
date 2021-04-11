import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Formation } from 'src/app/modeles/formation';
import { FormationService } from 'src/app/services/formation.service';

@Component({
  selector: 'app-add-formation',
  templateUrl: './add-formation.component.html',
  styleUrls: ['./add-formation.component.scss']
})
export class AddFormationComponent implements OnInit {

  formGroup: FormGroup
  idProfil: number
  formation: Formation

  titleFormation: string = "Ajouter une formation"

  constructor(private formationService: FormationService,
              private formBuider: FormBuilder,
              private route: Router,
              private activeRoute: ActivatedRoute) {
                this.idProfil = this.activeRoute.snapshot.params.id
               }

  ngOnInit(): void {
    this.formGroup = this.formBuider.group({
      idProfil: [this.idProfil],
      nomFormation: [""],
      titre: [""],
      niveauFormation: [""],
      description: [""],
      institut: [""],
      annee: [""],
      autonomie: [false]
    })
  }

  onAddFormation(){
    this.formationService.addFormation(this.formGroup.value, this.idProfil).subscribe(
      response => {
        this.formation = response
        return this.route.navigateByUrl('/add-formation/parcours/' + this.formation.idFormation)
      }
    )
  }

  onProfilReturn(){
    return this.route.navigateByUrl("/profils/" + this.idProfil)
  }

}
