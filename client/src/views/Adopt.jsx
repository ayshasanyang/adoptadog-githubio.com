import React, { Fragment, useState, useEffect } from 'react';
import DogCard from '../components/DogCard'
import API from "../utils/API";
import Sidebar from "../components/Sidebar";

function Dogs() {

  const [dogs, adoptableDogs] = useState([]);

  useEffect(() => {
    loadDogs()
  }, [])

  function loadDogs() {
    API.getDogs()
      .then(res =>
        adoptableDogs(res.data)
      )
      .catch(err => console.log(err));
  }

  function filterDogs(dogs) {
    adoptableDogs(dogs);
  }

  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col-2 mt-5">
            <Sidebar filterDogs={filterDogs}></Sidebar>
          </div>

          <div className="col-10">
            <div className="row m-5">
              {dogs.map((dogs => [
                <DogCard key={dogs.id} dog={dogs} />,
                console.log(dogs)
              ]))}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

/*
Dogs.propTypes = {
  getDogs: PropTypes.func.isRequired,
  dog: PropTypes.object.isRequired
};
const mapStateToProps = (state) => ({

  dog: state.dog
})

export default connect(mapStateToProps, { getDogs })(Dogs);
*/
export default Dogs;

