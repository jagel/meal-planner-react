import { AgendaSettingsModel } from "../../common/models/agenda.settings";
import { APIROUTES } from "../../utils/data/api-routes";
import { endpointService } from "./endpoint.service";

export type AgendaCodes = {
  MealPlanner:'MP'
}

export const agendaSettingsEndpointsService = {
    async getByCode(props: {agendaCode:string}) : Promise<AgendaSettingsModel> {
      let endpoint = APIROUTES.AGENDASETTINGS.GETBYAGENDACODE;
      let respone = await endpointService.getAsync<AgendaSettingsModel>(endpoint,props);
      return respone.data;
    },
    async updateByCodeAsync(props: {agendaSettings:AgendaSettingsModel, agendaCode:string}) : Promise<AgendaSettingsModel>{
      let agendaCode = props.agendaCode;
      let endpoint = APIROUTES.AGENDASETTINGS.UPDATEBYAGENDACODE;
  
      let respone = await endpointService.putAsync<AgendaSettingsModel,AgendaSettingsModel>(endpoint,props.agendaSettings,{agendaCode});
      return respone.data;
    }
  };
  