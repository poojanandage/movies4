let cl = console.log;

const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=3'
let IMG_PATH = 'https://image.tmdb.org/t/p/w1280'


    
  let movies= [
      {
        adult: false,
        backdrop_path: "/p1F51Lvj3sMopG948F5HsBbl43C.jpg",
        genre_ids: [
          28,
          12,
          14
        ],
        id: 616037,
        original_language: "en",
        original_title: "Thor: Love and Thunder",
        overview: "After his retirement is interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods, Thor enlists the help of King Valkyrie, Korg, and ex-girlfriend Jane Foster, who now inexplicably wields Mjolnir as the Mighty Thor. Together they embark upon a harrowing cosmic adventure to uncover the mystery of the God Butcher’s vengeance and stop him before it’s too late.",
        popularity: 13642.4,
        poster_path: "/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg",
        release_date: "2022-07-06",
        title: "Thor: Love and Thunder",
        video: false,
        vote_average: 6.8,
        vote_count: 1708
      },
      {
        adult: false,
        backdrop_path: "/nmGWzTLMXy9x7mKd8NKPLmHtWGa.jpg",
        genre_ids: [
          10751,
          16,
          12,
          35,
          14
        ],
        id: 438148,
        original_language: "en",
        original_title: "Minions: The Rise of Gru",
        overview: "A fanboy of a supervillain supergroup known as the Vicious 6, Gru hatches a plan to become evil enough to join them, with the backup of his followers, the Minions.",
        popularity: 7369.381,
        poster_path: "/wKiOkZTN9lUUUNZLmtnwubZYONg.jpg",
        release_date: "2022-06-29",
        title: "Minions: The Rise of Gru",
        video: false,
        vote_average: 7.8,
        vote_count: 1058
      },
      {
        adult: false,
        backdrop_path: "/9eAn20y26wtB3aet7w9lHjuSgZ3.jpg",
        genre_ids: [
          12,
          28,
          878
        ],
        id: 507086,
        original_language: "en",
        original_title: "Jurassic World Dominion",
        overview: "Four years after Isla Nublar was destroyed, dinosaurs now live—and hunt—alongside humans all over the world. This fragile balance will reshape the future and determine, once and for all, whether human beings are to remain the apex predators on a planet they now share with history’s most fearsome creatures.",
        popularity: 7155.21,
        poster_path: "/kAVRgw7GgK1CfYEJq8ME6EvRIgU.jpg",
        release_date: "2022-06-01",
        title: "Jurassic World Dominion",
        video: false,
        vote_average: 7.1,
        vote_count: 2550
      },
      {
        adult: false,
        backdrop_path: "/odJ4hx6g6vBt4lBWKFD1tI8WS4x.jpg",
        genre_ids: [
          28,
          18
        ],
        id: 361743,
        original_language: "en",
        original_title: "Top Gun: Maverick",
        overview: "After more than thirty years of service as one of the Navy’s top aviators, and dodging the advancement in rank that would ground him, Pete “Maverick” Mitchell finds himself training a detachment of TOP GUN graduates for a specialized mission the likes of which no living pilot has ever seen.",
        popularity: 5655.708,
        poster_path: "/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
        release_date: "2022-05-24",
        title: "Top Gun: Maverick",
        video: false,
        vote_average: 8.3,
        vote_count: 1814
      },
      {
        adult: false,
        backdrop_path: "/AfvIjhDu9p64jKcmohS4hsPG95Q.jpg",
        genre_ids: [
          27,
          53
        ],
        id: 756999,
        original_language: "en",
        original_title: "The Black Phone",
        overview: "Finney Shaw, a shy but clever 13-year-old boy, is abducted by a sadistic killer and trapped in a soundproof basement where screaming is of little use. When a disconnected phone on the wall begins to ring, Finney discovers that he can hear the voices of the killer’s previous victims. And they are dead set on making sure that what happened to them doesn’t happen to Finney.",
        popularity: 4047.213,
        poster_path: "/p9ZUzCyy9wRTDuuQexkQ78R2BgF.jpg",
        release_date: "2022-06-22",
        title: "The Black Phone",
        video: false,
        vote_average: 8,
        vote_count: 1612
      },
      {
        adult: false,
        backdrop_path: "/nW5fUbldp1DYf2uQ3zJTUdachOu.jpg",
        genre_ids: [
          16,
          878,
          12,
          28,
          10751
        ],
        id: 718789,
        original_language: "en",
        original_title: "Lightyear",
        overview: "Legendary Space Ranger Buzz Lightyear embarks on an intergalactic adventure alongside a group of ambitious recruits and his robot companion Sox.",
        popularity: 3897.225,
        poster_path: "/ox4goZd956BxqJH6iLwhWPL9ct4.jpg",
        release_date: "2022-06-15",
        title: "Lightyear",
        video: false,
        vote_average: 7.3,
        vote_count: 1446
      },
      {
        adult: false,
        backdrop_path: "/27Mj3rFYP3xqFy7lnz17vEd8Ms.jpg",
        genre_ids: [
          28,
          53
        ],
        id: 725201,
        original_language: "en",
        original_title: "The Gray Man",
        overview: "When a shadowy CIA agent uncovers damning agency secrets, he's hunted across the globe by a sociopathic rogue operative who's put a bounty on his head.",
        popularity: 3697.245,
        poster_path: "/8cXbitsS6dWQ5gfMTZdorpAAzEH.jpg",
        release_date: "2022-07-13",
        title: "The Gray Man",
        video: false,
        vote_average: 7,
        vote_count: 1313
      },
      {
        adult: false,
        backdrop_path: "/wcKFYIiVDvRURrzglV9kGu7fpfY.jpg",
        genre_ids: [
          14,
          28,
          12
        ],
        id: 453395,
        original_language: "en",
        original_title: "Doctor Strange in the Multiverse of Madness",
        overview: "Doctor Strange, with the help of mystical allies both old and new, traverses the mind-bending and dangerous alternate realities of the Multiverse to confront a mysterious new adversary.",
        popularity: 3524.975,
        poster_path: "/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg",
        release_date: "2022-05-04",
        title: "Doctor Strange in the Multiverse of Madness",
        video: false,
        vote_average: 7.5,
        vote_count: 5114
      },
      {
        adult: false,
        backdrop_path: "/l99dylTOAMkwKSr54X5ytiEtnLA.jpg",
        genre_ids: [
          14,
          12,
          28
        ],
        id: 919355,
        original_language: "en",
        original_title: "Dragon Knight",
        overview: "Many years after the war has been lost, and all the dragons slain, a lone knight travels the lands of Agonos seeking to raise an army against the demon lord Abaddon. When a healer's vision reveals that one dragon still lives, and together with an eager young squire, the knight sets off in search of the fabled creature. As the armies of Abaddon descend on the human kingdoms, the dragon is their last hope of fending off the horde, before it lays waste to the lands of men. But does the creature even exist? And if it does, will it fight for them once more?",
        popularity: 2337.953,
        poster_path: "/uSMJbYhaEpQtF9vkMhpgljc0CA4.jpg",
        release_date: "2022-03-21",
        title: "Dragon Knight",
        video: false,
        vote_average: 5.9,
        vote_count: 10
      },
      {
        adult: false,
        backdrop_path: "/5PnypKiSj2efSPqThNjTXz8jwOg.jpg",
        genre_ids: [
          14,
          28
        ],
        id: 759175,
        original_language: "en",
        original_title: "The Princess",
        overview: "A beautiful, strong-willed young royal refuses to wed the cruel sociopath to whom she is betrothed and is kidnapped and locked in a remote tower of her father’s castle. With her scorned, vindictive suitor intent on taking her father’s throne, the princess must protect her family and save the kingdom.",
        popularity: 2250.582,
        poster_path: "/9pCoqX24a6rE981fY1O3PmhiwrB.jpg",
        release_date: "2022-06-16",
        title: "The Princess",
        video: false,
        vote_average: 7.1,
        vote_count: 387
      },
      {
        adult: false,
        backdrop_path: "/ocUp7DJBIc8VJgLEw1prcyK1dYv.jpg",
        genre_ids: [
          28,
          12,
          878
        ],
        id: 634649,
        original_language: "en",
        original_title: "Spider-Man: No Way Home",
        overview: "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
        popularity: 1901.662,
        poster_path: "/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
        release_date: "2021-12-15",
        title: "Spider-Man: No Way Home",
        video: false,
        vote_average: 8,
        vote_count: 14534
      },
      {
        adult: false,
        backdrop_path: "/4dNv1W1KMSLdYGz0tCEaynF0E4Q.jpg",
        genre_ids: [
          28,
          53,
          80
        ],
        id: 854467,
        original_language: "en",
        original_title: "Indemnity",
        overview: "An ex-fireman with PTSD goes on the run when accused of a crime he doesn't even remember committing, leading him down a rabbit hole of conspiracy to the highest degree.",
        popularity: 2103.875,
        poster_path: "/tVbO8EAbegVtVkrl8wNhzoxS84N.jpg",
        release_date: "2022-02-11",
        title: "Indemnity",
        video: false,
        vote_average: 6.8,
        vote_count: 43
      },
      {
        adult: false,
        backdrop_path: "/obTdaJ22RNFi3fmzUVT5eWOFsOe.jpg",
        genre_ids: [
          53,
          80
        ],
        id: 728366,
        original_language: "en",
        original_title: "Borrego",
        overview: "A young botanist relocates to a small desert town to study an invasive plant species. While out on research, she comes to the aid of a downed plane only to find herself taken captive by an inexperienced drug mule who forces her to lead a trek across the sweltering desert to his drop. A local sheriff is drawn into the hunt as his rebellious daughter sets out to find the missing botanist, all the while being pursued by a local drug receiver.",
        popularity: 2068.937,
        poster_path: "/kPzQtr5LTheO0mBodIeAXHgthYX.jpg",
        release_date: "2022-01-14",
        title: "Borrego",
        video: false,
        vote_average: 5.9,
        vote_count: 34
      },
      {
        adult: false,
        backdrop_path: "/jazlkwXfw4KdF6fVTRsolOvRCmu.jpg",
        genre_ids: [
          53
        ],
        id: 924482,
        original_language: "en",
        original_title: "The Ledge",
        overview: "A rock climbing adventure between two friends turns into a terrifying nightmare. After Kelly captures the murder of her best friend on camera, she becomes the next target of a tight-knit group of friends who will stop at nothing to destroy the evidence and anyone in their way. Desperate for her safety, she begins a treacherous climb up a mountain cliff and her survival instincts are put to the test when she becomes trapped with the killers just 20 feet away.",
        popularity: 2173.68,
        poster_path: "/mKFT6Q7PjrRLYuPLfmH4WLCXOiD.jpg",
        release_date: "2022-02-18",
        title: "The Ledge",
        video: false,
        vote_average: 6.3,
        vote_count: 75
      },
      {
        adult: false,
        backdrop_path: "/ftGzl2GCyko61Qp161bQElN2Uzd.jpg",
        genre_ids: [
          28,
          53
        ],
        id: 961484,
        original_language: "en",
        original_title: "Last Seen Alive",
        overview: "After Will Spann's wife suddenly vanishes at a gas station, his desperate search to find her leads him down a dark path that forces him to run from authorities and take the law into his own hands.",
        popularity: 2034.249,
        poster_path: "/qvqyDj34Uivokf4qIvK4bH0m0qF.jpg",
        release_date: "2022-05-19",
        title: "Last Seen Alive",
        video: false,
        vote_average: 6.5,
        vote_count: 193
      },
      {
        adult: false,
        backdrop_path: "/keBPoGFL8iTJWvJ28CqaGYR92BX.jpg",
        genre_ids: [
          878,
          28,
          53
        ],
        id: 766507,
        original_language: "en",
        original_title: "Prey",
        overview: "In the Comanche Nation in 1717, a fierce and highly skilled warrior named Naru learns the prey she is stalking is a highly evolved alien with a technologically advanced arsenal.",
        popularity: 1631.759,
        poster_path: "/ujr5pztc1oitbe7ViMUOilFaJ7s.jpg",
        release_date: "2022-08-02",
        title: "Prey",
        video: false,
        vote_average: 8.2,
        vote_count: 1063
      },
      {
        adult: false,
        backdrop_path: "/vsAlkb3Fv485AmNiSoyjEBcIB7B.jpg",
        genre_ids: [
          16,
          28
        ],
        id: 791348,
        original_language: "en",
        original_title: "Constantine: The House of Mystery",
        overview: "John Constantine wakes up in the eerie House of Mystery with no recollection of how he got there. Fortunately, Zatanna and his friends are all there. Unfortunately, they have a bad habit of turning into demons and ripping him to shreds, over and over again!",
        popularity: 1579.354,
        poster_path: "/kqYDoEb9PxLXM2ccoHInMMJalti.jpg",
        release_date: "2022-05-02",
        title: "Constantine: The House of Mystery",
        video: false,
        vote_average: 6.8,
        vote_count: 43
      },
      {
        adult: false,
        backdrop_path: "/k5SYb9AM0x4IGVxG8fYEEH4wK1I.jpg",
        genre_ids: [
          10749,
          18
        ],
        id: 762975,
        original_language: "en",
        original_title: "Purple Hearts",
        overview: "An aspiring musician agrees to a marriage of convenience with a soon-to-deploy Marine, but a tragedy soon turns their fake relationship all too real.",
        popularity: 2206.642,
        poster_path: "/4JyNWkryifWbWXJyxcWh3pVya6N.jpg",
        release_date: "2022-07-29",
        title: "Purple Hearts",
        video: false,
        vote_average: 8.6,
        vote_count: 763
      },
      {
        adult: false,
        backdrop_path: "/8wwXPG22aNMpPGuXnfm3galoxbI.jpg",
        genre_ids: [
          28,
          12,
          10751,
          35
        ],
        id: 675353,
        original_language: "en",
        original_title: "Sonic the Hedgehog 2",
        overview: "After settling in Green Hills, Sonic is eager to prove he has what it takes to be a true hero. His test comes when Dr. Robotnik returns, this time with a new partner, Knuckles, in search for an emerald that has the power to destroy civilizations. Sonic teams up with his own sidekick, Tails, and together they embark on a globe-trotting journey to find the emerald before it falls into the wrong hands.",
        popularity: 1729.917,
        poster_path: "/6DrHO1jr3qVrViUO6s6kFiAGM7.jpg",
        release_date: "2022-03-30",
        title: "Sonic the Hedgehog 2",
        video: false,
        vote_average: 7.7,
        vote_count: 2707
      },
      {
        adult: false,
        backdrop_path: "/zTffxrYeeKfDMuaIeabDjKTaSuX.jpg",
        genre_ids: [
          27,
          53
        ],
        id: 629015,
        original_language: "en",
        original_title: "Shut In",
        overview: "A young single mother is held captive along with her two children by a violent ex and must plot their escape before it’s too late.",
        popularity: 1789.919,
        poster_path: "/b5ug4LyLQFeR6azAJyIPBQz5ur9.jpg",
        release_date: "2022-03-24",
        title: "Shut In",
        video: false,
        vote_average: 7.2,
        vote_count: 155
      },
        {
          adult: false,
          backdrop_path: "/7ZO9yoEU2fAHKhmJWfAc2QIPWJg.jpg",
          genre_ids: [
            878,
            28,
            53
          ],
          id: 766507,
          original_language: "en",
          original_title: "Prey",
          overview: "In the Comanche Nation in 1717, a fierce and highly skilled warrior named Naru learns the prey she is stalking is a highly evolved alien with a technologically advanced arsenal.",
          popularity: 1631.759,
          poster_path: "/ujr5pztc1oitbe7ViMUOilFaJ7s.jpg",
          release_date: "2022-08-02",
          title: "Prey",
          video: false,
          vote_average: 8.2,
          vote_count: 1063
        },
        {
          adult: false,
          backdrop_path: "/vsAlkb3Fv485AmNiSoyjEBcIB7B.jpg",
          genre_ids: [
            16,
            28
          ],
          id: 791348,
          original_language: "en",
          original_title: "Constantine: The House of Mystery",
          overview: "John Constantine wakes up in the eerie House of Mystery with no recollection of how he got there. Fortunately, Zatanna and his friends are all there. Unfortunately, they have a bad habit of turning into demons and ripping him to shreds, over and over again!",
          popularity: 1579.354,
          poster_path: "/kqYDoEb9PxLXM2ccoHInMMJalti.jpg",
          release_date: "2022-05-02",
          title: "Constantine: The House of Mystery",
          video: false,
          vote_average: 6.8,
          vote_count: 43
        },
        {
          adult: false,
          backdrop_path: "/33qGtN2GpGEb94pn25PDPeWQZLk.jpg",
          genre_ids: [
            28,
            80,
            53
          ],
          id: 894169,
          original_language: "en",
          original_title: "Vendetta",
          overview: "When his daughter is murdered, William Duncan takes the law into his own hands, setting out on a quest for retribution. After killing the street thug responsible for her death, he finds himself in the middle of a war with the thug's brother, father, and their gang, who are equally hell-bent on getting even. What ensues is a tense back-and-forth game of vengeance. By the end, William comes to find that the quest for revenge never has a winner.",
          popularity: 1518.553,
          poster_path: "/7InGE2Sux0o9WGbbn0bl7nZzqEc.jpg",
          release_date: "2022-05-17",
          title: "Vendetta",
          video: false,
          vote_average: 6.5,
          vote_count: 125
        },
        {
          adult: false,
          backdrop_path: "/t9K8ycUBCplWiICDOKRNRYcEH9e.jpg",
          genre_ids: [
            16,
            28,
            14
          ],
          id: 810693,
          original_language: "ja",
          original_title: "劇場版 呪術廻戦 0",
          overview: "Yuta Okkotsu is a nervous high school student who is suffering from a serious problem—his childhood friend Rika has turned into a curse and won't leave him alone. Since Rika is no ordinary curse, his plight is noticed by Satoru Gojo, a teacher at Jujutsu High, a school where fledgling exorcists learn how to combat curses. Gojo convinces Yuta to enroll, but can he learn enough in time to confront the curse that haunts him?",
          popularity: 1479.828,
          poster_path: "/3pTwMUEavTzVOh6yLN0aEwR7uSy.jpg",
          release_date: "2021-12-24",
          title: "Jujutsu Kaisen 0",
          video: false,
          vote_average: 7.8,
          vote_count: 241
        },
        {
          adult: false,
          backdrop_path: "/1Ds7xy7ILo8u2WWxdnkJth1jQVT.jpg",
          genre_ids: [
            28,
            12,
            35
          ],
          id: 752623,
          original_language: "en",
          original_title: "The Lost City",
          overview: "Reclusive author Loretta Sage writes about exotic places in her popular adventure novels that feature a handsome cover model named Alan. While on tour promoting her new book with Alan, Loretta gets kidnapped by an eccentric billionaire who hopes she can lead him to the ancient city's lost treasure that featured in her latest story. Alan, determined to prove he can be a hero in real life and not just on the pages of her books, sets off to rescue her.",
          popularity: 1450.133,
          poster_path: "/neMZH82Stu91d3iqvLdNQfqPPyl.jpg",
          release_date: "2022-03-24",
          title: "The Lost City",
          video: false,
          vote_average: 6.8,
          vote_count: 1697
        },
        {
          adult: false,
          backdrop_path: "/zGLHX92Gk96O1DJvLil7ObJTbaL.jpg",
          genre_ids: [
            14,
            12,
            28
          ],
          id: 338953,
          original_language: "en",
          original_title: "Fantastic Beasts: The Secrets of Dumbledore",
          overview: "Professor Albus Dumbledore knows the powerful, dark wizard Gellert Grindelwald is moving to seize control of the wizarding world. Unable to stop him alone, he entrusts magizoologist Newt Scamander to lead an intrepid team of wizards and witches. They soon encounter an array of old and new beasts as they clash with Grindelwald's growing legion of followers.",
          popularity: 1356.894,
          poster_path: "/3c5GNLB4yRSLBby0trHoA1DSQxQ.jpg",
          release_date: "2022-04-06",
          title: "Fantastic Beasts: The Secrets of Dumbledore",
          video: false,
          vote_average: 6.9,
          vote_count: 2469
        },
        {
          adult: false,
          backdrop_path: "/C8FpZfTPEZDjngPlatiFsaDB4A.jpg",
          genre_ids: [
            28,
            35,
            53
          ],
          id: 718930,
          original_language: "en",
          original_title: "Bullet Train",
          overview: "Unlucky assassin Ladybug is determined to do his job peacefully after one too many gigs gone off the rails. Fate, however, may have other plans, as Ladybug's latest mission puts him on a collision course with lethal adversaries from around the globe—all with connected, yet conflicting, objectives—on the world's fastest train.",
          popularity: 1330.848,
          poster_path: "/tVxDe01Zy3kZqaZRNiXFGDICdZk.jpg",
          release_date: "2022-07-03",
          title: "Bullet Train",
          video: false,
          vote_average: 7.4,
          vote_count: 123
        },
        {
          adult: false,
          backdrop_path: "/uR0FopHrAjDlG5q6PZB07a1JOva.jpg",
          genre_ids: [
            16,
            878,
            28
          ],
          id: 610150,
          original_language: "ja",
          original_title: "ドラゴンボール超：スーパーヒーロー",
          overview: "The Red Ribbon Army, an evil organization that was once destroyed by Goku in the past, has been reformed by a group of people who have created new and mightier Androids, Gamma 1 and Gamma 2, and seek vengeance against Goku and his family.",
          popularity: 1322.169,
          poster_path: "/rugyJdeoJm7cSJL1q4jBpTNbxyU.jpg",
          release_date: "2022-06-11",
          title: "Dragon Ball Super: Super Hero",
          video: false,
          vote_average: 7.6,
          vote_count: 95
        },
        {
          adult: false,
          backdrop_path: "/mTupUmnuwwAyA0CNqpwaZn5mqjk.jpg",
          genre_ids: [
            28,
            27,
            53,
            10752,
            14
          ],
          id: 697799,
          original_language: "en",
          original_title: "WarHunt",
          overview: "1945. A U.S. military cargo plane loses control and violently crashes behind enemy lines in the middle of the German black forest. Major Johnson sends a squad of his bravest soldiers on a rescue mission to retrieve the top-secret material the plane was carrying, led by Sergeants Brewer and Walsh. They soon discover hanged Nazi soldiers and other dead bodies bearing ancient, magical symbols. Suddenly their compasses fail, their perceptions twist and straying from the group leads to profound horrors as they are attacked by a powerful, supernatural force.",
          popularity: 1276.13,
          poster_path: "/9HFFwZOTBB7IPFmn9E0MXdWave3.jpg",
          release_date: "2022-01-21",
          title: "WarHunt",
          video: false,
          vote_average: 5.3,
          vote_count: 51
        },
        {
          adult: false,
          backdrop_path: "/g3pG27i0v6eKWDKLf4GQsKZxmZX.jpg",
          genre_ids: [
            53,
            28
          ],
          id: 888195,
          original_language: "en",
          original_title: "Hot Seat",
          overview: "An ex-hacker is forced to break into high-level banking institutions, another man must try to penetrate the booby-trapped building to get the young man off the hot seat.",
          popularity: 1254.652,
          poster_path: "/TUmSO5EPIZAfRSOEjmbrgbTw8i.jpg",
          release_date: "2022-07-01",
          title: "Hot Seat",
          video: false,
          vote_average: 6.3,
          vote_count: 36
        },
        {
          adult: false,
          backdrop_path: "/iOFBH9KtjKMntbP2kheeOpMQTcC.jpg",
          genre_ids: [
            28,
            35,
            53
          ],
          id: 667739,
          original_language: "en",
          original_title: "The Man from Toronto",
          overview: "In a case of mistaken identity, the world’s deadliest assassin, known as the Man from Toronto, and a New York City screw-up are forced to team up after being confused for each other at an Airbnb.",
          popularity: 1221.595,
          poster_path: "/uTCfTibqtk4f90cC59bLPMOmsfc.jpg",
          release_date: "2022-06-24",
          title: "The Man from Toronto",
          video: false,
          vote_average: 6.5,
          vote_count: 589
        },
        {
          adult: false,
          backdrop_path: "/cqnVuxXe6vA7wfNWubak3x36DKJ.jpg",
          genre_ids: [
            28,
            12,
            14
          ],
          id: 639933,
          original_language: "en",
          original_title: "The Northman",
          overview: "Prince Amleth is on the verge of becoming a man when his father is brutally murdered by his uncle, who kidnaps the boy's mother. Two decades later, Amleth is now a Viking who's on a mission to save his mother, kill his uncle and avenge his father.",
          popularity: 1208.806,
          poster_path: "/zhLKlUaF1SEpO58ppHIAyENkwgw.jpg",
          release_date: "2022-04-07",
          title: "The Northman",
          video: false,
          vote_average: 7.2,
          vote_count: 2076
        },
        {
          adult: false,
          backdrop_path: "/6d1mHKcozT5AaZeI76ehJrBt0hr.jpg",
          genre_ids: [
            27
          ],
          id: 864370,
          original_language: "zh",
          original_title: "咒",
          overview: "Inspired by a true story of a family who believed they were possessed by spirits, this film follows a woman who must protect her child from a curse.  WARNING: This is a cursed video, it might contain certain risks to watch. For those who dares to follow, please solve the puzzle of my daughter's curse with me.",
          popularity: 1185.15,
          poster_path: "/6zltP23zLGPogsHZUazSrrwNuKs.jpg",
          release_date: "2022-03-18",
          title: "Incantation",
          video: false,
          vote_average: 7.2,
          vote_count: 222
        },
        {
          adult: false,
          backdrop_path: "/wUwizGzbTk5CTiKBnE4Pq1MONwD.jpg",
          genre_ids: [
            16,
            12,
            10751,
            14
          ],
          id: 560057,
          original_language: "en",
          original_title: "The Sea Beast",
          overview: "The life of a legendary sea monster hunter is turned upside down when a young girl stows away on his ship.",
          popularity: 1179.396,
          poster_path: "/9Zfv4Ap1e8eKOYnZPtYaWhLkk0d.jpg",
          release_date: "2022-06-24",
          title: "The Sea Beast",
          video: false,
          vote_average: 7.7,
          vote_count: 579
        },
        {
          adult: false,
          backdrop_path: "/zSDyqp2mhV45ZjI1EUBMfzupKKt.jpg",
          genre_ids: [
            27,
            28
          ],
          id: 982543,
          original_language: "en",
          original_title: "V for Vengeance",
          overview: "After learning that their younger sibling escaped an earlier kidnapping attempt that also killed their parents, two estranged sisters must join forces to rescue her from a group of bloodthirsty vampires. Out for revenge and control of a vampirism vaccine, Thorn and his band of the undead soon learn that they messed with the wrong family.",
          popularity: 1149.55,
          poster_path: "/jLtP8TLycVzLUlkkhp8PipXfUh6.jpg",
          release_date: "2022-06-07",
          title: "V for Vengeance",
          video: false,
          vote_average: 6.6,
          vote_count: 34
        },
        {
          adult: false,
          backdrop_path: "/gG9fTyDL03fiKnOpf2tr01sncnt.jpg",
          genre_ids: [
            28,
            878,
            14
          ],
          id: 526896,
          original_language: "en",
          original_title: "Morbius",
          overview: "Dangerously ill with a rare blood disorder, and determined to save others suffering his same fate, Dr. Michael Morbius attempts a desperate gamble. What at first appears to be a radical success soon reveals itself to be a remedy potentially worse than the disease.",
          popularity: 1149.526,
          poster_path: "/6JjfSchsU6daXk2AKX8EEBjO3Fm.jpg",
          release_date: "2022-03-30",
          title: "Morbius",
          video: false,
          vote_average: 6.5,
          vote_count: 2281
        },
        {
          adult: false,
          backdrop_path: "/vjnLXptqdxnpNJer5fWgj2OIGhL.jpg",
          genre_ids: [
            28,
            53,
            80
          ],
          id: 818397,
          original_language: "en",
          original_title: "Memory",
          overview: "Alex, an assassin-for-hire, finds that he's become a target after he refuses to complete a job for a dangerous criminal organization. With the crime syndicate and FBI in hot pursuit, Alex has the skills to stay ahead, except for one thing: he is struggling with severe memory loss, affecting his every move. Alex must question his every action and whom he can ultimately trust.",
          popularity: 1121.286,
          poster_path: "/4Q1n3TwieoULnuaztu9aFjqHDTI.jpg",
          release_date: "2022-04-28",
          title: "Memory",
          video: false,
          vote_average: 7.3,
          vote_count: 644
        },
        {
          adult: false,
          backdrop_path: "/fOy2Jurz9k6RnJnMUMRDAgBwru2.jpg",
          genre_ids: [
            16,
            10751,
            35,
            14
          ],
          id: 508947,
          original_language: "en",
          original_title: "Turning Red",
          overview: "Thirteen-year-old Mei is experiencing the awkwardness of being a teenager with a twist – when she gets too excited, she transforms into a giant red panda.",
          popularity: 1101.194,
          poster_path: "/qsdjk9oAKSQMWs0Vt5Pyfh6O4GZ.jpg",
          release_date: "2022-03-10",
          title: "Turning Red",
          video: false,
          vote_average: 7.5,
          vote_count: 2903
        },
        {
          adult: false,
          backdrop_path: "/qBu6blwnOA75Hz61QHrNe8unUNw.jpg",
          genre_ids: [
            53,
            80,
            18
          ],
          id: 975714,
          original_language: "en",
          original_title: "Collision",
          overview: "Over the course of one fateful day, a corrupt businessman and his socialite wife race to save their daughter from a notorious crime lord.",
          popularity: 1083.1,
          poster_path: "/4zsihgkxMZ7MrflNCjkD3ySFJtc.jpg",
          release_date: "2022-06-16",
          title: "Collision",
          video: false,
          vote_average: 5.9,
          vote_count: 102
        },
        {
          adult: false,
          backdrop_path: "/o31kGDH9GbAZjVLwPYno8XvQGV2.jpg",
          genre_ids: [
            28,
            53
          ],
          id: 777831,
          original_language: "en",
          original_title: "9 Bullets",
          overview: "A former burlesque dancer turned author discovers a second chance at life and redemption when she risks everything to rescue her young neighbor after he witnesses his parents’ murder. Now on the run from the local crime boss, who happens to be her longtime ex, she makes a desperate attempt to get the boy to safety.",
          popularity: 1054.721,
          poster_path: "/cuFPxoFopAjFUz4oIMUzpzeTA8I.jpg",
          release_date: "2022-04-14",
          title: "9 Bullets",
          video: false,
          vote_average: 5.6,
          vote_count: 52
        },
        
    {
      adult: false,
      backdrop_path: "/h6XfgbzQEV4sitsIVY63pawLI0s.jpg",
      genre_ids: [
        35,
        27,
        10752
      ],
      id: 613093,
      original_language: "es",
      original_title: "Malnazidos",
      overview: "They're soldiers on different sides of the war. But when the dead come back to life, the only side they want to be on is the one that survives.",
      popularity: 1043.487,
      poster_path: "/avokvOwhjVR9GgISsSSgb2A343G.jpg",
      release_date: "2022-03-11",
      title: "Valley of the Dead",
      video: false,
      vote_average: 6.3,
      vote_count: 149
    },
    {
      adult: false,
      backdrop_path: "/ulkWS7Atv0vv33KVCSAmNizAmJd.jpg",
      genre_ids: [
        878,
        53
      ],
      id: 615469,
      original_language: "en",
      original_title: "Spiderhead",
      overview: "A prisoner in a state-of-the-art penitentiary begins to question the purpose of the emotion-controlling drugs he's testing for a pharmaceutical genius.",
      popularity: 1020.354,
      poster_path: "/5hTK0J9SGPLSTFwcbU0ELlJsnAY.jpg",
      release_date: "2022-06-15",
      title: "Spiderhead",
      video: false,
      vote_average: 5.8,
      vote_count: 796
    },
    {
      adult: false,
      backdrop_path: "/zXNcRqR33DqL8f2YYwPvRQsKuTm.jpg",
      genre_ids: [
        28,
        53,
        18
      ],
      id: 825672,
      original_language: "en",
      original_title: "Asking For It",
      overview: "After small town waitress Joey is sexually assaulted after a date with her old friend Mike, she befriends mysterious stranger Regina. Regina introducers her to The Cherry Bombers, an all femme gang including Beatrice, Lily, Sal, Jett, Angie, and Fala. All suffering from past traumas, together they fight a misogynistic society by targeting violent frat boys, a corrupt police force of human traffickers led by Sheriff Morel, and the dangerous alt-right group MFM (Men’s First Movement) headed by Mark Vanderhill. As Joey is drawn further into their chaotic world, Sal’s old flame, Logan County Sheriff Vernon, investigates MFM, leading to a thrilling showdown.",
      popularity: 1013.373,
      poster_path: "/ro3yvVbzT2zI2KrHWBA81a2x5iR.jpg",
      release_date: "2022-03-04",
      title: "Asking For It",
      video: false,
      vote_average: 5.1,
      vote_count: 14
    },
    {
      adult: false,
      backdrop_path: "/aEGiJJP91HsKVTEPy1HhmN0wRLm.jpg",
      genre_ids: [
        28,
        12
      ],
      id: 335787,
      original_language: "en",
      original_title: "Uncharted",
      overview: "A young street-smart, Nathan Drake and his wisecracking partner Victor “Sully” Sullivan embark on a dangerous pursuit of “the greatest treasure never found” while also tracking clues that may lead to Nathan’s long-lost brother.",
      popularity: 1012.789,
      poster_path: "/rJHC1RUORuUhtfNb4Npclx0xnOf.jpg",
      release_date: "2022-02-10",
      title: "Uncharted",
      video: false,
      vote_average: 7.2,
      vote_count: 2994
    },
    {
      adult: false,
      backdrop_path: "/3G1Q5xF40HkUBJXxt2DQgQzKTp5.jpg",
      genre_ids: [
        16,
        35,
        10751,
        14
      ],
      id: 568124,
      original_language: "en",
      original_title: "Encanto",
      overview: "The tale of an extraordinary family, the Madrigals, who live hidden in the mountains of Colombia, in a magical house, in a vibrant town, in a wondrous, charmed place called an Encanto. The magic of the Encanto has blessed every child in the family—every child except one, Mirabel. But when she discovers that the magic surrounding the Encanto is in danger, Mirabel decides that she, the only ordinary Madrigal, might just be her exceptional family's last hope.",
      popularity: 990.201,
      poster_path: "/4j0PNHkMr5ax3IA8tjtxcmPU3QT.jpg",
      release_date: "2021-11-24",
      title: "Encanto",
      video: false,
      vote_average: 7.7,
      vote_count: 7084
    },
    {
      adult: false,
      backdrop_path: "/tRS6jvPM9qPrrnx2KRp3ew96Yot.jpg",
      genre_ids: [
        80,
        9648,
        53
      ],
      id: 414906,
      original_language: "en",
      original_title: "The Batman",
      overview: "In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler.",
      popularity: 920.241,
      poster_path: "/74xTEgt7R36Fpooo50r9T25onhq.jpg",
      release_date: "2022-03-01",
      title: "The Batman",
      video: false,
      vote_average: 7.8,
      vote_count: 5803
    },
    {
      adult: false,
      backdrop_path: "/wNQpfAZkySbinb93qVwWIWaot1x.jpg",
      genre_ids: [
        10402,
        14,
        35,
        878,
        10751,
        10770
      ],
      id: 809107,
      original_language: "en",
      original_title: "Z-O-M-B-I-E-S 3",
      overview: "Zed and Addison are beginning their final year at Seabrook High in the town that’s become a safe haven for monsters and humans alike. Zed is anticipating an athletic scholarship that will make him the first Zombie to attend college, while Addison is gearing up for Seabrook’s first international cheer-off competition. Then suddenly, extraterrestrial beings appear around Seabrook, provoking something other than friendly competition.",
      popularity: 874.842,
      poster_path: "/ug8X5UkgdvcZ0WW0WNo5p0F1NGn.jpg",
      release_date: "2022-07-09",
      title: "Z-O-M-B-I-E-S 3",
      video: false,
      vote_average: 7.9,
      vote_count: 175
    },
    {
      adult: false,
      backdrop_path: "/4EoQnShuyQl2YawXlQmQXn4CalG.jpg",
      genre_ids: [
        35
      ],
      id: 998771,
      original_language: "es",
      original_title: "Si saben cómo me pongo ¿Pa' qué me invitan? 2",
      overview: "The El Encanto resort once again hosts a retreat for four couples -- including a liar, a sex addict and a thief -- seeking to fix their relationships.",
      popularity: 867.647,
      poster_path: "/bFRxPAiyA7dhTLrEcitAjLL02BJ.jpg",
      release_date: "2022-07-13",
      title: "Si saben cómo me pongo ¿Pa' qué me invitan? 2",
      video: false,
      vote_average: 2,
      vote_count: 1
    },
    {
      adult: false,
      backdrop_path: "/qjGrUmKW78MCFG8PTLDBp67S27p.jpg",
      genre_ids: [
        16,
        28,
        12,
        14
      ],
      id: 635302,
      original_language: "ja",
      original_title: "劇場版「鬼滅の刃」無限列車編",
      overview: "Tanjirō Kamado, joined with Inosuke Hashibira, a boy raised by boars who wears a boar's head, and Zenitsu Agatsuma, a scared boy who reveals his true power when he sleeps, boards the Infinity Train on a new mission with the Fire Hashira, Kyōjurō Rengoku, to defeat a demon who has been tormenting the people and killing the demon slayers who oppose it!",
      popularity: 817.558,
      poster_path: "/h8Rb9gBr48ODIwYUttZNYeMWeUU.jpg",
      release_date: "2020-10-16",
      title: "Demon Slayer -Kimetsu no Yaiba- The Movie: Mugen Train",
      video: false,
      vote_average: 8.4,
      vote_count: 2592
    },
    {
      adult: false,
      backdrop_path: "/bHTAaLCXnMTThs57mAbptjmOLX2.jpg",
      genre_ids: [
        35,
        18
      ],
      id: 838330,
      original_language: "en",
      original_title: "Not Okay",
      overview: "An ambitious young woman, desperate for followers and fame, fakes a trip to Paris to up her social media presence. When a terrifying incident takes place in the real world and becomes part of her imaginary trip, her white lie becomes a moral quandary that offers her all the attention she’s wanted.",
      popularity: 812.566,
      poster_path: "/x1q3FkqFHBkMeKnHiS6GYgdLvUs.jpg",
      release_date: "2022-07-29",
      title: "Not Okay",
      video: false,
      vote_average: 6.8,
      vote_count: 143
    },
    {
      adult: false,
      backdrop_path: "/m3Ys7UDzUzOyoPYKzp4GhKKokUr.jpg",
      genre_ids: [
        16,
        10751,
        14,
        35,
        12
      ],
      id: 585083,
      original_language: "en",
      original_title: "Hotel Transylvania: Transformania",
      overview: "When Van Helsing's mysterious invention, the \"Monsterfication Ray,\" goes haywire, Drac and his monster pals are all transformed into humans, and Johnny becomes a monster. In their new mismatched bodies, Drac and Johnny must team up and race across the globe to find a cure before it's too late, and before they drive each other crazy.",
      popularity: 792.497,
      poster_path: "/teCy1egGQa0y8ULJvlrDHQKnxBL.jpg",
      release_date: "2022-02-25",
      title: "Hotel Transylvania: Transformania",
      video: false,
      vote_average: 7.1,
      vote_count: 1123
    },
    {
      adult: false,
      backdrop_path: "/An1nKjXahrChfEbZ3MAE8fsiut1.jpg",
      genre_ids: [
        27
      ],
      id: 661791,
      original_language: "es",
      original_title: "La abuela",
      overview: "A Paris model must return to Madrid where her grandmother, who raised her, has had a stroke. But spending just a few days with this relative turns into an unexpected nightmare.",
      popularity: 792.095,
      poster_path: "/eIUixNvox4U4foL5Z9KbN9HXYSM.jpg",
      release_date: "2022-01-28",
      title: "The Grandmother",
      video: false,
      vote_average: 5.9,
      vote_count: 233
    },
    {
      adult: false,
      backdrop_path: "/rRGl4Uqo962I2iqQSOT8nArWNWd.jpg",
      genre_ids: [
        16,
        28,
        878
      ],
      id: 887357,
      original_language: "en",
      original_title: "Green Lantern: Beware My Power",
      overview: "Recently discharged Marine sniper John Stewart is at a crossroads in his life, one which is only complicated by receiving an extraterrestrial ring which grants him the powers of the Green Lantern of Earth. Unfortunately, the ring doesn't come with instructions - but it does come with baggage, like a horde of interplanetary killers bent on eliminating every Green Lantern in the universe. Now, with the aid of the light-hearted Green Arrow, Adam Strange and Hawkgirl, this reluctant soldier must journey into the heart of a galactic Rann/Thanagar war and somehow succeed where all other Green Lanterns have failed.",
      popularity: 789.363,
      poster_path: "/nS41LN1m2HYvVotvgOTcbPW2cjL.jpg",
      release_date: "2022-07-12",
      title: "Green Lantern: Beware My Power",
      video: false,
      vote_average: 7.3,
      vote_count: 74
    },
    {
      adult: false,
      backdrop_path: "/xHRabofjmMGoIV3mb6xgy4nwOcS.jpg",
      genre_ids: [
        27
      ],
      id: 801071,
      original_language: "en",
      original_title: "The Jack in the Box: Awakening",
      overview: "When a vintage Jack-in-the-box is opened by a dying woman, she enters into a deal with the demon within that would see her illness cured in return for helping it claim six innocent victims.",
      popularity: 781.181,
      poster_path: "/3Ib8vlWTrAKRrTWUrTrZPOMW4jp.jpg",
      release_date: "2022-02-24",
      title: "The Jack in the Box: Awakening",
      video: false,
      vote_average: 5.7,
      vote_count: 66
    },
    {
      adult: false,
      backdrop_path: "/qp8qKiP7Q7zK4z3LItwWMHfV9kJ.jpg",
      genre_ids: [
        53
      ],
      id: 764835,
      original_language: "en",
      original_title: "The Desperate Hour",
      overview: "A woman desperately races to save her child after police place her hometown on lockdown due to an active shooter incident.",
      popularity: 763.86,
      poster_path: "/u6Pg9eTklhg6Aa7kXaxrfdE1Chi.jpg",
      release_date: "2021-09-12",
      title: "The Desperate Hour",
      video: false,
      vote_average: 6.2,
      vote_count: 204
    },
    {
      adult: false,
      backdrop_path: "/tzNx4y7kYf1Xw3F3T6QxrE7PPwb.jpg",
      genre_ids: [
        53,
        18,
        80,
        9648,
        27
      ],
      id: 825808,
      original_language: "en",
      original_title: "See for Me",
      overview: "When blind former skier Sophie cat-sits in a secluded mansion, three thieves invade for the hidden safe. Sophie's only defense is army veteran Kelly, who she meets on the See For Me app. Kelly helps Sophie defend herself against the invaders and survive.",
      popularity: 749.22,
      poster_path: "/qk1ZERG6yhwAJqTobmDgw8jRL2C.jpg",
      release_date: "2022-01-07",
      title: "See for Me",
      video: false,
      vote_average: 6.1,
      vote_count: 91
    },
    {
      adult: false,
      backdrop_path: "/dFCtmk760k1j6G0sSPrZMnMuNuL.jpg",
      genre_ids: [
        27,
        53,
        28
      ],
      id: 960258,
      original_language: "en",
      original_title: "Shark Bait",
      overview: "A group of friends enjoying a weekend steal a couple of jetskis racing them out to sea, ending up in a horrific head-on collision. They struggle to find a way home with a badly injured friend while from the waters below predators lurk.",
      popularity: 740.117,
      poster_path: "/mVVU9zC8snNHlcqYONY2HOsh9ob.jpg",
      release_date: "2022-05-13",
      title: "Shark Bait",
      video: false,
      vote_average: 6.4,
      vote_count: 103
    },
    {
      adult: false,
      backdrop_path: "/8QpzqK3nPGxpqpKqhe6QasTGBWQ.jpg",
      genre_ids: [
        878,
        12,
        28
      ],
      id: 406759,
      original_language: "en",
      original_title: "Moonfall",
      overview: "A mysterious force knocks the moon from its orbit around Earth and sends it hurtling on a collision course with life as we know it.",
      popularity: 722.723,
      poster_path: "/odVv1sqVs0KxBXiA8bhIBlPgalx.jpg",
      release_date: "2022-02-03",
      title: "Moonfall",
      video: false,
      vote_average: 6.5,
      vote_count: 1639
    },
    {
      adult: false,
      backdrop_path: "/e42d0nmC4GZjXjHyPvCeNiXZhW4.jpg",
      genre_ids: [
        18,
        35
      ],
      id: 705861,
      original_language: "en",
      original_title: "Hustle",
      overview: "After discovering a once-in-a-lifetime player with a rocky past abroad, a down on his luck basketball scout takes it upon himself to bring the phenom to the States without his team's approval. Against the odds, they have one final shot to prove they have what it takes to make it in the NBA.",
      popularity: 705.589,
      poster_path: "/xWic7kPq13oRxYjbGLApXCnc7pz.jpg",
      release_date: "2022-06-03",
      title: "Hustle",
      video: false,
      vote_average: 7.9,
      vote_count: 1328
    },
    {
      adult: false,
      backdrop_path: "/qp8qKiP7Q7zK4z3LItwWMHfV9kJ.jpg",
      genre_ids: [
        53
      ],
      id: 764835,
      original_language: "en",
      original_title: "The Desperate Hour",
      overview: "A woman desperately races to save her child after police place her hometown on lockdown due to an active shooter incident.",
      popularity: 763.86,
      poster_path: "/u6Pg9eTklhg6Aa7kXaxrfdE1Chi.jpg",
      release_date: "2021-09-12",
      title: "The Desperate Hour",
      video: false,
      vote_average: 6.2,
      vote_count: 204
    },
    
    {
      adult: false,
      backdrop_path: "/qp8qKiP7Q7zK4z3LItwWMHfV9kJ.jpg",
      genre_ids: [
        53
      ],
      id: 764835,
      original_language: "en",
      original_title: "The Desperate Hour",
      overview: "A woman desperately races to save her child after police place her hometown on lockdown due to an active shooter incident.",
      popularity: 507.106,
      poster_path: "/u6Pg9eTklhg6Aa7kXaxrfdE1Chi.jpg",
      release_date: "2021-09-12",
      title: "The Desperate Hour",
      video: false,
      vote_average: 6.2,
      vote_count: 206
    },
    {
      adult: false,
      backdrop_path: "/e42d0nmC4GZjXjHyPvCeNiXZhW4.jpg",
      genre_ids: [
        18,
        35
      ],
      id: 705861,
      original_language: "en",
      original_title: "Hustle",
      overview: "After discovering a once-in-a-lifetime player with a rocky past abroad, a down on his luck basketball scout takes it upon himself to bring the phenom to the States without his team's approval. Against the odds, they have one final shot to prove they have what it takes to make it in the NBA.",
      popularity: 486.559,
      poster_path: "/xWic7kPq13oRxYjbGLApXCnc7pz.jpg",
      release_date: "2022-06-03",
      title: "Hustle",
      video: false,
      vote_average: 7.9,
      vote_count: 1337
    },
    {
      adult: false,
      backdrop_path: "/tzNx4y7kYf1Xw3F3T6QxrE7PPwb.jpg",
      genre_ids: [
        53,
        18,
        80,
        9648,
        27
      ],
      id: 825808,
      original_language: "en",
      original_title: "See for Me",
      overview: "When blind former skier Sophie cat-sits in a secluded mansion, three thieves invade for the hidden safe. Sophie's only defense is army veteran Kelly, who she meets on the See For Me app. Kelly helps Sophie defend herself against the invaders and survive.",
      popularity: 461.538,
      poster_path: "/qk1ZERG6yhwAJqTobmDgw8jRL2C.jpg",
      release_date: "2022-01-07",
      title: "See for Me",
      video: false,
      vote_average: 6.1,
      vote_count: 92
    },
    {
      adult: false,
      backdrop_path: "/cugmVwK0N4aAcLibelKN5jWDXSx.jpg",
      genre_ids: [
        16,
        28,
        12,
        878
      ],
      id: 768744,
      original_language: "ja",
      original_title: "僕のヒーローアカデミア THE MOVIE ワールド ヒーローズ ミッション",
      overview: "A mysterious group called Humarize strongly believes in the Quirk Singularity Doomsday theory which states that when quirks get mixed further in with future generations, that power will bring forth the end of humanity. In order to save everyone, the Pro-Heroes around the world ask UA Academy heroes-in-training to assist them and form a world-classic selected hero team. It is up to the heroes to save the world and the future of heroes in what is the most dangerous crisis to take place yet in My Hero Academia.",
      popularity: 565.203,
      poster_path: "/AsTlA7dj2ySGY1pzGSD0MoHFhEF.jpg",
      release_date: "2021-08-06",
      title: "My Hero Academia: World Heroes' Mission",
      video: false,
      vote_average: 7.6,
      vote_count: 247
    },
    {
      adult: false,
      backdrop_path: "/6mJrgL7Mi13XjJeGYJFlD6UEVQw.jpg",
      genre_ids: [
        16,
        35,
        10751,
        10402
      ],
      id: 438695,
      original_language: "en",
      original_title: "Sing 2",
      overview: "Buster and his new cast now have their sights set on debuting a new show at the Crystal Tower Theater in glamorous Redshore City. But with no connections, he and his singers must sneak into the Crystal Entertainment offices, run by the ruthless wolf mogul Jimmy Crystal, where the gang pitches the ridiculous idea of casting the lion rock legend Clay Calloway in their show. Buster must embark on a quest to find the now-isolated Clay and persuade him to return to the stage.",
      popularity: 527.663,
      poster_path: "/aWeKITRFbbwY8txG5uCj4rMCfSP.jpg",
      release_date: "2021-12-01",
      title: "Sing 2",
      video: false,
      vote_average: 8,
      vote_count: 3029
    },
    {
      adult: false,
      backdrop_path: "/9IDJpHROaC0S1ZlIxrvzOcOX5yC.jpg",
      genre_ids: [
        16,
        35,
        10751,
        80
      ],
      id: 629542,
      original_language: "en",
      original_title: "The Bad Guys",
      overview: "When the infamous Bad Guys are finally caught after years of countless heists and being the world’s most-wanted villains, Mr. Wolf brokers a deal to save them all from prison.",
      popularity: 527.65,
      poster_path: "/7qop80YfuO0BwJa1uXk1DXUUEwv.jpg",
      release_date: "2022-03-17",
      title: "The Bad Guys",
      video: false,
      vote_average: 7.8,
      vote_count: 893
    },
    {
      adult: false,
      backdrop_path: "/8QpzqK3nPGxpqpKqhe6QasTGBWQ.jpg",
      genre_ids: [
        878,
        12,
        28
      ],
      id: 406759,
      original_language: "en",
      original_title: "Moonfall",
      overview: "A mysterious force knocks the moon from its orbit around Earth and sends it hurtling on a collision course with life as we know it.",
      popularity: 497.77,
      poster_path: "/odVv1sqVs0KxBXiA8bhIBlPgalx.jpg",
      release_date: "2022-02-03",
      title: "Moonfall",
      video: false,
      vote_average: 6.5,
      vote_count: 1649
    },
    {
      adult: false,
      backdrop_path: "/7ef3yg5eCE6ZGKMsqUrfH8KdSMA.jpg",
      genre_ids: [
        16,
        28,
        10751,
        878,
        35
      ],
      id: 539681,
      original_language: "en",
      original_title: "DC League of Super-Pets",
      overview: "When Superman and the rest of the Justice League are kidnapped, Krypto the Super-Dog must convince a rag-tag shelter pack - Ace the hound, PB the potbellied pig, Merton the turtle and Chip the squirrel - to master their own newfound powers and help him rescue the superheroes.",
      popularity: 486.928,
      poster_path: "/r7XifzvtezNt31ypvsmb6Oqxw49.jpg",
      release_date: "2022-07-27",
      title: "DC League of Super-Pets",
      video: false,
      vote_average: 7.4,
      vote_count: 64
    },
    {
      adult: false,
      backdrop_path: "/lNyLSOKMMeUPr1RsL4KcRuIXwHt.jpg",
      genre_ids: [
        878,
        28,
        12
      ],
      id: 580489,
      original_language: "en",
      original_title: "Venom: Let There Be Carnage",
      overview: "After finding a host body in investigative reporter Eddie Brock, the alien symbiote must face a new enemy, Carnage, the alter ego of serial killer Cletus Kasady.",
      popularity: 526.431,
      poster_path: "/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg",
      release_date: "2021-09-30",
      title: "Venom: Let There Be Carnage",
      video: false,
      vote_average: 7,
      vote_count: 7780
    },
    {
      adult: false,
      backdrop_path: "/figlwUsXXFehX3IebdjqNLV6vWk.jpg",
      genre_ids: [
        28,
        53
      ],
      id: 628900,
      original_language: "en",
      original_title: "The Contractor",
      overview: "After being involuntarily discharged from the U.S. Special Forces, James Harper decides to support his family by joining a private contracting organization alongside his best friend and under the command of a fellow veteran. Overseas on a covert mission, Harper must evade those trying to kill him while making his way back home.",
      popularity: 480.875,
      poster_path: "/rJPGPZ5soaG27MK90oKpioSiJE2.jpg",
      release_date: "2022-03-10",
      title: "The Contractor",
      video: false,
      vote_average: 6.5,
      vote_count: 445
    },
    {
      adult: false,
      backdrop_path: "/2kvl6lcgoyAaf8cSRkzxE611u6T.jpg",
      genre_ids: [
        16,
        28,
        14,
        878
      ],
      id: 761898,
      original_language: "ja",
      original_title: "劇場版 ソードアート・オンライン-プログレッシブ- 星なき夜のアリア",
      overview: "One month after Kayaba Akihiko's game of death began, the death toll continues to rise, two thousand players having already lost their lives to the ultra-difficult VRMMO world of Sword Art Online. On the day of the strategy meeting to plan out the first-floor boss battle, Kirito, a solo player who vows to fight alone to get stronger, runs into a rare, high-level female player. She gracefully dispatches powerful monsters with a single rapier that flashes like a shooting star in the night...",
      popularity: 525.621,
      poster_path: "/yD9RhgIVydQNBK7OLEbCWYcWMUd.jpg",
      release_date: "2021-10-30",
      title: "Sword Art Online the Movie -Progressive- Aria of a Starless Night",
      video: false,
      vote_average: 8.3,
      vote_count: 83
    },
    {
      adult: false,
      backdrop_path: "/lmZFxXgJE3vgrciwuDib0N8CfQo.jpg",
      genre_ids: [
        12,
        28,
        878
      ],
      id: 299536,
      original_language: "en",
      original_title: "Avengers: Infinity War",
      overview: "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.",
      popularity: 490.076,
      poster_path: "/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
      release_date: "2018-04-25",
      title: "Avengers: Infinity War",
      video: false,
      vote_average: 8.3,
      vote_count: 25136
    },
    {
      adult: false,
      backdrop_path: "/5M299fg3Ih7HKrMv1PKV0x8emfE.jpg",
      genre_ids: [
        878,
        28,
        53
      ],
      id: 34851,
      original_language: "en",
      original_title: "Predators",
      overview: "A group of cold-blooded killers find themselves trapped on an alien planet to be hunted by extraterrestrial Predators.",
      popularity: 487.008,
      poster_path: "/gsnUhWMYLSD8VZS7nrMT9mj9BYr.jpg",
      release_date: "2010-07-03",
      title: "Predators",
      video: false,
      vote_average: 6.2,
      vote_count: 3273
    },
    {
      adult: false,
      backdrop_path: "/egS5SHI4Ppwmb65lUjqsy79ASnN.jpg",
      genre_ids: [
        27
      ],
      id: 756681,
      original_language: "es",
      original_title: "Veneciafrenia",
      overview: "A group of spanish tourists in Venice finds themselves fighting for their lives against locals that are not too keen on foreigners.",
      popularity: 389.746,
      poster_path: "/luMC56bwZqaECYRz6X7sXjqN6nd.jpg",
      release_date: "2022-04-22",
      title: "Veneciafrenia",
      video: false,
      vote_average: 6,
      vote_count: 103
    },
    {
      adult: false,
      backdrop_path: "/gIp0L6VRu2xrX4uCnH9jPsmpaCG.jpg",
      genre_ids: [
        878,
        28,
        12,
        53
      ],
      id: 106,
      original_language: "en",
      original_title: "Predator",
      overview: "A team of commandos on a mission in a Central American jungle find themselves hunted by an extraterrestrial warrior.",
      popularity: 583.618,
      poster_path: "/k3mW4qfJo6SKqe6laRyNGnbB9n5.jpg",
      release_date: "1987-06-12",
      title: "Predator",
      video: false,
      vote_average: 7.5,
      vote_count: 6330
    },
    {
      adult: false,
      backdrop_path: "/l83VzRBverTuAFyh9N9dMYsPr4m.jpg",
      genre_ids: [
        80,
        28
      ],
      id: 893297,
      original_language: "en",
      original_title: "American Sicario",
      overview: "The story of the rise and fall of the first American-born drug lord in Mexico, this tale of power, money, greed and betrayal amongst rival members of the drug cartels finds American gangster Erik Vasquez scheming to become the top dog in the Mexican underworld, only to find himself making enemies out of both the powerful cartels and his own allies.",
      popularity: 501.237,
      poster_path: "/nQRPSUmHGLrFRPK6v3BI1frAM1O.jpg",
      release_date: "2021-12-10",
      title: "American Sicario",
      video: false,
      vote_average: 5.9,
      vote_count: 71
    },
    {
      adult: false,
      backdrop_path: "/zxWAv1A34kdYslBi4ekMDtgIGUt.jpg",
      genre_ids: [
        28,
        12,
        14
      ],
      id: 566525,
      original_language: "en",
      original_title: "Shang-Chi and the Legend of the Ten Rings",
      overview: "Shang-Chi must confront the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings organization.",
      popularity: 453.45,
      poster_path: "/1BIoJGKbXjdFDAqUEiA2VHqkK1Z.jpg",
      release_date: "2021-09-01",
      title: "Shang-Chi and the Legend of the Ten Rings",
      video: false,
      vote_average: 7.7,
      vote_count: 6964
    },
    {
      adult: false,
      backdrop_path: "/1uhf2qYd7wBcOsTJ7Li1FcH672D.jpg",
      genre_ids: [
        53,
        18
      ],
      id: 880313,
      original_language: "es",
      original_title: "La ira de Dios",
      overview: "Convinced the tragic deaths of her loved ones were orchestrated by a famous novelist she worked for, Luciana turns to a journalist to expose her truth.",
      popularity: 421.166,
      poster_path: "/lFhxNXEK0UpXXqSbhba83Zhl2uk.jpg",
      release_date: "2022-06-15",
      title: "The Wrath of God",
      video: false,
      vote_average: 6.4,
      vote_count: 113
    },
    {
      adult: false,
      backdrop_path: "/f4E0ocYeToEuXvczZv6QArrMDJ.jpg",
      genre_ids: [
        878,
        28,
        12,
        27
      ],
      id: 346910,
      original_language: "en",
      original_title: "The Predator",
      overview: "When a young boy accidentally triggers the universe's most lethal hunters' return to Earth, only a ragtag crew of ex-soldiers and a disgruntled scientist can prevent the end of the human race.",
      popularity: 574.985,
      poster_path: "/wMq9kQXTeQCHUZOG4fAe5cAxyUA.jpg",
      release_date: "2018-09-05",
      title: "The Predator",
      video: false,
      vote_average: 5.6,
      vote_count: 3833
    },
    {
      adult: false,
      backdrop_path: "/a8Q2g0g7XzAF6gcB8qgn37ccb9Y.jpg",
      genre_ids: [
        16,
        12,
        878
      ],
      id: 912598,
      original_language: "ja",
      original_title: "バブル",
      overview: "In an abandoned Tokyo overrun by bubbles and gravitational abnormalities, one gifted young man has a fateful meeting with a mysterious girl.",
      popularity: 476.921,
      poster_path: "/kk28Lk8oQBGjoHRGUCN2vxKb4O2.jpg",
      release_date: "2022-02-14",
      title: "Bubble",
      video: false,
      vote_average: 7.5,
      vote_count: 211
    }
 

      ]
     
   

    let data = document.getElementById("movie")

    function movieArr(arr){

      let result = "";

    arr.forEach(m => {
             result += `<div class="col-3">
							<div class="card img-body">
                            <div class="card-body img-body">
                                <figure class="movie-img">
                                    <img src="https://image.tmdb.org/t/p/w1280${m.poster_path}" alt="" class="img">
                                    <figcaption class="movie-info">
                                        <div class="row">
                                            <div class="col-9">
                                                <h3>
                                                    ${m.title}
                                                </h3>
                                                    
                                                
                                            </div>
                                            <div class="col-3">
                                                <h6 class="rating ${ratingMovie(m.vote_average)}">
                                                   ${m.vote_average}
                                                </h6>
                                            </div>
                                        </div>
                                        <div class="overview">
                                            <h4>
                                                ${m.original_title}
                                            </h4>
                                            <p class="para">
                                              ${m. overview}
                                            </p>
                                        </div>							
                                     </figcaption>
                                </figure>
                            </div>
                        </div>
                    </div>`
            });

     data.innerHTML = result;
          }
          movieArr(movies)

     let searchbtn = document.getElementById('searchbtn')

    

    //  function onkeydown(event){
    //   if(event.keyCode === 13){
    //    return event.target.value
    //  }
    // }

    function onkeyup(e){
       //cl(e.target.value)
      let searchMovie = e.target.value;
      let filterMovie = movies.filter(function(movie){
       return movie.title.toLowerCase().includes(searchMovie)
      
      })
      //cl( filterMovie)
      movieArr(filterMovie)
      
    }

     function ratingMovie(vote){
      if(vote >= 8){
        return 'green'
      }else if(vote >=5){
        return 'orange'
      }else{
        return 'red'
      }
     }
     searchbtn.addEventListener('keyup',onkeyup)
    //  searchbtn.addEventListener('keydown',onkeydown)