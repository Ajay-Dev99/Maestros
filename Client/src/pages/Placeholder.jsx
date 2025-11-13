const Placeholder = ({ title, description }) => {
    return (
        <div className="min-h-full px-10 py-10">
            <div className="rounded-2xl border border-dashed border-slate-200 bg-white/60 p-10 text-center shadow-sm">
                <h1 className="text-3xl font-semibold text-slate-900">{title}</h1>
                <p className="mt-3 text-sm text-slate-500">{description}</p>
            </div>
        </div>
    );
};

export default Placeholder;

