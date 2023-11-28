import transmission from './images/service-transmission.png';
import diagnostics from './images/service-diagnostics.png';
import chassis from './images/service-chassis.png';
import engine from './images/service-engine.png';
import to from './images/service-to.png';

export const promotions = [
  {
    imageClass: 'promotions__image_car',
    title: 'Бесплатный подменный автомобиль на время ремонта',
    paragraph: [
      'В случае длительного ремонта выходящего за оговоренный ранее срок, мы предоставим подменный авто.',
      'Увеличение срока по причине клиента, задержке запасных частей и других форс-мажоров не входит в акцию.',
      'Заправка, мойка и другие сопутствующие расходы связанные с подменным авто, на период эксплуатации возлагаются на клиента.',
    ]
  },
  {
    imageClass: 'promotions__image_car-bottom',
    title: 'Бесплатный осмотр днища и ходовой части',
    paragraph: [
      'При комплексном периодическом обслуживании с заменой масла и фильтров - осмотр днища и ходовой части бесплатно.',
      'В осмотр днища входит визуальный осмотр на наличие серьезных повреждений, сильной коррозии, нарушение целостности сварных швов.',
      'В осмотр ходовой части входит визульный осмотр целостности пыльников, наличие люфтов, подтёков тормозной системы и системы питания.',
    ]
  },
  {
    imageClass: 'promotions__image_oil',
    title: 'Масло на 10% дешевле',
    paragraph: [
      'Мы работаем напрямую с крупными дистрибьюторами моторных масел, поэтому можем предложить нашим клиентам дополнительную выгоду.',
      'Скидка на масло предоставляется при прохождении комплексного планового обслуживания.',
      'Уточняйте текущее наличие марок масел и стоимость по телефону.',
    ]
  },
]

export const services = [
  {
    path: 'engine',
    srcImage: engine,
    elementTitle: 'Ремонт двигателя'
  },
  {
    path: 'chassis',
    srcImage: chassis,
    elementTitle: 'Ремонт ходовой'
  },
  {
    path: 'transmission',
    srcImage: transmission,
    elementTitle: 'Ремонт КПП'
  },
  {
    path: 'to',
    srcImage: to,
    elementTitle: 'Плановое ТО'
  },
  {
    path: 'diagnostics',
    srcImage: diagnostics,
    elementTitle: 'Диагностика'
  }
]

export const prices = [
  {
    blockName: 'engine',
    title: 'Двигатель',
    listItems: [
      { name: 'Замена ремня ГРМ', price: 1500 },
      { name: 'Ремонт ГРМ', price: 2500 },
      { name: 'Ремонт ЦПГ', price: 5500 },
      { name: 'Замена помпы', price: 2000 },
      { name: 'Замена генератора', price: 2000 },
      { name: 'Замена ролика натяжителя', price: 1000 },
      { name: 'Ремонт системы охлаждения', price: 1000 },
      { name: 'Замена радиатора', price: 2000 },
      { name: 'Ремонт системы питания', price: 500 },
      { name: 'Ремонт системы зажигания', price: 500 },
      { name: 'Ремонт выхлопной системы', price: 500 },
    ]
  },
  {
    blockName: 'chassis',
    title: 'Ходовая часть',
    listItems: [
      { name: 'Замена передних стоек', price: 4000 },
      { name: 'Замена стоек стабилизатора', price: 1500 },
      { name: 'Замена задних стоек', price: 3000 },
      { name: 'Замена ступичного подшипника', price: 1500 },
      { name: 'Замена сайлент-блоков', price: 1000 },
      { name: 'Замена рулевой рейки', price: 5000 },
      { name: 'Замена шаровых', price: 1000 },
      { name: 'Замена тормозных дисков', price: 1000 },
      { name: 'Замена тормозных колодок', price: 500 },
      { name: 'Ремонт задней балки', price: 1500 },
    ]
  },
  {
    blockName: 'transmission',
    title: 'Трансмиссия и КПП',
    listItems: [
      { name: 'Замена МКПП', price: 3000 },
      { name: 'Ремонт МКПП', price: 5000 },
      { name: 'Замена АКПП', price: 5000 },
      { name: 'Ремонт АКПП', price: 7000 },
      { name: 'Замена сцепления', price: 2500 },
    ]
  },
  {
    blockName: 'to',
    title: 'Плановое ТО',
    listItems: [
      { name: 'Замена масла и фильтра', price: 1000 },
      { name: 'Замена воздушных фильтров', price: 500 },
      { name: 'Замена тормозной жидкости', price: 1000 },
      { name: 'Замена свечей зажигания', price: 500 },
      { name: 'Мойка радиаторов', price: 2000 },
    ]
  },
  {
    blockName: 'diagnostics',
    title: 'Диагностика',
    listItems: [
      { name: 'Просмотр ошибок через OBD', price: 500 },
      { name: 'Устранение ошибок', price: 1000 },
      { name: 'Восстановление электрики салона', price: 1000 },
      { name: 'Восстановление электрики двигателя', price: 2000 },
      { name: 'Смена прошивки ЭБУ', price: 2000 },
    ]
  },
]