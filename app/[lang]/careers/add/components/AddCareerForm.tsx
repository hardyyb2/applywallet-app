"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import { SubmitHandler, useForm } from "react-hook-form";

import { Button, FormControl } from "@/components/isolated/wrapped";

import { AddCareerFormType, addCareerFormSchema } from "./addCareerForm.utils";

const AddCareerForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddCareerFormType>({
    resolver: zodResolver(addCareerFormSchema),
  });
  const onSubmit: SubmitHandler<AddCareerFormType> = (data) => {
    console.log(data);
  };

  return (
    <form
      className={clsx(
        "card / overflow-hidden",
        "prose prose-h1:m-0 prose-h4:mb-0 prose-h4:mt-8 prose-h4:underline prose-h4:font-light",
      )}
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <div className="card-body [&_.form-control]:mt-2 / bg-base-100">
        <h1>add career</h1>
        <div>
          <h4>company details</h4>
          <FormControl
            label="company name"
            htmlFor="company.name"
            error={errors?.company?.name?.message}
          >
            <FormControl.Input
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
        <div>
          <h4>role details</h4>
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
        <div>
          <h4>job details</h4>
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

console.log("[RENDER] careers/add/components/AddCareerForm.tsx");