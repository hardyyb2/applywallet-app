const gaPageview = (GA_TRACKING_ID: string, url: string) => {
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};

const gaEvent = ({
  action,
  category,
  label,
  value,
}: {
  action: Gtag.EventNames;
  category: string;
  label: string;
  value: string;
}) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

export { gaPageview, gaEvent };
