import React, { useState, useCallback } from 'react';
import Tree from 'react-d3-tree';
import { FamilyTreeData } from '@/types/family';
import { FamilyTreeNode } from './FamilyTreeNode';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ZoomIn, ZoomOut, RotateCcw, Maximize2 } from 'lucide-react';

interface FamilyTreeProps {
  treeData: FamilyTreeData;
  onNodeClick?: (nodeData: FamilyTreeData) => void;
}

export const FamilyTree: React.FC<FamilyTreeProps> = ({ 
  treeData, 
  onNodeClick 
}) => {
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(0.8);
  const [treeRef, setTreeRef] = useState<HTMLDivElement | null>(null);

  // Custom node rendering
  const renderCustomNode = useCallback((rd3tProps: any) => {
    return (
      <FamilyTreeNode 
        nodeDatum={rd3tProps.nodeDatum} 
        onNodeClick={onNodeClick}
      />
    );
  }, [onNodeClick]);

  // Center the tree when component mounts
  React.useEffect(() => {
    if (treeRef) {
      const dimensions = treeRef.getBoundingClientRect();
      setTranslate({
        x: dimensions.width / 2,
        y: dimensions.height / 4
      });
    }
  }, [treeRef]);

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 0.1, 2));
  };

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 0.1, 0.3));
  };

  const handleReset = () => {
    setZoom(0.8);
    if (treeRef) {
      const dimensions = treeRef.getBoundingClientRect();
      setTranslate({
        x: dimensions.width / 2,
        y: dimensions.height / 4
      });
    }
  };


  return (
    <Card className="w-full h-full border-0 shadow-none">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl font-bold bg-gradient-family bg-clip-text text-transparent">
            Family Tree
          </CardTitle>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleZoomOut}
              className="h-8 w-8 p-0"
            >
              <ZoomOut className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleZoomIn}
              className="h-8 w-8 p-0"
            >
              <ZoomIn className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleReset}
              className="h-8 w-8 p-0"
            >
              <RotateCcw className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div 
          ref={setTreeRef}
          className="w-full h-[600px] bg-gradient-warm rounded-lg border overflow-hidden"
          style={{ minHeight: '600px' }}
        >
          <Tree
            data={treeData}
            translate={translate}
            zoom={zoom}
            orientation="vertical"
            pathFunc="step"
            renderCustomNodeElement={renderCustomNode}
            separation={{ siblings: 2, nonSiblings: 2.5 }}
            nodeSize={{ x: 220, y: 180 }}
            zoomable={true}
            draggable={true}
            collapsible={false}
          />
        </div>
      </CardContent>
    </Card>
  );
};