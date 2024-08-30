export type CreatorModel = {
  id?: string;
  name: string;
  description?: string;
  youtubeAt?: string;
  instagramAt?: string;
  twitterAt?: string;
  img_url?: string;
};

export interface CreatorProps {
  creator: CreatorModel;
}
