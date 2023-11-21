import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { OnInit } from '@angular/core';
import { SessaoService } from '../mercado/service/sessao.service';
import { Isessao } from '../mercado/service/isessao';


@Component({
  selector: 'app-mercado',
  templateUrl: './mercado.component.html',
  styleUrls: ['./mercado.component.scss']
})
export class MercadoComponent implements OnInit {
  
  ngOnInit(): void { this.listar() }

  produtos: Isessao[] = [];

  constructor( private service:SessaoService){ }

  listar(){
    this.service.listar().subscribe(dados => this.produtos = dados);
  }
  Comprar(){
    Swal.fire({
      title: "Você deseja comprar este item?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Adicionar ao carrinho",
      denyButtonText: `Cancelar`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Item adicionado ao carrinho!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Item não adicionado.", "", "info");
      }
    });
  }
}
