import React from 'react';
import {shallow} from 'enzyme';

import {EventsList} from './events-list';

describe('<EventsList/>', () => {
    const eventsListProps = {
            "character": {
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
            "event": [],
            "loading": false
          }
    
    it('Renders without crashing', () => {
        shallow(<EventsList {...eventsListProps}/>);
    });
});