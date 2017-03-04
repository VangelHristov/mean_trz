(function () {
    'use strict';

    angular
      .module('app')
      .constant('workContractInputs', {
          text      : {
              typeInsured         : {
                  id      : 'type-insured',
                  required: true,
                  label   : 'Вид осигурен'
              },
              reasonForContract   : {
                  id      : 'reason-for-contract',
                  required: true,
                  label   : 'Основание за сключване'
              },
              contractNumber      : {
                  id      : 'contract-number',
                  required: true,
                  label   : 'Номер на трудов договор'
              },
              salary              : {
                  id      : 'salary',
                  label   : 'Освовна заплата',
                  required: true
              },
              contractLength      : {
                  id      : 'contract-length',
                  label   : 'Срок на договора',
                  required: true
              },
              workHours           : {
                  id      : 'work-hours',
                  label   : 'Работно време',
                  required: true
              },
              ncpd                : {
                  id      : 'ncpd',
                  label   : 'Длъжност НКПД',
                  required: true
              },
              cid                 : {
                  id      : 'cid',
                  label   : 'КИД',
                  required: true
              },
              noticeLength        : {
                  id      : 'notice-length',
                  label   : 'Срок на предизвестие (дни)',
                  required: true
              },
              vacationLength      : {
                  id      : 'vacation-length',
                  label   : 'Отпуск размер',
                  required: true
              },
              totalExperience     : {
                  id      : 'total-experience',
                  label   : 'Общ стаж',
                  required: true
              },
              specialityExperience: {
                  id      : 'speciality-experience',
                  label   : 'Стаж по специалност',
                  required: true
              },
              insurableExperience : {
                  id      : 'insurable-experience',
                  label   : 'Осигурителен стаж',
                  required: true
              }

          },
          select    : {},
          datePicker: {
              signingDate    : {
                  id      : 'signing-date',
                  label   : 'Дата на сключване',
                  required: true
              },
              startingDate   : {
                  id      : 'starting-date',
                  label   : 'Дата на започване',
                  required: true
              },
              terminationDate: {
                  id      : 'termination-date',
                  label   : 'Дата на прекратяване',
                  required: true
              }
          }
      });
}());