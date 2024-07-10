//Retreive the template data from the HTML .
var template = $('#art-present').html();

var context = {

  "slides": [{
      "art-name": "Interchange",
      "artist-name": "Willem de Kooning",
      "type": "Oil on canvas",
      "location": "Private collection of Kenneth C. Griffin",
      "year": "1955",
      "img-link": "https://upload.wikimedia.org/wikipedia/en/5/58/Interchange_%28de_Kooning%29.jpg",
      "price": "428 535",
      "usd": "300",
      "currency": "btc"
    },

    {
      "art-name": "When Will You Marry?",
      "artist-name": "Paul Gauguin",
      "type": "Oil on canvas",
      "location": "Fondation Beyeler, Riehen, Switzerland",
      "year": "1892",
      "img-link": "http://bit.ly/2f2KwZ4",
      "price": "405 493",
      "usd": "300",
      "currency": "btc"
    },

    {
      "art-name": "The Card Players",
      "artist-name": "Paul Cézanne",
      "type": "Oil on canvas",
      "location": "Private collection",
      "year": "1892",
      "img-link": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Paul_C%C3%A9zanne_222.jpg/1280px-Paul_C%C3%A9zanne_222.jpg",
      "price": "384 507",
      "usd": "273",
      "currency": "btc"
    },

    {
      "art-name": "Number 17A",
      "artist-name": "Jackson Pollock",
      "type": "Oil on fiberboard",
      "location": "Private collection",
      "year": "1948",
      "img-link": "https://upload.wikimedia.org/wikipedia/en/f/f2/Number_17A.jpg",
      "price": "281 690",
      "usd": "200",
      "currency": "btc"
    },

    {
      "art-name": "No. 6",
      "artist-name": "Mark Rothko",
      "type": "Oil on canvas",
      "location": "Private collection",
      "year": "1951",
      "img-link": "https://upload.wikimedia.org/wikipedia/en/0/03/No._6_%28Violet%2C_Green_and_Red%29.jpg",
      "price": "261 972",
      "usd": "186",
      "currency": "btc"
    },

    {
      "art-name": "Pendant portraits of Maerten Soolmans and Oopjen Coppit",
      "artist-name": "Rembrandt van Rijn",
      "type": "Oil on canvas",
      "location": "Louvre and Rijksmuseum",
      "year": "1634",
      "img-link": "https://upload.wikimedia.org/wikipedia/commons/7/78/Pendant_portraits_of_Maerten_Soolmans_and_Oopjen_Coppit.jpeg",
      "price": "253 521",
      "usd": "180",
      "currency": "btc"
    },

    {
      "art-name": "Les Femmes d'Alger",
      "artist-name": "Pablo Picasso",
      "type": "Oil on canvas",
      "location": "Private collection of Hamad bin Jassim bin Jaber Al Thani, Doha, Qatar",
      "year": "1955",
      "img-link": "https://upload.wikimedia.org/wikipedia/en/b/b5/Les_femmes_d%E2%80%99Alger%2C_Picasso%2C_version_O.jpg",
      "price": "252 676",
      "usd": "179.4",
      "currency": "btc"
    },

    {
      "art-name": "Nu couché",
      "artist-name": "Amedeo Modigliani",
      "type": "Oil on canvas",
      "location": "Private collection",
      "year": "1917",
      "img-link": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Modigliani_-_Nu_couch%C3%A9.jpg/1280px-Modigliani_-_Nu_couch%C3%A9.jpg",
      "price": "240 000",
      "usd": "170.4",
      "currency": "btc"
    },

    {
      "art-name": "No. 5, 1948",
      "artist-name": "Jackson Pollock",
      "type": "Oil on fiberboard",
      "location": "Private collection, New York",
      "year": "1948",
      "img-link": "https://upload.wikimedia.org/wikipedia/en/4/4a/No._5%2C_1948.jpg",
      "price": "231 831",
      "usd": "164.6",
      "currency": "btc"
    },

    {
      "art-name": "Woman III",
      "artist-name": "Willem de Kooning",
      "type": "Oil on canvas",
      "location": "Private collection of Steven A. Cohen",
      "year": "1953",
      "img-link": "https://upload.wikimedia.org/wikipedia/en/e/e7/Woman3.jpg",
      "price": "227 746",
      "usd": "161.7",
      "currency": "btc"
    },

    {
      "art-name": "Portrait of Adele Bloch-Bauer I",
      "artist-name": "Gustav Klimt",
      "type": "Oil, silver, and gold on canvas",
      "location": "Neue Galerie, New York",
      "year": "1907",
      "img-link": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Gustav_Klimt_046.jpg/1024px-Gustav_Klimt_046.jpg",
      "price": "223 521",
      "usd": "158.7",
      "currency": "btc"
    },

    {
      "art-name": "Le Rêve",
      "artist-name": "Pablo Picasso",
      "type": "Oil on canvas",
      "location": "Private collection of Steven A. Cohen",
      "year": "1932",
      "img-link": "https://upload.wikimedia.org/wikipedia/en/9/9d/Le-reve-1932.jpg",
      "price": "222 113",
      "usd": "157.7",
      "currency": "btc"
    },

    {
      "art-name": "Portrait of Dr. Gachet",
      "artist-name": "Vincent van Gogh",
      "type": "Oil on canvas",
      "location": "Private collection",
      "year": "1890",
      "img-link": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Portrait_of_Dr._Gachet.jpg/800px-Portrait_of_Dr._Gachet.jpg",
      "price": "210 845",
      "usd": "149.7",
      "currency": "btc"
    },

    {
      "art-name": "Three Studies of Lucian Freud",
      "artist-name": "Francis Bacon",
      "type": "Oil on canvas",
      "location": "Private collection of Elaine Wynn",
      "year": "1969",
      "img-link": "https://upload.wikimedia.org/wikipedia/en/3/31/Three_Studies_of_Lucian_Freud.jpg",
      "price": "204 085",
      "usd": "144.9",
      "currency": "btc"
    },

    {
      "art-name": "Bal du moulin de la Galette",
      "artist-name": "Pierre-Auguste Renoir",
      "type": "Oil on canvas",
      "location": "Musée d'Orsay, Paris",
      "year": "1876",
      "img-link": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Auguste_Renoir_-_Dance_at_Le_Moulin_de_la_Galette_-_Mus%C3%A9e_d%27Orsay_RF_2739_%28derivative_work_-_AutoContrast_edit_in_LCH_space%29.jpg/1280px-Auguste_Renoir_-_Dance_at_Le_Moulin_de_la_Galette_-_Mus%C3%A9e_d%27Orsay_RF_2739_%28derivative_work_-_AutoContrast_edit_in_LCH_space%29.jpg",
      "price": "199 577",
      "usd": "141.7",
      "currency": "btc"
    },

    {
      "art-name": "Garçon à la pipe",
      "artist-name": "Pablo Picasso",
      "type": "Oil on canvas",
      "location": "Private collection",
      "year": "184 085",
      "img-link": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9c/Gar%C3%A7on_%C3%A0_la_pipe.jpg/800px-Gar%C3%A7on_%C3%A0_la_pipe.jpg",
      "price": "184 085",
      "usd": "130.7",
      "currency": "btc"
    },

    {
      "art-name": "Salvator Mundi",
      "artist-name": "Leonardo da Vinci",
      "type": "Oil on walnut",
      "location": "Private collection, New York City",
      "year": "1519",
      "img-link": "https://upload.wikimedia.org/wikipedia/commons/1/1f/Leonardo_da_Vinci_or_Boltraffio_%28attrib%29_Salvator_Mundi_circa_1500.jpg",
      "price": "182 676",
      "usd": "129.7",
      "currency": "btc"
    },

    {
      "art-name": "The Scream",
      "artist-name": "Edvard Munch",
      "type": "Oil, tempera, pastel and crayon on cardboard",
      "location": "National Gallery, Oslo, Norway",
      "year": "1893",
      "img-link": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/The_Scream.jpg/800px-The_Scream.jpg",
      "price": "174 366",
      "usd": "123.8",
      "currency": "btc"
    },

    {
      "art-name": "Reclining Nude With Blue Cushion",
      "artist-name": "Amedeo Modigliani",
      "type": "Oil on canvas",
      "location": "Nathan Cummings Collection, New York",
      "year": "1917",
      "img-link": "https://uploads8.wikiart.org/images/amedeo-modigliani/reclining-nude-with-blue-cushion-1917.jpg!Large.jpg",
      "price": "171 831",
      "usd": "273",
      "currency": "btc"
    },

    {
      "art-name": "Flag",
      "artist-name": "Jasper Johns",
      "type": "Oil paint and newsprint collage on three separate canvases",
      "location": "Museum of Modern Art, New York",
      "year": "1954",
      "img-link": "https://upload.wikimedia.org/wikipedia/en/6/6b/Jasper_Johns%27s_%27Flag%27%2C_Encaustic%2C_oil_and_collage_on_fabric_mounted_on_plywood%2C1954-55.jpg",
      "price": "168 451",
      "usd": "119.6",
      "currency": "btc"
    },

    {
      "art-name": "Nude, Green Leaves and Bust",
      "artist-name": "Pablo Picasso",
      "type": "Oil on canvas",
      "location": "Private collection",
      "year": "1932",
      "img-link": "https://upload.wikimedia.org/wikipedia/en/2/2b/Nude_Green_Leaves_and_Bust_by_Picasso.jpg",
      "price": "162 676",
      "usd": "115.7",
      "currency": "btc"
    },

    {
      "art-name": "Portrait of Joseph Roulin",
      "artist-name": "Vincent van Gogh",
      "type": "Oil on canvas",
      "location": "Museum of Modern Art, New York",
      "year": "1889",
      "img-link": "https://upload.wikimedia.org/wikipedia/commons/2/23/Vincent_van_Gogh_-_Portrait_of_Joseph_Roulin.jpg",
      "price": "161 549",
      "usd": "114.7",
      "currency": "btc"
    },

    {
      "art-name": "Irises",
      "artist-name": "Vincent van Gogh",
      "type": "Oil on canvas",
      "location": "J. Paul Getty Museum, Los Angeles, California",
      "year": "May 1889",
      "img-link": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Irises-Vincent_van_Gogh.jpg/1024px-Irises-Vincent_van_Gogh.jpg",
      "price": "158 451",
      "usd": "112.5",
      "currency": "btc"
    },

    {
      "art-name": "Dora Maar au Chat",
      "artist-name": "Pablo Picasso",
      "type": "Oil on canvas",
      "location": "Private collection",
      "year": "1941",
      "img-link": "https://upload.wikimedia.org/wikipedia/en/c/c3/Dora_Maar_Au_Chat.jpg",
      "price": "157 746",
      "usd": "112",
      "currency": "btc"
    },

    {
      "art-name": "Eight Elvises",
      "artist-name": "Andy Warhol",
      "type": "Silkscreen on canvas",
      "location": "Private collection",
      "year": "1963",
      "img-link": "https://upload.wikimedia.org/wikipedia/en/b/be/Eight_Elvises.jpg",
      "price": "155 070",
      "usd": "110.1",
      "currency": "btc"
    },

    {
      "art-name": "Anna's Light",
      "artist-name": "Barnett Newman",
      "type": "Acrylic on canvas",
      "location": "Private collection",
      "year": "1968",
      "img-link": "http://raku-job.jp/news/wp-content/uploads/2016/01/annas_light-850x383.jpg",
      "price": "151 549",
      "usd": "107.6",
      "currency": "btc"
    },

    {
      "art-name": "Silver Car Crash (Double Disaster)",
      "artist-name": "Andy Warhol",
      "type": "  ",
      "location": "Private collection",
      "year": "1963",
      "img-link": "https://upload.wikimedia.org/wikipedia/en/2/2d/Silver_Car_Crash_by_Andy_Warhol_%281963%29.jpg",
      "price": "151 127",
      "usd": "107.3",
      "currency": "btc"
    },

    {
      "art-name": "Portraits of Vincent van Gogh",
      "artist-name": "Vincent van Gogh",
      "type": "Oil on canvas",
      "location": "Private collection",
      "year": "1889",
      "img-link": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Vincent_Willem_van_Gogh_102.jpg/800px-Vincent_Willem_van_Gogh_102.jpg",
      "price": "146 479",
      "usd": "104",
      "currency": "btc"
    },

    {
      "art-name": "Portrait of Adele Bloch-Bauer II",
      "artist-name": "Gustav Klimt",
      "type": "Oil on canvas",
      "location": "Private collection",
      "year": "1912",
      "img-link": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Gustav_Klimt_047.jpg/640px-Gustav_Klimt_047.jpg",
      "price": "145 634",
      "usd": "103.4",
      "currency": "btc"
    },

    {
      "art-name": "La Montagne Sainte-Victoire vue du bosquet du Château Noir",
      "artist-name": "Paul Cézanne",
      "type": "Oil on canvas",
      "location": "Private collection",
      "year": "1904",
      "img-link": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Sainte-Victoire.jpg/1280px-Sainte-Victoire.jpg",
      "price": "143 662",
      "usd": "102",
      "currency": "btc"
    },

    {
      "art-name": "Massacre of the Innocents",
      "artist-name": "Peter Paul Rubens",
      "type": "",
      "location": "Private collection",
      "year": "	1611",
      "img-link": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Peter_Paul_Rubens_Massacre_of_the_Innocents.jpg/1280px-Peter_Paul_Rubens_Massacre_of_the_Innocents.jpg",
      "price": "142 394",
      "usd": "101.1",
      "currency": "btc"
    },

    {
      "art-name": "Nurse",
      "artist-name": "Roy Lichtenstein",
      "type": "Oil and magna on canvas",
      "location": "Private collection",
      "year": "1964",
      "img-link": "https://upload.wikimedia.org/wikipedia/commons/d/db/Nurse.jpg",
      "price": "134 366",
      "usd": "95.4",
      "currency": "btc"
    },

    {
      "art-name": "Triptych, 1976",
      "artist-name": "Francis Bacon",
      "type": "Oil and pastel on canvas in three parts",
      "location": "Private collection",
      "year": "1976",
      "img-link": "http://p8.storage.canalblog.com/85/37/119589/25633392.jpg",
      "price": "133 803",
      "usd": "95",
      "currency": "btc"
    },

    {
      "art-name": "Les Noces de Pierrette",
      "artist-name": "Pablo Picasso",
      "type": "Oil on canvas",
      "location": "Mitsui Trust Bank",
      "year": "1905",
      "img-link": "https://upload.wikimedia.org/wikipedia/en/3/34/Lesnoces.JPG",
      "price": "132 817",
      "usd": "94.3",
      "currency": "btc"
    },

    {
      "art-name": "False Start",
      "artist-name": "Jasper Johns",
      "type": "",
      "location": "Private collection of Kenneth C. Griffin",
      "year": "1959",
      "img-link": "http://www.jasper-johns.org/images/paintings/false-start.jpg",
      "price": "131 690",
      "usd": "94.1",
      "currency": "btc"
    },

    {
      "art-name": "Wheat Field with Cypresses",
      "artist-name": "Vincent van Gogh",
      "type": "Oil on canvas",
      "location": "Metropolitan Museum of Art, New York",
      "year": "July 1889",
      "img-link": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Wheat-Field-with-Cypresses-%281889%29-Vincent-van-Gogh-Met.jpg/1280px-Wheat-Field-with-Cypresses-%281889%29-Vincent-van-Gogh-Met.jpg",
      "price": "128 873",
      "usd": "93.5",
      "currency": "btc"
    },

    {
      "art-name": "Yo, Picasso",
      "artist-name": "Pablo Picasso",
      "type": "Oil on canvas",
      "location": "Private collection",
      "year": "	1901",
      "img-link": "http://www.pablopicasso.org/images/paintings/yo-picasso.jpg",
      "price": "128 732",
      "usd": "91.5",
      "currency": "btc"
    },

    {
      "art-name": "Shot Marilyns",
      "artist-name": "Andy Warhol",
      "type": "Andy Warhol",
      "location": "Private collection of Steven A. Cohen",
      "year": "1964",
      "img-link": "http://67.media.tumblr.com/e966944b607b978aca8bdbe631faae44/tumblr_n64m65LyF31tcyvpuo1_1280.jpg",
      "price": "127 042",
      "usd": "91.5",
      "currency": "btc"
    },

    {
      "art-name": "Portrait of Alfonso d'Avalos, Marquis of Vasto, in Armor with a Page",
      "artist-name": "Titian (Tiziano Vecellio)",
      "type": "Oil on canvas",
      "location": "Getty Museum",
      "year": "1533",
      "img-link": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Titian_%28Tiziano_Vecellio%29_%28Italian%29_-_Portrait_of_Alfonso_d%27Avalos%2C_Marquis_of_Vasto%2C_in_Armor_with_a_Page_-_Google_Art_Project.jpg/800px-Titian_%28Tiziano_Vecellio%29_%28Italian%29_-_Portrait_of_Alfonso_d%27Avalos%2C_Marquis_of_Vasto%2C_in_Armor_with_a_Page_-_Google_Art_Project.jpg",
      "price": "128 732",
      "usd": "90.2",
      "currency": "btc"
    },

    {
      "art-name": "Orange, Red, Yellow",
      "artist-name": "Mark Rothko",
      "type": "Acrylic on canvas",
      "location": "Private collection",
      "year": "1961",
      "img-link": "http://www.markrothko.org/images/paintings/orange-red-yellow.jpg",
      "price": "127 042",
      "usd": "89.7",
      "currency": "btc"
    },

    {
      "art-name": "Le Bassin Aux Nymphéas",
      "artist-name": "Claude Monet",
      "type": "Oil on canvas",
      "location": "Private collection",
      "year": "1919",
      "img-link": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Le_bassin_aux_nymph%C3%A9as_-_Claude_Monet.jpg/1920px-Le_bassin_aux_nymph%C3%A9as_-_Claude_Monet.jpg",
      "price": "126 338",
      "usd": "88.7",
      "currency": "btc"
    },

    {
      "art-name": "Rideau, Cruchon et Compotier",
      "artist-name": "Paul Cézanne",
      "type": "Oil on canvas",
      "location": "Private collection",
      "year": "1894",
      "img-link": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Paul_C%C3%A9zanne_169.jpg/1280px-Paul_C%C3%A9zanne_169.jpg",
      "price": "124 930",
      "usd": "86.1",
      "currency": "btc"
    },

    {
      "art-name": "Black Fire I",
      "artist-name": "Barnett Newman",
      "type": "Oil on canvas",
      "location": "Private collection",
      "year": "1961",
      "img-link": "http://www.cotidianul.ro/upload/tiny/images/barnett_newman,_black_fire_i,_ulei_pe_panza,_adjudecat_pentru_84_de_milioane_de_doalri.jpg",
      "price": "122 113",
      "usd": "84.3",
      "currency": "btc"
    },

    {
      "art-name": "White Center (Yellow, Pink and Lavender on Rose)",
      "artist-name": "Mark Rothko",
      "type": "Oil on canvas",
      "location": "The Royal family of Qatar",
      "year": "1950",
      "img-link": "http://chirkup.me/images/uploaded/00/01/08/10841_800x.jpg",
      "price": "121 268",
      "usd": "83.3",
      "currency": "btc"
    },

    {
      "art-name": "Vase with Fifteen Sunflowers",
      "artist-name": "Vincent van Gogh",
      "type": "Oil on canvas",
      "location": "National Gallery, London",
      "year": "1888",
      "img-link": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Vincent_Willem_van_Gogh_127.jpg/800px-Vincent_Willem_van_Gogh_127.jpg",
      "price": "118 732",
      "usd": "82.8",
      "currency": "btc"
    },

    {
      "art-name": "Triple Elvis",
      "artist-name": "Andy Warhol",
      "type": "Silkscreen on canvas",
      "location": "San Francisco Museum of Modern Art",
      "year": "1963",
      "img-link": "https://upload.wikimedia.org/wikipedia/en/5/58/Andy_Warhol_Triple_Elvis.jpg",
      "price": "117 324",
      "usd": "82",
      "currency": "btc"
    },

    {
      "art-name": "No. 10",
      "artist-name": "Mark Rothko",
      "type": "Oil on canvas",
      "location": "Private collection",
      "year": "	1958",
      "img-link": "http://www.agent4stars.com/wp-content/uploads/2015/05/Screen-Shot-2015-05-17-at-10.06.00-PM.png",
      "price": "116 620",
      "usd": "81.9",
      "currency": "btc"
    },

    {
      "art-name": "Green Car Crash",
      "artist-name": "Andy Warhol",
      "type": "Silkscreen on canva",
      "location": "Private collection",
      "year": "1963",
      "img-link": "http://webneel.com/daily/sites/default/files/images/daily/10-2013/22-most-expensive-painting-green-car-crash.jpg",
      "price": "115 493",
      "usd": "81.9",
      "currency": "btc"
    },

    {
      "art-name": "Three Studies for a Portrait of John Edwards",
      "artist-name": "Francis Bacon",
      "type": "Oil on canvas",
      "location": "Private collection",
      "year": "1984",
      "img-link": "http://1vze7o2h8a2b2tyahl3i0t68.wpengine.netdna-cdn.com/wp-content/uploads/2014/12/FBE464_Three-Studies-for-a-Portrait-of-John-Edwards-1984-thb-FACEBOOK.jpg",
      "price": "115 493",
      "usd": "80.9",
      "currency": "btc"
    },

    {
      "art-name": "Darmstadt Madonna",
      "artist-name": "Hans Holbein the Younger",
      "type": "Oil on wood",
      "location": "Private collection of Reinhold Würth",
      "year": "1526-1528",
      "img-link": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Darmstadtmadonna.jpg/640px-Darmstadtmadonna.jpg",
      "price": "115 352",
      "usd": "79",
      "currency": "btc"
    },

    {
      "art-name": "Diana and Actaeon",
      "artist-name": "Titian (Tiziano Vecellio)",
      "type": "Oil on canvas",
      "location": "National Gallery, London",
      "year": "1556–1559",
      "img-link": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Titian_-_Diana_and_Actaeon_-_Google_Art_Project.jpg/1024px-Titian_-_Diana_and_Actaeon_-_Google_Art_Project.jpg",
      "price": "113 944",
      "usd": "78",
      "currency": "btc"
    },

    {
      "art-name": "Au Lapin Agile",
      "artist-name": "Pablo Picasso",
      "type": "Oil on canvas",
      "location": "Metropolitan Museum of Art, New York",
      "year": "1905",
      "img-link": "https://upload.wikimedia.org/wikipedia/en/thumb/8/8d/Pablo_Picasso%2C_1905%2C_Au_Lapin_Agile_%28At_the_Lapin_Agile%29%2C_oil_on_canvas%2C_99.1_x_100.3_cm%2C_Metropolitan_Museum_of_Art.jpg/1024px-Pablo_Picasso%2C_1905%2C_Au_Lapin_Agile_%28At_the_Lapin_Agile%29%2C_oil_on_canvas%2C_99.1_x_100.3_cm%2C_Metropolitan_Museum_of_Art.jpg",
      "price": "111 268",
      "usd": "77.8",
      "currency": "btc"
    },

    {
      "art-name": "The Gross Clinic",
      "artist-name": "Thomas Eakins",
      "type": "Oil on canvas",
      "location": "Philadelphia Museum of Art and the Pennsylvania Academy of Fine Arts",
      "year": "1875",
      "img-link": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Thomas_Eakins%2C_American_-_Portrait_of_Dr._Samuel_D._Gross_%28The_Gross_Clinic%29_-_Google_Art_Project.jpg/800px-Thomas_Eakins%2C_American_-_Portrait_of_Dr._Samuel_D._Gross_%28The_Gross_Clinic%29_-_Google_Art_Project.jpg",
      "price": "109 859",
      "usd": "77.7",
      "currency": "btc"
    },

    {
      "art-name": "No 1 (Royal Red and Blue)",
      "artist-name": "Mark Rothko",
      "type": "Oil on canvas",
      "location": "Private collection",
      "year": "1954",
      "img-link": "https://upload.wikimedia.org/wikipedia/en/4/4c/No_1_%28Royal_Red_and_Blue%29_by_Mark_Rothko_%281954%29.jpg",
      "price": "109 577",
      "usd": "77.6",
      "currency": "btc"
    },

    {
      "art-name": "Acrobate et jeune arlequin",
      "artist-name": "Pablo Picasso",
      "type": "Oil on canvas",
      "location": "Private collection",
      "year": "1905",
      "img-link": "https://upload.wikimedia.org/wikipedia/en/b/be/Pablo_Picasso%2C_1905%2C_Acrobate_et_jeune_Arlequin_%28Acrobat_and_Young_Harlequin%29%2C_oil_on_canvas%2C_191.1_x_108.6_cm%2C_The_Barnes_Foundation%2C_Philadelphia.jpg",
      "price": "109 437",
      "usd": "77.2",
      "currency": "btc"
    },

    {
      "art-name": "Femme aux Bras Croisés",
      "artist-name": "Pablo Picasso",
      "type": "Oil on canvas",
      "location": "Private collection",
      "year": "1902",
      "img-link": "https://upload.wikimedia.org/wikipedia/en/0/00/Pablo_Picasso%2C_1901-02%2C_Femme_aux_Bras_Crois%C3%A9s%2C_Woman_with_Folded_Arms_%28Madchenbildnis%29%2C_oil_on_canvas%2C_81_%C3%97_58_cm_%2832_%C3%97_23_in%29.jpg",
      "price": "109 296",
      "usd": "75.7",
      "currency": "btc"
    },

    {
      "art-name": "Nude Sitting on a Divan",
      "artist-name": "Amedeo Modigliani",
      "type": "Oil on canvas",
      "location": "Private collection",
      "year": "1917",
      "img-link": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Amedeo_Modigliani_063.jpg/640px-Amedeo_Modigliani_063.jpg",
      "price": "108 732",
      "usd": "75",
      "currency": "btc"
    },

    {
      "art-name": "Police Gazette",
      "artist-name": "Willem de Kooning",
      "type": "Oil on canvas",
      "location": "Private collection of Steven A. Cohen",
      "year": "	1955",
      "img-link": "https://s-media-cache-ak0.pinimg.com/564x/a3/4e/49/a34e49e2d52ac6fca7febe28992fb9b0.jpg",
      "price": "106 620",
      "usd": "74.7",
      "currency": "btc"
    },

    {
      "art-name": "Diana and Callisto",
      "artist-name": "Titian (Tiziano Vecellio)",
      "type": "Oil on canvas",
      "location": "The National Gallery, London and The National Gallery of Scotland, Edinburgh",
      "year": "1559",
      "img-link": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/TitianDianaCallistoEdinburgh.jpg/1024px-TitianDianaCallistoEdinburgh.jpg",
      "price": "105 634",
      "usd": "74",
      "currency": "btc"
    },

    {
      "art-name": "Untitled (New York City)",
      "artist-name": "Cy Twombly",
      "type": "Oil on canvas",
      "location": "Private collection",
      "year": "1968",
      "img-link": "https://www.moma.org/media/W1siZiIsIjE1MTQwNiJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=ae690977947b08e8",
      "price": "105 211",
      "usd": "70.5",
      "currency": "btc"
    },

    {
      "art-name": "Femme assise dans un jardin",
      "artist-name": "Pablo Picasso",
      "type": "Oil on canvas",
      "location": "Private collection",
      "year": "1938",
      "img-link": "https://bethelbug.files.wordpress.com/2014/12/femme_assise_dans_un_jardin.jpg",
      "price": "104 225",
      "usd": "70.4",
      "currency": "btc"
    },

    {
      "art-name": "Peasant Woman Against a Background of Wheat",
      "artist-name": "Vincent van Gogh",
      "type": "Oil on canvas",
      "location": "Private collection of Steven A. Cohen",
      "year": "1890",
      "img-link": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Vincent_Willem_van_Gogh_097.jpg/800px-Vincent_Willem_van_Gogh_097.jpg",
      "price": "99 296",
      "usd": "70.1",
      "currency": "btc"
    },

    {
      "art-name": "Untitled",
      "artist-name": "Cy Twombly",
      "type": "Oil on canvas",
      "location": "Museum of Modern Art, New York",
      "year": "1970",
      "img-link": "https://www.moma.org/media/W1siZiIsIjE1MTQxMiJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=463ac77a8eb45627",
      "price": "99 155",
      "usd": "69.7",
      "currency": "btc"
    },

    {
      "art-name": "Four Marlons",
      "artist-name": "Andy Warhol",
      "type": "Silkscreen ink on unprimed linen",
      "location": "Private collection",
      "year": "1966",
      "img-link": "https://theartdetectivesmuse.files.wordpress.com/2014/10/dsc069951.jpg",
      "price": "98 732",
      "usd": "69.6",
      "currency": "btc"
    },

    {
      "art-name": "Eagle Standing on Pine Tree",
      "artist-name": "Qi Baishi",
      "type": "Oil on canvas",
      "location": "Hunan TV&Broadcast Intermediary Co.",
      "year": "1946",
      "img-link": "http://67.media.tumblr.com/tumblr_ly7xyjoTCS1qdr6jto1_1280.jpg",
      "price": "98 169",
      "usd": "69",
      "currency": "btc"
    },

    {
      "art-name": "Men in Her Life",
      "artist-name": "Andy Warhol",
      "type": "Silkscreen",
      "location": "Private collections of Sheikh Hamad bin Khalifa Al-Thani",
      "year": "1962",
      "img-link": "https://upload.wikimedia.org/wikipedia/en/5/55/Men_in_her_life_by_Andy_Warhol_%281962%29.jpg",
      "price": "98 028",
      "usd": "68.9",
      "currency": "btc"
    },

    {
      "art-name": "La Gommeuse",
      "artist-name": "Pablo Picasso",
      "type": "Oil on canvas",
      "location": "Private collection",
      "year": "1901",
      "img-link": "https://upload.wikimedia.org/wikipedia/en/thumb/9/97/Pablo_Picasso_-_La_Gommeuse.jpg/640px-Pablo_Picasso_-_La_Gommeuse.jpg",
      "price": "97 183",
      "usd": "67.5",
      "currency": "btc"
    },

    {
      "art-name": "Buste de femme (Femme à la résille)",
      "artist-name": "Pablo Picasso",
      "type": "Oil on canvas",
      "location": "Private collection of Joseph Lau",
      "year": "	1938",
      "img-link": "https://s-media-cache-ak0.pinimg.com/736x/9d/90/cd/9d90cd6291da8f635219c67d2fb8c99d.jpg",
      "price": "97 042",
      "usd": "67.4",
      "currency": "btc"
    },

    {
      "art-name": "Portrait of a Halberdier",
      "artist-name": "Pontormo",
      "type": "Oil on panel transferred to canvas",
      "location": "Getty Museum",
      "year": "1537",
      "img-link": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Pontormo_%28Jacopo_Carucci%29_%28Italian%2C_Florentine%29_-_Portrait_of_a_Halberdier_%28Francesco_Guardi%3F%29_-_Google_Art_Project.jpg/800px-Pontormo_%28Jacopo_Carucci%29_%28Italian%2C_Florentine%29_-_Portrait_of_a_Halberdier_%28Francesco_Guardi%3F%29_-_Google_Art_Project.jpg",
      "price": "95 070",
      "usd": "67.3",
      "currency": "btc"
    },

    {
      "art-name": "L’Allée des Alyscamps",
      "artist-name": "Vincent van Gogh",
      "type": "Oil on canvas",
      "location": "Private collection",
      "year": "1888",
      "img-link": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Van_gogh_lallee_des_alyscamps.jpg/800px-Van_gogh_lallee_des_alyscamps.jpg",
      "price": "94 930",
      "usd": "66.3",
      "currency": "btc"
    },

    {
      "art-name": "Untitled",
      "artist-name": "Mark Rothko",
      "type": "Oil on canvas",
      "location": "Private collection",
      "year": "1952",
      "img-link": "https://s-media-cache-ak0.pinimg.com/736x/fa/fc/5a/fafc5a4fb9ac5e51989758bdba7599f6.jpg",
      "price": "94 789",
      "usd": "66.3",
      "currency": "btc"
    },

    {
      "art-name": "Suprematist Composition",
      "artist-name": "Kazimir Malevich",
      "type": "Oil on canvas",
      "location": "Private collection",
      "year": "1916",
      "img-link": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Suprematist_Composition_-_Kazimir_Malevich.jpg/800px-Suprematist_Composition_-_Kazimir_Malevich.jpg",
      "price": "93 380",
      "usd": "66.1",
      "currency": "btc"
    },

    {
      "art-name": "Zhichuan Resettlement",
      "artist-name": "Wang Meng",
      "type": "Paper",
      "location": "Palace Museum, Beijing",
      "year": "1350",
      "img-link": "https://s-media-cache-ak0.pinimg.com/236x/a4/ec/cc/a4eccc8b4ac49b422330cea1eb9fe373.jpg",
      "price": "93 239",
      "usd": "65.5",
      "currency": "btc"
    },

    {
      "art-name": "Spring (Le Printemps)",
      "artist-name": "Édouard Manet",
      "type": "Oil on canvas",
      "location": "Getty Museum",
      "year": "1881",
      "img-link": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/%C3%89douard_Manet_-_Jeanne_%28Spring%29.jpg/640px-%C3%89douard_Manet_-_Jeanne_%28Spring%29.jpg",
      "price": "93 099",
      "usd": "65.2",
      "currency": "btc"
    },

    {
      "art-name": "1949-A-No. 1",
      "artist-name": "Clifford Still",
      "type": "Oil on canvas",
      "location": "Private collection",
      "year": "1949",
      "img-link": "http://ragstoriches.com/wp-content/uploads/2012/01/1949-A-No.-1-by-Clifford-Still1.png",
      "price": "86 761",
      "usd": "61",
      "currency": "btc"
    }

    // {
    //   "art-name": " ",
    //   "artist-name": " ",
    //   "type": "Oil on canvas",
    //   "location": "Private collection",
    //   "year": " ",
    //   "img-link": " ",
    //   "price": "292 520",
    //   "currency": "btc"
    // },


  ]
}

//Compile the template data into a function
var templateScript = Handlebars.compile(template);

var html = templateScript(context);


$(document.body).append(html);
