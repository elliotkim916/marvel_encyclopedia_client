import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { Provider } from 'react-redux';
import SearchResults from './SearchResults';
const dispatch = sinon.spy();

describe('<SearchResults />', () => {
  const testStore = {
    match: {
      path: '/search-results',
      url: '/search-results',
      isExact: true,
      params: {},
    },
    location: {
      pathname: '/search-results',
      search: '',
      hash: '',
      key: 'ax71u5',
    },
    history: {
      length: 35,
      action: 'PUSH',
      location: {
        pathname: '/search-results',
        search: '',
        hash: '',
        key: 'ax71u5',
      },
    },
    searchResult: {
      id: 1009652,
      name: 'Thanos',
      description:
        'The Mad Titan Thanos, a melancholy, brooding individual, consumed with the concept of death, sought out personal power and increased strength, endowing himself with cybernetic implants until he became more powerful than any of his brethren.',
      modified: '2014-02-19T15:41:57-0500',
      thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/40/5274137e3e2cd',
        extension: 'jpg',
      },
      resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009652',
      comics: {
        available: 196,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009652/comics',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12651',
            name: 'Alpha Flight (1983) #111',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/5078',
            name: 'Annihilation (2006) #2',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/5529',
            name: 'Annihilation (2006) #4',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/3985',
            name: 'Annihilation: Prologue (2006)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/4108',
            name: 'Annihilation: Silver Surfer (2006) #1',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/4218',
            name: 'Annihilation: Silver Surfer (2006) #2',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/4315',
            name: 'Annihilation: Silver Surfer (2006) #3',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/4470',
            name: 'Annihilation: Silver Surfer (2006) #4',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/4822',
            name: 'Annihilation: The Nova Corps (2006) #1',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/29198',
            name: 'Avengers (2010) #12',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/6981',
            name: 'Avengers (1963) #125',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/7131',
            name: 'Avengers (1963) #260',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/32993',
            name: 'Avengers & the Infinity Gauntlet (Graphic Novel)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/32483',
            name: 'Avengers & the Infinity Gauntlet (2010) #4',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/66397',
            name: 'Avengers & The Infinity Gauntlet (Trade Paperback)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/6943',
            name: 'Avengers Annual (1967) #7',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/41354',
            name: 'Avengers Assemble (2012) #3',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/41885',
            name: 'Avengers Assemble (2012) #8',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/65429',
            name:
              'Avengers by Brian Michael Bendis: The Complete Collection Vol. 3 (Trade Paperback)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/63350',
            name: 'Avengers by Jonathan Hickman Omnibus Vol. 1 (Hardcover)',
          },
        ],
        returned: 20,
      },
      series: {
        available: 94,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009652/series',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2116',
            name: 'Alpha Flight (1983 - 1994)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/3613',
            name: 'Annihilation (2006 - 2007)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1077',
            name: 'Annihilation: Prologue (2006)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1078',
            name: 'Annihilation: Silver Surfer (2006)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1115',
            name: 'Annihilation: The Nova Corps (2006)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1991',
            name: 'Avengers (1963 - 1996)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/9085',
            name: 'Avengers (2010 - 2012)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/9859',
            name: 'Avengers & the Infinity Gauntlet (2010)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/10035',
            name: 'Avengers & the Infinity Gauntlet (2011)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/24044',
            name: 'Avengers & The Infinity Gauntlet (2018)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1988',
            name: 'Avengers Annual (1967 - 1994)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/15373',
            name: 'Avengers Assemble (2012 - Present)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/23804',
            name:
              'Avengers by Brian Michael Bendis: The Complete Collection Vol. 3 (2017)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/23143',
            name: 'Avengers by Jonathan Hickman Omnibus Vol. 1 (2017)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/24135',
            name: 'Avengers vs. Thanos (2018)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/22468',
            name: 'Avengers: The Complete Celestial Madonna Saga (2017)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2000',
            name: 'Captain Marvel (1968 - 1979)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/21247',
            name: 'Cosmic Powers (1994)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2005',
            name: 'Deadpool (1997 - 2002)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/23264',
            name: 'Deadpool Classic Vol. 18: Deadpool Vs. Marvel (2017)',
          },
        ],
        returned: 20,
      },
      stories: {
        available: 207,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009652/stories',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/694',
            name: 'Cover #694',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/695',
            name: 'Interior #695',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1412',
            name: 'Cover #1412',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1413',
            name: 'Interior #1413',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1602',
            name: 'Cover #1602',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1603',
            name: 'Interior #1603',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1800',
            name: 'Cover #1800',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1801',
            name: 'Interior #1801',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1842',
            name: 'Cover #1842',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1843',
            name: 'Interior #1843',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/2253',
            name: 'Cover #2253',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/2254',
            name: 'Interior #2254',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/2436',
            name: 'Cover #2436',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/2437',
            name: 'Interior #2437',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/2438',
            name: 'Cover #2438',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/2439',
            name: 'Interior #2439',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/2440',
            name: 'Cover #2440',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/2441',
            name: 'Interior #2441',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/2442',
            name: 'Cover #2442',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/2443',
            name: 'Interior #2443',
            type: 'interiorStory',
          },
        ],
        returned: 20,
      },
      events: {
        available: 9,
        collectionURI:
          'http://gateway.marvel.com/v1/public/characters/1009652/events',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/229',
            name: 'Annihilation',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/235',
            name: 'Blood and Thunder',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/315',
            name: 'Infinity',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/253',
            name: 'Infinity Gauntlet',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/29',
            name: 'Infinity War',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/319',
            name: 'Original Sin',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/295',
            name: 'Realm of Kings',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/271',
            name: 'Secret Wars II',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/294',
            name: 'The Thanos Imperative',
          },
        ],
        returned: 9,
      },
      urls: [
        {
          type: 'detail',
          url:
            'http://marvel.com/characters/58/thanos?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0',
        },
        {
          type: 'wiki',
          url:
            'http://marvel.com/universe/Thanos?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0',
        },
        {
          type: 'comiclink',
          url:
            'http://marvel.com/comics/characters/1009652/thanos?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0',
        },
      ],
    },
    searchCharacterComic: [
      {
        id: 67584,
        digitalId: 0,
        title:
          'Wolverine: The Amazing Immortal Man and Other Bloody Tales (Trade Paperback)',
        issueNumber: 0,
        variantDescription: '',
        description:
          'Collects Wolverine #900 And #1000; Wolverine Annual #2; Rampaging Wolverine #1; Wolverine: The Amazing Immortal Man & Other Bloody Tales, Under The Boardwalk, Wendigo!, Carni-Brawl, Savage, Mr. X, Dust From Above And Debt Of Death; And Material From Wolverine: Switchback. Wolverine unleashed in savage stories spanning his century-long life! Logan’s long life has taken him to every corner of the globe — from terrifying crowds in a 1930s freak show; to battling Nazi werewolves during World War II; to fighting pirates in Korea, mobsters in New Jersey and a mythical creature in the American Southwest. Now, in rarely seen tales by an army of top talent, watch Wolverine take on ninjas, monsters, zombies, Morlocks and more — and face off against both the Hulk and Thor! Plus: Grudge matches with Mojo, the Wendigo and more! It’s Wolverine as you like him best!',
        modified: '2018-05-23T17:01:20-0400',
        isbn: '978-1-302-91249-9',
        upc: '',
        diamondCode: 'MAR181002',
        ean: '9781302 912499 53999',
        issn: '',
        format: 'Trade Paperback',
        pageCount: 504,
        textObjects: [
          {
            type: 'issue_solicit_text',
            language: 'en-us',
            text:
              'Collects Wolverine #900 And #1000; Wolverine Annual #2; Rampaging Wolverine #1; Wolverine: The Amazing Immortal Man & Other Bloody Tales, Under The Boardwalk, Wendigo!, Carni-Brawl, Savage, Mr. X, Dust From Above And Debt Of Death; And Material From Wolverine: Switchback. Wolverine unleashed in savage stories spanning his century-long life! Logan’s long life has taken him to every corner of the globe — from terrifying crowds in a 1930s freak show; to battling Nazi werewolves during World War II; to fighting pirates in Korea, mobsters in New Jersey and a mythical creature in the American Southwest. Now, in rarely seen tales by an army of top talent, watch Wolverine take on ninjas, monsters, zombies, Morlocks and more — and face off against both the Hulk and Thor! Plus: Grudge matches with Mojo, the Wendigo and more! It’s Wolverine as you like him best!',
          },
        ],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/67584',
        urls: [
          {
            type: 'detail',
            url:
              'http://marvel.com/comics/collection/67584/wolverine_the_amazing_immortal_man_and_other_bloody_tales_trade_paperback?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/24370',
          name:
            'Wolverine: The Amazing Immortal Man and Other Bloody Tales (2018)',
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2018-05-30T00:00:00-0400',
          },
          {
            type: 'focDate',
            date: '2018-04-09T00:00:00-0400',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 39.99,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/f/03/5b05d85992454',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/f/03/5b05d85992454',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 3,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/67584/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/11401',
              name: 'various',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/648',
              name: 'Simone Bianchi',
              role: 'penciller (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/4430',
              name: 'Jeff Youngquist',
              role: 'editor',
            },
          ],
          returned: 3,
        },
        characters: {
          available: 5,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/67584/characters',
          items: [
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009351',
              name: 'Hulk',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009448',
              name: 'Mojo',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009664',
              name: 'Thor',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009710',
              name: 'Wendigo',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009718',
              name: 'Wolverine',
            },
          ],
          returned: 5,
        },
        stories: {
          available: 2,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/67584/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/146354',
              name:
                'cover from WOLVERINE: THE AMAZING IMMORTAL MAN AND OTHER BLOODY TALES TPB (2018) #1',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/146355',
              name:
                'story from WOLVERINE: THE AMAZING IMMORTAL MAN AND OTHER BLOODY TALES TPB (2018) #1',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/67584/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 67311,
        digitalId: 0,
        title: 'Avengers (2018) #2',
        issueNumber: 2,
        variantDescription: '',
        description:
          'Black Panther and Dr. Strange battle for their lives deep within the earth…Captain Marvel battles death and destruction raining down from the skies…while Thor, Iron Man and Captain America lead the valiant (yet hopeless) fight against the Final Host of Dark Celestials. And Ghost Rider and the Savage Hulk make brutal war against...each other? Plus, you can’t have a gathering of Avengers without a certain Prince of Lies, now can you?',
        modified: '2018-05-10T09:02:53-0400',
        isbn: '',
        upc: '75960608857700211',
        diamondCode: 'MAR180783',
        ean: '',
        issn: '0274-5240',
        format: 'Comic',
        pageCount: 32,
        textObjects: [
          {
            type: 'issue_solicit_text',
            language: 'en-us',
            text:
              'Black Panther and Dr. Strange battle for their lives deep within the earth…Captain Marvel battles death and destruction raining down from the skies…while Thor, Iron Man and Captain America lead the valiant (yet hopeless) fight against the Final Host of Dark Celestials. And Ghost Rider and the Savage Hulk make brutal war against...each other? Plus, you can’t have a gathering of Avengers without a certain Prince of Lies, now can you?',
          },
        ],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/67311',
        urls: [
          {
            type: 'detail',
            url:
              'http://marvel.com/comics/issue/67311/avengers_2018_2?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0',
          },
          {
            type: 'purchase',
            url:
              'http://comicstore.marvel.com/Avengers-2/digital-comic/47972?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/24229',
          name: 'Avengers (2018 - Present)',
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2018-05-16T00:00:00-0400',
          },
          {
            type: 'focDate',
            date: '2018-04-23T00:00:00-0400',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 3.99,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/f0/5af369f557bc4',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/f0/5af369f557bc4',
            extension: 'jpg',
          },
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/f/a0/5a96f68bdbaa6',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 8,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/67311/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/11463',
              name: 'Jason Aaron',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/2133',
              name: 'Tom Brevoort',
              role: 'editor',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/13021',
              name: 'David Curiel',
              role: 'colorist',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/616',
              name: 'Jay Leisten',
              role: 'inker',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/649',
              name: 'Ed Mcguinness',
              role: 'penciler (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/454',
              name: 'Mark Morales',
              role: 'inker (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/12980',
              name: 'Vc Cory Petit',
              role: 'letterer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/360',
              name: 'Justin Ponsor',
              role: 'colorist (cover)',
            },
          ],
          returned: 8,
        },
        characters: {
          available: 8,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/67311/characters',
          items: [
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009165',
              name: 'Avengers',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009187',
              name: 'Black Panther',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009220',
              name: 'Captain America',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1010338',
              name: 'Captain Marvel (Carol Danvers)',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009282',
              name: 'Doctor Strange',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009368',
              name: 'Iron Man',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009583',
              name: 'She-Hulk (Jennifer Walters)',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009664',
              name: 'Thor',
            },
          ],
          returned: 8,
        },
        stories: {
          available: 2,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/67311/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/145808',
              name: 'cover from Avengers (2018) #2',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/145809',
              name: 'story from Avengers (2018) #2',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/67311/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 67528,
        digitalId: 0,
        title: 'Mighty Thor: At the Gates of Valhalla (2018) #1',
        issueNumber: 1,
        variantDescription: '',
        description:
          '“The Death of the Mighty Thor” has come and gone. But Jane Foster’s power to inspire lives on — even in the far future! Don’t miss the tribute to Jason Aaron’s epic tale of Thor and the mighty hammer Mjolnir, drawn by rising star Jen Bartel! And with or without a Thor, the War of Realms continues. As Malekith’s power grows, the realms will fall — and who is left to stop him? Eisner Award–winning artist Ramón Pérez kicks off the next stage of Jason Aaron’s ongoing saga.',
        modified: '2018-05-09T18:03:43-0400',
        isbn: '',
        upc: '75960608999400111',
        diamondCode: 'MAR180870',
        ean: '',
        issn: '',
        format: 'Comic',
        pageCount: 40,
        textObjects: [
          {
            type: 'issue_solicit_text',
            language: 'en-us',
            text:
              '“The Death of the Mighty Thor” has come and gone. But Jane Foster’s power to inspire lives on — even in the far future! Don’t miss the tribute to Jason Aaron’s epic tale of Thor and the mighty hammer Mjolnir, drawn by rising star Jen Bartel! And with or without a Thor, the War of Realms continues. As Malekith’s power grows, the realms will fall — and who is left to stop him? Eisner Award–winning artist Ramón Pérez kicks off the next stage of Jason Aaron’s ongoing saga.',
          },
        ],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/67528',
        urls: [
          {
            type: 'detail',
            url:
              'http://marvel.com/comics/issue/67528/mighty_thor_at_the_gates_of_valhalla_2018_1?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0',
          },
          {
            type: 'purchase',
            url:
              'http://comicstore.marvel.com/MIGHTY-THOR-AT-THE-GATES-OF-VALHALLA-1-1/digital-comic/47980?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/24347',
          name: 'Mighty Thor: At the Gates of Valhalla (2018)',
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2018-05-16T00:00:00-0400',
          },
          {
            type: 'focDate',
            date: '2018-04-23T00:00:00-0400',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 4.99,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/50/5af36a7ec325e',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/50/5af36a7ec325e',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 7,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/67528/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/11463',
              name: 'Jason Aaron',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/13069',
              name: 'Jen Bartel',
              role: 'inker',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/11531',
              name: 'Ramon Perez',
              role: 'inker',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/13275',
              name: 'Nicholas Derington',
              role: 'penciler (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/12376',
              name: 'Wilson Moss',
              role: 'editor',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/12974',
              name: 'Vc Joe Sabino',
              role: 'letterer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/10279',
              name: 'Matthew Wilson',
              role: 'colorist',
            },
          ],
          returned: 7,
        },
        characters: {
          available: 3,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/67528/characters',
          items: [
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009480',
              name: 'Odin',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009664',
              name: 'Thor',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1017576',
              name: 'Thor (Goddess of Thunder)',
            },
          ],
          returned: 3,
        },
        stories: {
          available: 2,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/67528/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/146242',
              name:
                'cover from Mighty Thor: At the Gates of Valhalla (2018) #1',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/146243',
              name:
                'story from Mighty Thor: At the Gates of Valhalla (2018) #1',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/67528/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 68421,
        digitalId: 0,
        title: 'Marvel Masterworks: Marvel Team-Up Vol. 3 (Hardcover)',
        issueNumber: 0,
        variantDescription: '',
        description:
          ' Collects Marvel Team-Up (1972) #23-30 and Giant-Size Spider-Man #1-3. With his popularity skyrocketing, Spider-Man became comicdom’s top seller — and fans wanted more, more, more! MARVEL TEAM-UP provided a second monthly dose of Spidey action with the added bonus of a new heroic guest star every issue. When even that wasn’t enough, Marvel launched GIANT-SIZE SPIDER-MAN, featuring double-sized extravaganzas! And lucky you, they’re both being collected here! The action includes adventures with Daredevil, Shang-Chi and the Falcon; horrific tales featuring Dracula and Brother Voodoo; and Spidey vs. the Hulk! And while Spider-Man takes the stage in GIANT-SIZE, the Human Torch teams up with Thor, Iron Man and the X-Men! It’s all brought to you by some of the greatest writers and artists Spidey has ever known! ',
        modified: '2018-05-03T16:09:36-0400',
        isbn: '978-1-302-90970-3',
        upc: '',
        diamondCode: 'NOV171039',
        ean: '9781302 909703 57500',
        issn: '',
        format: 'Hardcover',
        pageCount: 272,
        textObjects: [
          {
            type: 'issue_solicit_text',
            language: 'en-us',
            text:
              ' Collects Marvel Team-Up (1972) #23-30 and Giant-Size Spider-Man #1-3. With his popularity skyrocketing, Spider-Man became comicdom’s top seller — and fans wanted more, more, more! MARVEL TEAM-UP provided a second monthly dose of Spidey action with the added bonus of a new heroic guest star every issue. When even that wasn’t enough, Marvel launched GIANT-SIZE SPIDER-MAN, featuring double-sized extravaganzas! And lucky you, they’re both being collected here! The action includes adventures with Daredevil, Shang-Chi and the Falcon; horrific tales featuring Dracula and Brother Voodoo; and Spidey vs. the Hulk! And while Spider-Man takes the stage in GIANT-SIZE, the Human Torch teams up with Thor, Iron Man and the X-Men! It’s all brought to you by some of the greatest writers and artists Spidey has ever known! ',
          },
        ],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/68421',
        urls: [
          {
            type: 'detail',
            url:
              'http://marvel.com/comics/collection/68421/marvel_masterworks_marvel_team-up_vol_3_hardcover?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/24828',
          name: 'Marvel Masterworks: Marvel Team-Up Vol. 3 (2018)',
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2018-05-09T00:00:00-0400',
          },
          {
            type: 'focDate',
            date: '2018-01-08T00:00:00-0500',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 75,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/e/a0/5aeb708ab4db0',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/e/a0/5aeb708ab4db0',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 8,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/68421/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/1167',
              name: 'Ross Andru',
              role: 'penciller',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/148',
              name: 'Gil Kane',
              role: 'penciller',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/389',
              name: 'Jim Mooney',
              role: 'penciller',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/954',
              name: 'Gerry Conway',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/967',
              name: 'Len Wein',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/586',
              name: 'Michael Kelleher',
              role: 'colorist (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/13272',
              name: 'John Romita Sr.',
              role: 'penciller (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/4430',
              name: 'Jeff Youngquist',
              role: 'editor',
            },
          ],
          returned: 8,
        },
        characters: {
          available: 5,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/68421/characters',
          items: [
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009262',
              name: 'Daredevil',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009356',
              name: 'Human Torch',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009577',
              name: 'Shang-Chi',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009610',
              name: 'Spider-Man',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009664',
              name: 'Thor',
            },
          ],
          returned: 5,
        },
        stories: {
          available: 2,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/68421/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/149404',
              name:
                'cover from MARVEL MASTERWORKS: MARVEL TEAM-UP VOL. 3 HC (2018) #3',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/149405',
              name:
                'story from MARVEL MASTERWORKS: MARVEL TEAM-UP VOL. 3 HC (2018) #3',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/68421/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 67344,
        digitalId: 0,
        title: 'Incredible Hulk (2017) #716',
        issueNumber: 716,
        variantDescription: '',
        description:
          'WORLD WAR HULK II CONTINUES! Amadeus Cho has always thought of himself as the fun Hulk – the totally awesome Hulk. But now the Dark Hulk within him is calling the shots with brutal consequences for anyone who’s ever wronged Amadeus or stood in his way. Get ready for Amadeus unleashed and cataclysmic smashing in the heart of New York as our hero – and the world – finally learns just what the curse of the Hulk is all about.',
        modified: '2018-05-04T09:08:05-0400',
        isbn: '',
        upc: '75960608769371611',
        diamondCode: 'MAR180864',
        ean: '',
        issn: '0274-5275',
        format: 'Comic',
        pageCount: 32,
        textObjects: [
          {
            type: 'issue_solicit_text',
            language: 'en-us',
            text:
              'WORLD WAR HULK II CONTINUES! Amadeus Cho has always thought of himself as the fun Hulk – the totally awesome Hulk. But now the Dark Hulk within him is calling the shots with brutal consequences for anyone who’s ever wronged Amadeus or stood in his way. Get ready for Amadeus unleashed and cataclysmic smashing in the heart of New York as our hero – and the world – finally learns just what the curse of the Hulk is all about.',
          },
        ],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/67344',
        urls: [
          {
            type: 'detail',
            url:
              'http://marvel.com/comics/issue/67344/incredible_hulk_2017_716?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0',
          },
          {
            type: 'purchase',
            url:
              'http://comicstore.marvel.com/Incredible-Hulk-716/digital-comic/47953?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/23635',
          name: 'Incredible Hulk (2017 - 2018)',
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2018-05-09T00:00:00-0400',
          },
          {
            type: 'focDate',
            date: '2018-04-16T00:00:00-0400',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 3.99,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/e/c0/5aea2f5ba5a72',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/e/c0/5aea2f5ba5a72',
            extension: 'jpg',
          },
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/f/80/5a96f92deba3b',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 8,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/67344/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/2133',
              name: 'Tom Brevoort',
              role: 'editor',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/8504',
              name: "Frank D'ARMATA",
              role: 'colorist (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/425',
              name: 'Greg Land',
              role: 'penciler (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/616',
              name: 'Jay Leisten',
              role: 'inker (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/13175',
              name: 'Marco Lorenzana',
              role: 'penciler',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/536',
              name: 'Greg Pak',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/12980',
              name: 'Vc Cory Petit',
              role: 'letterer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/413',
              name: 'Juan Vlasco',
              role: 'inker',
            },
          ],
          returned: 8,
        },
        characters: {
          available: 6,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/67344/characters',
          items: [
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1011227',
              name: 'Amadeus Cho',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009187',
              name: 'Black Panther',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1010338',
              name: 'Captain Marvel (Carol Danvers)',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1017577',
              name: 'Ms. Marvel (Kamala Khan)',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1016181',
              name: 'Spider-Man (Miles Morales)',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009664',
              name: 'Thor',
            },
          ],
          returned: 6,
        },
        stories: {
          available: 2,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/67344/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/145874',
              name: 'cover from Incredible Hulk (2017) #716',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/145875',
              name: 'story from Incredible Hulk (2017) #716',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/67344/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 67002,
        digitalId: 0,
        title: 'Avengers (2018) #1',
        issueNumber: 1,
        variantDescription: '',
        description:
          'Thor Odinson. Steve Rogers. Tony Stark. The Big Three of the Avengers are reunited at last! And just in time to save the world from total annihilation at the hands of their most powerful enemies yet: the 2000-foot-tall space gods known as Celestials. Behold the coming of the Final Host. Who will answer the call to assemble for a wild new era of Earth’s Mightiest Heroes? Hint: one of them has a flaming skull for a head. And what strange, world-shaking connection exists between the Final Host and Odin’s ancient band of Prehistoric Avengers?',
        modified: '2018-04-27T09:02:39-0400',
        isbn: '',
        upc: '75960608857700111',
        diamondCode: 'MAR180776',
        ean: '',
        issn: '0274-5240',
        format: 'Comic',
        pageCount: 40,
        textObjects: [
          {
            type: 'issue_solicit_text',
            language: 'en-us',
            text:
              'Thor Odinson. Steve Rogers. Tony Stark. The Big Three of the Avengers are reunited at last! And just in time to save the world from total annihilation at the hands of their most powerful enemies yet: the 2000-foot-tall space gods known as Celestials. Behold the coming of the Final Host. Who will answer the call to assemble for a wild new era of Earth’s Mightiest Heroes? Hint: one of them has a flaming skull for a head. And what strange, world-shaking connection exists between the Final Host and Odin’s ancient band of Prehistoric Avengers?',
          },
        ],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/67002',
        urls: [
          {
            type: 'detail',
            url:
              'http://marvel.com/comics/issue/67002/avengers_2018_1?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0',
          },
          {
            type: 'purchase',
            url:
              'http://comicstore.marvel.com/Avengers-1/digital-comic/47926?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/24229',
          name: 'Avengers (2018 - Present)',
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2018-05-02T00:00:00-0400',
          },
          {
            type: 'focDate',
            date: '2018-04-09T00:00:00-0400',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 4.99,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/1/20/5af0aacb41ae3',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/1/20/5af0aacb41ae3',
            extension: 'jpg',
          },
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/e0/5ae0cea14971c',
            extension: 'jpg',
          },
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/90/5a96f64fb2081',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 7,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/67002/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/11463',
              name: 'Jason Aaron',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/2133',
              name: 'Tom Brevoort',
              role: 'editor',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/13021',
              name: 'David Curiel',
              role: 'colorist',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/649',
              name: 'Ed Mcguinness',
              role: 'penciler (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/454',
              name: 'Mark Morales',
              role: 'inker (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/12980',
              name: 'Vc Cory Petit',
              role: 'letterer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/360',
              name: 'Justin Ponsor',
              role: 'colorist (cover)',
            },
          ],
          returned: 7,
        },
        characters: {
          available: 8,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/67002/characters',
          items: [
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009165',
              name: 'Avengers',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009187',
              name: 'Black Panther',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009220',
              name: 'Captain America',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1010338',
              name: 'Captain Marvel (Carol Danvers)',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009282',
              name: 'Doctor Strange',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009368',
              name: 'Iron Man',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009583',
              name: 'She-Hulk (Jennifer Walters)',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009664',
              name: 'Thor',
            },
          ],
          returned: 8,
        },
        stories: {
          available: 2,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/67002/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/145183',
              name: 'cover from Avengers (2018) #1',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/145184',
              name: 'story from Avengers (2018) #1',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/67002/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 66851,
        digitalId: 0,
        title: 'Mighty Thor (2015) #706',
        issueNumber: 706,
        variantDescription: '',
        description:
          'AT THE GATES OF VALHALLA! The battle against the Mangog is finished. And the losses have been profound. So what – if anything – remains of the story of Jane Foster, Goddess of Thunder? And where do the other gods possibly go from here?',
        modified: '2018-04-18T17:24:47-0400',
        isbn: '',
        upc: '75960608774770611',
        diamondCode: 'FEB180814',
        ean: '',
        issn: '2160-1496',
        format: 'Comic',
        pageCount: 32,
        textObjects: [
          {
            type: 'issue_solicit_text',
            language: 'en-us',
            text:
              'AT THE GATES OF VALHALLA! The battle against the Mangog is finished. And the losses have been profound. So what – if anything – remains of the story of Jane Foster, Goddess of Thunder? And where do the other gods possibly go from here?',
          },
        ],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/66851',
        urls: [
          {
            type: 'detail',
            url:
              'http://marvel.com/comics/issue/66851/mighty_thor_2015_706?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0',
          },
          {
            type: 'purchase',
            url:
              'http://comicstore.marvel.com/Mighty-Thor-706/digital-comic/47753?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/20527',
          name: 'Mighty Thor (2015 - Present)',
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2018-04-25T00:00:00-0400',
          },
          {
            type: 'focDate',
            date: '2018-03-26T00:00:00-0400',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 3.99,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/10/5ad7b086c5043',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/10/5ad7b086c5043',
            extension: 'jpg',
          },
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/80/5a722b73b4f9e',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 5,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/66851/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/11463',
              name: 'Jason Aaron',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/12449',
              name: 'Russell Dauterman',
              role: 'colorist (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/12376',
              name: 'Wilson Moss',
              role: 'editor',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/12974',
              name: 'Vc Joe Sabino',
              role: 'letterer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/10279',
              name: 'Matthew Wilson',
              role: 'colorist',
            },
          ],
          returned: 5,
        },
        characters: {
          available: 4,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/66851/characters',
          items: [
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1010329',
              name: 'Jane Foster',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009480',
              name: 'Odin',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009664',
              name: 'Thor',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1017576',
              name: 'Thor (Goddess of Thunder)',
            },
          ],
          returned: 4,
        },
        stories: {
          available: 2,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/66851/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/144857',
              name: 'cover from Mighty Thor (2017) #706',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/144858',
              name: 'story from Mighty Thor (2017) #706',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/66851/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 66864,
        digitalId: 0,
        title: 'True Believers: Infinity Incoming! (2018) #1',
        issueNumber: 1,
        variantDescription: '',
        description: 'Reprinting Avengers (2012) #1!',
        modified: '2018-04-11T17:31:13-0400',
        isbn: '',
        upc: '75960609016700111',
        diamondCode: 'FEB180826',
        ean: '',
        issn: '',
        format: 'Comic',
        pageCount: 32,
        textObjects: [
          {
            type: 'issue_solicit_text',
            language: 'en-us',
            text: 'Reprinting Avengers (2012) #1!',
          },
        ],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/66864',
        urls: [
          {
            type: 'detail',
            url:
              'http://marvel.com/comics/issue/66864/true_believers_infinity_incoming_2018_1?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/24190',
          name: 'True Believers: Infinity Incoming! (2018)',
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2018-04-18T00:00:00-0400',
          },
          {
            type: 'focDate',
            date: '2018-03-26T00:00:00-0400',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 1,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/f0/5ace6b3312e6d',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/f0/5ace6b3312e6d',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 9,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/66864/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/2133',
              name: 'Tom Brevoort',
              role: 'editor',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/8924',
              name: 'Lauren Sankovitch',
              role: 'editor',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/11921',
              name: 'Jacob Thomas',
              role: 'editor',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/4430',
              name: 'Jeff Youngquist',
              role: 'editor',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/11743',
              name: 'Jonathan Hickman',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/8737',
              name: 'Jerome Opena',
              role: 'penciller',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/361',
              name: 'Cory Petit',
              role: 'letterer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/8404',
              name: 'Dustin Weaver',
              role: 'penciller (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/442',
              name: 'Dean White',
              role: 'colorist',
            },
          ],
          returned: 9,
        },
        characters: {
          available: 9,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/66864/characters',
          items: [
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009165',
              name: 'Avengers',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009220',
              name: 'Captain America',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1010338',
              name: 'Captain Marvel (Carol Danvers)',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009351',
              name: 'Hulk',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1010758',
              name: 'Illuminati',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009368',
              name: 'Iron Man',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009610',
              name: 'Spider-Man',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009664',
              name: 'Thor',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009718',
              name: 'Wolverine',
            },
          ],
          returned: 9,
        },
        stories: {
          available: 2,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/66864/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/144883',
              name: 'cover from True Believers: Infinity Incoming! (2018) #1',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/144884',
              name: 'story from True Believers: Infinity Incoming! (2018) #1',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/66864/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 66863,
        digitalId: 0,
        title: 'Thor by Walter Simonson Vol. 3 (Trade Paperback)',
        issueNumber: 0,
        variantDescription: '',
        description:
          'Collects Thor (1966) #357-363 and Balder The Brave #1-4. Few people have ever left their mark on one character quite the way Walter Simonson has. His work on the MIGHTY THOR swept the Norse God of Thunder to heights never before seen and rarely achieved in his wake. Spanning epic tales of heroism and treachery, love and war, Simonson’s work is often considered the definitive Thor. From the majesty and mystery of fabled Asgard to the gritty streets of New York City, Thor was never the same. That is the mark of a true visionary. This third volume continues the collection of Simonson’s epic run — completely remastered from the original artwork and dynamically recolored by Steve Oliff.',
        modified: '2018-04-12T17:08:50-0400',
        isbn: '978-1-302-90901-7',
        upc: '',
        diamondCode: 'JAN181065',
        ean: '9781302 909017 52999',
        issn: '',
        format: 'Trade Paperback',
        pageCount: 264,
        textObjects: [
          {
            type: 'issue_solicit_text',
            language: 'en-us',
            text:
              'Collects Thor (1966) #357-363 and Balder The Brave #1-4. Few people have ever left their mark on one character quite the way Walter Simonson has. His work on the MIGHTY THOR swept the Norse God of Thunder to heights never before seen and rarely achieved in his wake. Spanning epic tales of heroism and treachery, love and war, Simonson’s work is often considered the definitive Thor. From the majesty and mystery of fabled Asgard to the gritty streets of New York City, Thor was never the same. That is the mark of a true visionary. This third volume continues the collection of Simonson’s epic run — completely remastered from the original artwork and dynamically recolored by Steve Oliff.',
          },
        ],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/66863',
        urls: [
          {
            type: 'detail',
            url:
              'http://marvel.com/comics/collection/66863/thor_by_walter_simonson_vol_3_trade_paperback?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/24189',
          name: 'Thor by Walter Simonson Vol. 3 (2018)',
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2018-04-18T00:00:00-0400',
          },
          {
            type: 'focDate',
            date: '2018-02-26T00:00:00-0500',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 29.99,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/2/60/5acfccec7b843',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/2/60/5acfccec7b843',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 4,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/66863/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/105',
              name: 'Sal Buscema',
              role: 'penciller',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/4205',
              name: 'Steve Oliff',
              role: 'colorist',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/5125',
              name: 'Walter Simonson',
              role: 'penciller (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/4430',
              name: 'Jeff Youngquist',
              role: 'editor',
            },
          ],
          returned: 4,
        },
        characters: {
          available: 3,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/66863/characters',
          items: [
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009407',
              name: 'Loki',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009480',
              name: 'Odin',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009664',
              name: 'Thor',
            },
          ],
          returned: 3,
        },
        stories: {
          available: 2,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/66863/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/144881',
              name: 'cover from THOR BY WALTER SIMONSON VOL. 3 TPB (2018) #3',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/144882',
              name: 'story from THOR BY WALTER SIMONSON VOL. 3 TPB (2018) #3',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/66863/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 66755,
        digitalId: 0,
        title:
          'Avengers Epic Collection: The Avengers/Defenders War (Trade Paperback)',
        issueNumber: 0,
        variantDescription: '',
        description:
          'Collects Avengers (1963) #115-128, Giant-Size (1974) #1, Defenders (1972) #8-11, Captain Marvel (1968) #33, Fantastic Four (1961) #150. The Avengers battle the Defenders in comics’ first great crossover battle royale! It’s hero against hero in the sensational summer hit of 1973: Cap vs. Namor! Thor vs. Hulk! It’s the original, and there’s never been another one like it. All this, plus the origin of Mantis; an all-hands-on-deck battle with the Zodiac; the Avengers vs. Thanos and the Cosmic Cube; a Giant-Size adventure alongside Golden Age heroes Miss America and the Whizzer; the wedding of Quicksilver and Crystal; the return of Ultron; and an increasingly tense love triangle between the Scarlet Witch, the Vision and Mantis! And as an added bonus feature, rare Avengers pinups, profiles and more from the pages of the ’70s fanzine FOOM!',
        modified: '2018-04-04T17:35:27-0400',
        isbn: '978-1-302-91000-6',
        upc: '',
        diamondCode: 'JAN181075',
        ean: '9781302 910006 53999',
        issn: '',
        format: 'Trade Paperback',
        pageCount: 456,
        textObjects: [
          {
            type: 'issue_solicit_text',
            language: 'en-us',
            text:
              'Collects Avengers (1963) #115-128, Giant-Size (1974) #1, Defenders (1972) #8-11, Captain Marvel (1968) #33, Fantastic Four (1961) #150. The Avengers battle the Defenders in comics’ first great crossover battle royale! It’s hero against hero in the sensational summer hit of 1973: Cap vs. Namor! Thor vs. Hulk! It’s the original, and there’s never been another one like it. All this, plus the origin of Mantis; an all-hands-on-deck battle with the Zodiac; the Avengers vs. Thanos and the Cosmic Cube; a Giant-Size adventure alongside Golden Age heroes Miss America and the Whizzer; the wedding of Quicksilver and Crystal; the return of Ultron; and an increasingly tense love triangle between the Scarlet Witch, the Vision and Mantis! And as an added bonus feature, rare Avengers pinups, profiles and more from the pages of the ’70s fanzine FOOM!',
          },
        ],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/66755',
        urls: [
          {
            type: 'detail',
            url:
              'http://marvel.com/comics/collection/66755/avengers_epic_collection_the_avengersdefenders_war_trade_paperback?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/24152',
          name: 'Avengers Epic Collection: The Avengers/Defenders War (2018)',
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2018-04-11T00:00:00-0400',
          },
          {
            type: 'focDate',
            date: '2018-02-19T00:00:00-0500',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 39.99,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/60/5ac54dcb8c591',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/60/5ac54dcb8c591',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 11,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/66755/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/106',
              name: 'Bob Brown',
              role: 'penciller',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/1216',
              name: 'Rich Buckler',
              role: 'penciller',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/1612',
              name: 'John Buscema',
              role: 'penciller',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/105',
              name: 'Sal Buscema',
              role: 'penciller',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/954',
              name: 'Gerry Conway',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/104',
              name: 'Steve Englehart',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/146',
              name: 'Jim Starlin',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/2909',
              name: 'Roy Thomas',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/479',
              name: 'Paul Mounts',
              role: 'colorist (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/13272',
              name: 'John Romita Sr.',
              role: 'penciller (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/4430',
              name: 'Jeff Youngquist',
              role: 'editor',
            },
          ],
          returned: 11,
        },
        characters: {
          available: 10,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/66755/characters',
          items: [
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009165',
              name: 'Avengers',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009224',
              name: 'Captain Marvel (Mar-Vell)',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009255',
              name: 'Crystal',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1011023',
              name: 'Defenders',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009351',
              name: 'Hulk',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1011026',
              name: 'Mantis',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009524',
              name: 'Quicksilver',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009562',
              name: 'Scarlet Witch',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009664',
              name: 'Thor',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009697',
              name: 'Vision',
            },
          ],
          returned: 10,
        },
        stories: {
          available: 2,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/66755/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/144665',
              name:
                'cover from AVENGERS EPIC COLLECTION: THE AVENGERS/DEFENDERS WAR TPB (2018) #7',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/144666',
              name:
                'story from AVENGERS EPIC COLLECTION: THE AVENGERS/DEFENDERS WAR TPB (2018) #7',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/66755/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 66605,
        digitalId: 0,
        title: 'Color Your Own Avengers (Trade Paperback)',
        issueNumber: 1,
        variantDescription: '',
        description:
          'And there came a day, a day unlike any other, when Earth’s mightiest heroes and heroines found themselves uncolored, without their common palette! On that day, the Avengers were adorned - with all the hues no single super hero could withstand! Through these pages, their roster prospers, changing many times, but their glory will never be denied! Heed the call, then - for now, you Artists Assemble! Yes, your big moment is here. Captain America, Iron Man, Thor, Black Widow, Hawkeye, Hulk, Vision, Scarlet Witch, Quicksilver, Black Panther, Captain Marvel, Falcon and more take action in beautiful black-and-white illustrations by some of Marvel’s finest talents from across the eras! They’re just waiting for you to enter the fray - so grab your full lineup of markers, pencils or crayons - and unleash an Avengers world of color!',
        modified: '2018-03-23T18:29:29-0400',
        isbn: '978-1-302-90893-5',
        upc: '',
        diamondCode: 'DEC170938',
        ean: '9781302 908935 50999',
        issn: '',
        format: 'Trade Paperback',
        pageCount: 120,
        textObjects: [
          {
            type: 'issue_solicit_text',
            language: 'en-us',
            text:
              'And there came a day, a day unlike any other, when Earth’s mightiest heroes and heroines found themselves uncolored, without their common palette! On that day, the Avengers were adorned - with all the hues no single super hero could withstand! Through these pages, their roster prospers, changing many times, but their glory will never be denied! Heed the call, then - for now, you Artists Assemble! Yes, your big moment is here. Captain America, Iron Man, Thor, Black Widow, Hawkeye, Hulk, Vision, Scarlet Witch, Quicksilver, Black Panther, Captain Marvel, Falcon and more take action in beautiful black-and-white illustrations by some of Marvel’s finest talents from across the eras! They’re just waiting for you to enter the fray - so grab your full lineup of markers, pencils or crayons - and unleash an Avengers world of color!',
          },
        ],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/66605',
        urls: [
          {
            type: 'detail',
            url:
              'http://marvel.com/comics/collection/66605/color_your_own_avengers_trade_paperback?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/24118',
          name: 'Color Your Own Avengers (2018)',
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2018-03-28T00:00:00-0400',
          },
          {
            type: 'focDate',
            date: '2018-01-29T00:00:00-0500',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 9.99,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/8/70/5ab57e005b1a4',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/8/70/5ab57e005b1a4',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 2,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/66605/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/11401',
              name: 'various',
              role: 'penciller (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/4430',
              name: 'Jeff Youngquist',
              role: 'editor',
            },
          ],
          returned: 2,
        },
        characters: {
          available: 6,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/66605/characters',
          items: [
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009165',
              name: 'Avengers',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009220',
              name: 'Captain America',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009351',
              name: 'Hulk',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009368',
              name: 'Iron Man',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009608',
              name: 'Spider-Woman (Jessica Drew)',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009664',
              name: 'Thor',
            },
          ],
          returned: 6,
        },
        stories: {
          available: 2,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/66605/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/144364',
              name: 'cover from COLOR YOUR OWN AVENGERS (2018) #1',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/144365',
              name: 'story from COLOR YOUR OWN AVENGERS (2018) #1',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/66605/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 62174,
        digitalId: 0,
        title: 'Thor Vs. Hulk: Champions of the Universe (Trade Paperback)',
        issueNumber: 0,
        variantDescription: '',
        description:
          "Collects Thor Vs. Hulk - Champions of The Universe #1-6. An Elder of the Universe has come to Earth, and he means to battle our planet's strongest hero. But will Thor and Hulk ever agree on which one of them that is? Of course not! Asgard's Avenger and the green goliath will have to run a gauntlet of impossible challenges to prove their worthiness to face down this cosmic menace — but what's really waiting for them at the finish line? And can even the two mightiest heroes on the planet smash their way out of this one? Find out in a cosmic battle for the ages!",
        modified: '2018-03-23T18:00:30-0400',
        isbn: '978-1-302-90537-8',
        upc: '',
        diamondCode: 'JAN181037',
        ean: '9781302 905378 51499',
        issn: '',
        format: 'Trade Paperback',
        pageCount: 136,
        textObjects: [
          {
            type: 'issue_solicit_text',
            language: 'en-us',
            text:
              "Collects Thor Vs. Hulk - Champions of The Universe #1-6. An Elder of the Universe has come to Earth, and he means to battle our planet's strongest hero. But will Thor and Hulk ever agree on which one of them that is? Of course not! Asgard's Avenger and the green goliath will have to run a gauntlet of impossible challenges to prove their worthiness to face down this cosmic menace — but what's really waiting for them at the finish line? And can even the two mightiest heroes on the planet smash their way out of this one? Find out in a cosmic battle for the ages!",
          },
        ],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/62174',
        urls: [
          {
            type: 'detail',
            url:
              'http://marvel.com/comics/collection/62174/thor_vs_hulk_champions_of_the_universe_trade_paperback?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/22798',
          name: 'Thor Vs. Hulk: Champions of the Universe (2018)',
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2018-03-28T00:00:00-0400',
          },
          {
            type: 'focDate',
            date: '2018-02-05T00:00:00-0500',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 14.99,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/b0/5ab57e4e085ef',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/b0/5ab57e4e085ef',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 5,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/62174/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/13239',
              name: 'Simone Buonfantino',
              role: 'penciller',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/12707',
              name: 'Alti Firmansyah',
              role: 'penciller',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/13038',
              name: 'Daniel Mora',
              role: 'penciller (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/12838',
              name: 'Jeremy Whitley',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/4430',
              name: 'Jeff Youngquist',
              role: 'editor',
            },
          ],
          returned: 5,
        },
        characters: {
          available: 2,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/62174/characters',
          items: [
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009351',
              name: 'Hulk',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009664',
              name: 'Thor',
            },
          ],
          returned: 2,
        },
        stories: {
          available: 2,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/62174/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/134733',
              name: 'cover from Iron Fists (2018)',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/134734',
              name: 'story from Iron Fists (2018)',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/62174/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 60172,
        digitalId: 0,
        title: "Mighty Thor Vol. 3: The Asgard/Shi'ar War (Trade Paperback)",
        issueNumber: 0,
        variantDescription: '',
        description:
          'Two of the Marvel Universe’s mightiest races are on a collision course — but first Thor must deal with the escalating War of the Realms! To face Malekith, Loki and an all-new Kurse, she’ll need a team of her own. Prepare for the triumphant return of the League of Realms! Far across the galaxy, though, another conflict is brewing as the most powerful super-army in the cosmos prepares a surprise attack on the city of the gods! The Shi’ar Empire will lay siege to Asgardia — and its target is the Goddess of Thunder! But why? And what does the fate of Midgard have to do with it? And where the Shi’ar go, the Phoenix Force tends to follow — which is bad news for Thor! Maybe the returning Odinson could lend a hand — or perhaps, Quentin Quire?! Collecting MIGHTY THOR (2015) #13-19.',
        modified: '2018-03-23T17:39:48-0400',
        isbn: '978-1-302-90309-1',
        upc: '',
        diamondCode: 'JAN181043',
        ean: '9781302 903091 51999',
        issn: '',
        format: 'Trade Paperback',
        pageCount: 160,
        textObjects: [
          {
            type: 'issue_solicit_text',
            language: 'en-us',
            text:
              'Two of the Marvel Universe’s mightiest races are on a collision course — but first Thor must deal with the escalating War of the Realms! To face Malekith, Loki and an all-new Kurse, she’ll need a team of her own. Prepare for the triumphant return of the League of Realms! Far across the galaxy, though, another conflict is brewing as the most powerful super-army in the cosmos prepares a surprise attack on the city of the gods! The Shi’ar Empire will lay siege to Asgardia — and its target is the Goddess of Thunder! But why? And what does the fate of Midgard have to do with it? And where the Shi’ar go, the Phoenix Force tends to follow — which is bad news for Thor! Maybe the returning Odinson could lend a hand — or perhaps, Quentin Quire?! Collecting MIGHTY THOR (2015) #13-19.',
          },
        ],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/60172',
        urls: [
          {
            type: 'detail',
            url:
              'http://marvel.com/comics/collection/60172/mighty_thor_vol_3_the_asgardshiar_war_trade_paperback?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/22121',
          name: "Mighty Thor Vol. 3: The Asgard/Shi'ar War (2018)",
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2018-03-28T00:00:00-0400',
          },
          {
            type: 'focDate',
            date: '2018-02-05T00:00:00-0500',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 19.99,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/7/00/5ab57f7697b51',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/7/00/5ab57f7697b51',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 4,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/60172/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/11463',
              name: 'Jason Aaron',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/12449',
              name: 'Russell Dauterman',
              role: 'penciller (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/374',
              name: 'Steve Epting',
              role: 'artist',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/4430',
              name: 'Jeff Youngquist',
              role: 'editor',
            },
          ],
          returned: 4,
        },
        characters: {
          available: 4,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/60172/characters',
          items: [
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1017574',
              name: 'Angela (Aldrif Odinsdottir)',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009588',
              name: 'Sif',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009664',
              name: 'Thor',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1017576',
              name: 'Thor (Goddess of Thunder)',
            },
          ],
          returned: 4,
        },
        stories: {
          available: 2,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/60172/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/130841',
              name: 'cover from Mighty Thor (2017)',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/130842',
              name: 'story from Mighty Thor (2017)',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/60172/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 66787,
        digitalId: 0,
        title: 'Marvel Universe Avengers: Ultron Revolution (2017) #17',
        issueNumber: 17,
        variantDescription: '',
        description:
          'AVENGERS VS. INHUMANS! When several townspeople mysteriously transform into primitive beings, the AVENGERS must step in and try to help.',
        modified: '2018-03-21T15:17:36-0400',
        isbn: '',
        upc: '75960608938301711',
        diamondCode: '',
        ean: '',
        issn: '',
        format: 'Infinite Comic',
        pageCount: 1,
        textObjects: [
          {
            type: 'issue_solicit_text',
            language: 'en-us',
            text:
              'AVENGERS VS. INHUMANS! When several townspeople mysteriously transform into primitive beings, the AVENGERS must step in and try to help.',
          },
        ],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/66787',
        urls: [
          {
            type: 'detail',
            url:
              'http://marvel.com/comics/issue/66787/marvel_universe_avengers_ultron_revolution_2017_17?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/23793',
          name: 'Marvel Universe Avengers: Ultron Revolution (2017 - 2018)',
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2018-03-27T00:00:00-0400',
          },
          {
            type: 'focDate',
            date: '-0001-11-30T00:00:00-0500',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 0,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/f/50/5ab2aedf6f833',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/f/50/5ab2aedf6f833',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 2,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/66787/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/11401',
              name: 'various',
              role: 'penciller (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/5251',
              name: 'Joe Caramagna',
              role: 'letterer',
            },
          ],
          returned: 2,
        },
        characters: {
          available: 8,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/66787/characters',
          items: [
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009165',
              name: 'Avengers',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009189',
              name: 'Black Widow',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009220',
              name: 'Captain America',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009338',
              name: 'Hawkeye',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009351',
              name: 'Hulk',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009365',
              name: 'Inhumans',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009368',
              name: 'Iron Man',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009664',
              name: 'Thor',
            },
          ],
          returned: 8,
        },
        stories: {
          available: 2,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/66787/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/144729',
              name:
                'cover from Marvel Universe Avengers: Ultron Revolution (Digital Comic) (2017) #17',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/144730',
              name:
                'story from Marvel Universe Avengers: Ultron Revolution (Digital Comic) (2017) #17',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/66787/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 66207,
        digitalId: 0,
        title: 'Marvel Masterworks: Marvel Two-In-One Vol. 3 (Hardcover)',
        issueNumber: 0,
        variantDescription: '',
        description:
          "Collects Marvel Two-In-One (1974) #21-36. The Ever-Lovin' Blue-Eyed Thing is back with the Marvel Universe's greatest stars and one from a world all his own. The Marvel Masterworks are proud to reprint, for the first time ever, the Thing's MTIO adventure with Doc Savage! It kicks off a multipart saga spanning decades and the cosmos itself, and this will be your only chance to experience the story! The adventure doesn't stop there, either. Deathlok arrives on an assassination mission, and the Thing must stop him. Thor, Iron Fist, Black Goliath, Nick Fury, the Sub-Mariner, Shang-Chi and Spider-Woman will enter the fray, all while Mr. Fantastic seeks to free Deathlok's mind. And if that's not enough for you, the Bermuda Triangle sends the Thing back in time and he punches some dinosaurs!",
        modified: '2018-03-14T17:04:40-0400',
        isbn: '978-1-302-90964-2',
        upc: '',
        diamondCode: 'AUG171012',
        ean: '9781302 909642 57500',
        issn: '',
        format: 'Hardcover',
        pageCount: 304,
        textObjects: [
          {
            type: 'issue_solicit_text',
            language: 'en-us',
            text:
              "Collects Marvel Two-In-One (1974) #21-36. The Ever-Lovin' Blue-Eyed Thing is back with the Marvel Universe's greatest stars and one from a world all his own. The Marvel Masterworks are proud to reprint, for the first time ever, the Thing's MTIO adventure with Doc Savage! It kicks off a multipart saga spanning decades and the cosmos itself, and this will be your only chance to experience the story! The adventure doesn't stop there, either. Deathlok arrives on an assassination mission, and the Thing must stop him. Thor, Iron Fist, Black Goliath, Nick Fury, the Sub-Mariner, Shang-Chi and Spider-Woman will enter the fray, all while Mr. Fantastic seeks to free Deathlok's mind. And if that's not enough for you, the Bermuda Triangle sends the Thing back in time and he punches some dinosaurs!",
          },
        ],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/66207',
        urls: [
          {
            type: 'detail',
            url:
              'http://marvel.com/comics/collection/66207/marvel_masterworks_marvel_two-in-one_vol_3_hardcover?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/24004',
          name: 'Marvel Masterworks: Marvel Two-In-One Vol. 3 (2018)',
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2018-03-21T00:00:00-0400',
          },
          {
            type: 'focDate',
            date: '2017-10-16T00:00:00-0400',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 75,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/d0/5aa99bafa3958',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/d0/5aa99bafa3958',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 9,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/66207/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/1612',
              name: 'John Buscema',
              role: 'penciller (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/6257',
              name: 'Ernie Chan',
              role: 'penciller',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/198',
              name: 'Marie Severin',
              role: 'penciller',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/1219',
              name: 'Ron Wilson',
              role: 'penciller',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/1168',
              name: 'All Thumbs Creative',
              role: 'colorist (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/966',
              name: 'Bill Mantlo',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/946',
              name: 'Jim Shooter',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/271',
              name: 'Marv Wolfman',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/4430',
              name: 'Jeff Youngquist',
              role: 'editor',
            },
          ],
          returned: 9,
        },
        characters: {
          available: 9,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/66207/characters',
          items: [
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1010890',
              name: 'Deathlok',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009299',
              name: 'Fantastic Four',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1010927',
              name: 'Goliath (Bill Foster)',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009367',
              name: 'Iron Fist (Danny Rand)',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009471',
              name: 'Nick Fury',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009577',
              name: 'Shang-Chi',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009608',
              name: 'Spider-Woman (Jessica Drew)',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1010791',
              name: 'Sub-Mariner',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009664',
              name: 'Thor',
            },
          ],
          returned: 9,
        },
        stories: {
          available: 2,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/66207/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/143541',
              name:
                'cover from MARVEL MASTERWORKS: MARVEL TWO-IN-ONE VOL. 3 HC (2018) #3',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/143542',
              name:
                'story from MARVEL MASTERWORKS: MARVEL TWO-IN-ONE VOL. 3 HC (2018) #3',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/66207/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 66546,
        digitalId: 0,
        title: 'Mighty Thor (2015) #705',
        issueNumber: 705,
        variantDescription: '',
        description:
          'The epic showdown years in the making finally explodes across the heavens. Thor battles the unstoppable Mangog, with the fate of all Asgardia hanging in the balance. Is Thor willing to pay the ultimate price in order to save the gods? The tragic and heroic story of Jane Foster finally reaches its heart-rending zenith. You knew it was coming. The Death of Thor is here at last.',
        modified: '2018-03-14T14:42:40-0400',
        isbn: '',
        upc: '75960608774770511',
        diamondCode: 'JAN180888',
        ean: '',
        issn: '2160-1496',
        format: 'Comic',
        pageCount: 32,
        textObjects: [
          {
            type: 'issue_solicit_text',
            language: 'en-us',
            text:
              'The epic showdown years in the making finally explodes across the heavens. Thor battles the unstoppable Mangog, with the fate of all Asgardia hanging in the balance. Is Thor willing to pay the ultimate price in order to save the gods? The tragic and heroic story of Jane Foster finally reaches its heart-rending zenith. You knew it was coming. The Death of Thor is here at last.',
          },
        ],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/66546',
        urls: [
          {
            type: 'detail',
            url:
              'http://marvel.com/comics/issue/66546/mighty_thor_2015_705?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0',
          },
          {
            type: 'purchase',
            url:
              'http://comicstore.marvel.com/Mighty-Thor-705/digital-comic/47586?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/20527',
          name: 'Mighty Thor (2015 - Present)',
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2018-03-21T00:00:00-0400',
          },
          {
            type: 'focDate',
            date: '2018-02-26T00:00:00-0500',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 3.99,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/8/c0/5aa960c4c5e01',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/8/c0/5aa960c4c5e01',
            extension: 'jpg',
          },
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/20/5a53c0596c7aa',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 5,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/66546/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/11463',
              name: 'Jason Aaron',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/12449',
              name: 'Russell Dauterman',
              role: 'inker (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/12376',
              name: 'Wilson Moss',
              role: 'editor',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/12974',
              name: 'Vc Joe Sabino',
              role: 'letterer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/10279',
              name: 'Matthew Wilson',
              role: 'colorist (cover)',
            },
          ],
          returned: 5,
        },
        characters: {
          available: 2,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/66546/characters',
          items: [
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009664',
              name: 'Thor',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1017576',
              name: 'Thor (Goddess of Thunder)',
            },
          ],
          returned: 2,
        },
        stories: {
          available: 2,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/66546/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/144246',
              name: 'cover from Mighty Thor (2017) #705',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/144247',
              name: 'story from Mighty Thor (2017) #705',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/66546/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 66786,
        digitalId: 0,
        title: 'Marvel Universe Avengers: Ultron Revolution (2017) #16',
        issueNumber: 16,
        variantDescription: '',
        description:
          'THE VISION joins THE AVENGERS on an Asgardian adventure to help THOR defeat the DESTROYER – which is being controlled by ULTRON himself!',
        modified: '2018-03-14T14:06:06-0400',
        isbn: '',
        upc: '75960608938301611',
        diamondCode: '',
        ean: '',
        issn: '',
        format: 'Infinite Comic',
        pageCount: 1,
        textObjects: [
          {
            type: 'issue_solicit_text',
            language: 'en-us',
            text:
              'THE VISION joins THE AVENGERS on an Asgardian adventure to help THOR defeat the DESTROYER – which is being controlled by ULTRON himself!',
          },
        ],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/66786',
        urls: [
          {
            type: 'detail',
            url:
              'http://marvel.com/comics/issue/66786/marvel_universe_avengers_ultron_revolution_2017_16?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/23793',
          name: 'Marvel Universe Avengers: Ultron Revolution (2017 - 2018)',
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2018-03-20T00:00:00-0400',
          },
          {
            type: 'focDate',
            date: '-0001-11-30T00:00:00-0500',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 0,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/10/5aa6b1736da65',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/10/5aa6b1736da65',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 2,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/66786/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/11401',
              name: 'various',
              role: 'penciller (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/5251',
              name: 'Joe Caramagna',
              role: 'writer',
            },
          ],
          returned: 2,
        },
        characters: {
          available: 3,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/66786/characters',
          items: [
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009165',
              name: 'Avengers',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009664',
              name: 'Thor',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009697',
              name: 'Vision',
            },
          ],
          returned: 3,
        },
        stories: {
          available: 2,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/66786/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/144727',
              name:
                'cover from Marvel Universe Avengers: Ultron Revolution (Digital Comic) (2017) #16',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/144728',
              name:
                'story from Marvel Universe Avengers: Ultron Revolution (Digital Comic) (2017) #16',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/66786/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 66785,
        digitalId: 0,
        title: 'Marvel Universe Avengers: Ultron Revolution (2017) #15',
        issueNumber: 15,
        variantDescription: '',
        description:
          "Everyone's favorite synthezoid joins the AVENGERS! Enter…THE IMPENETRABLE VISION!",
        modified: '2018-03-07T16:57:16-0500',
        isbn: '',
        upc: '75960608938301511',
        diamondCode: '',
        ean: '',
        issn: '',
        format: 'Infinite Comic',
        pageCount: 1,
        textObjects: [
          {
            type: 'issue_solicit_text',
            language: 'en-us',
            text:
              "Everyone's favorite synthezoid joins the AVENGERS! Enter…THE IMPENETRABLE VISION!",
          },
        ],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/66785',
        urls: [
          {
            type: 'detail',
            url:
              'http://marvel.com/comics/issue/66785/marvel_universe_avengers_ultron_revolution_2017_15?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/23793',
          name: 'Marvel Universe Avengers: Ultron Revolution (2017 - 2018)',
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2018-03-13T00:00:00-0400',
          },
          {
            type: 'focDate',
            date: '-0001-11-30T00:00:00-0500',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 0,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/10/5aa6b12fc497a',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/10/5aa6b12fc497a',
            extension: 'jpg',
          },
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/f/b0/5aa05f97bd9fc',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 2,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/66785/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/11401',
              name: 'various',
              role: 'penciller (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/5251',
              name: 'Joe Caramagna',
              role: 'writer',
            },
          ],
          returned: 2,
        },
        characters: {
          available: 8,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/66785/characters',
          items: [
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009165',
              name: 'Avengers',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009189',
              name: 'Black Widow',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009220',
              name: 'Captain America',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009338',
              name: 'Hawkeye',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009351',
              name: 'Hulk',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009368',
              name: 'Iron Man',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009664',
              name: 'Thor',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009697',
              name: 'Vision',
            },
          ],
          returned: 8,
        },
        stories: {
          available: 2,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/66785/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/144725',
              name:
                'cover from Marvel Universe Avengers: Ultron Revolution (Digital Comic) (2017) #15',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/144726',
              name:
                'story from Marvel Universe Avengers: Ultron Revolution (Digital Comic) (2017) #15',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/66785/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 66206,
        digitalId: 0,
        title: 'Marvel Legacy (Hardcover)',
        issueNumber: 0,
        variantDescription: '',
        description:
          "Collects Marvel Legacy #1, Marvel Legacy Primer pages, FOOM Magazine (2017). EVERYTHING STARTS HERE! It begins at the dawn of the human race, and ends with a child's prayer! In between, empires fall, mysteries brew, secrets are revealed, quests are undertaken and legends are forged! All leading up to the dramatic return you've been waiting for - and one you've been dreading! Jason Aaron (MIGHTY THOR) and Esad Ribic (SECRET WARS) usher in a new dawn - one whose rays will touch every corner of the Marvel Universe in the days to come! MARVEL LEGACY: It's everything you've been longing for - and more!",
        modified: '2018-02-14T17:04:11-0500',
        isbn: '978-1-302-91101-0',
        upc: '',
        diamondCode: 'NOV171038',
        ean: '9781302 911010 53999',
        issn: '',
        format: 'Hardcover',
        pageCount: 264,
        textObjects: [
          {
            type: 'issue_solicit_text',
            language: 'en-us',
            text:
              "Collects Marvel Legacy #1, Marvel Legacy Primer pages, FOOM Magazine (2017). EVERYTHING STARTS HERE! It begins at the dawn of the human race, and ends with a child's prayer! In between, empires fall, mysteries brew, secrets are revealed, quests are undertaken and legends are forged! All leading up to the dramatic return you've been waiting for - and one you've been dreading! Jason Aaron (MIGHTY THOR) and Esad Ribic (SECRET WARS) usher in a new dawn - one whose rays will touch every corner of the Marvel Universe in the days to come! MARVEL LEGACY: It's everything you've been longing for - and more!",
          },
        ],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/66206',
        urls: [
          {
            type: 'detail',
            url:
              'http://marvel.com/comics/collection/66206/marvel_legacy_hardcover?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0',
          },
          {
            type: 'purchase',
            url:
              'http://comicstore.marvel.com/MARVEL-LEGACY-HC-0/digital-comic/47254?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/24003',
          name: 'Marvel Legacy (2018)',
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2018-02-21T00:00:00-0500',
          },
          {
            type: 'focDate',
            date: '2017-12-25T00:00:00-0500',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 39.99,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/80/5a84b6736611e',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/80/5a84b6736611e',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 5,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/66206/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/11401',
              name: 'various',
              role: 'penciller',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/182',
              name: 'Esad Ribic',
              role: 'penciller',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/11463',
              name: 'Jason Aaron',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/3635',
              name: 'Joe Quesada',
              role: 'penciller (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/4430',
              name: 'Jeff Youngquist',
              role: 'editor',
            },
          ],
          returned: 5,
        },
        characters: {
          available: 7,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/66206/characters',
          items: [
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009165',
              name: 'Avengers',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009220',
              name: 'Captain America',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1010338',
              name: 'Captain Marvel (Carol Danvers)',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009351',
              name: 'Hulk',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1011307',
              name: 'Star Brand',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009664',
              name: 'Thor',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009718',
              name: 'Wolverine',
            },
          ],
          returned: 7,
        },
        stories: {
          available: 2,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/66206/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/143539',
              name: 'cover from MARVEL LEGACY HC (2018) #1',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/143540',
              name: 'story from MARVEL LEGACY HC (2018) #1',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/66206/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 66282,
        digitalId: 0,
        title: 'Incredible Hulk (2017) #713',
        issueNumber: 713,
        variantDescription: '',
        description:
          'RETURN TO PLANET HULK PART 5 HULK has reached the final level of THE GAUNTLET! The freedom of the DOKA’ABI CLAN rests on his shoulders alone…Who is the true WORLD BREAKER? With AMADEUS refusing to embrace the DARK HULK within, it’s up to the Warlord of Sakaar to show him real brutality…Guest-starring THE UNWORTHY THOR!',
        modified: '2018-02-14T14:50:46-0500',
        isbn: '',
        upc: '75960608769371311',
        diamondCode: 'DEC170814',
        ean: '',
        issn: '0274-5275',
        format: 'Comic',
        pageCount: 32,
        textObjects: [
          {
            type: 'issue_solicit_text',
            language: 'en-us',
            text:
              'RETURN TO PLANET HULK PART 5 HULK has reached the final level of THE GAUNTLET! The freedom of the DOKA’ABI CLAN rests on his shoulders alone…Who is the true WORLD BREAKER? With AMADEUS refusing to embrace the DARK HULK within, it’s up to the Warlord of Sakaar to show him real brutality…Guest-starring THE UNWORTHY THOR!',
          },
        ],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/66282',
        urls: [
          {
            type: 'detail',
            url:
              'http://marvel.com/comics/issue/66282/incredible_hulk_2017_713?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0',
          },
          {
            type: 'purchase',
            url:
              'http://comicstore.marvel.com/Incredible-Hulk-713/digital-comic/47334?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/23635',
          name: 'Incredible Hulk (2017 - 2018)',
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2018-02-21T00:00:00-0500',
          },
          {
            type: 'focDate',
            date: '2018-01-29T00:00:00-0500',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 3.99,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/03/5a8484e193317',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/03/5a8484e193317',
            extension: 'jpg',
          },
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/8/e0/5a1f239b3a8a3',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 6,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/66282/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/2133',
              name: 'Tom Brevoort',
              role: 'editor',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/8504',
              name: "Frank D'ARMATA",
              role: 'colorist (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/425',
              name: 'Greg Land',
              role: 'penciler (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/616',
              name: 'Jay Leisten',
              role: 'inker (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/536',
              name: 'Greg Pak',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/12980',
              name: 'Vc Cory Petit',
              role: 'letterer',
            },
          ],
          returned: 6,
        },
        characters: {
          available: 2,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/66282/characters',
          items: [
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1011227',
              name: 'Amadeus Cho',
            },
            {
              resourceURI:
                'http://gateway.marvel.com/v1/public/characters/1009664',
              name: 'Thor',
            },
          ],
          returned: 2,
        },
        stories: {
          available: 2,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/66282/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/143707',
              name: 'cover from Incredible Hulk (2017) #713',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/143708',
              name: 'story from Incredible Hulk (2017) #713',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI:
            'http://gateway.marvel.com/v1/public/comics/66282/events',
          items: [],
          returned: 0,
        },
      },
    ],
    searchCharacterEvent: [],
    authToken:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoiZGVtb3VzZXIiLCJfaWQiOiI1YjAzZDViNzRiMTI1NzU2ZmNjY2I5ZDgifSwiaWF0IjoxNTI3NjUwODIxLCJleHAiOjE1MjgyNTU2MjEsInN1YiI6ImRlbW91c2VyIn0.8OOCinb4q-cgkn_d-HPq1la4xj7MP8qc4tpk50jDtoI',
    subscribe: () => {},
    dispatch,
    getState: () => {},
  };

  it('Renders without crashing', () => {
    const wrapper = shallow(
      <Provider store={testStore}>
        <SearchResults dispatch={dispatch} />
      </Provider>
    );
  });
});
