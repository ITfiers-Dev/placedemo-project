import React from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import {
  HeaderStyle,
  CustomToolbar,
  Title,
  Search,
  SearchIconWrapper,
  StyledInputBase
} from "./styles";

const Headre = () => {
  return (
    <HeaderStyle position="static">
      <CustomToolbar>
        <Title variant="h5">Travel Advisor</Title>
        <div style={{ display: "flex" }}>
          <Title variant="h5">explore new places</Title>
          <Search>
            <SearchIconWrapper>
              <SearchRoundedIcon />
            </SearchIconWrapper>
            <StyledInputBase placeholder="Search..." />
          </Search>
        </div>
      </CustomToolbar>
    </HeaderStyle>
  );
};

export default Headre;
