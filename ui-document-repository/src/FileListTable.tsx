import React, { useEffect, useState } from "react";
import {
  FolderRegular,
  EditRegular,
  OpenRegular,
  DocumentRegular,
  PeopleRegular,
  DocumentPdfRegular,
  VideoRegular,
  DeleteRegular,
} from "@fluentui/react-icons";
import {
  TableBody,
  TableCell,
  TableRow,
  Table,
  TableHeader,
  TableHeaderCell,
  TableCellLayout,
  PresenceBadgeStatus,
  Avatar,
  Button,
  useArrowNavigationGroup,
  useFocusableGroup,
} from "@fluentui/react-components";

const columns = [
  { columnKey: "file", label: "File" },
  { columnKey: "author", label: "Author" },
  { columnKey: "lastUpdated", label: "Last updated" },
  { columnKey: "actions", label: "Actions" },
];

// interface FileModel {
//     file: { label: file.Name, icon: <DocumentRegular />, isDirectory: file.IsDirectory },
//     author: { label: "admin", status: "available" },
//     lastUpdated: { label: file.LastModified, timestamp: 1 },
//     lastUpdate: {
//       label: "admin",
//       icon: <EditRegular />,
//     }, isDirectory: file.IsDirectory
// }

const FolderLink: any = ({ link, handleFolderNavigation }: any) => {
  return (
    <a href="#" onClick={(e) => handleFolderNavigation("/"+link)}>
      {link}
    </a>
  );
};

export const FileListTable = () => {
  const keyboardNavAttr = useArrowNavigationGroup({ axis: "grid" });
  const focusableGroupAttr = useFocusableGroup({
    tabBehavior: "limited-trap-focus",
  });

  const [items, setItems] = useState<any[]>([]);
  const [path, setPath] = useState<any>("/");

  function handleFolderNavigation(_path: any) {
    setPath((prev: any) => _path);
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
              icon: <DocumentRegular />,
              isDirectory: file.IsDirectory,
            },
            author: { label: "admin", status: "available" },
            lastUpdated: { label: file.LastModified, timestamp: 1 },
            lastUpdate: {
              label: "admin",
              icon: <EditRegular />,
            },
            isDirectory: file.IsDirectory,
          });
        }
        setItems((prev) => dataArray);
      });
  }

  useEffect(() => {
    handleFolderNavigation(`/`);
  }, []);

  return (
    <>
      <Table
        {...keyboardNavAttr}
        role="grid"
        aria-label="Table with grid keyboard navigation"
      >
        <TableHeader>
          <TableRow>
            {columns.map((column) => (
              <TableHeaderCell key={column.columnKey}>
                {column.label}
              </TableHeaderCell>
            ))}
            <TableHeaderCell />
          </TableRow>
        </TableHeader>
        <TableBody>
          {items &&
            items.map((item) => (
              <>
                <TableRow key={item.file.label}>
                  <TableCell tabIndex={0} role="gridcell">
                    <TableCellLayout media={item.file.icon}>
                      {item.isDirectory ? (
                        <FolderLink
                          link={item.file.label}
                          handleFolderNavigation={handleFolderNavigation}
                        />
                      ) : (
                        item.file.label
                      )}
                    </TableCellLayout>
                  </TableCell>
                  <TableCell tabIndex={0} role="gridcell">
                    <TableCellLayout
                      media={
                        <Avatar
                          aria-label={item.author.label}
                          name={item.author.label}
                          badge={{
                            status: item.author.status as PresenceBadgeStatus,
                          }}
                        />
                      }
                    >
                      {item.author.label}
                    </TableCellLayout>
                  </TableCell>
                  <TableCell tabIndex={0} role="gridcell">
                    {item.lastUpdated.label}
                  </TableCell>
                  <TableCell
                    role="gridcell"
                    tabIndex={0}
                    {...focusableGroupAttr}
                  >
                    <TableCellLayout>
                      <Button icon={<EditRegular />} aria-label="Edit" />
                      <Button icon={<DeleteRegular />} aria-label="Delete" />
                    </TableCellLayout>
                  </TableCell>
                </TableRow>
              </>
            ))}
        </TableBody>
      </Table>
    </>
  );
};
