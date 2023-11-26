export default function TopicSideList(topics) {
  const medicine_topics = [
    "Telehealth Trends",
    "Nutrition and Wellness",
    "AI in Medical Diagnostics",
    "Gene Editing Prospects",
    "Mind-Body Connection",
    "Cancer Immunotherapy",
    "Microbiome Insights",
    "Global Health Challenges",
    "Precision Medicine",
    "Vaccine Development",
    "Drug Repurposing",
    "Pandemic Preparedness",
    "Health Tech Innovations",
    "Antibiotic Resistance",
    "Aging and Longevity",
    "Digital Health Solutions",
    "Stem Cell Therapies",
    "Mental Health Advances",
    "Sports Injury Prevention",
    "Ethical Dilemmas in Medicine"
  ];

  return (
    <div className="lg:hidden h-full absolute overflow-y-auto text-sm font-medium text-gray-900 bg-white border border-gray-200 shadow topic-sidelist w-[15rem] dark:bg-gray-700 dark:border-gray-600 dark:text-white pb-2">
      {medicine_topics.map((topic) => (
        <TopicSideListItem label={topic} />
      ))}
    </div>
  );
}

function TopicSideListItem({ label }) {
  return (
    <button
      type="button"
      className="w-full px-4 py-3 font-medium text-left border-b border-gray-200 cursor-pointer hover:bg-gray-50 hover:text-blue-800 "
    >
      {label}
    </button>
  );
}
