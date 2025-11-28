export enum CategoryId {
  SAMUTHA = 'samutha',
  ASAMUTHA = 'asamutha',
  HEAD = 'head-movements',
  NECK = 'neck-movements',
  EYE = 'eye-movements',
  EYEBROW = 'eyebrow-movements',
  NAVARASAS = 'navarasas',
}

export interface DanceItem {
  id: string;
  categoryId: CategoryId;
  name: string;
  sanskritName?: string;
  imageUrl: string;
  description: string;
  youtubeId: string; // The video ID, not the full URL
  relatedIds: string[]; // IDs of related items
}

export interface CategoryInfo {
  id: CategoryId;
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
}