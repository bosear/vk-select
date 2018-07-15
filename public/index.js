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
    }
];
const countDisplayedItems = 20;

let sidebar = document.querySelector('.vk-select-demo-sidebar');
sidebar.innerHTML = getSidebarItemsTemplate(mockData);

VKSelect.createSelect('test-select1', {
    items: mockData,
    multiselect: true,
    avatars: true,
    fetch: false,
    url: "/help/search/friends",
    maxNumberItems: countDisplayedItems,
    getText: function () {
        return this.first_name + ' ' + this.last_name;
    },
    getSubtext: function () {
        return this.university_name || '';
    },
    getUrlImg: function () {
        return this.photo_50;
    }
});

VKSelect.createSelect('test-select2', {
    items: mockData,
    multiselect: false,
    avatars: true,
    fetch: false,
    url: "/help/search/friends",
    maxNumberItems: countDisplayedItems,
    getText: function () {
        return this.first_name + ' ' + this.last_name;
    },
    getSubtext: function () {
        return this.university_name || '';
    },
    getUrlImg: function () {
        return this.photo_50;
    }
});

VKSelect.createSelect('test-select3', {
    items: mockData,
    multiselect: true,
    avatars: false,
    fetch: false,
    url: "/help/search/friends",
    maxNumberItems: countDisplayedItems,
    getText: function () {
        return this.first_name + ' ' + this.last_name;
    },
    getSubtext: function () {
        return this.university_name || '';
    },
    getUrlImg: function () {
        return this.photo_50;
    }
});

VKSelect.createSelect('test-select4', {
    items: mockData,
    multiselect: false,
    avatars: false,
    fetch: false,
    url: "/help/search/friends",
    maxNumberItems: countDisplayedItems,
    getText: function () {
        return this.first_name + ' ' + this.last_name;
    },
    getSubtext: function () {
        return this.university_name || '';
    },
    getUrlImg: function () {
        return this.photo_50;
    }
});


VKSelect.createSelect('test-select5', {
    items: mockData,
    multiselect: true,
    avatars: true,
    fetch: true,
    url: "/help/search/friends",
    maxNumberItems: countDisplayedItems,
    getText: function () {
        return this.first_name + ' ' + this.last_name;
    },
    getSubtext: function () {
        return this.university_name || '';
    },
    getUrlImg: function () {
        return this.photo_50;
    }
});

VKSelect.createSelect('test-select6', {
    items: mockData,
    multiselect: false,
    avatars: true,
    fetch: true,
    url: "/help/search/friends",
    maxNumberItems: countDisplayedItems,
    getText: function () {
        return this.first_name + ' ' + this.last_name;
    },
    getSubtext: function () {
        return this.university_name || '';
    },
    getUrlImg: function () {
        return this.photo_50;
    }
});

VKSelect.createSelect('test-select7', {
    items: mockData,
    multiselect: true,
    avatars: false,
    fetch: true,
    url: "/help/search/friends",
    maxNumberItems: countDisplayedItems,
    getText: function () {
        return this.first_name + ' ' + this.last_name;
    },
    getSubtext: function () {
        return this.university_name || '';
    },
    getUrlImg: function () {
        return this.photo_50;
    }
});

VKSelect.createSelect('test-select8', {
    items: mockData,
    multiselect: false,
    avatars: false,
    fetch: true,
    url: "/help/search/friends",
    maxNumberItems: countDisplayedItems,
    getText: function () {
        return this.first_name + ' ' + this.last_name;
    },
    getSubtext: function () {
        return this.university_name || '';
    },
    getUrlImg: function () {
        return this.photo_50;
    }
});

function getSidebarItemsTemplate(items) {
    let html = getSidebarTitleTemplate();

    for (let i = 0; i < countDisplayedItems && i < items.length; i++)
        html += getSidebarItemTemplate(items[i]);

    return html;
}

function getSidebarTitleTemplate() {
    return `
        <div class="vk-select-demo-sidebar-item vk-select-demo-sidebar__item_type_title vk-select_clear-fix">
            <div class="vk-select-item__info vk-select_direction_left">
                <div class="vk-select-item__text vk-select-item__text_type_empty">All users</div>
            </div>
        </div>
    `;
}

function getSidebarItemTemplate(item) {
    return `<div class="vk-select-item vk-select_clear-fix">
                <img class="vk-select-item__photo vk-select_direction_left"
                     src="${item.photo_50}" alt="${item.first_name + ' ' + item.last_name}">
                <div class="vk-select-item__info">
                    <div class="vk-select-item__text">${item.first_name + ' ' + item.last_name + ' | ' + item.domain}</div>
                    <div class="vk-select-item__subtext">${item.university_name || ''}</div>
                </div>
            </div>`;
}