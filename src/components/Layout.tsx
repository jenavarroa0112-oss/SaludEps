import { Link, Outlet, useLocation } from 'react-router-dom';
import { Home, Search, Pill, Bell, User } from 'lucide-react';
import { getActiveUser, notificaciones } from '../data/mockData';

export default function Layout() {
  const location = useLocation();
  const user = getActiveUser();
  const unreadCount = notificaciones.filter(n => !n.leida).length;

  const navItems = [
    { path: '/', label: 'Inicio', icon: Home },
    { path: '/search', label: 'Buscar', icon: Search },
    { path: '/medications', label: 'Medicinas', icon: Pill },
    { path: '/profile', label: 'Perfil', icon: User },
  ];

  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-text-main)] flex flex-col pb-20 md:pb-0">
      {/* Top Header */}
      <header className="bg-[var(--color-surface)] shadow-sm sticky top-0 z-10 px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[var(--color-primary-light)] text-white flex items-center justify-center font-bold text-lg">
            {user.nombre_paciente.charAt(0)}
          </div>
          <div>
            <h1 className="text-lg font-bold">Hola, {user.nombre_paciente.split(' ')[0]}</h1>
            <p className="text-sm text-[var(--color-text-muted)]">{user.eps}</p>
          </div>
        </div>
        <Link to="/notifications" className="relative p-2 rounded-full hover:bg-gray-100 transition-colors">
          <Bell className="w-6 h-6 text-[var(--color-primary)]" />
          {unreadCount > 0 && (
            <span className="absolute top-1 right-1 w-3 h-3 bg-[var(--color-accent)] rounded-full border-2 border-white"></span>
          )}
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-3xl mx-auto p-4 md:p-6 overflow-x-hidden">
        <Outlet />
      </main>

      {/* Bottom Navigation (Mobile) */}
      <nav className="fixed bottom-0 w-full bg-[var(--color-surface)] shadow-[0_-2px_10px_rgba(0,0,0,0.05)] flex justify-around p-3 md:hidden z-20">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path));
          const Icon = item.icon;
          return (
            <Link 
              key={item.path} 
              to={item.path} 
              className={`flex flex-col items-center gap-1 p-2 min-w-[64px] rounded-xl transition-colors ${isActive ? 'text-[var(--color-primary)]' : 'text-[var(--color-text-muted)] hover:bg-gray-50'}`}
            >
              <Icon className={`w-6 h-6 ${isActive ? 'stroke-2' : 'stroke-[1.5]'}`} />
              <span className="text-[10px] font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
