import { useParams, useNavigate, Link } from 'react-router-dom';

const EventDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Mock data - replace with API call
    const event = {
        id: id,
        code: 'TRN-00123',
        title: 'Advanced CPR & Emergency Response Training',
        status: 'in-progress',
        details: {
            topic: 'CPR, AED Usage, Emergency Response',
            type: 'Healthcare Certification',
            startDate: '15 Nov 2024',
            endDate: '20 Nov 2024',
            duration: '6 Days (48 Hours)',
            batchCode: 'BCH-CPR-ADV-05',
        },
        location: {
            city: 'Mumbai',
            state: 'Maharashtra',
            address: 'Apollo Hospital Training Center, Bandra Kurla Complex, Mumbai, Maharashtra 400051',
        },
        financials: {
            budget: '₹ 3,50,000',
            actualCost: '₹ 3,25,000',
        },
        personnel: [
            {
                name: 'Dr. Ananya Sharma',
                role: 'Medical Instructor',
                avatar:
                    'https://lh3.googleusercontent.com/aida-public/AB6AXuCAUoTHmj-5SwmW8G8jdOHRa6tQX6PLFnzcL3qZM-Y3_abbR74jy1NJ7R_Tx_nFvmRLDF06jobnc48_-aKZB3Mu5qWNAzko3lxgtTrtKeE7ZX6cwI0iIOiN34zCVd8qI2NOrCh1n831k4_BeBmCZLFfXiNmwvOHWi8FaihIqTNkGxfvRd25oUM0ZmDmymEa6LNtBcKH3OhQxDeOmepLI6H1Wl1LuL6nW4g9eORp3kf9N_dEcRrDericoB1i9wO_wc1DnbHsMcRwxvY',
            },
            {
                name: 'Rohan Verma',
                role: 'Training Coordinator',
                avatar:
                    'https://lh3.googleusercontent.com/aida-public/AB6AXuCHNW4QPQQgNkw1aESDv0dTBlNQ6IS9KHFkRh9E2aiLYEm23QRrgckd92yAD5VY6ji8hD9d1szFSjC6a7mG8Bl94Z5YC3p5It1aO8oG45SHaYHxsHondwU61xx1eJATIVimF3fUyh3fyqbJAd8iJ94_TSsclwNVOQ5Y6Qi9FK61AZuph8SFCuz_8Nvw_vpuFUqfyMPnAtp3c1u0T3kvkP6B8VgoNafG0B9R0taZz_7sskIT715NZZd2foXuUOUlD_hUdPPEGwRW7u4',
            },
        ],
        activityLog: [
            {
                action: 'Status changed to In Progress',
                icon: 'play_arrow',
                timestamp: '15 Nov 2024, 09:00 AM',
            },
            {
                action: 'Training Coordinator Rohan Verma assigned',
                icon: 'person_add',
                timestamp: '10 Nov 2024, 02:30 PM',
            },
            {
                action: 'Event created by Admin User',
                icon: 'add_circle',
                timestamp: '05 Nov 2024, 11:00 AM',
            },
        ],
    };

    const statusConfig = {
        'in-progress': { label: 'In Progress', color: 'bg-[#FFC107]/20 text-[#B54708]' },
        confirmed: { label: 'Confirmed', color: 'bg-green-100 text-green-700' },
        pending: { label: 'Pending', color: 'bg-orange-100 text-orange-700' },
        assigned: { label: 'Assigned', color: 'bg-blue-100 text-blue-700' },
        cancelled: { label: 'Cancelled', color: 'bg-red-100 text-red-700' },
        rescheduled: { label: 'Rescheduled', color: 'bg-purple-100 text-purple-700' },
    };

    const currentStatus = statusConfig[event.status] || statusConfig.pending;

    return (
        <div className="min-h-full">


            <div className="px-4 py-6 md:px-8 md:py-10">
                {/* Breadcrumbs */}
                <div className="mb-6 flex flex-wrap items-center gap-2 text-sm md:text-base">
                    <Link to="/" className="font-medium text-slate-500 hover:text-primary">
                        Home
                    </Link>
                    <span className="text-slate-400">/</span>
                    <Link to="/events" className="font-medium text-slate-500 hover:text-primary">
                        Events
                    </Link>
                    <span className="text-slate-400">/</span>
                    <span className="font-medium text-slate-900">{event.title}</span>
                </div>

                {/* Page Header */}
                <header className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex min-w-0 flex-col gap-3">
                        <div className="flex flex-wrap items-center gap-3">
                            <h1 className="text-2xl font-black tracking-tight text-slate-900 md:text-4xl">
                                {event.title}
                            </h1>
                            <div className={`flex h-8 items-center rounded-lg px-4 ${currentStatus.color}`}>
                                <p className="text-sm font-medium">{currentStatus.label}</p>
                            </div>
                        </div>
                        <p className="text-sm text-slate-500 md:text-base">Event ID: {event.code}</p>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        <button
                            type="button"
                            className="flex h-10 items-center justify-center rounded-lg bg-primary px-4 text-sm font-semibold text-white transition hover:bg-primary/90"
                        >
                            Edit Event
                        </button>
                        <button
                            type="button"
                            className="flex h-10 items-center justify-center rounded-lg border border-slate-300 bg-white px-4 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                        >
                            Reschedule
                        </button>
                        <button
                            type="button"
                            className="flex h-10 items-center justify-center rounded-lg border border-slate-300 bg-white px-4 text-sm font-semibold text-red-600 transition hover:bg-red-50"
                        >
                            Cancel Event
                        </button>
                    </div>
                </header>

                {/* Main Grid */}
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
                    {/* Left Column */}
                    <div className="flex flex-col gap-6 lg:col-span-2 lg:gap-8">
                        {/* Event Details */}
                        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                            <h2 className="mb-6 text-lg font-bold text-slate-900 md:text-xl">Event Details</h2>
                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                <div className="flex flex-col gap-1">
                                    <p className="text-sm font-medium text-slate-500">Healthcare Topic</p>
                                    <p className="text-base font-medium text-slate-900">{event.details.topic}</p>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <p className="text-sm font-medium text-slate-500">Training Type</p>
                                    <p className="text-base font-medium text-slate-900">{event.details.type}</p>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <p className="text-sm font-medium text-slate-500">Start Date</p>
                                    <p className="text-base font-medium text-slate-900">{event.details.startDate}</p>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <p className="text-sm font-medium text-slate-500">End Date</p>
                                    <p className="text-base font-medium text-slate-900">{event.details.endDate}</p>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <p className="text-sm font-medium text-slate-500">Duration</p>
                                    <p className="text-base font-medium text-slate-900">{event.details.duration}</p>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <p className="text-sm font-medium text-slate-500">Batch Code</p>
                                    <p className="text-base font-medium text-slate-900">{event.details.batchCode}</p>
                                </div>
                            </div>
                        </div>

                        {/* Location & Venue */}
                        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                            <h2 className="mb-6 text-lg font-bold text-slate-900 md:text-xl">Location & Venue</h2>
                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                <div className="flex flex-col gap-1">
                                    <p className="text-sm font-medium text-slate-500">City</p>
                                    <p className="text-base font-medium text-slate-900">{event.location.city}</p>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <p className="text-sm font-medium text-slate-500">State</p>
                                    <p className="text-base font-medium text-slate-900">{event.location.state}</p>
                                </div>
                                <div className="flex flex-col gap-1 md:col-span-2">
                                    <p className="text-sm font-medium text-slate-500">Venue Address</p>
                                    <p className="text-base font-medium text-slate-900">{event.location.address}</p>
                                </div>
                            </div>
                        </div>

                        {/* Financials */}
                        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                            <h2 className="mb-6 text-lg font-bold text-slate-900 md:text-xl">Financials</h2>
                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                <div className="flex flex-col gap-1">
                                    <p className="text-sm font-medium text-slate-500">Budget</p>
                                    <p className="text-base font-medium text-slate-900">{event.financials.budget}</p>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <p className="text-sm font-medium text-slate-500">Actual Cost</p>
                                    <p className="text-base font-medium text-slate-900">
                                        {event.financials.actualCost}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col gap-6 lg:col-span-1 lg:gap-8">
                        {/* Assigned Personnel */}
                        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                            <h2 className="mb-6 text-lg font-bold text-slate-900 md:text-xl">Assigned Personnel</h2>
                            <div className="flex flex-col gap-6">
                                {event.personnel.map((person, index) => (
                                    <div key={index} className="flex items-center gap-4">
                                        <img
                                            className="size-12 rounded-full object-cover"
                                            src={person.avatar}
                                            alt={person.name}
                                        />
                                        <div>
                                            <p className="font-bold text-slate-900">{person.name}</p>
                                            <p className="text-sm text-slate-500">{person.role}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Activity Log */}
                        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                            <h2 className="mb-6 text-lg font-bold text-slate-900 md:text-xl">Activity Log</h2>
                            <div className="flex flex-col gap-6">
                                {event.activityLog.map((activity, index) => (
                                    <div key={index} className="flex gap-4">
                                        <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                                            <span className="material-symbols-outlined text-primary">
                                                {activity.icon}
                                            </span>
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-slate-900">{activity.action}</p>
                                            <p className="text-xs text-slate-500">{activity.timestamp}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventDetails;

