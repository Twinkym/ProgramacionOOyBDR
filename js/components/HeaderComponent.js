export default class HeaderComponent {
    constructor() {
        this.template = `
            <h1 class="p">
                [IFCD0012]<br>Programación con lenguajes Orientados a Objetos <br>y Bases de Datos Relacionales
            </h1>
            <p class="centro"><img width="200px" src="./assets/img/poo.jpg" alt="poo image"></p>
            <hr>
        `;
    }

    render() {
        const header = document.createElement('header');
        header.innerHTML = this.template;
        return header;
    }
}
