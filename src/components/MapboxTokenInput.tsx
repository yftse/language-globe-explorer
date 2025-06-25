
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface MapboxTokenInputProps {
  onTokenSubmit: (token: string) => void;
}

const MapboxTokenInput: React.FC<MapboxTokenInputProps> = ({ onTokenSubmit }) => {
  const [token, setToken] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (token.trim()) {
      onTokenSubmit(token.trim());
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Welcome to LinguaMap</CardTitle>
          <CardDescription className="text-center">
            Enter your Mapbox access token to explore the world's languages
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="text"
                placeholder="pk.eyJ1IjoieW91ci11c2VybmFtZSI..."
                value={token}
                onChange={(e) => setToken(e.target.value)}
                className="w-full"
              />
            </div>
            <Button type="submit" className="w-full" disabled={!token.trim()}>
              Launch Map
            </Button>
          </form>
          
          <Alert className="mt-4">
            <AlertDescription>
              Get your free Mapbox token at{' '}
              <a 
                href="https://mapbox.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                mapbox.com
              </a>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
};

export default MapboxTokenInput;
