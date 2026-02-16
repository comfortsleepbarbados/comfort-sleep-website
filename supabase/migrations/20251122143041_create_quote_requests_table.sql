/*
  # Create Quote Requests Table

  1. New Tables
    - `quote_requests`
      - `id` (uuid, primary key, auto-generated)
      - `name` (text, required) - Contact person's full name
      - `email` (text, required) - Contact email address
      - `phone` (text, optional) - Contact phone number
      - `property_name` (text, optional) - Name of property/business
      - `property_type` (text, required) - Type of property (hotel, resort, etc.)
      - `room_count` (text, optional) - Number of rooms/units
      - `inquiry_type` (text, required) - Type of inquiry (bulk quote, pilot program, etc.)
      - `message` (text, required) - Detailed message from customer
      - `created_at` (timestamptz, default now()) - Timestamp of submission

  2. Security
    - Enable RLS on `quote_requests` table
    - Add policy for public insert access (allow anonymous quote submissions)
    - Add policy for authenticated read access (for admin/sales team review)

  3. Important Notes
    - This table accepts public submissions for quote requests
    - Email notifications should be configured separately via edge functions or external service
    - Data should be reviewed regularly by sales team
*/

CREATE TABLE IF NOT EXISTS quote_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  property_name text,
  property_type text NOT NULL,
  room_count text,
  inquiry_type text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE quote_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public insert for quote requests"
  ON quote_requests
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to read quote requests"
  ON quote_requests
  FOR SELECT
  TO authenticated
  USING (true);
