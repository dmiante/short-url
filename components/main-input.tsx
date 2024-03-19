"use client"

import { useForm } from "react-hook-form"
import { Button } from "./ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"
import { Input } from "./ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

const formSchema = z.object({
  link: z.string().url({ message: 'Invalid url' })
})

export default function MainInput() {
      // 1. Define your form.
      const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          link: "",
        },
      })
     
      // 2. Define a submit handler.
      function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
      }
  return (
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)}
    className="space-y-5 w-full">
      <FormField
        control={form.control}
        name="link"
        render={({ field }) => (
          <FormItem className="w-full">
            <FormControl>
              <Input placeholder="Paste URL here" {...field}/>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <Button type="submit" className="w-full text-lg font-bold">Shorten</Button>
    </form>
  </Form>
  )
}
