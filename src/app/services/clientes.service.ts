import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(public http: HttpClient) { }


  buscarClientes(): Observable<any> {
    return this.http.get("http://localhost:8080/ecommerce/cliente/lista")
  }

  removerCliente(idCliente) {
    return this.http.delete("http://localhost:8080/ecommerce/cliente/" + idCliente)
  }

  

}
