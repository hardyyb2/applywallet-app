"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";

import { Button, FormControl } from "app/components/ui/isolated/wrapped";

import { Typography } from "@/components/ui/isolated/common";
import { careerSchema, CareerType } from "@/utils/schema-utils";

const AddCareerForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CareerType>({
    resolver: zodResolver(careerSchema),
  });
  const onSubmit: SubmitHandler<CareerType> = (data) => {
    console.log(data);
  };

  return (
    <form
      className="card m-auto max-w-[65ch] overflow-hidden"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <div className="card-body  bg-base-100 [&_.form-control]:mt-2">
        <Typography variant="h2">add career</Typography>
        <div className="mt-8">
          <Typography variant="subtitle1" className="underline">
            company details
          </Typography>
          <FormControl
            label="company name"
            htmlFor="company.name"
            error={errors?.company?.name?.message}
          >
            <FormControl.Input
              autoFocus
              placeholder="e.g. google"
              {...register("company.name")}
            />
          </FormControl>

          <FormControl
            label="company description"
            htmlFor="company.description"
            error={errors?.company?.description?.message}
          >
            <FormControl.Textarea
              placeholder="e.g. google is a multinational technology company that specializes in internet-related services and products"
              {...register("company.description")}
            />
          </FormControl>
        </div>
        <div className="mt-8">
          <Typography variant="subtitle1" className="underline">
            role details
          </Typography>
          <FormControl
            label="designation"
            htmlFor="role.name"
            error={errors?.role?.name?.message}
          >
            <FormControl.Input
              placeholder="e.g. sde-1 (ui)"
              {...register("role.name")}
            />
          </FormControl>

          <FormControl
            label="role responsibilities"
            error={errors?.role?.description?.message}
            htmlFor="role.description"
          >
            <FormControl.Textarea
              placeholder="e.g. responsible for developing and maintaining user interfaces for web and mobile applications."
              {...register("role.description")}
            />
          </FormControl>
        </div>
        <div className="mt-8">
          <Typography variant="subtitle1" className="underline">
            job details
          </Typography>
          <FormControl
            htmlFor="job.description"
            label="job achievements"
            error={errors?.job?.description?.message}
          >
            <FormControl.Textarea
              placeholder="e.g. successfully delivering high-quality user interfaces that meet design requirements and user needs."
              {...register("job.description")}
            />
          </FormControl>
        </div>
        <Button type="submit" size="lg" color="primary" className="mt-4">
          save
        </Button>
      </div>
    </form>
  );
};

export { AddCareerForm };
