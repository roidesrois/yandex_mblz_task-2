

    var now = new Date();

    var container = document.querySelector(".container"),
        schedule = document.querySelector(".schedule"),
        schoolSelect = document.querySelector("#school"),
        roomSelect = document.querySelector("#room"),
        // dateSelect = document.querySelector("#date"),
        dateFromSelect = document.querySelector("#date__start"),
        dateToSelect = document.querySelector("#date__end"),
        lecturerSelect = document.querySelector("#lecturer");


    // рендерим список преподавателей и лекции
    renderLecturers(lecturerSelect);
    renderRooms(roomSelect);
    var filteredLectures = filterLectures();
    renderLectures(schedule, filteredLectures);


    // вешаем обработчики на все селекты
    [schoolSelect, lecturerSelect, roomSelect, dateFromSelect, dateToSelect].forEach(function(selectElem) {
        selectElem.addEventListener("change", function(event) {
            event.preventDefault();
            var filteredLectures = filterLectures(schoolSelect, lecturerSelect, roomSelect, dateFromSelect, dateToSelect);
            renderLectures(schedule, filteredLectures);
        });

        // разворачиваем select icon на 180*
        selectElem.onmouseup = function() {
            this.parentElement.classList.toggle('focused');
        };

        // возвращаем select icon в исходное положение
        selectElem.onblur = function() {
            this.parentElement.classList.remove('focused');
        };

    });



    /**
     * @calendar
     * @description Инициализируем кастомный datepicker
     */
    var startDate,
        endDate,
        updateStartDate = function(cl) {
            startPicker.setStartRange(startDate);
            endPicker.setStartRange(startDate);
            endPicker.setMinDate(startDate);

            toggleIcons(startPicker, cl);
        },
        updateEndDate = function(cl) {
            startPicker.setEndRange(endDate);
            startPicker.setMaxDate(endDate);
            endPicker.setEndRange(endDate);

            toggleIcons(endPicker, cl);
        },
        startPicker = new Pikaday({
            field: document.getElementById('date__start'),
            format: 'YYYY-MM-DD',
            i18n: {
                previousMonth: 'Предыдущий',
                nextMonth: 'Следующий',
                months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
                weekdays: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
                weekdaysShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']
            },
            onSelect: function() {
                startDate = this.getDate();
                updateStartDate('.date__start');
            }
        }),
        endPicker = new Pikaday({
            field: document.getElementById('date__end'),
            format: 'YYYY-MM-DD',
            i18n: {
                previousMonth: 'Предыдущий',
                nextMonth: 'Следующий',
                months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
                weekdays: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
                weekdaysShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']
            },
            onSelect: function() {
                endDate = this.getDate();
                updateEndDate('.date__end');
            }
        }),
        _startDate = startPicker.getDate(),
        _endDate = endPicker.getDate();

        if (_startDate) {
            startDate = _startDate;
            updateStartDate();
        }

        if (_endDate) {
            endDate = _endDate;
            updateEndDate();
        }


        function toggleIcons(el, cl) {
            var calendar = document.querySelector(".field__icon_calendar"+cl),
                clear = document.querySelector(".field__icon_clear"+cl);

            calendar.classList.add("field__icon_hidden");
            clear.classList.remove("field__icon_hidden");

            clear.addEventListener("click", function() {
                el.setDate('');
                clear.classList.add("field__icon_hidden");
                calendar.classList.remove("field__icon_hidden");
            });
        }

        function leadZero(num) {
            return num < 10 ? '0' + num : num;
        }

        function getTime(date) {
            date.setHours(date.getHours(), date.getMinutes() + date.getTimezoneOffset());
            return leadZero(date.getHours()) + ":" + leadZero(date.getMinutes());
        }

        function formatDate(date, mode) {
            var year = date.getFullYear(),
                month = date.getMonth() + 1,
                day = date.getDate(),
                formatResult;

            if (mode && mode !== "firstYear") 
                formatResult = [leadZero(day), leadZero(month), year].join('-');
            else 
                formatResult = [year, leadZero(month), leadZero(day)].join('-');

            return formatResult;
        }


    /**
     * @calendar
     * @description Инициализируем кастомный datepicker
     */
    function DatePicker(el) {
        self = this;
        this.el = el;
        this.dateControl = el.querySelector('[name=date]');
        this.pickerIcon = el.querySelector(".field__icon_calendar");
        this.clearIcon = el.querySelector(".field__icon_clear");
        self.init = function() {
            this.dateControl.setAttribute("readonly", "readonly");
            this.initCustomDatePicker();
        },
        self.setValue = function(datePicker) {
            this.dateControl.value = formatDate(datePicker.getDate(), "firstYear");
            this.pickerIcon.classList.add("field__icon_hidden");
            this.clearIcon.classList.remove("field__icon_hidden");
        },
        self.clearValue = function(datePicker) {
            datePicker.setDate(null);
            this.clearIcon.classList.add("field__icon_hidden");
            this.pickerIcon.classList.remove("field__icon_hidden");
        },
        self.initCustomDatePicker = function(datePicker) {
            var datePicker = new Pikaday({
                field: this.dateControl,
                firstDay: 1,
                // format: 'YYYY-MM-DD',
                i18n: {
                    previousMonth: 'Предыдущий',
                    nextMonth: 'Следующий',
                    months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
                    weekdays: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
                    weekdaysShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']
                },
                onSelect: function() {self.setValue(datePicker)},
            });

            this.pickerIcon.addEventListener("click", function() {datePicker.show()});
            this.clearIcon.addEventListener("click", function() {self.clearValue(datePicker)});
        }
    }


    /**
     * Функция фильтрует данные на основе активных фильтров.
     * @param schoolSelect {Element} Выпадающий список со школами.
     * @param lecturerSelect {Element} Выпадающий список с преподавателями.
     * @param roomSelect {Element} Выпадающий список с аудиториями.
     * @param dateFromSelect {Element} Datepicker From.
     * @param dateToSelect {Element} Datepicker To.
     * @returns {Array} Массив отфильтрованных лекций.
     */
    function filterLectures() {
        var lectures = window.lectures;

        // фильтрация по школе
        var schoolValue = schoolSelect.value;

        if (schoolValue !== "all") {

            lectures = lectures.filter(function(lecture) {
                var flag = false;
                lecture.schools.forEach(function(school) {
                    if (school === schoolValue) {
                        flag = true;
                    }
                });
                return flag;
            });
        }

        // фильтрация по аудиториям
        var roomValue = roomSelect.value;

        if (roomValue !== "all") {

            lectures = lectures.filter(function(lecture) {
                var flag = false;

                if (lecture.room[0] == roomValue) {
                    flag = true;
                }

                return flag;
            });
        }


        // фильтрация на событие изменения дат начала или конца лекций
        if (dateFromSelect.value || dateToSelect.value) {

        // Преобразуем строки с датами в объекты дат + для корректного сравнения
        // обнуляем часы и минуты
        var dateFromValue = new Date(Date.parse(dateFromSelect.value)).setHours(0, 0, 0, 0),
            dateToValue = new Date(Date.parse(dateToSelect.value)).setHours(0, 0, 0, 0);

            lectures = lectures.filter(function(lecture) {
                var flag = false;
                
                // Обнуляем часы и минуты у дат лекций
                var lectureDate = new Date(Date.parse(lecture.datetime)).setHours(0, 0, 0, 0);

                // Если не указана первая дата
                if (dateFromSelect.value === "" && dateToValue >= lectureDate) {
                    flag = true;
                } else if (dateToSelect.value === "" && dateFromValue <= lectureDate) {
                    // Если не указана вторая дата
                    flag = true;
                } else if (dateFromValue <= lectureDate && dateToValue >= lectureDate) {
                    flag = true;
                }
                return flag;
            });
        }

        // сортировка по убыванию даты
        lectures = sortByDate(lectures).reverse();


        // сортировка по преподавателю
        var lecturerValue = lecturerSelect.value;

        if (lecturerValue !== "all") {

            lectures = lectures.filter(function(lecture) {
                var flag = false;
                lecture.lecturers.forEach(function(lecturer) {
                    if (lecturer === lecturerValue) {
                        flag = true;
                    }
                });
                return flag;
            });
        }

        return lectures;
    }



    /**
     * Функция рендерит расписание на основе переданного массива лекций.
     * @param schedule {Element} Элемент расписания на странице.
     * @param lectures {Array} Массив лекций.
     */
    function renderLectures(schedule, lectures) {
        var lecturesElem = schedule.querySelector(".schedule__lectures");
        var noResultsElem = schedule.querySelector(".schedule__not-found");

        lecturesElem.innerHTML = "";

        if (lectures.length !== 0) {

            noResultsElem.classList.add("schedule__not-found--hidden");

            var fragment = document.createDocumentFragment();

            lectures.forEach(function (rawLectureData) {
                var lectureData = {};
                var date = new Date(Date.parse(rawLectureData.datetime));
                lectureData.datetime = formatDate(date);
                lectureData.start = rawLectureData.start;
                lectureData.end = rawLectureData.end;
                lectureData.link = rawLectureData.link;
                lectureData.name = rawLectureData.name;
                lectureData.id = rawLectureData.id;

                lectureData.room = rooms[rawLectureData.room].name;

                lectureData.schools = [];

                rawLectureData.schools.forEach(function(schoolName) {
                    lectureData.schools.push({
                        name: window.schools.filter(function(item){
                            return item.id == schoolName;
                        })[0].name
                    });
                });

                lectureData.lecturers = [];
                rawLectureData.lecturers.forEach(function(lecturerName) {
                    var lecturer = window.lecturers[lecturerName];
                    lecturer.imgFileName = lecturerName;
                    lecturer.teacherId = lecturerName;
                    lectureData.lecturers.push(lecturer);
                });

                // если лекция прошла
                if (new Date(Date.parse(rawLectureData.datetime)) < now) {
                    lectureData.materials = true;
                } else {
                    lectureData.date = true;
                }

                var lectureElement = getElementFromTemplate(lectureData);
                fragment.appendChild(lectureElement);
            });

            lecturesElem.appendChild(fragment);

            createPopupEvents();

        } else {
            noResultsElem.classList.remove("schedule__not-found--hidden");
        }
    }


    function showLecturerPopup(lecturerId, clickPos) {
        var popup = container.querySelector(".popup");
        popup.innerHTML = "";

        var fragment = document.createDocumentFragment();

        var popupData = {};

        popupData.name = window.lecturers[lecturerId].name;
        popupData.imgFileName = window.lecturers[lecturerId].imgFileName;
        popupData.about = window.lecturers[lecturerId].about;


        var popupBlock = getPopupFromTemplate(popupData);
        fragment.appendChild(popupBlock);

        popup.appendChild(fragment);

        popup.style.left = window.pageXOffset + clickPos.x+'px';
        popup.style.top = window.pageYOffset + clickPos.y+'px';

        var closePopup = document.querySelector(".lecturer-popup__close");
        closePopup.addEventListener("click", function(event) {
            var lecturerPopupElem = this.parentElement.parentElement;
            lecturerPopupElem.classList.toggle("lecturer-popup--hidden");
        });
    }

    /**
     * Добавляет в выпадающий список всех преподавателей.
     * @param lecturerSelect {Element} Элемент выпадающего списка с преподавателями.
     */
    function renderLecturers(lecturerSelect) {
        var fragment = document.createDocumentFragment();

        var allOption = document.createElement("option");
        allOption.value = "all";
        allOption.innerHTML = "Все лекторы";
        fragment.appendChild(allOption);

        Object.keys(window.lecturers).forEach(function(lecturerName) {
            var currentOption = document.createElement("option");
            currentOption.value = lecturerName;
            currentOption.innerHTML = window.lecturers[lecturerName].name;
            fragment.appendChild(currentOption);
        });

        lecturerSelect.appendChild(fragment);
    }


    /**
     * Добавляет в выпадающий список все аудитории.
     * @param roomSelect {Element} Элемент выпадающего списка с аудиториями.
     */
    function renderRooms(roomSelect) {
        var fragment = document.createDocumentFragment();

        var allOption = document.createElement("option");
        allOption.value = "all";
        allOption.innerHTML = "Все аудитории";
        fragment.appendChild(allOption);

        window.rooms.forEach(function(roomName) {
            var currentOption = document.createElement("option");
            currentOption.value = roomName.id;
            currentOption.innerHTML = roomName.name;
            fragment.appendChild(currentOption);
        });

        roomSelect.appendChild(fragment);
    }



    /**
     * Функция возвращает массив лекций, отсортированных по возрастанию даты.
     * @param lectures {Array} Массив лекций.
     * @returns {Array} Отсортированный массив лекций.
     */
    function sortByDate(lectures) {
        return lectures.sort(function(firstLecture, secondLecture) {
            var firstLectureDate = Date.parse(firstLecture.datetime);
            var secondLectureDate = Date.parse(secondLecture.datetime);

            return firstLectureDate - secondLectureDate;
        });
    }


    function showLecturePopup(lectureEditId ) {
        var popup = container.querySelector(".popup");
        popup.innerHTML = "";

        var fragment = document.createDocumentFragment();

        var lectureEdit = {};

        if (lectureEditId) {
            //записываем все данные текущей лекции в lectureEdit
            lectureEdit = window.lectures.filter(function(lecture) {
                return lecture.id == lectureEditId;
            })[0];

            //заполняем input-ы данными текущей лекции
            lectureEdit.startHour = lectureEdit.start.split(':')[0];
            lectureEdit.startMinutes = lectureEdit.start.split(':')[1];
            lectureEdit.endHour = lectureEdit.end.split(':')[0];
            lectureEdit.endMinutes = lectureEdit.end.split(':')[1];
        }

        var popupBlock = getLecturePopupFromTemplate(lectureEdit);
        fragment.appendChild(popupBlock);

        popup.appendChild(fragment);

        document.querySelector('.lecture-form').id = lectureEdit ? 'lecture-edit__form' : 'lecture-add__form';

        var calendar = new DatePicker(document.querySelector(".date-select"));
        calendar.init();

        var modal = container.querySelector('.modal');
        //закрыть модальное окно
        modal.querySelector('.modal__close').addEventListener('click', function() {
            modal.style.display = 'none';
        });

        var schoolSelect = document.querySelector("#lecture-add__schools"),
            roomSelect = document.querySelector("#lecture-add__rooms"),
            lecturerSelect = document.querySelector("#lecture-add__lecturers");

        if (lectureEditId) {
            var selectedSchoolOpt = lectureEdit.schools,
                selectedLecturerOpt = lectureEdit.lecturers,
                selectedRoomOpt = lectureEdit.room;

            renderLectureInPopup(schoolSelect, roomSelect, lecturerSelect, selectedSchoolOpt, selectedLecturerOpt, selectedRoomOpt);
        } else {
            renderLectureInPopup(schoolSelect, roomSelect, lecturerSelect);
        }

        var formLecture = document.getElementById(document.querySelector('.lecture-form').id);

        formLecture.addEventListener('submit', function() {
            event.preventDefault();

            if (!lectureEditId) {
                validateForm(formLecture);
            } else {
                validateForm(formLecture, lectureEdit);
            }
        });

        // закрытие модального окна добавления/редактирования лекций
        document.querySelector('.lecture-form__cancel').addEventListener('click', function() {
            document.querySelector('.lecture-add').style.display = 'none';
        });

    }

    /**
     * writeInStorage - записываем данные в localStorage по заданным параметрам
     * @param name - название ключа
     * @param value - значение ключа
     * **/
    function writeInStorage(name, value) {
        try {
            localStorage.setItem(name, JSON.stringify(value));
        } catch(error) {
            console.error('Could not write to localStorage', error);
        }
    }


    /**
     * Функция рендерит "Edit Lecture" форму на основе переданных парамметров.
     * @param schoolSelect {Element} Выпадающий список школ.
     * @param roomSelect {Element} Выпадающий список аудиторий.
     * @param lecturerSelect {Element} Выпадающий список лекторов.
     * @param selectedSchoolOpt {Array} Выбранные школы для текущей лекции.
     * @param selectedLecturerOpt {Element} Выбранный лектор для текущей лекции.
     * @param selectedRoomOpt {Element} Выбраннвая аудитория для текущей лекции.
     */
    function renderLectureInPopup(schoolSelect, roomSelect, lecturerSelect, selectedSchoolOpt, selectedLecturerOpt, selectedRoomOpt) {

        //Добавляем в выпадающий список lecturerSelect всех лекторов.
        var fragment = document.createDocumentFragment();

        var allOption = document.createElement("option");
        allOption.value = "";
        allOption.innerHTML = "Выберите лектора...";
        fragment.appendChild(allOption);

        Object.keys(window.lecturers).forEach(function(lecturerName) {
            var currentOption = document.createElement("option");
            currentOption.value = lecturerName;
            currentOption.innerHTML =  window.lecturers[lecturerName].name;
            fragment.appendChild(currentOption);
        });

        lecturerSelect.appendChild(fragment);


        //Добавляем в выпадающий список roomSelect все аудитории.
        var fragment = document.createDocumentFragment();

        var allOption = document.createElement("option");
        allOption.value = "";
        allOption.innerHTML = "Выберите аудиторию...";
        fragment.appendChild(allOption);

        window.rooms.forEach(function(roomName) {
            var currentOption = document.createElement("option");
            currentOption.value = roomName.id;
            currentOption.innerHTML = roomName.name;
            fragment.appendChild(currentOption);
        });

        roomSelect.appendChild(fragment);

        //задаем списку выбранное значение lecturer, если оно было переданно
        if (selectedLecturerOpt) 
            lecturerSelect.value = selectedLecturerOpt;

        //задаем списку выбранное значение room, если оно было переданно
        if (selectedRoomOpt) 
            roomSelect.value = selectedRoomOpt;

        //задаем списку выбранные значения школ, если они были переданны
        if (selectedSchoolOpt) {
            for (var i = 0; i < schoolSelect.querySelectorAll('option').length; i++) {
                var option = schoolSelect.querySelectorAll('option')[i];
                if (selectedSchoolOpt.indexOf(schoolSelect.querySelectorAll('option')[i].value) >= 0) {
                    option.selected = schoolSelect.querySelectorAll('option')[i].value;
                }
            }
        }
    }


    /**
     * Функция создаёт элемент на основе шаблона popup и переданных данных.
     * @param data {Object} Объект, который описывает popup.
     * @returns {Element} Элемент, созданный по шаблону popup.
     */
    function getLecturePopupFromTemplate(data) {
        var element = document.createElement('div');
            element.classList.add("lecture-popup");

        element.innerHTML = Mustache.render(document.querySelector("#add-lecture-popup-layout").innerHTML, data);

        element.querySelector(".modal").style.display = "block";
        return element;
    }


    /**
     * getFormValues - получаем значения из формы добавления или редактирования
     * @param form - элемент формы, куда добавляем данные
     * @param lecture(optional) - объект редактируемой лекции
     * **/
    function getFormValues(form, lecture) {
        lecture = lecture || {};
        //console.log(lecture);
        lecture.id = lecture && lecture.id ? lecture.id : lectures.length;
        //console.log(lecture.id);
        lecture.name = form.querySelector('.lecture-add__title').value;
        lecture.room = [];
        lecture.room.push(form.querySelector('.lecture-add__rooms').value);
        lecture.lecturers = [];
        lecture.lecturers.push(form.querySelector('.lecture-add__lecturers').value);
        var date = form.querySelector('.lecture-add__date').value;
        lecture.datetime = date;
        
        lecture.start = form.querySelector('.lecture-add__time-start-hours').value + ':' + form.querySelector('.lecture-add__time-start-minutes').value;
        lecture.end = form.querySelector('.lecture-add__time-end-hours').value + ':' + form.querySelector('.lecture-add__time-end-minutes').value;
        lecture.schools = [];
        for (var i = 0; i < form.querySelectorAll('.lecture-add__schools option').length; i++) {
            var option = form.querySelectorAll('.lecture-add__schools option')[i];
            if (option.selected) {
                lecture.schools.push(String (option.value));
            }
        }
        return lecture;
    }

    /**
     * Функция создаёт элемент на основе шаблона лекции и переданных данных.
     * @param data {Object} Объект, который описывает лекцию.
     * @returns {Element} Элемент, созданный по шаблону лекции.
     */
    function getElementFromTemplate(data) {
        var element = document.createElement('div');

        element.classList.add("lecture");
        if (data.materials) {
            element.classList.add("lecture--is-over");
        }

        element.innerHTML = Mustache.render(document.querySelector("#lecture-layout").innerHTML, data);

        return element;
    }

    /**
     * Функция создаёт элемент на основе шаблона popup и переданных данных.
     * @param data {Object} Объект, который описывает popup.
     * @returns {Element} Элемент, созданный по шаблону popup.
     */
    function getPopupFromTemplate(data) {
        var element = document.createElement('div');
            element.classList.add("lecturer-popup");

        element.innerHTML = Mustache.render(document.querySelector("#popup-layout").innerHTML, data);

        return element;
    }


    /**
     * Функция создаёт события для всех всплывающих окон
     */
    function createPopupEvents() {

        var lecturerNameElems = document.querySelectorAll(".lecture__lecturer-name");

        for (var i = 0; i < lecturerNameElems.length; i++) {
            lecturerNameElems[i].addEventListener("click", function(event) {
                var clickPos = {x: event.clientX-60, y: event.clientY};
                showLecturerPopup(this.id, clickPos);
            });
        }


        var lectureEditButtons = document.querySelectorAll(".lecture__edit-button .edit-button");

        for (var i = 0; i < lectureEditButtons.length; i++) {
            lectureEditButtons[i].addEventListener("click", function(event) {
                showLecturePopup(this.id);
            });
        }


        var lectureAddButton = document.querySelector(".add-lecture");

        lectureAddButton.addEventListener("click", function(event) {
            showLecturePopup();
        });
    }

