import { Observable } from 'rxjs';
import { ProductModel } from '../models/product.model';
import { HttpClient } from '@angular/common/http';
import { APP_API } from '../app.api';
import { Injectable } from '@angular/core';


@Injectable()
export class ProductService{

    constructor(private http: HttpClient){ }

    getProducts() : Observable<ProductModel[]>{

        let endpoint: string = `${APP_API}/products`

        return this.http.get<ProductModel[]>(endpoint)

    }

    

}