import TaskCol from "../TaskCol";
import { DragDropContext } from "react-beautiful-dnd"

const exampleData = {
  header: "Title 2",
  tasks: [
    {
      id: 3,
      img: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png",
      topic: "تسک۳",
      caption: "توضیح الکی",
      tag: ["تگ1", "تگ2", "تگ3"],
    },
    {
      id: 4,
      img: "",
      topic: "تسک۴",
      caption: "توضیح الکی",
      tag: ["تگ1", "تگ2"],
    }
  ]
}

type TaskAPIType = {
  "taskGroups": {
    groupId: number;
    groupName: string;
    tasks: {
        taskId: number;
        topic: string;
        caption: string;
        img: string;
        tags: string[];
    }[];
  }[]
};

function BoardView({taskGroups}: TaskAPIType) {
  return (
    <div className="flex gap-4">
      {/* <DragDropContext onDragEnd={BoardView}> */}
        {/* <TaskCol data={taskGroups} /> */}
        <TaskCol data={exampleData} />
      {/* </DragDropContext> */}
    </div>
  );
}

export default BoardView;