export type blogProps = {
    blog: {
      id: any; 
      title: any; 
      mainImage: any; 
      body?: never[] | undefined;
    }[];
  };

  export type postProps = {
    post: {
      title: string;
      slug: string;
      mainImage: React.FC;
      estimatedReadingTime: number;
      description: string;
      publishedAt: string;
    }[];
  }
  
  export type valueProps = {
    value: {
       asset?: {
        _ref: string | undefined
       };
       alt: string;
    }
  }
  