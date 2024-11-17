export interface Location {
  id: string;
  name: string;
  date: string;
  location: string;
  lumaLink: string;
  joinLink: string;
  instagramLink?: string;
  twitterLink?: string;
  youtubeLink?: string;
  websiteLink?: string;
  imageSrc?: string;
  coordinates: [number, number];
}
