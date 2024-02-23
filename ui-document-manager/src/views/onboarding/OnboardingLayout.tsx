import PageTitle from "@/components/PageTitle";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";

import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import { useEffect, useState } from "react";

export default function OnboardingLayout() {
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
    <div>
      <div className="flex files-center gap-10">
        <PageTitle title={"Files"} />
        <span className="">
          <Progress className="h-2 w-[170px]" value={33} />
          <span className="text-[10px] text-center">30 GB of 100 GB</span>
        </span>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
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
          {files.map((file) => (
            <TableRow key={file.file.label} className={`hover:bg-gray-200 ${file.file.isDirectory ? 'hover:underline pb-2' : ''}`}>
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
    </div>
  );
}
