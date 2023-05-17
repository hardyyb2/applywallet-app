"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { Button, FormControl } from "@/components/ui/isolated/wrapped";

import { linkSheetFormSchema, LinkSheetType } from "./linkSheetInput.utils";

const LinkSheetInput = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LinkSheetType>({
    resolver: zodResolver(linkSheetFormSchema),
  });

  const onSubmit: SubmitHandler<LinkSheetType> = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <FormControl
          label="sheet link"
          htmlFor="link"
          error={errors?.link?.message}
        >
          <FormControl.Input
            autoFocus
            placeholder="e.g. google"
            {...register("link")}
          />
        </FormControl>
        <Button type="submit" size="lg" color="primary" className="mt-4">
          link
        </Button>
      </form>
    </div>
  );
};

export { LinkSheetInput };
