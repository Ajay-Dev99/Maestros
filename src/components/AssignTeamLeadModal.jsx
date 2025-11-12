import { useState } from 'react';

const AssignTeamLeadModal = ({ isOpen, onClose, onAssign, eventName = 'this event' }) => {
    const [selectedLead, setSelectedLead] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    const teamLeads = [
        {
            id: 1,
            name: 'Aarav Sharma',
            location: 'Mumbai',
            avatar:
                'https://lh3.googleusercontent.com/aida-public/AB6AXuCdSHHiIJyw3hVAkcPeZEnLPrz0AGKIEIlWN6xXS5U6Qtzmn6RncrpVDdSYVN6BphmIs8DaOtsqHVTeR3R9-tZFo7WHy0xqihmfKs30IPCWx0cK-sw8U_HfYjb1n1ZZ8ByfK1P4bGRoi4Xct0cArdy0eBHOuAws9kIfRXrITuJCmgGbWO_pAt6zDlMOvl3NQ1YOKH2zz6ZTXFcNYY3NoHKuI9tF9em7oX-UlQ0vnKN_nTXkRkSoLYHYMU44EftZ0TsPEQtPodtpyxI',
        },
        {
            id: 2,
            name: 'Priya Patel',
            location: 'Delhi',
            avatar:
                'https://lh3.googleusercontent.com/aida-public/AB6AXuDZwfpfXZYwQzG_VRpA9yPu0vvXUq0sjPnOBAmrcgqNXu_N-8EzNNpj5QbeEhjjrS80WN1-eIYOV8b0SdOS1d_HFdUoE6FG7AVsJbHs2p5wYG2HxzOD2C5GZzh7WTa9vjVul0z9ZT5pxQbYNZ_c-X-jH3YQn1dr4ebq4dnmabhYqJnJ4N0gM7C9Keh46J4S45DQJBbdqETuMymq4MvVvuPL4AwzVTcN5aaz85nbIdzFv0EgvsmrajGprFqwflKL5m0mc5s68sJAyy8',
        },
        {
            id: 3,
            name: 'Rohan Mehta',
            location: 'Bangalore',
            avatar:
                'https://lh3.googleusercontent.com/aida-public/AB6AXuA0S_rTLn56HKeQLMASdSHRJJOtcJQ4MeY_rDKt__rHcO90K-LBwfpj43X6R1lLH9XyUBu1C5mr1BaDSA_4SbdU8gau2j6Nu-_0aLdvfCHOB2CCwAILItVlzPoqJSWc47fwX9e07-iNED-mS7_zur8lx88GeBiOElX3SVklvfrAfITXFKw6iXhBAfPc4Uo8CnYy7G2olXzDLv9C8t9nAs76BabAVA_wuK86p-VufSEtGVDS0YcmEEaf0TgmhSQi6xQ-gOJpOqO1n10',
        },
        {
            id: 4,
            name: 'Ananya Iyer',
            location: 'Chennai',
            avatar:
                'https://lh3.googleusercontent.com/aida-public/AB6AXuBIxzJUtjATOrvG7wnZrerdUAJZW3VaAOx2nACpedIsoFymyJ8QmzTdTHJ__iaJ-QrFqNuGaRrbLxShYihcfl5yTl5YrfiOPqQaRNWLlzQe3nxgYq85WK01pH64PXJwlUNOYl1F8IgDLkF98rPRF2B6B6xrdHxXE4jPP0Bt2Zp98a8XSUKSCRFz03Ek7ePLBoChxYLl8qLTCrl84NeJ92Y9A-y4OXY-eGEdWOezgZyiKGbEQ1k1FyPPRf0WNQNZ_Mpw-975m1mthps',
        },
        {
            id: 5,
            name: 'Vikram Singh',
            location: 'Hyderabad',
            avatar:
                'https://lh3.googleusercontent.com/aida-public/AB6AXuAl2MmlwqxOifqBfHQUHjGm9t38hte6QIk2Fs62OD6DxkKoUApgNHZjHhSgP4g8rJ0P7O5QSS3K2aY4owoMwgjipGWXfTevUfWjKmu-5CIyZJ05YXCS7s-abh0msKtCxDib3spP81HY6yNZG2lSdOuZ1OGwlgl_sSUbJHfARNIGT3kWsNHgYaBfbqD0osIR25eHnULaeNvzvmb35qZ3DNx2anY354AdSG79v18y7tkRcA7Vc8fPmgDWR8eBFmZyHzgBS-E2ygvOvrM',
        },
    ];

    const filteredLeads = teamLeads.filter((lead) =>
        lead.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleAssign = () => {
        if (selectedLead) {
            const lead = teamLeads.find((l) => l.id === selectedLead);
            onAssign(lead);
            handleClose();
        }
    };

    const handleClose = () => {
        setSelectedLead(null);
        setSearchQuery('');
        onClose();
    };

    if (!isOpen) return null;

    return (
        <>
            {/* Overlay */}
            <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" onClick={handleClose} />

            {/* Modal */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                <div className="relative w-full max-w-xl rounded-xl bg-white shadow-2xl">
                    {/* Close Button */}
                    <button
                        onClick={handleClose}
                        className="absolute right-4 top-4 text-gray-500 transition-colors hover:text-gray-800"
                        aria-label="Close modal"
                    >
                        <span className="material-symbols-outlined">close</span>
                    </button>

                    {/* Header */}
                    <div className="border-b border-gray-200 p-6">
                        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Assign Team Lead</h2>
                        <p className="mt-1 text-sm text-gray-500">
                            Select a team lead for the event: {eventName}
                        </p>
                    </div>

                    {/* Search Bar */}
                    <div className="p-6">
                        <label className="flex h-12 w-full flex-col">
                            <div className="flex h-full w-full flex-1 items-stretch rounded-lg">
                                <div className="flex items-center justify-center rounded-l-lg border border-r-0 border-gray-300 bg-gray-100 pl-4 text-gray-500">
                                    <span className="material-symbols-outlined text-base">search</span>
                                </div>
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="form-input flex h-full w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg rounded-l-none border border-l-0 border-gray-300 bg-gray-100 px-4 pl-2 text-sm font-normal leading-normal text-gray-900 placeholder:text-gray-500 focus:border-primary focus:outline-0 focus:ring-2 focus:ring-primary/50"
                                    placeholder="Search by Team Lead name..."
                                />
                            </div>
                        </label>
                    </div>

                    {/* Team Lead List */}
                    <div className="h-80 space-y-3 overflow-y-auto px-6">
                        {filteredLeads.map((lead) => (
                            <label
                                key={lead.id}
                                className={[
                                    'flex cursor-pointer items-center gap-4 rounded-lg border border-solid p-4 transition-colors',
                                    selectedLead === lead.id
                                        ? 'border-primary bg-primary/10'
                                        : 'border-gray-300 hover:bg-gray-50',
                                ]
                                    .filter(Boolean)
                                    .join(' ')}
                            >
                                <input
                                    type="radio"
                                    name="team-lead-selection"
                                    value={lead.id}
                                    checked={selectedLead === lead.id}
                                    onChange={() => setSelectedLead(lead.id)}
                                    className="form-radio size-5 appearance-none rounded-full border-2 border-gray-300 bg-transparent text-transparent checked:border-primary checked:bg-primary focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-white"
                                    style={{
                                        backgroundImage:
                                            selectedLead === lead.id
                                                ? 'url("data:image/svg+xml,%3csvg viewBox=%270 0 16 16%27 fill=%27%23ffffff%27 xmlns=%27http://www.w3.org/2000/svg%27%3e%3ccircle cx=%278%27 cy=%278%27 r=%273.5%27/%3e%3c/svg%3e")'
                                                : 'none',
                                    }}
                                />
                                <div className="flex grow items-center gap-4">
                                    <img
                                        src={lead.avatar}
                                        alt={lead.name}
                                        className="size-10 rounded-full object-cover"
                                    />
                                    <div className="flex grow flex-col">
                                        <p className="text-sm font-medium leading-normal text-gray-900">{lead.name}</p>
                                        <p className="text-sm font-normal leading-normal text-gray-500">
                                            {lead.location}
                                        </p>
                                    </div>
                                </div>
                            </label>
                        ))}

                        {filteredLeads.length === 0 && (
                            <div className="flex h-40 items-center justify-center">
                                <p className="text-sm text-gray-500">No team leads found</p>
                            </div>
                        )}
                    </div>

                    {/* Footer Buttons */}
                    <div className="flex justify-end gap-3 border-t border-gray-200 p-6">
                        <button
                            onClick={handleClose}
                            className="flex h-10 min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-gray-100 px-4 text-sm font-bold leading-normal tracking-[0.015em] text-gray-900 transition-colors hover:bg-gray-200"
                        >
                            <span className="truncate">Cancel</span>
                        </button>
                        <button
                            onClick={handleAssign}
                            disabled={!selectedLead}
                            className="flex h-10 min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary px-4 text-sm font-bold leading-normal tracking-[0.015em] text-white transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            <span className="truncate">Assign</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AssignTeamLeadModal;

