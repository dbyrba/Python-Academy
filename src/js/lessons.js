// Массив уроков с уникальными мини-лекциями
const lessons = [
    {
        title: 'Розділ 1: Обчислювальне мислення зі змінними',
        description: 'Чим спосіб обробки інформації комп’ютером відрізняється від способу обробки інформації людьми? Дізнайтеся, як комп’ютери інтерпретують послідовність і стан під час написання, запуску та налагодження своїх перших програм Python.',
        link: 'lesson1.html',
        miniLectures: ['Платформа програмування', 'Виконання програми', 'Змінні', 'Арифметичні вирази', 'Шаблони веб-сторінок', 'Довідкові документи']
    },
    {
        title: 'Розділ 2: Розробка алгоритмів з умовними операторами',
        description: 'Дізнайтеся, як розробляти алгоритми, які приймають рішення на основі умов за допомогою умовних операторів.',
        link: 'lesson2.html',
        miniLectures: ['Логічні умови', 'Складені булеві вирази', 'Ланцюгові умови', 'Вкладені умови', 'Вироблення рекомендацій', 'Довідкові документи']
    },
    {
        title: 'Розділ 3: Моделювання явищ за допомогою циклів',
        description: 'Використовуйте цикли для імітації повторюваних завдань і явищ.',
        link: 'lesson3.html',
        miniLectures: ['Імпорт модулів', 'Цикл while', 'Повторювання', 'Потік керування циклом', 'Моделювання популяцій', 'Довідкові документи']
    },
    {
        title: 'Розділ 4: Ігри з функціями',
        description: 'Дізнайтеся, як розбивати складні завдання на менші функції, які можна багаторазово використовувати. Використовуйте функції для створення та організації коду під час розробки простих ігор та інтерактивних програм.',
        link: 'lesson4.html',
        miniLectures: ['Створення функцій', 'Параметри та аргументи', 'Повернення значень', 'Використання випадкових значень', 'Гра “Вгадай число”', 'Довідкові документи']
    },
    {
        title: 'Розділ 5: Автоматизація завдань зі списками',
        description: 'Дізнайтеся, як списки можна використовувати для зберігання колекцій даних і як можна автоматизувати завдання, переглядаючи ці колекції. Вивчіть загальні операції зі списками та їх застосування при розв’язуванні задач.',
        link: 'lesson5.html',
        miniLectures: ['Створення списків', 'Додавання та видалення елементів', 'Перегляд списків', 'Сортування списків', 'Аналіз даних у списках', 'Довідкові документи']
    },
    {
        title: 'Розділ 6: Аналіз даних за допомогою словників',
        description: 'Дізнайтеся, як словники використовуються для зберігання даних у парах ключ-значення та наскільки вони важливі для організації й аналізу складніших наборів даних.',
        link: 'lesson6.html',
        miniLectures: ['Створення словників', 'Доступ до даних за ключем', 'Оновлення та видалення записів', 'Вкладені словники', 'Аналіз даних зі словниками', 'Довідкові документи']
    }
];


// Функция для отображения уроков
function showLesson(index) {
    const lessonTitle = document.getElementById('lesson-title');
    const lessonDescription = document.getElementById('lesson-description');
    const lessonLink = document.getElementById('lesson-link');
    const miniLecturesList = document.getElementById('mini-lectures-list');

    // Обновляем заголовок, описание и ссылку на страницу урока
    lessonTitle.textContent = lessons[index].title;
    lessonDescription.textContent = lessons[index].description;
    lessonLink.href = lessons[index].link;

    // Очищаем предыдущие мини-лекции и добавляем новые
    miniLecturesList.innerHTML = '';
    lessons[index].miniLectures.forEach((lecture, i) => {
        const listItem = document.createElement('li');
        listItem.textContent = lecture;
        listItem.onclick = () => showMiniLecture(i + 1);
        miniLecturesList.appendChild(listItem);
    });

     // Закрываем боковую панель, если экран меньше 700px
     if (window.innerWidth < 700) {
        toggleSidebar();
    }
}
// Функция для открытия и закрытия боковой панели
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('sidebar-open');
}

// Функция для отображения содержимого выбранной мини-лекции
function showMiniLecture(lectureNumber) {
    document.getElementById('miniLectureContent').innerHTML = `<p>Содержимое мини-лекции ${lectureNumber}</p>`;
    document.querySelector('.mini-lectures').style.display = 'none';
    document.getElementById('backToLectures').style.display = 'block';
}

// Возвращаемся к списку мини-лекций
function backToMiniLectures() {
    document.querySelector('.mini-lectures').style.display = 'block';
    document.getElementById('backToLectures').style.display = 'none';
    document.getElementById('miniLectureContent').innerHTML = '<p>Выберите мини-лекцию для просмотра ее содержания.</p>';
}

// Инициализация: показываем первый урок по умолчанию
document.addEventListener('DOMContentLoaded', () => {
    showLesson(0);
});



