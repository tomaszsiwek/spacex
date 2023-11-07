export type Launch = {
  id: string;
  launch_date_local: string;
  launch_site: {
    site_name_long: string | null;
  };
  mission_name: string;
  launch_success: boolean;
  rocket: {
    rocket_name: string;
    second_stage?: {
      payloads: Payload[];
    };
  };
  links?: Link;
};

export type Link = {
  flickr_images: string[];
  video_link: string;
};

export type Payload = {
  payload_type: String;
  payload_mass_kg: number;
};
