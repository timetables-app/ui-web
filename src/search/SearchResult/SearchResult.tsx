import React, { FunctionComponent } from 'react';
import { SearchResult, VehicleType } from './types';

const SearchResult: FunctionComponent<{}> = () => {
  return <span>foo</span>;
};

const dummySearchResult: SearchResult = {
  paths: [
    {
      courseParts: [
        {
          course: {
            id: 1,
            line: { number: '24', vehicleType: VehicleType.tram },
            timetable: {
              supportedCompany: { name: 'MPK S.A.' },
              validFrom: new Date('05-01-2019 00:00:00'),
              validUntil: new Date('07-01-2019 00:00:00')
            }
          },
          destination: {
            lat: 50.0592269,
            lng: 19.9420868,
            locality: { name: 'Kraków' },
            name: 'Poczta główna'
          },
          destinationOnDemand: false,
          destinationTime: new Date('05-01-2019 10:04:00'),
          source: {
            lat: 50.057352,
            lng: 19.944549,
            locality: { name: 'Kraków' },
            name: 'Starowiślna'
          },
          sourceTime: new Date('05-01-2019 10:03:00')
        },
        {
          course: {
            id: 1,
            line: { number: '24', vehicleType: VehicleType.tram },
            timetable: {
              supportedCompany: { name: 'MPK S.A.' },
              validFrom: new Date('05-01-2019 00:00:00'),
              validUntil: new Date('07-01-2019 00:00:00')
            }
          },
          destination: {
            lat: 50.064098,
            lng: 19.945048,
            locality: { name: 'Kraków' },
            name: 'Teatr Słowackiego'
          },
          destinationOnDemand: false,
          destinationTime: new Date('05-01-2019 10:06:00'),
          source: {
            lat: 50.0592269,
            lng: 19.9420868,
            locality: { name: 'Kraków' },
            name: 'Poczta główna'
          },
          sourceTime: new Date('05-01-2019 10:04:00')
        },
        {
          course: 'walking',
          destination: {
            lat: 50.068014,
            lng: 19.949177,
            locality: { name: 'Kraków' },
            name: 'MDA'
          },
          destinationOnDemand: false,
          destinationTime: new Date('05-01-2019 10:16:00'),
          source: {
            lat: 50.064098,
            lng: 19.945048,
            locality: { name: 'Kraków' },
            name: 'Teatr Słowackiego'
          },
          sourceTime: new Date('05-01-2019 10:06:00')
        },
        {
          course: {
            id: 2,
            line: { number: '1', vehicleType: VehicleType.bus },
            timetable: {
              supportedCompany: { name: 'Lajkonik Sp. Jawna' },
              validFrom: new Date('11-01-2018 00:00:00'),
              validUntil: new Date('09-30-2019 23:59:59')
            }
          },
          destination: {
            lat: 50.068863,
            lng: 19.925875,
            locality: { name: 'Kraków' },
            name: 'Plac Inwalidów'
          },
          destinationOnDemand: true,
          destinationTime: new Date('05-01-2019 11:14:00'),
          source: {
            lat: 50.068014,
            lng: 19.949177,
            locality: { name: 'Kraków' },
            name: 'MDA'
          },
          sourceTime: new Date('05-01-2019 11:10:00')
        },
        {
          course: {
            id: 2,
            line: { number: '1', vehicleType: VehicleType.bus },
            timetable: {
              supportedCompany: { name: 'Lajkonik Sp. Jawna' },
              validFrom: new Date('11-01-2018 00:00:00'),
              validUntil: new Date('09-30-2019 23:59:59')
            }
          },
          destination: {
            lat: 50.066616,
            lng: 19.922142,
            locality: { name: 'Kraków' },
            name: 'Czarnowiejska'
          },
          destinationOnDemand: true,
          destinationTime: new Date('05-01-2019 11:15:00'),
          source: {
            lat: 50.068863,
            lng: 19.925875,
            locality: { name: 'Kraków' },
            name: 'Plac Inwalidów'
          },
          sourceTime: new Date('05-01-2019 11:14:00')
        },
        {
          course: {
            id: 2,
            line: { number: '1', vehicleType: VehicleType.bus },
            timetable: {
              supportedCompany: { name: 'Lajkonik Sp. Jawna' },
              validFrom: new Date('11-01-2018 00:00:00'),
              validUntil: new Date('09-30-2019 23:59:59')
            }
          },
          destination: {
            lat: 50.069925,
            lng: 19.905596,
            locality: { name: 'Kraków' },
            name: 'Miasteczko studenckie AGH'
          },
          destinationOnDemand: true,
          destinationTime: new Date('05-01-2019 11:17:00'),
          source: {
            lat: 50.066616,
            lng: 19.922142,
            locality: { name: 'Kraków' },
            name: 'Czarnowiejska'
          },
          sourceTime: new Date('05-01-2019 11:15:00')
        },
        {
          course: {
            id: 2,
            line: { number: '1', vehicleType: VehicleType.bus },
            timetable: {
              supportedCompany: { name: 'Lajkonik Sp. Jawna' },
              validFrom: new Date('11-01-2018 00:00:00'),
              validUntil: new Date('09-30-2019 23:59:59')
            }
          },
          destination: {
            lat: 50.080821,
            lng: 19.890695,
            locality: { name: 'Kraków' },
            name: 'Bronowice Wiadukt'
          },
          destinationOnDemand: true,
          destinationTime: new Date('05-01-2019 11:21:00'),
          source: {
            lat: 50.069925,
            lng: 19.905596,
            locality: { name: 'Kraków' },
            name: 'Miasteczko studenckie AGH'
          },
          sourceTime: new Date('05-01-2019 11:17:00')
        },
        {
          course: {
            id: 2,
            line: { number: '1', vehicleType: VehicleType.bus },
            timetable: {
              supportedCompany: { name: 'Lajkonik Sp. Jawna' },
              validFrom: new Date('11-01-2018 00:00:00'),
              validUntil: new Date('09-30-2019 23:59:59')
            }
          },
          destination: {
            lat: 50.087687,
            lng: 19.890719,
            locality: { name: 'Kraków' },
            name: 'Rondo Ofiar Katynia'
          },
          destinationOnDemand: true,
          destinationTime: new Date('05-01-2019 11:22:00'),
          source: {
            lat: 50.080821,
            lng: 19.890695,
            locality: { name: 'Kraków' },
            name: 'Bronowice Wiadukt'
          },
          sourceTime: new Date('05-01-2019 11:21:00')
        },
        {
          course: {
            id: 2,
            line: { number: '1', vehicleType: VehicleType.bus },
            timetable: {
              supportedCompany: { name: 'Lajkonik Sp. Jawna' },
              validFrom: new Date('11-01-2018 00:00:00'),
              validUntil: new Date('09-30-2019 23:59:59')
            }
          },
          destination: {
            lat: 50.142694,
            lng: 19.411013,
            locality: { name: 'Chrzanów' },
            name: 'Chrzanów Dworzec Autobusowy'
          },
          destinationOnDemand: true,
          destinationTime: new Date('05-01-2019 12:06:00'),
          source: {
            lat: 50.087687,
            lng: 19.890719,
            locality: { name: 'Kraków' },
            name: 'Rondo Ofiar Katynia'
          },
          sourceTime: new Date('05-01-2019 11:22:00')
        },
        {
          course: {
            id: 2,
            line: { number: '1', vehicleType: VehicleType.bus },
            timetable: {
              supportedCompany: { name: 'Lajkonik Sp. Jawna' },
              validFrom: new Date('11-01-2018 00:00:00'),
              validUntil: new Date('09-30-2019 23:59:59')
            }
          },
          destination: {
            lat: 50.14402,
            lng: 19.4051,
            locality: { name: 'Chrzanów' },
            name: 'Chrzanów Śródmieście'
          },
          destinationOnDemand: true,
          destinationTime: new Date('05-01-2019 12:07:00'),
          source: {
            lat: 50.142694,
            lng: 19.411013,
            locality: { name: 'Chrzanów' },
            name: 'Chrzanów Dworzec Autobusowy'
          },
          sourceTime: new Date('05-01-2019 12:06:00')
        },
        {
          course: {
            id: 2,
            line: { number: '1', vehicleType: VehicleType.bus },
            timetable: {
              supportedCompany: { name: 'Lajkonik Sp. Jawna' },
              validFrom: new Date('11-01-2018 00:00:00'),
              validUntil: new Date('09-30-2019 23:59:59')
            }
          },
          destination: {
            lat: 50.142413,
            lng: 19.397854,
            locality: { name: 'Chrzanów' },
            name: 'Chrzanów ZUS'
          },
          destinationOnDemand: true,
          destinationTime: new Date('05-01-2019 12:09:00'),
          source: {
            lat: 50.14402,
            lng: 19.4051,
            locality: { name: 'Chrzanów' },
            name: 'Chrzanów Śródmieście'
          },
          sourceTime: new Date('05-01-2019 12:07:00')
        }
      ]
    }
  ]
};

export default SearchResult;
