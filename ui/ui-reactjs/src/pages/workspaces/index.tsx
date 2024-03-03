import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import PageTitle from "@/components/PageTitle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import teamApiService from "@/services/teamApiService";
import Create from "./Create";

export default function index() {
  const [team, setTeam] = useState<any>([]);
  const params = useParams();

  useEffect(() => {
    async function fetch() {
      try {
        const _team = await teamApiService.getTeam(params.id);
        console.log(_team);
        setTeam(_team?.data);
      } catch (err) {}
    }
    fetch();
  });

  return (
    <>
      <div className="mb-5">
        <Link to={`/teams`}>
          <span className="">
            <ArrowBackIosNewOutlinedIcon className="mr-2 " fontSize="small" />
            <span className="font-semibold text-base">Teams</span>
          </span>
        </Link>
      </div>
      {team && <h4>{team.title}</h4>}
      <PageTitle title={"Workspace"}>
        <Create />
      </PageTitle>

      <div>
        <div className="bg-white p-2 px-1 rounded-xl shadow-md w-[500px]">
          <div>
            <div className="flex items-center justify-between p-6">
              <div className="flex gap-6 items-center">
                <div className="flex">
                  <LibraryBooksOutlinedIcon className="" fontSize="large" />
                </div>
                <div className="flex flex-col">
                  <p className="text-xl font-semibold underline cursor-pointer">
                    Requirements deck
                  </p>
                  <p>Date-</p>
                </div>
              </div>
              <div className="flex items-center">
                <Link to={`/teams`}>
                  <ArrowForwardOutlinedIcon />
                </Link>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant={"ghost"}>
                      <MoreVertOutlinedIcon />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>Workspace settings</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem>Delete</DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Support</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
