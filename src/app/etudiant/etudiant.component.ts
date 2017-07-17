import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html'
})
export class EtudiantComponent implements OnInit {

etudiants;

  constructor() {
    this.etudiants = [];
  }

  ngOnInit() {
  this.etudiants = [
    {nom : 'Foulen ben foulen', age : '24'},
    {nom : 'Mohamed ahmed' , age : '26'},
    {nom : 'Zayneb najjar', age : '24'}];
}

  ajouterEtudiant(NouvEtudiant) {
    this.etudiants.push({nom: NouvEtudiant.value});
    NouvEtudiant.value = '';
  }
  supprimerEtudiant(etudiant) {
    this.etudiants.splice(this.etudiants.indexOf(etudiant), 1);
  }

}
