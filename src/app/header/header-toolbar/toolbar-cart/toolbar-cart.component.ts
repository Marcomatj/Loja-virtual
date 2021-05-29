import { Component, OnInit } from '@angular/core';
import { CartItemModel } from 'src/app/models/cart-item.model';
import { CartItemService } from 'src/app/services/cart-item.service';

@Component({
  selector: 'l-virtual-toolbar-cart',
  templateUrl: './toolbar-cart.component.html',
  styleUrls: ['./toolbar-cart.component.css']
})
export class ToolbarCartComponent implements OnInit {

  items: CartItemModel[] = []

  constructor(private cartService: CartItemService) { }

  ngOnInit(): void {

    this.cartService.addRemoveItemEmitter.subscribe((receivedItems: CartItemModel[]) => {
      this.items = receivedItems

      console.log(`Os itens foram recebidos com sucesso =D`)
    })

  }

}
