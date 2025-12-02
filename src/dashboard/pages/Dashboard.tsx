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
      <Navbar/>
      <Sidebar tree={docsTree} />
      <Footer/>
    </div>
  );
};

export default Dashboard;
