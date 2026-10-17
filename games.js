/* =====================================================================
   НАСТРОЙКИ САЙТА
   ===================================================================== */
window.SETTINGS = {
  // Адрес посредника Google, через который заявки приходят в Telegram.
  // Вставьте сюда ссылку вида https://script.google.com/macros/s/.../exec
  orderUrl: 'https://script.google.com/macros/s/AKfycbzJGRzE_QsM_ajK6ni85LW_i5MpdM8G_oM4SGTyJ2sx0oPhNVYbkCgfv_7uPaW9dBOP/exec',

  // Токен бота теперь хранится в скрипте Google, здесь его указывать не нужно.
  telegramBotToken: ['', ''],
  telegramChatId:   '530191393',

  // Подпись игр совместного бренда
  logosName: 'Logos',

  // Сколько дней игра считается новой (раздел «Новые»)
  newDays: 14,
  logosPartner: '@amarynnis',

  // Куда писать покупателю, если автоматическая отправка не сработала
  // Акция: скидка на все платные игры. После даты until скидка исчезнет с сайта сама.
  // Чтобы выключить раньше — поставьте percent: 0
  sale: { percent: 20, until: '2026-11-10' },

  telegramUser: 'polliafan',
  phone: '+79231240038'
};

/* =====================================================================
   СПИСОК ИГР

   Чтобы добавить новую игру:
   1. Загрузите фото/видео игры на GitHub (Add file → Upload files), например zima-1.jpg.
   2. Скопируйте ШАБЛОН ниже и вставьте его в список GAMES (после любой игры).
   3. Заполните поля. Текст пишется между кавычками '...'.
   4. Не забудьте запятую после закрывающей скобки } у каждой игры.

   ШАБЛОН:
   {
     id: 'zima',                         // короткое имя латиницей, без пробелов, не повторяется
     title: 'Название игры',
     sub: 'Автоматизация звука С',        // одна строка под названием
     glyph: 'С',                          // буква на обложке, если нет фото
     tint: 'blue',                        // цвет обложки: leaf, pink, blue, farm, cave, planet, lake, snow
     price: 300,                          // цена в рублях; 0 — бесплатно; null — «цена уточняется»
     link: '',                            // ТОЛЬКО для бесплатных: ссылка на игру или файл. Это может быть файл в папке free
                                          // (например 'igra.html' или 'igra.pptx') или ссылка на Яндекс Диск / Google Диск.
                                          // Тогда вместо «+» появится кнопка «Забрать», и игра откроется сразу, без заявки.
     format: 'browser',                   // 'browser' — браузерная игра, 'ppt' — PowerPoint, 'sheet' — рабочий лист
     brand: 'own',                        // 'own' — ваша игра, 'logos' — бренд Logos
     soon: false,                         // true — «Скоро выйдет»: игру видно, но заказать пока нельзя
     added: '2026-11-01',                 // дата выхода (год-месяц-день): 14 дней игра будет в разделе «Новые»
     is3d: false,                         // true — 3D-игра
     // Раздел каталога выбирается сам по тегам: 'Звук Р' → «Звуки», 'Небылицы' → «Связная речь» и т.д.
     // Чтобы задать вручную: topic: 'artic' | 'sounds' | 'slog' | 'speech' | 'mind' | 'diag'
     artic: false,                        // true — артикуляционная гимнастика
     tags: ['Звук С', 'Слова'],
     desc: 'Короткое описание игры.',
     points: ['Особенность 1', 'Особенность 2'],
     media: [
       { type: 'img',   src: 'zima-1.jpg' },
       { type: 'video', src: 'zima.mp4', poster: 'zima-1.jpg' }
     ]
   },
   ===================================================================== */

window.GAMES = [
  {
    id: 'cave', title: 'Грибная пещера', sub: 'Автоматизация звука Р', glyph: 'Р', tint: 'cave',
    added: '2026-10-10', price: 500, format: 'browser', brand: 'own', is3d: true, artic: false,
    tags: ['3D', 'Звук Р', 'Слова'],
    desc: 'Герой прыгает по островам в пещере со светящимися грибами и собирает объёмные картинки. Обходите препятствия и называйте слова со звуком Р.',
    points: ['100 слов со звуком Р в начале, середине и конце слова', '20 слов в каждой игре', 'Объёмные 3D-картинки'],
    media: [
      { type: 'video', src: 'vid-cave.mp4', poster: 'vid-cave-poster.webp' },
      { type: 'img', src: 'cave-play.webp' },
      { type: 'img', src: 'cave-play2.webp' }
    ]
  },
  {
    id: 'farm', title: 'Ферма: беги и собирай', sub: 'Артикуляционная гимнастика', glyph: 'Арт', tint: 'farm',
    price: 500, format: 'browser', brand: 'own', is3d: false, artic: true,
    tags: ['Артикуляция', 'Раннер'],
    desc: 'Выберите питомца и бегите по ферменной дорожке. На пути попадаются карточки с артикуляционными упражнениями, которые ребёнок выполняет перед зеркалом.',
    points: ['22 упражнения, логопед сам выбирает нужные', '7 животных на выбор', '3 скорости, постоянный темп без ускорения', 'Жизни-сердечки, пропущенные упражнения возвращаются'],
    media: [
      { type: 'img', src: 'farm-play.webp' },
      { type: 'img', src: 'farm-intro.webp' },
      { type: 'img', src: 'farm-pick.webp' },
      { type: 'img', src: 'farm-char.webp' }
    ]
  },
  {
    id: 'planet', title: 'Планета слов', sub: 'Слоговая структура, 2 тип', glyph: 'Сл', tint: 'planet',
    added: '2026-10-10', price: 500, format: 'browser', brand: 'own', is3d: true, artic: false,
    tags: ['3D', 'Слоговая структура'],
    desc: 'Вращайте планету с горами, вулканами и озёрами и находите на ней предметы. Слова трёхсложные из открытых слогов.',
    points: ['Слова 2 типа слоговой структуры', 'Мягкая живописная графика'],
    media: [
      { type: 'img', src: 'planet-play.webp' },
      { type: 'img', src: 'planet-play2.webp' },
      { type: 'img', src: 'planet-play3.webp' },
      { type: 'img', src: 'planet-intro.webp' }
    ]
  },
  {
    id: 'lake', title: 'Лагерь на Лесном озере', sub: 'Звук Л в связной речи', glyph: 'Л', tint: 'lake',
    added: '2026-10-10', price: 700, format: 'browser', brand: 'own', is3d: true, artic: false,
    tags: ['3D', 'Звук Л', 'Связная речь'],
    desc: 'Один день в лагере у озера: от утренней прогулки на лодке до вечернего костра. Звук Л закрепляется в естественной речи, без карточек.',
    points: ['Автоматизация Л в связной речи', 'Сюжет от утра до вечера'],
    media: [
      { type: 'img', src: 'lake-koster.webp' },
      { type: 'img', src: 'lake-lodka.webp' },
      { type: 'img', src: 'lake-ozero.webp' },
      { type: 'img', src: 'lake-lama.webp' },
      { type: 'img', src: 'lake-play.webp' },
      { type: 'img', src: 'lake-intro.webp' }
    ]
  },
  {
    id: 'snow', title: 'Мишка и северное сияние', sub: 'Автоматизация звука Ш', glyph: 'Ш', tint: 'snow',
    added: '2026-10-15', price: 500, format: 'browser', brand: 'own', is3d: true, artic: false,
    tags: ['3D', 'Звук Ш', 'Слова'],
    desc: 'Над зимним лесом переливается северное сияние. Медвежонок Мишка в шапке и шарфе ищет светящиеся картинки, а ребёнок называет каждую вслух. До островов на озере Мишка добирается прыжками по льдинам.',
    points: ['Ш в начале, в середине и в конце слова', '89 слов-картинок, в игре до 20 на выбор', 'Управление стрелками и кнопками на экране'],
    media: [
      { type: 'img', src: 'snow-ozero.webp' },
      { type: 'img', src: 'snow-slova.webp' },
      { type: 'img', src: 'snow-les.webp' },
      { type: 'img', src: 'snow-cover.webp' }
    ]
  },
  {
    id: 'yarmarka', title: 'Ярмарка в Ромашкино', sub: 'Звук Р в связной речи', glyph: 'Р', tint: 'leaf',
    added: '2026-10-18', price: 0, link: 'https://polliafan-prog.github.io/yarmarka-r-v-svyaznoy-rechi/index.html', format: 'browser', brand: 'own', is3d: true, artic: false,
    tags: ['3D', 'Звук Р', 'Связная речь'],
    desc: 'Ребёнок с Ромой идёт на ярмарку за покупками: говорит с продавцами, прогоняет ворону и катается на карусели до вечернего фейерверка. Звук Р закрепляется во фразах, предложениях и рассказе.',
    points: ['3 уровня: фраза, предложение, рассказ', 'Пример фразы для взрослого', 'Только твёрдый Р'],
    media: [
      { type: 'img', src: 'yarmarka-2.webp' },
      { type: 'img', src: 'yarmarka-3.webp' },
      { type: 'img', src: 'yarmarka-5.webp' },
      { type: 'img', src: 'yarmarka-6.webp' },
      { type: 'img', src: 'yarmarka-4.webp' },
      { type: 'img', src: 'yarmarka-1.webp' }
    ]
  },
  {
    id: 'pegas', title: 'Лабиринт с Пегасом', sub: 'Артикуляционная гимнастика', glyph: 'Арт', tint: 'pink',
    price: 250, format: 'browser', brand: 'own', is3d: false, artic: true,
    tags: ['Артикуляция', 'Лабиринт'],
    desc: 'Помогите Пегасу добраться до замка. По пути встречаются упражнения: от простых к сложным. Замок откроется, когда все упражнения выполнены.',
    points: ['22 упражнения, выбирайте любое количество', 'Управление стрелками и кнопками на экране', 'Нежная розовая тема'],
    media: [
      { type: 'video', src: 'vid-pegas.mp4', poster: 'vid-pegas-poster.webp' },
      { type: 'img', src: 'pegas-play.webp' },
      { type: 'img', src: 'pegas-pick.webp' }
    ]
  },
  {
    id: 'race', title: 'Гонки по трассе', sub: 'Артикуляционная гимнастика', glyph: 'Арт', tint: 'blue',
    price: 250, format: 'browser', brand: 'own', is3d: false, artic: true,
    tags: ['Артикуляция', 'Лабиринт'],
    desc: 'Гоночная машинка едет по лабиринту-трассе к финишу и собирает артикуляционные упражнения. Вариант лабиринта в сине-голубой гамме.',
    points: ['Те же 22 упражнения', 'Финиш открывается после всех упражнений'],
    media: [
      { type: 'video', src: 'vid-race.mp4', poster: 'vid-race-poster.webp' },
      { type: 'img', src: 'race-play.webp' },
      { type: 'img', src: 'race-pick.webp' }
    ]
  },
  {
    id: 'yeti', title: 'Йети Волли', sub: 'Артикуляционная гимнастика', glyph: 'Арт', tint: 'snow',
    price: 300, format: 'ppt', brand: 'own', is3d: false, artic: true,
    tags: ['Артикуляция', 'PowerPoint'],
    desc: 'Добродушный йети Волли греется у камина в уютном домике и зовёт ребёнка делать гимнастику. Ребёнок нажимает на упражнения в камине и выполняет их.',
    points: ['Тёплая зимняя история с героем', 'Упражнения появляются по нажатию'],
    media: [
      { type: 'video', src: 'vid-yeti.mp4', poster: 'vid-yeti-poster.webp' },
      { type: 'img', src: 'yeti-2.webp' }
    ]
  },
  {
    id: 'leaves', title: 'Осенний урожай', sub: 'Звук Р в начале слова', glyph: 'Р', tint: 'leaf',
    price: 0, link: 'osenniy-urozhay.html', format: 'browser', brand: 'own', is3d: false, artic: false,
    tags: ['Звук Р', 'Слова'],
    desc: 'С дерева падают листья с картинками. Ребёнок ловит их корзинкой и называет слова со звуком Р в начале.',
    points: ['24 слова с картинками', 'Цель: поймать 20 листьев', 'Три скорости и осенняя музыка'],
    media: [
      { type: 'img', src: 'leaves-play.webp' },
      { type: 'img', src: 'leaves-intro.webp' }
    ]
  },
  {
    id: 'konec-ta', title: 'Конец слова за тобой', sub: 'Слоговая структура, 1 тип, окончание ТА', glyph: 'ТА', tint: 'pink',
    price: 0, link: 'konec-slova-ta.pdf', format: 'sheet', brand: 'own', is3d: false, artic: false,
    tags: ['Слоговая структура', 'Переключаемость'],
    desc: 'Логопед называет начало слова, а ребёнок договаривает окончание ТА: нота, вата, мята, бита, дата, фата. На последнем листе цепочки слов на переключаемость.',
    points: ['3 листа: обложка, карточки и цепочки слов', 'PDF для печати'],
    media: [
      { type: 'img', src: 'konec-2.webp' },
      { type: 'img', src: 'konec-3.webp' },
      { type: 'img', src: 'konec-1.webp' }
    ]
  },
  {
    id: 'ag-sims', title: 'АГ в стиле Sims', sub: 'Артикуляционная гимнастика', glyph: 'Арт', tint: 'blue',
    price: 0, link: 'ag-sims.pptx', format: 'ppt', brand: 'own', is3d: false, artic: true,
    tags: ['Артикуляция', 'PowerPoint'],
    desc: 'Артикуляционная гимнастика в виде компьютерной игры: ребёнок выбирает персонажа, нажимает на кристаллы и выполняет упражнения. Понравится школьникам.',
    points: ['Два персонажа на выбор', 'Подходит для подростков'],
    media: [
      { type: 'video', src: 'vid-sims.mp4', poster: 'vid-sims-poster.webp' },
      { type: 'img', src: 'sims-1.webp' }
    ]
  },
  {
    id: 'koty', title: 'Коты-стикеры', sub: 'Артикуляционная гимнастика + универсальный слайд', glyph: 'Арт', tint: 'cave',
    price: 0, link: 'koty-stikery.pptx', format: 'ppt', brand: 'own', is3d: false, artic: true,
    tags: ['Артикуляция', 'PowerPoint', 'Универсальный слайд'],
    desc: 'Котики-мемы в чате телефона. Ребёнок нажимает на котика, появляется упражнение, а после выполнения оно исчезает. Есть универсальный слайд для любых заданий.',
    points: ['Жми на котика, и появится упражнение', 'Универсальный слайд для своих заданий'],
    media: [
      { type: 'video', src: 'vid-koty.mp4', poster: 'vid-koty-poster.webp' },
      { type: 'img', src: 'koty-1.webp' }
    ]
  },
  {
    id: 'les', title: 'Волшебный лес', sub: 'Артикуляционная гимнастика', glyph: 'Арт', tint: 'planet',
    price: 0, link: 'volshebny-les.ppsx', format: 'ppt', brand: 'logos', is3d: false, artic: true,
    tags: ['Артикуляция', 'PowerPoint'],
    desc: 'Львёнок попал в волшебный лес. Ребёнок нажимает на пузыри, в каждом прячется артикуляционное упражнение.',
    points: ['15 упражнений: заборчик, трубочка, лопатка, иголочка, окошко, часики, качели и другие', 'Нажатие на пузырь открывает упражнение', 'Со звуками'],
    media: [
      { type: 'video', src: 'vid-les.mp4', poster: 'vid-les-poster.webp' },
      { type: 'img', src: 'les-help.webp' }
    ]
  },
  {
    id: 'komnata', title: 'Найди в комнате', sub: 'Артикуляционная гимнастика', glyph: 'Арт', tint: 'farm',
    price: 0, link: 'komnata.ppsx', format: 'ppt', brand: 'logos', is3d: false, artic: true,
    tags: ['Артикуляция', 'PowerPoint'],
    desc: 'Уютная комната, в которой спрятаны предметы. Ребёнок находит предмет, он увеличивается и переезжает на плашку поиска, а затем выполняется упражнение.',
    points: ['14 упражнений: заборчик, трубочка, лопатка, иголочка, пончик, часики и другие', 'Поиск предметов развивает внимание'],
    media: [
      { type: 'video', src: 'vid-komnata.mp4', poster: 'vid-komnata-poster.webp' },
      { type: 'img', src: 'komnata-help.webp' }
    ]
  },
  {
    id: 'antilopa', title: 'Антилопа увидела', sub: 'Автоматизация Л в предложении', glyph: 'Л', tint: 'lake',
    price: 0, link: 'antilopa.ppsx', format: 'ppt', brand: 'logos', is3d: false, artic: false,
    tags: ['Звук Л', 'Предложения', 'PowerPoint'],
    desc: 'Антилопа гуляет у реки и видит разные предметы. Ребёнок составляет предложения по образцу «Антилопа увидела…».',
    points: ['Словарь: лопата, ладонь, лошадь, лупа, пчела, молоко, голубь, малыш, стул', 'Управление кликом мышки или пробелом'],
    media: [
      { type: 'img', src: 'antilopa-cover.webp' },
      { type: 'img', src: 'antilopa-help.webp' }
    ]
  },
  {
    id: 'lev-diff', title: 'Лев в волшебном лесу', sub: 'Дифференциация Ль – Й в словах', glyph: 'Ль', tint: 'cave',
    price: 0, link: 'lev-diff-l-j.ppsx', format: 'ppt', brand: 'logos', is3d: false, artic: false,
    tags: ['Звук Ль', 'Звук Й', 'Дифференциация', 'PowerPoint'],
    desc: 'Львёнок гуляет по волшебному лесу и передвигается по пузырям. В каждом новом пузыре картинка, а ребёнок различает в словах звуки Ль и Й.',
    points: ['Словарь: лебедь, яблоко, пальма, ёж, клюква, яхта, лимон, яма, олень, юла, лента, юрта, салют, ёлка, пульт', 'Нажатие: клик по экрану или пробел'],
    media: [
      { type: 'video', src: 'vid-lev-diff.mp4', poster: 'vid-lev-diff-poster.webp' },
      { type: 'img', src: 'lev-diff-1.webp' },
      { type: 'img', src: 'lev-diff-3.webp' }
    ]
  },
  {
    id: 'lev-pred', title: 'Лев в необычной комнате', sub: 'Автоматизация Ль в предложении', glyph: 'Ль', tint: 'blue',
    price: 0, link: 'lev-predlozheniya.ppsx', format: 'ppt', brand: 'logos', is3d: false, artic: false,
    tags: ['Звук Ль', 'Предложения', 'PowerPoint'],
    desc: 'Львёнок нашёл необычную комнату. С каждым нажатием появляется предмет, а ребёнок составляет предложение «Лев глядел на…».',
    points: ['Словарь: лейка, лестница, лиса, лист, лифт, лес, билет, качели, улей, зелье, колье, альбом, ель, медаль, костыль, соль, фасоль, моль'],
    media: [
      { type: 'img', src: 'lev-pred-1.webp' },
      { type: 'img', src: 'lev-pred-2.webp' },
      { type: 'img', src: 'lev-pred-3.webp' }
    ]
  },
  {
    id: 'samolet', title: 'Самолёт летит на пляж', sub: 'Бродилка, звук Ль', glyph: 'Ль', tint: 'lake',
    price: 0, link: 'samolet-plyazh.ppsx', format: 'ppt', brand: 'logos', is3d: false, artic: false,
    tags: ['Звук Ль', 'Бродилка', 'PowerPoint'],
    desc: 'Бродилка: самолёт взлетает и по клеточкам летит на пляж. На каждой клеточке ребёнок называет слово.',
    points: ['Словарь: шляпа, след, пляж, билет, шлёпки, жилет, лежак, пальма, малина, купальник, дельфин, коктейль, апельсин'],
    media: [
      { type: 'img', src: 'plyazh-1.webp' },
      { type: 'img', src: 'plyazh-2.webp' }
    ]
  },
  {
    id: 'myshka', title: 'Мышь идёт к сыру', sub: 'Бродилка, звук Ш', glyph: 'Ш', tint: 'leaf',
    price: 0, link: 'myshka-syr.ppsx', format: 'ppt', brand: 'logos', is3d: false, artic: false,
    tags: ['Звук Ш', 'Бродилка', 'PowerPoint'],
    desc: 'Бродилка: мышка шагает по дорожке к большому куску сыра, а ребёнок называет слова со звуком Ш.',
    points: ['Словарь: шина, шипы, шайба, шахматы, шампунь, шумовка, шиповник, петушок, каша, кувшинка, окошко, чашка, кошка, башня, подушка, мошка, душ, ёж и другие'],
    media: [
      { type: 'video', src: 'vid-myshka.mp4', poster: 'vid-myshka-poster.webp' },
      { type: 'img', src: 'myshka-2.webp' }
    ]
  },
  {
    id: 'lama', title: 'Лама идёт на луг', sub: 'Бродилка, дифференциация Л – В', glyph: 'Л', tint: 'farm',
    price: 0, link: 'lama-lug.ppsx', format: 'ppt', brand: 'logos', is3d: false, artic: false,
    tags: ['Звук Л', 'Звук В', 'Дифференциация', 'Бродилка', 'PowerPoint'],
    desc: 'Бродилка: лама идёт по дорожке на цветущий луг, а ребёнок называет картинки и различает в словах звуки Л и В.',
    points: ['Словарь: лак, вата, глаза, звук, лук, класс, квас, лапа, вода, лыжи, сова, глобус, корова, голова, лаванда, волк, волны, самосвал, вулкан, лаваш, булавка, овал, акваланг'],
    media: [
      { type: 'img', src: 'lama-1.webp' },
      { type: 'img', src: 'lama-2.webp' }
    ]
  },
  {
    id: 'kotenok', title: 'Котёнок обустраивает комнату', sub: 'Автоматизация К в предложении', glyph: 'К', tint: 'pink',
    price: 0, link: 'kotenok-k.ppsx', format: 'ppt', brand: 'logos', is3d: false, artic: false,
    tags: ['Звук К', 'Предложения', 'PowerPoint'],
    desc: 'Котёнок просит помочь обустроить комнату. С каждым нажатием появляется новый предмет, а ребёнок говорит «У кота в комнате…».',
    points: ['Словарь: ковёр, зеркало, картина, полка, светильник, банка, кресло, какао, клубок, книги, компьютер, конверт, коробка, открытка, свечка, кактус'],
    media: [
      { type: 'img', src: 'kotenok-1.webp' },
      { type: 'img', src: 'kotenok-2.webp' },
      { type: 'img', src: 'kotenok-3.webp' }
    ]
  },
  {
    id: 'memori', title: 'Мемори: морские обитатели', sub: 'Найди пару, звук Р', glyph: 'Мм', tint: 'blue',
    price: 0, link: 'memori-more.ppsx', format: 'ppt', brand: 'logos', is3d: false, artic: false,
    tags: ['Внимание', 'Память', 'Звук Р', 'PowerPoint'], topic: 'mind',
    desc: 'Игра на память: ребёнок открывает по две карточки и ищет одинаковые пары, называя картинки по образцу «две ракушки». За найденную пару появляется салют.',
    points: ['Словарь: краб, водоросли, морской конёк, кораллы, рыба, ракушка'],
    media: [
      { type: 'img', src: 'memori-1.webp' },
      { type: 'img', src: 'memori-2.webp' }
    ]
  },  {
    id: 'memori-l', title: 'Мемори: звук Л', sub: 'Найди пару, звук Л', glyph: 'Л', tint: 'cave',
    price: 0, link: 'memori-l.ppsx', format: 'ppt', brand: 'logos', is3d: false, artic: false,
    tags: ['Внимание', 'Память', 'Звук Л', 'PowerPoint'], topic: 'mind',
    desc: 'Игра на память: ребёнок открывает по две карточки и ищет пары, называя картинки по образцу «две ламы». За найденную пару появляется салют.',
    points: ['Словарь: лама, акула, лодка, палатка, слон, лампа'],
    media: [
      { type: 'img', src: 'memori-l-1.webp' },
      { type: 'img', src: 'memori-l-2.webp' }
    ]
  },

  {
    id: 'slon', title: 'Слон на Северном полюсе', sub: 'Автоматизация звука С', glyph: 'С', tint: 'snow',
    price: 0, link: 'slon-severny-polyus-s.ppsx', format: 'ppt', brand: 'logos', is3d: false, artic: false,
    tags: ['Звук С', 'Комплексное занятие', 'PowerPoint'],
    desc: 'Большое занятие на 21 слайд: слон отправляется на Северный полюс. По пути ребёнок проходит слоги, считает предметы, делает пальчиковую гимнастику, ищет картинки и разгадывает небылицы. На каждом слайде есть подсказка для логопеда.',
    points: ['Слоги, слова, счёт до пяти, пальчиковая гимнастика', 'Небылицы и рассказ по серии картинок', '21 слайд'],
    media: [
      { type: 'img', src: 'slon-1.webp' },
      { type: 'img', src: 'slon-2.webp' },
      { type: 'img', src: 'slon-3.webp' },
      { type: 'img', src: 'slon-4.webp' },
      { type: 'img', src: 'slon-5.webp' }
    ]
  },
  {
    id: 'rasskaz', title: 'Составь рассказ', sub: 'Связная речь по серии картинок', glyph: 'Р', tint: 'farm',
    price: 0, link: 'sostav-rasskaz.ppsx', format: 'ppt', brand: 'logos', is3d: false, artic: false,
    tags: ['Связная речь', 'Рассказ', 'PowerPoint'],
    desc: 'Шесть картинок про девочку и её собаку на прогулке в городе. Ребёнок составляет рассказ по серии сюжетных картинок.',
    points: ['6 сюжетных картинок'],
    media: [
      { type: 'video', src: 'vid-rasskaz.mp4', poster: 'vid-rasskaz-poster.webp' },
      { type: 'img', src: 'rasskaz-1.webp' }
    ]
  },
  {
    id: 'nebylicy-les', title: 'Небылицы: в лесу', sub: 'Связная речь, внимание', glyph: '?', tint: 'planet',
    price: 0, link: 'nebylicy-les.ppsx', format: 'ppt', brand: 'logos', is3d: false, artic: false,
    tags: ['Небылицы', 'Связная речь', 'PowerPoint'],
    desc: 'Ребёнок ищет, что на картинке не так: дельфин в лесу, лодочник в горах, снег летом. Логопед нажимает на найденный предмет, и он исчезает или меняется.',
    points: ['9 небылиц', 'Объяснение «почему так не бывает»'],
    media: [
      { type: 'img', src: 'nebylicy-les-1.webp' },
      { type: 'img', src: 'nebylicy-les-2.webp' }
    ]
  },
  {
    id: 'nebylicy-leto', title: 'Небылицы: летом у реки', sub: 'Связная речь, внимание', glyph: '?', tint: 'lake',
    price: 0, link: 'nebylicy-leto.ppsx', format: 'ppt', brand: 'logos', is3d: false, artic: false,
    tags: ['Небылицы', 'Связная речь', 'PowerPoint'],
    desc: 'Летний пейзаж у реки, где всё перепутано: книги растут на деревьях, машины летают, по реке катаются на коньках. Найденные небылицы исчезают по нажатию.',
    points: ['8 небылиц'],
    media: [
      { type: 'img', src: 'nebylicy-leto-1.webp' },
      { type: 'img', src: 'nebylicy-leto-2.webp' }
    ]
  },
  {
    id: 'kot-slogi', title: 'Котёнок идёт по слогам', sub: 'Бродилка, звук К в слогах', glyph: 'К', tint: 'leaf',
    price: 0, link: 'kot-brodilka-slogi.ppsx', format: 'ppt', brand: 'logos', is3d: false, artic: false,
    tags: ['Звук К', 'Слоги', 'Бродилка', 'PowerPoint'],
    desc: 'Серия из трёх бродилок: котёнок идёт по клеточкам к клубку, окуню и молоку. Ребёнок проговаривает прямые, обратные слоги и слоги со стечением: КА–КЫ, АК–ЫК, КВА–КВЫ.',
    points: ['3 бродилки', 'Прямые, обратные слоги и стечения'],
    media: [
      { type: 'img', src: 'kot-slogi-1.webp' },
      { type: 'img', src: 'kot-slogi-2.webp' },
      { type: 'img', src: 'kot-slogi-3.webp' },
      { type: 'img', src: 'kot-slogi-4.webp' }
    ]
  },
  {
    id: 'kot-slova', title: 'Котёнок идёт по словам', sub: 'Бродилка, звук К в словах', glyph: 'К', tint: 'farm',
    price: 0, link: 'kot-brodilka-slova.ppsx', format: 'ppt', brand: 'logos', is3d: false, artic: false,
    tags: ['Звук К', 'Слова', 'Бродилка', 'PowerPoint'],
    desc: 'Серия из двух бродилок: котёнок идёт к лежанке и к миске, а ребёнок называет слова со звуком К на каждой клеточке.',
    points: ['2 бродилки'],
    media: [
      { type: 'img', src: 'kot-slova-1.webp' },
      { type: 'img', src: 'kot-slova-2.webp' },
      { type: 'img', src: 'kot-slova-3.webp' }
    ]
  },
  {
    id: 'sasha', title: 'Саша с ярмарки', sub: 'Бродилка, дифференциация С – Ш', glyph: 'С/Ш', tint: 'snow',
    price: 0, link: 'sasha-yarmarka.ppsx', format: 'ppt', brand: 'logos', is3d: false, artic: false,
    tags: ['Звук С', 'Звук Ш', 'Дифференциация', 'Бродилка', 'PowerPoint'],
    desc: 'Саша несёт домой с ярмарки новогоднюю ёлку. С каждым нажатием он шагает по клеточкам, а ребёнок называет слова со звуками С и Ш.',
    points: ['Словарь: сова, мышь, салют, мешок, сани, шишка, маска, шапка, носок, шарф, снеговик, сундук, шуба, часы, снежинка, мишка, сапоги и другие'],
    media: [
      { type: 'img', src: 'sasha-yarmarka-1.webp' },
      { type: 'img', src: 'sasha-yarmarka-2.webp' }
    ]
  },
  {
    id: 'ryad', title: 'Продолжи ряд', sub: 'Внимание, логика', glyph: '…', tint: 'snow',
    price: 0, link: 'prodolzhi-ryad.ppsx', format: 'ppt', brand: 'logos', is3d: false, artic: false,
    tags: ['Внимание', 'Логика', 'PowerPoint'],
    desc: 'Новогодние ряды картинок: ребёнок находит закономерность и называет, что будет дальше. Три слайда с разными героями.',
    points: ['3 слайда'],
    media: [
      { type: 'img', src: 'prodolzhi-ryad-1.webp' },
      { type: 'img', src: 'prodolzhi-ryad-2.webp' },
      { type: 'img', src: 'prodolzhi-ryad-3.webp' }
    ]
  },
  {
    id: 'otl-kosmos', title: 'Найди отличия: космос', sub: 'Внимание', glyph: '≠', tint: 'cave',
    price: 0, link: 'otlichiya-kosmos.ppsx', format: 'ppt', brand: 'logos', is3d: false, artic: false,
    tags: ['Внимание', 'Отличия', 'PowerPoint'],
    desc: 'Две космические картинки с космонавтом и ракетой. Когда ребёнок находит отличие, логопед нажимает на предмет в левой панели, и нужное место подсвечивается.',
    points: [],
    media: [
      { type: 'img', src: 'otlichiya-kosmos-1.webp' },
      { type: 'img', src: 'otlichiya-kosmos-2.webp' }
    ]
  },
  {
    id: 'otl-komnata', title: 'Найди отличия: комната', sub: 'Внимание', glyph: '≠', tint: 'pink',
    price: 0, link: 'otlichiya-komnata.ppsx', format: 'ppt', brand: 'logos', is3d: false, artic: false,
    tags: ['Внимание', 'Отличия', 'PowerPoint'],
    desc: 'Девушка с ноутбуком в уютной комнате. Ребёнок ищет отличия и называет предметы, а логопед подсвечивает найденное.',
    points: ['Словарь: лампа, ковёр, девушка, кошка, мандарин, груша, бургер, кофе, картина, цветок'],
    media: [
      { type: 'img', src: 'otlichiya-komnata-1.webp' },
      { type: 'img', src: 'otlichiya-komnata-2.webp' }
    ]
  },
  {
    id: 'nemo', title: 'Немо: звук Н', sub: 'Автоматизация Н в слогах и словах', glyph: 'Н', tint: 'blue',
    price: 0, link: 'nemo-zvuk-n.ppsx', format: 'ppt', brand: 'logos', is3d: false, artic: false,
    tags: ['Звук Н', 'Слоги', 'Бродилка', 'PowerPoint'],
    desc: 'Рыбка Немо просит помочь добраться до друзей. Ребёнок ходит по клеточкам и проговаривает прямые, обратные слоги, слоги со стечением, а на последнем слайде называет слова.',
    points: ['Слоги: НА–НЫ, АН–ЫН, НТА, МНА, СНА, ЗНА', 'Словарь: носки, ночь, носорог, бананы, малина, ванна, картина, окно, батон, ворон, слон, кран', '5 слайдов'],
    media: [
      { type: 'video', src: 'vid-nemo.mp4', poster: 'vid-nemo-poster.webp' },
      { type: 'img', src: 'nemo-1.webp' },
      { type: 'img', src: 'nemo-3.webp' }
    ]
  },
  {
    id: 'ronald', title: 'Олень Рональд', sub: 'Автоматизация Р – Рь', glyph: 'Р', tint: 'snow',
    price: 0, link: 'olen-ronald-r.ppsx', format: 'ppt', brand: 'logos', is3d: false, artic: false,
    tags: ['Звук Р', 'Звук Рь', 'Новый год', 'PowerPoint'],
    desc: 'Новогодний олень Рональд собирает картинки на рогах. После каждого нажатия появляется новая картинка, а когда все слова названы, ёлка загорается красивой анимацией с музыкой.',
    points: ['Словарь: креветки, варежка, подарок, шары, морковь, рак, кукуруза, торт, картошка, огурец, икра, корица, пряник, сыр, балерина, гирлянда'],
    media: [
      { type: 'img', src: 'olen-ronald-1.webp' },
      { type: 'img', src: 'olen-ronald-2.webp' }
    ]
  },
  {
    id: 'otl-zima', title: 'Найди отличия: зима', sub: 'Внимание, звук С', glyph: '≠', tint: 'snow',
    price: 0, link: 'otlichiya-zima.ppsx', format: 'ppt', brand: 'logos', is3d: false, artic: false,
    tags: ['Внимание', 'Отличия', 'Звук С', 'PowerPoint'],
    desc: 'Зимняя прогулка: собака на санках и снеговик. Ребёнок находит отличия и называет предметы, а логопед подсвечивает найденное.',
    points: ['Словарь: сова, снежинка, снег, сани, след, сапог, сугроб, носок, компас'],
    media: [
      { type: 'img', src: 'otlichiya-zima-1.webp' },
      { type: 'img', src: 'otlichiya-zima-2.webp' }
    ]
  },
  {
    id: 'piccza', title: 'Готовим пиццу', sub: 'Универсальный слайд', glyph: 'Уни', tint: 'leaf',
    price: 0, link: 'piccza.ppsx', format: 'ppt', brand: 'logos', is3d: false, artic: true,
    tags: ['Универсальный слайд', 'Артикуляция', 'PowerPoint'],
    desc: 'На столе готовится пицца, и каждое нажатие добавляет новое действие. Подходит для любой цели: перед каждым шагом можно выполнить упражнение или проговорить слово.',
    points: ['Артикуляционная гимнастика', 'Автоматизация любого звука', 'Каждое нажатие — одно действие'],
    media: [
      { type: 'img', src: 'piccza-1.webp' },
      { type: 'img', src: 'piccza-2.webp' }
    ]
  },

  {
    id: 'list-zhiraf', title: 'У жирафа на торте…', sub: 'Звук Р во фразах', glyph: 'Р', tint: 'leaf',
    price: 0, link: 'list-zhiraf.pdf', format: 'sheet', brand: 'logos', is3d: false, artic: false,
    tags: ['Звук Р', 'Фразы'],
    desc: 'Жираф приготовил большой торт. Ребёнок называет, что лежит на торте, и строит фразу «У жирафа на торте…».',
    points: ['PDF для печати'],
    media: [
      { type: 'img', src: 'list-zhiraf-1.webp' }
    ]
  },
  {
    id: 'list-elka', title: 'Новогодняя ёлка', sub: 'Звук Р в словах', glyph: 'Р', tint: 'farm',
    price: 0, link: 'list-elka.pdf', format: 'sheet', brand: 'logos', is3d: false, artic: false,
    tags: ['Звук Р', 'Новый год'],
    desc: 'Ёлка с игрушками-картинками. Ребёнок называет каждую игрушку со звуком Р.',
    points: ['PDF для печати'],
    media: [
      { type: 'img', src: 'list-elka-1.webp' }
    ]
  },
  {
    id: 'list-roza', title: 'Роза думает…', sub: 'Звук Р во фразах + 24 карточки', glyph: 'Р', tint: 'pink',
    price: 0, link: 'list-roza.pdf', format: 'sheet', brand: 'logos', is3d: false, artic: false,
    tags: ['Звук Р', 'Фразы', 'Карточки'],
    desc: 'Девочка Роза мечтает на лугу. Ребёнок выбирает карточку и строит фразу «Роза думает о…». В комплекте 24 карточки на звук Р в начале слова: радуга, ракета, рак, ранец и другие.',
    points: ['Сюжетный лист и 4 листа карточек', 'PDF для печати'],
    media: [
      { type: 'img', src: 'list-roza-1.webp' },
      { type: 'img', src: 'list-kartochki-r-1.webp' },
      { type: 'img', src: 'list-kartochki-r-2.webp' }
    ]
  },
  {
    id: 'list-oblaka', title: 'На что похожи облака', sub: 'Звуки Л, Р, Ш', glyph: 'Об', tint: 'blue',
    price: 0, link: 'list-oblaka.pdf', format: 'sheet', brand: 'logos', is3d: false, artic: false,
    tags: ['Звук Л', 'Звук Р', 'Звук Ш'],
    desc: 'Облака в форме предметов. Ребёнок угадывает, на что похоже каждое облако, и называет слово.',
    points: ['3 листа', 'PDF для печати'],
    media: [
      { type: 'img', src: 'list-oblaka-1.webp' },
      { type: 'img', src: 'list-oblaka-2.webp' },
      { type: 'img', src: 'list-oblaka-3.webp' }
    ]
  },
  {
    id: 'list-luchia', title: 'У Лючии в чемодане…', sub: 'Звук Ч во фразах', glyph: 'Ч', tint: 'pink',
    price: 0, link: 'list-luchia.pdf', format: 'sheet', brand: 'logos', is3d: false, artic: false,
    tags: ['Звук Ч', 'Фразы'],
    desc: 'Лючия собирает чемодан. Ребёнок перечисляет, что она кладёт: ключ, свеча, часы, очки, чайник и другие предметы.',
    points: ['PDF для печати'],
    media: [
      { type: 'img', src: 'list-luchia-1.webp' }
    ]
  },
  {
    id: 'list-cyplenok', title: 'Цыплёнок видит…', sub: 'Звук Ц во фразах', glyph: 'Ц', tint: 'leaf',
    price: 0, link: 'list-cyplenok.pdf', format: 'sheet', brand: 'logos', is3d: false, artic: false,
    tags: ['Звук Ц', 'Фразы', 'Карточки'],
    desc: 'Цыплёнок гуляет по ферме. Ребёнок выбирает карточку и строит фразу «Цыплёнок видит…».',
    points: ['Сюжетный лист и 3 листа карточек', 'PDF для печати'],
    media: [
      { type: 'img', src: 'list-cyplenok-1.webp' },
      { type: 'img', src: 'list-cyplenok-2.webp' }
    ]
  },
  {
    id: 'list-korol', title: 'Маленький король', sub: 'Артикуляционная гимнастика', glyph: 'Арт', tint: 'snow',
    price: 0, link: 'list-korol.pdf', format: 'sheet', brand: 'logos', is3d: false, artic: true,
    tags: ['Артикуляция'],
    desc: 'Маленький король идёт к замку по дорожке из упражнений. Ребёнок выполняет артикуляционное упражнение на каждой клетке.',
    points: ['PDF для печати'],
    media: [
      { type: 'img', src: 'list-korol-1.webp' }
    ]
  },
  {
    id: 'list-feya', title: 'Фея', sub: 'Артикуляционная гимнастика', glyph: 'Арт', tint: 'cave',
    price: 0, link: 'list-feya.pdf', format: 'sheet', brand: 'logos', is3d: false, artic: true,
    tags: ['Артикуляция'],
    desc: 'Фея ведёт ребёнка по дорожке из артикуляционных упражнений.',
    points: ['PDF для печати'],
    media: [
      { type: 'img', src: 'list-feya-1.webp' }
    ]
  },
  {
    id: 'list-odinakovoe', title: 'Найди два одинаковых', sub: 'Внимание', glyph: '=', tint: 'snow',
    price: 0, link: 'list-odinakovoe.pdf', format: 'sheet', brand: 'logos', is3d: false, artic: false,
    tags: ['Внимание', 'Новый год'],
    desc: 'Новогодние предметы. Ребёнок ищет два одинаковых и называет их.',
    points: ['PDF для печати'],
    media: [
      { type: 'img', src: 'list-odinakovoe-1.webp' }
    ]
  },
  {
    id: 'list-otlichiya', title: 'Найди отличия: море', sub: 'Внимание', glyph: '≠', tint: 'lake',
    price: 0, link: 'list-otlichiya.pdf', format: 'sheet', brand: 'logos', is3d: false, artic: false,
    tags: ['Внимание'],
    desc: 'Две картинки с капитаном на корабле. Ребёнок ищет отличия и рассказывает о них.',
    points: ['PDF для печати'],
    media: [
      { type: 'img', src: 'list-otlichiya-1.webp' }
    ]
  },
  {
    id: 'logos-diagnostika', title: 'Диагностика с Йодой', sub: 'Комплексное обследование речи', glyph: 'Д', tint: 'farm',
    price: 2000, format: 'ppt', brand: 'logos', is3d: false, artic: false,
    tags: ['Диагностика', 'PowerPoint'],
    desc: 'Путешествие по карте, где каждая остановка проверяет одну сторону речи. 30 слайдов с подсказками для логопеда на каждом.',
    points: ['30 слайдов-заданий с подсказками для логопеда', 'Звукопроизношение, лексика, грамматика, слоговая структура', 'Связная речь, фонематический слух, чтение, предлоги'],
    media: [
      { type: 'video', src: 'vid-diagnostika.mp4', poster: 'vid-diagnostika-poster.webp' },
      { type: 'img', src: 'logos-diagnostika-map.webp' },
      { type: 'img', src: 'logos-diag-sod.webp' },
      { type: 'img', src: 'logos-diag-leksika.webp' },
      { type: 'img', src: 'logos-diag-svyaznaya.webp' },
      { type: 'img', src: 'logos-diag-klassif.webp' },
      { type: 'img', src: 'logos-diag-chtenie.webp' },
      { type: 'img', src: 'logos-diag-slog.webp' }
    ]
  },
  {
    id: 'logos-sad', title: 'Яблоневый сад', sub: 'Автоматизация Ш в слогах', glyph: 'Ш', tint: 'farm',
    price: 100, format: 'ppt', brand: 'logos', is3d: false, artic: false,
    tags: ['Звук Ш', 'Слоги', 'PowerPoint'],
    desc: 'В саду с яблоней спрятаны яблоки и груши со слогами ША и ШО. Ребёнок находит их и проговаривает слоги.',
    points: [],
    media: [
      { type: 'video', src: 'logos-sad.mp4', poster: 'logos-sad-poster.webp' }
    ]
  },
  {
    id: 'logos-koncert', title: 'Концерт', sub: 'Автоматизация Л в слогах', glyph: 'Л', tint: 'cave',
    price: 100, format: 'ppt', brand: 'logos', is3d: false, artic: false,
    tags: ['Звук Л', 'Слоги', 'PowerPoint'],
    desc: 'Сцена с музыкальными инструментами. Ребёнок ищет ноты со слогами ЛА и ЛО и пропевает их.',
    points: [],
    media: [
      { type: 'video', src: 'logos-koncert.mp4', poster: 'logos-koncert-poster.webp' }
    ]
  },
  {
    id: 'logos-snegovik', title: 'Снеговик Сэм', sub: 'Автоматизация звука С', glyph: 'С', tint: 'snow',
    price: 200, format: 'ppt', brand: 'logos', is3d: false, artic: false,
    tags: ['Звук С', 'Слова', 'PowerPoint'],
    desc: 'Игра-ходилка: снеговик Сэм идёт по дорожке, а ребёнок называет картинки со звуком С.',
    points: [],
    media: [
      { type: 'video', src: 'logos-snegovik.mp4', poster: 'logos-snegovik-poster.webp' }
    ]
  },
  {
    id: 'logos-predlogi', title: 'Предлоги', sub: 'на, за, перед, в, под', glyph: 'Пр', tint: 'leaf',
    price: 250, format: 'ppt', brand: 'logos', is3d: false, artic: false,
    tags: ['Предлоги', 'Грамматика', 'PowerPoint'],
    desc: 'Уютная комната, где предметы меняют место. Ребёнок отвечает, где находится предмет, и учится использовать предлоги.',
    points: [],
    media: [
      { type: 'video', src: 'logos-predlogi.mp4', poster: 'logos-predlogi-poster.webp' }
    ]
  },
  {
    id: 'logos-more', title: 'Подводный мир', sub: 'Артикуляционная гимнастика', glyph: 'Арт', tint: 'blue',
    price: 200, format: 'ppt', brand: 'logos', is3d: false, artic: true,
    tags: ['Артикуляция', 'PowerPoint'],
    desc: 'Русалочка и её друг плавают среди пузырей. В каждом пузыре прячется артикуляционное упражнение.',
    points: ['Заборчик, трубочка, окошко, месим тесто, лопатка, иголочка, часы, чистим зубки, горка, конфетка'],
    media: [
      { type: 'video', src: 'logos-more.mp4', poster: 'logos-more-poster.webp' }
    ]
  },
  {
    id: 'logos-peshchera', title: 'Пещера самоцветов', sub: 'Артикуляционная гимнастика', glyph: 'Арт', tint: 'cave',
    price: 200, format: 'ppt', brand: 'logos', is3d: false, artic: true,
    tags: ['Артикуляция', 'PowerPoint'],
    desc: 'Юный исследователь в пещере с волшебными камнями. Ребёнок нажимает на камень, и появляется упражнение.',
    points: ['Заборчик, трубочка, окошко, месим тесто, лопатка, иголочка, часы, чистим зубки, маляр, чашечка, лошадка, грибочек'],
    media: [
      { type: 'video', src: 'logos-peshchera.mp4', poster: 'logos-peshchera-poster.webp' }
    ]
  },
  {
    id: 'logos-feya', title: 'Фея и капли дождя', sub: 'Артикуляционная гимнастика', glyph: 'Арт', tint: 'planet',
    price: 300, format: 'browser', brand: 'logos', is3d: false, artic: true,
    tags: ['Артикуляция'],
    desc: 'Лесная фея сидит на листе под дождём. В каждой капле прячется упражнение.',
    points: [],
    media: [
      { type: 'img', src: 'logos-feya-1.webp' }
    ]
  },
  {
    id: 'logos-memo', title: 'Мемо: найди пару', sub: 'Артикуляционная гимнастика, найди пару', glyph: 'Мм', tint: 'farm',
    price: 300, format: 'browser', brand: 'logos', is3d: false, artic: true,
    tags: ['Артикуляция', 'Память'],
    desc: 'Мемо с жирафами: на каждой карточке жираф показывает артикуляционное упражнение. Ребёнок открывает карточки, ищет пары и выполняет упражнение с найденной картинки.',
    points: [],
    media: [
      { type: 'img', src: 'logos-memo-1.webp' }
    ]
  }
];
