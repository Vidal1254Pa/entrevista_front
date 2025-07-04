export default interface ResponseGeneral<T> {
  Count: number;
  Message: string;
  SearchCriteria: null;
  Results: T[];
}

