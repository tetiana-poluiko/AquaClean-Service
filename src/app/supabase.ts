// Объявляем глобальный объект window для работы со скриптом из index.html
declare global {
    interface Window {
      supabase: any;    
    }
}

const supabaseUrl = 'https://ujsjqejvvxxqwusdzvnw.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVqc2pxZWp2dnh4cXd1c2R6dm53Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc4NzE2MDgsImV4cCI6MjEwMzQ0NzYwOH0.w7eq3JhYXuhviMgrbBNDBqQPfZEtPqY6x0dUfKoWz1E';

// Экспортируем готовый клиент для использования во всем проекте
export const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);