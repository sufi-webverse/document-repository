import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import PageTitle from "@/components/PageTitle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";

import teamApiService from "@/services/teamApiService";
import Create from "./Create";

export default function index() {
  const [teams, setTeams] = useState<any>([]);

  useEffect(() => {
    async function fetch() {
      try {
        const _teams = await teamApiService.getTeams();
        console.log(_teams);
        setTeams(_teams?.data);
      } catch (err) {}
    }
    fetch();
  }, []);

  return (
    <>
      <PageTitle title={"My teams"}>
        <Create />
      </PageTitle>

      <div>
        {teams ? (
          teams.map((team: any) => (
            <div
              key={team.id}
              className="bg-white p-4 rounded-xl shadow-md w-[550px] mb-3"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex gap-6 items-center">
                    <div className="flex">
                      <PeopleOutlinedIcon className="" fontSize="large" />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-xl font-semibold underline cursor-pointer">
                        <Link to={`/teams/${team.id}/workspaces`}>
                          {team.title}
                        </Link>
                      </p>
                      <p>Date-</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Link to={`/teams/${team.id}/workspaces`}>
                      <ArrowForwardOutlinedIcon />
                    </Link>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant={"ghost"}>
                          <MoreVertOutlinedIcon />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-56">
                        <DropdownMenuLabel>Team settings</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                          <DropdownMenuItem>Delete</DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                          <DropdownMenuSub>
                            <DropdownMenuSubTrigger>
                              Invite users
                            </DropdownMenuSubTrigger>
                            <DropdownMenuPortal>
                              <DropdownMenuSubContent>
                                <DropdownMenuItem>Email</DropdownMenuItem>
                                <DropdownMenuItem>Message</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>More...</DropdownMenuItem>
                              </DropdownMenuSubContent>
                            </DropdownMenuPortal>
                          </DropdownMenuSub>
                          <DropdownMenuItem>New Team</DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Support</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <>
            <div className="g-white p-4 rounded shadow w-[550px]">
              <div className="flex items-center space-x-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[250px]" />
                  <Skeleton className="h-4 w-[200px]" />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
