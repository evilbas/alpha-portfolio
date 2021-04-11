import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { QuillModule } from 'ngx-quill'
import { MatButtonModule } from '@angular/material/button'

import { AppComponent } from './app.component';
import { FormationComponent } from './components/user-portfolio/formation/formation/formation.component';
import { RouterModule, Routes } from '@angular/router';
import { ProfilComponent } from './components/profil/profil.component';
import { MonCvComponent } from './components/mon-cv/mon-cv.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfilUpdateComponent } from './components/profil-update/profil-update.component';
import { ProfilCreateComponent } from './components/profil-create/profil-create.component';
import { BlogAddComponent } from './components/user-portfolio/blog/blog-add/blog-add.component';
import { BlogComponent } from './components/user-portfolio/blog/blog/blog.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserComponent } from './components/user-portfolio/user/user.component';
import { FormationItemComponent } from './components/user-portfolio/formation/formation-item/formation-item.component';
import { ExperienceItemComponent } from './components/user-portfolio/experience/experience-item/experience-item.component';
import { ExperienceComponent } from './components/user-portfolio/experience/experience/experience.component';
import { CompetenceItemComponent } from './components/user-portfolio/competence/competence-item/competence-item.component';
import { CompetenceComponent } from './components/user-portfolio/competence/competence/competence.component';
import { AddFormationComponent } from './components/user-portfolio/formation/add-formation/add-formation.component';
import { AddFormationParcoursComponent } from './components/user-portfolio/formation/add-formation-parcours/add-formation-parcours.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigatorComponent } from './navigator/navigator.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ContentsComponent } from './contents/contents.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { CvComponent } from './cv/cv.component';
import { DragDropModule } from '@angular/cdk/drag-drop';


const routes:Routes = [
  {path: 'formation', component: FormationComponent},
  {path: 'experience', component: ExperienceComponent},
  {path: 'competence', component: CompetenceComponent},
  {path: 'profils/:id', component: ProfilComponent},
  {path: "mon-cv", component: MonCvComponent},
  {path: "blog/:id", component: BlogComponent},
  {path: "profil-create", component: ProfilCreateComponent},
  {path: 'profil-update/:id', component: ProfilUpdateComponent},
  {path: 'blog-add/:id', component: BlogAddComponent},
  {path: 'add-formation/:id', component: AddFormationComponent},
  {path: 'add-formation/parcours/:id', component: AddFormationParcoursComponent},
  {path: 'home', component: ContentsComponent},
  {path: '', component: CvComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    FormationComponent,
    ExperienceComponent,
    CompetenceComponent,
    ProfilComponent,
    MonCvComponent,
    BlogComponent,
    ProfilUpdateComponent,
    ProfilCreateComponent,
    BlogAddComponent,
    NavbarComponent,
    UserComponent,
    FormationItemComponent,
    ExperienceItemComponent,
    CompetenceItemComponent,
    AddFormationComponent,
    AddFormationParcoursComponent,
    NavigatorComponent,
    ContentsComponent,
    CvComponent 
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    QuillModule.forRoot(),
    MatButtonModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
