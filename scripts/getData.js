const PARAM = {
  cat: `category`,
  subcat: `subcategory`,
  search: [`name`, `description`, `subcategory`],
};


export const getData = {
  url: `database/dataBase.json`,
  get(process) {
    fetch(this.url)
      .then((res) => res.json())
      .then(process);
  },
  wishList(list, callback) {
    this.get((data) => {
      const result =  data.filter((it) => list.includes(it.id));
      callback(result);
    })
  },
  item(value, callback) {
    this.get((data) => {
      const result =  data.find((it) => it.id === value);
      callback(result);
    })
  },
  cart(list, callback) {
    this.get((data) => {
      const result =  data.filter((it) => list.some((obj) => obj.id === it.id));
      callback(result);
    })
  },
  category(prop, value, callback) {
    // console.log([PARAM[prop]]);
    this.get((data) => {
      const result =  data.filter((it) => it[PARAM[prop]].toLowerCase() === value.toLowerCase());
      callback(result);
    })
  },
  search(value, callback) {
    this.get((data) => {
      const result =  data.filter((item) => {
        for(const prop in item) {
          if (PARAM.search.includes(prop.toLowerCase())
            && item[prop].includes(value.toLowerCase())) {
            return true;
          }
        }
      });
      callback(result);
    })
  },
  catalog(callback) {
    this.get((data) => {
      const result = data.reduce((arr, {category}) => {
        if (!arr.includes(category)) {
          arr.push(category);
        }
        return arr; 
      }, []);
      callback(result);
    })
  },
  subCatalog(value, callback) {
    this.get((data) => {
      const result = data
        .filter((it) => it.category === value)
        .reduce((arr, item) => {
          if (!arr.includes(item.subcategory)) {
            arr.push(item.subcategory)
          }
          return arr;
        }, []);
      callback(result);
    })
  }
};
// getData.get(console.log);