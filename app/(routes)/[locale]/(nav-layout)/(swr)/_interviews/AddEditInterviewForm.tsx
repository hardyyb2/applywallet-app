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
} from "~/components/ds/Accordion";
import { Button } from "~/components/ds/Button";
import { Card } from "~/components/ds/Card";
import { Flex } from "~/components/ds/Flex";
import { FormField } from "~/components/ds/FormField";
import { Icons } from "~/components/ds/Icons";
import { Typography } from "~/components/ds/Typography";
import { AppRoutes } from "~/utils/routes";

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
  interviewResultOptions,
  interviewRoundResultOptions,
  interviewStatusOptions,
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
          queryClient.invalidateQueries({
            queryKey: [QueryKeys.INTERVIEWS],
          });
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
    <Card className="m-auto overflow-hidden" compact normal="lg">
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Card.Body className="[&_.d-fieldset]:mt-2xs">
          <Typography variant="headline-s" lg="headline-m">
            {titleText}
          </Typography>
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
          >
            <FormField.DatePickerInput name="start_date" control={control} />
          </FormField>

          <FormField
            label="interview status"
            htmlFor="status"
            error={errors.status?.message}
          >
            <FormField.Select
              name="status"
              control={control}
              options={interviewStatusOptions}
              isClearable
              placeholder="select status"
              formatOptionLabel={(option) => {
                return (
                  <Flex className="gap-3xs" align="center">
                    {option.icon} {option.label}
                  </Flex>
                );
              }}
            />
          </FormField>

          <FormField
            label="notes"
            htmlFor="notes"
            error={errors.notes?.message}
          >
            <FormField.RTBaseEditor name="notes" control={control} />
          </FormField>

          <FormField
            label="interview end date"
            htmlFor="end_date"
            error={errors.end_date?.message}
          >
            <FormField.DatePickerInput name="end_date" control={control} />
          </FormField>
          <FormField
            label="result"
            htmlFor="result"
            error={errors.result?.message}
          >
            <FormField.Select
              name="result"
              control={control}
              options={interviewResultOptions}
              isClearable
              placeholder="select result"
              formatOptionLabel={(option) => {
                return (
                  <Flex className="gap-3xs" align="center">
                    {option.icon} {option.label}
                  </Flex>
                );
              }}
            />
          </FormField>

          <Accordion
            type="multiple"
            className={cnM("mt-xs p-0", !rounds.length && "hidden")}
            variant="box"
          >
            {rounds.map((round, index) => {
              return (
                <AccordionItem
                  key={round.id}
                  value={String(index)}
                  className={cnM(
                    roundErrorIndexes?.has(index) && "border-error border",
                  )}
                >
                  <div className="gap-3xs pr-2xs-xs grid w-full grid-cols-[1fr_auto] items-center">
                    <AccordionTrigger className="flex-1">
                      {round.name || `round ${index + 1}`}
                    </AccordionTrigger>

                    <Icons.Trash2
                      role="button"
                      tabIndex={1}
                      aria-label="delete round"
                      className="text-error w-4 lg:w-6"
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
                      <FormField.Select
                        name={`rounds.${index}.result`}
                        control={control}
                        placeholder="select result"
                        options={interviewRoundResultOptions}
                        isClearable
                        formatOptionLabel={(option) => {
                          return (
                            <Flex className="gap-3xs" align="center">
                              {option.icon} {option.label}
                            </Flex>
                          );
                        }}
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
            className="gap-2 md:flex-row"
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
              className="mt-3xs md:mt-xs flex-1"
              loading={loading}
              responsive
              disabled={loading}
              startIcon={<Icons.Check />}
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
