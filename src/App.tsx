import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="flex bg-slate-100">
      <Sidebar />

      <div className="flex-1">
        <Navbar />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;