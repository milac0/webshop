import React from 'react';
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import { Tooltip } from "@material-ui/core";

const AddToCart = () => {
    return (
        <Tooltip title="Add to Cart">
        <IconButton aria-label="Add to Cart">
          <AddIcon />
        </IconButton>
      </Tooltip>
    );
};

export default AddToCart;