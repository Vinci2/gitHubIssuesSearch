import { Injectable } from '@angular/core';

import { LocalStorageKeys } from '../constants/local-storage-keys.constants';

@Injectable()
export class LocalStorageAccessService {
private ARRAY_SEPARATOR = '/';

  public saveArray(key: LocalStorageKeys, values: any[]): void {

    localStorage.setItem(key, values.join(this.ARRAY_SEPARATOR));
  }

  public getItem(key: string): any {
    const itemString = (localStorage.getItem(key));
    return itemString ? itemString.split(this.ARRAY_SEPARATOR) : null;
  }
}
