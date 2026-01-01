-- Add hardest_time column to beta_applicants table
-- Run this in Supabase SQL Editor: https://supabase.com/dashboard/project/_/sql

ALTER TABLE beta_applicants
ADD COLUMN IF NOT EXISTS hardest_time TEXT;

-- Optional: Add a comment describing the field
COMMENT ON COLUMN beta_applicants.hardest_time IS 'When household coordination feels hardest: Morning rush, Afternoon pickups, Evening/dinner time, Weekends, It''s constant';
