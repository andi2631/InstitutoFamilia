
import { EventProperties } from '../../utils/interfaces';
import { cursoMatrimonioInfo } from './CursoMatrimonio/cursoMatrimonioInfo';
import { cursoFertilidadInfo } from './Fertilidad/fertilidadInfo';
import { sobreRocasInfo } from "./SobreRocas/sobreRocasinfo";

export const eventMap: { [key: string]: EventProperties } = {
  "sobreRocas": sobreRocasInfo,
  "cimientos": cursoMatrimonioInfo,
  "reconocimientoFertilidad": cursoFertilidadInfo
};
