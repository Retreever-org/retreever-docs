import { useEffect } from "react";
import { resolveDocs } from "../service/DocsResolver";
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../../pages/home/Navbar";
import Footer from "../../pages/home/Footer";

const Dashboard: React.FC = () => {
  const docsTree = resolveDocs();

  useEffect(() => {
    console.log("Docs Tree:", docsTree);
  }, [docsTree]);
  return (
    <div className="bg-(--dark-5)">
      <div className="hidden lg:flex h-full">
        {/* default navbar shown only on large screens */}
        <Navbar />  
      </div>
      <Sidebar tree={docsTree} />
      <Footer/>
    </div>
  );
};

export default Dashboard;
