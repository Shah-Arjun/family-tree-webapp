import { FamilyTreeData } from '@/types/family';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { User, Calendar, MapPin } from 'lucide-react';

interface FamilyTreeNodeProps {
  nodeDatum: FamilyTreeData;
  onNodeClick?: (nodeData: FamilyTreeData) => void;
}

export const FamilyTreeNode: React.FC<FamilyTreeNodeProps> = ({ 
  nodeDatum, 
  onNodeClick 
}) => {
  const getGenderColor = (gender: string) => {
    switch (gender) {
      case 'male': return 'bg-family-male text-white';
      case 'female': return 'bg-family-female text-white';
      default: return 'bg-family-unknown text-white';
    }
  };

  const getSideColor = (side: string) => {
    switch (side) {
      case 'paternal': return 'border-family-paternal';
      case 'maternal': return 'border-family-maternal';
      default: return 'border-primary';
    }
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  const formatDate = (dateString?: string) => {
    if (!dateString) return '';
    return new Date(dateString).getFullYear().toString();
  };

  return (
    <foreignObject width="200" height="140" x="-100" y="-70">
      <Card 
        className={`w-full h-full cursor-pointer hover:shadow-tree-node transition-all duration-200 border-2 ${getSideColor(nodeDatum.side)}`}
        onClick={() => onNodeClick?.(nodeDatum)}
      >
        <CardContent className="p-3 h-full flex flex-col items-center justify-center space-y-2">
          <div className="relative">
            <Avatar className="w-12 h-12 border-2 border-background">
              <AvatarImage src={nodeDatum.photo} alt={nodeDatum.name} />
              <AvatarFallback className={getGenderColor(nodeDatum.gender)}>
                {getInitials(nodeDatum.name)}
              </AvatarFallback>
            </Avatar>
            {!nodeDatum.isAlive && (
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-destructive rounded-full border-2 border-background" />
            )}
          </div>
          
          <div className="text-center space-y-1">
            <h3 className="font-semibold text-sm text-foreground truncate w-full">
              {nodeDatum.name}
            </h3>
            
            {nodeDatum.dateOfBirth && (
              <div className="flex items-center justify-center space-x-1 text-xs text-muted-foreground">
                <Calendar className="w-3 h-3" />
                <span>{formatDate(nodeDatum.dateOfBirth)}</span>
                {nodeDatum.dateOfDeath && (
                  <>
                    <span>-</span>
                    <span>{formatDate(nodeDatum.dateOfDeath)}</span>
                  </>
                )}
              </div>
            )}
            
            <div className="flex justify-center">
              <Badge variant="secondary" className="text-xs capitalize">
                {nodeDatum.side}
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </foreignObject>
  );
};