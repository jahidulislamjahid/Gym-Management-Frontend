"use client";

import {
  DeleteOutlined,
  EditOutlined,
  ReloadOutlined,
} from "@ant-design/icons";

import ActionBar from "@/components/UI/ActionBar";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import UMTable from "@/components/UI/UMTable";
import { Button, Input } from "antd";
import dayjs from "dayjs";
import Link from "next/link";
import { useState } from "react";

const AdminLists = () => {
  const query: Record<string, any> = {};

  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;
  // query["searchTerm"] = searchTerm;

  //   const courses = data?.courses;
  //   const meta = data?.meta;

  const deleteHandler = async (id: string) => {
    //   message.loading("Deleting.....");
    //   try {
    //     //   console.log(data);
    //     const res = await deleteCourse(id);
    //     if (res) {
    //       message.success("Course Deleted successfully");
    //     }
    //   } catch (err: any) {
    //     //   console.error(err.message);
    //     message.error(err.message);
    //   }
  };

  const dataSource = [
    {
      email: "shadeshsaha45@gmail.com",
      firstName: "Shadesh",
      lastName: "Saha",
      role: "ADMIN",
      contactNumber: "01521",
      address: "Dhaka",
      bloodGroup: "B+",
    },
  ];

  const columns = [
    {
      title: "Full Name",

      render: function(data: Record<string, string>) {
        const fullName = `${data?.firstName} ${data?.lastName}`;
        return <>{fullName}</>;
      },
      //   sorter: true,
    },
    {
      title: "Email",
      dataIndex: "email",
      //   sorter: true,
    },
    {
      title: "Address",
      dataIndex: "address",
      //   sorter: true,
    },
    {
      title: "Contact No",
      dataIndex: "contactNumber",
      //   sorter: true,
    },
    {
      title: "Blood Group",
      dataIndex: "contactNumber",
      //   sorter: true,
    },
    {
      title: "Role",
      dataIndex: "role",
      //   sorter: true,
    },
    {
      title: "CreatedAt",
      dataIndex: "createdAt",
      render: function(data: any) {
        return data && dayjs(data).format("MMM D, YYYY hh:mm A");
      },
      //   sorter: true,
    },
    {
      title: "Action",
      render: function(data: any) {
        return (
          <>
            <Link href={`/admin/course/edit/${data?.id}`}>
              <Button
                style={{
                  margin: "0px 5px",
                }}
                onClick={() => console.log(data)}
                type="primary"
              >
                <EditOutlined />
              </Button>
            </Link>
            <Button
              onClick={() => deleteHandler(data?.id)}
              type="primary"
              danger
            >
              <DeleteOutlined />
            </Button>
          </>
        );
      },
    },
  ];

  const onPaginationChange = (page: number, pageSize: number) => {
    console.log("Page:", page, "PageSize:", pageSize);
    setPage(page);
    setSize(pageSize);
  };
  const onTableChange = (pagination: any, filter: any, sorter: any) => {
    const { order, field } = sorter;
    // console.log(order, field);
    setSortBy(field as string);
    setSortOrder(order === "ascend" ? "asc" : "desc");
  };

  const resetFilters = () => {
    setSortBy("");
    setSortOrder("");
    setSearchTerm("");
  };

  //   console.log(dataSource);

  return (
    <div className="container rounded bg-white mt-1 mb-5 p-4">
      <UMBreadCrumb
        items={[
          {
            label: "dashboard",
            link: "/dashboard",
          },
          {
            label: "user-Lists",
            link: "/dashboard/user-lists",
          },
        ]}
      />

      <div className="mt-5">
        <ActionBar title="Admin Lists">
          <Input
            type="text"
            size="large"
            placeholder="Search by name, email, role..."
            style={{
              width: "30%",
            }}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
          <div>
            <Link href="/admin/course/create">
              <Button type="primary">Create</Button>
            </Link>
            {(!!sortBy || !!sortOrder || !!searchTerm) && (
              <Button
                onClick={resetFilters}
                type="primary"
                style={{ margin: "0px 5px" }}
              >
                <ReloadOutlined />
              </Button>
            )}
          </div>
        </ActionBar>
      </div>

      <UMTable
        // loading={isLoading}
        columns={columns}
        dataSource={dataSource}
        pageSize={size}
        // totalPages="meta?.total"
        showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
      />
    </div>
  );
};

export default AdminLists;