function TaskHeader({title}:any) {
  // برای تولید رنگ تصادفی
  const randomColor = ():string => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
  
    if(red === green && green === blue) {
      return randomColor();
    }
    
    return `rgb(${red}, ${green}, ${blue})`;
  }

  
  return (
    <div className="w-[250px] h-[40px] py-2 px-3 bg-white rounded-3xl border-t-2 space-between" style={{borderColor: randomColor(), boxShadow: '0px 3px 4px 0px rgba(0, 0, 0, 0.2)'}}>
      {title}
    </div>
  );
}

export default TaskHeader;