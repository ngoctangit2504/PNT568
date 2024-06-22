import React, { useState, useEffect } from 'react';
import floorPlanService from '../../services/floorPlanService';
import { Link } from 'react-router-dom';



const FloorPlanList = () => {
  const [floorPlans, setFloorPlans] = useState([]);

  useEffect(() => {
    floorPlanService.getFloorPlans()
      .then(data => setFloorPlans(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <>
    <div class="container">
      <h1>Mặt bằng</h1>
      <br/>
    <Link to="/add-floor-plan"><button type="button" class="btn btn-primary">Add New Floor Plan</button></Link>
    

<table class="table table-hover">
  <thead>
    <tr>
      <th scope='col'>STT</th>
      <th scope="col">Hình ảnh</th>
      <th scope="col">Tầng</th>
      <th scope="col">Diện tích</th>
      <th scope='col'>Trạng thái</th>
      <th scope='col'>Thông tin</th>
      <th scope='col'>Công ty</th>
    </tr>
  </thead>
  <tbody>
    {floorPlans.map(floorPlans => (
      <tr key={floorPlans._id}>
        <td><image src={floorPlans.image} alt="Floor Plan" width={100}></image></td>
        <td>{floorPlans.floor}</td>
        <td>{floorPlans.area} m²</td>
        <td>{floorPlans.status}</td>
        <td>{floorPlans.description}</td>
        <td>{floorPlans.company}</td>
      </tr>
    ))

    }
  </tbody>
</table>
</div>
    </>
    
  );
};

export default FloorPlanList;