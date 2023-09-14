# QuizCountry

## Este proyecto ha sido realizado como una prueba tecnica para la empresa de AETO

Para inicializar el proyecto se deben agregar las dependencias del mismo en el package.json

el manejador de paquetes es Yarn por lo cual deberan inicializarlo como 
```yarn install```
y luego 
```yarn dev``` para correr el proyecto

## API utilizada

la API proporcionada fue la api de countries de ```https://restcountries.com```

## Problematica

La solucion fue utilizar la data que viene de la API para mostrar las preguntas y respuestas de los paises, utilizando una funcion de shuffle y otra para describir que tipo de pregunta es por medio de una propiedad extra para saber
si es una pregunta de bandera o capital pude dar con la solucion.

### Funcionalidad

El proyecto se basa en un Quiz donde se le muestra al usuario unas capitales y banderas con 4 opciones 
al clickear una opcion te muestra si acertaste o no, tiene un sistema de puntaje donde se puede ver cuantas
respuestas correctas tiene el usuario, consta de 10 preguntas y al final de estas muestra su resultado
