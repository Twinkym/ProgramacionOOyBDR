export function CourseDetailsComponent(code, title, courses){
    return `
        <details open class="prin">
            <summary>
                <h2>${code} ${title}</h2>
            </summary>
            ${courses.map(course => `
                <h3 title="${course.dates}">${course.title}</h3>
                <ul>
                    ${course.items.map(item => `<li>${item}</li>`).join('')}
                </ul>
                `).join('')}
        </details>`;
}