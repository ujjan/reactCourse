import React from "react";
import ReactDOM from "react-dom";
import ComentDetail from "./CommentDetail";
import Faker from "faker";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <ComentDetail
          author="Ismail"
          timeAgo="Today at 07:49PM"
          comment="This post is really great! Keep it up"
          image={Faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <ComentDetail
          author="Ayaz"
          timeAgo="Yesterday at 03:09AM"
          comment="Man! your posts rock! i want to read all about your posts!"
          image={Faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <ComentDetail
          author="Sonya"
          timeAgo="Today at 09:24PM"
          comment="This post is really great! just want to keed rading"
          image={Faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
