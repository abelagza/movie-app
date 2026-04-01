import React, { Component } from "react";
import Card from "../components/Card/Card";
import moviesJSON from "../assets/data.json";

class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.setState({
      data: moviesJSON,
      loading: false,
    });
  }

  render() {
    const { data, loading } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <div className="row">
        {data.map((movie) => (
          <div className="col-sm-2" key={movie.id}>
            <Card movie={movie} />
          </div>
        ))}
      </div>
    );
  }
}

export default List;
