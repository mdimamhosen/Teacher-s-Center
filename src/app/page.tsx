import MainContent from "./components/module/MainContent";
import HeaderComponent from "./components/module/Header";
import Sidebar from "./components/module/Sidebar";

export default function Home() {
  return (
    <div className="  min-h-[100vh]   ">
      <HeaderComponent />
      <div className="flex   ">
        <aside className="w-64   text-white  ">
          <Sidebar />
        </aside>

        {/* Main Content Section */}
        <main className="flex-1 ">
          <MainContent />
        </main>
      </div>
    </div>
  );
}
