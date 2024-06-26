import { ReactNode } from "react";
import "../styles/project-component-styles.css";

interface ProjectComponentProps {
  project: ProjectModel;
}

function ProjectComponentLink({
  url,
  children,
}: Readonly<{
  url?: string;
  children: React.ReactNode;
}>) {
  return (
    <a
      href={url}
      className={`text-blue-500 hover:underline ${
        (url?.length ?? 0) > 0 ? "" : "text-neutral-600 !no-underline"
      }`}
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
      <span className="pill basis-1/4 sm:basis-1/6">{project.dateCreated}</span>
      <span className="pill text-left basis-7/12 sm:basis-2/3">
        {project.title}
      </span>
    </div>
  );
}
