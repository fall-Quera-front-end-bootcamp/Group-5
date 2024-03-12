import { RenderProjects } from "./RenderProjects";

import "reactjs-popup/dist/index.css";

const man =
  "https://www.tuktukdesign.com/wp-content/uploads/2021/03/person-icon-520x520.jpg";
export type taskType = {
  task_name: string;
  peoples: string[];
  status: string;
  deadline: string;
  priority: string;
  description: string;
};
export type DataObjectType = { project_name: string; tasks: taskType[] };
export type DataType = DataObjectType[];

//////// this is a fake data to test
const mocked_data: DataType = [
  {
    project_name: "پروژه اول",
    tasks: [
      {
        task_name: "no-1-1",
        status: "pending",
        peoples: [man, man],
        deadline: "fri",
        priority: "high",
        description:
          "Excepteur deserunt velit occaecat sunt anim. Do et laboris cillum qui non sint anim labore. Elit deserunt esse ut non incididunt cupidatat officia in. Ullamco sint reprehenderit do excepteur cillum magna eu aliquip do. Tempor non consectetur incididunt sit dolore non ullamco nisi occaecat. Irure amet incididunt ut exercitation aute in. Veniam do eu id duis laborum consequat do.",
      },
      {
        task_name: "no-1-2",
        status: "pending",
        peoples: [man, man, man],
        deadline: "mon",
        priority: "high",
        description:
          "Excepteur deserunt velit occaecat sunt anim. Do et laboris cillum qui non sint anim labore. Elit deserunt esse ut non incididunt cupidatat officia in. Ullamco sint reprehenderit do excepteur cillum magna eu aliquip do. Tempor non consectetur incididunt sit dolore non ullamco nisi occaecat. Irure amet incididunt ut exercitation aute in. Veniam do eu id duis laborum consequat do.",
      },
      {
        task_name: "no-1-3",
        status: "done",
        peoples: [],
        deadline: "sat",
        priority: "low",
        description:
          "Excepteur deserunt velit occaecat sunt anim. Do et laboris cillum qui non sint anim labore. Elit deserunt esse ut non incididunt cupidatat officia in. Ullamco sint reprehenderit do excepteur cillum magna eu aliquip do. Tempor non consectetur incididunt sit dolore non ullamco nisi occaecat. Irure amet incididunt ut exercitation aute in. Veniam do eu id duis laborum consequat do.",
      },
      {
        task_name: "no-1-4",
        status: "done",
        peoples: [man],
        deadline: "sun",
        priority: "high",
        description:
          "Excepteur deserunt velit occaecat sunt anim. Do et laboris cillum qui non sint anim labore. Elit deserunt esse ut non incididunt cupidatat officia in. Ullamco sint reprehenderit do excepteur cillum magna eu aliquip do. Tempor non consectetur incididunt sit dolore non ullamco nisi occaecat. Irure amet incididunt ut exercitation aute in. Veniam do eu id duis laborum consequat do.",
      },
      {
        task_name: "no-1-5",
        status: "done",
        peoples: [man, man],
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

///// the main component
const Listview: React.FC<DataProps> = ({}) => {
  return (
    <div key={"contain"} className="w-full overflow-y-auto mt-2">
      {mocked_data.map((Projects) => {
        return (
          <RenderProjects Projects={Projects}/>
        );
      })}
    </div>
  );
};

export default Listview;
