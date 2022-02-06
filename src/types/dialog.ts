export interface dialogDataType {
  title: string;
  state: string | number;
  data: {
    key: string | number;
    value: string | number;
  }[];
  isHeight: boolean;
}
