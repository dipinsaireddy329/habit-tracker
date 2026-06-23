import Card from "../components/common/Card";

export default function Dashboard() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">
        Dashboard
      </h1>

      <div className="grid md:grid-cols-4 gap-6">
        <Card title="Total Habits" value="8" />
        <Card title="Completed Today" value="5" />
        <Card title="Current Streak" value="12 🔥" />
        <Card title="Completion Rate" value="80%" />
      </div>
    </div>
  );
}