export type SearchResultType = SearchResultPath[];

interface SearchResultPath {
  sourceTime: Date;
  destinationTime: Date;
  meansOfTransport: PathMeansOfTransport[];
  changeCount: number;
  courses: Course[];
}

export type Course = CourseTransit | CourseWalking;

interface CourseTransit {
  type: CourseType.transit;
  id: number;
  line: Line;
  timetable: Timetable;
  points: Point[];
}

export function isCourseTransit(v: any): v is CourseTransit {
  return v.type === CourseType.transit;
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

export type VehicleTypeMap<T> = { [k in keyof typeof VehicleType]: T };

export enum VehicleType {
  bus = 'bus',
  train = 'train',
  subway = 'subway',
  tram = 'tram'
}

type Point = PlacePoint | RouteControlPoint;

export function isPlacePoint(v: any): v is PlacePoint {
  return v.type === PointType.place;
}

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

export type PathMeansOfTransport = VehicleType | CourseType.walking;

export type PathMeansOfTransportMap<T> = VehicleTypeMap<T> & {
  [CourseType.walking]: T;
};
