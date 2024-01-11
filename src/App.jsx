// import { useState } from 'react'
import Grid from "@mui/material/Grid";
import CircularProgress from "@mui/material/CircularProgress";
import "./App.css";
import ImgMediaCard from "./components/Card";
import axios from "axios";
import { useQuery } from "react-query";
import SimpleSnackbar from "./components/Snackbar";
import { useState } from "react";
import { setSavedProducts } from "./helpers/localStorage";

const { VITE_BASE_URL: url } = import.meta.env;

function App() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const fetchingData = async () => {
    try {
      const response = await axios.get(`${url}`);
      return response?.data?.products;
    } catch (error) {
      // console.log(error);
    }
  };

  const handleSave = (item) => {
    setOpen(true);
    setSavedProducts(item, (message) => {
      setMessage(message);
    });
  };

  const {
    isLoading,
    error,
    data: products,
  } = useQuery("postData", fetchingData);

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <CircularProgress color="inherit" />
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ textAlign: "center" }}>
        <span>Terjadi kesalahan.</span>
      </div>
    );
  }

  return (
    <main style={{ marginTop: 20 }}>
      <Grid container spacing={2}>
        {products?.map((item, index) => {
          return (
            <Grid key={index} item md={3}>
              <ImgMediaCard item={item} onSave={() => handleSave(item)} />
            </Grid>
          );
        })}
      </Grid>
      <SimpleSnackbar
        open={open}
        message={message}
        onClose={() => {
          setOpen(false);
        }}
      />
    </main>
  );
}

export default App;
