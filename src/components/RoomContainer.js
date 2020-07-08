import React from "react";
import RoomFilter from "./RoomFilter";
import RoomList from "./RoomList";
import { RoomConsumer } from "../context";
import Loading from "./Loading";

export default function RoomContainer() {
  return (
    <RoomConsumer>
      {(value) => {
        console.log(value);

        return (
          <div>
            Hello From Rooms Container
            <RoomFilter />
            <RoomList />
          </div>
        );
      }}
    </RoomConsumer>
  );
}
