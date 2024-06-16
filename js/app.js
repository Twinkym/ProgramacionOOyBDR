import HeaderComponent from './components/HeaderComponent.js';
import CourseComponent from './components/CourseComponent.js';
import CourseDetailsComponent from './components/courseDetails/CourseDetailsComponent.js';

document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');

    // Renderizar HeaderComponent
    const headerComponent = new HeaderComponent();
    app.appendChild(headerComponent.render());

    // Renderizar CourseComponent (si es necesario)
    const courseComponent = new CourseComponent();
    app.appendChild(courseComponent.render());

    // Datos para CourseDetailsComponent
     const courseDetailsData = [
        {
            title: '[MF0227_3] PROGRAMACIÓN ORIENTADA A OBJETOS',
            courses: [{
                    code: '[UF2404]',
                    title: 'Principios de la Programación Orientada a Objetos',
                    dates: 'del 9 septiembre al 4 de octubre 2024',
                    items: [
                        'Introducción al paradigma orientado a objetos',
                        'Clases y objetos',
                        'Generalización/Especialización: Herencia',
                        'Relaciones entre clases',
                        'Análisis del polimorfismo',
                        'Técnicas de programación estructurada',
                        'Estructura de la información',
                        'Lenguajes de programación orientados a objetos',
                        'Implementación del paradigma utilizando un lenguaje de programación orientado a objetos'
                    ]
                },
                {
                    code: '[UF2405]',
                    title: 'Modelo de Programación Web y Bases de Datos',
                    dates: 'del 7 al 29 de octubre 2024',
                    items: [
                        'Introducción al desarrollo de aplicaciones en el modelo de programación web',
                        'Arquitectura multicapa (n-tier)',
                        'La capa de presentación',
                        'Diseño de bases de datos relacionales',
                        'Acceso a bases de datos relacionales: capa de acceso a datos',
                        'Lenguajes de definición de datos',
                        'Manipulación de los datos'
                    ]
                },
                {
                    code: '[UF2406]',
                    title: 'El Ciclo de Vida del Desarrollo de Aplicaciones',
                    dates: 'del 30 de octubre al 20 de noviembre 2024',
                    items: [
                        'Proceso de ingeniería del software',
                        'Planificación y seguimiento',
                        'Diagramado',
                        'Desarrollo de la GUI',
                        'Calidad en el desarrollo del software',
                        'Pruebas',
                        'Excepciones',
                        'Documentación'
                    ]
                }
            ]
        }
        
     ];

    // Renderizar CourseDetailsComponent con los datos proporcionados
    courseDetailsData.forEach(details => {
        const courseDetailsComponent = new CourseDetailsComponent(details);
        app.appendChild(courseDetailsComponent.render());
    });
});
