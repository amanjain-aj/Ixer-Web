import React from 'react';

export interface CaseStudy {
  id: string;
  industry: string;
  title: string;
  problem: string;
  solution: string;
  outcome: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface NavLink {
  label: string;
  href: string;
}