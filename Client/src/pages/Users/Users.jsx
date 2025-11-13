import { useState } from 'react';

const Users = () => {
    const [activeFilter, setActiveFilter] = useState('All');

    const users = [
        {
            id: 1,
            name: 'Admin User',
            email: 'admin@example.com',
            role: 'Admin',
            avatar:
                'https://lh3.googleusercontent.com/aida-public/AB6AXuD8yDxg12etXT6ZrReBp3vLYPIoMgofwruXSOnZ5GByJ7A9oe6eGeGkJA2QCenBGS3ni7sG0K795rnzJGn9hQETLcWZK4eUgMmU7ouH6zsuzOcdgqNkV1kBm9UrrzLhpRHkpyuLzL521ebsSMLgC--dC576nzmreNjC9WVE-NWRPBP2H0Y0Slv7CaWXkCTx546f_c7PPDesu3y1n0mLpgquc_OKau1LbYFUMePR4QSkekC_OUWVkaeKqMA6VFwMLravMmGOTjGsqU0',
        },
        {
            id: 2,
            name: 'Priya Desai',
            email: 'priya.desai@example.com',
            role: 'Team Lead',
            avatar:
                'https://lh3.googleusercontent.com/aida-public/AB6AXuBZ1FZg-r3vVs9HHbHdRQmQyFWF7LYHeDILMtnoq9DfSyOKglvd4yabSDuoGxm67JSiEdxydpSu2MolvBxSkXEU2SYmdYLLimhvALukd2HAhG1JhwJITeb1GBEmDQKZmztXe1tXeePQII6pMNAperBd7MAzuglg_2CGrtKNVriZGP4pCmds0OLMO96Zssw3b9-0avyQaJVAbbx76eKUsx7gnd8GDPv_eax-TInabyB_AzITSjdlJTJ74XeaY8dCmQttH4NYbTVxUoU',
        },
        {
            id: 3,
            name: 'Rohan Verma',
            email: 'rohan.verma@example.com',
            role: 'Trainer',
            avatar:
                'https://lh3.googleusercontent.com/aida-public/AB6AXuBZ1FZg-r3vVs9HHbHdRQmQyFWF7LYHeDILMtnoq9DfSyOKglvd4yabSDuoGxm67JSiEdxydpSu2MolvBxSkXEU2SYmdYLLimhvALukd2HAhG1JhwJITeb1GBEmDQKZmztXe1tXeePQII6pMNAperBd7MAzuglg_2CGrtKNVriZGP4pCmds0OLMO96Zssw3b9-0avyQaJVAbbx76eKUsx7gnd8GDPv_eax-TInabyB_AzITSjdlJTJ74XeaY8dCmQttH4NYbTVxUoU',
        },
        {
            id: 4,
            name: 'Amit Patel',
            email: 'amit.patel@example.com',
            role: 'Team Lead',
            avatar:
                'https://lh3.googleusercontent.com/aida-public/AB6AXuBZ1FZg-r3vVs9HHbHdRQmQyFWF7LYHeDILMtnoq9DfSyOKglvd4yabSDuoGxm67JSiEdxydpSu2MolvBxSkXEU2SYmdYLLimhvALukd2HAhG1JhwJITeb1GBEmDQKZmztXe1tXeePQII6pMNAperBd7MAzuglg_2CGrtKNVriZGP4pCmds0OLMO96Zssw3b9-0avyQaJVAbbx76eKUsx7gnd8GDPv_eax-TInabyB_AzITSjdlJTJ74XeaY8dCmQttH4NYbTVxUoU',
        },
        {
            id: 5,
            name: 'Sunita Rao',
            email: 'sunita.rao@example.com',
            role: 'Trainer',
            avatar:
                'https://lh3.googleusercontent.com/aida-public/AB6AXuBZ1FZg-r3vVs9HHbHdRQmQyFWF7LYHeDILMtnoq9DfSyOKglvd4yabSDuoGxm67JSiEdxydpSu2MolvBxSkXEU2SYmdYLLimhvALukd2HAhG1JhwJITeb1GBEmDQKZmztXe1tXeePQII6pMNAperBd7MAzuglg_2CGrtKNVriZGP4pCmds0OLMO96Zssw3b9-0avyQaJVAbbx76eKUsx7gnd8GDPv_eax-TInabyB_AzITSjdlJTJ74XeaY8dCmQttH4NYbTVxUoU',
        },
    ];

    const filters = ['All', 'Admin', 'Team Lead', 'Trainer'];

    const roleStyles = {
        Admin: 'bg-[#8B5CF6]/10 text-[#8B5CF6]',
        'Team Lead': 'bg-[#3B82F6]/10 text-[#3B82F6]',
        Trainer: 'bg-[#F59E0B]/10 text-[#F59E0B]',
    };

    const roleDotColors = {
        Admin: 'bg-[#8B5CF6]',
        'Team Lead': 'bg-[#3B82F6]',
        Trainer: 'bg-[#F59E0B]',
    };

    const filteredUsers = activeFilter === 'All' ? users : users.filter((user) => user.role === activeFilter);

    return (
        <div className="min-h-full">
            {/* Header */}
            <header className="sticky top-0 z-10 flex h-auto items-center justify-between gap-4 border-b border-[#e2e8f4] bg-white/80 px-4 py-4 backdrop-blur md:h-20 md:px-10">
                <label className="relative ml-12 flex w-full flex-1 items-center lg:ml-0 lg:max-w-lg">
                    <span className="material-symbols-outlined absolute left-3 text-slate-400 md:left-5">search</span>
                    <input
                        type="search"
                        placeholder="Search users by name, email..."
                        className="h-10 w-full rounded-[14px] border border-[#d7deee] bg-[#eef2fc] pl-10 pr-3 text-sm font-normal text-[#53627c] placeholder:text-[#93a0b8] shadow-[inset_0_1px_2px_rgba(15,23,42,0.08)] transition focus:border-[#3a80f5] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#3a80f5]/10 md:h-12 md:pl-14 md:pr-5"
                    />
                </label>

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
                        <h1 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                            User Management
                        </h1>
                        <p className="mt-1 text-sm text-slate-500">Manage all users within the system.</p>
                    </div>

                    <button
                        type="button"
                        className="flex h-10 items-center justify-center gap-2 rounded-lg bg-primary px-5 text-sm font-medium text-white transition hover:bg-primary/90"
                    >
                        <span className="material-symbols-outlined text-lg">add</span>
                        <span>Create User</span>
                    </button>
                </div>

                {/* Filter Tabs */}
                <div className="mt-6 flex flex-wrap items-center gap-2 border-b border-slate-200 pb-3">
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            type="button"
                            onClick={() => setActiveFilter(filter)}
                            className={[
                                'flex h-9 shrink-0 items-center justify-center rounded-lg px-4 text-sm font-medium transition-all',
                                activeFilter === filter
                                    ? 'bg-primary/10 text-primary'
                                    : 'text-slate-600 hover:bg-slate-100',
                            ]
                                .filter(Boolean)
                                .join(' ')}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                {/* Users Table */}
                <div className="mt-6 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                    <div className="overflow-x-auto">
                        <table className="w-full table-auto">
                            <thead className="border-b border-slate-200 bg-slate-50 text-left text-sm font-medium text-slate-600">
                                <tr>
                                    <th className="px-4 py-4 md:px-6">User</th>
                                    <th className="px-4 py-4 md:px-6">Role</th>
                                    <th className="px-4 py-4 text-right md:px-6">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200">
                                {filteredUsers.map((user) => (
                                    <tr key={user.id} className="transition hover:bg-slate-50">
                                        <td className="px-4 py-4 md:px-6">
                                            <div className="flex items-center gap-3 md:gap-4">
                                                <div
                                                    className="size-10 shrink-0 rounded-full bg-cover bg-center bg-no-repeat"
                                                    style={{ backgroundImage: `url("${user.avatar}")` }}
                                                />
                                                <div className="min-w-0">
                                                    <p className="truncate font-semibold text-slate-800">
                                                        {user.name}
                                                    </p>
                                                    <p className="truncate text-sm text-slate-500">{user.email}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-4 py-4 md:px-6">
                                            <div
                                                className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium ${roleStyles[user.role]
                                                    }`}
                                            >
                                                <span className={`size-2 rounded-full ${roleDotColors[user.role]}`} />
                                                {user.role}
                                            </div>
                                        </td>
                                        <td className="px-4 py-4 md:px-6">
                                            <div className="flex justify-end gap-2">
                                                <button
                                                    type="button"
                                                    className="flex size-8 items-center justify-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-primary"
                                                    aria-label="View user"
                                                >
                                                    <span className="material-symbols-outlined text-xl">
                                                        visibility
                                                    </span>
                                                </button>
                                                <button
                                                    type="button"
                                                    className="flex size-8 items-center justify-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-primary"
                                                    aria-label="Edit user"
                                                >
                                                    <span className="material-symbols-outlined text-xl">edit</span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Pagination */}
                <div className="mt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
                    <p className="text-sm text-slate-600">
                        Showing <span className="font-semibold text-slate-800">1</span> to{' '}
                        <span className="font-semibold text-slate-800">{filteredUsers.length}</span> of{' '}
                        <span className="font-semibold text-slate-800">15</span> users
                    </p>

                    <div className="flex items-center gap-2">
                        <button
                            type="button"
                            className="flex h-9 items-center justify-center rounded-lg border border-slate-200 bg-white px-4 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                        >
                            Previous
                        </button>
                        <button
                            type="button"
                            className="flex h-9 items-center justify-center rounded-lg border border-slate-200 bg-white px-4 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Users;

