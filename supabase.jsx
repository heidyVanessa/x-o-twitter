
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://hsmnzlgykndfkaicydop.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhzbW56bGd5a25kZmthaWN5ZG9wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg0NzI0MzEsImV4cCI6MjA2NDA0ODQzMX0.137HYxE6uo4ttmfFiY5auvr9UejqNvao6OMqGU-xyH0';

export const supabase = createClient(supabaseUrl, supabaseKey);