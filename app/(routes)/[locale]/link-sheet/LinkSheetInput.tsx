"use client";

import { useRouter } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useForm, type SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";

import { Button } from "@/components/isolated/Button";
import { FormControl } from "@/components/isolated/FormControl";
import { CustomError } from "@/utils/error";
import { ApiRoutes, AppRoutes } from "@/utils/routes.utils";
import { linkSheetFormSchema, type LinkSheetType } from "@/utils/schema-utils";

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
    axios
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
        <FormControl
          label="sheet link"
          htmlFor="link"
          error={errors?.link?.message}
        >
          <FormControl.Input
            autoFocus
            placeholder="e.g. google"
            {...register("link")}
          />
        </FormControl>
        <Button type="submit" size="lg" color="primary" className="mt-4">
          link
        </Button>
      </form>
    </div>
  );
};

export { LinkSheetInput };
