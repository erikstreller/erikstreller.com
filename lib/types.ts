export type PostCardProps = {
  post: {
    slug: string;
    title: string;
    summary: string;
    puplishedAt: string;
    readingTime: any;
    image: string;
  }
}

export type ProjectCardProps = {
  project: {
    number: string;
    name: string;
    description: string;
    technologies: ({
      name: string;
      icon: JSX.Element;
      color?: undefined;
    } | {
      name: string;
      icon: JSX.Element;
      color: string;
    })[];
    link: string;
  }
}

export type Views = {
  total: number
}