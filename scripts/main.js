
const btnBurger = document.querySelector(`.btn-burger`);
const catalog = document.querySelector(`.catalog`);
const overlay = document.querySelector(`.overlay`);
const btnClose = document.querySelector(`.btn-close`);
const catalogList = document.querySelector(`.catalog-list`);
const subCatalog = document.querySelector(`.subcatalog`);
const subCatalogHeader = document.querySelector(`.subcatalog-header`);


// ФУНКЦИИ

const openMenu = () => {
  catalog.classList.add(`open`);
  overlay.classList.add(`active`);
};

const closeMenu = () => {
  catalog.classList.remove(`open`);
  overlay.classList.remove(`active`);
};

const openSubMenu = e => {
  e.preventDefault();
  const itemList = e.target.closest(`.catalog-list__item`); // Ищет вверх от места своего нахождения
  if (itemList) {
    subCatalogHeader.innerHTML = itemList.innerHTML;
    subCatalog.classList.add(`subopen`);

  }


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
btnClose.addEventListener(`click`, closeMenu);
overlay.addEventListener(`click`, closeMenu);
catalog.addEventListener(`click`, openSubMenu);