import { Component, OnInit } from '@angular/core';
import { Produto } from 'app/Models/Produto';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'app/services/service.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Categoria } from 'app/Models/Categoria';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  formCategoria: FormGroup;
  categorias: any;
  descricao;

  constructor(private service: ServiceService, private fb: FormBuilder) {
    this.formCategoria = this.adicionarCategoria()

    this.service.buscarCategorias().subscribe((dados: Categoria) => {
      this.categorias = dados;
    })
  }

  ngOnInit(): void {
  }


  adicionarCategoria(): FormGroup {
    return this.fb.group({
      descricao: new FormControl("")
    })
  }



  enviarCategoria() {

    console.log(this.formCategoria.value);

    this.service.adicionarCategoria(this.formCategoria.value).subscribe((data) => {
      alert("Categoria adicionado com sucesso")
      this.formCategoria.reset()
      location.reload()
    })
  }



  removerCategoria(idCategoria) {
    let ctz = confirm("A categoria será deletada permanentemente")
    if(ctz){
      this.service.removerCategoria(idCategoria).subscribe(() => {
        alert("Categoria removida com sucesso")
        location.reload()
      })
    }
  }



  alterarCategoria(categoria){
    this.service.alterarCategoria(categoria).subscribe(
      (data) => {
        console.log(data)
        alert("Categoria alterada com sucesso!");
      }
    )
  }

}