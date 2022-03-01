import { httpResponse } from "./data";

const HttpService = () => ({
  _backendUrl: "",

  fetchGenres: () => {
    return httpResponse;
  },
});

export default HttpService;
