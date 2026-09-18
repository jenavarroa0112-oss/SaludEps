import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Home, Search, Pill, Bell, User, ArrowLeft } from 'lucide-react';
import { getActiveUser, notificaciones } from '../data/mockData';

export default function Layout() {
  const location = useLocation();
  const navigate = useNavigate();
  const user = getActiveUser();
  const unreadCount = notificaciones.filter(n => !n.leida).length;

  const navItems = [
    { path: '/', label: 'Inicio', icon: Home },
    { path: '/search', label: 'Buscar', icon: Search },
    { path: '/medications', label: 'Medicinas', icon: Pill },
    { path: '/notifications', label: 'Notificaciones', icon: Bell, badge: unreadCount },
    { path: '/profile', label: 'Perfil', icon: User },
  ];

  const isHome = location.pathname === '/';

  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-text-main)] flex pb-20 md:pb-0">
      
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-72 bg-[var(--color-surface)] border-r border-gray-100 p-6 sticky top-0 h-screen overflow-y-auto z-20">
        <div className="flex items-center gap-4 mb-10 px-2">
          <div className="w-12 h-12 rounded-full bg-[var(--color-primary-light)] text-white flex items-center justify-center font-bold text-xl flex-shrink-0">
            {user.nombre_paciente.charAt(0)}
          </div>
          <div className="overflow-hidden">
            <h1 className="text-lg font-bold truncate text-[var(--color-text-main)]">{user.nombre_paciente}</h1>
            <p className="text-sm text-[var(--color-text-muted)] truncate">{user.eps}</p>
          </div>
        </div>

        <nav className="flex flex-col gap-3 flex-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path));
            const Icon = item.icon;
            return (
              <Link 
                key={item.path} 
                to={item.path} 
                className={`relative flex items-center gap-4 p-4 rounded-2xl transition-all ${isActive ? 'bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-bold' : 'text-[var(--color-text-muted)] hover:bg-gray-50 font-medium'}`}
              >
                <Icon className={`w-6 h-6 ${isActive ? 'stroke-2' : 'stroke-[1.5]'}`} />
                <span className="text-base">{item.label}</span>
                {item.badge !== undefined && item.badge > 0 && (
                  <span className="absolute right-4 bg-[var(--color-accent)] text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Main Wrapper */}
      <div className="flex-1 flex flex-col min-h-screen w-full relative">
        
        {/* Top Header - Mobile Only */}
        <header className="md:hidden bg-[var(--color-surface)] shadow-sm sticky top-0 z-10 px-4 py-4 flex justify-between items-center">
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

        {/* Global Back Button for Non-Home Pages (visible on desktop mostly, but good for mobile too if deep linked) */}
        {!isHome && (
          <div className="hidden md:flex px-6 pt-6 pb-2 max-w-3xl mx-auto w-full">
            <button 
              onClick={() => navigate(-1)} 
              className="flex items-center gap-2 text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] transition-colors bg-white/50 px-4 py-2 rounded-xl"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Volver atrás</span>
            </button>
          </div>
        )}

        {/* Main Content */}
        <main className="flex-1 w-full max-w-3xl mx-auto p-4 md:p-6 overflow-x-hidden">
          <Outlet />
        </main>

        {/* Bottom Navigation (Mobile Only) */}
        <nav className="fixed bottom-0 w-full bg-[var(--color-surface)] shadow-[0_-2px_10px_rgba(0,0,0,0.05)] flex justify-around p-3 md:hidden z-20">
          {navItems.filter(i => i.path !== '/notifications').map((item) => {
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
    </div>
  );
}
