import { useEffect, useState } from "react";
type taskType = {
  task_name: string;
  peoples: string[];
  status: string;
  deadline: string;
  priority: string;
  description: string;
};
// type DataObjectType = string | tasksType;
type DataObjectType = { project_name: string; tasks: taskType[] };
type DataType = DataObjectType[];
// interface Datatype {
//   project_name: string;
//   tasks: {
//     task_name: string;
//     status: string;
//     peoples: string[];
//     deadline: string;
//     priority: string;
//     description: string;
//   }[];
// }
const mocked_data: DataType = [
  {
    project_name: "do first",
    tasks: [
      {
        task_name: "no-1-1",
        status: "pending",
        peoples: ["ali", "hasan"],
        deadline: "fri",
        priority: "high",
        description:
          "Excepteur deserunt velit occaecat sunt anim. Do et laboris cillum qui non sint anim labore. Elit deserunt esse ut non incididunt cupidatat officia in. Ullamco sint reprehenderit do excepteur cillum magna eu aliquip do. Tempor non consectetur incididunt sit dolore non ullamco nisi occaecat. Irure amet incididunt ut exercitation aute in. Veniam do eu id duis laborum consequat do.",
      },
      {
        task_name: "no-1-2",
        status: "pending",
        peoples: ["alireza", "davod"],
        deadline: "mon",
        priority: "high",
        description:
          "Excepteur deserunt velit occaecat sunt anim. Do et laboris cillum qui non sint anim labore. Elit deserunt esse ut non incididunt cupidatat officia in. Ullamco sint reprehenderit do excepteur cillum magna eu aliquip do. Tempor non consectetur incididunt sit dolore non ullamco nisi occaecat. Irure amet incididunt ut exercitation aute in. Veniam do eu id duis laborum consequat do.",
      },
      {
        task_name: "no-1-3",
        status: "inprogress",
        peoples: ["ali", "hasan"],
        deadline: "sat",
        priority: "low",
        description:
          "Excepteur deserunt velit occaecat sunt anim. Do et laboris cillum qui non sint anim labore. Elit deserunt esse ut non incididunt cupidatat officia in. Ullamco sint reprehenderit do excepteur cillum magna eu aliquip do. Tempor non consectetur incididunt sit dolore non ullamco nisi occaecat. Irure amet incididunt ut exercitation aute in. Veniam do eu id duis laborum consequat do.",
      },
      {
        task_name: "no-1-4",
        status: "done",
        peoples: ["moh", "mosh"],
        deadline: "sun",
        priority: "high",
        description:
          "Excepteur deserunt velit occaecat sunt anim. Do et laboris cillum qui non sint anim labore. Elit deserunt esse ut non incididunt cupidatat officia in. Ullamco sint reprehenderit do excepteur cillum magna eu aliquip do. Tempor non consectetur incididunt sit dolore non ullamco nisi occaecat. Irure amet incididunt ut exercitation aute in. Veniam do eu id duis laborum consequat do.",
      },
      {
        task_name: "no-1-5",
        status: "done",
        peoples: ["ali", "hasan"],
        deadline: "fri",
        priority: "high",
        description:
          "Excepteur deserunt velit occaecat sunt anim. Do et laboris cillum qui non sint anim labore. Elit deserunt esse ut non incididunt cupidatat officia in. Ullamco sint reprehenderit do excepteur cillum magna eu aliquip do. Tempor non consectetur incididunt sit dolore non ullamco nisi occaecat. Irure amet incididunt ut exercitation aute in. Veniam do eu id duis laborum consequat do.",
      },
    ],
  },
];

interface DataProps {
  data?: DataType;
}

const Listview: React.FC<DataProps> = ({ data }) => {
  const [collapsed, setCollapsed] = useState(true);

  useEffect(() => {
    console.log(mocked_data);
  }, []);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div>
      <h2 onClick={toggleCollapsed}>{"project-no"}</h2>
      {collapsed ? null : (
        <ul>
          <li>
            <h3>project1</h3>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
            </ul>
          </li>
          <li>
            <h3>Section 2</h3>
            <ul>
              <li>Item 3</li>
              <li>Item 4</li>
            </ul>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Listview;
