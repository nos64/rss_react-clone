export interface ICard {
  image: string;
  brand: string;
  model: string;
  year: string;
  color: string;
  doors: string;
  volume: string;
  owners: string;
  inBasket?: boolean;
}

export interface IChildren {
  children?: React.ReactNode;
}
