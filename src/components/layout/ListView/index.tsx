import Projects from "./Projects";
import { mocked_data } from "../../../data/mockedData";
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
    <div key={"contain"} className="w-full overflow-y-auto mt-2">
      {mocked_data.map((projects, index) => {
        return <Projects Projects={projects} key={index} />;
      })}
    </div>
  );
};

export default Listview;
