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

//! This is the main layout of the application.
// - Imported Header, Sidebar, and MainContent components.
// - Displayed the Header at the top.
// - Used a flex container to arrange Sidebar on the left and MainContent on the right.
// - Ensured full height with min-h-[100vh].
