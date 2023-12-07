/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface District {
  id: number;
  name: string;
}

export interface Organization {
  /** שם הארגון */
  name: string;
  /** אודות הארגון */
  about: string;
  /**
   * תמונה
   * @format uri
   */
  image?: string | null;
  /**
   * לוגו
   * @format uri
   */
  logo?: string | null;
  /**
   * קישור לאתר הארגון
   * @format uri
   * @maxLength 200
   */
  link?: string | null;
}

export interface PaginatedOrganizationList {
  /** @example 123 */
  count?: number;
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?page=4"
   */
  next?: string | null;
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?page=2"
   */
  previous?: string | null;
  results?: Organization[];
}

export interface PaginatedPostsList {
  /** @example 123 */
  count?: number;
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?page=4"
   */
  next?: string | null;
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?page=2"
   */
  previous?: string | null;
  results?: Posts[];
}

export interface PaginatedProjectList {
  /** @example 123 */
  count?: number;
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?page=4"
   */
  next?: string | null;
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?page=2"
   */
  previous?: string | null;
  results?: Project[];
}

export interface Post {
  id: number;
  /** כותרת */
  title: string;
  /**
   * תמונה ראשית
   * @format uri
   */
  image?: string | null;
  author: UserProfile;
  /** תוכן מאמר */
  post_content?: string;
  /** כותרת משנה */
  subtitle?: string | null;
  /**
   * תאריך יצירה
   * @format date-time
   */
  created_at: string | null;
}

export interface Posts {
  id: number;
  /** כותרת */
  title: string;
  /**
   * תמונה ראשית
   * @format uri
   */
  image?: string | null;
  author: UserProfile;
  /** כותרת משנה */
  subtitle?: string | null;
  /**
   * תאריך יצירה
   * @format date-time
   */
  created_at: string | null;
}

export interface Project {
  id: number;
  organization: Organization;
  district: District;
  tags: Tags[];
  /** כותרת ראשית */
  title?: string | null;
  /** כותרת משנית */
  sub_title?: string | null;
  /** שם התכנית */
  name: string;
  /** אודות התכנית */
  about?: string;
  /**
   * לינק אודות התכנית
   * @format uri
   * @maxLength 200
   */
  project_about_link?: string | null;
  /**
   * לינק יצירת קשר
   * @format uri
   * @maxLength 200
   */
  project_contact_link?: string | null;
  /**
   * תמונה של התכנית
   * @format uri
   */
  image?: string | null;
  /** האם פרוייקט פעיל */
  is_active?: boolean | null;
}

export interface Tags {
  id: number;
  name: string;
}

export interface TokenObtainPair {
  username: string;
  password: string;
  access: string;
  refresh: string;
}

export interface TokenRefresh {
  access: string;
  refresh: string;
}

export interface UserProfile {
  id: number;
  /**
   * תמונת פרופיל
   * @format uri
   */
  image?: string | null;
  /** אודות הכתב */
  about?: string | null;
  /**
   * @format uri
   * @maxLength 200
   */
  facebook?: string | null;
  /**
   * @format uri
   * @maxLength 200
   */
  twitter?: string | null;
  /**
   * @format uri
   * @maxLength 200
   */
  instagram?: string | null;
  /**
   * @format uri
   * @maxLength 200
   */
  tiktok?: string | null;
  /**
   * כתובת דוא״ל
   * @format email
   * @maxLength 254
   */
  email?: string | null;
  /** משתמש */
  user: number;
}
