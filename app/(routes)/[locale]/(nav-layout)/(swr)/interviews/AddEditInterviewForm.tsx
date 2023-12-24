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
} from "~/components/isolated/Accordion";
import { Button } from "~/components/isolated/Button";
import { Card } from "~/components/isolated/Card";
import { Flex } from "~/components/isolated/Flex";
import { FormField } from "~/components/isolated/FormField";
import { Icons } from "~/components/isolated/Icons";
import { AppRoutes } from "~/utils/routes";

import { RTBaseEditor } from "@/components/rich-text/editors/RTBaseEditor";
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
import { cnM } from "@/utils/styles";

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
  const router = useRouter();
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
  const roundErrorIndexes = errors.rounds?.reduce?.(
    (map, currentError, index) => {
      if (typeof currentError === "object") {
        map.set(index, true);
      }
      return map;
    },
    new Map() as Map<number, boolean>,
  );

  return (
    <Card className="m-auto overflow-hidden">
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Card.Body className="[&_.dui-form-control]:mt-2">
          <h1 className="headline-s lg:headline-m">{titleText}</h1>
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
                placeholder="frontend engineer"
                {...register("position")}
              />
            </FormField>

            <FormField
              label="interview start date"
              htmlFor="start_date"
              error={errors.start_date?.message}
              className="mb-4"
            >
              <FormField.DatePickerInput name="start_date" control={control} />
            </FormField>
          </div>

          <Accordion type="multiple" className="mt-4 p-0" variant="box">
            {rounds.map((round, index) => {
              return (
                <AccordionItem
                  key={round.id}
                  value={String(index)}
                  className={cnM(
                    roundErrorIndexes?.has(index) && "border border-error",
                  )}
                >
                  <div className="grid w-full grid-cols-[1fr_auto] items-center gap-3xs pr-2xs-xs">
                    <AccordionTrigger className="flex-1">
                      {round.name || `round ${index + 1}`}
                      <Icons.ChevronDown className="w-4 lg:w-6" />
                    </AccordionTrigger>

                    <Icons.Trash2
                      role="button"
                      tabIndex={1}
                      aria-label="delete round"
                      className="w-4 text-error lg:w-6"
                      onClick={() => removeRound(index)}
                    />
                  </div>

                  <AccordionContent>
                    <FormField
                      label="round name"
                      htmlFor={`rounds.${index}.name`}
                      error={errors.rounds?.[index]?.name?.message}
                    >
                      <FormField.Input
                        placeholder="round 1"
                        {...register(`rounds.${index}.name`)}
                      />
                    </FormField>
                    <FormField
                      label="round type"
                      htmlFor={`rounds.${index}.type`}
                    >
                      <FormField.Input
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
                        placeholder="selected"
                        {...register(`rounds.${index}.result`)}
                      />
                    </FormField>

                    <FormField
                      label="round notes"
                      htmlFor={`rounds.${index}.notes`}
                      error={errors.rounds?.[index]?.notes?.message}
                    >
                      <FormField.RTBaseEditor
                        name={`rounds.${index}.notes`}
                        control={control}
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
              className="mt-xs flex-1"
              responsive
              startIcon={<Icons.Plus />}
              onClick={handleAddRoundClick}
            >
              add round
            </Button>

            <Button
              type="submit"
              color="primary"
              className="mt-3xs flex-1 md:mt-xs"
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
