import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const DashboardLayout = () => {
    return (
        <div className="flex h-screen w-full overflow-hidden bg-slate-100 font-display">
            <Sidebar />
            <main className="flex-1 overflow-y-auto bg-[#f3f6fc]">
                <Outlet />
            </main>
        </div>
    );
};

export default DashboardLayout;

