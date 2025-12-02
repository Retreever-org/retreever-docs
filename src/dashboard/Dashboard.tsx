import { useEffect } from "react";
import { resolveDocs } from "./service/DocsResolver";

const Dashboard: React.FC = () => {
  const docsTree = resolveDocs();

  useEffect(() => {
    console.log("Docs Tree:", docsTree);
  }, [docsTree]);
  return <div className="text-white">Doc Page</div>;
};

export default Dashboard;
