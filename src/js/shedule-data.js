(function () {

// постоянные данные лекций, аудиторий, школ и лекторов
var schools = [
    {
        id: 'interface',
        name: 'ШРИ',
        students: 38
    },
    {
        id: 'mobile',
        name: 'ШМР',
        students: 24
    },
    {
        id: 'design',
        name: 'ШМД',
        students: 46
    }
];

var rooms = [
    {
        id: 0,
        name: 'Желтая аудитория',
        description: 'Первый этаж. Второй кабинет налево от главного входа по левой стороне.',
        capacity: 25
    },
    {
        id: 1,
        name: 'Лазурный берег',
        description: 'Первый этаж. Направо от главного входа, сразу за углом.',
        capacity: 45
    },
    {
        id: 2,
        name: 'Синий кит',
        description: 'Первый этаж. Большой кабинет сразу за кухней.',
        capacity: 100
    },
    {
        id: 3,
        name: 'Переговорка «Принстон»',
        description: 'Второй этаж. Третий кабинет налево от лестницы по правую сторону, окна выходят на южную сторону.',
        capacity: 90
    },
    {
        id: 4,
        name: 'Темная сторона',
        description: 'Второй этаж. Третий кабинет налево от лестницы по левую сторону.',
        capacity: 30
    },
    {
        id: 5,
        name: 'Экстрополис',
        description: 'Второй этаж. Направо от лестницы, первый кабинет по правую сторону.',
        capacity: 70
    },
    {
        id: 6,
        name: 'Истина рядом',
        description: 'Третий этаж. Направо от лестницы, четвертый кабинет по правую сторону.',
        capacity: 40
    },
];

var lectures = [

    {
        id:0,
        name: "Java Blitz",
        schools: ["mobile"],
        lecturers: ["eduardm"],
        room: [2],
        datetime: "2017-03-16",
        start: "19:00",
        end: "20:30",
        link:"https://events.yandex.ru/lib/talks/4160/",
    },

    {
        id:1,
        name: "Клиентская оптимизация: базовые знания и лучшие практики",
        lecturers: ["andrym"],
        schools: ["interface"],
        room: [3],
        datetime: "2017-03-18",
        start: "18:00",
        end: "19:30",
        link:"https://events.yandex.ru/lib/talks/4158/",
    },

    {
        id:2,
        name: "Идея, исследование, концепт",
        schools: ["design"],
        lecturers: ["antont"],
        room: [0],
        datetime: "2017-03-19",
        start: "20:00",
        end: "21:30",
        link:"https://events.yandex.ru/lib/talks/4158/",
    },

    {
        id:3,
        name: "Инструмент под задачи",
        schools: ["design"],
        lecturers: ["sergeyt"],
        room: [4],
        datetime: "2017-03-20",
        start: "19:00",
        end: "20:30",
        link:"https://events.yandex.ru/lib/talks/4268/",
    },

    {
        id:4,
        name: "Продукт и платформа",
        schools: ["design"],
        lecturers: ["sergeyk"],
        room: [0],
        datetime: "2017-03-27",
        start: "18:00",
        end: "19:30",
        link:"https://events.yandex.ru/lib/talks/4189/",
    },

    {
        id:5,
        name: "Особенности проектирования мобильных интерфейсов",
        schools: ["design"],
        lecturers: ["nikolaiv"],
        room: [3],
        datetime: "2017-03-25",
        start: "20:00",
        end: "21:30",
        link:"https://events.yandex.ru/lib/talks/4167/",
    },

    {
        id:6,
        name: "Клиентская оптимизация: мобильные устройства и инструменты",
        lecturers: ["ivank"],
        schools: ["interface"],
        room: [0],
        datetime: "2017-04-01",
        start: "20:00",
        end: "21:30",
        link:"https://events.yandex.ru/lib/talks/4158/",
    },
    {
        id:7,
        name: "ViewGroup",
        schools: ["mobile"],
        lecturers: ["alexsh"],
        room: [5],
        datetime: "2017-04-02",
        start: "20:00",
        end: "21:30",
        link:"https://events.yandex.ru/lib/talks/4158/",
    },

    {
        id:8,
        name: "Природа операционных систем",
        schools: ["design", "mobile"],
        lecturers: ["nikolaiv"],
        room: [5],
        datetime: "2017-04-04",
        start: "20:00",
        end: "21:30",
        link:"https://events.yandex.ru/lib/talks/4158/",
    },

    {
        id:9,
        name: "Прототипирование как процесс",
        schools: ["design"],
        lecturers: ["sergeyt"],
        room: [3],
        datetime: "2017-05-07",
        start: "20:00",
        end: "21:30",
        link:"https://events.yandex.ru/lib/talks/4158/",
    },

    {
        id:10,
        name: "Background",
        lecturers: ["alexm"],
        schools: ["mobile"],
        room: [0],
        datetime: "2017-05-09",
        start: "20:00",
        end: "21:30",
        link:"https://events.yandex.ru/lib/talks/4158/",
    },

    {
        id:11,
        name: "RecyclerView",
        schools: ["mobile"],
        lecturers: ["vladimirt"],
        room: [3],
        datetime: "2017-05-09",
        start: "20:00",
        end: "21:30",
        link:"https://events.yandex.ru/lib/talks/4158/",
    },

    {
        id:12,
        name: "Design Everything",
        schools: ["design"],
        lecturers: ["andryg"],
        room: [1],
        datetime: "2017-05-10",
        start: "20:00",
        end: "21:30",
        link:"https://events.yandex.ru/lib/talks/4158/",
    },

    {
        id:13,
        name: "Адаптивная вёрстка",
        schools: ["interface"],
        lecturers: ["dmitriyd"],
        room: [1],
        datetime: "2017-05-10",
        start: "16:00",
        end: "17:30",
        link:"https://events.yandex.ru/lib/talks/4162/",
    },

    {
        id:14,
        name: "Нативные приложения на веб-технологиях",
        schools: ["interface"],
        lecturers: ["sergeyb"],
        room: [2],
        datetime: "2017-05-11",
        start: "15:00",
        end: "17:00",
        link:"https://events.yandex.ru/lib/talks/4230/",
    },

    {
        id:15,
        name: "Git & Workflow",
        schools: ["mobile"],
        lecturers: ["dmitriys"],
        room: [0],
        datetime: "2017-05-12",
        start: "20:00",
        end: "21:30",
        link:"https://events.yandex.ru/lib/talks/4161/",
    },

    {
        id:16,
        name: "Работа с сенсорным пользовательским вводом",
        schools: ["interface"],
        lecturers: ["dmitriyd"],
        room: [2],
        datetime: "2017-05-13",
        start: "15:00",
        end: "17:00",
        link:"https://events.yandex.ru/lib/talks/4162/",
    },

    {
        id:17,
        name: "Анимации",
        schools: ["design"],
        lecturers: ["sergeyt"],
        room: [5],
        datetime: "2017-05-14",
        start: "20:00",
        end: "21:30",
        link:"https://events.yandex.ru/lib/talks/4158/",
    },

    {
        id:18,
        name: "Работа в команде",
        schools: ["interface", "design"],
        lecturers: ["yurip"],
        room: [4],
        datetime: "2017-05-15",
        start: "20:00",
        end: "21:30",
        link:"https://events.yandex.ru/lib/talks/4158/",
    },

    {
        id:19,
        name: "Развитие продукта",
        schools: ["design"],
        lecturers: ["andryg"],
        room: [2],
        datetime: "2017-05-22",
        start: "19:00",
        end: "20:30",
        link:"https://events.yandex.ru/lib/talks/4158/",
    },

    {
        id:20,
        name: "Исследование интерфейсов",
        schools: ["interface", "design"],
        lecturers: ["alexk"],
        room: [0],
        datetime: "2017-05-29",
        start: "16:00",
        end: "17:30",
        link:"https://events.yandex.ru/lib/talks/4158/",
    },

    {
        id:21,
        name: "Инфраструктура веб-проектов",
        schools: ["interface"],
        lecturers: ["andryp"],
        room: [4],
        datetime: "2017-06-01",
        start: "20:00",
        end: "21:30",
        link:"https://events.yandex.ru/lib/talks/4323/",
    },

    {
        id:22,
        name: "Инструменты разработки мобильного фронтенда",
        lecturers: ["andryp"],
        schools: ["interface"],
        room: [3],
        datetime: "2017-06-03",
        start: "21:00",
        end: "22:30",
        link:"https://events.yandex.ru/lib/talks/4324/",
    },

    {
        id:23,
        name: "Мультимедиа: возможности браузера",
        lecturers: ["maximv"],
        schools: ["interface"],
        room: [6],
        datetime: "2017-06-06",
        start: "20:00",
        end: "21:30",
        link:"https://events.yandex.ru/lib/talks/4158/",
    }

];


var lecturers = {

    "dmitriyd": {
        name: "Дмитрий Душкин",
        about: "Кандидат технических наук, научный сотрудник ИПУ РАН с 2008 по 2013. Пришёл в Яндекс.Картинки в 2014 году, отвечал за мобильную версию и рост производительности сервиса. В 2017 перешёл в Yandex Data Factory, где разрабатывает интерфейсы и дизайн веб-приложений для B2B."
    },

    "maximv": {
        name: "Максим Васильев",
        about: "Во фронтенд-разработке с 2007 года. До 2013-го, когда пришёл в Яндекс, работал технологом в студии Лебедева и других компаниях."
    },

    "sergeyb": {
        name: "Сергей Бережной",
        about: "Веб-разработчик в Яндексе с 2005 года. Успел поработать над Поиском, Почтой, Поиском по блогам, Я.ру, Картинками, Видео. Помимо этого, активно занимается развитием внутренних инструментов для создания сайтов."
    },

    "andrym": {
        name: "Андрей Морозов",
        about: "Окончил радиофизический факультет Киевского Национального Университета. Автор трёх патентных заявок. В Яндексе с 2014 года, разрабатывает интерфейсы Яндекс.Карт."
    },

    "ivank": {
        name: "Иван Карев",
        about: "Окончил факультет ВМК (вычислительной математики и кибернетики) МГУ им. М.В. Ломоносова, занимается веб-программированием с 2007 года. Сначала делал админки для системы фильтрации трафика, затем — интерфейсы онлайн-карт для проекта Космоснимки. "
    },

    "andryp": {
        name: "Прокопюк Андрей",
        about: "В 2008 году впечатлился веб-разработкой из-за скорости воплощения идей и лёгкость их донесения до пользователей. В Яндексе с 2014 года, разрабатывает страницу поисковой выдачи. Любит сложные задачи, интересуется аналитикой, тестированием и новыми способами автоматизировать рутину."
    },

    "eduardm": {
        name: "Эдуард Мацуков",
        about: "Разрабатываю приложения для Android с 2010 года. В 2014 делал высоконагруженное финансовое приложение. Тогда же начал осваивать АОП, внедряя язык в продакшн. В 2015 разрабатывал инструменты для Android Studio, позволяющие использовать aspectJ в своих проектах. "
    },

    "dmitriys": {
        name: "Дмитрий Складнов",
        about: "Окончил факультет ИТ Московского Технического Университета. В Яндексе с 2015 года, разрабатывает приложение Auto.ru для Android."
    },

    "romang": {
        name: "Роман Григорьев",
        about: "Окончил Самарский университет. Разрабатывает приложения для Android с 2010 года. В Яндексе — с 2012-го. Руководит разработкой мобильных клиентов Яндекс.Диска."
    },

    "alexsh": {
        name: "Алексей Щербинин",
        about: "Профессионал с глубокими познаниями в графической части Android и всего, что с ней связано. Любит нестандартные задачи и решает их в команде мобильного Яндекс Браузера."
    },

    "alexm": {
        name: "Алексей Макаров",
        about: "Выпускник Московского Института Электронной Техники. Android- и Python-разработчик. В команде мобильного Яндекс.Браузера с 2015 года."
    },

    "vladimirt": {
        name: "Владимир Тагаков",
        about: "Энтузиаст разработки под Android, в Яндексе занимается оптимизацией и разработкой мобильного приложения Карт."
    },

    "antont": {
        name: "Антон Тен",
        about: "В Яндексе с 2014 года. Ведущий дизайнер продукта в сервисах Переводчик, Расписания и Видео."
    },

    "nikolaiv": {
        name: "Васюнин Николай",
        about: "Пришёл в Яндекс в 2014 году. Дизайнер продукта в музыкальных сервисах компании, участник команды разработки Яндекс.Радио."
    },

    "sergeyk": {
        name: "Сергей Калабин",
        about: "Пришёл в компанию дизайнером мобильных приложений в 2013-м. Три года занимался музыкальными сервисами Яндекса, сейчас руководит дизайном турецкого направления. Считает что дизайнера должна отличать любовь к людям."
    },

    "sergeyt": {
        name: "Сергей Томилов",
        about: "Профессионально занимается дизайном с 2009 года. В 2010 году переключился на работу исключительно над интерфейсами, по большей части мобильными. В Яндекс пришёл в 2011 году. Участвовал в создании разных продуктов Поиска, Диска, Фоток и Музыки для всех популярных платформ."
    },

    "darias": {
        name: "Дарья Старицына",
        about: "Дизайнер мобильных продуктов. До прихода в компанию занималась интерфейсами мобильных игр. В Яндексе делает Браузер под все платформы. Также успела поработать над экспериментальными голосовыми интерфейсами и мобильной версией главной страницы Яндекса."
    },

    "andryg": {
        name: "Андрей Гевак",
        about: "В конце 2013 года команда сервиса Яндекс.Музыка начала разработку новой версии. Новой получилась не только «шкурка», то есть дизайн, но и сами возможности. Мы переосмыслили поведение пользователей на сайте и в приложении и иначе оценили потребность людей в новой музыке. В результате этого получилась нынешняя версия music.yandex.ru и её мобильные клиенты."
    },

    "alexk": {
        name: "Кондратьев Александр",
        about: "Занимается исследованиями интерфейсов в Яндексе больше 5 лет. За это время поработал с десятками продуктов Поиска, Карт, Маркета, Почты и других сервисов компании. Заинтересовался интерфейсами в 2005 году, по образованию специалист по защите информации."
    },

    "yurip": {
        name: "Юрий Подорожный",
        about: "Руководитель службы разработки мобильных геоинформационных сервисов «Яндекса». Работает над «Яндекс.Картами» и «Яндекс.Метро». Занимается мобильной разработкой более восьми лет."
    },

    "dmitriym": {
        name: "Дмитрий Моруз",
        about: "Работал дизайнером в студии «Трансформер», с 2014 года — дизайнер систем идентификации в Яндексе."
    },

    "shdanf": {
        name: "Ждан Филиппов",
        about: "Арт-директор коммуникаций Яндекса. В прошлом — арт-директор журналов «CitizenK», «Эрмитаж», «Секрет Фирмы», «Top-Flight», сотрудник «Мастерской Димы Барбанеля». Занимался макетной работой для компаний Readymag, Aliexpress, ONY, Charmer, MINI, Grohe и Мосметрострой."
    }

};


    /**
     * checkStorage - проверяем localStorage по заданным параметрам, если данные есть - возвращаем их, в другом случае - записываем их
     * @param name - название ключа
     * @param value - значение ключа
     * **/
    function checkStorage(name, value) {
      try {
          if(localStorage.getItem(name)) {
              return JSON.parse(localStorage.getItem(name));
          } else {
              localStorage.setItem(name, JSON.stringify(value));
              return value;
          }
      } catch(error) {
          console.error('Could not write to localStorage', error);
          return value;
      }
    }


    window.schools = checkStorage('schools', schools);
    window.rooms = checkStorage('rooms', rooms);
    window.lectures = checkStorage('lectures', lectures);
    window.lecturers = checkStorage('lecturers', lecturers);

})();