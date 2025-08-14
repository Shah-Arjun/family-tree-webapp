import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { TreePine, ArrowLeft, Mail, Lock, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For demo purposes, navigate directly to the family tree
    navigate('/family-tree');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-accent/10 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
      
      <div className="relative w-full max-w-md">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="mb-6 text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>

        <Card className="w-full bg-gradient-to-br from-card to-secondary/20 border-0 shadow-2xl">
          <CardHeader className="text-center space-y-4">
            <div className="flex items-center justify-center">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                <TreePine className="w-6 h-6 text-white" />
              </div>
            </div>
            <div>
              <CardTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {isLogin ? 'Welcome Back' : 'Create Account'}
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                {isLogin 
                  ? 'Sign in to continue building your family tree'
                  : 'Start your family tree journey today'
                }
              </CardDescription>
            </div>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium">Full Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required={!isLogin}
                      className="pl-10 bg-background/50 border-primary/20 focus:border-primary"
                    />
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="pl-10 bg-background/50 border-primary/20 focus:border-primary"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    className="pl-10 bg-background/50 border-primary/20 focus:border-primary"
                  />
                </div>
              </div>

              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-sm font-medium">Confirm Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      placeholder="Confirm your password"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      required={!isLogin}
                      className="pl-10 bg-background/50 border-primary/20 focus:border-primary"
                    />
                  </div>
                </div>
              )}

              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-semibold py-6 mt-6"
              >
                {isLogin ? 'Sign In' : 'Create Account'}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                {isLogin ? "Don't have an account?" : "Already have an account?"}
                <Button
                  variant="link"
                  onClick={() => setIsLogin(!isLogin)}
                  className="ml-1 text-primary hover:text-accent font-semibold"
                >
                  {isLogin ? 'Sign up' : 'Sign in'}
                </Button>
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="mt-6 text-center">
          <p className="text-xs text-muted-foreground">
            By continuing, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;