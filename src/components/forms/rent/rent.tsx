"use client";

import { format, isAfter, isBefore, isToday } from "date-fns";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectValue,
  SelectSeparator,
} from "@/components/ui/select";
import { groups } from "@/lib/cosntants";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "@radix-ui/react-icons";
import { Calendar } from "@/components/ui/calendar";
import { useToast } from "@/components/ui/use-toast";

const RentFormSchema = z
  .object({
    pickup: z.date({
      required_error: "A pickup date is required",
    }),
    dropoff: z.date({
      required_error: "A dropoff date is required",
    }),
    firstName: z.string().min(1, "There must be a first name"),
    lastName: z.string().min(1, "There must be a last name"),
    email: z.string().email(),
    location: z.enum([
      "SANJ",
      "CARO",
      "BAYA",
      "CAGU",
      "MAYA",
      "MIA",
      "MCO",
      "JAX",
      "TAL",
      "TPA",
    ]),
  })
  .refine((data) => isAfter(data.dropoff, data.pickup), {
    message: "Dropoff date must be after pickup date",
    path: ["dropoff"],
  })
  .refine((data) => isBefore(data.pickup, data.dropoff), {
    message: "Pickup date must be before dropoff date",
    path: ["pickup"],
  })
  .refine((data) => isAfter(data.pickup, new Date()) || isToday(data.pickup), {
    message: "Pickup date must be from today or after",
    path: ["pickup"],
  });

type TRentFormSchema = z.infer<typeof RentFormSchema>;

function getFromToday(displacement: number): Date {
  let date = new Date();
  let newDay = new Date(date);
  newDay.setDate(date.getDate() + displacement);
  return newDay;
}

export function RentForm() {
  const { toast }=useToast();
  const form = useForm<TRentFormSchema>({
    resolver: zodResolver(RentFormSchema),
    defaultValues: {
      pickup: getFromToday(1),
      dropoff: getFromToday(2),
      location: "SANJ",
      firstName: "",
      lastName: "",
      email: "",
    },
  });

  async function onSubmit(values: TRentFormSchema) {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    toast({
      title: "Date Booked!",
      description: "Head to checkout for final steps",
    })
    form.reset();
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid md:grid-cols-2 gap-x-4 gap-y-6"
      >
        <FormField
          control={form.control}
          name="pickup"
          render={({ field }) => (
            <FormItem>
              <FormLabel>From</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "flex w-full px-3 text-left text-lg lg:text-base font-normal bg-stone-100",
                        !field.value && "text-body/70"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-70" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) => {
                      return date < new Date();
                    }}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="dropoff"
          render={({ field }) => (
            <FormItem>
              <FormLabel>To</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "flex w-full px-3 text-left text-lg lg:text-base font-normal bg-stone-100",
                        !field.value && "text-body/70"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-70" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) => {
                      return date < getFromToday(1);
                    }}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First name</FormLabel>
              <FormControl>
                <Input
                  placeholder="John"
                  {...field}
                  className="text-lg lg:text-base bg-stone-100 placeholder:text-body/70"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Doe"
                  {...field}
                  className="text-lg lg:text-base bg-stone-100 placeholder:text-body/70"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Locations</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="text-lg lg:text-base bg-stone-100">
                    <SelectValue placeholder="Select a location" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {groups.map((g, index) => (
                    <SelectGroup key={g.group}>
                      <SelectLabel>{g.group}</SelectLabel>
                      {g.locations.map((loc) => (
                        <SelectItem key={loc.value} value={loc.value}>
                          {loc.location}
                        </SelectItem>
                      ))}
                      {index < groups.length - 1 && (
                        <SelectSeparator key={g.group + index} />
                      )}
                    </SelectGroup>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="john.doe@example.com"
                  {...field}
                  className="text-lg lg:text-base bg-stone-100"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="P1 py-6 w-full md:col-span-2 rounded-md mt-6 hover:bg-accent/90 "
          disabled={form.formState.isSubmitting}
        >
          {!form.formState.isSubmitting ? (
            <span className="text-white">Submit</span>
          ) : (
            <LoadingSpinner className="w-8 h-8" />
          )}
        </Button>
      </form>
    </Form>
  );
}

function LoadingSpinner({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        `rounded-full border-4 border-t-white animate-spin ${className}`
      )}
    />
  );
}
