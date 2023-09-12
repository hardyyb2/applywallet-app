"use client";

import { useRouter } from "next/navigation";

import { useBoolean } from "@/hooks/useBoolean";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

import { Button, FormControl } from "app/components/ui/isolated/wrapped";

import { Typography } from "@/components/ui/isolated/common";
import { ApiRoutes, AppRoutes } from "@/utils/routes.utils";
import { careerSchema, CareerType } from "@/utils/schema-utils";

const AddCareerForm = () => {
  // hooks
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CareerType>({
    resolver: zodResolver(careerSchema),
  });
  const router = useRouter();

  // states
  const [loading, { setValue: setLoading }] = useBoolean();

  // functions
  const onSubmit: SubmitHandler<CareerType> = (data) => {
    setLoading(true);

    axios
      .post(ApiRoutes.ADD_CAREER, data)
      .then(() => {
        toast.success("Save success");
        reset();
        router.refresh();
        router.replace(AppRoutes.CAREERS);
      })
      .catch(() => {
        toast.error("Failed to add career, please try again");
      })
      .finally(() => setLoading(false));
  };

  return (
    <form
      className="card m-auto max-w-[65ch] overflow-hidden"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <div className="card-body  bg-base-100 [&_.form-control]:mt-2">
        <Typography variant="h3">add career</Typography>
        <div className="mt-s">
          <Typography variant="subtitle1" className="underline">
            company details
          </Typography>
          <FormControl
            label="company name"
            htmlFor="company.name"
            error={errors?.company_name?.message}
          >
            <FormControl.Input
              autoFocus
              placeholder="e.g. google"
              {...register("company_name")}
            />
          </FormControl>

          <FormControl
            label="company description"
            htmlFor="company.description"
            error={errors?.company_description?.message}
          >
            <FormControl.Textarea
              placeholder="e.g. google is a multinational technology company that specializes in internet-related services and products"
              {...register("company_description")}
            />
          </FormControl>
        </div>
        <div className="mt-s">
          <Typography variant="subtitle1" className="underline">
            role details
          </Typography>
          <FormControl
            label="designation"
            htmlFor="role.name"
            error={errors?.role_name?.message}
          >
            <FormControl.Input
              placeholder="e.g. sde-1 (ui)"
              {...register("role_name")}
            />
          </FormControl>

          <FormControl
            label="role responsibilities"
            error={errors?.role_description?.message}
            htmlFor="role.description"
          >
            <FormControl.Textarea
              placeholder="e.g. responsible for developing and maintaining user interfaces for web and mobile applications."
              {...register("role_description")}
            />
          </FormControl>
        </div>
        <div className="mt-s">
          <Typography variant="subtitle1" className="underline">
            job details
          </Typography>
          <FormControl
            htmlFor="job.description"
            label="job achievements"
            error={errors?.job_description?.message}
          >
            <FormControl.Textarea
              placeholder="e.g. successfully delivering high-quality user interfaces that meet design requirements and user needs."
              {...register("job_description")}
            />
          </FormControl>
        </div>
        <Button
          type="submit"
          size="lg"
          color="primary"
          className="mt-xs"
          loading={loading}
          disabled={loading}
        >
          {loading ? "Saving" : "Save"}
        </Button>
      </div>
    </form>
  );
};

export { AddCareerForm };
