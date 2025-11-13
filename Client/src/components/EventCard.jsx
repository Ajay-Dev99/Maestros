import { useNavigate } from 'react-router-dom';

const STATUS_STYLES = {
    confirmed: {
        badge: 'bg-confirmed/10 text-confirmed',
        dot: 'bg-confirmed',
        label: 'Confirmed',
    },
    pending: {
        badge: 'bg-pending/10 text-pending',
        dot: 'bg-pending',
        label: 'Pending',
    },
    assigned: {
        badge: 'bg-assigned/10 text-assigned',
        dot: 'bg-assigned',
        label: 'Assigned',
    },
    rescheduled: {
        badge: 'bg-rescheduled/10 text-rescheduled',
        dot: 'bg-rescheduled',
        label: 'Rescheduled',
    },
    cancelled: {
        badge: 'bg-cancelled/10 text-cancelled',
        dot: 'bg-cancelled',
        label: 'Cancelled',
    },
};

const EventCard = ({ event }) => {
    const navigate = useNavigate();
    const statusKey = event.status.toLowerCase();
    const status = STATUS_STYLES[statusKey] ?? STATUS_STYLES.pending;

    const handleCardClick = () => {
        navigate(`/events/${event.code}`);
    };

    return (
        <div
            className="flex cursor-pointer flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:border-primary hover:shadow-md"
            onClick={handleCardClick}
        >
            <div className="flex items-start justify-between">
                <p className="text-sm font-medium text-slate-500">{event.code}</p>
                <div className={`flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium ${status.badge}`}>
                    <span className={`size-2 rounded-full ${status.dot}`} />
                    {status.label}
                </div>
            </div>

            <div className="mt-3">
                <h3 className="text-lg font-semibold text-slate-900">{event.doctor}</h3>
                <p className="mt-1 text-sm text-slate-500">{event.location}</p>
            </div>

            <div className="mt-4 flex items-center justify-between border-t border-slate-200 pt-4">
                <div className="flex items-center gap-2 text-sm text-slate-600">
                    <span className="material-symbols-outlined text-base">calendar_today</span>
                    <span>{event.date}</span>
                </div>
                <button
                    type="button"
                    className="text-slate-400 transition-colors hover:text-slate-600"
                    aria-label="More options"
                    onClick={(e) => e.stopPropagation()}
                >
                    <span className="material-symbols-outlined">more_vert</span>
                </button>
            </div>

            <div className="mt-2 text-sm text-slate-500">
                Team Leader <span className="font-medium text-slate-700">{event.teamLead}</span>
            </div>
        </div>
    );
};

export default EventCard;

