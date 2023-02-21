const redirectedPathName = (
  pathName: string | null,
  locale: string,
): {
  newRedirectPath: string;
  activeLocale: string;
} => {
  if (!pathName) {
    return {
      newRedirectPath: "/",
      activeLocale: "",
    };
  }

  const segments = pathName.split("/");
  const activeLocale = segments[1];
  segments[1] = locale;

  return {
    newRedirectPath: segments.join("/"),
    activeLocale,
  };
};

export { redirectedPathName };
