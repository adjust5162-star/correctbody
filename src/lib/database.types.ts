export type Database = {
  public: {
    Tables: {
      contact_requests: {
        Row: {
          id: string;
          name: string;
          phone: string;
          area: string | null;
          message: string | null;
          method: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          phone: string;
          area?: string | null;
          message?: string | null;
          method?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          phone?: string;
          area?: string | null;
          message?: string | null;
          method?: string | null;
          created_at?: string;
        };
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};
