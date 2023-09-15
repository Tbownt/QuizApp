# QuizCountry

## Este proyecto ha sido realizado como una prueba técnica para la empresa de AETO.

Para inicializar el proyecto se deben agregar las dependencias del mismo en el package.json.

El manejador de paquetes es Yarn por lo cuál lo deberán inicializar como:
`yarn install`
y luego
`yarn dev` para correr el proyecto
Tambien pueden utilizar
`yarn test` para correr el test unitario

## API utilizada

La API proporcionada fue la api de countries de: https://restcountries.com

## Problematica

La solución fue utilizar la data que viene de la API para mostrar las preguntas y respuestas de los países, utilizando una función de shuffle y otra para describir qué tipo de pregunta es por medio de una propiedad extra para saber
si es una pregunta de bandera o capital pude dar con la solución.

### Funcionalidad

El proyecto se basa en un Quiz dónde se le muestra al usuario unas capitales y banderas con 4 opciones:
al clickear una opcion te muestra si acertaste o no, tiene un sistema de puntaje donde se puede ver cuantas
respuestas correctas tiene el usuario, consta de 10 preguntas y al final de estas muestra su resultado.

## Deploy
```https://aeto-andres-salom.netlify.app/```
