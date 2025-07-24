import Image from "next/image";

export default function ProjectCard({
  project,
  index,
}: {
  project: { name: string; description: string; imagelink: string };
  index: number;
}) {
  return (
    <div className="w-[40%] flex shadow-2xl p-4 rounded-3xl h-[100%] border-b-4 border-primary/20 ">
      <div>
        <h3 className="font-bold text-4xl mb-4">{project.name}</h3>
        <p className="text-textMuted text-xl w-full">{project.description}</p>
      </div>
      <Image src={project.imagelink} width={150} height={50} alt="logo" />
    </div>
  );
}
