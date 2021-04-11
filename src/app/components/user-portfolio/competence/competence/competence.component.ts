import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Competence } from 'src/app/modeles/competence';
import { CompetenceService } from 'src/app/services/competence.service';

@Component({
  selector: 'app-competence',
  templateUrl: './competence.component.html',
  styleUrls: ['./competence.component.scss']
})
export class CompetenceComponent implements OnInit {
  constructor(private competenceService: CompetenceService) { }
  title = "Compétence Professionnelle"

  competence: Observable<Competence[]> | null = null

  ngOnInit(): void {
  }

  showCompetence(){
    this.competence = this.competenceService.getMyCompetence()
  }

  onDelete(c: Competence){
    //console.log("Supprimer")
    this.competenceService.deleteCompetence(c).subscribe(
      data => {
        confirm("Voulez-vous vraiment supprimer cette compétence")
      }
    )
  }
}

