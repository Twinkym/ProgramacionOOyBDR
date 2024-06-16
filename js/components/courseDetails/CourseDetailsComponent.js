export default class CourseDetailsList {
    constructor(data) {
        this.data = data;
    }

    _renderDetailsSection(title, details) {
        return `
            <details class="prin">
                <summary>
                    <h2>${title}</h2>
                </summary>
                ${details.map(detail => `
                    <h3 title="${detail.date}">${detail.code} ${detail.title}</h3>
                    <ul>
                        ${detail.items.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                `).join('')}
            </details>
        `;
    }

    render() {
        const container = document.createElement('div');
        container.innerHTML = `
            ${this._renderDetailsSection(
                '[MF0223_3] SISTEMAS OPERATIVOS Y APLICACIONES INFORMATICAS',
                [
                    { 
                        code: '[UF1466]', 
                        title: 'Computadoras para Bases de Datos (60h.) ', 
                        date: 'del 7 al 23 Mayo 2024',
                        items: [
                            '<a target="_blank" href="https://youtu.be/0zkX6nlpiSk">Estructura y componentes de un computador</a>',
                            '<a target="_blank" href="https://www.youtube.com/watch?v=qDPtIu66m-A&list=PLg8CS6bwn-SCcSxwkjCzl6MiAOUw_XTuD"> Sistemas operativos</a>',
                            '<a target="_blank" href="https://www.youtube.com/watch?v=qDPtIu66m-A&list=PLg8CS6bwn-SCcSxwkjCzl6MiAOUw_XTuD"> Sistemas de archivos</a>',
                            '<a target="_blank" href="https://www.youtube.com/watch?v=oIhj2AK8wJE&list=PLg8CS6bwn-SCcSxwkjCzl6MiAOUw_XTuD&index=25"> Multiproceso y Multiusuario</a>',
                            '<a target="_blank" href="https://www.youtube.com/watch?v=lHrwvAyObds"> Particionamiento lógico y máquinas virtuales.</a> <mark><a target="_blank" href="https://www.youtube.com/watch?v=K9owOV5-wJk"> Virtual Box</a></mark>'
                        ]
                    },
                    {
                        code: '[UF1467]',
                        title: 'Aplicaciones microinformáticas e internet',
                        date: 'del 13 al 25 de junio 2024',
                        items: [
                            'Organización y gestión de la información',
                            'Desarrollo de supuesto práctico: <mark>Veracrypt</mark>'
                        ]
                    },
                    {
                        code: '[UF1467]',
                        title: 'Aplicaciones microinformáticas e internet',
                        dates: 'del 13 al 25 de junio 2024',
                        items: [
                            'Procesadores de Texto, Hojas de Cálculo y Edición de Presentaciones. <mark>Wikis, GitHub Pages, MarkDown</mark>',
                            'Uso de Internet: <mark>HTML y FTP (Filezilla)</mark>',
                            'Sistemas de control de versiones. <mark>GitHub y BitBucket</mark>'
                        ]
                    }
                ]
            )}
            ${this._renderDetailsSection(
                '[MF0226_3] PROGRAMACIÓN DE BASES DE DATOS RELACIONALES',
                [
                    { 
                        code: '[UF2175]', 
                        title: 'Diseño de Bases de Datos Relacionales', 
                        date: 'del 26 de junio al 9 de julio 2024',
                        items: [
                            'Introducción a las bases de datos',
                            'Modelos conceptuales de bases de datos'
                        ]
                    },
                    { 
                        code: '[UF2176]', 
                        title: 'Definición y manipulación de datos', 
                        date: 'del 10 al 31 de julio 2024',
                        items: [
                            'Lenguajes relacionales',
                            'Operaciones en el modelo relacional'
                        ]
                    },
                    { 
                        code: '[UF2177]', 
                        title: 'Desarrollo de programas en el entorno de la Base de Datos', 
                        date: 'del 16 de agosto al 06 de septiembre 2024',
                        items: [
                            'Lenguajes de programación de bases de datos'
                        ]
                    }
                ]
            )}
            ${this._renderDetailsSection(
                
                '[MF0227_3] PROGRAMACIÓN ORIENTADA A OBJETOS',
                [
                   {
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
                    },
                ]
            )}
        `;
        return container;
    }
}
