export const getInitials = (name: string = ""): string => {
  const [firstName = "", lastName = ""] = name.split(" ");

  const initials =
    firstName.slice(0, 1) + (lastName ? lastName.slice(0, 1) : "") || "user";

  return initials.toUpperCase();
};
