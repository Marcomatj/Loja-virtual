import { CartItemModel } from 'src/app/models/cart-item.model';
import { Injectable, EventEmitter } from "@angular/core";
import { Ng2IzitoastService } from 'ng2-izitoast';


@Injectable()
export class CartItemService {

  items: CartItemModel[] = []
  addRemoveItemEmitter = new EventEmitter<CartItemModel[]>()

  constructor(private iziToast: Ng2IzitoastService){  }

  add(item: CartItemModel){

    this.items.push(item)

    this.addRemoveItemEmitter.emit(this.items)

    console.log(`add: O item ${item.name} foi adicionado ao carrinho`)

    this.showMessage(item.name)
  }

  showMessage(name: string){

    this.iziToast.show({
      title: `${name}`,
      message: `adicionado ao carrinho`,
      position: 'topLeft',
      balloon: true,
      class: 'iziToast iziToast-success',
      progressBarColor: 'red',
      timeout: 3000,
      icon: 'icon-circle-check'
    })
  }
}
