import React, { useState } from 'react';
import { FamilyMember } from '@/types/family';
import { mockFamilyMembers, mockTreeData } from '@/data/mockFamily';
import { Navigation } from '@/components/Navigation';
import FamilyTree from "@/components/FamilyTree";
import { MembersList } from '@/components/MembersList';
import { AddMemberForm } from '@/components/AddMemberForm';

const Index = () => {
  const [activeTab, setActiveTab] = useState('tree');
  const [members, setMembers] = useState<FamilyMember[]>(mockFamilyMembers);

  const handleAddMember = (newMember: Omit<FamilyMember, 'id'>) => {
    const id = `member-${Date.now()}`;
    setMembers(prev => [...prev, { ...newMember, id }]);
  };

  const handleEditMember = (member: FamilyMember) => {
    // TODO: Implement edit functionality
    console.log('Edit member:', member);
  };

  const handleDeleteMember = (memberId: string) => {
    setMembers(prev => prev.filter(m => m.id !== memberId));
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'tree':
        return <FamilyTree treeData={mockTreeData} />;
      case 'members':
        return (
          <MembersList
            members={members}
            onEdit={handleEditMember}
            onDelete={handleDeleteMember}
            onAddMember={() => setActiveTab('add')}
          />
        );
      case 'add':
        return (
          <AddMemberForm
            members={members}
            onAddMember={handleAddMember}
            onCancel={() => setActiveTab('members')}
          />
        );
      default:
        return <FamilyTree treeData={mockTreeData} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation
        activeTab={activeTab}
        onTabChange={setActiveTab}
        memberCount={members.length}
      />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderContent()}
      </main>
    </div>
  );
};

export default Index;
