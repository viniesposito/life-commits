import NewButton from "./new-button";

export const Sidebar = () => {
  return (
    <aside className="fixed z-[1] left-0 bg-slate-500 h-full w-[60px] p-3 flex-col space-y-2">
      <NewButton iconType={"plus"} />
      <NewButton iconType={"settings"} />
    </aside>
  );
};
