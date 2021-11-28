import React from "react";
import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import styled from "styled-components";

const Loading = styled.div`
  font-size: 18px;
  opacity: 0.5;
  font-weight: 500;
  margin-top: 10px;
`;

const GET_MOVIE = gql`
  query detail($id: Int!) {
    movie(id: $id) {
      id
      title
      medium_cover_image
      description_intro
    }
  }
`;

const Detail = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_MOVIE, {
    variables: { id: +id },
  });
  console.log(data);
  return (
    <div>
      {loading && <Loading>Loading...</Loading>}
      {!loading && data && <h1>{data.movie.title}</h1>}
    </div>
  );
};

export default Detail;
