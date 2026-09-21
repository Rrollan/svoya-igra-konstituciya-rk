const categories = [
  { key: "basics", label: "Основы", short: "основы" },
  { key: "rights", label: "Права", short: "права" },
  { key: "power", label: "Власть", short: "власть" },
  { key: "changes", label: "Изменения", short: "изменения" },
  { key: "practice", label: "Практика", short: "практика" },
];

const baseQuestions = [
  { id: "b1", category: "basics", level: 1, points: 100, time: 55, question: "В учебной ситуации нужно определить место конституционного права: оно регулирует основы строя, статус личности и систему государственной власти. Как точнее всего описать его положение?", answer: "Ведущая отрасль национального права Республики Казахстан.", keywords: ["ведущ", "отрасл", "национальн"], hint: "Сравните его не с отдельным законом, а со всей системой национального права." },
  { id: "b2", category: "basics", level: 2, points: 300, time: 45, question: "Подзаконный акт Республики Казахстан вступил в противоречие с Конституцией. Какая совокупность свойств объясняет приоритет Конституции при решении спора?", answer: "Высшая юридическая сила, прямое действие, обязательность и особый порядок принятия и изменения.", keywords: ["высш", "юридичес", "прям", "обязатель", "особ", "принят"], hint: "Нужен полный набор признаков Основного закона, а не только один признак." },
  { id: "b3", category: "basics", level: 3, points: 500, time: 35, question: "Юрист готовит заключение по норме, принятой после смены Основного закона. Какую дату и правовое последствие он должен указать, чтобы применить действующую модель РК?", answer: "Новая Конституция вступила в силу 1 июля 2026 года, а Конституция 1995 года прекратила действие.", keywords: ["1 июля", "2026", "прекрат", "действ"], hint: "Соедините дату вступления новой Конституции с судьбой прежнего текста." },
  { id: "r1", category: "rights", level: 1, points: 100, time: 55, question: "Государство может создавать гарантии и механизмы защиты, но не «выдаёт» человеку саму основу его существования. Какое право в конспекте названо неотъемлемым?", answer: "Право на жизнь.", keywords: ["право на жизнь", "жизнь"], hint: "Речь о праве, которое нельзя рассматривать как предоставленную государством услугу." },
  { id: "r2", category: "rights", level: 2, points: 300, time: 45, question: "Цифровой сервис собирает сведения о гражданине и использует их без понятных гарантий защиты. Какая конституционная гарантия непосредственно относится к такой ситуации?", answer: "Защита персональных данных и прав человека в цифровой среде.", keywords: ["персональн", "цифров", "данн"], hint: "Ищите не общее право на связь, а защиту сведений о самом человеке." },
  { id: "r3", category: "rights", level: 3, points: 500, time: 35, question: "Гражданин, чьи права оспариваются в сложном юридическом деле, нуждается в профессиональной защите. Какой институт получил специальное конституционное закрепление в новой Конституции?", answer: "Адвокатура и адвокатская деятельность.", keywords: ["адвокат"], hint: "Это не любой способ примирения сторон, а профессиональный институт защиты." },
  { id: "p1", category: "power", level: 1, points: 100, time: 55, question: "Нужно назвать орган, который в новой модели заменяет двухпалатный Парламент и осуществляет законодательную функцию в однопалатном формате. Как он называется?", answer: "Курултай.", keywords: ["курултай"], hint: "Отсекайте названия прежних палат: нужен новый однопалатный орган." },
  { id: "p2", category: "power", level: 2, points: 300, time: 45, question: "Кандидат на должность Вице-президента уже определён, но процедура ещё не завершена. Какой вариант правильно описывает оставшийся конституционный порядок?", answer: "Президент назначает Вице-президента с согласия Курултая.", keywords: ["президент", "курултай", "соглас"], hint: "Разделите два действия: кто назначает и чей мандат согласия необходим." },
  { id: "p3", category: "power", level: 3, points: 500, time: 35, question: "Если требуется проверить соответствие нормы Конституции, какой самостоятельный орган должен осуществить именно конституционный контроль, а не общее управление или надзор?", answer: "Конституционный Суд.", keywords: ["конституционн", "суд"], hint: "Выберите орган по функции контроля за соответствием Конституции, а не по общему названию власти." },
  { id: "c1", category: "changes", level: 1, points: 100, time: 55, question: "Чтобы сравнить прежнюю модель представительной власти с новой, восстановите устройство Парламента по Конституции 1995 года. Какая связка верна?", answer: "Две палаты: Сенат и Мажилис.", keywords: ["две", "сенат", "мажилис", "2"], hint: "Вспомните не количество органов вообще, а две палаты старого Парламента." },
  { id: "c2", category: "changes", level: 2, points: 300, time: 45, question: "Президент уже избирался один раз на семилетний срок и хочет выдвинуться снова. Как новая Конституция ограничивает такую возможность?", answer: "Президент избирается на 7 лет, и одно лицо не может быть избрано более одного раза.", keywords: ["7 лет", "одного раза", "один раз", "более одного"], hint: "Проверьте одновременно срок полномочий и запрет на повторное избрание одного лица." },
  { id: "c3", category: "changes", level: 3, points: 500, time: 35, question: "В конспекте говорится, что изменения затронули не отдельные поправки, а большую часть Основного закона. Какую долю текста указывают официальные материалы?", answer: "Около 84% текста Конституции.", keywords: ["84", "84%", "процент"], hint: "Найдите показатель масштаба реформ, а не дату их принятия." },
  { id: "x1", category: "practice", level: 1, points: 100, time: 55, question: "Какая связка характеристик одновременно правильно описывает Казахстан по форме государства и форме правления?", answer: "Унитарное государство с президентской формой правления.", keywords: ["президентск", "форма правлен"], hint: "Сопоставьте унитарное устройство с президентской формой правления." },
  { id: "x2", category: "practice", level: 2, points: 300, time: 45, question: "Государственный орган предлагает сделать религиозное правило обязательным для всех граждан. Какой конституционный принцип препятствует этому?", answer: "Религия отделена от государства; государство является светским.", keywords: ["отделен", "светск", "религ"], hint: "Вспомните два связанных элемента: светский характер государства и отделение религии." },
  { id: "x3", category: "practice", level: 3, points: 500, time: 35, question: "Юрист строит заключение только на Конституции 1995 года, не сверяясь с действующим текстом. Какой вывод из занятия показывает ошибку такого подхода?", answer: "Потому что Конституция 1995 года прекратила действие с 1 июля 2026 года, а новая Конституция сформировала обновлённую конституционную модель.", keywords: ["действующ", "прекрат", "1 июля", "обновлен", "модел"], hint: "Объясните, почему для правового вывода важен именно действующий первоисточник." },
];

const alternatePrompts = {
  b1: ["Какое место занимает конституционное право, если оно регулирует основы строя, статус личности и систему власти?"],
  b3: ["Какую дату и последствие для Конституции 1995 года должен учесть юрист при применении новой модели?"],
  r2: ["Какая конституционная гарантия применяется к цифровому сервису, который собирает сведения о гражданине?"],
  p1: ["Как называется однопалатный законодательный орган, пришедший на смену прежней модели?"],
  c2: ["Может ли Президент, уже избранный на 7 лет, выдвигаться повторно по новой модели?"],
  x2: ["Какой принцип не позволяет государственному органу сделать религиозное правило обязательным для всех?"],
};

const answerOptions = {
  b1: { options: ["Ведущая отрасль национального права Республики Казахстан", "Самостоятельная отрасль международного права, действующая вместо национального", "Учебная дисциплина без самостоятельного предмета регулирования", "Прикладной раздел уголовного права о деятельности госорганов"], answerIndex: 0 },
  b2: { options: ["Только обязательность Конституции для граждан, без приоритета над актами органов власти", "Высшая юридическая сила, прямое действие, обязательность и особый порядок принятия и изменения", "Возможность любого государственного органа временно изменить Конституцию подзаконным актом", "Рекомендательный характер Конституции при наличии специального закона"], answerIndex: 1 },
  b3: { options: ["1 января 2026 года; Конституция 1995 года продолжила действовать как основной текст", "15 марта 2026 года; Конституция 1995 года была только дополнена", "1 июля 2026 года; Конституция 1995 года прекратила действие", "23 августа 2026 года; Конституция 1995 года была приостановлена до принятия новых законов"], answerIndex: 2 },
  r1: { options: ["Право на образование, которое возникает после получения статуса обучающегося", "Право на жизнь как неотъемлемое право человека", "Право собственности, возникающее только после регистрации имущества", "Право на труд, реализуемое при заключении трудового договора"], answerIndex: 1 },
  r2: { options: ["Право пользователя на бесплатный доступ к любому цифровому сервису", "Защита персональных данных и прав человека в цифровой среде", "Запрет государству и бизнесу использовать любые цифровые технологии", "Обязательная цифровая идентификация каждого гражданина без исключений"], answerIndex: 1 },
  r3: { options: ["Адвокатура и адвокатская деятельность как институт профессиональной защиты", "Нотариат как единственный институт представительства в суде", "Медиация как обязательная замена юридической защите", "Государственная служба как способ защиты частных прав"], answerIndex: 0 },
  p1: { options: ["Сенат как верхняя палата прежнего Парламента", "Мажилис как нижняя палата прежнего Парламента", "Курултай как новый однопалатный законодательный орган", "Национальный курултай как орган, заменивший законодательную власть"], answerIndex: 2 },
  p2: { options: ["Курултай назначает Вице-президента самостоятельно, без участия Президента", "Президент назначает Вице-президента с согласия Курултая", "Конституционный Суд назначает Вице-президента после проверки кандидатуры", "Народ назначает Вице-президента непосредственно на референдуме"], answerIndex: 1 },
  p3: { options: ["Правительство, поскольку оно исполняет законы и принимает решения управления", "Курултай, поскольку он принимает законы и представляет народ", "Конституционный Суд как самостоятельный орган конституционного контроля", "Прокуратура как орган надзора за соблюдением законов"], answerIndex: 2 },
  c1: { options: ["Одна палата — Курултай, поскольку новая модель действовала с 1995 года", "Две палаты — Сенат и Мажилис", "Три палаты — Сенат, Мажилис и отдельный Совет представителей", "Парламент не имел палат и состоял только из депутатских комитетов"], answerIndex: 1 },
  c2: { options: ["Президент избирается на 5 лет и может переизбираться без ограничения числа сроков", "Президент избирается на 7 лет и может избираться повторно без специального ограничения", "Президент избирается на 7 лет, одно лицо — не более одного раза", "Президент назначается Курултаем на 10 лет после одного избрания"], answerIndex: 2 },
  c3: { options: ["Около 25% текста — изменения носили только редакционный характер", "Около 50% текста — была заменена примерно половина норм", "Около 70% текста — изменения затронули отдельные главы", "Около 84% текста Конституции — показатель масштаба изменений"], answerIndex: 3 },
  x1: { options: ["Федеративное государство с парламентской формой правления", "Унитарное государство с президентской формой правления", "Конфедерация с монархической формой правления", "Автономная республика с коллегиальным правлением"], answerIndex: 1 },
  x2: { options: ["Религия входит в систему государственной власти и определяет обязательные нормы", "Религия отделена от государства; государство является светским", "Религиозные нормы автоматически имеют приоритет над Конституцией", "Государство вообще не вправе закреплять принцип взаимоотношений с религией"], answerIndex: 1 },
  x3: { options: ["Потому что новая Конституция только сокращает объём прежнего текста", "Потому что Конституция 1995 года продолжает действовать параллельно с новой", "Потому что действующий текст определяет актуальную модель государства и права", "Потому что юристу достаточно комментариев и не нужен текст Конституции"], answerIndex: 2 },
};

const visualRounds = [
  { id: "v1", kind: "visual", image: "assets/visual/kazakhstan-flag.png", imageAlt: "Государственный флаг Республики Казахстан", imagePosition: "center", title: "Флаг Республики Казахстан", points: 200, time: 40, question: "Какой государственный символ изображён на фотографии?", hint: "Голубое полотнище с солнцем, орлом и национальным орнаментом — символ Республики Казахстан.", options: ["Флаг Республики Казахстан", "Герб Республики Казахстан", "Флаг другого государства", "Эмблема Конституционного Суда"], answerIndex: 0 },
  { id: "v2", kind: "visual", image: "assets/visual/kazakh-ballot-box.jpg", imageAlt: "Избирательная урна на участке в Астане, Казахстан", imagePosition: "center 52%", title: "Избирательная урна в РК", points: 200, time: 40, question: "С каким демократическим механизмом связана фотография?", hint: "На фотографии — урна на избирательном участке Казахстана, куда опускают бюллетени.", options: ["Выборы и референдум", "Назначение судей", "Работа Правительства", "Конституционный контроль"], answerIndex: 0 },
  { id: "v3", kind: "visual", image: "assets/visual/constitutional-court-emblem.png", imageAlt: "Эмблема Конституционного Суда Республики Казахстан", imagePosition: "center", title: "Конституционный Суд РК", points: 300, time: 35, question: "Какой орган Республики Казахстан обозначен на изображении?", hint: "Название на эмблеме указывает на орган конституционного контроля.", options: ["Конституционный Суд Республики Казахстан", "Верховный Суд РК", "Курултай", "Прокуратура"], answerIndex: 0 },
  { id: "v4", kind: "visual", image: "assets/visual/kazakhstan-parliament.jpg", imageAlt: "Здание Парламента Республики Казахстан в Астане", imagePosition: "center 48%", title: "Здание Парламента РК", points: 300, time: 35, question: "Какой государственный институт связан с этой фотографией?", hint: "В новой модели законодательный орган стал однопалатным.", options: ["Конституционный Суд", "Курултай", "Правительство", "Прокуратура"], answerIndex: 1 },
  { id: "v5", kind: "visual", image: "assets/visual/constitution-of-kazakhstan.jpg", imageAlt: "Печатное издание Конституции Республики Казахстан", imagePosition: "center 48%", title: "Конституция РК", points: 400, time: 30, question: "Что за основной документ изображён на фотографии?", hint: "Это Основной закон Республики Казахстан, определяющий устройство государства и права человека.", options: ["Конституция Республики Казахстан", "Уголовный кодекс", "Государственный бюджет", "Трудовой договор"], answerIndex: 0 },
  { id: "v6", kind: "visual", image: "assets/visual/kazakhstan-supreme-court.jpg", imageAlt: "Здание Верховного Суда Республики Казахстан", imagePosition: "center 52%", title: "Верховный Суд РК", points: 400, time: 30, question: "К какой ветви государственной власти относится этот орган?", hint: "Верховный Суд РК относится к органам, осуществляющим правосудие.", options: ["Судебная власть", "Представительная власть", "Исполнительная власть", "Избирательная комиссия"], answerIndex: 0 },
];

const totalTasks = baseQuestions.length + visualRounds.length;

const $ = (selector) => document.querySelector(selector);
const board = $("#gameBoard");
const visualBoard = $("#visualBoard");
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
let selectedTeamCount = 2;
let statisticsReturnTarget = null;

const HISTORY_KEY = "svoya-igra-konstituciya-rk-history-v1";

const teamPalette = [
  { className: "team-mint", label: "мята" },
  { className: "team-coral", label: "коралл" },
  { className: "team-gold", label: "золото" },
  { className: "team-violet", label: "фиалка" },
];

function shuffle(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
  }
  return copy;
}

function visualImage(question, compact = false) {
  return `<img class="visual-image${compact ? " is-compact" : ""}" src="${question.image}" alt="${question.imageAlt}" style="object-position:${question.imagePosition || "center"}" loading="lazy" />`;
}

function resetState() {
  state = {
    deck: shuffle(baseQuestions).map((item) => ({
      ...item,
      question: alternatePrompts[item.id] && Math.random() > 0.45 ? alternatePrompts[item.id][0] : item.question,
      ...answerOptions[item.id],
    })),
    visualDeck: shuffle(visualRounds),
    score: 0,
    answered: 0,
    correct: 0,
    streak: 0,
    bestStreak: 0,
    activeTeamIndex: 0,
    teams: Array.from({ length: selectedTeamCount }, (_, index) => ({
      id: index,
      name: `Команда ${index + 1}`,
      score: 0,
      answered: 0,
      correct: 0,
      color: teamPalette[index].className,
    })),
    results: {},
    usedHints: new Set(),
    resultSaved: false,
    variant: String.fromCharCode(65 + Math.floor(Math.random() * 5)),
  };
  $("#roundLabel").textContent = `Раунд 01 · вариант ${state.variant}`;
  clearInterval(timerId);
  updateScorePanel();
  renderTeams();
  renderBoard();
  renderVisualBoard();
  if (state.answered === totalTasks) saveMatchResult();
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
      const result = state.results[question.id];
      const classes = result?.status === "correct" ? "is-correct" : result?.status === "wrong" ? "is-wrong" : "";
      const label = result ? (result.status === "correct" ? "верно" : "завершено") : ["разогрев", "суть", "практика"][level - 1];
      return `<button class="question-tile ${classes}" data-question-id="${question.id}" type="button" ${result ? "disabled" : ""} aria-label="${category.label}, ${label}, ${question.points} очков"><span class="tile-level">${label}</span><span class="tile-points">${question.points}</span></button>`;
    }).join("");
    return `<div class="category-column">${head}${tiles}</div>`;
  }).join("");
  board.querySelectorAll(".question-tile:not(:disabled)").forEach((tile) => tile.addEventListener("click", () => openQuestion(tile.dataset.questionId)));
}

function renderVisualBoard() {
  visualBoard.innerHTML = state.visualDeck.map((question, index) => {
    const result = state.results[question.id];
    const classes = result?.status === "correct" ? "is-correct" : result?.status === "wrong" ? "is-wrong" : "";
    const status = result ? (result.status === "correct" ? "угадано" : "завершено") : "открыть";
    return `<button class="visual-tile ${classes}" data-question-id="${question.id}" type="button" ${result ? "disabled" : ""} aria-label="Визуальный раунд ${index + 1}, изображение, ${question.points} очков"><span class="visual-tile-index">0${index + 1}</span><span class="visual-tile-art">${visualImage(question, true)}</span><span class="visual-tile-copy"><span>УГАДАЙ ПО КАРТИНКЕ</span><strong>Изображение ${String(index + 1).padStart(2, "0")}</strong><b>${result ? status : `+${question.points} очков`}</b></span></button>`;
  }).join("");
  visualBoard.querySelectorAll(".visual-tile:not(:disabled)").forEach((tile) => tile.addEventListener("click", () => openQuestion(tile.dataset.questionId)));
}

function getQuestion(id) {
  return state.deck.find((item) => item.id === id) || state.visualDeck.find((item) => item.id === id) || baseQuestions.find((item) => item.id === id) || visualRounds.find((item) => item.id === id);
}

function openQuestion(id) {
  currentQuestion = getQuestion(id);
  if (!currentQuestion || state.results[currentQuestion.id]) return;
  playSound("click");
  const isVisual = currentQuestion.kind === "visual";
  const category = categories.find((item) => item.key === currentQuestion.category);
  $("#modalCategory").textContent = isVisual ? "Визуальный раунд" : `${category.label} · уровень ${currentQuestion.level}`;
  $("#modalTeam").textContent = `ХОД ${state.teams[state.activeTeamIndex].name.toUpperCase()}`;
  $("#modalMeta").textContent = `${isVisual ? "ВИЗУАЛЬНЫЙ РАУНД" : "ВОПРОС"} ${String(state.answered + 1).padStart(2, "0")} / ${totalTasks}`;
  $("#modalDifficulty").textContent = isVisual ? "угадай по картинке" : ["разогрев", "суть", "практика"][currentQuestion.level - 1];
  $("#modalPoints").textContent = `+${currentQuestion.points}`;
  $("#visualQuestionArt").innerHTML = isVisual ? visualImage(currentQuestion) : "";
  $("#visualQuestionArt").classList.toggle("is-hidden", !isVisual);
  $("#modalQuestion").textContent = currentQuestion.question;
  $("#optionsLabel").textContent = isVisual ? "ВЫБЕРИТЕ, ЧТО ИЗОБРАЖЕНО" : "ВЫБЕРИТЕ ОТВЕТ";
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
    }
  }, 1000);
}

function resolveQuestion(correct, timedOut = false, selectedIndex = -1) {
  if (!currentQuestion || state.results[currentQuestion.id]) return;
  clearInterval(timerId);
  const usedHint = state.usedHints.has(currentQuestion.id);
  const earned = correct ? Math.round(currentQuestion.points * (usedHint ? 0.8 : 1)) : 0;
  const activeTeam = state.teams[state.activeTeamIndex];
  state.results[currentQuestion.id] = { status: correct ? "correct" : "wrong", selectedIndex, teamIndex: state.activeTeamIndex };
  state.answered += 1;
  activeTeam.answered += 1;
  if (correct) {
    state.score += earned;
    state.correct += 1;
    activeTeam.score += earned;
    activeTeam.correct += 1;
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
  $("#resultTitle").textContent = correct ? "Ответ принят" : timedOut ? "Время вышло" : "Ответ не засчитан";
  $("#resultEarned").textContent = correct ? `+${earned}` : "+0";
  $("#resultText").textContent = correct ? (usedHint ? `${activeTeam.name} ответила верно. Подсказка сняла 20% стоимости.` : `${activeTeam.name} забирает очки за правильный вариант.`) : timedOut ? "Время вышло — правильный вариант подсвечен зелёным." : "Этот вариант не подошёл. Правильный ответ подсвечен зелёным.";
  $("#resultAnswer").textContent = currentQuestion.options[currentQuestion.answerIndex];
  updateScorePanel();
  renderTeams();
  renderBoard();
  renderVisualBoard();
}

function updateScorePanel() {
  $("#scoreValue").textContent = state.score.toLocaleString("ru-RU");
  $("#answeredValue").textContent = state.answered;
  $("#correctValue").textContent = state.correct;
  $("#streakValue").textContent = state.streak;
  const percentage = Math.round((state.answered / totalTasks) * 100);
  $("#progressPercent").textContent = `${percentage}%`;
  $("#progressBar").style.width = `${percentage}%`;
  $("#scoreOrb").style.background = `conic-gradient(var(--teal) ${percentage * 3.6}deg, rgba(168,216,205,.08) 0deg)`;
  const activeTeam = state.teams?.[state.activeTeamIndex];
  if (activeTeam) {
    $("#activeTeamName").textContent = activeTeam.name;
    $("#activeTeamScore").textContent = `${activeTeam.score.toLocaleString("ru-RU")} очков`;
  }
}

function renderTeams() {
  if (!state.teams) return;
  $("#turnLabel").textContent = `Ход ${state.teams[state.activeTeamIndex].name}`;
  $("#teamTabs").innerHTML = state.teams.map((team, index) => `<div class="team-tab ${team.color} ${index === state.activeTeamIndex ? "is-active" : ""}"><span class="team-tab-dot"></span><strong>${team.name}</strong><b>${team.score.toLocaleString("ru-RU")}</b><small>${index === state.activeTeamIndex ? "сейчас играет" : `${team.correct} верно`}</small></div>`).join("");
  $("#teamLeaderboard").innerHTML = `<div class="leaderboard-title">КОМАНДНЫЙ СЧЁТ</div>${[...state.teams].sort((a, b) => b.score - a.score).map((team, index) => `<div class="leaderboard-row ${team.color}"><span class="leaderboard-rank">${index + 1}</span><span class="team-tab-dot"></span><strong>${team.name}</strong><b>${team.score.toLocaleString("ru-RU")}</b></div>`).join("")}`;
}

function advanceTurn() {
  if (!state.teams?.length) return;
  state.activeTeamIndex = (state.activeTeamIndex + 1) % state.teams.length;
  renderTeams();
  updateScorePanel();
  if (state.answered < totalTasks) showToast(`Теперь ходит ${state.teams[state.activeTeamIndex].name}`);
}

function maybeFinish() {
  if (state.answered < totalTasks) return;
  window.setTimeout(() => {
    closeQuestion();
    showSummary();
  }, 450);
}

function readHistory() {
  try {
    const history = JSON.parse(window.localStorage.getItem(HISTORY_KEY) || "[]");
    return Array.isArray(history) ? history.filter((item) => item && Array.isArray(item.teams)) : [];
  } catch (error) {
    return [];
  }
}

function saveMatchResult() {
  if (state.resultSaved) return;
  const record = {
    id: Date.now(),
    date: new Intl.DateTimeFormat("ru-RU", { day: "2-digit", month: "long", year: "numeric", hour: "2-digit", minute: "2-digit" }).format(new Date()),
    score: state.score,
    correct: state.correct,
    totalTasks,
    bestStreak: state.bestStreak,
    teams: state.teams.map((team) => ({ name: team.name, score: team.score, answered: team.answered, correct: team.correct, color: team.color })),
  };
  try {
    window.localStorage.setItem(HISTORY_KEY, JSON.stringify([record, ...readHistory()].slice(0, 12)));
  } catch (error) { /* Statistics still work during the current round if storage is unavailable. */ }
  state.resultSaved = true;
}

function teamAccuracy(team) {
  return team.answered ? Math.round((team.correct / team.answered) * 100) : 0;
}

function renderPodium() {
  const sortedTeams = [...state.teams].sort((a, b) => b.score - a.score || b.correct - a.correct);
  $("#podium").innerHTML = sortedTeams.map((team, index) => {
    const place = index + 1;
    return `<article class="podium-item place-${place} ${team.color}"><span class="podium-rank">${place}</span><strong class="podium-name">${team.name}</strong><b class="podium-score">${team.score.toLocaleString("ru-RU")}</b><small class="podium-details">${team.correct} верно · ${teamAccuracy(team)}% точность</small><span class="podium-base" aria-hidden="true"></span></article>`;
  }).join("");
}

function renderHistory() {
  const history = readHistory();
  $("#statisticsLead").textContent = history.length ? `Сохранено партий: ${history.length}. Результаты хранятся только в этом браузере.` : "Пока нет завершённых партий. Сыграйте первую — здесь появится её пьедестал.";
  $("#historyList").innerHTML = history.length ? history.map((game, gameIndex) => {
    const sortedTeams = [...game.teams].sort((a, b) => b.score - a.score || b.correct - a.correct);
    const teamRows = sortedTeams.map((team, index) => `<div class="history-team-row ${team.color}"><span class="history-team-rank">${index + 1}</span><i class="team-tab-dot"></i><strong>${team.name}</strong><small>${team.correct} верно · ${team.answered ? Math.round((team.correct / team.answered) * 100) : 0}%</small><b>${Number(team.score).toLocaleString("ru-RU")}</b></div>`).join("");
    return `<article class="history-entry"><div class="history-entry-head"><div><span>ПАРТИЯ ${String(history.length - gameIndex).padStart(2, "0")}</span><time>${game.date}</time></div><strong>${Number(game.score).toLocaleString("ru-RU")}<small>очков</small></strong></div><div class="history-team-list">${teamRows}</div><div class="history-entry-foot"><span>${game.correct} / ${game.totalTasks} верных ответов</span><span>серия ${game.bestStreak}×</span></div></article>`;
  }).join("") : `<div class="history-empty"><span>✦</span><strong>История пока пуста</strong><p>После завершения командной игры результаты сохранятся здесь автоматически.</p></div>`;
}

function showStatistics(returnToSummary = false) {
  statisticsReturnTarget = returnToSummary ? "summary" : null;
  if (returnToSummary) summaryModal.classList.add("is-hidden");
  renderHistory();
  $("#statisticsModal").classList.remove("is-hidden");
}

function closeStatistics() {
  $("#statisticsModal").classList.add("is-hidden");
  if (statisticsReturnTarget === "summary") summaryModal.classList.remove("is-hidden");
  statisticsReturnTarget = null;
}

function showSummary() {
  $("#finalScore").textContent = state.score.toLocaleString("ru-RU");
  $("#finalCorrect").textContent = `${state.correct} / ${totalTasks}`;
  $("#finalPercent").textContent = `${Math.round((state.correct / totalTasks) * 100)}%`;
  $("#finalBestStreak").textContent = `${state.bestStreak}×`;
  const winner = [...state.teams].sort((a, b) => b.score - a.score)[0];
  $("#winnerLabel").textContent = `ПОБЕДИТЕЛЬ — ${winner.name.toUpperCase()} · ${winner.score.toLocaleString("ru-RU")} ОЧКОВ`;
  const tone = state.correct >= 17 ? "Конституционный компас настроен точно." : state.correct >= 11 ? "Хорошая база — осталось закрепить несколько институтов." : "Самое время открыть текст Конституции и пройти раунд ещё раз.";
  $("#summaryCopy").textContent = `${tone} Команды прошли ${state.answered} заданий: ${baseQuestions.length} вопросов и ${visualRounds.length} визуальных раундов.`;
  saveMatchResult();
  renderPodium();
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
  if (!currentQuestion || state.results[currentQuestion.id]) return;
  resolveQuestion(selectedIndex === currentQuestion.answerIndex, false, selectedIndex);
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
  closeStatistics();
  questionModal.classList.add("is-hidden");
  welcomeModal.classList.add("is-hidden");
  resetState();
  window.scrollTo({ top: 0, behavior: "smooth" });
  playSound("click");
}

$("#startButton").addEventListener("click", startNewGame);
$("#playAgainButton").addEventListener("click", startNewGame);
$("#newGameButton").addEventListener("click", () => { closeQuestion(); resetState(); showToast("Новая партия готова — вопросы перемешаны"); playSound("click"); });
$("#historyButton").addEventListener("click", () => showStatistics());
$("#summaryStatsButton").addEventListener("click", () => showStatistics(true));
$("#statisticsClose").addEventListener("click", closeStatistics);
$("#soundToggle").addEventListener("click", toggleSound);
$("#hintButton").addEventListener("click", useHint);
$("#nextButton").addEventListener("click", () => { advanceTurn(); closeQuestion(); maybeFinish(); });
$("#modalClose").addEventListener("click", closeQuestion);
questionModal.addEventListener("click", (event) => { if (event.target === questionModal) closeQuestion(); });
document.addEventListener("keydown", (event) => { if (event.key === "Escape") { closeQuestion(); closeStatistics(); welcomeModal.classList.add("is-hidden"); } });
$("#statisticsModal").addEventListener("click", (event) => { if (event.target === $("#statisticsModal")) closeStatistics(); });

$("#teamCountOptions").querySelectorAll(".team-count-button").forEach((button) => button.addEventListener("click", () => {
  selectedTeamCount = Number(button.dataset.teamCount);
  $("#teamCountOptions").querySelectorAll(".team-count-button").forEach((item) => item.classList.toggle("is-selected", item === button));
}));

resetState();
welcomeModal.classList.remove("is-hidden");
