import React, { useState } from "react";
import "../App.css";
import {
  Input,
  Box,
  FormLabel,
  FormControl,
  Heading,
  Button,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/addReducer/action";

const initialState = {
  name: "",
  desc: "",
  price: "",
  image: "",
};

const Admin = () => {
  const [product, setProduct] = useState(initialState);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name);
    setProduct((prev) => {
      return { ...prev, [name]: name === "price" ? +value : value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(product);
    dispatch(addProduct(product));
    setProduct(initialState);
  };
  return (
    <div>
      <Box textAlign={"center"} margin="1rem">
        <Heading>Add New Product</Heading>
      </Box>
      <Box
        boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
        width="370px"
        margin="auto"
        padding="20px"
        paddingLeft="30px"
        marginTop="40px"
        lineHeight="40px"
      >
        <form className="form" onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel>Product Name</FormLabel>
            <Input
              width="250px"
              height="30px"
              mt={4}
              type="text"
              name="name"
              placeholder="Product Name"
              value={product.name}
              onChange={(e) => handleChange(e)}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Product Image</FormLabel>
            <Input
              width="250px"
              height="30px"
              mt={4}
              type="text"
              name="image"
              placeholder="Product Image"
              value={product.image}
              onChange={(e) => handleChange(e)}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Product Price</FormLabel>
            <Input
              width="250px"
              height="30px"
              mt={4}
              name="price"
              type="text"
              placeholder="Product Price"
              value={product.price}
              onChange={(e) => handleChange(e)}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Product Description</FormLabel>
            <Input
              width="250px"
              height="30px"
              mt={4}
              name="desc"
              type="text"
              placeholder="Product Description"
              value={product.desc}
              onChange={(e) => handleChange(e)}
            />
          </FormControl>

          <Button
            width="250px"
            height="30px"
            mt={4}
            border="none"
            type="submit"
            cursor="pointer"
          >
            Add Product
          </Button>
        </form>
      </Box>
    </div>
  );
};

export default Admin;
