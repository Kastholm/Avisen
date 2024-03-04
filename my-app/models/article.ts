export interface Article {
     _id: string;
     _createdAt: string;
     _type: string;
     title: string;
     teaser: string;
     articleSlug: string;
     image: {};
     tagNames: string[];
     JournalistName: string;
     JournalistPhoto: {};
     JournalistSlug: string;
     overview: [];
}