export interface ApiField {
  name: string;
  items: Array<string | ApiField>;
}
