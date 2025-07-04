export interface RegisterUser {
    name : string
    email : string
    password : string
    avatar? : string | File | any | null
 }
export interface BlogCategory {
  _id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface Blog {
  _id: string;
  title: string;
  content: string;
  author: string;
  coverImage: string;
  category: BlogCategory[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

