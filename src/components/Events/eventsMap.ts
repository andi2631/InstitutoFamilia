import { events } from './eventsList';
import { EventProperties } from '../../utils/interfaces';
import { cursoMatrimonioInfo } from './CursoMatrimonio/cursoMatrimonioInfo';
import { cursoFertilidadInfo } from './Fertilidad/fertilidadInfo';
import { sobreRocasInfo } from "./SobreRocas/sobreRocasinfo";


export const eventMap: { [key: string]: EventProperties } = {
  [events[1].url]: sobreRocasInfo,
  [events[0].url]: cursoMatrimonioInfo,
  [events[2].url]: cursoFertilidadInfo
};
