import { AppState } from "../AppState.js"
import { Profile } from "../models/Profile.js"
import { logger } from "../utils/Logger.js"
import { bcwSandbox } from "./AxiosService.js"


class ProfilesService {
    async getProfileById(id){
        const res = await bcwSandbox.get(`api/profiles/${id}`)
        logger.log('get profile by id',res.data)
        AppState.activeProfile = new Profile(res.data)
    }
}


export const profilesService = new ProfilesService()