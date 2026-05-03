// Примеры промтов для кнопки "Килька думает"
const PROMPT_IDEAS = [
    "космический кот в стиле пиксель‑арт, неоновые цвета",
    "волшебный лес утром, туман, лучи солнца, акварель",
    "футуристический город, киберпанк, дождь, отражения в лужах",
    "милый щенок в шляпе, мультяшный стиль",
    "абстрактная композиция, плавные линии, градиент от синего к фиолетовому"
];

function generateIdea() {
    const randomPrompt = PROMPT_IDEAS[Math.floor(Math.random() * PROMPT_IDEAS.length)];
    // Здесь нужно отправить промт в генератор (см. примечание ниже)
    alert("Промт для генерации: " + randomPrompt);
}

function enhancePrompt() {
    const enhancements = [
        "высокое качество, детализация, 8K",
        "в стиле цифровой живописи, яркие цвета",
        "реалистичное освещение, профессиональное фото",
        "кинематографичный стиль, глубина резкости",
        "арт‑стиль студии Ghibli, мягкие тени"
    ];
    const enhancement = enhancements[Math.floor(Math.random() * enhancements.length)];
    alert("Улучшение: " + enhancement);
}

function generateFast() {
    // Передаём параметры в генератор
    sendToGenerator("Fast");
}

function generateBalanced() {
    sendToGenerator("Balance");
}

function generateQuality() {
    sendToGenerator("Quality");
}

function sendToGenerator(mode) {
    // В реальном сценарии здесь будет логика взаимодействия с API генератора
    // Пока просто показываем сообщение
    alert(`Запуск генерации в режиме: ${mode}`);
}
