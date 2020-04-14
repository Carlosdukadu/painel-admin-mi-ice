import {Router, ActivatedRoute} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import { ClientesService } from 'app/services/clientes.service';
import { Cliente } from 'app/models/Cliente';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[] = [];
  filter: string;

  constructor(router: Router, private route: ActivatedRoute, private cliente: ClientesService) {

    this.cliente.buscarClientes().subscribe(
      (dados: Cliente[]) => {
        console.log(dados)
        this.clientes = dados;
        console.log(this.clientes)
      }
    )

  }

  removerCliente(idCliente) {
    let ctz = confirm("O cliente sera deletado permanentemente, confirma?")
    if(ctz){
      this.cliente.removerCliente(idCliente).subscribe(() => {
        alert("Cliente removido com sucesso")
        location.reload()
      })
    }
  }






  ngOnInit() {  }

}
