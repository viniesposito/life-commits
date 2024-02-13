import { Sidebar } from "./_components/sidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}
const DashBoardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <>
      <main className="h-full flex justify-center bg-white">
        <Sidebar />
        <div className="pl-[60px] w-1/2 sm:w-3/4 max-w-4xl">{children}</div>
      </main>
    </>
  );
};

export default DashBoardLayout;
