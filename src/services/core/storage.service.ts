import { Injectable } from '@angular/core';
import { storageKeys } from './enums';

@Injectable()
export class StorageService {

  constructor(private storage: Storage) { }
  async get(storageKeys: storageKeys) {
    let result = await this.storage.get(storageKeys).then((data) => { return data; },
      error => {
        console.error(error);

      })
    return result;
  }
  set(storageKeys: storageKeys, values: string) {
    return this.storage.set(storageKeys, values).then(
      data => { return data; },
      error => console.error(error)
    );
  }



  delete(storageKeys: storageKeys) {
    return this.storage.remove(storageKeys).then(data => { return data; },
      error => console.error(error));
  }

}
