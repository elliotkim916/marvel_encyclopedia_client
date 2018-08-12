import React from 'react';
import {shallow} from 'enzyme';
import {Event} from './event';

describe('<Event />', () => {
  const eventProps = {
    "match": {
        "path": "/event",
        "url": "/event",
        "isExact": true,
        "params": {}
      },
      "location": {
        "pathname": "/event",
        "search": "",
        "hash": "",
        "key": "xxy7qm"
      },
      "history": {
        "length": 29,
        "action": "PUSH",
        "location": {
        "pathname": "/event",
        "search": "",
        "hash": "",
        "key": "xxy7qm"
        }
      },
      "eventResult": {
        "id": 234,
        "title": "Avengers Disassembled",
        "description": "Writer Brian Michael Bendis kicks off his historic run with the Avengers by bringing the previous era to a close alongside artist David Finch! Chaos reigns when of Earthâ€™s Mightiest Heroes turns against their teammates, leading the Avengers into a battle that not all will survive! Featuring Iron Man, Captain America, Hawkeye, the Scarlet Witch and more!",
        "resourceURI": "http://gateway.marvel.com/v1/public/events/234",
        "urls": [
        {
          "type": "detail",
          "url": "http://marvel.com/comics/events/234/avengers_disassembled?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0"
        },
        {
          "type": "wiki",
          "url": "http://marvel.com/universe/Avengers_Disassembled?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0"
        }
        ],
        "modified": "2013-10-18T16:38:16-0400",
        "start": "2004-07-28 00:00:00",
        "end": "2005-01-01 00:00:00",
        "thumbnail": {
        "path": "http://i.annihil.us/u/prod/marvel/i/mg/1/03/52127e32d3671",
        "extension": "jpg"
        },
        "creators": {
        "available": 50,
        "collectionURI": "http://gateway.marvel.com/v1/public/events/234/creators",
        "items": [
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/creators/498",
          "name": "Greg Adams",
          "role": "inker"
          },
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/creators/544",
          "name": "Wayne Faucher",
          "role": "inker"
          },
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/creators/492",
          "name": "Tom Feister",
          "role": "inker"
          },
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/creators/476",
          "name": "Drew Geraci",
          "role": "inker"
          },
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/creators/763",
          "name": "Jack Jadson",
          "role": "inker"
          },
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/creators/314",
          "name": "Neal Adams",
          "role": "penciller (cover)"
          },
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/creators/374",
          "name": "Steve Epting",
          "role": "penciller (cover)"
          },
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/creators/24",
          "name": "Brian Michael Bendis",
          "role": "writer"
          },
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/creators/44",
          "name": "Chris Claremont",
          "role": "writer"
          },
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/creators/506",
          "name": "Joe Bennett",
          "role": "penciller"
          },
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/creators/5106",
          "name": "Scot Eaton",
          "role": "penciller"
          },
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/creators/248",
          "name": "David Finch",
          "role": "penciller"
          },
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/creators/460",
          "name": "Tony Harris",
          "role": "penciller"
          },
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/creators/2133",
          "name": "Tom Brevoort",
          "role": "editor"
          },
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/creators/8504",
          "name": "Frank D'ARMATA",
          "role": "colorist"
          },
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/creators/430",
          "name": "Edgar Delgado",
          "role": "colorist"
          },
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/creators/618",
          "name": "Transparency Digital",
          "role": "colorist"
          },
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/creators/13457",
          "name": "Chris Eliopoulos",
          "role": "letterer"
          },
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/creators/8635",
          "name": "Randy Gentile",
          "role": "letterer"
          },
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/creators/13143",
          "name": "Vc Randy Gentile",
          "role": "letterer"
          }
        ],
        "returned": 20
        },
        "characters": {
        "available": 18,
        "collectionURI": "http://gateway.marvel.com/v1/public/events/234/characters",
        "items": [
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009165",
          "name": "Avengers"
          },
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220",
          "name": "Captain America"
          },
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010771",
          "name": "Excalibur"
          },
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009299",
          "name": "Fantastic Four"
          },
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009539",
          "name": "Franklin Richards"
          },
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009312",
          "name": "Galactus"
          },
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009338",
          "name": "Hawkeye"
          },
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009356",
          "name": "Human Torch"
          },
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009359",
          "name": "Hydra"
          },
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009366",
          "name": "Invisible Woman"
          },
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009368",
          "name": "Iron Man"
          },
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009459",
          "name": "Mr. Fantastic"
          },
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009562",
          "name": "Scarlet Witch"
          },
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009610",
          "name": "Spider-Man"
          },
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009662",
          "name": "Thing"
          },
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009664",
          "name": "Thor"
          },
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009525",
          "name": "Valeria Richards"
          },
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009707",
          "name": "Wasp"
          }
        ],
        "returned": 18
        },
        "stories": {
        "available": 80,
        "collectionURI": "http://gateway.marvel.com/v1/public/events/234/stories",
        "items": [
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/stories/586",
          "name": "Interior #586",
          "type": "interiorStory"
          },
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/stories/882",
          "name": "THOR (1998) #83",
          "type": "cover"
          },
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/stories/883",
          "name": "Interior #883",
          "type": "interiorStory"
          },
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/stories/884",
          "name": "THOR (1998) #82",
          "type": "cover"
          },
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/stories/885",
          "name": "Interior #885",
          "type": "interiorStory"
          },
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/stories/890",
          "name": "THOR (1998) #80",
          "type": "cover"
          },
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/stories/891",
          "name": "Interior #891",
          "type": "interiorStory"
          },
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/stories/892",
          "name": "THOR (1998) #81",
          "type": "cover"
          },
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/stories/893",
          "name": "Interior #893",
          "type": "interiorStory"
          },
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/stories/894",
          "name": "THOR (1998) #84",
          "type": "cover"
          },
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/stories/895",
          "name": "AVENGERS DISASSEMBLED TIE-IN! “RAGNAROK” PART 4 (OF 6) What makes a god? Is it birthright, is it happenstance, or is it in the m",
          "type": "interiorStory"
          },
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/stories/896",
          "name": "THOR (1998) #85",
          "type": "cover"
          },
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/stories/897",
          "name": "AVENGERS DISASSEMBLED TIE-IN! \"RAGNAROK\" PART 6 (OF 6) It's the end of all that is, and you've got a ringside seat for the last ",
          "type": "interiorStory"
          },
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/stories/920",
          "name": "Fantastic Four (1998) #517",
          "type": "cover"
          },
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/stories/921",
          "name": "Interior #921",
          "type": "interiorStory"
          },
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/stories/922",
          "name": "Fantastic Four (1998) #518",
          "type": "cover"
          },
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/stories/923",
          "name": "AVENGERS DISASSEMBLED TIE-IN! \"FOURTITUDE\" PART 2 (OF 3) With public opinion of the FF at an all-time low and with all of Manhat",
          "type": "interiorStory"
          },
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/stories/924",
          "name": "Fantastic Four (1998) #519",
          "type": "cover"
          },
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/stories/925",
          "name": "AVENGERS DISASSEMBLED TIE-IN! \"FOURTITUDE\" FINALE! PART 3 (OF 3) Galactus the World-Eater is coming to Earth to choose one of th",
          "type": "interiorStory"
          },
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/stories/987",
          "name": "Cover #987",
          "type": "cover"
          }
        ],
        "returned": 20
        },
        "comics": {
        "available": 39,
        "collectionURI": "http://gateway.marvel.com/v1/public/events/234/comics",
        "items": [
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/comics/532",
          "name": "Avengers (1998) #500"
          },
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/comics/767",
          "name": "Avengers (1998) #501"
          },
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/comics/845",
          "name": "Avengers (1998) #502"
          },
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/comics/923",
          "name": "Avengers (1998) #503"
          },
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/comics/1703",
          "name": "Avengers Disassembled (Trade Paperback)"
          },
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/comics/5685",
          "name": "Avengers Disassembled (Hardcover)"
          },
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/comics/1490",
          "name": "Avengers Disassembled: Captain America (Trade Paperback)"
          },
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/comics/1491",
          "name": "Avengers Disassembled: Iron Man (Trade Paperback)"
          },
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/comics/23900",
          "name": "Avengers Disassembled: Iron Man, Thor & Captain America (Hardcover)"
          },
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/comics/1481",
          "name": "Avengers Disassembled: Thor (Trade Paperback)"
          },
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/comics/90",
          "name": "Avengers Finale (2004) #1"
          },
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/comics/595",
          "name": "Captain America (2002) #29"
          },
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/comics/514",
          "name": "Captain America (2002) #30"
          },
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/comics/801",
          "name": "Captain America (2002) #31"
          },
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/comics/893",
          "name": "Captain America (2002) #32"
          },
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/comics/605",
          "name": "Captain America & the Falcon (2004) #5"
          },
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/comics/573",
          "name": "Captain America & the Falcon (2004) #6"
          },
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/comics/1448",
          "name": "Excalibur (2004) #8"
          },
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/comics/748",
          "name": "Fantastic Four (1998) #517"
          },
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/comics/826",
          "name": "Fantastic Four (1998) #518"
          }
        ],
        "returned": 20
        },
        "series": {
        "available": 15,
        "collectionURI": "http://gateway.marvel.com/v1/public/events/234/series",
        "items": [
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/354",
          "name": "Avengers (1998 - 2004)"
          },
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/1795",
          "name": "Avengers Disassembled (2006)"
          },
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/344",
          "name": "Avengers Disassembled (2005)"
          },
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/1398",
          "name": "Avengers Disassembled: Captain America (2004)"
          },
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/1403",
          "name": "Avengers Disassembled: Iron Man (2004)"
          },
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/7067",
          "name": "Avengers Disassembled: Iron Man, Thor & Captain America (2009 - Present)"
          },
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/1359",
          "name": "Avengers Disassembled: Thor (2004)"
          },
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/829",
          "name": "Avengers Finale (2004)"
          },
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/485",
          "name": "Captain America (2002 - 2004)"
          },
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/716",
          "name": "Captain America & the Falcon (2004 - 2005)"
          },
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/740",
          "name": "Excalibur (2004 - 2005)"
          },
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/421",
          "name": "Fantastic Four (1998 - 2012)"
          },
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/2572",
          "name": "Iron Man (1998 - 2004)"
          },
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/556",
          "name": "Spectacular Spider-Man (2003 - 2005)"
          },
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/581",
          "name": "Thor (1998 - 2004)"
          }
        ],
        "returned": 15
        },
        "next": {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/245",
        "name": "Enemy of the State"
        },
        "previous": {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/37",
        "name": "Maximum Security"
        }
      },
      "eventCharacter": [
        {
        "id": 1009165,
        "name": "Avengers",
        "description": "Earth's Mightiest Heroes joined forces to take on threats that were too big for any one hero to tackle. With a roster that has included Captain America, Iron Man, Ant-Man, Hulk, Thor, Wasp and dozens more over the years, the Avengers have come to be regarded as Earth's No. 1 team.",
        "modified": "2014-05-27T20:28:26-0400",
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/20/5102c774ebae7",
          "extension": "jpg"
        },
        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009165",
        "comics": {
          "available": 1481,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009165/comics",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/42539",
            "name": "Age of Apocalypse (2011) #2 (Avengers Art Appreciation Variant)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/37405",
            "name": "Age of Ultron (2013) #3"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/37406",
            "name": "Age of Ultron (2013) #4"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/37407",
            "name": "Age of Ultron (2013) #5"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/45904",
            "name": "Age of Ultron (2013) #6"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/45905",
            "name": "Age of Ultron (2013) #7"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/45906",
            "name": "Age of Ultron (2013) #8"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/45907",
            "name": "Age of Ultron (2013) #9"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/45908",
            "name": "Age of Ultron (2013) #10"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/38524",
            "name": "Age of X: Universe (2011) #1"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/38523",
            "name": "Age of X: Universe (2011) #2"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/37278",
            "name": "Alias (2001) #4"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/37255",
            "name": "Alias Omnibus (Hardcover)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/43473",
            "name": "All-New X-Men (2012) #8"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/43475",
            "name": "All-New X-Men (2012) #10"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/43476",
            "name": "All-New X-Men (2012) #11"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/43477",
            "name": "All-New X-Men (2012) #12"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/43479",
            "name": "All-New X-Men (2012) #14"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/59596",
            "name": "Avengers (2016) #1.1"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/59597",
            "name": "Avengers (2016) #2.1"
          }
          ],
          "returned": 20
        },
        "series": {
          "available": 386,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009165/series",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/15331",
            "name": "Age of Apocalypse (2011 - 2013)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/17318",
            "name": "Age of Ultron (2013)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/13896",
            "name": "Age of X: Universe (2011)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/672",
            "name": "Alias (2001 - 2003)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/13383",
            "name": "Alias Omnibus (2006)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/16449",
            "name": "All-New X-Men (2012 - Present)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/20443",
            "name": "All-New, All-Different Avengers (2015 - Present)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/22374",
            "name": "All-New, All-Different Avengers (2017)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/22190",
            "name": "All-New, All-Different Avengers Annual (2016 - Present)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/2116",
            "name": "Alpha Flight (1983 - 1994)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/454",
            "name": "Amazing Spider-Man (1999 - 2013)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/2984",
            "name": "Amazing Spider-Man Annual (1964 - 2018)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/24403",
            "name": "Amazing Spider-Man Epic Collection: Spider-Man No More (2018)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/5376",
            "name": "Amazing Spider-Man Family (2008 - 2009)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/1489",
            "name": "AMAZING SPIDER-MAN VOL. 10: NEW AVENGERS TPB (2005)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/16312",
            "name": "Amazing Spider-Man: Ends of the Earth (2012)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/744",
            "name": "Astonishing X-Men (2004 - 2013)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/10030",
            "name": "Atlantis Attacks (2011)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/10031",
            "name": "Atlantis Attacks (DM Only) (2011)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/16452",
            "name": "Avengers (2012 - Present)"
          }
          ],
          "returned": 20
        },
        "stories": {
          "available": 2189,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009165/stories",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/490",
            "name": "Interior #490",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/542",
            "name": "Interior #542",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/572",
            "name": "Interior #572",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/574",
            "name": "Interior #574",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/575",
            "name": "Interior #575",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/577",
            "name": "Interior #577",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/579",
            "name": "Interior #579",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/580",
            "name": "Interior #580",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/749",
            "name": "1 of 4 - Season of the Witch",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/892",
            "name": "THOR (1998) #81",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/1024",
            "name": "Avengers (1998) #80",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/1025",
            "name": "Interior #1025",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/1026",
            "name": "Avengers (1998) #81",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/1027",
            "name": "Interior #1027",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/1029",
            "name": "Interior #1029",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/1031",
            "name": "Interior #1031",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/1039",
            "name": "Interior #1039",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/1041",
            "name": "Avengers (1998) #502",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/1043",
            "name": "Interior #1043",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/1054",
            "name": "Avengers (1998) #72",
            "type": "cover"
          }
          ],
          "returned": 20
        },
        "events": {
          "available": 34,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009165/events",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/116",
            "name": "Acts of Vengeance!"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/314",
            "name": "Age of Ultron"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/303",
            "name": "Age of X"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/233",
            "name": "Atlantis Attacks"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/234",
            "name": "Avengers Disassembled"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/310",
            "name": "Avengers VS X-Men"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/296",
            "name": "Chaos War"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/238",
            "name": "Civil War"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/239",
            "name": "Crossing"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/318",
            "name": "Dark Reign"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/246",
            "name": "Evolutionary War"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/302",
            "name": "Fear Itself"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/251",
            "name": "House of M"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/252",
            "name": "Inferno"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/315",
            "name": "Infinity"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/253",
            "name": "Infinity Gauntlet"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/29",
            "name": "Infinity War"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/317",
            "name": "Inhumanity"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/255",
            "name": "Initiative"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/37",
            "name": "Maximum Security"
          }
          ],
          "returned": 20
        },
        "urls": [
          {
          "type": "detail",
          "url": "http://marvel.com/comics/characters/1009165/avengers?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0"
          },
          {
          "type": "wiki",
          "url": "http://marvel.com/universe/Avengers?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0"
          },
          {
          "type": "comiclink",
          "url": "http://marvel.com/comics/characters/1009165/avengers?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0"
          }
        ]
        },
        {
        "id": 1009220,
        "name": "Captain America",
        "description": "Vowing to serve his country any way he could, young Steve Rogers took the super soldier serum to become America's one-man army. Fighting for the red, white and blue for over 60 years, Captain America is the living, breathing symbol of freedom and liberty.",
        "modified": "2016-09-06T11:37:19-0400",
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/50/537ba56d31087",
          "extension": "jpg"
        },
        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220",
        "comics": {
          "available": 2068,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009220/comics",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/43488",
            "name": "A+X (2012) #1"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/43501",
            "name": "A+X (2012) #4"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/43508",
            "name": "A+X (2012) #9"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/17741",
            "name": "A-Next (1998) #11"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/66978",
            "name": "Adventures of Captain America (1991) #1"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/66979",
            "name": "Adventures of Captain America (1991) #2"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/66980",
            "name": "Adventures of Captain America (1991) #3"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/66981",
            "name": "Adventures of Captain America (1991) #4"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/42539",
            "name": "Age of Apocalypse (2011) #2 (Avengers Art Appreciation Variant)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/30885",
            "name": "Age of Heroes (Trade Paperback)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/30090",
            "name": "Age of Heroes (2010) #1"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/30093",
            "name": "Age of Heroes (2010) #4"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/38524",
            "name": "Age of X: Universe (2011) #1"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/38523",
            "name": "Age of X: Universe (2011) #2"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/56442",
            "name": "All-New Wolverine (2015) #11"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/59597",
            "name": "Avengers (2016) #2.1"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/12555",
            "name": "All-Winners Comics (1941) #1"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/12566",
            "name": "All-Winners Comics (1941) #2"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/12568",
            "name": "All-Winners Comics (1941) #3"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/12569",
            "name": "All-Winners Comics (1941) #4"
          }
          ],
          "returned": 20
        },
        "series": {
          "available": 555,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009220/series",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/16450",
            "name": "A+X (2012 - Present)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/3620",
            "name": "A-Next (1998 - 1999)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/24227",
            "name": "Adventures of Captain America (1991 - 1992)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/15331",
            "name": "Age of Apocalypse (2011 - 2013)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/9790",
            "name": "Age of Heroes (2010)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/10235",
            "name": "Age of Heroes (2011)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/13896",
            "name": "Age of X: Universe (2011)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/20682",
            "name": "All-New Wolverine (2015 - Present)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/2114",
            "name": "All-Winners Comics (1941 - 1947)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/9865",
            "name": "All-Winners Squad: Band of Heroes (2011)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/2116",
            "name": "Alpha Flight (1983 - 1994)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/1983",
            "name": "Alpha Flight Classic Vol. 1 (2007)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/454",
            "name": "Amazing Spider-Man (1999 - 2013)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/15540",
            "name": "Amazing Spider-Man Annual (2012)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/9802",
            "name": "Amazing Spider-Man Annual (2010)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/2984",
            "name": "Amazing Spider-Man Annual (1964 - 2018)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/1489",
            "name": "AMAZING SPIDER-MAN VOL. 10: NEW AVENGERS TPB (2005)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/14818",
            "name": "Annihilators: Earthfall (2011)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/14696",
            "name": "Art of Marvel Movies: The Art of Captain America - The First Avenger (2011 - Present)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/14779",
            "name": "Art of Marvel Studios TPB Slipcase (2011 - Present)"
          }
          ],
          "returned": 20
        },
        "stories": {
          "available": 3072,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009220/stories",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/670",
            "name": "X-MEN (2004) #186",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/892",
            "name": "THOR (1998) #81",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/960",
            "name": "3 of ?",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/1026",
            "name": "Avengers (1998) #81",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/1041",
            "name": "Avengers (1998) #502",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/1042",
            "name": "Avengers (1998) #503",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/1054",
            "name": "Avengers (1998) #72",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/1163",
            "name": "Amazing Spider-Man (1999) #519",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/1165",
            "name": "Amazing Spider-Man (1999) #520",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/1167",
            "name": "Amazing Spider-Man (1999) #521",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/1175",
            "name": "Amazing Spider-Man (1999) #523",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/1193",
            "name": "Amazing Spider-Man (1999) #534",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/1199",
            "name": "Amazing Spider-Man (1999) #537",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/1203",
            "name": "Amazing Spider-Man (1999) #538",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/1606",
            "name": "WEAPON X (2002) #14",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/1649",
            "name": "Avengers (1998) #77",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/1675",
            "name": "Cover #1675",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/1705",
            "name": "Interior #1705",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/1947",
            "name": "Avengers (1998) #78",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/1949",
            "name": "Avengers (1998) #79",
            "type": "cover"
          }
          ],
          "returned": 20
        },
        "events": {
          "available": 29,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009220/events",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/116",
            "name": "Acts of Vengeance!"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/314",
            "name": "Age of Ultron"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/303",
            "name": "Age of X"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/231",
            "name": "Armor Wars"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/234",
            "name": "Avengers Disassembled"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/310",
            "name": "Avengers VS X-Men"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/320",
            "name": "Axis"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/296",
            "name": "Chaos War"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/238",
            "name": "Civil War"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/248",
            "name": "Fall of the Mutants"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/302",
            "name": "Fear Itself"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/251",
            "name": "House of M"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/252",
            "name": "Inferno"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/315",
            "name": "Infinity"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/253",
            "name": "Infinity Gauntlet"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/29",
            "name": "Infinity War"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/317",
            "name": "Inhumanity"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/151",
            "name": "Maximum Carnage"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/37",
            "name": "Maximum Security"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/333",
            "name": "Monsters Unleashed"
          }
          ],
          "returned": 20
        },
        "urls": [
          {
          "type": "detail",
          "url": "http://marvel.com/characters/8/captain_america?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0"
          },
          {
          "type": "wiki",
          "url": "http://marvel.com/universe/Captain_America_(Steve_Rogers)?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0"
          },
          {
          "type": "comiclink",
          "url": "http://marvel.com/comics/characters/1009220/captain_america?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0"
          }
        ]
        },
        {
        "id": 1010771,
        "name": "Excalibur",
        "description": "",
        "modified": "1969-12-31T19:00:00-0500",
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/8/f0/4c00374eb5d5d",
          "extension": "jpg"
        },
        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010771",
        "comics": {
          "available": 172,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010771/comics",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/45879",
            "name": "Avengers Assemble (2012) #15"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/648",
            "name": "Excalibur (2004) #1"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/8562",
            "name": "Excalibur (1988) #1"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/727",
            "name": "Excalibur (2004) #2"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/8599",
            "name": "Excalibur (1988) #2"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/524",
            "name": "Excalibur (2004) #3"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/8610",
            "name": "Excalibur (1988) #3"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/769",
            "name": "Excalibur (2004) #4"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/8621",
            "name": "Excalibur (1988) #4"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/8632",
            "name": "Excalibur (1988) #5"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/840",
            "name": "Excalibur (2004) #5"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/8643",
            "name": "Excalibur (1988) #6"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/924",
            "name": "Excalibur (2004) #6"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/49",
            "name": "Excalibur (2004) #7"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/8654",
            "name": "Excalibur (1988) #7"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/8665",
            "name": "Excalibur (1988) #8"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/1448",
            "name": "Excalibur (2004) #8"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/1539",
            "name": "Excalibur (2004) #9"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/8676",
            "name": "Excalibur (1988) #9"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/8563",
            "name": "Excalibur (1988) #10"
          }
          ],
          "returned": 20
        },
        "series": {
          "available": 23,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010771/series",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/15373",
            "name": "Avengers Assemble (2012 - Present)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/740",
            "name": "Excalibur (2004 - 2005)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/2011",
            "name": "Excalibur (1988 - 1998)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/1596",
            "name": "Excalibur Classic Vol. 1: The Sword Is Drawn (2005)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/1768",
            "name": "Excalibur Classic Vol. 2: Two-Edged Sword (2006)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/1894",
            "name": "Excalibur Classic Vol. 3: Cross-Time Caper Book 1 (2007)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/3098",
            "name": "Excalibur Classic Vol. 4: Cross-Time Caper Book 2 (2007)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/4935",
            "name": "Excalibur Classic Vol. 5 (2008)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/24022",
            "name": "Excalibur Epic Collection: The Cross-Time Caper (2018)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/22411",
            "name": "Excalibur Epic Collection: The Sword Is Drawn (2017)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/1294",
            "name": "Excalibur Vol. 1: Forging the Sword (2004)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/1257",
            "name": "Excalibur Vol. 2: Saturday Night Fever (2005)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/3736",
            "name": "Excalibur: Mojo Mayhem (1989)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/16351",
            "name": "Excalibur: XX Crossing (1992)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/1530",
            "name": "House of M: Excalibur - Prelude (2005)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/2039",
            "name": "Marvel Comics Presents (1988 - 1995)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/935",
            "name": "New Excalibur (2005 - 2007)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/1549",
            "name": "New Excalibur Vol. 1: Defenders of the Realm (2006)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/1897",
            "name": "New Excalibur Vol. 2: Last Days of Camelot (2007)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/3633",
            "name": "X-Force (1991 - 2004)"
          }
          ],
          "returned": 20
        },
        "stories": {
          "available": 256,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010771/stories",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/3240",
            "name": "3 of 3 Food Fight",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/3242",
            "name": "Interior #3242",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/3244",
            "name": "Interior #3244",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/3246",
            "name": "Interior #3246",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/3248",
            "name": "Interior #3248",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/3250",
            "name": "\"FOOD FIGHT\" PART 1 (OF 4) Professor Xavier has now assembled his ragtag team of Magneto and Callisto, with youngsters Wicked, F",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/3252",
            "name": "\"FOOD FIGHT\" PART 2 (OF 3) As Professor Xavier and Magneto cobble together the fragile pieces of the once-proud island nation of",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/3254",
            "name": "1 of 5 - Most Dangerous Game",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/3256",
            "name": "2 of 5 - Most Dangerous Game",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/3258",
            "name": "3 of 5 - Most Dangerous Game",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/3260",
            "name": "1 of 2 - Save the Life of My Child",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/3261",
            "name": "2 of 2 - Save the Life of My Child",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/3262",
            "name": "2 of 2 - Save the Life of My Child",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/3264",
            "name": "1 of 2 - House of M Prelude",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/3266",
            "name": "2 of 2 - House of M Prelude",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/5142",
            "name": "1 of 3 TBA",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/5158",
            "name": "1 of 3",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/5162",
            "name": "3 of 3",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/5164",
            "name": "3 of 3 - The Last Days of Camelot",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/22399",
            "name": "A True & Terrible Sacrifice",
            "type": "interiorStory"
          }
          ],
          "returned": 20
        },
        "events": {
          "available": 5,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010771/events",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/234",
            "name": "Avengers Disassembled"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/249",
            "name": "Fatal Attractions"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/251",
            "name": "House of M"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/252",
            "name": "Inferno"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/154",
            "name": "Onslaught"
          }
          ],
          "returned": 5
        },
        "urls": [
          {
          "type": "detail",
          "url": "http://marvel.com/comics/characters/1010771/excalibur?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0"
          },
          {
          "type": "wiki",
          "url": "http://marvel.com/universe/Excalibur?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0"
          },
          {
          "type": "comiclink",
          "url": "http://marvel.com/comics/characters/1010771/excalibur?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0"
          }
        ]
        },
        {
        "id": 1009299,
        "name": "Fantastic Four",
        "description": "After being exposed to cosmic rays, Reed Richards, Susan Storm, Ben Grimm and Johnny Storm found they had amazing new powers. Reed Richards found he has the ability to stretch his body in any way he wanted, while Susan Storm can turn herself, objects and other people invisible. Ben Grimm transformed into a rocky, super-strong behemoth and Johnny Storm has the ability to set himself on fire. Dubbed the Fantastic Four, Mr. Fantastic, Invisible Woman, Thing and the Human Torch are Marvel's First Family.",
        "modified": "2013-11-15T17:20:03-0500",
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/60/50febc4f55525",
          "extension": "jpg"
        },
        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009299",
        "comics": {
          "available": 1212,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009299/comics",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/356",
            "name": "4 (2004) #1"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/388",
            "name": "4 (2004) #2"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/404",
            "name": "4 (2004) #3"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/471",
            "name": "4 (2004) #4"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/498",
            "name": "4 (2004) #5"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/682",
            "name": "4 (2004) #6"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/1812",
            "name": "4 (2004) #7"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/571",
            "name": "4 (2004) #8"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/556",
            "name": "4 (2004) #9"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/811",
            "name": "4 (2004) #10"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/892",
            "name": "4 (2004) #11"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/52",
            "name": "4 (2004) #12"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/1496",
            "name": "4 (2004) #13"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/1584",
            "name": "4 (2004) #14"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/1670",
            "name": "4 (2004) #15"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/1771",
            "name": "4 (2004) #16"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/1875",
            "name": "4 (2004) #17"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/1977",
            "name": "4 (2004) #18"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/2120",
            "name": "4 (2004) #19"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/2230",
            "name": "4 (2004) #20"
          }
          ],
          "returned": 20
        },
        "series": {
          "available": 284,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009299/series",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/725",
            "name": "4 (2004 - 2006)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/1251",
            "name": "4 Vol. 1: Wolf at the Door (2004)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/1253",
            "name": "4 Vol. 2: The Stuff of Nightmares (2005)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/1423",
            "name": "4 Vol. 3: Divine Time (2005)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/9994",
            "name": "ACTS OF VENGEANCE CROSSOVERS OMNIBUS (2011)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/9995",
            "name": "ACTS OF VENGEANCE CROSSOVERS OMNIBUS (DM Only) (2011)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/7524",
            "name": "Adam: Legend of the Blue Marvel (2008)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/6079",
            "name": "Adam: Legend of the Blue Marvel (2008)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/672",
            "name": "Alias (2001 - 2003)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/13383",
            "name": "Alias Omnibus (2006)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/6666",
            "name": "Amazing Adventures (1970 - 1976)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/454",
            "name": "Amazing Spider-Man (1999 - 2013)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/2984",
            "name": "Amazing Spider-Man Annual (1964 - 2018)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/6056",
            "name": "ANNIHILATION CLASSIC HC (2008)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/744",
            "name": "Astonishing X-Men (2004 - 2013)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/10030",
            "name": "Atlantis Attacks (2011)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/10031",
            "name": "Atlantis Attacks (DM Only) (2011)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/1991",
            "name": "Avengers (1963 - 1996)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/3621",
            "name": "Avengers (1996 - 1997)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/9859",
            "name": "Avengers & the Infinity Gauntlet (2010)"
          }
          ],
          "returned": 20
        },
        "stories": {
          "available": 2040,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009299/stories",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/513",
            "name": "Interior #513",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/563",
            "name": "Interior #563",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/592",
            "name": "Interior #592",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/798",
            "name": "Fantastic Four (1998) #507",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/799",
            "name": "Interior #799",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/800",
            "name": "Fantastic Four (1998) #508",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/801",
            "name": "Interior #801",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/802",
            "name": "Fantastic Four (1998) #509",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/803",
            "name": "Interior #803",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/898",
            "name": "Fantastic Four (1998) #520",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/899",
            "name": "1 of 5 - Galactus",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/912",
            "name": "Fantastic Four (1998) #512",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/913",
            "name": "Interior #913",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/914",
            "name": "Fantastic Four (1998) #516",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/915",
            "name": "Interior #915",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/916",
            "name": "Fantastic Four (1998) #513",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/917",
            "name": "Interior #917",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/918",
            "name": "Fantastic Four (1998) #514",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/919",
            "name": "Interior #919",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/920",
            "name": "Fantastic Four (1998) #517",
            "type": "cover"
          }
          ],
          "returned": 20
        },
        "events": {
          "available": 22,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009299/events",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/116",
            "name": "Acts of Vengeance!"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/233",
            "name": "Atlantis Attacks"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/234",
            "name": "Avengers Disassembled"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/296",
            "name": "Chaos War"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/238",
            "name": "Civil War"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/318",
            "name": "Dark Reign"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/240",
            "name": "Days of Future Present"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/246",
            "name": "Evolutionary War"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/248",
            "name": "Fall of the Mutants"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/302",
            "name": "Fear Itself"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/287",
            "name": "Heroic Age"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/251",
            "name": "House of M"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/252",
            "name": "Inferno"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/29",
            "name": "Infinity War"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/255",
            "name": "Initiative"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/154",
            "name": "Onslaught"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/269",
            "name": "Secret Invasion"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/270",
            "name": "Secret Wars"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/271",
            "name": "Secret Wars II"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/273",
            "name": "Siege"
          }
          ],
          "returned": 20
        },
        "urls": [
          {
          "type": "detail",
          "url": "http://marvel.com/comics/characters/1009299/fantastic_four?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0"
          },
          {
          "type": "wiki",
          "url": "http://marvel.com/universe/Fantastic_Four?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0"
          },
          {
          "type": "comiclink",
          "url": "http://marvel.com/comics/characters/1009299/fantastic_four?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0"
          }
        ]
        },
        {
        "id": 1009539,
        "name": "Franklin Richards",
        "description": "The son of Reed Richards and Susan Storm of the Fantastic Four, Franklin may one day be the most powerful person on Earth. Right now, he's the son of a genius who finds adventure and fun around every corner.",
        "modified": "2014-04-29T14:23:45-0400",
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/f/00/535fedbaaf234",
          "extension": "jpg"
        },
        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009539",
        "comics": {
          "available": 119,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009539/comics",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/39019",
            "name": "Amazing Spider-Man (1999) #658"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/38716",
            "name": "Amazing Spider-Man (1999) #658 (THOR HOLLYWOOD VARIANT)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/39018",
            "name": "Amazing Spider-Man (1999) #659"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/35505",
            "name": "Amazing Spider-Man (1999) #660"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/35533",
            "name": "Amazing Spider-Man (1999) #661"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/39041",
            "name": "Amazing Spider-Man (1999) #661 (X-Men Art Variant)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/8490",
            "name": "Deadpool (1997) #35"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/1049",
            "name": "Doom (Trade Paperback)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/8543",
            "name": "Doom: The Emperor Returns (2001) #1"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/8544",
            "name": "Doom: The Emperor Returns (2001) #2"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/8545",
            "name": "Doom: The Emperor Returns (2001) #3"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/16003",
            "name": "Fantastic Five (2007) #1"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/12849",
            "name": "Fantastic Five (1999) #1"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/16004",
            "name": "Fantastic Five (2007) #2"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/12850",
            "name": "Fantastic Five (1999) #2"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/12851",
            "name": "Fantastic Five (1999) #3"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/16186",
            "name": "Fantastic Five (2007) #3"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/12852",
            "name": "Fantastic Five (1999) #4"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/16187",
            "name": "Fantastic Five (2007) #4"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/16592",
            "name": "Fantastic Five (2007) #5"
          }
          ],
          "returned": 20
        },
        "series": {
          "available": 39,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009539/series",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/454",
            "name": "Amazing Spider-Man (1999 - 2013)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/2005",
            "name": "Deadpool (1997 - 2002)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/109",
            "name": "Doom (1999)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/2008",
            "name": "Doom: The Emperor Returns (2001 - 2002)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/2535",
            "name": "Fantastic Five (2007)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/2119",
            "name": "Fantastic Five (1999 - 2000)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/3281",
            "name": "Fantastic Five: The Final Doom (2007)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/2121",
            "name": "Fantastic Four (1961 - 1998)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/421",
            "name": "Fantastic Four (1998 - 2012)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/971",
            "name": "Fantastic Four Presents Franklin Richards (2005)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/341",
            "name": "FANTASTIC FOUR VISIONARIES: JOHN BYRNE VOL. 2 TPB (2004)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/1424",
            "name": "Fantastic Four Visionaries: John Byrne Vol. 3 (2004)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/2254",
            "name": "FANTASTIC FOUR VISIONARIES: WALTER SIMONSON VOL. 1 TPB (2007)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/1265",
            "name": "Fantastic Four Vol. 1 (2004)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/1266",
            "name": "Fantastic Four Vol. 2 (2005)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/1659",
            "name": "Fantastic Four Vol. 3 (2005)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/16346",
            "name": "Fantastic Four vs. the X-Men (1987)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/13440",
            "name": "FF (2010 - 2012)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/14307",
            "name": "Ff by Jonathan Hickman (2011 - Present)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/1041",
            "name": "Franklin Richards: Everybody Loves Franklin (2006)"
          }
          ],
          "returned": 20
        },
        "stories": {
          "available": 171,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009539/stories",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/508",
            "name": "Interior #508",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/802",
            "name": "Fantastic Four (1998) #509",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/803",
            "name": "Interior #803",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/912",
            "name": "Fantastic Four (1998) #512",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/913",
            "name": "Interior #913",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/918",
            "name": "Fantastic Four (1998) #514",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/919",
            "name": "Interior #919",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/920",
            "name": "Fantastic Four (1998) #517",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/921",
            "name": "Interior #921",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/922",
            "name": "Fantastic Four (1998) #518",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/923",
            "name": "AVENGERS DISASSEMBLED TIE-IN! \"FOURTITUDE\" PART 2 (OF 3) With public opinion of the FF at an all-time low and with all of Manhat",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/1850",
            "name": "Fantastic Four (1998) #505",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/1851",
            "name": "Interior #1851",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/2793",
            "name": "Fantastic Four (1998) #510",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/2794",
            "name": "Interior #2794",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/5471",
            "name": "Interior #5471",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/5788",
            "name": "Cover #5788",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/5789",
            "name": "Interior #5789",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/5980",
            "name": "Cover #5980",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/5982",
            "name": "1 of 5 - 5XLS",
            "type": "cover"
          }
          ],
          "returned": 20
        },
        "events": {
          "available": 7,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009539/events",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/116",
            "name": "Acts of Vengeance!"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/234",
            "name": "Avengers Disassembled"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/240",
            "name": "Days of Future Present"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/246",
            "name": "Evolutionary War"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/287",
            "name": "Heroic Age"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/154",
            "name": "Onslaught"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/269",
            "name": "Secret Invasion"
          }
          ],
          "returned": 7
        },
        "urls": [
          {
          "type": "detail",
          "url": "http://marvel.com/characters/2705/franklin_richards?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0"
          },
          {
          "type": "wiki",
          "url": "http://marvel.com/universe/Richards%2C_Franklin?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0"
          },
          {
          "type": "comiclink",
          "url": "http://marvel.com/comics/characters/1009539/franklin_richards?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0"
          }
        ]
        },
        {
        "id": 1009312,
        "name": "Galactus",
        "description": "",
        "modified": "2013-11-20T17:05:49-0500",
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/5/03/528d31a791308",
          "extension": "jpg"
        },
        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009312",
        "comics": {
          "available": 182,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009312/comics",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/12638",
            "name": "Alpha Flight (1983) #10"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/12639",
            "name": "Alpha Flight (1983) #100"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/4788",
            "name": "Annihilation (2006) #1"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/5655",
            "name": "Annihilation (2006) #5"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/5795",
            "name": "Annihilation (2006) #6"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/4218",
            "name": "Annihilation: Silver Surfer (2006) #2"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/4315",
            "name": "Annihilation: Silver Surfer (2006) #3"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/4470",
            "name": "Annihilation: Silver Surfer (2006) #4"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/66602",
            "name": "Annihilation: The Complete Collection Vol. 1 (Trade Paperback)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/29207",
            "name": "Avengers (2010) #4"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/34139",
            "name": "Avengers (2010) #5"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/17754",
            "name": "Avengers (1996) #12"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/7131",
            "name": "Avengers (1963) #260"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/7132",
            "name": "Avengers (1963) #261"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/12402",
            "name": "Avengers Forever (1998) #10"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/1033",
            "name": "Avengers Legends Vol. I: Avengers Forever (Trade Paperback)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/57674",
            "name": "Damage Control (1991) #3"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/57675",
            "name": "Damage Control (1991) #4"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/8373",
            "name": "Daredevil (1964) #37"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/35992",
            "name": "Deadpool Team-Up (2009) #883"
          }
          ],
          "returned": 20
        },
        "series": {
          "available": 79,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009312/series",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/2116",
            "name": "Alpha Flight (1983 - 1994)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/3613",
            "name": "Annihilation (2006 - 2007)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/1078",
            "name": "Annihilation: Silver Surfer (2006)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/24256",
            "name": "Annihilation: The Complete Collection Vol. 1 (2018)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/1991",
            "name": "Avengers (1963 - 1996)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/9085",
            "name": "Avengers (2010 - 2012)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/3621",
            "name": "Avengers (1996 - 1997)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/2111",
            "name": "Avengers Forever (1998 - 2001)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/93",
            "name": "Avengers Legends Vol. I: Avengers Forever (2002)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/21004",
            "name": "Damage Control (1991)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/2002",
            "name": "Daredevil (1964 - 1998)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/11518",
            "name": "Deadpool Team-Up (2010 - 2011)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/9045",
            "name": "Deadpool Team-Up (2009 - 2011)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/12988",
            "name": "Deadpool Team-Up Vol. 3 (2010 - Present)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/3741",
            "name": "Doctor Strange, Sorcerer Supreme (1988 - 1996)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/378",
            "name": "Earth X (1999)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/1806",
            "name": "Earth X (New (2006)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/1263",
            "name": "Essential Fantastic Four Vol. 4 (2005)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/2444",
            "name": "Essential Silver Surfer Vol. 2 (2007)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/479",
            "name": "Exiles (2001 - 2008)"
          }
          ],
          "returned": 20
        },
        "stories": {
          "available": 196,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009312/stories",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/694",
            "name": "Cover #694",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/898",
            "name": "Fantastic Four (1998) #520",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/899",
            "name": "1 of 5 - Galactus",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/922",
            "name": "Fantastic Four (1998) #518",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/923",
            "name": "AVENGERS DISASSEMBLED TIE-IN! \"FOURTITUDE\" PART 2 (OF 3) With public opinion of the FF at an all-time low and with all of Manhat",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/924",
            "name": "Fantastic Four (1998) #519",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/925",
            "name": "AVENGERS DISASSEMBLED TIE-IN! \"FOURTITUDE\" FINALE! PART 3 (OF 3) Galactus the World-Eater is coming to Earth to choose one of th",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/1412",
            "name": "Cover #1412",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/1842",
            "name": "Cover #1842",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/2253",
            "name": "Cover #2253",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/2442",
            "name": "Cover #2442",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/2446",
            "name": "Cover #2446",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/5286",
            "name": "1 of 1 - Thor",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/5635",
            "name": "Marvel Zombies (2005) #3",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/5636",
            "name": "3 of 5 xLS",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/5637",
            "name": "Marvel Zombies (2005) #4",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/5638",
            "name": "4 of 5 xLS",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/5639",
            "name": "Marvel Zombies (2005) #5",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/5640",
            "name": "5 of 5 xLS",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/5927",
            "name": "Annihilation: Silver Surfer (2006) #2",
            "type": "cover"
          }
          ],
          "returned": 20
        },
        "events": {
          "available": 9,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009312/events",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/229",
            "name": "Annihilation"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/234",
            "name": "Avengers Disassembled"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/302",
            "name": "Fear Itself"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/253",
            "name": "Infinity Gauntlet"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/29",
            "name": "Infinity War"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/255",
            "name": "Initiative"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/336",
            "name": "Secret Empire"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/270",
            "name": "Secret Wars"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/271",
            "name": "Secret Wars II"
          }
          ],
          "returned": 9
        },
        "urls": [
          {
          "type": "detail",
          "url": "http://marvel.com/comics/characters/1009312/galactus?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0"
          },
          {
          "type": "wiki",
          "url": "http://marvel.com/universe/Galactus?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0"
          },
          {
          "type": "comiclink",
          "url": "http://marvel.com/comics/characters/1009312/galactus?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0"
          }
        ]
        },
        {
        "id": 1009338,
        "name": "Hawkeye",
        "description": "",
        "modified": "2013-01-22T14:01:53-0500",
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/e/90/50fecaf4f101b",
          "extension": "jpg"
        },
        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009338",
        "comics": {
          "available": 509,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009338/comics",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/43498",
            "name": "A+X (2012) #3"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/43507",
            "name": "A+X (2012) #8"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/51256",
            "name": "All-New Hawkeye (2015) #1"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/35513",
            "name": "Amazing Spider-Man (1999) #666"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/35528",
            "name": "Amazing Spider-Man (1999) #667"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/35532",
            "name": "Amazing Spider-Man (1999) #668"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/35522",
            "name": "Amazing Spider-Man (1999) #670"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/39981",
            "name": "Annihilators: Earthfall (2011) #2"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/29195",
            "name": "Avengers (2010) #1"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/33562",
            "name": "Avengers (2010) #1 (ROMITA SR. VARIANT)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/33572",
            "name": "Avengers (2010) #1 (I AM AN AVENGER BLANK COVER VARIANT)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/33335",
            "name": "Avengers (2010) #1 (HEROIC AGE VARIANT)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/33336",
            "name": "Avengers (2010) #1 (ROMITA JR. VARIANT)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/33483",
            "name": "Avengers (2010) #1 (DJURDJEVIC VARIANT)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/29205",
            "name": "Avengers (2010) #2"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/29206",
            "name": "Avengers (2010) #3"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/34142",
            "name": "Avengers (2010) #3 (ROMITA JR. VARIANT)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/62682",
            "name": "Avengers (2016) #3.1"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/29207",
            "name": "Avengers (2010) #4"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/34139",
            "name": "Avengers (2010) #5"
          }
          ],
          "returned": 20
        },
        "series": {
          "available": 176,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009338/series",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/16450",
            "name": "A+X (2012 - Present)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/17318",
            "name": "Age of Ultron (2013)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/19255",
            "name": "All-New Hawkeye (2015)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/454",
            "name": "Amazing Spider-Man (1999 - 2013)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/14818",
            "name": "Annihilators: Earthfall (2011)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/3621",
            "name": "Avengers (1996 - 1997)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/9085",
            "name": "Avengers (2010 - 2012)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/1991",
            "name": "Avengers (1963 - 1996)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/354",
            "name": "Avengers (1998 - 2004)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/22547",
            "name": "Avengers (2016 - 2018)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/9086",
            "name": "Avengers Academy (2010 - 2012)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/1988",
            "name": "Avengers Annual (1967 - 1994)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/13320",
            "name": "Avengers Annual (2012)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/1340",
            "name": "Avengers Assemble (2004)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/15373",
            "name": "Avengers Assemble (2012 - Present)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/1816",
            "name": "Avengers Assemble Vol. 4 (2007)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/2384",
            "name": "Avengers Classic (2007 - 2008)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/2111",
            "name": "Avengers Forever (1998 - 2001)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/157",
            "name": "Avengers Legends Vol. 2: The Korvac Saga (2003)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/93",
            "name": "Avengers Legends Vol. I: Avengers Forever (2002)"
          }
          ],
          "returned": 20
        },
        "stories": {
          "available": 522,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009338/stories",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/1024",
            "name": "Avengers (1998) #80",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/1026",
            "name": "Avengers (1998) #81",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/1040",
            "name": "Avengers (1998) #502",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/1649",
            "name": "Avengers (1998) #77",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/1947",
            "name": "Avengers (1998) #78",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/1949",
            "name": "Avengers (1998) #79",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/2128",
            "name": "Hawkeye (2003) #1",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/2130",
            "name": "Hawkeye (2003) #2",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/2326",
            "name": "Avengers (1998) #74",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/2351",
            "name": "1 of 1 - House of M Tie-In",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/2357",
            "name": "1 of 1 - House of M Tie-In",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/2430",
            "name": "Hawkeye (2003) #3",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/2432",
            "name": "Hawkeye (2003) #4",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/2434",
            "name": "Hawkeye (2003) #5",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/2458",
            "name": "Hawkeye (2003) #6",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/2460",
            "name": "Hawkeye (2003) #7",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/2462",
            "name": "Hawkeye (2003) #8",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/2723",
            "name": "ULTIMATES 2 (2004) #1",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/2729",
            "name": "ULTIMATES 2 (2004) #4",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/3467",
            "name": "2 of 3 - Ronin",
            "type": "cover"
          }
          ],
          "returned": 20
        },
        "events": {
          "available": 18,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009338/events",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/314",
            "name": "Age of Ultron"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/231",
            "name": "Armor Wars"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/234",
            "name": "Avengers Disassembled"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/310",
            "name": "Avengers VS X-Men"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/296",
            "name": "Chaos War"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/239",
            "name": "Crossing"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/318",
            "name": "Dark Reign"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/246",
            "name": "Evolutionary War"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/302",
            "name": "Fear Itself"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/251",
            "name": "House of M"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/315",
            "name": "Infinity"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/37",
            "name": "Maximum Security"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/154",
            "name": "Onslaught"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/336",
            "name": "Secret Empire"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/270",
            "name": "Secret Wars"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/309",
            "name": "Shattered Heroes"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/273",
            "name": "Siege"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/305",
            "name": "Spider-Island"
          }
          ],
          "returned": 18
        },
        "urls": [
          {
          "type": "detail",
          "url": "http://marvel.com/comics/characters/1009338/hawkeye?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0"
          },
          {
          "type": "wiki",
          "url": "http://marvel.com/universe/Hawkeye_(Clint_Barton)?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0"
          },
          {
          "type": "comiclink",
          "url": "http://marvel.com/comics/characters/1009338/hawkeye?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0"
          }
        ]
        },
        {
        "id": 1009356,
        "name": "Human Torch",
        "description": "",
        "modified": "2013-10-18T17:31:30-0400",
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/70/5261a7f7b0917",
          "extension": "jpg"
        },
        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009356",
        "comics": {
          "available": 1152,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009356/comics",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/388",
            "name": "4 (2004) #2"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/404",
            "name": "4 (2004) #3"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/471",
            "name": "4 (2004) #4"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/498",
            "name": "4 (2004) #5"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/1812",
            "name": "4 (2004) #7"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/571",
            "name": "4 (2004) #8"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/556",
            "name": "4 (2004) #9"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/811",
            "name": "4 (2004) #10"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/892",
            "name": "4 (2004) #11"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/52",
            "name": "4 (2004) #12"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/2230",
            "name": "4 (2004) #20"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/1328",
            "name": "4 Vol. 1: Wolf at the Door (Trade Paperback)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/1550",
            "name": "4 Vol. 2: The Stuff of Nightmares (Trade Paperback)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/24348",
            "name": "Adam: Legend of the Blue Marvel (Trade Paperback)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/22856",
            "name": "Adam: Legend of the Blue Marvel (2008) #2"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/37262",
            "name": "Alias (2001) #15"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/37255",
            "name": "Alias Omnibus (Hardcover)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/12555",
            "name": "All-Winners Comics (1941) #1"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/12566",
            "name": "All-Winners Comics (1941) #2"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/12568",
            "name": "All-Winners Comics (1941) #3"
          }
          ],
          "returned": 20
        },
        "series": {
          "available": 274,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009356/series",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/725",
            "name": "4 (2004 - 2006)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/1251",
            "name": "4 Vol. 1: Wolf at the Door (2004)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/1253",
            "name": "4 Vol. 2: The Stuff of Nightmares (2005)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/6079",
            "name": "Adam: Legend of the Blue Marvel (2008)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/7524",
            "name": "Adam: Legend of the Blue Marvel (2008)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/672",
            "name": "Alias (2001 - 2003)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/13383",
            "name": "Alias Omnibus (2006)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/2114",
            "name": "All-Winners Comics (1941 - 1947)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/9865",
            "name": "All-Winners Squad: Band of Heroes (2011)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/2116",
            "name": "Alpha Flight (1983 - 1994)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/454",
            "name": "Amazing Spider-Man (1999 - 2013)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/2984",
            "name": "Amazing Spider-Man Annual (1964 - 2018)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/1967",
            "name": "AMAZING SPIDER-MAN OMNIBUS VOL. 1 HC (2007)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/354",
            "name": "Avengers (1998 - 2004)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/3621",
            "name": "Avengers (1996 - 1997)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/1991",
            "name": "Avengers (1963 - 1996)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/1340",
            "name": "Avengers Assemble (2004)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/1496",
            "name": "Avengers Assemble Vol. 2 (2005)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/1737",
            "name": "Avengers Assemble Vol. 3 (2006)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/1816",
            "name": "Avengers Assemble Vol. 4 (2007)"
          }
          ],
          "returned": 20
        },
        "stories": {
          "available": 1746,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009356/stories",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/701",
            "name": "Interior #701",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/798",
            "name": "Fantastic Four (1998) #507",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/799",
            "name": "Interior #799",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/800",
            "name": "Fantastic Four (1998) #508",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/801",
            "name": "Interior #801",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/802",
            "name": "Fantastic Four (1998) #509",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/803",
            "name": "Interior #803",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/898",
            "name": "Fantastic Four (1998) #520",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/899",
            "name": "1 of 5 - Galactus",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/912",
            "name": "Fantastic Four (1998) #512",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/913",
            "name": "Interior #913",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/914",
            "name": "Fantastic Four (1998) #516",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/915",
            "name": "Interior #915",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/916",
            "name": "Fantastic Four (1998) #513",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/917",
            "name": "Interior #917",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/918",
            "name": "Fantastic Four (1998) #514",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/919",
            "name": "Interior #919",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/920",
            "name": "Fantastic Four (1998) #517",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/921",
            "name": "Interior #921",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/922",
            "name": "Fantastic Four (1998) #518",
            "type": "cover"
          }
          ],
          "returned": 20
        },
        "events": {
          "available": 20,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009356/events",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/116",
            "name": "Acts of Vengeance!"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/233",
            "name": "Atlantis Attacks"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/234",
            "name": "Avengers Disassembled"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/296",
            "name": "Chaos War"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/238",
            "name": "Civil War"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/318",
            "name": "Dark Reign"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/240",
            "name": "Days of Future Present"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/248",
            "name": "Fall of the Mutants"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/251",
            "name": "House of M"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/252",
            "name": "Inferno"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/253",
            "name": "Infinity Gauntlet"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/29",
            "name": "Infinity War"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/255",
            "name": "Initiative"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/37",
            "name": "Maximum Security"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/154",
            "name": "Onslaught"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/336",
            "name": "Secret Empire"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/269",
            "name": "Secret Invasion"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/270",
            "name": "Secret Wars"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/271",
            "name": "Secret Wars II"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/277",
            "name": "World War Hulk"
          }
          ],
          "returned": 20
        },
        "urls": [
          {
          "type": "detail",
          "url": "http://marvel.com/characters/26/human_torch?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0"
          },
          {
          "type": "wiki",
          "url": "http://marvel.com/universe/Human_Torch_%28Johnny_Storm%29?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0"
          },
          {
          "type": "comiclink",
          "url": "http://marvel.com/comics/characters/1009356/human_torch?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0"
          }
        ]
        },
        {
        "id": 1009359,
        "name": "Hydra",
        "description": "",
        "modified": "1969-12-31T19:00:00-0500",
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/8/40/4c003ec4331bd",
          "extension": "jpg"
        },
        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009359",
        "comics": {
          "available": 137,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009359/comics",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/60151",
            "name": "A Year of Marvels (Trade Paperback)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/43473",
            "name": "All-New X-Men (2012) #8"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/2069",
            "name": "Amazing Spider-Man (1999) #521"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/2212",
            "name": "Amazing Spider-Man (1999) #522"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/2980",
            "name": "Amazing Spider-Man (1999) #523"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/2451",
            "name": "Amazing Spider-Man (1999) #524"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/3019",
            "name": "AMAZING SPIDER-MAN VOL. 10: NEW AVENGERS TPB (Trade Paperback)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/60158",
            "name": "Amazing Spider-Man: Worldwide Vol. 7 (Trade Paperback)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/32477",
            "name": "Avengers & the Infinity Gauntlet (2010) #1"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/32993",
            "name": "Avengers & the Infinity Gauntlet (Graphic Novel)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/12778",
            "name": "Captain America (1998) #2"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/12789",
            "name": "Captain America (1998) #3"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/12800",
            "name": "Captain America (1998) #4"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/12811",
            "name": "Captain America (1998) #5"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/595",
            "name": "Captain America (2002) #29"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/7528",
            "name": "Captain America (1968) #147"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/64178",
            "name": "Captain America (2017) #25"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/65466",
            "name": "Captain America by Mark Waid, Ron Garney & Andy Kubert (Hardcover)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/36575",
            "name": "Captain America: Hail Hydra (Trade Paperback)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/36229",
            "name": "Captain America: Hail Hydra (2010) #1"
          }
          ],
          "returned": 20
        },
        "series": {
          "available": 71,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009359/series",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/22102",
            "name": "A Year of Marvels (2017)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/16449",
            "name": "All-New X-Men (2012 - Present)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/454",
            "name": "Amazing Spider-Man (1999 - 2013)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/1489",
            "name": "AMAZING SPIDER-MAN VOL. 10: NEW AVENGERS TPB (2005)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/22109",
            "name": "Amazing Spider-Man: Worldwide Vol. 7 (2018)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/9859",
            "name": "Avengers & the Infinity Gauntlet (2010)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/10035",
            "name": "Avengers & the Infinity Gauntlet (2011)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/485",
            "name": "Captain America (2002 - 2004)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/23277",
            "name": "Captain America (2017 - 2018)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/1996",
            "name": "Captain America (1968 - 1996)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/1997",
            "name": "Captain America (1998 - 2002)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/23810",
            "name": "Captain America by Mark Waid, Ron Garney & Andy Kubert (2017)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/12115",
            "name": "Captain America: Hail Hydra (2010 - 2011)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/12965",
            "name": "Captain America: Hail Hydra (2010 - Present)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/23524",
            "name": "Captain America: Secret Empire (2017)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/21098",
            "name": "Captain America: Steve Rogers (2016 - Present)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/21100",
            "name": "Captain America: Steve Rogers Vol. 2 - The Trial of Maria Hill (2017)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/22750",
            "name": "Captain America: Steve Rogers Vol. 3 - Empire Building (2017)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/2002",
            "name": "Daredevil (1964 - 1998)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/20613",
            "name": "Deadpool (2015 - 2017)"
          }
          ],
          "returned": 20
        },
        "stories": {
          "available": 134,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009359/stories",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/1167",
            "name": "Amazing Spider-Man (1999) #521",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/1168",
            "name": "3 of 5 - New Avengers",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/1169",
            "name": "Amazing Spider-Man (1999) #522",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/1170",
            "name": "4 of 5 - New Avengers",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/1172",
            "name": "6 of 6 - New Avengers",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/1175",
            "name": "Amazing Spider-Man (1999) #523",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/1176",
            "name": "5 of 6 - New Avengers",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/1675",
            "name": "Cover #1675",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/5498",
            "name": "Irredeemable Ant-Man (2006) #2",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/6250",
            "name": "Immortal Iron Fist (2006) #1",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/6252",
            "name": "Immortal Iron Fist (2006) #2",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/6254",
            "name": "Immortal Iron Fist (2006) #3",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/7916",
            "name": "Immortal Iron Fist (2006) #4",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/8367",
            "name": "Immortal Iron Fist (2006) #5",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/8701",
            "name": "Immortal Iron Fist (2006) #6",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/10221",
            "name": "Cover #10221",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/10222",
            "name": "Sometimes the Good Guys Lose!",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/10225",
            "name": "The Brave Die Hard!",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/10234",
            "name": "Cover #10234",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/10235",
            "name": "The End of Hydra!",
            "type": "interiorStory"
          }
          ],
          "returned": 20
        },
        "events": {
          "available": 3,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009359/events",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/234",
            "name": "Avengers Disassembled"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/318",
            "name": "Dark Reign"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/336",
            "name": "Secret Empire"
          }
          ],
          "returned": 3
        },
        "urls": [
          {
          "type": "detail",
          "url": "http://marvel.com/characters/1003/hydra?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0"
          },
          {
          "type": "wiki",
          "url": "http://marvel.com/universe/Hydra?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0"
          },
          {
          "type": "comiclink",
          "url": "http://marvel.com/comics/characters/1009359/hydra?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0"
          }
        ]
        },
        {
        "id": 1009366,
        "name": "Invisible Woman",
        "description": "",
        "modified": "2013-10-24T13:48:00-0400",
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/a0/52695b9cd40b6",
          "extension": "jpg"
        },
        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009366",
        "comics": {
          "available": 694,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009366/comics",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/356",
            "name": "4 (2004) #1"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/388",
            "name": "4 (2004) #2"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/404",
            "name": "4 (2004) #3"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/471",
            "name": "4 (2004) #4"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/498",
            "name": "4 (2004) #5"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/682",
            "name": "4 (2004) #6"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/1812",
            "name": "4 (2004) #7"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/571",
            "name": "4 (2004) #8"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/556",
            "name": "4 (2004) #9"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/811",
            "name": "4 (2004) #10"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/892",
            "name": "4 (2004) #11"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/52",
            "name": "4 (2004) #12"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/2120",
            "name": "4 (2004) #19"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/2230",
            "name": "4 (2004) #20"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/1328",
            "name": "4 Vol. 1: Wolf at the Door (Trade Paperback)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/1550",
            "name": "4 Vol. 2: The Stuff of Nightmares (Trade Paperback)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/24348",
            "name": "Adam: Legend of the Blue Marvel (Trade Paperback)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/22856",
            "name": "Adam: Legend of the Blue Marvel (2008) #2"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/38524",
            "name": "Age of X: Universe (2011) #1"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/38523",
            "name": "Age of X: Universe (2011) #2"
          }
          ],
          "returned": 20
        },
        "series": {
          "available": 173,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009366/series",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/725",
            "name": "4 (2004 - 2006)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/1251",
            "name": "4 Vol. 1: Wolf at the Door (2004)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/1253",
            "name": "4 Vol. 2: The Stuff of Nightmares (2005)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/6079",
            "name": "Adam: Legend of the Blue Marvel (2008)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/7524",
            "name": "Adam: Legend of the Blue Marvel (2008)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/13896",
            "name": "Age of X: Universe (2011)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/2116",
            "name": "Alpha Flight (1983 - 1994)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/1983",
            "name": "Alpha Flight Classic Vol. 1 (2007)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/454",
            "name": "Amazing Spider-Man (1999 - 2013)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/10030",
            "name": "Atlantis Attacks (2011)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/10031",
            "name": "Atlantis Attacks (DM Only) (2011)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/1991",
            "name": "Avengers (1963 - 1996)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/354",
            "name": "Avengers (1998 - 2004)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/1340",
            "name": "Avengers Assemble (2004)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/1496",
            "name": "Avengers Assemble Vol. 2 (2005)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/1816",
            "name": "Avengers Assemble Vol. 4 (2007)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/1503",
            "name": "Best of the Fantastic Four Vol. 1 (2005)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/2115",
            "name": "Black Panther (1998 - 2003)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/784",
            "name": "Black Panther (2005 - 2008)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/2226",
            "name": "Black Panther: Civil War (2007)"
          }
          ],
          "returned": 20
        },
        "stories": {
          "available": 905,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009366/stories",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/798",
            "name": "Fantastic Four (1998) #507",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/799",
            "name": "Interior #799",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/800",
            "name": "Fantastic Four (1998) #508",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/801",
            "name": "Interior #801",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/802",
            "name": "Fantastic Four (1998) #509",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/803",
            "name": "Interior #803",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/898",
            "name": "Fantastic Four (1998) #520",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/899",
            "name": "1 of 5 - Galactus",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/912",
            "name": "Fantastic Four (1998) #512",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/913",
            "name": "Interior #913",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/914",
            "name": "Fantastic Four (1998) #516",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/915",
            "name": "Interior #915",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/916",
            "name": "Fantastic Four (1998) #513",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/917",
            "name": "Interior #917",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/918",
            "name": "Fantastic Four (1998) #514",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/919",
            "name": "Interior #919",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/920",
            "name": "Fantastic Four (1998) #517",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/921",
            "name": "Interior #921",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/922",
            "name": "Fantastic Four (1998) #518",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/923",
            "name": "AVENGERS DISASSEMBLED TIE-IN! \"FOURTITUDE\" PART 2 (OF 3) With public opinion of the FF at an all-time low and with all of Manhat",
            "type": "interiorStory"
          }
          ],
          "returned": 20
        },
        "events": {
          "available": 21,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009366/events",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/116",
            "name": "Acts of Vengeance!"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/303",
            "name": "Age of X"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/233",
            "name": "Atlantis Attacks"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/234",
            "name": "Avengers Disassembled"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/296",
            "name": "Chaos War"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/238",
            "name": "Civil War"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/318",
            "name": "Dark Reign"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/240",
            "name": "Days of Future Present"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/287",
            "name": "Heroic Age"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/252",
            "name": "Inferno"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/29",
            "name": "Infinity War"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/255",
            "name": "Initiative"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/37",
            "name": "Maximum Security"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/154",
            "name": "Onslaught"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/269",
            "name": "Secret Invasion"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/270",
            "name": "Secret Wars"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/271",
            "name": "Secret Wars II"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/309",
            "name": "Shattered Heroes"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/273",
            "name": "Siege"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/305",
            "name": "Spider-Island"
          }
          ],
          "returned": 20
        },
        "urls": [
          {
          "type": "detail",
          "url": "http://marvel.com/comics/characters/1009366/invisible_woman?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0"
          },
          {
          "type": "wiki",
          "url": "http://marvel.com/universe/Invisible_Woman?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0"
          },
          {
          "type": "comiclink",
          "url": "http://marvel.com/comics/characters/1009366/invisible_woman?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0"
          }
        ]
        },
        {
        "id": 1009368,
        "name": "Iron Man",
        "description": "Wounded, captured and forced to build a weapon by his enemies, billionaire industrialist Tony Stark instead created an advanced suit of armor to save his life and escape captivity. Now with a new outlook on life, Tony uses his money and intelligence to make the world a safer, better place as Iron Man.",
        "modified": "2016-09-28T12:08:19-0400",
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/c0/527bb7b37ff55",
          "extension": "jpg"
        },
        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009368",
        "comics": {
          "available": 2409,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009368/comics",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/43495",
            "name": "A+X (2012) #2"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/43506",
            "name": "A+X (2012) #7"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/24348",
            "name": "Adam: Legend of the Blue Marvel (Trade Paperback)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/22461",
            "name": "Adam: Legend of the Blue Marvel (2008) #1"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/22856",
            "name": "Adam: Legend of the Blue Marvel (2008) #2"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/23733",
            "name": "Adam: Legend of the Blue Marvel (2008) #5"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/30090",
            "name": "Age of Heroes (2010) #1"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/38524",
            "name": "Age of X: Universe (2011) #1"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/38523",
            "name": "Age of X: Universe (2011) #2"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/21280",
            "name": "All-New Iron Manual (2008) #1"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/55363",
            "name": "All-New, All-Different Avengers (2015) #10"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/55364",
            "name": "All-New, All-Different Avengers (2015) #11"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/12653",
            "name": "Alpha Flight (1983) #113"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/12668",
            "name": "Alpha Flight (1983) #127"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/55311",
            "name": "The Amazing Spider-Man (2015) #13"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/55312",
            "name": "The Amazing Spider-Man (2015) #14"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/55313",
            "name": "The Amazing Spider-Man (2015) #15"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/43170",
            "name": "Amazing Spider-Man (1999) #57"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/43171",
            "name": "Amazing Spider-Man (1999) #58"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/6743",
            "name": "The Amazing Spider-Man (1963) #334"
          }
          ],
          "returned": 20
        },
        "series": {
          "available": 584,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009368/series",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/16450",
            "name": "A+X (2012 - Present)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/7524",
            "name": "Adam: Legend of the Blue Marvel (2008)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/6079",
            "name": "Adam: Legend of the Blue Marvel (2008)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/9790",
            "name": "Age of Heroes (2010)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/13896",
            "name": "Age of X: Universe (2011)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/4897",
            "name": "All-New Iron Manual (2008)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/20443",
            "name": "All-New, All-Different Avengers (2015 - Present)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/2116",
            "name": "Alpha Flight (1983 - 1994)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/454",
            "name": "Amazing Spider-Man (1999 - 2013)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/15540",
            "name": "Amazing Spider-Man Annual (2012)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/2984",
            "name": "Amazing Spider-Man Annual (1964 - 2018)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/1489",
            "name": "AMAZING SPIDER-MAN VOL. 10: NEW AVENGERS TPB (2005)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/318",
            "name": "Amazing Spider-Man Vol. 6 (2004)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/23446",
            "name": "Amazing Spider-Man: Worldwide Vol. 2 (2017)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/6056",
            "name": "ANNIHILATION CLASSIC HC (2008)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/14818",
            "name": "Annihilators: Earthfall (2011)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/14779",
            "name": "Art of Marvel Studios TPB Slipcase (2011 - Present)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/9792",
            "name": "Astonishing Spider-Man/Wolverine (2010 - 2011)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/6792",
            "name": "Astonishing Tales (2009)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/6697",
            "name": "Astonishing Tales: Iron Man 2020 Digital Comic (2009)"
          }
          ],
          "returned": 20
        },
        "stories": {
          "available": 3556,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009368/stories",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/670",
            "name": "X-MEN (2004) #186",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/892",
            "name": "THOR (1998) #81",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/960",
            "name": "3 of ?",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/982",
            "name": "Interior #982",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/984",
            "name": "Interior #984",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/986",
            "name": "Interior #986",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/988",
            "name": "Interior #988",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/990",
            "name": "Interior #990",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/992",
            "name": "Interior #992",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/994",
            "name": "Interior #994",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/996",
            "name": "Interior #996",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/998",
            "name": "Interior #998",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/1000",
            "name": "Interior #1000",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/1002",
            "name": "AVENGERS DISASSEMBLED TIE-IN! Still reeling from recent traumas, Iron Man must face off against his evil doppelganger. Meanwhile",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/1004",
            "name": "\"THE SINGULARITY\" CONCLUSION! PART 4 (OF 4) The battle rages on between Iron Man and his doppelganger, but only one of them can ",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/1018",
            "name": "Amazing Spider-Man (1999) #500",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/1024",
            "name": "Avengers (1998) #80",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/1026",
            "name": "Avengers (1998) #81",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/1041",
            "name": "Avengers (1998) #502",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/1051",
            "name": "Interior #1051",
            "type": "interiorStory"
          }
          ],
          "returned": 20
        },
        "events": {
          "available": 29,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009368/events",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/116",
            "name": "Acts of Vengeance!"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/303",
            "name": "Age of X"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/231",
            "name": "Armor Wars"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/233",
            "name": "Atlantis Attacks"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/234",
            "name": "Avengers Disassembled"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/310",
            "name": "Avengers VS X-Men"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/296",
            "name": "Chaos War"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/238",
            "name": "Civil War"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/239",
            "name": "Crossing"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/318",
            "name": "Dark Reign"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/245",
            "name": "Enemy of the State"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/249",
            "name": "Fatal Attractions"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/302",
            "name": "Fear Itself"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/251",
            "name": "House of M"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/315",
            "name": "Infinity"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/29",
            "name": "Infinity War"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/317",
            "name": "Inhumanity"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/255",
            "name": "Initiative"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/37",
            "name": "Maximum Security"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/154",
            "name": "Onslaught"
          }
          ],
          "returned": 20
        },
        "urls": [
          {
          "type": "detail",
          "url": "http://marvel.com/comics/characters/1009368/iron_man?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0"
          },
          {
          "type": "wiki",
          "url": "http://marvel.com/universe/Iron_Man_(Anthony_Stark)?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0"
          },
          {
          "type": "comiclink",
          "url": "http://marvel.com/comics/characters/1009368/iron_man?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0"
          }
        ]
        },
        {
        "id": 1009459,
        "name": "Mr. Fantastic",
        "description": "",
        "modified": "2013-02-06T11:03:34-0500",
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/d/c0/51127e9337538",
          "extension": "jpg"
        },
        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009459",
        "comics": {
          "available": 556,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009459/comics",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/892",
            "name": "4 (2004) #11"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/52",
            "name": "4 (2004) #12"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/2230",
            "name": "4 (2004) #20"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/1550",
            "name": "4 Vol. 2: The Stuff of Nightmares (Trade Paperback)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/24348",
            "name": "Adam: Legend of the Blue Marvel (Trade Paperback)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/22856",
            "name": "Adam: Legend of the Blue Marvel (2008) #2"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/12637",
            "name": "Alpha Flight (1983) #1"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/6233",
            "name": "Alpha Flight Classic Vol. 1 (Trade Paperback)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/6658",
            "name": "The Amazing Spider-Man (1963) #258"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/277",
            "name": "Amazing Spider-Man (1999) #500"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/35497",
            "name": "Amazing Spider-Man (1999) #657"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/39019",
            "name": "Amazing Spider-Man (1999) #658"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/38716",
            "name": "Amazing Spider-Man (1999) #658 (THOR HOLLYWOOD VARIANT)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/39018",
            "name": "Amazing Spider-Man (1999) #659"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/40882",
            "name": "Amazing Spider-Man (1999) #659 (2nd Printing Variant)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/35505",
            "name": "Amazing Spider-Man (1999) #660"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/35533",
            "name": "Amazing Spider-Man (1999) #661"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/39041",
            "name": "Amazing Spider-Man (1999) #661 (X-Men Art Variant)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/35501",
            "name": "Amazing Spider-Man (1999) #663"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/35503",
            "name": "Amazing Spider-Man (1999) #665"
          }
          ],
          "returned": 20
        },
        "series": {
          "available": 175,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009459/series",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/725",
            "name": "4 (2004 - 2006)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/1253",
            "name": "4 Vol. 2: The Stuff of Nightmares (2005)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/7524",
            "name": "Adam: Legend of the Blue Marvel (2008)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/6079",
            "name": "Adam: Legend of the Blue Marvel (2008)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/2116",
            "name": "Alpha Flight (1983 - 1994)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/1983",
            "name": "Alpha Flight Classic Vol. 1 (2007)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/454",
            "name": "Amazing Spider-Man (1999 - 2013)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/318",
            "name": "Amazing Spider-Man Vol. 6 (2004)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/16312",
            "name": "Amazing Spider-Man: Ends of the Earth (2012)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/1991",
            "name": "Avengers (1963 - 1996)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/3621",
            "name": "Avengers (1996 - 1997)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/354",
            "name": "Avengers (1998 - 2004)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/1816",
            "name": "Avengers Assemble Vol. 4 (2007)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/6476",
            "name": "Avengers: First to Last (2008 - Present)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/6473",
            "name": "AVENGERS: FIRST TO LAST PREMIERE HC (2008 - Present)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/1503",
            "name": "Best of the Fantastic Four Vol. 1 (2005)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/784",
            "name": "Black Panther (2005 - 2008)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/1726",
            "name": "Black Panther: The Bride (2006)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/1995",
            "name": "Cable (1993 - 2002)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/693",
            "name": "Cable & Deadpool (2004 - 2008)"
          }
          ],
          "returned": 20
        },
        "stories": {
          "available": 728,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009459/stories",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/798",
            "name": "Fantastic Four (1998) #507",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/799",
            "name": "Interior #799",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/800",
            "name": "Fantastic Four (1998) #508",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/801",
            "name": "Interior #801",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/802",
            "name": "Fantastic Four (1998) #509",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/803",
            "name": "Interior #803",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/898",
            "name": "Fantastic Four (1998) #520",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/899",
            "name": "1 of 5 - Galactus",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/912",
            "name": "Fantastic Four (1998) #512",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/913",
            "name": "Interior #913",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/914",
            "name": "Fantastic Four (1998) #516",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/915",
            "name": "Interior #915",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/916",
            "name": "Fantastic Four (1998) #513",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/917",
            "name": "Interior #917",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/918",
            "name": "Fantastic Four (1998) #514",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/919",
            "name": "Interior #919",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/920",
            "name": "Fantastic Four (1998) #517",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/921",
            "name": "Interior #921",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/922",
            "name": "Fantastic Four (1998) #518",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/923",
            "name": "AVENGERS DISASSEMBLED TIE-IN! \"FOURTITUDE\" PART 2 (OF 3) With public opinion of the FF at an all-time low and with all of Manhat",
            "type": "interiorStory"
          }
          ],
          "returned": 20
        },
        "events": {
          "available": 21,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009459/events",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/116",
            "name": "Acts of Vengeance!"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/234",
            "name": "Avengers Disassembled"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/296",
            "name": "Chaos War"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/238",
            "name": "Civil War"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/318",
            "name": "Dark Reign"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/240",
            "name": "Days of Future Present"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/249",
            "name": "Fatal Attractions"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/287",
            "name": "Heroic Age"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/315",
            "name": "Infinity"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/253",
            "name": "Infinity Gauntlet"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/317",
            "name": "Inhumanity"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/255",
            "name": "Initiative"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/37",
            "name": "Maximum Security"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/154",
            "name": "Onslaught"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/266",
            "name": "Other - Evolve or Die"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/269",
            "name": "Secret Invasion"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/270",
            "name": "Secret Wars"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/271",
            "name": "Secret Wars II"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/309",
            "name": "Shattered Heroes"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/305",
            "name": "Spider-Island"
          }
          ],
          "returned": 20
        },
        "urls": [
          {
          "type": "detail",
          "url": "http://marvel.com/characters/38/mr_fantastic?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0"
          },
          {
          "type": "wiki",
          "url": "http://marvel.com/universe/Mister_Fantastic?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0"
          },
          {
          "type": "comiclink",
          "url": "http://marvel.com/comics/characters/1009459/mr_fantastic?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0"
          }
        ]
        },
        {
        "id": 1009562,
        "name": "Scarlet Witch",
        "description": "",
        "modified": "2013-10-18T17:31:00-0400",
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/70/5261a7d7c394b",
          "extension": "jpg"
        },
        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009562",
        "comics": {
          "available": 463,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009562/comics",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/43509",
            "name": "A+X (2012) #10"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/12651",
            "name": "Alpha Flight (1983) #111"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/43221",
            "name": "Astonishing X-Men (2004) #51 (Create Your Own Wedding Variant)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/17751",
            "name": "Avengers (1996) #1"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/17490",
            "name": "Avengers (1998) #1"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/17756",
            "name": "Avengers (1996) #2"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/17501",
            "name": "Avengers (1998) #2"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/17757",
            "name": "Avengers (1996) #3"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/17512",
            "name": "Avengers (1998) #3"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/62682",
            "name": "Avengers (2016) #3.1"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/17523",
            "name": "Avengers (1998) #4"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/17758",
            "name": "Avengers (1996) #4"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/17534",
            "name": "Avengers (1998) #5"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/17545",
            "name": "Avengers (1998) #6"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/17556",
            "name": "Avengers (1998) #7"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/17761",
            "name": "Avengers (1996) #7"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/17567",
            "name": "Avengers (1998) #8"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/17762",
            "name": "Avengers (1996) #8"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/17573",
            "name": "Avengers (1998) #9"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/17763",
            "name": "Avengers (1996) #9"
          }
          ],
          "returned": 20
        },
        "series": {
          "available": 154,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009562/series",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/16450",
            "name": "A+X (2012 - Present)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/2116",
            "name": "Alpha Flight (1983 - 1994)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/744",
            "name": "Astonishing X-Men (2004 - 2013)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/22547",
            "name": "Avengers (2016 - 2018)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/354",
            "name": "Avengers (1998 - 2004)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/1991",
            "name": "Avengers (1963 - 1996)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/3621",
            "name": "Avengers (1996 - 1997)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/9086",
            "name": "Avengers Academy (2010 - 2012)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/1988",
            "name": "Avengers Annual (1967 - 1994)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/15373",
            "name": "Avengers Assemble (2012 - Present)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/1340",
            "name": "Avengers Assemble (2004)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/1496",
            "name": "Avengers Assemble Vol. 2 (2005)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/1737",
            "name": "Avengers Assemble Vol. 3 (2006)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/1816",
            "name": "Avengers Assemble Vol. 4 (2007)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/2929",
            "name": "Avengers Assemble Vol. 5 (2007)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/2384",
            "name": "Avengers Classic (2007 - 2008)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/24152",
            "name": "Avengers Epic Collection: The Avengers/Defenders War (2018)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/2111",
            "name": "Avengers Forever (1998 - 2001)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/157",
            "name": "Avengers Legends Vol. 2: The Korvac Saga (2003)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/93",
            "name": "Avengers Legends Vol. I: Avengers Forever (2002)"
          }
          ],
          "returned": 20
        },
        "stories": {
          "available": 517,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009562/stories",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/1024",
            "name": "Avengers (1998) #80",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/1026",
            "name": "Avengers (1998) #81",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/1040",
            "name": "Avengers (1998) #502",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/1054",
            "name": "Avengers (1998) #72",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/1947",
            "name": "Avengers (1998) #78",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/1949",
            "name": "Avengers (1998) #79",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/2295",
            "name": "Avengers (1998) #70",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/2326",
            "name": "Avengers (1998) #74",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/3265",
            "name": "2 of 2 - House of M Prelude",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/3500",
            "name": "New Avengers (2004) #26",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/4491",
            "name": "7 of 8 XLS",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/4495",
            "name": "Cover #4495",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/4930",
            "name": "1 of 5 - 5XLS",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/7829",
            "name": "4 of 5 - Onslaught Reborn - 5XLS",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/8286",
            "name": "4 of 5 - Onslaught Reborn - 5XLS",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/10184",
            "name": "Cover #10184",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/10973",
            "name": "JOURNEY INTO MYSTERY (1952) #109",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/11936",
            "name": "The Maddening Mystery of the Inconceivable Adaptoid!",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/12778",
            "name": "Fantastic Four (1961) #256",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/12779",
            "name": "The Annihilation Gambit",
            "type": "interiorStory"
          }
          ],
          "returned": 20
        },
        "events": {
          "available": 16,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009562/events",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/116",
            "name": "Acts of Vengeance!"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/227",
            "name": "Age of Apocalypse"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/234",
            "name": "Avengers Disassembled"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/310",
            "name": "Avengers VS X-Men"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/318",
            "name": "Dark Reign"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/251",
            "name": "House of M"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/315",
            "name": "Infinity"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/253",
            "name": "Infinity Gauntlet"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/29",
            "name": "Infinity War"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/37",
            "name": "Maximum Security"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/154",
            "name": "Onslaught"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/336",
            "name": "Secret Empire"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/270",
            "name": "Secret Wars"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/271",
            "name": "Secret Wars II"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/273",
            "name": "Siege"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/219",
            "name": "Siege of Darkness"
          }
          ],
          "returned": 16
        },
        "urls": [
          {
          "type": "detail",
          "url": "http://marvel.com/comics/characters/1009562/scarlet_witch?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0"
          },
          {
          "type": "wiki",
          "url": "http://marvel.com/universe/Scarlet_Witch_(Wanda_Maximoff)?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0"
          },
          {
          "type": "comiclink",
          "url": "http://marvel.com/comics/characters/1009562/scarlet_witch?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0"
          }
        ]
        },
        {
        "id": 1009610,
        "name": "Spider-Man",
        "description": "Bitten by a radioactive spider, high school student Peter Parker gained the speed, strength and powers of a spider. Adopting the name Spider-Man, Peter hoped to start a career using his new abilities. Taught that with great power comes great responsibility, Spidey has vowed to use his powers to help people.",
        "modified": "2016-09-28T12:15:21-0400",
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/50/526548a343e4b",
          "extension": "jpg"
        },
        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009610",
        "comics": {
          "available": 3240,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009610/comics",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/62304",
            "name": "Spider-Man: 101 Ways to End the Clone Saga (1997) #1"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/60151",
            "name": "A Year of Marvels (Trade Paperback)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/57926",
            "name": "A Year of Marvels: April Infinite Comic (2016) #1"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/43501",
            "name": "A+X (2012) #4"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/320",
            "name": "Actor Presents Spider-Man and the Incredible Hulk (2003) #1"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/30090",
            "name": "Age of Heroes (2010) #1"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/30885",
            "name": "Age of Heroes (Trade Paperback)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/66661",
            "name": "Agents of Atlas: The Complete Collection Vol. 1 (Trade Paperback)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/37257",
            "name": "Alias (2001) #10"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/37262",
            "name": "Alias (2001) #15"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/37255",
            "name": "Alias Omnibus (Hardcover)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/46848",
            "name": "Alpha: Big Time (2013) #1"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/12637",
            "name": "Alpha Flight (1983) #1"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/12668",
            "name": "Alpha Flight (1983) #127"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/6233",
            "name": "Alpha Flight Classic Vol. 1 (Trade Paperback)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/46847",
            "name": "Alpha: Big Time (2013) #0.1"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/16926",
            "name": "Amazing Fantasy (1962) #15"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/3105",
            "name": "Amazing Fantasy (2004) #15"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/41139",
            "name": "Amazing Fantasy 15: Spider-Man! (2011) #1"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/16214",
            "name": "AMAZING FANTASY OMNIBUS HC (Hardcover)"
          }
          ],
          "returned": 20
        },
        "series": {
          "available": 760,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009610/series",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/22102",
            "name": "A Year of Marvels (2017)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/21110",
            "name": "A Year of Marvels: April Infinite Comic (2016 - Present)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/16450",
            "name": "A+X (2012 - Present)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/458",
            "name": "Actor Presents Spider-Man and the Incredible Hulk (2003)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/9790",
            "name": "Age of Heroes (2010)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/10235",
            "name": "Age of Heroes (2011)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/17318",
            "name": "Age of Ultron (2013)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/24134",
            "name": "Agents of Atlas: The Complete Collection Vol. 1 (2018)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/672",
            "name": "Alias (2001 - 2003)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/13383",
            "name": "Alias Omnibus (2006)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/2116",
            "name": "Alpha Flight (1983 - 1994)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/1983",
            "name": "Alpha Flight Classic Vol. 1 (2007)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/17650",
            "name": "Alpha: Big Time (2013 - Present)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/2987",
            "name": "Amazing Fantasy (1962)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/769",
            "name": "Amazing Fantasy (2004 - 2006)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/15280",
            "name": "Amazing Fantasy 15: Spider-Man! (2011 - 2012)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/2707",
            "name": "AMAZING FANTASY OMNIBUS HC (2007)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/1126",
            "name": "Amazing Spider-Girl (2006 - 2009)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/2234",
            "name": "AMAZING SPIDER-GIRL VOL. 1: WHATEVER HAPPENED TO THE DAUGHTER OF SPIDER-MAN TPB (2007)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/3101",
            "name": "AMAZING SPIDER-GIRL VOL. 2: COMES THE CARNAGE! TPB (2007)"
          }
          ],
          "returned": 20
        },
        "stories": {
          "available": 5018,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009610/stories",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/483",
            "name": "Interior #483",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/486",
            "name": "Cover #486",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/487",
            "name": "Interior #487",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/498",
            "name": "SENSATIONAL SPIDER-MAN (2006) #23",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/499",
            "name": "Interior #499",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/599",
            "name": "Interior #599",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/805",
            "name": "Interior #805",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/824",
            "name": "Cover #824",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/838",
            "name": "3 of 3 - Family Business",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/842",
            "name": "1 of 1 -  Secret of the Spider Shop",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/867",
            "name": "Interior #867",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/912",
            "name": "Fantastic Four (1998) #512",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/913",
            "name": "Interior #913",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/916",
            "name": "Fantastic Four (1998) #513",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/917",
            "name": "Interior #917",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/1018",
            "name": "Amazing Spider-Man (1999) #500",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/1019",
            "name": "Interior #1019",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/1020",
            "name": "Amazing Spider-Man (1999) #501",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/1021",
            "name": "Interior #1021",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/1022",
            "name": "Amazing Spider-Man (1999) #502",
            "type": "cover"
          }
          ],
          "returned": 20
        },
        "events": {
          "available": 36,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009610/events",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/116",
            "name": "Acts of Vengeance!"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/314",
            "name": "Age of Ultron"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/233",
            "name": "Atlantis Attacks"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/234",
            "name": "Avengers Disassembled"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/310",
            "name": "Avengers VS X-Men"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/296",
            "name": "Chaos War"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/238",
            "name": "Civil War"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/318",
            "name": "Dark Reign"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/240",
            "name": "Days of Future Present"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/332",
            "name": "Dead No More: The Clone Conspiracy"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/245",
            "name": "Enemy of the State"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/246",
            "name": "Evolutionary War"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/302",
            "name": "Fear Itself"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/251",
            "name": "House of M"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/252",
            "name": "Inferno"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/253",
            "name": "Infinity Gauntlet"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/255",
            "name": "Initiative"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/258",
            "name": "Kraven's Last Hunt"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/151",
            "name": "Maximum Carnage"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/37",
            "name": "Maximum Security"
          }
          ],
          "returned": 20
        },
        "urls": [
          {
          "type": "detail",
          "url": "http://marvel.com/comics/characters/1009610/spider-man?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0"
          },
          {
          "type": "wiki",
          "url": "http://marvel.com/universe/Spider-Man_(Peter_Parker)?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0"
          },
          {
          "type": "comiclink",
          "url": "http://marvel.com/comics/characters/1009610/spider-man?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0"
          }
        ]
        },
        {
        "id": 1009662,
        "name": "Thing",
        "description": "The radiation that mutated Reed Richards, Sue Storm and Johnny Storm into superhuman beings had also mutated Ben Grimm, transforming him into a grotesque, rock-hided strongman dubbed the Thing.",
        "modified": "2013-11-07T10:43:54-0500",
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/00/527bb4d36b5c2",
          "extension": "jpg"
        },
        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009662",
        "comics": {
          "available": 812,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009662/comics",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/356",
            "name": "4 (2004) #1"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/388",
            "name": "4 (2004) #2"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/404",
            "name": "4 (2004) #3"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/471",
            "name": "4 (2004) #4"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/498",
            "name": "4 (2004) #5"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/682",
            "name": "4 (2004) #6"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/1812",
            "name": "4 (2004) #7"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/571",
            "name": "4 (2004) #8"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/811",
            "name": "4 (2004) #10"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/52",
            "name": "4 (2004) #12"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/2120",
            "name": "4 (2004) #19"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/2230",
            "name": "4 (2004) #20"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/2481",
            "name": "4 (2004) #22"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/1328",
            "name": "4 Vol. 1: Wolf at the Door (Trade Paperback)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/1550",
            "name": "4 Vol. 2: The Stuff of Nightmares (Trade Paperback)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/43505",
            "name": "A+X (2012) #6"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/12637",
            "name": "Alpha Flight (1983) #1"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/6233",
            "name": "Alpha Flight Classic Vol. 1 (Trade Paperback)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/32217",
            "name": "Amazing Spider-Man (1999) #653"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/35521",
            "name": "Amazing Spider-Man (1999) #654"
          }
          ],
          "returned": 20
        },
        "series": {
          "available": 225,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009662/series",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/725",
            "name": "4 (2004 - 2006)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/1251",
            "name": "4 Vol. 1: Wolf at the Door (2004)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/1253",
            "name": "4 Vol. 2: The Stuff of Nightmares (2005)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/16450",
            "name": "A+X (2012 - Present)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/2116",
            "name": "Alpha Flight (1983 - 1994)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/1983",
            "name": "Alpha Flight Classic Vol. 1 (2007)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/454",
            "name": "Amazing Spider-Man (1999 - 2013)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/2984",
            "name": "Amazing Spider-Man Annual (1964 - 2018)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/9085",
            "name": "Avengers (2010 - 2012)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/3621",
            "name": "Avengers (1996 - 1997)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/354",
            "name": "Avengers (1998 - 2004)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/9086",
            "name": "Avengers Academy (2010 - 2012)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/13320",
            "name": "Avengers Annual (2012)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/1340",
            "name": "Avengers Assemble (2004)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/1496",
            "name": "Avengers Assemble Vol. 2 (2005)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/1737",
            "name": "Avengers Assemble Vol. 3 (2006)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/1816",
            "name": "Avengers Assemble Vol. 4 (2007)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/2111",
            "name": "Avengers Forever (1998 - 2001)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/93",
            "name": "Avengers Legends Vol. I: Avengers Forever (2002)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/15305",
            "name": "Avengers Vs. X-Men (2012)"
          }
          ],
          "returned": 20
        },
        "stories": {
          "available": 1024,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009662/stories",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/798",
            "name": "Fantastic Four (1998) #507",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/799",
            "name": "Interior #799",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/800",
            "name": "Fantastic Four (1998) #508",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/801",
            "name": "Interior #801",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/802",
            "name": "Fantastic Four (1998) #509",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/803",
            "name": "Interior #803",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/898",
            "name": "Fantastic Four (1998) #520",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/899",
            "name": "1 of 5 - Galactus",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/912",
            "name": "Fantastic Four (1998) #512",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/913",
            "name": "Interior #913",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/914",
            "name": "Fantastic Four (1998) #516",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/915",
            "name": "Interior #915",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/916",
            "name": "Fantastic Four (1998) #513",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/917",
            "name": "Interior #917",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/918",
            "name": "Fantastic Four (1998) #514",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/919",
            "name": "Interior #919",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/920",
            "name": "Fantastic Four (1998) #517",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/921",
            "name": "Interior #921",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/922",
            "name": "Fantastic Four (1998) #518",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/923",
            "name": "AVENGERS DISASSEMBLED TIE-IN! \"FOURTITUDE\" PART 2 (OF 3) With public opinion of the FF at an all-time low and with all of Manhat",
            "type": "interiorStory"
          }
          ],
          "returned": 20
        },
        "events": {
          "available": 22,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009662/events",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/116",
            "name": "Acts of Vengeance!"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/233",
            "name": "Atlantis Attacks"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/234",
            "name": "Avengers Disassembled"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/310",
            "name": "Avengers VS X-Men"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/296",
            "name": "Chaos War"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/238",
            "name": "Civil War"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/240",
            "name": "Days of Future Present"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/248",
            "name": "Fall of the Mutants"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/249",
            "name": "Fatal Attractions"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/302",
            "name": "Fear Itself"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/287",
            "name": "Heroic Age"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/252",
            "name": "Inferno"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/253",
            "name": "Infinity Gauntlet"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/255",
            "name": "Initiative"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/37",
            "name": "Maximum Security"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/154",
            "name": "Onslaught"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/269",
            "name": "Secret Invasion"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/270",
            "name": "Secret Wars"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/309",
            "name": "Shattered Heroes"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/273",
            "name": "Siege"
          }
          ],
          "returned": 20
        },
        "urls": [
          {
          "type": "detail",
          "url": "http://marvel.com/characters/59/thing?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0"
          },
          {
          "type": "wiki",
          "url": "http://marvel.com/universe/Thing_%28Benjamin_Grimm%29?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0"
          },
          {
          "type": "comiclink",
          "url": "http://marvel.com/comics/characters/1009662/thing?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0"
          }
        ]
        },
        {
        "id": 1009664,
        "name": "Thor",
        "description": "As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made, the enchanted hammer Mjolnir. While others have described Thor as an over-muscled, oafish imbecile, he's quite smart and compassionate.  He's self-assured, and he would never, ever stop fighting for a worthwhile cause.",
        "modified": "2016-01-05T12:33:20-0500",
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/d/d0/5269657a74350",
          "extension": "jpg"
        },
        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009664",
        "comics": {
          "available": 1585,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009664/comics",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/43506",
            "name": "A+X (2012) #7"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/30090",
            "name": "Age of Heroes (2010) #1"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/46852",
            "name": "Alpha: Big Time (2013) #4"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/12637",
            "name": "Alpha Flight (1983) #1"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/12725",
            "name": "Alpha Flight (1983) #61"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/12668",
            "name": "Alpha Flight (1983) #127"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/6233",
            "name": "Alpha Flight Classic Vol. 1 (Trade Paperback)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/43170",
            "name": "Amazing Spider-Man (1999) #57"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/43171",
            "name": "Amazing Spider-Man (1999) #58"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/6748",
            "name": "The Amazing Spider-Man (1963) #339"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/277",
            "name": "Amazing Spider-Man (1999) #500"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/5808",
            "name": "Amazing Spider-Man (1999) #538"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/16904",
            "name": "Amazing Spider-Man Annual (1964) #3"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/16890",
            "name": "Amazing Spider-Man Annual (1964) #16"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/1262",
            "name": "Amazing Spider-Man Vol. 6 (Trade Paperback)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/39896",
            "name": "Art of Marvel Studios TPB Slipcase (Hardcover)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/32769",
            "name": "Astonishing Thor (2010) #1"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/33652",
            "name": "Astonishing Thor (2010) #1 (FOILOGRAM VARIANT)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/32771",
            "name": "Astonishing Thor (2010) #2"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/32774",
            "name": "Astonishing Thor (2010) #3"
          }
          ],
          "returned": 20
        },
        "series": {
          "available": 434,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009664/series",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/16450",
            "name": "A+X (2012 - Present)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/9790",
            "name": "Age of Heroes (2010)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/2116",
            "name": "Alpha Flight (1983 - 1994)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/1983",
            "name": "Alpha Flight Classic Vol. 1 (2007)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/17650",
            "name": "Alpha: Big Time (2013 - Present)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/454",
            "name": "Amazing Spider-Man (1999 - 2013)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/2984",
            "name": "Amazing Spider-Man Annual (1964 - 2018)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/318",
            "name": "Amazing Spider-Man Vol. 6 (2004)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/14779",
            "name": "Art of Marvel Studios TPB Slipcase (2011 - Present)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/9858",
            "name": "Astonishing Thor (2010)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/744",
            "name": "Astonishing X-Men (2004 - 2013)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/3621",
            "name": "Avengers (1996 - 1997)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/22547",
            "name": "Avengers (2016 - 2018)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/354",
            "name": "Avengers (1998 - 2004)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/9085",
            "name": "Avengers (2010 - 2012)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/24229",
            "name": "Avengers (2018 - Present)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/1991",
            "name": "Avengers (1963 - 1996)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/9086",
            "name": "Avengers Academy (2010 - 2012)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/13320",
            "name": "Avengers Annual (2012)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/23945",
            "name": "Avengers Annual (2001)"
          }
          ],
          "returned": 20
        },
        "stories": {
          "available": 2422,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009664/stories",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/876",
            "name": "THOR (1998) #76",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/877",
            "name": "Interior #877",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/879",
            "name": "Interior #879",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/880",
            "name": "THOR (1998) #77",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/881",
            "name": "Interior #881",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/882",
            "name": "THOR (1998) #83",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/883",
            "name": "Interior #883",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/884",
            "name": "THOR (1998) #82",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/885",
            "name": "Interior #885",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/886",
            "name": "THOR (1998) #78",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/887",
            "name": "Interior #887",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/888",
            "name": "THOR (1998) #79",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/889",
            "name": "Interior #889",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/890",
            "name": "THOR (1998) #80",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/891",
            "name": "Interior #891",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/892",
            "name": "THOR (1998) #81",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/893",
            "name": "Interior #893",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/894",
            "name": "THOR (1998) #84",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/895",
            "name": "AVENGERS DISASSEMBLED TIE-IN! “RAGNAROK” PART 4 (OF 6) What makes a god? Is it birthright, is it happenstance, or is it in the m",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/896",
            "name": "THOR (1998) #85",
            "type": "cover"
          }
          ],
          "returned": 20
        },
        "events": {
          "available": 25,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009664/events",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/116",
            "name": "Acts of Vengeance!"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/233",
            "name": "Atlantis Attacks"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/234",
            "name": "Avengers Disassembled"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/310",
            "name": "Avengers VS X-Men"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/235",
            "name": "Blood and Thunder"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/296",
            "name": "Chaos War"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/238",
            "name": "Civil War"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/318",
            "name": "Dark Reign"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/246",
            "name": "Evolutionary War"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/302",
            "name": "Fear Itself"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/252",
            "name": "Inferno"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/315",
            "name": "Infinity"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/253",
            "name": "Infinity Gauntlet"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/29",
            "name": "Infinity War"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/37",
            "name": "Maximum Security"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/263",
            "name": "Mutant Massacre"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/154",
            "name": "Onslaught"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/336",
            "name": "Secret Empire"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/269",
            "name": "Secret Invasion"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/270",
            "name": "Secret Wars"
          }
          ],
          "returned": 20
        },
        "urls": [
          {
          "type": "detail",
          "url": "http://marvel.com/characters/1009664/thor/featured?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0"
          },
          {
          "type": "wiki",
          "url": "http://marvel.com/universe/Thor_(Thor_Odinson)?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0"
          },
          {
          "type": "comiclink",
          "url": "http://marvel.com/comics/characters/1009664/thor?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0"
          }
        ]
        },
        {
        "id": 1009525,
        "name": "Valeria Richards",
        "description": "",
        "modified": "2011-10-27T09:58:06-0400",
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/60/4d541255f088a",
          "extension": "jpg"
        },
        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009525",
        "comics": {
          "available": 48,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009525/comics",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/39019",
            "name": "Amazing Spider-Man (1999) #658"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/38716",
            "name": "Amazing Spider-Man (1999) #658 (THOR HOLLYWOOD VARIANT)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/39018",
            "name": "Amazing Spider-Man (1999) #659"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/35505",
            "name": "Amazing Spider-Man (1999) #660"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/15585",
            "name": "Fantastic Four (1998) #62"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/15591",
            "name": "Fantastic Four (1998) #68"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/12854",
            "name": "Fantastic Four (1998) #500"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/12855",
            "name": "Fantastic Four (1998) #501"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/12856",
            "name": "Fantastic Four (1998) #502"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/343",
            "name": "Fantastic Four (1998) #509"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/284",
            "name": "Fantastic Four (1998) #510"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/483",
            "name": "Fantastic Four (1998) #512"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/709",
            "name": "Fantastic Four (1998) #514"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/748",
            "name": "Fantastic Four (1998) #517"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/826",
            "name": "Fantastic Four (1998) #518"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/23736",
            "name": "Fantastic Four (1998) #565"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/29600",
            "name": "Fantastic Four (1998) #580"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/29601",
            "name": "Fantastic Four (1998) #581"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/29602",
            "name": "Fantastic Four (1998) #582"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/29603",
            "name": "Fantastic Four (1998) #583"
          }
          ],
          "returned": 20
        },
        "series": {
          "available": 9,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009525/series",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/454",
            "name": "Amazing Spider-Man (1999 - 2013)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/421",
            "name": "Fantastic Four (1998 - 2012)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/1265",
            "name": "Fantastic Four Vol. 1 (2004)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/1266",
            "name": "Fantastic Four Vol. 2 (2005)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/232",
            "name": "Fantastic Four Vol. 2:Unthinkable (2003)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/1659",
            "name": "Fantastic Four Vol. 3 (2005)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/13440",
            "name": "FF (2010 - 2012)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/16451",
            "name": "New Avengers (2013 - Present)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/4886",
            "name": "Secret Invasion: Fantastic Four (2008)"
          }
          ],
          "returned": 9
        },
        "stories": {
          "available": 55,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009525/stories",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/802",
            "name": "Fantastic Four (1998) #509",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/803",
            "name": "Interior #803",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/912",
            "name": "Fantastic Four (1998) #512",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/913",
            "name": "Interior #913",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/918",
            "name": "Fantastic Four (1998) #514",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/919",
            "name": "Interior #919",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/920",
            "name": "Fantastic Four (1998) #517",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/921",
            "name": "Interior #921",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/922",
            "name": "Fantastic Four (1998) #518",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/923",
            "name": "AVENGERS DISASSEMBLED TIE-IN! \"FOURTITUDE\" PART 2 (OF 3) With public opinion of the FF at an all-time low and with all of Manhat",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/2793",
            "name": "Fantastic Four (1998) #510",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/2794",
            "name": "Interior #2794",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/26087",
            "name": "interior to FF #500",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/26088",
            "name": "interior to FF #501",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/26089",
            "name": "interior to FF #502",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/31865",
            "name": "interior to FF (1998) #68",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/47580",
            "name": "SECRET INVASION: FANTASTIC FOUR (2008) #3",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/52673",
            "name": "FANTASTIC FOUR (1998) #565",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/64348",
            "name": "FANTASTIC FOUR (1998) #580",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/64350",
            "name": "Fantastic Four (1998) #581",
            "type": "cover"
          }
          ],
          "returned": 20
        },
        "events": {
          "available": 3,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009525/events",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/234",
            "name": "Avengers Disassembled"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/287",
            "name": "Heroic Age"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/269",
            "name": "Secret Invasion"
          }
          ],
          "returned": 3
        },
        "urls": [
          {
          "type": "detail",
          "url": "http://marvel.com/characters/2717/valeria_richards?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0"
          },
          {
          "type": "wiki",
          "url": "http://marvel.com/universe/Richards%2C_Valeria?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0"
          },
          {
          "type": "comiclink",
          "url": "http://marvel.com/comics/characters/1009525/valeria_richards?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0"
          }
        ]
        },
        {
        "id": 1009707,
        "name": "Wasp",
        "description": "When Janet Van Dyne's father died, she convinced her father's associate Hank Pym to give her a supply of \"Pym particles\"; Pym also subjected her to a procedure which granted her the ability to, upon shrinking, grow wings and fire blasts of energy, which she called her \"wasp's stings.\"",
        "modified": "2014-06-05T17:24:02-0400",
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/c0/5390dfd5ef165",
          "extension": "jpg"
        },
        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009707",
        "comics": {
          "available": 363,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009707/comics",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/24348",
            "name": "Adam: Legend of the Blue Marvel (Trade Paperback)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/22461",
            "name": "Adam: Legend of the Blue Marvel (2008) #1"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/56436",
            "name": "All-New Wolverine (2015) #5"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/55367",
            "name": "All-New, All-Different Avengers (2015) #14"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/37655",
            "name": "Ant-Man & Wasp: Small World (Trade Paperback)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/17490",
            "name": "Avengers (1998) #1"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/17501",
            "name": "Avengers (1998) #2"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/17512",
            "name": "Avengers (1998) #3"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/17757",
            "name": "Avengers (1996) #3"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/17758",
            "name": "Avengers (1996) #4"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/17523",
            "name": "Avengers (1998) #4"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/7299",
            "name": "Avengers (1963) #5"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/7332",
            "name": "Avengers (1963) #8"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/17763",
            "name": "Avengers (1996) #9"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/17752",
            "name": "Avengers (1996) #10"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/17491",
            "name": "Avengers (1998) #10"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/6953",
            "name": "Avengers (1963) #10"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/17753",
            "name": "Avengers (1996) #11"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/17492",
            "name": "Avengers (1998) #11"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/6975",
            "name": "Avengers (1963) #12"
          }
          ],
          "returned": 20
        },
        "series": {
          "available": 142,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009707/series",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/7524",
            "name": "Adam: Legend of the Blue Marvel (2008)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/6079",
            "name": "Adam: Legend of the Blue Marvel (2008)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/20682",
            "name": "All-New Wolverine (2015 - Present)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/20443",
            "name": "All-New, All-Different Avengers (2015 - Present)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/13540",
            "name": "Ant-Man & Wasp: Small World (2010 - Present)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/9085",
            "name": "Avengers (2010 - 2012)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/1991",
            "name": "Avengers (1963 - 1996)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/3621",
            "name": "Avengers (1996 - 1997)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/354",
            "name": "Avengers (1998 - 2004)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/9086",
            "name": "Avengers Academy (2010 - 2012)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/23945",
            "name": "Avengers Annual (2001)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/1988",
            "name": "Avengers Annual (1967 - 1994)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/1340",
            "name": "Avengers Assemble (2004)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/15373",
            "name": "Avengers Assemble (2012 - Present)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/1496",
            "name": "Avengers Assemble Vol. 2 (2005)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/1737",
            "name": "Avengers Assemble Vol. 3 (2006)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/1816",
            "name": "Avengers Assemble Vol. 4 (2007)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/2929",
            "name": "Avengers Assemble Vol. 5 (2007)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/2384",
            "name": "Avengers Classic (2007 - 2008)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/2111",
            "name": "Avengers Forever (1998 - 2001)"
          }
          ],
          "returned": 20
        },
        "stories": {
          "available": 385,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009707/stories",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/1024",
            "name": "Avengers (1998) #80",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/1026",
            "name": "Avengers (1998) #81",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/1040",
            "name": "Avengers (1998) #502",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/1649",
            "name": "Avengers (1998) #77",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/1947",
            "name": "Avengers (1998) #78",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/1949",
            "name": "Avengers (1998) #79",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/2299",
            "name": "ULTIMATES (2002) #13",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/2359",
            "name": "1 of",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/2723",
            "name": "ULTIMATES 2 (2004) #1",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/4185",
            "name": "2 of 4 - 4XLS",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/5621",
            "name": "1 of 6 - 6XLS",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/5884",
            "name": "4 of 7 - 7XLS",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/5886",
            "name": "Cover #5886",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/8237",
            "name": "Irredeemable Ant-Man (2006) #7",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/8340",
            "name": "2 of 6 - Ultron",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/8682",
            "name": "3 of 6 - Ultron; THE INITIATIVE BANNER",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/12199",
            "name": "Cover #12199",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/12215",
            "name": "The Human Top",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/12241",
            "name": "Cover #12241",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/12260",
            "name": "Cover #12260",
            "type": "cover"
          }
          ],
          "returned": 20
        },
        "events": {
          "available": 14,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009707/events",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/234",
            "name": "Avengers Disassembled"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/238",
            "name": "Civil War"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/239",
            "name": "Crossing"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/318",
            "name": "Dark Reign"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/302",
            "name": "Fear Itself"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/315",
            "name": "Infinity"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/29",
            "name": "Infinity War"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/255",
            "name": "Initiative"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/37",
            "name": "Maximum Security"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/154",
            "name": "Onslaught"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/336",
            "name": "Secret Empire"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/269",
            "name": "Secret Invasion"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/270",
            "name": "Secret Wars"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/271",
            "name": "Secret Wars II"
          }
          ],
          "returned": 14
        },
        "urls": [
          {
          "type": "detail",
          "url": "http://marvel.com/characters/2535/wasp?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0"
          },
          {
          "type": "wiki",
          "url": "http://marvel.com/universe/Wasp?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0"
          },
          {
          "type": "comiclink",
          "url": "http://marvel.com/comics/characters/1009707/wasp?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0"
          }
        ]
        }
      ],
      "eventComic": [
        {
        "id": 23900,
        "digitalId": 0,
        "title": "Avengers Disassembled: Iron Man, Thor & Captain America (Hardcover)",
        "issueNumber": 0,
        "variantDescription": "",
        "description": "The repercussions of the worst day in Avengers history reverberate throughout the lives of the mightiest of them all: Thor, Iron Man and Captain America! The end is nigh for the gods of Asgard, and only Thor and his Avengers allies might be able to stave off Ragnarok - but will the Thunder God be Asgard's savior, or the architect of its downfall? Beset by allegations that Tony Stark has lost his battle with the bottle, Iron Man must face off against his evil doppelganger, which has embarked on a murderous rampage aimed at those in charge of Stark Enterprises! Plus: When Tony Stark is ordered to recover sensitive, top-secret materials from Avengers Mansion, his duties as Secretary of State come into conflict with his standing as an Avenger - in the most explosive way possible! Reeling from recent events, Captain America is forced to choose between his partner - the fugitive Falcon - and his principles while suffering an enigmatic battle fatigue that replays his worst failure and presents the Scarlet Witch as his only refuge. Meanwhile, all is not right within S.H.I.E.L.D. - what does it have to do with a certain Red-Skulled villain who's been lurking in the background? Collecting THOR #80-85, IRON MAN #84-89, CAPTAIN AMERICA & THE FALCON #5-7 and CAPTAIN AMERICA #29-32.\r<br>Rated T+ ...$49.99\r<br>ISBN: 978-0-7851-3884-6\r<br>Trim size: oversized\r<br>",
        "modified": "2010-11-11T18:01:25-0500",
        "isbn": "978-0-7851-3884-6",
        "upc": "5960613884-00111",
        "diamondCode": "JAN092570",
        "ean": "9780785 138846 54999",
        "issn": "",
        "format": "Hardcover",
        "pageCount": 456,
        "textObjects": [
          {
          "type": "issue_solicit_text",
          "language": "en-us",
          "text": "The repercussions of the worst day in Avengers history reverberate throughout the lives of the mightiest of them all: Thor, Iron Man and Captain America! The end is nigh for the gods of Asgard, and only Thor and his Avengers allies might be able to stave off Ragnarok - but will the Thunder God be Asgard's savior, or the architect of its downfall? Beset by allegations that Tony Stark has lost his battle with the bottle, Iron Man must face off against his evil doppelganger, which has embarked on a murderous rampage aimed at those in charge of Stark Enterprises! Plus: When Tony Stark is ordered to recover sensitive, top-secret materials from Avengers Mansion, his duties as Secretary of State come into conflict with his standing as an Avenger - in the most explosive way possible! Reeling from recent events, Captain America is forced to choose between his partner - the fugitive Falcon - and his principles while suffering an enigmatic battle fatigue that replays his worst failure and presents the Scarlet Witch as his only refuge. Meanwhile, all is not right within S.H.I.E.L.D. - what does it have to do with a certain Red-Skulled villain who's been lurking in the background? Collecting THOR #80-85, IRON MAN #84-89, CAPTAIN AMERICA & THE FALCON #5-7 and CAPTAIN AMERICA #29-32.\r<br>Rated T+ ...$49.99\r<br>ISBN: 978-0-7851-3884-6\r<br>Trim size: oversized\r<br>"
          }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/23900",
        "urls": [
          {
          "type": "detail",
          "url": "http://marvel.com/comics/collection/23900/avengers_disassembled_iron_man_thor_captain_america_hardcover?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0"
          }
        ],
        "series": {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/7067",
          "name": "Avengers Disassembled: Iron Man, Thor & Captain America (2009 - Present)"
        },
        "variants": [],
        "collections": [],
        "collectedIssues": [],
        "dates": [
          {
          "type": "onsaleDate",
          "date": "2009-03-18T00:00:00-0400"
          },
          {
          "type": "focDate",
          "date": "2009-02-12T00:00:00-0500"
          }
        ],
        "prices": [
          {
          "type": "printPrice",
          "price": 49.99
          }
        ],
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/90/51dd930e38cf5",
          "extension": "jpg"
        },
        "images": [
          {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/90/51dd930e38cf5",
          "extension": "jpg"
          },
          {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/a/60/4bb595fc9829e",
          "extension": "jpg"
          }
        ],
        "creators": {
          "available": 1,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/23900/creators",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/creators/7553",
            "name": "JEPH YORK",
            "role": "other"
          }
          ],
          "returned": 1
        },
        "characters": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/23900/characters",
          "items": [],
          "returned": 0
        },
        "stories": {
          "available": 2,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/23900/stories",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/53026",
            "name": "Thor 80-85, Iron Man 84-89, Captain America & the Falcon 5-7, Captain America 29-32",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/53027",
            "name": "Thor 80-85, Iron Man 84-89, Captain America & the Falcon 5-7, Captain America 29-32",
            "type": "interiorStory"
          }
          ],
          "returned": 2
        },
        "events": {
          "available": 1,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/23900/events",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/234",
            "name": "Avengers Disassembled"
          }
          ],
          "returned": 1
        }
        },
        {
        "id": 5685,
        "digitalId": 0,
        "title": "Avengers Disassembled (Hardcover)",
        "issueNumber": 0,
        "variantDescription": "",
        "description": "The powerhouse team of Brian Michael Bendis and David Finch take on Earth's Mightiest Heroes! It begins with the return of a team member thought dead - and by the time it's over, everything you know about the Avengers will have changed! The event that rocked the entirety of the Marvel Universe and set the stage for New Avengers is presented here for the first time as a deluxe, oversize hardcover with all-new extras! Collects AVENGERS #500-503 and the AVENGERS FINALE.\r\n184 PGS./Rated T  ...$24.99",
        "modified": "2013-07-10T12:52:14-0400",
        "isbn": "0-7851-2294-X",
        "upc": "5960612294-00111",
        "diamondCode": "",
        "ean": "",
        "issn": "",
        "format": "Hardcover",
        "pageCount": 0,
        "textObjects": [
          {
          "type": "issue_solicit_text",
          "language": "en-us",
          "text": "The powerhouse team of Brian Michael Bendis and David Finch take on Earth's Mightiest Heroes! It begins with the return of a team member thought dead - and by the time it's over, everything you know about the Avengers will have changed! The event that rocked the entirety of the Marvel Universe and set the stage for New Avengers is presented here for the first time as a deluxe, oversize hardcover with all-new extras! Collects AVENGERS #500-503 and the AVENGERS FINALE.\r\n184 PGS./Rated T  ...$24.99"
          }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/5685",
        "urls": [
          {
          "type": "detail",
          "url": "http://marvel.com/comics/collection/5685/avengers_disassembled_hardcover?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0"
          }
        ],
        "series": {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/1795",
          "name": "Avengers Disassembled (2006)"
        },
        "variants": [],
        "collections": [],
        "collectedIssues": [
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/comics/923",
          "name": "Avengers (1998) #503"
          },
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/comics/90",
          "name": "Avengers Finale (2004) #1"
          },
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/comics/845",
          "name": "Avengers (1998) #502"
          },
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/comics/767",
          "name": "Avengers (1998) #501"
          },
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/comics/532",
          "name": "Avengers (1998) #500"
          }
        ],
        "dates": [
          {
          "type": "onsaleDate",
          "date": "2006-12-20T00:00:00-0500"
          },
          {
          "type": "focDate",
          "date": "1961-01-01T00:00:00-0500"
          }
        ],
        "prices": [
          {
          "type": "printPrice",
          "price": 9.99
          }
        ],
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/10/51dd90a4d6ac6",
          "extension": "jpg"
        },
        "images": [
          {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/70/51dd9159c3c07",
          "extension": "jpg"
          },
          {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/10/51dd90a4d6ac6",
          "extension": "jpg"
          },
          {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/80/4bc5b3937825b",
          "extension": "jpg"
          }
        ],
        "creators": {
          "available": 5,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/5685/creators",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/creators/24",
            "name": "Brian Michael Bendis",
            "role": "writer"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/creators/8504",
            "name": "Frank D'ARMATA",
            "role": "colorist"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/creators/248",
            "name": "David Finch",
            "role": "penciller"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/creators/11553",
            "name": "Danny K. Miki",
            "role": "inker"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/creators/350",
            "name": "Richard Starkings",
            "role": "letterer"
          }
          ],
          "returned": 5
        },
        "characters": {
          "available": 3,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/5685/characters",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009165",
            "name": "Avengers"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220",
            "name": "Captain America"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009368",
            "name": "Iron Man"
          }
          ],
          "returned": 3
        },
        "stories": {
          "available": 7,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/5685/stories",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/1031",
            "name": "Interior #1031",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/1039",
            "name": "Interior #1039",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/1041",
            "name": "Avengers (1998) #502",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/1043",
            "name": "Interior #1043",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/4222",
            "name": "1 of 1 - Disassembled Epilogue",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/7490",
            "name": "Avengers 500-503, Avengers Finale",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/7491",
            "name": "Avengers 500-503, Avengers Finale",
            "type": "interiorStory"
          }
          ],
          "returned": 7
        },
        "events": {
          "available": 1,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/5685/events",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/234",
            "name": "Avengers Disassembled"
          }
          ],
          "returned": 1
        }
        },
        {
        "id": 1703,
        "digitalId": 0,
        "title": "Avengers Disassembled (Trade Paperback)",
        "issueNumber": 0,
        "variantDescription": "",
        "description": "It begins with the return of a team member thought dead - and by the time it's over, everything you know about the Avengers will have changed! It's the worst day in team history, as Earth's Mightiest Heroes try to deal with the shocking tragedy around them. Who is behind this, and why? Will it tear the team apart? Who will fall at the hands of the Avengers' greatest enemy? Guest-starring every Avenger...ever! Collects AVENGERS #500-503 and the AVENGERS FINALE.",
        "modified": "2013-07-10T12:50:33-0400",
        "isbn": "0-7851-1482-3",
        "upc": "",
        "diamondCode": "",
        "ean": "",
        "issn": "",
        "format": "Trade Paperback",
        "pageCount": 0,
        "textObjects": [
          {
          "type": "issue_solicit_text",
          "language": "en-us",
          "text": "It begins with the return of a team member thought dead - and by the time it's over, everything you know about the Avengers will have changed! It's the worst day in team history, as Earth's Mightiest Heroes try to deal with the shocking tragedy around them. Who is behind this, and why? Will it tear the team apart? Who will fall at the hands of the Avengers' greatest enemy? Guest-starring every Avenger...ever! Collects AVENGERS #500-503 and the AVENGERS FINALE."
          }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/1703",
        "urls": [
          {
          "type": "detail",
          "url": "http://marvel.com/comics/collection/1703/avengers_disassembled_trade_paperback?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0"
          }
        ],
        "series": {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/344",
          "name": "Avengers Disassembled (2005)"
        },
        "variants": [],
        "collections": [],
        "collectedIssues": [
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/comics/923",
          "name": "Avengers (1998) #503"
          },
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/comics/90",
          "name": "Avengers Finale (2004) #1"
          },
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/comics/845",
          "name": "Avengers (1998) #502"
          },
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/comics/767",
          "name": "Avengers (1998) #501"
          },
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/comics/532",
          "name": "Avengers (1998) #500"
          },
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/comics/516",
          "name": "Avengers (1998) #500 (Director's Cut)"
          }
        ],
        "dates": [
          {
          "type": "onsaleDate",
          "date": "2005-01-26T00:00:00-0500"
          },
          {
          "type": "focDate",
          "date": "-0001-11-30T00:00:00-0500"
          }
        ],
        "prices": [
          {
          "type": "printPrice",
          "price": 0
          }
        ],
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/10/51dd90a4d6ac6",
          "extension": "jpg"
        },
        "images": [
          {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/10/51dd90a4d6ac6",
          "extension": "jpg"
          },
          {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/f0/4bc64c9b8a794",
          "extension": "jpg"
          }
        ],
        "creators": {
          "available": 5,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/1703/creators",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/creators/24",
            "name": "Brian Michael Bendis",
            "role": "writer"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/creators/8504",
            "name": "Frank D'ARMATA",
            "role": "colorist"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/creators/248",
            "name": "David Finch",
            "role": "penciller"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/creators/11553",
            "name": "Danny K. Miki",
            "role": "inker"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/creators/350",
            "name": "Richard Starkings",
            "role": "letterer"
          }
          ],
          "returned": 5
        },
        "characters": {
          "available": 3,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/1703/characters",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009165",
            "name": "Avengers"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220",
            "name": "Captain America"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009368",
            "name": "Iron Man"
          }
          ],
          "returned": 3
        },
        "stories": {
          "available": 7,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/1703/stories",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/1029",
            "name": "Interior #1029",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/1031",
            "name": "Interior #1031",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/1039",
            "name": "Interior #1039",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/1041",
            "name": "Avengers (1998) #502",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/1043",
            "name": "Interior #1043",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/4222",
            "name": "1 of 1 - Disassembled Epilogue",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/65345",
            "name": "Avengers Disassembled 0 cover",
            "type": "cover"
          }
          ],
          "returned": 7
        },
        "events": {
          "available": 1,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/1703/events",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/234",
            "name": "Avengers Disassembled"
          }
          ],
          "returned": 1
        }
        },
        {
        "id": 1448,
        "digitalId": 3303,
        "title": "Excalibur (2004) #8",
        "issueNumber": 8,
        "variantDescription": "",
        "description": "\"SATURDAY NIGHT FEVER\" PART 1 (OF 3) \r<br>Brand New Story Arc! Great jumping-on point! Professor X continues to bring order and justice to Genosha, but will the citizens be willing to follow him after they discover his terrible secret?\r<br>",
        "modified": "2012-03-27T17:52:45-0400",
        "isbn": "",
        "upc": "5960605540-00811",
        "diamondCode": "",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 0,
        "textObjects": [
          {
          "type": "issue_solicit_text",
          "language": "en-us",
          "text": "\"SATURDAY NIGHT FEVER\" PART 1 (OF 3) \r<br>Brand New Story Arc! Great jumping-on point! Professor X continues to bring order and justice to Genosha, but will the citizens be willing to follow him after they discover his terrible secret?\r<br>"
          }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/1448",
        "urls": [
          {
          "type": "detail",
          "url": "http://marvel.com/comics/issue/1448/excalibur_2004_8?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0"
          },
          {
          "type": "reader",
          "url": "http://marvel.com/digitalcomics/view.htm?iid=3303&utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0"
          }
        ],
        "series": {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/740",
          "name": "Excalibur (2004 - 2005)"
        },
        "variants": [],
        "collections": [
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/comics/1949",
          "name": "Excalibur Vol. 2: Saturday Night Fever (Trade Paperback)"
          }
        ],
        "collectedIssues": [],
        "dates": [
          {
          "type": "onsaleDate",
          "date": "2004-12-22T00:00:00-0500"
          },
          {
          "type": "focDate",
          "date": "-0001-11-30T00:00:00-0500"
          },
          {
          "type": "unlimitedDate",
          "date": "2007-04-28T00:00:00-0400"
          }
        ],
        "prices": [
          {
          "type": "printPrice",
          "price": 2.99
          }
        ],
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/7/30/5669af69ab177",
          "extension": "jpg"
        },
        "images": [
          {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/7/30/5669af69ab177",
          "extension": "jpg"
          },
          {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/2/40/4bc65dbf22cff",
          "extension": "jpg"
          }
        ],
        "creators": {
          "available": 5,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/1448/creators",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/creators/498",
            "name": "Greg Adams",
            "role": "inker"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/creators/44",
            "name": "Chris Claremont",
            "role": "writer"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/creators/618",
            "name": "Transparency Digital",
            "role": "colorist"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/creators/540",
            "name": "Aaron Lopresti",
            "role": "penciller (cover)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/creators/791",
            "name": "Tom Orzechowski",
            "role": "letterer"
          }
          ],
          "returned": 5
        },
        "characters": {
          "available": 1,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/1448/characters",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010771",
            "name": "Excalibur"
          }
          ],
          "returned": 1
        },
        "stories": {
          "available": 2,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/1448/stories",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/3253",
            "name": "1 of 5 - Most Dangerous Game",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/3254",
            "name": "1 of 5 - Most Dangerous Game",
            "type": "interiorStory"
          }
          ],
          "returned": 2
        },
        "events": {
          "available": 1,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/1448/events",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/234",
            "name": "Avengers Disassembled"
          }
          ],
          "returned": 1
        }
        },
        {
        "id": 1490,
        "digitalId": 0,
        "title": "Avengers Disassembled: Captain America (Trade Paperback)",
        "issueNumber": 0,
        "variantDescription": "",
        "description": "Captain America and Diamondback are reunited after all these years - but their reunion is bittersweet, as Cap is consumed with remorse over recent cataclysmic events involving the Avengers. Meanwhile, all is not right within the S.H.I.E.L.D. organization. How is it that Nick Fury is completely unaware? And what does all this have to do with a certain Red-Skulled villain who's been lurking in the background? Plus: Finding himself a fugitive from justice, the Falcon must battle his way past elite naval operatives - even as Cap is forced to choose between his partner and his principles while suffering an enigmatic battle fatigue that replays his worst failure and presents the Scarlet Witch as his only refuge. \r<br>Collects CAPTAIN AMERICA #29-32 and CAPTAIN AMERICA AND THE FALCON #5-7.\r<br>",
        "modified": "2013-07-10T12:56:54-0400",
        "isbn": "0-7851-1648-6",
        "upc": "5960611648-00111",
        "diamondCode": "",
        "ean": "",
        "issn": "",
        "format": "Trade Paperback",
        "pageCount": 0,
        "textObjects": [
          {
          "type": "issue_solicit_text",
          "language": "en-us",
          "text": "Captain America and Diamondback are reunited after all these years - but their reunion is bittersweet, as Cap is consumed with remorse over recent cataclysmic events involving the Avengers. Meanwhile, all is not right within the S.H.I.E.L.D. organization. How is it that Nick Fury is completely unaware? And what does all this have to do with a certain Red-Skulled villain who's been lurking in the background? Plus: Finding himself a fugitive from justice, the Falcon must battle his way past elite naval operatives - even as Cap is forced to choose between his partner and his principles while suffering an enigmatic battle fatigue that replays his worst failure and presents the Scarlet Witch as his only refuge. \r<br>Collects CAPTAIN AMERICA #29-32 and CAPTAIN AMERICA AND THE FALCON #5-7.\r<br>"
          }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/1490",
        "urls": [
          {
          "type": "detail",
          "url": "http://marvel.com/comics/collection/1490/avengers_disassembled_captain_america_trade_paperback?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0"
          },
          {
          "type": "purchase",
          "url": "http://comicstore.marvel.com/Avengers-Disassembled-Captain-America-0/digital-comic/36519?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0"
          }
        ],
        "series": {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/1398",
          "name": "Avengers Disassembled: Captain America (2004)"
        },
        "variants": [],
        "collections": [],
        "collectedIssues": [
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/comics/893",
          "name": "Captain America (2002) #32"
          },
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/comics/801",
          "name": "Captain America (2002) #31"
          },
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/comics/784",
          "name": "Captain America & the Falcon (2004) #7"
          },
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/comics/514",
          "name": "Captain America (2002) #30"
          },
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/comics/573",
          "name": "Captain America & the Falcon (2004) #6"
          },
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/comics/595",
          "name": "Captain America (2002) #29"
          },
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/comics/605",
          "name": "Captain America & the Falcon (2004) #5"
          }
        ],
        "dates": [
          {
          "type": "onsaleDate",
          "date": "2004-12-08T00:00:00-0500"
          },
          {
          "type": "focDate",
          "date": "-0001-11-30T00:00:00-0500"
          }
        ],
        "prices": [
          {
          "type": "printPrice",
          "price": 9.99
          }
        ],
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/80/591cbc638efd0",
          "extension": "jpg"
        },
        "images": [
          {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/80/591cbc638efd0",
          "extension": "jpg"
          },
          {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/5/f0/51dd927c4b122",
          "extension": "jpg"
          }
        ],
        "creators": {
          "available": 10,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/1490/creators",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/creators/506",
            "name": "Joe Bennett",
            "role": "penciller"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/creators/5106",
            "name": "Scot Eaton",
            "role": "penciller"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/creators/618",
            "name": "Transparency Digital",
            "role": "colorist"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/creators/581",
            "name": "Rob Schwager",
            "role": "colorist"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/creators/8635",
            "name": "Randy Gentile",
            "role": "letterer"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/creators/8429",
            "name": "Dave Sharpe",
            "role": "letterer"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/creators/476",
            "name": "Drew Geraci",
            "role": "inker"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/creators/763",
            "name": "Jack Jadson",
            "role": "inker"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/creators/553",
            "name": "Robert Kirkman",
            "role": "writer"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/creators/110",
            "name": "Christopher Priest",
            "role": "writer"
          }
          ],
          "returned": 10
        },
        "characters": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/1490/characters",
          "items": [],
          "returned": 0
        },
        "stories": {
          "available": 9,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/1490/stories",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/586",
            "name": "Interior #586",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/1674",
            "name": "Interior #1674",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/1676",
            "name": "Interior #1676",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/1684",
            "name": "“AVENGERS DISASSEMBLED” PART 3 (OF 4) Mr. Hyde, Hydra, The Red Skull, Batroc The Leaper... this story wouldn't be complete witho",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/1686",
            "name": "AVENGERS DISASSEMBLED TIE-IN! PART 4 (OF 4) After months of careful planning, the Red Skull makes his move. Captain America and ",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/2864",
            "name": "Interior #2864",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/2866",
            "name": "Interior #2866",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/2872",
            "name": "“AVENGERS DISASSEMBLED” PART 3 (OF 4) Cap struggles to come to terms with his newfound feelings for the Scarlet Witch even as ho",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/65787",
            "name": "AVENGERS DISASSEMBLED: CAPTAIN AMERICA 0 cover",
            "type": "cover"
          }
          ],
          "returned": 9
        },
        "events": {
          "available": 1,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/1490/events",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/234",
            "name": "Avengers Disassembled"
          }
          ],
          "returned": 1
        }
        },
        {
        "id": 1491,
        "digitalId": 0,
        "title": "Avengers Disassembled: Iron Man (Trade Paperback)",
        "issueNumber": 0,
        "variantDescription": "",
        "description": "Some think Tony Stark has lost his battle with the bottle. Others think he can't control his violent temper. Some think he's a homicidal maniac. Even his closest friends are beginning to doubt him, wondering why he won't fend off these accusations. But Stark's self-imposed exile is cut short, as Iron Man must face off against his evil doppelganger, which has embarked on a murderous rampage aimed at those in charge of Stark Enterprises! Only one of them can remain standing. And even the victor is under threat of extinction. \r<br>Collects IRON MAN #84-89.\r<br>",
        "modified": "2010-11-11T18:01:23-0500",
        "isbn": "0-7851-1653-2",
        "upc": "5960611653-00111",
        "diamondCode": "",
        "ean": "",
        "issn": "",
        "format": "Trade Paperback",
        "pageCount": 0,
        "textObjects": [
          {
          "type": "issue_solicit_text",
          "language": "en-us",
          "text": "Some think Tony Stark has lost his battle with the bottle. Others think he can't control his violent temper. Some think he's a homicidal maniac. Even his closest friends are beginning to doubt him, wondering why he won't fend off these accusations. But Stark's self-imposed exile is cut short, as Iron Man must face off against his evil doppelganger, which has embarked on a murderous rampage aimed at those in charge of Stark Enterprises! Only one of them can remain standing. And even the victor is under threat of extinction. \r<br>Collects IRON MAN #84-89.\r<br>"
          }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/1491",
        "urls": [
          {
          "type": "detail",
          "url": "http://marvel.com/comics/collection/1491/avengers_disassembled_iron_man_trade_paperback?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0"
          }
        ],
        "series": {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/1403",
          "name": "Avengers Disassembled: Iron Man (2004)"
        },
        "variants": [],
        "collections": [],
        "collectedIssues": [],
        "dates": [
          {
          "type": "onsaleDate",
          "date": "2004-12-08T00:00:00-0500"
          },
          {
          "type": "focDate",
          "date": "-0001-11-30T00:00:00-0500"
          }
        ],
        "prices": [
          {
          "type": "printPrice",
          "price": 9.99
          }
        ],
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/10/51dd92c82225a",
          "extension": "jpg"
        },
        "images": [
          {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/10/51dd92c82225a",
          "extension": "jpg"
          },
          {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/80/4bc65a8431279",
          "extension": "jpg"
          }
        ],
        "creators": {
          "available": 4,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/1491/creators",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/creators/460",
            "name": "Tony Harris",
            "role": "penciller"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/creators/4261",
            "name": "Jorge Pereira Lucas",
            "role": "penciller"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/creators/8795",
            "name": "John Miller",
            "role": "writer"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/creators/491",
            "name": "Mark Ricketts",
            "role": "writer"
          }
          ],
          "returned": 4
        },
        "characters": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/1491/characters",
          "items": [],
          "returned": 0
        },
        "stories": {
          "available": 2,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/1491/stories",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/6763",
            "name": "Iron Man 84-89",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/65790",
            "name": "AVENGERS DISASSEMBLED: IRON MAN 0 cover",
            "type": "cover"
          }
          ],
          "returned": 2
        },
        "events": {
          "available": 1,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/1491/events",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/234",
            "name": "Avengers Disassembled"
          }
          ],
          "returned": 1
        }
        },
        {
        "id": 1481,
        "digitalId": 0,
        "title": "Avengers Disassembled: Thor (Trade Paperback)",
        "issueNumber": 0,
        "variantDescription": "",
        "description": "The End Times are here!  Ragnarok appears to have come for the gods of Asgard, and only Thor and his Avengers allies might be able to stave off that fate - but will the Thunder God be Asgard's savior, or the architect of its downfall? In search of new wisdom, Thor must repeat the ordeals of Odin - and the price may be too terrible for even an immortal to pay! Beset on all sides by treacherous foes from his past, the God of Thunder leads the tattered remnants of the forces of Asgard on a desperate quest, as the Realm Eternal burns. Collects THOR #80-85.",
        "modified": "2018-03-20T09:11:08-0400",
        "isbn": "0-7851-1599-4",
        "upc": "5960611599-00111",
        "diamondCode": "",
        "ean": "",
        "issn": "",
        "format": "Trade Paperback",
        "pageCount": 0,
        "textObjects": [
          {
          "type": "issue_solicit_text",
          "language": "en-us",
          "text": "The End Times are here!  Ragnarok appears to have come for the gods of Asgard, and only Thor and his Avengers allies might be able to stave off that fate - but will the Thunder God be Asgard's savior, or the architect of its downfall? In search of new wisdom, Thor must repeat the ordeals of Odin - and the price may be too terrible for even an immortal to pay! Beset on all sides by treacherous foes from his past, the God of Thunder leads the tattered remnants of the forces of Asgard on a desperate quest, as the Realm Eternal burns. Collects THOR #80-85."
          }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/1481",
        "urls": [
          {
          "type": "detail",
          "url": "http://marvel.com/comics/collection/1481/avengers_disassembled_thor_trade_paperback?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0"
          }
        ],
        "series": {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/1359",
          "name": "Avengers Disassembled: Thor (2004)"
        },
        "variants": [],
        "collections": [],
        "collectedIssues": [
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/comics/875",
          "name": "Thor (1998) #85"
          },
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/comics/795",
          "name": "Thor (1998) #84"
          },
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/comics/567",
          "name": "Thor (1998) #83"
          },
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/comics/599",
          "name": "Thor (1998) #82"
          },
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/comics/685",
          "name": "Thor (1998) #80"
          },
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/comics/715",
          "name": "Thor (1998) #81"
          }
        ],
        "dates": [
          {
          "type": "onsaleDate",
          "date": "2004-12-01T00:00:00-0500"
          },
          {
          "type": "focDate",
          "date": "-0001-11-30T00:00:00-0500"
          }
        ],
        "prices": [
          {
          "type": "printPrice",
          "price": 9.99
          }
        ],
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/f/50/51dd93b5b6fcb",
          "extension": "jpg"
        },
        "images": [
          {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/f/50/51dd93b5b6fcb",
          "extension": "jpg"
          },
          {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/00/4d7050ed91a5b",
          "extension": "jpg"
          },
          {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/10/4d705091ba5e5",
          "extension": "jpg"
          },
          {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/80/4cae2887156b3",
          "extension": "jpg"
          },
          {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/b0/4c7d667fe32b3",
          "extension": "jpg"
          }
        ],
        "creators": {
          "available": 7,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/1481/creators",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/creators/13457",
            "name": "Chris Eliopoulos",
            "role": "letterer"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/creators/13143",
            "name": "Vc Randy Gentile",
            "role": "letterer"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/creators/374",
            "name": "Steve Epting",
            "role": "penciller (cover)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/creators/13144",
            "name": "Michael Oeming",
            "role": "writer"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/creators/1433",
            "name": "Mike Avon Oeming",
            "role": "writer"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/creators/475",
            "name": "Laura Villari",
            "role": "colorist"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/creators/474",
            "name": "Andrea DI Vito",
            "role": "penciler"
          }
          ],
          "returned": 7
        },
        "characters": {
          "available": 1,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/1481/characters",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009664",
            "name": "Thor"
          }
          ],
          "returned": 1
        },
        "stories": {
          "available": 8,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/1481/stories",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/883",
            "name": "Interior #883",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/885",
            "name": "Interior #885",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/891",
            "name": "Interior #891",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/893",
            "name": "Interior #893",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/895",
            "name": "AVENGERS DISASSEMBLED TIE-IN! “RAGNAROK” PART 4 (OF 6) What makes a god? Is it birthright, is it happenstance, or is it in the m",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/897",
            "name": "AVENGERS DISASSEMBLED TIE-IN! \"RAGNAROK\" PART 6 (OF 6) It's the end of all that is, and you've got a ringside seat for the last ",
            "type": "interiorStory"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/6683",
            "name": "Avengers Disassembled: Thor",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/6684",
            "name": "Thor 80-85",
            "type": "interiorStory"
          }
          ],
          "returned": 8
        },
        "events": {
          "available": 1,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/1481/events",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/234",
            "name": "Avengers Disassembled"
          }
          ],
          "returned": 1
        }
        },
        {
        "id": 923,
        "digitalId": 3903,
        "title": "Avengers (1998) #503",
        "issueNumber": 503,
        "variantDescription": "",
        "description": "CHAOS\r<br>PART 4 (OF 4) \r<br>The shocking double-sized conclusion to the comic event of the year! The Avengers come face to face with the enemy that destroyed them and nothing will ever be the same again.  A story so big, a regular-sized comic co",
        "modified": "2013-11-14T11:29:06-0500",
        "isbn": "",
        "upc": "5960604458-50311",
        "diamondCode": "",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 0,
        "textObjects": [
          {
          "type": "issue_solicit_text",
          "language": "en-us",
          "text": "CHAOS\r<br>PART 4 (OF 4) \r<br>The shocking double-sized conclusion to the comic event of the year! The Avengers come face to face with the enemy that destroyed them and nothing will ever be the same again.  A story so big, a regular-sized comic co"
          }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/923",
        "urls": [
          {
          "type": "detail",
          "url": "http://marvel.com/comics/issue/923/avengers_1998_503?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0"
          },
          {
          "type": "purchase",
          "url": "http://comicstore.marvel.com/Avengers-503/digital-comic/3903?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0"
          },
          {
          "type": "reader",
          "url": "http://marvel.com/digitalcomics/view.htm?iid=3903&utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0"
          },
          {
          "type": "inAppLink",
          "url": "https://applink.marvel.com/issue/3903?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0"
          }
        ],
        "series": {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/354",
          "name": "Avengers (1998 - 2004)"
        },
        "variants": [],
        "collections": [
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/comics/5685",
          "name": "Avengers Disassembled (Hardcover)"
          },
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/comics/1703",
          "name": "Avengers Disassembled (Trade Paperback)"
          }
        ],
        "collectedIssues": [],
        "dates": [
          {
          "type": "onsaleDate",
          "date": "2004-12-01T00:00:00-0500"
          },
          {
          "type": "focDate",
          "date": "-0001-11-30T00:00:00-0500"
          },
          {
          "type": "unlimitedDate",
          "date": "2007-11-13T00:00:00-0500"
          },
          {
          "type": "digitalPurchaseDate",
          "date": "2010-09-08T00:00:00-0400"
          }
        ],
        "prices": [
          {
          "type": "printPrice",
          "price": 2.25
          },
          {
          "type": "digitalPurchasePrice",
          "price": 1.99
          }
        ],
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/d0/4f5a4f71e8dd5",
          "extension": "jpg"
        },
        "images": [
          {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/d0/4f5a4f71e8dd5",
          "extension": "jpg"
          }
        ],
        "creators": {
          "available": 5,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/923/creators",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/creators/24",
            "name": "Brian Michael Bendis",
            "role": "writer"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/creators/8504",
            "name": "Frank D'ARMATA",
            "role": "colorist"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/creators/248",
            "name": "David Finch",
            "role": "penciller (cover)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/creators/11553",
            "name": "Danny K. Miki",
            "role": "inker"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/creators/350",
            "name": "Richard Starkings",
            "role": "letterer"
          }
          ],
          "returned": 5
        },
        "characters": {
          "available": 2,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/923/characters",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009165",
            "name": "Avengers"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220",
            "name": "Captain America"
          }
          ],
          "returned": 2
        },
        "stories": {
          "available": 2,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/923/stories",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/1042",
            "name": "Avengers (1998) #503",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/1043",
            "name": "Interior #1043",
            "type": "interiorStory"
          }
          ],
          "returned": 2
        },
        "events": {
          "available": 1,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/923/events",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/234",
            "name": "Avengers Disassembled"
          }
          ],
          "returned": 1
        }
        },
        {
        "id": 912,
        "digitalId": 1858,
        "title": "Fantastic Four (1998) #519",
        "issueNumber": 519,
        "variantDescription": "",
        "description": "AVENGERS DISASSEMBLED TIE-IN! \"FOURTITUDE\" FINALE! PART 3 (OF 3) Galactus the World-Eater is coming to Earth to choose one of the Fantastic Four as his new herald -but which one?  The consequences of his choice will set the tone and scope of the series, a",
        "modified": "2018-02-19T21:24:12-0500",
        "isbn": "",
        "upc": "",
        "diamondCode": "",
        "ean": "",
        "issn": "0274-5291",
        "format": "Comic",
        "pageCount": 0,
        "textObjects": [
          {
          "type": "issue_solicit_text",
          "language": "en-us",
          "text": "AVENGERS DISASSEMBLED TIE-IN! \"FOURTITUDE\" FINALE! PART 3 (OF 3) Galactus the World-Eater is coming to Earth to choose one of the Fantastic Four as his new herald -but which one?  The consequences of his choice will set the tone and scope of the series, a"
          }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/912",
        "urls": [
          {
          "type": "detail",
          "url": "http://marvel.com/comics/issue/912/fantastic_four_1998_519?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0"
          },
          {
          "type": "reader",
          "url": "http://marvel.com/digitalcomics/view.htm?iid=1858&utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0"
          }
        ],
        "series": {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/421",
          "name": "Fantastic Four (1998 - 2012)"
        },
        "variants": [],
        "collections": [
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/comics/3107",
          "name": "Fantastic Four Vol. 3 (Hardcover)"
          }
        ],
        "collectedIssues": [],
        "dates": [
          {
          "type": "onsaleDate",
          "date": "2004-12-01T00:00:00-0500"
          },
          {
          "type": "focDate",
          "date": "-0001-11-30T00:00:00-0500"
          },
          {
          "type": "unlimitedDate",
          "date": "2007-11-13T00:00:00-0500"
          }
        ],
        "prices": [
          {
          "type": "printPrice",
          "price": 0
          }
        ],
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/0/03/5ad6509550610",
          "extension": "jpg"
        },
        "images": [
          {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/0/03/5ad6509550610",
          "extension": "jpg"
          }
        ],
        "creators": {
          "available": 9,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/912/creators",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/creators/2133",
            "name": "Tom Brevoort",
            "role": "editor"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/creators/5248",
            "name": "Molly Lazer",
            "role": "editor"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/creators/4371",
            "name": "Andy Schmidt",
            "role": "editor"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/creators/5258",
            "name": "Nicole Wiley",
            "role": "editor"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/creators/8635",
            "name": "Randy Gentile",
            "role": "letterer"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/creators/438",
            "name": "Karl Kesel",
            "role": "inker"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/creators/479",
            "name": "Paul Mounts",
            "role": "colorist"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/creators/119",
            "name": "Mark Waid",
            "role": "writer"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/creators/206",
            "name": "Mike Wieringo",
            "role": "penciller (cover)"
          }
          ],
          "returned": 9
        },
        "characters": {
          "available": 6,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/912/characters",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009299",
            "name": "Fantastic Four"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009312",
            "name": "Galactus"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009356",
            "name": "Human Torch"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009366",
            "name": "Invisible Woman"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009459",
            "name": "Mr. Fantastic"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009662",
            "name": "Thing"
          }
          ],
          "returned": 6
        },
        "stories": {
          "available": 2,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/912/stories",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/924",
            "name": "Fantastic Four (1998) #519",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/925",
            "name": "AVENGERS DISASSEMBLED TIE-IN! \"FOURTITUDE\" FINALE! PART 3 (OF 3) Galactus the World-Eater is coming to Earth to choose one of th",
            "type": "interiorStory"
          }
          ],
          "returned": 2
        },
        "events": {
          "available": 1,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/912/events",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/234",
            "name": "Avengers Disassembled"
          }
          ],
          "returned": 1
        }
        },
        {
        "id": 875,
        "digitalId": 7246,
        "title": "Thor (1998) #85",
        "issueNumber": 85,
        "variantDescription": "",
        "description": "AVENGERS DISASSEMBLED TIE-IN! \"RAGNAROK\" PART 6 (OF 6) It's the end of all that is, and you've got a ringside seat for the last day of the Norse Gods, as Thor struggles to break the god cycle once and for all!  You must read this, True Believer - and here",
        "modified": "2014-07-29T14:49:15-0400",
        "isbn": "",
        "upc": "75960603506908511",
        "diamondCode": "",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 0,
        "textObjects": [
          {
          "type": "issue_solicit_text",
          "language": "en-us",
          "text": "AVENGERS DISASSEMBLED TIE-IN! \"RAGNAROK\" PART 6 (OF 6) It's the end of all that is, and you've got a ringside seat for the last day of the Norse Gods, as Thor struggles to break the god cycle once and for all!  You must read this, True Believer - and here"
          }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/875",
        "urls": [
          {
          "type": "detail",
          "url": "http://marvel.com/comics/issue/875/thor_1998_85?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0"
          },
          {
          "type": "reader",
          "url": "http://marvel.com/digitalcomics/view.htm?iid=7246&utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0"
          }
        ],
        "series": {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/581",
          "name": "Thor (1998 - 2004)"
        },
        "variants": [],
        "collections": [
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/comics/1481",
          "name": "Avengers Disassembled: Thor (Trade Paperback)"
          }
        ],
        "collectedIssues": [],
        "dates": [
          {
          "type": "onsaleDate",
          "date": "2004-12-01T00:00:00-0500"
          },
          {
          "type": "focDate",
          "date": "-0001-11-30T00:00:00-0500"
          },
          {
          "type": "unlimitedDate",
          "date": "2009-01-22T00:00:00-0500"
          }
        ],
        "prices": [
          {
          "type": "printPrice",
          "price": 0
          }
        ],
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/f/30/59cbd22f71dcb",
          "extension": "jpg"
        },
        "images": [
          {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/f/30/59cbd22f71dcb",
          "extension": "jpg"
          },
          {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/f/d0/4bc6751540214",
          "extension": "jpg"
          }
        ],
        "creators": {
          "available": 4,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/875/creators",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/creators/13143",
            "name": "Vc Randy Gentile",
            "role": "letterer"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/creators/13144",
            "name": "Michael Oeming",
            "role": "writer"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/creators/475",
            "name": "Laura Villari",
            "role": "colorist"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/creators/474",
            "name": "Andrea DI Vito",
            "role": "penciler"
          }
          ],
          "returned": 4
        },
        "characters": {
          "available": 1,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/875/characters",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009664",
            "name": "Thor"
          }
          ],
          "returned": 1
        },
        "stories": {
          "available": 2,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/875/stories",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/896",
            "name": "THOR (1998) #85",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/897",
            "name": "AVENGERS DISASSEMBLED TIE-IN! \"RAGNAROK\" PART 6 (OF 6) It's the end of all that is, and you've got a ringside seat for the last ",
            "type": "interiorStory"
          }
          ],
          "returned": 2
        },
        "events": {
          "available": 1,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/875/events",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/234",
            "name": "Avengers Disassembled"
          }
          ],
          "returned": 1
        }
        },
        {
        "id": 90,
        "digitalId": 5251,
        "title": "Avengers Finale (2004) #1",
        "issueNumber": 1,
        "variantDescription": "",
        "description": "AVENGERS DISASSEMBLED EPILOGUE!\r\n<br>In the wreckage of Avengers Mansion, Earth's Mightiest Heroes meet for the very last time! It's the end of an era, brought to you by Brian Bendis and an all-star cast of artists - including names like GEORGE PEREZ, STEVE EPTING, JIM CHEUNG, ERIC POWELL, DARICK ROBERTSON, MIKE OEMING, ALEX MALEEV, DAVID MACK and many more! Surely, there isn't a dry eye in the House of Ideas, True Believer.\r\n<br>",
        "modified": "2012-03-27T17:49:35-0400",
        "isbn": "",
        "upc": "5960605642-00111",
        "diamondCode": "",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 0,
        "textObjects": [
          {
          "type": "issue_solicit_text",
          "language": "en-us",
          "text": "AVENGERS DISASSEMBLED EPILOGUE!\r\n<br>In the wreckage of Avengers Mansion, Earth's Mightiest Heroes meet for the very last time! It's the end of an era, brought to you by Brian Bendis and an all-star cast of artists - including names like GEORGE PEREZ, STEVE EPTING, JIM CHEUNG, ERIC POWELL, DARICK ROBERTSON, MIKE OEMING, ALEX MALEEV, DAVID MACK and many more! Surely, there isn't a dry eye in the House of Ideas, True Believer.\r\n<br>"
          }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/90",
        "urls": [
          {
          "type": "detail",
          "url": "http://marvel.com/comics/issue/90/avengers_finale_2004_1?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0"
          },
          {
          "type": "reader",
          "url": "http://marvel.com/digitalcomics/view.htm?iid=5251&utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0"
          }
        ],
        "series": {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/829",
          "name": "Avengers Finale (2004)"
        },
        "variants": [],
        "collections": [
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/comics/5685",
          "name": "Avengers Disassembled (Hardcover)"
          },
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/comics/1703",
          "name": "Avengers Disassembled (Trade Paperback)"
          }
        ],
        "collectedIssues": [],
        "dates": [
          {
          "type": "onsaleDate",
          "date": "2004-11-10T00:00:00-0500"
          },
          {
          "type": "focDate",
          "date": "-0001-11-30T00:00:00-0500"
          },
          {
          "type": "unlimitedDate",
          "date": "2008-06-17T00:00:00-0400"
          }
        ],
        "prices": [
          {
          "type": "printPrice",
          "price": 3.5
          }
        ],
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/5/b0/51e045c27a7b0",
          "extension": "jpg"
        },
        "images": [
          {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/5/b0/51e045c27a7b0",
          "extension": "jpg"
          },
          {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/20/4bc6b067369a0",
          "extension": "jpg"
          }
        ],
        "creators": {
          "available": 2,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/90/creators",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/creators/314",
            "name": "Neal Adams",
            "role": "penciller (cover)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/creators/24",
            "name": "Brian Michael Bendis",
            "role": "writer"
          }
          ],
          "returned": 2
        },
        "characters": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/90/characters",
          "items": [],
          "returned": 0
        },
        "stories": {
          "available": 2,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/90/stories",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/4221",
            "name": "Avengers Finale (2004) #1",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/4222",
            "name": "1 of 1 - Disassembled Epilogue",
            "type": "interiorStory"
          }
          ],
          "returned": 2
        },
        "events": {
          "available": 1,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/90/events",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/234",
            "name": "Avengers Disassembled"
          }
          ],
          "returned": 1
        }
        },
        {
        "id": 826,
        "digitalId": 1857,
        "title": "Fantastic Four (1998) #518",
        "issueNumber": 518,
        "variantDescription": "",
        "description": "AVENGERS DISASSEMBLED TIE-IN! \"FOURTITUDE\" PART 2 (OF 3) With public opinion of the FF at an all-time low and with all of Manhattan endangered by a mysterious alien overlord, which member of the team will make a decision that will radically change the Fan",
        "modified": "2018-02-19T21:24:10-0500",
        "isbn": "",
        "upc": "",
        "diamondCode": "",
        "ean": "",
        "issn": "0274-5291",
        "format": "Comic",
        "pageCount": 0,
        "textObjects": [
          {
          "type": "issue_solicit_text",
          "language": "en-us",
          "text": "AVENGERS DISASSEMBLED TIE-IN! \"FOURTITUDE\" PART 2 (OF 3) With public opinion of the FF at an all-time low and with all of Manhattan endangered by a mysterious alien overlord, which member of the team will make a decision that will radically change the Fan"
          }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/826",
        "urls": [
          {
          "type": "detail",
          "url": "http://marvel.com/comics/issue/826/fantastic_four_1998_518?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0"
          },
          {
          "type": "reader",
          "url": "http://marvel.com/digitalcomics/view.htm?iid=1857&utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0"
          }
        ],
        "series": {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/421",
          "name": "Fantastic Four (1998 - 2012)"
        },
        "variants": [],
        "collections": [
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/comics/3107",
          "name": "Fantastic Four Vol. 3 (Hardcover)"
          }
        ],
        "collectedIssues": [],
        "dates": [
          {
          "type": "onsaleDate",
          "date": "2004-11-01T00:00:00-0500"
          },
          {
          "type": "focDate",
          "date": "-0001-11-30T00:00:00-0500"
          },
          {
          "type": "unlimitedDate",
          "date": "2007-11-13T00:00:00-0500"
          }
        ],
        "prices": [
          {
          "type": "printPrice",
          "price": 0
          }
        ],
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/30/5ad64874bacd1",
          "extension": "jpg"
        },
        "images": [
          {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/30/5ad64874bacd1",
          "extension": "jpg"
          }
        ],
        "creators": {
          "available": 9,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/826/creators",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/creators/2133",
            "name": "Tom Brevoort",
            "role": "editor"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/creators/5248",
            "name": "Molly Lazer",
            "role": "editor"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/creators/4371",
            "name": "Andy Schmidt",
            "role": "editor"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/creators/5258",
            "name": "Nicole Wiley",
            "role": "editor"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/creators/8635",
            "name": "Randy Gentile",
            "role": "letterer"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/creators/438",
            "name": "Karl Kesel",
            "role": "inker"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/creators/479",
            "name": "Paul Mounts",
            "role": "colorist"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/creators/119",
            "name": "Mark Waid",
            "role": "writer"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/creators/206",
            "name": "Mike Wieringo",
            "role": "penciller (cover)"
          }
          ],
          "returned": 9
        },
        "characters": {
          "available": 8,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/826/characters",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009299",
            "name": "Fantastic Four"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009539",
            "name": "Franklin Richards"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009312",
            "name": "Galactus"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009356",
            "name": "Human Torch"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009366",
            "name": "Invisible Woman"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009459",
            "name": "Mr. Fantastic"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009662",
            "name": "Thing"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009525",
            "name": "Valeria Richards"
          }
          ],
          "returned": 8
        },
        "stories": {
          "available": 2,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/826/stories",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/922",
            "name": "Fantastic Four (1998) #518",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/923",
            "name": "AVENGERS DISASSEMBLED TIE-IN! \"FOURTITUDE\" PART 2 (OF 3) With public opinion of the FF at an all-time low and with all of Manhat",
            "type": "interiorStory"
          }
          ],
          "returned": 2
        },
        "events": {
          "available": 1,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/826/events",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/234",
            "name": "Avengers Disassembled"
          }
          ],
          "returned": 1
        }
        },
        {
        "id": 795,
        "digitalId": 7245,
        "title": "Thor (1998) #84",
        "issueNumber": 84,
        "variantDescription": "",
        "description": "AVENGERS DISASSEMBLED TIE-IN! \"RAGNAROK\" PART 4 (OF 6) What makes a god? Is it birthright, is it happenstance, or is it in the making? Thor finds out the hard way as he seeks answers on how to face the coming end of his people. Thor struggles with the kno",
        "modified": "2013-11-14T11:29:20-0500",
        "isbn": "",
        "upc": "75960603506908411",
        "diamondCode": "",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 0,
        "textObjects": [
          {
          "type": "issue_solicit_text",
          "language": "en-us",
          "text": "AVENGERS DISASSEMBLED TIE-IN! \"RAGNAROK\" PART 4 (OF 6) What makes a god? Is it birthright, is it happenstance, or is it in the making? Thor finds out the hard way as he seeks answers on how to face the coming end of his people. Thor struggles with the kno"
          }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/795",
        "urls": [
          {
          "type": "detail",
          "url": "http://marvel.com/comics/issue/795/thor_1998_84?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0"
          },
          {
          "type": "reader",
          "url": "http://marvel.com/digitalcomics/view.htm?iid=7245&utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0"
          }
        ],
        "series": {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/581",
          "name": "Thor (1998 - 2004)"
        },
        "variants": [],
        "collections": [
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/comics/1481",
          "name": "Avengers Disassembled: Thor (Trade Paperback)"
          }
        ],
        "collectedIssues": [],
        "dates": [
          {
          "type": "onsaleDate",
          "date": "2004-11-01T00:00:00-0500"
          },
          {
          "type": "focDate",
          "date": "-0001-11-30T00:00:00-0500"
          },
          {
          "type": "unlimitedDate",
          "date": "2009-01-15T00:00:00-0500"
          }
        ],
        "prices": [
          {
          "type": "printPrice",
          "price": 0
          }
        ],
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/60/59cbcc80a82d5",
          "extension": "jpg"
        },
        "images": [
          {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/60/59cbcc80a82d5",
          "extension": "jpg"
          },
          {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/60/4c893560aa805",
          "extension": "jpg"
          }
        ],
        "creators": {
          "available": 4,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/795/creators",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/creators/13457",
            "name": "Chris Eliopoulos",
            "role": "letterer"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/creators/13144",
            "name": "Michael Oeming",
            "role": "writer"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/creators/475",
            "name": "Laura Villari",
            "role": "colorist"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/creators/474",
            "name": "Andrea DI Vito",
            "role": "penciler"
          }
          ],
          "returned": 4
        },
        "characters": {
          "available": 1,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/795/characters",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009664",
            "name": "Thor"
          }
          ],
          "returned": 1
        },
        "stories": {
          "available": 2,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/795/stories",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/894",
            "name": "THOR (1998) #84",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/895",
            "name": "AVENGERS DISASSEMBLED TIE-IN! “RAGNAROK” PART 4 (OF 6) What makes a god? Is it birthright, is it happenstance, or is it in the m",
            "type": "interiorStory"
          }
          ],
          "returned": 2
        },
        "events": {
          "available": 1,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/795/events",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/234",
            "name": "Avengers Disassembled"
          }
          ],
          "returned": 1
        }
        },
        {
        "id": 845,
        "digitalId": 3902,
        "title": "Avengers (1998) #502",
        "issueNumber": 502,
        "variantDescription": "",
        "description": "AVENGERS DISASSEMBLED CONTINUES!  PART 3 (OF 4)  There's been a lot of buzz around this big Avengers event and this issue is what everyone is waiting for. Who will fall at the hands of the Avengers' greatest enemy?  Guest-starring: every Avenger in the hi",
        "modified": "2017-08-16T15:35:35-0400",
        "isbn": "",
        "upc": "5960604458-50211",
        "diamondCode": "",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 0,
        "textObjects": [
          {
          "type": "issue_solicit_text",
          "language": "en-us",
          "text": "AVENGERS DISASSEMBLED CONTINUES!  PART 3 (OF 4)  There's been a lot of buzz around this big Avengers event and this issue is what everyone is waiting for. Who will fall at the hands of the Avengers' greatest enemy?  Guest-starring: every Avenger in the hi"
          }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/845",
        "urls": [
          {
          "type": "detail",
          "url": "http://marvel.com/comics/issue/845/avengers_1998_502?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0"
          },
          {
          "type": "purchase",
          "url": "http://comicstore.marvel.com/Avengers-502/digital-comic/3902?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0"
          },
          {
          "type": "reader",
          "url": "http://marvel.com/digitalcomics/view.htm?iid=3902&utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0"
          },
          {
          "type": "inAppLink",
          "url": "https://applink.marvel.com/issue/3902?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0"
          }
        ],
        "series": {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/354",
          "name": "Avengers (1998 - 2004)"
        },
        "variants": [],
        "collections": [
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/comics/5685",
          "name": "Avengers Disassembled (Hardcover)"
          },
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/comics/1703",
          "name": "Avengers Disassembled (Trade Paperback)"
          }
        ],
        "collectedIssues": [],
        "dates": [
          {
          "type": "onsaleDate",
          "date": "2004-11-01T00:00:00-0500"
          },
          {
          "type": "focDate",
          "date": "-0001-11-30T00:00:00-0500"
          },
          {
          "type": "unlimitedDate",
          "date": "2007-11-13T00:00:00-0500"
          },
          {
          "type": "digitalPurchaseDate",
          "date": "2010-09-08T00:00:00-0400"
          }
        ],
        "prices": [
          {
          "type": "printPrice",
          "price": 2.25
          },
          {
          "type": "digitalPurchasePrice",
          "price": 1.99
          }
        ],
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/7/50/4f58d176985bc",
          "extension": "jpg"
        },
        "images": [
          {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/7/50/4f58d176985bc",
          "extension": "jpg"
          }
        ],
        "creators": {
          "available": 5,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/845/creators",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/creators/24",
            "name": "Brian Michael Bendis",
            "role": "writer"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/creators/8504",
            "name": "Frank D'ARMATA",
            "role": "colorist"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/creators/248",
            "name": "David Finch",
            "role": "penciller (cover)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/creators/11553",
            "name": "Danny K. Miki",
            "role": "inker"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/creators/350",
            "name": "Richard Starkings",
            "role": "letterer"
          }
          ],
          "returned": 5
        },
        "characters": {
          "available": 6,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/845/characters",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009165",
            "name": "Avengers"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220",
            "name": "Captain America"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009338",
            "name": "Hawkeye"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009368",
            "name": "Iron Man"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009562",
            "name": "Scarlet Witch"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009707",
            "name": "Wasp"
          }
          ],
          "returned": 6
        },
        "stories": {
          "available": 2,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/845/stories",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/1040",
            "name": "Avengers (1998) #502",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/1041",
            "name": "Avengers (1998) #502",
            "type": "interiorStory"
          }
          ],
          "returned": 2
        },
        "events": {
          "available": 1,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/845/events",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/234",
            "name": "Avengers Disassembled"
          }
          ],
          "returned": 1
        }
        },
        {
        "id": 885,
        "digitalId": 6914,
        "title": "Spectacular Spider-Man (2003) #20",
        "issueNumber": 20,
        "variantDescription": "",
        "description": "AVENGERS DISASSEMBLED TIE-IN! PART 4 (OF 4) \r<br>At his lowest ebb, struggling to hold onto the last vestige of the humanity buried deep inside him, Spidey is lent a helping hand by one of Earth's Mightiest Heroes!",
        "modified": "2016-09-23T13:35:44-0400",
        "isbn": "",
        "upc": "5960605427-02011",
        "diamondCode": "",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 0,
        "textObjects": [
          {
          "type": "issue_solicit_text",
          "language": "en-us",
          "text": "AVENGERS DISASSEMBLED TIE-IN! PART 4 (OF 4) \r<br>At his lowest ebb, struggling to hold onto the last vestige of the humanity buried deep inside him, Spidey is lent a helping hand by one of Earth's Mightiest Heroes!"
          }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/885",
        "urls": [
          {
          "type": "detail",
          "url": "http://marvel.com/comics/issue/885/spectacular_spider-man_2003_20?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0"
          },
          {
          "type": "reader",
          "url": "http://marvel.com/digitalcomics/view.htm?iid=6914&utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0"
          }
        ],
        "series": {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/556",
          "name": "Spectacular Spider-Man (2003 - 2005)"
        },
        "variants": [],
        "collections": [
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/comics/1487",
          "name": "Spectacular Spider-Man Vol. 4: Disassembled (Trade Paperback)"
          }
        ],
        "collectedIssues": [],
        "dates": [
          {
          "type": "onsaleDate",
          "date": "2004-10-20T00:00:00-0400"
          },
          {
          "type": "focDate",
          "date": "-0001-11-30T00:00:00-0500"
          },
          {
          "type": "unlimitedDate",
          "date": "2008-10-06T00:00:00-0400"
          }
        ],
        "prices": [
          {
          "type": "printPrice",
          "price": 2.25
          }
        ],
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/a0/57e567e20c6cc",
          "extension": "jpg"
        },
        "images": [
          {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/a0/57e567e20c6cc",
          "extension": "jpg"
          },
          {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/a/00/4bc674e67fb65",
          "extension": "jpg"
          }
        ],
        "creators": {
          "available": 4,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/885/creators",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/creators/544",
            "name": "Wayne Faucher",
            "role": "inker"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/creators/55",
            "name": "Paul Jenkins",
            "role": "writer"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/creators/361",
            "name": "Cory Petit",
            "role": "letterer"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/creators/72",
            "name": "Humberto Ramos",
            "role": "penciller (cover)"
          }
          ],
          "returned": 4
        },
        "characters": {
          "available": 1,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/885/characters",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009610",
            "name": "Spider-Man"
          }
          ],
          "returned": 1
        },
        "stories": {
          "available": 2,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/885/stories",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/1870",
            "name": "AVENGERS DISASSEMBLED TIE-IN! PART 4 (OF 4) At his lowest ebb, struggling to hold onto the last vestige of the humanity buried d",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/1871",
            "name": "AVENGERS DISASSEMBLED TIE-IN! PART 4 (OF 4) At his lowest ebb, struggling to hold onto the last vestige of the humanity buried d",
            "type": "interiorStory"
          }
          ],
          "returned": 2
        },
        "events": {
          "available": 1,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/885/events",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/234",
            "name": "Avengers Disassembled"
          }
          ],
          "returned": 1
        }
        },
        {
        "id": 893,
        "digitalId": 3298,
        "title": "Captain America (2002) #32",
        "issueNumber": 32,
        "variantDescription": "",
        "description": "AVENGERS DISASSEMBLED TIE-IN! PART 4 (OF 4) After months of careful planning, the Red Skull makes his move. Captain America and his old sparring partner are in for the most grueling battle they've ever had.  The Red Skull has had some help from a certain",
        "modified": "2014-07-03T10:18:52-0400",
        "isbn": "",
        "upc": "5960605153-03211",
        "diamondCode": "",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 0,
        "textObjects": [
          {
          "type": "issue_solicit_text",
          "language": "en-us",
          "text": "AVENGERS DISASSEMBLED TIE-IN! PART 4 (OF 4) After months of careful planning, the Red Skull makes his move. Captain America and his old sparring partner are in for the most grueling battle they've ever had.  The Red Skull has had some help from a certain"
          }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/893",
        "urls": [
          {
          "type": "detail",
          "url": "http://marvel.com/comics/issue/893/captain_america_2002_32?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0"
          },
          {
          "type": "purchase",
          "url": "http://comicstore.marvel.com/Captain-America-32/digital-comic/3298?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0"
          },
          {
          "type": "reader",
          "url": "http://marvel.com/digitalcomics/view.htm?iid=3298&utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0"
          },
          {
          "type": "inAppLink",
          "url": "https://applink.marvel.com/issue/3298?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0"
          }
        ],
        "series": {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/485",
          "name": "Captain America (2002 - 2004)"
        },
        "variants": [],
        "collections": [
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/comics/1490",
          "name": "Avengers Disassembled: Captain America (Trade Paperback)"
          }
        ],
        "collectedIssues": [],
        "dates": [
          {
          "type": "onsaleDate",
          "date": "2004-10-13T00:00:00-0400"
          },
          {
          "type": "focDate",
          "date": "-0001-11-30T00:00:00-0500"
          },
          {
          "type": "unlimitedDate",
          "date": "2007-04-28T00:00:00-0400"
          },
          {
          "type": "digitalPurchaseDate",
          "date": "2014-03-18T00:00:00-0400"
          }
        ],
        "prices": [
          {
          "type": "printPrice",
          "price": 2.99
          },
          {
          "type": "digitalPurchasePrice",
          "price": 1.99
          }
        ],
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/70/56e700dbbe5f7",
          "extension": "jpg"
        },
        "images": [
          {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/70/56e700dbbe5f7",
          "extension": "jpg"
          }
        ],
        "creators": {
          "available": 4,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/893/creators",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/creators/5106",
            "name": "Scot Eaton",
            "role": "penciller"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/creators/8635",
            "name": "Randy Gentile",
            "role": "letterer"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/creators/476",
            "name": "Drew Geraci",
            "role": "inker"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/creators/10432",
            "name": "Dave Johnson",
            "role": "penciller (cover)"
          }
          ],
          "returned": 4
        },
        "characters": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/893/characters",
          "items": [],
          "returned": 0
        },
        "stories": {
          "available": 2,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/893/stories",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/1685",
            "name": "AVENGERS DISASSEMBLED TIE-IN! PART 4 (OF 4) After months of careful planning, the Red Skull makes his move. Captain America and ",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/1686",
            "name": "AVENGERS DISASSEMBLED TIE-IN! PART 4 (OF 4) After months of careful planning, the Red Skull makes his move. Captain America and ",
            "type": "interiorStory"
          }
          ],
          "returned": 2
        },
        "events": {
          "available": 1,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/893/events",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/234",
            "name": "Avengers Disassembled"
          }
          ],
          "returned": 1
        }
        },
        {
        "id": 896,
        "digitalId": 6223,
        "title": "Iron Man (1998) #89",
        "issueNumber": 89,
        "variantDescription": "",
        "description": "THE SINGULARITY PART 4 The battle between Iron Man and his mysterious doppelganger rages on! Even if Stark makes it out of this one alive, he may not survive what happens next!",
        "modified": "2012-03-27T17:52:00-0400",
        "isbn": "",
        "upc": "5960604457-08911",
        "diamondCode": "",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 0,
        "textObjects": [
          {
          "type": "issue_preview_text",
          "language": "en-us",
          "text": "THE SINGULARITY PART 4 The battle between Iron Man and his mysterious doppelganger rages on! Even if Stark makes it out of this one alive, he may not survive what happens next!"
          },
          {
          "type": "issue_solicit_text",
          "language": "en-us",
          "text": "\"THE SINGULARITY\" CONCLUSION! PART 4 (OF 4) The battle rages on between Iron Man and his doppelganger, but only one of them can remain standing. And even the victor is under threat of extinction. As \"The Singularity\" concludes, a new chapter in the Iron M"
          }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/896",
        "urls": [
          {
          "type": "detail",
          "url": "http://marvel.com/comics/issue/896/iron_man_1998_89?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0"
          },
          {
          "type": "purchase",
          "url": "http://comicstore.marvel.com/Iron-Man-89/digital-comic/6223?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0"
          },
          {
          "type": "reader",
          "url": "http://marvel.com/digitalcomics/view.htm?iid=6223&utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0"
          },
          {
          "type": "inAppLink",
          "url": "https://applink.marvel.com/issue/6223?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0"
          }
        ],
        "series": {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/2572",
          "name": "Iron Man (1998 - 2004)"
        },
        "variants": [],
        "collections": [],
        "collectedIssues": [],
        "dates": [
          {
          "type": "onsaleDate",
          "date": "2004-10-13T00:00:00-0400"
          },
          {
          "type": "focDate",
          "date": "-0001-11-30T00:00:00-0500"
          },
          {
          "type": "unlimitedDate",
          "date": "2008-10-03T00:00:00-0400"
          },
          {
          "type": "digitalPurchaseDate",
          "date": "2010-08-17T00:00:00-0400"
          }
        ],
        "prices": [
          {
          "type": "printPrice",
          "price": 2.99
          },
          {
          "type": "digitalPurchasePrice",
          "price": 1.99
          }
        ],
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/8/d0/4d2511fc3b7f0",
          "extension": "jpg"
        },
        "images": [
          {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/d0/4bc673758b4a8",
          "extension": "jpg"
          }
        ],
        "creators": {
          "available": 6,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/896/creators",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/creators/492",
            "name": "Tom Feister",
            "role": "inker"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/creators/8635",
            "name": "Randy Gentile",
            "role": "letterer"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/creators/460",
            "name": "Tony Harris",
            "role": "penciller"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/creators/490",
            "name": "Pat Lee",
            "role": "penciller (cover)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/creators/493",
            "name": "J. D. Mettler",
            "role": "colorist"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/creators/491",
            "name": "Mark Ricketts",
            "role": "writer"
          }
          ],
          "returned": 6
        },
        "characters": {
          "available": 1,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/896/characters",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009368",
            "name": "Iron Man"
          }
          ],
          "returned": 1
        },
        "stories": {
          "available": 2,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/896/stories",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/1003",
            "name": "\"THE SINGULARITY\" CONCLUSION! PART 4 (OF 4) The battle rages on between Iron Man and his doppelganger, but only one of them can ",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/1004",
            "name": "\"THE SINGULARITY\" CONCLUSION! PART 4 (OF 4) The battle rages on between Iron Man and his doppelganger, but only one of them can ",
            "type": "interiorStory"
          }
          ],
          "returned": 2
        },
        "events": {
          "available": 1,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/896/events",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/234",
            "name": "Avengers Disassembled"
          }
          ],
          "returned": 1
        }
        },
        {
        "id": 767,
        "digitalId": 3901,
        "title": "Avengers (1998) #501",
        "issueNumber": 501,
        "variantDescription": "",
        "description": "\"AVENGERS DISASSEMBLED\" PART 2 (OF 4) GUEST-STARRING EVERY AVENGER...EVER!! The worst day in Avengers history continues, as the team tries to deal with the shocking tragedy around them. Who is behind this, and why? Will it tear the team apart? This is the comic event of the year--do not miss out!",
        "modified": "2013-11-14T11:28:59-0500",
        "isbn": "",
        "upc": "5960604458-50111",
        "diamondCode": "",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 0,
        "textObjects": [
          {
          "type": "issue_solicit_text",
          "language": "en-us",
          "text": "\"AVENGERS DISASSEMBLED\" PART 2 (OF 4) GUEST-STARRING EVERY AVENGER...EVER!! The worst day in Avengers history continues, as the team tries to deal with the shocking tragedy around them. Who is behind this, and why? Will it tear the team apart? This is the comic event of the year--do not miss out!"
          }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/767",
        "urls": [
          {
          "type": "detail",
          "url": "http://marvel.com/comics/issue/767/avengers_1998_501?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0"
          },
          {
          "type": "purchase",
          "url": "http://comicstore.marvel.com/Avengers-501/digital-comic/3901?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0"
          },
          {
          "type": "reader",
          "url": "http://marvel.com/digitalcomics/view.htm?iid=3901&utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0"
          },
          {
          "type": "inAppLink",
          "url": "https://applink.marvel.com/issue/3901?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0"
          }
        ],
        "series": {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/354",
          "name": "Avengers (1998 - 2004)"
        },
        "variants": [],
        "collections": [
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/comics/5685",
          "name": "Avengers Disassembled (Hardcover)"
          },
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/comics/1703",
          "name": "Avengers Disassembled (Trade Paperback)"
          }
        ],
        "collectedIssues": [],
        "dates": [
          {
          "type": "onsaleDate",
          "date": "2004-10-01T00:00:00-0400"
          },
          {
          "type": "focDate",
          "date": "-0001-11-30T00:00:00-0500"
          },
          {
          "type": "unlimitedDate",
          "date": "2007-11-13T00:00:00-0500"
          },
          {
          "type": "digitalPurchaseDate",
          "date": "2010-09-08T00:00:00-0400"
          }
        ],
        "prices": [
          {
          "type": "printPrice",
          "price": 2.25
          },
          {
          "type": "digitalPurchasePrice",
          "price": 1.99
          }
        ],
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/8/c0/4f5a50236ebb2",
          "extension": "jpg"
        },
        "images": [
          {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/8/c0/4f5a50236ebb2",
          "extension": "jpg"
          }
        ],
        "creators": {
          "available": 4,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/767/creators",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/creators/24",
            "name": "Brian Michael Bendis",
            "role": "writer"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/creators/8504",
            "name": "Frank D'ARMATA",
            "role": "colorist"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/creators/248",
            "name": "David Finch",
            "role": "penciller (cover)"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/creators/11553",
            "name": "Danny K. Miki",
            "role": "inker"
          }
          ],
          "returned": 4
        },
        "characters": {
          "available": 1,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/767/characters",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009165",
            "name": "Avengers"
          }
          ],
          "returned": 1
        },
        "stories": {
          "available": 2,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/767/stories",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/1038",
            "name": "Avengers (1998) #501",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/1039",
            "name": "Interior #1039",
            "type": "interiorStory"
          }
          ],
          "returned": 2
        },
        "events": {
          "available": 1,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/767/events",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/234",
            "name": "Avengers Disassembled"
          }
          ],
          "returned": 1
        }
        },
        {
        "id": 748,
        "digitalId": 1856,
        "title": "Fantastic Four (1998) #517",
        "issueNumber": 517,
        "variantDescription": "",
        "description": "AVENGERS DISASSEMBLED TIE-IN! \"FOURTITUDE\" PART 1 (OF 3) The FF goes \"widescreen\" in a tale of epic scope and proportion as Manhattan is cut off from the rest of the world by a fleet of miles-high alien spacecraft--and that's just the beginning!  With the Avengers in disarray, New York reluctantly turns to the disenfranchised Fantastic Four, the only heroes in town, to save them--but where to even start?",
        "modified": "2018-02-19T21:24:09-0500",
        "isbn": "",
        "upc": "",
        "diamondCode": "",
        "ean": "",
        "issn": "0274-5291",
        "format": "Comic",
        "pageCount": 0,
        "textObjects": [
          {
          "type": "issue_solicit_text",
          "language": "en-us",
          "text": "AVENGERS DISASSEMBLED TIE-IN! \"FOURTITUDE\" PART 1 (OF 3) The FF goes \"widescreen\" in a tale of epic scope and proportion as Manhattan is cut off from the rest of the world by a fleet of miles-high alien spacecraft--and that's just the beginning!  With the Avengers in disarray, New York reluctantly turns to the disenfranchised Fantastic Four, the only heroes in town, to save them--but where to even start?"
          }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/748",
        "urls": [
          {
          "type": "detail",
          "url": "http://marvel.com/comics/issue/748/fantastic_four_1998_517?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0"
          },
          {
          "type": "reader",
          "url": "http://marvel.com/digitalcomics/view.htm?iid=1856&utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0"
          }
        ],
        "series": {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/421",
          "name": "Fantastic Four (1998 - 2012)"
        },
        "variants": [],
        "collections": [
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/comics/3107",
          "name": "Fantastic Four Vol. 3 (Hardcover)"
          }
        ],
        "collectedIssues": [],
        "dates": [
          {
          "type": "onsaleDate",
          "date": "2004-10-01T00:00:00-0400"
          },
          {
          "type": "focDate",
          "date": "-0001-11-30T00:00:00-0500"
          },
          {
          "type": "unlimitedDate",
          "date": "2007-11-13T00:00:00-0500"
          }
        ],
        "prices": [
          {
          "type": "printPrice",
          "price": 0
          }
        ],
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/10/5ad6402e54f24",
          "extension": "jpg"
        },
        "images": [
          {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/10/5ad6402e54f24",
          "extension": "jpg"
          }
        ],
        "creators": {
          "available": 8,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/748/creators",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/creators/2133",
            "name": "Tom Brevoort",
            "role": "editor"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/creators/4371",
            "name": "Andy Schmidt",
            "role": "editor"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/creators/5258",
            "name": "Nicole Wiley",
            "role": "editor"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/creators/8635",
            "name": "Randy Gentile",
            "role": "letterer"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/creators/438",
            "name": "Karl Kesel",
            "role": "inker"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/creators/479",
            "name": "Paul Mounts",
            "role": "colorist"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/creators/119",
            "name": "Mark Waid",
            "role": "writer"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/creators/206",
            "name": "Mike Wieringo",
            "role": "penciller (cover)"
          }
          ],
          "returned": 8
        },
        "characters": {
          "available": 7,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/748/characters",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009299",
            "name": "Fantastic Four"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009539",
            "name": "Franklin Richards"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009356",
            "name": "Human Torch"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009366",
            "name": "Invisible Woman"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009459",
            "name": "Mr. Fantastic"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009662",
            "name": "Thing"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009525",
            "name": "Valeria Richards"
          }
          ],
          "returned": 7
        },
        "stories": {
          "available": 2,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/748/stories",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/920",
            "name": "Fantastic Four (1998) #517",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/921",
            "name": "Interior #921",
            "type": "interiorStory"
          }
          ],
          "returned": 2
        },
        "events": {
          "available": 1,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/748/events",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/234",
            "name": "Avengers Disassembled"
          }
          ],
          "returned": 1
        }
        },
        {
        "id": 567,
        "digitalId": 7244,
        "title": "Thor (1998) #83",
        "issueNumber": 83,
        "variantDescription": "",
        "description": "AVENGERS DISASSEMBLED TIE-IN! \"RAGNAROK\" PART 3 (OF 6) Beset on all sides by treacherous foes from his past, the God of Thunder leads the tattered remnants of the forces of Asgard on a desperate quest, as the Realm Eternal burns...",
        "modified": "2013-11-14T11:29:16-0500",
        "isbn": "",
        "upc": "75960603506908311",
        "diamondCode": "",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 0,
        "textObjects": [
          {
          "type": "issue_solicit_text",
          "language": "en-us",
          "text": "AVENGERS DISASSEMBLED TIE-IN! \"RAGNAROK\" PART 3 (OF 6) Beset on all sides by treacherous foes from his past, the God of Thunder leads the tattered remnants of the forces of Asgard on a desperate quest, as the Realm Eternal burns..."
          }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/567",
        "urls": [
          {
          "type": "detail",
          "url": "http://marvel.com/comics/issue/567/thor_1998_83?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0"
          },
          {
          "type": "reader",
          "url": "http://marvel.com/digitalcomics/view.htm?iid=7244&utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0"
          }
        ],
        "series": {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/581",
          "name": "Thor (1998 - 2004)"
        },
        "variants": [],
        "collections": [
          {
          "resourceURI": "http://gateway.marvel.com/v1/public/comics/1481",
          "name": "Avengers Disassembled: Thor (Trade Paperback)"
          }
        ],
        "collectedIssues": [],
        "dates": [
          {
          "type": "onsaleDate",
          "date": "2004-10-01T00:00:00-0400"
          },
          {
          "type": "focDate",
          "date": "-0001-11-30T00:00:00-0500"
          },
          {
          "type": "unlimitedDate",
          "date": "2009-01-08T00:00:00-0500"
          }
        ],
        "prices": [
          {
          "type": "printPrice",
          "price": 0
          }
        ],
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/f/f0/59cbc65fec2f7",
          "extension": "jpg"
        },
        "images": [
          {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/f/f0/59cbc65fec2f7",
          "extension": "jpg"
          },
          {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/f/b0/4bc68cf6ef16b",
          "extension": "jpg"
          }
        ],
        "creators": {
          "available": 4,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/567/creators",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/creators/13143",
            "name": "Vc Randy Gentile",
            "role": "letterer"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/creators/13144",
            "name": "Michael Oeming",
            "role": "writer"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/creators/475",
            "name": "Laura Villari",
            "role": "colorist"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/creators/474",
            "name": "Andrea DI Vito",
            "role": "penciler"
          }
          ],
          "returned": 4
        },
        "characters": {
          "available": 1,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/567/characters",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009664",
            "name": "Thor"
          }
          ],
          "returned": 1
        },
        "stories": {
          "available": 2,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/567/stories",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/882",
            "name": "THOR (1998) #83",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/883",
            "name": "Interior #883",
            "type": "interiorStory"
          }
          ],
          "returned": 2
        },
        "events": {
          "available": 1,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/567/events",
          "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/234",
            "name": "Avengers Disassembled"
          }
          ],
          "returned": 1
        }
        }
      ],
      "loggedIn": {
        "username": "demouser",
        "_id": "5b03d5b74b125756fcccb9d8"
      }
      }
  
  
  it('Renders without crashing', () => {
    shallow(<Event {...eventProps} />);
  });
});

