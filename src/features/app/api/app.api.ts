import api from "@app/api/api";

import { AppEndpointsEnum } from "../constants/app.endpoints";

const uploadFileApi = (payload: FormData) => {
  return api.post(AppEndpointsEnum.UPLOAD_FILE, payload, {
    headers: {
      useFormData: true,
    },
  });
};

export const appApi = { uploadFileApi };
