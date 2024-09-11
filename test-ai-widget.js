document.addEventListener("DOMContentLoaded", function() {
    // Отримуємо контейнер для віджета
    var widgetContainer = document.getElementById('ai-course-creator-widget');

    // Додаємо CSS стилі
    var style = document.createElement('style');
    style.innerHTML = `
        #ai-course-creator-widget {
          max-width: 650px !important;
          width: 100% !important;
          padding: 40px 0 !important;
          margin: 0 auto !important;
        }
        
        .ai-course-creator-widget__wrp {
          padding: 30px !important;
          border-radius: 20px !important;
          overflow: hidden !important;
          background-color: #09141e !important;
        }

        .ai-course-creator-widget__head {
          display: flex; 
          flex-wrap: wrap;
          gap: 20px; 
        }

        .ai-course-creator-widget__footer {
          display: flex; 
          flex-direction: column;
          gap: 20px;
        }

        .ai-course-creator-widget__options {
          display: flex; 
          flex-wrap: wrap;
          gap: 20px;
        }

        .button__option {
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