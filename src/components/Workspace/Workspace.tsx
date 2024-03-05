import WorkspaceItem from "./WorkspaceItem";

const Workspace = () => {
  return (
    <div className="flex flex-col w-[1100PX] h-[1024PX] gap-l ">
      <WorkspaceItem
        workspaceName="درس مدیریت پروژه"
        workspaceColor="green"
        listOfProjects={[
          "پروژه اول",
          "پروژه دوم",
          "پروژه سوم",
          "پروژه چهارم",
          "پروژه پنجم",
        ]}
      />
      <WorkspaceItem
        workspaceName="کارهای شخصی"
        workspaceColor="yellow"
        listOfProjects={[
          "پروژه اول",
          "پروژه دوم",
          "پروژه سوم",
        ]}
      />
      <WorkspaceItem
        workspaceName="درس کامپایلر"
        workspaceColor="yellow"
        listOfProjects={[
        ]}
      />
      <WorkspaceItem
        workspaceName="درس مدیریت پروژه"
        workspaceColor="blue"
        listOfProjects={[
          "پروژه اول",
          "پروژه دوم",
          "پروژه سوم",
          "پروژه چهارم",
        ]}
      />
    </div>
  );
};

export default Workspace;
