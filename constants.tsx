import React from 'react';
import { CaseStudy } from './types';

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'logistics',
    industry: 'Logistics',
    title: 'The Scale Challenge',
    problem: 'Processing 10,000+ invoices/month across 15 countries and 8 languages took 40 hours/week of manual work.',
    solution: 'Multilingual OCR with automated tax compliance checks.',
    outcome: '75%-time reduction (down to 2-4 hours/week) and annual savings of $150K-$200K.'
  },
  {
    id: 'healthcare',
    industry: 'Healthcare',
    title: 'The Accuracy Challenge',
    problem: 'A 6-week processing cycle for medical bills with an 8% claims denial rate.',
    solution: 'Layout-agnostic processing with CPT code validation.',
    outcome: 'Denial rates dropped to 1-2%, and processing speed improved to just 3-5 days.'
  },
  {
    id: 'aviation',
    industry: 'Aviation',
    title: 'The Safety Challenge',
    problem: '500,000+ technical documents made critical procedures hard to find, posing safety risks.',
    solution: 'Complete technical library ingestion with role-based answers for pilots and mechanics.',
    outcome: 'Retrieval time slashed from 5+ minutes to <10 seconds, ensuring 100% audit readiness.'
  },
  {
    id: 'manufacturing',
    industry: 'Manufacturing',
    title: 'The Fraud Challenge',
    problem: 'Faced a manual 3-way matching bottleneck and a $50K annual loss to duplicate fraud.',
    solution: 'AI-powered duplicate detection and automated 3-way matching.',
    outcome: 'Processing time reduced from 3 weeks to 2-3 days. Saved $40K-$60K with 95%+ fraud detection.'
  },
  {
    id: 'finance',
    industry: 'Finance',
    title: 'The Compliance Challenge',
    problem: 'Auditors spent 20+ hours/week retrieving data from 100,000+ regulatory documents.',
    solution: 'Intelligent cross-referencing with automatic regulation updates.',
    outcome: '80% time reduction and automated compliance alignment.'
  },
  {
    id: 'hr',
    industry: 'Recruitment & HR',
    title: 'The Onboarding Challenge',
    problem: 'New hire learning curves were long (up to 6-8 weeks) and employees wasted 5+ hours/week searching for internal policies.',
    solution: 'Unified knowledge base ingestion and natural language search interface.',
    outcome: 'Achieved 30-40% faster onboarding and reduced knowledge search time to 15-30 minutes/week.'
  }
];

export const CLIENT_LOGOS = [
  "Logistics Corp",
  "HealthNetwork",
  "Global Telecom",
  "FinTech Solutions",
  "AeroTech"
];
