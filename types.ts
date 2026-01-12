import React from 'react';

export interface Step {
  id: string;
  title: string;
  description: string;
  codeSnippet?: string;
  warning?: string;
}

export interface Solution {
  id: string;
  title: string;
  icon: React.ReactNode;
  summary: string;
  steps: Step[];
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}