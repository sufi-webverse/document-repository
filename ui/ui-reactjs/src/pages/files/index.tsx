import PageTitle from "@/components/PageTitle";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";

import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

import { useEffect, useState } from "react";

export default function Files() {
  const [files, setFiles] = useState<any[]>([]);
  const [path, setPath] = useState<any>("/");

  useEffect(() => {
    console.log(path);
    handleFolderNavigation("/");
  }, []);

  function handleFolderNavigation(_path: any) {
    setPath(() => _path);
    fetch(`https://localhost:7199/filemanager/files?path=${_path}`)
      .then((resp) => resp.json())
      .then((data) => {
        const jsonData = JSON.parse(data);

        let dataArray: any = [];
        for (let i = 0; i < jsonData.length; i++) {
          const file = jsonData[i];
          console.info(file.IsDirectory);
          dataArray.push({
            file: {
              label: file.Name,
              icon: file.IsDirectory ? (
                <FolderOutlinedIcon className="mr-3" />
              ) : (
                <ArticleOutlinedIcon className="mr-3" />
              ),
              isDirectory: file.IsDirectory,
            },
            author: { label: "admin", status: "available" },
            lastUpdated: { label: file.LastModified, timestamp: 1 },
            lastUpdate: {
              label: "admin",
              //icon: <EditRegular />,
            },
            isDirectory: file.IsDirectory,
          });
        }
        setFiles(() => dataArray);
      });
  }

  return (
    <div className="bg-white dark:bg-black">
      <div className="flex items-center justify-between ">
        <span className="flex items-center gap-10 ">
          <PageTitle title={"Files"} />
        </span>
        <span>
          <Input className="w-[200px]" placeholder="type file name" />
        </span>
      </div>

      <div className="h-[35px]  p-1 px-3 bg-green-100 rounded">
        <div className="flex items-center justify-end font-semibold">
          <button>
            <DeleteOutlineOutlinedIcon />
          </button>
        </div>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead></TableHead>
            <TableHead className="w-[400px] font-semibold text-lg text-black hover:bg-gray-200">
              Name
            </TableHead>
            <TableHead className=" font-semibold text-lg text-black hover:bg-gray-200">
              Author
            </TableHead>
            <TableHead className=" font-semibold text-lg text-black hover:bg-gray-200">
              Last modified
            </TableHead>
            <TableHead className=" font-semibold text-lg text-black hover:bg-gray-200">
              File size
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {files.map((file, idx) => (
            <TableRow
              key={file.file.label}
              className={`hover:bg-gray-200 ${
                file.file.isDirectory ? "hover:underline pb-2" : ""
              }`}
            >
              <TableCell>
                <Checkbox id={idx.toString()} />
              </TableCell>
              <TableCell className="font-medium hover:cursor-pointer ">
                {file.file.icon} {file.file.label}
              </TableCell>
              <TableCell>admin</TableCell>
              <TableCell>{file.lastUpdated.label}</TableCell>
              <TableCell className="">100KB</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="mt-3">
        <Progress className="h-2 w-[170px]" value={33} />
        <span className="text-[10px] text-center">30 GB of 100 GB</span>
      </div>
    </div>
  );
}
