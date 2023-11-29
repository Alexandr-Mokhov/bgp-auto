import transmission from '../images/service-transmission.png';
import diagnostics from '../images/service-diagnostics.png';
import chassis from '../images/service-chassis.png';
import engine from '../images/service-engine.png';
import to from '../images/service-to.png';

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
