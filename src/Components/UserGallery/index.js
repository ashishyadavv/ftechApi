import React from "react";
import UserCard from "../UserCard";

import "./style.css";

class UserGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      currentPage: 0,
      isLoading: false,
    };
  }

  componentDidMount = () => {
    this.fetchUsers();
  };

  fetchUsers = () => {
    const pageToFetch = this.state.currentPage + 1;
    const url = `https://reqres.in/api/users?page=${pageToFetch}`;
    this.setState({ currentPage: pageToFetch });
    this.setState({ isLoading: true });
    fetch(url, {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        console.log(result.data);
        const allUsers = [...this.state.users, ...result.data];
        this.setState({
          users: allUsers,
          isLoading: false,
        });
      })
      .catch((error) => {
        this.setState({
          isLoading: false,
        });
      });
  };
  render = () => {
    return (
      <div className="container">
          <div className="inside">
        <h1 className="heading">Fetching Data.......</h1>
        </div>
        <div className="inner-container">
          {/* usercard will be shown herer */}
          {this.state.users.map((user) => {
            return (
              <UserCard
                key={user.id}
                pic={user.avatar}
                firstname={user.first_name}
                lastname={user.last_name}
                email={user.email}
              />
            );
          })}
        </div>
        {this.state.isLoading ? (
          <span>Loading...</span>
        ) : (
          <button className="btn"
            onClick={this.fetchUsers}
            disbaled={this.state.currentPage >= 2}
          >
            Load More...
          </button>
        )}
      </div>
    );
  };
}

export default UserGallery;
