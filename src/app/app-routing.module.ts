import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    loadChildren: () => import('./connexion/connexion.module').then( m => m.ConnexionPageModule)
  },
  {
    path: 'ajout-utilisateur',
    loadChildren: () => import('./ajout-utilisateur/ajout-utilisateur.module').then( m => m.AjoutUtilisateurPageModule)
  },
  {
    path: 'afficher-animaux',
    loadChildren: () => import('./afficher-animaux/afficher-animaux.module').then( m => m.AfficherAnimauxPageModule)
  },
  {
    path: 'etat-sante',
    loadChildren: () => import('./etat-sante/etat-sante.module').then( m => m.EtatSantePageModule)
  },
  {
    path: 'affichage-espece',
    loadChildren: () => import('./affichage-espece/affichage-espece.module').then( m => m.AffichageEspecePageModule)
  },
  {
    path: 'ajouter-alerte',
    loadChildren: () => import('./ajouter-alerte/ajouter-alerte.module').then( m => m.AjouterAlertePageModule)
  },
  {
    path: 'alerte',
    loadChildren: () => import('./alerte/alerte.module').then( m => m.AlertePageModule)
  },
  {
    path: 'modifier-alerte',
    loadChildren: () => import('./modifier-alerte/modifier-alerte.module').then( m => m.ModifierAlertePageModule)
  },
  {
    path: 'valider-mission',
    loadChildren: () => import('./valider-mission/valider-mission.module').then( m => m.ValiderMissionPageModule)
  },
  {
    path: 'formulaire-valider-mission',
    loadChildren: () => import('./formulaire-valider-mission/formulaire-valider-mission.module').then( m => m.FormulaireValiderMissionPageModule)
  },
  {
    path: 'encyclopedie',
    loadChildren: () => import('./encyclopedie/encyclopedie.module').then( m => m.EncyclopediePageModule)
  },
  {
    path: 'detail-espece',
    loadChildren: () => import('./detail-espece/detail-espece.module').then( m => m.DetailEspecePageModule)
  },
  {
    path: 'mission-admin',
    loadChildren: () => import('./mission-admin/mission-admin.module').then( m => m.MissionAdminPageModule)
  },
  {
    path: 'edit-mission-admin',
    loadChildren: () => import('./edit-mission-admin/edit-mission-admin.module').then( m => m.EditMissionAdminPageModule)
  },
  {
    path: 'connexion',
    loadChildren: () => import('./connexion/connexion.module').then( m => m.ConnexionPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
