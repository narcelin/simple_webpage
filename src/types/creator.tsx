export type CreatorModel = {
  name: string;
  description: string;
  URL: string[];
  img: string;
};

export interface CreatorProps {
  creator: CreatorModel;
}
