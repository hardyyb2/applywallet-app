"use client";

import { useRouter } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
import { useQueryClient } from "@tanstack/react-query";
import { useForm, type SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";

import { Button } from "@/components/isolated/Button";
import { FormField } from "@/components/isolated/FormField";
import { Typography } from "@/components/isolated/Typography";
import {
  interviewInputSchema,
  type InterviewInputType,
  type InterviewType,
} from "@/lib/schema/interviews";
import {
  useAddInterview,
  useUpdateInterview,
} from "@/queries/interviews.queries";
import { QueryKeys } from "@/utils/queries";
import { AppRoutes } from "@/utils/routes";

import { getAddEditInterviewFormCopy } from "./interview.utils";

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
  const queryClient = useQueryClient();
  const addMutation = useAddInterview();
  const updateMutation = useUpdateInterview();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InterviewInputType>({
    resolver: zodResolver(interviewInputSchema),
    defaultValues: defaultFormValues,
  });
  const router = useRouter();

  // functions
  const onSubmit: SubmitHandler<InterviewInputType> = (data) => {
    if (isEdit) {
      const updatedInterview: InterviewType = Object.assign(data, {
        id: props.interview.id,
      });

      return updateMutation.mutate(updatedInterview, {
        onSuccess: () => {
          queryClient.setQueryData<InterviewType[]>(
            [QueryKeys.INTERVIEWS],
            (oldData) => {
              if (oldData) {
                return oldData.map((interview) => {
                  if (interview.id === props.interview.id) {
                    return updatedInterview;
                  }

                  return interview;
                });
              }
            },
          );

          toast.success("interview updated");
          router.replace(AppRoutes.INTERVIEWS);
        },
        onError: () => {
          // TODO - show valid error
          toast.error("failed to update interview, please try again");
        },
      });
    }

    return addMutation.mutate(data, {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: [QueryKeys.INTERVIEWS],
        });
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
  const loading = addMutation.isPending || updateMutation.isPending;
  const { buttonText, titleText } = getAddEditInterviewFormCopy(
    props.type,
    loading,
  );

  return (
    // TODO - replace with Card component
    <form
      className="dui-card m-auto overflow-hidden"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <div className="dui-card-body bg-base-100 [&_.dui-form-control]:mt-2">
        <Typography variant="h3">{titleText}</Typography>
        <div className="mt-s">
          {/* <Typography variant="subtitle1" className="underline">
            company details
          </Typography> */}
          <FormField
            label="company name"
            htmlFor="company_name"
            error={errors.company_name?.message}
          >
            <FormField.Input
              autoFocus
              placeholder="apollo.io"
              {...register("company_name")}
            />
          </FormField>

          <FormField
            label="position"
            htmlFor="position"
            error={errors.position?.message}
          >
            <FormField.Input
              autoFocus
              placeholder="frontend engineer"
              {...register("position")}
            />
          </FormField>
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
