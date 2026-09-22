const categories = [
  { key: "basics", label: "Основы", short: "основы" },
  { key: "rights", label: "Права", short: "права" },
  { key: "power", label: "Власть", short: "власть" },
  { key: "changes", label: "Изменения", short: "изменения" },
  { key: "practice", label: "Практика", short: "практика" },
];

const difficultyLabels = ["старт", "анализ", "казус"];

const baseQuestions = [
  { id: "b1", category: "basics", level: 1, points: 100, time: 45, question: "В споре о системе права утверждают, что конституционное право — лишь вводный учебный курс. Но оно одновременно определяет основы строя, статус личности и организацию власти. Какой вывод юридически точен?", answer: "Ведущая отрасль национального права Республики Казахстан.", keywords: ["ведущ", "отрасл", "национальн"], hint: "Сравните предмет регулирования с фундаментом всей национальной правовой системы, а не с одной сферой управления." },
  { id: "b2", category: "basics", level: 2, points: 300, time: 34, question: "Ведомственный приказ противоречит прямой норме Конституции, а руководитель называет приказ «специальным». Какой полный набор свойств Основного закона лишает этот довод силы?", answer: "Высшая юридическая сила, прямое действие, обязательность и особый порядок принятия и изменения.", keywords: ["высш", "юридичес", "прям", "обязатель", "особ", "принят"], hint: "Нужен не один признак приоритета, а вся связка свойств Конституции из конспекта." },
  { id: "b3", category: "basics", level: 3, points: 500, time: 26, question: "На 2 июля 2026 года юрист цитирует Конституцию 1995 года как действующий Основной закон. Какие дата и правовое последствие показывают, что заключение построено на неверном источнике?", answer: "Новая Конституция вступила в силу 1 июля 2026 года, а Конституция 1995 года прекратила действие.", keywords: ["1 июля", "2026", "прекрат", "действ"], hint: "Соедините момент вступления новой Конституции в силу с юридической судьбой прежнего текста." },
  { id: "r1", category: "rights", level: 1, points: 100, time: 45, question: "Орган власти заявляет, что любое право существует лишь после того, как его «предоставит» государство. Какое право в конспекте противопоставляет этому подходу как неотъемлемое?", answer: "Право на жизнь.", keywords: ["право на жизнь", "жизнь"], hint: "Речь не о социальной услуге и не о статусе, который возникает после регистрации." },
  { id: "r2", category: "rights", level: 2, points: 300, time: 34, question: "Цифровой сервис собирает идентификационные данные граждан, передаёт их подрядчику и не объясняет механизм защиты. Какая конституционная гарантия адресно охватывает этот риск?", answer: "Защита персональных данных и прав человека в цифровой среде.", keywords: ["персональн", "цифров", "данн"], hint: "Ищите гарантию о сведениях, относящихся к человеку, а не общий запрет на технологии." },
  { id: "r3", category: "rights", level: 3, points: 500, time: 26, question: "В проекте перечислены суды, нотариат и медиация. Какой институт новая Конституция специально выделяет как профессиональную форму юридической защиты человека?", answer: "Адвокатура и адвокатская деятельность.", keywords: ["адвокат"], hint: "Вопрос о специальном конституционном закреплении, а не о любой помощи в юридическом споре." },
  { id: "p1", category: "power", level: 1, points: 100, time: 45, question: "В переходной схеме двухпалатный Парламент больше не действует, но законодательная функция сохраняется в одном представительном органе. Как называется этот орган в новой модели?", answer: "Курултай.", keywords: ["курултай"], hint: "Отделите новый законодательный орган от прежних палат и от консультативного института." },
  { id: "p2", category: "power", level: 2, points: 300, time: 34, question: "Президент определил кандидата на должность Вице-президента, однако юридический отдел указывает: назначение ещё не завершено без согласительной стадии. Какая формула процедуры верна?", answer: "Президент назначает Вице-президента с согласия Курултая.", keywords: ["президент", "курултай", "соглас"], hint: "Разделите полномочие назначить и полномочие дать согласие." },
  { id: "p3", category: "power", level: 3, points: 500, time: 26, question: "Нужно проверить, соответствует ли нормативный акт Конституции, а не разрешить частный спор и не организовать исполнение закона. Какой самостоятельный орган осуществляет именно эту функцию?", answer: "Конституционный Суд.", keywords: ["конституционн", "суд"], hint: "Определите орган по предмету конституционного контроля, а не по общему названию ветви власти." },
  { id: "c1", category: "changes", level: 1, points: 100, time: 45, question: "В сравнительной таблице перепутали прежнюю и новую модели представительной власти. Какая конструкция относится именно к Парламенту по Конституции 1995 года?", answer: "Две палаты: Сенат и Мажилис.", keywords: ["две", "сенат", "мажилис", "2"], hint: "Вспомните устройство прежнего Парламента, до перехода к однопалатному Курултаю." },
  { id: "c2", category: "changes", level: 2, points: 300, time: 34, question: "Лицо уже прошло единственный семилетний президентский срок и объявляет о новом выдвижении. Как совместно работают правило о сроке и запрет на повторное избрание?", answer: "Президент избирается на 7 лет, и одно лицо не может быть избрано более одного раза.", keywords: ["7 лет", "одного раза", "один раз", "более одного"], hint: "Одного знания о длительности срока недостаточно: проверьте ограничение для того же лица." },
  { id: "c3", category: "changes", level: 3, points: 500, time: 26, question: "Нужно доказать, что речь идёт не о косметической редактуре, а о масштабной перестройке конституционной модели. Какой показатель переработки текста приводят в конспекте?", answer: "Около 84% текста Конституции.", keywords: ["84", "84%", "процент"], hint: "Найдите числовой индикатор масштаба реформы, а не дату референдума или первых выборов." },
  { id: "x1", category: "practice", level: 1, points: 100, time: 45, question: "В правовом заключении нужно одной формулой назвать и территориальное устройство государства, и форму правления Казахстана. Какая комбинация не смешивает эти два понятия?", answer: "Унитарное государство с президентской формой правления.", keywords: ["президентск", "форма правлен"], hint: "Первый элемент описывает устройство государства, второй — способ организации верховной власти." },
  { id: "x2", category: "practice", level: 2, points: 300, time: 34, question: "Госорган предлагает сделать религиозное правило обязательным условием для всех граждан. Какая конституционная формула сразу показывает предел такого решения?", answer: "Религия отделена от государства; государство является светским.", keywords: ["отделен", "светск", "религ"], hint: "Нужны оба взаимосвязанных элемента: светский характер государства и отделение религии." },
  { id: "x3", category: "practice", level: 3, points: 500, time: 26, question: "Юрист выстраивает позицию только по Конституции 1995 года и не сверяется с текстом, действующим после 1 июля 2026 года. Почему это не просто устаревшая ссылка, а методологическая ошибка?", answer: "Потому что Конституция 1995 года прекратила действие с 1 июля 2026 года, а новая Конституция сформировала обновлённую конституционную модель.", keywords: ["действующ", "прекрат", "1 июля", "обновлен", "модел"], hint: "Правовой вывод строится по действующему первоисточнику, особенно когда изменилась сама конституционная модель." },
];

const alternatePrompts = {
  b1: ["Какая отрасль национального права задаёт одновременно основы строя, статус личности и систему публичной власти?", "Почему конституционное право нельзя свести к разделу об устройстве отдельных госорганов?"],
  b2: ["Какой набор свойств позволяет применить Конституцию при конфликте с ведомственным актом?", "Какие признаки не только ставят Конституцию выше иных актов, но и делают её применимой непосредственно?"],
  b3: ["Норма применяется 5 июля 2026 года. Какой Основной закон должен взять за основу юрист и почему?", "Какая дата отделяет действие новой Конституции от прекращения действия Конституции 1995 года?"],
  r1: ["Какое право в конспекте названо принадлежащим человеку не как предоставленная государством услуга, а как неотъемлемое?", "Какое из закреплённых прав образует первичную основу существования человека?"],
  r2: ["Какую гарантию должна проверить команда, если платформа обрабатывает персональные сведения граждан без понятной защиты?", "Какой конституционный ответ относится к риску утечки и неправомерного использования данных в цифровом сервисе?"],
  r3: ["Какой институт профессиональной юридической защиты получил отдельную конституционную норму?", "В чём состоит специально закреплённый в новой Конституции институт защиты, а не урегулирования спора?"],
  p1: ["Как называется однопалатный законодательный орган, пришедший на смену прежней модели?", "Какой орган выполняет законодательную функцию после отказа от конструкции «Сенат + Мажилис»?"],
  p2: ["Кто совершает назначение Вице-президента и какой орган должен дать на него согласие?", "Как выглядит двухэлементная процедура назначения Вице-президента в новой модели?"],
  p3: ["Какой орган проверяет конституционность нормы, когда вопрос не сводится к обычному судебному спору?", "Кому принадлежит самостоятельная функция конституционного контроля?"],
  c1: ["Какие две палаты составляли Парламент в модели Конституции 1995 года?", "Какое устройство прежнего законодательного органа изменилось при переходе к Курултаю?"],
  c2: ["Может ли Президент, уже избранный на 7 лет, выдвигаться повторно по новой модели?", "Как соотносятся семилетний срок и ограничение числа избраний одного лица?"],
  c3: ["Какую долю текста Конституции, по материалам конспекта, затронула реформа?", "Какой процент позволяет назвать преобразование новой конституционной моделью, а не набором отдельных поправок?"],
  x1: ["Какая формула точно соединяет унитарное устройство Казахстана и президентскую форму правления?", "Как не перепутать форму государственного устройства Казахстана с формой правления?"],
  x2: ["Какой принцип не позволяет государственному органу сделать религиозное правило обязательным для всех?", "Как связаны светский характер государства и отделение религии от государственной власти?"],
  x3: ["Почему при решении ситуации после 1 июля 2026 года нельзя основывать заключение только на Конституции 1995 года?", "Какое правовое последствие смены Основного закона требует обратиться к новому тексту Конституции?"],
};

const answerOptions = {
  b1: { options: ["Ведущая отрасль национального права, определяющая базовые отношения государства, личности и власти", "Комплексный институт административного права, регулирующий только исполнительные органы", "Международно-правовой режим, который действует отдельно от национальной системы права", "Учебная дисциплина, не имеющая самостоятельного предмета правового регулирования"], answerIndex: 0 },
  b2: { options: ["Высшая юридическая сила и обязательность, но без прямого действия и особой процедуры изменения", "Высшая юридическая сила, прямое действие, обязательность и особый порядок принятия и изменения", "Прямое действие и особый порядок изменения, но без приоритета над противоречащим актом", "Обязательность только для органов власти при возможности изменить Конституцию подзаконным актом"], answerIndex: 1 },
  b3: { options: ["1 января 2026 года; Конституция 1995 года продолжила действовать как основной текст", "15 марта 2026 года; Конституция 1995 года была только дополнена", "1 июля 2026 года; Конституция 1995 года прекратила действие", "23 августа 2026 года; Конституция 1995 года была приостановлена до принятия новых законов"], answerIndex: 2 },
  r1: { options: ["Право на образование как гарантия развития личности", "Право на жизнь как неотъемлемое право человека", "Право собственности как последствие государственной регистрации", "Право на труд как право, возникающее с заключением договора"], answerIndex: 1 },
  r2: { options: ["Право на бесплатный доступ к государственным цифровым сервисам", "Защита персональных данных и прав человека в цифровой среде", "Полный запрет на использование цифровых технологий государством и бизнесом", "Обязанность каждого гражданина передавать любые данные по требованию сервиса"], answerIndex: 1 },
  r3: { options: ["Адвокатура и адвокатская деятельность как институт профессиональной защиты", "Нотариат как единственная допустимая форма представительства в суде", "Медиация как обязательная замена квалифицированной юридической помощи", "Государственная служба как специальный институт защиты частных прав"], answerIndex: 0 },
  p1: { options: ["Сенат как сохранённая верхняя палата прежнего Парламента", "Қазақстан Халық Кеңесі как новый законодательный орган", "Курултай как новый однопалатный законодательный орган", "Конституционный Суд как орган, принявший законодательную функцию"], answerIndex: 2 },
  p2: { options: ["Курултай назначает Вице-президента самостоятельно, без участия Президента", "Президент назначает Вице-президента с согласия Курултая", "Президент предлагает кандидатуру, а Конституционный Суд совершает назначение", "Вице-президент избирается гражданами на отдельном референдуме"], answerIndex: 1 },
  p3: { options: ["Правительство, поскольку оно обеспечивает исполнение законов", "Курултай, поскольку он принимает законы и представляет народ", "Конституционный Суд как самостоятельный орган конституционного контроля", "Прокуратура, поскольку надзор за законностью равен конституционному контролю"], answerIndex: 2 },
  c1: { options: ["Одна палата — Курултай, поскольку новая модель уже действовала в 1995 году", "Две палаты — Сенат и Мажилис", "Две палаты — Курултай и Қазақстан Халық Кеңесі", "Три палаты — Сенат, Мажилис и отдельный Совет представителей"], answerIndex: 1 },
  c2: { options: ["Президент избирается на 5 лет и может переизбираться без ограничения", "Президент избирается на 7 лет и может избираться повторно без специального ограничения", "Президент избирается на 7 лет, одно лицо — не более одного раза", "Президент назначается Курултаем на 10 лет после одного избрания"], answerIndex: 2 },
  c3: { options: ["Около 25% текста — изменения носили только редакционный характер", "Около 50% текста — была заменена примерно половина норм", "Около 70% текста — изменения затронули отдельные главы", "Около 84% текста Конституции — показатель масштаба изменений"], answerIndex: 3 },
  x1: { options: ["Унитарное государство с парламентской формой правления", "Унитарное государство с президентской формой правления", "Федеративное государство с президентской формой правления", "Конфедерация с коллегиальной формой правления"], answerIndex: 1 },
  x2: { options: ["Религиозные нормы входят в систему государственной власти и обязательны для всех", "Религия отделена от государства; государство является светским", "Религиозные нормы автоматически имеют приоритет над Конституцией", "Светский характер означает, что государство не вправе регулировать отношения с религиозными объединениями"], answerIndex: 1 },
  x3: { options: ["Потому что новая Конституция только сокращает объём прежнего текста", "Потому что Конституция 1995 года продолжает действовать параллельно с новой", "Потому что действующий текст определяет актуальную модель государства и права", "Потому что юридическое заключение можно строить на комментариях без текста Конституции"], answerIndex: 2 },
};

const visualRounds = [
  { id: "v1", kind: "visual", image: "assets/visual/kazakhstan-flag.png", imageAlt: "Государственный флаг Республики Казахстан", imagePosition: "center", title: "Флаг Республики Казахстан", points: 200, time: 30, question: "На изображении — объект, чьи признаки установлены для официального символа государства. Какой правовой статус он имеет в Республике Казахстан?", hint: "Голубое полотнище, солнце, орёл и национальный орнамент образуют официальный символ государства.", options: ["Государственный флаг Республики Казахстан", "Официальная эмблема Конституционного Суда", "Геральдический знак местного самоуправления", "Государственный герб Республики Казахстан"], answerIndex: 0 },
  { id: "v2", kind: "visual", image: "assets/visual/kazakh-ballot-box.jpg", imageAlt: "Избирательная урна на участке в Астане, Казахстан", imagePosition: "center 52%", title: "Избирательная урна в РК", points: 200, time: 30, question: "Гражданин опускает бюллетень в урну. Какой конституционно значимый механизм участия народа в управлении государством отражает эта ситуация?", hint: "Урна на избирательном участке связана с голосованием граждан при выборах и референдуме.", options: ["Выборы и референдум", "Назначение Вице-президента Президентом", "Конституционный контроль нормативных актов", "Рассмотрение спора в судебной системе"], answerIndex: 0 },
  { id: "v3", kind: "visual", image: "assets/visual/constitutional-court-emblem.png", imageAlt: "Эмблема Конституционного Суда Республики Казахстан", imagePosition: "center", title: "Конституционный Суд РК", points: 300, time: 26, question: "Эмблема указывает на орган, который не заменяет обычные суды, а оценивает соответствие норм Основному закону. Какая связка названа точно?", hint: "Ищите орган, который проверяет соответствие правовых норм Конституции.", options: ["Конституционный Суд РК — конституционный контроль", "Верховный Суд РК — конституционный контроль", "Курултай — конституционный контроль", "Прокуратура — конституционный контроль"], answerIndex: 0 },
  { id: "v4", kind: "visual", image: "assets/visual/kazakhstan-parliament.jpg", imageAlt: "Здание Парламента Республики Казахстан в Астане", imagePosition: "center 48%", title: "Здание Парламента РК", points: 300, time: 26, question: "Здание связано с законодательной ветвью. Какой новый институт должен отражать переход от модели двух палат к однопалатной конструкции?", hint: "Сопоставьте здание законодательного института с переходом к однопалатной модели.", options: ["Конституционный Суд", "Курултай", "Қазақстан Халық Кеңесі", "Правительство"], answerIndex: 1 },
  { id: "v5", kind: "visual", image: "assets/visual/constitution-of-kazakhstan.jpg", imageAlt: "Печатное издание Конституции Республики Казахстан", imagePosition: "center 48%", title: "Конституция РК", points: 400, time: 22, question: "Документ на фотографии применяется как критерий для оценки всех остальных правовых актов. Какой статус в системе права Республики Казахстан объясняет это последствие?", hint: "Он имеет высшую юридическую силу и определяет основы государства и права человека.", options: ["Конституция Республики Казахстан как Основной закон", "Государственный бюджет как акт высшей юридической силы", "Уголовный кодекс как единственный источник прав человека", "Трудовой договор как основа устройства государства"], answerIndex: 0 },
  { id: "v6", kind: "visual", image: "assets/visual/kazakhstan-supreme-court.jpg", imageAlt: "Здание Верховного Суда Республики Казахстан", imagePosition: "center 52%", title: "Верховный Суд РК", points: 400, time: 22, question: "Назовите орган на фотографии так, чтобы одновременно были верно указаны его уровень и место в системе разделения властей.", hint: "Назовите конкретный высший судебный орган и ветвь, которая осуществляет правосудие.", options: ["Верховный Суд РК — судебная власть", "Курултай — представительная власть", "Правительство — исполнительная власть", "Избирательная комиссия — орган конституционного контроля"], answerIndex: 0 },
];

const totalTasks = baseQuestions.length + visualRounds.length;

const $ = (selector) => document.querySelector(selector);
const board = $("#gameBoard");
const visualBoard = $("#visualBoard");
const questionModal = $("#questionModal");
const welcomeModal = $("#welcomeModal");
const summaryModal = $("#summaryModal");
const timerWrap = $("#timerWrap");
const timerBar = $("#timerBar");
const timerProgress = $("#timerProgress");
const timerStatus = $("#timerStatus");

let state = {};
let currentQuestion = null;
let timerId = null;
let audioContext = null;
let audioMuted = false;
let selectedTeamCount = 2;
let statisticsReturnTarget = null;
let timerCue = null;

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
      question: [item.question, ...(alternatePrompts[item.id] || [])][Math.floor(Math.random() * (1 + (alternatePrompts[item.id] || []).length))],
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
  resetTimerPresentation();
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
      const label = result ? (result.status === "correct" ? "верно" : "завершено") : difficultyLabels[level - 1];
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
  $("#modalDifficulty").textContent = isVisual ? "угадай по картинке" : difficultyLabels[currentQuestion.level - 1];
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

function timerMood(remaining) {
  if (remaining <= 0) return { className: "final", label: "время вышло" };
  if (remaining <= 5) return { className: "final", label: "последние секунды" };
  if (remaining <= 12) return { className: "critical", label: "решение нужно сейчас" };
  if (remaining <= 18) return { className: "warning", label: "время уходит" };
  return { className: "calm", label: "обсудите и выберите вариант" };
}

function updateTimerPresentation(remaining, total) {
  const safeRemaining = Math.max(remaining, 0);
  const percentage = Math.max(0, Math.min(100, (safeRemaining / total) * 100));
  const mood = timerMood(safeRemaining);
  $("#timerValue").textContent = safeRemaining;
  timerProgress.style.width = `${percentage}%`;
  timerBar.setAttribute("aria-valuemax", String(total));
  timerBar.setAttribute("aria-valuenow", String(safeRemaining));
  timerBar.setAttribute("aria-valuetext", `${safeRemaining} секунд осталось`);
  timerWrap.classList.remove("is-calm", "is-warning", "is-critical", "is-final", "is-answered", "is-expired");
  timerWrap.classList.add(`is-${mood.className}`);
  timerStatus.textContent = mood.label;

  if (safeRemaining > 0 && safeRemaining <= 12 && safeRemaining !== timerCue && (safeRemaining <= 5 || safeRemaining % 2 === 0)) {
    playSound(safeRemaining <= 5 ? "timer-final" : "timer-warning");
    timerCue = safeRemaining;
  }
}

function resetTimerPresentation() {
  timerCue = null;
  timerWrap.className = "timer-wrap is-calm";
  $("#timerValue").textContent = "45";
  timerProgress.style.width = "100%";
  timerBar.setAttribute("aria-valuemax", "45");
  timerBar.setAttribute("aria-valuenow", "45");
  timerBar.setAttribute("aria-valuetext", "45 секунд осталось");
  timerStatus.textContent = "обсудите и выберите вариант";
}

function freezeTimer(timedOut = false) {
  timerWrap.classList.remove("is-calm", "is-warning", "is-critical", "is-final");
  timerWrap.classList.add(timedOut ? "is-expired" : "is-answered");
  timerStatus.textContent = timedOut ? "время вышло" : "ответ зафиксирован";
}

function startTimer(seconds) {
  clearInterval(timerId);
  timerCue = null;
  let remaining = seconds;
  updateTimerPresentation(remaining, seconds);
  timerId = window.setInterval(() => {
    remaining -= 1;
    updateTimerPresentation(remaining, seconds);
    if (remaining <= 0) {
      clearInterval(timerId);
      resolveQuestion(false, true, -1);
    }
  }, 1000);
}

function resolveQuestion(correct, timedOut = false, selectedIndex = -1) {
  if (!currentQuestion || state.results[currentQuestion.id]) return;
  clearInterval(timerId);
  freezeTimer(timedOut);
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
  resetTimerPresentation();
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
    if (audioContext.state === "suspended") audioContext.resume();
    const now = audioContext.currentTime;
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    oscillator.connect(gain);
    gain.connect(audioContext.destination);
    const sound = {
      click: { wave: "sine", from: 260, to: 310, duration: .12, volume: .035 },
      success: { wave: "sine", from: 523.25, to: 783.99, duration: .25, volume: .065 },
      "success-note": { wave: "sine", from: 783.99, to: 1046.5, duration: .18, volume: .05 },
      fail: { wave: "sawtooth", from: 155, to: 95, duration: .28, volume: .035 },
      "timer-warning": { wave: "sine", from: 610, to: 610, duration: .1, volume: .042 },
      "timer-final": { wave: "square", from: 820, to: 920, duration: .13, volume: .052 },
    }[type] || { wave: "sine", from: 260, to: 260, duration: .12, volume: .035 };
    oscillator.type = sound.wave;
    oscillator.frequency.setValueAtTime(sound.from, now);
    if (sound.to !== sound.from) oscillator.frequency.exponentialRampToValueAtTime(sound.to, now + sound.duration * .75);
    gain.gain.setValueAtTime(.0001, now);
    gain.gain.exponentialRampToValueAtTime(sound.volume, now + .012);
    gain.gain.exponentialRampToValueAtTime(.0001, now + sound.duration);
    oscillator.start(now);
    oscillator.stop(now + sound.duration + .02);
    if (type === "success") window.setTimeout(() => playSound("success-note"), 100);
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
