"use client";

import clsx from "clsx";
import { SubmitHandler, useForm } from "react-hook-form";

import { Button, Input, Textarea } from "@/components/isolated/wrapped";

import { AddCareerFormType } from "./addCareerForm.utils";

const AddCareerForm = () => {
  const { register, handleSubmit, formState } = useForm<AddCareerFormType>();
  const onSubmit: SubmitHandler<AddCareerFormType> = (data) => {
    console.log(data);
  };

  return (
    <form
      className={clsx(
        "card / overflow-hidden",
        "prose prose-h1:m-0 prose-h4:mb-0 prose-h4:underline prose-h4:font-light",
      )}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="card-body [&_.form-control]:mt-2 / bg-base-100">
        <h1>add career</h1>
        <div>
          <h4>company details</h4>
          <div className="form-control">
            <label className="label" htmlFor="company.name">
              <span className="label-text-alt">name</span>
            </label>
            <Input id="company.name" color="primary" />
          </div>

          <div className="form-control">
            <label className="label" htmlFor="company.description">
              <span className="label-text-alt">description</span>
            </label>
            <Textarea
              rows={1}
              color="primary"
              id="company.description"
              {...register("company.description")}
            />
          </div>
        </div>
        <div>
          <h4>role details</h4>
          <div className="form-control">
            <label className="label" htmlFor="role.name">
              <span className="label-text-alt">name</span>
            </label>
            <Input
              color="primary"
              id="role.name"
              {...register("role.description")}
            />
          </div>

          <div className="form-control">
            <label className="label" htmlFor="role.description">
              <span className="label-text-alt">description</span>
            </label>
            <Textarea
              rows={1}
              color="primary"
              id="role.description"
              {...register("role.description")}
            />
          </div>
        </div>
        <div>
          <h4>job details</h4>
          <div className="form-control">
            <label className="label" htmlFor="job.description">
              <span className="label-text-alt">description</span>
            </label>
            <Textarea
              rows={1}
              color="primary"
              id="job.description"
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
