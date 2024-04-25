"use client";

import Link from "next/link";
import { Form, FormControl, FormField, FormItem, FormMessage } from "../ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "../ui/input";
import { toast } from "../ui/use-toast";

const footerLinks = [
  {
    href: "/",
    label: "About Us",
  },
  {
    href: "/",
    label: "FAQs",
  },
  {
    href: "/",
    label: "Contact Us",
  },
  {
    href: "/",
    label: "Privacy Policy",
  },
  {
    href: "/",
    label: "Social Media",
  },
  {
    href: "/",
    label: "Terms of Service",
  },
];
const formSchema = z.object({
  email: z.string().email(),
});

export default function Footer() {
  return (
    <footer className="max-w-[1536px] lg:h-[350px] mx-auto flex flex-col lg:flex-row justify-around gap-x-4 gap-y-10 lg:gap-y-0 bg-stone-100 pt-10 lg:pt-0 pb-12 px-10">
      <div className="flex flex-col lg:mt-auto">
        <h2 className="H1 text-balance">Don't Miss a Thing</h2>
        <span className="P1 text-body/70">
          Subscribe to our newsletter for exclusive deals and updates.
        </span>
        <NewsLetterForm />
      </div>
      <section className="grid grid-cols-2 gap-4 lg:mt-auto">
        {footerLinks.map((l) => (
          <Link
            key={l.label}
            href={l.href}
            className="H2 w-fit hover:text-body/70 hover:underline transition"
          >
            {l.label}
          </Link>
        ))}
        <small className="P2 col-span-2 mt-4">
          Copyright © 2024 Drivoxt. All rights reserved.
        </small>
      </section>
    </footer>
  );
}

function NewsLetterForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });
  
  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Subscribed to Newsletter!"
    })
    console.log(values)
    form.reset()
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Enter email address for newsletter ..."
                  className="px-4 py-2 mt-8 rounded-full md:w-[350px] border border-body bg-transparent placeholder:text-body/70"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
