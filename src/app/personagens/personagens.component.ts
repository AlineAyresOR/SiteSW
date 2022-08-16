import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-personagens',
  templateUrl: './personagens.component.html',
  styleUrls: ['./personagens.component.scss']
})
export class PersonagensComponent implements OnInit{
  characters: any;
  apiUrl = 'https://swapi.dev/api/people/';
 
 
  constructor(private apiService:ApiService) { }

  ngOnInit(): void {

    this.setPeople();
    
  }


  setPeople(){
    this.apiService.listAll(this.apiUrl)
    .subscribe(
    resposta => this.characters = resposta
    
    );

  }

  }


