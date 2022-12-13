import { Injectable } from '@angular/core';
import { chngVerBytes } from './xpub.service.vendor'

@Injectable({
  providedIn: 'root'
})
export class XpubService {

  constructor() { }
}
export var xpubPrefixes = new Map([['xpub', '0488b21e'], ['ypub', '049d7cb2'], ['Ypub', '0295b43f'], ['zpub', '04b24746'], ['Zpub', '02aa7ed3'], ['tpub', '043587cf'], ['upub', '044a5262'], ['Upub', '024289ef'], ['vpub', '045f1cf6'], ['Vpub', '02575483']]);

export function xpubConvert(to: string, xpub: string) {
  return chngVerBytes(xpub, to);
}
