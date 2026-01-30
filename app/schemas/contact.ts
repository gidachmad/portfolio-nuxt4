import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "is this really your name?"),
  email: z.string().email("Invalid email"),
  subject: z.string().min(3, "is this really a subject?"),
  message: z.string().min(10, "Message is too short"),
});

// Auto-generate TypeScript type
export type ContactForm = z.infer<typeof contactFormSchema>;
