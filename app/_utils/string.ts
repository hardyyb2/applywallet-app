export const getInitials = (name: string = ""): string => {
  const [firstName = "", lastName = ""] = name.split(" ");

  const initials =
    firstName.slice(0, 1) + (lastName ? lastName.slice(0, 1) : "") || "user";

  return initials.toUpperCase();
};

export const toBase64 = (str: string) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);
