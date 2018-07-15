;(function () {
    const DICTIONARY_TEXT = {
        currentLanguage: {
            "key": "ru-RU",
            "alphabet": {
                "RU": "абвгдеёжзиклмнопрстуфхцчшщъыьэюя",
                "ENG": "abcdefghijklmnopqrstuvwxyz"
            },
            "translit": [
                "щ:sch",
                "ш:sh",
                "ю:yu",
                "я:ya",
                "ч:ch",
                "ж:zh",
                "а:a",
                "б:b",
                "в:v",
                "г:g",
                "д:d",
                "е:e",
                "ё:e",
                "з:z",
                "и:i",
                "й:j",
                "к:k",
                "л:l",
                "м:m",
                "н:n",
                "о:o",
                "п:p",
                "р:r",
                "с:s",
                "т:t",
                "у:u",
                "ф:f",
                "х:h",
                "ц:c",
                "ъ:\"",
                "ы:y",
                "ь:'",
                "э:e"
            ],
            "to-EN": {
                "й": "q",
                "ц": "w",
                "у": "e",
                "к": "r",
                "е": "t",
                "н": "y",
                "г": "u",
                "ш": "i",
                "щ": "o",
                "з": "p",
                "х": "[",
                "ъ": "]",
                "ф": "a",
                "ы": "s",
                "в": "d",
                "а": "f",
                "п": "g",
                "р": "h",
                "о": "j",
                "л": "k",
                "д": "l",
                "ж": ";",
                "э": "'",
                "ё": "`",
                "я": "z",
                "ч": "x",
                "с": "c",
                "м": "v",
                "и": "b",
                "т": "n",
                "ь": "m",
                "б": ",",
                "ю": "."
            },
            "en-TO": {
                "q": "й",
                "w": "ц",
                "e": "у",
                "r": "к",
                "t": "е",
                "y": "н",
                "u": "г",
                "i": "ш",
                "o": "щ",
                "p": "з",
                "[": "х",
                "]": "ъ",
                "a": "ф",
                "s": "ы",
                "d": "в",
                "f": "а",
                "g": "п",
                "h": "р",
                "j": "о",
                "k": "л",
                "l": "д",
                ";": "ж",
                "'": "э",
                "`": "ё",
                "z": "я",
                "x": "ч",
                "c": "с",
                "v": "м",
                "b": "и",
                "n": "т",
                "m": "ь",
                ",": "б",
                ".": "ю",
                "{": "х",
                "}": "ъ",
                ":": "ж",
                "\"": "э",
                "<": "б",
                ">": "ю"
            }
        }
    };
    const mockData = [
        {
            "id": 4832406,
            "first_name": "Марина",
            "last_name": "Приданова",
            "sex": 1,
            "nickname": "",
            "domain": "pridanova_marina",
            "photo_50": "https://pp.userapi.com/c840434/v840434110/83b5f/Ba1TWaBCpbU.jpg?ava=1",
            "university": 8351,
            "university_name": "СГСПУ (бывш. ПГСГА, СамГПУ)",
            "faculty": 19495,
            "faculty_name": "Факультет иностранных языков",
            "graduation": 2002,
            "education_form": "Очное отделение",
            "education_status": "Выпускница (специалист)",
            "online": 0
        },
        {
            "id": 5226017,
            "first_name": "Сергей",
            "last_name": "Роменский",
            "sex": 2,
            "nickname": "",
            "domain": "rmnski",
            "photo_50": "https://pp.userapi.com/c622020/v622020017/4b758/m271CWC6ilM.jpg?ava=1",
            "university": 1664,
            "university_name": "СФ МГПУ",
            "faculty": 43151,
            "faculty_name": "Факультет информатики",
            "graduation": 2006,
            "education_form": "Очное отделение",
            "online": 0
        },
        {
            "id": 7098620,
            "first_name": "Юлия",
            "last_name": "Туовила",
            "sex": 1,
            "nickname": "",
            "domain": "id7098620",
            "photo_50": "https://pp.userapi.com/c636221/v636221620/1815f/z-6DUfpWYjI.jpg?ava=1",
            "university": 777,
            "university_name": "СаГА\r\n",
            "faculty": 15933,
            "faculty_name": "Философский факультет",
            "graduation": 0,
            "education_form": "Очное отделение",
            "online": 0
        },
        {
            "id": 9463985,
            "first_name": "Анатолий",
            "last_name": "Герасимов",
            "sex": 2,
            "nickname": "",
            "domain": "am.gerasimov",
            "photo_50": "https://pp.userapi.com/c636223/v636223985/372f4/Nbp-tCch5No.jpg?ava=1",
            "university": 779,
            "university_name": "СГАУ им. Королева",
            "faculty": 3003,
            "faculty_name": "Факультет информатики (6)",
            "graduation": 2014,
            "education_form": "Очное отделение",
            "education_status": "Выпускник (бакалавр)",
            "online": 1
        },
        {
            "id": 9872504,
            "first_name": "Владислав",
            "last_name": "Курочкин",
            "sex": 2,
            "nickname": "",
            "domain": "vlad_0505",
            "photo_50": "https://pp.userapi.com/c639619/v639619504/2f574/nua37r6QCP4.jpg?ava=1",
            "university": 779,
            "university_name": "СГАУ им. Королева",
            "faculty": 3003,
            "faculty_name": "Факультет информатики (6)",
            "graduation": 2018,
            "education_status": "Студент (специалист)",
            "online": 1
        },
        {
            "id": 10716199,
            "first_name": "Мария",
            "last_name": "Ситникова",
            "deactivated": "deleted",
            "domain": "id10716199",
            "sex": 1,
            "photo_50": "https://vk.com/images/deactivated_50.png",
            "online": 0
        },
        {
            "id": 11304792,
            "first_name": "Олеся",
            "last_name": "Тимофеева",
            "sex": 1,
            "nickname": "",
            "domain": "lesyatimofesya",
            "photo_50": "https://pp.userapi.com/c636519/v636519792/2569a/orVObq2RXDA.jpg?ava=1",
            "university": 0,
            "university_name": "",
            "faculty": 0,
            "faculty_name": "",
            "graduation": 0,
            "online": 0
        },
        {
            "id": 12418391,
            "first_name": "Ефим",
            "last_name": "Матыцин",
            "sex": 2,
            "nickname": "",
            "domain": "mr.brazz",
            "photo_50": "https://pp.userapi.com/c627220/v627220391/b177/bopABF4RX2s.jpg?ava=1",
            "online": 0
        },
        {
            "id": 12429069,
            "first_name": "Оксана",
            "last_name": "Пенькова",
            "sex": 1,
            "nickname": "",
            "domain": "id12429069",
            "photo_50": "https://pp.userapi.com/c638929/v638929069/13af3/phb2NxeEeTc.jpg?ava=1",
            "online": 0
        },
        {
            "id": 13278432,
            "first_name": "Игорь",
            "last_name": "Шкоков",
            "sex": 2,
            "nickname": "",
            "domain": "itaurus",
            "photo_50": "https://pp.userapi.com/c627131/v627131432/213f3/UHlTNopksmI.jpg?ava=1",
            "university": 779,
            "university_name": "СГАУ им. Королева",
            "faculty": 2999,
            "faculty_name": "Институт двигателей и энергетических установок (Двигателей летательных аппаратов)",
            "graduation": 2017,
            "education_form": "Очное отделение",
            "education_status": "Студент (специалист)",
            "online": 0
        },
        {
            "id": 14008901,
            "first_name": "Сергей",
            "last_name": "Лысанов",
            "sex": 2,
            "nickname": "",
            "domain": "chocho364",
            "photo_50": "https://pp.userapi.com/c836731/v836731901/4e97d/WRk0ZfCuv7c.jpg?ava=1",
            "online": 0
        },
        {
            "id": 14420915,
            "first_name": "Ольга",
            "last_name": "Омельченко",
            "sex": 1,
            "nickname": "",
            "domain": "olechka_omelchenko",
            "photo_50": "https://pp.userapi.com/c834101/v834101939/fa1ca/D38aJ9PKLFQ.jpg?ava=1",
            "university": 779,
            "university_name": "СГАУ им. Королева",
            "faculty": 3003,
            "faculty_name": "Факультет информатики (6)",
            "graduation": 0,
            "education_form": "Очное отделение",
            "education_status": "Студентка (специалист)",
            "online": 1
        },
        {
            "id": 14701554,
            "first_name": "Юрий",
            "last_name": "Шепелев",
            "sex": 2,
            "nickname": "",
            "domain": "suhargosudar",
            "photo_50": "https://pp.userapi.com/c624726/v624726554/1c40c/TBB1UILOMz0.jpg?ava=1",
            "online": 0
        },
        {
            "id": 16246409,
            "first_name": "Настя",
            "last_name": "Тягаева",
            "sex": 1,
            "nickname": "",
            "domain": "id16246409",
            "photo_50": "https://pp.userapi.com/c425718/v425718409/94ef/8KJhhwFMxdM.jpg?ava=1",
            "university": 1171,
            "university_name": "СамГУ",
            "faculty": 3014,
            "faculty_name": "Юридический",
            "graduation": 2017,
            "education_form": "Заочное отделение",
            "education_status": "Студентка (бакалавр)",
            "online": 0
        },
        {
            "id": 17619040,
            "first_name": "Илья",
            "last_name": "Фёдоров",
            "sex": 2,
            "nickname": "",
            "domain": "life_is_harmful",
            "photo_50": "https://pp.userapi.com/c831108/v831108005/1f2e0/u1t1BbZf3pU.jpg?ava=1",
            "online": 0
        },
        {
            "id": 17971610,
            "first_name": "Никита",
            "last_name": "Синицин",
            "sex": 2,
            "nickname": "",
            "domain": "id17971610",
            "photo_50": "https://pp.userapi.com/c841032/v841032801/11034/jtgbD_dMTvk.jpg?ava=1",
            "university": 779,
            "university_name": "СГАУ им. Королева",
            "faculty": 3003,
            "faculty_name": "Факультет информатики (6)",
            "graduation": 0,
            "online": 0
        },
        {
            "id": 18390177,
            "first_name": "Владимир",
            "last_name": "Батров",
            "sex": 2,
            "nickname": "Геннадьевич",
            "domain": "arikahs",
            "photo_50": "https://pp.userapi.com/c847120/v847120480/4a15f/QV4Ot3VenEM.jpg?ava=1",
            "university": 779,
            "university_name": "СГАУ им. Королева",
            "faculty": 2999,
            "faculty_name": "Институт двигателей и энергетических установок (Двигателей летательных аппаратов)",
            "graduation": 2014,
            "education_form": "Очное отделение",
            "education_status": "Выпускник (специалист)",
            "online": 1
        },
        {
            "id": 18787263,
            "first_name": "Данил",
            "last_name": "Федотов",
            "sex": 2,
            "nickname": "",
            "domain": "id18787263",
            "photo_50": "https://pp.userapi.com/c830400/v830400461/813a5/Tgk0EYnr88M.jpg?ava=1",
            "online": 0
        },
        {
            "id": 18814010,
            "first_name": "Александр",
            "last_name": "Швецов",
            "sex": 2,
            "nickname": "",
            "domain": "id18814010",
            "photo_50": "https://pp.userapi.com/c616117/v616117010/1d077/WCiaGqXrGdY.jpg?ava=1",
            "university": 0,
            "university_name": "",
            "faculty": 0,
            "faculty_name": "",
            "graduation": 0,
            "online": 0
        },
        {
            "id": 19431652,
            "first_name": "Эвальд",
            "last_name": "Гайденрайх",
            "sex": 2,
            "nickname": "",
            "domain": "street_tracer",
            "photo_50": "https://pp.userapi.com/c316121/u19431652/e_13cfbeaf.jpg?ava=1",
            "university": 779,
            "university_name": "СГАУ им. Королева",
            "faculty": 3003,
            "faculty_name": "Факультет информатики (6)",
            "graduation": 2018,
            "education_form": "Очное отделение",
            "education_status": "Абитуриент",
            "online": 1
        },
        {
            "id": 19553090,
            "first_name": "Roma",
            "last_name": "Khimach",
            "sex": 2,
            "nickname": "",
            "domain": "rkhim",
            "photo_50": "https://pp.userapi.com/c623628/v623628090/102f8/nM5d2aiwBK4.jpg?ava=1",
            "university": 0,
            "university_name": "",
            "faculty": 0,
            "faculty_name": "",
            "graduation": 0,
            "online": 1
        },
        {
            "id": 19604387,
            "first_name": "Иван",
            "last_name": "Танаев",
            "sex": 2,
            "nickname": "",
            "domain": "lostoman17",
            "photo_50": "https://pp.userapi.com/c847221/v847221613/24883/tguNo5aKHwI.jpg?ava=1",
            "university": 779,
            "university_name": "СГАУ им. Королева",
            "faculty": 3003,
            "faculty_name": "Факультет информатики (6)",
            "graduation": 2018,
            "education_form": "Очное отделение",
            "education_status": "Выпускник (специалист)",
            "online": 0
        },
        {
            "id": 20245675,
            "first_name": "Женечка",
            "last_name": "Бутузова",
            "sex": 1,
            "nickname": "",
            "domain": "zhe1942",
            "photo_50": "https://pp.userapi.com/c638920/v638920675/45edb/l4-DNwtWU5s.jpg?ava=1",
            "university": 1171,
            "university_name": "СамГУ",
            "faculty": 3013,
            "faculty_name": "Исторический",
            "graduation": 2011,
            "education_form": "Очное отделение",
            "education_status": "Студентка (специалист)",
            "online": 0
        },
        {
            "id": 20519343,
            "first_name": "Валентин",
            "last_name": "Терентьев",
            "sex": 2,
            "nickname": "",
            "domain": "king_seal",
            "photo_50": "https://pp.userapi.com/c626424/v626424343/2c11f/dDeiqAROZa8.jpg?ava=1",
            "university": 1171,
            "university_name": "СамГУ",
            "faculty": 3010,
            "faculty_name": "Механико-математический",
            "graduation": 2016,
            "education_form": "Очное отделение",
            "education_status": "Выпускник (бакалавр)",
            "online": 1
        },
        {
            "id": 20852135,
            "first_name": "Настя",
            "last_name": "Филипенко",
            "sex": 1,
            "nickname": "",
            "domain": "id20852135",
            "photo_50": "https://pp.userapi.com/c830208/v830208069/1382e7/pVdNc5O2vdE.jpg?ava=1",
            "university": 779,
            "university_name": "СГАУ им. Королева",
            "faculty": 3003,
            "faculty_name": "Факультет информатики (6)",
            "graduation": 0,
            "education_form": "Очное отделение",
            "education_status": "Студентка (специалист)",
            "online": 1
        },
        {
            "id": 21629278,
            "first_name": "Татьяна",
            "last_name": "Костикова",
            "sex": 1,
            "nickname": "",
            "domain": "id21629278",
            "photo_50": "https://pp.userapi.com/c638825/v638825278/3cb26/eMqEESoUBEo.jpg?ava=1",
            "university": 779,
            "university_name": "СГАУ им. Королева",
            "faculty": 3002,
            "faculty_name": "Институт электроники и приборостроения (Радиотехнический)",
            "graduation": 0,
            "education_form": "Очное отделение",
            "education_status": "Студентка (бакалавр)",
            "online": 0
        },
        {
            "id": 21764502,
            "first_name": "Никита",
            "last_name": "Филиппов",
            "sex": 2,
            "nickname": "",
            "domain": "nick.filippov",
            "photo_50": "https://pp.userapi.com/c836539/v836539502/9142/ENUBcSPcs-g.jpg?ava=1",
            "online": 0
        },
        {
            "id": 22049873,
            "first_name": "Олег",
            "last_name": "Дубровский",
            "sex": 2,
            "nickname": "",
            "domain": "kadackiy153642",
            "photo_50": "https://pp.userapi.com/c844724/v844724885/6285a/zqazTEFCQMU.jpg?ava=1",
            "university": 1171,
            "university_name": "СамГУ",
            "faculty": 3014,
            "faculty_name": "Юридический",
            "graduation": 0,
            "online": 1
        },
        {
            "id": 22569203,
            "first_name": "Марина",
            "last_name": "Филимонова",
            "sex": 1,
            "nickname": "",
            "domain": "id22569203",
            "photo_50": "https://pp.userapi.com/c841525/v841525346/51c26/XY2JMwJsHrU.jpg?ava=1",
            "university": 8351,
            "university_name": "СГСПУ (бывш. ПГСГА, СамГПУ)",
            "faculty": 27511,
            "faculty_name": "Факультет экономики, управления и сервиса",
            "graduation": 2011,
            "education_form": "Очное отделение",
            "education_status": "Студентка (специалист)",
            "online": 0
        },
        {
            "id": 22875619,
            "first_name": "Александр",
            "last_name": "Кокуркин",
            "sex": 2,
            "nickname": "",
            "domain": "kokurkin163",
            "photo_50": "https://pp.userapi.com/c836721/v836721619/df79/hJqEkx9BHu8.jpg?ava=1",
            "university": 0,
            "university_name": "",
            "faculty": 0,
            "faculty_name": "",
            "graduation": 0,
            "online": 0
        },
        {
            "id": 23270539,
            "first_name": "Маргарита",
            "last_name": "Зинковская",
            "sex": 1,
            "nickname": "",
            "domain": "margaritazinkovskaya",
            "photo_50": "https://pp.userapi.com/c841023/v841023674/7a18f/NMOW4Fji-Do.jpg?ava=1",
            "university": 4200,
            "university_name": "СГЭУ",
            "faculty": 38348,
            "faculty_name": "Заочный факультет",
            "graduation": 2011,
            "education_form": "Заочное отделение",
            "education_status": "Выпускница (специалист)",
            "online": 0
        },
        {
            "id": 24510150,
            "first_name": "Татьяна",
            "last_name": "Андросова",
            "sex": 1,
            "nickname": "",
            "domain": "androsovatati",
            "photo_50": "https://pp.userapi.com/c848528/v848528257/141b4/d-hyNI4tC54.jpg?ava=1",
            "university": 779,
            "university_name": "СГАУ им. Королева",
            "faculty": 3003,
            "faculty_name": "Факультет информатики (6)",
            "graduation": 0,
            "education_form": "Очное отделение",
            "education_status": "Выпускница (специалист)",
            "online": 1
        },
        {
            "id": 24672070,
            "first_name": "Александр",
            "last_name": "Македонский",
            "sex": 2,
            "nickname": "",
            "domain": "id24672070",
            "photo_50": "https://pp.userapi.com/c620424/v620424070/19c66/u-ZFzkNtsew.jpg?ava=1",
            "online": 1
        },
        {
            "id": 26454754,
            "first_name": "Даниела",
            "last_name": "Миллер",
            "sex": 1,
            "nickname": "",
            "domain": "id26454754",
            "photo_50": "https://pp.userapi.com/c619625/v619625754/e253/mVTfQ-t1_m0.jpg?ava=1",
            "university": 405803,
            "university_name": "Helsingin yliopisto (University of Helsinki)",
            "faculty": 106316,
            "faculty_name": "Valtiotieteellinen tiedekunta (Faculty of Social Sciences)",
            "graduation": 0,
            "online": 0
        },
        {
            "id": 27090631,
            "first_name": "Kokc",
            "last_name": "Hjh",
            "sex": 2,
            "nickname": "",
            "domain": "elkokc",
            "photo_50": "https://pp.userapi.com/c403524/v403524631/74ea/GhpqJx5nocM.jpg?ava=1",
            "university": 0,
            "university_name": "",
            "faculty": 0,
            "faculty_name": "",
            "graduation": 0,
            "online": 0
        },
        {
            "id": 27237607,
            "first_name": "Анастасия",
            "last_name": "Бунтилова",
            "sex": 1,
            "nickname": "",
            "domain": "neesty",
            "photo_50": "https://sun9-5.userapi.com/c840628/v840628151/8a9e5/WbVyou4DrpY.jpg?ava=1",
            "university": 780,
            "university_name": "СамГМУ",
            "faculty": 5353,
            "faculty_name": "Стоматологический факультет",
            "graduation": 2018,
            "education_form": "Очное отделение",
            "education_status": "Выпускница (специалист)",
            "online": 1
        },
        {
            "id": 27835446,
            "first_name": "Сергей",
            "last_name": "Абрамович",
            "sex": 2,
            "nickname": "",
            "domain": "abramovich163",
            "photo_50": "https://pp.userapi.com/c637931/v637931446/3ec40/lf7Ykss7tGg.jpg?ava=1",
            "online": 1
        },
        {
            "id": 28499999,
            "first_name": "Сергей",
            "last_name": "Степанов",
            "sex": 2,
            "nickname": "ϟజ్ఞ\u200cా",
            "domain": "stepanov__s",
            "photo_50": "https://pp.userapi.com/c631623/v631623999/2488/DyqFdEfvkqw.jpg?ava=1",
            "university": 779,
            "university_name": "СГАУ им. Королева",
            "faculty": 3003,
            "faculty_name": "Факультет информатики (6)",
            "graduation": 2017,
            "education_form": "Очное отделение",
            "education_status": "Студент (бакалавр)",
            "online": 0
        },
        {
            "id": 29048870,
            "first_name": "Александр",
            "last_name": "Бабицкий",
            "sex": 2,
            "nickname": "",
            "domain": "sasha631",
            "photo_50": "https://pp.userapi.com/c636316/v636316870/49992/x0ITg6Yr1V0.jpg?ava=1",
            "university": 782,
            "university_name": "СамГТУ",
            "faculty": 2991,
            "faculty_name": "Нефтетехнологический факультет",
            "graduation": 2016,
            "education_form": "Очное отделение",
            "education_status": "Студент (магистр)",
            "online": 0
        },
        {
            "id": 29300305,
            "first_name": "Ринат",
            "last_name": "Закиров",
            "sex": 2,
            "nickname": "rinat_smile",
            "domain": "rinat_smile",
            "photo_50": "https://pp.userapi.com/c625416/v625416305/46433/vf7Lew5aML4.jpg?ava=1",
            "online": 0
        },
        {
            "id": 29372331,
            "first_name": "Влад",
            "last_name": "Швейкин",
            "sex": 2,
            "nickname": "",
            "domain": "shveykinvlad",
            "photo_50": "https://pp.userapi.com/c624125/v624125331/4c968/_T3NMTyq-0U.jpg?ava=1",
            "university": 779,
            "university_name": "СГАУ им. Королева",
            "faculty": 3003,
            "faculty_name": "Факультет информатики (6)",
            "graduation": 2018,
            "education_form": "Очное отделение",
            "education_status": "Студент (специалист)",
            "online": 0
        },
        {
            "id": 29540867,
            "first_name": "Настя",
            "last_name": "Яшкова",
            "sex": 1,
            "nickname": "",
            "domain": "yashkova_a_k",
            "photo_50": "https://pp.userapi.com/c836324/v836324150/45774/NL_2WCiBjrA.jpg?ava=1",
            "university": 779,
            "university_name": "СГАУ им. Королева",
            "faculty": 0,
            "faculty_name": "",
            "graduation": 0,
            "online": 0
        },
        {
            "id": 31804438,
            "first_name": "Кирилл",
            "last_name": "Денисов",
            "sex": 2,
            "nickname": "",
            "domain": "kirill___denisov",
            "photo_50": "https://pp.userapi.com/c638222/v638222660/58730/IXMHzb2lFOI.jpg?ava=1",
            "university": 0,
            "university_name": "",
            "faculty": 0,
            "faculty_name": "",
            "graduation": 0,
            "online": 0
        },
        {
            "id": 31965699,
            "first_name": "Дмитрий",
            "last_name": "Лыткин",
            "sex": 2,
            "nickname": "",
            "domain": "dmitriy_lytkin",
            "photo_50": "https://pp.userapi.com/c841526/v841526151/4c217/3zBdjEJveWA.jpg?ava=1",
            "university": 779,
            "university_name": "СГАУ им. Королева",
            "faculty": 3003,
            "faculty_name": "Факультет информатики (6)",
            "graduation": 2017,
            "education_form": "Очное отделение",
            "education_status": "Студент (бакалавр)",
            "online": 0
        },
        {
            "id": 32269928,
            "first_name": "Людмила",
            "last_name": "Тишкина",
            "sex": 1,
            "nickname": "",
            "domain": "lusyatishkina",
            "photo_50": "https://pp.userapi.com/c624630/v624630928/1e872/gF6bWKcVLvE.jpg?ava=1",
            "online": 0
        },
        {
            "id": 33170494,
            "first_name": "Илья",
            "last_name": "Константинов",
            "sex": 2,
            "nickname": "",
            "domain": "marcus.rise",
            "photo_50": "https://pp.userapi.com/c620621/v620621619/20df2/Hgk6vznpjgU.jpg?ava=1",
            "university": 779,
            "university_name": "СГАУ им. Королева",
            "faculty": 3003,
            "faculty_name": "Факультет информатики (6)",
            "graduation": 2017,
            "education_form": "Очное отделение",
            "education_status": "Выпускник (бакалавр)",
            "online": 0
        },
        {
            "id": 34183912,
            "first_name": "Ирина",
            "last_name": "Сотникова",
            "sex": 1,
            "nickname": "",
            "domain": "s_irka_k",
            "photo_50": "https://pp.userapi.com/c637426/v637426925/586d3/1uTBUvbQlzY.jpg?ava=1",
            "university": 779,
            "university_name": "СГАУ им. Королева",
            "faculty": 3003,
            "faculty_name": "Факультет информатики (6)",
            "graduation": 2018,
            "education_form": "Очное отделение",
            "education_status": "Студентка (специалист)",
            "online": 0
        },
        {
            "id": 34670329,
            "first_name": "Мария",
            "last_name": "Бубнова",
            "sex": 1,
            "nickname": "",
            "domain": "id34670329",
            "photo_50": "https://pp.userapi.com/c824504/v824504427/146a2a/M2KPsk74Inw.jpg?ava=1",
            "university": 0,
            "university_name": "",
            "faculty": 0,
            "faculty_name": "",
            "graduation": 0,
            "online": 0
        },
        {
            "id": 35149987,
            "first_name": "Артем",
            "last_name": "Навоян",
            "sex": 2,
            "nickname": "",
            "domain": "anavoyan",
            "photo_50": "https://pp.userapi.com/c847123/v847123724/7cf6b/VRW0cUEENco.jpg?ava=1",
            "university": 846,
            "university_name": "ТГУ (бывш. ТолПИ, филиал СГПУ)",
            "faculty": 84090,
            "faculty_name": "Институт права",
            "graduation": 0,
            "online": 1
        },
        {
            "id": 36347386,
            "first_name": "Николай",
            "last_name": "Логинов",
            "sex": 2,
            "nickname": "",
            "domain": "id36347386",
            "photo_50": "https://pp.userapi.com/c626730/v626730386/361dc/8A-n6SPWQ_w.jpg?ava=1",
            "university": 782,
            "university_name": "СамГТУ",
            "faculty": 2995,
            "faculty_name": "Инженерно-технологический факультет",
            "graduation": 2015,
            "education_form": "Очное отделение",
            "education_status": "Студент (специалист)",
            "online": 0
        },
        {
            "id": 37020387,
            "first_name": "Илья",
            "last_name": "Флуераш",
            "sex": 2,
            "nickname": "",
            "domain": "ilflilfl",
            "photo_50": "https://pp.userapi.com/c845421/v845421846/1ebe5/5-b7ttFklQo.jpg?ava=1",
            "university": 779,
            "university_name": "СГАУ им. Королева",
            "faculty": 3002,
            "faculty_name": "Институт электроники и приборостроения (Радиотехнический)",
            "graduation": 0,
            "online": 0
        },
        {
            "id": 37905297,
            "first_name": "Костя",
            "last_name": "Панарин",
            "sex": 2,
            "nickname": "",
            "domain": "id37905297",
            "photo_50": "https://pp.userapi.com/c846219/v846219297/3c89a/xWBDhWC7hfA.jpg?ava=1",
            "university": 779,
            "university_name": "СГАУ им. Королева",
            "faculty": 3003,
            "faculty_name": "Факультет информатики (6)",
            "graduation": 2015,
            "education_form": "Очное отделение",
            "education_status": "Абитуриент",
            "online": 1
        },
        {
            "id": 38030572,
            "first_name": "Никита",
            "last_name": "Матвеев",
            "sex": 2,
            "nickname": "",
            "domain": "far_strike",
            "photo_50": "https://pp.userapi.com/c638621/v638621572/3bf62/aAkmZIRpS8A.jpg?ava=1",
            "university": 779,
            "university_name": "СГАУ им. Королева",
            "faculty": 2998,
            "faculty_name": "Институт авиационной техники (Летательных аппаратов, Инженеров воздушного транспорта)",
            "graduation": 0,
            "education_form": "Очное отделение",
            "education_status": "Студент (специалист)",
            "online": 0
        },
        {
            "id": 39084641,
            "first_name": "Ольга",
            "last_name": "Моссоулина",
            "sex": 1,
            "nickname": "",
            "domain": "mossoulina",
            "photo_50": "https://pp.userapi.com/c846417/v846417307/6dae5/sJzEjjQnWmk.jpg?ava=1",
            "university": 779,
            "university_name": "СГАУ им. Королева",
            "faculty": 3003,
            "faculty_name": "Факультет информатики (6)",
            "graduation": 2017,
            "education_form": "Очное отделение",
            "education_status": "Студентка (бакалавр)",
            "online": 0
        },
        {
            "id": 39793144,
            "first_name": "Игорь",
            "last_name": "Еськин",
            "sex": 2,
            "nickname": "Владимирович",
            "domain": "igor694",
            "photo_50": "https://pp.userapi.com/c837523/v837523918/58f33/REKYPogtAkw.jpg?ava=1",
            "university": 6028,
            "university_name": "АСА СамГТУ (бывш. СГАСУ)",
            "faculty": 13293,
            "faculty_name": "Факультет инженерных систем и природоохранного строительства",
            "graduation": 0,
            "education_form": "Очное отделение",
            "education_status": "Студент (бакалавр)",
            "online": 0
        },
        {
            "id": 40502284,
            "first_name": "Юлия",
            "last_name": "Пономаренко",
            "sex": 1,
            "nickname": "",
            "domain": "darlingjulia",
            "photo_50": "https://pp.userapi.com/c834102/v834102586/679cd/7jFch9EwpMI.jpg?ava=1",
            "online": 0
        },
        {
            "id": 40811746,
            "first_name": "Анна",
            "last_name": "Сахнова",
            "sex": 1,
            "nickname": "",
            "domain": "id40811746",
            "photo_50": "https://pp.userapi.com/c834304/v834304306/86e12/xYiimlRnBdU.jpg?ava=1",
            "university": 67,
            "university_name": "ФИНЭК",
            "faculty": 0,
            "faculty_name": "",
            "graduation": 0,
            "online": 0
        },
        {
            "id": 41633450,
            "first_name": "Андрей",
            "last_name": "Высоцкий",
            "sex": 2,
            "nickname": "",
            "domain": "id41633450",
            "photo_50": "https://pp.userapi.com/c639228/v639228213/5c05f/20ZsCWp8yJo.jpg?ava=1",
            "university": 0,
            "university_name": "",
            "faculty": 0,
            "faculty_name": "",
            "graduation": 0,
            "online": 0
        },
        {
            "id": 43419264,
            "first_name": "Дмитрий",
            "last_name": "Резванов",
            "sex": 2,
            "nickname": "",
            "domain": "rezvanov56",
            "photo_50": "https://pp.userapi.com/c846523/v846523842/68e9b/1QkmPSbpPa8.jpg?ava=1",
            "online": 1
        },
        {
            "id": 45189370,
            "first_name": "Стас",
            "last_name": "Скупченко",
            "sex": 2,
            "nickname": "",
            "domain": "id45189370",
            "photo_50": "https://pp.userapi.com/c847121/v847121768/4387b/8G1xUVL2gh4.jpg?ava=1",
            "online": 0
        },
        {
            "id": 45616368,
            "first_name": "Андрей",
            "last_name": "Нестеренко",
            "sex": 2,
            "nickname": "",
            "domain": "id45616368",
            "photo_50": "https://pp.userapi.com/c831208/v831208338/12348d/Ra-LPeZo_bs.jpg?ava=1",
            "university": 0,
            "university_name": "",
            "faculty": 0,
            "faculty_name": "",
            "graduation": 0,
            "online": 0
        },
        {
            "id": 45665151,
            "first_name": "Татьяна",
            "last_name": "Горбунова",
            "sex": 1,
            "nickname": "",
            "domain": "id45665151",
            "photo_50": "https://pp.userapi.com/c824410/v824410065/16af3b/Um3CzKeiF4o.jpg?ava=1",
            "university": 780,
            "university_name": "СамГМУ",
            "faculty": 5353,
            "faculty_name": "Стоматологический факультет",
            "graduation": 2018,
            "online": 0
        },
        {
            "id": 46277943,
            "first_name": "Karolina",
            "last_name": "Miller",
            "sex": 1,
            "nickname": "",
            "domain": "karolinamiller2015",
            "photo_50": "https://pp.userapi.com/c627225/v627225943/73c3/aNGJuibWbPQ.jpg?ava=1",
            "university": 405803,
            "university_name": "Helsingin yliopisto (University of Helsinki)",
            "faculty": 106316,
            "faculty_name": "Valtiotieteellinen tiedekunta (Faculty of Social Sciences)",
            "graduation": 0,
            "online": 0
        },
        {
            "id": 46443612,
            "first_name": "Евгений",
            "last_name": "Акиньшин",
            "sex": 2,
            "nickname": "",
            "domain": "yurezhev",
            "photo_50": "https://pp.userapi.com/c846521/v846521502/3c591/4fRyjHJpuag.jpg?ava=1",
            "university": 779,
            "university_name": "СГАУ им. Королева",
            "faculty": 0,
            "faculty_name": "",
            "graduation": 0,
            "education_form": "Очное отделение",
            "education_status": "Студент (специалист)",
            "online": 0
        },
        {
            "id": 46455555,
            "first_name": "Тимофей",
            "last_name": "Ерилкин",
            "sex": 2,
            "nickname": "",
            "domain": "id46455555",
            "photo_50": "https://pp.userapi.com/c410616/v410616555/9bcd/JTHn-0iB5ZA.jpg?ava=1",
            "university": 779,
            "university_name": "СГАУ им. Королева",
            "faculty": 3003,
            "faculty_name": "Факультет информатики (6)",
            "graduation": 2017,
            "education_form": "Очное отделение",
            "education_status": "Студент (бакалавр)",
            "online": 1
        },
        {
            "id": 46689804,
            "first_name": "Екатерина",
            "last_name": "Алексина",
            "sex": 1,
            "nickname": "",
            "domain": "katyaleksina",
            "photo_50": "https://pp.userapi.com/c638719/v638719063/61549/08YTol0GjI4.jpg?ava=1",
            "university": 779,
            "university_name": "СГАУ им. Королева",
            "faculty": 38353,
            "faculty_name": "Инженерно-технологический факультет (4)",
            "graduation": 2017,
            "online": 1
        },
        {
            "id": 48053289,
            "first_name": "Андрей",
            "last_name": "Павельев",
            "sex": 2,
            "nickname": "",
            "domain": "pavelevandrei",
            "photo_50": "https://pp.userapi.com/c638020/v638020289/3d8a7/xXFqxsuTeLQ.jpg?ava=1",
            "university": 0,
            "university_name": "",
            "faculty": 0,
            "faculty_name": "",
            "graduation": 0,
            "online": 0
        },
        {
            "id": 48720925,
            "first_name": "Максим",
            "last_name": "Аверкиев-Круковский",
            "sex": 2,
            "nickname": "",
            "domain": "aver.maks",
            "photo_50": "https://pp.userapi.com/c626623/v626623925/3c834/aBStGtBd7Rs.jpg?ava=1",
            "university": 779,
            "university_name": "СГАУ им. Королева",
            "faculty": 3003,
            "faculty_name": "Факультет информатики (6)",
            "graduation": 2017,
            "education_form": "Очное отделение",
            "education_status": "Студент (бакалавр)",
            "online": 1
        },
        {
            "id": 49208607,
            "first_name": "Екатерина",
            "last_name": "Романова",
            "sex": 1,
            "nickname": "",
            "domain": "id_4_9208607",
            "photo_50": "https://pp.userapi.com/c840724/v840724574/4d80f/EGwPH3KWpR8.jpg?ava=1",
            "university": 779,
            "university_name": "СГАУ им. Королева",
            "faculty": 0,
            "faculty_name": "",
            "graduation": 0,
            "online": 1
        },
        {
            "id": 49905926,
            "first_name": "Никита",
            "last_name": "Богомолов",
            "sex": 2,
            "nickname": "",
            "domain": "nicerton",
            "photo_50": "https://pp.userapi.com/c624429/v624429926/32c57/iX6sEyDB7lw.jpg?ava=1",
            "university": 779,
            "university_name": "СГАУ им. Королева",
            "faculty": 3003,
            "faculty_name": "Факультет информатики (6)",
            "graduation": 0,
            "education_form": "Очное отделение",
            "education_status": "Студент (специалист)",
            "online": 0
        },
        {
            "id": 52357930,
            "first_name": "Жека",
            "last_name": "Решетников",
            "sex": 2,
            "nickname": "",
            "domain": "errb13",
            "photo_50": "https://pp.userapi.com/c629520/v629520930/236f8/WFfaNJXolK8.jpg?ava=1",
            "university": 348,
            "university_name": "Финансовый университет при Правительстве РФ (бывш. ФА при Правительстве РФ)",
            "faculty": 1043464,
            "faculty_name": "Юридический факультет",
            "graduation": 0,
            "education_form": "Очное отделение",
            "education_status": "Студент (бакалавр)",
            "online": 0
        },
        {
            "id": 52761917,
            "first_name": "Яночка",
            "last_name": "Гнутова",
            "sex": 1,
            "nickname": "",
            "domain": "id52761917",
            "photo_50": "https://pp.userapi.com/c841239/v841239829/6e27f/-ByKlIe6R0I.jpg?ava=1",
            "university": 779,
            "university_name": "СГАУ им. Королева",
            "faculty": 3003,
            "faculty_name": "Факультет информатики (6)",
            "graduation": 0,
            "education_form": "Очное отделение",
            "education_status": "Студентка (специалист)",
            "online": 0
        },
        {
            "id": 54272452,
            "first_name": "Александр",
            "last_name": "Моисеев",
            "sex": 2,
            "nickname": "",
            "domain": "moiseev_17",
            "photo_50": "https://pp.userapi.com/c639829/v639829379/59073/myxv3qEvzbI.jpg?ava=1",
            "university": 779,
            "university_name": "СГАУ им. Королева",
            "faculty": 0,
            "faculty_name": "",
            "graduation": 0,
            "online": 1
        },
        {
            "id": 55674082,
            "first_name": "Николай",
            "last_name": "Воронин",
            "sex": 2,
            "nickname": "",
            "domain": "k2049888",
            "photo_50": "https://pp.userapi.com/c834203/v834203964/5587e/YG9xzL2VsBU.jpg?ava=1",
            "university": 6028,
            "university_name": "АСА СамГТУ (бывш. СГАСУ)",
            "faculty": 13711,
            "faculty_name": "Строительно-технологический факультет (бывш. Транспортного и городского строительства и Строительно-технологический)",
            "graduation": 2019,
            "education_form": "Очное отделение",
            "education_status": "Студент (специалист)",
            "online": 0
        },
        {
            "id": 58213271,
            "first_name": "Катюшка",
            "last_name": "Шутова",
            "sex": 1,
            "nickname": "",
            "domain": "id58213271",
            "photo_50": "https://pp.userapi.com/c834303/v834303937/11dd98/G1ZRQcsHxAQ.jpg?ava=1",
            "university": 1664,
            "university_name": "СФ МГПУ",
            "faculty": 166083,
            "faculty_name": "Факультет экономики, социологии и менеджмента",
            "graduation": 2014,
            "online": 0
        },
        {
            "id": 58719105,
            "first_name": "Катерина",
            "last_name": "Панова",
            "sex": 1,
            "nickname": "",
            "domain": "id58719105",
            "photo_50": "https://pp.userapi.com/c639131/v639131808/517f5/vK2I920pnPc.jpg?ava=1",
            "university": 779,
            "university_name": "СГАУ им. Королева",
            "faculty": 3003,
            "faculty_name": "Факультет информатики (6)",
            "graduation": 2017,
            "education_status": "Выпускница (бакалавр)",
            "online": 1
        },
        {
            "id": 59036340,
            "first_name": "Елена",
            "last_name": "Репная",
            "sex": 1,
            "nickname": "",
            "domain": "elenarepnaia",
            "photo_50": "https://pp.userapi.com/c847217/v847217523/61604/-oYwH8wLRec.jpg?ava=1",
            "university": 779,
            "university_name": "СГАУ им. Королева",
            "faculty": 3003,
            "faculty_name": "Факультет информатики (6)",
            "graduation": 2017,
            "education_form": "Очное отделение",
            "education_status": "Студентка (бакалавр)",
            "online": 1
        },
        {
            "id": 60671288,
            "first_name": "Стас",
            "last_name": "Завгородний",
            "sex": 2,
            "nickname": "",
            "domain": "audiracer",
            "photo_50": "https://pp.userapi.com/c630528/v630528288/2c18d/gNS-xZBVfDw.jpg?ava=1",
            "university": 779,
            "university_name": "СГАУ им. Королева",
            "faculty": 3003,
            "faculty_name": "Факультет информатики (6)",
            "graduation": 0,
            "online": 0
        },
        {
            "id": 60973426,
            "first_name": "Наталья",
            "last_name": "Уколова",
            "sex": 1,
            "nickname": "",
            "domain": "id60973426",
            "photo_50": "https://pp.userapi.com/c638416/v638416426/40cc9/HIkm2BhWV24.jpg?ava=1",
            "online": 0
        },
        {
            "id": 61745764,
            "first_name": "Полина",
            "last_name": "Новикова",
            "sex": 1,
            "nickname": "",
            "domain": "id61745764",
            "photo_50": "https://pp.userapi.com/c638023/v638023590/64b60/dUUur0xCbaw.jpg?ava=1",
            "university": 779,
            "university_name": "СГАУ им. Королева",
            "faculty": 2186051,
            "faculty_name": "Институт ракетно-космической техники (Летательных аппаратов)",
            "graduation": 0,
            "online": 0
        },
        {
            "id": 62247713,
            "first_name": "Игорь",
            "last_name": "Карнилов",
            "sex": 2,
            "nickname": "",
            "domain": "id62247713",
            "photo_50": "https://pp.userapi.com/c630720/v630720713/1b402/Z-RuYBPj8BI.jpg?ava=1",
            "university": 0,
            "university_name": "",
            "faculty": 0,
            "faculty_name": "",
            "graduation": 0,
            "online": 0
        },
        {
            "id": 63188835,
            "first_name": "Виктория",
            "last_name": "Пондина",
            "sex": 1,
            "nickname": "",
            "domain": "id63188835",
            "photo_50": "https://pp.userapi.com/c837527/v837527829/5163a/ScuxpVP18B4.jpg?ava=1",
            "university": 0,
            "university_name": "",
            "faculty": 0,
            "faculty_name": "",
            "graduation": 0,
            "online": 0
        },
        {
            "id": 63388860,
            "first_name": "Владислав",
            "last_name": "Осипов",
            "sex": 2,
            "nickname": "",
            "domain": "osipov_vladislav",
            "photo_50": "https://pp.userapi.com/c633226/v633226860/39704/OuUcp-5qI6A.jpg?ava=1",
            "university": 0,
            "university_name": "",
            "faculty": 0,
            "faculty_name": "",
            "graduation": 0,
            "online": 0
        },
        {
            "id": 65082121,
            "first_name": "Алексей",
            "last_name": "Мудрик",
            "sex": 2,
            "nickname": "",
            "domain": "id65082121",
            "photo_50": "https://pp.userapi.com/c847018/v847018715/1e457/340OcbkWBgA.jpg?ava=1",
            "university": 779,
            "university_name": "СГАУ им. Королева",
            "faculty": 2998,
            "faculty_name": "Институт авиационной техники (Летательных аппаратов, Инженеров воздушного транспорта)",
            "graduation": 0,
            "education_form": "Очное отделение",
            "online": 0
        },
        {
            "id": 65687945,
            "first_name": "Наташа",
            "last_name": "Панкова",
            "sex": 1,
            "nickname": "",
            "domain": "id65687945",
            "photo_50": "https://pp.userapi.com/c631917/v631917945/2ca62/D4aTi6b0N_o.jpg?ava=1",
            "university": 779,
            "university_name": "СГАУ им. Королева",
            "faculty": 3003,
            "faculty_name": "Факультет информатики (6)",
            "graduation": 2018,
            "education_form": "Очное отделение",
            "education_status": "Студентка (специалист)",
            "online": 0
        },
        {
            "id": 65848429,
            "first_name": "Дмитрий",
            "last_name": "Рассадин",
            "sex": 2,
            "nickname": "",
            "domain": "id65848429",
            "photo_50": "https://pp.userapi.com/c622716/v622716429/4ebe2/J_yGCvX2zvw.jpg?ava=1",
            "university": 779,
            "university_name": "СГАУ им. Королева",
            "faculty": 3003,
            "faculty_name": "Факультет информатики (6)",
            "graduation": 2015,
            "education_form": "Очное отделение",
            "education_status": "Студент (специалист)",
            "online": 0
        },
        {
            "id": 66031433,
            "first_name": "Илья",
            "last_name": "Халаев",
            "sex": 2,
            "nickname": "",
            "domain": "id66031433",
            "photo_50": "https://pp.userapi.com/c11471/v11471433/c52/RsUaNhiHS8M.jpg?ava=1",
            "university": 0,
            "university_name": "",
            "faculty": 0,
            "faculty_name": "",
            "graduation": 0,
            "online": 0
        },
        {
            "id": 66288464,
            "first_name": "Юлия",
            "last_name": "Горшкова",
            "sex": 1,
            "nickname": "",
            "domain": "id66288464",
            "photo_50": "https://pp.userapi.com/c636631/v636631464/5c8ba/XSdXy5IRHP4.jpg?ava=1",
            "online": 0
        },
        {
            "id": 66618114,
            "first_name": "Наталья",
            "last_name": "Рзянина",
            "sex": 1,
            "nickname": "",
            "domain": "id66618114",
            "photo_50": "https://pp.userapi.com/c824201/v824201901/d0591/PwMUjczacKw.jpg?ava=1",
            "university": 4200,
            "university_name": "СГЭУ",
            "faculty": 0,
            "faculty_name": "",
            "graduation": 0,
            "education_form": "Заочное отделение",
            "online": 0
        },
        {
            "id": 68311228,
            "first_name": "Алексей",
            "last_name": "Чариков",
            "sex": 2,
            "nickname": "",
            "domain": "id68311228",
            "photo_50": "https://pp.userapi.com/c841521/v841521178/679b0/Zo0C57nAwMw.jpg?ava=1",
            "university": 782,
            "university_name": "СамГТУ",
            "faculty": 2989,
            "faculty_name": "Факультет машиностроения, металлургии и транспорта (бывш. Машиностроения и автомобильного транспорта, Физико-технологический)",
            "graduation": 2017,
            "education_status": "Студент (бакалавр)",
            "online": 1
        },
        {
            "id": 68311842,
            "first_name": "Никита",
            "last_name": "Копейко",
            "sex": 2,
            "nickname": "",
            "domain": "id68311842",
            "photo_50": "https://pp.userapi.com/c841132/v841132927/2824b/RfSqJEMe6-U.jpg?ava=1",
            "university": 1163162,
            "university_name": "American University",
            "faculty": 817396,
            "faculty_name": "School of International Service",
            "graduation": 2012,
            "education_form": "Очное отделение",
            "education_status": "Студент (специалист)",
            "online": 0
        },
        {
            "id": 72802092,
            "first_name": "Дмитрий",
            "last_name": "Пигарёв",
            "sex": 2,
            "nickname": "",
            "domain": "id72802092",
            "photo_50": "https://pp.userapi.com/c840530/v840530579/779c5/MSRwXX1Qanw.jpg?ava=1",
            "online": 0
        },
        {
            "id": 73022269,
            "first_name": "Николай",
            "last_name": "Горбатов",
            "sex": 2,
            "nickname": "",
            "domain": "id0000001l",
            "photo_50": "https://pp.userapi.com/c846522/v846522353/83870/z_C0GUZacM4.jpg?ava=1",
            "university": 0,
            "university_name": "",
            "faculty": 0,
            "faculty_name": "",
            "graduation": 0,
            "online": 0
        },
        {
            "id": 74244702,
            "first_name": "Влад",
            "last_name": "Скупченко",
            "deactivated": "deleted",
            "domain": "id74244702",
            "sex": 2,
            "photo_50": "https://vk.com/images/deactivated_50.png",
            "online": 0
        },
        {
            "id": 75886495,
            "first_name": "Роман",
            "last_name": "Чернов",
            "sex": 2,
            "nickname": "",
            "domain": "jouret",
            "photo_50": "https://pp.userapi.com/c633720/v633720495/18532/Zwo1-WjWbng.jpg?ava=1",
            "online": 1
        },
        {
            "id": 76201141,
            "first_name": "Евгений",
            "last_name": "Иванушкин",
            "sex": 2,
            "nickname": "",
            "domain": "sundriver",
            "photo_50": "https://pp.userapi.com/c840224/v840224024/287ee/_bLjAKoqxDY.jpg?ava=1",
            "university": 779,
            "university_name": "СГАУ им. Королева",
            "faculty": 3003,
            "faculty_name": "Факультет информатики (6)",
            "graduation": 0,
            "online": 0
        },
        {
            "id": 80220092,
            "first_name": "Денис",
            "last_name": "Князев",
            "sex": 2,
            "nickname": "PrimankaDEN",
            "domain": "primankaden",
            "photo_50": "https://pp.userapi.com/c840131/v840131709/7973a/-nJpdXhEq_s.jpg?ava=1",
            "university": 779,
            "university_name": "СГАУ им. Королева",
            "faculty": 3003,
            "faculty_name": "Факультет информатики (6)",
            "graduation": 2017,
            "education_status": "Студент (специалист)",
            "online": 0
        },
        {
            "id": 82198630,
            "first_name": "Василий",
            "last_name": "Горячев",
            "sex": 2,
            "nickname": "",
            "domain": "id82198630",
            "photo_50": "https://pp.userapi.com/c841331/v841331301/1a90d/HkXXq2Thyzk.jpg?ava=1",
            "university": 779,
            "university_name": "СГАУ им. Королева",
            "faculty": 3003,
            "faculty_name": "Факультет информатики (6)",
            "graduation": 2017,
            "education_form": "Очное отделение",
            "education_status": "Выпускник (бакалавр)",
            "online": 0
        },
        {
            "id": 82862855,
            "first_name": "Георгий",
            "last_name": "Катиркин",
            "sex": 2,
            "nickname": "",
            "domain": "ekatirkin",
            "photo_50": "https://pp.userapi.com/c638621/v638621855/e478/qIb3ljFeSWY.jpg?ava=1",
            "online": 1
        },
        {
            "id": 84263940,
            "first_name": "Светлана",
            "last_name": "Яковенко",
            "sex": 1,
            "nickname": "",
            "domain": "id84263940",
            "photo_50": "https://pp.userapi.com/c844618/v844618707/4fbc1/ksO7hYK6x1M.jpg?ava=1",
            "university": 6698,
            "university_name": "СГСХА",
            "faculty": 13473,
            "faculty_name": "Экономический факультет",
            "graduation": 2017,
            "education_form": "Очное отделение",
            "education_status": "Студентка (бакалавр)",
            "online": 0
        },
        {
            "id": 84347119,
            "first_name": "Александр",
            "last_name": "Жуков",
            "sex": 2,
            "nickname": "",
            "domain": "zalelx",
            "photo_50": "https://pp.userapi.com/c617827/v617827119/5ac/uzuEcgOpDTg.jpg?ava=1",
            "university": 779,
            "university_name": "СГАУ им. Королева",
            "faculty": 3003,
            "faculty_name": "Факультет информатики (6)",
            "graduation": 2017,
            "education_status": "Студент (специалист)",
            "online": 0
        },
        {
            "id": 85937187,
            "first_name": "Татьяна",
            "last_name": "Степанова",
            "sex": 1,
            "nickname": "",
            "domain": "id85937187",
            "photo_50": "https://pp.userapi.com/c824201/v824201998/13b7cb/R-4qLU9mfpc.jpg?ava=1",
            "university": 6698,
            "university_name": "СГСХА",
            "faculty": 13473,
            "faculty_name": "Экономический факультет",
            "graduation": 2019,
            "education_form": "Очное отделение",
            "online": 1
        },
        {
            "id": 86699413,
            "first_name": "Алёна",
            "last_name": "Григорьева",
            "sex": 1,
            "nickname": "",
            "domain": "id86699413",
            "photo_50": "https://pp.userapi.com/c639218/v639218653/5e1fc/iBTfMyeWcCg.jpg?ava=1",
            "university": 1171,
            "university_name": "СамГУ",
            "faculty": 3016,
            "faculty_name": "Экономики и управления",
            "graduation": 2017,
            "online": 0
        },
        {
            "id": 92132445,
            "first_name": "Екатерина",
            "last_name": "Емельянова",
            "sex": 1,
            "nickname": "",
            "domain": "great_ket",
            "photo_50": "https://pp.userapi.com/c846017/v846017721/8a53e/bAVOZ4P33gA.jpg?ava=1",
            "online": 1
        },
        {
            "id": 93395669,
            "first_name": "Ирина",
            "last_name": "Сарбасова",
            "sex": 1,
            "nickname": "",
            "domain": "id93395669",
            "photo_50": "https://pp.userapi.com/c846018/v846018311/f0a8/lXrFNyJIb6g.jpg?ava=1",
            "university": 0,
            "university_name": "",
            "faculty": 0,
            "faculty_name": "",
            "graduation": 0,
            "online": 1
        },
        {
            "id": 94668786,
            "first_name": "Марк",
            "last_name": "Волков",
            "sex": 2,
            "nickname": "",
            "domain": "id94668786",
            "photo_50": "https://pp.userapi.com/c622519/v622519786/183c7/UQ-m5Bkg6UI.jpg?ava=1",
            "university": 0,
            "university_name": "",
            "faculty": 0,
            "faculty_name": "",
            "graduation": 0,
            "online": 0
        },
        {
            "id": 95526641,
            "first_name": "Ксения",
            "last_name": "Ключарова",
            "sex": 1,
            "nickname": "",
            "domain": "ksenia_key",
            "photo_50": "https://pp.userapi.com/c846018/v846018216/7d3c6/9A2-lap-TBQ.jpg?ava=1",
            "university": 779,
            "university_name": "СГАУ им. Королева",
            "faculty": 3003,
            "faculty_name": "Факультет информатики (6)",
            "graduation": 2017,
            "online": 0
        },
        {
            "id": 95638284,
            "first_name": "Дмитрий",
            "last_name": "Сухов",
            "sex": 2,
            "nickname": "",
            "domain": "dmitriy_suhov_95",
            "photo_50": "https://vk.com/images/camera_50.png?ava=1",
            "university": 0,
            "university_name": "",
            "faculty": 0,
            "faculty_name": "",
            "graduation": 0,
            "online": 0
        },
        {
            "id": 96046459,
            "first_name": "Мария",
            "last_name": "Лебедева",
            "sex": 1,
            "nickname": "",
            "domain": "id96046459",
            "photo_50": "https://pp.userapi.com/c841636/v841636765/4a925/EnT1iKuNons.jpg?ava=1",
            "university": 780,
            "university_name": "СамГМУ",
            "faculty": 0,
            "faculty_name": "",
            "graduation": 0,
            "online": 1
        },
        {
            "id": 96843501,
            "first_name": "Евгений",
            "last_name": "Каньшин",
            "sex": 2,
            "nickname": "",
            "domain": "evgenykanshin",
            "photo_50": "https://pp.userapi.com/c618722/v618722501/22ac6/rsuRBxd9N4g.jpg?ava=1",
            "university": 779,
            "university_name": "СГАУ им. Королева",
            "faculty": 3003,
            "faculty_name": "Факультет информатики (6)",
            "graduation": 0,
            "education_form": "Очное отделение",
            "education_status": "Студент (специалист)",
            "online": 1
        },
        {
            "id": 97897408,
            "first_name": "Vera",
            "last_name": "Miller",
            "sex": 1,
            "nickname": "",
            "domain": "id97897408",
            "photo_50": "https://pp.userapi.com/c619931/v619931408/11d76/7BFMYtqoCm4.jpg?ava=1",
            "university": 66,
            "university_name": "СПбГУПТД (бывш. СПГУТД)",
            "faculty": 0,
            "faculty_name": "",
            "graduation": 1991,
            "education_form": "Очное отделение",
            "education_status": "Выпускница (специалист)",
            "online": 0
        },
        {
            "id": 101090896,
            "first_name": "Александра",
            "last_name": "Шамаева",
            "sex": 1,
            "nickname": "",
            "domain": "id101090896",
            "photo_50": "https://pp.userapi.com/c824502/v824502111/149c74/7f1tyVg4jxE.jpg?ava=1",
            "university": 779,
            "university_name": "СГАУ им. Королева",
            "faculty": 3003,
            "faculty_name": "Факультет информатики (6)",
            "graduation": 2017,
            "education_form": "Очное отделение",
            "education_status": "Студентка (бакалавр)",
            "online": 0
        },
        {
            "id": 111871103,
            "first_name": "Марина",
            "last_name": "Семенищева",
            "sex": 1,
            "nickname": "",
            "domain": "id111871103",
            "photo_50": "https://pp.userapi.com/c841628/v841628783/34687/jUr_YKP81Uc.jpg?ava=1",
            "university": 780,
            "university_name": "СамГМУ",
            "faculty": 0,
            "faculty_name": "",
            "graduation": 0,
            "online": 0
        },
        {
            "id": 114137582,
            "first_name": "Маришка",
            "last_name": "Гусарова",
            "sex": 1,
            "nickname": "",
            "domain": "id114137582",
            "photo_50": "https://pp.userapi.com/c416617/v416617582/fad/sIbAFjLOQLE.jpg?ava=1",
            "university": 8351,
            "university_name": "СГСПУ (бывш. ПГСГА, СамГПУ)",
            "faculty": 21249,
            "faculty_name": "Факультет психологии (до 2015 г.)",
            "graduation": 0,
            "online": 0
        },
        {
            "id": 114748388,
            "first_name": "Орели",
            "last_name": "Губи",
            "sex": 1,
            "nickname": "",
            "domain": "id114748388",
            "photo_50": "https://pp.userapi.com/c836737/v836737388/10ee/pMb0sRz8kPo.jpg?ava=1",
            "university": 442728,
            "university_name": "Université Paris IV - Paris-Sorbonne (Sorbonne Université)",
            "faculty": 0,
            "faculty_name": "",
            "graduation": 0,
            "online": 0
        },
        {
            "id": 116118977,
            "first_name": "Михаил",
            "last_name": "Сурков",
            "sex": 2,
            "nickname": "",
            "domain": "surkovmishka63",
            "photo_50": "https://pp.userapi.com/c834401/v834401098/76a85/tCwvbHlA6XQ.jpg?ava=1",
            "university": 0,
            "university_name": "",
            "faculty": 0,
            "faculty_name": "",
            "graduation": 0,
            "online": 0
        },
        {
            "id": 119816050,
            "first_name": "Анастасия",
            "last_name": "Янборисова",
            "sex": 1,
            "nickname": "",
            "domain": "id119816050",
            "photo_50": "https://pp.userapi.com/c837427/v837427785/53398/Irz6kX3rT8Y.jpg?ava=1",
            "university": 779,
            "university_name": "СГАУ им. Королева",
            "faculty": 3003,
            "faculty_name": "Факультет информатики (6)",
            "graduation": 2017,
            "online": 0
        },
        {
            "id": 121094416,
            "first_name": "Дмитрий",
            "last_name": "Жугин",
            "sex": 2,
            "nickname": "Сергеевич",
            "domain": "zhugindmitry",
            "photo_50": "https://pp.userapi.com/c841622/v841622851/ae49/9aqz4W2LYNs.jpg?ava=1",
            "university": 0,
            "university_name": "",
            "faculty": 0,
            "faculty_name": "",
            "graduation": 0,
            "online": 0
        },
        {
            "id": 122030977,
            "first_name": "Виктория",
            "last_name": "Морозова",
            "sex": 1,
            "nickname": "",
            "domain": "driadalys",
            "photo_50": "https://pp.userapi.com/c830208/v830208520/115673/k7ZH8mxkywQ.jpg?ava=1",
            "university": 780,
            "university_name": "СамГМУ",
            "faculty": 5353,
            "faculty_name": "Стоматологический факультет",
            "graduation": 2018,
            "education_status": "Выпускница (специалист)",
            "online": 1
        },
        {
            "id": 123453961,
            "first_name": "Андрей",
            "last_name": "Малинкин",
            "sex": 2,
            "nickname": "",
            "domain": "dg1991a",
            "photo_50": "https://pp.userapi.com/c637324/v637324052/51155/Qblvp83vBmA.jpg?ava=1",
            "university": 15793,
            "university_name": "ПФ МИИТ (РГОТУПС)",
            "faculty": 0,
            "faculty_name": "",
            "graduation": 0,
            "online": 0
        },
        {
            "id": 125548081,
            "first_name": "Аркадий",
            "last_name": "Филиппов",
            "sex": 2,
            "nickname": "",
            "domain": "filippovarkadiy",
            "photo_50": "https://pp.userapi.com/c845524/v845524908/2d2b9/LlZ8ZAkAhTg.jpg?ava=1",
            "university": 0,
            "university_name": "",
            "faculty": 0,
            "faculty_name": "",
            "graduation": 0,
            "online": 1
        },
        {
            "id": 132123731,
            "first_name": "Максим",
            "last_name": "Нигорожин",
            "sex": 2,
            "nickname": "",
            "domain": "mma63",
            "photo_50": "https://pp.userapi.com/c836426/v836426297/55afa/Go7uehG8pSE.jpg?ava=1",
            "online": 0
        },
        {
            "id": 132241137,
            "first_name": "Den",
            "last_name": "Demidov",
            "sex": 2,
            "nickname": "",
            "domain": "smail888",
            "photo_50": "https://pp.userapi.com/c618829/v618829137/301fd/-HMmaycnIcg.jpg?ava=1",
            "online": 0
        },
        {
            "id": 132362703,
            "first_name": "Сережка",
            "last_name": "Рябов",
            "sex": 2,
            "nickname": "˙·٠•●๑۩๑۩۩๑Белый๑۩۩๑۩Ů",
            "domain": "id132362703",
            "photo_50": "https://pp.userapi.com/c10052/u132362703/e_a7e67133.jpg?ava=1",
            "university": 0,
            "university_name": "",
            "faculty": 0,
            "faculty_name": "",
            "graduation": 0,
            "online": 0
        },
        {
            "id": 133948521,
            "first_name": "Денис",
            "last_name": "Гусаров",
            "sex": 2,
            "nickname": "",
            "domain": "denisgusarov92",
            "photo_50": "https://pp.userapi.com/c636825/v636825521/3c42a/-WX5cosEd8Q.jpg?ava=1",
            "university": 6028,
            "university_name": "АСА СамГТУ (бывш. СГАСУ)",
            "faculty": 32289,
            "faculty_name": "Факультет промышленного и гражданского строительства",
            "graduation": 2015,
            "education_form": "Очное отделение",
            "education_status": "Студент (специалист)",
            "online": 0
        },
        {
            "id": 134342861,
            "first_name": "Даша",
            "last_name": "Максимова",
            "sex": 1,
            "nickname": "",
            "domain": "id134342861",
            "photo_50": "https://pp.userapi.com/c841638/v841638611/58a91/jgQO-ZzSdHM.jpg?ava=1",
            "university": 4200,
            "university_name": "СГЭУ",
            "faculty": 0,
            "faculty_name": "",
            "graduation": 0,
            "online": 0
        },
        {
            "id": 134807182,
            "first_name": "Алексей",
            "last_name": "Феоктистов",
            "sex": 2,
            "nickname": "Олегович",
            "domain": "alextroll3",
            "photo_50": "https://pp.userapi.com/c846523/v846523878/88d87/-mFZMGCdA7c.jpg?ava=1",
            "university": 782,
            "university_name": "СамГТУ",
            "faculty": 2996,
            "faculty_name": "Инженерно-экономический факультет",
            "graduation": 2016,
            "education_form": "Очное отделение",
            "education_status": "Выпускник (бакалавр)",
            "online": 0
        },
        {
            "id": 136985267,
            "first_name": "Алёна",
            "last_name": "Данилина",
            "sex": 1,
            "nickname": "",
            "domain": "id136985267",
            "photo_50": "https://pp.userapi.com/c830309/v830309302/ec3a/pXzcCtXxhug.jpg?ava=1",
            "university": 0,
            "university_name": "",
            "faculty": 0,
            "faculty_name": "",
            "graduation": 0,
            "online": 0
        },
        {
            "id": 138436419,
            "first_name": "Екатерина",
            "last_name": "Яблочкина",
            "sex": 1,
            "nickname": "",
            "domain": "e.scherbinina95",
            "photo_50": "https://pp.userapi.com/c621511/v621511660/6dacd/OikFIY4nSe8.jpg?ava=1",
            "university": 1171,
            "university_name": "СамГУ",
            "faculty": 3014,
            "faculty_name": "Юридический",
            "graduation": 2016,
            "education_form": "Очное отделение",
            "education_status": "Выпускница (бакалавр)",
            "online": 0
        },
        {
            "id": 138868648,
            "first_name": "Сергей",
            "last_name": "Чоботарь",
            "sex": 2,
            "nickname": "",
            "domain": "bahstreet",
            "photo_50": "https://pp.userapi.com/c837428/v837428648/765f/yuuee1FG6nA.jpg?ava=1",
            "university": 0,
            "university_name": "",
            "faculty": 0,
            "faculty_name": "",
            "graduation": 0,
            "online": 1
        },
        {
            "id": 139724630,
            "first_name": "Артуро",
            "last_name": "Паредез-Руиз",
            "sex": 2,
            "nickname": "",
            "domain": "id139724630",
            "photo_50": "https://pp.userapi.com/c412625/v412625630/82/7-0fMMenLW0.jpg?ava=1",
            "university": 779,
            "university_name": "СГАУ им. Королева",
            "faculty": 2998,
            "faculty_name": "Институт авиационной техники (Летательных аппаратов, Инженеров воздушного транспорта)",
            "graduation": 0,
            "education_form": "Очное отделение",
            "online": 0
        },
        {
            "id": 140330578,
            "first_name": "Дарья",
            "last_name": "Никитина",
            "sex": 1,
            "nickname": "",
            "domain": "id140330578",
            "photo_50": "https://pp.userapi.com/c834103/v834103730/132c5d/ByUQ2ZPj2LE.jpg?ava=1",
            "university": 6028,
            "university_name": "АСА СамГТУ (бывш. СГАСУ)",
            "faculty": 13293,
            "faculty_name": "Факультет инженерных систем и природоохранного строительства",
            "graduation": 0,
            "education_status": "Выпускница (бакалавр)",
            "online": 0
        },
        {
            "id": 142089749,
            "first_name": "Александр",
            "last_name": "Мироненко",
            "deactivated": "deleted",
            "domain": "id142089749",
            "sex": 2,
            "photo_50": "https://vk.com/images/deactivated_50.png",
            "online": 0
        },
        {
            "id": 142783697,
            "first_name": "Дмитрий",
            "last_name": "Мирошников",
            "sex": 2,
            "nickname": "",
            "domain": "iddimkamir",
            "photo_50": "https://pp.userapi.com/c824602/v824602208/1746bf/nhcA_oTAVW4.jpg?ava=1",
            "university": 782,
            "university_name": "СамГТУ",
            "faculty": 2994,
            "faculty_name": "Теплоэнергетический факультет",
            "graduation": 0,
            "online": 0
        },
        {
            "id": 147547179,
            "first_name": "Ваня",
            "last_name": "Слизевич",
            "sex": 2,
            "nickname": "",
            "domain": "prince_forve",
            "photo_50": "https://pp.userapi.com/c837737/v837737179/11938/_pDMs6y89wA.jpg?ava=1",
            "university": 779,
            "university_name": "СГАУ им. Королева",
            "faculty": 3003,
            "faculty_name": "Факультет информатики (6)",
            "graduation": 0,
            "education_form": "Очное отделение",
            "education_status": "Студент (бакалавр)",
            "online": 0
        },
        {
            "id": 147956262,
            "first_name": "Екатерина",
            "last_name": "Семёнова",
            "sex": 1,
            "nickname": "",
            "domain": "e.semyonova95",
            "photo_50": "https://pp.userapi.com/c824410/v824410358/154123/amJ7o7GXKvg.jpg?ava=1",
            "university": 0,
            "university_name": "",
            "faculty": 0,
            "faculty_name": "",
            "graduation": 0,
            "online": 0
        },
        {
            "id": 150561758,
            "first_name": "Диана",
            "last_name": "Пригодская",
            "sex": 1,
            "nickname": "",
            "domain": "id150561758",
            "photo_50": "https://pp.userapi.com/c846021/v846021457/81437/V14Qmm4BRyo.jpg?ava=1",
            "university": 8351,
            "university_name": "СГСПУ (бывш. ПГСГА, СамГПУ)",
            "faculty": 22446,
            "faculty_name": "Факультет начального образования",
            "graduation": 0,
            "education_form": "Очное отделение",
            "online": 0
        },
        {
            "id": 151808070,
            "first_name": "Александр",
            "last_name": "Коршиков",
            "sex": 2,
            "nickname": "",
            "domain": "true_emancipation",
            "photo_50": "https://pp.userapi.com/c841221/v841221671/46346/blJnRUtEwTY.jpg?ava=1",
            "university": 779,
            "university_name": "СГАУ им. Королева",
            "faculty": 3003,
            "faculty_name": "Факультет информатики (6)",
            "graduation": 2016,
            "education_status": "Студент (бакалавр)",
            "online": 1
        },
        {
            "id": 152393962,
            "first_name": "Денис",
            "last_name": "Демидов",
            "deactivated": "banned",
            "domain": "id152393962",
            "sex": 2,
            "photo_50": "https://vk.com/images/deactivated_50.png",
            "online": 0
        },
        {
            "id": 153864690,
            "first_name": "Елена",
            "last_name": "Ванюхина",
            "sex": 1,
            "nickname": "",
            "domain": "helenpv",
            "photo_50": "https://pp.userapi.com/c845421/v845421676/4aad6/q1UuHofr_Kk.jpg?ava=1",
            "university": 0,
            "university_name": "",
            "faculty": 0,
            "faculty_name": "",
            "graduation": 0,
            "online": 0
        },
        {
            "id": 154919896,
            "first_name": "Валентин",
            "last_name": "Овсянников",
            "sex": 2,
            "nickname": "",
            "domain": "simbrown",
            "photo_50": "https://pp.userapi.com/c846324/v846324887/4da06/x1XbF5cIOJc.jpg?ava=1",
            "university": 779,
            "university_name": "СГАУ им. Королева",
            "faculty": 3003,
            "faculty_name": "Факультет информатики (6)",
            "graduation": 2017,
            "education_form": "Очное отделение",
            "education_status": "Студент (бакалавр)",
            "online": 0
        },
        {
            "id": 162561083,
            "first_name": "Константин",
            "last_name": "Ловцов",
            "sex": 2,
            "nickname": "",
            "domain": "id162561083",
            "photo_50": "https://pp.userapi.com/c604417/v604417083/1b327/PPYEtxGDHok.jpg?ava=1",
            "university": 779,
            "university_name": "СГАУ им. Королева",
            "faculty": 3003,
            "faculty_name": "Факультет информатики (6)",
            "graduation": 2017,
            "education_form": "Очное отделение",
            "education_status": "Студент (бакалавр)",
            "online": 0
        },
        {
            "id": 163149627,
            "first_name": "Александр",
            "last_name": "Спиридонов",
            "sex": 2,
            "nickname": "Анатольевич",
            "domain": "id163149627",
            "photo_50": "https://pp.userapi.com/c419521/u163149627/e_68572c04.jpg?ava=1",
            "university": 0,
            "university_name": "",
            "faculty": 0,
            "faculty_name": "",
            "graduation": 0,
            "online": 0
        },
        {
            "id": 163346960,
            "first_name": "Ярослав",
            "last_name": "Бородин",
            "sex": 2,
            "nickname": "",
            "domain": "id163346960",
            "photo_50": "https://pp.userapi.com/c638029/v638029960/455c8/_92wBiYDB5Y.jpg?ava=1",
            "university": 0,
            "university_name": "",
            "faculty": 0,
            "faculty_name": "",
            "graduation": 0,
            "online": 0
        },
        {
            "id": 164849019,
            "first_name": "Дарья",
            "last_name": "Гончаренко",
            "sex": 1,
            "nickname": "",
            "domain": "id164849019",
            "photo_50": "https://pp.userapi.com/c831408/v831408308/8cee7/FmXwjqGtsHg.jpg?ava=1",
            "university": 779,
            "university_name": "СГАУ им. Королева",
            "faculty": 3004,
            "faculty_name": "Факультет экономики и управления (7)",
            "graduation": 2016,
            "education_form": "Очное отделение",
            "online": 0
        },
        {
            "id": 166271372,
            "first_name": "Евгения",
            "last_name": "Базарова",
            "sex": 1,
            "nickname": "",
            "domain": "id166271372",
            "photo_50": "https://pp.userapi.com/c622925/v622925372/14675/47aeSKZNtm4.jpg?ava=1",
            "university": 787,
            "university_name": "МИР\r\n",
            "faculty": 6634,
            "faculty_name": "Факультет экономики и управления",
            "graduation": 0,
            "education_form": "Заочное отделение",
            "education_status": "Студентка (специалист)",
            "online": 0
        },
        {
            "id": 172912926,
            "first_name": "Евгений",
            "last_name": "Сигалёв",
            "sex": 2,
            "nickname": "",
            "domain": "id172912926",
            "photo_50": "https://pp.userapi.com/c840024/v840024636/46c6a/UJBJaKTbQns.jpg?ava=1",
            "university": 779,
            "university_name": "СГАУ им. Королева",
            "faculty": 3003,
            "faculty_name": "Факультет информатики (6)",
            "graduation": 0,
            "online": 1
        },
        {
            "id": 173517617,
            "first_name": "Гелена",
            "last_name": "Бурмакова",
            "sex": 1,
            "nickname": "",
            "domain": "id173517617",
            "photo_50": "https://pp.userapi.com/c636219/v636219617/30439/i1z96kl4H3I.jpg?ava=1",
            "university": 0,
            "university_name": "",
            "faculty": 0,
            "faculty_name": "",
            "graduation": 0,
            "online": 0
        },
        {
            "id": 177846356,
            "first_name": "Владимир",
            "last_name": "Овчинников",
            "sex": 2,
            "nickname": "",
            "domain": "id177846356",
            "photo_50": "https://pp.userapi.com/c302803/u177846356/e_60b8248e.jpg?ava=1",
            "university": 0,
            "university_name": "",
            "faculty": 0,
            "faculty_name": "",
            "graduation": 0,
            "online": 0
        },
        {
            "id": 177984697,
            "first_name": "Ирина",
            "last_name": "Пенькова",
            "sex": 1,
            "nickname": "",
            "domain": "id177984697",
            "photo_50": "https://pp.userapi.com/c305210/u177984697/e_520003bf.jpg?ava=1",
            "university": 0,
            "university_name": "",
            "faculty": 0,
            "faculty_name": "",
            "graduation": 0,
            "online": 0
        },
        {
            "id": 179940065,
            "first_name": "Дмитрий",
            "last_name": "Мунтьянов",
            "sex": 2,
            "nickname": "",
            "domain": "id179940065",
            "photo_50": "https://pp.userapi.com/c624616/v624616065/18926/KoBHZd2ib_8.jpg?ava=1",
            "university": 779,
            "university_name": "СГАУ им. Королева",
            "faculty": 3003,
            "faculty_name": "Факультет информатики (6)",
            "graduation": 0,
            "online": 0
        },
        {
            "id": 182180046,
            "first_name": "Ирина",
            "last_name": "Лазакович",
            "sex": 1,
            "nickname": "",
            "domain": "id182180046",
            "photo_50": "https://pp.userapi.com/c425024/v425024046/202b/dKXNAOP8sMk.jpg?ava=1",
            "university": 0,
            "university_name": "",
            "faculty": 0,
            "faculty_name": "",
            "graduation": 0,
            "online": 0
        },
        {
            "id": 194465959,
            "first_name": "Паша",
            "last_name": "Шило",
            "sex": 2,
            "nickname": "",
            "domain": "trooleybastoooo",
            "photo_50": "https://sun9-5.userapi.com/c840725/v840725604/81c84/WUVczMsZw-E.jpg?ava=1",
            "online": 0
        },
        {
            "id": 216621845,
            "first_name": "Никита",
            "last_name": "Кузьмин",
            "sex": 2,
            "nickname": "",
            "domain": "nikitulya_gearss",
            "photo_50": "https://pp.userapi.com/c841427/v841427374/81fe5/kdTwOJyzupc.jpg?ava=1",
            "university": 0,
            "university_name": "",
            "faculty": 0,
            "faculty_name": "",
            "graduation": 0,
            "online": 1
        },
        {
            "id": 223530722,
            "first_name": "Илья",
            "last_name": "Щербаков",
            "sex": 2,
            "nickname": "",
            "domain": "id_trololo_sherbak95",
            "photo_50": "https://pp.userapi.com/c831109/v831109695/dd533/591sxBFltxc.jpg?ava=1",
            "university": 1187476,
            "university_name": "Самарский университет",
            "faculty": 0,
            "faculty_name": "",
            "graduation": 0,
            "online": 0
        },
        {
            "id": 223828584,
            "first_name": "Виктория",
            "last_name": "Казеева",
            "sex": 1,
            "nickname": "",
            "domain": "vikazsz",
            "photo_50": "https://pp.userapi.com/c845323/v845323471/975fe/wgDjbaMs7rA.jpg?ava=1",
            "university": 0,
            "university_name": "",
            "faculty": 0,
            "faculty_name": "",
            "graduation": 0,
            "online": 0
        },
        {
            "id": 225655720,
            "first_name": "Александр",
            "last_name": "Мироненко",
            "sex": 2,
            "nickname": "",
            "domain": "id225655720",
            "photo_50": "https://pp.userapi.com/c630921/v630921720/3b011/2-2o3w2u-fg.jpg?ava=1",
            "university": 779,
            "university_name": "СГАУ им. Королева",
            "faculty": 3003,
            "faculty_name": "Факультет информатики (6)",
            "graduation": 2018,
            "education_form": "Очное отделение",
            "education_status": "Студент (специалист)",
            "online": 0
        },
        {
            "id": 233841196,
            "first_name": "Анастасия",
            "last_name": "Бутузова",
            "sex": 1,
            "nickname": "",
            "domain": "id233841196",
            "photo_50": "https://vk.com/images/camera_50.png?ava=1",
            "university": 779,
            "university_name": "СГАУ им. Королева",
            "faculty": 0,
            "faculty_name": "",
            "graduation": 0,
            "online": 0
        },
        {
            "id": 239281604,
            "first_name": "Александр",
            "last_name": "Гусаров",
            "sex": 2,
            "nickname": "",
            "domain": "id239281604",
            "photo_50": "https://pp.userapi.com/c639417/v639417749/39892/ry47EWXUYi8.jpg?ava=1",
            "university": 0,
            "university_name": "",
            "faculty": 0,
            "faculty_name": "",
            "graduation": 0,
            "online": 0
        },
        {
            "id": 252965805,
            "first_name": "Денис",
            "last_name": "Теплов",
            "deactivated": "deleted",
            "domain": "id252965805",
            "sex": 2,
            "photo_50": "https://vk.com/images/deactivated_50.png",
            "online": 0
        },
        {
            "id": 254705067,
            "first_name": "Виктория",
            "last_name": "Федорина",
            "sex": 1,
            "nickname": "",
            "domain": "vvfedorina",
            "photo_50": "https://pp.userapi.com/c846419/v846419429/76c55/VHNEoeLX4JI.jpg?ava=1",
            "university": 0,
            "university_name": "",
            "faculty": 0,
            "faculty_name": "",
            "graduation": 0,
            "online": 0
        },
        {
            "id": 262326944,
            "first_name": "Павел",
            "last_name": "Бурмаков",
            "sex": 2,
            "nickname": "",
            "domain": "id262326944",
            "photo_50": "https://pp.userapi.com/c618022/v618022944/ccbd/15dikrK6LwI.jpg?ava=1",
            "university": 0,
            "university_name": "",
            "faculty": 0,
            "faculty_name": "",
            "graduation": 0,
            "online": 0
        },
        {
            "id": 263003736,
            "first_name": "Юрий",
            "last_name": "Желавский",
            "sex": 2,
            "nickname": "",
            "domain": "id263003736",
            "photo_50": "https://pp.userapi.com/c830309/v830309803/10363a/jaiY4sABkDM.jpg?ava=1",
            "university": 0,
            "university_name": "",
            "faculty": 0,
            "faculty_name": "",
            "graduation": 0,
            "online": 0
        },
        {
            "id": 265226118,
            "first_name": "Егор",
            "last_name": "Дмитриев",
            "sex": 2,
            "nickname": "",
            "domain": "id265226118",
            "photo_50": "https://pp.userapi.com/c846120/v846120573/83484/WTu1osdFogk.jpg?ava=1",
            "university": 779,
            "university_name": "СГАУ им. Королева",
            "faculty": 3003,
            "faculty_name": "Факультет информатики (6)",
            "graduation": 0,
            "online": 0
        },
        {
            "id": 266255958,
            "first_name": "Iren",
            "last_name": "Chigiryova",
            "sex": 1,
            "nickname": "",
            "domain": "ichigiryova",
            "photo_50": "https://pp.userapi.com/c849128/v849128487/117a4/NziuZucv1sk.jpg?ava=1",
            "online": 1
        },
        {
            "id": 267374166,
            "first_name": "DELETED",
            "last_name": "",
            "deactivated": "deleted",
            "domain": "id267374166",
            "sex": 2,
            "photo_50": "https://vk.com/images/deactivated_50.png",
            "online": 0
        },
        {
            "id": 281172360,
            "first_name": "Денис",
            "last_name": "Мельников",
            "sex": 2,
            "nickname": "",
            "domain": "idrturuuiyuo",
            "photo_50": "https://pp.userapi.com/c841325/v841325370/8ba06/TSfE830vvAg.jpg?ava=1",
            "university": 0,
            "university_name": "",
            "faculty": 0,
            "faculty_name": "",
            "graduation": 0,
            "online": 0
        },
        {
            "id": 302531686,
            "first_name": "Алёна",
            "last_name": "Хроменкова",
            "sex": 1,
            "nickname": "",
            "domain": "thecirrus",
            "photo_50": "https://pp.userapi.com/c847018/v847018064/902bd/KdlGbJuS_XM.jpg?ava=1",
            "university": 0,
            "university_name": "",
            "faculty": 0,
            "faculty_name": "",
            "graduation": 0,
            "online": 0
        },
        {
            "id": 313281582,
            "first_name": "Владислав",
            "last_name": "Скупченко",
            "sex": 2,
            "nickname": "",
            "domain": "id313281582",
            "photo_50": "https://pp.userapi.com/c836729/v836729582/34ca9/JlHPWUNhtYI.jpg?ava=1",
            "university": 0,
            "university_name": "",
            "faculty": 0,
            "faculty_name": "",
            "graduation": 0,
            "online": 0
        },
        {
            "id": 327624527,
            "first_name": "Руслан",
            "last_name": "Юзькив",
            "sex": 2,
            "nickname": "",
            "domain": "id327624527",
            "photo_50": "https://pp.userapi.com/c844616/v844616786/20b34/HsIskHC1FFk.jpg?ava=1",
            "university": 0,
            "university_name": "",
            "faculty": 0,
            "faculty_name": "",
            "graduation": 0,
            "online": 0
        },
        {
            "id": 343042690,
            "first_name": "Anastasia",
            "last_name": "Vozzhaeva",
            "sex": 1,
            "nickname": "",
            "domain": "stasyvo",
            "photo_50": "https://pp.userapi.com/c840620/v840620578/75097/NoeHZfhzQTk.jpg?ava=1",
            "university": 779,
            "university_name": "СГАУ им. Королева",
            "faculty": 3003,
            "faculty_name": "Факультет информатики (6)",
            "graduation": 2017,
            "education_status": "Выпускница (бакалавр)",
            "online": 1
        },
        {
            "id": 384208546,
            "first_name": "Никита",
            "last_name": "Болдырев",
            "sex": 2,
            "nickname": "",
            "domain": "nboldyrev2",
            "photo_50": "https://pp.userapi.com/c830408/v830408384/ecaec/RcOuFIeDCN0.jpg?ava=1",
            "university": 0,
            "university_name": "",
            "faculty": 0,
            "faculty_name": "",
            "graduation": 0,
            "online": 0
        },
        {
            "id": 413085873,
            "first_name": "Ирина",
            "last_name": "Сарбасова",
            "sex": 1,
            "nickname": "",
            "domain": "id413085873",
            "photo_50": "https://pp.userapi.com/c836725/v836725873/235a5/FXCRkUnWwh0.jpg?ava=1",
            "university": 0,
            "university_name": "",
            "faculty": 0,
            "faculty_name": "",
            "graduation": 0,
            "online": 0
        },
        {
            "id": 436778706,
            "first_name": "Татьяна",
            "last_name": "Забрудская",
            "sex": 1,
            "nickname": "",
            "domain": "id436778706",
            "photo_50": "https://pp.userapi.com/c841528/v841528706/61b0/EvA64edLtgY.jpg?ava=1",
            "university": 0,
            "university_name": "",
            "faculty": 0,
            "faculty_name": "",
            "graduation": 0,
            "online": 0
        },
        {
            "id": 477314872,
            "first_name": "Александр",
            "last_name": "Александров",
            "sex": 2,
            "nickname": "◄Hyber►",
            "domain": "id477314872",
            "photo_50": "https://pp.userapi.com/c844722/v844722653/907af/561GzdJ_AWw.jpg?ava=1",
            "university": 779,
            "university_name": "СГАУ им. Королева",
            "faculty": 3003,
            "faculty_name": "Факультет информатики (6)",
            "graduation": 0,
            "online": 0
        }
    ];
    const selects = {};
    const VKSelect = {};
    const defaultParams = { // default for select user
        multiselect: true,
        autocomplete: true,
        fetch: true,
        avatars: true,
        placeholder: "Введите имя пользователя или email",
        addTextBtn: "Добавить",
        maxNumberItems: 20, // TODO поудмать о названии
        emptyItemText: "Пользователь не найден",
        getUrlImg: function () {
            return '';
        },
        getText: function () {
            return '';
        },
        getSubtext: function () {
            return '';
        },
        onSelect: function () {
        },
        onRemove: function () {
        }
    };

    function Select(id, params) {
        this.id = id;
        this.params = params;
        this.hoverItem = null;
        this.hoverItemElement = null;
        this.selectedItemsMap = {};

        Select.prototype.addSelectedItems = function (...items) { // TODO переделать на один item
            items.forEach((item) => {
                let selectedItemElement = createSelectedItemElement.call(this, item);
                this.selectedItemsElement.appendChild(selectedItemElement);
                this.params.selectedItems.push(item);
                this.selectedItemsMap[item.id] = true;

                if (this.selectedItemsElement.style.display === 'none') {
                    this.selectedItemsElement.style.display = 'block';
                }

                if (this.searchElement.value) {
                    this.searchElement.value = '';
                    this.searchElement.blur();
                }

                if (!this.params.multiselect)
                    this.arrowBtn.style.cursor = 'default';

                updateList.call(this, '');
            });
        };

        Select.prototype.removeSelectedItems = function (...items) { // TODO подумать про мапу объектов, а не массив, а также id!!!
            this.params.selectedItems.forEach((selectedItem, idxSelectedItem) => {
                items.forEach((removedItem) => {
                    if (selectedItem.id === removedItem.id) {
                        let selectedItemElement = this.selectedItemsElement.children[idxSelectedItem]; // TODO подумать про изменение модели (зависимость от индекса)
                        this.selectedItemsElement.removeChild(selectedItemElement);
                        this.params.selectedItems.splice(idxSelectedItem, 1); // TODO подумать про создание объекта-тэга
                        delete this.selectedItemsMap[removedItem.id];

                        if (!this.params.selectedItems.length) {
                            hideAdditionalBtn.call(this);

                            if (this.searchElement.style.display === 'none') {
                                showSearchElement.call(this);
                            }
                        }

                        if (!this.params.multiselect)
                            this.arrowBtn.style.cursor = 'pointer';

                        updateList.call(this, '');
                    }
                });
            });
        };

        Select.prototype.getItemById = function (id) {
            for (let i = 0; i < this.params.items.length; i++)
                if (this.params.items[i].id == id)
                    return this.params.items[i];

            return null;
        };

        Select.prototype.setHover = function (item, itemElement, withScrolling) { // TODO naming и возможно сделать объект item?
            if (!item || !itemElement) {
                this.hoverItemElement = null;
                this.hoverItem = null;

                return;
            }

            this.hoverItemElement && this.hoverItemElement.classList.remove('vk-select-item_hover');
            this.hoverItemElement = itemElement;
            this.hoverItem = item;
            itemElement.classList.add('vk-select-item_hover');

            if (withScrolling) {
                let difference = itemElement.offsetTop + itemElement.offsetHeight - (this.bodySelectElement.offsetHeight + this.bodySelectElement.scrollTop);

                if (difference > 0) {
                    this.bodySelectElement.scrollTop += difference;
                    return;
                }

                difference = this.bodySelectElement.scrollTop - itemElement.offsetTop;

                if (difference > 0)
                    this.bodySelectElement.scrollTop -= (difference - 1); // 1px for border
            }

        };

        constructSelectElement.call(this);

        /*this.selectElement = select;
         this.selectHeaderElement = select.querySelector('.vk-select__header');
         this.selectBodyElement = select.querySelector('.vk-select__body');
         this.selectedItemsElement = select.querySelector('.vk-select__header > .vk-select__selected-items');*/

        function createSelectedItemElement(item, idx) { // TODO изменить на шаблонную вставку
            let selectedItem = document.createElement('div');
            selectedItem.classList.add('vk-select__selected-item');
            selectedItem.classList.add('vk-select_direction_left');
            selectedItem.classList.add('vk-select_clear-fix');
            selectedItem.classList.add('vk-tag');

            let layoutElement = document.createElement('div');
            layoutElement.classList.add('vk-tag__layout');
            layoutElement.classList.add('vk-tag__layout_type_simple');
            layoutElement.classList.add('vk-select_clear-fix');

            let textElement = document.createElement('span');
            textElement.classList.add('vk-tag__text');
            textElement.classList.add('vk-select_direction_left');
            textElement.innerText = this.params.getText.call(item);

            let removeBtn = document.createElement('span');
            removeBtn.classList.add('vk-tag__btn');
            removeBtn.classList.add('vk-select_direction_right'); //vk-tag__btn_type_remove
            removeBtn.classList.add('vk-tag__btn_type_remove');
            removeBtn.addEventListener('mousedown', (event) => {
                this.removeSelectedItems(item);
                this.params.onRemove && typeof this.params.onRemove === "function" && this.params.onRemove(item);

                event.stopPropagation();
            });

            layoutElement.appendChild(textElement);
            layoutElement.appendChild(removeBtn);
            selectedItem.appendChild(layoutElement);

            return selectedItem;
        }

        function constructSelectElement() {
            this.select = document.getElementById(this.id);

            if (!this.select)
                throw new Error(`id (${this.id}) родительского узла для dropdown-a не найден`);

            constructHeaderElement.call(this);
            constructBodyElement.call(this);

            this.select.appendChild(this.headerSelectElement);
            this.select.appendChild(this.bodySelectElement);

            hideList.call(this);
            updateList.call(this);
        }

        function constructHeaderElement() {
            let header = document.createElement('div');
            header.classList.add('vk-select__header');
            header.classList.add('vk-select_clear-fix');
            header.addEventListener('click', onClickHeader.bind(this));

            let arrowBtn = document.createElement('div');
            arrowBtn.classList.add('vk-select__arrow');
            arrowBtn.classList.add('vk-select_direction_right');
            arrowBtn.addEventListener('click', onClickArrowBtn.bind(this));
            header.appendChild(arrowBtn);

            let selectedItems = document.createElement('div');
            selectedItems.classList.add('vk-select__selected-items');
            header.appendChild(selectedItems);

            let addBtn = document.createElement('div');
            addBtn.classList.add('vk-select__add-button'); // params.addTextBtn
            addBtn.classList.add('vk-select_direction_left');
            addBtn.classList.add('vk-select_clear-fix');
            addBtn.classList.add('vk-tag');
            addBtn.innerHTML = getAdditionalBtnTemplate.call(this, true);
            addBtn.addEventListener('click', onClickAddBtn.bind(this));
            header.appendChild(addBtn);

            let searchElement = document.createElement('input');
            searchElement.setAttribute('type', 'text');
            searchElement.setAttribute('placeholder', this.params.placeholder);
            searchElement.classList.add('vk-select__search');
            searchElement.classList.add('vk-select_direction_left');
            searchElement.addEventListener('focus', onFocusSearchElement.bind(this));
            searchElement.addEventListener('blur', onBlurSearchElement.bind(this));
            searchElement.addEventListener('input', onInputSearchElement.bind(this));
            searchElement.addEventListener('keydown', onKeydownSearchElement.bind(this));
            header.appendChild(searchElement);

            this.addBtn = addBtn;
            this.arrowBtn = arrowBtn;
            this.headerSelectElement = header;
            this.selectedItemsElement = selectedItems;
            this.searchElement = searchElement;

            if (this.params.selectedItems.length) {
                this.addSelectedItems(this.params.selectedItems);
            }
            else {
                this.selectedItemsElement.style.display = 'none';
                hideAdditionalBtn.call(this);
            }
        }

        function constructBodyElement() {
            let bodyElement = document.createElement('div');
            bodyElement.classList.add('vk-select__body');

            this.bodySelectElement = bodyElement;
            this.displayedItems = {};
        }

        function onClickAddBtn() {
            showSearchElement.call(this);
            hideAdditionalBtn.call(this);

            this.searchElement.focus();
        }

        function onClickHeader(event) {
            if (event.target !== event.currentTarget || this.params.selectedItems.length && !this.params.multiselect)
                return;

            onClickAddBtn.call(this);
        }

        function onClickArrowBtn(event) {
            if (this.params.selectedItems.length && !this.params.multiselect)
                return;

            onClickAddBtn.call(this);
            event.stopPropagation();
        }

        function getAdditionalBtnTemplate() {
            return `
                <div class="vk-tag__layout vk-tag__layout_type_add-btn vk-select_clear-fix">
                    <span class="vk-tag__text vk-select_direction_left">${this.params.addTextBtn}</span>
                    <span class="vk-tag__btn vk-tag__btn_type_plus vk-select_direction_right"></span>
                </div>
            `;
        }

        function showAdditionalBtn() {
            this.addBtn.style.display = 'block';
        }

        function hideAdditionalBtn() {
            this.addBtn.style.display = 'none';
        }

        function showSearchElement() {
            this.searchElement.style.display = 'block';
        }

        function hideSearchElement() {
            this.searchElement.style.display = 'none';
        }

        function showList() {
            this.bodySelectElement.style.display = 'block';

            let itemId = this.bodySelectElement.children[0].getAttribute('data-id'); // TODO hover на пустой элемент
            this.setHover(this.displayedItems[itemId], this.bodySelectElement.children[0], true);
        }

        function hideList() {
            this.bodySelectElement.style.display = 'none';
        }

        function onFocusSearchElement() {
            showList.call(this);
            this.select.classList.add('vk-select_focused');
        }

        function onBlurSearchElement(event) {
            if (this.params.selectedItems.length && !this.searchElement.value) {
                hideSearchElement.call(this);

                if (this.params.multiselect)
                    showAdditionalBtn.call(this);
            }

            hideList.call(this);
            this.headerSelectElement.addEventListener('click', onClickHeader.bind(this));
            this.select.classList.remove('vk-select_focused');
        }

        function onInputSearchElement(event) {
            let value = this.searchElement.value;
            updateList.call(this, value);
        }

        function onKeydownSearchElement(event) {
            let item;

            switch (event.keyCode) {
                case 40: // DOWN
                    if (!this.hoverItemElement || !this.hoverItemElement.nextElementSibling)
                        return;

                    item = this.getItemById(this.hoverItemElement.nextElementSibling.getAttribute('data-id')); // TODO переделать // HACK!!!!
                    this.setHover(item, this.hoverItemElement.nextElementSibling, true);
                    return;
                case 38: // UP
                    if (!this.hoverItemElement || !this.hoverItemElement.previousElementSibling)
                        return;

                    item = this.getItemById(this.hoverItemElement.previousElementSibling.getAttribute('data-id')); // TODO переделать // HACK!!!!
                    this.setHover(item, this.hoverItemElement.previousElementSibling, true);
                    return;
                case 13: // ENTER
                    let itemId = this.hoverItemElement && this.hoverItemElement.getAttribute('data-id');
                    if (itemId) {
                        VKSelect.select(this.id, itemId);
                        this.searchElement.blur();
                    }

                    return;
                case 27: // ESC
                    this.searchElement.blur();
                    return;
            }

            return;
        }

        function updateList(searchStr) {
            // TODO изменить название?
            // TODO заменить все параметры на параметры с префиксом
            let listHtml = renderList.call(this, this.params.items, searchStr);   // TODO возможно стоит изменить все temaplate-ы на html?

            if (this.params.fetch && searchStr && !this.onPending) { // TODO: изменить на onPendingResponse
                if (listHtml)
                    insertList.call(this, listHtml);

                let xhr = new XMLHttpRequest();
                xhr.open('POST', this.params.url, true);
                xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');

                xhr.onload = () => {
                    this.onPending = false;
                    if (xhr.status !== 200) {
                        if (!listHtml)
                            listHtml = getEmptyTemplateItem.call(this);

                        insertList.call(this, listHtml);
                        console.log("Ошибка " + event.target.status + " получена во время загрузки данных select-элемента с id: " + this.id + '. ' + xhr.statusText);

                        return listHtml;
                    }

                    let items = JSON.parse(xhr.responseText); // should be array
                    if (items.length)
                        listHtml += renderList.call(this, items, searchStr, true);

                    if (!listHtml)
                        listHtml = getEmptyTemplateItem.call(this);

                    insertList.call(this, listHtml);
                };

                xhr.onerror = (event) => {
                    if (!listHtml)
                        listHtml = getEmptyTemplateItem.call(this);

                    this.onPending = false;
                    insertList.call(this, listHtml);
                    console.log("Ошибка " + event.target.status + " получена во время загрузки данных select-элемента с id: " + this.id + '. ' + xhr.statusText);
                };

                let data = JSON.stringify({
                    str: searchStr.toLowerCase(),
                    maxNumberItems: this.params.maxNumberItems
                });

                this.onPending = true;
                xhr.send(data);
            } else {
                if (!listHtml)
                    listHtml = getEmptyTemplateItem.call(this);

                insertList.call(this, listHtml);
            }
        }

        function renderList(currentItems, searchStr, isFetch) {
            let list = '', countDisplayedItems = 0, matchObj;

            if (isFetch) { //TODO hack
                countDisplayedItems = Object.keys(this.displayedItems).length;

                for (let i = 0; countDisplayedItems < this.params.maxNumberItems && i < currentItems.length; i++) {
                    if (this.displayedItems[currentItems[i][0]] || this.selectedItemsMap[currentItems[i][0]])
                        continue;

                    matchObj = {
                        id: currentItems[i][0],
                        text: currentItems[i][1],
                        subtext: currentItems[i][2],
                        srcText: currentItems[i][1],
                        srcSubtext: currentItems[i][2],
                        urlImg: currentItems[i][3]
                    };
                    matchObj = highlightFilterBySearchStr.call(this, matchObj, searchStr);

                    list += getListTemplateItem.call(this, matchObj); // TODO naming
                    this.displayedItems[currentItems[i][0]] = this.getItemById(currentItems[i][0]);
                    ++countDisplayedItems;
                }

                return list;
            }

            this.displayedItems = {};
            if (!searchStr)
                for (let i = 0; countDisplayedItems < this.params.maxNumberItems && i < currentItems.length; i++) {
                    if (this.selectedItemsMap[currentItems[i].id])
                        continue;

                    matchObj = {
                        id: currentItems[i].id,
                        text: this.params.getText.call(currentItems[i]),
                        subtext: this.params.getSubtext.call(currentItems[i]),
                        srcText: this.params.getText.call(currentItems[i]),
                        srcSubtext: this.params.getSubtext.call(currentItems[i]),
                        urlImg: this.params.getUrlImg.call(currentItems[i])
                    };

                    list += getListTemplateItem.call(this, matchObj);
                    this.displayedItems[currentItems[i].id] = currentItems[i];

                    ++countDisplayedItems;
                }
            else
                for (let i = 0; countDisplayedItems < this.params.maxNumberItems && i < currentItems.length; i++) {
                    if (this.selectedItemsMap[currentItems[i].id])
                        continue;

                    let text = this.params.getText.call(currentItems[i]);
                    let subtext = this.params.getSubtext.call(currentItems[i]);

                    matchObj = {
                        id: currentItems[i].id,
                        text: this.params.getText.call(currentItems[i]),
                        subtext: this.params.getSubtext.call(currentItems[i]),
                        srcText: this.params.getText.call(currentItems[i]),
                        srcSubtext: this.params.getSubtext.call(currentItems[i]),
                        urlImg: this.params.getUrlImg.call(currentItems[i])
                    };

                    matchObj = highlightFilterBySearchStr.call(this, matchObj, searchStr);

                    if (matchObj.text !== text || matchObj.subtext !== subtext) {
                        list += getListTemplateItem.call(this, matchObj); // TODO naming
                        this.displayedItems[currentItems[i].id] = currentItems[i];
                        ++countDisplayedItems;
                    }
                }

            return list;
        }

        function insertList(listHtml) {
            this.bodySelectElement.innerHTML = listHtml;

            let itemId = this.bodySelectElement.children[0].getAttribute('data-id'); // TODO hover на пустой элемент
            this.setHover(this.displayedItems[itemId], this.bodySelectElement.children[0], true);
        }

        function getEmptyTemplateItem() {
            return `
                <div class="vk-select-item vk-select-item_type_empty vk-select_clear-fix">
                    <div class="vk-select-item__info vk-select_direction_left">
                        <div class="vk-select-item__text vk-select-item__text_type_empty">${this.params.emptyItemText}</div>
                    </div>
                </div>
            `;
        }

        function getListTemplateItem(matchObj) {
            if (this.params.avatars)
                return `<div class="vk-select-item vk-select_clear-fix" data-id=${matchObj.id} onmouseover="VKSelect.over('${this.id}', ${matchObj.id}, event)" onmousedown="VKSelect.select('${this.id}', ${matchObj.id}, event)">
                            <img class="vk-select-item__photo vk-select_direction_left"
                                 src="${matchObj.urlImg}" alt="${matchObj.srcText}">
                            <div class="vk-select-item__info">
                                <div class="vk-select-item__text">${matchObj.text}</div>
                                <div class="vk-select-item__subtext">${matchObj.subtext}</div>
                            </div>
                        </div>`;
            else
                return `<div class="vk-select-item vk-select_clear-fix" data-id=${matchObj.id} onmouseover="VKSelect.over('${this.id}', ${matchObj.id}, event)" onmousedown="VKSelect.select('${this.id}', ${matchObj.id}, event)">
                            <div class="vk-select-item__info">
                                <div class="vk-select-item__text">${matchObj.text}</div>
                                <div class="vk-select-item__subtext">${matchObj.subtext}</div>
                            </div>
                        </div>`;
        }

        function highlightFilterBySearchStr(matchObj, searchStr) {
            let stringsByKeyboardLayout = getAllSpeciesStr(searchStr.toLowerCase());
            let regExp = getSearchStrRegExp(stringsByKeyboardLayout);

            matchObj.text = matchObj.text.replace(regExp, '<span class="vk-select_highlighted">$1</span>');
            matchObj.subtext = matchObj.subtext.replace(regExp, '<span class="vk-select_highlighted">$1</span>');

            return matchObj; // TODO hack
        }

        function getSearchStrRegExp(strings) {
            let pattern = '(';

            for (let i = 0; i < strings.length; i++)
                pattern += escapeRegExp(strings[i]) + "|";

            pattern = pattern.slice(0, -1) + ")";

            return new RegExp(pattern, 'gi');
        }

        function escapeRegExp(text) {
            return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
        }

        function getAllSpeciesStr(str) {
            var result = [str];
            var revert = '';

            var isEnglish = isENGKeyboard(str);

            if (isEnglish == null)
                return [str, str, str, str];
            else if (isEnglish) {
                for (let i = 0; i < str.length; i++) {
                    if (DICTIONARY_TEXT.currentLanguage["en-TO"][str[i]])
                        revert += DICTIONARY_TEXT.currentLanguage["en-TO"][str[i]];
                    else
                        revert += str[i];
                }

                result.push(revert);

                var fromTranslit = convertTranslit(revert, false);
                result.push(fromTranslit);

                fromTranslit = convertTranslit(str, true);
                result.push(fromTranslit);
            } else {
                for (let i = 0; i < str.length; i++) {
                    if (DICTIONARY_TEXT.currentLanguage["to-EN"][str[i]])
                        revert += DICTIONARY_TEXT.currentLanguage["to-EN"][str[i]];
                    else
                        revert += str[i];
                }

                result.push(revert);

                var toTranslit = convertTranslit(revert, true);
                result.push(toTranslit);

                toTranslit = convertTranslit(str, false);
                result.push(toTranslit);
            }

            return result;

            function convertTranslit(str, isFromЕNG) {
                let result = str;

                DICTIONARY_TEXT.currentLanguage.translit.forEach(pair => {
                    const pairArray = pair.split(':');
                    result = result.replace(new RegExp(isFromЕNG ? pairArray[1] : pairArray[0], 'g'), isFromЕNG ? pairArray[0] : pairArray[1]);
                });

                return result;
            }

            function isENGKeyboard(str) {
                for (let i = 0; i < str.length; i++) {
                    if (DICTIONARY_TEXT.currentLanguage["to-EN"][str[i]])
                        return false;
                    else if (DICTIONARY_TEXT.currentLanguage["en-TO"][str[i]])
                        return true;
                    else
                        continue;
                }

                return null;
            }
        }
    }

    VKSelect.createSelect = function (id, params) { // TODO: change to destructurisation
        params = {
            multiselect: params.multiselect == undefined ? defaultParams.multiselect : params.multiselect, // TODO подумать про название
            autocomplete: params.autocomplete == undefined ? defaultParams.autocomplete : params.autocomplete,
            fetch: params.fetch == undefined ? defaultParams.fetch : params.fetch,
            url: params.url || '',
            avatars: params.avatars == undefined ? defaultParams.avatars : params.avatars,
            placeholder: params.placeholder || defaultParams.placeholder,
            addTextBtn: params.addTextBtn || defaultParams.addTextBtn,
            items: params.items || [], // ???
            selectedItems: params.selectedItems || [],
            maxNumberItems: params.maxNumberItems || defaultParams.maxNumberItems,
            emptyItemText: params.emptyItemText || defaultParams.emptyItemText,
            getUrlImg: params.getUrlImg || defaultParams.getUrlImg,
            getText: params.getText || defaultParams.getText,
            getSubtext: params.getSubtext || defaultParams.getSubtext,
            onSelect: params.onSelect || defaultParams.onSelect,
            onRemove: params.onRemove || defaultParams.onRemove
        };
        let select = new Select(id, params);
        selects[select.id] = select;

        return select;
    };

    VKSelect.getSelectById = function (id) {
        return selects[id];
    };

    VKSelect.select = function (idSelect, idItem) { // TODO naming
        let item = selects[idSelect].getItemById(idItem);
        selects[idSelect].addSelectedItems(item);
    };

    VKSelect.over = function (idSelect, idItem, event) { // TODO naming
        if (selects[idSelect].hoverItem.id == idItem)
            return;
        selects[idSelect].setHover(selects[idSelect].getItemById(idItem), event.currentTarget);
    };

    window.VKSelect = VKSelect;
}());
