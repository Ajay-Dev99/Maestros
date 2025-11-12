import EventCard from '../../components/EventCard';
import { useNavigate } from 'react-router-dom';

const events = [
    {
        code: 'LC-001',
        status: 'confirmed',
        doctor: 'Dr. Ananya Sharma',
        location: 'Mumbai, Maharashtra',
        date: '15 Aug 2024',
        teamLead: 'Rohan Verma',
    },
    {
        code: 'LC-002',
        status: 'pending',
        doctor: 'Dr. Vikram Singh',
        location: 'Delhi, Delhi',
        date: '20 Aug 2024',
        teamLead: 'Priya Desai',
    },
    {
        code: 'LC-003',
        status: 'assigned',
        doctor: 'Dr. Meera Krishnan',
        location: 'Bangalore, Karnataka',
        date: '18 Aug 2024',
        teamLead: 'Amit Patel',
    },
    {
        code: 'LC-004',
        status: 'cancelled',
        doctor: 'Dr. Arjun Reddy',
        location: 'Hyderabad, Telangana',
        date: '22 Aug 2024',
        teamLead: 'Sunita Rao',
    },
    {
        code: 'LC-005',
        status: 'rescheduled',
        doctor: 'Dr. Sneha Kapoor',
        location: 'Pune, Maharashtra',
        date: '25 Aug 2024',
        teamLead: 'Rohan Verma',
    },
    {
        code: 'LC-006',
        status: 'confirmed',
        doctor: 'Dr. Rahul Gupta',
        location: 'Chennai, Tamil Nadu',
        date: '30 Aug 2024',
        teamLead: 'Priya Desai',
    },
];

const filters = ['All', 'Pending', 'Assigned', 'Confirmed', 'Rescheduled', 'Cancelled'];
const activeFilter = 'All';

const Dashboard = () => {
    const navigate = useNavigate();
    return (
        <div className="min-h-full">
            <header className="sticky top-0 z-10 flex h-20 items-center justify-between border-b border-[#e2e8f4] bg-white/80 px-10 backdrop-blur">
                <label className="relative flex w-full max-w-lg items-center">
                    <span className="material-symbols-outlined absolute left-5 text-slate-400">
                        search
                    </span>
                    <input
                        type="search"
                        placeholder="Search events, doctors, locations..."
                        className="h-12 w-full rounded-[14px] border border-[#d7deee] bg-[#eef2fc] pl-14 pr-5 text-sm font-normal text-[#53627c] placeholder:text-[#93a0b8] shadow-[inset_0_1px_2px_rgba(15,23,42,0.08)] transition focus:border-[#3a80f5] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#3a80f5]/10"
                    />
                </label>

                <div className="flex items-center gap-6">
                    <button
                        type="button"
                        className="flex size-11 items-center justify-center rounded-full text-slate-500 transition-colors hover:text-slate-700"
                        aria-label="Notifications"
                    >
                        <span className="material-symbols-outlined text-2xl">notifications</span>
                    </button>

                    <div
                        className="size-11 rounded-full bg-cover bg-center bg-no-repeat ring-2 ring-white shadow-md"
                        aria-label="Admin user avatar"
                        role="img"
                        style={{
                            backgroundImage:
                                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCVfBMucuW_uy9jtVKT-uOsmIEliVdH0Py4j5FOXGWxtb4tksLJ_GFcw0lKh1SEfqQum6Kww37_uUHliX1PRLFXvgnn-zqkIxojz0LjPd_TrXEFKVSlFN3p4mti1gLUzL_jLvC3Jd9f3sZz7ypJmgSDtwQbhuJ4zixUQnmI6Dj0d6ZM64PgnuTNmau6kwuCSM8z_b1YMw44y8rMjtPI5uFZcfqxrqTDcmiWWHjRQeTyGDi0CpN-echHM6o95vl-BPX0SbAjsKZe52U")',
                        }}
                    />
                </div>
            </header>

            <div className="px-8 py-10">
                <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-col">
                        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
                            All Events
                        </h1>
                        <p className="mt-1 text-sm text-slate-500">
                            Manage and view all training events across the organization.
                        </p>
                    </div>

                    <div className="relative inline-flex">
                        <div className="absolute inset-0 -translate-y-1 translate-x-1 rounded-xl bg-primary/30 blur-md" />
                        <button
                            type="button"
                            className="relative flex h-11 items-center justify-center gap-2 rounded-xl bg-[#137fec] px-6 text-sm font-semibold text-white shadow hover:bg-[#0f6ccd]"
                            onClick={() => navigate('/events/create')}
                        >
                            <span className="material-symbols-outlined text-lg">add</span>
                            <span>Create Event</span>
                        </button>
                    </div>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-2 border-b border-[#dde4ef] pb-4">
                    {filters.map((filter) => {
                        const isActive = filter === activeFilter;
                        return (
                            <button
                                key={filter}
                                type="button"
                                className={[
                                    'flex h-9 shrink-0 items-center justify-center rounded-full px-4 text-sm font-medium capitalize transition-all',
                                    'text-slate-500 hover:text-primary',
                                    isActive
                                        ? 'bg-white text-primary shadow-sm border border-primary/30'
                                        : 'bg-transparent',
                                ]
                                    .filter(Boolean)
                                    .join(' ')}
                            >
                                {filter}
                            </button>
                        );
                    })}
                </div>

                <div className="mt-8 grid grid-cols-1 gap-6 @container md:grid-cols-2 xl:grid-cols-3">
                    {events.map((event) => (
                        <EventCard key={event.code} event={event} />
                    ))}
                </div>

                <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
                    <p className="text-sm text-slate-500">
                        Showing <span className="font-semibold text-slate-900">1</span> to{' '}
                        <span className="font-semibold text-slate-900">6</span> of{' '}
                        <span className="font-semibold text-slate-900">24</span> events
                    </p>

                    <div className="flex items-center gap-3">
                        <button
                            type="button"
                            className="flex h-9 items-center justify-center rounded-full border border-slate-200 bg-white px-5 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100"
                        >
                            Previous
                        </button>
                        <button
                            type="button"
                            className="flex h-9 items-center justify-center rounded-full border border-slate-200 bg-white px-5 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100"
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;

