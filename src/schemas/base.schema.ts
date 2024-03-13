import { z } from "zod";

const baseSchema = z.object({
  id: z.string().min(1)
});

export { baseSchema };
