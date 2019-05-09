import React, { FunctionComponent } from 'react';
import { CourseType, PointType, SearchResult, VehicleType } from './types';

const SearchResult: FunctionComponent<{}> = () => {
  return <span>foo</span>;
};

const dummySearchResult: SearchResult = {
  paths: [
    {
      courses: [
        {
          id: 1,
          line: { number: '24', vehicleType: VehicleType.tram },
          points: [
            {
              onDemand: false,
              place: {
                lat: 50.057352,
                lng: 19.944549,
                locality: { name: 'Kraków' },
                name: 'Starowiślna'
              },
              time: new Date('05-01-2019 10:03:00'),
              type: PointType.place
            },
            {
              onDemand: false,
              place: {
                lat: 50.0592269,
                lng: 19.9420868,
                locality: { name: 'Kraków' },
                name: 'Poczta główna'
              },
              time: new Date('05-01-2019 10:04:00'),
              type: PointType.place
            },
            {
              onDemand: false,
              place: {
                lat: 50.064098,
                lng: 19.945048,
                locality: { name: 'Kraków' },
                name: 'Teatr Słowackiego'
              },
              time: new Date('05-01-2019 10:06:00'),
              type: PointType.place
            }
          ],
          timetable: {
            supportedCompany: { name: 'MPK S.A.' },
            validFrom: new Date('05-01-2019 00:00:00'),
            validUntil: new Date('07-01-2019 00:00:00')
          },
          type: CourseType.transit
        },
        {
          points: [
            {
              onDemand: false,
              place: {
                lat: 50.064098,
                lng: 19.945048,
                locality: { name: 'Kraków' },
                name: 'Teatr Słowackiego'
              },
              time: new Date('05-01-2019 10:06:00'),
              type: PointType.place
            },
            {
              onDemand: false,
              place: {
                lat: 50.068014,
                lng: 19.949177,
                locality: { name: 'Kraków' },
                name: 'MDA'
              },
              time: new Date('05-01-2019 10:16:00'),
              type: PointType.place
            }
          ],
          type: CourseType.walking
        },
        {
          id: 2,
          line: { number: '1', vehicleType: VehicleType.bus },
          points: [
            {
              onDemand: false,
              place: {
                lat: 50.068014,
                lng: 19.949177,
                locality: { name: 'Kraków' },
                name: 'MDA'
              },
              time: new Date('05-01-2019 11:10:00'),
              type: PointType.place
            },
            {
              onDemand: true,
              place: {
                lat: 50.068863,
                lng: 19.925875,
                locality: { name: 'Kraków' },
                name: 'Plac Inwalidów'
              },
              time: new Date('05-01-2019 11:14:00'),
              type: PointType.place
            },
            {
              onDemand: true,
              place: {
                lat: 50.066616,
                lng: 19.922142,
                locality: { name: 'Kraków' },
                name: 'Czarnowiejska'
              },
              time: new Date('05-01-2019 11:15:00'),
              type: PointType.place
            },
            {
              onDemand: true,
              place: {
                lat: 50.069925,
                lng: 19.905596,
                locality: { name: 'Kraków' },
                name: 'Miasteczko studenckie AGH'
              },
              time: new Date('05-01-2019 11:17:00'),
              type: PointType.place
            },
            {
              onDemand: true,
              place: {
                lat: 50.080821,
                lng: 19.890695,
                locality: { name: 'Kraków' },
                name: 'Bronowice Wiadukt'
              },
              time: new Date('05-01-2019 11:21:00'),
              type: PointType.place
            },
            {
              onDemand: true,
              place: {
                lat: 50.087687,
                lng: 19.890719,
                locality: { name: 'Kraków' },
                name: 'Rondo Ofiar Katynia'
              },
              time: new Date('05-01-2019 11:22:00'),
              type: PointType.place
            },
            {
              onDemand: true,
              place: {
                lat: 50.142694,
                lng: 19.411013,
                locality: { name: 'Chrzanów' },
                name: 'Chrzanów Dworzec Autobusowy'
              },
              time: new Date('05-01-2019 12:06:00'),
              type: PointType.place
            },
            {
              onDemand: true,
              place: {
                lat: 50.14402,
                lng: 19.4051,
                locality: { name: 'Chrzanów' },
                name: 'Chrzanów Śródmieście'
              },
              time: new Date('05-01-2019 12:07:00'),
              type: PointType.place
            },
            {
              onDemand: true,
              place: {
                lat: 50.142413,
                lng: 19.397854,
                locality: { name: 'Chrzanów' },
                name: 'Chrzanów ZUS'
              },
              time: new Date('05-01-2019 12:09:00'),
              type: PointType.place
            },
            {
              onDemand: true,
              place: {
                lat: 50.106544,
                lng: 19.328383,
                locality: { name: 'Libiąż' },
                name: 'Jowisz'
              },
              time: new Date('05-01-2019 12:18:00'),
              type: PointType.place
            },
            {
              onDemand: true,
              place: {
                lat: 50.103183,
                lng: 19.313642,
                locality: { name: 'Libiąż' },
                name: 'Urząd Miejski'
              },
              time: new Date('05-01-2019 12:20:00'),
              type: PointType.place
            },
            {
              onDemand: true,
              place: {
                lat: 50.098759,
                lng: 19.306185,
                locality: { name: 'Libiąż' },
                name: 'Kościół'
              },
              time: new Date('05-01-2019 12:21:00'),
              type: PointType.place
            },
            {
              onDemand: true,
              place: {
                lat: 50.041276,
                lng: 19.200365,
                locality: { name: 'Oświęcim' },
                name: 'Dworzec PKP'
              },
              time: new Date('05-01-2019 12:33:00'),
              type: PointType.place
            }
          ],
          timetable: {
            supportedCompany: { name: 'Lajkonik Sp. Jawna' },
            validFrom: new Date('11-01-2018 00:00:00'),
            validUntil: new Date('09-30-2019 23:59:59')
          },
          type: CourseType.transit
        },
        {
          id: 3,
          line: { number: '1', vehicleType: VehicleType.bus },
          points: [
            {
              onDemand: true,
              place: {
                lat: 50.041276,
                lng: 19.200365,
                locality: { name: 'Oświęcim' },
                name: 'Dworzec PKP'
              },
              time: new Date('05-01-2019 12:46:00'),
              type: PointType.place
            },
            {
              onDemand: true,
              place: {
                lat: 50.041276,
                lng: 19.200365,
                locality: { name: 'Oświęcim' },
                name: 'Zasole Walcownia'
              },
              time: new Date('05-01-2019 12:47:00'),
              type: PointType.place
            },
            {
              onDemand: true,
              place: {
                lat: 50.041276,
                lng: 19.200365,
                locality: { name: 'Oświęcim' },
                name: 'Zasole 1'
              },
              time: new Date('05-01-2019 12:48:00'),
              type: PointType.place
            },
            {
              onDemand: true,
              place: {
                lat: 50.041276,
                lng: 19.200365,
                locality: { name: 'Oświęcim' },
                name: 'Muzeum 1'
              },
              time: new Date('05-01-2019 12:49:00'),
              type: PointType.place
            },
            {
              onDemand: true,
              place: {
                lat: 50.041276,
                lng: 19.200365,
                locality: { name: 'Rajsko' },
                name: 'Ogrody'
              },
              time: new Date('05-01-2019 12:51:00'),
              type: PointType.place
            },
            {
              onDemand: true,
              place: {
                lat: 50.041276,
                lng: 19.200365,
                locality: { name: 'Rajsko' },
                name: 'Żwirownia'
              },
              time: new Date('05-01-2019 12:52:00'),
              type: PointType.place
            },
            {
              onDemand: true,
              place: {
                lat: 50.041276,
                lng: 19.200365,
                locality: { name: 'Rajsko' },
                name: 'Pomink'
              },
              time: new Date('05-01-2019 12:53:00'),
              type: PointType.place
            },
            {
              onDemand: true,
              place: {
                lat: 50.041276,
                lng: 19.200365,
                locality: { name: 'Rajsko' },
                name: 'Pałac'
              },
              time: new Date('05-01-2019 12:54:00'),
              type: PointType.place
            },
            {
              onDemand: true,
              place: {
                lat: 50.041276,
                lng: 19.200365,
                locality: { name: 'Rajsko' },
                name: 'Cegielnia'
              },
              time: new Date('05-01-2019 12:55:00'),
              type: PointType.place
            },
            {
              onDemand: true,
              place: {
                lat: 50.041276,
                lng: 19.200365,
                locality: { name: 'Brzeszcze' },
                name: 'Budy'
              },
              time: new Date('05-01-2019 12:56:00'),
              type: PointType.place
            },
            {
              onDemand: true,
              place: {
                lat: 50.041276,
                lng: 19.200365,
                locality: { name: 'Brzeszcze' },
                name: 'Alejka'
              },
              time: new Date('05-01-2019 12:57:00'),
              type: PointType.place
            },
            {
              onDemand: true,
              place: {
                lat: 50.041276,
                lng: 19.200365,
                locality: { name: 'Brzeszcze' },
                name: 'Bór'
              },
              time: new Date('05-01-2019 12:58:00'),
              type: PointType.place
            },
            {
              onDemand: true,
              place: {
                lat: 50.041276,
                lng: 19.200365,
                locality: { name: 'Brzeszcze' },
                name: 'Alejka'
              },
              time: new Date('05-01-2019 12:59:00'),
              type: PointType.place
            },
            {
              onDemand: true,
              place: {
                lat: 50.041276,
                lng: 19.200365,
                locality: { name: 'Brzeszcze' },
                name: 'Ośrodek Zdrowia'
              },
              time: new Date('05-01-2019 13:00:00'),
              type: PointType.place
            },
            {
              onDemand: true,
              place: {
                lat: 50.041276,
                lng: 19.200365,
                locality: { name: 'Brzeszcze' },
                name: 'Kościół'
              },
              time: new Date('05-01-2019 13:01:00'),
              type: PointType.place
            },
            {
              onDemand: true,
              place: {
                lat: 50.041276,
                lng: 19.200365,
                locality: { name: 'Brzeszcze' },
                name: 'Strażnica'
              },
              time: new Date('05-01-2019 13:02:00'),
              type: PointType.place
            },
            {
              onDemand: true,
              place: {
                lat: 50.041276,
                lng: 19.200365,
                locality: { name: 'Brzeszcze' },
                name: 'Osiedle'
              },
              time: new Date('05-01-2019 13:03:00'),
              type: PointType.place
            },
            {
              onDemand: true,
              place: {
                lat: 50.041276,
                lng: 19.200365,
                locality: { name: 'Jawiszowice' },
                name: 'POM'
              },
              time: new Date('05-01-2019 13:04:00'),
              type: PointType.place
            },
            {
              onDemand: true,
              place: {
                lat: 50.041276,
                lng: 19.200365,
                locality: { name: 'Jawiszowice' },
                name: 'Szkoła'
              },
              time: new Date('05-01-2019 13:05:00'),
              type: PointType.place
            },
            {
              onDemand: true,
              place: {
                lat: 50.041276,
                lng: 19.200365,
                locality: { name: 'Jawiszowice' },
                name: 'Kółko'
              },
              time: new Date('05-01-2019 13:06:00'),
              type: PointType.place
            },
            {
              onDemand: true,
              place: {
                lat: 50.041276,
                lng: 19.200365,
                locality: { name: 'Jawiszowice' },
                name: 'Przeczna'
              },
              time: new Date('05-01-2019 13:07:00'),
              type: PointType.place
            },
            {
              onDemand: true,
              place: {
                lat: 50.041276,
                lng: 19.200365,
                locality: { name: 'Jawiszowice' },
                name: 'Las'
              },
              time: new Date('05-01-2019 13:08:00'),
              type: PointType.place
            },
            {
              onDemand: true,
              place: {
                lat: 50.041276,
                lng: 19.200365,
                locality: { name: 'Jawiszowice' },
                name: 'Skrzyżowanie'
              },
              time: new Date('05-01-2019 13:09:00'),
              type: PointType.place
            },
            {
              onDemand: true,
              place: {
                lat: 50.041276,
                lng: 19.200365,
                locality: { name: 'Wilamowice' },
                name: 'Las'
              },
              time: new Date('05-01-2019 13:10:00'),
              type: PointType.place
            },
            {
              onDemand: true,
              place: {
                lat: 50.041276,
                lng: 19.200365,
                locality: { name: 'Wilamowice' },
                name: 'Kółko'
              },
              time: new Date('05-01-2019 13:12:00'),
              type: PointType.place
            },
            {
              onDemand: true,
              place: {
                lat: 50.041276,
                lng: 19.200365,
                locality: { name: 'Wilamowice' },
                name: 'Kościół'
              },
              time: new Date('05-01-2019 13:13:00'),
              type: PointType.place
            },
            {
              onDemand: true,
              place: {
                lat: 50.041276,
                lng: 19.200365,
                locality: { name: 'Wilamowice' },
                name: 'Skrzyżowanie'
              },
              time: new Date('05-01-2019 13:14:00'),
              type: PointType.place
            },
            {
              onDemand: true,
              place: {
                lat: 50.041276,
                lng: 19.200365,
                locality: { name: 'Pisarzowice' },
                name: 'Krzemień'
              },
              time: new Date('05-01-2019 13:16:00'),
              type: PointType.place
            },
            {
              onDemand: true,
              place: {
                lat: 50.041276,
                lng: 19.200365,
                locality: { name: 'Pisarzowice' },
                name: 'Ośroek zdrowia'
              },
              time: new Date('05-01-2019 13:17:00'),
              type: PointType.place
            },
            {
              onDemand: true,
              place: {
                lat: 50.041276,
                lng: 19.200365,
                locality: { name: 'Pisarzowice' },
                name: 'Lekacz'
              },
              time: new Date('05-01-2019 13:18:00'),
              type: PointType.place
            },
            {
              onDemand: true,
              place: {
                lat: 50.041276,
                lng: 19.200365,
                locality: { name: 'Pisarzowice' },
                name: 'Hałcnów'
              },
              time: new Date('05-01-2019 13:20:00'),
              type: PointType.place
            },
            {
              onDemand: true,
              place: {
                lat: 50.041276,
                lng: 19.200365,
                locality: { name: 'Bielsko-Biała' },
                name: 'Hałcnów Kościół'
              },
              time: new Date('05-01-2019 13:25:00'),
              type: PointType.place
            },
            {
              onDemand: true,
              place: {
                lat: 50.041276,
                lng: 19.200365,
                locality: { name: 'Bielsko-Biała' },
                name: 'Piekarska / Wyzwolenia'
              },
              time: new Date('05-01-2019 13:29:00'),
              type: PointType.place
            },
            {
              onDemand: true,
              place: {
                lat: 50.041276,
                lng: 19.200365,
                locality: { name: 'Bielsko-Biała' },
                name: 'Piekarska - wschód'
              },
              time: new Date('05-01-2019 13:30:00'),
              type: PointType.place
            },
            {
              onDemand: true,
              place: {
                lat: 50.041276,
                lng: 19.200365,
                locality: { name: 'Bielsko-Biała' },
                name: 'Komorowicka Bielsbud'
              },
              time: new Date('05-01-2019 13:31:00'),
              type: PointType.place
            },
            {
              onDemand: true,
              place: {
                lat: 50.041276,
                lng: 19.200365,
                locality: { name: 'Bielsko-Biała' },
                name: 'Piłsudskiego'
              },
              time: new Date('05-01-2019 13:32:00'),
              type: PointType.place
            },
            {
              onDemand: true,
              place: {
                lat: 50.041276,
                lng: 19.200365,
                locality: { name: 'Bielsko-Biała' },
                name: 'Wałowa'
              },
              time: new Date('05-01-2019 13:35:00'),
              type: PointType.place
            },
            {
              onDemand: true,
              place: {
                lat: 50.041276,
                lng: 19.200365,
                locality: { name: 'Bielsko-Biała' },
                name: '3 maja - Dworzec'
              },
              time: new Date('05-01-2019 13:36:00'),
              type: PointType.place
            },
            {
              onDemand: true,
              place: {
                lat: 50.041276,
                lng: 19.200365,
                locality: { name: 'Bielsko-Biała' },
                name: 'Warszawska Dworzec'
              },
              time: new Date('05-01-2019 13:37:00'),
              type: PointType.place
            }
          ],
          timetable: {
            supportedCompany: { name: 'Konkret-Bus' },
            validFrom: new Date('11-01-2018 00:00:00'),
            validUntil: new Date('09-30-2019 23:59:59')
          },
          type: CourseType.transit
        }
      ]
    }
  ]
};

export default SearchResult;
