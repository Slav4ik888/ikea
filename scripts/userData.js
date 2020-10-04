import {getLocalStorage, setLocalStorage} from './storage.js';

export const userData = {
  _wishListData: getLocalStorage(`wishIkea`),
  get wishList() {
    console.log('this._wishListData: ', this._wishListData);
    return this._wishListData;
    
  },
  set wishList(id) {
    if (this._wishListData.includes(id)) {
      const idx = this._wishListData.indexOf(id);
      this._wishListData.splice(idx, 1);
    } else {
      this._wishListData.push(id);
    }
    setLocalStorage(`wishIkea`, this._wishListData);
  },

  _cartListData: getLocalStorage(`cartIkea`),

  get cartList() {
    return this._cartListData;
  },
  set cartList(id) {
    let obj = this._cartListData.find((it) => it.id === id);
    if (obj) {
      obj.count++;
    } else {
      obj = {
        id,
        count: 1,
      };
      this._cartListData.push(obj);
    }
    console.log(this._cartListData);
    setLocalStorage(`cartIkea`, this._cartListData);
  },

  set changeCountCartList(itemCart) {
    let obj = this._cartListData.find((it) => it.id === itemCart.id);
    obj.count = itemCart.count;
    setLocalStorage(`cartIkea`, this._cartListData);
  },

  set delItemCart(id) {
    let idx = this._cartListData.findIndex((it) => it.id === id);
    console.log('idx: ', idx);
    this._cartListData.splice(idx, 1);
    setLocalStorage(`cartIkea`, this._cartListData);


  }
  
};
