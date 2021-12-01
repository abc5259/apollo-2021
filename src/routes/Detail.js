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

const Movie = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${props => props.bg});
  background-cover: contain;
  background-size: 100vw 100vh;
  background-repeat: no-repeat;
  opacity: 0.5;
`;

const GET_MOVIE = gql`
  query detail($id: Int!) {
    movie(id: $id) {
      title
      medium_cover_image
      language
      rating
      description_intro
    }
  }
`;

const Detail = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_MOVIE, {
    variables: { id: +id },
  });
  // const { title, medium_cover_image, language, rating, description_intro } =
  //   data.movie;
  return (
    <div>
      {loading && <Loading>Loading...</Loading>}
      {!loading && data && (
        <Movie bg={data.movie.medium_cover_image}>
          {
            <div>
              <h1>{data.movie.title}</h1>
              <h2>{data.movie.description_intro}</h2>
            </div>
          }
        </Movie>
      )}
    </div>
  );
};

export default Detail;
