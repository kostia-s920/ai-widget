document.addEventListener("DOMContentLoaded", function() {
    // Отримуємо контейнер для віджета
    var widgetContainer = document.getElementById('ai-course-creator-widget');

    // Додаємо CSS стилі
    var style = document.createElement('style');
    style.innerHTML = `
        #ai-course-creator-widget {
            padding: 20px;
            background-color: #0c0e1b;
            border-radius: 10px;
            width: 550px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            color: white;
            font-family: Arial, sans-serif;
        }
        select, input, button {
            display: inline-block;
            padding: 10px;
            margin: 10px 0;
            font-size: 16px;
            border-radius: 5px;
            border: none;
        }
        select {
            width: 24%;
            margin-right: 1%;
        }
        input[type="text"] {
            width: calc(50% - 12px);
            margin-bottom: 15px;
        }
        button {
            width: calc(24% - 12px);
            background-color: #00a1ff;
            color: white;
            cursor: pointer;
        }
        button:hover {
            background-color: #007acc;
        }
        .button-suggestion {
            background-color: transparent;
            color: #00a1ff;
            border: 1px solid #00a1ff;
            padding: 8px 15px;
            margin-right: 10px;
            border-radius: 20px;
            cursor: pointer;
            font-size: 14px;
        }
        .button-suggestion:hover {
            background-color: #00a1ff;
            color: white;
        }
        .suggestions {
            display: flex;
            justify-content: space-between;
        }
    `;
    document.head.appendChild(style);

    // Створюємо форму для введення даних
    var formHTML = `
       <div class="ai-course-creator-widget">
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