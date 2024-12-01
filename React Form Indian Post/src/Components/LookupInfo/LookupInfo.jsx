import { useEffect, useState } from "react";
import "./LookupInfo.css";

function LookupInfo({ postInfo }) {
  const [localData, setLocalData] = useState(postInfo);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // loading shown for 5 sec
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  // filter the postoffices by their names
  function filterByName(e) {
    let name = e.target.value;

    name = name.toLowerCase();

    const filteredData = postInfo.filter((post) => {
      if (post.Name.toLowerCase().includes(name)) {
        return post;
      }
      return null;
    });

    setLocalData(filteredData);
  }

  return (
    <>
      {loading ? (
        <div className="loader-main">
          <div class="loading-container">
            <div class="spinner"></div>
            <p>Loading...</p>
          </div>
        </div>
      ) : (
        <div className="lookup-info">
          <div className="first-div">
            <i
              class="fa-solid fa-arrow-left"
              onClick={() => {
                window.location.reload();
              }}
            ></i>
            <p>
              <strong>Pincode : {postInfo[0].Pincode}</strong>
            </p>
            <p>
              <strong>Message : Number of pincode(s) found: </strong>
              {postInfo.length}
            </p>
          </div>

          <div className="search-bar">
            <label htmlFor="search">
              <i className="fa-solid fa-magnifying-glass"></i>
            </label>
            <input
              type="search"
              id="search"
              onChange={filterByName}
              placeholder="Filter"
            />
          </div>

          <div className="post-list">
            {localData.map((post, index) => {
              return (
                <div key={index} className="post">
                  <ul>
                    <li>
                      Name : <strong>{post.Name}</strong>
                    </li>
                    <li>
                      Branch Type : <strong>{post.BranchType}</strong>
                    </li>
                    <li>
                      Delivery Status : <strong>{post.DeliveryStatus}</strong>
                    </li>
                    <li>
                      District : <strong>{post.District}</strong>
                    </li>
                    <li>
                      Division : <strong>{post.Division}</strong>
                    </li>
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default LookupInfo;
