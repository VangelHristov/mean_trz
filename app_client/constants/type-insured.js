(function () {
    'use strict';

    angular
      .module('app')
      .constant('typeInsured', [
          '01 - за работници или служители, осигурени по чл. 4, ал. 1, т. 1 КСО при един работодател, включително и членове на кооперации, работещи по трудово правоотношение в кооперацията, без обхванатите от следващите кодове',
          '02 - за работещи при условията на първа категория труд',
          '03 - за работещи при условията на втора категория труд',
          '04 - за работещи по втори или допълнителен трудов договор',
          '05 - за държавни служители по Закона за държавния служител, доброволците по Закона за защита при бедствия',
          '06 - за военнослужещи по Закона за отбраната и въоръжените сили на Република България, държавните служители по Закона за Министерството на вътрешните работи и по Закона за изпълнение на наказанията и задържането под стража',
          '07 - за следователи по Закона за съдебната власт',
          '08 - за лицата с учителски осигурителен стаж',
          '09 - за членове на кооперации, получаващи възнаграждение за работа без трудово правоотношение в кооперацията',
          '10 - за управителите и прокуристите на търговски дружества и на еднолични търговци и на техните клонове, членовете на съвети на директорите, на управителни и надзорни съвети и контрольорите на търговски дружества, синдиците и ликвидаторите, както и лицата, работещи по договори за управление на неперсонифицирани дружества',
          '11 - за лица, осигурени за инвалидност поради общо заболяване, за старост и за смърт, и за трудова злополука и професионална болест',
          '12 - за самоосигуряващи се',
          '13 - за регистрирани земеделски производители и тютюнопроизводители',
          '14 - за работещи без трудови правоотношения',
          '15 - за лицата, които получават парично обезщетение за безработица',
          '16 - за лица, работещи при сумирано отчитане на работното време за повече от един месец',
          '17 - за служители на Националната разузнавателна служба и служба "Военна информация" на Министерството на отбраната',
          '18 - за лицата по чл. 4, ал. 1, т. 1, 2, 3, 4 и 6; чл. 4, ал. 2 и чл. 4а от Кодекса за социално осигуряване, за които за осигурителен стаж се зачита времето, през което не са работили поради неправилно недопускане или отстраняване от работа или са били без работа поради уволнение, което е признато като незаконно от компетентните органи, или когато са отстранени и впоследствие възстановени на работа по реда, определен в специални закони',
          '19 - за лица, на които за осигурителен стаж се зачита времето по чл. 9, ал. 3, т. 3 КСО',
          '20 - за трудоустроени лица, на които за осигурителен стаж се зачита времето, през което не работят, тъй като не е предоставена подходяща работа от работодателя',
          '21 - за лица, работещи по втори или допълнителен трудов договор, за които осигурителните вноски при основния работодател са внесени върху максималния осигурителен доход и осигурителният стаж се зачита на основание чл. 9, ал. 8 КСО',
          '22 - за самоосигуряващи се, осигурени за инвалидност поради общо заболяване, за старост и смърт, избрали да подават еднократно декларация',
          '23 - за самоосигуряващи се, осигурени за инвалидност поради общо заболяване, за старост и смърт, избрали да подават еднократно декларация и са осигурени върху максималния размер на осигурителния доход по трудово правоотношение, и осигурителният им стаж се зачита на основание чл. 9, ал. 8 КСО',
          '24 - за членове на Висшия съдебен съвет и инспектори към инспектората на Висшия съдебен съвет, съдии, прокурори, кандидатите за младши съдии и младши прокурори по Закона за съдебната власт, държавни съдебни изпълнители, съдии по вписвания и съдебни служители с изключение на военните съдии и прокурори',
          '25 - за лицата, включени в програми за насърчаване на заетостта, които не се осигуряват за безработица',
          '26 - за инвалиди, работници и служители, които работят в специализирани предприятия, кооперации и цехове, съгласно Закона за интеграция на хората с увреждания',
          '27 - за лица, получаващи обезщетение за времето, през което са останали без работа по Кодекса на труда, Закона за държавния служител и Закона за висшето образование',
          '28 - за лица, които внасят само здравноосигурителни вноски (вкл. за лицата по чл. 40, ал. 1, т. 7 от Закона за здравното осигуряване - служители на Българската православна църква и други признати по нормативно установен ред вероизповедания, които не получават възнаграждение за извършвана дейност)',
          '29 - за други (попълва се само по изрично указание на НАП)',
          '71 - за членове на избирателни комисии по Изборния кодекс',
          '72 - за лица, включени в програми за подкрепа на майчинството, които не се осигуряват за безработица',
          '82 - за лица по чл. 4, ал. 1, т. 8 от Кодекса за социално осигуряване - лица, упражняващи трудова дейност на изборни длъжности, както и за служителите с духовно звание на Българската православна църква и други регистрирани вероизповедания по Закона за вероизповеданията с изключение на лицата по чл. 4, ал. 1, т. 1, 5 и 7 КСО',
          '83 - за офицери и сержанти от Националната разузнавателна служба и служба "Военна информация" на Министерството на отбраната',
          '86 - за лица, работещи в международни органи и организации със съгласието на компетентните държавни органи, които са избрали да се осигуряват за своя сметка за фонд "Пенсии"',
          '87 - за лица, изпратени на работа в чужбина от български посредник',
          '88 - за лица, получаващи обезщетение по чл. 230, ал. 1 ЗОВСРБ',
          '89 - за съпрузите на военнослужещи, участващи в международни операции и мисии, получаващи обезщетение по чл. 231, ал. 1 ЗОВСРБ',
          '90 - за лицата, получаващи доходи по § 1, т. 26, буква "и" от допълнителните разпоредби на Закона за данъците върху доходите на физическите лица, за които не се подават данни за държавното обществено осигуряване, допълнително задължително пенсионно осигуряване и здравно осигуряване (осигурителен доход, осигурителни вноски, дни в осигуряване и др.), но задължително се подава информация за данъка по чл. 42 от закона; за лицата, полагащи труда си на територията на Република България, за които се прилага осигурителното законодателство на друга държава, но се дължи данък по чл. 42 от Закона за данъците върху доходите на физическите лица и др. За тези лица се попълват само данните за данъка в полетата на т. 31, 31а, 32 и 33',
          '91 - за съпругите/съпрузите на дългосрочно командированите служители в дипломатическа служба по време на задграничния им мандат',
          '92 - за морските лица',
          '93 - за специализантите, които получават възнаграждение по договор за обучение за придобиване на специалност от номенклатурата на специалностите, определена по реда на чл. 181, ал. 1 от Закона за здравето',
          '94 - за лица, подчинени на законодателството на друга държава съгласно международно споразумение в сферата на социалната сигурност, по което Република България е страна, и за които във връзка с материалния обхват на съответното споразумение се дължат задължителни осигурителни вноски и/или вноски за фонд "Гарантирани вземания на работниците и служителите"',
          '95 - за лицата на длъжност балерина, балетист или танцьор в културни организации',
          '96 - за лицата по чл. 4, ал. 9 от Кодекса за социално осигуряване.'
      ]);
}());
