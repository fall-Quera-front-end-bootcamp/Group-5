import TaskCol from "../TaskCol";

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

function BoardView() {
  return (
    <div className="flex gap-4">
      <TaskCol data={exampleData} />
      <TaskCol data={exampleData} />
    </div>
  );
}

export default BoardView;