export interface FamilyMember {
  id: string;
  name: string;
  dateOfBirth?: string;
  dateOfDeath?: string;
  gender: 'male' | 'female' | 'unknown';
  photo?: string;
  email?: string;
  phone?: string;
  occupation?: string;
  location?: string;
  
  // Relationships
  fatherId?: string;
  motherId?: string;
  spouseId?: string;
  childrenIds: string[];
  
  // Family tree positioning
  generation: number;
  side: 'paternal' | 'maternal' | 'current';
  
  // Additional info
  notes?: string;
  isAlive: boolean;
}

export interface TreeNodeData {
  name: string;
  id: string;
  gender: 'male' | 'female' | 'unknown';
  generation: number;
  side: 'paternal' | 'maternal' | 'current';
  photo?: string;
  dateOfBirth?: string;
  dateOfDeath?: string;
  isAlive: boolean;
  children?: TreeNodeData[];
}

export interface FamilyTreeData {
  name: string;
  id: string;
  gender: 'male' | 'female' | 'unknown';
  generation: number;
  side: 'paternal' | 'maternal' | 'current';
  photo?: string;
  dateOfBirth?: string;
  dateOfDeath?: string;
  isAlive: boolean;
  children?: FamilyTreeData[];
}