export interface BlogPost {
    id: number;
    title: string;
    slug: string;
    author: string;
    authorRole: string;
    date: string;
    readTime: string;
    category: string;
    image: string;
    excerpt: string;
    content: string;
    tags: string[];
  }
  
  export interface Author {
    name: string;
    role: string;
    image: string;
    bio: string;
    credentials: string[];
    social: {
      facebook: string;
      instagram: string;
      linkedin: string;
    };
  }