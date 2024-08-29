<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AI Course Creator Widget</title>
    <style>
        /* Основні стилі для віджета */
        #ai-course-creator-widget {
            padding: 20px;
            background-color: #0c0e1b;
            border-radius: 10px;
            width: 100%; /* Use 100% width for responsiveness */
            max-width: 550px; /* Maximum width for larger screens */
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            color: white;
            font-family: Arial, sans-serif;
            margin: auto; /* Center the widget on the page */
        }

        select, input, button {
            display: inline-block;
            padding: 10px;
            margin: 10px 0;
            font-size: 16px;
            border-radius: 5px;
            border: none;
            box-sizing: border-box; /* Ensure padding is included in width */
        }

        /* Responsive styles for select elements */
        select {
            width: 48%; /* Adjusted to fit two select boxes in a row */
            margin-right: 2%; /* Space between select boxes */
        }

        select:last-child {
            margin-right: 0; /* Remove margin on the last select */
        }

        /* Responsive input field */
        input[type="text"] {
            width: calc(50% - 12px); /* Half width minus margin */
            margin-bottom: 15px;
        }

        /* Responsive button styling */
        button {
            width: calc(24% - 12px);
            background-color: #00a1ff;
            color: white;
            cursor: pointer;
        }

        /* Button hover effect */
        button:hover {
            background-color: #007acc;
        }

        /* Suggestion button styling */
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

        /* Suggestion button hover effect */
        .button-suggestion:hover {
            background-color: #00a1ff;
            color: white;
        }

        /* Flexbox for suggestions */
        .suggestions {
            display: flex;
            justify-content: space-between;
        }

        /* Media Queries for Responsive Design */
        @media (max-width: 600px) {
            select, input[type="text"], button {
                width: 100%; /* Full width for mobile devices */
                margin-right: 0; /* Remove right margin */
            }

            .suggestions {
                flex-direction: column; /* Stack suggestion buttons vertically */
            }

            .button-suggestion {
                width: 100%; /* Full width for suggestion buttons */
                margin-bottom: 10px; /* Space between buttons */
            }

            .button-suggestion:last-child {
                margin-bottom: 0; /* Remove margin on the last button */
            }
        }

        @media (min-width: 601px) and (max-width: 900px) {
            select, input[type="text"], button {
                width: calc(50% - 12px); /* Use half width for tablets */
            }

            /* Adjust button suggestion layout */
            .suggestions {
                flex-wrap: wrap; /* Allow wrapping for larger buttons */
            }
        }
    </style>
</head>
<body>

    <div id="ai-course-creator-widget">
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

    <script>
        document.addEventListener("DOMContentLoaded", function() {
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

            // Додаємо приклади тем при натисканні на кнопку пропозиції
            var suggestions = document.getElementsByClassName('button-suggestion');
            for (var i = 0; i < suggestions.length; i++) {
                suggestions[i].addEventListener('click', function() {
                    document.getElementById('topic').value = this.textContent;
                });
            }
        });
    </script>

</body>
</html>
