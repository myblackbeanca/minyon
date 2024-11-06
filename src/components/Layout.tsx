import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard,
  Calendar,
  Music,
  ShoppingBag,
  Heart,
  Video,
  Ticket,
  Bell,
  Settings,
  Users
} from 'lucide-react';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();

  const navItems = [
    { 
      path: '/', 
      label: 'Dashboard', 
      icon: LayoutDashboard,
      description: 'Overview of all metrics'
    },
    { 
      path: '/events', 
      label: 'Events', 
      icon: Calendar,
      description: 'Exclusive MINY holder events'
    },
    { 
      path: '/music', 
      label: 'Music Teasers', 
      icon: Music,
      description: 'Unreleased music engagement'
    },
    { 
      path: '/merch', 
      label: 'Merch Access', 
      icon: ShoppingBag,
      description: 'Exclusive merchandise'
    },
    { 
      path: '/cause', 
      label: 'Cause Support', 
      icon: Heart,
      description: 'Fundraising campaigns'
    },
    { 
      path: '/virtual', 
      label: 'Virtual Events', 
      icon: Video,
      description: 'Digital meet & greets'
    },
    { 
      path: '/tickets', 
      label: 'Festival Tickets', 
      icon: Ticket,
      description: 'Special-priced tickets'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation Bar */}
      <nav className="bg-white border-b border-gray-200 fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0 flex items-center">
                <span className="text-xl font-bold text-purple-600">MINY</span>
              </Link>
              
              {/* Desktop Navigation */}
              <div className="hidden lg:flex lg:items-center lg:ml-6 lg:space-x-4">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.path;
                  
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`group relative px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        isActive
                          ? 'text-purple-600 bg-purple-50'
                          : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
                      }`}
                    >
                      <div className="flex items-center space-x-2">
                        <Icon className="h-4 w-4" />
                        <span>{item.label}</span>
                      </div>
                      
                      {/* Tooltip */}
                      <div className="absolute hidden group-hover:block -bottom-12 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-gray-900 text-white text-xs rounded whitespace-nowrap">
                        {item.description}
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Right side controls */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <button className="p-2 rounded-full hover:bg-gray-100 relative">
                  <Bell className="h-5 w-5 text-gray-600" />
                  <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400 transform translate-x-1/2 -translate-y-1/2"></span>
                </button>
                <button className="p-2 rounded-full hover:bg-gray-100">
                  <Settings className="h-5 w-5 text-gray-600" />
                </button>
              </div>

              {/* Profile Section */}
              <div className="flex items-center space-x-3">
                <div className="text-right hidden sm:block">
                  <div className="text-sm font-medium text-gray-900">Sarah Connor</div>
                  <div className="text-xs text-gray-500">MINY Artist</div>
                </div>
                <img
                  className="h-8 w-8 rounded-full object-cover"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Artist profile"
                />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Menu - Shows on small screens */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-10">
        <div className="grid grid-cols-4 gap-1 p-2">
          {navItems.slice(0, 4).map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center justify-center py-2 ${
                  isActive ? 'text-purple-600' : 'text-gray-600'
                }`}
              >
                <Icon className="h-5 w-5" />
                <span className="text-xs mt-1">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Main Content */}
      <main className="pt-16 pb-16 lg:pb-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </div>
      </main>
    </div>
  );
};