import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Profil } from 'src/app/modeles/profil';
import { ProfilService } from 'src/app/services/profil.service';

@Component({
  selector: 'app-profil-create',
  templateUrl: './profil-create.component.html',
  styleUrls: ['./profil-create.component.scss']
})
export class ProfilCreateComponent implements OnInit {

  fg: FormGroup
  submitted: boolean = false
  profil: Profil

  constructor(private profilService: ProfilService,
              private fb: FormBuilder,
              private router: Router) {}

  ngOnInit(): void {
    this.fg = this.fb.group({
      prenom: ["", Validators.required],
      nom: ["", Validators.required],
      naissance: [, Validators.required],
      adresse: ["", Validators.required],
      codepostale: ["", Validators.required],
      ville: ["", Validators.required],
      pays: ["", Validators.required],
      telephone: ["", Validators.required],
      statut: ["", Validators.required],
      email: [, Validators.required],
      civilite: ["", Validators.required]
    })
}


onCreateProfil(){
  this.submitted = true
  if(this.fg.invalid) return
  this.profilService.createProfil(this.fg.value).subscribe(
    data => {
      this.profil = data
      return this.router.navigateByUrl('/profils/' + this.profil.idProfil)
    }
  )
}

}
