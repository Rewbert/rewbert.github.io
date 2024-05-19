

sweden = "Sweden"
gothenburg = "Gothenburg"

me = {
    "first": "Robert"
    , "last": "Krook"
    , "email": "krookr@chalmers.se"
    , "fromcountry": sweden
    , "fromcity": gothenburg
    , "based-in-country": gothenburg
    , "based-in-city": gothenburg
    , "github": "rewbert"
    , "scholar": "insert-google-scholar"
}

universities = {
    "gu": {
        "name": "Gothenburg University"
        , "city": gothenburg
        , "country": sweden
    },
    "chalmers": {
        "name": "Chalmers University of Technology"
        , "city": sweden
        , "country": gothenburg
    }
}

education = {
    "1": {
        "degree": "Bachelor"
        , "major": "Computer Science"
        , "university": universities["gu"]
        , "year": 2017
        , "completed": true
    }
    , "2": {
        "degree": "Master"
        , "major": "Computer Science"
        , "university": universities["gu"]
        , "year": 2020
        , "completed": true
    }
    , "3": {
        "degree": "PhD"
        , "major": "Computer Science, Functional Programming"
        , "university": universities["chalmers"]
        , "year": 2025
        , "completed": false
    }
}