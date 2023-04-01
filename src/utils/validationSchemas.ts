import z from "zod"

export const commentsSchema = z.object({
  body: z.object({
    ip_address: z.string().ip(),
    film_id: z.number().int().positive(),
    text: z.string().trim().max(500)
  }),
});

export type commentsType = z.infer<typeof commentsSchema>["body"]

export const characterSchema = z.object({
  query: z.object({
    sort: z.string().optional().or(z.number().int().optional()),
    order: z.enum(["asc", "desc"]).optional(),
    gender: z.string().optional()
  })
})

export type characterType =  z.infer<typeof characterSchema>