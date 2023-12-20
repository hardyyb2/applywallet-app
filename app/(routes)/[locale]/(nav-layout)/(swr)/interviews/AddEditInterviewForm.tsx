"use client";

import { useRouter } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
import { useQueryClient } from "@tanstack/react-query";
import { useFieldArray, useForm, type SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/isolated/Accordion";
import { Button } from "@/components/isolated/Button";
import { Card } from "@/components/isolated/Card";
import { Flex } from "@/components/isolated/Flex";
import { FormField } from "@/components/isolated/FormField";
import { Icons } from "@/components/isolated/Icons";
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

import {
  getAddEditInterviewFormCopy,
  getDefaultInterviewRoundObject,
} from "./interview.utils";

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
    control,
  } = useForm<InterviewInputType>({
    resolver: zodResolver(interviewInputSchema),
    defaultValues: defaultFormValues,
  });
  const {
    fields: rounds,
    append: appendRound,
    remove: removeRound,
  } = useFieldArray({
    control,
    name: "rounds",
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

  const handleAddRoundClick = () => {
    appendRound(getDefaultInterviewRoundObject());
  };

  // constants
  const loading = addMutation.isPending || updateMutation.isPending;
  const { buttonText, titleText } = getAddEditInterviewFormCopy(
    props.type,
    loading,
  );

  return (
    <Card className="m-auto overflow-hidden">
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Card.Body className="[&_.dui-form-control]:mt-2">
          <Typography variant="h3">{titleText}</Typography>
          <div>
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

            <FormField
              label="interview start date"
              htmlFor="start_date"
              error={errors.start_date?.message}
            >
              <FormField.DatePickerInput name="start_date" control={control} />
            </FormField>
          </div>

          <Accordion type="single" className="p-0" collapsible>
            {rounds.map((round, index) => {
              return (
                <AccordionItem value={String(index)} key={round.id}>
                  <AccordionTrigger>
                    <Typography variant="h5">
                      {round.name || `round ${index + 1}`}
                    </Typography>
                  </AccordionTrigger>

                  <AccordionContent>
                    <FormField
                      label="round name"
                      htmlFor={`rounds.${index}.name`}
                      error={errors.rounds?.[index]?.name?.message}
                    >
                      <FormField.Input
                        autoFocus
                        placeholder="round 1"
                        {...register(`rounds.${index}.name`)}
                      />
                    </FormField>
                    <FormField
                      label="round type"
                      htmlFor={`rounds.${index}.type`}
                    >
                      <FormField.Input
                        autoFocus
                        placeholder="system design"
                        {...register(`rounds.${index}.type`)}
                      />
                    </FormField>
                    <FormField
                      label="round date"
                      htmlFor={`rounds.${index}.date`}
                      error={errors.rounds?.[index]?.date?.message}
                    >
                      <FormField.DatePickerInput
                        name={`rounds.${index}.date`}
                        control={control}
                      />
                    </FormField>
                    <FormField
                      label="round result"
                      htmlFor={`rounds.${index}.result`}
                      error={errors.rounds?.[index]?.result?.message}
                    >
                      <FormField.Input
                        autoFocus
                        placeholder="selected"
                        {...register(`rounds.${index}.result`)}
                      />
                    </FormField>
                    <FormField
                      label="round notes"
                      htmlFor={`rounds.${index}.notes`}
                      error={errors.rounds?.[index]?.notes?.message}
                    >
                      <FormField.Input
                        autoFocus
                        placeholder="selected"
                        {...register(`rounds.${index}.notes`)}
                      />
                    </FormField>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>

          <Flex
            align="stretch"
            direction="column"
            switchDirection="md"
            className="gap-2"
          >
            <Button
              type="button"
              variant="outline"
              className="mt-xs"
              responsive
              startIcon={<Icons.Plus />}
              onClick={handleAddRoundClick}
            >
              add round
            </Button>

            <Button
              type="submit"
              color="primary"
              className="mt-3xs md:mt-xs"
              loading={loading}
              responsive
              disabled={loading}
            >
              {buttonText}
            </Button>
          </Flex>
        </Card.Body>
      </form>
    </Card>
  );
};

export { AddEditInterviewForm };
