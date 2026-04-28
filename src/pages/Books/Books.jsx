import React, { useContext } from "react";
import { BookContext } from "../../context/BookProvider";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ListedReadList from "../../components/Shared/NavBar/Homepage/ListedBooks/ListedReadList";
import ListedWishList from "../../components/Shared/NavBar/Homepage/ListedBooks/ListedWishList";
const Books = () => {
  const { readBooks, wishList } = useContext(BookContext);
  console.log(readBooks, wishList);
  return (
    <div className="container mx-auto my-10">
      
      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <ListedReadList></ListedReadList>
        </TabPanel>
        <TabPanel>
          <ListedWishList></ListedWishList>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Books;
