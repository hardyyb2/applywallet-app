"use client";

import { useRouter } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

import { Typography } from "@/components/ui/isolated/common";
import { Button, FormControl } from "@/components/ui/isolated/wrapped";
import { useBoolean } from "@/hooks/useBoolean";
import { ApiRoutes, AppRoutes } from "@/utils/routes.utils";
import {
  careerInputSchema,
  CareerInputType,
  CareerType,
} from "@/utils/schema-utils";

import { getAddEditCareerFormCopy } from "../career.utils";

export type AddEditCareerFormProps =
  | {
      type?: "add";
    }
  | {
      type?: "edit";
      career: CareerType;
    };

const AddEditCareerForm = (props: AddEditCareerFormProps) => {
  const isEdit = props.type === "edit";
  const defaultFormValues = isEdit ? props.career : {};

  // hooks
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CareerInputType>({
    resolver: zodResolver(careerInputSchema),
    defaultValues: defaultFormValues,
  });
  const router = useRouter();

  // states
  const [loading, { setValue: setLoading }] = useBoolean();

  // functions
  const onSubmit: SubmitHandler<CareerInputType> = (data) => {
    setLoading(true);

    if (isEdit) {
      return axios
        .put(ApiRoutes.editCareer(props.career.id), data)
        .then(() => {
          toast.success("career updated");
          reset();
          // TODO - replace with revalidatePath when it works
          router.refresh();
          router.replace(AppRoutes.CAREERS);
        })
        .catch(() => {
          toast.error("failed to update career, please try again");
        })
        .finally(() => setLoading(false));
    }

    return axios
      .post(ApiRoutes.ADD_CAREER, data)
      .then(() => {
        toast.success("career added");
        reset();
        // TODO - replace with revalidatePath when it works
        router.refresh();
        router.replace(AppRoutes.CAREERS);
      })
      .catch(() => {
        toast.error("failed to add career, please try again");
      })
      .finally(() => setLoading(false));
  };

  // constants
  const { buttonText, titleText } = getAddEditCareerFormCopy(
    props.type,
    loading,
  );

  return (
    <form
      className="card m-auto max-w-[65ch] overflow-hidden"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <div className="card-body  bg-base-100 [&_.form-control]:mt-2">
        <Typography variant="h3">{titleText}</Typography>
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
          {buttonText}
        </Button>
      </div>
    </form>
  );
};

export { AddEditCareerForm };
