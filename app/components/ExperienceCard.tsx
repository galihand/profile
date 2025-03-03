interface ExperienceCardProps {
  title: string;
  company: string;
  companyDescription: string;
  period: string;
  description: string[];
  skills: string[];
}

export function ExperienceCard({
  title,
  company,
  companyDescription,
  period,
  description,
  skills,
}: ExperienceCardProps) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden">
      <div className="p-6 md:p-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {title}
          </h3>
          <div className="flex items-center mt-2 md:mt-0">
            <span className="text-gray-600 dark:text-gray-400">{company}</span>
            <span className="mx-2 text-gray-400">•</span>
            <span className="text-gray-600 dark:text-gray-400">{period}</span>
          </div>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400 italic mb-3">
          {companyDescription}
        </p>
        <div className="mb-4">
          {description.map((paragraph, index) => (
            <p
              key={index}
              className="text-gray-700 dark:text-gray-300 flex items-start mb-2"
            >
              <span className="mr-2">•</span>
              {paragraph}
            </p>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
