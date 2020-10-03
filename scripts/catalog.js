import {generateSubCatalog} from './generateSubCatalog.js';
import {getData} from './getData.js';

export const catalog = () => {

  const updateSubCatalog = generateSubCatalog();

  const btnBurger = document.querySelector(`.btn-burger`);
  const catalog = document.querySelector(`.catalog`);
  // const btnClose = document.querySelector(`.btn-close`);
  // const catalogList = document.querySelector(`.catalog-list`);
  const subCatalog = document.querySelector(`.subcatalog`);
  const subCatalogHeader = document.querySelector(`.subcatalog-header`);
  // const btnReturn = document.querySelector(`.btn-return`);

  const overlay = document.createElement(`div`);
  overlay.classList.add(`overlay`);
  document.body.insertAdjacentElement(`beforeend`, overlay);

  // ФУНКЦИИ

  const openMenu = () => {
    catalog.classList.add(`open`);
    overlay.classList.add(`active`);
  };

  const closeMenu = () => {
    closeSubMenu();
    catalog.classList.remove(`open`);
    overlay.classList.remove(`active`);
  };

  const handlerCatalog = e => {
    e.preventDefault();
    const target = e.target;
    const itemList = e.target.closest(`.catalog-list__item`); // Ищет вверх от места своего нахождения
    if (itemList) {
      // subCatalogHeader.innerHTML = itemList.innerHTML;
      getData.subCatalog(target.textContent, (data) => {
        updateSubCatalog(target.textContent, data);
        subCatalog.classList.add(`subopen`); 
      });
      

    }

    // if (e.target.classList.contains(`btn-close`)) {
    //   closeMenu();
    // }

    if (e.target.closest(`.btn-close`)) {
      closeMenu();
    }

  };

  const closeSubMenu = () => {
    subCatalog.classList.remove(`subopen`);
  };

  // СЛУШАТЕЛИ

  document.addEventListener(`keydown`, e => {
    // console.log(e);
    switch (e.code) {
      case  `Space`:
        console.log(`Space`);
        break;
      case  `Escape`:
        console.log(`Escape`);
        closeMenu();
        break;
    }

  });

  btnBurger.addEventListener(`click`, openMenu);
  // btnClose.addEventListener(`click`, closeMenu); 
  overlay.addEventListener(`click`, closeMenu);
  catalog.addEventListener(`click`, handlerCatalog );
  subCatalog.addEventListener(`click`, (e) => {
    const btnReturn = e.target.closest(`.btn-return`);
    if (btnReturn) {
      closeSubMenu();
    }
  });
  // btnReturn.addEventListener(`click`, closeSubMenu);
};
