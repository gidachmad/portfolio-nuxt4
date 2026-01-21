import { z } from "zod";

export const contactFormSchema = z.object({
  email: z.string().email("Invalid email"),
  subject: z.string(),
  message: z.string().min(10, "Message is too short"),
});

// Auto-generate TypeScript type
export type ContactForm = z.infer<typeof contactFormSchema>;
