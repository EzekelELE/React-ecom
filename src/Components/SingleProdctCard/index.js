import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import IconButton from "@mui/material/IconButton";
import "./index.css";
import Quantity from "../ProductQuantity";

export default function ImgMediaCard({
  allProducts,
  quantityChangeHandler,
  addToCartHandler,
}) {
  return (
    <div className={"productsWrapper"}>
      {allProducts.map(
        ({
          id,
          title,
          category,
          description,
          price,
          image,
          quantity,
          rating: { rate, count },
        }) => {
          return (
            <Card key={id} sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={image}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {title}
                </Typography>

                <Typography
                  className={"price"}
                  variant="body2"
                  color="text.secondary"
                >
                  {price + " $"}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {description}
                </Typography>
              </CardContent>
              <Quantity
                quantity={quantity}
                id={id}
                quantityChangeHandler={quantityChangeHandler}
              />
              <CardActions
                className={"buyButton"}
                onClick={(e) => {
                  addToCartHandler(e,id);
                }}
              >
                <IconButton
                  className={"buttonIcon"}
                  color="primary"
                  aria-label="add to shopping cart"
                >
                  <AddShoppingCartIcon />
                </IconButton>
              </CardActions>
            </Card>
          );
        }
      )}
    </div>
  );
}
