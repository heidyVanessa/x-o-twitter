
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jdfpmpribcxvbfpcibov.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpkZnBtcHJpYmN4dmJmcGNpYm92Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg2MTMzMzEsImV4cCI6MjA2NDE4OTMzMX0.hjXkl87l6E7i-L0Fo6AVbqdLMh5k4vgBgJfkvqZr1pg';

export const supabase = createClient(supabaseUrl, supabaseKey);