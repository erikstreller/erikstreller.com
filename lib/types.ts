
export type PostCardProps = {
  post: {
    title: string
    description: string
    views: string
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