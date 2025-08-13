import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  TreePine, 
  Users, 
  UserPlus, 
  Settings,
  User,
  LogOut 
} from 'lucide-react';

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  memberCount: number;
}

export const Navigation: React.FC<NavigationProps> = ({ 
  activeTab, 
  onTabChange, 
  memberCount 
}) => {
  const navItems = [
    {
      id: 'tree',
      label: 'Family Tree',
      icon: TreePine,
      description: 'Interactive family tree visualization'
    },
    {
      id: 'members',
      label: 'Members',
      icon: Users,
      description: 'Browse all family members',
      badge: memberCount
    },
    {
      id: 'add',
      label: 'Add Member',
      icon: UserPlus,
      description: 'Add a new family member'
    }
  ];

  return (
    <div className="bg-card border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-family rounded-lg flex items-center justify-center">
              <TreePine className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">FamilyTree</h1>
              <p className="text-sm text-muted-foreground">Manage your heritage</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              
              return (
                <Button
                  key={item.id}
                  variant={isActive ? "default" : "ghost"}
                  onClick={() => onTabChange(item.id)}
                  className="relative flex items-center space-x-2 px-4 py-2"
                  title={item.description}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{item.label}</span>
                  {item.badge && (
                    <Badge variant="secondary" className="ml-2 text-xs">
                      {item.badge}
                    </Badge>
                  )}
                </Button>
              );
            })}
          </nav>

          {/* User menu */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" className="flex items-center space-x-2">
              <User className="w-4 h-4" />
              <span className="hidden sm:inline">John Smith</span>
            </Button>
            <Button variant="ghost" size="sm">
              <Settings className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <LogOut className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};