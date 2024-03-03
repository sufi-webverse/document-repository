import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { Button } from "@/components/ui/button";
import teamApiService from "@/services/teamApiService";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function Create({ create = true }: any) {
  const [openModal, setOpenModal] = useState(false);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    shouldUseNativeValidation: true,
  });

  const createTeam = async (data: any) => {
    await teamApiService.createTeam(data);
    setOpenModal(false);
  };

  return (
    <div>
      <Sheet>
        <SheetTrigger asChild={openModal}>
          <Button variant={"link"}>
            <AddOutlinedIcon />
          </Button>
        </SheetTrigger>
        <SheetContent side={"left"}>
          {create ? (
            <>
              <form onSubmit={handleSubmit(createTeam)}>
                <SheetHeader>
                  <SheetTitle>Create team</SheetTitle>
                  <SheetDescription>
                    Make your team and join for collaboration
                  </SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="title" className="text-right">
                      Name
                    </Label>
                    <Input
                      id="title"
                      className="col-span-3"
                      {...register("title", { required: "Please enter title" })}
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="username" className="text-right">
                      Description
                    </Label>
                    <Input id="username" value="" className="col-span-3" />
                  </div>
                </div>
                <SheetFooter>
                  <Button type="submit">Save team</Button>
                </SheetFooter>
                <div className="relative my-5">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t"></span>
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">
                      Or continue with
                    </span>
                  </div>
                </div>
                <SheetHeader>
                  <SheetTitle>Join team</SheetTitle>
                  <SheetDescription>
                    Enter the 7 digit team code to join the team
                  </SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Team code
                    </Label>
                    <Input id="name" className="col-span-3" />
                  </div>
                </div>
                <SheetFooter>
                  <Button type="submit">Join team</Button>
                </SheetFooter>
              </form>
            </>
          ) : (
            <>
              <SheetHeader>
                <SheetTitle>Edit team</SheetTitle>
                <SheetDescription>
                  Make your team and join for collaboration
                </SheetDescription>
              </SheetHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input id="name" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="username" className="text-right">
                    Description
                  </Label>
                  <Input id="username" value="" className="col-span-3" />
                </div>
              </div>
              <SheetFooter>
                <Button type="submit">Save team</Button>
              </SheetFooter>
            </>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
}
