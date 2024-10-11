const teams = [
  {
    name: "FC Barcelona",
    image:
      "https://upload.wikimedia.org/wikipedia/ru/thumb/2/24/FC_Barcelona.svg/1024px-FC_Barcelona.svg.png",
    stadium: {
      name: "Camp Nou рџЏџпёЏ",
      capacity: 99354,
    },
    history:
      "Founded in 1899 рџЏ†, FC Barcelona is one of the most successful clubs in European football history. Known for its attacking style of play and world-class players.",
    top_scorer: {
      name: "Lionel Messi рџ‘‘",
      goals: "672 вљЅпёЏ",
    },
    trophies: {
      LaLiga: "27 рџЏ†",
      "UEFA Champions League": "5 рџЏ†",
      "Copa del Rey": "31 рџЏ†",
      "UEFA Super Cup": "5 рџЏ†",
      "FIFA Club World Cup": "3 рџЏ†",
    },
    manager: "Xavi Hernandez рџ§ ",
    founded: "1899 вЏі",
    city: "Barcelona, Spain рџЊЌ",
    colors: ["Blue рџ”µ", "Red рџ”ґ"],
    rivalries: ["Real Madrid вљ”пёЏ", "Espanyol вљ”пёЏ"],
    owner: "Club members (Socios) рџЏў",
    kit: "https://www.soccerlord.se/wp-content/uploads/2018/09/Barcelona-Home-Long-Sleeve-Football-Shirt-24-25.jpg",
    id: 1,
  },
  {
    name: "Real Madrid CF",
    image:
      "https://upload.wikimedia.org/wikipedia/ru/thumb/8/8a/FC_Real_Madrid_Logo.svg/800px-FC_Real_Madrid_Logo.svg.png",
    stadium: {
      name: "Santiago BernabГ©u рџЏџпёЏ",
      capacity: 81044,
    },
    history:
      "Founded in 1902 рџЏ†, Real Madrid is one of the most popular and successful football clubs in the world. The club is known for its strong European success.",
    top_scorer: {
      name: "Cristiano Ronaldo рџ‘‘",
      goals: "450 вљЅпёЏ",
    },
    trophies: {
      LaLiga: "35 рџЏ†",
      "UEFA Champions League": "14 рџЏ†",
      "Copa del Rey": "20 рџЏ†",
      "UEFA Super Cup": "5 рџЏ†",
      "FIFA Club World Cup": "4 рџЏ†",
    },
    manager: "Carlo Ancelotti рџ§ ",
    founded: "1902 вЏі",
    city: "Madrid, Spain рџЊЌ",
    colors: ["White вљЄпёЏ"],
    rivalries: ["FC Barcelona вљ”пёЏ", "AtlГ©tico Madrid вљ”пёЏ"],
    owner: "Club members (Socios) рџЏў",
    kit: "https://shop.realmadrid.com/_next/image?url=https%3A%2F%2Flegends.broadleafcloud.com%2Fapi%2Fasset%2Fcontent%2FRMCFMZ0195-01-1.jpg%3FcontextRequest%3D%257B%2522forceCatalogForFetch%2522%3Afalse%2C%2522forceFilterByCatalogIncludeInheritance%2522%3Afalse%2C%2522forceFilterByCatalogExcludeInheritance%2522%3Afalse%2C%2522applicationId%2522%3A%252201H4RD9NXMKQBQ1WVKM1181VD8%2522%2C%2522tenantId%2522%3A%2522REAL_MADRID%2522%257D&w=1200&q=50",
    id: 2,
  },
  {
    name: "Manchester United FC",
    image:
      "https://upload.wikimedia.org/wikipedia/ru/thumb/7/7a/Manchester_United_FC_crest.svg/1024px-Manchester_United_FC_crest.svg.png",
    stadium: {
      name: "Old Trafford рџЏџпёЏ",
      capacity: 74879,
    },
    history:
      "Founded in 1878 рџЏ†, Manchester United is one of the most successful English clubs with a rich history. Known for their iconic 'Class of '92'.",
    top_scorer: {
      name: "Wayne Rooney рџ‘‘",
      goals: "253 вљЅпёЏ",
    },
    trophies: {
      "Premier League": "20 рџЏ†",
      "UEFA Champions League": "3 рџЏ†",
      "FA Cup": "12 рџЏ†",
      "EFL Cup": "5 рџЏ†",
      "FIFA Club World Cup": "1 рџЏ†",
    },
    manager: "Erik ten Hag рџ§ ",
    founded: "1878 вЏі",
    city: "Manchester, England рџЊЌ",
    colors: ["Red рџ”ґ", "White вљЄпёЏ"],
    rivalries: ["Manchester City вљ”пёЏ", "Liverpool вљ”пёЏ"],
    owner: "Glazer Family рџЏў",
    kit: "https://footballcentral.co.nz/cdn/shop/files/ManchesterUnitedAdultHomeJersey2425_f4291c4c-0af5-4df2-b0c2-3329ccda5461_700x700.jpg?v=1720014868",
    id: 3,
  },
  {
    name: "Liverpool FC",
    image:
      "https://upload.wikimedia.org/wikipedia/ru/thumb/0/0a/FC_Liverpool.svg/800px-FC_Liverpool.svg.png",
    stadium: {
      name: "Anfield рџЏџпёЏ",
      capacity: 53394,
    },
    history:
      "Founded in 1892 рџЏ†, Liverpool FC is one of the most decorated English clubs. The team is known for its passionate fans and 'You'll Never Walk Alone' anthem.",
    top_scorer: {
      name: "Ian Rush рџ‘‘",
      goals: "346 вљЅпёЏ",
    },
    trophies: {
      "Premier League": "19 рџЏ†",
      "UEFA Champions League": "6 рџЏ†",
      "FA Cup": "8 рџЏ†",
      "EFL Cup": "9 рџЏ†",
      "FIFA Club World Cup": "1 рџЏ†",
    },
    manager: "JГјrgen Klopp рџ§ ",
    founded: "1892 вЏі",
    city: "Liverpool, England рџЊЌ",
    colors: ["Red рџ”ґ"],
    rivalries: ["Manchester United вљ”пёЏ", "Everton вљ”пёЏ"],
    owner: "Fenway Sports Group рџЏў",
    kit: "https://www.soccerlord.se/wp-content/uploads/2019/04/Liverpool-Home-Football-Shirt-24-25.jpg",
    id: 4,
  },
  {
    name: "Bayern Munich",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg/1024px-FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg.png",
    stadium: {
      name: "Allianz Arena рџЏџпёЏ",
      capacity: 75000,
    },
    history:
      "Founded in 1900 рџЏ†, Bayern Munich is the most successful German club, known for its dominance in the Bundesliga and European success.",
    top_scorer: {
      name: "Gerd MГјller рџ‘‘",
      goals: "566 вљЅпёЏ",
    },
    trophies: {
      Bundesliga: "33 рџЏ†",
      "UEFA Champions League": "6 рџЏ†",
      "DFB-Pokal": "20 рџЏ†",
      "UEFA Super Cup": "2 рџЏ†",
      "FIFA Club World Cup": "2 рџЏ†",
    },
    manager: "Thomas Tuchel рџ§ ",
    founded: "1900 вЏі",
    city: "Munich, Germany рџЊЌ",
    colors: ["Red рџ”ґ", "White вљЄпёЏ"],
    rivalries: ["Borussia Dortmund вљ”пёЏ"],
    owner: "Club members (75%) and Audi, Adidas, Allianz (25%) рџЏў",
    kit: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgPPdc08vo_BG3uAjNcfsi5IF1D4oJUu2EfRgcCxhGEc4RhUh_273PcrEhvjjuPhXqPRG1P0bXOGLJj98Lp4PdtKuC-pYuhugrmBabyuEWW8cMGCq-kSf4wwvPOIwwV0I0X3q0NZJS1atuInA79o4XTj9dRP3yCwH7-XNViUcmjzgXSdo_qrCxg7msUyLgz/s1000/bayern%2024-25%20home%20kit%20red%20white%20%283%29.jpg",
    id: 5,
  },
  {
    name: "Paris Saint-Germain",
    image:
      "https://upload.wikimedia.org/wikipedia/ru/thumb/a/a7/Paris_Saint-Germain_F.C..svg/1024px-Paris_Saint-Germain_F.C..svg.png",
    stadium: {
      name: "Parc des Princes рџЏџпёЏ",
      capacity: 47929,
    },
    history:
      "Founded in 1970 рџЏ†, Paris Saint-Germain (PSG) is one of the most successful French clubs, especially in the recent decade.",
    top_scorer: {
      name: "Edinson Cavani рџ‘‘",
      goals: "200 вљЅпёЏ",
    },
    trophies: {
      "Ligue 1": "11 рџЏ†",
      "Coupe de France": "14 рџЏ†",
      "Coupe de la Ligue": "9 рџЏ†",
      "TrophГ©e des Champions": "11 рџЏ†",
    },
    manager: "Luis Enrique рџ§ ",
    founded: "1970 вЏі",
    city: "Paris, France рџЊЌ",
    colors: ["Blue рџ”µ", "Red рџ”ґ"],
    rivalries: ["Marseille вљ”пёЏ"],
    owner: "Qatar Sports Investments рџЏў",
    kit: "https://images.footballfanatics.com/paris-saint-germain/psg-nike-home-stadium-shirt-2024-25_ss5_p-200827669+pv-2+u-zsehjrrtq4aszhqrqd0f+v-gfgancmusfnavrx7ghgz.jpg?_hv=2&w=900",
    id: 6,
  },
  {
    name: "Juventus FC",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Juventus_FC_-_pictogram_black_%28Italy%2C_2017%29.svg/800px-Juventus_FC_-_pictogram_black_%28Italy%2C_2017%29.svg.png",
    stadium: {
      name: "Allianz Stadium рџЏџпёЏ",
      capacity: 41507,
    },
    history:
      "Founded in 1897 рџЏ†, Juventus is the most successful Italian club, known for its success in Serie A and notable players like Alessandro Del Piero.",
    top_scorer: {
      name: "Alessandro Del Piero рџ‘‘",
      goals: "290 вљЅпёЏ",
    },
    trophies: {
      "Serie A": "36 рџЏ†",
      "Coppa Italia": "14 рџЏ†",
      "UEFA Champions League": "2 рџЏ†",
      "UEFA Europa League": "3 рџЏ†",
      "Supercoppa Italiana": "9 рџЏ†",
    },
    manager: "Massimiliano Allegri рџ§ ",
    founded: "1897 вЏі",
    city: "Turin, Italy рџЊЌ",
    colors: ["Black вљ«пёЏ", "White вљЄпёЏ"],
    rivalries: ["Inter Milan вљ”пёЏ", "AC Milan вљ”пёЏ"],
    owner: "Agnelli Family (Exor N.V.) рџЏў",
    kit: "https://store.juventus.com/images/juventus/products/large/JU24E81_1.webp",
    id: 7,
  },
  {
    name: "Manchester City FC",
    image:
      "https://upload.wikimedia.org/wikipedia/ru/thumb/9/96/Manchester_City_FC.svg/1024px-Manchester_City_FC.svg.png",
    stadium: {
      name: "Etihad Stadium рџЏџпёЏ",
      capacity: 53400,
    },
    history:
      "Founded in 1880 рџЏ†, Manchester City became a major force in English football in the 2010s with the backing of the Abu Dhabi United Group.",
    top_scorer: {
      name: "Sergio AgГјero рџ‘‘",
      goals: "260 вљЅпёЏ",
    },
    trophies: {
      "Premier League": "9 рџЏ†",
      "FA Cup": "6 рџЏ†",
      "EFL Cup": "8 рџЏ†",
      "UEFA Champions League": "1 рџЏ†",
    },
    manager: "Pep Guardiola рџ§ ",
    founded: "1880 вЏі",
    city: "Manchester, England рџЊЌ",
    colors: ["Sky Blue рџ”µ", "White вљЄпёЏ"],
    rivalries: ["Manchester United вљ”пёЏ"],
    owner: "City Football Group рџЏў",
    kit: "https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog-MAN/default/dw887b23ea/images/large/701230876001_pp_01_mcfc.png?sw=800&sh=800&sm=fit",
    id: 8,
  },
  {
    name: "Chelsea FC",
    image:
      "https://upload.wikimedia.org/wikipedia/ru/thumb/f/f7/FC_Chelsea_Logo.svg/1024px-FC_Chelsea_Logo.svg.png",
    stadium: {
      name: "Stamford Bridge рџЏџпёЏ",
      capacity: 41837,
    },
    history:
      "Founded in 1905 рџЏ†, Chelsea became a major force in English football in the 2000s after being purchased by Roman Abramovich.",
    top_scorer: {
      name: "Frank Lampard рџ‘‘",
      goals: "211 вљЅпёЏ",
    },
    trophies: {
      "Premier League": "6 рџЏ†",
      "UEFA Champions League": "2 рџЏ†",
      "FA Cup": "8 рџЏ†",
      "EFL Cup": "5 рџЏ†",
      "UEFA Europa League": "2 рџЏ†",
    },
    manager: "Mauricio Pochettino рџ§ ",
    founded: "1905 вЏі",
    city: "London, England рџЊЌ",
    colors: ["Blue рџ”µ", "White вљЄпёЏ"],
    rivalries: ["Arsenal вљ”пёЏ", "Tottenham вљ”пёЏ"],
    owner: "Clearlake Capital (Todd Boehly consortium) рџЏў",
    kit: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEixQ6nlTxrwxSOZvnsV404erKG0WnKXUGZCwrfuiyT_IDoCByIIGPQMksgiPIioaF-IqcRxMpnco6kiYYG5kwK2ZucMQ4_WZo-yg3XS62rPOjv3eXz-ubIgWa9UJ5LMdVQhECvGjWcPDFS2-BBDsELqbvce-c4D3hU0UOUwgBVhCaSmUmHcyA1phkHhAoXo/s1600/chelsea%2024%2025%20kit%20%288%29.jpg",
    id: 9,
  },
  {
    name: "AC Milan",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Logo_of_AC_Milan.svg/800px-Logo_of_AC_Milan.svg.png",
    stadium: {
      name: "San Siro рџЏџпёЏ",
      capacity: 80018,
    },
    history:
      "Founded in 1899 рџЏ†, AC Milan is one of the most successful Italian clubs, known for its European success in the 1990s.",
    top_scorer: {
      name: "Gunnar Nordahl рџ‘‘",
      goals: "221 вљЅпёЏ",
    },
    trophies: {
      "Serie A": "19 рџЏ†",
      "UEFA Champions League": "7 рџЏ†",
      "Coppa Italia": "5 рџЏ†",
      "UEFA Super Cup": "5 рџЏ†",
      "FIFA Club World Cup": "1 рџЏ†",
    },
    manager: "Stefano Pioli рџ§ ",
    founded: "1899 вЏі",
    city: "Milan, Italy рџЊЌ",
    colors: ["Red рџ”ґ", "Black вљ«пёЏ"],
    rivalries: ["Inter Milan вљ”пёЏ"],
    owner: "RedBird Capital Partners рџЏў",
    kit: "https://store.acmilan.com/cdn/shop/files/774949-A81_01_2738c450-dc7c-49a3-a94f-92f287d6bd98_grande.jpg?v=1716443193",
    id: 10,
  },
  {
    name: "AtlГ©tico Madrid",
    image:
      "https://upload.wikimedia.org/wikipedia/ru/thumb/0/01/FC_Atletico_Madrid_Logo.svg/800px-FC_Atletico_Madrid_Logo.svg.png",
    stadium: {
      name: "Wanda Metropolitano рџЏџпёЏ",
      capacity: 68456,
    },
    history:
      "Founded in 1903 рџЏ†, AtlГ©tico Madrid is known for its resilient defense and passionate supporters. One of the most successful Spanish clubs.",
    top_scorer: {
      name: "Luis AragonГ©s рџ‘‘",
      goals: "172 вљЅпёЏ",
    },
    trophies: {
      LaLiga: "11 рџЏ†",
      "UEFA Europa League": "3 рџЏ†",
      "Copa del Rey": "10 рџЏ†",
      "UEFA Super Cup": "3 рџЏ†",
      "Intercontinental Cup": "1 рџЏ†",
    },
    manager: "Diego Simeone рџ§ ",
    founded: "1903 вЏі",
    city: "Madrid, Spain рџЊЌ",
    colors: ["Red рџ”ґ", "White вљЄпёЏ"],
    rivalries: ["Real Madrid вљ”пёЏ"],
    owner: "Miguel ГЃngel Gil MarГ­n рџЏў",
    kit: "https://shop.atleticodemadrid.com/on/demandware.static/-/Sites-atm-master-catalog/default/dw1b391709/FN8790-406.jpg",
    id: 11,
  },
  {
    name: "Inter Milan",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/FC_Internazionale_Milano_2021.svg/1024px-FC_Internazionale_Milano_2021.svg.png",
    stadium: {
      name: "San Siro рџЏџпёЏ",
      capacity: 80018,
    },
    history:
      "Founded in 1908 рџЏ†, Inter Milan is one of the most successful Italian clubs, known for its rivalry with AC Milan and its European triumphs.",
    top_scorer: {
      name: "Giuseppe Meazza рџ‘‘",
      goals: "284 вљЅпёЏ",
    },
    trophies: {
      "Serie A": "19 рџЏ†",
      "UEFA Champions League": "3 рџЏ†",
      "Coppa Italia": "9 рџЏ†",
      "Supercoppa Italiana": "7 рџЏ†",
      "FIFA Club World Cup": "1 рџЏ†",
    },
    manager: "Simone Inzaghi рџ§ ",
    founded: "1908 вЏі",
    city: "Milan, Italy рџЊЌ",
    colors: ["Black вљ«пёЏ", "Blue рџ”µ"],
    rivalries: ["AC Milan вљ”пёЏ"],
    owner: "Suning Holdings Group рџЏў",
    kit: "https://italiansportswearcollection.com/cdn/shop/files/InterMilanNikeHome24_25.jpg?v=1723676249",
    id: 12,
  },
  {
    name: "Ajax Amsterdam",
    image:
      "https://upload.wikimedia.org/wikipedia/ru/thumb/7/79/Ajax_Amsterdam.svg/1024px-Ajax_Amsterdam.svg.png",
    stadium: {
      name: "Johan Cruyff Arena рџЏџпёЏ",
      capacity: 55000,
    },
    history:
      "Founded in 1900 рџЏ†, Ajax is the most successful Dutch club, known for its youth academy and 'Total Football' philosophy.",
    top_scorer: {
      name: "Piet van Reenen рџ‘‘",
      goals: "273 вљЅпёЏ",
    },
    trophies: {
      Eredivisie: "36 рџЏ†",
      "UEFA Champions League": "4 рџЏ†",
      "KNVB Cup": "20 рџЏ†",
      "UEFA Super Cup": "3 рџЏ†",
      "Intercontinental Cup": "2 рџЏ†",
    },
    manager: "Maurice Steijn рџ§ ",
    founded: "1900 вЏі",
    city: "Amsterdam, Netherlands рџЊЌ",
    colors: ["Red рџ”ґ", "White вљЄпёЏ"],
    rivalries: ["PSV Eindhoven вљ”пёЏ"],
    owner: "Publicly Traded (Euronext) рџЏў",
    kit: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjLdzCSW2G0AKixHbFZMK52l42Ov8wzB7lD2aIvJ5BgZeU5ngzZXe07h6r5_GDRwjzFI3T-Ldp-gGEVcVaCK4GwmR9FzeVhc_BR8L1AmQQT0rDdcfIwlAznmuLgsS-gKUxQA2Jmb_79whhV_-CCWk9VFI0uI2sfvZLK4XszmE_yfB3XGUnyXBt7KisyRzY/s1600/ajax-24-25-home-kit%20%282%29.jpg",
    id: 13,
  },
  {
    name: "Borussia Dortmund",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/67/Borussia_Dortmund_logo.svg",
    stadium: {
      name: "Signal Iduna Park рџЏџпёЏ",
      capacity: 81365,
    },
    history:
      "Founded in 1909 рџЏ†, Borussia Dortmund is known for its passionate fans and attacking football. The club has a rich history in German football.",
    top_scorer: {
      name: "Alfred Preissler рџ‘‘",
      goals: "177 вљЅпёЏ",
    },
    trophies: {
      Bundesliga: "8 рџЏ†",
      "DFB-Pokal": "5 рџЏ†",
      "UEFA Champions League": "1 рџЏ†",
      "DFL-Supercup": "6 рџЏ†",
      "UEFA Europa League": "1 рџЏ†",
    },
    manager: "Edin TerziД‡ рџ§ ",
    founded: "1909 вЏі",
    city: "Dortmund, Germany рџЊЌ",
    colors: ["Yellow рџџЎ", "Black вљ«пёЏ"],
    rivalries: ["Bayern Munich вљ”пёЏ"],
    owner: "Borussia Dortmund GmbH & Co. KGaA рџЏў",
    kit: "https://www.bvbonlineshop.com/media/image/a6/26/2f/83912-1b73527656435_600x600.jpg",
    id: 14,
  },
  {
    name: "Tottenham Hotspur FC",
    image:
      "https://upload.wikimedia.org/wikipedia/ru/thumb/b/b4/Tottenham_Hotspur.svg/800px-Tottenham_Hotspur.svg.png",
    stadium: {
      name: "Tottenham Hotspur Stadium рџЏџпёЏ",
      capacity: 62850,
    },
    history:
      "Founded in 1882 рџЏ†, Tottenham Hotspur is a prominent English club, known for its attacking football and fierce rivalry with Arsenal.",
    top_scorer: {
      name: "Harry Kane рџ‘‘",
      goals: "280 вљЅпёЏ",
    },
    trophies: {
      "Premier League": "2 рџЏ†",
      "FA Cup": "8 рџЏ†",
      "EFL Cup": "4 рџЏ†",
      "UEFA Europa League": "2 рџЏ†",
    },
    manager: "Ange Postecoglou рџ§ ",
    founded: "1882 вЏі",
    city: "London, England рџЊЌ",
    colors: ["White вљЄпёЏ", "Blue рџ”µ"],
    rivalries: ["Arsenal вљ”пёЏ", "Chelsea вљ”пёЏ"],
    owner: "ENIC Group рџЏў",
    kit: "https://cdn11.bigcommerce.com/s-5e8c3uvulz/images/stencil/original/products/15481/31904/YHSS24_NK_STADIUM_SS_SHIRT_1__08677.1718195503.jpg?c=1",
    id: 15,
  },
  {
    name: "AS Roma",
    image:
      "https://upload.wikimedia.org/wikipedia/ru/thumb/f/f7/AS_Roma_logo_%282017%29.svg/800px-AS_Roma_logo_%282017%29.svg.png",
    stadium: {
      name: "Stadio Olimpico рџЏџпёЏ",
      capacity: 72698,
    },
    history:
      "Founded in 1927 рџЏ†, AS Roma is a historic club from Italy, known for its passionate fanbase and rivalry with Lazio.",
    top_scorer: {
      name: "Francesco Totti рџ‘‘",
      goals: "307 вљЅпёЏ",
    },
    trophies: {
      "Serie A": "3 рџЏ†",
      "Coppa Italia": "9 рџЏ†",
      "Supercoppa Italiana": "2 рџЏ†",
      "UEFA Europa Conference League": "1 рџЏ†",
    },
    manager: "JosГ© Mourinho рџ§ ",
    founded: "1927 вЏі",
    city: "Rome, Italy рџЊЌ",
    colors: ["Red рџ”ґ", "Yellow рџџЎ"],
    rivalries: ["Lazio вљ”пёЏ"],
    owner: "The Friedkin Group рџЏў",
    kit: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjK6poyhh4YXS98ZibwYSiNalbQroD3tEvxI9dvK2UvKtuMRt9GH1xavt75Vp3H4uNUjBdNaclMbuSb7FHcfqaar4HuQJqd0cB62ZtAteY4At1GN43xMDLObf2eYt6hdCA5BYjE_xGJ__UCdSHBVJ6Lj3KCecD91KV7iHfJ5Bj1HSiqy5NGAt90XPzJ7gs/s1600/as-roma-24-25-home-kit%20%289%29.jpg",
    id: 16,
  },
  {
    name: "SL Benfica",
    image:
      "https://upload.wikimedia.org/wikipedia/ru/thumb/6/6a/SL_Benfica_Logo.svg/1024px-SL_Benfica_Logo.svg.png",
    stadium: {
      name: "EstГЎdio da Luz рџЏџпёЏ",
      capacity: 64642,
    },
    history:
      "Founded in 1904 рџЏ†, SL Benfica is the most successful club in Portugal, known for its dominance in the Primeira Liga.",
    top_scorer: {
      name: "EusГ©bio рџ‘‘",
      goals: "473 вљЅпёЏ",
    },
    trophies: {
      "Primeira Liga": "38 рџЏ†",
      "TaГ§a de Portugal": "26 рџЏ†",
      "UEFA Champions League": "2 рџЏ†",
      "TaГ§a da Liga": "7 рџЏ†",
      "SupertaГ§a CГўndido de Oliveira": "8 рџЏ†",
    },
    manager: "Roger Schmidt рџ§ ",
    founded: "1904 вЏі",
    city: "Lisbon, Portugal рџЊЌ",
    colors: ["Red рџ”ґ", "White вљЄпёЏ"],
    rivalries: ["Sporting CP вљ”пёЏ", "Porto вљ”пёЏ"],
    owner: "Club members (Socios) рџЏў",
    id: 17,
  },
  {
    name: "Porto FC",
    image:
      "https://upload.wikimedia.org/wikipedia/ru/thumb/f/f1/FC_Porto.svg/800px-FC_Porto.svg.png",
    stadium: {
      name: "EstГЎdio do DragГЈo рџЏџпёЏ",
      capacity: 50033,
    },
    history:
      "Founded in 1893 рџЏ†, Porto FC is one of PortugalвЂ™s 'Big Three' clubs and has achieved great success domestically and in European competitions.",
    top_scorer: {
      name: "Fernando Gomes рџ‘‘",
      goals: "355 вљЅпёЏ",
    },
    trophies: {
      "Primeira Liga": "30 рџЏ†",
      "TaГ§a de Portugal": "19 рџЏ†",
      "UEFA Champions League": "2 рџЏ†",
      "TaГ§a da Liga": "2 рџЏ†",
      "SupertaГ§a CГўndido de Oliveira": "23 рџЏ†",
    },
    manager: "SГ©rgio ConceiГ§ГЈo рџ§ ",
    founded: "1893 вЏі",
    city: "Porto, Portugal рџЊЌ",
    colors: ["Blue рџ”µ", "White вљЄпёЏ"],
    rivalries: ["Benfica вљ”пёЏ", "Sporting CP вљ”пёЏ"],
    owner: "Club members (Socios) рџЏў",
    kit: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjhOXfrVqUm_wpfWFvvorYHog1IsrBNExPOjWY7BfQ-zqTK30mPIQy5EjNDZIct1oOcMHSajZRhiNkId5KUA7NMUzpohi0Axe7UjXw7SFK863oKuY0DtzLUuGMvMf9IRoZM7Y3Ur4E4U7ot-6l7brrEv1yuccuu7T2rtpn8IQlxAaLmHb1u71jo7VsllgQ/s1000/benfica-24-25-home-kit%20%282%29.jpg",
    id: 18,
  },
  {
    name: "Lazio",
    image:
      "https://upload.wikimedia.org/wikipedia/ru/thumb/7/78/FC_Lazio_Logo.svg/1024px-FC_Lazio_Logo.svg.png",
    stadium: {
      name: "Stadio Olimpico рџЏџпёЏ",
      capacity: 72698,
    },
    history:
      "Founded in 1900 рџЏ†, Lazio is one of ItalyвЂ™s oldest and most historic clubs, with a fierce rivalry with AS Roma.",
    top_scorer: {
      name: "Ciro Immobile рџ‘‘",
      goals: "195 вљЅпёЏ",
    },
    trophies: {
      "Serie A": "2 рџЏ†",
      "Coppa Italia": "7 рџЏ†",
      "Supercoppa Italiana": "5 рџЏ†",
      "UEFA Super Cup": "1 рџЏ†",
      "UEFA Europa League": "1 рџЏ†",
    },
    manager: "Maurizio Sarri рџ§ ",
    founded: "1900 вЏі",
    city: "Rome, Italy рџЊЌ",
    colors: ["Sky Blue рџ”µ", "White вљЄпёЏ"],
    rivalries: ["AS Roma вљ”пёЏ"],
    owner: "Claudio Lotito рџЏў",
    kit: "https://www.laziostylestore.com/images/lazio/products/large/LZ24A01.webp",
    id: 19,
  },
  {
    name: "Napoli",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/SSC_Napoli_2024_%28deep_blue_navy%29.svg/1200px-SSC_Napoli_2024_%28deep_blue_navy%29.svg.png",
    stadium: {
      name: "Stadio Diego Armando Maradona рџЏџпёЏ",
      capacity: 54726,
    },
    history:
      "Founded in 1926 рџЏ†, Napoli is one of Italy's most iconic clubs, known for its passionate fan base and historic success, particularly during the Maradona era.",
    top_scorer: {
      name: "Dries Mertens рџ‘‘",
      goals: "148 вљЅпёЏ",
    },
    trophies: {
      "Serie A": "3 рџЏ†",
      "Coppa Italia": "6 рџЏ†",
      "Supercoppa Italiana": "2 рџЏ†",
      "UEFA Cup": "1 рџЏ†",
    },
    manager: "Rudi Garcia рџ§ ",
    founded: "1926 вЏі",
    city: "Naples, Italy рџЊЌ",
    colors: ["Sky Blue рџ”µ", "White вљЄпёЏ"],
    rivalries: ["Juventus вљ”пёЏ", "AS Roma вљ”пёЏ"],
    owner: "Aurelio De Laurentiis рџЏў",
    kit: "https://sc01.alicdn.com/kf/H23133b5c82d244cd82653390b7f5a1b3s.jpg",
    id: 20,
  },
];
// 1
function club() {
  let a = prompt("Savolingizni kiriting");

  if (a == "Manager" || a == "manager" || a == "MANAGER") {
    const managers = [];
    for (let i = 0; i < teams.length; i++) {
      managers.push({
        id: teams[i].id,
        name: teams[i].name,
        manager: teams[i].manager,
      });
    }
    return managers;
  } else if (a == "Owner" || a == "owner" || a == "OWNER") {
    const owners = [];
    for (let i = 0; i < teams.length; i++) {
      owners.push({
        id: teams[i].id,
        name: teams[i].name,
        owner: teams[i].owner,
      });
    }
    return owners;
  } else if (a == "Stadium" || "stadium" || "STADIUM") {
    const stadiums = [];
    for (let i = 0; i < teams.length; i++) {
      stadiums.push({
        id: teams[i].id,
        name: teams[i].name,
        stadium: teams[i].stadium,
      });
    }
    return stadiums;
  } else if (a == "History" || "history" || "history") {
    const historys = [];
    for (let i = 0; i < teams.length; i++) {
      historys.push({
        id: teams[i].id,
        name: teams[i].name,
        history: teams[i].history,
      });
    }
    return historys;
  } else if (a == "Top scorer" || "top scorer" || "TOP SCORER") {
    const topScorer = [];
    for (let i = 0; i < teams.length; i++) {
      topScorer({
        id: teams[i].id,
        name: teams[i].name,
        top_scorer: teams[i].top_scorer,
      });
    }
    return topScorer;
  } else if (a == "Trophies" || "trophies" || "TROPHIES") {
    const trophiess = [];
    for (let i = 0; i < teams.length; i++) {
      trophiess.push({
        id: teams[i].id,
        name: teams[i].name,
        trophies: teams[i].trophies,
      });
    }
    return trophiess;
  } else if (a == "Foundet" || "founded" || "FOUNDED") {
    const foundeds = [];
    for (let i = 0; i < teams.length; i++) {
      foundeds.push({
        id: teams[i].id,
        name: teams[i].name,
        founded: teams[i].founded,
      });
    }
    return foundeds;
  } else if (a == "city" || "City" || "CITY") {
    const citys = [];
    for (let i = 0; i < teams.length; i++) {
      citys.push({ id: teams[i].id, name: teams[i].name, city: teams[i].city });
    }
  } else if (a == "Colors" || "colors" || "COLORS") {
    const colorss = [];
    for (let i = 0; i < teams.length; i++) {
      colors.push({
        id: teams[i].id,
        name: teams[i].name,
        colors: teams[i].colors,
      });
    }
    return colorss;
  } else if (a == "Rivalries" || "rivalries" || "RIVALRIES") {
    const rivalriess = [];
    for (let i = 0; i < teams.length; i++) {
      rivalriess.push({
        id: teams[i].id,
        name: teams[i].name,
        rivalries: teams[i].rivalries,
      });
    }
    return rivalriess;
  }
}
console.log(club());
