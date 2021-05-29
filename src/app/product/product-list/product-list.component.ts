import { CartItemService } from './../../services/cart-item.service';
import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { CartItemModel } from 'src/app/models/cart-item.model';

@Component({
  selector: 'l-virtual-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: ProductModel[] = []

  constructor(private productService: ProductService, private cartItemService: CartItemService) { }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts(){

    this.productService.getProducts().subscribe((productsResponse: ProductModel[]) => {

      // soh fazendo um teste aqui..
      productsResponse.forEach(item => {
        console.log(`item ${item.name} ok`)

        console.log(`images ${item.images.common.imageLgPath}`)

      });


      this.products = productsResponse
    })



  }

  addCartItem(item: ProductModel){

    let cartItem = new CartItemModel()
    cartItem.id = item.id
    cartItem.brand = item.brand
    cartItem.image = item.images.common.imageLgPath
    cartItem.name = item.name
    cartItem.price = item.price

    this.cartItemService.add(cartItem)
  }

}
