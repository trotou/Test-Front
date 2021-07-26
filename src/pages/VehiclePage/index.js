import { Button } from "@material-ui/core";
import React, { useState } from "react";
import CarForm from "../../components/Car";
import MotorcicleForm from "../../components/Motorcycle";

const VehiclePage = () => {
  const [change, setChange] = useState(false);

  return (
    <div>
      {change ? <MotorcicleForm /> : <CarForm />}

      <br />

      <Button variant="contained" onClick={() => setChange(!change)}>
        registrar {change ? "carro" : "moto"}
      </Button>
    </div>
  );
};

export default VehiclePage;
