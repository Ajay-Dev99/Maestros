const baseInput =
    'h-12 w-full rounded-xl border border-[#dfe5f3] bg-white px-4 text-sm font-medium text-[#1f2937] placeholder:text-[#9ca3af] shadow-[inset_0_1px_2px_rgba(15,23,42,0.08)] transition focus:border-[#3a80f5] focus:ring-4 focus:ring-[#3a80f5]/12 focus:outline-none';

function Field({ label, children, className = '' }) {
    return (
        <label className={`flex flex-col ${className}`}>
            <span className="pb-2 text-sm font-semibold text-[#1f2937]">{label}</span>
            {children}
        </label>
    );
}

function Section({ title, children }) {
    return (
        <section className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-[#111827]">{title}</h2>
                <div className="ml-6 h-px flex-1 bg-linear-to-r from-[#e4e9f5] via-[#e4e9f5] to-transparent" />
            </div>
            {children}
        </section>
    );
}

function CreateEvents() {
    return (
        <div className="min-h-full px-6 pb-16 pt-8 md:px-10">
            <div className="mx-auto w-full max-w-5xl">
                <header className="mb-8">
                    <h1 className="text-[32px] font-semibold tracking-[-0.02em] text-[#0f172a]">
                        Create New Training Event
                    </h1>
                    <p className="mt-2 text-sm text-[#64748b]">
                        Capture core details, logistics, and coordination for the upcoming training.
                    </p>
                </header>

                <div className="rounded-3xl border border-[#e4e9f5] bg-white p-8 shadow-[0_24px_60px_rgba(15,23,42,0.08)] md:p-10">
                    <form className="space-y-10" action="#" method="post">
                        <Section title="Core Event Details">
                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                <Field label="Legacy Code">
                                    <input className={baseInput} placeholder="Enter legacy code" required />
                                </Field>
                                <Field label="Dr Name">
                                    <input className={baseInput} placeholder="Enter doctor's name" required />
                                </Field>
                                <Field label="Approx Participants">
                                    <input
                                        className={baseInput}
                                        placeholder="e.g., 50"
                                        type="number"
                                        min="1"
                                        required
                                    />
                                </Field>
                                <Field label="Audience Type">
                                    <select className={`${baseInput} appearance-none`} required defaultValue="">
                                        <option value="" disabled>
                                            Select audience type
                                        </option>
                                        <option value="doctors">Doctors</option>
                                        <option value="nurses">Nurses</option>
                                        <option value="medical_staff">Medical Staff</option>
                                    </select>
                                </Field>
                            </div>
                        </Section>

                        <Section title="Location & Schedule">
                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                <Field label="Address" className="md:col-span-2">
                                    <input className={baseInput} placeholder="Enter event address" />
                                </Field>
                                <Field label="City">
                                    <input className={baseInput} placeholder="e.g., Mumbai" />
                                </Field>
                                <Field label="State">
                                    <select className={`${baseInput} appearance-none`} defaultValue="">
                                        <option value="" disabled>
                                            Select state
                                        </option>
                                        <option value="maharashtra">Maharashtra</option>
                                        <option value="karnataka">Karnataka</option>
                                        <option value="delhi">Delhi</option>
                                    </select>
                                </Field>
                                <Field label="Date">
                                    <div className="relative">
                                        <span className="material-symbols-outlined pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                                            calendar_today
                                        </span>
                                        <input
                                            type="date"
                                            className={`${baseInput} pl-12`}
                                            placeholder="Select date"
                                        />
                                    </div>
                                </Field>
                                <Field label="Time">
                                    <div className="relative">
                                        <span className="material-symbols-outlined pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                                            schedule
                                        </span>
                                        <input type="time" className={`${baseInput} pl-12`} />
                                    </div>
                                </Field>
                            </div>
                        </Section>

                        <Section title="Coordination & Team">
                            <div className="space-y-6">
                                <p className="text-base font-semibold text-[#0f172a]">Liaisoning Manager</p>
                                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                                    <Field label="Name">
                                        <input className={baseInput} placeholder="Contact person's name" />
                                    </Field>
                                    <Field label="Mobile Number">
                                        <input className={baseInput} placeholder="e.g., 9876543210" type="tel" />
                                    </Field>
                                    <Field label="Mail ID">
                                        <input
                                            className={`${baseInput} border-[#f28b8b] text-[#dc2626] placeholder:text-[#fca5a5] focus:border-[#dc2626] focus:ring-[#f28b8b]/40`}
                                            placeholder="invalid-email"
                                            defaultValue="invalid-email"
                                            type="email"
                                            aria-invalid="true"
                                        />
                                        <span className="mt-1 text-xs font-medium text-[#dc2626]">
                                            Invalid email format
                                        </span>
                                    </Field>
                                </div>

                                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                    <Field label="Assigned Team">
                                        <select className={`${baseInput} appearance-none`} defaultValue="">
                                            <option value="" disabled>
                                                Select team
                                            </option>
                                            <option value="team_alpha">Team Alpha</option>
                                            <option value="team_beta">Team Beta</option>
                                            <option value="team_gamma">Team Gamma</option>
                                        </select>
                                    </Field>
                                    <Field label="Rep at Location">
                                        <input className={baseInput} placeholder="Name of on-site representative" />
                                    </Field>
                                </div>
                            </div>
                        </Section>

                        <Section title="Logistics & Notes">
                            <div className="grid grid-cols-1 gap-6">
                                <Field label="Requirements">
                                    <textarea
                                        className={`${baseInput} h-28 resize-none py-3`}
                                        placeholder="List any special requirements (e.g., projector, microphone, etc.)"
                                    />
                                </Field>
                                <Field label="Additional Info">
                                    <textarea
                                        className={`${baseInput} h-28 resize-none py-3`}
                                        placeholder="Enter any other relevant information"
                                    />
                                </Field>
                            </div>
                        </Section>

                        <div className="flex flex-wrap justify-end gap-3 border-t border-[#e4e9f5] pt-6">
                            <button
                                type="button"
                                className="h-11 rounded-xl border border-transparent bg-[#eef1f8] px-6 text-sm font-semibold text-[#475569] transition hover:bg-[#e2e7f3]"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="h-11 rounded-xl bg-[#137fec] px-6 text-sm font-semibold text-white transition hover:bg-[#0f6ccd]"
                            >
                                Create Event
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CreateEvents;
