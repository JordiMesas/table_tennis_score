# Historial de partidos de tenis de mesa 

### Representación de como registrar, actualizar, mostrar, y eliminar mediante editar un json llamado "initialState" que viene por defecto con datos de partidos de tenis de mesa 

**Explicación breve:** 

En el Header: a la derecha del titulo "Ping Pong Score by Jordi Mesas del Rio" hay dos links el sitio web de inicio donde aparece el historial de información de partidos jugados y el sitio web para registrar partidos.  

- :house: **_Pagina de inicio_**:

    - **Nav**:
    
        - Botón de filtro "last month", si se presiona muestra solo los partidos que se han jugado en el mes actual que estamos.
        - Input de filtro "player name", si se escribe dentro del input el nombre de cualquier jugador que este registrado en el json se va a filtrar los partidos por nombre.
        - Arrow, para desplegar los registros.
        
    - **Accordion**
    
        - Arrow, despliegue del jugador que ha ganado el partido.
        - Bontón de actualizar verde, si se le clica enzima sale un modal con un formulario con validaciones para poder actualizar la información del partido.
        - Botón rojo para eliminar el registro.
- 🏓 **_Pagina para registrar partidos_**

    - **Form**
    
        - Formulario (con validaciones, el numero de partidos tiene que ser unico, cada partido tiene su numero identificativo) que si rellenamos todos los campos nos aparece un           mensaje diciendo que hemos registrado un partido satisfactoriamente, esta información nueva que hemos registrado nos aparecerá en la pagina de inicio.




# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
