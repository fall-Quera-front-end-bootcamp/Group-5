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

const Listview: React.FC<DataProps> = ({ }) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const CheckTASKS = (AllTasks: Array[], status: string) => {
    const ReTasks = AllTasks.filter((CheckTask) => CheckTask.status == status)
    console.log(ReTasks)
    return (
      ReTasks.map((task)=>{
        return <></>
      })
    )


  }

  return (
    <div>
      {mocked_data.map((Projects) => {
        return (
          <>
            <h2 onClick={toggleCollapsed} key={Projects.project_name}>{Projects.project_name}</h2>
            {collapsed ? null : (
              CheckTASKS(Projects.tasks, "pending")


              // e.tasks.map((items) => {
              //   return (
              //     <ul>
              //       <li>
              //         <h3></h3>
              //         <ul>
              //           <li>Item 1</li>
              //           <li>Item 2</li>
              //         </ul>
              //       </li>
              //       <li>
              //         <ul>
              //           <h3>Section 2</h3>
              //           <li>Item 3</li>
              //           <li>Item 4</li>
              //         </ul>
              //       </li>
              //     </ul>
              //   )
              // })


            )}

          </>
        )
      })}
      {/* <h2 onClick={toggleCollapsed}>{"project-no"}</h2> */}

    </div>
  );
};

export default Listview;
