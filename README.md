# Яндекс мобилизация 2017. Тестовое задание №2 в ШРИ.

## Задача:
Написать библиотеку, предоставляющую API для работы с расписанием лекций из первого задания.
[Подробное описание задания](https://academy.yandex.ru/events/frontend/shri_msk-2017/)

[Live demo](https://roidesrois.github.io/task2/)

## Реализация:

### Был создан веб-интерфейс, который позволяет:

* просмотр расписания школы в заданный интервал дат. Пользователь должен ввести данные: название школы, начальную дату, конечную дату. Пользователю будут выданы записи о лекциях, которые удовлетворяют введённым параметрам.

* просмотр графика лекций в аудитории в заданный интервал дат. Пользователь должен ввести данные: название аудитории, начальную дату, конечную дату. Пользователю будут выданы записи о лекциях, которые удовлетворяют введённым параметрам.

* ввод и редактирование данных о лекциях. Пользователь должен ввести все относящиеся к лекции данные: название лекции, дату и время, выбрать школу, лектора и аудиторию.
В случае, если введённые данные будут конфликтовать с уже имеющимися в расписании данными(например, в ту же самую дату и время, в указанной во входных параметрах аудитории, уже запланирована лекция), пользователю будет выдано предупреждение.
Также, если вместимость указанной аудитории меньше, чем количество слушателей всех указанных для лекции школ, будет выдано предупреждение. Пользователю будет необходимо уточнить данные и повторить ввод.
Также, если в те же самые дату и время, указанные во входных данных Лектор, или Школа или Название лекции уже запланированы, то пользователю будет выдано предупреждение. Пользователю будет необходимо уточнить данные и повторить ввод.
сохранение информации о лекциях осуществляется в LocalStorage. 

* ввод и редактирование данных о школах. Можно вносить запись "Название школы","Количество слушателей". Если такая школа уже есть, данные будут обновлены. В противном случае - создана новая запись о школе.

* ввод и редактирование данных об аудиториях. Можно вносить запись "Название аудитории","Вместимость аудитории","Расположение"). Если такая аудитория уже есть, данные будут обновлены. В противном случае - создана новая запись об аудитории.

## Установка и запуск

Что бы запустить работу сборки необходимо выполнить следующие шаги:

**Шаг 1**:
npm i gulpjs/gulp-cli -g  // Install the latest Gulp CLI tools globally

**Шаг 2**:
npm i

**Шаг 3**:
gulp command to start

**Шаг 4**:
http://localhost:30001/

Для удобства в разработке использовались следующие инструменты:

* Шаблонизатор mustache.js
* Препроцессор sass (+ дополнительные модули autoprefixer, clean-css, imagemin и др)
* Сборщик gulp 4.5

А также был выбран небольшой плагин Pikaday.js  для подключения кастомного календаря.   
Причина: Safari и Firefox не поддерживают текстовое поле type='date', а в остальных браузерах контролы выглядят по разному.
