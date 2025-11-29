export interface Student {
  id?: string;
  name: string;
  class: string;
  fatherName: string;
  mobile: string;
  address: string;
  photo: string; // Base64
}

export interface Notice {
  id: number;
  title: string;
  date: string;
  isNew: boolean;
}

export interface GalleryItem {
  id: number;
  url: string;
  title: string;
  category: 'memories' | 'plants' | 'events';
  size: 'landscape' | 'portrait' | 'square';
}

export enum UserRole {
  GUEST = 'guest',
  STUDENT = 'student',
  ADMIN = 'admin'
}