import {Inject, Injectable} from '@angular/core';
import {DOCUMENT} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class WebComponentFactoryService {
  constructor(@Inject(DOCUMENT) private document: Document) {
  }

}
