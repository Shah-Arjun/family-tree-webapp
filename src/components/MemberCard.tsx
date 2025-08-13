import { FamilyMember } from '@/types/family';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  User, 
  Calendar, 
  MapPin, 
  Phone, 
  Mail, 
  Briefcase,
  Edit,
  Trash2,
  Heart,
  Baby
} from 'lucide-react';

interface MemberCardProps {
  member: FamilyMember;
  onEdit?: (member: FamilyMember) => void;
  onDelete?: (memberId: string) => void;
  compact?: boolean;
}

export const MemberCard: React.FC<MemberCardProps> = ({ 
  member, 
  onEdit, 
  onDelete,
  compact = false 
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
      case 'paternal': return 'border-l-family-paternal';
      case 'maternal': return 'border-l-family-maternal';
      default: return 'border-l-primary';
    }
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  const formatDate = (dateString?: string) => {
    if (!dateString) return 'Unknown';
    return new Date(dateString).toLocaleDateString();
  };

  const calculateAge = (birthDate?: string, deathDate?: string) => {
    if (!birthDate) return '';
    const birth = new Date(birthDate);
    const end = deathDate ? new Date(deathDate) : new Date();
    const age = end.getFullYear() - birth.getFullYear();
    return `${age} years old${deathDate ? ' (at death)' : ''}`;
  };

  if (compact) {
    return (
      <Card className={`hover:shadow-family-card transition-shadow duration-200 border-l-4 ${getSideColor(member.side)}`}>
        <CardContent className="p-4">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Avatar className="w-12 h-12">
                <AvatarImage src={member.photo} alt={member.name} />
                <AvatarFallback className={getGenderColor(member.gender)}>
                  {getInitials(member.name)}
                </AvatarFallback>
              </Avatar>
              {!member.isAlive && (
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-destructive rounded-full border-2 border-background" />
              )}
            </div>
            
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-foreground truncate">{member.name}</h3>
              <p className="text-sm text-muted-foreground">{member.occupation || 'Unknown occupation'}</p>
              <div className="flex items-center space-x-2 mt-1">
                <Badge variant="secondary" className="text-xs capitalize">
                  {member.side}
                </Badge>
                <Badge variant="outline" className="text-xs capitalize">
                  {member.gender}
                </Badge>
              </div>
            </div>

            <div className="flex space-x-1">
              {onEdit && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onEdit(member)}
                  className="h-8 w-8 p-0"
                >
                  <Edit className="h-4 w-4" />
                </Button>
              )}
              {onDelete && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onDelete(member.id)}
                  className="h-8 w-8 p-0 text-destructive hover:text-destructive"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={`hover:shadow-family-card transition-shadow duration-200 border-l-4 ${getSideColor(member.side)}`}>
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Avatar className="w-16 h-16">
                <AvatarImage src={member.photo} alt={member.name} />
                <AvatarFallback className={getGenderColor(member.gender)}>
                  {getInitials(member.name)}
                </AvatarFallback>
              </Avatar>
              {!member.isAlive && (
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-destructive rounded-full border-2 border-background" />
              )}
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-foreground">{member.name}</h3>
              {member.occupation && (
                <p className="text-muted-foreground">{member.occupation}</p>
              )}
              <div className="flex items-center space-x-2 mt-2">
                <Badge variant="secondary" className="capitalize">
                  {member.side}
                </Badge>
                <Badge variant="outline" className="capitalize">
                  {member.gender}
                </Badge>
                {member.spouseId && (
                  <Badge variant="outline" className="flex items-center space-x-1">
                    <Heart className="w-3 h-3" />
                    <span>Married</span>
                  </Badge>
                )}
                {member.childrenIds.length > 0 && (
                  <Badge variant="outline" className="flex items-center space-x-1">
                    <Baby className="w-3 h-3" />
                    <span>{member.childrenIds.length} child{member.childrenIds.length !== 1 ? 'ren' : ''}</span>
                  </Badge>
                )}
              </div>
            </div>
          </div>

          <div className="flex space-x-2">
            {onEdit && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => onEdit(member)}
              >
                <Edit className="h-4 w-4 mr-2" />
                Edit
              </Button>
            )}
            {onDelete && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => onDelete(member.id)}
                className="text-destructive border-destructive hover:bg-destructive hover:text-white"
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Delete
              </Button>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="flex items-center space-x-2 text-sm">
              <Calendar className="w-4 h-4 text-muted-foreground" />
              <span className="text-muted-foreground">Born:</span>
              <span>{formatDate(member.dateOfBirth)}</span>
            </div>
            
            {member.dateOfDeath && (
              <div className="flex items-center space-x-2 text-sm">
                <Calendar className="w-4 h-4 text-muted-foreground" />
                <span className="text-muted-foreground">Died:</span>
                <span>{formatDate(member.dateOfDeath)}</span>
              </div>
            )}

            {member.dateOfBirth && (
              <div className="flex items-center space-x-2 text-sm">
                <User className="w-4 h-4 text-muted-foreground" />
                <span className="text-muted-foreground">Age:</span>
                <span>{calculateAge(member.dateOfBirth, member.dateOfDeath)}</span>
              </div>
            )}

            {member.location && (
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="w-4 h-4 text-muted-foreground" />
                <span className="text-muted-foreground">Location:</span>
                <span>{member.location}</span>
              </div>
            )}
          </div>

          <div className="space-y-3">
            {member.email && (
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="w-4 h-4 text-muted-foreground" />
                <span className="text-muted-foreground">Email:</span>
                <span className="truncate">{member.email}</span>
              </div>
            )}

            {member.phone && (
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="w-4 h-4 text-muted-foreground" />
                <span className="text-muted-foreground">Phone:</span>
                <span>{member.phone}</span>
              </div>
            )}

            {member.occupation && (
              <div className="flex items-center space-x-2 text-sm">
                <Briefcase className="w-4 h-4 text-muted-foreground" />
                <span className="text-muted-foreground">Occupation:</span>
                <span>{member.occupation}</span>
              </div>
            )}
          </div>
        </div>

        {member.notes && (
          <div className="pt-4 border-t">
            <h4 className="font-medium text-sm text-muted-foreground mb-2">Notes</h4>
            <p className="text-sm">{member.notes}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};