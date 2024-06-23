import { ProjectComponent } from "@/components/ProjectComponent";
import projects from "../data/projects-data.json";

export default function Home() {
  return (
    <main>
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <p className="font-bold italic text-4xl sm:text-6xl md:text-7xl">
            nguyene.com
          </p>
        </div>
        <div className="my-8">
          {projects
            .sort((a, b) => {
              const dateA = new Date(a.dateCreated);
              const dateB = new Date(b.dateCreated);
              return dateB.getTime() - dateA.getTime();
            })
            .map((project, index) => (
              <ProjectComponent key={index} project={project} />
            ))}
        </div>
      </div>
    </main>
  );
}
