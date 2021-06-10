import React, { useEffect, useState } from "react";

import { Table, Button, Input, Modal } from "antd";

import "../../../App.css";

const CodeinTable = (props: any): any => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { columns, getData,scroll } = props;

  const [loading, setLoading] = useState(false);

  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const data = await getData();
        setData(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [getData]);

  return (
    <div className="codein-table-wrapper">
      <div>
        {/* <Button icon={loading ? <LoadingOutlined /> : ""} type="primary">רענן</Button> */}
      </div>

      <Table scroll={scroll}  loading={loading} columns={columns} dataSource={data} />
    </div>
  );
};

export default CodeinTable;
