export interface SearchResult {
  paths: SearchResultPath[];
}

interface SearchResultPath {
  courseParts: CoursePart[];
}

interface CoursePart {
  source: Place;
  destination: Place;
  sourceTime: Date;
  destinationTime: Date;
  course: Course | 'walking';
  destinationOnDemand: boolean;
}

interface Place {
  lat: number;
  lng: number;
  name: string;
  locality: Locality;
}

interface Locality {
  name: string;
}

interface Course {
  id: number;
  line: Line;
  timetable: Timetable;
}

interface Line {
  number: string;
  vehicleType: VehicleType;
}

export enum VehicleType {
  bus = 'bus',
  train = 'train',
  subway = 'subway',
  tram = 'tram'
}

interface Timetable {
  validFrom: Date;
  validUntil: Date;
  supportedCompany: Company;
}

interface Company {
  name: string;
}
