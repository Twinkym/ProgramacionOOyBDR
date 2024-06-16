import HeaderComponent from './components/HeaderComponent';
import CourseComponent from './components/CourseComponent';

document.getElementById('app').innerHTML = `${HeaderComponent()} ${CourseComponent()}`;