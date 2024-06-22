import { ProjectComponent } from "@/components/ProjectComponent";
import projects from "../data/projects-data.json";

export default function Home() {
  return (
    <main>
      <div className="max-w-xl mx-auto">
        <div className="text-center">
          <p className="font-bold italic text-7xl">nguyene.com</p>
        </div>
        <div className="py-8">
          {projects
            .sort((a, b) => {
              const dateA = new Date(a.dateCreated);
              const dateB = new Date(b.dateCreated);
              return dateA.getTime() - dateB.getTime();
            })
            .map((project, index) => (
              <div key={index}>
                <ProjectComponent project={project} />
              </div>
            ))}
        </div>
      </div>
    </main>
  );
}
