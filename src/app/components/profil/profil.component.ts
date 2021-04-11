import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Profil } from 'src/app/modeles/profil';
import { ProfilService } from 'src/app/services/profil.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  monProfil: Profil | null = null
  idProfil: number

  constructor(private profilService: ProfilService, 
    private router: Router,
    private activatedRoute: ActivatedRoute) {
      this.idProfil = this.activatedRoute.snapshot.params.id
     }

  ngOnInit(): void {

  }

  showProfil(){
    this.profilService.getMyProfil(this.idProfil).subscribe(
      response => {
        this.monProfil = response;
      }
    )
  }

  onCreateProfil(){
    return this.router.navigateByUrl("profil-create")
  }

  editerProfil(p: Profil){
    return this.router.navigateByUrl("profil-update/"+p.idProfil)
  }

  onCreateFormation(p: Profil){
    return this.router.navigateByUrl("add-formation/"+p.idProfil)
  }

  onCreateBlog(p: Profil){
    return this.router.navigateByUrl("blog-add/" + this.idProfil)
  }

}
