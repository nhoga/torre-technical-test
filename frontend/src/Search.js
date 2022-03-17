import React, { useState, useEffect } from "react";
import axios from "axios";

function Search() {
  const [user, setUser] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const getTorreUser = async () => {
    await axios
      .get("http://localhost:3000/api/search?query=" + search)
      .then((response) => {
        console.log(response.data);
        setLoading(false);
        setUser(response.data);
      })
      .catch((error) => console.log(error));
  };

  // useEffect(() => {
  //   setSearch()
  // }, []);

  const handleChange = (e) => {
    e.preventDefault();
    setLoading(true);
    getTorreUser();
  };

  const logicLoading = () => {
    if (loading === true && user.length === 0) {
      return (
        <div className="loading">
          <img
            alt="gif"
            src="https://www.eurotransportcar.com/bundles/front/images/loading.gif"
          ></img>
        </div>
      );
    }
  };

  return (
    <div>
      <div className="searchbar">
        <form onSubmit={handleChange}>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search any Torre user"
          ></input>
          <button className="button">Search</button>
        </form>
        <div className="loading"> {logicLoading()}</div>
      </div>

      {user.length !== 0 ? (
        <>
          {" "}
          <div className="container">
            <section className="userProfile card">
              <div className="profile">
                <figure>
                  <img
                    src={user.image}
                    alt="profile"
                    width="250px"
                    height="250px"
                  />
                </figure>
              </div>
            </section>

            <section className="work_skills card">
              <div className="skills">
                <h1 className="heading">Skills</h1>

                {user?.skills.map((skill) => (
                  <ul>
                    <li key={skill?.id}>{skill?.name}</li>
                  </ul>
                ))}
              </div>
            </section>

            <section className="userDetails card">
              <div className="userName">
                <h1 className="name">{user.name}</h1>
                <div className="map">
                  <i className="ri-map-pin-fill ri"></i>
                  <span>{user.location}</span>
                </div>
                <li>{user.headline}</li>
              </div>
            </section>

            <section className="timeline_about card">
              <div className="tabs">
                <ul>
                  <li className="about active">
                    <i className="ri-user-3-fill ri"></i>
                    <span>About</span>
                  </li>
                </ul>
              </div>

              <div className="contact_info">
                <h1 className="heading">Personal website's</h1>
                {user?.links.map((link) => (
                  <>
                    {" "}
                    <ul>
                      <h1 className="label">{link.name}:</h1>
                      <span className="info">
                        <a className="links" href={link.address}>
                          {link.address}
                        </a>
                      </span>
                    </ul>
                  </>
                ))}
              </div>
            </section>
          </div>
        </>
      ) : (
        <p className="dontsearch">You dont search any user yet</p>
      )}
    </div>
  );
}

export default Search;
