
import { EventProperties } from "../../utils/types";
import { cursoMatrimonioInfo } from './CursoMatrimonio/cursoMatrimonioInfo';
import { sobreRocasInfo } from "./SobreRocas/sobreRocasinfo";

export const eventMap: { [key: number]: EventProperties } = {
  1: sobreRocasInfo,
  2: cursoMatrimonioInfo
};
