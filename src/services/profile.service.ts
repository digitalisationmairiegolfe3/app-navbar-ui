import { ApiResponse } from "../models/http/ApiResponse";
import { HttpBaseService } from "./httpBase.service";
import config from "../config";
import { Profil } from "../models/profil";


export class ProfileService extends HttpBaseService {
    private static classInstance : ProfileService;
    static profile_mock_url = config.profile_mock_url;

    constructor(token: string) {
        super(token, ProfileService.profile_mock_url);
    }

    public static getInstance(token: string): ProfileService {
        if (!this.classInstance) {
            this.classInstance = new ProfileService(token);
          }
          return this.classInstance;
    }

    public async retrieveProfile(): Promise< ApiResponse<Profil[]> > {
        return this.instance
            .get("working_space.json?key=a1d55460")
            .then((response)=> {
                const apiResponse = new ApiResponse<Profil[]>();
                switch (response.status) {
                    case 204: {
                      return apiResponse;
                    }
                    default: {
                      apiResponse.data = response.data;
                      return apiResponse;
                    }
                  }
            })
            .catch((error) => {
                return new ApiResponse<Profil[]>();
            })
    }
}