import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'app/services/service.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  ngOnInit() {
  }

  formProduto: FormGroup;

  constructor(private service: ServiceService, private fb: FormBuilder) {
    this.formProduto = this.adicionarProduto()
  }

  adicionarProduto(): FormGroup {
    return this.fb.group({
      nome: new FormControl(""),
      descricao: new FormControl(""),
      imagem: new FormControl(""),
      categoria: new FormControl(""),
      precoCheio: new FormControl(""),
      precoDesconto: new FormControl("")
    })
  }

  enviarProduto() {
    console.log(this.formProduto.value);
    
    this.service.adcProdutos(this.formProduto.value).subscribe((data) => {
      alert("Produto adicionado com sucesso")
      this.formProduto.reset()
    })
  }
}
