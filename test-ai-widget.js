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
          display: flex; 
          flex-direction: column;
          gap: 40px;
        }

        .ai-course-creator-widget__head {
          display: flex; 
          flex-wrap: wrap;
          gap: 20px; 
        }

        .ai-course-creator-widget__select {
          max-width: 180px;
          width: 100%;
          background-color: #f7fafd;
          border: 1px solid #c2d4e4;
          border-radius: 4px;
          cursor: pointer;
          padding: 8px 20px;
        }

        .ai-course-creator-widget__select:focus {
          outline: none;
        }

        .ai-course-creator-widget__select-wrp {
          display: flex; 
          flex-direction: column;
          gap: 10px;
        }

        .ai-course-creator-widget__select-title {
          color: #fafafa;
          font-family: Montserrat, sans-serif;
          font-size: 14px;
          font-weight: 700;
          line-height: 100%;
          margin: 0;
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
          flex: 1;
          padding: 4px 15px;
          border-radius: 100px;
          border: 1px solid #C2D4E4;
          background: #F7FAFD;
          cursor: pointer;
          text-align: center;
          transition: background-color .2s ease-in-out;
          color: #031420;
          font-family: Montserrat, sans-serif;
          font-size: 16px;
          font-weight: 500;
          line-height: 120%;
        }

        .button__option:hover {
          background-color: #d3d9e1;
        }

        .ai-course-creator-widget__footer-form {
          display: flex; 
        }

        .ai-course-creator-widget__footer-form input {
          color: #AEB6BC;
          font-family: Montserrat, sans-serif;
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: 16px;
          padding: 9px 20px;
          flex: 1;
          border-radius: 4px 0px 0px 4px;
          border: 1px solid #C2D4E4;
          background-color: #F7FAFD;
        }

        .ai-course-creator-widget__footer-form button {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 9px 20px;
          background-color: #1DBE69;
          border-radius: 0px 4px 4px 0px;
          transition: background-color .1s ease-in-out;
          color: #FFF;
          font-family: Montserrat, sans-serif;
          font-size: 16px;
          font-style: normal;
          font-weight: 700;
          line-height: 100%;
        }

        .ai-course-creator-widget__footer-form button:hover {
          background-color: #169251;
        }
    `;
    document.head.appendChild(style);

    // Створюємо форму для введення даних
    var formHTML = `
       <div class="ai-course-creator-widget__wrp">

        <div class="ai-course-creator-widget__head">
            <div class="ai-course-creator-widget__select-wrp">
                <p class="ai-course-creator-widget__select-title">Lesson</p>
                <select class="ai-course-creator-widget__select" id="lesson-type">
                    <option value="lesson">Lesson</option>
                    <option value="module">Paragraph</option>
                </select>
            </div> 

            <div class="ai-course-creator-widget__select-wrp">
                <p class="ai-course-creator-widget__select-title">Language</p>
                <select class="ai-course-creator-widget__select" id="language">
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                    <option value="fr">French</option>
                    <option value="de">German</option>
                    <option value="uk">Ukrainian</option>
                    <option value="ru">Russian</option>
                </select>
            </div> 

            <div class="ai-course-creator-widget__select-wrp">
                <p class="ai-course-creator-widget__select-title">Tone Styles</p>
                <select class="ai-course-creator-widget__select" id="tone-style">
                    <option value="friendly">Friendly</option>
                    <option value="encouraging">Encouraging</option>
                    <option value="neutral">Neutral</option>
                    <option value="informative">Informative</option>
                    <option value="humorous">Humorous</option>
                </select>
            </div> 
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