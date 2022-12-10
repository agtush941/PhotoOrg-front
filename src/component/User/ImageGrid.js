import React, { Component } from "react";
import axios from "axios";
import { Button, Nav } from "react-bootstrap";

class ImageGrid extends Component {
  constructor() {
    super();
    this.state = {
      searchstr: "",
      isLoading: true,
      thumbnails: [],
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    axios
      .post(
        "http://localhost:3001/user/showallwith",
        { searchstr: this.state.searchstr },
        {
          headers: {
            authorization: sessionStorage.getItem("usertoken"),
          },
        }
      )
      .then((res) => {
        this.setState({ thumbnails: res.data });
        //console.log(this.state.thumbnails);
        this.setState({ isLoading: false });
      });
  }
  onSubmit(e) {
    e.preventDefault();
    console.log(this.state.searchstr);
    axios
      .post(
        "http://localhost:3001/user/showallwith",
        { searchstr: this.state.searchstr },
        {
          headers: {
            authorization: sessionStorage.getItem("usertoken"),
          },
        }
      )
      .then((res) => {
        this.setState({ thumbnails: res.data });
        //console.log(this.state.thumbnails);

        this.setState({ isLoading: false });
      });
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { thumbnails, isLoading } = this.state;
    return (
      <>
        <div className="container my-5">
          <div className="row">
            <div className="col-md-6 mt-5 mx-auto">
              <form Validate onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label htmlFor="image">search</label>
                  <input
                    type="text"
                    className="form-control"
                    name="searchstr"
                    value={this.state.searchstr}
                    onChange={this.onChange}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-lg btn-primary btn-block"
                >
                  search
                </button>
              </form>
            </div>
          </div>
        </div>
        <div>
        <div className="row">
          <div className="col-md">
            <div className="row no-gutters">
              {!isLoading ? (thumbnails.length === 0 ?( <h4>No results</h4>):(
                thumbnails.map((patient) => {
                  return ( <div className="col-sm-4" >
                    <Nav.Link href={"/UserHome/Image/" + patient.id}>
                      <div
                        key={patient.id}
                        className="list-group-item"
                        style={{ backgroundColor: "#e0e0e0" }}
                      >
                        <img src={patient.thumbnail}></img>
                        <p
                          className="mb-0"
                          style={{ backgroundColor: "#e0e0e0" }}
                        >
                          <i
                            className="fab fa-slack-hash fa-2x mr-4 purple p-3 white-text rounded "
                            aria-hidden="true"
                          ></i>{" "}
                          {patient.caption}{" "}
                        </p>
                      </div>
                    </Nav.Link>
                    </div>
                  );
                })
              )) : (
                <h4>Loading</h4>
              )}
            </div>
          </div>
        </div></div>
      </>
    );
  }
}

export default ImageGrid;
