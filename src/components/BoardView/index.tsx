import TaskCol from "../TaskCol";

const exampleData = {
  header: "Title 2",
  tasks: [
    {
      id: 3,
      img: "",
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

function BoardView() {
  return (
    <div className="flex gap-4">
      <TaskCol data={exampleData} />
      <TaskCol data={exampleData} />
    </div>
  );
}

export default BoardView;