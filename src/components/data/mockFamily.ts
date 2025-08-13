import { FamilyMember, FamilyTreeData } from '../types/family';

export const mockFamilyMembers: FamilyMember[] = [
  // Current user
  {
    id: 'user-1',
    name: 'John Smith',
    dateOfBirth: '1990-05-15',
    gender: 'male',
    email: 'john.smith@email.com',
    phone: '+1234567890',
    occupation: 'Software Engineer',
    location: 'San Francisco, CA',
    spouseId: 'spouse-1',
    childrenIds: ['child-1', 'child-2'],
    fatherId: 'father-1',
    motherId: 'mother-1',
    generation: 0,
    side: 'current',
    isAlive: true,
    notes: 'Current user of the family tree app'
  },

  // Spouse
  {
    id: 'spouse-1',
    name: 'Sarah Johnson Smith',
    dateOfBirth: '1992-08-22',
    gender: 'female',
    email: 'sarah.smith@email.com',
    phone: '+1234567891',
    occupation: 'Graphic Designer',
    location: 'San Francisco, CA',
    spouseId: 'user-1',
    childrenIds: ['child-1', 'child-2'],
    fatherId: 'maternal-gf-1',
    motherId: 'maternal-gm-1',
    generation: 0,
    side: 'current',
    isAlive: true
  },

  // Children
  {
    id: 'child-1',
    name: 'Emma Smith',
    dateOfBirth: '2018-03-10',
    gender: 'female',
    location: 'San Francisco, CA',
    fatherId: 'user-1',
    motherId: 'spouse-1',
    childrenIds: [],
    generation: -1,
    side: 'current',
    isAlive: true
  },
  {
    id: 'child-2',
    name: 'Lucas Smith',
    dateOfBirth: '2020-11-08',
    gender: 'male',
    location: 'San Francisco, CA',
    fatherId: 'user-1',
    motherId: 'spouse-1',
    childrenIds: [],
    generation: -1,
    side: 'current',
    isAlive: true
  },

  // Paternal side (Father's family)
  {
    id: 'father-1',
    name: 'Robert Smith',
    dateOfBirth: '1965-12-03',
    gender: 'male',
    occupation: 'Retired Engineer',
    location: 'Portland, OR',
    spouseId: 'mother-1',
    childrenIds: ['user-1', 'sibling-1'],
    fatherId: 'paternal-gf-1',
    motherId: 'paternal-gm-1',
    generation: 1,
    side: 'paternal',
    isAlive: true
  },
  {
    id: 'mother-1',
    name: 'Linda Wilson Smith',
    dateOfBirth: '1967-04-18',
    gender: 'female',
    occupation: 'Teacher',
    location: 'Portland, OR',
    spouseId: 'father-1',
    childrenIds: ['user-1', 'sibling-1'],
    fatherId: 'maternal-side-gf-1',
    motherId: 'maternal-side-gm-1',
    generation: 1,
    side: 'paternal',
    isAlive: true
  },

  // Sibling
  {
    id: 'sibling-1',
    name: 'Michael Smith',
    dateOfBirth: '1988-09-12',
    gender: 'male',
    occupation: 'Doctor',
    location: 'Seattle, WA',
    fatherId: 'father-1',
    motherId: 'mother-1',
    childrenIds: ['nephew-1'],
    generation: 0,
    side: 'paternal',
    isAlive: true
  },

  // Nephew
  {
    id: 'nephew-1',
    name: 'James Smith',
    dateOfBirth: '2015-07-20',
    gender: 'male',
    fatherId: 'sibling-1',
    childrenIds: [],
    generation: -1,
    side: 'paternal',
    isAlive: true
  },

  // Paternal Grandparents
  {
    id: 'paternal-gf-1',
    name: 'William Smith',
    dateOfBirth: '1940-01-15',
    dateOfDeath: '2015-06-10',
    gender: 'male',
    occupation: 'Veteran, Factory Worker',
    location: 'Portland, OR',
    spouseId: 'paternal-gm-1',
    childrenIds: ['father-1', 'uncle-1'],
    generation: 2,
    side: 'paternal',
    isAlive: false
  },
  {
    id: 'paternal-gm-1',
    name: 'Dorothy Miller Smith',
    dateOfBirth: '1942-08-30',
    gender: 'female',
    occupation: 'Homemaker',
    location: 'Portland, OR',
    spouseId: 'paternal-gf-1',
    childrenIds: ['father-1', 'uncle-1'],
    generation: 2,
    side: 'paternal',
    isAlive: true
  },

  // Uncle (father's brother)
  {
    id: 'uncle-1',
    name: 'David Smith',
    dateOfBirth: '1963-11-25',
    gender: 'male',
    occupation: 'Business Owner',
    location: 'Denver, CO',
    fatherId: 'paternal-gf-1',
    motherId: 'paternal-gm-1',
    childrenIds: ['cousin-1', 'cousin-2'],
    generation: 1,
    side: 'paternal',
    isAlive: true
  },

  // Cousins
  {
    id: 'cousin-1',
    name: 'Ashley Smith',
    dateOfBirth: '1985-02-14',
    gender: 'female',
    occupation: 'Nurse',
    fatherId: 'uncle-1',
    childrenIds: [],
    generation: 0,
    side: 'paternal',
    isAlive: true
  },
  {
    id: 'cousin-2',
    name: 'Ryan Smith',
    dateOfBirth: '1987-10-05',
    gender: 'male',
    occupation: 'Mechanic',
    fatherId: 'uncle-1',
    childrenIds: [],
    generation: 0,
    side: 'paternal',
    isAlive: true
  },

  // Maternal side (Mother's parents - from spouse side)
  {
    id: 'maternal-gf-1',
    name: 'Richard Johnson',
    dateOfBirth: '1960-03-22',
    gender: 'male',
    occupation: 'Retired Accountant',
    location: 'Chicago, IL',
    spouseId: 'maternal-gm-1',
    childrenIds: ['spouse-1', 'mother-in-law-sibling-1'],
    generation: 1,
    side: 'maternal',
    isAlive: true
  },
  {
    id: 'maternal-gm-1',
    name: 'Patricia Davis Johnson',
    dateOfBirth: '1962-07-08',
    gender: 'female',
    occupation: 'Retired Librarian',
    location: 'Chicago, IL',
    spouseId: 'maternal-gf-1',
    childrenIds: ['spouse-1', 'mother-in-law-sibling-1'],
    generation: 1,
    side: 'maternal',
    isAlive: true
  },

  // Mother's side grandparents (user's maternal grandparents)
  {
    id: 'maternal-side-gf-1',
    name: 'George Wilson',
    dateOfBirth: '1938-05-12',
    dateOfDeath: '2018-12-15',
    gender: 'male',
    occupation: 'Farmer',
    spouseId: 'maternal-side-gm-1',
    childrenIds: ['mother-1'],
    generation: 2,
    side: 'paternal',
    isAlive: false
  },
  {
    id: 'maternal-side-gm-1',
    name: 'Mary Thompson Wilson',
    dateOfBirth: '1940-09-18',
    gender: 'female',
    occupation: 'Seamstress',
    spouseId: 'maternal-side-gf-1',
    childrenIds: ['mother-1'],
    generation: 2,
    side: 'paternal',
    isAlive: true
  },

  // Spouse's sibling
  {
    id: 'mother-in-law-sibling-1',
    name: 'Jennifer Johnson Martinez',
    dateOfBirth: '1990-01-30',
    gender: 'female',
    occupation: 'Marketing Manager',
    fatherId: 'maternal-gf-1',
    motherId: 'maternal-gm-1',
    childrenIds: ['niece-1'],
    generation: 0,
    side: 'maternal',
    isAlive: true
  },

  // Niece (through spouse's side)
  {
    id: 'niece-1',
    name: 'Sofia Martinez',
    dateOfBirth: '2019-05-15',
    gender: 'female',
    motherId: 'mother-in-law-sibling-1',
    childrenIds: [],
    generation: -1,
    side: 'maternal',
    isAlive: true
  }
];

// Transform flat data into tree structure
export const transformToTreeData = (members: FamilyMember[]): FamilyTreeData => {
  const memberMap = new Map(members.map(m => [m.id, m]));
  
  // Find the root (current user)
  const currentUser = members.find(m => m.id === 'user-1')!;
  
  const buildNode = (member: FamilyMember): FamilyTreeData => {
    const children = member.childrenIds
      .map(id => memberMap.get(id))
      .filter(Boolean)
      .map(child => buildNode(child!));

    return {
      name: member.name,
      id: member.id,
      gender: member.gender,
      generation: member.generation,
      side: member.side,
      photo: member.photo,
      dateOfBirth: member.dateOfBirth,
      dateOfDeath: member.dateOfDeath,
      isAlive: member.isAlive,
      children: children.length > 0 ? children : undefined
    };
  };

  return buildNode(currentUser);
};

export const mockTreeData = transformToTreeData(mockFamilyMembers);