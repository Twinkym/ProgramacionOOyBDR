# gri

Ejercicios del Curso de GRI

## OOP&BBDDR programmes

This project is a web page for the presentation of the course "Programming with Object-Oriented Languages and Relational Databases". It uses HTML, CSS, JavaScript and the following technologies and libraries:

## Technologies used

- **HTML5**: Basic structure of the page.
- **Bootstrap**: CSS framework for responsive design.
- **Sass**: CSS preprocessor for advanced style management.
- **JavaScript**: Programming language for application logic.
- **GSAP**: Library for animations.
- **MVC Pattern**: Project architecture to separate logic from presentation.

## Project structure

- **index.html**: Entry point of the application.
- **assets/css/main.scss**: Main archive of styles in Sass.
- **assets/img/**: Folder that contains the images.
- **js/app.js**: Main file of JavaScript.
- **js/components/**: Folder containing the application components.
- **js/gsapAnimations.js**: Archive for animations with GSAP.

## Styles

Styles are organized and managed using Sass. We use variables for colors, sizes and other constant values:

- **_variables.scss**: Contains variables of colors, sizes, margins, padding, etc.
- **main.scss**: Main file importing Bootstrap and Sass partial files.

## Animations

GSAP animations are used to improve user experience with transitions and visuals.

## User Manual

1. Clone the repository.
2. Navigate to the project folder.
3. Open `index.html` in a browser to view the page.

## Structure of CSS (Sass)

```scss
// _variables.scss
$primary-color: #dcf4f0;
$secondary-color: #effaf8;
$text-color: darkblue;

// _mixins.scss
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

// main.scss
@import 'variables';
@import 'mixins';
@import '~bootstrap/scss/bootstrap';

body {
  font-size: 14px;
  width: 90%;
  margin: 0 auto;
  font-family: 'Inter', Verdana, Geneva, Tahoma, sans-serif;
}

h1.p {
  text-align: center;
  color: $text-color;
}
![Primera_captura_tarea_funcionandoa_falta_de_animaciones](https://github.com/Twinkym/ProgramacionOOyBDR/assets/73356704/0413cdbc-108f-486a-b710-8dcc77e2a80e)

![Added_links](https://github.com/Twinkym/ProgramacionOOyBDR/assets/73356704/b80175a1-d89b-49aa-8e99-1f0596bdc0f0)
