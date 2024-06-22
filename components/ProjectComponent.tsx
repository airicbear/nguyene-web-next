import { ReactNode } from "react";
import "../styles/project-component-styles.css";

interface ProjectComponentProps {
  project: ProjectModel;
}

function ProjectComponentLink({
  url,
  children,
}: Readonly<{
  url: string;
  children: React.ReactNode;
}>) {
  return (
    <a
      href={url}
      className="text-blue-500 hover:underline"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}

export function ProjectComponent({ project }: ProjectComponentProps) {
  return (
    <div className="row">
      <span className="pill">
        <ProjectComponentLink url={project.websiteUrl}>
          Link
        </ProjectComponentLink>
      </span>
      <span className="pill">
        <ProjectComponentLink url={project.sourceUrl}>
          Source
        </ProjectComponentLink>
      </span>
      <span className="pill">{project.dateCreated}</span>
      <span className="pill">{project.title}</span>
    </div>
  );
}
