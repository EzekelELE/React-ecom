import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import "./index.css";
export default function ProductCard({ products, addToCartHnadler }) {
  return (
    <div className="Product-rows">
      {console.log()}
      {products.map(
        ({
          description,
          category,
          image,
          id,
          price,
          title,
          rating: { rate, count },
        }) => {
          return (
            <Card sx={{ maxWidth: 345 }} key={id}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={image}
                  alt={title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  onClick={() => {
                    addToCartHnadler(id);
                  }}
                >
                  Buy
                </Button>
              </CardActions>
            </Card>
          );
        }
      )}
    </div>
  );
}
