export type Launch = {
  id: string;
  launch_date_local: string;
  launch_site: {
    site_name_long: string;
  };
  mission_name: string;
  rocket: {
    rocket_name: string;
  };
};
