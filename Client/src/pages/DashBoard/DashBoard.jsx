import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();

    const stats = [
        {
            label: 'Total Events',
            value: '24',
            change: '+12%',
            trend: 'up',
            icon: 'event',
            color: 'bg-blue-50 text-blue-600',
        },
        {
            label: 'Pending Events',
            value: '8',
            change: '+3%',
            trend: 'up',
            icon: 'schedule',
            color: 'bg-orange-50 text-orange-600',
        },
        {
            label: 'Completed Events',
            value: '16',
            change: '+8%',
            trend: 'up',
            icon: 'check_circle',
            color: 'bg-green-50 text-green-600',
        },
        {
            label: 'Total Participants',
            value: '1,248',
            change: '+18%',
            trend: 'up',
            icon: 'group',
            color: 'bg-purple-50 text-purple-600',
        },
    ];

    const recentEvents = [
        {
            code: 'LC-001',
            doctor: 'Dr. Ananya Sharma',
            location: 'Mumbai, Maharashtra',
            date: '15 Aug 2024',
            status: 'confirmed',
        },
        {
            code: 'LC-002',
            doctor: 'Dr. Vikram Singh',
            location: 'Delhi, Delhi',
            date: '20 Aug 2024',
            status: 'pending',
        },
        {
            code: 'LC-003',
            doctor: 'Dr. Meera Krishnan',
            location: 'Bangalore, Karnataka',
            date: '18 Aug 2024',
            status: 'assigned',
        },
    ];

    const upcomingEvents = [
        { date: '15 Aug', title: 'Training Session - Mumbai', time: '10:00 AM' },
        { date: '18 Aug', title: 'Workshop - Bangalore', time: '2:00 PM' },
        { date: '20 Aug', title: 'Seminar - Delhi', time: '11:00 AM' },
    ];

    const statusColors = {
        confirmed: 'bg-green-100 text-green-700',
        pending: 'bg-orange-100 text-orange-700',
        assigned: 'bg-blue-100 text-blue-700',
        cancelled: 'bg-red-100 text-red-700',
        rescheduled: 'bg-purple-100 text-purple-700',
    };

    return (
        <div className="min-h-full">
            <header className="sticky top-0 z-10 flex h-auto items-center justify-end gap-2 border-b border-[#e2e8f4] bg-white/80 px-4 py-4 backdrop-blur md:h-20 md:gap-4 md:px-10">
                <div className="flex items-center gap-2 md:gap-6">
                    <button
                        type="button"
                        className="flex size-10 items-center justify-center rounded-full text-slate-500 transition-colors hover:text-slate-700 md:size-11"
                        aria-label="Notifications"
                    >
                        <span className="material-symbols-outlined text-xl md:text-2xl">notifications</span>
                    </button>

                    <div
                        className="size-10 rounded-full bg-cover bg-center bg-no-repeat ring-2 ring-white shadow-md md:size-11"
                        aria-label="Admin user avatar"
                        role="img"
                        style={{
                            backgroundImage:
                                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCVfBMucuW_uy9jtVKT-uOsmIEliVdH0Py4j5FOXGWxtb4tksLJ_GFcw0lKh1SEfqQum6Kww37_uUHliX1PRLFXvgnn-zqkIxojz0LjPd_TrXEFKVSlFN3p4mti1gLUzL_jLvC3Jd9f3sZz7ypJmgSDtwQbhuJ4zixUQnmI6Dj0d6ZM64PgnuTNmau6kwuCSM8z_b1YMw44y8rMjtPI5uFZcfqxrqTDcmiWWHjRQeTyGDi0CpN-echHM6o95vl-BPX0SbAjsKZe52U")',
                        }}
                    />
                </div>
            </header>

            <div className="px-4 py-6 md:px-8 md:py-10">
                {/* Page Heading */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex flex-col">
                        <h1 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
                            Dashboard
                        </h1>
                        <p className="mt-1 text-sm text-slate-500">
                            Overview of training events and performance metrics.
                        </p>
                    </div>


                </div>

                {/* Stats Grid */}
                <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
                    {stats.map((stat) => (
                        <div
                            key={stat.label}
                            className="flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
                        >
                            <div className="flex items-center justify-between">
                                <div className={`flex size-12 items-center justify-center rounded-xl ${stat.color}`}>
                                    <span className="material-symbols-outlined text-2xl">{stat.icon}</span>
                                </div>
                                <span className="text-sm font-semibold text-green-600">{stat.change}</span>
                            </div>
                            <div className="mt-4">
                                <p className="text-sm text-slate-500">{stat.label}</p>
                                <p className="mt-1 text-3xl font-bold text-slate-900">{stat.value}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Recent Events & Upcoming Events */}
                <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
                    {/* Recent Events */}
                    <div className="lg:col-span-2">
                        <div className="flex h-full flex-col rounded-xl border border-slate-200 bg-white shadow-sm">
                            <div className="flex items-center justify-between border-b border-slate-200 px-4 py-4 md:px-6">
                                <h2 className="text-base font-semibold text-slate-900 md:text-lg">Recent Events</h2>
                                <button
                                    type="button"
                                    className="text-sm font-medium text-primary hover:text-primary/80"
                                    onClick={() => navigate('/events')}
                                >
                                    View All
                                </button>
                            </div>
                            <div className="flex-1 divide-y divide-slate-100">
                                {recentEvents.map((event) => (
                                    <div
                                        key={event.code}
                                        className="flex flex-col gap-2 px-4 py-4 transition hover:bg-slate-50 sm:flex-row sm:items-center sm:justify-between md:px-6"
                                    >
                                        <div className="flex flex-col">
                                            <p className="text-sm font-semibold text-slate-900">{event.doctor}</p>
                                            <p className="mt-1 text-xs text-slate-500">{event.location}</p>
                                        </div>
                                        <div className="flex items-center gap-3 sm:gap-4">
                                            <p className="text-xs text-slate-600 sm:text-sm">{event.date}</p>
                                            <span
                                                className={`rounded-full px-3 py-1 text-xs font-medium capitalize ${statusColors[event.status]
                                                    }`}
                                            >
                                                {event.status}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Upcoming Events */}
                    <div className="lg:col-span-1">
                        <div className="flex h-full flex-col rounded-xl border border-slate-200 bg-white shadow-sm">
                            <div className="border-b border-slate-200 px-4 py-4 md:px-6">
                                <h2 className="text-base font-semibold text-slate-900 md:text-lg">Upcoming Events</h2>
                            </div>
                            <div className="flex-1 divide-y divide-slate-100">
                                {upcomingEvents.map((event, index) => (
                                    <div key={index} className="flex gap-4 px-4 py-4 md:px-6">
                                        <div className="flex flex-col items-center justify-center rounded-lg bg-primary/10 px-3 py-2">
                                            <p className="text-xs font-semibold text-primary">
                                                {event.date.split(' ')[1]}
                                            </p>
                                            <p className="text-lg font-bold text-primary">
                                                {event.date.split(' ')[0]}
                                            </p>
                                        </div>
                                        <div className="flex flex-col justify-center">
                                            <p className="text-sm font-semibold text-slate-900">{event.title}</p>
                                            <p className="mt-1 text-xs text-slate-500">{event.time}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="mt-8">
                    <h2 className="mb-4 text-base font-semibold text-slate-900 md:text-lg">Quick Actions</h2>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        <button
                            type="button"
                            className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white px-6 py-4 text-left shadow-sm transition hover:border-primary hover:bg-primary/5"
                            onClick={() => navigate('/events')}
                        >
                            <div className="flex size-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                                <span className="material-symbols-outlined text-2xl">event</span>
                            </div>
                            <div>
                                <p className="font-semibold text-slate-900">View All Events</p>
                                <p className="text-sm text-slate-500">Browse all training events</p>
                            </div>
                        </button>

                        <button
                            type="button"
                            className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white px-6 py-4 text-left shadow-sm transition hover:border-primary hover:bg-primary/5"
                            onClick={() => navigate('/users')}
                        >
                            <div className="flex size-12 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
                                <span className="material-symbols-outlined text-2xl">group</span>
                            </div>
                            <div>
                                <p className="font-semibold text-slate-900">Manage Users</p>
                                <p className="text-sm text-slate-500">View team leaders and participants</p>
                            </div>
                        </button>

                        <button
                            type="button"
                            className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white px-6 py-4 text-left shadow-sm transition hover:border-primary hover:bg-primary/5"
                            onClick={() => navigate('/reports')}
                        >
                            <div className="flex size-12 items-center justify-center rounded-xl bg-green-50 text-green-600">
                                <span className="material-symbols-outlined text-2xl">bar_chart</span>
                            </div>
                            <div>
                                <p className="font-semibold text-slate-900">View Reports</p>
                                <p className="text-sm text-slate-500">Analytics and insights</p>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
