"use client";

import { useRouter } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";

import { ApiRoutes, AppRoutes } from "~/utils/routes";

import { Button } from "@/components/isolated/Button";
import { FormField } from "@/components/isolated/FormField";
import { appApi } from "@/lib/app-api";
import { CustomError } from "@/lib/custom-error";
import {
  linkSheetFormSchema,
  type LinkSheetType,
} from "@/lib/schema/link-sheet";

const LinkSheetInput = () => {
  // hooks
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LinkSheetType>({
    resolver: zodResolver(linkSheetFormSchema),
  });

  // functions
  const onSubmit: SubmitHandler<LinkSheetType> = (data) => {
    appApi
      .post(ApiRoutes.LINK_SHEET, data)
      .then(() => {
        router.replace(AppRoutes.EXPERIENCES);
      })
      .catch((error) => {
        const message = new CustomError(error).message;
        toast.error(message);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <FormField
          label="sheet link"
          htmlFor="link"
          error={errors?.link?.message}
        >
          <FormField.Input
            autoFocus
            placeholder="e.g. google"
            {...register("link")}
          />
        </FormField>
        <Button type="submit" size="lg" color="primary" className="mt-4">
          link
        </Button>
      </form>
    </div>
  );
};

export { LinkSheetInput };
