export interface IHero {
  id: string;
  name: string;
  description: string;
  thumbnail: {
      path: string;
      extension: string
  };
  resourceURI: string;
}
