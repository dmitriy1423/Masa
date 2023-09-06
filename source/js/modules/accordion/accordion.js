import {Accordions} from './accordions';
let accordions;

const initAccordion = () => {
  accordions = new Accordions();
  // Используйте в разработке экспортируемую переменную accordions, window сделан для бэкэнда
  window.accordions = accordions;
};

export {initAccordion, accordions};
