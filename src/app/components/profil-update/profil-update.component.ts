import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Profil } from 'src/app/modeles/profil';
import { ProfilService } from 'src/app/services/profil.service';

@Component({
  selector: 'app-profil-update',
  templateUrl: './profil-update.component.html',
  styleUrls: ['./profil-update.component.scss']
})
export class ProfilUpdateComponent implements OnInit {

  selectedFile: File = null

  profilId: number
  constructor(private activateRoute: ActivatedRoute, 
    private fb: FormBuilder, private profilService:  
    ProfilService, private router: Router) {
      this.profilId = this.activateRoute.snapshot.params.id
     }

  fg: FormGroup

  submitted: boolean = false
  
  ngOnInit(): void {
    this.profilService.getProfil(this.profilId).subscribe(
      profil=>{
        this.fg = this.fb.group({
          idProfil: [profil.idProfil, Validators.required],
          prenom: [profil.prenom, Validators.required],
          nom: [profil.nom, Validators.required],
          naissance: [profil.naissance, Validators.required],
          adresse: [profil.adresse, Validators.required],
          codepostale: [profil.codepostale, Validators.required],
          ville: [profil.ville, Validators.required],
          pays: [profil.pays, Validators.required],
          telephone: [profil.telephone, Validators.required],
          statut: [profil.statut, Validators.required],
          email: [profil.email, Validators.required],
          civilite: [profil.civilite, Validators.required],
          photo: [],
        })
      }
    )
  }


/*   onFileSelected(event){
    this.selectedFile = event.target.files[0]
    console.log(event)
  } */

  onFileSelected(event){
    if(event.target.files){
      var reader = new FileReader()
      reader.readAsDataURL(event.target.files[0])
      reader.onload=(event: any)=>{
        
      }
    }
  }

  // Cette méthode permet en même temps de créer et de modifier un profil user
  onUpProfil(){
    this.submitted = true
    if(this.fg.invalid) return
    this.profilService.updateProfil(this.fg.value).subscribe(
      data => {
        this.router.navigateByUrl('/profils/' + this.profilId)
      }
    )
  
    }

}
