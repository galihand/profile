import { ReactNode } from 'react';

interface Skill {
  name: string;
  percentage: number;
}

interface ExpertiseCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  iconBgColor: string;
  iconTextColor: string;
  progressColor: string;
  skills: Skill[];
}

export function ExpertiseCard({
  title,
  description,
  icon,
  iconBgColor,
  iconTextColor,
  progressColor,
  skills,
}: ExpertiseCardProps) {
  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md h-full flex flex-col">
      <div
        className={`w-12 h-12 ${iconBgColor} rounded-lg flex items-center justify-center mb-4`}
      >
        <div className={iconTextColor}>{icon}</div>
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-gray-700 dark:text-gray-300 flex-grow mb-4">
        {description}
      </p>
      <div className="space-y-2">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center">
            <span className="w-1/3 text-gray-600 dark:text-gray-400">
              {skill.name}
            </span>
            <div className="w-2/3 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div
                className={`${progressColor} h-2 rounded-full`}
                style={{ width: `${skill.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
