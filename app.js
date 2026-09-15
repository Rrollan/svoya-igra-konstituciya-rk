const categories = [
  { key: "basics", label: "Основы", short: "основы" },
  { key: "rights", label: "Права", short: "права" },
  { key: "power", label: "Власть", short: "власть" },
  { key: "changes", label: "Изменения", short: "изменения" },
  { key: "practice", label: "Практика", short: "практика" },
];

const baseQuestions = [
  { id: "b1", category: "basics", level: 1, points: 100, time: 55, question: "Какой отраслью права является конституционное право?", answer: "Ведущая отрасль национального права Республики Казахстан.", keywords: ["ведущ", "отрасл", "национальн"], hint: "Вспомните, какое место эта отрасль занимает в системе национального права." },
  { id: "b2", category: "basics", level: 2, points: 300, time: 45, question: "Какими свойствами обладает Конституция как Основной закон государства? Назовите минимум два.", answer: "Высшая юридическая сила, прямое действие, обязательность и особый порядок принятия и изменения.", keywords: ["высш", "юридичес", "прям", "обязатель", "особ", "принят"], hint: "В конспекте перечислены четыре свойства Основного закона." },
  { id: "b3", category: "basics", level: 3, points: 500, time: 35, question: "С какого числа вступила в силу новая Конституция РК и что произошло с Конституцией 1995 года?", answer: "Новая Конституция вступила в силу 1 июля 2026 года, а Конституция 1995 года прекратила действие.", keywords: ["1 июля", "2026", "прекрат", "действ"], hint: "Дата находится в разделе о понятии конституционного права." },
  { id: "r1", category: "rights", level: 1, points: 100, time: 55, question: "Какое право человека объявлено неотъемлемым?", answer: "Право на жизнь.", keywords: ["право на жизнь", "жизнь"], hint: "Это право стоит первым в перечне закреплённых прав и свобод." },
  { id: "r2", category: "rights", level: 2, points: 300, time: 45, question: "Какая современная гарантия защиты человека впервые выделена для цифровой среды?", answer: "Защита персональных данных и прав человека в цифровой среде.", keywords: ["персональн", "цифров", "данн"], hint: "Ищите ответ в блоке о современных гарантиях." },
  { id: "r3", category: "rights", level: 3, points: 500, time: 35, question: "Какой институт получил специальное конституционное закрепление в новой Конституции?", answer: "Адвокатура и адвокатская деятельность.", keywords: ["адвокат"], hint: "Речь об институте, который помогает защищать права человека." },
  { id: "p1", category: "power", level: 1, points: 100, time: 55, question: "Как называется новый однопалатный законодательный орган государства?", answer: "Курултай.", keywords: ["курултай"], hint: "Он пришёл на смену двухпалатному Парламенту." },
  { id: "p2", category: "power", level: 2, points: 300, time: 45, question: "Кто назначает Вице-президента и с чьего согласия?", answer: "Президент назначает Вице-президента с согласия Курултая.", keywords: ["президент", "курултай", "соглас"], hint: "В ответе должны быть два субъекта: назначающий и дающий согласие." },
  { id: "p3", category: "power", level: 3, points: 500, time: 35, question: "Какой орган осуществляет независимый конституционный контроль?", answer: "Конституционный Суд.", keywords: ["конституционн", "суд"], hint: "Это отдельный орган в обновлённой системе государственных институтов." },
  { id: "c1", category: "changes", level: 1, points: 100, time: 55, question: "Сколько палат было у Парламента по Конституции 1995 года?", answer: "Две палаты: Сенат и Мажилис.", keywords: ["две", "сенат", "мажилис", "2"], hint: "Назовите обе палаты старой модели." },
  { id: "c2", category: "changes", level: 2, points: 300, time: 45, question: "Как изменилось ограничение срока избрания Президента?", answer: "Президент избирается на 7 лет, и одно лицо не может быть избрано более одного раза.", keywords: ["7 лет", "одного раза", "один раз", "более одного"], hint: "Срок остался 7 лет, но добавилось ограничение по числу избраний." },
  { id: "c3", category: "changes", level: 3, points: 500, time: 35, question: "Какая доля текста Конституции, по официальным материалам конспекта, была затронута изменениями?", answer: "Около 84% текста Конституции.", keywords: ["84", "84%", "процент"], hint: "Это число указано в абзаце о масштабе изменений." },
  { id: "x1", category: "practice", level: 1, points: 100, time: 55, question: "Каков статус Казахстана по форме правления?", answer: "Казахстан — государство с президентской формой правления.", keywords: ["президентск", "форма правлен"], hint: "Ответ ищите в разделе об основах конституционного строя." },
  { id: "x2", category: "practice", level: 2, points: 300, time: 45, question: "Как Конституция определяет отношение религии и государства?", answer: "Религия отделена от государства; государство является светским.", keywords: ["отделен", "светск", "религ"], hint: "В новой формулировке это закреплено прямо." },
  { id: "x3", category: "practice", level: 3, points: 500, time: 35, question: "Почему юристу необходимо работать именно с действующим текстом Конституции?", answer: "Потому что Конституция 1995 года прекратила действие с 1 июля 2026 года, а новая Конституция сформировала обновлённую конституционную модель.", keywords: ["действующ", "прекрат", "1 июля", "обновлен", "модел"], hint: "Сформулируйте вывод из итоговой части занятия: важен действующий первоисточник." },
];

const alternatePrompts = {
  b1: ["Что регулирует конституционное право и какое место оно занимает в национальной правовой системе?"],
  b3: ["Назовите дату начала действия новой Конституции и судьбу Основного закона 1995 года."],
  r2: ["Какая гарантия специально защищает человека в современной цифровой среде?"],
  p1: ["Как называется однопалатный законодательный орган в новой модели?"],
  c2: ["Что изменилось в правилах избрания Президента по сравнению с прежней моделью?"],
  x2: ["Каков конституционный принцип взаимоотношений религии и государства?"],
};

const answerOptions = {
  b1: { options: ["Ведущая отрасль национального права", "Отрасль международного права", "Только учебная дисциплина", "Раздел уголовного права"], answerIndex: 0 },
  b2: { options: ["Только обязательность для граждан", "Высшая юридическая сила, прямое действие, обязательность и особый порядок изменения", "Право принимать любые законы без ограничений", "Рекомендательный характер для органов власти"], answerIndex: 1 },
  b3: { options: ["1 января 2026 года; Конституция 1995 года продолжила действовать", "15 марта 2026 года; Конституция 1995 года была дополнена", "1 июля 2026 года; Конституция 1995 года прекратила действие", "23 августа 2026 года; Конституция 1995 года была отменена референдумом"], answerIndex: 2 },
  r1: { options: ["Право на образование", "Право на жизнь", "Право собственности", "Право на труд"], answerIndex: 1 },
  r2: { options: ["Право на бесплатный интернет", "Защита персональных данных в цифровой среде", "Запрет социальных сетей", "Обязательная цифровая идентификация"], answerIndex: 1 },
  r3: { options: ["Адвокатура и адвокатская деятельность", "Только нотариат", "Медиация в семейных спорах", "Государственная служба"], answerIndex: 0 },
  p1: { options: ["Сенат", "Мажилис", "Курултай", "Национальный курултай"], answerIndex: 2 },
  p2: { options: ["Курултай самостоятельно", "Президент с согласия Курултая", "Конституционный Суд", "Народ на референдуме"], answerIndex: 1 },
  p3: { options: ["Правительство", "Курултай", "Конституционный Суд", "Прокуратура"], answerIndex: 2 },
  c1: { options: ["Одна палата — Курултай", "Две палаты — Сенат и Мажилис", "Три палаты — Сенат, Мажилис и Совет", "Парламент не имел палат"], answerIndex: 1 },
  c2: { options: ["Президент избирается на 5 лет без ограничений", "Президент избирается на 7 лет и может избираться сколько угодно", "Президент избирается на 7 лет, одно лицо — не более одного раза", "Президент назначается Курултаем на 10 лет"], answerIndex: 2 },
  c3: { options: ["Около 25% текста", "Около 50% текста", "Около 70% текста", "Около 84% текста"], answerIndex: 3 },
  x1: { options: ["Федеративное государство с парламентской формой", "Унитарное государство с президентской формой правления", "Конфедерация с монархической формой", "Автономная республика"], answerIndex: 1 },
  x2: { options: ["Религия является частью государственной власти", "Религия отделена от государства; государство светское", "Религия определяет содержание законов", "Государство не регулирует этот вопрос"], answerIndex: 1 },
  x3: { options: ["Потому что новая Конституция короче прежней", "Потому что Конституция 1995 года продолжает действовать параллельно", "Потому что действующий текст определяет актуальную модель государства и права", "Потому что юристу не нужны комментарии к Конституции"], answerIndex: 2 },
};

const $ = (selector) => document.querySelector(selector);
const board = $("#gameBoard");
const questionModal = $("#questionModal");
const welcomeModal = $("#welcomeModal");
const summaryModal = $("#summaryModal");
const timerProgress = $("#timerProgress");
const circumference = 2 * Math.PI * 19;

let state = {};
let currentQuestion = null;
let timerId = null;
let audioContext = null;
let audioMuted = false;

function shuffle(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
  }
  return copy;
}

function resetState() {
  state = {
    deck: shuffle(baseQuestions).map((item) => ({
      ...item,
      question: alternatePrompts[item.id] && Math.random() > 0.45 ? alternatePrompts[item.id][0] : item.question,
      ...answerOptions[item.id],
    })),
    score: 0,
    answered: 0,
    correct: 0,
    streak: 0,
    bestStreak: 0,
    usedHints: new Set(),
    variant: String.fromCharCode(65 + Math.floor(Math.random() * 5)),
  };
  $("#roundLabel").textContent = `Раунд 01 · вариант ${state.variant}`;
  clearInterval(timerId);
  updateScorePanel();
  renderBoard();
}

function questionFor(categoryKey, level) {
  const matching = state.deck.filter((item) => item.category === categoryKey && item.level === level);
  return matching[0] || baseQuestions.find((item) => item.category === categoryKey && item.level === level);
}

function renderBoard() {
  board.innerHTML = categories.map((category) => {
    const head = `<div class="category-head"><span>категория</span>${category.label}</div>`;
    const tiles = [1, 2, 3].map((level) => {
      const question = questionFor(category.key, level);
      const result = state[question.id];
      const classes = result === "correct" ? "is-correct" : result === "wrong" ? "is-wrong" : "";
      const label = result ? (result === "correct" ? "верно" : "завершено") : ["разогрев", "суть", "практика"][level - 1];
      return `<button class="question-tile ${classes}" data-question-id="${question.id}" type="button" ${result ? "disabled" : ""} aria-label="${category.label}, ${label}, ${question.points} очков"><span class="tile-level">${label}</span><span class="tile-points">${question.points}</span></button>`;
    }).join("");
    return `<div class="category-column">${head}${tiles}</div>`;
  }).join("");
  board.querySelectorAll(".question-tile:not(:disabled)").forEach((tile) => tile.addEventListener("click", () => openQuestion(tile.dataset.questionId)));
}

function getQuestion(id) {
  return state.deck.find((item) => item.id === id) || baseQuestions.find((item) => item.id === id);
}

function openQuestion(id) {
  currentQuestion = getQuestion(id);
  if (!currentQuestion || state[currentQuestion.id]) return;
  playSound("click");
  $("#modalCategory").textContent = `${categories.find((item) => item.key === currentQuestion.category).label} · уровень ${currentQuestion.level}`;
  $("#modalMeta").textContent = `ВОПРОС ${String(state.answered + 1).padStart(2, "0")} / 15`;
  $("#modalDifficulty").textContent = ["разогрев", "суть", "практика"][currentQuestion.level - 1];
  $("#modalPoints").textContent = `+${currentQuestion.points}`;
  $("#modalQuestion").textContent = currentQuestion.question;
  $("#hintText").textContent = currentQuestion.hint;
  $("#hintBox").classList.add("is-hidden");
  $("#hintButton").disabled = false;
  $("#hintButton").style.opacity = "1";
  $("#optionList").innerHTML = currentQuestion.options.map((option, index) => `<button class="option-button" type="button" data-option-index="${index}"><span class="option-letter">${String.fromCharCode(65 + index)}</span><span>${option}</span></button>`).join("");
  $("#optionList").querySelectorAll(".option-button").forEach((button) => button.addEventListener("click", () => selectOption(Number(button.dataset.optionIndex))));
  $("#resultBox").className = "result-box is-hidden";
  questionModal.classList.remove("is-hidden");
  startTimer(currentQuestion.time);
}

function startTimer(seconds) {
  clearInterval(timerId);
  let remaining = seconds;
  $("#timerValue").textContent = remaining;
  timerProgress.style.strokeDasharray = circumference;
  timerProgress.style.strokeDashoffset = 0;
  timerId = window.setInterval(() => {
    remaining -= 1;
    $("#timerValue").textContent = Math.max(remaining, 0);
    timerProgress.style.strokeDashoffset = circumference * (1 - remaining / seconds);
    if (remaining <= 0) {
      clearInterval(timerId);
      resolveQuestion(false, true, -1);
      maybeFinish();
    }
  }, 1000);
}

function resolveQuestion(correct, timedOut = false, selectedIndex = -1) {
  if (!currentQuestion || state[currentQuestion.id]) return;
  clearInterval(timerId);
  const usedHint = state.usedHints.has(currentQuestion.id);
  const earned = correct ? Math.round(currentQuestion.points * (usedHint ? 0.8 : 1)) : 0;
  state[currentQuestion.id] = correct ? "correct" : "wrong";
  state.answered += 1;
  if (correct) {
    state.score += earned;
    state.correct += 1;
    state.streak += 1;
    state.bestStreak = Math.max(state.bestStreak, state.streak);
    playSound("success");
    burstConfetti();
  } else {
    state.streak = 0;
    playSound("fail");
  }
  $("#hintButton").disabled = true;
  $("#optionList").querySelectorAll(".option-button").forEach((button, index) => {
    button.disabled = true;
    if (index === currentQuestion.answerIndex) button.classList.add("is-correct");
    else if (index === selectedIndex) button.classList.add("is-wrong");
    else button.classList.add("is-muted");
  });
  const resultBox = $("#resultBox");
  resultBox.className = `result-box ${correct ? "" : "is-wrong"}`;
  $("#resultIcon").textContent = correct ? "✦" : "×";
  $("#resultTitle").textContent = correct ? "Ответ принят" : timedOut ? "Время вышло" : "Почти рядом";
  $("#resultEarned").textContent = correct ? `+${earned}` : "+0";
  $("#resultText").textContent = correct ? (usedHint ? "Подсказка помогла — часть стоимости сохранена." : "Точно. Выбрана правильная норма.") : timedOut ? "Время вышло — правильный вариант подсвечен зелёным." : "Не угадали. Правильный вариант подсвечен зелёным.";
  $("#resultAnswer").textContent = currentQuestion.options[currentQuestion.answerIndex];
  updateScorePanel();
  renderBoard();
}

function updateScorePanel() {
  $("#scoreValue").textContent = state.score.toLocaleString("ru-RU");
  $("#answeredValue").textContent = state.answered;
  $("#correctValue").textContent = state.correct;
  $("#streakValue").textContent = state.streak;
  const percentage = Math.round((state.answered / baseQuestions.length) * 100);
  $("#progressPercent").textContent = `${percentage}%`;
  $("#progressBar").style.width = `${percentage}%`;
  $("#scoreOrb").style.background = `conic-gradient(var(--teal) ${percentage * 3.6}deg, rgba(168,216,205,.08) 0deg)`;
}

function maybeFinish() {
  if (state.answered < baseQuestions.length) return;
  window.setTimeout(() => {
    closeQuestion();
    showSummary();
  }, 450);
}

function showSummary() {
  $("#finalScore").textContent = state.score.toLocaleString("ru-RU");
  $("#finalCorrect").textContent = `${state.correct} / 15`;
  $("#finalPercent").textContent = `${Math.round((state.correct / 15) * 100)}%`;
  $("#finalBestStreak").textContent = `${state.bestStreak}×`;
  const tone = state.correct >= 12 ? "Конституционный компас настроен точно." : state.correct >= 8 ? "Хорошая база — осталось закрепить несколько институтов." : "Самое время открыть текст Конституции и пройти раунд ещё раз.";
  $("#summaryCopy").textContent = tone;
  summaryModal.classList.remove("is-hidden");
}

function closeQuestion() {
  clearInterval(timerId);
  questionModal.classList.add("is-hidden");
  currentQuestion = null;
}

function useHint() {
  if (!currentQuestion) return;
  state.usedHints.add(currentQuestion.id);
  $("#hintBox").classList.remove("is-hidden");
  $("#hintButton").disabled = true;
  $("#hintButton").style.opacity = ".45";
  showToast("Подсказка открыта · стоимость вопроса −20%");
  playSound("click");
}

function selectOption(selectedIndex) {
  if (!currentQuestion || state[currentQuestion.id]) return;
  resolveQuestion(selectedIndex === currentQuestion.answerIndex, false, selectedIndex);
  maybeFinish();
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(() => toast.classList.remove("is-visible"), 2600);
}

function burstConfetti() {
  const colors = ["#ff806f", "#a8d8cd", "#e8bd73", "#f4f0e8"];
  for (let index = 0; index < 18; index += 1) {
    const piece = document.createElement("i");
    piece.className = "confetti";
    piece.style.left = `${50 + (Math.random() - .5) * 7}%`;
    piece.style.background = colors[index % colors.length];
    piece.style.setProperty("--x", `${(Math.random() - .5) * 340}px`);
    piece.style.setProperty("--y", `${90 + Math.random() * 230}px`);
    piece.style.setProperty("--r", `${(Math.random() - .5) * 720}deg`);
    document.body.appendChild(piece);
    window.setTimeout(() => piece.remove(), 1000);
  }
}

function playSound(type) {
  if (audioMuted) return;
  try {
    audioContext ||= new (window.AudioContext || window.webkitAudioContext)();
    const now = audioContext.currentTime;
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    oscillator.connect(gain);
    gain.connect(audioContext.destination);
    const isSuccess = type === "success";
    const isFail = type === "fail";
    oscillator.type = isFail ? "sawtooth" : "sine";
    oscillator.frequency.setValueAtTime(isSuccess ? 523.25 : isFail ? 155 : 260, now);
    if (isSuccess) oscillator.frequency.exponentialRampToValueAtTime(783.99, now + .18);
    if (isFail) oscillator.frequency.exponentialRampToValueAtTime(95, now + .22);
    gain.gain.setValueAtTime(.0001, now);
    gain.gain.exponentialRampToValueAtTime(isFail ? .035 : .065, now + .015);
    gain.gain.exponentialRampToValueAtTime(.0001, now + (isSuccess ? .25 : .28));
    oscillator.start(now);
    oscillator.stop(now + .3);
    if (isSuccess) window.setTimeout(() => playSound("success-note"), 100);
  } catch (error) { /* Audio is a progressive enhancement. */ }
}

function toggleSound() {
  audioMuted = !audioMuted;
  $("#soundIcon").textContent = audioMuted ? "×))" : "◖))";
  $("#soundToggle").title = audioMuted ? "Звук выключен" : "Звук включён";
  $("#soundToggle").setAttribute("aria-label", audioMuted ? "Включить звук" : "Выключить звук");
  if (!audioMuted) playSound("click");
}

function startNewGame() {
  summaryModal.classList.add("is-hidden");
  questionModal.classList.add("is-hidden");
  welcomeModal.classList.add("is-hidden");
  resetState();
  window.scrollTo({ top: 0, behavior: "smooth" });
  playSound("click");
}

$("#startButton").addEventListener("click", startNewGame);
$("#playAgainButton").addEventListener("click", startNewGame);
$("#newGameButton").addEventListener("click", () => { closeQuestion(); resetState(); showToast("Новая партия готова — вопросы перемешаны"); playSound("click"); });
$("#soundToggle").addEventListener("click", toggleSound);
$("#hintButton").addEventListener("click", useHint);
$("#nextButton").addEventListener("click", () => { closeQuestion(); maybeFinish(); });
$("#modalClose").addEventListener("click", closeQuestion);
questionModal.addEventListener("click", (event) => { if (event.target === questionModal) closeQuestion(); });
document.addEventListener("keydown", (event) => { if (event.key === "Escape") { closeQuestion(); welcomeModal.classList.add("is-hidden"); } });

resetState();
welcomeModal.classList.remove("is-hidden");
