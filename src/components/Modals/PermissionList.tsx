type PropsType = {
  setShowModal: (showModal: boolean) => void
}

const PermissionList = ({setShowModal}:PropsType) => {
  return (
    <>
      <div
        className="absolute top-[-10px] left-[-260px] w-64 h-96 mt-1 text-body-s font-normal rounded-lg p-3 z-20 bg-red-primary shadow-lg"
      >
        ممد نوبری دل همه رو میبری
      </div>
    </>
  );
};

export default PermissionList;