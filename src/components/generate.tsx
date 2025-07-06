import { Outlet } from "react-router-dom";

export const Generate = () => {
  return (
    <div className="flex-col md:px-12">
      <Outlet />
    </div>
  );
};
