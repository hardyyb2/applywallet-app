"use client";

import { useParams, useRouter } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

import { Typography } from "@/components/ui/isolated/common";
import { Button, FormControl } from "@/components/ui/isolated/wrapped";
import { useBoolean } from "@/hooks/useBoolean";
import { ApiRoutes, AppRoutes, UrlParams } from "@/utils/routes.utils";
import { careerInputSchema, CareerInputType } from "@/utils/schema-utils";

type AddEditCareerFormProps =
  | {
      type?: "add";
      career?: never;
    }
  | {
      type?: "edit";
      career?: CareerInputType;
    };

const AddEditCareerForm = ({
  type = "add",
  career,
}: AddEditCareerFormProps) => {
  // hooks
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CareerInputType>({
    resolver: zodResolver(careerInputSchema),
    defaultValues: career ?? {},
  });
  const router = useRouter();
  const params = useParams();

  // states
  const [loading, { setValue: setLoading }] = useBoolean();

  // functions
  const onSubmit: SubmitHandler<CareerInputType> = (data) => {
    setLoading(true);

    if (type === "edit") {
      const careerId = params[UrlParams.CAREER_ID];
      const cId = typeof careerId === "string" ? careerId : careerId[0];

      if (!cId) {
        toast.error("no career id present to update");
        setLoading(false);
        return;
      }

      return axios
        .put(ApiRoutes.EDIT_CAREER(cId), data)
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
  const [buttonText, buttonSavingText, titleText] =
    type === "edit"
      ? ["update", "updating", "edit career"]
      : ["save", "saving", "add career"];

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
          {loading ? buttonSavingText : buttonText}
        </Button>
      </div>
    </form>
  );
};

export { AddEditCareerForm };
