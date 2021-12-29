import * as React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

function prod({ produs }) {
  return (
    <div>
      <div>
        {produs.map(
          ({
            id,
            title,
            price,
            description,
            category,
            image,
            rating: { rate },
          }) => {
            return (
              <div>
                <div>{id}</div>
                <div>{title}</div>
                <div>{price}</div>
                <div>{description}</div>
                <div>{category}</div>
                <div>{image}</div>
                <img src={image} />
                <div>{rate}</div>
                <Stack spacing={1}>
                  <Rating
                    name="half-rating"
                    defaultValue={2.5}
                    precision={0.5}
                  />
                  <Rating
                    name="half-rating-read"
                    defaultValue={rate}
                    precision={0.5}
                    readOnly
                  />
                </Stack>
                <div>{rate}</div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default prod;
