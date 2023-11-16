"use client";

import { useRouter } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
import { useQueryClient } from "@tanstack/react-query";
import { useForm, type SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";

import { Button } from "@/components/isolated/Button";
import { FormControl } from "@/components/isolated/FormControl";
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
      return updateMutation.mutate(
        { ...data, id: props.interview.id },
        {
          onSuccess: () => {
            queryClient.invalidateQueries({
              queryKey: [
                QueryKeys.INTERVIEWS,
                QueryKeys.interview(props.interview.id),
              ],
            });
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
