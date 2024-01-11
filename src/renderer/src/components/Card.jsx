import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { getSavedProducts } from "../helpers/localStorage";

export default function ImgMediaCard({ item, onSave }) {
  const savedProducts = getSavedProducts();
  const isIncluded = savedProducts?.find(
    (_product) => _product?.id == item?.id
  );
  return (
    <Card
      style={{
        height: "100%",
        display: "flex",
        alignItems: "space-between",
        flexDirection: "column",
      }}
    >
      <CardMedia
        component="img"
        alt={item?.title}
        height="250"
        image={item?.thumbnail}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item?.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item?.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="error" onClick={onSave}>
          {isIncluded ? "Discard" : "Save"}
        </Button>
      </CardActions>
    </Card>
  );
}

ImgMediaCard.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
  onSave: PropTypes.func.isRequired,
};
