export default class CourseComponent {
    constructor() {
        this.template = `
            <section class="course-section">
                <h2>Lista de Cursos</h2>
                <!-- Aquí puedes agregar contenido adicional o dinámico -->
            </section>
        `;
    }

    render() {
        const section = document.createElement('section');
        section.innerHTML = this.template;
        return section;
    }
}
