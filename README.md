# TRZVV

+ TRZVV is basic accounting application developed with expressjs, mongodb and angularjs
+ Following is rest api reference

## /api/register

### POST

##### Request (application/json)

        {
            "password": "@1strongPassword",
            "email": "tomorrow_never_dies@mi6.co.uk"
         }


##### Response 200 (application/json)

        {
            "data":"json web token here"
        }

## /api/auth

### PUT

##### Request (application/json)

        {
            "email": "tomorrow_never_dies@mi6.co.uk",
            "password": "@1strongPassword"
        }

##### Response  200 (application/json)

        {
            "data":"json web token here"
        }

## /api/users

### PUT

##### Request (application/json)

        {
            "email": "Bruce.Wayne@GothamCity.com",
            "password": "batman_forever"
        }

##### Response 200 (application/json)

        {
            "_id": "587bedf6638daa4b8cc2cf3f",
            "email": "Bruce.Wayne@GothamCity.com"
        }


### GET

##### Request
Headers:

      Authorization:  "Bearer someJWT"

##### Response 200 (application/json)

        {
            "_id": "587f4d2ec11393131769121b",
            "companies": [
              {
                "_id": "587f524873261b14ec07355f",
                "director": "Вангел Христов",
                "name": "ТРЗ",
                "bulstat": "123456786"
               }
            ]
        }

## /api/companies

### POST

##### Headers:

      Authorization:  "Bearer someJWT"

##### Request (application/json)

        {
            "user":"587f7327e393c31fdd7329d1",
            "director":"Вангел Христов",
            "name":"ТРЗ",
            "bulstat":"123456786",
            "mainEconomicActivity":"Услуги",
            "address":{
                    "street":"Свобода 4",
                    "city":"Благоевград",
                    "postalCode":"2700",
                    "country":"България"
                },
            "pkpv": 5
        }

##### Response 200 (application/json)

        {
            "__v": 0,
            "user":"587f7327e393c31fdd7329d1",
            "director":"Вангел Христов",
            "name":"ТРЗ",
            "bulstat":"123456786",
            "mainEconomicActivity":"Услуги",
            "address":{
                    "street":"Свобода 4",
                    "city":"Благоевград",
                    "postalCode":"2700",
                    "country":"България"
                },
            "dossiers":[],
            "pkpv": 5,
            "_id": "587f524873261b14ec07355f"
        }


## /api/companies/:companyId

### GET
##### Request

##### Headers:

       Authorization: "Bearer someJWT"

##### Parameters:

       companyId - The _id of the user who created the company


##### Response 200 (application/json)

         {
            "_id": "587f524873261b14ec07355f",
            "user":"587f7327e393c31fdd7329d1",
            "director":"Вангел Христов",
            "name":"ТРЗ",
            "bulstat":"123456786",
            "mainEconomicActivity":"Услуги",
            "pkpv": 5,
            "address":{
                    "street":"Свобода 4",
                    "city":"Благоевград",
                    "postalCode":"2700",
                    "country":"България"
                },
            "dossiers":[
                {
                    "_id":"587f7327e393c31fdd7325d6"
                    "id":{
                        "bulgarian":{
                            "egn":"8601110000",
                            "idCardNumber":"000000000"
                        }
                    },
                    "names":{
                        "first":"Вангел",
                        "middle":"Ванчов",
                      "last":"Христов"
                    }
                }
            ]
        }


### PUT

##### Headers:

        Authorization: "Bearer someJWT"


##### Parameters:

         companyId : The _id of the user who created the company

##### Request (application/json)

        {
            "director": "Владислав Христов",
            "mainEconomicActivity": "Продажби"
        }

##### Response 200 (application/json)

        {
            "_id": "587f74a9b9f1962024d48128",
            "user": "587f7327e393c31fdd7329d1",
            "director": "Владислав Христов",
            "name": "ТРЗ",
            "bulstat": "123456786",
            "mainEconomicActivity": "Продажби",
             "address": {
                    "street": "Свобода 4",
                    "city": "Благоевград",
                    "postalCode": "2700",
                    "country": "България"
                }
            },
            "dossiers": ["587f7327e393c31fdd7325d6"]
        }


## /api/dossiers/:dossierId

### POST
##### Headers:

    Authorization: "Bearer someJWT"
##### Request (application/json)

        {
            "company":"587f74a9b9f1962024d48128",
            "id":{
                "bulgarian":{
                "egn":"8601110000",
                "idCardNumber":"000000000"
                },
            "names":{
                "first":"Вангел",
                "middle":"Ванчов",
                "last":"Христов"
            },
            "address":{
                "street":"Свобода 4",
                "city":"София",
                "postalCode":"2700",
                "country":"България"
            },
            "phoneNumber": "0879940000",
            "education": "Средно",
            "email":"vangel.hristov@yahoo.com",
            "bankAccount":{
              "bank":"post bank",
              "iban":"some iban",
              "bic":"some bic"
            }
        }

##### Response 200 (application/json)

        {
            "_id":"587f74a9b9f1962024d48999",
            "company":"587f74a9b9f1962024d48128",
            "id":{
                "bulgarian":{
                "egn":"8601110000",
                "idCardNumber":"000000000"
            },
            "names":{
                "first":"Вангел",
                "middle":"Ванчов",
                "last":"Христов"
            },
            "address":{
                "street":"Свобода 4",
                "city":"София",
                "postalCode":"2700",
                "country":"България"
            },
            "phoneNumber": "0879940000",
            "education": "Средно",
            "email":"vangel.hristov@yahoo.com",
            "bankAccount":{
              "bank":"post bank",
              "iban":"some iban",
              "bic":"some bic"
            },
            "workContracts":[]
        }


### PUT

##### Parameters:

     dossierId - The _id of the dossier

##### Headers:

    Authorization: "Bearer someJWT"

##### Request (application/json)

        {
            "address":{
                "street":"Александър Малинов 55",
                "city":"София",
                "postalCode":"1100"
            }
        }

##### Response 200 (application/json)

        {
            "_id":"587f74a9b9f1962024d48999",
            "company":"587f74a9b9f1962024d48128",
            "id":{
                "bulgarian":{
                "egn":"8601110000",
                "idCardNumber":"000000000"
            },
            "names":{
                "first":"Вангел",
                "middle":"Ванчов",
                "last":"Христов"
            },
            "address":{
                "street":"Александър Малинов 55",
                "city":"София",
                "postalCode":"1100",
                "country":"България"
            },
            "phoneNumber": "0879940000",
            "education": "Средно",
            "email":"vangel.hristov@yahoo.com",
            "bankAccount":{
              "bank":"post bank",
              "iban":"some iban",
              "bic":"some bic"
            },
            "workContracts":[]
        }


### GET

##### Request

##### Parameters:

     dossierId - The _id of the dossier

##### Headers:
    Authorization: "Bearer someJWT"


##### Response 200 (application/json)

        {
            "_id":"587f74a9b9f1962024d48999",
            "company":"587f74a9b9f1962024d48128",
            "id":{
                "bulgarian":{
                "egn":"8601110000",
                "idCardNumber":"000000000"
            },
            "names":{
                "first":"Вангел",
                "middle":"Ванчов",
                "last":"Христов"
            },
            "address":{
                "street":"Александър Малинов 55",
                "city":"София",
                "postalCode":"1100",
                "country":"България"
            },
            "phoneNumber": "0879940000",
            "education": "Средно",
            "email":"vangel.hristov@yahoo.com",
            "bankAccount":{
              "bank":"post bank",
              "iban":"some iban",
              "bic":"some bic"
            },
            "worcContracts":[
                {
                    "_id": "587fb59d3022362aab5f8e65",
                    "dossier": "587f74a9b9f1962024d48999",
                    "typeInsured": "09",
                    "contractNumber": "A004",
                    "signingDate": "2016-01-11T00:00:00.000Z",
                    "startingDate": "2016-03-11T00:00:00.000Z",
                    "principalSalary": 5000,
                    "contractLength": 24,
                    "workHours": 8,
                    "occupationNKPD": "04",
                    "kid": "A04",
                    "noticeLength": 20,
                    "payedVacationLength": 25,
                    "experience": {
                        "total": 15,
                        "speciality": 12,
                        "insurable": 12
                    }
                }
            ]
        }

## /api/work-contracts/:contractId

### POST

##### Headers:
    Authorization:"Bearer someJWT"

##### Request (application/json)

        {
            "dossier": "587f74a9b9f1962024d48999",
            "typeInsured": "09",
            "contractNumber": "A004",
            "signingDate": "2016-01-11T00:00:00.000Z",
            "startingDate": "2016-03-11T00:00:00.000Z",
            "principalSalary": 5000,
            "contractLength": 24,
            "workHours": 8,
            "occupationNKPD": "04",
            "kid": "A04",
            "noticeLength": 20,
            "payedVacationLength": 25,
            "experience": {
                "total": 15,
                "speciality": 12,
                "insurable": 12
            }
        }

##### Response 200 (application/json)

        {
            "_id": "587fb59d3022362aab5f8e65",
            "dossier": "587f74a9b9f1962024d48999",
            "typeInsured": "09",
            "contractNumber": "A004",
            "signingDate": "2016-01-11T00:00:00.000Z",
            "startingDate": "2016-03-11T00:00:00.000Z",
            "principalSalary": 5000,
            "contractLength": 24,
            "workHours": 8,
            "occupationNKPD": "04",
            "kid": "A04",
            "noticeLength": 20,
            "payedVacationLength": 25,
            "experience": {
                "total": 15,
                "speciality": 12,
                "insurable": 12
            }
        }


### PUT

##### Headers:
    Authorization: "Bearer someJWT"

##### Parameters:
    contractId - The _id of the contract

##### Request (application/json)


        {
            "typeInsured":"01",
            "principalSalary":"5800",
            "experience":{
                "total":"16"
            }
        }

##### Response 200 (application/json)

        {
            "_id": "587fb59d3022362aab5f8e65",
            "dossier": "587f74a9b9f1962024d48999",
            "typeInsured": "01",
            "contractNumber": "A004",
            "signingDate": "2016-01-11T00:00:00.000Z",
            "startingDate": "2016-03-11T00:00:00.000Z",
            "principalSalary": 5800,
            "contractLength": 24,
            "workHours": 8,
            "occupationNKPD": "04",
            "kid": "A04",
            "noticeLength": 20,
            "payedVacationLength": 25,
            "experience": {
                "total": 16,
                "speciality": 12,
                "insurable": 12
            }
        }

### GET
##### Request
##### Headers:
    Authorization: "Bearer someJWT"

##### Parameters:
     contractId - The _id of the contract

##### Response 200 (application/json)

        {
            "_id": "587fb59d3022362aab5f8e65",
            "dossier": "587f74a9b9f1962024d48999",
            "typeInsured": "01",
            "contractNumber": "A004",
            "signingDate": "2016-01-11T00:00:00.000Z",
            "startingDate": "2016-03-11T00:00:00.000Z",
            "principalSalary": 5800,
            "contractLength": 24,
            "workHours": 8,
            "occupationNKPD": "04",
            "kid": "A04",
            "noticeLength": 20,
            "payedVacationLength": 25,
            "experience": {
                "total": 16,
                "speciality": 12,
                "insurable": 12
            }
        }

# Link to [apiary](http://docs.trzvv.apiary.io/#)
