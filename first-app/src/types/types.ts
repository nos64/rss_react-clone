export interface ICard {
  id: string;
  image: string;
  brand: string;
  model: string;
  year: string;
  color: string;
  colorID: string;
  favorite: boolean;
  doors: string;
  volume: string;
  owners: string;
  inBasket?: boolean;
}

export interface IChildren {
  children?: React.ReactNode;
}