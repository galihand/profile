import { ReactNode } from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  gradientFrom: string;
  gradientTo: string;
  skills: string[];
  projectUrl?: string;
}

export function ProjectCard({
  title,
  description,
  icon,
  gradientFrom,
  gradientTo,
  skills,
  projectUrl = '#',
}: ProjectCardProps) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105">
      <div
        className={`h-48 bg-gradient-to-r flex items-center justify-center`}
        style={{
          backgroundImage: `linear-gradient(to right, ${gradientFrom}, ${gradientTo})`,
        }}
      >
        {icon}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded text-xs"
            >
              {skill}
            </span>
          ))}
        </div>
        <a
          href={projectUrl}
          className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
        >
          View Project →
        </a>
      </div>
    </div>
  );
}
