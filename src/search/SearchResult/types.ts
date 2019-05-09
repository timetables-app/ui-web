export interface SearchResult {
  paths: SearchResultPath[];
}

interface SearchResultPath {
  courses: Course[];
}

type Course = CourseTransit | CourseWalking;

interface CourseTransit {
  type: CourseType.transit;
  id: number;
  line: Line;
  timetable: Timetable;
  points: Point[];
}

interface CourseWalking {
  type: CourseType.walking;
  points: Point[];
}

export enum CourseType {
  walking = 'walking',
  transit = 'transit'
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

type Point = PlacePoint | RouteControlPoint;

interface PlacePoint {
  type: PointType.place;
  place: Place;
  time: Date;
  onDemand: boolean;
}

export enum PointType {
  place = 'place',
  routeControl = 'routeControl'
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

interface RouteControlPoint {
  type: PointType.routeControl;
  lat: number;
  lng: number;
}

interface Timetable {
  validFrom: Date;
  validUntil: Date;
  supportedCompany: Company;
}

interface Company {
  name: string;
}
