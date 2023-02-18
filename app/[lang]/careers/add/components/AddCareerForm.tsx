"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import { SubmitHandler, useForm } from "react-hook-form";

import { Button, Input, Textarea } from "@/components/isolated/wrapped";

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
          <div className="form-control">
            <label
              className="label"
              htmlFor="company.name"
              aria-label="company name"
            >
              <span className="label-text-alt">company name</span>
            </label>
            <Input
              id="company.name"
              color={errors?.company?.name ? "error" : "primary"}
              aria-invalid={errors?.company?.name ? "true" : "false"}
              placeholder="e.g. google"
              {...register("company.name")}
            />
            <label className="label" htmlFor="company.name">
              <span className="label-text-alt / text-error">
                {errors?.company?.name?.message}
              </span>
            </label>
          </div>

          <div className="form-control">
            <label className="label" htmlFor="company.description">
              <span className="label-text-alt">company description</span>
            </label>
            <Textarea
              color="primary"
              id="company.description"
              placeholder="e.g. google is a multinational technology company that specializes in internet-related services and products"
              {...register("company.description")}
            />
          </div>
        </div>
        <div>
          <h4>role details</h4>
          <div className="form-control">
            <label className="label" htmlFor="role.name">
              <span className="label-text-alt">designation</span>
            </label>
            <Input
              color="primary"
              id="role.name"
              {...register("role.name")}
              placeholder="e.g. SDE-1 (UI)"
            />
          </div>

          <div className="form-control">
            <label className="label" htmlFor="role.description">
              <span className="label-text-alt">role responsibilities</span>
            </label>
            <Textarea
              color="primary"
              id="role.description"
              placeholder="e.g. responsible for developing and maintaining user interfaces for web and mobile applications.  ensuring that user interfaces are accessible, responsive, and performant across different devices and platforms."
              {...register("role.description")}
            />
          </div>
        </div>
        <div>
          <h4>job details</h4>
          <div className="form-control">
            <label className="label" htmlFor="job.description">
              <span className="label-text-alt">job achievements</span>
            </label>
            <Textarea
              color="primary"
              id="job.description"
              placeholder={`e.g.\n 1. Successfully delivering high-quality user interfaces that meet design requirements and user needs.\n2. Developing and implementing new UI features that improve the user experience and increase user engagement with the application.\n3. Contributing to the development of a design system or UI framework that standardizes UI components and improves development efficiency.`}
              {...register("job.description")}
            />
          </div>
        </div>
        <Button type="submit" size="lg" color="primary" className="mt-4">
          save
        </Button>
      </div>
    </form>
  );
};

export { AddCareerForm };
