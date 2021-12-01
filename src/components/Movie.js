import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  max-width: 300px;
  height: 300px;
`;

const Poster = styled.div`
  max-width: 100%;
  height: 100%;
  background-image: url(${props => props.bg});
  background-cover: cover;
  background-repeat: no-repeat;
  background-position: center center;
`;

const Movie = ({ id, coverImage }) => {
  return (
    <Container>
      <Link to={`/${id}`}>
        <Poster bg={coverImage} />
      </Link>
    </Container>
  );
};

export default Movie;
