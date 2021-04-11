import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Formation } from 'src/app/modeles/formation';
import { FormationService } from 'src/app/services/formation.service';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.scss']
})
export class FormationComponent implements OnInit {
  constructor(private formationService: FormationService) { }
  title = "Formation Professionnelle"

  formation: Observable<Formation[]> | null = null

  ngOnInit(): void {
    this.showFormation()
  }

  showFormation(){  
    this.formation = this.formationService.getMyFormation()
  }

}
