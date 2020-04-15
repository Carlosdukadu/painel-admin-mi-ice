import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'app/services/service.service';
import { Categoria } from 'app/Models/Categoria';

@Component({
  selector: 'app-alterar-categoria',
  templateUrl: './alterar-categoria.component.html',
  styleUrls: ['./alterar-categoria.component.css']
})
export class AlterarCategoriaComponent implements OnInit {

  id: number;
  categoria : Categoria;
  descricao;

  constructor(private router: ActivatedRoute, private service: ServiceService) { 

    this.id = parseInt(this.router.snapshot.paramMap.get('id'));

    service.getCategoria(this.id).subscribe((data) => {
      this.categoria = data
    })
  
  }

  ngOnInit(): void {
  }


  mudar(){
    

    if(this.descricao != null){
      this.categoria.descricao = this.descricao
    }

    this.service.alterarCategoria(this.categoria).subscribe((data) => {
      console.log(data)
    })

  }

}
