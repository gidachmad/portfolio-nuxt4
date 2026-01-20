import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.string().email("Invalid email"),
  message: z.string().min(10, "Message is too short"),
});

// Auto-generate TypeScript type
export type ContactForm = z.infer<typeof contactFormSchema>;
