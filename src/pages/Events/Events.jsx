import { useNavigate } from 'react-router-dom';
import EventCard from '../../components/EventCard';

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

const Events = () => {
    const navigate = useNavigate();

    return (
        <div className="px-8 py-10">
            <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-col">
                    <h1 className="text-3xl font-semibold tracking-tight text-slate-900">Events</h1>
                    <p className="mt-1 text-sm text-slate-500">
                        Browse and manage training events across the organization.
                    </p>
                </div>

                <div className="relative inline-flex">
                    <div className="absolute inset-0 -translate-y-1 translate-x-1 rounded-xl bg-primary/30 blur-md" />
                    <button
                        type="button"
                        onClick={() => navigate('/events/create')}
                        className="relative flex h-11 items-center justify-center gap-2 rounded-xl bg-[#137fec] px-6 text-sm font-semibold text-white shadow transition hover:bg-[#0f6ccd]"
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
                                isActive ? 'bg-white text-primary shadow-sm border border-primary/30' : '',
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
    );
};

export default Events;

