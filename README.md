# Unit Converter

Unit Converter es un paquete que nos
ayuda a realizar la conversión de unidades
de una manera rapida y eficiente. Adicional
es un reto que se lanzó en [Platzi](https://platzi.com)
en el curso de [Fundamentos de JavaScript](https://platzi.com/js)

## Descripcion del Convertidor
- Se debe de pasar como primer parametro a la función el peso en kilogramos que
  serán convertidos a libras y el segundo parametro son las libras que serán
  convertidas a kilogramos.

## Instalación
```
npm install @beto_fns/unitconverter
```

## Uso
```
import { poundsToKilograms, kilogramsToPounds } from '@beto_fns/unitconverter'

Se pueden utilizar varios valores para diferentes conversiones o bien solo utilizar un valor,
- poundsToKilograms(1) // (1) [0.45] Este es el valor de libra a Kg.
- poundsToKilograms(1,2,3,4,5) // (5) [0.45, 0.91, 1.36, 1.81, 2.27] Estos valores son las libras convertidos a Kg.
- kilogramsToPounds(1,2,3,4,5) // (5) [2.2, 4.41, 6.61, 8.82, 11.02] Estos valores son los Kg convertidos a libras.
```
## Créditos
- [Alberto Hernández](https://https://twitter.com/BetoFns27)

## Licencia
- [MIT](https://https://opensource.org/licenses/MIT)
