import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, TreePine, Heart, Shield, Search, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <TreePine className="w-8 h-8" />,
      title: "Interactive Family Tree",
      description: "Visualize your family connections with our beautiful, interactive tree diagram."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Member Management",
      description: "Add, edit, and organize family members with detailed profiles and relationships."
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Smart Search",
      description: "Quickly find family members by name, birth year, or relationship status."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Relationship Tracking",
      description: "Track complex family relationships including spouses, children, and extended family."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure & Private",
      description: "Your family data is protected with enterprise-grade security and privacy controls."
    },
    {
      icon: <Plus className="w-8 h-8" />,
      title: "Easy to Use",
      description: "Intuitive interface makes it simple to build and maintain your family tree."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-accent/5 to-background">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-6">
              Discover Your Family Story
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Build, explore, and share your family tree with our intuitive platform. 
              Connect generations and preserve your family legacy for future generations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => navigate('/auth')}
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-8 py-6 text-lg"
              >
                Get Started
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => navigate('/demo')}
                className="px-8 py-6 text-lg border-primary text-primary hover:bg-primary hover:text-white"
              >
                View Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-background to-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Everything You Need to Build Your Family Tree
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Powerful features designed to make family tree creation simple, beautiful, and meaningful.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-0 bg-gradient-to-br from-card to-secondary/20">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl text-foreground">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-muted-foreground text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Start Building Your Family Legacy Today
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of families who have already discovered their roots and connected their stories.
          </p>
          <Button 
            size="lg"
            onClick={() => navigate('/auth')}
            className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-lg font-semibold"
          >
            Create Your Family Tree
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <TreePine className="w-8 h-8 text-primary mr-2" />
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              FamilyTree
            </span>
          </div>
          <p className="text-muted-foreground">
            Building connections, preserving stories, celebrating families.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;