"use client";

import { useRouter } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

import { Typography } from "@/components/ui/isolated/common";
import { Button, FormControl } from "@/components/ui/isolated/wrapped";
import { useBoolean } from "@/hooks/useBoolean";
import {
  useAddInterview,
  useUpdateInterview,
} from "@/queries/interviews.queries";
import { ApiRoutes, AppRoutes } from "@/utils/routes.utils";
import {
  interviewInputSchema,
  InterviewInputType,
  InterviewType,
} from "@/utils/schema-utils";

import { getAddEditInterviewFormCopy } from "../interview.utils";

export type AddEditInterviewFormProps =
  | {
      type?: "add";
    }
  | {
      type?: "edit";
      interview: InterviewType;
    };

const AddEditInterviewForm = (props: AddEditInterviewFormProps) => {
  const isEdit = props.type === "edit";
  const defaultFormValues = isEdit ? props.interview : {};

  // hooks
  const { trigger: triggerAddInterview } = useAddInterview();
  const { trigger: triggerUpdateInterview } = useUpdateInterview();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InterviewInputType>({
    resolver: zodResolver(interviewInputSchema),
    defaultValues: defaultFormValues,
  });
  const router = useRouter();

  // states
  const [loading, { setValue: setLoading }] = useBoolean();

  // functions
  const onSubmit: SubmitHandler<InterviewInputType> = (data) => {
    setLoading(true);

    if (isEdit) {
      return triggerUpdateInterview(
        { ...data, id: props.interview.id },
        {
          onSuccess: () => {
            toast.success("interview updated");
            router.replace(AppRoutes.INTERVIEWS);
          },
          onError: () => {
            // TODO - show valid error
            toast.error("failed to update interview, please try again");
          },
        },
      );
    }

    return triggerAddInterview(data, {
      onSuccess: () => {
        toast.success("interview added");
        router.replace(AppRoutes.INTERVIEWS);
      },
      onError: () => {
        // TODO - show valid error
        toast.error("failed to update interview, please try again");
      },
    });
  };

  // constants
  const { buttonText, titleText } = getAddEditInterviewFormCopy(
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
          <FormControl label="name" htmlFor="name" error={errors.name?.message}>
            <FormControl.Input
              autoFocus
              placeholder="e.g. google"
              {...register("name")}
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

export { AddEditInterviewForm };
