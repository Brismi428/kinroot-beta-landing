# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Next.js 16 landing page for Kinroot Beta, a family coordination app targeting busy families on Boston's South Shore. The site collects early access applications via a form that submits to an n8n webhook.

## Development Commands

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

## Environment Setup

Required environment variable in `.env.local`:
- `NEXT_PUBLIC_WEBHOOK_URL`: n8n webhook endpoint for form submissions

See `.env.example` for template.

## Architecture

### Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS 4 with custom CSS variables
- **TypeScript**: Strict mode enabled
- **Fonts**: Google Fonts (Poppins for headings, Inter for body)

### Key Patterns

**Design System (globals.css)**
- Custom color palette defined via CSS variables in `:root`
- Colors mapped to Tailwind via `@theme inline`
- Kinroot brand: Deep Forest Green (#1D3C34), Soft Moss Green (#7EA18D), Terracotta (#C27556), Warm Cream (#F8F3EB)
- Consistent border radius via `--radius: 0.625rem`

**Component Architecture**
- Most components are Server Components (default)
- Client components (`'use client'`) only where needed:
  - `ApplicationForm.tsx`: Form handling and API calls
  - `success/page.tsx`: Interactive share buttons and clipboard API
- Inline styles used for `borderRadius: 'var(--radius)'` where CSS variables needed in style prop

**Form Submission Flow**
1. User fills `ApplicationForm` component
2. Form data POSTed to `NEXT_PUBLIC_WEBHOOK_URL` as JSON
3. Multi-select fields (`biggest_pain`, `current_tools`) collected via `formData.getAll()`
4. On success: Navigate to `/success`
5. Success page displays confirmation and social sharing options

**Path Aliases**
- `@/*` maps to repository root (e.g., `@/components/Header`)

## n8n Workflow Integration

The backend n8n workflow handles beta application processing:

1. **Webhook** - Receives form submissions from landing page
2. **Data Processing** - Flattens array fields (`biggest_pain`, `current_tools`)
3. **AI Scoring** - Calls OpenAI GPT-4o to score applicants (0-100) based on location, planner role, household size, pain points, tool frustration, and response quality
4. **Storage** - Stores in Supabase `beta_applicants` table with AI scoring
5. **Sync** - Mirrors data to Airtable "Kinroot Beta Applicants" base

**Form Fields:**
- Standard: full_name, email, town, zip_code, num_kids, kids_ages, household_role, household_adults
- Multi-select: biggest_pain[], current_tools[]
- Text: why_interested
- Boolean: feedback_willing
- AI-generated: ai_score, ai_reasoning, ai_flags[]

## Important Notes

- All form data is sent to external n8n webhook - no backend in this repo
- Target audience: Families in Weymouth, Hingham, Quincy (South Shore MA)
- Checkbox validation requires at least one selection for pain points and current tools
- Form includes honeypot field for spam prevention
