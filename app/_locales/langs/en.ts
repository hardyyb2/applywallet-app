const engLocales = {
  common: {
    or: "or",
    sign_in: "sign in",
  },

  routes: {
    blogs: "blogs",
  },

  nav: {
    general: "general",
    home: "home",
    blogs: "blogs",
    about: "about",
    read: "read",
    others: "others",
    open_nav: "open nav",
    close_nav: "close nav",
  },

  blogs: {
    title: "blogs",
    subtitle: "explore ideas and stories",
  },

  loginCard: {
    title: "welcome to applywallet!",
    subtitle: "sign in to access your interview toolkit",
    alt_subtitle:
      "not ready to log in yet? no worries! you can still browse our public pages",
  },

  home: {
    title: "welcome to applywallet!",
    subtitle: "applywallet is under construction",
    alt_subtitle: "till we get the app ready, check out our blogs",
  },

  about: {
    title: "about",
    subtitle: "app & creator",

    app: {
      subtitle: "is under construction, till then check out our blogs",
    },

    creator: {
      position: "frontend engineer",
    },
  },
} as const;

export default engLocales;
export type EngLocales = typeof engLocales;
