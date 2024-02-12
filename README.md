# Proyecto: Evaluación final módulo React

El ejercicio consiste en crear una página web que sirva como buscador de personajes de Harry Potter, donde el usuario pueda filtrar los personajes por nombre, casa o pureza de sangre y ver el detalle de cada uno al hacer click en su tarjeta. 


# Estructura

El usuario, nada más cargar la página, se encontrará en la página de home, donde aparecerán una serie de filtros:

1. "Busca por personaje": el usuario puede introducir manualmente el nombre del personaje que desea encontrar.
2. "Selecciona la casa": por defecto, la página muestra los personajes filtrados por la casa Gryffindor, pero el usuario puede elegir de la lista desplegable la casa que desea buscar o incluso todas. 
3. "Selecciona la pureza": si el usuario desea aplicar un filtro por la pureza de sangre, puede hacer click en el desplegable y seleccionar la opción que quiera.

En caso de que los criterios de búsqueda no coincidan con ningún personaje de los que tiene la API, aparecerá un mensaje de error indicando que se reinicie la búsqueda. Para facilitar esto, existe un botón de "Reiniciar" que limpia toods los filtros.

Cuando el usuario encuentra el personaje que está buscando y haga click en su tarjeta, se le enviará a otra página donde aparecerán más detalles sobre este. Para volver a la página de home, existe un botón superior clicable de "Volver". 

En caso de que el usuario añada manualmente una ruta en el navegador que no existe, se mostrará otro mensaje de error que indique el problema.

Por último, todos estos cambios se irán guardando en local storage para que, en caso de refrescar la página, se sigan mostrando los personajes y/o filtros que el usuario ha ido introduciendo en el apartado correspondiente.

# Estilos

La maquetación para este ejercicio ha sido libre, incluyendo los elementos que se pedían en el enunciado y respetando sus funcionalidades.

# Puesta en marcha 

- Para visualizar la web, basta con hacer click en el enlace de Github Pages que se encuentra en la parte superior derecha de la pantalla, en el apartado de “About”. 

- En caso de querer visualizarlo en local, los pasos a seguir son los siguientes:

    1. Instalación de Visual Studio Code.
    2. Clonar el repositorio en la terminal de VS Code con el siguiente comando: “ git clone https://beta.adalab.es/modulo-3-evaluacion-final-silviesc/“.
    3. Descargar todo el proyecto mediante el comando “git pull”.
    4. Realizar el comando “npm install” para instalar los node modules necesarios para la ejecución del proyecto.
    5. Introducir en la terminal el comando “npm run dev” para que sea mostrado por el navegador.

- La web es compatible con los navegadores Mozilla, Chrome y Safari. 

# Estado del proyecto

El proyecto quedará finalizado y entregado para su corrección el lunes 12 de febrero de 2023. Quedaré pendiente de feedback y, en caso de hacer alguna modificación posterior, será desde la rama "dev". 

# Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para obtener más detalles.

