import { httpClient } from "@/helpers/httpClient";

const getTeams = () => httpClient.get("/teams");
const getTeam = (id: any) => httpClient.get(`/teams/${id}`);
const createTeam = (body: any) => httpClient.post("/teams", body);

export default {
  getTeams,
  getTeam,
  createTeam,
};
