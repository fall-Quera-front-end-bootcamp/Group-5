import React, { useState } from "react";

// Define types for the component props and state

type ListItem = string;

const addTag: React.FC = () => {
  const [items, setItems] = useState<ListItem[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [newItem, setNewItem] = useState("");

  // Function to handle adding a new item to the list
  const handleAddItem = () => {
    if (newItem.trim() !== "") {
      setItems([...items, newItem]);
      setNewItem("");
    }
  };

  // Function to handle updating the search query
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Filter the items based on the search query
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="flex flex-col justify-center">
        <div className="flex justify-center items-center">
          <div>
            {/* Search bar */}
            <input
              type="text"
              placeholder="سرچ ..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="borderw-40 px-[8px] py-[5px] text-body-m rounded-md border-2 mb-2"
            />
            {/* Add input */}
            <input
              type="text"
              placeholder="اضافه کردن تگ ..."
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
              className="borderw-40 px-[8px] py-[5px] text-body-m rounded-md border-2"
            />
          </div>
          <div>
            <button
              onClick={handleAddItem}
              className="w-full transition-all bg-brand-primary
               hover:bg-teal-primary
                text-white rounded
                px-5"
            >
              اضافه کردن تگ
            </button>
          </div>
        </div>

        {/* List of items */}
        {filteredItems.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    </>
  );
};

export default addTag;
