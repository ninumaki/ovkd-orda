export type Language = 'kz' | 'ru'

export const LANGUAGES: Record<Language, string> = {
  kz: 'Қазақ',
  ru: 'Русский'
}

// Translations embedded directly
export const TRANSLATIONS = {
  kz: {
    common: {
      back: "Артқа",
      more: "Толығырақ",
      noData: "Деректер жоқ"
    },
    header: {
      topLinks: {
        patients: "Науқастарға",
        usefulInfo: "Пайдалы ақпарат",
        compliance: "Комплаенс қызметы"
      },
      searchPlaceholder: "Сайттан іздеу...",
      callCenter: "CALL-ЦЕНТР",
      nav: {
        homeBtn: "БАСТЫ БЕТ",
        aboutBtn: "МЕКЕМЕ ТУРАЛЫ",
        patientsBtn: "ЕМДЕЛУШІЛЕРГЕ",
        specialistsBtn: "МАМАНДАРҒА",
        boardBtn: "БАЙҚАУШЫ КЕҢЕС",
        servicesBtn: "ҚЫЗМЕТТЕР",
        newsBtn: "ХАБАРЛАНДЫРУЛАР",
        contactBtn: "БАЙЛАНЫС"
      },
      about: {
        financialReport: "Қызылорда облысының денсаулық сақтау басқармасының Қызылорда облыстық тері-венерология диспансері шаруашылық жүргізу құқығындағы мемлекеттік коммуналдық кәсіпорнның 2024 жылдың І жартыжылдық қаржылық есебі",
        auditServices: "Ішкі аудит және емделушіге қолдау көрсету қызметтері",
        quarterlyReport: "2024 жылдын 1 тоқсанының қаржылық есебі",
        complianceService: "Комплаенс қызметы",
        priceList: "Баға прейскуранты",
        history: "Мекеме тарихы",
        staff: "Біздің қызметкерлер"
      },
      patientsMenu: {
        prices: "Бағалар тізімі",
        memo: "Науқастарға арналған жадынама",
        schedule: "Жұмыс кестесі"
      },
      specialists: {
        legal: "Заңнамалық база",
        info: "Пайдалы ақпарат",
        articles: "Статьялар",
        more: "Толығырақ"
      }
    },
    footer: {
      address: "Мекенжайы",
      phone: "Телефон",
      email: "Электрондық пошта",
      workingHours: "Жұмыс уақыты"
    },
    pages: {
      news: {
        title: "Хабарландырулар",
        subtitle: "Соңғы жаңалықтар мен хабарландырулар",
        dbError: "Дерекқор орнатылмаған",
        dbErrorDesc: "Хабарландырулар жүйесін пайдалану үшін дерекқорды орнату керек",
        noNews: "Әзірше хабарландырулар жоқ"
      },
      about: {
        chiefDoctor: "Бас дәрігер",
        institutionHistory: "Мекеме тарихы",
        director: "Әмір Нұрлан Әмірұлы",
        directorTitle: "Қызылорда облыстық тері-венерология диспансерінің бас дәрігері",
        backToInstitution: "Мекемеге оралу"
      },
      patients: {
        title: "Емделушілерге",
        whatIs: "Бұл не?",
        memo: {
          title: "Науқастарға арналған жадынама",
          backToPatients: "Емделушілерге қайта оралу",
          section1: {
            title: "Жоспарлы стационарлық емдеуге жатқызу тәртібі",
            subtitle: "(ҚР Денсаулық Сақтау және Әлеуметтік Даму министерлігінің РК 29 қыркүйектегі 2015 жылғы №761 \"Стационарлық көмек көрсету ережесін бекіту туралы\" заңы)"
          },
          section2: {
            title: "АУРУХАНАҒА ЖАТҚЫЗУ ТӘРТІБІ",
            subsectionTitle: "Жоспарлы емдеуге жатқызу үшін:"
          },
          section3: {
            title: "Ауруханаға жоспарлы емдеуге жатқызу кезінде болуы тиіс құжаттар",
            warning: "Бұл ауруханаға жатқызу құжаттар пакеті толық болмаған жағдайда аурухана науқасты емдеуге жатқызудан бас тартуға құқылы!!!"
          },
          section4: {
            title: "Ауруханадағы көмек көрсету тәртібі"
          },
          note: {
            title: "Ескертпе:",
            content: "Тегін медициналық көмектің кепілді көлемі (ТМККК) аясында қызметтер тегін көрсетілуі тиіс."
          }
        },
        prices: {
          title: "Бағалар тізімі",
          downloadFile: "Файлды жүктеу:",
          downloadButton: "Бағалар тізімі 2025.pdf",
          fileSize: "[1.51 Mb]",
          downloadInfo: "PDF құжатын жүктеу үшін жоғарыдағы сілтемеге басыңыз.",
          downloadInfo2: "Файл сіздің құрылғысына сохранялады.",
          infoTitle: "Ақпарат",
          infoDescription: "Осы құжатта Қызылорда облыстық тері-венерология диспансерінде көрсетілетін барлық медициналық қызметтердің толық бағалары берілген.",
          servicesList: {
            outpatient: "Амбулаторлық-емханалық қызметтер",
            consultations: "Дәрігер консультациялары",
            physiotherapy: "Физиотерапиялық емдеу",
            laboratory: "Зертханалық зерттеулер",
            dermatocosmetology: "Дерматокосметологиялық қызметтер",
            inpatient: "Стационарлық қызметтер"
          }
        },
        workSchedule: {
          title: "Жұмыс кестесі",
          scheduleTitle: "Жұмыс кестесі:",
          lunchBreak: "Түскі үзіліс 13.00-14.00",
          documentsTitle: "Дәрігерге қаралу үшін керек құжаттар:",
          backToPatients: "Емделушілерге қайта оралу"
        },
        memoLink: "📋 Науқастарға арналған жадынама",
        memoLinkDesc: "Жоспарлы стационарлық емдеуге жатқызу тәртібі",
        pricesLink: "📄 Бағалар тізімін көру",
        pricesLinkDesc: "Барлық медициналық қызметтердің толық бағалары"
      },
      services: {
        title: "Қызметтер",
        description: "Біз ұсынатын медициналық қызметтер"
      },
      contact: {
        title: "Байланыс",
        form: "Хабарласу формасы",
        nameLabel: "Аты-жөні*",
        emailLabel: "E-Mail*",
        subjectLabel: "Тақырып*",
        messageLabel: "Хабарлама*",
        submitButton: "Хат жіберу",
        submitLoading: "Жіберілуде...",
        clearButton: "Тазарту",
        errorAllFields: "Барлық өрістерді толтырыңыз",
        errorSubmit: "Жіберу кезінде қате орын алды",
        errorGeneric: "Жіберу мүмкін болмады",
        success: "Хат сәтті жіберілді. Сізге жақын арада жауап беріледі.",
        address: "Мекен-жайымыз: Қызылорда қаласы, Зейнолла Шүкіров көшесі №7А",
        callCenter: "Call-центр:",
        registry: "Регистратура:",
        reception: "Приемная:",
        hotline: "Телефон доверия:",
        dermatology: "Кожное отделение:"
      },
      board: {
        title: "Байқаушы кеңес",
        description: "Байқаушы кеңестің отырыстарының хаттамалары",
        protocols: "Хаттамалар",
        attendees: "Қатысқандар:",
        absent: "Қатыспағандар:",
        agenda: "Күн тәртібі:",
        openDownload: "Ашу / Жүктеу"
      },
      specialists: {
        title: "Біздің қызметкерлер",
        description: "Орта және кіші буын медицина қызметкерлері мен дәрігерлер жайлы ақпарат.",
        nurses: "Орта және кіші буын медицина қызметкерлері",
        doctors: "Дәрігерлер жайлы мәлімет",
        nursesButton: "Орта және кіші буын медицина қызметкерлері",
        doctorsButton: "Дәрігерлер жайлы мәлімет",
        contentComing: "Контент қосылады.",
        legalBase: "⚖️ Заннамалық база",
        legalDescription: "Республика Казахстан Министерствосы денсаулық сақтау және әлеуметтік даму ресімі 2015 жылдың 23 қазанының №821 приказы негіздемесінде дерматовенерологиялық көмек ұйымдастыруы туралы стандарт.",
        viewFull: "Толық қараңыз →",
        articles: "Статьялар",
        articlesDesc: "Миндетті медициналық сақтандыру (МӘМС) туралы маңызды ақпарат және құқықтар",
        legal: "Заннамалық база",
        legalDesc: "Қазақстанның дерматовенерологиялық ойлау стандарттары және заңдарын оқы",
        info: "Пайдалы ақпарат",
        infoDesc: "Мамандарға арналған пайдалы материал және кәсіби ресурстар",
        more: "МӘМС туралы толық ақпарат",
        moreDesc: "Миндетті медициналық сақтандыру жүйесінің барлық деталі"
      },
      compliance: {
        title: "Комплаенс қызметі",
        description: "Сыбайлас жемқорлыққа қарсы іс-қимыл",
        internalAnalysis: "Ішкі талдау",
        workingGroup: "Жұмыс тобы",
        recommendations: "Ұсынымдар",
        documentsTitle: "Комплаенс құжаттамасы",
        internalDocuments: "Ішкі нормативтік құжаттар:",
        analysisMaterials: "Талдау және аналитикалық материалдар:",
        minutesMeetings: "Жиналыс хаттамалары және отырыстар:",
        analysisResults: "Сыбайлас жемқорлық тәуекелдеріне ішкі талдау нәтижелері бойынша талдамалық анықтамасы",
        date: "30 мамыс 2025 жыл",
        introSection: "КІРІСПЕ БӨЛІМІ",
        descriptionSection: "СИПАТТАМА БӨЛІМІ",
        analysisDirections: "І. Талдау бағыттары:",
        personnelManagement: "III. Персоналды басқару",
        conflictOfInterest: "IV. Мүдделер қақтығысын реттеу",
        publicServices: "V. Мемлекеттік қызметтер",
        publicProcurement: "VI. Мемлекеттік сатып алу",
        appeals: "VIII. Жеке және заңды тұлғалардың өтініштері",
        workingGroupComposition: "Жұмыс тобының құрамы",
        workingGroupDescription: "Кәсіпорынның 2025 жылғы 23 сәуір №55A-05/01 бұйрығымен құрылған",
        publicDiscussion: "Жария талқылау хаттамасы",
        publicDiscussionDate: "26 мамыр 2025 жыл",
        recommendationsTitle: "Ұсынымдар",
        procurementRecommendations: "Мемлекеттік сатып алу бойынша:",
        appealsRecommendations: "Өтініштерді қарау бойынша:",
        conclusion: "Қорытынды:"
      },
      info: {
        title: "Пайдалы ақпарат",
        skinDiseases: "Тері аурулары",
        scabies: "Қышыма қотыр (чесотка)",
        howItSpreads: "Қалай жұғады?",
        howItManifests: "Қайтіп байқалады?",
        whatToDo: "Не істеу керек?",
        prevention: "Сақтану шаралары"
      },
      photobayan: {
        title: "ФОТОБАЯН",
        thanksTitle: "Жаны жомарт жандарға мың алғыс!",
        thanksDesc: "Біздің дәрігерлер және медициналық құрамы",
        galleryTitle: "Фотогалерея",
        galleryDesc: "Барлық фотосуреттерді қарау",
        open: "Ашу",
        description: "Аңдатпа",
        descriptionText: "Осы бөлім біздің диспансердің дәрігерлері, медициналық персоналы және емделушілердің фотоларын сақтайтын ынамды орын болып табылады. Әрбір сурет ынамның, дәрігерлік құзыреттіліктің және емделушіге қызмет көрсетудің көрінісі болып табылады."
      },
      beynebayan: {
        title: "БЕЙНЕБАЯН",
        description: "Аңдатпа",
        descriptionText: "Осы бөлім біздің мекеменің видеоларын және бейнебаяндарын ұсынады. Барлық материалдар біздің ұйымның қызметтері, оқиғалары және маңызды мәліметтер туралы өндіріген."
      },
      sybailas: {
        title: "Сыбайлас жемқорлық туралы",
        video1: "Сыбайлас жемқорлық туралы — Бейне 1",
        videoSeries: "Серия видео: Сыбайлас жемқорлық",
        videoSeriesTitle: "Серия видео",
        videoDescription: "Видео открывается прямо на сайте — адаптивный проигрыватель.",
        videoSeriesDescription: "Несколько роликов по теме. Нажмите на крестик чтобы закрыть.",
        noVideo: "Бейне жоқ"
      },
      stateSymbols: {
        title: "Дәрігерлер жайлы мәлімет",
        backToStructure: "Мекеме ғұрағы / Біздің құрылымдар"
      },
      prices: {
        title: "ПРЕЙСКУРАНТ ЦЕН",
        downloadText: "Загрузите прейскурант или просмотрите его прямо в браузере.",
        downloadButton: "Скачать прейскурант (PDF)"
      },
      reports: {
        title: "Қаржылық есептер",
        quarter1Title: "2024 жылдың І тоқсанының қаржылық есебі",
        halfYearTitle: "2024 жылдың І жартыжылдық қаржылық есебі",
        including: "Оның ішінде:",
        expenses: "2024 жылдың І тоқсаны бойынша шығыс есебі:",
        expensesHalfYear: "2024 жылдың І жартыжылдық бойынша шығыс есебі:",
        downloadFile: "Файлды жүктеу: І жартыжылдық қаржылық есебі 2024.pdf [3.5 Mb]"
      },
      history: {
        title: "Мекеме тарихы",
        backToInstitution: "← Мекемеге оралу"
      }
    },
    footer: {
      copyright: "Copyright © 2020 Қызылорда облысының денсаулық сақтау басқармасының «Қызылорда облыстық тері-венерология диспансері» шаруашылық жүргізу құқығындағы коммуналдық мемлекеттік кәсіпорны.",
      developedBy: "Сайт жобасын дайындаған «ToWeb.kz» компаниясы.",
      orderSite: "Сайтқа тапсырыс беру."
    }
  },
  ru: {
    common: {
      back: "Назад",
      more: "Подробнее",
      noData: "Нет данных"
    },
    header: {
      topLinks: {
        patients: "Пациентам",
        usefulInfo: "Полезная информация",
        compliance: "Служба комплаенса"
      },
      searchPlaceholder: "Поиск на сайте...",
      callCenter: "CALL-ЦЕНТР",
      nav: {
        homeBtn: "ГЛАВНАЯ",
        aboutBtn: "О УЧРЕЖДЕНИИ",
        patientsBtn: "ПАЦИЕНТАМ",
        specialistsBtn: "СПЕЦИАЛИСТАМ",
        boardBtn: "НАБЛЮДАТЕЛЬНЫЙ СОВЕТ",
        servicesBtn: "УСЛУГИ",
        newsBtn: "ОБЪЯВЛЕНИЯ",
        contactBtn: "КОНТАКТЫ"
      },
      about: {
        financialReport: "Финансовый отчет Кызылординского областного кожно-венерологического диспансера на I полугодие 2024 года",
        auditServices: "Услуги внутреннего аудита и поддержки пациентов",
        quarterlyReport: "Финансовый отчет за 1 квартал 2024 года",
        complianceService: "Служба комплаенса",
        priceList: "Прайс-лист услуг",
        history: "История учреждения",
        staff: "Наш персонал"
      },
      patientsMenu: {
        prices: "Список цен",
        memo: "Памятка для пациентов",
        schedule: "График работы"
      },
      specialists: {
        legal: "Нормативная база",
        info: "Полезная информация",
        articles: "Статьи",
        more: "Подробнее"
      }
    },
    footer: {
      address: "Адрес",
      phone: "Телефон",
      email: "Электронная почта",
      workingHours: "Часы работы"
    },
    pages: {
      news: {
        title: "Объявления",
        subtitle: "Последние новости и объявления",
        dbError: "База данных не установлена",
        dbErrorDesc: "Чтобы использовать систему объявлений, необходимо установить базу данных",
        noNews: "На данный момент нет объявлений"
      },
      about: {
        chiefDoctor: "Главный врач",
        institutionHistory: "История учреждения",
        director: "Амир Нурлан Амирович",
        directorTitle: "Главный врач Кызылординского областного кожно-венерологического диспансера"
      },
      patients: {
        title: "Пациентам",
        whatIs: "Что это?"
      },
      services: {
        title: "Услуги",
        description: "Медицинские услуги, которые мы предоставляем"
      },
      contact: {
        title: "Контакты",
        form: "Форма обратной связи"
      }
    }
  }
} as const

const DEFAULT_LANGUAGE: Language = 'kz'
const STORAGE_KEY = 'website-language'

export function getLanguageFromStorage(): Language {
  if (typeof window === 'undefined') return DEFAULT_LANGUAGE
  
  const stored = localStorage.getItem(STORAGE_KEY) as Language | null
  return stored && (stored === 'kz' || stored === 'ru') ? stored : DEFAULT_LANGUAGE
}

export function setLanguageToStorage(lang: Language): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, lang)
    document.documentElement.lang = lang
  }
}

export function getTranslations(lang: Language) {
  return TRANSLATIONS[lang] || TRANSLATIONS[DEFAULT_LANGUAGE]
}
