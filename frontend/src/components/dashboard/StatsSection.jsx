import StatCard from "./StatCard";

function StatsSection() {
  const stats = [
    {
      title: "Total Applications",
      value: 0,
      description: "All tracked applications",
      type: "total",
    },
    {
      title: "Applied",
      value: 0,
      description: "Applications submitted",
      type: "applied",
    },
    {
      title: "Interviews",
      value: 0,
      description: "Interview opportunities",
      type: "interview",
    },
    {
      title: "Offers",
      value: 0,
      description: "Offers received",
      type: "offer",
    },
  ];

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">
      {stats.map((stat) => (
        <StatCard
          key={stat.type}
          title={stat.title}
          value={stat.value}
          description={stat.description}
          type={stat.type}
        />
      ))}
    </section>
  );
}

export default StatsSection;