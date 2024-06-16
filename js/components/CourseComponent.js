import { CourseDetailsComponent } from './CourseDetailsComponent';

export function CourseComponent(){
    return `
        ${CourseDetailsComponent('[MF0223_3]', 'SISTEMAS OPERATIVOS Y APLICACIONES INFORMATICAS', [
            {
                title: '[UF1465] Computadores per Bases de Dades (60h.)',
                dates: 'del 7 al 23 de Maig 2024',
                items: [ 
                    'Estructura i components de un computador',
                    'Sistemes operatius',
                    'Instal·lació i configuració de sistemes operatius',
                    'Gestió de fitxers i directoris',
                    'Gestió de permisos i seguretat',
                    'Particionament logic i maquinas virtuals. Virtual Box',
                    'Tecniques de configuració i ajust de sistemas. El Kernel ',
                ],
            },
            {
                title: '[UF1466] Sistemes d\'emmagatzematge (70h.) ',
                dates: 'del 24 de Maig al 12 de Juny 2024',
                items: ['Organització i gestió de la informació', 'Desemvolupament de cas práctic: VeraCrypt'],
            },
            {
                title: '[UF1467] Aplicacions microìnformàtiques i internet per consulta i generació de documentació (40h.)',
                dates: 'del 13 al 25 de Juny 2024',
                items: [
                  'Processadors de text, Fulls de Calcul i Edició de Presentacións, Wikis, Github Pages, MarkDown',
                  'Ús d\'Internet: HTML I FTP(fillezilla)',
                  'Sistemes de control de versións. GitHub i BitBucket',
                ],
            }
        ])}`;
}