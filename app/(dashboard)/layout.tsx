import { Sidebar } from "./_components/sidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}
const DashBoardLayout = ({ children }: DashBoardLayoutProps) => {
  return (
    <>
      <main className="h-full flex justify-center">
        <Sidebar />
        <div className="pl-[60px]">{children}</div>
      </main>
    </>
  );
};

export default DashBoardLayout;
