"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";

import { Button, FormControl } from "@/components/ui/isolated/wrapped";
import { ApiRoutes } from "@/utils/routes.utils";
import { linkSheetFormSchema, LinkSheetType } from "@/utils/schema-utils";

const LinkSheetInput = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LinkSheetType>({
    resolver: zodResolver(linkSheetFormSchema),
  });

  const onSubmit: SubmitHandler<LinkSheetType> = (data) => {
    axios
      .post(`/api${ApiRoutes.LINK_USER}`, {
        link: data.link,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        if (axios.isAxiosError(error)) {
          console.log(error);
        }
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
