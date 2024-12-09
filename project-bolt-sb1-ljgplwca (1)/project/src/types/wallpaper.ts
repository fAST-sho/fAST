export interface Wallpaper {
  id: string;
  title: string;
  url: string;
  thumbnail: string;
  category: string;
  resolution: string;
  color: string;
  downloads: number;
  dateAdded: string;
}

export type Category = {
  id: string;
  name: string;
  icon: string;
};