export interface IOffer {
  type: string;
  value: number;
  sliceValue?: number;
}

export interface IDiscount {
  offers: IOffer[];
}
