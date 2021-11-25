import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import  countries  from '../../data/countries.json'


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {

  public pais : any
  public dataCovid : any
  public formValue!: FormGroup
  public indicadorPais:any
  constructor(private servico : DataService, private formBuild : FormBuilder) { }

  ngOnInit(): void {
    this.indicadorPais= countries
    // console.log(this.indicadorPais)
    this.formValue = this.formBuild.group({
      select : ['']
    })
  }
  chageValue(event : any){
    console.log(event.value)
    this.pais = event.value
    console.log(this.pais);
    this.getDada()
  }

  getDada(){
    this.servico.getDadosById(this.pais).subscribe(data=>{
      console.log(data)
      this.dataCovid = data
    })
  }

}
