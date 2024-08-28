document.addEventListener("DOMContentLoaded", function() {
    // Отримуємо контейнер для віджета
    var widgetContainer = document.getElementById('ai-course-creator-widget');

    // Створюємо форму для введення даних
    var formHTML = `
        <select id="lesson-type">
            <option value="lesson">Lesson</option>
            <option value="module">Module</option>
        </select>
        <select id="language">
            <option value="en">English</option>
            <option value="es">Spanish</option>
        </select>
        <select id="learning-style">
            <option value="global">Global</option>
            <option value="detailed">Detailed</option>
        </select>
        <select id="tone-style">
            <option value="friendly">Friendly</option>
            <option value="formal">Formal</option>
        </select>
        <input type="text" id="topic" placeholder="Enter your topic">
        <button id="generate-course">Generate course</button>
        <div class="suggestions">
            <button class="button-suggestion">Create modules for leadership development</button>
            <button class="button-suggestion">Generate content for compliance training in [industry]</button>
        </div>
    `;

    // Вставляємо форму в контейнер
    widgetContainer.innerHTML = formHTML;

    // Додаємо обробник події для кнопки "Generate course"
    document.getElementById('generate-course').addEventListener('click', function() {
        var lessonType = document.getElementById('lesson-type').value;
        var language = document.getElementById('language').value;
        var learningStyle = document.getElementById('learning-style').value;
        var toneStyle = document.getElementById('tone-style').value;
        var topic = encodeURIComponent(document.getElementById('topic').value);

        // Формуємо URL для перенаправлення на сторінку з AI інструментом
        var redirectUrl = "https://academyocean.com/ai-course-creator?lesson=" + lessonType +
                         "&language=" + language +
                         "&learningStyle=" + learningStyle +
                         "&toneStyle=" + toneStyle +
                         "&topic=" + topic;

        // Перенаправляємо користувача
        window.location.href = redirectUrl;
    });
});
