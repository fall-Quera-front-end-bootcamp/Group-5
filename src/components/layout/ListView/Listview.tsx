import { RenderProjects } from "./RenderProjects";
import {mocked_data} from "../../../data/Data";
import "reactjs-popup/dist/index.css";

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

interface DataProps {
  data?: DataType;
}

///// the main component
const Listview: React.FC<DataProps> = ({}) => {
  return (
    <div key={"contain"} className=" h-screen overflow-y-auto mt-2">
      {mocked_data.map((Projects) => {
        return (
          <RenderProjects Projects={Projects}/>
        );
      })}
    </div>
  );
};

export default Listview;
