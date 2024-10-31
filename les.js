// Отображение выбранного урока
function showLesson(lessonNumber) {
    const lessons = document.querySelectorAll('.lesson');
    lessons.forEach((lesson, index) => {
        if (index === lessonNumber - 1) {
            lesson.classList.add('active');
        } else {
            lesson.classList.remove('active');
        }
    });

    const tabs = document.querySelectorAll('#lessonTabs li');
    tabs.forEach((tab, index) => {
        if (index === lessonNumber - 1) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });

    // Обновляем содержимое мини-лекции по умолчанию
    document.getElementById('miniLectureContent').innerHTML = "<p>Выберите мини-лекцию для просмотра ее содержания.</p>";
    document.querySelector('.mini-lectures').style.display = 'block'; // Показать список мини-лекций
    document.getElementById('backToLectures').style.display = 'none'; // Скрыть кнопку возврата
}

// Отображение содержимого мини-лекции
function showMiniLecture(lectureNumber) {
    const content = `Содержание мини-лекции ${lectureNumber}. Здесь будет описание материала.`;
    document.getElementById('miniLectureContent').innerHTML = `<p>${content}</p>`;

    // Скрыть список мини-лекций и показать кнопку возврата
    document.querySelector('.mini-lectures').style.display = 'none';
    document.getElementById('backToLectures').style.display = 'inline-block';
}

// Возврат к списку мини-лекций
function backToMiniLectures() {
    document.querySelector('.mini-lectures').style.display = 'block';
    document.getElementById('backToLectures').style.display = 'none';
    document.getElementById('miniLectureContent').innerHTML = "<p>Выберите мини-лекцию для просмотра ее содержания.</p>";
}

// Инициализация по умолчанию
showLesson(1);











const lessons = [
    {
        title: 'Розділ 1: Обчислювальне мислення зі змінними',
        description: 'Чим спосіб обробки інформації комп’ютером відрізняється від способу обробки інформації людьми? Дізнайтеся, як комп’ютери інтерпретують послідовність і стан під час написання, запуску та налагодження своїх перших програм Python. Досліджуйте типи даних, оператори та змінні та дізнайтеся, як зробити ваші програми інтерактивними за допомогою введення користувачами.',
        link: 'lesson1.html'
    },
    {
        title: 'Розділ 2: Розробка алгоритмів з умовними операторами',
        description: 'Дізнайтеся, як розробляти алгоритми, які приймають рішення на основі умов за допомогою умовних операторів. Зрозумійте, як контролювати потік програми залежно від різних вхідних даних і умов.',
        link: 'lesson2.html'
    },
    {
        title: 'Розділ 3: Моделювання явищ за допомогою циклів',
        description: 'Використовуйте цикли для імітації повторюваних завдань і явищ. Дізнайтеся про силу ітерацій у програмуванні та про те, як цикли можуть допомогти моделювати події та цикли реального світу.',
        link: 'lesson3.html'
    },
    {
        title: 'Розділ 4: Ігри з функціями',
        description: 'Дізнайтеся, як розбивати складні завдання на менші функції, які можна багаторазово використовувати. Використовуйте функції для створення та організації коду під час розробки простих ігор та інтерактивних програм.',
        link: 'lesson4.html'
    },
    {
        title: 'Розділ 5: Автоматизація завдань зі списками',
        description: 'Дізнайтеся, як списки можна використовувати для зберігання колекцій даних і як можна автоматизувати завдання, переглядаючи ці колекції. Вивчіть загальні операції зі списками та їх застосування при розв’язуванні задач.',
        link: 'lesson5.html'
    },
    {
        title: 'Розділ 6: Аналіз даних за допомогою словників',
        description: 'Дізнайтеся, як словники використовуються для зберігання даних у парах ключ-значення та наскільки вони важливі для організації й аналізу складніших наборів даних.',
        link: 'lesson6.html'
    }
];

// Функция для переключения уроков
function showLesson(index) {
    // Обновляем текст заголовка, описания и ссылки
    const lessonTitle = document.getElementById('lesson-title');
    const lessonDescription = document.getElementById('lesson-description');
    const lessonLink = document.getElementById('lesson-link');

    lessonTitle.textContent = lessons[index].title;
    lessonDescription.textContent = lessons[index].description;
    lessonLink.href = lessons[index].link;  // Устанавливаем уникальную ссылку для каждого урока
}

// Инициализация: показываем первый урок по умолчанию
document.addEventListener('DOMContentLoaded', () => {
    showLesson(0);  // Теперь показываем первый урок (индекс 0)
});