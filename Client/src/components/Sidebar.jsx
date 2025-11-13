import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const DEFAULT_NAV_ITEMS = [
    { label: 'Dashboard', icon: 'dashboard', to: '/' },
    { label: 'Events', icon: 'event', to: '/events' },
    { label: 'Users', icon: 'group', to: '/users' },
    { label: 'Reports', icon: 'bar_chart', to: '/reports' },
    // { label: 'Settings', icon: 'settings', to: '/settings' },
];

const DEFAULT_USER = {
    name: 'Admin User',
    email: 'admin@example.com',
    avatar:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuD8yDxg12etXT6ZrReBp3vLYPIoMgofwruXSOnZ5GByJ7A9oe6eGeGkJA2QCenBGS3ni7sG0K795rnzJGn9hQETLcWZK4eUgMmU7ouH6zsuzOcdgqNkV1kBm9UrrzLhpRHkpyuLzL521ebsSMLgC--dC576nzmreNjC9WVE-NWRPBP2H0Y0Slv7CaWXkCTx546f_c7PPDesu3y1n0mLpgquc_OKau1LbYFUMePR4QSkekC_OUWVkaeKqMA6VFwMLravMmGOTjGsqU0',
};

const Sidebar = ({
    navItems = DEFAULT_NAV_ITEMS,
    user = DEFAULT_USER,
    brand = { label: 'Maestros', icon: 'rocket_launch' },
}) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            {/* Mobile Hamburger Button */}
            <button
                type="button"
                onClick={toggleMobileMenu}
                className="fixed left-4 top-4 z-50 flex size-12 items-center justify-center rounded-xl bg-white text-slate-700 shadow-lg transition-colors hover:bg-slate-100 lg:hidden"
                aria-label="Toggle menu"
            >
                <span className="material-symbols-outlined text-2xl">
                    {isMobileMenuOpen ? 'close' : 'menu'}
                </span>
            </button>

            {/* Mobile Overlay */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm lg:hidden"
                    onClick={closeMobileMenu}
                    aria-hidden="true"
                />
            )}

            {/* Sidebar */}
            <aside
                className={[
                    'fixed inset-y-0 left-0 z-40 flex h-screen w-64 flex-col border-r border-slate-200 bg-white p-4 transition-transform duration-300 ease-in-out lg:static lg:translate-x-0',
                    isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full',
                ]
                    .filter(Boolean)
                    .join(' ')}
            >
                {/* Brand Header */}
                <div className="flex items-center gap-3 rounded-xl bg-primary/5 p-3 text-primary">
                    <span
                        className="material-symbols-outlined text-3xl"
                        style={{ fontVariationSettings: '"OPSZ" 28' }}
                        aria-hidden="true"
                    >
                        {brand.icon}
                    </span>
                    <h2 className="text-xl font-semibold tracking-tight text-slate-900">{brand.label}</h2>
                </div>

                {/* Navigation */}
                <nav className="mt-8 flex h-full flex-col justify-between">
                    <div className="flex flex-col gap-2">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.label}
                                to={item.to}
                                end={item.to === '/'}
                                onClick={closeMobileMenu}
                                className={({ isActive }) =>
                                    [
                                        'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium capitalize transition-colors',
                                        'text-slate-600 hover:bg-slate-100 hover:text-primary',
                                        isActive ? 'bg-primary/10 text-primary shadow-sm' : '',
                                    ]
                                        .filter(Boolean)
                                        .join(' ')
                                }
                            >
                                <span className="material-symbols-outlined" aria-hidden="true">
                                    {item.icon}
                                </span>
                                <span>{item.label}</span>
                            </NavLink>
                        ))}
                    </div>

                    {/* User Profile */}
                    <div className="flex flex-col gap-4">
                        <div className="flex gap-3">
                            <div
                                className="size-10 rounded-full bg-cover bg-center bg-no-repeat"
                                aria-label={`${user.name} avatar`}
                                role="img"
                                style={{ backgroundImage: `url("${user.avatar}")` }}
                            />
                            <div className="flex flex-col">
                                <span className="text-sm font-medium leading-normal text-slate-900">
                                    {user.name}
                                </span>
                                <span className="text-xs font-normal leading-normal text-slate-500">
                                    {user.email}
                                </span>
                            </div>
                        </div>
                    </div>
                </nav>
            </aside>
        </>
    );
};

export default Sidebar;

