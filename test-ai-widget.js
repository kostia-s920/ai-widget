document.addEventListener("DOMContentLoaded", function() {
    // Отримуємо контейнер для віджета
    var widgetContainer = document.getElementById('ai-course-creator-widget');

    // Додаємо CSS стилі
    var style = document.createElement('style');
    style.innerHTML = `
        #ai-course-creator-widget {
          max-width: 650px !important;
          width: 100% !important;
          border-radius: 20px !important;
          overflow: hidden !important;
          background-color: #09141e !important;
          padding: 0 30px !important;
          margin: 0 auto !important;
        }
        
        .ai-course-creator-widget__wrp {
          padding: 30px;
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
       <div class="ai-course-creator-widget__wrp">

        <div class="ai-course-creator-widget__head">
            <select id="lesson-type">
                <option value="lesson">Lesson</option>
                <option value="module">Module</option>
            </select>
            <select id="language">
                <option value="en">English</option>
                <option value="es">Spanish</option>
            </select>
            <select id="tone-style">
                <option value="friendly">Friendly</option>
                <option value="formal">Formal</option>
            </select>
        </div>    

        <div class="ai-course-creator-widget__footer">
            <div class="ai-course-creator-widget__options">
                <button class="button__option">Create modules for leadership development</button>
                <button class="button__option">Generate content for compliance training in [industry]</button>
            </div>
            <div class="ai-course-creator-widget__footer-form">
                <input type="text" id="topic" placeholder="Enter your topic">
                <button id="generate-course">Generate course</button>
            </div>
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