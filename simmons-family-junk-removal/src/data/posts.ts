export interface Post {
    id: number;
    title: string;
    excerpt: string;
    content: string;
    date: string;
  }
  
  export const posts: Post[] = [
    {
      id: 1,
      title: 'My First Blog Post',
      excerpt: 'This is a short excerpt from my first blog post...',
      content: 'This is the full content of my first blog post. It contains multiple paragraphs.\n\nHere is another paragraph with more details about the topic.\n\nAnd a concluding paragraph to wrap things up.',
      date: '2023-05-01',
    },
    {
      id: 2,
      title: 'Another Interesting Topic',
      excerpt: 'Here\'s another post about something interesting...',
      content: 'This post covers an entirely different subject. Let\'s dive into the details.\n\nWe\'ll explore multiple aspects of this topic in depth.\n\nFinally, we\'ll summarize the key points and conclude.',
      date: '2023-05-05',
    },
    // Add more mock posts as needed
  ];